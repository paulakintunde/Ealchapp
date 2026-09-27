// b2.25.l1 « Écouter à vitesse réelle » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE, strategy
// variant, amended §1.4) on top of B1-BUILD-PLAYBOOK.md, with the B2 rules
// of B2-BUILD-LOG.md. The B2 sequel of b1.38 « Écouter sans tout comprendre »
// (../b1/strategies-ecoute-lesson.ts): same act loop, same « use it » beat
// named the same way in every act, same closing act. The B2 CO remediation
// target: a learner who fails a B2 listening task in the Examiner is sent here.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES), so the validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 10 is built around a RECORDING and a MOVE:
//
//     1. MEET THE TEXT     an anchor `listening`, one to two minutes of
//                          natural speech, `hideLines: true`. The questions
//                          ask what the move got from the audio; the
//                          transcript unmasks once every question is answered.
//     2. NOTICE THE MOVE   one `cardDeck`, `tapTable`, `focus` or `hacks`,
//                          each linked to a reference sheet.
//     3. PRACTISE          two checks on NEW material: `groupDrill`,
//                          `trapDrill`, `commonErrors`, a second `listening`,
//                          `examples`, `dictation`.
//     4. USE IT            « Pour ta charpente », in every act: the act's one
//                          tool for the graded notes and summary. A
//                          `groupDrill` that sets the note line built with
//                          the move against the line a listener without it
//                          would write.
//
//   Act 1 is the problem scene; act 11 is the production act. Every act ends
//   on its gated check.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (recording · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le débat qui file          6   a short radio debate (scene)
//    2  Le plan annoncé            6   a public lecture on urban noise ·
//                                      announced structure, asides
//    3  Des notes en charpente     7   a radio chronicle on canteen waste ·
//                                      key words, arrows, figures, gaps
//    4  Qui pense quoi             6   a radio debate on short-term rentals,
//                                      then a street poll · positions
//    5  Couper, reprendre          6   an interview with interruptions ·
//                                      turn-taking
//    6  Le ton                     7   a two-host podcast, then six stances ·
//                                      concession, doubt, irony
//    7  Le fait et la source       6   a news report with a witness ·
//                                      fact, source, conditional, opinion
//    8  Le non poli                6   a phone negotiation · implicit
//                                      disagreement
//    9  Rattraper le fil           6   a lecture extract, then restatements ·
//                                      recovering after a missed chunk
//   10  L'épreuve                  6   an international street poll · DELF
//                                      B2, TEF and TCF formats
//   11  Le débat de midi          11   the two-minute debate · plan, role
//                                      play, TASK, quiz, review
//
//   TOTAL 73 missions, 11 acts (6,6,7,6,6,7,6,6,6,6,11). Corpus: 165
//   authored rows (.1600-.1764, no gaps) plus 26 reused seed rows. 14
//   listenings (eleven anchors, a street poll, six stances, the
//   restatements), 0 readings. Quiz: 11 rounds of 8. Eleven error triggers,
//   eleven drills, five reference sheets, eleven terms. Chapter artwork:
//   `ecoute-vitesse-reelle-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Écoute la charpente : le plan, les positions, le ton. »
//   EN: Listen for the frame: the plan, the positions, the tone.
//
//   ONE METAPHOR, THE FRAME (la charpente): the beams of a house, on which
//   everything else hangs; also the shape of the notes. It goes past
//   b1.38's net (« Attrape le sens, pas chaque mot. »), which is quoted in
//   act 1 and the roundup: at B2 the gist is not enough, the learner must
//   know how the talk is built and who stands where (corpus §E).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    natural-speed listening for structure and stance: the announced
//           plan and asides; notes as a frame; following positions and
//           turn-taking in a debate; concession, doubt and irony by ear;
//           fact, source and the journalist's conditional in a report; the
//           polite no; recovering after a missed chunk; B2 listening
//           formats; the summary of a debate.
//   QUOTES  b1.38's reframe (act 1, roundup, sheet-plan) and b1.37's (sheet-
//           fil); b1.38 and b1.37 rows by id; b1.32's certes rows; b1.30's
//           c'est-à-dire; b2.24 (critical reading) by trail position.
//   LEAVES  regional French as a system to b2.31 (only marked here);
//           concession as grammar to b2.16; producing the B2 structures to
//           lessons 1 to 16 of B2 (only recognised here, one quiz round);
//           running a meeting and negotiating to b2.26.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs (radio and
//   business say « vous », the podcast hosts « tu »). Natural B2 French, with
//   English on every learner string (`en`, or a final « EN: »), and NO
//   answer carries a gloss. Every `say` is French. Lessons cited by trail
//   position in words. Regional forms marked as regional every time
//   (Québec: balado, cellulaire, pis, présentement; Belgium: septante,
//   savoir for pouvoir; Switzerland: septante; West Africa: présentement),
//   never caricatured. Scenario turns use ’ only. No em dash.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. ANCHOR LINES ARE NOT ALL CORPUS ROWS (corpus §A.4). At B2 a line is
//      15 to 35 words of connected talk; making 180 of them flashcards would
//      bloat the deck with lines nobody should memorise. The move-carrying
//      lines are rows; the rest is text owned by the corpus file. Accept?
//   2. The task prints the debate's TRANSCRIPT in the brief (TaskView has
//      no source field and no player), with « write from memory first ».
//      The ear is tested just before, in `a11-debat`. A playable `source`
//      on `task` remains the real fix.
//   3. `Lesson.skill` is 'CO' although the task is written (b1.38's rule).
//   4. The quiz has a round recycling structures from lessons 1, 2, 4, 6,
//      7 and 16 of B2 (the B2 rule), although those lessons are not built
//      yet (wave 2 onwards). Keep the round, or swap it for a second
//      exam-format round until they exist?
//   5. Every line is fr-FR TTS. Irony is carried by words and situation,
//      but act 6 (podcast, six stances), the Belgian witness (act 7) and the
//      four street-poll voices (act 10) need real voices first; the briefs
//      say so.
//   6. 14 listenings and 0 readings; 2 trapDrills (playbook says 3 to 5):
//      a listening lesson spends its trap budget on hidden listenings.
//   7. `prereqUnitIds` names b1.38 and b1.37 only: b2.24 does not exist
//      yet. Add it when it lands?
//   8. Sub-theme « écouter à vitesse réelle » must be added to the theme
//      in Postgres at import.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, B1S, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  TRIBUNE_LINES, EXPOSE_LINES, CHRONIQUE_LINES, LOGEMENT_LINES, TROTTOIR_LINES,
  INTERVIEW_LINES, BALADO_LINES, TON_LINES, REPORTAGE_LINES, APPEL_LINES,
  COURS_LINES, RELANCE_LINES, MONDE_LINES, DEBAT_LINES, DEBAT_TRANSCRIPT,
  B138_REFRAME, B138_REFRAME_EN, B137_REFRAME,
  ECOUTE_B1_UNIT, LECTURE_B1_UNIT, DISCOURS_B1_UNIT, CONCESSION_B1_UNIT,
  ECOUTE_B1_REF, LECTURE_B1_REF, CONCESSION_B1_REF, CONNECTEURS_REF, LECTURE_B2_REF, REGIONS_REF, NEXT_REF,
  PQP_REF, COND_PASSE_REF, SI_MIXTE_REF, SUBJ_REF, FUT_ANT_REF, CONCESSION_B2_REF,
} from './ecoute-vitesse-reelle-corpus.ts';
import { ECOUTE_VITESSE_TERMS } from './ecoute-vitesse-reelle-terms.ts';

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
  if (!r) throw new Error(`b2.25: no item ${id}`);
  return r;
}
/** Shorthand for this lesson's own rows. */
const S = (n: number) => src(E(n));

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.25: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.25: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
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

/** THE « USE IT » BEAT: the act's one tool for the notes and the summary.
 *  Same title in every act so the loop is visible. */
