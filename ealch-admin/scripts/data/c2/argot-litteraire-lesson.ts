// c2.04.l1 « Verlan, argot et registres : l’usage littéraire » — the lesson.
// DRAFT, fourth lesson of the C2 band, wave 1. To RICH-LESSON-STANDARD.md
// (the workshop shape, text and task) on top of B1-BUILD-PLAYBOOK.md, with
// the C2 rules of C2-BUILD-PLAN.md and the c2.04 brief in C2-BUILD-LOG.md.
//
// Not imported, not merged into seed.json, not published. No Postgres
// session was opened to WRITE anything while authoring this file; the one
// read-only probe (`scratch/_c204-probe.mts`) confirmed the id block and
// rolled back, per the corpus header, §A.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Acts 1 to 5 teach READING: a seminar misreads a deliberate choice as an
//   error (act 1); six nameable reasons an author deploys argot on purpose
//   (act 2); then three mechanisms, one extract each: a quoted character
//   line framed by guillemets and a reporting verb (act 3, discours direct);
//   the same kind of word with NO frame, fused into the narration (act 4,
//   discours indirect libre); and a soutenu, official text that quotes
//   argot for ironic contrast (act 5). Act 6 builds the reading grid that
//   sorts a DELIBERATE use from a genuine ACCIDENTAL slip. Act 7 names and
//   drills the exact trap the brief asks for: mistaking a literary
//   quotation for a licence to use the same word, unquoted, in one’s own
//   formal analysis. Act 8 models a full written analysis, then grades the
//   learner’s own, on a fresh extract never seen before.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Un mot entre guillemets      6  a seminar misreads le pèze as a
//                                       typo; the correction; the task
//                                       announced; le costume introduced
//    2  Pourquoi cet auteur          5  six reasons: vraisemblance,
//       choisit ce mot                  réalisme social, décalage ironique,
//                                       économie, connivence, distance
//    3  Discours direct              4  a quoted line, framed by guillemets
//                                       and a reporting verb, inside a
//                                       soigné narration
//    4  Discours indirect libre      4  the same kind of word, no frame,
//                                       fused straight into the narration
//    5  Le décalage ironique         4  a soutenu chronicle that quotes an
//                                       élu’s own argot, word for word
//    6  Accidentel ou voulu          4  the reading grid: four cues of a
//                                       deliberate choice, sorted against a
//                                       real register slip
//    7  Le piège                     4  citer n’est pas conseiller: the
//                                       stepped trap, six word pairs
//    8  Rédiger l’analyse           11  the model (Lucienne Berthoud), the
//                                       plan, a spoken rehearsal, TASK (a
//                                       fresh extract), practice, cheat,
//                                       progress, quiz, review, roundup
//
//   TOTAL 41 missions, 8 acts (6,4,4,4,4,4,4,11). Corpus: 132 authored rows
//   (.1000-.1131, inside the claimed .1000-.1199 block). Quiz: 8 rounds of 8
//   (mcq, typeIn, errorSpot, listenChoose mixed). Eight error triggers,
//   eight remediation drills, four reference sheets, eight terms. Chapter
//   artwork: `c2-argot-litteraire-image-prompts.md`, 8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un mot d’argot cité est un costume choisi pour un personnage, jamais un
//   vêtement que le texte te tend. » EN: A quoted slang word is a costume
//   chosen for a character, never a garment the text hands to you.
//
//   ONE METAPHOR, LE COSTUME. Acts 1-2 name the costume and why it is worn;
//   acts 3-5 show three ways a text puts it on a character (framed citation,
//   fused narration, ironic contrast); act 6 tells a real costume from a
//   simple stain on the fabric (an accident); act 7 is the trap itself
//   (never borrow the costume for yourself); act 8 asks the learner to
//   describe the costume in writing, never to wear it.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    six nameable reasons for a deliberate argot deployment; the
//           three mechanisms that frame it (discours direct, discours
//           indirect libre, décalage ironique inside a soutenu text); the
//           reading grid that tells deliberate from accidental; the named
//           trap (citer n’est pas adopter); producing a written analysis of
//           a fresh extract, graded on the reading and on never adopting
//           the cited word.
//   QUOTES  b2.32’s reframe (act 1), by REFRAME import, never retyped; its
//           four-rung register ladder and recognise-and-avoid judgement,
//           named once, never re-taught.
//   LEAVES  the register ladder itself, verlan’s own mechanism, clipping,
//           borrowings, texting abbreviations and WHEN NOT to use a slang
//           word oneself, all to b2.32 (« la leçon 32 du B2 »); a full
//           integrated literary analysis of register + voice + structure +
//           figures together (not argot-specific) to c2.02.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; invented characters use vous or tu as their
//   situation calls for. French only on the learner surface; English
//   authored on every `en` field and every trailing « EN: », never shown by
//   default. No em dash, no U+203F tie, never "honnête"/"honest". Typographic
//   ’ throughout. No spaced « ? » or « ! » in a scene or story bubble.
//   Citations by trail position in French words (« la leçon 32 du B2 »),
//   never a raw id. Every extract is an original pastiche, named as such
//   once in act 1 and never attributed to a real author. No argotique row
//   is ever released as a flashcard or voiceflash target (corpus §E):
//   analysis, never production. Mission answer slots are spread by
//   `balanceSlots()`; the quiz is scattered by hand (c2.01’s 6.11
//   convention), never by position-naming `why` text.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 41 missions sits inside "up to 100" and below c2.01’s 45. Acts 2 to 7
//      are deliberately lean and parallel (4 missions each, one extract or
//      one device each) rather than longer, since the six reasons and three
//      mechanisms are meant to be compared, not separately exhausted. Extend
//      any one of them before the phone review, or ship at this size?
//   2. Every extract is an ORIGINAL PASTICHE (corpus §C): this session made
//      no WebFetch/WebSearch call, so no Bruant/Céline/Queneau-era public
//      domain line could be verified word for word. If the pre-review pass
//      has live source access, it may want to replace one pastiche with a
//      verified public-domain extract instead, per the brief’s first
//      preference; this draft took the brief’s own fallback.
//   3. The six argot items (pèze, fauché, becter, la rousse, costard,
//      chouette) are checked against general knowledge of Le Robert/CNRTL
//      entries, not a live dictionary query this session (corpus §C):
//      flag for a fact-check pass before import, the same flag c2.01 raised
//      for the two contested connotation calls in its own act 4.
//   4. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   5. No row is reused from b2.32 by id (corpus §B): this draft’s one
//      Postgres session was read-only and scoped to the theme/id check, not
//      a row-level reuse lookup. Reuse specific b2.32 rows by id once the
//      pre-review pass has that access, or keep every example freshly
//      authored as this draft does?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  B232_REF, B232_REFRAME, B232_REFRAME_EN,
  PASTICHE_DIRECT, PASTICHE_DIRECT_EN, PASTICHE_INDIRECT_LIBRE, PASTICHE_INDIRECT_LIBRE_EN,
  PASTICHE_IRONIQUE, PASTICHE_IRONIQUE_EN, PASTICHE_FINAL, PASTICHE_FINAL_EN,
} from './argot-litteraire-corpus.ts';
import { ARGOT_LITTERAIRE_TERMS } from './argot-litteraire-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as unknown as SrcItem]));

