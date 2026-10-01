// c1.07.l1 « Reformuler et conclure » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (decisions 17
// to 19, the wave 3 brief). Structural model: b2.22 « Le style académique »
// (`../b2/style-academique-*`). Feeds PE@c1 and CE/CO inference; no exam
// task of its own.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (about 250 to
//   290 words, a real genre, original) and ONE GESTURE, in the same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`.
//                          Its FIRST question is always « Devine le sens »;
//                          the glossary keeps one entry.
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable`, `examples` or
//                          `focus`, linked to a sheet.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, listening).
//     4. USE IT            « Pour ta version écrite », always the same
//                          groupDrill shape: a line of Léa's talk rewritten
//                          with THIS act's gesture, against the line a
//                          writer without it would keep.
//
//   then the act check (control pages, gated). Act 1 is the problem scene
//   and the ONE recap card; act 12 is the production act (the task and the
//   closing sections).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · gesture · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le discours qui tourne     6  scene + Léa's spoken draft · the
//       en rond                       problem; ONE recap card (B1 30-32,
//                                     B2 15, 16, 22, 26)
//    2  Rectifier en avançant      6  a lecture · ou plutôt, plus
//                                     exactement, pour mieux dire
//    3  Ce que j’entends par là    6  a co-op note · j’entends par là, en
//                                     l’occurrence, à cet égard (tapTable)
//    4  À vrai dire                6  a theatre column · à vrai dire, loin
//                                     s’en faut; a podcast (listening)
//    5  L’argument qui pèse        6  an open letter · qui plus est, sans
//                                     compter que
//    6  L’argument en passant      6  a blog · d’ailleurs, du reste, au
//                                     demeurant; stacking
//    7  Du cas le plus fort        6  an essay extract · a fortiori, à plus
//                                     forte raison
//    8  Dès lors                   6  a local history piece · temporal or
//                                     causal, dès lors que (tapTable); a
//                                     radio piece (listening)
//    9  Accepter le prix           6  board minutes · quitte à, en tout état
//                                     de cause
//   10  Fermer le texte            6  a report's conclusion · tout bien
//                                     considéré, somme toute, en guise de
//                                     conclusion (tapTable); one closure
//   11  Les marqueurs contestés    6  a podcast said, then written ·
//                                     decision 17 (tapTable)
//   12  Ta version écrite         11  a model rewrite · plan, role play,
//                                     TASK, quiz, review
//
//   TOTAL 77 missions, 12 acts (6 × 11 + 11). Corpus: 132 authored rows
//   (.2600-.2731) in twelve blocks plus 26 reused rows (8 seed rows in the
//   act 1 recap; 14 Postgres-only: the 12 headwords of this lesson's
//   markers and 2 legacy c1 rows; 2 more seed rows in act 10 and 2 in act
//   11; see the corpus header). 12 readings (one per act) and 2 listenings. Quiz: 11
//   rounds of 8. Eleven error triggers, eleven drills, five reference
//   sheets, twelve terms, four tapTables (decision 16). Chapter artwork:
//   `reformuler-conclure-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Chaque marqueur est un geste : préciser, ajouter ou conclure. Un geste
//     à la fois. »
//   EN: Every marker is a gesture: refine, add or conclude. One gesture at a
//   time.
//
//   ONE METAPHOR, THE CONDUCTOR'S GESTURE. Each marker tells the reader, as
//   a conductor's hand tells the orchestra, what happens next; two gestures
//   at once and nobody follows. It is NOT « more markers, better text »:
//   acts 6, 10 and 11 mark stacked and empty markers down.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the C1 markers of reframing (ou plutôt, plus exactement, pour
//           mieux dire, j’entends par là, en l’occurrence, à vrai dire), of
//           scope (à cet égard, loin s’en faut), of addition (qui plus est,
//           sans compter que, d’ailleurs, du reste, au demeurant), of
//           reasoning (a fortiori, à plus forte raison, dès lors, dès lors
//           que, quitte à, en tout état de cause) and of closure (tout bien
//           considéré, somme toute, en guise de conclusion); the stacking
//           fault; decision 17's seven contested markers with both norm
//           verdicts; the spoken-to-written rewrite task.
//   QUOTES  the reframes of lessons 30 in B1 and 15, 16, 22, 26 in B2, each
//           imported from its corpus, never retyped; their rows reused by id.
//   LEAVES  coordination, subordination and concession to lessons 30 to 32
//           in B1; cause and du coup's ladder to lesson 15 in B2; concession
//           and malgré que to lesson 16 in B2; plan and B2 written connectors
//           to lesson 22 in B2; meeting reformulation to lesson 26 in B2;
//           reprise and reference chains to lesson 5 in C1; persuasion to
//           lesson 8 in C1 (named in the roundup); plan transitions inside an
//           essay to a later C1 lesson, NOT cited (unbuilt).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs. Natural,
//   unsimplified C1 French; English authored on every learner string (`en`,
//   or a final « EN: »), never on an answer. Every `say` is French.
//   Citations by trail position in French, never a raw id. Typographic ’ in
//   every authored French string; no seed row with a straight ' inside the
//   scenario. Decision 17: the contested markers are « recognise, don't
//   write », never taught as errors in speech, each verdict quoted (corpus
//   §A.7). Mission answer slots are spread by `balanceSlots()` (options and
//   index rotated together, no text changed), the quiz by `spreadSlots()`;
//   no `why` names a position.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. OQLF ON « DU COUP »: no Vitrine linguistique fiche was found and the
//      OQLF list of charnières does not include it. The lesson gives the
//      Académie verdict and says the OQLF has no fiche. Accept, or cite
//      another Québec source (Usito)?
//   2. TWELVE REUSED HEADWORDS live in Postgres only, seven of them at level
//      « sons » (`fr.sons.mots-de-liaison.*`, `fr.sons.adverbes-essentiels.121`).
//      Reusing them avoids twins, as the brief requires; they ride in
//      `DB_ONLY_ROWS` and the merge must carry them into the seed. Accept
//      sons-level rows in a C1 deck?
//   3. TWO LEGACY c1 ROWS (`fr.c1.discours-dexamen.005`, `.051`) are reused
//      named-only in act 10; both carry a straight apostrophe (decision 13's
//      typography edit at import). Keep, or drop them?
//   4. Readings run 244 to 283 words (Léa's spoken draft 189), a little
//      under the « about 300 » of gate C1-1. Lengthen, or keep?
//   5. The task prints Léa's text twice (act 1 reading and brief): no
//      `source` field on `task`, as in b2.22 and c1.24.
//   6. Rubric: six criteria, 20 points, as c1.20 and c1.24 (decision 14),
//      with « registre » weighted for the rewrite. Keep the grid?
//   7. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, DB_ONLY_ROWS, dicteeFor,
  LEA_TEXT, CONF_TEXT, NOTE_TEXT, CHRONIQUE_TEXT, LETTRE_TEXT, BLOG_TEXT, ESSAI_TEXT,
  HALLES_TEXT, CR_TEXT, BILAN_TEXT, PODCAST_TEXT, MODELE_TEXT,
  B130_REFRAME, B215_REFRAME, B216_REFRAME, B222_REFRAME, B226_REFRAME,
  COORD_UNIT, SUBORD_UNIT, CONCESSION_UNIT, CAUSE_UNIT, CONCESSION2_UNIT, ACADEMIQUE_UNIT, REUNION_UNIT,
  CAUSE_REF, CONCESSION2_REF, ACADEMIQUE_REF, REUNION_REF, REPRISE_REF, PERSUADER_REF, CONNECTEURS_B1_REF,
} from './reformuler-conclure-corpus.ts';
import { REFORMULER_CONCLURE_TERMS } from './reformuler-conclure-terms.ts';

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
  if (!r) throw new Error(`c1.07: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.07: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.07: no authored respell on ${id}`);
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

