// c1.08.l1 « Persuader » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (decision 18:
// original texts only). Structural model: b2.23 « Argumenter »
// (`../b2/argumentation-*`); C1 voice and helpers as c1.24
// (`./analyse-presse-*`).
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (a speech, a
//   leaflet or an op-ed of one neighbourhood’s participatory-budget campaign,
//   original, 230 to 300 words; act 4’s is a listening) and ONE MOVE, in the
//   same beats:
//
//     1. MEET THE TEXT     a `reading` (questions behind `questionsInModal`;
//                          the FIRST is always « Devine le sens », the
//                          glossary keeps one entry) or, in act 4, a
//                          one-take `listening`.
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable` or `examples`, linked to a
//                          sheet.
//     3. JUDGE IT          « est-ce loyal ? » on NEW material: a groupDrill
//                          whose last page is always the lesson’s test (would
//                          the move still work once named?), then a trapDrill,
//                          a commonErrors or a listening.
//     4. USE IT            « Pour ton plaidoyer », always the same groupDrill
//                          shape: the fair version of the move for the final
//                          task against the version that cheats.
//
//   then the act check (control pages, gated). Act 1 is the problem scene
//   and the recap; act 12 is the production act.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le discours qui marche     6  Joëlle’s speech for the pool (scene,
//       trop bien                     reading) · a speech that moves and
//                                     proves little; recap of b2.23, b2.24,
//                                     b2.26 act 9 and b2.16 by trail position
//    2  L’ethos                    6  Armelle presents herself · credibility
//                                     earned or borrowed
//    3  Le logos                   6  Théo’s note for the repair workshop ·
//                                     checkable reasons, the declared
//                                     assumption, rule / cases / consequences
//    4  Le pathos                  6  Joëlle on the radio (one-take
//                                     listening) · emotion in proportion, or
//                                     in place of the facts
//    5  L’autorité et l’expertise  6  two leaflets on Sunday opening · field,
//                                     name, method, who pays, consensus
//    6  L’analogie                 6  Rémi’s op-ed · the shared feature that
//                                     counts; answering an analogy
//    7  Les mots qui cadrent       6  two leaflets and a neutral note on the
//                                     bike shelter · the word that concludes,
//                                     gain and loss frames
//    8  La question rhétorique     6  Nadège’s speech; a radio debate
//                                     (listening) · recognise and PRODUCE
//    9  Anaphore et gradation      6  Samir’s speech for the garden
//   10  La prétérition             6  Gilles’s speech for the pool
//   11  L’objection prévenue       6  Maud’s op-ed for the bike shelter
//   12  Ton plaidoyer             11  the dossier · plan, role play, TASK,
//                                     quiz, review
//
//   TOTAL 77 missions, 12 acts (6 × 11, then 11). Corpus: 178 authored rows
//   (.1000-.1177) in twelve blocks plus 28 reused rows (19 in seedPlusPacks,
//   9 Postgres-only in PG_ROWS; see the corpus header §A.3). 11 readings
//   (acts 1-3 and 5-12) and 2 listenings (acts 4, 8). Quiz: 11 rounds of 8.
//   Eleven error triggers, eleven drills, five reference sheets, twelve
//   terms, three tapTables. Chapter artwork: `persuader-image-prompts.md`,
//   12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un procédé loyal résiste quand on le nomme. »
//   EN: A fair move still works once you name it.
//
//   ONE METAPHOR, THE LAMP: naming a move is turning on a lamp over it; a
//   solid object keeps its shape, a cut-out goes see-through. It is NOT
//   « rhetoric is manipulation » (every act shows a fair version that
//   persuades better) and NOT « avoid emotion and figures » (act 4’s fair
//   appeal, act 9’s fair anaphora).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    ethos / logos / pathos named and judged; authority vs expertise;
//           analogy as an argument; framing and loaded wording IN ARGUMENT;
//           the rhetorical question (recognised and produced); anaphore,
//           gradation and prétérition as persuasive figures; the pre-empted
//           objection in writing (« on m’objectera que », « d’aucuns diront
//           que », « vous me direz que »); the plaidoyer that names its own
//           moves.
//   QUOTES  b2.23’s, b2.24’s and b2.16’s reframes (act 1), c1.24’s neutral-
//           word row (act 7), each imported, never retyped.
//   LEAVES  thesis, plans and the six fallacies to b2.23 (cited in acts 1,
//           10, 11); reading a claim against its proof and « who paid? » to
//           b2.24 (acts 1, 5); naming the objection orally to b2.26 (acts 1,
//           11); concession forms to b2.16; press framing to c1.24 (act 7);
//           the presupposing question and what an analogy does in a text to
//           c1.20 (acts 6, 8); an objection heard in a debate to c1.21 (act
//           11); literary effect of figures to a later C1 lesson (never cited
//           on screen); politeness hedges in speech to c1.06 (none used).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs (a public
//   meeting: vous). Natural, unsimplified C1 French; English authored on
//   every learner string (`en`, or a final « EN: »), and never on an answer.
//   Every `say` is French. Citations by trail position in French, never a
//   raw id. Typographic ’ in every authored French string. Judge-first: every
//   device is shown with « est-ce loyal ? ». Figure items are built with ONE
//   defensible label (the sentence carrying both anaphore and gradation is
//   used only where the question asks for both). Mission answer slots are
//   spread by `balanceSlots()` (options and index rotated together, no text
//   changed); the quiz by `spreadSlots()`; no `why` names a position.
//   Invented people, places and associations only; low-heat topics only
//   (corpus header §A.6, §A.8). No historical speech (decision 18).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Topics: one neighbourhood’s participatory budget and five projects
//      (pool renovation, shared garden, Sunday library, repair workshop,
//      bike shelter). Approve?
//   2. Decision 18 applied strictly: no historical oratory at all, Aristotle
//      and Fontanier named for concepts only (sheet-preuves, sheet-figures,
//      term `ethos`). Keep?
//   3. Nine reused rows are Postgres-only (PG_ROWS): seven legacy rhetorique
//      rows and fr.b2.litterature.063 / .074. Four need the decision 13
//      typography edit at import (.095, .136, .138, b2.litterature.074).
//      Accept, or swap for authored rows?
//   4. The legacy rhetorique rows carry drills {sentence, review}: named in
//      missions, never released to the deck (NOT_DECK_ABLE). Fine?
//   5. Spelling « l’ethos » (no accent), as French rhetoric usually writes
//      it; « éthos » is accepted by the quiz. Keep?
//   6. The roundup names « la leçon 9 du C1 » (c1.09, same wave) as what
//      comes next, as the playbook asks. If c1.09 slips out of wave 3, that
//      sentence must go (constant EXPOSE_REF_PLANNED).
//   7. Rubric: six criteria, 20 points, as c1.24, with « procédés nommés et
//      jugés » as its own criterion. Keep the grid?
//   8. The task prints the dossier twice (reading and brief): no `source`
//      field on `task`, as in c1.24. Accept again?
//   9. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, RH, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS,
  JOELLE_TEXT, ETHOS_TEXT, LOGOS_TEXT, TRACTS_TEXT, ANALOGIE_TEXT, CADRAGE_TEXT,
  QUESTION_TEXT, FIGURES_TEXT, PRETERITION_TEXT, OBJECTION_TEXT, DOSSIER_TEXT,
  B223_REFRAME, B224_REFRAME,
  ARGU_UNIT, CRITIQUE_UNIT, NEGO_UNIT, CONCESSION_UNIT, PRESSE_UNIT,
  ARGU_REF, CRITIQUE_REF, NEGO_REF, CONCESSION_REF, PRESSE_REF, LIGNES_REF, DEBATS_REF,
} from './persuader-corpus.ts';
import { PERSUADER_TERMS } from './persuader-terms.ts';

/** What comes next on the trail (c1.09, written in the same wave). Not in
 *  the seed yet, so typed from the plan. TODO(import): drop if c1.09 slips. */
const EXPOSE_REF_PLANNED = 'la leçon 9 du C1';

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
  if (!r) throw new Error(`c1.08: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.08: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.08: no authored respell on ${id}`);
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

/** THE « USE IT » BEAT: the act's one tool for the graded plaidoyer. */
function pourTonPlaidoyer(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton plaidoyer', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE DISCOURS QUI MARCHE TROP BIEN
 *
 *  The problem: a neighbourhood meeting applauds Joëlle’s speech for the
 *  pool, and the learner must write the one-line summary residents will
 *  read before voting. Then the recap of the lessons this one builds on, by
 *  trail position, with their rows reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une phrase pour le compte rendu', frSub: 'Le conseil de quartier des Tanneurs',
  setting: { place: 'La salle des fêtes de Combelune', city: 'Combelune', time: '20 h 15', ambience: 'des chaises pliantes, une centaine d’habitants, des applaudissements qui ne s’arrêtent pas' },
  beats: [
    { kind: 'narration', text: 'Mardi soir, à la salle des fêtes de Combelune. Le quartier des Tanneurs vote bientôt son budget participatif. Joëlle Marchetti, maître-nageuse, vient de défendre la rénovation de la piscine. La salle applaudit longtemps.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Bastien, ton voisin au conseil', fr: 'C’était magnifique. Je propose qu’on vote la piscine tout de suite.', en: 'That was magnificent. I suggest we vote for the pool right away.', respell: '[say-teh ma-nyee-FEEK zhuh pro-POZ kohⁿ vot la pee-SEEN toot SWEET]', stage: 'Il applaudit encore.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Attends. Je dois d’abord résumer son discours pour le compte rendu.', en: 'Wait. I first have to sum up her speech for the minutes.', respell: '[a-TAHⁿ zhuh dwa da-bor ray-zü-MAY sohⁿ dees-KOOR poor luh kohⁿt rahⁿ-DÜ]', stage: 'Tu tiens le stylo du secrétaire de séance.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Nora, la coordinatrice', fr: 'Une seule phrase, s’il te plaît. Elle partira ce soir chez tous ceux qui votent en ligne.', en: 'Just one sentence, please. It goes out tonight to everyone who votes online.', respell: '[ün suhl FRAHZ seel tuh PLEH el par-tee-RA suh SWAR shay too seu kee vot ahⁿ LEENY]', stage: 'Deux mille habitants la liront sans avoir entendu le discours.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase écris-tu dans le compte rendu ?', size: 'lg',
      options: [
        { fr: src(E(1000)).fr, respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1001)).fr, respell: rsOf(E(1001)), en: src(E(1001)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Nora ajoute tes deux raisons à la phrase : les quarante minutes de car et l’état des vestiaires. Les habitants voteront sur des raisons, et chacun pourra les vérifier.',
        breaks: 'Deux mille habitants lisent « elle nous a tous émus ». Ceux qui n’étaient pas là ne savent toujours pas pourquoi voter pour la piscine, ni pourquoi s’en méfier.',
      },
    },
    {
      kind: 'break', heading: 'Un discours qui émeut ne prouve pas forcément',
      body: `${Cap(CRITIQUE_REF)} disait : « ${B224_REFRAME} » À l’oral, la voix et les applaudissements s’en mêlent. Joëlle a de vraies raisons, et aussi des procédés : sépare-les. EN: Separate the reasons from the devices.`,
      wrong: { fr: src(E(1000)).fr, ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en },
      right: { fr: src(E(1001)).fr, ipa: ipaOf(E(1001)), respell: rsOf(E(1001)), en: src(E(1001)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à reconnaître chaque procédé de persuasion, à le nommer, et à juger s’il est loyal. À la fin, tu écriras ton propre plaidoyer pour un projet du quartier, et tu nommeras toi-même tes procédés.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['loyal', 'pathos'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Nommer les trois preuves', s: 'Actes 2 à 4 : l’ethos, le logos, le pathos' },
    { t: 'Juger un appui', s: 'Actes 5 à 7 : l’autorité, l’analogie, les mots qui cadrent' },
    { t: 'Reconnaître et manier quatre figures', s: 'Actes 8 à 10 : la question, l’anaphore, la gradation, la prétérition' },
    { t: 'Écrire un plaidoyer loyal', s: 'Actes 11 et 12 : l’objection prévenue, puis ton texte' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le discours de Joëlle', frSub: 'Pour la piscine des Glycines',
  text: JOELLE_TEXT,
  glossary: [
    { word: 'longueurs', en: 'lengths (of a pool)', note: 'Une longueur, c’est traverser le bassin d’un bout à l’autre.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « les carreaux fendus ». Que veut dire « fendus » ?', a: 'Fissurés, cassés d’une ligne : les carreaux sont abîmés.' },
    { q: 'Que dit Joëlle d’elle-même avant d’argumenter, et pourquoi ?', a: 'Qu’elle apprend à nager aux enfants depuis vingt-deux ans : elle se rend crédible avant de parler du projet.' },
    { q: 'Quelle question n’attend aucune réponse ?', a: '« Qui, dans cette salle, accepterait que son enfant ne sache pas nager ? » Elle affirme que personne ne l’accepterait.' },
    { q: 'Peut-on vérifier ce qu’a dit le « grand champion » ?', a: 'Non : il n’a pas de nom. On ne sait ni qui il est, ni sur quoi il s’appuie.' },
    { q: 'Quelles raisons peut-on vérifier ?', a: 'L’état des vestiaires, les quarante minutes de car pour vingt minutes dans l’eau, le coût de cent quatre-vingt mille euros.' },
    { q: '« Je ne m’attarderai pas sur l’état des vestiaires. » En parle-t-elle ?', a: 'Oui, aussitôt : les carreaux fendus, les douches froides. Elle dit ne pas en parler, et en parle.' },
  ],
  audio: REC('rec-c1-08-joelle'), say: REFRAME, terms: ['loyal', 'pathos'],
};

/** The recap: one group per lesson it builds on, rows reused by id. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Quatre leçons du B2, un rappel',
  groups: [
    grp(Cap(ARGU_REF), [
      it('fr.b2.opinions-et-avis.1611', 'l’opinion et l’argument'),
      it('fr.b2.opinions-et-avis.1774', 'contre l’attaque personnelle'),
      it(RH(95), 'un sophisme que tu connais'),
    ], chk('Au B2, une opinion devenait un argument grâce à...', ['une raison, et souvent un exemple', 'un ton plus assuré'], 0,
      `${Cap(ARGU_REF)} disait : « ${B223_REFRAME} » Elle t’a aussi donné six sophismes. Cette leçon juge les procédés qui entourent l’argument. EN: now you judge the moves around the argument.`)),
    grp(Cap(CRITIQUE_REF), [
      it('fr.b2.strategies-de-comprehension.1412', 'comprendre, puis juger'),
    ], chk('Devant un texte qui affirme beaucoup, tu as appris à...', ['chercher ce qui le prouve', 'le croire s’il est bien écrit'], 0,
      `« ${B224_REFRAME} » Ici, tu juges un discours entier, et pas seulement ses affirmations. EN: now a whole speech, not only its claims.`)),
    grp(`${Cap(NEGO_REF)} et ${CONCESSION_REF}`, [
      it('fr.b2.affaires.1343', 'nommer l’objection, à l’oral'),
      it('fr.b2.affaires.1360', 'la règle de la négociation'),
      it('fr.b2.connecteurs-logiques.2013', 'concéder, puis maintenir'),
    ], chk('« Je sais ce que tu vas me dire » : que fait l’oratrice ?', ['elle nomme l’objection avant l’autre', 'elle refuse d’écouter'], 0,
      `Tu l’as fait en réunion, avec les formes de concession de ${CONCESSION_REF}. L’acte 11 t’apprendra à le faire par écrit, loyalement. EN: act 11 does it in writing.`)),
    ctl('Ce qui est nouveau', 'Qu’ajoute cette leçon à tout cela ?', ['Rien : c’est la même chose.', 'Un regard de juge sur chaque procédé : est-il loyal ?'], 1,
      'Tu nommes chaque procédé de persuasion et tu demandes s’il tiendrait une fois nommé. EN: name each move and ask if it would survive being named.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal', 'objection'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment', sheetId: 'sheet-loyal',
  cases: [
    { situation: 'Un voisin te tend un tract la veille du vote', fr: src(E(1003)).fr, en: src(E(1003)).en },
    { situation: 'Un discours t’a ému et tu dois voter', fr: src(E(1008)).fr, en: src(E(1008)).en },
    { situation: 'Tu relis ton propre plaidoyer', fr: src(E(1004)).fr, en: src(E(1004)).en },
    { situation: 'Un ami dit qu’émouvoir, c’est déjà tricher', fr: src(E(1011)).fr, en: src(E(1011)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('L’émotion', 'Un discours qui émeut toute la salle...', ['prouve forcément quelque chose', 'peut avoir de vraies raisons, ou n’en avoir aucune'], 1,
    'L’émotion ne dit rien des raisons : il faut les chercher. EN: emotion says nothing about the reasons.'),
  ctl('Le test', 'Comment savoir si un procédé est loyal ?', ['le nommer et voir s’il tient encore', 'compter les applaudissements', 'regarder la longueur du discours'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['un compte rendu de réunion', 'un plaidoyer qui nomme ses propres procédés', 'une lettre de réclamation'], 1,
    'Entre 250 et 400 mots, pour un projet du quartier, avec une objection traitée loyalement. EN: 250 to 400 words, one objection answered fairly.'),
], ['loyal']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le discours qui marche trop bien',
    opener: {
      line: 'Toute une salle applaudit un discours : ici tu découvres qu’émouvoir et prouver sont deux choses, et qu’il faut les séparer. EN: A whole room applauds a speech: here you find that moving and proving are two things, and must be told apart.',
      imageRef: 'lessons/persuader/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sépares les raisons d’un discours de ses procédés, et tu sais quelle question poser à chacun. EN: You can separate a speech’s reasons from its devices, and you know which question to ask each one.',
    estScreens: 34, restPoints: ['a1-lecture', 'a1-rappel'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — L’ETHOS
 *
 *  TEXT: Armelle presents herself before arguing for the shared garden.
 *  MOVE: credibility earned (competence bounded, interest declared, limits
 *  admitted, verification offered) or borrowed (prestige from elsewhere,
 *  flattery, invented unanimity).
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Armelle se présente', frSub: 'Pour le jardin des Tanneurs',
  text: ETHOS_TEXT,
  glossary: [
    { word: 'juger sur pièces', en: 'to judge on the evidence', note: 'Juger après avoir vu soi-même, pas sur parole.' },
  ],
  questions: [
    { q: 'Devine le sens : « des voisins avertis ». Que veut dire « avertis » ici ?', a: 'Informés, capables de juger par eux-mêmes.' },
    { q: 'Que dit Armelle de sa compétence, et de ses limites ?', a: 'Elle jardine depuis douze ans dans les bacs de l’école ; elle n’est ni paysagiste ni urbaniste, et elle n’a pas chiffré l’arrosage.' },
    { q: 'Pourquoi parle-t-elle de son adresse ?', a: 'Pour déclarer son intérêt : elle habite à trente mètres du parking et profitera du jardin la première.' },
    { q: 'Quel conseil refuse-t-elle, et pourquoi ?', a: 'Dire que tout le quartier la soutient : c’est faux, quarante-trois voisins ont signé, et d’autres préfèrent les places de stationnement.' },
    { q: 'Que demande-t-elle au lieu d’être crue sur parole ?', a: 'Que les habitants viennent voir les bacs samedi, parlent aux enfants et jugent sur pièces.' },
    { q: 'La dernière phrase flatte-t-elle l’auditoire ?', a: 'Un peu : elle loue des voisins « avertis » au moment même où elle dit ne pas les flatter. C’est la phrase la moins solide du discours.' },
  ],
  audio: REC('rec-c1-08-ethos'), say: REFRAME, terms: ['ethos', 'loyal'],
};

const A2_ETHOS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-ethos', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-preuves',
  title: 'L’ethos qui se gagne', frSub: 'Quatre gestes d’Armelle',
  hint: 'Quatre cartes. Regarde ce que chaque phrase avoue.',
  audio: AUDIO, say: REFRAME, terms: ['ethos'],
  cards: [
    { head: 'Une compétence bornée', label: 'ce qu’on sait', fr: src(E(1012)).fr, sub: rsOf(E(1012)),
      body: 'Aristote rangeait le caractère de l’orateur parmi les trois preuves. Armelle dit d’où vient son savoir, et jusqu’où il va : jardinière, pas urbaniste. EN: she says where her knowledge comes from and where it stops.' },
    { head: 'Un intérêt déclaré', label: 'ce qu’on gagne', fr: src(E(1013)).fr, sub: rsOf(E(1013)),
      body: 'Elle profitera du jardin la première, et elle le dit avant qu’on le découvre. Un intérêt avoué se pèse ; un intérêt caché trompe. EN: a declared interest can be weighed; a hidden one deceives.' },
    { head: 'Une limite avouée', label: 'ce qu’on ignore', fr: src(E(1014)).fr, sub: rsOf(E(1014)),
      body: 'Dire ce qu’on ne sait pas rend crédible tout le reste. EN: admitting what you do not know makes the rest credible.' },
    { head: 'La vérification offerte', label: 'jugez vous-mêmes', fr: src(E(1015)).fr, sub: rsOf(E(1015)),
      body: 'Elle ne demande pas qu’on la croie : elle invite à vérifier. Nommé, ce geste tient encore. EN: she invites checking; named, the move still holds.' },
  ],
};

const A2_LOYAL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-loyal', layer: 'core', size: 'lg',
  title: 'Est-ce loyal ?', frSub: 'Six orateurs se présentent',
  groups: [
    grp('Trois présentations', [
      it(E(1021), 'pour l’abri à vélos'),
      it(E(1022), 'pour la piscine'),
      it(RH(141), 'face à un adversaire'),
    ], chk('Ces trois phrases rendent l’orateur crédible parce qu’il...', ['dit ce qu’il gagne, ce qu’il ignore ou ce qu’il accorde', 'se présente comme le meilleur'], 0,
      'Il se rend vérifiable au lieu de se grandir. EN: he makes himself checkable instead of bigger.')),
    grp('Trois autres', [
      it(E(1019), 'pour le jardin'),
      it(E(1020), 'pour la médiathèque'),
      it(E(1023), 'pour l’atelier'),
    ], chk('« En tant que mère de famille, je sais ce qui est bon pour la ville. » Ce qui cloche :', ['être mère ne donne aucune compétence sur le budget d’une ville', 'une mère n’a pas le droit de parler du budget'], 0,
      'Elle emprunte un prestige qui ne porte pas sur la question. Elle a tout à fait le droit de parler ; son titre ne prouve rien. EN: borrowed standing, not expertise.')),
    ctl('Le test', '« Je vous flatte un peu, pour que vous m’écoutiez. » Dite ainsi, la flatterie marche-t-elle encore ?', ['Oui, aussi bien.', 'Non : nommée, elle tombe.'], 1,
      `C’est le test de la leçon. ${REFRAME} EN: named, flattery collapses.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ethos', 'loyal'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre ethos qui trichent',
  errors: [
    { wrong: 'Tout le quartier soutient ce jardin.', right: 'Quarante-trois voisins ont signé notre lettre.',
      why: 'Normal : « tout le quartier » sonne plus fort. Mais une unanimité inventée se découvre vite, et tout le discours en souffre. EN: invented unanimity is soon exposed.' },
    { wrong: 'Je jardine depuis douze ans, donc je sais ce que coûtera l’arrosage.', right: 'Je jardine depuis douze ans ; l’arrosage, je laisse les services techniques le chiffrer.',
      why: 'Une vraie compétence ne couvre pas tout. La pousser hors de son domaine, c’est déjà l’emprunter. EN: real competence has limits.' },
    { wrong: 'Je n’ai aucun intérêt dans cette affaire.', right: 'J’habite à côté du parking : j’ai un intérêt, et je vous le dis.',
      why: 'On croit qu’avouer un intérêt affaiblit. C’est le cacher qui ruine la confiance, le jour où on l’apprend. EN: hiding an interest is what ruins trust.' },
    { wrong: 'Vous êtes bien trop intelligents pour voter contre.', right: 'Venez voir les bacs samedi, et jugez sur pièces.',
      why: 'La flatterie fait plaisir et ne prouve rien. Inviter à vérifier respecte l’auditoire pour de bon. EN: flattery pleases; an invitation to check respects.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['ethos', 'loyal'],
};

const A2_PLAIDOYER = pourTonPlaidoyer('a2-plaidoyer', 'Ta première phrase', [
  grp('Deux débuts de plaidoyer', [
    free('Tout le monde ici attend ce projet depuis des années.', 'Everyone here has been waiting for this project for years.', 'une unanimité inventée'),
    it(E(1025), 'd’où tu parles'),
  ], chk('Lequel inspire encore confiance une fois nommé ?', ['« tout le monde attend »', '« je vous dis d’où je parle »'], 1,
    'Dire d’où l’on parle résiste au test ; « tout le monde » ne résiste pas à une seule objection. EN: saying where you speak from survives the test.')),
  grp('Ton intérêt', [
    it(E(1013), 'un intérêt dit tout de suite'),
    it(E(1024), 'la règle'),
  ], chk('Tu habites près du projet que tu défends. Tu...', ['le dis dès le début', 'le caches pour ne pas affaiblir ta thèse'], 0,
    'Ton lecteur l’apprendra de toute façon ; dit par toi, c’est une preuve de bonne foi. EN: said by you, it shows good faith.')),
], ['ethos', 'loyal']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’ethos', 'L’ethos, c’est...', ['la confiance que l’orateur inspire par son discours', 'le nombre de ses diplômes'], 0,
    'Il se construit dans le discours : ce que l’orateur dit de lui et sa façon de parler. EN: built in the speech itself.'),
  ctl('Gagné', 'Lequel gagne la confiance ?', ['déclarer son intérêt', 'flatter la salle', 'inventer une unanimité'], 0,
    'Un intérêt avoué se pèse. EN: a declared interest can be weighed.'),
  ctl('Emprunté', 'Un titre qui ne porte pas sur la question...', ['prouve la compétence', 'est un ethos emprunté'], 1,
    'Le prestige ne se transporte pas d’un domaine à l’autre. EN: prestige does not travel.'),
], ['ethos']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'L’ethos',
    opener: {
      line: 'Armelle commence par dire où elle habite et ce qu’elle ignore : ici tu apprends comment on gagne la confiance, et comment on la vole. EN: Armelle starts by saying where she lives and what she does not know: here you learn how trust is earned, and how it is stolen.',
      imageRef: 'lessons/persuader/act02.jpg',
    },
    sections: [],
    milestone: 'Tu distingues l’ethos qui se gagne de l’ethos emprunté, et tu sais dire d’où tu parles. EN: You can tell earned ethos from borrowed ethos, and you can say where you speak from.',
    estScreens: 34, restPoints: ['a2-ethos', 'a2-erreurs'],
  },
  sections: [A2_LECTURE, A2_ETHOS, A2_LOYAL, A2_ERREURS, A2_PLAIDOYER, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE LOGOS
 *
 *  TEXT: Théo’s note for the repair workshop. MOVE: reasons the audience can
 *  check: the figure and its base, the declared assumption, the admitted
 *  unknown; rule, cases, consequences; does the conclusion follow?
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'La note de Théo', frSub: 'Pour l’Atelier de la Clé',
  text: LOGOS_TEXT,
  glossary: [
    { word: 'déchetterie', en: 'waste collection centre', note: 'Le lieu où l’on apporte les objets et les déchets qu’on ne met pas à la poubelle.' },
  ],
  questions: [
    { q: 'Devine le sens : « chaque appareil qui ne finit pas dans une benne allège cette facture ». Que veut dire « allège » ?', a: 'Rend moins lourde : la facture baisse.' },
    { q: 'Sur quoi repose le chiffre de onze mille euros ?', a: 'Sur une hypothèse que Théo donne : quarante euros en moyenne par appareil neuf, multipliés par 287 réparations.' },
    { q: 'Que reconnaît-il ne pas savoir ?', a: 'De combien baissera la facture de la déchetterie.' },
    { q: 'La dernière conclusion (trois jours par semaine) suit-elle sûrement ?', a: 'Pas sûrement : plus de jours devrait permettre plus de réparations, mais pas forcément en proportion. Théo écrit d’ailleurs « devrait ».' },
    { q: 'Que ne prétend-il pas ?', a: 'Que l’atelier sauvera la planète, ni qu’il remplacera les réparateurs, qui lui envoient des objets.' },
    { q: 'Comment peut-on vérifier ses chiffres ?', a: 'Avec le registre, en annexe : chacun peut le recompter.' },
  ],
  audio: REC('rec-c1-08-logos'), say: REFRAME, terms: ['logos', 'loyal'],
};

