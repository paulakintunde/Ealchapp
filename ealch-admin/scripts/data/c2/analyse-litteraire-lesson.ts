// c2.02.l1 « L’analyse littéraire intégrale » — the lesson. DRAFT, the
// second lesson of the C2 band, wave 1. To RICH-LESSON-STANDARD.md (the
// workshop shape, text and task) on top of B1-BUILD-PLAYBOOK.md, with the C2
// rules of C2-BUILD-PLAN.md and the c2.02 brief in C2-BUILD-LOG.md.
// Structural model: `c2/precision-nuance-lesson.ts` (c2.01): same helpers,
// same assembly, same validation shape.
//
// Not imported, not merged into seed.json, not published. No Postgres
// session was opened while authoring this file (see the corpus header, §D):
// every reused predecessor is cited by REFRAME import and by trail position
// read from the local `seed.json`'s units array, never by reusing another
// lesson’s item id.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   ONE ANCHOR TEXT, READ NINE TIMES. Every predecessor (c1.02, c1.03, c1.19)
//   taught one piece on its own extracts; c1.14 moved from reaction to
//   analysis but across twelve SEPARATE short texts, one move each. This
//   lesson instead reads a SINGLE full extract (Maupassant, « La Parure »,
//   opening, 705 words, corpus §B) through four lenses in turn (acts 2-5:
//   register, voice, structure, figure), then holds all four on the same
//   lines at once (act 6), then tells a complete, integrated reading apart
//   from a plausible-but-partial one (act 7), then names the fault that
//   produces a partial reading in the first place (act 8), then produces one
//   (act 9). Acts 1-9 share one cast (Léna, her seminar, Professeure Aubin,
//   Samuel) so the "fiche that only names one thing" problem from act 1
//   visibly resolves by act 9's model answer.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le problème : un fil     6  Léa's... no, Léna’s fragmented fiche;
//       à la fois                   the full extract, read once; the four
//                                   threads named; recap of c1.02/03/19/14
//    2  Le registre, en deux     6  narration soignée against dialogue oral,
//       voix                        inside the SAME extract
//    3  La voix narrative        6  discours direct / indirect libre; the
//                                   narrator's ironic distance
//    4  La structure : de        7  exposition (imparfait) vs basculement
//       l’exposition au             (passé simple); the text's own "or, un
//       basculement                 soir"; c1.02 cited for the adjacent tense
//    5  Les figures en réseau    5  anaphore, énumération, antithèse,
//                                   gradation, read for their combined effect
//    6  Les quatre fils          4  the combined reading grid, four threads
//       ensemble                    held on the same lines at once
//    7  Choisir la bonne         3  four plausible-but-partial readings
//       lecture                     against four integrated ones
//    8  Le piège qui arrête      3  naming a device and stopping there, the
//       l’analyse trop tôt          besetting fault this lesson corrects
//    9  Ta lecture intégrale    12  the model, the plan, the scenario, TASK,
//                                   quiz, review, roundup
//
//   TOTAL 50 missions, 9 acts (6,6,6,6,5,4,3,3,11). Corpus: 160 authored rows
//   (.2000-.2168 inside the claimed .2000-.2199 block; the full Maupassant
//   extract itself lives as EXTRACT_A/EXTRACT_B constants rather than corpus
//   rows, per the reading-text convention c1.14/c1.19 already use). Quiz: 8
//   rounds of 8 (32 mcq, 16 typeIn, 8 errorSpot, 8 listenChoose). Eight
//   error triggers, eight remediation drills, six reference sheets, nine
//   terms, three tapTables. Chapter artwork: `c2-litterature-image-
//   prompts.md`, 9 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Lire une œuvre, c’est tenir quatre fils ensemble : le registre, la
//   voix, la structure, la figure. » EN: Reading a work means holding four
//   threads together: register, voice, structure, figure.
//
//   ONE METAPHOR, LES QUATRE FILS. Mathilde's own fantasy is textile
//   (tentures orientales, soie ancienne, tapisseries); the lesson reuses that
//   image on purpose. Acts 2-5 hand the learner one thread at a time; act 6
//   holds all four on the same lines; acts 7-9 ask the learner to do the
//   same unprompted.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    reading a FULL literary extract as one integrated whole: the
//           narration/dialogue register split, discours direct vs indirect
//           libre and the narrator's ironic distance, the exposition's
//           imparfait giving way to the basculement's passé simple, four
//           figures read for their combined effect, a four-column reading
//           grid, and distinguishing a plausible-but-partial reading from an
//           integrated one.
//   QUOTES  c1.02's reframe (act 4), c1.03's (act 1), c1.19's (acts 1 and 5),
//           c1.14's (act 1), each imported from its own corpus file, never
//           retyped.
//   LEAVES  the passé antérieur itself to c1.02; the literary sequence of
//           moods to c1.03 (this extract carries no literary subjunctive, so
//           it is recapped once and never forced into new content); naming
//           ONE figure's effect, in isolation, to c1.19; reacting to a short
//           text and moving to analysis through form, on SEPARATE short
//           texts, to c1.14.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; the professor uses vous with her students in the
//   frame story. French only on the learner surface; English authored on
//   every `en` field and every trailing « EN: », never shown by default. No
//   em dash, no U+203F tie, never "honnête"/"honest". Typographic ’
//   throughout, including inside the quoted Maupassant (already typographic
//   in the Wikisource source). No spaced « ? » or « ! » in a scene or story
//   bubble. Citations by trail position in French words (« la leçon 14 du
//   C1 »), never a raw id. Mission answer slots are spread by
//   `balanceSlots()`; the quiz keeps its authored slots, scattered by hand.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 52 missions covers every sub-topic in the brief once, fully, with no
//      repeated material, but sits below c1.14's 79 and c1.19's 77. The
//      brief's richness rule reads "no padding" as the test, not a target
//      count — extend any single act before the phone review, or ship at
//      this size? (c2.01 shipped at 45 for the same reason.)
//   2. The anchor text stops mid-scene, on "Qu’as-tu ? qu’as-tu ?", before
//      Mathilde names the necklace itself. That is a deliberate cut: the
//      brief asks for register + voice + structure + figure integrated, not
//      full plot coverage, and the two scenes already give exposition AND a
//      narrative turn. Extend the extract to the necklace's first mention
//      instead, or keep this cut?
//   3. The task (act 9) marks the full four-thread integration in one
//      extended paragraph, closer to c1.14's shape than c2.01's two-part
//      task. A single five-criterion rubric follows c1.14/c1.19's pattern.
//      Split into two shorter tasks (one per half of the extract) instead?
//   4. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   5. No row is reused from c1.02/c1.03/c1.19/c1.14 by id (corpus §D): this
//      draft opened no Postgres session, so a cross-file id could not be
//      verified against the real published rows. Reuse specific rows by id
//      once the pre-review pass has Postgres access, or keep every example
//      freshly authored as this draft does?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion, TrapCard, TrapStep,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  EXTRACT_FULL, EXTRACT_FULL_EN, EXTRACT_A, EXTRACT_A_EN, SOURCE_NOTE,
  MODELE_ANALYSE, MODELE_ANALYSE_EN,
  C102_REF, C103_REF, C119_REF, C114_REF,
  C102_REFRAME, C102_REFRAME_EN, C103_REFRAME, C103_REFRAME_EN,
  C119_REFRAME, C119_REFRAME_EN, C114_REFRAME, C114_REFRAME_EN,
} from './analyse-litteraire-corpus.ts';
import { ANALYSE_LITTERAIRE_TERMS } from './analyse-litteraire-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as unknown as SrcItem]));

/** An item’s fr/en. Throws on a typo, so no section can name an id that
 *  does not exist in this lesson’s own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.02: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE "HOLD THE THREAD" BEAT: a short scene/dialogue between Léna and
 *  Samuel, refining a reading mid-lesson. */
