// c1.20.l1 « Lire entre les lignes » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE, strategy
// variant) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of
// C1-BUILD-LOG.md. The C1 reading (CE) remediation target, and the direct
// successor of b2.24 « Lire de façon critique ».
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged, as in b2.24).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (about 300 words,
//   unsimplified, an essay, a chronicle, a tribune or a billet; act 11 prints
//   two exam documents) and ONE MOVE, in the same four beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`.
//                          Its FIRST question is always « Devine le sens »
//                          (a phrase inferred from context); the glossary
//                          keeps 0 or 1 entry.
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable` or `examples`, linked to a
//                          sheet.
//     3. PRACTISE          two or three checks on NEW material (other
//                          sentences, a listening, a trap).
//     4. USE IT            « Pour ton analyse », always the same groupDrill
//                          shape: a line of an analysis built with THIS act's
//                          move against the line a reader without it writes.
//
//   then the act check (control pages, gated). Act 1 is the problem scene;
//   act 12 is the production act (the task and the closing sections).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le filigrane              6  an essay on online ratings (scene) · a
//                                    summary that inflates the conclusion;
//                                    b2.24 and b1.37 recapped in one section
//    2  Concéder, restreindre     6  a librarian's tribune · concession then
//                                    restriction; « sans doute »
//    3  La portée exacte          6  a chronicle on screen reading · domain,
//                                    quantity, strength, condition, negation
//    4  Le vrai désaccord         6  a chronicle on lawns · stated vs real
//                                    object (facts, word, value, who decides)
//    5  Ce que fait un paragraphe 7  a six-paragraph essay on museum labels ·
//                                    paragraph functions
//    6  L'analogie et la chute    6  a billet on notifications · what an image
//                                    compares, where it breaks, the last line
//    7  L'auteur et ses sources   6  a tribune on homework · six stances
//                                    toward a source
//    8  Le présupposé             7  an essay on « Pourquoi les jeunes ne
//                                    lisent-ils plus ? » · grammatical
//                                    presupposition, the negation test
//    9  L'ironie au C1            7  a billet on an insurer's « pôle
//                                    expérience » · echo, impossible praise,
//                                    mock modesty, irony as a topic, the cue
//   10  L'agent caché             6  a chronicle on a school email · who acts
//                                    behind passives and nominalisations
//   11  À l'épreuve               7  two TCF-style documents · the four
//                                    distractor families
//   12  Ton analyse              11  the task tribune · plan, role play,
//                                    TASK, quiz, review
//
//   TOTAL 81 missions, 12 acts (6,6,6,6,7,6,6,7,7,6,7,11). Corpus: 200
//   authored rows (.1800-.1999) in twelve blocks plus 17 reused rows: 8 in
//   the seed (b1.37 ×1, b2.24 ×6, fr.b2.opinions-et-avis.1684 « sans
//   doute ») and 9 legacy c1 rows published in Postgres only (`PG_ROWS`,
//   named, never released). 12 anchor readings (act 11 prints two
//   documents) and 3 listenings. Quiz: 11 rounds of 8 (46 mcq, 20 typeIn,
//   11 errorSpot, 11 listenChoose). Eleven error triggers, eleven drills,
//   five reference sheets, eleven terms, four tapTables. Chapter artwork:
//   `lire-entre-les-lignes-image-prompts.md`, 12 prompts.
//
//   Two groupDrills meet at the end of every act from 2 to 11 (« Pour ton
//   analyse », then the act check), as in b2.24: the loop's fourth beat and
//   the gated check are both control-page drills by design.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un texte dit plus que ses phrases, et moins qu’on ne lui fait dire. »
//   EN: A text says more than its sentences, and less than people make it say.
//
//   ONE METAPHOR, THE WATERMARK (« lire en filigrane »). b1.37's lamp lit the
//   page, b2.24's glass weighed it; here the sheet is held up to the window,
//   and what is IN the paper shows through, only where the paper carries it.
//   It is NOT « read what is not written »: acts 3, 9 and 11 punish exactly
//   that, the stronger paraphrase and the irony with no cue.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    reading essay prose at C1: concession then restriction; the exact
//           scope of a conclusion (domain, quantity, strength, condition,
//           partial negation); the stated vs the real object of a
//           disagreement; the function of a paragraph, an analogy and a
//           closing line; the writer's stance toward a source; grammatical
//           presupposition (definite article, encore, ne… plus, cesser de,
//           aussi, factive verbs, the presupposing question) and the negation
//           test; echo irony and the textual-cue rule; the hidden agent; the
//           TCF / TEF CE C1 item types and their four distractor families;
//           the written analysis of an opinion piece.
//   QUOTES  b2.24's reframe (act 1) and b1.37's (act 1), b2.16's (act 2),
//           b2.10's (act 10), each imported from its corpus, never retyped.
//   LEAVES  press genres and framing to c1.24 (parallel); debate listening
//           to c1.21 (parallel); concession grammar to b2.16; the passive
//           and nominalisation as forms to b1.18 and b2.10; argument WRITING
//           to b2.23; stylistic figures as such to c1.19 (later wave).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs. Unsimplified
//   C1 French; English authored on every learner string (`en`, or a final
//   « EN: »), never on an answer. Reading questions and answers carry no
//   English, as in b2.24 (they are prompts and answers). Every `say` is
//   French. Citations by trail position in French (« la leçon 24 du B2 »),
//   never a raw id. Typographic ’ in every authored French string. Mission
//   answer slots are spread by `balanceSlots()` (options and index rotated
//   together, no text changed); the quiz by `spreadSlots()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Exam routing stays cosmetic (C1 build log): `CE@c1 → c1.20` is never
//      consulted for closed tasks. If the 6 CE C1 tasks are repointed, the
//      natural `targetItemIds` are this lesson's rule cards and analysis rows
//      (.1808, .1827, .1842, .1866, .1888, .1906, .1930, .1942, .1949, .1974,
//      .1985, .1998). Repoint them?
//   2. Act 1 has no quiz round (its fault, the inflated conclusion, is round
//      2's target). Round 11 integrates the task text, as b2.24 did. Keep?
//   3. Rubric: six criteria, 20 points (four CE-shaped, one for quotations,
//      one for precision and nuance), against the playbook's four and 12.
//      Keep the B2 / C1 grid?
//   4. Nine legacy c1 rows are reused by id from Postgres (absent from the
//      seed cut). All use the straight apostrophe and two a spaced « ? ».
//      Fix their typography with a text edit and `--reapply` (no bump)?
//   5. The task text is printed twice (reading and brief), as in b1.37 and
//      b2.24: no `source` field on `task`. Accept again, or add the field?
//   6. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   7. Four tapTables (acts 3, 5, 7, 10), one per act but one over the
//      playbook's working three per lesson (§11.2, unresolved). Each is the
//      act's « notice » beat and links a sheet. Keep four, or turn one into a
//      cardDeck?
//   8. The task brief keeps `briefEn` (schema.ts says « B2 drops it »; the C1
//      build log says English on every learner string). Keep?
//   9. (Pre-review 2026-09-30.) Act 9's billet re-runs b2.24 act 6's blog:
//      a counter closed for a digital service, a loop back to the phone
//      number, mock modesty, the official word quoted, a sincere character at
//      the end. The cards now cite b2.24 and lead with the C1 step (unmarked
//      echo, the cue quoted). Rewrite the billet's situation once the act 9
//      art is drawn?
//  10. (Pre-review.) Act 8 relabels b2.24's « présupposé » (the unstated
//      assumption) as « sous-entendu ». Linguistically right; it renames a
//      term the learner holds from B2. Keep?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, B137, B224, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  AVIS_TEXT, BIBLIO_TEXT, ECRAN_TEXT, PELOUSE_TEXT, MUSEE_TEXT, NOTIF_TEXT, DEVOIRS_TEXT,
  QUESTION_TEXT, POLE_TEXT, SORTIES_TEXT, EPREUVE_A_TEXT, EPREUVE_B_TEXT, CUISINE_TEXT,
  B224_REFRAME, B137_REFRAME, B216_REFRAME, B210_REFRAME,
  LECTURE_B1_UNIT, PASSIF_UNIT, NOMINALISATION_UNIT, CONCESSION_B2_UNIT, ARGUMENTATION_UNIT, CRITIQUE_UNIT,
  LECTURE_B1_REF, PASSIF_REF, NOMINALISATION_REF, CONCESSION_B2_REF, CRITIQUE_REF, DEBATS_REF,
} from './lire-entre-les-lignes-corpus.ts';
import { LIRE_ENTRE_LES_LIGNES_TERMS } from './lire-entre-les-lignes-terms.ts';

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

