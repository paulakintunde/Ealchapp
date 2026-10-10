// c2.11.l1 « Compréhension orale experte » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE, strategy
// variant) on top of B1-BUILD-PLAYBOOK.md, with the C2 rules of
// C2-BUILD-LOG.md and C2-BUILD-PLAN.md's **R** shape ("recognition only —
// never asks for production"). The exact successor of b2.25 « Écouter à
// vitesse réelle » and the closest-listening C1 lesson, c1.21 « Débats et
// entretiens ».
//
// NOT imported, not merged into seed.json, not published.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THIS LOOP IS SHORTER THAN b2.25's AND c1.21's
// ══════════════════════════════════════════════════════════════════════════
//
//   b2.25 and c1.21 both end their act loop on a fourth beat, « Pour ta
//   charpente » / « Pour ton compte rendu », a `task` section, a `scenario`
//   and a `practice` speak section: the learner PRODUCES a written summary
//   and rehearses it aloud. c2.11 is R shape (C2-BUILD-PLAN.md: "recognition
//   only — never asks for production"), so none of that exists here:
//
//     - NO `task` section anywhere (no written production target)
//     - NO `scenario` section anywhere (every shipped C2 scenario is titled
//       "à voix haute" and scores speech; checked by grep across every
//       other C2 lesson in this directory before writing this file)
//     - NO `practice` section (its only non-recognition-adjacent skills are
//       'speak' and 'write')
//     - NO `dictation` section: reconstructing spelling from letter tiles is
//       still a productive act, so it is left out even though b2.25 and
//       c1.21 both use it
//     - the closing act ends on a `quiz` (mcq / listenChoose ONLY, never
//       typeIn or errorSpot, both of which ask the learner to write a
//       correction) plus a `reviewDeck` (flip, never type) and a `roundup`
//
//   Every act from 2 to 8 keeps the meet / notice / practise / use-it loop,
//   with "use it" renamed to fit a lesson that builds a DIAGNOSIS, not a
//   summary: « Pour ton diagnostic ».
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (anchor · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le signal perdu            6  a mild Swiss call-in (scene) · the
//                                     four faces of bruit, b2.25 and c1.21
//                                     recapped by trail position
//    2  Deux voix à la fois        6  a Paris rent-cap panel, real crosstalk ·
//                                     who resumes, the host's recadrage
//    3  Le registre qui bascule    6  a tenant mediation call · a register
//                                     shift read as an attitude, not an error
//    4  Des mots d'ailleurs : le
//       Québec                     6  a Québec remote-work interview ·
//                                     dîner/souper, faque, pantoute
//    5  Des mots d'ailleurs :
//       Belgique et Suisse         6  a support call · septante/nonante,
//                                     natel, poutzer
//    6  Des mots d'ailleurs :
//       l'Afrique de l'Ouest       6  a Dakar phone call · tout à l'heure's
//                                     past sense, le goudron, ça va aller
//    7  Le son abîmé               6  a mobile call over a construction
//                                     site · three breakdown types, three
//                                     repairs
//    8  Tout en même temps         7  THE stacked scene: a three-way call-in,
//                                     overlap + Swiss accent/static + West
//                                     African accent/register, together
//    9  L'épreuve experte          7  TCF-style three-document sitting and a
//                                     DALF C2-style extract, once-only ·
//                                     cheat sheet, quiz, review, roundup
//
//   TOTAL 55 missions, 9 acts (6,6,6,6,6,6,6,6,7). Corpus: 126 authored rows
//   (.2200-.2325, no gaps), ZERO reused seed/Postgres rows (file-head note on
//   ecoute-experte-corpus.ts). 10 listenings (8 anchors, one per act 1-8,
//   plus the two exam sittings in act 9), 0 readings. Quiz: 7 rounds of 6 (42 mcq /
//   listenChoose questions, no typeIn, no errorSpot). Five error triggers,
//   five drills, four reference sheets, nine terms. Chapter artwork:
//   `c2-ecoute-experte-image-prompts.md`, 9 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Cherche le signal, même dans le bruit. »
//   EN: Look for the signal, even in the noise.
//
//   ONE METAPHOR, LE SIGNAL / LE BRUIT. What b2.25 and c1.21 already taught
//   the learner to find (la charpente, la ligne de partage) IS the signal.
//   Four kinds of bruit sit on top of it here: overlapping voices, a
//   register that shifts mid-exchange, an unfamiliar regional accent, and
//   audio that is itself damaged. Act 8 stacks more than one at once, which
//   is this lesson's brief's exact ask.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    tracking two overlapping voices and realigning after crosstalk;
//           reading a mid-exchange register shift as an attitude, not a
//           mistake; resolving unfamiliar regional vocabulary (Québec,
//           Belgique, Suisse, Afrique de l'Ouest) from context; three
//           repairs for degraded audio; triaging several of the above at
//           once in a single passage; DALF C2 / TCF / TEF listening under
//           these stacked conditions.
//   QUOTES  b2.25's reframe and c1.21's reframe verbatim in corpus.ts's
//           REFRAME_REJECTED (documents why c2.11 needed its own reframe,
//           never shown to the learner); act 1 and the roundup paraphrase
//           both as "la charpente, la ligne de partage" instead, and cite
//           both lessons by trail position throughout. B225_REFRAME /
//           C121_REFRAME are imported and re-exported for this file's own
//           shape-matching only; nothing in SECTIONS renders them directly.
//   LEAVES  natural-speed listening for plan/position/tone to b2.25
//           (recapped, not re-taught); debate/interview turn-taking,
//           concession scope and analogy-in-context to c1.21 (recapped, not
//           re-taught); producing a spoken or written reply to no lesson in
//           this file (the band's PO lessons are c2.08/c2.09); dense
//           unsimplified reading to c2.12, this band's reading twin, cited
//           forward in the roundup only.
//
// ══════════════════════════════════════════════════════════════════════════
//  RISK FLAGGED PER THE BRIEF: ELEVENLABS VOICE AVAILABILITY
// ══════════════════════════════════════════════════════════════════════════
//
//   UNCONFIRMED at authoring time: multiple distinct voices speaking over
//   each other in one take, and genuinely distinct regional accents (not an
//   imitation) for Québec, Belgique, Suisse and Afrique de l'Ouest. Until
//   real voices land, every anchor is one fr-FR TTS voice, and no question
//   depends on actually HEARING an overlap or an accent rather than
//   reasoning about what the (TTS-flat) lines say. The acts MOST dependent
//   on this capability, flagged again in the build report: act 2 (two
//   voices truly overlapping), act 4 (a genuine Québécois voice), act 5 (a
//   genuine Belgian or Swiss voice), act 6 (a genuine West African voice),
//   and act 8, which needs the overlap PLUS the Swiss/Belgian and West
//   African accents together on a weakening phone line (not act 7's
//   construction-site ambience; STACKED_LINES has no construction noise,
//   and act 8 has no Québécois voice at all), making it the single highest-
//   risk scene in the lesson. Act 9's exam sittings need at least the West
//   African voice again (EXAM_B) to be worth anything beyond a words-only
//   exercise.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner throughout (there is no scenario, so no character
//   ever addresses the learner with vous). Natural, unsimplified C2 French,
//   with English on every learner string (`en`, or a final « EN: »). Every
//   `say` is French. Lessons cited by trail position in words, never a raw
//   id. Invented people, stations, shows, companies and files only; real
//   places used only as places. No em dash, no U+203F tie, no spaced ? or !
//   in a bubble. Curly ’ only, everywhere. Version 1 (a new lesson).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. See the ElevenLabs risk block above: confirm stacked/overlapping
//      voice feasibility and the four regional accents before any studio
//      booking, as the brief asked, not after the acts are scripted (they
//      now are).
//   2. No seed/Postgres row is reused anywhere in this draft (corpus file-
//      head note): every item is freshly authored under .2200-.2325. This
//      keeps the draft self-contained and avoids guessing at unread text,
//      at the cost of not recycling b2.25/c1.21 material the way earlier
//      lessons recycled their own predecessors. Accept, or should a later
//      pass pull in 1-2 verified b2.25/c1.21 rows for act 1's recap?
//   3. `Lesson.skill` is 'CO', matching b2.25 and c1.21's own convention for
//      a listening-comprehension lesson.
//   4. Sub-theme « compréhension orale experte » must be added to
//      strategies-de-comprehension's sub_themes at import.
//   5. 10 listenings, 0 readings, 0 trapDrills: this lesson spends its
//      entire practice budget on `commonErrors` and `groupDrill`, since a
//      trapDrill's own schema (TrapCard + an mcq-style `drill` round) adds
//      nothing a commonErrors swipe deck does not already cover for pure
//      recognition content, and the act budget was already tight at 55
//      missions across 9 acts.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, Cap, REFRAME, REFRAME_EN,
  ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE,
  SIGNAL_LINES, PANEL_LINES, MEDIATION_LINES, QUEBEC_LINES, SUPPORT_LINES, DAKAR_LINES,
  CHANTIER_LINES, STACKED_LINES, EXAM_A_LINES, EXAM_B_LINES,
  B225_REFRAME, B225_REFRAME_EN, C121_REFRAME, C121_REFRAME_EN,
  ECOUTE_B2_REF, DEBATS_C1_REF, LECTURE_C2_REF,
} from './ecoute-experte-corpus.ts';
import { ECOUTE_EXPERTE_TERMS } from './ecoute-experte-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });
/** An exam-format recording: ONE play at natural speed, no slow pass. */
const ONCE = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1], maxPlays: 1, recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en. Throws on a typo: everything here is this lesson's own
 *  row, since the corpus reuses no seed or Postgres id (file-head note). */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.11: no item ${id}`);
  return r;
}
/** Shorthand for this lesson's own rows. */
const S = (n: number) => src(E(n));

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c2.11: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`c2.11: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
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