function sceneAnalyse(id: string, title: string, bubbles: { from: 'coach' | 'user' | 'narrator'; fr: string; en: string }[]): Sec<'story'> {
  return {
    type: 'story', id, layer: 'core', title, setting: 'Le séminaire de littérature du jeudi, après la lecture.',
    bubbles, closing: { fr: REFRAME, en: REFRAME_EN },
    audio: AUDIO, say: REFRAME,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE PROBLÈME : UN FIL À LA FOIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une fiche qui ne tient qu’un fil', frSub: 'Le séminaire du jeudi',
  setting: { place: 'Le séminaire de littérature du jeudi', city: '', time: '14 h', ambience: 'une salle de séminaire, des fiches de lecture annotées, un extrait projeté au mur' },
  beats: [
    { kind: 'narration', text: "Le jeudi, Léna rend sa fiche de lecture sur l’ouverture d’un conte de Maupassant, « La Parure », avec Samuel et la professeure Aubin.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Léna', fr: src(E(2000)).fr, en: src(E(2000)).en, respell: '[eel ya ün a-na-FOR oh pa-ra-GRAF TRWA]', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Prof. Aubin', fr: src(E(2001)).fr, en: src(E(2001)).en, stage: 'La professeure lève les yeux de la fiche, sans reproche, mais sans se satisfaire de la réponse.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: "Samuel n’a pas fait mieux : il a nommé un temps verbal, sans dire ce que ce temps fait au récit.", size: 'md', audio: AUDIO },
    { kind: 'narration', text: `${src(E(2003)).fr} EN: ${src(E(2003)).en}`, size: 'md', audio: AUDIO },
    {
      kind: 'break', heading: 'Un fil à la fois ne suffit pas',
      body: `Nommer une figure, un temps, un registre, chacun séparément, n’est pas encore une analyse. EN: naming a figure, a tense, a register, each on its own, is not yet an analysis.`,
      wrong: { fr: 'Il y a une anaphore au paragraphe trois.', ipa: '/il i a yn a.na.fɔʁ o pa.ʁa.ɡʁaf tʁwa/', respell: '[eel ya ün a-na-FOR oh pa-ra-GRAF TRWA]', en: 'There is an anaphora in paragraph three.' },
      right: { fr: 'Une anaphore, en discours indirect libre, construit l’obsession de Mathilde.', ipa: '/yn a.na.fɔʁ ɑ̃ dis.kuʁ ɛ̃.di.ʁɛkt libʁ kɔ̃stʁɥi lɔb.sɛ.sjɔ̃/', respell: '[ün a-na-FOR ahⁿ dees-KOOR ehⁿ-dee-REKT LEEBR kohⁿ-STRWEE loh-bseh-SYOHⁿ]', en: 'An anaphora, in free indirect discourse, builds Mathilde’s obsession.' },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: "La professeure annonce : « À la fin du mois, chacun présente une analyse qui tient les quatre fils ensemble. » Cette leçon lit un seul extrait, en entier, pour apprendre exactement cela.", size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Lire un registre contre un autre, dans le même extrait', s: 'Acte 2 : la narration soignée, le dialogue oral' },
    { t: 'Suivre la voix narrative, pas seulement son contenu', s: 'Acte 3 : discours direct, indirect libre, distance ironique' },
    { t: 'Prouver une structure par un marqueur précis', s: 'Acte 4 : l’exposition, le basculement, le rythme' },
    { t: 'Tenir les quatre fils ensemble, puis le prouver', s: 'Actes 5 à 9 : les figures, la grille, le choix, le piège, ta lecture' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'L’ouverture de « La Parure »', frSub: 'Maupassant, 1884, texte intégral',
  text: EXTRACT_FULL,
  glossary: [
    { word: 'déclassée', en: 'fallen from her class', note: "Qui a perdu le rang social qu’elle croit mériter. EN: who has lost the social rank she believes she deserves." },
    { word: 'capitonnées', en: 'padded', note: "Rembourrées, matelassées, comme un fauteuil de luxe. EN: upholstered, cushioned, like a luxury armchair." },
    { word: 'calorifère', en: 'stove, central heating', note: "Un appareil de chauffage du dix-neuvième siècle. EN: a nineteenth-century heating device." },
    { word: 'bibelots', en: 'trinkets', note: "De petits objets décoratifs précieux. EN: small, precious decorative objects." },
    { word: 'gélinotte', en: 'hazel-hen', note: "Un oiseau de gibier fin, servi dans les grands dîners. EN: a fine game bird, served at grand dinners." },
    { word: 'balbutia', en: 'stammered', note: "Parla avec hésitation, cherchant ses mots. EN: spoke with hesitation, searching for words." },
    { word: 'bégaya', en: 'faltered', note: "Parla de façon saccadée, sous le coup de l’émotion. EN: spoke haltingly, overcome by emotion." },
  ],
  questions: [
    { q: "Devine le sens, sans dictionnaire : à quoi Mathilde pense-t-elle sans cesse, du premier au quatrième paragraphe.", a: "À un luxe qu’elle n’a jamais eu : antichambres, salons, dîners fins, bijoux, tout ce que son salaire de petit commis ne permet pas." },
    { q: "Que reçoit son mari un soir, et comment réagit Mathilde.", a: "Une invitation du ministère ; au lieu d’en être ravie, elle la jette avec dépit sur la table." },
    { q: "Le texte change-t-il de ton entre les deux parties, séparées par les trois astérisques.", a: "Oui : la première partie décrit un état qui dure ; la seconde raconte une soirée précise, puis bascule dans un dialogue oral." },
  ],
  audio: REC('rec-c2-02-extrait-complet'), say: REFRAME, terms: ['lectureintegrale'],
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core', sheetId: 'sheet-fils',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: C102_REFRAME, en: C102_REFRAME_EN, note: `${Cap(C102_REF)} : le passé antérieur dans la suite du récit` },
    { fr: C103_REFRAME, en: C103_REFRAME_EN, note: `${Cap(C103_REF)} : la concordance des modes dans un texte littéraire` },
    { fr: C119_REFRAME, en: C119_REFRAME_EN, note: `${Cap(C119_REF)} : nommer l’effet d’une figure` },
    { fr: C114_REFRAME, en: C114_REFRAME_EN, note: `${Cap(C114_REF)} : de l’émotion à l’analyse par la forme` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A1_FILS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a1-fils', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-fils',
  title: 'Les quatre fils', frSub: 'Une seule tapisserie',
  hint: 'Quatre cartes. Chaque fil, tiré seul, ne montre rien du dessin entier.',
  audio: REC('rec-c2-02-quatre-fils'), say: REFRAME, terms: ['lectureintegrale'],
  cards: [
    { head: 'Le registre', label: 'fil 1', fr: 'Soigné ou oral, selon la ligne', sub: '[luh ray-ZHEESTR]',
      body: "Comment une ligne est dite : soignée dans la narration, oral dans le dialogue, souvent les deux dans le même extrait. EN: how a line is said: careful in narration, oral in dialogue, often both in the same extract." },
    { head: 'La voix', label: 'fil 2', fr: 'Qui parle, et de quelle distance', sub: '[la vwa]',
      body: "Le narrateur juge, pense tout près d’un personnage, ou cède la parole : chaque choix construit ce que le lecteur croit savoir. EN: who speaks, and from what distance: each choice builds what the reader believes they know." },
    { head: 'La structure', label: 'fil 3', fr: "L’exposition, puis le basculement", sub: '[la strük-TÜR]',
      body: "Ce qui marque, dans la grammaire même du texte, qu’un état décrit cède la place à un événement raconté. EN: what marks, in the text's own grammar, that a described state gives way to a narrated event." },
    { head: 'La figure', label: 'fil 4', fr: 'Ce qu’elle fait, pas seulement son nom', sub: '[la fee-GÜR]',
      body: "Une anaphore, une énumération, une antithèse, une gradation : chacune construit un effet précis, jamais un simple ornement à nommer. EN: an anaphora, an enumeration, an antithesis, a gradation: each builds a precise effect, never a simple ornament to name." },
  ],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La fiche de Léna', 'Nommer une figure, sans dire son effet ni sa voix, est...', ['une analyse complète', 'un fil tiré seul'], 1,
    'Un fil tiré seul ne montre rien du dessin entier. EN: a single thread pulled alone shows nothing of the whole pattern.'),
  ctl('Le texte de cette leçon', 'L’extrait lu dans cette leçon est...', ['un seul extrait complet, lu en entier', 'douze courts extraits séparés'], 0,
    `À la différence de ${C114_REF}, qui liait douze textes courts, un par acte. EN: unlike the C1 lesson, which linked twelve short texts, one per act.`),
  ctl('La mission de cette leçon', 'Cette leçon t’apprend à...', ['tenir le registre, la voix, la structure et la figure ensemble', 'mémoriser le vocabulaire du dix-neuvième siècle'], 0,
    'Quatre fils, tenus ensemble, du premier au dernier acte. EN: four threads, held together, from the first act to the last.'),
], ['lectureintegrale']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le problème : un fil à la fois',
    opener: {
      line: "Léna nomme une anaphore et s’arrête là : ici tu lis l’extrait entier qu’elle n’a lu qu’à moitié, et tu commences à tenir ce qu’elle a laissé échapper. EN: Léna names an anaphora and stops there: here you read the whole extract she only half read, and start holding what she let slip.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act01.jpg',
    },
    sections: [],
    milestone: 'Tu as lu l’extrait intégral et tu sais ce que « tenir quatre fils ensemble » veut dire. EN: You have read the full extract and know what "holding four threads together" means.',
    estScreens: 26, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_ACQUIS, A1_FILS, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LE REGISTRE, EN DEUX VOIX
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-registre',
  title: 'Deux registres, un même extrait', frSub: 'La narration, puis le dialogue',
  hint: 'Quatre cartes. Le texte ne change jamais d’auteur ; il change de registre.',
  audio: REC('rec-c2-02-deux-registres'), say: REFRAME, terms: ['registre'],
  cards: [
    { head: 'Narration, soignée', label: 'exposition', fr: src(E(2014)).fr, sub: '[luhr soo-PLES deh-SPREE]',
      body: "La narration choisit un vocabulaire abstrait et soigné pour décrire Mathilde de l’extérieur. EN: the narration chooses an abstract, careful vocabulary to describe Mathilde from outside." },
    { head: 'Narration, presque littéraire', label: 'exposition', fr: src(E(2015)).fr, sub: '[ahⁿ-tee-shahⁿbr müet]',
      body: "Les listes de luxe rêvé restent, elles aussi, dans un registre soigné, même quand elles détaillent des objets concrets. EN: the lists of dreamed luxury also stay in a careful register, even while detailing concrete objects." },
    { head: 'Dialogue, oral', label: 'scène de l’enveloppe', fr: src(E(2016)).fr, sub: '[tyen dee-teel VWA-see kel-kuh-SHOHZ]',
      body: "Le mari parle en phrases courtes, familières, loin du vocabulaire de la narration qui précède. EN: the husband speaks in short, casual sentences, far from the narration’s vocabulary before it." },
    { head: 'Dialogue, oral, cassant', label: 'la réaction de Mathilde', fr: src(E(2017)).fr, sub: '[kuh vuh-TÜ kuh zhuh FASS duh suh-LA]',
      body: "La réaction de Mathilde garde le même registre oral que son mari, même si le ton, lui, change du tout au tout. EN: Mathilde’s reaction keeps the same oral register as her husband, even as the tone itself changes completely." },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-registre',
  title: 'Narration ou dialogue, ligne par ligne',
  cols: ['Ligne', 'Registre', 'Pourquoi'],
  rows: [
    { cells: [src(E(2014)).fr, 'soigné (narration)', 'un nom abstrait, "hiérarchie", jugé de l’extérieur'], say: src(E(2014)).fr,
      detail: { title: 'La hiérarchie des femmes', body: 'La phrase généralise, loin de toute parole d’un personnage. EN: the sentence generalises, far from any character’s own speech.', say: src(E(2014)).fr } },
    { cells: [src(E(2018)).fr, 'oral (dialogue)', 'une question directe, familière, de Mathilde elle-même'], say: src(E(2018)).fr,
      detail: { title: 'Que mettre sur le dos', body: 'Mathilde parle elle-même, dans sa propre voix orale, pas celle du narrateur. EN: Mathilde speaks in her own oral voice, not the narrator’s.', say: src(E(2018)).fr } },
    { cells: [src(E(2019)).fr, 'oral (dialogue)', 'une exclamation familière, "le bon pot-au-feu"'], say: src(E(2019)).fr,
      detail: { title: 'Le pot-au-feu du mari', body: 'Le mari parle avec un plaisir simple, dans un registre loin de celui de la narration. EN: the husband speaks with simple pleasure, in a register far from the narration’s.', say: src(E(2019)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a2-exemples', layer: 'core', title: 'La règle du registre',
  examples: [
    ex(E(2020), 'deux registres, un même extrait, aucune règle de grammaire qui change'),
    ex(E(2023), 'un même texte, deux registres'),
    ex(E(2024), "ce que chaque registre fait au lecteur"),
    ex(E(2025), 'repérer ne suffit pas'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Classe chaque ligne par registre', frSub: 'Narration ou dialogue',
  groups: [
    grp('La narration', [
      it(E(2014), 'soigné : un jugement abstrait'),
      it(E(2015), 'soigné : une liste rêvée'),
      it(E(2021), 'analyse : pourquoi c’est soigné'),
    ], chk('Ces trois lignes appartiennent toutes au registre...', ['oral', 'soigné'], 1,
      'Aucune n’appartient à la parole d’un personnage. EN: none belongs to a character’s own speech.')),
    grp('Le dialogue', [
      it(E(2016), 'oral : une phrase courte du mari'),
      it(E(2017), 'oral : une question de Mathilde'),
      it(E(2022), 'analyse : pourquoi c’est oral'),
    ], chk('Ces trois lignes appartiennent toutes au registre...', ['soigné', 'oral'], 1,
      'Chacune appartient à la parole directe d’un personnage. EN: each belongs to a character’s own direct speech.')),
    ctl('Le mélange', '« Qu’as-tu ? qu’as-tu ? », répété, sonne...', ['soigné, comme la narration autour', 'oral et affolé, loin du calme qui l’entoure'], 1,
      'La répétition orale tranche avec le calme de la narration. EN: the oral repetition cuts against the narration’s calm around it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A2_SCENE = sceneAnalyse('a2-scene', 'Le registre n’appartient pas qu’à Mathilde', [
  { from: 'user', fr: src(E(2034)).fr, en: src(E(2034)).en },
  { from: 'coach', fr: src(E(2035)).fr, en: src(E(2035)).en },
  { from: 'user', fr: src(E(2036)).fr, en: src(E(2036)).en },
]);
A2_SCENE.terms = ['registre'];

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Deux registres', 'La narration et le dialogue de cet extrait sont...', ['toujours au même registre', 'à deux registres différents, sans règle de grammaire changée'], 1,
    'Le registre change sans qu’aucune règle grammaticale ne change. EN: the register changes with no grammar rule changing.'),
  ctl('Ce que le registre fait', 'Le registre soigné de la narration juge Mathilde...', ['de près, dans l’instant', 'de loin'], 1,
    'Le registre oral du dialogue, lui, la montre de près. EN: the dialogue’s oral register, by contrast, shows her up close.'),
  ctl('L’erreur de Samuel', 'Croire que le registre soigné appartient à Mathilde seule est une erreur, car il appartient en fait à...', ['la narration, où qu’elle parle', 'seulement aux personnages riches'], 0,
    'Le registre dépend de QUI parle dans le texte, narrateur ou personnage. EN: register depends on WHO speaks in the text, narrator or character.'),
], ['registre']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le registre, en deux voix',
    opener: {
      line: "La narration juge Mathilde dans un registre soigné ; son mari lui parle dans un registre oral : ici tu apprends à lire les deux dans le même extrait. EN: The narration judges Mathilde in a careful register; her husband speaks to her in an oral one: here you learn to read both in the same extract.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act02.jpg',
    },
    sections: [],
    milestone: 'Tu distingues le registre soigné de la narration du registre oral du dialogue, dans le même extrait. EN: You can tell the narration’s careful register apart from the dialogue’s oral one, in the same extract.',
    estScreens: 24, restPoints: ['a2-table', 'a2-groupe'],
  },
  sections: [A2_DECK, A2_TABLE, A2_EXEMPLES, A2_GROUPE, A2_SCENE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA VOIX NARRATIVE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-voix',
  title: 'Qui parle, et de quelle distance', frSub: 'Discours direct, indirect libre, jugement',
  hint: 'Trois cartes. La même phrase ne se lit pas pareil selon qui la porte.',
  audio: REC('rec-c2-02-voix-narrative'), say: REFRAME, terms: ['voixnarrative'],
  cards: [
    { head: 'Le jugement du narrateur', label: 'distance', fr: src(E(2040)).fr, sub: '[ehl füt sehⁿpl]',
      body: "Ce n’est pas la pensée de Mathilde : c’est le narrateur qui juge, de l’extérieur, sans jamais tout à fait l’excuser. EN: this is not Mathilde’s own thought; it is the narrator judging from outside, never quite excusing her." },
    { head: 'La pensée, sans annonce', label: 'discours indirect libre', fr: src(E(2042)).fr, sub: '[ehl sohⁿ-ZHEH oh grahⁿ sa-LOHⁿ]',
      body: "Aucun verbe déclaratif n’annonce chaque pensée : la voix du narrateur se mêle à celle de Mathilde. EN: no reporting verb announces each thought; the narrator’s voice blends with Mathilde’s." },
    { head: 'La parole, citée', label: 'discours direct', fr: src(E(2054)).fr, sub: '[tyen dee-teel]',
      body: "Les mots exacts du mari, entre tirets, sans filtre du narrateur. EN: the husband’s exact words, marked by a dash, with no narrator filter." },
  ],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core', title: 'La règle de la voix', sheetId: 'sheet-voix',
  examples: [
    ex(E(2044), 'rapporter une pensée, ou la laisser parler'),
    ex(E(2046), 'le discours indirect libre, de près'),
    ex(E(2055), 'direct sans filtre, indirect libre avec un filtre discret'),
    ex(E(2059), 'le choix de qui parle construit le personnage'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['voixnarrative'],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', size: 'lg',
  title: 'Quelle voix porte cette ligne', frSub: 'Jugement, pensée, parole',
  groups: [
    grp('Le jugement du narrateur', [
      it(E(2040), 'un jugement, de l’extérieur'),
      it(E(2041), 'une maxime, généralisée'),
    ], chk('Ces deux lignes jugent Mathilde depuis...', ['sa propre pensée', 'une position extérieure, celle du narrateur'], 1,
      'Aucune des deux n’est annoncée comme la pensée de Mathilde. EN: neither is marked as Mathilde’s own thought.')),
    grp('La pensée, sans annonce', [
      it(E(2042), 'un rêve, en discours indirect libre'),
      it(E(2043), 'un désir, en discours indirect libre'),
    ], chk('Ces deux lignes rapprochent le lecteur de la pensée de...', ['Mathilde elle-même', 'son mari'], 0,
      'Le discours indirect libre colle à la conscience de Mathilde. EN: free indirect discourse sticks close to Mathilde’s own consciousness.')),
    ctl('La parole citée', '« Tiens, dit-il, voici quelque chose pour toi » est un exemple de...', ['discours indirect libre', 'discours direct'], 1,
      'Les mots exacts du mari, cités, sans filtre. EN: the husband’s exact words, quoted, with no filter.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['voixnarrative'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a3-ecoute', layer: 'core', hideLines: true,
  title: 'Quelle voix entends-tu', frSub: 'Six lignes, trois voix',
  lines: [ln(E(2040)), ln(E(2042)), ln(E(2054)), ln(E(2041)), ln(E(2043)), ln(E(2016))],
  questions: [
    { q: 'Première ligne : le jugement du narrateur, ou la pensée de Mathilde.', opts: ['le jugement du narrateur', 'la pensée de Mathilde'], correct: 0,
      why: '« Elle fut simple... malheureuse comme une déclassée » juge de l’extérieur. EN: it judges from outside.' },
    { q: 'Deuxième ligne : discours indirect libre, ou discours direct.', opts: ['discours indirect libre', 'discours direct'], correct: 0,
      why: 'Aucun tiret, aucune citation exacte : la pensée de Mathilde, sans annonce. EN: no dash, no exact quotation: Mathilde’s thought, unannounced.' },
    { q: 'Troisième ligne : discours indirect libre, ou discours direct.', opts: ['discours indirect libre', 'discours direct'], correct: 1,
      why: 'Les mots exacts du mari, entre tirets. EN: the husband’s exact words, marked by a dash.' },
  ],
  audio: REC('rec-c2-02-voix-ecoute'), say: REFRAME, terms: ['voixnarrative'],
};

const A3_SCENE = sceneAnalyse('a3-scene', 'Confondre la voix avec une description neutre', [
  { from: 'narrator', fr: 'Samuel confond souvent le discours indirect libre avec la narration neutre.', en: 'Samuel often confuses free indirect discourse with neutral narration.' },
  { from: 'user', fr: src(E(2057)).fr, en: src(E(2057)).en },
  { from: 'coach', fr: src(E(2061)).fr, en: src(E(2061)).en },
]);
A3_SCENE.terms = ['distanceironique'];

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Trois voix', 'Ce texte fait entendre...', ['une seule voix, toujours la même', 'trois voix : le jugement, la pensée proche, la parole citée'], 1,
    'Le narrateur juge, pense tout près, ou cède la parole. EN: the narrator judges, thinks up close, or hands over the floor.'),
  ctl('Le discours indirect libre', 'Ce procédé se repère par...', ['un tiret et des mots exacts', 'l’absence de verbe déclaratif annonçant chaque pensée'], 1,
    'Aucun "elle pensa que" n’annonce la pensée qui suit. EN: no "she thought that" announces the thought that follows.'),
  ctl('La distance ironique', 'Le jugement du narrateur sur Mathilde...', ['l’excuse entièrement', 'nomme sa souffrance sans jamais tout à fait l’excuser'], 1,
    'Cette distance empêche une lecture purement morale. EN: this distance blocks a purely moral reading.'),
], ['voixnarrative']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La voix narrative',
    opener: {
      line: "Le narrateur juge Mathilde de loin, puis pense tout près d’elle, puis lui laisse la parole : ici tu apprends à suivre ces trois voix une à une. EN: The narrator judges Mathilde from afar, then thinks right beside her, then hands her the floor: here you learn to follow these three voices one by one.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act03.jpg',
    },
    sections: [],
    milestone: 'Tu distingues le jugement du narrateur, le discours indirect libre et le discours direct, et tu lis la distance ironique entre les deux premiers. EN: You can tell the narrator’s judgement, free indirect discourse and direct speech apart, and read the ironic distance between the first two.',
    estScreens: 26, restPoints: ['a3-groupe', 'a3-ecoute'],
  },
  sections: [A3_DECK, A3_EXEMPLES, A3_GROUPE, A3_ECOUTE, A3_SCENE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA STRUCTURE : DE L’EXPOSITION AU BASCULEMENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-structure',
  title: "L’exposition, puis le basculement", frSub: 'Un marqueur, pas une impression',
  hint: 'Trois cartes. La structure se lit dans la grammaire, pas dans un résumé.',
  audio: REC('rec-c2-02-structure'), say: REFRAME, terms: ['structure'],
  cards: [
    { head: "L’exposition", label: 'imparfait', fr: src(E(2065)).fr, sub: '[ehl soo-FREH sahⁿ SESS]',
      body: "Six paragraphes, presque entièrement à l’imparfait : un état qui dure, se répète, ne change pas. EN: six paragraphs, almost entirely in the imparfait: a lasting, repeating, unchanging state." },
    { head: 'Le basculement', label: 'passé simple', fr: src(E(2066)).fr, sub: '[or uhⁿ swar sohⁿ ma-REE rahⁿ-TRA]',
      body: "« Or, un soir » annonce, avant même le verbe, qu’un événement daté va interrompre l’état décrit. EN: \"Or, un soir\" announces, even before the verb, that a dated event is about to interrupt the described state." },
    { head: 'Le rythme qui accélère', label: 'passé simple enchaîné', fr: src(E(2067)).fr, sub: '[ehl day-shee-RA veev-MAHⁿ luh pa-PYAY]',
      body: "Les verbes au passé simple s’enchaînent : des actions ponctuelles, plus rapides que l’imparfait qui précède. EN: passé simple verbs chain together: single actions, faster than the imparfait before them." },
  ],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a4-table', layer: 'core', sheetId: 'sheet-structure',
  title: 'Le temps du verbe, le rôle dans le récit',
  cols: ['Verbe', 'Temps', 'Rôle'],
  rows: [
    { cells: ['souffrait', 'imparfait', 'un état qui dure, dans l’exposition'], say: src(E(2065)).fr,
      detail: { title: 'La douleur qui dure', body: "L’imparfait dit la répétition, pas un moment précis. EN: the imparfait says repetition, not one precise moment.", say: src(E(2065)).fr } },
    { cells: ['rentra', 'passé simple', 'l’événement qui bascule le récit'], say: src(E(2066)).fr,
      detail: { title: 'Le soir de l’enveloppe', body: 'Un verbe daté, unique, qui brise la répétition. EN: a dated, single verb that breaks the repetition.', say: src(E(2066)).fr } },
    { cells: ['déchira, tira', 'passé simple', 'des actions ponctuelles, qui accélèrent le rythme'], say: src(E(2067)).fr,
      detail: { title: 'Le papier, la carte', body: 'Une suite d’actions rapides, après le basculement. EN: a sequence of fast actions, after the turn.', say: src(E(2067)).fr } },
    { cells: ['pleurait', 'imparfait', 'retour à la durée, à la fin de l’exposition'], say: src(E(2068)).fr,
      detail: { title: 'Les jours entiers à pleurer', body: 'L’imparfait referme l’exposition sur elle-même, avant le basculement. EN: the imparfait closes the exposition on itself, before the turn.', say: src(E(2068)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['structure'],
};

const A4_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-groupe', layer: 'core', size: 'lg',
  title: 'Exposition ou basculement', frSub: 'Repère le marqueur exact',
  groups: [
    grp('L’exposition, à l’imparfait', [
      it(E(2065), 'souffrait : un état qui dure'),
      it(E(2068), 'pleurait : retour à la durée'),
      it(E(2071), 'analyse : le sens de l’imparfait ici'),
    ], chk('Ces trois lignes appartiennent à...', ['au basculement', "à l’exposition"], 1,
      'Toutes trois sont à l’imparfait, un temps de répétition. EN: all three are in the imparfait, a tense of repetition.')),
    grp('Le basculement, au passé simple', [
      it(E(2066), 'rentra : un événement daté'),
      it(E(2072), 'analyse : ce que ce verbe brise'),
      it(E(2073), "« or » et « un soir », avant même le verbe"),
    ], chk('Ces trois éléments marquent...', ["la fin de l’exposition", 'la suite de l’exposition'], 0,
      'Le marqueur précède et annonce le basculement. EN: the marker precedes and announces the turn.')),
    ctl('Le rythme', 'Après le basculement, le rythme du récit...', ['reste identique à l’exposition', 'accélère, avec des verbes ponctuels enchaînés'], 1,
      'L’imparfait cède au passé simple, et le rythme change avec lui. EN: the imparfait gives way to the passé simple, and the pace changes with it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['structure'],
};

const A4_RECAP: Sec<'examples'> = {
  type: 'examples', id: 'a4-recap', layer: 'core', title: 'Un temps voisin, déjà connu',
  examples: [
    { fr: C102_REFRAME, en: C102_REFRAME_EN, note: `${Cap(C102_REF)} : le passé antérieur, un temps voisin, jamais celui-ci` },
    ex(E(2070), 'un temps verbal comme signal de structure, pas seulement de temps'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['structure'],
};

const A4_SCENE = sceneAnalyse('a4-scene', 'Trois vitesses, trois fonctions', [
  { from: 'user', fr: src(E(2082)).fr, en: src(E(2082)).en },
  { from: 'coach', fr: src(E(2086)).fr, en: src(E(2086)).en },
  { from: 'narrator', fr: src(E(2087)).fr, en: src(E(2087)).en },
]);
A4_SCENE.terms = ['structure'];

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’exposition', 'L’exposition de cet extrait est marquée surtout par...', ['le passé simple', "l’imparfait, un temps de répétition"], 1,
    'Souffrait, songeait, pleurait : tous à l’imparfait. EN: souffrait, songeait, pleurait: all in the imparfait.'),
  ctl('Le basculement', 'Le basculement narratif tombe sur...', ['« Or, un soir, son mari rentra »', '« Elle songeait aux dîners fins »'], 0,
    'Un événement daté, au passé simple, après « or, un soir ». EN: a dated event, in the passé simple, after "or, un soir".'),
  ctl('La preuve', 'Prouver une structure demande...', ['une impression générale sur l’histoire', 'un marqueur précis : un temps, un mot, une coupure'], 1,
    'Jamais une impression générale seule. EN: never a general impression alone.'),
], ['structure']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: "La structure : de l’exposition au basculement",
    opener: {
      line: "Six paragraphes à l’imparfait, puis un seul « or, un soir » : ici tu apprends à lire la structure dans la grammaire même du texte. EN: Six paragraphs in the imparfait, then a single \"or, un soir\": here you learn to read structure in the text's own grammar.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act04.jpg',
    },
    sections: [],
    milestone: 'Tu prouves une structure narrative par un marqueur précis, jamais par une impression générale. EN: You can prove a narrative structure with a precise marker, never a general impression.',
    estScreens: 28, restPoints: ['a4-table', 'a4-groupe'],
  },
  sections: [A4_DECK, A4_TABLE, A4_GROUPE, A4_RECAP, A4_SCENE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LES FIGURES EN RÉSEAU
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-figures',
  title: 'Quatre figures, un effet cumulé', frSub: 'Anaphore, énumération, antithèse, gradation',
  hint: 'Quatre cartes. Chacune fait un travail précis, jamais un simple ornement.',
  audio: REC('rec-c2-02-figures'), say: REFRAME, terms: ['anaphore', 'enumeration'],
  cards: [
    { head: "L’anaphore", label: 'elle songeait aux…', fr: src(E(2090)).fr, sub: '[ehl sohⁿ-ZHEH oh]',
      body: "Répétée quatre fois, elle construit l’obsession plus que chaque rêve pris isolément. EN: repeated four times, it builds obsession more than any single dream alone." },
    { head: "L’énumération", label: 'pas de dot, pas d’espérances…', fr: src(E(2091)).fr, sub: '[pa duh DOH pa deh-spay-RAHⁿSS]',
      body: "Chaque manque s’ajoute au précédent, sans qu’aucun seul explique son malheur. EN: each lack adds to the one before it, with no single one explaining her unhappiness." },
    { head: "L’antithèse", label: 'simple… mais malheureuse', fr: src(E(2092)).fr, sub: '[ehl füt sehⁿpl]',
      body: "Un fait social et un sentiment, tenus ensemble, alors qu’on attendrait l’un sans l’autre. EN: a social fact and a feeling, held together, where one would expect only the first." },
    { head: 'La gradation, ici', label: 'chagrin, regret, désespoir, détresse', fr: src(E(2093)).fr, sub: '[ay ehl play-REH pahⁿ-DAHⁿ day ZHOOR ahⁿ-TYAY]',
      body: "Quatre mots pour une même douleur, chacun plus fort que le précédent. EN: four words for the same pain, each stronger than the one before it." },
  ],
};

const A5_RECAP: Sec<'examples'> = {
  type: 'examples', id: 'a5-recap', layer: 'core', title: 'Au-delà de nommer une figure seule',
  examples: [
    { fr: C119_REFRAME, en: C119_REFRAME_EN, note: `${Cap(C119_REF)} : nommer la figure, dire son effet, une à la fois` },
    ex(E(2103), 'ici, les quatre fils se croisent déjà dans une seule phrase'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['anaphore', 'antithese'],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', size: 'lg',
  title: 'Nomme la figure, puis son effet', frSub: 'Jamais l’une sans l’autre',
  groups: [
    grp('L’anaphore', [
      it(E(2090), 'trois reprises de « elle songeait aux »'),
      it(E(2095), 'l’effet : une obsession, pas un simple goût'),
    ], chk('L’anaphore construit surtout...', ['une liste neutre de goûts', 'une obsession qui ne peut pas s’arrêter'], 1,
      'La répétition dépasse la simple liste. EN: the repetition goes beyond a simple list.')),
    grp("L’énumération et l’antithèse", [
      it(E(2091), 'trois manques, additionnés'),
      it(E(2092), 'simple, mais malheureuse'),
    ], chk('L’antithèse de cette phrase oppose...', ['deux mots sans rapport', 'un fait social et un sentiment'], 1,
      'Simple (fait social) contre malheureuse (sentiment). EN: plain (social fact) against unhappy (feeling).')),
    ctl('La gradation', '« Chagrin, regret, désespoir, détresse » dit que Mathilde pleure...', ['une seule fois, simplement', 'de plus en plus profondément'], 1,
      'Quatre mots, une intensité croissante. EN: four words, a rising intensity.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['anaphore', 'enumeration'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', title: 'Nommer sans dire l’effet',
  errors: [
    { wrong: 'L’anaphore montre juste que Mathilde aime le luxe.', right: 'L’anaphore, en discours indirect libre, montre un désir si répété qu’il tient lieu de pensée permanente.', why: src(E(2109)).fr },
    { wrong: 'L’antithèse est juste une figure de style parmi d’autres.', right: 'L’antithèse oppose un fait social (simple) à un sentiment (malheureuse), dans une seule phrase.', why: src(E(2106)).fr },
    { wrong: 'La gradation dit juste qu’elle pleure.', right: 'La gradation dit qu’elle pleure de plus en plus profondément, mot après mot.', why: src(E(2105)).fr },
  ],
  audio: AUDIO, say: REFRAME, terms: ['enumeration', 'lectureintegrale'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Quatre figures', 'Ce passage tient ensemble...', ['une seule figure, répétée quatre fois', 'quatre figures différentes, pour un même effet cumulé'], 1,
    'Anaphore, énumération, antithèse, gradation, ensemble. EN: anaphora, enumeration, antithesis, gradation, together.'),
  ctl('L’effet d’une figure', 'Une figure de style...', ['contient son effet, seule, indépendamment du reste', 'construit un effet qu’il faut dire, pas seulement nommer'], 1,
    'Le nom d’une figure n’est jamais la fin de l’analyse. EN: a figure’s name is never the end of the analysis.'),
  ctl('La bonne lecture de l’anaphore', 'La bonne lecture ajoute toujours...', ['un mot que la figure, seule, ne dit pas', 'rien, le nom de la figure suffit'], 0,
    'Ici, « ne peut pas s’arrêter », que l’anaphore seule ne dit pas. EN: here, "cannot stop", which the anaphora alone does not say.'),
], ['anaphore', 'gradation']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les figures en réseau',
    opener: {
      line: "Quatre figures, dans un même paragraphe, construisent un seul désir trop grand pour s’arrêter : ici tu apprends à les lire ensemble, jamais une seule à la fois. EN: Four figures, in the same paragraph, build one single desire too large to stop: here you learn to read them together, never one at a time.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act05.jpg',
    },
    sections: [],
    milestone: 'Tu nommes une figure de style ET son effet exact, jamais l’une sans l’autre. EN: You can name a figure of style AND its exact effect, never one without the other.',
    estScreens: 24, restPoints: ['a5-groupe'],
  },
  sections: [A5_DECK, A5_RECAP, A5_GROUPE, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LES QUATRE FILS ENSEMBLE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_INTRO: Sec<'examples'> = {
  type: 'examples', id: 'a6-intro', layer: 'core', title: 'Une grille à quatre colonnes',
  examples: [
    ex(E(2112), 'une grille qui tient, pour une ligne, ses quatre fils'),
    ex(E(2118), 'même absent, un fil reste un fil à vérifier'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-table', layer: 'core', sheetId: 'sheet-grille',
  title: 'La grille, remplie pour quatre lignes',
  cols: ['Ligne', 'Registre', 'Voix', 'Structure · figure'],
  rows: [
    { cells: [src(E(2015)).fr, 'soigné', 'discours indirect libre', 'exposition · anaphore'], say: src(E(2015)).fr,
      detail: { title: 'Les antichambres rêvées', body: src(E(2113)).fr + ' EN: ' + src(E(2113)).en, say: src(E(2015)).fr } },
    { cells: [src(E(2066)).fr, 'courant', 'narrateur extérieur', "basculement · le marqueur « or »"], say: src(E(2066)).fr,
      detail: { title: 'Le soir de l’enveloppe', body: src(E(2114)).fr + ' EN: ' + src(E(2114)).en, say: src(E(2066)).fr } },
    { cells: [src(E(2016)).fr, 'oral', 'discours direct', 'dialogue · aucune figure'], say: src(E(2016)).fr,
      detail: { title: 'Une phrase nue, après l’anaphore', body: src(E(2116)).fr + ' EN: ' + src(E(2116)).en, say: src(E(2016)).fr } },
    { cells: [src(E(2017)).fr, 'oral', 'discours direct', 'dialogue · une question qui refuse'], say: src(E(2017)).fr,
      detail: { title: 'Le dos de Mathilde', body: src(E(2117)).fr + ' EN: ' + src(E(2117)).en, say: src(E(2017)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A6_GRILLE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-grille', layer: 'core', size: 'lg',
  title: 'Complète la grille, pas une seule colonne', frSub: 'Les quatre fils, sur la même ligne',
  groups: [
    grp('Une ligne, quatre fils', [
      it(E(2113), 'la ligne, avec ses quatre fils déjà donnés'),
      it(E(2119), 'ce que la grille sert à vérifier'),
    ], chk('La grille sert surtout à...', ['remplacer l’analyse écrite', "vérifier qu’aucun des quatre fils n’a été oublié"], 1,
      'La grille vérifie, elle ne remplace rien. EN: the grid checks, it replaces nothing.')),
    grp('L’absence comme effet', [
      it(E(2115), 'une ligne sans figure, juste après l’anaphore'),
      it(E(2116), 'ce que cette absence construit'),
    ], chk('L’absence de figure, juste après l’anaphore, est...', ['un oubli de l’auteur', 'un effet : le réel, soudain, sans ornement'], 1,
      'Même une absence de figure est un fil à tenir. EN: even the absence of a figure is a thread to hold.')),
    ctl('Samuel et sa grille', 'Samuel remplit sa grille sans la colonne « voix » : sa lecture reste...', ['fausse', 'vraie mais incomplète'], 1,
      'Une grille incomplète ne devient pas fausse, seulement incomplète. EN: an incomplete grid does not become wrong, only incomplete.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La grille', 'Une grille à quatre colonnes tient, pour une seule ligne...', ['un seul fil, le plus visible', 'son registre, sa voix, sa structure et sa figure'], 1,
    'Les quatre colonnes, pour la même ligne. EN: all four columns, for the same line.'),
  ctl('L’extrait entier', "La grille appliquée à l’extrait entier montre...", ["un texte uniforme du début à la fin", 'un mouvement : soigné puis oral, indirect libre puis direct'], 1,
    'Ce mouvement, et non un seul procédé, construit le sens. EN: that movement, not a single device, builds the meaning.'),
  ctl('Le travail de l’acte 6', 'Tenir les quatre fils pour une seule ligne...', ['prend moins de temps que d’en nommer un seul', 'prend plus de temps, et c’est exactement le travail de cette leçon'], 1,
    'Plus long, mais c’est précisément ce que la leçon enseigne. EN: longer, but exactly what this lesson teaches.'),
], ['lectureintegrale']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Les quatre fils ensemble',
    opener: {
      line: "La même ligne porte toujours ses quatre fils à la fois, même quand l’un d’eux est absent plutôt que présent : ici tu apprends à les tenir tous ensemble. EN: The same line always carries all four of its threads at once, even when one of them is absent rather than present: here you learn to hold them all together.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act06.jpg',
    },
    sections: [],
    milestone: 'Tu remplis une grille qui tient le registre, la voix, la structure et la figure, pour une même ligne, à la fois. EN: You can fill a grid that holds register, voice, structure and figure, for the same line, all at once.',
    estScreens: 22, restPoints: ['a6-table'],
  },
  sections: [A6_INTRO, A6_TABLE, A6_GRILLE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — CHOISIR LA BONNE LECTURE
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-choisir', layer: 'core', size: 'lg',
  title: 'Une lecture plausible, une lecture intégrale', frSub: 'Compte les fils que chacune tient',
  groups: [
    ctl('L’anaphore', 'Entre ces deux lectures de l’anaphore, laquelle tient le plus de fils.', [src(E(2125)).fr, src(E(2126)).fr], 1,
      'La seconde relie l’anaphore à sa voix (discours indirect libre) et à son effet exact. EN: the second links the anaphora to its voice (free indirect discourse) and its exact effect.'),
    ctl('Le dialogue', 'Entre ces deux lectures du dialogue, laquelle tient le plus de fils.', [src(E(2127)).fr, src(E(2128)).fr], 1,
      'La seconde relie le registre oral du dialogue à la structure qui l’annonçait. EN: the second links the dialogue’s oral register to the structure that announced it.'),
    ctl('Le passé simple', 'Entre ces deux lectures du passé simple, laquelle tient le plus de fils.', [src(E(2129)).fr, src(E(2130)).fr], 1,
      'La seconde relie le temps verbal à l’imparfait qui le précède, pas seulement à son sens. EN: the second links the tense to the imparfait before it, not only to its meaning.'),
    ctl('Mathilde', 'Entre ces deux lectures de Mathilde, laquelle tient le plus de fils.', [src(E(2131)).fr, src(E(2132)).fr], 1,
      'La seconde relie son jugement moral à la distance ironique du narrateur. EN: the second links a moral judgement to the narrator’s ironic distance.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a7-focus', layer: 'core', title: 'Ce qui rend un distracteur plausible',
  points: [
    'Un distracteur bien construit n’est jamais absurde : il tient un vrai fil, mais un seul.',
    'Une lecture plausible n’est pas fausse mot à mot ; elle est incomplète.',
    'Choisis toujours la lecture qui croise le plus de fils, pas celle qui « sonne juste ».',
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Un distracteur plausible', 'Une lecture plausible mais partielle...', ['est fausse mot à mot', 'tient un seul fil, vrai, mais incomplet'], 1,
    'Vraie, mais incomplète : c’est le piège exact. EN: true, but incomplete: that is the exact trap.'),
  ctl('Le bon choix', 'Entre deux lectures plausibles, la meilleure est celle qui...', ['utilise le vocabulaire le plus soutenu', 'tient le plus de fils ensemble'], 1,
    'Le vocabulaire ne remplace jamais l’intégration des quatre fils. EN: vocabulary never replaces integrating the four threads.'),
  ctl('Avant de trancher', 'Avant de choisir une lecture, il faut...', ['compter les fils que chacune tient réellement', 'choisir la plus longue des deux'], 0,
    'La longueur ne dit rien de l’intégration. EN: length says nothing about integration.'),
], ['lectureintegrale']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Choisir la bonne lecture',
    opener: {
      line: "Deux lectures de la même ligne, toutes deux vraies, mais une seule tient tous les fils : ici tu apprends à choisir laquelle. EN: Two readings of the same line, both true, but only one holds every thread: here you learn to choose which.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act07.jpg',
    },
    sections: [],
    milestone: 'Tu choisis, entre deux lectures plausibles d’une même ligne, celle qui tient le registre, la voix, la structure et la figure ensemble. EN: You can choose, between two plausible readings of the same line, the one that holds register, voice, structure and figure together.',
    estScreens: 18, restPoints: [],
  },
  sections: [A7_CHOISIR, A7_FOCUS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE PIÈGE QUI ARRÊTE L’ANALYSE TROP TÔT
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_PIEGE_CARDS: TrapCard[] = [
  { promptLabel: 'nommer une figure, s’arrêter là', promptSound: src(E(2140)).fr, fr: 'Une anaphore, en discours indirect libre, construit une obsession.', ipa: '/yn a.na.fɔʁ ɑ̃ dis.kuʁ ɛ̃.di.ʁɛkt libʁ kɔ̃stʁɥi yn ɔb.sɛ.sjɔ̃/', tip: src(E(2146)).fr },
  { promptLabel: 'décrire un registre seul', promptSound: src(E(2141)).fr, fr: 'Le registre soigné de la narration se lit contre le registre oral du dialogue.', ipa: '/lə ʁe.ʒistʁ swa.ɲe də la na.ʁa.sjɔ̃ sə li kɔ̃tʁ lə ʁe.ʒistʁ ɔ.ʁal dy dja.lɔɡ/', tip: src(E(2146)).fr },
  { promptLabel: 'repérer un temps, sans effet', promptSound: src(E(2142)).fr, fr: 'Le passé simple marque le basculement, et accélère le rythme du récit.', ipa: '/lə pa.se sɛ̃pl maʁk lə bas.kyl.mɑ̃ e ak.se.leʁ lə ʁitm dy ʁe.si/', tip: src(E(2146)).fr },
  { promptLabel: 'traiter la voix comme neutre', promptSound: src(E(2143)).fr, fr: 'Le discours indirect libre colle à la conscience précise de Mathilde, jamais à un fait objectif.', ipa: '/lə dis.kuʁ ɛ̃.di.ʁɛkt libʁ kɔl a la kɔ̃.sjɑ̃s pʁe.siz də ma.tild/', tip: src(E(2146)).fr },
  { promptLabel: 'juger Mathilde moralement', promptSound: src(E(2144)).fr, fr: 'La distance ironique du narrateur empêche une lecture purement morale.', ipa: '/la dis.tɑ̃s i.ʁɔ.nik dy na.ʁa.tœʁ ɑ̃.pɛʃ yn lɛk.tyʁ pyʁ.mɑ̃ mɔ.ʁal/', tip: src(E(2146)).fr },
];

const A8_STEPS: TrapStep[] = [
  { label: 'Le piège', kind: 'rule', title: 'Le piège' },
  { label: 'Cinq cartes', kind: 'cards', title: 'Cinq pièges, un seul remède' },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les cinq pièges' },
  { label: 'À toi', kind: 'drill', title: 'Cinq pièges, cinq remèdes', gate: true },
];

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Cinq pièges, un seul remède',
  rule: {
    title: 'Nommer sans relier est le piège, pas l’erreur de nommer',
    body: `${src(E(2145)).fr} EN: ${src(E(2145)).en}`,
  },
  cards: A8_PIEGE_CARDS,
  drill: [
    { promptSay: 'Nommer une anaphore et s’arrêter là est un piège parce qu’il manque ... .', opts: ['sa voix et son effet exact', 'son nom exact'], correct: 0 },
    { promptSay: 'Décrire un registre seul est un piège parce qu’il manque ... .', opts: ['le registre contre lequel il se lit', 'sa définition de dictionnaire'], correct: 0 },
    { promptSay: 'Repérer un temps verbal sans effet est un piège parce qu’il manque ... .', opts: ['ce que ce changement fait au rythme', 'le nom exact du temps'], correct: 0 },
    { promptSay: 'Traiter le discours indirect libre comme neutre est un piège parce qu’il manque ... .', opts: ['la voix précise qui le porte', 'sa traduction en anglais'], correct: 0 },
    { promptSay: 'Juger Mathilde moralement est un piège parce qu’il manque ... .', opts: ['la distance ironique du narrateur', 'le nom du conte'], correct: 0 },
    { promptSay: 'Le remède à chacun de ces cinq pièges est ... .', opts: ['demander quel autre fil ce fil croise', 'ajouter plus de vocabulaire soutenu'], correct: 0 },
    { promptSay: 'Une analyse qui s’arrête à la première réponse correcte reste ... .', opts: ['incomplète', 'fausse'], correct: 0 },
    { promptSay: 'Le réflexe à corriger n’est pas de mal nommer un procédé, c’est de croire qu’... .', opts: ['un seul procédé, bien nommé, suffit', 'il faut en nommer dix'], correct: 0 },
  ],
  steps: A8_STEPS,
  audio: REC('rec-c2-02-cinq-pieges'), say: REFRAME, terms: ['lectureintegrale'],
};

const A8_SCENE = sceneAnalyse('a8-scene', 'La première réponse correcte ne suffit pas', [
  { from: 'user', fr: src(E(2147)).fr, en: src(E(2147)).en },
  { from: 'coach', fr: 'Portée par quelle voix, dans quel registre?', en: 'Carried by which voice, in which register?' },
  { from: 'narrator', fr: src(E(2148)).fr, en: src(E(2148)).en },
]);
A8_SCENE.terms = ['lectureintegrale'];

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le piège', 'Le piège le plus fréquent est de...', ['mal nommer un procédé', 'croire qu’un seul procédé, bien nommé, suffit'], 1,
    'Le nom est rarement faux ; c’est l’arrêt qui l’est. EN: the name is rarely wrong; stopping there is.'),
  ctl('Le remède', 'Après avoir nommé un fil, le remède est de...', ['passer directement à la ligne suivante', 'demander quel autre fil il croise ici'], 1,
    'Toujours chercher le fil suivant, au même endroit du texte. EN: always look for the next thread, at the same point in the text.'),
  ctl('Avant de conclure', 'Avant de conclure une analyse, il faut...', ['la relire et compter les fils encore tenus', 'la raccourcir au minimum'], 0,
    'Compter, à la dernière phrase, combien de fils restent tenus. EN: count, at the last sentence, how many threads are still held.'),
], ['lectureintegrale']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: "Le piège qui arrête l’analyse trop tôt",
    opener: {
      line: "Nommer une anaphore, un registre, un temps verbal n’est jamais faux ; s’arrêter juste après l’est : ici tu apprends à reconnaître ce réflexe avant qu’il ne s’installe. EN: Naming an anaphora, a register, a tense is never wrong; stopping right after is: here you learn to catch that reflex before it settles in.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act08.jpg',
    },
    sections: [],
    milestone: 'Tu repères le réflexe qui nomme un fil et s’arrête là, et tu demandes systématiquement quel autre fil il croise. EN: You can catch the reflex that names one thread and stops, and systematically ask what other thread it crosses.',
    estScreens: 18, restPoints: [],
  },
  sections: [A8_PIEGE, A8_SCENE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — TA LECTURE INTÉGRALE
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a9-modele', layer: 'core', questionsInModal: true,
  title: 'Une lecture intégrale, modèle', frSub: 'Les quatre fils, dans un seul paragraphe',
  text: MODELE_ANALYSE,
  glossary: [
    { word: 'tranchant', en: 'sharp cut', note: "Qui coupe net, sans transition douce. EN: cutting sharply, with no gentle transition." },
  ],
  questions: [
    { q: 'Combien de fils ce paragraphe tient-il, et lesquels.', a: 'Les quatre : le registre (soigné, savant), la voix (le jugement, puis le discours indirect libre), la structure (l’imparfait puis le basculement) et la figure (l’anaphore).' },
    { q: 'Où, précisément, le paragraphe relie-t-il deux fils dans une seule phrase.', a: '« Cette anaphore ne dit pas seulement un goût pour le luxe : répétée en discours indirect libre, elle construit une obsession » relie la figure à la voix qui la porte.' },
    { q: 'Le paragraphe s’arrête-t-il à la première réponse correcte pour chaque fil, ou continue-t-il.', a: 'Il continue toujours : chaque fil nommé est aussitôt relié à un autre, jamais laissé seul.' },
  ],
  audio: REC('rec-c2-02-modele'), say: REFRAME, terms: ['lectureintegrale'],
};

const A9_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a9-plan', layer: 'core', sheetId: 'sheet-grille',
  title: 'Quatre étapes pour ta lecture',
  steps: [
    `1. ${src(E(2156)).fr} EN: ${src(E(2156)).en}`,
    `2. ${src(E(2157)).fr} EN: ${src(E(2157)).en}`,
    '3. Relie chaque fil à au moins un autre, dans la même phrase ou la phrase suivante. EN: link each thread to at least one other, in the same sentence or the next.',
    `4. ${src(E(2158)).fr} EN: ${src(E(2158)).en}`,
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A9_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a9-usages', layer: 'core', title: 'Où tenir les quatre fils ensemble',
  cases: [
    { situation: 'Tu relies une anaphore à la voix qui la porte', fr: src(E(2104)).fr, en: src(E(2104)).en },
    { situation: 'Tu relies un changement de temps au rythme du récit', fr: src(E(2079)).fr, en: src(E(2079)).en },
    { situation: 'Tu choisis la lecture qui tient le plus de fils', fr: src(E(2134)).fr, en: src(E(2134)).en },
    { situation: 'Tu te corriges avant de t’arrêter trop tôt', fr: src(E(2146)).fr, en: src(E(2146)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A9_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a9-scenario', layer: 'core', title: 'Tu t’entraînes à voix haute avec Samuel',
  setting: "Avant de remettre sa version finale, Léna répète son analyse à voix haute avec Samuel, qui joue la professeure Aubin.",
  turns: [
    {
      ai: 'Et ce passage sur les salons rêvés, qu’en dis-tu.', en: 'And this passage about the imagined salons, what do you say about it.',
      user: src(E(2160)).fr, userEn: 'I start with the register, then I show the voice that carries it. (Register, then voice, named together.)',
      alts: [
        { fr: src(E(2161)).fr, en: 'I am now linking this anaphora to the structure of the exposition, not only to its meaning.' },
        { fr: 'Je remarque d’abord l’ironie du narrateur, avant de revenir au registre qui la porte.', en: 'I notice the narrator’s irony first, before coming back to the register that carries it.' },
      ],
    },
    {
      ai: 'Et l’antithèse, au deuxième paragraphe.', en: 'And the antithesis, in the second paragraph.',
      user: 'L’antithèse oppose un fait social et un sentiment, et elle est portée par le jugement ironique du narrateur, pas par Mathilde elle-même.', userEn: 'The antithesis opposes a social fact and a feeling, and it is carried by the narrator’s ironic judgement, not by Mathilde herself. (Figure, then voice, together.)',
      alts: [
        { fr: src(E(2162)).fr, en: 'I stop after naming the antithesis, without saying who carries it or where it falls in the text. (Incomplete: one thread only.)' },
        { fr: 'Ici, l’antithèse met en tension un fait de société et une émotion intime, portée par la voix ironique du narrateur, pas par Mathilde.', en: 'Here, the antithesis sets a social fact against an intimate emotion in tension, carried by the narrator’s ironic voice, not by Mathilde.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

/** THE GRADED TASK. A full written analysis of the anchor extract, graded on
 *  holding register, voice, structure and at least one figure together, as
 *  one integrated reading (C2-BUILD-LOG's c2.02 brief). */
const A9_MISSION: Sec<'task'> = {
  type: 'task', id: 'a9-mission', title: 'Ta lecture intégrale', frSub: 'Mission écrite',
  brief: `Le séminaire du jeudi te demande une analyse de l’ouverture de « La Parure », de Maupassant, lue en entier. Voici l’extrait. ${EXTRACT_FULL}\n\n${SOURCE_NOTE}`,
  briefEn: "The Thursday seminar asks you for an analysis of the opening of Maupassant's \"La Parure\", read in full. The extract is printed above so you can write with it in front of you.",
  produce: "Écris une analyse de 150 à 280 mots qui tient ensemble le registre, la voix narrative, la structure et au moins une figure de style, en reliant explicitement chaque fil à au moins un autre, jamais un à la fois.",
  responseSpec: { kind: 'text', minWords: 150, maxWords: 280 },
  rubric: {
    criteria: [
      { key: 'registre', label: 'Le registre, situé et relié', maxPoints: 4, descriptors: [
        "4 : Le registre soigné de la narration et le registre oral du dialogue sont nommés, avec une citation exacte pour chacun, et reliés à au moins un autre fil (la voix ou la structure).",
        "3 : Les deux registres sont nommés avec une citation, mais pas reliés à un autre fil.",
        '2 : Un seul des deux registres est nommé, ou sans citation exacte.',
        "1 : Le registre n’est pas traité, ou traité comme uniforme dans tout l’extrait.",
      ] },
      { key: 'voix', label: 'La voix narrative, précise', maxPoints: 4, descriptors: [
        "4 : Le discours indirect libre et/ou la distance ironique du narrateur sont identifiés avec précision et reliés à l’effet qu’ils construisent.",
        "3 : La voix est identifiée correctement, mais sans dire précisément son effet.",
        '2 : La voix est mentionnée en termes vagues (« le narrateur parle »), sans discours indirect libre ni distance ironique.',
        "1 : La voix n’est pas traitée, ou confondue avec une description neutre.",
      ] },
      { key: 'structure', label: 'La structure, prouvée par un marqueur', maxPoints: 4, descriptors: [
        "4 : L’exposition (imparfait) et le basculement (passé simple, « or, un soir ») sont nommés avec le marqueur exact, et reliés au rythme du récit.",
        "3 : L’exposition et le basculement sont nommés, mais sans le marqueur grammatical précis.",
        '2 : Seule une « impression générale » de changement est donnée, sans preuve textuelle.',
        "1 : La structure n’est pas traitée.",
      ] },
      { key: 'figure', label: 'Une figure, nommée et reliée', maxPoints: 4, descriptors: [
        "4 : Au moins une figure (anaphore, énumération, antithèse ou gradation) est nommée avec une citation exacte, et son effet est relié à la voix ou au registre qui la porte.",
        "3 : Une figure est nommée avec une citation, mais son effet reste décrit seul, sans lien à un autre fil.",
        '2 : Une figure est nommée sans citation exacte, ou son effet n’est pas dit.',
        "1 : Aucune figure n’est traitée.",
      ] },
      { key: 'integration', label: 'L’intégration explicite des fils', maxPoints: 4, descriptors: [
        "4 : Au moins deux fils différents sont explicitement reliés dans une même phrase ou un même paragraphe (par exemple la figure ET la voix qui la porte), plutôt que juxtaposés en paragraphes séparés.",
        "3 : Les quatre fils apparaissent tous, mais restent surtout juxtaposés, avec un seul lien explicite.",
        '2 : Deux ou trois fils apparaissent, sans aucun lien explicite entre eux.',
        "1 : Chaque fil est traité isolément, comme la fiche de Léna au début de la leçon.",
      ] },
    ],
  },
  scaffold: [
    'Le registre de cette ligne est…, contre le registre de…',
    'Cette voix narrative construit…, parce que…',
    'Cette structure se marque par…, ce qui accélère/ralentit…',
    'Cette figure construit…, portée par…',
    'Ces deux fils se croisent parce que…',
  ],
  modelAnswer: MODELE_ANALYSE,
  modelAnswerEn: MODELE_ANALYSE_EN,
  watchFor: [
    { pattern: 'A figure, register or tense is named but never linked to a second thread (register alone, voice alone, structure alone).', criterion: 'integration', feedback: 'Relie toujours le fil que tu viens de nommer à un autre, dans la même phrase. EN: always link the thread you just named to another, in the same sentence.', ref: 'a8-piege' },
    { pattern: 'The narration/dialogue register split is missed entirely, or the whole extract is treated as one uniform register.', criterion: 'registre', feedback: 'Compare au moins une ligne de narration soignée à une ligne de dialogue oral. EN: compare at least one line of careful narration to a line of oral dialogue.', ref: 'a2-table' },
    { pattern: 'Free indirect discourse is treated as neutral, objective narration, with no character’s precise consciousness named.', criterion: 'voix', feedback: 'Le discours indirect libre colle à la conscience précise de Mathilde, jamais à un fait neutre. EN: free indirect discourse sticks to Mathilde’s own precise consciousness, never a neutral fact.', ref: 'a3-groupe' },
    { pattern: 'A tense change is noticed but not tied to a precise grammatical marker or to the story’s pace.', criterion: 'structure', feedback: 'Cite le verbe exact (imparfait ou passé simple) et dis ce qu’il fait au rythme. EN: quote the exact verb (imparfait or passé simple) and say what it does to the pace.', ref: 'a4-table' },
    { pattern: 'Mathilde is judged morally (ungrateful, spoiled) with no mention of the narrator’s ironic distance.', criterion: 'voix', feedback: `${Cap(C114_REF)} t’a appris à chercher la forme avant le jugement. EN: the C1 lesson taught you to look for form before judgement.`, ref: 'a3-scene' },
    { pattern: 'The response names all four threads but only in separate paragraphs, with no sentence that explicitly crosses two of them.', criterion: 'integration', feedback: 'Cherche une phrase où deux fils se croisent vraiment, comme dans le modèle. EN: find one sentence where two threads really cross, as in the model.', ref: 'a9-modele' },
    { pattern: 'No exact quotation supports a claimed register, voice, structure or figure.', criterion: 'figure', feedback: 'Chaque affirmation a besoin d’une citation exacte du texte, jamais d’une impression. EN: every claim needs an exact quotation from the text, never an impression.', ref: 'a9-plan' },
  ],
  graderNotes: [
    'Word count: 150 to 280, with 10% tolerance (135 to 310) before length costs points. A title line does not count.',
    'The task marks the INTEGRATION of register, voice, structure and figure, not literary originality or a personal opinion of the character.',
    'Accept any correct, textually-supported naming of the register split, even if the learner picks different lines from the model.',
    'Accept any of the four figures (anaphore, énumération, antithèse, gradation) as the required figure, as long as its effect is stated and linked to another thread.',
    'Do not mark grammar beyond what interferes with comprehension; this task marks analytical integration, not a grammar point (C2 has none, per C2-BUILD-PLAN.md).',
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A9_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a9-parler', layer: 'core', title: 'Dis ta lecture à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A9_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a9-cheat', layer: 'core', sheetId: 'sheet-grille',
  title: 'Les quatre fils sur un seul écran',
  rows: [
    { k: 'le registre', v: 'soigné dans la narration, oral dans le dialogue', say: src(E(2014)).fr,
      detail: { title: 'Deux registres, un extrait', body: 'Aucune règle de grammaire ne change entre les deux. EN: no grammar rule changes between the two.', say: src(E(2016)).fr } },
    { k: 'la voix', v: 'jugement, discours indirect libre, discours direct', say: src(E(2040)).fr,
      detail: { title: 'Qui parle, de quelle distance', body: 'Le choix de la voix construit le personnage. EN: the choice of voice builds the character.', say: src(E(2042)).fr } },
    { k: 'la structure', v: 'imparfait (exposition), passé simple (basculement)', say: src(E(2065)).fr,
      detail: { title: "L’imparfait cède au passé simple", body: 'Le rythme accélère exactement à ce point. EN: the pace speeds up exactly there.', say: src(E(2066)).fr } },
    { k: 'la figure', v: 'anaphore, énumération, antithèse, gradation', say: src(E(2090)).fr,
      detail: { title: 'Un effet, jamais un simple nom', body: 'Chaque figure se relie à sa voix et à son registre. EN: each figure links to its voice and its register.', say: src(E(2092)).fr } },
    { k: 'le piège', v: 'nommer un fil, et s’arrêter là', say: src(E(2145)).fr,
      detail: { title: 'Le remède', body: 'Demande toujours quel autre fil ce fil croise. EN: always ask what other thread this one crosses.', say: src(E(2146)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale'],
};

const A9_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a9-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu lis maintenant un extrait littéraire entier à travers quatre fils tenus ensemble : le registre, contre un autre registre dans le même texte ; la voix, avec sa distance exacte ; la structure, prouvée par un marqueur grammatical précis ; et au moins une figure, reliée à l’effet qu’elle construit avec les trois autres fils. Le piège qui reste est toujours le même : nommer un fil, puis s’arrêter là, croyant l’analyse terminée. Avant l’examen, reprends un texte littéraire que tu as déjà lu et vérifie, phrase par phrase, que tu tiens encore les quatre fils à la dernière ligne. EN: Before any exam, take a literary text you have already read and check, sentence by sentence, that you are still holding all four threads by the last line.",
  stats: [
    { k: 'Le registre', v: 'contre un autre, dans le même texte' },
    { k: 'La voix', v: 'jugement, discours indirect libre, discours direct' },
    { k: 'La structure', v: 'un marqueur grammatical, jamais une impression' },
    { k: 'La figure', v: 'un effet relié, jamais un simple nom' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une lecture tient un seul fil. Récris-la pour en tenir deux. EN: One reading holds a single thread; rewrite it to hold two.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A9_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a9-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-fils', label: 'Un fil à la fois ne suffit pas', targets: ['fil-isole'],
      questions: [
        mc('Nommer une figure sans dire ni sa voix ni son effet est...', ['une analyse complète', 'un fil tiré seul', 'une erreur de grammaire'], 1, 'Un fil tiré seul ne montre rien du dessin entier. EN: a single thread pulled alone shows nothing of the whole pattern.', 'a1-check'),
        mc('Cette leçon lit...', ['douze textes courts, un par acte', 'un seul extrait complet, en entier'], 1, `À la différence de ${C114_REF}. EN: unlike the C1 lesson.`, 'a1-check'),
        mc('Les quatre fils de cette leçon sont...', ['le temps, le mode, l’aspect, la personne', 'le registre, la voix, la structure, la figure', 'le son, le rythme, la rime, la strophe'], 1, 'Les quatre fils tenus ensemble du début à la fin. EN: the four threads held together from start to finish.', 'a1-fils'),
        mc('L’extrait lu dans cette leçon est tiré de...', ['Victor Hugo', 'Guy de Maupassant'], 1, '« La Parure », 1884. EN: "La Parure", 1884.', 'a1-lecture'),
        tI('Complète. Un mot.', 'Tenir quatre ... ensemble, c’est lire une œuvre.', 'fils', 'C’est la métaphore de toute la leçon. EN: that is the lesson’s whole metaphor.', 'a1-fils'),
        tI('Complète. Un mot.', `${Cap(C114_REF)} menait de la réaction à l’analyse par la ... .`, 'forme', 'La forme, pas seulement le contenu. EN: form, not only content.', 'a1-acquis'),
        eS('Léna écrit : il y a une anaphore au paragraphe trois.', 'Léna écrit : une anaphore, en discours indirect libre, construit une obsession.', 'Le fil de la figure est relié à celui de la voix. EN: the figure’s thread is linked to the voice’s.', 'a1-scene'),
        lC('Écoute. Cette phrase résume-t-elle un seul fil ou les quatre fils tenus ensemble.', src(E(2011)).fr, ['un seul fil', 'les quatre fils tenus ensemble'], 1, 'Quatre fils, un seul tissu. EN: four threads, one fabric.', 'a1-check'),
      ],
    },
    {
      id: 'r2-registre', label: 'Le registre, en deux voix', targets: ['registre-isole'],
      questions: [
        mc('Le même extrait porte...', ['un seul registre, du début à la fin', 'deux registres, la narration et le dialogue'], 1, 'Sans qu’aucune règle de grammaire ne change entre les deux. EN: with no grammar rule changing between the two.', 'a2-exemples'),
        mc('« Leur souplesse d’esprit, sont leur seule hiérarchie » appartient au registre...', ['oral', 'soigné', 'familier'], 1, 'Un nom abstrait, jugé de l’extérieur. EN: an abstract noun, judged from outside.', 'a2-table'),
        mc('« Tiens, dit-il, voici quelque chose pour toi » appartient au registre...', ['soigné', 'oral'], 1, 'Une phrase courte et familière du mari. EN: a short, casual line from the husband.', 'a2-deck'),
        mc('Le registre soigné de la narration juge Mathilde...', ['de près, dans l’instant', 'de loin', 'avec une indifférence totale'], 1, 'Le registre oral du dialogue, lui, la montre de près. EN: the oral register, by contrast, shows her up close.', 'a2-groupe'),
        tI('Complète. Un mot.', 'Le registre ... n’appartient pas à Mathilde seule : il appartient à la narration.', 'soigné', 'La narration juge, où qu’elle parle. EN: the narration judges, wherever it speaks.', 'a2-scene'),
        tI('Complète. Un mot.', 'Le dialogue tombe au registre ..., loin de la narration qui précède.', 'oral', 'Le mari parle en phrases courtes et familières. EN: the husband speaks in short, casual sentences.', 'a2-deck'),
        eS('Le mari dit, poliment : « Je vous prie de considérer ce présent. »', 'Le mari dit : « Tiens, voici quelque chose pour toi. »', 'Le vrai registre du mari est oral et familier, pas soigné. EN: the husband’s real register is oral and casual, not careful.', 'a2-deck'),
        lC('Écoute. Ce mot appartient-il au registre oral ou soigné.', src(E(2019)).fr, ['oral', 'soigné'], 0, 'Une exclamation familière sur le pot-au-feu. EN: a casual exclamation about the pot-au-feu.', 'a2-table'),
      ],
    },
    {
      id: 'r3-voix', label: 'La voix narrative', targets: ['voix-neutre'],
      questions: [
        mc('Ce texte fait entendre...', ['une seule voix, toujours la même', 'trois voix : le jugement, la pensée proche, la parole citée'], 1, 'Le narrateur juge, pense tout près, ou cède la parole. EN: the narrator judges, thinks up close, or hands over the floor.', 'a3-check'),
        mc('« Elle fut simple... malheureuse comme une déclassée » est...', ['la pensée de Mathilde elle-même', 'un jugement du narrateur, posé de l’extérieur', 'une remarque de son mari'], 1, 'Ce n’est pas annoncé comme la pensée de Mathilde. EN: it is not marked as Mathilde’s own thought.', 'a3-deck'),
        mc('« Elle songeait aux grands salons... » est un exemple de...', ['discours direct', 'discours indirect libre'], 1, 'Aucun verbe déclaratif n’annonce chaque pensée. EN: no reporting verb announces each thought.', 'a3-deck'),
        mc('Le discours indirect libre se repère par...', ['des tirets et des mots exacts cités', 'l’absence de verbe déclaratif annonçant la pensée', 'un verbe « il dit que » suivi de la pensée'], 1, 'La voix du narrateur se mêle à celle du personnage. EN: the narrator’s voice blends with the character’s.', 'a3-exemples'),
        tI('Complète. Un mot.', 'La distance ironique du narrateur nomme la souffrance de Mathilde sans jamais tout à fait l’... .', 'excuser', 'Un jugement, jamais une excuse complète. EN: a judgement, never a full excuse.', 'a3-check'),
        tI('Complète. Un mot.', '« Tiens, dit-il » est un exemple de discours ... .', 'direct', 'Les mots exacts, cités, entre tirets. EN: the exact words, quoted, with a dash.', 'a3-groupe'),
        eS('Samuel écrit : le narrateur décrit juste un fait, sans aucun point de vue.', 'Samuel écrit : le narrateur juge Mathilde, avec une distance légèrement ironique.', 'Le jugement n’est jamais neutre ici. EN: the judgement is never neutral here.', 'a3-scene'),
        lC('Écoute. Discours indirect libre, ou discours direct.', src(E(2054)).fr, ['discours indirect libre', 'discours direct'], 1, 'Les mots exacts du mari, cités. EN: the husband’s exact quoted words.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-structure', label: "La structure : exposition et basculement", targets: ['structure-vague'],
      questions: [
        mc('L’exposition de cet extrait est marquée surtout par...', ['le passé simple', 'l’imparfait, un temps de répétition'], 1, 'Souffrait, songeait, pleurait, tous à l’imparfait. EN: souffrait, songeait, pleurait, all in the imparfait.', 'a4-check'),
        mc('Le basculement narratif tombe sur...', ['« Elle songeait aux dîners fins »', '« Or, un soir, son mari rentra »', '« Elle avait une amie riche »'], 1, 'Un événement daté, au passé simple. EN: a dated event, in the passé simple.', 'a4-deck'),
        mc('Après le basculement, le rythme du récit...', ['reste identique à l’exposition', 'accélère, avec des verbes ponctuels enchaînés'], 1, 'L’imparfait cède au passé simple. EN: the imparfait gives way to the passé simple.', 'a4-groupe'),
        mc(`${Cap(C102_REF)} enseigne un temps...`, ['identique au passé simple', 'voisin, jamais celui-ci, mais un signal de structure semblable', 'sans aucun rapport avec la structure du récit'], 1, 'Le passé antérieur est voisin, jamais réutilisé ici. EN: the passé antérieur is a neighbour, never reused here.', 'a4-recap'),
        tI('Complète. Un mot.', 'Prouver une structure demande un marqueur précis, jamais une impression ... .', 'générale', 'Jamais une impression seule. EN: never an impression alone.', 'a4-check'),
        tI('Complète. Un mot.', '« Or, un soir » annonce, avant même le verbe, un ... daté.', 'événement', 'Le marqueur précède le verbe lui-même. EN: the marker precedes the verb itself.', 'a4-deck'),
        eS('L’exposition de ce texte dure six paragraphes, sans qu’on puisse le prouver.', 'L’exposition de ce texte dure six paragraphes, presque entièrement à l’imparfait.', 'Le temps verbal est la preuve exacte. EN: the tense is the exact proof.', 'a4-table'),
        lC('Écoute. Imparfait ou passé simple.', src(E(2067)).fr, ['imparfait', 'passé simple'], 1, 'Déchira, tira : des actions ponctuelles. EN: déchira, tira: single actions.', 'a4-table'),
      ],
    },
    {
      id: 'r5-figures', label: 'Les figures en réseau', targets: ['figure-isolee'],
      questions: [
        mc('« Elle songeait aux… », répété quatre fois, est...', ['une énumération', 'une anaphore'], 1, 'Le même début, répété. EN: the same beginning, repeated.', 'a5-deck'),
        mc('« Simple… mais malheureuse comme une déclassée » est...', ['une antithèse', 'une gradation', 'une anaphore'], 0, 'Un fait social et un sentiment, tenus ensemble. EN: a social fact and a feeling, held together.', 'a5-deck'),
        mc('« Chagrin, regret, désespoir, détresse » est...', ['une énumération neutre', 'une gradation, de plus en plus forte'], 1, 'Quatre mots, une intensité croissante. EN: four words, a rising intensity.', 'a5-deck'),
        mc('Une figure de style...', ['contient son effet, seule, indépendamment du reste', 'construit un effet qu’il faut dire, pas seulement nommer', 'n’existe que dans la poésie, jamais dans un récit'], 1, 'Le nom d’une figure n’est jamais la fin de l’analyse. EN: a figure’s name is never the end of the analysis.', 'a5-check'),
        tI('Complète. Un mot.', 'L’anaphore construit surtout une ... , pas un simple goût.', 'obsession', 'La répétition dépasse la simple liste. EN: the repetition goes beyond a simple list.', 'a5-groupe'),
        tI('Complète. Un mot.', 'L’antithèse de « simple... malheureuse » oppose un fait social à un ... .', 'sentiment', 'Deux natures différentes, tenues ensemble. EN: two different natures, held together.', 'a5-groupe'),
        eS('L’anaphore montre juste que Mathilde aime le luxe.', 'L’anaphore, en discours indirect libre, montre un désir si répété qu’il tient lieu de pensée permanente.', 'La figure se relie à la voix qui la porte. EN: the figure links to the voice that carries it.', 'a5-erreurs'),
        lC('Écoute. Anaphore ou énumération.', src(E(2091)).fr, ['anaphore', 'énumération'], 1, 'Trois manques, additionnés. EN: three lacks, added up.', 'a5-groupe'),
      ],
    },
    {
      id: 'r6-grille', label: 'Les quatre fils ensemble', targets: ['grille-incomplete'],
      questions: [
        mc('Une grille à quatre colonnes tient, pour une seule ligne...', ['un seul fil, le plus visible', 'son registre, sa voix, sa structure et sa figure'], 1, 'Les quatre colonnes, pour la même ligne. EN: all four columns, for the same line.', 'a6-check'),
        mc('L’absence de figure, juste après l’anaphore, est...', ['un oubli de l’auteur', 'un effet : le réel, soudain, sans ornement', 'une erreur d’impression du livre'], 1, 'Même une absence de figure est un fil à tenir. EN: even the absence of a figure is a thread to hold.', 'a6-grille'),
        mc('Samuel remplit sa grille sans la colonne « voix » : sa lecture reste...', ['fausse', 'vraie mais incomplète'], 1, 'Une grille incomplète ne devient pas fausse. EN: an incomplete grid does not become wrong.', 'a6-grille'),
        mc("La grille appliquée à l’extrait entier montre...", ['un texte uniforme du début à la fin', 'un mouvement : soigné puis oral, exposition puis basculement', 'une suite de hasards, sans aucun motif'], 1, 'Ce mouvement, et non un seul procédé, construit le sens. EN: that movement, not a single device, builds the meaning.', 'a6-check'),
        tI('Complète. Un mot.', 'La grille sert à vérifier qu’aucun des quatre fils n’a été ... .', 'oublié', 'Elle vérifie, elle ne remplace rien. EN: it checks, it replaces nothing.', 'a6-intro'),
        tI('Complète. Un mot.', 'Tenir les quatre fils pour une seule ligne prend plus de ... qu’en nommer un seul.', 'temps', 'Plus long, mais c’est le travail de la leçon. EN: longer, but that is the lesson’s work.', 'a6-check'),
        eS('Sur cette ligne, seul le registre compte vraiment.', 'Sur cette ligne, le registre, la voix, la structure et la figure comptent tous ensemble.', 'Aucun fil ne se lit seul. EN: no thread is read alone.', 'a6-grille'),
        lC('Écoute. Cette ligne porte-t-elle une figure, ou aucune.', src(E(2016)).fr, ['aucune figure', 'une figure claire'], 0, 'Une phrase nue, juste après l’anaphore qui précède. EN: a bare sentence, right after the anaphora before it.', 'a6-table'),
      ],
    },
    {
      id: 'r7-choisir', label: 'Choisir la bonne lecture', targets: ['lecture-partielle'],
      questions: [
        mc('Une lecture plausible mais partielle...', ['est fausse mot à mot', 'tient un seul fil, vrai, mais incomplet'], 1, 'Vraie, mais incomplète : le piège exact. EN: true, but incomplete: the exact trap.', 'a7-check'),
        mc('Entre deux lectures plausibles, la meilleure est celle qui...', ['utilise le vocabulaire le plus soutenu', 'tient le plus de fils ensemble', 'cite le plus grand nombre de phrases'], 1, 'Le vocabulaire ne remplace jamais l’intégration. EN: vocabulary never replaces integration.', 'a7-choisir'),
        mc('Un distracteur bien construit...', ['est toujours absurde', 'tient un vrai fil, mais un seul'], 1, 'Jamais absurde, seulement incomplet. EN: never absurd, only incomplete.', 'a7-focus'),
        mc('Avant de choisir une lecture, il faut...', ['choisir la plus longue des deux', 'compter les fils que chacune tient réellement', 'demander l’avis de la professeure'], 1, 'La longueur ne dit rien de l’intégration. EN: length says nothing about integration.', 'a7-check'),
        tI('Complète. Un mot.', 'Une lecture intégrale tient tous les ... à la fois.', 'fils', 'Le mot qui résume toute la leçon. EN: the word that sums up the whole lesson.', 'a7-focus'),
        tI('Complète. Un mot.', 'Le passé simple marque le basculement parce qu’il tranche avec l’... qui précède.', 'imparfait', 'Le contraste, pas le sens seul, fait l’effet. EN: the contrast, not the meaning alone, makes the effect.', 'a7-choisir'),
        eS('Le dialogue est juste là pour faire avancer l’histoire, sans lien avec le reste.', 'Le dialogue, en registre oral, tranche avec la narration soignée, exactement là où la structure l’annonçait.', 'Le registre se relie à la structure. EN: register links to structure.', 'a7-choisir'),
        lC('Écoute. Lecture plausible, ou lecture intégrale.', src(E(2132)).fr, ['lecture plausible', 'lecture intégrale'], 1, 'Elle relie le jugement moral à la distance ironique du narrateur. EN: it links the moral judgement to the narrator’s ironic distance.', 'a7-choisir'),
      ],
    },
    {
      id: 'r8-piege', label: "Le piège qui arrête l’analyse trop tôt", targets: ['piege-arret'],
      questions: [
        mc('Le piège le plus fréquent est de...', ['mal nommer un procédé', 'croire qu’un seul procédé, bien nommé, suffit'], 1, 'Le nom est rarement faux ; c’est l’arrêt qui l’est. EN: the name is rarely wrong; stopping there is.', 'a8-check'),
        mc('Après avoir nommé un fil, le remède est de...', ['passer directement à la ligne suivante', 'demander quel autre fil il croise ici', 'relire tout l’extrait depuis le début'], 1, 'Toujours chercher le fil suivant. EN: always look for the next thread.', 'a8-piege'),
        mc('Avant de conclure une analyse, il faut...', ['la relire et compter les fils encore tenus', 'la raccourcir au minimum'], 0, 'Compter, à la dernière phrase. EN: count, at the last sentence.', 'a8-check'),
        mc('La mission écrite demande de...', ['résumer l’intrigue de « La Parure »', 'tenir le registre, la voix, la structure et une figure ensemble', 'traduire l’extrait en anglais'], 1, 'Résumer ne suffit pas. EN: summarising is not enough.', 'a9-mission'),
        tI('Complète. Un mot.', 'Nommer un fil et s’arrêter là reste une analyse ... .', 'incomplète', 'Jamais fausse, toujours incomplète. EN: never wrong, always incomplete.', 'a8-scene'),
        tI('Complète. Un mot.', 'Lire une œuvre, c’est tenir quatre ... ensemble.', 'fils', 'Le reframe de toute la leçon. EN: the whole lesson’s reframe.', 'a9-progress'),
        eS('Une bonne lecture intégrale s’arrête après avoir nommé une figure de style.', 'Une bonne lecture intégrale relie cette figure à sa voix, son registre et sa place dans la structure.', 'Relier, jamais s’arrêter. EN: link, never stop.', 'a9-plan'),
        lC('Écoute. Cette phrase vient-elle du texte de Maupassant, ou du modèle d’analyse.', src(E(2047)).fr, ['du texte de Maupassant', 'du modèle d’analyse'], 0, 'Elle est citée mot pour mot du conte. EN: it is quoted word for word from the story.', 'a9-modele'),
      ],
    },
  ],
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
spreadSlots(A9_QUIZ);

const A9_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a9-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'careful in narration, oral in dialogue', back: 'le registre', say: src(E(2014)).fr },
    { front: 'the narrator judges, at a distance', back: "la distance ironique", say: src(E(2040)).fr },
    { front: 'unannounced, close to the character', back: 'le discours indirect libre', say: src(E(2042)).fr },
    { front: 'repetition that builds obsession', back: "l’anaphore", say: src(E(2090)).fr },
    { front: 'a durative state, before the turn', back: "l’imparfait" , say: src(E(2065)).fr },
    { front: 'a single dated event, the turn itself', back: 'le passé simple', say: src(E(2066)).fr },
    { front: 'a social fact and a feeling, together', back: "l’antithèse", say: src(E(2092)).fr },
    { front: 'four threads, never one alone', back: 'la lecture intégrale', say: src(E(2126)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A9_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a9-roundup', layer: 'core', title: 'L’analyse littéraire intégrale, en résumé',
  body: `${REFRAME} Tu lis maintenant un extrait entier à travers quatre fils tenus ensemble, et tu relies chacun aux autres plutôt que de t’arrêter après le premier. EN: You can now read a whole extract through four threads held together, linking each to the others rather than stopping after the first.`,
  points: [
    'Un même extrait porte deux registres, sans qu’aucune règle de grammaire ne change.',
    'La voix narrative choisit qui parle, de quelle distance, et construit le personnage par ce choix.',
    'Une structure se prouve par un marqueur grammatical précis, jamais par une impression.',
    'Une figure de style construit un effet qu’il faut relier à sa voix, son registre et sa place dans le récit.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['lectureintegrale', 'anaphore'],
};

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Ta lecture intégrale',
    opener: {
      line: "Le modèle tient ses quatre fils dans un seul paragraphe : ici tu lis comment, puis tu écris la même chose sur l’extrait entier. EN: The model holds its four threads in a single paragraph: here you read how, then write the same thing about the whole extract.",
      imageRef: 'lessons/c2-02-analyse-litteraire/act09.jpg',
    },
    sections: [],
    milestone: 'Tu produis une analyse écrite qui tient le registre, la voix, la structure et au moins une figure ensemble, sur l’extrait entier. EN: You can produce a written analysis that holds register, voice, structure and at least one figure together, across the whole extract.',
    estScreens: 46, restPoints: ['a9-scenario', 'a9-mission', 'a9-cheat', 'a9-quiz'],
  },
  sections: [A9_MODELE, A9_PLAN, A9_USAGES, A9_SCENARIO, A9_MISSION, A9_PARLER, A9_CHEAT, A9_PROGRESS, A9_QUIZ, A9_REVIEW, A9_ROUNDUP],
  imports: IMPORTED.act9,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its authored slots, scattered by hand (precision-nuance-lesson.ts 6.11). */
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
  for (const s of sections) if (s.type !== 'quiz' && s.type !== 'task') visit(s);
  for (const d of drills) visit(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-fils', title: 'Relier, jamais s’arrêter', format: 'mcq' as const, coach: 'Après avoir nommé un fil, cherche toujours lequel il croise ici. EN: after naming one thread, always look for which one it crosses here.', q: 'Nommer une figure sans dire sa voix ni son effet est...', opts: ['une analyse complète', 'un fil tiré seul'], correct: 1, why: 'Un fil tiré seul ne montre rien du dessin entier. EN: a single thread pulled alone shows nothing of the whole pattern.', items: [E(2003), E(2004), E(2011)], audio: AUDIO },
  { id: 'd-registre', title: 'Narration ou dialogue', format: 'sort' as const, coach: 'Classe chaque ligne : narration soignée, ou dialogue oral. EN: sort each line: careful narration, or oral dialogue.', buckets: ['narration (soigné)', 'dialogue (oral)'], items: [E(2014), E(2015), E(2016), E(2017), E(2018), E(2019)], audio: AUDIO },
  { id: 'd-voix', title: 'Qui parle, de quelle distance', format: 'mcq' as const, coach: 'Cherche si une voix juge, pense tout près, ou cite les mots exacts. EN: check whether a voice judges, thinks up close, or quotes exact words.', q: '« Elle songeait aux grands salons... » appartient à...', opts: ['au discours direct', 'au discours indirect libre'], correct: 1, why: 'Aucun verbe déclaratif n’annonce la pensée. EN: no reporting verb announces the thought.', items: [E(2040), E(2042), E(2043), E(2054)], audio: AUDIO },
  { id: 'd-structure', title: 'Imparfait ou passé simple', format: 'sort' as const, coach: 'Classe chaque verbe : l’exposition qui dure, ou le basculement daté. EN: sort each verb: the lasting exposition, or the dated turn.', buckets: ['imparfait (exposition)', 'passé simple (basculement)'], items: [E(2065), E(2066), E(2067), E(2068)], audio: AUDIO },
  { id: 'd-figure', title: 'Une figure, un effet relié', format: 'flashcard' as const, coach: 'Dis chaque figure à voix haute, avec l’effet qu’elle construit. EN: say each figure aloud, with the effect it builds.', items: [E(2090), E(2091), E(2092), E(2093)], audio: AUDIO },
  { id: 'd-grille', title: 'Quatre colonnes, une ligne', format: 'mcq' as const, coach: 'Vérifie que les quatre colonnes sont remplies pour la même ligne. EN: check that all four columns are filled for the same line.', q: 'L’absence de figure, juste après l’anaphore, est...', opts: ['un oubli', 'un effet : le réel, sans ornement'], correct: 1, why: 'Même une absence de figure est un fil à tenir. EN: even the absence of a figure is a thread to hold.', items: [E(2113), E(2115), E(2116)], audio: AUDIO },
  { id: 'd-lecture', title: 'Plausible ou intégrale', format: 'mcq' as const, coach: 'Compte les fils que chaque lecture tient réellement. EN: count the threads each reading actually holds.', q: 'Entre deux lectures plausibles, la meilleure est celle qui...', opts: ['sonne le plus soutenue', 'tient le plus de fils ensemble'], correct: 1, why: 'Le vocabulaire ne remplace jamais l’intégration. EN: vocabulary never replaces integration.', items: [E(2126), E(2128), E(2130), E(2132)], audio: AUDIO },
  { id: 'd-piege', title: 'Le remède au piège', format: 'mcq' as const, coach: 'Après chaque fil nommé, demande lequel il croise ici. EN: after each thread named, ask which one it crosses here.', q: 'Le piège le plus fréquent est de croire que...', opts: ['un seul procédé, bien nommé, suffit', 'il faut nommer dix procédés'], correct: 0, why: 'Le remède est de relier, jamais de s’arrêter. EN: the remedy is to link, never to stop.', items: [E(2140), E(2141), E(2145), E(2146)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'fil-isole', description: 'Names a figure, tense or register and stops there, treating one isolated thread as a complete analysis.', detectOn: ['a1-check', 'a1-scene', 'a9-mission'], drill: 'd-fils', retest: 'd-fils' },
  { id: 'registre-isole', description: 'Treats the extract’s register as uniform, missing the narration/dialogue split or failing to say what a register choice does.', detectOn: ['a2-groupe', 'a2-check', 'a9-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'voix-neutre', description: 'Treats free indirect discourse as neutral narration, or misses the narrator’s ironic distance, collapsing three voices into one.', detectOn: ['a3-groupe', 'a3-check', 'a9-mission'], drill: 'd-voix', retest: 'd-voix' },
  { id: 'structure-vague', description: 'Notices a change in the story without naming the precise grammatical marker (tense, word, typographic break) that proves it.', detectOn: ['a4-groupe', 'a4-check', 'a9-mission'], drill: 'd-structure', retest: 'd-structure' },
  { id: 'figure-isolee', description: 'Names a figure of style without linking it to the voice or register that carries it, missing its exact effect.', detectOn: ['a5-groupe', 'a5-check', 'a9-mission'], drill: 'd-figure', retest: 'd-figure' },
  { id: 'grille-incomplete', description: 'Fills a reading grid with one or two columns only, leaving register, voice, structure or figure unchecked for a given line.', detectOn: ['a6-grille', 'a6-check'], drill: 'd-grille', retest: 'd-grille' },
  { id: 'lecture-partielle', description: 'Picks a plausible-but-partial reading over an integrated one, mistaking "not wrong" for "complete".', detectOn: ['a7-choisir', 'a7-check', 'a9-mission'], drill: 'd-lecture', retest: 'd-lecture' },
  { id: 'piege-arret', description: 'Stops an analysis at the first correct claim instead of asking which other thread it crosses at that point in the text.', detectOn: ['a8-piege', 'a8-check', 'a9-mission'], drill: 'd-piege', retest: 'd-piege' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-fils', 'Les quatre fils', ['le registre', 'la voix', 'la structure', 'la figure'], [
    teach('sheet-fils-teach', 'Une tapisserie, pas un fil',
      "Une analyse littéraire intégrale tient quatre fils ensemble : le registre (comment une ligne est dite), la voix (qui parle, de quelle distance), la structure (ce qui marque, dans la grammaire, un changement) et la figure (ce qu’un procédé construit, jamais son seul nom). Un fil tiré seul ne montre rien du dessin entier. EN: An integrated literary analysis holds four threads together: register, voice, structure and figure; a single thread pulled alone shows nothing of the whole pattern."),
    table('sheet-fils-table', 'Les quatre fils, en un coup d’œil', ['Fil', 'Question qu’il pose'], [
      ['le registre', 'Cette ligne est-elle soignée, ou oral ?'],
      ['la voix', 'Qui parle ici : le narrateur qui juge, qui pense tout près, ou le personnage lui-même ?'],
      ['la structure', 'Quel marqueur précis (temps, mot, coupure) prouve un changement ?'],
      ['la figure', 'Quel effet ce procédé construit-il, relié à quel autre fil ?'],
    ]),
  ]),
  sheet('sheet-registre', 'Le registre dans un texte narratif', ['narration', 'dialogue', 'exemples'], [
    teach('sheet-registre-teach', 'Deux registres, un même extrait',
      "La narration de « La Parure » reste soignée, presque savante, même en décrivant des objets concrets. Le dialogue tombe à l’oral, en phrases courtes et familières. Aucune règle de grammaire ne change entre les deux : seul le choix du mot et de la construction change. EN: The narration stays careful even while describing concrete objects; the dialogue falls to the oral, in short, casual sentences, with no grammar rule changing between the two."),
    table('sheet-registre-table', 'Narration et dialogue, côte à côte', ['Narration (soigné)', 'Dialogue (oral)'], [
      ['leur souplesse d’esprit, sont leur seule hiérarchie', 'tiens, voici quelque chose pour toi'],
      ['elle songeait aux antichambres muettes', 'que veux-tu que je fasse de cela ?'],
      ['elle fut simple ne pouvant être parée', 'ah ! le bon pot-au-feu !'],
    ]),
  ]),
  sheet('sheet-voix', 'La voix narrative', ['discours direct', 'discours indirect libre', "distance ironique"], [
    teach('sheet-voix-teach', 'Trois voix, trois distances',
      "Le narrateur peut juger de l’extérieur (une distance ironique, jamais une excuse complète), penser tout près d’un personnage sans l’annoncer (le discours indirect libre), ou céder entièrement la parole (le discours direct, entre tirets ou guillemets). EN: The narrator can judge from outside (an ironic distance, never a full excuse), think right beside a character without announcing it (free indirect discourse), or hand over the floor entirely (direct speech)."),
    table('sheet-voix-table', 'Repérer chaque voix', ['Voix', 'Marque', 'Exemple'], [
      ['le jugement du narrateur', 'une généralisation, hors de la pensée du personnage', "elle fut simple... malheureuse comme une déclassée"],
      ['le discours indirect libre', 'aucun verbe déclaratif annoncé', 'elle songeait aux grands salons...'],
      ['le discours direct', 'des tirets, des mots exacts cités', 'tiens, dit-il, voici quelque chose pour toi'],
    ]),
  ]),
  sheet('sheet-structure', "L’exposition et le basculement", ['imparfait', 'passé simple', 'le rythme'], [
    teach('sheet-structure-teach', 'Un marqueur grammatical, pas une impression',
      `${Cap(C102_REF)} a déjà montré qu’un temps verbal signale la structure, pas seulement le temps. Ici, l’exposition reste presque entièrement à l’imparfait (un état qui dure) ; le basculement tombe sur un passé simple daté (« Or, un soir, son mari rentra »), et le rythme accélère avec lui. EN: The C1 lesson already showed a tense signalling structure, not just time; here the exposition stays almost entirely in the imparfait, and the turn lands on a dated passé simple, speeding up the pace with it.`),
    table('sheet-structure-table', 'Trois vitesses', ['Partie', 'Temps dominant', 'Fonction'], [
      ["l’exposition", 'imparfait', 'décrire un état qui dure'],
      ['le basculement', 'passé simple', 'raconter un événement daté'],
      ['le dialogue', 'présent, discours direct', 'faire parler les personnages, en direct'],
    ]),
  ]),
  sheet('sheet-figures', 'Quatre figures, un effet cumulé', ['anaphore', 'énumération', 'antithèse', 'gradation'], [
    teach('sheet-figures-teach', 'Nommer, puis relier',
      `${Cap(C119_REF)} t’a appris à nommer une figure et dire son effet, une à la fois. Ici, quatre figures (anaphore, énumération, antithèse, gradation) travaillent sur le même passage : chacune construit un effet précis, et toutes ensemble construisent un désir trop grand pour s’arrêter. EN: The C1 lesson taught you to name a figure and say its effect, one at a time; here four figures work on the same passage, each building a precise effect, and together building a desire too large to stop.`),
    table('sheet-figures-table', 'Les quatre figures de cet extrait', ['Figure', 'Exemple', 'Effet'], [
      ['anaphore', 'elle songeait aux... (x4)', 'une obsession, pas un simple goût'],
      ['énumération', 'pas de dot, pas d’espérances, aucun moyen', 'chaque manque s’ajoute, aucun seul n’explique'],
      ['antithèse', 'simple... mais malheureuse comme une déclassée', 'un fait social et un sentiment, tenus ensemble'],
      ['gradation', 'chagrin, regret, désespoir, détresse', 'une douleur de plus en plus profonde'],
    ]),
  ]),
  sheet('sheet-grille', 'La grille des quatre fils', ['registre', 'voix', 'structure', 'figure', 'le plan de la mission'], [
    teach('sheet-grille-teach', 'Une ligne, quatre colonnes',
      "Pour chaque ligne que tu analyses, remplis les quatre colonnes : son registre, sa voix, sa place dans la structure, sa figure (ou son absence, qui est aussi un effet). Une colonne vide signale un fil oublié, pas une case sans réponse. EN: For every line you analyse, fill all four columns: its register, its voice, its place in the structure, its figure (or its absence, which is also an effect); an empty column signals a forgotten thread, not a blank box."),
    table('sheet-grille-table', 'Le plan en quatre étapes', ['Étape', 'Formule'], [
      ['nommer le fil', 'Cette ligne porte un registre/une voix/une figure…'],
      ['citer exactement', '« … », exactement comme le texte l’écrit'],
      ['relier à un autre fil', 'porté par…, à ce moment de la structure…'],
      ['conclure sur l’ensemble', 'Ensemble, ces fils construisent…'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-02-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-02-extrait-complet': "The full Maupassant extract (act 1), ONE VOICE, one take, read as a calm literary narrator would: even pace through the exposition, a slightly brisker pace through the dialogue, the husband's and Mathilde's lines each read in character but by the SAME single reader, no exaggerated acting.",
  'rec-c2-02-quatre-fils': 'The four-thread cardDeck (act 1), ONE VOICE, one take, a measured, explanatory tone, each card read at the same even pace.',
  'rec-c2-02-deux-registres': 'The four register cards (act 2), ONE VOICE, one take: the two narration cards read evenly and carefully, the two dialogue cards read a touch more casually, same reader throughout.',
  'rec-c2-02-voix-narrative': 'The three voice cards (act 3), ONE VOICE, one take: the narrator-judgement card flat and measured, the free-indirect card warmer and closer, the direct-speech card read as the husband would say it.',
  'rec-c2-02-voix-ecoute': 'REQUIRED FOR THE EAR MISSION (act 3): six lines, ONE TAKE, ONE VOICE, in authored order, read plainly with no extra emphasis that would give the voice type away before the words do.',
  'rec-c2-02-structure': 'The three structure cards (act 4), ONE VOICE, one take, the imparfait card read at a slow, steady pace, the two passé simple cards read slightly faster, marking the acceleration.',
  'rec-c2-02-figures': 'The four figure cards (act 5), ONE VOICE, one take, the anaphora card read with the same rising rhythm the repetition itself carries, the gradation card read with a slight rise in intensity across its four words.',
  'rec-c2-02-cinq-pieges': 'The five trap cards (act 8), ONE VOICE, one take, read plainly, with no corrective or ironic tone on any of the five flawed claims.',
  'rec-c2-02-modele': "The model analysis (act 9), ONE VOICE, one take, a student reading her own finished paragraph aloud: confident, even pace, no dramatic emphasis.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 02',
  intro: "At C1 you learned the passé antérieur in narrative sequence, the literary sequence of moods, and how to name a figure of style's effect; c1.14 moved you from reaction to analysis, but across twelve separate short texts. This lesson reads ONE full literary extract, Maupassant's opening of \"La Parure\", through four lenses in turn, register, narrative voice, structure, figure, then asks you to hold all four together on the same lines, choose an integrated reading over a plausible-but-partial one, and finally write that integrated analysis yourself.",
  skill: 'CE',
  grammarAssumed: ['c1.14', 'c1.02', 'c1.03', 'c1.19'],
  grammarIntroduced: [
    'Reading register as a split WITHIN one extract (narration soignée against dialogue oral), rather than a single property of a whole text',
    'Narrative voice distinguished into the narrator’s outside judgement (ironic distance), free indirect discourse (unannounced, close to a character’s own consciousness) and direct speech, and the effect each choice has on how a character is built for the reader',
    'Narrative structure proved by a precise grammatical marker, here the exposition’s durative imparfait giving way to the narrative turn’s dated passé simple, read for its effect on pace rather than named as a fact alone',
    'Four figures of style (anaphore, énumération, antithèse, gradation) read for their combined, cumulative effect across one passage, rather than named one at a time in isolation',
    'Holding all four threads (register, voice, structure, figure) on the SAME line at once, choosing an integrated reading over a plausible-but-partial one, and naming the fault of stopping an analysis after the first correct claim',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au C1, tu as appris le passé antérieur dans le récit, la concordance littéraire des modes, et à nommer l’effet d’une figure. Cette leçon lit UN SEUL extrait littéraire complet, l’ouverture de « La Parure » de Maupassant, à travers quatre fils tenus un à un, puis ensemble sur les mêmes lignes, puis te demande de choisir la lecture qui les tient tous, et enfin d’écrire cette lecture toi-même.",
    minutes: 170,
    difficulty: 5,
    glyph: 'tapisserie',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ANALYSE_LITTERAIRE_TERMS,
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

/** Named so a batch, a merge and a test agree on what is named, not
 *  released: every row whose `drills` carries no `flashcard`. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
