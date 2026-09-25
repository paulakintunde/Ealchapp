// b1.21.l1 « L'inversion » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (build log, 2026-09-25): it is in SECTION_TYPES and the
// LessonSection union, validateSection enforces its rubric/model/watchFor
// rules and TaskView draws it. So `sections` is `LessonSection[]` and the
// validators run on `LESSON` itself, as b1.18 does. There is no
// `lessonWithoutTask()` shim here and `_task-section.ts` is not imported.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the SITUATION or the MEANING picks the form), trap
//   (trapDrill stepped or commonErrors), check (gated control pages).
//
//    1  Même question, autre tenue     7   the register a letter expects
//    2  Trois façons de demander       8   intonation, est-ce que, inversion
//    3  Le petit t                     7   -t- with any vowel-final verb
//    4  Les temps composés             7   as-tu fini, avez-vous mangé
//    5  Le sujet est un nom            8   Votre fille viendra-t-elle ?
//    6  Avec un mot interrogatif       8   où, quand, que, and pourquoi's rule
//    7  La négation et le je           8   Ne viens-tu pas ? Puis-je ?
//    8  La langue des services         8   Pourriez-vous, Serait-il possible
//    9  L'incise                       8   « Je pars », dit-elle
//   10  Peut-être, sans doute, aussi   8   head adverbs in writing
//   11  Écrire à une administration   11   model, plan, interview, TASK, quiz
//
//   TOTAL 88 missions, 11 acts. Corpus: 181 authored rows in eleven blocks
//   plus 15 reused seed rows, 196 item ids in all, 194 of them released act
//   by act through `deckTranche` (the other 2 are named, never released:
//   the Québec « Tu viens-tu ? », which is review-only recognition, and
//   fr.a1.questions.050, which has no flashcard drill). Quiz: 11 rounds of
//   8. Eleven error triggers, eleven drills, five reference sheets reached
//   from 13 missions, eleven terms, 26 studio briefs. Chapter artwork:
//   `inversion-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « L'inversion ne change pas le sens. Elle change la tenue. »
//   EN: Inversion does not change the meaning. It changes the outfit.
//
//   ONE METAPHOR, THE SAME SENTENCE IN TWO OUTFITS. « Tu viens ? » and
//   « Viens-tu ? » ask the same thing; one wears jeans, the other the
//   jacket a letter, a counter or an interview expects. It is NOT « more
//   polite »: politeness is b1.09's and lives in vous and the conditionnel.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    inversion as a register choice; the -t- with any vowel-final
//           verb (va-t-il, parle-t-on, viendra-t-elle); inversion in
//           compound tenses; complex inversion with a noun subject;
//           inversion after question words and pourquoi's noun rule;
//           negative inversion; the je forms (puis-je, dois-je); the
//           written and spoken service formulas; the incise after a direct
//           quotation; inversion after head peut-être, sans doute, à peine
//           and aussi (= donc); the formal email that asks by inversion.
//   QUOTES  a1.19's reframe (« Est-ce que always works. The other two are
//           choices. ») and a1.20's (« Your word, then est-ce que. That
//           always works. »), both imported with a French rendering; the
//           reframes of b1.05, b1.08, b1.09 and b1.18; b1.05's « Resterez-
//           vous pour le dîner ? » and b1.08's « Pourriez-vous m'envoyer le
//           contrat ? », quoted as strings because their rows are not in
//           the seed.
//   LEAVES  the three strategies, the hyphen, a-t-il and the closed
//           être / avoir list to a1.19, cited and never re-taught; the
//           question words to a1.20; indirect questions and reported
//           speech to b1.19 (no « il demande si » anywhere); the
//           subjunctive to b1.14 to b1.16 (the letters close with « Je vous
//           prie d'agréer », never « Veuillez »).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (the recruiter, the clerk and the school say « vous »).
//   Every learner surface that explains something carries English (`en`, or
//   a final « EN: »), and NO ANSWER ever does. Every `say` is French, spoken
//   fr-FR. Theme `langue-soignee`, POSTGRES ONLY (corpus §A.1). A1 citations
//   use the English trail label; b1.* ones are French from the plan.
//
//   NO SPACED « ? » IN ANY BUBBLE (playbook 6.4), in a lesson about
//   questions. The scene carries its questions in narration beats, the
//   choice rows and the break (none of which clip), and the two stories
//   (acts 9 and 10) are the acts whose French is statements, not questions.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. OWNERSHIP. The brief says a1.20 owns simple question inversion. The
//      seed says a1.19 (« Questions oui / non », lesson 22 in A1) does: it
//      teaches the three strategies, the hyphen, a-t-il and the closed
//      twelve-form list. a1.20 teaches the question words with est-ce que.
//      This lesson cites a1.19 for inversion and a1.20 for the words. Right?
//   2. TWO STORIES, not the playbook's three to six. Bubbles cannot carry a
//      spaced « ? » (6.4), and most of this lesson's French is questions.
//      The questions went to readings, listenings, choice rows and cards.
//      Accept two, or should the bubble fix (build sequence Phase 0 item 3)
//      land first?
//   3. a1.19 deliberately never teaches « ai-je » and « suis-je ». This
//      lesson keeps that: act 7 teaches puis-je and dois-je and sends every
//      other je form to est-ce que. « Ai-je bien compris ? » is common in
//      formal writing. Leave it out at B1?
//   4. « À peine est-il arrivé que le téléphone a sonné » is taught with the
//      passé composé, because the plus-que-parfait is not in B1 yet. The
//      textbook form is « À peine était-il arrivé que ». Keep the passé
//      composé version until the plus-que-parfait lands?
//   5. THREE tapTables (acts 2, 6 and 8), one per act, six rows each. The
//      pilot brief allows one per LESSON and every shipped lesson breaks it.
//      Confirm three.
//   6. « aussi » (= donc) with inversion is the one place the reframe is
//      loose: « Aussi a-t-il refusé » does not mean « also ». Act 10 says so
//      out loud. Is that enough, or should aussi move to recognition only?
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.
//   8. The theme `langue-soignee` has three sub-themes and this lesson
//      spends l'inversion and les incises. b1.25 (register) is the obvious
//      next tenant for le registre soutenu. Confirm.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  EMAIL_TEXT, EMAIL_INVERSIONS, GRILLE_TEXT, ECOLE_TEXT, SERVICE_TEXT, RECIT_TEXT, RECIT_INCISES,
  MODELE_TEXT, MODELE_MOVES,
  A119_REFRAME, A120_REFRAME, A119_REFRAME_FR, A120_REFRAME_FR,
  B105_REFRAME, B108_REFRAME, B109_REFRAME, B118_REFRAME, B105_INVERSION, B108_INVERSION,
  YESNO_UNIT, QWORDS_UNIT, FUTUR_UNIT, CONDITIONNEL_UNIT, POLITESSE_UNIT, PASSIF_UNIT,
  YESNO_REF, QWORDS_REF, FUTUR_REF, CONDITIONNEL_REF, POLITESSE_REF, PASSIF_REF, NEXT_REF,
} from './inversion-corpus.ts';
import { INVERSION_TERMS } from './inversion-terms.ts';

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

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.21: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.21: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section (the density
 *  validator requires brackets in a section and refuses them in a row). */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.21: no respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a situation or a quotation, with no corpus row. */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — MÊME QUESTION, AUTRE TENUE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NOBODY IS WRONG: the learner's question is correct French and the
 *  register is off, which is the only failure this lesson can open on. A
 *  learner who has a1.19 can already BUILD « Pouvez-vous »; what they do not
 *  yet do is reach for it when a letter asks for it. The questions live in
 *  narration, the choice rows and the break: NO « ? » IN ANY BUBBLE. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La réponse à la bibliothèque',
  frSub: 'Un courriel de candidature',
  setting: { place: 'Un café près du métro Mont-Royal', city: 'Montréal', time: '18 h 20', ambience: 'un ordinateur portable ouvert, deux tasses, la pluie sur la vitrine' },
  beats: [
    {
      kind: 'narration',
      text: "Tu as postulé à la bibliothèque du quartier, et la responsable t'a répondu. Tu écris ta réponse dans un café. Nadia, ton amie, travaille aux ressources humaines. Elle lit par-dessus ton épaule.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Ta première question, sur l'écran : « Est-ce que vous pouvez me confirmer la date de l'entretien ? »",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: 'Ta phrase est juste. Elle est habillée pour le comptoir, pas pour une lettre.',
      en: 'Your sentence is correct. It is dressed for the counter, not for a letter.',
      respell: '[ta FRAZ eh ZHÜST ehl eh-ta-bee-YAY poor luh kohⁿ-TWAR pa poor ün LEHTR]',
      stage: "Elle ne corrige rien. Elle parle de la tenue, pas de la grammaire.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Mais est-ce que marche partout. On me l’a appris dès le début.',
      en: 'But est-ce que works everywhere. I was taught that from the start.',
      respell: '[meh ehs-kuh MARSH par-TOO ohⁿ muh la a-PREE deh luh day-BÜ]',
      stage: "Tu as raison, et l'A1 le disait déjà : est-ce que n'est jamais faux.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: 'Partout, oui. Mais la responsable lit trente candidatures ce soir.',
      en: 'Everywhere, yes. But the manager is reading thirty applications tonight.',
      respell: '[par-TOO WEE meh la rehs-pohⁿ-SABL lee trahⁿt kahⁿ-dee-da-TÜR suh SWAR]',
      stage: 'Trente courriels, et chacun porte une tenue.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle première question porte la tenue d’une candidature ?',
      size: 'lg',
      options: [
        { fr: src(E(1000)).fr, respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1001)).fr, respell: rsOf(E(1001)), en: src(E(1001)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Nadia hoche la tête : « Là, tu écris comme quelqu'un qui connaît le poste. » La question n'a pas changé. Sa tenue, oui.",
        breaks: "Nadia sourit : « Ça passe, mais ça sonne comme un appel au comptoir. » La responsable comprendra, et elle notera le ton.",
      },
    },
    {
      kind: 'break',
      heading: 'Juste, et en jean',
      body: "Ta phrase était correcte : est-ce que n'est jamais une faute. Mais un courriel de candidature attend une autre tenue : le verbe, un trait d'union, puis vous. EN: Your sentence was correct; an application email expects inversion.",
      wrong: {
        fr: src(E(1000)).fr,
        ipa: ipaOf(E(1000)),
        respell: rsOf(E(1000)),
        en: src(E(1000)).en,
      },
      right: {
        fr: src(E(1001)).fr,
        ipa: ipaOf(E(1001)),
        respell: rsOf(E(1001)),
        en: src(E(1001)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon ouvre la liste de l'A1 : le petit t partout, les temps composés, les noms, les mots interrogatifs, la négation, et deux inversions qui ne posent aucune question.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'trois'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Choisir la bonne tenue', s: 'Actes 1 et 2 : l’oral, l’écrit et le guichet' },
    { t: 'Construire toutes les inversions', s: 'Actes 3 à 6 : le petit t, les temps composés, les noms, les mots interrogatifs' },
    { t: 'Éviter les deux pièges', s: 'Acte 7 : la négation, et puis-je' },
    { t: 'Écrire comme une lettre', s: 'Actes 8 à 11 : les formules, l’incise, peut-être, et ton courriel' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the library's own email, where five questions are asked
 *  and every one of them is an inversion. */
const A1_LETTRE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lettre',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de la bibliothèque',
  frSub: 'Lis, et compte les questions',
  text: EMAIL_TEXT,
  glossary: [
    { word: 'candidature', en: 'job application', note: 'Le dossier que tu envoies pour avoir un poste.' },
    { word: "aide-bibliothécaire", en: 'library assistant', note: 'La personne qui aide au prêt et au rangement des livres.' },
    { word: 'fauteuil roulant', en: 'wheelchair', note: 'Un siège avec des roues pour se déplacer.' },
    { word: 'maison de la culture', en: 'community arts centre', note: "À Montréal, un lieu public avec une bibliothèque, des spectacles et des ateliers." },
    { word: 'à votre disposition', en: 'at your service', note: 'Prêts à vous aider. Une formule de lettre. EN: a letter formula.' },
  ],
  questions: [
    { q: 'Combien de questions la responsable pose-t-elle, et sous quelle forme ?', a: `Cinq, et toutes par inversion : ${EMAIL_INVERSIONS.join(', ')}. Aucune avec est-ce que.` },
    { q: 'Pourquoi n’écrit-elle pas « Vous êtes disponible lundi ? »', a: "C'est une lettre officielle. L'intonation vit à l'oral : à l'écrit, on ne l'entend pas." },
    { q: 'Dans « Faut-il prévoir un accès », quel est le sujet ?', a: "il, le il de il faut. L'inversion marche avec lui aussi : faut-il." },
    { q: 'Si tu posais ces questions à un ami au téléphone, que changerais-tu ?', a: 'La tenue seulement : tu es disponible lundi ? tu connais la bibliothèque ? Le sens resterait le même.' },
  ],
  audio: REC('rec-b1-21-lettre'),
  say: REFRAME,
  terms: ['tenue', 'formule'],
};

/** BUILD, on the text just read: sort by the outfit. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'La veste ou le jean',
  groups: [
    grp('La tenue d’une lettre', [
      it(E(1004), 'la première question du courriel'),
      it(E(1008), 'une demande polie, par écrit'),
      it(E(1011), 'une question de politesse'),
      it('fr.a1.questions.328', 'déjà connue, à un guichet'),
    ], chk(
      'Où est le pronom dans ces quatre questions ?',
      ['après le verbe, avec un trait d’union', 'devant le verbe, comme d’habitude'], 0,
      "Le verbe passe devant, et le trait d'union le colle au pronom. EN: the verb comes first, joined to the pronoun by a hyphen.")),
    grp('La tenue d’une conversation', [
      it(E(1006), 'à ton amie'),
      it(E(1009), 'au téléphone, entre collègues'),
      it(E(1013), 'à un voisin'),
      it(E(1007), 'est-ce que, partout'),
    ], chk(
      'Ces quatre questions sont-elles fausses ?',
      ['Oui, il manque l’inversion.', 'Non, elles sont justes pour parler.'], 1,
      "Elles sont justes. Elles portent simplement la tenue de l'oral. EN: they are right, in spoken dress.")),
    ctl('La phrase du milieu', '« Comment allez-vous ? » Où l’entends-tu ?',
      ['seulement dans une lettre', 'jamais', 'à un guichet, tous les jours'], 2,
      "Quelques inversions vivent à l'oral : ce sont des formules. EN: a few inversions are everyday spoken formulas."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'trois'],
};

/** NAME, gently: the same question in three outfits, no rule yet. */
const A1_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-paires',
  layer: 'core',
  title: 'La même question, trois tenues',
  examples: [
    ex(E(1002), "L'intonation : la voix monte, et rien ne bouge."),
    ex(E(1000), 'Est-ce que : trois mots devant, et c’est juste partout.'),
    ex(E(1001), "L'inversion : le verbe, puis vous. La tenue d'une lettre."),
    ex(E(1006), "À une amie, l'intonation suffit."),
    ex(E(1004), 'À une responsable, par écrit, le verbe passe devant.'),
    ex('fr.a1.salutations.015', 'Une inversion figée, dite à voix haute tous les jours.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'trois'],
};

/** CHOOSE: where the wrong outfit costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Tu réponds par écrit à une responsable du recrutement', fr: src(E(1001)).fr, en: src(E(1001)).en },
    { situation: 'Tu appelles l’accueil pour la même information', fr: "Est-ce que vous pouvez me confirmer l'heure ?", en: 'Can you confirm the time?' },
    { situation: 'Tu écris à ton amie pour le même rendez-vous', fr: 'Tu peux me dire l’heure ?', en: 'Can you tell me the time?' },
    { situation: 'Tu remplis le formulaire de contact de la Ville', fr: src(E(1005)).fr, en: src(E(1005)).en },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'formule'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', '« Viens-tu ? » et « Tu viens ? » demandent-ils la même chose ?',
    ['Oui, exactement.', 'Non, le premier insiste.'], 0,
    "Même question, même réponse attendue. EN: same question, same answer expected."),
  ctl('La tenue', 'Dans un courriel de candidature, quelle forme choisis-tu ?',
    ['l’intonation', 'est-ce que', 'l’inversion'], 2,
    "Est-ce que passerait ; l'inversion est la tenue attendue. EN: est-ce que would pass; inversion is expected."),
  ctl('La faute', 'Est-ce que est-il une faute dans une lettre ?',
    ['Oui, toujours.', 'Non, jamais.'], 1,
    "Jamais faux, seulement moins habillé. EN: never wrong, just less dressed up."),
], ['tenue', 'trois']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Même question, autre tenue',
    opener: {
      line: "La même question peut porter un jean ou une veste : ici tu apprends à voir la différence. EN: The same question can wear jeans or a jacket: here you learn to see the difference.",
      imageRef: 'lessons/inversion/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les trois formes de question, et tu sais laquelle une lettre attend. EN: You can tell the three question forms apart and know which one a letter expects.",
    estScreens: 24, restPoints: ['a1-lettre'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LETTRE, A1_REPERER, A1_PAIRES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — TROIS FAÇONS DE DEMANDER
 *
 *  a1.19 built the three forms. This act is only about WHEN: the same
 *  question heard in three places, and the Québec « -tu » as recognition.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: the same two questions in three outfits, plus one Québec
 *  line. `hideLines` because the questions are about what the ear caught. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Trois tenues pour une question',
  frSub: 'Écoute comment elle est faite',
  lines: [
    ln(E(1016)), ln(E(1017)), ln(E(1018)),
    ln(E(1019)), ln(E(1020)), ln(E(1021)),
    ln(E(1027)), ln(E(1028)), ln(E(1026)),
  ],
  questions: [
    { q: 'Première phrase : comment la question est-elle faite ?', opts: ['la voix monte à la fin', 'le verbe passe devant'], correct: 0, why: "« Tu viens ce soir ? » : rien ne bouge, la voix monte. EN: nothing moves; the voice rises." },
    { q: 'Troisième phrase : qu’entends-tu en premier ?', opts: ['le pronom tu', 'le verbe'], correct: 1, why: "« Viens-tu » : le verbe d'abord. EN: the verb first." },
    { q: 'Les trois premières phrases demandent-elles la même chose ?', opts: ['Oui, exactement', 'Non, la dernière est plus forte'], correct: 0, why: "Même sens, trois tenues. EN: same meaning, three outfits." },
    { q: 'Cinquième phrase : est-ce que change-t-il l’ordre des mots ?', opts: ['Oui', 'Non, il s’ajoute devant'], correct: 1, why: "« Est-ce que vous partez » : l'ordre normal suit. EN: normal order follows." },
    { q: 'Dernière phrase : qu’entends-tu deux fois ?', opts: ['tu', 'avec'], correct: 0, why: "« Tu viens-tu » : le -tu du Québec, à l'oral. Tu le reconnais, tu n'as pas à le dire. EN: Québec spoken -tu, for recognition." },
  ],
  audio: REC('rec-b1-21-trois-ecoute'),
  say: REFRAME,
  terms: ['trois', 'tenue'],
};

/** NAME: three forms, one meaning, and the two neighbours that already said so. */
const A2_TROIS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-trois',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-trois',
  title: 'Trois formes, un seul sens',
  frSub: 'Ce qui change, c’est la tenue',
  hint: 'Quatre cartes. Regarde ce qui ne change jamais.',
  audio: REC('rec-b1-21-trois'),
  say: REFRAME,
  terms: ['trois', 'tenue'],
  cards: [
    {
      head: 'La même réponse attendue', label: 'la question',
      fr: 'tu viens · est-ce que tu viens · viens-tu',
      sub: '[tü VYEHⁿ · ehs-kuh tü VYEHⁿ · vyehⁿ-TÜ]',
      body: "Oui ou non : la réponse est la même dans les trois cas. Seule la situation change. EN: the answer is the same in all three; only the situation changes.",
    },
    {
      head: "Ce que l'A1 t'a donné", label: Cap(YESNO_REF),
      fr: 'est-ce que',
      sub: '[ehs-KUH]',
      body: `« ${A119_REFRAME} » En français : « ${A119_REFRAME_FR} » Cette leçon te dit quand faire le choix. EN: this lesson says when to make the choice.`,
    },
    {
      head: 'Chaque forme a sa maison', label: 'le registre',
      fr: "l'oral · partout · l'écrit soigné",
      sub: '[lo-RAL · par-TOO · lay-KREE swa-NYAY]',
      body: "L'intonation vit à l'oral, est-ce que va partout, et l'inversion porte la veste des lettres et des guichets. EN: speech, everywhere, careful writing.",
    },
    {
      head: 'Comme le passif', label: Cap(PASSIF_REF),
      fr: 'juste partout, naturel ailleurs',
      sub: '[zhüst par-TOO na-tü-REHL a-YUHR]',
      body: `« ${B118_REFRAME} » Même idée : l'inversion est correcte partout, et naturelle surtout à l'écrit. EN: like the passive, correct everywhere, natural mostly in writing.`,
    },
  ],
};

/** BUILD: the three forms, side by side, for tu and for vous. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois tenues pour tu et pour vous',
  groups: [
    grp('Avec tu', [
      it(E(1016), 'la voix monte'),
      it(E(1017), 'trois mots devant'),
      it(E(1018), 'le verbe devant'),
      it(E(1029), 'une autre, en inversion'),
    ], chk(
      'Dans « Viens-tu ce soir ? », où est le pronom ?',
      ['avant le verbe', 'après le verbe'], 1,
      "Le verbe passe devant, relié par un trait d'union. EN: the verb comes first, joined by a hyphen.")),
    grp('Avec vous', [
      it(E(1019), 'à l’oral'),
      it(E(1020), 'partout'),
      it(E(1021), 'dans une lettre'),
      it(E(1023), 'la question la plus connue'),
    ], chk(
      'Est-ce que change-t-il l’ordre des mots ?',
      ['Non, il s’ajoute devant, et c’est tout.', 'Oui, comme l’inversion.'], 0,
      "Est-ce que vous partez : l'ordre normal suit. EN: normal order follows est-ce que.")),
    ctl('Le trait d’union', 'Dans « Partez-vous demain ? », que relie le trait d’union ?',
      ['le pronom et demain', 'le verbe et le pronom', 'rien, il décore'], 1,
      "Il colle le pronom au verbe, et il est obligatoire à l'écrit. EN: it ties the pronoun to the verb."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trois'],
};

/** NAME, as a lookup: six situations and the form each one wears. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-trois',
  title: 'Six situations, six tenues',
  cols: ['Situation', 'Forme', 'Exemple'],
  rows: [
    { cells: ['un ami, au téléphone', 'intonation', 'Tu viens ?'], say: src(E(1016)).fr,
      detail: { title: "L'intonation", body: "La voix monte à la fin et rien ne bouge. La forme la plus fréquente à l'oral. EN: the commonest spoken form.", say: src(E(1019)).fr } },
    { cells: ['un collègue, au bureau', 'est-ce que', 'Est-ce que tu viens ?'], say: src(E(1017)).fr,
      detail: { title: 'Est-ce que', body: "Trois mots devant la phrase, et l'ordre reste le même. Jamais faux. EN: three words in front; never wrong.", say: src(E(1031)).fr } },
    { cells: ['un inconnu, dans la rue', 'intonation, avec vous', 'Vous partez demain ?'], say: src(E(1019)).fr,
      detail: { title: 'Poli sans inversion', body: "La politesse vient de vous, pas de l'inversion. Vous partez demain ? est très poli. EN: politeness comes from vous.", say: src(E(1027)).fr } },
    { cells: ['une lettre officielle', 'inversion', 'Partez-vous demain ?'], say: src(E(1021)).fr,
      detail: { title: "L'inversion", body: "Le verbe, un trait d'union, le pronom. La tenue attendue d'une lettre. EN: the expected outfit of a letter.", say: src(E(1004)).fr } },
    { cells: ['un guichet, une formule', 'inversion figée', 'Comment allez-vous ?'], say: src('fr.a1.salutations.015').fr,
      detail: { title: 'Les formules', body: "Quelques inversions se disent à voix haute tous les jours. Ce sont des formules. EN: a few inversions are everyday spoken formulas.", say: src(E(1023)).fr } },
    { cells: ['une amie, à Québec', 'tu ... -tu', 'Tu viens-tu ?'], say: src(E(1026)).fr,
      detail: { title: 'Le -tu du Québec', body: "À l'oral québécois, on ajoute souvent -tu après le verbe. Tu le reconnais ; tu n'as pas à le dire. EN: Québec speech adds -tu; recognise it only.", say: src(E(1026)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trois', 'tenue'],
};

/** CHOOSE: the situation picks the outfit, never the verb. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La situation choisit',
  groups: [
    grp('Une question, quatre destinataires', [
      free('Tu écris à ton frère.', 'You are writing to your brother.', 'Tu prends le train ?'),
      free('Tu demandes à une collègue.', 'You are asking a colleague.', 'Est-ce que tu prends le train ?'),
      free('Tu écris à l’agence de voyages.', 'You are writing to the travel agency.', 'la tenue de la lettre'),
      it(E(1032), 'la version de la lettre'),
    ], chk(
      'Qu’est-ce qui a changé entre ces quatre questions ?',
      ['le sens', 'la réponse attendue', 'le destinataire'], 2,
      "Le sens ne bouge pas. C'est à qui tu écris qui choisit. EN: who you are writing to decides.")),
    grp('La lettre à la propriétaire', [
      it(E(1024), 'une question de goût'),
      it(E(1028), 'une question de politesse'),
      it(E(1030), 'un choix entre deux'),
      it('fr.a1.questions.362', 'la liste de l’A1, déjà connue'),
    ], chk(
      'Pourrais-tu dire ces questions à voix haute ?',
      ['Oui, elles sont justes, un peu soignées.', 'Non, elles sont fausses à l’oral.'], 0,
      "Correctes partout, et plus habillées que l'oral de tous les jours. EN: correct anywhere, just dressier than everyday speech.")),
    ctl('Le test', 'Tu hésites entre les trois formes. Que regardes-tu ?',
      ['le verbe', 'la longueur de la question', 'où va ta phrase'], 2,
      "Une lettre, un guichet, un ami : la destination décide. EN: the destination decides."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trois', 'tenue'],
};

/** TRAP: four reasonable ways to mix the outfits. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre tenues mélangées',
  errors: [
    {
      wrong: 'Est-ce que viens-tu ce soir ?',
      right: src(E(1017)).fr,
      why: "Normal : tu veux être soigné deux fois. Mais est-ce que garde l'ordre normal, et on ne mélange jamais les deux. EN: never combine est-ce que with inversion.",
    },
    {
      wrong: 'Partez vous demain ?',
      right: src(E(1021)).fr,
      why: "À l'oral, le trait d'union ne s'entend pas, donc on l'oublie. À l'écrit, il est obligatoire. EN: the hyphen is silent and required in writing.",
    },
    {
      wrong: 'Tu viens-tu ce soir ?',
      right: src(E(1018)).fr,
      why: "Normal si tu vis à Québec : tu l'entends partout. Dans une lettre, garde un seul tu, après le verbe. EN: Québec speech; in writing keep one tu, after the verb.",
    },
    {
      wrong: 'Est-ce que vous parlez-vous français ?',
      right: 'Est-ce que vous parlez français ?',
      why: "Tu as appris Parlez-vous français par cœur, et il revient tout seul. Avec est-ce que, un seul vous, devant. EN: with est-ce que, one vous, in front.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trois'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris la question avec son trait d’union',
  frSub: 'Quatre questions en inversion',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['trois'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le mélange', 'Peux-tu mettre est-ce que ET l’inversion dans la même question ?',
    ['Non, jamais.', 'Oui, pour être très poli.'], 0,
    "Une tenue à la fois. EN: one outfit at a time."),
  ctl('La politesse', '« Vous partez demain ? » est-il impoli ?',
    ['Oui, il manque l’inversion.', 'Non, vous suffit.'], 1,
    "La politesse vient de vous. L'inversion dit la situation. EN: vous carries the politeness."),
  ctl('Le Québec', '« Tu viens-tu ? » : que fais-tu de ce -tu ?',
    ['tu l’écris dans tes lettres', 'tu le reconnais à l’oral', 'tu le corriges chez les autres'], 1,
    "C'est de l'oral québécois, très courant. Reconnais-le, sans l'écrire. EN: recognise it; do not write it."),
], ['trois', 'tenue']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Trois façons de demander',
    opener: {
      line: "Tu connais les trois formes depuis l'A1 : ici tu apprends où chacune va. EN: You have known the three forms since A1: here you learn where each one goes.",
      imageRef: 'lessons/inversion/act02.jpg',
    },
    sections: [],
    milestone: "Tu choisis la forme de ta question d'après la situation, jamais d'après le verbe. EN: You pick your question form by the situation, never by the verb.",
    estScreens: 34, restPoints: ['a2-tableau'],
  },
  sections: [A2_ECOUTE, A2_TROIS, A2_CONSTRUIRE, A2_TABLEAU, A2_CHOISIR, A2_ERREURS, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE PETIT T
 *
 *  a1.19 gave the -t- twice, as a-t-il and a-t-elle inside a closed list.
 *  This act opens it: ANY verb that ends in a vowel, in any tense, before
 *  il, elle or on.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: the t is heard, and so is the d that sounds like one. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Entends-tu le t',
  frSub: 'Neuf questions, et un son qui revient',
  lines: [
    ln(E(1035)), ln(E(1036)), ln(E(1037)), ln(E(1039)), ln(E(1041)),
    ln(E(1042)), ln(E(1046)), ln(E(1040)), ln(E(1050)),
  ],
  questions: [
    { q: 'Première phrase : qu’entends-tu entre va et il ?', opts: ['rien', 'un t'], correct: 1, why: "« Va-t-il » : le t sépare deux voyelles. EN: the t separates two vowels." },
    { q: 'Troisième phrase : de qui parle-t-on ?', opts: ['des gens en général', 'd’une seule personne'], correct: 0, why: "« Parle-t-on » : on, les gens de ce bureau. EN: on, people in general." },
    { q: 'Cinquième phrase : entends-tu un t ?', opts: ['Oui, et il est écrit une fois', 'Non'], correct: 0, why: "« Est-elle » : le t de est se prononce, et on n'en ajoute pas. EN: est already has its t." },
    { q: 'Sixième phrase : le d de prend, comment se dit-il ?', opts: ['comme un d', 'comme un t'], correct: 1, why: "« Prend-il » se dit prahⁿ-TEEL. Le d fait déjà le pont. EN: the d sounds like a t." },
    { q: 'Septième phrase : quel temps entends-tu ?', opts: ['le futur', 'le présent'], correct: 0, why: "« Arrivera-t-il » : le petit t marche aussi au futur. EN: the t works in the future too." },
  ],
  audio: REC('rec-b1-21-t-ecoute'),
  say: REFRAME,
  terms: ['petitT'],
};

/** NAME: the rule, opened from a1.19's two forms to every verb. */
const A3_PONT: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-pont',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-t',
  title: 'Un pont entre deux voyelles',
  frSub: 'Le petit t, pour tous les verbes',
  hint: 'Quatre cartes. Regarde la dernière lettre du verbe.',
  audio: REC('rec-b1-21-pont'),
  say: REFRAME,
  terms: ['petitT'],
  cards: [
    {
      head: "Ce que l'A1 t'a montré", label: Cap(YESNO_REF),
      fr: src('fr.a1.questions.359').fr,
      sub: '[a-TEEL FEHⁿ]',
      body: "Tu connais a-t-il et a-t-elle. Le t n'y veut rien dire : il empêche deux voyelles de se toucher. EN: the t only keeps two vowels apart.",
    },
    {
      head: 'La même règle, pour tous les verbes', label: 'voyelle + il, elle, on',
      fr: 'va-t-il · parle-t-elle · parle-t-on',
      sub: '[va-TEEL · parl-TEHL · parl-TOHⁿ]',
      body: "Le verbe finit par une voyelle écrite, le pronom commence par une voyelle : tu mets -t-. EN: vowel-final verb, vowel-initial pronoun: add -t-.",
    },
    {
      head: 'À tous les temps', label: Cap(FUTUR_REF),
      fr: 'viendra-t-elle · arrivera-t-il',
      sub: '[vyehⁿ-dra-TEHL · a-reev-ra-TEEL]',
      body: `Le futur finit par a à il et elle, donc le t revient. ${Cap(FUTUR_REF)} demandait déjà : « ${B105_INVERSION} » EN: the future ends in a, so the t comes back.`,
    },
    {
      head: 'Pas de t en plus', label: 't ou d déjà là',
      fr: 'est-elle · prend-il · fait-elle',
      sub: '[eh-TEHL · prahⁿ-TEEL · feh-TEHL]',
      body: "Le verbe finit déjà par t ou d, et ce son fait le pont. Tu n'ajoutes rien. EN: a final t or d already does the job.",
    },
  ],
};

/** BUILD: add the t where it belongs. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Mets le pont',
  groups: [
    grp('Une voyelle, puis il, elle ou on', [
      it(E(1035), 'va : un a'),
      it(E(1036), 'parle : un e'),
      it(E(1045), 'mange : un e, avec on'),
      it(E(1048), 'travaille : un e'),
    ], chk(
      'Pourquoi ces quatre verbes prennent-ils un t ?',
      ['parce qu’ils sont au présent', 'parce qu’ils finissent par une voyelle'], 1,
      "Le temps ne compte pas : seule la dernière lettre compte. EN: only the last letter matters.")),
    grp('Au futur, et avec y', [
      it(E(1039), 'viendra : un a'),
      it(E(1046), 'arrivera : un a'),
      it(E(1040), 'y a-t-il : la question du quotidien'),
      it('fr.a1.au-restaurant.186', 'déjà vue, au restaurant'),
    ], chk(
      'Le futur a-t-il besoin du petit t à il et elle ?',
      ['Oui, toujours.', 'Non, jamais.'], 0,
      "Il finit toujours par a : viendra, arrivera, sera. EN: it always ends in a."),
    ),
    ctl('Le son', 'Le petit t se prononce-t-il ?',
      ['non, il est muet', 'oui, il commence la syllabe suivante', 'seulement au futur'], 1,
      "va-TEEL : le t ouvre la syllabe de il. EN: the t starts the next syllable."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitT'],
};

/** NAME again: t or no t, on real rows. */
const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  sheetId: 'sheet-t',
  title: 'Avec t, sans t',
  examples: [
    ex(E(1037), 'parle finit par e : le t fait le pont vers on.'),
    ex(E(1038), 'a-t-il : la forme que tu connais depuis l’A1.'),
    ex(E(1050), 'commence : un e, donc un t.'),
    ex(E(1041), 'est finit déjà par t : rien à ajouter.'),
    ex(E(1043), 'fait finit par t : rien à ajouter.'),
    ex(E(1047), 'répond finit par d, qui se dit t : rien à ajouter.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitT'],
};

/** CHOOSE: the ending of the verb decides, not the tense or the person. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un t, ou pas',
  groups: [
    grp('Regarde la dernière lettre', [
      it(E(1042), 'prend : un d'),
      it(E(1043), 'fait : un t'),
      it(E(1036), 'parle : un e'),
      it(E(1047), 'répond : un d'),
    ], chk(
      'Lequel de ces quatre verbes a besoin d’un t ajouté ?',
      ['prend', 'parle', 'fait'], 1,
      "Seul parle finit par une voyelle. EN: only parle ends in a vowel.")),
    grp('Et avec je, tu, nous, vous', [
      it(E(1018), 'viens-tu : pas de t'),
      it(E(1021), 'partez-vous : pas de t'),
      it('fr.a1.questions.352', 'es-tu : pas de t'),
      it(E(1049), 'y a-t-il : le t revient avec il'),
    ], chk(
      'Le petit t arrive-t-il devant tu ou vous ?',
      ['Oui, parfois.', 'Non, seulement devant il, elle, on.'], 1,
      "Tu et vous commencent par une consonne : pas de choc. EN: tu and vous start with a consonant.")),
    ctl('Le cas difficile', '« Commence-... elle à neuf heures ? » Que mets-tu ?',
      ['-t-', 'rien', 'un s'], 0,
      "commence finit par e : Commence-t-elle. EN: a final e needs the t."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitT'],
};

/** TRAP, stepped: the t forgotten, and the t added where the verb has one. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le t oublié, le t en trop',
  rule: {
    title: 'Une voyelle écrite, puis il, elle ou on',
    body: "Le t arrive seulement quand le verbe finit par une voyelle ÉCRITE. Si le verbe finit par t ou d, il n'y a rien à ajouter. EN: add -t- only after a written final vowel.",
  },
  cards: [
    { promptLabel: 'le t oublié', promptSound: 'Va-il à la réunion ?', fr: src(E(1035)).fr, ipa: ipaOf(E(1035)), tip: "va finit par a : Va-t-il. EN: va ends in a." },
    { promptLabel: 'le t oublié', promptSound: 'Parle-on français dans ce bureau ?', fr: src(E(1037)).fr, ipa: ipaOf(E(1037)), tip: "Le t marche aussi avec on. EN: on takes the t too." },
    { promptLabel: 'le t en trop', promptSound: 'Est-t-elle à Montréal cette semaine ?', fr: src(E(1041)).fr, ipa: ipaOf(E(1041)), tip: "est a déjà son t. EN: est already has its t." },
    { promptLabel: 'le t en trop', promptSound: 'Prend-t-il le métro ?', fr: src(E(1042)).fr, ipa: ipaOf(E(1042)), tip: "Le d de prend se dit t. EN: the d already sounds like t." },
    { promptLabel: 'le futur sans t', promptSound: 'Viendra-elle demain ?', fr: src(E(1039)).fr, ipa: ipaOf(E(1039)), tip: "Le futur finit par a à elle. EN: the future ends in a." },
    { promptLabel: 'le t mal placé', promptSound: 'Y-t-a-il un stationnement près d’ici ?', fr: src(E(1040)).fr, ipa: ipaOf(E(1040)), tip: "Le t va entre a et il : y a-t-il. EN: the t goes between a and il." },
  ],
  drill: [
    { promptSay: 'Va-... à la réunion ?', opts: ['il', 't-il'], correct: 1 },
    { promptSay: 'Est-... à Montréal cette semaine ?', opts: ['elle', 't-elle'], correct: 0 },
    { promptSay: 'Parle-... français dans ce bureau ?', opts: ['on', 't-on'], correct: 1 },
    { promptSay: 'Prend-... le métro ?', opts: ['il', 't-il'], correct: 0 },
    { promptSay: 'Viendra-... demain ?', opts: ['elle', 't-elle'], correct: 1 },
    { promptSay: 'Fait-... du sport ?', opts: ['t-elle', 'elle'], correct: 1 },
    { promptSay: 'Y ... un stationnement près d’ici ?', opts: ['a-t-il', 't-a-il', 'a-il'], correct: 0 },
    { promptSay: 'Travaille-... le samedi ?', opts: ['il', 't-il'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une voyelle écrite, puis il, elle ou on' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-21-piege-t'),
  say: REFRAME,
  terms: ['petitT'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La règle', 'Quand ajoutes-tu -t- ?',
    ['entre une voyelle et il, elle ou on', 'avant chaque pronom'], 0,
    "Deux voyelles qui se touchent, et c'est tout. EN: two vowels meeting, nothing else."),
  ctl('Le sens', 'Que veut dire le t de « parle-t-on » ?',
    ['on, au pluriel', 'une question polie', 'rien du tout'], 2,
    "C'est un pont pour l'oreille. EN: it is a bridge for the ear."),
  ctl('Le futur', '« Arrivera-t-il à l’heure ? » Le t est-il juste ?',
    ['Non, le futur n’en prend pas.', 'Oui, arrivera finit par a.'], 1,
    "Au futur, il et elle suivent toujours un a. EN: the future always ends in a here."),
], ['petitT']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le petit t',
    opener: {
      line: "A-t-il, tu connais : ici le petit t sort de la liste et va avec tous les verbes. EN: You know a-t-il: here the little t leaves the list and goes with every verb.",
      imageRef: 'lessons/inversion/act03.jpg',
    },
    sections: [],
    milestone: "Tu mets le petit t après toute voyelle écrite, et jamais après un t ou un d. EN: You add the -t- after any written vowel, and never after a t or a d.",
    estScreens: 32, restPoints: ['a3-construire'],
  },
  sections: [A3_ECOUTE, A3_PONT, A3_CONSTRUIRE, A3_EXEMPLES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LES TEMPS COMPOSÉS
 *
 *  a1.19's list was present tense only. Here the auxiliary inverts and the
 *  participle stays behind, which is where the learner's instinct (invert
 *  the MEANING verb) goes wrong.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the recruiter's interview grid, seven compound inversions. */
const A4_GRILLE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-grille',
  layer: 'core',
  questionsInModal: true,
  title: "La grille d'entretien",
  frSub: 'Lis, et regarde où va le pronom',
  text: GRILLE_TEXT,
  glossary: [
    { word: 'grille', en: 'grid, form', note: "Une feuille avec les questions à poser, dans l'ordre." },
    { word: 'logiciel de prêt', en: 'lending software', note: 'Le programme qui enregistre les livres empruntés.' },
    { word: 'animé', en: 'led, ran', note: 'Animer un groupe : le faire jouer, parler, travailler.' },
    { word: 'camp de jour', en: 'day camp', note: "Au Québec, des activités pour les enfants pendant l'été. EN: a summer day camp." },
    { word: 'références', en: 'references', note: 'Les anciens employeurs qui parlent de toi.' },
  ],
  questions: [
    { q: 'Dans « Avez-vous déjà travaillé », où est le pronom ?', a: "Entre l'auxiliaire et le participe : avez, vous, travaillé. C'est l'auxiliaire qui passe devant." },
    { q: 'Et dans « Êtes-vous déjà allé » ?', a: "Même place, avec être : êtes, vous, allé. Le participe reste derrière." },
    { q: 'Pourquoi un t dans « A-t-elle compris » ?', a: "a finit par une voyelle et elle commence par une voyelle. C'est le petit t de l'acte 3." },
    { q: 'Dans « Les références ont-elles été vérifiées », que fait elles ?', a: "Il répète le sujet, les références, après l'auxiliaire. C'est l'acte 5 qui arrive." },
  ],
  audio: REC('rec-b1-21-grille'),
  say: REFRAME,
  terms: ['auxiliaire'],
};

/** NAME: the auxiliary moves, the participle stays. */
const A4_AUXILIAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-auxiliaire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-complexe',
  title: "L'auxiliaire passe devant",
  frSub: 'Le participe reste derrière',
  hint: 'Quatre cartes. Regarde les deux morceaux du verbe.',
  audio: REC('rec-b1-21-auxiliaire'),
  say: REFRAME,
  terms: ['auxiliaire', 'petitT'],
  cards: [
    {
      head: 'Avec avoir', label: 'passé composé',
      fr: 'as-tu fini · avez-vous mangé',
      sub: '[a-tü fee-NEE · a-vay-voo mahⁿ-ZHAY]',
      body: "L'auxiliaire et le pronom forment le bloc de l'inversion. Le participe attend derrière. EN: the auxiliary and the pronoun invert; the participle waits behind.",
    },
    {
      head: 'Avec être, pareil', label: 'être',
      fr: 'êtes-vous allé · sont-ils arrivés',
      sub: '[eht-voo a-LAY · sohⁿ-tee-la-ree-VAY]',
      body: "Même place pour le pronom. L'accord du participe ne change pas. EN: same place for the pronoun; the agreement does not change.",
    },
    {
      head: 'Le petit t revient', label: 'a-t-il',
      fr: 'a-t-il compris · a-t-elle trouvé',
      sub: '[a-teel kohⁿ-PREE · a-tehl troo-VAY]',
      body: "a finit par une voyelle : à chaque passé composé avec il ou elle, le t de l'acte 3 revient. EN: the -t- of act 3 returns with a.",
    },
    {
      head: 'Un pronom objet reste devant', label: 'l’avez-vous',
      fr: "l'avez-vous lu · vous a-t-on répondu",
      sub: '[la-vay-voo LÜ · voo-za-tohⁿ ray-pohⁿ-DÜ]',
      body: "Le pronom objet reste collé devant l'auxiliaire. Seul le sujet change de place. EN: an object pronoun stays before the auxiliary; only the subject moves.",
    },
  ],
};