/** An item’s fr/en. Throws on a typo, so no section can name an id that does
 *  not exist in this lesson’s own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.04: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });
const card = (id: string, head: string, label: string, body: string): Card => ({ head, label, fr: src(id).fr, body });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

const STEPS_STD = (cards: string, audio: string, drill: string) => ([
  { label: 'La règle', kind: 'rule' as const, title: 'La règle' },
  { label: 'Six cartes', kind: 'cards' as const, title: cards },
  { label: 'Écoute', kind: 'audio' as const, title: audio },
  { label: 'À toi', kind: 'drill' as const, title: drill, gate: true },
]);

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — UN MOT ENTRE GUILLEMETS
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une faute, ou un choix', frSub: 'Un séminaire de littérature, à Lyon',
  setting: { place: 'Une salle de séminaire, à la faculté de lettres', city: 'Lyon', time: '14 h, un mardi', ambience: 'une table ovale, un extrait photocopié devant chaque étudiant, la pluie contre les fenêtres' },
  beats: [
    { kind: 'narration', text: 'Lyon, un mardi après-midi. La professeure Aline Berthier distribue un court extrait, un texte imaginé pour ce séminaire, et demande ce que chacun y remarque.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Professeure Berthier', fr: 'Raphaël, qu’avez-vous remarqué dans la première phrase.', en: 'Raphaël, what did you notice in the first sentence.', respell: '[ra-fa-EHL kah-vay voo ruh-mar-KAY dahⁿ la pruh-myehr FRAZ]', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Raphaël', fr: src(E(1000)).fr, en: src(E(1000)).en, respell: '[luh vyuh ZHÜL na-veh plü uhⁿ PEHZ]', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'La professeure attend la suite.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Raphaël doit dire ce qu’il pense de ce mot. Laquelle de ces deux phrases dire.', size: 'lg',
      options: [
        { fr: src(E(1001)).fr, respell: '[eel ee a sahⁿ doot ün FOT]', en: src(E(1001)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1002)).fr, respell: '[loh-TUHR a shwa-ZEE suh moh]', en: src(E(1002)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'La professeure sourit : « Exactement. Et pourquoi, à votre avis, l’auteur ne lui fait-il pas dire : il n’avait plus d’argent. »',
        breaks: 'La professeure secoue la tête : « Ce n’est pas une faute, Raphaël. Relisez la phrase, et demandez-vous plutôt pourquoi ce mot-là. »',
      },
    },
    {
      kind: 'break', heading: 'Le pèze n’est pas une erreur',
      body: `${src(E(1003)).fr} EN: ${src(E(1003)).en}`,
      wrong: { fr: src(E(1001)).fr, ipa: '/il i a sɑ̃ dut yn fot il fo.dʁe e.kʁiʁ də laʁ.ʒɑ̃/', respell: '[eel ee a sahⁿ doot ün FOT eel fo-DRAY ay-KREER duh lar-ZHAHⁿ]', en: src(E(1001)).en },
      right: { fr: src(E(1003)).fr, ipa: '/lə pɛz isi nɛ pa yn ɛ.ʁœʁ də ʁə.ʒistʁ/', respell: '[luh PEHZ ee-see neh pa ün ay-RUHR duh ruh-ZHEESTR]', en: src(E(1003)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend exactement ce que Raphaël vient de découvrir : lire pourquoi un auteur place un mot d’argot là où on ne l’attend pas, sans jamais croire que cela t’autorise à l’employer toi-même dans ton propre texte soigné.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['costume'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Nommer pourquoi un auteur cite un mot d’argot', s: 'Acte 2 : six raisons nommables, un indice pour chacune' },
    { t: 'Repérer trois cadres qui encadrent la citation', s: 'Actes 3 à 5 : discours direct, discours indirect libre, décalage ironique' },
    { t: 'Séparer un choix voulu d’une vraie glissade', s: 'Acte 6 : la grille de lecture, quatre indices' },
    { t: 'Analyser sans jamais adopter le mot cité', s: 'Actes 7 et 8 : le piège, puis ta propre mission écrite' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Note de cours : lire l’argot cité', frSub: 'La note que la professeure distribue après le séminaire',
  text: 'Un mot d’argot, dans un texte, n’est presque jamais une faute. Le plus souvent, il est placé là exactement où il est, pour une raison précise : donner une voix à un personnage, situer un milieu, créer un contraste avec le reste du texte. Reconnaître ce choix demande de chercher un cadre : des guillemets, un verbe de parole, un net changement de registre par rapport au paragraphe qui l’entoure. Sans aucun de ces indices, dans un texte qui se voulait soigné de bout en bout, le mot argotique n’est plus un choix de l’auteur, mais une vraie glissade, une faiblesse à corriger. Et dans tous les cas, comprendre pourquoi un mot est cité n’autorise jamais à l’employer soi-même, sans guillemets, dans sa propre analyse.',
  glossary: [
    { word: 'un cadre', en: 'a frame', note: 'Ici, ce qui entoure et signale une citation : guillemets, verbe de parole, contraste de registre. EN: what surrounds and signals a quotation.' },
  ],
  questions: [
    { q: 'Global : à qui s’adresse cette note, et pour quoi faire.', a: 'À un étudiant de littérature : elle explique comment distinguer un mot d’argot voulu d’une vraie faute, et prévient contre l’emploi du mot cité dans sa propre analyse.' },
    { q: 'Détail : quels sont les trois indices d’un cadre.', a: 'Des guillemets, un verbe de parole, un net changement de registre par rapport au paragraphe environnant.' },
    { q: 'Inférence : pourquoi la note insiste-t-elle sur « sans aucun de ces indices ».', a: 'Parce que l’absence complète de cadre signale que le mot n’est pas un choix de l’auteur, mais une glissade, une faiblesse à corriger, pas un procédé à analyser.' },
  ],
  audio: REC('rec-c2-04-note-cours'), say: REFRAME, terms: ['costume', 'grilleLecture'],
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: B232_REFRAME, en: B232_REFRAME_EN, note: `${Cap(B232_REF)} : placer un mot d’argot sur l’échelle, et ne jamais l’employer là où il ne va pas` },
    { fr: 'Cette leçon part du même mot, déjà mal placé par quelqu’un d’autre, à dessein : pourquoi.', en: 'This lesson starts from the same word, already placed where it does not belong by someone else, on purpose: why.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['costume'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un roman fait parler un personnage comme la rue le fait vraiment parler', fr: src(E(1032)).fr, en: src(E(1032)).en },
    { situation: 'Un devoir d’étudiant analyse une citation argotique', fr: src(E(1007)).fr, en: src(E(1007)).en },
    { situation: 'Tu dois juger si un mot cité est voulu ou accidentel', fr: src(E(1004)).fr, en: src(E(1004)).en },
    { situation: 'Tu écris ta propre analyse d’un nouvel extrait', fr: src(E(1013)).fr, en: src(E(1013)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['costume'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le pèze de Jules', '« Il n’avait plus un pèze » : ce mot, dans ce texte, est...', ['une faute à corriger', 'un choix délibéré de l’auteur'], 1,
    'L’auteur a choisi ce mot pour nous faire entendre comment Jules voit sa propre vie. EN: the author chose this word on purpose.'),
  ctl('La règle', 'Comprendre pourquoi un mot d’argot est cité...', ['autorise à l’employer dans sa propre analyse', 'ne l’autorise jamais'], 1,
    'Analyser n’est pas adopter : le piège exact de l’acte 7. EN: analysing is not adopting.'),
  ctl('La mission de cette leçon', 'Cette leçon t’apprend à...', ['lire pourquoi un mot d’argot est cité, et à ne jamais l’adopter', 'employer plus d’argot dans tes propres textes'], 0,
    'Lire, nommer, ne jamais adopter : les trois gestes de toute la leçon. EN: read, name, never adopt.'),
], ['costume']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Un mot entre guillemets',
    opener: {
      line: 'Raphaël prend un mot d’argot pour une faute ; la professeure Berthier lui montre que c’est un costume, choisi exprès pour Jules. EN: Raphaël mistakes a slang word for an error; Professor Berthier shows him it is a costume, chosen on purpose for Jules.',
      imageRef: 'lessons/c2-04-argot-litteraire/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sépares un mot d’argot choisi exprès d’une vraie faute, et tu annonces la mission de toute la leçon. EN: You can tell a deliberately chosen slang word from a real mistake, and you can state this lesson’s whole mission.',
    estScreens: 26, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_ACQUIS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — POURQUOI CET AUTEUR CHOISIT CE MOT
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-costume',
  title: 'Six raisons, un seul principe', frSub: 'Le mot sert le texte, jamais le hasard',
  hint: 'Six cartes. Chaque raison se prouve par un indice précis dans le texte.',
  audio: REC('rec-c2-04-six-raisons'), say: REFRAME, terms: ['raisons'],
  cards: [
    card(E(1014), 'La vraisemblance', 'donner une voix', 'On entend l’homme, pas seulement le fait : le mot rend le personnage crédible. EN: we hear the man, not only the fact.'),
    card(E(1016), 'Le réalisme social', 'situer un milieu', 'Trois mots, et tout un quartier, une génération, apparaissent. EN: three words, and a whole neighbourhood appears.'),
    card(E(1018), 'Le décalage ironique', 'créer un contraste', 'Cité en pleine réunion officielle, le mot crée un contraste que le reste du texte ne referme jamais. EN: quoted mid-meeting, the word creates a lasting contrast.'),
    card(E(1020), 'L’économie', 'remplacer un paragraphe', 'Un seul mot, et le lecteur voit déjà l’homme, son âge, sa seule tenue correcte. EN: one word, and the reader already sees the man.'),
    card(E(1022), 'La connivence', 'partager un regard', 'Le mot familier invite le lecteur à partager le regard du personnage, pas à le juger. EN: the word invites the reader to share the character’s view.'),
    card(E(1024), 'La distance narrative', 'montrer sans cautionner', 'Le narrateur montre un point de vue sans jamais le reprendre à son compte. EN: the narrator shows a view without endorsing it himself.'),
  ],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Nomme la raison, puis l’indice', frSub: 'Six raisons, un seul test',
  groups: [
    grp('Voix et milieu', [
      it(E(1014), 'la vraisemblance'),
      it(E(1016), 'le réalisme social'),
    ], chk('Ces deux raisons ont en commun de...', ['critiquer un personnage', 'rendre un personnage ou un milieu crédible'], 1,
      'Les deux donnent au texte une crédibilité qu’un mot neutre n’aurait pas apportée. EN: both give the text a credibility a neutral word would not have.')),
    grp('Contraste et économie', [
      it(E(1018), 'le décalage ironique'),
      it(E(1020), 'l’économie de caractérisation'),
    ], chk('Le décalage ironique se prouve surtout par...', ['un contraste entre le cadre et le mot cité', 'le sens du mot seul'], 0,
      'Le décalage vient du cadre, jamais du mot pris seul. EN: the contrast comes from the frame, never the word alone.')),
    ctl('Connivence et distance', 'La connivence et la distance narrative diffèrent surtout parce que...', ['la connivence partage, la distance garde un écart', 'elles sont exactement la même chose'], 0,
      'La connivence invite le lecteur à partager un regard ; la distance garde le narrateur à l’écart de ce regard. EN: complicity shares a view; distance keeps the narrator apart from it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['raisons'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a2-exemples', layer: 'core', title: 'Le même principe, répété',
  examples: [
    ex(E(1026), 'le même fait, dit par le narrateur, perdrait tout'),
    ex(E(1027), 'six raisons, un seul principe'),
    ex(E(1030), 'reconnaître la raison n’efface jamais le registre réel'),
    ex(E(1033), 'la méthode : nommer la raison, puis chercher l’indice'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['raisons'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Les six raisons', 'Un mot d’argot cité sert toujours...', ['le hasard de l’auteur', 'une raison nommable'], 1,
    'Vraisemblance, réalisme, ironie, économie, connivence, distance : six raisons nommables. EN: six nameable reasons.'),
  ctl('La méthode', 'Pour nommer une raison, il faut toujours...', ['une impression générale', 'un indice précis dans le texte'], 1,
    'Nommer, puis prouver par un indice du texte. EN: name, then prove with a textual cue.'),
  ctl('Le costard de Jules', 'Un seul mot, costard, qui montre déjà l’homme et son âge, illustre la raison appelée...', ['la connivence', 'l’économie de caractérisation'], 1,
    'Un mot remplace ici toute une description. EN: one word replaces a whole description.'),
], ['raisons']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Pourquoi cet auteur choisit ce mot',
    opener: {
      line: 'Six costumes, six raisons de les choisir : ici tu apprends à nommer pourquoi un auteur habille un personnage d’un mot d’argot. EN: Six costumes, six reasons to choose them: here you learn to name why an author dresses a character in a slang word.',
      imageRef: 'lessons/c2-04-argot-litteraire/act02.jpg',
    },
    sections: [],
    milestone: 'Tu nommes, parmi six raisons, celle qui explique un choix d’argot, et tu la prouves par un indice du texte. EN: You can name, among six reasons, the one that explains an argot choice, and prove it with a textual cue.',
    estScreens: 26, restPoints: ['a2-groupe'],
  },
  sections: [A2_DECK, A2_GROUPE, A2_EXEMPLES, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — DISCOURS DIRECT : LA VOIX CITÉE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Jules, dans l’escalier', frSub: 'Un texte imaginé pour cette leçon',
  text: PASTICHE_DIRECT,
  glossary: [
    { word: 'fauché', en: 'broke, penniless', note: 'Argot classique pour sans argent. EN: classic argot for having no money.' },
    { word: 'becte', en: 'eats (becter, to eat)', note: 'Argot classique pour manger. EN: classic argot for to eat.' },
  ],
  questions: [
    { q: 'Global : qui parle dans la phrase entre guillemets, et qui parle autour.', a: 'Jules parle dans la phrase entre guillemets ; le narrateur parle dans tout le reste, en une langue soignée.' },
    { q: 'Détail : quels deux indices encadrent la phrase de Jules.', a: 'Les guillemets, et le verbe de parole « dit Jules ».' },
    { q: 'Inférence : pourquoi le narrateur continue-t-il, lui, dans une langue soignée après cette phrase.', a: 'Pour marquer que le registre argotique appartient à Jules, pas au narrateur, et pour garder tout le contraste entre les deux voix.' },
    { q: 'Point de vue : que révèle ce contraste sur le regard du narrateur envers Jules.', a: 'Une forme de tendresse : il cite Jules sans le juger, et laisse sa manière de rire de sa propre misère parler pour elle-même.' },
  ],
  audio: REC('rec-c2-04-jules-escalier'), say: REFRAME, terms: ['discoursDirect'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-discours',
  title: 'Deux indices, un cadre net', frSub: 'Guillemets et verbe de parole',
  hint: 'Deux cartes, une règle : ce qui est dedans n’est pas signé par qui écrit autour.',
  audio: AUDIO, say: REFRAME, terms: ['discoursDirect'],
  cards: [
    card(E(1035), 'Les guillemets', 'un cadre', 'Les guillemets encadrent la phrase comme un cadre encadre un tableau. EN: quotation marks frame a line the way a frame surrounds a painting.'),
    card(E(1036), 'Le verbe de parole', 'une annonce', '« dit Jules » annonce que la phrase qui suit appartient à quelqu’un, pas au narrateur. EN: "said Jules" announces the line belongs to someone, not the narrator.'),
  ],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', size: 'lg',
  title: 'Deux voix, un seul passage', frSub: 'Qui parle, à chaque phrase',
  groups: [
    grp('La voix de Jules', [
      free('« Encore fauché, ce mois-ci, mon vieux »', '"Broke again this month, old friend"', 'entre guillemets, un verbe de parole'),
      it(E(1041), 'Fernand ne répondit rien'),
    ], chk('« Encore fauché, ce mois-ci, mon vieux » appartient à...', ['Jules, entre guillemets', 'au narrateur, qui parle ainsi lui-même'], 0,
      'Les guillemets et « dit Jules » annoncent une citation, jamais la propre voix du narrateur. EN: the quotation marks and "said Jules" announce a citation.')),
    grp('La voix du narrateur', [
      it(E(1040), 'le reste du texte, soigné'),
      it(E(1042), 'deux voix coexistent'),
    ], chk('Le paragraphe qui entoure la citation reste...', ['argotique, comme la citation', 'soigné, presque littéraire'], 1,
      'Le registre du narrateur ne change pas autour d’une citation encadrée. EN: the narrator’s register does not shift around a framed quotation.')),
    ctl('Et sans les guillemets', 'Si l’on retirait les guillemets de la phrase de Jules, elle deviendrait...', ['indiscernable de la voix du narrateur', 'encore plus marquée comme une citation'], 0,
      'Sans cadre, une phrase argotique se confond avec le reste du texte. EN: without a frame, an argotic line blends into the rest of the text.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['discoursDirect'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le cadre', 'Une phrase citée, encadrée par des guillemets et un verbe de parole, est toujours...', ['un hasard de ponctuation', 'un choix délibéré de l’auteur'], 1,
    'Guillemets et verbe de parole annoncent toujours un choix. EN: quotation marks and a reporting verb always announce a choice.'),
  ctl('Le contraste', 'Le registre de la phrase citée et celui du paragraphe qui l’entoure...', ['sont toujours identiques', 'peuvent nettement contraster'], 1,
    'Le contraste, ici, dit la tendresse du narrateur, pas une faute. EN: the contrast speaks to the narrator’s tenderness, not a mistake.'),
  ctl('Sans le cadre', 'Une phrase argotique sans guillemets ni verbe de parole, dans un texte par ailleurs soigné, relève plutôt de...', ['l’acte suivant, le discours indirect libre', 'exactement le même procédé'], 0,
    'Même mécanisme de fond, cadre différent : c’est l’objet de l’acte 4. EN: same underlying mechanism, a different frame.'),
], ['discoursDirect']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Discours direct',
    opener: {
      line: 'Entre deux paragraphes soignés, une phrase de Jules, entre guillemets : ici tu apprends à reconnaître une voix encadrée. EN: Between two careful paragraphs, a line from Jules, in quotation marks: here you learn to recognise a framed voice.',
      imageRef: 'lessons/c2-04-argot-litteraire/act03.jpg',
    },
    sections: [],
    milestone: 'Tu repères une citation encadrée par des guillemets et un verbe de parole, et tu nommes le contraste qu’elle crée. EN: You can spot a quotation framed by quotation marks and a reporting verb, and name the contrast it creates.',
    estScreens: 22, restPoints: ['a3-groupe'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_GROUPE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — DISCOURS INDIRECT LIBRE : LA VOIX FONDUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Jules, dans l’escalier, sans guillemets', frSub: 'Le même homme, une autre page',
  text: PASTICHE_INDIRECT_LIBRE,
  glossary: [
    { word: 'un pèze', en: 'money (slang)', note: 'Argot classique pour l’argent. EN: classic argot for money.' },
  ],
  questions: [
    { q: 'Global : ce passage cite-t-il une phrase de Jules entre guillemets.', a: 'Non : aucun guillemet, aucun verbe de parole n’apparaît nulle part dans ce passage.' },
    { q: 'Détail : quel mot, pourtant, semble sortir directement de Jules plutôt que du narrateur.', a: '« Un pèze », dans « il n’avait plus un pèze », un mot que le narrateur n’emploierait pas pour lui-même.' },
    { q: 'Inférence : comment repères-tu ce mot sans l’aide d’un guillemet.', a: 'Par le registre : « un pèze » ne correspond pas au reste du registre, par ailleurs neutre, de la narration.' },
  ],
  audio: REC('rec-c2-04-jules-sans-guillemets'), say: REFRAME, terms: ['discoursIndirectLibre'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-discours',
  title: 'Aucun guillemet, un seul indice', frSub: 'Le registre, jamais la ponctuation',
  hint: 'Deux cartes : la fusion des voix, puis la méthode pour la repérer.',
  audio: AUDIO, say: REFRAME, terms: ['discoursIndirectLibre'],
  cards: [
    card(E(1052), 'La fusion des voix', 'sans annonce', 'Le discours indirect libre fond la voix du personnage dans celle du narrateur, sans jamais l’annoncer. EN: free indirect style blends the character’s voice into the narrator’s, without ever announcing it.'),
    card(E(1053), 'L’indice', 'un registre, pas un signe', 'L’indice n’est pas un guillemet : c’est un mot dont le registre ne colle pas au reste du paragraphe. EN: the cue is not a quotation mark: it is a word whose register does not match the rest of the paragraph.'),
  ],
};

const A4_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-groupe', layer: 'core', size: 'lg',
  title: 'Deux pages, deux cadres', frSub: 'Compare l’acte 3 et l’acte 4',
  groups: [
    grp('Discours direct (acte 3)', [
      free('« Encore fauché, ce mois-ci, mon vieux »', '"Broke again this month, old friend"', 'guillemets, verbe de parole'),
    ], chk('Cette phrase appartient à...', ['une citation clairement encadrée', 'une voix fondue, sans cadre'], 0,
      'Les guillemets et « dit Jules » encadrent nettement la citation. EN: the quotation marks and "said Jules" clearly frame the citation.')),
    grp('Discours indirect libre (acte 4)', [
      it(E(1048), 'il n’avait plus un pèze'),
    ], chk('Cette phrase appartient à...', ['une citation clairement encadrée', 'une voix fondue, repérée par le seul registre'], 1,
      'Aucun guillemet ici : seul le registre du mot « pèze » trahit la voix de Jules. EN: no quotation marks here; only the word’s register gives Jules’s voice away.')),
    ctl('Le point commun', 'Dans les deux actes, le mot argotique appartient...', ['toujours au narrateur lui-même', 'toujours à Jules, cité ou fondu'], 1,
      'Le mot reste celui de Jules ; seul le cadre qui l’entoure change. EN: the word stays Jules’s; only its surrounding frame changes.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['discoursIndirectLibre', 'discoursDirect'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’indice', 'Dans le discours indirect libre, l’indice d’une voix fondue est...', ['toujours un guillemet', 'un registre qui ne colle pas au reste du paragraphe'], 1,
    'Aucun guillemet ici : seul le registre trahit la voix fondue. EN: no quotation marks; only the register gives it away.'),
  ctl('La comparaison', 'Le discours direct encadre la voix du personnage ; le discours indirect libre...', ['fait la même chose, avec d’autres mots', 'la dissout dans celle du narrateur'], 1,
    'Dissoudre, pas encadrer : la différence exacte entre les deux actes. EN: dissolve, not frame; the exact difference between the two acts.'),
  ctl('La méthode', 'Pour repérer un discours indirect libre, il faut comparer...', ['le registre d’une phrase à celui du paragraphe qui la porte', 'seulement la longueur des phrases'], 0,
    'Compare toujours le registre d’une phrase à son contexte immédiat. EN: always compare a sentence’s register to its immediate context.'),
], ['discoursIndirectLibre']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Discours indirect libre',
    opener: {
      line: 'Le même Jules, la même pauvreté, mais plus aucun guillemet : ici tu apprends à entendre une voix fondue dans celle du narrateur. EN: The same Jules, the same poverty, but no quotation marks at all: here you learn to hear a voice dissolved into the narrator’s.',
      imageRef: 'lessons/c2-04-argot-litteraire/act04.jpg',
    },
    sections: [],
    milestone: 'Tu repères un mot argotique fondu sans guillemet dans la narration, par son seul registre. EN: You can spot a slang word dissolved, with no quotation marks, into the narration, by its register alone.',
    estScreens: 22, restPoints: ['a4-groupe'],
  },
  sections: [A4_LECTURE, A4_CARTES, A4_GROUPE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE DÉCALAGE IRONIQUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Le conseil municipal, mardi soir', frSub: 'Une chronique imaginée pour cette leçon',
  text: PASTICHE_IRONIQUE,
  glossary: [
    { word: 'les caisses', en: 'the coffers, the funds', note: 'Ici, le budget de la commune. EN: here, the town’s budget.' },
  ],
  questions: [
    { q: 'Global : quel est le registre général de cette chronique.', a: 'Un registre soutenu, journalistique, de bout en bout, sauf dans la phrase citée de l’élu.' },
    { q: 'Détail : quels mots, dans la citation, appartiennent à l’argot.', a: '« fauchés » et « un pèze », pour dire qu’il n’y a plus d’argent.' },
    { q: 'Inférence : pourquoi le chroniqueur choisit-il de citer l’élu mot pour mot, plutôt que de résumer.', a: 'Pour faire sentir le contraste entre la franchise crue de l’élu et le cadre officiel de la réunion, un décalage qu’un résumé poli aurait effacé.' },
    { q: 'Point de vue : le chroniqueur juge-t-il l’élu dans sa propre voix.', a: 'Non, pas directement : il laisse la citation elle-même, et le silence qu’elle provoque, porter le jugement.' },
  ],
  audio: REC('rec-c2-04-conseil-municipal'), say: REFRAME, terms: ['decalageIronique'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-decalage',
  title: 'Un cadre soutenu, un mot qui ne l’est pas', frSub: 'La citation reste citée',
  hint: 'Deux cartes : le contraste, puis la règle qui protège le cadre.',
  audio: AUDIO, say: REFRAME, terms: ['decalageIronique'],
  cards: [
    card(E(1064), 'Le point visé', 'un contraste senti', 'Ce décalage, entre le cadre officiel et les mots exacts de l’élu, est le point que le chroniqueur veut faire sentir. EN: this gap, between the official setting and the councillor’s exact words, is the very point the columnist wants felt.'),
    card(E(1070), 'Le cadre protégé', 'jamais contaminé', 'Un texte soutenu qui cite un mot argotique ne devient pas lui-même argotique : il reste soutenu, et la citation reste citée. EN: a soutenu text quoting an argotic word does not itself become argotic.'),
  ],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', size: 'lg',
  title: 'Pourquoi citer, plutôt que résumer', frSub: 'Le choix du chroniqueur',
  groups: [
    grp('Citer mot pour mot', [
      it(E(1061), 'on est fauchés, messieurs'),
      it(E(1065), 'citer plutôt que résumer, un jugement en soi'),
    ], chk('Citer mot pour mot, plutôt que résumer poliment, est déjà...', ['un jugement neutre, sans portée', 'un jugement du chroniqueur sur la scène qu’il décrit'], 1,
      'Le choix même de la citation porte un jugement, avant tout commentaire explicite. EN: the choice of quotation itself carries a judgement, before any explicit comment.')),
    grp('Résumer poliment', [
      it(E(1066), 'des difficultés budgétaires sont à prévoir'),
    ], chk('Un compte rendu qui aurait résumé ainsi aurait...', ['gardé tout le décalage', 'effacé tout le décalage'], 1,
      'Un résumé neutre efface exactement le contraste que la citation crée. EN: a neutral summary erases exactly the contrast the quotation creates.')),
    ctl('Le genre du texte', 'La même citation, dans un roman plutôt qu’une chronique, servirait plutôt...', ['la vraisemblance que l’ironie', 'exactement la même fonction'], 0,
      'Le genre du texte change la raison, pas le mécanisme. EN: the text’s genre changes the reason, not the mechanism.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['decalageIronique'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le cadre', 'Un texte soutenu qui cite un mot argotique...', ['devient lui-même argotique', 'reste soutenu, la citation reste citée'], 1,
    'Le cadre protège sa propre nature. EN: the frame protects its own nature.'),
  ctl('Le choix du chroniqueur', 'Citer mot pour mot plutôt que résumer...', ['est un choix neutre, sans effet', 'porte déjà un jugement sur la scène'], 1,
    'Le choix de citer, en soi, dit quelque chose. EN: the choice to quote, in itself, says something.'),
  ctl('Trois textes, un principe', 'Le registre cité contraste toujours avec le registre qui l’entoure...', ['par hasard', 'pour une raison précise'], 1,
    'Jamais par hasard : toujours pour une raison nommable. EN: never by chance; always for a nameable reason.'),
], ['decalageIronique']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le décalage ironique',
    opener: {
      line: 'Un conseil municipal, des notables en costard, et une phrase crue citée au milieu d’eux : ici tu apprends à sentir le décalage que le texte vise. EN: A town council, notables in suits, and one blunt line quoted among them: here you learn to feel the contrast the text aims for.',
      imageRef: 'lessons/c2-04-argot-litteraire/act05.jpg',
    },
    sections: [],
    milestone: 'Tu nommes le décalage entre un cadre soutenu et une citation argotique, et la raison précise qu’il sert. EN: You can name the gap between a soutenu frame and an argotic quotation, and the precise reason it serves.',
    estScreens: 22, restPoints: ['a5-groupe'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_GROUPE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — ACCIDENTEL OU VOULU : LA GRILLE DE LECTURE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_GRILLE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-grille', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-decalage',
  title: 'Quatre indices du choix voulu', frSub: 'Et leur absence complète',
  hint: 'Quatre cartes, une grille : cherche le cadre avant de chercher le sens.',
  audio: REC('rec-c2-04-grille'), say: REFRAME, terms: ['grilleLecture'],
  cards: [
    card(E(1074), 'Guillemets ou verbe de parole', 'premier indice', 'Un indice du choix délibéré : des guillemets ou un verbe de parole qui encadrent le mot. EN: quotation marks or a reporting verb framing the word.'),
    card(E(1075), 'Un contraste net', 'deuxième indice', 'Un indice du choix délibéré : un contraste net avec le registre du paragraphe qui l’entoure. EN: a clear contrast with the surrounding register.'),
    card(E(1076), 'Un effet nommable', 'troisième indice', 'Un indice du choix délibéré : un effet nommable, pour un personnage, pour l’ironie, pour le réalisme. EN: a nameable effect.'),
    card(E(1077), 'Leur absence complète', 'le signal inverse', 'L’absence de ces indices, dans un texte qui se veut soigné de bout en bout, signale plutôt un accident. EN: the absence of these cues signals an accident instead.'),
  ],
};

const A6_TRI: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-tri', layer: 'core', size: 'lg',
  title: 'Voulu, ou accidentel', frSub: 'Quatre textes, deux catégories',
  groups: [
    grp('Voulu : le cadre le prouve', [
      it(E(1078), 'encore fauché, dit Jules : guillemets, verbe de parole'),
      it(E(1079), 'il n’avait plus un pèze : registre décalé, sans autre explication'),
      it(E(1080), 'on est fauchés, messieurs : contraste net, effet ironique nommable'),
    ], chk('Ces trois phrases ont en commun...', ['un vrai mot d’argot, et rien d’autre', 'un cadre qui prouve le choix : guillemet, registre décalé ou contraste'], 1,
      'Dans chaque cas, un cadre précis prouve le choix délibéré. EN: in each case, a precise frame proves the deliberate choice.')),
    grp('Accidentel : aucun cadre', [
      free('Madame, je me permets de vous écrire concernant le dossier. Bref, j’ai un peu la rage parce que ça traîne. Cordialement.', 'Madam, I am writing regarding the file. Anyway, I am a bit furious because it is dragging on. Regards.', 'aucun guillemet, aucun verbe de parole'),
      free('Dans cet extrait, l’auteur montre bien que le personnage est carrément à cran, ce qui prouve son style littéraire.', 'In this extract, the author clearly shows the character is totally on edge, which proves his literary style.', 'une analyse qui glisse elle-même'),
    ], chk('Ces deux phrases montrent...', ['un choix délibéré de registre', 'une vraie glissade, sans aucun cadre qui la prouve'], 1,
      'Rien n’encadre ni ne justifie le mot argotique : c’est une glissade, pas un procédé. EN: nothing frames or justifies the slang word; it is a slip, not a device.')),
    ctl('Le même mot, deux statuts', '« Fauché » peut être voulu dans un roman et accidentel dans une lettre officielle, parce que...', ['le mot change de sens selon le texte', 'le tri porte sur le cadre, jamais sur le mot seul'], 1,
      'Même mot, cadre différent, statut différent. EN: same word, different frame, different status.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['grilleLecture', 'glissade'],
};

const A6_METHODE: Sec<'examples'> = {
  type: 'examples', id: 'a6-methode', layer: 'core', title: 'La règle, répétée',
  examples: [
    ex(E(1085), 'le tri ne porte jamais sur le mot seul'),
    ex(E(1086), 'le tri porte sur le cadre'),
    ex(E(1090), 'cherche toujours le cadre avant le sens'),
    ex(E(1092), 'ce que l’acte suivant va piéger'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['grilleLecture'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le tri', 'Pour juger un mot d’argot dans un texte, il faut chercher...', ['son sens seul', 'son cadre, avant son sens'], 1,
    'Le cadre décide ; le sens seul ne dit rien du statut du mot. EN: the frame decides; meaning alone says nothing about the word’s status.'),
  ctl('La lettre accidentelle', '« J’ai un peu la rage », dans une lettre par ailleurs soutenue, sans guillemet ni effet nommable, est...', ['un procédé littéraire réussi', 'une vraie glissade de registre'], 1,
    'Aucun cadre ne prouve un choix ici : c’est une faiblesse, pas un procédé. EN: no frame proves a choice here; it is a weakness, not a device.'),
  ctl('Le devoir qui glisse', 'Un devoir d’étudiant qui glisse dans l’argot en analysant un texte est...', ['un procédé littéraire, comme le texte qu’il analyse', 'jamais un procédé littéraire, lui'], 1,
    'Ceci annonce exactement le piège du prochain acte. EN: this announces exactly the next act’s trap.'),
], ['grilleLecture']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Accidentel ou voulu',
    opener: {
      line: 'Quatre textes, un seul test : un cadre qui prouve le choix, ou son absence complète. EN: Four texts, one test: a frame that proves the choice, or its complete absence.',
      imageRef: 'lessons/c2-04-argot-litteraire/act06.jpg',
    },
    sections: [],
    milestone: 'Tu tries un mot d’argot cité, voulu ou accidentel, par son cadre, jamais par le mot seul. EN: You can sort a quoted slang word, deliberate or accidental, by its frame, never by the word alone.',
    estScreens: 24, restPoints: ['a6-tri'],
  },
  sections: [A6_GRILLE, A6_TRI, A6_METHODE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE PIÈGE : CITER N’EST PAS CONSEILLER
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_INTRO: Sec<'examples'> = {
  type: 'examples', id: 'a7-intro', layer: 'core', title: 'Le piège, nommé',
  examples: [
    ex(E(1094), 'deux gestes opposés, pas deux degrés du même geste'),
    ex(E(1107), 'la règle centrale'),
    ex(E(1108), 'même avec deux mots modernes bien connus'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['piege'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'Six mots, un seul piège',
  rule: {
    title: 'Citer n’est pas conseiller',
    body: 'Expliquer un choix d’argot ne permet jamais de l’employer, sans guillemets, dans ta propre analyse. Garde le mot cité entre guillemets ; ta phrase garde son propre vocabulaire. EN: explaining a choice never licenses using the word, unquoted, in your own analysis.',
  },
  cards: [
    { promptLabel: 'fauché, adopté par erreur', promptSound: 'L’auteur est fauché de mots pour décrire Jules, ce qui montre son style.', fr: src(E(1096)).fr, ipa: '/ɑ̃ ɑ̃.plwa.jɑ̃ lə tɛʁm aʁ.go.tik fo.ʃe lo.tœʁ fe ɑ̃.tɑ̃dʁ la vwa mɛm də ʒyl/', tip: 'Entre guillemets, « fauché » reste la voix de Jules, jamais le vocabulaire de ta propre analyse. EN: in quotation marks, "fauché" stays Jules’s voice, never your analysis’s own vocabulary.' },
    { promptLabel: 'becter, adopté par erreur', promptSound: 'On a vraiment envie de becter après cette lecture, tellement l’extrait donne faim.', fr: src(E(1098)).fr, ipa: '/lə vɛʁb bɛk.te mi dɑ̃ la buʃ də ʒyl ɑ̃.kʁ lə pɛʁ.so.naʒ dɑ̃ œ̃ mi.ljø py.py.lɛʁ/', tip: 'Becter ancre Jules dans son milieu ; ta propre analyse n’a pas besoin de ce mot pour le dire. EN: becter anchors Jules in his milieu; your own analysis does not need that word to say so.' },
    { promptLabel: 'pèze, adopté par erreur', promptSound: 'Comme l’élu, on peut dire que la commune est bien fauchée cette année, il n’y a plus un pèze dans le budget réel.', fr: src(E(1100)).fr, ipa: '/la si.ta.sjɔ̃ di.ʁɛkt de mo də le.ly kʁe œ̃ kɔ̃.tʁast i.ʁɔ.nik/', tip: 'La citation directe crée le contraste ; ta propre phrase d’analyse n’a pas besoin de répéter le mot pour en parler. EN: the direct quotation creates the contrast; your own analytical sentence does not need to repeat the word to discuss it.' },
    { promptLabel: 'la rousse, adopté par erreur', promptSound: 'Le texte parle de la police avec le mot rousse, donc je dirai aussi que la rousse a raison d’intervenir dans mon rapport officiel.', fr: src(E(1102)).fr, ipa: '/lə tɛkst ɑ̃.plwa lə mo aʁ.go.tik la ʁus puʁ la po.lis/', tip: 'Le mot situe le point de vue d’un personnage ; ton propre rapport garde le mot « police ». EN: the word places a character’s point of view; your own report keeps the word "police".' },
    { promptLabel: 'costard, adopté par erreur', promptSound: 'Pour mon entretien d’embauche, je vais mettre mon costard, comme dans le texte, exactement comme Jules.', fr: src(E(1104)).fr, ipa: '/ʒyl pɔʁt sɔ̃ kɔs.taʁ tɛʁm fa.mi.lje ki ʁa.pɛl sa kɔ̃.di.sjɔ̃ mo.dɛst/', tip: 'Costard reste un détail à analyser chez Jules, jamais un mot à reprendre dans ton propre registre d’examen. EN: costard stays a detail to analyse in Jules, never a word to reuse in your own exam register.' },
    { promptLabel: 'chouette, adopté par erreur', promptSound: 'L’extrait est vraiment chouette à lire, on sent le style de l’auteur.', fr: src(E(1106)).fr, ipa: '/la.dʒɛk.tif fa.mi.lje ʃu.ɛt dɔn də la ʃa.lœʁ o pɛʁ.so.naʒ/', tip: 'Chouette donne de la chaleur à Jules ; ton propre commentaire garde son registre soutenu. EN: chouette gives Jules warmth; your own commentary keeps its soutenu register.' },
  ],
  drill: [
    { promptSay: 'Pour nommer un mot d’argot dans ton analyse, tu le mets...', opts: ['entre guillemets', 'tel quel, sans marque'], correct: 0 },
    { promptSay: 'Becter, chez Jules, ancre le personnage dans son milieu ; ta propre phrase d’analyse...', opts: ['peut reprendre becter librement', 'garde son propre vocabulaire, soutenu'], correct: 1 },
    { promptSay: 'La citation « on est fauchés, messieurs » crée un contraste ; pour en parler, ton analyse dit plutôt...', opts: ['la citation directe des mots de l’élu crée un contraste', 'la commune est bien fauchée, comme l’élu'], correct: 0 },
    { promptSay: 'Le mot « la rousse », dans le texte, situe le point de vue d’un personnage ; ton propre rapport officiel garde le mot...', opts: ['la rousse', 'la police'], correct: 1 },
    { promptSay: 'Costard, chez Jules, est un détail à...', opts: ['analyser, jamais reproduire', 'reproduire, pour mieux l’analyser'], correct: 0 },
    { promptSay: 'Chouette, employé du point de vue de Jules, ne devient jamais...', opts: ['un détail de caractérisation', 'le vocabulaire du commentaire qui l’analyse'], correct: 1 },
    { promptSay: 'La règle de cet acte tient aussi pour deux mots modernes bien connus comme relou ou wesh : ils restent...', opts: ['citables entre guillemets, jamais adoptés', 'libres d’emploi, une fois le texte analysé'], correct: 0 },
    { promptSay: 'Expliquer pourquoi un mot est cité...', opts: ['autorise à l’employer dans sa propre analyse', 'ne l’autorise jamais'], correct: 1 },
  ],
  steps: STEPS_STD('Six mots, un seul piège', 'Écoute les six phrases bien réglées', 'Huit phrases'),
  audio: REC('rec-c2-04-piege'), say: REFRAME, terms: ['piege'],
};

const A7_PRATIQUE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-pratique', layer: 'core', size: 'lg',
  title: 'Analyser, sans adopter', frSub: 'La phrase qui reste soutenue',
  groups: [
    grp('Le mot cité, jamais adopté', [
      it(E(1096), 'fauché, entre guillemets, dans l’analyse'),
      it(E(1098), 'becter, ancré chez Jules, pas dans l’analyse'),
    ], chk('Une bonne phrase d’analyse...', ['reprend le mot cité sans guillemets', 'garde le mot cité entre guillemets et son propre vocabulaire ailleurs'], 1,
      'Les guillemets marquent toujours la frontière entre le texte cité et l’analyse. EN: quotation marks always mark the border between the quoted text and the analysis.')),
    grp('La règle centrale', [
      it(E(1112), 'une phrase d’analyse reste soutenue'),
      it(E(1114), 'un seul piège répété, six fois'),
    ], chk('La règle centrale de cet acte vaut...', ['seulement pour les six mots déjà vus', 'pour tout mot d’argot que tu analyseras ensuite'], 1,
      'La règle est générale, pas limitée aux six exemples déjà pratiqués. EN: the rule is general, not limited to the six examples already practised.')),
    ctl('Le prochain acte', 'Après ce piège, la dernière étape de cette leçon est...', ['écrire soi-même une analyse complète', 'mémoriser encore plus de mots d’argot'], 0,
      'La production attendue est une analyse, jamais une liste de mots à retenir. EN: the expected production is an analysis, never a list of words to memorise.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['piege'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le geste', 'Citer un mot pour l’analyser et l’employer dans son propre texte sont...', ['deux degrés du même geste', 'deux gestes opposés'], 1,
    'Deux gestes opposés, jamais une question de degré. EN: two opposite gestures, never a matter of degree.'),
  ctl('La marque', 'Dans ton analyse, un mot d’argot cité se marque toujours par...', ['des guillemets', 'rien de spécial'], 0,
    'Les guillemets séparent toujours le mot cité de ta propre phrase. EN: quotation marks always separate the quoted word from your own sentence.'),
  ctl('Même pour des mots modernes', 'Pour relou ou wesh, déjà connus, la même règle...', ['ne s’applique plus', 's’applique de la même façon'], 1,
    'La règle ne dépend jamais du mot : citable, jamais adopté. EN: the rule never depends on the word: quotable, never adopted.'),
], ['piege']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le piège',
    opener: {
      line: 'Six mots déjà analysés, et une seule tentation répétée : les reprendre sans guillemets, dans sa propre phrase. EN: Six words already analysed, and one repeated temptation: reusing them, unquoted, in one’s own sentence.',
      imageRef: 'lessons/c2-04-argot-litteraire/act07.jpg',
    },
    sections: [],
    milestone: 'Tu analyses un mot d’argot cité sans jamais l’adopter, sans guillemets, dans ta propre phrase. EN: You can analyse a quoted slang word without ever adopting it, unquoted, in your own sentence.',
    estScreens: 26, restPoints: ['a7-piege'],
  },
  sections: [A7_INTRO, A7_PIEGE, A7_PRATIQUE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — RÉDIGER L’ANALYSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a8-modele', layer: 'core', questionsInModal: true,
  title: 'Madame Berthoud, soixante-dix-huit ans', frSub: 'Le modèle complet, avant ta propre mission',
  text: PASTICHE_FINAL,
  glossary: [
    { word: 'fauchée comme les blés', en: 'flat broke', note: 'Locution figée, très fauché, un jeu de mots sur faucher. EN: a fixed idiom, meaning completely broke, a pun on cutting wheat.' },
  ],
  questions: [
    { q: 'Global : que préserve la citation directe des mots de Madame Berthoud.', a: 'Sa voix propre, sa personnalité et sa détermination, exactement comme elle les a dites lors de son entretien.' },
    { q: 'Détail : quelle formule le comité emploie-t-il dans sa propre conclusion, à la place des mots de Madame Berthoud.', a: '« Pour des raisons personnelles », une formule soutenue et neutre.' },
    { q: 'Inférence : pourquoi le comité choisit-il de citer les mots exacts de Madame Berthoud dans le corps du rapport, puis de les éviter dans sa conclusion.', a: 'Pour montrer, dans le corps du rapport, qu’il l’a vraiment écoutée, tout en gardant sa propre conclusion dans un registre entièrement soutenu.' },
  ],
  audio: REC('rec-c2-04-berthoud'), say: REFRAME, terms: ['piege'],
};

const A8_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a8-plan', layer: 'core', sheetId: 'sheet-piege',
  title: 'Quatre étapes pour ton analyse',
  steps: [
    '1. Nomme le mot ou la formule argotique cité, entre guillemets. EN: name the quoted slang word or phrase, between quotation marks.',
    '2. Nomme le procédé : citation directe, discours indirect libre, ou décalage ironique dans un cadre soutenu. EN: name the device.',
    '3. Propose une raison nommable (vraisemblance, réalisme, ironie, économie, connivence, distance) et prouve-la par un indice précis du texte. EN: propose a nameable reason and prove it with a precise textual cue.',
    '4. Écris ta propre phrase dans un registre soutenu de bout en bout, sans jamais adopter le mot cité hors de ses guillemets. EN: write your own sentence in a consistently soutenu register, never adopting the quoted word outside its quotation marks.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['piege'],
};

const A8_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a8-usages', layer: 'core', title: 'Où cette méthode s’applique',
  cases: [
    { situation: 'Un roman fait parler un personnage en argot', fr: src(E(1123)).fr, en: src(E(1123)).en },
    { situation: 'Un rapport garde la citation vive d’un témoin', fr: src(E(1121)).fr, en: src(E(1121)).en },
    { situation: 'Tu justifies ton analyse par un mot précis du texte', fr: src(E(1124)).fr, en: src(E(1124)).en },
    { situation: 'Tu évites le piège de l’acte précédent', fr: src(E(1127)).fr, en: src(E(1127)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['piege'],
};

const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a8-scenario', layer: 'core', title: 'Tu expliques ton analyse à voix haute',
  setting: 'Avant d’écrire ton analyse, tu la répètes à voix haute avec Raphaël, qui te pose les questions de la professeure Berthier.',
  turns: [
    {
      ai: 'Quel mot cité, exactement, retiens-tu de ce rapport sur Madame Berthoud.', en: 'Which exact quoted word do you take from this report on Madame Berthoud.',
      user: src(E(1117)).fr, userEn: src(E(1117)).en,
      alts: [
        { fr: '« Fauchée comme les blés », une locution bien plus vive que le style habituel d’un rapport.', en: '"Flat broke," a far more vivid phrase than a report’s usual style.' },
        { fr: 'C’est surtout le contraste entre cette expression imagée et le ton habituel du rapport qui me frappe.', en: 'It is mostly the contrast between this vivid expression and the report’s usual tone that strikes me.' },
      ],
    },
    {
      ai: 'Et pourquoi, à ton avis, le comité garde-t-il cette citation dans le corps du rapport.', en: 'And why, in your view, does the committee keep this quotation in the body of the report.',
      user: src(E(1126)).fr, userEn: src(E(1126)).en,
      alts: [
        { fr: 'Pour préserver, un instant, la voix propre de Madame Berthoud, avant la formule neutre de la conclusion.', en: 'To preserve, for a moment, Madame Berthoud’s own voice, before the conclusion’s neutral phrasing.' },
        { fr: 'Cela donne aussi plus de poids au rapport, en ancrant la conclusion dans un vécu réel.', en: 'It also gives the report more weight, anchoring the conclusion in a real lived experience.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['piege'],
};

/** THE GRADED TASK. A written analysis of a fresh, unseen extract, graded on
 *  naming the device and the reason AND never adopting the cited word
 *  outside its own guillemets (both halves of the lesson’s scope). */
