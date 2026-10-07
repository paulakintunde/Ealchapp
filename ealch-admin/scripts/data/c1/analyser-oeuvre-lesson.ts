// c1.14.l1 « Analyser une œuvre » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE: a TEXT
// and a MOVE per act) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of
// C1-BUILD-LOG.md (decisions 1-39; the wave 5 brief sets the home).
// Structural models: b2.30 « Lire un texte littéraire »
// (`../b2/lire-litterature-*`) and the reviewed C1 workshop c1.13
// (`./references-historiques-*`). Skill CE.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   FROM REACTION TO ANALYSIS. Every act from 2 to 11 is built around ONE
//   ANCHOR TEXT (about 230 to 275 words, a real genre: a review, a ciné-club
//   handout, a radio column, a gallery wall text, « texte original écrit
//   pour la leçon ») and ONE MOVE, in the same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`;
//                          the first question is always « Devine le sens ».
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable`, `examples` or `focus`,
//                          linked to a sheet.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, a hidden listening, a
//                          dictation).
//     4. USE IT            « Pour ta critique », always the same groupDrill
//                          shape: a line of the final critique built with
//                          this act's move against the line a viewer without
//                          it would write.
//
//   then the act check (control pages, gated). Act 1 is the problem scene
//   and the recap; act 12 is the production act (the task and the closing
//   sections).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  « J’ai adoré » ne suffit   6  a reader's post (scene + reading) ·
//       pas                           reaction without analysis; recap of
//                                     b2.30 by trail position
//    2  De l’émotion aux moyens    6  two reviews of one film · impression,
//                                     observation, effect, judgement
//    3  Le cadre et le plan        6  a ciné-club handout (Akerman, 1975) ·
//                                     shot size, angle, static shot, frame
//    4  Champ et hors-champ        6  a radio column (Sembène, 1966) ·
//                                     champ, contrechamp, hors-champ
//    5  Le montage                 7  a dossier (Godard, 1960) · raccord,
//                                     faux raccord, plan-séquence, alterné
//    6  La bande-son               6  a radio column (Perrault and Brault,
//                                     1963) · in / added, voix off, silence
//    7  La composition             6  a gallery wall text (Seydou Keïta) ·
//                                     foreground, background, lines, void
//    8  La lumière et la touche    6  a guide's notebook (La Tour, Monet,
//                                     Magritte) · clair-obscur, touche, aplat
//    9  La musique et la scène     6  a radio arts slot (Ravel, Tremblay) ·
//                                     crescendo, orchestration, mise en
//                                     scène, scénographie, jeu
//   10  Peser le pour et le contre 7  an exhibition review · certes… mais,
//                                     si… en revanche, parti pris, verdict
//   11  La critique, un genre      6  an album review · hook, situating,
//                                     analysis, reservation, verdict;
//                                     divulgâcher; precise evaluation
//   12  Ta critique               11  the press notes of « Marée basse » ·
//                                     plan, scenario, TASK, quiz, review
//
//   TOTAL 79 missions, 12 acts (6,6,6,6,7,6,6,6,6,7,6,11). Corpus: 156
//   authored rows (.1200-.1373, in twelve act blocks with gaps) plus 19
//   reused rows (12 in seedPlusPacks, 7 Postgres-only legacy rows in
//   `DB_ONLY_ROWS`). 12 anchor readings, 3 hidden listenings, 3 dictations.
//   Quiz: 11 rounds of 8. Eleven error triggers, eleven drills, five
//   reference sheets, eleven terms. Chapter artwork:
//   `analyser-oeuvre-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Ton émotion est un indice : cherche dans l’œuvre ce qui la produit. »
//   EN: Your emotion is a clue: look in the work for what produces it.
//
//   ONE METAPHOR, THE BACK OF THE TAPESTRY: the front gives the effect, the
//   back shows the threads that make it. The emotion is kept: it tells you
//   which threads to follow. It is NOT « analysis kills the pleasure », and
//   NOT a checklist of terms: act 2 refuses a term without its effect.
//   Rejected candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    argued analysis of a work at C1 across the arts: the four steps
//           (impression, observation, effect, judgement); film language
//           (plan d’ensemble, plan moyen, gros plan, plongée, contre-plongée,
//           plan fixe, cadre, champ, contrechamp, hors-champ, montage,
//           raccord, faux raccord, plan-séquence, montage alterné,
//           bande-son, son in / ajouté, voix off, son direct); image
//           (composition, premier plan, arrière-plan, point de fuite, ligne
//           de force, perspective, clair-obscur, touche, aplat); music and
//           stage in outline (crescendo, orchestration, mise en scène,
//           scénographie, jeu); the critique genre and balanced evaluation.
//   QUOTES  b2.30’s reframe (act 1), imported from its corpus, never
//           retyped.
//   LEAVES  narrator, focalisation and the literary commentary to b2.30;
//           press framing (« le cadrage » as metaphor) to c1.24; irony to
//           c1.20; « le beau, le sublime » as headwords to c1.16; stylistic
//           figures to c1.19.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs. Natural,
//   unsimplified C1 French; English authored on every learner string (`en`,
//   or a final « EN: »), never on an answer. Every `say` is French.
//   Citations by trail position in French, never a raw id. Typographic ’ in
//   every authored French string. Invented outlets, people, places and works
//   only; real artists appear only through dated, sourced facts (corpus
//   §A.7); no work is quoted; no living politician. Images depict no
//   identifiable person and no real work. Mission answer slots are spread by
//   `balanceSlots()`; the quiz by `spreadSlots()`. Where two terms or two
//   wordings are both correct French, the lesson presents a precision
//   choice, never an error (wave 4 review lessons).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Seven legacy rows are Postgres-only (`DB_ONLY_ROWS`,
//      fr.c1.culture-profonde .014 .017 .019 .027 .037 .062 .118), five with
//      straight apostrophes, none with ipa. They need the decision 13
//      typography edit at the import. Keep them, or swap for authored rows?
//   2. Real works are described, never quoted (Akerman 1975, Sembène 1966,
//      Godard 1960, Perrault and Brault 1963, Keïta 1948-1962, La Tour,
//      Monet 1872, Magritte 1929, Borduas 1948, Ravel 1928, Tremblay 1968).
//      Every fact is in corpus §A.7 with its source. Approve the canon
//      balance (Belgium x2, Senegal, Mali, Québec x3, Switzerland via
//      Godard)?
//   3. Michel Tremblay is living; he is named once (act 9) as a fact of
//      theatre history, never quoted. Keep, or replace with a deceased
//      Québec playwright?
//   4. Rubric: six criteria, 20 points, as c1.13 and c1.24 (decision 14).
//      Keep?
//   5. Act 4 says « La Noire de… » is « souvent présenté comme » the first
//      sub-Saharan feature by an African director: hedged on purpose (other
//      claims exist). Acceptable?
//   6. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, DB_ONLY_ROWS, dicteeFor,
  ADORE_TEXT, DEUX_AVIS_TEXT, PLAN_TEXT, CHAMP_TEXT, MONTAGE_TEXT, SON_TEXT, COMPOSITION_TEXT,
  LUMIERE_TEXT, SCENE_TEXT, PESER_TEXT, GENRE_TEXT, MAREE_TEXT,
  B230_REFRAME, LITTERATURE_UNIT, PRESSE_UNIT, LITTERATURE_REF, PRESSE_REF, NEXT_REF,
} from './analyser-oeuvre-corpus.ts';
import { ANALYSER_OEUVRE_TERMS } from './analyser-oeuvre-terms.ts';

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
  if (!r) throw new Error(`c1.14: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.14: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.14: no authored respell on ${id}`);
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