/** BUILD: auxiliary, pronoun, participle, three groups. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Auxiliaire, pronom, participe',
  groups: [
    grp('Avec avoir', [
      it(E(1052), 'as, tu, fini'),
      it(E(1053), 'avez, vous, mangé'),
      it(E(1058), 'avez, vous, reçu'),
      it(E(1065), 'la première question de la grille'),
    ], chk(
      'Quel mot passe devant le pronom ?',
      ['le participe', 'l’auxiliaire'], 1,
      "L'auxiliaire, et lui seul. EN: the auxiliary, and only the auxiliary.")),
    grp('Avec être, et avec le t', [
      it(E(1055), 'êtes, vous, allé'),
      it(E(1056), 'sont, ils, arrivés'),
      it(E(1054), 'a-t-il compris'),
      it(E(1059), 'a-t-elle trouvé'),
    ], chk(
      '« Sont-ils arrivés » : le participe s’accorde-t-il encore ?',
      ['Oui, comme d’habitude avec être.', 'Non, l’inversion l’en empêche.'], 0,
      "L'inversion ne touche pas l'accord. EN: inversion does not touch agreement.")),
    ctl('Le test', '« Tu as bien dormi » en inversion, c’est...',
      ['Bien dormi as-tu ?', 'As-tu bien dormi ?', 'As bien dormi-tu ?'], 1,
      "L'auxiliaire, le pronom, puis le reste dans l'ordre. EN: auxiliary, pronoun, then the rest."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

/** Consolidation, as answers. No « EN: » tail anywhere on a back. */
const A4_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-cartes',
  layer: 'core',
  title: 'Huit cartes pour les temps composés',
  cards: [
    { front: 'have you finished your report? (tu)', back: 'as-tu fini ton rapport', say: src(E(1052)).fr },
    { front: 'have you already eaten? (vous)', back: 'avez-vous déjà mangé', say: src(E(1053)).fr },
    { front: 'did he understand the question?', back: 'a-t-il compris la question', say: src(E(1054)).fr },
    { front: 'did they arrive on time?', back: 'sont-ils arrivés à l’heure', say: src(E(1056)).fr },
    { front: 'has she found a flat?', back: 'a-t-elle trouvé un appartement', say: src(E(1059)).fr },
    { front: 'have you read it? (vous)', back: 'l’avez-vous lu', say: src(E(1062)).fr },
    { front: 'has anyone answered you?', back: 'vous a-t-on répondu', say: src(E(1063)).fr },
    { front: 'are you going to sign the contract?', back: 'allez-vous signer le contrat', say: src(E(1061)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

/** CHOOSE: the time of the action picks the verb, and the inversion follows. */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Déjà fait, ou pas encore',
  groups: [
    grp('Le moment de l’action', [
      it(E(1053), 'déjà fait, ou pas'),
      free('Mangez-vous avec nous ?', 'Are you eating with us?', 'maintenant ou bientôt'),
      it(E(1061), 'bientôt : aller, puis l’infinitif'),
      it(E(1060), 'la nuit est finie'),
    ], chk(
      'Dans « Allez-vous signer le contrat ? », quel mot passe devant vous ?',
      ['allez', 'signer'], 0,
      "Le verbe conjugué passe devant ; l'infinitif reste derrière, comme le participe. EN: the conjugated verb inverts; the infinitive stays behind.")),
    grp('Avec un pronom objet', [
      it(E(1062), "l' reste devant avez"),
      it(E(1063), 'vous reste devant a-t-on'),
      it(E(1064), 'un nous qui est sujet'),
      it('fr.a2.heure-et-date.104', 'avec un mot interrogatif devant'),
    ], chk(
      'Dans « L’avez-vous lu ? », qu’est-ce qui a changé de place ?',
      ['le pronom l’', 'le pronom vous'], 1,
      "Seul le sujet vous passe derrière. L' ne bouge pas. EN: only the subject moves."),
    ),
    ctl('La question de la grille', 'Ta question porte sur un logiciel déjà utilisé, ou pas. Tu écris...',
      ['Utilisé avez-vous un logiciel ?', 'Avez utilisé-vous un logiciel ?', 'Avez-vous déjà utilisé un logiciel ?'], 2,
      "Auxiliaire, pronom, adverbe, participe. EN: auxiliary, pronoun, adverb, participle."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

/** TRAP: four reasonable ways to invert the wrong piece. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Le mauvais morceau inversé',
  errors: [
    {
      wrong: 'As fini-tu ton rapport ?',
      right: src(E(1052)).fr,
      why: "Normal : fini porte le sens, donc on veut le coller à tu. Mais c'est l'auxiliaire qui passe devant. EN: the auxiliary inverts, not the participle.",
    },
    {
      wrong: 'Avez mangé-vous déjà ?',
      right: src(E(1053)).fr,
      why: "En anglais, have you eaten garde aussi les deux morceaux séparés. Le pronom va au milieu. EN: the pronoun sits in the middle, as in English.",
    },
    {
      wrong: 'A-il compris la question ?',
      right: src(E(1054)).fr,
      why: "Au présent, tu penses au t ; au passé composé, on l'oublie. a finit toujours par une voyelle. EN: the t is needed in every tense.",
    },
    {
      wrong: 'Avez-vous le lu ?',
      right: src(E(1062)).fr,
      why: "Le pronom objet suit le mouvement dans ta tête. Il reste devant l'auxiliaire. EN: the object pronoun stays before the auxiliary.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire', 'petitT'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le bloc', 'Aux temps composés, quel bloc s’inverse ?',
    ['le participe et le pronom', 'l’auxiliaire et le pronom'], 1,
    "Avez-vous, as-tu, a-t-il. EN: auxiliary plus pronoun."),
  ctl('Le participe', 'Où reste le participe ?',
    ['après le pronom', 'devant l’auxiliaire', 'à la fin de la phrase, toujours'], 0,
    "Juste après le pronom, avec l'adverbe entre les deux si besoin. EN: right after the pronoun."),
  ctl('Le t', '« A-t-elle trouvé un appartement ? » Le t est-il utile ?',
    ['Oui, a finit par une voyelle.', 'Non, c’est un passé composé.'], 0,
    "Le petit t marche à tous les temps. EN: the -t- works in every tense."),
], ['auxiliaire']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Les temps composés',
    opener: {
      line: "Un verbe en deux morceaux, et un seul passe devant : ici tu apprends lequel. EN: A verb in two pieces, and only one goes first: here you learn which.",
      imageRef: 'lessons/inversion/act04.jpg',
    },
    sections: [],
    milestone: "Tu inverses l'auxiliaire au passé composé et au futur proche, et le participe reste à sa place. EN: You invert the auxiliary in compound tenses and the participle stays put.",
    estScreens: 32, restPoints: ['a4-cartes'],
  },
  sections: [A4_GRILLE, A4_AUXILIAIRE, A4_CONSTRUIRE, A4_CARTES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE SUJET EST UN NOM
 *
 *  a1.19's list only had pronouns. With a noun subject French does NOT put
 *  the noun behind the verb: the noun stays first and a pronoun repeats it.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a school letter, where the noun-subject questions are doing a real
 *  job for real parents. */
const A5_ECOLE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-ecole',
  layer: 'core',
  questionsInModal: true,
  title: "La lettre de l'école",
  frSub: 'Lis, et regarde où reste le nom',
  text: ECOLE_TEXT,
  glossary: [
    { word: 'sortie', en: 'school trip', note: "Une journée où la classe va visiter un lieu." },
    { word: 'coupon', en: 'tear-off slip', note: 'Le petit papier à remplir et à rendre.' },
    { word: 'dîner', en: 'lunch', note: "Au Québec, le repas de midi. EN: in Québec, dîner is lunch." },
    { word: 'lunch', en: 'packed lunch', note: "Au Québec, le repas qu'on apporte dans une boîte." },
    { word: 'imperméable', en: 'raincoat', note: 'Un manteau qui protège de la pluie.' },
  ],
  questions: [
    { q: "Comment l'école demande-t-elle si l'enfant vient ?", a: "« Votre enfant participera-t-il à la sortie ? » Le nom reste devant, et il le répète après le verbe." },
    { q: 'Pourquoi « Prend-il un médicament » n’a-t-il pas de nom devant ?', a: "L'enfant vient d'être nommé dans la question d'avant. Le pronom suffit : c'est une inversion simple." },
    { q: "Trouve une question où le sujet n'est pas l'enfant.", a: "« Un parent pourrait-il accompagner le groupe ? » Même forme : le nom, le verbe, puis il." },
    { q: 'Comment un parent dirait-il la même chose dans la cour de l’école ?', a: "Votre enfant a une allergie ? ou Est-ce que votre enfant a une allergie ? Même sens, autre tenue." },
  ],
  audio: REC('rec-b1-21-ecole'),
  say: REFRAME,
  terms: ['sujetNom', 'tenue'],
};

/** NAME: the noun stays, the pronoun repeats it. */
const A5_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-complexe',
  title: 'Le nom reste devant',
  frSub: 'Un pronom le répète',
  hint: 'Quatre cartes. Le nom ne bouge jamais.',
  audio: REC('rec-b1-21-sujet-nom'),
  say: REFRAME,
  terms: ['sujetNom', 'petitT'],
  cards: [
    {
      head: 'Le nom ne passe pas derrière', label: 'le sujet nom',
      fr: src(E(1068)).fr,
      sub: rsOf(E(1068)),
      body: "Votre fille reste en tête. Après le verbe, elle la répète. EN: the noun stays first and a pronoun repeats it after the verb.",
    },
    {
      head: 'Le pronom suit le nom', label: 'il, elle, ils, elles',
      fr: 'le train est-il · les billets sont-ils',
      sub: '[luh TREHⁿ eh-TEEL · lay bee-YEH sohⁿ-TEEL]',
      body: "Le pronom prend le genre et le nombre du nom : le train, il ; les billets, ils. EN: the pronoun matches the noun.",
    },
    {
      head: 'Le petit t revient', label: "l'acte 3",
      fr: 'votre frère parle-t-il · ce bus va-t-il',
      sub: '[votr FREHR parl-TEEL · suh BÜS va-TEEL]',
      body: "Une voyelle, puis il ou elle : le t fait le pont, même avec un nom devant. EN: the -t- works here too.",
    },
    {
      head: 'Aux temps composés', label: "l'auxiliaire",
      fr: src(E(1071)).fr,
      sub: rsOf(E(1071)),
      body: "Le nom, l'auxiliaire, le pronom, puis le participe. Les actes 4 et 5 se rejoignent. EN: noun, auxiliary, pronoun, participle.",
    },
  ],
};

/** BUILD: a noun, a verb, a pronoun. */
const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Un nom, un verbe, un pronom',
  groups: [
    grp('Au présent et au futur', [
      it(E(1068), 'votre fille, puis elle'),
      it(E(1069), 'le train, puis il'),
      it(E(1074), 'le musée, puis il'),
      it(E(1076), 'votre dossier, puis il'),
    ], chk(
      'Dans « Le musée est-il ouvert le lundi ? », que répète il ?',
      ['le lundi', 'le musée'], 1,
      "il répète le sujet, le musée. EN: il repeats the subject.")),
    grp('Au pluriel et au passé', [
      it(E(1071), 'les enfants, puis ils'),
      it(E(1075), 'les billets, puis ils'),
      it(E(1077), 'madame Diallo, puis elle'),
      it(E(1083), 'votre fils, puis il'),
    ], chk(
      '« Les billets sont-ils remboursables ? » Pourquoi ils ?',
      ['les billets est masculin pluriel', 'une question prend toujours ils'], 0,
      "Le pronom copie le genre et le nombre du nom. EN: the pronoun copies the noun.")),
    ctl('Le test', '« Le directeur sera présent » en inversion, c’est...',
      ['Sera le directeur présent ?', 'Sera-t-il le directeur présent ?', 'Le directeur sera-t-il présent ?'], 2,
      "Le nom devant, puis sera-t-il. EN: noun first, then sera-t-il."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujetNom'],
};

/** NAME again, on real rows. */
const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Six noms, six pronoms',
  examples: [
    ex(E(1070), 'votre frère, puis parle-t-il : le t revient.'),
    ex(E(1072), 'la réunion, puis elle : féminin.'),
    ex(E(1078), 'ce bus, puis va-t-il : une voyelle, un t.'),
    ex(E(1079), 'tes parents, puis ils : au pluriel.'),
    ex(E(1080), 'le directeur, puis sera-t-il : au futur.'),
    ex(E(1081), 'ce formulaire, puis doit-il être signé : avec un passif.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujetNom'],
};

/** MEET, by ear: questions about other people, with the noun first. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Des questions sur les autres',
  frSub: 'Écoute qui fait quoi',
  lines: [
    ln(E(1068)), ln(E(1069)), ln(E(1070)), ln(E(1072)), ln(E(1075)),
    ln(E(1077)), ln(E(1079)), ln(E(1082)), ln(E(1083)),
  ],
  questions: [
    { q: 'Première phrase : de la fille de qui parle-t-on ?', opts: ['de la fille de la personne qui parle', 'de la fille de la personne qui écoute'], correct: 1, why: "« Votre fille » : celle de la personne à qui on parle. EN: the listener’s daughter." },
    { q: 'Deuxième phrase : sait-on si le train est parti ?', opts: ['Non, c’est une question', 'Oui, il est parti'], correct: 0, why: "Une question : la personne veut le savoir. EN: it is a question." },
    { q: 'Quatrième phrase : quelle heure est proposée ?', opts: ['dix heures', 'neuf heures'], correct: 1, why: "« commence-t-elle à neuf heures ». EN: nine o'clock." },
    { q: 'Sixième phrase : qui devrait avoir reçu les documents ?', opts: ['madame Diallo', 'les enfants', 'le directeur'], correct: 0, why: "« Madame Diallo a-t-elle reçu » : le nom d'abord. EN: the noun comes first." },
    { q: 'Septième phrase : où habitent les parents ?', opts: ['à Québec', 'à Dakar'], correct: 1, why: "« habitent-ils toujours à Dakar ». EN: in Dakar." },
  ],
  audio: REC('rec-b1-21-nom-ecoute'),
  say: REFRAME,
  terms: ['sujetNom'],
};

/** CHOOSE: the kind of subject decides the shape. */
const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un nom, ou un pronom',
  groups: [
    grp('Regarde le sujet', [
      it(E(1042), 'il : un pronom, inversion simple'),
      it(E(1069), 'le train : un nom, il le répète'),
      it(E(1043), 'elle : un pronom, inversion simple'),
      it(E(1072), 'la réunion : un nom, elle la répète'),
    ], chk(
      'Quand ajoutes-tu un pronom après le verbe ?',
      ['quand le sujet est un nom', 'quand le verbe est au futur'], 0,
      "Un nom sujet ne passe pas derrière : un pronom le fait pour lui. EN: a pronoun does it for the noun.")),
    grp("La lettre de l'école", [
      it(E(1082), 'ta sœur, puis elle'),
      it(E(1076), 'votre dossier, puis il'),
      it(E(1081), 'ce formulaire, puis il'),
      free('Votre enfant a-t-il une allergie ?', 'Does your child have an allergy?', 'dans la lettre'),
    ], chk(
      'Dans ces quatre phrases, le nom sujet est-il derrière le verbe ?',
      ['Oui, toujours.', 'Non, jamais.'], 1,
      "Il reste devant, et le pronom va derrière. EN: the noun stays in front.")),
    ctl('Le prénom', '« Marie vient » en inversion, c’est...',
      ['Marie vient-elle ?', 'Vient Marie ?', 'Vient-elle Marie ?'], 0,
      "Un prénom est un nom : Marie reste devant. EN: a first name is a noun too."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujetNom'],
};

/** TRAP, stepped: the noun put behind the verb, and the pronoun forgotten. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le nom qui passe derrière',
  rule: {
    title: 'Le nom devant, le pronom après',
    body: "En anglais, does your daughter met le verbe devant le nom. En français, le nom ne bouge pas : un pronom se place après le verbe. EN: the noun never goes behind the verb; a pronoun does.",
  },
  cards: [
    { promptLabel: 'le nom derrière', promptSound: 'Viendra votre fille ?', fr: src(E(1068)).fr, ipa: ipaOf(E(1068)), tip: "Votre fille reste devant, elle va après. EN: noun first, pronoun after." },
    { promptLabel: 'le pronom oublié', promptSound: 'Le train est parti-il ?', fr: src(E(1069)).fr, ipa: ipaOf(E(1069)), tip: "Le pronom va juste après l'auxiliaire. EN: the pronoun follows the auxiliary." },
    { promptLabel: 'le t oublié', promptSound: 'Votre frère parle-il anglais ?', fr: src(E(1070)).fr, ipa: ipaOf(E(1070)), tip: "parle finit par e : parle-t-il. EN: add the t." },
    { promptLabel: 'le mauvais pronom', promptSound: 'Les billets sont-elles remboursables ?', fr: src(E(1075)).fr, ipa: ipaOf(E(1075)), tip: "billets est masculin : ils. EN: billets is masculine." },
    { promptLabel: 'le nom coincé', promptSound: 'Est-il le musée ouvert le lundi ?', fr: src(E(1074)).fr, ipa: ipaOf(E(1074)), tip: "Le nom ouvre la phrase. EN: the noun opens the sentence." },
    { promptLabel: 'l’inversion simple', promptSound: 'Est votre dossier complet ?', fr: src(E(1076)).fr, ipa: ipaOf(E(1076)), tip: "Un nom ne s'inverse pas seul. EN: a noun does not invert by itself." },
  ],
  drill: [
    { promptSay: 'Votre fille ... ?', opts: ['viendra-t-elle', 'viendra'], correct: 0 },
    { promptSay: 'Dans une lettre : ... parti ?', opts: ['Est parti le train', 'Le train est-il'], correct: 1 },
    { promptSay: 'Votre frère ... anglais ?', opts: ['parle-il', 'parle-t-il'], correct: 1 },
    { promptSay: 'Les billets ... remboursables ?', opts: ['sont-ils', 'sont-elles'], correct: 0 },
    { promptSay: '... ouvert le lundi ?', opts: ['Le musée est-il', 'Est le musée'], correct: 0 },
    { promptSay: 'Les enfants ... mangé ?', opts: ['ont-elles', 'ont-ils', 'ont'], correct: 1 },
    { promptSay: 'Ce bus ... au centre-ville ?', opts: ['va-il', 'va-t-elle', 'va-t-il'], correct: 2 },
    { promptSay: 'La réunion ... à neuf heures ?', opts: ['commence-t-il', 'commence-t-elle'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le nom devant, le pronom après' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-21-piege-nom'),
  say: REFRAME,
  terms: ['sujetNom', 'petitT'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le nom', 'Avec un nom sujet, où va le nom ?',
    ['derrière le verbe', 'devant le verbe'], 1,
    "Il ne bouge pas. EN: it does not move."),
  ctl('Le pronom', 'Que fait le pronom après le verbe ?',
    ['il répète le nom', 'il remplace le verbe', 'il marque le pluriel'], 0,
    "Il reprend le nom : votre fille, elle. EN: it takes up the noun."),
  ctl('Le t', '« Ce bus va-t-il au centre-ville ? » Le t est-il juste ?',
    ['Non, il y a un nom.', 'Oui, va finit par a.'], 1,
    "Le nom ne change rien au petit t. EN: the noun changes nothing for the t."),
], ['sujetNom']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le sujet est un nom',
    opener: {
      line: "Votre fille viendra-t-elle : le nom reste à sa place, et un pronom le suit. EN: Will your daughter come: the noun stays put, and a pronoun follows it.",
      imageRef: 'lessons/inversion/act05.jpg',
    },
    sections: [],
    milestone: "Tu poses une question soignée sur quelqu'un d'autre, le nom devant et le pronom après. EN: You can ask a careful question about someone else, noun first and pronoun after.",
    estScreens: 38, restPoints: ['a5-exemples', 'a5-choisir'],
  },
  sections: [A5_ECOLE, A5_REGLE, A5_CONSTRUIRE, A5_EXEMPLES, A5_ECOUTE, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — AVEC UN MOT INTERROGATIF
 *
 *  a1.20 gave the words with est-ce que, and that frame stays right. This
 *  act adds the written outfit, and the one rule a1.20 could not give:
 *  after pourquoi, a noun subject never goes behind the verb.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a welcome desk for new arrivals in Brussels. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: "Au bureau d'accueil",
  frSub: 'Bruxelles, les nouveaux arrivants',
  lines: [
    ln(E(1087)), ln(E(1088)), ln(E(1091)), ln(E(1095)), ln(E(1103)),
    ln(E(1097)), ln('fr.a2.symptomes.195'), ln('fr.b1.heure-et-date.005'), ln(E(1089)),
  ],
  questions: [
    { q: 'Première question : que veut savoir l’agente ?', opts: ['quand tu pars', 'où tu vas'], correct: 1, why: "« Où allez-vous ? » : le lieu. EN: the place." },
    { q: 'Troisième question : on te demande...', opts: ['ton métier', 'ton adresse'], correct: 0, why: "« Que faites-vous dans la vie ? » : ton travail. EN: your job." },
    { q: 'Quatrième question : on te demande...', opts: ['ton âge', 'la durée de ton séjour', 'ton nom'], correct: 1, why: "« Combien de temps restez-vous ? ». EN: how long you are staying." },
    { q: 'Septième question : où es-tu sans doute ?', opts: ['à la banque', 'chez le médecin'], correct: 1, why: "« Où avez-vous mal exactement ? ». EN: at the doctor’s." },
    { q: 'Dernière question : de qui parle-t-on ?', opts: ['de Marie', 'de toi'], correct: 0, why: "« Pourquoi Marie part-elle ? » : Marie reste devant. EN: Marie stays in front." },
  ],
  audio: REC('rec-b1-21-accueil-ecoute'),
  say: REFRAME,
  terms: ['motQ'],
};

/** NAME: the word, then the inversion, and pourquoi's rule. */
const A6_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-mots',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le mot, puis le verbe',
  frSub: 'Et la règle de pourquoi',
  hint: 'Quatre cartes. La dernière est une exception.',
  audio: REC('rec-b1-21-mots'),
  say: REFRAME,
  terms: ['motQ', 'sujetNom'],
  cards: [
    {
      head: "Ce que l'A1 t'a donné", label: Cap(QWORDS_REF),
      fr: 'où · quand · comment · que · pourquoi',
      sub: '[OO · KAHⁿ · ko-MAHⁿ · KUH · poor-KWA]',
      body: `« ${A120_REFRAME} » En français : « ${A120_REFRAME_FR} » C'est toujours juste. L'inversion ajoute la tenue. EN: still right; inversion adds the outfit.`,
    },
    {
      head: 'Le mot, puis l’inversion', label: 'avec un pronom',
      fr: 'où allez-vous · que faites-vous',
      sub: '[oo a-lay-VOO · kuh feht-VOO]',
      body: "Le mot ouvre la phrase, puis le verbe passe devant le pronom. Avec que, c'est obligatoire. EN: word, verb, pronoun; with que it is required.",
    },
    {
      head: 'Un nom peut passer derrière', label: 'où, quand, que',
      fr: src(E(1092)).fr,
      sub: rsOf(E(1092)),
      body: "Avec un verbe court et rien après, le nom peut suivre le verbe. Où votre sœur habite-t-elle est juste aussi. EN: with a short verb, the noun may follow it.",
    },
    {
      head: 'Sauf après pourquoi', label: 'pourquoi',
      fr: src(E(1089)).fr,
      sub: rsOf(E(1089)),
      body: "Après pourquoi, le nom reste devant et un pronom le répète. Pourquoi part Marie ne se dit pas. EN: after pourquoi the noun stays in front.",
    },
  ],
};

/** NAME, as a lookup: each word, with a pronoun and with a noun. */
const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-complexe',
  title: 'Six mots, deux sujets',
  cols: ['Mot', 'Avec un pronom', 'Avec un nom'],
  rows: [
    { cells: ['où', 'Où allez-vous ?', 'Où habite votre sœur ?'], say: src(E(1087)).fr,
      detail: { title: 'Où', body: "Avec un nom, deux formes justes : le nom derrière le verbe, ou devant avec un pronom. EN: two correct noun forms.", say: src(E(1093)).fr } },
    { cells: ['quand', 'Quand partez-vous ?', 'Quand votre fils rentre-t-il ?'], say: src(E(1088)).fr,
      detail: { title: 'Quand', body: "Avec un nom, garde le nom devant et répète-le : c'est toujours juste. EN: noun first plus pronoun is always safe.", say: src(E(1101)).fr } },
    { cells: ['comment', 'Comment allez-vous ?', 'Comment votre fils va-t-il ?'], say: src('fr.a1.salutations.015').fr,
      detail: { title: 'Comment', body: "La formule de tous les jours est déjà une inversion. EN: the everyday formula is already an inversion.", say: src(E(1090)).fr } },
    { cells: ['que', 'Que faites-vous ?', 'Que dit le médecin ?'], say: src(E(1091)).fr,
      detail: { title: 'Que', body: "Que demande toujours l'inversion. Avec un nom, le nom passe derrière le verbe, sans pronom. EN: que always inverts; a noun goes after the verb.", say: src(E(1104)).fr } },
    { cells: ['qui (objet)', 'Qui avez-vous rencontré ?', '(rare)'], say: src(E(1097)).fr,
      detail: { title: 'Qui, complément', body: "Quand qui est le complément, le verbe passe devant le sujet. EN: when qui is the object, invert.", say: src(E(1097)).fr } },
    { cells: ['pourquoi', 'Pourquoi partez-vous ?', 'Pourquoi Marie part-elle ?'], say: src(E(1089)).fr,
      detail: { title: 'Pourquoi', body: "Le nom ne passe jamais derrière le verbe. Une seule forme avec un nom. EN: only one noun form.", say: src(E(1098)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motQ', 'sujetNom'],
};

/** BUILD: the word, then the inverted block. */
const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le mot, le verbe, le pronom',
  groups: [
    grp('Avec un pronom', [
      it(E(1087), 'où, puis allez-vous'),
      it(E(1088), 'quand, puis partez-vous'),
      it(E(1095), 'combien de temps, puis restez-vous'),
      it(E(1103), 'où, puis le passé composé'),
    ], chk(
      'Dans « Quand partez-vous ? », qu’est-ce qui suit quand ?',
      ['le pronom', 'le verbe'], 1,
      "Le mot, puis le verbe, puis le pronom. EN: word, verb, pronoun.")),
    grp('Pourquoi, avec un nom', [
      it(E(1089), 'Marie, puis elle'),
      it(E(1098), 'le magasin, puis il'),
      it(E(1102), 'ton frère, puis il'),
      it(E(1090), 'comment marche pareil'),
    ], chk(
      'Après pourquoi, où est le nom sujet ?',
      ['devant le verbe', 'derrière le verbe'], 0,
      "Toujours devant, avec un pronom après. EN: always in front, with a pronoun after.")),
    ctl('Que', '« Vous faites quoi ? » en tenue soignée, c’est...',
      ['Que vous faites ?', 'Quoi faites-vous ?', 'Que faites-vous ?'], 2,
      "Que ouvre la phrase, et l'inversion suit. EN: que, then inversion."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motQ'],
};

/** NAME again: the noun in both places, on real rows. */
const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Le nom derrière, ou devant',
  examples: [
    ex(E(1092), 'où, un verbe court : le nom peut passer derrière.'),
    ex(E(1093), 'la même question, le nom devant et elle après.'),
    ex(E(1096), 'à quelle heure, puis le verbe, puis le nom.'),
    ex(E(1099), 'comment, et le nom derrière le verbe.'),
    ex(E(1100), 'que, puis l’inversion, avec un pronom.'),
    ex('fr.a2.prepositions-essentielles.178', 'depuis quand, puis l’inversion avec tu.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motQ', 'sujetNom'],
};

/** CHOOSE: which noun shape does this word allow? */
const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le mot décide',
  groups: [
    grp('Un nom derrière, ou devant', [
      it(E(1092), 'où : derrière, possible'),
      it(E(1104), 'que : derrière, obligatoire'),
      it(E(1093), 'où : devant, possible aussi'),
      it(E(1098), 'pourquoi : devant, obligatoire'),
    ], chk(
      'Laquelle de ces formes serait fausse ?',
      ['Où habite votre sœur ?', 'Pourquoi part Marie ?', 'Que dit le médecin ?'], 1,
      "Après pourquoi, le nom ne passe jamais derrière. EN: never after pourquoi.")),
    grp('Au guichet, chez le médecin', [
      it(E(1097), 'à un rendez-vous'),
      it('fr.a2.symptomes.195', 'chez le médecin'),
      it('fr.b1.heure-et-date.005', 'avant un examen'),
      it(E(1100), 'en réunion'),
    ], chk(
      'Ces questions pourraient-elles se dire à voix haute ?',
      ['Non, seulement par écrit.', 'Oui, dans un lieu un peu formel.'], 1,
      "Au guichet et chez le médecin, l'inversion reste naturelle. EN: at a desk or a doctor’s, inversion sounds natural.")),
    ctl('Le choix', 'Tu écris : « Pourquoi ... ? » (le magasin est fermé)',
      ['le magasin est-il fermé', 'est fermé le magasin'], 0,
      "Pourquoi le magasin est-il fermé. EN: noun first after pourquoi."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motQ', 'sujetNom'],
};

/** TRAP: four reasonable mistakes with question words. */
const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre mots mal suivis',
  errors: [
    {
      wrong: 'Pourquoi part Marie ?',
      right: src(E(1089)).fr,
      why: "Normal : Où habite votre sœur marche, et tu étends la règle. Pourquoi est l'exception : le nom reste devant. EN: pourquoi is the exception.",
    },
    {
      wrong: 'Que vous faites dans la vie ?',
      right: src(E(1091)).fr,
      why: "À l'oral on dit vous faites quoi, et que semble le même mot. Avec que devant, l'inversion est obligatoire. EN: que at the front requires inversion.",
    },
    {
      wrong: 'Où vous allez ?',
      right: src(E(1087)).fr,
      why: "C'est juste entre amis, à l'oral. Dans une lettre ou à un guichet, l'inversion est la tenue attendue. EN: fine in casual speech, not in a letter.",
    },
    {
      wrong: 'Que le médecin dit-il ?',
      right: src(E(1104)).fr,
      why: "Tu appliques la règle du nom devant, et elle marche presque partout. Avec que, le nom passe derrière, sans pronom. EN: with que, the noun goes after the verb.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motQ', 'sujetNom'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('L’ordre', 'Après un mot interrogatif, que vient ensuite ?',
    ['le verbe, puis le pronom', 'le pronom, puis le verbe'], 0,
    "Où allez-vous. EN: word, verb, pronoun."),
  ctl('Pourquoi', 'Après pourquoi, un nom sujet peut-il passer derrière le verbe ?',
    ['Oui, comme après où.', 'Seulement au futur.', 'Non, jamais.'], 2,
    "Pourquoi Marie part-elle. EN: never after pourquoi."),
  ctl('La forme de l’A1', 'Où est-ce que vous allez ? est-il faux ?',
    ['Oui, dans une lettre.', 'Non, c’est juste partout.'], 1,
    "La forme de l'A1 reste juste. L'inversion change la tenue. EN: still right; inversion changes the outfit."),
], ['motQ']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Avec un mot interrogatif',
    opener: {
      line: "Où, quand, pourquoi : le mot ouvre la question, et ici tu apprends ce qui le suit. EN: Where, when, why: the word opens the question, and here you learn what follows it.",
      imageRef: 'lessons/inversion/act06.jpg',
    },
    sections: [],
    milestone: "Tu inverses après un mot interrogatif, et tu gardes le nom devant après pourquoi. EN: You invert after a question word and keep the noun in front after pourquoi.",
    estScreens: 36, restPoints: ['a6-tableau', 'a6-exemples'],
  },
  sections: [A6_ECOUTE, A6_MOTS, A6_TABLEAU, A6_CONSTRUIRE, A6_EXEMPLES, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LA NÉGATION ET LE JE
 *
 *  Two places where the regular pattern stops: ne ... pas wraps the whole
 *  inverted block, and je barely inverts at all.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a friend's doubts and a counter's offers. */
const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Des doutes et des offres',
  frSub: 'Écoute ne, pas, et je',
  lines: [
    ln(E(1106)), ln(E(1122)), ln(E(1107)), ln(E(1108)), ln(E(1117)),
    ln(E(1119)), ln(E(1110)), ln(E(1113)), ln(E(1114)),
  ],
  questions: [
    { q: 'Première question : que pense la personne ?', opts: ['que tu viens', 'que tu ne viens pas'], correct: 1, why: "« Ne viens-tu pas ? » : elle s'attend à un non. EN: she expects a no." },
    { q: 'Deuxième ligne : la réponse veut dire...', opts: ['oui, je viens', 'non, je ne viens pas'], correct: 0, why: "Si répond oui à une question négative. EN: si means yes here." },
    { q: 'Troisième question : la personne est-elle étonnée ?', opts: ['Non', 'Oui, elle a envoyé un message'], correct: 1, why: "« N'avez-vous pas reçu mon message ? » : elle s'étonne. EN: surprise." },
    { q: 'Septième ligne : qui propose son aide ?', opts: ['la personne qui parle', 'la personne qui écoute'], correct: 0, why: "« Puis-je vous aider ? » : je propose. EN: the speaker offers." },
    { q: 'Huitième ligne : pourquoi est-ce que, et pas l’inversion ?', opts: ['la question est négative', 'c’est une question polie', 'le sujet est je'], correct: 2, why: "Avec je, on prend est-ce que presque toujours. EN: with je, est-ce que." },
  ],
  audio: REC('rec-b1-21-negation-ecoute'),
  say: REFRAME,
  terms: ['negation', 'je'],
};

/** NAME: ne before the block, pas after it. */
const A7_NEGATION: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-negation',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-services',
  title: 'Ne devant, pas derrière',
  frSub: 'Le bloc ne se coupe pas',
  hint: 'Quatre cartes. Le verbe et le pronom restent collés.',
  audio: REC('rec-b1-21-negation'),
  say: REFRAME,
  terms: ['negation'],
  cards: [
    {
      head: 'Autour du bloc', label: 'la négation',
      fr: src(E(1106)).fr,
      sub: rsOf(E(1106)),
      body: "Le verbe et le pronom forment un bloc. Ne se met devant, pas se met après. EN: ne before the block, pas after.",
    },
    {
      head: 'Devant une voyelle', label: "n'",
      fr: src(E(1107)).fr,
      sub: rsOf(E(1107)),
      body: "Ne devient n' devant une voyelle, comme d'habitude. Le bloc ne change pas. EN: ne becomes n' before a vowel.",
    },
    {
      head: 'Avec un nom sujet', label: 'le sujet nom',
      fr: src(E(1117)).fr,
      sub: rsOf(E(1117)),
      body: "Le nom reste devant, puis ne, le bloc et pas. Les actes 5 et 7 se rejoignent. EN: noun first, then ne, the block, pas.",
    },
    {
      head: 'Pour répondre oui', label: Cap(YESNO_REF),
      fr: src(E(1122)).fr,
      sub: rsOf(E(1122)),
      body: "Tu le sais depuis l'A1 : oui après une question positive, si après une question négative. EN: si answers yes to a negative question.",
    },
  ],
};

/** BUILD: the negative block, and the je forms that exist. */
const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ne, le bloc, pas',
  groups: [
    grp('La question négative', [
      it(E(1106), 'ne, viens-tu, pas'),
      it(E(1119), "n', as-tu, pas"),
      it(E(1120), 'ne, parlez-vous, pas'),
      it(E(1118), 'ne, pourriez-vous, pas'),
    ], chk(
      'Où va pas dans ces quatre questions ?',
      ['après le pronom', 'entre le verbe et le pronom'], 0,
      "Pas suit tout le bloc. EN: pas follows the whole block.")),
    grp('Le je qui s’inverse', [
      it(E(1110), 'puis-je, pour proposer'),
      it(E(1111), 'puis-je, pour demander'),
      it(E(1114), 'dois-je, dans une lettre'),
      it('fr.a1.au-restaurant.209', 'déjà vue, au restaurant'),
    ], chk(
      'Quelle forme de pouvoir va avec je dans une inversion ?',
      ['peux', 'puis'], 1,
      "Puis-je. Peux-je n'existe pas. EN: puis-je, never peux-je.")),
    ctl('Le reste du je', '« Est-ce que je parle assez fort ? » Pourquoi pas l’inversion ?',
      ['parle-je ne se dit pas', 'la question est trop longue', 'est-ce que est plus poli'], 0,
      "Avec je, seuls quelques verbes s'inversent. EN: only a few verbs invert with je."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['negation', 'je'],
};

/** NAME: the je forms, and where est-ce que takes over. */
const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  sheetId: 'sheet-services',
  title: 'Le je, en tenue soignée',
  examples: [
    ex(E(1112), 'la règle, en une phrase.'),
    ex(E(1121), 'la seule forme de pouvoir avec je.'),
    ex(E(1114), 'dois-je : juste, dans une lettre.'),
    ex(E(1113), 'est-ce que, pour un je de tous les jours.'),
    ex(E(1115), 'est-ce que, même dans un courriel.'),
    ex(E(1116), 'parle-je ne se dit pas : est-ce que.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['je'],
};

/** CHOOSE: the subject and the question decide the shape. */
const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Puis-je, ou est-ce que je',
  groups: [
    grp('Quatre questions avec je', [
      it(E(1110), 'puis-je'),
      it(E(1113), 'est-ce que je peux'),
      it(E(1114), 'dois-je'),
      it(E(1116), 'est-ce que je parle'),
    ], chk(
      'Laquelle de ces formes serait fausse ?',
      ['Parle-je assez fort ?', 'Puis-je vous aider ?'], 0,
      "Avec je, l'inversion se limite à quelques verbes. EN: only a few verbs invert with je.")),
    grp('Une question négative, une réponse', [
      it(E(1106), 'la question'),
      it(E(1122), 'la réponse oui'),
      it(E(1107), 'une surprise'),
      it(E(1108), 'un retard'),
    ], chk(
      'Tu viens, et on te demande « Ne viens-tu pas ? ». Tu réponds...',
      ['Oui, je viens.', 'Si, je viens.', 'Non, je viens.'], 1,
      "Si contredit la négation. EN: si contradicts the negative.")),
    ctl('Au guichet', 'Tu veux payer par carte. Que dis-tu ?',
      ['Est-ce que je peux payer par carte ?', 'Peux-je payer par carte ?'], 0,
      "Est-ce que je peux, ou puis-je : jamais peux-je. EN: never peux-je."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['je', 'negation'],
};

/** TRAP, stepped: peux-je, parle-je, and the negation cut in two. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Le je et le bloc coupé',
  rule: {
    title: 'Puis-je, et ne autour du bloc',
    body: "Avec je, dis puis-je ou dois-je, et est-ce que pour le reste. À la négation, ne va devant le bloc verbe et pronom, pas derrière. EN: puis-je, dois-je, else est-ce que; ne ... pas wraps the block.",
  },
  cards: [
    { promptLabel: 'peux-je', promptSound: 'Peux-je vous aider ?', fr: src(E(1110)).fr, ipa: ipaOf(E(1110)), tip: "Avec je, pouvoir devient puis. EN: puis-je." },
    { promptLabel: 'parle-je', promptSound: 'Parle-je assez fort ?', fr: src(E(1116)).fr, ipa: ipaOf(E(1116)), tip: "Ce je ne s'inverse pas : est-ce que. EN: use est-ce que." },
    { promptLabel: 'pas mal placé', promptSound: 'Ne viens pas-tu ce soir ?', fr: src(E(1106)).fr, ipa: ipaOf(E(1106)), tip: "Pas suit le bloc entier. EN: pas after the whole block." },
    { promptLabel: 'ne mal placé', promptSound: 'Avez-vous ne pas reçu mon message ?', fr: src(E(1107)).fr, ipa: ipaOf(E(1107)), tip: "Ne se met devant le bloc. EN: ne goes before the block." },
    { promptLabel: 'oui au lieu de si', promptSound: 'Ne viens-tu pas ? Oui, je viens.', fr: src(E(1122)).fr, ipa: ipaOf(E(1122)), tip: "À une question négative, si. EN: si after a negative question." },
    { promptLabel: 'le nom derrière', promptSound: "N'est-il pas le bureau ouvert le samedi ?", fr: src(E(1117)).fr, ipa: ipaOf(E(1117)), tip: "Le nom reste devant, même à la négation. EN: the noun stays in front." },
  ],
  drill: [
    { promptSay: '... vous aider ?', opts: ['Peux-je', 'Puis-je'], correct: 1 },
    { promptSay: '... assez fort ?', opts: ['Est-ce que je parle', 'Parle-je'], correct: 0 },
    { promptSay: 'Ne viens-tu ... ce soir ?', opts: ['pas', 'rien'], correct: 0 },
    { promptSay: '... reçu mon message ?', opts: ['Avez-vous ne pas', "N'avez-vous pas"], correct: 1 },
    { promptSay: 'Ne viens-tu pas ? ..., je viens.', opts: ['Oui', 'Si', 'Non'], correct: 1 },
    { promptSay: '... remplir ce formulaire ?', opts: ['Dois-je', 'Doive-je'], correct: 0 },
    { promptSay: 'Le bureau ... ouvert le samedi ?', opts: ["n'est pas-il", "n'est-il pas"], correct: 1 },
    { promptSay: '... payer par carte ?', opts: ['Est-ce que je peux', 'Peux-je', 'Je peux-je'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Puis-je, et ne autour du bloc' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-21-piege-je'),
  say: REFRAME,
  terms: ['je', 'negation'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a7-dictee',
  layer: 'core',
  title: 'Écris ne, le bloc, et pas',
  frSub: 'Cinq questions',
  itemIds: dicteeFor(7),
  audio: AUDIO,
  say: REFRAME,
  terms: ['negation', 'je'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La négation', 'Autour de quoi mets-tu ne et pas ?',
    ['autour du verbe seul', 'autour du bloc verbe et pronom'], 1,
    "Ne viens-tu pas. EN: around the whole block."),
  ctl('Le je', 'Laquelle de ces formes existe ?',
    ['puis-je', 'peux-je', 'parle-je'], 0,
    "Puis-je et dois-je ; pour le reste, est-ce que. EN: puis-je and dois-je."),
  ctl('La réponse', 'Oui à « N’avez-vous pas faim ? », c’est...',
    ['Oui, j’ai faim.', 'Si, j’ai faim.'], 1,
    "Si, après une question négative. EN: si after a negative."),
], ['negation', 'je']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La négation et le je',
    opener: {
      line: "Deux endroits où la règle s'arrête : ne autour du bloc, et un je qui s'inverse à peine. EN: Two places the rule stops: ne around the block, and a je that barely inverts.",
      imageRef: 'lessons/inversion/act07.jpg',
    },
    sections: [],
    milestone: "Tu poses une question négative soignée, et tu dis puis-je sans jamais dire peux-je. EN: You can ask a careful negative question and say puis-je, never peux-je.",
    estScreens: 36, restPoints: ['a7-construire', 'a7-choisir'],
  },
  sections: [A7_ECOUTE, A7_NEGATION, A7_CONSTRUIRE, A7_EXEMPLES, A7_CHOISIR, A7_PIEGE, A7_DICTEE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LA LANGUE DES SERVICES
 *
 *  Where inversion is not a choice but the expected formula: service
 *  counters out loud, and requests to a service in writing. b1.08 and b1.09
 *  supplied the conditionnel and the politeness scale; this act puts them
 *  in their written outfit.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a customer's email to a phone company, all its questions inverted. */
const A8_SERVICE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-service',
  layer: 'core',
  questionsInModal: true,
  title: 'Un courriel au service client',
  frSub: 'Lis, et compte les demandes',
  text: SERVICE_TEXT,
  glossary: [
    { word: 'figure', en: 'appears', note: "Est écrit sur la facture. EN: is listed." },
    { word: "à l'étranger", en: 'abroad', note: 'Dans un autre pays.' },
    { word: 'à part', en: 'separate', note: 'Une demande différente, pas la même.' },
    { word: 'Par ailleurs', en: 'also, besides', note: "Pour passer à un autre sujet dans une lettre." },
    { word: 'Cordialement', en: 'Kind regards', note: 'Une fin de courriel polie, un peu moins formelle que je vous prie d’agréer.' },
  ],
  questions: [
    { q: 'Combien de demandes Amadou fait-il par inversion ?', a: "Six : Pourriez-vous, Serait-il possible, le montant sera-t-il, faut-il, Pouvez-vous, Auriez-vous. Aucune avec est-ce que." },
    { q: 'Trouve une question avec un nom sujet.', a: "« le montant sera-t-il remboursé » : le montant, puis il. C'est l'acte 5." },
    { q: 'Pourquoi le conditionnel dans « Pourriez-vous » ?', a: "Pour adoucir la demande, comme dans la leçon 8 du B1. L'inversion, elle, donne la tenue de l'écrit." },
    { q: "Qu'aurait dit Amadou au téléphone ?", a: "Vous pouvez vérifier ce montant ? Est-ce que c'est possible d'avoir le détail ? Même sens, autre tenue." },
  ],
  audio: REC('rec-b1-21-service'),
  say: REFRAME,
  terms: ['formule', 'tenue'],
};

/** NAME: the formulas, and the neighbours that built them. */
const A8_FORMULES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-formules',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les formules des services',
  frSub: 'Le verbe d’abord',
  hint: 'Quatre cartes. Deux leçons du B1 se retrouvent ici.',
  audio: REC('rec-b1-21-formules'),
  say: REFRAME,
  terms: ['formule'],
  cards: [
    {
      head: 'Le conditionnel en tête', label: Cap(CONDITIONNEL_REF),
      fr: B108_INVERSION,
      sub: '[poo-ryay-voo mahⁿ-vwa-YAY luh kohⁿ-TRA]',
      body: `« ${B108_REFRAME} » Pourriez-vous : le conditionnel, puis vous. La demande se fait plus douce. EN: the inverted conditional softens a request.`,
    },
    {
      head: 'Le barreau de la politesse', label: Cap(POLITESSE_REF),
      fr: src(E(1126)).fr,
      sub: rsOf(E(1126)),
      body: `« ${B109_REFRAME} » L'inversion ne remplace pas ce choix : elle l'habille. EN: inversion dresses the request up.`,
    },
    {
      head: 'Le guichet parle aussi', label: 'à voix haute',
      fr: src(E(1127)).fr,
      sub: rsOf(E(1127)),
      body: "Au guichet et au téléphone, ces inversions se disent tous les jours. Ce sont des formules. EN: counters and phones say these aloud every day.",
    },
    {
      head: 'Dans un courriel, le verbe d’abord', label: 'par écrit',
      fr: 'auriez-vous · seriez-vous · accepteriez-vous',
      sub: '[oh-ryay-VOO · suh-ryay-VOO · ak-sehp-tuh-ryay-VOO]',
      body: "Chaque demande commence par un verbe au conditionnel, puis vous. EN: each request opens with a conditional verb, then vous.",
    },
  ],
};

/** NAME, as a lookup: what you want, and the formula that asks for it. */
const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-services',
  title: 'Six formules toutes faites',
  cols: ['Tu veux', 'Formule', 'Où'],
  rows: [
    { cells: ['un service', 'Pourriez-vous...', 'courriel, message'], say: src(E(1124)).fr,
      detail: { title: 'Pourriez-vous', body: "La demande la plus fréquente d'un courriel. Le conditionnel adoucit, l'inversion habille. EN: the commonest email request.", say: src(E(1136)).fr } },
    { cells: ['un changement', 'Serait-il possible de...', 'courriel, lettre'], say: src(E(1126)).fr,
      detail: { title: 'Serait-il possible de', body: "Tu ne demandes rien à personne en particulier : tu demandes si c'est possible. EN: impersonal, so very soft.", say: src(E(1138)).fr } },
    { cells: ['du temps', 'Auriez-vous quelques minutes...', 'en personne, courriel'], say: src(E(1125)).fr,
      detail: { title: 'Auriez-vous', body: "Le conditionnel de avoir, pour demander quelque chose que l'autre a peut-être. EN: for something the other may have.", say: src(E(1139)).fr } },
    { cells: ['aider quelqu’un', 'Que puis-je faire pour vous ?', 'guichet, téléphone'], say: src(E(1127)).fr,
      detail: { title: 'Que puis-je', body: "La phrase du guichet. Puis-je est le je qui s'inverse sans effort. EN: the counter phrase.", say: src(E(1110)).fr } },
    { cells: ['laisser un message', 'Voulez-vous laisser un message ?', 'téléphone'], say: src(E(1133)).fr,
      detail: { title: 'Voulez-vous', body: "Au téléphone, l'accueil propose : Voulez-vous, Désirez-vous. EN: the desk offers.", say: src(E(1128)).fr } },
    { cells: ['la bonne personne', 'À qui dois-je m’adresser ?', 'lettre, guichet'], say: src(E(1140)).fr,
      detail: { title: 'Dois-je', body: "Dois-je est l'autre je qui s'inverse bien, surtout à l'écrit. EN: dois-je, the other je that inverts well.", say: src(E(1131)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule', 'je'],
};

/** BUILD: the written requests and the spoken offers. */
const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Demander et proposer',
  groups: [
    grp('Tu demandes', [
      it(E(1124), 'un appel'),
      it(E(1125), 'du temps'),
      it(E(1129), 'une date'),
      it(E(1135), 'un arrangement'),
    ], chk(
      'Quel temps ouvre ces quatre demandes ?',
      ['le futur', 'le conditionnel'], 1,
      "Pourriez, auriez, seriez, accepteriez : le conditionnel. EN: the conditional.")),
    grp('Le guichet propose', [
      it(E(1127), 'une offre d’aide'),
      it(E(1128), 'un reçu'),
      it(E(1132), 'autre chose'),
      it(E(1133), 'un message'),
    ], chk(
      'Qui pose ces quatre questions ?',
      ['la personne du guichet', 'le client'], 0,
      "Ce sont les phrases de l'accueil. EN: these are the desk’s lines.")),
    ctl('Le je du guichet', '« What can I do for you? » en français soigné, c’est...',
      ['Que peux-je faire pour vous ?', 'Quoi je peux faire pour vous ?', 'Que puis-je faire pour vous ?'], 2,
      "Puis-je, toujours. EN: puis-je, always."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule'],
};

/** Consolidation, as answers. No « EN: » tail anywhere on a back. */
const A8_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a8-cartes',
  layer: 'core',
  title: 'Huit formules à connaître',
  cards: [
    { front: 'could you call me back tomorrow morning?', back: 'pourriez-vous me rappeler demain matin', say: src(E(1124)).fr },
    { front: 'would it be possible to change the date?', back: 'serait-il possible de changer la date', say: src(E(1126)).fr },
    { front: 'what can I do for you?', back: 'que puis-je faire pour vous', say: src(E(1127)).fr },
    { front: 'would you like to leave a message?', back: 'voulez-vous laisser un message', say: src(E(1133)).fr },
    { front: 'could you spare me a few minutes?', back: 'auriez-vous quelques minutes à m’accorder', say: src(E(1125)).fr },
    { front: 'who should I speak to?', back: 'à qui dois-je m’adresser', say: src(E(1140)).fr },
    { front: 'could I speak to the person in charge?', back: 'pourrais-je parler à la responsable', say: src(E(1131)).fr },
    { front: 'how can I reach you?', back: 'comment puis-je vous joindre', say: src(E(1134)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule'],
};

/** CHOOSE: the same request, spoken or written. */
const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Au téléphone, ou par écrit',
  groups: [
    grp('La même demande, deux tenues', [
      it(E(1137), 'au téléphone'),
      it(E(1124), 'dans un courriel'),
      it('fr.a2.au-restaurant.058', 'au restaurant, à voix haute'),
      it('fr.a2.hebergement.075', "à l'hôtel, à voix haute"),
    ], chk(
      'Laquelle de ces deux demandes mettrais-tu dans un courriel ?',
      ['Pourriez-vous me rappeler demain matin ?', 'Vous pourriez me rappeler demain ?'], 0,
      "Dans un courriel, le verbe d'abord. EN: in an email, the verb first.")),
    grp('Tu écris au service client', [
      it(E(1136), 'une preuve écrite'),
      it(E(1139), 'un formulaire'),
      it(E(1131), 'la bonne personne'),
      it(E(1134), 'un contact'),
    ], chk(
      'Ces questions sont-elles trop soignées pour un courriel ?',
      ['Oui, on dirait une lettre au roi.', 'Non, c’est la tenue attendue.'], 1,
      "Un courriel à un service attend exactement cette tenue. EN: exactly the expected outfit.")),
    ctl('Le destinataire', 'Tu écris à ta banque. Quelle phrase choisis-tu ?',
      ['Pourriez-vous me confirmer le virement ?', 'Tu peux me confirmer le virement ?'], 0,
      "Une banque, par écrit : la tenue soignée, et vous. EN: a bank in writing: careful dress."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule', 'tenue'],
};

/** TRAP: four reasonable slips in a service request. */
const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre formules abîmées',
  errors: [
    {
      wrong: 'Est-ce que pourriez-vous me rappeler demain matin ?',
      right: src(E(1124)).fr,
      why: "Tu veux être doublement poli, et est-ce que semble ajouter de la politesse. Une tenue à la fois. EN: never combine est-ce que with inversion.",
    },
    {
      wrong: "Pouvez vous m'envoyer une confirmation écrite ?",
      right: src(E(1136)).fr,
      why: "Le trait d'union ne s'entend pas, et le correcteur ne le met pas toujours. Dans un courriel, il est obligatoire. EN: the hyphen is required.",
    },
    {
      wrong: 'Pourrai-je parler à la responsable ?',
      right: src(E(1131)).fr,
      why: "Pourrai-je existe, au futur, et il sonne presque pareil. Une demande polie prend le conditionnel : pourrais-je. EN: a polite request takes the conditional.",
    },
    {
      wrong: 'Voulez-vous laissez un message ?',
      right: src(E(1133)).fr,
      why: "Laissez et laisser se prononcent pareil. Après voulez-vous, c'est l'infinitif. EN: after voulez-vous, the infinitive.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le guichet', '« Que puis-je faire pour vous ? » se dit-il à voix haute ?',
    ['Non, seulement par écrit.', 'Oui, tous les jours.'], 1,
    "C'est une formule du guichet. EN: a counter formula."),
  ctl('Le courriel', 'Comment commence une demande polie dans un courriel ?',
    ['par le verbe au conditionnel', 'par est-ce que', 'par je veux'], 0,
    "Pourriez-vous, Serait-il possible de. EN: a conditional verb first."),
  ctl('Le mélange', 'Peux-tu écrire « Est-ce que pourriez-vous » ?',
    ['Oui, c’est très poli.', 'Non, une tenue à la fois.'], 1,
    "Est-ce que ou l'inversion, jamais les deux. EN: never both."),
], ['formule']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'La langue des services',
    opener: {
      line: "Au guichet et dans un courriel, certaines questions ont une tenue fixe : ici tu les apprends. EN: At a counter and in an email, some questions have a fixed outfit: here you learn them.",
      imageRef: 'lessons/inversion/act08.jpg',
    },
    sections: [],
    milestone: "Tu écris une demande de service en commençant par le verbe, et tu reconnais les formules du guichet. EN: You can open a service request with the verb and recognise the counter formulas.",
    estScreens: 36, restPoints: ['a8-tableau', 'a8-cartes'],
  },
  sections: [A8_SERVICE, A8_FORMULES, A8_TABLEAU, A8_CONSTRUIRE, A8_CARTES, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — L'INCISE
 *
 *  The first inversion that asks nothing. Always attached to a DIRECT
 *  quotation: indirect speech (« elle a dit que ») is b1.19's and appears
 *  nowhere here.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a diary written as a little story. Every line is a statement, so
 *  the bubbles carry the incise without a single « ? ». */
const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Le carnet de Léa',
  frSub: 'Une journée, racontée comme un livre',
  setting: "Léa, à Québec, écrit sa journée d'hier dans un carnet. Elle met les paroles entre guillemets, comme dans un roman.",
  bubbles: [
    { from: 'narrator', fr: 'Le matin, à la boulangerie, la vendeuse me donne la nouvelle.', en: 'In the morning, at the bakery, the shop assistant tells me the news.' },
    { from: 'narrator', fr: src(E(1142)).fr, en: src(E(1142)).en, warn: 'dit-elle : le verbe, puis le pronom' },
    { from: 'narrator', fr: src(E(1144)).fr, en: src(E(1144)).en, warn: 'ajoute-t-elle : le petit t revient' },
    { from: 'narrator', fr: "À midi, l'autobus arrive, et je cours.", en: 'At noon the bus comes, and I run.' },
    { from: 'narrator', fr: src(E(1151)).fr, en: src(E(1151)).en, warn: 'crie le chauffeur : un nom, pas de pronom' },
    { from: 'narrator', fr: src(E(1154)).fr, en: src(E(1154)).en, warn: 'reconnaît-il : un t déjà là' },
    { from: 'narrator', fr: src(E(1153)).fr, en: src(E(1153)).en, warn: 'propose Samir : un prénom, derrière le verbe' },
  ],
  closing: { fr: 'À chaque fois : les paroles, puis le verbe, puis la personne.', en: 'Every time: the words, then the verb, then the person.' },
  audio: REC('rec-b1-21-carnet'),
  say: REFRAME,
  terms: ['incise'],
};

/** NAME: the incise, one idea per card. */
const A9_INCISE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-incise',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ecrit',
  title: 'Dit-elle, répond-il',
  frSub: "L'inversion qui ne demande rien",
  hint: 'Quatre cartes. La dernière est différente.',
  audio: REC('rec-b1-21-incise'),
  say: REFRAME,
  terms: ['incise', 'petitT'],
  cards: [
    {
      head: 'Après la citation', label: "l'incise",
      fr: src(E(1142)).fr,
      sub: rsOf(E(1142)),
      body: "Dans un récit écrit, le verbe de parole passe devant le sujet, avec un trait d'union. EN: in written narrative the speech verb comes first.",
    },
    {
      head: 'Le petit t revient', label: "l'acte 3",
      fr: 'ajoute-t-elle · demande-t-il · murmure-t-il',
      sub: '[a-zhoot-TEHL · duh-mahⁿd-TEEL · mür-mür-TEEL]',
      body: "Ajoute, demande, murmure finissent par e : le t fait le pont. EN: these verbs end in e, so the -t- returns.",
    },
    {
      head: 'Au milieu de la citation', label: 'entre deux virgules',
      fr: src(E(1148)).fr,
      sub: rsOf(E(1148)),
      body: "L'incise peut couper la phrase citée. Elle se met entre deux virgules, et la citation continue. EN: the incise can split the quotation.",
    },
    {
      head: 'Avec un nom, pas de pronom', label: 'le sujet nom',
      fr: src(E(1147)).fr,
      sub: rsOf(E(1147)),
      body: "Ici le nom passe derrière le verbe, sans pronom. C'est l'inverse de l'acte 5. EN: with a noun, simple inversion, unlike act 5.",
    },
  ],
};

/** BUILD: pronoun incises and noun incises. */
const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les paroles, puis le verbe',
  groups: [
    grp('Avec un pronom', [
      it(E(1142), 'dit-elle'),
      it(E(1143), 'répond-il'),
      it(E(1144), 'ajoute-t-elle'),
      it(E(1152), 'avoue-t-elle'),
    ], chk(
      'Dans « Tout est prêt », répond-il, où est il ?',
      ['après le verbe', 'avant le verbe'], 0,
      "Le verbe de parole d'abord, puis le pronom. EN: the speech verb first.")),
    grp('Avec un nom', [
      it(E(1147), 'dit le médecin'),
      it(E(1151), 'crie le chauffeur'),
      it(E(1153), 'propose Samir'),
      it(E(1158), 'demande une touriste'),
    ], chk(
      'Avec un nom sujet, ajoutes-tu un pronom après le verbe ?',
      ['Non, le nom suffit.', 'Oui, comme à l’acte 5.'], 0,
      "Dans l'incise, le nom passe simplement derrière. EN: in an incise the noun just follows the verb.")),
    ctl('Le temps composé', '« Bien sûr », elle a répondu. En incise écrite...',
      ['a-t-elle répondu', 'a répondu-t-elle', 'elle a-t-elle répondu'], 0,
      "L'auxiliaire, le t, le pronom, puis le participe, comme à l'acte 4. EN: as in act 4."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['incise'],
};

/** MEET, at length: a short scene in the present, eight incises doing
 *  their job. Questions in a reading may carry « ? »: this is not a bubble. */
const A9_RECIT: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-recit',
  layer: 'core',
  questionsInModal: true,
  title: 'Le dernier train',
  frSub: 'Lis, et compte les incises',
  text: RECIT_TEXT,
  glossary: [
    { word: 'quai', en: 'platform', note: 'Là où on attend le train.' },
    { word: 'voiture', en: 'carriage', note: "Dans un train, une voiture est un wagon pour les passagers." },
    { word: "Jusqu'au bout", en: 'To the end of the line', note: "Jusqu'au dernier arrêt." },
    { word: 'murmure', en: 'murmurs', note: 'Parle très doucement.' },
    { word: 'démarre', en: 'pulls away', note: 'Commence à rouler.' },
  ],
  questions: [
    { q: 'Combien d’incises compte le texte ?', a: `Huit : ${RECIT_INCISES.join(', ')}.` },
    { q: 'Dans « Il part dans deux minutes, répond-il, mais la voiture trois est fermée », où est l’incise ?', a: 'Au milieu de la citation, entre deux virgules. La citation continue après.' },
    { q: 'Pourquoi « murmure le vieil homme » n’a-t-il pas de il ?', a: "Le sujet est un nom. Dans une incise, le nom passe derrière le verbe, sans pronom." },
    { q: "Après « Le train pour Québec est-il déjà parti ? », pourquoi n'y a-t-il pas de virgule ?", a: "Le point d'interrogation suffit. L'incise suit directement : demande-t-elle." },
  ],
  audio: REC('rec-b1-21-recit'),
  say: REFRAME,
  terms: ['incise', 'sujetNom'],
};

/** CHOOSE: the t or not, and where the incise sits. */
const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le t, la virgule, la place',
  groups: [
    grp('Un t, ou pas', [
      it(E(1143), 'répond : un d'),
      it(E(1144), 'ajoute : un e'),
      it(E(1150), 'murmure : un e'),
      it(E(1154), 'reconnaît : un t'),
    ], chk(
      'Pourquoi « répond-il » n’a-t-il pas de t ajouté ?',
      ['répond est au présent', 'répond finit par d'], 1,
      "Le d se dit t : il fait déjà le pont. EN: the d already does the job.")),
    grp('Où va l’incise', [
      it(E(1148), 'au milieu'),
      it(E(1145), 'après une question'),
      it(E(1149), 'au passé composé'),
      it(E(1155), 'après une phrase simple'),
    ], chk(
      'Après une question citée, mets-tu une virgule avant l’incise ?',
      ['Non, le point d’interrogation suffit.', 'Oui, toujours.'], 0,
      "« Vous venez d'où ? » demande-t-il. EN: no comma after a question mark.")),
    ctl('À voix haute', 'Tu racontes la scène à une amie. Que dis-tu le plus souvent ?',
      ['Elle m’a dit : « Je pars. »', '« Je pars », dit-elle.'], 0,
      "L'incise est une tenue d'écrit. À l'oral, on met le verbe avant. EN: the incise is written dress."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['incise', 'petitT'],
};

/** TRAP, stepped: the English order, the missing t, the extra pronoun. */
const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: "L'incise à l'anglaise",
  rule: {
    title: 'Les paroles, le verbe, puis la personne',
    body: "En anglais, she says se place librement. En français écrit, après la citation, le verbe passe devant, avec le petit t si besoin. Un nom sujet n'a pas de pronom. EN: after a quotation, verb first.",
  },
  cards: [
    { promptLabel: "l'ordre anglais", promptSound: '« Je pars demain », elle dit.', fr: src(E(1142)).fr, ipa: ipaOf(E(1142)), tip: "Après la citation, le verbe d'abord. EN: verb first after the quote." },
    { promptLabel: 'le t oublié', promptSound: '« Il reste du café », ajoute-elle.', fr: src(E(1144)).fr, ipa: ipaOf(E(1144)), tip: "ajoute finit par e : ajoute-t-elle. EN: add the t." },
    { promptLabel: 'le pronom en trop', promptSound: '« C’est fini », dit-il le médecin.', fr: src(E(1147)).fr, ipa: ipaOf(E(1147)), tip: "Un nom, pas de pronom. EN: a noun needs no pronoun here." },
    { promptLabel: 'le t en trop', promptSound: '« Tout est prêt », répond-t-il.', fr: src(E(1143)).fr, ipa: ipaOf(E(1143)), tip: "répond finit par d : rien à ajouter. EN: nothing to add after d." },
    { promptLabel: 'la virgule en trop', promptSound: '« Vous venez d’où ? », demande-t-il.', fr: src(E(1145)).fr, ipa: ipaOf(E(1145)), tip: "Après le point d'interrogation, pas de virgule. EN: no comma after the question mark." },
    { promptLabel: 'le passé à l’endroit', promptSound: '« Bien sûr », elle a répondu.', fr: src(E(1149)).fr, ipa: ipaOf(E(1149)), tip: "Au passé composé : a-t-elle répondu. EN: invert the auxiliary." },
  ],
  drill: [
    { promptSay: '« Je pars demain », ... .', opts: ['dit-elle', 'elle dit'], correct: 0 },
    { promptSay: '« Il reste du café », ... .', opts: ['ajoute-elle', 'ajoute-t-elle'], correct: 1 },
    { promptSay: '« C’est fini », ... .', opts: ['dit le médecin', 'dit-il le médecin'], correct: 0 },
    { promptSay: '« Tout est prêt », ... .', opts: ['répond-t-il', 'répond-il'], correct: 1 },
    { promptSay: '« Bien sûr », ... .', opts: ['a-t-elle répondu', 'elle a répondu', 'a répondu-elle'], correct: 0 },
    { promptSay: '« Merci », ... .', opts: ['murmure-il', 'murmure-t-il'], correct: 1 },
    { promptSay: '« Attendez », ... .', opts: ['crie le chauffeur', 'le chauffeur crie-t-il'], correct: 0 },
    { promptSay: '« Demain, ..., je commence à huit heures. »', opts: ['il dit', 'dit-il', 'dit-t-il'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Les paroles, le verbe, puis la personne' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-21-piege-incise'),
  say: REFRAME,
  terms: ['incise', 'petitT'],
};

/** NAME, as the reference: six incises on real rows. */
const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Six incises à garder',
  examples: [
    ex(E(1146), 'la règle, en une phrase.'),
    ex(E(1148), "au milieu, entre deux virgules."),
    ex(E(1149), 'au passé composé : a-t-elle, puis le participe.'),
    ex(E(1153), 'un prénom, derrière le verbe.'),
    ex(E(1155), 'la plus simple : dit-elle.'),
    ex(E(1158), 'après une question, sans virgule.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['incise'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La question', "L'incise pose-t-elle une question ?",
    ['Oui, toujours.', 'Non, elle dit qui parle.'], 1,
    "Elle ne demande rien : elle dit qui parle. EN: it says who is speaking."),
  ctl('Le nom', '« C’est fini », dit le médecin : faut-il ajouter il ?',
    ['non', 'oui', 'seulement au futur'], 0,
    "Dans l'incise, un nom sujet passe derrière, seul. EN: a noun stands alone."),
  ctl('Le registre', "Où trouves-tu surtout l'incise ?",
    ['dans les récits écrits', 'dans les conversations'], 0,
    "C'est une tenue d'écrit, comme l'inversion des lettres. EN: written dress."),
], ['incise']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: "L'incise",
    opener: {
      line: "« Je pars », dit-elle : une inversion qui ne demande rien, et qui habille chaque roman. EN: “I’m leaving,” she says: an inversion that asks nothing and dresses every novel.",
      imageRef: 'lessons/inversion/act09.jpg',
    },
    sections: [],
    milestone: "Tu écris qui parle après une citation, avec le verbe devant et le petit t quand il faut. EN: You can write who is speaking after a quotation, verb first and -t- where needed.",
    estScreens: 36, restPoints: ['a9-construire', 'a9-choisir'],
  },
  sections: [A9_HISTOIRE, A9_INCISE, A9_CONSTRUIRE, A9_RECIT, A9_CHOISIR, A9_PIEGE, A9_EXEMPLES, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — PEUT-ÊTRE, SANS DOUTE, À PEINE, AUSSI
 *
 *  The second inversion that asks nothing. At the head of a WRITTEN
 *  sentence these adverbs trigger it; speech says « peut-être que » or puts
 *  the adverb after the verb. « aussi » (= donc) is the one place the
 *  reframe is loose, and the act says so.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the same news, written to a client and then said to a colleague.
 *  Statements only, so the bubbles need no « ? ». */
const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Le courriel et la machine à café',
  frSub: 'La même nouvelle, deux fois',
  setting: "Genève, un mardi matin. Hélène attend un colis pour un client. Elle écrit d'abord au client, puis elle parle à son collègue Idriss.",
  bubbles: [
    { from: 'narrator', fr: 'Hélène écrit au client, dans un courriel soigné.', en: 'Hélène writes to the client, in a careful email.' },
    { from: 'coach', fr: src(E(1173)).fr, en: src(E(1173)).en, warn: 'écrit : peut-être en tête, puis avez-vous' },
    { from: 'coach', fr: src(E(1174)).fr, en: src(E(1174)).en, warn: 'écrit : sans doute en tête, le nom devant, puis arrivera-t-il' },
    { from: 'narrator', fr: 'Puis elle retrouve Idriss à la machine à café.', en: 'Then she joins Idriss at the coffee machine.' },
    { from: 'coach', fr: 'Il a peut-être déjà reçu notre courriel.', en: 'He has maybe already got our email.', warn: 'oral : l’adverbe après le verbe' },
    { from: 'coach', fr: 'Sans doute que le colis arrivera lundi.', en: 'The parcel will probably come on Monday.', warn: 'oral : sans doute que, sans inversion' },
    { from: 'narrator', fr: 'Même nouvelle, deux tenues : le courriel inverse, la machine à café non.', en: 'Same news, two outfits: the email inverts, the coffee machine does not.' },
  ],
  closing: { fr: "En tête d'une phrase écrite, l'adverbe fait inverser. À l'oral, il n'y oblige pas.", en: 'At the head of a written sentence the adverb triggers inversion. In speech it does not.' },
  audio: REC('rec-b1-21-cafe'),
  say: REFRAME,
  terms: ['peutEtre', 'tenue'],
};

/** NAME: the four adverbs, and aussi's warning. */
const A10_ADVERBES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-adverbes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ecrit',
  title: "En tête d'une phrase écrite",
  frSub: 'Peut-être, sans doute, à peine, aussi',
  hint: 'Quatre cartes. La dernière change le sens.',
  audio: REC('rec-b1-21-adverbes'),
  say: REFRAME,
  terms: ['peutEtre', 'tenue'],
  cards: [
    {
      head: 'Peut-être en tête', label: "l'écrit",
      fr: src(E(1160)).fr,
      sub: rsOf(E(1160)),
      body: "À l'écrit soigné, peut-être en tête de phrase fait inverser le verbe et le pronom. EN: written peut-être at the head triggers inversion.",
    },
    {
      head: 'Trois tenues pour une idée', label: 'écrit, oral, neutre',
      fr: 'peut-être viendra-t-il · peut-être qu’il viendra · il viendra peut-être',
      sub: '[peu-tehtr vyehⁿ-dra-TEEL · peu-tehtr keel vyehⁿ-DRA · eel vyehⁿ-dra peu-TEHTR]',
      body: "Le sens ne bouge pas. Seule la tenue change, comme pour les questions. EN: same meaning, three outfits.",
    },
    {
      head: 'Sans doute et à peine', label: 'même règle',
      fr: 'sans doute a-t-elle raison · à peine est-il arrivé',
      sub: '[sahⁿ doot a-tehl reh-ZOHⁿ · a PEN eh-tee-la-ree-VAY]',
      body: "Même règle en tête de phrase. À peine demande aussi que après : à peine est-il arrivé que... EN: same rule; à peine also takes que.",
    },
    {
      head: 'Aussi veut dire donc', label: 'attention',
      fr: src(E(1170)).fr,
      sub: rsOf(E(1170)),
      body: "En tête, avec l'inversion, aussi ne veut plus dire également : il annonce une conséquence. EN: at the head with inversion, aussi means so.",
    },
  ],
};

/** BUILD: the adverb first, then the inverted block. */
const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: "L'adverbe, puis le bloc",
  groups: [
    grp('Peut-être, sans doute', [
      it(E(1160), 'peut-être, puis viendra-t-il'),
      it(E(1164), 'sans doute, puis a-t-elle'),
      it(E(1173), 'peut-être, puis avez-vous'),
      it(E(1175), 'peut-être, puis pourrons-nous'),
    ], chk(
      'Après peut-être en tête, qu’est-ce qui vient ?',
      ['le pronom, puis le verbe', 'le verbe, puis le pronom'], 1,
      "Comme dans une question : le bloc inversé. EN: the inverted block, as in a question.")),
    grp('À peine et aussi', [
      it(E(1167), 'à peine, puis est-il, puis que'),
      it(E(1168), 'à peine, puis a-t-elle'),
      it(E(1169), 'aussi, puis sommes-nous'),
      it(E(1170), 'aussi, puis a-t-il'),
    ], chk(
      'Dans « Aussi a-t-il refusé le poste », que veut dire aussi ?',
      ['donc', 'également'], 0,
      "En tête, avec l'inversion, aussi annonce une conséquence. EN: so, therefore.")),
    ctl('Avec un nom', '« Sans doute le colis arrivera lundi » en tenue soignée...',
      ['Sans doute arrivera le colis lundi.', 'Sans doute le colis arrivera-t-il lundi.'], 1,
      "Le nom devant, puis le pronom : l'acte 5 revient. EN: noun first, as in act 5."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['peutEtre', 'sujetNom'],
};

/** The tricks a teacher gives you, with the reason behind each. */
const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    {
      hack: "Si tu parles, mets l'adverbe après le verbe.",
      why: "Il viendra peut-être : aucune inversion, et c'est juste partout. EN: after the verb, no inversion, correct everywhere.",
    },
    {
      hack: 'Si tu écris et que tu commences par peut-être, inverse.',
      why: "Peut-être viendra-t-il. Ou ajoute que : peut-être qu'il viendra. Jamais les deux. EN: invert, or add que; never both.",
    },
    {
      hack: 'Si aussi ouvre ta phrase, essaie donc à sa place.',
      why: "Si donc marche, c'est l'aussi de la conséquence, et il faut inverser. EN: test with donc.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['peutEtre'],
};

/** CHOOSE: where the sentence is going decides the form. */
const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Écrit, oral ou neutre',
  groups: [
    grp('Une idée, trois tenues', [
      it(E(1160), "l'écrit soigné"),
      it(E(1161), "l'oral"),
      it(E(1162), 'partout'),
      it(E(1176), "la porte de sortie de l'oral"),
    ], chk(
      'Laquelle mettrais-tu dans un rapport écrit ?',
      ['Peut-être viendra-t-il demain.', 'Peut-être qu’il viendra demain.'], 0,
      "Dans un rapport, la tenue soignée : l'inversion. EN: a report wears inversion.")),
    grp('Sans doute, trois fois', [
      it(E(1164), "l'écrit soigné"),
      it(E(1165), 'partout'),
      it(E(1166), "l'oral"),
      it(E(1172), 'donc, sans inversion'),
    ], chk(
      '« Elle a sans doute raison » : faut-il inverser ?',
      ['Non, sans doute n’est pas en tête.', 'Oui, toujours après sans doute.'], 0,
      "L'inversion n'arrive que si l'adverbe ouvre la phrase. EN: only at the head.")),
    ctl('À peine', '« À peine ... arrivé que le téléphone a sonné. »',
      ['il est', 'est-il', 'il a'], 1,
      "À peine en tête : est-il arrivé. EN: invert after à peine."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['peutEtre', 'tenue'],
};

/** TRAP: four reasonable slips at the head of a sentence. */
const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre têtes de phrase',
  errors: [
    {
      wrong: 'Peut-être il viendra demain.',
      right: src(E(1160)).fr,
      why: "Normal : en anglais, maybe he will come garde l'ordre. À l'écrit soigné, inverse, ou ajoute que. EN: invert, or add que.",
    },
    {
      wrong: 'Peut-être que viendra-t-il demain.',
      right: src(E(1161)).fr,
      why: "Tu prends les deux sorties à la fois. Que, ou l'inversion : une seule. EN: que or inversion, never both.",
    },
    {
      wrong: 'Sans doute elle a raison.',
      right: src(E(1164)).fr,
      why: "À l'oral, ça passe. À l'écrit, sans doute en tête fait inverser, comme peut-être. EN: in writing, invert after a head sans doute.",
    },
    {
      wrong: 'Aussi il a refusé le poste.',
      right: src(E(1170)).fr,
      why: "Sans inversion, on comprend également. Avec le sens de donc, il faut inverser. EN: without inversion aussi reads as also.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['peutEtre'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: "Écris l'adverbe et le bloc",
  frSub: 'Cinq phrases',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['peutEtre'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La place', "Quand peut-être fait-il inverser ?",
    ['en tête d’une phrase écrite', 'partout, toujours'], 0,
    "En tête, et à l'écrit. EN: at the head, in writing."),
  ctl('La sortie', 'À l’oral, que dis-tu à la place ?',
    ['peut-être viendra-t-il', 'peut-être qu’il viendra', 'viendra peut-être-t-il'], 1,
    "Peut-être que, sans inversion. EN: peut-être que."),
  ctl('Aussi', 'En tête avec l’inversion, aussi veut dire...',
    ['également', 'donc'], 1,
    "Une conséquence. EN: a consequence."),
], ['peutEtre']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Peut-être, sans doute, aussi',
    opener: {
      line: "Peut-être viendra-t-il : à l'écrit, un petit mot en tête suffit pour inverser. EN: Perhaps he will come: in writing, one small word at the head is enough to invert.",
      imageRef: 'lessons/inversion/act10.jpg',
    },
    sections: [],
    milestone: "Tu inverses après peut-être, sans doute, à peine et aussi à l'écrit, et tu sais les dire sans inversion. EN: You invert after these adverbs in writing and can say them without it.",
    estScreens: 32, restPoints: ['a10-hacks'],
  },
  sections: [A10_HISTOIRE, A10_ADVERBES, A10_CONSTRUIRE, A10_HACKS, A10_CHOISIR, A10_ERREURS, A10_DICTEE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ÉCRIRE À UNE ADMINISTRATION
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as the model the learner will imitate. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un courriel modèle',
  frSub: 'La forme que tu vas écrire',
  text: MODELE_TEXT,
  glossary: [
    { word: 'vignette de stationnement', en: 'residential parking permit', note: 'Le permis qui te laisse garer ta voiture dans ta rue.' },
    { word: 'emménagé', en: 'moved in', note: 'Arrivé dans un nouveau logement.' },
    { word: 'bail', en: 'lease', note: 'Le contrat de location de ton logement.' },
    { word: 'suffit', en: 'is enough', note: 'Suffire : être assez.' },
    { word: 'contravention', en: 'parking ticket', note: 'Une amende pour une voiture mal garée.' },
  ],
  questions: [
    { q: 'Combien de questions Sofia pose-t-elle, et avec combien d’inversions ?', a: "Trois questions et quatre inversions : a-t-elle, dois-je, suffit-elle, sera-t-elle. Aucune avec est-ce que." },
    { q: 'Pourquoi « Ma demande a-t-elle » et pas « A-t-elle ma demande » ?', a: "Le sujet est un nom : il reste devant, et elle le répète. C'est l'acte 5." },
    { q: 'Pourquoi Sofia peut-elle écrire « dois-je » ?', a: "Dois-je fait partie des rares je qui s'inversent bien à l'écrit, avec puis-je. C'est l'acte 7." },
    { q: 'Quelles formules ouvrent et ferment la lettre ?', a: `Madame, Monsieur au début ; je vous remercie par avance, puis je vous prie d'agréer, à la fin. Les cinq étapes : ${MODELE_MOVES.join(' ; ')}.` },
  ],
  audio: REC('rec-b1-21-modele'),
  say: REFRAME,
  terms: ['tenue', 'sujetNom', 'je'],
};

/** NAME: how to plan a formal email. */
const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton courriel',
  steps: [
    '1. Écris l’objet, puis la formule d’appel : Madame, Monsieur. EN: subject line and greeting.',
    '2. Dis pourquoi tu écris, en une phrase : je vous écris au sujet de... EN: one sentence of purpose.',
    '3. Pose trois questions par inversion, une par point précis, dont une avec un nom sujet. EN: three inverted questions, one with a noun subject.',
    '4. Vérifie chaque question : trait d’union, petit t, nom devant, pas de je inversé sauf puis-je et dois-je. EN: check each question.',
    '5. Remercie, puis ferme avec la formule : je vous prie d’agréer... EN: thank, then the closing formula.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'formule'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Tu écris au service des permis de ta ville', fr: src(E(1181)).fr, en: src(E(1181)).en },
    { situation: "Tu écris à l'école de ton enfant", fr: 'Les enfants doivent-ils apporter leur lunch ?', en: 'Do the children need to bring their lunch?' },
    { situation: "Tu réponds à une offre d'emploi", fr: 'Le poste est-il ouvert aux étudiants ?', en: 'Is the job open to students?' },
    { situation: 'Tu appelles le même service le lendemain', fr: 'Est-ce que vous avez reçu mon courriel ?', en: 'Did you get my email?' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'formule'],
};

/** CHOOSE, out loud: the interview from act 1, and your questions at the end. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: "L'entretien d'embauche",
  setting: "Lundi, dix heures, à la bibliothèque du quartier. Julie Tremblay mène l'entretien. À la fin, elle te laisse poser tes questions.",
  turns: [
    {
      ai: 'Bonjour, et merci d’être là. Avez-vous trouvé la bibliothèque facilement ?',
      en: 'Hello, and thank you for coming. Did you find the library easily?',
      user: 'Oui, merci. Et le poste, commence-t-il en septembre ?',
      userEn: 'Yes, thank you. And the job, does it start in September? (A noun subject in front, then commence-t-il.)',
      alts: [
        { fr: 'Oui, très facilement, merci.', en: 'Yes, very easily, thank you.' },
        { fr: 'Oui. Est-ce que le poste commence en septembre ?', en: 'Yes. Does the job start in September? (Est-ce que: right too, in everyday dress.)' },
      ],
    },
    {
      ai: 'Oui, le premier septembre. Avez-vous déjà travaillé en bibliothèque ?',
      en: 'Yes, on the first of September. Have you worked in a library before?',
      user: "Pas encore, mais j'ai animé des groupes d'enfants dans un camp de jour.",
      userEn: "Not yet, but I have run children's groups at a day camp. (An answer: nothing to invert. Her question put the auxiliary first.)",
      alts: [
        { fr: "Non, mais j'ai travaillé deux étés avec des enfants.", en: 'No, but I worked two summers with children.' },
        { fr: "Pas en bibliothèque, mais dans une librairie, à Québec.", en: 'Not in a library, but in a bookshop, in Québec City.' },
      ],
    },
    {
      ai: 'Très bien. Avez-vous des questions pour nous ?',
      en: 'Very good. Do you have any questions for us?',
      user: "Oui. Combien d'heures par semaine le poste demande-t-il ?",
      userEn: 'Yes. How many hours a week does the job need? (A question word, the noun in front, then demande-t-il.)',
      alts: [
        { fr: "Oui. Combien d'heures par semaine faut-il travailler ?", en: 'Yes. How many hours a week does one work? (Faut-il: the impersonal il, inverted.)' },
        { fr: "Oui. C'est combien d'heures par semaine ?", en: 'Yes. How many hours a week is it? (Correct, and in spoken dress.)' },
      ],
    },
    {
      ai: 'Vingt heures, surtout le soir et le samedi.',
      en: 'Twenty hours, mostly evenings and Saturdays.',
      user: "Les horaires changent-ils pendant l'été ?",
      userEn: 'Do the hours change over the summer? (A noun subject: les horaires, then changent-ils.)',
      alts: [
        { fr: "Est-ce que les horaires changent pendant l'été ?", en: 'Do the hours change in summer? (Est-ce que: right everywhere.)' },
        { fr: "Les horaires sont-ils les mêmes en été ?", en: 'Are the hours the same in summer?' },
      ],
    },
    {
      ai: 'Un peu : la bibliothèque ferme plus tôt en juillet.',
      en: 'A little: the library closes earlier in July.',
      user: 'Puis-je vous envoyer une copie de mes diplômes par courriel ?',
      userEn: 'May I send you a copy of my diplomas by email? (Puis-je: the je that inverts.)',
      alts: [
        { fr: 'Est-ce que je peux vous envoyer mes diplômes par courriel ?', en: 'Can I email you my diplomas? (Est-ce que je: the everyday je.)' },
        { fr: 'Pourrais-je vous envoyer mes diplômes par courriel ?', en: 'Could I email you my diplomas? (The conditional: softer still.)' },
      ],
    },
    {
      ai: "Bien sûr. Nous vous répondrons d'ici vendredi.",
      en: 'Of course. We will get back to you by Friday.',
      user: "Merci. Dois-je vous rappeler si je n'ai pas de nouvelles ?",
      userEn: 'Thank you. Should I call you back if I hear nothing? (Dois-je: the other je that inverts.)',
      alts: [
        { fr: 'Merci beaucoup. À vendredi, alors.', en: 'Thanks a lot. Until Friday, then.' },
        { fr: 'Merci. Est-ce que je dois vous rappeler lundi ?', en: 'Thank you. Should I call you on Monday? (Est-ce que je: fine too.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'sujetNom', 'je'],
};

/** THE GRADED TASK. The unit outcome is tested here: a short formal email
 *  that asks three questions by inversion. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris à un service officiel',
  frSub: 'Mission écrite',
  brief: "Tu viens d'emménager dans une nouvelle ville. Tu as des questions pour un service officiel : la mairie, l'école de ton enfant, le service des permis ou une bibliothèque. Écris un courriel court et soigné.",
  briefEn: 'You have just moved to a new town. You have questions for an official service: the town hall, your child’s school, the permit office or a library. Write a short, careful email.',
  produce: "Écris un courriel de 80 à 120 mots avec une formule d'appel, la raison de ton courriel, trois questions par inversion (dont au moins une avec un nom sujet), un remerciement et une formule de fin.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'inversion',
        label: 'Trois inversions bien faites',
        maxPoints: 4,
        descriptors: [
          "4 : Trois questions ou plus par inversion, chacune avec son trait d'union, et au moins une avec un nom sujet devant.",
          "3 : Trois inversions, avec un trait d'union oublié ou une seule petite erreur de forme.",
          '2 : Deux inversions seulement, ou trois avec plusieurs erreurs de forme.',
          '1 : Une inversion au plus. Les questions sont faites avec est-ce que ou avec la voix.',
        ],
      },
      {
        key: 'formes',
        label: 'Le petit t, le nom, le je',
        maxPoints: 3,
        descriptors: [
          "3 : Le petit t là où il faut et nulle part ailleurs, le nom sujet devant avec son pronom, et aucun je inversé sauf puis-je ou dois-je.",
          '2 : Une de ces trois choses hésite une fois.',
          '1 : Plusieurs erreurs : t oublié, nom derrière le verbe, ou peux-je.',
        ],
      },
      {
        key: 'registre',
        label: "La tenue d'une lettre",
        maxPoints: 3,
        descriptors: [
          "3 : Vous partout, aucune question à l'intonation, aucun mélange d'est-ce que et d'inversion, et les formules de lettre.",
          '2 : Le ton tient, avec une phrase qui sonne comme une conversation.',
          '1 : On dirait un message à un ami : tu, salut, ou des questions à la voix.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          "2 : Une formule d'appel, la raison du courriel, trois questions, un remerciement et une formule de fin, entre 80 et 120 mots.",
          '1 : Il manque un élément, ou le courriel fait moins de 80 mots.',
        ],
      },
    ],
  },
  scaffold: [
    'Madame, Monsieur,',
    'Je vous écris au sujet de...',
    'Pourriez-vous...',
    'Mon dossier est-il...',
    'Serait-il possible de...',
    'Dois-je...',
    'Je vous remercie par avance',
    "Je vous prie d'agréer...",
  ],
  modelAnswer: "Objet : inscription à la bibliothèque. Madame, Monsieur, je vous écris au sujet de l'inscription de ma fille à la bibliothèque municipale. Nous venons d'emménager à Sherbrooke et elle a huit ans. Elle lit beaucoup, surtout des bandes dessinées, et elle a hâte de découvrir vos collections. Faut-il prendre rendez-vous pour l'inscription, ou peut-on venir à l'accueil sans rendez-vous ? Par ailleurs, ma fille doit-elle être présente ce jour-là ? Enfin, la carte de la bibliothèque est-elle gratuite pour les enfants, ou y a-t-il des frais ? Pourriez-vous aussi m'indiquer les horaires du samedi ? Je vous remercie par avance de votre réponse. Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. Karine Lavoie",
  modelAnswerEn: "Subject: library registration. Dear Sir or Madam, I am writing about registering my daughter at the public library. We have just moved to Sherbrooke and she is eight. She reads a lot, especially comics, and she can't wait to discover your collections. Do we need an appointment to register, or can we come to the front desk without one? Also, does my daughter need to be there that day? Finally, is the library card free for children, or are there fees? Could you also tell me the Saturday opening hours? Thank you in advance for your reply. Yours faithfully, Karine Lavoie",
  watchFor: [
    {
      pattern: "Est-ce que combined with inversion in the same question (Est-ce que pourriez-vous, Est-ce que faut-il).",
      criterion: 'registre',
      feedback: "Une tenue à la fois : Pourriez-vous, ou Est-ce que vous pourriez. Jamais les deux.",
      ref: 'a2-erreurs',
    },
    {
      pattern: "The hyphen dropped between verb and pronoun (Pouvez vous, Faut il, Doit elle).",
      criterion: 'inversion',
      feedback: "Relie le verbe et le pronom par un trait d'union : Pouvez-vous, Faut-il.",
      ref: 'a2-construire',
    },
    {
      pattern: 'The -t- missing after a vowel-final verb before il, elle or on (Y a-il, la carte coûte-elle, Commence-il).',
      criterion: 'formes',
      feedback: 'Le verbe finit par une voyelle : ajoute le petit t. Y a-t-il, coûte-t-elle.',
      ref: 'a3-piege',
    },
    {
      pattern: 'A -t- added after a verb that already ends in t or d (Est-t-elle, Prend-t-il, Doit-t-elle).',
      criterion: 'formes',
      feedback: 'Le verbe finit déjà par t ou d : rien à ajouter. Est-elle, doit-elle.',
      ref: 'a3-choisir',
    },
    {
      pattern: 'The participle inverted instead of the auxiliary in a compound tense (A reçu-t-il, Avez envoyé-vous).',
      criterion: 'inversion',
      feedback: "C'est l'auxiliaire qui passe devant : A-t-il reçu, Avez-vous envoyé.",
      ref: 'a4-erreurs',
    },
    {
      pattern: 'A noun subject moved behind the verb, English-style (Est gratuite la carte, Doit ma fille être présente).',
      criterion: 'formes',
      feedback: 'Le nom reste devant et un pronom le répète : La carte est-elle gratuite ?',
      ref: 'a5-piege',
    },
    {
      pattern: 'A noun subject put behind the verb after pourquoi (Pourquoi coûte la carte dix dollars).',
      criterion: 'formes',
      feedback: 'Après pourquoi, le nom reste devant : Pourquoi la carte coûte-t-elle dix dollars ?',
      ref: 'a6-erreurs',
    },
    {
      pattern: "je inverted with a verb that does not allow it (Peux-je, Envoie-je, Parle-je), instead of puis-je, dois-je or est-ce que je.",
      criterion: 'formes',
      feedback: 'Avec je : puis-je, dois-je, ou est-ce que je. Jamais peux-je.',
      ref: 'a7-piege',
    },
    {
      pattern: "ne ... pas placed inside the inverted block (Avez-vous ne pas reçu, Ne avez pas-vous).",
      criterion: 'inversion',
      feedback: "Ne devant le bloc, pas derrière : N'avez-vous pas reçu ?",
      ref: 'a7-construire',
    },
    {
      pattern: 'Spoken register in a formal email: tu, salut, intonation-only questions, or peut-être que at the head.',
      criterion: 'registre',
      feedback: "C'est une lettre : vous, Madame, Monsieur, et des questions par inversion.",
      ref: 'a1-reperer',
    },
    {
      pattern: 'Under 80 words, fewer than three questions, or no greeting, purpose, thanks or closing formula.',
      criterion: 'tache',
      feedback: "Relis la mission : une formule d'appel, la raison, trois questions, un merci et une formule de fin.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'The subject line (Objet), the greeting (Madame, Monsieur), the signature and the closing formula do NOT count toward the word budget. Count the body only, with 10% tolerance (72 to 132) before criterion « tache » loses its point.',
    'Conditional inversions (Pourriez-vous, Serait-il possible de, Auriez-vous) COUNT as inversions for criterion « inversion ».',
    'Puis-je, dois-je and peut-on count as inversions. Ai-je and suis-je are not taught (a1.19 withheld them on purpose): do not mark a correct one as an error, and do not ask for one.',
    'Questions with est-ce que are correct French. They do not count toward the three inversions and must not be marked as errors on their own; only est-ce que COMBINED with inversion is an error.',
    'An indirect question (je voudrais savoir si, pourriez-vous me dire si) belongs to b1.19. It is correct and does not count as one of the three inversions.',
    'The subjunctive belongs to b1.14 to b1.16 and is not taught here. Do not mark its absence, and do not mark a correct one as an error.',
    'Accept regional vocabulary (courriel and e-mail, mairie and hôtel de ville, bail and contrat de location, dîner and déjeuner).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'sujetNom', 'je'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes inversions à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'petitT'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-ecrit',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la tenue', v: 'même sens, autre registre', say: src(E(1018)).fr,
      detail: { title: 'La tenue', body: "Tu viens, est-ce que tu viens, viens-tu : même question, trois situations. EN: same question, three situations.", say: src(E(1016)).fr } },
    { k: 'le petit t', v: 'voyelle, puis il, elle, on', say: src(E(1035)).fr,
      detail: { title: 'Le petit t', body: "Seulement après une voyelle écrite. Jamais après t ou d. EN: only after a written vowel.", say: src(E(1039)).fr } },
    { k: 'temps composés', v: 'auxiliaire, pronom, participe', say: src(E(1053)).fr,
      detail: { title: "L'auxiliaire", body: "L'auxiliaire passe devant, le participe reste derrière. EN: the auxiliary inverts.", say: src(E(1054)).fr } },
    { k: 'le sujet nom', v: 'le nom devant, un pronom après', say: src(E(1068)).fr,
      detail: { title: 'Le sujet nom', body: "Le nom ne passe jamais derrière, sauf dans l'incise et après que. EN: the noun stays in front.", say: src(E(1069)).fr } },
    { k: 'le je', v: 'puis-je, dois-je, sinon est-ce que', say: src(E(1110)).fr,
      detail: { title: 'Le je', body: "Peux-je n'existe pas. Pour le reste, est-ce que je. EN: never peux-je.", say: src(E(1113)).fr } },
    { k: "l'écrit", v: 'dit-elle, peut-être viendra-t-il', say: src(E(1142)).fr,
      detail: { title: 'Sans question', body: "L'incise et l'adverbe en tête inversent sans rien demander. EN: inversion without a question.", say: src(E(1160)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'incise', 'peutEtre'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu choisis la tenue d'une question, tu construis toutes les inversions, et tu écris un courriel qu'un service prend au sérieux. Le piège qui reste est discret : le nom sujet qui glisse derrière le verbe, comme en anglais. Avant l'examen, relis ton courriel et entoure chaque question. À côté, écris le sujet : un pronom ou un nom. Pour chaque nom, vérifie qu'il est devant, avec son pronom après le verbe. EN: Circle each question in your email, label its subject, and check every noun subject stays in front.",
  stats: [
    { k: 'La tenue', v: 'même sens, autre registre' },
    { k: 'Le petit t', v: 'entre deux voyelles' },
    { k: 'Le sujet nom', v: 'devant, avec un pronom' },
    { k: 'Le je', v: 'puis-je et dois-je' },
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
    { front: "l'inversion", back: 'même sens, tenue soignée', say: src(E(1018)).fr },
    { front: 'le petit t', back: 'entre une voyelle et il, elle, on', say: src(E(1035)).fr },
    { front: 'les temps composés', back: "l'auxiliaire passe devant", say: src(E(1053)).fr },
    { front: 'le sujet nom', back: 'le nom devant, un pronom après', say: src(E(1068)).fr },
    { front: 'après pourquoi', back: 'le nom reste devant', say: src(E(1089)).fr },
    { front: 'la négation', back: 'ne devant le bloc, pas derrière', say: src(E(1106)).fr },
    { front: 'Can I?', back: 'puis-je', say: src(E(1110)).fr },
    { front: 'après une citation', back: 'dit-elle, répond-il', say: src(E(1142)).fr },
    { front: 'peut-être en tête, à l’écrit', back: 'on inverse', say: src(E(1160)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: "L'inversion, en résumé",
  body: `${REFRAME} Tu sais maintenant quand la mettre, et comment la construire avec tous les verbes, tous les temps et tous les sujets. ${Cap(NEXT_REF)} passe à une autre paire que l'anglais confond : c'est et il est. EN: Next lesson: c'est against il est.`,
  points: [
    "L'inversion est la tenue des lettres, des guichets et des récits.",
    'Le petit t entre deux voyelles, le trait d’union toujours.',
    'Un nom sujet reste devant, et un pronom le répète.',
    'Avec je : puis-je, dois-je, sinon est-ce que.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenue', 'sujetNom', 'je'],
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round on the letter.
 *  Each round's target is a distinct errorTrigger, so a failed round fires
 *  that round's own drill.
 *
 *  `fold()` strips accents, commas, apostrophes, HYPHENS and spacing, so no
 *  answer turns on one. Every typeIn tests word ORDER, the -t- (a letter,
 *  which survives folding) or the choice of form. Every typeIn and
 *  errorSpot carries `prompt`, every listenChoose carries `say`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
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
      id: 'r1-tenue', label: 'La tenue', targets: ['tenue-oubliee'],
      questions: [
        mc('Tu écris à une responsable du recrutement. Quelle question choisis-tu ?', ['Êtes-vous disponible lundi ?', 'Vous êtes disponible lundi ?'], 0, "Une lettre attend l'inversion. EN: a letter expects inversion.", 'a1-scene'),
        mc('« Viens-tu ? » et « Tu viens ? » : le sens change-t-il ?', ['oui', 'non'], 1, 'Même sens, autre tenue. EN: same meaning, another outfit.', 'a1-check'),
        mc('Est-ce que est-il faux dans une lettre ?', ['oui, toujours', 'seulement avec vous', 'non, jamais'], 2, "Jamais faux, seulement moins habillé. EN: never wrong, just less dressed up.", 'a1-paires'),
        tI('Écris la question dans la tenue d’une lettre.', 'Vous pouvez m’appeler après seize heures ?', 'Pouvez-vous m’appeler après seize heures ?', 'Le verbe, un trait d’union, puis vous. EN: verb, hyphen, vous.', 'a1-reperer'),
        tI('Écris la question dans la tenue d’une lettre.', 'Vous connaissez déjà notre bibliothèque ?', 'Connaissez-vous déjà notre bibliothèque ?', 'Le verbe passe devant vous. EN: the verb goes before vous.', 'a1-lettre'),
        tI('Dis la même chose à une amie, avec la voix.', 'Êtes-vous disponible lundi ?', 'Tu es disponible lundi ?', 'Tu, et la voix monte : rien ne bouge. EN: tu, and a rising voice.', 'a1-usages'),
        eS('Est-ce que pouvez-vous me confirmer la date de l’entretien ?', 'Pouvez-vous me confirmer la date de l’entretien ?', 'Une tenue à la fois. EN: one outfit at a time.', 'a1-scene', ['Est-ce que vous pouvez me confirmer la date de l’entretien ?']),
        lC('Écoute. Cette question vient-elle d’une lettre ou d’une conversation ?', 'Souhaitez-vous recevoir le plan par courriel ?', ['d’une lettre', 'd’une conversation entre amis'], 0, 'Souhaitez-vous : la tenue d’un courriel officiel. EN: formal email dress.', 'a1-lettre'),
      ],
    },
    {
      id: 'r2-trois', label: 'Trois façons de demander', targets: ['formes-melangees'],
      questions: [
        mc('Quelle question mélange deux tenues ?', ['Est-ce que tu viens ce soir ?', 'Viens-tu ce soir ?', 'Est-ce que viens-tu ce soir ?'], 2, 'Est-ce que garde l’ordre normal. EN: est-ce que keeps normal order.', 'a2-erreurs'),
        mc('Dans une inversion, que relie le trait d’union ?', ['deux phrases', 'le verbe et le pronom'], 1, 'Il colle le pronom au verbe. EN: it joins pronoun and verb.', 'a2-construire'),
        mc('« Tu viens-tu avec nous ? » : où l’entends-tu ?', ['à l’oral, au Québec', 'dans une lettre officielle'], 0, "Le -tu du Québec, à reconnaître. EN: Québec speech.", 'a2-tableau'),
        mc('« Vous partez demain ? » dit à un inconnu est...', ['impoli', 'faux', 'poli, grâce à vous'], 2, 'La politesse vient de vous. EN: vous carries the politeness.', 'a2-check'),
        tI('Mets la question en inversion.', 'Vous travaillez ici depuis longtemps ?', 'Travaillez-vous ici depuis longtemps ?', 'Le verbe, puis vous. EN: verb, then vous.', 'a2-construire'),
        tI('Mets la question avec est-ce que.', 'Connais-tu ce quartier ?', 'Est-ce que tu connais ce quartier ?', 'Est-ce que, puis l’ordre normal. EN: est-ce que, then normal order.', 'a2-trois'),
        eS('Est-ce que vous parlez-vous français ?', 'Est-ce que vous parlez français ?', 'Avec est-ce que, un seul vous, devant. EN: one vous, in front.', 'a2-erreurs', ['Parlez-vous français ?']),
        lC('Écoute. Comment la question est-elle faite ?', 'Partez-vous demain ?', ['la voix monte, rien ne bouge', 'avec est-ce que', 'le verbe passe devant'], 2, 'Partez-vous : le verbe d’abord. EN: verb first.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-t', label: 'Le petit t', targets: ['t-oublie'],
      questions: [
        mc('« Va-... à la réunion ? »', ['il', 't-il'], 1, 'va finit par une voyelle. EN: va ends in a vowel.', 'a3-piege'),
        mc('« Est-... à Montréal ? »', ['elle', 't-elle'], 0, 'est a déjà son t. EN: est already has its t.', 'a3-exemples'),
        mc('Quand ajoutes-tu -t- ?', ['devant tous les pronoms', 'seulement au futur', 'entre une voyelle et il, elle, on'], 2, 'Deux voyelles qui se touchent. EN: two vowels meeting.', 'a3-pont'),
        tI('Mets la question en inversion.', 'Elle parle espagnol ?', 'Parle-t-elle espagnol ?', 'parle finit par e : le t. EN: e, then the t.', 'a3-construire'),
        tI('Mets la question en inversion.', 'Il arrivera à l’heure ?', 'Arrivera-t-il à l’heure ?', 'Le futur finit par a. EN: the future ends in a.', 'a3-construire'),
        tI('Mets la question en inversion.', 'On parle français dans ce bureau ?', 'Parle-t-on français dans ce bureau ?', 'Le t marche aussi avec on. EN: on takes the t too.', 'a3-pont'),
        eS('Prend-t-il le métro ?', 'Prend-il le métro ?', 'Le d fait déjà le pont. EN: the d already sounds like t.', 'a3-piege'),
        lC('Écoute. Entends-tu un t entre le verbe et le pronom ?', 'Viendra-t-elle demain ?', ['non', 'oui'], 1, 'viendra-TEHL. EN: yes, a light t.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-composes', label: 'Les temps composés', targets: ['participe-inverse'],
      questions: [
        mc('Aux temps composés, quel mot passe devant le pronom ?', ['le participe', 'le verbe à l’infinitif', 'l’auxiliaire'], 2, "L'auxiliaire, et lui seul. EN: the auxiliary.", 'a4-auxiliaire'),
        mc('Laquelle est juste ?', ['As fini-tu ton rapport ?', 'As-tu fini ton rapport ?'], 1, 'Le participe reste derrière. EN: the participle stays behind.', 'a4-erreurs'),
        mc('« L’avez-vous lu ? » : où est le pronom objet ?', ['devant l’auxiliaire', 'après le participe'], 0, "Il ne bouge pas. EN: it stays before the auxiliary.", 'a4-choisir'),
        tI('Mets la question en inversion.', 'Vous avez déjà mangé ?', 'Avez-vous déjà mangé ?', 'Avez, vous, puis déjà mangé. EN: auxiliary, pronoun, participle.', 'a4-construire'),
        tI('Mets la question en inversion.', 'Il a compris la question ?', 'A-t-il compris la question ?', 'a, le t, il, puis le participe. EN: a-t-il, then the participle.', 'a4-construire'),
        tI('Mets la question en inversion.', 'Ils sont arrivés à l’heure ?', 'Sont-ils arrivés à l’heure ?', 'Avec être, pareil. EN: same with être.', 'a4-cartes'),
        eS('Avez mangé-vous déjà ?', 'Avez-vous déjà mangé ?', "Le pronom va entre l'auxiliaire et le participe. EN: the pronoun sits in the middle.", 'a4-erreurs'),
        lC('Écoute. Quel est le temps de la question ?', 'Avez-vous reçu ma lettre ?', ['le présent', 'le passé composé'], 1, 'avez, puis reçu. EN: auxiliary plus participle.', 'a4-grille'),
      ],
    },
    {
      id: 'r5-nom', label: 'Le sujet nom', targets: ['nom-derriere'],
      questions: [
        mc('« Votre fille viendra » en inversion, c’est...', ['Viendra votre fille ?', 'Viendra-t-elle votre fille ?', 'Votre fille viendra-t-elle ?'], 2, 'Le nom devant, elle après. EN: noun first, pronoun after.', 'a5-regle'),
        mc('Avec un nom sujet, le nom va...', ['devant le verbe', 'derrière le verbe'], 0, 'Il ne bouge pas. EN: it stays in front.', 'a5-check'),
        mc('« Les billets sont-... remboursables ? »', ['elles', 'il', 'ils'], 2, 'billets est masculin pluriel. EN: masculine plural.', 'a5-piege'),
        tI('Mets la question en inversion soignée.', 'Le train est parti ?', 'Le train est-il parti ?', 'Le train, puis est-il. EN: noun, then est-il.', 'a5-construire'),
        tI('Mets la question en inversion soignée.', 'Votre dossier est complet ?', 'Votre dossier est-il complet ?', 'Le nom reste devant. EN: the noun stays in front.', 'a5-construire'),
        tI('Mets la question en inversion soignée.', 'Votre frère parle anglais ?', 'Votre frère parle-t-il anglais ?', 'Le nom, puis parle-t-il. EN: with the t.', 'a5-exemples'),
        eS('Viendra votre fille au mariage ?', 'Votre fille viendra-t-elle au mariage ?', "Le nom ne passe jamais derrière. EN: never behind the verb.", 'a5-piege'),
        lC('Écoute. De qui parle-t-on ?', 'Les enfants ont-ils mangé ?', ['de la personne qui écoute', 'des enfants'], 1, 'Les enfants, puis ils. EN: the children.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-mots', label: 'Les mots interrogatifs', targets: ['pourquoi-que'],
      questions: [
        mc('Laquelle est fausse ?', ['Où habite votre sœur ?', 'Que dit le médecin ?', 'Pourquoi part Marie ?'], 2, 'Après pourquoi, le nom reste devant. EN: not after pourquoi.', 'a6-choisir'),
        mc('Après que, l’inversion est...', ['interdite', 'possible, jamais obligatoire', 'obligatoire'], 2, 'Que faites-vous. EN: required.', 'a6-mots'),
        mc('« Comment allez-vous ? » est...', ['une faute', 'une inversion figée'], 1, 'Une formule de tous les jours. EN: an everyday formula.', 'a6-tableau'),
        tI('Mets la question en inversion.', 'Où vous allez ?', 'Où allez-vous ?', 'Le mot, le verbe, le pronom. EN: word, verb, pronoun.', 'a6-construire'),
        tI('Mets la question en inversion.', 'Pourquoi le magasin est fermé ?', 'Pourquoi le magasin est-il fermé ?', 'Pourquoi, le nom, puis est-il. EN: noun in front after pourquoi.', 'a6-construire'),
        tI('Écris la question en tenue soignée.', 'Vous faites quoi dans la vie ?', 'Que faites-vous dans la vie ?', 'Que en tête, puis l’inversion. EN: que, then inversion.', 'a6-erreurs'),
        eS('Pourquoi part Marie ?', 'Pourquoi Marie part-elle ?', 'Marie devant, elle après. EN: noun first.', 'a6-erreurs'),
        lC('Écoute. Qu’est-ce qu’on te demande ?', 'Combien de temps restez-vous ?', ['la durée de ton séjour', 'ton adresse'], 0, 'Combien de temps. EN: how long.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-je', label: 'La négation et le je', targets: ['je-negation'],
      questions: [
        mc('« Can I help you? » en français soigné :', ['Peux-je vous aider ?', 'Puis-je vous aider ?'], 1, 'Peux-je n’existe pas. EN: never peux-je.', 'a7-piege'),
        mc('« Ne viens-tu pas ? » Tu viens. Tu réponds...', ['Si, je viens.', 'Oui, je viens.'], 0, 'Si, après une question négative. EN: si after a negative.', 'a7-negation'),
        mc('Avec je, que prends-tu le plus souvent ?', ['l’inversion', 'est-ce que'], 1, 'Est-ce que je, sauf puis-je et dois-je. EN: est-ce que je.', 'a7-exemples'),
        tI('Mets la question négative en inversion.', 'Tu ne viens pas ce soir ?', 'Ne viens-tu pas ce soir ?', 'Ne, le bloc, pas. EN: ne, block, pas.', 'a7-construire'),
        tI('Mets la question négative en inversion.', 'Vous n’avez pas reçu mon message ?', 'N’avez-vous pas reçu mon message ?', "N', le bloc, pas, puis le participe. EN: n', block, pas.", 'a7-construire'),
        tI('Écris la question avec est-ce que.', 'Je parle assez fort ?', 'Est-ce que je parle assez fort ?', 'Parle-je ne se dit pas. EN: no parle-je.', 'a7-choisir'),
        eS('Avez-vous ne pas reçu mon message ?', 'N’avez-vous pas reçu mon message ?', 'Ne devant le bloc. EN: ne before the block.', 'a7-piege'),
        lC('Écoute. Qui propose son aide ?', 'Puis-je vous aider ?', ['la personne qui parle', 'la personne qui écoute'], 0, 'Je propose. EN: the speaker offers.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-formules', label: 'Les formules', targets: ['formule-abimee'],
      questions: [
        mc('Comment commence une demande polie dans un courriel ?', ['par est-ce que', 'par le verbe au conditionnel'], 1, 'Pourriez-vous, Serait-il possible de. EN: a conditional verb first.', 'a8-formules'),
        mc('« What can I do for you? » au guichet :', ['Que puis-je faire pour vous ?', 'Que peux-je faire pour vous ?'], 0, 'Puis-je, toujours. EN: puis-je.', 'a8-construire'),
        mc('Qui dit « Voulez-vous laisser un message ? »', ['le client', 'le facteur', 'l’accueil, au téléphone'], 2, "C'est l'accueil qui propose. EN: the desk offers.", 'a8-tableau'),
        tI('Écris la demande dans la tenue d’un courriel.', 'Vous pourriez me rappeler demain matin ?', 'Pourriez-vous me rappeler demain matin ?', 'Le verbe d’abord. EN: verb first.', 'a8-choisir'),
        tI('Écris la demande dans la tenue d’un courriel.', 'C’est possible de changer la date ?', 'Serait-il possible de changer la date ?', 'Serait-il possible de. EN: the soft formula.', 'a8-tableau', ['Est-il possible de changer la date ?']),
        eS('Pourrai-je parler à la responsable ?', 'Pourrais-je parler à la responsable ?', 'Une demande polie prend le conditionnel. EN: the conditional.', 'a8-erreurs'),
        eS('Est-ce que pourriez-vous me rappeler demain matin ?', 'Pourriez-vous me rappeler demain matin ?', 'Une tenue à la fois. EN: never both.', 'a8-erreurs', ['Est-ce que vous pourriez me rappeler demain matin ?']),
        lC('Écoute. Où entends-tu cette phrase ?', 'Que puis-je faire pour vous ?', ['entre deux amis', 'à un guichet'], 1, 'Une formule de guichet. EN: a counter formula.', 'a8-service'),
      ],
    },
    {
      id: 'r9-incise', label: "L'incise", targets: ['incise-droite'],
      questions: [
        mc('Dans un récit écrit, après « Je pars », tu écris...', ['dit-elle.', 'elle dit.'], 0, 'Le verbe d’abord. EN: verb first.', 'a9-incise'),
        mc('« Il reste du café », ajoute-... .', ['elle', 't-elle'], 1, 'ajoute finit par e. EN: add the t.', 'a9-piege'),
        mc('« C’est fini », dit ... .', ['le médecin', 'il le médecin'], 0, 'Un nom, sans pronom. EN: a noun, no pronoun.', 'a9-construire'),
        tI('Mets l’incise dans l’ordre écrit.', '« Tout est prêt », il répond.', '« Tout est prêt », répond-il.', 'répond, puis il. EN: verb, then pronoun.', 'a9-construire'),
        tI('Mets l’incise au passé composé.', '« Bien sûr », répond-elle.', '« Bien sûr », a-t-elle répondu.', 'a-t-elle, puis répondu. EN: auxiliary first.', 'a9-exemples'),
        eS('« Je ne sais pas », avoue-elle.', '« Je ne sais pas », avoue-t-elle.', 'avoue finit par e. EN: the t is needed.', 'a9-piege'),
        eS('« Attendez », crie-t-il le chauffeur.', '« Attendez », crie le chauffeur.', 'Un nom sujet, pas de pronom. EN: no extra pronoun.', 'a9-choisir'),
        lC('Écoute. Qui parle ?', '« On se revoit lundi », propose Samir.', ['la narratrice', 'Samir'], 1, 'propose Samir. EN: Samir.', 'a9-histoire'),
      ],
    },
    {
      id: 'r10-adverbe', label: 'Peut-être, sans doute, aussi', targets: ['adverbe-sans-inversion'],
      questions: [
        mc('Dans un rapport écrit, que choisis-tu ?', ['Peut-être viendra-t-il demain.', 'Peut-être il viendra demain.'], 0, 'En tête, à l’écrit : on inverse. EN: invert.', 'a10-adverbes'),
        mc('« Aussi a-t-il refusé le poste. » Aussi veut dire...', ['également', 'donc'], 1, 'Une conséquence. EN: so.', 'a10-construire'),
        mc('« Elle a sans doute raison. » Faut-il inverser ?', ['non', 'oui'], 0, 'Sans doute n’est pas en tête. EN: not at the head.', 'a10-choisir'),
        tI('Écris la phrase en tenue soignée, peut-être en tête.', 'Il viendra peut-être demain.', 'Peut-être viendra-t-il demain.', 'Peut-être, puis le bloc. EN: adverb, then the block.', 'a10-construire'),
        tI('Écris la même idée à l’oral, avec que.', 'Peut-être viendra-t-il demain.', 'Peut-être qu’il viendra demain.', 'Que, sans inversion. EN: que, no inversion.', 'a10-histoire'),
        tI('Écris la phrase en tenue soignée, sans doute en tête.', 'Elle a sans doute raison.', 'Sans doute a-t-elle raison.', 'Sans doute, puis a-t-elle. EN: invert.', 'a10-hacks'),
        eS('Peut-être que viendra-t-il demain.', 'Peut-être viendra-t-il demain.', 'Que, ou l’inversion : une seule. EN: one or the other.', 'a10-erreurs', ['Peut-être qu’il viendra demain.']),
        lC('Écoute. Cette phrase vient-elle d’un texte écrit ou d’une conversation ?', 'Sans doute a-t-elle raison.', ['d’une conversation', 'd’un texte écrit'], 1, 'L’inversion après sans doute : l’écrit. EN: written dress.', 'a10-histoire'),
      ],
    },
    {
      id: 'r11-lettre', label: 'Écrire à un service', targets: ['lettre-negligee'],
      questions: [
        mc('Combien de questions par inversion ta mission demande-t-elle ?', ['une', 'dix', 'trois'], 2, 'Trois au moins. EN: at least three.', 'a11-plan'),
        mc('Comment commence la lettre de Sofia ?', ['Madame, Monsieur,', 'Salut,'], 0, 'La formule d’appel d’une lettre. EN: the letter greeting.', 'a11-lecture'),
        mc('« Ma demande a-t-elle bien été reçue ? » Que répète elle ?', ['Sofia', 'ma demande'], 1, 'Le nom sujet, repris après le verbe. EN: the noun subject.', 'a11-lecture'),
        tI('Écris la question en tenue de lettre.', 'Est-ce que je dois envoyer les originaux ?', 'Dois-je envoyer les originaux ?', 'Dois-je : un je qui s’inverse. EN: dois-je.', 'a11-scenario'),
        tI('Écris la question en tenue de lettre.', 'Le bureau est ouvert pendant les vacances ?', 'Le bureau est-il ouvert pendant les vacances ?', 'Le nom, puis est-il. EN: noun, then est-il.', 'a11-usages'),
        tI('Complète la formule de fin.', 'Je vous prie d’___, Madame, Monsieur, mes salutations distinguées.', 'Je vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.', 'La formule de fin, toute faite. EN: the fixed closing.', 'a11-cheat'),
        eS('Est-ce que faut-il prendre rendez-vous ?', 'Faut-il prendre rendez-vous ?', 'Une tenue à la fois. EN: never both.', 'a11-plan', ['Est-ce qu’il faut prendre rendez-vous ?']),
        lC('Écoute. Cette phrase peut-elle aller dans ta lettre ?', 'Pourriez-vous me confirmer la réception de mon dossier ?', ['oui', 'non'], 0, 'Le verbe d’abord, et vous. EN: exactly the dress.', 'a11-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Écrire à une administration',
    opener: {
      line: "À toi d'écrire le courriel que le service lira jusqu'au bout : trois questions, en veste. EN: Your turn to write the email the office will read to the end: three questions, in a jacket.",
      imageRef: 'lessons/inversion/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton courriel officiel et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your formal email and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 120,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-t', 'a11-quiz/r6-mots', 'a11-quiz/r9-incise'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-tenue', title: 'Lettre ou conversation', format: 'sort' as const, coach: "Deux piles. Demande-toi où va la phrase : dans une lettre, ou dans une conversation. EN: sort by where the sentence is going.", buckets: ['une lettre', 'une conversation'], items: [E(1004), E(1006), E(1008), E(1009), E(1011), E(1013)], audio: AUDIO },
  { id: 'd-trois', title: 'Une tenue à la fois', format: 'mcq' as const, coach: "Est-ce que garde l'ordre normal ; l'inversion met le verbe devant. Jamais les deux. EN: est-ce que or inversion, never both.", q: 'Quelle question est juste ?', opts: ['Est-ce que tu viens ce soir ?', 'Est-ce que viens-tu ce soir ?'], correct: 0, why: "Est-ce que, puis l'ordre normal. EN: est-ce que, then normal order.", items: [E(1016), E(1017), E(1018), E(1019), E(1020), E(1021)], audio: AUDIO },
  { id: 'd-t', title: 'Le pont entre deux voyelles', format: 'mcq' as const, coach: "Regarde la dernière lettre écrite du verbe. Une voyelle devant il, elle ou on : ajoute -t-. EN: a written final vowel before il, elle, on takes -t-.", q: 'Parle-... français dans ce bureau ?', opts: ['on', 't-on'], correct: 1, why: 'parle finit par e. EN: parle ends in e.', items: [E(1035), E(1036), E(1037), E(1039), E(1041), E(1042)], audio: AUDIO },
  { id: 'd-auxiliaire', title: "L'auxiliaire devant", format: 'flashcard' as const, coach: "Lis chaque question à voix haute : l'auxiliaire, le pronom, puis le participe. EN: read each aloud: auxiliary, pronoun, participle.", items: [E(1052), E(1053), E(1054), E(1056), E(1058), E(1062)], audio: AUDIO },
  { id: 'd-nom', title: 'Le nom reste devant', format: 'mcq' as const, coach: "Le nom sujet ne passe jamais derrière le verbe : un pronom le répète. EN: the noun stays in front and a pronoun repeats it.", q: 'Laquelle est juste ?', opts: ['Viendra votre fille ?', 'Votre fille viendra-t-elle ?'], correct: 1, why: 'Le nom devant, elle après. EN: noun first.', items: [E(1068), E(1069), E(1070), E(1071), E(1075), E(1076)], audio: AUDIO },
  { id: 'd-mots', title: 'Derrière ou devant', format: 'sort' as const, coach: "Deux piles : le nom peut passer derrière le verbe, ou il doit rester devant. Pourquoi le garde toujours devant. EN: sort by where the noun may go.", buckets: ['le nom peut passer derrière', 'le nom reste devant'], items: [E(1092), E(1089), E(1104), E(1098), E(1096), E(1102)], audio: AUDIO },
  { id: 'd-je', title: 'Puis-je, ou est-ce que je', format: 'mcq' as const, coach: "Avec je, dis puis-je ou dois-je. Pour tout le reste, est-ce que je. EN: puis-je, dois-je, else est-ce que je.", q: 'Can I pay by card?', opts: ['Est-ce que je peux payer par carte ?', 'Peux-je payer par carte ?'], correct: 0, why: 'Peux-je n’existe pas. EN: no peux-je.', items: [E(1110), E(1113), E(1114), E(1116), E(1106), E(1107)], audio: AUDIO },
  { id: 'd-formule', title: 'Les formules', format: 'flashcard' as const, coach: "Dis chaque formule à voix haute, comme au guichet ou en relisant ton courriel. EN: say each formula aloud.", items: [E(1124), E(1126), E(1127), E(1133), E(1140), E(1131)], audio: AUDIO },
  { id: 'd-incise', title: 'Les paroles, puis le verbe', format: 'mcq' as const, coach: "Après la citation, le verbe de parole passe devant le sujet. EN: after the quotation, verb first.", q: '« Je pars demain », ... .', opts: ['dit-elle', 'elle dit'], correct: 0, why: 'Dans un récit écrit, le verbe d’abord. EN: verb first in writing.', items: [E(1142), E(1143), E(1144), E(1147), E(1149), E(1155)], audio: AUDIO },
  { id: 'd-adverbe', title: "L'écrit ou l'oral", format: 'sort' as const, coach: "Deux piles : l'adverbe en tête avec l'inversion, ou la version de l'oral. EN: sort into written and spoken.", buckets: ["à l'écrit", "à l'oral"], items: [E(1160), E(1161), E(1164), E(1166), E(1170), E(1176)], audio: AUDIO },
  { id: 'd-lettre', title: 'La tenue de ta lettre', format: 'mcq' as const, coach: "Relis ton courriel : trois questions par inversion, aucune question à la voix, aucun mélange. EN: reread your email: three inverted questions, no mixing.", q: 'Dans ta lettre, tu écris...', opts: ['Faut-il prendre rendez-vous ?', 'Il faut prendre rendez-vous ?'], correct: 0, why: "La lettre attend l'inversion. EN: a letter expects inversion.", items: [E(1180), E(1181), E(1183), E(1186), E(1188), E(1194)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'tenue-oubliee', description: 'Writes a formal letter or email with intonation questions or a casual register, so correct French arrives in the wrong outfit.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-tenue', retest: 'd-tenue' },
  { id: 'formes-melangees', description: 'Combines est-ce que with inversion in one question, or drops the hyphen between the verb and the pronoun.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-trois', retest: 'd-trois' },
  { id: 't-oublie', description: 'Leaves out the -t- between a vowel-final verb and il, elle or on, or adds it after a verb that already ends in t or d.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-t', retest: 'd-t' },
  { id: 'participe-inverse', description: 'Inverts the past participle instead of the auxiliary in a compound tense, or moves an object pronoun behind the auxiliary.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-auxiliaire', retest: 'd-auxiliaire' },
  { id: 'nom-derriere', description: 'Puts a noun subject behind the verb as English does (Viendra votre fille ?), or forgets the repeating pronoun after the verb.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-nom', retest: 'd-nom' },
  { id: 'pourquoi-que', description: 'Moves a noun subject behind the verb after pourquoi, or leaves que at the head of a question without inverting.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-mots', retest: 'd-mots' },
  { id: 'je-negation', description: 'Says peux-je or inverts je with an ordinary verb, puts ne or pas inside the inverted block, or answers oui to a negative question.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-je', retest: 'd-je' },
  { id: 'formule-abimee', description: 'Damages a service formula: est-ce que plus inversion, the future pourrai-je for the conditional pourrais-je, or a request opened with je veux.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-formule', retest: 'd-formule' },
  { id: 'incise-droite', description: 'Writes the incise in English order after a quotation (« Je pars », elle dit), drops its -t-, or adds a pronoun after a noun subject.', detectOn: ['a9-construire', 'a9-piege', 'a9-check'], drill: 'd-incise', retest: 'd-incise' },
  { id: 'adverbe-sans-inversion', description: 'Opens a written sentence with peut-être, sans doute, à peine or aussi (= donc) and keeps normal order, or combines que with inversion.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check'], drill: 'd-adverbe', retest: 'd-adverbe' },
  { id: 'lettre-negligee', description: 'Writes the formal email with fewer than three inverted questions, a missing greeting or closing formula, or spoken-register questions.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-lettre', retest: 'd-lettre' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-trois', 'Trois façons de demander', ['les trois formes', 'la tenue de chaque situation', 'le -tu du Québec'], [
    teach('sheet-trois-teach', 'Le sens ne bouge pas, la tenue oui',
      `Tu viens ? Est-ce que tu viens ? Viens-tu ? Les trois demandent la même chose. ${Cap(YESNO_REF)} l'a dit : « ${A119_REFRAME} » En français : « ${A119_REFRAME_FR} » Cette leçon dit quand choisir l'inversion : pour l'écrit soigné, les lettres, les guichets et les formules. EN: same meaning, three outfits; inversion is for careful writing and service.`),
    table('sheet-trois-table', 'Qui, où, quelle forme', ['Situation', 'Forme', 'Exemple'], [
      ['un ami, une amie', 'intonation', 'Tu viens ce soir ?'],
      ['un collègue, un voisin', 'est-ce que', 'Est-ce que tu viens ce soir ?'],
      ['un inconnu, à voix haute', 'intonation ou est-ce que, avec vous', 'Vous partez demain ?'],
      ['une lettre, un courriel officiel', 'inversion', 'Partez-vous demain ?'],
      ['un guichet, un service', 'inversion figée', 'Puis-je vous aider ?'],
      ['un ami, à Québec, à l’oral', 'tu ... -tu (à reconnaître)', 'Tu viens-tu avec nous ?'],
    ]),
    table('sheet-trois-jamais', 'Ce qui ne se mélange pas', ['Faux', 'Juste'], [
      ['Est-ce que viens-tu ce soir ?', 'Est-ce que tu viens ce soir ?'],
      ['Est-ce que vous parlez-vous français ?', 'Est-ce que vous parlez français ?'],
      ['Partez vous demain ?', 'Partez-vous demain ?'],
      ['Tu viens-tu ce soir ? (dans une lettre)', 'Viens-tu ce soir ?'],
    ]),
  ]),
  sheet('sheet-t', 'Le trait d’union et le petit t', ['le trait d’union', 'le -t- entre deux voyelles', 'quand ne rien ajouter'], [
    teach('sheet-t-teach', 'Un pont pour l’oreille',
      "Dans une inversion, un trait d'union relie toujours le verbe et le pronom. Si le verbe finit par une voyelle écrite et que le pronom est il, elle ou on, tu ajoutes -t- entre les deux. Ce t ne veut rien dire : il évite que deux voyelles se touchent. EN: a hyphen always joins verb and pronoun; add -t- between a written vowel and il, elle or on."),
    table('sheet-t-table', 'Avec t, sans t', ['Le verbe finit par', 'Exemple', 'Pourquoi'], [
      ['a', 'Va-t-il à la réunion ?', 'voyelle, puis il'],
      ['e', 'Parle-t-on français ici ?', 'voyelle, puis on'],
      ['a, au futur', 'Viendra-t-elle demain ?', 'le futur finit par a'],
      ['t', 'Est-elle à Montréal ?', 'le t est déjà là'],
      ['d', 'Prend-il le métro ?', 'le d se dit t'],
      ['une consonne, devant tu ou vous', 'Viens-tu ? Partez-vous ?', 'pas de choc de voyelles'],
    ]),
  ]),
  sheet('sheet-complexe', 'Les inversions plus longues', ['les temps composés', 'le sujet nom', 'les mots interrogatifs'], [
    teach('sheet-complexe-teach', 'Trois cas, une seule logique',
      "Aux temps composés, l'auxiliaire passe devant le pronom et le participe reste derrière. Avec un nom sujet, le nom reste devant et un pronom le répète après le verbe. Après un mot interrogatif, tu inverses comme d'habitude. EN: invert the auxiliary; keep a noun subject in front and repeat it; after a question word, invert as usual."),
    table('sheet-complexe-composes', 'Les temps composés', ['Forme', 'Exemple'], [
      ['avoir + pronom + participe', 'Avez-vous déjà mangé ?'],
      ['être + pronom + participe', 'Sont-ils arrivés à l’heure ?'],
      ['a-t-il, a-t-elle', 'A-t-il compris la question ?'],
      ['pronom objet devant', 'L’avez-vous lu ?'],
      ['aller + pronom + infinitif', 'Allez-vous signer le contrat ?'],
    ]),
    table('sheet-complexe-nom', 'Le sujet nom', ['Forme', 'Exemple'], [
      ['nom + verbe-il', 'Le train est-il parti ?'],
      ['nom + verbe-t-elle', 'Votre fille viendra-t-elle ?'],
      ['nom + auxiliaire-ils + participe', 'Les enfants ont-ils mangé ?'],
      ['jamais le nom derrière', 'Viendra votre fille ? (faux)'],
    ]),
    table('sheet-complexe-mots', 'Après un mot interrogatif', ['Mot', 'Avec un pronom', 'Avec un nom'], [
      ['où', 'Où allez-vous ?', 'Où habite votre sœur ? ou Où votre sœur habite-t-elle ?'],
      ['quand', 'Quand partez-vous ?', 'Quand votre fils rentre-t-il ?'],
      ['comment', 'Comment allez-vous ?', 'Comment votre fils va-t-il ?'],
      ['que', 'Que faites-vous ?', 'Que dit le médecin ?'],
      ['pourquoi', 'Pourquoi partez-vous ?', 'Pourquoi Marie part-elle ? (seule forme)'],
    ]),
    teach('sheet-complexe-a120', 'Le mot d’abord',
      `${Cap(QWORDS_REF)} a donné les mots avec est-ce que : « ${A120_REFRAME} » En français : « ${A120_REFRAME_FR} » Cette forme reste juste partout. L'inversion ajoute la tenue de l'écrit : Où allez-vous ? EN: est-ce que after the word stays right everywhere; inversion adds the written outfit.`),
  ]),
  sheet('sheet-services', 'Le je, la négation et les formules', ['puis-je et est-ce que je', 'ne ... pas autour du bloc', 'les formules de service'], [
    teach('sheet-services-teach', 'Trois choses à savoir',
      "Avec je, l'inversion est rare : dis puis-je, dois-je dans une lettre, et est-ce que pour tout le reste. À la négation, ne se place devant le bloc verbe et pronom, pas derrière. Au guichet et dans un courriel, certaines inversions sont des formules toutes faites. EN: puis-je and est-ce que je; ne before the block, pas after; fixed service formulas."),
    table('sheet-services-je', 'Le je', ['Tu veux dire', 'Forme soignée', 'Forme de tous les jours'], [
      ['Can I?', 'Puis-je vous aider ?', 'Est-ce que je peux vous aider ?'],
      ['Must I?', 'Dois-je remplir ce formulaire ?', 'Est-ce que je dois remplir ce formulaire ?'],
      ['Am I speaking loudly enough?', '(pas d’inversion)', 'Est-ce que je parle assez fort ?'],
      ['Should I bring my passport?', '(pas d’inversion)', 'Est-ce que je dois apporter mon passeport ?'],
    ]),
    table('sheet-services-negation', 'La négation', ['Forme', 'Exemple'], [
      ['ne + verbe-pronom + pas', 'Ne viens-tu pas ce soir ?'],
      ["n' devant une voyelle", 'N’avez-vous pas reçu mon message ?'],
      ['avec un nom sujet', 'Le bureau n’est-il pas ouvert le samedi ?'],
      ['la réponse oui', 'Si, je viens.'],
    ]),
    table('sheet-services-formules', 'Les formules de service', ['Formule', 'Où'], [
      ['Que puis-je faire pour vous ?', 'au guichet, au téléphone'],
      ['Voulez-vous laisser un message ?', 'au téléphone'],
      ['Pourriez-vous me rappeler demain matin ?', 'courriel, message'],
      ['Serait-il possible de changer la date ?', 'courriel, lettre'],
      ['Auriez-vous quelques minutes à m’accorder ?', 'courriel, en personne'],
      ['À qui dois-je m’adresser ?', 'lettre, guichet'],
    ]),
  ]),
  sheet('sheet-ecrit', "L'inversion à l'écrit", ['l’incise', 'peut-être, sans doute, à peine, aussi', 'la lettre officielle'], [
    teach('sheet-ecrit-teach', 'Deux inversions sans question',
      "Après une citation, le verbe de parole passe devant le sujet : « Je pars », dit-elle. À l'écrit, peut-être, sans doute, à peine et aussi (qui veut dire donc) font inverser quand ils ouvrent la phrase : Peut-être viendra-t-il. À l'oral, on dit plutôt peut-être qu'il viendra. EN: the incise and the head adverbs invert without asking anything."),
    table('sheet-ecrit-incise', "L'incise", ['Forme', 'Exemple'], [
      ['après la citation', '« Je pars demain », dit-elle.'],
      ['avec le petit t', '« Il reste du café », ajoute-t-elle.'],
      ['au milieu de la citation', '« Demain, dit-il, je commence à huit heures. »'],
      ['au passé composé', '« Bien sûr », a-t-elle répondu.'],
      ['avec un nom, sans pronom', '« C’est fini », dit le médecin.'],
      ['après une question citée', '« Vous venez d’où ? » demande-t-il.'],
    ]),
    table('sheet-ecrit-adverbes', 'En tête de phrase', ['Écrit soigné', 'Oral', 'Neutre'], [
      ['Peut-être viendra-t-il demain.', 'Peut-être qu’il viendra demain.', 'Il viendra peut-être demain.'],
      ['Sans doute a-t-elle raison.', 'Sans doute que tu as raison.', 'Elle a sans doute raison.'],
      ['À peine est-il arrivé que le téléphone a sonné.', '(rare à l’oral)', 'Il venait d’arriver.'],
      ['Aussi a-t-il refusé le poste.', '(rare à l’oral)', 'Il a donc refusé le poste.'],
    ]),
    table('sheet-ecrit-lettre', 'La lettre officielle, en contrôle', ['À vérifier', 'Comment'], [
      ['Trois questions par inversion', 'le verbe, un trait d’union, le pronom'],
      ['Le petit t', 'après une voyelle, devant il, elle, on'],
      ['Le sujet nom', 'le nom devant, le pronom après le verbe'],
      ['Pas de je inversé', 'sauf puis-je et dois-je'],
      ['Pas d’est-ce que mélangé', 'une tenue par question'],
      ['Les formules', 'Madame, Monsieur ; je vous remercie par avance ; je vous prie d’agréer'],
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-21-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-21-carnet': "Léa's diary (act 9), ONE VOICE, one take, Québécois French, read as someone reads their own notebook aloud: the quoted words in a slightly livelier voice, each incise (« dit-elle », « crie le chauffeur ») dropped lower and quicker, the way a reader marks who is speaking without acting it out.",
  'rec-b1-21-incise': "The four incise cards. On card two leave a beat at each middot. On card three the incise sits inside the quotation: drop the voice for « dit-il » and lift it again for the rest of the quote.",
  'rec-b1-21-recit': "The last-train scene (act 9), ONE VOICE, one take, read as an audiobook narrator reads a short story: unhurried, the dialogue lightly voiced, every incise lower and quicker than the quotation around it. No character voices beyond a slight shift for the old man.",
  'rec-b1-21-piege-incise': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-21-cafe': "The email and the coffee machine (act 10), TWO READINGS by ONE VOICE, Swiss French welcome. Hélène's two email sentences are read as written text, careful and even; her two coffee-machine sentences in relaxed everyday speech. The contrast between the two registers is the whole mission.",
  'rec-b1-21-adverbes': "The four adverb cards. Card two holds three versions of one sentence across middots: read the first as written text, the second as relaxed speech, the third neutrally, with a clear beat between them.",
  'rec-b1-21-modele': "The model email to the permit office (act 11), ONE VOICE, one take, read as the writer reads it back before sending: calm and clear, a beat between the greeting, the purpose, each of the three questions, the thanks and the closing formula, so the five moves are audible as five blocks.",
  'rec-b1-21-ecole': "The school letter (act 5), ONE VOICE, one take, Québécois French, read as a school secretary reads a notice to parents: friendly and clear. Every noun-subject question (« Votre enfant participera-t-il ») keeps the noun and the verb in one breath, with no pause before the pronoun.",
  'rec-b1-21-sujet-nom': "The four noun-subject cards. Leave a beat at each middot. The repeated pronoun (« viendra-t-elle ») is light and unstressed: it is grammar, not emphasis.",
  'rec-b1-21-nom-ecoute': "REQUIRED FOR THE EAR MISSION (act 5): nine lines, ONE TAKE, ONE VOICE, in authored order, ordinary question melody. The learner answers questions about who and what, so every noun must be clearly articulated.",
  'rec-b1-21-piege-nom': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-21-accueil-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): nine lines, ONE TAKE, ONE VOICE, a welcome-desk agent in Brussels (Belgian French welcome), polite and efficient, in authored order. The question word at the head of each line is clear; nothing else is stressed.",
  'rec-b1-21-mots': "The four question-word cards. Card one lists five words across middots: a clear beat between them. Card four must sound like an ordinary question, not a correction.",
  'rec-b1-21-negation-ecoute': "REQUIRED FOR THE EAR MISSION (act 7): nine lines, ONE TAKE, TWO VOICES, in authored order. Line 2 (« Si, je viens. ») is the second voice replying to line 1; every other line is the first voice. Negative questions carry a touch of surprise; « Puis-je vous aider ? » is the flat, friendly tone of a shop counter.",
  'rec-b1-21-negation': "The four negation cards, read plainly. On card four « Si » is the whole point: give it its normal, slightly lifted reply intonation, never a shout.",
  'rec-b1-21-piege-je': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-21-service': "The customer's email to the phone company (act 8), ONE VOICE, one take, read as the writer reads it back before sending: calm, precise, a clear beat between the requests. Belgian or Swiss French welcome.",
  'rec-b1-21-formules': "The four formula cards. Card four holds three verbs across middots: a clear beat between them. Card three is a counter clerk's line and must sound like one: warm, routine, unhurried.",
  'rec-b1-21-lettre': "The library's email (act 1), ONE VOICE, one take, Québécois French, read the way a recruiter reads her own email aloud before sending it: clear, warm, unhurried. The five questions keep an ordinary question melody; the hyphenated pronouns (« Êtes-vous », « Faut-il ») are light and never stressed.",
  'rec-b1-21-trois-ecoute': "REQUIRED FOR THE EAR MISSION (act 2): nine lines, ONE TAKE, ONE VOICE, in authored order, conversational speed. Lines 1, 4 and 7 are intonation questions: the rise at the end must be clear. Lines 3, 6 and 8 are inversions: the verb comes first with NO extra stress on the pronoun. Line 9 is Québec « Tu viens-tu avec nous ? », read by a Québécois speaker with the natural, unstressed second tu.",
  'rec-b1-21-trois': "The four register cards. Card one holds three questions across middots: read them with the SAME rising melody and a clear beat between them, because the card is that the meaning does not change.",
  'rec-b1-21-t-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): nine lines, ONE TAKE, ONE VOICE, in authored order, ordinary speed. The inserted t is an ordinary t that simply starts the next syllable (va-TEEL): never lean on it. « Est-elle » and « Prend-il » must sound exactly as natural, because the questions ask whether the learner hears a t there too.",
  'rec-b1-21-pont': "The four -t- cards. Cards two and three hold forms across middots; leave a clear beat. On card four read « prend-il » as prahⁿ-TEEL, so the learner hears the d doing the t's job.",
  'rec-b1-21-piege-t': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-21-grille': "The interview grid and the notes (act 4), ONE VOICE, one take, Québécois French, read as a recruiter reads her own grid: the five numbered questions at question melody, the notes flatter and quicker. « A-t-elle » with a light, unstressed t.",
  'rec-b1-21-auxiliaire': "The four compound-tense cards. Leave a clear beat at each middot. The participle must NOT be stressed more than the auxiliary: the card is where each piece sits, not which one matters.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 21',
  intro: 'You met inversion in A1 as one of three ways to ask, with a closed list of être and avoir forms. This lesson opens the list and says when to use it. Inversion never changes what a question means: it changes what the sentence is wearing. It is the register of letters, service counters, interviews and written stories, and this lesson ends with a formal email that asks its questions by inversion.',
  skill: 'PE',
  grammarAssumed: [YESNO_UNIT, QWORDS_UNIT, FUTUR_UNIT, CONDITIONNEL_UNIT, POLITESSE_UNIT, PASSIF_UNIT],
  grammarIntroduced: [
    'Subject-clitic inversion as a register choice (careful writing, service, formal speech) rather than a question type',
    'Epenthetic -t- generalised to any vowel-final verb form before il, elle and on, in every tense (va-t-il, parle-t-on, viendra-t-elle), and its absence after a final t or d',
    'Inversion in compound tenses and with aller + infinitive: the auxiliary inverts and the participle or infinitive stays behind; object clitics stay before the auxiliary',
    'Complex inversion with a noun subject: the noun stays initial and a resumptive clitic follows the verb (Votre fille viendra-t-elle ?)',
    'Inversion after interrogative words, stylistic inversion of a noun subject after où, quand, comment and que, and the obligatory complex inversion after pourquoi',
    'Negative inversion with ne ... pas around the verb-clitic block',
    'The restricted first-person inversions puis-je and dois-je, with est-ce que for other je questions',
    'Fixed service inversions in speech and writing (Que puis-je faire pour vous ?, Serait-il possible de, Pourriez-vous)',
    'The incise after direct quotations, with simple inversion of a noun subject (« C’est fini », dit le médecin)',
    'Inversion after sentence-initial peut-être, sans doute, à peine and aussi (= donc) in writing, against spoken peut-être que',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu as rencontré l'inversion dans l'A1, comme une des trois façons de poser une question. Cette leçon ouvre la liste et te dit quand la choisir. L'inversion ne change jamais le sens : elle change la tenue. C'est la langue des lettres, des guichets, des entretiens et des récits écrits.",
    minutes: 130,
    difficulty: 3,
    glyph: '-t-',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: INVERSION_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every other B1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, EMAIL_TEXT, MODELE_TEXT, dicteeFor };