/** THE « USE IT » BEAT: the act's one tool for the graded rewrite. */
function pourTaVersion(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta version écrite', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE DISCOURS QUI TOURNE EN ROND
 *
 *  The problem: Léa rehearses the end of her talk for the neighbourhood
 *  council, four markers and no proposal. Her spoken draft is the act's
 *  text and, in act 12, the task's source. Then ONE recap card of the
 *  lessons this one builds on, by trail position, rows reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'La dernière phrase de Léa', frSub: 'La veille du conseil de quartier',
  setting: { place: 'Chez Léa, rue des Tanneurs', city: 'Valbrune', time: '21 h', ambience: 'des feuilles annotées sur la table, un minuteur de cuisine réglé sur trois minutes' },
  beats: [
    { kind: 'narration', text: 'Mardi soir, rue des Tanneurs, à Valbrune. Demain, ta voisine Léa Marchand a trois minutes au conseil de quartier pour défendre la réouverture de la salle des fêtes. Elle répète devant toi.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Léa', fr: 'J’ai presque fini. Écoute juste la dernière phrase, c’est celle qu’ils retiendront.', en: 'I am nearly done. Just listen to the last sentence, it is the one they will remember.', respell: '[zhay pres-kuh fee-NEE | ay-KOOT zhüst la dehr-nyehr FRAHZ | seh sel keel ruh-tyehⁿ-DROHⁿ]', stage: 'Elle lance le minuteur.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Léa', fr: src(E(2600)).fr, en: src(E(2600)).en, respell: rsOf(E(2600)), stage: 'Quatre marqueurs avant la première idée.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'On sent que tu conclus, mais on ne sait pas ce que tu proposes.', en: 'We can tell you are concluding, but we do not know what you are proposing.', respell: '[ohⁿ sahⁿ kuh tü kohⁿ-KLÜ | meh ohⁿ nuh seh pa suh kuh tü pro-POHZ]', stage: 'Tu cherches le geste derrière les mots.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Léa', fr: 'Alors aide-moi. Je n’ai droit qu’à une phrase pour finir.', en: 'Then help me. I only get one sentence to finish.', respell: '[a-lor ed-MWA | zhuh nay DRWA ka ünn FRAHZ poor fee-NEER]', stage: 'Elle te tend son stylo.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase de clôture proposes-tu à Léa ?', size: 'lg',
      options: [
        { fr: src(E(2600)).fr, respell: rsOf(E(2600)), en: src(E(2600)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(2601)).fr, respell: rsOf(E(2601)), en: src(E(2601)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Léa recopie ta phrase. Le lendemain, la présidente du conseil note « rouvrir dès septembre » et inscrit la salle à l’ordre du jour de la séance suivante.',
        breaks: 'Léa garde sa phrase. Le lendemain, la présidente la remercie poliment et passe au point suivant : personne n’a entendu de proposition.',
      },
    },
    {
      kind: 'break', heading: 'Quatre marqueurs, aucun geste',
      body: `${Cap(CAUSE_REF)} t’a appris que du coup est familier. Le problème est ailleurs : empilés, quatre marqueurs n’annoncent rien. « Plus exactement » ne fait qu’un geste : il resserre l’idée. EN: Four stacked markers announce nothing; one marker makes one gesture.`,
      wrong: { fr: src(E(2600)).fr, ipa: ipaOf(E(2600)), respell: rsOf(E(2600)), en: src(E(2600)).en },
      right: { fr: src(E(2601)).fr, ipa: ipaOf(E(2601)), respell: rsOf(E(2601)), en: src(E(2601)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend les gestes d’un discours long : rectifier, préciser, ajouter, raisonner, conclure, et reconnaître les marqueurs contestés. À la fin, tu réécriras toute l’intervention de Léa pour le bulletin du quartier.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['geste', 'empilement'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Rectifier et préciser', s: 'Actes 2 à 4 : ou plutôt, plus exactement, j’entends par là, en l’occurrence, à vrai dire' },
    { t: 'Ajouter et raisonner', s: 'Actes 5 à 9 : qui plus est, d’ailleurs, a fortiori, dès lors, quitte à' },
    { t: 'Conclure une seule fois', s: 'Acte 10 : tout bien considéré, somme toute, en guise de conclusion' },
    { t: 'Écrire pour être lu', s: 'Actes 11 et 12 : les marqueurs contestés, puis ta version écrite' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'L’intervention de Léa', frSub: 'Transcrite telle qu’elle a été dite',
  text: LEA_TEXT,
  glossary: [
    { word: 'répéter', en: 'to rehearse', note: 'Ici, s’exercer avant un concert : les jeunes musiciens n’ont pas de salle pour répéter.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « les associations se sont un peu dispersées ». Que veut dire « dispersées » ?', a: 'Séparées, éparpillées : elles ne se retrouvent plus au même endroit.' },
    { q: 'Que propose Léa, exactement ?', a: 'On ne le sait pas vraiment : « faire quelque chose, enfin, rouvrir, mais peut-être pas tout de suite ». La proposition se perd dans la fin.' },
    { q: 'Relève les marqueurs qui ne font aucun geste précis.', a: '« du coup » (deux fois), « au final » (deux fois), « en fait », et « bref, en somme, au final » empilés à la fin.' },
    { q: 'Quel passage reste vague et appelle une précision ?', a: '« la culture, les fêtes, tout ça » : on ne sait pas ce que la salle accueillait.' },
    { q: 'Quels arguments solides sont cachés dans son texte ?', a: 'La salle est fermée depuis trois ans ; les associations se sont dispersées ; la moitié du budget serait trouvée grâce à une subvention ; les jeunes n’ont pas où répéter ; les anciens ne sortent plus le soir.' },
    { q: 'Léa parle-t-elle mal ?', a: 'Non : c’est de l’oral spontané, en français ordinaire. Mais pour être lu dans un bulletin, le texte doit être réécrit.' },
  ],
  audio: REC('rec-c1-07-lea'), say: REFRAME, terms: ['geste', 'conteste'],
};

/** THE ONE RECAP CARD: one group per lesson family it builds on, rows reused
 *  by id, each reframe imported, never retyped. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Sept leçons, un rappel',
  groups: [
    grp(Cap(CONNECTEURS_B1_REF), [
      it('fr.b1.connecteurs-logiques.1135', 'préciser'),
      it('fr.b1.connecteurs-logiques.1205', 'la cause'),
      it('fr.b1.connecteurs-logiques.1573', 'concéder'),
    ], chk('« Certes…, mais… » : que fait la phrase ?', ['Elle accorde un point, puis le dépasse.', 'Elle ajoute deux arguments du même côté.'], 0,
      `Au B1 : « ${B130_REFRAME} » Au C1, tu choisis des liens plus fins. EN: at B1, a connector states the link; now you choose finer ones.`)),
    grp(Cap(CAUSE_REF), [
      it('fr.b2.connecteurs-logiques.1904', 'du coup, familier'),
    ], chk('Dans un rapport, à la place de « du coup », tu écris plutôt...', ['donc, ou par conséquent', 'du coup, entre guillemets'], 0,
      `« ${B215_REFRAME} » Tu connais déjà l’échelle des registres de la conséquence ; l’acte 11 y revient avec les verdicts des autorités. EN: you know the register ladder.`)),
    grp(Cap(CONCESSION2_REF), [
      it('fr.b2.connecteurs-logiques.2140', 'malgré que, contesté à l’écrit'),
    ], chk('Au B2, « malgré que » était...', ['courant à l’oral, critiqué à l’écrit', 'correct dans tous les registres'], 0,
      `« ${B216_REFRAME} » Même méthode ici : reconnaître à l’oral, choisir à l’écrit. EN: same method: recognise, then choose.`)),
    grp(`${Cap(ACADEMIQUE_REF)} et ${REUNION_REF}`, [
      it('fr.b2.universite.1032', 'annoncer un plan'),
      it('fr.b2.affaires.1264', 'reformuler en réunion'),
      it('fr.b2.affaires.1362', 'récapituler'),
    ], chk('« Autrement dit » redit la même idée. Que fait « plus exactement » ?', ['Il la resserre : il la rend plus précise.', 'Il la répète mot pour mot.'], 0,
      `« ${B226_REFRAME} » Au B2, tu reformulais pour vérifier ; au C1, pour faire avancer l’idée. EN: at C1, a reformulation moves the idea on.`)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste', 'conteste'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Tu prépares une intervention de trois minutes', fr: src(E(2607)).fr, en: src(E(2607)).en },
    { situation: 'Tu relis un courriel important avant de l’envoyer', fr: src(E(2604)).fr, en: src(E(2604)).en },
    { situation: 'Tu transformes des notes orales en texte écrit', fr: src(E(2606)).fr, en: src(E(2606)).en },
    { situation: 'Tu dois finir un exposé sur une proposition claire', fr: src(E(2608)).fr, en: src(E(2608)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste', 'empilement'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le problème', 'Pourquoi la dernière phrase de Léa ne marche-t-elle pas ?', ['Elle empile des marqueurs et ne propose rien.', 'Elle est trop courte.', 'Elle contient un mot familier, et c’est interdit.'], 0,
    'Les mots familiers passent à l’oral ; ce qui manque, c’est un geste et une proposition. EN: the problem is no gesture, no proposal.'),
  ctl('La question', 'Devant un marqueur, tu te demandes d’abord...', ['ce qu’il fait de mon idée', 's’il est long', 's’il est rare'], 0,
    'Préciser, ajouter, raisonner ou conclure : chaque marqueur annonce un geste. EN: what does it do to the idea?'),
  ctl('La mission', 'À la fin de la leçon, tu vas...', ['lire l’intervention à voix haute', 'réécrire l’intervention de Léa pour le bulletin du quartier', 'corriger les fautes de Léa une par une'], 1,
    'De 250 à 400 mots : préciser, ajouter, conclure une fois, avec des marqueurs choisis pour l’écrit. EN: a written version, 250 to 400 words.'),
], ['geste', 'empilement']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le discours qui tourne en rond',
    opener: {
      line: 'Quatre marqueurs et aucune proposition : ici tu découvres qu’un marqueur doit annoncer un geste. EN: Four markers and no proposal: here you find that a marker must announce a gesture.',
      imageRef: 'lessons/reformuler-conclure/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’un marqueur se juge à ce qu’il fait de l’idée, et qu’on n’en empile pas. EN: You judge a marker by what it does to the idea, and you do not stack them.',
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — RECTIFIER EN AVANÇANT
 *
 *  TEXT: a sociologist's lecture, transcribed. MOVE: correct your own
 *  wording in the open: ou plutôt replaces, plus exactement narrows, pour
 *  mieux dire upgrades (soutenu). The first word stays visible.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_CONF: Sec<'reading'> = {
  type: 'reading', id: 'a2-conf', layer: 'core', questionsInModal: true,
  title: 'Ce que les bibliothèques sont devenues', frSub: 'Une conférence, transcrite',
  text: CONF_TEXT,
  glossary: [
    { word: 'entrepôt', en: 'warehouse', note: 'Un grand local où l’on stocke des marchandises.' },
  ],
  questions: [
    { q: 'Devine le sens : « rencontrer d’autres personnes sans avoir à consommer ». Que veut dire « consommer » ici ?', a: 'Acheter quelque chose, comme dans un café où il faut commander pour rester.' },
    { q: 'Que corrige la sociologue dans « le public a diminué » ?', a: 'Le verbe : le public n’a pas diminué, « ou plutôt il s’est déplacé ». Elle remplace le mot qui n’était pas juste.' },
    { q: 'Dans « pour autre chose, plus exactement pour trois choses », que fait « plus exactement » ?', a: 'Il resserre : « autre chose » était vrai mais vague ; les trois raisons le précisent.' },
    { q: 'Quel mot « pour mieux dire » introduit-il, et qu’apporte-t-il ?', a: '« une place publique couverte » : un mot plus exact que « refuge », qui dit que le lieu appartient à tous.' },
    { q: 'Pourquoi garde-t-elle le premier mot au lieu de l’effacer ?', a: 'Pour que le public voie le chemin d’un mot à l’autre : la correction elle-même devient un argument.' },
    { q: 'Selon elle, qu’est-ce qui change dans les bibliothèques ?', a: 'La part du livre dans le lieu, non le lieu lui-même.' },
  ],
  audio: REC('rec-c1-07-conf'), say: REFRAME, terms: ['rectifier', 'geste'],
};

const A2_TROIS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-trois', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-rectifier',
  title: 'Trois façons de se corriger', frSub: 'Remplacer, resserrer, monter d’un cran',
  hint: 'Quatre cartes. Regarde ce que devient le premier mot.',
  audio: REC('rec-c1-07-trois'), say: REFRAME, terms: ['rectifier'],
  cards: [
    { head: 'Remplacer', label: 'ou plutôt', fr: src(E(2613)).fr, sub: rsOf(E(2613)),
      body: 'Le premier mot n’était pas juste : le second le remplace. « Diminué » était faux, « déplacé » est vrai. EN: the first word was wrong; the second replaces it.' },
    { head: 'Resserrer', label: 'plus exactement', fr: src(E(2618)).fr, sub: rsOf(E(2618)),
      body: 'Le premier énoncé était vrai, mais vague : le second le précise. « Lundi » reste vrai, « lundi soir » le resserre. EN: the first was true but vague; the second narrows it.' },
    { head: 'Monter d’un cran', label: 'pour mieux dire, soutenu', fr: src(E(2622)).fr, sub: rsOf(E(2622)),
      body: 'On cherche le mot le plus exact, souvent plus fort. Le tour est soutenu : à l’oral familier, on dit plutôt « enfin, je veux dire ». EN: the more exact word, often a stronger one; formal.' },
    { head: 'Le premier mot reste', label: 'la méthode', fr: src(E(2617)).fr, sub: rsOf(E(2617)),
      body: 'Tu ne t’excuses pas, tu n’effaces rien : le lecteur voit le chemin d’un mot à l’autre, et c’est ce chemin qui convainc. EN: no apology, no erasing; the visible path persuades.' },
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-trier', layer: 'core', size: 'lg',
  title: 'Remplacer ou resserrer', frSub: 'Le premier mot était-il faux, ou seulement vague ?',
  groups: [
    grp('Trois corrections', [
      it(E(2619), 'mai était faux'),
      it(E(2620), 'cher était vrai, mais vague'),
      it(E(2621), 'moins était faux'),
    ], chk('« Le projet coûte cher, … deux fois le budget prévu. » Quel marqueur ?', ['plus exactement', 'en revanche'], 0,
      '« Cher » était vrai ; « deux fois le budget » le resserre. En revanche annoncerait un contraste. EN: narrowing a true statement.')),
    ctl('Le mot faux', '« Il est arrivé lundi, … mardi. » Le premier jour était faux. Quel marqueur ?', ['ou plutôt', 'plus exactement'], 0,
      'Lundi était faux : on le remplace. « Plus exactement » supposerait que lundi était vrai. EN: replace a wrong word.'),
    ctl('Le mot plus juste', '« Il a été maladroit, … blessant. » Quel marqueur, dans un texte soutenu ?', ['pour mieux dire', 'par exemple'], 0,
      'Pour mieux dire monte vers le mot juste. Par exemple ajouterait un cas, pas un mot plus exact. EN: upgrade to the apt word.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['rectifier'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six corrections qui n’avancent pas',
  rule: {
    title: 'Corriger, c’est avancer',
    body: 'Une reformulation doit apporter quelque chose : un mot plus juste, une précision réelle. Si elle redit tout, efface, ou contredit son propre marqueur, le lecteur recule au lieu d’avancer. EN: A reformulation must bring something; otherwise the reader goes backwards.',
  },
  cards: [
    { promptLabel: 'un faux resserrement', promptSound: 'Elle est partie en mai, plus exactement en juin.',
      fr: 'Elle est partie en mai, ou plutôt en juin.', ipa: '/ɛ.lɛ paʁ.ti ɑ̃ mɛ u ply.to ɑ̃ ʒɥɛ̃/',
      tip: 'Juin ne précise pas mai : il le remplace. EN: June replaces May, it does not narrow it.' },
    { promptLabel: 'une redite', promptSound: 'Le public a diminué, autrement dit il a diminué.',
      fr: 'Le public n’a pas diminué, ou plutôt il s’est déplacé.', ipa: '/lə py.blik na pa di.mi.nɥe u ply.to il sɛ de.pla.se/',
      tip: 'Redire le même mot n’avance pas : la correction doit changer quelque chose. EN: saying it twice moves nothing.' },
    { promptLabel: 'une excuse', promptSound: 'Le public a diminué. Non, pardon, oubliez ça. Il s’est déplacé.',
      fr: 'Le public n’a pas diminué, ou plutôt il s’est déplacé.', ipa: '/lə py.blik na pa di.mi.nɥe u ply.to il sɛ de.pla.se/',
      tip: 'À l’écrit, on ne s’excuse pas : on rectifie dans la même phrase. EN: in writing, rectify in one sentence.' },
    { promptLabel: 'deux marqueurs', promptSound: 'Ils viennent le soir, ou plutôt, plus exactement, entre dix-sept et vingt heures.',
      fr: 'Ils viennent le soir, plus exactement entre dix-sept et vingt heures.', ipa: '/il vjɛn lə swaʁ ply.zɛɡ.zak.tə.mɑ̃ ɑ̃.tʁə di.sɛt e vɛ̃.tœʁ/',
      tip: 'Un seul geste : ici, on resserre. Deux marqueurs se gênent. EN: one gesture only.' },
    { promptLabel: 'une précision vide', promptSound: 'Les gens viennent pour autre chose, plus exactement pour d’autres raisons.',
      fr: 'Les gens viennent pour autre chose, plus exactement pour travailler et se rencontrer.', ipa: '/le ʒɑ̃ vjɛn puʁ o.tʁə ʃoz ply.zɛɡ.zak.tə.mɑ̃ puʁ tʁa.va.je e sə ʁɑ̃.kɔ̃.tʁe/',
      tip: '« D’autres raisons » ne dit rien de plus qu’« autre chose » : donne les raisons. EN: the narrowing must add content.' },
    { promptLabel: 'la correction avant le mot', promptSound: 'Ou plutôt début juin, elle est partie en mai.',
      fr: 'Elle est partie en mai, ou plutôt début juin.', ipa: '/ɛ.lɛ paʁ.ti ɑ̃ mɛ u ply.to de.by ʒɥɛ̃/',
      tip: 'Le marqueur suit le mot qu’il corrige. EN: the marker follows the word it corrects.' },
  ],
  drill: [
    { promptSay: 'Elle est partie en mai, … début juin.', opts: ['ou plutôt', 'plus exactement'], correct: 0 },
    { promptSay: 'Il est arrivé lundi, … lundi soir.', opts: ['plus exactement', 'par exemple'], correct: 0 },
    { promptSay: 'Les étudiants viennent le soir, … entre dix-sept et vingt heures.', opts: ['plus exactement', 'en revanche'], correct: 0 },
    { promptSay: 'Le public n’a pas diminué, … il s’est déplacé.', opts: ['ou plutôt', 'c’est pourquoi'], correct: 0 },
    { promptSay: 'Il a été maladroit, … blessant.', opts: ['pour mieux dire', 'en revanche'], correct: 0 },
    { promptSay: 'Le projet coûte cher, … deux fois le budget prévu.', opts: ['plus exactement', 'par conséquent'], correct: 0 },
    { promptSay: 'On ne lit pas moins, … on lit autrement.', opts: ['ou plutôt', 'donc'], correct: 0 },
    { promptSay: 'Une bibliothèque est un refuge, … une place publique couverte.', opts: ['pour mieux dire', 'c’est pourquoi'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Corriger, c’est avancer' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qui fait reculer le lecteur' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-07-piege-rectifier'), say: REFRAME, terms: ['rectifier', 'empilement'],
};

const A2_VERSION = pourTaVersion('a2-version', 'Resserrer « tout ça »', [
  grp('Deux versions d’une phrase de Léa', [
    free('En fait, la salle, elle servait à plein de choses : la culture, les fêtes, tout ça.', 'Actually, the hall was used for loads of things: culture, parties, all that.', 'la version orale'),
    free('La salle servait à la vie du quartier, plus exactement aux répétitions des jeunes musiciens, aux fêtes des associations et aux soirées des anciens.', 'The hall served the life of the neighbourhood, more precisely young musicians’ rehearsals, the associations’ parties and evenings for older residents.', 'la version resserrée'),
  ], chk('Laquelle sert ta version écrite ?', ['la seconde', 'la première'], 0,
    '« Plus exactement » remplace « tout ça » par trois usages tirés du texte de Léa. EN: three precise uses replace « tout ça ».')),
  grp('Le premier mot reste', [
    it(E(2617), 'la méthode'),
    it(E(2613), 'le modèle'),
  ], chk('Tu as écrit « le quartier est vide », et ce n’est pas juste. Tu corriges sans effacer :', ['« Le quartier n’est pas vide, ou plutôt il n’a plus de lieu commun. »', '« Le quartier est vide, plus exactement vide. »'], 0,
    'Ou plutôt remplace le mot qui n’était pas juste, et le lecteur voit le chemin. EN: replace, visibly.')),
], ['rectifier', 'geste']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Remplacer', '« Ou plutôt » signale que le premier mot...', ['n’était pas juste', 'était juste, mais vague', 'était trop familier'], 0,
    'Ou plutôt remplace. EN: ou plutôt replaces.'),
  ctl('Resserrer', '« Plus exactement » signale que le premier énoncé...', ['était faux', 'était vrai, mais vague'], 1,
    'Plus exactement resserre ce qui était vrai. EN: plus exactement narrows a true statement.'),
  ctl('Le registre', '« Pour mieux dire » est...', ['soutenu', 'familier', 'contesté'], 0,
    'Un tour soutenu, à sa place dans un texte écrit ou une conférence. EN: formal.'),
], ['rectifier']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Rectifier en avançant',
    opener: {
      line: 'Le premier mot n’était pas le bon, et tu le laisses voir : ici tu apprends à te corriger en avançant. EN: The first word was not the right one, and you let it show: here you learn to correct yourself while moving on.',
      imageRef: 'lessons/reformuler-conclure/act02.jpg',
    },
    sections: [],
    milestone: 'Tu remplaces avec ou plutôt, tu resserres avec plus exactement, et tu montes d’un cran avec pour mieux dire. EN: You replace, narrow and upgrade your own wording.',
    estScreens: 34, restPoints: ['a2-trier'],
  },
  sections: [A2_CONF, A2_TROIS, A2_TRIER, A2_PIEGE, A2_VERSION, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — CE QUE J’ENTENDS PAR LÀ
 *
 *  TEXT: a housing co-op board's note that defines its own term. MOVE:
 *  give your definition (j’entends par là), name the actual case (en
 *  l’occurrence, never « par exemple »), tie a sentence to the aspect just
 *  named (à cet égard). Reprise itself belongs to lesson 5 in C1.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_NOTE: Sec<'reading'> = {
  type: 'reading', id: 'a3-note', layer: 'core', questionsInModal: true,
  title: 'La sobriété numérique, selon le conseil', frSub: 'Une note aux membres d’une coopérative',
  text: NOTE_TEXT,
  glossary: [
    { word: 'liseuse', en: 'e-reader', note: 'Un petit appareil pour lire des livres numériques.' },
  ],
  questions: [
    { q: 'Devine le sens : « éteindre ce qui tourne pour rien ». Que veut dire « tourner » ici ?', a: 'Fonctionner, rester allumé : des appareils qui marchent sans servir.' },
    { q: 'Pourquoi le conseil définit-il « sobriété numérique » ?', a: 'Parce que le terme est à la mode et que « chacun y met ce qu’il veut » : il donne SA définition, avec « nous entendons par là ».' },
    { q: 'Que désigne « en l’occurrence » dans la phrase sur l’imprimante ?', a: 'Le seul appareil dont on parle : l’imprimante de la salle commune, un modèle de 2016.' },
    { q: 'Le règlement exige un vote. Pourquoi n’y en aura-t-il pas ?', a: 'Parce qu’« en l’occurrence », dans ce cas précis, il s’agit de simples recommandations.' },
    { q: 'Dans « À cet égard, le comité des loisirs propose un cahier », à quoi renvoie « à cet égard » ?', a: 'Au prêt d’appareils, l’aspect que la phrase précédente vient de nommer.' },
    { q: 'Qu’est-ce que la note exclut explicitement ?', a: 'Renoncer à Internet et surveiller l’usage de chacun.' },
  ],
  audio: REC('rec-c1-07-note'), say: REFRAME, terms: ['preciser', 'geste'],
};

const A3_SENS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-sens', layer: 'core', sheetId: 'sheet-rectifier',
  title: 'Préciser : six marqueurs', frSub: 'Deux déjà vus, trois nouveaux, un piège',
  cols: ['Marqueur', 'Geste', 'Où tu l’as vu'],
  rows: [
    { cells: ['c’est-à-dire', 'redit plus clairement', 'B1, déjà vu'],
      say: 'J’arrive après-demain, c’est-à-dire jeudi.',
      detail: { title: 'c’est-à-dire', body: 'La même idée, dite autrement, souvent plus précisément. Tu le connais depuis le B1. EN: the same idea, put more clearly.', say: 'Le bureau ferme le week-end, c’est-à-dire samedi et dimanche.' } },
    { cells: ['autrement dit', 'reformule pour vérifier', 'B2, déjà vu'],
      say: 'Autrement dit, vous refusez notre offre.',
      detail: { title: 'autrement dit', body: `${Cap(REUNION_REF)} te l’a donné pour vérifier qu’on s’est compris en réunion. EN: rephrasing to check understanding.`, say: 'Autrement dit, la date ne bouge pas.' } },
    { cells: ['j’entends par là', 'donne ta définition', 'C1, nouveau'],
      say: src(E(2624)).fr,
      detail: { title: 'j’entends par là', body: 'Tu fixes le sens d’un mot vague pour ton texte, sans prétendre définir le dictionnaire. Variante : « nous entendons par là ». EN: your own definition of a vague word.', say: src(E(2629)).fr } },
    { cells: ['en l’occurrence', 'désigne le cas réel', 'C1, nouveau'],
      say: src(E(2625)).fr,
      detail: { title: 'en l’occurrence', body: '« Dans le cas présent » : le seul cas dont on parle. Ce n’est pas un exemple parmi d’autres. EN: the actual case at hand, not an example.', say: src(E(2630)).fr } },
    { cells: ['à cet égard', 'rattache à l’aspect nommé', 'C1, nouveau'],
      say: src(E(2633)).fr,
      detail: { title: 'à cet égard', body: `« Sur ce point, de ce point de vue » : la phrase se rattache à l’aspect que tu viens de nommer. Les reprises elles-mêmes sont ${REPRISE_REF}. EN: in this respect, linking to the aspect just named.`, say: src(E(2627)).fr } },
    { cells: ['par exemple', 'un cas parmi d’autres', 'à ne pas confondre'],
      say: 'Certains appareils, par exemple la perceuse, seront prêtés.',
      detail: { title: 'par exemple', body: 'Il donne un cas sur plusieurs possibles. C’est exactement ce que en l’occurrence ne fait pas. EN: one case among several, unlike en l’occurrence.', say: 'Plusieurs salles, par exemple celle de la mairie, pourraient servir.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preciser'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre précisions qui ne précisent rien',
  errors: [
    { wrong: 'Certains appareils, en l’occurrence la perceuse, seront prêtés, parmi d’autres.', right: 'Certains appareils, par exemple la perceuse, seront prêtés.',
      why: 'Normal : « in this case » et « for instance » se croisent en anglais. Mais en l’occurrence désigne le seul cas dont on parle. EN: en l’occurrence is the case, not an example.' },
    { wrong: src(E(2632)).fr, right: 'À cet égard, rien n’est décidé.',
      why: 'On veut insister, c’est compréhensible ; mais « à cet égard » veut déjà dire « sur ce point ». EN: the two say the same thing.' },
    { wrong: 'Je parle de sobriété ; j’entends par là la sobriété.', right: src(E(2624)).fr,
      why: 'On croit avoir défini ; on a seulement répété. J’entends par là doit apporter un contenu. EN: a definition must add content.' },
    { wrong: 'À cet égard, je voudrais ouvrir la séance.', right: 'Pour commencer, je voudrais parler du coût des travaux.',
      why: 'Le ton soutenu attire. Mais à cet égard renvoie à un aspect déjà nommé ; en tête de texte, il ne renvoie à rien. EN: it needs something to refer back to.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preciser'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-choisir', layer: 'core', size: 'lg',
  title: 'Ta définition, ton cas, ton aspect', frSub: 'De nouvelles phrases',
  groups: [
    grp('Trois cas réels', [
      it(E(2625), 'qui est responsable'),
      it(E(2630), 'quel bâtiment'),
      it(E(2626), 'la règle et ce cas-ci'),
    ], chk('Dans ces trois phrases, « en l’occurrence » introduit...', ['le cas réel dont on parle', 'un exemple parmi d’autres'], 0,
      'Chaque fois, il n’y a qu’un cas : la mairie, l’ancienne gare, cette exception-là. EN: one actual case each time.')),
    ctl('Définir', '« Je veux un quartier vivant ; … des lieux où l’on se croise sans rien acheter. »', ['j’entends par là', 'en l’occurrence', 'ou plutôt'], 0,
      'Tu fixes le sens de « vivant » pour ton texte. EN: you define your word.'),
    ctl('L’aspect nommé', '« Le chantier a pris six mois de retard. … , la mairie doit des explications. »', ['À cet égard', 'J’entends par là', 'Ou plutôt'], 0,
      'La phrase se rattache au retard qu’on vient de nommer. EN: it ties back to the delay.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['preciser'],
};

const A3_VERSION = pourTaVersion('a3-version', 'Définir la « culture » de Léa', [
  grp('Un mot vague, puis ta définition', [
    free('La salle servait à la culture.', 'The hall was used for culture.', 'le mot vague'),
    free('La salle servait à la culture, et j’entends par là un lieu où l’on joue, où l’on répète et où l’on se retrouve.', 'The hall was used for culture, and by that I mean a place where people perform, rehearse and meet.', 'ta définition'),
  ], chk('Laquelle sert ta version écrite ?', ['la seconde', 'la première'], 0,
    'J’entends par là donne ta définition : le lecteur ne met plus ce qu’il veut dans « culture ». EN: your definition closes the vague word.')),
  grp('Le cas réel', [
    it(E(2625), 'le modèle'),
  ], chk('Léa parle d’une aide pour la rénovation. Tu veux nommer laquelle, d’après son texte :', ['« une aide publique, en l’occurrence une subvention régionale »', '« une aide publique, par exemple une subvention régionale »'], 0,
    'Il n’y en a qu’une : la subvention régionale. Par exemple laisserait croire à d’autres aides. EN: the one actual case.')),
], ['preciser', 'geste']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Définir', '« J’entends par là » annonce...', ['ta définition d’un mot', 'un exemple', 'une conclusion'], 0,
    'Tu fixes le sens d’un mot pour ton texte. EN: your definition.'),
  ctl('Le cas', '« En l’occurrence » désigne...', ['un exemple parmi d’autres', 'le cas réel dont on parle'], 1,
    'Dans le cas présent, et dans celui-là seulement. EN: the actual case.'),
  ctl('L’aspect', '« À cet égard » a besoin...', ['d’un aspect déjà nommé', 'd’un chiffre', 'd’une question'], 0,
    'Il renvoie à ce que tu viens de nommer. EN: something already named.'),
], ['preciser']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Ce que j’entends par là',
    opener: {
      line: 'Un mot à la mode, chacun y met ce qu’il veut : ici tu apprends à dire ton sens et à nommer ton cas. EN: A fashionable word means whatever anyone likes: here you learn to state your meaning and name your case.',
      imageRef: 'lessons/reformuler-conclure/act03.jpg',
    },
    sections: [],
    milestone: 'Tu définis un mot vague, tu nommes le cas réel sans le confondre avec un exemple, et tu rattaches ta phrase à l’aspect nommé. EN: You define, name the actual case and tie back to the aspect named.',
    estScreens: 33, restPoints: ['a3-sens'],
  },
  sections: [A3_NOTE, A3_SENS, A3_ERREURS, A3_CHOISIR, A3_VERSION, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — À VRAI DIRE, LOIN S’EN FAUT
 *
 *  TEXT: a theatre column. MOVE: the candid turn (à vrai dire: what you
 *  really think, against an expectation) and the scaled-down claim (loin
 *  s’en faut after a negative or restrictive statement). A podcast says the
 *  same verdict aloud, heard once.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_CHRONIQUE: Sec<'reading'> = {
  type: 'reading', id: 'a4-chronique', layer: 'core', questionsInModal: true,
  title: 'Le théâtre rénové', frSub: 'Une chronique de La Gazette de Valbrune',
  text: CHRONIQUE_TEXT,
  glossary: [
    { word: 'parterre', en: 'the stalls', note: 'Les places du bas, face à la scène.' },
  ],
  questions: [
    { q: 'Devine le sens : « des réunions publiques houleuses ». Que veut dire « houleuses » ?', a: 'Agitées, tendues, pleines de disputes, comme une mer qui a de la houle.' },
    { q: 'Que révèle « À vrai dire » dans la première phrase ?', a: 'Un aveu : le chroniqueur s’attendait au pire, ce qu’un lecteur n’attend pas d’un critique.' },
    { q: 'La première fois, qu’est-ce que « loin s’en faut » renforce ?', a: 'La phrase négative « Tout n’est pas réglé pour autant » : il reste beaucoup à faire.' },
    { q: 'Quel est, selon lui, « le vrai sujet » ?', a: 'Il n’est pas technique : un théâtre rénové pour tous ne devrait pas réserver le bon son aux places les plus chères.' },
    { q: 'La chronique est-elle favorable ?', a: 'En partie : le lieu est beau et la programmation vaut le détour, mais le projet n’est pas fini. Il conseille d’y aller, au parterre.' },
    { q: 'Que veut dire « Dont acte » ?', a: 'Une formule soutenue : « nous en prenons note ». Ici, elle marque une certaine réserve devant la promesse.' },
  ],
  audio: REC('rec-c1-07-chronique'), say: REFRAME, terms: ['vraidire', 'geste'],
};

const A4_DEUX: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-deux', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-rectifier',
  title: 'Dire vrai, doser juste', frSub: 'À vrai dire, loin s’en faut',
  hint: 'Quatre cartes. Regarde contre quoi chaque phrase se dresse.',
  audio: REC('rec-c1-07-deux'), say: REFRAME, terms: ['vraidire'],
  cards: [
    { head: 'Contre une attente', label: 'à vrai dire', fr: src(E(2635)).fr, sub: rsOf(E(2635)),
      body: 'Tu avoues ce que tu pensais réellement, contre ce qu’on attendait de toi. « À vrai dire » ne veut pas dire « vraiment ». EN: an admission against expectations; not « really ».' },
    { head: 'Le vrai sujet', label: 'à vrai dire', fr: src(E(2638)).fr, sub: rsOf(E(2638)),
      body: 'Tu écartes une question pour poser la bonne. C’est souvent le moment où le texte dit enfin ce qu’il pense. EN: you set one issue aside to raise the real one.' },
    { head: 'Après une négation', label: 'loin s’en faut, soutenu', fr: src(E(2636)).fr, sub: rsOf(E(2636)),
      body: '« Il s’en faut de beaucoup » : loin s’en faut renforce une phrase négative ou restrictive. Tout n’est pas réussi, et de loin. EN: it strengthens a negative or a restriction.' },
    { head: 'Jamais après un éloge', label: 'le piège', fr: src(E(2639)).fr, sub: rsOf(E(2639)),
      body: 'Après « Le spectacle est réussi », loin s’en faut contredirait la phrase. Pose d’abord la restriction : « Tout n’est pas réussi ». EN: after praise it contradicts the sentence.' },
  ],
};

/** THE EAR MISSION: one take, the critic's verdict heard once. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Le Strapontin', frSub: 'Un podcast, une écoute',
  lines: [ln(E(2640)), ln(E(2641)), ln(E(2642)), ln(E(2643)), ln(E(2644)), ln(E(2645)), ln(E(2646)), ln(E(2647))],
  questions: [
    { q: 'Dans quel état d’esprit le critique allait-il au théâtre ?', opts: ['sans grand enthousiasme', 'avec impatience', 'en ami du directeur'], correct: 0,
      why: '« À vrai dire » annonce l’aveu : il n’y croyait pas beaucoup. EN: he admits low expectations.' },
    { q: 'Que fait « à vrai dire » dans sa phrase ?', opts: ['Il avoue ce qu’il pensait vraiment avant d’y aller.', 'Il dit que la pièce raconte une histoire vraie.'], correct: 0,
      why: 'C’est un aveu, pas un jugement sur la pièce. EN: an admission.' },
    { q: 'Après « loin s’en faut », que pense-t-il ?', opts: ['Beaucoup reste à régler.', 'Presque tout est réglé.'], correct: 0,
      why: 'Loin s’en faut renforce « tout n’est pas réglé ». EN: much remains to be fixed.' },
    { q: 'Quel défaut entend-on du balcon ?', opts: ['On voit mal la scène.', 'On entend mal les voix.', 'Les fauteuils sont trop serrés.'], correct: 1,
      why: 'Du balcon, les voix arrivent mal ; les places de côté, elles, voient mal. EN: poor sound upstairs.' },
    { q: 'Que conseille-t-il ?', opts: ['D’attendre la fin des travaux.', 'D’y aller en choisissant bien sa place.', 'D’éviter le foyer.'], correct: 1,
      why: '« Allez-y quand même », mais pas n’importe où. EN: go, but choose your seat.' },
  ],
  audio: REC('rec-c1-07-strapontin'), say: REFRAME, terms: ['vraidire'],
};

const A4_DOSER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-doser', layer: 'core', size: 'lg',
  title: 'Où mettre loin s’en faut', frSub: 'Et à quoi sert à vrai dire',
  groups: [
    grp('Trois restrictions', [
      it(E(2636), 'tout n’est pas'),
      it(E(2637), 'pas encore'),
      it(E(2644), 'pas réglé'),
    ], chk('Dans ces trois phrases, « loin s’en faut » suit...', ['une phrase négative', 'un éloge'], 0,
      'Chaque fois, une négation qu’il renforce : il s’en faut de beaucoup. EN: each time, a negative it strengthens.')),
    ctl('La bonne phrase', 'Laquelle peut se terminer par « loin s’en faut » ?', ['Le budget n’est pas bouclé', 'Le budget est bouclé'], 0,
      'Seule la phrase négative l’accepte. Après « est bouclé », il contredirait la phrase. EN: only the negative one.'),
    ctl('Le tournant franc', '« … , le problème n’est pas l’acoustique, c’est le prix. » Quel marqueur annonce ce que tu penses vraiment ?', ['À vrai dire', 'Loin s’en faut', 'Par exemple'], 0,
      'À vrai dire écarte une question pour poser la vraie. EN: it sets aside one issue for the real one.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['vraidire'],
};

const A4_VERSION = pourTaVersion('a4-version', 'Une fin qui ose', [
  grp('La fin de Léa', [
    free('Je pense qu’il faudrait faire quelque chose, mais peut-être pas tout de suite, enfin, je ne sais pas.', 'I think we should do something, but maybe not right away, well, I do not know.', 'une fin qui hésite'),
    free('À vrai dire, la question n’est plus de savoir s’il faut rouvrir la salle, mais quand.', 'To tell the truth, the question is no longer whether to reopen the hall, but when.', 'un tournant franc'),
  ], chk('Laquelle donne de la force à ta version ?', ['la seconde', 'la première'], 0,
    'À vrai dire déplace la question vers la vraie : non plus si, mais quand. EN: it moves to the real question.')),
  grp('Doser une restriction', [
    it(E(2636), 'le modèle'),
  ], chk('Tu veux dire que le quartier manque encore de lieux communs. Tu écris :', ['« Le quartier n’a pas assez de lieux communs, loin s’en faut. »', '« Le quartier a assez de lieux communs, loin s’en faut. »'], 0,
    'Loin s’en faut renforce la négation : il en manque beaucoup. EN: it strengthens the negative.')),
], ['vraidire', 'geste']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('À vrai dire', '« À vrai dire » annonce...', ['ce que tu penses réellement', 'une définition', 'un exemple'], 0,
    'Un aveu, une correction, le vrai sujet. EN: what you really think.'),
  ctl('Loin s’en faut', '« Loin s’en faut » renforce...', ['un éloge', 'une négation ou une restriction'], 1,
    'Tout n’est pas réglé, loin s’en faut. EN: a negative or a restriction.'),
  ctl('Le registre', '« Loin s’en faut » est...', ['soutenu', 'familier', 'contesté'], 0,
    'Un tour soutenu, à sa place dans une chronique ou un essai. EN: formal.'),
], ['vraidire']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'À vrai dire',
    opener: {
      line: 'Le critique avoue qu’il s’attendait au pire, puis dose son éloge : ici tu apprends le tournant franc et la restriction juste. EN: The critic admits he expected the worst, then measures his praise: here you learn the candid turn and the well-judged restriction.',
      imageRef: 'lessons/reformuler-conclure/act04.jpg',
    },
    sections: [],
    milestone: 'Tu dis ce que tu penses vraiment avec à vrai dire, et tu renforces une restriction avec loin s’en faut, jamais un éloge. EN: You turn candid and scale down a claim correctly.',
    estScreens: 33, restPoints: ['a4-deux'],
  },
  sections: [A4_CHRONIQUE, A4_DEUX, A4_ECOUTE, A4_DOSER, A4_VERSION, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — L’ARGUMENT QUI PÈSE
 *
 *  TEXT: a shopkeepers' open letter for a night bus. MOVE: add the
 *  argument that weighs (qui plus est), add one more consideration (sans
 *  compter que + indicative; sans compter + noun). Neither contrasts.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LETTRE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lettre', layer: 'core', questionsInModal: true,
  title: 'Pour la ligne de nuit', frSub: 'Une lettre ouverte au conseil municipal',
  text: LETTRE_TEXT,
  glossary: [
    { word: 'relève', en: 'shift change', note: 'Le moment où une équipe remplace l’autre au travail.' },
  ],
  questions: [
    { q: 'Devine le sens : « mise en service à titre d’essai ». Que veut dire « à titre d’essai » ?', a: 'Pour un temps limité, pour voir si cela marche, avant une décision définitive.' },
    { q: 'Quel argument « qui plus est » introduit-il la première fois ?', a: 'Le coût : la ligne coûte peu, moins d’un pour cent du budget des transports selon la Régie.' },
    { q: 'Pourquoi cet argument vient-il après l’utilité ?', a: 'Parce qu’il pèse davantage pour un conseil municipal : un chiffre, et une source officielle.' },
    { q: 'Que fait « sans compter que » dans la phrase sur les étudiants ?', a: 'Il ajoute un autre public, les étudiants, aux infirmières : une considération de plus, dans le même sens.' },
    { q: 'Comment la lettre répond-elle à l’objection des bus vides ?', a: 'Elle concède le mardi, la nie le week-end, et ajoute que la fréquentation progresse : « une fréquentation inégale n’est pas une fréquentation faible ».' },
    { q: 'Que demande exactement l’association ?', a: 'Le maintien de la ligne, pas une extension : « ne pas revenir en arrière ».' },
  ],
  audio: REC('rec-c1-07-lettre'), say: REFRAME, terms: ['ajout', 'geste'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a5-exemples', layer: 'core', sheetId: 'sheet-ajouter',
  title: 'Qui plus est, sans compter que', frSub: 'Six phrases, deux constructions chacun',
  examples: [
    ex(E(2648), 'qui plus est, entre virgules, devant le second argument'),
    ex(E(2655), 'et, qui plus est, au milieu de la phrase'),
    ex(E(2653), 'et qui plus est devant un adjectif'),
    ex(E(2649), 'sans compter que, suivi de l’indicatif'),
    ex(E(2654), 'sans compter, suivi d’un nom'),
    ex(E(2650), 'à l’oral, en tête de phrase'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ajout'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'Six ajouts qui trébuchent',
  rule: {
    title: 'Ajouter n’est pas opposer',
    body: 'Qui plus est et sans compter que ajoutent dans le même sens, souvent un argument plus fort. Ils n’opposent jamais, et sans compter que demande l’indicatif. EN: Both add in the same direction; neither contrasts, and sans compter que takes the indicative.',
  },
  cards: [
    { promptLabel: 'le subjonctif', promptSound: 'La ligne est utile, sans compter qu’elle soit rentable.',
      fr: 'La ligne est utile, sans compter qu’elle est rentable.', ipa: '/la liɲ ɛ.ty.til sɑ̃ kɔ̃.te kɛ.lɛ ʁɑ̃.tabl/',
      tip: 'Sans compter que pose un fait : indicatif. Ne le confonds pas avec « sans que ». EN: indicative, unlike « sans que ».' },
    { promptLabel: 'une opposition', promptSound: 'Le bus est utile ; qui plus est, il roule souvent à vide.',
      fr: 'Le bus est utile ; pourtant, il roule souvent à vide.', ipa: '/lə bys ɛ.ty.til puʁ.tɑ̃ il ʁul su.vɑ̃ a vid/',
      tip: 'Un argument contraire demande un marqueur d’opposition. EN: a counter-argument needs a contrast marker.' },
    { promptLabel: 'devant un nom', promptSound: 'L’essai a duré six mois, sans compter que les deux mois d’étude.',
      fr: src(E(2654)).fr, ipa: ipaOf(E(2654)),
      tip: 'Devant un nom : sans compter, sans que. EN: before a noun, no « que ».' },
    { promptLabel: 'deux ajouts', promptSound: 'Qui plus est, en outre, elle coûte peu.',
      fr: 'Qui plus est, elle coûte peu.', ipa: '/ki ply.zɛ ɛl kut pø/',
      tip: 'Un seul marqueur d’ajout : deux à la suite se gênent. EN: one addition marker.' },
    { promptLabel: 'devant un infinitif', promptSound: 'La ligne rassure les familles, sans compter qu’éviter bien des trajets en voiture.',
      fr: src(E(2649)).fr, ipa: ipaOf(E(2649)),
      tip: 'Sans compter que attend un sujet et un verbe conjugué : « sans compter qu’elle évite ». EN: it needs a subject and a conjugated verb.' },
    { promptLabel: 'sans compter que, mal accroché', promptSound: 'La ligne coûte peu, sans compter qu’elle est déficitaire.',
      fr: 'La ligne coûte peu, même si elle est déficitaire.', ipa: '/la liɲ kut pø mɛm si ɛ.lɛ de.fi.si.tɛʁ/',
      tip: 'Le déficit va contre « coûte peu » : il faut une concession, pas un ajout. EN: a concession, not an addition.' },
  ],
  drill: [
    { promptSay: 'La ligne est utile, sans compter qu’elle … rentable.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Le bus est utile ; … , il coûte peu.', opts: ['qui plus est', 'pourtant'], correct: 0 },
    { promptSay: 'Le bus est utile ; … , il roule souvent à vide.', opts: ['pourtant', 'qui plus est'], correct: 0 },
    { promptSay: 'L’essai a duré six mois, … les deux mois d’étude.', opts: ['sans compter', 'sans compter que'], correct: 0 },
    { promptSay: 'Les serveurs en profitent, … les infirmières la prennent aussi.', opts: ['sans compter que', 'bien que'], correct: 0 },
    { promptSay: 'Le trajet est long, et … mal éclairé.', opts: ['qui plus est', 'en revanche'], correct: 0 },
    { promptSay: 'Sans compter que les parkings … déjà pleins.', opts: ['sont', 'soient'], correct: 0 },
    { promptSay: 'Le service est fiable et, … , il arrive à l’heure.', opts: ['qui plus est', 'toutefois'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Ajouter n’est pas opposer' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qui fait trébucher l’ajout' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-07-piege-ajout'), say: REFRAME, terms: ['ajout', 'empilement'],
};

const A5_ORDRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-ordre', layer: 'core', size: 'lg',
  title: 'Dans quel ordre ajouter', frSub: 'De nouveaux arguments',
  groups: [
    grp('Deux arguments, un ordre', [
      free('La ligne N2 est pratique.', 'The N2 line is convenient.', 'un argument général'),
      free('La ligne N2 coûte moins d’un pour cent du budget.', 'The N2 line costs less than one per cent of the budget.', 'un argument chiffré'),
    ], chk('Tu les relies avec « qui plus est ». Lequel vient après le marqueur ?', ['le chiffre, qui pèse davantage', 'l’argument général'], 0,
      'Qui plus est annonce un argument au moins aussi fort : garde-le pour le chiffre. EN: the weightier point after it.')),
    ctl('Le mode', '« …, sans compter que le parking du centre … déjà plein. »', ['est', 'soit', 'être'], 0,
      'Sans compter que pose un fait : indicatif. EN: indicative.'),
    ctl('Le sens', 'Lequel de ces marqueurs n’ajoute pas, mais oppose ?', ['pourtant', 'qui plus est', 'sans compter que'], 0,
      'Pourtant oppose ; les deux autres ajoutent. EN: pourtant contrasts.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ajout'],
};

const A5_VERSION = pourTaVersion('a5-version', 'Les arguments de Léa, dans l’ordre', [
  grp('Les jeunes et les anciens', [
    free('Et puis, je veux dire, il y a aussi les jeunes, qui n’ont nulle part où répéter leur musique.', 'And then, I mean, there are also young people, who have nowhere to rehearse their music.', 'à l’oral'),
    free('La salle rendrait un lieu de répétition aux jeunes musiciens, sans compter qu’elle permettrait aux anciens de sortir de nouveau le soir.', 'The hall would give young musicians somewhere to rehearse again, not to mention that it would let older residents go out in the evening again.', 'à l’écrit'),
  ], chk('Que fait « sans compter que » dans la version écrite ?', ['Il ajoute une considération de plus.', 'Il oppose les deux publics.'], 0,
    'Les jeunes, puis les anciens : deux besoins dans le même sens. EN: one more consideration, same direction.')),
  grp('L’argument qui pèse', [
    it(E(2728), 'ta phrase'),
  ], chk('Où places-tu cette phrase dans ta version ?', ['après les besoins du quartier, pour finir sur l’argument concret', 'tout au début, avant même la proposition'], 0,
    'Le financement à moitié trouvé est ton argument le plus concret : qui plus est le met en valeur après les autres. EN: the concrete point last.')),
], ['ajout', 'geste']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Qui plus est', '« Qui plus est » annonce un argument...', ['au moins aussi fort que le précédent', 'contraire au précédent', 'plus faible, pour nuancer'], 0,
    'Il ajoute, et laisse entendre que la suite pèse. EN: an equally weighty or weightier point.'),
  ctl('Le mode', '« Sans compter que » se construit avec...', ['le subjonctif', 'l’indicatif'], 1,
    'Sans compter qu’elle est rentable. EN: indicative.'),
  ctl('Devant un nom', 'Devant un nom, on écrit...', ['sans compter', 'sans compter que'], 0,
    'Sans compter les deux mois d’étude. EN: no « que » before a noun.'),
], ['ajout']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'L’argument qui pèse',
    opener: {
      line: 'Deux arguments ne pèsent pas pareil : ici tu apprends à ajouter le plus lourd au bon moment. EN: Two arguments do not weigh the same: here you learn to add the heavier one at the right moment.',
      imageRef: 'lessons/reformuler-conclure/act05.jpg',
    },
    sections: [],
    milestone: 'Tu ajoutes l’argument qui pèse avec qui plus est, et une considération de plus avec sans compter que suivi de l’indicatif. EN: You add the weightier point and one more consideration, correctly built.',
    estScreens: 34, restPoints: ['a5-exemples'],
  },
  sections: [A5_LETTRE, A5_EXEMPLES, A5_PIEGE, A5_ORDRE, A5_VERSION, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L’ARGUMENT EN PASSANT
 *
 *  TEXT: a retired teacher's blog post. MOVE: slip a supporting point in as
 *  if in passing (d’ailleurs, du reste) and close a reservation (au
 *  demeurant). The stacking fault, met for the first time.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_BLOG: Sec<'reading'> = {
  type: 'reading', id: 'a6-blog', layer: 'core', questionsInModal: true,
  title: 'Écrire à la main ?', frSub: 'Le blog d’une institutrice à la retraite',
  text: BLOG_TEXT,
  glossary: [
    { word: 'feuilletée', en: 'leafed through', note: 'Tourner les pages d’un livre rapidement, sans tout lire.' },
  ],
  questions: [
    { q: 'Devine le sens : « la tentation du tout ou rien ». Que veut dire « tout ou rien » ?', a: 'Choisir un seul camp, sans moyen terme : tout écran ou tout cahier.' },
    { q: 'Que fait « d’ailleurs » dans « j’en utilise d’ailleurs un tous les jours » ?', a: 'Il glisse une preuve qu’elle n’est pas contre les écrans, comme en passant.' },
    { q: 'Quelle preuve « du reste » ajoute-t-il, la première fois ?', a: 'Les élèves disaient eux-mêmes qu’ils retenaient mieux ce qu’ils avaient écrit.' },
    { q: 'Dans « un peu austère, au demeurant fort bien conçue », que fait « au demeurant » ?', a: 'Il suit une réserve (« un peu austère ») et la dépasse : pour le reste, la méthode est bien conçue.' },
    { q: 'Pourquoi dit-elle « Je n’en tire pas une loi. Je constate. » ?', a: 'Pour limiter la portée de ce qu’elle dit : un témoignage, pas une preuve générale.' },
    { q: 'Quelle est sa réponse finale ?', a: 'Écrire à la main, un peu, chaque jour, sans renoncer au clavier.' },
  ],
  audio: REC('rec-c1-07-blog'), say: REFRAME, terms: ['aparte', 'geste'],
};

const A6_GLISSER: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-glisser', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-ajouter',
  title: 'Glisser une preuve', frSub: 'D’ailleurs, du reste, au demeurant',
  hint: 'Quatre cartes. Le ton est léger ; regarde l’effet.',
  audio: REC('rec-c1-07-glisser'), say: REFRAME, terms: ['aparte'],
  cards: [
    { head: 'Une preuve en passant', label: 'd’ailleurs', fr: src(E(2658)).fr, sub: rsOf(E(2658)),
      body: 'La preuve arrive comme un détail, au milieu de la phrase ; elle pèse pourtant autant qu’un argument. EN: the proof arrives like a detail, yet it weighs.' },
    { head: 'Le même geste, soutenu', label: 'du reste', fr: src(E(2659)).fr, sub: rsOf(E(2659)),
      body: 'Du reste fait ce que fait d’ailleurs, dans un registre plus soutenu. Il ouvre souvent la phrase. EN: same gesture, more formal.' },
    { head: 'Après une réserve', label: 'au demeurant, soutenu', fr: src(E(2660)).fr, sub: rsOf(E(2660)),
      body: '« Au reste, tout bien considéré » : tu concèdes un défaut, puis tu dis ce qui l’emporte. Souvent devant un adjectif. EN: after a reservation, what outweighs it.' },
    { head: 'À l’oral, une digression', label: 'd’ailleurs', fr: src(E(2666)).fr, sub: rsOf(E(2666)),
      body: 'En conversation, d’ailleurs ouvre aussi un changement de sujet. À l’écrit, réserve-le à la preuve glissée. EN: in talk it also opens an aside.' },
  ],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre apartés qui dérapent',
  errors: [
    { wrong: 'Je n’aime pas les écrans ; d’ailleurs, j’en utilise un tous les jours.', right: 'Je n’aime pas les écrans ; pourtant, j’en utilise un tous les jours.',
      why: 'Normal : d’ailleurs semble seulement glisser un détail. Mais il le glisse dans le même sens ; un fait contraire demande pourtant. EN: d’ailleurs adds in the same direction.' },
    { wrong: 'D’ailleurs, du reste, ils le disaient eux-mêmes.', right: 'Du reste, ils le disaient eux-mêmes.',
      why: 'On croit renforcer ; on fait deux fois le même geste, et la phrase s’alourdit. EN: the same gesture twice.' },
    { wrong: 'Le chantier commence en mai ; au demeurant, les cours ont lieu ailleurs.', right: 'Le chantier commence en mai ; en attendant, les cours ont lieu ailleurs.',
      why: '« Demeurer » fait penser à la durée. Mais au demeurant veut dire « au reste, tout bien considéré », jamais « en attendant ». EN: au demeurant is not « meanwhile ».' },
    { wrong: 'Il a raison ; par ailleurs, les chiffres le confirment.', right: 'Il a raison ; d’ailleurs, les chiffres le confirment.',
      why: 'Les deux se ressemblent. Mais par ailleurs passe à un autre aspect ; d’ailleurs appuie le même point. EN: par ailleurs changes aspect; d’ailleurs supports the same point.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['aparte', 'empilement'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-choisir', layer: 'core', size: 'lg',
  title: 'Le bon aparté', frSub: 'De nouvelles phrases',
  groups: [
    grp('Trois preuves glissées', [
      it(E(2663), 'd’ailleurs, au milieu'),
      it(E(2664), 'du reste, en tête'),
      it(E(2665), 'au demeurant, après une réserve'),
    ], chk('Dans « Un livre inégal, au demeurant passionnant », « au demeurant » vient après...', ['une réserve', 'une preuve chiffrée'], 0,
      '« Inégal » est la réserve ; « passionnant » l’emporte. EN: the reservation comes first.')),
    ctl('Même point ou autre aspect', '« Le projet est utile ; … , les usagers le réclament. » La phrase appuie le même point :', ['d’ailleurs', 'par ailleurs'], 0,
      'La demande des usagers prouve l’utilité : d’ailleurs. Par ailleurs passerait à un autre sujet. EN: same point, d’ailleurs.'),
    ctl('Un seul', 'Combien de marqueurs d’ajout devant « ils le disaient eux-mêmes » ?', ['un seul', 'deux, pour insister', 'trois, à l’écrit'], 0,
      'Un geste, un marqueur. EN: one gesture, one marker.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['aparte', 'empilement'],
};

const A6_VERSION = pourTaVersion('a6-version', 'Glisser une preuve, sans l’inventer', [
  grp('Une preuve glissée', [
    free('Les associations se sont dispersées.', 'The associations have scattered.', 'le fait de Léa'),
    free('Les associations se sont dispersées ; trois d’entre elles se réunissent d’ailleurs aujourd’hui dans des cafés.', 'The associations have scattered; three of them in fact now meet in cafés.', 'une preuve ajoutée'),
  ], chk('Peux-tu écrire la seconde dans ta version ?', ['Non : les trois associations et les cafés ne sont pas dans le texte de Léa.', 'Oui : la preuve rend le texte plus fort.'], 0,
    'Une preuve glissée doit venir du texte de Léa : tu reformules, tu n’inventes pas de faits. EN: the proof must come from Léa’s text.')),
  grp('Après une réserve', [
    it(E(2660), 'le modèle'),
  ], chk('Tu concèdes le coût, puis tu défends le projet, en soutenu :', ['« Un projet coûteux, au demeurant utile à tout le quartier. »', '« Un projet coûteux, en attendant utile à tout le quartier. »'], 0,
    'Au demeurant suit la réserve et dit ce qui l’emporte ; en attendant parlerait du temps. EN: au demeurant after the reservation.')),
], ['aparte', 'geste']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('D’ailleurs', '« D’ailleurs » glisse un argument...', ['dans le même sens', 'dans le sens contraire'], 0,
    'Une preuve de plus, comme en passant. EN: same direction.'),
  ctl('Au demeurant', '« Au demeurant » veut dire...', ['en attendant', 'au reste, tout bien considéré', 'au début'], 1,
    'Il suit souvent une réserve. EN: for the rest, all things considered.'),
  ctl('L’empilement', '« D’ailleurs, du reste, qui plus est » : que fais-tu ?', ['je garde un seul marqueur', 'je les garde tous, pour insister'], 0,
    'Trois marqueurs pour un geste : le lecteur ne sait plus lequel suivre. EN: keep one.'),
], ['aparte', 'empilement']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'L’argument en passant',
    opener: {
      line: 'Une preuve glissée l’air de rien pèse parfois plus qu’un argument : ici tu apprends l’aparté, et à ne pas l’empiler. EN: A proof slipped in casually can weigh more than an argument: here you learn the aside, and not to stack it.',
      imageRef: 'lessons/reformuler-conclure/act06.jpg',
    },
    sections: [],
    milestone: 'Tu glisses une preuve avec d’ailleurs ou du reste, tu dépasses une réserve avec au demeurant, et tu n’empiles plus. EN: You slip in proof, outweigh a reservation and stop stacking.',
    estScreens: 32, restPoints: ['a6-glisser'],
  },
  sections: [A6_BLOG, A6_GLISSER, A6_ERREURS, A6_CHOISIR, A6_VERSION, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — DU CAS LE PLUS FORT
 *
 *  TEXT: an urban planner's essay extract. MOVE: argue a fortiori: from
 *  the case where a conclusion is least expected to the case where it is
 *  most obvious (a fortiori, à plus forte raison, à plus forte raison si).
 *  The trap is the reversed direction.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ESSAI: Sec<'reading'> = {
  type: 'reading', id: 'a7-essai', layer: 'core', questionsInModal: true,
  title: 'La ville à hauteur de poussette', frSub: 'Extrait d’un essai',
  text: ESSAI_TEXT,
  glossary: [
    { word: 'attroupements', en: 'gatherings, groups of people', note: 'Des groupes de personnes qui se forment dans la rue.' },
  ],
  questions: [
    { q: 'Devine le sens : « deux piétons s’y croisent en se frôlant ». Que veut dire « se frôler » ?', a: 'Se toucher presque, passer très près l’un de l’autre.' },
    { q: 'Dans la phrase sur les trottoirs, de quel cas part l’auteur, et vers lequel va-t-il ?', a: 'De l’adulte valide, qui les trouve déjà étroits, vers la personne en fauteuil, pour qui ils sont a fortiori impraticables.' },
    { q: 'Que fait « à plus forte raison » dans la phrase sur l’escalier ?', a: 'Il passe du joggeur, qu’il essouffle, à la personne qui marche avec une canne, qu’il arrête : le cas encore plus évident.' },
    { q: 'Comment l’auteur répond-il à « ces cas sont minoritaires » ?', a: 'Ils le sont si l’on compte les personnes, pas si l’on compte les moments : chacun, un jour, est gêné.' },
    { q: 'Quel a fortiori va dans l’autre sens, des bien-portants vers les fragiles ?', a: '« Si une rampe sert ceux qui marchent bien, elle sert a fortiori ceux qui marchent mal. »' },
    { q: 'Quelle est sa conclusion ?', a: 'Concevoir pour les plus fragiles est la façon la plus économique de construire pour tous.' },
  ],
  audio: REC('rec-c1-07-essai'), say: REFRAME, terms: ['fortiori', 'geste'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a7-exemples', layer: 'core', sheetId: 'sheet-raisonner',
  title: 'A fortiori, à plus forte raison', frSub: 'Toujours vers le cas le plus évident',
  examples: [
    ex(E(2668), 'a fortiori, dans la phrase : de l’adulte en forme à la personne âgée'),
    ex(E(2671), 'de l’été à l’hiver'),
    ex(E(2669), 'et à plus forte raison + nom'),
    ex(E(2673), 'à plus forte raison si + proposition'),
    ex(E(2672), 'avec une négation : si personne ne le lit à pied, encore moins en voiture'),
    ex(E(2674), 'si même…, à plus forte raison…'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fortiori'],
};

const A7_SENS: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-sens', layer: 'core', size: 'lg',
  title: 'Dans quel sens', frSub: 'Du cas le moins attendu au cas évident',
  groups: [
    grp('Trois raisonnements', [
      it(E(2669), 'des poussettes aux fauteuils'),
      it(E(2672), 'du piéton à l’automobiliste'),
      it(E(2674), 'des guides aux visiteurs'),
    ], chk('Dans ces trois phrases, le second cas est...', ['celui où c’est encore plus vrai', 'celui où c’est moins vrai'], 0,
      'On va toujours vers le cas où la conclusion s’impose davantage. EN: toward the case where it is even truer.')),
    ctl('Le premier cas', 'Pour raisonner a fortiori, tu pars...', ['du cas où l’on s’y attend le moins', 'du cas le plus évident'], 0,
      'Si c’est vrai là où on ne l’attendait pas, c’est encore plus vrai ailleurs. EN: start where it is least expected.'),
    ctl('Le bon ordre', 'Laquelle est juste ?', ['« Si la rampe aide les livreurs, elle aide a fortiori les fauteuils roulants. »', '« Si la rampe aide les fauteuils roulants, elle aide a fortiori les livreurs. »'], 0,
      'Une rampe est faite pour les fauteuils : c’est là qu’elle aide le plus. EN: the wheelchair is the more evident case.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fortiori'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'Six raisonnements à l’envers',
  rule: {
    title: 'Toujours vers le cas le plus évident',
    body: 'A fortiori et à plus forte raison comparent deux cas : le premier, où la conclusion surprend, et le second, où elle s’impose encore plus. À l’envers, il ne prouve rien. EN: Two cases, from the surprising one to the obvious one; reversed, it proves nothing.',
  },
  cards: [
    { promptLabel: 'à l’envers', promptSound: 'Si l’escalier épuise une personne âgée, il fatigue a fortiori un adulte en forme.',
      fr: src(E(2668)).fr, ipa: ipaOf(E(2668)),
      tip: 'On part du cas où c’est surprenant : l’adulte en forme. EN: start from the surprising case.' },
    { promptLabel: 'une simple conséquence', promptSound: 'Les crédits baissent ; a fortiori, il faut choisir.',
      fr: 'Les crédits baissent ; il faut donc choisir.', ipa: '/le kʁe.di bɛs il fo dɔ̃k ʃwa.ziʁ/',
      tip: 'Il n’y a pas deux cas à comparer : c’est une conséquence, donc. EN: no two cases, just a consequence.' },
    { promptLabel: 'à l’envers', promptSound: 'Si les visiteurs se perdent, à plus forte raison les guides.',
      fr: src(E(2674)).fr, ipa: ipaOf(E(2674)),
      tip: 'Ce sont les guides qui ne devraient pas se perdre : on part d’eux. EN: the guides are the surprising case.' },
    { promptLabel: 'avec une négation', promptSound: 'Personne ne lit ce panneau en voiture, et à plus forte raison à pied.',
      fr: src(E(2672)).fr, ipa: ipaOf(E(2672)),
      tip: 'À pied, on lit plus facilement : si même là personne ne lit, encore moins en voiture. EN: with a negative, from the easier case.' },
    { promptLabel: 'sans premier cas', promptSound: 'A fortiori, la rampe est utile.',
      fr: src(E(2671)).fr, ipa: ipaOf(E(2671)),
      tip: 'A fortiori a besoin d’un premier cas auquel se comparer. EN: it needs a first case.' },
    { promptLabel: 'deux fois le même', promptSound: 'Elle l’est a fortiori, et à plus forte raison, en hiver.',
      fr: 'Elle l’est a fortiori en hiver.', ipa: '/ɛl lɛ a fɔʁ.sjɔ.ʁi ɑ̃.ni.vɛʁ/',
      tip: 'Les deux disent la même chose : un seul suffit. EN: they say the same thing.' },
  ],
  drill: [
    { promptSay: 'Si l’escalier fatigue un adulte en forme, il épuise … une personne âgée.', opts: ['a fortiori', 'pourtant'], correct: 0 },
    { promptSay: 'Si la rampe est utile en été, elle l’est a fortiori …', opts: ['en hiver, sous la neige', 'par beau temps'], correct: 0 },
    { promptSay: 'Si même les guides se perdent, à plus forte raison …', opts: ['les visiteurs', 'les guides eux-mêmes'], correct: 0 },
    { promptSay: 'Personne ne lit ce panneau à pied, et à plus forte raison …', opts: ['en voiture', 'assis sur un banc'], correct: 0 },
    { promptSay: 'Les crédits baissent ; il faut … choisir.', opts: ['donc', 'a fortiori'], correct: 0 },
    { promptSay: 'Ces marches gênent les poussettes, et à plus forte raison …', opts: ['les fauteuils roulants', 'les joggeurs'], correct: 0 },
    { promptSay: 'Il faut une rampe, à plus forte raison … l’école accueille des enfants en fauteuil.', opts: ['si', 'pourtant'], correct: 0 },
    { promptSay: 'Si trente parcelles animent le square, cinquante le feront …', opts: ['a fortiori', 'pourtant'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Toujours vers le cas évident' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qui renverse le raisonnement' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-07-piege-fortiori'), say: REFRAME, terms: ['fortiori'],
};

const A7_VERSION = pourTaVersion('a7-version', 'Un a fortiori pour Léa', [
  grp('Les associations et les anciens', [
    free('Et les anciens, qui ne sortent plus le soir.', 'And the older residents, who no longer go out at night.', 'à l’oral'),
    free('Si la salle manque aux associations, elle manque a fortiori aux anciens, qui ne sortent plus le soir.', 'If the associations miss the hall, the older residents, who no longer go out at night, miss it all the more.', 'un raisonnement a fortiori'),
  ], chk('Le raisonnement va-t-il dans le bon sens ?', ['Oui : les anciens ont encore moins d’autres solutions.', 'Non : il faudrait partir des anciens.'], 0,
    'Les associations peuvent aller ailleurs ; les anciens, qui ne sortent plus le soir, beaucoup moins. EN: the older residents are the more evident case.')),
  grp('Le modèle', [
    it(E(2671), 'de l’été à l’hiver'),
  ], chk('Tu veux dire que la salle sert les jeunes, et plus encore ceux qui n’ont aucun local. Tu écris :', ['« Si la salle sert les jeunes, elle sert à plus forte raison ceux qui n’ont aucun local pour répéter. »', '« Si la salle sert ceux qui n’ont aucun local, elle sert à plus forte raison tous les jeunes. »'], 0,
    'Ceux qui n’ont aucun local sont le cas où la salle compte le plus : ils viennent en second. EN: the neediest case comes second.')),
], ['fortiori', 'geste']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le sens', 'A fortiori va...', ['du cas évident au cas surprenant', 'du cas où l’on s’y attend le moins au cas évident'], 1,
    'Toujours vers le cas où la conclusion s’impose. EN: toward the obvious case.'),
  ctl('La construction', '« À plus forte raison » peut ouvrir...', ['une proposition avec si', 'un infinitif seul'], 0,
    'À plus forte raison si l’école accueille des enfants en fauteuil. EN: à plus forte raison si.'),
  ctl('Le faux a fortiori', '« Les crédits baissent ; il faut choisir. » Quel marqueur ?', ['donc', 'a fortiori'], 0,
    'Une simple conséquence, sans deux cas à comparer. EN: a plain consequence.'),
], ['fortiori']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Du cas le plus fort',
    opener: {
      line: 'Si l’escalier essouffle un joggeur, imagine une personne avec une canne : ici tu apprends à raisonner du cas le plus fort. EN: If the stairs wind a jogger, picture someone with a cane: here you learn to argue from the stronger case.',
      imageRef: 'lessons/reformuler-conclure/act07.jpg',
    },
    sections: [],
    milestone: 'Tu raisonnes a fortiori dans le bon sens, du cas le moins attendu au cas évident, et tu sais quand donc suffit. EN: You argue a fortiori the right way round, and know when donc is enough.',
    estScreens: 34, restPoints: ['a7-exemples'],
  },
  sections: [A7_ESSAI, A7_EXEMPLES, A7_SENS, A7_PIEGE, A7_VERSION, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — DÈS LORS
 *
 *  TEXT: a hundred years of a market hall, in the town bulletin. MOVE: read
 *  dès lors as time (« à partir de ce moment », in a dated narrative, often
 *  with a causal shade) or as logic (« par conséquent », in an argument);
 *  dès lors que + indicative, mostly causal today. Quizzed only where one
 *  reading clearly dominates.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HALLES: Sec<'reading'> = {
  type: 'reading', id: 'a8-halles', layer: 'core', questionsInModal: true,
  title: 'Les halles de Valbrune', frSub: 'Cent ans d’histoire, dans le bulletin municipal',
  text: HALLES_TEXT,
  glossary: [
    { word: 'étals', en: 'market stalls', note: 'Les tables où les marchands présentent leurs produits.' },
  ],
  questions: [
    { q: 'Devine le sens : « les maraîchers de toute la vallée ». Qui sont les maraîchers ?', a: 'Des producteurs de légumes, qui viennent les vendre au marché.' },
    { q: 'En 1925, « dès lors, le samedi devient le grand jour » : temps ou cause ?', a: 'Surtout le temps, à partir de l’ouverture des halles ; une nuance de cause s’y mêle, car c’est l’ouverture qui change le samedi.' },
    { q: '« Dès lors, la question n’est plus de savoir s’il faut intervenir » : temps ou cause ?', a: 'La cause : puisque la toiture fuit, il faut agir ; par conséquent, la question devient « comment ».' },
    { q: 'Que veut dire « dès lors que le bâtiment est inscrit au patrimoine communal » ?', a: '« Puisque, du moment que » : c’est une raison de ne pas démolir.' },
    { q: 'Que dit le dernier « dès lors qu’une majorité d’entre eux le demanderait » ?', a: 'Une condition : la mairie tentera l’essai du moment qu’une majorité de commerçants le demande.' },
    { q: 'Le texte dit-il pourquoi la fréquentation baisse après 1968 ?', a: 'Il le suggère sans l’affirmer : un supermarché s’installe, « dès lors » la fréquentation décline. Le marqueur est temporel ; la cause se devine.' },
  ],
  audio: REC('rec-c1-07-halles'), say: REFRAME, terms: ['deslors', 'geste'],
};

const A8_SENS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-sens', layer: 'core', sheetId: 'sheet-raisonner',
  title: 'Dès lors : six phrases', frSub: 'Le contexte décide',
  cols: ['Phrase', 'Dès lors veut dire', 'Indice'],
  rows: [
    { cells: ['à trente ans ; dès lors, il court chaque dimanche', 'à partir de ce moment', 'un récit daté'],
      say: src(E(2675)).fr,
      detail: { title: 'Le temps', body: 'Un départ dans un récit : depuis ce jour-là. Le passé et la date sont les indices. EN: a starting point in a narrative.', say: src(E(2681)).fr } },
    { cells: ['crédits réduits ; dès lors, il faut choisir', 'par conséquent', 'un raisonnement'],
      say: src(E(2676)).fr,
      detail: { title: 'La cause', body: 'Une conséquence tirée d’un fait : dans ces conditions. Le présent et l’argument sont les indices. EN: a consequence drawn from a fact.', say: src(E(2685)).fr } },
    { cells: ['dès lors que le budget est voté…', 'une fois que, du moment que', 'dès lors que + indicatif'],
      say: src(E(2677)).fr,
      detail: { title: 'Dès lors que', body: 'Une condition remplie, une raison posée : aujourd’hui surtout causal. Toujours l’indicatif. EN: once, since; indicative.', say: src(E(2686)).fr } },
    { cells: ['dès lors que tu as signé…', 'puisque', 'un engagement'],
      say: src(E(2679)).fr,
      detail: { title: 'Puisque', body: 'La signature est la raison de l’engagement : du moment que tu as signé. EN: since you have signed.', say: src(E(2679)).fr } },
    { cells: ['en 1974… dès lors, les autobus…', 'à partir de là, et à cause de cela', 'les deux se mêlent'],
      say: src(E(2681)).fr,
      detail: { title: 'Les deux à la fois', body: 'Dans un récit, le départ dans le temps laisse souvent entendre une cause. Ne force pas le choix : dis les deux. EN: in a narrative, time often implies cause.', say: src(E(2681)).fr } },
    { cells: ['par conséquent', 'la cause seulement', 'l’équivalent sans ambiguïté'],
      say: 'Les crédits ont été réduits ; par conséquent, il faut choisir.',
      detail: { title: 'Si tu veux être clair', body: 'Quand le temps pourrait brouiller ta phrase, par conséquent ne dit que la cause. EN: par conséquent is unambiguous.', say: 'La toiture fuit ; par conséquent, il faut agir.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['deslors'],
};

/** THE EAR MISSION: one take, both readings of dès lors heard once. */
const A8_TRAM: Sec<'listening'> = {
  type: 'listening', id: 'a8-tram', layer: 'core', hideLines: true,
  title: 'Le retour du tram', frSub: 'Une chronique radio, une écoute',
  lines: [ln(E(2680)), ln(E(2681)), ln(E(2682)), ln(E(2683)), ln(E(2684)), ln(E(2685)), ln(E(2686)), ln(E(2687))],
  questions: [
    { q: 'Qu’a fait la ville en 1974 ?', opts: ['Elle a fermé sa dernière ligne de tram.', 'Elle a ouvert une ligne de tram.', 'Elle a vendu ses autobus.'], correct: 0,
      why: 'La chronique commence par une fermeture. EN: a closure.' },
    { q: 'Après la fermeture, qui a pris toute la place ?', opts: ['les vélos', 'les autobus', 'les piétons'], correct: 1,
      why: '« Dès lors », à partir de ce moment, les autobus. EN: the buses.' },
    { q: 'Le « dès lors » qui suit l’étude veut dire...', opts: ['à partir de 1974', 'par conséquent : l’étude avait tranché'], correct: 1,
      why: 'L’étude conclut que la ligne serait rentable ; il ne reste donc qu’à la financer. EN: a consequence of the study.' },
    { q: 'Que fallait-il pour que le chantier démarre ?', opts: ['un vote des habitants', 'toute la somme', 'un tiers des fonds'], correct: 2,
      why: '« Dès lors qu’un tiers des fonds était réuni » : la condition. EN: a third of the funds.' },
    { q: 'Quand la première rame a-t-elle circulé ?', opts: ['en 2009', 'en 1974', 'en 1994'], correct: 0,
      why: 'La dernière phrase donne la date. EN: in 2009.' },
  ],
  audio: REC('rec-c1-07-tram'), say: REFRAME, terms: ['deslors'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-trier', layer: 'core', size: 'lg',
  title: 'Temps ou cause', frSub: 'De nouvelles phrases',
  groups: [
    grp('Deux dès lors', [
      it(E(2675), 'un récit daté'),
      it(E(2676), 'un raisonnement'),
    ], chk('Laquelle accepte « par conséquent » à la place de « dès lors » ?', ['celle sur les crédits', 'celle sur la course à pied'], 0,
      'Des crédits réduits obligent à choisir : c’est une conséquence. La course à trente ans marque un départ dans le temps. EN: the budget sentence is causal.')),
    ctl('Dès lors que', '« Dès lors que tu as signé, tu es engagé. » Dès lors que veut dire...', ['puisque, du moment que', 'bien que', 'avant que'], 0,
      'La signature est la raison de l’engagement. EN: since.'),
    ctl('Le mode', '« Dès lors que le budget … voté, les travaux peuvent commencer. »', ['est', 'soit'], 0,
      'Dès lors que se construit avec l’indicatif. EN: indicative.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['deslors'],
};

const A8_VERSION = pourTaVersion('a8-version', 'Depuis la fermeture', [
  grp('Une phrase de Léa', [
    free('Suite à la fermeture, les associations se sont un peu dispersées.', 'After the closure, the associations scattered a bit.', 'à l’oral'),
    free('La salle a fermé il y a trois ans ; dès lors, les associations se sont dispersées.', 'The hall closed three years ago; since then, the associations have scattered.', 'à l’écrit'),
  ], chk('Que dit « dès lors » dans la version écrite ?', ['à partir de ce moment, avec une nuance de cause', 'une condition'], 0,
    'Un départ dans le temps, et la fermeture se devine comme cause : exactement ce que Léa voulait dire. EN: time, with a causal shade.')),
  grp('Une conséquence', [
    it(E(2676), 'le modèle'),
  ], chk('La moitié du budget est trouvée. Tu en tires une conséquence pour le conseil :', ['« Dès lors, il reste surtout à fixer un calendrier. »', '« Dès lors que, il reste surtout à fixer un calendrier. »'], 0,
    'Dès lors seul ouvre une conséquence ; dès lors que attend une proposition. EN: dès lors alone opens a consequence.')),
], ['deslors', 'geste']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le récit', 'Dans un récit daté, « dès lors » veut surtout dire...', ['à partir de ce moment', 'bien que'], 0,
    'Un départ dans le temps, souvent avec une nuance de cause. EN: from then on.'),
  ctl('Le raisonnement', 'Dans un raisonnement, « dès lors » veut dire...', ['autrefois', 'par conséquent', 'en revanche'], 1,
    'Dans ces conditions. EN: consequently.'),
  ctl('Dès lors que', '« Dès lors que » est aujourd’hui surtout...', ['causal', 'concessif'], 0,
    'Du moment que, puisque ; avec l’indicatif. EN: mostly causal.'),
], ['deslors']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Dès lors',
    opener: {
      line: 'Depuis quand, ou pourquoi : le même petit mot dit les deux, et le contexte tranche. EN: Since when, or why: the same little word says both, and the context decides.',
      imageRef: 'lessons/reformuler-conclure/act08.jpg',
    },
    sections: [],
    milestone: 'Tu lis dès lors dans le temps ou dans la logique, tu construis dès lors que avec l’indicatif, et tu choisis par conséquent quand il faut être clair. EN: You read dès lors in time or logic and build dès lors que correctly.',
    estScreens: 34, restPoints: ['a8-sens'],
  },
  sections: [A8_HALLES, A8_SENS, A8_TRAM, A8_TRIER, A8_VERSION, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — ACCEPTER LE PRIX, TRANCHER
 *
 *  TEXT: an association's board minutes. MOVE: name the cost you accept
 *  (quitte à + infinitive; the spoken « Quitte à…, autant… ») and set a
 *  fixed point whatever happens (en tout état de cause, soutenu).
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_CR: Sec<'reading'> = {
  type: 'reading', id: 'a9-cr', layer: 'core', questionsInModal: true,
  title: 'La fête des récoltes', frSub: 'Le compte rendu d’un conseil d’administration',
  text: CR_TEXT,
  glossary: [
    { word: 'exposants', en: 'exhibitors, stallholders', note: 'Les personnes qui tiennent un stand pendant une fête ou un salon.' },
  ],
  questions: [
    { q: 'Devine le sens : « La séance est levée ». Que veut dire « lever la séance » ?', a: 'Déclarer la réunion terminée.' },
    { q: 'Quel prix la première option accepte-t-elle ?', a: 'Réduire le programme à une seule journée : « quitte à réduire le programme ».' },
    { q: 'Et la deuxième option ?', a: 'Décevoir les exposants fidèles, qui réservent leur date un an à l’avance.' },
    { q: 'Que veut dire la bénévole avec « Quitte à payer davantage, autant le faire pour une fête complète » ?', a: 'Puisqu’il faudra payer plus de toute façon, mieux vaut que ce soit pour une fête de deux jours.' },
    { q: 'Que pose « en tout état de cause », deux fois ?', a: 'Deux points fermes, quoi qu’il arrive : aucun bénévole seul à un stand, et une date annoncée avant fin juin.' },
    { q: 'Quelle option le conseil adopte-t-il, et par combien de voix ?', a: 'La deuxième, le report au printemps, par cinq voix contre deux.' },
  ],
  audio: REC('rec-c1-07-cr'), say: REFRAME, terms: ['quitte', 'geste'],
};

const A9_PRIX: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-prix', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-raisonner',
  title: 'Le prix, puis le point ferme', frSub: 'Quitte à, en tout état de cause',
  hint: 'Quatre cartes. Cherche ce que chaque phrase accepte, et ce qui ne bouge pas.',
  audio: REC('rec-c1-07-prix'), say: REFRAME, terms: ['quitte'],
  cards: [
    { head: 'Le prix accepté', label: 'quitte à + infinitif', fr: src(E(2688)).fr, sub: rsOf(E(2688)),
      body: 'Tu dis ce que tu acceptes de perdre pour obtenir mieux : décevoir quelques fidèles, pour une fête réussie. EN: the cost you accept for a better result.' },
    { head: 'À l’oral', label: 'quitte à…, autant…', fr: src(E(2689)).fr, sub: rsOf(E(2689)),
      body: 'Un tour très courant en conversation : puisqu’il faut le faire, faisons-le bien. EN: since we have to, let us do it properly.' },
    { head: 'Le point ferme', label: 'en tout état de cause, soutenu', fr: src(E(2690)).fr, sub: rsOf(E(2690)),
      body: '« Quoi qu’il en soit » : le reste peut bouger, ce point-là non. Proche de « en tout cas », en plus soutenu. EN: whatever happens, this point holds.' },
    { head: 'Ce qui ne bouge pas', label: 'en tout état de cause', fr: src(E(2694)).fr, sub: rsOf(E(2694)),
      body: 'D’abord ce qui peut changer, puis le point fixe. L’ordre fait comprendre le geste. EN: first what may change, then what will not.' },
  ],
};

const A9_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a9-dictee', layer: 'core',
  title: 'Écris le prix et le point ferme',
  itemIds: [...dicteeFor(9)],
  audio: AUDIO, say: REFRAME, terms: ['quitte'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre prix mal payés',
  errors: [
    { wrong: 'Nous reportons la fête, quitte à la déception de quelques fidèles.', right: src(E(2688)).fr,
      why: 'Normal : « at the cost of » prend un nom en anglais. Quitte à prend un infinitif : quitte à décevoir. EN: quitte à takes an infinitive.' },
    { wrong: 'Nous reportons la fête, quitte à mieux la préparer.', right: 'Nous reportons la fête, afin de mieux la préparer.',
      why: 'On y entend « pour ». Mais mieux préparer n’est pas un prix, c’est un but : quitte à dit ce qu’on accepte de perdre. EN: a goal is not a cost.' },
    { wrong: 'En tous cas de cause, la date sera annoncée avant juin.', right: 'En tout état de cause, la date sera annoncée avant juin.',
      why: 'Deux locutions se croisent, « en tout cas » et « en tout état de cause ». Choisis l’une ou l’autre. EN: two expressions blended.' },
    { wrong: 'En tout état de cause, quoi qu’il en soit, aucun bénévole ne sera seul.', right: src(E(2693)).fr,
      why: 'On veut être ferme ; mais les deux disent la même chose. Un geste, un marqueur. EN: the same gesture twice.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['quitte', 'empilement'],
};

const A9_VERSION = pourTaVersion('a9-version', 'Accepter un prix, poser un point ferme', [
  grp('L’hésitation de Léa', [
    free('Mais peut-être pas tout de suite, enfin, je ne sais pas.', 'But maybe not right away, well, I do not know.', 'à l’oral'),
    free('Rouvrons la salle, quitte à le faire par étapes.', 'Let us reopen the hall, even if it means doing it in stages.', 'à l’écrit'),
  ], chk('Que fait « quitte à » dans la version écrite ?', ['Il dit le prix accepté : une réouverture progressive.', 'Il annonce un but.'], 0,
    'Léa hésitait ; quitte à transforme l’hésitation en concession assumée. EN: the hesitation becomes an accepted cost.')),
  grp('Le point ferme', [
    it(E(2694), 'le modèle'),
  ], chk('Le calendrier peut bouger, mais pas la réouverture. Tu écris :', ['« La date peut changer ; en tout état de cause, la salle doit rouvrir. »', '« La date peut changer ; en tout état de cause, peut-être que la salle rouvrira. »'], 0,
    'Un point ferme ne s’affaiblit pas avec « peut-être ». EN: a fixed point is not hedged.')),
], ['quitte', 'geste']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Quitte à', '« Quitte à » se construit avec...', ['un infinitif', 'un nom', 'le subjonctif'], 0,
    'Quitte à décevoir, quitte à paraître sévère. EN: an infinitive.'),
  ctl('Le sens', '« Quitte à » annonce...', ['un but', 'un prix qu’on accepte'], 1,
    'Ce qu’on accepte de perdre pour obtenir mieux. EN: an accepted cost.'),
  ctl('En tout état de cause', '« En tout état de cause » pose...', ['un point ferme, quoi qu’il arrive', 'une hypothèse', 'un exemple'], 0,
    'Le reste peut bouger, ce point-là non. EN: a fixed point.'),
], ['quitte']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Accepter le prix',
    opener: {
      line: 'Reporter une fête, c’est décevoir quelqu’un : ici tu apprends à dire le prix que tu acceptes, puis le point qui ne bouge pas. EN: Postponing a festival disappoints someone: here you learn to name the cost you accept, then the point that will not move.',
      imageRef: 'lessons/reformuler-conclure/act09.jpg',
    },
    sections: [],
    milestone: 'Tu dis le prix accepté avec quitte à et un infinitif, et tu poses un point ferme avec en tout état de cause. EN: You name an accepted cost and set a fixed point.',
    estScreens: 32, restPoints: ['a9-prix'],
  },
  sections: [A9_CR, A9_PRIX, A9_DICTEE, A9_ERREURS, A9_VERSION, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — FERMER LE TEXTE
 *
 *  TEXT: the conclusion of a trial report. MOVE: three closing gestures
 *  (tout bien considéré weighs and decides, somme toute sums up and often
 *  relativises, en guise de conclusion announces a last remark), one per
 *  text, followed by a sentence that decides. en somme and en définitive
 *  are known (published B2 rows), shown as contrasts, never re-taught.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_BILAN: Sec<'reading'> = {
  type: 'reading', id: 'a10-bilan', layer: 'core', questionsInModal: true,
  title: 'Une rue pour l’école', frSub: 'La conclusion d’un rapport d’essai',
  text: BILAN_TEXT,
  glossary: [
    { word: 'ralentisseur', en: 'speed bump', note: 'Une petite bosse sur la chaussée qui oblige les voitures à ralentir.' },
  ],
  questions: [
    { q: 'Devine le sens : « le report de la circulation ». Que veut dire « report » ici ?', a: 'Le déplacement des voitures vers d’autres rues quand une rue est fermée.' },
    { q: 'Que fait « En guise de conclusion » au début du texte ?', a: 'Il annonce la dernière remarque du rapport : revenir sur la question qui a le plus divisé.' },
    { q: 'Dans « il est, somme toute, limité », que fait « somme toute » ?', a: 'Il fait le compte et ramène le désagrément à sa juste mesure : réel, mais limité.' },
    { q: 'Quelle phrase rend le verdict, et avec quel marqueur ?', a: '« Tout bien considéré, les avantages l’emportent nettement sur les inconvénients. »' },
    { q: 'Que suit immédiatement le verdict ?', a: 'Des recommandations précises : rendre la rue permanente, ajouter deux places de livraison, revoir les feux.' },
    { q: 'La dernière phrase ajoute-t-elle un argument nouveau ?', a: 'Non : elle relativise (« ne règle pas tout ») et donne le sens de la mesure, sans ouvrir de nouveau sujet.' },
  ],
  audio: REC('rec-c1-07-bilan'), say: REFRAME, terms: ['cloture', 'geste'],
};

const A10_FERMER: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-fermer', layer: 'core', sheetId: 'sheet-conclure',
  title: 'Six façons de fermer', frSub: 'Trois nouvelles, deux connues, une contestée',
  cols: ['Marqueur', 'Geste', 'Statut'],
  rows: [
    { cells: ['tout bien considéré', 'un verdict après examen', 'C1, nouveau'],
      say: src(E(2699)).fr,
      detail: { title: 'tout bien considéré', body: 'Tu as pesé le pour et le contre ; tu décides. Suivi d’une phrase nette. EN: a verdict after weighing.', say: src(E(2706)).fr } },
    { cells: ['somme toute', 'le compte, qui relativise', 'C1, nouveau'],
      say: src(E(2700)).fr,
      detail: { title: 'somme toute', body: 'Tu fais le compte, souvent pour ramener les choses à leur juste mesure. En tête ou au milieu de la phrase. EN: summing up, often to relativise.', say: src(E(2703)).fr } },
    { cells: ['en guise de conclusion', 'l’annonce d’une dernière remarque', 'C1, soutenu'],
      say: src(E(2701)).fr,
      detail: { title: 'en guise de conclusion', body: '« À la manière d’une conclusion » : tu annonces la remarque qui ferme le texte. EN: announcing a closing remark.', say: src(E(2701)).fr } },
    { cells: ['en somme', 'résume', 'B2, déjà vu'],
      say: 'En somme, l’essai a réussi.',
      detail: { title: 'en somme', body: 'Tu le connais : il résume ce qui précède. EN: you know it; it sums up.', say: 'En somme, les riverains sont satisfaits.' } },
    { cells: ['en définitive', 'tranche, une fois tout examiné', 'B2, déjà vu'],
      say: 'En définitive, la ville a choisi de rénover.',
      detail: { title: 'en définitive', body: 'Tu le connais aussi : proche de tout bien considéré, plus sec. EN: you know it; close to tout bien considéré.', say: 'En définitive, la rue restera fermée aux heures d’école.' } },
    { cells: ['au final', 'à l’oral seulement', 'contesté'],
      say: 'Finalement, nous avons conservé l’ancien logo.',
      detail: { title: 'au final', body: 'Courant à l’oral, critiqué à l’écrit soutenu. Dans ton texte, écris finalement ou en définitive. L’acte 11 donne les verdicts. EN: write finalement instead.', say: 'Finalement, la fête aura lieu au printemps.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cloture'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-choisir', layer: 'core', size: 'lg',
  title: 'Verdict, compte ou annonce', frSub: 'De nouvelles clôtures',
  groups: [
    grp('Trois clôtures', [
      it('fr.c1.discours-dexamen.005', 'un verdict'),
      it(E(2703), 'un compte qui relativise'),
      it('fr.c1.discours-dexamen.051', 'une annonce'),
    ], chk('« Le retard, somme toute, n’a duré qu’une semaine. » Que fait « somme toute » ?', ['Il ramène le retard à sa juste mesure.', 'Il annonce une dernière remarque.'], 0,
      'Il fait le compte : une semaine, ce n’est pas grand-chose. EN: it puts the delay in proportion.')),
    ctl('Le verdict', 'Quel marqueur veut dire « après avoir pesé le pour et le contre » ?', ['tout bien considéré', 'en guise de conclusion', 'par ailleurs'], 0,
      'Tout bien considéré : tout a été examiné. En guise de conclusion annonce seulement une remarque. EN: weighed and decided.'),
    ctl('L’annonce', '« En guise de conclusion » veut dire...', ['à la manière d’une conclusion', 'tout bien pesé', 'en revanche'], 0,
      'Il annonce la remarque qui ferme le texte. EN: by way of conclusion.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cloture'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true,
  title: 'Six fins qui ne ferment pas',
  rule: {
    title: 'Un texte ne se ferme qu’une fois',
    body: 'Un seul marqueur de clôture, suivi d’une phrase qui décide. Pas d’empilement, pas d’argument nouveau, pas d’annonce sans remarque. EN: One closing marker, then a sentence that decides; no stacking, no new argument.',
  },
  cards: [
    { promptLabel: 'quatre clôtures', promptSound: src(E(2705)).fr,
      fr: 'Tout bien considéré, l’essai est réussi.', ipa: '/tu bjɛ̃ kɔ̃.si.de.ʁe le.sɛ ɛ ʁe.y.si/',
      tip: 'Un seul geste, et une décision. EN: one gesture, one decision.' },
    { promptLabel: 'deux annonces', promptSound: 'En guise de conclusion, pour conclure, je reviens sur une question.',
      fr: src(E(2701)).fr, ipa: ipaOf(E(2701)),
      tip: 'Les deux annoncent la fin : un seul suffit. EN: both announce the end.' },
    { promptLabel: 'une clôture vide', promptSound: 'Tout bien considéré, voilà, c’est tout.',
      fr: src(E(2699)).fr, ipa: ipaOf(E(2699)),
      tip: 'Après le verdict annoncé, il faut le verdict. EN: the announced verdict must follow.' },
    { promptLabel: 'un argument nouveau', promptSound: 'Tout bien considéré, il faudrait aussi parler du bruit, que nous n’avons pas étudié.',
      fr: 'Tout bien considéré, les avantages l’emportent sur les inconvénients.', ipa: '/tu bjɛ̃ kɔ̃.si.de.ʁe le.za.vɑ̃.taʒ lɑ̃.pɔʁt syʁ le.zɛ̃.kɔ̃.ve.njɑ̃/',
      tip: 'La clôture n’ouvre pas un sujet nouveau. EN: a conclusion opens no new topic.' },
    { promptLabel: 'deux comptes', promptSound: 'Somme toute, en somme, l’essai a coûté peu.',
      fr: src(E(2700)).fr, ipa: ipaOf(E(2700)),
      tip: 'Somme toute et en somme font le même geste. EN: the same gesture twice.' },
    { promptLabel: 'une annonce sans remarque', promptSound: 'En guise de conclusion, je ne sais pas trop.',
      fr: src(E(2701)).fr, ipa: ipaOf(E(2701)),
      tip: 'Une annonce doit être suivie de la remarque promise. EN: the announcement needs its remark.' },
  ],
  drill: [
    { promptSay: '… , les avantages l’emportent sur les inconvénients.', opts: ['Tout bien considéré', 'Bref, en somme, au final'], correct: 0 },
    { promptSay: 'Le retard, … , n’a duré qu’une semaine.', opts: ['somme toute', 'en guise de conclusion'], correct: 0 },
    { promptSay: '… , je voudrais revenir sur une question.', opts: ['En guise de conclusion', 'Somme toute'], correct: 0 },
    { promptSay: 'Ta conclusion contient…', opts: ['un seul marqueur de clôture', 'trois marqueurs, pour insister'], correct: 0 },
    { promptSay: 'Après « tout bien considéré », tu écris…', opts: ['une phrase qui décide', 'un argument nouveau'], correct: 0 },
    { promptSay: 'L’essai a, … , coûté moins cher qu’un ralentisseur.', opts: ['somme toute', 'en guise de conclusion'], correct: 0 },
    { promptSay: 'À l’écrit, à la place de « au final », tu écris…', opts: ['finalement', 'au final, entre guillemets'], correct: 0 },
    { promptSay: '« En guise de conclusion » est…', opts: ['soutenu', 'familier'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un texte ne se ferme qu’une fois' },
    { label: 'Six cartes', kind: 'cards', title: 'Les fins qui ne ferment pas' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-07-piege-cloture'), say: REFRAME, terms: ['cloture', 'empilement'],
};

const A10_VERSION = pourTaVersion('a10-version', 'La dernière phrase de Léa', [
  grp('Deux fins', [
    free('Bref, en somme, au final, je pense qu’il faudrait faire quelque chose.', 'Anyway, in short, in the end, I think we should do something.', 'à l’oral, empilé'),
    it(E(2731), 'à l’écrit, un seul geste'),
  ], chk('Que gagne la version écrite ?', ['un seul marqueur, suivi d’une décision', 'plus de marqueurs, donc plus de force'], 0,
    'Tout bien considéré annonce un verdict, et le verdict suit : rouvrir, par étapes. EN: one marker, then the decision.')),
  grp('Choisir la nuance', [
    it(E(2700), 'somme toute'),
  ], chk('Tu veux relativiser le coût dans ta conclusion. Tu écris :', ['« Le coût, somme toute, reste modeste. »', '« Le coût, en guise de conclusion, reste modeste. »'], 0,
    'Somme toute fait le compte et relativise ; en guise de conclusion annonce une remarque, il ne se glisse pas au milieu. EN: somme toute relativises.')),
], ['cloture', 'geste']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le verdict', '« Tout bien considéré » annonce...', ['un verdict après examen', 'un exemple', 'une opposition'], 0,
    'Tu as pesé, tu décides. EN: a verdict.'),
  ctl('Le compte', '« Somme toute » sert souvent à...', ['ouvrir un sujet', 'relativiser'], 1,
    'Il ramène les choses à leur juste mesure. EN: to put things in proportion.'),
  ctl('Combien', 'Combien de marqueurs de clôture dans un texte ?', ['un seul', 'deux au moins', 'autant que de paragraphes'], 0,
    'Un texte ne se ferme qu’une fois. EN: one.'),
], ['cloture', 'empilement']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Fermer le texte',
    opener: {
      line: 'Peser, faire le compte ou annoncer la fin : ici tu choisis un seul geste pour fermer ton texte. EN: Weigh, sum up or announce the end: here you choose one gesture to close your text.',
      imageRef: 'lessons/reformuler-conclure/act10.jpg',
    },
    sections: [],
    milestone: 'Tu fermes un texte une seule fois, avec tout bien considéré, somme toute ou en guise de conclusion, et une phrase qui décide. EN: You close a text once, with the right gesture and a decision.',
    estScreens: 34, restPoints: ['a10-fermer'],
  },
  sections: [A10_BILAN, A10_FERMER, A10_CHOISIR, A10_PIEGE, A10_VERSION, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LES MARQUEURS CONTESTÉS
 *
 *  TEXT: one podcast passage said, then written. MOVE (decision 17,
 *  « recognise, don't write », b2.16's pattern): du coup, au final, suite
 *  à, en termes de, voire même, par contre, au niveau de are ordinary in
 *  speech and never taught as errors there; in careful writing the learner
 *  chooses the form nobody disputes. Each Académie and OQLF verdict is
 *  quoted exactly (corpus §A.7); where they differ, the lesson says so.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_PODCAST: Sec<'reading'> = {
  type: 'reading', id: 'a11-podcast', layer: 'core', questionsInModal: true,
  title: 'Dit, puis écrit', frSub: 'Le même passage, deux versions',
  text: PODCAST_TEXT,
  glossary: [
    { word: 'fournées', en: 'batches (of bread)', note: 'Tout ce qu’on cuit en une fois dans le four.' },
  ],
  questions: [
    { q: 'Devine le sens : « une équipe de nuit ». Que fait cette équipe ?', a: 'Elle travaille la nuit, sans doute pour que le pain soit prêt à l’ouverture.' },
    { q: 'Combien de marqueurs contestés relèves-tu dans la version orale ?', a: 'Huit emplois de sept marqueurs : du coup (deux fois), au niveau de, par contre, en termes de, voire même, suite à, au final.' },
    { q: 'Que devient « au niveau de la clientèle » à l’écrit ?', a: 'La phrase change de sujet : « Sa clientèle se composait d’abord surtout d’habitants du quartier ».' },
    { q: 'Que devient « Par contre » ?', a: '« en revanche », placé à l’intérieur de la phrase.' },
    { q: 'Le sens a-t-il changé entre les deux versions ?', a: 'Non : « Rien n’a été retiré ni ajouté : seule la forme a changé. »' },
    { q: 'Noah parle-t-il mal ?', a: 'Non : c’est un entretien oral, et ces marqueurs sont du français courant quand on parle. C’est à l’écrit soutenu qu’ils se remarquent.' },
  ],
  audio: REC('rec-c1-07-podcast'), say: REFRAME, terms: ['conteste', 'geste'],
};

const A11_SEPT: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a11-sept', layer: 'core', sheetId: 'sheet-normes',
  title: 'À l’oral, à l’écrit', frSub: 'Six marqueurs et leur forme sûre',
  cols: ['Marqueur', 'À l’oral', 'Dans ton texte écrit'],
  rows: [
    { cells: ['du coup', 'courant', 'donc, de ce fait'],
      say: 'On a raté le dernier métro, du coup on est rentrés à pied.',
      detail: { title: 'du coup', body: 'L’Académie : « On évitera également de faire de du coup un simple adverbe de discours sans sens particulier. » Nous n’avons trouvé aucune fiche de l’OQLF sur ce mot. EN: the Académie warns against it as a filler; no OQLF entry was found.', say: 'Nous avons manqué le dernier métro ; nous sommes donc rentrés à pied.' } },
    { cells: ['au final', 'courant', 'finalement'],
      say: src(E(2707)).fr,
      detail: { title: 'au final', body: 'L’Académie : une construction « grammaticalement fautive ». L’OQLF : « déconseillé en langue standard ou soutenue, notamment à l’écrit », mais à l’oral, il « passe le plus souvent inaperçu ». EN: both advise against it in writing.', say: src(E(2712)).fr } },
    { cells: ['suite à', 'courrier administratif', 'à la suite de'],
      say: src(E(2708)).fr,
      detail: { title: 'suite à', body: 'L’Académie : « à réserver au domaine de la langue commerciale et administrative ». L’OQLF l’accepte en correspondance, mais « pour exprimer la cause ou la temporalité, suite à est déconseillée ». EN: fine in a business letter, not for a cause.', say: src(E(2713)).fr } },
    { cells: ['en termes de', 'courant', 'en matière de'],
      say: src(E(2709)).fr,
      detail: { title: 'en termes de', body: 'L’Académie : au sens de « en matière de », « un anglicisme à proscrire ». L’OQLF : « On ne saurait donc le déconseiller, du moins dans la langue courante ». Les deux divergent. EN: the two authorities disagree.', say: src(E(2714)).fr } },
    { cells: ['voire même', 'courant', 'voire'],
      say: src(E(2710)).fr,
      detail: { title: 'voire même', body: 'Le dictionnaire de l’Académie l’enregistre : « Renforcé par Même ». L’OQLF y voit « un pléonasme », à remplacer surtout en langue soignée. Les deux divergent. EN: recorded by the Académie, a pleonasm for the OQLF.', say: src(E(2715)).fr } },
    { cells: ['au niveau de', 'courant', 'en ce qui concerne'],
      say: src(E(2711)).fr,
      detail: { title: 'au niveau de', body: 'L’Académie le réserve à la position (« à la hauteur de ») et refuse « au niveau du salaire ». L’OQLF : « parfois surutilisée, là où en ce qui concerne ou sur le plan de conviendrait mieux ». EN: both prefer en ce qui concerne.', say: src(E(2716)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['conteste'],
};

const A11_AVIS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a11-avis', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-normes',
  title: 'Quand les autorités divergent', frSub: 'Paris et Québec ne disent pas tout pareil',
  hint: 'Quatre cartes. Note qui dit quoi, puis la forme que personne ne conteste.',
  audio: REC('rec-c1-07-avis'), say: REFRAME, terms: ['conteste'],
  cards: [
    { head: 'En termes de', label: 'Académie et OQLF divergent', fr: src(E(2714)).fr, sub: rsOf(E(2714)),
      body: 'L’Académie : « un anglicisme à proscrire ». L’OQLF : « On ne saurait donc le déconseiller, du moins dans la langue courante ». À l’écrit soutenu, « en matière de » met tout le monde d’accord. EN: they disagree; en matière de is safe.' },
    { head: 'Voire même', label: 'Académie et OQLF divergent', fr: src(E(2715)).fr, sub: rsOf(E(2715)),
      body: 'L’Académie l’enregistre : « Renforcé par Même ». L’OQLF y voit « un pléonasme qu’il convient de remplacer », surtout en langue soignée. « Voire » seul n’est contesté par personne. EN: voire alone is safe.' },
    { head: 'Par contre', label: 'Académie et OQLF divergent', fr: src(E(2717)).fr, sub: rsOf(E(2717)),
      body: `L’Académie : « Elle ne peut donc être considérée comme fautive », mais l’usage est de la déconseiller quand un autre adverbe convient. L’OQLF : « tout à fait correct ». ${Cap(CONCESSION2_REF)} disait déjà : surtout oral. EN: not wrong; en revanche where it fits.` },
    { head: 'Suite à', label: 'selon le texte', fr: src(E(2713)).fr, sub: rsOf(E(2713)),
      body: 'Dans un courrier administratif, les deux l’admettent. Pour dire une cause, l’OQLF le déconseille et l’Académie le réserve au courrier : écris « à la suite de ». EN: fine in letters; for a cause, à la suite de.' },
  ],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-trier', layer: 'core', size: 'lg',
  title: 'Reconnaître, puis choisir', frSub: 'De nouvelles situations',
  groups: [
    grp('Dit, puis écrit', [
      it(E(2707), 'à l’oral'),
      it(E(2712), 'à l’écrit'),
    ], chk('« Au final, on a gardé l’ancien logo », dit un collègue en réunion. C’est...', ['du français oral courant, pas une faute', 'une faute à lui signaler'], 0,
      'À l’oral, il passe inaperçu, dit l’OQLF lui-même. C’est dans ton texte écrit soutenu que tu choisis finalement. EN: ordinary in speech.')),
    ctl('Le courrier', 'Dans quel texte « Suite à votre demande » est-il admis par l’Académie et par l’OQLF ?', ['une lettre administrative', 'un essai littéraire', 'une dissertation'], 0,
      'Les deux l’admettent dans la correspondance commerciale ou administrative. EN: in business and administrative letters.'),
    ctl('Le pléonasme', 'Pour l’OQLF, « voire même » est...', ['un pléonasme à éviter en langue soignée', 'une faute dans tous les registres', 'la forme recommandée'], 0,
      '« Surtout dans la langue soignée », précise l’OQLF ; l’Académie, elle, l’enregistre. EN: a pleonasm in careful French, for the OQLF.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['conteste'],
};

const A11_VERSION = pourTaVersion('a11-version', 'Les marqueurs de Léa, à l’écrit', [
  grp('Une phrase de Léa', [
    free('Au final, c’est quand même dommage, voire même un peu triste.', 'In the end, it is a real shame, or even a bit sad.', 'à l’oral'),
    free('Cette fermeture est regrettable, voire triste pour le quartier.', 'This closure is regrettable, even sad for the neighbourhood.', 'à l’écrit'),
  ], chk('Qu’a changé la version écrite ?', ['« au final » disparaît et « voire même » devient « voire »', 'rien d’important'], 0,
    'Le sens reste, la forme devient incontestable à l’écrit. EN: same meaning, a form nobody disputes.')),
  grp('Suite à la fermeture', [
    it(E(2713), 'le modèle'),
  ], chk('Léa dit « Suite à la fermeture, les associations se sont dispersées ». Dans ton texte écrit, tu mets :', ['« À la suite de la fermeture, les associations se sont dispersées. »', '« Suite à la fermeture, les associations se sont dispersées. »'], 0,
    'Ici, suite à dit une cause : l’OQLF le déconseille, l’Académie le réserve au courrier. À la suite de met tout le monde d’accord. EN: for a cause, à la suite de.')),
], ['conteste', 'geste']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('À l’oral', 'À l’oral, « du coup » et « au final » sont...', ['du français courant', 'des fautes à corriger'], 0,
    'On les reconnaît sans les corriger chez les autres. EN: ordinary speech.'),
  ctl('À l’écrit', 'Dans ton texte écrit soutenu, tu choisis...', ['la forme la plus courte', 'la forme que personne ne conteste'], 1,
    'Finalement, à la suite de, en matière de, voire, en ce qui concerne. EN: the undisputed form.'),
  ctl('Les autorités', 'L’Académie et l’OQLF...', ['ne disent pas toujours la même chose', 'disent toujours la même chose'], 0,
    'En termes de, voire même, par contre : elles divergent. EN: they sometimes disagree.'),
], ['conteste']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Les marqueurs contestés',
    opener: {
      line: 'Du coup, au final, par contre : tu les entends partout, et ce n’est pas faux ; ici tu apprends ce qu’on écrit à leur place. EN: You hear them everywhere and they are not wrong; here you learn what to write instead.',
      imageRef: 'lessons/reformuler-conclure/act11.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais les sept marqueurs contestés à l’oral, tu sais où l’Académie et l’OQLF divergent, et tu écris la forme sûre. EN: You recognise the seven contested markers and write the safe form.',
    estScreens: 34, restPoints: ['a11-sept'],
  },
  sections: [A11_PODCAST, A11_SEPT, A11_AVIS, A11_TRIER, A11_VERSION, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA VERSION ÉCRITE
 *
 *  The production act. A model rewrite (another speaker, another topic)
 *  shows every gesture of the lesson; the plan, a role play with Léa, then
 *  the graded task: Léa's spoken intervention rewritten for the
 *  neighbourhood bulletin. The brief prints her text again (no `source`
 *  field on `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a12-modele', layer: 'core', questionsInModal: true,
  title: 'Un modèle de version écrite', frSub: 'Le jardin partagé du square Vauban',
  text: MODELE_TEXT,
  glossary: [
    { word: 'parcelles', en: 'plots', note: 'Les petits morceaux de terrain que chaque jardinier cultive.' },
  ],
  questions: [
    { q: 'Devine le sens : « la pelouse inutilisée qui le borde au nord ». Que veut dire « border » ?', a: 'Être juste à côté, le long du bord.' },
    { q: 'Comment la proposition est-elle resserrée dès la première phrase ?', a: '« et plus exactement qu’il occupe aussi la pelouse inutilisée qui le borde au nord » : on sait exactement ce qui est demandé.' },
    { q: 'Quel mot est défini, et avec quel marqueur ?', a: '« un service » : « j’entends par là un lieu qui rend au quartier plus qu’il ne lui coûte ».' },
    { q: 'Relève deux ajouts et le geste de chacun.', a: '« d’ailleurs » glisse la demande de l’école ; « sans compter que » ajoute l’épicerie solidaire ; « qui plus est » ajoute l’engagement des jardiniers, l’argument qui pèse.' },
    { q: 'Où est le raisonnement a fortiori ?', a: '« Si un jardin de trente parcelles anime déjà le square, un jardin de cinquante le fera a fortiori. »' },
    { q: 'Combien de marqueurs de clôture ? Que suit-il ?', a: 'Un seul, « Tout bien considéré », suivi d’une proposition précise : l’étudier dès la prochaine séance.' },
  ],
  audio: REC('rec-c1-07-modele'), say: REFRAME, terms: ['geste', 'cloture'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-conclure',
  title: 'Cinq étapes pour ta version écrite',
  steps: [
    '1. Ouvre sur la proposition de Léa, et resserre-la tout de suite. EN: open on the proposal, then narrow it.',
    '2. Définis le mot vague (« la culture ») et nomme le cas réel. EN: define the vague word, name the case.',
    '3. Ajoute ses arguments, un marqueur par geste, le plus lourd en dernier. EN: add her points, heaviest last.',
    '4. Remplace chaque marqueur contesté par sa forme sûre. N’invente aucun fait. EN: replace contested markers; invent nothing.',
    '5. Ferme une seule fois, puis propose. EN: close once, then propose.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste', 'cloture'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu réécriras de l’oral pour l’écrit',
  cases: [
    { situation: 'Le compte rendu d’une réunion', fr: src(E(2726)).fr, en: src(E(2726)).en },
    { situation: 'Une intervention publiée dans un bulletin', fr: src(E(2729)).fr, en: src(E(2729)).en },
    { situation: 'À l’examen, une production écrite argumentée', fr: src(E(2725)).fr, en: src(E(2725)).en },
    { situation: 'Un courriel tiré de notes prises au téléphone', fr: src(E(2730)).fr, en: src(E(2730)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste', 'conteste'],
};

/** USE IT, out loud. Every French string here uses the typographic ’ and
 *  no seed row is quoted (scenario.logic: no mixed apostrophes). */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Léa relit ta version',
  setting: 'Le lendemain du conseil, chez Léa. Elle lit la version écrite que tu prépares pour le bulletin du quartier et te pose ses questions.',
  turns: [
    {
      ai: 'Tu as remplacé mon « au final ». Il était faux ?', en: 'You replaced my « au final ». Was it wrong?',
      user: src(E(2721)).fr, userEn: 'In writing, I would put « finalement » instead of « au final ». (A contested marker, recognised, replaced in writing, not called wrong.)',
      alts: [
        { fr: 'Pas faux à l’oral ; mais dans un bulletin, « finalement » ne gêne personne.', en: 'Not wrong in speech; but in a bulletin, « finalement » bothers nobody.' },
        { fr: 'À l’oral, il passe ; à l’écrit, je choisis une forme que personne ne conteste.', en: 'In speech it passes; in writing I choose a form nobody disputes.' },
      ],
    },
    {
      ai: 'Et « la culture, tout ça », tu l’as gardé ?', en: 'And « culture, all that », did you keep it?',
      user: src(E(2722)).fr, userEn: 'The word « culture » is vague: say what you mean by it. (j’entends par là.)',
      alts: [
        { fr: 'J’ai écrit : « la culture, et j’entends par là un lieu où l’on joue et où l’on répète ».', en: 'I wrote: « culture, and by that I mean a place where people perform and rehearse ».' },
        { fr: 'J’ai resserré : plus exactement, les répétitions, les fêtes des associations et les soirées des anciens.', en: 'I narrowed it: more precisely, rehearsals, the associations’ parties and the older residents’ evenings.' },
      ],
    },
    {
      ai: 'Par où je commence, alors ?', en: 'So where do I start?',
      user: src(E(2723)).fr, userEn: 'Start with your proposal, then make it precise. (The proposal first, then plus exactement.)',
      alts: [
        { fr: src(E(2727)).fr, en: src(E(2727)).en },
        { fr: 'Ouvre sur ce que tu demandes, pas sur « alors, du coup ».', en: 'Open on what you are asking for, not on « alors, du coup ».' },
      ],
    },
    {
      ai: 'J’ai plein d’arguments. Je les mets tous à la suite ?', en: 'I have loads of arguments. Do I just list them all?',
      user: src(E(2724)).fr, userEn: 'Keep « qui plus est » for your strongest argument. (Adding by weight.)',
      alts: [
        { fr: 'Ajoute-les un par un, avec un seul marqueur à chaque fois.', en: 'Add them one by one, with one marker each time.' },
        { fr: src(E(2728)).fr, en: src(E(2728)).en },
      ],
    },
    {
      ai: 'Et ma fin, « bref, en somme, au final » ?', en: 'And my ending, « bref, en somme, au final »?',
      user: src(E(2725)).fr, userEn: 'One conclusion is enough, if it decides. (One closing gesture.)',
      alts: [
        { fr: src(E(2731)).fr, en: src(E(2731)).en },
        { fr: 'Garde un seul geste, tout bien considéré, puis ta proposition.', en: 'Keep one gesture, tout bien considéré, then your proposal.' },
      ],
    },
    {
      ai: 'Tu as ajouté des chiffres pour que ce soit plus convaincant ?', en: 'Did you add figures to make it more convincing?',
      user: src(E(2730)).fr, userEn: 'I do not invent figures: I make the text’s own figures precise. (The content stays Léa’s.)',
      alts: [
        { fr: 'Non : je reprends les trois ans de fermeture et la moitié du budget, c’est tout.', en: 'No: I use the three years of closure and half the budget, that is all.' },
        { fr: src(E(2729)).fr, en: src(E(2729)).en },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste', 'conteste'],
};

/** THE GRADED TASK: a C1 rewrite of a spoken intervention for print,
 *  graded on fidelity, reframing, addition and reasoning, closure,
 *  register, and the precision of the language. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'La version écrite de Léa', frSub: 'Mission écrite',
  brief: `Le bulletin du quartier des Tanneurs publiera l’intervention de Léa Marchand sur la salle des fêtes. Elle te demande d’en écrire la version écrite, à la première personne : même fond, même proposition, mais un texte fait pour être lu. Voici sa transcription. ${LEA_TEXT}`,
  briefEn: 'The Tanneurs neighbourhood bulletin will publish Léa Marchand’s intervention on the community hall. She asks you to write its written version, in the first person: same content, same proposal, but a text made to be read. Her transcript is printed here so you can write with it in front of you.',
  produce: 'Écris la version écrite en 250 à 400 mots : précise au moins deux affirmations vagues, ajoute ses arguments avec des marqueurs choisis, ferme une seule fois sur une proposition, remplace tout marqueur contesté et n’invente aucun fait.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'fond', label: 'Le fond de Léa, fidèle', maxPoints: 3, descriptors: [
        '3 : Tous les faits de Léa sont là (trois ans de fermeture, associations dispersées, la moitié du budget par une subvention régionale, les jeunes musiciens, les anciens) et aucun fait n’est inventé.',
        '2 : Un fait manque, ou un détail est ajouté sans être présenté comme une proposition.',
        '1 : Plusieurs faits manquent ou sont inventés (chiffres, dates, noms).',
      ] },
      { key: 'reformuler', label: 'Reformuler et préciser', maxPoints: 4, descriptors: [
        '4 : Au moins deux affirmations vagues sont précisées avec le marqueur juste (ou plutôt, plus exactement, pour mieux dire, j’entends par là, en l’occurrence), dont « la culture, tout ça ».',
        '3 : Deux précisions, dont une avec un marqueur mal choisi (en l’occurrence pour un exemple).',
        '2 : Une seule précision, ou des reformulations qui redisent la même chose.',
        '1 : Aucune précision : les mots vagues de l’oral restent.',
      ] },
      { key: 'ajouter', label: 'Ajouter et raisonner', maxPoints: 3, descriptors: [
        '3 : Les arguments sont ajoutés un par un, chacun avec son geste (qui plus est pour le plus lourd, sans compter que + indicatif, d’ailleurs, a fortiori dans le bon sens, quitte à + infinitif).',
        '2 : Des ajouts justes mais tous avec le même marqueur, ou un marqueur mal construit.',
        '1 : Les arguments sont juxtaposés, ou un ajout est en fait une opposition.',
      ] },
      { key: 'conclure', label: 'Une seule clôture qui décide', maxPoints: 3, descriptors: [
        '3 : Un seul marqueur de clôture (tout bien considéré, somme toute, en guise de conclusion), suivi d’une proposition nette, sans argument nouveau.',
        '2 : Une clôture juste mais suivie d’une proposition floue, ou deux clôtures.',
        '1 : Des clôtures empilées, ou pas de proposition.',
      ] },
      { key: 'registre', label: 'Le registre écrit', maxPoints: 4, descriptors: [
        '4 : Aucun marqueur contesté (du coup, au final, suite à pour une cause, en termes de, voire même, au niveau de) et aucun tic d’oral (en fait, je veux dire, voilà) ; le ton est celui d’un bulletin, courant à soutenu.',
        '3 : Un seul marqueur contesté ou tic d’oral resté.',
        '2 : Deux ou trois restés, ou un registre qui change en cours de texte.',
        '1 : Le texte reste une transcription orale.',
      ] },
      { key: 'langue', label: 'Une langue précise', maxPoints: 3, descriptors: [
        '3 : Un vocabulaire précis et varié, des phrases complexes maîtrisées, les modes justes (indicatif après sans compter que et dès lors que), presque aucune erreur.',
        '2 : Quelques erreurs qui ne gênent pas, un vocabulaire un peu répétitif.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Je souhaite que la salle des fêtes…',
    '…, et plus exactement…',
    'Quand je parle de culture, j’entends par là…',
    'À vrai dire,',
    '…, sans compter que…',
    'Qui plus est,',
    'Tout bien considéré,',
    'Je propose donc que…',
  ],
  modelAnswer: 'Je souhaite que la salle des fêtes de la rue des Tanneurs rouvre, et plus exactement qu’elle rouvre par étapes, dès que la rénovation le permettra. Fermée depuis trois ans, elle manque au quartier. On pourrait croire que ce manque est surtout culturel ; à vrai dire, il est plus large. Quand je parle de culture, j’entends par là un lieu où l’on joue, où l’on répète et où l’on se retrouve sans rien consommer. Depuis la fermeture, ce lieu n’existe plus. Dès lors, les associations se sont dispersées, sans compter que les habitants se voient beaucoup moins. Les besoins sont précis. La salle rendrait un lieu de répétition aux jeunes musiciens, qui n’en ont aucun ; qui plus est, elle permettrait aux anciens, qui ne sortent plus le soir, de retrouver un endroit proche de chez eux. Si la salle manque aux associations, qui peuvent se réunir ailleurs, elle manque a fortiori aux anciens. Je sais que la rénovation a un coût, et que tout n’est pas réglé, loin s’en faut. Mais la moitié du budget serait déjà trouvée grâce à une subvention régionale ; la mairie avait d’ailleurs parlé elle-même d’une rénovation. La question n’est donc plus de savoir s’il faut agir, mais comment. Rouvrons la salle, quitte à le faire progressivement : d’abord pour les répétitions et les réunions des associations, ensuite pour les fêtes. En tout état de cause, le quartier ne peut pas rester sans lieu commun. Tout bien considéré, la réouverture de la salle des fêtes est modeste, en partie financée et attendue par tous. Je propose donc que le conseil en étudie le calendrier dès sa prochaine séance.',
  modelAnswerEn: 'I would like the community hall on rue des Tanneurs to reopen, and more precisely to reopen in stages, as soon as the renovation allows. Closed for three years, it is missed by the neighbourhood. One might think this is mainly a cultural loss; to tell the truth, it is wider. When I speak of culture, by that I mean a place where people perform, rehearse and meet without having to buy anything. Since the closure, that place no longer exists. From then on, the associations have scattered, not to mention that residents see much less of each other. The needs are precise. The hall would give back a rehearsal space to young musicians, who have none; what is more, it would let older residents, who no longer go out at night, find a place close to home again. If the associations, who can meet elsewhere, miss the hall, the older residents miss it all the more. I know that the renovation has a cost, and that not everything is settled, far from it. But half the budget has reportedly already been found thanks to a regional grant; the town hall itself had in fact spoken of a renovation. So the question is no longer whether to act, but how. Let us reopen the hall, even if it means doing so gradually: first for rehearsals and association meetings, then for parties. In any case, the neighbourhood cannot remain without a common space. All things considered, reopening the community hall is a modest project, partly funded and awaited by all. I therefore propose that the council study its timetable at its next meeting.',
  watchFor: [
    { pattern: 'Contested markers kept from the transcript in the written text (du coup, au final, suite à for a cause, en termes de, voire même, au niveau de).', criterion: 'registre', feedback: 'À l’oral, ces marqueurs passent ; dans le bulletin, choisis la forme sûre : donc, finalement, à la suite de, en matière de, voire, en ce qui concerne.', ref: 'a11-sept' },
    { pattern: 'Spoken tics kept: « en fait », « je veux dire », « mais bon », « voilà, c’est tout ».', criterion: 'registre', feedback: 'Ce sont des appuis de l’oral : supprime-les, la phrase tient sans eux.', ref: 'a1-lecture' },
    { pattern: 'The stacked ending kept or rebuilt (« Bref, en somme, au final », « Pour conclure, en somme »).', criterion: 'conclure', feedback: 'Un seul geste de clôture, puis ta proposition.', ref: 'a10-piege' },
    { pattern: 'A closing marker followed by no clear proposal, or by a new argument.', criterion: 'conclure', feedback: 'Après « tout bien considéré », dis ce que tu décides : rouvrir, quand, comment.', ref: 'a10-fermer' },
    { pattern: '« la culture, tout ça » left vague, or « en l’occurrence » used to introduce one example among others.', criterion: 'reformuler', feedback: 'Définis le mot avec « j’entends par là », et garde « en l’occurrence » pour le cas réel.', ref: 'a3-sens' },
    { pattern: 'A reformulation that repeats instead of moving the idea (« autrement dit » with the same words), or plus exactement used for a replacement.', criterion: 'reformuler', feedback: 'Ou plutôt remplace, plus exactement resserre : chaque reformulation doit changer quelque chose.', ref: 'a2-trois' },
    { pattern: 'Invented facts: figures, dates, names or events not in Léa’s transcript.', criterion: 'fond', feedback: 'Tu reformules Léa, tu n’ajoutes pas de faits : reprends ses trois ans, sa subvention, ses jeunes et ses anciens.', ref: 'a6-version' },
    { pattern: '« sans compter que » or « dès lors que » followed by a subjunctive; « quitte à » followed by a noun.', criterion: 'langue', feedback: 'Sans compter que et dès lors que prennent l’indicatif ; quitte à prend l’infinitif.', ref: 'a5-piege' },
    { pattern: '« qui plus est » or « d’ailleurs » introducing a point that goes against the previous one.', criterion: 'ajouter', feedback: 'Ces marqueurs ajoutent dans le même sens ; pour un point contraire, écris pourtant ou mais.', ref: 'a6-erreurs' },
    { pattern: 'An a fortiori reasoning reversed (from the evident case to the less expected one).', criterion: 'ajouter', feedback: 'Pars du cas où l’on s’y attend le moins, puis conclus au cas évident.', ref: 'a7-sens' },
    { pattern: '« loin s’en faut » after a positive statement.', criterion: 'reformuler', feedback: 'Loin s’en faut renforce une négation : « tout n’est pas réglé, loin s’en faut ».', ref: 'a4-deux' },
    { pattern: 'Several markers stacked in one sentence (« D’ailleurs, du reste, qui plus est »).', criterion: 'registre', feedback: 'Un geste, un marqueur : garde le plus juste.', ref: 'a6-glisser' },
  ],
  graderNotes: [
    'Word count: 250 to 400, with 10% tolerance (225 to 440) before a criterion loses points for length. A title does not count.',
    'The text is Léa’s, in the first person. A learner who writes about Léa in the third person (« Léa propose que… ») loses one point under « fond », not more.',
    'Fidelity: the facts are the transcript’s (closed for three years; associations dispersed; half the budget reportedly found through a regional grant; young musicians with nowhere to rehearse; older residents who no longer go out at night; the town hall spoke of a renovation). A PROPOSAL may go beyond the transcript (a phased reopening, a date for the council to study it); a new FACT may not (a figure, a named association, a date of works). Léa’s « serait déjà trouvée » is hearsay: keep the conditional or attribute it; stating it as certain is a minor slip under « fond ».',
    'Contested markers (decision 17): mark them only as REGISTER in this written text, never as grammar errors. « Suite à » in a sentence of administrative correspondence would be admissible, but here it states a cause: count it. « Par contre » is accepted by the OQLF and not faulty for the Académie: do not penalise one occurrence; reward « en revanche » only under « registre » level 4 if the rest is clean.',
    'Accept any marker of the lesson used with the right gesture, and any correct B1-B2 connector (donc, en effet, en outre, cependant, néanmoins, toutefois). Do not demand a quota of new markers: two precisions, a few well-chosen additions and one closure reach full marks.',
    'Closure: « tout bien considéré », « somme toute », « en guise de conclusion », « en définitive », « en somme », « pour conclure » are all accepted; two in the same ending count as stacking.',
    'Dès lors in a narrative with a causal shade is correct; do not mark « dès lors » as ambiguous when the context makes both readings compatible.',
    'Do not mark persuasion or rhetorical figures as such (lesson 8 in C1), nor plan transitions between paragraphs.',
    'Accept European and Québec usage alike; « salle communautaire » and « salle paroissiale » are acceptable alternatives if used consistently.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste', 'cloture', 'conteste'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis les gestes à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-normes',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'rectifier', v: 'ou plutôt, plus exactement, pour mieux dire', say: src(E(2613)).fr,
      detail: { title: 'Remplacer, resserrer, monter d’un cran', body: 'Le premier mot reste visible ; le second le dépasse. EN: replace, narrow, upgrade.', say: src(E(2618)).fr } },
    { k: 'préciser', v: 'j’entends par là, en l’occurrence, à cet égard', say: src(E(2624)).fr,
      detail: { title: 'Ton sens, ton cas', body: 'Ta définition, le cas réel, l’aspect nommé. EN: definition, actual case, aspect.', say: src(E(2625)).fr } },
    { k: 'dire vrai', v: 'à vrai dire, loin s’en faut', say: src(E(2635)).fr,
      detail: { title: 'Le tournant franc', body: 'Ce que tu penses vraiment ; une négation renforcée. EN: candour; a strengthened negative.', say: src(E(2636)).fr } },
    { k: 'ajouter', v: 'qui plus est, sans compter que, d’ailleurs, du reste, au demeurant', say: src(E(2648)).fr,
      detail: { title: 'Le poids et l’aparté', body: 'L’argument qui pèse, ou la preuve glissée. Un seul à la fois. EN: the weightier point or the aside.', say: src(E(2658)).fr } },
    { k: 'raisonner', v: 'a fortiori, dès lors, quitte à, en tout état de cause', say: src(E(2668)).fr,
      detail: { title: 'Du cas fort, du temps à la cause, le prix', body: 'Vers le cas évident ; depuis ou donc ; le prix accepté ; le point ferme. EN: reasoning gestures.', say: src(E(2676)).fr } },
    { k: 'conclure', v: 'tout bien considéré, somme toute, en guise de conclusion', say: src(E(2699)).fr,
      detail: { title: 'Une seule fois', body: 'Un verdict, un compte ou une annonce, puis une décision. À l’écrit, aucun marqueur contesté. EN: close once; no contested marker in writing.', say: src(E(2712)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste', 'cloture', 'conteste'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne relies plus seulement des phrases : tu annonces des gestes. Tu te corriges en avançant, tu définis un mot vague et tu nommes le cas réel, tu dis ce que tu penses vraiment, tu ajoutes l’argument qui pèse ou la preuve glissée, tu raisonnes du cas le plus fort, tu lis dès lors dans le temps ou dans la logique, tu acceptes un prix et tu fermes ton texte une seule fois. Tu reconnais les marqueurs contestés de l’oral et tu sais où l’Académie et l’OQLF divergent. Le piège qui reste : l’empilement, quand tu veux trop bien faire. Avant ton prochain texte écrit, relis chaque marqueur et demande-toi quel geste il fait ; s’il n’en fait aucun, supprime-le. EN: Before your next written text, check each marker’s gesture; if it makes none, delete it.',
  stats: [
    { k: 'Rectifier', v: 'remplacer, resserrer, monter d’un cran' },
    { k: 'Ajouter', v: 'le poids, l’aparté, le cas fort' },
    { k: 'Conclure', v: 'une seule fois, puis décider' },
    { k: 'À l’écrit', v: 'la forme que personne ne conteste' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11, each
 *  targeting a distinct errorTrigger. Connector choices are written so the
 *  context forces one answer; typed answers accept the natural variants
 *  (fold() compares the WHOLE answer, so every accepted form is listed). No
 *  errorSpot ever treats a contested marker as an error: round 11 uses
 *  rewrites « pour un texte écrit soutenu » instead. The authored slots are
 *  then spread by `spreadSlots()`: no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Un marqueur ou une forme ne va pas. Écris la phrase correcte. EN: One marker or form is wrong; write the sentence correctly.';
const ES_PILE = 'Des marqueurs s’empilent. Garde un seul geste et écris la phrase. EN: Markers are stacked; keep one gesture and write the sentence.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-geste', label: 'Un marqueur, un geste', targets: ['marqueurs-empiles'],
      questions: [
        mc('Pourquoi « Du coup, au final, en fait, bref, je pense qu’il faut agir » ne marche-t-il pas dans un discours ?', ['Les marqueurs s’empilent et n’annoncent aucun geste.', 'Il contient un mot familier, interdit à l’oral.', 'La phrase est trop courte.'], 0, 'À l’oral, les mots familiers passent ; c’est l’absence de geste qui gêne. EN: no gesture, no proposal.', 'a1-scene'),
        mc('Devant un marqueur, la première question à te poser est...', ['Que fait-il de mon idée ?', 'Est-il rare ?', 'Est-il long ?'], 0, 'Préciser, ajouter, raisonner ou conclure. EN: what does it do?', 'a1-check'),
        mc('Combien de marqueurs par phrase, en règle générale ?', ['un, rarement deux', 'trois, pour insister', 'aucun, jamais'], 0, 'Deux seulement s’ils font deux gestes différents. EN: one, rarely two.', 'a1-usages'),
        tI('Complète la règle. Un mot.', 'Chaque marqueur est un … : préciser, ajouter ou conclure.', 'geste', 'Le marqueur annonce ce que tu fais de ton idée. EN: a gesture.', 'a1-scene'),
        tI('Complète. Un mot.', 'Il faut agir, et plus … rouvrir la salle dès septembre.', 'exactement', 'Plus exactement resserre « agir ». EN: more precisely.', 'a1-scene'),
        tI('Complète. Un mot.', 'À l’oral, ces petits mots passent ; à l’…, ils se voient.', 'écrit', 'Le même mot ne pèse pas pareil dit ou écrit. EN: in writing.', 'a1-usages'),
        eS('Bref, en somme, au final, il faut rouvrir la salle.', 'En somme, il faut rouvrir la salle.', 'Un seul geste de clôture suffit. EN: one closing gesture.', 'a1-scene',
          ['Bref, il faut rouvrir la salle.', 'Il faut rouvrir la salle.', 'Tout bien considéré, il faut rouvrir la salle.', 'Finalement, il faut rouvrir la salle.', 'En définitive, il faut rouvrir la salle.', 'Pour conclure, il faut rouvrir la salle.', 'Somme toute, il faut rouvrir la salle.', 'En bref, il faut rouvrir la salle.', 'En conclusion, il faut rouvrir la salle.'], ES_PILE),
        lC('Écoute. Combien de gestes cette phrase annonce-t-elle clairement ?', src(E(2601)).fr, ['un : elle resserre l’idée', 'aucun', 'quatre'], 0, 'Plus exactement : un seul geste, net. EN: one gesture.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-rectifier', label: 'Rectifier en avançant', targets: ['correction-confondue'],
      questions: [
        mc('« Elle est partie en mai, … début juin. » Le premier mot était faux.', ['ou plutôt', 'plus exactement', 'par exemple'], 0, 'Un mot faux se remplace. EN: replace a wrong word.', 'a2-trois'),
        mc('« Il est arrivé lundi, … lundi soir. » Lundi était vrai.', ['plus exactement', 'en revanche', 'par conséquent'], 0, 'Un énoncé vrai mais vague se resserre. EN: narrow a true statement.', 'a2-trois'),
        mc('« Pour mieux dire » appartient au registre...', ['soutenu', 'familier', 'administratif'], 0, 'Un tour soutenu, de conférence ou d’essai. EN: formal.', 'a2-check'),
        tI('Complète avec le marqueur qui remplace. Deux mots.', 'Le public n’a pas diminué, … il s’est déplacé.', 'ou plutôt', '« Diminué » était faux : on le remplace. EN: ou plutôt.', 'a2-conf'),
        tI('Complète avec le marqueur qui resserre. Deux mots.', 'Les étudiants viennent le soir, … entre dix-sept et vingt heures.', 'plus exactement', '« Le soir » était vrai : on le resserre. EN: plus exactement.', 'a2-conf', ['plus précisément']),
        tI('Complète. Trois mots, registre soutenu.', 'Il a été maladroit, … blessant.', 'pour mieux dire', 'On monte vers le mot le plus juste. EN: pour mieux dire.', 'a2-trois'),
        eS('Elle est partie en mai, plus exactement en juin.', 'Elle est partie en mai, ou plutôt en juin.', 'Juin ne précise pas mai : il le remplace. EN: replace, not narrow.', 'a2-piege',
          ['Elle est partie en mai, ou plutôt début juin.', 'Elle est partie en juin.', 'Elle est partie en mai, ou plutôt au début de juin.']),
        lC('Écoute. Que fait le marqueur ?', src(E(2613)).fr, ['Il remplace un mot qui n’était pas juste.', 'Il resserre un énoncé vrai.'], 0, '« Diminué » était faux. EN: it replaces.', 'a2-trois'),
      ],
    },
    {
      id: 'r3-preciser', label: 'Ton sens, ton cas', targets: ['occurrence-exemple'],
      questions: [
        mc('« Le responsable, … la mairie, n’a pas encore répondu. » Il n’y a qu’un responsable.', ['en l’occurrence', 'par exemple', 'à cet égard'], 0, 'Le seul cas dont on parle. EN: the actual case.', 'a3-sens'),
        mc('« Certains appareils, … la perceuse, seront prêtés. » D’autres le seront aussi.', ['par exemple', 'en l’occurrence'], 0, 'Un cas parmi d’autres : par exemple. EN: one example among others.', 'a3-erreurs'),
        mc('« À cet égard » a besoin...', ['d’un aspect déjà nommé', 'd’un chiffre', 'd’une date'], 0, 'Il se rattache à ce qu’on vient de nommer. EN: something already named.', 'a3-check'),
        tI('Complète. Trois mots.', 'Quand je dis « durable », … réparable.', 'j’entends par là', 'Ta définition du mot. EN: by that I mean.', 'a3-sens', ['je veux dire', 'j’entends']),
        tI('Complète. Un mot.', 'Le bâtiment, en … l’ancienne gare, sera rénové l’an prochain.', 'l’occurrence', 'Le seul bâtiment dont on parle. EN: in this case.', 'a3-choisir', ['occurrence']),
        tI('Complète. Un mot.', 'Je parle de sobriété ; j’entends par … garder nos appareils plus longtemps.', 'là', 'J’entends par là : la locution est fixe. EN: par là.', 'a3-note'),
        eS('Sur ce point, à cet égard, rien n’est décidé.', 'À cet égard, rien n’est décidé.', 'Les deux disent « sur ce point » : garde-en un. EN: one is enough.', 'a3-erreurs',
          ['Sur ce point, rien n’est décidé.', 'Rien n’est décidé à cet égard.', 'Rien n’est décidé sur ce point.'], ES_PILE),
        lC('Écoute. « En l’occurrence » désigne ici...', src(E(2630)).fr, ['le seul bâtiment dont on parle', 'un bâtiment parmi d’autres'], 0, 'L’ancienne gare, et aucune autre. EN: the one building.', 'a3-choisir'),
      ],
    },
    {
      id: 'r4-vrai-dire', label: 'À vrai dire, loin s’en faut', targets: ['loin-apres-eloge'],
      questions: [
        mc('Laquelle peut se terminer par « loin s’en faut » ?', ['Tout n’est pas réglé', 'Tout est réglé', 'Le spectacle est parfait'], 0, 'Loin s’en faut renforce une négation ou une restriction. EN: only after a negative.', 'a4-deux'),
        mc('« À vrai dire » sert à...', ['dire ce que je pense réellement', 'dire « très »', 'donner un exemple'], 0, 'Un aveu, une correction, le vrai sujet. EN: candour.', 'a4-deux'),
        mc('Dans la chronique, que reproche-t-on au balcon ?', ['On y entend mal les voix.', 'On y voit mal la scène.', 'Il coûte trop cher.'], 0, 'Du balcon, « les voix arrivent étouffées ». EN: muffled voices.', 'a4-chronique'),
        tI('Complète. Trois mots.', 'Tout n’est pas réussi, … .', 'loin s’en faut', 'Une restriction renforcée. EN: far from it.', 'a4-deux', ['tant s’en faut', 'il s’en faut']),
        tI('Complète. Trois mots.', '…, je m’attendais au pire.', 'à vrai dire', 'Un aveu contre une attente. EN: to tell the truth.', 'a4-chronique', ['à dire vrai', 'pour tout dire', 'en vérité']),
        tI('Récris la phrase pour qu’elle puisse se terminer par « loin s’en faut ».', 'Le budget est bouclé.', 'Le budget n’est pas bouclé.', 'Il faut une négation. EN: make it negative.', 'a4-doser',
          ['Le budget n’est pas encore bouclé.', 'Le budget n’est pas bouclé, loin s’en faut.', 'Le budget n’est pas encore bouclé, loin s’en faut.']),
        eS('Le spectacle est très réussi, loin s’en faut.', 'Le spectacle n’est pas très réussi, loin s’en faut.', 'Après un éloge, loin s’en faut contredit la phrase. EN: it contradicts praise.', 'a4-deux',
          ['Le spectacle n’est pas réussi, loin s’en faut.', 'Le spectacle est très réussi.', 'Le spectacle n’est pas très réussi.', 'Tout n’est pas réussi, loin s’en faut.', 'Le spectacle n’est pas entièrement réussi, loin s’en faut.']),
        lC('Écoute. Que dit le critique ?', src(E(2642)).fr, ['Il avoue qu’il n’y croyait pas beaucoup.', 'Il dit que la pièce raconte une histoire vraie.'], 0, 'À vrai dire annonce l’aveu. EN: an admission.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-ajout', label: 'L’argument qui pèse', targets: ['ajout-mal-construit'],
      questions: [
        mc('« La ligne est utile, sans compter qu’elle … rentable. »', ['est', 'soit', 'être'], 0, 'Sans compter que + indicatif. EN: indicative.', 'a5-piege'),
        mc('Lequel ajoute un argument au moins aussi fort ?', ['qui plus est', 'pourtant', 'en revanche'], 0, 'Pourtant et en revanche opposent. EN: qui plus est adds.', 'a5-exemples'),
        mc('Devant un nom, lequel est juste ?', ['sans compter les deux mois d’étude', 'sans compter que les deux mois d’étude'], 0, 'Devant un nom : sans compter. EN: no « que ».', 'a5-piege'),
        tI('Complète. Trois mots.', 'Le bus de nuit est utile ; …, il coûte peu.', 'qui plus est', 'Il ajoute l’argument qui pèse. EN: what is more.', 'a5-lettre', ['de plus', 'en outre', 'de surcroît']),
        tI('Relie les deux phrases avec « sans compter que ».', 'La ligne rassure les familles. Elle évite bien des trajets en voiture.', 'La ligne rassure les familles, sans compter qu’elle évite bien des trajets en voiture.', 'Une considération de plus, à l’indicatif. EN: one more point.', 'a5-exemples'),
        tI('Mets le verbe au bon mode et écris la phrase.', 'Sans compter que les parkings (être) déjà pleins.', 'Sans compter que les parkings sont déjà pleins.', 'Un fait posé : indicatif. EN: indicative.', 'a5-piege'),
        eS('La ligne est utile, sans compter qu’elle soit rentable.', 'La ligne est utile, sans compter qu’elle est rentable.', 'Ne confonds pas avec « sans que » + subjonctif. EN: indicative here.', 'a5-piege',
          ['La ligne est utile, sans compter qu’elle est aussi rentable.', 'La ligne est utile, sans compter qu’elle est même rentable.']),
        lC('Écoute. Que fait « qui plus est » ?', src(E(2655)).fr, ['Il ajoute un argument dans le même sens.', 'Il oppose deux arguments.'], 0, 'Fiable, et à l’heure : même sens. EN: same direction.', 'a5-lettre'),
      ],
    },
    {
      id: 'r6-aparte', label: 'L’argument en passant', targets: ['aparte-contraire'],
      questions: [
        mc('« Je ne suis pas contre les écrans ; j’en utilise … un tous les jours. »', ['d’ailleurs', 'pourtant', 'en revanche'], 0, 'Une preuve dans le même sens : d’ailleurs. EN: same direction.', 'a6-glisser'),
        mc('« Au demeurant » veut dire...', ['au reste, tout bien considéré', 'en attendant', 'au début'], 0, 'Pas « en attendant ». EN: for the rest.', 'a6-erreurs'),
        mc('« Il a raison ; … , les chiffres le confirment. » La phrase appuie le même point :', ['d’ailleurs', 'par ailleurs'], 0, 'Par ailleurs passerait à un autre aspect. EN: same point.', 'a6-erreurs'),
        tI('Complète. Deux mots, registre soutenu.', 'Ce débat n’est pas nouveau ; …, il revient à chaque rentrée.', 'du reste', 'Le même geste que d’ailleurs, plus soutenu. EN: besides.', 'a6-blog', ['d’ailleurs', 'au reste']),
        tI('Complète. Deux mots, registre soutenu.', 'Un livre inégal, … passionnant.', 'au demeurant', 'Après une réserve, ce qui l’emporte. EN: otherwise.', 'a6-glisser', ['du reste', 'par ailleurs']),
        tI('Garde un seul marqueur et écris la phrase.', 'D’ailleurs, du reste, ils le disaient eux-mêmes.', 'Du reste, ils le disaient eux-mêmes.', 'Un geste, un marqueur. EN: one marker.', 'a6-erreurs',
          ['D’ailleurs, ils le disaient eux-mêmes.', 'Ils le disaient d’ailleurs eux-mêmes.', 'Ils le disaient du reste eux-mêmes.', 'Ils le disaient eux-mêmes.']),
        eS('Je n’aime pas les écrans ; d’ailleurs, j’en utilise un tous les jours.', 'Je n’aime pas les écrans ; pourtant, j’en utilise un tous les jours.', 'Un fait contraire demande une opposition. EN: a contrast marker.', 'a6-erreurs',
          ['Je n’aime pas les écrans ; cependant, j’en utilise un tous les jours.', 'Je n’aime pas les écrans ; toutefois, j’en utilise un tous les jours.', 'Je n’aime pas les écrans ; néanmoins, j’en utilise un tous les jours.', 'Je n’aime pas les écrans, mais j’en utilise un tous les jours.', 'Je n’aime pas les écrans ; j’en utilise pourtant un tous les jours.', 'Je n’aime pas les écrans ; j’en utilise cependant un tous les jours.', 'Je n’aime pas les écrans ; malgré tout, j’en utilise un tous les jours.']),
        lC('Écoute. « Au demeurant » suit...', src(E(2665)).fr, ['une réserve', 'une preuve chiffrée'], 0, '« Inégal », puis « passionnant ». EN: a reservation.', 'a6-choisir'),
      ],
    },
    {
      id: 'r7-fortiori', label: 'Du cas le plus fort', targets: ['fortiori-inverse'],
      questions: [
        mc('« Si l’escalier fatigue un adulte en forme, il épuise a fortiori… »', ['une personne âgée', 'un joggeur entraîné', 'un adulte en forme'], 0, 'Vers le cas où c’est encore plus vrai. EN: toward the obvious case.', 'a7-exemples'),
        mc('Pour raisonner a fortiori, tu pars...', ['du cas où l’on s’y attend le moins', 'du cas le plus évident'], 0, 'Puis tu conclus au cas évident. EN: from the least expected case.', 'a7-sens'),
        mc('« Les crédits baissent ; il faut … choisir. »', ['donc', 'a fortiori'], 0, 'Une simple conséquence : pas deux cas à comparer. EN: a plain consequence.', 'a7-piege'),
        tI('Complète. Quatre mots.', 'Ces marches gênent les poussettes, et … les fauteuils roulants.', 'à plus forte raison', 'Vers le cas le plus évident. EN: even more so.', 'a7-exemples', ['a fortiori', 'encore plus']),
        tI('Complète. Deux mots.', 'Si la rampe est utile en été, elle l’est … en hiver.', 'a fortiori', 'De l’été à l’hiver : encore plus vrai. EN: all the more so.', 'a7-exemples', ['à plus forte raison', 'encore plus']),
        tI('Complète. Un mot.', 'Il faut une rampe, à plus forte raison … l’école accueille des enfants en fauteuil.', 'si', 'À plus forte raison si… EN: if.', 'a7-exemples', ['quand', 'lorsque', 'puisque']),
        eS('Si les visiteurs se perdent, à plus forte raison les guides.', 'Si même les guides se perdent, à plus forte raison les visiteurs.', 'On part du cas surprenant : les guides. EN: start from the guides.', 'a7-piege',
          ['Si les guides se perdent, à plus forte raison les visiteurs.', 'Si même les guides se perdent, a fortiori les visiteurs.', 'Si les guides se perdent, a fortiori les visiteurs.']),
        lC('Écoute. Le raisonnement va...', src(E(2674)).fr, ['du cas surprenant au cas évident', 'du cas évident au cas surprenant'], 0, 'Des guides, qui ne devraient pas se perdre, aux visiteurs. EN: surprising to obvious.', 'a7-sens'),
      ],
    },
    {
      id: 'r8-des-lors', label: 'Dès lors', targets: ['des-lors-mal-lu'],
      questions: [
        mc('« Les crédits ont été réduits ; dès lors, il faut choisir. » Dès lors veut dire...', ['par conséquent', 'autrefois', 'bien que'], 0, 'Un raisonnement : la conséquence. EN: consequently.', 'a8-sens'),
        mc('« Il a commencé à courir à trente ans ; dès lors, il n’a plus manqué un dimanche. » Dès lors veut dire...', ['à partir de ce moment', 'bien que', 'en revanche'], 0, 'Un récit daté : un départ dans le temps. EN: from then on.', 'a8-trier'),
        mc('« Dès lors que » se construit avec...', ['l’indicatif', 'le subjonctif', 'l’infinitif'], 0, 'Dès lors que tu as signé. EN: indicative.', 'a8-trier'),
        tI('Mets le verbe au bon mode et écris la phrase.', 'Dès lors que le budget (être) voté, les travaux peuvent commencer.', 'Dès lors que le budget est voté, les travaux peuvent commencer.', 'Indicatif. EN: indicative.', 'a8-sens', ['Dès lors que le budget a été voté, les travaux peuvent commencer.']),
        tI('Écris un équivalent sans ambiguïté de « dès lors » dans cette phrase. Deux mots.', 'Les crédits ont été réduits ; dès lors, il faut choisir.', 'par conséquent', 'Par conséquent ne dit que la cause. EN: unambiguous.', 'a8-sens', ['en conséquence', 'de ce fait', 'donc']),
        tI('Complète. Deux mots.', 'Il a commencé à courir à trente ans ; …, il n’a plus manqué un dimanche.', 'dès lors', 'Le départ dans le temps. EN: from then on.', 'a8-trier', ['depuis lors', 'depuis', 'depuis ce jour', 'depuis ce jour-là', 'à partir de là']),
        eS('Dès lors que le budget soit voté, les travaux peuvent commencer.', 'Dès lors que le budget est voté, les travaux peuvent commencer.', 'Dès lors que + indicatif. EN: indicative.', 'a8-trier',
          ['Dès lors que le budget a été voté, les travaux peuvent commencer.']),
        lC('Écoute. « Dès lors que » veut dire ici...', src(E(2679)).fr, ['puisque tu as signé', 'avant que tu signes'], 0, 'La signature est la raison de l’engagement. EN: since.', 'a8-sens'),
      ],
    },
    {
      id: 'r9-quitte', label: 'Accepter le prix', targets: ['quitte-a-mal-construit'],
      questions: [
        mc('« Nous reportons la fête, quitte à … quelques fidèles. »', ['décevoir', 'la déception de', 'que nous décevions'], 0, 'Quitte à + infinitif. EN: an infinitive.', 'a9-erreurs'),
        mc('« Quitte à » annonce...', ['un prix qu’on accepte', 'un but', 'une cause'], 0, 'Ce qu’on accepte de perdre. EN: an accepted cost.', 'a9-prix'),
        mc('« En tout état de cause » pose...', ['un point ferme, quoi qu’il arrive', 'une hypothèse', 'une question'], 0, 'Le reste peut bouger, pas ce point. EN: a fixed point.', 'a9-prix'),
        tI('Complète. Deux mots.', 'Je préfère dire non tout de suite, … paraître sévère.', 'quitte à', 'Le prix accepté : paraître sévère. EN: even if it means.', 'a9-prix', ['au risque de']),
        tI('Complète. Un mot.', 'Quitte à attendre, … attendre au chaud.', 'autant', 'Quitte à…, autant… EN: might as well.', 'a9-prix'),
        tI('Complète. Cinq mots.', '…, la décision sera prise avant juin.', 'en tout état de cause', 'Un point ferme. EN: in any case.', 'a9-cr', ['quoi qu’il en soit', 'en tout cas', 'dans tous les cas', 'de toute façon']),
        eS('Nous reportons la fête, quitte à la déception de quelques fidèles.', 'Nous reportons la fête, quitte à décevoir quelques fidèles.', 'Quitte à prend un infinitif. EN: infinitive.', 'a9-erreurs',
          ['Nous reportons la fête, au risque de décevoir quelques fidèles.', 'Nous reportons la fête, quitte à décevoir quelques-uns de nos fidèles.', 'Nous reportons la fête, quitte à décevoir des fidèles.']),
        lC('Écoute. Qu’accepte-t-on ?', src(E(2692)).fr, ['de paraître sévère', 'de dire oui'], 0, 'Le prix d’une réponse claire. EN: seeming harsh.', 'a9-cr'),
      ],
    },
    {
      id: 'r10-cloture', label: 'Fermer le texte', targets: ['cloture-empilee'],
      questions: [
        mc('Quel marqueur veut dire « après avoir pesé le pour et le contre » ?', ['tout bien considéré', 'en guise de conclusion', 'par ailleurs'], 0, 'Un verdict après examen. EN: all things considered.', 'a10-fermer'),
        mc('« Le retard, somme toute, n’a duré qu’une semaine. » Somme toute...', ['relativise', 'annonce une remarque', 'oppose'], 0, 'Il ramène les choses à leur juste mesure. EN: it relativises.', 'a10-choisir'),
        mc('Après « tout bien considéré », tu écris...', ['une phrase qui décide', 'un argument nouveau', 'une question ouverte'], 0, 'La clôture n’ouvre pas de sujet. EN: a decision.', 'a10-piege'),
        tI('Complète. Trois mots.', '…, le projet mérite d’être poursuivi.', 'tout bien considéré', 'Le verdict. EN: all things considered.', 'a10-fermer', ['tout compte fait', 'en définitive', 'somme toute', 'en somme', 'au bout du compte', 'en fin de compte', 'finalement']),
        tI('Complète. Quatre mots.', '…, je voudrais revenir sur une question.', 'en guise de conclusion', 'L’annonce d’une dernière remarque. EN: by way of conclusion.', 'a10-bilan', ['pour finir', 'pour conclure', 'en conclusion', 'pour terminer']),
        tI('Complète. Deux mots.', 'Le désagrément est réel ; il est, …, limité.', 'somme toute', 'Le compte qui relativise. EN: all in all.', 'a10-bilan', ['en somme', 'tout compte fait', 'tout bien considéré', 'en définitive', 'au fond', 'finalement']),
        eS('Somme toute, en somme, l’essai a coûté peu.', 'Somme toute, l’essai a coûté peu.', 'Deux fois le même geste. EN: the same gesture twice.', 'a10-piege',
          ['En somme, l’essai a coûté peu.', 'L’essai a, somme toute, coûté peu.', 'L’essai a coûté peu.', 'Tout bien considéré, l’essai a coûté peu.'], ES_PILE),
        lC('Écoute. Que fait cette phrase ?', src(E(2701)).fr, ['Elle annonce une dernière remarque.', 'Elle rend un verdict chiffré.'], 0, 'En guise de conclusion : une annonce. EN: an announcement.', 'a10-choisir'),
      ],
    },
    {
      id: 'r11-contestes', label: 'Les marqueurs contestés', targets: ['conteste-a-l-ecrit'],
      questions: [
        mc('À l’oral, « au final » est...', ['du français courant', 'une faute grave'], 0, 'L’OQLF note qu’à l’oral il passe le plus souvent inaperçu. EN: ordinary speech.', 'a11-trier'),
        mc('Dans ton texte écrit soutenu, à la place de « en termes de budget », tu écris...', ['en matière de budget', 'au niveau du budget', 'en termes de budget, entre guillemets'], 0, '« En matière de » n’est contesté par personne. EN: the undisputed form.', 'a11-sept'),
        mc('Sur « voire même », l’Académie et l’OQLF...', ['divergent : l’Académie l’enregistre, l’OQLF y voit un pléonasme', 'sont d’accord pour l’interdire partout'], 0, 'Elles divergent ; « voire » seul met tout le monde d’accord. EN: they disagree.', 'a11-avis'),
        mc('« Suite à votre demande, nous vous adressons le formulaire. » Dans une lettre administrative, c’est...', ['admis par l’Académie et par l’OQLF', 'refusé par les deux'], 0, 'La correspondance administrative est son domaine. EN: admitted in such letters.', 'a11-avis'),
        tI('Récris pour un texte écrit soutenu.', 'Au niveau des horaires, rien ne change.', 'En ce qui concerne les horaires, rien ne change.', 'L’OQLF et l’Académie préfèrent « en ce qui concerne ». EN: as regards.', 'a11-sept',
          ['Pour ce qui est des horaires, rien ne change.', 'Quant aux horaires, rien ne change.', 'Sur le plan des horaires, rien ne change.', 'Rien ne change en ce qui concerne les horaires.', 'Les horaires ne changent pas.', 'Rien ne change pour les horaires.', 'Concernant les horaires, rien ne change.']),
        tI('Récris pour un texte écrit soutenu.', 'C’est difficile, voire même impossible.', 'C’est difficile, voire impossible.', '« Voire » seul n’est contesté par personne. EN: voire alone.', 'a11-sept', ['C’est difficile, et même impossible.', 'C’est difficile, sinon impossible.']),
        tI('Récris pour un texte écrit soutenu.', 'Au final, on a gardé l’ancien logo.', 'Finalement, nous avons conservé l’ancien logo.', '« Finalement » à l’écrit. EN: finalement.', 'a11-sept',
          ['Finalement, on a gardé l’ancien logo.', 'Finalement, nous avons gardé l’ancien logo.', 'Finalement, on a conservé l’ancien logo.', 'En définitive, nous avons conservé l’ancien logo.', 'En définitive, nous avons gardé l’ancien logo.', 'En fin de compte, nous avons conservé l’ancien logo.', 'En fin de compte, nous avons gardé l’ancien logo.', 'Nous avons finalement conservé l’ancien logo.', 'Nous avons finalement gardé l’ancien logo.']),
        lC('Écoute. Selon l’OQLF, où cette tournure passe-t-elle le plus souvent inaperçue ?', src(E(2707)).fr, ['à l’oral, dans une conversation', 'dans un rapport écrit'], 0, '« Notamment à l’oral, l’emploi de l’adverbe passe le plus souvent inaperçu. » EN: in informal speech.', 'a11-sept'),
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
    { front: 'remplacer un mot qui n’était pas juste', back: 'ou plutôt', say: src(E(2613)).fr },
    { front: 'resserrer un énoncé vrai mais vague', back: 'plus exactement', say: src(E(2618)).fr },
    { front: 'donner ta définition d’un mot', back: 'j’entends par là', say: src(E(2629)).fr },
    { front: 'le cas réel, pas un exemple', back: 'en l’occurrence', say: src(E(2625)).fr },
    { front: 'far from it, after a negative', back: 'loin s’en faut', say: src(E(2636)).fr },
    { front: 'l’argument qui pèse', back: 'qui plus est', say: src(E(2648)).fr },
    { front: 'du cas le moins attendu au cas évident', back: 'a fortiori, à plus forte raison', say: src(E(2668)).fr },
    { front: 'le prix accepté', back: 'quitte à + infinitif', say: src(E(2688)).fr },
    { front: 'un verdict après examen', back: 'tout bien considéré', say: src(E(2699)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Reformuler et conclure, en résumé',
  body: `${REFRAME} Tu rectifies en avançant, tu précises ton sens et ton cas, tu ajoutes ce qui pèse, tu raisonnes du cas le plus fort, tu lis dès lors dans le temps ou dans la logique, tu acceptes un prix et tu fermes ton texte une seule fois. À l’oral, tu reconnais les marqueurs contestés ; à l’écrit, tu choisis la forme sûre. La suite, c’est ${PERSUADER_REF} : ces gestes au service d’une argumentation qui cherche à convaincre, et la façon de juger si chaque procédé est loyal. EN: Next, these gestures serve persuasion, judged for fairness.`,
  points: [
    'Ou plutôt remplace, plus exactement resserre, pour mieux dire monte d’un cran.',
    'J’entends par là définit, en l’occurrence nomme le cas, loin s’en faut suit une négation.',
    'Qui plus est pèse, d’ailleurs glisse, a fortiori va vers le cas évident.',
    'Un seul geste de clôture, et à l’écrit, aucun marqueur contesté.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['geste', 'cloture', 'conteste'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta version écrite',
    opener: {
      line: 'L’intervention de Léa, entendue au conseil, doit maintenant être lue : à toi de la réécrire, geste par geste. EN: Léa’s talk, heard at the council, must now be read: your turn to rewrite it, gesture by gesture.',
      imageRef: 'lessons/reformuler-conclure/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as réécrit une intervention orale pour la publier et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You rewrote a spoken intervention for print and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-modele', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-preciser', 'a12-quiz/r6-aparte', 'a12-quiz/r9-quitte'],
  },
  sections: [
    A12_MODELE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══ ACTS 2 TO 12 ══ */

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-geste', title: 'Un geste par marqueur', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les règles du geste. EN: say each line aloud: the rules of the gesture.', items: [E(2602), E(2604), E(2605), E(2606), E(2607), E(2608)], audio: AUDIO },
  { id: 'd-rectifier', title: 'Remplacer ou resserrer', format: 'mcq' as const, coach: 'Demande-toi si le premier mot était faux, ou seulement vague. EN: wrong, or just vague?', q: '« Elle est partie en mai, … début juin. » Mai était faux.', opts: ['ou plutôt', 'plus exactement'], correct: 0, why: 'Un mot faux se remplace. EN: replace a wrong word.', items: [E(2610), E(2611), E(2613), E(2618), E(2619), E(2621)], audio: AUDIO },
  { id: 'd-preciser', title: 'Le cas réel', format: 'mcq' as const, coach: 'En l’occurrence désigne le seul cas dont tu parles. EN: the one actual case.', q: '« Le responsable, … la mairie, n’a pas répondu. » Il n’y a qu’un responsable.', opts: ['en l’occurrence', 'par exemple'], correct: 0, why: 'Un seul cas : en l’occurrence. EN: one case.', items: [E(2623), E(2624), E(2625), E(2629), E(2630), E(2633)], audio: AUDIO },
  { id: 'd-vraidire', title: 'Après une négation', format: 'mcq' as const, coach: 'Loin s’en faut renforce une phrase négative ou restrictive. EN: only after a negative.', q: 'Laquelle peut se terminer par « loin s’en faut » ?', opts: ['Tout n’est pas réglé', 'Tout est réglé'], correct: 0, why: 'Seule la phrase négative l’accepte. EN: the negative one.', items: [E(2634), E(2635), E(2636), E(2637), E(2638), E(2644)], audio: AUDIO },
  { id: 'd-ajout', title: 'Ajouter dans le même sens', format: 'mcq' as const, coach: 'Sans compter que pose un fait : indicatif. EN: indicative.', q: '« La ligne est utile, sans compter qu’elle … rentable. »', opts: ['est', 'soit'], correct: 0, why: 'Indicatif après sans compter que. EN: indicative.', items: [E(2648), E(2649), E(2650), E(2653), E(2654), E(2655)], audio: AUDIO },
  { id: 'd-aparte', title: 'La preuve glissée', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : la preuve arrive en passant, dans le même sens. EN: read each aloud.', items: [E(2657), E(2658), E(2659), E(2660), E(2663), E(2664)], audio: AUDIO },
  { id: 'd-fortiori', title: 'Vers le cas évident', format: 'mcq' as const, coach: 'Pars du cas où l’on s’y attend le moins. EN: start from the least expected case.', q: '« Si la rampe aide les livreurs, elle aide a fortiori… »', opts: ['les fauteuils roulants', 'les livreurs pressés'], correct: 0, why: 'La rampe est faite pour les fauteuils. EN: the more evident case.', items: [E(2667), E(2668), E(2669), E(2671), E(2672), E(2673)], audio: AUDIO },
  { id: 'd-deslors', title: 'Temps ou cause', format: 'mcq' as const, coach: 'Un récit daté, ou un raisonnement ? EN: a dated narrative, or an argument?', q: '« Les crédits ont été réduits ; dès lors, il faut choisir. » Dès lors veut dire...', opts: ['par conséquent', 'autrefois'], correct: 0, why: 'Un raisonnement : la conséquence. EN: consequently.', items: [E(2675), E(2676), E(2677), E(2679), E(2681), E(2685)], audio: AUDIO },
  { id: 'd-quitte', title: 'Le prix et le point ferme', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : quitte à et un infinitif, puis le point qui ne bouge pas. EN: read each aloud.', items: [E(2688), E(2689), E(2690), E(2692), E(2694), E(2695)], audio: AUDIO },
  { id: 'd-cloture', title: 'Une seule clôture', format: 'mcq' as const, coach: 'Un texte ne se ferme qu’une fois. EN: close once.', q: 'Combien de marqueurs de clôture dans une conclusion ?', opts: ['un seul', 'trois'], correct: 0, why: 'Un geste, puis une décision. EN: one gesture.', items: [E(2697), E(2698), E(2699), E(2700), E(2701), E(2703)], audio: AUDIO },
  { id: 'd-conteste', title: 'La forme sûre', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : ce sont les formes écrites que personne ne conteste. EN: the undisputed written forms.', items: [E(2712), E(2713), E(2714), E(2715), E(2716), E(2717)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'marqueurs-empiles', description: 'Stacks discourse markers at the start of a sentence (du coup, au final, en fait, bref) so that none announces a gesture and no proposal follows.', detectOn: ['a1-scene', 'a1-check', 'a10-piege', 'a12-mission'], drill: 'd-geste', retest: 'd-geste' },
  { id: 'correction-confondue', description: 'Uses plus exactement for a replacement or ou plutôt for a narrowing, or reformulates by repeating the same words.', detectOn: ['a2-trier', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-rectifier', retest: 'd-rectifier' },
  { id: 'occurrence-exemple', description: 'Uses en l’occurrence for one example among others, leaves a vague word undefined, or uses à cet égard with nothing to refer back to.', detectOn: ['a3-erreurs', 'a3-choisir', 'a3-check', 'a12-mission'], drill: 'd-preciser', retest: 'd-preciser' },
  { id: 'loin-apres-eloge', description: 'Puts loin s’en faut after a positive statement, or reads à vrai dire as « really ».', detectOn: ['a4-doser', 'a4-ecoute', 'a4-check'], drill: 'd-vraidire', retest: 'd-vraidire' },
  { id: 'ajout-mal-construit', description: 'Builds sans compter que with a subjunctive or before a noun, or uses qui plus est for a contrary point.', detectOn: ['a5-piege', 'a5-ordre', 'a5-check', 'a12-mission'], drill: 'd-ajout', retest: 'd-ajout' },
  { id: 'aparte-contraire', description: 'Uses d’ailleurs or du reste for a contrary fact, reads au demeurant as « meanwhile », or stacks two addition markers.', detectOn: ['a6-erreurs', 'a6-choisir', 'a6-check'], drill: 'd-aparte', retest: 'd-aparte' },
  { id: 'fortiori-inverse', description: 'Reverses an a fortiori argument (from the evident case to the less expected one), or uses a fortiori for a plain consequence.', detectOn: ['a7-sens', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-fortiori', retest: 'd-fortiori' },
  { id: 'des-lors-mal-lu', description: 'Reads every dès lors as time or every dès lors as cause, ignoring the context, or builds dès lors que with a subjunctive.', detectOn: ['a8-trier', 'a8-tram', 'a8-check'], drill: 'd-deslors', retest: 'd-deslors' },
  { id: 'quitte-a-mal-construit', description: 'Builds quitte à with a noun, uses it for a goal instead of a cost, or blends en tout état de cause with en tout cas.', detectOn: ['a9-erreurs', 'a9-dictee', 'a9-check'], drill: 'd-quitte', retest: 'd-quitte' },
  { id: 'cloture-empilee', description: 'Closes a text with several closing markers, with no decision, or with a new argument.', detectOn: ['a10-choisir', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-cloture', retest: 'd-cloture' },
  { id: 'conteste-a-l-ecrit', description: 'Keeps the contested markers of speech in a careful written text, or corrects them as errors in someone’s speech.', detectOn: ['a11-trier', 'a11-version', 'a11-check', 'a12-mission'], drill: 'd-conteste', retest: 'd-conteste' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-rectifier', 'Rectifier et préciser', ['ou plutôt, plus exactement, pour mieux dire', 'j’entends par là, en l’occurrence, à cet égard', 'à vrai dire, loin s’en faut'], [
    teach('sheet-rectifier-teach', 'Faire avancer l’idée en la corrigeant',
      `Au B1, « c’est-à-dire » précisait ; ${REUNION_REF} t’a donné « autrement dit » pour vérifier qu’on s’est compris. Au C1, la reformulation fait avancer l’idée : elle la remplace, la resserre, la définit ou la rapporte au cas réel. Le premier mot reste visible : c’est le chemin entre les deux qui convainc. EN: At C1, reformulating moves the idea on: replace, narrow, define or apply it.`),
    table('sheet-rectifier-table', 'Huit marqueurs, huit gestes', ['Marqueur', 'Geste', 'Registre', 'Exemple'], [
      ['ou plutôt', 'remplace un mot qui n’était pas juste', 'courant', 'Elle est partie en mai, ou plutôt début juin.'],
      ['plus exactement', 'resserre un énoncé vrai mais vague', 'courant', 'Il est arrivé lundi, plus exactement lundi soir.'],
      ['pour mieux dire', 'choisit un mot plus exact ou plus fort', 'soutenu', 'Il a été maladroit, pour mieux dire blessant.'],
      ['j’entends par là', 'donne ta définition d’un mot', 'courant à soutenu', 'Quand je dis « durable », j’entends par là réparable.'],
      ['en l’occurrence', 'désigne le cas réel, pas un exemple', 'courant à soutenu', 'Le responsable, en l’occurrence la mairie, n’a pas répondu.'],
      ['à cet égard', 'rattache la phrase à l’aspect qu’on vient de nommer', 'courant à soutenu', 'Les enfants adorent l’atelier ; à cet égard, l’essai est réussi.'],
      ['à vrai dire', 'annonce ce qu’on pense réellement, contre une attente', 'courant', 'À vrai dire, je m’attendais au pire.'],
      ['loin s’en faut', 'renforce une phrase négative ou restrictive', 'soutenu', 'Tout n’est pas réussi, loin s’en faut.'],
    ]),
    table('sheet-rectifier-pieges', 'Trois pièges', ['Piège', 'Pourquoi', 'À la place'], [
      ['« en l’occurrence » pour « par exemple »', 'en l’occurrence désigne le seul cas dont on parle', 'par exemple, notamment'],
      ['« loin s’en faut » après un éloge', 'il renverse la phrase', 'une phrase négative d’abord : « tout n’est pas réussi »'],
      ['« à vrai dire » pour « vraiment »', 'il annonce un aveu ou une correction', 'vraiment, réellement'],
    ]),
  ]),
  sheet('sheet-ajouter', 'Ajouter un argument', ['qui plus est, sans compter que', 'd’ailleurs, du reste, au demeurant', 'l’empilement'], [
    teach('sheet-ajouter-teach', 'Ajouter sans aligner',
      `Tu connais « en outre » et « de plus » (${ACADEMIQUE_REF}, qui disait : « ${B222_REFRAME} »). Le C1 ajoute deux nuances : l’argument qui pèse davantage (« qui plus est », « sans compter que ») et l’argument glissé en passant (« d’ailleurs », « du reste », « au demeurant »). Un seul marqueur d’ajout par phrase : deux à la suite s’annulent. EN: Add the weightier point, or slip one in passing; one addition marker per sentence.`),
    table('sheet-ajouter-table', 'Cinq marqueurs d’ajout', ['Marqueur', 'Geste', 'Construction', 'Exemple'], [
      ['qui plus est', 'ajoute un argument au moins aussi fort', 'entre virgules, ou après « et »', 'Le bus de nuit est utile ; qui plus est, il coûte peu.'],
      ['sans compter que', 'ajoute une considération de plus, souvent décisive', '+ indicatif ; sans compter + nom', 'La ligne rassure les familles, sans compter qu’elle évite bien des trajets en voiture.'],
      ['d’ailleurs', 'glisse une preuve comme en passant ; à l’oral, ouvre aussi une digression', 'en tête ou au milieu', 'J’en utilise d’ailleurs un tous les jours.'],
      ['du reste', 'même geste que d’ailleurs, plus soutenu', 'en tête, entre virgules', 'Ce débat n’est pas nouveau ; du reste, il revient à chaque rentrée.'],
      ['au demeurant', '« au reste, tout bien considéré », souvent après une réserve', 'soutenu, souvent devant un adjectif', 'Un livre inégal, au demeurant passionnant.'],
    ]),
  ]),
  sheet('sheet-raisonner', 'Raisonner et trancher', ['a fortiori, à plus forte raison', 'dès lors : temps ou cause', 'quitte à, en tout état de cause'], [
    teach('sheet-raisonner-teach', 'Quatre gestes de raisonnement',
      'A fortiori et à plus forte raison vont du cas où l’on s’attend le moins à une conclusion au cas où elle s’impose. Dès lors dit un départ dans le temps ou une conséquence : le contexte décide, et les deux se mêlent souvent dans un récit. Quitte à dit le prix accepté ; en tout état de cause pose un point ferme. EN: From the least expected case; from then on or therefore; the accepted cost; the fixed point.'),
    table('sheet-raisonner-table', 'Sept emplois', ['Marqueur', 'Sens', 'Indice', 'Exemple'], [
      ['a fortiori', 'encore plus, et pour une meilleure raison', 'vers le cas le plus évident', 'Si la rampe est utile en été, elle l’est a fortiori en hiver.'],
      ['à plus forte raison', 'même sens, plus courant ; peut ouvrir « si… »', 'vers le cas le plus évident', 'Il faut une rampe, à plus forte raison si l’école accueille des enfants en fauteuil.'],
      ['dès lors (temps)', 'à partir de ce moment', 'un récit, une date', 'Il a commencé à courir à trente ans ; dès lors, il n’a plus manqué un dimanche.'],
      ['dès lors (cause)', 'par conséquent, dans ces conditions', 'un raisonnement', 'Les crédits ont été réduits ; dès lors, il faut choisir.'],
      ['dès lors que', 'du moment que, puisque (surtout causal aujourd’hui)', '+ indicatif', 'Dès lors que tu as signé, tu es engagé.'],
      ['quitte à', 'en acceptant de, au risque de', '+ infinitif', 'Nous reportons la fête, quitte à décevoir quelques fidèles.'],
      ['en tout état de cause', 'quoi qu’il en soit (soutenu)', 'un point qui ne bouge pas', 'En tout état de cause, la décision sera prise avant juin.'],
    ]),
  ]),
  sheet('sheet-conclure', 'Conclure', ['tout bien considéré, somme toute, en guise de conclusion', 'ce que tu connais déjà', 'une seule clôture'], [
    teach('sheet-conclure-teach', 'Un texte ne se ferme qu’une fois',
      'Tu connais « en somme », « en définitive » et « pour conclure ». Le C1 distingue le verdict (« tout bien considéré »), le compte qui relativise (« somme toute ») et l’annonce d’une dernière remarque (« en guise de conclusion »). Choisis un seul geste de clôture, et fais-le suivre d’une phrase qui décide. EN: Choose one closing gesture, followed by a sentence that decides.'),
    table('sheet-conclure-table', 'Les marqueurs de clôture', ['Marqueur', 'Geste', 'Registre', 'Exemple'], [
      ['tout bien considéré', 'rend un verdict après avoir pesé', 'courant à soutenu', 'Tout bien considéré, le projet mérite d’être poursuivi.'],
      ['somme toute', 'fait le compte, souvent pour relativiser', 'soutenu', 'Le retard, somme toute, n’a duré qu’une semaine.'],
      ['en guise de conclusion', 'annonce une dernière remarque', 'soutenu', 'En guise de conclusion, je voudrais revenir sur une question.'],
      ['en somme (déjà vu)', 'résume', 'courant', 'En somme, l’essai a réussi.'],
      ['en définitive (déjà vu)', 'tranche, une fois tout examiné', 'soutenu', 'En définitive, la ville a choisi de rénover.'],
      ['au final (contesté)', 'à l’oral seulement ; à l’écrit, finalement', 'familier', 'Finalement, nous avons conservé l’ancien logo.'],
    ]),
  ]),
  sheet('sheet-normes', 'Les marqueurs contestés', ['sept marqueurs, deux autorités', 'ce que tu écris à la place', 'où les avis divergent'], [
    teach('sheet-normes-teach', 'Reconnaître à l’oral, choisir à l’écrit',
      `Ces sept marqueurs sont du français courant à l’oral : ce ne sont pas des fautes quand on parle. À l’écrit soutenu, l’Académie française ou l’Office québécois de la langue française (OQLF) en critiquent certains emplois, et les deux ne disent pas toujours la même chose. ${Cap(CONCESSION2_REF)} a fait de même avec « malgré que ». Dans ton texte écrit, choisis la forme que personne ne conteste. EN: Ordinary in speech; in careful writing, choose the form nobody disputes.`),
    table('sheet-normes-table', 'Sept marqueurs, deux avis', ['Marqueur', 'Académie française', 'OQLF', 'Dans ton texte écrit'], [
      ['du coup', '« On évitera également de faire de du coup un simple adverbe de discours sans sens particulier. »', 'pas de fiche trouvée', 'donc, de ce fait, par conséquent'],
      ['au final', '« grammaticalement fautive »', '« déconseillé en langue standard ou soutenue, notamment à l’écrit »', 'finalement, en définitive, en fin de compte'],
      ['suite à', '« à réserver au domaine de la langue commerciale et administrative »', 'acceptable en correspondance ; « pour exprimer la cause ou la temporalité, suite à est déconseillée »', 'à la suite de, après'],
      ['en termes de', '« un anglicisme à proscrire » (au sens de « en matière de »)', '« On ne saurait donc le déconseiller, du moins dans la langue courante »', 'en matière de, pour ce qui est de, sur le plan de'],
      ['voire même', 'enregistré sans réserve : « Renforcé par Même »', '« un pléonasme qu’il convient de remplacer […] surtout dans la langue soignée »', 'voire, et même'],
      ['par contre', '« Elle ne peut donc être considérée comme fautive », mais on la déconseille quand un autre adverbe est possible', '« tout à fait correct »', 'en revanche, quand le sens le permet'],
      ['au niveau de', 'au sens propre seulement ; on ne dit pas « au niveau du salaire »', '« parfois surutilisée, là où en ce qui concerne ou sur le plan de conviendrait mieux »', 'en ce qui concerne, sur le plan de'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-07-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c1-07-lea': 'Léa’s spoken intervention (act 1), ONE VOICE, one take, a woman in her thirties, France French, speaking from notes in front of a small council: natural hesitations, a breath before « Bref, en somme, au final », the final « Voilà, c’est tout, merci » quick and a little embarrassed. The contested markers at ordinary weight: they are her normal speech, never mocked.',
  'rec-c1-07-conf': 'The lecture (act 2), ONE VOICE, one take, a woman sociologist speaking to a public audience, warm and precise, France French. Each self-correction (ou plutôt, plus exactement, pour mieux dire) with a tiny lift and no pause longer than the comma: the correction is deliberate, not a stumble.',
  'rec-c1-07-trois': 'The four cards of act 2, read plainly, same pace.',
  'rec-c1-07-piege-rectifier': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-07-note': 'The co-op note (act 3), ONE VOICE, one take, a calm board secretary, Québec French welcome. « Objet » read as a heading. « Premier geste », « Deuxième geste », « Troisième geste » with a short beat after each. Neutral, administrative, friendly.',
  'rec-c1-07-chronique': 'The theatre column (act 4), ONE VOICE, one take, a male critic in his forties reading his own piece, dry and amused, France French. A small beat before each « à vrai dire » and before « Dont acte ». « Loin s’en faut » with a slight downward weight, never sarcastic.',
  'rec-c1-07-deux': 'The four cards of act 4, read plainly.',
  'rec-c1-07-strapontin': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, TWO VOICES, in authored order. Lines 1 and 2: a female podcast host, bright. Lines 3 to 8: a male critic, relaxed, conversational. No music under the voices. The learner hears it once: no pause longer than the punctuation gives.',
  'rec-c1-07-lettre': 'The open letter (act 5), ONE VOICE, one take, a shopkeeper speaking for an association, firm and courteous, France French. A slight lift on each « qui plus est » and « sans compter que »: the letter climbs. The closing formula read in full, formally.',
  'rec-c1-07-piege-ajout': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-07-blog': 'The blog post (act 6), ONE VOICE, one take, a retired schoolteacher in her sixties, warm and a little wry, France French. Each « d’ailleurs » and « du reste » lightly thrown away, as an aside, never stressed: the effect must come from the words.',
  'rec-c1-07-glisser': 'The four cards of act 6, read plainly; card four as a casual question.',
  'rec-c1-07-essai': 'The essay extract (act 7), ONE VOICE, one take, a male urban planner, clear and patient, France French. Each « a fortiori » pronounced [a fɔʁ.sjɔ.ʁi]; each « à plus forte raison » with a slight weight on « forte ». Not a lecture: a man walking his reader through a street.',
  'rec-c1-07-piege-fortiori': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-07-halles': 'The market-hall history (act 8), ONE VOICE, one take, a calm local historian, France French. Dates read in full. Each « dès lors » at ordinary weight: the learner must find the sense in the context, not in the voice.',
  'rec-c1-07-tram': 'REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, a radio chronicler telling a short local history, unhurried. Years in full words. No pause longer than the punctuation gives.',
  'rec-c1-07-cr': 'The board minutes (act 9), ONE VOICE, one take, a secretary reading minutes aloud, neutral and clear, France French. The volunteer’s quotation with a light change of tone, no acting. « En tout état de cause » firm both times.',
  'rec-c1-07-prix': 'The four cards of act 9, read plainly; card two conversational.',
  'rec-c1-07-bilan': 'The report’s conclusion (act 10), ONE VOICE, one take, a municipal officer presenting to a council, clear and measured, France French. Figures in full words. A short beat before « Tout bien considéré »: the verdict.',
  'rec-c1-07-piege-cloture': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-07-podcast': 'The podcast passage (act 11), TWO VOICES, one take each. VERSION ORALE: a young male baker, relaxed and cheerful, France French, the markers at natural weight, never mocked. VERSION ÉCRITE: a neutral newsletter voice. Say « Version orale » and « Version écrite » as labels.',
  'rec-c1-07-avis': 'The four cards of act 11, read plainly; the quotations at the same weight as the rest.',
  'rec-c1-07-modele': 'The model rewrite (act 12), ONE VOICE, one take, a man in his forties reading his own text for a neighbourhood bulletin, calm and confident, France French. Each marker at ordinary weight, the last sentence a touch slower: it decides.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 7',
  intro: 'At B1 you learned that a connector states the link; at B2 you climbed the register ladder of cause and concession, announced a plan and reformulated in meetings. At C1 a marker is a gesture: this lesson reframes a statement while moving on (ou plutôt, plus exactement, pour mieux dire), defines a word and names the actual case (j’entends par là, en l’occurrence), adds the argument that weighs (qui plus est, sans compter que, d’ailleurs, au demeurant), argues from the stronger case (a fortiori), reads dès lors in time or in logic, accepts a cost (quitte à) and closes once (tout bien considéré, somme toute). It also recognises the contested markers of speech (du coup, au final, suite à…) and their safe written forms. You finish by rewriting a spoken intervention for print.',
  skill: 'PE',
  grammarAssumed: [COORD_UNIT, SUBORD_UNIT, CONCESSION_UNIT, CAUSE_UNIT, CONCESSION2_UNIT, ACADEMIQUE_UNIT, REUNION_UNIT],
  grammarIntroduced: [
    'Reframing while moving on: ou plutôt (replaces), plus exactement (narrows), pour mieux dire (upgrades, formal); j’entends par là (the writer’s own definition); en l’occurrence (the actual case, not an example)',
    'Scope and candour: à cet égard, à vrai dire, loin s’en faut after a negative or restrictive statement',
    'Addition by weight and in passing: qui plus est, sans compter que + indicative, d’ailleurs, du reste, au demeurant',
    'Reasoning: a fortiori and à plus forte raison toward the more evident case; dès lors temporal or causal, dès lors que; quitte à + infinitive; en tout état de cause',
    'Closure and stacking: tout bien considéré, somme toute, en guise de conclusion, one closing marker per text; the contested markers du coup, au final, suite à, en termes de, voire même, par contre and au niveau de, recognised in speech and replaced in careful writing, with the Académie and OQLF verdicts',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris qu’un connecteur dit le lien ; au B2, tu as gravi l’échelle des registres de la cause et de la concession, annoncé un plan et reformulé en réunion. Au C1, un marqueur est un geste : cette leçon t’apprend à rectifier en avançant, à définir un mot et nommer le cas réel, à ajouter l’argument qui pèse, à raisonner du cas le plus fort, à lire dès lors dans le temps ou dans la logique, à accepter un prix et à conclure une seule fois. Elle t’apprend aussi à reconnaître les marqueurs contestés de l’oral et leurs équivalents écrits. À la fin, tu réécris une intervention orale pour la publier.',
    minutes: 175,
    difficulty: 4,
    glyph: 'geste',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: REFORMULER_CONCLURE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, LEA_TEXT };
export const lessonWithoutTask = (): Lesson => LESSON;