/** THE « USE IT » BEAT, renamed for a diagnosis rather than a summary. */
function pourTonDiagnostic(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton diagnostic', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE SIGNAL PERDU
 *
 *  The problem, before any strategy: even at C2, a mild, single-obstacle
 *  clip (a Swiss caller, a brief overlap, a regional number) defeats a
 *  learner who is still listening for words rather than a signal.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Fréquence Monde, en direct',
  frSub: 'Un auditeur de Genève, une ligne qui grésille un peu',
  setting: { place: 'Un studio de radio généraliste', city: 'Paris', time: '19 h 02', ambience: 'un casque sur les oreilles, un retour studio léger, une ligne téléphonique en arrière-plan' },
  beats: [
    {
      kind: 'narration',
      text: 'Tu surveilles la bande-son d’une émission en direct. Ce soir, le télétravail transfrontalier, avec un auditeur de Genève au téléphone.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Ta collègue, au montage',
      fr: 'Tu me dis si l’auditeur passe bien, sa ligne a l’air un peu faible.',
      en: 'Tell me if the caller comes through fine, his line sounds a bit weak.',
      respell: '[tü muh dee see loh-dee-TEUR pass byehⁿ | sa LEENY a ler uhⁿ puh FEBL]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Nonante, canton de Vaud, France voisine. Je note les mots, mais je ne sais pas trop ce qui compte.',
      en: 'Ninety, canton of Vaud, neighbouring France. I’m noting the words, but I’m not quite sure what matters.',
      respell: '[no-NAHⁿT | kahⁿ-tohⁿ duh VOH | frahⁿs vwa-ZEEN | zhuh not lay MOH | meh zhuh nuh seh pa tro suh kee KOHⁿT]',
      stage: 'Tu as les mots. Tu ne sais pas lequel porte l’information, et lequel n’est que du bruit.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Ta collègue, au montage',
      fr: 'Pas les mots, un seul chiffre et une seule direction. C’est tout ce qu’il nous faut pour le sous-titre.',
      en: 'Not the words, one figure and one direction. That’s all we need for the subtitle.',
      respell: '[pa lay MOH | uhⁿ seul SHEEFR | ay ün seul dee-rek-SYOHⁿ | seh too suh keel noo foh poor luh soo-TEETR]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'La ligne de l’auditeur grésille une seconde. Comment écoutes-tu la suite ?',
      size: 'lg',
      options: [
        { fr: 'Je me concentre sur chaque mot, même ceux que je n’entends pas bien.', respell: '[zhuh muh kohⁿ-sahⁿtr sür shak MOH | mem seu kuh zhuh nahⁿ-tahⁿ pa byehⁿ]', en: 'I focus on every word, even the ones I can’t quite hear.', outcome: 'breaks', audio: AUDIO },
        { fr: S(2201).fr, respell: rsOf(E(2201)), en: S(2201).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Tu gardes le chiffre, le canton, la direction. Le grésillement passe, le signal reste.',
        breaks: 'Tu essaies de rattraper chaque syllabe grésillée, tu perds le fil, et tu rates le chiffre suivant.',
      },
    },
    {
      kind: 'break',
      heading: 'Un seul bruit, et déjà trop pour toi',
      body: `Ici, un seul bruit (une ligne faible) a suffi à te faire perdre le fil. Dans cette leçon, il y en aura quatre, parfois ensemble. EN: Here, a single kind of noise was enough to lose the thread. In this lesson there will be four, sometimes together.`,
      wrong: { fr: 'Je me concentre sur chaque mot, même ceux que je n’entends pas bien.', ipa: '/ʒə mə kɔ̃.sɑ̃tʁ syʁ ʃak mo mɛm sø kə ʒə nɑ̃.tɑ̃ pa bjɛ̃/', respell: '[zhuh muh kohⁿ-sahⁿtr sür shak MOH | mem seu kuh zhuh nahⁿ-tahⁿ pa byehⁿ]', en: 'I focus on every word, even the ones I can’t quite hear.' },
      right: { fr: S(2201).fr, ipa: ipaOf(E(2201)), respell: rsOf(E(2201)), en: S(2201).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: `Cette leçon t'apprend à suivre ${ECOUTE_B2_REF} et ${DEBATS_C1_REF} à travers quatre bruits réels, parfois empilés : des voix qui se chevauchent, un registre qui change, un accent inconnu, et un son qui s'abîme. Tu ne produis jamais rien : tu repères, tu classes, tu comprends.`,
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['signal'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Suivre deux voix à la fois', s: 'Acte 2 : le chevauchement, et qui reprend' },
    { t: 'Lire un changement de ton', s: 'Acte 3 : le registre comme information' },
    { t: 'Reconnaître des mots d’ailleurs', s: 'Actes 4 à 6 : Québec, Belgique, Suisse, Afrique de l’Ouest' },
    { t: 'Réparer un son abîmé', s: 'Acte 7 : trois pannes, trois réparations' },
    { t: 'Faire le tri sous pression', s: 'Actes 8 et 9 : tout en même temps, puis à l’épreuve' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a short, single-obstacle clip, hidden. */
const A1_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a1-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Fréquence Monde',
  frSub: 'Un auditeur de Genève, une ligne qui grésille un peu',
  lines: SIGNAL_LINES,
  questions: [
    { q: 'D’où appelle l’auditeur ?', opts: ['Bruxelles', 'Genève', 'Dakar'], correct: 1,
      why: 'Il est présenté comme un auditeur suisse dès l’ouverture. EN: introduced as a Swiss listener.' },
    { q: 'Quel pourcentage de hausse des loyers cite-t-il, en chiffres français standards ?', opts: ['quatre-vingt-dix pour cent', 'soixante-dix pour cent', 'cinquante pour cent'], correct: 0,
      why: 'Nonante, en français de Suisse, vaut quatre-vingt-dix. EN: nonante is ninety.' },
    { q: 'Au moment où l’auditeur termine sa phrase sur les loyers, que fait l’animatrice ?', opts: ['elle reprend le même chiffre pour le confirmer', 'elle le corrige', 'elle change de sujet'], correct: 0,
      why: 'Elle répète le chiffre, signe qu’elle l’a bien suivi malgré le léger chevauchement. EN: she repeats the figure to confirm it.' },
    { q: 'Vers où les habitants du canton partent-ils, selon l’auditeur ?', opts: ['vers l’Italie', 'de l’autre côté de la frontière française', 'vers l’Allemagne'], correct: 1,
      why: 'Il nomme la France voisine comme destination. EN: neighbouring France.' },
    { q: 'Pourquoi l’auditeur prévient-il l’animatrice vers la fin de son intervention ?', opts: ['parce que sa ligne peut grésiller', 'parce qu’il doit partir', 'parce qu’il n’est pas d’accord'], correct: 0,
      why: 'Il annonce lui-même la fragilité possible du signal. EN: he warns about his own weak signal.' },
  ],
  audio: REC('rec-c2-11-signal'),
  say: REFRAME,
  terms: ['signal'],
};

/** PRACTISE: sorting what is signal from what is bruit. */
const A1_DIAGNOSTIC: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-diagnostic',
  layer: 'core',
  size: 'lg',
  title: 'Signal, ou bruit ?',
  groups: [
    grp('Ce qui est le signal', [
      it(E(2206), 'ce qu’on garde'),
      it(E(2209), 'un mot perdu n’est pas le signal perdu'),
      it(E(2205), 'même mal transmis'),
    ], chk(
      'Tu perds un mot au milieu d’une phrase par ailleurs claire. As-tu perdu le signal ?',
      ['Non, un mot seulement.', 'Oui, toute la phrase est perdue.'], 0,
      'Le signal survit à un mot manquant si le reste tient. EN: the signal survives one missing word.')),
    grp('Les quatre bruits', [
      it(E(2202), 'quatre visages'),
      free('deux voix en même temps', 'two voices at once', 'le chevauchement'),
      free('un accent que tu n’as jamais entendu', 'an accent you have never heard', 'la variante régionale'),
    ], chk(
      'Lequel de ces quatre n’est PAS un bruit à trier dans cette leçon : le chevauchement, le registre, l’orthographe, l’accent ?',
      ['l’orthographe', 'le registre'], 0,
      'L’orthographe ne s’entend pas ; les quatre bruits de cette leçon sont tous audibles. EN: spelling is not something you hear.')),
    ctl('Le réflexe', 'Avant de réagir à un bruit, tu...',
      ['le nommes', 'l’ignores complètement', 'arrêtes d’écouter'], 0,
      'Nommer le bruit est le premier geste du triage, revu à l’acte 8. EN: naming the noise comes first.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['signal', 'triage'],
};

/** Where this matters in the real world. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Une visioconférence internationale, plusieurs sites, un micro qui sature', fr: S(2203).fr, en: S(2203).en },
    { situation: 'Un centre d’appel qui reçoit des clients de toute la francophonie', fr: 'L’accent n’est jamais le problème ; c’est le temps pour s’y ajuster qui compte.', en: 'The accent is never the problem; the time to adjust to it is what counts.' },
    { situation: 'Une archive radio à sous-titrer, son d’origine imparfait', fr: S(2280).fr, en: S(2280).en },
    { situation: 'Les épreuves DALF C2, TCF et TEF, une seule écoute', fr: S(2310).fr, en: S(2310).en },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['signal'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le réflexe', 'Un seul bruit vient de te faire perdre le fil. Que cherches-tu la prochaine fois ?',
    ['chaque mot, sans en rater un seul', 'le signal : le plan, la position, malgré le bruit'], 1,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le rappel', `${Cap(ECOUTE_B2_REF)} et ${DEBATS_C1_REF} t’ont appris à trouver le plan, les positions et la ligne de partage. Est-ce à refaire ici ?`,
    ['Oui, cette leçon réapprend tout cela.', 'Non, cette leçon part de là et ajoute le bruit par-dessus.'], 1,
    'Le signal est déjà acquis ; seul le bruit qui le recouvre est nouveau. EN: the signal is already known; only the noise on top is new.'),
  ctl('La promesse', 'À la fin de la leçon, que fais-tu, exactement ?',
    ['je parle à voix haute pour m’entraîner', 'j’écris un résumé noté', 'je repère, je classe et je comprends, sans rien produire'], 2,
    'Aucune mission de cette leçon ne demande de parler ni d’écrire une réponse. EN: no mission here asks you to speak or write a response.'),
], ['signal']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le signal perdu',
    opener: {
      line: 'Un seul bruit a suffi à te faire tout perdre : ici tu découvres les quatre bruits que cette leçon va trier, un par un, puis ensemble. EN: A single kind of noise was enough to lose you completely: here you discover the four kinds of noise this lesson will sort, one at a time, then together.',
      imageRef: 'lessons/c2-11-ecoute-experte/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais nommer les quatre bruits qui s’ajoutent au signal que tu savais déjà entendre. EN: You can name the four kinds of noise added on top of the signal you already knew how to hear.',
    estScreens: 24, restPoints: ['a1-ecoute'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_ECOUTE, A1_DIAGNOSTIC, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — DEUX VOIX À LA FOIS
 *
 *  TEXT: a Paris radio panel on rent caps; two panelists overlap for real.
 *  MOVE: track both positions through the overlap, use the host's recadrage
 *  to know who resumes, and never let a cut idea vanish.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_PANEL: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-panel',
  layer: 'core',
  hideLines: true,
  title: 'Plafonnement des loyers, le débat',
  frSub: 'Deux invités, une voix qui coupe l’autre',
  lines: PANEL_LINES,
  questions: [
    { q: 'Qui interrompt qui, au milieu de l’échange ?', opts: ['Camille interrompt Bertrand', 'Bertrand interrompt Camille', 'l’animateur interrompt les deux'], correct: 1,
      why: 'Il coupe sa phrase pour contester son chiffre. EN: he cuts her off to dispute her figure.' },
    { q: 'Quand l’animateur reprend la parole après le chevauchement, que fait-il exactement ?', opts: ['il relance la question vers l’invité coupé', 'il tranche le débat lui-même', 'il change complètement de sujet'], correct: 0,
      why: 'Il redonne la parole à celui dont la phrase avait été coupée. EN: he hands the floor back to the one who was cut off.' },
    { q: 'Quel chiffre de hausse des loyers Bertrand avance-t-il ?', opts: ['vingt pour cent', 'huit pour cent', 'trente pour cent'], correct: 1,
      why: 'Il avance ce chiffre officiel pour contredire sa collègue. EN: he puts forward this official figure to contradict his colleague.' },
    { q: 'Que défend surtout Camille dans ce désaccord ?', opts: ['que les loyers réels ont plus augmenté que les chiffres officiels', 'que les propriétaires ont raison', 'qu’il n’y a pas de problème de logement'], correct: 0,
      why: 'Elle oppose les petites annonces aux chiffres officiels. EN: she sets the classified ads against the official figures.' },
    { q: 'Qui parle en dernier avant la pause ?', opts: ['Camille', 'Bertrand', 'l’animateur'], correct: 2,
      why: 'Il referme ce segment en annonçant la vérification à venir. EN: he closes the segment, announcing the fact-check to come.' },
  ],
  audio: REC('rec-c2-11-panel'),
  say: REFRAME,
  terms: ['chevauchement'],
};

/** NOTICE THE MOVE: the landmarks of an overlap. */
const A2_REPERES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-reperes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-signal',
  title: 'Les repères du chevauchement',
  frSub: 'Recadrer, monter le ton, reprendre, séparer',
  hint: 'Quatre cartes. Chaque repère te dit quoi faire pendant ou après un chevauchement.',
  audio: REC('rec-c2-11-reperes'),
  say: REFRAME,
  terms: ['chevauchement'],
  cards: [
    { head: 'Le recadrage', label: 'l’animateur reprend la main',
      fr: S(2214).fr, sub: rsOf(E(2214)),
      body: 'Un animateur qui répète la question remet les deux voix sur une seule piste : attends ce repère plutôt que de trancher toi-même. EN: a repeated question is your cue that the floor is being reorganised.' },
    { head: 'La voix qui monte', label: 'rarement celle qui gagne le temps',
      fr: S(2212).fr, sub: rsOf(E(2212)),
      body: 'Celle qui hausse le ton insiste, mais garde rarement la parole plus longtemps que l’autre. EN: the louder voice rarely keeps the floor longer.' },
    { head: 'La reprise', label: 'après le trou',
      fr: S(2215).fr, sub: rsOf(E(2215)),
      body: '« Comme je le disais » annonce qu’une idée coupée revient, presque mot pour mot. EN: a cut idea often comes back almost unchanged.' },
    { head: 'Séparer, ne pas fusionner', label: 'deux idées, jamais une',
      fr: S(2216).fr, sub: rsOf(E(2216)),
      body: 'Deux voix en même temps restent deux idées distinctes ; range-les dans deux cases, jamais une seule. EN: two overlapping voices stay two separate ideas.' },
  ],
};

/** PRACTISE, on new material. */
const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Qui garde la parole ?',
  groups: [
    grp('Le chevauchement avance', [
      it(E(2217), 'mise de côté, pas effacée'),
      it(E(2218), 'le silence qui annonce une reprise'),
      it(E(2220), 'le prénom, ton repère'),
    ], chk(
      'Après un silence d’une seconde qui suit un chevauchement, tu t’attends surtout à...',
      ['une reprise de l’une des deux voix', 'la fin complète de l’échange'], 0,
      'Le silence bref annonce presque toujours une reprise. EN: a brief silence usually signals a resumption.')),
    grp('Deux idées, pas une bouillie', [
      it(E(2221), 'deux phrases collées, deux idées'),
      it(E(2222), 'noter séparément'),
      it(E(2223), 'cachée, pas effacée'),
    ], chk(
      'Tu as entendu deux phrases collées. Combien d’idées notes-tu, au minimum ?',
      ['une seule, la plus claire', 'deux, séparément'], 1,
      'Un chevauchement cache une idée, il ne la supprime pas. EN: an overlap hides an idea, it does not remove it.')),
    ctl('Le repère', 'Dans un brouhaha à plusieurs voix, ton meilleur repère pour savoir qui va parler est...',
      ['le volume de la voix', 'le prénom que l’animateur lance', 'la vitesse de la phrase'], 1,
      'Le prénom précède presque toujours la parole qui suit. EN: the first name usually comes right before the turn.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chevauchement'],
};

/** PRACTISE: four ways a listener mishandles an overlap. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de perdre une voix',
  errors: [
    { wrong: 'Je ne retiens que la phrase de la voix la plus forte.',
      right: 'Je garde les deux positions, même si l’une a été dite plus fort.',
      why: 'Le volume ne dit rien de l’importance de l’idée. EN: volume says nothing about how important an idea is.' },
    { wrong: 'Dès qu’il y a chevauchement, j’arrête de noter.',
      right: 'Je continue de noter la voix que je suis, et je reviens vers l’autre après.',
      why: 'Arrêter de noter fait perdre les deux voix, pas une seule. EN: stopping loses both voices, not just one.' },
    { wrong: 'J’attribue la phrase coupée à la première personne qui reparle.',
      right: 'J’attends le prénom donné par l’animateur avant d’attribuer une phrase.',
      why: 'Sans ce repère, une phrase peut être attribuée à la mauvaise voix. EN: without that cue, a line can be attributed to the wrong voice.' },
    { wrong: 'Une idée coupée est une idée perdue.',
      right: 'Une idée coupée revient presque toujours, souvent mot pour mot.',
      why: '« Comme je le disais » la ramène intacte. EN: comme je le disais brings it back intact.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chevauchement'],
};

/** USE IT: the overlap becomes two lines in the diagnosis, not one. */
const A2_DIAGNOSTIC = pourTonDiagnostic('a2-diagnostic', 'Deux voix, deux lignes', [
  grp('Deux façons de traiter l’échange', [
    free('Camille : loyers réels > chiffres officiels | Bertrand : chiffres préfecture = 8 %, pas 20 %', 'Camille: real rents > official figures | Bertrand: prefecture figures = 8%, not 20%', 'deux lignes séparées'),
    free('les deux parlent des loyers et des chiffres', 'both talk about rents and figures', 'une seule ligne, tout mélangé'),
  ], chk(
    'Laquelle de ces deux notes dit encore qui défend quoi, après le chevauchement ?',
    ['la première', 'la seconde'], 0,
    'La première garde chaque position séparée malgré le chevauchement. EN: the first keeps each position separate despite the overlap.')),
  grp('Ta règle', [
    it(E(2210), 'deux voix, pas deux fois rien'),
    it(E(2219), 'reprendre son idée'),
  ], chk(
    'Tu as noté une seule idée pour deux voix qui se chevauchaient. Que dois-tu faire ?',
    ['séparer en deux lignes avant de continuer', 'laisser comme ça, ça ira'], 0,
    'Fusionner deux positions en une seule efface une des deux voix. EN: merging two positions into one erases one of the voices.')),
], ['chevauchement']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le chevauchement', 'Deux invités parlent en même temps. Ta priorité est de...',
    ['deviner laquelle des deux phrases est vraie', 'garder le fil des deux, séparément'], 1,
    'Les deux sont vraies, chacune pour sa propre position. EN: both are true, each for its own position.'),
  ctl('Le recadrage', 'Quand l’animateur répète la question après un chevauchement, il...',
    ['change de sujet', 'remet chacun sur une seule piste'], 1,
    'La répétition de la question réorganise le tour de parole. EN: repeating the question reorganises the turn.'),
  ctl('La reprise', 'Une idée coupée par un chevauchement...',
    ['disparaît le plus souvent', 'revient presque toujours, plus loin'], 1,
    'Guette « comme je le disais » ou une formule proche. EN: watch for comme je le disais or a similar cue.'),
], ['chevauchement']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Deux voix à la fois',
    opener: {
      line: 'Deux invités parlent en même temps : ici tu apprends à garder les deux fils plutôt que de n’en choisir qu’un. EN: Two guests talk at once: here you learn to keep both threads rather than picking only one.',
      imageRef: 'lessons/c2-11-ecoute-experte/act02.jpg',
    },
    sections: [],
    milestone: 'Tu sépares deux positions même quand elles se chevauchent, et tu sais repérer la reprise. EN: You can separate two positions even when they overlap, and spot the resumption.',
    estScreens: 28, restPoints: ['a2-panel'],
  },
  sections: [A2_PANEL, A2_REPERES, A2_TRIER, A2_ERREURS, A2_DIAGNOSTIC, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE REGISTRE QUI BASCULE
 *
 *  TEXT: a tenant/notary mediation call. MOVE: a register shift mid-exchange
 *  read as an attitude change (anger, distance, a request), never as noise.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_MEDIATION: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-mediation',
  layer: 'core',
  hideLines: true,
  title: 'Un appel de médiation',
  frSub: 'Le ton du locataire change deux fois',
  lines: MEDIATION_LINES,
  questions: [
    { q: 'Au début de l’échange, quel registre domine chez le locataire ?', opts: ['très soutenu', 'courant', 'très familier'], correct: 1,
      why: 'Il parle simplement, sans relâchement ni grande formalité. EN: plain speech, neither very formal nor very casual.' },
    { q: 'Que se passe-t-il dans son registre quand il s’énerve ?', opts: ['il devient plus soutenu', 'il bascule vers le familier', 'il ne change rien'], correct: 1,
      why: 'Son vocabulaire et son ton se relâchent nettement. EN: his wording and tone loosen noticeably.' },
    { q: 'Vers la fin de l’appel, pourquoi redevient-il plus soutenu ?', opts: ['il demande une faveur et change de posture', 'la médiatrice l’y oblige', 'il change complètement de sujet'], correct: 0,
      why: 'Une demande de faveur s’accompagne souvent d’un retour au soutenu. EN: a request for a favour often comes with a return to formality.' },
    { q: 'Qui garde le même registre du début à la fin de l’appel ?', opts: ['le locataire', 'la médiatrice', 'aucun des deux'], correct: 1,
      why: 'Elle reste soutenue, quelle que soit la tension. EN: she stays formal regardless of the tension.' },
    { q: 'Ce changement de registre chez le locataire signale surtout...', opts: ['une émotion, pas une confusion de vocabulaire', 'une erreur de langue', 'un changement de sujet'], correct: 0,
      why: 'Le registre porte l’émotion, le sujet reste le même tout l’appel. EN: register carries the emotion; the topic never changes.' },
  ],
  audio: REC('rec-c2-11-mediation'),
  say: REFRAME,
  terms: ['registre'],
};

/** NOTICE THE MOVE: what each register, and each shift, signals. */
const A3_REPERES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-reperes',
  layer: 'core',
  sheetId: 'sheet-signal',
  title: 'Un registre, et ce qu’il signale',
  cols: ['Tu entends', 'Le registre', 'Ce que ça signale souvent'],
  rows: [
    { cells: ['vouvoiement constant, vocabulaire choisi', 'soutenu', 'distance, prudence, ou protection'], say: S(2232).fr,
      detail: { title: 'Le soutenu, qui protège', body: 'Un professionnel au téléphone garde souvent le soutenu comme une armure, surtout si la discussion se tend. EN: a professional often keeps formal speech as a kind of armour.', say: S(2232).fr } },
    { cells: ['du courant qui glisse vers des mots familiers', 'la bascule', 'une émotion contenue'], say: S(2228).fr,
      detail: { title: 'La bascule vers le familier', body: 'Le passage soudain au familier accompagne presque toujours une émotion, rarement une simple habitude. EN: a sudden shift to informal speech almost always comes with an emotion.', say: S(2228).fr } },
    { cells: ['un retour soudain au vouvoiement, après du tutoiement', 'le retour au soutenu', 'une distance qu’on referme, ou une demande qui arrive'], say: S(2229).fr,
      detail: { title: 'Le retour au soutenu', body: 'Celui qui redevient soutenu referme une proximité qu’il venait d’ouvrir, souvent pour demander quelque chose. EN: returning to formal speech often precedes a request.', say: S(2237).fr } },
    { cells: ['un registre très familier chez un professionnel', 'l’anomalie', 'rarement un hasard'], say: S(2233).fr,
      detail: { title: 'L’anomalie professionnelle', body: 'Un professionnel qui parle en argot avec un client signale presque toujours quelque chose : fatigue, complicité recherchée, ou colère. EN: an unusually informal professional is signalling something.', say: S(2233).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

/** PRACTISE, on new material. */
const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-trier',
  layer: 'core',
  size: 'lg',
  title: 'Confusion, ou posture ?',
  groups: [
    grp('Ce que le registre dit', [
      it(E(2224), 'souvent le message'),
      it(E(2230), 'pas une confusion, une posture'),
      it(E(2235), 'repérer, puis se demander pourquoi'),
    ], chk(
      'Un interlocuteur très soutenu bascule soudain vers un mot très familier. Penses-tu qu’il a fait une erreur de français ?',
      ['Oui, probablement.', 'Non, c’est rarement une erreur.'], 1,
      'Un locuteur de ce niveau choisit son registre ; le changement est un signal, pas une faute. EN: at this level, a shift is a signal, not a mistake.')),
    grp('Qui domine l’échange', [
      it(E(2236), 'le registre dit qui domine'),
      it(E(2234), 'deux versions d’une même colère'),
    ], chk(
      'Entre deux professionnels du même métier, celui qui garde le registre le plus soutenu, le plus longtemps, est souvent...',
      ['celui qui perd le contrôle de l’échange', 'celui qui garde le contrôle de l’échange'], 1,
      'Garder son registre est aussi garder la main sur l’échange. EN: keeping your register is also keeping control of the exchange.')),
    ctl('Le réflexe', 'Face à une bascule de registre, ta première question est...',
      ['qu’est-ce que ça signale ?', 'est-ce une faute de français ?'], 0,
      'Le réflexe est de chercher le signal, jamais la faute. EN: the reflex is to look for the signal, never the mistake.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

/** PRACTISE: four ways a listener misreads a register shift. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de mal lire une bascule',
  errors: [
    { wrong: 'Il parle mal, il a dû perdre patience avec la langue elle-même.',
      right: 'Il a perdu patience avec la situation, pas avec la langue.',
      why: 'Le registre change parce que l’émotion change, jamais parce que la compétence baisse. EN: register shifts with emotion, never with competence.' },
    { wrong: 'Puisqu’il revient au soutenu, tout va bien, la tension est retombée.',
      right: 'Le retour au soutenu accompagne souvent une demande, pas forcément la fin de la tension.',
      why: 'Il referme la proximité pour demander une faveur, la tension reste présente. EN: he closes the proximity to ask a favour; the tension can remain.' },
    { wrong: 'Un professionnel qui parle en argot à un client a sûrement changé d’avis sur le sujet.',
      right: 'Un professionnel qui parle en argot signale quelque chose sur la relation, pas forcément sur le sujet.',
      why: 'Le registre porte une information sur l’ÉCHANGE, pas toujours sur le CONTENU. EN: register carries information about the exchange, not always the content.' },
    { wrong: 'Je note seulement ce que chacun dit, jamais comment il le dit.',
      right: 'Je note le registre autant que le contenu : il fait partie du message.',
      why: 'Ignorer le registre, c’est perdre la moitié de l’information. EN: ignoring register loses half the information.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

/** USE IT: a register note alongside a content note. */
const A3_DIAGNOSTIC = pourTonDiagnostic('a3-diagnostic', 'Le contenu, et le registre à côté', [
  grp('Deux notes pour le même appel', [
    free('préavis de 3 mois (clause) | locataire : soutenu > familier (énervé) > soutenu (demande)', 'three months’ notice (clause) | tenant: formal > informal (annoyed) > formal (request)', 'contenu et registre, côte à côte'),
    free('le locataire n’est pas content du préavis de trois mois', 'the tenant is unhappy about the three months’ notice', 'seulement le contenu'),
  ], chk(
    'Laquelle de ces deux notes dit aussi POURQUOI le ton a changé ?',
    ['la première', 'la seconde'], 0,
    'La première trace le registre à côté du contenu, la seconde l’ignore. EN: the first tracks register alongside content; the second ignores it.')),
  grp('Ta règle', [
    it(E(2226), 'un même mot, deux sens'),
    it(E(2231), 'reprendre ses distances'),
  ], chk(
    'Tu entends un mot très familier chez quelqu’un de très soutenu jusque-là. Tu notes...',
    ['le mot, et le fait que le registre a changé', 'seulement le mot'], 0,
    'Le changement lui-même est une partie de l’information. EN: the shift itself is part of the information.')),
], ['registre']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le réflexe', 'Une bascule de registre te dit surtout...', ['une émotion ou une posture', 'une faute de français'], 0,
    'Un changement de registre informe plutôt qu’il ne trahit une erreur. EN: a register shift informs rather than betraying an error.'),
  ctl('Le retour au soutenu', 'Il annonce souvent...', ['la fin de toute tension', 'une demande qui arrive'], 1,
    'Refermer la distance précède souvent une requête. EN: closing the distance often precedes a request.'),
  ctl('La note', 'Dans tes notes, le registre va...', ['à côté du contenu, jamais à sa place', 'nulle part, seul le contenu compte'], 0,
    'Le registre et le contenu se notent ensemble, pas l’un à la place de l’autre. EN: register and content are noted together.'),
], ['registre']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le registre qui bascule',
    opener: {
      line: 'Un appel où le ton change deux fois : ici tu apprends à lire une bascule de registre comme une information, jamais comme une faute. EN: A call where the tone shifts twice: here you learn to read a register shift as information, never as an error.',
      imageRef: 'lessons/c2-11-ecoute-experte/act03.jpg',
    },
    sections: [],
    milestone: 'Tu lis un changement de registre comme un signal d’attitude, et tu sais ce qu’annonce un retour au soutenu. EN: You can read a register shift as a signal of attitude, and know what a return to formality often announces.',
    estScreens: 28, restPoints: ['a3-mediation'],
  },
  sections: [A3_MEDIATION, A3_REPERES, A3_TRIER, A3_ERREURS, A3_DIAGNOSTIC, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — DES MOTS D’AILLEURS : LE QUÉBEC
 *
 *  TEXT: a Québec remote-work interview. MOVE: resolve unfamiliar regional
 *  vocabulary from context, without stalling, dîner/souper above all.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_INTERVIEW: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-interview',
  layer: 'core',
  hideLines: true,
  title: 'Une entreprise de Québec',
  frSub: 'Dîner, souper, et quelques mots de tous les jours',
  lines: QUEBEC_LINES,
  questions: [
    { q: 'Dans cette entreprise québécoise, à quel moment de la journée l’équipe « dîne »-t-elle ensemble ?', opts: ['le matin', 'le midi', 'le soir'], correct: 1,
      why: 'Au Québec, dîner désigne le repas de midi. EN: in Québec, dîner means the midday meal.' },
    { q: 'Que répond l’invité quand on lui demande si le bureau reste cher pour l’entreprise ?', opts: ['qu’il coûte plus cher qu’avant', 'qu’il ne coûte pas plus cher, au contraire', 'il ne répond pas vraiment'], correct: 1,
      why: 'Il annonce même une sous-location. EN: he even mentions subletting a floor.' },
    { q: 'Pourquoi certains employés « achalent », selon l’invité ?', opts: ['ils veulent revenir cinq jours sur site', 'ils veulent rester chez eux tout le temps', 'ils veulent démissionner'], correct: 0,
      why: 'Ils réclament un retour complet au bureau. EN: they are pushing for a full return to the office.' },
    { q: 'Que signale « faque » dans ce que dit l’invité ?', opts: ['une opposition', 'une conséquence, comme donc ou alors', 'une question'], correct: 1,
      why: 'Faque introduit la conséquence de ce qui précède. EN: faque introduces a consequence.' },
    { q: 'L’entreprise a-t-elle gardé tout son espace de bureau ?', opts: ['non, elle en a sous-loué une partie', 'oui, elle en a même pris plus'], correct: 0,
      why: 'Un étage a été sous-loué. EN: a floor was sublet.' },
  ],
  audio: REC('rec-c2-11-quebec'),
  say: REFRAME,
  terms: ['quebecois'],
};

/** NOTICE THE MOVE: a small glossary, linked to the regional-accent sheet. */
const A4_GLOSSAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-glossaire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accents',
  title: 'Des mots du Québec',
  frSub: 'Jamais une faute, toujours un mot de tous les jours',
  hint: 'Quatre cartes. Chacune te donne un mot, et comment le résoudre par le contexte.',
  audio: REC('rec-c2-11-glossaire-quebec'),
  say: REFRAME,
  terms: ['quebecois'],
  cards: [
    { head: 'Dîner, souper', label: 'le piège le plus net',
      fr: S(2238).fr, sub: rsOf(E(2238)),
      body: 'Si une phrase sur un « dîner » mentionne un bureau et une heure avancée, le contexte confirme le midi, pas le soir. EN: context (an office, a daytime hour) confirms dîner means lunch.' },
    { head: 'Faque', label: 'fait que, donc',
      fr: S(2239).fr, sub: rsOf(E(2239)),
      body: 'Faque introduit toujours une conséquence : ce qui suit découle de ce qui précède. EN: faque always introduces a consequence.' },
    { head: 'Pantoute', label: 'pas du tout',
      fr: S(2241).fr, sub: rsOf(E(2241)),
      body: 'Une négation renforcée, à ne pas confondre avec une hésitation. EN: a reinforced negation, not a hesitation.' },
    { head: 'Achaler', label: 'déranger, harceler gentiment',
      fr: S(2248).fr, sub: rsOf(E(2248)),
      body: 'Toujours négatif, mais léger : on achale pour un dossier, pas pour un crime. EN: always negative, but mild.' },
  ],
};

/** PRACTISE, on new material. */
const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-trier',
  layer: 'core',
  size: 'lg',
  title: 'Résoudre par le contexte',
  groups: [
    grp('Des mots de tous les jours', [
      it(E(2244), 'un breuvage, toute boisson'),
      it(E(2246), 'c’est correct, c’est bon'),
      it(E(2249), 'dispendieux, cher'),
    ], chk(
      'Tu entends « c’est dispendieux ». Le contexte parle d’un prix. Tu comprends...',
      ['que c’est bon marché', 'que c’est cher'], 1,
      'Dispendieux signifie cher ; le contexte (un prix) confirme ce sens. EN: dispendieux means expensive.')),
    grp('L’emphase, pas la confusion', [
      it(E(2242), 'là là, une emphase'),
      it(E(2251), 'la particule -tu'),
    ], chk(
      '« Ça se décide-tu avant vendredi ? » Le « -tu » ajouté au verbe est...',
      ['une erreur de conjugaison', 'une marque de question, à l’oral'], 1,
      'Cette particule interrogative est courante à l’oral québécois, jamais une faute. EN: a common oral interrogative marker, never an error.')),
    ctl('Le réflexe', 'Tu ne reconnais pas un mot québécois. Ta priorité est de...',
      ['arrêter d’écouter pour y réfléchir', 'continuer, et laisser le contexte qui suit confirmer le sens'], 1,
      'S’arrêter fait perdre la phrase suivante, qui confirme souvent le sens. EN: stopping loses the next sentence, which often confirms the meaning.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quebecois'],
};

/** PRACTISE: four ways a listener derails on regional vocabulary. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de se bloquer sur un mot',
  errors: [
    { wrong: 'On me parle de « dîner » le soir, donc je comprends un dîner comme en France.',
      right: 'Au Québec, je vérifie l’heure et le contexte avant de fixer le sens de dîner.',
      why: 'Le mot seul ne tranche pas ; l’heure donnée dans la phrase tranche. EN: the word alone does not decide; the time given in the sentence does.' },
    { wrong: 'Un mot québécois inconnu arrête toute ma compréhension de la phrase.',
      right: 'Un mot inconnu n’arrête que ce mot ; je garde le reste de la phrase.',
      why: 'La charpente de la phrase tient sans ce mot. EN: the sentence’s frame holds without that one word.' },
    { wrong: 'Je traite chaque régionalisme comme une erreur de français à corriger.',
      right: 'Je traite chaque régionalisme comme un mot légitime à comprendre.',
      why: 'Le français du Québec n’est pas une version fautive du français. EN: Québécois French is not a flawed version of French.' },
    { wrong: 'J’essaie de deviner le sens d’un mot inconnu avant la fin de la phrase.',
      right: 'J’attends la fin de la phrase, voire la phrase suivante, pour confirmer le sens.',
      why: 'Deviner trop vite risque de verrouiller un mauvais sens. EN: guessing too fast risks locking in the wrong meaning.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quebecois'],
};

/** USE IT: a regional word resolved and logged, not looked up mid-flow. */
const A4_DIAGNOSTIC = pourTonDiagnostic('a4-diagnostic', 'Résolu par le contexte, pas par pause', [
  grp('Deux façons de traiter un mot inconnu', [
    free('« achalent pour revenir cinq jours » : contexte = bureau, cinq jours → achaler = réclamer en insistant', '“achalent to come back five days”: context = office, five days → achaler = to keep pushing for', 'résolu, sans s’arrêter'),
    free('je ne connais pas achaler, je passe à la ligne suivante sans y revenir', 'I don’t know achaler, I move to the next line without coming back to it', 'ignoré, jamais résolu'),
  ], chk(
    'Laquelle des deux approches garde l’information que les employés veulent revenir cinq jours ?',
    ['la première', 'la seconde'], 0,
    'Résoudre le mot par le contexte garde l’information ; l’ignorer la perd. EN: resolving the word from context keeps the information; ignoring it loses it.')),
  grp('Ta règle', [
    it(E(2238), 'dîner, souper : la règle'),
    it(E(2247), 'achaler quelqu’un'),
  ], chk(
    'Face à un mot québécois inconnu, ton réflexe est de...',
    ['noter le mot comme « ? » et continuer, puis résoudre avec le contexte suivant', 'deviner tout de suite une traduction au hasard'], 0,
    'Le « ? » marque le trou sans arrêter l’écoute ; le contexte le remplit ensuite. EN: the question mark holds the gap without stopping you; context fills it in.')),
], ['quebecois']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Dîner, souper', 'Au Québec, dîner désigne...', ['le repas du soir', 'le repas de midi'], 1,
    'Dîner, c’est le midi ; souper, le soir. EN: dîner is lunch; souper is dinner.'),
  ctl('Le réflexe', 'Devant un mot régional inconnu, tu...', ['arrêtes d’écouter pour y réfléchir', 'continues, et laisses le contexte confirmer le sens'], 1,
    'Le contexte qui suit confirme presque toujours le sens. EN: the context that follows almost always confirms the meaning.'),
  ctl('Le statut du mot', 'Un régionalisme québécois est...', ['une faute de français à corriger', 'un mot légitime à comprendre'], 1,
    'Le français du Québec n’est pas une version fautive du français. EN: it is not a flawed version of French.'),
], ['quebecois']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Des mots d’ailleurs : le Québec',
    opener: {
      line: 'Dîner, souper, faque, pantoute : ici tu apprends à résoudre un mot québécois par son contexte, sans jamais t’arrêter. EN: Dîner, souper, faque, pantoute: here you learn to resolve a Québécois word from its context, without ever stopping.',
      imageRef: 'lessons/c2-11-ecoute-experte/act04.jpg',
    },
    sections: [],
    milestone: 'Tu résous un mot québécois inconnu par le contexte, sans perdre le fil de la phrase. EN: You can resolve an unfamiliar Québécois word from context, without losing the thread of the sentence.',
    estScreens: 28, restPoints: ['a4-interview'],
  },
  sections: [A4_INTERVIEW, A4_GLOSSAIRE, A4_TRIER, A4_ERREURS, A4_DIAGNOSTIC, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — DES MOTS D’AILLEURS : BELGIQUE ET SUISSE
 *
 *  TEXT: a support call between a Belgian client and a Swiss agent. MOVE:
 *  numeric precision under regional number words, plus a small vocabulary.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_SUPPORT: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-support',
  layer: 'core',
  hideLines: true,
  title: 'Le support technique',
  frSub: 'Septante, une action, et un peu de cheni',
  lines: SUPPORT_LINES,
  questions: [
    { q: 'À en juger par son vocabulaire, de quelle région l’agente du support semble-t-elle être ?', opts: ['belge', 'suisse', 'française'], correct: 1,
      why: 'Poutzer et natel sont des usages suisses. EN: poutzer and natel are Swiss usages.' },
    { q: 'Jusqu’à quand dure la promotion sur les imprimantes ?', opts: ['lundi', 'mercredi', 'vendredi'], correct: 2,
      why: 'L’action est annoncée jusqu’à vendredi. EN: the offer runs until Friday.' },
    { q: 'Depuis combien de temps le client a-t-il son imprimante, en nombre standard ?', opts: ['soixante-dix-sept mois', 'dix mois', 'soixante-dix mois'], correct: 2,
      why: 'Septante vaut soixante-dix. EN: septante means seventy.' },
    { q: 'Pourquoi le client ne peut-il pas lire tout de suite la référence demandée par l’agente ?', opts: ['il n’a pas ses lunettes', 'l’étiquette est sale', 'l’imprimante est éteinte'], correct: 1,
      why: 'Il évoque un désordre qui recouvre les informations collées sur l’appareil. EN: he mentions a mess covering the information stuck on the device.' },
    { q: 'Sur quel type d’appareil le client va-t-il rappeler ?', opts: ['son téléphone fixe', 'son téléphone portable', 'par courriel uniquement'], correct: 1,
      why: 'Il annonce rappeler sur son natel. EN: he says he’ll call back on his mobile.' },
  ],
  audio: REC('rec-c2-11-support'),
  say: REFRAME,
  terms: ['belgeSuisse'],
};

/** NOTICE THE MOVE: numbers first, then a small vocabulary. */
const A5_NOMBRES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-nombres',
  layer: 'core',
  sheetId: 'sheet-accents',
  title: 'Les dizaines, autrement',
  cols: ['Tu entends', 'Ça veut dire', 'Où'],
  rows: [
    { cells: ['septante', 'soixante-dix (70)', 'Belgique, Suisse'], say: S(2252).fr,
      detail: { title: 'Septante', body: 'Toujours soixante-dix, jamais soixante-dix-sept ni autre chose : un simple remplacement du mot. EN: always seventy, a straight word substitution.', say: S(2253).fr } },
    { cells: ['huitante', 'quatre-vingts (80)', 'Suisse seulement'], say: 'Huitante personnes étaient présentes à la réunion.',
      detail: { title: 'Huitante', body: 'Seule la Suisse utilise huitante ; la Belgique garde quatre-vingts comme en France. EN: only Switzerland uses huitante.', say: 'Quatre-vingts, ou huitante en Suisse, c’est le même nombre.' } },
    { cells: ['nonante', 'quatre-vingt-dix (90)', 'Belgique, Suisse'], say: S(2254).fr,
      detail: { title: 'Nonante', body: 'Nonante vaut quatre-vingt-dix partout où septante et huitante existent. EN: ninety, wherever septante and huitante exist.', say: S(2254).fr } },
    { cells: ['une fois', 'un mot de remplissage, sans sens propre', 'Belgique'], say: S(2256).fr,
      detail: { title: 'Une fois', body: 'Une fois n’ajoute aucune information : tu peux l’ignorer sans rien perdre du sens. EN: adds no information; safe to ignore.', say: S(2256).fr } },
    { cells: ['le natel', 'le téléphone portable', 'Suisse'], say: S(2262).fr,
      detail: { title: 'Le natel', body: 'Le mot courant pour portable en Suisse, jamais une marque précise. EN: the ordinary Swiss word for a mobile phone.', say: S(2262).fr } },
    { cells: ['le cheni', 'le désordre, la saleté', 'Suisse'], say: S(2265).fr,
      detail: { title: 'Le cheni', body: 'Un mot suisse pour désigner un désordre, sans aucune idée de danger. EN: a Swiss word for mess or clutter.', say: S(2265).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['belgeSuisse'],
};

/** PRACTISE, on new material. */
const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-trier',
  layer: 'core',
  size: 'lg',
  title: 'Le bon nombre, le bon sens',
  groups: [
    grp('Convertir sans hésiter', [
      free('septante-cinq', '75', 'addition simple : 70 + 5'),
      free('nonante-huit', '98', 'addition simple : 90 + 8'),
      it(E(2258), 'savoir, pour pouvoir'),
    ], chk(
      'Tu entends « nonante-deux dossiers ». Combien de dossiers, en nombre standard ?',
      ['quatre-vingt-douze', 'quatre-vingt-deux'], 0,
      'Nonante = 90, plus deux = 92. EN: nonante is 90, plus two is 92.')),
    grp('Des mots sans équivalent exact', [
      it(E(2259), 'ça goûte quoi ?'),
      it(E(2264), 'une action, une promotion'),
    ], chk(
      '« Il y a une action sur les imprimantes. » De quoi s’agit-il ?',
      ['une manifestation', 'une promotion, un prix réduit'], 1,
      'Action, en Suisse, désigne une offre commerciale, pas un mouvement social. EN: in Switzerland, action means a special offer.')),
    ctl('Le réflexe', 'Face à un nombre dit en septante, nonante ou huitante, tu...',
      ['devines approximativement', 'convertis précisément avant de noter'], 1,
      'Une épreuve ou un dossier professionnel exige le bon chiffre, pas une approximation. EN: an exam or a professional file needs the exact figure.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['belgeSuisse'],
};

/** PRACTISE: four ways a listener mishandles regional numbers and words. */
const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de perdre un chiffre',
  errors: [
    { wrong: '« Nonante » ressemble à « neuf », donc je note 9.',
      right: '« Nonante » veut dire quatre-vingt-dix (90).',
      why: 'La ressemblance sonore trompe ; seule la conversion exacte compte. EN: the sound resemblance misleads; only the exact conversion counts.' },
    { wrong: 'Je suppose que huitante existe aussi en Belgique.',
      right: 'Huitante n’existe qu’en Suisse ; la Belgique garde quatre-vingts.',
      why: 'Les deux régions ne partagent pas exactement le même système. EN: the two regions do not share exactly the same system.' },
    { wrong: 'Un mot régional inconnu comme « cheni » m’oblige à arrêter l’écoute pour le chercher.',
      right: 'Je laisse « cheni » comme un trou provisoire et je continue, le contexte confirmera.',
      why: 'S’arrêter coûte plus que ce que le mot seul vaut. EN: stopping costs more than the word itself is worth.' },
    { wrong: 'Je traite « une fois » comme une information à noter.',
      right: 'Je laisse passer « une fois », un mot de remplissage sans sens propre.',
      why: 'Le noter encombre la note sans rien ajouter. EN: noting it clutters your notes for nothing.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['belgeSuisse'],
};

/** USE IT: a converted number, logged precisely. */
const A5_DIAGNOSTIC = pourTonDiagnostic('a5-diagnostic', 'Le chiffre exact, pas l’impression', [
  grp('Deux façons de noter un nombre régional', [
    free('imprimante : 70 mois | promo imprimantes : jusqu’à vendredi', 'printer: 70 months | printer offer: until Friday', 'converti, précis'),
    free('imprimante : assez vieille | promo : bientôt', 'printer: fairly old | offer: soon', 'approximatif, flou'),
  ], chk(
    'Laquelle des deux notes permettrait de répondre à une question précise sur la date limite de l’offre ?',
    ['la première', 'la seconde'], 0,
    'La conversion précise permet une réponse exacte ; l’impression ne le permet pas. EN: the precise conversion allows an exact answer; the impression does not.')),
  grp('Ta règle', [
    it(E(2252), 'les dizaines, autrement'),
    it(E(2261), 'le natel, pour le portable'),
  ], chk(
    'Face à septante, huitante ou nonante, ton réflexe est de...',
    ['convertir tout de suite en nombre standard', 'noter le mot tel quel, sans le convertir'], 0,
    'Convertir immédiatement évite une erreur de chiffre plus tard. EN: converting right away avoids a later figure error.')),
], ['belgeSuisse']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Septante, nonante', 'Septante et nonante valent...', ['60 et 80', '70 et 90'], 1, 'Septante = 70, nonante = 90. EN: septante is 70, nonante is 90.'),
  ctl('Huitante', 'Huitante (80) existe...', ['en Belgique et en Suisse', 'en Suisse seulement'], 1, 'La Belgique garde quatre-vingts. EN: Belgium keeps quatre-vingts.'),
  ctl('Le réflexe', 'Devant un nombre régional, tu...', ['convertis précisément', 'notes une impression approximative'], 0,
    'Un chiffre professionnel ou d’examen exige la précision. EN: a professional or exam figure needs precision.'),
], ['belgeSuisse']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Des mots d’ailleurs : Belgique et Suisse',
    opener: {
      line: 'Septante, nonante, le natel : ici tu apprends à convertir un nombre régional sans hésiter, et à reconnaître une poignée de mots de tous les jours. EN: Septante, nonante, the natel: here you learn to convert a regional number without hesitating, and to recognise a handful of everyday words.',
      imageRef: 'lessons/c2-11-ecoute-experte/act05.jpg',
    },
    sections: [],
    milestone: 'Tu convertis septante, huitante et nonante sans hésiter, et tu reconnais quelques mots belges et suisses courants. EN: You can convert septante, huitante and nonante without hesitating, and recognise a few common Belgian and Swiss words.',
    estScreens: 28, restPoints: ['a5-support'],
  },
  sections: [A5_SUPPORT, A5_NOMBRES, A5_TRIER, A5_ERREURS, A5_DIAGNOSTIC, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — DES MOTS D’AILLEURS : L’AFRIQUE DE L’OUEST
 *
 *  TEXT: a Dakar phone call about a delayed delivery. MOVE: a spontaneously
 *  more formal register, plus the real trap, « tout à l’heure » in the past.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_DAKAR: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-dakar',
  layer: 'core',
  hideLines: true,
  title: 'Un appel depuis Dakar',
  frSub: 'Tout à l’heure, le goudron, ça va aller',
  lines: DAKAR_LINES,
  questions: [
    { q: 'À quel moment M. Diatta a-t-il essayé d’appeler, selon lui ?', opts: ['dans l’après-midi, le même jour', 'le jour précédent', 'le lendemain'], correct: 0,
      why: 'Tout à l’heure renvoie ici à quinze heures, plus tôt le même jour. EN: tout à l’heure here points to three in the afternoon, earlier the same day.' },
    { q: 'Pourquoi le premier appel n’a-t-il pas abouti ?', opts: ['la communication s’est interrompue', 'le collègue n’a pas répondu', 'ce n’était pas le bon numéro'], correct: 0,
      why: 'M. Diatta mentionne lui-même la coupure. EN: he mentions the dropout himself.' },
    { q: 'Pourquoi le camion est-il bloqué ?', opts: ['une grève', 'la route est coupée après la pluie', 'une panne mécanique'], correct: 1,
      why: 'Un épisode de pluie récent a rendu la voie principale impraticable. EN: a recent spell of rain has made the main road impassable.' },
    { q: 'Quelle est l’attitude générale de M. Diatta sur la suite de la livraison ?', opts: ['inquiet', 'rassurant', 'indifférent'], correct: 1,
      why: 'Il répète que ça va aller, malgré le contretemps. EN: he repeats that it will be fine, despite the setback.' },
    { q: 'Que promet M. Diatta à la fin de l’appel ?', opts: ['d’annuler la livraison', 'de revenir avec une date précise', 'de changer de transporteur'], correct: 1,
      why: 'Il annonce revenir vers son interlocuteur avec une date. EN: he says he’ll get back with a date.' },
  ],
  audio: REC('rec-c2-11-dakar'),
  say: REFRAME,
  terms: ['afriqueOuest'],
};

/** NOTICE THE MOVE: the register, then the one real trap. */
const A6_GLOSSAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-glossaire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accents',
  title: 'Des mots d’Afrique de l’Ouest',
  frSub: 'Un registre plus soutenu, et un vrai piège de temps',
  hint: 'Quatre cartes, dont une qui peut vraiment t’induire en erreur.',
  audio: REC('rec-c2-11-glossaire-afrique'),
  say: REFRAME,
  terms: ['afriqueOuest'],
  cards: [
    { head: 'Tout à l’heure', label: 'LE piège : parfois déjà passé',
      fr: S(2267).fr, sub: rsOf(E(2267)),
      body: 'Ici, tout à l’heure peut renvoyer à un moment déjà passé le même jour, pas seulement à l’avenir : vérifie toujours avec l’heure donnée. EN: here, tout à l’heure can point to the past, not only the future; always check against the time given.' },
    { head: 'Je vous prie de bien vouloir', label: 'un registre spontanément soutenu',
      fr: S(2273).fr, sub: rsOf(E(2273)),
      body: 'Cette formule très soutenue s’emploie à l’oral, même au téléphone, sans signaler de tension particulière. EN: this very formal formula is used in speech, even by phone, without signalling any special tension.' },
    { head: 'Le goudron', label: 'la route, la voie principale',
      fr: S(2269).fr, sub: rsOf(E(2269)),
      body: 'Désigne la route goudronnée, souvent opposée à une piste non praticable. EN: the paved road, often contrasted with an unpaved track.' },
    { head: 'Ça va aller', label: 'une rassurance, pas une certitude chiffrée',
      fr: S(2271).fr, sub: rsOf(E(2271)),
      body: 'Une formule de réconfort fréquente, qui n’annonce ni date ni garantie précise. EN: a frequent reassurance, with no precise date or guarantee attached.' },
  ],
};

/** PRACTISE, on new material. */
const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-trier',
  layer: 'core',
  size: 'lg',
  title: 'Quand était « tout à l’heure » ?',
  groups: [
    grp('Vérifier avec l’heure donnée', [
      it(E(2266), 'la règle du piège'),
      it(E(2277), 'tout à l’heure, pendant qu’on causait'),
    ], chk(
      '« Je vous ai appelé tout à l’heure, vers neuf heures », dit à dix-sept heures. De quand s’agit-il ?',
      ['du matin même, plus tôt', 'de plus tard ce soir'], 0,
      'L’heure donnée (neuf heures) situe le moment dans le passé du même jour. EN: the given time (nine o’clock) places it earlier the same day.')),
    grp('Le registre, plus que le ton', [
      it(E(2268), 'causer, pour parler'),
      it(E(2274), 'véritablement'),
    ], chk(
      '« On causait justement de ce projet. » « Causer » signifie ici...',
      ['bavarder sans but', 'parler, discuter, sans connotation négative'], 1,
      'Causer est un verbe courant pour parler, pas un jugement sur la conversation. EN: causer is an ordinary verb for to talk, not a judgment on the conversation.')),
    ctl('Le réflexe', 'Face à « tout à l’heure », tu...', ['supposes toujours un moment futur', 'vérifies le sens avec l’heure donnée dans la phrase'], 1,
      'Le sens dépend entièrement du contexte temporel donné. EN: the meaning depends entirely on the time context given.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['afriqueOuest'],
};

/** PRACTISE: four ways a listener mishandles this variant. */
const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de mal lire ce français',
  errors: [
    { wrong: '« Tout à l’heure » veut toujours dire plus tard.',
      right: 'Je vérifie l’heure donnée : « tout à l’heure » peut désigner un moment déjà passé.',
      why: 'Le sens dépend du contexte, pas d’une règle fixe. EN: the meaning depends on context, not a fixed rule.' },
    { wrong: 'Un registre très soutenu au téléphone signale forcément une tension.',
      right: 'Un registre très soutenu peut être le registre normal, sans tension particulière.',
      why: 'Cette formalité spontanée n’est pas le signal d’une émotion, contrairement à l’acte 3. EN: unlike act 3, this formality is not an emotion signal here.' },
    { wrong: '« Ça va aller » me donne une date ou une garantie précise.',
      right: '« Ça va aller » rassure, sans donner de date ni de garantie.',
      why: 'C’est une formule de réconfort, pas une information chiffrée. EN: it is a reassurance, not a figure.' },
    { wrong: 'Je traite « causer » comme familier ou négatif.',
      right: 'Je traite « causer » comme un simple synonyme courant de parler.',
      why: 'Le mot est neutre dans cette variante, pas familier. EN: the word is neutral in this variety, not casual.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['afriqueOuest'],
};

/** USE IT: the time trap resolved and logged with the hour it depends on. */
const A6_DIAGNOSTIC = pourTonDiagnostic('a6-diagnostic', 'L’heure donnée tranche le sens', [
  grp('Deux façons de traiter « tout à l’heure »', [
    free('« tout à l’heure, vers 15h » + appel à 19h → passé, plus tôt le même jour', '“tout à l’heure, around 3pm” + call at 7pm → past, earlier the same day', 'vérifié avec l’heure'),
    free('« tout à l’heure » → je note « plus tard », par habitude', '“tout à l’heure” → I note “later”, by habit', 'supposé, sans vérifier'),
  ], chk(
    'Laquelle des deux notes évite une erreur de chronologie dans ce dossier de livraison ?',
    ['la première', 'la seconde'], 0,
    'Vérifier l’heure donnée évite d’inverser le passé et l’avenir. EN: checking the given time avoids reversing past and future.')),
  grp('Ta règle', [
    it(E(2266), 'le piège de tout à l’heure'),
    it(E(2271), 'ça va aller, en rassurance'),
  ], chk(
    'Face à « tout à l’heure », ta règle devient...',
    ['je cherche l’heure donnée dans la phrase', 'je suppose toujours l’avenir'], 0,
    'La règle de cette leçon : vérifier, jamais supposer. EN: this lesson’s rule: check, never assume.')),
], ['afriqueOuest']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le piège', '« Tout à l’heure » peut désigner...', ['seulement l’avenir', 'un moment déjà passé, ou l’avenir, selon le contexte'], 1,
    'Vérifie toujours avec l’heure donnée dans la phrase. EN: always check against the time given.'),
  ctl('Le registre', 'Un registre très soutenu, dans cette variante, signale...', ['toujours une tension', 'pas forcément une tension, parfois juste l’usage courant'], 1,
    'La formalité peut être le registre ordinaire, pas un signal d’émotion. EN: the formality can be the ordinary register, not an emotion signal.'),
  ctl('Ça va aller', 'Cette formule donne...', ['une date précise', 'une rassurance, sans date précise'], 1,
    'Elle réconforte sans garantir un calendrier. EN: it reassures without guaranteeing a timeline.'),
], ['afriqueOuest']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Des mots d’ailleurs : l’Afrique de l’Ouest',
    opener: {
      line: 'Un appel depuis Dakar, et un vrai piège de temps : ici tu apprends que « tout à l’heure » n’annonce pas toujours l’avenir. EN: A call from Dakar, and a real trap of timing: here you learn that tout à l’heure does not always point to the future.',
      imageRef: 'lessons/c2-11-ecoute-experte/act06.jpg',
    },
    sections: [],
    milestone: 'Tu résous « tout à l’heure » avec l’heure donnée dans la phrase, et tu reconnais un registre spontanément plus soutenu. EN: You can resolve tout à l’heure against the time given in the sentence, and recognise a spontaneously more formal register.',
    estScreens: 28, restPoints: ['a6-dakar'],
  },
  sections: [A6_DAKAR, A6_GLOSSAIRE, A6_TRIER, A6_ERREURS, A6_DIAGNOSTIC, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE SON ABÎMÉ
 *
 *  TEXT: a mobile call over a construction site. MOVE: three breakdown
 *  types (whole word lost, word damaged, sentence masked), three repairs.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_CHANTIER: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-chantier',
  layer: 'core',
  hideLines: true,
  title: 'Un appel près d’un chantier',
  frSub: 'Du bruit de fond, un mot à reformuler',
  lines: CHANTIER_LINES,
  questions: [
    { q: 'Pourquoi Mme Faye entend-elle mal au début de l’appel ?', opts: ['un problème de batterie', 'du bruit de chantier', 'une mauvaise couverture réseau'], correct: 1,
      why: 'M. Perrin évoque des travaux tout près de son lieu de travail. EN: he mentions work going on very close to where he is.' },
    { q: 'À quelle heure la livraison arrive-t-elle, finalement ?', opts: ['quatorze heures', 'quatorze heures trente', 'quinze heures'], correct: 1,
      why: 'M. Perrin se corrige lui-même vers la bonne heure. EN: he corrects himself to the right time.' },
    { q: 'Que doit-on faire avant l’arrivée de la livraison, selon M. Perrin ?', opts: ['fermer le portail', 'rendre accessible le local technique', 'appeler le gardien'], correct: 1,
      why: 'Il répète cette instruction une seconde fois, plus clairement. EN: he restates this instruction a second time, more clearly.' },
    { q: 'Pourquoi Mme Faye demande-t-elle à M. Perrin de reformuler la fin de sa phrase ?', opts: ['elle n’était pas d’accord', 'la réception s’est dégradée un instant', 'elle n’écoutait pas'], correct: 1,
      why: 'Elle signale elle-même l’affaiblissement du signal. EN: she flags the weakened signal herself.' },
    { q: 'À la fin de l’appel, Mme Faye a-t-elle fini par noter l’information complète ?', opts: ['oui', 'non', 'ce n’est pas précisé'], correct: 0,
      why: 'Elle confirme avoir tout noté après la reformulation. EN: she confirms she noted everything after the restatement.' },
  ],
  audio: REC('rec-c2-11-chantier'),
  say: REFRAME,
  terms: ['panne'],
};

/** NOTICE THE MOVE: three breakdown types, three repairs. */
const A7_PANNES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-pannes',
  layer: 'core',
  sheetId: 'sheet-pannes',
  title: 'Trois pannes, trois réparations',
  cols: ['La panne', 'Ce qui reste', 'La réparation'],
  rows: [
    { cells: ['un mot entier perdu', 'rien du mot lui-même', 'j’attends la phrase suivante pour confirmer'], say: S(2281).fr,
      detail: { title: 'Le mot entier perdu', body: 'Sans aucune trace du mot, seule la suite du dialogue peut confirmer ce qu’il devait être. EN: with no trace of the word, only what follows can confirm it.', say: S(2281).fr } },
    { cells: ['un mot abîmé', 'le début ou la fin du mot', 'je complète avec ce qui reste'], say: S(2282).fr,
      detail: { title: 'Le mot abîmé', body: 'Si le début du mot est audible, il suffit souvent à reconstruire la fin. EN: if the start of the word is audible, it is often enough to rebuild the rest.', say: S(2293).fr } },
    { cells: ['une phrase couverte par un bruit de fond', 'le sens général, pas les détails', 'j’attends la reformulation'], say: S(2288).fr,
      detail: { title: 'La phrase couverte', body: 'Un bruit de fond continu masque les détails sans effacer tout le sens ; la reformulation, demandée ou spontanée, rend les détails. EN: background noise masks detail without erasing all meaning; a restatement restores the detail.', say: S(2285).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['panne'],
};

/** PRACTISE, on new material. */
const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Quelle panne, quelle réparation ?',
  groups: [
    grp('Ranger la panne', [
      it(E(2283), 'une coupure de son'),
      it(E(2289), 'les trois cases'),
      it(E(2284), 'pas toujours le même type de son'),
    ], chk(
      'Un bruit de moteur couvre toute une phrase, sans qu’aucun mot ne disparaisse totalement. Dans quelle case ranges-tu cette panne ?',
      ['mot entier perdu', 'phrase couverte par un bruit'], 1,
      'Le bruit couvre sans effacer un mot précis : c’est la troisième case. EN: the noise covers without erasing a specific word.')),
    grp('Réparer sans inventer', [
      it(E(2280), 'jamais au hasard'),
      it(E(2290), 'la répétition confirme'),
      it(E(2291), 'le signal faiblit'),
    ], chk(
      'Un mot entier a disparu sous un bruit. Ta meilleure réparation est de...',
      ['inventer un mot plausible tout de suite', 'attendre la suite pour voir ce qu’elle confirme'], 1,
      'Un mot inventé peut sonner juste et pourtant être faux. EN: an invented word can sound right and still be wrong.')),
    ctl('Le réflexe', 'Un chiffre est coupé par une mauvaise ligne. Tu...', ['le notes au hasard', 'attends une répétition ou une reformulation'], 1,
      'Les chiffres sont justement ce qu’on perd le plus souvent, et ce qu’il faut vérifier le plus. EN: numbers are exactly what gets lost most, and what most needs checking.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['panne'],
};

/** PRACTISE: four ways a listener mishandles a dropout. */
const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de mal réparer une panne',
  errors: [
    { wrong: 'Un mot disparu sous un bruit, j’invente le mot qui sonnerait le mieux.',
      right: 'Un mot disparu sous un bruit, j’attends ce que la suite confirme vraiment.',
      why: 'Un mot plausible n’est pas forcément le bon mot. EN: a plausible word is not necessarily the right one.' },
    { wrong: 'Une phrase entière couverte de bruit, je considère que tout le sens est perdu.',
      right: 'Une phrase couverte de bruit garde souvent son sens général, même sans les détails.',
      why: 'Le bruit masque des détails, rarement tout le sens. EN: noise masks detail, rarely the whole meaning.' },
    { wrong: 'Dès qu’un chiffre est coupé, je le remplace par un chiffre rond au hasard.',
      right: 'Dès qu’un chiffre est coupé, j’attends une répétition avant de le noter.',
      why: 'Les chiffres se perdent facilement et se vérifient par une seconde mention. EN: numbers get lost easily and are verified by a second mention.' },
    { wrong: 'Une ligne qui faiblit puis revient signifie que le sens a changé en cours de route.',
      right: 'Une ligne qui faiblit puis revient ne change en rien le sens de ce qui est dit.',
      why: 'Le signal varie, le message qu’il porte reste le même. EN: the signal varies; the message it carries stays the same.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['panne'],
};

/** USE IT: a repaired word, logged with how it was repaired. */
const A7_DIAGNOSTIC = pourTonDiagnostic('a7-diagnostic', 'Réparé, et comment', [
  grp('Deux façons de noter une panne', [
    free('heure livraison : 14h → corrigé 14h30 (répétition) | porte local technique (reformulée)', 'delivery time: 2pm → corrected to 2:30pm (repetition) | utility room door (restated)', 'réparé, avec sa source'),
    free('heure livraison : environ 14h | une porte, je crois', 'delivery time: around 2pm | a door, I think', 'deviné, sans vérification'),
  ], chk(
    'Laquelle de ces deux notes peut vraiment servir à ouvrir la bonne porte au bon moment ?',
    ['la première', 'la seconde'], 0,
    'La première s’appuie sur une correction et une reformulation réellement entendues. EN: the first relies on a correction and a restatement actually heard.')),
  grp('Ta règle', [
    it(E(2280), 'jamais au hasard'),
    it(E(2285), 'attendre la reformulation'),
  ], chk(
    'Face à un mot perdu sous le bruit, ta règle devient...',
    ['attendre une confirmation avant de noter', 'noter tout de suite ce qui semble probable'], 0,
    'La règle de cette leçon : vérifier, jamais deviner au hasard. EN: this lesson’s rule: verify, never guess at random.')),
], ['panne']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La règle', 'Un mot perdu se répare avec...', ['un mot inventé au hasard', 'ce qui l’entoure dans la suite'], 1,
    'Jamais un mot inventé, toujours ce que la suite confirme. EN: never an invented word, always what follows confirms.'),
  ctl('Le bruit de fond', 'Un bruit de fond continu masque surtout...', ['tout le sens de la phrase', 'des détails, rarement tout le sens'], 1,
    'Le sens général survit souvent au bruit de fond. EN: the general meaning often survives background noise.'),
  ctl('Les chiffres', 'Un chiffre coupé par une mauvaise ligne doit être...', ['noté tel quel, par défaut', 'confirmé par une répétition avant d’être noté'], 1,
    'Les chiffres sont ce qu’on perd le plus souvent sur une mauvaise ligne. EN: numbers are what gets lost most often over a bad line.'),
], ['panne']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le son abîmé',
    opener: {
      line: 'Un appel près d’un chantier, un mot perdu, une reformulation : ici tu apprends trois pannes et leurs trois réparations. EN: A call near a construction site, a lost word, a restatement: here you learn three breakdowns and their three repairs.',
      imageRef: 'lessons/c2-11-ecoute-experte/act07.jpg',
    },
    sections: [],
    milestone: 'Tu ranges une panne de son dans la bonne case, et tu la répares avec ce que le contexte confirme, jamais au hasard. EN: You can file a sound breakdown into the right box, and repair it with what context confirms, never at random.',
    estScreens: 28, restPoints: ['a7-chantier'],
  },
  sections: [A7_CHANTIER, A7_PANNES, A7_TRIER, A7_ERREURS, A7_DIAGNOSTIC, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — TOUT EN MÊME TEMPS
 *
 *  THE stacked scene, the brief's exact ask: a three-way call-in that
 *  combines overlap, a Swiss accent on a weakening line, and a West
 *  African studio guest's accent and register, together. MOVE: triage.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_STACKED: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-stacked',
  layer: 'core',
  hideLines: true,
  title: 'Trois voix, trois bruits, un seul débat',
  frSub: 'Fribourg, Dakar, Paris, en même temps',
  lines: STACKED_LINES,
  questions: [
    { q: 'Qui est en studio, et qui est au téléphone ?', opts: ['Mme Diatta en studio, l’auditeur au téléphone', 'l’inverse', 'les deux sont en studio'], correct: 0,
      why: 'L’animateur les présente ainsi dès l’ouverture. EN: the host introduces them that way from the start.' },
    { q: 'Pourquoi l’auditeur prévient-il l’animateur dès le début de son intervention ?', opts: ['parce que sa connexion n’est pas bonne', 'parce qu’il n’est pas d’accord avec le sujet', 'parce qu’il doit raccrocher'], correct: 0,
      why: 'Il annonce lui-même la faiblesse de son réseau. EN: he flags his own weak network himself.' },
    { q: 'Quel pourcentage de hausse du loyer l’auditeur cite-t-il, en nombre standard ?', opts: ['quatre-vingt-dix pour cent', 'soixante-dix pour cent', 'cinquante pour cent'], correct: 0,
      why: 'Nonante vaut quatre-vingt-dix. EN: nonante is ninety.' },
    { q: 'Au moment où l’animateur reprend la parole après le chevauchement, que fait-il exactement ?', opts: ['il répète le chiffre pour relancer la parole vers Mme Diatta', 'il conteste le chiffre', 'il change complètement de sujet'], correct: 0,
      why: 'Il reprend le chiffre entendu puis redistribue la parole. EN: he picks up the figure heard, then hands the floor onward.' },
    { q: 'Selon Mme Diatta, quel problème d’infrastructure retarde sa région ?', opts: ['une route non terminée', 'une coupure d’électricité', 'un manque de bureaux'], correct: 0,
      why: 'Elle évoque une voie non terminée qui doit desservir des zones en construction. EN: she mentions an unfinished road meant to serve areas still being built.' },
    { q: 'À la fin de l’échange, l’animateur a-t-il vraiment perdu la fin de la phrase de l’auditeur ?', opts: ['non, il l’a suivie malgré la ligne faible', 'oui, complètement'], correct: 0,
      why: 'Il confirme explicitement l’avoir bien suivi. EN: he explicitly confirms he followed it.' },
  ],
  audio: REC('rec-c2-11-stacked'),
  say: REFRAME,
  terms: ['triage'],
};

/** NOTICE THE MOVE: the triage grid, symptom to fix. */
const A8_TRIAGE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-triage',
  layer: 'core',
  sheetId: 'sheet-signal',
  title: 'La grille de triage',
  cols: ['Tu remarques', 'Le bruit probable', 'Ton réflexe'],
  rows: [
    { cells: ['deux voix collées, une seconde', 'un chevauchement', 'séparer, attendre le recadrage'], say: S(2295).fr,
      detail: { title: 'Le chevauchement d’abord', body: 'Repère le recadrage de l’animateur avant de choisir quelle voix suivre. EN: look for the host’s recadrage before choosing which voice to follow.', say: S(2214).fr } },
    { cells: ['un mot ou un son que tu n’as jamais entendu', 'un accent ou un mot régional', 'laisser un « ? », continuer, résoudre par le contexte'], say: S(2297).fr,
      detail: { title: 'L’accent, ensuite', body: 'Un accent nouveau n’est presque jamais celui qui te fait perdre le plus d’information : ne t’y attarde pas. EN: a new accent is rarely the one costing you the most information; do not dwell on it.', say: S(2306).fr } },
    { cells: ['un ton qui change en pleine phrase', 'une bascule de registre', 'se demander ce qu’elle signale, pas la corriger'], say: S(2298).fr,
      detail: { title: 'Le registre, en parallèle', body: 'Une bascule de registre reste une information à côté du contenu, même quand deux autres bruits arrivent en même temps. EN: a register shift stays information alongside the content, even with two other kinds of noise at once.', say: S(2228).fr } },
    { cells: ['un silence, un grésillement, un signal qui faiblit', 'une panne de son', 'ranger dans l’une des trois cases, puis réparer'], say: S(2296).fr,
      detail: { title: 'La panne, enfin', body: 'Même en dernier dans ton triage, une panne se répare avec le contexte, jamais en l’inventant. EN: even last in your triage, a dropout is repaired with context, never invented.', say: S(2280).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['triage'],
};

/** PRACTISE, on new material. */
const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-trier',
  layer: 'core',
  size: 'lg',
  title: 'Nommer avant de réagir',
  groups: [
    grp('Un bruit à la fois, même empilés', [
      it(E(2296), 'un bruit à la fois'),
      it(E(2304), 'trois bruits, pas un mur'),
      it(E(2308), 'chacun son réflexe'),
    ], chk(
      'Trois bruits arrivent dans la même phrase. Combien en traites-tu à la fois ?',
      ['les trois ensemble, globalement', 'un seul, puis le suivant'], 1,
      'Même empilés, les bruits se traitent un par un. EN: even stacked, noises are handled one at a time.')),
    grp('Isoler la voix la plus claire', [
      it(E(2302), 'commencer par la voix la plus claire'),
      it(E(2305), 'isoler, puis revenir'),
    ], chk(
      'Dans un passage confus, ta première action est de...',
      ['isoler la voix la plus claire', 'essayer de tout comprendre d’un coup'], 0,
      'Partir de ce qui est clair donne un point d’appui pour le reste. EN: starting from what is clear gives you a foothold for the rest.')),
    ctl('Le réflexe final', 'Face à trois bruits empilés, ta priorité absolue est de...',
      ['garder ton calme et nommer chaque bruit', 'deviner vite une réponse globale'], 0,
      'Garder son calme devant plusieurs bruits est la moitié du travail. EN: staying calm in front of several kinds of noise is half the work.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['triage'],
};

/** PRACTISE: four ways a listener fails to triage a stacked passage. */
const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de céder devant le bruit empilé',
  errors: [
    { wrong: 'Trois bruits en même temps, j’abandonne et je décroche de l’écoute.',
      right: 'Trois bruits en même temps restent trois bruits distincts, que je traite un par un.',
      why: 'Abandonner perd tout ; nommer chaque bruit garde une prise sur chacun. EN: giving up loses everything; naming each noise keeps a grip on each one.' },
    { wrong: 'Je règle d’abord l’accent, parce que c’est le bruit qui m’intrigue le plus.',
      right: 'Je règle d’abord ce qui gêne le plus ma compréhension, pas ce qui m’intrigue le plus.',
      why: 'L’intrigue et la gêne réelle ne coïncident pas toujours. EN: curiosity and real difficulty do not always match.' },
    { wrong: 'Une bascule de registre en pleine panne de son, je laisse tomber le registre pour me concentrer sur le son.',
      right: 'Je garde une trace du registre même en réparant la panne de son en parallèle.',
      why: 'Les deux bruits coexistent sans qu’il faille en sacrifier un. EN: both kinds of noise coexist without needing to sacrifice one.' },
    { wrong: 'Face à plusieurs bruits, je cherche la voix la plus intéressante pour commencer.',
      right: 'Face à plusieurs bruits, je cherche la voix la plus claire pour commencer.',
      why: 'La clarté donne un point de départ fiable ; l’intérêt n’en donne aucun. EN: clarity gives a reliable starting point; interest gives none.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['triage'],
};

/** USE IT: a full triage, logged bruit by bruit. */
const A8_DIAGNOSTIC = pourTonDiagnostic('a8-diagnostic', 'Un bruit à la fois, dans le même passage', [
  grp('Deux façons de traiter le passage empilé', [
    free('chevauchement (loyer 90 %) → registre Diatta (soutenu, goudron) → panne (ligne faible, suivie)', 'overlap (90% rent) → Diatta’s register (formal, highway) → dropout (weak line, followed)', 'trois bruits, trois lignes'),
    free('beaucoup de bruit, difficile à suivre, loyer et route mentionnés', 'a lot of noise, hard to follow, rent and road mentioned', 'un seul bloc flou'),
  ], chk(
    'Laquelle de ces deux notes permettrait de répondre séparément à une question sur chacun des trois bruits ?',
    ['la première', 'la seconde'], 0,
    'La première nomme chaque bruit séparément ; la seconde les fond en un seul flou. EN: the first names each kind of noise separately; the second blurs them into one.')),
  grp('Ta règle', [
    it(E(2294), 'nommer avant de résoudre'),
    it(E(2307), 'le triage ne supprime rien'),
  ], chk(
    'Devant un passage qui empile plusieurs bruits, ta règle devient...',
    ['nommer chacun, puis traiter un par un, en commençant par le plus clair', 'réagir globalement, au premier réflexe'], 0,
    'Nommer, puis traiter un par un : la règle de tout l’acte 8. EN: name, then handle one at a time: the whole act’s rule.')),
], ['triage']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le triage', 'Face à plusieurs bruits à la fois, tu...', ['les traites tous en même temps', 'les nommes, puis les traites un par un'], 1,
    'Le triage ne supprime aucun bruit, il décide seulement par lequel commencer. EN: triage erases no noise, it only decides where to start.'),
  ctl('Le point de départ', 'Dans un passage confus, tu commences par...', ['la voix la plus claire', 'la voix la plus intrigante'], 0,
    'La clarté donne un point d’appui, pas l’intérêt. EN: clarity gives a foothold, not interest.'),
  ctl('Le signal, malgré tout', `${Cap(ECOUTE_B2_REF)} et ${DEBATS_C1_REF} t’ont donné le signal. Même sous trois bruits à la fois, ce signal...`,
    ['change de nature', 'reste le même, seulement plus difficile à atteindre'], 1,
    `${REFRAME} EN: ${REFRAME_EN}`),
], ['triage']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Tout en même temps',
    opener: {
      line: 'Trois voix, un accent suisse sur une ligne faible, un accent d’Afrique de l’Ouest, et un chevauchement, tout dans le même débat : la leçon entière mène à cet acte. EN: Three voices, a Swiss accent on a weak line, a West African accent, and an overlap, all in the same debate: the whole lesson leads to this act.',
      imageRef: 'lessons/c2-11-ecoute-experte/act08.jpg',
    },
    sections: [],
    milestone: 'Tu nommes chaque bruit empilé dans un même passage, et tu les traites un par un sans perdre le signal. EN: You can name each kind of noise stacked in the same passage, and handle them one at a time without losing the signal.',
    estScreens: 32, restPoints: ['a8-stacked'],
  },
  sections: [A8_STACKED, A8_TRIAGE, A8_TRIER, A8_ERREURS, A8_DIAGNOSTIC, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — L’ÉPREUVE EXPERTE
 *
 *  Two once-only exam-format sittings (TCF-style three documents, DALF
 *  C2-style one extract), the whole lesson's strategy recapped as a sheet,
 *  then the closing quiz, review and roundup. NO task, NO scenario: this
 *  act stays recognition only like every other, the R shape all the way to
 *  the end.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_EXAM_A: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-exam-a',
  layer: 'core',
  hideLines: true,
  title: 'Format TCF : trois documents',
  frSub: 'Une seule écoute par document',
  lines: EXAM_A_LINES,
  questions: [
    { q: 'Document un : sous quelle condition le télétravail reste-t-il possible après la réforme ?', opts: ['sans aucune condition', 'avec un accord écrit de l’employeur', 'seulement le vendredi'], correct: 1,
      why: 'La réponse pose explicitement cette réserve. EN: the answer explicitly states this condition.' },
    { q: 'Document deux : jusqu’à quand les équipes resteront-elles à distance ?', opts: ['jusqu’en mars', 'indéfiniment', 'une semaine seulement'], correct: 0,
      why: 'Le document fixe une date liée aux travaux de la route. EN: the document sets a date tied to the roadworks.' },
    { q: 'Document trois : quel jour le nouveau logiciel sera-t-il installé, malgré la ligne faible ?', opts: ['mercredi', 'jeudi', 'vendredi'], correct: 1,
      why: 'Le technicien donne cette date malgré la qualité de la ligne. EN: the technician gives this date despite the line quality.' },
  ],
  audio: ONCE('rec-c2-11-exam-a'),
  say: REFRAME,
  terms: ['epreuve'],
};

const A9_EXAM_B: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-exam-b',
  layer: 'core',
  hideLines: true,
  title: 'Format DALF C2 : un seul document',
  frSub: 'Un registre très soutenu, une écoute unique',
  lines: EXAM_B_LINES,
  questions: [
    { q: 'Selon l’intervenant, combien d’obstacles restent à régler avant une décision commune ?', opts: ['deux', 'trois', 'quatre'], correct: 1,
      why: 'Il les énumère explicitement. EN: he lists them explicitly.' },
    { q: 'Lequel de ces éléments concerne les infrastructures routières ?', opts: ['le registre des contrats', 'le goudron', 'la couverture réseau'], correct: 1,
      why: 'Le goudron désigne la route. EN: le goudron refers to the road.' },
    { q: 'Que promet l’intervenant à la fin de son propos ?', opts: ['d’annuler le projet', 'de revenir vers chaque équipe une fois les trois points réglés', 'de changer d’équipe'], correct: 1,
      why: 'Il annonce ce retour vers chaque équipe. EN: he announces this follow-up to each team.' },
    { q: 'Pourquoi l’intervenant s’excuse-t-il au tout début de son propos ?', opts: ['pour un retard', 'pour une erreur de chiffres', 'pour un changement de sujet'], correct: 0,
      why: 'Il s’excuse explicitement pour ce léger retard. EN: he explicitly apologises for this slight delay.' },
  ],
  audio: ONCE('rec-c2-11-exam-b'),
  say: REFRAME,
  terms: ['epreuve'],
};

/** The whole lesson's strategy, as the screenshot-before-the-exam card. */
const A9_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a9-cheat',
  layer: 'core',
  sheetId: 'sheet-epreuve',
  title: 'Le triage, en une seule image',
  rows: [
    { k: 'Avant d’écouter', v: 'Lis la consigne et chaque option.', say: S(2310).fr },
    { k: 'Chevauchement', v: 'Sépare les deux voix ; attends le recadrage.', say: S(2214).fr },
    { k: 'Registre', v: 'Demande-toi ce qu’il signale, pas s’il est correct.', say: S(2235).fr },
    { k: 'Accent, mot régional', v: 'Laisse un « ? » ; résous avec le contexte qui suit.', say: S(2306).fr },
    { k: 'Panne de son', v: 'Mot entier, mot abîmé, ou phrase couverte : jamais au hasard.', say: S(2289).fr },
    { k: 'Plusieurs bruits ensemble', v: 'Nomme chacun ; commence par la voix la plus claire.', say: S(2302).fr,
      detail: { title: 'Le triage complet', body: 'Même empilés, les bruits se traitent un par un, avec leur propre réflexe. EN: even stacked, noises are handled one at a time, each with its own reflex.', say: S(2308).fr } },
    { k: 'L’option qui répète un mot', v: 'Méfie-toi : parfois un piège, pas une confirmation.', say: S(2311).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['epreuve'],
};

const A9_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a9-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: `Neuf actes, quatre bruits, un seul signal. ${REFRAME} EN: ${REFRAME_EN}`,
  stats: [
    { k: 'Bruits triés', v: '4 : chevauchement, registre, accent, panne' },
    { k: 'Régions reconnues', v: 'Québec, Belgique, Suisse, Afrique de l’Ouest' },
    { k: 'Scènes empilées', v: '1 (acte 8), plusieurs bruits à la fois' },
    { k: 'Productions demandées', v: '0 : aucune mission ne t’a fait parler ni écrire' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE CLOSING QUIZ: 7 rounds of 6, mcq / listenChoose only ───────────── */

type QQ = QuizQuestion;
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A9_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a9-quiz', layer: 'core', title: 'L’épreuve', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-chevauchement', label: 'Deux voix à la fois', targets: ['chevauchement-mal-attribue'],
      questions: [
        mc('Deux invités parlent en même temps. Combien de positions gardes-tu dans tes notes ?', ['une seule, la plus claire', 'deux, séparément', 'aucune, j’attends la fin'], 1, 'Le chevauchement cache une idée, il ne l’efface pas. EN: an overlap hides an idea, it does not erase it.', 'a2-reperes'),
        mc('Quel repère te dit le mieux qui reprend la parole après un chevauchement ?', ['le volume de la voix', 'le prénom lancé par l’animateur', 'la vitesse de la phrase'], 1, 'Le prénom précède presque toujours le tour de parole. EN: the first name usually precedes the turn.', 'a2-reperes'),
        mc('« Comme je le disais » annonce surtout...', ['une idée nouvelle', 'une idée coupée qui revient'], 1, 'C’est la formule type de la reprise. EN: the classic resumption cue.', 'a2-trier'),
        mc('Celui qui hausse le ton pendant un chevauchement garde la parole...', ['plus longtemps que l’autre, en général', 'rarement plus longtemps'], 1, 'Monter le ton insiste, ça ne prolonge pas forcément le tour. EN: raising the voice insists, it does not necessarily extend the turn.', 'a2-trier'),
        lC('Écoute. Cette phrase annonce-t-elle une reprise après un chevauchement ?', S(2215).fr, ['oui', 'non'], 0, 'Comme je le disais marque exactement cette reprise. EN: comme je le disais marks exactly that resumption.', 'a2-reperes'),
        lC('Écoute. Que fait cette phrase, dans un chevauchement ?', S(2214).fr, ['elle recadre, elle remet chacun sur une seule piste', 'elle tranche le débat'], 0, 'Répéter la question réorganise le tour de parole. EN: repeating the question reorganises the turn.', 'a2-reperes'),
      ],
    },
    {
      id: 'r2-registre', label: 'Le registre qui bascule', targets: ['registre-pris-pour-confusion'],
      questions: [
        mc('Un interlocuteur très soutenu bascule soudain vers le familier. Que cherches-tu à comprendre ?', ['une faute de français', 'ce que ce changement signale'], 1, 'Le registre informe, il ne trahit pas une erreur. EN: register informs, it does not betray an error.', 'a3-reperes'),
        mc('Un retour soudain au vouvoiement, après du tutoiement, annonce souvent...', ['la fin de toute tension', 'une demande, ou une distance qu’on referme'], 1, 'Le soutenu qui revient précède souvent une requête. EN: formality returning often precedes a request.', 'a3-reperes'),
        mc('Un registre très familier chez un professionnel, avec un client, est...', ['presque toujours un hasard', 'rarement un hasard'], 1, 'Ce changement signale presque toujours quelque chose. EN: it almost always signals something.', 'a3-trier'),
        mc('Le registre d’un interlocuteur se note...', ['séparément, jamais', 'à côté du contenu, comme une information'], 1, 'Ignorer le registre fait perdre la moitié de l’information. EN: ignoring register loses half the information.', 'a3-trier'),
        lC('Écoute. Cette phrase signale-t-elle une émotion contenue plutôt qu’une simple habitude ?', S(2228).fr, ['oui', 'non'], 0, 'Le passage au familier signale rarement un simple relâchement. EN: a shift to informal speech rarely signals a mere lapse.', 'a3-reperes'),
        lC('Écoute. Que fait ce registre, employé ici ?', S(2232).fr, ['il protège celui qui le garde', 'il n’a aucune fonction particulière'], 0, 'Le soutenu protège au téléphone, surtout sous tension. EN: formality protects on the phone, especially under tension.', 'a3-reperes'),
      ],
    },
    {
      id: 'r3-quebec', label: 'Des mots du Québec', targets: ['mot-regional-bloque'],
      questions: [
        mc('Au Québec, « dîner » désigne...', ['le repas du soir', 'le repas de midi'], 1, 'Dîner, c’est le midi ; souper, le soir. EN: dîner is lunch; souper is dinner.', 'a4-glossaire'),
        mc('« Faque » introduit surtout...', ['une opposition', 'une conséquence'], 1, 'Faque vaut fait que : donc, alors. EN: faque means so, therefore.', 'a4-glossaire'),
        mc('« Pantoute » signifie...', ['un peu', 'pas du tout'], 1, 'Une négation renforcée. EN: a reinforced negation.', 'a4-trier'),
        mc('Devant un mot québécois inconnu, ton réflexe est de...', ['arrêter l’écoute pour y réfléchir', 'continuer, et laisser le contexte confirmer le sens'], 1, 'S’arrêter fait perdre la phrase suivante. EN: stopping loses the next sentence.', 'a4-trier'),
        lC('Écoute. Que veut dire « dispendieux », ici ?', S(2249).fr, ['bon marché', 'cher'], 1, 'Dispendieux signifie cher. EN: dispendieux means expensive.', 'a4-glossaire'),
        lC('Écoute. « Achaler » signifie-t-il ici harceler gentiment pour un retour au bureau ?', S(2248).fr, ['oui', 'non'], 0, 'Le contexte (cinq jours sur site) confirme ce sens. EN: the context (five days on site) confirms this meaning.', 'a4-trier'),
      ],
    },
    {
      id: 'r4-belgique-suisse', label: 'Belgique et Suisse', targets: ['mot-regional-bloque'],
      questions: [
        mc('Septante et nonante valent respectivement...', ['60 et 80', '70 et 90'], 1, 'Septante = 70, nonante = 90. EN: septante is 70, nonante is 90.', 'a5-nombres'),
        mc('Huitante (80) existe...', ['en Belgique et en Suisse', 'en Suisse seulement'], 1, 'La Belgique garde quatre-vingts. EN: Belgium keeps quatre-vingts.', 'a5-nombres'),
        mc('« Le natel » désigne...', ['le téléphone fixe', 'le téléphone portable'], 1, 'Mot suisse courant pour portable. EN: the ordinary Swiss word for a mobile.', 'a5-nombres'),
        mc('Face à un nombre dit en septante, huitante ou nonante, tu...', ['devines approximativement', 'convertis précisément'], 1, 'Un dossier professionnel exige le bon chiffre. EN: a professional file needs the exact figure.', 'a5-trier'),
        lC('Écoute. Combien de dossiers, en nombre standard ?', S(2254).fr, ['quatre-vingts', 'quatre-vingt-dix'], 1, 'Nonante vaut quatre-vingt-dix. EN: nonante is ninety.', 'a5-nombres'),
        lC('Écoute. « Une action », ici, désigne-t-elle une promotion ?', S(2264).fr, ['oui', 'non'], 0, 'Action, en Suisse, désigne une offre commerciale. EN: in Switzerland, action means a special offer.', 'a5-nombres'),
      ],
    },
    {
      id: 'r5-afrique', label: 'Afrique de l’Ouest', targets: ['mot-regional-bloque'],
      questions: [
        mc('« Tout à l’heure » peut désigner...', ['seulement l’avenir', 'un moment déjà passé, selon le contexte'], 1, 'Vérifie toujours avec l’heure donnée. EN: always check against the time given.', 'a6-glossaire'),
        mc('« Le goudron » désigne...', ['une couleur', 'la route goudronnée'], 1, 'La route principale, praticable. EN: the main, passable road.', 'a6-glossaire'),
        mc('« Ça va aller » donne...', ['une date précise', 'une rassurance, sans date précise'], 1, 'Une formule de réconfort, pas un chiffre. EN: a reassurance, not a figure.', 'a6-trier'),
        mc('Un registre très soutenu au téléphone, dans cette variante, signale...', ['toujours une tension', 'pas forcément une tension'], 1, 'C’est parfois l’usage ordinaire. EN: sometimes it is simply the ordinary usage.', 'a6-trier'),
        lC('Écoute. « Causer », ici, veut-il dire bavarder sans but ?', S(2268).fr, ['oui', 'non'], 1, 'Causer est un simple synonyme courant de parler. EN: causer is an ordinary synonym for to talk.', 'a6-glossaire'),
        lC('Écoute. Cette phrase situe-t-elle « tout à l’heure » dans le passé, vu l’heure donnée ?', S(2267).fr, ['oui, selon le contexte qui suit', 'non, jamais'], 0, 'L’heure donnée tranche le sens. EN: the given time decides the meaning.', 'a6-glossaire'),
      ],
    },
    {
      id: 'r6-panne', label: 'Le son abîmé', targets: ['panne-mal-reparee'],
      questions: [
        mc('Un mot entier perdu se répare avec...', ['un mot inventé au hasard', 'ce que la suite confirme'], 1, 'Jamais un mot inventé. EN: never an invented word.', 'a7-pannes'),
        mc('Un mot seulement abîmé se répare souvent avec...', ['son début, encore audible', 'rien, il faut toujours attendre'], 0, 'Le début suffit souvent à reconstruire la fin. EN: the start is often enough to rebuild the rest.', 'a7-pannes'),
        mc('Une phrase couverte par un bruit de fond garde en général...', ['tout son sens, intact', 'son sens général, sans les détails'], 1, 'Le bruit masque des détails, rarement tout le sens. EN: noise masks detail, rarely the whole meaning.', 'a7-trier'),
        mc('Un chiffre coupé par une mauvaise ligne doit être...', ['noté par défaut', 'confirmé par une répétition avant d’être noté'], 1, 'Les chiffres se perdent le plus souvent, et se vérifient. EN: numbers get lost most often, and get verified.', 'a7-trier'),
        lC('Écoute. Cette phrase confirme-t-elle qu’une répétition répare une panne ?', S(2290).fr, ['oui', 'non'], 0, 'La répétition confirme souvent ce qui avait été mal entendu. EN: repetition often confirms what was misheard.', 'a7-pannes'),
        lC('Écoute. Le signal qui faiblit puis revient change-t-il le sens du message ?', S(2292).fr, ['non, le sens reste le même', 'oui, le sens change'], 0, 'Le signal varie, le message qu’il porte reste identique. EN: the signal varies; the message it carries stays the same.', 'a7-pannes'),
      ],
    },
    {
      id: 'r7-triage', label: 'Tout en même temps', targets: ['obstacles-non-tries'],
      questions: [
        mc('Devant plusieurs bruits à la fois, tu les traites...', ['tous ensemble, globalement', 'un par un, en commençant par le plus clair'], 1, 'Même empilés, un bruit à la fois. EN: even stacked, one kind of noise at a time.', 'a8-triage'),
        mc('Le bruit le plus intrigant est...', ['forcément celui qui gêne le plus', 'pas forcément celui qui gêne le plus'], 1, 'L’intrigue et la gêne réelle ne coïncident pas toujours. EN: curiosity and real difficulty do not always match.', 'a8-triage'),
        mc('Le triage, face à plusieurs bruits, sert surtout à...', ['supprimer les bruits les uns après les autres', 'décider par lequel commencer'], 1, 'Le triage ne supprime aucun bruit. EN: triage erases no noise.', 'a8-trier'),
        mc('Même sous trois bruits à la fois, le signal que tu cherches...', ['change complètement de nature', 'reste le même, seulement plus difficile à atteindre'], 1, REFRAME, 'a8-check'),
        lC('Écoute. Cette phrase annonce-t-elle un recadrage, après un chevauchement ?', S(2214).fr, ['oui', 'non'], 0, 'Elle remet chacun sur une seule piste. EN: it puts everyone back on a single track.', 'a8-triage'),
        lC('Écoute. Cette phrase résume-t-elle la règle du triage, pour toute la leçon ?', S(2299).fr, ['oui', 'non'], 0, 'Elle rappelle de garder le signal malgré trois bruits à la fois. EN: it recalls keeping the signal despite three kinds of noise at once.', 'a8-triage'),
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
spreadSlots(A9_QUIZ);

const A9_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a9-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'ce que tu savais déjà trouver', back: 'le signal', say: S(2200).fr },
    { front: 'deux voix, deux lignes séparées', back: 'le chevauchement', say: S(2211).fr },
    { front: 'un changement de ton, jamais un hasard', back: 'le registre', say: S(2224).fr },
    { front: 'dîner le midi, souper le soir', back: 'le Québec', say: S(2238).fr },
    { front: 'septante, nonante, le natel', back: 'la Belgique et la Suisse', say: S(2252).fr },
    { front: 'déjà passé, pas seulement à venir', back: 'tout à l’heure, en Afrique de l’Ouest', say: S(2266).fr },
    { front: 'jamais un mot inventé au hasard', back: 'la panne de son', say: S(2280).fr },
    { front: 'nommer avant de réparer', back: 'le triage', say: S(2294).fr },
    { front: 'lire la consigne avant d’écouter', back: 'l’épreuve experte', say: S(2310).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A9_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a9-roundup', layer: 'core', title: 'Compréhension orale experte, en résumé',
  body: `${REFRAME} Tu avais déjà, grâce à ${ECOUTE_B2_REF} et ${DEBATS_C1_REF}, le signal : la charpente, la ligne de partage. Cette leçon t'a appris à le retrouver à travers quatre bruits, parfois empilés : le chevauchement, le registre, l'accent, la panne de son. ${LECTURE_C2_REF} fait le même travail à l'écrit, avec des textes académiques denses plutôt que des voix. EN: Next, the reading twin to this lesson works on dense written text the same way this one worked on noisy speech.`,
  points: [
    'Un chevauchement cache une idée, il ne l’efface jamais : note les deux positions séparément.',
    'Un registre qui bascule est une information sur l’attitude, jamais une faute à corriger.',
    'Un mot régional inconnu se résout par le contexte qui suit, sans arrêter l’écoute.',
    'Une panne de son se répare avec ce qui l’entoure, jamais en l’inventant au hasard.',
    'Plusieurs bruits à la fois se nomment et se traitent un par un, en commençant par la voix la plus claire.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['signal', 'triage'],
};

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'L’épreuve experte',
    opener: {
      line: 'Deux sittings d’examen, une seule écoute chacune : ici tu appliques tout ce triage sous la contrainte réelle des formats DALF C2, TCF et TEF. EN: Two exam sittings, one listen each: here you apply all this triage under the real constraint of the DALF C2, TCF and TEF formats.',
      imageRef: 'lessons/c2-11-ecoute-experte/act09.jpg',
    },
    sections: [],
    milestone: 'Tu as trié tous les bruits de la leçon sous un format d’examen, et passé l’épreuve : quarante-deux questions, sept rounds. EN: You have triaged every kind of noise in the lesson under exam conditions, and sat the test: forty-two questions, seven rounds.',
    estScreens: 60,
    restPoints: ['a9-exam-a', 'a9-exam-b', 'a9-quiz/r3-quebec', 'a9-quiz/r6-panne'],
  },
  sections: [A9_EXAM_A, A9_EXAM_B, A9_CHEAT, A9_PROGRESS, A9_QUIZ, A9_REVIEW, A9_ROUNDUP],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`. Every
 *  drill is `mcq` or `sort`, both closed-choice formats: nothing here asks
 *  for a typed or spoken answer, matching the lesson's R shape.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-chevauchement', title: 'Deux voix, deux lignes', format: 'sort' as const, coach: 'Deux piles : la phrase fait avancer le chevauchement, ou annonce-t-elle la reprise ? EN: sort what moves an overlap along from what announces its resumption.', buckets: ['le chevauchement avance', 'la reprise'], items: [E(2211), E(2212), E(2220), E(2215), E(2217), E(2218)], audio: AUDIO },
  { id: 'd-registre', title: 'Une émotion, pas une faute', format: 'mcq' as const, coach: 'Pour chaque bascule de registre : qu’est-ce qu’elle signale ? EN: for each register shift, what does it signal?', q: 'Un interlocuteur très soutenu bascule soudain vers un mot très familier. C’est le signe...', opts: ['d’une émotion contenue', 'd’une faute de français'], correct: 0, why: 'Le registre change avec l’émotion, jamais avec la compétence. EN: register shifts with emotion, never with competence.', items: [E(2225), E(2228), E(2229), E(2233), E(2234), E(2236)], audio: AUDIO },
  { id: 'd-variantes', title: 'Résoudre par le contexte', format: 'mcq' as const, coach: 'Devant un mot régional inconnu (Québec, Belgique, Suisse, Afrique de l’Ouest) : attends la phrase qui suit. EN: facing an unfamiliar regional word, wait for the next sentence.', q: '« Tout à l’heure, vers neuf heures », dit à dix-sept heures. De quand s’agit-il ?', opts: ['du matin même, plus tôt', 'de plus tard ce soir'], correct: 0, why: 'L’heure donnée tranche le sens. EN: the given time decides the meaning.', items: [E(2238), E(2252), E(2266), E(2239), E(2259), E(2271)], audio: AUDIO },
  { id: 'd-panne', title: 'Réparer, jamais inventer', format: 'sort' as const, coach: 'Deux piles : la réparation attend une confirmation, ou invente-t-elle un mot au hasard ? EN: sort a repair that waits for confirmation from one that guesses at random.', buckets: ['attend une confirmation', 'invente au hasard'], items: [E(2281), E(2282), E(2290), E(2285), E(2280), E(2293)], audio: AUDIO },
  { id: 'd-triage', title: 'Un bruit à la fois', format: 'mcq' as const, coach: 'Devant plusieurs bruits empilés : nomme chacun, commence par le plus clair. EN: facing several kinds of noise stacked together, name each one, start with the clearest.', q: 'Trois bruits arrivent dans la même phrase. Tu les traites...', opts: ['tous ensemble, globalement', 'un par un, en commençant par le plus clair'], correct: 1, why: 'Le triage ne supprime aucun bruit, il décide seulement par lequel commencer. EN: triage erases no noise, it only decides where to start.', items: [E(2294), E(2296), E(2302), E(2304), E(2307), E(2308)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'chevauchement-mal-attribue', description: 'Attributes an overlapped line to the wrong speaker, drops one of two overlapping positions, or stops noting mid-overlap.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check'], drill: 'd-chevauchement', retest: 'd-chevauchement' },
  { id: 'registre-pris-pour-confusion', description: 'Treats a mid-exchange register shift as an error or confusion rather than an attitude signal, or ignores it entirely.', detectOn: ['a3-trier', 'a3-erreurs', 'a3-check'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'mot-regional-bloque', description: 'Stalls on an unfamiliar regional word or number (Québec, Belgique, Suisse, Afrique de l’Ouest) instead of resolving it from context, or treats a regionalism as an error.', detectOn: ['a4-trier', 'a4-erreurs', 'a5-trier', 'a5-erreurs', 'a6-trier', 'a6-erreurs'], drill: 'd-variantes', retest: 'd-variantes' },
  { id: 'panne-mal-reparee', description: 'Invents a plausible word at random after a sound dropout instead of waiting for what context confirms, or assumes a weakened signal changes the meaning.', detectOn: ['a7-trier', 'a7-erreurs', 'a7-check'], drill: 'd-panne', retest: 'd-panne' },
  { id: 'obstacles-non-tries', description: 'Reacts globally to several kinds of noise stacked in one passage instead of naming and triaging each one, or starts with the most intriguing voice rather than the clearest.', detectOn: ['a8-trier', 'a8-erreurs', 'a8-check'], drill: 'd-triage', retest: 'd-triage' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here. Every sheet is reached
 *  from a mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-signal', 'Le signal, le bruit, le triage', ['les quatre bruits', 'les repères du chevauchement', 'ce que signale un registre', 'la grille de triage'], [
    teach('sheet-signal-teach', 'Le signal, sous quatre bruits possibles',
      `Le signal, c'est ce que ${ECOUTE_B2_REF} et ${DEBATS_C1_REF} t'ont déjà appris à trouver : le plan, les positions, ce que chacun accorde et refuse. Ici, quatre bruits viennent s'ajouter par-dessus, parfois ensemble : le chevauchement de deux voix, un registre qui bascule, un accent ou un mot régional inconnu, une panne de son. Aucun de ces bruits n'efface le signal ; chacun se traite avec son propre réflexe. ${REFRAME} EN: The signal is what the two predecessor lessons already taught you to find; four kinds of noise sit on top of it here, each with its own fix.`),
    table('sheet-signal-chevauchement', 'Les repères du chevauchement', ['Tu entends', 'Ça veut dire', 'Tu fais'], [
      ['deux voix collées une seconde', 'un chevauchement', 'tu notes les deux positions séparément'],
      ['la voix qui monte', 'rarement celle qui garde la parole longtemps', 'tu n’abandonnes pas l’autre voix'],
      ['le prénom lancé par l’animateur', 'ton repère pour savoir qui parle', 'tu attribues la phrase qui suit à ce nom'],
      ['comme je le disais', 'une idée coupée qui revient', 'tu la rattaches à l’idée d’avant le chevauchement'],
    ]),
    table('sheet-signal-registre', 'Ce que signale un registre', ['Tu entends', 'Le registre', 'Ce que ça signale souvent'], [
      ['vouvoiement, vocabulaire choisi', 'soutenu', 'distance, prudence, ou protection'],
      ['glissement vers des mots familiers', 'la bascule', 'une émotion contenue'],
      ['retour soudain au soutenu', 'le retour', 'une distance qu’on referme, une demande qui arrive'],
      ['familier chez un professionnel', 'l’anomalie', 'rarement un hasard'],
    ]),
    table('sheet-signal-triage', 'La grille de triage', ['Tu remarques', 'Le bruit probable', 'Ton réflexe'], [
      ['deux voix collées', 'un chevauchement', 'séparer, attendre le recadrage'],
      ['un mot jamais entendu', 'un accent, une variante', 'laisser un « ? », résoudre par le contexte'],
      ['un ton qui change en pleine phrase', 'une bascule de registre', 'se demander ce qu’elle signale'],
      ['un silence, un grésillement', 'une panne de son', 'ranger dans une des trois cases, puis réparer'],
    ]),
  ]),
  sheet('sheet-accents', 'Des mots d’ailleurs', ['le Québec', 'la Belgique et la Suisse', 'l’Afrique de l’Ouest'], [
    teach('sheet-accents-teach', 'Trois régions, jamais une faute',
      `Québec, Belgique, Suisse, Afrique de l'Ouest : chaque région a ses mots de tous les jours, jamais une version fautive du français. Résous chaque mot inconnu par ce que la phrase, puis la suite, confirment. EN: four regions, each with its own everyday words; resolve the unfamiliar ones from what the sentence, then what follows, confirm.`),
    table('sheet-accents-quebec', 'Le Québec', ['Tu entends', 'Ça veut dire'], [
      ['dîner', 'le repas de midi'],
      ['souper', 'le repas du soir'],
      ['faque', 'donc, alors (fait que)'],
      ['pantoute', 'pas du tout'],
      ['achaler', 'déranger, harceler gentiment'],
      ['dispendieux', 'cher'],
      ['un breuvage', 'une boisson, quelle qu’elle soit'],
    ]),
    table('sheet-accents-belgique-suisse', 'La Belgique et la Suisse', ['Tu entends', 'Ça veut dire', 'Où'], [
      ['septante', 'soixante-dix (70)', 'Belgique, Suisse'],
      ['huitante', 'quatre-vingts (80)', 'Suisse seulement'],
      ['nonante', 'quatre-vingt-dix (90)', 'Belgique, Suisse'],
      ['une fois', 'un mot de remplissage', 'Belgique'],
      ['s’il vous plaît', 'tiens, voilà (en tendant quelque chose)', 'Belgique'],
      ['le natel', 'le téléphone portable', 'Suisse'],
      ['poutzer', 'nettoyer', 'Suisse'],
      ['une action', 'une promotion, une offre', 'Suisse'],
      ['le cheni', 'le désordre', 'Suisse'],
    ]),
    table('sheet-accents-afrique', 'L’Afrique de l’Ouest', ['Tu entends', 'Ça veut dire'], [
      ['tout à l’heure', 'un moment déjà passé, ou à venir : vérifie l’heure donnée'],
      ['le goudron', 'la route goudronnée'],
      ['ça va aller', 'une rassurance, sans date précise'],
      ['causer', 'parler, discuter (neutre)'],
      ['je vous prie de bien vouloir', 'une formule très soutenue, courante même au téléphone'],
      ['véritablement', 'vraiment, un renforcement courant'],
    ]),
  ]),
  sheet('sheet-pannes', 'Trois pannes, trois réparations', ['les trois cases', 'les réparations'], [
    teach('sheet-pannes-teach', 'Une panne se répare, elle ne se devine pas',
      `Un son abîmé range dans l'une de trois cases : un mot entier disparu, un mot seulement abîmé, une phrase couverte par un bruit de fond. Chaque case a sa réparation, et aucune ne s'improvise au hasard. ${S(2280).fr} EN: A dropout files into one of three boxes, each with its own repair, never a random guess.`),
    table('sheet-pannes-cases', 'Les trois cases', ['La panne', 'Ce qui reste', 'La réparation'], [
      ['un mot entier perdu', 'rien du mot', 'j’attends ce que la suite confirme'],
      ['un mot abîmé', 'le début ou la fin', 'je complète avec ce qui reste'],
      ['une phrase couverte par un bruit', 'le sens général', 'j’attends la reformulation'],
    ]),
    table('sheet-pannes-chiffres', 'Un cas à part : les chiffres', ['Risque', 'Réflexe'], [
      ['un chiffre coupé par une mauvaise ligne', 'j’attends une répétition avant de le noter'],
      ['un chiffre qui sonne plausible', 'je ne le note pas comme confirmé sans une seconde source'],
    ]),
  ]),
  sheet('sheet-epreuve', 'L’épreuve experte', ['les formats', 'le triage en une image'], [
    teach('sheet-epreuve-teach', 'Le triage ne change pas en une seule écoute',
      `Aux formats DALF C2, TCF et TEF, la consigne et les options se lisent avant le premier mot entendu. Un accent inconnu, à l'épreuve, fait partie de ce qu'on évalue, jamais un hasard. Garde ton triage (chevauchement, registre, accent, panne) même sous la contrainte d'une seule écoute. EN: At exam formats, an unfamiliar accent is part of the test; keep your whole triage even under a single listen.`),
    table('sheet-epreuve-formats', 'Les formats, dans cette leçon', ['Épreuve', 'Le document', 'Ce qu’on te demande'], [
      ['TCF, style de l’acte 9', 'trois documents courts, chacun entendu une fois', 'une information précise par document'],
      ['DALF C2, style de l’acte 9', 'un document plus long, entendu une fois', 'la structure de l’intervention, ses éléments'],
      ['TEF', 'des interventions à accents variés', 'l’idée principale malgré l’accent'],
    ]),
    table('sheet-epreuve-pieges', 'Deux pièges fréquents', ['Le piège', 'Le réflexe'], [
      ['une option répète exactement un mot entendu', 'se méfier : parfois un piège, pas une confirmation'],
      ['un accent surprend et distrait', 'se rappeler qu’il fait partie de ce qu’on évalue, pas un hasard'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows, each id released ONCE, and
 *  only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((_a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id)]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-11-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-11-signal': "Act 1 EAR MISSION: Fréquence Monde, seven lines, ONE TAKE, TWO VOICES: a Paris host (lines 1, 3, 5) and a Swiss caller (lines 2, 4, 6, 7). LOW RISK IF A SWISS VOICE IS UNAVAILABLE YET: the mild overlap in lines 2-3 is the only real ask here; everything else works on plain TTS.",
  'rec-c2-11-panel': "Act 2 EAR MISSION, HIGH VOICE DEPENDENCY: the rent-cap panel, eight lines, ONE TAKE, THREE VOICES: host (1, 5, 8), Camille Aznar (2, 4), Bertrand Soler (3, 6, 7). REAL OVERLAP REQUIRED: line 3 must cut into line 2 mid-word, line 4 must push back over the tail of line 3. Without genuine simultaneous audio, the whole act's premise (two voices truly on top of each other) is only described, not heard.",
  'rec-c2-11-reperes': 'The four landmark cards, one voice, conversational pace.',
  'rec-c2-11-mediation': "Act 3 EAR MISSION: the mediation call, seven lines, ONE TAKE, TWO VOICES: Mme Castet, a notary, even and formal throughout (1, 3, 5, 7), and M. Rouillon, a tenant, whose register must audibly loosen on lines 2 and 4, then tighten back up on line 6. Needs real TONE control, not just different wording, to land fully; still legible on words alone if TTS is all that is available.",
  'rec-c2-11-quebec': "Act 4 EAR MISSION, HIGH VOICE DEPENDENCY: the Québec interview, eight lines, ONE TAKE, TWO VOICES: a Paris or neutral host (1, 3, 5, 7) and a genuinely Québécois guest, M. Lavallée (2, 4, 6, 8), natural Québec French, not an imitation. Confirm a real Québécois voice is available before booking; an imitated accent would undercut the act's whole point.",
  'rec-c2-11-glossaire-quebec': 'The four glossary cards, Québécois voice if available, else plain TTS.',
  'rec-c2-11-support': "Act 5 EAR MISSION, HIGH VOICE DEPENDENCY: the support call, eight lines, ONE TAKE, TWO VOICES: a Belgian client (2, 4, 6) and a Swiss support agent, Nadia (1, 3, 5, 7, 8). Two DISTINCT, genuine accents needed, not the same voice twice; confirm both are available before booking.",
  'rec-c2-11-glossaire-belgique-suisse': 'The six-row table’s audio, Belgian or Swiss voice if available, else plain TTS.',
  'rec-c2-11-dakar': "Act 6 EAR MISSION, HIGH VOICE DEPENDENCY: the Dakar call, eight lines, ONE TAKE, ONE VOICE, M. Diatta, a genuinely West African French register and accent, formal and warm, not an imitation. Confirm this voice is available before booking; it carries the whole act alone.",
  'rec-c2-11-glossaire-afrique': 'The four glossary cards, West African voice if available, else plain TTS.',
  'rec-c2-11-chantier': "Act 7 EAR MISSION: the construction-site call, nine lines, ONE TAKE, TWO VOICES, Mme Faye and M. Perrin, with CONTINUOUS CONSTRUCTION-SITE AMBIENCE under M. Perrin's lines, loud enough that 'quatorze heures' (line 4) and 'local technique' (line 6) are genuinely the hardest phrases to catch before their own restatements. Lower voice risk than acts 2, 4, 5, 6 and 8: this act's difficulty is background noise, which TTS plus an ambience track can approximate reasonably well.",
  'rec-c2-11-stacked': "Act 8 EAR MISSION, THE SINGLE HIGHEST-RISK SCENE IN THE LESSON: ten lines, ONE TAKE, THREE VOICES: a Paris host (1, 4, 6, 9), Mme Diatta, West African French, in studio (2, 7, 10), and a Swiss caller, Fribourg French, on a weakening phone line (3, 5, 8). REQUIRES ALL AT ONCE: two genuine regional accents, a real overlap (line 5 cutting into line 6), and a degrading phone-line effect under the caller's lines. If ANY of these three capabilities (stacked overlap, Swiss accent, West African accent) is unavailable, this act should be the first one re-scoped, since it is this lesson's reason to exist.",
  'rec-c2-11-triage': 'The triage grid’s audio, same voices as rec-c2-11-stacked where possible.',
  'rec-c2-11-exam-a': 'Act 9, TCF-style sitting: five lines, ONE TAKE, at least two distinct voices across the three documents (a Belgian listener, a Dakar manager, a technician), each document self-contained, MAX ONE PLAY per the exam-format rule.',
  'rec-c2-11-exam-b': "Act 9, DALF C2-style sitting: four lines, ONE TAKE, ONE VOICE, West African French register, formal and warm, same voice as rec-c2-11-dakar if available. MAX ONE PLAY per the exam-format rule.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 11',
  intro: 'At C2 you can already find the frame and the dividing line in natural speech. This lesson stacks four real obstacles on top of that skill: two voices overlapping, a register that shifts mid-exchange, an unfamiliar regional accent (Québec, Belgique, Suisse, Afrique de l’Ouest), and audio that is itself degraded. You learn to triage several of these at once in a single passage, and to keep working under DALF C2, TCF and TEF exam conditions. You are never asked to speak or write a response: every mission is recognition only.',
  skill: 'CO',
  grammarAssumed: [UNIT.prereqUnitIds[0], UNIT.prereqUnitIds[1]],
  grammarIntroduced: [
    'Tracking two overlapping speakers: separating two positions through a chevauchement, using the host’s recadrage to know who resumes, and recognising that a cut idea returns rather than vanishing',
    'Reading a mid-exchange register shift (soutenu to familier, or back) as an attitude signal, never as an error, and noting it alongside content rather than instead of it',
    'Resolving unfamiliar regional vocabulary and numbers from context, received only: Québécois (dîner/souper, faque, pantoute), Belgian and Swiss (septante/huitante/nonante, le natel), and West African French (tout à l’heure in its past sense, le goudron, ça va aller)',
    'Repairing degraded audio: filing a dropout into one of three types (a whole word lost, a word damaged, a sentence masked by background noise) and repairing each from context, never by inventing a plausible word',
    'Triaging several of the above at once in a single passage, naming each kind of noise before fixing it, and applying the same triage under DALF C2, TCF and TEF listening conditions',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au C2, tu sais déjà trouver la charpente et la ligne de partage dans un français naturel. Cette leçon empile quatre vrais obstacles par-dessus : deux voix qui se chevauchent, un registre qui bascule, un accent inconnu (Québec, Belgique, Suisse, Afrique de l’Ouest), et un son lui-même abîmé. Tu apprends à trier plusieurs de ces bruits à la fois dans un même passage, et à tenir sous les conditions des épreuves DALF C2, TCF et TEF. Tu ne parles ni n’écris jamais : chaque mission est une reconnaissance.',
    minutes: 150,
    difficulty: 5,
    glyph: 'écoute',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ECOUTE_EXPERTE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, IMPORT_IDS, B225_REFRAME, B225_REFRAME_EN, C121_REFRAME, C121_REFRAME_EN };