/** An item's fr/en, from this corpus, the seed, or the Postgres-only legacy
 *  rows copied in the corpus. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG_ROWS[id];
  if (!r) throw new Error(`c1.20: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.20: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.20: no authored respell on ${id}`);
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

/** THE « USE IT » BEAT: the act's one tool for the graded analysis. */
function pourTonAnalyse(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton analyse', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

const STEPS_STD = (cards: string, audio: string, drill: string) => ([
  { label: 'La règle', kind: 'rule' as const, title: 'La règle' },
  { label: 'Six cartes', kind: 'cards' as const, title: cards },
  { label: 'Écoute', kind: 'audio' as const, title: audio },
  { label: 'À toi', kind: 'drill' as const, title: drill, gate: true },
]);

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE FILIGRANE
 *
 *  The problem: a learner who has b2.24's skill finds the thesis, then
 *  inflates it in a TCF practice session. One section recaps b2.24 and b1.37
 *  by trail position, reusing their rows by id; nothing else is re-taught.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Exactement', frSub: 'L’atelier du mardi',
  setting: { place: 'La salle d’étude de la bibliothèque du quartier', city: 'Montréal', time: '18 h 15', ambience: 'une table ronde, des photocopies annotées, un chronomètre' },
  beats: [
    { kind: 'narration', text: 'Mardi, 18 h 15, à Montréal. Ton atelier de préparation au TCF Canada se réunit à la bibliothèque. Claire, la tutrice, vous a donné un essai à lire en douze minutes. Tu as fini en huit.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'J’ai fini. Le texte est très dur avec les avis en ligne.', en: 'I’m done. The text is very hard on online reviews.', respell: '[zhay fee-NEE | luh TEKST eh treh DÜR a-vek lay-za-VEE ahⁿ LEENN]', stage: 'Tu as retenu le ton, et la thèse qui suit la concession.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Claire, la tutrice', fr: 'Dis-moi ce que conclut exactement l’auteure.', en: 'Tell me exactly what the writer concludes.', respell: '[dee-MWA suh kuh kohⁿ-KLÜ eg-zak-tuh-MAHⁿ loh-TUHR]', stage: 'Elle appuie sur « exactement ».', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Tu relis le dernier paragraphe en diagonale. Deux formulations te viennent.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Claire attend. Que réponds-tu ?', size: 'lg',
      options: [
        { fr: src(E(1804)).fr, respell: rsOf(E(1804)), en: src(E(1804)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1805)).fr, respell: rsOf(E(1805)), en: src(E(1805)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Claire hoche la tête : « Ni plus, ni moins. » Elle entoure la phrase qui le prouve : « Je ne propose pas de supprimer les étoiles. »',
        breaks: 'Claire pose le doigt sur la fin de l’essai : « Je ne propose pas de supprimer les étoiles. » Au TCF, ta réponse était la première option piège.',
      },
    },
    {
      kind: 'break', heading: 'Tu as lu plus que le texte',
      body: `${Cap(CRITIQUE_REF)} t’a appris à trouver la thèse après la concession. Tu l’as trouvée, puis tu l’as grossie : l’auteure refuse une façon de lire les étoiles, pas les étoiles. EN: You found the thesis, then inflated it.`,
      wrong: { fr: src(E(1804)).fr, ipa: ipaOf(E(1804)), respell: rsOf(E(1804)), en: src(E(1804)).en },
      right: { fr: src(E(1805)).fr, ipa: ipaOf(E(1805)), respell: rsOf(E(1805)), en: src(E(1805)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à lire ce qu’un essai fait sans le dire, et à ne pas lui faire dire plus qu’il ne dit. À la fin, tu écriras l’analyse d’une tribune, de 250 à 400 mots.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['portee', 'restreindre'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Lire la charpente d’un essai', s: 'Actes 2 à 4 : concéder et restreindre, la portée exacte, le vrai désaccord' },
    { t: 'Voir ce que fait chaque passage', s: 'Actes 5 à 7 : les paragraphes, l’analogie et la chute, les sources' },
    { t: 'Lire ce que la phrase tient pour acquis', s: 'Actes 8 à 10 : le présupposé, l’ironie, l’agent caché' },
    { t: 'Réussir l’épreuve, puis l’analyse', s: 'Actes 11 et 12 : le format TCF et TEF, puis ta tribune' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'L’essai en entier', frSub: 'Cette fois, jusqu’à la dernière phrase',
  text: AVIS_TEXT,
  glossary: [
    { word: 'dresse', en: 'trains (as one trains an animal)', note: 'Dresser un animal, c’est lui apprendre à obéir. EN: the rating teaches people how to behave.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « La note ne se contente pas de décrire : elle dresse. » Que fait une note qui « dresse » ?', a: 'Elle apprend aux gens à se conduire d’une certaine façon, comme on dresse un animal : des sourires obligatoires, des bouteilles offertes.' },
    { q: 'Que concède l’auteure au début de l’essai ?', a: 'Que les étoiles sont utiles : une très mauvaise note signale un vrai problème, et personne ne regrette le choix au hasard.' },
    { q: 'Que répond-elle à l’objection sur les clients mécontents ?', a: '« C’est exact, et c’est précisément le problème » : elle accepte le fait et le retourne contre la note.' },
    { q: 'Que conclut-elle exactement ?', a: 'Qu’il faut garder les étoiles, mais cesser de les lire comme une mesure de la qualité.' },
    { q: 'Quelle image résume sa thèse, et que garde-t-elle de la note ?', a: 'L’alarme, utile quand elle sonne, muette le reste du temps : la note écarte le pire, elle ne classe pas le reste.' },
  ],
  audio: REC('rec-c1-20-avis'), say: REFRAME, terms: ['portee', 'restreindre'],
};

/** THE ONE RECAP SECTION: b1.37 and b2.24, by trail position, by id. */
const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core', sheetId: 'sheet-charpente',
  title: 'Ce que tu sais déjà',
  examples: [
    ex(B137(1005), `${Cap(LECTURE_B1_REF)} : le sens d’abord`),
    ex(B224(1426), `${Cap(CRITIQUE_REF)} : la thèse après la concession`),
    ex(B224(1466), 'ce qu’un argument croit sans le dire'),
    ex(B224(1479), 'la distance du journaliste'),
    ex(B224(1501), 'l’antiphrase'),
    ex(B224(1525), 'le mot doux et ce qu’il tait'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['presuppose', 'ironie'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Le TCF te demande ce que conclut l’auteur', fr: src(E(1809)).fr, en: src(E(1809)).en },
    { situation: 'Une note interne annonce « une nouvelle phase »', fr: src('fr.c1.nuances-et-registres.094').fr, en: src('fr.c1.nuances-et-registres.094').en },
    { situation: 'L’administration répond à ta demande de permis', fr: src('fr.c1.nuances-et-registres.107').fr, en: src('fr.c1.nuances-et-registres.107').en },
    { situation: 'Une tribune pose une question qui t’agace', fr: src(E(1810)).fr, en: src(E(1810)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['presuppose', 'portee'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La conclusion', '« Je ne propose pas de supprimer les étoiles. » L’auteure...', ['garde les étoiles et en change la lecture', 'veut supprimer les étoiles', 'ne conclut rien du tout'], 0,
    'Elle refuse la conclusion forte et en pose une plus étroite. EN: she rejects the strong conclusion and states a narrower one.'),
  ctl('Le geste', '« C’est exact, et c’est précisément le problème. » L’auteure...', ['rejette l’objection', 'accepte le fait et le retourne contre l’objection'], 1,
    'Elle accorde, puis s’en sert. EN: she grants the fact, then uses it.'),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['un résumé de cent mots', 'l’analyse d’une tribune, de 250 à 400 mots', 'une lettre de réclamation'], 1,
    'Thèse, concession, présupposé, omission, posture face aux sources. EN: thesis, concession, presupposition, omission, stance.'),
], ['portee', 'restreindre']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le filigrane',
    opener: {
      line: 'Tu as compris l’essai, puis tu lui as fait dire plus qu’il ne disait : ici tu apprends à lire en filigrane, sans rien ajouter. EN: You understood the essay, then made it say more: here you learn to read between the lines without adding.',
      imageRef: 'lessons/lire-entre-les-lignes/act01.jpg',
    },
    sections: [],
    milestone: 'Tu redis la conclusion d’un essai à sa portée exacte, sans la grossir. EN: You can restate an essay’s conclusion at its exact scope, without inflating it.',
    estScreens: 26, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_ACQUIS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — CONCÉDER POUR MIEUX RESTREINDRE
 *
 *  TEXT: a librarian's tribune that grants a point four times before saying
 *  what it wants. MOVE: what a concession grants stays granted; the thesis
 *  lives in the restriction; « sans doute » concedes, it does not certify.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_TRIBUNE: Sec<'reading'> = {
  type: 'reading', id: 'a2-tribune', layer: 'core', questionsInModal: true,
  title: 'La tribune du bibliothécaire', frSub: 'Compte ce qu’il accorde',
  text: BIBLIO_TEXT,
  glossary: [
    { word: 'deux-pièces', en: 'two-room flat', note: 'Un appartement de deux pièces.' },
  ],
  questions: [
    { q: 'Devine le sens : « on ne compte pas les absents ». Pourquoi est-ce un problème pour mesurer la demande ?', a: 'Ceux qui ont cessé de venir ne laissent aucune trace : les statistiques ne voient que ceux qui sont là.' },
    { q: 'Combien de fois l’auteur accorde-t-il un point avant de le restreindre ? Cite les charnières.', a: 'Trois fois : « C’est exact. Reste que », « Certes… Encore faudrait-il », « Sans doute… Il n’en demeure pas moins ».' },
    { q: 'L’auteur est-il contre la nouvelle bibliothèque ?', a: 'Non : « c’est tant mieux ». Il en accepte le modèle et ne demande qu’une salle silencieuse.' },
    { q: 'Que conteste-t-il dans l’argument du coût ?', a: 'Pas le coût, qu’il concède, mais la conclusion qu’on en tire : il faut le comparer au coût d’un public perdu.' },
    { q: 'Que demande-t-il exactement à la fin ?', a: 'Une porte et une pièce où le silence soit une règle : ni le retour à l’ancienne bibliothèque, ni le départ des familles.' },
  ],
  audio: REC('rec-c1-20-biblio'), say: REFRAME, terms: ['restreindre'],
};

const A2_CHARNIERE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-charniere', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-charpente',
  title: 'Accorder, puis restreindre', frSub: 'La charpente de l’essai',
  hint: 'Quatre cartes. Regarde ce que la concession laisse debout.',
  audio: REC('rec-c1-20-charniere'), say: REFRAME, terms: ['restreindre'],
  cards: [
    { head: 'Accorder pour de bon', label: 'certes, c’est exact, sans doute', fr: src(E(1816)).fr, sub: rsOf(E(1816)),
      body: 'À l’écrit soutenu, la concession n’est pas une feinte : ce qu’elle accorde, l’auteur le tient pour vrai. Seuls « mettons que » et « admettons » accordent pour l’hypothèse. EN: in essay prose the concession is real, unless it is hypothetical.' },
    { head: 'Restreindre', label: 'reste que, il n’en demeure pas moins', fr: src(E(1817)).fr, sub: rsOf(E(1817)),
      body: 'La restriction ne nie pas ce qui précède : elle en limite la portée. C’est dans cette limite que vit la thèse. EN: the restriction limits what was granted; the thesis lives there.' },
    { head: 'Le constat oui, la conclusion non', label: 'le geste le plus fréquent', fr: src(E(1818)).fr, sub: rsOf(E(1818)),
      body: 'Souvent, l’auteur accorde un fait et refuse ce qu’on en déduit : le budget est serré, mais cela ne justifie pas de renoncer. EN: he grants a fact and refuses the inference.' },
    { head: 'Plus loin que la grammaire', label: Cap(CONCESSION_B2_REF), fr: src(E(1819)).fr, sub: rsOf(E(1819)),
      body: `« ${B216_REFRAME} » À la lecture, pose la question inverse. EN: when reading, ask what the concession leaves standing.` },
  ],
};

const A2_CARTE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-carte', layer: 'core', size: 'lg',
  title: 'Ce qui est accordé, ce qui reste', frSub: 'Quatre autres essais',
  groups: [
    grp('Accorder, puis restreindre', [
      it('fr.c1.rhetorique.052', 'accordé : le streaming a sauvé la musique'),
      it('fr.c1.rhetorique.022', 'accordé pour l’hypothèse'),
      it('fr.c1.rhetorique.027', 'accordé : elle rédige vite'),
    ], chk('Dans ces trois phrases, ce que l’auteur pense vraiment se trouve...', ['après reste que, toujours est-il que, il n’en demeure pas moins', 'dans la première moitié', 'nulle part'], 0,
      'La première moitié est accordée ; la seconde porte la position. EN: the second half carries the stance.')),
    grp('Accordé, donc vrai pour l’auteur', [
      it('fr.c1.rhetorique.024', 'il accorde que la critique est facile'),
      it(E(1828), 'il accorde que l’ancien modèle était pénible'),
    ], chk('« Bien sûr, la critique est facile, cela dit certaines critiques visent juste. » L’auteur pense-t-il que la critique est facile ?', ['Oui : il l’accorde, puis il nuance.', 'Non : il fait semblant de l’accorder.'], 0,
      'La concession est sincère ; la restriction ajoute une limite. EN: the concession is sincere.')),
    ctl('Sans doute', '« Sans doute la demande est-elle difficile à mesurer. » L’auteur...', ['accorde que la demande est difficile à mesurer', 'affirme que la demande est facile à mesurer', 'est certain que personne ne viendra'], 0,
      '« Sans doute » accorde un point ; il n’affirme pas une certitude. EN: sans doute grants a point.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['restreindre'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six lectures qui trahissent la charpente',
  rule: {
    title: 'Accorder n’est pas rejeter, restreindre non plus',
    body: 'Ce que l’auteur accorde, il le garde. Ce qu’il restreint, il le limite sans le nier. Et « sans doute » concède : seul « sans aucun doute » affirme. EN: granted stays granted; restricted is limited, not denied.',
  },
  cards: [
    { promptLabel: 'la concession effacée', promptSound: 'L’auteur regrette que les bibliothèques aient changé.', fr: src(E(1815)).fr, ipa: ipaOf(E(1815)), tip: 'Il dit « c’est tant mieux » : le changement est accordé, et sincèrement. EN: he welcomes the change.' },
    { promptLabel: 'la restriction gonflée', promptSound: 'L’auteur rejette la bibliothèque comme lieu de vie.', fr: src(E(1825)).fr, ipa: ipaOf(E(1825)), tip: 'Il en limite la portée : une salle, pas un retour en arrière. EN: one room, not a return.' },
    { promptLabel: 'sans doute pris pour une certitude', promptSound: 'L’auteur est absolument certain que la demande ne se mesure pas.', fr: src(E(1823)).fr, ipa: ipaOf(E(1823)), tip: '« Sans doute » concède un point ; il n’a pas la force de « sans aucun doute ». EN: it grants, it does not certify.' },
    { promptLabel: 'encore faut-il lu comme un accord', promptSound: 'L’auteur accepte l’argument du coût.', fr: src(E(1821)).fr, ipa: ipaOf(E(1821)), tip: '« Encore faudrait-il » pose une condition qui retourne l’argument. EN: it sets a condition that turns the argument.' },
    { promptLabel: 'le constat refusé', promptSound: 'L’auteur nie que les budgets soient serrés.', fr: src(E(1826)).fr, ipa: ipaOf(E(1826)), tip: 'Il l’accorde, et conteste seulement la conséquence. EN: he grants it.' },
    { promptLabel: 'la thèse au mauvais étage', promptSound: 'L’auteur veut revenir à la bibliothèque d’autrefois.', fr: src(E(1829)).fr, ipa: ipaOf(E(1829)), tip: 'Il l’écarte lui-même, en toutes lettres. EN: he rules it out explicitly.' },
  ],
  drill: [
    { promptSay: 'Après « C’est exact. », la position de l’auteur arrive avec ... .', opts: ['reste que', 'de plus'], correct: 0 },
    { promptSay: '« Sans doute » signifie ici ... .', opts: ['probablement, je l’accorde', 'sans aucune hésitation'], correct: 0 },
    { promptSay: 'Ce qu’un auteur concède, il le ... .', opts: ['retire', 'garde', 'oublie'], correct: 1 },
    { promptSay: '« Encore faudrait-il comparer ce coût » : l’auteur ... l’argument.', opts: ['accepte', 'retourne'], correct: 1 },
    { promptSay: 'La thèse vit dans la ... .', opts: ['concession', 'restriction'], correct: 1 },
    { promptSay: 'Il accorde le constat et refuse la ... .', opts: ['conclusion', 'question', 'citation'], correct: 0 },
    { promptSay: '« Il n’en demeure pas moins que » annonce ... .', opts: ['un exemple', 'une limite', 'une définition'], correct: 1 },
    { promptSay: 'L’auteur demande une ... , pas le retour du passé.', opts: ['porte', 'loi'], correct: 0 },
  ],
  steps: STEPS_STD('Ce qu’un lecteur pressé a compris', 'Écoute les six phrases du texte', 'Huit phrases'),
  audio: REC('rec-c1-20-piege-charpente'), say: REFRAME, terms: ['restreindre'],
};

const A2_ANALYSE = pourTonAnalyse('a2-analyse', 'Tu écris ce qu’il accorde, puis ce qu’il limite', [
  grp('Deux phrases d’analyse', [
    it(E(1826), 'accorder, puis contester la conséquence'),
    free('L’auteur est contre les budgets serrés.', 'The writer is against tight budgets.', 'une thèse inventée'),
  ], chk('Laquelle décrit la charpente du texte ?', ['la première', 'la seconde'], 0,
    'La première nomme les deux temps ; la seconde invente une thèse. EN: the first names both moves.')),
  grp('La portée de la thèse', [
    it(E(1825), 'il limite'),
    it(E(1818), 'le geste général'),
  ], chk('Pour résumer la tribune, tu écris qu’il...', ['rejette la nouvelle bibliothèque', 'l’accepte en lui demandant une salle silencieuse'], 1,
    'Il accepte le modèle et pose une limite. EN: he accepts the model and adds a limit.')),
], ['restreindre']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La concession', 'À l’écrit soutenu, ce qu’un auteur concède...', ['il le tient pour vrai', 'il le rejette ensuite'], 0,
    'La concession est sincère ; la restriction la limite. EN: concessions are real.'),
  ctl('Les charnières', 'Lequel de ces mots annonce une restriction ?', ['certes', 'reste que', 'sans doute'], 1,
    'Certes et sans doute accordent ; reste que limite. EN: reste que restricts.'),
  ctl('Le geste', '« Il accorde le constat et refuse la conclusion. » Il...', ['conteste le fait', 'admet le fait et refuse ce qu’on en déduit'], 1,
    'Le fait est accepté, la déduction non. EN: the fact stands; the inference does not.'),
], ['restreindre']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Concéder, restreindre',
    opener: {
      line: 'Un bibliothécaire accorde trois fois avant de dire ce qu’il veut : ici tu suis la charpente de l’essai. EN: A librarian concedes three times before saying what he wants: here you follow the frame of an essay.',
      imageRef: 'lessons/lire-entre-les-lignes/act02.jpg',
    },
    sections: [],
    milestone: 'Tu sépares ce qu’un auteur accorde de ce qu’il restreint, et « sans doute » ne te trompe plus. EN: You can separate what a writer grants from what he restricts, and « sans doute » no longer fools you.',
    estScreens: 30, restPoints: ['a2-charniere', 'a2-piege'],
  },
  sections: [A2_TRIBUNE, A2_CHARNIERE, A2_CARTE, A2_PIEGE, A2_ANALYSE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA PORTÉE EXACTE
 *
 *  TEXT: a chronicle that corrects the headlines about a study in BOTH
 *  directions. MOVE: keep a conclusion's domain, quantity, strength and
 *  condition; read a negation with what it touches; reject the stronger and
 *  the weaker paraphrase alike.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_CHRONIQUE: Sec<'reading'> = {
  type: 'reading', id: 'a3-chronique', layer: 'core', questionsInModal: true,
  title: 'La chronique du jeudi', frSub: 'Ce que l’étude dit, et ce qu’on lui fait dire',
  text: ECRAN_TEXT,
  glossary: [
    { word: 'feuilleter', en: 'to leaf through', note: 'Tourner les pages vite, pour voir comment c’est fait.' },
  ],
  questions: [
    { q: 'Devine le sens : « Faut-il en conclure que l’écran est innocent ? Pas davantage. » Que répond l’auteure à sa propre question ?', a: 'Non : l’écran n’est pas innocent non plus. « Pas davantage » refuse la seconde exagération après la première.' },
    { q: 'Dans quelles deux directions les titres vont-ils plus loin que l’étude ?', a: 'Ils oublient que l’étude ne portait que sur des textes longs, et que l’écart disparaissait quand les élèves faisaient un plan.' },
    { q: 'Quelle reformulation serait trop faible ?', a: 'Dire que l’écran ne change rien, ou qu’il a parfois un petit effet : l’effet est modeste mais net, sur les textes longs.' },
    { q: 'Que conclut-elle exactement ?', a: 'Sur écran, on saisit moins bien la structure des textes longs, et l’effet disparaît si le lecteur peut se faire une vue d’ensemble.' },
    { q: 'À quoi sert la comparaison avec la ville ?', a: 'À rendre le résultat intuitif : sans plan, on se repère mal. Elle n’ajoute aucune preuve.' },
  ],
  audio: REC('rec-c1-20-ecran'), say: REFRAME, terms: ['portee'],
};

const A3_REGLAGES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-reglages', layer: 'core', sheetId: 'sheet-charpente',
  title: 'Six réglages de la portée',
  cols: ['Marque', 'Exemple', 'Ce qu’elle règle'],
  rows: [
    { cells: ['ne… que, seulement', 'textes longs seulement', 'le domaine'], say: src(E(1833)).fr,
      detail: { title: 'Le domaine', body: 'Ce qui est vrai ici ne l’est pas forcément ailleurs : l’étude ne parle que des textes longs. EN: the claim holds only within its domain.', say: src(E(1836)).fr } },
    { cells: ['certains, la plupart, tous', 'la plupart des communes', 'le nombre'], say: src(E(1853)).fr,
      detail: { title: 'Le nombre', body: '« La plupart » n’est pas « toutes », et « certains » n’est pas « la plupart ». Le nombre est ce qu’un résumé exagère en premier. EN: most is not all.', say: src(E(1855)).fr } },
    { cells: ['peut, tend à, doit', 'l’écran peut gêner', 'la force'], say: 'Sur écran, la lecture des textes longs peut être moins précise.',
      detail: { title: 'La force', body: 'Un modal règle la force : « peut » n’est pas « fait », « tend à » n’est pas « toujours ». EN: modals set the strength of a claim.', say: 'Le stress tend à baisser au début, sans disparaître.' } },
    { cells: ['si, sauf si, dès que', 'sauf si l’on fait un plan', 'la condition'], say: src(E(1848)).fr,
      detail: { title: 'La condition', body: 'Une conclusion privée de sa condition devient fausse : l’effet disparaît quand le lecteur fait un plan. EN: drop the condition and the claim becomes false.', say: src(E(1834)).fr } },
    { cells: ['pas tous, pas toujours', 'tous n’ont pas réussi', 'la négation partielle'], say: src(E(1843)).fr,
      detail: { title: 'La négation partielle', body: '« Tous… ne… pas » se lit « pas tous ». Pour dire « aucun », un texte soigné écrit « aucun… ne ». EN: tous… ne… pas reads as not all; careful prose says none with aucun… ne.', say: src(E(1844)).fr } },
    { cells: ['non pas X mais Y, moins X que Y', 'moins la lecture que la structure', 'l’objet exact'], say: src(E(1847)).fr,
      detail: { title: 'L’objet exact', body: 'Ces tours déplacent la cible : ce que l’auteure critique n’est pas ce qu’on croyait. EN: these shift the target of the claim.', say: src(E(1846)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['portee'],
};

const A3_TROIS: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trois', layer: 'core', size: 'lg',
  title: 'Trop fort, trop faible, exact', frSub: 'Deux sources, trois reformulations',
  groups: [
    grp('La méditation', [it(E(1849), 'la source')],
      chk('Quelle reformulation garde la portée exacte ?', [src(E(1850)).fr, src(E(1851)).fr, src(E(1852)).fr], 1,
        'Elle garde le nombre (les réguliers), le verbe (se disent) et la limite (au début). EN: it keeps who, how and how long.')),
    grp('L’éclairage', [it(E(1853), 'la source')],
      chk('Et ici ?', [src(E(1854)).fr, src(E(1856)).fr, src(E(1855)).fr], 2,
        '« Fait baisser » invente une cause ; « quelques communes ont essayé » oublie le résultat. EN: one invents a cause, one drops the result.')),
    ctl('Trop loin', 'Une collègue résume l’essai sur les écrans en une phrase définitive. Tu lui réponds poliment...', [src('fr.c1.rhetorique.005').fr, 'Tu as parfaitement raison.', 'Je n’ai pas lu le texte.'], 0,
      'On accorde le fond et on refuse la portée. EN: grant the gist, refuse the scope.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['portee'],
};

const A3_NEGATION: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-negation', layer: 'core', swipe: true,
  title: 'Six négations qui changent la portée',
  rule: {
    title: 'La négation a une portée, elle aussi',
    body: '« Tous… ne… pas » se lit pas tous ; « ne… que » restreint ; « pas seulement » élargit ; « non pas… mais » déplace la cible. Lis la négation avec ce qu’elle touche. EN: read a negation with what it applies to.',
  },
  cards: [
    { promptLabel: 'tous… ne… pas', promptSound: 'Aucun élève n’a réussi.', fr: src(E(1843)).fr, ipa: ipaOf(E(1843)), tip: 'Certains ont réussi, d’autres non. EN: some did, some did not.' },
    { promptLabel: 'pas toujours', promptSound: 'L’écran ne gêne jamais.', fr: src(E(1844)).fr, ipa: ipaOf(E(1844)), tip: '« Pas toujours » laisse des cas où il gêne. EN: sometimes it does.' },
    { promptLabel: 'ne… que', promptSound: 'L’étude portait sur tous les textes.', fr: src(E(1833)).fr, ipa: ipaOf(E(1833)), tip: '« Ne… que » limite le domaine aux textes longs. EN: only long texts.' },
    { promptLabel: 'pas seulement', promptSound: 'Le seul problème, c’est la longueur.', fr: src(E(1845)).fr, ipa: ipaOf(E(1845)), tip: '« Pas seulement » ajoute d’autres causes. EN: there is more than length.' },
    { promptLabel: 'non pas… mais', promptSound: 'Elle critique l’écran.', fr: src(E(1846)).fr, ipa: ipaOf(E(1846)), tip: 'La cible est la façon de lire. EN: the target is the way of reading.' },
    { promptLabel: 'moins… que', promptSound: 'L’étude parle surtout de la lecture.', fr: src(E(1847)).fr, ipa: ipaOf(E(1847)), tip: 'Elle parle surtout de la structure. EN: mostly about structure.' },
  ],
  drill: [
    { promptSay: '« Tous les élèves n’ont pas réussi » : ... élèves ont réussi.', opts: ['certains', 'aucun'], correct: 0 },
    { promptSay: '« L’étude ne portait que sur des textes longs » : sur les textes courts, elle ne dit ... .', opts: ['tout', 'rien'], correct: 1 },
    { promptSay: 'Dire « l’écran nous rend moins bons lecteurs », c’est aller ... loin que l’étude.', opts: ['moins', 'plus'], correct: 1 },
    { promptSay: 'Dire « l’écran a parfois un petit effet », c’est rester en ... du texte.', opts: ['deçà', 'avance', 'dehors'], correct: 0 },
    { promptSay: '« Pas seulement la longueur » : il y a ... causes.', opts: ['moins de', 'd’autres'], correct: 1 },
    { promptSay: 'La conclusion garde sa ... : sauf si l’on fait un plan.', opts: ['condition', 'question'], correct: 0 },
    { promptSay: '« Ne gêne pas toujours » veut dire : gêne ... .', opts: ['jamais', 'toujours', 'parfois'], correct: 2 },
    { promptSay: 'Une bonne reformulation n’ajoute rien et n’... rien.', opts: ['enlève', 'explique'], correct: 0 },
  ],
  steps: STEPS_STD('Ce qu’un lecteur pressé a compris', 'Écoute les six phrases justes', 'Huit phrases'),
  audio: REC('rec-c1-20-piege-portee'), say: REFRAME, terms: ['portee'],
};

const A3_ANALYSE = pourTonAnalyse('a3-analyse', 'Tu redis la conclusion sans la grossir', [
  grp('Deux résumés', [
    it(E(1836), 'la conclusion exacte'),
    it(E(1835), 'le titre'),
  ], chk('Lequel peux-tu écrire dans ton analyse ?', ['le premier, avec sa condition', 'le second, plus frappant'], 0,
    'Le titre va plus loin que l’étude ; ton analyse ne le suit pas. EN: your analysis does not follow the headline.')),
  grp('Juger une reformulation', [
    it(E(1840), 'trop fort'),
    it(E(1841), 'trop faible'),
    it(E(1848), 'la condition gardée'),
  ], chk('Une reformulation qui oublie « sauf si l’on fait un plan »...', ['va plus loin que le texte', 'reste exacte'], 0,
    'Sans la condition, l’effet devient général. EN: without the condition, the effect becomes general.')),
], ['portee']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Trop fort', '« La plupart des communes » devient « toutes les communes ». La reformulation...', ['va plus loin que le texte', 'reste en deçà du texte', 'est exacte'], 0,
    'Le nombre a grossi. EN: the quantity grew.'),
  ctl('Trop faible', 'Un résumé oublie le résultat net et ne garde que « parfois ». Il...', ['exagère', 'reste en deçà'], 1,
    'Il affaiblit ce que le texte établit. EN: it weakens what the text establishes.'),
  ctl('La négation', '« Tous n’ont pas réussi » veut dire...', ['aucun n’a réussi', 'certains n’ont pas réussi'], 1,
    'Pas tous : pour dire aucun, le texte écrirait « aucun n’a réussi ». EN: not all; none would be aucun… ne.'),
], ['portee']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La portée exacte',
    opener: {
      line: 'Un titre grossit une étude, un lecteur prudent l’affaiblit : ici tu redis une conclusion à sa portée exacte. EN: A headline inflates a study, a cautious reader weakens it: here you restate a conclusion at its exact scope.',
      imageRef: 'lessons/lire-entre-les-lignes/act03.jpg',
    },
    sections: [],
    milestone: 'Tu écartes la reformulation trop forte et la trop faible, et tu gardes le nombre, la force et la condition. EN: You can reject the overstated and the understated paraphrase, and keep quantity, strength and condition.',
    estScreens: 32, restPoints: ['a3-reglages', 'a3-negation'],
  },
  sections: [A3_CHRONIQUE, A3_REGLAGES, A3_TROIS, A3_NEGATION, A3_ANALYSE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE VRAI DÉSACCORD
 *
 *  TEXT: a chronicle on a town quarrelling about lawns. MOVE: when both
 *  sides share the facts and still disagree, the stated object is not the
 *  real one: a word, a value, or who decides.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_CHRONIQUE: Sec<'reading'> = {
  type: 'reading', id: 'a4-chronique', layer: 'core', questionsInModal: true,
  title: 'La querelle de Saint-Aubert', frSub: 'De quoi se dispute-t-on, vraiment ?',
  text: PELOUSE_TEXT,
  glossary: [
    { word: 's’envenime', en: 'is turning sour', note: 'Une querelle qui s’envenime devient plus amère, plus dure.' },
  ],
  questions: [
    { q: 'Devine le sens : « Chacun gagne sur son terrain et ne met jamais le pied sur celui de l’autre. » Que veut dire l’auteure ?', a: 'Chaque camp a raison dans son domaine (l’écologie, le respect) et ne répond jamais aux arguments de l’autre.' },
    { q: 'Sur quoi les deux camps sont-ils d’accord ?', a: 'Sur presque tous les faits : la prairie consomme moins d’eau et attire des insectes.' },
    { q: 'Sur quoi porte réellement la querelle ?', a: 'Sur ce qu’un jardin dit de celui qui l’entretient : pour une génération, la pelouse rase est une politesse envers les voisins.' },
    { q: 'Pourquoi le mot « soigné » compte-t-il ?', a: 'Les deux camps l’emploient sans lui donner le même sens : le désaccord porte aussi sur un mot.' },
    { q: 'Que fait la pancarte « Prairie en cours » ?', a: 'Elle ne prouve rien sur l’écologie ; elle répond au vrai sujet en disant au voisin que quelqu’un s’occupe du jardin.' },
  ],
  audio: REC('rec-c1-20-pelouse'), say: REFRAME, terms: ['differend'],
};

const A4_OBJETS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-objets', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-fonctions',
  title: 'L’objet déclaré, l’objet réel', frSub: 'Quatre façons de ne pas se comprendre',
  hint: 'Quatre cartes. Cherche d’abord ce sur quoi on est d’accord.',
  audio: REC('rec-c1-20-objets'), say: REFRAME, terms: ['differend'],
  cards: [
    { head: 'L’objet déclaré', label: 'ce dont on croit parler', fr: src(E(1858)).fr, sub: rsOf(E(1858)),
      body: 'Chaque camp nomme le sujet à sa façon : l’eau, les abeilles, la valeur des maisons. C’est l’objet déclaré. EN: each side names the topic its own way.' },
    { head: 'D’accord sur les faits', label: 'le premier indice', fr: src(E(1860)).fr, sub: rsOf(E(1860)),
      body: 'Si les deux camps partagent les faits et se disputent encore, le désaccord est ailleurs. EN: shared facts plus a quarrel means the quarrel is elsewhere.' },
    { head: 'L’objet réel', label: 'en réalité, au fond', fr: src(E(1861)).fr, sub: rsOf(E(1861)),
      body: 'L’essai le nomme avec « en réalité », « au fond », « le vrai débat ». Ici : une valeur, la politesse due aux voisins. EN: here the real object is a value.' },
    { head: 'Un mot, deux sens', label: 'le désaccord de définition', fr: src(E(1862)).fr, sub: rsOf(E(1862)),
      body: 'Parfois, on se dispute sur un mot qu’on n’entend pas de la même façon. Le débat n’avance qu’une fois le mot défini. EN: sometimes the quarrel is about a word.' },
  ],
};

const A4_SORTE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-sorte', layer: 'core', size: 'lg',
  title: 'Sur quoi porte le désaccord', frSub: 'Quatre disputes',
  groups: [
    grp('Faits ou valeur', [
      it(E(1871), 'deux chiffres'),
      it(E(1868), 'les mêmes chiffres'),
    ], chk('Dans la seconde phrase, le désaccord porte sur...', ['une valeur', 'les faits', 'un mot'], 0,
      'Ils partagent les chiffres et ne les jugent pas de la même façon. EN: same figures, different judgement.')),
    grp('Un mot ou qui décide', [
      it(E(1869), 'le mot « tôt »'),
      it(E(1870), 'le parc'),
    ], chk('Dans la seconde phrase, le désaccord porte sur...', ['le but', 'qui décide', 'un chiffre'], 1,
      'Ils veulent la même chose, pas le même arbitre. EN: same aim, different arbiter.')),
    ctl('Le piège', 'Deux voisins se disputent sur l’eau qu’utilise un gazon, et tous deux citent le même rapport. Leur vrai désaccord...', ['porte sur la consommation d’eau', 'est ailleurs, puisqu’ils partagent les faits'], 1,
      'Des faits partagés ne font pas une querelle. EN: shared facts do not make a quarrel.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['differend'],
};

/** `hideLines`: the questions are about what the ear caught. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Terrasses chauffées', frSub: 'Une animatrice, un riverain, une patronne de café',
  lines: [ln(E(1872)), ln(E(1873)), ln(E(1874)), ln(E(1875)), ln(E(1876)), ln(E(1877)), ln(E(1878)), ln(E(1879))],
  questions: [
    { q: 'Sur quoi la patronne du café et le riverain sont-ils d’accord ?', opts: ['qu’un chauffage consomme beaucoup', 'que le trottoir est trop étroit', 'que le café doit fermer'], correct: 0, why: 'Elle ne conteste pas la consommation : c’est le point accordé. EN: she grants the energy point.' },
    { q: 'De quoi le riverain parle-t-il d’abord ?', opts: ['de bruit', 'd’énergie'], correct: 1, why: 'Il ouvre sur la consommation, l’objet déclaré. EN: energy, the stated object.' },
    { q: 'Que reproche la patronne du café au riverain ?', opts: ['de mentir sur les chiffres', 'de cacher sous l’énergie une question de place'], correct: 1, why: 'Elle nomme ce qu’elle croit être l’objet réel. EN: she names what she thinks is the real object.' },
    { q: 'Que montre la poussette ?', opts: ['que le riverain aime marcher', 'qu’il a des enfants, rien de plus', 'que l’espace est son vrai sujet'], correct: 2, why: 'Il ne nie pas : il parle de place, pas d’énergie. EN: his issue is space.' },
    { q: 'Qui formule le vrai sujet ?', opts: ['l’animatrice', 'le riverain', 'la patronne du café'], correct: 0, why: 'Elle conclut : à qui appartient le trottoir l’hiver. EN: the host names it.' },
  ],
  audio: REC('rec-c1-20-terrasses'), say: REFRAME, terms: ['differend'],
};

const A4_ANALYSE = pourTonAnalyse('a4-analyse', 'Tu nommes l’objet réel du désaccord', [
  grp('Deux phrases d’analyse', [
    it(E(1865), 'la formule'),
    it(E(1861), 'l’objet réel, nommé'),
  ], chk('Laquelle apporte quelque chose à une analyse ?', ['« Le débat porte sur les pelouses. »', '« Sous la question de l’eau, la querelle porte sur ce qu’un jardin dit de son propriétaire. »'], 1,
    'La seconde distingue l’objet déclaré de l’objet réel. EN: the second separates the stated and the real object.')),
  grp('Prouver avec le texte', [
    it(E(1860), 'l’indice'),
    it(E(1863), 'le dialogue de sourds'),
  ], chk('Quel passage prouve que les camps ne se disputent pas sur les faits ?', ['« Personne ne conteste qu’une prairie consomme moins d’eau »', '« Les opposants répondent tiques »'], 0,
    'L’accord sur le fait est l’indice. EN: the agreement on the fact is the clue.')),
], ['differend']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’indice', 'Deux camps citent les mêmes chiffres et se disputent encore. Tu en déduis que...', ['l’un des deux ment', 'le désaccord porte sur autre chose que les faits'], 1,
    'Mêmes faits, querelle ailleurs. EN: same facts, quarrel elsewhere.'),
  ctl('Les signaux', 'Quelle formule annonce l’objet réel d’un débat ?', ['en réalité', 'par exemple', 'd’abord'], 0,
    'En réalité, au fond, le vrai débat : l’essai passe du déclaré au réel. EN: en réalité signals the real object.'),
  ctl('Un mot', '« Ils ne donnent pas le même sens au mot soigné. » Le désaccord porte sur...', ['un fait', 'une définition', 'un chiffre'], 1,
    'Le même mot, deux sens. EN: one word, two meanings.'),
], ['differend']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le vrai désaccord',
    opener: {
      line: 'Une petite ville croit se disputer sur l’eau et les abeilles : ici tu trouves de quoi elle parle vraiment. EN: A small town thinks it is arguing about water and bees: here you find what it is really about.',
      imageRef: 'lessons/lire-entre-les-lignes/act04.jpg',
    },
    sections: [],
    milestone: 'Tu distingues l’objet déclaré d’un désaccord de son objet réel : un fait, un mot, une valeur ou qui décide. EN: You can tell the stated object of a disagreement from its real one.',
    estScreens: 30, restPoints: ['a4-objets', 'a4-ecoute'],
  },
  sections: [A4_CHRONIQUE, A4_OBJETS, A4_SORTE, A4_ECOUTE, A4_ANALYSE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — CE QUE FAIT UN PARAGRAPHE
 *
 *  TEXT: an essay in six numbered paragraphs, each with one job. MOVE: name
 *  the function of a passage with a verb (pose, délimite, illustre,
 *  s’objecte, écarte un contresens, élargit), never its content; the TEF
 *  item « Que fait l’auteur dans le paragraphe qui commence par… ? ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_ESSAI: Sec<'reading'> = {
  type: 'reading', id: 'a5-essai', layer: 'core', questionsInModal: true,
  title: 'Le cartel ou le regard', frSub: 'Six paragraphes, six rôles',
  text: MUSEE_TEXT,
  glossary: [
    { word: 'retable', en: 'altarpiece', note: 'Un grand tableau placé derrière un autel.' },
  ],
  questions: [
    { q: 'Devine le sens : « on nous apprend à reconnaître plutôt qu’à voir ». Quelle différence l’auteur fait-il entre reconnaître et voir ?', a: 'Reconnaître, c’est retrouver ce qu’on a lu sur la notice ; voir, c’est découvrir soi-même ce qu’on a devant soi.' },
    { q: 'Que fait le paragraphe 2 ?', a: 'Il délimite l’objet du reproche : non pas lire un cartel, mais le lire à la place du tableau.' },
    { q: 'Que fait le paragraphe 4 ?', a: 'Il se fait une objection (un mois, une salle, des visiteurs observés), l’accepte, puis en limite la portée.' },
    { q: 'Que fait le paragraphe 5 ?', a: 'Il écarte un contresens : l’auteur ne veut pas supprimer les explications, il veut changer leur place.' },
    { q: 'Que fait le paragraphe 6 ?', a: 'Il élargit la thèse à toutes les situations où une notice précède l’expérience.' },
  ],
  audio: REC('rec-c1-20-musee'), say: REFRAME, terms: ['fonction'],
};

const A5_FONCTIONS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-fonctions', layer: 'core', sheetId: 'sheet-fonctions',
  title: 'Six choses que fait un paragraphe',
  cols: ['Fonction', 'Signal', 'Dans l’essai'],
  rows: [
    { cells: ['poser le constat', 'un chiffre, on constate', 'paragraphe 1'], say: src(E(1887)).fr,
      detail: { title: 'Poser le constat', body: 'Le premier paragraphe installe un fait que tout le monde accepte, souvent pour le discuter ensuite. EN: the opening sets out an accepted fact.', say: 'Un visiteur regarde un tableau moins de trente secondes.' } },
    { cells: ['délimiter l’objet', 'encore faut-il s’entendre', 'paragraphe 2'], say: src(E(1894)).fr,
      detail: { title: 'Délimiter l’objet', body: 'L’auteur précise ce dont il parle vraiment, et écarte ce dont il ne parle pas. EN: the writer narrows the object of the claim.', say: src(E(1882)).fr } },
    { cells: ['illustrer', 'prenons un cas', 'paragraphe 3'], say: src(E(1891)).fr,
      detail: { title: 'Illustrer', body: 'Un cas rend la thèse concrète ; il ne la prouve pas à lui seul. EN: an example makes the thesis concrete.', say: src(E(1884)).fr } },
    { cells: ['se faire une objection', 'dira-t-on, je l’accorde', 'paragraphe 4'], say: src(E(1895)).fr,
      detail: { title: 'Se faire une objection', body: 'L’auteur donne la parole à la critique, l’accepte, puis en limite la portée. EN: the writer voices a criticism, grants it, then limits it.', say: src(E(1883)).fr } },
    { cells: ['écarter un contresens', 'qu’on ne s’y trompe pas', 'paragraphe 5'], say: src(E(1892)).fr,
      detail: { title: 'Écarter un contresens', body: 'L’auteur prévient une lecture trop forte de sa thèse. C’est souvent là qu’elle est dite le plus exactement. EN: the writer blocks an overstated reading.', say: src(E(1885)).fr } },
    { cells: ['élargir', 'la question dépasse', 'paragraphe 6'], say: src(E(1893)).fr,
      detail: { title: 'Élargir', body: 'La fin étend la thèse au-delà de son premier terrain. EN: the ending widens the thesis.', say: src(E(1886)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['fonction'],
};

const A5_CONSIGNES: Sec<'examples'> = {
  type: 'examples', id: 'a5-consignes', layer: 'core', sheetId: 'sheet-fonctions',
  title: 'La question de l’examen, et ses réponses',
  examples: [
    ex(E(1880), 'la consigne type du TEF Canada'),
    ex(E(1883), 'une réponse qui nomme une fonction'),
    ex(E(1884), 'une autre fonction'),
    ex(E(1885), 'une troisième'),
    ex(E(1888), 'la règle'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fonction'],
};

const A5_ASSOCIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-associer', layer: 'core', size: 'lg',
  title: 'Quel rôle joue ce passage ?', frSub: 'Des passages d’autres essais',
  groups: [
    grp('Passage A', [
      free('On dira que ces chiffres datent un peu. C’est vrai, mais la tendance n’a pas changé.', 'People will say these figures are a little old. True, but the trend has not changed.', 'un autre essai'),
    ], chk('Le passage A...', ['se fait une objection et la limite', 'illustre la thèse', 'élargit la question'], 0,
      'On dira que… C’est vrai, mais : objection, acceptation, limite. EN: objection, then limit.')),
    grp('Passage B', [
      free('Prenons la commune de Vauberge : en dix ans, ses pistes cyclables ont doublé.', 'Take the town of Vauberge: in ten years its cycle lanes have doubled.', 'un autre essai'),
    ], chk('Le passage B...', ['délimite l’objet', 'illustre par un cas', 'conclut'], 1,
      'Prenons : un cas qui rend la thèse concrète. EN: prenons introduces a case.')),
    ctl('Passage C', '« Qu’on ne s’y trompe pas : je ne demande pas la fin des voitures. » Ce passage...', ['élargit la thèse', 'écarte un contresens', 'pose le constat'], 1,
      'Il bloque une lecture trop forte de la thèse. EN: it blocks an overstated reading.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fonction'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre réponses qui décrivent au lieu de nommer',
  errors: [
    { wrong: 'Dans le paragraphe 3, l’auteur parle des visiteurs de Corvelle.', right: 'Dans le paragraphe 3, l’auteur illustre sa thèse par une expérience.',
      why: 'Normal : on répond par le contenu, qu’on vient de lire. Mais la question demande le rôle. EN: the question asks for the role, not the content.' },
    { wrong: 'Dans le paragraphe 4, l’auteur pense qu’un mois ne prouve rien.', right: 'Dans le paragraphe 4, l’auteur se fait une objection, l’accepte, puis en limite la portée.',
      why: '« Dira-t-on » donne la parole à un autre. L’attribuer à l’auteur, c’est le prendre pour l’autre camp. EN: dira-t-on voices someone else.' },
    { wrong: 'Le paragraphe 5 prouve qu’il faut garder les explications.', right: 'Le paragraphe 5 écarte un contresens sur la thèse.',
      why: 'Il ne prouve rien : il précise ce que l’auteur ne soutient pas. EN: it clarifies, it does not prove.' },
    { wrong: 'Dans le paragraphe 6, l’auteur donne son avis.', right: 'Dans le paragraphe 6, l’auteur élargit sa thèse à d’autres expériences que le musée.',
      why: 'C’est vrai de presque tout paragraphe, donc inutile. Nomme ce que fait celui-ci. EN: true of every paragraph, so useless.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['fonction'],
};

const A5_ANALYSE = pourTonAnalyse('a5-analyse', 'Tu dis ce que fait un passage, avec un verbe', [
  grp('Deux phrases d’analyse', [
    it(E(1883), 'un verbe de fonction'),
    free('Ensuite, il parle d’un musée.', 'Then he talks about a museum.', 'un contenu'),
  ], chk('Laquelle sert ton analyse ?', ['la première', 'la seconde'], 0,
    'Un verbe de fonction dit le rôle dans le raisonnement. EN: a function verb states the role.')),
  grp('La place de la thèse', [
    it(E(1885), 'écarter un contresens'),
    it(E(1889), 'la thèse'),
  ], chk('Où l’auteur dit-il sa thèse le plus exactement ?', ['dans le premier constat', 'dans le paragraphe qui écarte un contresens'], 1,
    'En disant ce qu’il ne soutient pas, il dit exactement ce qu’il soutient. EN: saying what he does not claim pins down what he does.')),
], ['fonction']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La question', '« Que fait l’auteur dans ce paragraphe ? » demande...', ['son sujet', 'son rôle dans le raisonnement'], 1,
    'Le rôle, avec un verbe. EN: the role, with a verb.'),
  ctl('On objectera', 'Un paragraphe qui commence par « On objectera que » donne d’abord la parole...', ['à l’auteur', 'à un contradicteur', 'à un témoin'], 1,
    'L’auteur se fait une objection avant de la limiter. EN: the writer voices an objection first.'),
  ctl('Le contresens', '« Il ne s’agit pas de supprimer les explications. » Ce passage...', ['écarte un contresens', 'illustre la thèse'], 0,
    'Il dit ce que l’auteur ne soutient pas. EN: it says what the writer does not claim.'),
], ['fonction']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Ce que fait un paragraphe',
    opener: {
      line: 'Un essai sur les musées change de rôle à chaque paragraphe : ici tu nommes ce que fait chacun. EN: An essay on museums changes job at every paragraph: here you name what each one does.',
      imageRef: 'lessons/lire-entre-les-lignes/act05.jpg',
    },
    sections: [],
    milestone: 'Tu nommes la fonction d’un paragraphe avec un verbe, sans résumer son contenu. EN: You can name what a paragraph does with a verb, without summarising its content.',
    estScreens: 34, restPoints: ['a5-fonctions', 'a5-associer'],
  },
  sections: [A5_ESSAI, A5_FONCTIONS, A5_CONSIGNES, A5_ASSOCIER, A5_ERREURS, A5_ANALYSE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L’ANALOGIE ET LA CHUTE
 *
 *  TEXT: a billet built on one analogy, its stated limit, and a closing line
 *  that turns the opening promise around. MOVE: find the one feature an
 *  analogy compares, where it breaks, and what the last sentence does.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_BILLET: Sec<'reading'> = {
  type: 'reading', id: 'a6-billet', layer: 'core', questionsInModal: true,
  title: 'La sonnette de poche', frSub: 'Une image, sa limite, une chute',
  text: NOTIF_TEXT,
  glossary: [
    { word: 'démarcheur', en: 'door-to-door salesman', note: 'Quelqu’un qui sonne chez les gens pour leur vendre quelque chose.' },
  ],
  questions: [
    { q: 'Devine le sens : « Elles interrompent d’abord ; elles informent ensuite, quand elles informent. » Que suggère la fin de la phrase ?', a: 'Que souvent, elles n’informent pas du tout : la restriction finale est une petite pique.' },
    { q: 'Qu’est-ce que l’analogie compare exactement ?', a: 'Le fait d’interrompre sans rien transmettre : une notification, comme une sonnette, exige qu’on réagisse avant de dire quoi que ce soit.' },
    { q: 'Quelle limite l’auteur reconnaît-il à son image ?', a: 'On peut faire taire ses applications en trois gestes, alors qu’on ne débranche pas une sonnette.' },
    { q: 'Que fait-il de cette limite ?', a: 'Il la retourne : si presque personne ne coupe les notifications, c’est qu’on a fini par désirer être interrompu.' },
    { q: 'Que fait la dernière phrase ?', a: 'Elle reprend la promesse du « monde entier dans la main » pour la retourner : on a surtout obtenu des visiteurs anonymes.' },
  ],
  audio: REC('rec-c1-20-notif'), say: REFRAME, terms: ['analogie', 'chute'],
};

const A6_ROLES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-roles', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-fonctions',
  title: 'Ce que fait une image, ce que fait une fin', frSub: 'L’analogie et la chute',
  hint: 'Quatre cartes. Cherche le trait que l’image garde.',
  audio: REC('rec-c1-20-roles'), say: REFRAME, terms: ['analogie', 'chute'],
  cards: [
    { head: 'Le trait comparé', label: 'ce que l’image garde', fr: src(E(1898)).fr, sub: rsOf(E(1898)),
      body: 'Une analogie choisit un seul trait. Ici : interrompre sans rien transmettre. Le bruit, la porte, le visiteur ne comptent pas. EN: the analogy keeps one feature only.' },
    { head: 'La limite de l’image', label: 'l’image a ses limites', fr: src(E(1900)).fr, sub: rsOf(E(1900)),
      body: 'Un bon essai dit où son image cesse de marcher, et peut même en tirer un argument de plus. EN: a good essay states where its image breaks.' },
    { head: 'La chute qui retourne', label: 'la dernière phrase', fr: src(E(1901)).fr, sub: rsOf(E(1901)),
      body: 'Elle reprend la promesse du début pour la retourner. Cherche dans la chute un mot qui fait écho à l’ouverture. EN: look for a word that echoes the opening.' },
    { head: 'Quatre chutes', label: 'résumer, retourner, ouvrir, ironiser', fr: src(E(1902)).fr, sub: rsOf(E(1902)),
      body: 'Une chute peut résumer la thèse, retourner une promesse, ouvrir une question ou ironiser. Elle n’ajoute presque jamais d’argument. EN: a closing line rarely adds an argument.' },
  ],
};

const A6_TESTER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-tester', layer: 'core', size: 'lg',
  title: 'Le trait et la fin', frSub: 'D’autres images, d’autres chutes',
  groups: [
    grp('Trois analogies', [
      it(E(1903), 'le CV'),
      it(E(1904), 'former'),
      it(E(1905), 'la réunion'),
    ], chk('Dans la première, le trait comparé est...', ['qu’on y montre ce qui doit attirer', 'qu’un CV est beau comme un tableau', 'qu’on le regarde longtemps'], 0,
      'Une vitrine expose pour séduire ; un portrait cherche la ressemblance. EN: a window displays to attract.')),
    grp('La limite', [
      it(E(1907), 'le point commun'),
      it(E(1908), 'la limite retournée'),
    ], chk('Un lecteur objecte qu’une notification ne fait aucun bruit. Son objection...', ['fait tomber l’analogie', 'ne touche pas le trait comparé'], 1,
      'Le trait comparé est l’interruption, pas le bruit. EN: the feature is interruption, not noise.')),
    grp('Trois chutes', [
      it(E(1910), 'chute A'),
      it(E(1911), 'chute B'),
      it(E(1912), 'chute C'),
    ], chk('La chute B...', ['résume la thèse', 'ouvre une question', 'ironise'], 1,
      '« Reste à savoir » laisse la question au lecteur. EN: reste à savoir hands the question over.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['analogie', 'chute'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de mal lire une image',
  errors: [
    { wrong: 'L’auteur affirme que le téléphone est une sonnette.', right: 'L’auteur compare un seul trait : interrompre sans rien transmettre.',
      why: 'Normal : l’image est forte, on la prend au mot. Mais une analogie ne dit jamais que deux choses sont identiques. EN: an analogy never claims identity.' },
    { wrong: 'L’auteur reconnaît que son analogie est fausse.', right: 'L’auteur reconnaît une limite à son image, puis la retourne en argument.',
      why: 'Dire la limite d’une image, ce n’est pas l’abandonner. EN: stating a limit is not giving up the image.' },
    { wrong: 'La dernière phrase résume le billet.', right: 'La dernière phrase retourne la promesse du début.',
      why: '« Le monde entier dans la main » reprend la « fenêtre ouverte sur le monde » du début : la chute renverse, elle ne résume pas. EN: it reverses, it does not sum up.' },
    { wrong: 'Selon l’auteur, il faut couper toutes les notifications.', right: 'L’auteur décrit ce que les notifications nous ont appris à désirer, sans rien prescrire.',
      why: 'Ajouter un conseil que le billet ne donne pas, c’est grossir sa portée. EN: adding advice inflates the scope.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['analogie', 'chute'],
};

const A6_ANALYSE = pourTonAnalyse('a6-analyse', 'Tu nommes le trait comparé et le rôle de la fin', [
  grp('Analyser l’image', [
    it(E(1907), 'le trait'),
    free('L’auteur dit que le téléphone est comme une sonnette.', 'The writer says the phone is like a doorbell.', 'une paraphrase'),
  ], chk('Laquelle sert ton analyse ?', ['la première', 'la seconde'], 0,
    'Nommer le trait comparé, c’est analyser l’image ; la répéter, non. EN: name the feature.')),
  grp('Analyser la fin', [
    it(E(1909), 'la chute nommée'),
  ], chk('Pour la chute du billet, tu écris...', ['« La fin est bien écrite. »', '« La chute retourne la promesse du début. »'], 1,
    'Un jugement de goût n’est pas une analyse. EN: a matter of taste is not analysis.')),
], ['analogie', 'chute']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('L’analogie', 'Une analogie compare...', ['deux choses en tout point', 'un trait choisi'], 1,
    'Un trait, jamais tout. EN: one feature, never everything.'),
  ctl('La limite', 'Un auteur écrit « l’image a ses limites ». Il...', ['abandonne son image', 'précise jusqu’où elle vaut', 'change de sujet'], 1,
    'Il borne son image, et la garde. EN: he bounds his image and keeps it.'),
  ctl('La chute', '« Reste à savoir qui acceptera de le payer. » Cette chute...', ['ouvre une question', 'résume la thèse'], 0,
    'Elle laisse la question au lecteur. EN: it hands the question to the reader.'),
], ['analogie', 'chute']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'L’analogie et la chute',
    opener: {
      line: 'Un billet compare les notifications à une sonnette : ici tu lis ce que font une image et une dernière phrase. EN: A billet compares notifications to a doorbell: here you read what an image and a last line do.',
      imageRef: 'lessons/lire-entre-les-lignes/act06.jpg',
    },
    sections: [],
    milestone: 'Tu nommes le trait qu’une analogie compare, sa limite, et ce que fait la dernière phrase. EN: You can name what an analogy compares, where it breaks, and what the last line does.',
    estScreens: 30, restPoints: ['a6-roles', 'a6-tester'],
  },
  sections: [A6_BILLET, A6_ROLES, A6_TESTER, A6_ERREURS, A6_ANALYSE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — L’AUTEUR FACE À SES SOURCES
 *
 *  TEXT: a teacher's tribune that treats a review, a child psychiatrist and
 *  the opposing camp in three different ways. MOVE: read the stance from
 *  the words around the quotation (s’appuyer, corriger un usage, donner
 *  raison et tort, accorder en partie, réfuter, retourner un camp). Goes
 *  past b2.24's reporting verbs: the question is what the writer DOES with
 *  the source, not how sure the journalist is.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_TRIBUNE: Sec<'reading'> = {
  type: 'reading', id: 'a7-tribune', layer: 'core', questionsInModal: true,
  title: 'Les devoirs et ce qu’on leur fait dire', frSub: 'Trois sources, trois traitements',
  text: DEVOIRS_TEXT,
  glossary: [
    { word: 'étude surveillée', en: 'supervised study period', note: 'Une heure où les élèves travaillent à l’école, avec un adulte.' },
  ],
  questions: [
    { q: 'Devine le sens : « Une synthèse lue jusqu’au bout, si. » Que veut dire ce « si » final ?', a: 'Il contredit la phrase négative d’avant : une synthèse lue en entier, elle, permet de répondre.' },
    { q: 'Que reproche l’auteure à ceux qui citent la synthèse ?', a: 'De lui faire dire que les devoirs ne servent à rien, alors qu’elle dit seulement que leur durée ne compte pas.' },
    { q: 'Quelle est sa posture envers les auteurs de la synthèse ?', a: 'Elle leur donne raison sur le mythe de la quantité, et donne tort à ceux qui les citent de travers.' },
    { q: 'Et envers Henri Vautrel ?', a: 'Elle accorde en partie son argument (l’inégalité devant les devoirs), mais en tire une autre conclusion : des devoirs faits à l’école.' },
    { q: 'Pourquoi citer « même les défenseurs les plus fervents » ?', a: 'Pour montrer que le camp d’en face reconnaît lui aussi que tout dépend de ce qu’on demande.' },
  ],
  audio: REC('rec-c1-20-devoirs'), say: REFRAME, terms: ['posture'],
};

const A7_POSTURES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a7-postures', layer: 'core', sheetId: 'sheet-voix',
  title: 'Six façons de traiter une source',
  cols: ['Posture', 'Signal', 'Ce qu’elle fait'],
  rows: [
    { cells: ['s’appuyer', 'comme le montre', 'reprend la source'], say: src(E(1920)).fr,
      detail: { title: 'S’appuyer', body: 'L’auteur prend la source à son compte : ce qu’elle dit devient un argument du texte. EN: the source becomes the writer’s own argument.', say: 'Comme l’a montré la synthèse, vingt minutes suffisent.' } },
    { cells: ['corriger un usage', 'dit en réalité', 'défend la source'], say: src(E(1914)).fr,
      detail: { title: 'Corriger un usage', body: 'La source a raison ; ceux qui la citent la trahissent. L’auteur la relit pour la rétablir. EN: the source is right; its quoters are wrong.', say: src(E(1921)).fr } },
    { cells: ['donner raison et tort', 'a raison de, a tort de', 'partage le verdict'], say: src(E(1915)).fr,
      detail: { title: 'Donner raison et tort', body: 'Un seul geste, deux verdicts : sur un point la source a raison, sur un autre non. EN: one move, two verdicts.', say: src(E(1925)).fr } },
    { cells: ['accorder en partie', 'l’argument est sérieux, mais', 'déplace la conclusion'], say: src(E(1916)).fr,
      detail: { title: 'Accorder en partie', body: 'C’est la concession appliquée à une source : l’argument est accepté, sa conclusion est déplacée. EN: concession applied to a source.', say: src(E(1917)).fr } },
    { cells: ['réfuter', 'c’est aller vite', 'rejette la source'], say: src(E(1919)).fr,
      detail: { title: 'Réfuter', body: 'L’auteur conteste la source elle-même, souvent par une formule polie qui cache un désaccord net. EN: a polite formula for a clear rejection.', say: 'Rien, dans l’enquête, ne permet de l’affirmer.' } },
    { cells: ['retourner un camp', 'même… reconnaît', 'fait parler l’adversaire'], say: src(E(1918)).fr,
      detail: { title: 'Retourner un camp', body: 'L’argument le plus fort vient d’en face : si même l’adversaire l’admet, le point est acquis. EN: the strongest support comes from the other side.', say: src(E(1927)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['posture'],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-trier', layer: 'core', size: 'lg',
  title: 'Quelle posture ?', frSub: 'Des phrases d’autres essais',
  groups: [
    grp('Phrase A', [
      free('Comme l’a établi l’enquête de l’Observatoire Hestia, le bruit nuit au sommeil des enfants.', 'As the Hestia Observatory survey established, noise harms children’s sleep.', 'un autre essai'),
    ], chk('Dans la phrase A, l’auteur...', ['s’appuie sur la source', 'la réfute', 'la corrige'], 0,
      'Comme l’a établi : la source est prise à son compte. EN: the source is taken on board.')),
    grp('Phrase B', [
      free('Le rapport a raison de pointer le coût ; il a tort d’en faire le seul critère.', 'The report is right to point out the cost; it is wrong to make it the only criterion.', 'un autre essai'),
    ], chk('Dans la phrase B, l’auteur...', ['réfute le rapport', 'lui donne raison sur un point et tort sur un autre'], 1,
      'A raison de… a tort de… : deux verdicts. EN: two verdicts.')),
    ctl('Phrase C', '« Même la fédération des commerçants admet que la rue piétonne attire du monde. » L’auteur...', ['cite l’autre camp à l’appui de sa thèse', 'se range du côté des commerçants', 'réfute la fédération'], 0,
      'Même… admet : l’adversaire devient témoin. EN: the opponent becomes a witness.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['posture'],
};

/** `hideLines`: the questions are about what the ear caught. */
const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a7-ecoute', layer: 'core', hideLines: true,
  title: 'La chronique santé', frSub: 'Une chroniqueuse et ses sources',
  lines: [ln(E(1922)), ln(E(1923)), ln(E(1924)), ln(E(1925)), ln(E(1926)), ln(E(1927)), ln(E(1928)), ln(E(1929))],
  questions: [
    { q: 'Que mesure vraiment l’étude ?', opts: ['la durée de vie', 'la fatigue en fin de journée', 'le nombre de pauses'], correct: 1, why: 'La chroniqueuse corrige l’usage qu’on en a fait. EN: she corrects how the study was used.' },
    { q: 'Que pense-t-elle des auteurs de l’étude ?', opts: ['qu’ils ont raison sur un point et tort sur un autre', 'qu’ils mentent'], correct: 0, why: 'Raison sur la sédentarité, tort sur le mot « révolution ». EN: right on one point, wrong on another.' },
    { q: 'Pourquoi cite-t-elle le fabricant ?', opts: ['parce qu’il a payé la chronique', 'pour lui faire de la publicité', 'parce que même lui, intéressé, reste prudent'], correct: 2, why: 'Même un intéressé ne va pas aussi loin que les titres. EN: even an interested party is cautious.' },
    { q: 'Que fait le kinésithérapeute ?', opts: ['il ajoute une limite : rester debout fatigue aussi', 'il confirme les titres'], correct: 0, why: 'Il va plus loin dans la nuance. EN: he adds a further limit.' },
    { q: 'Que conseille la chute ?', opts: ['de travailler debout toute la journée', 'de se lever de temps en temps', 'de jeter sa chaise'], correct: 1, why: 'Une conclusion à sa portée exacte, avec humour. EN: a scoped conclusion, with humour.' },
  ],
  audio: REC('rec-c1-20-chronique-sante'), say: REFRAME, terms: ['posture'],
};

const A7_ANALYSE = pourTonAnalyse('a7-analyse', 'Tu dis ce que l’auteur fait de sa source', [
  grp('Deux phrases d’analyse', [
    it(E(1914), 'corriger un usage'),
    free('L’auteure cite une étude.', 'The writer quotes a study.', 'un constat sans posture'),
  ], chk('Laquelle nomme une posture ?', ['la première', 'la seconde'], 0,
    'Citer n’est pas une posture ; corriger un usage, oui. EN: quoting is not a stance.')),
  grp('Accorder en partie', [
    it(E(1916), 'le geste'),
    it(E(1917), 'la conclusion déplacée'),
  ], chk('Envers Henri Vautrel, l’auteure...', ['le réfute entièrement', 'accorde l’argument et déplace la conclusion'], 1,
    'Elle partage le constat d’inégalité, pas la suppression. EN: she shares the diagnosis, not the remedy.')),
], ['posture']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Comme le montre', '« Comme le montre la synthèse » : l’auteur...', ['s’appuie sur la source', 'prend ses distances'], 0,
    'La source devient un argument. EN: the source becomes an argument.'),
  ctl('Raison et tort', '« Ils ont raison de…, on a tort de… » : l’auteur...', ['réfute la source', 'partage son jugement entre deux points', 'cite l’autre camp'], 1,
    'Deux verdicts en une phrase. EN: two verdicts in one sentence.'),
  ctl('Même', '« Même les défenseurs des devoirs le reconnaissent. » Pourquoi ?', ['pour changer de sujet', 'pour s’appuyer sur l’autre camp'], 1,
    'L’adversaire qui admet un point le rend acquis. EN: an opponent’s admission settles the point.'),
], ['posture']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'L’auteur et ses sources',
    opener: {
      line: 'Une enseignante cite trois sources, chacune autrement : ici tu lis ce qu’un auteur fait de ses sources. EN: A teacher quotes three sources, each differently: here you read what a writer does with sources.',
      imageRef: 'lessons/lire-entre-les-lignes/act07.jpg',
    },
    sections: [],
    milestone: 'Tu dis si un auteur s’appuie sur une source, la corrige, l’accorde en partie ou la réfute. EN: You can tell whether a writer relies on, corrects, partly grants or refutes a source.',
    estScreens: 30, restPoints: ['a7-postures', 'a7-ecoute'],
  },
  sections: [A7_TRIBUNE, A7_POSTURES, A7_TRIER, A7_ECOUTE, A7_ANALYSE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE PRÉSUPPOSÉ
 *
 *  TEXT: an essay about a question that answers itself (« Pourquoi les jeunes
 *  ne lisent-ils plus ? »). MOVE: spot what the GRAMMAR takes for granted
 *  (definite article, ne… plus, cesser de, encore, aussi, factive verbs, the
 *  presupposing question), test it by negation, and keep it apart from the
 *  sous-entendu (b2.24's « présupposé », the assumption an argument needs).
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ESSAI: Sec<'reading'> = {
  type: 'reading', id: 'a8-essai', layer: 'core', questionsInModal: true,
  title: 'La question qui répond d’avance', frSub: 'Ce qu’elle affirme avant qu’on réponde',
  text: QUESTION_TEXT,
  glossary: [
    { word: 'fil de commentaires', en: 'comment thread', note: 'La suite des commentaires sous un message en ligne.' },
  ],
  questions: [
    { q: 'Devine le sens : « Une question bien posée ne contient pas sa réponse. » Que reproche l’auteur à la question du titre ?', a: 'Elle contient déjà sa réponse : la poser, c’est affirmer que les jeunes ne lisent pas et qu’ils lisaient autrefois.' },
    { q: 'Quelles deux idées la question tient-elle pour acquises ?', a: 'Que les jeunes ne lisent pas, et qu’ils lisaient autrefois.' },
    { q: 'Quel mot porte l’idée d’un âge d’or ?', a: 'Le petit mot « plus », dans « ne lisent-ils plus » : il suppose qu’ils lisaient avant.' },
    { q: 'Que présuppose « On regrette que les jeunes aient cessé de lire » ?', a: 'La même chose, deux fois : « regretter que » tient le fait pour vrai, et « cesser de » suppose qu’ils lisaient.' },
    { q: 'L’auteur affirme-t-il que les jeunes lisent autant qu’avant ?', a: 'Non : il reconnaît que la part des lecteurs de romans baisse un peu, et que le roman long exerce une attention particulière. Il refuse la question telle qu’elle est posée.' },
  ],
  audio: REC('rec-c1-20-question'), say: REFRAME, terms: ['presuppose'],
};

const A8_DECLENCHEURS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a8-declencheurs', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-implicite',
  title: 'Les mots qui posent sans affirmer', frSub: 'Le présupposé',
  hint: 'Quatre cartes. Cherche ce qui reste vrai si l’on met la phrase à la négation.',
  audio: REC('rec-c1-20-declencheurs'), say: REFRAME, terms: ['presuppose'],
  cards: [
    { head: 'L’article défini', label: 'la crise, le retour, le déclin', fr: src(E(1933)).fr, sub: rsOf(E(1933)),
      body: '« La crise de la lecture » pose qu’il y a une crise ; « une crise » la proposerait seulement. Le défini fait passer l’existence pour acquise. EN: the definite article takes existence for granted.' },
    { head: 'Le changement d’état', label: 'ne… plus, cesser de, encore, aussi', fr: src(E(1934)).fr, sub: rsOf(E(1934)),
      body: 'Cesser de lire, c’est avoir lu ; « encore » suppose une fois précédente ; « aussi », un autre cas. EN: these words presuppose an earlier state or another case.' },
    { head: 'Le verbe factif', label: 'regretter, savoir, découvrir que', fr: src(E(1935)).fr, sub: rsOf(E(1935)),
      body: '« Regretter que » tient le fait pour vrai ; « croire que » ou « prétendre que », non. La nuance décide de ce que l’auteur affirme. EN: factive verbs take their clause as true; croire does not.' },
    { head: 'La question qui présuppose', label: 'pourquoi, depuis quand', fr: src(E(1931)).fr, sub: rsOf(E(1931)),
      body: 'Répondre à « pourquoi », c’est accepter le fait. Un lecteur C1 peut refuser la question elle-même. EN: answering a why-question accepts its premise.' },
  ],
};

const A8_TEST: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-test', layer: 'core', size: 'lg',
  title: 'Le test de la négation', frSub: 'Présupposé ou sous-entendu',
  groups: [
    grp('Cesser de', [
      it(E(1939), 'la phrase'),
      free('La ville n’a pas cessé de financer le festival.', 'The town has not stopped funding the festival.', 'sa négation'),
    ], chk('Qu’est-ce qui reste vrai dans les deux phrases ?', ['que la ville finançait le festival', 'que le festival est annulé', 'rien'], 0,
      'Le présupposé survit à la négation. EN: the presupposition survives negation.')),
    grp('Savoir ou croire', [
      it(E(1940), 'un verbe factif'),
      free('Elle ne croit pas que le musée soit fermé.', 'She does not believe the museum is closed.', 'un verbe qui ne l’est pas'),
    ], chk('Dans quelle phrase le musée est-il fermé, pour celui qui parle ?', ['dans la première', 'dans la seconde'], 0,
      '« Savoir » tient le fait pour vrai ; « croire », non. EN: savoir is factive, croire is not.')),
    ctl('Le sous-entendu', '« Il est déjà 22 heures », dit à un invité. L’idée « tu devrais partir »...', ['est un présupposé', 'est un sous-entendu, qu’on peut démentir'], 1,
      'On peut répondre « je ne disais pas ça pour toi » : l’idée n’est pas dans la grammaire. EN: it can be denied, so it is only implied.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['presuppose'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six lectures qui avalent le présupposé',
  rule: {
    title: 'Répondre, c’est accepter',
    body: 'Un présupposé passe sans être discuté : il n’est pas affirmé, il est posé. Repère le mot qui le porte, et demande si le fait est vrai avant de répondre. EN: spot the word that carries it, and check the fact before answering.',
  },
  cards: [
    { promptLabel: 'la question en pourquoi', promptSound: 'La question demande si les jeunes lisent encore.', fr: src(E(1931)).fr, ipa: ipaOf(E(1931)), tip: 'Elle ne le demande pas : elle tient pour acquis qu’ils ne lisent plus. EN: it takes it for granted.' },
    { promptLabel: 'le verbe factif', promptSound: 'Le directeur se demande si l’objectif a été manqué.', fr: src(E(1945)).fr, ipa: ipaOf(E(1945)), tip: '« Regretter que » tient le fait pour vrai. EN: regretter takes the fact as true.' },
    { promptLabel: 'encore', promptSound: 'Le chantier prend du retard pour la première fois.', fr: src(E(1938)).fr, ipa: ipaOf(E(1938)), tip: '« Encore » suppose un retard précédent. EN: encore presupposes an earlier delay.' },
    { promptLabel: 'cesser de', promptSound: 'La ville n’a jamais financé le festival.', fr: src(E(1939)).fr, ipa: ipaOf(E(1939)), tip: 'Cesser de financer, c’est avoir financé. EN: to stop funding is to have funded.' },
    { promptLabel: 'savoir que', promptSound: 'Le musée est peut-être ouvert.', fr: src(E(1940)).fr, ipa: ipaOf(E(1940)), tip: 'Même nié, « savoir » garde le fait : le musée est fermé. EN: savoir keeps the fact even when negated.' },
    { promptLabel: 'aussi', promptSound: 'Elle est la seule à avoir démissionné.', fr: src(E(1941)).fr, ipa: ipaOf(E(1941)), tip: '« Aussi » suppose qu’une autre personne l’a fait. EN: aussi presupposes someone else did.' },
  ],
  drill: [
    { promptSay: '« Il a cessé de pleuvoir » présuppose qu’il ... .', opts: ['pleuvait', 'pleuvra'], correct: 0 },
    { promptSay: '« Elle regrette que le train soit parti » : le train est ... .', opts: ['peut-être parti', 'vraiment parti'], correct: 1 },
    { promptSay: '« Elle croit que le train est parti » : le train est ... .', opts: ['peut-être parti', 'vraiment parti'], correct: 0 },
    { promptSay: '« La baisse des ventes inquiète » présuppose qu’il y a eu une ... .', opts: ['hausse', 'baisse', 'enquête'], correct: 1 },
    { promptSay: '« Il a encore oublié ses clés » : il les avait ... oubliées.', opts: ['jamais', 'déjà'], correct: 1 },
    { promptSay: 'Le présupposé survit à la ... .', opts: ['négation', 'traduction'], correct: 0 },
    { promptSay: 'Le sous-entendu, lui, peut se ... .', opts: ['conjuguer', 'démentir'], correct: 1 },
    { promptSay: '« Pourquoi le projet a-t-il échoué ? » tient pour acquis que le projet a ... .', opts: ['réussi', 'échoué', 'commencé hier'], correct: 1 },
  ],
  steps: STEPS_STD('Ce qu’un lecteur pressé a accepté', 'Écoute les six phrases', 'Huit phrases'),
  audio: REC('rec-c1-20-piege-presuppose'), say: REFRAME, terms: ['presuppose'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a8-dictee', layer: 'core',
  title: 'Écris ce que la phrase tient pour acquis',
  itemIds: dicteeFor(8),
  audio: AUDIO, say: REFRAME, terms: ['presuppose'],
};

const A8_ANALYSE = pourTonAnalyse('a8-analyse', 'Tu nommes le présupposé, et le mot qui le porte', [
  grp('Deux phrases d’analyse', [
    it(E(1937), 'nommer le présupposé'),
    free('L’auteur pose une question sur la lecture.', 'The writer asks a question about reading.', 'une paraphrase'),
  ], chk('Laquelle sert ton analyse ?', ['la première', 'la seconde'], 0,
    'La première dit ce que la question tient pour acquis. EN: the first names what the question takes for granted.')),
  grp('Une question d’un autre essai', [
    it('fr.c1.rhetorique.113', 'une question qui présuppose'),
  ], chk('Dans cette question, « aucun… encore » tient pour acquis...', ['qu’on s’attendait à ce que les voisins l’adoptent', 'que les voisins l’ont déjà adoptée'], 0,
    '« Pas encore » suppose une adoption attendue, et pousse à douter de la mesure. EN: not yet presupposes an expected adoption.')),
], ['presuppose']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le défini', '« La crise de la lecture » présuppose...', ['qu’il existe une crise', 'que la lecture progresse'], 0,
    'Le défini pose l’existence. EN: the definite article posits existence.'),
  ctl('Le test', 'Pour savoir si une idée est présupposée, tu...', ['cherches un chiffre', 'mets la phrase à la négation', 'relis le titre'], 1,
    'Le présupposé survit à la négation. EN: it survives negation.'),
  ctl('Factif', 'Quel verbe tient la proposition qui suit pour vraie ?', ['prétendre que', 'découvrir que'], 1,
    'Découvrir, savoir, regretter : factifs. Prétendre, croire : non. EN: découvrir is factive.'),
], ['presuppose']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le présupposé',
    opener: {
      line: 'Une question a déjà répondu avant qu’on l’ouvre : ici tu repères ce que la grammaire tient pour acquis. EN: A question has answered itself before you open it: here you spot what the grammar takes for granted.',
      imageRef: 'lessons/lire-entre-les-lignes/act08.jpg',
    },
    sections: [],
    milestone: 'Tu repères le mot qui porte un présupposé et tu le vérifies avant de répondre. EN: You can spot the word that carries a presupposition and check it before answering.',
    estScreens: 36, restPoints: ['a8-declencheurs', 'a8-piege'],
  },
  sections: [A8_ESSAI, A8_DECLENCHEURS, A8_TEST, A8_PIEGE, A8_DICTEE, A8_ANALYSE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — L’IRONIE AU C1
 *
 *  TEXT: a billet whose irony is all echo, with one sincere line at the end.
 *  MOVE: echo irony, impossible praise, mock modesty, feigned indulgence;
 *  irony as a TOPIC (a listening about irony, with none); and the rule that
 *  governs all of it: no textual cue, no irony. Built from the text alone:
 *  no French political culture is needed to see any of it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_BILLET: Sec<'reading'> = {
  type: 'reading', id: 'a9-billet', layer: 'core', questionsInModal: true,
  title: 'Le pôle expérience', frSub: 'Une note, une soirée au téléphone',
  text: POLE_TEXT,
  glossary: [
    { word: 'file d’attente', en: 'queue', note: 'La file où l’on attend son tour.' },
  ],
  questions: [
    { q: 'Devine le sens : « J’ai donc appelé, en adhérente centrée. » D’où vient le mot « centrée » ?', a: 'De la note de la direction (« centré sur l’adhérent ») : l’auteure le reprend pour le faire entendre creux.' },
    { q: 'Comment sait-on que « tout le loisir d’apprécier » la musique est ironique ?', a: 'Par la situation : quarante minutes d’attente. L’éloge est contredit par le récit.' },
    { q: 'Que fait la phrase « Je ne voudrais pas paraître ingrate » ?', a: 'C’est une fausse modestie : elle feint de se reprocher une critique qu’elle maintient.' },
    { q: 'Le « vocabulaire en avance sur les faits » est-il une excuse ?', a: 'C’est une feinte indulgence : l’excuse dit, poliment, que le mot ne correspond encore à rien.' },
    { q: 'La phrase de la conseillère est-elle ironique ?', a: 'Non : rien ne la contredit, et l’auteure dit qu’elle lui a servi. C’est la seule phrase sincère de la soirée.' },
  ],
  audio: REC('rec-c1-20-pole'), say: REFRAME, terms: ['ironie'],
};

const A9_SIGNAUX: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-signaux', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-voix',
  title: 'Quatre signaux, une règle', frSub: 'L’ironie au C1',
  hint: 'Quatre cartes. Pour chaque phrase, cherche l’indice.',
  audio: REC('rec-c1-20-signaux'), say: REFRAME, terms: ['ironie'],
  cards: [
    { head: 'L’écho', label: 'reprendre les mots de l’autre', fr: src(E(1946)).fr, sub: rsOf(E(1946)),
      body: `${Cap(CRITIQUE_REF)} repérait le mot de l’autre entre guillemets. Ici, pas de guillemets : « centrée » vient de la note, et il est déplacé. C’est l’indice. EN: echo irony with no quotation marks; the borrowed word is the cue.` },
    { head: 'L’éloge impossible', label: 'l’antiphrase et son indice', fr: src(E(1947)).fr, sub: rsOf(E(1947)),
      body: 'L’antiphrase est un acquis du B2. Au C1, cite l’indice : quarante minutes d’attente. Sans elles, la phrase serait sincère. EN: antiphrasis is known; at C1, quote the cue that proves it.' },
    { head: 'La fausse modestie', label: 'je ne voudrais pas paraître', fr: src(E(1948)).fr, sub: rsOf(E(1948)),
      body: 'On feint de se reprocher ce qu’on reproche à l’autre. La critique reste entière, sous une forme polie. EN: feigned self-reproach keeps the criticism intact.' },
    { head: 'Pas d’indice, pas d’ironie', label: 'la règle', fr: src(E(1949)).fr, sub: rsOf(E(1949)),
      body: 'Une phrase n’est ironique que si le texte la contredit. Sinon, lis-la au premier degré, comme la phrase de la conseillère. EN: no contradicting cue, no irony.' },
  ],
};

const A9_DEGRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-degre', layer: 'core', size: 'lg',
  title: 'Premier ou second degré ?', frSub: 'Cherche l’indice',
  groups: [
    grp('Dans le billet', [
      it(E(1951), 'la promesse tenue'),
      it(E(1952), 'l’excuse'),
      it(E(1955), 'la conseillère'),
    ], chk('Laquelle de ces trois phrases se lit au premier degré ?', ['la troisième', 'la première', 'la deuxième'], 0,
      'Rien ne contredit la phrase de la conseillère : elle est sincère. EN: nothing contradicts it.')),
    grp('Dans d’autres textes', [
      free('Merci pour ce délai de six mois, il nous a laissé tout le temps de réfléchir.', 'Thank you for this six-month delay, it gave us all the time in the world to think.', 'texte A'),
      free('Merci pour votre réponse rapide : nous avons pu ouvrir à temps.', 'Thank you for your quick reply: we were able to open on time.', 'texte B'),
    ], chk('Lequel est ironique ?', ['le texte A, parce que six mois contredisent le remerciement', 'le texte B, parce qu’un merci est toujours ironique'], 0,
      'L’indice est dans la phrase : six mois de délai. EN: the cue is in the sentence.')),
    ctl('L’indice', 'Pour affirmer qu’une phrase est ironique, il te faut...', ['une impression', 'un élément du texte qui la contredit', 'un point d’exclamation'], 1,
      'Pas d’indice, pas d’ironie. EN: no cue, no irony.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ironie'],
};

/** IRONY AS A TOPIC. `hideLines`: the questions are about what the ear caught. */
const A9_SUJET: Sec<'listening'> = {
  type: 'listening', id: 'a9-sujet', layer: 'core', hideLines: true,
  title: 'L’ironie à l’écrit', frSub: 'Une chronique sur l’ironie, sans ironie',
  lines: [ln(E(1958)), ln(E(1957)), ln(E(1959)), ln(E(1960)), ln(E(1961)), ln(E(1962)), ln(E(1963)), ln(E(1964))],
  questions: [
    { q: 'Quelle est la thèse du chroniqueur ?', opts: ['l’ironie est cruelle', 'à l’écrit, l’ironie doit laisser un indice dans les mots', 'il faut éviter l’ironie au travail'], correct: 1, why: 'Sans la voix, seuls les mots peuvent porter l’écart. EN: in writing, only words can carry it.' },
    { q: 'De quoi dépend la lecture d’un « Merci pour ta rapidité » ?', opts: ['de ce que le collègue sait déjà', 'de la longueur du message'], correct: 0, why: 'Le contexte partagé décide. EN: shared context decides.' },
    { q: 'Que pense-t-il du petit visage qui cligne de l’œil ?', opts: ['qu’il est ridicule', 'qu’il remplace bien la voix', 'qu’il avoue que la phrase seule ne suffisait pas'], correct: 2, why: 'Il ne s’en moque pas : il y voit un aveu. EN: he reads it as an admission.' },
    { q: 'Que font les bons ironistes ?', opts: ['ils laissent un détail qui contredit l’éloge', 'ils ajoutent des guillemets'], correct: 0, why: 'Le détail est l’indice que le lecteur trouve. EN: the detail is the cue.' },
    { q: 'Le chroniqueur est-il lui-même ironique ?', opts: ['oui, d’un bout à l’autre', 'non : il parle de l’ironie sans en faire'], correct: 1, why: 'L’ironie est ici le sujet, pas le procédé. EN: irony is the topic here, not the device.' },
  ],
  audio: REC('rec-c1-20-ironie-ecrit'), say: REFRAME, terms: ['ironie'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de rater l’ironie',
  errors: [
    { wrong: 'L’auteure trouve l’expérience réussie : « c’en fut une ».', right: 'L’auteure reprend le mot « expérience » pour dire que la soirée fut pénible.',
      why: 'Normal : la phrase est positive. Mais tout le billet la contredit. EN: the whole text contradicts it.' },
    { wrong: 'L’auteure présente un « pôle expérience » innovant.', right: 'L’auteure cite le mot de la direction pour s’en moquer.',
      why: 'Le mot n’est pas le sien : c’est un écho. Le reprendre à son compte, c’est rater l’ironie. EN: it is an echo, not her word.' },
    { wrong: 'Même la conseillère se moque de la mutuelle.', right: 'La conseillère donne un conseil sincère, le seul utile de la soirée.',
      why: 'Voir de l’ironie partout est l’autre erreur : rien ne contredit sa phrase. EN: seeing irony everywhere is the other mistake.' },
    { wrong: 'L’auteure s’excuse d’être ingrate.', right: 'L’auteure feint de s’excuser pour mieux maintenir sa critique.',
      why: 'La fausse modestie garde la critique entière. EN: mock modesty keeps the criticism whole.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['ironie'],
};

const A9_ANALYSE = pourTonAnalyse('a9-analyse', 'Tu nommes l’ironie, et tu cites l’indice', [
  grp('Deux phrases d’analyse', [
    it(E(1953), 'nommer l’écho'),
    it(E(1954), 'citer l’indice'),
  ], chk('Que doit contenir une analyse de l’ironie ?', ['ton impression sur le ton', 'le procédé et l’indice qui le prouve'], 1,
    'Le procédé, puis l’indice : sinon, ce n’est qu’une impression. EN: name the device, then the cue.')),
  grp('Ne pas en voir partout', [
    it(E(1955), 'la phrase sincère'),
  ], chk('Dans ton analyse, la phrase de la conseillère...', ['montre le seul moment sincère du billet', 'est un exemple d’ironie'], 0,
    'Elle sert de contraste : c’est la seule phrase sans un mot de la note. EN: it is the sincere contrast.')),
], ['ironie']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’écho', 'L’ironie par écho consiste à...', ['dire le contraire de ce qu’on pense', 'reprendre les mots d’un autre pour les vider'], 1,
    'Les mots viennent d’ailleurs, et sonnent creux. EN: the words come from elsewhere and ring hollow.'),
  ctl('L’indice', 'Une phrase élogieuse est ironique si...', ['le texte la contredit', 'elle est longue', 'elle contient un adjectif'], 0,
    'Pas d’indice, pas d’ironie. EN: no cue, no irony.'),
  ctl('Le sujet', 'Un essai qui explique comment marche l’ironie est...', ['forcément ironique', 'un texte sur l’ironie, qui peut être tout à fait sérieux'], 1,
    'Parler de l’ironie n’est pas en faire. EN: discussing irony is not using it.'),
], ['ironie']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'L’ironie au C1',
    opener: {
      line: 'Une adhérente remercie sa mutuelle pour une soirée au téléphone : ici tu prouves l’ironie par un indice du texte. EN: A member thanks her insurer for an evening on the phone: here you prove irony with a cue from the text.',
      imageRef: 'lessons/lire-entre-les-lignes/act09.jpg',
    },
    sections: [],
    milestone: 'Tu repères l’écho, l’éloge impossible et la fausse modestie, et tu ne vois pas d’ironie sans indice. EN: You can spot echo, impossible praise and mock modesty, and see no irony without a cue.',
    estScreens: 34, restPoints: ['a9-signaux', 'a9-sujet'],
  },
  sections: [A9_BILLET, A9_SIGNAUX, A9_DEGRE, A9_SUJET, A9_ERREURS, A9_ANALYSE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — L’AGENT CACHÉ
 *
 *  TEXT: a chronicle that reads a school email for the agent it hides.
 *  MOVE: the agentless passive, the nominalisation, on, impersonal il, the
 *  abstract subject and the pronominal passive turn a decision into an
 *  event; ask « par qui ? » and describe the EFFECT, never the intent.
 *  The forms belong to b1.18 and b2.10; only the reading is new.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_CHRONIQUE: Sec<'reading'> = {
  type: 'reading', id: 'a10-chronique', layer: 'core', questionsInModal: true,
  title: 'Un courriel sans sujet', frSub: 'Qui a décidé ?',
  text: SORTIES_TEXT,
  glossary: [
    { word: 'malice', en: 'ill intent', note: 'Une intention de nuire ou de tromper.' },
  ],
  questions: [
    { q: 'Devine le sens : « Les sorties sont suspendues comme on dit qu’il pleut. » Que veut dire la comparaison ?', a: 'Que la suspension est présentée comme un phénomène naturel, sans responsable, alors que quelqu’un l’a décidée.' },
    { q: 'Relève les trois procédés qui cachent l’agent dans le courriel.', a: 'Le passif sans agent (« sont suspendues »), la nominalisation au passif (« une réévaluation a été effectuée »), le « il » impersonnel (« il a été jugé préférable »).' },
    { q: 'Quel est le seul sujet en chair et en os, et quand apparaît-il ?', a: '« Nous », à la fin seulement, pour demander la compréhension des parents.' },
    { q: 'L’auteure accuse-t-elle le rédacteur de mentir ?', a: 'Non : elle concède qu’il n’a sans doute rien voulu cacher. Elle critique l’effet du style, pas l’intention.' },
    { q: 'Que change la phrase réécrite avec un sujet ?', a: 'Elle transforme l’événement en décision : les parents savent à qui écrire et quel choix discuter.' },
  ],
  audio: REC('rec-c1-20-sorties'), say: REFRAME, terms: ['agent'],
};

const A10_PROCEDES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-procedes', layer: 'core', sheetId: 'sheet-implicite',
  title: 'Six façons de cacher qui agit',
  cols: ['Procédé', 'Exemple', 'Question à poser'],
  rows: [
    { cells: ['le passif sans agent', 'sont suspendues', 'par qui ?'], say: src(E(1967)).fr,
      detail: { title: 'Le passif sans agent', body: `${Cap(PASSIF_REF)} t’a donné la forme. Ici, lis ce qui manque : le complément d’agent. EN: the form is known; read what is missing.`, say: src(E(1973)).fr } },
    { cells: ['la nominalisation', 'une réévaluation', 'qui a réévalué ?'], say: src(E(1968)).fr,
      detail: { title: 'La nominalisation', body: `${Cap(NOMINALISATION_REF)} disait : « ${B210_REFRAME} » En condensant, le nom efface aussi le sujet. EN: the noun condenses, and drops the subject.`, say: src(E(1977)).fr } },
    { cells: ['le il impersonnel', 'il a été jugé', 'jugé par qui ?'], say: src(E(1969)).fr,
      detail: { title: 'Le il impersonnel', body: 'Le « il » ne désigne personne : le jugement semble se rendre tout seul. EN: impersonal il refers to no one.', say: 'Il a été décidé de reporter la réunion.' } },
    { cells: ['on', 'on a décidé', 'qui est ce on ?'], say: src(E(1976)).fr,
      detail: { title: 'On', body: '« On » peut être nous, eux ou tout le monde : il dilue la responsabilité. EN: on dilutes responsibility.', say: 'On nous a dit que le dossier était complet.' } },
    { cells: ['le sujet abstrait', 'la situation impose', 'qui choisit ?'], say: src(E(1975)).fr,
      detail: { title: 'Le sujet abstrait', body: 'Une situation, un contexte, une conjoncture deviennent sujets : des choses décident à la place des gens. EN: abstract subjects make things decide.', say: 'Le contexte budgétaire impose des choix.' } },
    { cells: ['le pronominal passif', 'la décision s’est prise', 'prise par qui ?'], say: src(E(1978)).fr,
      detail: { title: 'Le pronominal passif', body: 'La décision « s’est prise » : elle semble s’être faite d’elle-même. EN: the decision seems to have made itself.', say: 'Les choses se sont décidées très vite.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['agent'],
};

const A10_RETROUVER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-retrouver', layer: 'core', size: 'lg',
  title: 'Retrouve l’agent', frSub: 'Qui a fait quoi ?',
  groups: [
    grp('Trois phrases sans sujet', [
      it(E(1975), 'un sujet abstrait'),
      it(E(1976), 'on'),
      it(E(1977), 'une nominalisation'),
    ], chk('Dans ces trois phrases, ce qui manque, c’est...', ['qui a décidé', 'quand', 'pourquoi'], 0,
      'L’action est là ; la personne qui agit a disparu. EN: the action is there; the actor is gone.')),
    grp('La phrase rendue à son sujet', [
      it(E(1970), 'avec un sujet'),
      it(E(1967), 'sans sujet'),
    ], chk('Laquelle donne aux parents quelqu’un à qui écrire ?', ['la première', 'la seconde'], 0,
      'Le conseil d’établissement devient responsable, donc interpellable. EN: the board becomes answerable.')),
    ctl('L’intention', 'Un texte cache l’agent. Tu peux écrire...', ['que l’auteur ment', 'que la tournure fait disparaître le responsable, voulu ou non'], 1,
      'On décrit l’effet du style ; l’intention, on ne la connaît pas. EN: describe the effect, not the intent.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['agent'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true,
  title: 'Six phrases où personne ne décide',
  rule: {
    title: 'Un événement se subit, une décision se discute',
    body: 'Le passif, le nom et « il » transforment une décision en événement. Ne reprends pas la tournure dans ton analyse : demande par qui, et écris-le. EN: do not echo the agentless phrasing; ask by whom and say so.',
  },
  cards: [
    { promptLabel: 'le passif repris tel quel', promptSound: 'Les sorties ont simplement été suspendues.', fr: src(E(1967)).fr, ipa: ipaOf(E(1967)), tip: 'Suspendues par qui ? Le texte ne le dit pas : c’est cela qu’il faut relever. EN: by whom? That is the point to note.' },
    { promptLabel: 'la nominalisation avalée', promptSound: 'Une réévaluation a eu lieu, c’est tout.', fr: src(E(1968)).fr, ipa: ipaOf(E(1968)), tip: 'Une réévaluation suppose quelqu’un qui réévalue. EN: a reassessment needs an assessor.' },
    { promptLabel: 'le il pris pour quelqu’un', promptSound: 'Les parents ont jugé préférable de concentrer les ressources.', fr: src(E(1969)).fr, ipa: ipaOf(E(1969)), tip: 'Le « il » ne désigne personne, et sûrement pas les parents. EN: il refers to no one.' },
    { promptLabel: 'la situation qui décide', promptSound: 'La situation a décidé à la place de l’école.', fr: src(E(1975)).fr, ipa: ipaOf(E(1975)), tip: 'Une situation ne choisit rien : quelqu’un choisit. EN: a situation chooses nothing.' },
    { promptLabel: 'le on rassurant', promptSound: 'Tout le monde a décidé de fermer la piscine.', fr: src(E(1976)).fr, ipa: ipaOf(E(1976)), tip: '« On » n’est pas « tout le monde » : demande qui. EN: on is not everyone.' },
    { promptLabel: 'la décision qui se prend seule', promptSound: 'La décision est venue toute seule.', fr: src(E(1978)).fr, ipa: ipaOf(E(1978)), tip: 'Le pronominal cache le décideur. EN: the pronominal hides the decider.' },
  ],
  drill: [
    { promptSay: '« Les sorties sont suspendues. » La question à poser : suspendues ... ?', opts: ['par qui', 'pourquoi'], correct: 0 },
    { promptSay: 'Une nominalisation peut cacher le ... .', opts: ['verbe', 'sujet', 'temps'], correct: 1 },
    { promptSay: 'Dans « il a été jugé préférable », le « il » désigne ... .', opts: ['le directeur', 'personne'], correct: 1 },
    { promptSay: 'Un événement, on le subit ; une décision, on peut la ... .', opts: ['contester', 'oublier'], correct: 0 },
    { promptSay: '« La situation impose des choix » : en réalité, quelqu’un ... .', opts: ['attend', 'choisit'], correct: 1 },
    { promptSay: 'Réécrire avec un sujet rend la phrase plus ... .', opts: ['vague', 'discutable', 'longue'], correct: 1 },
    { promptSay: 'L’auteure critique l’effet du style, pas l’... du rédacteur.', opts: ['intention', 'orthographe'], correct: 0 },
    { promptSay: 'Le seul sujet du courriel, « nous », apparaît pour ... quelque chose.', opts: ['demander', 'décider'], correct: 0 },
  ],
  steps: STEPS_STD('Ce qu’un lecteur pressé a retenu', 'Écoute les six phrases du courriel', 'Huit phrases'),
  audio: REC('rec-c1-20-piege-agent'), say: REFRAME, terms: ['agent'],
};

const A10_ANALYSE = pourTonAnalyse('a10-analyse', 'Tu rends la décision à quelqu’un', [
  grp('Deux phrases d’analyse', [
    it(E(1971), 'nommer l’effet'),
    free('Les sorties ont été suspendues pour des raisons budgétaires.', 'Outings were suspended for budget reasons.', 'la tournure reprise'),
  ], chk('Laquelle analyse le courriel ?', ['la première', 'la seconde'], 0,
    'La seconde répète le courriel ; la première dit ce que fait son style. EN: the second repeats the email.')),
  grp('Sans procès d’intention', [
    it(E(1972), 'la conséquence'),
  ], chk('Pour être juste envers le rédacteur, tu écris...', ['« Le rédacteur a voulu tromper les parents. »', '« Voulu ou non, ce style empêche de savoir à qui répondre. »'], 1,
    'L’effet se prouve ; l’intention, non. EN: the effect can be shown; the intent cannot.')),
], ['agent']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le passif', '« Les tarifs ont été augmentés. » Ce qui manque, c’est...', ['le verbe', 'le complément d’agent'], 1,
    'Augmentés par qui ? EN: raised by whom?'),
  ctl('On', '« On a décidé de fermer. » « On » désigne...', ['forcément tout le monde', 'quelqu’un que la phrase ne nomme pas', 'le lecteur'], 1,
    '« On » laisse le décideur dans l’ombre. EN: on leaves the decider in the shadow.'),
  ctl('L’analyse', 'Face à un agent caché, ton analyse...', ['pose la question « par qui ? » et décrit l’effet', 'reprend la tournure'], 0,
    'Tu nommes l’effet, sans procès d’intention. EN: name the effect, without accusing.'),
], ['agent']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'L’agent caché',
    opener: {
      line: 'Un courriel annule les sorties scolaires sans dire qui les annule : ici tu retrouves qui a décidé. EN: An email cancels school outings without saying who cancels them: here you find who decided.',
      imageRef: 'lessons/lire-entre-les-lignes/act10.jpg',
    },
    sections: [],
    milestone: 'Tu repères les tournures qui cachent l’agent et tu demandes par qui, sans procès d’intention. EN: You can spot the phrasings that hide the agent and ask by whom, without accusing.',
    estScreens: 30, restPoints: ['a10-procedes', 'a10-piege'],
  },
  sections: [A10_CHRONIQUE, A10_PROCEDES, A10_RETROUVER, A10_PIEGE, A10_ANALYSE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — À L’ÉPREUVE
 *
 *  TEXT: two documents in the TCF Canada CE C1 shape (about 300 words each,
 *  4 + 3 items, 720 s), imitating the six published tasks without copying
 *  them. MOVE: the four distractor families (overstatement, topic for
 *  thesis, true but secondary, the other camp). Every item has exactly one
 *  defensible answer; each `why` names the family of the others WITHOUT a
 *  slot letter, because balanceSlots rotates the options.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_EPREUVE: Sec<'reading'> = {
  type: 'reading', id: 'a11-epreuve', layer: 'core', questionsInModal: true,
  title: 'Compréhension écrite, deux documents', frSub: 'Comme au TCF Canada',
  text: `${EPREUVE_A_TEXT} ${EPREUVE_B_TEXT}`,
  glossary: [
    { word: 'fourchette', en: 'range (of pay)', note: 'Un salaire minimum et un salaire maximum.' },
  ],
  questions: [
    { q: 'Devine le sens : « La question paraît triviale. Elle décide pourtant de tout. » De quelle question s’agit-il ?', a: '« Qui stocke ? » : où mettre les bouteilles rapportées, une question pratique qui décide qui paie le système.' },
    { q: 'Document 1 : l’auteur est-il pour ou contre la mesure ?', a: 'Pour la garder, contre l’idée qu’elle suffit : « un point de départ », pas « une réponse ».' },
    { q: 'Document 2 : le désaccord oppose-t-il écologistes et nostalgiques ?', a: 'Non : « Il n’en est rien. » Il oppose ceux qui ont de la place pour stocker et ceux qui n’en ont pas.' },
    { q: 'Document 2 : que pense l’auteur du chiffre de l’étude ?', a: 'Qu’il est « sans doute exact », mais calculé pour un supermarché : il en accepte le chiffre et en limite la portée.' },
  ],
  audio: REC('rec-c1-20-epreuve'), say: REFRAME, terms: ['distracteur'],
};

const A11_FAMILLES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a11-familles', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-epreuve',
  title: 'Les quatre familles de mauvaises réponses', frSub: 'Les distracteurs',
  hint: 'Quatre cartes. Chaque mauvaise option appartient à une famille.',
  audio: REC('rec-c1-20-familles'), say: REFRAME, terms: ['distracteur'],
  cards: [
    { head: 'L’exagération', label: 'plus fort que le texte', fr: src(E(1981)).fr, sub: rsOf(E(1981)),
      body: 'Elle reprend l’idée et la grossit : « supprimer » pour « limiter », « tous » pour « la plupart ». C’est l’erreur de l’acte 3. EN: it inflates the idea.' },
    { head: 'Le sujet pour la thèse', label: 'le thème, pas la position', fr: src(E(1982)).fr, sub: rsOf(E(1982)),
      body: 'Elle parle de ce dont parle le texte, sans dire ce qu’il en affirme. Elle semble juste parce qu’elle reprend ses mots. EN: it gives the topic, not the claim.' },
    { head: 'Vrai mais secondaire', label: 'dans le texte, hors de la question', fr: src(E(1983)).fr, sub: rsOf(E(1983)),
      body: 'Le texte le dit bien, mais ce n’est pas ce que la question demande. Relis la question, pas le texte. EN: true, but not the answer to this question.' },
    { head: 'L’autre camp', label: 'la position combattue', fr: src(E(1984)).fr, sub: rsOf(E(1984)),
      body: 'Elle donne ce que pensent ceux que l’auteur réfute : ce qui suit « on objectera », « certains », « on présente volontiers ». EN: it gives the opposing view.' },
  ],
};

const A11_ITEMS_A: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-items-a', layer: 'core', size: 'lg',
  title: 'Document 1, quatre questions', frSub: 'Afficher le salaire',
  groups: [
    ctl('Question 1', 'Quelle est la position de l’auteur sur la mesure ?', ['Elle est utile, mais on a tort de la présenter comme une réponse.', 'Elle est inutile, puisqu’une fourchette peut tout couvrir.', 'Elle a déjà fait disparaître les écarts de salaire.', 'Elle fait gagner du temps aux recruteurs.'], 0,
      'Inutile : l’autre camp. Les écarts disparus : une exagération. Le temps gagné : vrai, mais secondaire. EN: other camp, overstatement, true but secondary.'),
    ctl('Question 2', 'À quoi sert la comparaison avec la maison dont on ne dirait le prix qu’à la signature ?', ['À critiquer le marché immobilier.', 'À faire comprendre pourquoi la mesure a été bien accueillie.', 'À prouver que les salaires sont trop bas.', 'À montrer que la mesure est inutile.'], 1,
      'L’image rend évidente l’absurdité de l’ancien système. Elle ne prouve rien sur les salaires. EN: the image shows why the measure was welcomed.'),
    ctl('Question 3', 'Que fait le paragraphe qui commence par « On aurait tort, pourtant » ?', ['Il illustre les premiers effets.', 'Il élargit la question à toutes les entreprises.', 'Il limite la portée des effets constatés.', 'Il donne la position des recruteurs.'], 2,
      'Après les effets accordés, il pose les limites. EN: after the granted effects, it sets limits.'),
    ctl('Question 4', 'Que conclut exactement l’auteur ?', ['Qu’il faut abandonner la mesure.', 'Qu’il faut imposer l’affichage des augmentations.', 'Que la mesure a réglé le problème à l’embauche.', 'Qu’il faut la garder sans y voir une réponse.'], 3,
      'Abandonner : l’autre camp. Les augmentations : plus loin que le texte. Le problème réglé : il ne le dit pas. EN: other camp, beyond the text, not said.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['distracteur', 'portee'],
};

const A11_ASTUCES: Sec<'hacks'> = {
  type: 'hacks', id: 'a11-astuces', layer: 'core', sheetId: 'sheet-epreuve',
  title: 'Trois réflexes pour douze minutes',
  hacks: [
    { hack: 'Lis le texte une fois en entier, puis les questions.', why: 'Les questions C1 portent sur la charpente : une lecture d’ensemble vaut mieux que la chasse aux mots. EN: C1 items test structure, so read the whole text first.' },
    { hack: 'Devant « exactement », écarte d’abord l’option trop forte et la trop faible.', why: 'Il reste souvent deux options ; la bonne garde le nombre, la force et la condition. EN: drop the stronger and the weaker option first.' },
    { hack: 'Pour une posture, regarde les mots autour de la citation.', why: 'Sans doute exact, mais ; a raison de ; c’est aller vite : la posture est là. EN: the stance sits around the quotation.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['distracteur'],
};

const A11_ITEMS_B: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-items-b', layer: 'core', size: 'lg',
  title: 'Document 2, trois questions', frSub: 'La bouteille et le comptoir',
  groups: [
    ctl('Question 5', 'Sur quoi porte réellement le désaccord entre commerçants ?', ['Sur l’intérêt écologique de la consigne.', 'Sur la place nécessaire pour stocker les bouteilles.', 'Sur la nostalgie d’un ancien système.', 'Sur le prix des bouteilles neuves.'], 1,
      'L’écologie est l’objet déclaré ; la nostalgie, le cliché que l’auteur écarte. EN: the stated object and the cliché are traps.'),
    ctl('Question 6', 'Comment l’auteur traite-t-il l’étude des embouteilleurs ?', ['Il la juge fausse.', 'Il s’appuie sur elle sans réserve.', 'Il en accepte le chiffre, mais en limite la portée.', 'Il ne la mentionne pas.'], 2,
      '« Sans doute exact », mais « calculé pour un supermarché ». EN: he accepts the figure and limits its scope.'),
    ctl('Question 7', 'Que veut dire la dernière phrase ?', ['L’auteur doute que la promesse règle le manque de place.', 'L’auteur se réjouit de l’aide promise.', 'L’auteur ignore où sont les réserves.', 'L’auteur demande une étude de plus.'], 0,
      'L’impatience est ironique : elle confronte la promesse au vrai problème, la place. EN: ironic, it confronts the promise with the space problem.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['distracteur', 'ironie'],
};

const A11_ANALYSE = pourTonAnalyse('a11-analyse', 'Tu justifies ta réponse par le texte', [
  grp('Écarter une option', [
    it(E(1981), 'l’exagération'),
    it(E(1984), 'l’autre camp'),
  ], chk('« Elle est inutile, puisqu’une fourchette peut tout couvrir. » Cette option...', ['donne la position que l’auteur combat', 'résume la thèse'], 0,
    'L’auteur garde la mesure : c’est l’objection, pas sa thèse. EN: the writer keeps the measure.')),
  grp('Nommer la posture', [
    it(B224(1578), `${CRITIQUE_REF} : l’objectif et le moyen`),
    it(E(1987), 'le chiffre accepté, puis limité'),
  ], chk('Envers l’étude, l’auteur du document 2...', ['accepte et limite', 'réfute'], 0,
    'Sans doute exact ; calculé pour un supermarché. EN: he accepts, then limits.')),
], ['distracteur']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Les familles', 'Une option reprend la thèse en plus fort. C’est...', ['une exagération', 'l’autre camp', 'la bonne réponse'], 0,
    'Même idée, plus de force : une exagération. EN: same idea, more force.'),
  ctl('Vrai mais secondaire', 'Une option est dans le texte mais ne répond pas à la question. Tu...', ['la choisis, puisqu’elle est vraie', 'l’écartes et relis la question'], 1,
    'Vrai ne veut pas dire juste ici. EN: true does not mean right here.'),
  ctl('L’autre camp', 'Ce qui suit « on présente volontiers ce débat comme » donne souvent...', ['la thèse', 'une idée que l’auteur va écarter'], 1,
    'L’auteur cite un cliché pour le défaire. EN: he quotes a cliché to undo it.'),
], ['distracteur']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'À l’épreuve',
    opener: {
      line: 'Deux documents, sept questions, douze minutes : ici tu reconnais les quatre familles de mauvaises réponses. EN: Two documents, seven questions, twelve minutes: here you recognise the four families of wrong answers.',
      imageRef: 'lessons/lire-entre-les-lignes/act11.jpg',
    },
    sections: [],
    milestone: 'Tu réponds aux questions C1 du TCF et du TEF en écartant chaque option par sa famille. EN: You can answer TCF and TEF C1 items by ruling out each option by its family.',
    estScreens: 34, restPoints: ['a11-familles', 'a11-items-b'],
  },
  sections: [A11_EPREUVE, A11_FAMILLES, A11_ITEMS_A, A11_ITEMS_B, A11_ASTUCES, A11_ANALYSE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON ANALYSE
 *
 *  The production act. The task tribune is read with every move of the
 *  lesson, planned, rehearsed out loud with Samir, then analysed in writing.
 *  The brief prints the tribune again (no `source` field on `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_TRIBUNE: Sec<'reading'> = {
  type: 'reading', id: 'a12-tribune', layer: 'core', questionsInModal: true,
  title: 'La tribune de ta mission', frSub: 'Tout le filigrane, sur un seul texte',
  text: CUISINE_TEXT,
  glossary: [
    { word: 'appelle de ses vœux', en: 'longs for', note: 'Souhaiter vivement quelque chose.' },
  ],
  questions: [
    { q: 'Devine le sens : « Il suffit d’ouvrir le réfrigérateur d’un étudiant pour mesurer l’ampleur du désastre. » Quel est le ton de cette phrase ?', a: 'Dramatique et généralisant : un cas imaginé devient le « désastre » de toute une génération.' },
    { q: 'Quelle est la thèse, à sa portée exacte ?', a: 'Une heure de cuisine par semaine pour tous les élèves du secondaire, dès la rentrée prochaine, parce que cuisiner serait une compétence de base.' },
    { q: 'Que concède l’auteur, et que fait-il de cette concession ?', a: 'Que les programmes sont chargés ; il restreint par « il n’en demeure pas moins », sans dire quelle heure disparaîtrait.' },
    { q: 'Que présuppose la question d’ouverture ?', a: 'Que les adolescents ne savent pas cuisiner, et qu’ils savaient autrefois (« plus »).' },
    { q: 'Comment traite-t-il l’enquête Hestia et Sophie Andrieux ?', a: 'Il force l’enquête (41 % qui « disent » ne pas savoir deviennent « la moitié […] incapable ») et écarte l’objection d’Andrieux par une comparaison.' },
    { q: 'Que ne dit-il pas ?', a: 'Le coût, qui enseignerait, quelle matière perdrait une heure, ni l’intérêt qu’il peut y avoir, lui qui dirige des ateliers de cuisine.' },
  ],
  audio: REC('rec-c1-20-cuisine'), say: REFRAME, terms: ['restreindre', 'presuppose', 'portee'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-epreuve',
  title: 'Six étapes pour ton analyse',
  steps: [
    '1. Dis la thèse à sa portée exacte : qui, quoi, quand, à quelle condition. EN: state the thesis at its exact scope.',
    '2. Montre ce que l’auteur concède, et ce qu’il en fait : restreint-il, ou esquive-t-il ? EN: show what he concedes and what he does with it.',
    '3. Nomme un présupposé, avec le mot qui le porte. EN: name one presupposition and the word that carries it.',
    '4. Nomme une omission : ce que le texte ne dit pas et devrait dire. EN: name one omission.',
    '5. Décris sa posture face à ses sources, citation à l’appui. EN: describe his stance toward his sources, with a quotation.',
    '6. Conclus en une phrase, juste envers l’idée et exacte sur la défense qu’il en fait. EN: conclude fairly.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['portee', 'posture'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu écriras une analyse',
  cases: [
    { situation: 'Ta tutrice te demande une analyse, pas un résumé', fr: src(E(1998)).fr, en: src(E(1998)).en },
    { situation: 'Un collègue partage une tribune très sûre d’elle', fr: src(E(1992)).fr, en: src(E(1992)).en },
    { situation: 'Une association cite une enquête dans un courriel', fr: src(E(1993)).fr, en: src(E(1993)).en },
    { situation: 'Tu conclus une analyse en cours', fr: src(E(1999)).fr, en: src(E(1999)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['posture', 'portee'],
};

/** USE IT, out loud. Every French string here uses the typographic ’. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Samir veut signer la pétition',
  setting: 'À la bibliothèque, après l’atelier. Samir, ton partenaire de révision, a lu la tribune de Romain Desforges et veut signer la pétition qui l’accompagne. Tu l’as lue aussi, en filigrane.',
  turns: [
    {
      ai: 'Tu as lu la tribune sur la cuisine ? Je trouve qu’il a raison.', en: 'Have you read the op-ed on cooking? I think he is right.',
      user: src(E(1989)).fr, userEn: 'The writer argues for one hour of cooking a week in secondary school. (The thesis first, at its exact scope.)',
      alts: [
        { fr: 'Oui : il veut une heure de cuisine par semaine pour tous les élèves du secondaire.', en: 'Yes: he wants one hour of cooking a week for every secondary pupil.' },
        { fr: 'Il propose de remettre la cuisine au programme dès la rentrée prochaine.', en: 'He proposes putting cooking back on the curriculum from next school year.' },
      ],
    },
    {
      ai: 'Il cite une enquête, pourtant : la moitié des jeunes ne sait pas cuisiner.', en: 'He quotes a survey, though: half of young people cannot cook.',
      user: src(E(1993)).fr, userEn: 'Forty-one per cent is not half. (The source stretched, named.)',
      alts: [
        { fr: src(E(1994)).fr, en: 'Saying you don’t know how is not the same as being unable. (Self-reported, not measured.)' },
        { fr: src(E(1992)).fr, en: 'He makes the survey say more than it says. (His stance toward the source.)' },
      ],
    },
    {
      ai: 'Il reconnaît quand même que les programmes sont chargés.', en: 'He does admit the curriculum is full.',
      user: src(E(1990)).fr, userEn: 'He concedes the curriculum is full, without saying which hour he would remove. (A concession restricted, never answered.)',
      alts: [
        { fr: 'Il l’accorde, puis il passe à autre chose avec « il n’en demeure pas moins ».', en: 'He grants it, then moves on with « il n’en demeure pas moins ».' },
        { fr: 'Il concède le problème sans jamais y répondre.', en: 'He concedes the problem without ever answering it.' },
      ],
    },
    {
      ai: 'Et sa question du début, elle est bonne, non ?', en: 'And his opening question is a good one, isn’t it?',
      user: src(E(1991)).fr, userEn: 'His opening question takes it for granted that teenagers used to know how to cook. (The presupposition and the word that carries it.)',
      alts: [
        { fr: '« Ne savent-ils plus » suppose qu’ils savaient avant, et il ne le montre pas.', en: '« No longer know » assumes they used to know, and he does not show it.' },
        { fr: 'Elle répond d’avance : elle pose comme acquis ce qu’il faudrait prouver.', en: 'It answers itself: it takes for granted what should be proved.' },
      ],
    },
    {
      ai: 'Une nutritionniste n’est pas d’accord, mais il lui répond.', en: 'A nutritionist disagrees, but he answers her.',
      user: src(E(1995)).fr, userEn: 'He sums up the objection in one sentence, then brushes it aside with a comparison. (His stance toward a source.)',
      alts: [
        { fr: 'Il change l’objectif pour que l’objection ne porte plus.', en: 'He shifts the aim so that the objection no longer applies.' },
        { fr: 'Il ne discute pas ses arguments : il les remplace par une image.', en: 'He does not discuss her arguments: he replaces them with an image.' },
      ],
    },
    {
      ai: 'Bon. Je signe ou pas ?', en: 'Right. Do I sign or not?',
      user: 'Signe si tu veux, mais sache que le texte ne dit rien du coût, et que l’auteur dirige des ateliers de cuisine.', userEn: 'Sign if you like, but know that the text says nothing about cost, and that the writer runs cooking workshops. (The omission and the stake, without accusing.)',
      alts: [
        { fr: src(E(1999)).fr, en: 'All in all, the idea deserves discussion, but the text defends it badly. (A fair conclusion.)' },
        { fr: src(E(1996)).fr, en: 'The text says nothing about the cost, nor about who would teach. (The omission.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['portee', 'presuppose', 'posture'],
};

/** THE GRADED TASK. A written analysis of an original opinion piece, graded
 *  on a grid that mirrors the C1 CE skills (scope, concession, implicit
 *  content, stance) and adds precision and nuance (C1-BUILD-LOG). */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Analyse la tribune', frSub: 'Mission écrite',
  brief: `Ton atelier de préparation au TCF Canada étudie cette tribune. Claire, la tutrice, te demande une analyse, pas un résumé : ce que soutient l’auteur et jusqu’où, ce qu’il concède et ce qu’il en fait, ce que son texte tient pour acquis, ce qu’il passe sous silence, et comment il traite ses sources. Voici la tribune. ${CUISINE_TEXT}`,
  briefEn: 'Your TCF Canada preparation workshop is studying this op-ed. Claire, the tutor, asks for an analysis, not a summary: what the writer argues and how far, what he concedes and what he does with it, what his text takes for granted, what it leaves out, and how he treats his sources. The op-ed is printed here so you can write with it in front of you.',
  produce: 'Écris une analyse de 250 à 400 mots : dis la thèse à sa portée exacte, montre ce que l’auteur concède et restreint, nomme un présupposé et une omission, et décris sa posture face à ses sources, avec au moins deux courtes citations entre guillemets.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'these', label: 'La thèse, à sa portée exacte', maxPoints: 4, descriptors: [
        '4 : La thèse est juste et à sa portée exacte : une heure de cuisine par semaine, pour tous les élèves du secondaire, dès la rentrée, parce que cuisiner serait une compétence de base. Ni plus forte ni plus faible.',
        '3 : La thèse est juste mais perd un élément (la durée, le public ou le moment), ou elle est en partie recopiée.',
        '2 : Tu donnes le sujet (la cuisine à l’école) plutôt que la thèse, ou une version trop forte (« la cuisine à la place d’une autre matière ») ou trop faible (« parler de cuisine en classe »).',
        '1 : La thèse manque, ou tu fais dire à l’auteur le contraire de ce qu’il soutient.',
      ] },
      { key: 'charpente', label: 'Ce qu’il concède, ce qu’il restreint', maxPoints: 4, descriptors: [
        '4 : Tu montres la concession (les programmes chargés) et ce qu’il en fait : il la restreint par « il n’en demeure pas moins » sans y répondre, puisqu’il ne dit pas quelle heure disparaîtrait.',
        '3 : Tu nommes la concession et la restriction, sans montrer que l’objection reste sans réponse.',
        '2 : Tu présentes la concession comme la position de l’auteur, ou tu ne vois pas la restriction.',
        '1 : Rien sur la concession, ou tu fais rejeter par l’auteur ce qu’il accorde.',
      ] },
      { key: 'implicite', label: 'Un présupposé et une omission', maxPoints: 4, descriptors: [
        '4 : Un présupposé nommé avec le mot qui le porte (« ne savent-ils plus », « l’ampleur du désastre », « le retour du repas familial ») et une omission précise (le coût, qui enseignerait, l’heure retirée, la preuve des bénéfices, l’intérêt de l’auteur).',
        '3 : Les deux sont là, mais l’un est vague (« il oublie des choses ») ou donné sans le mot qui le porte.',
        '2 : Un seul des deux, ou un sous-entendu présenté comme un présupposé sans indice dans la phrase.',
        '1 : Ni présupposé ni omission.',
      ] },
      { key: 'posture', label: 'La posture face aux sources', maxPoints: 3, descriptors: [
        '3 : Tu montres qu’il force l’enquête (41 % qui « disent » ne pas savoir deviennent « la moitié […] incapable ») et qu’il écarte l’objection de Sophie Andrieux par une comparaison, sans la discuter.',
        '2 : Une seule des deux sources est analysée, ou la posture est nommée sans preuve.',
        '1 : Les sources sont résumées, pas analysées, ou présentées comme des preuves solides.',
      ] },
      { key: 'citations', label: 'Des citations qui prouvent', maxPoints: 2, descriptors: [
        '2 : Au moins deux citations courtes et exactes, entre guillemets, chacune au service d’une analyse.',
        '1 : Une seule citation, ou des citations trop longues ou sans lien avec ce que tu affirmes.',
      ] },
      { key: 'langue', label: 'Précision et nuance', maxPoints: 3, descriptors: [
        '3 : Un vocabulaire d’analyse précis et varié (concéder, restreindre, présupposer, forcer, écarter, passer sous silence), des nuances justes (sans doute, en partie, à condition que) et un texte qui s’enchaîne.',
        '2 : Un vocabulaire correct mais répétitif (il dit, il dit), ou des liens pauvres entre les remarques.',
        '1 : Des erreurs fréquentes qui gênent la lecture, ou des remarques juxtaposées.',
      ] },
    ],
  },
  scaffold: [
    'L’auteur soutient que…',
    'Il concède que…',
    'Il n’en conteste pas moins…',
    'Sa question d’ouverture tient pour acquis que…',
    'Le texte ne dit rien de…',
    'Il fait dire à l’enquête…',
    'L’objection est écartée par…',
    'Au total,',
  ],
  modelAnswer: 'Dans sa tribune, Romain Desforges soutient qu’il faut imposer une heure de cuisine par semaine à tous les élèves du secondaire, dès la rentrée prochaine, au motif que cuisiner serait une « compétence de base », au même titre que la lecture. La thèse est nette ; sa défense l’est beaucoup moins. L’auteur concède que « les programmes scolaires sont déjà chargés », mais il restreint aussitôt cette concession par « il n’en demeure pas moins » et une série d’exemples, la natation ou le vélo. L’objection reste pourtant sans réponse : il ne dit jamais quelle heure disparaîtrait de l’emploi du temps. Le texte repose aussi sur ce qu’il tient pour acquis. Sa question d’ouverture, « Pourquoi les adolescents ne savent-ils plus cuisiner ? », présuppose à la fois qu’ils ne savent pas et qu’ils savaient autrefois, ce que rien ne montre. De même, « le retour du repas familial » suppose que celui-ci a disparu. Sa posture face aux sources est révélatrice. Il cite l’enquête de l’Observatoire Hestia, selon laquelle 41 % des 15-17 ans « disent ne pas savoir » préparer un repas simple, puis en conclut que « la moitié d’une génération est incapable » de se nourrir : il gonfle le chiffre et transforme une déclaration en incapacité. Quant à l’objection de la nutritionniste Sophie Andrieux, il la résume en une phrase et l’écarte par une comparaison avec les cours d’histoire, sans discuter ses arguments. Enfin, le texte passe sous silence l’essentiel : ce que coûterait la mesure, qui enseignerait, avec quelle formation, et si les cuisines des cantines peuvent vraiment accueillir des classes entières. Ce silence pèse d’autant plus que l’auteur dirige lui-même des ateliers de cuisine. Au total, l’idée mérite sans doute d’être discutée, mais le texte la défend mal : il dramatise, force sa principale source et répond aux objections par des images plutôt que par des arguments.',
  modelAnswerEn: 'In his op-ed, Romain Desforges argues that one hour of cooking a week should be required of every secondary pupil from next school year, on the grounds that cooking is a « basic skill », just like reading. The thesis is clear; his defence of it much less so. The writer concedes that « the curriculum is already full », but immediately restricts the concession with « il n’en demeure pas moins » and a series of examples, swimming or cycling. The objection is left unanswered: he never says which hour would disappear from the timetable. The text also rests on what it takes for granted. His opening question, « Why can teenagers no longer cook? », presupposes both that they cannot and that they once could, which nothing shows. Likewise, « the return of the family meal » assumes that it has disappeared. His stance toward his sources is telling. He quotes the Hestia Observatory survey, according to which 41% of 15 to 17 year olds « say they cannot » prepare a simple meal, then concludes that « half a generation is incapable » of feeding itself: he inflates the figure and turns a statement into an incapacity. As for the objection of the nutritionist Sophie Andrieux, he sums it up in one sentence and dismisses it with a comparison to history lessons, without discussing her arguments. Finally, the text says nothing about the essentials: what the measure would cost, who would teach, with what training, and whether canteen kitchens can really take whole classes. That silence weighs all the more as the writer himself runs cooking workshops. All in all, the idea no doubt deserves discussion, but the text defends it badly: it dramatises, stretches its main source and answers objections with images rather than arguments.',
  watchFor: [
    { pattern: 'The topic given instead of the thesis (« il parle de la cuisine à l’école »), or the thesis without its scope (one hour, all secondary pupils, next year).', criterion: 'these', feedback: 'Tu donnes le sujet. Dis ce que l’auteur soutient, et jusqu’où : une heure par semaine, pour tous, dès la rentrée.', ref: 'a3-analyse' },
    { pattern: 'The thesis inflated (« il veut remplacer une matière par la cuisine ») or weakened (« il aimerait qu’on parle de cuisine »).', criterion: 'these', feedback: 'Ta reformulation va plus loin, ou reste en deçà. Garde le nombre, la durée et le moment.', ref: 'a3-reglages' },
    { pattern: 'The concession on the crowded timetable reported as the writer’s position, or not mentioned.', criterion: 'charpente', feedback: 'L’auteur accorde que les programmes sont chargés, puis il restreint. Montre les deux temps.', ref: 'a2-charniere' },
    { pattern: 'The restriction noted, but not that the objection is left unanswered (which hour goes).', criterion: 'charpente', feedback: 'Il restreint sans répondre : quelle heure disparaîtrait ? Dis-le.', ref: 'a2-analyse' },
    { pattern: 'No presupposition named, or one named without the word that carries it (plus, le retour, l’ampleur).', criterion: 'implicite', feedback: 'Cite le mot qui pose l’idée : « ne savent-ils plus » suppose qu’ils savaient.', ref: 'a8-declencheurs' },
    { pattern: 'A mere implication offered as a presupposition, with no trigger in the sentence.', criterion: 'implicite', feedback: 'Un présupposé est dans la grammaire. Si tu le déduis, écris plutôt « le texte laisse entendre ».', ref: 'a8-test' },
    { pattern: 'No precise omission (cost, staff, which hour, evidence of the benefits, the writer’s stake), or a vague one (« il oublie des choses »).', criterion: 'implicite', feedback: 'Nomme précisément ce que le texte ne dit pas : le coût, qui enseignerait, quelle heure disparaît.', ref: 'a12-plan' },
    { pattern: 'The Hestia survey accepted as proof that half of young people cannot cook.', criterion: 'posture', feedback: 'Compare : 41 % qui disent ne pas savoir, ce n’est ni la moitié ni une incapacité.', ref: 'a7-postures' },
    { pattern: 'Sophie Andrieux’s objection summarised, but its dismissal by analogy not analysed.', criterion: 'posture', feedback: 'Il ne discute pas l’objection : il l’écarte par une comparaison. Nomme ce geste.', ref: 'a6-roles' },
    { pattern: 'The writer’s stake used to call the whole text a lie (« il veut vendre ses ateliers »).', criterion: 'posture', feedback: 'Signale son intérêt sans l’accuser : ce silence pèse d’autant plus que…', ref: 'a10-analyse' },
    { pattern: 'Quotations missing, too long, or not attached to a point of analysis.', criterion: 'citations', feedback: 'Choisis trois à dix mots exacts, entre guillemets, et dis ce qu’ils prouvent.', ref: 'a11-analyse' },
    { pattern: 'Repetitive reporting verbs (il dit, il dit) and no nuance markers.', criterion: 'langue', feedback: 'Varie : il soutient, concède, restreint, présuppose, force, écarte, passe sous silence.', ref: 'a12-cheat' },
    { pattern: 'The learner’s own opinion on cooking classes replacing the analysis.', criterion: 'langue', feedback: 'On te demande d’analyser le texte, pas de juger la cuisine à l’école. Ton avis peut tenir en une phrase, à la fin.', ref: 'a12-plan' },
  ],
  graderNotes: [
    'Word count: 250 to 400, with 10% tolerance (225 to 440) before the criteria lose points for length. A title does not count.',
    'The task marks the ANALYSIS of the text, not an opinion on cooking classes. A learner who supports the proposal can score full marks if scope, concession, presupposition, omission and stance are analysed.',
    'Accept any presupposition with its trigger: « ne savent-ils plus » (plus), « l’ampleur du désastre » (definite article), « le retour du repas familial » (le retour), « que chacun appelle de ses vœux » (the relative clause presupposes a shared wish). « Le constat est connu, et il s’aggrave » is a bare assertion: accept it under omission or posture, not as a presupposition.',
    'Accept any precise omission: cost, staff and training, the hour removed from another subject, hygiene and the real availability of canteen kitchens, evidence for the benefits « connus de tous », the writer’s stake.',
    'The stake must be named without an accusation; an ad hominem loses the point under « posture ».',
    'Quotations: three to ten words, exact, in guillemets (French or straight). Over twenty words counts as copying, not quoting.',
    'Do not mark argument-WRITING features (lesson 23 in B2) or press-genre analysis (lesson 24 in C1): this task marks reading, shown in writing.',
    'Feedback language: unsimplified C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['portee', 'presuppose', 'posture'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis ton analyse à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['posture'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-epreuve',
  title: 'Tout le filigrane sur un écran',
  rows: [
    { k: 'concéder, restreindre', v: 'ce qui est accordé reste accordé', say: src(E(1817)).fr,
      detail: { title: 'La charpente', body: 'La thèse vit dans la restriction ; « sans doute » concède. EN: the thesis lives in the restriction.', say: src(E(1827)).fr } },
    { k: 'la portée', v: 'domaine, nombre, force, condition', say: src(E(1836)).fr,
      detail: { title: 'Ni plus, ni moins', body: 'Écarte la reformulation trop forte et la trop faible. EN: reject both the stronger and the weaker.', say: src(E(1842)).fr } },
    { k: 'le vrai désaccord', v: 'un fait, un mot, une valeur, qui décide', say: src(E(1861)).fr,
      detail: { title: 'L’objet réel', body: 'Mêmes faits, querelle ailleurs. EN: same facts, quarrel elsewhere.', say: src(E(1866)).fr } },
    { k: 'la fonction', v: 'ce que fait un passage, une image, une fin', say: src(E(1883)).fr,
      detail: { title: 'Avec un verbe', body: 'Illustrer, s’objecter, écarter un contresens, élargir, retourner. EN: answer with a verb.', say: src(E(1888)).fr } },
    { k: 'les sources', v: 's’appuyer, corriger, accorder, réfuter', say: src(E(1914)).fr,
      detail: { title: 'La posture', body: 'Les mots autour de la citation la disent. EN: the words around the quotation show it.', say: src(E(1930)).fr } },
    { k: 'l’implicite', v: 'présupposé, ironie, agent caché', say: src(E(1937)).fr,
      detail: { title: 'Ce que la phrase tient pour acquis', body: 'Le test de la négation, l’indice de l’ironie, la question « par qui ? ». EN: negation test, irony cue, by whom.', say: src(E(1942)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['restreindre', 'portee', 'posture'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu lis maintenant un essai en filigrane : tu suis ce qu’il concède et restreint, tu gardes sa conclusion à sa portée exacte, tu trouves le vrai objet d’un désaccord, tu nommes ce que fait un passage, une image, une chute, tu lis la posture de l’auteur face à ses sources, et tu fais apparaître ce que sa grammaire présuppose, son ironie et l’agent qu’il cache. Le piège qui reste est double : ne rien voir, ou voir partout. Un présupposé se prouve par un mot, une ironie par un indice. Avant l’examen, prends un éditorial, écris sa thèse à sa portée exacte, puis un présupposé avec le mot qui le porte, chacun avec une citation de moins de dix mots. EN: Before the exam, take an editorial, write its thesis at its exact scope, then one presupposition with its trigger word, each with a quotation under ten words.',
  stats: [
    { k: 'Ce qu’il soutient', v: 'la thèse, à sa portée' },
    { k: 'Comment il avance', v: 'concéder, restreindre, illustrer' },
    { k: 'Ce qu’il tient pour acquis', v: 'présupposé, agent caché' },
    { k: 'Ta réponse', v: 'analyser, prouver, citer' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 11, plus a round
 *  on the task tribune (act 1's fault, the inflated conclusion, is round 2's
 *  target). Each round targets a distinct errorTrigger. Mostly judgement on
 *  short texts, four-option items in the TCF / TEF shape, with distractors
 *  from the four families. `fold()` strips accents, punctuation and spacing,
 *  so no typed answer turns on them. The authored slots are then spread by
 *  `spreadSlots()`: no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une partie de la phrase trahit le texte. Écris la phrase juste. EN: Part of the sentence betrays the text; write it correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-charpente', label: 'Concéder, restreindre', targets: ['concession-rejetee'],
      questions: [
        mc('« C’est exact. Reste qu’un lieu qui accueille tout le monde finit par exclure certains. » L’auteur...', ['accorde un point puis en limite la portée', 'rejette ce qu’il vient d’accorder', 'change de sujet', 'donne la position de ses adversaires'], 0, 'Accorder, puis restreindre : la thèse est dans la limite. EN: grant, then limit.', 'a2-charniere'),
        mc('Dans la tribune du bibliothécaire, l’auteur est...', ['contre la bibliothèque moderne', 'pour la bibliothèque moderne, avec une salle silencieuse', 'pour le retour à la bibliothèque d’autrefois', 'indifférent au bruit'], 1, 'Il accepte le modèle et pose une limite. EN: he accepts the model and adds a limit.', 'a2-tribune'),
        mc('« Sans doute la demande est-elle difficile à mesurer. » « Sans doute » signifie ici...', ['certainement', 'probablement, je l’accorde'], 1, 'Une concession, pas une certitude. EN: a concession, not a certainty.', 'a2-piege'),
        mc('Que conteste l’auteur dans l’argument du coût ?', ['que l’aménagement coûte cher', 'la conclusion qu’on en tire', 'que les budgets soient serrés'], 1, 'Il accorde le coût et refuse la conséquence. EN: he grants the cost, refuses the inference.', 'a2-analyse'),
        tI('Complète avec la charnière qui restreint. Un mot.', 'C’est exact. ... qu’un lieu qui accueille tout le monde finit par exclure certains.', 'Reste', 'Reste que : la limite après l’accord. EN: reste que restricts.', 'a2-charniere'),
        tI('Complète. Un mot.', 'Ce qu’un auteur concède, il ne le ... pas.', 'retire', 'La concession reste acquise. EN: granted stays granted.', 'a2-piege', ['reprend', 'renie']),
        eS('L’auteur nie que les budgets soient serrés, et il en conteste la conséquence.', 'L’auteur concède que les budgets sont serrés, et il en conteste la conséquence.', 'Il l’accorde : « Certes ». EN: he grants it.', 'a2-analyse', ['L’auteur accorde que les budgets sont serrés, et il en conteste la conséquence.', 'L’auteur admet que les budgets sont serrés, et il en conteste la conséquence.', 'L’auteur reconnaît que les budgets sont serrés, et il en conteste la conséquence.']),
        lC('Écoute. Cette phrase accorde-t-elle ou restreint-elle ?', src(E(1817)).fr, ['elle restreint', 'elle accorde'], 0, 'Reste que limite ce qui précède. EN: it restricts.', 'a2-charniere'),
      ],
    },
    {
      id: 'r2-portee', label: 'La portée exacte', targets: ['portee-forcee'],
      questions: [
        mc('Que conclut exactement la chroniqueuse sur les écrans ?', ['L’écran nous rend moins bons lecteurs.', 'Sur écran, on saisit moins bien la structure des textes longs, sauf si l’on fait un plan.', 'L’écran n’a aucun effet sur la lecture.', 'Il faut interdire les tablettes au lycée.'], 1, 'Les autres exagèrent, affaiblissent ou ajoutent une mesure que le texte ne propose pas. EN: the others overstate, understate or add a measure.', 'a3-chronique'),
        mc('« Tous les élèves n’ont pas réussi » veut dire...', ['qu’aucun n’a réussi', 'que certains n’ont pas réussi'], 1, 'Pas tous : pour dire aucun, on écrit « aucun… ne ». EN: not all; none would be aucun… ne.', 'a3-negation'),
        mc('« Les utilisateurs réguliers se disent moins stressés, du moins les deux premiers mois. » La reformulation exacte :', ['La méditation guérit le stress.', 'Les réguliers se disent moins stressés, au moins au début.', 'Certaines personnes aiment méditer.'], 1, 'Elle garde qui, comment et combien de temps. EN: who, how and how long.', 'a3-trois'),
        mc('Une reformulation qui supprime « sauf si l’on fait un plan »...', ['va plus loin que le texte', 'reste exacte', 'reste en deçà du texte'], 0, 'Sans sa condition, l’effet devient général. EN: without its condition, the effect generalises.', 'a3-reglages'),
        tI('Complète. Un mot.', 'Cette reformulation reste en ... du texte.', 'deçà', 'Rester en deçà : affaiblir le texte. EN: to fall short of the text.', 'a3-negation'),
        tI('Complète avec la négation restrictive. Un mot.', 'L’étude ne portait ... sur des textes longs.', 'que', 'Ne… que limite le domaine. EN: only.', 'a3-reglages'),
        eS('Selon la chronique, l’écran nous rend moins bons lecteurs.', 'Selon la chronique, on saisit moins bien sur écran la structure des textes longs.', 'Le titre exagère ; la chronique corrige. EN: the headline overstates.', 'a3-analyse', ['Selon la chronique, sur écran, on saisit moins bien la structure des textes longs.', 'Selon la chronique, on saisit moins bien la structure des textes longs sur écran.']),
        lC('Écoute. Cette reformulation est-elle trop forte ?', src(E(1835)).fr, ['oui, elle va plus loin que l’étude', 'non, elle est exacte'], 0, 'Elle oublie le domaine et la condition. EN: it drops the domain and the condition.', 'a3-chronique'),
      ],
    },
    {
      id: 'r3-objet', label: 'Le vrai désaccord', targets: ['objet-declare'],
      questions: [
        mc('À Saint-Aubert, sur quoi porte réellement la querelle ?', ['sur la consommation d’eau', 'sur ce qu’un jardin dit de celui qui l’entretient', 'sur le prix des maisons', 'sur les tiques'], 1, 'L’eau, les tiques et les maisons sont l’objet déclaré. EN: those are the stated object.', 'a4-chronique'),
        mc('Quel est l’indice que le désaccord est ailleurs ?', ['les deux camps s’accordent sur les faits', 'les deux camps citent des chiffres différents'], 0, 'Mêmes faits, querelle ailleurs. EN: same facts, quarrel elsewhere.', 'a4-objets'),
        mc('« Pour lui, tôt veut dire avant sept heures ; pour elle, avant neuf. » Le désaccord porte sur...', ['un fait', 'un mot', 'qui décide'], 1, 'Le même mot, deux sens. EN: one word, two meanings.', 'a4-sorte'),
        mc('Dans l’émission sur les terrasses, qui nomme le vrai sujet ?', ['l’animatrice', 'le riverain', 'la patronne du café', 'personne'], 0, 'Elle conclut sur le trottoir l’hiver. EN: the host names it.', 'a4-ecoute'),
        tI('Complète. Un mot.', 'La querelle porte en ... sur ce qu’un jardin dit de son propriétaire.', 'réalité', 'En réalité : le signal de l’objet réel. EN: en réalité signals the real object.', 'a4-objets', ['fait']),
        tI('Complète. Un mot.', 'Si l’on s’accorde sur les faits, le désaccord est ... .', 'ailleurs', 'La règle de l’acte. EN: elsewhere.', 'a4-objets'),
        eS('Les deux camps se disputent sur la quantité d’eau consommée.', 'Les deux camps s’accordent sur la quantité d’eau consommée.', 'Personne ne conteste ce fait. EN: nobody disputes it.', 'a4-chronique', ['Les deux camps sont d’accord sur la quantité d’eau consommée.']),
        lC('Écoute. Que reproche cette phrase à l’autre ?', src(E(1877)).fr, ['de cacher sous l’énergie une question de place', 'de mentir sur les chiffres'], 0, 'Elle nomme l’objet réel. EN: it names the real object.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r4-fonction', label: 'Ce que fait un paragraphe', targets: ['contenu-pour-fonction'],
      questions: [
        mc('Dans l’essai sur les musées, que fait le paragraphe qui commence par « Un mois et une salle » ?', ['Il se fait une objection, l’accepte et en limite la portée.', 'Il donne la thèse de l’auteur.', 'Il illustre la thèse par une expérience.', 'Il élargit la question.'], 0, 'Dira-t-on, je l’accorde, l’essentiel n’en sort pas entamé : trois temps. EN: objection, acceptance, limit.', 'a5-fonctions'),
        mc('« Qu’on ne s’y trompe pas : il ne s’agit pas de supprimer les explications. » Ce passage...', ['écarte un contresens', 'pose le constat', 'illustre la thèse'], 0, 'Il bloque une lecture trop forte. EN: it blocks an overstated reading.', 'a5-fonctions'),
        mc('Que fait le dernier paragraphe de l’essai ?', ['Il résume l’expérience.', 'Il élargit la thèse à d’autres expériences que le musée.', 'Il réfute l’objection.'], 1, 'La question dépasse d’ailleurs les musées. EN: it widens the thesis.', 'a5-essai'),
        mc('Laquelle est une réponse sur la fonction ?', ['Il parle des visiteurs.', 'Il illustre la thèse par un cas.'], 1, 'Un verbe de rôle, pas un contenu. EN: a role verb, not content.', 'a5-erreurs'),
        tI('Complète le verbe de fonction. Un mot.', 'Prenons un cas : l’auteur ... sa thèse.', 'illustre', 'Prenons introduit un cas. EN: prenons introduces a case.', 'a5-associer', ['étaye']),
        tI('Complète. Un mot.', 'Le contenu dit de quoi parle le paragraphe ; la ... dit à quoi il sert.', 'fonction', 'La règle de l’acte. EN: the function.', 'a5-consignes'),
        eS('Dans le paragraphe 4, l’auteur pense qu’un mois ne prouve rien.', 'Dans le paragraphe 4, l’auteur se fait une objection, puis il en limite la portée.', '« Dira-t-on » donne la parole à un autre. EN: someone else’s voice.', 'a5-erreurs', ['Dans le paragraphe 4, l’auteur se fait une objection, puis en limite la portée.', 'Dans le paragraphe 4, l’auteur se fait une objection, l’accepte, puis en limite la portée.']),
        lC('Écoute. Que fait cette phrase dans un essai ?', src(E(1893)).fr, ['elle élargit la question', 'elle pose le constat', 'elle écarte un contresens'], 0, 'D’ailleurs, au-delà : la thèse s’étend. EN: it widens the question.', 'a5-fonctions'),
      ],
    },
    {
      id: 'r5-image', label: 'L’analogie et la chute', targets: ['image-au-pied-de-la-lettre'],
      questions: [
        mc('Dans le billet, qu’est-ce que l’analogie compare exactement ?', ['le bruit du téléphone et celui d’une sonnette', 'le fait d’interrompre sans rien transmettre', 'la forme du téléphone', 'les visiteurs et les amis'], 1, 'Un trait, pas tout. EN: one feature, not everything.', 'a6-roles'),
        mc('Que fait l’auteur de la limite de son image ?', ['il l’ignore', 'il la retourne en argument', 'il abandonne l’analogie'], 1, 'Si personne ne coupe, c’est qu’on désire être interrompu. EN: he turns the limit into an argument.', 'a6-billet'),
        mc('« Nous avons surtout obtenu des visiteurs qui ne disent pas leur nom. » Cette chute...', ['résume le billet', 'retourne la promesse du début', 'ouvre une question', 'donne un conseil'], 1, '« Le monde entier dans la main » reprend la « fenêtre ouverte sur le monde » du début. EN: it reverses the opening promise.', 'a6-roles'),
        mc('« Un CV ressemble moins à un portrait qu’à une vitrine. » Le trait comparé :', ['on y montre ce qui doit attirer', 'il est beau', 'il est encadré'], 0, 'Une vitrine expose pour séduire. EN: a window displays to attract.', 'a6-tester'),
        tI('Complète. Un mot.', 'Une analogie compare un ..., jamais tout.', 'trait', 'La règle de l’acte. EN: one feature.', 'a6-roles', ['aspect']),
        tI('Complète le nom de la dernière phrase d’un essai. Un mot.', 'la ... d’un essai', 'chute', 'La chute : résumer, retourner, ouvrir, ironiser. EN: the closing line.', 'a6-roles'),
        eS('L’auteur reconnaît que son analogie est fausse.', 'L’auteur reconnaît une limite à son image, puis la retourne en argument.', 'Dire une limite n’est pas abandonner l’image. EN: a limit is not a retraction.', 'a6-erreurs', ['L’auteur reconnaît une limite à son image, puis il la retourne en argument.', 'L’auteur reconnaît les limites de son image, puis les retourne en argument.']),
        lC('Écoute. Que fait cette chute ?', src(E(1911)).fr, ['elle ouvre une question', 'elle résume la thèse'], 0, '« Reste à savoir » laisse la question au lecteur. EN: it opens a question.', 'a6-tester'),
      ],
    },
    {
      id: 'r6-sources', label: 'L’auteur et ses sources', targets: ['source-mal-lue'],
      questions: [
        mc('Envers la synthèse de l’Institut Corvelle, l’auteure...', ['la réfute', 'défend la source contre ceux qui la citent de travers', 's’appuie sur elle sans l’avoir lue', 'ne la cite pas'], 1, 'La synthèse a raison ; ses lecteurs la trahissent. EN: the source is right; its quoters are wrong.', 'a7-tribune'),
        mc('Envers Henri Vautrel, l’auteure...', ['accorde l’argument et en déplace la conclusion', 'le réfute entièrement', 'se range entièrement à son avis'], 0, 'L’argument est sérieux ; la conclusion change. EN: she grants it and shifts the conclusion.', 'a7-postures'),
        mc('« Même les défenseurs les plus fervents des devoirs le reconnaissent. » Ce tour sert à...', ['citer l’autre camp pour s’appuyer sur lui', 'changer de sujet', 'réfuter les défenseurs'], 0, 'L’adversaire devient témoin. EN: the opponent becomes a witness.', 'a7-postures'),
        mc('« Le rapport a raison de pointer le coût ; il a tort d’en faire le seul critère. » L’auteur...', ['réfute le rapport', 'lui donne raison sur un point et tort sur un autre'], 1, 'Deux verdicts en une phrase. EN: two verdicts in one sentence.', 'a7-trier'),
        tI('Complète la formule de réfutation polie. Un mot.', 'C’est aller un peu ... .', 'vite', 'Une formule polie pour un désaccord net. EN: a polite rejection.', 'a7-postures', ['loin']),
        tI('Complète. Un mot.', 'La synthèse dit en ... autre chose.', 'réalité', 'Corriger un usage : la source dit autre chose. EN: correcting a misuse.', 'a7-postures', ['fait']),
        eS('L’auteure réfute la synthèse de l’Institut Corvelle.', 'L’auteure défend la synthèse de l’Institut Corvelle contre ceux qui la citent de travers.', 'Elle lui donne raison. EN: she sides with the source.', 'a7-analyse', ['L’auteure défend la synthèse de l’Institut Corvelle contre ceux qui la citent mal.']),
        lC('Écoute. La chroniqueuse est-elle d’accord avec les auteurs de l’étude ?', src(E(1926)).fr, ['pas sur ce point : ils ont tort de parler de révolution', 'oui, entièrement'], 0, 'Raison sur un point, tort sur un autre. EN: right on one point, wrong on another.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r7-presuppose', label: 'Le présupposé', targets: ['presuppose-accepte'],
      questions: [
        mc('« Pourquoi les jeunes ne lisent-ils plus ? » tient pour acquis...', ['que les jeunes ne lisent pas, et qu’ils lisaient autrefois', 'que les jeunes lisent beaucoup', 'que la question est neutre'], 0, 'Pourquoi et plus posent deux idées. EN: why and plus posit two ideas.', 'a8-essai'),
        mc('« La ville a cessé de financer le festival. » Qu’est-ce qui reste vrai à la négation ?', ['que la ville finançait le festival', 'que le festival est annulé'], 0, 'Le présupposé survit à la négation. EN: it survives negation.', 'a8-test'),
        mc('Quel verbe tient la proposition qui suit pour vraie ?', ['croire que', 'prétendre que', 'regretter que', 'supposer que'], 2, 'Regretter est factif ; les autres non. EN: regretter is factive.', 'a8-declencheurs'),
        mc('« Il est déjà 22 heures », dit à un invité. « Tu devrais partir » est...', ['un présupposé', 'un sous-entendu'], 1, 'On peut le démentir : il n’est pas dans la grammaire. EN: it can be denied.', 'a8-test'),
        tI('Complète. Un mot.', 'Le présupposé survit à la ... .', 'négation', 'Le test de l’acte. EN: the negation test.', 'a8-test'),
        tI('Quel petit mot de la question suppose un âge d’or ? Un mot.', 'Pourquoi les jeunes ne lisent-ils ... ?', 'plus', 'Ne… plus suppose un avant. EN: ne… plus presupposes a before.', 'a8-declencheurs'),
        eS('Le chantier a encore pris du retard : c’est la première fois.', 'Le chantier a encore pris du retard : ce n’est pas la première fois.', '« Encore » suppose un retard précédent. EN: encore presupposes an earlier delay.', 'a8-piege'),
        lC('Écoute. Que présuppose cette phrase ?', src(E(1941)).fr, ['que quelqu’un d’autre a démissionné', 'qu’elle est la seule'], 0, '« Aussi » suppose un autre cas. EN: aussi presupposes another case.', 'a8-piege'),
      ],
    },
    {
      id: 'r8-ironie', label: 'L’ironie', targets: ['ironie-sans-indice'],
      questions: [
        mc('« J’ai donc appelé, en adhérente centrée. » Le procédé est...', ['l’écho : reprendre le mot de la note', 'un compliment', 'une définition'], 0, 'Le mot vient de la direction. EN: the word comes from the memo.', 'a9-signaux'),
        mc('Qu’est-ce qui prouve que « tout le loisir d’apprécier » la musique est ironique ?', ['quarante minutes d’attente', 'le mot musique', 'un point d’exclamation'], 0, 'La situation contredit l’éloge. EN: the situation contradicts the praise.', 'a9-billet'),
        mc('La phrase de la conseillère est...', ['ironique, comme le reste', 'sincère : rien ne la contredit'], 1, 'Pas d’indice, pas d’ironie. EN: no cue, no irony.', 'a9-degre'),
        mc('Dans la chronique radio sur l’ironie à l’écrit, le chroniqueur...', ['est ironique d’un bout à l’autre', 'parle de l’ironie sans en faire', 'se moque des émoticônes', 'refuse toute ironie'], 1, 'L’ironie est le sujet, pas le procédé. EN: irony is the topic.', 'a9-sujet'),
        tI('Complète. Un mot.', 'Pas d’..., pas d’ironie.', 'indice', 'La règle de l’acte. EN: no cue, no irony.', 'a9-signaux'),
        tI('Complète. Un mot.', 'Lire une phrase au ... degré, c’est la prendre au pied de la lettre.', 'premier', 'Premier degré : sens littéral. EN: literally.', 'a9-degre'),
        eS('L’auteure trouve que le pôle expérience est une réussite.', 'L’auteure se moque du pôle expérience en reprenant le mot de la note.', 'Tout le billet contredit l’éloge. EN: the whole text contradicts the praise.', 'a9-erreurs', ['L’auteure se moque du pôle expérience.', 'L’auteure trouve que le pôle expérience est un échec.']),
        lC('Écoute. Que font les bons ironistes, selon le chroniqueur ?', src(E(1963)).fr, ['ils laissent un détail qui contredit l’éloge', 'ils ajoutent un visage qui cligne de l’œil'], 0, 'Le détail est l’indice. EN: the detail is the cue.', 'a9-sujet'),
      ],
    },
    {
      id: 'r9-agent', label: 'L’agent caché', targets: ['agent-oublie'],
      questions: [
        mc('« Les sorties scolaires sont suspendues jusqu’à nouvel ordre. » Ce qui manque :', ['qui les suspend', 'quand', 'pourquoi', 'combien'], 0, 'Le passif sans agent. EN: the agentless passive.', 'a10-procedes'),
        mc('« Une réévaluation des priorités budgétaires a été effectuée. » Le procédé :', ['une nominalisation au passif', 'une question', 'une concession'], 0, 'Le nom et le passif effacent celui qui réévalue. EN: noun plus passive.', 'a10-procedes'),
        mc('Dans « il a été jugé préférable », le « il »...', ['désigne le directeur', 'ne désigne personne'], 1, 'Un il impersonnel. EN: an impersonal il.', 'a10-piege'),
        mc('L’auteure accuse-t-elle le rédacteur de mentir ?', ['oui', 'non : elle critique l’effet du style, pas l’intention'], 1, 'Elle lui accorde sa bonne foi. EN: she grants his good faith.', 'a10-chronique'),
        tI('Complète la question à poser. Deux mots.', 'Suspendues ... ?', 'par qui', 'Par qui : le complément d’agent qui manque. EN: by whom.', 'a10-procedes'),
        tI('Complète. Un mot.', 'On peut contester une décision. Un ..., on le subit.', 'événement', 'Le style transforme la décision en événement. EN: an event.', 'a10-chronique'),
        eS('Selon l’auteure, le rédacteur a voulu tromper les parents.', 'Selon l’auteure, le rédacteur n’a sans doute rien voulu cacher.', 'Elle critique l’effet, pas l’intention. EN: the effect, not the intent.', 'a10-chronique', ['Selon l’auteure, le rédacteur n’a sans doute pas voulu tromper les parents.', 'Selon l’auteure, le rédacteur n’a pas voulu tromper les parents.']),
        lC('Écoute. Qui décide dans cette phrase ?', src(E(1975)).fr, ['personne n’est nommé : la situation sert de sujet', 'le conseil d’établissement'], 0, 'Un sujet abstrait cache le décideur. EN: an abstract subject hides the decider.', 'a10-retrouver'),
      ],
    },
    {
      id: 'r10-epreuve', label: 'Format TCF et TEF', targets: ['distracteur-choisi'],
      questions: [
        mc('Format TCF. Document 1 : selon l’auteur, l’affichage des salaires...', ['est un point de départ, pas une réponse', 'ne sert à rien', 'a réglé les écarts de salaire', 'fait surtout gagner du temps aux recruteurs'], 0, 'L’autre camp, l’exagération, le vrai mais secondaire. EN: other camp, overstatement, true but secondary.', 'a11-items-a'),
        mc('Format TCF. Document 2 : sur quoi porte réellement le désaccord ?', ['l’écologie', 'qui stocke les bouteilles', 'la nostalgie', 'le prix du verre'], 1, 'L’écologie est l’objet déclaré, la nostalgie un cliché écarté. EN: stated object and cliché.', 'a11-items-b'),
        mc('Une option dit la même chose que le texte, en plus fort. C’est...', ['une exagération', 'le sujet pour la thèse', 'vrai mais secondaire', 'l’autre camp'], 0, 'Même idée, plus de force. EN: same idea, more force.', 'a11-familles'),
        mc('Une option reprend ce qui suit « on objectera ». C’est souvent...', ['la thèse', 'l’autre camp'], 1, 'L’auteur cite l’objection pour la limiter. EN: the objection, not the thesis.', 'a11-familles'),
        mc('Question type TEF. Dans le document 1, que fait le paragraphe qui commence par « On aurait tort, pourtant » ?', ['Il limite la portée des effets constatés.', 'Il illustre les premiers effets.', 'Il élargit la question.'], 0, 'Après les effets accordés, les limites. EN: after the granted effects, the limits.', 'a11-items-a'),
        tI('Complète le nom de la famille. Un mot.', 'vrai mais ...', 'secondaire', 'Dans le texte, hors de la question. EN: true but secondary.', 'a11-familles'),
        eS('Le document 2 présente le débat comme une querelle entre écologistes et nostalgiques.', 'Le document 2 refuse de présenter le débat comme une querelle entre écologistes et nostalgiques.', 'Il cite ce cliché pour l’écarter : « Il n’en est rien. » EN: he quotes the cliché to reject it.', 'a11-epreuve', ['Le document 2 refuse de voir dans le débat une querelle entre écologistes et nostalgiques.', 'Le document 2 conteste que le débat soit une querelle entre écologistes et nostalgiques.']),
        lC('Écoute. Cette phrase est-elle ironique ?', src(E(1988)).fr, ['oui : la réserve manque, justement', 'non, l’auteur attend vraiment'], 0, 'L’impatience feinte confronte la promesse au manque de place. EN: feigned impatience.', 'a11-items-b'),
      ],
    },
    {
      id: 'r11-analyse', label: 'Ton analyse', targets: ['analyse-incomplete'],
      questions: [
        mc('Format TCF. Dans la tribune sur la cuisine, que propose exactement l’auteur ?', ['une heure de cuisine par semaine pour tous les élèves du secondaire', 'la fin des plats surgelés', 'des cours de cuisine pour les étudiants', 'la fermeture des cantines l’après-midi'], 0, 'Les autres vont plus loin, changent de public ou inventent une mesure. EN: the others overstate or change the target.', 'a12-tribune'),
        mc('« Selon une enquête, 41 % disent ne pas savoir préparer un repas simple. Autrement dit, la moitié est incapable de se nourrir. » L’auteur...', ['force sa source', 'cite sa source fidèlement'], 0, 'Il gonfle le chiffre et change une déclaration en incapacité. EN: he stretches it.', 'a12-tribune'),
        mc('Que présuppose « le retour du repas familial » ?', ['que le repas familial a disparu', 'que le repas familial n’a jamais existé', 'que chacun cuisine'], 0, '« Le retour » pose une disparition. EN: le retour presupposes a disappearance.', 'a12-tribune'),
        mc('Comment l’auteur traite-t-il l’objection de Sophie Andrieux ?', ['il la discute point par point', 'il la résume et l’écarte par une comparaison', 'il l’accepte entièrement', 'il ne la mentionne pas'], 1, 'Une phrase, puis une image. EN: one sentence, then an image.', 'a12-tribune'),
        mc('Laquelle est une omission du texte ?', ['le coût et qui enseignerait', 'l’enquête Hestia', 'les programmes chargés'], 0, 'Les deux autres sont dans le texte. EN: the others are in the text.', 'a12-plan'),
        tI('Complète la phrase d’analyse. Un mot.', 'Le texte ne dit ... du coût.', 'rien', 'Nommer une omission précise. EN: name a precise omission.', 'a12-plan'),
        eS('L’auteur prouve que les adolescents savaient cuisiner autrefois.', 'L’auteur tient pour acquis que les adolescents savaient cuisiner autrefois.', 'Il le présuppose, il ne le prouve pas. EN: presupposed, not proved.', 'a12-tribune', ['L’auteur présuppose que les adolescents savaient cuisiner autrefois.', 'L’auteur suppose que les adolescents savaient cuisiner autrefois.']),
        lC('Écoute. Cette phrase analyse-t-elle la tribune ?', src(E(1999)).fr, ['oui : elle juge l’idée et la défense', 'non : c’est un avis sur la cuisine'], 0, 'Elle sépare l’idée de sa défense. EN: it separates the idea from its defence.', 'a12-plan'),
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
    { front: 'accordé, puis limité', back: 'concéder, restreindre', say: src(E(1817)).fr },
    { front: 'probably, I grant it', back: 'sans doute', say: src(E(1822)).fr },
    { front: 'ni plus fort ni plus faible', back: 'la portée exacte', say: src(E(1842)).fr },
    { front: 'mêmes faits, querelle ailleurs', back: 'le vrai désaccord', say: src(E(1866)).fr },
    { front: 'ce que fait un passage', back: 'sa fonction', say: src(E(1888)).fr },
    { front: 'un trait, jamais tout', back: 'l’analogie', say: src(E(1906)).fr },
    { front: 'ce qui survit à la négation', back: 'le présupposé', say: src(E(1942)).fr },
    { front: 'reprendre les mots de l’autre', back: 'l’ironie par écho', say: src(E(1946)).fr },
    { front: 'by whom?', back: 'par qui ?', say: src(E(1974)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Lire entre les lignes, en résumé',
  body: `${REFRAME} Tu tiens maintenant un essai devant la fenêtre : tu vois ce qui est dans le papier, la concession, la portée, le présupposé, l’ironie, l’agent caché, et seulement là où le papier le porte. La prochaine leçon fait la même chose à l’oral : ${DEBATS_REF} t’apprend à suivre un débat à trois voix, qui accorde quoi et sur quoi porte vraiment le désaccord. EN: Next: the same reading, by ear, in a three-voice debate.`,
  points: [
    'Ce qu’un auteur concède, il le garde ; sa thèse vit dans la restriction.',
    'Une bonne reformulation garde le domaine, le nombre, la force et la condition.',
    'Un présupposé se prouve par un mot ; une ironie, par un indice.',
    'Ton analyse dit la thèse, la concession, un présupposé, une omission et la posture.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['restreindre', 'portee', 'presuppose'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton analyse',
    opener: {
      line: 'Une tribune très sûre d’elle, et ta lecture en filigrane : à toi d’écrire ce qu’elle soutient, concède, suppose et tait. EN: A very self-assured op-ed and your reading between the lines: your turn to write what it argues, concedes, assumes and leaves out.',
      imageRef: 'lessons/lire-entre-les-lignes/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit l’analyse d’une tribune et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote the analysis of an op-ed and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-tribune', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-objet', 'a12-quiz/r6-sources', 'a12-quiz/r9-agent'],
  },
  sections: [
    A12_TRIBUNE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-charpente', title: 'Accordé, puis limité', format: 'mcq' as const, coach: 'Ce que l’auteur accorde, il le garde ; cherche la limite qu’il pose. EN: granted stays granted; find the limit.', q: '« C’est exact. Reste que… » L’auteur...', opts: ['garde le point et le limite', 'retire le point'], correct: 0, why: 'La restriction limite, elle ne nie pas. EN: the restriction limits, it does not deny.', items: [E(1816), E(1817), E(1818), E(1821), E(1826), E(1827)], audio: AUDIO },
  { id: 'd-portee', title: 'Trop fort ou exact', format: 'sort' as const, coach: 'Deux piles : la phrase grossit-elle sa source, ou la garde-t-elle exacte ? EN: does the sentence inflate its source, or keep it exact?', buckets: ['trop fort', 'exact'], items: [E(1835), E(1836), E(1850), E(1851), E(1854), E(1855)], audio: AUDIO },
  { id: 'd-objet', title: 'L’objet réel', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : elles séparent l’objet déclaré de l’objet réel. EN: say each line aloud.', items: [E(1860), E(1861), E(1862), E(1865), E(1866), E(1868)], audio: AUDIO },
  { id: 'd-fonction', title: 'Un verbe de fonction', format: 'mcq' as const, coach: 'Réponds par un verbe : illustrer, s’objecter, écarter, élargir. EN: answer with a verb.', q: 'Un paragraphe qui commence par « On objectera que »...', opts: ['donne d’abord la parole à un contradicteur', 'donne la thèse de l’auteur'], correct: 0, why: 'L’auteur se fait une objection avant de la limiter. EN: the writer voices an objection first.', items: [E(1882), E(1883), E(1884), E(1885), E(1886), E(1888)], audio: AUDIO },
  { id: 'd-image', title: 'Le trait et la chute', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce qu’une image compare, et ce que fait une fin. EN: what an image compares, what an ending does.', items: [E(1898), E(1900), E(1901), E(1906), E(1907), E(1909)], audio: AUDIO },
  { id: 'd-sources', title: 'Six postures', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute, et nomme la posture qu’elle montre. EN: say each line and name the stance.', items: [E(1914), E(1915), E(1916), E(1918), E(1919), E(1930)], audio: AUDIO },
  { id: 'd-presuppose', title: 'Ce qui survit à la négation', format: 'mcq' as const, coach: 'Mets la phrase à la négation : ce qui reste vrai est présupposé. EN: negate the sentence; what stays true is presupposed.', q: '« Il a cessé de pleuvoir » présuppose qu’il...', opts: ['pleuvait', 'pleuvra'], correct: 0, why: 'Cesser de, c’est avoir fait. EN: to stop is to have done.', items: [E(1931), E(1934), E(1935), E(1938), E(1939), E(1942)], audio: AUDIO },
  { id: 'd-ironie', title: 'Le procédé et l’indice', format: 'mcq' as const, coach: 'Pas d’indice, pas d’ironie : cherche ce qui contredit l’éloge. EN: find what contradicts the praise.', q: 'Une phrase élogieuse est ironique si...', opts: ['le texte la contredit', 'elle est très polie'], correct: 0, why: 'L’indice est dans le texte. EN: the cue is in the text.', items: [E(1946), E(1947), E(1948), E(1949), E(1953), E(1954)], audio: AUDIO },
  { id: 'd-agent', title: 'Par qui ?', format: 'mcq' as const, coach: 'Devant un passif ou un nom, demande qui agit. EN: ask who acts.', q: '« Les sorties sont suspendues. » Tu demandes...', opts: ['par qui', 'depuis quand'], correct: 0, why: 'Le complément d’agent manque. EN: the agent is missing.', items: [E(1967), E(1968), E(1969), E(1970), E(1974), E(1976)], audio: AUDIO },
  { id: 'd-examen', title: 'Les quatre familles', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les familles de mauvaises réponses. EN: the families of wrong answers.', items: [E(1980), E(1981), E(1982), E(1983), E(1984), E(1985)], audio: AUDIO },
  { id: 'd-analyse', title: 'La charpente de ton analyse', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : la charpente d’une analyse C1. EN: the frame of a C1 analysis.', items: [E(1989), E(1990), E(1991), E(1992), E(1996), E(1998)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'concession-rejetee', description: 'Reads a granted point as rejected, or a restriction as a rejection of the whole, and takes « sans doute » for certainty.', detectOn: ['a2-carte', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-charpente', retest: 'd-charpente' },
  { id: 'portee-forcee', description: 'Restates a conclusion stronger or weaker than the text, dropping its domain, quantity, strength or condition, or misreading a partial negation.', detectOn: ['a3-trois', 'a3-negation', 'a3-check', 'a12-mission'], drill: 'd-portee', retest: 'd-portee' },
  { id: 'objet-declare', description: 'Takes the stated object of a disagreement for the real one, missing that both sides share the facts.', detectOn: ['a4-sorte', 'a4-ecoute', 'a4-check'], drill: 'd-objet', retest: 'd-objet' },
  { id: 'contenu-pour-fonction', description: 'Answers « what does this paragraph do » with its content, or attributes an « on objectera » objection to the writer.', detectOn: ['a5-associer', 'a5-erreurs', 'a5-check'], drill: 'd-fonction', retest: 'd-fonction' },
  { id: 'image-au-pied-de-la-lettre', description: 'Reads an analogy literally or beyond its compared feature, takes its stated limit for a retraction, or reads a turning last line as a summary.', detectOn: ['a6-tester', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-image', retest: 'd-image' },
  { id: 'source-mal-lue', description: 'Misses the writer’s stance toward a source: treats a corrected misquotation as a refutation, or a partial concession as full agreement.', detectOn: ['a7-trier', 'a7-ecoute', 'a7-check', 'a12-mission'], drill: 'd-sources', retest: 'd-sources' },
  { id: 'presuppose-accepte', description: 'Accepts what a question, a definite article, a change-of-state verb or a factive verb takes for granted, or confuses presupposition with implication.', detectOn: ['a8-test', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-presuppose', retest: 'd-presuppose' },
  { id: 'ironie-sans-indice', description: 'Misses echo irony and mock modesty, or sees irony where no textual cue contradicts the sentence.', detectOn: ['a9-degre', 'a9-erreurs', 'a9-check'], drill: 'd-ironie', retest: 'd-ironie' },
  { id: 'agent-oublie', description: 'Repeats an agentless passive, nominalisation or impersonal il as a neutral event, or accuses the writer of intent instead of describing the effect.', detectOn: ['a10-retrouver', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-agent', retest: 'd-agent' },
  { id: 'distracteur-choisi', description: 'Picks an exam option that overstates, gives the topic, is true but secondary, or states the opposing camp.', detectOn: ['a11-items-a', 'a11-items-b', 'a11-check'], drill: 'd-examen', retest: 'd-examen' },
  { id: 'analyse-incomplete', description: 'Writes a summary instead of an analysis: no scope, no concession, no presupposition, no omission, no stance toward the sources.', detectOn: ['a12-tribune', 'a12-cheat', 'a12-mission'], drill: 'd-analyse', retest: 'd-analyse' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-charpente', 'Concéder, restreindre, la portée', ['ce que tu sais déjà', 'accorder et restreindre', 'les réglages de la portée'], [
    teach('sheet-charpente-teach', 'La charpente de l’essai',
      `${Cap(CRITIQUE_REF)} t’a appris à trouver la thèse après la concession : « ${B224_REFRAME} » Au C1, regarde la concession elle-même. Ce que l’auteur accorde, il le garde ; ce qu’il restreint, il le limite sans le nier ; et sa conclusion a une portée exacte, qu’un résumé ne doit ni grossir ni affaiblir. EN: Granted stays granted; restricted is limited; a conclusion has an exact scope.`),
    table('sheet-charpente-charnieres', 'Les charnières', ['Pour accorder', 'Pour restreindre', 'Exemple'], [
      ['certes', 'mais, pourtant', 'Certes, aménager une salle coûte cher. Encore faudrait-il…'],
      ['c’est exact, j’en conviens', 'reste que', 'C’est exact. Reste qu’un lieu qui accueille tout le monde…'],
      ['sans doute (= probablement)', 'il n’en demeure pas moins que', 'Sans doute la demande est-elle difficile à mesurer.'],
      ['il est vrai que', 'toujours est-il que', 'Toujours est-il que la salle était pleine en avril.'],
      ['dira-t-on, je l’accorde', 'l’essentiel n’en sort pas entamé', 'Je l’accorde sans peine. L’essentiel n’en sort pas entamé.'],
      ['admettons, mettons que', 'encore faut-il que', 'Encore faut-il s’entendre sur ce que l’on reproche.'],
    ]),
    table('sheet-charpente-portee', 'Les réglages de la portée', ['Ce qu’on règle', 'Marques', 'Trop fort si…', 'Trop faible si…'], [
      ['le domaine', 'ne… que, seulement, dans le cas de', 'on l’étend à tout', 'on le réduit à un détail'],
      ['le nombre', 'certains, la plupart, tous', 'la plupart devient tous', 'la plupart devient quelques-uns'],
      ['la force', 'peut, tend à, doit, prouve', 'peut devient fait', 'net devient parfois'],
      ['la condition', 'si, sauf si, dès que, à condition que', 'on supprime la condition', 'on en ajoute une'],
      ['la négation', 'pas tous, pas toujours, pas seulement', 'pas tous devient aucun', 'pas seulement devient pas'],
      ['l’objet', 'non pas… mais, moins… que', 'on garde la mauvaise cible', 'on perd la vraie cible'],
    ]),
  ]),
  sheet('sheet-fonctions', 'Le désaccord, les paragraphes, les images', ['l’objet réel du désaccord', 'les fonctions d’un paragraphe', 'l’analogie et la chute'], [
    teach('sheet-fonctions-teach', 'Ce que fait un texte, et pas seulement ce qu’il dit',
      'Un désaccord a un objet déclaré et parfois un autre objet, réel : un mot, une valeur, qui décide. Un paragraphe a un contenu et une fonction. Une analogie compare un trait, et cesse de marcher quelque part. Une chute résume, retourne, ouvre ou ironise. À l’examen, ces questions se répondent par un verbe. EN: Answer « what does it do » questions with a verb.'),
    table('sheet-fonctions-desaccord', 'Sur quoi porte un désaccord', ['Objet', 'Indice', 'Exemple'], [
      ['les faits', 'des chiffres différents', 'Elle dit 8 %, il dit 3 %.'],
      ['un mot', 'le même mot, deux sens', 'Ils ne donnent pas le même sens au mot « soigné ».'],
      ['une valeur', 'mêmes faits, jugements opposés', 'D’accord sur les chiffres, pas sur ce qu’ils valent.'],
      ['qui décide', 'même but, autre arbitre', 'Tous deux veulent un parc, pas le même décideur.'],
    ]),
    table('sheet-fonctions-paragraphes', 'Les fonctions d’un paragraphe', ['Fonction', 'Signal', 'Réponse à l’examen'], [
      ['poser le constat', 'un chiffre, « on constate »', 'Il pose le constat de départ.'],
      ['délimiter l’objet', 'encore faut-il s’entendre, en réalité', 'Il précise ce qu’on reproche vraiment.'],
      ['illustrer', 'prenons un cas, ainsi', 'Il illustre la thèse par un exemple.'],
      ['se faire une objection', 'on objectera, dira-t-on', 'Il s’objecte une critique et en limite la portée.'],
      ['écarter un contresens', 'qu’on ne s’y trompe pas, il ne s’agit pas de', 'Il écarte une lecture fausse de sa thèse.'],
      ['élargir', 'la question dépasse, d’ailleurs', 'Il étend la thèse à d’autres domaines.'],
      ['conclure, retourner', 'donc, au fond, une dernière phrase brève', 'Il retourne la promesse du début.'],
    ]),
    table('sheet-fonctions-images', 'L’analogie et la chute', ['Question', 'Ce qu’on cherche'], [
      ['Que compare l’analogie ?', 'le trait commun, pas tout'],
      ['Où l’image cesse-t-elle de marcher ?', 'la limite, que l’auteur dit parfois lui-même'],
      ['Que transporte-t-elle ?', 'un jugement : une sonnette dérange, une lettre attend'],
      ['Que fait la dernière phrase ?', 'résumer, retourner une promesse, ouvrir, ironiser'],
    ]),
  ]),
  sheet('sheet-voix', 'Les sources et l’ironie', ['six postures face à une source', 'l’ironie au C1'], [
    teach('sheet-voix-teach', 'Qui parle dans le texte, et comment l’auteur le reçoit',
      'Un essai cite des études, des experts, l’autre camp. Les mots qui entourent la citation disent ce que l’auteur en fait. L’ironie, elle, fait parler une voix qu’on ne prend pas à son compte : l’écho reprend les mots de l’autre pour les vider. Dans les deux cas, la preuve est dans le texte. EN: The words around a quotation show the stance; irony echoes another voice to empty it.'),
    table('sheet-voix-postures', 'Six postures face à une source', ['Posture', 'Signal', 'Exemple'], [
      ['s’appuyer', 'comme le montre, selon (sans distance)', 'Comme le montre la synthèse, la durée ne compte pas.'],
      ['corriger un usage', 'la source dit en réalité', 'La synthèse dit en réalité autre chose.'],
      ['donner raison et tort', 'a raison de…, a tort de…', 'Ses auteurs ont raison de s’attaquer au mythe de la quantité.'],
      ['accorder en partie', 'l’argument est sérieux, mais', 'L’argument est sérieux, et je le partage en partie.'],
      ['réfuter', 'c’est aller vite, rien ne permet de', 'C’est aller un peu vite.'],
      ['retourner un camp', 'même… reconnaît', 'Même les défenseurs les plus fervents le reconnaissent.'],
    ]),
    table('sheet-voix-ironie', 'L’ironie au C1', ['Procédé', 'Exemple', 'L’indice'], [
      ['l’écho', 'J’ai donc appelé, en adhérente centrée.', 'le mot vient de la note de la direction'],
      ['l’éloge impossible', 'une musique que j’ai eu tout le loisir d’apprécier', 'quarante minutes d’attente'],
      ['la fausse modestie', 'Je ne voudrais pas paraître ingrate.', 'elle n’a aucune raison d’être reconnaissante'],
      ['la feinte indulgence', 'Le vocabulaire est en avance sur les faits.', 'l’excuse est elle-même une critique'],
      ['l’ironie comme sujet', 'À l’écrit, l’ironie n’a que les mots.', 'le texte parle de l’ironie, sans en faire'],
      ['le premier degré', 'Passez à l’agence tant qu’elle est ouverte.', 'rien ne contredit la phrase'],
    ]),
  ]),
  sheet('sheet-implicite', 'Ce que la grammaire tient pour acquis', ['les déclencheurs du présupposé', 'le test de la négation', 'l’agent caché'], [
    teach('sheet-implicite-teach', 'Présupposé, sous-entendu, agent caché',
      `Un présupposé est écrit dans la grammaire : il survit à la négation et à la question. Un sous-entendu se déduit, et se dément. ${Cap(CRITIQUE_REF)} cherchait l’idée qu’un argument suppose : c’est un sous-entendu. Enfin, le passif, la nominalisation et « on » peuvent cacher qui agit : ${PASSIF_REF} et ${NOMINALISATION_REF} t’ont donné ces formes. EN: Presuppositions are marked and survive negation; implications are inferred; passives can hide the agent.`),
    table('sheet-implicite-declencheurs', 'Les déclencheurs du présupposé', ['Déclencheur', 'Exemple', 'Ce qui est présupposé'], [
      ['l’article défini', 'la crise de la lecture', 'qu’il existe une crise'],
      ['ne… plus', 'Les jeunes ne lisent plus.', 'qu’ils lisaient avant'],
      ['cesser de, arrêter de', 'La ville a cessé de financer le festival.', 'qu’elle le finançait'],
      ['encore, de nouveau, re-', 'Le chantier a encore pris du retard.', 'qu’il en avait déjà pris'],
      ['aussi, même', 'Elle aussi a démissionné.', 'que quelqu’un d’autre l’a fait'],
      ['regretter, savoir, découvrir que', 'Il regrette que l’équipe ait manqué l’objectif.', 'que l’objectif a été manqué'],
      ['pourquoi, depuis quand', 'Pourquoi les jeunes ne lisent-ils plus ?', 'tout ce que la question affirme'],
    ]),
    table('sheet-implicite-test', 'Le test de la négation', ['Phrase', 'Sa négation', 'Ce qui survit'], [
      ['Paul a cessé de fumer.', 'Paul n’a pas cessé de fumer.', 'Paul fumait : un présupposé'],
      ['Elle sait que le musée est fermé.', 'Elle ne sait pas que le musée est fermé.', 'le musée est fermé : un présupposé'],
      ['Elle croit que le musée est fermé.', 'Elle ne croit pas que le musée soit fermé.', 'rien : croire n’est pas factif'],
      ['Il est déjà 22 heures.', 'Il n’est pas encore 22 heures.', 'rien : « tu devrais partir » était un sous-entendu'],
    ]),
    table('sheet-implicite-agent', 'Six façons de cacher qui agit', ['Procédé', 'Exemple', 'Question à poser'], [
      ['le passif sans agent', 'Les sorties sont suspendues.', 'suspendues par qui ?'],
      ['la nominalisation', 'Une réévaluation a été effectuée.', 'qui a réévalué ?'],
      ['le il impersonnel', 'Il a été jugé préférable de…', 'jugé par qui ?'],
      ['on', 'On a décidé de fermer la piscine.', 'qui est ce « on » ?'],
      ['le sujet abstrait', 'La situation impose des choix.', 'qui fait les choix ?'],
      ['le pronominal passif', 'La décision s’est prise vite.', 'prise par qui ?'],
    ]),
  ]),
  sheet('sheet-epreuve', 'L’épreuve et l’analyse', ['le format TCF et TEF', 'les quatre distracteurs', 'le plan de l’analyse'], [
    teach('sheet-epreuve-teach', 'Ce que demande la compréhension écrite C1',
      'Les deux épreuves sont longues : 39 questions en 60 minutes au TCF Canada, 40 au TEF Canada, de difficulté croissante. Dans nos épreuves blanches, la partie C1 donne deux textes d’environ 300 mots (quatre questions puis trois, en douze minutes) ou un article de huit questions. On te demande la thèse exacte, ce que l’auteur concède, l’objet réel d’un débat, ce que fait un passage, sa posture face à une source, le sens d’une chute. EN: The real papers run 39 or 40 items in 60 minutes; our mock C1 part has two essays with four and three items, or one article with eight.'),
    table('sheet-epreuve-distracteurs', 'Les quatre distracteurs', ['Famille', 'Ce qu’elle fait', 'Comment l’écarter'], [
      ['l’exagération', 'dit la même chose, en plus fort', 'compare le nombre, la force, la condition'],
      ['le sujet pour la thèse', 'parle du thème, pas de ce qu’en dit l’auteur', 'cherche le verbe qui prend position'],
      ['vrai mais secondaire', 'est dans le texte, ne répond pas', 'relis la question, pas le texte'],
      ['l’autre camp', 'donne la position que l’auteur combat', 'cherche qui parle : on objectera, certains'],
    ]),
    table('sheet-epreuve-plan', 'Le plan de ton analyse', ['Étape', 'Formules'], [
      ['la thèse, à sa portée', 'L’auteur soutient que… à condition que…'],
      ['la concession et la restriction', 'Il concède que… ; il n’en conteste pas moins…'],
      ['un présupposé', 'Sa question tient pour acquis que…'],
      ['une omission', 'Le texte ne dit rien de…'],
      ['la posture face aux sources', 'Il fait dire à l’enquête plus qu’elle ne dit.'],
      ['la conclusion', 'Au total, l’idée mérite d’être discutée, mais…'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-20-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c1-20-avis': 'The ratings essay (act 1), ONE VOICE, one take, standard France French, the even pace of an essay read aloud on a culture programme, not slowed. « C’est exact, et c’est précisément le problème » at ordinary weight; the final paragraph with no emphasis on « Je ne propose pas »: the learner must find the scope in the words.',
  'rec-c1-20-biblio': 'The librarian’s tribune (act 2), ONE VOICE, one take, a man in his fifties, Québec French, reading his own piece, warm and firm. The hinges (« C’est exact. Reste que », « Certes », « Encore faudrait-il », « Sans doute », « Il n’en demeure pas moins ») at exactly the pace of the rest.',
  'rec-c1-20-charniere': 'The four hinge cards, read plainly. Card one: a clear stop after « C’est exact. ».',
  'rec-c1-20-piege-charpente': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-20-ecran': 'The screen-reading chronicle (act 3), ONE VOICE, one take, a woman columnist, France French, brisk and precise. Figures in full (« deux mille trois cents »). « Pas davantage. » as a short, dry answer, not stressed.',
  'rec-c1-20-piege-portee': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. The negations at ordinary weight: no stress on « pas », « que » or « seulement ».',
  'rec-c1-20-pelouse': 'The lawn chronicle (act 4), ONE VOICE, one take, a Québec woman columnist, amused and even. « Prairie en cours. » read as a sign, flat. No emphasis on « en réalité »: the turn is in the words.',
  'rec-c1-20-objets': 'The four cards on the object of a disagreement, read plainly.',
  'rec-c1-20-terrasses': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, THREE VOICES, in authored order, as a local radio segment. Lines 1 and 8: the host, neutral. Lines 2, 4 and 7: a resident, a man in his thirties, calm. Lines 3, 5 and 6: the café owner (« la patronne du café »), a woman, quick and firm. No line may signal the real object by tone; the learner hears it in the words. Successive turns, no overlap.',
  'rec-c1-20-musee': 'The museum essay (act 5), ONE VOICE, one take, a man, France French, the measured pace of an essay. Say the paragraph numbers (« un », « deux »…) as brief labels before each paragraph, with a pause after each.',
  'rec-c1-20-notif': 'The doorbell billet (act 6), ONE VOICE, one take, a man in his thirties, wry but never laughing. The last two sentences slightly slower, with no special emphasis on « visiteurs ».',
  'rec-c1-20-roles': 'The four cards on analogy and closing lines, read plainly.',
  'rec-c1-20-devoirs': 'The homework tribune (act 7), ONE VOICE, one take, a woman teacher, warm and precise. Quotations (« aucun effet mesurable », « la première injustice scolaire ») with the slight lift a reader gives a quotation, no more. The final « si. » short and clear.',
  'rec-c1-20-chronique-sante': 'REQUIRED FOR THE EAR MISSION (act 7): eight lines, ONE TAKE, ONE VOICE, in authored order, a radio health columnist, lively but even. The stance lives in the WORDS (or, ont raison, ont tort, même, va plus loin): no sceptical tone on any line. « révolution » with the light lift of a quotation.',
  'rec-c1-20-question': 'The essay on the reading question (act 8), ONE VOICE, one take, a man, West African or France French, calm and exact. The title question read as a real question; « plus » in « Le petit mot « plus » » said as a quoted word, /plys/.',
  'rec-c1-20-declencheurs': 'The four presupposition cards, read plainly. Card four with a real question intonation.',
  'rec-c1-20-piege-presuppose': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace, with no stress on the trigger word (encore, cessé, aussi, regrette, sait): the learner must find it.',
  'rec-c1-20-pole': 'The insurer billet (act 9), ONE VOICE, one take, a Québec woman in her forties reading her own billet, DEADPAN throughout: the irony lives in the words, never in a laugh or a sigh. The adviser’s quoted sentence in a lower, sincere voice; the last two sentences plainly.',
  'rec-c1-20-signaux': 'The four irony cards, read deadpan, with no ironic intonation: the cue is in the text.',
  'rec-c1-20-ironie-ecrit': 'REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, ONE VOICE, in authored order, a radio chronicler talking ABOUT irony, entirely serious and warm. « Merci pour ta rapidité » read flat, as a quoted message: the chronicler is not being ironic.',
  'rec-c1-20-sorties': 'The school-email chronicle (act 10), ONE VOICE, one take, a Québec woman columnist, precise and calm. The quoted email phrases with the slight lift of a quotation; the rewritten sentence with an agent read a touch more firmly.',
  'rec-c1-20-piege-agent': 'The audio step plays each card’s CORRECT sentence (the original agentless phrasing). Read the six plainly, in the flat tone of an administrative message.',
  'rec-c1-20-epreuve': 'The two exam documents (act 11), ONE VOICE, one take, read like an exam audio script: even, clear, standard French, no performance. Say « Document 1 » and « Document 2 » as labels, with a two-second pause between documents.',
  'rec-c1-20-familles': 'The four distractor cards, read plainly.',
  'rec-c1-20-cuisine': 'THE TASK TRIBUNE (act 12), ONE VOICE, one take, a confident man in his forties, a chef pitching an idea he believes in. Self-assured throughout; « l’ampleur du désastre » and « Qui pourrait s’y opposer ? » said as he would say them, with no mockery from the reader: the learner must find the weaknesses in the words.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 20',
  intro: 'At B2 you learned to judge a text: its thesis, its evidence, its tone. At C1 the exams and the essays you read ask for more: what a text does without saying it, and exactly how far it goes. This lesson holds twelve essays up to the light: it follows concession then restriction, keeps a conclusion at its exact scope, finds the real object of a disagreement, names what a paragraph, an analogy or a final line is doing, reads a writer’s stance toward a source, brings out what the grammar presupposes, proves irony from a cue and finds the agent behind a passive. It ends with a 250 to 400 word analysis of an opinion piece.',
  skill: 'CE',
  grammarAssumed: [CRITIQUE_UNIT, LECTURE_B1_UNIT, CONCESSION_B2_UNIT, ARGUMENTATION_UNIT, NOMINALISATION_UNIT, PASSIF_UNIT],
  grammarIntroduced: [
    'Concession then restriction as the backbone of essay prose (c’est exact / reste que, certes / encore faut-il, sans doute / il n’en demeure pas moins), granting a fact while refusing its conclusion, and sans doute as a concession, not a certainty',
    'The exact scope of a conclusion: domain (ne… que), quantity (certains, la plupart, tous), strength (peut, tend à), condition (sauf si), partial negation (tous… ne… pas, pas toujours, pas seulement, non pas… mais), rejecting both the stronger and the weaker paraphrase',
    'The stated vs the real object of a disagreement (facts, the meaning of a word, a value, who decides); the function of a paragraph, of an analogy and of a closing line; the writer’s stance toward a source',
    'Grammatical presupposition (definite article, ne… plus, cesser de, encore, aussi, factive verbs, the presupposing question) and the negation test; présupposé vs sous-entendu',
    'Irony at C1 (echo, impossible praise, mock modesty, irony as a topic) always proved by a textual cue; the hidden agent (agentless passive, nominalisation, on, impersonal il, abstract subject); TCF and TEF Canada CE C1 items and their four distractor families; the written analysis of an opinion piece',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B2, tu as appris à juger un texte. Au C1, il faut lire ce qu’il fait sans le dire, et jusqu’où il va exactement. Cette leçon tient douze essais devant la fenêtre : elle suit la concession et la restriction, garde une conclusion à sa portée exacte, trouve le vrai objet d’un désaccord, nomme ce que fait un paragraphe, une image ou une chute, lit la posture de l’auteur face à ses sources, fait apparaître ce que la grammaire présuppose, prouve l’ironie par un indice et retrouve l’agent caché. À la fin, tu écris l’analyse d’une tribune, de 250 à 400 mots.',
    minutes: 180,
    difficulty: 5,
    glyph: 'filigrane',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: LIRE_ENTRE_LES_LIGNES_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, CUISINE_TEXT };
export const lessonWithoutTask = (): Lesson => LESSON;
