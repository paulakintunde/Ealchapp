// c1.24.l1 « Analyser la presse » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE, strategy
// variant) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of
// C1-BUILD-LOG.md. Structural model: b2.24 « Lire de façon critique »
// (`../b2/lecture-critique-*`). Serves CE@c1 (the opinion article).
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (about 300
//   words, a real press genre, original) and ONE MOVE, in the same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`.
//                          Its FIRST question is always « Devine le sens »
//                          (a C1 word inferred from context); the glossary
//                          keeps at most one entry.
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable`, `examples`, `focus`,
//                          `hacks` or `steps`, linked to a sheet.
//     3. PRACTISE          one or two checks on NEW material (a groupDrill,
//                          a trapDrill, a commonErrors or a listening).
//     4. USE IT            « Pour ta comparaison », always the same
//                          groupDrill shape: a line of the final comparison
//                          built with THIS act's move against the line a
//                          reader without it would write.
//
//   then the act check (control pages, gated). Act 1 is the problem scene
//   and the recap; act 12 is the production act (the task and the closing
//   sections).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Deux unes, un festival    6  two front pages (scene) · one event,
//                                    two papers; recap of b1.34, b2.24,
//                                    b2.10, b1.18, c1.20 by trail position
//    2  La dépêche                7  an agency dispatch on a school calendar
//                                    · the inverted pyramid; a radio flash
//    3  Du surtitre à la chute    6  a festival article · surtitre, titre,
//                                    chapô, attaque, intertitre, chute,
//                                    légende
//    4  Le reportage              6  a report from a market under works ·
//                                    on the spot, the present, whom the
//                                    reporter meets; a radio report
//    5  L’éditorial               6  an editorial · the paper’s own voice
//    6  Chronique et billet       6  a billet · the « je » that is a byline
//    7  Tribune et lettre ouverte 6  an open letter on the op-ed page · who
//                                    signs, the disclaimer
//    8  Qui parle, et dans quel   6  an article on a bus detour · choice and
//       ordre                        order of sources
//    9  Chiffres et légendes      6  two reports on one set of figures ·
//                                    base, comparison, caption
//   10  Les mots qui pèsent       6  an article on a riverside project ·
//                                    loaded pairs, quantity words
//   11  Deux traitements          6  two papers on one public meeting · the
//                                    comparison method
//   12  Ta comparaison           11  the task texts (a report and an
//                                    editorial on a bridge) · plan, role
//                                    play, TASK, quiz, review
//
//   TOTAL 78 missions, 12 acts (6,7,6,6,6,6,6,6,6,6,6,11). Corpus: 156
//   authored rows (.2000-.2155) in twelve blocks plus 12 reused rows (9 in
//   act 1; 3 Postgres-only in acts 5, 7, 10). 13 anchor readings (acts 1, 9
//   and 11 print two texts each; act 12 prints the two task texts) and 2
//   listenings. Quiz: 11 rounds of 8. Eleven error triggers, eleven drills,
//   five reference sheets, ten terms. Chapter artwork:
//   `analyse-presse-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un article est un cadre : regarde aussi ce qu’il laisse hors champ. »
//   EN: An article is a frame: look also at what it leaves out of the
//   picture.
//
//   ONE METAPHOR, THE FRAME (a viewfinder laid over a scene). The genre is
//   the kind of frame, the order of sources and the figure chosen are where
//   it is placed, the loaded word is the colour of the lens, the hors-champ
//   is what it leaves out. It is NOT « the press lies »: every comparison
//   ends on « neither lies, each chooses ».
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    press genres and their signals (dépêche, article, reportage,
//           éditorial, chronique, billet, tribune, lettre ouverte); the
//           inverted pyramid; surtitre, titre, chapô, attaque, intertitre,
//           chute, légende; framing by the choice and order of sources, by
//           figures and by captions; loaded pairs and quantity words in the
//           press; two treatments of one event compared in writing.
//   QUOTES  b1.34’s reframe (act 1), b2.24’s (act 1), b2.10’s (act 1), each
//           imported from its corpus, never retyped.
//   LEAVES  media vocabulary, the hearsay conditional and checking a source
//           to b1.34; thesis, evidence, evaluative reporting verbs, tone and
//           irony to b2.24; irony and presupposition at C1 to c1.20; hiding
//           the agent to b2.10 and b1.18; euphemism as connotation to c1.17;
//           persuasion as rhetoric to c1.08 (research plan, ownership).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs. Natural,
//   unsimplified C1 French; English authored on every learner string (`en`,
//   or a final « EN: »), and never on an answer. Every `say` is French.
//   Citations by trail position in French (« la leçon 34 du B1 »), never a
//   raw id. Typographic ’ in every authored French string. Mission answer
//   slots are spread by `balanceSlots()` (options and index rotated
//   together, no text changed); the quiz by `spreadSlots()`. Invented
//   outlets, people and places only (corpus header §A.6); low-heat topics
//   only (§A.8).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Topics (research plan decision 7): a festival, a school calendar,
//      urban works (a market square, a bus detour, a riverside project, a
//      bridge for pedestrians, bikes and buses). Approve the list?
//   2. ANSWERED BY THE PRE-REVIEW (2026-09-30): « unsigned in France » was
//      not supported (OQLF: « signé ou non signé »; CLEMI fiches: « souvent
//      signé du rédacteur en chef »). The sentence now reads « Signé ou
//      non, l’éditorial parle au nom du journal : certains journaux le
//      publient sans signature, d’autres le font signer par le rédacteur
//      en chef ou, comme souvent au Québec, par un éditorialiste. »
//   3. Three reused rows (fr.b2.journalisme.037, .050, fr.b2.litterature.071)
//      are published in Postgres but absent from the seed cut, so they ride
//      in `DB_ONLY_ROWS`. The preview fixture cannot resolve them until the
//      merge pulls them in. Accept, or swap for authored rows?
//   4. Rubric: six criteria, 20 points, as b2.24, with C1 « précision et
//      nuance » folded into the language criterion. Keep the grid?
//   5. The task prints both texts twice (reading and brief): no `source`
//      field on `task`, as in b2.24. Accept again?
//   6. « la leçon 20 du C1 » (c1.20) is cited in words in act 1 and the
//      roundup, as the brief allows for a same-wave lesson. If c1.20 slips
//      out of wave 1, both citations must go.
//   7. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, DB_ONLY_ROWS,
  UNES_TEXT, DEPECHE_TEXT, ARTICLE_TEXT, REPORTAGE_TEXT, EDITO_TEXT, BILLET_TEXT,
  LETTRE_TEXT, SOURCES_TEXT, CHIFFRES_TEXT, MOTS_TEXT, DEUX_TEXT, PONT_A_TEXT, PONT_B_TEXT,
  B134_REFRAME, B224_REFRAME, B210_REFRAME,
  MEDIAS_UNIT, PASSIF_UNIT, NOMINAL_UNIT, CRITIQUE_UNIT,
  MEDIAS_REF, PASSIF_REF, NOMINAL_REF, CRITIQUE_REF, LIGNES_REF,
} from './analyse-presse-corpus.ts';
import { ANALYSE_PRESSE_TERMS } from './analyse-presse-terms.ts';

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
  if (!r) throw new Error(`c1.24: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.24: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.24: no authored respell on ${id}`);
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

/** THE « USE IT » BEAT: the act's one tool for the graded comparison. */
function pourTaComparaison(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta comparaison', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — DEUX UNES, UN FESTIVAL
 *
 *  The problem: the learner summarises a festival weekend from one paper's
 *  front page; a second paper, out two days later, tells the same weekend
 *  from the residents' side. Then the recap of the lessons this one builds
 *  on, by trail position, with their rows reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une phrase pour le maire', frSub: 'La revue de presse du mercredi',
  setting: { place: 'L’office de tourisme de Montrivage', city: 'Montrivage', time: '8 h 30', ambience: 'deux journaux sur le bureau, un café, la réunion du maire à dix heures' },
  beats: [
    { kind: 'narration', text: 'Mercredi, 8 h 30, à l’office de tourisme de Montrivage. Tu prépares la revue de presse. Lundi, tu as lu la une du Courrier de Montrivage sur le festival des Nuits du Quai.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Margaux, ta responsable', fr: 'Le maire veut une phrase sur le festival pour sa réunion de dix heures.', en: 'The mayor wants one sentence on the festival for his ten o’clock meeting.', respell: '[luh MEHR veu ün FRAHZ sür luh fes-tee-VAL poor sa ray-ü-nyohⁿ duh dee-ZUHR]', stage: 'Elle a l’air pressée.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Quarante-deux mille entrées, un record. C’est à la une du Courrier.', en: 'Forty-two thousand admissions, a record. It is on the front page of Le Courrier.', respell: '[ka-rahⁿt-deu mee-lahⁿ-TRAY uhⁿ ruh-KOR seh-ta la ÜNN dü koo-RYAY]', stage: 'Tu as le titre en tête, et le chiffre.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Margaux pose sur ton bureau L’Hebdo des Rives, sorti ce matin. À la une, une photo de gobelets sur un trottoir et un titre sur les riverains.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Margaux', fr: 'L’Hebdo de ce matin ne raconte pas du tout le même week-end.', en: 'This morning’s Hebdo tells a completely different weekend.', respell: '[leb-DOH duh suh ma-TEHⁿ nuh ra-kohⁿt pa dü too luh mem wee-KEND]', stage: 'Elle attend ta phrase.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase donnes-tu à Margaux pour le maire ?', size: 'lg',
      options: [
        { fr: src(E(2002)).fr, respell: rsOf(E(2002)), en: src(E(2002)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(2003)).fr, respell: rsOf(E(2003)), en: src(E(2003)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Margaux recopie ta phrase. À dix heures, le maire arrive avec le record et les plaintes en tête : quand un élu de quartier sort L’Hebdo, il a déjà sa réponse.',
        breaks: 'À dix heures, un élu de quartier pose L’Hebdo sur la table. Le maire découvre les riverains en pleine réunion, avec ta phrase à la main.',
      },
    },
    {
      kind: 'break', heading: 'Tu as lu un journal, pas le festival',
      body: `${Cap(MEDIAS_REF)} t’a appris à demander qui dit une info. Ici, les deux journaux disent vrai : même chiffre, même week-end. Chacun a choisi son titre, sa première voix et sa fin. EN: Both papers are accurate; each one chose.`,
      wrong: { fr: src(E(2002)).fr, ipa: ipaOf(E(2002)), respell: rsOf(E(2002)), en: src(E(2002)).en },
      right: { fr: src(E(2003)).fr, ipa: ipaOf(E(2003)), respell: rsOf(E(2003)), en: src(E(2003)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à lire un journal comme une suite de choix : le genre, la forme, les voix, les chiffres, les mots, et ce qui reste hors champ. À la fin, tu compareras par écrit deux traitements d’un même événement.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['cadrage', 'horschamp'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Reconnaître le genre d’un texte de presse', s: 'Actes 2 à 7 : dépêche, reportage, éditorial, billet, tribune' },
    { t: 'Lire la forme d’un article', s: 'Actes 2 et 3 : la pyramide, du surtitre à la chute' },
    { t: 'Voir le cadre', s: 'Actes 8 à 10 : les voix, les chiffres, les légendes, les mots' },
    { t: 'Comparer deux traitements', s: 'Actes 11 et 12 : la méthode, puis ta comparaison écrite' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Les deux unes', frSub: 'Le même week-end, deux journaux',
  text: UNES_TEXT,
  glossary: [
    { word: 'rappel', en: 'encore', note: 'Le morceau que l’artiste rejoue quand le public le redemande.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « des rues jonchées de gobelets ». Que veut dire « jonchées » ?', a: 'Couvertes, en désordre : des gobelets un peu partout sur le sol.' },
    { q: 'Les deux textes parlent-ils du même événement ? Qu’ont-ils en commun ?', a: 'Oui : le même week-end, le même quai, le même chiffre de quarante-deux mille entrées, et des plaintes pour bruit.' },
    { q: 'Où chaque journal place-t-il les plaintes des riverains, et le record ?', a: 'Le Courrier met les plaintes dans sa dernière phrase (« Seule ombre au tableau »). L’Hebdo met le record dans sa dernière phrase, dans la bouche du festival.' },
    { q: 'Qui parle en premier dans chaque texte ?', a: 'Dans le Courrier, la directrice du festival, puis le maire. Dans l’Hebdo, un riverain, puis une voisine.' },
    { q: 'L’Hebdo sort deux jours plus tard. Qu’est-ce que cela change ?', a: 'C’est un hebdomadaire : le record est déjà connu. Il choisit un autre angle, les riverains, et une autre photo.' },
  ],
  audio: REC('rec-c1-24-unes'), say: REFRAME, terms: ['cadrage', 'sources'],
};

/** The recap: one group per lesson it builds on, rows reused by id. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Quatre leçons, un rappel',
  groups: [
    grp(Cap(MEDIAS_REF), [
      it('fr.b1.journalisme.1023', 'les genres, comme mots'),
      it('fr.b1.journalisme.1051', 'la forme d’un article'),
      it('fr.b1.journalisme.1092', 'le conditionnel d’information'),
      it('fr.b1.journalisme.1146', 'vérifier'),
    ], chk('« L’usine fermerait en décembre » : le journaliste...', ['rapporte une information non confirmée', 'annonce un fait certain'], 0,
      `Tu l’as vu au B1. ${Cap(MEDIAS_REF)} disait : « ${B134_REFRAME} » EN: the conditional reports without confirming.`)),
    grp(Cap(CRITIQUE_REF), [
      it('fr.b2.strategies-de-comprehension.1406', 'le titre et le corps'),
      it('fr.b2.strategies-de-comprehension.1413', 'la loupe du B2'),
    ], chk('Au B2, tu jugeais surtout...', ['ce qu’un texte affirme et ce qui le prouve', 'la forme de la page'], 0,
      `« ${B224_REFRAME} » Cette leçon regarde autre chose : ce que le journal a choisi de montrer. EN: now, what the paper chose to show.`)),
    grp(`${Cap(NOMINAL_REF)} et ${PASSIF_REF}`, [
      it('fr.b2.langue-soignee.1537', 'un nom, pas de sujet'),
      it('fr.b1.faits-et-procedures.1065', 'un passif sans agent'),
    ], chk('« La décision a été prise sans nous. » Qui a décidé ?', ['on ne le sait pas : la phrase le cache', 'nous'], 0,
      `Le nom et le passif peuvent effacer l’agent. ${Cap(NOMINAL_REF)} disait : « ${B210_REFRAME} » EN: the agent can be hidden.`)),
    ctl(Cap(LIGNES_REF), `${Cap(LIGNES_REF)} t’apprend à lire ce qu’un texte d’opinion concède, suppose ou tait. Qu’ajoute cette leçon ?`,
      ['Rien de plus.', 'Le journal entier : le genre, la place, les voix, les chiffres, les mots.'], 1,
      'Tu passes du texte isolé au journal qui le publie et le met en page. EN: from one text to the paper that frames it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'cadrage'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Tu prépares une revue de presse au travail', fr: src(E(2005)).fr, en: src(E(2005)).en },
    { situation: 'Deux journaux citent des personnes différentes', fr: src(E(2006)).fr, en: src(E(2006)).en },
    { situation: 'Au TEF ou au TCF, un article d’opinion à analyser', fr: src(E(2007)).fr, en: src(E(2007)).en },
    { situation: 'Tu vas partager un article sur un projet de ta ville', fr: src(E(2010)).fr, en: src(E(2010)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'horschamp'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Deux journaux', 'Deux journaux donnent le même chiffre et racontent deux histoires. L’un des deux ment-il forcément ?', ['Oui, forcément.', 'Non : chacun a fait des choix.'], 1,
    'Mêmes faits, autres choix : le titre, la première voix, la fin. EN: same facts, different choices.'),
  ctl('La première question', 'Devant un texte de presse, tu demandes d’abord...', ['quel genre de texte c’est', 'combien il a de mots', 'si le titre est long'], 0,
    'Le genre dit qui parle et ce que le texte cherche à faire. EN: the genre tells you who speaks.'),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['un article', 'la comparaison de deux traitements d’un même événement', 'une lettre ouverte'], 1,
    'Entre 250 et 400 mots : le genre, le cadrage, deux mots chargés, ce que chacun laisse hors champ. EN: genre, framing, two loaded words, what each leaves out.'),
], ['cadrage', 'horschamp']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Deux unes, un festival',
    opener: {
      line: 'Deux journaux, un même week-end, deux histoires : ici tu découvres que lire la presse, c’est lire des choix. EN: Two papers, one weekend, two stories: here you find that reading the press means reading choices.',
      imageRef: 'lessons/analyse-presse/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’un même événement peut être cadré de deux façons, sans que personne mente. EN: You know one event can be framed two ways without anyone lying.',
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA DÉPÊCHE ET LA PYRAMIDE
 *
 *  TEXT: an agency dispatch on a school calendar change. MOVE: read the
 *  inverted pyramid (the order is a ranking) and the dispatch's signals
 *  (dateline, agency, no « je », every view attributed).
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_DEPECHE: Sec<'reading'> = {
  type: 'reading', id: 'a2-depeche', layer: 'core', questionsInModal: true,
  title: 'Une dépêche d’agence', frSub: 'Le calendrier scolaire change',
  text: DEPECHE_TEXT,
  glossary: [
    { word: 'nuitées', en: 'overnight stays', note: 'Le nombre de nuits passées par les touristes dans les hébergements.' },
  ],
  questions: [
    { q: 'Devine le sens : « une fin de saison écourtée ». Que veut dire « écourtée » ?', a: 'Raccourcie : la saison touristique perd une semaine.' },
    { q: 'Que t’apprend la première phrase ? Qui, quoi, quand ?', a: 'Le conseil scolaire de Montrivage a adopté mardi soir un nouveau calendrier : dès 2027, rentrée une semaine plus tôt et deux semaines de vacances en automne.' },
    { q: 'Dans quel ordre viennent ensuite les informations ?', a: 'Le vote, le nombre d’élèves, la justification, les réactions (parents, opposants, enseignants, tourisme), la suite de la procédure, puis le contexte.' },
    { q: 'Un journal n’a la place que pour trois phrases. Lesquelles garde-t-il ?', a: 'Les trois premières : la dépêche se coupe par le bas sans perdre l’essentiel.' },
    { q: 'Qu’est-ce qui montre que c’est une dépêche d’agence ?', a: 'Le lieu et la date en tête, le sigle AHP, aucune signature personnelle, aucun « je », des verbes neutres, chaque avis attribué.' },
    { q: 'Une proposition signale discrètement un manque. Laquelle ?', a: '« sans qu’aucune évaluation chiffrée ait été rendue publique » : les expériences sont dites encourageantes, sans bilan publié.' },
  ],
  audio: REC('rec-c1-24-depeche'), say: REFRAME, terms: ['pyramide', 'genre'],
};

const A2_PYRAMIDE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-pyramide', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-structure',
  title: 'La pyramide inversée', frSub: 'L’essentiel en haut',
  hint: 'Quatre cartes. Regarde ce que l’ordre dit.',
  audio: REC('rec-c1-24-pyramide'), say: REFRAME, terms: ['pyramide'],
  cards: [
    { head: 'La tête', label: 'qui, quoi, où, quand', fr: src(E(2012)).fr, sub: rsOf(E(2012)),
      body: 'La première phrase dit l’événement entier. Un lecteur pressé qui s’arrête là sait l’essentiel. EN: the first sentence carries the whole event.' },
    { head: 'Le corps', label: 'réactions et détails', fr: src(E(2020)).fr, sub: rsOf(E(2020)),
      body: 'Viennent ensuite les chiffres, les raisons, les réactions des uns et des autres, chacune attribuée. EN: then figures, reasons and attributed reactions.' },
    { head: 'La base', label: 'le contexte', fr: src(E(2013)).fr, sub: rsOf(E(2013)),
      body: 'Le contexte et l’histoire arrivent en dernier : c’est ce qu’on coupe d’abord quand la place manque. EN: context comes last and is cut first.' },
    { head: 'Ce que l’ordre dit', label: 'une hiérarchie', fr: src(E(2021)).fr, sub: rsOf(E(2021)),
      body: 'Ce qui est en bas n’est pas faux ni caché : la rédaction l’a jugé moins important. Tu peux ne pas être d’accord. EN: the bottom is ranked lower, not hidden.' },
  ],
};

const A2_ORDRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-ordre', layer: 'core', size: 'lg',
  title: 'Remets une dépêche dans l’ordre', frSub: 'Une autre décision, une autre dépêche',
  groups: [
    grp('Quatre phrases en désordre', [
      free('« Nous voulons accueillir les familles qui travaillent en semaine », a déclaré la directrice.', '"We want to welcome families who work during the week," the director said.', 'une réaction'),
      free('La médiathèque de Montrivage ouvrira le dimanche à partir du 1er octobre.', 'Montrivage’s media library will open on Sundays from 1 October.', 'la décision'),
      free('La médiathèque avait déjà testé l’ouverture du dimanche en 2019.', 'The media library had already tried Sunday opening in 2019.', 'le contexte'),
      free('En contrepartie, elle fermera une heure plus tôt le samedi.', 'In return, it will close an hour earlier on Saturdays.', 'un détail'),
    ], chk('Laquelle ouvre la dépêche ?', ['l’ouverture le dimanche dès le 1er octobre', 'la citation de la directrice', 'l’essai de 2019'], 0,
      'La décision d’abord : qui, quoi, quand. Les réactions et le contexte viennent après. EN: the decision first.')),
    ctl('La coupe', 'Le journal n’a la place que pour deux phrases. Il coupe...', ['par le bas : le contexte, puis la réaction', 'par le haut : la décision'], 0,
      'Une dépêche est écrite pour qu’on la coupe par le bas. EN: it is built to be cut from the bottom.'),
    ctl('Le précédent', 'Où une dépêche place-t-elle l’essai de 2019 ?', ['à la fin', 'dans la première phrase'], 0,
      'C’est du contexte : utile, mais pas l’événement du jour. EN: context goes last.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['pyramide'],
};

/** THE EAR MISSION: one take, the pyramid heard. */
const A2_FLASH: Sec<'listening'> = {
  type: 'listening', id: 'a2-flash', layer: 'core', hideLines: true,
  title: 'Le flash de sept heures', frSub: 'Radio Méandre, une seule écoute',
  lines: [ln(E(2022)), ln(E(2023)), ln(E(2024)), ln(E(2025)), ln(E(2026)), ln(E(2027)), ln(E(2028)), ln(E(2029))],
  questions: [
    { q: 'Quelle information arrive en premier ?', opts: ['Le bus ne passera plus par le centre.', 'Le nombre de voyageurs.', 'L’étude d’une navette.'], correct: 0,
      why: 'Le flash suit la pyramide : l’événement d’abord. EN: the event first.' },
    { q: 'Le nombre de voyageurs arrive à la fin. Pourquoi ?', opts: ['C’est le contexte : on peut le couper.', 'C’est l’information principale.'], correct: 0,
      why: 'Utile pour mesurer l’effet, mais pas l’événement lui-même. EN: context, ranked last.' },
    { q: 'Qui critique le détour ?', opts: ['la société de transport', 'des usagers', 'la mairie'], correct: 1,
      why: 'Des usagers dénoncent un trajet plus long. EN: some passengers complain.' },
    { q: 'La navette gratuite est-elle décidée ?', opts: ['Oui, dès lundi.', 'Non, elle est seulement à l’étude.'], correct: 1,
      why: '« À l’étude » : une piste, pas une décision. EN: under study, not decided.' },
    { q: 'Quelle raison la société de transport donne-t-elle ?', opts: ['le manque de chauffeurs', 'le prix de l’essence', 'les travaux de la place du Marché'], correct: 2,
      why: 'Elle invoque les travaux : une raison attribuée, pas vérifiée par le flash. EN: an attributed reason.' },
  ],
  audio: REC('rec-c1-24-flash'), say: REFRAME, terms: ['pyramide'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lectures trop rapides d’une dépêche',
  errors: [
    { wrong: 'La dépêche est contre la réforme : elle cite le syndicat.', right: 'La dépêche rapporte l’avis du syndicat, comme celui des parents ; elle ne prend pas parti.',
      why: 'Normal : une critique citée semble peser. Mais l’agence attribue chaque avis à quelqu’un. EN: quoting a view is not endorsing it.' },
    { wrong: 'La rentrée sera avancée en 2027, c’est décidé.', right: 'Le conseil a voté ; l’autorité régionale doit encore valider.',
      why: 'L’étape de procédure arrive tard dans la dépêche, et elle change tout. EN: the procedure comes late but matters.' },
    { wrong: 'Les expériences des autres communes sont encourageantes.', right: 'Le conseil juge ces expériences encourageantes, sans bilan chiffré publié.',
      why: 'Le jugement est attribué, et le manque de preuve signalé en fin de texte. EN: attributed, and the missing evidence noted.' },
    { wrong: 'Ce qui est à la fin est sans importance.', right: 'Ce qui est à la fin est moins important pour la rédaction ; pour toi, ce peut être l’essentiel.',
      why: 'La pyramide classe selon la rédaction, pas selon ton intérêt. EN: the ranking is the newsroom’s.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['pyramide'],
};

const A2_COMPARE = pourTaComparaison('a2-comparer', 'Ce que l’ordre révèle', [
  grp('Deux phrases sur la même dépêche', [
    free('La dépêche parle du nouveau calendrier scolaire.', 'The dispatch is about the new school calendar.', 'le sujet seulement'),
    free('La dépêche met la décision en tête et la critique des enseignants au troisième paragraphe.', 'The dispatch puts the decision at the top and the teachers’ criticism in the third paragraph.', 'l’ordre, lu comme un choix'),
  ], chk('Laquelle sert une comparaison ?', ['la première', 'la seconde'], 1,
    'Dire où une information est placée, c’est dire l’importance qu’on lui donne. EN: placement is ranking.')),
  grp('La phrase de ta comparaison', [
    it(E(2009), 'deux places pour un chiffre'),
    it(E(2012), 'la règle derrière'),
  ], chk('Le Courrier met le record dans son titre ; L’Hebdo, dans sa dernière phrase. Tu écris...', ['que chacun place le même fait à un rang différent', 'que l’Hebdo cache le record'], 0,
    'Le record n’est pas caché : il est classé autrement. EN: ranked differently, not hidden.')),
], ['pyramide', 'cadrage']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La pyramide', 'Dans une dépêche, l’essentiel se trouve...', ['dans les premières lignes', 'au milieu', 'à la fin'], 0,
    'Qui, quoi, où, quand : tout est en haut. EN: the essentials are at the top.'),
  ctl('Les signes', 'Lequel n’est PAS un signe de dépêche ?', ['le sigle de l’agence', 'un « je » qui donne son avis', 'le lieu et la date en tête'], 1,
    'Une dépêche ne dit jamais « je » et attribue chaque avis. EN: no « je » in a dispatch.'),
  ctl('L’ordre', 'Une réaction placée au troisième paragraphe est...', ['jugée moins importante par la rédaction', 'forcément fausse'], 0,
    'L’ordre dit l’importance, pas la vérité. EN: order is importance, not truth.'),
], ['pyramide', 'genre']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La dépêche',
    opener: {
      line: 'Une dépêche dit tout dans sa première phrase, et le reste par ordre d’importance : ici tu lis cet ordre comme un choix. EN: A dispatch says everything in its first sentence, then the rest by importance: here you read that order as a choice.',
      imageRef: 'lessons/analyse-presse/act02.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une dépêche et tu lis son ordre comme une hiérarchie. EN: You can recognise a dispatch and read its order as a ranking.',
    estScreens: 36, restPoints: ['a2-pyramide', 'a2-flash'],
  },
  sections: [A2_DEPECHE, A2_PYRAMIDE, A2_ORDRE, A2_FLASH, A2_ERREURS, A2_COMPARE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — DU SURTITRE À LA CHUTE
 *
 *  TEXT: a festival article with every part on the page. MOVE: name each
 *  part and what it does (surtitre, titre, chapô, attaque, intertitre,
 *  chute, légende); b1.34's « titre et chapeau » is the starting point.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_ARTICLE: Sec<'reading'> = {
  type: 'reading', id: 'a3-article', layer: 'core', questionsInModal: true,
  title: 'Un article, de haut en bas', frSub: 'Le prix des Nuits du Quai',
  text: ARTICLE_TEXT,
  glossary: [
    { word: 'jauge', en: 'capacity', note: 'Le nombre maximal de personnes autorisées dans un lieu.' },
  ],
  questions: [
    { q: 'Devine le sens : « les cachets des artistes ». Que sont des « cachets » ici ?', a: 'Ce qu’on paie aux artistes pour un concert.' },
    { q: 'À quoi sert le texte en gras sous le titre (« Pour sa seizième édition... ») ?', a: 'C’est le chapô : il résume (prix en hausse, jauge réduite) et donne l’angle, avec deux mots qui s’opposent, survie et exclusion.' },
    { q: 'Comment s’ouvre l’article lui-même ?', a: 'Par une scène : la billetterie à 10 heures, la file de 10 h 07, puis une personne, Chloé Martel.' },
    { q: 'À quoi sert « UN PUBLIC QUI CHANGE » ?', a: 'C’est un intertitre : il découpe l’article et annonce une nouvelle partie, sur le public.' },
    { q: 'Comment l’article se termine-t-il ?', a: 'Sur une question ouverte, une chute qui laisse le lecteur réfléchir au lieu de conclure.' },
    { q: 'Que fait la légende de la photo ?', a: 'Elle dit ce que montre l’image et la relie à Chloé Martel : la photo devient un témoignage.' },
  ],
  audio: REC('rec-c1-24-article'), say: REFRAME, terms: ['chapo', 'attaque', 'chute'],
};

const A3_PARTIES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-parties', layer: 'core', sheetId: 'sheet-structure',
  title: 'Six parties, six rôles',
  cols: ['Partie', 'Où', 'Ce qu’elle fait'],
  rows: [
    { cells: ['le surtitre', 'au-dessus du titre', 'situe le sujet'], say: src(E(2030)).fr,
      detail: { title: 'Le surtitre', body: 'Un mot ou une courte phrase en petit, au-dessus du titre : le thème, le lieu, ou une précision qui complète le titre. Il situe le sujet avant même le titre. EN: the small line above the headline that sets the subject.', say: 'Festival.' } },
    { cells: ['le titre', 'en gros', 'informe ou accroche'], say: src(E(2042)).fr,
      detail: { title: 'Le titre', body: 'Informatif, il dit ce qui s’est passé ; incitatif, il pose une question ou joue sur les mots pour donner envie de lire. EN: informative or teaser.', say: src(E(2043)).fr } },
    { cells: ['le chapô', 'sous le titre, en gras', 'résume et donne l’angle'], say: src(E(2036)).fr,
      detail: { title: 'Le chapô', body: `${Cap(MEDIAS_REF)} disait « le chapeau » ; la presse écrit souvent « chapô ». À C1, regarde l’angle qu’il choisit. EN: same thing; now read its angle.`, say: src(E(2031)).fr } },
    { cells: ['l’attaque', 'les premières lignes', 'fait entrer dans le sujet'], say: src(E(2038)).fr,
      detail: { title: 'L’attaque', body: 'Une scène, une citation, un chiffre, une question : elle choisit la porte d’entrée. EN: the door into the story.', say: src(E(2041)).fr } },
    { cells: ['la chute', 'la dernière phrase', 'laisse une impression'], say: src(E(2039)).fr,
      detail: { title: 'La chute', body: 'Une question ouverte, une image, une citation qui reste : c’est souvent ce que le lecteur emporte. EN: what the reader takes away.', say: 'Reste une question que personne ne savait trancher.' } },
    { cells: ['la légende', 'sous la photo', 'dit comment la regarder'], say: src(E(2035)).fr,
      detail: { title: 'La légende', body: 'La même photo, avec une autre légende, raconte autre chose. La légende est déjà une lecture. EN: a caption is already a reading.', say: 'La file d’attente virtuelle, mardi à 10 h 07.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['chapo', 'attaque', 'chute'],
};

const A3_ATTAQUES: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-attaques', layer: 'core', size: 'lg',
  title: 'Trois portes d’entrée', frSub: 'Trois attaques pour un autre article',
  groups: [
    grp('Trois attaques sur la rentrée avancée', [
      free('Lundi 23 août, 8 h 20 : dans la cour de l’école des Tilleuls, il fait encore trente degrés.', 'Monday 23 August, 8:20: in the playground of the Tilleuls school, it is still thirty degrees.', 'une scène'),
      free('« Mes enfants auront fait leur rentrée avant les vacances de leurs cousins », s’amuse une mère.', '"My children will be back at school before their cousins’ holidays are over," a mother jokes.', 'une citation'),
      free('6 200 élèves, dix-sept écoles, une semaine d’été en moins.', '6,200 pupils, seventeen schools, one week less of summer.', 'des chiffres'),
    ], chk('Quelle attaque fait entrer le lecteur par une personne ?', ['la citation de la mère', 'la scène de la cour', 'les chiffres'], 0,
      'Une voix humaine en premier : le lecteur regarde la rentrée par ses yeux. EN: a person as the way in.')),
    grp('Informatif ou incitatif', [
      it(E(2042), 'le titre de l’article'),
      it(E(2043), 'un autre titre possible'),
      it(E(2037), 'la différence'),
    ], chk('« Le festival, un luxe ? » est un titre...', ['informatif : il dit ce qui s’est passé', 'incitatif : il pose une question pour donner envie de lire'], 1,
      'Il ne dit pas le fait ; il suggère un angle. EN: it suggests an angle without stating the fact.')),
    ctl('La chute', 'La chute de l’article sur les prix...', ['pose une question sans y répondre', 'conclut que le festival doit changer de nom'], 0,
      'Une chute ouverte laisse le jugement au lecteur, tout en l’orientant. EN: open, but it still steers.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['attaque', 'chute'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true,
  title: 'Six parties mal nommées',
  rule: {
    title: 'Chaque partie a son rôle',
    body: 'Le surtitre situe, le titre accroche, le chapô résume et oriente, l’attaque fait entrer, la chute laisse une impression, la légende dit comment voir. EN: each part of a page has its own job.',
  },
  cards: [
    { promptLabel: 'le chapô pris pour l’attaque', promptSound: 'L’article commence par « Pour sa seizième édition, le festival relève ses prix ».', fr: src(E(2036)).fr, ipa: ipaOf(E(2036)), tip: 'Ces lignes en gras, sous le titre, sont le chapô. L’attaque vient après, avec la file de 10 h 07. EN: that is the standfirst.' },
    { promptLabel: 'la chute prise pour une conclusion', promptSound: 'L’article conclut que le festival doit changer de nom.', fr: src(E(2039)).fr, ipa: ipaOf(E(2039)), tip: 'Il pose la question sans y répondre. EN: it asks, it does not conclude.' },
    { promptLabel: 'le surtitre pris pour le titre', promptSound: 'Le titre de l’article est « Festival ».', fr: src(E(2042)).fr, ipa: ipaOf(E(2042)), tip: '« Festival » est le surtitre : il situe le sujet. Le titre est la phrase en gros. EN: Festival is the kicker.' },
    { promptLabel: 'la légende prise pour un fait neutre', promptSound: 'La photo montre simplement une file d’attente.', fr: src(E(2113)).fr, ipa: ipaOf(E(2113)), tip: 'La légende relie l’image à Chloé : elle en fait un témoignage. EN: the caption turns it into testimony.' },
    { promptLabel: 'un titre incitatif lu comme un fait', promptSound: 'Le journal affirme que le festival est devenu un luxe.', fr: src(E(2037)).fr, ipa: ipaOf(E(2037)), tip: 'Un titre en question n’affirme pas ; il donne envie de lire. EN: a question headline does not assert.' },
    { promptLabel: 'l’attaque oubliée', promptSound: 'L’article commence par les chiffres de la billetterie.', fr: src(E(2038)).fr, ipa: ipaOf(E(2038)), tip: 'Il commence par une scène ; les chiffres arrivent plus loin. EN: it opens on a scene.' },
  ],
  drill: [
    { promptSay: 'Le texte en gras sous le titre s’appelle le ... .', opts: ['chapô', 'surtitre'], correct: 0 },
    { promptSay: 'Le mot en petit au-dessus du titre, c’est le ... .', opts: ['chapô', 'surtitre', 'intertitre'], correct: 1 },
    { promptSay: 'Les premières lignes de l’article forment l’... .', opts: ['attaque', 'intertitre'], correct: 0 },
    { promptSay: 'La dernière phrase d’un article, c’est la ... .', opts: ['légende', 'chute'], correct: 1 },
    { promptSay: 'Le texte sous une photo s’appelle la ... .', opts: ['chute', 'attaque', 'légende'], correct: 2 },
    { promptSay: 'Un titre qui pose une question est souvent ... .', opts: ['incitatif', 'informatif'], correct: 0 },
    { promptSay: '« UN PUBLIC QUI CHANGE », au milieu de l’article, est un ... .', opts: ['surtitre', 'intertitre'], correct: 1 },
    { promptSay: 'Le chapô résume l’article et en donne l’... .', opts: ['attaque', 'angle', 'auteur'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Chaque partie a son rôle' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un lecteur pressé a confondu' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-24-piege-parties'), say: REFRAME, terms: ['chapo', 'attaque', 'chute'],
};

const A3_COMPARE = pourTaComparaison('a3-comparer', 'Les titres et les chapôs', [
  grp('Deux phrases sur les deux unes', [
    free('Les deux journaux parlent du festival.', 'Both papers are about the festival.', 'le sujet, rien de plus'),
    free('Le Courrier titre sur un record ; L’Hebdo, sur l’épuisement des riverains.', 'Le Courrier headlines a record; L’Hebdo, the residents’ exhaustion.', 'deux titres, deux angles'),
  ], chk('Laquelle compare vraiment ?', ['la première', 'la seconde'], 1,
    'Le titre et le chapô annoncent l’angle : compare-les d’abord. EN: compare headlines and standfirsts first.')),
  grp('La chute aussi', [
    it(E(2039), 'une fin ouverte'),
    free('L’Hebdo finit sur le chiffre du festival, sans commentaire.', 'L’Hebdo ends on the festival’s figure, with no comment.', 'une chute sèche'),
  ], chk('Comparer les chutes, c’est utile ?', ['Oui : c’est souvent l’impression que garde le lecteur.', 'Non : la fin ne compte pas.'], 0,
    'La dernière phrase oriente le souvenir. EN: the last line shapes the memory.')),
], ['chapo', 'chute']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le chapô', 'Le chapô...', ['résume et donne l’angle', 'raconte une scène', 'cite une source'], 0,
    'Il annonce l’article et la façon de le lire. EN: it sums up and sets the angle.'),
  ctl('L’attaque', 'Une attaque peut être...', ['une scène, une citation, un chiffre ou une question', 'seulement un chiffre'], 0,
    'Elle choisit la porte d’entrée. EN: it chooses the way in.'),
  ctl('La légende', 'Une légende de photo est...', ['une simple description neutre', 'déjà une lecture de l’image'], 1,
    'La même photo, une autre légende : une autre histoire. EN: a caption is a reading.'),
], ['chapo', 'attaque']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Du surtitre à la chute',
    opener: {
      line: 'Un article a un haut, un milieu et une fin, et chacun travaille : ici tu nommes chaque partie et ce qu’elle fait. EN: An article has a top, a middle and an end, and each one works: here you name every part and what it does.',
      imageRef: 'lessons/analyse-presse/act03.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les parties d’un article et tu dis ce que chacune oriente. EN: You can name the parts of an article and say what each one steers.',
    estScreens: 38, restPoints: ['a3-parties', 'a3-piege'],
  },
  sections: [A3_ARTICLE, A3_PARTIES, A3_ATTAQUES, A3_PIEGE, A3_COMPARE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE REPORTAGE
 *
 *  TEXT: a report from a market square under works. MOVE: recognise the
 *  report (on the spot, in the present, sensory detail, people met) and see
 *  that whom the reporter meets is already a frame.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_REPORTAGE: Sec<'reading'> = {
  type: 'reading', id: 'a4-reportage', layer: 'core', questionsInModal: true,
  title: 'Un samedi entre les palissades', frSub: 'Un reportage sur le terrain',
  text: REPORTAGE_TEXT,
  glossary: [
    { word: 'maraîcher', en: 'market gardener', note: 'Quelqu’un qui cultive et vend des légumes.' },
  ],
  questions: [
    { q: 'Devine le sens : « les maraîchers qui remballent ». Que veut dire « remballer » ?', a: 'Ranger sa marchandise dans les caisses : le marché se termine.' },
    { q: 'Quels signes montrent que la journaliste était sur place ?', a: 'Les heures précises, l’odeur du goudron, le bruit du marteau-piqueur, les gestes des gens, les paroles entendues.' },
    { q: 'À quel temps est raconté le reportage, et pourquoi ?', a: 'Au présent : le lecteur vit la matinée comme s’il y était.' },
    { q: 'Qui la journaliste fait-elle parler ? Qui n’entend-on pas ?', a: 'Un maraîcher, une retraitée, une boulangère, le chef de chantier. On n’entend ni la mairie ni les habitants qui ne viennent plus au marché.' },
    { q: 'Le chiffre de la boulangère est-il vérifié ?', a: 'Non : elle « assure », entre guillemets, et refuse d’en dire plus. C’est son estimation.' },
    { q: 'Pourquoi finir sur Robert Chauvin ?', a: 'L’article commence et finit avec lui : une boucle. La chute, « au soleil, enfin », ouvre sur l’après-travaux, sur une note d’espoir.' },
  ],
  audio: REC('rec-c1-24-reportage'), say: REFRAME, terms: ['genre', 'sources'],
};

const A4_SIGNES: Sec<'examples'> = {
  type: 'examples', id: 'a4-signes', layer: 'core', sheetId: 'sheet-genres',
  title: 'Les signes du reportage',
  examples: [
    ex(E(2046), 'le présent de narration'),
    ex(E(2047), 'une heure, une odeur : le journaliste y était'),
    ex(E(2048), 'une voix entendue sur place'),
    ex(E(2050), 'ce qu’aucune dépêche ne donne'),
    ex(E(2049), 'le choix qui cadre déjà'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'sources'],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-trier', layer: 'core', size: 'lg',
  title: 'Reportage ou dépêche', frSub: 'Trois extraits sur la même rue',
  groups: [
    grp('Trois extraits', [
      free('Il est 7 heures et la rue des Cordiers sent le pain chaud ; un livreur slalome entre les barrières.', 'It is 7 a.m. and the rue des Cordiers smells of warm bread; a delivery man weaves between the barriers.', 'des sensations, une heure'),
      free('MONTRIVAGE, 12 mai (AHP). La rue des Cordiers restera fermée aux voitures jusqu’en octobre, a annoncé la mairie.', 'MONTRIVAGE, 12 May (AHP). The rue des Cordiers will stay closed to cars until October, the town hall announced.', 'un lieu, une date, une agence'),
      free('« Je connais chaque pavé de cette rue », sourit le cordonnier, en montrant sa vitrine poussiéreuse.', '"I know every cobblestone in this street," the cobbler smiles, pointing at his dusty window.', 'une voix et un geste'),
    ], chk('Lequel vient d’une dépêche ?', ['l’extrait du livreur', 'l’extrait daté, avec le sigle de l’agence', 'l’extrait du cordonnier'], 1,
      'Lieu, date, sigle, verbe neutre : la dépêche résume, sans décor. EN: dateline, agency, neutral verb.')),
    grp('Ce que le reportage choisit', [
      it(E(2049), 'qui parle'),
      it(E(2051), 'montrer ou résumer'),
    ], chk('Imagine : la journaliste n’a rencontré que quatre commerçants, et aucun habitant. Son reportage...', ['montre surtout le marché vu par ceux qui y travaillent', 'montre toute la ville'], 0,
      'Le reportage est vrai et partiel : il montre ce que la journaliste a vu et entendu. EN: true, and partial.')),
    ctl('Le présent', 'Pourquoi le reportage est-il au présent ?', ['pour faire vivre la scène au lecteur', 'parce que tout se passe aujourd’hui'], 0,
      'C’est un présent de narration : il installe le lecteur sur place. EN: a narrative present.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'sources'],
};

/** THE EAR MISSION: a radio report from inside the bus. */
const A4_BUS: Sec<'listening'> = {
  type: 'listening', id: 'a4-bus', layer: 'core', hideLines: true,
  title: 'Dans le bus de 7 h 12', frSub: 'Un reportage à la radio, une seule écoute',
  lines: [ln(E(2052)), ln(E(2053)), ln(E(2054)), ln(E(2055)), ln(E(2056)), ln(E(2057)), ln(E(2058)), ln(E(2059))],
  questions: [
    { q: 'Où se trouve le reporter pendant tout le reportage ?', opts: ['au studio', 'dans le bus', 'à la mairie'], correct: 1,
      why: 'Il monte au terminus et descend devant la mairie : il fait le trajet. EN: he rides the route.' },
    { q: 'Quelle voix occupe le plus de place ?', opts: ['deux lycéens', 'le chauffeur', 'une infirmière pressée'], correct: 2,
      why: 'Elle a une citation entière ; les lycéens, une demi-phrase. Le reporter a choisi sa voix principale. EN: he chose his main voice.' },
    { q: 'Combien de temps dure le trajet ?', opts: ['vingt-neuf minutes', 'dix minutes', 'une heure'], correct: 0,
      why: 'De 7 h 12 à 7 h 41. Le reportage le fait sentir sans le dire. EN: shown, not stated.' },
    { q: 'Les lycéens partagent-ils l’avis de l’infirmière ?', opts: ['Oui, ils sont en colère.', 'Non, ils trouvent le trajet plus calme.'], correct: 1,
      why: 'Une voix contraire, brève, au fond du bus. EN: a brief contrary voice.' },
    { q: 'Qui a le dernier mot ?', opts: ['la société de transport, avec une promesse', 'l’infirmière'], correct: 0,
      why: 'Le reportage se ferme sur la promesse d’horaires adaptés. EN: it closes on a promise.' },
  ],
  audio: REC('rec-c1-24-bus'), say: REFRAME, terms: ['sources'],
};

const A4_COMPARE = pourTaComparaison('a4-comparer', 'Qui le reportage rencontre', [
  grp('Deux phrases sur le reportage', [
    free('Le reportage montre le marché pendant les travaux.', 'The report shows the market during the works.', 'le sujet'),
    free('Le reportage fait surtout parler les commerçants et le chef de chantier ; une seule cliente, et aucun habitant qui a cessé de venir.', 'The report mostly lets the shopkeepers and the site foreman speak; one customer, and no resident who has stopped coming.', 'les voix, et l’absent'),
  ], chk('Laquelle nourrit une comparaison ?', ['la première', 'la seconde'], 1,
    'Dire qui parle, et qui manque, c’est décrire le cadre. EN: who speaks and who is missing.')),
  grp('Un genre, un effet', [
    it(E(2046), 'le présent'),
    free('Le présent et les détails donnent au lecteur l’impression d’y être, donc de tout voir.', 'The present and the details make the reader feel present, and so feel they see everything.', 'l’effet du genre'),
  ], chk('Que retiens-tu pour ta comparaison ?', ['Le reportage donne une impression de tout voir, alors qu’il choisit ce qu’il montre.', 'Le reportage est plus vrai que l’article.'], 0,
    'Ni plus vrai ni plus faux : plus proche, et tout aussi choisi. EN: closer, and just as chosen.')),
], ['genre', 'sources']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le reportage', 'Un reportage se reconnaît à...', ['une heure, un lieu, des sensations, des voix entendues sur place', 'un sigle d’agence'], 0,
    'Le journaliste y était et te fait voir. EN: the reporter was there.'),
  ctl('Le choix', 'Le choix des personnes rencontrées...', ['ne change rien', 'cadre déjà le reportage'], 1,
    'Qui parle décide de ce qu’on voit. EN: who speaks decides what you see.'),
  ctl('Le temps', 'Le présent d’un reportage sert à...', ['dater les faits', 'faire vivre la scène'], 1,
    'Un présent de narration. EN: a narrative present.'),
], ['genre', 'sources']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le reportage',
    opener: {
      line: 'La journaliste était sur la place à 6 h 40 : ici tu apprends ce qu’un reportage montre, et ce qu’il choisit de montrer. EN: The reporter was on the square at 6:40: here you learn what a report shows, and what it chooses to show.',
      imageRef: 'lessons/analyse-presse/act04.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un reportage et tu nommes les voix qu’il a choisies. EN: You can recognise a report and name the voices it chose.',
    estScreens: 34, restPoints: ['a4-signes', 'a4-bus'],
  },
  sections: [A4_REPORTAGE, A4_SIGNES, A4_TRIER, A4_BUS, A4_COMPARE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — L’ÉDITORIAL
 *
 *  TEXT: the daily's editorial on the school calendar, signed with the
 *  paper's name only. MOVE: the editorial is the paper's own voice (the
 *  « nous », the prescriptive verbs, the ligne éditoriale), unlike the news
 *  article in the same issue. The one France / Québec sentence lives here.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_EDITO: Sec<'reading'> = {
  type: 'reading', id: 'a5-edito', layer: 'core', questionsInModal: true,
  title: 'L’éditorial du Courrier', frSub: 'Le journal prend position',
  text: EDITO_TEXT,
  glossary: [
    { word: 'adhésion', en: 'genuine support, buy-in', note: 'Le fait d’être vraiment d’accord, pas seulement de subir une décision.' },
  ],
  questions: [
    { q: 'Devine le sens : « ce long tunnel ». De quoi parle cette image ?', a: 'De la période sans pause entre la rentrée et les fêtes de fin d’année.' },
    { q: 'Qui parle dans ce texte ? Comment le sais-tu ?', a: 'Le journal lui-même : la rubrique « Éditorial », aucune signature personnelle, le « nous », et le nom du journal à la fin.' },
    { q: 'Le journal est-il pour ou contre le nouveau calendrier ?', a: 'Pour sur le fond, contre la méthode : la décision est bonne, la préparation ne l’est pas.' },
    { q: 'Relève deux tournures qui conseillent ou ordonnent.', a: '« doit maintenant convaincre », « Qu’il les emploie à... », « Reconnaissons ».' },
    { q: 'Que fait la dernière phrase ?', a: 'Une chute en deux temps : elle reprend le titre et le retourne, « L’improvisation, si ».' },
    { q: 'En quoi ce texte diffère-t-il de la dépêche de l’acte 2 ?', a: 'La dépêche rapporte et attribue chaque avis ; l’éditorial juge, conseille et parle en son nom.' },
  ],
  audio: REC('rec-c1-24-edito'), say: REFRAME, terms: ['genre', 'signature'],
};

const A5_VOIX: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-voix', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-genres',
  title: 'La voix du journal', frSub: 'Quatre signes de l’éditorial',
  hint: 'Quatre cartes. Cherche qui dit « nous ».',
  audio: REC('rec-c1-24-voix'), say: REFRAME, terms: ['genre', 'signature'],
  cards: [
    { head: 'Pas de nom', label: 'la signature', fr: src(E(2069)).fr, sub: rsOf(E(2069)),
      body: 'Signé ou non, l’éditorial parle au nom du journal : certains journaux le publient sans signature, d’autres le font signer par le rédacteur en chef ou, comme souvent au Québec, par un éditorialiste. EN: signed or not, it speaks for the paper.' },
    { head: 'Le « nous »', label: 'qui parle', fr: src(E(2071)).fr, sub: rsOf(E(2071)),
      body: '« Nous l’avons écrit ici même » : ce n’est pas un journaliste, c’est la rédaction. EN: the « nous » is the newsroom.' },
    { head: 'Des verbes qui prescrivent', label: 'ce qu’il fait', fr: src(E(2063)).fr, sub: rsOf(E(2063)),
      body: 'Il faut, doit, qu’il le fasse : l’éditorial ne rapporte pas, il juge et recommande. EN: it judges and recommends.' },
    { head: 'La ligne du journal', label: 'ce qu’il engage', fr: src(E(2061)).fr, sub: rsOf(E(2061)),
      body: `L’éditorial exprime la ligne éditoriale. L’article du même jour, lui, doit informer. EN: the editorial carries the paper’s line.` },
  ],
};

const A5_QUI: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-qui', layer: 'core', size: 'lg',
  title: 'Article ou éditorial', frSub: 'Quatre phrases du même numéro',
  groups: [
    grp('Le même journal, deux pages', [
      free('Le conseil a adopté le calendrier par neuf voix contre quatre.', 'The board adopted the calendar by nine votes to four.', 'page 3'),
      free('Il faut saluer le courage du conseil, et regretter sa précipitation.', 'The board’s courage deserves praise, and its haste deserves regret.', 'page 2'),
      free('Les enseignants disent avoir découvert le projet dans la presse.', 'Teachers say they found out about the project from the press.', 'page 3'),
      free('Nous demandons au conseil de publier enfin ses bilans.', 'We call on the board to publish its assessments at last.', 'page 2'),
    ], chk('Les phrases de la page 2 viennent...', ['de l’éditorial', 'de l’article'], 0,
      '« Il faut saluer », « nous demandons » : le journal juge et demande. EN: judging and demanding.')),
    grp('La ligne éditoriale', [
      it('fr.b2.journalisme.037', 'le mot du B2'),
      it(E(2070), 'qui l’écrit'),
      it(E(2065), 'la différence'),
    ], chk('L’article de la page 3 cite les critiques des enseignants. Le journal est-il donc contre la réforme ?', ['Oui, forcément.', 'Non : son avis est dans l’éditorial, pour sur le fond.'], 1,
      'L’article rapporte ; seul l’éditorial engage le journal. EN: only the editorial commits the paper.')),
    ctl('Le « nous »', '« Nous l’avons écrit ici même. » Qui est « nous » ?', ['les lecteurs', 'le journal', 'les enseignants'], 1,
      'Le « nous » de l’éditorial, c’est la rédaction. EN: the newsroom.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'signature'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'Six attributions fausses',
  rule: {
    title: 'L’éditorial parle pour le journal',
    body: 'Un avis d’éditorial s’attribue au journal, pas à « l’auteur » ni au « journaliste ». Et il est nuancé : pour sur le fond, contre la méthode. Rapporte les deux. EN: attribute it to the paper, and keep its nuance.',
  },
  cards: [
    { promptLabel: 'le journaliste à la place du journal', promptSound: 'Le journaliste pense que le calendrier est une bonne idée.', fr: src(E(2066)).fr, ipa: ipaOf(E(2066)), tip: 'Pas de journaliste nommé : c’est le journal qui estime. EN: the paper, not a reporter.' },
    { promptLabel: 'la nuance perdue', promptSound: 'L’éditorial soutient la réforme sans réserve.', fr: src(E(2068)).fr, ipa: ipaOf(E(2068)), tip: 'Pour sur le fond, critique sur la méthode. EN: for the aim, against the method.' },
    { promptLabel: 'le titre pris au pied de la lettre', promptSound: 'Selon l’éditorial, une semaine de vacances, c’est un caprice.', fr: src(E(2064)).fr, ipa: ipaOf(E(2064)), tip: 'Le titre dit l’inverse : ce n’est pas un caprice. EN: the headline says the opposite.' },
    { promptLabel: 'le conseil pris pour un fait', promptSound: 'Le conseil scolaire va convaincre les familles.', fr: src(E(2063)).fr, ipa: ipaOf(E(2063)), tip: '« Doit » : c’est une recommandation du journal, pas une annonce. EN: a recommendation, not news.' },
    { promptLabel: 'le regret mal lu', promptSound: 'Les enseignants ont été consultés, selon le journal.', fr: src(E(2067)).fr, ipa: ipaOf(E(2067)), tip: 'Le journal regrette justement qu’ils ne l’aient pas été. EN: it regrets they were not.' },
    { promptLabel: 'le « nous » mal attribué', promptSound: 'Nous, c’est le collectif de parents.', fr: src(E(2071)).fr, ipa: ipaOf(E(2071)), tip: 'Dans un éditorial, « nous » désigne le journal. EN: we is the paper.' },
  ],
  drill: [
    { promptSay: 'L’éditorial engage le ... tout entier.', opts: ['journal', 'journaliste'], correct: 0 },
    { promptSay: 'Le journal est pour la réforme sur le fond, mais critique la ... .', opts: ['décision', 'méthode'], correct: 1 },
    { promptSay: 'Le « nous » de l’éditorial désigne la ... .', opts: ['rédaction', 'mairie', 'famille'], correct: 0 },
    { promptSay: 'Un éditorial ... position.', opts: ['rapporte', 'prend'], correct: 1 },
    { promptSay: '« Le conseil doit convaincre » : c’est une ... .', opts: ['information', 'recommandation'], correct: 1 },
    { promptSay: 'Au Québec, l’éditorial est souvent signé par un ... .', opts: ['éditorialiste', 'lecteur', 'agent'], correct: 0 },
    { promptSay: 'La dépêche rapporte ; l’éditorial ... .', opts: ['juge', 'résume'], correct: 0 },
    { promptSay: 'Selon l’éditorial, la méthode compte autant que la ... .', opts: ['rentrée', 'décision', 'presse'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'L’éditorial parle pour le journal' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un lecteur pressé a attribué' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-24-piege-edito'), say: REFRAME, terms: ['signature'],
};

const A5_COMPARE = pourTaComparaison('a5-comparer', 'Le genre de chaque texte', [
  grp('Deux façons de nommer un éditorial', [
    free('L’auteur pense que le pont devrait rouvrir en semaine.', 'The author thinks the bridge should reopen on weekdays.', 'quel auteur ?'),
    free('Dans son éditorial, L’Hebdo demande la réouverture du pont en semaine.', 'In its editorial, L’Hebdo calls for the bridge to reopen on weekdays.', 'le genre et la voix du journal'),
  ], chk('Laquelle nomme juste ?', ['la première', 'la seconde'], 1,
    'Un éditorial s’attribue au journal, et son genre se nomme. EN: name the genre and the paper.')),
  grp('Rapporter la nuance', [
    it(E(2068), 'pour, mais'),
    it(E(2065), 'informer ou juger'),
  ], chk('Ta comparaison oppose un reportage et un éditorial. Tu écris...', ['que l’un montre et que l’autre juge', 'que l’un est vrai et l’autre faux'], 0,
    'Le genre explique une grande part de la différence. EN: genre explains much of the difference.')),
], ['genre', 'signature']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La voix', 'Un éditorial exprime...', ['la position du journal', 'l’avis d’un lecteur', 'une information neutre'], 0,
    'Il porte la ligne éditoriale. EN: the paper’s line.'),
  ctl('La signature', 'Un éditorial sans signature...', ['est l’avis d’un lecteur', 'est la voix du journal'], 1,
    'Signé ou non, par le rédacteur en chef ou, souvent au Québec, par un éditorialiste, il parle au nom du journal. EN: signed or not, it is the paper’s voice.'),
  ctl('Les verbes', '« Il faut », « doit », « qu’il le fasse » signalent...', ['un récit', 'une recommandation'], 1,
    'L’éditorial juge et recommande. EN: it recommends.'),
], ['genre', 'signature']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'L’éditorial',
    opener: {
      line: 'Un texte sans nom d’auteur et qui dit « nous » : ici tu reconnais la voix du journal lui-même. EN: A text with no byline that says « we »: here you recognise the voice of the paper itself.',
      imageRef: 'lessons/analyse-presse/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un éditorial et tu attribues son avis au journal, nuance comprise. EN: You can recognise an editorial and attribute its view to the paper, nuance included.',
    estScreens: 38, restPoints: ['a5-voix', 'a5-piege'],
  },
  sections: [A5_EDITO, A5_VOIX, A5_QUI, A5_PIEGE, A5_COMPARE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — CHRONIQUE ET BILLET
 *
 *  TEXT: a billet with its « je », its one idea and its witty ending. MOVE:
 *  the « je » is a byline, not the paper; the billet and the chronique are
 *  a person's voice. Humour is named only as a genre signal (irony is
 *  b2.24's and c1.20's).
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_BILLET: Sec<'reading'> = {
  type: 'reading', id: 'a6-billet', layer: 'core', questionsInModal: true,
  title: 'Le billet d’Odile', frSub: 'Une voix, une idée, une chute',
  text: BILLET_TEXT,
  glossary: [
    { word: 'navette', en: 'shuttle bus', note: 'Un bus qui fait l’aller-retour entre deux points.' },
  ],
  questions: [
    { q: 'Devine le sens : « en citoyenne exemplaire ». Que veut dire « exemplaire » ici ?', a: 'Qui sert d’exemple : elle fait ce qu’on lui conseille, et le dit avec le sourire.' },
    { q: 'Qui parle, et au nom de qui ?', a: 'Odile Vasseur, en son nom : un « je », une rubrique à son nom, sa signature.' },
    { q: 'Quelle est l’idée unique du billet ?', a: 'La navette s’arrête avant la fin des concerts : elle ne règle pas le problème du stationnement.' },
    { q: '« Elle était parfaite. » Faut-il le prendre au mot ?', a: 'En partie : les qualités sont réelles, mais l’éloge prépare le défaut, « minuscule », qui rend la navette inutile le soir.' },
    { q: 'Comment le billet se termine-t-il ?', a: 'Sur un trait d’esprit : venir à pied, onze kilomètres, l’entraînement lundi.' },
    { q: 'Le journal affirme-t-il que la navette est mal organisée ?', a: 'Non : c’est l’avis de la chroniqueuse. Le billet n’engage que son auteure.' },
  ],
  audio: REC('rec-c1-24-billet'), say: REFRAME, terms: ['genre', 'chute'],
};

const A6_JE: Sec<'focus'> = {
  type: 'focus', id: 'a6-je', layer: 'core', sheetId: 'sheet-genres',
  title: 'Le « je » dans le journal',
  points: [
    'Une signature, souvent une photo et une rubrique fixe : une personne parle, pas la rédaction. EN: a byline, a photo, a regular slot.',
    'Un « je » assumé et un ton libre, parfois drôle. EN: a declared « je » and a free tone.',
    'La chronique développe un regard semaine après semaine ; le billet tient sur une idée et une chute. EN: a column develops; a billet makes one point.',
    'Son avis s’attribue à son auteur : « selon la chroniqueuse », jamais « selon le journal ». EN: attribute it to the columnist.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'signature'],
};

const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-trier', layer: 'core', size: 'lg',
  title: 'Qui parle ici', frSub: 'Quatre voix dans le même journal',
  groups: [
    grp('Quatre extraits', [
      free('Je l’avoue, je n’ai jamais compris pourquoi les bus s’arrêtent avant la musique.', 'I admit I have never understood why the buses stop before the music does.', 'un « je », une humeur'),
      free('Nous appelons la mairie à prolonger la navette jusqu’à une heure du matin.', 'We call on the town hall to run the shuttle until 1 a.m.', 'un « nous », une demande'),
      free('La navette a transporté 3 100 passagers en trois soirs, selon la mairie.', 'The shuttle carried 3,100 passengers over three nights, according to the town hall.', 'un chiffre attribué'),
      free('Chaque semaine, je vous raconte une rue de Montrivage ; cette fois, c’est le quai.', 'Every week I tell you about a street in Montrivage; this time, the quay.', 'un « je » qui revient'),
    ], chk('Laquelle annonce une chronique, plutôt qu’un billet ?', ['« Chaque semaine, je vous raconte une rue »', '« Nous appelons la mairie »', '« selon la mairie »'], 0,
      'Un rendez-vous régulier, un regard qui revient : la chronique. EN: a regular slot is a column.')),
    grp('Le « je », une signature', [
      it(E(2075), 'en son nom'),
      it(E(2079), 'le signal'),
      it(E(2082), 'la formule'),
    ], chk('« Nous appelons la mairie à prolonger la navette » vient sans doute...', ['d’un éditorial', 'd’un billet', 'd’une dépêche'], 0,
      'Le « nous » qui demande, c’est le journal. EN: the demanding « nous » is the paper.')),
    ctl('L’humour', 'Le ton drôle d’un billet signale...', ['un texte peu sérieux, à ignorer', 'un genre libre, où une personne donne son avis'], 1,
      'L’humour n’enlève rien à la critique : il la signe. EN: humour signs the criticism.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'signature'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lectures d’un billet',
  errors: [
    { wrong: 'Le journal critique la navette.', right: 'Odile Vasseur, dans son billet, critique l’horaire de la navette.',
      why: 'Normal : le billet est imprimé dans le journal. Mais un « je » signé n’est pas la rédaction. EN: a signed « je » is not the paper.' },
    { wrong: 'La navette est mauvaise.', right: 'La navette est jugée parfaite, sauf son dernier départ, trop tôt.',
      why: 'L’éloge est sincère en partie ; tout le billet tient sur un seul défaut. EN: one fault carries the whole piece.' },
    { wrong: 'L’auteure va venir à pied l’an prochain.', right: 'L’auteure finit sur une boutade : venir à pied, à onze kilomètres.',
      why: 'La chute est un trait d’esprit, pas un projet. EN: the ending is a joke, not a plan.' },
    { wrong: 'Un billet drôle ne donne pas d’avis.', right: 'Le billet donne un avis net : la navette devrait rentrer après la musique.',
      why: 'L’humour porte une demande précise. EN: the humour carries a clear demand.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'chute'],
};

const A6_COMPARE = pourTaComparaison('a6-comparer', 'À qui attribuer un avis', [
  grp('Deux attributions', [
    free('L’Hebdo trouve la navette inutile.', 'L’Hebdo finds the shuttle useless.', 'le journal, à tort'),
    it(E(2080), 'la chroniqueuse, nommée'),
  ], chk('Laquelle attribue juste ?', ['la première', 'la seconde'], 1,
    'Un billet s’attribue à son auteure, par son nom. EN: attribute a billet to its author.')),
  grp('Le genre dans ta comparaison', [
    it(E(2081), 'la règle'),
    free('Le premier texte est un billet d’humeur signé ; le second, une dépêche.', 'The first text is a signed billet d’humeur, a short witty opinion piece; the second, a dispatch.', 'deux genres, deux voix'),
  ], chk('Pourquoi nommer le genre au début de ta comparaison ?', ['Parce qu’il dit qui parle et ce que le texte cherche à faire.', 'Pour faire plus de mots.'], 0,
    'Le genre explique déjà une part des différences. EN: genre explains part of the difference.')),
], ['genre', 'signature']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le « je »', 'Un « je » dans un journal signale...', ['la position de la rédaction', 'l’avis d’une personne qui signe'], 1,
    'Une signature, pas la rédaction. EN: a byline.'),
  ctl('Le billet', 'Un billet tient en général...', ['sur une idée et une chute', 'sur dix arguments'], 0,
    'Court, une idée, une pointe finale. EN: one idea, one punchline.'),
  ctl('La chronique', 'Une chronique se reconnaît à...', ['son rendez-vous régulier et la voix de son auteur', 'son sigle d’agence', 'son absence de signature'], 0,
    'Une rubrique fixe, un auteur qui revient. EN: a regular slot, a returning voice.'),
], ['genre', 'signature']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Chronique et billet',
    opener: {
      line: 'Quarante minutes pour une place, racontées à la première personne : ici tu sais à qui appartient un « je » dans le journal. EN: Forty minutes to park, told in the first person: here you learn whose voice an « I » in the paper is.',
      imageRef: 'lessons/analyse-presse/act06.jpg',
    },
    sections: [],
    milestone: 'Tu distingues la voix d’une chroniqueuse de celle du journal, et tu attribues chaque avis à la bonne personne. EN: You can tell a columnist’s voice from the paper’s and attribute each view correctly.',
    estScreens: 32, restPoints: ['a6-je', 'a6-erreurs'],
  },
  sections: [A6_BILLET, A6_JE, A6_TRIER, A6_ERREURS, A6_COMPARE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — TRIBUNE ET LETTRE OUVERTE
 *
 *  TEXT: an open letter from a parents' group, printed on the op-ed page
 *  with its disclaimer. MOVE: who signs and from where (the author line),
 *  what the paper's note means, and what an open letter is for.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LETTRE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lettre', layer: 'core', questionsInModal: true,
  title: 'Une lettre ouverte', frSub: 'Sur la page Tribune',
  text: LETTRE_TEXT,
  glossary: [
    { word: 'querelle', en: 'quarrel', note: 'Une dispute, souvent longue.' },
  ],
  questions: [
    { q: 'Devine le sens : « être entendus avant d’être prévenus ». Que veut dire « prévenus » ici ?', a: 'Informés après coup, quand tout est déjà décidé ; « entendus » veut dire consultés.' },
    { q: 'Qui signe ce texte, et d’où parle-t-il ?', a: 'Un collectif de parents de quatre écoles, présenté sous le titre ; trois parents signent à la fin.' },
    { q: 'À qui la lettre s’adresse-t-elle ? Pour qui est-elle écrite ?', a: 'À la présidente du conseil scolaire ; publiée dans le journal, elle vise aussi le public et les autres familles.' },
    { q: 'Le journal partage-t-il cet avis ?', a: 'Ce texte ne le dit pas : la note précise que les textes n’engagent que leurs auteurs. L’avis du journal est dans son éditorial.' },
    { q: 'Quelles sont les trois demandes ?', a: 'Une consultation avant l’été, un accueil des enfants la deuxième semaine d’automne, la publication des bilans.' },
    { q: 'Que concède le collectif avant de critiquer ?', a: 'Les bonnes intentions du conseil et la fatigue des enfants en novembre.' },
  ],
  audio: REC('rec-c1-24-lettre'), say: REFRAME, terms: ['genre', 'signature'],
};

const A7_SIGNES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-signes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-genres',
  title: 'Tribune et lettre ouverte', frSub: 'Quatre signes sur la page',
  hint: 'Quatre cartes. Cherche qui signe, et pour qui.',
  audio: REC('rec-c1-24-signes'), say: REFRAME, terms: ['genre', 'signature'],
  cards: [
    { head: 'La ligne de présentation', label: 'sous le titre', fr: src(E(2091)).fr, sub: rsOf(E(2091)),
      body: 'Urbaniste, présidente d’association, collectif de parents : la tribune dit qui écrit et à quel titre. C’est d’où l’auteur parle. EN: the author line says where the writer speaks from.' },
    { head: 'La note de la rédaction', label: 'la distance', fr: src(E(2085)).fr, sub: rsOf(E(2085)),
      body: 'Le journal publie, il n’endosse pas. Son avis à lui est ailleurs, dans l’éditorial. EN: the paper publishes without endorsing.' },
    { head: 'Le destinataire nommé', label: 'la lettre ouverte', fr: src(E(2090)).fr, sub: rsOf(E(2090)),
      body: 'Madame la Présidente : la lettre vise une personne, mais elle est publiée pour que tous la lisent, et pour peser. EN: addressed to one, written for all.' },
    { head: 'Les demandes', label: 'la fin', fr: src(E(2087)).fr, sub: rsOf(E(2087)),
      body: 'Une tribune ou une lettre ouverte finit souvent sur des demandes précises. Ce sont elles qu’il faut retenir. EN: it usually ends on demands.' },
  ],
};

const A7_SIGNATURES: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-signatures', layer: 'core', size: 'lg',
  title: 'Qui signe, et d’où', frSub: 'Trois tribunes sur le pont des Saules',
  groups: [
    grp('Trois lignes de présentation', [
      free('Par Clémence Arnaud, urbaniste, ancienne directrice des transports de la ville.', 'By Clémence Arnaud, urban planner, former head of transport for the town.', 'une experte'),
      free('Par Hugo Ferrière, gérant d’un parking du centre-ville.', 'By Hugo Ferrière, manager of a town-centre car park.', 'un intérêt possible'),
      free('Par le collectif Parents de la Rive-Est.', 'By the Parents de la Rive-Est group.', 'un collectif'),
    ], chk('Une tribune contre la fermeture du pont aux voitures : quelle signature t’invite à chercher un intérêt ?', ['le gérant de parking', 'l’urbaniste', 'le collectif de parents'], 0,
      'Un parking vit des voitures. Cela ne rend pas l’argument faux : tu le notes. EN: note the stake without dismissing the argument.')),
    grp('Le journal et la tribune', [
      it(E(2089), 'publier n’est pas signer'),
      it(E(2092), 'la règle'),
      it('fr.b2.journalisme.050', 'le mot du B2'),
    ], chk('Le Courrier publie une tribune contre le calendrier. Tu écris...', ['Le Courrier est contre le calendrier.', 'Le Courrier publie la tribune d’un collectif opposé au calendrier.'], 1,
      'Tu attribues l’avis à son auteur, et tu nommes le genre. EN: attribute and name the genre.')),
    ctl('La lettre ouverte', 'Pourquoi publier une lettre adressée à une seule personne ?', ['pour peser sur elle en prenant le public à témoin', 'parce que c’est plus court'], 0,
      'La publication fait de la demande une affaire publique. EN: publishing makes it public.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'signature'],
};

const A7_REFLEXES: Sec<'hacks'> = {
  type: 'hacks', id: 'a7-reflexes', layer: 'core', sheetId: 'sheet-genres',
  title: 'Trois réflexes devant un texte d’opinion',
  hacks: [
    { hack: 'Lis la ligne sous le titre avant le texte.', why: 'Elle dit qui écrit et à quel titre : c’est d’où il parle. EN: read the author line first.' },
    { hack: 'Cherche la note de la rédaction.', why: '« N’engagent que leurs auteurs » : le journal publie sans prendre parti. EN: look for the disclaimer.' },
    { hack: 'Repère la concession, puis les demandes.', why: 'Une tribune accorde souvent un point avant de demander ; les demandes sont son vrai contenu. EN: concession first, demands last.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'signature'],
};

const A7_COMPARE = pourTaComparaison('a7-comparer', 'D’où parle chaque texte', [
  grp('Deux phrases sur une tribune', [
    free('Le texte dit que la réforme coûtera cher aux familles.', 'The text says the reform will cost families a lot.', 'qui le dit ?'),
    free('Le collectif, qui signe une lettre ouverte, affirme que la réforme coûtera cher aux familles.', 'The group, signing an open letter, claims the reform will cost families a lot.', 'le genre et la voix'),
  ], chk('Laquelle est utile dans une comparaison ?', ['la première', 'la seconde'], 1,
    'Qui parle, dans quel genre : c’est ce qui donne son poids à l’affirmation. EN: who speaks, in which genre.')),
  grp('La signature dans ta comparaison', [
    it(E(2093), 'qui signe'),
    free('L’éditorial parle au nom de L’Hebdo ; le reportage est signé par une journaliste.', 'The editorial speaks for L’Hebdo; the report is signed by a journalist.', 'deux signatures'),
  ], chk('Pour les textes du pont, la signature t’apprend...', ['qui parle : le journal ou une journaliste sur place', 'rien d’utile'], 0,
    'La signature dit au nom de qui le texte parle. EN: the byline says on whose behalf.')),
], ['genre', 'signature']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La tribune', 'Une tribune engage...', ['son auteur', 'le journal', 'la mairie'], 0,
    'Le journal publie, l’auteur signe. EN: the author, not the paper.'),
  ctl('La lettre ouverte', 'Une lettre ouverte s’adresse...', ['à une personne, sous les yeux du public', 'au journal seulement'], 0,
    'Elle nomme un destinataire et prend le public à témoin. EN: one addressee, a public audience.'),
  ctl('La présentation', 'La ligne sous le nom de l’auteur sert à...', ['dire d’où il parle', 'remplir la page'], 0,
    'Sa fonction peut révéler un savoir, ou un intérêt. EN: expertise or stake.'),
], ['genre', 'signature']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Tribune et lettre ouverte',
    opener: {
      line: 'Deux cents familles écrivent à la présidente, sous les yeux de toute la ville : ici tu lis qui signe une tribune, et au nom de qui. EN: Two hundred families write to the board chair in front of the whole town: here you read who signs an op-ed, and for whom.',
      imageRef: 'lessons/analyse-presse/act07.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une tribune et une lettre ouverte, et tu dis d’où parle leur auteur. EN: You can recognise an op-ed and an open letter and say where their author speaks from.',
    estScreens: 30, restPoints: ['a7-signes'],
  },
  sections: [A7_LETTRE, A7_SIGNES, A7_SIGNATURES, A7_REFLEXES, A7_COMPARE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — QUI PARLE, ET DANS QUEL ORDRE
 *
 *  TEXT: an article on a bus detour, built on three angry voices first, the
 *  company summarised, one calm voice near the end and no planner. MOVE:
 *  count the voices, read their order and length, quoted or summarised,
 *  named or anonymous, and find who is missing.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ARTICLE: Sec<'reading'> = {
  type: 'reading', id: 'a8-article', layer: 'core', questionsInModal: true,
  title: 'La colère de la ligne 7', frSub: 'Compte les voix',
  text: SOURCES_TEXT,
  glossary: [
    { word: 'bondé', en: 'packed', note: 'Plein de monde, sans une place libre.' },
  ],
  questions: [
    { q: 'Devine le sens : « les usagers ne décolèrent pas ». Que veut dire « décolérer » ?', a: 'Se calmer après une colère. Ici, ils restent en colère.' },
    { q: 'Combien de voix entend-on, et dans quel ordre ?', a: 'Trois usagers mécontents d’abord, puis le comité (la pétition), la société de transport, la mairie en une ligne, et un retraité plus mesuré presque à la fin.' },
    { q: 'Comment la société de transport est-elle présentée ?', a: 'Résumée au style indirect, d’après un courriel ; jamais citée directement, et l’article précise qu’elle n’a pas donné suite à la demande d’entretien.' },
    { q: 'Le chiffre de huit cents signatures est-il vérifié ?', a: 'Non : « aurait », « selon ses organisateurs ».' },
    { q: 'Qui n’est pas interrogé ?', a: 'Un urbaniste, un responsable du chantier ; la mairie se contente de renvoyer vers la société.' },
    { q: 'Si l’on ouvrait l’article sur Paul Girard, que changerait-il ?', a: 'Le texte commencerait par un détour supportable : les mêmes citations raconteraient une autre histoire.' },
  ],
  audio: REC('rec-c1-24-sources'), say: REFRAME, terms: ['sources', 'cadrage'],
};

const A8_VOIX: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-voix', layer: 'core', sheetId: 'sheet-cadre',
  title: 'Six questions aux voix d’un article',
  cols: ['Question', 'Dans l’article', 'Ce que ça fait'],
  rows: [
    { cells: ['Qui parle en premier ?', 'une usagère en colère', 'donne le ton'], say: src(E(2096)).fr,
      detail: { title: 'La première voix', body: 'Elle installe le point de vue du lecteur. Ici, la colère arrive avant toute explication. EN: the first voice sets the viewpoint.', say: src(E(2097)).fr } },
    { cells: ['Qui a le plus de lignes ?', 'trois usagers mécontents', 'fait le poids'], say: src(E(2102)).fr,
      detail: { title: 'La place', body: 'Compte les lignes : la place accordée à chacun pèse autant que ce qu’il dit. EN: space given is weight given.', say: src(E(2102)).fr } },
    { cells: ['Qui est cité, qui est résumé ?', 'les usagers cités, la société résumée', 'donne ou reprend la parole'], say: src(E(2101)).fr,
      detail: { title: 'Citer ou résumer', body: 'Une citation fait entendre une voix ; un résumé au style indirect la tient à distance. EN: quoting gives a voice; summing up keeps it at a distance.', say: src(E(2098)).fr } },
    { cells: ['Qui est anonyme ?', 'un habitué de la ligne', 'un mot fort, sans responsable'], say: src(E(2104)).fr,
      detail: { title: 'L’anonyme', body: 'L’anonymat protège parfois une source ; il permet aussi un mot fort dont personne ne répond. EN: anonymity protects, and frees strong words.', say: src(E(2104)).fr } },
    { cells: ['Qui a le dernier mot ?', 'un retraité mesuré, presque à la fin', 'une nuance, tard'], say: src(E(2099)).fr,
      detail: { title: 'La dernière voix', body: 'Placée en fin d’article, une voix contraire nuance, mais après que le ton est donné. EN: a late contrary voice nuances, after the tone is set.', say: src(E(2099)).fr } },
    { cells: ['Qui manque ?', 'un urbaniste, le chantier', 'le hors-champ'], say: src(E(2100)).fr,
      detail: { title: 'Les absents', body: 'Une voix absente ne contredit personne. Demande-toi qui aurait pu parler, et ce qu’il aurait dit. EN: an absent voice contradicts no one.', say: src(E(2100)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['sources', 'horschamp'],
};

const A8_ORDRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-ordre', layer: 'core', size: 'lg',
  title: 'Les mêmes voix, un autre ordre', frSub: 'Refais l’article à l’envers',
  groups: [
    grp('L’article, dans l’autre sens', [
      free('« C’est long, mais c’est pour six mois, et le nouveau trajet est plus calme », estime Paul Girard.', '"It is long, but it is for six months, and the new route is quieter," says Paul Girard.', 'en premier, cette fois'),
      it(E(2098), 'au milieu'),
      it(E(2097), 'en dernier'),
    ], chk('Ouvert par le retraité, l’article prend d’abord le ton...', ['d’un détour supportable, que certains usagers contestent', 'd’une colère générale'], 0,
      'La première voix donne le ton : mêmes voix, autre ordre, autre lecture. EN: the first voice sets the tone; same voices, other order, other reading.')),
    grp('Citer ou résumer', [
      free('Selon la société, le détour est provisoire.', 'According to the company, the detour is temporary.', 'résumé'),
      free('« Ce détour est provisoire, et nous le regrettons autant que vous », explique la directrice du réseau.', '"This detour is temporary, and we regret it as much as you do," explains the network director.', 'cité, avec une voix'),
    ], chk('Quelle version rend la société de transport plus proche du lecteur ?', ['le résumé', 'la citation de la directrice'], 1,
      'Une voix citée a un visage ; un résumé reste administratif. EN: a quoted voice has a face.')),
    ctl('L’anonyme', '« Un habitué, qui préfère rester anonyme, parle de mépris. » Ce mot...', ['est fort, et personne n’en répond', 'est vérifié par le journal'], 0,
      'Rien d’illégitime, mais note-le : un mot fort sans nom. EN: a strong word with no name.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sources'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six conclusions hâtives',
  rule: {
    title: 'Citer tout le monde ne suffit pas',
    body: 'Un article peut citer tous les camps et pencher quand même : par l’ordre, la place, le style direct ou indirect, les absents. Compte, puis regarde l’ordre. EN: quoting everyone does not make a text neutral.',
  },
  cards: [
    { promptLabel: 'l’ordre ignoré', promptSound: 'L’article est neutre : il cite tout le monde.', fr: src(E(2103)).fr, ipa: ipaOf(E(2103)), tip: 'Tout le monde, mais pas à la même place ni avec la même longueur. EN: not in the same place or length.' },
    { promptLabel: 'le résumé pris pour une citation', promptSound: 'La société de transport dit « le détour est provisoire ».', fr: src(E(2098)).fr, ipa: ipaOf(E(2098)), tip: 'Elle n’est pas citée : l’article résume un courriel. EN: summarised, not quoted.' },
    { promptLabel: 'les absents oubliés', promptSound: 'Tous les acteurs du dossier sont interrogés.', fr: src(E(2100)).fr, ipa: ipaOf(E(2100)), tip: 'Ni urbaniste ni responsable du chantier. EN: no planner, no site manager.' },
    { promptLabel: 'la dernière voix effacée', promptSound: 'Personne n’est satisfait du nouveau trajet.', fr: src(E(2099)).fr, ipa: ipaOf(E(2099)), tip: 'Un retraité l’est, en une ligne, à la fin. EN: one is, in one line.' },
    { promptLabel: 'la première voix sous-estimée', promptSound: 'L’ordre des citations ne change rien.', fr: src(E(2096)).fr, ipa: ipaOf(E(2096)), tip: 'La première voix donne le ton. EN: the first voice sets the tone.' },
    { promptLabel: 'l’anonyme pris pour une preuve', promptSound: 'Le mépris de la société est établi.', fr: src(E(2104)).fr, ipa: ipaOf(E(2104)), tip: 'Un mot fort, d’une personne anonyme : une opinion rapportée. EN: a reported opinion.' },
  ],
  drill: [
    { promptSay: 'La première voix donne le ... .', opts: ['ton', 'titre'], correct: 0 },
    { promptSay: 'Citer au style direct, c’est donner la ... .', opts: ['preuve', 'parole'], correct: 1 },
    { promptSay: 'La société de transport est ... dans l’article.', opts: ['résumée', 'citée longuement', 'absente'], correct: 0 },
    { promptSay: 'Le chiffre de la pétition est donné par ses ... .', opts: ['organisateurs', 'opposants'], correct: 0 },
    { promptSay: 'Aucun ... n’est interrogé.', opts: ['usager', 'urbaniste'], correct: 1 },
    { promptSay: 'Les mêmes citations, dans un autre ordre, racontent une autre ... .', opts: ['ligne', 'source', 'histoire'], correct: 2 },
    { promptSay: 'Le retraité satisfait arrive presque à la ... .', opts: ['fin', 'une'], correct: 0 },
    { promptSay: 'Un mot fort d’un anonyme reste une ... rapportée.', opts: ['preuve', 'opinion'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Citer tout le monde ne suffit pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un lecteur pressé a conclu' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-24-piege-sources'), say: REFRAME, terms: ['sources', 'cadrage'],
};

const A8_COMPARE = pourTaComparaison('a8-comparer', 'Les voix de chaque texte', [
  grp('Deux phrases sur les voix', [
    free('L’article cite plusieurs personnes.', 'The article quotes several people.', 'trop vague'),
    free('L’article ouvre sur trois usagers en colère et ne laisse au seul usager satisfait qu’une ligne, à la fin.', 'The article opens on three angry passengers and gives the one satisfied passenger a single line at the end.', 'qui, où, combien'),
  ], chk('Laquelle montre un cadrage ?', ['la première', 'la seconde'], 1,
    'Qui, dans quel ordre, avec quelle place : voilà le cadre. EN: who, in what order, with how much space.')),
  grp('Pour les textes du pont', [
    it(E(2147), 'le reportage'),
    it(E(2148), 'l’éditorial'),
  ], chk('Ces deux phrases comparent...', ['le choix des voix dans chaque texte', 'les deux auteurs'], 0,
    'Les voix choisies font une grande part du cadrage. EN: chosen voices do much of the framing.')),
], ['sources', 'cadrage']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('L’ordre', 'Dans un article, la première voix...', ['donne le ton', 'n’a aucun effet'], 0,
    'Le lecteur regarde le sujet à travers elle. EN: the reader sees through it.'),
  ctl('Le style', 'Résumer une personne au lieu de la citer...', ['la tient à distance', 'la met en avant'], 0,
    'La citation donne la parole ; le résumé la reprend. EN: quoting gives the floor.'),
  ctl('Les absents', 'Pour trouver le hors-champ d’un article, tu demandes...', ['qui aurait pu parler et n’a pas parlé', 'combien de mots il compte', 'qui l’a imprimé'], 0,
    'Les voix absentes ne contredisent personne. EN: absent voices contradict no one.'),
], ['sources', 'horschamp']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Qui parle, et dans quel ordre',
    opener: {
      line: 'Trois usagers en colère, puis une ligne pour un usager content : ici tu comptes les voix et tu lis leur ordre. EN: Three angry passengers, then one line for a happy one: here you count the voices and read their order.',
      imageRef: 'lessons/analyse-presse/act08.jpg',
    },
    sections: [],
    milestone: 'Tu comptes les voix d’un article, tu lis leur ordre et tu nommes celles qui manquent. EN: You can count an article’s voices, read their order and name those missing.',
    estScreens: 38, restPoints: ['a8-voix', 'a8-piege'],
  },
  sections: [A8_ARTICLE, A8_VOIX, A8_ORDRE, A8_PIEGE, A8_COMPARE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — CHIFFRES ET LÉGENDES
 *
 *  TEXT: two reports on the same festival figures, with their photo
 *  captions. MOVE: one proportion seen from both sides, a percentage on a
 *  small base, the chosen comparison, the photo's moment and its caption.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_CHIFFRES: Sec<'reading'> = {
  type: 'reading', id: 'a9-chiffres', layer: 'core', questionsInModal: true,
  title: 'Deux bilans, les mêmes chiffres', frSub: 'Le Courrier et L’Hebdo font les comptes',
  text: CHIFFRES_TEXT,
  glossary: [
    { word: 'retombées', en: 'economic spin-offs', note: 'Les effets d’un événement, ici l’argent dépensé dans les commerces.' },
  ],
  questions: [
    { q: 'Devine le sens : « la fréquentation frôle la jauge maximale ». Que veut dire « frôler » ici ?', a: 'S’en approcher de très près sans l’atteindre.' },
    { q: 'Les deux textes donnent-ils des chiffres différents ?', a: 'Ils partagent les chiffres clés (+5 %, 38 plaintes, un sur trois ou deux sur trois), présentés autrement ; chacun en ajoute qui servent son récit (42 000 entrées et 6 % du budget pour A, la subvention en hausse de 15 % pour B).' },
    { q: '« Près d’un festivalier sur trois venait d’ailleurs » et « deux festivaliers sur trois habitent la région » : est-ce contradictoire ?', a: 'Non : c’est la même proportion, vue de deux côtés.' },
    { q: 'Les plaintes « ont triplé » ; c’est « moins d’une plainte pour mille entrées ». Lequel est vrai ?', a: 'Les deux : de 12 à 38, c’est un triplement ; rapporté aux entrées, c’est peu. Chaque texte choisit sa base.' },
    { q: 'Que dit chaque photo, avec sa légende ?', a: 'Le Courrier montre la foule du samedi soir ; L’Hebdo, un riverain et les déchets du dimanche matin. Chaque photo choisit son moment.' },
    { q: 'Le +5 % : comment chaque texte le présente-t-il ?', a: 'Le Courrier : « progresse » ; L’Hebdo : « ne progresse plus que », comparé aux hausses des premières années.' },
  ],
  audio: REC('rec-c1-24-chiffres'), say: REFRAME, terms: ['cadrage'],
};

const A9_REGLES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-regles', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-cadre',
  title: 'Lire un chiffre de presse', frSub: 'Quatre questions',
  hint: 'Quatre cartes. Demande toujours : par rapport à quoi ?',
  audio: REC('rec-c1-24-regles'), say: REFRAME, terms: ['cadrage'],
  cards: [
    { head: 'Un chiffre, deux côtés', label: 'la proportion', fr: src(E(2107)).fr, sub: rsOf(E(2107)),
      body: 'Un sur trois venu d’ailleurs, deux sur trois de la région : la même proportion, vue de l’autre bord. EN: one proportion, two sides.' },
    { head: 'La base', label: 'sur combien', fr: src(E(2112)).fr, sub: rsOf(E(2112)),
      body: 'Trois fois plus, mais de douze à trente-huit, pour quarante-deux mille entrées. EN: a big percentage on a small base.' },
    { head: 'La comparaison choisie', label: 'avec quoi', fr: src(E(2118)).fr, sub: rsOf(E(2118)),
      body: '« Progresse de 5 % » ou « ne progresse plus que de 5 % » : tout dépend du point de comparaison choisi. EN: the chosen comparison steers the reading.' },
    { head: 'La photo et sa légende', label: 'le moment', fr: src(E(2113)).fr, sub: rsOf(E(2113)),
      body: 'Samedi soir ou dimanche matin, la foule ou les gobelets : chaque photo choisit son moment, chaque légende sa lecture. EN: each photo picks its moment.' },
  ],
};

const A9_LIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-lire', layer: 'core', size: 'lg',
  title: 'Le même chiffre, deux phrases', frSub: 'De nouveaux chiffres, la même méthode',
  groups: [
    grp('Une enquête sur la ligne 7', [
      free('Seulement 8 % des usagers se disent satisfaits du détour.', 'Only 8% of passengers say they are satisfied with the detour.', 'pour souligner le peu'),
      free('Près d’un usager sur dix se dit satisfait du détour.', 'Nearly one passenger in ten says they are satisfied with the detour.', 'pour adoucir'),
    ], chk('Ces deux phrases...', ['se contredisent', 'donnent presque le même chiffre, avec deux effets'], 1,
      '« Seulement » réduit ; « près de » arrondit vers le haut. EN: only shrinks, nearly rounds up.')),
    grp('Par rapport à quoi', [
      it(E(2109), 'le triplement'),
      it(E(2110), 'la base'),
      it(E(2116), 'la question'),
    ], chk('Pour juger « les plaintes ont triplé », tu demandes...', ['par rapport à quoi, et sur combien d’entrées', 'qui a écrit l’article'], 0,
      'Un chiffre ne parle jamais seul. EN: a figure never speaks alone.')),
    ctl('La légende', 'Photo d’un riverain devant des gobelets, dimanche matin. Elle montre...', ['tout le festival', 'un moment vrai, choisi parmi d’autres'], 1,
      'Vraie, et choisie : c’est le cadrage. EN: true, and chosen.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre chiffres mal lus',
  errors: [
    { wrong: 'Les deux journaux donnent des chiffres contradictoires.', right: 'Les deux journaux partagent les chiffres clés, présentés autrement.',
      why: 'Normal : « un sur trois » et « deux sur trois » sonnent comme une contradiction. C’est la même proportion. EN: the same proportion.' },
    { wrong: 'Le festival est trois fois plus bruyant.', right: 'Les plaintes ont triplé, de douze à trente-huit, pour quarante-deux mille entrées.',
      why: 'Le triplement est réel, sur une petite base. EN: real, on a small base.' },
    { wrong: 'La subvention ne coûte presque rien.', right: 'La subvention représente 6 % du budget du festival et a augmenté de 15 % en deux ans.',
      why: 'Chaque journal donne une moitié du tableau. EN: each paper gives half the picture.' },
    { wrong: 'La photo du Courrier prouve que tout s’est bien passé.', right: 'La photo du Courrier montre la foule du samedi soir ; celle de L’Hebdo, les déchets du dimanche matin.',
      why: 'Deux moments vrais, deux cadrages. EN: two true moments, two frames.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage'],
};

const A9_COMPARE = pourTaComparaison('a9-comparer', 'Les chiffres et les photos de chaque texte', [
  grp('Deux phrases sur les chiffres', [
    free('Le Courrier donne de bons chiffres et L’Hebdo de mauvais chiffres.', 'Le Courrier gives good figures and L’Hebdo bad ones.', 'faux : ce sont les mêmes'),
    free('Les deux journaux partent des mêmes chiffres, mais le Courrier rapporte les plaintes aux entrées quand L’Hebdo souligne leur triplement.', 'Both papers start from the same figures, but Le Courrier sets complaints against admissions while L’Hebdo stresses that they tripled.', 'la même base, deux lectures'),
  ], chk('Laquelle est juste ?', ['la première', 'la seconde'], 1,
    'Les chiffres sont communs ; la base et la comparaison changent. EN: shared figures, different bases.')),
  grp('Pour les textes du pont', [
    it(E(2154), 'le reportage'),
    free('L’éditorial avance un détour de vingt minutes, sans dire d’où vient ce chiffre.', 'The editorial claims a twenty-minute detour without saying where the figure comes from.', 'l’éditorial'),
  ], chk('Que montrent ces deux phrases ?', ['que chaque texte choisit le chiffre qui sert son récit', 'que les deux textes sont faux'], 0,
    'Quatre mille vélos d’un côté, vingt minutes de l’autre. EN: each picks its figure.')),
], ['cadrage']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La base', '« Les plaintes ont triplé. » Tu demandes d’abord...', ['par rapport à quoi', 'qui a pris la photo'], 0,
    'De combien à combien, sur combien. EN: from what, to what, out of what.'),
  ctl('La proportion', '« Un sur trois » et « deux sur trois »...', ['peuvent dire la même chose de deux côtés', 'se contredisent toujours'], 0,
    'Le même partage, vu de l’autre bord. EN: one split, two sides.'),
  ctl('La légende', 'Une légende de photo...', ['oriente la lecture de l’image', 'ne change rien'], 0,
    'Elle dit quoi regarder. EN: it says what to look at.'),
], ['cadrage']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Chiffres et légendes',
    opener: {
      line: 'Les mêmes chiffres font un succès dans un journal et une facture dans l’autre : ici tu lis la base, la comparaison et la photo. EN: The same figures make a success in one paper and a bill in the other: here you read the base, the comparison and the photo.',
      imageRef: 'lessons/analyse-presse/act09.jpg',
    },
    sections: [],
    milestone: 'Tu demandes à chaque chiffre sa base et sa comparaison, et à chaque photo son moment. EN: You ask every figure for its base and comparison, and every photo for its moment.',
    estScreens: 34, restPoints: ['a9-regles', 'a9-erreurs'],
  },
  sections: [A9_CHIFFRES, A9_REGLES, A9_LIRE, A9_ERREURS, A9_COMPARE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LES MOTS QUI PÈSENT
 *
 *  TEXT: an article on a riverside project whose judgements sit in loaded
 *  words. MOVE: loaded pairs (réaménagement / bétonnage, maintenir /
 *  s'entêter), quantity words (une poignée, pas moins de, à peine), and the
 *  test: swap in a neutral word and see what disappears.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ARTICLE: Sec<'reading'> = {
  type: 'reading', id: 'a10-article', layer: 'core', questionsInModal: true,
  title: 'Les berges du canal', frSub: 'Un article qui juge par ses mots',
  text: MOTS_TEXT,
  glossary: [
    { word: 'halage', en: 'towing (chemin de halage: towpath)', note: 'Le chemin de halage longe un canal.' },
  ],
  questions: [
    { q: 'Devine le sens : « ce qu’elle appelle pudiquement un réaménagement ». Que veut dire « pudiquement » ?', a: 'Avec un mot doux, pour ne pas choquer. Le journal suggère que « réaménagement » cache quelque chose.' },
    { q: 'Relève trois mots qui jugent au lieu de décrire.', a: '« bétonnage », « envahi », « s’entête », « saccage », « une poignée », « donne le vertige », « se retranche ».' },
    { q: 'Les deux camps sont-ils traités de la même façon ?', a: 'Non : les défenseurs sont « une poignée », cités en trois mots ; l’opposant a une longue citation et un nom.' },
    { q: '« pas moins de trois cents habitants » : que fait « pas moins de » ?', a: 'Il grossit le chiffre ; « à peine trois cents » l’aurait réduit.' },
    { q: 'Récris en mots neutres : « Les engins ont envahi les berges dès lundi. »', a: 'Les travaux ont commencé lundi sur les berges.' },
    { q: 'Quels faits restent vérifiables sous les jugements ?', a: 'Le chantier a commencé lundi, une pétition existe, le coût annoncé est de 4,2 millions d’euros, des arbres ont été abattus.' },
  ],
  audio: REC('rec-c1-24-mots'), say: REFRAME, terms: ['motcharge'],
};

const A10_PAIRES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-paires', layer: 'core', sheetId: 'sheet-mots',
  title: 'Six paires, un même fait',
  cols: ['Un mot', 'Un autre mot', 'Ce qu’il ajoute'],
  rows: [
    { cells: ['le réaménagement', 'le bétonnage', 'le dommage'], say: src(E(2132)).fr,
      detail: { title: 'Réaménagement ou bétonnage', body: 'Le même chantier : l’un dit le projet, l’autre le dégât. Et « réaménagement » n’est pas neutre non plus : c’est le mot de la mairie. EN: neither is neutral.', say: src(E(2121)).fr } },
    { cells: ['maintenir', 's’entêter', 'l’obstination'], say: src(E(2122)).fr,
      detail: { title: 'Maintenir ou s’entêter', body: 'Garder un projet malgré une opposition : décision ferme, ou entêtement. EN: firmness or stubbornness.', say: src(E(2123)).fr } },
    { cells: ['commencer', 'envahir', 'l’agression'], say: src(E(2129)).fr,
      detail: { title: 'Commencer ou envahir', body: 'Des engins qui « envahissent » : le chantier devient une attaque. EN: the works become an invasion.', say: src(E(2130)).fr } },
    { cells: ['plusieurs dizaines', 'une poignée', 'le petit nombre'], say: src(E(2124)).fr,
      detail: { title: 'Une poignée', body: 'Le nombre n’est pas donné ; le mot réduit le camp. EN: the number is not given; the word shrinks the side.', say: src(E(2125)).fr } },
    { cells: ['la piétonnisation', 'la fermeture', 'la perte'], say: src(E(2146)).fr,
      detail: { title: 'Piétonnisation ou fermeture', body: 'Le pont est ouvert aux piétons, ou fermé aux voitures : tout dépend de qui on regarde. EN: open to some, closed to others.', say: 'La fermeture du pont des Saules aux voitures.' } },
    { cells: ['des riverains opposés', 'des riverains en colère', 'l’émotion'], say: 'Les riverains, eux, parlent de saccage.',
      detail: { title: 'Opposés ou en colère', body: 'Un camp « en colère » paraît blessé, ou excessif, selon le lecteur ; « opposé » dit seulement sa position. EN: anger adds emotion.', say: 'Plusieurs riverains sont opposés au projet.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['motcharge'],
};

const A10_NEUTRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-neutre', layer: 'core', size: 'lg',
  title: 'Le test du mot neutre', frSub: 'Remplace, et regarde ce qui reste',
  groups: [
    grp('Récris sans juger', [
      it(E(2129), 'chargée'),
      it(E(2130), 'neutre'),
      it(E(2131), 'la règle'),
    ], chk('Qu’est-ce qui disparaît quand « envahi » devient « commencé » ?', ['le fait', 'le jugement'], 1,
      'Le fait reste : les travaux ont commencé. Le jugement part avec le mot. EN: the fact stays, the judgement goes.')),
    grp('Le même nombre, deux camps', [
      it(E(2126), 'grossir'),
      it(E(2127), 'réduire'),
      it(E(2128), 'la règle'),
    ], chk('« Pas moins de trois cents » et « à peine trois cents »...', ['donnent deux nombres différents', 'donnent le même nombre et deux jugements'], 1,
      'Le nombre ne change pas ; le petit mot choisit le camp. EN: the small word picks the side.')),
    ctl('Les guillemets', 'Le journal écrit : ce qu’elle appelle pudiquement un « réaménagement ». Ici, les guillemets...', ['citent un expert', 'reprennent le mot de la mairie pour s’en distancier'], 1,
      'Le journal cite le mot pour ne pas le reprendre à son compte. EN: quoted to keep distance.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['motcharge'],
};

const A10_DOSAGE: Sec<'examples'> = {
  type: 'examples', id: 'a10-dosage', layer: 'core', sheetId: 'sheet-mots',
  title: 'Les petits mots qui dosent',
  examples: [
    ex(E(2124), 'réduit un camp sans donner de nombre'),
    ex(E(2125), 'le même camp, sans le réduire'),
    ex(E(2126), 'grossit le nombre'),
    ex(E(2127), 'réduit le même nombre'),
    ex('fr.b2.litterature.071', 'ce qu’un mot suggère en plus de ce qu’il dit'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['motcharge'],
};

const A10_COMPARE = pourTaComparaison('a10-comparer', 'Deux mots chargés, analysés', [
  grp('Deux phrases sur un mot', [
    free('L’éditorial utilise des mots forts.', 'The editorial uses strong words.', 'lesquels ?'),
    free('En parlant d’« une poignée de cyclistes », l’éditorial réduit les partisans du projet à une minorité négligeable.', 'By speaking of "a handful of cyclists", the editorial reduces the project’s supporters to a negligible minority.', 'le mot, cité, et son effet'),
  ], chk('Laquelle analyse vraiment ?', ['la première', 'la seconde'], 1,
    'Cite le mot, puis dis ce qu’il ajoute au fait. EN: quote the word, then say what it adds.')),
  grp('Une paire dans ta comparaison', [
    it(E(2146), 'une paire'),
    it(E(2151), 'une image contre une autre'),
  ], chk('Pour analyser une paire, tu écris...', ['quel mot emploie chaque journal, et ce que chacun suggère', 'quel mot est le bon'], 0,
    'Aucun mot n’est « le bon » : chacun cadre. EN: neither word is the right one.')),
], ['motcharge', 'cadrage']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le test', 'Pour repérer un mot chargé, tu...', ['le remplaces par un mot neutre et regardes ce qui disparaît', 'cherches s’il est long'], 0,
    'Ce qui disparaît, c’est le jugement. EN: what disappears is the judgement.'),
  ctl('Une poignée', '« Une poignée de défenseurs »...', ['donne un nombre précis', 'réduit le camp sans donner de nombre'], 1,
    'Le mot dose à la place du chiffre. EN: the word does the counting.'),
  ctl('Le mot officiel', '« Réaménagement », le mot de la mairie, est-il neutre ?', ['oui, toujours', 'non : il présente le projet sous son meilleur jour'], 1,
    'Le mot d’un camp n’est pas neutre parce qu’il est officiel. EN: official is not neutral.'),
], ['motcharge']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Les mots qui pèsent',
    opener: {
      line: 'Réaménagement ou bétonnage, le même chantier : ici tu repères le mot qui juge à ta place. EN: Redevelopment or concreting over, the same works: here you spot the word that judges for you.',
      imageRef: 'lessons/analyse-presse/act10.jpg',
    },
    sections: [],
    milestone: 'Tu repères un mot chargé, tu le cites et tu dis ce qu’il ajoute au fait. EN: You can spot a loaded word, quote it and say what it adds to the fact.',
    estScreens: 32, restPoints: ['a10-paires', 'a10-dosage'],
  },
  sections: [A10_ARTICLE, A10_PAIRES, A10_NEUTRE, A10_DOSAGE, A10_COMPARE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — DEUX TRAITEMENTS, UN MÊME SOIR
 *
 *  TEXT: two papers on the same public meeting (a midnight finish for the
 *  festival). MOVE: the comparison method, from shared facts to choices,
 *  ending on « neither lies, each chooses ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_DEUX: Sec<'reading'> = {
  type: 'reading', id: 'a11-deux', layer: 'core', questionsInModal: true,
  title: 'La réunion de jeudi', frSub: 'Deux journaux, une même soirée',
  text: DEUX_TEXT,
  glossary: [
    { word: 'comble', en: 'packed full', note: 'Pleine, sans une place libre.' },
  ],
  questions: [
    { q: 'Devine le sens : « le festival a dû concéder la fin des concerts à minuit ». Que veut dire « concéder » ?', a: 'Accorder à contrecœur, céder sur un point.' },
    { q: 'Quels faits les deux textes partagent-ils ?', a: 'La réunion de jeudi, la fin des concerts à minuit, le nettoyage renforcé promis par la mairie.' },
    { q: 'Qui a proposé de finir à minuit, selon chaque texte ?', a: 'Dans le texte A, la directrice l’a proposé. Dans le texte B, le festival « a dû concéder », sous la pression des habitants.' },
    { q: 'Que dit chaque titre de la même décision ?', a: 'A : un engagement du festival. B : une victoire des riverains, avec « enfin » et « couvre-feu ».' },
    { q: 'Que laisse chaque texte hors champ ?', a: 'A : la pétition, la demande de limites de volume, les riverains en colère. B : que l’idée venait du festival, les capteurs promis, le rapport d’une plainte pour mille entrées, la riveraine rassurée.' },
    { q: 'Lequel des deux ment ?', a: 'Aucun : les faits rapportés sont compatibles. Chacun choisit son angle, ses voix, ses chiffres.' },
  ],
  audio: REC('rec-c1-24-deux'), say: REFRAME, terms: ['cadrage', 'horschamp'],
};

const A11_METHODE: Sec<'steps'> = {
  type: 'steps', id: 'a11-methode', layer: 'core', sheetId: 'sheet-comparer',
  title: 'Six étapes pour comparer deux traitements',
  steps: [
    `1. Pars des faits communs, comme dans ${CRITIQUE_REF} : la décision, la date, le chiffre. EN: start from the shared facts.`,
    '2. Nomme le genre et la place de chaque texte : la une ou la page 5, article ou éditorial. EN: genre and placement.',
    '3. Compare les titres, les chapôs, les photos et leurs légendes. EN: headlines, standfirsts, photos and captions.',
    '4. Compte les voix : qui parle en premier, qui a le dernier mot, qui manque. EN: count the voices.',
    '5. Relève les chiffres et les mots chargés de chaque côté. EN: figures and loaded words on each side.',
    '6. Dis ce que chacun laisse hors champ, puis conclus sans accuser. EN: what each leaves out; conclude without accusing.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage', 'horschamp'],
};

const A11_GRILLE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-grille', layer: 'core', size: 'lg',
  title: 'Texte A ou texte B', frSub: 'Range chaque choix',
  groups: [
    grp('Deux titres, deux mots', [
      it(E(2141), 'le titre de A'),
      it(E(2142), 'le titre de B'),
      it(E(2136), 'ce qui les oppose'),
    ], chk('« Le festival a dû concéder » se trouve dans...', ['le texte A', 'le texte B'], 1,
      'B fait de la décision une victoire arrachée. EN: B frames it as a victory won.')),
    grp('Ce que chacun tait', [
      it(E(2138), 'le silence de A'),
      it(E(2139), 'le silence de B'),
      it(E(2144), 'la règle'),
    ], chk('Le Courrier rappelle « moins d’une plainte pour mille entrées ». L’Hebdo, lui...', ['ne parle pas des plaintes', 'souligne que les plaintes ont triplé'], 1,
      'Même donnée, autre base : chacun garde le calcul qui sert son récit. EN: same data, other base.')),
    ctl('La conclusion', 'Lequel des deux textes ment ?', ['le texte A', 'le texte B', 'aucun : chacun choisit'], 2,
      'Les faits sont compatibles ; les cadres diffèrent. EN: compatible facts, different frames.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage', 'horschamp'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a11-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre comparaisons qui perdent des points',
  errors: [
    { wrong: 'Le texte A dit ceci. Le texte B dit cela.', right: 'Les deux textes rapportent la même décision ; A en fait un engagement, B une victoire.',
      why: 'Normal : résumer l’un puis l’autre semble complet. Comparer, c’est mettre face à face. EN: compare point by point.' },
    { wrong: 'L’Hebdo ment sur le festival.', right: 'L’Hebdo laisse hors champ que la proposition venait du festival.',
      why: 'Une omission n’est pas un mensonge : nomme-la précisément. EN: name the omission, do not accuse.' },
    { wrong: 'Je pense que le festival devrait finir à onze heures.', right: 'Le texte B relaie une demande de limites de volume que le texte A ne mentionne pas.',
      why: 'On te demande d’analyser les textes, pas l’événement. EN: analyse the texts, not the event.' },
    { wrong: 'Les deux textes sont différents.', right: 'Les deux textes diffèrent par leur place, leurs voix et leurs mots.',
      why: 'Dis en quoi : chaque différence est une preuve. EN: say how they differ.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage', 'horschamp'],
};

const A11_COMPARE = pourTaComparaison('a11-comparer', 'Ta conclusion', [
  grp('Deux conclusions', [
    free('Le texte B est plus juste que le texte A.', 'Text B is fairer than text A.', 'un jugement sans preuve'),
    it(E(2137), 'la conclusion juste'),
  ], chk('Laquelle conclut une comparaison de C1 ?', ['la première', 'la seconde'], 1,
    'Ta conclusion nomme les choix, sans désigner un menteur. EN: name the choices, not a liar.')),
  grp('Point par point', [
    it(E(2133), 'mis en avant'),
    it(E(2135), 'la place'),
  ], chk('Ces phrases comparent...', ['point par point, les deux textes à la fois', 'un texte après l’autre'], 0,
    'Chaque phrase met A et B face à face. EN: each sentence sets A against B.')),
], ['cadrage', 'horschamp']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le départ', 'Une comparaison commence par...', ['les faits que les deux textes partagent', 'ton avis sur l’événement'], 0,
    'Le terrain commun d’abord, les choix ensuite. EN: common ground first.'),
  ctl('La forme', 'Une bonne comparaison avance...', ['point par point', 'un texte après l’autre'], 0,
    'Le genre, puis les voix, puis les mots, chaque fois A et B. EN: point by point.'),
  ctl('La fin', 'Ta conclusion dit...', ['lequel des deux ment', 'ce que chacun a choisi et laissé hors champ'], 1,
    'Aucun ne ment, chacun cadre. EN: neither lies, each frames.'),
], ['cadrage', 'horschamp']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Deux traitements',
    opener: {
      line: 'Une même réunion devient un engagement dans un journal et une victoire dans l’autre : ici tu compares point par point. EN: One meeting becomes a pledge in one paper and a victory in the other: here you compare point by point.',
      imageRef: 'lessons/analyse-presse/act11.jpg',
    },
    sections: [],
    milestone: 'Tu compares deux traitements d’un même fait, des faits communs jusqu’au hors-champ. EN: You can compare two treatments of one event, from shared facts to what each leaves out.',
    estScreens: 34, restPoints: ['a11-methode', 'a11-erreurs'],
  },
  sections: [A11_DEUX, A11_METHODE, A11_GRILLE, A11_ERREURS, A11_COMPARE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA COMPARAISON
 *
 *  The production act. The two task texts (a report and an editorial on
 *  the bridge's first car-free Sunday) are read with every move of the
 *  lesson, planned, rehearsed out loud with Margaux, then compared in
 *  writing. The brief prints both texts again (no `source` field on
 *  `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_TEXTES: Sec<'reading'> = {
  type: 'reading', id: 'a12-textes', layer: 'core', questionsInModal: true,
  title: 'Les textes de ta mission', frSub: 'Le pont des Saules, deux journaux',
  text: `${PONT_A_TEXT} ${PONT_B_TEXT}`,
  glossary: [
    { word: 'reports de trafic', en: 'traffic displaced onto other roads', note: 'Les voitures qui prennent d’autres rues quand une voie se ferme.' },
  ],
  questions: [
    { q: 'Devine le sens : « s’émerveille Camille ». Que veut dire « s’émerveiller » ?', a: 'Dire son admiration, sa joie devant quelque chose de beau ou d’étonnant.' },
    { q: 'Quels faits les deux textes partagent-ils ?', a: 'Le même dimanche : le premier jour où le pont est réservé aux piétons, aux vélos et au bus.' },
    { q: 'Quel est le genre de chaque texte ? Comment le sais-tu ?', a: 'A : un reportage signé, au présent, avec des scènes et des voix. B : un éditorial, rubrique « Éditorial », le « nous » du journal, des demandes.' },
    { q: 'Qui parle dans chaque texte ?', a: 'A : une mère, un fleuriste, l’adjointe aux mobilités, tous satisfaits. B : personne n’est cité ; le journal parle pour « ceux que la municipalité a choisi d’oublier ».' },
    { q: 'Relève un mot chargé de chaque côté.', a: 'A : « piétonnisation », « appartient aux piétons ». B : « fermeture », « frontière », « une poignée de cyclistes », « bouchons ».' },
    { q: 'Que laisse chaque texte hors champ ?', a: 'A : les automobilistes détournés, les commerçants inquiets, la circulation. B : le vote d’avril, les quatre mille passages de vélos, le fleuriste ravi. Le bus, lui, est cité, mais pour être écarté.' },
  ],
  audio: REC('rec-c1-24-pont'), say: REFRAME, terms: ['genre', 'cadrage', 'horschamp'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-comparer',
  title: 'Cinq étapes pour ta comparaison',
  steps: [
    '1. Introduis : le même événement, deux journaux, deux genres. EN: one event, two papers, two genres.',
    '2. Compare le cadrage : la place, le titre, les voix, les chiffres, la photo. EN: compare the framing.',
    '3. Analyse deux mots chargés, chacun avec une courte citation. EN: analyse two loaded words, quoted.',
    '4. Dis ce que chaque texte laisse hors champ, sans accuser. EN: what each leaves out.',
    '5. Conclus en une ou deux phrases : aucun ne ment, chacun choisit. EN: conclude fairly.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage', 'horschamp'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu compareras deux traitements',
  cases: [
    { situation: 'Une revue de presse pour ton équipe', fr: src(E(2153)).fr, en: src(E(2153)).en },
    { situation: 'Un débat en ligne sur un projet de ta ville', fr: src(E(2152)).fr, en: src(E(2152)).en },
    { situation: 'À l’examen, deux documents sur un même sujet', fr: src(E(2140)).fr, en: src(E(2140)).en },
    { situation: 'Un ami te dit qu’un journal « ment »', fr: src(E(2137)).fr, en: src(E(2137)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage', 'horschamp'],
};

/** USE IT, out loud. Every French string here uses the typographic ’. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Margaux veut un seul article',
  setting: 'Mercredi matin, à l’office de tourisme. Margaux prépare la revue de presse pour le maire et veut n’y mettre que le reportage du Courrier sur le pont des Saules. Tu as lu les deux textes.',
  turns: [
    {
      ai: 'Pour la revue de presse, je mets seulement le reportage du Courrier sur le pont. Il est très joli.', en: 'For the press review, I am only putting in Le Courrier’s report on the bridge. It is very nice.',
      user: src(E(2145)).fr, userEn: 'Le Courrier chooses the report; L’Hebdo, the editorial. (Naming the two genres first.)',
      alts: [
        { fr: 'Joli, oui, mais c’est un reportage ; L’Hebdo a publié un éditorial sur le même dimanche.', en: 'Nice, yes, but it is a report; L’Hebdo published an editorial on the same Sunday.' },
        { fr: 'Le maire aura un reportage d’un côté et l’avis d’un journal de l’autre : il faut les deux.', en: 'The mayor will have a report on one side and a paper’s view on the other: he needs both.' },
      ],
    },
    {
      ai: 'Mais un reportage, c’est plus sérieux qu’un éditorial, non ?', en: 'But a report is more serious than an editorial, isn’t it?',
      user: 'Ce n’est pas plus sérieux, c’est un autre genre : l’un montre, l’autre juge.', userEn: 'It is not more serious, it is another genre: one shows, the other judges. (Genre, not quality.)',
      alts: [
        { fr: 'Le reportage a l’air plus neutre parce qu’il montre, mais il choisit aussi ce qu’il montre.', en: 'The report looks more neutral because it shows, but it also chooses what it shows.' },
        { fr: src(E(2065)).fr, en: src(E(2065)).en },
      ],
    },
    {
      ai: 'Les gens avaient l’air tellement contents, sur les photos.', en: 'People looked so happy in the photos.',
      user: src(E(2147)).fr, userEn: 'The report gives the floor to families and cyclists. (The chosen voices.)',
      alts: [
        { fr: 'La photo montre des enfants à vélo ; elle ne montre pas le quai Saint-Clair bouché.', en: 'The photo shows children on bikes; it does not show the jammed quai Saint-Clair.' },
        { fr: src(E(2154)).fr, en: src(E(2154)).en },
      ],
    },
    {
      ai: 'Et L’Hebdo exagère un peu, avec sa ville coupée en deux.', en: 'And L’Hebdo exaggerates a bit, with its town cut in two.',
      user: src(E(2151)).fr, userEn: 'The editorial sees a border where the report shows a party. (Two images of one fact.)',
      alts: [
        { fr: 'Oui, « une poignée de cyclistes » réduit les partisans du projet à presque rien.', en: 'Yes, "a handful of cyclists" shrinks the project’s supporters to almost nothing.' },
        { fr: src(E(2146)).fr, en: src(E(2146)).en },
      ],
    },
    {
      ai: 'Donc il y en a un des deux qui ment.', en: 'So one of the two is lying.',
      user: src(E(2137)).fr, userEn: 'Neither is lying: each one chooses. (The conclusion, fair to both.)',
      alts: [
        { fr: src(E(2152)).fr, en: src(E(2152)).en },
        { fr: 'Les faits se tiennent des deux côtés ; ce sont les cadres qui s’opposent.', en: 'The facts hold up on both sides; it is the frames that clash.' },
      ],
    },
    {
      ai: 'Bon. Qu’est-ce que je mets, alors ?', en: 'Right. So what do I put in?',
      user: 'Mets les deux, avec une ligne sur ce que chacun laisse hors champ.', userEn: 'Put both in, with a line on what each leaves out. (The hors-champ, named.)',
      alts: [
        { fr: src(E(2155)).fr, en: src(E(2155)).en },
        { fr: 'Les deux côte à côte : le maire lira le pont depuis les deux rives.', en: 'Both side by side: the mayor will read the bridge from both banks.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'sources', 'horschamp'],
};

/** THE GRADED TASK: a C1 written comparison of two treatments of one
 *  event, graded on a grid that mirrors the C1 reading (genre, framing,
 *  loaded words, omissions) and the C1 writing criteria (structure,
 *  precision and nuance of vocabulary). */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Compare deux traitements', frSub: 'Mission écrite',
  brief: `Pour la revue de presse de l’office de tourisme, Margaux te demande une analyse qui compare la façon dont deux journaux ont traité le premier dimanche du pont des Saules réservé aux piétons, aux vélos et au bus. Voici les deux textes. ${PONT_A_TEXT} ${PONT_B_TEXT}`,
  briefEn: 'For the tourist office’s press review, Margaux asks you for an analysis comparing how two papers covered the first Sunday of the pont des Saules reserved for pedestrians, bikes and buses. Both texts are printed here so you can write with them in front of you.',
  produce: 'Écris une comparaison de 250 à 400 mots : nomme le genre de chaque texte, montre comment chacun cadre l’événement (place, voix, chiffres, photo), analyse au moins deux mots chargés avec une courte citation, et dis ce que chacun laisse hors champ.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'genre', label: 'Les deux genres', maxPoints: 3, descriptors: [
        '3 : Les deux genres sont nommés juste (un reportage signé, un éditorial du journal) et leur effet est expliqué : l’un montre, l’autre juge.',
        '2 : Les deux genres sont nommés, sans dire ce que cela change.',
        '1 : Un seul genre est nommé, ou un genre est faux (l’éditorial pris pour un simple article).',
      ] },
      { key: 'cadrage', label: 'Le cadrage comparé', maxPoints: 4, descriptors: [
        '4 : Au moins trois choix de cadrage comparés, chacun prouvé par le texte : la place, les voix (qui parle, qui manque), les chiffres, la photo et sa légende.',
        '3 : Deux choix de cadrage bien comparés et prouvés.',
        '2 : Des différences notées texte par texte, sans vraie comparaison.',
        '1 : Aucun choix de cadrage, ou un simple résumé des deux textes.',
      ] },
      { key: 'mots', label: 'Deux mots chargés', maxPoints: 3, descriptors: [
        '3 : Au moins deux mots chargés cités entre guillemets, chacun avec ce qu’il ajoute au fait (piétonnisation ou fermeture, fête ou frontière, « une poignée de cyclistes »).',
        '2 : Deux mots cités dont un seul est analysé, ou un seul mot très bien analysé.',
        '1 : Aucun mot chargé, ou des mots relevés sans analyse.',
      ] },
      { key: 'horschamp', label: 'Ce que chacun laisse hors champ', maxPoints: 3, descriptors: [
        '3 : Pour chaque texte, au moins une omission précise, dite sans accuser (les automobilistes détournés ; le vote d’avril et les quatre mille passages de vélos).',
        '2 : Une omission pour un seul texte, ou des omissions vagues.',
        '1 : Rien sur ce que les textes laissent de côté, ou une accusation de mensonge.',
      ] },
      { key: 'structure', label: 'Une comparaison construite', maxPoints: 3, descriptors: [
        '3 : Une comparaison point par point, avec des liens qui opposent et nuancent (alors que, tandis que, en revanche, de même) et une conclusion juste envers les deux textes.',
        '2 : Les deux textes traités l’un après l’autre, avec quelques liens.',
        '1 : Des remarques juxtaposées, sans fil ni conclusion.',
      ] },
      { key: 'langue', label: 'Une langue précise et nuancée', maxPoints: 4, descriptors: [
        '4 : Un vocabulaire de l’analyse précis et nuancé (cadrer, mettre en avant, reléguer, passer sous silence, relayer), des phrases complexes maîtrisées, presque aucune erreur.',
        '3 : Un vocabulaire précis mais peu varié, quelques erreurs qui ne gênent pas.',
        '2 : Un vocabulaire général (dit, montre, parle) et des erreurs qui gênent parfois.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Les deux textes rapportent...',
    'Le premier est un reportage ; le second,',
    'Alors que le reportage donne la parole à..., l’éditorial...',
    'Le choix du mot « ... » suggère que...',
    'De même,',
    'Le reportage passe sous silence...',
    'En revanche, l’éditorial ne dit rien de...',
    'En somme,',
  ],
  modelAnswer: 'Les deux textes rapportent le même événement, le premier dimanche où le pont des Saules est réservé aux piétons, aux vélos et au bus, mais ils ne le cadrent pas du tout de la même façon. Le Courrier choisit le reportage, à la une : la journaliste était sur place, raconte au présent et fait voir une scène de fête, entre enfants à vélo, accordéoniste et fanfare. L’Hebdo, lui, publie un éditorial, c’est-à-dire la position du journal : il ne décrit pas, il juge et propose. Le choix des voix confirme ces angles. Le reportage ne donne la parole qu’à des personnes satisfaites, une mère de la rive est, un fleuriste et l’adjointe aux mobilités ; l’éditorial ne cite personne et parle au nom de « ceux que la municipalité a choisi d’oublier ». Les chiffres suivent la même logique : quatre mille passages de vélos d’un côté, un détour de vingt minutes, dont on ignore la source, de l’autre. Les mots, surtout, révèlent le cadrage. Le Courrier reprend « piétonnisation », le terme de la mairie, quand L’Hebdo écrit « fermeture » ; et « une poignée de cyclistes enthousiastes » réduit d’emblée les partisans du projet à une minorité négligeable, alors que le reportage décrit un pont qui « appartient aux piétons ». Enfin, chacun laisse hors champ ce qui dérange son récit. Le reportage ne dit rien des automobilistes détournés, des commerçants inquiets de la rive est ni des reports de trafic ; l’éditorial passe sous silence le vote du conseil en avril, les quatre mille passages de vélos et le fleuriste ravi, et n’évoque le bus que pour l’écarter. Aucun des deux ne ment, mais aucun ne suffit : il faut les lire ensemble pour se faire une idée juste de ce premier dimanche sans voitures.',
  modelAnswerEn: 'Both texts report the same event, the first Sunday on which the pont des Saules is reserved for pedestrians, bikes and buses, but they frame it in completely different ways. Le Courrier chooses a report, on its front page: the journalist was there, writes in the present and shows a festive scene, with children on bikes, an accordion player and a brass band. L’Hebdo publishes an editorial, that is, the paper’s own position: it does not describe, it judges and proposes. The choice of voices confirms these angles. The report only lets satisfied people speak, a mother from the east bank, a florist and the deputy mayor for transport; the editorial quotes no one and speaks for "those the council chose to forget". The figures follow the same logic: four thousand bike crossings on one side, a twenty-minute detour of unknown source on the other. Above all, the words reveal the framing. Le Courrier uses "piétonnisation", the town hall’s term, while L’Hebdo writes "fermeture"; and "a handful of enthusiastic cyclists" reduces the project’s supporters at once to a negligible minority, whereas the report describes a bridge that "belongs to pedestrians". Finally, each leaves out whatever disturbs its story. The report says nothing about diverted drivers, worried shopkeepers on the east bank or displaced traffic; the editorial is silent on the council vote in April, the four thousand bike crossings and the delighted florist, and mentions the bus only to dismiss it. Neither lies, but neither is enough: they must be read together to get a fair idea of that first car-free Sunday.',
  watchFor: [
    { pattern: 'The two genres not named, or the editorial treated as an ordinary news article.', criterion: 'genre', feedback: 'Nomme les genres : un reportage d’un côté, un éditorial du journal de l’autre, et dis ce que cela change.', ref: 'a5-voix' },
    { pattern: 'The report treated as neutral or « more true » because it shows rather than judges.', criterion: 'genre', feedback: 'Le reportage montre, mais il choisit ce qu’il montre : dis-le.', ref: 'a4-comparer' },
    { pattern: 'The two texts summarised one after the other with no comparison point by point.', criterion: 'structure', feedback: 'Mets les deux textes face à face à chaque phrase : alors que, tandis que, en revanche.', ref: 'a11-erreurs' },
    { pattern: 'Voices not compared: who speaks in the report, that the editorial quotes no one.', criterion: 'cadrage', feedback: 'Compte les voix : qui parle dans le reportage, et qui dans l’éditorial ?', ref: 'a8-voix' },
    { pattern: 'Figures compared as true versus false instead of as chosen (4 000 bike crossings, a twenty-minute detour with no source).', criterion: 'cadrage', feedback: 'Chaque texte choisit son chiffre ; dis lequel, et ce qu’il sert.', ref: 'a9-comparer' },
    { pattern: 'Photo and caption ignored, or headlines and placement (front page, editorial slot) not used.', criterion: 'cadrage', feedback: 'Regarde aussi la photo, sa légende, le titre et la place de chaque texte.', ref: 'a3-parties' },
    { pattern: 'Loaded words named without quotation marks or without saying what they add (piétonnisation / fermeture, fête / frontière, une poignée).', criterion: 'mots', feedback: 'Cite le mot entre guillemets, puis dis ce qu’il ajoute au fait.', ref: 'a10-comparer' },
    { pattern: 'The town hall’s word « piétonnisation » treated as the neutral one.', criterion: 'mots', feedback: '« Piétonnisation » est le mot de la mairie : il n’est pas neutre non plus.', ref: 'a10-paires' },
    { pattern: 'Omissions given for one text only, or vague (« il manque des choses »).', criterion: 'horschamp', feedback: 'Pour chaque texte, nomme une omission précise : les automobilistes, le vote d’avril, les cyclistes.', ref: 'a11-grille' },
    { pattern: 'A text accused of lying, or of manipulation, instead of an omission named.', criterion: 'horschamp', feedback: 'Une omission n’est pas un mensonge : nomme ce qui manque, sans accuser.', ref: 'a11-comparer' },
    { pattern: 'The learner’s own opinion on the bridge replacing the analysis of the texts.', criterion: 'structure', feedback: 'On te demande de comparer les textes, pas de juger le pont. Ton avis peut venir en une phrase, à la fin.', ref: 'a11-erreurs' },
    { pattern: 'The same general verbs repeated (dit, montre, parle) instead of the vocabulary of analysis.', criterion: 'langue', feedback: 'Varie : met en avant, relègue, passe sous silence, relaie, cadre.', ref: 'a12-plan' },
  ],
  graderNotes: [
    'Word count: 250 to 400, with 10% tolerance (225 to 440) before the criteria lose points for length. A title does not count.',
    'The task marks the ANALYSIS of the two texts. A learner who supports or opposes the bridge closure may score full marks if both texts are analysed fairly; a learner who only argues about the bridge scores low on « structure » and « cadrage ».',
    'Loaded words to accept (any two, quoted and analysed): piétonnisation / fermeture; fête / frontière; « appartient aux piétons » / « la ville coupée en deux »; « une poignée de cyclistes enthousiastes »; « bouchons »; « choisi d’oublier »; « s’émerveille », « n’en revient pas ». Any other well-chosen evaluative word counts if quoted and analysed.',
    'Omissions to accept (one per text at least, true of the texts as printed): the report leaves out the diverted drivers, the worried shopkeepers of the east bank and any traffic data; the editorial leaves out the council vote in April, the four thousand bike crossings and the delighted florist. The editorial DOES mention the bus (« On nous répond que le bus continue de passer »), to dismiss it: do not reward « l’éditorial ne parle pas du bus » as an omission; « il écarte l’argument du bus en une phrase » is a good framing point. « Le reportage ne parle pas des inconvénients » is too vague for full marks.',
    'Calling either text a lie, or « de la propagande », loses the point under « horschamp » it seems to earn. Saying that a text « manipule » with no textual proof counts the same.',
    'Genre: the second text is an editorial of the paper; « article d’opinion » is accepted, « tribune » is not (it is not signed by an outside author). The first is a report (« reportage »); « article » alone earns 2 under « genre ».',
    'Quotations: three to twelve words, exact, in guillemets. Accept straight or French quotation marks.',
    'C1 criteria: precision and nuance of vocabulary, and a comparison that opposes and qualifies (alors que, tandis que, certes... mais). Do not penalise a subjunctive or an indicative after « bien que » as more than a minor slip.',
    'Do not mark rhetoric-analysis terms (figures of style, persuasion techniques): they belong to other C1 lessons. Do not mark the reading of irony: lesson 20 in C1 owns it.',
    'Accept European and Québec vocabulary alike (vélo, bicyclette, bouchons, embouteillages, trafic, circulation).',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'cadrage', 'motcharge'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis ta comparaison à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-comparer',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le genre', v: 'dépêche, reportage, éditorial, billet, tribune', say: src(E(2065)).fr,
      detail: { title: 'Qui parle', body: 'Le genre dit qui parle et ce que le texte cherche à faire. EN: genre tells you who speaks.', say: src(E(2081)).fr } },
    { k: 'la forme', v: 'pyramide, chapô, attaque, chute', say: src(E(2012)).fr,
      detail: { title: 'L’ordre et les parties', body: 'L’ordre classe ; le chapô oriente ; la chute reste. EN: order ranks, the standfirst steers, the ending stays.', say: src(E(2044)).fr } },
    { k: 'les voix', v: 'qui, dans quel ordre, combien', say: src(E(2096)).fr,
      detail: { title: 'Les sources', body: 'La première voix donne le ton ; les absents comptent. EN: the first voice sets the tone.', say: src(E(2105)).fr } },
    { k: 'les chiffres', v: 'la base et la comparaison', say: src(E(2111)).fr,
      detail: { title: 'Par rapport à quoi', body: 'Même chiffre, deux effets. Et la légende oriente la photo. EN: same figure, two effects.', say: src(E(2117)).fr } },
    { k: 'les mots', v: 'le mot chargé, le petit mot qui dose', say: src(E(2128)).fr,
      detail: { title: 'Le test du mot neutre', body: 'Remplace le mot : ce qui disparaît, c’est le jugement. EN: what disappears is the judgement.', say: src(E(2131)).fr } },
    { k: 'le hors-champ', v: 'ce que chaque texte laisse dehors', say: src(E(2144)).fr,
      detail: { title: 'Comparer', body: 'Pars des faits communs, puis compare les choix. Aucun ne ment, chacun choisit. EN: shared facts, then choices.', say: src(E(2143)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'cadrage', 'horschamp'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne lis plus un article seul, tu lis un journal. Tu reconnais le genre d’un texte et qui parle à travers lui, tu lis l’ordre d’une dépêche comme une hiérarchie, tu nommes les parties d’une page et ce que chacune oriente, tu comptes les voix, tu demandes à chaque chiffre sa base, à chaque photo son moment, à chaque mot ce qu’il ajoute, et tu compares deux traitements d’un même fait. Le piège qui reste est double : croire le premier journal lu, ou décider que tous mentent. Avant l’examen, prends deux articles sur un même événement et écris, pour chacun, son genre, sa première voix, un mot chargé et une omission. EN: Before the exam, take two articles on one event and write, for each, its genre, its first voice, one loaded word and one omission.',
  stats: [
    { k: 'Le genre', v: 'qui parle, et pour quoi faire' },
    { k: 'La forme', v: 'l’ordre, le chapô, la chute' },
    { k: 'Le cadre', v: 'les voix, les chiffres, les mots' },
    { k: 'Ta comparaison', v: 'point par point, sans accuser' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 10, plus a round
 *  on the comparison (acts 11 and 12). Each round targets a distinct
 *  errorTrigger. Mostly judgement on short texts, as a workshop quiz should;
 *  `typeIn` asks for one analytical word. `fold()` strips accents,
 *  punctuation and spacing, so nothing turns on them. The authored slots
 *  are then spread by `spreadSlots()`: no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une partie de la phrase trahit le texte. Écris la phrase juste. EN: Part of the sentence betrays the text; write it correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-unes', label: 'Un événement, deux journaux', targets: ['journal-pour-evenement'],
      questions: [
        mc('Deux journaux donnent le même chiffre et des titres opposés. Tu en conclus que...', ['chacun a fait des choix de cadrage', 'l’un des deux ment forcément', 'le chiffre est faux'], 0, 'Mêmes faits, autres choix. EN: same facts, other choices.', 'a1-lecture'),
        mc('Dans le texte du Courrier, où sont les plaintes des riverains ?', ['dans le titre', 'dans la dernière phrase', 'dans la première phrase'], 1, '« Seule ombre au tableau » : en fin de texte. EN: at the end.', 'a1-lecture'),
        mc('Dans le texte de L’Hebdo, qui parle en premier ?', ['la directrice du festival', 'un riverain', 'le maire'], 1, 'Bernard Lemoine, qui vit face à la scène. EN: a resident.', 'a1-lecture'),
        mc('« Seule ombre au tableau » annonce...', ['une réserve, placée en fin de texte', 'l’information principale'], 0, 'La formule minimise ce qui suit. EN: it minimises what follows.', 'a1-lecture'),
        tI('Complète la question à poser. Deux mots.', 'Qu’est-ce que l’article laisse ... ?', 'hors champ', 'Ce que le cadre laisse dehors. EN: what the frame leaves out.', 'a1-usages', ['hors-champ']),
        tI('Complète. Un mot.', 'J’ai lu un journal, pas l’... .', 'événement', 'Un article est un cadre posé sur l’événement. EN: you read a frame.', 'a1-scene', ['evenement']),
        eS('Le Courrier et L’Hebdo donnent deux chiffres différents.', 'Le Courrier et L’Hebdo donnent le même chiffre.', 'Quarante-deux mille entrées dans les deux textes. EN: the same figure.', 'a1-lecture', ['Le Courrier et L’Hebdo donnent le même nombre d’entrées.', 'Le Courrier et L’Hebdo donnent le même chiffre d’entrées.']),
        lC('Écoute ce titre. Quel journal a pu l’écrire ?', src(E(2001)).fr, ['L’Hebdo des Rives', 'Le Courrier de Montrivage'], 0, 'Le titre met les riverains en avant. EN: the residents first.', 'a1-lecture'),
      ],
    },
    {
      id: 'r2-depeche', label: 'La dépêche et la pyramide', targets: ['pyramide-ignoree'],
      questions: [
        mc('Dans une dépêche, l’essentiel se trouve...', ['dans la première phrase', 'dans la dernière phrase', 'au milieu'], 0, 'La pyramide inversée. EN: the inverted pyramid.', 'a2-pyramide'),
        mc('Lequel n’est PAS un signe de dépêche ?', ['le sigle de l’agence', 'un « je » qui donne son avis', 'le lieu et la date en tête', 'des avis toujours attribués'], 1, 'Une dépêche ne dit jamais « je ». EN: no « je ».', 'a2-depeche'),
        mc('Un journal coupe une dépêche faute de place. Il coupe...', ['par le bas', 'par le haut', 'au milieu'], 0, 'Elle est écrite pour cela. EN: built to be cut from the bottom.', 'a2-ordre'),
        mc('Selon la dépêche, le nouveau calendrier est-il définitif ?', ['Oui, il a été voté mardi.', 'Non, l’autorité régionale doit encore le valider.'], 1, 'L’étape de procédure arrive tard, et elle compte. EN: the procedure matters.', 'a2-erreurs'),
        tI('Complète. Un mot.', 'La pyramide ... met l’essentiel en haut.', 'inversée', 'Le haut porte l’événement, le bas le contexte. EN: inverted.', 'a2-pyramide', ['inversee']),
        tI('Complète. Un mot.', 'Dans une dépêche, l’ordre dit l’... .', 'importance', 'L’ordre est une hiérarchie. EN: order is ranking.', 'a2-pyramide'),
        eS('La dépêche est contre la réforme, puisqu’elle cite le syndicat.', 'La dépêche rapporte l’avis du syndicat.', 'Citer n’est pas prendre parti. EN: quoting is not endorsing.', 'a2-erreurs', ['La dépêche n’est pas contre la réforme, même si elle cite le syndicat.', 'La dépêche ne prend pas parti, même si elle cite le syndicat.', 'La dépêche rapporte l’avis du syndicat, sans prendre parti.']),
        lC('Écoute. Où cette phrase se place-t-elle dans le flash ?', src(E(2029)).fr, ['à la fin : c’est le contexte', 'au début : c’est l’essentiel'], 0, 'Un chiffre de contexte, rangé en bas. EN: context goes last.', 'a2-flash'),
      ],
    },
    {
      id: 'r3-parties', label: 'Les parties d’un article', targets: ['parties-confondues'],
      questions: [
        mc('Le texte en gras entre le titre et l’article s’appelle...', ['le chapô', 'l’attaque', 'la chute'], 0, 'Il résume et donne l’angle. EN: the standfirst.', 'a3-parties'),
        mc('« Festival », en petit au-dessus du titre, c’est...', ['le surtitre', 'l’intertitre', 'la légende'], 0, 'Il situe le sujet. EN: the kicker.', 'a3-parties'),
        mc('L’article sur les prix s’ouvre sur...', ['une scène : la file de 10 h 07', 'un chiffre de la billetterie', 'une question'], 0, 'Une attaque sur une scène. EN: a scene.', 'a3-article'),
        mc('« Le festival, un luxe ? » est un titre...', ['incitatif', 'informatif'], 0, 'Il donne envie de lire sans affirmer. EN: a teaser.', 'a3-attaques'),
        tI('Comment s’appelle la dernière phrase d’un article ? Un mot.', 'La dernière phrase s’appelle la ... .', 'chute', 'Elle laisse une impression. EN: the closing line.', 'a3-parties'),
        tI('Comment s’appelle le texte sous une photo ? Un mot.', 'Sous la photo, on lit la ... .', 'légende', 'Elle dit comment regarder l’image. EN: the caption.', 'a3-parties', ['legende']),
        eS('Le chapô raconte une scène pour faire entrer le lecteur.', 'L’attaque raconte une scène pour faire entrer le lecteur.', 'Le chapô résume ; l’attaque fait entrer. EN: the lede draws in.', 'a3-piege'),
        lC('Écoute. Quelle partie de l’article est-ce ?', 'Reste une question que personne, mardi, ne savait trancher.', ['la chute', 'le chapô', 'le surtitre'], 0, 'La dernière phrase, une question ouverte. EN: the ending.', 'a3-attaques'),
      ],
    },
    {
      id: 'r4-reportage', label: 'Le reportage', targets: ['reportage-pris-pour-tout'],
      questions: [
        mc('Lequel est un signe de reportage ?', ['une heure, une odeur, des voix entendues sur place', 'le sigle d’une agence', 'un « nous » qui recommande'], 0, 'Le journaliste y était. EN: the reporter was there.', 'a4-signes'),
        mc('Le reportage sur le marché fait parler...', ['des commerçants, une cliente et le chef de chantier', 'la mairie', 'des urbanistes'], 0, 'Ceux que la journaliste a rencontrés. EN: those she met.', 'a4-reportage'),
        mc('Le chiffre de la boulangère, « près d’un tiers », est...', ['son estimation, non vérifiée', 'un chiffre officiel'], 0, '« Assure », entre guillemets. EN: her own estimate.', 'a4-reportage'),
        mc('Dans le bus de 7 h 12, quelle voix le reporter met-il en avant ?', ['une infirmière pressée', 'deux lycéens', 'le chauffeur'], 0, 'Une citation entière, contre une demi-phrase. EN: his main voice.', 'a4-bus'),
        tI('Complète. Un mot.', 'Le reportage raconte au ..., comme si tu y étais.', 'présent', 'Un présent de narration. EN: the present.', 'a4-signes', ['present']),
        tI('Complète. Un mot.', 'Le journaliste choisit qui il rencontre, et donc qui ... .', 'parle', 'Le choix des voix cadre déjà. EN: choosing voices frames.', 'a4-trier'),
        eS('Le reportage montre tout le quartier pendant les travaux.', 'Le reportage montre le marché vu par ceux qui y travaillent.', 'Vrai, et partiel. EN: true and partial.', 'a4-comparer', ['Le reportage montre le marché pendant les travaux.', 'Le reportage montre le marché vu par ses commerçants.', 'Le reportage montre seulement le marché pendant les travaux.']),
        lC('Écoute. Quel genre de texte commence ainsi ?', src(E(2047)).fr, ['un reportage', 'une dépêche', 'un éditorial'], 0, 'Une heure, une odeur : on y est. EN: on the spot.', 'a4-signes'),
      ],
    },
    {
      id: 'r5-edito', label: 'L’éditorial', targets: ['edito-mal-attribue'],
      questions: [
        mc('L’éditorial du Courrier est...', ['pour le calendrier sur le fond, critique sur la méthode', 'contre le calendrier', 'neutre'], 0, 'Une position nuancée. EN: for the aim, against the method.', 'a5-edito'),
        mc('Qui parle dans un éditorial ?', ['le journal', 'un lecteur', 'une agence'], 0, 'La voix de la rédaction. EN: the paper.', 'a5-voix'),
        mc('Au Québec, l’éditorial est souvent...', ['signé par un éditorialiste', 'écrit par un lecteur', 'une dépêche d’agence'], 0, 'Il parle quand même au nom du journal. EN: signed, still the paper’s voice.', 'a5-voix'),
        mc('« Le conseil scolaire doit maintenant convaincre les familles. » C’est...', ['une recommandation du journal', 'une annonce du conseil'], 0, '« Doit » : le journal conseille. EN: a recommendation.', 'a5-piege'),
        tI('Complète. Un mot.', 'L’article informe ; l’éditorial prend ... .', 'position', 'Il juge et recommande. EN: it takes a stand.', 'a5-qui'),
        tI('Complète. Un mot.', 'L’éditorial exprime la ligne ... du journal.', 'éditoriale', 'La ligne du journal. EN: the editorial line.', 'a5-voix', ['editoriale']),
        eS('Le journaliste pense que le calendrier va dans le bon sens.', 'Le journal estime que le calendrier va dans le bon sens.', 'Un éditorial s’attribue au journal. EN: the paper, not a reporter.', 'a5-piege', ['Le journal pense que le calendrier va dans le bon sens.', 'Le Courrier estime que le calendrier va dans le bon sens.', 'Le Courrier pense que le calendrier va dans le bon sens.']),
        lC('Écoute. Cette phrase vient plutôt...', src(E(2062)).fr, ['d’un éditorial', 'd’une dépêche'], 0, '« Nous l’avons écrit ici même » : la voix du journal. EN: the paper’s voice.', 'a5-voix'),
      ],
    },
    {
      id: 'r6-billet', label: 'Chronique et billet', targets: ['je-pris-pour-journal'],
      questions: [
        mc('Qui donne son avis dans le billet sur la navette ?', ['Odile Vasseur', 'L’Hebdo des Rives', 'la mairie'], 0, 'Un « je » signé. EN: a signed « je ».', 'a6-billet'),
        mc('L’idée unique du billet, c’est que...', ['la navette s’arrête avant la fin des concerts', 'le festival est trop cher', 'il faut supprimer le festival'], 0, 'Tout tient sur ce défaut. EN: one idea.', 'a6-billet'),
        mc('Une chronique se distingue d’un billet par...', ['son rendez-vous régulier et un regard développé', 'son absence de signature'], 0, 'Une rubrique fixe, une voix qui revient. EN: a regular slot.', 'a6-je'),
        mc('« L’an prochain, je viendrai à pied. J’habite à onze kilomètres. » C’est...', ['une chute humoristique', 'un projet sérieux'], 0, 'Un trait d’esprit. EN: a joke.', 'a6-erreurs'),
        tI('Complète. Un mot.', 'Ce billet n’engage que son ... .', 'auteure', 'Pas le journal. EN: only its author.', 'a6-trier', ['auteur', 'autrice']),
        tI('Complète. Un mot.', 'Un billet tient sur une idée et finit sur un trait d’... .', 'esprit', 'Une pointe finale. EN: a witty line.', 'a6-je'),
        eS('Le journal critique l’horaire de la navette.', 'La chroniqueuse critique l’horaire de la navette.', 'Un « je » signé n’est pas la rédaction. EN: the columnist.', 'a6-erreurs', ['Odile Vasseur critique l’horaire de la navette.', 'L’auteure critique l’horaire de la navette.', 'L’auteure du billet critique l’horaire de la navette.']),
        lC('Écoute. Qui parle ?', src(E(2076)).fr, ['une chroniqueuse, en son nom', 'la rédaction'], 0, 'Un « je » : une signature. EN: a byline.', 'a6-trier'),
      ],
    },
    {
      id: 'r7-tribune', label: 'Tribune et lettre ouverte', targets: ['tribune-endossee'],
      questions: [
        mc('Le Courrier publie une tribune contre le calendrier. Le journal...', ['publie sans endosser', 'est forcément contre le calendrier'], 0, 'Son avis est dans l’éditorial. EN: publishing is not endorsing.', 'a7-signes'),
        mc('Qui signe la lettre ouverte ?', ['un collectif de parents', 'la présidente du conseil', 'le journal'], 0, 'Trois parents, pour le collectif. EN: a parents’ group.', 'a7-lettre'),
        mc('À qui la lettre ouverte s’adresse-t-elle ?', ['à la présidente du conseil scolaire, sous les yeux du public', 'aux enseignants seulement'], 0, 'Un destinataire, un public. EN: one addressee, a public.', 'a7-lettre'),
        mc('Une tribune contre le pont est signée par le gérant d’un parking. Tu...', ['notes son intérêt sans rejeter ses arguments', 'rejettes tout le texte', 'ignores la signature'], 0, 'Un intérêt se note ; il ne réfute rien. EN: note the stake.', 'a7-signatures'),
        tI('Complète. Un mot.', 'Les opinions exprimées n’engagent que leurs ... .', 'auteurs', 'La note de la rédaction. EN: the disclaimer.', 'a7-signes', ['auteures', 'autrices']),
        tI('Complète. Un mot.', 'Une lettre ... s’adresse à une personne mais vise le public.', 'ouverte', 'Publiée pour peser. EN: an open letter.', 'a7-signes'),
        eS('Le journal demande une consultation avant l’été.', 'Le collectif demande une consultation avant l’été.', 'La demande vient des signataires. EN: the group asks.', 'a7-lettre', ['Le collectif de parents demande une consultation avant l’été.', 'Les parents demandent une consultation avant l’été.']),
        lC('Écoute. De quel genre vient cette phrase ?', src(E(2086)).fr, ['une lettre ouverte', 'une dépêche', 'un reportage'], 0, 'Un destinataire nommé, un « nous » collectif. EN: an open letter.', 'a7-signes'),
      ],
    },
    {
      id: 'r8-sources', label: 'Les voix et leur ordre', targets: ['voix-non-comptees'],
      questions: [
        mc('Dans l’article sur la ligne 7, qui parle en premier ?', ['une usagère en colère', 'la société de transport', 'un retraité satisfait'], 0, 'Elle donne le ton. EN: she sets the tone.', 'a8-article'),
        mc('Comment la société de transport est-elle présentée ?', ['résumée, d’après un courriel', 'citée longuement en entretien'], 0, 'Au style indirect, à distance. EN: summarised.', 'a8-voix'),
        mc('Qui n’est pas interrogé ?', ['un urbaniste', 'des usagers', 'un retraité'], 0, 'Un absent, donc personne pour contredire. EN: no planner.', 'a8-voix'),
        mc('Le chiffre de huit cents signatures est...', ['annoncé par les organisateurs, au conditionnel', 'vérifié par le journal'], 0, '« Aurait », « selon ses organisateurs ». EN: unverified.', 'a8-article'),
        tI('Complète. Un mot.', 'La première voix donne le ... .', 'ton', 'Le lecteur regarde à travers elle. EN: the tone.', 'a8-voix'),
        tI('Complète. Un mot.', 'Compte les voix, puis regarde leur ... .', 'ordre', 'L’ordre fait le cadre. EN: order.', 'a8-piege'),
        eS('L’article est neutre, puisqu’il cite tout le monde.', 'L’article penche, même s’il cite tout le monde.', 'L’ordre et la place comptent. EN: order and space matter.', 'a8-piege', ['L’article n’est pas neutre, même s’il cite tout le monde.', 'L’article n’est pas forcément neutre, même s’il cite tout le monde.']),
        lC('Écoute. Dans l’article, cette voix arrive...', src(E(2097)).fr, ['au début : elle donne le ton', 'à la fin : elle nuance'], 0, 'La première citation de l’article. EN: the first quote.', 'a8-ordre'),
      ],
    },
    {
      id: 'r9-chiffres', label: 'Chiffres et légendes', targets: ['chiffre-pris-brut'],
      questions: [
        mc('« Un festivalier sur trois venait d’ailleurs » et « deux sur trois habitent la région »...', ['disent la même chose de deux côtés', 'se contredisent'], 0, 'Une proportion, deux bords. EN: one proportion.', 'a9-regles'),
        mc('« Les plaintes ont triplé » : pour en juger, tu demandes...', ['par rapport à quoi, et sur combien', 'qui a pris la photo'], 0, 'La base, toujours. EN: the base.', 'a9-lire'),
        mc('« Ne progresse plus que de 5 % » : L’Hebdo compare avec...', ['les hausses des premières années', 'l’an dernier seulement'], 0, 'La comparaison choisie change l’effet. EN: the chosen comparison.', 'a9-chiffres'),
        mc('La photo de L’Hebdo montre...', ['un riverain devant des gobelets, dimanche matin', 'la foule du samedi soir'], 0, 'Un autre moment, une autre lecture. EN: another moment.', 'a9-chiffres'),
        tI('Complète. Un mot.', 'Un chiffre ne parle jamais seul : regarde sa ... et sa comparaison.', 'base', 'Sur combien ? EN: the base.', 'a9-regles'),
        tI('Complète. Un mot.', 'Une ... dit comment regarder la photo.', 'légende', 'Elle oriente l’image. EN: the caption.', 'a9-regles', ['legende']),
        eS('Le festival est trois fois plus bruyant que l’an dernier.', 'Les plaintes pour bruit ont triplé, de douze à trente-huit.', 'Le triplement porte sur les plaintes, et sur une petite base. EN: complaints, on a small base.', 'a9-erreurs', ['Les plaintes pour bruit ont triplé.', 'Les plaintes ont triplé.', 'Les plaintes pour bruit ont triplé par rapport à l’an dernier.', 'Les plaintes pour bruit sont trois fois plus nombreuses que l’an dernier.']),
        lC('Écoute. Ce chiffre est présenté pour...', src(E(2110)).fr, ['relativiser les plaintes', 'les grossir'], 0, 'Rapportées aux entrées, elles paraissent rares. EN: to play them down.', 'a9-lire'),
      ],
    },
    {
      id: 'r10-mots', label: 'Les mots qui pèsent', targets: ['mot-charge-avale'],
      questions: [
        mc('« Les engins ont envahi les berges. » En mots neutres :', ['Les travaux ont commencé sur les berges.', 'Les berges ont été attaquées.', 'Le chantier est illégal.'], 0, 'Le fait, sans le jugement. EN: the fact only.', 'a10-neutre'),
        mc('« Une poignée de défenseurs du projet » : « une poignée »...', ['réduit le camp à presque rien', 'donne un chiffre précis'], 0, 'Le mot dose à la place du nombre. EN: it shrinks the side.', 'a10-paires'),
        mc('« Pas moins de trois cents » et « à peine trois cents »...', ['donnent le même nombre et deux jugements', 'donnent deux nombres'], 0, 'Le petit mot choisit le camp. EN: the small word picks a side.', 'a10-dosage'),
        mc('Lequel est le mot de la mairie ?', ['réaménagement', 'bétonnage'], 0, 'Le mot officiel n’est pas neutre non plus. EN: official, not neutral.', 'a10-article'),
        tI('Récris avec un verbe neutre. Un mot.', 'La municipalité s’entête. → La municipalité ... son projet.', 'maintient', 'Maintenir dit la décision, sans l’obstination. EN: keeps.', 'a10-paires', ['garde', 'conserve', 'poursuit', 'confirme']),
        tI('Complète. Un mot.', 'Le fait est le même ; le mot choisit le ... .', 'camp', 'Le jugement est dans le mot. EN: the side.', 'a10-neutre'),
        eS('Les engins ont envahi les berges dès lundi.', 'Les travaux ont commencé lundi sur les berges.', 'Remplace le mot chargé : il reste le fait. EN: the neutral version.', 'a10-neutre', ['Les travaux ont commencé sur les berges dès lundi.', 'Les travaux ont commencé sur les berges lundi.', 'Les engins sont arrivés sur les berges dès lundi.', 'Les engins sont arrivés sur les berges lundi.', 'Les travaux ont débuté lundi sur les berges.'], 'Un mot de la phrase juge au lieu de décrire. Récris la phrase en mots neutres. EN: One word judges instead of describing; rewrite the sentence neutrally.'),
        lC('Écoute. Cette expression est-elle neutre ?', src(E(2121)).fr, ['Non : « bétonnage » juge le projet.', 'Oui : c’est le nom officiel.'], 0, 'Un mot chargé contre le projet. EN: loaded against it.', 'a10-paires'),
      ],
    },
    {
      id: 'r11-comparer', label: 'Deux traitements comparés', targets: ['comparaison-plate'],
      questions: [
        mc('Pour comparer deux traitements, tu pars...', ['des faits que les deux textes partagent', 'du texte que tu préfères'], 0, 'Le terrain commun d’abord. EN: shared facts first.', 'a11-methode'),
        mc('« Le festival a dû concéder la fin des concerts à minuit » laisse entendre...', ['que la décision a été arrachée par les riverains', 'que le festival l’a proposée lui-même'], 0, 'Le verbe fait d’un geste une défaite. EN: the verb frames it as a concession.', 'a11-deux'),
        mc('Que laisse le Courrier hors champ dans son article sur la réunion ?', ['la pétition et la demande de limites de volume', 'la décision de finir à minuit', 'le maire'], 0, 'Ce qui dérangerait l’engagement. EN: what would spoil the pledge.', 'a11-grille'),
        mc('Dans les textes du pont, « piétonnisation » et « fermeture »...', ['désignent le même fait avec deux jugements', 'désignent deux décisions différentes'], 0, 'Une paire chargée. EN: a loaded pair.', 'a12-textes'),
        mc('Le reportage du pont ne dit rien...', ['des automobilistes détournés', 'des enfants à vélo', 'de l’adjointe aux mobilités'], 0, 'Son hors-champ. EN: what it leaves out.', 'a12-textes'),
        tI('Complète. Un mot.', 'Ni l’un ni l’autre ne ment : chacun ... .', 'choisit', 'La conclusion juste. EN: each chooses.', 'a11-erreurs'),
        eS('L’Hebdo ment sur la réunion de jeudi.', 'L’Hebdo laisse hors champ que la proposition venait du festival.', 'Une omission n’est pas un mensonge. EN: name the omission.', 'a11-erreurs', ['L’Hebdo ne dit pas que la proposition venait du festival.', 'L’Hebdo omet que la proposition venait du festival.', 'L’Hebdo passe sous silence que la proposition venait du festival.']),
        lC('Écoute. De quel texte du pont vient cette phrase ?', 'Une poignée de cyclistes enthousiastes ne fait pas une politique des transports.', ['de l’éditorial de L’Hebdo', 'du reportage du Courrier'], 0, '« Une poignée » : le mot qui réduit un camp. EN: the editorial.', 'a12-textes'),
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
    { front: 'l’essentiel en haut, le contexte en bas', back: 'la pyramide inversée', say: src(E(2012)).fr },
    { front: 'le texte en gras sous le titre', back: 'le chapô', say: src(E(2036)).fr },
    { front: 'la dernière phrase', back: 'la chute', say: src(E(2039)).fr },
    { front: 'on y était, au présent', back: 'le reportage', say: src(E(2046)).fr },
    { front: 'la voix du journal', back: 'l’éditorial', say: src(E(2061)).fr },
    { front: 'un « je » signé', back: 'la chronique, le billet', say: src(E(2075)).fr },
    { front: 'an op-ed', back: 'une tribune', say: src(E(2092)).fr },
    { front: 'a loaded word', back: 'un mot chargé', say: src(E(2128)).fr },
    { front: 'what the frame leaves out', back: 'le hors-champ', say: src(E(2144)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Analyser la presse, en résumé',
  body: `${REFRAME} Tu lis maintenant un journal comme une suite de choix : un genre, un ordre, des voix, des chiffres, des mots, et un hors-champ. Avec cette leçon se ferme l’unité « Interprétation et médiation ». La suite, c’est l’épreuve elle-même : l’article d’opinion du TEF et du TCF, que ${LIGNES_REF} t’a appris à lire entre les lignes, et que tu sais maintenant situer dans le journal qui le publie. EN: Next: the exam’s opinion article, read between the lines and placed in its paper.`,
  points: [
    'Le genre dit qui parle : la dépêche rapporte, le reportage montre, l’éditorial juge, la tribune signe.',
    'L’ordre classe, le chapô oriente, la chute reste.',
    'Les voix, les chiffres, les légendes et les mots font le cadre.',
    'Ta comparaison part des faits communs et nomme ce que chacun laisse hors champ.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'cadrage', 'horschamp'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta comparaison',
    opener: {
      line: 'Un même dimanche sur le pont des Saules, un reportage et un éditorial : à toi de montrer comment chacun le cadre. EN: One Sunday on the pont des Saules, a report and an editorial: your turn to show how each one frames it.',
      imageRef: 'lessons/analyse-presse/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as comparé par écrit deux traitements d’un même événement et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You compared two treatments of one event in writing and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-textes', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-parties', 'a12-quiz/r6-billet', 'a12-quiz/r9-chiffres'],
  },
  sections: [
    A12_TEXTES, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-unes', title: 'Les questions de l’analyste', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les questions à poser à un journal. EN: say each line aloud: the questions to ask a paper.', items: [E(2003), E(2004), E(2005), E(2006), E(2007), E(2010)], audio: AUDIO },
  { id: 'd-pyramide', title: 'Lire l’ordre', format: 'mcq' as const, coach: 'Dans une dépêche, demande-toi où l’information est rangée. EN: ask where the item is ranked.', q: '« La ligne 7 transporte environ quatre mille voyageurs par jour. » Dans un flash, cette phrase va...', opts: ['à la fin', 'au début'], correct: 0, why: 'C’est le contexte. EN: context goes last.', items: [E(2011), E(2012), E(2013), E(2015), E(2021), E(2029)], audio: AUDIO },
  { id: 'd-parties', title: 'Chaque partie, son rôle', format: 'mcq' as const, coach: 'Nomme la partie, puis ce qu’elle fait. EN: name the part, then its job.', q: 'Le texte en gras sous le titre, c’est...', opts: ['le chapô', 'la chute'], correct: 0, why: 'Il résume et donne l’angle. EN: the standfirst.', items: [E(2030), E(2031), E(2032), E(2033), E(2035), E(2044)], audio: AUDIO },
  { id: 'd-reportage', title: 'Les signes du reportage', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : ce sont les signes d’un reportage. EN: read each aloud.', items: [E(2045), E(2046), E(2047), E(2049), E(2050), E(2051)], audio: AUDIO },
  { id: 'd-edito', title: 'La voix du journal', format: 'mcq' as const, coach: 'Cherche le « nous » et les verbes qui recommandent. EN: look for the « nous ».', q: '« Nous l’avons écrit ici même. » Qui parle ?', opts: ['le journal', 'un journaliste'], correct: 0, why: 'Le « nous » de l’éditorial. EN: the paper.', items: [E(2060), E(2061), E(2065), E(2068), E(2069), E(2071)], audio: AUDIO },
  { id: 'd-billet', title: 'Une personne ou le journal', format: 'sort' as const, coach: 'Deux piles : la voix d’une personne qui signe, ou la voix du journal. EN: a person or the paper.', buckets: ['la voix d’une personne', 'la voix du journal'], items: [E(2076), E(2062), E(2078), E(2063), E(2077), E(2064)], audio: AUDIO },
  { id: 'd-tribune', title: 'Publier n’est pas signer', format: 'mcq' as const, coach: 'Lis la ligne sous le titre et la note de la rédaction. EN: read the author line and the note.', q: 'Une tribune paraît dans le journal. Elle engage...', opts: ['son auteur', 'le journal'], correct: 0, why: 'Le journal publie, l’auteur signe. EN: the author.', items: [E(2083), E(2084), E(2085), E(2089), E(2091), E(2092)], audio: AUDIO },
  { id: 'd-sources', title: 'Compter les voix', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : comment lire les voix d’un article. EN: how to read an article’s voices.', items: [E(2094), E(2095), E(2096), E(2101), E(2102), E(2103)], audio: AUDIO },
  { id: 'd-chiffres', title: 'Par rapport à quoi', format: 'mcq' as const, coach: 'Demande à chaque chiffre sa base et sa comparaison. EN: ask every figure for its base.', q: '« Les plaintes ont triplé. » Tu demandes d’abord...', opts: ['par rapport à quoi', 'qui a écrit'], correct: 0, why: 'De combien à combien, sur combien. EN: from what, out of what.', items: [E(2107), E(2108), E(2111), E(2112), E(2116), E(2117)], audio: AUDIO },
  { id: 'd-mots', title: 'Neutre ou chargé', format: 'sort' as const, coach: 'Deux piles : le mot dit le fait, ou il le juge ? EN: does the word state or judge?', buckets: ['un mot qui dit le fait', 'un mot qui juge'], items: [E(2123), E(2121), E(2130), E(2122), E(2125), E(2129)], audio: AUDIO },
  { id: 'd-comparer', title: 'La charpente de ta comparaison', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : la charpente d’une comparaison. EN: the frame of a comparison.', items: [E(2134), E(2137), E(2140), E(2143), E(2152), E(2153)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'journal-pour-evenement', description: 'Reports one paper’s account of an event as the event itself, unaware that another paper frames the same facts differently.', detectOn: ['a1-scene', 'a1-lecture', 'a1-check', 'a12-mission'], drill: 'd-unes', retest: 'd-unes' },
  { id: 'pyramide-ignoree', description: 'Reads a dispatch as a flat list, missing that its order ranks the facts, or treats what is placed low as unimportant to them.', detectOn: ['a2-ordre', 'a2-erreurs', 'a2-check'], drill: 'd-pyramide', retest: 'd-pyramide' },
  { id: 'parties-confondues', description: 'Confuses the standfirst, the opening, the ending and the caption, and misses what each one steers.', detectOn: ['a3-attaques', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-parties', retest: 'd-parties' },
  { id: 'reportage-pris-pour-tout', description: 'Takes the people a report chose to meet as the whole picture, or reads the report as more true because it shows.', detectOn: ['a4-trier', 'a4-bus', 'a4-check', 'a12-mission'], drill: 'd-reportage', retest: 'd-reportage' },
  { id: 'edito-mal-attribue', description: 'Attributes an editorial’s view to « the journalist » or « the author », reads it as news, or drops its nuance.', detectOn: ['a5-qui', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-edito', retest: 'd-edito' },
  { id: 'je-pris-pour-journal', description: 'Attributes a columnist’s « je » to the paper, or takes a billet’s humorous ending literally.', detectOn: ['a6-trier', 'a6-erreurs', 'a6-check'], drill: 'd-billet', retest: 'd-billet' },
  { id: 'tribune-endossee', description: 'Assumes the paper endorses an op-ed or open letter it publishes, or ignores the author line that says where the writer speaks from.', detectOn: ['a7-signatures', 'a7-reflexes', 'a7-check'], drill: 'd-tribune', retest: 'd-tribune' },
  { id: 'voix-non-comptees', description: 'Calls an article neutral because it quotes several sides, without counting voices, reading their order and length, or noticing who is missing.', detectOn: ['a8-ordre', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-sources', retest: 'd-sources' },
  { id: 'chiffre-pris-brut', description: 'Takes a figure at face value without its base or comparison, or reads a photo and its caption as the whole event.', detectOn: ['a9-lire', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-chiffres', retest: 'd-chiffres' },
  { id: 'mot-charge-avale', description: 'Repeats a loaded word or quantity word as if it were a neutral fact, or treats the official word as the neutral one.', detectOn: ['a10-neutre', 'a10-dosage', 'a10-check', 'a12-mission'], drill: 'd-mots', retest: 'd-mots' },
  { id: 'comparaison-plate', description: 'Compares two treatments by summarising each in turn, accusing one of lying, or judging the event instead of the texts.', detectOn: ['a11-grille', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-comparer', retest: 'd-comparer' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-genres', 'Les genres de la presse', ['huit genres et leurs signaux', 'qui signe', 'le « je » et le « nous »'], [
    teach('sheet-genres-teach', 'Qui parle, et pour quoi faire',
      `Avant de juger un texte de presse, reconnais son genre : il dit qui parle et ce que le texte cherche à faire. ${Cap(MEDIAS_REF)} t’a donné les mots (éditorial, chronique, rubrique) ; ici, tu lis leurs signaux. L’information rapporte et attribue ; l’opinion juge et signe. EN: Recognise the genre first: it tells you who speaks and what the text is for.`),
    table('sheet-genres-table', 'Huit genres', ['Genre', 'Signaux', 'Qui parle', 'Ce qu’il fait'], [
      ['la dépêche', 'lieu et date, sigle d’agence, pas de « je »', 'une agence', 'rapporte l’essentiel, attribue chaque avis'],
      ['l’article', 'signé, rubrique, titre et chapô', 'un journaliste', 'informe, avec un angle'],
      ['le reportage', 'heure, lieu, présent, détails, voix entendues', 'un journaliste sur place', 'montre une scène'],
      ['l’éditorial', 'rubrique « Éditorial », « nous », verbes qui prescrivent', 'le journal', 'prend position, recommande'],
      ['la chronique', 'rubrique fixe, nom et photo, « je »', 'une personne, régulièrement', 'développe un regard'],
      ['le billet', 'court, « je », une idée, une chute', 'une personne', 'pique, fait sourire'],
      ['la tribune', 'nom et fonction de l’auteur, note de la rédaction', 'une personne extérieure', 'défend une thèse'],
      ['la lettre ouverte', 'destinataire nommé, demandes, formule finale', 'une personne ou un collectif', 'interpelle sous les yeux du public'],
    ]),
    table('sheet-genres-signature', 'Qui signe', ['Signature', 'Ce qu’elle dit'], [
      ['un sigle d’agence (AHP)', 'une dépêche, reprise telle quelle'],
      ['le nom d’un journaliste', 'un article ou un reportage de la rédaction'],
      ['« Par X, envoyée spéciale »', 'un reportage, sur place'],
      ['aucun nom, ou le nom du journal', 'un éditorial non signé : la voix du journal'],
      ['le rédacteur en chef ou un éditorialiste', 'un éditorial signé (au Québec, souvent un éditorialiste) : il parle au nom du journal'],
      ['un nom et une fonction (urbaniste, collectif)', 'une tribune : d’où l’auteur parle'],
    ]),
  ]),
  sheet('sheet-structure', 'La forme d’un article', ['la pyramide inversée', 'les parties de la page'], [
    teach('sheet-structure-teach', 'L’ordre et les parties',
      'Un texte d’information met l’essentiel en haut et le contexte en bas : l’ordre classe les faits. Sur la page, chaque partie travaille : le surtitre situe, le titre accroche ou informe, le chapô résume et oriente, l’attaque fait entrer, les intertitres découpent, la chute reste, la légende dit comment voir la photo. EN: The order ranks the facts; each part of the page steers the reading.'),
    table('sheet-structure-pyramide', 'La pyramide inversée', ['Étage', 'Ce qu’on y trouve', 'Quand on coupe'], [
      ['la tête', 'qui, quoi, où, quand', 'on la garde toujours'],
      ['le corps', 'chiffres, raisons, réactions attribuées', 'on le raccourcit'],
      ['la base', 'contexte, précédents, histoire', 'on la coupe en premier'],
    ]),
    table('sheet-structure-parties', 'Les parties de la page', ['Partie', 'Où', 'Ce qu’elle fait'], [
      ['le surtitre', 'au-dessus du titre, en petit', 'situe le sujet : thème, lieu, précision'],
      ['le titre', 'en gros', 'informe (le fait) ou incite (une question, un jeu de mots)'],
      ['le chapô (ou chapeau)', 'sous le titre, souvent en gras', 'résume et donne l’angle'],
      ['l’attaque', 'les premières lignes', 'fait entrer : scène, citation, chiffre, question'],
      ['l’intertitre', 'au milieu de l’article', 'découpe et annonce une partie'],
      ['la chute', 'la dernière phrase', 'laisse une impression : question, image, trait'],
      ['la légende', 'sous la photo', 'dit comment regarder l’image'],
    ]),
  ]),
  sheet('sheet-cadre', 'Le cadre : voix, chiffres, images', ['six questions aux voix', 'lire un chiffre', 'la photo et sa légende'], [
    teach('sheet-cadre-teach', 'Ce que le cadre montre, et comment',
      'Un article cadre un fait par les voix qu’il choisit et leur ordre, par les chiffres qu’il retient et la façon de les présenter, par la photo et sa légende. Aucun de ces choix n’exige de mentir : deux cadrages opposés peuvent rapporter les mêmes faits exacts. EN: Voices, figures and images frame a fact; no lie is needed.'),
    table('sheet-cadre-voix', 'Six questions aux voix d’un article', ['Question', 'Pourquoi'], [
      ['Qui parle en premier ?', 'la première voix donne le ton'],
      ['Qui a le plus de lignes ?', 'la place accordée fait le poids'],
      ['Qui est cité, qui est résumé ?', 'citer donne la parole, résumer la reprend'],
      ['Qui est anonyme ?', 'un mot fort, sans responsable'],
      ['Qui a le dernier mot ?', 'il laisse l’impression finale'],
      ['Qui manque ?', 'les absents ne contredisent personne'],
    ]),
    table('sheet-cadre-chiffres', 'Lire un chiffre de presse', ['Question', 'Exemple'], [
      ['De quel côté ?', 'un sur trois venu d’ailleurs = deux sur trois de la région'],
      ['Sur quelle base ?', 'les plaintes ont triplé : de 12 à 38, pour 42 000 entrées'],
      ['Comparé à quoi ?', '« progresse de 5 % » ou « ne progresse plus que de 5 % »'],
      ['Avec quel petit mot ?', 'seulement 8 % / près d’un sur dix'],
    ]),
  ]),
  sheet('sheet-mots', 'Les mots qui pèsent', ['paires chargées', 'les petits mots qui dosent', 'le test du mot neutre'], [
    teach('sheet-mots-teach', 'Le mot qui juge à ta place',
      'Pour un même fait, la presse a souvent deux mots, et chacun porte un jugement que la phrase n’affirme pas. Le mot officiel n’est pas neutre pour autant. Pour repérer un mot chargé, remplace-le par un mot plus neutre : ce qui disparaît, c’est le jugement. EN: Swap a loaded word for a neutral one; what disappears is the judgement.'),
    table('sheet-mots-paires', 'Paires chargées', ['Un mot', 'Un autre mot', 'Ce qui change'], [
      ['le réaménagement', 'le bétonnage', 'le projet ou le dommage'],
      ['maintenir', 's’entêter', 'la fermeté ou l’obstination'],
      ['commencer', 'envahir', 'un chantier ou une attaque'],
      ['la piétonnisation', 'la fermeture', 'ouvert aux uns ou fermé aux autres'],
      ['un engagement', 'une concession', 'un geste choisi ou une défaite'],
      ['des riverains opposés', 'des riverains en colère', 'une position ou une émotion'],
      ['des manifestants', 'des casseurs', 'l’exemple classique : une protestation ou des dégâts'],
    ]),
    table('sheet-mots-dosage', 'Les petits mots qui dosent', ['Mot', 'Effet'], [
      ['une poignée de', 'réduit sans donner de nombre'],
      ['pas moins de', 'grossit le nombre'],
      ['à peine, seulement, ne... que', 'réduit le nombre'],
      ['près de, plus de', 'arrondit vers le haut'],
      ['enfin', 'présente un fait comme une victoire attendue'],
    ]),
  ]),
  sheet('sheet-comparer', 'Comparer deux traitements', ['la méthode', 'le plan de ta comparaison', 'des formules'], [
    teach('sheet-comparer-teach', 'Des faits communs aux choix',
      'Comparer, c’est mettre deux textes face à face, point par point. Pars de ce qu’ils partagent, puis compare leurs choix : le genre et la place, le titre et la photo, les voix, les chiffres, les mots, et ce que chacun laisse hors champ. Conclus sans accuser : une omission n’est pas un mensonge. EN: Start from shared facts, compare the choices point by point, conclude without accusing.'),
    table('sheet-comparer-methode', 'La méthode', ['Étape', 'Question'], [
      ['1', 'Quels faits les deux textes partagent-ils ?'],
      ['2', 'Quel genre, et quelle place dans le journal ?'],
      ['3', 'Que disent les titres, les chapôs, les photos ?'],
      ['4', 'Qui parle en premier, qui a le dernier mot, qui manque ?'],
      ['5', 'Quels chiffres, quels mots chargés de chaque côté ?'],
      ['6', 'Que laisse chacun hors champ ?'],
    ]),
    table('sheet-comparer-formules', 'Des formules pour comparer', ['Pour', 'Formules'], [
      ['opposer', 'alors que, tandis que, en revanche, à l’inverse'],
      ['rapprocher', 'de même, comme, les deux textes'],
      ['nommer un choix', 'met en avant, relègue, retient, privilégie'],
      ['nommer une omission', 'passe sous silence, ne dit rien de, laisse de côté'],
      ['analyser un mot', 'le choix du mot « ... » suggère que'],
      ['conclure', 'en somme, aucun ne ment : chacun cadre'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-24-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c1-24-unes': 'The two front pages (act 1), TWO VOICES, one take each. Texte A: a bright, upbeat France-French newsreader. Texte B: a calmer, graver voice. Say « Texte A » and « Texte B » as labels and read the headlines as headlines. No irony on « Seule ombre au tableau »: the learner must find the placement in the words.',
  'rec-c1-24-depeche': 'The agency dispatch (act 2), ONE VOICE, one take, the flat, even pace of a wire read on air. The dateline « Montrivage, 4 mars, AHP » read as a dateline. Every quotation at ordinary weight. No emphasis anywhere: a dispatch has no tone.',
  'rec-c1-24-pyramide': 'The four pyramid cards. Each card’s sentence read plainly, same pace.',
  'rec-c1-24-flash': 'REQUIRED FOR THE EAR MISSION (act 2): eight lines, ONE TAKE, ONE VOICE, in authored order, at morning-bulletin pace, as a local radio flash. The station identification first. No pause longer than the punctuation gives: the learner must hear the order, not be shown it.',
  'rec-c1-24-article': 'The festival price article (act 3), ONE VOICE, one take, France French, magazine pace. Read « FESTIVAL » as a short label, the headline as a headline, the standfirst a touch slower, and « UN PUBLIC QUI CHANGE » as a subheading. The closing question as a real open question. « Légende de la photo » read as a label.',
  'rec-c1-24-piege-parties': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-24-reportage': 'The market report (act 4), ONE VOICE, one take, a woman reporter reading her own piece, warm and observant, present-tense narration. The jackhammer moment can carry a beat of silence before « Les conversations s’arrêtent net ». The chef de chantier’s slip read with a smile, not a laugh.',
  'rec-c1-24-bus': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, TWO VOICES, in authored order. Lines 1, 2, 3, 5, 6, 7 and 8: a male radio reporter on location, slightly hushed as if inside a bus. Line 4: a tired female nurse, Québec French acceptable. Light bus ambience under the take if the studio allows; never louder than the voice.',
  'rec-c1-24-edito': 'The editorial (act 5), ONE VOICE, one take, a measured, authoritative France-French voice, the tone of an institution. « Nous » never stressed. The final « L’improvisation, si. » after a short beat, dry, not theatrical. « Le Courrier de Montrivage » read as a signature.',
  'rec-c1-24-voix': 'The four editorial cards, read plainly.',
  'rec-c1-24-piege-edito': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-24-billet': 'Odile’s billet (act 6), ONE VOICE, one take, a woman in her fifties reading her own column, amused and dry. The humour must come from the words and the timing: a small beat before « Simplement, pas le même soir » and before each of the last three sentences. Never laughing.',
  'rec-c1-24-lettre': 'The open letter (act 7), ONE VOICE, one take, a parent reading for the collective, sincere and firm, never angry. « Madame la Présidente » with formal courtesy. The disclaimer line read flat, as small print. The closing formula read in full, formally.',
  'rec-c1-24-signes': 'The four op-ed cards, read plainly.',
  'rec-c1-24-sources': 'The bus-detour article (act 8), ONE VOICE, one take, a neutral local newsreader. The quotations with the slight lift a newsreader gives a quote, no acting: the order of voices must be heard in the structure, not in the performance. Paul Girard’s line at the same weight as the others.',
  'rec-c1-24-piege-sources': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-24-chiffres': 'The two reports on the figures (act 9), TWO VOICES. Texte A: an upbeat voice. Texte B: a sober, slightly concerned voice. Figures in full words as written. Say « Texte A » and « Texte B » and « Photo » as labels.',
  'rec-c1-24-regles': 'The four figure cards, read plainly; card one with a clear beat between « un sur trois » and « venait d’ailleurs ».',
  'rec-c1-24-mots': 'The riverside article (act 10), ONE VOICE, one take, an indignant but controlled weekly-paper voice. The loaded words at ordinary weight: the learner finds them in the vocabulary, not in the stress. « réaménagement » with the light lift of a quotation. The last sentence dry.',
  'rec-c1-24-deux': 'The two treatments of the meeting (act 11), TWO VOICES, one take each. Texte A: a calm culture-page voice. Texte B: a livelier front-page voice. Neither caricatured. Say « Texte A », « Texte B » and « Photo » as labels.',
  'rec-c1-24-pont': 'THE TASK TEXTS (act 12), TWO VOICES. Texte A: the same woman reporter as act 4, warm, present tense, a smile on the accordion and the brass band. Texte B: an editorial voice, firm and grave, the « nous » of the paper. Say « Texte A » and « Texte B » as labels. Neither reader comments on the other.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 24',
  intro: 'At B1 you learned the words of the media; at B2, to judge what a text claims. At C1 you read the newspaper itself. This lesson tells a dispatch, a report, an editorial, a column, a billet, an op-ed and an open letter apart by their signals, reads the inverted pyramid and the parts of a page, and shows how the choice and order of voices, the figures, the captions and the loaded words frame an event. It ends with a 250 to 400 word comparison of two papers’ treatment of the same Sunday.',
  skill: 'CE',
  grammarAssumed: [MEDIAS_UNIT, CRITIQUE_UNIT, NOMINAL_UNIT, PASSIF_UNIT],
  grammarIntroduced: [
    'Press genres and their signals: dépêche, article, reportage, éditorial (signed or unsigned, by the editor or, often in Québec, an editorial writer, always the paper’s voice), chronique and billet (a signed « je »), tribune and lettre ouverte (an outside author, the paper’s disclaimer)',
    'The inverted pyramid: the order of a dispatch as a ranking of facts',
    'The parts of a page and what each steers: surtitre, titre (informatif or incitatif), chapô, attaque, intertitre, chute, légende',
    'Framing by the choice, order, length and style (direct or indirect) of sources, and by absent voices; by figures (base, comparison, proportion seen from either side, quantity words); by the photo and its caption',
    'Loaded pairs and connotation in the press (réaménagement / bétonnage, maintenir / s’entêter, piétonnisation / fermeture), the neutral-word test, and the written comparison of two treatments of one event',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris les mots des médias ; au B2, à juger ce qu’un texte affirme. Au C1, tu lis le journal lui-même. Cette leçon distingue la dépêche, le reportage, l’éditorial, la chronique, le billet, la tribune et la lettre ouverte par leurs signaux, lit la pyramide inversée et les parties d’une page, et montre comment le choix et l’ordre des voix, les chiffres, les légendes et les mots chargés cadrent un événement. À la fin, tu compares en 250 à 400 mots deux traitements d’un même dimanche.',
    minutes: 180,
    difficulty: 4,
    glyph: 'cadre',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ANALYSE_PRESSE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, PONT_A_TEXT, PONT_B_TEXT };
export const lessonWithoutTask = (): Lesson => LESSON;