function pourTaCharpente(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta charpente', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE DÉBAT QUI FILE
 *
 *  The problem, before any strategy: a learner hears a radio debate at
 *  natural speed, catches plenty of words, and still cannot tell a colleague
 *  who is for and who is against.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La radio de la salle de pause',
  frSub: 'La Tribune du midi',
  setting: { place: "La salle de pause d'un bureau", city: 'Montréal', time: '12 h 10', ambience: 'une radio sur le frigo, un micro-ondes, deux voix qui débattent vite' },
  beats: [
    {
      kind: 'narration',
      text: "Mardi, 12 h 10, dans la salle de pause. La radio diffuse La Tribune du midi : un débat sur les rues fermées aux voitures devant les écoles. Tu écoutes en réchauffant ton repas.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia, ta collègue',
      fr: "J'ai raté le début. Dis-moi ce que pensent les deux invités.",
      en: 'I missed the beginning. Tell me what the two guests think.',
      respell: '[zhay ra-TAY luh day-BÜ | dee-mwa suh kuh pahⁿs lay deu-zehⁿ-vee-TAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Euh, des voitures, onze accrochages, des livraisons, dix heures.',
      en: 'Um, cars, eleven minor collisions, deliveries, ten o’clock.',
      respell: '[EU | day vwa-TÜR | ohⁿz a-kro-SHAZH | day lee-vray-ZOHⁿ | dee-ZUHR]',
      stage: 'Tu as beaucoup de mots. Mais Nadia ne sait toujours pas qui défend quoi.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia, ta collègue',
      fr: "D'accord, mais qui est pour, et qui est contre.",
      en: 'Fine, but who is for it, and who is against it.',
      respell: '[da-KOR | meh kee eh POOR | ay kee eh KOHⁿTR]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Le débat reprend après la pause. Cette fois, comment écoutes-tu ?',
      size: 'lg',
      options: [
        { fr: S(1600).fr, respell: rsOf(E(1600)), en: S(1600).en, outcome: 'breaks', audio: AUDIO },
        { fr: S(1601).fr, respell: rsOf(E(1601)), en: S(1601).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Tu notes deux noms, et sous chacun deux mots : « pour, sécurité » et « contre la méthode, livraisons ». Nadia a sa réponse en dix secondes.",
        breaks: "Tu écris vite, tu rates une phrase sur deux, et tes notes ne disent toujours pas qui défend quoi. Nadia repart avec son café.",
      },
    },
    {
      kind: 'break',
      heading: 'Tu avais des mots, pas une charpente',
      body: "À vitesse réelle, personne n'entend tous les mots. Ce qui compte : le plan, qui défend quoi, et sur quel ton. EN: At real speed nobody hears every word; what counts is the plan, the positions and the tone.",
      wrong: { fr: S(1600).fr, ipa: ipaOf(E(1600)), respell: rsOf(E(1600)), en: S(1600).en },
      right: { fr: S(1601).fr, ipa: ipaOf(E(1601)), respell: rsOf(E(1601)), en: S(1601).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon t'apprend à suivre un débat, un exposé, un reportage ou une négociation à vitesse réelle. À la fin, tu prends des notes sur un débat de deux minutes et tu en écris le résumé.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente', 'position'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Suivre le plan', s: 'Actes 2 et 3 : le plan annoncé, des notes en charpente' },
    { t: 'Savoir qui pense quoi', s: 'Actes 4 et 5 : les positions, la prise de parole' },
    { t: 'Entendre le ton', s: 'Actes 6 à 8 : concession, doute, ironie, sources, le non poli' },
    { t: 'Tenir jusqu’au bout', s: "Actes 9 à 11 : rattraper le fil, l'épreuve, puis ton résumé" },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the whole extract, hidden. */
const A1_DEBAT: Sec<'listening'> = {
  type: 'listening',
  id: 'a1-debat',
  layer: 'core',
  hideLines: true,
  title: 'La Tribune du midi',
  frSub: 'Qui défend quoi, et comment',
  lines: TRIBUNE_LINES,
  questions: [
    { q: 'Qui est pour la fermeture des rues devant les écoles ?', opts: ['Hélène Brassard', 'Samuel Ouellet', "l'animatrice"], correct: 1,
      why: "Samuel Ouellet, présenté comme « pour » par l'animatrice, puis ses accrochages. EN: Samuel Ouellet, introduced as being for it." },
    { q: 'Hélène Brassard est-elle contre la sécurité des enfants ?', opts: ['Non, elle conteste la méthode', 'Oui'], correct: 0,
      why: 'Elle le dit : pas contre la sécurité, contre la méthode. EN: she disputes the method, not safety.' },
    { q: 'Quand elle dit « certes » à propos des accrochages, elle...', opts: ['dit que le chiffre est faux', 'accepte le chiffre, puis le minimise'], correct: 1,
      why: "Certes, onze accrochages, mais aucun blessé : elle accorde, puis relativise. EN: she grants the figure, then plays it down." },
    { q: 'Quel problème pratique soulève-t-elle ?', opts: ['le bruit', 'le stationnement', 'les livraisons'], correct: 2,
      why: "Fermer deux heures par jour coupe l'accès aux livraisons. EN: deliveries." },
    { q: "Et l'animatrice, que fait-elle ?", opts: ['elle distribue la parole', 'elle défend les commerçants'], correct: 0,
      why: "Elle nomme, relance, coupe pour la pause : aucun avis. EN: she hands out the turns, no opinion." },
  ],
  audio: REC('rec-b2-25-tribune'),
  say: REFRAME,
  terms: ['position', 'charpente'],
};

/** PRACTISE: the frame against the words. */
const A1_CHARPENTE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-charpente',
  layer: 'core',
  size: 'lg',
  title: 'Des mots, ou une charpente',
  groups: [
    grp('Ce qui tient le débat', [
      it(E(1606), 'une voix, une position, une raison'),
      it(E(1607), 'une concession, puis le désaccord'),
      it(E(1608), "le rôle de l'animatrice"),
    ], chk(
      'Avec ces trois phrases, Nadia sait-elle qui pense quoi ?',
      ['Non, il manque les chiffres.', 'Oui, c’est la charpente du débat.'], 1,
      "Deux positions, une raison chacune, le rôle de chacun : le reste s'accroche dessus. EN: two positions and a reason each; the rest hangs on that.")),
    grp('Ce qui peut passer', [
      free('onze accrochages devant trois écoles', 'eleven minor collisions outside three schools', 'un chiffre qui soutient un argument'),
      free('deux heures par jour, livraisons à dix heures', 'two hours a day, deliveries at ten', 'les détails de la méthode'),
      it(E(1611), 'le sujet, en trois mots'),
    ], chk(
      'Tu rates « à dix heures ». As-tu perdu la position de Samuel ?',
      ['Non, seulement un détail.', 'Oui, tout est perdu.'], 0,
      "Sa position tient sans l'horaire : il veut fermer les rues. EN: his position survives without the time.")),
    ctl('Les noms', "Comment sais-tu que c'est Hélène Brassard qui répond ?",
      ['elle se présente', 'sa voix est plus aiguë', "l'animatrice dit son nom juste avant"], 2,
      "L'animatrice nomme chaque invité avant sa réponse : c'est ton repère. EN: the host names each guest first."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente', 'position'],
};

/** Where following the frame at speed costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Une réunion que tu dois résumer pour ta responsable', fr: 'Qui a proposé quoi, et qui a résisté ?', en: 'Who proposed what, and who pushed back?' },
    { situation: 'Un débat à la radio avant un vote municipal', fr: S(1603).fr, en: S(1603).en },
    { situation: "Un cours à l'université, sans diapositives", fr: 'Combien de parties, et où en est-on ?', en: 'How many parts, and where are we now?' },
    { situation: "L'épreuve d'écoute du DELF B2 ou du TEF", fr: "Quelle est l'attitude de cette personne ?", en: "What is this person's attitude?" },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente', 'position'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le réflexe', 'Un débat passe à vitesse réelle. Tu cherches d’abord...',
    ['qui défend quoi', 'chaque phrase, dans l’ordre'], 0,
    'Les positions, puis les raisons : les phrases viennent après. EN: positions first.'),
  ctl('Et la leçon 38 du B1', `« ${B138_REFRAME} » Au B2, ça suffit ?`,
    ['Oui, le sens suffit.', 'Non : il faut aussi le plan, les positions et le ton.'], 1,
    `Le sens dit de quoi on parle ; la charpente dit qui pense quoi, et comment. EN: ${B138_REFRAME_EN} At B2 you also need who thinks what.`),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...',
    ['un résumé des deux positions', 'la transcription du débat', 'ton avis sur l’autobus'], 0,
    "Un résumé de 120 à 160 mots, à partir de tes notes. EN: a 120 to 160 word summary from your notes."),
], ['charpente']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le débat qui file',
    opener: {
      line: "Un débat à la radio, trop rapide pour tout saisir : ici tu découvres ce qu'il faut suivre à la place des mots. EN: A radio debate too fast to catch in full: here you find out what to follow instead of the words.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act01.jpg',
    },
    sections: [],
    milestone: "Tu sais dire qui défend quoi dans un débat rapide, même avec des mots ratés. EN: You can say who argues for what in a fast debate, even with words missed.",
    estScreens: 30, restPoints: ['a1-debat'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_DEBAT, A1_CHARPENTE, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LE PLAN ANNONCÉ
 *
 *  TEXT: a public lecture on urban noise. MOVE: a talk announces its plan
 *  and signposts each part; an aside opens and closes. The plan becomes the
 *  headings of the notes before a single detail is written.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_EXPOSE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-expose',
  layer: 'core',
  hideLines: true,
  title: 'Une conférence sur le bruit',
  frSub: 'À la bibliothèque de Lausanne : écoute les panneaux',
  lines: EXPOSE_LINES,
  questions: [
    { q: "Combien de parties l'oratrice annonce-t-elle ?", opts: ['deux', 'trois', 'quatre'], correct: 1,
      why: 'Trois temps : la santé, les sources, les solutions. EN: three parts.' },
    { q: 'Que dit la première partie ?', opts: ['le bruit fatigue le cœur, même la nuit', 'les bars font trop de bruit'], correct: 0,
      why: "Premièrement, la santé : le cœur se fatigue même pendant le sommeil. EN: noise tires the heart, even at night." },
    { q: 'Les quarante décibels, c’est...', opts: ['la conclusion', 'le deuxième point', 'un détail qui précise le seuil'], correct: 2,
      why: "Une parenthèse, ouverte puis refermée : un détail hors du plan. EN: an aside, a detail outside the plan." },
    { q: 'D’où vient surtout le bruit, selon elle ?', opts: ['des bars, comme on le croit', 'de la circulation'], correct: 1,
      why: 'Pas des bars, mais surtout de la circulation. EN: mainly traffic.' },
    { q: 'Quelle est sa conclusion ?', opts: ['on ne peut rien y faire', 'c’est un choix politique', 'il faut fermer les bars'], correct: 1,
      why: "Pas une fatalité : un choix d'aménagement, donc politique. EN: a political choice." },
  ],
  audio: REC('rec-b2-25-expose'),
  say: REFRAME,
  terms: ['plan'],
};

/** NOTICE THE MOVE: the four signposts of a plan. */
const A2_ANNONCES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-annonces',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-plan',
  title: 'Les panneaux du plan',
  frSub: 'Annoncer, avancer, sortir, conclure',
  hint: 'Quatre cartes. Chaque panneau te dit où tu es.',
  audio: REC('rec-b2-25-annonces'),
  say: REFRAME,
  terms: ['plan'],
  cards: [
    { head: 'Annoncer le plan', label: 'au début',
      fr: S(1614).fr, sub: rsOf(E(1614)),
      body: "Trois temps, deux parties, quatre questions : prépare autant de lignes dans tes notes. EN: the number of parts gives you the number of headings." },
    { head: 'Avancer', label: 'une nouvelle partie',
      fr: S(1618).fr, sub: rsOf(E(1618)),
      body: "Premièrement, j'en viens à, troisième et dernier point : tu changes de ligne dans tes notes. EN: a signpost means a new heading." },
    { head: 'Sortir du plan, y revenir', label: 'la parenthèse',
      fr: S(1617).fr, sub: rsOf(E(1617)),
      body: "« Petite parenthèse » ouvre un détail, « je referme la parenthèse » ramène au plan. Tu peux laisser passer ce qu'il y a entre les deux. EN: an aside opens and closes; what is inside can usually pass." },
    { head: 'Conclure', label: 'la fin',
      fr: S(1620).fr, sub: rsOf(E(1620)),
      body: "Pour conclure, en somme, si je résume : écoute bien, c'est souvent la thèse en une phrase. EN: the conclusion often gives the thesis in one sentence." },
  ],
};

/** PRACTISE, on new signposts. */
const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Le plan avance, ou il fait un détour ?',
  frSub: 'Trie les panneaux',
  groups: [
    grp('Le plan avance', [
      it(E(1615), 'la première partie'),
      it(E(1622), 'ouvre une étape'),
      it(E(1623), 'ouvre la suivante'),
      it(B1S(1370), 'deux côtés annoncés'),
    ], chk(
      'Tu entends « dans un premier temps ». Tu attends ensuite...',
      ['« dans un second temps »', 'la conclusion tout de suite'], 0,
      'Un premier temps annonce un second : garde une ligne libre. EN: a first stage announces a second.')),
    grp('Le plan fait un détour', [
      it(E(1616), 'on sort du plan'),
      it(E(1625), 'on y revient'),
      it('fr.b1.expressions-imagees.1351', 'on y revient, en familier'),
    ], chk(
      'Après « revenons-en à notre sujet », tu...',
      ['arrêtes de noter', 'notes un nouveau sujet', 'reprends la ligne où tu étais'], 2,
      "Le détour est fini : tu retournes à la partie en cours. EN: back to the heading you were on.")),
    ctl('La fin', '« Pour conclure » annonce...',
      ['un exemple de plus', 'la thèse, souvent en une phrase'], 1,
      "C'est la phrase à garder mot pour mot, ou presque. EN: the sentence to keep almost word for word."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plan'],
};

/** PRACTISE: four ways a listener loses the plan. */
const A2_PIEGES: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-pieges',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de perdre le plan',
  errors: [
    { wrong: 'Le bruit vient surtout des bars.',
      right: 'Le bruit vient surtout de la circulation, pas des bars.',
      why: "Normal : « bars » est un mot fort, et tu l'attendais. Mais « pas des bars, comme on le croit » le rejetait. EN: the word you expected was the one being rejected." },
    { wrong: 'Le deuxième point, ce sont les quarante décibels.',
      right: 'Les quarante décibels sont une parenthèse ; le deuxième point, ce sont les sources.',
      why: "Un chiffre précis attire l'oreille. Mais il était entre « petite parenthèse » et « je referme la parenthèse ». EN: the figure sat inside an aside." },
    { wrong: 'Elle a parlé de trois choses, je ne sais plus lesquelles.',
      right: 'Trois parties : la santé, les sources, les solutions.',
      why: "Tu as entendu « trois temps » sans préparer trois lignes. Avec les titres, les détails trouvent leur place. EN: write the headings as soon as the plan is announced." },
    { wrong: "Sa conclusion : il faut baisser la vitesse.",
      right: 'Sa conclusion : le bruit est un choix politique.',
      why: "La vitesse était une solution du troisième point. La conclusion commence après « pour conclure ». EN: the conclusion starts after pour conclure." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plan', 'notes'],
};

/** USE IT: the plan becomes the headings. */
const A2_NOTE = pourTaCharpente('a2-note', 'Trois titres avant les détails', [
  grp('Deux façons de noter la conférence', [
    free('1. santé : cœur, 1 hab. sur 4 · 2. sources : circulation (pas bars) · 3. solutions : 30 km/h', '1. health: heart, 1 in 4 residents · 2. sources: traffic (not bars) · 3. solutions: 30 km/h', 'des titres, puis des mots'),
    free('bruit, bibliothèque, 40 décibels, motos, cœur, pluie, trois', 'noise, library, 40 decibels, motorbikes, heart, rain, three', 'des mots sans plan'),
  ], chk(
    'Laquelle t’aide à écrire un résumé ?',
    ['la seconde', 'la première'], 1,
    "Les trois titres du plan rangent chaque mot. EN: the three headings put every word in place.")),
  grp('Ta règle', [
    it(E(1626), 'avant les détails'),
    it(E(1627), 'la parenthèse'),
  ], chk(
    'Tu as noté les trois titres. Il te manque un détail du deuxième point. Tu...',
    ['laisses la case ouverte et continues', 'arrêtes d’écouter pour y penser'], 0,
    "La case attend ; la conférence, elle, continue. EN: the box can wait; the talk will not.")),
], ['plan', 'notes']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le plan', '« Je vais procéder en trois temps. » Tu fais quoi ?',
    ['tu prépares trois lignes', 'tu attends la fin'], 0,
    'Trois lignes, trois titres : la charpente de tes notes. EN: three headings.'),
  ctl('La parenthèse', "Ce qu'on dit entre « petite parenthèse » et « je referme la parenthèse » est...",
    ['souvent un détail', 'la thèse', 'le premier point'], 0,
    "Un détour : utile parfois, rarement essentiel. EN: an aside, usually a detail."),
  ctl('La fin', 'La phrase après « pour conclure »...',
    ['peut passer', 'est à garder'], 1,
    "Elle donne souvent la thèse de tout l'exposé. EN: it often gives the thesis."),
], ['plan']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le plan annoncé',
    opener: {
      line: "Une conférence annonce trois parties : ici tu apprends à suivre le plan qu'on te donne. EN: A lecture announces three parts: here you learn to follow the plan you are given.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act02.jpg',
    },
    sections: [],
    milestone: "Tu repères le plan annoncé, les passages d'une partie à l'autre et les parenthèses. EN: You can spot the announced plan, the move from part to part and the asides.",
    estScreens: 32, restPoints: ['a2-annonces'],
  },
  sections: [A2_EXPOSE, A2_ANNONCES, A2_TRIER, A2_PIEGES, A2_NOTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — DES NOTES EN CHARPENTE
 *
 *  TEXT: a radio chronicle on canteen waste, dense with figures and causes.
 *  MOVE: notes as a frame: key words, figures, arrows, a « ? » for a gap,
 *  room to fill in. The graded task is written from notes like these.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_CHRONIQUE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-chronique',
  layer: 'core',
  hideLines: true,
  title: 'La chronique du matin',
  frSub: 'Des chiffres, des causes, une réserve',
  lines: CHRONIQUE_LINES,
  questions: [
    { q: 'Quelle part des repas n’est pas terminée ?', opts: ['un sur trois', 'un sur quatre', 'la moitié'], correct: 0,
      why: 'Un repas sur trois, dans les écoles de la région. EN: one meal in three.' },
    { q: 'Quelles sont les deux causes ?', opts: ['les menus et le bruit', 'les mêmes portions pour tous, et trop peu de temps'], correct: 1,
      why: "D'abord les portions, ensuite les vingt minutes : deux flèches vers le gaspillage. EN: same portions, too little time." },
    { q: 'Avec les deux changements, le gaspillage...', opts: ['a doublé', 'n’a pas bougé', 'a baissé de 40 %'], correct: 2,
      why: 'En six mois, moins quarante pour cent. EN: down forty per cent.' },
    { q: 'Les enfants ont-ils mangé moins de légumes ?', opts: ['Non, plus', 'Oui'], correct: 0,
      why: 'Plus de légumes, pas moins : le détail qui surprend. EN: more vegetables, not fewer.' },
    { q: 'À la fin, le chroniqueur est...', opts: ['contre l’idée', 'favorable, avec une réserve sur le coût'], correct: 1,
      why: "« Pas si vite » et « reste à savoir qui va payer » : il aime l'idée, il doute du financement. EN: in favour, with doubts about cost." },
  ],
  audio: REC('rec-b2-25-chronique'),
  say: REFRAME,
  terms: ['notes'],
};

/** NOTICE THE MOVE: four rules for frame notes. */
const A3_REGLES: Sec<'focus'> = {
  type: 'focus',
  id: 'a3-regles',
  layer: 'core',
  sheetId: 'sheet-plan',
  title: 'Quatre règles pour noter à vitesse réelle',
  points: [
    'Des mots-clés, jamais des phrases : les noms, les verbes, les chiffres. EN: key words, never sentences.',
    'Les chiffres en chiffres, tout de suite : 1/3, 120 g, -40 %. EN: figures as figures, at once.',
    'Des flèches et des symboles pour les liens : cause, conséquence, hausse, baisse. EN: arrows and symbols for links.',
    'Un « ? » quand tu rates, et de la place pour compléter après. EN: a question mark for gaps, room to fill in.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['notes'],
};

/** NOTICE THE MOVE, part two: the symbols, as a table. */
const A3_SYMBOLES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-symboles',
  layer: 'core',
  sheetId: 'sheet-plan',
  title: 'Six signes pour noter vite',
  cols: ['Tu écris', 'Ça veut dire', 'Exemple'],
  rows: [
    { cells: ['→', 'cause, conséquence', 'portions → gaspillage'], say: S(1629).fr,
      detail: { title: 'La flèche', body: "Une flèche remplace parce que, donc, ce qui entraîne. Elle garde le lien sans les mots. EN: an arrow replaces because and so.", say: S(1641).fr } },
    { cells: ['↑ ↓', 'ça monte, ça baisse', 'gaspillage ↓ 40 %'], say: S(1635).fr,
      detail: { title: 'Hausse et baisse', body: "Une flèche vers le haut ou vers le bas, puis le chiffre. Tu n'écris ni augmenter ni baisser. EN: up or down arrow, then the figure.", say: 'La fréquentation a augmenté de trente pour cent.' } },
    { cells: ['=  ≠', 'pareil, différent', 'portions 6 ans = 11 ans'], say: 'Les portions sont les mêmes à six ans et à onze ans.',
      detail: { title: 'Égal, différent', body: "Pour une comparaison ou une opposition entre deux voix : A ≠ B. EN: for comparisons, or two voices that disagree.", say: 'Les deux invités ne sont pas du même avis.' } },
    { cells: ['?', 'raté, à compléter', '? coût du personnel'], say: S(1631).fr,
      detail: { title: 'Le point d’interrogation', body: "Il marque un trou sans t'arrêter. Tu le rempliras avec la suite ou le résumé final. EN: it marks a gap without stopping you.", say: S(1632).fr } },
    { cells: ['pb, bcp, qqn', 'problème, beaucoup, quelqu’un', 'pb = 20 min pour manger'], say: "J'abrège les mots qui reviennent souvent.",
      detail: { title: 'Les abréviations', body: "Garde-en cinq ou six, toujours les mêmes, pour les relire sans hésiter : pb, bcp, qqn, qqch, gvt. EN: keep a few, always the same ones.", say: 'Pb, c’est problème ; qqch, c’est quelque chose.' } },
    { cells: ['A | B', 'une colonne par voix', 'Kaboré | Gendron'], say: S(1648).fr,
      detail: { title: 'Les colonnes', body: "Dans un débat, une colonne par personne : tu vois tout de suite qui défend quoi. EN: one column per speaker in a debate.", say: S(1601).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['notes'],
};

/** PRACTISE: which notes will still make sense tomorrow. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelles notes tiennent debout ?',
  frSub: 'La chronique, notée deux fois',
  groups: [
    grp('Deux notes pour la même chronique', [
      free('cantines : 1 repas/3 non fini, 120 g/enfant/j · portions = tous âges + 20 min → jeté · test : ↓ 40 %, + légumes · ? coût personnel', 'canteens: 1 meal in 3 unfinished, 120 g per child per day · same portions + 20 min → waste · trial: down 40 %, more veg · ? staff cost', 'des mots, des flèches, un ?'),
      free("Dans les écoles de la région, un repas sur trois n'est pas terminé, et en tout c'est environ...", 'In the region’s schools, one meal in three is not finished, and in all it is about...', 'une phrase recopiée, puis rien'),
    ], chk(
      'Laquelle t’aide à écrire le résumé demain ?',
      ['la première', 'la seconde'], 0,
      "La seconde s'arrête au milieu d'une phrase : le temps de l'écrire, la chronique a continué. EN: copying a sentence costs you the next three.")),
    grp('Tes règles', [
      it(E(1628), 'pas de phrases'),
      it(E(1630), 'les chiffres'),
      it(E(1633), 'la charpente'),
      it(B1S(1258), 'ce que ton oreille garde'),
    ], chk(
      "Tu entends « cent vingt grammes par enfant et par jour ». Tu notes...",
      ['cent vingt grammes par enfant et par jour', '120 g / enfant / j', 'rien, c’est un détail'], 1,
      'Le chiffre en chiffres, avec des barres. EN: the figure, with slashes.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['notes'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends, vite',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['notes'],
};

/** USE IT: the chronicler's stance goes in the notes too. */
const A3_NOTE = pourTaCharpente('a3-note', 'La réserve fait partie des notes', [
  grp('La fin de la chronique', [
    it(E(1636), 'un frein'),
    it(E(1637), 'le doute qui reste'),
  ], chk(
    'Tes notes s’arrêtent à « ↓ 40 %, + légumes ». Il manque...',
    ['la réserve : ? coût du personnel', 'rien, tout y est'], 0,
    "Sans la réserve, ton résumé dira que le chroniqueur est pour, sans nuance. EN: without the reservation, your summary loses his nuance.")),
  ctl('Le ton du chroniqueur', "« Bref, la bonne idée existe ; reste à savoir qui va payer. » Il est...",
    ['enthousiaste sans réserve', 'contre', 'favorable, mais prudent'], 2,
    'Il reconnaît la bonne idée et laisse une question ouverte : le coût. EN: in favour, cautious about cost.'),
], ['notes', 'distance']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Noter', 'Pendant une chronique rapide, tu écris...',
    ['des phrases complètes', 'des mots-clés, des chiffres, des flèches'], 1,
    'Les phrases viendront au résumé. EN: sentences come later, in the summary.'),
  ctl('Un trou', 'Tu as raté une cause. Dans tes notes, tu mets...',
    ['un « ? », et tu continues', 'la cause que tu imagines'], 0,
    "Un « ? » marque le trou sans inventer. EN: a question mark, never a guess."),
  ctl('La fin', 'La dernière phrase d’une chronique donne souvent...',
    ['un chiffre de plus', 'le ton ou la réserve de l’auteur', 'le nom de la radio'], 1,
    "« Reste à savoir qui va payer » : la position finale. EN: the author's stance often comes last."),
], ['notes']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Des notes en charpente',
    opener: {
      line: "Une chronique pleine de chiffres et de causes : ici tu apprends à noter sans écrire de phrases. EN: A chronicle full of figures and causes: here you learn to take notes without writing sentences.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act03.jpg',
    },
    sections: [],
    milestone: "Tu prends des notes en charpente : mots-clés, chiffres, flèches, un « ? » pour ce qui manque. EN: You take frame notes: key words, figures, arrows, a question mark for what is missing.",
    estScreens: 36, restPoints: ['a3-regles', 'a3-choisir'],
  },
  sections: [A3_CHRONIQUE, A3_REGLES, A3_SYMBOLES, A3_CHOISIR, A3_DICTEE, A3_NOTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — QUI PENSE QUOI
 *
 *  TEXT: a radio debate on short-term rentals, three voices, then a street
 *  poll. MOVE: the host's naming is the turn cue; agreement, disagreement
 *  and partial agreement are heard in fixed phrases. Two columns.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_DEBAT: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-debat',
  layer: 'core',
  hideLines: true,
  title: 'Les locations de courte durée',
  frSub: 'Trois voix : qui défend quoi ?',
  lines: LOGEMENT_LINES,
  questions: [
    { q: 'Qui veut limiter les locations aux touristes ?', opts: ['Olivier Gendron', 'Sandrine Kaboré'], correct: 1,
      why: 'Sandrine Kaboré : six logements sur vingt perdus pour des familles. EN: Sandrine Kaboré.' },
    { q: 'Que reconnaît Olivier Gendron, au début ?', opts: ['le constat, pas la conclusion', 'qu’il faut interdire', 'rien du tout'], correct: 0,
      why: "Il comprend le constat, il ne partage pas la conclusion. EN: he accepts the finding, not the conclusion." },
    { q: 'Sur quel point Sandrine Kaboré lui donne-t-elle raison ?', opts: ['le permis', 'les taxes', 'certains logements étaient vides'], correct: 2,
      why: "« Sur ce point, je rejoins monsieur Gendron » : un accord partiel. EN: a partial agreement." },
    { q: 'Que propose Olivier Gendron ?', opts: ['une interdiction', 'un permis'], correct: 1,
      why: 'Un permis, oui ; une interdiction, non. EN: a permit, not a ban.' },
    { q: 'Sur quoi les deux invités finissent-ils par s’accorder ?', opts: ['il faut des contrôles', 'le permis marche bien', 'il faut tout interdire'], correct: 0,
      why: "Des contrôles : l'animateur souligne ce point d'accord. EN: they agree checks are needed." },
  ],
  audio: REC('rec-b2-25-logement'),
  say: REFRAME,
  terms: ['position'],
};

/** NOTICE THE MOVE: how agreement and disagreement sound. */
const A4_VOIX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-voix',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-voix',
  title: 'Accord, désaccord, entre les deux',
  frSub: 'Ce que tu entends, ce que tu notes',
  hint: 'Quatre cartes. Écoute où la personne se place.',
  audio: REC('rec-b2-25-voix'),
  say: REFRAME,
  terms: ['position'],
  cards: [
    { head: 'D’accord sur un point', label: 'accord partiel',
      fr: S(1643).fr, sub: rsOf(E(1643)),
      body: "Un accord limité : sur ce point. Attends le mais qui suit, la position revient. EN: agreement limited to one point; wait for the but." },
    { head: 'Les faits oui, la conclusion non', label: 'désaccord poli',
      fr: S(1642).fr, sub: rsOf(E(1642)),
      body: "Il accepte le constat et refuse ce qu'on en tire. Dans tes notes : d'accord sur X, contre Y. EN: accepts the facts, rejects the conclusion." },
    { head: 'Un désaccord net', label: 'désaccord',
      fr: S(1644).fr, sub: rsOf(E(1644)),
      body: "Pas du tout, je ne partage pas : pas de nuance. Note ≠ entre les deux colonnes. EN: flat disagreement; mark it plainly." },
    { head: "Reprendre l'autre", label: 'appui',
      fr: S(1646).fr, sub: rsOf(E(1646)),
      body: "Comme vous le disiez : la personne s'appuie sur l'autre, parfois pour le retourner contre lui. EN: building on the other speaker, sometimes to turn it against them." },
  ],
};

/** PRACTISE: attribute each line to its voice. */
const A4_ATTRIBUER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-attribuer',
  layer: 'core',
  size: 'lg',
  title: 'À qui est cette phrase ?',
  frSub: 'Deux colonnes, trois voix',
  groups: [
    grp('Tes deux colonnes', [
      it(E(1649), 'colonne Kaboré'),
      it(E(1650), 'colonne Gendron'),
      it(E(1651), 'entre les deux'),
    ], chk(
      '« Un permis, la Ville en a déjà créé un, et ça n’a rien changé. » Qui parle ?',
      ['Sandrine Kaboré', "l'animateur", 'Olivier Gendron'], 0,
      "Elle répond au permis de Gendron : il existe déjà, sans effet. EN: she answers Gendron's permit idea." )),
    grp('Les phrases qui situent', [
      it(E(1645), 'je me démarque'),
      it('fr.b1.ecologie.1172', 'je donne mon avis'),
      it(E(1655), 'la question à te poser'),
    ], chk(
      "« Madame Kaboré, votre réaction ? » La phrase suivante vient...",
      ["de l'animateur", 'de Sandrine Kaboré'], 1,
      "Le nom annonce la voix. EN: the name announces the next voice.")),
    ctl('Le rôle de l’animateur', "« Voilà au moins un point d'accord. » L'animateur...",
      ['résume ce que les deux ont dit', 'donne son avis'], 0,
      'Il fait le point sans juger : note-le comme un accord des deux invités. EN: he sums up, he does not judge.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['position', 'notes'],
};

/** PRACTISE by ear on new material: a TEF section C style street poll. */
const A4_TROTTOIR: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-trottoir',
  layer: 'core',
  hideLines: true,
  title: 'Micro-trottoir à Montréal',
  frSub: 'Trois passants, trois positions',
  lines: TROTTOIR_LINES,
  questions: [
    { q: 'Première personne : quelle est sa position ?', opts: ['contre toute interdiction', 'pour, même pendant les pauses', 'ça dépend de l’âge'], correct: 1,
      why: "Oui, et même pendant les pauses : sa fille ne parle plus à personne. EN: for, even at break times." },
    { q: 'Deuxième personne : que défend-elle ?', opts: ['apprendre à s’en servir plutôt qu’interdire', 'interdire à tout âge'], correct: 0,
      why: "L'image de la piscine : on n'apprend pas à nager en la fermant. EN: teach use rather than ban." },
    { q: 'Troisième personne ?', opts: ['pour, sans condition', 'contre, sans condition', 'ça dépend de l’âge'], correct: 2,
      why: "À douze ans oui, à seize ans trop tard : une position nuancée. EN: it depends on age." },
    { q: "« Le cellulaire », dans la question, c'est...", opts: ['le portable, au Québec', 'un ordinateur'], correct: 0,
      why: "Au Québec, on dit le cellulaire ; en France, le portable. EN: Québec word for a mobile phone." },
  ],
  audio: REC('rec-b2-25-trottoir'),
  say: REFRAME,
  terms: ['position'],
};

/** USE IT: two columns and a line between them. */
const A4_NOTE = pourTaCharpente('a4-note', 'Une colonne par voix', [
  grp('Deux façons de noter le débat', [
    free('Kaboré : limiter · 6 logts/20 perdus · permis existe → rien changé | Gendron : permis oui, interdiction non · logts vides avant · = contrôles', 'Kaboré: limit · 6 homes in 20 lost · permit exists → no change | Gendron: permit yes, ban no · homes empty before · = checks', 'deux colonnes et un accord'),
    free('logements, touristes, six, vingt, permis, taxes, contrôles', 'homes, tourists, six, twenty, permit, taxes, checks', 'des mots sans voix'),
  ], chk(
    'Laquelle dit qui pense quoi ?',
    ['la seconde', 'la première'], 1,
    "Les mêmes mots, rangés par voix : c'est la position qui apparaît. EN: the same words, filed by speaker.")),
  ctl("Le point d'accord", 'Où notes-tu « il faut des contrôles » ?',
    ['sous les deux colonnes, marqué comme accord', 'dans la colonne de Gendron seulement'], 0,
    "Les deux l'ont dit : c'est un accord, et ton résumé doit le signaler. EN: both said it; it is shared ground."),
], ['position', 'notes']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le repère', 'Dans un débat, qui parle ensuite ?',
    ["celui que l'animateur vient de nommer", 'celui qui parle le plus fort'], 0,
    "Le nom annonce la voix. EN: the name announces the voice."),
  ctl('Sur ce point', '« Sur ce point, je vous rejoins. » C’est...',
    ['un accord sur un seul point', 'un accord total', 'un désaccord'], 0,
    "Un accord limité : la position reste. EN: agreement on one point only."),
  ctl('Le constat', '« Je comprends le constat, mais je ne partage pas la conclusion. »',
    ["d'accord sur tout", "d'accord sur les faits, contre la conclusion"], 1,
    'Deux niveaux : les faits, et ce qu’on en tire. EN: the facts, and what is drawn from them.'),
], ['position']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Qui pense quoi',
    opener: {
      line: "Trois voix, deux positions et un animateur : ici tu apprends à savoir qui défend quoi. EN: Three voices, two positions and a host: here you learn to tell who argues for what.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act04.jpg',
    },
    sections: [],
    milestone: "Tu suis les positions d'un débat, leurs accords partiels et leurs désaccords, en deux colonnes. EN: You can follow the positions in a debate, their partial agreements and disagreements, in two columns.",
    estScreens: 34, restPoints: ['a4-voix', 'a4-trottoir'],
  },
  sections: [A4_DEBAT, A4_VOIX, A4_ATTRIBUER, A4_TROTTOIR, A4_NOTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — COUPER, REPRENDRE LA PAROLE
 *
 *  TEXT: a radio interview in which the journalist interrupts and the
 *  director holds on. MOVE: who has the floor, who takes it, who keeps it;
 *  an interrupted idea comes back, and a journalist's closing irony is a
 *  stance.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_INTERVIEW: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-interview',
  layer: 'core',
  hideLines: true,
  title: "L'interview du directeur",
  frSub: 'Qui a la parole, et qui la prend',
  lines: INTERVIEW_LINES,
  questions: [
    { q: 'Pourquoi la journaliste coupe-t-elle le directeur au début ?', opts: ['il parle trop fort', 'il ne répond pas à sa question', 'le temps est fini'], correct: 1,
      why: "Il replace les choses dans leur contexte ; elle veut savoir pourquoi ces quatre lignes. EN: he is not answering her question." },
    { q: 'Quelle raison donne-t-il enfin ?', opts: ['moins de dix passagers par heure', 'le prix de l’essence'], correct: 0,
      why: "Il y vient : moins de dix personnes par heure. L'idée coupée est revenue. EN: under ten passengers an hour." },
    { q: 'Que finit-il par reconnaître ?', opts: ['que les autobus sont vides le matin', 'que les tarifs vont baisser', 'une demande aux heures de pointe'], correct: 2,
      why: "La journaliste le pousse, il concède : une demande aux heures de pointe. EN: he concedes rush-hour demand." },
    { q: 'Qu’est-ce qui change en janvier pour le taxi collectif ?', opts: ['il devient gratuit', 'on pourra réserver deux heures avant'], correct: 1,
      why: "La veille aujourd'hui, deux heures à l'avance dès janvier. EN: booking two hours ahead." },
    { q: 'À la fin, la journaliste pense que les tarifs...', opts: ['pourraient bien augmenter l’an prochain', 'ne bougeront jamais'], correct: 0,
      why: "« Pas cette année », répète-t-elle, puis « on retiendra la nuance » : elle souligne l'ironie. EN: she hints they will go up later." },
  ],
  audio: REC('rec-b2-25-interview'),
  say: REFRAME,
  terms: ['parole'],
};

/** NOTICE THE MOVE: six turn-taking moves. */
const A5_TOURS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tours',
  layer: 'core',
  sheetId: 'sheet-voix',
  title: 'Six gestes de la parole',
  cols: ['Geste', 'Tu entends', 'Dans tes notes'],
  rows: [
    { cells: ['couper', 'je vous arrête', 'la question change'], say: S(1656).fr,
      detail: { title: 'Couper la parole', body: "La personne qui coupe veut ramener le débat ailleurs : note où elle veut aller. EN: whoever interrupts wants to steer; note where to.", say: 'Pardon, je vous arrête : ma question était ailleurs.' } },
    { cells: ['garder', 'laissez-moi finir', "l'idée va venir"], say: S(1657).fr,
      detail: { title: 'Garder la parole', body: "« J'y viens » promet la réponse : laisse une case ouverte. EN: j'y viens promises the answer; keep a box open.", say: S(1658).fr } },
    { cells: ['recentrer', 'vous ne répondez pas', 'une esquive'], say: S(1659).fr,
      detail: { title: 'Recentrer', body: "La journaliste signale une esquive : c'est souvent là que se cache la position. EN: she flags an evasion; the stance often hides there.", say: 'Ce n’est pas ma question, monsieur.' } },
    { cells: ['demander', 'juste un mot', 'une nouvelle voix'], say: S(1660).fr,
      detail: { title: 'Demander la parole', body: "Poli, mais pressé : la personne va contredire ou nuancer. EN: polite but urgent; a contradiction is coming.", say: src('fr.b1.affaires.1141').fr } },
    { cells: ['rendre', 'je vous laisse la parole', 'la fin d’une voix'], say: S(1661).fr,
      detail: { title: 'Rendre la parole', body: "La voix suivante va répondre : prépare l'autre colonne. EN: the next voice will answer; get the other column ready.", say: 'Je vous laisse répondre.' } },
    { cells: ['reprendre', 'comme je le disais', "l'idée coupée"], say: S(1662).fr,
      detail: { title: 'Reprendre une idée', body: "L'idée interrompue revient : remplis la case restée ouverte. EN: the interrupted idea comes back; fill the open box.", say: 'Je reviens à ce que je disais.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parole'],
};

/** PRACTISE: who holds the floor, on new lines. */
const A5_QUI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-qui',
  layer: 'core',
  size: 'lg',
  title: 'Qui a la parole ?',
  frSub: 'Prendre, garder, rendre',
  groups: [
    grp('On prend ou on coupe', [
      it(E(1656), 'couper'),
      it(E(1660), 'demander'),
      it(E(1659), 'recentrer'),
    ], chk(
      'Quelqu’un dit « juste un mot, si je peux me permettre ». Qui parle ensuite ?',
      ['la personne qui avait la parole', 'celle qui vient de le demander'], 1,
      "Elle prend la parole, poliment. EN: the one asking takes the floor." )),
    grp('On garde ou on reprend', [
      it(E(1657), 'garder'),
      it(E(1658), 'garder, poliment'),
      it(E(1662), 'reprendre'),
    ], chk(
      '« Comme je le disais, le problème est ailleurs. » Cette personne...',
      ['change de sujet', 'termine', 'reprend une idée qu’on a coupée'], 2,
      "Elle revient à ce qu'on avait interrompu. EN: back to the interrupted idea.")),
    ctl('Le vocabulaire', 'Couper la parole, c’est...',
      ['interrompre quelqu’un', 'donner la parole'], 0,
      "Interrompre. Reprendre la parole, c'est parler de nouveau. EN: to interrupt."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parole'],
};

/** PRACTISE, the trap, stepped. `promptSound` is what a hurried note makes
 *  of the turn; `fr` is what was really said. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-voix',
  title: 'Six notes prises trop vite',
  rule: {
    title: 'Une interruption coupe la phrase, pas l’idée',
    body: "Quand deux voix se coupent, on note souvent la mauvaise personne, ou une idée à moitié finie comme si c'était la conclusion. Attends que l'idée revienne. EN: in overlap, notes get the wrong speaker or half an idea; wait for it to return.",
  },
  cards: [
    { promptLabel: 'une fin crue trop tôt', promptSound: 'Le directeur ne donne pas de raison.', fr: S(1657).fr, ipa: ipaOf(E(1657)), tip: "Il gardait la parole pour y venir, et la raison est arrivée. EN: the reason came next." },
    { promptLabel: 'la mauvaise voix', promptSound: 'Le directeur dit : je vous arrête.', fr: S(1656).fr, ipa: ipaOf(E(1656)), tip: "C'est la journaliste qui coupe. EN: it is the journalist who interrupts." },
    { promptLabel: 'une esquive oubliée', promptSound: 'Le directeur répond à la question.', fr: S(1659).fr, ipa: ipaOf(E(1659)), tip: "L'esquive est une information : il évitait la question. EN: the dodge is information." },
    { promptLabel: 'une concession ratée', promptSound: 'Le directeur dit que les autobus sont vides.', fr: S(1668).fr, ipa: ipaOf(E(1668)), tip: "Poussé, il reconnaît la demande du matin. EN: pushed, he concedes morning demand." },
    { promptLabel: 'une ironie prise au mot', promptSound: 'La journaliste est rassurée sur les tarifs.', fr: S(1669).fr, ipa: ipaOf(E(1669)), tip: "Elle souligne que « pas cette année » laisse l'an prochain ouvert. EN: she is flagging next year." },
    { promptLabel: 'un reproche pris pour un fait', promptSound: 'On a consulté les usagers avant.', fr: S(1667).fr, ipa: ipaOf(E(1667)), tip: "Il aurait fallu : ça n'a pas été fait, c'est un reproche. EN: it was not done; a reproach." },
  ],
  drill: [
    { promptSay: 'Au début, c’est ... qui coupe la parole.', opts: ['le directeur', 'la journaliste'], correct: 1 },
    { promptSay: 'Laissez-moi finir, j’y viens : il veut ... la parole.', opts: ['garder', 'rendre', 'couper'], correct: 0 },
    { promptSay: 'Les quatre lignes transportent moins de ... personnes par heure.', opts: ['cent', 'vingt', 'dix'], correct: 2 },
    { promptSay: 'Il reconnaît une demande aux heures de ... .', opts: ['pointe', 'repas'], correct: 0 },
    { promptSay: 'Il aurait fallu consulter les usagers : ils ... été consultés.', opts: ['ont', "n'ont pas"], correct: 1 },
    { promptSay: 'On retiendra la nuance : la journaliste est ... .', opts: ['convaincue', 'ironique', 'fâchée contre les usagers'], correct: 1 },
    { promptSay: 'Dès janvier, on pourra réserver deux heures à ... .', opts: ["l'avance", 'midi'], correct: 0 },
    { promptSay: 'Vous ne répondez pas à ma question : c’est une ... .', opts: ['esquive signalée', 'félicitation'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une interruption coupe la phrase, pas l’idée' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la note pressée a cru' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-25-piege-parole'),
  say: REFRAME,
  terms: ['parole'],
};

/** USE IT: an open box for the interrupted idea. */
const A5_NOTE = pourTaCharpente('a5-note', 'Une case ouverte pour l’idée coupée', [
  grp("Deux notes de l'interview", [
    free('Roussel : 4 lignes supprimées · raison ? (coupé) → < 10 pers./h · concède : demande heures de pointe · taxi collectif (réserv. 2 h, janv.) | Lavoie : conteste « vides » · reproche : pas de consultation · ironie tarifs', 'Roussel: 4 routes cut · reason? (cut off) → under 10 people/h · concedes rush-hour demand · shared taxi | Lavoie: disputes « empty » · reproach: no consultation · irony on fares', 'la case remplie plus tard'),
    free('Roussel : contexte, passagers... (coupé). Lavoie : pourquoi ?', 'Roussel: context, passengers... (cut off). Lavoie: why?', 'arrêtée à la coupure'),
  ], chk(
    'La seconde note s’arrête à la coupure. Qu’a-t-elle raté ?',
    ['rien d’important', 'la raison, venue juste après'], 1,
    "L'idée coupée revient : « j'y viens ». EN: the interrupted idea came back." )),
  ctl('Le ton final', '« Pas cette année. On retiendra la nuance. » Dans tes notes...',
    ['tarifs stables, point', 'tarifs : pas cette année, et la journaliste en doute'], 1,
    "Note le fait ET la distance de la journaliste. EN: note the fact and her distance."),
], ['parole', 'notes']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Couper', '« Je vous arrête tout de suite » : qui a la parole après ?',
    ['la personne qui vient de couper', 'celle qui parlait'], 0,
    "Elle prend la parole pour recentrer. EN: the interrupter takes the floor."),
  ctl("J'y viens", '« Laissez-moi finir, j’y viens. » L’idée...',
    ['est abandonnée', 'arrive bientôt'], 1,
    'Laisse une case ouverte. EN: keep a box open.'),
  ctl('Le reproche', '« Il aurait fallu consulter les usagers. » Ça veut dire que...',
    ["on ne les a pas consultés, et c'est une faute", 'on les a consultés', 'on va les consulter'], 0,
    `Le conditionnel passé du reproche, vu dans ${COND_PASSE_REF}. EN: the past conditional of reproach.`),
], ['parole']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Couper, reprendre',
    opener: {
      line: "Une journaliste coupe, un directeur s'accroche : ici tu apprends à suivre qui a la parole. EN: A journalist interrupts, a director holds on: here you learn to follow who has the floor.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act05.jpg',
    },
    sections: [],
    milestone: "Tu suis les tours de parole et les interruptions, et tu retrouves l'idée coupée plus loin. EN: You can follow turn-taking and interruptions, and find the interrupted idea further on.",
    estScreens: 36, restPoints: ['a5-tours', 'a5-piege'],
  },
  sections: [A5_INTERVIEW, A5_TOURS, A5_QUI, A5_PIEGE, A5_NOTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LE TON : CONCÉDER, DOUTER, IRONISER
 *
 *  TEXT: a two-host podcast on the City's pothole app, then six short
 *  stances. MOVE: stance is in the words: certes... mais concedes, soi-
 *  disant keeps its distance, « bravo, belle réussite » in front of a
 *  failure is irony. TTS has no ironic voice, so every irony here is
 *  readable from the words and the situation.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_BALADO: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-balado',
  layer: 'core',
  hideLines: true,
  title: 'Deux pour un, le balado',
  frSub: 'Deux voix, deux tons',
  lines: BALADO_LINES,
  questions: [
    { q: "Quand Raphaël dit « bravo, belle réussite », il...", opts: ['félicite la Ville', 'critique la Ville'], correct: 1,
      why: "Le trou est toujours là : les mots louent, la situation contredit. EN: irony; the pothole is still there." },
    { q: 'Que concède Inès ?', opts: ["l'appli ne répare pas les trous toute seule", "l'appli est inutile", 'le maire a raison'], correct: 0,
      why: "« Certes » : elle accorde ce point, puis défend l'appli avec les signalements. EN: she concedes, then defends." },
    { q: 'Pourquoi Raphaël dit-il « soi-disant » douze mille signalements ?', opts: ['il ne connaît pas le chiffre', 'le chiffre est officiel', 'il doute du chiffre, à cause des doublons'], correct: 2,
      why: 'Soi-disant : il rapporte le chiffre sans y croire. EN: he distances himself from the figure.' },
    { q: "« Rien que ça », après « révolution numérique », c'est...", opts: ['une moquerie de l’exagération', 'une question'], correct: 0,
      why: "Il se moque du grand mot du maire. EN: mocking the exaggeration." },
    { q: 'La position finale d’Inès ?', opts: ['elle abandonne l’appli', 'elle laisse un an à la Ville avant de juger'], correct: 1,
      why: "Favorable, mais sous condition : un an. EN: cautiously in favour, for a year." },
  ],
  audio: REC('rec-b2-25-balado'),
  say: REFRAME,
  terms: ['ironie', 'concession'],
};

/** NOTICE THE MOVE: six stance markers. */
const A6_MARQUEURS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-marqueurs',
  layer: 'core',
  sheetId: 'sheet-ton',
  title: 'Six marqueurs de ton',
  cols: ['Tu entends', 'La personne', 'Dans tes notes'],
  rows: [
    { cells: ['certes... mais', 'concède, puis résiste', 'le mais'], say: S(1671).fr,
      detail: { title: 'Certes', body: `Un point accordé pour mieux défendre le reste. ${Cap(CONCESSION_B1_REF)} t'a donné la forme ; ici, tu l'entends. EN: a point granted to defend the rest.`, say: src('fr.b1.connecteurs-logiques.1573').fr } },
    { cells: ["je te l'accorde", 'reconnaît un point', 'accord partiel'], say: S(1672).fr,
      detail: { title: "Je te l'accorde", body: "Une concession à l'oral, souvent en réponse directe. La suite dit si elle change d'avis : rarement. EN: a spoken concession; the stance rarely changes.", say: S(1673).fr } },
    { cells: ['soi-disant', 'doute de ce qu’on dit', 'entre guillemets'], say: S(1676).fr,
      detail: { title: 'Soi-disant', body: "Elle rapporte un mot ou un chiffre sans le prendre à son compte. Note-le avec un « ? ». EN: reports a claim without owning it.", say: 'Le soi-disant budget prévu n’a jamais été voté.' } },
    { cells: ['comme par hasard', 'soupçonne', 'un doute'], say: S(1679).fr,
      detail: { title: 'Comme par hasard', body: "Elle laisse entendre que ce n'est pas un hasard du tout. EN: implies it is no coincidence.", say: 'Comme par hasard, la réunion est annulée.' } },
    { cells: ['bravo, belle réussite', 'ironise', 'une critique'], say: S(1677).fr,
      detail: { title: 'La fausse félicitation', body: "Devant un échec, bravo veut dire le contraire. Écoute la situation autant que les mots. EN: praise in front of a failure is criticism.", say: S(1683).fr } },
    { cells: ["c'est ça, oui", "ne croit pas ce qu'on dit", 'une incrédulité'], say: S(1680).fr,
      detail: { title: "C'est ça, oui", body: "Une fausse approbation : la personne n'y croit pas une seconde. EN: mock agreement, total disbelief.", say: S(1687).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession', 'ironie', 'distance'],
};

/** PRACTISE by ear: six lines, six stances. */
const A6_TON: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ton',
  layer: 'core',
  hideLines: true,
  title: 'Six phrases, six tons',
  frSub: 'Concession, doute ou ironie ?',
  lines: TON_LINES,
  questions: [
    { q: 'Première phrase, le train en retard : la personne est...', opts: ['ironique', 'contente', 'hésitante'], correct: 0,
      why: 'Deux heures de retard, et bravo : une critique. EN: irony.' },
    { q: 'Deuxième phrase : que fait la personne ?', opts: ['elle doute', 'elle concède un défaut, puis défend', 'elle ironise'], correct: 1,
      why: 'Certes... mais : concession. EN: a concession.' },
    { q: 'Troisième phrase, les économies : la personne...', opts: ['y croit', 'met le chiffre en doute'], correct: 1,
      why: 'Soi-disant : de la distance. EN: doubt.' },
    { q: 'Quatrième phrase, la réunion de plus : la personne est...', opts: ['incrédule, ironique', "d'accord", 'indifférente'], correct: 0,
      why: "C'est ça, oui : elle n'y croit pas. EN: disbelief." },
    { q: 'Cinquième phrase : la personne reconnaît...', opts: ['que les délais sont longs', 'que tout va bien'], correct: 0,
      why: 'Il est vrai que... cela dit : concession, puis défense. EN: concedes the delays.' },
    { q: 'Sixième phrase, le rapport : la personne...', opts: ['donne une date', 'soupçonne un calcul', 'félicite'], correct: 1,
      why: 'Comme par hasard : un soupçon. EN: suspicion.' },
  ],
  audio: REC('rec-b2-25-ton'),
  say: REFRAME,
  terms: ['ironie', 'distance'],
};

/** PRACTISE: sort stances on new lines. */
const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-trier',
  layer: 'core',
  size: 'lg',
  title: 'Concéder, douter, ironiser',
  frSub: 'Trie les phrases par attitude',
  groups: [
    grp('On accorde un point', [
      it(E(1671), 'certes'),
      it(E(1673), 'il est vrai que'),
      it(E(1685), 'bien que'),
      it('fr.b1.connecteurs-logiques.1581', 'le mot de la concession'),
    ], chk(
      'Après une concession, tu attends...',
      ['un mais, et la position qui revient', 'un changement d’avis'], 0,
      "La concession prépare la résistance. EN: a concession sets up the pushback.")),
    grp('On doute, on se moque', [
      it(E(1674), 'le doute'),
      it(E(1675), 'le doute, en soutenu'),
      it(E(1678), "l'exagération moquée"),
      it(E(1687), 'le doute, en deux mots'),
    ], chk(
      '« Pour réparer, on verra. » Le podcasteur est...',
      ['convaincu', 'sceptique', 'fâché contre Inès'], 1,
      'On verra : il attend des preuves. EN: sceptical.')),
    ctl('Le piège de l’ironie', "« Bravo, belle réussite. » Pour la comprendre, tu écoutes...",
      ['seulement les mots', 'les mots ET la situation'], 1,
      "Les mots seuls sont positifs ; la situation les retourne. EN: words plus situation."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession', 'ironie', 'distance'],
};

/** PRACTISE: four stances taken literally. */
const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre tons pris au mot',
  errors: [
    { wrong: 'Raphaël trouve que l’appli est une réussite.',
      right: 'Raphaël critique l’appli, avec ironie.',
      why: "Normal : bravo et réussite sont des mots positifs. Mais le trou est toujours là. EN: positive words, negative situation." },
    { wrong: 'Inès change d’avis : elle est contre l’appli.',
      right: 'Inès concède un défaut, mais elle reste favorable.',
      why: "« Certes » sonne comme un accord. C'est une porte qu'elle referme aussitôt avec « mais ». EN: certes grants a point, then mais closes it." },
    { wrong: 'La Ville a reçu douze mille signalements.',
      right: 'La Ville dit avoir reçu douze mille signalements ; Raphaël en doute.',
      why: "Le chiffre est net et facile à noter. Mais « la Ville dit » et « soi-disant » le mettent à distance. EN: a sourced, doubted figure." },
    { wrong: 'Le maire parle d’une révolution, et les podcasteurs sont d’accord.',
      right: 'Le maire parle d’une révolution ; Raphaël se moque de l’exagération.',
      why: "« Rien que ça » a l'air neutre, mais c'est une moquerie. EN: rien que ça mocks the big word." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ironie', 'concession'],
};

/** USE IT: the tone goes into the notes. */
const A6_NOTE = pourTaCharpente('a6-note', 'Le ton a sa place dans tes notes', [
  grp('Deux notes du balado', [
    it(E(1684), 'Inès, en une phrase'),
    it(E(1683), 'Raphaël, en une phrase'),
  ], chk(
    'Ces deux phrases disent-elles ce que les deux voix pensent ?',
    ['Oui : la position et le ton', 'Non : il faut les chiffres'], 0,
    "La position et le ton, puis le chiffre si tu as de la place. EN: stance first, figures after.")),
  ctl('Un chiffre douteux', 'Tu notes « 12 000 signalements ». Tu ajoutes...',
    ['rien', '« selon la Ville ? doublons »', 'ton avis'], 1,
    "La source et le doute voyagent avec le chiffre. EN: the source and the doubt travel with the figure."),
], ['concession', 'ironie', 'notes']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Certes', '« Certes, c’est cher, mais... » La personne est...',
    ['pour, malgré le prix', 'contre, à cause du prix'], 0,
    'Le mais porte sa position. EN: the but carries the stance.'),
  ctl('Soi-disant', '« Les soi-disant économies » : la personne...',
    ['en doute', 'y croit', 'n’en sait rien'], 0,
    'Soi-disant met le mot à distance. EN: distance.'),
  ctl("L'ironie", "Pour entendre l'ironie, surtout avec une voix neutre, tu compares...",
    ['la vitesse et le volume', 'les mots et la situation'], 1,
    "L'écart entre les deux est la clé. EN: the gap between them."),
], ['ironie', 'concession']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le ton',
    opener: {
      line: "Deux podcasteurs, une appli, beaucoup d'ironie : ici tu apprends à entendre ce que pense la voix, pas seulement ce qu'elle dit. EN: Two podcasters, one app, plenty of irony: here you learn to hear what the voice thinks, not only what it says.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act06.jpg',
    },
    sections: [],
    milestone: "Tu reconnais une concession, un doute et une ironie à l'oreille, et tu les notes. EN: You can recognise a concession, a doubt and irony by ear, and note them.",
    estScreens: 40, restPoints: ['a6-marqueurs', 'a6-trier'],
  },
  sections: [A6_BALADO, A6_MARQUEURS, A6_TON, A6_TRIER, A6_ERREURS, A6_NOTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE FAIT, LA SOURCE, LE TÉMOIN
 *
 *  TEXT: a radio news report from a Belgian town, with a witness and a
 *  spokesperson. MOVE: four degrees of certainty: stated fact with a source,
 *  a lead in the journalist's conditional, official caution, a witness's
 *  opinion. b1.38 act 9 did fact and opinion on a call-in; B2 adds the
 *  conditional and the weight of each voice.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_REPORTAGE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-reportage',
  layer: 'core',
  hideLines: true,
  title: 'Un incendie à Floriville',
  frSub: 'Le reporter, le témoin, la commune',
  lines: REPORTAGE_LINES,
  questions: [
    { q: 'Quelle information est confirmée, et par qui ?', opts: ['aucun blessé, selon les pompiers', 'le feu est criminel, selon le témoin', 'les dégâts, selon la commune'], correct: 0,
      why: "Les pompiers affirment : incendie maîtrisé, aucun blessé. EN: confirmed by the fire service." },
    { q: 'Le feu est-il parti du camion, c’est sûr ?', opts: ['Oui', 'Non, c’est une piste au conditionnel'], correct: 1,
      why: "« Serait parti » : une piste, pas un fait. EN: a lead, not a fact." },
    { q: 'Pour le témoin, ce n’est pas un accident. C’est...', opts: ['son avis', 'la conclusion des enquêteurs'], correct: 0,
      why: "Il est sûr de lui, mais personne ne l'a confirmé. EN: his opinion." },
    { q: 'La commune...', opts: ['accuse le propriétaire du camion', 'reste prudente et attend l’enquête', 'annonce un incendie volontaire'], correct: 1,
      why: "Trop tôt pour parler d'incendie volontaire. EN: cautious." },
    { q: 'Les deux millions d’euros de dégâts sont...', opts: ['une estimation de l’entreprise, à ce stade', 'un chiffre officiel des pompiers', 'un chiffre du témoin'], correct: 0,
      why: "L'entreprise estime, et « à ce stade » dit que ça peut changer. EN: the company's early estimate." },
    { q: '« Septante ans », dans la bouche du témoin belge, c’est...', opts: ['dix-sept ans', 'soixante-dix ans'], correct: 1,
      why: 'Septante : soixante-dix, en Belgique et en Suisse. EN: seventy.' },
  ],
  audio: REC('rec-b2-25-reportage'),
  say: REFRAME,
  terms: ['source', 'distance'],
};

/** NOTICE THE MOVE: four degrees of certainty. */
const A7_DEGRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-degres',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ton',
  title: 'Quatre degrés de certitude',
  frSub: 'Du fait confirmé à l’avis',
  hint: 'Quatre cartes. Demande-toi : qui le dit, et est-ce confirmé ?',
  audio: REC('rec-b2-25-degres'),
  say: REFRAME,
  terms: ['source', 'distance'],
  cards: [
    { head: 'Un fait, avec sa source', label: 'confirmé',
      fr: S(1689).fr, sub: rsOf(E(1689)),
      body: "Selon les pompiers : une source officielle, un fait vérifié. Note-le avec la source. EN: a checked fact with its source." },
    { head: 'Une piste', label: 'le conditionnel',
      fr: S(1688).fr, sub: rsOf(E(1688)),
      body: "Serait, aurait : le journaliste rapporte sans confirmer. Garde le conditionnel dans ton résumé. EN: the journalist's conditional; keep it." },
    { head: 'La prudence', label: 'officielle',
      fr: S(1691).fr, sub: rsOf(E(1691)),
      body: "Trop tôt, pas exclu, à ce stade : on ne sait pas encore. EN: official caution; nothing settled yet." },
    { head: "L'avis d'un témoin", label: 'une opinion',
      fr: S(1694).fr, sub: rsOf(E(1694)),
      body: "Le témoin a vu, mais il interprète. Son émotion n'est pas une preuve. EN: a witness saw, but interprets." },
  ],
};

/** PRACTISE: classify on new lines. */
const A7_CLASSER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-classer',
  layer: 'core',
  size: 'lg',
  title: 'Sûr, pas sûr, ou un avis ?',
  frSub: 'Qui le dit, et est-ce confirmé',
  groups: [
    grp('Pas encore confirmé', [
      it(E(1692), 'rien d’exclu'),
      it(E(1699), 'rien de confirmé'),
      it(B1S(1350), 'une rumeur'),
    ], chk(
      '« La piste criminelle n’est pas exclue. » Ça veut dire que...',
      ['le feu est criminel', 'c’est possible, pas prouvé'], 1,
      "Pas exclu n'est pas confirmé. EN: not ruled out is not confirmed.")),
    grp('Qui parle', [
      it('fr.b1.droit.023', 'celui qui a vu'),
      it('fr.b1.journalisme.1075', 'celui qui parle au nom de la commune'),
      it(E(1696), 'trois voix, trois poids'),
    ], chk(
      'Le porte-parole de la commune dit « nous attendons les conclusions ». Il...',
      ['accuse', 'confirme', 'reste prudent'], 2,
      "Il ne prend pas position avant l'enquête. EN: he stays cautious.")),
    ctl('La question à te poser', 'Devant chaque information d’un reportage, tu te demandes...',
      [S(1702).fr, 'Est-ce que je suis d’accord ?'], 0,
      "Qui le dit, et est-ce confirmé : ton avis vient après. EN: who says it, and is it confirmed."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

/** PRACTISE: the lines that set the weight, with notes. */
const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Les mots qui pèsent chaque information',
  examples: [
    ex(E(1690), 'une source encore partielle'),
    ex(E(1693), 'le chiffre peut changer'),
    ex(E(1698), 'un fait, souvent donné par les pompiers'),
    ex(E(1701), 'le témoin reproche, il ne prouve pas'),
    ex(E(1700), 'en Belgique, savoir veut dire ici pouvoir'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source', 'distance'],
};

/** USE IT: every figure travels with its source. */
const A7_NOTE = pourTaCharpente('a7-note', 'Chaque information garde sa source', [
  grp('Deux notes du reportage', [
    free('incendie entrepôt, 2 h · pompiers : maîtrisé, 0 blessé · camion ? (serait) · enquête, piste crim. pas exclue · témoin : pas un accident (avis) · commune : prudente · dégâts 2 M€ (entreprise, à ce stade)', 'warehouse fire, 2 a.m. · fire service: under control, no one hurt · lorry? (reportedly) · investigation · witness: no accident (opinion) · town: cautious · damage 2 M€ (company, for now)', 'avec les sources'),
    free('incendie criminel, camion, 2 M€ de dégâts, aucun blessé', 'arson, lorry, 2 M€ damage, nobody hurt', 'sans les sources'),
  ], chk(
    'La seconde note dit « incendie criminel ». C’est...',
    ['une erreur : ce n’est qu’un avis et une piste', 'juste'], 0,
    "Elle transforme l'avis du témoin en fait. EN: it turns an opinion into a fact.")),
  ctl('Dans ton résumé', 'Pour la cause du feu, tu écris...',
    ['« le feu est parti d’un camion »', '« le feu serait parti d’un camion »'], 1,
    "Le conditionnel garde la distance du journaliste. EN: keep the conditional."),
], ['source', 'notes']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le conditionnel', '« Le camion aurait pris feu en premier. » C’est...',
    ['une piste', 'un fait prouvé'], 0,
    'Le conditionnel du journaliste : rapporté, pas confirmé. EN: reported, not confirmed.'),
  ctl('Le témoin', 'Le témoin est très sûr de lui. Son avis devient-il un fait ?',
    ['Oui', 'Non'], 1,
    "Sa certitude n'est pas une preuve. EN: certainty is not proof."),
  ctl('À ce stade', '« À ce stade, deux millions. » Le chiffre...',
    ['peut encore changer', 'est définitif', 'vient du témoin'], 0,
    'À ce stade : une estimation provisoire. EN: provisional.'),
], ['source']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le fait et la source',
    opener: {
      line: "Un incendie, un témoin sûr de lui, une commune prudente : ici tu apprends à peser chaque information. EN: A fire, a very sure witness, a cautious town: here you learn to weigh each piece of news.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act07.jpg',
    },
    sections: [],
    milestone: "Tu sépares le fait confirmé, la piste au conditionnel, la prudence officielle et l'avis d'un témoin. EN: You can separate confirmed fact, a conditional lead, official caution and a witness's opinion.",
    estScreens: 34, restPoints: ['a7-degres', 'a7-exemples'],
  },
  sections: [A7_REPORTAGE, A7_DEGRES, A7_CLASSER, A7_EXEMPLES, A7_NOTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE NON QUI NE DIT PAS SON NOM
 *
 *  TEXT: a phone negotiation between a conference organiser in Dakar and a
 *  hotel's group sales manager. MOVE: the polite refusal and the real
 *  opening sound alike; listen for what is not said. b2.26 will teach the
 *  learner to negotiate; this act only teaches hearing it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_APPEL: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-appel',
  layer: 'core',
  hideLines: true,
  title: 'Un appel entre Dakar et Lyon',
  frSub: 'Qu’est-ce qui est vraiment accepté ?',
  lines: APPEL_LINES,
  questions: [
    { q: 'Thomas Girard accepte-t-il le tarif de cent dix euros ?', opts: ['Oui', 'Non, mais il ne le dit pas', 'Oui, sans le petit-déjeuner'], correct: 1,
      why: "Une piste, difficile, je ne vous promets rien : un refus poli. EN: a polite no." },
    { q: 'Sur quoi ouvre-t-il vraiment la discussion ?', opts: ['sur la salle de réunion', 'sur la date'], correct: 0,
      why: "« Là, on peut en parler » : la seule vraie ouverture. EN: the meeting room." },
    { q: 'Le petit-déjeuner compris ?', opts: ['c’est refusé', 'c’est accepté', 'c’est possible, selon le nombre de personnes'], correct: 2,
      why: 'Sur le principe, pourquoi pas : une condition, pas un oui. EN: in principle, depending on numbers.' },
    { q: 'Quand elle demande si elle peut compter sur cent dix euros, il...', opts: ['répond oui', 'ne répond pas et parle de jeudi'], correct: 1,
      why: "Il évite la question : d'ici jeudi, il aura parlé à sa direction. EN: he dodges and defers." },
    { q: 'Et Awa Diop, à la fin ?', opts: ['elle accepte tout', 'elle fixe une limite : vendredi, sinon ailleurs'], correct: 1,
      why: "Poliment, elle met la pression : sans réponse avant vendredi, un autre hôtel. EN: she sets a deadline." },
    { q: '« Je suis présentement à Dakar » : présentement veut dire...', opts: ['en ce moment', 'depuis toujours'], correct: 0,
      why: "En ce moment : un mot courant en Afrique de l'Ouest et au Québec. EN: at the moment." },
  ],
  audio: REC('rec-b2-25-appel'),
  say: REFRAME,
  terms: ['implicite'],
};

/** NOTICE THE MOVE: four signs of a veiled no. */
const A8_SIGNES: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-signes',
  layer: 'core',
  sheetId: 'sheet-voix',
  title: 'Quatre signes d’un non poli',
  points: [
    "Il comprend ta position, sans l'accepter : je comprends tout à fait. EN: understanding is not agreement.",
    "Il qualifie au lieu de répondre : c'est une piste, ça me paraît difficile. EN: he labels instead of answering.",
    "Il renvoie à plus tard ou à quelqu'un d'autre : je vais voir avec ma direction. EN: he defers.",
    "Il ne répond pas à la question directe. Ce silence est une réponse. EN: a dodged question is an answer.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['implicite'],
};

/** PRACTISE: a real opening, or a polite no. */
const A8_OUI_NON: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-oui-non',
  layer: 'core',
  size: 'lg',
  title: 'Une ouverture, ou un non poli ?',
  frSub: 'Écoute ce qui n’est pas dit',
  groups: [
    grp('Ce qui sonne comme un non', [
      it(E(1705), 'difficile'),
      it(E(1704), 'une piste'),
      it(E(1706), 'rien de promis'),
      it(E(1711), 'une façon de voir'),
    ], chk(
      '« C’est une façon de voir les choses. » La personne...',
      ['est d’accord', 'ne partage pas cet avis, poliment'], 1,
      "Elle ne dit pas « vous avez tort » : elle le laisse entendre. EN: polite disagreement.")),
    grp('Ce qui laisse une porte', [
      it(E(1708), 'une vraie ouverture'),
      it(E(1707), 'une condition'),
      it('fr.a2.hebergement.119', 'une promesse d’essayer'),
    ], chk(
      '« Là, on peut en parler. » Par rapport à « ça me paraît difficile », c’est...',
      ['pareil', 'plus fermé', 'une vraie ouverture'], 2,
      "Le contraste le montre : ici il accepte de négocier. EN: a genuine opening." )),
    ctl('Admettons', '« Admettons. » La personne est...',
      ['convaincue', 'pas convaincue, mais elle avance'], 1,
      "Admettons : elle accepte pour la discussion, pas sur le fond. EN: grudging, for the sake of argument."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['implicite'],
};

/** PRACTISE, the trap, stepped: polite words taken as a yes. */
const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six oui qui n’en sont pas',
  rule: {
    title: 'Un non poli garde la porte ouverte',
    body: "Dans une négociation, on refuse rarement en disant non. Ces formules protègent la relation. Si tu les notes comme un oui, ton résumé dit le contraire de l'appel. EN: polite formulas protect the relationship; noted as yes, they reverse the call.",
  },
  cards: [
    { promptLabel: 'compris = accepté', promptSound: 'Il accepte notre position.', fr: S(1703).fr, ipa: ipaOf(E(1703)), tip: "Comprendre n'est pas accepter. EN: understanding is not accepting." },
    { promptLabel: 'une piste = oui', promptSound: 'Cent dix euros, c’est bon.', fr: S(1704).fr, ipa: ipaOf(E(1704)), tip: "Une piste parmi d'autres, pas une réponse. EN: one option, not an answer." },
    { promptLabel: 'difficile = possible', promptSound: 'C’est possible en mai.', fr: S(1705).fr, ipa: ipaOf(E(1705)), tip: 'Difficile, dans une négociation, veut souvent dire non. EN: difficult often means no.' },
    { promptLabel: 'le principe = l’accord', promptSound: 'Le petit-déjeuner est inclus.', fr: S(1707).fr, ipa: ipaOf(E(1707)), tip: "Sur le principe : sous condition, et plus tard. EN: in principle, under conditions." },
    { promptLabel: 'le doute = l’accord', promptSound: 'C’est la meilleure solution.', fr: S(1709).fr, ipa: ipaOf(E(1709)), tip: "Je ne suis pas sûr que : un désaccord adouci. EN: softened disagreement." },
    { promptLabel: 'plus tard = oui', promptSound: 'La réponse est oui, jeudi.', fr: S(1716).fr, ipa: ipaOf(E(1716)), tip: "Il aura parlé à sa direction : rien n'est décidé. EN: nothing decided yet." },
  ],
  drill: [
    { promptSay: '« Ça me paraît difficile » veut souvent dire ... .', opts: ['oui', 'non'], correct: 1 },
    { promptSay: '« C’est une piste » : la décision est ... .', opts: ['prise', 'repoussée', 'positive'], correct: 1 },
    { promptSay: '« Là, on peut en parler » : c’est une ... .', opts: ['vraie ouverture', 'fermeture'], correct: 0 },
    { promptSay: '« Admettons » : la personne est ... .', opts: ['enthousiaste', 'sceptique', 'fâchée'], correct: 1 },
    { promptSay: 'Il ne répond pas à la question directe : c’est ... .', opts: ['une réponse', 'un oubli'], correct: 0 },
    { promptSay: '« Je ne vous promets rien » : le tarif est ... .', opts: ['garanti', 'refusé', 'incertain'], correct: 2 },
    { promptSay: 'Sans réponse avant vendredi, Awa Diop ira ... .', opts: ['à Dakar', 'ailleurs'], correct: 1 },
    { promptSay: '« C’est une façon de voir les choses » : c’est un ... poli.', opts: ['désaccord', 'accord'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un non poli garde la porte ouverte' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la note naïve a compris' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-25-piege-implicite'),
  say: REFRAME,
  terms: ['implicite'],
};

/** USE IT: note what was NOT said. */
const A8_NOTE = pourTaCharpente('a8-note', 'Ce qui n’a pas été dit compte aussi', [
  grp("Deux notes de l'appel", [
    free('110 € : refus poli (piste, difficile) · salle 3 j : ouverture · petit-déj : ? selon nombre · réponse jeudi · Diop : sinon ailleurs vendredi', '110 €: polite no · room for 3 days: opening · breakfast: ? depends on numbers · answer Thursday · Diop: elsewhere by Friday', 'ce qui est accepté, refusé, ouvert'),
    free('110 € ok, salle ok, petit-déj ok, jeudi', '110 € ok, room ok, breakfast ok, Thursday', 'trois oui qui n’existent pas'),
  ], chk(
    "La seconde note dit trois fois « ok ». Combien de vrais oui dans l'appel ?",
    ['trois', 'aucun'], 1,
    "Une ouverture et une condition, mais aucun oui. EN: an opening and a condition, no yes.")),
  grp('Ta question', [
    it(E(1718), 'après chaque réponse'),
    it(E(1713), 'ce que tu notes'),
  ], chk(
    'Il répond à côté de la question directe. Dans tes notes, tu écris...',
    ['pas de réponse (esquive)', 'rien'], 0,
    "L'esquive est une information. EN: the dodge is information.")),
], ['implicite', 'notes']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Comprendre', '« Je comprends tout à fait votre position. » Il...',
    ['accepte', 'n’a pas encore répondu'], 1,
    'Comprendre, ce n’est pas accepter. EN: understanding is not accepting.'),
  ctl('Difficile', 'Dans une négociation, « ça me paraît difficile » veut souvent dire...',
    ['non', 'peut-être', 'oui'], 0,
    'Un non poli. EN: a polite no.'),
  ctl('L’esquive', 'Une question directe sans réponse directe, c’est...',
    ['une information à noter', 'un détail'], 0,
    "Ce qui n'est pas dit fait partie du message. EN: silence is part of the message."),
], ['implicite']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le non poli',
    opener: {
      line: "Un appel où personne ne dit non : ici tu apprends à entendre le refus derrière les formules polies. EN: A call where nobody says no: here you learn to hear the refusal behind polite formulas.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act08.jpg',
    },
    sections: [],
    milestone: "Tu distingues un non poli d'une vraie ouverture, et tu notes ce qui n'a pas été dit. EN: You can tell a polite no from a real opening, and note what was left unsaid.",
    estScreens: 36, restPoints: ['a8-signes', 'a8-piege'],
  },
  sections: [A8_APPEL, A8_SIGNES, A8_OUI_NON, A8_PIEGE, A8_NOTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — RATTRAPER LE FIL
 *
 *  TEXT: a university lecture with a dense passage, then restatements.
 *  MOVE: after a missed chunk, do not rewind in your head: leave a gap,
 *  wait for the next signpost or the reformulation (autrement dit, en
 *  d'autres termes, si je résume), and let the recap fill the hole.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_COURS: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-cours',
  layer: 'core',
  hideLines: true,
  title: 'Un cours sur le télétravail et la ville',
  frSub: 'Tu vas décrocher : rattrape le fil',
  lines: COURS_LINES,
  questions: [
    { q: 'Combien d’effets du télétravail la professeure présente-t-elle ?', opts: ['deux', 'trois', 'quatre'], correct: 1,
      why: 'Premier, deuxième, troisième effet : trois panneaux. EN: three.' },
    { q: 'Tu as décroché pendant la liste des travaux. Le cours te redonne-t-il l’idée ?', opts: ['Non, elle est perdue', "Oui, tout de suite après, avec une reformulation"], correct: 1,
      why: "« En d'autres termes » : transformer coûte cher, ce n'est pas une question de peinture. EN: the rephrasing gives it back." },
    { q: 'Le deuxième effet touche...', opts: ['les commerces du midi', 'les écoles', 'les transports'], correct: 0,
      why: 'Les restaurants qui vivaient des employés de bureau. EN: lunchtime businesses.' },
    { q: 'Les villes attendent-elles le retour des entreprises, selon la professeure ?', opts: ['Oui, elle y croit', "Non : à son avis, elles ne reviendront pas"], correct: 1,
      why: "« À mon avis, n'arrivera pas » : son opinion, glissée dans la phrase dense. EN: her view, slipped into the dense part." },
    { q: 'Tu as raté le troisième effet. Où le retrouves-tu ?', opts: ['nulle part', 'dans le résumé final', 'dans le premier effet'], correct: 1,
      why: "« Si je résume » : les quartiers gagnent. Le résumé comble le trou. EN: the final recap fills the gap." },
  ],
  audio: REC('rec-b2-25-cours'),
  say: REFRAME,
  terms: ['fil'],
};

/** NOTICE THE MOVE: three ways back in. */
const A9_ASTUCES: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a9-astuces',
  layer: 'core',
  sheetId: 'sheet-fil',
  title: 'Trois façons de rattraper le fil',
  hacks: [
    { hack: 'Ne rembobine pas dans ta tête : laisse un blanc et reprends au panneau suivant.', why: "Pendant que tu cherches le mot raté, la phrase suivante passe aussi. EN: rewinding costs you the next sentence too." },
    { hack: 'Guette la reformulation : autrement dit, en d’autres termes, c’est-à-dire.', why: "Un orateur redit souvent l'idée difficile plus simplement, juste après. EN: speakers restate the hard idea straight after." },
    { hack: 'Attends le résumé final : si je résume, bref, en somme.', why: "Un exposé bien fait redonne ses idées à la fin : c'est là que tu remplis tes « ? ». EN: the final recap fills your gaps." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fil'],
};

/** PRACTISE: the markers that give an idea back. */
const A9_REFORMULER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-reformuler',
  layer: 'core',
  size: 'lg',
  title: 'Les mots qui redonnent l’idée',
  frSub: 'Reformuler, résumer, reprendre',
  groups: [
    grp('Après un trou', [
      it(E(1724), 'attendre'),
      it(E(1725), 'laisser un blanc'),
      it(E(1727), 'reprendre plus loin'),
      it(B1S(1367), 'la même règle, en plus simple'),
    ], chk(
      'Tu as raté une phrase. Tu...',
      ['reprends au panneau suivant', 'restes sur la phrase ratée'], 0,
      "La suite ne t'attend pas. EN: the talk does not wait.")),
    grp('Les panneaux qui redonnent', [
      it(E(1719), 'le geste'),
      it(E(1720), 'reformuler'),
      it('fr.b1.connecteurs-logiques.1135', 'préciser'),
      it(E(1721), 'résumer'),
    ], chk(
      "Après « en d'autres termes », tu entends...",
      ['une idée nouvelle', 'la même idée, dite plus simplement', 'la conclusion du cours'], 1,
      "C'est une deuxième chance pour l'idée ratée. EN: a second chance at the missed idea.")),
    ctl('Reprenons', '« Reprenons. » au début d’un cours annonce...',
      ['un rappel de ce qu’on a vu', 'la fin'], 0,
      "Un rappel : utile si tu as manqué le cours précédent. EN: a recap of last time."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fil'],
};

/** PRACTISE by ear: hear only the restatement. */
const A9_RELANCE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-relance',
  layer: 'core',
  hideLines: true,
  title: 'La deuxième chance',
  frSub: 'Imagine que tu as raté la première phrase',
  lines: RELANCE_LINES,
  questions: [
    { q: 'Le projet : d’après la reformulation, il est...', opts: ['abandonné, en pratique', 'lancé'], correct: 0,
      why: "Autrement dit, enterré : reporté sans date, c'est-à-dire abandonné. EN: effectively dead." },
    { q: 'Les loyers : que dit la reformulation ?', opts: ['les salaires montent plus vite', 'se loger coûte de plus en plus cher'], correct: 1,
      why: "En d'autres termes : le logement pèse plus lourd. EN: housing is getting dearer." },
    { q: 'Qui est touché par la réforme ?', opts: ['les fonctionnaires', 'les retraités', 'les intérimaires et les saisonniers'], correct: 2,
      why: "C'est-à-dire : la précision qui nomme les contrats courts. EN: temps and seasonal workers." },
    { q: 'La dernière phrase, avec « bref »...', opts: ['ajoute un exemple', 'conclut : tout le monde n’y gagne pas'], correct: 1,
      why: 'Bref ferme la série. EN: bref concludes.' },
  ],
  audio: REC('rec-b2-25-relance'),
  say: REFRAME,
  terms: ['fil'],
};

/** USE IT: a gap in the notes, filled by the recap. */
const A9_NOTE = pourTaCharpente('a9-note', 'Un « ? » que le résumé remplit', [
  grp('Tes notes du cours, avant et après le résumé final', [
    free('1. bureaux vides (1/5) → logements ? · 2. commerces midi ↓ 1/2 · 3. ?', '1. empty offices (1 in 5) → homes? · 2. lunchtime shops down by half · 3. ?', 'avant'),
    free('3. quartiers résidentiels ↑ (cafés, boulangeries) · bilan : centre perd, quartiers gagnent', '3. residential areas up (cafés, bakeries) · summary: centre loses, neighbourhoods gain', 'après'),
  ], chk(
    'Qu’est-ce qui a rempli le « ? » du troisième effet ?',
    ['le résumé final', 'le premier effet'], 0,
    "« Si je résume » : la professeure redit tout. EN: the recap." )),
  ctl('Son avis', 'La professeure pense que les entreprises ne reviendront pas. Dans ton résumé, tu écris...',
    ['« les entreprises ne reviendront pas »', '« selon elle, les entreprises ne reviendront pas »'], 1,
    "C'est son avis, glissé dans le cours : garde-lui son auteur. EN: keep the opinion's owner."),
], ['fil', 'notes']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le trou', 'Tu as décroché. Première chose à faire ?',
    ['revenir en arrière dans ta tête', 'laisser un blanc et écouter la suite'], 1,
    'Le blanc attend, la voix continue. EN: leave a gap, keep listening.'),
  ctl('La reformulation', '« Autrement dit » t’offre...',
    ['une deuxième chance', 'une nouvelle idée', 'la fin du cours'], 0,
    "La même idée, plus simple. EN: the same idea, simpler."),
  ctl('La fin', 'Les « ? » de tes notes, tu les remplis surtout avec...',
    ['le résumé final', 'ton imagination'], 0,
    'Si je résume, bref, en somme. EN: the closing recap.'),
], ['fil']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Rattraper le fil',
    opener: {
      line: "Un cours dense, et tu décroches trente secondes : ici tu apprends à revenir dans l'écoute sans rien perdre d'important. EN: A dense lecture, and you drift off for thirty seconds: here you learn to get back in without losing anything important.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act09.jpg',
    },
    sections: [],
    milestone: "Tu reprends le fil après un passage raté, grâce au panneau suivant, à la reformulation et au résumé final. EN: You can pick up the thread after a missed passage, using the next signpost, the rephrasing and the final recap.",
    estScreens: 34, restPoints: ['a9-astuces', 'a9-relance'],
  },
  sections: [A9_COURS, A9_ASTUCES, A9_REFORMULER, A9_RELANCE, A9_NOTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — L'ÉPREUVE À VITESSE RÉELLE
 *
 *  TEXT: an international street poll, four cities, four stances. MOVE: the
 *  B2 papers (DELF B2, TEF, TCF) ask who thinks what and why; read the
 *  question and its options first, note yes / no / yes but per voice,
 *  distrust the option that echoes a heard word. Regional features are
 *  marked, never caricatured.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_MONDE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-monde',
  layer: 'core',
  hideLines: true,
  title: 'Tour du monde francophone',
  frSub: 'Format TEF, section C : une question, quatre voix',
  lines: MONDE_LINES,
  questions: [
    { q: 'La personne de Lausanne est...', opts: ['favorable, sans réserve', 'favorable, sous condition', 'défavorable'], correct: 0,
      why: "Évidemment : plus on commence tôt, moins on a peur. EN: in favour, no reservation." },
    { q: 'La personne de Liège...', opts: ['refuse toute deuxième langue', 'accepte, mais pas au détriment du français'], correct: 1,
      why: "Oui, mais : le français d'abord. Et elle nuance son propre exemple. EN: yes, but not at the expense of French." },
    { q: "Que fait la personne de Liège avec « j'exagère un peu » ?", opts: ['elle change d’avis', 'elle nuance son exemple', 'elle se moque de son fils'], correct: 1,
      why: "Elle adoucit l'exemple des fautes, pas sa position. EN: softens the example, not the stance." },
    { q: 'La personne de Dakar...', opts: ['reformule la question : laquelle ajouter ?', 'est contre les langues à l’école'], correct: 0,
      why: "Les enfants parlent déjà deux ou trois langues : la vraie question est ailleurs. EN: she reframes the question." },
    { q: 'La personne de Québec pose quelle condition ?', opts: ['des classes plus petites', 'des professeurs formés', 'plus d’heures de français'], correct: 1,
      why: "À condition d'avoir des profs formés ; sinon, ça ne sert à rien. EN: trained teachers." },
    { q: '« Pis », dans sa phrase, c’est...', opts: ['puis, et, en québécois parlé', 'un gros mot'], correct: 0,
      why: "Au Québec, à l'oral, pis vaut puis ou et. EN: Québec spoken form of puis." },
  ],
  audio: REC('rec-b2-25-monde'),
  say: REFRAME,
  terms: ['position'],
};

/** NOTICE THE MOVE: the four formats. */
const A10_FORMATS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-formats',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-epreuve',
  title: 'L’écoute aux épreuves B2',
  frSub: 'DELF B2, TEF, TCF',
  hint: 'Quatre cartes. Chaque format teste la charpente.',
  audio: REC('rec-b2-25-formats'),
  say: REFRAME,
  terms: ['position', 'plan'],
  cards: [
    { head: 'Lis la consigne', label: 'toutes les épreuves',
      fr: S(1742).fr, sub: rsOf(E(1742)),
      body: "Au DELF B2, les deux documents longs passent deux fois, les trois courts une seule. Sache-le avant de commencer. EN: know how many times it plays before you start." },
    { head: 'Qui pense quoi', label: 'micro-trottoir',
      fr: S(1735).fr, sub: rsOf(E(1735)),
      body: "Une question, plusieurs voix : une ligne par personne, et oui, non ou oui mais. EN: one line per person." },
    { head: "L'attitude", label: 'DELF B2, TEF',
      fr: S(1741).fr, sub: rsOf(E(1741)),
      body: "« Quelle est l'attitude de... » : écoute les marqueurs de ton, pas seulement les faits. EN: attitude questions need the stance markers." },
    { head: 'La réponse reformulée', label: 'le piège',
      fr: S(1737).fr, sub: rsOf(E(1737)),
      body: "La bonne réponse dit la même chose autrement ; la mauvaise reprend un mot entendu. EN: the right option rephrases; the trap echoes." },
  ],
};

/** PRACTISE: what each question type sends the ear to catch. */
const A10_QUESTION: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-question',
  layer: 'core',
  size: 'lg',
  title: 'La question te dit quoi écouter',
  frSub: 'Avant le début du document',
  groups: [
    grp("Tes réflexes d'épreuve", [
      it(B1S(1366), 'avant'),
      it(E(1734), 'deux écoutes'),
      it(E(1736), 'la bonne réponse'),
      it(B1S(1368), 'ce que tu savais déjà'),
    ], chk(
      '« Sur quoi le premier passant fonde-t-il sa position ? » Ton oreille attend...',
      ['une raison', 'un chiffre seul', 'un nom de ville'], 0,
      "Fonder sa position : une raison, un argument. EN: a reason." )),
    grp('Les positions nuancées', [
      it(E(1738), 'oui, à condition'),
      it(E(1746), 'oui, mais pas à tout prix'),
      it(E(1740), 'une question reformulée'),
    ], chk(
      '« Oui, à condition d’avoir des profs formés. » La bonne option dit...',
      ['favorable sans réserve', 'défavorable', 'favorable sous condition'], 2,
      "À condition de : un oui limité. EN: a conditional yes.")),
    ctl('Le type de question', '« Qu’est-ce que la personne sous-entend ? » C’est une question...',
      ['de détail', "d'inférence : ce qui n'est pas dit"], 1,
      "Au B2, beaucoup de questions portent sur l'implicite et l'attitude. EN: inference." ),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['position', 'implicite'],
};

/** PRACTISE: four trap options, each built from a word the ear DID hear. */
const A10_PIEGES: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-pieges',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre options piégées',
  errors: [
    { wrong: 'La personne de Liège est contre l’anglais.',
      right: 'Elle accepte une deuxième langue, mais pas au détriment du français.',
      why: "Tu as entendu « trois fautes par phrase » et une inquiétude. Mais elle a dit oui, avec une condition. EN: a worried example, not a no." },
    { wrong: 'La personne de Dakar est contre les langues à l’école.',
      right: 'Elle dit que les enfants en parlent déjà plusieurs, et demande laquelle ajouter.',
      why: "Sa question surprend et ressemble à un refus. Elle déplace le débat. EN: she reframes, she does not refuse." },
    { wrong: 'La personne de Québec est favorable sans condition.',
      right: 'Elle est favorable à condition d’avoir des professeurs formés.',
      why: "Le « oui » arrive en premier et reste en tête. La condition vient juste après. EN: the yes comes first, the condition follows." },
    { wrong: 'Le fils de la personne de Liège connaît soixante-dix mots… en allemand.',
      right: 'Il connaît septante, soit soixante-dix, mots d’anglais.',
      why: "L'allemand était à Lausanne. Une option piège mélange deux voix. EN: trap options mix speakers." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['position'],
};

/** USE IT: one line per voice. */
const A10_NOTE = pourTaCharpente('a10-note', 'Une ligne par voix', [
  grp('Deux notes du micro-trottoir', [
    free('Lausanne : oui (tôt = moins peur) · Liège : oui mais (français d’abord) · Dakar : déjà 2-3 langues → laquelle ? · Québec : oui si profs formés', 'Lausanne: yes (early = less fear) · Liège: yes but (French first) · Dakar: already 2-3 languages → which? · Québec: yes if trained teachers', 'une ligne par voix'),
    free('allemand, italien, septante mots, wolof, profs, trop tard', 'German, Italian, seventy words, Wolof, teachers, too late', 'des mots sans voix'),
  ], chk(
    'Laquelle répond à une question de format TEF, section C ?',
    ['la seconde', 'la première'], 1,
    'Une ligne par personne, et sa position en deux mots. EN: one line per person.')),
  ctl('Le piège', 'Une option reprend « allemand » pour la personne de Liège. Tu...',
    ["la choisis, tu as entendu le mot", 'te méfies : ce mot appartenait à une autre voix'], 1,
    "Les pièges mélangent les voix. EN: traps mix up speakers."),
], ['position', 'notes']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La consigne', 'Avant le document, tu lis...',
    ['les questions, les options et la consigne', 'rien'], 0,
    'Elles disent quoi écouter, et combien de fois. EN: they tell you what to listen for.'),
  ctl("L'option qui répète", 'Une option reprend exactement un mot entendu. Elle est...',
    ['forcément juste', 'peut-être un piège'], 1,
    'La bonne réponse reformule. EN: the right answer rephrases.'),
  ctl('Oui mais', '« Oui, mais pas au détriment du français. » La position est...',
    ['un oui sous condition', 'un oui sans réserve', 'un non'], 0,
    'Le mais fixe la limite. EN: the but sets the limit.'),
], ['position']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: "L'épreuve",
    opener: {
      line: "Quatre villes, quatre voix, une seule écoute : ici tu apprends à répondre aux questions des épreuves B2. EN: Four cities, four voices, one listening: here you learn to answer B2 exam questions.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act10.jpg',
    },
    sections: [],
    milestone: "Tu lis la consigne et les questions d'abord, tu notes une ligne par voix, et tu évites les options qui répètent. EN: You read the instructions and questions first, note one line per voice and avoid echo options.",
    estScreens: 34, restPoints: ['a10-formats', 'a10-pieges'],
  },
  sections: [A10_MONDE, A10_FORMATS, A10_QUESTION, A10_PIEGES, A10_NOTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LE DÉBAT DE MIDI
 *
 *  The production act. A two-minute debate on free buses is heard with every
 *  move of the lesson, noted as a frame, rehearsed out loud with a
 *  colleague, then summarised in writing. The task brief prints the
 *  transcript, because TaskView has no source field and no player.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_DEBAT: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-debat',
  layer: 'core',
  hideLines: true,
  title: 'Le Débat de midi',
  frSub: 'Deux minutes : prends tes notes en charpente',
  lines: DEBAT_LINES,
  questions: [
    { q: 'Quelles sont les deux raisons de Karim Benali ?', opts: ["le pouvoir d'achat et le climat", 'le bruit et la sécurité', 'la fréquence et le prix'], correct: 0,
      why: "Premièrement, deuxièmement : il annonce son plan. EN: purchasing power and climate." },
    { q: 'Que concède Claire Fortin ?', opts: ['que le budget est prévu', 'que la fréquentation augmente'], correct: 1,
      why: "« Certes, la fréquentation augmente, je ne le conteste pas. » Puis le mais. EN: she concedes ridership rises." },
    { q: 'Pour elle, le vrai problème, c’est...', opts: ['le prix du billet', 'les taxes', 'la fréquence des autobus'], correct: 2,
      why: "Un autobus toutes les quarante minutes : c'est la fréquence. EN: frequency." },
    { q: 'Quand elle parle du budget « prévu », elle...', opts: ['le met en doute', 'l’approuve'], correct: 0,
      why: "Soi-disant : la hausse de taxes n'est pas votée. EN: she doubts the funding." },
    { q: 'Sa phrase sur les promesses, c’est...', opts: ['un chiffre', "de l'ironie", 'une concession'], correct: 1,
      why: "Rien n'est gratuit, sauf les promesses : une pique. Karim Benali répond que c'est une formule. EN: irony." },
    { q: 'Sur quoi s’accordent-ils ?', opts: ['la gratuité pour tous', 'les familles modestes doivent payer moins'], correct: 1,
      why: "Le point d'accord, souligné par l'animatrice ; puis leurs solutions divergent. EN: low-income families should pay less." },
  ],
  audio: REC('rec-b2-25-debat'),
  say: REFRAME,
  terms: ['position', 'concession', 'ironie'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-epreuve',
  title: 'Cinq étapes pour ton résumé',
  steps: [
    '1. Pendant l’écoute : deux colonnes, une par invité, des mots-clés et des chiffres. EN: two columns, key words, figures.',
    '2. Marque le ton : C pour une concession, ? pour un doute, ! pour une ironie. EN: mark the tone.',
    "3. Relis tes notes : le point d'accord, et ce que chacun propose. EN: find the shared point and each proposal.",
    '4. Écris : le sujet, la position A, la position B, l’attitude de Claire Fortin, l’accord. EN: topic, A, B, stance, agreement.',
    '5. Relis : des verbes neutres (défend, reconnaît, met en doute), et jamais ton avis. EN: neutral reporting verbs, no opinion of yours.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['notes', 'charpente'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas résumer un débat',
  cases: [
    { situation: 'Un compte rendu de réunion pour une collègue absente', fr: 'Deux options ont été défendues, et une a été écartée.', en: 'Two options were argued for, and one was set aside.' },
    { situation: "L'épreuve de production écrite du DELF B2, après une écoute", fr: S(1756).fr, en: S(1756).en },
    { situation: 'Un conseil de quartier, avant un vote', fr: S(1753).fr, en: S(1753).en },
    { situation: 'Un message à un ami qui a raté l’émission', fr: S(1750).fr, en: S(1750).en },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['position'],
};

/** USE IT, out loud: Mathieu asks, turn by turn. One apostrophe style (’). */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Mathieu te pose des questions',
  setting: 'Ton collègue Mathieu n’a pas pu écouter Le Débat de midi. Avant la réunion, il passe à ton bureau.',
  turns: [
    {
      ai: 'Tu as écouté le débat sur l’autobus gratuit ? Ils disaient quoi ?',
      en: 'Did you listen to the debate on free buses? What were they saying?',
      user: 'Deux positions s’opposent : Karim Benali est pour, Claire Fortin est sceptique.',
      userEn: 'Two positions are opposed: Karim Benali is for it, Claire Fortin is sceptical. (The frame first.)',
      alts: [
        { fr: 'Un conseiller défend la gratuité, une économiste doute.', en: 'A councillor argues for free buses, an economist has doubts.' },
        { fr: 'C’était un débat pour ou contre la gratuité, avec deux invités.', en: 'It was a debate for or against free buses, with two guests.' },
      ],
    },
    {
      ai: 'Pourquoi il est pour, Benali ?',
      en: 'Why is Benali for it?',
      user: 'Pour deux raisons : le pouvoir d’achat et le climat.',
      userEn: 'For two reasons: purchasing power and the climate. (His plan, in two words.)',
      alts: [
        { fr: 'L’abonnement coûte cher, et il veut qu’on laisse la voiture.', en: 'The pass is expensive, and he wants people to leave the car.' },
        { fr: 'Il parle du prix pour les familles, et de l’environnement.', en: 'He talks about the cost for families, and about the environment.' },
      ],
    },
    {
      ai: 'Et elle, elle est carrément contre ?',
      en: 'And she is flatly against it?',
      user: 'Pas vraiment : elle reconnaît que la fréquentation augmente, mais pour elle, le problème, c’est la fréquence.',
      userEn: 'Not really: she acknowledges ridership rises, but for her the problem is frequency. (A concession, then her position.)',
      alts: [
        { fr: 'Elle concède un point, puis elle dit que l’autobus ne passe pas assez souvent.', en: 'She concedes a point, then says the bus does not come often enough.' },
        { fr: 'Elle préfère plus d’autobus plutôt que des autobus gratuits.', en: 'She would rather have more buses than free buses.' },
      ],
    },
    {
      ai: 'Et le financement, c’est réglé ?',
      en: 'And the funding, is it sorted?',
      user: 'Selon lui, oui. Elle en doute : la hausse de taxes n’a pas été votée.',
      userEn: 'According to him, yes. She doubts it: the tax increase has not been voted. (Each claim keeps its owner.)',
      alts: [
        { fr: 'Il dit que le budget est prévu, mais elle parle d’un soi-disant budget.', en: 'He says the budget is planned, but she calls it a so-called budget.' },
        { fr: 'Pas vraiment : ça dépend d’une hausse de taxes.', en: 'Not really: it depends on a tax increase.' },
      ],
    },
    {
      ai: 'Elle était agressive ?',
      en: 'Was she aggressive?',
      user: 'Ironique, plutôt : pour elle, rien n’est gratuit, sauf les promesses.',
      userEn: 'Ironic, rather: for her, nothing is free except promises. (Her tone, reported.)',
      alts: [
        { fr: 'Non, mais elle a fait une pique sur les promesses.', en: 'No, but she took a dig about promises.' },
        { fr: 'Elle est restée polie, avec un peu d’ironie à la fin.', en: 'She stayed polite, with a bit of irony at the end.' },
      ],
    },
    {
      ai: 'Ils sont d’accord sur quelque chose ?',
      en: 'Do they agree on anything?',
      user: 'Oui : les familles modestes doivent payer moins. Elle propose un tarif selon le revenu.',
      userEn: 'Yes: low-income families should pay less. She proposes an income-based fare. (The shared point, then her proposal.)',
      alts: [
        { fr: 'Sur un point : aider les familles qui ont peu d’argent.', en: 'On one point: helping families with little money.' },
        { fr: 'Oui, mais il trouve que son tarif ferait un formulaire de plus.', en: 'Yes, but he thinks her fare would mean one more form.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['position', 'concession'],
};

/** THE GRADED TASK: notes on a two-minute debate, then a summary. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Résume Le Débat de midi',
  frSub: 'Mission écrite',
  brief: `Ton équipe prépare un avis pour le conseil de quartier de Val-des-Pins sur l'autobus gratuit. Ton collègue Mathieu n'a pas pu écouter Le Débat de midi. Tu as écouté le débat (mission précédente) en prenant des notes en charpente. Écris-lui un résumé. Écris d'abord de mémoire, à partir de tes notes ; ensuite seulement, vérifie les détails dans la transcription : « ${DEBAT_TRANSCRIPT} »`,
  briefEn: "Your team is preparing an opinion on free buses for the Val-des-Pins neighbourhood council. Your colleague Mathieu could not listen to the Midday Debate. You listened to it in the previous mission, taking frame notes. Write him a summary: from memory and your notes first, then check details against the transcript printed here, since this screen cannot play the recording.",
  produce: "Écris à Mathieu un résumé de 120 à 160 mots : les deux positions et leurs principaux arguments, le point d'accord, et l'attitude de Claire Fortin (ce qu'elle concède, ce dont elle doute, où elle ironise), avec tes mots et sans donner ton avis.",
  responseSpec: { kind: 'text', minWords: 120, maxWords: 160 },
  rubric: {
    criteria: [
      {
        key: 'positions',
        label: 'Les deux positions et leurs arguments',
        maxPoints: 4,
        descriptors: [
          "4 : Les deux positions sont justes et attribuées à la bonne personne, chacune avec au moins deux arguments exacts (pouvoir d'achat et climat ; anciens piétons et fréquence), et le point d'accord est présent.",
          "3 : Les deux positions sont justes, mais un argument manque ou le point d'accord est absent.",
          '2 : Une position est juste, l’autre est floue ou incomplète.',
          '1 : Les positions sont confondues, inversées, ou une seule est présentée.',
        ],
      },
      {
        key: 'attitude',
        label: "L'attitude de Claire Fortin",
        maxPoints: 3,
        descriptors: [
          '3 : Le résumé montre qu’elle concède un point (la fréquentation), qu’elle met en doute le financement et qu’elle ironise sur les promesses.',
          '2 : Deux de ces trois attitudes sont rendues.',
          "1 : Son attitude n'apparaît pas, ou son ironie est prise au pied de la lettre.",
        ],
      },
      {
        key: 'coherence',
        label: 'Un résumé qui se suit',
        maxPoints: 3,
        descriptors: [
          '3 : Un ordre clair (le sujet, une position, l’autre, l’accord) et des liens qui guident : d’abord, selon elle, en revanche, enfin.',
          '2 : L’ordre se suit, mais les liens manquent ou se répètent.',
          '1 : Des informations juxtaposées, dans le désordre du débat.',
        ],
      },
      {
        key: 'langue',
        label: 'Tes mots, des verbes qui rapportent',
        maxPoints: 3,
        descriptors: [
          '3 : Des phrases à toi, des verbes de parole variés et justes (défend, reconnaît, met en doute, propose), aucune phrase recopiée de la transcription.',
          '2 : Quelques reprises mot pour mot, ou des verbes de parole peu variés (dit, dit, dit).',
          '1 : Le résumé recopie la transcription, ou garde l’oral tel quel.',
        ],
      },
      {
        key: 'consigne',
        label: 'La consigne',
        maxPoints: 2,
        descriptors: [
          '2 : Un résumé pour Mathieu, de 120 à 160 mots, sans ton avis personnel.',
          '1 : Hors des limites de longueur, ou ton avis s’y glisse (« Benali a raison »).',
        ],
      },
    ],
  },
  scaffold: [
    'Salut Mathieu,',
    'Dans ce débat, deux positions s’opposent.',
    'Karim Benali défend...',
    'Claire Fortin, elle, reconnaît que...',
    'Selon elle,...',
    'Elle met aussi en doute...',
    'Ils s’accordent sur un point :',
    'À plus tard,',
  ],
  modelAnswer: "Salut Mathieu,\nVoici le résumé du Débat de midi sur l'autobus gratuit à Val-des-Pins. Deux positions s'opposent. Karim Benali, conseiller municipal, défend la gratuité pour deux raisons : le pouvoir d'achat, puisqu'un abonnement coûte 90 dollars par mois, et le climat, car ailleurs la fréquentation a augmenté de 30 %. Claire Fortin, économiste, reconnaît cette hausse, mais selon elle, les nouveaux passagers sont surtout d'anciens piétons et cyclistes. Pour elle, le vrai problème est la fréquence : avec les 12 millions par an que coûterait la gratuité, on pourrait doubler le nombre d'autobus. Elle met aussi en doute le financement, qui repose sur une hausse de taxes pas encore votée, et elle ironise sur les promesses. Ils s'accordent sur un point : les familles modestes doivent payer moins. Elle propose donc un tarif selon le revenu ; il y voit une piste, mais craint un formulaire de plus.\nÀ plus tard,",
  modelAnswerEn: "Hi Mathieu,\nHere is the summary of the Midday Debate on free buses in Val-des-Pins. Two positions are opposed. Karim Benali, a city councillor, argues for free buses for two reasons: purchasing power, since a monthly pass costs 90 dollars, and the climate, since ridership rose 30 % elsewhere. Claire Fortin, an economist, acknowledges that rise, but in her view the new passengers are mostly former pedestrians and cyclists. For her the real problem is frequency: with the 12 million a year free buses would cost, the number of buses could be doubled. She also questions the funding, which rests on a tax increase not yet voted, and she is ironic about promises. They agree on one point: low-income families should pay less. So she proposes an income-based fare; he sees it as an option but fears one more form.\nSee you later,",
  watchFor: [
    {
      pattern: 'The positions are swapped or merged: Claire Fortin presented as simply against, or Karim Benali credited with her argument on frequency.',
      criterion: 'positions',
      feedback: 'Reprends tes deux colonnes : lui défend la gratuité ; elle concède la hausse, mais parle de fréquence.',
      ref: 'a4-note',
    },
    {
      pattern: "The point of agreement (low-income families should pay less) is missing.",
      criterion: 'positions',
      feedback: "Il manque le point d'accord : les familles modestes doivent payer moins.",
      ref: 'a4-attribuer',
    },
    {
      pattern: "Her « certes » turned into agreement: the summary says Claire Fortin is convinced by the 30 %.",
      criterion: 'attitude',
      feedback: "Certes ouvre une porte qu'elle referme aussitôt : elle accorde la hausse, puis la relativise.",
      ref: 'a6-erreurs',
    },
    {
      pattern: "Her irony taken literally (« elle dit que les promesses sont gratuites ») or dropped, and the doubted budget reported as a fact.",
      criterion: 'attitude',
      feedback: "Rends son ton : elle ironise, et elle met en doute le budget « prévu ».",
      ref: 'a6-trier',
    },
    {
      pattern: 'Figures wrong or attributed to the wrong voice (90 dollars, 30 %, 12 million, every 40 minutes).',
      criterion: 'positions',
      feedback: 'Vérifie les chiffres et à qui ils appartiennent : 90 dollars et 30 % sont à lui, 12 millions et 40 minutes à elle.',
      ref: 'a3-note',
    },
    {
      pattern: "The summary follows the debate's order turn by turn, with no frame (topic, A, B, agreement).",
      criterion: 'coherence',
      feedback: 'Range ton résumé : le sujet, une position, l’autre, puis l’accord.',
      ref: 'a11-plan',
    },
    {
      pattern: 'Whole sentences copied from the transcript, or spoken features kept (mais bon, justement, euh).',
      criterion: 'langue',
      feedback: 'Dis-le avec tes mots, comme à Mathieu dans ton bureau.',
      ref: 'a11-scenario',
    },
    {
      pattern: 'Only « dit » as a reporting verb, or verbs that distort (« Claire Fortin prouve que... »).',
      criterion: 'langue',
      feedback: 'Varie et pèse tes verbes : défend, reconnaît, met en doute, propose, ironise.',
      ref: 'a7-degres',
    },
    {
      pattern: "The writer's own opinion slips in (« Benali a raison », « c'est une mauvaise idée »).",
      criterion: 'consigne',
      feedback: 'Un résumé rapporte, il ne juge pas. Enlève ton avis.',
      ref: 'a11-plan',
    },
    {
      pattern: 'Under 120 or over 160 words in the body.',
      criterion: 'consigne',
      feedback: 'Relis la consigne : de 120 à 160 mots, sans compter la salutation.',
      ref: 'a10-formats',
    },
    {
      pattern: 'The conditional or « selon » dropped where a claim is only a claim (the budget, the 30 % measured elsewhere).',
      criterion: 'attitude',
      feedback: 'Garde la distance : « selon lui, le budget est prévu ».',
      ref: 'a7-note',
    },
  ],
  graderNotes: [
    'The greeting and the sign-off do NOT count toward the word budget. Count the body only, with 10% tolerance (108 to 176) before criterion « consigne » loses its point.',
    'The learner has the transcript in the brief. Full marks under « langue » need no sentence of eight or more words copied verbatim from it.',
    'Accept any correct written form of figures (90 $, 90 dollars, quatre-vingt-dix dollars; 30 %, trente pour cent; 12 M, douze millions).',
    "Accept « sceptique », « réservée » or « plutôt contre » for Claire Fortin; « contre » alone loses one point under « attitude » only if nothing in the summary shows her concession.",
    'Reporting verbs may be in the present or the past; do not mark tense consistency across them unless it breaks meaning.',
    'Karim Benali\'s « c\'est une piste » is a polite reservation (act 8). A summary that says he rejects or accepts her fare outright is inexact, not wrong: no penalty unless it contradicts his objection.',
    'The conditionnel passé, the subjunctive and concession structures (lessons 2, 6 and 16 of B2) are welcome and never required. Do not mark their absence.',
    'Accept Québec and European vocabulary alike (autobus, bus; abonnement, passe; taxes, impôts).',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['position', 'notes', 'charpente'],
};

/** Say the lesson's lines out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis ton résumé à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['position'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-epreuve',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le plan', v: 'annoncé, puis signalé', say: S(1614).fr,
      detail: { title: 'Le plan oral', body: "Trois temps, j'en viens à, petite parenthèse, pour conclure : les titres de tes notes. EN: the headings of your notes.", say: S(1618).fr } },
    { k: 'les notes', v: 'mots-clés, chiffres, flèches, ?', say: S(1628).fr,
      detail: { title: 'La charpente', body: 'Peu de mots, beaucoup de liens, une colonne par voix. EN: few words, many links, one column per voice.', say: S(1633).fr } },
    { k: 'les positions', v: 'le nom annonce la voix', say: S(1601).fr,
      detail: { title: 'Qui pense quoi', body: "Accord, désaccord, accord sur un point : écoute où chacun se place. EN: agreement, disagreement, partial agreement.", say: S(1642).fr } },
    { k: 'la parole', v: 'couper, garder, reprendre', say: S(1656).fr,
      detail: { title: 'Les tours', body: "Une idée coupée revient : j'y viens, comme je le disais. EN: an interrupted idea comes back.", say: S(1662).fr } },
    { k: 'le ton', v: 'concéder, douter, ironiser', say: S(1671).fr,
      detail: { title: 'La distance', body: "Certes... mais ; soi-disant ; bravo devant un échec. Le conditionnel du journaliste. EN: concession, doubt, irony, the journalist's conditional.", say: S(1688).fr } },
    { k: 'le fil', v: 'blanc, panneau, résumé', say: S(1724).fr,
      detail: { title: 'Rattraper', body: 'Laisse un blanc, guette la reformulation, remplis au résumé final. EN: gap, rephrasing, recap.', say: S(1733).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plan', 'position', 'fil'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu suis maintenant une conversation à vitesse réelle par sa charpente : le plan annoncé, qui défend quoi, qui a la parole, et sur quel ton chacun parle. Le piège qui reste est le plus naturel : prendre une formule polie pour un oui, ou une ironie pour un compliment. Cette semaine, écoute un débat de radio ou un balado de cinq minutes, une seule fois, avec deux colonnes. Résume-le ensuite à voix haute en trois phrases : les deux positions et le ton. EN: This week, play a five-minute radio debate or podcast once, with two columns, then summarise it aloud in three sentences: both positions and the tone.",
  stats: [
    { k: 'Le plan', v: 'les panneaux, les parenthèses' },
    { k: 'Les voix', v: 'positions, tours de parole' },
    { k: 'Le ton', v: 'concession, doute, ironie, non poli' },
    { k: 'Après', v: 'des notes en charpente, un résumé' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'un plan annoncé', back: 'autant de titres dans tes notes', say: S(1614).fr },
    { front: 'petite parenthèse', back: 'un détour, souvent un détail', say: S(1617).fr },
    { front: 'des notes en charpente', back: 'mots-clés, chiffres, flèches, ?', say: S(1628).fr },
    { front: 'sur ce point, je vous rejoins', back: 'un accord sur un seul point', say: S(1643).fr },
    { front: "laissez-moi finir, j'y viens", back: "l'idée arrive : garde une case ouverte", say: S(1657).fr },
    { front: 'certes... mais', back: 'une concession, puis la position', say: S(1671).fr },
    { front: 'le feu serait parti', back: 'une piste, pas un fait', say: S(1688).fr },
    { front: 'ça me paraît difficile', back: 'souvent un non poli', say: S(1705).fr },
    { front: 'autrement dit', back: 'une deuxième chance pour l’idée ratée', say: S(1726).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Écouter à vitesse réelle, en résumé',
  body: `${REFRAME} Tu ne cherches plus à tout entendre : tu tiens le plan, les positions et le ton, et tu rattrapes le fil quand il t'échappe. ${Cap(ECOUTE_B1_REF)} te disait : « ${B138_REFRAME} » Au B2, tu sais aussi qui pense quoi, et comment. ${Cap(LECTURE_B2_REF)} fait le même travail à l'écrit. ${Cap(NEXT_REF)} te fait prendre la parole à ton tour, en réunion et en négociation. EN: Next: business meetings and negotiation.`,
  points: [
    'Le plan annoncé donne les titres de tes notes.',
    'Une colonne par voix, et le nom annonce la voix.',
    'Certes, soi-disant, serait, bravo devant un échec : le ton.',
    'Un trou ? Un blanc, puis la reformulation et le résumé final.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente', 'position', 'fil'],
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from act 2 to act 10, one
 *  round recycling structures from earlier B2 lessons (named in the round),
 *  and one integration round on the debate. Each round's target is a
 *  distinct errorTrigger. A LISTENING QUIZ: every round has three
 *  listenChoose, each with its own `say`. Round 10 and the debate round are
 *  in DELF B2 / TEF / TCF formats. Options are rotated by spreadSlots(). */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: "Une partie de la phrase trahit ce que tu as entendu. Écris la phrase juste. EN: Part of the sentence betrays what you heard; write the right sentence.", prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-plan', label: 'Le plan annoncé', targets: ['plan-perdu'],
      questions: [
        mc('« Je vais procéder en trois temps » t’annonce...', ['trois parties', 'trois exemples', 'trois minutes'], 0, 'Trois temps : trois titres dans tes notes. EN: three parts.', 'a2-annonces'),
        mc('« Petite parenthèse » ouvre...', ['la conclusion', 'un détail hors du plan', 'le deuxième point'], 1, 'Un détour, refermé ensuite. EN: an aside.', 'a2-annonces'),
        tI('Complète le panneau. Un mot.', "J'en ... maintenant à mon deuxième point.", 'viens', "J'en viens à : on change de partie. EN: I now come to.", 'a2-trier'),
        tI('Complète. Un mot.', 'Pour ..., je dirais que le bruit n’est pas une fatalité.', 'conclure', 'Pour conclure : la thèse arrive. EN: to conclude.', 'a2-expose'),
        eS('Premièrement, les solutions ; troisième et dernier point : la santé.', 'Premièrement, la santé ; troisième et dernier point : les solutions.', 'La santé ouvre le plan, les solutions le ferment. EN: health first, solutions last.', 'a2-expose'),
        lC('Écoute. Cette phrase ouvre...', S(1618).fr, ['le deuxième point', 'la conclusion'], 0, "Un nouveau titre dans tes notes. EN: the second point.", 'a2-trier'),
        lC('Écoute. Que fait l’oratrice ?', S(1617).fr, ['elle revient au plan', 'elle conclut', 'elle donne un exemple'], 0, 'Le détour est fini. EN: back to the plan.', 'a2-annonces'),
        lC('Écoute. D’où vient surtout le bruit ?', EXPOSE_LINES[10].fr, ['des bars', 'de la circulation'], 1, 'Pas des bars, comme on le croit : la circulation. EN: traffic.', 'a2-pieges'),
      ],
    },
    {
      id: 'r3-notes', label: 'Des notes en charpente', targets: ['notes-phrases'],
      questions: [
        mc('Pendant une chronique rapide, tu notes...', ['des phrases complètes', 'des mots-clés, des chiffres, des flèches'], 1, 'Les phrases viendront au résumé. EN: key words and figures.', 'a3-regles'),
        mc('Tu as raté une cause. Tu écris...', ['la cause que tu imagines', 'un « ? », et tu continues', 'rien du tout'], 1, 'Un trou marqué, jamais inventé. EN: a question mark.', 'a3-symboles'),
        tI('Note ce chiffre comme dans tes notes. En chiffres.', 'cent vingt grammes = ... g', '120', 'Les chiffres en chiffres, tout de suite. EN: 120.', 'a3-choisir'),
        tI('Quel signe pour une cause ou une conséquence ? Un mot.', 'Pour une cause, je dessine une ...', 'flèche', 'La flèche remplace parce que et donc. EN: an arrow.', 'a3-symboles'),
        eS('Le gaspillage a augmenté de quarante pour cent.', 'Le gaspillage a baissé de quarante pour cent.', 'La flèche descend : moins quarante. EN: it fell.', 'a3-chronique'),
        lC('Écoute. Le chroniqueur est...', S(1637).fr, ['convaincu sans réserve', 'prudent sur le coût'], 1, 'Une question reste ouverte : qui paie. EN: cautious about cost.', 'a3-note'),
        lC('Écoute. Quelle part des repas ?', S(1634).fr, ['1/3', '1/4', '1/2'], 0, 'Un repas sur trois. EN: one in three.', 'a3-chronique'),
        lC('Écoute. Dans tes notes, ça donne...', S(1635).fr, ['gaspillage ↓ 40 %', 'gaspillage ↑ 40 %'], 0, 'Baissé : la flèche descend. EN: down.', 'a3-symboles'),
      ],
    },
    {
      id: 'r4-positions', label: 'Qui pense quoi', targets: ['positions-melangees'],
      questions: [
        mc('Dans un débat, la voix suivante est souvent...', ["celle que l'animateur vient de nommer", 'la plus forte'], 0, 'Le nom annonce la voix. EN: the named one.', 'a4-attribuer'),
        mc('« Je comprends le constat, mais je ne partage pas la conclusion. » La personne est...', ["d'accord sur tout", "d'accord sur les faits, pas sur la conclusion", 'contre les faits'], 1, 'Deux niveaux : les faits, puis ce qu’on en tire. EN: facts yes, conclusion no.', 'a4-voix'),
        tI('Complète. Un mot.', 'Sur ce point, je vous ...', 'rejoins', 'Un accord sur un point seulement. EN: I agree with you.', 'a4-voix'),
        tI('Que propose Olivier Gendron ? Un mot.', 'Un ..., oui ; une interdiction, non.', 'permis', 'Un permis. EN: a permit.', 'a4-debat'),
        eS('Olivier Gendron veut interdire les locations de courte durée.', 'Olivier Gendron veut un permis pour les locations de courte durée.', "C'est Sandrine Kaboré qui veut limiter ; lui préfère un permis. EN: he wants a permit.", 'a4-debat'),
        lC('Écoute. Qui parle ?', LOGEMENT_LINES[11].fr, ['Sandrine Kaboré', 'Olivier Gendron'], 0, 'Elle répond au permis de Gendron. EN: Kaboré.', 'a4-attribuer'),
        lC('Écoute. La personne est...', S(1644).fr, ['en désaccord net', "d'accord sur un point"], 0, 'Pas du tout : aucune nuance. EN: flat disagreement.', 'a4-voix'),
        lC('Format TEF, section C. Écoute. La position de cette personne ?', TROTTOIR_LINES[3].fr, ['favorable', 'défavorable', "ça dépend de l'âge"], 2, 'À douze ans oui, à seize non. EN: it depends.', 'a4-trottoir'),
      ],
    },
    {
      id: 'r5-parole', label: 'La prise de parole', targets: ['interruption-mal-lue'],
      questions: [
        mc('« Je vous arrête tout de suite » sert à...', ['couper la parole', 'rendre la parole'], 0, 'On coupe pour recentrer. EN: to interrupt.', 'a5-tours'),
        mc('« Laissez-moi finir, j’y viens. » L’idée...', ['est abandonnée', 'va arriver', 'a déjà été dite'], 1, 'Garde une case ouverte. EN: it is coming.', 'a5-tours'),
        tI('Complète. Un mot.', 'Comme je le ..., le problème est ailleurs.', 'disais', "L'idée coupée revient. EN: as I was saying.", 'a5-qui'),
        tI('Combien de lignes d’autobus supprimées ? En lettres ou en chiffres.', '... lignes supprimées en septembre.', 'quatre', 'Quatre lignes. EN: four.', 'a5-interview', ['4']),
        eS('Le directeur ne reconnaît aucune demande.', 'Le directeur reconnaît une demande aux heures de pointe.', 'Poussé, il concède le matin. EN: he concedes rush hour.', 'a5-piege'),
        lC('Écoute. Cette personne...', S(1659).fr, ['signale une esquive', 'félicite son invité'], 0, "Elle dit qu'il évite la question. EN: flags a dodge.", 'a5-tours'),
        lC('Écoute. La journaliste...', S(1669).fr, ['est rassurée', "ironise : elle n'y croit pas"], 1, 'Pas cette année : et l’an prochain ? EN: irony.', 'a5-piege'),
        lC('Écoute. Qui garde la parole ?', S(1658).fr, ['celui qui parlait', 'celui qui voulait couper', 'personne'], 0, 'Il demande à terminer. EN: the speaker keeps it.', 'a5-qui'),
      ],
    },
    {
      id: 'r6-ton', label: 'Le ton', targets: ['ton-pris-au-mot'],
      questions: [
        mc('« Certes, c’est cher, mais c’est utile. » La personne est...', ['pour', 'contre'], 0, 'Le mais porte la position. EN: for it.', 'a6-marqueurs'),
        mc('« Les soi-disant économies » : la personne...', ['y croit', 'en doute', 'les a calculées'], 1, 'Soi-disant met à distance. EN: doubts them.', 'a6-marqueurs'),
        tI('Complète. Un mot.', 'Ça, je te l’...', 'accorde', "Je te l'accorde : une concession. EN: I grant you.", 'a6-marqueurs'),
        tI('Complète avec le mot du doute.', 'Les ... douze mille signalements.', 'soi-disant', 'Soi-disant : il ne croit pas le chiffre. EN: so-called.', 'a6-balado'),
        eS('Raphaël trouve que l’appli est une belle réussite.', 'Raphaël trouve que l’appli est un échec.', 'Bravo devant un trou toujours là : ironie. EN: he thinks it failed.', 'a6-erreurs'),
        lC('Écoute. C’est...', TON_LINES[0].fr, ['une félicitation', "de l'ironie"], 1, 'Deux heures de retard, et bravo. EN: irony.', 'a6-ton'),
        lC('Écoute. Que fait la personne ?', S(1673).fr, ['elle concède, puis défend', 'elle ironise', "elle doute d'un chiffre"], 0, 'Il est vrai que... cela dit. EN: concedes, then defends.', 'a6-ton'),
        lC('Écoute. Cette personne soupçonne...', S(1679).fr, ['un calcul', 'un accident'], 0, 'Comme par hasard : pas un hasard. EN: a calculation.', 'a6-ton'),
      ],
    },
    {
      id: 'r7-sources', label: 'Le fait et la source', targets: ['source-effacee'],
      questions: [
        mc('« Le feu serait parti d’un camion. » C’est...', ['confirmé', 'une piste'], 1, 'Le conditionnel du journaliste. EN: a lead.', 'a7-degres'),
        mc('Qui confirme qu’il n’y a aucun blessé ?', ['le témoin', 'les pompiers', "l'entreprise"], 1, 'Selon les pompiers. EN: the fire service.', 'a7-reportage'),
        tI('Complète. Un mot.', "La piste criminelle n'est pas ...", 'exclue', 'Pas exclue : possible, pas prouvée. EN: ruled out.', 'a7-classer', ['exclu']),
        tI("Septante, en Belgique, c'est combien ? En chiffres.", 'septante = ...', '70', 'Soixante-dix. EN: seventy.', 'a7-reportage', ['soixante-dix']),
        eS("Le feu est parti d'un camion.", "Le feu serait parti d'un camion.", 'Une piste : garde le conditionnel. EN: keep the conditional.', 'a7-note'),
        lC('Écoute. C’est...', S(1694).fr, ['un fait prouvé', "l'avis d'un témoin"], 1, "Sûr de lui, mais c'est son avis. EN: an opinion.", 'a7-degres'),
        lC('Écoute. La commune...', S(1691).fr, ['accuse', 'reste prudente', 'confirme'], 1, 'Trop tôt : prudence. EN: cautious.', 'a7-classer'),
        lC('Écoute. Le chiffre des dégâts est...', REPORTAGE_LINES[11].fr, ['provisoire', 'définitif'], 0, 'À ce stade : il peut changer. EN: provisional.', 'a7-exemples'),
      ],
    },
    {
      id: 'r8-implicite', label: 'Le non poli', targets: ['non-pris-pour-oui'],
      questions: [
        mc('« Ça me paraît difficile. » Il a dit...', ['oui', 'non, poliment', "qu'il ne sait pas"], 1, 'Un refus qui garde la porte ouverte. EN: a polite no.', 'a8-signes'),
        mc('« Je comprends tout à fait votre position » veut dire...', ['il accepte', 'il a entendu, sans accepter'], 1, 'Comprendre n’est pas accepter. EN: heard, not accepted.', 'a8-piege'),
        tI("Complète le signe d'ouverture. Un mot.", 'Là, on peut en ...', 'parler', 'Une vraie ouverture. EN: discuss.', 'a8-oui-non'),
        tI('Complète. Un mot.', 'Sur le ..., pourquoi pas.', 'principe', 'Une condition, pas un oui. EN: in principle.', 'a8-piege'),
        eS('Thomas Girard accepte le tarif de cent dix euros.', 'Thomas Girard refuse poliment le tarif de cent dix euros.', 'Une piste, difficile : un non poli. EN: he politely declines.', 'a8-appel'),
        lC('Écoute. C’est...', S(1704).fr, ['un oui', "une réponse qui n'en est pas une"], 1, 'Une piste parmi d’autres. EN: not an answer.', 'a8-signes'),
        lC('Écoute. C’est...', S(1708).fr, ['une vraie ouverture', 'un refus'], 0, 'Il accepte de négocier. EN: a real opening.', 'a8-oui-non'),
        lC('Écoute. Awa Diop...', APPEL_LINES[13].fr, ['attend sans limite', 'fixe une date limite', 'raccroche'], 1, 'Vendredi, sinon ailleurs. EN: sets a deadline.', 'a8-appel'),
      ],
    },
    {
      id: 'r9-fil', label: 'Rattraper le fil', targets: ['fil-lache'],
      questions: [
        mc('Tu as décroché. Tu...', ['rembobines dans ta tête', 'laisses un blanc et continues'], 1, 'La voix ne t’attend pas. EN: leave a gap.', 'a9-astuces'),
        mc('« Si je résume » annonce...', ['un nouvel exemple', 'le résumé des idées', 'une question'], 1, 'Le moment de remplir tes « ? ». EN: the recap.', 'a9-reformuler'),
        tI('Complète. Un mot.', "En d'autres ..., ce n'est pas une question de peinture.", 'termes', 'Une reformulation. EN: in other terms.', 'a9-reformuler'),
        tI("Combien d'effets dans le cours ? En lettres ou en chiffres.", '... effets du télétravail.', 'trois', 'Premier, deuxième, troisième. EN: three.', 'a9-cours', ['3']),
        eS('Le résumé final ajoute une idée nouvelle.', 'Le résumé final redit les idées du cours.', 'Il redit, il n’ajoute pas. EN: it restates.', 'a9-astuces'),
        lC('Écoute. Cette phrase...', RELANCE_LINES[1].fr, ["redit la phrase d'avant", 'ouvre un sujet'], 0, 'Autrement dit : une deuxième chance. EN: a restatement.', 'a9-relance'),
        lC('Écoute. Avec ça, tu remplis...', COURS_LINES[13].fr, ['les « ? » de tes notes', 'rien'], 0, 'Le résumé final comble les trous. EN: your gaps.', 'a9-note'),
        lC('Écoute. C’est...', S(1722).fr, ['un rappel du dernier cours', 'la conclusion', 'une interruption'], 0, 'Reprenons : on repart de la dernière fois. EN: a recap.', 'a9-reformuler'),
      ],
    },
    {
      id: 'r10-epreuve', label: "L'épreuve", targets: ['piege-epreuve'],
      questions: [
        mc('Format DELF B2 : « Vous allez écouter 2 fois un document. » À la première écoute, tu...', ['repères les positions', 'notes chaque phrase'], 0, 'La deuxième sert à vérifier. EN: spot positions first.', 'a10-formats'),
        mc('Format TEF, section C : pour chaque personne, tu notes...', ['son âge', 'oui, non, ou oui mais', 'sa ville'], 1, 'Sa position en deux mots. EN: yes, no or yes but.', 'a10-formats'),
        tI('Complète. Un mot.', "Oui, à ... d'avoir des profs formés.", 'condition', 'Un oui limité. EN: provided.', 'a10-question'),
        tI('Complète. Un mot.', 'Une deuxième langue, oui, mais pas au ... du français.', 'détriment', 'Au détriment de : aux dépens de. EN: at the expense of.', 'a10-monde'),
        eS('La bonne réponse reprend toujours les mots du document.', "La bonne réponse dit la même chose avec d'autres mots.", "C'est le piège qui reprend les mots. EN: the right one rephrases.", 'a10-pieges'),
        lC('Format TCF. Écoute. La position de cette personne ?', MONDE_LINES[9].fr, ['favorable sous condition', 'défavorable', 'favorable sans réserve'], 0, 'Oui, à condition. EN: conditional yes.', 'a10-monde'),
        lC('Format TEF. Écoute. Cette personne...', MONDE_LINES[7].fr, ['reformule la question', 'répond non'], 0, 'Elle déplace le débat. EN: reframes it.', 'a10-question'),
        lC("Format DELF B2. Écoute. Quelle est l'attitude de la personne ?", S(1744).fr, ["elle nuance ce qu'elle vient de dire", 'elle se fâche'], 0, 'Elle adoucit son exemple. EN: she softens it.', 'a10-pieges'),
      ],
    },
    {
      id: 'r11-structures', label: 'Les structures du B2 à l’oreille', targets: ['structure-mal-entendue'],
      questions: [
        lC(`Écoute. Structure de ${COND_PASSE_REF}. La journaliste...`, S(1667).fr, ['fait un reproche', 'annonce un projet'], 0, 'Il aurait fallu : ça n’a pas été fait. EN: a reproach.', 'a5-piege'),
        lC(`Écoute. Structure de ${SI_MIXTE_REF}. Le camion a-t-il été déplacé ?`, S(1701).fr, ['oui', 'non'], 1, 'Si + plus-que-parfait : une condition passée qui ne s’est pas réalisée. EN: no, it was not moved.', 'a7-exemples'),
        lC(`Écoute. Structure de ${FUT_ANT_REF}. Quand aura-t-il parlé à sa direction ?`, S(1716).fr, ['avant jeudi', 'après vendredi'], 0, "D'ici jeudi : ce sera fait avant. EN: by Thursday.", 'a8-piege'),
        mc(`Structure de ${PQP_REF}. « Quand les entreprises ont réagi, les bureaux s’étaient déjà vidés. » Qu’est-ce qui vient en premier ?`, ['la réaction des entreprises', 'les bureaux vides'], 1, 'Le plus-que-parfait : avant l’autre action. EN: the offices emptied first.', 'a9-cours'),
        mc(`Structure de ${CONCESSION_B2_REF}. « Bien que l’appli soit utile, elle ne remplace pas les équipes. » L’appli est...`, ['inutile', 'utile, mais insuffisante', 'parfaite'], 1, 'Bien que concède, la suite limite. EN: useful but not enough.', 'a6-trier'),
        tI(`Structure de ${SUBJ_REF}. Complète avec le verbe être.`, 'Je ne suis pas sûr que ce ... la meilleure solution.', 'soit', 'Le doute appelle le subjonctif. EN: doubt takes the subjunctive.', 'a8-piege'),
        tI(`Structure de ${COND_PASSE_REF}. Complète. Un mot.`, 'Il aurait ... consulter les usagers avant.', 'fallu', 'Il aurait fallu : le reproche. EN: should have.', 'a5-interview'),
        eS("Si le camion avait été déplacé, on n'en sera pas là.", "Si le camion avait été déplacé, on n'en serait pas là.", `Si + plus-que-parfait, puis conditionnel, comme dans ${SI_MIXTE_REF}. EN: conditional in the main clause.`, 'a7-exemples'),
      ],
    },
    {
      id: 'r12-debat', label: 'Le Débat de midi', targets: ['resume-infidele'],
      questions: [
        mc('Format DELF B2. Quelles sont les deux raisons de Karim Benali ?', ["le pouvoir d'achat et le climat", 'la fréquence et le prix', 'les taxes et le bruit'], 0, 'Premièrement, deuxièmement. EN: purchasing power and climate.', 'a11-debat'),
        mc("Format DELF B2. Quelle est l'attitude de Claire Fortin envers le budget prévu ?", ["elle l'approuve", 'elle le met en doute'], 1, 'Soi-disant budget prévu. EN: she doubts it.', 'a11-debat'),
        tI('Complète le résumé. Un mot.', 'Claire Fortin ... que la fréquentation augmente.', 'reconnaît', 'Reconnaître : rapporter une concession. EN: acknowledges.', 'a11-plan', ['reconnait']),
        tI('Complète le résumé. Un mot.', 'Selon elle, le vrai problème, c’est la ..., pas le prix.', 'fréquence', 'Un autobus toutes les quarante minutes. EN: frequency.', 'a11-debat'),
        eS('Claire Fortin propose la gratuité pour tous.', 'Claire Fortin propose un tarif selon le revenu.', 'C’est lui qui défend la gratuité. EN: she proposes an income-based fare.', 'a11-debat'),
        lC('Écoute. Que fait Claire Fortin ?', DEBAT_LINES[5].fr, ['elle concède, puis questionne', 'elle approuve sans réserve'], 0, 'Certes, puis une question. EN: concedes, then questions.', 'a11-debat'),
        lC('Écoute. C’est...', DEBAT_LINES[12].fr, ["du doute et de l'ironie", 'une concession', 'un fait chiffré'], 0, 'Soi-disant, puis les promesses. EN: doubt and irony.', 'a11-debat'),
        lC('Écoute. Karim Benali...', DEBAT_LINES[16].fr, ['accepte la proposition', 'la reçoit poliment, puis objecte'], 1, 'Une piste, mais un formulaire de plus. EN: polite, then an objection.', 'a8-signes'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order, although LessonRich
 *  reshuffles options on every attempt. Each closed question's options are
 *  ROTATED, with `correct` moved in step, onto the least-used slot so far
 *  (b1.25's helper, as b1.38 uses it). No `why` names a slot. */
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

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Le débat de midi',
    opener: {
      line: "Deux minutes de débat sur l'autobus gratuit : à toi de les noter, puis de les résumer pour un collègue. EN: Two minutes of debate on free buses: your turn to note them, then summarise them for a colleague.",
      imageRef: 'lessons/ecoute-vitesse-reelle/act11.jpg',
    },
    sections: [],
    milestone: "Tu as résumé un vrai débat, ses deux positions et le ton d'une invitée, et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You summarised a real debate, both positions and a guest's tone, and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 140,
    restPoints: ['a11-debat', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-positions', 'a11-quiz/r7-sources', 'a11-quiz/r10-epreuve'],
  },
  sections: [
    A11_DEBAT, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-plan', title: 'Le plan avance, ou il fait un détour', format: 'sort' as const, coach: "Deux piles : le panneau fait avancer le plan, ou il en sort et y revient ? EN: sort the signposts.", buckets: ['le plan avance', 'un détour'], items: [E(1614), E(1618), E(1619), E(1616), E(1617), E(1625)], audio: AUDIO },
  { id: 'd-notes', title: 'Des notes en charpente', format: 'flashcard' as const, coach: "Dis chaque règle à voix haute, puis note la dernière chronique que tu as entendue. EN: say each rule aloud.", items: [E(1628), E(1629), E(1630), E(1631), E(1632), E(1641)], audio: AUDIO },
  { id: 'd-positions', title: 'Où se place la personne', format: 'mcq' as const, coach: "Écoute où chacun se place : accord, désaccord, ou accord sur un point. EN: agreement, disagreement or partial.", q: '« Je comprends le constat, mais je ne partage pas la conclusion. » La personne est...', opts: ["d'accord sur tout", "d'accord sur les faits, pas sur la conclusion"], correct: 1, why: 'Deux niveaux : les faits, et ce qu’on en tire. EN: facts yes, conclusion no.', items: [E(1642), E(1643), E(1644), E(1645), E(1646), E(1651)], audio: AUDIO },
  { id: 'd-parole', title: 'Prendre ou garder la parole', format: 'sort' as const, coach: "Deux piles : on coupe ou on demande la parole, ou bien on la garde ou la reprend ? EN: sort taking from keeping.", buckets: ['couper, demander', 'garder, reprendre'], items: [E(1656), E(1659), E(1660), E(1657), E(1658), E(1662)], audio: AUDIO },
  { id: 'd-ton', title: 'Concéder, ou douter', format: 'sort' as const, coach: "Deux piles : la personne accorde un point, ou elle doute et se moque ? EN: sort concession from doubt and irony.", buckets: ['une concession', 'du doute, de l’ironie'], items: [E(1671), E(1672), E(1673), E(1676), E(1677), E(1679)], audio: AUDIO },
  { id: 'd-sources', title: 'Qui le dit, et est-ce confirmé', format: 'mcq' as const, coach: 'Pour chaque phrase : qui le dit, et est-ce confirmé ? EN: who says it, and is it confirmed?', q: "« Le feu serait parti d'un camion. » C'est...", opts: ['une piste, pas encore prouvée', 'confirmé'], correct: 0, why: 'Le conditionnel du journaliste. EN: a lead.', items: [E(1688), E(1689), E(1691), E(1692), E(1694), E(1699)], audio: AUDIO },
  { id: 'd-implicite', title: 'Le non poli', format: 'mcq' as const, coach: "Écoute ce qui n'est pas dit : la formule polie cache souvent un non. EN: listen for what is not said.", q: "« Ça me paraît difficile. » Ton interlocuteur...", opts: ['accepte', 'refuse poliment'], correct: 1, why: 'Difficile veut souvent dire non. EN: a polite no.', items: [E(1703), E(1704), E(1705), E(1706), E(1710), E(1711)], audio: AUDIO },
  { id: 'd-fil', title: 'Revenir dans l’écoute', format: 'flashcard' as const, coach: "Dis chaque geste à voix haute : blanc, panneau, reformulation, résumé. EN: say each move aloud.", items: [E(1724), E(1725), E(1726), E(1727), E(1733), E(1721)], audio: AUDIO },
  { id: 'd-epreuve', title: 'La consigne d’abord', format: 'mcq' as const, coach: "Lis la consigne et les questions, note une ligne par voix, méfie-toi de l'option qui répète. EN: instructions first, one line per voice.", q: "Une option reprend exactement un mot que tu as entendu. Elle est...", opts: ['peut-être un piège', 'forcément juste'], correct: 0, why: 'La bonne réponse reformule. EN: the right one rephrases.', items: [E(1734), E(1735), E(1736), E(1737), E(1742), B1S(1366)], audio: AUDIO },
  { id: 'd-structures', title: 'Le B2 à vitesse réelle', format: 'mcq' as const, coach: "Écoute la structure : elle dit si c'est fait, pas fait, ou pas encore fait. EN: the structure says done, not done or not yet.", q: '« Il aurait fallu consulter les usagers. » La journaliste...', opts: ['fait un reproche', 'annonce un projet'], correct: 0, why: 'Le conditionnel passé du reproche. EN: a reproach.', items: [E(1667), E(1685), E(1701), E(1709), E(1716), E(1731)], audio: AUDIO },
  { id: 'd-resume', title: 'Les phrases du résumé', format: 'flashcard' as const, coach: "Dis chaque phrase du résumé à voix haute, avec son verbe qui rapporte. EN: say each summary line aloud.", items: [E(1748), E(1749), E(1750), E(1751), E(1754), E(1756)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'plan-perdu', description: "Hears the words of a talk but not its announced plan or asides, so the notes have no headings and an aside is taken for a main point.", detectOn: ['a2-trier', 'a2-pieges', 'a2-check', 'a11-mission'], drill: 'd-plan', retest: 'd-plan' },
  { id: 'notes-phrases', description: "Tries to write sentences while listening, falls behind, and loses figures, links and the speaker's reservation.", detectOn: ['a3-choisir', 'a3-note', 'a3-check', 'a11-mission'], drill: 'd-notes', retest: 'd-notes' },
  { id: 'positions-melangees', description: 'Mixes up who said what in a debate, misses partial agreement, or files a shared point under one speaker.', detectOn: ['a4-attribuer', 'a4-note', 'a4-check', 'a11-mission'], drill: 'd-positions', retest: 'd-positions' },
  { id: 'interruption-mal-lue', description: 'Takes an interrupted idea for a finished one, credits an interruption to the wrong voice, or ignores a dodged question.', detectOn: ['a5-qui', 'a5-piege', 'a5-check'], drill: 'd-parole', retest: 'd-parole' },
  { id: 'ton-pris-au-mot', description: 'Takes irony as praise and a concession as a change of mind, and reports a doubted figure as fact.', detectOn: ['a6-trier', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-ton', retest: 'd-ton' },
  { id: 'source-effacee', description: "Reports a conditional lead, an official caution or a witness's opinion as confirmed fact, dropping the source.", detectOn: ['a7-classer', 'a7-note', 'a7-check'], drill: 'd-sources', retest: 'd-sources' },
  { id: 'non-pris-pour-oui', description: "Hears a polite formula (c'est une piste, ça me paraît difficile) as agreement and misses what was left unsaid.", detectOn: ['a8-oui-non', 'a8-piege', 'a8-check'], drill: 'd-implicite', retest: 'd-implicite' },
  { id: 'fil-lache', description: 'After a missed chunk, rewinds mentally or gives up, and misses the rephrasing and the recap that would have filled the gap.', detectOn: ['a9-reformuler', 'a9-note', 'a9-check'], drill: 'd-fil', retest: 'd-fil' },
  { id: 'piege-epreuve', description: 'In the B2 listening paper, listens without reading the instructions and questions, picks the option that echoes a heard word, or mixes speakers.', detectOn: ['a10-question', 'a10-pieges', 'a10-check'], drill: 'd-epreuve', retest: 'd-epreuve' },
  { id: 'structure-mal-entendue', description: 'At natural speed, misreads B2 structures: a conditionnel passé reproach as fact, a past-unreal si clause as real, the order of events in a pluperfect.', detectOn: ['a5-piege', 'a7-exemples', 'a8-piege'], drill: 'd-structures', retest: 'd-structures' },
  { id: 'resume-infidele', description: "Summarises a debate by copying the transcript, dropping a position or the shared point, adding an opinion, or losing a speaker's stance.", detectOn: ['a11-debat', 'a11-cheat', 'a11-mission'], drill: 'd-resume', retest: 'd-resume' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here. Every sheet is reached
 *  from a mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-plan', 'Le plan et les notes', ['les panneaux du plan', 'les signes pour noter', 'une page de notes'], [
    teach('sheet-plan-teach', 'Le plan donne les titres',
      `Un exposé, une chronique ou un cours annoncent souvent leur plan, puis le signalent partie par partie. Ces panneaux deviennent les titres de tes notes ; sous chaque titre, des mots-clés, des chiffres et des flèches. ${Cap(ECOUTE_B1_REF)} te donnait le filet : « ${B138_REFRAME} » Au B2, la charpente range ce que le filet attrape. ${Cap(CONNECTEURS_REF)} t'ont appris ces liens à l'écrit. EN: The announced plan gives the headings of your notes; key words, figures and arrows go under them.`),
    table('sheet-plan-panneaux', 'Les panneaux du plan', ['Le discours...', 'Tu entends', 'Dans tes notes'], [
      ['annonce son plan', 'je vais procéder en trois temps ; je voudrais aborder deux points', 'autant de titres'],
      ['ouvre une partie', "premièrement ; dans un premier temps ; j'en viens à", 'un nouveau titre'],
      ['avance', 'dans un second temps ; troisième et dernier point', 'le titre suivant'],
      ['fait un détour', 'petite parenthèse ; au passage', 'rien, ou un détail entre parenthèses'],
      ['revient au plan', 'je referme la parenthèse ; revenons-en à notre sujet', 'le titre en cours'],
      ['conclut', 'pour conclure ; en somme ; si je résume', 'la thèse, presque mot pour mot'],
    ]),
    table('sheet-plan-signes', 'Les signes pour noter vite', ['Signe', 'Sens', 'Exemple'], [
      ['→', 'cause, conséquence', 'portions → gaspillage'],
      ['↑  ↓', 'hausse, baisse', 'gaspillage ↓ 40 %'],
      ['=  ≠', 'pareil, différent ou opposé', 'Kaboré ≠ Gendron'],
      ['?', 'raté, à compléter', '? coût du personnel'],
      ['pb, bcp, qqn, qqch, gvt', 'problème, beaucoup, quelqu’un, quelque chose, gouvernement', 'pb = fréquence'],
      ['C, ?, !', 'concession, doute, ironie', 'Fortin : C fréquentation, ? budget, ! promesses'],
    ]),
    table('sheet-plan-page', 'Une page de notes pour un débat', ['Zone', 'Ce que tu y mets'], [
      ['en haut', 'le sujet en trois mots, et qui parle'],
      ['colonne gauche', 'la première voix : sa position, ses raisons, ses chiffres'],
      ['colonne droite', 'la deuxième voix : pareil'],
      ['entre les colonnes', '= pour un accord, ≠ pour un désaccord'],
      ['en bas', "le point d'accord, les propositions, la conclusion"],
      ['partout', 'des « ? » à remplir après, avec le résumé final'],
    ]),
  ]),
  sheet('sheet-voix', "Les voix d'un débat", ['accord et désaccord', 'la prise de parole', 'le non poli'], [
    teach('sheet-voix-teach', 'Qui parle, et où il se place',
      "Dans un débat, l'animateur nomme la personne avant de lui donner la parole : c'est ton repère. Écoute ensuite où elle se place : d'accord, pas d'accord, ou d'accord sur un point. Les voix se coupent, mais une idée coupée revient souvent. Et au téléphone ou en réunion, un non se dit rarement non. EN: Names announce voices; listen for where each voice stands, for interrupted ideas coming back, and for the polite no."),
    table('sheet-voix-accord', 'Accord et désaccord', ['Tu entends', 'Ça veut dire', 'Tu notes'], [
      ['sur ce point, je vous rejoins', "d'accord sur un seul point", '= sur ce point'],
      ['je comprends le constat, mais...', "d'accord sur les faits, pas sur la conclusion", 'faits =, conclusion ≠'],
      ['je ne partage pas du tout cette analyse', 'désaccord net', '≠'],
      ['moi, je vois les choses autrement', 'désaccord, une autre position arrive', '≠, puis sa position'],
      ['comme vous le disiez tout à l’heure', "s'appuie sur l'autre, parfois pour le retourner", 'à vérifier'],
      ['à mon avis, selon moi', 'une opinion personnelle', 'avis'],
    ]),
    table('sheet-voix-parole', 'La prise de parole', ['Geste', 'Tu entends', 'Ce qui suit'], [
      ['couper', 'je vous arrête tout de suite ; pardon, mais...', 'la question change'],
      ['demander', 'juste un mot, si je peux me permettre ; permettez-moi de vous interrompre', 'une contradiction'],
      ['recentrer', 'vous ne répondez pas à ma question', 'une esquive signalée'],
      ['garder', "laissez-moi finir, j'y viens ; si vous me permettez de terminer", "l'idée annoncée"],
      ['rendre', 'je termine, et je vous laisse la parole', 'une autre voix'],
      ['reprendre', 'comme je le disais', "l'idée coupée"],
    ]),
    table('sheet-voix-implicite', 'Le non poli, et la vraie ouverture', ['Tu entends', 'Ça veut souvent dire'], [
      ['je comprends tout à fait votre position', "j'ai entendu, je n'accepte pas"],
      ["c'est une piste", 'pas de réponse, pas de oui'],
      ['ça me paraît difficile', 'non'],
      ['sur le principe, pourquoi pas', 'peut-être, sous condition, plus tard'],
      ['je ne vous promets rien ; je vais voir avec ma direction', 'rien de décidé'],
      ["c'est une façon de voir les choses ; admettons", 'je ne suis pas d’accord'],
      ['là, on peut en parler', 'une vraie ouverture'],
    ]),
  ]),
  sheet('sheet-ton', 'Le ton et la distance', ['concéder', 'douter', 'ironiser', 'les degrés de certitude'], [
    teach('sheet-ton-teach', 'Ce que la voix pense de ce qu’elle dit',
      `Le ton passe surtout par les mots. On concède un point pour mieux défendre le reste (${CONCESSION_B1_REF} t'en a donné la forme). On prend ses distances avec soi-disant, prétendument, ou le conditionnel du journaliste. On ironise en louant ce que la situation contredit. Dans un reportage, chaque information a un poids : fait confirmé, piste, prudence, avis. EN: Tone lives mostly in words: concession, distance, irony; in the news, each item has a weight.`),
    table('sheet-ton-marqueurs', 'Concéder, douter, ironiser', ['Attitude', 'Tu entends', 'Dans ton résumé'], [
      ['concession', "certes... mais ; je te l'accorde ; il est vrai que... cela dit", 'elle reconnaît que..., mais'],
      ['doute', 'soi-disant ; prétendument ; on verra ; reste à savoir', 'il met en doute...'],
      ['soupçon', 'comme par hasard', 'il laisse entendre que...'],
      ['ironie', 'bravo, belle réussite (devant un échec) ; rien que ça ; c’est ça, oui', 'elle ironise sur...'],
      ['nuance', "enfin, j'exagère un peu ; pas si vite", 'elle nuance...'],
      ['reproche', 'il aurait fallu...', 'elle reproche de ne pas avoir...'],
    ]),
    table('sheet-ton-certitude', 'Les degrés de certitude', ['Tu entends', 'Le poids', 'Tu écris'], [
      ['selon les pompiers, aucun blessé', 'fait confirmé, avec sa source', 'selon les pompiers, ...'],
      ["le feu serait parti d'un camion", 'piste non confirmée', 'le feu serait parti...'],
      ['il est trop tôt pour... ; pas exclu ; à ce stade', 'prudence officielle', 'rien n’est confirmé'],
      ["c'est pas un accident, je vous le dis", "avis d'un témoin", 'selon un témoin, ...'],
      ['il paraît que...', 'rumeur', 'une rumeur, sans source'],
    ]),
  ]),
  sheet('sheet-fil', 'Rattraper le fil', ['les reformulations', 'quatre gestes après un trou'], [
    teach('sheet-fil-teach', 'Un passage raté se rattrape plus loin',
      `À vitesse réelle, tout le monde décroche un moment. Ne rembobine pas dans ta tête : pendant ce temps, la suite passe aussi. Laisse un blanc, reprends au panneau suivant, et guette la reformulation et le résumé final. C'est le réflexe de ${LECTURE_B1_REF}, pour l'oreille : « ${B137_REFRAME} » EN: Everyone drifts at real speed; leave a gap, re-enter at the next signpost, wait for the rephrasing and the recap.`),
    table('sheet-fil-reformulations', 'Les mots qui redonnent une idée', ['Tu entends', 'Ce qui suit'], [
      ['autrement dit', 'la même idée, plus simple'],
      ["en d'autres termes", 'la même idée, autrement'],
      ["c'est-à-dire (que)", 'une précision, un exemple'],
      ['bref ; en somme', "l'essentiel, en une phrase"],
      ['si je résume ; pour résumer', 'toutes les idées, dans l’ordre'],
      ['reprenons', 'un rappel de ce qui précède'],
    ]),
    table('sheet-fil-gestes', 'Quatre gestes après un trou', ['Geste', 'Pourquoi'], [
      ['1. Un « ? » dans tes notes', 'tu marques le trou sans t’arrêter'],
      ['2. Reprends au panneau suivant', 'deuxièmement, j’en viens à : tu sais où tu es'],
      ['3. Guette la reformulation', "l'idée difficile revient souvent, plus simple"],
      ['4. Remplis avec le résumé final', 'si je résume : tout revient une dernière fois'],
    ]),
  ]),
  sheet('sheet-epreuve', "L'épreuve et le résumé", ['les formats B2', 'les verbes du résumé', "des voix d'ailleurs"], [
    teach('sheet-epreuve-teach', 'À l’épreuve, puis au résumé',
      `Aux épreuves B2, on te demande moins ce qui est dit que qui pense quoi, pourquoi, et avec quelle attitude. Lis la consigne, les questions et les options avant le document. Au résumé, rapporte sans juger, avec des verbes qui disent l'attitude. Les voix d'ailleurs (Québec, Belgique, Suisse, Afrique de l'Ouest) sont le français de tous les jours : ${REGIONS_REF} y revient. EN: B2 papers ask who thinks what and why; read first; report without judging; regional voices are everyday French.`),
    table('sheet-epreuve-formats', 'Les formats d’écoute B2', ['Épreuve', 'Le document', 'Ce qu’on te demande'], [
      ['DELF B2, exercices 1 et 2', 'une émission de radio, entendue deux fois', 'des détails, les positions, l’attitude'],
      ['DELF B2, exercice 3', 'trois documents courts, entendus une fois', 'l’idée principale, un détail'],
      ['TEF, section C', 'des micros-trottoirs', "l'opinion de chaque personne"],
      ['TEF, section D', 'une chronique', 'ce que montre l’étude, la position de l’auteur'],
      ['TEF, section E', 'une interview, entendue deux fois', 'les raisons, les nuances de l’invité'],
      ['TCF', 'plusieurs documents, une question chacun', 'le point d’accord, l’attitude, l’implicite'],
    ]),
    table('sheet-epreuve-verbes', 'Les verbes du résumé', ['Pour dire que la personne...', 'Écris'], [
      ['soutient une position', 'défend, plaide pour, estime que'],
      ['accorde un point', 'reconnaît que, concède que, admet que'],
      ['refuse un point', 'conteste, rejette, ne partage pas'],
      ['doute', 'met en doute, s’interroge sur'],
      ['se moque', 'ironise sur'],
      ['avance une solution', 'propose, suggère'],
      ['est d’accord avec l’autre', "s'accorde avec lui sur, rejoint"],
    ]),
    table('sheet-epreuve-ailleurs', "Des voix d'ailleurs, entendues dans cette leçon", ['Tu entends', 'Où', 'Ça veut dire'], [
      ['septante', 'Belgique, Suisse', 'soixante-dix'],
      ['on savait plus se garer', 'Belgique', 'on ne pouvait plus se garer'],
      ['présentement', "Québec, Afrique de l'Ouest", 'en ce moment'],
      ['pis', 'Québec, à l’oral', 'puis, et'],
      ['le cellulaire', 'Québec', 'le portable'],
      ['un balado', 'Québec', 'un podcast'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-25-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b2-25-tribune': "REQUIRED FOR THE EAR MISSION (act 1): La Tribune du midi, eleven lines, ONE TAKE, THREE VOICES in authored order: the host Karine Lepage (lines 1-3, 7, 11), Samuel Ouellet (4, 6, 10), Hélène Brassard (5, 8, 9). Montréal French, real radio pace, turns that follow each other with NO pause beyond a breath; line 6 comes in on the tail of line 5. Nothing is slowed for the learner: the point is that it is too fast to transcribe.",
  'rec-b2-25-expose': "REQUIRED FOR THE EAR MISSION (act 2): the lecture on noise, sixteen lines, ONE TAKE, ONE VOICE, Dr Mireille Sow, a lecturer in front of an audience (light room acoustics welcome), Swiss French welcome. Signposts (« premièrement », « j'en viens maintenant à », « petite parenthèse », « pour conclure ») at their natural weight, NOT stressed: the learner has to find them.",
  'rec-b2-25-annonces': 'The four signpost cards, one voice, lecture pace, each card read as it would open a part of a talk.',
  'rec-b2-25-chronique': "REQUIRED FOR THE EAR MISSION (act 3): the radio chronicle, fourteen lines, ONE TAKE, ONE VOICE, a brisk chronicler at morning-radio speed. Figures said as a radio says them (« cent vingt grammes », « quarante pour cent »), never slowed. « Pas si vite » and « reste à savoir qui va payer » with a light, dry turn, not a performance.",
  'rec-b2-25-logement': "REQUIRED FOR THE EAR MISSION (act 4): the rentals debate, fifteen lines, ONE TAKE, THREE VOICES: host Laurent Dufresne (1-3, 7, 10, 15), Sandrine Kaboré (4, 8, 9, 12, 14), Olivier Gendron (5, 6, 11, 13). Québec City French. Voices distinct enough to follow, but the learner must rely on the host's naming, so no gimmicky contrast.",
  'rec-b2-25-voix': 'The four agreement cards, one voice, conversational pace, each read as a live reply in a debate.',
  'rec-b2-25-trottoir': "REQUIRED FOR THE EAR MISSION (act 4): the street poll, four lines, ONE TAKE, FOUR VOICES: a reporter and three Montréal passers-by of different ages, street ambience welcome. « Bof » as a real shrug. « Cellulaire » said plainly, never explained.",
  'rec-b2-25-interview': "REQUIRED FOR THE EAR MISSION (act 5): the interview, fifteen lines, ONE TAKE, TWO VOICES: journalist Maude Lavoie (1, 3, 6, 8, 10, 11, 13, 15) and director Serge Roussel (2, 4, 5, 7, 9, 12, 14). REAL OVERLAP: line 3 cuts line 2 mid-word, line 4 pushes back over the end of line 3, line 8 comes in before line 7 has finished. « On retiendra la nuance » dry, not sarcastic in tone: the words carry it.",
  'rec-b2-25-piege-parole': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the hurried notes in promptSound are never spoken.",
  'rec-b2-25-balado': "REQUIRED FOR THE EAR MISSION (act 6): the podcast, thirteen lines, ONE TAKE, TWO VOICES, relaxed Montréal hosts talking, not reading: Inès (1, 3, 5, 6, 8, 10, 11, 13) and Raphaël (2, 4, 7, 9, 12). REAL VOICES NEEDED FIRST: Raphaël's irony (« Bravo, belle réussite », « Rien que ça ») must sound like a dry aside, which TTS cannot do; the words still carry it if it is played by TTS.",
  'rec-b2-25-ton': "REQUIRED FOR THE EAR MISSION (act 6): six separate stances, ONE TAKE, three voices alternating, natural pace. Lines 1 and 4 ironic, 2 and 5 conceding, 3 and 6 doubting, each with the tone a speaker would really use, but never exaggerated: the words must still be the main clue.",
  'rec-b2-25-reportage': "REQUIRED FOR THE EAR MISSION (act 7): the news report, thirteen lines, ONE TAKE, THREE VOICES: a Belgian reporter (1-5, 9, 12, 13), Monsieur Lambert, an elderly Belgian witness (6, 7, 8), emotional but not a caricature, and the town's spokesperson (10, 11), careful and flat. « Septante » and « on savait plus se garer » said as a Namur speaker says them. Outdoor ambience under the witness.",
  'rec-b2-25-degres': 'The four certainty cards, newsreader voice, even pace.',
  'rec-b2-25-appel': "REQUIRED FOR THE EAR MISSION (act 8): the phone negotiation, sixteen lines, ONE TAKE, TWO VOICES, phone quality: Thomas Girard, Lyon, smooth and courteous (1, 3, 5, 6, 8, 9, 11, 13, 16), and Awa Diop, a Senegalese conference organiser, calm and firm (2, 4, 7, 10, 12, 14, 15). No caricature of either accent. Girard's polite formulas said warmly: the refusal must be hidden in politeness, as in life.",
  'rec-b2-25-piege-implicite': "The audio step plays each card's sentence, as said in a real negotiation: warm, courteous. The naive readings in promptSound are never spoken.",
  'rec-b2-25-cours': "REQUIRED FOR THE EAR MISSION (act 9): the lecture, fourteen lines, ONE TAKE, ONE VOICE, Professor Aminata Konaté, lecture-hall pace. Lines 7 and 8 (the dense passage) noticeably faster, as a lecturer speeds through a list; line 12 faster again (« je vais aller un peu vite »). The reformulations at normal weight.",
  'rec-b2-25-relance': 'Seven lines, ONE TAKE, one voice, each statement followed by its restatement with no pause beyond a breath.',
  'rec-b2-25-monde': "REQUIRED FOR THE EAR MISSION (act 10): the international street poll, ten lines, ONE TAKE, FIVE VOICES: the reporter (1, 3, 6, 9), a Lausanne speaker (2), a Liège speaker (4, 5), a Dakar speaker (7, 8) and a Québec speaker (10). REAL REGIONAL VOICES NEEDED FIRST, never imitated or exaggerated. « Septante », « pis » said naturally.",
  'rec-b2-25-formats': 'The four exam cards, one voice, the even voice of exam instructions.',
  'rec-b2-25-debat': "THE TASK DEBATE (act 11), REQUIRED FOR THE EAR MISSION: eighteen lines, ONE TAKE, THREE VOICES, about two and a quarter minutes: host Nathalie Côté (1, 2, 5, 10, 15, 18), Karim Benali, confident, fast (3, 4, 8, 12, 14, 17), Claire Fortin, precise, dry humour (6, 7, 9, 11, 13, 16). Québec French, live radio: line 12 cuts in on line 11, line 14 answers line 13 without a pause. « Certes », « soi-disant » and « sauf les promesses » at natural weight; the learner finds the stance in the words.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 25',
  intro: 'At B2 you can catch the gist of fast French; this lesson is about following it. Over a radio debate, a lecture, a chronicle, an interview, a podcast, a news report and a phone negotiation, all at natural speed, you learn to hear the announced plan, who holds which position, who has the floor, how each voice stands (concession, doubt, irony), what is fact and what is only claimed, and the polite no. You learn to take notes as a frame, to get back in after a missed chunk, and to handle the DELF B2, TEF and TCF listening formats. It ends with notes on a two-minute debate and a written summary.',
  skill: 'CO',
  grammarAssumed: [ECOUTE_B1_UNIT, LECTURE_B1_UNIT, DISCOURS_B1_UNIT, CONCESSION_B1_UNIT],
  grammarIntroduced: [
    'Listening at natural speed for the announced plan: structure announcements, part signposts (premièrement, j’en viens à), asides (petite parenthèse) and conclusions',
    'Note-taking as a frame: key words, figures, arrows and symbols, one column per voice, gaps marked for later',
    'Following positions and turn-taking in a debate or interview: agreement, partial agreement, disagreement; taking, keeping, cutting and resuming the floor',
    'Hearing stance: concession (certes... mais), distance and doubt (soi-disant, prétendument, the journalist’s conditional), irony, and the polite refusal in negotiation',
    'Recovering after a missed chunk through signposts, reformulation and the final recap; B2 listening exam formats; summarising a debate with reporting verbs',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B2, tu attrapes le sens d'un français rapide ; cette leçon t'apprend à le suivre. Dans un débat, un cours, une chronique, une interview, un balado, un reportage et une négociation, tous à vitesse réelle, tu entends le plan, qui défend quoi, qui a la parole, sur quel ton chacun parle, ce qui est un fait et ce qui n'est qu'affirmé. Tu prends des notes en charpente, tu rattrapes le fil, et tu résumes un vrai débat.",
    minutes: 160,
    difficulty: 4,
    glyph: 'écoute',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ECOUTE_VITESSE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (B1 build log, 2026-09-25). Kept, as every B1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, DEBAT_TRANSCRIPT, dicteeFor };