const A8_MISSION: Sec<'task'> = {
  type: 'task', id: 'a8-mission', title: 'Analyse un nouvel extrait', frSub: 'Mission écrite',
  brief: 'Voici un extrait d’un compte rendu d’inspection, un texte imaginé pour cette leçon, jamais vu plus haut. Lis-le, puis écris une analyse : nomme le mot cité, le procédé, une raison nommable prouvée par un indice du texte, sans jamais employer toi-même ce mot hors de ses guillemets. Le compte rendu de l’inspection du marché couvert, daté du quatorze mars, rapporte un échange avec le gérant, Marcel Tranchant, soixante-cinq ans, en poste depuis 1988. Interrogé sur l’état des étals du fond, il a répondu, mi-figue mi-raisin : « Franchement, c’est de la bricole, mais faut pas pousser, y a pas tant de flouze que ça dans cette affaire. » L’inspecteur, dans ses conclusions, a jugé la remarque « révélatrice d’une gestion modeste, assumée sans détour », avant de recommander des travaux mineurs d’ici la fin de l’année.',
  briefEn: 'Here is an extract from an inspection report, a text invented for this lesson, never seen above. Read it, then write an analysis: name the quoted word, the device, a nameable reason proven by a cue in the text, without ever using that word yourself outside its own quotation marks. The text is printed above so you can write with it in front of you.',
  produce: 'Écris une analyse de 150 à 250 mots : nomme le mot argotique cité (entre guillemets dans ta propre phrase aussi), nomme le procédé (citation directe, verbe de parole, cadre soutenu), propose une raison nommable et prouve-la par un indice précis du texte, et garde un registre soutenu de bout en bout, sans jamais adopter le mot cité hors de ses guillemets.',
  responseSpec: { kind: 'text', minWords: 150, maxWords: 250 },
  rubric: {
    criteria: [
      { key: 'terme', label: 'Le mot cité et son cadre, identifiés', maxPoints: 4, descriptors: [
        '4 : « flouze » est nommé entre guillemets, et le cadre qui l’encadre (guillemets, verbe de parole « il a répondu », registre du reste du texte) est décrit avec précision.',
        '3 : le mot est nommé, mais le cadre est décrit de façon incomplète ou approximative.',
        '2 : le mot est nommé sans aucune analyse de son cadre.',
        '1 : aucun mot argotique précis n’est identifié dans l’analyse.',
      ] },
      { key: 'raison', label: 'Une raison nommable, prouvée', maxPoints: 4, descriptors: [
        '4 : une raison nommable (vraisemblance, réalisme, connivence, décalage) est proposée et justifiée par un indice précis du texte (le contraste avec « gestion modeste », ou le ton « mi-figue mi-raisin »).',
        '3 : une raison est nommée, mais la preuve textuelle reste vague.',
        '2 : une impression générale remplace une raison nommée et prouvée.',
        '1 : aucune raison n’est proposée.',
      ] },
      { key: 'piege', label: 'Le piège évité : jamais adopté', maxPoints: 4, descriptors: [
        '4 : « flouze » (et tout autre mot argotique du texte) reste systématiquement entre guillemets dans l’analyse ; la phrase de l’apprenant emploie son propre vocabulaire, soutenu, pour en parler.',
        '3 : le mot est généralement bien marqué, avec un seul oubli de guillemets.',
        '2 : le mot est repris sans guillemets au moins deux fois, comme s’il appartenait à l’analyse elle-même.',
        '1 : l’analyse adopte le registre argotique du texte plutôt que de l’analyser depuis un registre soutenu.',
      ] },
      { key: 'registre', label: 'Un registre soutenu, de bout en bout', maxPoints: 3, descriptors: [
        '3 : le registre de l’analyse reste soutenu sur tout le texte, sans aucune autre glissade.',
        '2 : le registre varie une fois, sans casser le sens général.',
        '1 : le registre de l’analyse elle-même glisse nettement vers le familier.',
      ] },
    ],
  },
  scaffold: [
    'Le terme argotique « … » est cité, encadré par…',
    'Ce choix sert probablement…',
    'L’indice qui le prouve est…',
    'Le reste du texte, lui, reste…',
  ],
  modelAnswer: 'Dans ce compte rendu d’inspection, l’inspecteur cite directement les mots de Marcel Tranchant : « y a pas tant de flouze que ça dans cette affaire ». Le terme argotique « flouze », pour l’argent, est encadré par des guillemets et annoncé par le verbe de parole « il a répondu » : la citation est un choix délibéré, jamais une glissade du rapport lui-même. Le reste du texte reste soutenu, de la date précise au vocabulaire administratif des conclusions, ce qui rend le contraste net.\n\nCe choix sert d’abord la vraisemblance : on entend la voix du gérant, pas seulement le fait qu’il juge son commerce modeste. Il crée aussi une connivence avec le lecteur, qui partage un instant le ton bon enfant de l’homme plutôt que la froideur administrative qui suit.\n\nLe rapport, dans sa propre conclusion, ne reprend jamais « flouze » : il écrit « gestion modeste », une formule soutenue qui préserve le registre du compte rendu. C’est précisément ce que doit faire toute analyse de ce passage : nommer le terme cité, jamais l’employer soi-même.',
  modelAnswerEn: 'In this inspection report, the inspector directly quotes Marcel Tranchant’s own words: "there is not that much cash in this business anyway." The slang term "flouze," for money, is framed by quotation marks and announced by the reporting verb "he answered": the quotation is a deliberate choice, never a slip of the report itself. The rest of the text stays soutenu, from the precise date to the administrative vocabulary of the conclusions, which makes the contrast sharp.\n\nThis choice serves verisimilitude first: we hear the manager’s own voice, not only the fact that he judges his business modest. It also creates complicity with the reader, who shares for a moment the man’s good natured tone rather than the administrative coldness that follows.\n\nThe report, in its own conclusion, never reuses "flouze": it writes "modest management," a soutenu phrase that preserves the report’s register. That is exactly what any analysis of this passage must do: name the quoted term, never use it oneself.',
  watchFor: [
    { pattern: 'The word "flouze" (or any other argot term in the text) used without quotation marks in the learner’s own analytical sentence, as if adopted into their own vocabulary.', criterion: 'piege', feedback: 'Mets le mot cité entre guillemets chaque fois que tu le nommes ; garde ton propre vocabulaire pour ta propre phrase.', ref: 'a7-piege' },
    { pattern: 'No device named (direct quotation, reporting verb, soutenu frame), only a vague mention that the text "uses slang".', criterion: 'terme', feedback: 'Nomme précisément le cadre : les guillemets, le verbe de parole, le registre du reste du texte.', ref: 'a3-cartes' },
    { pattern: 'A reason stated with no textual proof (e.g. "it shows realism" with no cue pointed to).', criterion: 'raison', feedback: 'Une raison se prouve toujours par un indice précis du texte, jamais par une impression générale.', ref: 'a2-groupe' },
    { pattern: 'The slip is treated as a deliberate literary device rather than recognised as the author actually choosing it on purpose here (confusing this extract with an accidental slip).', criterion: 'terme', feedback: 'Ici, les guillemets et le verbe de parole prouvent un choix voulu, pas une glissade.', ref: 'a6-grille' },
    { pattern: 'The learner’s own commentary register drifts informally partway through (starts soutenu, slips casual).', criterion: 'registre', feedback: 'Garde un registre soutenu du début à la fin de ton analyse, même si le texte analysé, lui, ne l’est pas partout.', ref: 'a5-cartes' },
  ],
  graderNotes: [
    'Word count: 150 to 250, with 10% tolerance (135 to 275) before length costs points. A title line does not count.',
    'The task marks naming the device and the reason, and avoiding the trap, not whether the learner has an opinion on Marcel Tranchant or the market.',
    'Accept any correct naming of the device (citation directe / discours direct) even phrased differently from the model, as long as guillemets and the reporting verb are both identified.',
    'Accept any plausible nameable reason (vraisemblance, réalisme social, connivence, décalage ironique) as long as it is backed by a precise textual cue, even if it differs from the model’s choice.',
    'Do not mark grammar beyond what interferes with comprehension; this task marks reading, naming and register discipline, not a grammar point (C2 has none, per C2-BUILD-PLAN.md).',
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['piege', 'raisons'],
};

const A8_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a8-parler', layer: 'core', title: 'Dis ta méthode à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['piege'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-piege',
  title: 'Tout le costume sur un écran',
  rows: [
    { k: 'le costume', v: 'un mot choisi pour un personnage, jamais pour toi', say: src(E(1002)).fr,
      detail: { title: 'Le pèze de Jules', body: 'L’auteur a choisi ce mot pour une raison, pas par erreur. EN: the author chose this word for a reason, not by mistake.', say: src(E(1003)).fr } },
    { k: 'les six raisons', v: 'vraisemblance, réalisme, ironie, économie, connivence, distance', say: src(E(1014)).fr,
      detail: { title: 'Un indice par raison', body: 'Chaque raison se prouve par un indice dans le texte. EN: each reason is proven by a textual cue.', say: src(E(1018)).fr } },
    { k: 'discours direct', v: 'guillemets et verbe de parole', say: src(E(1035)).fr,
      detail: { title: 'Un cadre net', body: 'Ce qui est dedans n’est pas signé par qui écrit autour. EN: what is inside is not signed by whoever writes around it.', say: src(E(1036)).fr } },
    { k: 'discours indirect libre', v: 'aucun guillemet, seul le registre trahit', say: src(E(1052)).fr,
      detail: { title: 'Une voix fondue', body: 'L’indice n’est jamais un signe de ponctuation. EN: the cue is never a punctuation mark.', say: src(E(1053)).fr } },
    { k: 'le décalage ironique', v: 'un cadre soutenu, une citation qui ne l’est pas', say: src(E(1064)).fr,
      detail: { title: 'La citation reste citée', body: 'Le cadre ne devient jamais argotique à son tour. EN: the frame itself never turns argotic.', say: src(E(1070)).fr } },
    { k: 'le piège', v: 'analyser n’est pas adopter', say: src(E(1096)).fr,
      detail: { title: 'Guillemets, toujours', body: 'Le mot cité reste entre guillemets ; ta phrase garde son propre vocabulaire. EN: the quoted word stays in quotation marks; your sentence keeps its own vocabulary.', say: src(E(1107)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['costume', 'piege'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu lis maintenant un mot d’argot cité dans un texte pour le costume qu’il est, jamais pour une faute : tu nommes la raison qui l’explique, le cadre qui l’encadre (une citation directe, une voix fondue, ou un cadre soutenu qui contraste avec elle), et tu sépares un vrai choix d’une simple glissade. Le piège qui reste est le même que partout ailleurs dans cette leçon : analyser un mot cité ne donne jamais la permission de l’employer soi-même, sans guillemets, dans sa propre phrase. Avant l’examen, prends un texte que tu lis cette semaine et qui cite un registre différent du sien, nomme le procédé, puis écris, en une phrase, la raison que tu y vois. EN: Before any exam, take a text you read this week that quotes a different register from its own, name the device, then write, in one sentence, the reason you see in it.',
  stats: [
    { k: 'Le mot cité', v: 'un costume, jamais une faute' },
    { k: 'Le cadre', v: 'citation directe, voix fondue, ou décalage soutenu' },
    { k: 'Voulu ou accidentel', v: 'le cadre décide, jamais le mot seul' },
    { k: 'Le piège évité', v: 'analyser, jamais adopter' },
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
  ({ format: 'errorSpot', q: 'Une phrase glisse sans cadre dans l’argot, ou adopte un mot cité. Écris-la correctement. EN: One line slips into argot with no frame, or adopts a quoted word; write it correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-costume', label: 'Un mot entre guillemets', targets: ['costume-ignore'],
      questions: [
        mc('« Il n’avait plus un pèze » : ce mot, dans ce texte, est...', ['une faute à corriger', 'un choix délibéré de l’auteur', 'un hasard de frappe'], 1, 'L’auteur a choisi ce mot pour une raison. EN: the author chose this word for a reason.', 'a1-check'),
        mc('Comprendre pourquoi un mot d’argot est cité...', ['autorise à l’employer dans sa propre analyse', 'ne l’autorise jamais', 'change le sens du mot'], 1, 'Analyser n’est pas adopter. EN: analysing is not adopting.', 'a1-check'),
        mc('Un texte peut citer un mot que son propre registre général...', ['emploierait de toute façon', 'n’emploierait jamais lui-même', 'n’a jamais le droit de citer'], 1, 'Le texte cite, sans devenir ce qu’il cite. EN: the text quotes, without becoming what it quotes.', 'a1-lecture'),
        mc('La mission de cette leçon est de...', ['lire pourquoi un mot d’argot est cité, sans jamais l’adopter', 'employer plus d’argot dans ses propres textes', 'mémoriser une liste de mots interdits'], 0, 'Lire, nommer, ne jamais adopter. EN: read, name, never adopt.', 'a1-check'),
        tI('Complète. Un mot.', 'Un mot d’argot, dans un texte, est un ... que l’auteur choisit pour un personnage.', 'costume', 'C’est la métaphore de toute la leçon. EN: this lesson’s whole metaphor.', 'a1-scene'),
        tI('Complète. Un mot.', 'Le pèze, ici, n’est pas une erreur de ... .', 'registre', 'C’est le mot de la règle. EN: that is the rule’s own word.', 'a1-check'),
        eS('Il y a sans doute une faute ; il faudrait écrire de l’argent.', 'L’auteur a choisi ce mot pour nous faire entendre comment Jules voit sa propre vie.', 'Un mot bien placé, cité à dessein, n’est jamais une faute à corriger. EN: a deliberately placed word is never a mistake to fix.', 'a1-check', []),
        lC('Écoute. Cette phrase vient-elle de Jules, ou du narrateur.', src(E(1000)).fr, ['de Jules', 'du narrateur', 'de la professeure Berthier'], 0, 'C’est la phrase que Raphaël lit dans l’extrait. EN: this is the line Raphaël reads in the extract.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-raisons', label: 'Six raisons nommables', targets: ['raison-non-nommee'],
      questions: [
        mc('Un mot d’argot cité sert toujours...', ['le hasard de l’auteur', 'une raison nommable', 'une erreur de registre'], 1, 'Vraisemblance, réalisme, ironie, économie, connivence, distance. EN: six nameable reasons.', 'a2-check'),
        mc('« On becte quand même » situe Jules dans...', ['un milieu, une génération', 'aucun contexte particulier', 'un décalage ironique'], 0, 'Trois mots, et tout un quartier apparaît. EN: three words, and a whole neighbourhood appears.', 'a2-groupe'),
        mc('Le décalage ironique se prouve surtout par...', ['un contraste entre le cadre et le mot cité', 'le sens du mot seul', 'la longueur de la phrase'], 0, 'Le décalage vient du cadre. EN: the contrast comes from the frame.', 'a2-groupe'),
        mc('Un seul mot, costard, qui montre déjà l’homme et son âge, illustre...', ['la connivence', 'l’économie de caractérisation', 'le réalisme social'], 1, 'Un mot remplace ici toute une description. EN: one word replaces a whole description.', 'a2-check'),
        tI('Complète. Un mot.', 'Le mot familier invite le lecteur à partager le regard du personnage : c’est la ... .', 'connivence', 'C’est la cinquième raison. EN: the fifth reason.', 'a2-deck'),
        tI('Complète. Deux mots.', 'Pour nommer une raison, il faut toujours chercher un ... ... dans le texte.', 'indice précis', 'Jamais une impression générale. EN: never a general impression.', 'a2-check', ['indice-précis']),
        eS('L’auteur a choisi ce mot au hasard, sans raison particulière.', 'L’auteur a choisi ce mot pour une raison nommable, prouvée par un indice du texte.', 'Jamais de hasard : toujours une raison, toujours un indice. EN: never by chance; always a reason, always a cue.', 'a2-check', []),
        lC('Écoute. Cette phrase illustre-t-elle la vraisemblance ou le réalisme social.', src(E(1016)).fr, ['la vraisemblance', 'le réalisme social', 'la distance narrative'], 1, 'Elle situe un milieu plus qu’elle ne crédibilise une seule voix. EN: it places a milieu more than it credibilises one voice.', 'a2-deck'),
      ],
    },
    {
      id: 'r3-direct', label: 'Discours direct', targets: ['cadre-direct-manque'],
      questions: [
        mc('Une phrase citée, encadrée par des guillemets et un verbe de parole, est toujours...', ['un hasard de ponctuation', 'un choix délibéré de l’auteur', 'une erreur à corriger'], 1, 'Guillemets et verbe de parole annoncent un choix. EN: quotation marks and a reporting verb announce a choice.', 'a3-check'),
        mc('« dit Jules » est...', ['un verbe de parole', 'un adjectif', 'un nom propre'], 0, 'Il annonce que la phrase appartient à quelqu’un. EN: it announces the line belongs to someone.', 'a3-cartes'),
        mc('Sans les guillemets, la phrase de Jules deviendrait...', ['indiscernable de la voix du narrateur', 'encore plus marquée', 'entièrement incompréhensible'], 0, 'Sans cadre, une phrase argotique se confond avec le reste. EN: without a frame, an argotic line blends in.', 'a3-groupe'),
        mc('Le registre de la phrase citée et celui du paragraphe qui l’entoure...', ['sont toujours identiques', 'peuvent nettement contraster', 'n’ont aucun lien entre eux'], 1, 'Le contraste dit la tendresse du narrateur. EN: the contrast speaks to the narrator’s tenderness.', 'a3-check'),
        tI('Complète. Un mot.', 'Les ... encadrent la phrase comme un cadre encadre un tableau.', 'guillemets', 'C’est le premier indice du discours direct. EN: direct speech’s first cue.', 'a3-cartes'),
        tI('Complète. Un mot.', 'Le discours ... cite la phrase exacte d’un personnage, entre guillemets.', 'direct', 'C’est le nom du procédé de l’acte 3. EN: the name of act 3’s device.', 'a3-lecture'),
        eS('Fernand répondit longuement, dans le même registre argotique que Jules.', 'Fernand ne répondit rien ; il connaissait cette manière qu’avait Jules de rire de sa propre misère.', 'C’est la phrase exacte du texte, au registre soigné du narrateur. EN: this is the text’s exact line, in the narrator’s careful register.', 'a3-groupe', []),
        lC('Écoute. Cette phrase vient-elle de Jules, entre guillemets, ou du narrateur.', src(E(1041)).fr, ['de Jules', 'du narrateur', 'de Fernand'], 1, 'Aucun guillemet ici : c’est le narrateur qui parle. EN: no quotation marks here; the narrator is speaking.', 'a3-groupe'),
      ],
    },
    {
      id: 'r4-indirectlibre', label: 'Discours indirect libre', targets: ['voix-fondue-manquee'],
      questions: [
        mc('Dans le discours indirect libre, l’indice d’une voix fondue est...', ['toujours un guillemet', 'un registre qui ne colle pas au paragraphe', 'toujours un verbe de parole'], 1, 'Aucun guillemet ici : seul le registre trahit. EN: no quotation marks; only the register gives it away.', 'a4-check'),
        mc('Le discours direct encadre la voix du personnage ; le discours indirect libre...', ['fait la même chose', 'la dissout dans celle du narrateur', 'la supprime complètement'], 1, 'Dissoudre, pas encadrer. EN: dissolve, not frame.', 'a4-check'),
        mc('« Il n’avait plus un pèze » sort, dans ce passage, directement de...', ['la voix du narrateur, sans ambiguïté', 'la pensée de Jules, fondue dans la narration', 'un dialogue entre guillemets'], 1, 'Pèze est le mot de Jules, prêté au narrateur. EN: pèze is Jules’s word, lent to the narrator.', 'a4-lecture'),
        mc('Pour repérer un discours indirect libre, il faut comparer...', ['le registre d’une phrase à son contexte', 'la longueur des phrases', 'la ponctuation employée'], 0, 'Compare toujours le registre au contexte immédiat. EN: always compare register to immediate context.', 'a4-check'),
        tI('Complète. Un mot.', 'Le discours indirect libre fond la voix du personnage dans celle du ... .', 'narrateur', 'C’est la définition même du procédé. EN: the device’s own definition.', 'a4-cartes'),
        tI('Complète. Un mot.', 'Pèze, ici, est le mot de Jules, pas celui que le narrateur emploierait pour ... .', 'lui-même', 'Le mot appartient à Jules, pas au narrateur. EN: the word belongs to Jules, not the narrator.', 'a4-lecture'),
        eS('« Il n’avait plus un pèze » prouve que le narrateur emploie lui-même l’argot, par choix personnel.', '« Il n’avait plus un pèze » est la pensée de Jules, fondue dans la voix du narrateur, sans guillemets.', 'Le mot vient de Jules ; le narrateur le prête, il ne l’adopte pas pour lui-même. EN: the word comes from Jules; the narrator lends it, not adopts it.', 'a4-groupe', []),
        lC('Écoute. Cette phrase porte-t-elle un guillemet, ou une voix fondue sans guillemet.', src(E(1048)).fr, ['un guillemet', 'une voix fondue, sans guillemet', 'un verbe de parole explicite'], 1, 'Aucun guillemet dans ce passage. EN: no quotation marks in this passage.', 'a4-lecture'),
      ],
    },
    {
      id: 'r5-decalage', label: 'Le décalage ironique', targets: ['decalage-manque'],
      questions: [
        mc('Un texte soutenu qui cite un mot argotique...', ['devient lui-même argotique', 'reste soutenu, la citation reste citée', 'perd tout son sens'], 1, 'Le cadre protège sa propre nature. EN: the frame protects its own nature.', 'a5-check'),
        mc('Citer mot pour mot, plutôt que résumer poliment, est déjà...', ['un jugement neutre, sans portée', 'un jugement du chroniqueur sur la scène', 'une simple habitude journalistique'], 1, 'Le choix de citer, en soi, dit quelque chose. EN: the choice to quote, in itself, says something.', 'a5-groupe'),
        mc('« On est fauchés, messieurs » crée un contraste avec...', ['le cadre officiel de la réunion', 'rien de particulier', 'un autre élu, absent de la scène'], 0, 'Le contraste entre la scène officielle et les mots crus de l’élu. EN: the contrast between the official scene and the councillor’s blunt words.', 'a5-lecture'),
        mc('Un résumé poli, « des difficultés budgétaires sont à prévoir », aurait...', ['gardé tout le décalage', 'effacé tout le décalage', 'renforcé le décalage'], 1, 'Un résumé neutre efface le contraste. EN: a neutral summary erases the contrast.', 'a5-groupe'),
        tI('Complète. Un mot.', 'Le texte soutenu qui cite un mot argotique reste ... .', 'soutenu', 'La citation reste citée, le cadre reste lui-même. EN: the frame stays itself.', 'a5-cartes'),
        tI('Complète. Un mot.', 'Le contraste entre le cadre et la citation dit le décalage ... .', 'ironique', 'C’est le nom du procédé de l’acte 5. EN: the name of act 5’s device.', 'a5-lecture'),
        eS('Le chroniqueur résume poliment les propos de l’élu, pour rester neutre.', 'Le chroniqueur cite mot pour mot les propos de l’élu, pour faire sentir le décalage.', 'C’est le choix exact que fait le texte : citer, pas résumer. EN: this is exactly the text’s choice: to quote, not summarise.', 'a5-groupe', []),
        lC('Écoute. Cette phrase vient-elle du cadre soutenu, ou de la citation argotique.', src(E(1061)).fr, ['du cadre soutenu', 'de la citation argotique', 'du compte rendu officiel'], 1, 'C’est la phrase citée de l’élu. EN: this is the councillor’s quoted line.', 'a5-lecture'),
      ],
    },
    {
      id: 'r6-grille', label: 'Accidentel ou voulu', targets: ['tri-rate'],
      questions: [
        mc('Pour juger un mot d’argot dans un texte, il faut chercher...', ['son sens seul', 'son cadre, avant son sens', 'sa longueur'], 1, 'Le cadre décide. EN: the frame decides.', 'a6-check'),
        mc('« J’ai un peu la rage », dans une lettre par ailleurs soutenue, sans guillemet ni effet nommable, est...', ['un procédé littéraire réussi', 'une vraie glissade de registre', 'une citation bien encadrée'], 1, 'Aucun cadre ne prouve un choix ici. EN: no frame proves a choice here.', 'a6-check'),
        mc('Un devoir d’étudiant qui glisse dans l’argot en analysant un texte est...', ['un procédé, comme le texte analysé', 'jamais un procédé, lui', 'toujours un bon signe de style'], 1, 'Ceci annonce le piège de l’acte 7. EN: this announces act 7’s trap.', 'a6-check'),
        mc('« Fauché » peut être voulu dans un roman et accidentel dans une lettre, parce que...', ['le mot change de sens', 'le tri porte sur le cadre, jamais le mot seul', 'le mot n’existe qu’à l’écrit'], 1, 'Même mot, cadre différent, statut différent. EN: same word, different frame, different status.', 'a6-tri'),
        tI('Complète. Un mot.', 'L’absence complète d’indice signale plutôt un ... .', 'accident', 'Pas un procédé : un accident, une faiblesse. EN: not a device: an accident, a weakness.', 'a6-grille'),
        tI('Complète. Un mot.', 'Avant de juger un mot d’argot, cherche son cadre avant de chercher son ... .', 'sens', 'C’est la méthode de toute la leçon. EN: this whole lesson’s method.', 'a6-methode'),
        eS('Une lettre officielle qui glisse dans l’argot, sans aucun indice, révèle un procédé délibéré de l’auteur.', 'Une lettre officielle qui glisse dans l’argot, sans aucun indice, révèle une faiblesse d’écriture, pas un procédé.', 'Sans cadre, c’est une glissade, jamais un procédé. EN: with no frame, it is a slip, never a device.', 'a6-tri', []),
        lC('Écoute. Cette phrase porte-t-elle un cadre qui prouve un choix voulu.', src(E(1080)).fr, ['oui, un contraste net et nommable', 'non, aucun cadre', 'oui, mais seulement un guillemet isolé'], 0, 'Le contraste avec la réunion officielle prouve le choix. EN: the contrast with the official meeting proves the choice.', 'a6-tri'),
      ],
    },
    {
      id: 'r7-piege', label: 'Le piège', targets: ['piege-ignore'],
      questions: [
        mc('Citer un mot pour l’analyser et l’employer dans son propre texte sont...', ['deux degrés du même geste', 'deux gestes opposés', 'exactement la même chose'], 1, 'Deux gestes opposés. EN: two opposite gestures.', 'a7-check'),
        mc('Dans ton analyse, un mot d’argot cité se marque toujours par...', ['des guillemets', 'rien de spécial', 'une majuscule'], 0, 'Les guillemets séparent toujours le mot cité de ta propre phrase. EN: quotation marks always separate the quoted word from your own sentence.', 'a7-check'),
        mc('Pour relou ou wesh, déjà connus, la même règle...', ['ne s’applique plus', 's’applique de la même façon', 'dépend de l’humeur du correcteur'], 1, 'La règle ne dépend jamais du mot. EN: the rule never depends on the word.', 'a7-intro'),
        mc('« L’extrait est vraiment chouette à lire » dans une analyse commet...', ['un bon usage de l’adjectif', 'exactement le piège de cet acte', 'une simple variation stylistique'], 1, 'Chouette, adopté sans guillemets, devient le vocabulaire de l’analyse elle-même. EN: chouette, adopted without quotation marks, becomes the analysis’s own vocabulary.', 'a7-piege'),
        tI('Complète. Un mot.', 'Le mot cité reste entre ... chaque fois que tu le nommes.', 'guillemets', 'C’est la protection contre le piège. EN: the protection against the trap.', 'a7-pratique'),
        tI('Complète. Un mot.', 'Analyser n’est pas ... .', 'adopter', 'C’est la règle centrale de l’acte. EN: the act’s central rule.', 'a7-intro'),
        eS('Pour décrire Jules, j’écris qu’il est fauché et qu’il adore becter avec ses voisins.', 'Pour décrire Jules, j’écris que le texte le montre « fauché » et aimant « becter » avec ses voisins.', 'Les guillemets marquent que ces mots restent ceux du texte, jamais les tiens. EN: the quotation marks mark these words as the text’s own, never yours.', 'a7-piege', []),
        lC('Écoute. Cette phrase adopte-t-elle un mot cité, ou l’analyse-t-elle correctement.', src(E(1096)).fr, ['elle l’analyse correctement', 'elle l’adopte sans guillemets', 'elle ne mentionne aucun mot cité'], 0, 'Fauché reste entre guillemets, nommé comme le mot du texte. EN: fauché stays in quotation marks, named as the text’s own word.', 'a7-piege'),
      ],
    },
    {
      id: 'r8-bilan', label: 'Le bilan de la mission', targets: ['analyse-incomplete'],
      questions: [
        mc('Le rapport sur Madame Berthoud combine...', ['seulement une glissade accidentelle', 'une citation directe et une conclusion qui l’évite', 'uniquement un résumé neutre'], 1, 'Les deux sont présents, ensemble. EN: both are present, together.', 'a8-modele'),
        mc('La mission écrite demande de...', ['résumer l’extrait de Marcel Tranchant', 'nommer le mot cité, le procédé, la raison, sans jamais l’adopter', 'traduire l’extrait en anglais'], 1, 'Résumer ne suffit pas ; il faut nommer et prouver. EN: summarising is not enough; naming and proving is.', 'a8-mission'),
        mc('Pour réussir le critère « piège » de la mission, il faut...', ['employer le mot argotique librement dans son analyse', 'le garder entre guillemets, et changer de mot pour sa propre phrase', 'éviter complètement de le mentionner'], 1, 'Le critère le plus important de cette mission. EN: the mission’s most important criterion.', 'a8-mission'),
        mc('Une analyse qui reste soutenue du début à la fin réussit le critère...', ['raison', 'registre', 'terme'], 1, 'Le critère « registre » juge la constance sur tout le texte. EN: the "registre" criterion judges consistency across the whole text.', 'a8-mission'),
        tI('Complète. Un mot.', 'Nomme d’abord le mot cité, puis le procédé, puis la ... .', 'raison', 'C’est l’étape 3 du plan. EN: step three of the plan.', 'a8-plan'),
        tI('Complète. Un mot.', 'Un mot d’argot, dans un texte, est un ... que l’auteur choisit pour un personnage.', 'costume', 'C’est le reframe de la leçon, redit à la fin. EN: the lesson’s reframe, restated at the end.', 'a8-progress'),
        eS('Une bonne analyse de Marcel Tranchant peut reprendre flouze librement, puisque le texte l’emploie déjà.', 'Une bonne analyse de Marcel Tranchant garde flouze entre guillemets et emploie son propre vocabulaire ailleurs.', 'Le piège de l’acte 7 vaut pour tout nouvel extrait, y compris celui de la mission. EN: act 7’s trap applies to every new extract, including the mission’s own.', 'a8-mission', []),
        lC('Écoute. Cette phrase vient-elle du rapport sur Madame Berthoud, ou d’une réponse d’analyse possible.', src(E(1117)).fr, ['du rapport sur Madame Berthoud', 'd’une réponse d’analyse possible', 'd’une remarque de l’inspecteur du marché'], 0, 'C’est la citation exacte de Madame Berthoud dans le rapport. EN: this is Madame Berthoud’s exact quotation in the report.', 'a8-modele'),
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
spreadSlots(A8_QUIZ);

const A8_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a8-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'a word the author chooses for a character', back: 'le costume', say: src(E(1002)).fr },
    { front: 'six nameable reasons for a quoted word', back: 'les six raisons', say: src(E(1014)).fr },
    { front: 'guillemets + a reporting verb', back: 'le discours direct', say: src(E(1035)).fr },
    { front: 'no quotation marks, only the register gives it away', back: 'le discours indirect libre', say: src(E(1052)).fr },
    { front: 'a soutenu frame around an argotic quote', back: 'le décalage ironique', say: src(E(1064)).fr },
    { front: 'a cue proves it, or its absence signals an accident', back: 'la grille de lecture', say: src(E(1074)).fr },
    { front: 'to analyse is never to adopt', back: 'le piège', say: src(E(1096)).fr },
    { front: 'a quoted word, kept in its own guillemets', back: 'le mot cité, jamais adopté', say: src(E(1112)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: 'Verlan, argot et registres, en résumé',
  body: `${REFRAME} Tu lis maintenant un mot d’argot cité pour le costume qu’il est : tu nommes pourquoi l’auteur l’a choisi, le cadre qui l’encadre, et tu sépares un vrai choix d’une simple glissade, sans jamais confondre l’analyse d’un mot avec la permission de l’employer toi-même. EN: You can now read a quoted slang word for the costume it is, naming why the author chose it, its frame, and the difference between a real choice and a mere slip, never mistaking the analysis of a word for permission to use it yourself.`,
  points: [
    `Un mot d’argot cité est un costume, choisi pour un personnage, jamais un vêtement pour toi, exactement ce que ${B232_REF} t’avait déjà appris à ne jamais faire dans l’autre sens.`,
    'Six raisons nommables expliquent un choix ; chacune se prouve par un indice précis du texte, jamais par une impression.',
    'Trois cadres l’encadrent : la citation directe, la voix fondue du discours indirect libre, et le décalage ironique d’un texte soutenu.',
    'Le cadre, jamais le mot seul, sépare un choix voulu d’une glissade accidentelle, et une analyse réussie garde toujours le mot cité entre guillemets.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['costume', 'piege'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-costume', title: 'Un costume, pas une faute', format: 'mcq' as const, coach: 'Avant de juger un mot d’argot, cherche pourquoi l’auteur l’a choisi. EN: before judging a slang word, look for why the author chose it.', q: '« Il n’avait plus un pèze » : ce mot est...', opts: ['une faute', 'un choix délibéré'], correct: 1, why: 'L’auteur a choisi ce mot pour une raison. EN: the author chose this word for a reason.', items: [E(1000), E(1002), E(1003)], audio: AUDIO },
  { id: 'd-raisons', title: 'Nomme la raison, puis l’indice', format: 'sort' as const, coach: 'Classe chaque phrase par la raison qu’elle illustre. EN: sort each line by the reason it illustrates.', buckets: ['vraisemblance', 'réalisme social', 'décalage ironique'], items: [E(1014), E(1016), E(1018)], audio: AUDIO },
  { id: 'd-direct', title: 'Guillemets et verbe de parole', format: 'mcq' as const, coach: 'Cherche les deux indices du discours direct. EN: look for direct speech’s two cues.', q: '« dit Jules » est...', opts: ['un verbe de parole', 'un adjectif'], correct: 0, why: 'Il annonce une citation. EN: it announces a quotation.', items: [E(1034), E(1035), E(1036)], audio: AUDIO },
  { id: 'd-indirectlibre', title: 'La voix fondue', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : repère le mot dont le registre ne colle pas. EN: say each line aloud; spot the word whose register does not match.', items: [E(1048), E(1052), E(1053)], audio: AUDIO },
  { id: 'd-decalage', title: 'Le cadre reste lui-même', format: 'mcq' as const, coach: 'Compare le cadre et la citation. EN: compare the frame and the quotation.', q: 'Un texte soutenu qui cite un mot argotique...', opts: ['devient argotique', 'reste soutenu'], correct: 1, why: 'Le cadre protège sa propre nature. EN: the frame protects its own nature.', items: [E(1060), E(1061), E(1070)], audio: AUDIO },
  { id: 'd-grille', title: 'Voulu, ou accidentel', format: 'sort' as const, coach: 'Classe : un cadre qui prouve le choix, ou son absence complète. EN: sort: a frame that proves the choice, or its complete absence.', buckets: ['voulu', 'accidentel'], items: [E(1078), E(1079), E(1081), E(1083)], audio: AUDIO },
  { id: 'd-piege', title: 'Analyser, pas adopter', format: 'mcq' as const, coach: 'Compare les deux phrases : laquelle garde le mot entre guillemets. EN: compare the two sentences: which one keeps the word in quotation marks.', q: 'Citer un mot pour l’analyser et l’employer soi-même sont...', opts: ['la même chose', 'deux gestes opposés'], correct: 1, why: 'Deux gestes opposés. EN: two opposite gestures.', items: [E(1095), E(1096), E(1107)], audio: AUDIO },
  { id: 'd-bilan', title: 'Le mot, le cadre, la raison', format: 'flashcard' as const, coach: 'Dis chaque étape du plan à voix haute. EN: say each step of the plan aloud.', items: [E(1120), E(1123), E(1124)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'costume-ignore', description: 'Treats a deliberately placed slang word as a writing mistake to be corrected, missing the author’s intent entirely.', detectOn: ['a1-check', 'a1-lecture', 'a8-mission'], drill: 'd-costume', retest: 'd-costume' },
  { id: 'raison-non-nommee', description: 'Fails to name a specific, nameable reason (vraisemblance, réalisme, ironie, économie, connivence, distance) for a deliberate deployment, or names one with no textual proof.', detectOn: ['a2-groupe', 'a2-check', 'a8-mission'], drill: 'd-raisons', retest: 'd-raisons' },
  { id: 'cadre-direct-manque', description: 'Misses the quotation marks and reporting verb that frame a direct citation, or mistakes a cited line for the narrator’s own voice.', detectOn: ['a3-groupe', 'a3-check', 'a8-mission'], drill: 'd-direct', retest: 'd-direct' },
  { id: 'voix-fondue-manquee', description: 'Misses a free-indirect-style word with no quotation marks, treating it as the narrator’s own voice instead of a character’s fused perspective.', detectOn: ['a4-groupe', 'a4-check'], drill: 'd-indirectlibre', retest: 'd-indirectlibre' },
  { id: 'decalage-manque', description: 'Misses the ironic contrast a soutenu text creates by quoting argot verbatim, or wrongly treats the quoting text itself as having become argotic.', detectOn: ['a5-groupe', 'a5-check'], drill: 'd-decalage', retest: 'd-decalage' },
  { id: 'tri-rate', description: 'Confuses a genuine accidental register slip (no frame at all) with a deliberate literary or ironic device, in either direction.', detectOn: ['a6-tri', 'a6-check'], drill: 'd-grille', retest: 'd-grille' },
  { id: 'piege-ignore', description: 'Adopts a quoted slang word, unquoted, into their own analytical sentence, exactly the trap this lesson names.', detectOn: ['a7-piege', 'a7-pratique', 'a7-check', 'a8-mission'], drill: 'd-piege', retest: 'd-piege' },
  { id: 'analyse-incomplete', description: 'Writes an analysis that summarises content instead of naming the quoted word, the device and a proven reason together.', detectOn: ['a8-mission'], drill: 'd-bilan', retest: 'd-bilan' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-costume', 'Le costume et les six raisons', ['le costume', 'les six raisons'], [
    teach('sheet-costume-teach', 'Un mot choisi, jamais une consigne',
      `${B232_REF} t’a appris à placer un mot d’argot sur une échelle, et à ne jamais l’employer là où il ne va pas. Cette leçon part du même mot, déjà mal placé par quelqu’un d’autre, à dessein : un costume que l’auteur choisit pour un personnage, jamais un vêtement qu’il te tend. EN: The lesson in B2 taught you to place a slang word on a ladder; this lesson reads the same word, already placed on purpose by someone else, as a costume the author chooses, never hands to you.`),
    table('sheet-costume-raisons', 'Les six raisons', ['Raison', 'Ce qu’elle fait'], [
      ['la vraisemblance', 'rend un personnage crédible'],
      ['le réalisme social', 'situe un milieu, une génération'],
      ['le décalage ironique', 'crée un contraste que le texte ne referme pas'],
      ['l’économie de caractérisation', 'remplace une description entière'],
      ['la connivence', 'partage un regard avec le lecteur'],
      ['la distance narrative', 'montre un point de vue sans le cautionner'],
    ]),
  ]),
  sheet('sheet-discours', 'Discours direct et discours indirect libre', ['les deux cadres', 'comment les distinguer'], [
    teach('sheet-discours-teach', 'Encadré, ou fondu',
      'Le discours direct encadre une citation par des guillemets et un verbe de parole : ce qui est dedans n’appartient jamais au narrateur. Le discours indirect libre fond la voix d’un personnage dans celle du narrateur, sans aucun de ces signes ; seul le registre, décalé du reste du paragraphe, trahit la voix fondue. EN: Direct speech frames a quotation; free indirect style dissolves a character’s voice into the narrator’s, with no typographic sign, only a register mismatch.'),
    table('sheet-discours-cadres', 'Deux cadres, un principe', ['Procédé', 'Les indices', 'Exemple'], [
      ['le discours direct', 'guillemets, verbe de parole', '« Encore fauché, ce mois-ci », dit Jules'],
      ['le discours indirect libre', 'aucun signe, un registre décalé', 'il n’avait plus un pèze'],
    ]),
  ]),
  sheet('sheet-decalage', 'Le décalage ironique et la grille de lecture', ['le cadre soutenu', 'voulu ou accidentel'], [
    teach('sheet-decalage-teach', 'Un cadre qui ne contamine jamais',
      'Un texte soutenu qui cite un mot argotique reste soutenu ; seule la citation porte l’argot, et c’est précisément ce décalage qui crée l’effet. Pour trier un choix voulu d’une glissade accidentelle, cherche toujours un cadre (guillemets, verbe de parole, contraste net, effet nommable) ; son absence complète signale une faiblesse, jamais un procédé. EN: A soutenu text quoting argot stays soutenu; to sort a deliberate choice from an accidental slip, always look for a frame.'),
    table('sheet-decalage-grille', 'La grille de lecture', ['Indice présent', 'Verdict'], [
      ['guillemets ou verbe de parole', 'voulu'],
      ['contraste net avec le registre environnant', 'voulu'],
      ['effet nommable (ironie, réalisme, vraisemblance...)', 'voulu'],
      ['aucun de ces indices', 'accidentel, une vraie glissade'],
    ]),
  ]),
  sheet('sheet-piege', 'Le piège et le plan de l’analyse', ['citer n’est pas adopter', 'le plan en quatre étapes'], [
    teach('sheet-piege-teach', 'Analyser n’est pas adopter',
      'Expliquer pourquoi un mot d’argot est cité ne donne jamais la permission de l’employer, sans guillemets, dans sa propre phrase soutenue. Le mot cité reste entre guillemets chaque fois qu’on le nomme ; la phrase qui l’analyse garde son propre vocabulaire et son propre registre, de bout en bout. EN: Explaining why a word is quoted never licenses using it, unquoted, in one’s own careful sentence.'),
    table('sheet-piege-plan', 'Le plan en quatre étapes', ['Étape', 'Formule'], [
      ['nommer le mot cité', 'Le terme argotique « … » est cité…'],
      ['nommer le procédé', 'encadré par…, ou fondu sans aucun signe…'],
      ['proposer et prouver une raison', 'Ce choix sert probablement…, car…'],
      ['garder son propre registre', 'Le reste du texte, et ma propre analyse, restent…'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Rédiger l’analyse',
    opener: {
      line: 'Madame Berthoud, soixante-dix-huit ans, et ses mots exacts, gardés dans un rapport par ailleurs froid : ici tu apprends la méthode complète, puis tu l’appliques toi-même, sur un texte neuf. EN: Madame Berthoud, seventy eight, and her exact words, kept inside an otherwise cold report: here you learn the full method, then apply it yourself, on a fresh text.',
      imageRef: 'lessons/c2-04-argot-litteraire/act08.jpg',
    },
    sections: [],
    milestone: 'Tu écris une analyse qui nomme un mot d’argot cité, son cadre et une raison prouvée, sans jamais l’adopter dans ta propre phrase. EN: You can write an analysis that names a quoted slang word, its frame and a proven reason, without ever adopting it in your own sentence.',
    estScreens: 48, restPoints: ['a8-scenario', 'a8-mission', 'a8-cheat', 'a8-quiz'],
  },
  sections: [A8_MODELE, A8_PLAN, A8_USAGES, A8_SCENARIO, A8_MISSION, A8_PARLER, A8_CHEAT, A8_PROGRESS, A8_QUIZ, A8_REVIEW, A8_ROUNDUP],
  imports: IMPORTED.act8,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its authored slots, scattered by hand (6.11). */
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-04-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-04-note-cours': 'The course note (act 1), ONE VOICE, one take, read in a measured, teacherly tone, no particular emphasis on any single word.',
  'rec-c2-04-six-raisons': 'The six-reason cardDeck (act 2), ONE VOICE, one take, read in strict card order, each at an even, explanatory pace.',
  'rec-c2-04-jules-escalier': "The direct-speech extract (act 3), TWO VOICES IN ONE READER'S RANGE: the narration even and literary, Jules’s quoted line warmer and more familiar, a half-laugh audible on \"en riant à moitié\".",
  'rec-c2-04-jules-sans-guillemets': 'The free-indirect-style extract (act 4), ONE VOICE, one take, read evenly throughout, with NO vocal cue marking the slang word, since the whole point is that nothing marks it aloud either.',
  'rec-c2-04-conseil-municipal': "The ironic chronicle (act 5), TWO VOICES IN ONE READER'S RANGE: the chronicle itself even and journalistic, the councillor's quoted line blunter and more casual, no added sarcasm layered on top of the words themselves.",
  'rec-c2-04-grille': 'The four-cue cardDeck (act 6), ONE VOICE, one take, read in strict card order, plain and explanatory.',
  'rec-c2-04-piege': "The six trap cards (act 7), ONE VOICE, one take. The audio step plays each card's CORRECT (well-tuned) sentence, not the trap's wrong promptSound. Read the six plainly, identical pace, no stress on the fixed word.",
  'rec-c2-04-berthoud': "The model extract (act 8), TWO VOICES IN ONE READER'S RANGE: the report itself even and administrative, Madame Berthoud's quoted line warmer, with real conviction on \"même si on me propose la lune\".",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 4,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 04',
  intro: `${Cap(B232_REF)} taught you to place a slang or verlan word on the register ladder, and never to use it where it does not belong. This lesson reads the same kind of word in the opposite direction: already placed exactly where it does not belong, by an author, on purpose. Across eight acts, from a seminar’s first misreading to your own written analysis of a fresh extract, you learn to name why an author dresses a character in an argot word, the frame that shows the choice was deliberate, and the one trap every learner meets: explaining a citation is never a licence to adopt it.`,
  skill: 'PE',
  grammarAssumed: ['b2.32'],
  grammarIntroduced: [
    'Six nameable reasons for a deliberate literary or ironic deployment of argot: vraisemblance, réalisme social, décalage ironique, économie de caractérisation, connivence, distance narrative, each proven by a precise textual cue',
    'Discours direct: a quoted character line framed by guillemets and a reporting verb, inside an otherwise careful narration',
    'Discours indirect libre: an argot word with no guillemets and no reporting verb, fused directly into third-person narration as the character’s own perspective',
    'Décalage ironique: a soutenu, official or journalistic text that quotes someone’s own argot, word for word, for ironic or critical contrast, without the surrounding frame itself turning argotic',
    'A reading grid distinguishing a deliberate literary or ironic deployment (proven by a frame: quotation marks, a reporting verb, a clear contrast, a nameable effect) from a genuine accidental register slip (no frame at all)',
    'The named trap: mistaking a literary or ironic quotation for a licence to use the same word, unquoted, in one’s own formal analysis; producing a written analysis that names the cited word, its frame and a proven reason, while never adopting it',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: `${Cap(B232_REF)} t’a appris à placer un mot d’argot sur l’échelle des registres, et à ne jamais l’employer là où il ne va pas. Cette leçon lit le même genre de mot dans l’autre sens : déjà placé, exprès, là où il ne va pas, par un auteur. En huit actes, d’un séminaire qui se trompe à ta propre analyse écrite d’un texte neuf, tu apprends à nommer pourquoi un auteur habille un personnage d’un mot d’argot, le cadre qui prouve que ce choix est voulu, et le piège que chaque apprenant rencontre : expliquer une citation n’autorise jamais à l’adopter.`,
    minutes: 150,
    difficulty: 5,
    glyph: 'costume',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ARGOT_LITTERAIRE_TERMS,
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