/** THE « USE IT » BEAT: the act's one tool for the graded critique. */
function pourTaCritique(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta critique', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/** A trapDrill card whose correct sentence is a corpus row. */
const card = (promptLabel: string, promptSound: string, id: string, tip: string) =>
  ({ promptLabel, promptSound, fr: src(id).fr, ipa: ipaOf(id), tip });

const STEPS = (rule: string, cards: string) => [
  { label: 'La règle', kind: 'rule' as const, title: rule },
  { label: 'Six cartes', kind: 'cards' as const, title: cards },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases justes' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit phrases', gate: true },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — « J’AI ADORÉ » NE SUFFIT PAS
 *
 *  The problem: the learner's first review for a cultural magazine says
 *  only « j’ai adoré ». Then the recap of b2.30, by trail position, rows
 *  reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Ta première critique', frSub: 'L’Œil du dimanche, lundi matin',
  setting: { place: 'La rédaction de L’Œil du dimanche, avenue du Mont-Royal', city: 'Montréal', time: '10 h', ambience: 'des affiches de films, des piles de livres, un café qui refroidit' },
  beats: [
    { kind: 'narration', text: 'Lundi, 10 h, à la rédaction de L’Œil du dimanche, un magazine culturel de Montréal. Tu viens d’y entrer comme pigiste. On t’a confié ta première critique : « La Saison des verglas », un film québécois sorti vendredi.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Solange, la rédactrice en chef', fr: 'J’ai lu ton texte. Il est sincère, mais je ne sais toujours pas pourquoi le film est bon.', en: 'I read your piece. It is heartfelt, but I still do not know why the film is good.', respell: '[zhay LÜ tohⁿ TEKST | eel eh sehⁿ-SEHR | meh zhuh nuh seh too-zhoor pa poor-KWA luh feelm eh BOHⁿ]', stage: 'Elle a imprimé ton texte et souligné un seul mot : « adoré ».', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Parce que je l’ai adoré. La scène de la cuisine m’a donné des frissons.', en: 'Because I loved it. The kitchen scene gave me shivers.', respell: '[par-suh kuh zhuh lay a-do-RAY | la SENN duh la kwee-ZEEN ma do-NAY day free-SOHⁿ]', stage: 'Tu y repenses encore.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Solange', fr: 'Justement. Ces frissons, c’est le début de ta critique, pas sa conclusion.', en: 'Exactly. Those shivers are where your review starts, not where it ends.', respell: '[zhüss-tuh-MAHⁿ | say free-SOHⁿ | seh luh day-BÜ duh ta kree-TEEK | pa sa kohⁿ-klü-ZYOHⁿ]', stage: 'Elle te rend la feuille.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase écris-tu en tête de ta nouvelle version ?', size: 'lg',
      options: [
        { fr: src(E(1200)).fr, respell: rsOf(E(1200)), en: src(E(1200)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1201)).fr, respell: rsOf(E(1201)), en: src(E(1201)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Solange hoche la tête : « Voilà un programme. Maintenant, montre-moi comment il y parvient. » Ta critique a désormais une direction.',
        breaks: 'Solange soupire : « Le lecteur le sait déjà, c’est écrit dans les étoiles. Il veut savoir pourquoi. » Ta critique tourne en rond.',
      },
    },
    {
      kind: 'break', heading: 'L’émotion n’est pas un argument',
      body: `${Cap(LITTERATURE_REF)} t’a appris à lire une page littéraire. Ici, l’émotion reste le point de départ : il faut trouver, dans le film, ce qui la produit. EN: Keep the emotion, then find what produces it.`,
      wrong: { fr: src(E(1200)).fr, ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en },
      right: { fr: src(E(1201)).fr, ipa: ipaOf(E(1201)), respell: rsOf(E(1201)), en: src(E(1201)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à remonter de ce que tu ressens aux moyens de l’œuvre : le plan, le montage, le son, la composition, la lumière, la musique, la scène. À la fin, tu écriras une critique qui pèse les forces et les faiblesses d’un film.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['impression', 'moyens'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Passer de l’impression à l’analyse', s: 'Acte 2 : impression, observation, effet, jugement' },
    { t: 'Parler le langage du cinéma', s: 'Actes 3 à 6 : le plan, le hors-champ, le montage, la bande-son' },
    { t: 'Décrire une image, une musique, une scène', s: 'Actes 7 à 9 : la composition, la lumière, la musique et le théâtre' },
    { t: 'Écrire une critique qui pèse', s: 'Actes 10 à 12 : de 250 à 400 mots sur un film' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Mon coup de cœur de l’automne', frSub: 'L’Œil du dimanche, espace des lecteurs',
  text: ADORE_TEXT,
  glossary: [
    { word: 'coincée', en: 'stuck, trapped', note: 'Qui ne peut pas sortir.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « mon coup de cœur de l’automne ». Que veut dire « un coup de cœur » ?', a: 'Une œuvre qu’on a aimée tout de suite, avec enthousiasme.' },
    { q: 'Que sait-on du film après cette lecture ?', a: 'Presque rien : une famille de la Beauce coincée chez elle pendant une tempête de verglas, une scène dans la cuisine vers la fin.' },
    { q: 'Relève les adjectifs que Théo emploie pour juger le film.', a: 'Magnifiques, géniaux, superbe, parfait, le meilleur : tous disent qu’il a aimé, aucun ne dit pourquoi.' },
    { q: 'Pourquoi la scène de la cuisine l’a-t-elle touché ?', a: 'Il ne le dit pas : « je ne saurais pas dire pourquoi ». C’est exactement ce qu’une analyse devrait chercher.' },
    { q: 'Comment Théo répond-il à ceux qui trouvaient le temps long ?', a: 'Par son seul goût (« Pas moi ») ; il ne discute pas la lenteur, il ne dit pas si elle a un sens.' },
  ],
  audio: REC('rec-c1-14-adore'), say: REFRAME, terms: ['impression', 'critique'],
};

/** The recap: b2.30 by trail position, rows reused by id. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Une leçon du B2, un rappel',
  groups: [
    grp(Cap(LITTERATURE_REF), [
      it('fr.b2.litterature.1407', 'la voix'),
      it('fr.b2.litterature.1408', 'le regard'),
      it('fr.b2.litterature.1409', 'les mots'),
    ], chk('Au B2, devant une page littéraire, tu posais trois questions. Laquelle ne sert pas devant un tableau ?', ['Qui raconte cette histoire ?', 'Avec quels moyens l’œuvre produit-elle cet effet ?'], 0,
      `${Cap(LITTERATURE_REF)} disait : « ${B230_REFRAME} » Un tableau n’a pas de narrateur ; la question des moyens, elle, vaut partout. EN: no narrator in a painting; the means always matter.`)),
    grp('Ce qu’elle t’a déjà appris', [
      it('fr.b2.litterature.1572', 'montrer pourquoi'),
      it('fr.b2.litterature.1562', 'analyser, pas raconter'),
      it('fr.b2.litterature.1498', 'un effet se prouve'),
    ], chk('Ces trois phrases du B2 parlent d’un texte. Valent-elles pour un film ?', ['Oui : on montre pourquoi, par les moyens de l’œuvre.', 'Non : un film se juge au goût.'], 0,
      'Le principe reste ; seuls les moyens changent : un plan, une coupe, un son. EN: same principle, other means.')),
    ctl('Ce qui est nouveau', 'Cette leçon ajoute surtout...', ['le langage du cinéma, de la peinture, de la musique et de la scène', 'le narrateur et la focalisation'], 0,
      'Le narrateur et la focalisation sont acquis ; ici, on nomme les moyens des autres arts. EN: the means of the other arts.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['moyens', 'effet'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Tu écris une critique pour un magazine', fr: src(E(1202)).fr, en: src(E(1202)).en },
    { situation: 'Un ami te demande s’il doit voir le film', fr: src(E(1205)).fr, en: src(E(1205)).en },
    { situation: 'Au TCF ou au TEF, un texte qui juge une œuvre', fr: src(E(1210)).fr, en: src(E(1210)).en },
    { situation: 'Tu présentes une exposition à des collègues', fr: src(E(1207)).fr, en: src(E(1207)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['moyens', 'critique'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le texte de Théo', 'Que manque-t-il au texte de Théo ?', ['de l’enthousiasme', 'les raisons de son enthousiasme', 'un résumé de l’histoire'], 1,
    'Il dit qu’il a aimé, jamais ce qui, dans le film, l’a touché. EN: the reasons are missing.'),
  ctl('L’émotion', 'Dans une critique, ton émotion est...', ['un point de départ', 'une preuve'], 0,
    'Elle t’indique où chercher ; les moyens de l’œuvre font la preuve. EN: a starting point.'),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['un résumé de film', 'une critique argumentée d’un film', 'une biographie de cinéaste'], 1,
    'De 250 à 400 mots : situer, analyser les moyens, peser, juger. EN: a reasoned review.'),
], ['impression', 'critique']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: '« J’ai adoré » ne suffit pas',
    opener: {
      line: 'Ta première critique dit seulement « j’ai adoré » : ici tu découvres que ton émotion est un indice, pas encore une analyse. EN: Your first review only says I loved it: here you find that your emotion is a clue, not yet an analysis.',
      imageRef: 'lessons/analyser-oeuvre/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’une critique part de ce que tu ressens, puis cherche dans l’œuvre ce qui le produit. EN: You know a review starts from what you feel, then looks in the work for what produces it.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — DE L’ÉMOTION AUX MOYENS
 *
 *  TEXT: two reviews of the same film. MOVE: the four steps (impression,
 *  observation, effect, judgement).
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Deux regards sur un film', frSub: 'L’Œil du dimanche',
  text: DEUX_AVIS_TEXT,
  glossary: [
    { word: 'épouse', en: 'matches, follows the shape of', note: 'Épouser une forme : la suivre exactement.' },
  ],
  questions: [
    { q: 'Devine le sens : « tout ce qui s’est dit, ou tu, pendant la tempête ». Que veut dire « tu » ici ?', a: 'Le participe passé de « taire » : ce qui n’a pas été dit, ce qu’on a gardé pour soi.' },
    { q: 'Qu’apprend-on du film dans le premier avis ?', a: 'Une impression seulement : beau, lent, une fin bouleversante. Aucune raison.' },
    { q: 'Quelle observation précise Mireille Aubry fait-elle sur la dernière scène ?', a: 'Elle dure quatre minutes, sans un mot ; la mère réchauffe les mains de son fils au-dessus d’une casserole.' },
    { q: 'Quel effet attribue-t-elle à ce silence ?', a: 'Il oblige le spectateur à imaginer ce qui s’est dit, ou tu, pendant la tempête ; c’est ce qui rend la fin si forte.' },
    { q: 'Comment traite-t-elle la lenteur, que le premier avis se contente de noter ?', a: 'Elle l’accorde (« n’auront pas tort »), puis lui donne un sens : le rythme épouse l’ennui et l’angoisse des personnages.' },
    { q: 'Quel reproche fait-elle au film ?', a: 'Une musique de piano trop présente au milieu, qui souligne ce que les visages disaient déjà.' },
  ],
  audio: REC('rec-c1-14-deux-avis'), say: REFRAME, terms: ['impression', 'effet', 'jugement'],
};

const A2_ETAPES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-etapes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-methode',
  title: 'Quatre temps pour une analyse', frSub: 'De l’impression au jugement',
  hint: 'Quatre cartes, dans l’ordre. Chaque temps s’appuie sur le précédent.',
  audio: REC('rec-c1-14-etapes'), say: REFRAME, terms: ['impression', 'effet', 'jugement'],
  cards: [
    { head: 'L’impression', label: 'ce que tu ressens', fr: src(E(1215)).fr, sub: rsOf(E(1215)),
      body: 'Elle est légitime et elle te guide. Mais seule, elle ne dit rien de l’œuvre : le lecteur ne peut ni la vérifier ni la discuter. EN: legitimate, but it says nothing about the work.' },
    { head: 'L’observation', label: 'ce que tu vois ou entends', fr: src(E(1216)).fr, sub: rsOf(E(1216)),
      body: 'Un fait précis, que tout spectateur peut vérifier : une durée, un plan, un son, une couleur. EN: a precise fact anyone can check.' },
    { head: 'L’effet', label: 'ce que le moyen produit', fr: src(E(1217)).fr, sub: rsOf(E(1217)),
      body: 'Tu relies l’observation à ce qu’elle fait au spectateur. C’est le cœur de l’analyse. EN: link the fact to what it does.' },
    { head: 'Le jugement', label: 'ton évaluation, fondée', fr: src(E(1218)).fr, sub: rsOf(E(1218)),
      body: 'Ton avis revient, mais appuyé sur ce qui précède. Le lecteur peut ne pas partager ton goût ; il peut suivre ton raisonnement. EN: your verdict, now grounded.' },
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-trier', layer: 'core', size: 'lg',
  title: 'Impression, observation ou effet', frSub: 'Des phrases sur d’autres œuvres',
  groups: [
    grp('Trois phrases sur un concert', [
      free('Le concert m’a ennuyé.', 'The concert bored me.', 'une impression'),
      free('Le pianiste joue les trois premiers morceaux sans aucune pause.', 'The pianist plays the first three pieces without any pause.', 'une observation'),
      free('Cet enchaînement sans pause empêche le public de reprendre son souffle.', 'This unbroken sequence stops the audience from catching its breath.', 'un effet'),
    ], chk('« Le pianiste joue les trois premiers morceaux sans aucune pause. » C’est...', ['une impression', 'une observation', 'un jugement'], 1,
      'Un fait que tout spectateur peut vérifier. EN: a checkable fact.')),
    grp('Le lien qui manque', [
      it(E(1221), 'un effet nommé'),
      it(E(1226), 'la règle'),
    ], chk('« Ce plan produit un effet de malaise. » Pour convaincre, tu ajoutes...', ['ce qui, dans le plan, crée ce malaise', 'que tu as eu peur'], 0,
      'Un effet renvoie à un moyen : un cadre trop serré, un silence, une lumière froide. EN: name the means.')),
    ctl('Le jugement', '« C’est ce silence qui rend la fin si forte. » Cette phrase est...', ['un jugement appuyé sur une observation', 'une impression sans raison'], 0,
      'Le jugement désigne le moyen qui le fonde. EN: the verdict points to its means.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['impression', 'effet'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases qui jugent sans analyser',
  errors: [
    { wrong: 'La fin est magnifique.', right: 'La dernière scène, quatre minutes sans un mot, laisse le spectateur tout imaginer.',
      why: 'Normal : « magnifique » dit ton plaisir en un mot. Le lecteur a besoin du fait et de l’effet. EN: give the fact and the effect.' },
    { wrong: 'Le film est lent.', right: 'Le rythme, volontairement lent, épouse l’ennui du personnage.',
      why: 'La lenteur est une observation, pas encore un reproche. Demande-toi ce qu’elle produit. EN: ask what the slowness does.' },
    { wrong: 'La musique est superbe.', right: 'La musique de piano, trop présente, souligne ce que les visages disaient déjà.',
      why: 'On loue souvent la musique en bloc. Dis ce qu’elle fait à la scène, même quand c’est un défaut. EN: say what it does.' },
    { wrong: 'Les acteurs sont géniaux.', right: 'La comédienne joue presque sans bouger, et chaque geste prend du poids.',
      why: 'Un éloge général ne s’argumente pas. Un jeu se décrit : gestes, voix, silences. EN: describe the acting.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['impression', 'jugement'],
};

const A2_CRITIQUE = pourTaCritique('a2-critique', 'Les quatre temps', [
  grp('Deux phrases sur la fin d’un film', [
    free('J’ai trouvé la fin magnifique, vraiment.', 'I found the ending magnificent, really.', 'une impression, répétée'),
    free('La fin m’a bouleversé : quatre minutes sans un mot, qui obligent à imaginer ce que les personnages taisent.', 'The ending overwhelmed me: four minutes without a word, which force you to imagine what the characters keep quiet.', 'impression, observation, effet'),
  ], chk('Laquelle sert une critique ?', ['la première', 'la seconde'], 1,
    'Elle garde l’émotion et la fonde sur un fait et un effet. EN: emotion, fact, effect.')),
  grp('La phrase de ta critique', [
    it(E(1224), 'partir de ce qui frappe'),
    it(E(1222), 'relier choix et effet'),
  ], chk('Tu veux dire que la fin est réussie. Tu écris...', ['« un final saisissant, grâce à ce silence »', '« une fin trop bien »'], 0,
    'Un adjectif précis, et la raison qui le justifie. EN: a precise word and its reason.')),
], ['effet', 'jugement']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’ordre', 'Dans quel ordre avances-tu ?', ['jugement, effet, observation, impression', 'impression, observation, effet, jugement'], 1,
    'On part de ce qu’on ressent et on finit par juger, preuves à l’appui. EN: impression first, verdict last.'),
  ctl('L’observation', 'Laquelle de ces phrases est une observation ?', ['La scène dure quatre minutes.', 'La scène est sublime.', 'La scène m’a ému.'], 0,
    'Une durée se vérifie. EN: a duration can be checked.'),
  ctl('Le défaut', 'Mireille Aubry accorde que le film est lent. Elle...', ['condamne le film', 'donne un sens à cette lenteur'], 1,
    'Elle accorde le fait, puis montre ce qu’il produit. EN: she grants it, then explains it.'),
], ['impression', 'jugement']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'De l’émotion aux moyens',
    opener: {
      line: 'Deux spectateurs, le même film, deux avis : ici tu passes de ce que tu ressens à ce que l’œuvre fait. EN: Two viewers, one film, two reviews: here you move from what you feel to what the work does.',
      imageRef: 'lessons/analyser-oeuvre/act02.jpg',
    },
    sections: [],
    milestone: 'Tu avances en quatre temps : l’impression, l’observation, l’effet, puis le jugement. EN: You work in four steps: impression, observation, effect, then judgement.',
    estScreens: 34, restPoints: ['a2-etapes'],
  },
  sections: [A2_LECTURE, A2_ETAPES, A2_TRIER, A2_ERREURS, A2_CRITIQUE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE CADRE ET LE PLAN
 *
 *  TEXT: a ciné-club handout on Akerman's 1975 film. MOVE: name the shot
 *  size, the angle and the frame, then their effect.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Regarder un plan', frSub: 'Ciné-club du Plateau',
  text: PLAN_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « à égalité ». Que veut dire « regarder chaque geste à égalité » ?', a: 'Sans hiérarchie : aucun geste n’est mis en avant plus qu’un autre.' },
    { q: 'Qu’est-ce qui rend ce film singulier, selon la fiche ?', a: 'La façon de filmer : une caméra fixe, de face, à hauteur du regard, des plans longs, un cadre qui ne bouge pas.' },
    { q: 'Pourquoi l’absence de gros plan compte-t-elle ?', a: 'Rien ne dit au spectateur quoi ressentir : il regarde tout de la même façon, et le moindre écart devient un événement.' },
    { q: 'Que s’est-il passé en 2022 ?', a: 'Un sondage de critiques de Sight and Sound l’a placé premier ; c’était la première fois pour un film réalisé par une femme.' },
    { q: 'Quelles sont les trois questions à poser à un plan ?', a: 'Sa valeur (plan d’ensemble, plan moyen, gros plan), l’angle de la caméra, et ce que le cadre laisse de côté.' },
    { q: 'D’où vient, selon la fiche, le mot « cadrage » qu’on emploie pour un article ?', a: 'Du cinéma : cadrer, c’est choisir ce qu’on voit, et donc ce qu’on ne voit pas.' },
  ],
  audio: REC('rec-c1-14-plan'), say: REFRAME, terms: ['plan', 'effet'],
};

const A3_PLANS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-plans', layer: 'core', sheetId: 'sheet-cinema',
  title: 'Six façons de filmer',
  cols: ['Le plan', 'Ce qu’il montre', 'Un effet fréquent'],
  rows: [
    { cells: ['un plan d’ensemble', 'un lieu, des personnages petits', 'situer, perdre'], say: src(E(1230)).fr,
      detail: { title: 'Le plan d’ensemble', body: 'Le décor domine. On l’emploie pour situer, ou pour montrer un personnage perdu dans son monde. EN: the setting dominates.', say: src(E(1236)).fr } },
    { cells: ['un plan moyen', 'le corps entier', 'montrer l’action'], say: src(E(1231)).fr,
      detail: { title: 'Le plan moyen', body: 'Le personnage en pied : on voit ses gestes et ses déplacements. EN: the whole figure.', say: 'Le plan moyen montre la mère qui va et vient dans la cuisine.' } },
    { cells: ['un gros plan', 'un visage, un objet', 'isoler, insister'], say: src(E(1232)).fr,
      detail: { title: 'Le gros plan', body: 'Il coupe le reste du monde et impose un détail. Employé partout, il perd sa force. EN: it imposes a detail.', say: src(E(1237)).fr } },
    { cells: ['une plongée', 'vu d’en haut', 'souvent écraser'], say: src(E(1233)).fr,
      detail: { title: 'La plongée', body: 'La caméra regarde d’en haut. Effet fréquent, jamais automatique : le personnage paraît plus petit, plus vulnérable. EN: often makes the figure look small.', say: src(E(1238)).fr } },
    { cells: ['une contre-plongée', 'vu d’en bas', 'souvent grandir'], say: src(E(1234)).fr,
      detail: { title: 'La contre-plongée', body: 'La caméra regarde d’en bas. Le personnage paraît souvent plus grand, plus menaçant. EN: often makes the figure look bigger.', say: src(E(1239)).fr } },
    { cells: ['un plan fixe', 'la caméra ne bouge pas', 'faire durer, observer'], say: src(E(1235)).fr,
      detail: { title: 'Le plan fixe', body: 'Le cadre reste immobile ; c’est le personnage qui entre et qui sort. Le spectateur observe. EN: the frame stays still.', say: src(E(1240)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['plan'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trier', layer: 'core', size: 'lg',
  title: 'Quel plan pour quelle intention', frSub: 'Trois scènes à tourner',
  groups: [
    grp('Trois intentions', [
      free('Montrer une randonneuse minuscule au milieu d’une montagne enneigée.', 'Show a tiny hiker in the middle of a snowy mountain.', 'situer, perdre'),
      free('Faire sentir qu’une main tremble en signant un contrat.', 'Make us feel a hand trembling as it signs a contract.', 'isoler un détail'),
      free('Laisser une cuisine vide plusieurs secondes après le départ du personnage.', 'Leave a kitchen empty for several seconds after the character has gone.', 'faire durer'),
    ], chk('Pour la main qui tremble, tu choisis...', ['un plan d’ensemble', 'un gros plan', 'une contre-plongée'], 1,
      'Le gros plan isole le détail et oblige à le regarder. EN: a close-up isolates it.')),
    grp('Le cadre choisit', [
      it(E(1241), 'ce qu’on voit, ce qu’on ne voit pas'),
      it('fr.c1.strategies-de-comprehension.2152', `${PRESSE_REF}, au sens figuré`),
    ], chk(`${Cap(PRESSE_REF)} parlait du cadrage d’un article. Ici, le mot a...`, ['son sens propre, celui du cinéma', 'un sens nouveau, sans lien'], 0,
      'La presse a emprunté l’image au cinéma : cadrer, c’est choisir. EN: the press borrowed it from film.')),
    ctl('L’effet', 'Une contre-plongée produit toujours un effet de puissance.', ['Vrai, sans exception', 'Souvent, mais tout dépend du contexte'], 1,
      'Un angle a des effets fréquents, pas des effets obligés : tu décris celui que tu observes. EN: frequent, never automatic.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['plan', 'effet'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true, sheetId: 'sheet-cinema',
  title: 'Six confusions de vocabulaire', frSub: 'Le plan, la scène, le cadre',
  rule: {
    title: 'Un mot juste, puis son effet',
    body: 'Le plan va d’une coupe à l’autre ; la scène, d’un lieu ou d’un moment à l’autre ; le cadre, ce sont les bords de l’image. Nomme juste, puis dis l’effet. EN: shot, scene and frame are three different things.',
  },
  cards: [
    card('le plan pris pour la scène', 'Ce plan se passe dans la cuisine et dure vingt minutes, avec plusieurs coupes.', E(1243), 'Avec des coupes, ce sont plusieurs plans dans une même scène. EN: several shots, one scene.'),
    card('la plongée inversée', 'La caméra est en plongée : on voit le personnage d’en bas.', E(1238), 'Plongée : d’en haut. Contre-plongée : d’en bas. EN: plongée is from above.'),
    card('un effet donné pour une loi', 'En contre-plongée, un personnage est forcément un tyran.', E(1239), 'Un angle a des effets fréquents ; décris celui de cette scène. EN: frequent, not fixed.'),
    card('le gros plan mal décrit', 'Le gros plan montre toute la rue et les passants.', E(1237), 'Toute la rue, c’est un plan d’ensemble. EN: that is a wide shot.'),
    card('le plan fixe confondu', 'Le plan fixe suit le personnage dans l’escalier.', E(1240), 'Si la caméra suit, elle bouge : ce n’est plus un plan fixe. EN: a moving camera is not static.'),
    card('le cadre oublié', 'Ce qu’on ne voit pas n’a aucune importance.', E(1241), 'Cadrer, c’est aussi exclure. EN: framing also leaves out.'),
  ],
  drill: [
    { promptSay: 'Une caméra qui regarde d’en haut filme en ... .', opts: ['plongée', 'contre-plongée'], correct: 0 },
    { promptSay: 'Pour isoler un visage, on choisit un ... .', opts: ['plan d’ensemble', 'gros plan', 'plan moyen'], correct: 1 },
    { promptSay: 'Le personnage en pied, c’est un plan ... .', opts: ['moyen', 'fixe'], correct: 0 },
    { promptSay: 'Quand la caméra ne bouge pas, on parle de plan ... .', opts: ['large', 'fixe', 'serré'], correct: 1 },
    { promptSay: 'Le ... désigne les bords de l’image.', opts: ['cadre', 'montage'], correct: 0 },
    { promptSay: 'Une scène peut contenir plusieurs ... .', opts: ['plans', 'cadres'], correct: 0 },
    { promptSay: 'Filmé d’en bas, le personnage paraît souvent plus ... .', opts: ['petit', 'grand'], correct: 1 },
    { promptSay: 'Le plan d’ensemble sert souvent à ... le personnage.', opts: ['isoler', 'situer', 'cacher'], correct: 1 },
  ],
  steps: STEPS('Un mot juste, puis son effet', 'Six confusions'),
  audio: REC('rec-c1-14-piege-plans'), say: REFRAME, terms: ['plan'],
};

const A3_CRITIQUE = pourTaCritique('a3-critique', 'Nommer le plan', [
  grp('Deux phrases sur le même film', [
    free('Les images sont belles et bien filmées.', 'The images are beautiful and well shot.', 'un éloge vague'),
    free('La caméra reste fixe, à hauteur du regard : nous regardons chaque geste sans qu’on nous dise quoi en penser.', 'The camera stays still, at eye level: we watch every gesture without being told what to think of it.', 'le plan, puis l’effet'),
  ], chk('Laquelle sert une critique ?', ['la première', 'la seconde'], 1,
    'Elle nomme le choix de filmer et dit ce qu’il produit. EN: the choice and its effect.')),
  grp('La phrase de ta critique', [
    it(E(1236), 'un plan qui situe'),
    it(E(1237), 'un plan qui isole'),
  ], chk('Dans « Marée basse », les plans sont fixes et larges. Tu écris...', ['« les plans fixes laissent le temps au deuil »', '« les plans sont jolis »'], 0,
    'Le plan, puis son effet sur le spectateur. EN: the shot, then its effect.')),
], ['plan', 'effet']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La valeur', 'Un visage qui remplit l’écran, c’est...', ['un plan d’ensemble', 'un gros plan', 'un plan moyen'], 1,
    'Le gros plan isole un visage ou un objet. EN: a close-up.'),
  ctl('L’angle', 'Une caméra placée en bas, tournée vers le haut, filme...', ['en plongée', 'en contre-plongée'], 1,
    'Contre-plongée : d’en bas. EN: from below.'),
  ctl('Le cadre', 'Cadrer, c’est...', ['choisir ce qu’on voit, et donc ce qu’on ne voit pas', 'mettre le film dans l’ordre'], 0,
    'L’ordre des plans, c’est le montage, à l’acte 5. EN: ordering shots is editing.'),
], ['plan']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le cadre et le plan',
    opener: {
      line: 'Une caméra qui ne bouge jamais pendant trois heures : ici tu apprends à nommer un plan et à dire ce qu’il fait. EN: A camera that never moves for three hours: here you learn to name a shot and say what it does.',
      imageRef: 'lessons/analyser-oeuvre/act03.jpg',
    },
    sections: [],
    milestone: 'Tu nommes la valeur d’un plan, son angle et son cadre, puis leur effet. EN: You name a shot’s size, angle and frame, then their effect.',
    estScreens: 36, restPoints: ['a3-plans', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_PLANS, A3_TRIER, A3_PIEGE, A3_CRITIQUE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — CHAMP, CONTRECHAMP, HORS-CHAMP
 *
 *  TEXT: a radio column on what the frame leaves out (Sembène, 1966). MOVE:
 *  notice the missing reverse shot and the off-screen space, and say what
 *  their absence produces.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Ce qu’on ne voit pas', frSub: 'Radio Passerelle',
  text: CHAMP_TEXT,
  glossary: [
    { word: 'par bribes', en: 'in snatches, in fragments', note: 'Par petits morceaux, de façon incomplète.' },
  ],
  questions: [
    { q: 'Devine le sens : « le monde extérieur reste au bord de l’image ». Que veut dire cette expression ?', a: 'On le devine sans le voir : il est présent, mais hors du cadre.' },
    { q: 'Comment filme-t-on d’habitude une conversation ?', a: 'Par un champ-contrechamp : un plan sur celle qui parle, puis un plan sur celui qui répond.' },
    { q: 'Que se passe-t-il dans la scène du téléphone ?', a: 'Le contrechamp ne vient jamais : on reste sur la mère, la voix du mari arrive par bribes, et son absence devient le sujet.' },
    { q: 'Pourquoi la caméra ne montre-t-elle pas la grange ?', a: 'Le cri reste hors champ : on ne sait pas ce qui s’est passé, et c’est l’imagination du spectateur qui travaille.' },
    { q: 'Que dit le chroniqueur de « La Noire de… » ?', a: 'Réalisé en 1966 par Ousmane Sembène, souvent présenté comme le premier long métrage d’un cinéaste d’Afrique subsaharienne ; l’héroïne est enfermée dans un appartement, le monde reste au bord de l’image.' },
  ],
  audio: REC('rec-c1-14-champ'), say: REFRAME, terms: ['horschamp', 'effet'],
};

const A4_CHAMP: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-champ', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-cinema',
  title: 'Ce que le cadre montre, ce qu’il garde dehors', frSub: 'Champ, contrechamp, hors-champ',
  hint: 'Quatre cartes. La dernière parle de ce qu’on ne voit pas.',
  audio: REC('rec-c1-14-champ-cartes'), say: REFRAME, terms: ['horschamp'],
  cards: [
    { head: 'Le champ', label: 'dans le cadre', fr: src(E(1245)).fr, sub: rsOf(E(1245)),
      body: 'Tout ce que l’image montre. On dit qu’un objet est « dans le champ » ou qu’il en sort. EN: what the image shows.' },
    { head: 'Le contrechamp', label: 'en face', fr: src(E(1248)).fr, sub: rsOf(E(1248)),
      body: 'Le plan pris dans la direction opposée. Le champ-contrechamp alterne deux personnages qui se font face. EN: the reverse angle.' },
    { head: 'Le contrechamp refusé', label: 'quand il manque', fr: src(E(1252)).fr, sub: rsOf(E(1252)),
      body: 'Si le film ne montre jamais celui qui répond, son absence pèse sur la scène. EN: the missing reverse shot becomes the subject.' },
    { head: 'Le hors-champ', label: 'autour du cadre', fr: src(E(1250)).fr, sub: rsOf(E(1250)),
      body: 'Ce qui existe sans être vu : une voix, un bruit, une porte fermée. Le spectateur l’imagine. EN: off-screen space, heard or guessed.' },
  ],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Une scène racontée à la radio', frSub: 'Une seule écoute, huit phrases',
  lines: [ln(E(1248)), ln(E(1249)), ln(E(1253)), ln(E(1250)), ln(E(1251)), ln(E(1257)), ln(E(1255)), ln(E(1256))],
  questions: [
    { q: 'Dans la scène décrite, qui voit-on ?', opts: ['celui qui parle', 'celle qui écoute'], correct: 1,
      why: '« On ne voit jamais celui qui parle, seulement celle qui écoute. » EN: only the listener is seen.' },
    { q: 'D’où vient le cri ?', opts: ['du champ', 'du hors-champ', 'de la musique ajoutée'], correct: 1,
      why: 'Il vient de l’extérieur du cadre, et on ne verra jamais d’où. EN: from off screen.' },
    { q: 'Que se passe-t-il derrière la porte fermée ?', opts: ['On le voit ensuite.', 'Tout se joue sans être montré.'], correct: 1,
      why: '« Tout se joue derrière » : c’est le hors-champ. EN: it happens unseen.' },
    { q: 'Où la jeune femme suit-elle ses employeurs ?', opts: ['de Dakar à Antibes', 'de Bruxelles à Dakar', 'de Dakar à Paris'], correct: 0,
      why: 'C’est l’histoire de « La Noire de… » (1966). EN: Dakar to Antibes.' },
    { q: 'Que retient la sixième phrase ?', opts: ['Ce que l’image cache compte autant que ce qu’elle montre.', 'Il faut tout montrer.'], correct: 0,
      why: 'C’est la leçon de l’acte. EN: what is hidden counts too.' },
  ],
  audio: REC('rec-c1-14-ecoute-champ'), say: REFRAME, terms: ['horschamp'],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-trier', layer: 'core', size: 'lg',
  title: 'Dans le cadre ou autour', frSub: 'Quatre détails de films',
  groups: [
    grp('Quatre détails', [
      free('On entend une sirène qui approche, mais la rue reste vide à l’image.', 'We hear a siren approaching, but the street stays empty on screen.', 'entendu, pas vu'),
      free('Le père parle ; la caméra reste sur le visage de sa fille.', 'The father speaks; the camera stays on his daughter’s face.', 'un contrechamp refusé'),
      free('Les deux amies se parlent, chacune filmée de face, tour à tour.', 'The two friends talk, each filmed from the front, in turn.', 'l’alternance classique'),
    ], chk('La sirène qu’on entend sans voir la voiture vient...', ['du champ', 'du hors-champ'], 1,
      'Un son dont la source reste hors du cadre. EN: off-screen sound.')),
    grp('Un regard qui s’attarde', [
      it('fr.c1.culture-profonde.027', 'un critique décrit la caméra'),
      it(E(1251), 'ce que fait le hors-champ'),
    ], chk('« La caméra s’attarde sur les visages. » Le critique décrit...', ['un choix de cadre et de durée', 'le scénario'], 0,
      'Il observe ce que la caméra montre et combien de temps. EN: framing and duration.')),
    ctl('L’absence', 'Un film ne montre jamais le mari au téléphone. C’est...', ['forcément une erreur de tournage', 'souvent un choix qui fait de l’absence un sujet'], 1,
      'Le contrechamp refusé est un moyen ; dis ce qu’il produit. EN: a deliberate means.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['horschamp', 'effet'],
};

const A4_CRITIQUE = pourTaCritique('a4-critique', 'Ce que le film garde dehors', [
  grp('Deux phrases sur « Marée basse »', [
    free('On ne voit pas le père, c’est dommage.', 'We do not see the father, which is a pity.', 'l’absence prise pour un manque'),
    free('Le père reste hors champ : on n’entend que sa voix, et il devient d’autant plus présent.', 'The father stays off screen: we only hear his voice, and he becomes all the more present.', 'le hors-champ et son effet'),
  ], chk('Laquelle sert une critique ?', ['la première', 'la seconde'], 1,
    'Elle nomme le moyen et dit ce qu’il produit. EN: the means and its effect.')),
  grp('La phrase de ta critique', [
    it(E(1252), 'le contrechamp absent'),
    it(E(1257), 'ce que l’image cache'),
  ], chk('Une scène de dispute est filmée sur un seul personnage. Tu écris...', ['« l’autre reste hors champ, et sa colère n’existe que par sa voix »', '« le film a oublié l’autre personnage »'], 0,
    'Le hors-champ est un choix ; tu dis ce qu’il fait. EN: a choice with an effect.')),
], ['horschamp', 'effet']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le contrechamp', 'Le contrechamp, c’est...', ['le plan pris dans la direction opposée', 'un plan qui montre tout le décor'], 0,
    'Il montre ce qui fait face au plan précédent. EN: the reverse angle.'),
  ctl('Le hors-champ', 'Un bruit dont on ne voit pas la source vient...', ['du hors-champ', 'du gros plan', 'du montage'], 0,
    'Hors du cadre, mais présent. EN: off screen.'),
  ctl('Sembène', '« La Noire de… » est réalisé en...', ['1966', '1995'], 0,
    'En 1966, par Ousmane Sembène. EN: 1966.'),
], ['horschamp']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Champ et hors-champ',
    opener: {
      line: 'Un mari qu’on n’aperçoit jamais, un cri derrière une porte : ici tu analyses ce que le cadre laisse dehors. EN: A husband we never glimpse, a scream behind a door: here you analyse what the frame leaves outside.',
      imageRef: 'lessons/analyser-oeuvre/act04.jpg',
    },
    sections: [],
    milestone: 'Tu repères un contrechamp refusé et un hors-champ, et tu dis ce que leur absence produit. EN: You spot a missing reverse shot and off-screen space, and say what their absence does.',
    estScreens: 34, restPoints: ['a4-champ', 'a4-ecoute'],
  },
  sections: [A4_LECTURE, A4_CHAMP, A4_ECOUTE, A4_TRIER, A4_CRITIQUE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE MONTAGE
 *
 *  TEXT: a dossier on editing (Godard, 1960). MOVE: describe how shots are
 *  joined (raccord, faux raccord, plan-séquence, montage alterné) and the
 *  rhythm that follows.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Couper, ou ne pas couper', frSub: 'Le Fil culturel',
  text: MONTAGE_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « la coupe saute aux yeux ». Que veut dire « sauter aux yeux » ?', a: 'Être immédiatement visible, impossible à ne pas remarquer.' },
    { q: 'Que décide-t-on au montage ?', a: 'L’ordre des plans, leur durée et la manière de passer de l’un à l’autre.' },
    { q: 'Qu’est-ce qu’un raccord réussi, selon le texte ?', a: 'Un passage d’un plan à l’autre que le spectateur ne remarque pas : un geste qui se termine dans le plan suivant, un regard qui appelle ce qu’il regarde.' },
    { q: 'Qu’a fait Godard en 1960 ?', a: 'Dans son premier long métrage, « À bout de souffle », il a multiplié les faux raccords : la coupe devient visible et devient un style.' },
    { q: 'Quel effet produit un plan-séquence ?', a: 'Le spectateur vit la scène en temps réel, sans pouvoir s’échapper.' },
    { q: 'Quelle est la conclusion du dossier ?', a: 'Aucune façon de monter n’est meilleure en soi : il faut dire ce que le choix produit.' },
  ],
  audio: REC('rec-c1-14-montage'), say: REFRAME, terms: ['montage', 'effet'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a5-exemples', layer: 'core', sheetId: 'sheet-cinema',
  title: 'Cinq façons d’assembler les plans',
  examples: [
    ex(E(1263), 'ce que fait le montage'),
    ex(E(1264), 'le montage et le rythme'),
    ex(E(1268), 'le faux raccord'),
    ex(E(1265), 'le plan-séquence'),
    ex(E(1269), 'le montage alterné'),
    ex('fr.c1.culture-profonde.014', 'un critique loue un montage'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['montage'],
};

const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-trier', layer: 'core', size: 'lg',
  title: 'Quel montage pour quel effet', frSub: 'Trois séquences',
  groups: [
    grp('Trois séquences', [
      free('Une poursuite : la voiture des fuyards, puis les policiers, puis les fuyards, de plus en plus vite.', 'A chase: the fugitives’ car, then the police, then the fugitives, faster and faster.', 'deux lieux alternés'),
      free('Un repas de famille filmé en une seule prise de sept minutes.', 'A family meal filmed in a single seven-minute take.', 'aucune coupe'),
      free('Un homme marche dans la rue ; la coupe le fait sauter de trois mètres en avant.', 'A man walks down the street; the cut makes him jump three metres ahead.', 'la coupe visible'),
    ], chk('Le repas filmé en une seule prise de sept minutes est...', ['un plan-séquence', 'un montage alterné', 'un faux raccord'], 0,
      'Une scène entière, sans coupe. EN: one take, no cut.')),
    grp('Un souvenir de B2', [
      it('fr.b2.litterature.1461', 'le retour en arrière, au B2'),
      it(E(1272), 'aucun montage n’est le seul bon'),
    ], chk('Au cinéma, un retour en arrière passe surtout par...', ['le montage, qui place un plan du passé dans le présent', 'la contre-plongée'], 0,
      `${Cap(LITTERATURE_REF)} parlait d’analepse dans un récit ; au cinéma, c’est le montage qui la crée. EN: editing creates the flashback.`)),
    ctl('Le jugement', 'Un film multiplie les faux raccords. Tu en conclus...', ['que le monteur s’est trompé', 'rien encore : tu cherches si c’est voulu et ce que cela produit'], 1,
      'Depuis 1960 au moins, le faux raccord peut être un style. EN: it can be a style.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['montage', 'effet'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a5-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'Le montage et le rythme',
  itemIds: dicteeFor(5),
  audio: AUDIO, say: REFRAME, terms: ['montage'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true, sheetId: 'sheet-cinema',
  title: 'Six phrases sur le montage', frSub: 'Raccord, coupe, plan-séquence',
  rule: {
    title: 'Décris le passage, puis le rythme',
    body: 'Le montage ne se juge pas à sa discrétion. Dis comment les plans s’enchaînent (raccord, coupe visible, alternance, absence de coupe) et le rythme qui en résulte. EN: describe the joins, then the rhythm.',
  },
  cards: [
    card('le plan-séquence mal compris', 'Le plan-séquence est découpé en dizaines de plans très courts.', E(1265), 'Par définition, le plan-séquence se passe de coupe. EN: no cut at all.'),
    card('la coupe visible condamnée', 'Le faux raccord prouve que le film est mal fait.', E(1271), 'Depuis Godard en 1960, une coupe visible peut être un choix. EN: it can be deliberate.'),
    card('le rythme à l’envers', 'Des plans très longs donnent un rythme haché et nerveux.', E(1264), 'Les plans longs ralentissent ; les plans brefs accélèrent. EN: long shots slow things down.'),
    card('l’alternance oubliée', 'Le film montre la maison, puis la route, puis la maison : c’est un plan-séquence.', E(1269), 'Deux lieux qui alternent : c’est un montage alterné. EN: that is cross-cutting.'),
    card('le montage réduit à l’ordre', 'Le montage, c’est seulement mettre les plans dans l’ordre.', E(1263), 'Il décide aussi de la durée et du passage d’un plan à l’autre. EN: also length and joins.'),
    card('une seule norme', 'Un bon montage est toujours invisible.', E(1272), 'Invisible ou visible, il se juge à ce qu’il produit. EN: judge it by its effect.'),
  ],
  drill: [
    { promptSay: 'Une scène entière filmée sans coupe est un ... .', opts: ['plan-séquence', 'faux raccord'], correct: 0 },
    { promptSay: 'Une coupe qui se remarque est un ... raccord.', opts: ['vrai', 'faux'], correct: 1 },
    { promptSay: 'Des plans très courts rendent le rythme plus ... .', opts: ['lent', 'nerveux', 'régulier'], correct: 1 },
    { promptSay: 'Passer d’un lieu à l’autre pour créer l’attente : le montage ... .', opts: ['alterné', 'invisible'], correct: 0 },
    { promptSay: 'Le montage décide de l’ordre et de la ... des plans.', opts: ['couleur', 'durée', 'valeur'], correct: 1 },
    { promptSay: 'En 1960, À bout de souffle multiplie les ... raccords.', opts: ['bons', 'faux'], correct: 1 },
    { promptSay: 'Sans coupe, le spectateur vit la scène en temps ... .', opts: ['réel', 'perdu'], correct: 0 },
    { promptSay: 'Un geste commencé dans un plan et achevé dans l’autre : c’est un ... .', opts: ['contrechamp', 'raccord', 'cadre'], correct: 1 },
  ],
  steps: STEPS('Décris le passage, puis le rythme', 'Six phrases à corriger'),
  audio: REC('rec-c1-14-piege-montage'), say: REFRAME, terms: ['montage'],
};

const A5_CRITIQUE = pourTaCritique('a5-critique', 'Le montage et son rythme', [
  grp('Deux phrases sur une coupe brutale', [
    free('Il y a une coupe bizarre au milieu du film.', 'There is a strange cut in the middle of the film.', 'une remarque sans analyse'),
    it(E(1373), 'la coupe et son effet'),
  ], chk('Laquelle sert une critique ?', ['la première', 'la seconde'], 1,
    'Elle décrit le passage et ce qu’il fait sentir. EN: the cut and what it makes us feel.')),
  grp('La phrase de ta critique', [
    it(E(1266), 'le plan-séquence'),
    it('fr.c1.culture-profonde.037', 'un critique et une seule prise'),
  ], chk('La dernière scène de « La Saison des verglas » est un plan-séquence. Tu écris...', ['« sans une coupe, la scène nous tient quatre minutes dans la cuisine »', '« la scène est longue »'], 0,
    'Le moyen (aucune coupe) et son effet (on ne peut pas s’échapper). EN: means and effect.')),
], ['montage', 'effet']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le plan-séquence', 'Un plan-séquence, c’est...', ['une scène entière filmée en une seule prise', 'une suite de gros plans'], 0,
    'Sans arrêter la caméra. EN: a whole scene in one take.'),
  ctl('Le faux raccord', 'Un faux raccord peut être...', ['seulement une erreur', 'une erreur, ou un choix de style'], 1,
    'À bout de souffle en a fait un style en 1960. EN: an error or a style.'),
  ctl('Le rythme', 'Un montage rapide...', ['accélère le rythme', 'ralentit le rythme', 'ne change rien au rythme'], 0,
    'Des plans brefs, un rythme plus nerveux. EN: it speeds things up.'),
], ['montage']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le montage',
    opener: {
      line: 'Une coupe qui saute aux yeux, une scène sans aucune coupe : ici tu analyses la manière dont les plans s’enchaînent. EN: A cut that jumps out at you, a scene with no cut at all: here you analyse how shots are joined.',
      imageRef: 'lessons/analyser-oeuvre/act05.jpg',
    },
    sections: [],
    milestone: 'Tu décris un raccord, un faux raccord, un plan-séquence ou un montage alterné, et le rythme qu’il donne. EN: You describe a match, a jump cut, a sequence shot or cross-cutting, and the rhythm it gives.',
    estScreens: 38, restPoints: ['a5-exemples', 'a5-piege'],
  },
  sections: [A5_LECTURE, A5_EXEMPLES, A5_TRIER, A5_DICTEE, A5_PIEGE, A5_CRITIQUE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA BANDE-SON
 *
 *  TEXT: a radio column on listening to a film (Perrault and Brault, 1963).
 *  MOVE: say where a sound comes from, then what it does.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Écouter un film', frSub: 'Radio Passerelle',
  text: SON_TEXT,
  glossary: [
    { word: 'une comptine', en: 'a nursery rhyme', note: 'Une petite chanson pour enfants.' },
  ],
  questions: [
    { q: 'Devine le sens : « la matière même du film ». Que veut dire « la matière » ici ?', a: 'Ce dont le film est fait, son contenu essentiel.' },
    { q: 'Quelles sont les deux questions à poser au son ?', a: 'D’où vient-il (de la scène ou ajouté) ? Et que fait-il (il souligne, il contredit, il se tait) ?' },
    { q: 'Quand les personnages entendent-ils la musique ?', a: 'Quand elle vient de la scène, par exemple d’une radio posée sur la table.' },
    { q: 'Quel effet produit une musique qui contredit l’image ?', a: 'Un décalage qui inquiète, comme une comptine sur une scène de violence.' },
    { q: 'Comment l’équipe de « Pour la suite du monde » a-t-elle travaillé ?', a: 'Avec une caméra légère et le son direct, sans suivre de scénario écrit, à l’île aux Coudres, à partir de 1962.' },
    { q: 'Qu’est-ce que ce film a d’historique ?', a: 'C’est le premier long métrage canadien présenté au Festival de Cannes, et un classique du cinéma direct.' },
  ],
  audio: REC('rec-c1-14-son'), say: REFRAME, terms: ['son', 'effet'],
};

const A6_SON: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-son', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-cinema',
  title: 'D’où vient le son', frSub: 'Quatre cas',
  hint: 'Quatre cartes. Pour chacune, demande-toi : qui entend ce son ?',
  audio: REC('rec-c1-14-son-cartes'), say: REFRAME, terms: ['son'],
  cards: [
    { head: 'Le son de la scène', label: 'les personnages l’entendent', fr: src(E(1279)).fr, sub: rsOf(E(1279)),
      body: 'Une radio, une conversation, un moteur : le son appartient au monde du film. EN: the sound belongs to the film’s world.' },
    { head: 'Le son ajouté', label: 'le public seul l’entend', fr: src(E(1280)).fr, sub: rsOf(E(1280)),
      body: 'Une musique d’accompagnement que personne ne joue dans le film. Elle oriente l’émotion. EN: added music steers the emotion.' },
    { head: 'La voix off', label: 'une voix sans visage', fr: src(E(1281)).fr, sub: rsOf(E(1281)),
      body: 'Elle commente, raconte ou contredit l’image. On dit aussi « voix hors champ » quand le personnage parle hors du cadre. EN: a voice over the images.' },
    { head: 'Le silence', label: 'un son à part entière', fr: src(E(1282)).fr, sub: rsOf(E(1282)),
      body: 'Couper la musique, ou même les bruits, attire l’attention autant qu’un fracas. EN: silence draws attention too.' },
  ],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a6-ecoute', layer: 'core', hideLines: true,
  title: 'Une chronique sur le son', frSub: 'Une seule écoute, huit phrases',
  lines: [ln(E(1278)), ln(E(1279)), ln(E(1280)), ln(E(1283)), ln(E(1287)), ln(E(1282)), ln(E(1284)), ln(E(1285))],
  questions: [
    { q: 'Que réunit la bande-son ?', opts: ['seulement la musique', 'les voix, les bruits, la musique et les silences'], correct: 1,
      why: 'Tout ce qu’on entend. EN: everything heard.' },
    { q: 'Une musique ajoutée est entendue par...', opts: ['les personnages', 'les spectateurs seulement', 'personne'], correct: 1,
      why: 'Personne ne la joue dans le film. EN: only the audience.' },
    { q: 'Que fait une musique trop appuyée ?', opts: ['Elle dicte ce qu’il faut ressentir.', 'Elle laisse le spectateur libre.'], correct: 0,
      why: 'Elle impose l’émotion au lieu de la laisser naître. EN: it dictates the feeling.' },
    { q: 'Où « Pour la suite du monde » est-il tourné ?', opts: ['à l’île aux Coudres', 'à Montréal', 'à Bruxelles'], correct: 0,
      why: 'Dans le Saint-Laurent, en son direct. EN: on the île aux Coudres.' },
    { q: 'Qu’entend-on dans ce film ?', opts: ['des comédiens qui récitent un texte', 'les habitants qui parlent comme ils parlent'], correct: 1,
      why: 'Le son direct garde leur langue telle quelle. EN: the islanders’ own speech.' },
  ],
  audio: REC('rec-c1-14-ecoute-son'), say: REFRAME, terms: ['son'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons d’oublier le son',
  errors: [
    { wrong: 'La musique est bonne.', right: 'La musique, ajoutée, souligne une émotion que l’image donnait déjà.',
      why: 'Normal : on écoute la musique pour elle-même. En critique, on dit d’où elle vient et ce qu’elle fait. EN: say where it comes from and what it does.' },
    { wrong: 'Il ne se passe rien pendant le silence.', right: 'Le silence, après le cri, laisse le spectateur seul avec ce qu’il imagine.',
      why: 'Le silence se prépare comme un son. Il fait quelque chose, dis quoi. EN: silence does something.' },
    { wrong: 'La voix off raconte la même chose que l’image.', right: 'La voix off dit le contraire de ce que l’on voit, et ce décalage fait sourire.',
      why: 'Parfois elle répète, parfois elle contredit : regarde l’écart avant de conclure. EN: check the gap.' },
    { wrong: 'Le film n’a pas de bande-son, il n’y a que des bruits.', right: 'La bande-son se compose de bruits : la mer, le vent, des pas.',
      why: 'Les bruits font partie de la bande-son, même sans musique. EN: noises are part of the soundtrack.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['son'],
};

const A6_CRITIQUE = pourTaCritique('a6-critique', 'Le son et ce qu’il fait', [
  grp('Deux phrases sur « Marée basse »', [
    free('Il n’y a pas de musique, c’est un peu vide.', 'There is no music; it feels a bit empty.', 'un manque supposé'),
    it(E(1368), 'le choix sonore'),
  ], chk('Laquelle décrit un moyen du film ?', ['la première', 'la seconde'], 1,
    'Elle dit ce qu’on entend à la place de la musique. EN: what replaces the music.')),
  grp('La phrase de ta critique', [
    it(E(1283), 'une réserve possible'),
    it('fr.c1.culture-profonde.019', 'un éloge de la bande-son'),
  ], chk('Une seule musique arrive au dernier plan. Tu peux écrire...', ['« après tant de silence, la musique prend un poids immense, ou elle souligne trop »', '« la musique arrive à la fin »'], 0,
    'Tu dis ce que fait ce choix, et tu peux le discuter. EN: say what it does, and weigh it.')),
], ['son', 'effet']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La source', 'Une chanson sort d’une radio dans la cuisine : les personnages...', ['l’entendent aussi', 'ne l’entendent pas'], 0,
    'Le son vient de la scène. EN: it comes from the scene.'),
  ctl('Le silence', 'Au cinéma, le silence...', ['est aussi un son, qui se prépare', 'est un oubli du monteur'], 0,
    'Il se mixe et se remarque. EN: it is designed.'),
  ctl('Le son direct', '« Pour la suite du monde » est tourné...', ['en son direct, avec une caméra légère', 'en studio, avec des acteurs', 'sans aucun son'], 0,
    'Un classique du cinéma direct, sorti en 1963. EN: direct sound.'),
], ['son']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La bande-son',
    opener: {
      line: 'Une musique trop forte, un silence qui inquiète, des voix prises sur le vif : ici tu écoutes un film autant que tu le regardes. EN: Music too loud, an unsettling silence, voices caught live: here you listen to a film as much as you watch it.',
      imageRef: 'lessons/analyser-oeuvre/act06.jpg',
    },
    sections: [],
    milestone: 'Tu dis d’où vient un son et ce qu’il fait : il souligne, il contredit, ou il se tait. EN: You say where a sound comes from and what it does.',
    estScreens: 34, restPoints: ['a6-son', 'a6-ecoute'],
  },
  sections: [A6_LECTURE, A6_SON, A6_ECOUTE, A6_ERREURS, A6_CRITIQUE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LA COMPOSITION
 *
 *  TEXT: a gallery wall text (Seydou Keïta's portraits, an invented
 *  landscape). MOVE: say where an image leads the eye, and what that does.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lecture', layer: 'core', questionsInModal: true,
  title: 'Seydou Keïta, portraits de Bamako', frSub: 'Centre d’art de Port-Mauve',
  text: COMPOSITION_TEXT,
  glossary: [
    { word: 'endimanché', en: 'in one’s Sunday best', note: 'Habillé avec ses plus beaux vêtements.' },
  ],
  questions: [
    { q: 'Devine le sens : « de trois quarts ». Comment le modèle est-il placé ?', a: 'À mi-chemin entre de face et de profil, le corps légèrement tourné.' },
    { q: 'Où se trouve le modèle dans les portraits de Keïta ?', a: 'Presque toujours au centre, au premier plan, de face ou de trois quarts.' },
    { q: 'Qu’est-ce qui ferme l’arrière-plan ?', a: 'Un tissu à motifs tendu contre le mur : pas de paysage, pas de point de fuite.' },
    { q: 'Quel effet produit ce motif ?', a: 'Il répond à celui des vêtements : le regard circule d’un motif à l’autre avant de revenir au visage.' },
    { q: 'Pourquoi les fonds permettent-ils de dater les tirages ?', a: 'Keïta a utilisé un couvre-lit à franges de 1948 à 1954, puis il a changé de tissu tous les quelques ans.' },
    { q: 'En quoi le paysage peint s’oppose-t-il aux portraits ?', a: 'Les lignes convergent vers un point de fuite, la femme est décentrée, un grand vide de ciel isole la personne au lieu de la grandir.' },
  ],
  audio: REC('rec-c1-14-composition'), say: REFRAME, terms: ['composition', 'effet'],
};

const A7_COMPOSITION: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a7-composition', layer: 'core', sheetId: 'sheet-arts',
  title: 'Six repères pour décrire une image',
  cols: ['Le repère', 'La question', 'Un effet possible'],
  rows: [
    { cells: ['le premier plan', 'Qu’y a-t-il devant ?', 'imposer le sujet'], say: src(E(1291)).fr,
      detail: { title: 'Le premier plan', body: 'La zone la plus proche de nous. Ce qui s’y trouve s’impose au regard. EN: the closest zone.', say: src(E(1295)).fr } },
    { cells: ['l’arrière-plan', 'Qu’y a-t-il au fond ?', 'situer, ou fermer'], say: src(E(1292)).fr,
      detail: { title: 'L’arrière-plan', body: 'Un paysage situe ; un fond uni ou un tissu ferme l’espace. EN: the furthest zone.', say: src(E(1303)).fr } },
    { cells: ['le point de fuite', 'Où convergent les lignes ?', 'creuser la profondeur'], say: src(E(1293)).fr,
      detail: { title: 'Le point de fuite', body: 'Le point où se rejoignent les lignes parallèles de la perspective. Il attire le regard. EN: where perspective lines meet.', say: src(E(1296)).fr } },
    { cells: ['une ligne de force', 'Quelle ligne structure l’image ?', 'guider le regard'], say: src(E(1294)).fr,
      detail: { title: 'La ligne de force', body: 'Une diagonale, un horizon, un bras tendu : une ligne qui organise l’image et conduit l’œil. EN: a line that organises the image.', say: 'La diagonale du quai conduit l’œil vers la femme assise.' } },
    { cells: ['le centre', 'Le sujet est-il centré ?', 'stabilité ou malaise'], say: src(E(1298)).fr,
      detail: { title: 'Centré ou décentré', body: 'Un sujet centré, une symétrie : de la stabilité, parfois de la solennité. Un sujet décentré : une tension. EN: centred feels stable; off-centre creates tension.', say: src(E(1297)).fr } },
    { cells: ['le vide', 'Où est l’espace laissé libre ?', 'isoler, inquiéter'], say: 'Le vide aussi se compose.',
      detail: { title: 'Le vide', body: 'Un grand espace vide n’est pas un oubli : il isole un personnage ou crée une attente. EN: empty space is composed too.', say: src(E(1297)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['composition'],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-trier', layer: 'core', size: 'lg',
  title: 'Où l’image mène le regard', frSub: 'Trois images décrites',
  groups: [
    grp('Trois images', [
      free('Un pont, vu dans l’axe, dont les rambardes filent vers un point au loin.', 'A bridge seen head-on, its railings running toward a distant point.', 'des lignes qui convergent'),
      free('Un enfant tout petit, en bas à gauche, sous un immense ciel gris.', 'A very small child, bottom left, under a vast grey sky.', 'le vide qui isole'),
      free('Deux mariés exactement au centre, entourés de deux vases identiques.', 'A bride and groom exactly in the centre, flanked by two identical vases.', 'la symétrie'),
    ], chk('Dans l’image du pont, le regard est conduit vers...', ['le point de fuite', 'le premier plan', 'le bord du cadre'], 0,
      'Les rambardes convergent et mènent l’œil au loin. EN: the vanishing point.')),
    grp('Ce que fait un fond', [
      it(E(1299), 'un fond qui répond'),
      it(E(1303), 'un espace fermé'),
    ], chk('Chez Keïta, le fond à motifs...', ['ferme l’espace et met le modèle en valeur', 'crée une grande profondeur'], 0,
      'Pas de perspective : l’image reste plate, le modèle domine. EN: a flat, closed space.')),
    ctl('Le vide', 'Un grand vide à droite d’un tableau, c’est...', ['un oubli du peintre', 'un élément de la composition, qui produit un effet'], 1,
      'Le vide se compose ; dis ce qu’il produit. EN: emptiness is composed.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['composition', 'effet'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a7-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'Décrire une composition',
  itemIds: dicteeFor(7),
  audio: AUDIO, say: REFRAME, terms: ['composition'],
};

const A7_CRITIQUE = pourTaCritique('a7-critique', 'Décrire une composition', [
  grp('Deux phrases sur un plan de « Marée basse »', [
    free('C’est une jolie image de plage.', 'It is a pretty picture of a beach.', 'un éloge vague'),
    free('Ndèye, toute petite au bord du cadre, laisse au ciel et à la mer presque toute l’image.', 'Ndèye, tiny at the edge of the frame, leaves almost the whole image to the sky and the sea.', 'la place du sujet, le vide'),
  ], chk('Laquelle décrit la composition ?', ['la première', 'la seconde'], 1,
    'Elle dit où est le sujet et ce que le vide produit. EN: where the subject is, what the void does.')),
  grp('La phrase de ta critique', [
    it(E(1297), 'le sujet décentré'),
    it(E(1296), 'les lignes qui guident'),
  ], chk('Tu veux parler de la solitude de Ndèye. Tu t’appuies sur...', ['la place qu’elle occupe dans le cadre', 'ton propre souvenir de la plage'], 0,
    'Un effet se fonde sur un moyen visible. EN: ground it in the image.')),
], ['composition', 'effet']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Les plans', 'La zone la plus proche du spectateur, c’est...', ['l’arrière-plan', 'le premier plan'], 1,
    'Le premier plan, devant ; l’arrière-plan, au fond. EN: the foreground.'),
  ctl('La perspective', 'La perspective crée...', ['l’illusion de la profondeur sur une surface plane', 'une couleur plus vive', 'un cadre plus large'], 0,
    'Grâce aux lignes qui convergent vers le point de fuite. EN: the illusion of depth.'),
  ctl('Keïta', 'Les fonds de Seydou Keïta permettent aujourd’hui...', ['de dater ses tirages', 'de connaître le nom des modèles'], 0,
    'Il changeait de tissu tous les quelques ans. EN: they date the prints.'),
], ['composition']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La composition',
    opener: {
      line: 'Un modèle devant un tissu à fleurs, une femme seule devant un grand ciel : ici tu décris où une image conduit le regard. EN: A sitter in front of a flowered cloth, a woman alone under a wide sky: here you describe where an image leads the eye.',
      imageRef: 'lessons/analyser-oeuvre/act07.jpg',
    },
    sections: [],
    milestone: 'Tu décris le premier plan, l’arrière-plan, les lignes et le vide, et tu dis ce qu’ils produisent. EN: You describe foreground, background, lines and empty space, and what they do.',
    estScreens: 34, restPoints: ['a7-composition'],
  },
  sections: [A7_LECTURE, A7_COMPOSITION, A7_TRIER, A7_DICTEE, A7_CRITIQUE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LA LUMIÈRE ET LA TOUCHE
 *
 *  TEXT: a guide's notebook (La Tour, Monet, Magritte). MOVE: say where the
 *  light comes from and how the colour is laid on.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'Trois façons de peindre la lumière', frSub: 'Le Fil culturel',
  text: LUMIERE_TEXT,
  glossary: [
    { word: 'railler', en: 'to mock', note: 'Se moquer de quelqu’un, avec ironie.' },
  ],
  questions: [
    { q: 'Devine le sens : « l’ombre ne dramatise pas, elle recueille ». Que veut dire « recueillir » ici ?', a: 'Accueillir, rassembler dans le calme, inviter à la méditation.' },
    { q: 'D’où vient la lumière dans « La Madeleine à la veilleuse » ?', a: 'D’une seule bougie, qui éclaire le visage ; le reste se perd dans l’ombre.' },
    { q: 'Comment La Tour transforme-t-il le clair-obscur hérité du Caravage ?', a: 'Il l’apaise : chez lui, l’ombre ne dramatise pas, elle crée le silence et le recueillement.' },
    { q: 'Que voit-on de près et de loin dans la toile de Monet ?', a: 'De près, des taches ; de loin, des bateaux, un soleil orange, l’eau qui scintille.' },
    { q: 'D’où vient le mot « impressionnistes » ?', a: 'D’un critique qui s’est moqué de la toile, exposée en 1874, et des exposants.' },
    { q: 'Que rappelle le tableau de Magritte ?', a: 'Qu’une peinture n’est jamais la chose, seulement sa représentation.' },
  ],
  audio: REC('rec-c1-14-lumiere'), say: REFRAME, terms: ['lumiere', 'effet'],
};

const A8_LUMIERE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a8-lumiere', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-arts',
  title: 'La lumière et la couleur', frSub: 'Quatre mots pour décrire une toile',
  hint: 'Quatre cartes. Regarde d’où vient la lumière, puis comment la couleur est posée.',
  audio: REC('rec-c1-14-lumiere-cartes'), say: REFRAME, terms: ['lumiere'],
  cards: [
    { head: 'La source', label: 'd’où vient la lumière', fr: src(E(1308)).fr, sub: rsOf(E(1308)),
      body: 'Une source unique et visible concentre l’attention ; une lumière diffuse enveloppe tout. EN: one source focuses, diffuse light envelops.' },
    { head: 'Le clair-obscur', label: 'l’ombre et la lumière', fr: src(E(1309)).fr, sub: rsOf(E(1309)),
      body: 'Des contrastes forts entre zones claires et sombres. Au pluriel : des clairs-obscurs. EN: strong contrasts; plural clairs-obscurs.' },
    { head: 'La touche', label: 'la trace du pinceau', fr: src(E(1311)).fr, sub: rsOf(E(1311)),
      body: 'La manière de poser la peinture : visible ou lisse, rapide ou appliquée. EN: how the paint is laid on.' },
    { head: 'L’aplat', label: 'une couleur uniforme', fr: src(E(1314)).fr, sub: rsOf(E(1314)),
      body: 'Une surface de couleur égale, sans dégradé ni trace visible. EN: a flat, even area of colour.' },
  ],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true, sheetId: 'sheet-arts',
  title: 'Six phrases sur la lumière', frSub: 'Le mot juste devant une toile',
  rule: {
    title: 'La source, la répartition, la touche',
    body: 'Devant une toile, ne dis pas seulement « belles couleurs ». Dis d’où vient la lumière, comment elle se répartit, comment la couleur est posée, puis l’effet. EN: source, spread, brushwork, then effect.',
  },
  cards: [
    card('le clair-obscur mal défini', 'Le clair-obscur, c’est une lumière égale partout.', E(1309), 'Au contraire : des contrastes forts. EN: strong contrasts.'),
    card('la touche oubliée', 'Monet peint le port avec des contours nets et lisses.', E(1311), 'Chez Monet, la touche est rapide et visible. EN: visible strokes.'),
    card('la distance ignorée', 'De loin, on ne voit que des taches.', E(1312), 'C’est de près qu’on voit les taches ; de loin, le port apparaît. EN: up close, patches.'),
    card('l’origine du mot', 'Le mot « impressionnistes » a d’abord été un compliment.', E(1313), 'Il est né d’une moquerie, en 1874. EN: it began as a jibe.'),
    card('l’ombre réduite au drame', 'Chez La Tour, l’ombre rend tout violent.', E(1318), 'Chez lui, l’ombre apaise et recueille. EN: his shadow calms.'),
    card('la représentation confondue', 'Le tableau de Magritte est une pipe.', E(1315), 'C’est l’image d’une pipe : toute la question du tableau. EN: an image, not the object.'),
  ],
  drill: [
    { promptSay: 'Des zones très claires contre des zones très sombres : le ... .', opts: ['clair-obscur', 'aplat'], correct: 0 },
    { promptSay: 'Une couleur uniforme, sans trace de pinceau : un ... .', opts: ['contraste', 'aplat', 'point de fuite'], correct: 1 },
    { promptSay: 'La manière de poser la peinture s’appelle la ... .', opts: ['touche', 'perspective'], correct: 0 },
    { promptSay: 'Chez La Tour, la lumière vient souvent d’une ... .', opts: ['fenêtre', 'flamme'], correct: 1 },
    { promptSay: 'Le pluriel de clair-obscur est des ... .', opts: ['clair-obscurs', 'clairs-obscurs'], correct: 1 },
    { promptSay: 'Le mot impressionnistes naît d’une ... .', opts: ['moquerie', 'commande', 'loi'], correct: 0 },
    { promptSay: 'Une lumière ... enveloppe tout, sans source visible.', opts: ['diffuse', 'unique'], correct: 0 },
    { promptSay: 'Une peinture n’est jamais la chose, seulement sa ... .', opts: ['copie exacte', 'représentation'], correct: 1 },
  ],
  steps: STEPS('La source, la répartition, la touche', 'Six phrases à corriger'),
  audio: REC('rec-c1-14-piege-lumiere'), say: REFRAME, terms: ['lumiere'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-trier', layer: 'core', size: 'lg',
  title: 'Trois toiles, trois lumières', frSub: 'Des tableaux décrits pour l’exercice',
  groups: [
    grp('Trois toiles imaginées', [
      free('Un marché sous un ciel blanc, sans ombre nette, où tout baigne dans la même clarté.', 'A market under a white sky, with no sharp shadow, everything bathed in the same light.', 'une lumière diffuse'),
      free('Une lampe sur une table, au centre ; autour, les visages sortent à peine du noir.', 'A lamp on a table, in the centre; around it, faces barely emerge from the dark.', 'une source unique'),
      free('Des aplats rouges et bleus, sans aucune ombre, comme une affiche.', 'Flat reds and blues, with no shadow at all, like a poster.', 'des aplats'),
    ], chk('La toile à la lampe joue surtout sur...', ['le clair-obscur', 'la perspective', 'l’aplat'], 0,
      'Une source unique, des visages qui sortent de l’ombre. EN: chiaroscuro.')),
    grp('Un manifeste au Québec', [
      it(E(1317), 'Refus global, 1948'),
      it(E(1315), 'la leçon de Magritte'),
    ], chk('En 1948, à Montréal, le manifeste Refus global...', ['coûte à Borduas son poste d’enseignant', 'est commandé par le gouvernement'], 0,
      'Les autorités le font renvoyer de l’École du meuble. EN: Borduas loses his post.')),
    ctl('La méthode', 'Devant une toile, tu dis d’abord...', ['si elle te plaît', 'd’où vient la lumière et comment la couleur est posée'], 1,
      'Ton goût viendra, mais fondé sur ces moyens. EN: the means first.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lumiere', 'effet'],
};

const A8_CRITIQUE = pourTaCritique('a8-critique', 'La lumière dans un plan', [
  grp('Deux phrases sur la lumière d’un film', [
    free('La photographie est très belle.', 'The cinematography is very beautiful.', 'un éloge vague'),
    free('Une seule lampe éclaire la cour, et les visages sortent à peine de l’ombre : on croirait un tableau de La Tour.', 'A single lamp lights the courtyard, and faces barely emerge from the shadow: it looks like a La Tour.', 'la source, l’effet, une comparaison'),
  ], chk('Laquelle sert une critique ?', ['la première', 'la seconde'], 1,
    'Elle dit d’où vient la lumière et ce qu’elle produit. EN: source and effect.')),
  grp('La phrase de ta critique', [
    it(E(1308), 'une source unique'),
    it(E(1318), 'ce que fait l’ombre'),
  ], chk('Tu compares un plan à un peintre. Tu veilles à...', ['dire précisément ce que les deux ont en commun', 'citer le plus de noms possible'], 0,
    'Une comparaison vaut par le trait commun qu’elle désigne. EN: name the shared feature.')),
], ['lumiere', 'effet']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le clair-obscur', 'Le clair-obscur oppose...', ['des zones claires et des zones sombres', 'des couleurs chaudes et froides'], 0,
    'C’est un jeu de contrastes de lumière. EN: light against dark.'),
  ctl('La touche', 'Chez Monet, la touche est...', ['lisse et invisible', 'rapide, visible, fragmentée', 'absente'], 1,
    'De près, des taches ; de loin, le port. EN: quick and visible.'),
  ctl('L’impressionnisme', 'Le mot « impressionnistes » est né...', ['d’une moquerie d’un critique, en 1874', 'd’un manifeste des peintres'], 0,
    'À partir du titre de Monet. EN: from a critic’s jibe.'),
], ['lumiere']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'La lumière et la touche',
    opener: {
      line: 'Une bougie dans le noir, un port dans la brume, une pipe trop nette : ici tu décris la lumière et la manière de peindre. EN: A candle in the dark, a harbour in the mist, a pipe too sharp: here you describe light and the way paint is laid on.',
      imageRef: 'lessons/analyser-oeuvre/act08.jpg',
    },
    sections: [],
    milestone: 'Tu dis d’où vient la lumière, comment la couleur est posée, et ce que cela fait au regard. EN: You say where the light comes from, how the colour is laid on, and what that does to the eye.',
    estScreens: 36, restPoints: ['a8-lumiere', 'a8-piege'],
  },
  sections: [A8_LECTURE, A8_LUMIERE, A8_PIEGE, A8_TRIER, A8_CRITIQUE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LA MUSIQUE ET LA SCÈNE
 *
 *  TEXT: a radio arts slot (Ravel's Boléro, Tremblay's Les Belles-sœurs and
 *  an invented staging). MOVE: name one means of music or of the stage, in
 *  outline, and its effect.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a9-lecture', layer: 'core', questionsInModal: true,
  title: 'Le quart d’heure des arts', frSub: 'Radio Passerelle',
  text: SCENE_TEXT,
  glossary: [
    { word: 'la caisse claire', en: 'the snare drum', note: 'Un petit tambour au son sec.' },
  ],
  questions: [
    { q: 'Devine le sens : « c’est entêtant ». Que veut dire « entêtant » ?', a: 'Qui reste dans la tête, qu’on n’arrive pas à oublier ; parfois au point de fatiguer.' },
    { q: 'Qu’est-ce qui change, et qu’est-ce qui ne change pas, dans le Boléro ?', a: 'La mélodie ne change pas ; ce sont les instruments qui changent.' },
    { q: 'Quel effet produit le long crescendo ?', a: 'Une tension qui ne se relâche qu’à la toute fin.' },
    { q: 'Quels sont les trois moyens du théâtre cités ?', a: 'La mise en scène, la scénographie (décor, objets, lumière) et le jeu des comédiens.' },
    { q: 'Qu’apporte « Les Belles-sœurs » en 1968 ?', a: 'La pièce fait entendre le joual sur une scène professionnelle de Montréal, au Théâtre du Rideau Vert.' },
    { q: 'Que devra dire une critique de la mise en scène imaginée ?', a: 'Si ses choix (un seul décor, une lumière qui isole, un jeu sobre) servent le texte ou l’étouffent.' },
  ],
  audio: REC('rec-c1-14-scene'), say: REFRAME, terms: ['moyens', 'effet'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a9-exemples', layer: 'core', sheetId: 'sheet-scene',
  title: 'Six moyens, en musique et sur scène',
  examples: [
    ex(E(1323), 'l’orchestration'),
    ex(E(1324), 'le crescendo'),
    ex(E(1325), 'le rythme'),
    ex('fr.b2.rp-loisirs.003', 'un mot déjà connu, au cœur du théâtre'),
    ex(E(1330), 'la lumière sur scène'),
    ex(E(1329), 'le jeu'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['moyens'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core', hideLines: true,
  title: 'Une émission sur les arts', frSub: 'Une seule écoute, huit phrases',
  lines: [ln(E(1326)), ln(E(1323)), ln(E(1325)), ln(E(1324)), ln(E(1332)), ln(E(1328)), ln(E(1327)), ln(E(1330))],
  questions: [
    { q: 'Où le Boléro est-il créé ?', opts: ['à l’Opéra de Paris', 'au Théâtre du Rideau Vert', 'à Bruxelles'], correct: 0,
      why: 'À l’Opéra de Paris, en 1928. EN: at the Paris Opéra.' },
    { q: 'Que fait la mélodie ?', opts: ['Elle change sans cesse.', 'Elle ne change pas.'], correct: 1,
      why: 'Ce sont les instruments qui changent. EN: the instruments change, not the tune.' },
    { q: 'Comment finit le morceau ?', opts: ['très doucement', 'aussi fort que possible'], correct: 1,
      why: 'C’est le crescendo. EN: as loud as possible.' },
    { q: 'Qu’est-ce qui change un même texte de théâtre ?', opts: ['la mise en scène', 'le titre', 'rien'], correct: 0,
      why: 'Un même texte n’est jamais joué de la même façon. EN: the staging.' },
    { q: 'Que fait la lumière dans la mise en scène décrite ?', opts: ['Elle éclaire tout également.', 'Elle découpe la scène et isole chaque monologue.'], correct: 1,
      why: 'Un choix de scénographie, avec un effet. EN: it isolates each monologue.' },
  ],
  audio: REC('rec-c1-14-ecoute-scene'), say: REFRAME, terms: ['moyens'],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-trier', layer: 'core', size: 'lg',
  title: 'Nommer le moyen', frSub: 'Trois soirées décrites',
  groups: [
    grp('Trois soirées', [
      free('Le chœur commence à voix basse et finit en criant presque.', 'The choir starts softly and ends almost shouting.', 'l’intensité qui monte'),
      free('Le décor se réduit à une chaise vide au milieu du plateau.', 'The set is reduced to an empty chair in the middle of the stage.', 'un décor dépouillé'),
      free('La même phrase musicale passe du violon à la trompette, puis à tout l’orchestre.', 'The same musical phrase moves from the violin to the trumpet, then to the whole orchestra.', 'le timbre qui change'),
    ], chk('La phrase qui passe d’un instrument à l’autre relève de...', ['l’orchestration', 'la mise en scène', 'la scénographie'], 0,
      'Le choix des instruments qui portent la musique. EN: orchestration.')),
    grp('Le théâtre, au-delà du texte', [
      it(E(1332), 'un texte, plusieurs mises en scène'),
      it(E(1327), 'un choix de décor'),
    ], chk('La chaise vide au milieu du plateau, c’est un choix de...', ['scénographie', 'crescendo'], 0,
      'Le décor et les objets relèvent de la scénographie. EN: stage design.')),
    ctl('Le crescendo', 'Un crescendo, c’est...', ['une intensité qui augmente peu à peu', 'un changement de mélodie'], 0,
      'Le son monte, du très doux au très fort. EN: a gradual increase.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['moyens', 'effet'],
};

const A9_CRITIQUE = pourTaCritique('a9-critique', 'Un moyen, un effet', [
  grp('Deux phrases sur un concert', [
    free('Super concert, j’ai adoré la fin.', 'Great concert, I loved the ending.', 'une impression'),
    free('Le long crescendo final, sur un rythme qui ne varie jamais, fait monter la tension jusqu’à la dernière note.', 'The long final crescendo, over a rhythm that never varies, builds the tension right to the last note.', 'le moyen, puis l’effet'),
  ], chk('Laquelle sert une critique ?', ['la première', 'la seconde'], 1,
    'Elle nomme le moyen musical et ce qu’il produit. EN: the musical means and its effect.')),
  grp('La phrase de ta critique', [
    it(E(1329), 'décrire le jeu'),
    it(E(1330), 'décrire la lumière'),
  ], chk('Pour la kora du dernier plan de « Marée basse », tu peux écrire...', ['« après une heure et demie sans musique, cette kora prend un poids considérable »', '« la musique est jolie »'], 0,
    'Le moyen, son contexte, son effet. EN: means, context, effect.')),
], ['moyens', 'effet']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’orchestration', 'Dans le Boléro, ce qui change, c’est...', ['la mélodie', 'les instruments'], 1,
    'La mélodie reste la même ; l’orchestration fait tout. EN: the instruments.'),
  ctl('La scénographie', 'La scénographie désigne...', ['le décor, les objets, la lumière', 'le texte de la pièce', 'le jeu des comédiens'], 0,
    'Le jeu relève des comédiens ; la scénographie, de l’espace. EN: set, objects, light.'),
  ctl('Le joual', 'En 1968, « Les Belles-sœurs » fait entendre...', ['le joual sur une scène professionnelle', 'un opéra en latin'], 0,
    'Au Théâtre du Rideau Vert, à Montréal. EN: joual on stage.'),
], ['moyens']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'La musique et la scène',
    opener: {
      line: 'Une mélodie qui ne change jamais, une pièce jouée dans un seul décor : ici tu nommes les moyens de la musique et du théâtre. EN: A tune that never changes, a play on a single set: here you name the means of music and theatre.',
      imageRef: 'lessons/analyser-oeuvre/act09.jpg',
    },
    sections: [],
    milestone: 'Tu nommes un moyen de la musique ou de la scène, et tu dis ce qu’il produit. EN: You name a means of music or the stage, and say what it produces.',
    estScreens: 32, restPoints: ['a9-exemples', 'a9-ecoute'],
  },
  sections: [A9_LECTURE, A9_EXEMPLES, A9_ECOUTE, A9_TRIER, A9_CRITIQUE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — PESER LE POUR ET LE CONTRE
 *
 *  TEXT: a balanced review of an invented exhibition. MOVE: grant a
 *  strength, name a precise weakness, ask whether it is a parti pris, then
 *  decide which wins.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Ce que la mer rapporte', frSub: 'L’Œil du dimanche, critique',
  text: PESER_TEXT,
  glossary: [
    { word: 'les cartels', en: 'the wall labels (in a museum)', note: 'Les petits panneaux qui présentent chaque œuvre.' },
  ],
  questions: [
    { q: 'Devine le sens : « une exposition qui mérite mieux que son accrochage ». Que veut dire « l’accrochage » ?', a: 'La manière dont les œuvres sont disposées dans les salles.' },
    { q: 'Quelle qualité la critique accorde-t-elle d’abord ?', a: 'La première salle, où les objets rangés par couleur donnent l’impression d’une marée qui se retire.' },
    { q: 'Quelles faiblesses précises relève-t-elle ?', a: 'Des salles sans fil directeur, des cartels trop longs, une bande sonore de vagues trop appuyée.' },
    { q: 'Comment traite-t-elle l’argument des commissaires ?', a: 'Elle le rapporte, le juge cohérent, mais pas tout à fait convaincant : « l’argument se tient, sans convaincre tout à fait ».' },
    { q: 'Quel est son verdict, et pour qui ?', a: 'Une réussite inégale, mais réelle, à recommander à ceux qui acceptent de prendre leur temps.' },
  ],
  audio: REC('rec-c1-14-peser'), say: REFRAME, terms: ['jugement', 'critique'],
};

const A10_FORMULES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-formules', layer: 'core', sheetId: 'sheet-critique',
  title: 'Six formules pour peser',
  cols: ['La formule', 'Ce qu’elle fait', 'Le registre'],
  rows: [
    { cells: ['certes… mais', 'accorder, puis objecter', 'soutenu'], say: src(E(1335)).fr,
      detail: { title: 'Certes… mais', body: 'Tu accordes un point, puis tu fais valoir l’autre. Le second point pèse le plus. EN: grant, then the stronger point.', say: src(E(1335)).fr } },
    { cells: ['si… en revanche', 'opposer deux parties', 'soutenu'], say: src(E(1336)).fr,
      detail: { title: 'Si… en revanche', body: 'Ce « si » ne pose pas une condition : il oppose. EN: this si contrasts, it is not a condition.', say: src(E(1336)).fr } },
    { cells: ['malgré…', 'reconnaître un défaut qui ne l’emporte pas', 'courant'], say: src(E(1337)).fr,
      detail: { title: 'Malgré', body: 'Le défaut est dit, mais il ne renverse pas le jugement. EN: a flaw that does not win.', say: src(E(1337)).fr } },
    { cells: ['on peut regretter…', 'formuler une réserve', 'soutenu'], say: src(E(1338)).fr,
      detail: { title: 'On peut regretter', body: 'Une réserve dite sans brutalité, qui laisse au lecteur le droit de ne pas la partager. EN: a reservation, gently put.', say: src(E(1338)).fr } },
    { cells: ['…, sinon…', 'nuancer un adjectif', 'soutenu'], say: src(E(1342)).fr,
      detail: { title: 'Sinon', body: 'Ici, « sinon » veut dire « si ce n’est » : ambitieuse, à défaut d’être toujours lisible. EN: if not.', say: src(E(1342)).fr } },
    { cells: ['tout bien pesé', 'conclure', 'courant'], say: src(E(1345)).fr,
      detail: { title: 'Tout bien pesé', body: 'Le verdict, une fois les deux plateaux de la balance remplis. EN: the verdict, once both sides are weighed.', say: src(E(1345)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['jugement'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre jugements mal pesés',
  errors: [
    { wrong: 'La deuxième salle est ratée, donc l’exposition est ratée.', right: 'La deuxième salle déçoit, mais ce défaut ne gâche pas l’ensemble.',
      why: 'Normal : un défaut marque plus qu’une qualité. Mesure sa place dans l’ensemble. EN: weigh the flaw against the whole.' },
    { wrong: 'Tout est parfait dans ce film.', right: 'Le film convainc presque partout ; seule la musique du milieu paraît trop appuyée.',
      why: 'Un éloge sans réserve rassure moins le lecteur qu’un éloge pesé. EN: a weighed praise is more credible.' },
    { wrong: 'Le désordre des salles est un défaut, point.', right: 'Ce désordre est peut-être un parti pris ; l’argument se tient, sans convaincre tout à fait.',
      why: 'Avant de condamner, demande-toi si c’est voulu, puis juge le choix. EN: ask if it is deliberate.' },
    { wrong: 'C’est nul et trop long.', right: 'Le film souffre de longueurs dans sa deuxième heure.',
      why: 'La réserve vise un moment précis, pas l’œuvre entière. EN: target a precise moment.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['jugement', 'critique'],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-trier', layer: 'core', size: 'lg',
  title: 'Accorder, nuancer, trancher', frSub: 'Trois avis à peser',
  groups: [
    grp('Trois phrases de critiques', [
      it('fr.c1.culture-profonde.062', 'une réserve polie'),
      it('fr.c1.culture-profonde.017', 'un défaut racheté'),
      it(E(1347), 'défaut ou parti pris'),
    ], chk('« Certains chapitres traînent, mais la dernière partie rachète tout. » Le verdict penche...', ['du côté des qualités', 'du côté des défauts'], 0,
      'Après « mais », la partie qui l’emporte. EN: after mais comes the winning side.')),
    grp('Pourquoi peser', [
      it('fr.c1.culture-profonde.118', 'sévère, mais argumenté'),
      it(E(1343), 'viser juste'),
    ], chk('Une critique sévère mais argumentée...', ['rend service à l’auteur et au lecteur', 'est toujours injuste'], 0,
      'Ses raisons permettent de la discuter. EN: its reasons can be discussed.')),
    ctl('Le parti pris', 'Un film refuse toute musique. Avant de le reprocher, tu te demandes...', ['si c’est un parti pris, et ce qu’il produit', 'combien a coûté le film'], 0,
      'Un choix voulu se juge sur son effet. EN: judge a deliberate choice by its effect.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['jugement'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a10-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'Peser une œuvre',
  itemIds: dicteeFor(10),
  audio: AUDIO, say: REFRAME, terms: ['jugement'],
};

const A10_CRITIQUE = pourTaCritique('a10-critique', 'Peser', [
  grp('Deux phrases sur « Marée basse »', [
    free('Le film est trop lent et l’histoire du frère ne sert à rien.', 'The film is too slow and the brother’s story serves no purpose.', 'deux reproches en bloc'),
    free('Si la lenteur sert le deuil, l’histoire du frère, en revanche, reste à peine esquissée.', 'While the slowness serves the grief, the brother’s story, by contrast, is barely sketched.', 'accorder, puis objecter'),
  ], chk('Laquelle pèse ?', ['la première', 'la seconde'], 1,
    'Elle accorde un sens à la lenteur et vise une faiblesse précise. EN: it grants, then targets.')),
  grp('La phrase de ta critique', [
    it(E(1369), 'une faiblesse précise'),
    it(E(1345), 'le verdict'),
  ], chk('Tu as relevé deux qualités et une faiblesse. Ton verdict...', ['dit laquelle l’emporte et pourquoi', 'répète les trois points'], 0,
    'Un verdict tranche, raisons à l’appui. EN: a verdict decides.')),
], ['jugement', 'critique']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Certes… mais', 'Dans « certes A, mais B », l’auteur insiste sur...', ['A', 'B'], 1,
    'Ce qui suit « mais » pèse le plus. EN: B weighs more.'),
  ctl('Le parti pris', 'Un parti pris, c’est...', ['un choix délibéré de l’artiste', 'une erreur technique', 'un préjugé du critique'], 0,
    'On le juge à ce qu’il produit. EN: a deliberate choice.'),
  ctl('Le verdict', 'Le verdict d’une critique pesée arrive...', ['avant toute analyse', 'après les qualités et les réserves'], 1,
    'On juge une fois les deux plateaux remplis. EN: after weighing.'),
], ['jugement']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Peser le pour et le contre',
    opener: {
      line: 'Une première salle saisissante, deux salles confuses : ici tu apprends à peser une œuvre avant de rendre ton verdict. EN: A striking first room, two muddled ones: here you learn to weigh a work before giving your verdict.',
      imageRef: 'lessons/analyser-oeuvre/act10.jpg',
    },
    sections: [],
    milestone: 'Tu accordes une qualité, tu vises une faiblesse précise, et tu dis laquelle l’emporte. EN: You grant a strength, target a precise weakness, and say which wins.',
    estScreens: 38, restPoints: ['a10-formules', 'a10-trier'],
  },
  sections: [A10_LECTURE, A10_FORMULES, A10_ERREURS, A10_TRIER, A10_DICTEE, A10_CRITIQUE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LA CRITIQUE, UN GENRE
 *
 *  TEXT: a complete album review. MOVE: the architecture of the genre
 *  (hook, situating, analysis, reservation, verdict), summarising without
 *  spoiling, and precise evaluation in place of vague praise.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'Céleste Ouimet prend les petites routes', frSub: 'L’Œil du dimanche, musique',
  text: GENRE_TEXT,
  glossary: [
    { word: 'le dépouillement', en: 'bareness, sparseness', note: 'Le fait de garder l’essentiel, sans ornement.' },
  ],
  questions: [
    { q: 'Devine le sens : « l’attention fléchit ». Que veut dire « fléchir » ici ?', a: 'Faiblir, diminuer peu à peu.' },
    { q: 'Sur quoi s’ouvre la critique ?', a: 'Sur un détail concret : quarante secondes de moteur au ralenti avant la première note. C’est l’accroche.' },
    { q: 'Où la critique situe-t-elle l’album ?', a: 'C’est le troisième album de la chanteuse de Rimouski, enregistré presque seule dans une église de Gaspésie, après deux albums avec un groupe.' },
    { q: 'Pourquoi le critique ne dit-il rien des deux dernières chansons ?', a: 'Pour ne pas les divulgâcher : elles changent le sens de tout l’album.' },
    { q: 'Quelle réserve formule-t-il ?', a: 'Trois chansons du milieu se ressemblent au point de se confondre, et l’attention fléchit.' },
    { q: 'Quel est le verdict, et où arrive-t-il ?', a: 'À la fin : ce n’est pas le disque le plus immédiat, mais sans doute le plus abouti.' },
  ],
  audio: REC('rec-c1-14-genre'), say: REFRAME, terms: ['critique', 'jugement'],
};

const A11_STRUCTURE: Sec<'focus'> = {
  type: 'focus', id: 'a11-structure', layer: 'core', sheetId: 'sheet-critique',
  title: 'L’architecture d’une critique',
  points: [
    'L’accroche : un détail concret qui donne envie de lire, pas un verdict. EN: a concrete hook, not a verdict.',
    'Situer : l’œuvre, son auteur, son genre, le début de l’histoire, sans divulgâcher la fin. EN: place the work, spoil nothing.',
    'Analyser et peser : les moyens, leurs effets, les qualités et les réserves. EN: analyse and weigh.',
    'Le verdict, à la fin : ce qui l’emporte, et pour quel public. EN: the verdict last, and for whom.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['critique'],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-trier', layer: 'core', size: 'lg',
  title: 'Quelle partie de la critique', frSub: 'Des phrases à ranger',
  groups: [
    grp('Trois phrases', [
      free('Au premier plan du film, un vélo couché dans la neige, qu’on ne relèvera jamais.', 'In the film’s first shot, a bicycle lying in the snow that no one will ever pick up.', 'une accroche'),
      free('Troisième long métrage de la cinéaste, le film suit deux sœurs qui rouvrent l’auberge familiale.', 'The director’s third feature follows two sisters reopening the family inn.', 'situer'),
      free('Au total, un film imparfait, mais qu’on n’oublie pas.', 'All in all, an imperfect film, but one you do not forget.', 'le verdict'),
    ], chk('« Troisième long métrage de la cinéaste… » appartient à...', ['l’accroche', 'la présentation de l’œuvre', 'le verdict'], 1,
      'On situe l’œuvre : auteur, place dans son parcours, début de l’histoire. EN: placing the work.')),
    grp('Le début d’une critique', [
      it('fr.b2.litterature.1535', 'l’incipit, au B2'),
      it(E(1350), 'l’accroche'),
    ], chk('L’accroche d’une critique ressemble à un incipit : elle doit...', ['informer, intriguer et donner le ton', 'livrer tout de suite le verdict'], 0,
      `${Cap(LITTERATURE_REF)} le disait de l’incipit ; c’est vrai aussi d’une accroche. EN: inform, intrigue, set the tone.`)),
    ctl('Divulgâcher', 'Tu racontes la fin d’un film dans ta critique. Tu...', ['la divulgâches', 'l’analyses forcément mieux'], 0,
      'Un mot proposé au Québec pour remplacer « spoiler ». EN: you spoil it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['critique'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a11-piege', layer: 'core', swipe: true, sheetId: 'sheet-critique',
  title: 'Six phrases à rendre précises', frSub: 'Du mot vague au mot juste',
  rule: {
    title: 'Le registre de la critique',
    body: 'À l’oral, « génial » ou « nul » suffisent entre amis. Dans une critique, chaque jugement nomme ce qui fonctionne ou non : saisissant, convenu, abouti, inabouti. EN: in a review, judgements are precise.',
  },
  cards: [
    card('un adjectif qui ne dit rien', 'Le film est nul.', E(1356), 'Dis ce qui ne fonctionne pas : un rythme, une scène, un choix. EN: say what fails.'),
    card('le verdict en premier', 'Ce film est génial. Voici pourquoi.', E(1354), 'Le verdict arrive après les raisons. EN: verdict last.'),
    card('le résumé à la place de l’analyse', 'D’abord il arrive, ensuite elle part, enfin ils se retrouvent.', E(1361), 'Raconter n’est pas analyser. EN: retelling is not analysing.'),
    card('la fin révélée', 'À la fin, on apprend que le père était vivant.', E(1353), 'Situe sans divulgâcher. EN: do not spoil.'),
    card('un éloge sans nuance', 'Une œuvre parfaite, sans aucun défaut.', E(1357), '« Aboutie » dit la réussite sans prétendre à la perfection. EN: accomplished, not perfect.'),
    card('un reproche flou', 'C’est raté.', E(1358), '« Inaboutie » dit que l’œuvre n’atteint pas ce qu’elle vise. EN: falls short of its aim.'),
  ],
  drill: [
    { promptSay: 'Une œuvre qui atteint pleinement ce qu’elle vise est ... .', opts: ['aboutie', 'convenue'], correct: 0 },
    { promptSay: 'Révéler la fin d’une intrigue, c’est la ... .', opts: ['situer', 'divulgâcher', 'nuancer'], correct: 1 },
    { promptSay: 'Une critique s’ouvre sur une ... .', opts: ['conclusion', 'accroche'], correct: 1 },
    { promptSay: 'Le verdict arrive à la ... de la critique.', opts: ['fin', 'première ligne'], correct: 0 },
    { promptSay: 'Une fin prévisible et sans surprise est ... .', opts: ['saisissante', 'convenue'], correct: 1 },
    { promptSay: 'Une critique n’est pas un ... .', opts: ['jugement', 'résumé', 'texte'], correct: 1 },
    { promptSay: 'Une œuvre qui n’atteint pas son but est ... .', opts: ['inaboutie', 'dépouillée'], correct: 0 },
    { promptSay: 'Le lecteur doit pouvoir décider s’il ira ... l’œuvre.', opts: ['voir', 'écrire'], correct: 0 },
  ],
  steps: STEPS('Le registre de la critique', 'Six phrases à préciser'),
  audio: REC('rec-c1-14-piege-genre'), say: REFRAME, terms: ['critique', 'jugement'],
};

const A11_CRITIQUE = pourTaCritique('a11-critique', 'Ouvrir et fermer', [
  grp('Deux débuts pour « Marée basse »', [
    free('« Marée basse » est un très beau film que je recommande.', '“Marée basse” is a very beautiful film that I recommend.', 'le verdict d’abord'),
    free('Une voix d’homme sort d’un vieux magnétophone, et l’on ne verra jamais son visage.', 'A man’s voice comes out of an old tape recorder, and we will never see his face.', 'une accroche concrète'),
  ], chk('Laquelle ouvre une critique ?', ['la première', 'la seconde'], 1,
    'Un détail concret qui intrigue ; le verdict viendra à la fin. EN: a hook, not a verdict.')),
  grp('La phrase de ta critique', [
    it(E(1353), 'situer sans divulgâcher'),
    it(E(1355), 'penser au lecteur'),
  ], chk('Tu présentes l’histoire du film. Tu écris...', ['le point de départ, sans dire si le frère vend la pirogue', 'toute l’intrigue, jusqu’au dernier plan'], 0,
    'Le début suffit ; la suite appartient au spectateur. EN: the opening is enough.')),
], ['critique', 'jugement']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('L’ordre', 'L’ordre d’une critique : ...', ['verdict, résumé, analyse', 'accroche, présentation, analyse et réserves, verdict'], 1,
    'On juge à la fin, raisons posées. EN: hook first, verdict last.'),
  ctl('Le mot', '« Divulgâcher » a été proposé...', ['au Québec, pour remplacer « spoiler »', 'en France, au XIXe siècle'], 0,
    'Un terme de l’Office québécois de la langue française. EN: an OQLF term.'),
  ctl('Le registre', 'Dans une critique, plutôt que « nul », tu écris...', ['ce qui ne fonctionne pas, précisément', '« très nul »', '« bof »'], 0,
    'Un jugement précis, qu’on peut discuter. EN: be precise.'),
], ['critique']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'La critique, un genre',
    opener: {
      line: 'Quarante secondes de moteur avant la première note : ici tu découvres comment une critique s’ouvre, s’organise et se conclut. EN: Forty seconds of engine noise before the first note: here you see how a review opens, is built and concludes.',
      imageRef: 'lessons/analyser-oeuvre/act11.jpg',
    },
    sections: [],
    milestone: 'Tu construis une critique : une accroche, l’œuvre située sans rien divulgâcher, l’analyse pesée, le verdict à la fin. EN: You build a review: hook, placing without spoilers, weighed analysis, verdict last.',
    estScreens: 34, restPoints: ['a11-structure', 'a11-piege'],
  },
  sections: [A11_LECTURE, A11_STRUCTURE, A11_TRIER, A11_PIEGE, A11_CRITIQUE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA CRITIQUE
 *
 *  The production act. The press notes of an invented film are read with
 *  every move of the lesson, planned, rehearsed out loud with Solange, then
 *  turned into a written critique. The brief prints the notes again.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a12-lecture', layer: 'core', questionsInModal: true,
  title: 'Le dossier de presse', frSub: '« Marée basse », de Khadija Sarr',
  text: MAREE_TEXT,
  glossary: [
    { word: 'la pirogue', en: 'the pirogue, a long narrow fishing boat', note: 'Le bateau des pêcheurs, long et étroit.' },
  ],
  questions: [
    { q: 'Devine le sens : « l’histoire du frère reste en suspens ». Que veut dire « en suspens » ?', a: 'Sans conclusion : on ne sait pas comment elle se termine.' },
    { q: 'Qui est Ndèye, et pourquoi revient-elle à Joal ?', a: 'Une femme de trente-cinq ans qui vit à Bruxelles depuis quinze ans ; elle revient pour l’enterrement de son père, pêcheur.' },
    { q: 'Quels choix de mise en images le dossier décrit-il ?', a: 'Des plans fixes, souvent larges ; le père jamais à l’image ; aucune musique sauf au dernier plan ; une coupe brutale vers Bruxelles.' },
    { q: 'Comment le père est-il présent dans le film ?', a: 'Par sa voix seule, sur de vieilles cassettes : il reste hors champ.' },
    { q: 'Quelles réactions de spectateurs le dossier rapporte-t-il ?', a: 'Un film « trop lent » pour l’un, une spectatrice « bouleversée par la scène des cassettes », plusieurs regrets sur l’histoire du frère.' },
    { q: 'Quelle faiblesse le dossier laisse-t-il voir lui-même ?', a: 'Le frère, très présent au début, disparaît presque ensuite ; on ne sait pas s’il vend la pirogue.' },
  ],
  audio: REC('rec-c1-14-maree'), say: REFRAME, terms: ['moyens', 'critique'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-methode',
  title: 'Cinq étapes pour ta critique',
  steps: [
    '1. Accroche : un détail concret du film, pas un verdict. EN: open on a concrete detail.',
    '2. Situe : la cinéaste, le genre, le point de départ, sans divulgâcher. EN: place the work, spoil nothing.',
    '3. Analyse : deux ou trois moyens (plan, hors-champ, son, montage) et leurs effets. EN: two or three means and their effects.',
    '4. Pèse : une qualité accordée, une faiblesse précise, peut-être un parti pris. EN: grant, target, ask if deliberate.',
    '5. Verdict : ce qui l’emporte, et pour quel public. EN: what wins, and for whom.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['moyens', 'effet', 'jugement'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu écriras une critique',
  cases: [
    { situation: 'Un magazine culturel te commande un texte', fr: src(E(1372)).fr, en: src(E(1372)).en },
    { situation: 'Tu recommandes une exposition à des amis', fr: src(E(1355)).fr, en: src(E(1355)).en },
    { situation: 'À l’examen, une production écrite qui donne ton avis', fr: src(E(1207)).fr, en: src(E(1207)).en },
    { situation: 'Un débat après une projection', fr: src(E(1343)).fr, en: src(E(1343)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['critique', 'jugement'],
};

/** USE IT, out loud. Every French string here uses the typographic ’. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Solange veut ton avis',
  setting: 'À la rédaction de L’Œil du dimanche. Solange prépare le numéro de dimanche et te demande, avant que tu écrives, ce que tu penses de « Marée basse ». Tu as vu le film et lu le dossier de presse.',
  turns: [
    {
      ai: 'Alors, ce « Marée basse », ça raconte quoi ?', en: 'So, this Marée basse, what is it about?',
      user: src(E(1365)).fr, userEn: 'Marée basse follows Ndèye, back from Brussels to bury her father. (Situating the work, without spoiling.)',
      alts: [
        { fr: 'Le retour d’une femme à Joal, pour l’enterrement de son père, et une semaine en famille.', en: 'A woman’s return to Joal for her father’s funeral, and a week with her family.' },
        { fr: 'C’est le premier long métrage de Khadija Sarr : un deuil, une maison, une plage.', en: 'It is Khadija Sarr’s first feature: a bereavement, a house, a beach.' },
      ],
    },
    {
      ai: 'Et qu’est-ce qui t’a frappé, toi ?', en: 'And what struck you?',
      user: src(E(1366)).fr, userEn: 'We never see the father: we only hear his voice, on old cassettes. (A means: off-screen space.)',
      alts: [
        { fr: 'Le père reste hors champ, et il en devient d’autant plus présent.', en: 'The father stays off screen, and becomes all the more present.' },
        { fr: 'La scène des cassettes : sa voix, sans jamais son visage.', en: 'The cassette scene: his voice, never his face.' },
      ],
    },
    {
      ai: 'On m’a dit que c’était lent. C’est un défaut ?', en: 'I was told it is slow. Is that a flaw?',
      user: src(E(1367)).fr, userEn: 'The static shots of the beach leave time for grief. (The slowness given a meaning.)',
      alts: [
        { fr: 'C’est lent, oui, mais cette lenteur épouse le deuil.', en: 'It is slow, yes, but the slowness matches the grief.' },
        { fr: 'Pour certains, peut-être ; pour moi, c’est un parti pris qui fonctionne.', en: 'For some, perhaps; for me, it is a deliberate choice that works.' },
      ],
    },
    {
      ai: 'Et la musique, elle est comment ?', en: 'And what is the music like?',
      user: src(E(1368)).fr, userEn: 'The sound of the sea replaces music for almost the whole film. (Where the sound comes from.)',
      alts: [
        { fr: 'Il n’y en a presque pas : la mer et le vent en tiennent lieu.', en: 'There is almost none: the sea and the wind take its place.' },
        { fr: 'Une seule musique, au dernier plan, après une heure et demie de silence.', en: 'Just one piece of music, in the last shot, after an hour and a half of silence.' },
      ],
    },
    {
      ai: 'Tu n’as vraiment rien à lui reprocher ?', en: 'Do you really have nothing against it?',
      user: src(E(1369)).fr, userEn: 'The brother’s story is barely sketched. (A precise weakness.)',
      alts: [
        { fr: src(E(1370)).fr, en: src(E(1370)).en },
        { fr: 'Si, le frère disparaît presque après la première demi-heure.', en: 'Yes, the brother almost disappears after the first half hour.' },
      ],
    },
    {
      ai: 'Bon, alors, ton verdict ?', en: 'Right then, your verdict?',
      user: src(E(1371)).fr, userEn: 'All things considered, Marée basse is a fragile but real success. (A weighed verdict.)',
      alts: [
        { fr: 'Ses défauts tiennent au récit, ses qualités au regard, et le regard l’emporte.', en: 'Its flaws lie in the story, its strengths in the way it looks, and the looking wins.' },
        { fr: 'Un film inégal, mais qu’on n’oublie pas.', en: 'An uneven film, but one you do not forget.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['moyens', 'jugement', 'critique'],
};

/** THE GRADED TASK: a C1 critique of an invented film whose press notes
 *  are printed in the brief, graded on situating, means, effects, weighing,
 *  structure, and precision and nuance of vocabulary. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Écris ta critique', frSub: 'Mission écrite',
  brief: `Solange te commande, pour L’Œil du dimanche, la critique de « Marée basse ». Tu as vu le film ; voici son dossier de presse. ${MAREE_TEXT}`,
  briefEn: 'Solange commissions you, for L’Œil du dimanche, to review Marée basse. You have seen the film; its press notes are printed here so you can write with them in front of you.',
  produce: 'Écris une critique de 250 à 400 mots : ouvre sur une accroche, situe le film sans divulgâcher sa fin, analyse au moins deux de ses moyens et leurs effets, pèse une qualité et une faiblesse précises, puis donne un verdict argumenté à la fin.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'situer', label: 'Le film situé, sans rien divulgâcher', maxPoints: 3, descriptors: [
        '3 : Une accroche concrète, puis l’œuvre située (cinéaste, premier film, point de départ de l’histoire), sans révéler ce qui reste en suspens ni le dernier plan dans le détail.',
        '2 : L’œuvre est située, mais l’accroche manque, ou le résumé en dit trop.',
        '1 : Pas de présentation, ou un résumé de toute l’histoire à la place de la critique.',
      ] },
      { key: 'moyens', label: 'Les moyens nommés avec précision', maxPoints: 4, descriptors: [
        '4 : Au moins deux moyens du film nommés avec le mot juste (plan fixe, plan large, hors-champ, bande-son, coupe, musique ajoutée) et rattachés à des moments précis.',
        '3 : Deux moyens, dont un nommé de façon approximative.',
        '2 : Un seul moyen, ou des moyens évoqués sans le vocabulaire de l’analyse (« la caméra filme bien »).',
        '1 : Aucun moyen : seulement des impressions.',
      ] },
      { key: 'effets', label: 'Ce que les moyens produisent', maxPoints: 4, descriptors: [
        '4 : Chaque moyen est relié à un effet précis sur le spectateur (l’attente, la présence de l’absent, l’exil rendu sensible), sans formule creuse.',
        '3 : Les effets sont dits, mais un moyen reste sans effet.',
        '2 : Les effets restent généraux (« c’est émouvant », « ça marche »).',
        '1 : Aucun lien entre ce que l’on voit et ce que l’on ressent.',
      ] },
      { key: 'pesee', label: 'Une critique qui pèse', maxPoints: 3, descriptors: [
        '3 : Au moins une qualité accordée et une faiblesse précise (le frère, la lenteur, la kora finale), un parti pris envisagé, et un verdict qui dit ce qui l’emporte.',
        '2 : Qualités et défauts sont juxtaposés, sans verdict qui tranche ; ou la faiblesse reste vague.',
        '1 : Un éloge ou un rejet sans nuance.',
      ] },
      { key: 'structure', label: 'L’architecture du genre', maxPoints: 3, descriptors: [
        '3 : Accroche, présentation, analyse, réserves, verdict à la fin, avec des liens logiques variés (certes, en revanche, si… , tout bien pesé).',
        '2 : Les parties sont là, mais dans le désordre ou sans liens.',
        '1 : Des remarques sans ordre, ou le verdict dès la première ligne et rien pour le justifier.',
      ] },
      { key: 'langue', label: 'Une langue précise et nuancée', maxPoints: 3, descriptors: [
        '3 : Un vocabulaire d’évaluation précis (saisissant, convenu, appuyé, abouti, inégal), des phrases complexes maîtrisées, presque aucune erreur.',
        '2 : Un vocabulaire juste mais peu varié (beau, bien, intéressant), quelques erreurs qui ne gênent pas.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Une voix…',
    'Pour son premier long métrage,',
    'La réalisatrice filme…',
    'Le choix le plus fort reste…',
    'Si…, en revanche,',
    'On peut toutefois regretter que…',
    'Est-ce un défaut ou un parti pris ?',
    'Tout bien pesé,',
  ],
  modelAnswer: 'Une voix d’homme sort d’un vieux magnétophone, grave, un peu voilée, et l’on comprend vite qu’on ne verra jamais le visage qui l’accompagne. Tout « Marée basse » tient dans ce refus. Pour son premier long métrage, coproduit par le Sénégal et la Belgique, Khadija Sarr suit Ndèye, Bruxelloise d’adoption revenue à Joal pour enterrer son père, pêcheur, et confrontée à un frère pressé de vendre la pirogue familiale. La réalisatrice filme le deuil comme une attente. Les plans, presque tous fixes et souvent larges, laissent la plage et la cour occuper l’écran ; Ndèye y paraît minuscule, et le temps semble s’arrêter avec elle. Certains trouveront cette lenteur pesante ; elle épouse pourtant ces journées où l’on ne fait rien d’autre que se souvenir. Le choix le plus fort reste le hors-champ : privé d’image, le père n’existe que par sa voix enregistrée, et il en devient omniprésent. La bande-son va dans le même sens. Pendant presque tout le film, aucune musique : la mer et le vent finissent par remplacer les mots que personne ne prononce. Une coupe brutale nous jette soudain dans une rue de Bruxelles sous la pluie, avant de revenir à Joal ; en un instant, l’exil de Ndèye devient sensible. Le film n’est pas sans faiblesses. Si le deuil est filmé avec une rare justesse, le conflit autour de la pirogue, en revanche, s’efface après la première demi-heure : on aurait aimé que cette question d’héritage soit menée à son terme. Quant à l’air de kora du dernier plan, il prend, après tant de silence, un poids considérable ; on peut toutefois regretter qu’il souligne une émotion que l’image suffisait à donner. Tout bien pesé, « Marée basse » est une réussite fragile mais réelle : ses défauts tiennent au récit, ses qualités au regard, et c’est le regard qui l’emporte. On le recommandera à ceux qui acceptent de prendre, avec son héroïne, le temps du deuil.',
  modelAnswerEn: 'A man’s voice comes out of an old tape recorder, deep, a little husky, and you soon understand that you will never see the face that goes with it. The whole of Marée basse lies in that refusal. For her first feature, a Senegalese-Belgian co-production, Khadija Sarr follows Ndèye, a Brussels resident by adoption who comes back to Joal to bury her father, a fisherman, and faces a brother in a hurry to sell the family pirogue. The director films grief as waiting. The shots, almost all static and often wide, leave the beach and the courtyard to fill the screen; Ndèye looks tiny in them, and time seems to stop with her. Some will find this slowness heavy; yet it matches those days when you do nothing but remember. The strongest choice is off-screen space: denied an image, the father exists only through his recorded voice, and he becomes all the more present. The soundtrack goes the same way. For almost the whole film there is no music: the sea and the wind end up replacing the words nobody speaks. An abrupt cut suddenly throws us into a rainy Brussels street before returning to Joal; in an instant, Ndèye’s exile becomes tangible. The film is not without weaknesses. While the grief is filmed with rare accuracy, the conflict over the pirogue fades after the first half hour: one would have liked this question of inheritance to be seen through. As for the kora tune in the last shot, after so much silence it carries considerable weight; one may regret, however, that it underlines an emotion the image was enough to convey. All things considered, Marée basse is a fragile but real success: its flaws lie in its story, its strengths in its way of looking, and the looking wins. It will be recommended to those willing to take, with its heroine, the time of grief.',
  watchFor: [
    { pattern: 'A summary of the whole plot in place of a critique, or the end given away (the last shot described in detail, the fate of the pirogue invented).', criterion: 'situer', feedback: 'Situe sans divulgâcher : le point de départ suffit. La suite appartient au spectateur.', ref: 'a11-structure' },
    { pattern: 'The verdict in the first sentence (« un très beau film ») instead of a concrete hook.', criterion: 'structure', feedback: 'Ouvre sur un détail concret ; garde le verdict pour la fin, quand tes raisons sont posées.', ref: 'a11-critique' },
    { pattern: 'Means described without the vocabulary of analysis (« la caméra filme la plage », « c’est bien filmé »).', criterion: 'moyens', feedback: 'Nomme le moyen : plan fixe, plan large, hors-champ, coupe, son ajouté ou venu de la scène.', ref: 'a3-plans' },
    { pattern: 'The father’s absence treated as a gap or a mistake rather than as off-screen space with an effect.', criterion: 'effets', feedback: 'Le père est hors champ : dis ce que son absence produit sur le spectateur.', ref: 'a4-champ' },
    { pattern: 'The absence of music noted (« il n’y a pas de musique ») with no account of what replaces it or what it does.', criterion: 'effets', feedback: 'Dis ce qu’on entend à la place, la mer, le vent, et ce que ce choix produit.', ref: 'a6-son' },
    { pattern: 'The abrupt cut to Brussels called « bizarre » or a mistake, with no effect named.', criterion: 'effets', feedback: 'Une coupe visible peut être voulue : dis ce qu’elle fait sentir.', ref: 'a5-piege' },
    { pattern: 'Impressions only (« émouvant », « magnifique », « trop lent ») with no observation behind them.', criterion: 'effets', feedback: 'Pars de ton impression, puis appuie-la sur un fait du film et sur son effet.', ref: 'a2-etapes' },
    { pattern: 'Only praise, or only blame; no weakness, or no strength granted.', criterion: 'pesee', feedback: 'Pèse : accorde une qualité, vise une faiblesse précise, puis dis laquelle l’emporte.', ref: 'a10-formules' },
    { pattern: 'The slowness condemned outright without asking whether it is a parti pris.', criterion: 'pesee', feedback: 'Avant de reprocher la lenteur, demande-toi si elle est voulue et ce qu’elle produit.', ref: 'a10-trier' },
    { pattern: 'Strengths and weaknesses listed with no verdict that decides.', criterion: 'pesee', feedback: 'Termine par un verdict qui tranche : ce qui l’emporte, et pour quel public.', ref: 'a10-critique' },
    { pattern: 'Vague evaluative words repeated (beau, bien, nul, génial, intéressant).', criterion: 'langue', feedback: 'Varie et précise : saisissant, convenu, appuyé, abouti, inégal, une réussite fragile.', ref: 'a11-piege' },
    { pattern: 'Facts invented about the film (a prize, a running time different from the notes, a cast, a festival).', criterion: 'situer', feedback: 'Ne t’appuie que sur le dossier de presse et sur ce que tu as vu ; n’invente pas de fait.', ref: 'a12-lecture' },
  ],
  graderNotes: [
    'Word count: 250 to 400, with 10% tolerance (225 to 440) before the criteria lose points for length. A title does not count.',
    'The film is invented and described only by the press notes in the brief. The learner « has seen » it: accept descriptions of shots and moments consistent with the notes (Ndèye tiny in a wide shot, the cassettes, the rain in Brussels). Do not reward invented facts that contradict the notes (a score throughout, the father shown, the pirogue sold or kept).',
    'Any verdict is acceptable, positive, negative or mixed, if it is argued from the means and weighed. Do not mark down a learner who dislikes the film; mark down an unargued verdict.',
    'For « moyens », accept plan fixe, plan large or plan d’ensemble, hors-champ or voix hors champ, bande-son or son, absence de musique, musique ajoutée, coupe, faux raccord or coupe franche, dernier plan. « Voix off » for the father’s recorded voice is acceptable but less precise (it is heard in the scene, on cassettes): do not deduct more than one point.',
    'For « pesee », accept as a weakness: the brother’s story, the slowness, the kora as too emphatic, or any other precise point drawn from the notes. Accept the kora as a strength as well.',
    'The spectators’ reactions in the notes may be quoted briefly (three to fifteen words, in guillemets); a critique that only rearranges those reactions scores low on « effets ».',
    'C1 criteria: precision and nuance of vocabulary, and argument structure. Do not penalise a subjunctive / indicative slip after « bien que » as more than minor.',
    'Do not mark irony (lesson 20 in C1) or press framing (lesson 24 in C1) beyond the present criteria.',
    'Accept European and Québec vocabulary alike (long métrage, film; divulgâcher, révéler).',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['moyens', 'effet', 'jugement'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis ta critique à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['critique'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-methode',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'les quatre temps', v: 'impression, observation, effet, jugement', say: src(E(1207)).fr,
      detail: { title: 'De l’émotion aux moyens', body: 'Pars de ce que tu ressens, appuie-le sur un fait, dis l’effet, puis juge. EN: feel, observe, explain, judge.', say: src(E(1226)).fr } },
    { k: 'le plan', v: 'valeur, angle, cadre', say: src(E(1242)).fr,
      detail: { title: 'Filmer', body: 'Gros plan, plan d’ensemble, plongée, plan fixe : nomme, puis dis l’effet. EN: name the shot, then its effect.', say: src(E(1237)).fr } },
    { k: 'le hors-champ', v: 'ce que le cadre garde dehors', say: src(E(1254)).fr,
      detail: { title: 'Ce qu’on ne voit pas', body: 'Un contrechamp refusé, une voix sans visage : l’absence a un effet. EN: absence has an effect.', say: src(E(1251)).fr } },
    { k: 'le montage et le son', v: 'coupes, rythme, d’où vient le son', say: src(E(1270)).fr,
      detail: { title: 'Assembler et écouter', body: 'Raccord, faux raccord, plan-séquence ; son de la scène ou ajouté, silence. EN: joins and sound sources.', say: src(E(1286)).fr } },
    { k: 'l’image', v: 'composition, lumière, touche', say: src(E(1301)).fr,
      detail: { title: 'Regarder une toile', body: 'Premier plan, lignes, vide ; source de lumière, clair-obscur, touche, aplat. EN: composition and light.', say: src(E(1316)).fr } },
    { k: 'la critique', v: 'accroche, analyse, pesée, verdict', say: src(E(1360)).fr,
      detail: { title: 'Le genre', body: 'Accorde, nuance, tranche ; le verdict à la fin, sans rien divulgâcher. EN: weigh, then decide, last.', say: src(E(1344)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['moyens', 'critique'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne t’arrêtes plus à « j’ai adoré ». Tu pars de ton impression, tu la fondes sur une observation, tu dis l’effet, puis tu juges. Tu nommes un plan, un angle, un hors-champ, un raccord ou un plan-séquence, la source d’un son ; tu décris la composition d’une image, sa lumière et sa touche, et, en quelques mots, une orchestration ou une mise en scène. Tu écris une critique qui accroche, situe sans divulgâcher, pèse et tranche. Le piège qui reste est double : nommer un moyen sans dire ce qu’il produit, ou juger avant d’avoir analysé. Avant l’examen, choisis un film, une toile ou un morceau, et écris trois phrases : une observation précise, son effet, et un jugement qui s’appuie sur les deux. EN: Before the exam, pick one work and write an observation, its effect, and a judgement built on both.',
  stats: [
    { k: 'Les quatre temps', v: 'impression, observation, effet, jugement' },
    { k: 'Le cinéma', v: 'plan, hors-champ, montage, son' },
    { k: 'L’image et la scène', v: 'composition, lumière, mise en scène' },
    { k: 'La critique', v: 'accorder, nuancer, trancher' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11 (act 12's
 *  critique is tested by the task). Each round targets a distinct
 *  errorTrigger. `fold()` strips accents, punctuation and spacing, so
 *  nothing turns on them. Slots are then spread by `spreadSlots()`: no
 *  `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une partie de la phrase est fausse. Écris la phrase juste. EN: Part of the sentence is wrong; write it correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-reaction', label: 'De la réaction à l’analyse', targets: ['reaction-sans-raison'],
      questions: [
        mc('Théo écrit : « J’ai adoré ce film. » C’est...', ['une impression', 'une analyse', 'une observation'], 0, 'Il dit son plaisir, pas ce que fait le film. EN: an impression.', 'a1-lecture'),
        mc('Dans une critique, ton émotion sert...', ['d’indice pour chercher les moyens de l’œuvre', 'de preuve suffisante', 'à remplacer l’analyse'], 0, 'Elle indique où chercher ; l’œuvre fournit la preuve. EN: a clue.', 'a1-scene'),
        mc('Que manque-t-il à « Les acteurs sont géniaux » ?', ['ce que font les acteurs, précisément', 'un adjectif plus fort', 'le titre du film'], 0, 'Un jeu se décrit : gestes, voix, silences. EN: describe the acting.', 'a1-check'),
        mc('Au B2, tu demandais « Qui raconte cette histoire ? ». Devant un tableau, tu demandes plutôt...', ['avec quels moyens l’œuvre produit son effet', 'qui est le narrateur'], 0, 'Un tableau n’a pas de narrateur ; il a des moyens. EN: ask about the means.', 'a1-rappel'),
        tI('Écris le verbe qui manque.', 'Ce film m’a bouleversé, et je veux montrer comment il y ... .', 'parvient', 'Parvenir à : réussir à produire cet effet. EN: how it manages it.', 'a1-scene', ['arrive', 'Ce film m’a bouleversé, et je veux montrer comment il y parvient.', 'Ce film m’a bouleversé, et je veux montrer comment il y arrive.']),
        tI('Écris le mot qui manque.', 'Une critique pèse les forces et les ... d’une œuvre.', 'faiblesses', 'Les forces d’un côté, les faiblesses de l’autre. EN: strengths and weaknesses.', 'a1-usages', ['défauts', 'Une critique pèse les forces et les faiblesses d’une œuvre.', 'Une critique pèse les forces et les défauts d’une œuvre.']),
        eS('Mon émotion est une preuve, pas un point de départ.', 'Mon émotion est un point de départ, pas une preuve.', 'L’émotion ouvre l’analyse ; elle ne la remplace pas. EN: a starting point, not proof.', 'a1-check'),
        lC('Écoute. Est-ce une impression ou une analyse ?', src(E(1200)).fr, ['une impression', 'une analyse'], 0, 'Aucun moyen de l’œuvre n’est nommé. EN: no means named.', 'a1-lecture'),
      ],
    },
    {
      id: 'r2-etapes', label: 'Les quatre temps', targets: ['effet-sans-moyen'],
      questions: [
        mc('« La dernière scène dure quatre minutes, sans un mot. » C’est...', ['une observation', 'une impression', 'un jugement'], 0, 'Un fait que chacun peut vérifier. EN: an observation.', 'a2-etapes'),
        mc('Quel est l’ordre de l’analyse ?', ['impression, observation, effet, jugement', 'jugement, impression, effet, observation', 'effet, jugement, observation, impression'], 0, 'On ressent, on observe, on explique, puis on juge. EN: feel, observe, explain, judge.', 'a2-etapes'),
        mc('« Ce silence oblige le spectateur à tout imaginer. » La phrase décrit...', ['un effet', 'une observation', 'un résumé'], 0, 'Ce que le silence fait au spectateur. EN: an effect.', 'a2-trier'),
        tI('Remplace « magnifique » par un adjectif précis et élogieux.', 'un final ... (qui frappe fortement)', 'saisissant', 'Saisissant : qui frappe vivement l’esprit. EN: striking.', 'a2-critique', ['frappant', 'impressionnant', 'un final saisissant', 'un final frappant', 'un final impressionnant']),
        tI('Écris l’adjectif qui reproche à une fin d’être sans surprise.', 'un dénouement ...', 'convenu', 'Convenu : attendu, conforme aux habitudes. EN: predictable.', 'a2-critique', ['prévisible', 'attendu', 'un dénouement convenu', 'un dénouement prévisible', 'un dénouement attendu']),
        eS('Une observation se ressent, une impression se vérifie.', 'Une impression se ressent, une observation se vérifie.', 'L’impression est intérieure ; l’observation est un fait. EN: impressions are felt, observations checked.', 'a2-trier', ['Une observation se vérifie, une impression se ressent.']),
        lC('Écoute. Quel temps de l’analyse entends-tu ?', src(E(1221)).fr, ['l’effet', 'l’observation', 'l’impression'], 0, 'Un effet nommé : le malaise. EN: the effect.', 'a2-trier'),
        lC('Écoute. Que fait cette phrase ?', src(E(1223)).fr, ['Elle donne un sens à la lenteur.', 'Elle reproche la lenteur.'], 0, 'La lenteur épouse l’ennui du personnage. EN: it gives the slowness a meaning.', 'a2-erreurs'),
      ],
    },
    {
      id: 'r3-plans', label: 'Le cadre et le plan', targets: ['plan-mal-nomme'],
      questions: [
        mc('Un visage qui remplit l’écran, c’est...', ['un gros plan', 'un plan d’ensemble', 'un plan moyen'], 0, 'Le gros plan isole un visage ou un objet. EN: a close-up.', 'a3-plans'),
        mc('La caméra regarde d’en haut : c’est...', ['une plongée', 'une contre-plongée'], 0, 'Plongée : d’en haut. EN: a high angle.', 'a3-piege'),
        mc('Dans le film de Chantal Akerman (1975), la caméra est...', ['fixe, de face, à hauteur du regard', 'toujours en mouvement', 'placée très haut, en plongée'], 0, 'Un cadre immobile qui regarde chaque geste à égalité. EN: static, frontal, at eye level.', 'a3-lecture'),
        mc('Le mot « cadrage », employé pour un article, vient...', ['de l’image : la photographie et le cinéma', 'de la musique', 'du droit'], 0, `${Cap(PRESSE_REF)} l’employait au sens figuré. EN: from images.`, 'a3-trier'),
        tI('Écris l’adjectif.', 'Quand la caméra ne bouge pas, c’est un plan ... .', 'fixe', 'Le cadre reste immobile. EN: a static shot.', 'a3-plans', ['un plan fixe', 'plan fixe']),
        tI('Écris le nom de l’angle.', 'Une caméra placée en bas, tournée vers le haut, filme en ... .', 'contre-plongée', 'Contre-plongée : d’en bas. EN: a low angle.', 'a3-piege', ['une contre-plongée']),
        eS('Le gros plan montre toute la rue et les passants.', 'Le plan d’ensemble montre toute la rue et les passants.', 'Toute la rue, c’est un plan large, un plan d’ensemble. EN: a wide shot.', 'a3-piege', ['Le plan large montre toute la rue et les passants.']),
        lC('Écoute. Quel plan est décrit ?', src(E(1236)).fr, ['un plan large qui situe', 'un détail isolé'], 0, 'Le plan d’ensemble situe dans un paysage. EN: a wide shot.', 'a3-plans'),
      ],
    },
    {
      id: 'r4-champ', label: 'Champ et hors-champ', targets: ['hors-champ-ignore'],
      questions: [
        mc('Le contrechamp, c’est...', ['le plan pris dans la direction opposée', 'tout ce qui est hors du cadre', 'un plan sans coupe'], 0, 'Il montre ce qui fait face au plan précédent. EN: the reverse shot.', 'a4-champ'),
        mc('Un cri qu’on entend sans voir d’où il vient appartient...', ['au hors-champ', 'au champ', 'au contrechamp'], 0, 'Hors du cadre, mais présent. EN: off screen.', 'a4-champ'),
        mc('Dans « La Noire de… » (1966), la jeune femme suit ses employeurs...', ['de Dakar à Antibes', 'de Bamako à Paris', 'de Dakar à Bruxelles'], 0, 'Elle y est réduite aux tâches ménagères. EN: Dakar to Antibes.', 'a4-lecture'),
        tI('Écris le mot.', 'Tout ce qui existe autour du cadre, sans être vu : le ... .', 'hors-champ', 'On l’entend, on le devine, on ne le voit pas. EN: off-screen space.', 'a4-champ', ['le hors-champ', 'hors champ']),
        tI('Complète le mot composé.', 'Filmer deux personnages tour à tour, chacun de face : le champ-... .', 'contrechamp', 'Le champ-contrechamp, alternance classique du dialogue. EN: shot-reverse-shot.', 'a4-champ', ['champ-contrechamp', 'le champ-contrechamp', 'contre-champ']),
        eS('Le hors-champ montre tout ce que le cadre contient.', 'Le champ montre tout ce que le cadre contient.', 'Le champ est dans le cadre ; le hors-champ, autour. EN: the field is inside the frame.', 'a4-champ'),
        lC('Écoute. Qui voit-on ?', src(E(1249)).fr, ['celle qui écoute', 'celui qui parle'], 0, 'Le contrechamp sur celui qui parle ne vient pas. EN: the listener.', 'a4-ecoute'),
        lC('Écoute. Quel est l’effet décrit ?', src(E(1251)).fr, ['le spectateur imagine', 'le spectateur voit tout'], 0, 'Le hors-champ fait travailler l’imagination. EN: the viewer imagines.', 'a4-trier'),
      ],
    },
    {
      id: 'r5-montage', label: 'Le montage', targets: ['montage-juge-a-sa-discretion'],
      questions: [
        mc('Une scène entière filmée en une seule prise, c’est...', ['un plan-séquence', 'un montage alterné', 'un faux raccord'], 0, 'Sans arrêter la caméra. EN: a sequence shot.', 'a5-exemples'),
        mc('Montrer la maison, puis la route, puis la maison encore, c’est...', ['un montage alterné', 'un plan-séquence', 'un gros plan'], 0, 'Deux lieux qui alternent et créent l’attente. EN: cross-cutting.', 'a5-piege'),
        mc('En 1960, « À bout de souffle » est connu pour...', ['ses faux raccords', 'ses plans-séquences de vingt minutes', 'son absence de dialogues'], 0, 'La coupe devient visible et devient un style. EN: its jump cuts.', 'a5-lecture'),
        mc('Un montage fait de plans très courts rend le rythme...', ['nerveux, haché', 'lent', 'immobile'], 0, 'Des plans brefs accélèrent. EN: jerky, nervous.', 'a5-trier'),
        tI('Écris le pluriel.', 'un plan-séquence, des ...', 'plans-séquences', 'Les deux noms prennent la marque du pluriel. EN: both nouns take an s.', 'a5-exemples', ['des plans-séquences']),
        tI('Écris le mot.', 'Le passage d’un plan à l’autre, quand il reste invisible : un ... .', 'raccord', 'Un raccord réussi ne se remarque pas. EN: a match.', 'a5-lecture', ['un raccord']),
        eS('Des plans très courts ralentissent le rythme.', 'Des plans très courts accélèrent le rythme.', 'Plans brefs : rythme rapide ; plans longs : rythme lent. EN: short shots speed up.', 'a5-trier', ['Des plans très longs ralentissent le rythme.']),
        lC('Écoute. Le montage se voit-il ?', src(E(1271)).fr, ['Oui, et c’est un choix.', 'Non, il est invisible.'], 0, 'Une coupe visible et voulue. EN: visible and deliberate.', 'a5-trier'),
      ],
    },
    {
      id: 'r6-son', label: 'La bande-son', targets: ['son-oublie'],
      questions: [
        mc('Une musique que seuls les spectateurs entendent est...', ['ajoutée', 'issue de la scène', 'un son direct'], 0, 'Personne ne la joue dans le film. EN: added.', 'a6-son'),
        mc('« Pour la suite du monde » (1963) est tourné...', ['à l’île aux Coudres, en son direct', 'en studio, à Paris', 'à Dakar'], 0, 'Avec une caméra légère et le son direct. EN: on the île aux Coudres.', 'a6-lecture'),
        mc('Une comptine sur une scène de violence crée...', ['un décalage qui inquiète', 'une musique trop appuyée', 'un plan-séquence'], 0, 'La musique contredit l’image. EN: an unsettling gap.', 'a6-lecture'),
        tI('Écris le mot.', 'Une voix sans visage qui commente les images : une voix ... .', 'off', 'La voix off raconte ou commente. EN: a voice-over.', 'a6-son', ['une voix off', 'voix off']),
        tI('Complète le mot composé.', 'Les voix, les bruits, la musique et les silences : la bande-... .', 'son', 'La bande-son : tout ce qu’on entend. EN: the soundtrack.', 'a6-son', ['bande-son', 'la bande-son']),
        eS('Les bruits ne font pas partie de la bande-son.', 'Les bruits font partie de la bande-son.', 'Voix, bruits, musique, silences : tout compte. EN: noises are part of it.', 'a6-erreurs'),
        lC('Écoute. Les personnages entendent-ils la musique ?', src(E(1279)).fr, ['oui', 'non'], 0, 'Elle vient de la scène. EN: yes, it is in the scene.', 'a6-ecoute'),
        lC('Écoute. Que dit la phrase du silence ?', src(E(1282)).fr, ['qu’il compte comme un son', 'qu’il faut l’éviter'], 0, 'Le silence se prépare et se remarque. EN: it counts.', 'a6-son'),
      ],
    },
    {
      id: 'r7-composition', label: 'La composition', targets: ['composition-vague'],
      questions: [
        mc('La zone la plus proche du spectateur, c’est...', ['le premier plan', 'l’arrière-plan', 'le point de fuite'], 0, 'Devant : le premier plan. EN: the foreground.', 'a7-composition'),
        mc('Les lignes qui convergent conduisent le regard vers...', ['le point de fuite', 'le premier plan', 'le bord du cadre'], 0, 'La perspective creuse la profondeur. EN: the vanishing point.', 'a7-composition'),
        mc('Chez Seydou Keïta, l’arrière-plan est...', ['un tissu à motifs tendu contre le mur', 'un paysage en perspective', 'un ciel'], 0, 'Un fond qui ferme l’espace. EN: a patterned cloth.', 'a7-lecture'),
        mc('Un sujet décentré, à côté d’un grand vide, produit souvent...', ['une tension, un malaise', 'une stabilité solennelle'], 0, 'La symétrie stabilise ; le décentrement inquiète. EN: tension.', 'a7-trier'),
        tI('Écris le mot.', 'L’illusion de la profondeur sur une surface plane : la ... .', 'perspective', 'Grâce aux lignes de fuite. EN: perspective.', 'a7-composition', ['la perspective']),
        tI('Écris le contraire de « le premier plan ».', 'Le fond de l’image : l’... .', 'arrière-plan', 'Devant, le premier plan ; au fond, l’arrière-plan. EN: the background.', 'a7-composition', ['l’arrière-plan']),
        eS('La symétrie donne au portrait son désordre.', 'La symétrie donne au portrait sa solennité.', 'La symétrie stabilise et solennise. EN: symmetry gives solemnity.', 'a7-composition', ['La symétrie donne au portrait sa stabilité.', 'La symétrie donne au portrait son équilibre.', 'La symétrie donne au portrait son ordre.']),
        lC('Écoute. Où l’image conduit-elle le regard ?', src(E(1296)).fr, ['vers le point de fuite', 'vers le premier plan'], 0, 'Les lignes convergent. EN: to the vanishing point.', 'a7-trier'),
      ],
    },
    {
      id: 'r8-lumiere', label: 'La lumière et la touche', targets: ['lumiere-vague'],
      questions: [
        mc('Des zones très claires contre des zones très sombres, c’est...', ['le clair-obscur', 'l’aplat', 'la touche'], 0, 'Un jeu de contrastes de lumière. EN: chiaroscuro.', 'a8-lumiere'),
        mc('Dans « La Madeleine à la veilleuse », la lumière vient...', ['d’une seule bougie', 'd’une fenêtre', 'de partout à la fois'], 0, 'Une source unique ; le reste dans l’ombre. EN: one candle.', 'a8-lecture'),
        mc('« Impression, soleil levant » représente...', ['le port du Havre dans la brume', 'une scène de nuit à la bougie', 'une pipe'], 0, 'Monet, 1872. EN: the port of Le Havre.', 'a8-lecture'),
        tI('Écris le pluriel.', 'un clair-obscur, des ...', 'clairs-obscurs', 'Les deux éléments prennent un s. EN: both parts take an s.', 'a8-lumiere', ['des clairs-obscurs']),
        tI('Écris le mot.', 'La manière dont le peintre pose la peinture : la ... .', 'touche', 'Visible ou lisse, rapide ou appliquée. EN: brushwork.', 'a8-lumiere', ['la touche']),
        eS('Chez Monet, la touche est lisse et invisible.', 'Chez Monet, la touche est rapide et visible.', 'De près, on voit des taches. EN: visible strokes.', 'a8-piege', ['Chez Monet, la touche est visible.', 'Chez Monet, la touche est rapide, visible, fragmentée.', 'Chez Monet, la touche est visible et fragmentée.', 'Chez Monet, la touche est rapide et fragmentée.']),
        lC('Écoute. De quoi parle la phrase ?', src(E(1314)).fr, ['d’une couleur lisse et uniforme', 'd’une touche très visible'], 0, 'L’aplat : une couleur égale. EN: flat colour.', 'a8-lumiere'),
        lC('Écoute. Comment est né le mot ?', src(E(1313)).fr, ['d’une moquerie', 'd’un éloge'], 0, 'Un critique raillait les exposants. EN: from a jibe.', 'a8-piege'),
      ],
    },
    {
      id: 'r9-scene', label: 'La musique et la scène', targets: ['musique-scene-floues'],
      questions: [
        mc('Dans le Boléro de Ravel, ce qui change, c’est...', ['les instruments', 'la mélodie', 'le rythme de la caisse claire'], 0, 'La mélodie reste la même. EN: the instruments.', 'a9-exemples'),
        mc('Une intensité qui augmente peu à peu, c’est...', ['un crescendo', 'une orchestration', 'une scénographie'], 0, 'Du très doux au très fort. EN: a crescendo.', 'a9-trier'),
        mc('Le décor, les objets et la lumière d’un spectacle relèvent de...', ['la scénographie', 'l’orchestration', 'le jeu'], 0, 'L’espace de la scène. EN: stage design.', 'a9-trier'),
        mc('En 1968, au Théâtre du Rideau Vert, « Les Belles-sœurs »...', ['fait entendre le joual sur une scène professionnelle', 'est le premier opéra québécois'], 0, 'La langue de tous les jours, sur scène. EN: joual on stage.', 'a9-lecture'),
        tI('Écris le mot.', 'Le choix des instruments qui portent la musique : l’... .', 'orchestration', 'L’orchestration fait tout dans le Boléro. EN: orchestration.', 'a9-exemples', ['l’orchestration']),
        tI('Écris le mot qui manque.', 'Au théâtre, un même texte change selon la mise en ... .', 'scène', 'La mise en scène organise le jeu et l’espace. EN: staging.', 'a9-exemples', ['mise en scène', 'la mise en scène', 'Au théâtre, un même texte change selon la mise en scène.']),
        eS('Le Boléro commence très fort et finit tout doucement.', 'Le Boléro commence très doucement et finit très fort.', 'C’est un long crescendo. EN: soft to loud.', 'a9-lecture', ['Le Boléro commence tout doucement et finit très fort.', 'Le Boléro commence très doucement et finit aussi fort que possible.', 'Le Boléro commence doucement et finit fort.']),
        lC('Écoute. De quel moyen parle-t-on ?', src(E(1330)).fr, ['de la scénographie', 'de l’orchestration'], 0, 'La lumière fait partie de la scénographie. EN: stage design.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-peser', label: 'Peser le pour et le contre', targets: ['jugement-non-pese'],
      questions: [
        mc('« Certes, le thème n’est pas neuf ; mais la première salle est saisissante. » L’auteure insiste sur...', ['la première salle', 'le thème'], 0, 'Ce qui suit « mais » pèse le plus. EN: the part after mais.', 'a10-formules'),
        mc('« Si le début convainc, la suite, en revanche, déçoit. » Ici, « si » exprime...', ['une opposition', 'une condition', 'une cause'], 0, 'Le début et la suite s’opposent. EN: a contrast.', 'a10-formules'),
        mc('Un choix délibéré de l’artiste, qu’on peut prendre pour un défaut : ...', ['un parti pris', 'une longueur', 'une réserve'], 0, 'On le juge à ce qu’il produit. EN: a deliberate choice.', 'a10-trier'),
        tI('Écris le mot qui manque.', 'Tout bien ..., les qualités l’emportent.', 'pesé', 'La formule qui conclut. EN: all things considered.', 'a10-formules', ['Tout bien pesé, les qualités l’emportent.', 'tout bien pesé']),
        tI('Écris le mot qui désigne des passages trop longs.', 'Malgré quelques ..., l’exposition tient ses promesses.', 'longueurs', 'Des longueurs : des moments qui traînent. EN: overlong stretches.', 'a10-formules', ['Malgré quelques longueurs, l’exposition tient ses promesses.']),
        eS('Si le début convainc, la suite, en revanche, convainc aussi.', 'Si le début convainc, la suite, en revanche, déçoit.', '« En revanche » annonce une opposition. EN: en revanche needs a contrast.', 'a10-formules', ['Si le début convainc, la suite, en revanche, convainc moins.', 'Si le début convainc, la suite, en revanche, ne convainc pas.']),
        lC('Écoute. Le verdict est-il positif ?', src(E(1345)).fr, ['oui', 'non'], 0, 'Les qualités l’emportent. EN: yes.', 'a10-formules'),
        lC('Écoute. Que fait la phrase ?', src(E(1347)).fr, ['Elle se demande si le défaut est voulu.', 'Elle condamne le défaut.'], 0, 'Défaut ou parti pris ? EN: flaw or choice?', 'a10-trier'),
      ],
    },
    {
      id: 'r11-genre', label: 'La critique, un genre', targets: ['critique-sans-architecture'],
      questions: [
        mc('Une critique s’ouvre de préférence sur...', ['une accroche concrète', 'le verdict', 'le résumé complet'], 0, 'Un détail qui donne envie de lire. EN: a hook.', 'a11-structure'),
        mc('Révéler la fin d’un film dans une critique, c’est...', ['la divulgâcher', 'l’analyser', 'la nuancer'], 0, 'Un mot proposé au Québec. EN: to spoil it.', 'a11-trier'),
        mc('Le verdict d’une critique arrive...', ['à la fin, une fois les raisons données', 'dès la première phrase'], 0, 'On juge après avoir analysé. EN: last.', 'a11-structure'),
        mc('Une œuvre qui n’atteint pas ce qu’elle vise est...', ['inaboutie', 'aboutie', 'dépouillée'], 0, 'Inaboutie : qui manque son but. EN: falls short.', 'a11-piege'),
        tI('Écris le verbe proposé au Québec pour remplacer « spoiler ».', 'Je résume le début sans ... la fin.', 'divulgâcher', 'Divulguer + gâcher. EN: to spoil.', 'a11-trier', ['Je résume le début sans divulgâcher la fin.']),
        tI('Écris le mot.', 'La première phrase d’une critique, qui donne envie de lire : l’... .', 'accroche', 'L’accroche intrigue sans juger. EN: the hook.', 'a11-structure', ['l’accroche', 'une accroche']),
        eS('Une critique est un résumé de l’œuvre.', 'Une critique n’est pas un résumé de l’œuvre.', 'Elle situe, analyse, pèse et juge. EN: not a summary.', 'a11-piege', ['Une critique n’est pas un résumé.']),
        lC('Écoute. Quelle partie de la critique entends-tu ?', 'Au total, un film imparfait, mais qu’on n’oublie pas.', ['le verdict', 'l’accroche'], 0, '« Au total » annonce la conclusion. EN: the verdict.', 'a11-trier'),
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
    { front: 'ce que tu ressens devant l’œuvre', back: 'l’impression', say: src(E(1224)).fr },
    { front: 'un visage qui remplit l’écran', back: 'un gros plan', say: src(E(1237)).fr },
    { front: 'ce qui existe autour du cadre', back: 'le hors-champ', say: src(E(1250)).fr },
    { front: 'une scène entière sans coupe', back: 'un plan-séquence', say: src(E(1265)).fr },
    { front: 'une voix qui commente les images', back: 'une voix off', say: src(E(1281)).fr },
    { front: 'l’endroit où convergent les lignes', back: 'le point de fuite', say: src(E(1296)).fr },
    { front: 'l’ombre contre la lumière', back: 'le clair-obscur', say: src(E(1309)).fr },
    { front: 'un choix délibéré de l’artiste', back: 'un parti pris', say: src(E(1347)).fr },
    { front: 'révéler la fin', back: 'divulgâcher', say: src(E(1353)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Analyser une œuvre, en résumé',
  body: `${REFRAME} Tu sais maintenant remonter de ce que tu ressens aux moyens de l’œuvre : le plan, le hors-champ, le montage, la bande-son, la composition, la lumière, la touche, l’orchestration, la mise en scène. Tu écris une critique qui accroche, situe sans divulgâcher, pèse et tranche. ${Cap(NEXT_REF)} quitte les œuvres pour les grandes notions : la justice, la liberté, l’identité, le pouvoir. EN: Next, the lesson moves from works of art to the big political and social notions.`,
  points: [
    'Pars de l’impression, fonde-la sur une observation, dis l’effet, puis juge.',
    'Nomme le moyen avec le mot juste : un plan, une coupe, un son, une lumière.',
    'Pèse : accorde, nuance, tranche ; un défaut est peut-être un parti pris.',
    'Une critique accroche, situe sans divulgâcher et garde le verdict pour la fin.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['impression', 'jugement', 'critique'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta critique',
    opener: {
      line: 'Un film où le père n’apparaît jamais : à toi d’en écrire la critique, de l’accroche au verdict. EN: A film in which the father never appears: your turn to review it, from hook to verdict.',
      imageRef: 'lessons/analyser-oeuvre/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit une critique argumentée et passé l’examen : quatre-vingt-huit questions, onze manches. EN: You wrote a reasoned review and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-lecture', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-plans', 'a12-quiz/r6-son', 'a12-quiz/r9-scene'],
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
  { id: 'd-reaction', title: 'De l’émotion à la question', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : elles transforment une émotion en question. EN: say each line aloud.', items: [E(1201), E(1202), E(1203), E(1205), E(1207), E(1209)], audio: AUDIO },
  { id: 'd-etapes', title: 'Quel temps de l’analyse', format: 'sort' as const, coach: 'Deux piles : une impression, ou une observation qui se vérifie ? EN: impression or observation?', buckets: ['une impression', 'une observation'], items: [E(1215), E(1216), E(1224), E(1219), E(1200), E(1243)], audio: AUDIO },
  { id: 'd-plans', title: 'Le bon plan', format: 'mcq' as const, coach: 'Nomme le plan d’après ce qu’il montre. EN: name the shot from what it shows.', q: 'Pour faire sentir qu’une main tremble, tu choisis...', opts: ['un gros plan', 'un plan d’ensemble'], correct: 0, why: 'Le gros plan isole un détail. EN: a close-up.', items: [E(1230), E(1231), E(1232), E(1233), E(1234), E(1235)], audio: AUDIO },
  { id: 'd-champ', title: 'Dans le cadre ou autour', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce qu’on voit, puis ce qu’on ne voit pas. EN: inside the frame, then outside.', items: [E(1245), E(1246), E(1247), E(1250), E(1251), E(1252)], audio: AUDIO },
  { id: 'd-montage', title: 'Couper ou ne pas couper', format: 'mcq' as const, coach: 'Décris le passage d’un plan à l’autre. EN: describe the join.', q: 'Une scène entière filmée sans coupe est...', opts: ['un plan-séquence', 'un montage alterné'], correct: 0, why: 'Une seule prise, du début à la fin. EN: a sequence shot.', items: [E(1260), E(1261), E(1262), E(1263), E(1265), E(1268)], audio: AUDIO },
  { id: 'd-son', title: 'Qui entend ce son', format: 'sort' as const, coach: 'Deux piles : un son de la scène, ou un son ajouté pour le public ? EN: in the scene, or added?', buckets: ['le son de la scène', 'le son ajouté'], items: [E(1279), E(1280), E(1285), E(1281), E(1277), E(1283)], audio: AUDIO },
  { id: 'd-composition', title: 'Où va le regard', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute et montre, en pensée, où l’image conduit l’œil. EN: say where the eye goes.', items: [E(1291), E(1292), E(1293), E(1296), E(1297), E(1302)], audio: AUDIO },
  { id: 'd-lumiere', title: 'La lumière et la touche', format: 'mcq' as const, coach: 'D’où vient la lumière, et comment la couleur est-elle posée ? EN: light source and brushwork.', q: 'Une couleur uniforme, sans trace de pinceau, c’est...', opts: ['un aplat', 'une touche fragmentée'], correct: 0, why: 'L’aplat est lisse et égal. EN: flat colour.', items: [E(1305), E(1306), E(1307), E(1309), E(1311), E(1314)], audio: AUDIO },
  { id: 'd-scene', title: 'Un moyen de la musique ou de la scène', format: 'sort' as const, coach: 'Deux piles : un moyen de la musique, ou un moyen de la scène ? EN: music or stage?', buckets: ['la musique', 'la scène'], items: [E(1320), E(1322), E(1321), E(1327), E(1325), E(1329)], audio: AUDIO },
  { id: 'd-peser', title: 'Accorder, nuancer, trancher', format: 'flashcard' as const, coach: 'Dis chaque formule à voix haute, en pensant à un film que tu as vu. EN: say each formula aloud.', items: [E(1335), E(1336), E(1337), E(1338), E(1342), E(1345)], audio: AUDIO },
  { id: 'd-genre', title: 'L’ordre d’une critique', format: 'mcq' as const, coach: 'Accroche, présentation, analyse, verdict : remets chaque phrase à sa place. EN: hook, placing, analysis, verdict.', q: 'Le verdict d’une critique arrive...', opts: ['à la fin', 'dans l’accroche'], correct: 0, why: 'On juge une fois les raisons données. EN: last.', items: [E(1350), E(1352), E(1353), E(1354), E(1356), E(1361)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'reaction-sans-raison', description: 'Reviews a work with reactions only (j’ai adoré, c’est génial), never saying what in the work produces them.', detectOn: ['a1-scene', 'a1-lecture', 'a1-check', 'a12-mission'], drill: 'd-reaction', retest: 'd-reaction' },
  { id: 'effet-sans-moyen', description: 'Names an effect or an impression without the observation that grounds it, or jumps to the verdict before observing.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-etapes', retest: 'd-etapes' },
  { id: 'plan-mal-nomme', description: 'Confuses shot sizes and angles (close-up for wide shot, high for low angle), or treats a frequent effect of an angle as a fixed rule.', detectOn: ['a3-trier', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-plans', retest: 'd-plans' },
  { id: 'hors-champ-ignore', description: 'Reads an unseen character or sound as a gap or a mistake instead of off-screen space with an effect.', detectOn: ['a4-ecoute', 'a4-trier', 'a4-check', 'a12-mission'], drill: 'd-champ', retest: 'd-champ' },
  { id: 'montage-juge-a-sa-discretion', description: 'Judges editing only by how invisible it is: calls a visible cut a fault, or confuses a sequence shot with cross-cutting.', detectOn: ['a5-trier', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-montage', retest: 'd-montage' },
  { id: 'son-oublie', description: 'Leaves the soundtrack out of an analysis, or praises music without saying where it comes from and what it does.', detectOn: ['a6-ecoute', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-son', retest: 'd-son' },
  { id: 'composition-vague', description: 'Describes an image as « pretty » or « balanced » without saying where the subject is, where the lines lead and what the empty space does.', detectOn: ['a7-trier', 'a7-composition', 'a7-check'], drill: 'd-composition', retest: 'd-composition' },
  { id: 'lumiere-vague', description: 'Praises colours in general instead of naming the light source, the chiaroscuro, the brushwork or the flat colour, and their effect.', detectOn: ['a8-piege', 'a8-trier', 'a8-check'], drill: 'd-lumiere', retest: 'd-lumiere' },
  { id: 'musique-scene-floues', description: 'Judges a concert or a staging globally (super, magnifique) without naming one means: crescendo, orchestration, set, lighting, acting.', detectOn: ['a9-ecoute', 'a9-trier', 'a9-check'], drill: 'd-scene', retest: 'd-scene' },
  { id: 'jugement-non-pese', description: 'Gives an unweighed verdict: condemns the whole work for one flaw, praises without reservation, or calls a deliberate choice a mistake.', detectOn: ['a10-erreurs', 'a10-trier', 'a10-check', 'a12-mission'], drill: 'd-peser', retest: 'd-peser' },
  { id: 'critique-sans-architecture', description: 'Writes a review with the verdict first, a full plot summary, a spoiled ending or vague evaluative words instead of the genre’s structure.', detectOn: ['a11-trier', 'a11-piege', 'a11-check', 'a12-mission'], drill: 'd-genre', retest: 'd-genre' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-methode', 'Analyser une œuvre', ['les quatre temps', 'les cinq étapes de la critique', 'ce qu’on ne fait pas'], [
    teach('sheet-methode-teach', 'De l’émotion aux moyens',
      'Une analyse part de ce que tu ressens, l’appuie sur une observation que chacun peut vérifier, dit l’effet que ce moyen produit, puis juge. La critique ajoute la pesée : une qualité accordée, une faiblesse précise, un verdict à la fin. EN: Feel, observe, explain, judge; a review also weighs and concludes.'),
    table('sheet-methode-temps', 'Les quatre temps', ['Temps', 'Question', 'Exemple'], [
      ['l’impression', 'Que m’a fait l’œuvre ?', 'J’ai trouvé la fin magnifique.'],
      ['l’observation', 'Que vois-je, qu’entends-je ?', 'La dernière scène dure quatre minutes, sans un mot.'],
      ['l’effet', 'Que produit ce moyen ?', 'Ce silence oblige le spectateur à tout imaginer.'],
      ['le jugement', 'Le choix sert-il l’œuvre ?', 'C’est ce silence qui rend la fin si forte.'],
    ]),
    table('sheet-methode-critique', 'Les cinq étapes de la critique', ['Étape', 'Ce qu’on fait', 'Formules'], [
      ['accrocher', 'un détail concret', 'Une voix… ; Au premier plan…'],
      ['situer', 'l’œuvre, l’auteur, le point de départ', 'Pour son premier long métrage, …'],
      ['analyser', 'deux ou trois moyens et leurs effets', 'Le choix le plus fort reste… ; grâce à…'],
      ['peser', 'une qualité, une faiblesse, un parti pris', 'Certes… mais ; si… en revanche ; on peut regretter…'],
      ['juger', 'ce qui l’emporte, et pour qui', 'Tout bien pesé, … ; on le recommandera à…'],
    ]),
    table('sheet-methode-pieges', 'Ce qu’on ne fait pas', ['Piège', 'À la place'], [
      ['« c’est beau », « c’est nul »', 'le moyen et son effet'],
      ['le verdict dès la première ligne', 'une accroche, puis le verdict à la fin'],
      ['raconter toute l’histoire', 'situer sans divulgâcher'],
      ['un terme sans effet (« il y a un gros plan »)', 'le terme, puis ce qu’il produit'],
      ['un défaut condamné d’emblée', 'se demander si c’est un parti pris'],
      ['inventer des faits sur l’œuvre', 's’en tenir à ce qu’on a vu et lu'],
    ]),
  ]),
  sheet('sheet-cinema', 'Le langage du cinéma', ['les plans et les angles', 'champ et hors-champ', 'le montage', 'la bande-son', 'repères'], [
    teach('sheet-cinema-teach', 'Nommer, puis dire l’effet',
      'Un plan va d’une coupe à l’autre. On le décrit par sa valeur, son angle et le mouvement de la caméra ; on décrit ensuite comment les plans s’enchaînent, ce que le cadre laisse dehors et ce qu’on entend. Un effet est fréquent, jamais automatique : décris celui que tu observes. EN: Name the means, then the effect you actually observe.'),
    table('sheet-cinema-plans', 'Les plans et les angles', ['Terme', 'Définition', 'Effet fréquent'], [
      ['un plan d’ensemble', 'un lieu, des personnages petits', 'situer, perdre'],
      ['un plan moyen', 'le personnage en pied', 'montrer l’action'],
      ['un gros plan', 'un visage, un objet', 'isoler, insister'],
      ['une plongée', 'la caméra regarde d’en haut', 'rapetisser, écraser'],
      ['une contre-plongée', 'la caméra regarde d’en bas', 'grandir, menacer'],
      ['un plan fixe', 'la caméra ne bouge pas', 'observer, faire durer'],
    ]),
    table('sheet-cinema-champ', 'Champ et hors-champ', ['Terme', 'Définition'], [
      ['le champ', 'ce que le cadre montre'],
      ['le contrechamp', 'le plan pris dans la direction opposée'],
      ['le champ-contrechamp', 'l’alternance de deux personnages qui se font face'],
      ['le hors-champ', 'ce qui existe autour du cadre, entendu ou deviné'],
    ]),
    table('sheet-cinema-montage', 'Le montage', ['Terme', 'Définition', 'Effet fréquent'], [
      ['un raccord', 'un passage invisible d’un plan à l’autre', 'la continuité'],
      ['un faux raccord', 'une coupe qui se remarque', 'une rupture, un style (Godard, 1960)'],
      ['un plan-séquence (des plans-séquences)', 'une scène entière sans coupe', 'le temps réel'],
      ['le montage alterné', 'deux lieux ou deux actions en alternance', 'l’attente'],
      ['un montage rapide', 'des plans très courts', 'un rythme nerveux'],
    ]),
    table('sheet-cinema-son', 'La bande-son', ['Terme', 'Définition'], [
      ['la bande-son', 'les voix, les bruits, la musique, les silences'],
      ['le son de la scène', 'les personnages l’entendent aussi'],
      ['le son ajouté', 'seul le public l’entend (musique d’accompagnement)'],
      ['la voix off', 'une voix sans visage qui raconte ou commente'],
      ['le son direct', 'enregistré au tournage (Perrault et Brault, 1963)'],
    ]),
    table('sheet-cinema-reperes', 'Repères cités dans la leçon', ['Date', 'Œuvre', 'Ce qu’on en retient'], [
      ['28 décembre 1895', 'première projection publique payante des frères Lumière, à Paris', 'la naissance du spectacle de cinéma'],
      ['1960', '« À bout de souffle », Jean-Luc Godard', 'les faux raccords deviennent un style'],
      ['1963', '« Pour la suite du monde », Pierre Perrault et Michel Brault (ONF)', 'le cinéma direct, le son direct'],
      ['1966', '« La Noire de… », Ousmane Sembène', 'un monde laissé au bord de l’image'],
      ['1975', '« Jeanne Dielman… », Chantal Akerman', 'le plan fixe, frontal, à hauteur du regard'],
    ]),
  ]),
  sheet('sheet-arts', 'Décrire une image', ['la composition', 'la lumière', 'la touche', 'repères'], [
    teach('sheet-arts-teach', 'Où va le regard, d’où vient la lumière',
      'Devant une image, dis où se trouve le sujet, ce qu’il y a au premier plan et à l’arrière-plan, où mènent les lignes et ce que fait le vide. Puis dis d’où vient la lumière et comment la couleur est posée. EN: Describe composition, then light and brushwork, then their effect.'),
    table('sheet-arts-composition', 'La composition', ['Terme', 'Définition'], [
      ['le premier plan', 'la zone la plus proche du spectateur'],
      ['l’arrière-plan', 'la zone la plus éloignée'],
      ['le point de fuite', 'le point où convergent les lignes de la perspective'],
      ['une ligne de force', 'une ligne qui structure l’image et guide l’œil'],
      ['la perspective', 'l’illusion de la profondeur sur une surface plane'],
      ['la symétrie, le décentrement', 'stabilité, ou tension'],
    ]),
    table('sheet-arts-lumiere', 'La lumière et la couleur', ['Terme', 'Définition'], [
      ['une source de lumière', 'unique et visible, ou diffuse'],
      ['le clair-obscur (des clairs-obscurs)', 'des contrastes forts entre zones claires et sombres'],
      ['la touche', 'la manière de poser la peinture'],
      ['un aplat', 'une surface de couleur égale, sans trace de pinceau'],
    ]),
    table('sheet-arts-reperes', 'Repères cités dans la leçon', ['Date', 'Œuvre ou artiste', 'Ce qu’on en retient'], [
      ['vers 1640', '« La Madeleine à la veilleuse », Georges de La Tour (Louvre)', 'une seule bougie, un clair-obscur apaisé'],
      ['1872 ; 1874', '« Impression, soleil levant », Claude Monet', 'une touche visible ; le mot « impressionnistes »'],
      ['1929', '« La Trahison des images », René Magritte', 'une image n’est pas la chose'],
      ['1948', '« Refus global », Paul-Émile Borduas et les Automatistes', 'un manifeste qui coûte son poste à Borduas'],
      ['1948-1962', 'Seydou Keïta, studio de Bamako', 'des fonds à motifs qui ferment l’espace'],
    ]),
  ]),
  sheet('sheet-scene', 'La musique et la scène', ['décrire une musique', 'décrire une mise en scène', 'repères'], [
    teach('sheet-scene-teach', 'Un moyen, un effet',
      'Pour une musique, nomme ce qui change et ce qui revient : la mélodie, le rythme, l’intensité, les instruments. Pour un spectacle, distingue la mise en scène, la scénographie et le jeu. Dans les deux cas, dis ce que le moyen produit. EN: Name what changes and what returns; separate staging, set and acting.'),
    table('sheet-scene-termes', 'Les mots utiles', ['Terme', 'Définition'], [
      ['un crescendo', 'une intensité qui augmente peu à peu'],
      ['l’orchestration', 'le choix des instruments qui portent la musique'],
      ['un rythme obsédant', 'un motif qui revient sans cesse'],
      ['la mise en scène', 'l’organisation du jeu et de l’espace'],
      ['la scénographie', 'le décor, les objets, la lumière'],
      ['le jeu', 'la manière dont les comédiens interprètent'],
    ]),
    table('sheet-scene-reperes', 'Repères cités dans la leçon', ['Date', 'Œuvre', 'Ce qu’on en retient'], [
      ['22 novembre 1928', '« Boléro », Maurice Ravel, créé à l’Opéra de Paris pour Ida Rubinstein', 'une mélodie fixe, des instruments qui changent, un crescendo'],
      ['28 août 1968', '« Les Belles-sœurs », Michel Tremblay, Théâtre du Rideau Vert', 'le joual sur une scène professionnelle'],
    ]),
  ]),
  sheet('sheet-critique', 'Peser et écrire la critique', ['formules pour peser', 'l’architecture du genre', 'le vocabulaire de l’évaluation'], [
    teach('sheet-critique-teach', 'Accorder, nuancer, trancher',
      'Une critique pesée accorde une qualité, vise une faiblesse précise, se demande si cette faiblesse est un parti pris, puis tranche. Le lecteur peut ne pas partager ton goût ; il doit pouvoir suivre tes raisons. EN: Grant, target, ask if deliberate, then decide.'),
    table('sheet-critique-formules', 'Formules pour peser', ['Formule', 'Ce qu’elle fait', 'Exemple'], [
      ['certes… mais', 'accorder, puis objecter', 'Certes, le thème n’est pas neuf ; mais la première salle est saisissante.'],
      ['si… en revanche', 'opposer deux parties', 'Si le début convainc, la suite, en revanche, déçoit.'],
      ['malgré…', 'un défaut qui ne l’emporte pas', 'Malgré quelques longueurs, l’exposition tient ses promesses.'],
      ['on peut regretter…', 'une réserve mesurée', 'On peut regretter une bande sonore trop appuyée.'],
      ['…, sinon…', 'nuancer un adjectif', 'L’exposition est ambitieuse, sinon toujours lisible.'],
      ['tout bien pesé', 'conclure', 'Tout bien pesé, les qualités l’emportent sur les défauts.'],
    ]),
    table('sheet-critique-vocabulaire', 'Du mot vague au mot juste', ['Au lieu de', 'Dis plutôt'], [
      ['c’est beau', 'saisissant, juste, maîtrisé, et pourquoi'],
      ['c’est nul', 'ce qui ne fonctionne pas : un rythme, une scène, un choix'],
      ['parfait', 'abouti'],
      ['raté', 'inabouti, inégal'],
      ['prévisible', 'convenu'],
      ['trop', 'appuyé, insistant'],
    ]),
    table('sheet-critique-genre', 'L’architecture d’une critique', ['Partie', 'Rôle'], [
      ['l’accroche', 'un détail concret qui donne envie de lire'],
      ['la présentation', 'l’œuvre, l’auteur, le point de départ, sans divulgâcher'],
      ['l’analyse', 'les moyens et leurs effets'],
      ['les réserves', 'une faiblesse précise, peut-être un parti pris'],
      ['le verdict', 'ce qui l’emporte, et pour quel public'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-14-[a-z0-9-]+/g) ?? [])];

const TRAP_BRIEF = 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.';
const DECK_BRIEF = 'The four cards, read plainly, one voice, the card sentence only, at even pace.';

const REC_DESC: Record<string, string> = {
  'rec-c1-14-adore': 'The reader’s post (act 1), ONE VOICE, one take, a young Québec-French man, warm and enthusiastic, slightly breathless. « Cinq étoiles, sans hésiter » with a smile. No irony: the enthusiasm is sincere.',
  'rec-c1-14-deux-avis': 'The two reviews (act 2), TWO VOICES, one take each, in order: the spectator’s line (a passer-by, quick, casual), then Mireille Aubry’s review (a measured France-French woman critic). The reservation on the piano music at the same weight as the praise.',
  'rec-c1-14-etapes': DECK_BRIEF,
  'rec-c1-14-plan': 'The ciné-club handout (act 3), ONE VOICE, one take, a calm Québec-French man presenting a screening. The full film title read clearly, numbers in full (« vingt-trois, quai du Commerce, mille quatre-vingts Bruxelles »). « Sight and Sound » said the English way.',
  'rec-c1-14-piege-plans': TRAP_BRIEF,
  'rec-c1-14-champ': 'The radio column (act 4), ONE VOICE, one take, a Belgian-French male radio host, intimate. Title « La Noire de… » with a suspended ending. No dramatisation of the scream.',
  'rec-c1-14-champ-cartes': DECK_BRIEF,
  'rec-c1-14-ecoute-champ': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order, at radio pace, the same Belgian-French host. No pause longer than the punctuation gives.',
  'rec-c1-14-montage': 'The dossier on editing (act 5), ONE VOICE, one take, a France-French woman, brisk and clear. « À bout de souffle » as a title. The final sentence slightly slower.',
  'rec-c1-14-piege-montage': TRAP_BRIEF,
  'rec-c1-14-son': 'The radio column (act 6), ONE VOICE, one take, a Québec-French woman, warm. « île aux Coudres » and « bélugas » the Québec way. One beat of silence after « le silence est aussi un son ».',
  'rec-c1-14-son-cartes': DECK_BRIEF,
  'rec-c1-14-ecoute-son': 'REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order, the same Québec-French woman, conversational pace.',
  'rec-c1-14-composition': 'The gallery wall text (act 7), ONE VOICE, one take, a Malian-French or Senegalese-French woman, calm, like an audio guide. « Seydou Keïta » and « Bamako » the Malian way. Dates in full.',
  'rec-c1-14-lumiere': 'The guide’s notebook (act 8), ONE VOICE, one take, a France-French woman museum guide, quiet. Titles « La Madeleine à la veilleuse », « Impression, soleil levant », « La Trahison des images » clear. No quotation of Magritte’s painted sentence: the text describes it.',
  'rec-c1-14-lumiere-cartes': DECK_BRIEF,
  'rec-c1-14-piege-lumiere': TRAP_BRIEF,
  'rec-c1-14-scene': 'The radio arts slot (act 9), ONE VOICE, one take, the Belgian-French host of act 4. « Boléro » and « Ida Rubinstein » plain; « Les Belles-sœurs » and « Théâtre du Rideau Vert » clear. No joual imitation.',
  'rec-c1-14-ecoute-scene': 'REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, ONE VOICE, in authored order, the same host. Dates in full (« mille neuf cent vingt-huit », « mille neuf cent soixante-huit »).',
  'rec-c1-14-peser': 'The exhibition review (act 10), ONE VOICE, one take, a Québec-French woman critic, poised. Concessions and reservations at the same weight; « Tout bien pesé » after a short beat.',
  'rec-c1-14-genre': 'The album review (act 11), ONE VOICE, one take, the young Québec-French man of act 1, now measured and precise. « divulgâcher » plain. Last line light.',
  'rec-c1-14-piege-genre': TRAP_BRIEF,
  'rec-c1-14-maree': 'THE TASK TEXT (act 12), ONE VOICE, one take, a neutral France-French or Senegalese-French voice reading press notes. The director’s quoted line with the slight lift of a quotation. Spectators’ reactions read plainly, without mimicry.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 14',
  intro: 'Saying you loved a film is a start, not a review. This lesson treats your emotion as a clue and teaches you to find, in the work itself, what produces it: the shot, the frame and what lies outside it, the editing, the soundtrack; the composition, light and brushwork of an image; the means of music and staging in outline. Then you weigh strengths against weaknesses and write a critique of 250 to 400 words, from hook to verdict.',
  skill: 'CE',
  grammarAssumed: [LITTERATURE_UNIT, PRESSE_UNIT],
  grammarIntroduced: [
    'Argued analysis in four steps: impression, verifiable observation, effect, and a judgement grounded in both',
    'Film language: shot size and angle (plan d’ensemble, plan moyen, gros plan, plongée, contre-plongée, plan fixe), the frame, champ, contrechamp and hors-champ',
    'Editing and sound: raccord, faux raccord, plan-séquence, montage alterné; the soundtrack, sound in the scene or added, voix off, son direct, silence',
    'Describing an image: premier plan, arrière-plan, point de fuite, ligne de force, perspective, clair-obscur, touche, aplat; music and stage in outline (crescendo, orchestration, mise en scène, scénographie, jeu)',
    'The critique as a genre: hook, situating without spoiling (divulgâcher), weighing (certes… mais, si… en revanche, parti pris), precise evaluative vocabulary and a reasoned verdict last',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Dire qu’on a adoré un film, c’est un début, pas une critique. Cette leçon fait de ton émotion un indice : tu apprends à trouver dans l’œuvre ce qui la produit, le plan, le cadre et le hors-champ, le montage, la bande-son, la composition, la lumière et la touche d’une image, et, en quelques mots, les moyens de la musique et de la scène. Puis tu pèses les forces et les faiblesses, et tu écris une critique de 250 à 400 mots.',
    minutes: 175,
    difficulty: 4,
    glyph: 'plan',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ANALYSER_OEUVRE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, MAREE_TEXT };
export const lessonWithoutTask = (): Lesson => LESSON;