const A3_CHEMINS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-chemins', layer: 'core', sheetId: 'sheet-preuves',
  title: 'Six pièces d’un logos loyal',
  cols: ['Pièce', 'Ce qu’elle fait', 'La question à poser'],
  rows: [
    { cells: ['le chiffre et sa base', 'donne une mesure', 'sur combien ?'], say: src(E(1026)).fr,
      detail: { title: 'Le chiffre et sa base', body: 'Deux cent quatre-vingt-sept réparations ne disent rien seules ; sur quatre cent douze objets, c’est sept sur dix. EN: a figure needs its base.', say: src(E(1026)).fr } },
    { cells: ['la règle', 'va de la règle au cas', 'la règle vaut-elle ici ?'], say: src(E(1027)).fr,
      detail: { title: 'La déduction', body: 'Une règle générale appliquée à un cas : si la règle est vraie et le cas bien rangé, la conclusion suit. EN: from a general rule to a case.', say: src(E(1035)).fr } },
    { cells: ['les cas', 'va des cas à la règle', 'combien de cas, lesquels ?'], say: src(E(1035)).fr,
      detail: { title: 'L’induction', body: 'Des cas observés à une règle : elle vaut ce que vaut l’échantillon. Un samedi plein ne fait pas un dimanche plein. EN: from cases to a rule; only as good as the sample.', say: src(E(1033)).fr } },
    { cells: ['les conséquences', 'annonce un effet', 'l’effet est-il montré ?'], say: src(E(1037)).fr,
      detail: { title: 'Le raisonnement par les conséquences', body: 'On défend une mesure par ce qu’elle produira. C’est loyal si le lien est montré, et dosé : « devrait », pas « va ». EN: argue from effects, with the link shown.', say: src(E(1037)).fr } },
    { cells: ['l’hypothèse', 'pose une base de calcul', 'est-elle dite ?'], say: src(E(1036)).fr,
      detail: { title: 'L’hypothèse déclarée', body: 'Quarante euros par appareil : Théo le dit, donc on peut discuter ce prix. Une hypothèse cachée rend le calcul invérifiable. EN: a stated assumption can be discussed.', say: src(E(1028)).fr } },
    { cells: ['la limite', 'dit ce qu’on ignore', 'est-elle avouée ?'], say: src(E(1029)).fr,
      detail: { title: 'La limite', body: 'Avouer une inconnue protège tout le reste du calcul. EN: admitting an unknown protects the rest.', say: src(E(1031)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['logos'],
};

const A3_SUIT: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-suit', layer: 'core', size: 'lg',
  title: 'La conclusion suit-elle ?', frSub: 'Trois raisonnements du quartier',
  groups: [
    grp('Trois raisonnements', [
      it(E(1033), 'pour la médiathèque'),
      it(E(1034), 'contre la piscine'),
      free('Sur 412 objets apportés, 287 ont été réparés : l’atelier sait réparer la plupart des petits appareils qu’on lui confie.', 'Of 412 objects brought in, 287 were repaired: the workshop can repair most of the small appliances it is given.', 'pour l’atelier'),
    ], chk('Lequel tient le mieux ?', ['celui de la médiathèque', 'celui de l’atelier', 'celui de la piscine'], 1,
      'Quatre cent douze cas notés dans un registre : la règle tirée des cas est solide. Un samedi plein ne dit pas le dimanche ; « vieille » ne dit pas « dangereuse ». EN: a large, recorded sample.')),
    grp('Les faits parlent-ils seuls ?', [
      it(RH(127), 'une formule qui efface l’orateur'),
      it(E(1031), 'la version de Théo'),
      it(RH(136), 'ce qui convainc'),
    ], chk('« Ce sont les faits qui parlent, pas moi. » Que lui réponds-tu ?', ['Alors montre-les : des faits ne parlent que si on peut les vérifier.', 'Tu as raison, inutile de vérifier.'], 0,
      'La formule peut cacher un choix de faits. Théo, lui, donne son registre. EN: facts speak only when they can be checked.')),
    ctl('Le test', '« Je retiens quarante euros par appareil, et je vous le dis. » Ainsi nommée, l’hypothèse tient-elle ?', ['Oui : chacun peut la discuter.', 'Non : elle s’effondre.'], 0,
      `Une hypothèse dite résiste au test ; cachée, elle trompe. ${REFRAME} EN: a stated assumption survives being named.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['logos', 'loyal'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true,
  title: 'Six raisons qui n’en sont pas',
  rule: {
    title: 'Une raison se vérifie',
    body: 'Un chiffre a une base, un calcul a une hypothèse, une conclusion a un lien. Ce qu’on ne peut pas vérifier n’est pas encore une raison. EN: a figure has a base, a calculation an assumption, a conclusion a link.',
  },
  cards: [
    { promptLabel: 'un chiffre sans base', promptSound: 'Nous avons réparé 287 objets : c’est énorme.', fr: src(E(1026)).fr, ipa: ipaOf(E(1026)), tip: 'Sur combien ? Sept sur dix, c’est une mesure. EN: give the base.' },
    { promptLabel: 'un calcul sans hypothèse', promptSound: 'L’économie est de onze mille euros, point final.', fr: src(E(1028)).fr, ipa: ipaOf(E(1028)), tip: 'Dis le prix moyen que tu as retenu. EN: state the assumption.' },
    { promptLabel: 'une certitude inventée', promptSound: 'La facture de la déchetterie baissera de moitié.', fr: src(E(1029)).fr, ipa: ipaOf(E(1029)), tip: 'Personne ne le sait encore : dis-le. EN: admit the unknown.' },
    { promptLabel: 'la confiance demandée', promptSound: 'Faites-nous confiance, nos chiffres sont bons.', fr: src(E(1030)).fr, ipa: ipaOf(E(1030)), tip: 'Ne demande pas qu’on te croie : montre le registre. EN: show the register.' },
    { promptLabel: 'les chiffres qui parlent seuls', promptSound: 'Les chiffres parlent d’eux-mêmes.', fr: src(E(1031)).fr, ipa: ipaOf(E(1031)), tip: 'Ils parlent quand on peut les vérifier. EN: they speak when checkable.' },
    { promptLabel: 'une conséquence trop sûre', promptSound: 'Ouvert trois jours, l’atelier réparera six fois plus.', fr: src(E(1037)).fr, ipa: ipaOf(E(1037)), tip: 'Plus de jours, plus de réparations : probable, pas proportionnel. EN: likely, not proportional.' },
  ],
  drill: [
    { promptSay: 'Un chiffre sans sa ... ne prouve rien.', opts: ['base', 'couleur'], correct: 0 },
    { promptSay: 'Aller de la règle au cas, c’est une ... .', opts: ['déduction', 'induction'], correct: 0 },
    { promptSay: 'Aller des cas à la règle, c’est une ... .', opts: ['déduction', 'induction'], correct: 1 },
    { promptSay: 'Une hypothèse loyale est ... .', opts: ['dite', 'cachée'], correct: 0 },
    { promptSay: 'Théo ignore de combien la facture baissera : il le ... .', opts: ['cache', 'dit', 'oublie'], correct: 1 },
    { promptSay: 'Les chiffres ne parlent pas tout seuls, mais ils peuvent être ... .', opts: ['vérifiés', 'répétés'], correct: 0 },
    { promptSay: '« La piscine est vieille, donc dangereuse » : il manque le ... .', opts: ['lien', 'chiffre', 'ton'], correct: 0 },
    { promptSay: 'Une raison vaut ce que vaut sa ... .', opts: ['preuve', 'forme'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une raison se vérifie' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un orateur pressé affirme' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-08-piege-logos'), say: REFRAME, terms: ['logos'],
};

const A3_PLAIDOYER = pourTonPlaidoyer('a3-plaidoyer', 'Tes raisons', [
  grp('Deux raisons pour l’abri à vélos', [
    free('L’abri sera très utile à beaucoup de monde.', 'The shelter will be very useful to many people.', 'une raison vague'),
    free('Soixante vélos sont attachés chaque matin aux grilles ; l’abri en accueillera quarante.', 'Sixty bikes are locked to the railings every morning; the shelter will hold forty.', 'une raison qu’on peut vérifier'),
  ], chk('Laquelle est un logos loyal ?', ['« très utile à beaucoup de monde »', '« soixante vélos, quarante places »'], 1,
    'Un nombre, une source possible, une comparaison : on peut vérifier. EN: a number one can check.')),
  grp('Ton calcul', [
    it(E(1036), 'l’hypothèse donnée'),
    it(E(1039), 'la règle'),
  ], chk('Ton calcul repose sur une hypothèse. Tu...', ['la donnes', 'la gardes pour toi'], 0,
    'Donnée, elle se discute ; cachée, elle rend tout le calcul suspect. EN: stated, it can be discussed.')),
], ['logos', 'loyal']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le logos', 'Le logos, ce sont...', ['les raisons que l’auditoire peut vérifier', 'les belles phrases'], 0,
    'Des faits, des chiffres, un lien jusqu’à la conclusion. EN: checkable reasons.'),
  ctl('L’induction', 'Une règle tirée de quelques cas vaut...', ['ce que vaut l’échantillon', 'toujours, si les cas sont vrais'], 0,
    'Un samedi plein ne fait pas un dimanche plein. EN: only as good as the sample.'),
  ctl('L’hypothèse', 'Un calcul loyal...', ['dit l’hypothèse sur laquelle il repose', 'la cache pour paraître sûr'], 0,
    'Dite, elle se discute. EN: stated, it can be discussed.'),
], ['logos']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le logos',
    opener: {
      line: 'Théo met son registre en annexe et dit le prix qu’il a retenu : ici tu apprends ce qui fait d’un chiffre une raison. EN: Théo puts his register in the appendix and states the price he assumed: here you learn what turns a figure into a reason.',
      imageRef: 'lessons/persuader/act03.jpg',
    },
    sections: [],
    milestone: 'Tu demandes à chaque chiffre sa base, à chaque calcul son hypothèse, à chaque conclusion son lien. EN: You ask every figure for its base, every calculation for its assumption, every conclusion for its link.',
    estScreens: 36, restPoints: ['a3-chemins', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_CHEMINS, A3_SUIT, A3_PIEGE, A3_PLAIDOYER, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE PATHOS
 *
 *  TEXT: Joëlle on Radio Combelune, heard once (the anchor is a listening).
 *  MOVE: emotion in proportion to the facts, leading to them, or in their
 *  place (fear, guilt, « votez avec votre cœur »).
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE EAR MISSION: one take, the appeal heard as it would be on air. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Joëlle à la radio', frSub: 'Radio Combelune, une seule écoute',
  lines: [ln(E(1174)), ln(E(1175)), ln(E(1040)), ln(E(1041)), ln(E(1042)), ln(E(1043)), ln(E(1176)), ln(E(1044)), ln(E(1045)), ln(E(1177)), ln(E(1046)), ln(E(1047)), ln(E(1048)), ln(E(1049))],
  questions: [
    { q: 'Quel passage donne un fait qu’on peut vérifier ?', opts: ['le car : quarante minutes pour vingt dans l’eau', 'l’enfant de huit ans au bord du bassin', 'le vote avec le cœur'], correct: 0,
      why: 'Une durée, un trajet : chacun peut le vérifier. L’enfant au bord du bassin est une image. EN: a duration anyone can check.' },
    { q: 'Un passage joue sur la culpabilité. Lequel ?', opts: ['vous ne voudriez pas vous le reprocher un jour', 'les vestiaires sont froids', 'il a peur, et il a raison'], correct: 0,
      why: 'Il ne donne aucune raison : il fait craindre un remords. EN: it threatens regret instead of giving a reason.' },
    { q: 'Joëlle dit que, sans piscine, les enfants grandiront sans savoir nager. Est-ce à la mesure des faits ?', opts: ['Non : une piscine reste accessible, à quarante minutes de car.', 'Oui : c’est prouvé par le car.'], correct: 0,
      why: 'Le trajet est long, pas impossible : la peur dépasse le fait. EN: the fear outgrows the fact.' },
    { q: 'Quel passage relie l’émotion à une raison ?', opts: ['savoir nager protège un enfant au bord de l’eau', 'votez avec votre cœur'], correct: 0,
      why: 'L’émotion conduit à un fait : nager protège. EN: the emotion leads to a fact.' },
    { q: 'Juste avant la fin, elle demande qu’on compte. Et sa dernière phrase ?', opts: ['Elle demande de voter avec le cœur : elle se contredit.', 'Elle donne un chiffre.'], correct: 0,
      why: 'Compter, puis voter avec le cœur : la fin efface ce qu’elle venait de dire. EN: the ending undoes what she had just said.' },
  ],
  audio: REC('rec-c1-08-pathos'), say: REFRAME, terms: ['pathos', 'loyal'],
};

const A4_MESURE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-mesure', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-preuves',
  title: 'L’émotion à sa mesure', frSub: 'Quatre cartes sur le pathos',
  hint: 'Quatre cartes. Demande-toi si l’émotion mène aux faits.',
  audio: AUDIO, say: REFRAME, terms: ['pathos'],
  cards: [
    { head: 'À la mesure des faits', label: 'loyal', fr: src(E(1042)).fr, sub: rsOf(E(1042)),
      body: 'La troisième preuve d’Aristote tient à l’auditoire : on le touche. L’émotion est loyale quand elle a la taille du fait qu’elle porte. EN: fair when the emotion is the size of the fact.' },
    { head: 'L’émotion qui renvoie aux faits', label: 'loyal', fr: src(E(1048)).fr, sub: rsOf(E(1048)),
      body: 'Une émotion qui pousse à vérifier aide à juger. EN: an emotion that sends you to the facts helps you judge.' },
    { head: 'Le témoignage', label: 'loyal, s’il est exact', fr: src(E(1054)).fr, sub: rsOf(E(1054)),
      body: 'Une personne réelle, un fait précis : le cas touche, et il se vérifie. Un seul cas ne fait pas une règle. EN: one real case moves and can be checked; it is not a rule.' },
    { head: 'Quand l’émotion triche', label: 'peur, culpabilité, foule', fr: src(E(1051)).fr, sub: rsOf(E(1051)),
      body: 'La peur grossie, le remords promis, la salle flattée : l’émotion prend la place des raisons. EN: inflated fear, threatened guilt, a flattered crowd.' },
  ],
};

const A4_LOYAL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-loyal', layer: 'core', size: 'lg',
  title: 'Est-ce loyal ?', frSub: 'Trois appels au cœur, une salle conquise',
  groups: [
    grp('Trois appels au cœur', [
      it(E(1053), 'pour la médiathèque'),
      it(E(1054), 'pour la médiathèque'),
      it(E(1052), 'pour l’abri à vélos'),
    ], chk('Lequel dépasse les faits ?', ['les collégiens sans bureau', 'la mère qui révise avec son fils', 'les enfants qui risqueraient leur vie'], 2,
      'Rien ne dit qu’un vélo garé dehors met une vie en danger : la peur est fabriquée. EN: nothing supports the danger; the fear is manufactured.')),
    grp('La salle conquise', [
      it(RH(94), 'une salle acquise d’avance'),
      it(E(1051), 'la règle'),
    ], chk('Une salle déjà émue applaudit un slogan. Le slogan est-il devenu un argument ?', ['Non : l’émotion de la salle ne prouve rien.', 'Oui : la salle a jugé.'], 0,
      'Des applaudissements mesurent l’émotion, pas la justesse. EN: applause measures emotion, not soundness.')),
    ctl('Le test', '« Je vous fais peur pour que vous votiez oui. » Nommée ainsi, la peur marche-t-elle encore ?', ['Non : nommée, elle tombe.', 'Oui, aussi bien.'], 0,
      `Une peur à la mesure des faits pourrait se dire ouvertement ; celle-ci, non. ${REFRAME} EN: a fair fear could be stated openly.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['pathos', 'loyal'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a4-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre émotions qui trichent',
  errors: [
    { wrong: 'Votez avec votre cœur, et vous voterez juste.', right: 'Regardez les quarante minutes de car, puis votez.',
      why: 'Le cœur compte, mais il ne remplace pas le calcul. L’émotion doit mener aux faits. EN: the heart counts, it does not replace the facts.' },
    { wrong: 'Sans cet abri, vos enfants risqueront leur vie chaque matin.', right: 'Selon l’enquête du collectif, un cycliste sur cinq s’est déjà fait voler son vélo.',
      why: 'On grossit le danger pour faire peur. Un fait mesuré, attribué à sa source, suffit. EN: a measured, sourced fact is enough.' },
    { wrong: 'Vous ne voudriez pas avoir à vous le reprocher un jour.', right: 'Savoir nager protège un enfant au bord de l’eau.',
      why: 'La culpabilité promise n’est pas une raison. Dis plutôt ce que la piscine protège. EN: say what is at stake, do not threaten regret.' },
    { wrong: 'Émouvoir, c’est déjà tricher.', right: 'Une émotion à la mesure des faits est un argument légitime.',
      why: 'L’excès inverse : toute émotion n’est pas une ruse. Un discours sans émotion n’est pas plus loyal. EN: emotion is not a trick in itself.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['pathos', 'loyal'],
};

const A4_PLAIDOYER = pourTonPlaidoyer('a4-plaidoyer', 'Ton émotion', [
  grp('Deux appels au cœur pour l’abri', [
    free('Pensez aux cyclistes trempés qui pleurent chaque matin devant la gare.', 'Think of the soaked cyclists who weep every morning outside the station.', 'une émotion grossie'),
    free('Chaque matin, soixante vélos attendent sous la pluie, et leurs propriétaires aussi.', 'Every morning, sixty bikes wait in the rain, and so do their owners.', 'une émotion tenue par un fait'),
  ], chk('Lequel est loyal ?', ['les cyclistes qui pleurent', 'les soixante vélos sous la pluie'], 1,
    'Les soixante vélos sous la pluie émeuvent avec un nombre qu’on peut vérifier. EN: it moves with a checkable number.')),
  grp('La place de l’émotion', [
    it(E(1048), 'l’émotion qui renvoie au calcul'),
    it(E(1011), 'émouvoir et prouver'),
  ], chk('Dans ton plaidoyer, l’émotion vient...', ['avec un fait, jamais à sa place', 'à la place des chiffres, pour aller vite'], 0,
    'L’émotion accompagne la raison ; elle ne la remplace pas. EN: emotion accompanies the reason.')),
], ['pathos', 'loyal']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le pathos', 'Le pathos est loyal quand l’émotion...', ['est à la mesure des faits', 'est la plus forte possible'], 0,
    'Elle a la taille du fait qu’elle porte. EN: the size of the fact.'),
  ctl('Les pièges', 'Lequel n’est PAS un piège du pathos ?', ['la peur grossie', 'la culpabilité promise', 'un témoignage exact'], 2,
    'Un témoignage exact est un cas réel ; il touche et se vérifie. EN: an accurate testimony is fair.'),
  ctl('La salle', 'Des applaudissements prouvent...', ['que l’argument est juste', 'que la salle est émue'], 1,
    'Ils mesurent l’émotion, pas la justesse. EN: emotion, not soundness.'),
], ['pathos']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le pathos',
    opener: {
      line: 'Un enfant au bord du grand bassin, une voix à la radio : ici tu apprends quand une émotion aide à juger, et quand elle juge à ta place. EN: A child at the edge of the big pool, a voice on the radio: here you learn when an emotion helps you judge, and when it judges for you.',
      imageRef: 'lessons/persuader/act04.jpg',
    },
    sections: [],
    milestone: 'Tu mesures une émotion aux faits qu’elle porte, et tu reconnais la peur grossie, le remords promis et la salle flattée. EN: You weigh an emotion against its facts, and you spot inflated fear, threatened guilt and a flattered crowd.',
    estScreens: 34, restPoints: ['a4-mesure', 'a4-erreurs'],
  },
  sections: [A4_ECOUTE, A4_MESURE, A4_LOYAL, A4_ERREURS, A4_PLAIDOYER, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — L’AUTORITÉ ET L’EXPERTISE
 *
 *  TEXT: two leaflets on Sunday opening of the media library. MOVE: an
 *  authority counts in its own field, by name, with its method; who pays;
 *  what the others say; where the expert stops.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_TRACTS: Sec<'reading'> = {
  type: 'reading', id: 'a5-tracts', layer: 'core', questionsInModal: true,
  title: 'Deux tracts pour un dimanche', frSub: 'La médiathèque ouverte le dimanche',
  text: TRACTS_TEXT,
  glossary: [
    { word: 'horaires élargis', en: 'extended opening hours', note: 'Des heures d’ouverture plus longues ou plus nombreuses.' },
  ],
  questions: [
    { q: 'Devine le sens : « une partie des visiteurs du samedi se déplace simplement au dimanche ». Que veut dire « se déplace » ici ?', a: 'Change de jour : ces visiteurs-là viennent le dimanche au lieu du samedi ; ce ne sont pas de nouveaux lecteurs.' },
    { q: 'Qui cite le tract A, et à quel titre ?', a: 'Une romancière célèbre : elle connaît les romans, pas la fréquentation des bibliothèques.' },
    { q: '« Les experts sont unanimes » : quels experts ?', a: 'Aucun n’est nommé : on ne peut ni les lire, ni les vérifier.' },
    { q: 'Que fait le tract B que le tract A ne fait pas ?', a: 'Il nomme sa source, donne sa méthode (deux ans, neuf médiathèques), ses limites et qui la finance.' },
    { q: 'Le financement de l’étude rend-il le tract B déloyal ?', a: 'Non : il le dit lui-même. Une source intéressée se pèse ; une source cachée trompe.' },
    { q: 'Que promet la directrice ?', a: 'Rien de plus que ce qu’elle sait : elle croit que l’ouverture en vaut la peine, mais ne promet pas que les adolescents liront deux fois plus.' },
  ],
  audio: REC('rec-c1-08-tracts'), say: REFRAME, terms: ['autorite', 'loyal'],
};

const A5_QUESTIONS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-questions', layer: 'core', sheetId: 'sheet-appuis',
  title: 'Six questions à une autorité',
  cols: ['Question', 'Pourquoi'],
  rows: [
    { cells: ['Est-ce son domaine ?', 'le prestige ne se transporte pas'], say: src(E(1066)).fr,
      detail: { title: 'Le domaine', body: 'Une romancière fait autorité sur le roman ; sur la fréquentation des bibliothèques, elle donne un avis. EN: authority in one field is opinion in another.', say: src(E(1060)).fr } },
    { cells: ['A-t-elle un nom ?', 'un anonyme ne se vérifie pas'], say: src(E(1006)).fr,
      detail: { title: 'Le nom', body: '« Les experts », « un grand champion » : sans nom, l’appui ne peut pas être vérifié. EN: nameless support cannot be checked.', say: src(E(1058)).fr } },
    { cells: ['Comment le sait-elle ?', 'une méthode, un échantillon'], say: src(E(1067)).fr,
      detail: { title: 'La méthode', body: 'Deux ans, neuf médiathèques : voilà comment l’Observatoire sait ce qu’il dit. EN: a method tells you how they know.', say: src(E(1069)).fr } },
    { cells: ['Qui a payé l’étude ?', 'une source intéressée se pèse'], say: src('fr.b2.strategies-de-comprehension.1409').fr,
      detail: { title: 'Le financement', body: `${Cap(CRITIQUE_REF)} t’a appris cette question. Un financement intéressé ne rend pas l’étude fausse ; le cacher, si. EN: interested funding must be disclosed.`, say: src(E(1062)).fr } },
    { cells: ['Que disent les autres ?', 'une voix seule n’est pas un consensus'], say: src(E(1068)).fr,
      detail: { title: 'Le consensus', body: 'Un expert peut se tromper ; plusieurs qui concordent pèsent plus. Le nombre de villes, lui, n’est pas un consensus d’experts. EN: agreement among experts, not among cities.', say: src(E(1059)).fr } },
    { cells: ['Où s’arrête ce qu’elle sait ?', 'un expert dit ses limites'], say: src(E(1061)).fr,
      detail: { title: 'La limite', body: 'L’effet sur les adolescents n’a pas été mesuré : le dire, c’est le signe d’une vraie expertise. EN: stating limits is a sign of expertise.', say: src(E(1063)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['autorite'],
};

const A5_LOYAL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-loyal', layer: 'core', size: 'lg',
  title: 'Autorité ou expertise ?', frSub: 'Est-ce loyal ?',
  groups: [
    grp('Trois appuis', [
      it(E(1057), 'le tract A'),
      it(E(1058), 'le tract A'),
      it(E(1069), 'le tract B'),
    ], chk('Lequel appuie loyalement une idée ?', ['la romancière célèbre', 'les experts unanimes', 'l’étude, sa méthode et ses limites'], 2,
      'Une source nommée, une méthode, des limites : on peut vérifier. EN: named source, method, limits.')),
    grp('Le nombre', [
      it(E(1059), 'les grandes villes'),
      it(E(1070), 'le champion d’un autre discours'),
    ], chk('« Les grandes villes l’ont compris depuis longtemps. » C’est...', ['l’autorité du nombre : ce que font d’autres villes ne prouve pas que c’est bon ici', 'une preuve, puisque ce sont de grandes villes'], 0,
      'D’autres l’ont fait : c’est un indice, à condition de dire ce que cela a donné. EN: what others do is a clue, not a proof.')),
    ctl('Le test', '« Je cite une célébrité parce qu’elle est célèbre. » Ainsi nommé, l’appui tient-il ?', ['Non : nommé, il tombe.', 'Oui, aussi bien.'], 0,
      `L’expertise survit à son nom ; le prestige emprunté, non. ${REFRAME} EN: expertise survives being named.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['autorite', 'loyal'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'Six appuis qui trichent',
  rule: {
    title: 'Une autorité ne vaut que dans son domaine',
    body: 'Un nom, un domaine, une méthode, un financement dit, des limites avouées : voilà une expertise. Le reste est du prestige. EN: name, field, method, disclosed funding, stated limits.',
  },
  cards: [
    { promptLabel: 'le prestige d’un autre domaine', promptSound: 'Une romancière l’a dit : les adolescents liront deux fois plus.', fr: src(E(1060)).fr, ipa: ipaOf(E(1060)), tip: 'Elle connaît les romans, pas les chiffres de fréquentation. EN: wrong field.' },
    { promptLabel: 'les experts sans nom', promptSound: 'Les experts sont unanimes.', fr: src(E(1069)).fr, ipa: ipaOf(E(1069)), tip: 'Cite l’étude, sa méthode et ses limites. EN: cite the study.' },
    { promptLabel: 'le nombre pris pour une preuve', promptSound: 'Les grandes villes le font, donc c’est bon ici.', fr: src(E(1061)).fr, ipa: ipaOf(E(1061)), tip: 'Ce que font d’autres villes ne dit pas l’effet ici ; regarde ce qui a été mesuré. EN: look at what was measured.' },
    { promptLabel: 'la source cachée', promptSound: 'Une étude prouve que l’ouverture du dimanche marche.', fr: src(E(1062)).fr, ipa: ipaOf(E(1062)), tip: 'Dis qui la finance : on la pèsera mieux. EN: disclose the funding.' },
    { promptLabel: 'l’expert qui promet trop', promptSound: 'La directrice garantit que les adolescents liront davantage.', fr: src(E(1063)).fr, ipa: ipaOf(E(1063)), tip: 'Elle ne promet pas ce qui n’a pas été mesuré. EN: she promises nothing unmeasured.' },
    { promptLabel: 'le champion sans nom', promptSound: 'Un grand champion m’a dit qu’une ville sans piscine renonce à ses enfants.', fr: src(E(1006)).fr, ipa: ipaOf(E(1006)), tip: 'Sans nom, impossible de vérifier ni ce qu’il a dit, ni ce qu’il sait. EN: no name, no check.' },
  ],
  drill: [
    { promptSay: 'Une autorité ne vaut que dans son ... .', opts: ['domaine', 'pays'], correct: 0 },
    { promptSay: '« Les experts sont unanimes » : il manque leurs ... .', opts: ['noms', 'âges'], correct: 0 },
    { promptSay: 'Une étude loyale dit sa méthode et ses ... .', opts: ['limites', 'lecteurs'], correct: 0 },
    { promptSay: 'Une source financée par une partie intéressée doit le ... .', opts: ['dire', 'cacher'], correct: 0 },
    { promptSay: 'Clémence Arbaud fait autorité sur les ... .', opts: ['romans', 'horaires des bibliothèques'], correct: 0 },
    { promptSay: '« Les grandes villes le font » invoque l’autorité du ... .', opts: ['nombre', 'savoir'], correct: 0 },
    { promptSay: 'Un expert loyal dit comment il ... .', opts: ['sait', 'gagne'], correct: 0 },
    { promptSay: 'La directrice ne promet rien : elle reste ... .', opts: ['prudente', 'muette'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une autorité ne vaut que dans son domaine' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un tract affirme' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-08-piege-autorite'), say: REFRAME, terms: ['autorite'],
};

const A5_PLAIDOYER = pourTonPlaidoyer('a5-plaidoyer', 'Tes sources', [
  grp('Deux appuis pour le jardin', [
    free('Tout le monde sait que les jardins partagés rendent les gens heureux.', 'Everyone knows shared gardens make people happy.', 'une autorité vague'),
    free('Selon l’association, vingt-huit familles sont déjà inscrites pour une parcelle.', 'According to the association, twenty-eight families have already signed up for a plot.', 'une source nommée'),
  ], chk('Lequel est loyal ?', ['« tout le monde sait »', '« selon l’association, vingt-huit familles »'], 1,
    'Une source nommée et un chiffre qu’on peut contrôler. EN: a named source and a checkable figure.')),
  grp('Ta source intéressée', [
    it(E(1069), 'citer la méthode'),
    it(E(1068), 'la règle'),
  ], chk('Ta source est l’association que tu défends. Tu...', ['le dis, et tu laisses juger', 'le tais : cela affaiblirait ton texte'], 0,
    'Une source intéressée se pèse ; une source cachée trompe. EN: an interested source can be weighed.')),
], ['autorite', 'loyal']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le domaine', 'Une célébrité parle hors de son domaine. Son avis...', ['vaut un avis, pas une preuve', 'tranche la question'], 0,
    'Le prestige ne se transporte pas. EN: prestige does not travel.'),
  ctl('Les experts', '« Les experts sont unanimes » sans nom, c’est...', ['une expertise vérifiable', 'un appui qu’on ne peut pas vérifier'], 1,
    'Sans nom, pas de vérification. EN: no name, no check.'),
  ctl('Le financement', 'Une étude financée par une partie intéressée...', ['doit le dire, et se pèse', 'est forcément fausse'], 0,
    'Le financement se déclare ; il ne disqualifie pas à lui seul. EN: disclose and weigh.'),
], ['autorite']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'L’autorité et l’expertise',
    opener: {
      line: 'Une romancière célèbre d’un côté, une étude de deux ans de l’autre : ici tu apprends à demander à chaque autorité son domaine, son nom et sa méthode. EN: A famous novelist on one side, a two-year study on the other: here you learn to ask every authority for its field, its name and its method.',
      imageRef: 'lessons/persuader/act05.jpg',
    },
    sections: [],
    milestone: 'Tu sépares le prestige de l’expertise, et tu cites une source avec sa méthode et ses limites. EN: You can separate prestige from expertise, and cite a source with its method and limits.',
    estScreens: 36, restPoints: ['a5-questions', 'a5-piege'],
  },
  sections: [A5_TRACTS, A5_QUESTIONS, A5_LOYAL, A5_PIEGE, A5_PLAIDOYER, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L’ANALOGIE
 *
 *  TEXT: Rémi’s op-ed for the workshop. MOVE: an analogy proves only when
 *  the shared feature is the one the conclusion depends on; answer an
 *  analogy with the difference that counts. c1.20 showed what an analogy
 *  DOES in a text; this act judges whether it PROVES.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_TRIBUNE: Sec<'reading'> = {
  type: 'reading', id: 'a6-tribune', layer: 'core', questionsInModal: true,
  title: 'Réparer, c’est soigner', frSub: 'La tribune de Rémi',
  text: ANALOGIE_TEXT,
  glossary: [
    { word: 'cordonnier', en: 'cobbler', note: 'L’artisan qui répare les chaussures.' },
  ],
  questions: [
    { q: 'Devine le sens : « un talon usé ». Que veut dire « usé » ?', a: 'Abîmé par l’usage, à force de servir.' },
    { q: 'Pourquoi Rémi abandonne-t-il l’image du médecin ?', a: 'Elle frappe, mais un grille-pain n’est pas une personne : le point commun ne compte pas pour la conclusion.' },
    { q: 'Quel point commun relie le cordonnier et l’atelier ?', a: 'Tous deux prolongent la vie d’objets qui en valent la peine.' },
    { q: 'Comment répond-il à l’analogie de la « fuite d’eau » ?', a: 'Il montre la différence qui compte : une fuite ne rapporte rien, alors que l’atelier évite des achats et forme des habitants.' },
    { q: '« À ce compte, il faudrait un atelier dans chaque rue. » Que répond-il ?', a: 'Qu’un atelier par quartier suffit, comme une seule cordonnerie suffisait.' },
    { q: 'Que dit le proverbe qu’il cite, et qu’en fait-il ?', a: '« Comparaison n’est pas raison » : une analogie éclaire, elle ne prouve pas seule. Il précise quand elle devient un argument.' },
  ],
  audio: REC('rec-c1-08-tribune'), say: REFRAME, terms: ['analogie', 'loyal'],
};

const A6_ANALOGIE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-analogie', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-appuis',
  title: 'Quand une analogie prouve', frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Cherche le point commun qui compte.',
  audio: AUDIO, say: REFRAME, terms: ['analogie'],
  cards: [
    { head: 'Le point commun qui compte', label: 'la règle', fr: src(E(1075)).fr, sub: rsOf(E(1075)),
      body: `${Cap(LIGNES_REF)} t’a montré ce qu’une analogie fait dans un texte. Ici, tu juges si elle prouve : il faut que le point commun soit celui dont la conclusion a besoin. EN: now you judge whether it proves.` },
    { head: 'L’image qui frappe', label: 'elle émeut', fr: src(E(1071)).fr, sub: rsOf(E(1071)),
      body: 'Forte, mais le patient et le grille-pain ne partagent rien d’utile ici. Rémi le dit lui-même. EN: striking, but nothing useful is shared.' },
    { head: 'L’analogie solide', label: 'elle prouve', fr: src(E(1073)).fr, sub: rsOf(E(1073)),
      body: 'Même geste, même raison : on répare ce qui vaut encore la peine. EN: same act, same reason.' },
    { head: 'Répondre à une analogie', label: 'la différence', fr: src(E(1074)).fr, sub: rsOf(E(1074)),
      body: 'Ne la traite pas d’absurde : montre la différence qui compte pour la conclusion. EN: show the difference that matters.' },
  ],
};

const A6_TIENT: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-tient', layer: 'core', size: 'lg',
  title: 'L’analogie tient-elle ?', frSub: 'Est-ce loyal ?',
  groups: [
    grp('Trois analogies du quartier', [
      it(E(1077), 'contre le jardin'),
      it(E(1078), 'sur le budget'),
      it(E(1084), 'pour la médiathèque'),
    ], chk('Laquelle repose sur une ressemblance de surface ?', ['le jardin et la salle de sport', 'le budget et le gâteau', 'la médiathèque et le parc'], 0,
      'À la salle, on paie sans y aller ; au jardin, vingt-huit familles se sont inscrites pour cultiver. Le point commun supposé, payer sans profiter, n’est pas montré. EN: the supposed common point is not shown.')),
    grp('Un trait, pas tout', [
      it('fr.c1.strategies-de-comprehension.1906', `ce que ${LIGNES_REF} t’a appris`),
      it('fr.c1.discours-dexamen.1496', 'le proverbe'),
      it(RH(5), 'une réponse sèche'),
    ], chk('« Le budget est un gâteau. » Quel trait compte ici ?', ['la part de l’un réduit celle des autres', 'il se partage le dimanche'], 0,
      'Le budget est limité : c’est le seul trait dont l’argument a besoin. EN: a limited budget is the only feature needed.')),
    ctl('Le test', '« Je compare l’atelier à un médecin pour vous émouvoir. » Ainsi nommée, l’image prouve-t-elle encore ?', ['Non : elle émeut, elle ne prouve pas.', 'Oui, elle prouve autant.'], 0,
      `Nommée, l’analogie du cordonnier tient ; celle du médecin ne tient plus. ${REFRAME} EN: named, only the cobbler survives.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['analogie', 'loyal'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de mal manier une analogie',
  errors: [
    { wrong: 'Un jardin partagé, c’est une salle de sport : on paie et on n’y va jamais.', right: 'Comme une salle de sport, un jardin a besoin d’inscrits fidèles ; vingt-huit familles le sont déjà.',
      why: 'Normal : l’image fait sourire. Mais elle suppose ce qu’elle devrait prouver. Garde le seul trait qu’on peut vérifier. EN: keep only the checkable feature.' },
    { wrong: 'Comparaison n’est pas raison : toute analogie est un sophisme.', right: 'Une analogie prouve quand son point commun est celui dont dépend la conclusion.',
      why: 'Le proverbe met en garde, il n’interdit pas. Rejeter toute analogie, c’est jeter aussi le cordonnier. EN: the proverb warns, it does not ban.' },
    { wrong: 'L’atelier, c’est comme un cordonnier, donc il sera rentable.', right: 'Comme un cordonnier, l’atelier prolonge la vie des objets ; sa rentabilité se prouve avec des chiffres.',
      why: 'Une analogie couvre un trait. Pour le reste, il faut d’autres raisons. EN: an analogy covers one feature.' },
    { wrong: 'Votre analogie est absurde.', right: 'Votre analogie oublie une différence : une fuite ne rapporte rien, l’atelier évite des achats.',
      why: 'Traiter l’autre d’absurde ne répond pas. Montrer la différence qui compte, si. EN: name the difference that counts.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['analogie', 'loyal'],
};

const A6_PLAIDOYER = pourTonPlaidoyer('a6-plaidoyer', 'Ton analogie', [
  grp('Deux analogies pour l’abri', [
    free('L’abri à vélos, c’est un vestiaire : on y laisse ses affaires en sécurité pendant la journée.', 'The bike shelter is a cloakroom: you leave your things there safely during the day.', 'un point commun qui compte'),
    free('L’abri à vélos, c’est une cathédrale du vélo.', 'The bike shelter is a cathedral of cycling.', 'une image qui ne prouve rien'),
  ], chk('Laquelle sert un argument ?', ['le vestiaire', 'la cathédrale'], 0,
    'Laisser ses affaires en sécurité : c’est exactement ce que l’abri doit permettre. EN: the shared feature is the point.')),
  grp('Dire sur quoi elle tient', [
    it(E(1083), 'le point dit'),
    it(E(1080), 'la règle'),
  ], chk('Après ton analogie, tu...', ['dis sur quel point elle tient', 'en ajoutes une deuxième, plus forte'], 0,
    'Dire le point commun, c’est la nommer : si elle tient encore, elle est loyale. EN: naming the shared point is the test.')),
], ['analogie', 'loyal']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La règle', 'Une analogie prouve quand...', ['son point commun est celui dont dépend la conclusion', 'elle frappe l’imagination'], 0,
    'Le bon trait, pas le plus frappant. EN: the right feature, not the most striking.'),
  ctl('Répondre', 'Pour répondre à une analogie, tu...', ['montres la différence qui compte', 'la traites d’absurde'], 0,
    'Une fuite ne rapporte rien ; l’atelier, si. EN: name the difference.'),
  ctl('Le proverbe', '« Comparaison n’est pas raison » veut dire...', ['qu’une analogie ne prouve pas seule', 'qu’il ne faut jamais comparer'], 0,
    'Elle éclaire ; elle prouve si le point commun compte. EN: it sheds light.'),
], ['analogie']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'L’analogie',
    opener: {
      line: 'Un médecin, un cordonnier, une fuite d’eau : ici tu apprends quelle comparaison prouve, et comment répondre à celle qui ne prouve pas. EN: A doctor, a cobbler, a leaking pipe: here you learn which comparison proves, and how to answer the one that does not.',
      imageRef: 'lessons/persuader/act06.jpg',
    },
    sections: [],
    milestone: 'Tu trouves le point commun dont une analogie a besoin, et tu réponds à une analogie par la différence qui compte. EN: You find the shared feature an analogy needs, and you answer an analogy with the difference that counts.',
    estScreens: 34, restPoints: ['a6-analogie', 'a6-erreurs'],
  },
  sections: [A6_TRIBUNE, A6_ANALOGIE, A6_TIENT, A6_ERREURS, A6_PLAIDOYER, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LES MOTS QUI CADRENT
 *
 *  TEXT: two leaflets and the council’s neutral note on the bike shelter.
 *  MOVE: in an ARGUMENT, the word chosen can hold the conclusion
 *  (« sacrifiées », « investissement », « quelques abonnés ») and the frame
 *  (gain or loss) steers the judgement. Press framing stays c1.24’s, cited.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_TRACTS: Sec<'reading'> = {
  type: 'reading', id: 'a7-tracts', layer: 'core', questionsInModal: true,
  title: 'Deux tracts et une note', frSub: 'L’abri à vélos de la gare',
  text: CADRAGE_TEXT,
  glossary: [
    { word: 'abonnement', en: 'subscription', note: 'Un paiement régulier, ici chaque mois, pour avoir accès à un service.' },
  ],
  questions: [
    { q: 'Devine le sens : « une ville qui veut respirer ». Que veut dire « respirer » ici ?', a: 'Avoir plus d’air et d’espace, moins de voitures : c’est une image.' },
    { q: 'Quels faits les trois textes partagent-ils ?', a: 'Douze places de stationnement remplacées par un abri de quarante places pour vélos, pour 52 000 euros.' },
    { q: 'Comment chaque tract nomme-t-il les douze places ?', a: 'Le tract A parle du « prix de douze voitures » ; le tract B de places « sacrifiées », que le projet « supprimerait ».' },
    { q: 'Pourquoi les deux tracts ne donnent-ils pas le même coût par place ?', a: 'Le tract A divise par les quarante places de vélos (1 300 euros), le tract B par les douze places de stationnement perdues (plus de 4 300 euros). Même dépense, deux bases.' },
    { q: '« Quelques abonnés » : est-ce exact ?', a: 'Non : quarante places, ce n’est pas « quelques ». Le mot rapetisse le projet.' },
    { q: 'Lequel des trois textes est le plus neutre, et à quoi le vois-tu ?', a: 'La note du conseil : le verbe « remplace », aucun adjectif qui juge, les deux associations invitées.' },
  ],
  audio: REC('rec-c1-08-cadrage'), say: REFRAME, terms: ['cadrage', 'loyal'],
};

const A7_MOTS: Sec<'examples'> = {
  type: 'examples', id: 'a7-mots', layer: 'core', sheetId: 'sheet-appuis',
  title: 'Les mots qui concluent avant la preuve',
  examples: [
    ex(E(1086), '« sacrifiées » : la perte est déjà jugée injuste'),
    ex(E(1085), 'le même fait, compté en vélos'),
    ex(E(1089), '« investissement » : la dépense devient un placement'),
    ex(E(1090), '« dépense lourde » : le même chiffre, pesé autrement'),
    ex(E(1093), 'un cadre de gain'),
    ex(E(1094), 'le même fait, en perte'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage'],
};

const A7_NEUTRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-neutre', layer: 'core', size: 'lg',
  title: 'Le mot qui conclut', frSub: 'Est-ce loyal ?',
  groups: [
    grp('Trois verbes pour un même projet', [
      it(E(1087), 'le tract A'),
      it(E(1088), 'le tract B'),
      it(E(1091), 'la note du conseil'),
    ], chk('Quel verbe dit le fait sans le juger ?', ['libérer', 'supprimer', 'remplacer'], 2,
      '« Libérer » et « supprimer » jugent déjà, l’un en bien, l’autre en mal ; « remplacer » laisse juger. EN: replace leaves the judgement to you.')),
    grp('Le test du mot neutre', [
      it('fr.c1.strategies-de-comprehension.2131', `ce que ${PRESSE_REF} t’a appris`),
      it('fr.c1.strategies-de-comprehension.2152', 'un choix, pas un mensonge'),
      it(E(1095), 'la règle dans un argument'),
    ], chk('« Sacrifiées » devient « remplacées ». Qu’est-ce qui disparaît ?', ['le jugement : la perte n’est plus dite injuste', 'le fait : il n’y a plus de places'], 0,
      `${Cap(PRESSE_REF)} t’a donné ce test pour la presse ; dans un argument, il montre ce que le mot affirmait sans preuve. EN: the test shows what the word claimed without proof.`)),
    ctl('Gain ou perte', '« Neuf abonnés sur dix renouvellent » et « un sur dix ne renouvelle pas » disent-ils le même fait ?', ['Oui, mais l’un rassure et l’autre inquiète.', 'Non, ce sont deux chiffres différents.'], 0,
      'Même fait, deux cadres : présenter en gain ou en perte change souvent le choix des gens. Donne les deux faces. EN: same fact, two frames.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cadrage', 'loyal'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'Six mots qui concluent à ta place',
  rule: {
    title: 'Le mot ne remplace pas la preuve',
    body: 'Un mot fort n’est pas déloyal en soi. Il le devient quand il affirme ce que le texte n’a pas prouvé. Dis le fait, puis juge-le. EN: say the fact, then judge it.',
  },
  cards: [
    { promptLabel: 'un verbe qui juge', promptSound: 'Le projet sacrifie douze places.', fr: src(E(1091)).fr, ipa: ipaOf(E(1091)), tip: 'Le fait d’abord : il remplace douze places par quarante. EN: the fact first.' },
    { promptLabel: 'un nombre rapetissé', promptSound: 'L’abri servira à quelques abonnés.', fr: src(E(1096)).fr, ipa: ipaOf(E(1096)), tip: 'Quarante, c’est un nombre : écris-le. EN: write the number.' },
    { promptLabel: 'une seule face du chiffre', promptSound: 'Un abonné sur dix part : le service échoue.', fr: src(E(1093)).fr, ipa: ipaOf(E(1093)), tip: 'Neuf sur dix restent : c’est le même fait. Donne les deux faces avant de conclure. EN: give both sides.' },
    { promptLabel: 'le mot à la place de la preuve', promptSound: 'C’est un gaspillage, tout le monde le voit.', fr: src(E(1092)).fr, ipa: ipaOf(E(1092)), tip: '« Gaspillage » est une conclusion ; il faut des chiffres pour y arriver. EN: waste is a conclusion.' },
    { promptLabel: 'un mot fort qu’on ne peut pas défendre', promptSound: 'Les commerçants veulent étouffer les cyclistes.', fr: src(E(1095)).fr, ipa: ipaOf(E(1095)), tip: 'Peux-tu prouver « étouffer » ? Sinon, change de mot. EN: can you prove it?' },
    { promptLabel: 'le mot sans la raison', promptSound: 'Ce projet est un scandale.', fr: src(E(1098)).fr, ipa: ipaOf(E(1098)), tip: 'Nomme la chose, puis dis pourquoi elle compte. EN: name it, then say why.' },
  ],
  drill: [
    { promptSay: '« Remplacer douze places », c’est un mot ... .', opts: ['neutre', 'chargé'], correct: 0 },
    { promptSay: '« Sacrifier » ajoute un ... .', opts: ['jugement', 'chiffre'], correct: 0 },
    { promptSay: '« Investissement » présente la dépense comme un ... .', opts: ['placement', 'gaspillage'], correct: 0 },
    { promptSay: '« Neuf sur dix restent » : c’est un cadre de ... .', opts: ['gain', 'perte'], correct: 0 },
    { promptSay: '« Un sur dix part » : c’est un cadre de ... .', opts: ['gain', 'perte'], correct: 1 },
    { promptSay: 'Un mot fort est loyal si tu peux le ... .', opts: ['défendre', 'répéter'], correct: 0 },
    { promptSay: 'Diviser par quarante vélos ou par douze places change le coût par ... .', opts: ['place', 'année'], correct: 0 },
    { promptSay: 'La note du conseil emploie le verbe ... .', opts: ['remplacer', 'sacrifier', 'libérer'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot ne remplace pas la preuve' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un tract fait dire aux mots' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-08-piege-cadrage'), say: REFRAME, terms: ['cadrage'],
};

const A7_PLAIDOYER = pourTonPlaidoyer('a7-plaidoyer', 'Tes mots', [
  grp('Deux phrases pour l’abri', [
    free('Les opposants veulent condamner la gare à la rouille et au vol.', 'The opponents want to doom the station to rust and theft.', 'des mots qui concluent'),
    free('L’abri remplace douze places de stationnement par quarante places pour vélos.', 'The shelter replaces twelve parking spaces with forty bike spaces.', 'le fait, puis ton jugement'),
  ], chk('Laquelle te laisse ensuite argumenter loyalement ?', ['« condamner la gare à la rouille »', '« remplace douze places par quarante »'], 1,
    'Pose le fait dans des mots que l’autre camp accepterait, puis juge-le. EN: state the fact in words the other side would accept.')),
  grp('Ton mot fort', [
    it(E(1095), 'la règle'),
    it(E(1098), 'nommer, puis juger'),
  ], chk('Tu veux écrire « une gare enfin accueillante ». Tu...', ['le fais si tu peux le défendre par un fait', 'l’évites : un mot fort est toujours déloyal'], 0,
    'Un mot fort tenu par un fait reste loyal. EN: a strong word backed by a fact stays fair.')),
], ['cadrage', 'loyal']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le mot', 'Un mot qui contient déjà la conclusion...', ['la dispense de preuve', 'la prouve'], 0,
    'Il conclut avant d’argumenter. EN: it concludes before arguing.'),
  ctl('Le cadre', 'Présenter un même fait en gain ou en perte...', ['ne change rien', 'oriente souvent le jugement'], 1,
    'Neuf sur dix restent ; un sur dix part : même fait, autre effet. EN: same fact, other effect.'),
  ctl('Loyal', 'Un mot fort reste loyal si...', ['tu peux défendre ce qu’il affirme', 'il est répété souvent'], 0,
    'Un fait derrière le mot, et le mot tient. EN: a fact behind the word.'),
], ['cadrage']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les mots qui cadrent',
    opener: {
      line: 'Douze places « remplacées » ou « sacrifiées » : ici tu repères le mot qui conclut avant la preuve, et tu choisis le tien. EN: Twelve spaces “replaced” or “sacrificed”: here you spot the word that concludes before the proof, and choose your own.',
      imageRef: 'lessons/persuader/act07.jpg',
    },
    sections: [],
    milestone: 'Tu repères le mot qui contient la conclusion et le cadre qui oriente un chiffre, et tu écris le fait avant de le juger. EN: You can spot the word that holds the conclusion and the frame that steers a figure, and you state the fact before judging it.',
    estScreens: 36, restPoints: ['a7-mots', 'a7-piege'],
  },
  sections: [A7_TRACTS, A7_MOTS, A7_NEUTRE, A7_PIEGE, A7_PLAIDOYER, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LA QUESTION RHÉTORIQUE
 *
 *  TEXT: Nadège’s speech for Sunday opening, built on questions; she
 *  withdraws the one that dodges. MOVE: recognise the question that asserts,
 *  PRODUCE one, and test it (would almost everyone give the same answer?).
 *  Practice: a radio debate heard once. c1.20 owns the presupposing
 *  question in reading; cited.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_DISCOURS: Sec<'reading'> = {
  type: 'reading', id: 'a8-discours', layer: 'core', questionsInModal: true,
  title: 'Le discours de Nadège', frSub: 'La médiathèque le dimanche',
  text: QUESTION_TEXT,
  glossary: [
    { word: 'esquive', en: 'dodges', note: 'Esquiver, c’est éviter un coup, ou une question, en passant à côté.' },
  ],
  questions: [
    { q: 'Devine le sens : « elle esquive le sujet ». Que veut dire « esquive » ?', a: 'Elle l’évite, elle passe à côté.' },
    { q: 'Quelle est la vraie question du début, et comment le sais-tu ?', a: 'Que font, le dimanche, les collégiens sans bureau ? Nadège dit elle-même qu’elle n’a pas la réponse.' },
    { q: '« Faut-il refuser des lecteurs parce qu’ils lisent le mauvais jour ? » Qu’affirme cette question ?', a: 'Qu’il ne faut pas les refuser : la réponse attendue est non.' },
    { q: 'Pourquoi Nadège retire-t-elle une de ses questions ?', a: '« Qui oserait mettre un prix sur la culture ? » évite de parler du coût. Elle le dit, puis donne le chiffre.' },
    { q: '« Une famille ne peut-elle pas lire ensemble ? » répond à quoi ?', a: 'À l’objection « le dimanche est fait pour la famille ». Elle appuie sa question sur un fait : les ateliers du samedi.' },
    { q: 'La dernière question est-elle rhétorique ?', a: 'Nadège la laisse ouverte ; elle reste orientée (« dimanches de pluie »), mais elle invite à juger au lieu d’affirmer.' },
  ],
  audio: REC('rec-c1-08-nadege'), say: REFRAME, terms: ['question', 'loyal'],
};

const A8_QUESTIONS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a8-questions', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-figures',
  title: 'La question qui affirme', frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Cherche la réponse que la question suppose.',
  audio: AUDIO, say: REFRAME, terms: ['question'],
  cards: [
    { head: 'Affirmer par une question', label: 'qui… ?', fr: src(E(1108)).fr, sub: rsOf(E(1108)),
      body: '« Qui veut… ? » attend « personne » : la question affirme sans le dire. EN: it expects “nobody”.' },
    { head: 'La question négative', label: 'ne… pas ?', fr: src(E(1106)).fr, sub: rsOf(E(1106)),
      body: 'Une question rhétorique négative affirme le plus souvent le positif : ici, il est temps d’ouvrir. EN: a negative rhetorical question usually asserts the positive.' },
    { head: 'La question qui esquive', label: 'à éviter', fr: src(E(1102)).fr, sub: rsOf(E(1102)),
      body: 'Elle met une évidence à la place d’un chiffre. Nommée, elle tombe : Nadège la retire elle-même. EN: named, it collapses.' },
    { head: 'La question loyale', label: 'le test', fr: src(E(1109)).fr, sub: rsOf(E(1109)),
      body: `${Cap(LIGNES_REF)} t’a montré qu’une question peut supposer une réponse ; ici, tu la poses toi-même, en vérifiant que la réponse est partagée. EN: now you ask it yourself.` },
  ],
};

const A8_PRODUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-produire', layer: 'core', size: 'lg',
  title: 'Produis la question', frSub: 'D’une affirmation à une question rhétorique',
  groups: [
    grp('Une affirmation, une question', [
      it(E(1111), 'l’affirmation'),
      it(E(1112), 'la question rhétorique'),
    ], chk('« Personne ne veut voir la piscine fermer » devient...', ['« Qui veut voir la piscine fermer ? »', '« Pourquoi la piscine fermerait-elle ? »', '« La piscine fermera-t-elle ? »'], 0,
      '« Personne » devient « qui » : la réponse attendue reste « personne ». Les deux autres questions demandent une information. EN: nobody becomes who.')),
    grp('La forme négative', [
      it(E(1107), 'l’affirmation'),
      it(E(1106), 'la question'),
    ], chk('« Il est temps d’ouvrir le dimanche » devient...', ['« N’est-il pas temps d’ouvrir le dimanche ? »', '« Est-il temps d’ouvrir le dimanche ? »'], 0,
      'La négative attend « si » : elle affirme. La question simple reste ouverte. EN: the negative expects yes.')),
    ctl('Le test', 'Quelle question rhétorique est loyale ?', ['« Qui veut d’une gare où un cycliste sur cinq s’est déjà fait voler son vélo ? », appuyée sur l’enquête du collectif', '« Qui oserait mettre un prix sur la culture ? », pour ne pas donner le coût'], 0,
      `La question sur la gare repose sur un fait que presque tout le monde jugerait pareil ; celle sur la culture esquive. ${REFRAME} EN: one rests on a fact, the other dodges.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['question', 'loyal'],
};

/** THE EAR MISSION: a radio debate, heard once. */
const A8_RADIO: Sec<'listening'> = {
  type: 'listening', id: 'a8-radio', layer: 'core', hideLines: true,
  title: 'Le débat de Radio Combelune', frSub: 'Vraies questions et fausses questions, une seule écoute',
  lines: [ln(E(1113)), ln(E(1114)), ln(E(1115)), ln(E(1116)), ln(E(1117)), ln(E(1118)), ln(E(1119)), ln(E(1120))],
  questions: [
    { q: 'La question sur le nombre de vélos volés chaque année attend-elle une réponse ?', opts: ['Oui : elle demande une information.', 'Non : elle affirme.'], correct: 0,
      why: 'Elle demande un chiffre que personne n’a encore donné. EN: it asks for a figure.' },
    { q: 'Et la question sur la selle trempée ?', opts: ['Elle affirme que personne n’en a envie.', 'Elle demande un chiffre.'], correct: 0,
      why: '« Qui a envie de… ? » attend « personne ». EN: it expects nobody.' },
    { q: 'La question sur les commerçants qui ne compteraient plus...', opts: ['affirme qu’on les oublie, sans le prouver', 'demande combien ils sont'], correct: 0,
      why: 'La forme négative affirme ; aucun fait ne l’appuie. EN: the negative form asserts without a fact.' },
    { q: 'Combien de vraies questions, qui attendent une information, as-tu entendues ?', opts: ['trois', 'une', 'cinq'], correct: 0,
      why: 'Les vélos volés, les livreurs, l’entretien de l’abri. Les trois autres affirment. EN: three real questions.' },
    { q: '« Sacrifier le centre-ville pour quarante vélos » : qu’est-ce qui rend cette question déloyale ?', opts: ['le mot « sacrifier » y met déjà la réponse', 'elle est trop courte'], correct: 0,
      why: 'Une question rhétorique qui porte un mot chargé conclut deux fois. EN: the loaded word concludes for you.' },
  ],
  audio: REC('rec-c1-08-radio'), say: REFRAME, terms: ['question', 'cadrage'],
};

const A8_PLAIDOYER = pourTonPlaidoyer('a8-plaidoyer', 'Ta question', [
  grp('Deux questions à vérifier', [
    it(RH(113), 'une question qui suggère'),
    it(RH(65), 'une évidence rappelée'),
  ], chk('« Si la mesure est si efficace, pourquoi les voisins ne l’ont-ils pas adoptée ? » Pour la rendre loyale, tu...', ['vérifies d’abord que les voisins ne l’ont pas adoptée', 'la poses plus fort'], 0,
    'Une question rhétorique suppose un fait ; vérifie-le avant de la poser. EN: check the fact it assumes.')),
  grp('Ta question à toi', [
    it(E(1108), 'une question appuyée sur un fait'),
    it(E(1109), 'le test'),
  ], chk('Avant d’écrire ta question rhétorique, tu vérifies que...', ['presque tout le monde donnerait la même réponse', 'personne ne pourra répondre'], 0,
    'Si la réponse est disputée, pose une vraie question, ou argumente. EN: if the answer is disputed, argue instead.')),
], ['question', 'loyal']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La question rhétorique', 'Une question rhétorique...', ['affirme sans le dire', 'attend une information'], 0,
    'La réponse est supposée évidente. EN: the answer is assumed.'),
  ctl('La négative', '« N’est-il pas temps d’ouvrir ? » affirme le plus souvent...', ['qu’il est temps d’ouvrir', 'qu’il n’est pas temps d’ouvrir'], 0,
    'La négative attend « si ». EN: it expects yes.'),
  ctl('Loyale', 'Une question rhétorique est loyale quand...', ['presque tout le monde donnerait la même réponse', 'elle fait taire l’autre camp', 'elle porte un mot chargé'], 0,
    'Sinon, elle fait passer une thèse disputée pour une évidence. EN: otherwise it smuggles a disputed claim.'),
], ['question']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'La question rhétorique',
    opener: {
      line: 'Nadège pose des questions, et en retire une : ici tu apprends à reconnaître la question qui affirme, et à en écrire une loyale. EN: Nadège asks questions, and withdraws one: here you learn to spot the question that asserts, and to write a fair one.',
      imageRef: 'lessons/persuader/act08.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une question rhétorique, tu en produis une, et tu vérifies que sa réponse est vraiment partagée. EN: You can recognise a rhetorical question, produce one, and check that its answer is really shared.',
    estScreens: 36, restPoints: ['a8-questions', 'a8-radio'],
  },
  sections: [A8_DISCOURS, A8_QUESTIONS, A8_PRODUIRE, A8_RADIO, A8_PLAIDOYER, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — ANAPHORE ET GRADATION
 *
 *  TEXT: Samir’s closing speech for the garden. MOVE: name the anaphora
 *  (the same opening repeated) and the gradation (terms rising in
 *  intensity), and judge them: does each repetition or step add a fact?
 *  Items carry ONE label; the closing sentence that carries both is used
 *  only where the question asks for both.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_DISCOURS: Sec<'reading'> = {
  type: 'reading', id: 'a9-discours', layer: 'core', questionsInModal: true,
  title: 'Le discours de Samir', frSub: 'Pour le jardin des Tanneurs',
  text: FIGURES_TEXT,
  glossary: [
    { word: 'flaques', en: 'puddles', note: 'L’eau de pluie qui reste au sol, dans les creux.' },
  ],
  questions: [
    { q: 'Devine le sens : « une rue qui change de visage ». Que veut dire « changer de visage » ?', a: 'Se transformer au point de ne plus se ressembler.' },
    { q: 'Quel début revient trois fois au milieu du discours ?', a: '« Un jardin où » : c’est une anaphore.' },
    { q: 'Chaque reprise apporte-t-elle quelque chose ?', a: 'Oui : les enfants, les retraités, les voisins. Trois publics, trois usages.' },
    { q: '« Une graine, bientôt une parcelle, et un jour une rue » : comment s’appelle cette suite ?', a: 'Une gradation : chaque terme est plus grand que le précédent.' },
    { q: 'Où sont les raisons qu’on peut vérifier ?', a: 'Le coût (trente-cinq mille euros, dont vingt mille pour le goudron), l’entretien par l’association, quarante-trois signatures, vingt-huit inscrits.' },
    { q: 'La dernière phrase porte-t-elle une ou deux figures ?', a: 'Deux : « votez pour » revient trois fois (une anaphore), et les termes s’élargissent, du jardin à ceux qui vivront après nous (une gradation).' },
  ],
  audio: REC('rec-c1-08-samir'), say: REFRAME, terms: ['anaphore', 'gradation'],
};

const A9_FIGURES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-figures', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-figures',
  title: 'Deux figures du rythme', frSub: 'L’anaphore et la gradation',
  hint: 'Quatre cartes. Écoute ce qui revient, et ce qui monte.',
  audio: AUDIO, say: REFRAME, terms: ['anaphore', 'gradation'],
  cards: [
    { head: 'L’anaphore', label: 'le même début', fr: src(E(1121)).fr, sub: rsOf(E(1121)),
      body: 'Le même mot ou le même groupe revient en tête de plusieurs phrases. Elle martèle et fait retenir. EN: the same opening, repeated.' },
    { head: 'La gradation', label: 'ça monte', fr: src(E(1124)).fr, sub: rsOf(E(1124)),
      body: 'Des termes rangés par intensité, le plus souvent croissante ; elle peut aussi descendre. EN: terms ordered by intensity, usually rising.' },
    { head: 'Les deux à la fois', label: 'ça arrive', fr: src(E(1132)).fr, sub: rsOf(E(1132)),
      body: 'Une phrase peut porter deux figures : « votez pour » revient, et les termes s’élargissent. EN: one sentence can carry both.' },
    { head: 'Le rythme et la preuve', label: 'le test', fr: src(E(1131)).fr, sub: rsOf(E(1131)),
      body: 'La figure est loyale quand chaque reprise ou chaque marche ajoute un fait. Sinon, le rythme tient lieu de preuve. EN: fair when each step adds a fact.' },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-trier', layer: 'core', size: 'lg',
  title: 'Anaphore ou gradation ?', frSub: 'Une figure par phrase',
  groups: [
    grp('Deux phrases, deux figures', [
      it(E(1126), 'pour l’abri à vélos'),
      it(E(1127), 'contre un chantier'),
    ], chk('Laquelle est une anaphore ?', ['celle des trois demandes (« nous voulons »)', 'celle qui va des retards à la colère'], 0,
      '« Nous voulons » revient en tête trois fois ; les demandes ne montent pas en intensité. Des retards à la colère, la phrase monte sans rien répéter : c’est une gradation. EN: repetition here, escalation there.')),
    grp('Trois reprises', [
      it(E(1121)),
      it(E(1122)),
      it(E(1123)),
    ], chk('Ces trois phrases forment...', ['une anaphore', 'une prétérition', 'une question rhétorique'], 0,
      'Le même début, « Un jardin où », trois fois. EN: the same opening three times.')),
    ctl('Le test', 'La gradation « quelques retards, des plaintes, une pétition, et bientôt la colère de tout un quartier » est-elle loyale ?', ['Seulement si chaque marche est prouvée ; sinon, elle fabrique une crainte.', 'Toujours : c’est une figure.'], 0,
      `Nommée, une gradation sans faits devient : « je fais monter la peur ». ${REFRAME} EN: named, an empty climax collapses.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['anaphore', 'gradation', 'loyal'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a9-piege', layer: 'core', swipe: true,
  title: 'Six figures qui tournent à vide',
  rule: {
    title: 'Le rythme fait retenir ; il ne fait pas preuve',
    body: 'Une anaphore ou une gradation porte des faits, ou elle remplace les faits. Chaque reprise doit ajouter quelque chose de vrai. EN: each repetition must add something true.',
  },
  cards: [
    { promptLabel: 'une anaphore vide', promptSound: 'Nous voulons un abri, nous voulons un abri, nous voulons un abri.', fr: src(E(1126)).fr, ipa: ipaOf(E(1126)), tip: 'Trois reprises, trois demandes réelles : ferme, solide, éclairé. EN: three real requests.' },
    { promptLabel: 'une gradation inventée', promptSound: 'Un vélo volé aujourd’hui, et demain la ville entière livrée aux voleurs.', fr: src(E(1124)).fr, ipa: ipaOf(E(1124)), tip: 'Une gradation loyale monte par des marches qui existent. EN: real steps only.' },
    { promptLabel: 'le rythme pris pour une preuve', promptSound: 'Je l’ai dit trois fois : c’est donc vrai.', fr: src(E(1131)).fr, ipa: ipaOf(E(1131)), tip: 'Répéter fait retenir, pas prouver. EN: repetition is not proof.' },
    { promptLabel: 'une reprise sans fait', promptSound: 'Un jardin pour rêver, un jardin pour rêver encore, un jardin pour rêver toujours.', fr: src(E(1129)).fr, ipa: ipaOf(E(1129)), tip: 'Chaque reprise doit apporter quelque chose de vrai. EN: each repetition must add something.' },
    { promptLabel: 'la figure à la place de la raison', promptSound: 'Votez pour le jardin, votez pour l’avenir, votez pour la vie.', fr: src(E(1133)).fr, ipa: ipaOf(E(1133)), tip: 'Samir demande une voix, pas une émotion, et il a donné ses chiffres. EN: he gave his figures first.' },
    { promptLabel: 'la formule répétée pour rien', promptSound: 'Le jardin est beau. Le jardin est beau. Le jardin est beau.', fr: src(E(1134)).fr, ipa: ipaOf(E(1134)), tip: 'Reprends la formule pour ajouter une raison, jamais pour la répéter. EN: repeat to add, not to echo.' },
  ],
  drill: [
    { promptSay: 'Le même début repris en tête de phrase : c’est une ... .', opts: ['anaphore', 'gradation'], correct: 0 },
    { promptSay: 'Des termes de plus en plus forts : c’est une ... .', opts: ['anaphore', 'gradation'], correct: 1 },
    { promptSay: 'Une graine, une parcelle, une rue : la gradation est ... .', opts: ['ascendante', 'descendante'], correct: 0 },
    { promptSay: 'Une figure est loyale quand chaque reprise ajoute un ... .', opts: ['fait', 'son'], correct: 0 },
    { promptSay: 'Le rythme fait ... ; il ne fait pas preuve.', opts: ['retenir', 'mentir'], correct: 0 },
    { promptSay: 'Une gradation peut aussi être ... .', opts: ['décroissante', 'interdite'], correct: 0 },
    { promptSay: '« Un jardin où » revient trois fois : c’est une ... .', opts: ['anaphore', 'prétérition', 'analogie'], correct: 0 },
    { promptSay: 'Samir donne aussi ses chiffres : le jardin coûte ... mille euros.', opts: ['trente-cinq', 'vingt'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le rythme ne fait pas preuve' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un orateur répète pour rien' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-08-piege-figures'), say: REFRAME, terms: ['anaphore', 'gradation'],
};

const A9_PLAIDOYER = pourTonPlaidoyer('a9-plaidoyer', 'Ta figure', [
  grp('Deux anaphores pour l’abri', [
    free('Un abri pour les vélos, un abri pour l’avenir, un abri pour nos rêves.', 'A shelter for bikes, a shelter for the future, a shelter for our dreams.', 'des reprises vides'),
    free('Un abri qui ferme à clé, un abri éclairé le soir, un abri à deux minutes des quais.', 'A shelter that locks, a shelter lit in the evening, a shelter two minutes from the platforms.', 'trois reprises, trois faits'),
  ], chk('Laquelle est loyale ?', ['l’avenir et les rêves', 'la clé, l’éclairage, les deux minutes'], 1,
    'Chaque reprise apporte un fait qu’on peut vérifier. EN: each repetition adds a checkable fact.')),
  grp('Ta reprise', [
    it(E(1134), 'une raison par reprise'),
    it(E(1129), 'la règle'),
  ], chk('Tu reprends trois fois une formule. Chaque fois...', ['tu ajoutes un fait nouveau', 'tu montes le ton'], 0,
    'Le rythme porte les faits ; il ne les remplace pas. EN: rhythm carries facts.')),
], ['anaphore', 'loyal']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’anaphore', 'Une anaphore, c’est...', ['le même début repris en tête de plusieurs phrases', 'une suite de termes de plus en plus forts'], 0,
    'Le début revient ; l’intensité, elle, ne monte pas forcément. EN: the opening returns.'),
  ctl('La gradation', 'Une gradation, c’est...', ['une suite de termes rangés par intensité', 'une question sans réponse'], 0,
    'Le plus souvent croissante, parfois décroissante. EN: usually rising.'),
  ctl('Loyale', 'Une figure est loyale quand...', ['chaque reprise ajoute un fait', 'elle est répétée au moins trois fois'], 0,
    'Le rythme ne fait pas preuve. EN: rhythm is not proof.'),
], ['anaphore', 'gradation']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Anaphore et gradation',
    opener: {
      line: '« Un jardin où… », trois fois, puis une graine qui devient une rue : ici tu nommes ces deux figures et tu vérifies ce qu’elles portent. EN: “A garden where…” three times, then a seed that becomes a street: here you name these two figures and check what they carry.',
      imageRef: 'lessons/persuader/act09.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une anaphore et une gradation, et tu sais si chaque reprise ajoute un fait. EN: You can recognise an anaphora and a gradation, and tell whether each repetition adds a fact.',
    estScreens: 36, restPoints: ['a9-figures', 'a9-piege'],
  },
  sections: [A9_DISCOURS, A9_FIGURES, A9_TRIER, A9_PIEGE, A9_PLAIDOYER, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LA PRÉTÉRITION
 *
 *  TEXT: Gilles’s speech for the pool, full of prétéritions against the
 *  garden. MOVE: saying while claiming not to say; fair if it could be said
 *  openly, with proof (the sourced cost); unfair when it slips in an
 *  insinuation or a rumour.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_DISCOURS: Sec<'reading'> = {
  type: 'reading', id: 'a10-discours', layer: 'core', questionsInModal: true,
  title: 'Le discours de Gilles', frSub: 'Pour la piscine, contre le jardin',
  text: PRETERITION_TEXT,
  glossary: [
    { word: 'procès', en: 'trial (here: a full-scale attack)', note: 'Faire le procès de quelque chose, c’est l’attaquer point par point.' },
  ],
  questions: [
    { q: 'Devine le sens : « ce n’est pas mon genre ». Que veut dire cette formule ?', a: 'Ce n’est pas ma façon de faire.' },
    { q: 'Gilles dit qu’il ne fera pas le procès du jardin. Que fait-il ensuite ?', a: 'Il le fait : les quatre bacs, les vingt mille euros, les rumeurs d’arrosage.' },
    { q: 'Quelle prétérition glisse une information sans source ?', a: 'Les « rumeurs d’arrosage avec l’eau de la ville » : personne ne les attribue, et « chacun se fera son idée ».' },
    { q: 'Quelle prétérition est loyale ?', a: '« Je ne reviendrai pas sur le coût, cent quatre-vingt mille euros, détaillé page six du rapport » : le chiffre est donné, et sa source aussi.' },
    { q: '« Inutile de vous rappeler ce qu’il en coûterait de la fermer » : que manque-t-il ?', a: 'Le chiffre : il suppose une évidence sans la donner.' },
    { q: 'La dernière phrase oppose « une idée » et « un service ». Que lui reprocher ?', a: `Un faux choix, que ${ARGU_REF} t’a appris à repérer : le budget finance cinq projets, pas un seul.` },
  ],
  audio: REC('rec-c1-08-gilles'), say: REFRAME, terms: ['preterition', 'loyal'],
};

const A10_FORMULES: Sec<'examples'> = {
  type: 'examples', id: 'a10-formules', layer: 'core', sheetId: 'sheet-figures',
  title: 'Six prétéritions, une par formule',
  examples: [
    ex(E(1135), '« je ne rappellerai pas que… » : et il le rappelle'),
    ex(E(1136), '« je ne dirai pas que… » : et il le dit'),
    ex(E(1137), '« je passerai sur… » : une rumeur glissée'),
    ex(E(1138), '« inutile de rappeler… » : une évidence supposée'),
    ex(E(1139), '« je n’évoquerai pas… » : un renvoi courtois'),
    ex(E(1145), '« je ne reviendrai pas sur… » : le chiffre et sa source'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['preterition'],
};

const A10_LOYAL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-loyal', layer: 'core', size: 'lg',
  title: 'Dire ouvertement', frSub: 'Est-ce loyal ?',
  groups: [
    grp('La même idée, deux façons', [
      it(E(1135), 'la prétérition'),
      it(E(1143), 'la même idée, dite ouvertement'),
    ], chk('Que gagne la version ouverte ?', ['l’orateur assume ce qu’il dit, et on peut lui répondre', 'rien : elle est plus longue'], 0,
      'Dite ouvertement, l’idée se discute : quatre bacs, ce n’est pas trente parcelles. EN: said openly, it can be answered.')),
    grp('Trois prétéritions', [
      it(E(1137), 'les rumeurs'),
      it(E(1139), 'les familles du car'),
      it(E(1145), 'le coût'),
    ], chk('Laquelle ne survivrait pas si on la disait ouvertement ?', ['la rumeur d’arrosage', 'le renvoi aux familles du car', 'le coût détaillé page six'], 0,
      'Dire ouvertement « il paraît qu’ils arrosent avec l’eau de la ville », sans source, ne tient pas. EN: an unsourced rumour cannot be said openly.')),
    ctl('Le test', '« Je ne dirai pas que c’est cher. » Nommée, que devient la phrase ?', ['« Je dis que c’est cher, sans le prouver. » Elle perd sa force.', 'Elle garde toute sa force.'], 0,
      `${REFRAME} EN: named, the paralipsis loses its force.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['preterition', 'loyal'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre prétéritions à réécrire',
  errors: [
    { wrong: 'Je ne dirai pas que l’association est incompétente.', right: 'L’association a géré quatre bacs ; trente parcelles seraient un autre défi.',
      why: 'Normal : la prétérition semble plus élégante qu’une attaque. Mais elle accuse sans assumer. Dis le fait, et laisse juger. EN: state the fact and own it.' },
    { wrong: 'Je passerai sur les rumeurs.', right: 'Je n’ai aucune preuve sur l’arrosage, donc je n’en parle pas.',
      why: 'Mentionner une rumeur en disant la taire, c’est la répandre. EN: mentioning a rumour spreads it.' },
    { wrong: 'Inutile de rappeler ce que coûterait la fermeture.', right: 'Si la fermeture coûte cher, je donne le chiffre et sa source.',
      why: 'L’évidence supposée dispense de preuve. Le chiffre, lui, se vérifie. EN: give the figure.' },
    { wrong: 'Toute prétérition est une manipulation.', right: 'Une prétérition est loyale si l’on peut dire la même chose ouvertement, preuve à l’appui.',
      why: 'L’excès inverse : « je ne reviendrai pas sur le coût, détaillé page six » est une prétérition loyale. EN: some paralipses are fair.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preterition', 'loyal'],
};

const A10_PLAIDOYER = pourTonPlaidoyer('a10-plaidoyer', 'Le projet rival', [
  grp('Deux façons de parler de la piscine', [
    free('Je ne dirai pas que la piscine est un gouffre financier.', 'I will not say that the pool is a financial black hole.', 'une insinuation'),
    free('La piscine demande cent quatre-vingt mille euros ; le jardin, trente-cinq mille.', 'The pool needs one hundred and eighty thousand euros; the garden, thirty-five thousand.', 'deux chiffres, côte à côte'),
  ], chk('Laquelle est loyale envers le projet rival ?', ['« je ne dirai pas que… »', '« deux chiffres, côte à côte »'], 1,
    'Deux chiffres sourcés : le lecteur compare lui-même. EN: two sourced figures, side by side.')),
  grp('Ta règle', [
    it(E(1147), 'penser, dire, prouver'),
    it(E(1141), 'le test'),
  ], chk('Tu as envie d’écrire « je ne dirai pas que… ». Tu...', ['le dis ouvertement, avec ta preuve, ou tu ne le dis pas', 'gardes la formule : elle protège'], 0,
    'Si tu ne peux pas le dire ouvertement, ne le glisse pas. EN: if you cannot say it openly, do not slip it in.')),
], ['preterition', 'loyal']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La prétérition', 'La prétérition, c’est...', ['dire une chose en prétendant la taire', 'poser une question sans réponse'], 0,
    '« Je ne dirai pas que… » : et c’est dit. EN: and it is said.'),
  ctl('Loyale', 'Une prétérition est loyale si...', ['on peut dire la même chose ouvertement, preuve à l’appui', 'elle reste discrète'], 0,
    'Le test de la leçon, appliqué à la figure. EN: the lesson’s test.'),
  ctl('Déloyale', 'Laquelle insinue ?', ['« Je passerai sur les rumeurs d’arrosage. »', '« Je ne reviendrai pas sur le coût, détaillé page six. »'], 0,
    'Une rumeur sans source, glissée sans être assumée. EN: an unsourced rumour slipped in.'),
], ['preterition']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'La prétérition',
    opener: {
      line: '« Je ne dirai pas que… », et c’est dit : ici tu apprends à reconnaître la prétérition, et à distinguer celle qui renvoie de celle qui insinue. EN: “I will not say that…”, and it is said: here you learn to spot paralipsis, and to tell the one that refers from the one that insinuates.',
      imageRef: 'lessons/persuader/act10.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une prétérition, tu sais si elle pourrait se dire ouvertement, et tu la réécris quand elle insinue. EN: You can spot a paralipsis, tell whether it could be said openly, and rewrite it when it insinuates.',
    estScreens: 34, restPoints: ['a10-formules', 'a10-erreurs'],
  },
  sections: [A10_DISCOURS, A10_FORMULES, A10_LOYAL, A10_ERREURS, A10_PLAIDOYER, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — L’OBJECTION PRÉVENUE
 *
 *  TEXT: Maud’s op-ed for the bike shelter, three objections answered.
 *  MOVE: state the objection first, in its strongest form, concede the true
 *  part, answer the rest; say what you do not know. b2.23’s straw man is
 *  its opposite; b2.26 named the objection orally; c1.21 made it heard.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_TRIBUNE: Sec<'reading'> = {
  type: 'reading', id: 'a11-tribune', layer: 'core', questionsInModal: true,
  title: 'Trois objections, trois réponses', frSub: 'La tribune de Maud',
  text: OBJECTION_TEXT,
  glossary: [
    { word: 'navetteurs', en: 'commuters', note: 'Les personnes qui font chaque jour le trajet entre leur domicile et leur travail.' },
  ],
  questions: [
    { q: 'Devine le sens : « telles qu’il serait commode qu’elles soient ». Que veut dire « commode » ici ?', a: 'Pratique, arrangeant : des objections faciles à réfuter.' },
    { q: 'Quelles sont les trois objections ?', a: 'L’abri supprime douze places ; quarante places sont un luxe pour quelques abonnés ; les caméras suffiront contre les vols.' },
    { q: 'Que concède Maud sur la première, et comment répond-elle ?', a: 'Que douze places comptent pour un commerçant ; puis le comptage de mars montre qu’elles servent surtout à des navetteurs.' },
    { q: 'Comment montre-t-elle qu’elle prend la deuxième au sérieux ?', a: 'Elle la reformule dans sa forme la plus forte : pourquoi dépenser 52 000 euros pour une minorité ?' },
    { q: 'Que fait-elle quand elle n’a pas de chiffres ?', a: 'Elle le dit, n’en invente pas, et s’appuie sur une différence : une caméra filme un vol, un abri l’empêche.' },
    { q: 'Sur quel point donne-t-elle raison aux commerçants ?', a: 'L’accès des livreurs pendant les travaux, qu’elle demande d’écrire dans le projet.' },
  ],
  audio: REC('rec-c1-08-maud'), say: REFRAME, terms: ['objection', 'loyal'],
};

const A11_FORMULES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a11-formules', layer: 'core', sheetId: 'sheet-plaidoyer',
  title: 'Six formules pour prévenir l’objection',
  cols: ['Formule', 'Registre', 'Ce qu’elle fait'],
  rows: [
    { cells: ['on m’objectera que', 'soutenu', 'annonce l’objection'], say: src(E(1149)).fr,
      detail: { title: 'On m’objectera que', body: `Tu l’as entendue dans ${DEBATS_REF}, dans la bouche d’un invité. À l’écrit, elle ouvre l’objection avant que l’autre ne la formule. EN: you heard it in a debate; in writing it opens the objection first.`, say: src('fr.c1.discours-dexamen.1473').fr } },
    { cells: ['d’aucuns diront que', 'soutenu, écrit', 'prête l’objection à d’autres'], say: src(E(1151)).fr,
      detail: { title: 'D’aucuns diront que', body: '« D’aucuns » : certains, en registre soutenu. L’objection est attribuée sans viser personne. EN: formal “some people”.', say: src(E(1158)).fr } },
    { cells: ['vous me direz que', 'courant', 's’adresse au lecteur'], say: src(E(1153)).fr,
      detail: { title: 'Vous me direz que', body: `Plus direct, proche de l’oral. ${Cap(NEGO_REF)} disait, en réunion : « je sais ce que tu vas me dire ». EN: closer to speech.`, say: src('fr.b2.affaires.1343').fr } },
    { cells: ['c’est exact, et…', 'courant', 'concède la part vraie'], say: src(E(1150)).fr,
      detail: { title: 'Concéder', body: `Accorde ce qui est vrai, avec les formes de ${CONCESSION_REF}, puis réponds. Une concession sans réponse donne raison à l’autre. EN: concede, then answer.`, say: src(RH(32)).fr } },
    { cells: ['reste un point où…', 'soutenu', 'donne raison à l’autre'], say: src(E(1155)).fr,
      detail: { title: 'Donner un point', body: 'Reconnaître un point à l’autre camp rend tout le reste plus crédible. EN: granting a point makes the rest credible.', say: src(RH(141)).fr } },
    { cells: ['dans sa forme la plus forte', 'soutenu', 'refuse l’homme de paille'], say: src(E(1152)).fr,
      detail: { title: 'La forme la plus forte', body: `L’inverse de l’homme de paille que ${ARGU_REF} t’a appris à repérer : tu réponds à la meilleure version de l’objection. EN: the opposite of the straw man.`, say: src(E(1161)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['objection'],
};

const A11_PAILLE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-paille', layer: 'core', size: 'lg',
  title: 'Objection loyale ou homme de paille ?', frSub: 'Est-ce loyal ?',
  groups: [
    grp('Deux façons de présenter l’autre camp', [
      it(E(1159), 'une caricature'),
      it(E(1160), 'la crainte prise au sérieux'),
      it('fr.b2.opinions-et-avis.1772', 'le nom du piège'),
    ], chk('Laquelle est un homme de paille ?', ['« les commerçants se moquent bien des cyclistes »', '« la crainte est légitime »'], 0,
      `${Cap(ARGU_REF)} l’appelait ainsi : on combat une version affaiblie de l’adversaire. Ici, on lui prête même un mépris qu’il n’a pas exprimé. EN: a weakened, invented version.`)),
    grp('Répondre après avoir concédé', [
      it(RH(8), 'concéder, puis répondre'),
      it(RH(32), 'je le concède, mais…'),
      it(RH(20), 'l’objection se tient, sauf que…'),
    ], chk('Après une concession, il faut...', ['une réponse, sinon l’objection gagne', 's’arrêter là, par politesse'], 0,
      'Accorder, puis répondre : la concession prépare la réponse. EN: concede, then answer.')),
    ctl('Le test', '« Je réponds à la version la plus faible de votre objection. » Ainsi nommée, la réponse convainc-elle ?', ['Non : nommée, elle tombe.', 'Oui, aussi bien.'], 0,
      `L’objection prise dans sa forme la plus forte résiste au test. ${REFRAME} EN: the strongest form survives being named.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['objection', 'loyal'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a11-piege', layer: 'core', swipe: true,
  title: 'Six façons de rater une objection',
  rule: {
    title: 'La formuler mieux que l’adversaire, puis y répondre',
    body: 'Annonce l’objection, prends-la dans sa forme la plus forte, concède ce qu’elle a de vrai, réponds au reste, et dis ce que tu ne sais pas. EN: announce, strengthen, concede, answer, admit.',
  },
  cards: [
    { promptLabel: 'l’homme de paille', promptSound: 'On m’objectera que les commerçants détestent les vélos.', fr: src(E(1160)).fr, ipa: ipaOf(E(1160)), tip: 'Personne n’a dit cela. Prends la vraie crainte : perdre des clients. EN: take the real fear.' },
    { promptLabel: 'l’objection rapetissée', promptSound: 'D’aucuns diront que l’abri coûte un peu cher, voilà tout.', fr: src(E(1152)).fr, ipa: ipaOf(E(1152)), tip: 'Cinquante-deux mille euros pour une minorité : voilà la forme forte. EN: state it at full strength.' },
    { promptLabel: 'la concession sans réponse', promptSound: 'C’est exact, l’abri supprime douze places. Passons.', fr: src(E(1150)).fr, ipa: ipaOf(E(1150)), tip: 'Concède, puis réponds : le comptage montre des voitures de navetteurs. EN: concede, then answer.' },
    { promptLabel: 'le chiffre inventé', promptSound: 'Les caméras ne font baisser les vols que de deux pour cent.', fr: src(E(1154)).fr, ipa: ipaOf(E(1154)), tip: 'Sans source, ne donne pas de chiffre : dis que tu n’en as pas. EN: no source, no figure.' },
    { promptLabel: 'tout nier', promptSound: 'Les commerçants ont tort sur toute la ligne.', fr: src(E(1155)).fr, ipa: ipaOf(E(1155)), tip: 'Ils ont raison sur les livraisons : dis-le. EN: grant the point they win.' },
    { promptLabel: 'tout prétendre régler', promptSound: 'J’ai répondu à toutes les objections possibles.', fr: src(E(1162)).fr, ipa: ipaOf(E(1162)), tip: 'Personne ne répond à tout : le dire rend crédible. EN: nobody answers everything.' },
  ],
  drill: [
    { promptSay: 'On m’... que l’abri supprime douze places.', opts: ['objectera', 'accordera'], correct: 0 },
    { promptSay: 'D’aucuns ... que c’est un luxe.', opts: ['diront', 'dirons'], correct: 0 },
    { promptSay: 'Je prends l’objection dans sa forme la plus ... .', opts: ['forte', 'faible'], correct: 0 },
    { promptSay: 'Caricaturer l’objection, c’est fabriquer un homme de ... .', opts: ['paille', 'fer'], correct: 0 },
    { promptSay: 'Après la concession vient la ... .', opts: ['réponse', 'fin'], correct: 0 },
    { promptSay: 'Sans chiffres, Maud ne va pas en ... .', opts: ['inventer', 'chercher'], correct: 0 },
    { promptSay: 'Reste un point où les commerçants ont ... .', opts: ['raison', 'tort'], correct: 0 },
    { promptSay: 'Vous me ... que les caméras suffiront.', opts: ['direz', 'dirai'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Prévenir l’objection' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un orateur pressé fait de l’objection' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-08-piege-objection'), say: REFRAME, terms: ['objection'],
};

const A11_PLAIDOYER = pourTonPlaidoyer('a11-plaidoyer', 'Ton objection', [
  grp('Deux façons d’annoncer l’objection', [
    free('Certains, qui n’ont rien compris, diront que le jardin coûte trop cher.', 'Some, who have understood nothing, will say the garden costs too much.', 'l’objection méprisée'),
    it(E(1164), 'l’objection annoncée sans mépris'),
  ], chk('Laquelle prépare une réponse loyale ?', ['« certains, qui n’ont rien compris »', '« l’objection la plus sérieuse, la voici »'], 1,
    'Mépriser l’objection, c’est déjà l’affaiblir : un homme de paille. EN: contempt weakens the objection.')),
  grp('Ta réponse', [
    it(E(1168), 'la plus forte, pas la plus facile'),
    it(E(1161), 'telles qu’elles sont'),
  ], chk('L’objection principale de ton projet est sérieuse. Tu...', ['la formules au mieux, concèdes ce qui est vrai, puis réponds', 'la passes sous silence'], 0,
    'C’est exactement ce que ta mission notera. EN: this is what your task will be graded on.')),
], ['objection', 'loyal']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Prévenir', 'Prévenir l’objection, c’est...', ['la formuler aussi bien que l’adversaire, puis y répondre', 'l’éviter'], 0,
    'Tu la dis avant lui, et mieux. EN: say it first, and better.'),
  ctl('L’homme de paille', 'Répondre à une version caricaturée de l’objection, c’est...', ['un homme de paille', 'une concession'], 0,
    'Le piège que la leçon 23 du B2 nommait. EN: the straw man.'),
  ctl('L’ignorance', 'Tu n’as pas de chiffre sur un point. Tu...', ['le dis', 'en estimes un'], 0,
    'Un chiffre inventé ruine tous les autres. EN: an invented figure ruins the rest.'),
], ['objection']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'L’objection prévenue',
    opener: {
      line: 'Maud écrit les objections de ses adversaires mieux qu’eux, puis y répond : ici tu apprends à prévenir une objection sans la caricaturer. EN: Maud writes her opponents’ objections better than they do, then answers them: here you learn to anticipate an objection without caricaturing it.',
      imageRef: 'lessons/persuader/act11.jpg',
    },
    sections: [],
    milestone: 'Tu annonces une objection dans sa forme la plus forte, tu concèdes ce qui est vrai et tu réponds au reste. EN: You can state an objection at its strongest, concede what is true and answer the rest.',
    estScreens: 36, restPoints: ['a11-formules', 'a11-piege'],
  },
  sections: [A11_TRIBUNE, A11_FORMULES, A11_PAILLE, A11_PIEGE, A11_PLAIDOYER, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON PLAIDOYER
 *
 *  The production act. The dossier (three projects, each with its main
 *  objection and one fact that bears on it) is read, planned, rehearsed with
 *  Bastien, then written. The brief prints the dossier again (no `source`
 *  field on `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_DOSSIER: Sec<'reading'> = {
  type: 'reading', id: 'a12-dossier', layer: 'core', questionsInModal: true,
  title: 'Le dossier de ta mission', frSub: 'Trois projets, trois objections',
  text: DOSSIER_TEXT,
  glossary: [
    { word: 'en lice', en: 'in the running', note: 'En compétition, comme des candidats.' },
  ],
  questions: [
    { q: 'Devine le sens : « cinq projets en lice ». Que veut dire « en lice » ?', a: 'En compétition pour le même budget.' },
    { q: 'Quel est le coût de chaque projet, et lequel revient chaque année ?', a: 'Le jardin, 35 000 euros ; l’abri, 52 000 euros ; la médiathèque, 60 000 euros par an, chaque année.' },
    { q: 'Quelle est l’objection principale de chaque projet ?', a: 'Le jardin : trois places perdues et une association sans expérience d’un tel terrain. La médiathèque : une dépense annuelle et un effet non mesuré. L’abri : des places perdues pour un service réservé aux abonnés.' },
    { q: 'Quel fait du dossier aide à répondre à chaque objection ?', a: 'Le jardin : douze ans de bacs à l’école et vingt-huit familles inscrites. La médiathèque : les places prises dès 11 heures, un public de familles et d’étudiants. L’abri : le comptage qui montre surtout des voitures de navetteurs.' },
    { q: 'Quel projet choisis-tu, et as-tu un intérêt à le défendre ?', a: 'Réponse libre. Si tu as un intérêt, ton plaidoyer commencera par le dire.' },
  ],
  audio: REC('rec-c1-08-dossier'), say: REFRAME, terms: ['logos', 'objection'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-plaidoyer',
  title: 'Six étapes pour ton plaidoyer',
  steps: [
    '1. Dis d’où tu parles : ta place dans le quartier, ton intérêt s’il y en a un. EN: say where you speak from.',
    '2. Prends position, puis donne deux ou trois raisons vérifiables, tirées du dossier. EN: take a position, give checkable reasons.',
    '3. Ajoute une émotion tenue par un fait, et une ou deux figures : question rhétorique, anaphore, gradation ou analogie. EN: one fair emotion, one or two figures.',
    '4. Formule l’objection principale dans sa forme la plus forte, concède ce qui est vrai, réponds au reste. EN: state, concede, answer.',
    '5. Conclus en laissant le vote au lecteur. EN: conclude and leave the vote to the reader.',
    '6. Termine par « Mes procédés » : nomme chacun, et dis pourquoi il est loyal. EN: end by naming your moves and why each is fair.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal', 'objection'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu plaideras',
  cases: [
    { situation: 'Un vote de quartier ou de copropriété', fr: src(E(1166)).fr, en: src(E(1166)).en },
    { situation: 'Une demande de budget au travail', fr: src(E(1169)).fr, en: src(E(1169)).en },
    { situation: 'À l’examen, un texte argumentatif', fr: src(E(1168)).fr, en: src(E(1168)).en },
    { situation: 'Une lettre au maire ou au journal local', fr: src(E(1170)).fr, en: src(E(1170)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal', 'ethos'],
};

/** USE IT, out loud. Every French string here uses the typographic ’ and
 *  quotes only authored rows. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Bastien veut t’aider',
  setting: 'Mercredi soir, au café de la place. Tu prépares ton plaidoyer pour l’abri à vélos. Bastien, ton voisin au conseil, a plein d’idées pour « gagner le vote ». Tu les rends loyales, une par une.',
  turns: [
    {
      ai: 'Commence par dire que tout le quartier est avec toi. Ça impressionne.', en: 'Start by saying the whole neighbourhood is with you. It impresses people.',
      user: src(E(1166)).fr, userEn: 'I have an interest in this project: I take the train every morning. (Ethos earned: the interest declared, not an invented unanimity.)',
      alts: [
        { fr: src(E(1025)).fr, en: src(E(1025)).en },
        { fr: 'Je dirai combien de cyclistes attendent chaque matin : soixante, c’est déjà beaucoup.', en: 'I will say how many cyclists wait every morning: sixty is already a lot.' },
      ],
    },
    {
      ai: 'Et cite un champion cycliste, n’importe lequel. Les gens adorent.', en: 'And quote a cycling champion, any of them. People love it.',
      user: 'Un champion connaît la course, pas le stationnement d’une gare ; je cite plutôt le comptage de la ville.', userEn: 'A champion knows racing, not station parking; I would rather quote the town’s count. (Expertise, not borrowed prestige.)',
      alts: [
        { fr: src(E(1069)).fr, en: src(E(1069)).en },
        { fr: 'Je citerai le comptage de mars : il dit qui occupe les douze places.', en: 'I will quote the March count: it says who uses the twelve spaces.' },
      ],
    },
    {
      ai: 'Ajoute une question qui tue : « Qui veut encore se faire voler son vélo ? »', en: 'Add a killer question: “Who still wants their bike stolen?”',
      user: 'D’accord pour une question, mais sur un fait : soixante vélos attendent chaque matin sous la pluie, qui trouve ça normal ?', userEn: 'Fine for a question, but on a fact: sixty bikes wait in the rain every morning, who thinks that is normal? (A rhetorical question resting on a fact.)',
      alts: [
        { fr: src(E(1108)).fr, en: 'Who wants a station where one cyclist in five has already had their bike stolen? (Resting on the collective’s survey, which I will cite.)' },
        { fr: 'Je la garde seulement si presque tout le monde y répond de la même façon.', en: 'I keep it only if almost everyone answers it the same way.' },
      ],
    },
    {
      ai: 'Et les commerçants, ignore-les. Ils sont contre de toute façon.', en: 'And ignore the shopkeepers. They are against it anyway.',
      user: src(E(1149)).fr, userEn: 'It will be objected that the shelter removes twelve parking spaces. (The objection stated first, at full strength.)',
      alts: [
        { fr: src(E(1160)).fr, en: src(E(1160)).en },
        { fr: 'Je leur donnerai raison sur les livraisons pendant les travaux.', en: 'I will grant them the point on deliveries during the works.' },
      ],
    },
    {
      ai: 'Tu pourrais glisser que les voitures garées toute la journée sont celles des commerçants eux-mêmes. Sans le dire, bien sûr.', en: 'You could slip in that the cars parked all day belong to the shopkeepers themselves. Without saying it, of course.',
      user: 'Ce serait une prétérition déloyale : je n’ai aucune preuve, donc je ne le dis pas.', userEn: 'That would be an unfair paralipsis: I have no proof, so I do not say it. (The lesson’s test, applied.)',
      alts: [
        { fr: src(E(1147)).fr, en: src(E(1147)).en },
        { fr: 'Si le comptage le montrait, je le dirais ouvertement ; il ne le montre pas.', en: 'If the count showed it, I would say so openly; it does not.' },
      ],
    },
    {
      ai: 'Bon. Et à la fin, tu fais quoi ?', en: 'Right. And at the end, what do you do?',
      user: 'Je nomme mes procédés, un par un, et je dis pourquoi chacun est loyal.', userEn: 'I name my devices one by one, and say why each is fair. (« Mes procédés », the end of the task.)',
      alts: [
        { fr: src(E(1167)).fr, en: src(E(1167)).en },
        { fr: src(E(1173)).fr, en: src(E(1173)).en },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal', 'objection'],
};

/** THE GRADED TASK: a C1 persuasive piece that names its own moves and
 *  answers one objection fairly. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Écris ton plaidoyer', frSub: 'Mission écrite',
  brief: `Avant le vote, le conseil de quartier des Tanneurs publie les plaidoyers des habitants. Choisis l’un des trois projets du dossier et écris le tien : il doit convaincre, et rester loyal. Voici le dossier. ${DOSSIER_TEXT}`,
  briefEn: 'Before the vote, the Tanneurs neighbourhood council publishes residents’ pleas. Choose one of the three projects in the dossier and write yours: it must persuade, and stay fair. The dossier is printed here so you can write with it in front of you.',
  produce: 'Écris un plaidoyer de 250 à 400 mots pour l’un des trois projets : dis d’où tu parles, prends position avec des raisons tirées du dossier, emploie au moins trois procédés de la leçon dont une question rhétorique, réponds loyalement à l’objection principale du projet, et termine par un court paragraphe « Mes procédés » qui nomme chacun et dit pourquoi il est loyal.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'these', label: 'Une position et des raisons vérifiables', maxPoints: 4, descriptors: [
        '4 : Une position nette, deux ou trois raisons tirées du dossier, chacune vérifiable (un chiffre avec sa base, un fait sourcé), sans chiffre inventé.',
        '3 : Une position nette et deux raisons, dont une moins précise.',
        '2 : Une position, mais des raisons vagues ou une seule raison vérifiable.',
        '1 : Pas de position claire, ou des raisons absentes ou inventées.',
      ] },
      { key: 'procedes', label: 'Des procédés variés et dosés', maxPoints: 3, descriptors: [
        '3 : Au moins trois procédés de la leçon, dont une question rhétorique, chacun au service d’un fait ; l’ethos est gagné et l’émotion reste à la mesure des faits.',
        '2 : Trois procédés, mais l’un tourne à vide (une figure sans fait, une émotion grossie).',
        '1 : Moins de trois procédés, ou des procédés qui remplacent les raisons.',
      ] },
      { key: 'loyaute', label: 'Des procédés nommés et jugés', maxPoints: 3, descriptors: [
        '3 : Le paragraphe « Mes procédés » nomme juste chaque procédé employé et dit précisément pourquoi il est loyal (il tient une fois nommé).',
        '2 : Les procédés sont nommés, mais le jugement reste général ou un nom est faux.',
        '1 : Pas de paragraphe « Mes procédés », ou des procédés mal nommés.',
      ] },
      { key: 'objection', label: 'L’objection traitée loyalement', maxPoints: 4, descriptors: [
        '4 : L’objection principale du dossier est annoncée dans sa forme la plus forte, sa part vraie est concédée, et la réponse s’appuie sur un fait du dossier.',
        '3 : L’objection est annoncée et la réponse s’appuie sur un fait, mais rien n’est concédé.',
        '2 : L’objection est affaiblie ou caricaturée avant d’être réfutée.',
        '1 : Aucune objection, ou une objection qui n’est pas celle du dossier.',
      ] },
      { key: 'structure', label: 'Un plaidoyer construit', maxPoints: 3, descriptors: [
        '3 : Une progression claire (d’où je parle, position, raisons, objection, conclusion, mes procédés), avec des liens précis.',
        '2 : Les éléments sont là, mais l’ordre ou les liens flottent.',
        '1 : Des remarques juxtaposées, sans fil.',
      ] },
      { key: 'langue', label: 'Une langue précise et nuancée', maxPoints: 3, descriptors: [
        '3 : Un vocabulaire précis et nuancé (concéder, d’aucuns diront, à la mesure de, sourcé), des phrases complexes maîtrisées, presque aucune erreur.',
        '2 : Un vocabulaire juste mais peu varié, quelques erreurs qui ne gênent pas.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'J’habite...',
    'Je défends...',
    'D’abord,',
    'Selon le dossier,',
    'On m’objectera que...',
    'C’est exact, et...',
    'Le vote est à vous.',
    'Mes procédés :',
  ],
  modelAnswer: 'J’habite rue de la Gare et je prends le train chaque matin : j’ai donc un intérêt dans ce projet, et je préfère vous le dire. Je défends l’abri à vélos, pour trois raisons. D’abord, il répond à un besoin qu’on peut compter : soixante vélos sont attachés chaque matin aux grilles de la gare, et l’abri en accueillera quarante. Ensuite, il coûte 52 000 euros, soit 1 300 euros par place, pour un service qui dure des années. Enfin, il désencombre les abords de la gare, où soixante vélos s’entassent chaque matin. Un abri, c’est un vestiaire : on y laisse ses affaires en sécurité pendant la journée. Une gare sans abri, c’est un vestiaire sans porte. Qui laisserait son manteau toute une journée sur une grille, sous la pluie ? Personne, et c’est pourtant ce que soixante cyclistes font chaque matin avec leur vélo. On m’objectera que l’abri supprime douze places de stationnement devant les commerces, au profit d’un service réservé aux abonnés. C’est exact, et je ne veux pas le minimiser : pour un commerçant, une place, c’est un client possible. Mais le comptage de la ville montre que ces places sont occupées surtout par des voitures de navetteurs, garées du matin au soir. Ce ne sont pas des clients que l’on perd, ce sont des voitures ventouses que l’on remplace. Quant à l’abonnement, deux euros par mois, il reste ouvert à tous. Je ne prétends pas que l’abri réglera tout : les livraisons pendant les travaux devront être organisées, et je soutiendrai les commerçants sur ce point. Le vote est à vous ; mes raisons sont sur la table. Mes procédés : j’ai dit d’où je parlais, ce qui tient une fois nommé, puisque vous pouvez peser mon intérêt. J’ai employé une analogie, le vestiaire, qui tient sur un seul point, laisser ses affaires en sécurité, et je l’ai dit. Ma question rhétorique s’appuie sur un fait du dossier, les soixante vélos, et presque tout le monde y répondrait de la même façon. Enfin, j’ai pris l’objection dans sa forme la plus forte avant d’y répondre.',
  modelAnswerEn: 'I live on rue de la Gare and take the train every morning: so I have an interest in this project, and I prefer to tell you. I am defending the bike shelter, for three reasons. First, it meets a need you can count: sixty bikes are locked to the station railings every morning, and the shelter will hold forty. Second, it costs 52,000 euros, that is 1,300 euros per space, for a service that lasts for years. Third, it clears the surroundings of the station, where sixty bikes pile up every morning. A shelter is a cloakroom: you leave your things there safely during the day. A station without a shelter is a cloakroom without a door. Who would leave their coat on a railing all day, in the rain? Nobody, and yet that is what sixty cyclists do every morning with their bikes. It will be objected that the shelter removes twelve parking spaces in front of the shops, for a service reserved for subscribers. That is true, and I do not want to play it down: for a shopkeeper, a space is a possible customer. But the town’s count shows that these spaces are mostly taken by commuters’ cars, parked from morning to evening. It is not customers we lose, it is all-day parkers we replace. As for the subscription, two euros a month, it stays open to all. I do not claim the shelter will solve everything: deliveries during the works will need organising, and I will support the shopkeepers on that point. The vote is yours; my reasons are on the table. My devices: I said where I speak from, which holds once named, since you can weigh my interest. I used an analogy, the cloakroom, which holds on one point only, leaving your things safely, and I said so. My rhetorical question rests on a fact from the dossier, the sixty bikes, and almost everyone would answer it the same way. Finally, I took the objection in its strongest form before answering it.',
  watchFor: [
    { pattern: 'An interest in the project hidden or denied, or an invented unanimity (« tout le quartier », « tout le monde attend »).', criterion: 'procedes', feedback: 'Dis d’où tu parles et, s’il y en a un, ton intérêt. « Tout le quartier » ne tient pas une fois nommé.', ref: 'a2-ethos' },
    { pattern: 'Reasons without a base or a source, or a figure invented beyond the dossier.', criterion: 'these', feedback: 'Chaque raison doit pouvoir se vérifier : un chiffre du dossier, avec sa base. N’invente aucun chiffre.', ref: 'a3-chemins' },
    { pattern: 'An emotion that outgrows the facts or replaces them (fear, guilt, « votez avec votre cœur »).', criterion: 'procedes', feedback: 'Garde l’émotion à la mesure des faits, et toujours avec un fait.', ref: 'a4-mesure' },
    { pattern: 'An authority quoted outside its field, or nameless « experts ».', criterion: 'procedes', feedback: 'Cite une source nommée, dans son domaine, avec sa méthode.', ref: 'a5-questions' },
    { pattern: 'An analogy whose shared feature is not the one the conclusion needs, or an analogy with no stated point.', criterion: 'procedes', feedback: 'Dis sur quel point ton analogie tient ; si ce n’est pas celui dont dépend ta conclusion, change d’image.', ref: 'a6-analogie' },
    { pattern: 'Loaded words that carry the conclusion with no proof (sacrifier, gaspillage, scandale), or the opposing project described with them.', criterion: 'langue', feedback: 'Dis le fait dans des mots que l’autre camp accepterait, puis juge-le.', ref: 'a7-neutre' },
    { pattern: 'No rhetorical question, or one whose answer is disputed or rests on an unverified fact.', criterion: 'procedes', feedback: 'Pose une question rhétorique dont presque tout le monde donnerait la même réponse, appuyée sur un fait du dossier.', ref: 'a8-produire' },
    { pattern: 'An anaphora or gradation that repeats without adding facts.', criterion: 'procedes', feedback: 'Chaque reprise doit ajouter un fait nouveau.', ref: 'a9-trier' },
    { pattern: 'A prétérition that insinuates something about the rival project without proof.', criterion: 'objection', feedback: 'Si tu ne peux pas le dire ouvertement, preuve à l’appui, ne le glisse pas.', ref: 'a10-loyal' },
    { pattern: 'The main objection of the dossier absent, weakened into a straw man, or answered without any concession.', criterion: 'objection', feedback: 'Annonce l’objection du dossier dans sa forme la plus forte, concède ce qui est vrai, puis réponds avec un fait.', ref: 'a11-formules' },
    { pattern: 'No « Mes procédés » paragraph, or devices misnamed (an anaphora called a gradation, a simple question called rhetorical).', criterion: 'loyaute', feedback: 'Termine par « Mes procédés » : nomme chaque procédé juste, et dis pourquoi il tient une fois nommé.', ref: 'a12-plan' },
    { pattern: 'The « Mes procédés » paragraph asserts fairness without saying why (« tous mes procédés sont loyaux »).', criterion: 'loyaute', feedback: 'Pour chaque procédé, dis le fait qui le tient, ou pourquoi il résiste une fois nommé.', ref: 'a1-check' },
  ],
  graderNotes: [
    'Word count: 250 to 400 including the « Mes procédés » paragraph, with 10% tolerance (225 to 440) before the criteria lose points for length. A title does not count.',
    'The task marks persuasion AND fairness. Any of the three projects may earn full marks; the learner’s choice of project is never marked.',
    'Facts: the learner may use only figures and facts from the dossier (and general knowledge that needs no figure). An invented figure caps « these » at 2, even if it is plausible.',
    'Devices that count toward the three (any, if they serve a fact): declared interest or bounded competence (ethos), a sourced figure (logos), a proportionate emotion (pathos), a named source in its field, an analogy with its stated point, a rhetorical question, an anaphora, a gradation, a fair prétérition, the pre-empted objection. A rhetorical question is required for 3 under « procedes ».',
    'Names: accept « ethos » and « éthos »; « question oratoire » for « question rhétorique ». A sentence that carries both an anaphora and a gradation may be named either way or both. Do not mark literary terms beyond the lesson (chiasme, zeugme, hypallage): they belong to a later C1 lesson.',
    'Objection: it must be THE main objection the dossier gives for the chosen project. A concession is « c’est exact », « je le concède », « certes », « il est vrai que » with the true part stated; any concession form from lesson 16 in B2 is accepted. A straw man (« certains, qui n’ont rien compris ») scores 2 at most.',
    'A prétérition against a rival project that insinuates without proof (« je ne dirai pas que la piscine est un gouffre ») loses a point under « objection » or « procedes », once only.',
    'Accept « voitures ventouses » and other neutral-to-familiar terms for long-stay parking; accept Québec vocabulary alike (stationnement, char not expected).',
    'Do not mark politeness hedges of speech (they belong to another C1 lesson); do not reward or penalise the learner’s own opinion on the projects beyond its reasons.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal', 'objection'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis ton plaidoyer à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-loyal',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'l’ethos', v: 'dire d’où l’on parle, sans se grandir', say: src(E(1025)).fr,
      detail: { title: 'La confiance', body: 'Compétence bornée, intérêt déclaré, limite avouée. EN: bounded competence, declared interest, admitted limits.', say: src(E(1024)).fr } },
    { k: 'le logos', v: 'des raisons qu’on peut vérifier', say: src(E(1039)).fr,
      detail: { title: 'La preuve', body: 'Un chiffre et sa base, une hypothèse dite, un lien jusqu’à la conclusion. EN: base, assumption, link.', say: src(E(1031)).fr } },
    { k: 'le pathos', v: 'une émotion à la mesure des faits', say: src(E(1051)).fr,
      detail: { title: 'L’émotion', body: 'Elle mène aux faits, elle ne les remplace pas. EN: it leads to the facts.', say: src(E(1048)).fr } },
    { k: 'les appuis', v: 'autorité dans son domaine, analogie sur un point', say: src(E(1064)).fr,
      detail: { title: 'Autorité et analogie', body: 'Un nom, un domaine, une méthode ; un point commun qui compte. EN: a field for the authority, the right feature for the analogy.', say: src(E(1075)).fr } },
    { k: 'les mots et les figures', v: 'mot neutre, question partagée, reprise utile', say: src(E(1092)).fr,
      detail: { title: 'Mots et figures', body: 'Le mot ne remplace pas la preuve ; la question suppose une réponse partagée ; chaque reprise ajoute un fait ; la prétérition pourrait se dire ouvertement. EN: words, questions, repetitions, paralipsis.', say: src(E(1129)).fr } },
    { k: 'l’objection', v: 'la plus forte, concédée, puis réfutée', say: src(E(1152)).fr,
      detail: { title: 'L’objection prévenue', body: 'Formule-la mieux que l’adversaire, concède le vrai, réponds au reste. EN: state, concede, answer.', say: src(E(1156)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal', 'ethos', 'logos'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne te laisses plus porter par un discours qui émeut : tu sépares ses raisons de ses procédés. Tu nommes l’ethos, le logos et le pathos, tu demandes à une autorité son domaine et à une analogie son point commun, tu repères le mot qui conclut avant la preuve, et tu reconnais la question rhétorique, l’anaphore, la gradation et la prétérition. Surtout, tu les juges : un procédé loyal résiste quand on le nomme. Le piège qui reste est double : te laisser emporter par une belle salle, ou soupçonner toute émotion et toute figure. Avant ton prochain texte argumentatif, relis-le en nommant chaque procédé à voix haute : garde ceux qui tiennent. EN: Before your next argumentative text, read it aloud naming every move: keep the ones that still hold.',
  stats: [
    { k: 'Les trois preuves', v: 'ethos, logos, pathos' },
    { k: 'Les appuis', v: 'autorité, analogie, mots' },
    { k: 'Les figures', v: 'question, anaphore, gradation, prétérition' },
    { k: 'Le test', v: 'un procédé loyal résiste quand on le nomme' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11. Each round
 *  targets a distinct errorTrigger. Mostly judgement, as a workshop quiz
 *  should; `typeIn` asks for one word or one transformation; `errorSpot`
 *  swaps one word of a judgement. `fold()` strips accents, punctuation and
 *  spacing, so nothing turns on them. Figure items carry ONE defensible
 *  label. The authored slots are then spread by `spreadSlots()`: no `why`
 *  names a position. */

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
      id: 'r1-discours', label: 'Un discours qui émeut', targets: ['emu-donc-convaincu'],
      questions: [
        mc('Un discours t’a ému. Tu en conclus que...', ['ses raisons restent à vérifier', 'il a forcément raison', 'il a forcément tort'], 0, 'L’émotion ne prouve rien, ni pour ni contre. EN: emotion proves nothing either way.', 'a1-scene'),
        mc('Dans le discours de Joëlle, quelle raison peut-on vérifier ?', ['les quarante minutes de car', 'le mot du grand champion', 'la génération qui n’attendra pas'], 0, 'Un trajet se vérifie ; un champion sans nom, non. EN: a journey can be checked.', 'a1-lecture'),
        mc('Qui est le « grand champion » cité par Joëlle ?', ['On ne le sait pas : il n’a pas de nom.', 'Un champion olympique connu de tous.'], 0, 'Joëlle dit que « vous le connaissez tous », sans le nommer. EN: never named.', 'a1-lecture'),
        mc('La règle de la leçon dit qu’un procédé loyal...', ['résiste quand on le nomme', 'reste caché', 'émeut toujours'], 0, `${REFRAME} EN: ${REFRAME_EN}`, 'a1-scene'),
        tI('Complète la règle. Un mot.', 'Un procédé loyal résiste quand on le ... .', 'nomme', 'Nommer un procédé, c’est le mettre à l’épreuve. EN: naming is the test.', 'a1-check'),
        tI('Complète la question à poser. Un mot.', 'Ce procédé tiendrait-il si on le ... ?', 'nommait', 'La question à poser à chaque procédé. EN: the question to ask every move.', 'a1-usages'),
        eS('Avant de voter, je mélange les raisons et les procédés.', 'Avant de voter, je sépare les raisons des procédés.', 'Trier d’abord, voter ensuite. EN: separate first.', 'a1-usages', ['Avant de voter, je sépare les raisons et les procédés.', 'Avant de voter, je distingue les raisons des procédés.', 'Avant de voter, je distingue les raisons et les procédés.']),
        lC('Écoute. Cette phrase prouve-t-elle quelque chose ?', src(E(1000)).fr, ['Non : elle passe de l’émotion au vote sans raison.', 'Oui : l’émotion est une preuve.'], 0, 'Être ému n’est pas une raison de voter. EN: being moved is not a reason.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-ethos', label: 'L’ethos', targets: ['ethos-emprunte'],
      questions: [
        mc('Armelle dit qu’elle habite à trente mètres du parking. Elle...', ['déclare son intérêt', 'se vante', 'change de sujet'], 0, 'Elle profitera du jardin la première, et le dit. EN: a declared interest.', 'a2-lecture'),
        mc('« En tant que mère de famille, je sais ce qui est bon pour la ville. » C’est un ethos...', ['emprunté : être mère ne rend pas compétent sur un budget', 'gagné : elle donne une compétence vérifiable'], 0, 'Un titre qui ne porte pas sur la question. EN: borrowed standing.', 'a2-loyal'),
        mc('Lequel de ces débuts est loyal ?', ['« Je travaille pour l’entreprise qui fabriquerait l’abri ; je préfère vous le dire. »', '« Tout le quartier est derrière moi. »', '« Vous êtes bien trop avisés pour écouter mes adversaires. »'], 0, 'L’intérêt déclaré se pèse ; l’unanimité inventée et la flatterie trichent. EN: declared interest is fair.', 'a2-loyal'),
        mc('Armelle avoue qu’elle n’a pas chiffré l’arrosage. Cet aveu...', ['renforce sa crédibilité', 'ruine son discours'], 0, 'Dire ce qu’on ignore rend crédible le reste. EN: admitting limits builds trust.', 'a2-ethos'),
        tI('Complète. Un mot.', 'L’ethos se gagne en disant d’où l’on ... .', 'parle', 'Compétence, limites, intérêt. EN: where you speak from.', 'a2-ethos'),
        tI('Comment s’appelle la confiance que l’orateur inspire par son discours ? Un mot.', 'La confiance que l’orateur inspire, c’est l’... .', 'ethos', 'La première des trois preuves. EN: ethos.', 'a2-ethos', ['éthos', 'l’ethos', 'l’éthos']),
        eS('Armelle dit qu’elle profitera du jardin la première : elle cache son intérêt.', 'Armelle dit qu’elle profitera du jardin la première : elle déclare son intérêt.', 'Elle le dit avant qu’on le découvre. EN: she declares it.', 'a2-lecture', ['Armelle dit qu’elle profitera du jardin la première : elle avoue son intérêt.', 'Armelle dit qu’elle profitera du jardin la première : elle dit son intérêt.', 'Armelle dit qu’elle profitera du jardin la première : elle reconnaît son intérêt.']),
        lC('Écoute. Cet ethos est-il gagné ou emprunté ?', src(E(1022)).fr, ['gagné : l’oratrice reconnaît sa limite', 'emprunté : l’oratrice se grandit'], 0, 'Elle renvoie au rapport sur ce qu’elle ne sait pas. EN: she points to the report.', 'a2-ethos'),
      ],
    },
    {
      id: 'r3-logos', label: 'Le logos', targets: ['raison-non-verifiee'],
      questions: [
        mc('Sur quoi repose le chiffre de onze mille euros de Théo ?', ['une hypothèse qu’il donne : quarante euros par appareil', 'une étude nationale', 'rien du tout'], 0, 'Il dit le prix moyen retenu : le calcul se discute. EN: a stated assumption.', 'a3-lecture'),
        mc('« La médiathèque est pleine le samedi ; elle le sera donc le dimanche. » Ce raisonnement...', ['va trop vite des cas à la règle', 'est une déduction valable'], 0, 'Un samedi plein ne dit rien du dimanche. EN: a hasty induction.', 'a3-suit'),
        mc('Aller d’une règle générale à un cas particulier, c’est...', ['une déduction', 'une induction', 'une analogie'], 0, 'La règle d’abord, le cas ensuite. EN: deduction.', 'a3-chemins'),
        mc('« Ce sont les faits qui parlent, pas moi. » Que réponds-tu ?', ['Montre-les, pour qu’on puisse les vérifier.', 'Inutile de vérifier, alors.'], 0, 'Des faits ne parlent que si on peut les vérifier. EN: facts must be checkable.', 'a3-suit'),
        tI('Complète. Un mot.', 'Une raison vaut ce que vaut sa ... .', 'preuve', 'Pas de preuve, pas de raison. EN: proof.', 'a3-plaidoyer'),
        tI('Comment s’appellent les raisons que l’auditoire peut vérifier ? Un mot.', 'Les raisons vérifiables, c’est le ... .', 'logos', 'La deuxième des trois preuves. EN: logos.', 'a3-chemins', ['le logos']),
        eS('« La piscine est vieille, donc elle est dangereuse » : le lien est prouvé.', '« La piscine est vieille, donc elle est dangereuse » : le lien manque.', 'Vieille ne veut pas dire dangereuse sans preuve. EN: the link is missing.', 'a3-piege', ['« La piscine est vieille, donc elle est dangereuse » : le lien n’est pas prouvé.', '« La piscine est vieille, donc elle est dangereuse » : le lien est absent.']),
        lC('Écoute. Que fait Théo dans cette phrase ?', src(E(1029)).fr, ['Il avoue ce qu’il ne sait pas.', 'Il invente un chiffre.'], 0, 'Une limite avouée protège le reste du calcul. EN: an admitted unknown.', 'a3-lecture'),
      ],
    },
    {
      id: 'r4-pathos', label: 'Le pathos', targets: ['emotion-sans-mesure'],
      questions: [
        mc('Le pathos est loyal quand l’émotion...', ['est à la mesure des faits', 'est la plus forte possible', 'remplace les chiffres'], 0, 'Elle a la taille du fait qu’elle porte. EN: proportionate.', 'a4-mesure'),
        mc('« Vous ne voudriez pas avoir à vous le reprocher un jour. » Sur quoi joue cette phrase ?', ['la culpabilité', 'la preuve', 'l’humour'], 0, 'Elle promet un remords au lieu de donner une raison. EN: guilt.', 'a4-ecoute'),
        mc('« Sans cet abri, vos enfants risqueront leur vie chaque matin. » Cette peur est...', ['grossie : rien ne la mesure', 'à la mesure des faits'], 0, 'Aucun fait ne dit qu’un vélo garé dehors met une vie en danger. EN: inflated.', 'a4-loyal'),
        mc('Une salle déjà émue applaudit un slogan. Le slogan est-il devenu un argument ?', ['Non : l’émotion de la salle ne prouve rien.', 'Oui : la salle a jugé.'], 0, 'Les applaudissements mesurent l’émotion. EN: applause measures emotion.', 'a4-loyal'),
        tI('Complète. Un mot.', 'Une émotion juste conduit aux faits ; une émotion qui triche les ... .', 'remplace', 'Elle prend leur place. EN: it replaces them.', 'a4-mesure'),
        tI('Comment s’appelle l’appel aux émotions de l’auditoire ? Un mot.', 'L’appel aux émotions de l’auditoire, c’est le ... .', 'pathos', 'La troisième des trois preuves. EN: pathos.', 'a4-mesure', ['le pathos']),
        eS('Joëlle dit « Je vous demande de compter », puis « Votez avec votre cœur » : elle reste cohérente.', 'Joëlle dit « Je vous demande de compter », puis « Votez avec votre cœur » : elle se contredit.', 'Compter, puis voter avec le cœur : la fin efface ce qu’elle venait de dire. EN: she contradicts herself.', 'a4-ecoute', ['Joëlle dit « Je vous demande de compter », puis « Votez avec votre cœur » : elle est incohérente.', 'Joëlle dit « Je vous demande de compter », puis « Votez avec votre cœur » : elle ne reste pas cohérente.']),
        lC('Écoute. Cet appel au cœur est-il loyal ?', src(E(1042)).fr, ['Oui : l’émotion s’appuie sur une raison.', 'Non : elle remplace la raison.'], 0, 'Nager protège un enfant : l’émotion porte un fait. EN: the emotion carries a fact.', 'a4-mesure'),
      ],
    },
    {
      id: 'r5-autorite', label: 'L’autorité et l’expertise', targets: ['autorite-hors-domaine'],
      questions: [
        mc('Clémence Arbaud fait autorité quand elle parle...', ['des romans', 'de la fréquentation des bibliothèques', 'des horaires d’ouverture'], 0, 'Son domaine est le roman. EN: novels are her field.', 'a5-tracts'),
        mc('« Les experts sont unanimes. » Que manque-t-il ?', ['leurs noms et ce qu’ils ont mesuré', 'rien'], 0, 'Sans nom ni mesure, rien à vérifier. EN: names and measures.', 'a5-questions'),
        mc('L’étude du tract B est financée en partie par une association qui milite pour ces horaires. Cela...', ['oblige à la peser, et le tract le dit', 'la rend fausse', 'n’a aucune importance'], 0, 'Un financement dit se pèse ; il ne disqualifie pas à lui seul. EN: disclose and weigh.', 'a5-questions'),
        mc('« Les grandes villes l’ont compris depuis longtemps. » C’est...', ['l’autorité du nombre', 'une étude', 'une mesure de l’effet'], 0, 'Ce que d’autres font n’est pas une preuve que c’est bon ici. EN: the authority of numbers.', 'a5-loyal'),
        tI('Complète. Un mot.', 'Une autorité ne vaut que dans son ... .', 'domaine', 'Le prestige ne se transporte pas. EN: field.', 'a5-piege', ['domaine de compétence', 'champ', 'champ de compétence']),
        tI(`Complète la question que ${CRITIQUE_REF} t’a appris à poser. Un mot.`, 'Qui a ... l’étude ?', 'payé', 'Le financement se déclare. EN: who paid.', 'a5-questions', ['paye', 'financé']),
        eS('La directrice promet que les adolescents liront deux fois plus.', 'La directrice ne promet pas que les adolescents liront deux fois plus.', 'Elle ne promet pas ce qui n’a pas été mesuré. EN: she promises nothing unmeasured.', 'a5-tracts'),
        lC('Écoute. Cet appui est-il loyal ?', src(E(1069)).fr, ['Oui : une source, sa méthode, ses limites.', 'Non : un prestige d’ailleurs.'], 0, 'Tout ce qu’il faut pour vérifier. EN: everything needed to check.', 'a5-loyal'),
      ],
    },
    {
      id: 'r6-analogie', label: 'L’analogie', targets: ['analogie-de-surface'],
      questions: [
        mc('Une analogie devient un argument quand le point commun...', ['est celui dont dépend la conclusion', 'est le plus frappant', 'est le plus ancien'], 0, 'Le bon trait, pas le plus beau. EN: the right feature.', 'a6-analogie'),
        mc('Pourquoi Rémi abandonne-t-il l’image du médecin ?', ['un grille-pain n’est pas une personne', 'elle est trop longue', 'elle vient d’un adversaire'], 0, 'Le point commun ne compte pas pour la conclusion. EN: the shared point does not matter.', 'a6-tribune'),
        mc('Comment répond-il à « une fuite d’eau dans le budget » ?', ['il montre la différence qui compte', 'il traite l’adversaire de menteur', 'il change de sujet'], 0, 'Une fuite ne rapporte rien ; l’atelier évite des achats. EN: the difference that counts.', 'a6-tribune'),
        mc('« Un jardin partagé, c’est comme une salle de sport : on paie et on n’y va jamais. » Cette analogie...', ['suppose ce qu’elle devrait prouver', 'prouve que le jardin sera vide'], 0, 'Rien ne montre que les inscrits n’iront pas cultiver. EN: it assumes its conclusion.', 'a6-tient'),
        tI('Complète le proverbe. Un mot.', 'Comparaison n’est pas ... .', 'raison', 'Une analogie éclaire ; elle ne prouve pas seule. EN: a comparison is not a proof.', 'a6-tribune'),
        tI('Comment s’appelle un raisonnement par ressemblance ? Un mot.', 'Raisonner par ressemblance, c’est faire une ... .', 'analogie', 'L’argument par analogie. EN: analogy.', 'a6-analogie', ['une analogie', 'comparaison', 'une comparaison']),
        eS('L’analogie du cordonnier tient parce que l’atelier vend des chaussures.', 'L’analogie du cordonnier tient parce que l’atelier prolonge la vie des objets.', 'Le point commun : prolonger la vie d’objets qui en valent la peine. EN: extending the life of objects.', 'a6-analogie', ['L’analogie du cordonnier tient parce que l’atelier répare des objets.', 'L’analogie du cordonnier tient parce que l’atelier prolonge la vie d’objets qui en valent la peine.', 'L’analogie du cordonnier tient parce que l’atelier répare les objets.']),
        lC('Écoute. Que fait cette phrase ?', src(E(1074)).fr, ['Elle répond à une analogie par une différence.', 'Elle invente une nouvelle analogie.'], 0, 'Elle montre ce que la fuite n’a pas : un rapport. EN: it names the difference.', 'a6-tribune'),
      ],
    },
    {
      id: 'r7-cadrage', label: 'Les mots qui cadrent', targets: ['mot-qui-conclut'],
      questions: [
        mc('Quel verbe dit le fait sans le juger ?', ['remplacer', 'sacrifier', 'libérer'], 0, '« Sacrifier » et « libérer » jugent déjà. EN: replace is neutral.', 'a7-neutre'),
        mc('« Investissement » au lieu de « dépense » présente la somme comme...', ['un placement qui rapportera', 'une perte sèche'], 0, 'Le mot annonce un retour que le texte ne prouve pas. EN: it promises a return.', 'a7-mots'),
        mc('Pourquoi les deux tracts donnent-ils deux coûts par place ?', ['l’un divise par quarante vélos, l’autre par douze places', 'l’un des deux se trompe dans son calcul'], 0, 'Même dépense, deux bases. EN: same cost, two bases.', 'a7-tracts'),
        mc('« Neuf abonnés sur dix renouvellent » et « un sur dix ne renouvelle pas »...', ['disent le même fait, en gain et en perte', 'se contredisent'], 0, 'Deux cadres pour un fait. EN: two frames, one fact.', 'a7-neutre'),
        tI('Complète. Un mot.', 'Un mot qui contient déjà la conclusion la dispense de ... .', 'preuve', 'Il conclut avant d’argumenter. EN: proof.', 'a7-piege'),
        tI('Écris le verbe neutre, au présent. Un mot.', 'Le projet ... douze places de stationnement par un abri.', 'remplace', 'Le verbe de la note du conseil. EN: replaces.', 'a7-neutre'),
        eS('« Quelques abonnés » décrit exactement les quarante places de l’abri.', '« Quelques abonnés » rapetisse les quarante places de l’abri.', 'Quarante, ce n’est pas « quelques ». EN: it shrinks the number.', 'a7-tracts', ['« Quelques abonnés » minimise les quarante places de l’abri.', '« Quelques abonnés » réduit les quarante places de l’abri.', '« Quelques abonnés » décrit mal les quarante places de l’abri.']),
        lC('Écoute. Ce mot est-il neutre ?', src(E(1086)).fr, ['Non : « sacrifiées » juge déjà la perte.', 'Oui : il dit seulement le nombre.'], 0, 'Le mot conclut à la place du texte. EN: the word concludes.', 'a7-mots'),
      ],
    },
    {
      id: 'r8-question', label: 'La question rhétorique', targets: ['question-qui-esquive'],
      questions: [
        mc('Une question rhétorique...', ['affirme sans le dire', 'demande une information', 'n’a jamais d’effet'], 0, 'La réponse est supposée évidente. EN: it asserts.', 'a8-questions'),
        mc('« N’est-il pas temps d’ouvrir le dimanche ? » affirme le plus souvent que...', ['il est temps d’ouvrir', 'il n’est pas temps d’ouvrir'], 0, 'La négative attend « si ». EN: it expects yes.', 'a8-questions'),
        mc('Pourquoi Nadège retire-t-elle sa question sur le prix de la culture ?', ['elle esquive le coût', 'elle est trop polie', 'elle est trop longue'], 0, 'Elle met une évidence à la place d’un chiffre. EN: it dodges the cost.', 'a8-discours'),
        mc('Une question rhétorique est loyale quand...', ['presque tout le monde donnerait la même réponse', 'personne ne peut y répondre'], 0, 'Sinon, elle fait passer une thèse disputée pour une évidence. EN: shared answer.', 'a8-questions'),
        tI('Transforme en question rhétorique. Commence par « Qui ».', 'Personne ne veut voir la piscine fermer.', 'Qui veut voir la piscine fermer ?', '« Personne » devient « qui ». EN: nobody becomes who.', 'a8-produire', ['Qui veut voir fermer la piscine ?', 'Qui voudrait voir la piscine fermer ?', 'Qui voudrait voir fermer la piscine ?', 'Qui a envie de voir la piscine fermer ?', 'Qui souhaite voir la piscine fermer ?', 'Qui souhaite voir fermer la piscine ?', 'Qui a envie de voir fermer la piscine ?']),
        tI('Transforme en question rhétorique négative.', 'Il est temps d’ouvrir le dimanche.', 'N’est-il pas temps d’ouvrir le dimanche ?', 'La négative affirme le positif. EN: the negative asserts.', 'a8-produire', ['Ne serait-il pas temps d’ouvrir le dimanche ?', 'N’est-il pas temps d’ouvrir la médiathèque le dimanche ?', 'N’est-il pas grand temps d’ouvrir le dimanche ?']),
        eS('« Que font les collégiens sans bureau le dimanche ? » est, pour Nadège, une question rhétorique.', '« Que font les collégiens sans bureau le dimanche ? » est, pour Nadège, une vraie question.', 'Elle dit elle-même qu’elle n’a pas la réponse. EN: a real question.', 'a8-discours', ['« Que font les collégiens sans bureau le dimanche ? » est, pour Nadège, une question véritable.', '« Que font les collégiens sans bureau le dimanche ? » n’est pas, pour Nadège, une question rhétorique.']),
        lC('Écoute. Cette question attend-elle une réponse ?', src(E(1117)).fr, ['Oui : elle demande une information.', 'Non : elle affirme.'], 0, 'Où se gareront les livreurs : personne ne le sait encore. EN: a real question.', 'a8-radio'),
      ],
    },
    {
      id: 'r9-figures', label: 'Anaphore et gradation', targets: ['rythme-pour-preuve'],
      questions: [
        mc('« Un jardin où… » repris en tête de trois phrases, c’est...', ['une anaphore', 'une prétérition', 'une question rhétorique'], 0, 'Le même début revient. EN: anaphora.', 'a9-figures'),
        mc('« Une graine, bientôt une parcelle, et un jour une rue » est...', ['une gradation', 'une prétérition', 'une question rhétorique'], 0, 'Chaque terme est plus grand. EN: gradation.', 'a9-figures'),
        mc('« Nous voulons un abri qui ferme, nous voulons des arceaux solides, nous voulons un éclairage le soir. » Est-ce loyal ?', ['Oui : chaque reprise ajoute une demande réelle.', 'Non : toute anaphore triche.'], 0, 'Trois reprises, trois faits. EN: each repetition adds a fact.', 'a9-trier'),
        mc('La gradation « quelques retards, des plaintes, une pétition, et bientôt la colère de tout un quartier »...', ['n’est loyale que si chaque marche est prouvée', 'est toujours loyale'], 0, 'Sans faits, elle fabrique une crainte. EN: real steps only.', 'a9-trier'),
        tI('Nomme la figure. Un mot.', 'Le même début repris en tête de plusieurs phrases : une ... .', 'anaphore', 'Elle martèle et fait retenir. EN: anaphora.', 'a9-figures', ['une anaphore', 'l’anaphore']),
        tI('Nomme la figure. Un mot.', 'Des termes rangés par intensité croissante : une ... .', 'gradation', 'Elle donne l’impression d’un mouvement. EN: gradation.', 'a9-figures', ['une gradation', 'la gradation']),
        eS('Le rythme d’une anaphore suffit à prouver une idée.', 'Le rythme d’une anaphore ne suffit pas à prouver une idée.', 'Le rythme fait retenir ; il ne fait pas preuve. EN: rhythm is not proof.', 'a9-piege', ['Le rythme d’une anaphore ne prouve pas une idée.']),
        lC('Écoute. Combien de figures entends-tu dans cette phrase ?', src(E(1132)).fr, ['deux : une anaphore et une gradation', 'aucune', 'une seule : une prétérition'], 0, '« Votez pour » revient, et les termes s’élargissent. EN: both figures.', 'a9-figures'),
      ],
    },
    {
      id: 'r10-preterition', label: 'La prétérition', targets: ['preterition-insinuation'],
      questions: [
        mc('« Je ne dirai pas que vingt mille euros, c’est cher payé. » L’orateur...', ['le dit, en prétendant le taire', 'ne le dit pas', 'pose une question'], 0, 'C’est la prétérition. EN: he says it anyway.', 'a10-formules'),
        mc('Laquelle de ces prétéritions est loyale ?', ['« Je ne reviendrai pas sur le coût, cent quatre-vingt mille euros, détaillé page six du rapport. »', '« Je passerai sur les rumeurs d’arrosage avec l’eau de la ville. »'], 0, 'Le chiffre est donné, avec sa source ; la rumeur n’en a aucune. EN: figure and source given.', 'a10-loyal'),
        mc('« Inutile de vous rappeler ce qu’il en coûterait de la fermer. » Que manque-t-il ?', ['le chiffre', 'une question', 'une émotion'], 0, 'Une évidence supposée, jamais donnée. EN: the figure.', 'a10-discours'),
        mc('« Le jardin est une idée sympathique ; la piscine est un service public. » Cette opposition...', ['présente un faux choix entre deux projets', 'compare deux chiffres'], 0, `Le budget finance cinq projets, pas un seul : c’est le faux dilemme de ${ARGU_REF}. EN: a false dilemma.`, 'a10-discours'),
        tI('Nomme la figure. Un mot.', 'Dire une chose en prétendant la taire : une ... .', 'prétérition', 'La prétérition. EN: paralipsis.', 'a10-formules', ['une prétérition', 'la prétérition']),
        tI('Complète. Un mot.', 'Une prétérition est loyale si tu peux dire la même chose ..., preuve à l’appui.', 'ouvertement', 'Le test de la leçon, appliqué à la figure. EN: openly.', 'a10-loyal', ['franchement', 'publiquement']),
        eS('« Je passerai sur les rumeurs » est une prétérition loyale.', '« Je passerai sur les rumeurs » est une prétérition déloyale.', 'Une rumeur sans source glissée sans être assumée. EN: unfair.', 'a10-loyal', ['« Je passerai sur les rumeurs » n’est pas une prétérition loyale.']),
        lC('Écoute. Quelle figure entends-tu ?', src(E(1138)).fr, ['une prétérition', 'une anaphore', 'une analogie'], 0, '« Inutile de vous rappeler » : et il le rappelle. EN: paralipsis.', 'a10-formules'),
      ],
    },
    {
      id: 'r11-objection', label: 'L’objection prévenue', targets: ['objection-de-paille'],
      questions: [
        mc('Prévenir l’objection, c’est...', ['la formuler aussi bien que l’adversaire, puis y répondre', 'l’éviter', 'la caricaturer'], 0, 'Tu la dis avant lui, et mieux. EN: say it first, and better.', 'a11-formules'),
        mc('« Les commerçants se moquent bien des cyclistes. » C’est...', ['un homme de paille', 'une objection prise au sérieux'], 0, 'On prête à l’adversaire un mépris qu’il n’a pas exprimé. EN: a straw man.', 'a11-paille'),
        mc('Quand Maud n’a pas de chiffres sur les caméras, elle...', ['le dit et n’en invente pas', 'en invente un prudent', 'change de sujet'], 0, 'Un chiffre inventé ruinerait tous les autres. EN: she admits it.', 'a11-tribune'),
        mc('Après une concession, il faut...', ['une réponse', 's’arrêter là'], 0, 'Une concession sans réponse donne raison à l’autre. EN: an answer.', 'a11-paille'),
        tI('Complète. Un mot.', 'On m’... que l’abri supprime douze places.', 'objectera', 'La formule soutenue qui annonce l’objection. EN: will object.', 'a11-formules', ['opposera']),
        tI('Complète. Un mot.', 'Je prends l’objection dans sa forme la plus ... .', 'forte', 'L’inverse de l’homme de paille. EN: strongest.', 'a11-piege'),
        eS('Maud donne tort aux commerçants sur tous les points.', 'Maud donne raison aux commerçants sur un point.', 'Les livraisons pendant les travaux. EN: she grants one point.', 'a11-tribune', ['Maud donne raison aux commerçants sur les livraisons.', 'Maud donne raison aux commerçants sur un seul point.', 'Maud donne raison aux commerçants sur un des points.']),
        lC('Écoute. Que fait l’auteure ?', src(E(1155)).fr, ['Elle concède un point à l’autre camp.', 'Elle caricature l’autre camp.'], 0, 'Donner un point rend le reste crédible. EN: granting a point.', 'a11-tribune'),
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
    { front: 'the trust a speaker earns', back: 'l’ethos', say: src(E(1017)).fr },
    { front: 'reasons the audience can check', back: 'le logos', say: src(E(1032)).fr },
    { front: 'emotion in proportion to the facts', back: 'un pathos loyal', say: src(E(1050)).fr },
    { front: 'authority from another field', back: 'un argument d’autorité déloyal', say: src(E(1060)).fr },
    { front: 'the feature an analogy needs', back: 'le point commun dont dépend la conclusion', say: src(E(1075)).fr },
    { front: 'a word that concludes before the proof', back: 'un mot chargé', say: src(E(1092)).fr },
    { front: 'a question that asserts', back: 'une question rhétorique', say: src(E(1105)).fr },
    { front: 'saying it while claiming not to', back: 'une prétérition', say: src(E(1140)).fr },
    { front: 'the objection at its strongest', back: 'l’objection prévenue', say: src(E(1156)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Persuader, en résumé',
  body: `${REFRAME} Tu sais maintenant nommer les procédés de persuasion, les tiens comme ceux des autres, et les juger : ceux qui tiennent une fois nommés, ceux qui ne marchaient que dans l’ombre. Tu as écrit un plaidoyer qui convainc sans piéger. La suite, ${EXPOSE_REF_PLANNED} : défendre une position à voix haute, devant un jury qui pose des questions. EN: Next: defending a position aloud, before a jury that asks questions.`,
  points: [
    'Trois preuves : l’ethos se gagne, le logos se vérifie, le pathos se mesure aux faits.',
    'Une autorité vaut dans son domaine ; une analogie, sur le point qui compte ; un mot fort, s’il se défend.',
    'Question, anaphore, gradation, prétérition : chaque figure doit porter un fait.',
    'L’objection se prend dans sa forme la plus forte, se concède, puis se réfute.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['loyal', 'objection'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton plaidoyer',
    opener: {
      line: 'Trois projets, une objection chacun, et ton vote à gagner : à toi d’écrire un plaidoyer qui convainc, puis de nommer tes propres procédés. EN: Three projects, one objection each, and a vote to win: your turn to write a plea that persuades, then name your own moves.',
      imageRef: 'lessons/persuader/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit un plaidoyer loyal, nommé tes procédés et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote a fair plea, named your moves and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-dossier', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-logos', 'a12-quiz/r6-analogie', 'a12-quiz/r9-figures'],
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
  { id: 'd-discours', title: 'Les questions à poser à un discours', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les questions à poser à un discours qui émeut. EN: say each line aloud.', items: [E(1001), E(1002), E(1003), E(1004), E(1008), E(1011)], audio: AUDIO },
  { id: 'd-ethos', title: 'Gagné ou emprunté', format: 'sort' as const, coach: 'Deux piles : la confiance se gagne, ou elle s’emprunte ? EN: earned or borrowed?', buckets: ['un ethos gagné', 'un ethos emprunté'], items: [E(1013), E(1019), E(1014), E(1020), E(1021), E(1023)], audio: AUDIO },
  { id: 'd-logos', title: 'Une raison se vérifie', format: 'mcq' as const, coach: 'Demande à chaque raison sa base et sa preuve. EN: ask each reason for its base.', q: '« Notre registre est en annexe. » Que permet cette phrase ?', opts: ['de vérifier les chiffres', 'de les cacher'], correct: 0, why: 'Chacun peut recompter. EN: anyone can recount.', items: [E(1026), E(1027), E(1028), E(1030), E(1031), E(1036)], audio: AUDIO },
  { id: 'd-pathos', title: 'À la mesure des faits', format: 'sort' as const, coach: 'Deux piles : l’émotion porte un fait, ou elle le remplace ? EN: does the emotion carry or replace a fact?', buckets: ['à la mesure des faits', 'à la place des faits'], items: [E(1042), E(1043), E(1044), E(1047), E(1053), E(1052)], audio: AUDIO },
  { id: 'd-autorite', title: 'Son domaine, son nom, sa méthode', format: 'mcq' as const, coach: 'Demande à chaque autorité son domaine. EN: ask every authority for its field.', q: '« Une romancière l’a dit. » Tu demandes d’abord...', opts: ['si c’est son domaine', 'si elle est célèbre'], correct: 0, why: 'Le prestige ne se transporte pas. EN: prestige does not travel.', items: [E(1060), E(1061), E(1062), E(1063), E(1068), E(1069)], audio: AUDIO },
  { id: 'd-analogie', title: 'Le point commun qui compte', format: 'mcq' as const, coach: 'Cherche le trait dont la conclusion a besoin. EN: find the feature the conclusion needs.', q: '« Le budget est un gâteau. » Le trait qui compte :', opts: ['la part de l’un réduit celle des autres', 'on le partage le dimanche'], correct: 0, why: 'Un budget limité : c’est tout ce que l’argument utilise. EN: a limited budget.', items: [E(1073), E(1074), E(1078), E(1080), E(1082), E(1083)], audio: AUDIO },
  { id: 'd-cadrage', title: 'Le fait, puis le jugement', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : le fait d’abord, le jugement ensuite. EN: fact first, judgement second.', items: [E(1091), E(1092), E(1093), E(1095), E(1096), E(1098)], audio: AUDIO },
  { id: 'd-question', title: 'La question qui affirme', format: 'mcq' as const, coach: 'Cherche la réponse que la question suppose. EN: find the assumed answer.', q: '« Qui veut voir la piscine fermer ? » Que dit cette question ?', opts: ['que personne ne le veut', 'qu’on ne sait pas qui le veut'], correct: 0, why: '« Qui » attend « personne ». EN: who expects nobody.', items: [E(1105), E(1106), E(1107), E(1108), E(1111), E(1112)], audio: AUDIO },
  { id: 'd-figures', title: 'Ce qui revient, ce qui monte', format: 'mcq' as const, coach: 'Le même début, ou une montée ? EN: same opening, or a rise?', q: 'Le même début repris en tête de plusieurs phrases, c’est...', opts: ['une anaphore', 'une gradation'], correct: 0, why: 'La gradation monte ; l’anaphore répète. EN: anaphora repeats.', items: [E(1121), E(1124), E(1126), E(1127), E(1129), E(1131)], audio: AUDIO },
  { id: 'd-preterition', title: 'Dit ou tu ?', format: 'mcq' as const, coach: 'Demande-toi si l’orateur pourrait le dire ouvertement. EN: could it be said openly?', q: '« Je ne dirai pas que c’est cher. » L’orateur...', opts: ['le dit quand même', 'se tait vraiment'], correct: 0, why: 'C’est la prétérition. EN: paralipsis.', items: [E(1135), E(1136), E(1140), E(1141), E(1143), E(1145)], audio: AUDIO },
  { id: 'd-objection', title: 'La charpente de l’objection', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : annoncer, concéder, répondre, avouer. EN: announce, concede, answer, admit.', items: [E(1149), E(1150), E(1152), E(1154), E(1155), E(1161)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'emu-donc-convaincu', description: 'Takes a moving speech as a proven one, and votes or summarises on the emotion instead of the reasons.', detectOn: ['a1-scene', 'a1-lecture', 'a1-check', 'a12-mission'], drill: 'd-discours', retest: 'd-discours' },
  { id: 'ethos-emprunte', description: 'Trusts or uses borrowed credibility (a title from another field, flattery, invented unanimity), or hides an interest instead of declaring it.', detectOn: ['a2-loyal', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-ethos', retest: 'd-ethos' },
  { id: 'raison-non-verifiee', description: 'Accepts or gives figures without a base, calculations without a stated assumption, or conclusions that do not follow.', detectOn: ['a3-suit', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-logos', retest: 'd-logos' },
  { id: 'emotion-sans-mesure', description: 'Is carried by fear, guilt or a flattered room, or uses an emotion that outgrows or replaces the facts; or dismisses every emotion as a trick.', detectOn: ['a4-ecoute', 'a4-loyal', 'a4-check', 'a12-mission'], drill: 'd-pathos', retest: 'd-pathos' },
  { id: 'autorite-hors-domaine', description: 'Takes prestige from another field, nameless experts or the number of cities as proof, or ignores who funds a source.', detectOn: ['a5-loyal', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-autorite', retest: 'd-autorite' },
  { id: 'analogie-de-surface', description: 'Accepts or builds an analogy on a superficial resemblance, or rejects every analogy instead of naming the difference that counts.', detectOn: ['a6-tient', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-analogie', retest: 'd-analogie' },
  { id: 'mot-qui-conclut', description: 'Repeats or writes words that already hold the conclusion (sacrifier, investissement, quelques), or reads a gain or loss frame as the whole fact.', detectOn: ['a7-neutre', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-cadrage', retest: 'd-cadrage' },
  { id: 'question-qui-esquive', description: 'Takes a rhetorical question as a real one, or writes one whose answer is disputed or that dodges a figure.', detectOn: ['a8-produire', 'a8-radio', 'a8-check', 'a12-mission'], drill: 'd-question', retest: 'd-question' },
  { id: 'rythme-pour-preuve', description: 'Confuses anaphora and gradation, or lets the rhythm of a repetition or a climax stand in for proof.', detectOn: ['a9-trier', 'a9-piege', 'a9-check', 'a12-mission'], drill: 'd-figures', retest: 'd-figures' },
  { id: 'preterition-insinuation', description: 'Misses a paralipsis, or uses one to slip in an insinuation or a rumour that could not be said openly with proof.', detectOn: ['a10-loyal', 'a10-erreurs', 'a10-check', 'a12-mission'], drill: 'd-preterition', retest: 'd-preterition' },
  { id: 'objection-de-paille', description: 'Answers a caricature of the objection, concedes without answering, invents figures, or denies the other side every point.', detectOn: ['a11-paille', 'a11-piege', 'a11-check', 'a12-mission'], drill: 'd-objection', retest: 'd-objection' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-loyal', 'Le test du procédé loyal', ['la règle', 'une question par procédé'], [
    teach('sheet-loyal-teach', 'Nommer, puis regarder ce qui reste',
      `${REFRAME} Pour juger un procédé, dis-le à voix haute : « je vous dis d’où je parle », « je vous fais peur », « je ne dirai pas que… ». Le procédé loyal continue de marcher ; celui qui triche ne marche plus. Émouvoir ou employer une figure n’est pas tricher : tout dépend de ce que le procédé porte. EN: Say the move aloud; the fair one still works, the trick no longer does.`),
    table('sheet-loyal-table', 'Une question par procédé', ['Procédé', 'La question', 'Loyal quand…', 'Triche quand…'], [
      ['l’ethos', 'D’où parle-t-il ?', 'compétence bornée, intérêt dit, limite avouée', 'prestige emprunté, flatterie, unanimité inventée'],
      ['le logos', 'Puis-je vérifier ?', 'chiffre et base, hypothèse dite, lien montré', 'chiffre sans base, conclusion qui ne suit pas'],
      ['le pathos', 'L’émotion a-t-elle la taille du fait ?', 'elle mène aux faits', 'peur grossie, culpabilité, salle flattée'],
      ['l’autorité', 'Est-ce son domaine ?', 'nom, domaine, méthode, financement dit', 'célébrité d’ailleurs, experts sans nom'],
      ['l’analogie', 'Le point commun compte-t-il ?', 'c’est celui dont dépend la conclusion', 'ressemblance de surface'],
      ['le mot', 'Puis-je défendre ce qu’il affirme ?', 'un fait derrière le mot', 'le mot remplace la preuve'],
      ['la question rhétorique', 'La réponse est-elle partagée ?', 'presque tous répondraient pareil', 'elle esquive ou fait passer une thèse disputée'],
      ['l’anaphore, la gradation', 'Chaque reprise ajoute-t-elle un fait ?', 'chaque reprise ou marche existe', 'le rythme tient lieu de preuve'],
      ['la prétérition', 'Pourrait-il le dire ouvertement ?', 'chiffre et source donnés', 'insinuation, rumeur'],
      ['l’objection', 'Est-ce sa forme la plus forte ?', 'concédée, puis réfutée', 'homme de paille'],
    ]),
  ]),
  sheet('sheet-preuves', 'Les trois preuves', ['ethos, logos, pathos', 'les pièces d’un logos loyal'], [
    teach('sheet-preuves-teach', 'Aristote, et ce qu’on en garde',
      'Dans sa Rhétorique (IVe siècle avant notre ère), Aristote distingue trois sortes de preuves fournies par le discours : celles qui tiennent au caractère de l’orateur (l’ethos), celles qui tiennent aux dispositions de l’auditoire (le pathos), et celles qui tiennent au discours lui-même, quand il démontre (le logos). Pour être cru, disait-il aussi, l’orateur doit montrer du bon jugement (la prudence), de la vertu et de la bienveillance envers son auditoire. Cette leçon garde ces trois mots et leur pose une question : est-ce loyal ? EN: Aristotle’s three proofs, ethos, pathos and logos, each judged here for fairness.'),
    table('sheet-preuves-table', 'Les trois preuves', ['Preuve', 'Elle repose sur', 'Loyale quand…', 'Déloyale quand…'], [
      ['l’ethos', 'le caractère de l’orateur, tel que son discours le montre', 'il dit d’où il parle, ses limites, son intérêt', 'il emprunte un prestige ou flatte'],
      ['le logos', 'le discours lui-même : faits, chiffres, raisonnement', 'on peut vérifier la base et suivre le lien', 'le chiffre n’a pas de base ou la conclusion ne suit pas'],
      ['le pathos', 'les dispositions de l’auditoire', 'l’émotion est à la mesure des faits', 'elle les dépasse ou les remplace'],
    ]),
    table('sheet-preuves-logos', 'Les pièces d’un logos loyal', ['Pièce', 'La question'], [
      ['le chiffre et sa base', 'Sur combien ?'],
      ['la déduction (de la règle au cas)', 'La règle vaut-elle ici ?'],
      ['l’induction (des cas à la règle)', 'Combien de cas, lesquels ?'],
      ['les conséquences', 'L’effet est-il montré, et dosé ?'],
      ['l’hypothèse', 'Est-elle dite ?'],
      ['la limite', 'Est-elle avouée ?'],
    ]),
  ]),
  sheet('sheet-appuis', 'Autorité, analogie et mots', ['six questions à une autorité', 'trois questions à une analogie', 'les mots qui concluent'], [
    teach('sheet-appuis-teach', 'Ce qui appuie une idée, et ce qui la remplace',
      `Une autorité appuie une idée dans son domaine, avec un nom et une méthode. Une analogie l’appuie quand le point commun est celui dont dépend la conclusion. Un mot fort l’appuie quand on peut défendre ce qu’il affirme. ${Cap(PRESSE_REF)} a montré le cadrage dans la presse ; ici, il s’agit des mots qu’on choisit pour convaincre. EN: authority in its field, analogy on the right feature, a strong word one can defend.`),
    table('sheet-appuis-autorite', 'Six questions à une autorité', ['Question', 'Pourquoi'], [
      ['Est-ce son domaine ?', 'le prestige ne se transporte pas'],
      ['A-t-elle un nom ?', 'un anonyme ne se vérifie pas'],
      ['Comment le sait-elle ?', 'une méthode, un échantillon, une durée'],
      ['Qui a payé l’étude ?', 'une source intéressée se déclare et se pèse'],
      ['Que disent les autres spécialistes ?', 'une voix seule n’est pas un consensus'],
      ['Où s’arrête ce qu’elle sait ?', 'un expert dit ses limites'],
    ]),
    table('sheet-appuis-analogie', 'Trois questions à une analogie', ['Question', 'Exemple'], [
      ['Quel est le point commun ?', 'le cordonnier et l’atelier prolongent la vie des objets'],
      ['La conclusion dépend-elle de ce point ?', 'oui pour le cordonnier, non pour le médecin'],
      ['Quelle différence compte ?', 'une fuite ne rapporte rien, l’atelier évite des achats'],
    ]),
    table('sheet-appuis-mots', 'Les mots qui concluent', ['Le fait', 'Un mot qui juge en bien', 'Un mot qui juge en mal'], [
      ['remplacer douze places', 'libérer les trottoirs', 'sacrifier douze places'],
      ['payer 52 000 euros', 'un investissement', 'une dépense lourde'],
      ['quarante places', 'quarante vélos à l’abri', 'quelques abonnés'],
      ['neuf sur dix restent / un sur dix part', 'le cadre de gain', 'le cadre de perte'],
    ]),
  ]),
  sheet('sheet-figures', 'Quatre figures persuasives', ['la question rhétorique', 'l’anaphore et la gradation', 'la prétérition'], [
    teach('sheet-figures-teach', 'La figure et ce qu’elle porte',
      'Au XIXe siècle, le grammairien Pierre Fontanier a classé les figures du discours ; cette leçon n’en garde que quatre, pour leur force de persuasion. Une figure n’est ni loyale ni déloyale en soi : elle l’est par ce qu’elle porte. Une question dont la réponse est partagée, une reprise qui ajoute un fait, une prétérition qui donne sa source restent loyales une fois nommées. EN: a figure is fair or unfair by what it carries.'),
    table('sheet-figures-table', 'Quatre figures', ['Figure', 'Ce qu’elle fait', 'Exemple', 'Loyale quand…'], [
      ['la question rhétorique', 'affirme par une question', 'Qui veut voir la piscine fermer ?', 'presque tous répondraient pareil'],
      ['l’anaphore', 'reprend le même début', 'Un jardin où… Un jardin où…', 'chaque reprise ajoute un fait'],
      ['la gradation', 'range des termes par intensité', 'une graine, bientôt une parcelle, et un jour une rue', 'chaque marche existe'],
      ['la prétérition', 'dit en prétendant taire', 'Je ne dirai pas que…', 'on pourrait le dire ouvertement, preuve à l’appui'],
    ]),
    table('sheet-figures-formules', 'Formules de prétérition', ['Formule', 'À vérifier'], [
      ['Je ne dirai pas que…', 'ce qui est dit est-il prouvé ?'],
      ['Je ne rappellerai pas que…', 'le fait est-il exact, et pertinent ?'],
      ['Je passerai sur…', 'une rumeur glissée ?'],
      ['Inutile de rappeler que…', 'l’évidence est-elle donnée ?'],
      ['Je ne reviendrai pas sur…', 'le chiffre et la source sont-ils là ?'],
    ]),
  ]),
  sheet('sheet-plaidoyer', 'L’objection et le plaidoyer', ['six formules pour prévenir l’objection', 'le plan du plaidoyer', 'mes procédés'], [
    teach('sheet-plaidoyer-teach', 'Prévenir l’objection, puis plaider',
      `Prévenir l’objection, c’est la formuler aussi bien que l’adversaire, puis y répondre : l’inverse de l’homme de paille de ${ARGU_REF}. Concède ce qui est vrai avec les formes de ${CONCESSION_REF}, réponds avec un fait, et dis ce que tu ne sais pas. Un plaidoyer loyal se termine en nommant ses procédés. EN: state the objection at its strongest, concede, answer, and name your moves.`),
    table('sheet-plaidoyer-formules', 'Six formules pour prévenir l’objection', ['Formule', 'Registre', 'Ce qu’elle fait'], [
      ['on m’objectera que', 'soutenu', 'annonce l’objection'],
      ['d’aucuns diront que', 'soutenu, écrit', 'prête l’objection à d’autres'],
      ['vous me direz que', 'courant', 's’adresse au lecteur'],
      ['c’est exact, et…', 'courant', 'concède la part vraie'],
      ['reste un point où…', 'soutenu', 'donne raison à l’autre'],
      ['je prends l’objection dans sa forme la plus forte', 'soutenu', 'refuse l’homme de paille'],
    ]),
    table('sheet-plaidoyer-plan', 'Le plan du plaidoyer', ['Étape', 'Ce que tu écris'], [
      ['1', 'd’où tu parles, et ton intérêt'],
      ['2', 'ta position et deux ou trois raisons vérifiables'],
      ['3', 'une émotion tenue par un fait, une ou deux figures'],
      ['4', 'l’objection principale, concédée puis réfutée'],
      ['5', 'la conclusion : le vote est au lecteur'],
      ['6', 'mes procédés : chacun nommé, et pourquoi il est loyal'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-08-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c1-08-joelle': 'Joëlle’s speech for the pool (act 1), ONE VOICE, one take, a warm woman in her fifties speaking to a packed hall, France French. Real conviction, never melodrama: the persuasive moves must be found in the words, not in the acting. A small pause after the rhetorical question before « Personne, bien sûr ».',
  'rec-c1-08-ethos': 'Armelle presents herself (act 2), ONE VOICE, one take, a retired woman, calm and plain, slightly amused at her own « cheveux blancs ». The address « rue des Tanneurs » said as a simple fact. The last sentence at the same even weight as the rest: the learner must notice its flattery in the words.',
  'rec-c1-08-logos': 'Théo’s note (act 3), ONE VOICE, one take, a man in his thirties reading his own text, precise and modest. Figures in full words (quatre cent douze, deux cent quatre-vingt-sept). No emphasis on « devrait ».',
  'rec-c1-08-pathos': 'REQUIRED FOR THE EAR MISSION (act 4): fourteen lines, ONE TAKE, ONE VOICE (the same actress as Joëlle in act 1), in authored order, as a two-minute radio appeal on a local station. Emotional but controlled; the guilt line and the last line no louder than the others. No music bed. Lines are hidden: the take must be continuous.',
  'rec-c1-08-tracts': 'The two leaflets (act 5), TWO VOICES. Tract A: an enthusiastic campaign voice. Tract B: a sober, informative voice; the director’s quotation read by a third, calm female voice if available, otherwise by voice B with a slight change of tone. Say « Tract A » and « Tract B » as labels.',
  'rec-c1-08-piege-logos': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-08-piege-autorite': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-08-tribune': 'Rémi’s op-ed (act 6), ONE VOICE, one take, a retired man reading his own piece, good-humoured and clear. The quoted « une fuite d’eau dans le budget » with the slight lift of a quotation. The last sentence dry, with a small smile.',
  'rec-c1-08-cadrage': 'The two leaflets and the council note (act 7), THREE VOICES. Tract A: an upbeat activist. Tract B: a firm shopkeeper. The note: a flat administrative voice. Loaded words at ordinary weight: the learner must find them in the vocabulary, not in the stress. Say « Tract A », « Tract B » and « Note du conseil de quartier » as labels.',
  'rec-c1-08-piege-cadrage': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-08-nadege': 'Nadège’s speech (act 8), ONE VOICE, one take, a library director in her forties, warm and precise. Each rhetorical question with its natural falling intonation; the real questions (the first and the last) with a real rising question. « Je retire ma question » after a short beat, plainly.',
  'rec-c1-08-radio': 'REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, THREE VOICES, in authored order. Lines 1 and 8: the host. Lines 2, 5 and 7 (the real questions): a calm journalist. Lines 3, 4 and 6 (the rhetorical questions): a heated guest. Each question with its natural intonation, real questions rising, rhetorical ones falling. Lines are hidden: the take must be continuous; light studio ambience allowed.',
  'rec-c1-08-samir': 'Samir’s speech (act 9), ONE VOICE, one take, a father in his forties, simple and warm. The three « Un jardin où » with the same melodic shape, so the anaphora is heard; the gradation « une graine, bientôt une parcelle, et un jour une rue » slowly rising. Figures read plainly, at the same weight as the rest.',
  'rec-c1-08-piege-figures': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-08-gilles': 'Gilles’s speech (act 10), ONE VOICE, one take, a man in his sixties, courteous and smooth. Every « je ne dirai pas », « je passerai sur » with polite innocence, never a wink: the learner must hear the prétérition in the words.',
  'rec-c1-08-maud': 'Maud’s op-ed (act 11), ONE VOICE, one take, a woman in her thirties, measured and fair. Each objection read as if she took it seriously, never sarcastically. « Peut-être. » after a short beat.',
  'rec-c1-08-piege-objection': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-08-dossier': 'THE TASK DOSSIER (act 12), ONE VOICE, a neutral administrative reading. « Projet 1 », « Projet 2 », « Projet 3 » and « Objection principale » as labels. Figures in full words.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 8',
  intro: 'At B2 you learned to build an argument and to spot six fallacies. At C1 you judge the moves that carry an argument. This lesson names ethos, logos and pathos, separates authority from expertise, tests analogies and loaded words, and teaches the rhetorical question, anaphora, gradation, paralipsis and the pre-empted objection, always with one question: is this move fair? It ends with a 250 to 400 word plea for a neighbourhood project that names its own moves and answers one objection fairly.',
  skill: 'PE',
  grammarAssumed: [ARGU_UNIT, CRITIQUE_UNIT, NEGO_UNIT, CONCESSION_UNIT, PRESSE_UNIT],
  grammarIntroduced: [
    'The three proofs named and judged: ethos (credibility earned by bounded competence, declared interest and admitted limits, or borrowed through prestige, flattery and invented unanimity), logos (checkable reasons: figure and base, deduction, induction, consequences, the stated assumption) and pathos (emotion in proportion to the facts, or in their place)',
    'Authority versus expertise: field, name, method, funding, consensus and stated limits; the authority of numbers',
    'Analogy as an argument: the shared feature the conclusion depends on, and answering an analogy with the difference that counts',
    'Framing and loaded wording in argument: the word that holds the conclusion, gain and loss frames, the neutral restatement',
    'Persuasive figures recognised, produced and judged: the rhetorical question (including the negative form), anaphora, gradation and paralipsis (prétérition)',
    'The pre-empted objection in writing (on m’objectera que, d’aucuns diront que, vous me direz que), taken in its strongest form, conceded and answered; a persuasive text that names its own moves',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B2, tu as appris à construire un argument et à repérer six sophismes. Au C1, tu juges les procédés qui portent un argument. Cette leçon nomme l’ethos, le logos et le pathos, sépare l’autorité de l’expertise, met à l’épreuve les analogies et les mots qui concluent, et t’apprend la question rhétorique, l’anaphore, la gradation, la prétérition et l’objection prévenue, toujours avec une question : ce procédé est-il loyal ? À la fin, tu écris en 250 à 400 mots un plaidoyer qui nomme ses propres procédés.',
    minutes: 180,
    difficulty: 4,
    glyph: 'loyal',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PERSUADER_TERMS,
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
