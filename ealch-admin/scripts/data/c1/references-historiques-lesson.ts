// c1.13.l1 « Les références qui comptent » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE: a TEXT
// and a MOVE per act) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of
// C1-BUILD-LOG.md (decisions 1-35; decision 28 sets the home). Structural
// model: b2.31 « Les accents et le français régional »
// (`../b2/francais-regional-*`). Skill CE.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   RECEPTIVE AND EXPLANATORY. The learner meets a reference in an original
//   text, unfolds it (what, when, what it has come to mean), says what
//   invoking it does, and reports contested readings with who holds them,
//   never with a verdict. Every act from 2 to 11 is built around ONE ANCHOR
//   TEXT (about 250 to 330 words, a real genre, « texte original écrit pour
//   la leçon ») and ONE MOVE, in the same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`;
//                          the first question is always « Devine le sens »
//                          (a C1 word inferred from context). Glossary 0 or 1.
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable`, `examples`, `focus` or
//                          `hacks`, linked to a sheet.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, a hidden listening, a
//                          dictation).
//     4. USE IT            « Pour ton explication », always the same
//                          groupDrill shape: a line of the final explanation
//                          built with this act's move against the line a
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
//    1  Le Waterloo du tramway     6  an editorial (scene + reading) · read
//                                     literally, then unfolded; recap of
//                                     b2.31, b2.24, b2.34 by trail position
//    2  1789 et les Lumières       7  a magazine explainer · the Bastille,
//                                     the 4th of August, the Declaration,
//                                     the 14th of July; apocrypha
//    3  Les noms devenus des       6  a business column · Waterloo,
//       leçons                        bérézina, Canossa, Pyrrhus, Austerlitz:
//                                     what the expression keeps and drops
//    4  La laïcité, de 1905 à la   7  a radio column · the 1905 law quoted,
//       loi 21                        Alsace-Moselle, Québec 2019, both camps
//    5  Le 18 juin et Vichy        6  a readers' column · the appeal, Vichy,
//                                     1944 and 1995: two named positions
//    6  L’Algérie : les mots       7  a podcast summary · three names, two
//                                     commemoration dates, the 2005 clause
//    7  Mai 68 et les Trente       6  an op-ed · facts, two readings, the
//       Glorieuses                    comparison and anachronism
//    8  Le Québec et l’Acadie      7  a magazine piece · Je me souviens, the
//                                     Conquest, 1960, 1977, 1980 and 1995,
//                                     1755 and 2003
//    9  La Belgique                6  a Brussels column · 1830, 21 juillet,
//                                     the Congo and the statues, the federal
//                                     state, « un compromis à la belge »
//   10  La Suisse                  6  a 1st of August explainer · 1291, Tell
//                                     as legend, 1815, 1848, 1971, 1990, the
//                                     Röstigraben
//   11  L’Afrique francophone      6  a Dakar column · 1960, the négritude,
//                                     France-Afrique / Françafrique
//   12  Ton explication           11  an editorial using « la nuit du 4
//                                     août » · plan, scenario, TASK, quiz,
//                                     review
//
//   TOTAL 81 missions, 12 acts (6,7,6,7,6,7,6,7,6,6,6,11). Corpus: 170
//   authored rows (.1000-.1195, in twelve act blocks with gaps) plus 15
//   reused rows (6 in seedPlusPacks, 9 Postgres-only in `DB_ONLY_ROWS`). 12
//   anchor readings, 4 hidden listenings, 3 dictations. Quiz: 11 rounds of
//   8. Eleven error triggers, eleven drills, five reference sheets, eleven
//   terms. Chapter artwork: `references-historiques-image-prompts.md`, 12
//   prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Une référence est un raccourci : déplie-la, puis regarde qui s’en
//   sert. »
//   EN: A reference is a shortcut: unfold it, then look at who is using it.
//
//   ONE METAPHOR, THE FOLDED MAP: a whole landscape folded down to one word
//   or date. Unfold it (the facts), then look at the hand that holds it (the
//   use). The map is the same in every hand; the use is not, which is why
//   the lesson never says which hand is right. Rejected candidates: corpus
//   §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    historical references at C1: recognising, unfolding and
//           explaining them; what invoking one does; antonomasia (« un
//           Waterloo »); apocrypha named as apocrypha; legend against fact;
//           the naming of contested events; reporting contested readings
//           with named positions; dating anything called « today ».
//   QUOTES  b2.31’s reframe (act 1, act 11), b2.24’s (act 1), b2.34’s
//           (act 1, act 3), each imported from its corpus, never retyped.
//   LEAVES  pluricentric French and institutions to b2.31; stance and
//           evidence to b2.24; fixed expressions conjugated in a sentence
//           (« franchir le Rubicon ») to b2.34; framing in the press to
//           c1.24; présupposé and irony to c1.20; memorial headwords
//           (« devoir de mémoire », « repentance ») to c1.16; political and
//           social headwords to c1.15.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs. Natural,
//   unsimplified C1 French; English authored on every learner string (`en`,
//   or a final « EN: »), never on an answer. Every `say` is French.
//   Citations by trail position in French, never a raw id. Typographic ’ in
//   every authored French string. Invented outlets, people and places only;
//   real historical figures appear only as history, no living politician.
//   Public-domain or official-text quotations only, verified word for word
//   (corpus §A.7). Images depict no identifiable real person. Mission
//   answer slots are spread by `balanceSlots()`; the quiz by
//   `spreadSlots()`. Contested history: named positions, no verdict.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Loi 21: the Supreme Court of Canada heard the challenge from 23 March
//      2026; no ruling was found on 2026-10-06. Rows 1062 and act 4 say only
//      « En mars 2026, la Cour suprême du Canada a entendu la contestation ».
//      Re-check before publish and add the ruling, dated, if one exists?
//   2. Nine reused rows are Postgres-only (`DB_ONLY_ROWS`), two of them
//      legacy c1 rows with straight apostrophes and no ipa
//      (fr.c1.nuances-et-registres.027, .041). They need the decision 13
//      typography edit at the import. Keep them, or swap for authored rows?
//   3. « Un Waterloo » as a common noun: press usage is plain, but no French
//      dictionary entry was confirmed online (the Académie has « bérézina »,
//      Larousse « victoire à la Pyrrhus »). Accept on usage?
//   4. Contested acts (4, 5, 6, 8, 9): Vichy (1944 ordonnance vs the 1995
//      recognition), Algeria naming and the 19 March / 5 December dates,
//      the 2005 « rôle positif » clause, Loi 21, the Conquest, the Leopold II
//      statues. Each gives two positions and no verdict. Approve the
//      framing, or drop any act's contested half?
//   5. The 1995 Vél d’Hiv recognition is named with « le président Chirac »
//      (deceased 2019) and paraphrased, never quoted. Acceptable?
//   6. Rubric: six criteria, 20 points, as c1.24 (decision 14). Keep?
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
  TRAMWAY_TEXT, REVOLUTION_TEXT, FUSION_TEXT, LAICITE_TEXT, JUIN_TEXT, ALGERIE_TEXT, MAI68_TEXT,
  SOUVIENS_TEXT, BELGIQUE_TEXT, SUISSE_TEXT, AFRIQUE_TEXT, NUIT_TEXT,
  B231_REFRAME, B224_REFRAME, B234_REFRAME,
  REGIONAL_UNIT, CRITIQUE_UNIT, PROVERBES_UNIT,
  REGIONAL_REF, CRITIQUE_REF, PROVERBES_REF, PRESSE_REF,
} from './references-historiques-corpus.ts';
import { REFERENCES_HISTORIQUES_TERMS } from './references-historiques-terms.ts';

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
  if (!r) throw new Error(`c1.13: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.13: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.13: no authored respell on ${id}`);
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

/** THE « USE IT » BEAT: the act's one tool for the graded explanation. */
function pourTonExplication(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton explication', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE WATERLOO DU TRAMWAY
 *
 *  The problem: the learner summarises an editorial for a client and reads
 *  « Le Waterloo du tramway » as a place on the route. Then the recap of
 *  the three B2 lessons it builds on, by trail position, rows reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une revue de presse pour une cliente', frSub: 'L’agence Tessère, lundi matin',
  setting: { place: 'L’agence de traduction Tessère, rue Saint-Denis', city: 'Montréal', time: '9 h 10', ambience: 'un écran, un café, un journal de quartier ouvert sur le bureau' },
  beats: [
    { kind: 'narration', text: 'Lundi, 9 h 10, à l’agence de traduction Tessère, à Montréal. Une cliente d’Anvers veut un résumé en anglais de la presse locale sur le projet de tramway du Val-Fleuri. Tu as l’éditorial de L’Écho du Val-Fleuri sous les yeux.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Hugues, ton chef d’équipe', fr: 'La cliente veut une phrase par article. Commence par l’éditorial.', en: 'The client wants one sentence per article. Start with the editorial.', respell: '[la klee-YAHⁿT veu ün FRAHZ par ar-TEEKL | ko-MAHⁿSS par lay-dee-to-RYAL]', stage: 'Il a la réunion à dix heures.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Le titre, c’est « Le Waterloo du tramway ». Waterloo, c’est en Belgique, je crois.', en: 'The headline is "The tramway’s Waterloo". Waterloo is in Belgium, I think.', respell: '[luh TEETR seh luh va-tehr-LOH dü tramm-WEH | va-tehr-LOH seh-tahⁿ bel-ZHEEK zhuh KRWA]', stage: 'Tu cherches le nom sur une carte.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Hugues', fr: 'La cliente est belge. Elle va lire ta phrase avec attention.', en: 'The client is Belgian. She will read your sentence carefully.', respell: '[la klee-YAHⁿT eh BELZH | el va LEER ta FRAHZ a-vek a-tahⁿ-SYOHⁿ]', stage: 'Il sourit, sans rien ajouter.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase envoies-tu à la cliente pour résumer l’éditorial ?', size: 'lg',
      options: [
        { fr: src(E(1002)).fr, respell: rsOf(E(1002)), en: src(E(1002)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1001)).fr, respell: rsOf(E(1001)), en: src(E(1001)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'La cliente répond en deux lignes : elle avait compris le jeu de mots, et elle note que l’éditorialiste tient le projet pour perdu. Elle demande la suite de la revue.',
        breaks: 'La cliente répond tout de suite : le tramway de Montréal ne passera jamais par Waterloo, à une soixantaine de kilomètres de chez elle. Elle demande qui a relu le résumé.',
      },
    },
    {
      kind: 'break', heading: 'Waterloo n’est pas une adresse',
      body: `Waterloo est bien en Belgique. Mais ici, le mot vient du 18 juin 1815 : la dernière défaite de Napoléon. ${Cap(PROVERBES_REF)} t’a appris les expressions figées ; une référence, elle, doit d’abord être dépliée. EN: Here Waterloo means a final defeat.`,
      wrong: { fr: src(E(1002)).fr, ipa: ipaOf(E(1002)), respell: rsOf(E(1002)), en: src(E(1002)).en },
      right: { fr: src(E(1001)).fr, ipa: ipaOf(E(1001)), respell: rsOf(E(1001)), en: src(E(1001)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à reconnaître les références que la presse et les discours tiennent pour acquises, à les déplier, et à dire ce que fait celui qui les invoque. À la fin, tu expliqueras par écrit une référence tirée d’un éditorial.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['reference', 'deplier'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Déplier une référence française', s: 'Actes 2 à 7 : 1789, Waterloo, 1905, le 18 juin, l’Algérie, Mai 68' },
    { t: 'Lire les références de la francophonie', s: 'Actes 8 à 11 : le Québec et l’Acadie, la Belgique, la Suisse, l’Afrique' },
    { t: 'Rapporter une histoire disputée sans trancher', s: 'Actes 4, 5, 6, 8 et 9 : deux positions, qui les défend' },
    { t: 'Expliquer une référence par écrit', s: 'Acte 12 : de 250 à 400 mots sur un éditorial' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'L’éditorial', frSub: 'Le Waterloo du tramway',
  text: TRAMWAY_TEXT,
  glossary: [
    { word: 'en catimini', en: 'on the quiet, discreetly', note: 'En cachette, sans attirer l’attention.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « Ce n’est pas un recul, c’est une déroute. » Que veut dire « une déroute » ?', a: 'Une défaite complète, une fuite en désordre : bien plus qu’un simple recul.' },
    { q: 'Que s’est-il passé, concrètement, mardi soir ?', a: 'Le conseil a renoncé au tramway du Val-Fleuri ; officiellement, le projet est « mis en pause ».' },
    { q: 'Que veut dire « le Waterloo du tramway » dans ce texte ?', a: 'Une défaite écrasante et définitive, comme celle de Napoléon à Waterloo en 1815. Rien à voir avec la ville belge comme lieu.' },
    { q: 'Comment l’éditorialiste file-t-il l’image de la bataille ?', a: 'Il parle de « déroute », de « bataille la plus importante », de terrain mal choisi, et finit sur Napoléon, qui « ne parlait pas de pause ».' },
    { q: 'Qui invoque la référence, et pour dire quoi ?', a: 'La rédaction d’un journal qui avait défendu le projet : elle refuse le mot « pause » et affirme que le projet est perdu.' },
  ],
  audio: REC('rec-c1-13-tramway'), say: REFRAME, terms: ['reference', 'invoquer'],
};

/** The recap: one group per lesson it builds on, rows reused by id. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Trois leçons du B2, un rappel',
  groups: [
    grp(Cap(REGIONAL_REF), [
      it('fr.b2.quebec-et-francophonie.1013', 'plusieurs centres'),
      it('fr.b2.quebec-et-francophonie.1024', 'où vit la francophonie'),
    ], chk('Pourquoi cette leçon a-t-elle des actes sur le Québec, la Belgique, la Suisse et l’Afrique ?', ['Parce que chaque centre de la francophonie a ses propres références.', 'Parce que la France les a toutes inventées.'], 0,
      `${Cap(REGIONAL_REF)} disait : « ${B231_REFRAME} » Les dates aussi disent d’où l’on vient. EN: each centre has its own references.`)),
    grp(Cap(CRITIQUE_REF), [
      it('fr.b2.strategies-de-comprehension.1407', 'la question du B2'),
      it('fr.b2.strategies-de-comprehension.1413', 'la loupe du B2'),
    ], chk('Au B2, tu jugeais surtout...', ['ce qu’un texte affirme et ce qui le prouve', 'les dates d’un texte'], 0,
      `« ${B224_REFRAME} » Ici, une référence ne prouve rien : elle suggère. Tu demandes qui l’invoque. EN: a reference suggests, it proves nothing.`)),
    grp(Cap(PROVERBES_REF), [
      it('fr.b2.expressions-imagees.1606', 'proverbe et expression figée'),
    ], chk('« Franchir le Rubicon » et « un Waterloo » : quelle différence ?', ['La première se conjugue comme une expression figée ; la seconde est un nom propre devenu nom commun.', 'Aucune : ce sont deux proverbes.'], 0,
      `${Cap(PROVERBES_REF)} disait : « ${B234_REFRAME} » Un Waterloo, lui, prend un article et se déplie. EN: an expression is conjugated; a reference is unfolded.`)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['reference', 'antonomase'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Tu résumes la presse pour une cliente', fr: src(E(1004)).fr, en: src(E(1004)).en },
    { situation: 'Un collègue cite une date en réunion', fr: src(E(1005)).fr, en: src(E(1005)).en },
    { situation: 'Au TCF ou au TEF, un article plein de références', fr: src(E(1006)).fr, en: src(E(1006)).en },
    { situation: 'Une discussion qui s’échauffe sur l’histoire', fr: src(E(1010)).fr, en: src(E(1010)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['deplier', 'invoquer'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le titre', '« Le Waterloo du tramway » veut dire que le tramway...', ['passe par la Belgique', 'a subi une défaite totale', 'a été inauguré un 18 juin'], 1,
    'Waterloo, 1815 : la défaite finale de Napoléon. Le mot garde ce seul trait. EN: a final defeat.'),
  ctl('La méthode', 'Devant une référence, tu commences par...', ['la déplier : quoi, quand, ce qu’elle est devenue', 'dire si l’auteur a raison'], 0,
    'On déplie avant de juger, sinon on juge un mot qu’on n’a pas lu. EN: unfold before judging.'),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['un éditorial sur un tramway', 'l’explication d’une référence tirée d’un éditorial', 'une biographie de Napoléon'], 1,
    'De 250 à 400 mots : ce que la référence contient, ce qu’elle fait dans le texte, ses limites. EN: unfold it, its use, its limits.'),
], ['reference', 'deplier']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le Waterloo du tramway',
    opener: {
      line: 'Un titre parle du « Waterloo du tramway » : ici tu découvres qu’une référence se déplie avant de se traduire. EN: A headline speaks of the tramway’s Waterloo: here you find that a reference is unfolded before it is translated.',
      imageRef: 'lessons/references-historiques/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’une référence est un raccourci, et qu’il faut la déplier avant d’en parler. EN: You know a reference is a shortcut that must be unfolded before you talk about it.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — 1789 ET LES LUMIÈRES
 *
 *  TEXT: a magazine explainer on why everyone quotes 1789. MOVE: unfold the
 *  four references of 1789 and say what invoking each one promises; quote
 *  an apocryphal line as apocryphal.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Pourquoi tout le monde cite 1789', frSub: 'Le Mensuel des Idées',
  text: REVOLUTION_TEXT,
  glossary: [
    { word: 'pis-aller', en: 'last resort, makeshift solution', note: 'Ce qu’on fait faute de mieux.' },
  ],
  questions: [
    { q: 'Devine le sens : « la fête nationale ménage les deux lectures ». Que veut dire « ménager » ici ?', a: 'Respecter, laisser de la place à : la fête ne choisit pas entre les deux lectures.' },
    { q: 'Qu’est-ce qu’un syndicat promet quand il réclame « un nouveau 1789 » ?', a: 'Une rupture, pas un simple ajustement.' },
    { q: 'Que se passe-t-il le 14 juillet, la nuit du 4 août et le 26 août 1789 ?', a: 'La prise de la Bastille ; l’abolition des privilèges ; l’adoption de la Déclaration des droits de l’homme et du citoyen.' },
    { q: 'Quelles sont les deux lectures de la Révolution que cite le texte ?', a: 'Elle fonde nos droits, ou elle est indissociable de la Terreur de 1793-1794.' },
    { q: 'Que commémore le 14 juillet, selon le texte ?', a: 'La loi de 1880 ne tranche pas : la prise de la Bastille et la fête de la Fédération de 1790.' },
    { q: 'Que prouve la citation de Rousseau ?', a: 'Que la phrase sur la brioche est prêtée à une princesse sans nom, avant l’arrivée de Marie-Antoinette en France : l’attribution à la reine est apocryphe.' },
  ],
  audio: REC('rec-c1-13-revolution'), say: REFRAME, terms: ['deplier', 'lecture'],
};

const A2_REPERES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-reperes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-france',
  title: 'Quatre références de 1789', frSub: 'Ce qu’elles contiennent, ce qu’elles promettent',
  hint: 'Quatre cartes. Déplie, puis regarde l’usage.',
  audio: REC('rec-c1-13-reperes-1789'), say: REFRAME, terms: ['deplier', 'invoquer'],
  cards: [
    { head: 'La prise de la Bastille', label: '14 juillet 1789', fr: src(E(1023)).fr, sub: rsOf(E(1023)),
      body: 'Une forteresse royale servant de prison tombe : c’est le symbole d’un pouvoir arbitraire qui chute. Prendre la Bastille, aujourd’hui, c’est attaquer un symbole. EN: attacking a symbol of power.' },
    { head: 'La nuit du 4 août', label: '4 août 1789', fr: src(E(1020)).fr, sub: rsOf(E(1020)),
      body: 'Les députés abolissent les privilèges en une nuit. Invoquer cette nuit, c’est saluer un renoncement volontaire à des avantages. EN: giving up privileges of one’s own accord.' },
    { head: 'La Déclaration', label: '26 août 1789', fr: src(E(1017)).fr, sub: rsOf(E(1017)),
      body: 'L’article premier de la Déclaration des droits de l’homme et du citoyen. On la cite pour fonder un droit, rarement pour la discuter. EN: quoted to ground a right.' },
    { head: 'Le 14 juillet', label: 'loi de 1880', fr: src(E(1018)).fr, sub: rsOf(E(1018)),
      body: 'La fête nationale ne choisit pas entre la Bastille et la fête de la Fédération : une prise d’assaut ou une concorde. EN: the national day keeps both readings.' },
  ],
};

const A2_INVOQUER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-invoquer', layer: 'core', size: 'lg',
  title: 'Ce que promet chaque référence', frSub: 'Trois discours, trois usages',
  groups: [
    grp('Une entreprise, un syndicat, une mairie', [
      free('« Il faut un nouveau 1789 dans cette maison. »', '"This house needs a new 1789."', 'un délégué syndical'),
      free('« Nous allons prendre la Bastille des tarifs bancaires. »', '"We are going to storm the Bastille of bank charges."', 'une association de consommateurs'),
      free('« Finis les privilèges : voici notre nuit du 4 août. »', '"No more privileges: here is our night of 4 August."', 'un maire'),
    ], chk('Le délégué qui réclame « un nouveau 1789 » promet...', ['une rupture complète', 'une petite réforme', 'une fête'], 0,
      'Un « nouveau 1789 » annonce un changement de régime, pas un ajustement. EN: a break, not an adjustment.')),
    grp('La lecture choisie', [
      it(E(1022), 'deux mémoires'),
      it(E(1024), 'la règle'),
    ], chk('Un discours invoque 1789 pour défendre l’égalité des droits. Il choisit...', ['une lecture de la Révolution parmi d’autres', 'la seule lecture possible'], 0,
      'D’autres retiennent aussi la Terreur. Tu nommes la lecture choisie, sans la trancher. EN: one reading among others.')),
    ctl('Ancien Régime', 'Un patron annonce « la fin de l’Ancien Régime » dans son entreprise. Il dit que...', ['l’ancien système a fait son temps', 'l’entreprise date d’avant 1789'], 0,
      'L’Ancien Régime désigne ici un système jugé dépassé. EN: a system that has had its day.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['invoquer', 'lecture'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true, sheetId: 'sheet-noms',
  title: 'Six citations mal attribuées', frSub: 'L’apocryphe',
  rule: {
    title: 'On prête, on n’affirme pas',
    body: 'Une phrase attribuée sans preuve se cite avec « on prête à… » ou « la formule attribuée à… ». Une phrase vérifiée se cite avec sa source. EN: an unproven line is « attributed »; a verified one comes with its source.',
  },
  cards: [
    { promptLabel: 'la brioche donnée à la reine', promptSound: 'Marie-Antoinette a dit : « Qu’ils mangent de la brioche. »', fr: src(E(1027)).fr, ipa: ipaOf(E(1027)), tip: 'Rousseau écrit ces lignes avant qu’elle n’arrive en France. EN: Rousseau wrote this before she reached France.' },
    { promptLabel: 'une attribution présentée comme un fait', promptSound: 'Tout le monde sait que Marie-Antoinette méprisait le peuple : elle l’a dit.', fr: src(E(1028)).fr, ipa: ipaOf(E(1028)), tip: 'Une phrase apocryphe ne prouve rien sur celle à qui on la prête. EN: an apocryphal line proves nothing.' },
    { promptLabel: 'Louis XIV cité comme une source', promptSound: 'Louis XIV a déclaré au Parlement : « L’État, c’est moi. »', fr: src(E(1030)).fr, ipa: ipaOf(E(1030)), tip: 'La formule n’apparaît dans les imprimés qu’en 1791. EN: first in print in 1791.' },
    { promptLabel: 'la règle oubliée', promptSound: 'Comme l’a dit Louis XIV, l’État, c’est lui.', fr: src(E(1031)).fr, ipa: ipaOf(E(1031)), tip: '« On prête à Louis XIV la formule… » : la prudence est dans la tournure. EN: the caution is in the wording.' },
    { promptLabel: 'une vraie citation traitée comme une légende', promptSound: 'L’article premier de la Déclaration, c’est une légende.', fr: src(E(1017)).fr, ipa: ipaOf(E(1017)), tip: 'Ce texte est vérifiable : cite-le avec sa source, l’article premier de 1789. EN: verifiable, so cite it.' },
    { promptLabel: 'le terme confondu', promptSound: 'C’est une citation apocalyptique.', fr: src(E(1029)).fr, ipa: ipaOf(E(1029)), tip: 'Apocryphe : d’attribution douteuse. Apocalyptique : qui annonce une catastrophe. EN: apocryphal, not apocalyptic.' },
  ],
  drill: [
    { promptSay: 'On ... à Louis XIV la formule « L’État, c’est moi ».', opts: ['prête', 'doit'], correct: 0 },
    { promptSay: 'Une citation sans preuve d’attribution est ... .', opts: ['apocryphe', 'officielle', 'littérale'], correct: 0 },
    { promptSay: 'Rousseau parle d’« une grande princesse » ... la nommer.', opts: ['après', 'sans'], correct: 1 },
    { promptSay: 'L’article premier de 1789 se cite avec sa ... .', opts: ['légende', 'source'], correct: 1 },
    { promptSay: 'La formule attribuée à Louis XIV apparaît dans les imprimés en ... .', opts: ['1655', '1715', '1791'], correct: 2 },
    { promptSay: 'On attribue souvent la brioche à Marie-Antoinette, à ... .', opts: ['tort', 'raison'], correct: 0 },
    { promptSay: 'Pour une phrase douteuse, j’écris : « la formule ... à Louis XIV ».', opts: ['prouvée', 'attribuée'], correct: 1 },
    { promptSay: 'Les hommes naissent et demeurent libres et égaux en ... .', opts: ['devoirs', 'droits', 'lois'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'On prête, on n’affirme pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Six citations mal traitées' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-13-piege-apocryphe'), say: REFRAME, terms: ['apocryphe'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a2-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'Trois phrases de l’acte',
  itemIds: dicteeFor(2),
  audio: AUDIO, say: REFRAME, terms: ['apocryphe'],
};

const A2_EXPLICATION = pourTonExplication('a2-explication', 'Déplier 1789', [
  grp('Deux phrases sur « un nouveau 1789 »', [
    free('L’auteur parle de la Révolution française.', 'The writer is talking about the French Revolution.', 'le sujet, rien de plus'),
    free('En réclamant « un nouveau 1789 », l’auteur promet une rupture et retient la lecture des droits, pas celle de la Terreur.', 'By calling for "a new 1789", the writer promises a break and keeps the reading of rights, not that of the Terror.', 'déplier, puis l’usage'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Elle déplie la référence et dit ce que l’auteur en fait. EN: unfold, then the use.')),
  grp('La phrase de ton explication', [
    it(E(1025), 'ce que promet la date'),
    it(E(1031), 'une citation douteuse'),
  ], chk('Tu cites « L’État, c’est moi ». Tu écris...', ['« la formule que l’on prête à Louis XIV »', '« comme l’a déclaré Louis XIV »'], 0,
    'Une citation apocryphe se prête, elle ne s’affirme pas. EN: attribute, do not assert.')),
], ['invoquer', 'apocryphe']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La nuit du 4 août', 'Invoquer « une nuit du 4 août », c’est saluer...', ['un renoncement volontaire à des privilèges', 'une émeute', 'une victoire militaire'], 0,
    'Le 4 août 1789, les députés abolissent les privilèges. EN: giving up privileges.'),
  ctl('La brioche', '« Qu’ils mangent de la brioche » est...', ['une phrase prouvée de Marie-Antoinette', 'une phrase que Rousseau prête à une princesse sans nom'], 1,
    'L’attribution à la reine est apocryphe. EN: apocryphal.'),
  ctl('Le 14 juillet', 'La fête nationale française commémore...', ['seulement la prise de la Bastille', 'la Bastille et la fête de la Fédération, sans trancher'], 1,
    'La loi de 1880 ne précise pas : elle ménage les deux. EN: it keeps both.'),
], ['deplier', 'apocryphe']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: '1789 et les Lumières',
    opener: {
      line: 'Un syndicat réclame « un nouveau 1789 » : ici tu déplies la Révolution, et tu reconnais les phrases qu’on lui prête à tort. EN: A union demands a new 1789: here you unfold the Revolution and spot the lines wrongly credited to it.',
      imageRef: 'lessons/references-historiques/act02.jpg',
    },
    sections: [],
    milestone: 'Tu déplies les références de 1789 et tu cites une phrase apocryphe comme telle. EN: You unfold the references of 1789 and quote an apocryphal line as one.',
    estScreens: 38, restPoints: ['a2-reperes', 'a2-piege'],
  },
  sections: [A2_LECTURE, A2_REPERES, A2_INVOQUER, A2_PIEGE, A2_DICTEE, A2_EXPLICATION, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LES NOMS DEVENUS DES LEÇONS
 *
 *  TEXT: a business column on a failed merger, full of historical images.
 *  MOVE: unfold an antonomasia and say what it keeps and drops.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Une bérézina, vraiment ?', frSub: 'Lettre Horizon',
  text: FUSION_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « ricane un ancien cadre ». Que veut dire « ricaner » ?', a: 'Rire de façon moqueuse, un peu méchante.' },
    { q: 'Quelles images historiques le chroniqueur relève-t-il ?', a: 'Le Waterloo de Verdal, une bérézina boursière, aller à Canossa, une victoire à la Pyrrhus.' },
    { q: 'Que veut dire « il est allé à Canossa » pour le directeur général ?', a: 'Il s’est soumis à l’adversaire, il a accepté les conditions qu’il avait juré de refuser.' },
    { q: 'Pourquoi Hélior a-t-elle remporté « une victoire à la Pyrrhus » ?', a: 'Elle a gagné, mais au prix de deux ans de procédures et d’une dette record.' },
    { q: 'Qu’est-ce que la langue a oublié de la Bérézina, selon le texte ?', a: 'Que les historiens y voient un succès tactique : l’armée a échappé à l’encerclement. La langue n’a gardé que le désastre.' },
    { q: 'Le chroniqueur reprend-il l’image du Waterloo ?', a: 'Pas tout à fait : l’entreprise existe toujours. Il nuance l’image au lieu de la répéter.' },
  ],
  audio: REC('rec-c1-13-fusion'), say: REFRAME, terms: ['antonomase', 'deplier'],
};

const A3_NOMS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-noms', layer: 'core', sheetId: 'sheet-noms',
  title: 'Six noms devenus des leçons',
  cols: ['Image', 'L’événement', 'Ce qu’elle garde'],
  rows: [
    { cells: ['un Waterloo', '18 juin 1815', 'une défaite finale'], say: src(E(1035)).fr,
      detail: { title: 'Waterloo', body: 'La dernière bataille de Napoléon. L’image dit une défaite totale, après laquelle il n’y a plus de retour. EN: a final, crushing defeat.', say: src(E(1036)).fr } },
    { cells: ['une bérézina', 'novembre 1812', 'un désastre'], say: src(E(1037)).fr,
      detail: { title: 'La Bérézina', body: 'Une rivière franchie en pleine retraite de Russie, au prix de lourdes pertes. Les historiens y voient pourtant un succès tactique. EN: the language kept only the losses.', say: src(E(1039)).fr } },
    { cells: ['aller à Canossa', 'janvier 1077', 'se soumettre'], say: src(E(1040)).fr,
      detail: { title: 'Canossa', body: 'L’empereur Henri IV attend trois jours le pape dans la neige pour être pardonné. L’image dit l’humiliation devant l’adversaire. EN: to humble oneself before an opponent.', say: src(E(1041)).fr } },
    { cells: ['une victoire à la Pyrrhus', '280-279 av. J.-C.', 'un succès ruineux'], say: src(E(1042)).fr,
      detail: { title: 'Pyrrhus', body: 'Le roi Pyrrhus bat les Romains mais perd tant d’hommes que sa victoire ressemble à une défaite. EN: a win that costs too much.', say: src(E(1043)).fr } },
    { cells: ['un Austerlitz', '2 décembre 1805', 'une victoire éclatante'], say: src(E(1048)).fr,
      detail: { title: 'Austerlitz', body: 'L’une des plus célèbres victoires de Napoléon. L’image, plus rare que Waterloo, dit un triomphe. EN: a brilliant victory.', say: 'Pour son équipe, ce match fut un Austerlitz.' } },
    { cells: ['franchir le Rubicon', 'César, 49 av. J.-C.', 'une décision sans retour'], say: src(E(1046)).fr,
      detail: { title: 'Le Rubicon', body: `C’est le genre d’expression figée que ${PROVERBES_REF} t’a appris : elle se conjugue. Waterloo, lui, se déplie comme un nom. EN: an expression you conjugate, unlike a name.`, say: 'Elle a franchi le Rubicon en démissionnant.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['antonomase'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trier', layer: 'core', size: 'lg',
  title: 'Quelle image pour quelle situation', frSub: 'Quatre situations nouvelles',
  groups: [
    grp('Quatre situations', [
      free('Le club gagne la finale, mais trois joueurs clés sont blessés pour la saison.', 'The club wins the final, but three key players are injured for the season.', 'gagner trop cher'),
      free('Après des mois de refus, la ministre accepte publiquement les conditions des syndicats.', 'After months of refusals, the minister publicly accepts the unions’ conditions.', 'céder devant l’adversaire'),
      free('Le parti perd tous ses sièges et sa direction démissionne le soir même.', 'The party loses all its seats and its leadership resigns that very evening.', 'une défaite sans retour'),
    ], chk('Le club qui gagne la finale mais perd ses meilleurs joueurs a remporté...', ['une victoire à la Pyrrhus', 'son Waterloo', 'un Canossa'], 0,
      'Une victoire qui coûte presque autant qu’une défaite. EN: a Pyrrhic victory.')),
    grp('Ce que garde l’image', [
      it(E(1045), 'le procédé'),
      it(E(1047), 'la règle'),
    ], chk('« La saison tourne à la bérézina. » L’image garde...', ['les pertes, et oublie le succès tactique de 1812', 'tout ce qui s’est passé en 1812'], 0,
      'Un nom devenu leçon ne garde qu’un trait de l’événement. EN: one feature only.')),
    ctl('Canossa', '« Je n’irai pas à Canossa », dit un dirigeant. Il refuse...', ['de voyager en Italie', 'de s’humilier devant son adversaire'], 1,
      'Canossa, 1077 : l’empereur demande pardon au pape. EN: he refuses to submit.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['antonomase'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lectures trop rapides d’une image',
  errors: [
    { wrong: 'Verdal a vécu son Waterloo : elle a fermé.', right: 'On parle du Waterloo de Verdal, mais l’entreprise existe toujours : l’image exagère.',
      why: 'Normal : l’image est forte, on la reprend. Vérifie qu’elle colle aux faits du texte. EN: check the image against the facts.' },
    { wrong: 'La Bérézina a été une défaite totale pour Napoléon.', right: 'L’expression dit un désastre ; les historiens voient dans le passage un succès tactique.',
      why: 'On croit que la langue raconte l’histoire. Elle n’en garde qu’un trait. EN: the expression simplifies.' },
    { wrong: 'Aller à Canossa, c’est aller en Italie.', right: 'Aller à Canossa, c’est s’humilier devant son adversaire.',
      why: 'Canossa est bien un lieu italien, mais l’image renvoie à 1077 et au pardon demandé au pape. EN: the place stands for the event.' },
    { wrong: 'Une victoire à la Pyrrhus est une belle victoire.', right: 'Une victoire à la Pyrrhus coûte si cher qu’elle ressemble à une défaite.',
      why: 'Le mot « victoire » trompe : tout est dans le prix payé. EN: the word victory misleads.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['antonomase', 'deplier'],
};

const A3_EXPLICATION = pourTonExplication('a3-explication', 'Ce que l’image garde', [
  grp('Deux phrases sur « une bérézina boursière »', [
    free('L’analyste dit que c’est une bérézina.', 'The analyst says it is a bérézina.', 'répété, pas déplié'),
    free('L’analyste parle de « bérézina » : l’image de 1812 retient les pertes, et elle oublie que l’armée a fini par passer.', 'The analyst speaks of a "bérézina": the image of 1812 keeps the losses and forgets that the army got across in the end.', 'déplié, puis nuancé'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Elle déplie l’image et dit ce qu’elle laisse de côté. EN: unfold, then what it drops.')),
  grp('La phrase de ton explication', [
    it(E(1047), 'ce que garde l’image'),
    it(E(1049), 'vérifier avant de reprendre'),
  ], chk('Le chroniqueur conclut que Verdal n’a pas vraiment vécu son Waterloo. Tu écris...', ['qu’il nuance l’image au lieu de la reprendre', 'qu’il se contredit'], 0,
    'Mettre une image à l’épreuve des faits, c’est la nuancer. EN: testing an image is qualifying it.')),
], ['antonomase', 'lecture']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’antonomase', '« Un Waterloo », « une bérézina » : ce sont...', ['des noms propres devenus noms communs', 'des proverbes'], 0,
    'Un lieu de bataille devient un nom commun. EN: proper names used as common nouns.'),
  ctl('Le trait gardé', 'Une victoire à la Pyrrhus, c’est...', ['une victoire facile', 'une victoire payée trop cher', 'une défaite déguisée en victoire'], 1,
    'Pyrrhus gagne, mais y perd une grande partie de son armée. EN: won at too high a cost.'),
  ctl('La prudence', 'Avant de reprendre une image historique, tu vérifies...', ['qu’elle dit bien ce que tu veux dire', 'qu’elle est assez ancienne'], 0,
    'L’image ne garde qu’un trait : il doit être le bon. EN: check it fits.'),
], ['antonomase']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les noms devenus des leçons',
    opener: {
      line: 'Waterloo, Canossa, la Bérézina : ici tu déplies les noms de lieux devenus des mots, et tu vois ce qu’ils oublient. EN: Waterloo, Canossa, the Berezina: here you unfold place names that became words, and see what they forget.',
      imageRef: 'lessons/references-historiques/act03.jpg',
    },
    sections: [],
    milestone: 'Tu déplies une image historique et tu dis quel trait elle garde. EN: You unfold a historical image and say which feature it keeps.',
    estScreens: 32, restPoints: ['a3-noms'],
  },
  sections: [A3_LECTURE, A3_NOMS, A3_TRIER, A3_ERREURS, A3_EXPLICATION, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA LAÏCITÉ, DE 1905 À LA LOI 21
 *
 *  TEXT: a radio column comparing the French law of 1905 and Québec’s 2019
 *  law. MOVE: report both camps of a contested law, and ask « which
 *  laïcité? » rather than « for or against? ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Le même mot, deux histoires', frSub: 'Radio Passerelle',
  text: LAICITE_TEXT,
  glossary: [
    { word: 'disposition de dérogation', en: 'notwithstanding clause', note: 'Un article de la Constitution canadienne qui permet à une loi de s’appliquer malgré certains droits des chartes.' },
  ],
  questions: [
    { q: 'Devine le sens : « la soustrait à certains articles des chartes ». Que veut dire « soustraire » ici ?', a: 'Mettre à l’abri de, faire échapper à : la loi échappe au contrôle de ces articles.' },
    { q: 'Que disent les articles 1 et 2 de la loi de 1905 ?', a: 'La République assure la liberté de conscience ; elle ne reconnaît, ne salarie ni ne subventionne aucun culte.' },
    { q: 'Où la loi de 1905 ne s’applique-t-elle pas, et pourquoi ?', a: 'En Alsace et en Moselle, allemandes en 1905 : un régime des cultes antérieur y est resté en vigueur.' },
    { q: 'Que fait la loi québécoise de 2019 ?', a: 'Elle interdit le port de signes religieux à certains employés de l’État en position d’autorité, dont les enseignants du public.' },
    { q: 'Quels arguments donnent ses défenseurs et ses opposants ?', a: 'Défenseurs : la neutralité de l’État, le prolongement de la Révolution tranquille. Opposants : la liberté de religion de minorités, des carrières fermées à des femmes voilées.' },
    { q: 'Quelle question la chroniqueuse propose-t-elle de poser ?', a: 'Non pas « pour ou contre la laïcité ? », mais « quelle laïcité ce texte défend-il ? ».' },
  ],
  audio: REC('rec-c1-13-laicite'), say: REFRAME, terms: ['positions', 'dater'],
};

const A4_TEXTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-textes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-memoires',
  title: 'Deux lois, un mot', frSub: 'Ce que disent les textes',
  hint: 'Quatre cartes. Les deux premières citent la loi mot pour mot.',
  audio: REC('rec-c1-13-textes'), say: REFRAME, terms: ['positions', 'dater'],
  cards: [
    { head: 'La liberté de conscience', label: 'loi de 1905, article 1', fr: src(E(1052)).fr, sub: rsOf(E(1052)),
      body: 'La première phrase de la loi du 9 décembre 1905. Ceux qui invoquent 1905 pour défendre une liberté citent souvent celle-ci. EN: the first sentence of the 1905 law.' },
    { head: 'La séparation', label: 'loi de 1905, article 2', fr: src(E(1053)).fr, sub: rsOf(E(1053)),
      body: 'L’État ne finance plus les cultes. Ceux qui invoquent 1905 pour défendre une neutralité stricte citent souvent celle-là. EN: the State funds no religion.' },
    { head: 'L’exception', label: 'Alsace et Moselle', fr: src(E(1056)).fr, sub: rsOf(E(1056)),
      body: 'Allemands en 1905, ces territoires ont gardé un régime antérieur à la loi. Un détail qui rappelle qu’une référence a ses angles morts. EN: the 1905 law does not apply there.' },
    { head: 'Le Québec', label: 'juin 2019', fr: src(E(1057)).fr, sub: rsOf(E(1057)),
      body: 'Même mot, autre modèle : la loi interdit des signes religieux à certains agents de l’État. En mars 2026, la Cour suprême du Canada a entendu la contestation. EN: dated: heard in March 2026.' },
  ],
};

const A4_POSITIONS: Sec<'examples'> = {
  type: 'examples', id: 'a4-positions', layer: 'core', sheetId: 'sheet-memoires',
  title: 'Rapporter les deux camps',
  examples: [
    ex(E(1060), 'une position, avec son argument'),
    ex(E(1061), 'l’autre position, avec le sien'),
    ex(E(1065), 'le terrain commun'),
    ex('fr.c1.nuances-et-registres.027', 'une phrase entendue au Québec'),
    ex(E(1063), 'la comparaison, sans verdict'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['positions'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Le débat à la radio', frSub: 'Une seule écoute, huit phrases',
  lines: [ln(E(1055)), ln(E(1052)), ln(E(1053)), ln(E(1057)), ln(E(1058)), ln(E(1059)), ln(E(1060)), ln(E(1061))],
  questions: [
    { q: 'Quelle loi française la chronique cite-t-elle ?', opts: ['celle de 1905', 'celle de 1789', 'celle de 2019'], correct: 0,
      why: 'La loi de 1905 sépare les Églises et l’État. EN: the 1905 law.' },
    { q: 'Que dit l’article 2 sur le financement des cultes ?', opts: ['L’État les finance tous également.', 'L’État n’en finance aucun.'], correct: 1,
      why: '« Ne salarie ni ne subventionne aucun culte. » EN: the State funds none.' },
    { q: 'Qui la loi québécoise vise-t-elle ?', opts: ['tous les habitants', 'certains employés de l’État', 'les élèves seulement'], correct: 1,
      why: 'Des agents en position d’autorité, dont les enseignants du public. EN: some state employees.' },
    { q: 'Quel outil juridique le gouvernement a-t-il utilisé ?', opts: ['la disposition de dérogation', 'un référendum'], correct: 0,
      why: 'Il soustrait la loi à certains articles des chartes. EN: the notwithstanding clause.' },
    { q: 'Les deux dernières phrases donnent...', opts: ['l’avis de la chroniqueuse', 'deux positions opposées, chacune avec son argument'], correct: 1,
      why: 'Défenseurs et opposants, chacun avec ce qu’il avance. EN: two positions, no verdict.' },
  ],
  audio: REC('rec-c1-13-ecoute-laicite'), say: REFRAME, terms: ['positions'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a4-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'Les textes et la méthode',
  itemIds: dicteeFor(4),
  audio: AUDIO, say: REFRAME, terms: ['positions'],
};

const A4_EXPLICATION = pourTonExplication('a4-explication', 'Quelle laïcité ?', [
  grp('Deux phrases sur une tribune qui invoque 1905', [
    free('Cette tribune a tort de citer 1905.', 'This op-ed is wrong to quote 1905.', 'un verdict'),
    free('La tribune invoque 1905 pour défendre la neutralité stricte ; d’autres lisent d’abord dans la loi la liberté de conscience.', 'The op-ed invokes 1905 to defend strict neutrality; others read freedom of conscience in the law first.', 'deux lectures, nommées'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Tu nommes la lecture choisie et l’autre, sans trancher. EN: name both readings.')),
  grp('La phrase de ton explication', [
    it(E(1064), 'la question à poser'),
    it(E(1066), 'la méthode'),
  ], chk('Tu écris sur la loi québécoise en octobre 2026. Tu précises...', ['« en mars 2026, la Cour suprême du Canada a entendu la contestation »', '« la loi vient d’être jugée »'], 0,
    'Un fait vivant se date ; on n’invente pas un jugement. EN: date it, invent nothing.')),
], ['positions', 'dater']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Les deux camps', 'Deux tribunes opposées citent toutes les deux 1905. Tu en conclus que...', ['l’une ment', 'chaque camp lit autrement la même loi'], 1,
    'Liberté de conscience ou neutralité : deux lectures du même texte. EN: two readings of one law.'),
  ctl('L’exception', 'En Alsace et en Moselle, la loi de 1905...', ['s’applique comme ailleurs', 'ne s’applique pas aux cultes', 'a été votée plus tard'], 1,
    'Un régime antérieur y est resté. EN: an older regime remains.'),
  ctl('Dater', 'Tu écris « la loi 21 est contestée » sans date. Il manque...', ['le moment dont tu parles', 'le nom de la loi'], 0,
    'Une référence vivante bouge : date-la. EN: date anything current.'),
], ['positions', 'dater']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La laïcité, de 1905 à la loi 21',
    opener: {
      line: 'Deux pays, un même mot, deux lois : ici tu rapportes un débat sur la laïcité sans dire qui a raison. EN: Two countries, one word, two laws: here you report a debate on laïcité without saying who is right.',
      imageRef: 'lessons/references-historiques/act04.jpg',
    },
    sections: [],
    milestone: 'Tu cites la loi de 1905 mot pour mot, tu rapportes les deux camps de la loi québécoise, et tu dates ce qui bouge. EN: You quote the 1905 law, report both camps on Québec’s law, and date what is still moving.',
    estScreens: 38, restPoints: ['a4-textes', 'a4-ecoute'],
  },
  sections: [A4_LECTURE, A4_TEXTES, A4_POSITIONS, A4_ECOUTE, A4_DICTEE, A4_EXPLICATION, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE 18 JUIN ET VICHY
 *
 *  TEXT: a readers’ column on « un appel du 18 juin » and the other date it
 *  calls up. MOVE: two named positions on the State’s responsibility, the
 *  facts kept apart from the debate.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Un appel du 18 juin', frSub: 'Le Mensuel des Idées, vos questions',
  text: JUIN_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « quitte à être seul ». Que veut dire « quitte à » ?', a: 'Même si cela doit mener à, en acceptant le risque de : être seul.' },
    { q: 'Que se passe-t-il le 18 juin 1940 ?', a: 'Le général de Gaulle parle à la radio de Londres et appelle à poursuivre le combat.' },
    { q: 'Pourquoi connaît-on ce premier appel par des textes ?', a: 'Il n’a pas été enregistré ; c’est le discours du 22 juin qui a été conservé.' },
    { q: 'Que veut dire l’élu quand il promet « un appel du 18 juin » ?', a: 'Il refuse une défaite que d’autres acceptent, la fermeture de la maternité, et se présente en résistant isolé.' },
    { q: 'Quelles sont les deux positions sur Vichy que le texte rapporte ?', a: 'L’ordonnance de 1944 : la République n’a pas cessé d’exister, Vichy n’était pas la République. 1995 : le président Chirac reconnaît la responsabilité de l’État français.' },
    { q: 'Sur quoi porte le débat, selon le texte ?', a: 'Sur la responsabilité, pas sur les faits, établis par les historiens.' },
  ],
  audio: REC('rec-c1-13-juin'), say: REFRAME, terms: ['invoquer', 'positions'],
};

const A5_DEUX: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-deux', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-france',
  title: 'Une date, et l’autre', frSub: '1940, 1942, 1944, 1995',
  hint: 'Quatre cartes. Les faits d’abord, puis les deux positions.',
  audio: REC('rec-c1-13-deux'), say: REFRAME, terms: ['deplier', 'positions'],
  cards: [
    { head: 'L’appel', label: '18 juin 1940', fr: src(E(1072)).fr, sub: rsOf(E(1072)),
      body: 'De Gaulle parle depuis Londres ; on connaît ce premier appel par des textes. L’expression dit un refus de la défaite. EN: known through texts; it means refusing defeat.' },
    { head: 'La rafle', label: '16 et 17 juillet 1942', fr: src(E(1079)).fr, sub: rsOf(E(1079)),
      body: 'La rafle du Vél d’Hiv, à l’initiative de l’occupant, menée par la police française. Les faits sont établis. EN: the facts are established.' },
    { head: 'Première position', label: 'ordonnance du 9 août 1944', fr: src(E(1076)).fr, sub: rsOf(E(1076)),
      body: '« Celle-ci », c’est la République : dans cette lecture, Vichy n’était pas la République, et ses actes sont annulés. EN: the Republic never ceased; Vichy was not it.' },
    { head: 'Seconde position', label: '16 juillet 1995', fr: src(E(1078)).fr, sub: rsOf(E(1078)),
      body: 'Pour la première fois, un président reconnaît la responsabilité de l’État français dans la persécution et la déportation des Juifs. EN: the State’s responsibility acknowledged.' },
  ],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'Six phrases qui tranchent', frSub: 'Rapporter sans juger',
  rule: {
    title: 'Les faits d’un côté, le débat de l’autre',
    body: 'Les faits se disent au présent ou au passé, sans prudence inutile. Le débat se rapporte : « pour certains… pour d’autres… », avec qui défend quoi. Tu ne donnes pas le verdict. EN: state the facts; report the debate.',
  },
  cards: [
    { promptLabel: 'un verdict à la place d’un rapport', promptSound: 'Vichy n’était évidemment pas la République.', fr: src(E(1080)).fr, ipa: ipaOf(E(1080)), tip: '« Pour certains » : c’est une position, celle de l’ordonnance de 1944. EN: a position, not a verdict.' },
    { promptLabel: 'l’autre verdict', promptSound: 'Il est clair que l’État français est coupable, point final.', fr: src(E(1081)).fr, ipa: ipaOf(E(1081)), tip: 'C’est la lecture de 1995 : rapporte-la, avec qui l’a portée. EN: report it, with its author.' },
    { promptLabel: 'les faits mis en doute', promptSound: 'Certains disent qu’il y aurait eu une rafle en juillet 1942.', fr: src(E(1079)).fr, ipa: ipaOf(E(1079)), tip: 'Les faits sont établis : pas de conditionnel ni de « certains disent ». EN: do not hedge established facts.' },
    { promptLabel: 'le débat mal situé', promptSound: 'Les historiens se disputent pour savoir si la rafle a eu lieu.', fr: src(E(1082)).fr, ipa: ipaOf(E(1082)), tip: 'Le désaccord porte sur la responsabilité de l’État, pas sur les faits. EN: the dispute is about responsibility.' },
    { promptLabel: 'une position sans auteur', promptSound: 'On dit que la République n’a jamais cessé d’exister.', fr: src(E(1084)).fr, ipa: ipaOf(E(1084)), tip: 'Qui le dit ? L’ordonnance du 9 août 1944. Nomme-la. EN: name who holds it.' },
    { promptLabel: 'l’appel mal daté', promptSound: 'De Gaulle a enregistré son appel le 18 juin pour la postérité.', fr: src(E(1072)).fr, ipa: ipaOf(E(1072)), tip: 'Personne ne l’a enregistré ce soir-là ; c’est le discours du 22 juin qui l’a été. EN: it was not recorded.' },
  ],
  drill: [
    { promptSay: '... certains, Vichy n’était pas la République.', opts: ['Pour', 'Malgré'], correct: 0 },
    { promptSay: 'Le débat porte sur la responsabilité, pas sur les ... .', opts: ['faits', 'mots'], correct: 0 },
    { promptSay: 'Le premier appel du 18 juin n’a pas été ... .', opts: ['prononcé', 'enregistré', 'écrit'], correct: 1 },
    { promptSay: 'En 1995, le président ... la responsabilité de l’État français.', opts: ['reconnaît', 'refuse'], correct: 0 },
    { promptSay: 'Une ordonnance de 1944 déclare ... les actes de Vichy.', opts: ['valables', 'nuls'], correct: 1 },
    { promptSay: 'Lancer un appel du 18 juin, c’est refuser une ... .', opts: ['victoire', 'défaite', 'loi'], correct: 1 },
    { promptSay: 'Je rapporte le débat, je ne le ... pas.', opts: ['tranche', 'cite'], correct: 0 },
    { promptSay: 'La rafle du Vél d’Hiv a lieu en juillet ... .', opts: ['1940', '1942', '1944'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Les faits, puis le débat' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases qui tranchent' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-13-piege-vichy'), say: REFRAME, terms: ['positions'],
};

const A5_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a5-hacks', layer: 'core', sheetId: 'sheet-memoires',
  title: 'Trois réflexes devant une date qui divise',
  hacks: [
    { hack: 'Sépare les faits du débat.', why: 'Les faits établis se disent sans détour ; seul le débat se rapporte avec « pour certains ». EN: facts plainly, debate reported.' },
    { hack: 'Donne un auteur à chaque position.', why: '« L’ordonnance de 1944 », « le discours de 1995 » : une position sans auteur ressemble à une rumeur. EN: every position has an author.' },
    { hack: 'Demande ce que la date fait pour celui qui l’invoque.', why: 'Un élu qui lance « un appel du 18 juin » se donne le rôle du résistant. EN: what the date does for the speaker.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['positions', 'invoquer'],
};

const A5_EXPLICATION = pourTonExplication('a5-explication', 'Deux positions, deux auteurs', [
  grp('Deux phrases sur l’élu et son « appel du 18 juin »', [
    free('L’élu exagère complètement.', 'The councillor is completely exaggerating.', 'un verdict'),
    free('En invoquant le 18 juin, l’élu se présente en résistant isolé ; au lecteur de juger si le rapprochement tient.', 'By invoking the 18th of June, the councillor casts himself as a lone resister; the reader can judge whether the comparison holds.', 'l’usage, sans verdict'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Tu dis ce que la référence fait pour l’élu, sans trancher. EN: the use, not a verdict.')),
  grp('La phrase de ton explication', [
    it(E(1083), 'la règle'),
    it(E(1073), 'ce que dit l’expression'),
  ], chk('Tu rapportes la position de 1944. Tu écris...', ['« selon l’ordonnance du 9 août 1944, la République n’a pas cessé d’exister »', '« la République n’a pas cessé d’exister, c’est évident »'], 0,
    'Une position se rapporte avec son auteur. EN: report it with its author.')),
], ['positions', 'invoquer']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’expression', 'Un élu promet « un appel du 18 juin ». Il veut dire qu’il...', ['refuse une défaite que d’autres acceptent', 'part vivre à Londres'], 0,
    'Le 18 juin 1940, de Gaulle refuse la demande d’armistice. EN: refusing defeat.'),
  ctl('Le débat', 'Sur Vichy, le débat porte sur...', ['la réalité de la rafle', 'la responsabilité de l’État', 'la date de la Libération'], 1,
    'Les faits sont établis ; la responsabilité fait débat. EN: responsibility, not facts.'),
  ctl('La méthode', 'Tu cites deux positions opposées. Tu ajoutes...', ['qui les a défendues', 'laquelle est la bonne'], 0,
    'Une position a un auteur ; le verdict n’est pas ton rôle. EN: an author, no verdict.'),
], ['positions']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le 18 juin et Vichy',
    opener: {
      line: 'Un élu promet « un appel du 18 juin » : ici tu déplies une date de 1940, et celle qui la suit, sans rendre de verdict. EN: A councillor promises an appeal of 18 June: here you unfold a date from 1940, and the one that follows it, without a verdict.',
      imageRef: 'lessons/references-historiques/act05.jpg',
    },
    sections: [],
    milestone: 'Tu sépares les faits du débat et tu rapportes deux positions avec leurs auteurs. EN: You keep the facts apart from the debate and report two positions with their authors.',
    estScreens: 34, restPoints: ['a5-deux', 'a5-piege'],
  },
  sections: [A5_LECTURE, A5_DEUX, A5_PIEGE, A5_HACKS, A5_EXPLICATION, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L’ALGÉRIE : LES MOTS POUR LE DIRE
 *
 *  TEXT: a podcast summary on naming the war. MOVE: a name is already a
 *  reading; quote each name with who uses it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Un nom pour une guerre', frSub: 'Escale Histoire, épisode 41',
  text: ALGERIE_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « la colonisation reste un sujet brûlant ». Que veut dire « brûlant » ici ?', a: 'Sensible, qui provoque encore des disputes passionnées.' },
    { q: 'Quels noms la France officielle a-t-elle longtemps employés ?', a: '« Les événements d’Algérie » ou « les opérations de maintien de l’ordre ».' },
    { q: 'Que change la loi du 18 octobre 1999 ?', a: 'Elle fait entrer l’expression « guerre d’Algérie » dans les textes.' },
    { q: 'Quels noms emploie-t-on en Algérie ?', a: '« Guerre de libération nationale », voire « révolution ».' },
    { q: 'Pourquoi le 19 mars fait-il débat en France ?', a: 'Des associations de harkis et de rapatriés le contestent, parce que des violences ont continué après le cessez-le-feu ; une autre journée existe, le 5 décembre.' },
    { q: 'Quel conseil de méthode donne l’épisode ?', a: 'Citer le nom entre guillemets, dire qui l’emploie, et donner l’autre.' },
  ],
  audio: REC('rec-c1-13-algerie'), say: REFRAME, terms: ['nommer', 'positions'],
};

const A6_NOMS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-noms', layer: 'core', sheetId: 'sheet-memoires',
  title: 'Six noms et six dates',
  cols: ['Le nom ou la date', 'Qui l’emploie', 'Ce qu’il raconte'],
  rows: [
    { cells: ['« les événements d’Algérie »', 'la France officielle, longtemps', 'une affaire d’ordre'], say: src(E(1090)).fr,
      detail: { title: 'Les événements', body: 'Pendant des décennies, la France officielle évite le mot « guerre » : on parle d’« événements » et de « maintien de l’ordre ». EN: a word that avoids « war ».', say: 'On parlait alors des événements d’Algérie.' } },
    { cells: ['« la guerre d’Algérie »', 'la loi française depuis 1999', 'un conflit armé'], say: src(E(1091)).fr,
      detail: { title: 'La guerre', body: 'La loi du 18 octobre 1999 inscrit l’expression dans les textes. EN: in French law since 1999.', say: src(E(1089)).fr } },
    { cells: ['« guerre de libération nationale »', 'l’Algérie', 'la naissance d’une nation'], say: src(E(1092)).fr,
      detail: { title: 'La libération', body: 'Du côté algérien, on parle aussi de « révolution ». Le même conflit, vu comme une indépendance conquise. EN: the same war, seen as liberation.', say: src(E(1092)).fr } },
    { cells: ['18 et 19 mars 1962', 'les deux parties', 'les accords, le cessez-le-feu'], say: src(E(1094)).fr,
      detail: { title: 'Évian', body: 'Les accords d’Évian sont signés le 18 mars ; le cessez-le-feu entre en vigueur le lendemain. EN: accords on the 18th, ceasefire on the 19th.', say: src(E(1094)).fr } },
    { cells: ['5 juillet', 'l’Algérie', 'la fête de l’indépendance'], say: src(E(1095)).fr,
      detail: { title: 'L’indépendance', body: 'Après le référendum du 1er juillet 1962, la France reconnaît l’indépendance le 3 juillet ; l’Algérie la fête le 5. EN: recognised on the 3rd, celebrated on the 5th.', say: src(E(1095)).fr } },
    { cells: ['19 mars et 5 décembre', 'la France, depuis 2012 et 2003', 'deux journées d’hommage'], say: src(E(1096)).fr,
      detail: { title: 'Deux journées', body: 'Le 5 décembre est fixé par décret en 2003, le 19 mars par une loi en 2012. Des associations de harkis et de rapatriés contestent le 19 mars. EN: two days, one contested.', say: src(E(1097)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['nommer', 'positions'],
};

const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-trier', layer: 'core', size: 'lg',
  title: 'Qui parle ainsi ?', frSub: 'Trois phrases, trois points de vue',
  groups: [
    grp('Trois phrases relevées dans des archives', [
      free('« Les opérations de maintien de l’ordre se poursuivent dans les Aurès. »', '"Operations to maintain order continue in the Aurès."', 'un communiqué des années 1950'),
      free('« Les combattants de la guerre de libération nationale ont été honorés. »', '"The fighters of the war of national liberation were honoured."', 'un discours algérien'),
      free('« La guerre d’Algérie a laissé des traces dans des milliers de familles. »', '"The Algerian War left marks on thousands of families."', 'un manuel français récent'),
    ], chk('« Opérations de maintien de l’ordre » présente le conflit comme...', ['une affaire de police', 'une guerre de libération', 'une révolution'], 0,
      'Le nom évite le mot « guerre » : c’est déjà une lecture. EN: a policing frame.')),
    grp('La règle', [
      it(E(1093), 'un mot, un point de vue'),
      it(E(1100), 'la règle de l’acte'),
    ], chk('Tu écris sur cette guerre pour un lecteur francophone. Tu...', ['choisis un seul nom sans rien dire', 'cites le nom employé, dis qui l’emploie, et donnes l’autre'], 1,
      'Le lecteur voit ainsi que le nom porte une lecture. EN: name both, and who uses each.')),
    ctl('La loi de 2005', 'En 2005, une loi voulait que l’école reconnaisse le « rôle positif » de la présence française outre-mer. Que devient cette phrase ?', ['Elle est toujours en vigueur.', 'Elle est retirée début 2006, après un vif débat.'], 1,
      'Le Conseil constitutionnel la juge réglementaire ; un décret la retire. EN: removed in 2006.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nommer'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a6-ecoute', layer: 'core', hideLines: true,
  title: 'L’épisode, en résumé', frSub: 'Une seule écoute, huit phrases',
  lines: [ln(E(1090)), ln(E(1091)), ln(E(1092)), ln(E(1094)), ln(E(1095)), ln(E(1096)), ln(E(1098)), ln(E(1099))],
  questions: [
    { q: 'Que disait la France officielle pendant des décennies ?', opts: ['« la guerre d’Algérie »', '« les événements d’Algérie »'], correct: 1,
      why: 'Le mot « guerre » n’entre dans la loi qu’en 1999. EN: « events », for decades.' },
    { q: 'En quelle année une loi inscrit-elle l’expression « guerre d’Algérie » ?', opts: ['1962', '1999', '2012'], correct: 1,
      why: 'La loi du 18 octobre 1999. EN: 1999.' },
    { q: 'Quand les accords d’Évian sont-ils signés ?', opts: ['le 18 mars 1962', 'le 5 juillet 1962', 'le 1er novembre 1954'], correct: 0,
      why: 'Le 18 mars ; le cessez-le-feu suit le lendemain. EN: 18 March.' },
    { q: 'Combien de journées d’hommage coexistent en France ?', opts: ['une seule', 'deux'], correct: 1,
      why: 'Le 19 mars et le 5 décembre. EN: two.' },
    { q: 'Qu’est-il arrivé à la phrase sur le « rôle positif » ?', opts: ['Elle a été retirée en 2006.', 'Elle a été renforcée.'], correct: 0,
      why: 'Après un vif débat, elle est retirée. EN: removed in 2006.' },
  ],
  audio: REC('rec-c1-13-ecoute-algerie'), say: REFRAME, terms: ['nommer'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de nommer trop vite',
  errors: [
    { wrong: 'Pendant les événements d’Algérie, beaucoup de soldats sont morts.', right: 'Pendant la guerre d’Algérie, que la France officielle a longtemps appelée « les événements », beaucoup de soldats sont morts.',
      why: 'Normal : tu reprends le mot du document. Mets-le entre guillemets et dis d’où il vient. EN: quote the word and source it.' },
    { wrong: 'L’Algérie est indépendante depuis le 19 mars 1962.', right: 'Le cessez-le-feu date du 19 mars 1962 ; l’Algérie fête son indépendance le 5 juillet.',
      why: 'On confond facilement le cessez-le-feu et l’indépendance. EN: ceasefire is not independence.' },
    { wrong: 'Tout le monde en France commémore le 19 mars.', right: 'Le 19 mars est une journée officielle, contestée par des associations de harkis et de rapatriés ; le 5 décembre existe aussi.',
      why: 'Une date officielle n’est pas une date unanime. EN: official is not unanimous.' },
    { wrong: 'La loi de 2005 oblige l’école à enseigner le rôle positif de la colonisation.', right: 'En 2005, une loi voulait que l’école reconnaisse ce « rôle positif » ; la phrase a été retirée en 2006.',
      why: 'Le présent fige une phrase qui n’existe plus. Date-la. EN: date it: it was removed.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['nommer', 'dater'],
};

const A6_EXPLICATION = pourTonExplication('a6-explication', 'Le nom est une lecture', [
  grp('Deux phrases sur un article qui parle des « événements »', [
    free('L’article parle de la guerre d’Algérie.', 'The article is about the Algerian War.', 'le nom effacé'),
    free('L’article reprend le mot « événements », celui de la France officielle d’alors, quand la loi dit aujourd’hui « guerre d’Algérie ».', 'The article uses the word « événements », official France’s word at the time, whereas the law now says « guerre d’Algérie ».', 'le nom, avec qui l’emploie'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Le choix du nom fait partie de ce que tu expliques. EN: the name is part of the point.')),
  grp('La phrase de ton explication', [
    it(E(1101), 'la méthode'),
    it(E(1102), 'les guillemets'),
  ], chk('Tu cites un mot qui fait débat. Tu...', ['le mets entre guillemets et dis pourquoi', 'le remplaces sans le dire'], 0,
    'Les guillemets montrent que le mot appartient à quelqu’un. EN: quotation marks show whose word it is.')),
], ['nommer', 'positions']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le nom', 'Pourquoi le nom de cette guerre compte-t-il ?', ['Chaque nom raconte déjà une histoire.', 'Il n’y en a qu’un.'], 0,
    'Affaire d’ordre, guerre, libération : trois lectures. EN: each name is a reading.'),
  ctl('Les dates', 'Le 19 mars 1962 est la date...', ['de l’indépendance', 'du cessez-le-feu', 'du référendum'], 1,
    'Les accords le 18, le cessez-le-feu le 19. EN: the ceasefire.'),
  ctl('La méthode', 'Devant « les événements d’Algérie » dans un texte, tu...', ['cites le mot, dis qui l’emploie, donnes l’autre', 'corriges l’auteur'], 0,
    'Tu montres le choix, sans le juger. EN: show the choice.'),
], ['nommer']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'L’Algérie : les mots pour le dire',
    opener: {
      line: '« Événements », « guerre », « libération » : ici tu apprends qu’un nom est déjà une lecture, et tu cites chacun avec qui l’emploie. EN: Events, war, liberation: here you learn that a name is already a reading, and you quote each one with who uses it.',
      imageRef: 'lessons/references-historiques/act06.jpg',
    },
    sections: [],
    milestone: 'Tu cites les noms d’un événement disputé avec ceux qui les emploient, et tu dates ce qui a changé. EN: You quote the names of a disputed event with who uses them, and date what has changed.',
    estScreens: 38, restPoints: ['a6-noms', 'a6-ecoute'],
  },
  sections: [A6_LECTURE, A6_NOMS, A6_TRIER, A6_ECOUTE, A6_ERREURS, A6_EXPLICATION, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — MAI 68 ET LES TRENTE GLORIEUSES
 *
 *  TEXT: an op-ed against seeing « Mai 68 » everywhere. MOVE: test a
 *  historical comparison against the facts; name anachronism.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lecture', layer: 'core', questionsInModal: true,
  title: 'Arrêtons de voir Mai 68 partout', frSub: 'Le Courrier du Léman, tribune',
  text: MAI68_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « les titres fleurissent ». Que veut dire « fleurir » ici ?', a: 'Apparaître en grand nombre, un peu partout.' },
    { q: 'Que s’est-il passé en mai et juin 1968 ?', a: 'Une révolte étudiante devenue grève générale ; les accords de Grenelle ; la dissolution le 30 mai ; une large victoire gaulliste aux élections de juin.' },
    { q: 'Quelles sont les deux mémoires de Mai 68 ?', a: 'Une libération de la parole et des mœurs, ou un affaiblissement de l’autorité.' },
    { q: 'D’où vient l’expression « les Trente Glorieuses » ?', a: 'De l’économiste Jean Fourastié, en 1979, pour les années de forte croissance d’après-guerre.' },
    { q: 'Selon l’autrice, que fait souvent celui qui invoque ces périodes ?', a: 'Il parle du présent plus que du passé.' },
    { q: 'Quel test propose-t-elle avant de titrer « un nouveau Mai 68 » ?', a: 'Comparer les faits : une grève générale, des accords nationaux, une crise politique.' },
  ],
  audio: REC('rec-c1-13-mai68'), say: REFRAME, terms: ['anachronisme', 'lecture'],
};

const A7_FAITS: Sec<'examples'> = {
  type: 'examples', id: 'a7-faits', layer: 'core', sheetId: 'sheet-france',
  title: 'Les faits, puis les lectures',
  examples: [
    ex(E(1106), 'le fait de départ'),
    ex(E(1107), 'un chiffre vérifiable'),
    ex(E(1108), 'la sortie politique'),
    ex(E(1110), 'une lecture'),
    ex(E(1111), 'l’autre lecture'),
    ex(E(1116), 'deux regards sur les Trente Glorieuses'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecture', 'deplier'],
};

const A7_COMPARER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-comparer', layer: 'core', size: 'lg',
  title: 'La comparaison tient-elle ?', frSub: 'Trois situations d’aujourd’hui',
  groups: [
    grp('Trois titres', [
      free('« Un nouveau Mai 68 ? » : deux lycées bloqués pendant une matinée.', '"A new May 68?": two high schools blocked for a morning.', 'un blocage local'),
      free('« Un nouveau Mai 68 ? » : grève dans tous les secteurs, négociation nationale, Assemblée dissoute.', '"A new May 68?": strikes in every sector, national negotiations, Assembly dissolved.', 'plusieurs traits communs'),
      free('« Le retour des Trente Glorieuses » : une année de croissance à 1 %.', '"The return of the Thirty Glorious Years": one year of 1% growth.', 'un chiffre isolé'),
    ], chk('Quel titre a le plus de faits en commun avec 1968 ?', ['les deux lycées bloqués', 'la grève générale et la dissolution', 'la croissance à 1 %'], 1,
      'Grève générale, accords, dissolution : la comparaison s’appuie sur des faits. EN: shared facts.')),
    grp('La règle', [
      it(E(1117), 'comparer les faits'),
      it(E(1118), 'ce que cache la comparaison'),
    ], chk('Une comparaison historique bien faite...', ['éclaire une ressemblance et dit ce qu’elle cache', 'prouve que l’histoire se répète'], 0,
      'Elle éclaire et elle cache : dis les deux. EN: it lights and hides.')),
    ctl('L’anachronisme', 'Juger les ouvriers de 1968 avec les mots du télétravail de 2026, c’est...', ['un anachronisme', 'une antonomase'], 0,
      'Placer dans une époque ce qui appartient à une autre. EN: an anachronism.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['anachronisme', 'lecture'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'Six comparaisons trop rapides', frSub: 'Les faits avant l’image',
  rule: {
    title: 'L’image ne remplace pas les faits',
    body: 'Avant de dire « un nouveau Mai 68 » ou « les Trente Glorieuses », compare les faits, date ce que tu avances, et donne les deux lectures. EN: compare facts, date them, give both readings.',
  },
  cards: [
    { promptLabel: 'l’image sans les faits', promptSound: 'Trois jours de blocage : c’est un nouveau Mai 68.', fr: src(E(1117)).fr, ipa: ipaOf(E(1117)), tip: 'En 1968 : une grève générale et une crise politique. Compare d’abord. EN: compare first.' },
    { promptLabel: 'une seule mémoire', promptSound: 'Mai 68 a libéré la France, tout le monde le sait.', fr: src(E(1110)).fr, ipa: ipaOf(E(1110)), tip: '« Pour les uns » : d’autres y voient un affaiblissement de l’autorité. EN: one reading among two.' },
    { promptLabel: 'un auteur oublié', promptSound: 'Les Trente Glorieuses, c’est le nom officiel de la période.', fr: src(E(1114)).fr, ipa: ipaOf(E(1114)), tip: 'C’est l’expression d’un économiste, en 1979, pas une date officielle. EN: one economist’s phrase.' },
    { promptLabel: 'l’âge d’or sans nuance', promptSound: 'Pendant les Trente Glorieuses, tout le monde vivait bien.', fr: src(E(1116)).fr, ipa: ipaOf(E(1116)), tip: 'D’autres rappellent les mal-logés et la pollution. EN: others recall the badly housed.' },
    { promptLabel: 'un anachronisme', promptSound: 'Les grévistes de 1968 réclamaient le droit au télétravail.', fr: src(E(1120)).fr, ipa: ipaOf(E(1120)), tip: 'Les mots de 2026 ne disent pas les combats de 1968. EN: today’s words, yesterday’s fights.' },
    { promptLabel: 'la sortie politique oubliée', promptSound: 'Mai 68 a fait tomber le gouvernement gaulliste.', fr: src(E(1109)).fr, ipa: ipaOf(E(1109)), tip: 'Aux élections de juin, les gaullistes l’emportent largement. EN: the Gaullists won in June.' },
  ],
  drill: [
    { promptSay: 'En mai 1968, la révolte étudiante devient une grève ... .', opts: ['générale', 'locale'], correct: 0 },
    { promptSay: 'Les accords de Grenelle augmentent le salaire minimum de ... %.', opts: ['10', '35', '50'], correct: 1 },
    { promptSay: 'Aux élections de juin 1968, les gaullistes ... .', opts: ['perdent', 'l’emportent'], correct: 1 },
    { promptSay: 'Jean Fourastié forge l’expression en ... .', opts: ['1968', '1979', '1945'], correct: 1 },
    { promptSay: 'Juger 1968 avec les mots de 2026, c’est risquer l’... .', opts: ['anachronisme', 'apocryphe'], correct: 0 },
    { promptSay: 'La comparaison éclaire une ressemblance et en ... d’autres.', opts: ['prouve', 'cache'], correct: 1 },
    { promptSay: 'Pour les uns, Mai 68 a ... la parole.', opts: ['libéré', 'interdit'], correct: 0 },
    { promptSay: 'Le 30 mai 1968, de Gaulle ... l’Assemblée nationale.', opts: ['élit', 'dissout', 'réunit'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Les faits avant l’image' },
    { label: 'Six cartes', kind: 'cards', title: 'Six comparaisons trop rapides' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-13-piege-mai68'), say: REFRAME, terms: ['anachronisme', 'lecture'],
};

const A7_EXPLICATION = pourTonExplication('a7-explication', 'Mettre la comparaison à l’épreuve', [
  grp('Deux phrases sur un titre « Un nouveau Mai 68 ? »', [
    free('Le journal compare la grève à Mai 68.', 'The paper compares the strike to May 68.', 'constaté, pas testé'),
    free('Le titre rapproche trois jours de blocage de Mai 68 ; or il manque la grève générale et la crise politique : l’image dit une humeur plus que des faits.', 'The headline likens three days of blockade to May 68; yet there is no general strike and no political crisis: the image conveys a mood more than facts.', 'comparé aux faits'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Elle met la comparaison à l’épreuve des faits. EN: it tests the comparison.')),
  grp('La phrase de ton explication', [
    it(E(1118), 'éclairer et cacher'),
    it(E(1120), 'le risque de l’anachronisme'),
  ], chk('L’autrice dit qu’invoquer ces périodes, c’est souvent parler du présent. Tu le rapportes ainsi :', ['« selon l’autrice, invoquer ces périodes revient souvent à parler du présent »', '« invoquer ces périodes, c’est toujours mentir »'], 0,
    'Tu attribues l’idée et tu gardes sa nuance (« souvent »). EN: attribute it, keep the nuance.')),
], ['anachronisme', 'lecture']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Les faits', 'Mai 68, c’est...', ['une révolte étudiante devenue grève générale', 'une guerre', 'une loi'], 0,
    'Puis Grenelle, la dissolution, les élections de juin. EN: a revolt turned general strike.'),
  ctl('L’expression', '« Les Trente Glorieuses » est...', ['un terme officiel de l’État', 'une expression forgée par Jean Fourastié en 1979'], 1,
    'Un économiste nomme la période après coup. EN: one economist’s phrase.'),
  ctl('Le test', 'Avant de titrer « un nouveau Mai 68 », tu...', ['compares les faits', 'cherches une photo de barricade'], 0,
    'L’image doit tenir face aux faits. EN: test it against facts.'),
], ['anachronisme']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Mai 68 et les Trente Glorieuses',
    opener: {
      line: 'Trois jours de blocage, et déjà « un nouveau Mai 68 » : ici tu mets une comparaison historique à l’épreuve des faits. EN: Three days of blockade and already a new May 68: here you test a historical comparison against the facts.',
      imageRef: 'lessons/references-historiques/act07.jpg',
    },
    sections: [],
    milestone: 'Tu compares les faits avant de reprendre une image, et tu nommes l’anachronisme. EN: You compare the facts before reusing an image, and name anachronism.',
    estScreens: 34, restPoints: ['a7-faits', 'a7-piege'],
  },
  sections: [A7_LECTURE, A7_FAITS, A7_COMPARER, A7_PIEGE, A7_EXPLICATION, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE QUÉBEC ET L’ACADIE
 *
 *  TEXT: a magazine piece on what « Je me souviens » does not say. MOVE: a
 *  reference with no fixed meaning; the reader chooses a reading, and you
 *  say which one.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'Ce que « Je me souviens » ne dit pas', frSub: 'L’Écho du Val-Fleuri, magazine',
  text: SOUVIENS_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « personne ne sait au juste ce qu’elle veut dire ». Que veut dire « au juste » ?', a: 'Exactement, précisément.' },
    { q: 'Qui a fait graver la devise, et quand ?', a: 'L’architecte Eugène-Étienne Taché, en 1883, sur l’hôtel du Parlement.' },
    { q: 'Pourquoi la devise admet-elle plusieurs lectures ?', a: 'Son auteur n’en a jamais expliqué le sens : on y lit une fidélité, une perte ou une fierté.' },
    { q: 'Que s’est-il passé en 1759 et en 1763 ?', a: 'La bataille des plaines d’Abraham ouvre la voie à la Conquête ; par le traité de Paris, la Nouvelle-France devient britannique.' },
    { q: 'Quels résultats donnent les deux référendums ?', a: 'En 1980, le non obtient 59,56 % ; en 1995, il l’emporte avec 50,58 %.' },
    { q: 'Qu’a reconnu la proclamation royale de 2003 ?', a: 'Les torts causés aux Acadiens déportés à partir de 1755 ; elle fait du 28 juillet une journée de commémoration.' },
  ],
  audio: REC('rec-c1-13-souviens'), say: REFRAME, terms: ['lecture', 'reference'],
};

const A8_REPERES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-reperes', layer: 'core', sheetId: 'sheet-francophonie',
  title: 'Six repères québécois et acadiens',
  cols: ['Date', 'Référence', 'Ce qu’on invoque'],
  rows: [
    { cells: ['1755', 'le Grand Dérangement', 'une blessure acadienne'], say: src(E(1135)).fr,
      detail: { title: 'La déportation', body: 'Plus de 10 000 Acadiens sont exilés. En 2003, une proclamation royale reconnaît les torts et fixe le 28 juillet comme journée de commémoration. EN: acknowledged in 2003.', say: src(E(1137)).fr } },
    { cells: ['1759-1763', 'la Conquête', 'une perte, ou un tournant'], say: src(E(1127)).fr,
      detail: { title: 'La Conquête', body: 'Les plaines d’Abraham en 1759, le traité de Paris en 1763. Pour certains historiens, une catastrophe ; d’autres en nuancent la portée. EN: two readings among historians.', say: src(E(1129)).fr } },
    { cells: ['1883', '« Je me souviens »', 'une mémoire sans mode d’emploi'], say: src(E(1123)).fr,
      detail: { title: 'La devise', body: 'Gravée à la demande de l’architecte Taché, qui ne l’a jamais expliquée ; sur les plaques depuis 1978. EN: never explained by its author.', say: src(E(1122)).fr } },
    { cells: ['1960', 'la Révolution tranquille', 'la modernisation'], say: src(E(1130)).fr,
      detail: { title: 'La Révolution tranquille', body: 'Une décennie de réformes qui modernise l’État et éloigne l’Église des écoles et des hôpitaux. EN: a decade of reform.', say: src('fr.b1.quebec-et-francophonie.132').fr } },
    { cells: ['1977', 'la loi 101', 'tout un débat sur la langue'], say: src(E(1131)).fr,
      detail: { title: 'La loi 101', body: 'La Charte de la langue française, adoptée le 26 août 1977. La citer, c’est convoquer tout un débat sur la langue. EN: citing it summons a whole debate.', say: src(E(1132)).fr } },
    { cells: ['1980 et 1995', 'les référendums', 'la question nationale'], say: src(E(1133)).fr,
      detail: { title: 'Les référendums', body: 'En 1980, le non obtient 59,56 % ; en 1995, il l’emporte avec 50,58 % des voix. EN: No won both, narrowly in 1995.', say: src(E(1134)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['reference', 'lecture'],
};

const A8_RELIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-relire', layer: 'core', size: 'lg',
  title: 'Trois usages de « Je me souviens »', frSub: 'La même devise, trois intentions',
  groups: [
    grp('Trois phrases entendues', [
      free('« Je me souviens : nous n’oublierons pas ce que nous avons perdu en 1760. »', '"Je me souviens: we shall not forget what we lost in 1760."', 'un militant'),
      free('« Je me souviens de mes grands-parents, de leur langue, de leur courage. »', '"I remember my grandparents, their language, their courage."', 'une romancière'),
      free('« La devise rappelle une fidélité à nos origines. »', '"The motto recalls loyalty to our origins."', 'un guide touristique'),
    ], chk('Le militant qui cite la devise y lit surtout...', ['une perte', 'une fierté familiale', 'une simple formule'], 0,
      'Il la relie à la Conquête : c’est une lecture parmi d’autres. EN: a reading of loss.')),
    grp('La règle', [
      it(E(1126), 'trois lectures'),
      it(E(1139), 'la règle de l’acte'),
    ], chk('Un député cite la devise pour défendre une loi. Tu écris...', ['quelle lecture il choisit, sans dire si c’est la bonne', 'que la devise lui donne raison'], 0,
      'La devise n’a pas de sens officiel : tu nommes celui que le député lui donne. EN: name his reading.')),
    ctl('L’Acadie', 'Le 28 juillet rappelle...', ['la Conquête', 'le Grand Dérangement des Acadiens', 'la loi 101'], 1,
      'Journée de commémoration fixée par la proclamation royale de 2003. EN: the Acadian deportation.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecture'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a8-ecoute', layer: 'core', hideLines: true,
  title: 'Un guide au Parlement de Québec', frSub: 'Une seule écoute, huit phrases',
  lines: [ln(E(1123)), ln(E(1124)), ln(E(1125)), ln(E(1128)), ln(E(1130)), ln(E(1131)), ln(E(1136)), ln(E(1138))],
  questions: [
    { q: 'Depuis quand la devise est-elle gravée sur le Parlement ?', opts: ['1759', '1883', '1978'], correct: 1,
      why: 'Depuis 1883 ; sur les plaques depuis 1978. EN: 1883.' },
    { q: 'L’auteur de la devise en a-t-il expliqué le sens ?', opts: ['Oui, dans un discours.', 'Non, jamais.'], correct: 1,
      why: 'D’où ses lectures multiples. EN: never.' },
    { q: 'Quand la Nouvelle-France devient-elle britannique ?', opts: ['par le traité de Paris de 1763', 'à la Révolution tranquille'], correct: 0,
      why: 'Le traité de 1763. EN: 1763.' },
    { q: 'Quand la Charte de la langue française est-elle adoptée ?', opts: ['en 1960', 'en 1977', 'en 1995'], correct: 1,
      why: 'Le 26 août 1977. EN: 1977.' },
    { q: 'Combien d’Acadiens sont exilés, selon le guide ?', opts: ['quelques centaines', 'plus de 10 000'], correct: 1,
      why: 'Plus de 10 000 au total. EN: more than 10,000.' },
  ],
  audio: REC('rec-c1-13-ecoute-quebec'), say: REFRAME, terms: ['reference'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a8-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'La devise et l’Acadie',
  itemIds: [...dicteeFor(8), 'fr.b1.quebec-et-francophonie.188'],
  audio: AUDIO, say: REFRAME, terms: ['reference'],
};

const A8_EXPLICATION = pourTonExplication('a8-explication', 'Une devise, plusieurs lectures', [
  grp('Deux phrases sur un discours qui cite « Je me souviens »', [
    free('Le député cite la devise du Québec.', 'The member quotes Québec’s motto.', 'cité, pas expliqué'),
    free('Le député invoque « Je me souviens » dans le sens d’une perte à réparer, une lecture parmi d’autres, puisque Taché n’a jamais expliqué la devise.', 'The member invokes « Je me souviens » in the sense of a loss to make good, one reading among others, since Taché never explained the motto.', 'la lecture, nommée et située'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Elle nomme la lecture choisie et dit pourquoi d’autres existent. EN: name the reading.')),
  grp('La phrase de ton explication', [
    it(E(1132), 'une loi qui convoque un débat'),
    it(E(1129), 'deux lectures de la Conquête'),
  ], chk('Tu cites le référendum de 1995. Tu écris...', ['« le non l’emporte avec 50,58 % des voix »', '« le Québec a voté non à une large majorité »'], 0,
    'Le chiffre exact dit à quel point le vote était serré. EN: the exact figure.')),
], ['lecture', 'reference']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La devise', '« Je me souviens » a plusieurs lectures parce que...', ['son auteur ne l’a jamais expliquée', 'elle a changé de mots'], 0,
    'Une fidélité, une perte, une fierté : au lecteur de choisir. EN: never explained.'),
  ctl('La Conquête', 'Sur la Conquête, les historiens...', ['sont tous d’accord', 'ne sont pas d’accord sur sa portée'], 1,
    'Catastrophe pour certains, tournant nuancé pour d’autres. EN: they disagree.'),
  ctl('La loi 101', 'Dire « la loi 101 », c’est...', ['citer un simple article', 'convoquer tout un débat sur la langue', 'parler d’un référendum'], 1,
    'La Charte de la langue française, 1977. EN: a whole debate.'),
], ['lecture']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le Québec et l’Acadie',
    opener: {
      line: '« Je me souviens », sur chaque plaque, sans mode d’emploi : ici tu lis les références du Québec et de l’Acadie, et la lecture que chacun en fait. EN: Je me souviens, on every plate, with no instructions: here you read Québec’s and Acadia’s references, and the reading each speaker makes.',
      imageRef: 'lessons/references-historiques/act08.jpg',
    },
    sections: [],
    milestone: 'Tu déplies les grandes dates du Québec et de l’Acadie, et tu nommes la lecture qu’un discours en fait. EN: You unfold the key dates of Québec and Acadia and name the reading a speech makes of them.',
    estScreens: 38, restPoints: ['a8-reperes', 'a8-ecoute'],
  },
  sections: [A8_LECTURE, A8_REPERES, A8_RELIRE, A8_ECOUTE, A8_DICTEE, A8_EXPLICATION, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LA BELGIQUE
 *
 *  TEXT: a Brussels column on the 21st of July and its shadows. MOVE: the
 *  same monument read two ways; a press cliché unfolded.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a9-lecture', layer: 'core', questionsInModal: true,
  title: 'Un pays né à l’opéra', frSub: 'Le Fil de Bruxelles',
  text: BELGIQUE_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « le public sort en ébullition ». Que veut dire « en ébullition » ?', a: 'Très agité, excité, prêt à se soulever, comme de l’eau qui bout.' },
    { q: 'Pourquoi dit-on que la Belgique est « née à l’opéra » ?', a: 'Le 25 août 1830, une représentation de La Muette de Portici à la Monnaie déclenche l’émeute qui mène à l’indépendance.' },
    { q: 'Que commémore le 21 juillet ?', a: 'Le serment de Léopold Ier sur la Constitution, en 1831 : une date de serment, pas de bataille.' },
    { q: 'Quelles sont les deux lectures des statues de Léopold II ?', a: 'Un patrimoine à expliquer, ou une blessure à retirer de l’espace public.' },
    { q: 'Comment s’est terminée la commission parlementaire sur le passé colonial ?', a: 'En décembre 2022, sans accord sur ses conclusions.' },
    { q: 'Que veut dire « un compromis à la belge » ?', a: 'Un accord négocié longuement, où chacun cède un peu ; selon l’article, éloge de la patience ou pique contre la complication.' },
  ],
  audio: REC('rec-c1-13-belgique'), say: REFRAME, terms: ['lecture', 'positions'],
};

const A9_REPERES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-reperes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-francophonie',
  title: 'Quatre références belges', frSub: 'De la Monnaie au fédéralisme',
  hint: 'Quatre cartes. La dernière cite la Constitution.',
  audio: REC('rec-c1-13-reperes-belgique'), say: REFRAME, terms: ['reference', 'lecture'],
  cards: [
    { head: 'L’opéra de 1830', label: '25 août 1830', fr: src(E(1142)).fr, sub: rsOf(E(1142)),
      body: 'La Muette de Portici, à la Monnaie : l’émeute qui lance la révolution. On l’invoque pour dire qu’un pays peut naître d’une émotion. EN: a nation born of an evening at the opera.' },
    { head: 'Le serment', label: '21 juillet 1831', fr: src(E(1143)).fr, sub: rsOf(E(1143)),
      body: 'La fête nationale célèbre un serment sur la Constitution, pas une victoire. EN: an oath, not a battle.' },
    { head: 'Le Congo', label: '1885-1960', fr: src(E(1144)).fr, sub: rsOf(E(1144)),
      body: 'Possession personnelle du roi, puis colonie belge jusqu’au 30 juin 1960. Les violences sont documentées ; la façon de s’en souvenir divise. EN: the facts documented, the memory divided.' },
    { head: 'L’État fédéral', label: 'Constitution, article 1', fr: src(E(1148)).fr, sub: rsOf(E(1148)),
      body: 'Depuis 1993, l’article premier de la Constitution. D’où le « compromis à la belge » des journaux. EN: federal since 1993.' },
  ],
};

const A9_LIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-lire', layer: 'core', size: 'lg',
  title: 'Éloge ou pique ?', frSub: 'Le même cliché dans trois articles',
  groups: [
    grp('Trois articles', [
      free('« Après dix-huit mois, un compromis à la belge : chacun y gagne un peu, personne ne perd la face. »', '"After eighteen months, a Belgian-style compromise: everyone gains a little, no one loses face."', 'un quotidien bruxellois'),
      free('« Encore un compromis à la belge : trois niveaux de pouvoir, et personne de responsable. »', '"Another Belgian-style compromise: three levels of power, and no one in charge."', 'un éditorial étranger'),
      free('« Le compromis à la belge, c’est l’art de vivre ensemble malgré tout. »', '"The Belgian-style compromise is the art of living together in spite of everything."', 'un essai'),
    ], chk('Dans l’éditorial étranger, le cliché sert...', ['à louer la patience', 'à critiquer la complication', 'à décrire la Constitution'], 1,
      '« Personne de responsable » : le cliché devient une pique. EN: here it is a jibe.')),
    grp('La règle', [
      it(E(1150), 'le sens du cliché'),
      it(E(1152), 'la règle de l’acte'),
    ], chk('Une statue de Léopold II est déplacée. Un article titre « notre histoire effacée », un autre « une blessure enfin reconnue ». Tu...', ['rapportes les deux lectures, avec qui les porte', 'choisis la plus juste'], 0,
      'Le même monument n’a pas le même sens pour tous. EN: report both readings.')),
    ctl('Le 21 juillet', 'La fête nationale belge célèbre...', ['une bataille gagnée', 'le serment du premier roi sur la Constitution'], 1,
      'Le 21 juillet 1831. EN: an oath.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecture', 'positions'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre raccourcis belges',
  errors: [
    { wrong: 'La Belgique est indépendante depuis le 21 juillet 1831.', right: 'L’indépendance est proclamée en 1830 ; le 21 juillet 1831, Léopold Ier prête serment, et c’est la fête nationale.',
      why: 'On confond facilement la fête nationale et l’indépendance. EN: the national day is the oath.' },
    { wrong: 'Le Congo a toujours été une colonie de l’État belge.', right: 'De 1885 à 1908, le Congo est la possession personnelle de Léopold II ; il devient ensuite une colonie belge.',
      why: 'La distinction compte pour comprendre les débats sur le roi. EN: personal possession first.' },
    { wrong: 'La commission a conclu que la Belgique devait s’excuser.', right: 'La commission sur le passé colonial s’est achevée en 2022 sans accord sur ses conclusions.',
      why: 'Normal : on attend une conclusion. Il n’y en a pas eu. EN: it ended without agreement.' },
    { wrong: 'Un compromis à la belge, c’est toujours une critique.', right: 'Un compromis à la belge est un éloge ou une pique : cela dépend de l’article.',
      why: 'Le cliché change de sens selon qui l’emploie. EN: it depends on the writer.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecture', 'dater'],
};

const A9_EXPLICATION = pourTonExplication('a9-explication', 'Un monument, deux lectures', [
  grp('Deux phrases sur un article qui parle d’une statue de Léopold II', [
    free('Cette statue est une honte.', 'This statue is a disgrace.', 'un verdict'),
    free('Pour l’auteur, la statue est « une blessure » ; d’autres y voient un patrimoine à expliquer. Le passé colonial, lui, est documenté.', 'For the writer, the statue is « a wound »; others see heritage to be explained. The colonial past itself is documented.', 'deux lectures, et les faits'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Elle sépare les faits des lectures, sans trancher. EN: facts and readings, no verdict.')),
  grp('La phrase de ton explication', [
    it(E(1146), 'deux lectures d’une statue'),
    it(E(1151), 'ce que célèbre la date'),
  ], chk('Tu cites l’article premier de la Constitution belge. Tu précises...', ['qu’il date de 1993', 'qu’il date de 1831'], 0,
    'La Belgique est fédérale depuis la révision de 1993. EN: since 1993.')),
], ['lecture', 'positions']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('1830', 'La révolution belge commence...', ['à l’opéra, le 25 août 1830', 'sur un champ de bataille'], 0,
    'La Muette de Portici, à la Monnaie. EN: at the opera.'),
  ctl('Le Congo', 'De 1885 à 1908, le Congo est...', ['une colonie belge', 'la possession personnelle de Léopold II', 'indépendant'], 1,
    'Il devient une colonie belge en 1908. EN: the king’s personal possession.'),
  ctl('Le cliché', '« Un compromis à la belge » est...', ['toujours un éloge', 'un éloge ou une pique, selon l’article'], 1,
    'Le sens dépend de qui l’emploie. EN: it depends.'),
], ['lecture']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'La Belgique',
    opener: {
      line: 'Un pays né à l’opéra, une fête de serment, des statues qui divisent : ici tu lis les références belges et les lectures qu’elles portent. EN: A country born at the opera, an oath for a national day, statues that divide: here you read Belgian references and the readings they carry.',
      imageRef: 'lessons/references-historiques/act09.jpg',
    },
    sections: [],
    milestone: 'Tu déplies les dates belges et tu rapportes deux lectures d’un même monument. EN: You unfold Belgian dates and report two readings of one monument.',
    estScreens: 32, restPoints: ['a9-reperes'],
  },
  sections: [A9_LECTURE, A9_REPERES, A9_LIRE, A9_ERREURS, A9_EXPLICATION, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LA SUISSE
 *
 *  TEXT: a 1st of August explainer. MOVE: say whether you are quoting a
 *  legend or a document.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Ce que la Suisse fête', frSub: 'Le Courrier du Léman, dossier du 1er août',
  text: SUISSE_TEXT,
  glossary: [
    { word: 'arbalétrier', en: 'crossbowman', note: 'Un soldat ou un chasseur armé d’une arbalète.' },
  ],
  questions: [
    { q: 'Devine le sens : « ce fossé supposé ». Que veut dire « supposé » ici ?', a: 'Que l’on croit exister, sans que ce soit prouvé : le fossé n’est peut-être pas si net.' },
    { q: 'Que rappellent les feux du 1er août ?', a: 'Le Pacte fédéral, un document daté du début d’août 1291, par lequel Uri, Schwytz et Unterwald se promettent assistance.' },
    { q: 'Que dit le texte de Guillaume Tell et du Grütli ?', a: 'Ce sont des légendes, apparues dans des chroniques de la fin du XVe siècle ; depuis le XIXe siècle, les historiens les tiennent pour des légendes.' },
    { q: 'Que disent pourtant ces légendes, selon l’auteur ?', a: 'Ce qu’un pays veut être : une alliance de gens libres contre un pouvoir lointain.' },
    { q: 'Quelles dates montrent les lenteurs de la démocratie directe ?', a: '1971 pour le vote des femmes au niveau fédéral ; 1990 pour Appenzell Rhodes-Intérieures, sur décision du Tribunal fédéral.' },
    { q: 'Le Röstigraben prouve-t-il que la Suisse est divisée ?', a: 'Parfois oui ; souvent, la carte des votes est plus compliquée. L’auteur nuance.' },
  ],
  audio: REC('rec-c1-13-suisse'), say: REFRAME, terms: ['legende', 'reference'],
};

const A10_LEGENDE: Sec<'focus'> = {
  type: 'focus', id: 'a10-legende', layer: 'core', sheetId: 'sheet-francophonie',
  title: 'Légende ou document',
  points: [
    'Le Pacte fédéral de 1291 est un document daté : tu le cites comme un fait. EN: the 1291 charter is a document.',
    'Guillaume Tell et le serment du Grütli sont des légendes : tu le dis avant de les citer. EN: Tell and the Grütli are legends.',
    'Une légende peut fonder une identité sans être un fait : tu en dis le sens, pas la vérité. EN: give its meaning, not its truth.',
    'Le Röstigraben est une image de presse : tu la vérifies dans les chiffres du vote. EN: check the image against the vote.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['legende'],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-trier', layer: 'core', size: 'lg',
  title: 'Légende ou fait ?', frSub: 'Six phrases de discours du 1er août',
  groups: [
    grp('Ce qu’on peut dater', [
      it(E(1155), 'un document'),
      it(E(1160), 'un traité'),
      it(E(1162), 'une votation'),
    ], chk('Ces trois phrases rapportent...', ['des faits datés', 'des légendes'], 0,
      'Un pacte, un traité, une votation : des documents. EN: dated facts.')),
    grp('Ce qu’on raconte', [
      it(E(1158), 'un héros'),
      it(E(1159), 'ce qu’en disent les historiens'),
      it(E(1168), 'ce que fait une légende'),
    ], chk('Un discours dit : « Comme Guillaume Tell, refusons de plier. » L’orateur...', ['cite un fait historique', 'invoque une légende fondatrice'], 1,
      'Tell est un héros de légende ; l’orateur en garde le sens. EN: a founding legend.')),
    ctl('1990', 'En 1990, le vote des femmes arrive en Appenzell Rhodes-Intérieures...', ['par une votation du canton', 'par une décision du Tribunal fédéral'], 1,
      'Le Tribunal fédéral l’impose le 27 novembre 1990. EN: by the Federal Court.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['legende'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a10-ecoute', layer: 'core', hideLines: true,
  title: 'La radio du 1er août', frSub: 'Une seule écoute, huit phrases',
  lines: [ln(E(1155)), ln(E(1156)), ln(E(1157)), ln(E(1158)), ln(E(1161)), ln(E(1162)), ln(E(1163)), ln(E(1165))],
  questions: [
    { q: 'Quels cantons s’unissent dans le pacte ?', opts: ['Genève, Vaud et Berne', 'Uri, Schwytz et Unterwald'], correct: 1,
      why: 'Les trois cantons primitifs. EN: Uri, Schwyz, Unterwalden.' },
    { q: 'Depuis quand fête-t-on le 1er août ?', opts: ['1291', '1848', '1891'], correct: 2,
      why: 'Depuis 1891. EN: since 1891.' },
    { q: 'Comment la radio présente-t-elle Guillaume Tell ?', opts: ['comme un héros de légende', 'comme un fondateur historique'], correct: 0,
      why: 'Un héros de légende. EN: a legend.' },
    { q: 'Quand naît l’État fédéral ?', opts: ['en 1815', 'en 1848', 'en 1971'], correct: 1,
      why: 'En 1848. EN: 1848.' },
    { q: 'Que cherche la presse après chaque votation ?', opts: ['le Röstigraben', 'le Grütli'], correct: 0,
      why: 'Le fossé supposé entre Alémaniques et Romands. EN: the Röstigraben.' },
  ],
  audio: REC('rec-c1-13-ecoute-suisse'), say: REFRAME, terms: ['legende'],
};

const A10_EXPLICATION = pourTonExplication('a10-explication', 'Dire ce qu’on cite', [
  grp('Deux phrases sur un discours qui invoque Guillaume Tell', [
    free('L’orateur rappelle que Guillaume Tell a fondé la Suisse.', 'The speaker recalls that William Tell founded Switzerland.', 'une légende prise pour un fait'),
    free('L’orateur invoque Guillaume Tell, héros de légende, pour appeler à la résistance ; il en garde le sens, pas la vérité historique.', 'The speaker invokes William Tell, a legendary hero, to call for resistance; he keeps its meaning, not historical truth.', 'légende, dite comme telle'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Elle dit que c’est une légende et ce que l’orateur en fait. EN: say it is a legend.')),
  grp('La phrase de ton explication', [
    it(E(1166), 'légende et document'),
    it(E(1167), 'la règle'),
  ], chk('Un titre annonce « Le Röstigraben est de retour » après un vote. Tu écris...', ['que l’image se vérifie dans les chiffres du vote', 'que la Suisse est coupée en deux'], 0,
    'Une image de presse se vérifie avant d’être reprise. EN: check the image.')),
], ['legende']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le pacte', 'Le Pacte fédéral de 1291 est...', ['une légende', 'un document daté'], 1,
    'Il est daté du début d’août 1291. EN: a dated document.'),
  ctl('Tell', 'Guillaume Tell est...', ['un héros de légende', 'le premier président suisse', 'un auteur de chroniques'], 0,
    'Les historiens tiennent le tir sur la pomme pour une légende. EN: a legendary hero.'),
  ctl('1971', 'Les Suissesses votent au niveau fédéral depuis...', ['1848', '1971'], 1,
    'Le 7 février 1971. EN: 1971.'),
], ['legende']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'La Suisse',
    opener: {
      line: 'Les feux du 1er août, un pacte et une pomme : ici tu distingues le document de la légende, et tu dis lequel tu cites. EN: The 1st of August bonfires, a charter and an apple: here you tell the document from the legend, and say which you quote.',
      imageRef: 'lessons/references-historiques/act10.jpg',
    },
    sections: [],
    milestone: 'Tu sépares légende et document, et tu vérifies une image de presse avant de la reprendre. EN: You separate legend from document and check a press image before reusing it.',
    estScreens: 32, restPoints: ['a10-legende'],
  },
  sections: [A10_LECTURE, A10_LEGENDE, A10_TRIER, A10_ECOUTE, A10_EXPLICATION, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — L’AFRIQUE FRANCOPHONE
 *
 *  TEXT: a Dakar column on 1960, the négritude and « Françafrique ». MOVE: a
 *  word that changes sense; name the country and the date.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'Une date, un mot, une querelle', frSub: 'Escale Dakar',
  text: AFRIQUE_TEXT,
  glossary: [],
  questions: [
    { q: 'Devine le sens : « des réseaux politiques et financiers opaques ». Que veut dire « opaque » ici ?', a: 'Qu’on ne voit pas, qu’on ne peut pas contrôler : secret, peu transparent.' },
    { q: 'Que s’est-il passé en 1960 ?', a: 'Dix-sept pays d’Afrique accèdent à l’indépendance, dont quatorze sous administration française.' },
    { q: 'Qui a forgé le mot négritude, et qu’en ont-ils fait ?', a: 'Des étudiants noirs à Paris, autour de Césaire, Senghor et Damas, dans les années 1930 : ils retournent un mot méprisant en mot de fierté.' },
    { q: 'Comment « France-Afrique » est-elle devenue « Françafrique » ?', a: 'Houphouët-Boigny vante en 1955 une coopération étroite ; en 1998, Verschave reprend la formule pour dénoncer des réseaux opaques.' },
    { q: 'Que dit un dirigeant qui annonce « la fin de la Françafrique », selon la chroniqueuse ?', a: 'Qu’un système a existé, et qu’il s’en démarque ; ses adversaires répondent que les mots ne suffisent pas.' },
    { q: 'Quel conseil final donne la chroniqueuse ?', a: 'Savoir d’où vient le mot avant de juger celui qui l’emploie, et nommer les pays et les dates.' },
  ],
  audio: REC('rec-c1-13-afrique'), say: REFRAME, terms: ['nommer', 'reference'],
};

const A11_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a11-mots', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-francophonie',
  title: 'Une date et deux mots', frSub: '1960, la négritude, la Françafrique',
  hint: 'Quatre cartes. Regarde comment un mot change de sens.',
  audio: REC('rec-c1-13-mots-afrique'), say: REFRAME, terms: ['nommer', 'reference'],
  cards: [
    { head: '1960', label: 'les indépendances', fr: src(E(1173)).fr, sub: rsOf(E(1173)),
      body: 'Dix-sept pays, dont quatorze sous administration française. Chaque pays a sa date : le Sénégal fête la sienne le 4 avril. EN: each country has its own date.' },
    { head: 'La négritude', label: 'les années 1930', fr: src(E(1179)).fr, sub: rsOf(E(1179)),
      body: 'Un mot méprisant devient un mot de fierté, littéraire et politique. EN: a contemptuous word turned into pride.' },
    { head: 'France-Afrique', label: '1955', fr: src(E(1180)).fr, sub: rsOf(E(1180)),
      body: 'Dans la bouche d’Houphouët-Boigny, la formule vante un lien. EN: a bond, praised.' },
    { head: 'La Françafrique', label: '1998', fr: src(E(1181)).fr, sub: rsOf(E(1181)),
      body: 'Sous la plume de Verschave, le même mot dénonce une emprise. Qui l’emploie aujourd’hui, et dans quel sens ? EN: the same word, now a charge.' },
  ],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-trier', layer: 'core', size: 'lg',
  title: 'Dans quel sens ?', frSub: 'Le même mot dans trois bouches',
  groups: [
    grp('Trois phrases', [
      free('« La Françafrique, c’est fini : place à un partenariat d’égal à égal. »', '"Françafrique is over: make way for a partnership of equals."', 'un discours officiel'),
      free('« Derrière les beaux discours, la Françafrique continue. »', '"Behind the fine speeches, Françafrique goes on."', 'une association militante'),
      free('« En 1955, on parlait de France-Afrique avec enthousiasme. »', '"In 1955, people spoke of France-Afrique with enthusiasm."', 'un historien'),
    ], chk('Dans la phrase de l’association, le mot sert à...', ['vanter un lien', 'dénoncer une emprise qui durerait'], 1,
      'Le mot de Verschave, au sens critique. EN: a charge.')),
    grp('La règle', [
      it(E(1182), 'un mot, deux usages'),
      it(E(1184), 'retourner un mot'),
    ], chk('Les fondateurs de la négritude ont...', ['retourné un mot méprisant en mot de fierté', 'inventé un mot sans passé'], 0,
      'Même forme, autre sens. EN: same form, new meaning.')),
    ctl('Nommer', 'Un article dit « l’Afrique est indépendante depuis 1960 ». Tu corriges...', ['en nommant les pays et leurs dates', 'en ajoutant « environ »'], 0,
      'L’Afrique n’est pas un pays : chaque pays a sa date. EN: name the countries.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nommer'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a11-piege', layer: 'core', swipe: true,
  title: 'Six raccourcis africains', frSub: 'Un pays, une date, un auteur',
  rule: {
    title: 'Nomme le pays, la date et l’auteur',
    body: `${Cap(REGIONAL_REF)} t’a appris que l’Afrique n’est pas un pays. Pour une référence, c’est pareil : nomme le pays, la date, et qui emploie le mot. EN: name the country, the date and who uses the word.`,
  },
  cards: [
    { promptLabel: 'un continent pris pour un pays', promptSound: 'L’Afrique a fêté son indépendance en 1960.', fr: src(E(1183)).fr, ipa: ipaOf(E(1183)), tip: 'Dix-sept pays en 1960, chacun avec sa date. EN: seventeen countries.' },
    { promptLabel: 'un chiffre déformé', promptSound: 'En 1960, toutes les colonies françaises d’Afrique deviennent indépendantes.', fr: src(E(1174)).fr, ipa: ipaOf(E(1174)), tip: 'Quatorze des dix-sept pays de 1960 étaient sous administration française. EN: fourteen of seventeen.' },
    { promptLabel: 'une date confondue', promptSound: 'Le Sénégal fête son indépendance le 14 juillet.', fr: src(E(1175)).fr, ipa: ipaOf(E(1175)), tip: 'Le 4 avril. Le 14 juillet est la fête nationale française. EN: 4 April.' },
    { promptLabel: 'un sens figé', promptSound: 'Françafrique a toujours voulu dire réseau secret.', fr: src(E(1180)).fr, ipa: ipaOf(E(1180)), tip: 'En 1955, « France-Afrique » vantait un lien ; le sens critique vient en 1998. EN: the critical sense came later.' },
    { promptLabel: 'un mot sans auteur', promptSound: 'Le mot Françafrique a été inventé par les journaux.', fr: src(E(1181)).fr, ipa: ipaOf(E(1181)), tip: 'Verschave en fait le titre de son livre en 1998. EN: Verschave, 1998.' },
    { promptLabel: 'la négritude mal comprise', promptSound: 'La négritude est un mot inventé pour insulter.', fr: src(E(1179)).fr, ipa: ipaOf(E(1179)), tip: 'Ses fondateurs retournent un mot méprisant en mot de fierté. EN: a word reclaimed.' },
  ],
  drill: [
    { promptSay: 'En 1960, ... pays d’Afrique accèdent à l’indépendance.', opts: ['dix-sept', 'quatre'], correct: 0 },
    { promptSay: 'Le Sénégal fête son indépendance le 4 ... .', opts: ['avril', 'juillet', 'août'], correct: 0 },
    { promptSay: 'Le mot négritude naît dans les années ... .', opts: ['1960', '1930', '1890'], correct: 1 },
    { promptSay: 'En 1955, « France-Afrique » sert à ... une coopération.', opts: ['vanter', 'dénoncer'], correct: 0 },
    { promptSay: 'En 1998, Verschave en fait un mot pour ... .', opts: ['vanter', 'dénoncer'], correct: 1 },
    { promptSay: 'Je nomme le pays et la ..., pas seulement l’Afrique.', opts: ['date', 'langue'], correct: 0 },
    { promptSay: 'Senghor préside le Sénégal de 1960 à ... .', opts: ['1970', '1980', '2000'], correct: 1 },
    { promptSay: 'Retourner un mot, c’est en changer le ... .', opts: ['sens', 'son'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un pays, une date, un auteur' },
    { label: 'Six cartes', kind: 'cards', title: 'Six raccourcis' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-13-piege-afrique'), say: REFRAME, terms: ['nommer'],
};

const A11_EXPLICATION = pourTonExplication('a11-explication', 'D’où vient le mot', [
  grp('Deux phrases sur un discours qui annonce « la fin de la Françafrique »', [
    free('Le dirigeant parle de la Françafrique.', 'The leader talks about Françafrique.', 'le mot, sans son histoire'),
    free('En annonçant « la fin de la Françafrique », le dirigeant reprend le mot critique de 1998 pour s’en démarquer ; ses adversaires y voient une formule.', 'By announcing « the end of Françafrique », the leader takes up the critical word of 1998 to distance himself; his opponents see a mere formula.', 'le mot, son origine, son usage'),
  ], chk('Laquelle sert une explication ?', ['la première', 'la seconde'], 1,
    'Elle dit d’où vient le mot et ce que le dirigeant en fait. EN: origin and use.')),
  grp('La phrase de ton explication', [
    it(E(1182), 'un mot, deux usages'),
    it('fr.a2.quebec-et-francophonie.182', 'un pays, une date'),
  ], chk('Tu expliques la négritude en une phrase. Tu écris...', ['« un mot méprisant que Césaire, Senghor et Damas ont retourné en mot de fierté »', '« un mouvement africain »'], 0,
    'Les auteurs, le geste, le sens : trois choses en une phrase. EN: who, the move, the meaning.')),
], ['nommer', 'reference']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('1960', 'En 1960, combien de pays d’Afrique deviennent indépendants ?', ['quatorze', 'dix-sept', 'tous'], 1,
    'Dix-sept, dont quatorze sous administration française. EN: seventeen.'),
  ctl('Le mot', '« Françafrique » est un mot...', ['qui a changé de sens', 'qui n’a qu’un sens'], 0,
    'Un lien vanté en 1955, une emprise dénoncée en 1998. EN: it changed sense.'),
  ctl('Nommer', 'Pour une référence africaine, tu nommes...', ['le pays, la date et l’auteur', 'seulement le continent'], 0,
    'L’Afrique n’est pas un pays. EN: name them.'),
], ['nommer']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'L’Afrique francophone',
    opener: {
      line: 'Une année d’indépendances et deux mots qui ont changé de sens : ici tu nommes le pays, la date, et qui emploie le mot. EN: A year of independences and two words that changed meaning: here you name the country, the date and who uses the word.',
      imageRef: 'lessons/references-historiques/act11.jpg',
    },
    sections: [],
    milestone: 'Tu déplies 1960, la négritude et la Françafrique, et tu dis d’où vient un mot avant de juger son usage. EN: You unfold 1960, the négritude and Françafrique, and say where a word comes from before judging its use.',
    estScreens: 34, restPoints: ['a11-mots', 'a11-piege'],
  },
  sections: [A11_LECTURE, A11_MOTS, A11_TRIER, A11_PIEGE, A11_EXPLICATION, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON EXPLICATION
 *
 *  The production act. The task text (an editorial using « la nuit du 4
 *  août ») is read with every move of the lesson, planned, rehearsed out
 *  loud with Hugues, then explained in writing. The brief prints the text
 *  again (no `source` field on `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a12-lecture', layer: 'core', questionsInModal: true,
  title: 'Le texte de ta mission', frSub: 'La Gazette du Val-d’Orme, éditorial',
  text: NUIT_TEXT,
  glossary: [
    { word: 'transformer l’essai', en: 'to convert the try (rugby): to follow up an initial success', note: 'Image du rugby : confirmer un premier succès.' },
  ],
  questions: [
    { q: 'Devine le sens : « le calendrier n’est pas innocent ». Que veut dire « innocent » ici ?', a: 'Sans arrière-pensée : le moment choisi, à six mois des élections, n’est peut-être pas un hasard.' },
    { q: 'Qu’a décidé le conseil municipal ?', a: 'Supprimer les places réservées, la voiture de fonction du maire, plafonner les frais de repas et ouvrir au public la salle de réception.' },
    { q: 'Que s’est-il passé dans la nuit du 4 août 1789 ?', a: 'Les députés de l’Assemblée ont aboli les privilèges.' },
    { q: 'Pourquoi l’éditorialiste choisit-il cette référence ?', a: 'Pour présenter le geste des élus comme un renoncement volontaire et soudain à des avantages, une rupture.' },
    { q: 'Quelles limites l’auteur reconnaît-il lui-même ?', a: 'L’économie est modeste, et le calendrier électoral n’est pas innocent.' },
    { q: 'Comment la référence change-t-elle de rôle à la fin ?', a: 'Elle devient une exigence : « si le conseil veut que la comparaison tienne », il doit s’attaquer aux vrais sujets ; la dernière phrase peut se lire avec ironie.' },
  ],
  audio: REC('rec-c1-13-nuit'), say: REFRAME, terms: ['invoquer', 'lecture'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-methode',
  title: 'Cinq étapes pour ton explication',
  steps: [
    '1. Situe : le texte, son genre, la référence qu’il emploie. EN: the text, its genre, the reference.',
    '2. Déplie : ce qui s’est passé, quand, ce que l’événement est devenu. EN: unfold the reference.',
    '3. Montre l’usage : ce que l’auteur veut dire en l’invoquant. EN: what invoking it does.',
    '4. Nuance : les limites du rapprochement, et les autres lectures. EN: limits and other readings.',
    '5. Conclus en une ou deux phrases, sans dire si l’auteur a raison. EN: conclude without a verdict.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['deplier', 'invoquer', 'lecture'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu expliqueras une référence',
  cases: [
    { situation: 'Une revue de presse pour une cliente étrangère', fr: src(E(1193)).fr, en: src(E(1193)).en },
    { situation: 'Un collègue cite une date que tu ne connais pas', fr: src(E(1006)).fr, en: src(E(1006)).en },
    { situation: 'À l’examen, un texte plein de sous-entendus historiques', fr: src(E(1195)).fr, en: src(E(1195)).en },
    { situation: 'Une discussion qui tourne au procès de l’histoire', fr: src(E(1083)).fr, en: src(E(1083)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['deplier', 'positions'],
};

/** USE IT, out loud. Every French string here uses the typographic ’. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Hugues veut une seule ligne',
  setting: 'Lundi, à l’agence Tessère. Hugues prépare la revue de presse pour la cliente d’Anvers et veut résumer l’éditorial de La Gazette du Val-d’Orme en une ligne. Tu as lu le texte.',
  turns: [
    {
      ai: 'Une nuit du 4 août à Val-d’Orme. C’est une fête, ou quoi ?', en: 'A night of 4 August in Val-d’Orme. Is it a festival, or what?',
      user: src(E(1188)).fr, userEn: 'The writer compares the council meeting to the night of 4 August 1789. (Naming the reference first.)',
      alts: [
        { fr: 'Non, c’est une référence : en 1789, cette nuit-là, les députés abolissent les privilèges.', en: 'No, it is a reference: in 1789, on that night, the deputies abolish privileges.' },
        { fr: 'C’est une date de la Révolution que l’éditorialiste applique au conseil municipal.', en: 'It is a date from the Revolution that the editorial writer applies to the town council.' },
      ],
    },
    {
      ai: 'Et alors, qu’est-ce qu’ils ont aboli, les élus ?', en: 'So what did the councillors abolish?',
      user: 'Leurs places de parking, la voiture du maire, une partie de leurs frais : leurs propres avantages.', userEn: 'Their parking spaces, the mayor’s car, part of their expenses: their own perks. (The facts of the text.)',
      alts: [
        { fr: 'Des avantages que la loi leur permettait de garder, et ils l’ont fait en une seule séance.', en: 'Perks the law let them keep, and they did it in a single meeting.' },
        { fr: src(E(1189)).fr, en: src(E(1189)).en },
      ],
    },
    {
      ai: 'Donc le journal dit que c’est une révolution.', en: 'So the paper says it is a revolution.',
      user: src(E(1190)).fr, userEn: 'The reference suggests a generous and sudden break. (What invoking it does.)',
      alts: [
        { fr: 'Il ne parle pas de révolution : il salue un renoncement volontaire, comme en 1789.', en: 'He does not speak of a revolution: he praises a voluntary renunciation, as in 1789.' },
        { fr: src(E(1194)).fr, en: src(E(1194)).en },
      ],
    },
    {
      ai: 'Des places de parking et 1789, ça ne fait pas un peu beaucoup ?', en: 'Parking spaces and 1789, isn’t that rather a lot?',
      user: src(E(1191)).fr, userEn: 'The comparison has its limits: parking spaces, not feudal rights. (The limits.)',
      alts: [
        { fr: 'L’auteur le reconnaît lui-même : l’économie est modeste et les élections approchent.', en: 'The writer admits it himself: the savings are modest and the elections are coming.' },
        { fr: src(E(1011)).fr, en: src(E(1011)).en },
      ],
    },
    {
      ai: 'Bon, mais il a raison ou pas, ce journaliste ?', en: 'Fine, but is this journalist right or not?',
      user: src(E(1010)).fr, userEn: 'I explain it without saying whether the writer is right. (No verdict.)',
      alts: [
        { fr: src(E(1192)).fr, en: src(E(1192)).en },
        { fr: 'Ce n’est pas à moi de le dire ; je montre ce que la référence apporte au texte.', en: 'It is not for me to say; I show what the reference brings to the text.' },
      ],
    },
    {
      ai: 'Alors, qu’est-ce que j’écris pour la cliente ?', en: 'So what do I write for the client?',
      user: 'Que l’éditorial compare la séance à la nuit du 4 août pour saluer le geste, puis s’en sert pour exiger davantage.', userEn: 'That the editorial compares the meeting to 4 August to praise the gesture, then uses it to demand more. (The whole use, in one line.)',
      alts: [
        { fr: src(E(1193)).fr, en: src(E(1193)).en },
        { fr: 'En une ligne : le geste, la référence, puis ce que l’auteur exige ensuite.', en: 'In one line: the gesture, the reference, then what the writer demands next.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['invoquer', 'lecture', 'deplier'],
};

/** THE GRADED TASK: a C1 written explanation of a reference used in an
 *  invented editorial, graded on unfolding, use, limits, readings without
 *  a verdict, structure, and precision and nuance of vocabulary. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Explique une référence', frSub: 'Mission écrite',
  brief: `Pour la revue de presse de l’agence Tessère, Hugues te demande une note qui explique à la cliente d’Anvers la référence historique sur laquelle repose cet éditorial. Voici le texte. ${NUIT_TEXT}`,
  briefEn: 'For the Tessère agency’s press review, Hugues asks you for a note explaining to the client in Antwerp the historical reference this editorial is built on. The text is printed here so you can write with it in front of you.',
  produce: 'Écris une explication de 250 à 400 mots : déplie la référence (ce qui s’est passé, quand), montre ce que l’éditorialiste veut dire en l’invoquant et comment son usage évolue dans le texte, indique les limites du rapprochement et au moins une autre lecture possible, sans dire si l’auteur a raison.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'deplier', label: 'La référence dépliée', maxPoints: 4, descriptors: [
        '4 : La référence est dépliée juste et précisément : la nuit du 4 août 1789, l’Assemblée, l’abolition des privilèges, et ce que l’expression est devenue.',
        '3 : La référence est juste, mais un élément manque (la date, l’Assemblée ou le sens pris par l’expression).',
        '2 : La référence est évoquée de façon vague (« la Révolution française ») ou avec une erreur.',
        '1 : La référence n’est pas expliquée, ou elle est fausse.',
      ] },
      { key: 'usage', label: 'Ce que fait l’auteur', maxPoints: 4, descriptors: [
        '4 : L’usage est expliqué et suivi dans le texte : saluer un renoncement volontaire, grandir l’événement, puis transformer la référence en exigence à la fin.',
        '3 : L’usage est bien expliqué, sans son évolution dans le texte.',
        '2 : L’usage est dit en une formule générale (« l’auteur compare »), sans dire pourquoi.',
        '1 : Rien sur ce que la référence fait dans le texte.',
      ] },
      { key: 'limites', label: 'Les limites du rapprochement', maxPoints: 3, descriptors: [
        '3 : Au moins une limite précise, tirée du texte (des avantages modestes, pas des droits féodaux ; le calendrier électoral), dite sans moquerie.',
        '2 : Une limite vague (« la comparaison exagère »).',
        '1 : Aucune limite.',
      ] },
      { key: 'lectures', label: 'Les lectures, sans verdict', maxPoints: 3, descriptors: [
        '3 : Au moins deux lectures possibles de la référence (éloge, ironie, défi lancé aux élus), rapportées sans dire laquelle est la bonne.',
        '2 : Une seule lecture, présentée comme la seule possible.',
        '1 : Un verdict sur l’auteur ou sur les élus à la place de l’explication.',
      ] },
      { key: 'structure', label: 'Une explication construite', maxPoints: 3, descriptors: [
        '3 : Une progression claire (situer, déplier, usage, limites, conclusion), avec des liens logiques variés et une conclusion mesurée.',
        '2 : Les éléments sont là, mais juxtaposés.',
        '1 : Des remarques sans ordre ni conclusion.',
      ] },
      { key: 'langue', label: 'Une langue précise et nuancée', maxPoints: 3, descriptors: [
        '3 : Un vocabulaire précis et nuancé (invoquer, rapprochement, renoncement, suggérer, nuancer, la formule attribuée), des phrases complexes maîtrisées, presque aucune erreur.',
        '2 : Un vocabulaire juste mais peu varié, quelques erreurs qui ne gênent pas.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Dans cet éditorial, l’auteur...',
    'La référence renvoie à...',
    'Cette nuit-là,',
    'En l’invoquant, l’éditorialiste suggère que...',
    'Le rapprochement a toutefois ses limites :',
    'D’autres lecteurs pourront y voir...',
    'À la fin du texte, la référence devient...',
    'En somme,',
  ],
  modelAnswer: 'Dans cet éditorial de La Gazette du Val-d’Orme, Marc Duval commente une séance du conseil municipal au cours de laquelle les élus ont renoncé à plusieurs de leurs avantages : places de parking réservées, voiture de fonction, frais de repas. Pour qualifier cette décision, il emprunte une référence historique, « la nuit du 4 août ». Celle-ci renvoie à la nuit du 4 août 1789, pendant laquelle les députés de l’Assemblée nationale ont aboli les privilèges. L’expression désigne depuis un renoncement volontaire et soudain de ceux qui en bénéficiaient. En l’invoquant, l’éditorialiste suggère que les élus ont accompli un geste de même nature : ils ont abandonné, de leur propre initiative et en une seule séance, des avantages que la loi leur permettait de garder. La référence grandit ainsi l’événement et lui donne une portée presque historique. Le rapprochement a toutefois ses limites, que l’auteur reconnaît lui-même : il s’agit de places de parking et de frais de repas, non de droits féodaux, et l’économie réalisée reste modeste, à six mois des élections. Fait intéressant, l’éditorialiste répond à cette objection par la référence elle-même, en rappelant que les députés de 1789 avaient eux aussi leurs calculs. Surtout, l’usage de la référence évolue au fil du texte. D’abord éloge, elle devient à la fin une exigence : si le conseil veut que la comparaison tienne, il devra s’attaquer aux logements sociaux, aux marchés publics et aux subventions. Certains lecteurs y verront un hommage sincère ; d’autres liront dans la dernière phrase, « une belle soirée », une pointe d’ironie, voire un défi lancé aux élus. En somme, la nuit du 4 août sert ici à la fois à saluer un geste et à en fixer la mesure, sans qu’il soit possible de dire laquelle de ces lectures l’emporte.',
  modelAnswerEn: 'In this editorial in La Gazette du Val-d’Orme, Marc Duval comments on a town council meeting at which the councillors gave up several of their perks: reserved parking spaces, an official car, meal expenses. To describe this decision he borrows a historical reference, « the night of 4 August ». It refers to the night of 4 August 1789, during which the deputies of the National Assembly abolished privileges. The phrase has since meant a voluntary and sudden renunciation by those who benefited. By invoking it, the editorial writer suggests that the councillors made a gesture of the same nature: they gave up, of their own accord and in a single meeting, perks the law allowed them to keep. The reference thus magnifies the event and gives it an almost historic scope. The comparison has its limits, though, which the writer himself acknowledges: these are parking spaces and meal expenses, not feudal rights, and the savings are modest, six months before an election. Interestingly, he answers this objection with the reference itself, recalling that the deputies of 1789 also had their calculations. Above all, the use of the reference changes through the text. Praise at first, it becomes a demand at the end: if the council wants the comparison to hold, it will have to tackle social housing, public contracts and subsidies. Some readers will see a sincere tribute; others will read a touch of irony, even a challenge to the councillors, in the last sentence, « a fine evening ». In short, the night of 4 August serves here both to praise a gesture and to set its measure, and it is not possible to say which of these readings prevails.',
  watchFor: [
    { pattern: 'The reference left unexplained, or reduced to « la Révolution française » without the night of 4 August and the abolition of privileges.', criterion: 'deplier', feedback: 'Déplie la référence : quoi, quand, par qui. La nuit du 4 août 1789, l’Assemblée abolit les privilèges.', ref: 'a2-reperes' },
    { pattern: 'The night of 4 August confused with the 14th of July or the storming of the Bastille.', criterion: 'deplier', feedback: 'Le 14 juillet, c’est la Bastille ; la nuit du 4 août, c’est l’abolition des privilèges.', ref: 'a2-reperes' },
    { pattern: 'The use stated as « l’auteur compare » with no account of what the comparison does (praise a voluntary renunciation, magnify the event).', criterion: 'usage', feedback: 'Dis ce que la référence fait : elle salue un renoncement volontaire et grandit l’événement.', ref: 'a2-invoquer' },
    { pattern: 'The change at the end missed: the reference turned into a demand (« si le conseil veut que la comparaison tienne »).', criterion: 'usage', feedback: 'Relis la fin : la référence devient une exigence. Dis comment son usage évolue.', ref: 'a12-lecture' },
    { pattern: 'No limit to the comparison, or a limit not drawn from the text.', criterion: 'limites', feedback: 'Une limite précise : des places de parking ne sont pas des droits féodaux, et l’auteur le reconnaît.', ref: 'a7-comparer' },
    { pattern: 'The limits stated with mockery (« c’est ridicule de comparer »).', criterion: 'limites', feedback: 'Une limite se dit sans se moquer : « le rapprochement a ses limites ».', ref: 'a3-explication' },
    { pattern: 'A verdict on the writer or the councillors (« l’auteur a raison », « les élus sont hypocrites ») in place of the explanation.', criterion: 'lectures', feedback: 'On ne te demande pas de juger : rapporte les lectures possibles, sans trancher.', ref: 'a5-piege' },
    { pattern: 'Only one reading offered as the only possible one (pure praise, or pure irony).', criterion: 'lectures', feedback: 'Donne au moins deux lectures : un éloge, et une pointe d’ironie ou un défi.', ref: 'a8-relire' },
    { pattern: 'Phrases of 1789 or other references quoted as fact when apocryphal, or real quotations invented.', criterion: 'deplier', feedback: 'Ne cite que ce que tu peux sourcer ; une formule douteuse se « prête ».', ref: 'a2-piege' },
    { pattern: 'A summary of the editorial in order, with no explanation of the reference.', criterion: 'structure', feedback: 'Pars de la référence : situe, déplie, montre l’usage, nuance, conclus.', ref: 'a12-plan' },
    { pattern: 'General verbs repeated (dit, parle, compare) instead of the vocabulary of explanation.', criterion: 'langue', feedback: 'Varie : invoque, emprunte, suggère, grandit, nuance, rapprochement.', ref: 'a12-plan' },
    { pattern: 'Anachronistic judgement of 1789 (feudal rights described with today’s words, or the deputies judged by today’s standards).', criterion: 'deplier', feedback: 'Décris 1789 avec ses mots : privilèges, droits féodaux, Assemblée.', ref: 'a7-piege' },
  ],
  graderNotes: [
    'Word count: 250 to 400, with 10% tolerance (225 to 440) before the criteria lose points for length. A title does not count.',
    'The task marks the EXPLANATION of the reference. A learner who approves or condemns the councillors scores low on « lectures » even if the rest is good; a short personal sentence at the very end, clearly marked as such, is tolerated.',
    'Facts to accept for « deplier »: night of 4 August 1789; the (National / Constituent) Assembly or the deputies; abolition of privileges (feudal rights, seigneurial privileges). « Les nobles ont renoncé à leurs privilèges » is accepted. Do not require the distinction between privileges abolished outright and those declared redeemable; reward it if present.',
    'Accept any two readings among: sincere praise; irony (the last sentence « une belle soirée »); a challenge or demand addressed to the council; a warning against electoral calculation. The editorial DOES acknowledge the modest savings and the electoral calendar: do not reward « l’auteur ne voit pas que c’est électoral » as a limit he missed.',
    'Do not penalise the learner for not knowing who Marc Duval is (invented) or for calling the text « article » instead of « éditorial » beyond 1 point under « structure ».',
    'Quotations from the editorial: three to fifteen words, exact, in guillemets. Straight or French quotation marks.',
    'C1 criteria: precision and nuance of vocabulary, and argument structure. Do not penalise a subjunctive / indicative slip after « bien que » as more than minor.',
    'Do not mark press-framing analysis (lesson 24 in C1) or irony as a figure (lesson 20 in C1) beyond the « lectures » criterion.',
    'Accept European and Québec vocabulary alike (stationnement, parking; frais de représentation).',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['deplier', 'invoquer', 'lecture'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis ton explication à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['deplier'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-methode',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'déplier', v: 'quoi, quand, ce que c’est devenu', say: src(E(1006)).fr,
      detail: { title: 'Ouvrir la référence', body: 'Les faits d’abord, puis le sens que la langue a gardé. EN: facts first, then the meaning kept.', say: src(E(1036)).fr } },
    { k: 'invoquer', v: 'qui s’en sert, pour quoi', say: src(E(1005)).fr,
      detail: { title: 'L’usage', body: 'Une rupture, un refus, une fidélité : la référence travaille pour celui qui la cite. EN: the reference works for the speaker.', say: src(E(1025)).fr } },
    { k: 'l’image', v: 'un Waterloo, une bérézina', say: src(E(1045)).fr,
      detail: { title: 'L’antonomase', body: 'Le nom devenu mot ne garde qu’un trait. EN: one feature only.', say: src(E(1047)).fr } },
    { k: 'l’apocryphe', v: '« on prête à… »', say: src(E(1031)).fr,
      detail: { title: 'La citation douteuse', body: 'On la prête, on ne l’affirme pas ; la vraie citation a sa source. EN: attribute, do not assert.', say: src(E(1030)).fr } },
    { k: 'le nom', v: 'un nom, une lecture', say: src(E(1093)).fr,
      detail: { title: 'Nommer', body: 'Cite le nom, dis qui l’emploie, donne l’autre. EN: quote it, source it, give the other.', say: src(E(1101)).fr } },
    { k: 'les positions', v: 'deux, avec leurs auteurs', say: src(E(1066)).fr,
      detail: { title: 'Sans verdict', body: 'Les faits se disent ; le débat se rapporte. EN: state facts, report debate.', say: src(E(1083)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['deplier', 'invoquer', 'positions'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne lis plus une date comme un simple chiffre. Tu déplies une référence (ce qui s’est passé, quand, ce que la langue en a gardé), tu dis ce que fait celui qui l’invoque, tu reconnais une image qui simplifie, une citation apocryphe, une légende, un nom qui porte déjà une lecture, et tu rapportes une histoire disputée avec deux positions et leurs auteurs. Le piège qui reste est double : reprendre une image sans la vérifier, ou glisser ton propre verdict dans une explication. Avant l’examen, relève dans la presse trois références et écris, pour chacune, ce qu’elle contient, qui l’invoque, et une autre lecture possible. EN: Before the exam, find three references in the press and write, for each, what it contains, who invokes it and one other reading.',
  stats: [
    { k: 'Déplier', v: 'les faits, puis le sens gardé' },
    { k: 'Invoquer', v: 'qui s’en sert, pour quoi' },
    { k: 'Les pièges', v: 'l’image, l’apocryphe, la légende' },
    { k: 'Les débats', v: 'deux positions, aucun verdict' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11 (act 12's
 *  explanation is tested in the round of act 1, the method, and by the
 *  task). Each round targets a distinct errorTrigger. `fold()` strips
 *  accents, punctuation and spacing, so nothing turns on them. Slots are
 *  then spread by `spreadSlots()`: no `why` names a position. */

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
      id: 'r1-methode', label: 'Une référence se déplie', targets: ['reference-prise-au-pied'],
      questions: [
        mc('« Le Waterloo du tramway » veut dire que le projet...', ['a subi une défaite définitive', 'passe par la Belgique', 'date de 1815'], 0, 'Waterloo, la défaite finale de Napoléon. EN: a final defeat.', 'a1-lecture'),
        mc('Devant une référence, tu commences par...', ['la déplier', 'juger l’auteur', 'la traduire mot à mot'], 0, 'Quoi, quand, ce qu’elle est devenue. EN: unfold it.', 'a1-usages'),
        mc('Qui invoque la référence dans l’éditorial du tramway ?', ['la rédaction d’un journal qui avait défendu le projet', 'le conseil municipal', 'la cliente'], 0, 'Elle refuse le mot « pause ». EN: the paper’s editorial team.', 'a1-lecture'),
        tI('Complète. Un mot.', 'Une référence est un ... .', 'raccourci', 'Tout un événement dans un mot. EN: a shortcut.', 'a1-scene'),
        tI('Complète la question à poser. Un mot.', 'Qui ... cette référence, et dans quel but ?', 'invoque', 'Qui s’en sert, et pour quoi. EN: who invokes it.', 'a1-usages'),
        eS('Je juge la référence avant de la déplier.', 'Je déplie la référence avant de la juger.', 'On déplie d’abord. EN: unfold first.', 'a1-usages', ['Je déplie la référence avant d’en juger l’usage.']),
        mc('Expliquer une référence, c’est aussi dire...', ['si l’auteur a raison', 'ce que la référence fait dans le texte'], 1, 'L’usage, pas le verdict. EN: its use.', 'a1-check'),
        lC('Écoute. Cette phrase lit-elle bien le titre ?', src(E(1002)).fr, ['Non : elle prend Waterloo pour un lieu.', 'Oui : elle déplie la référence.'], 0, 'Le titre parle d’une défaite, pas d’un trajet. EN: a literal reading.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-1789', label: '1789 et l’apocryphe', targets: ['apocryphe-cite-comme-fait'],
      questions: [
        mc('Dans la nuit du 4 août 1789, les députés...', ['abolissent les privilèges', 'prennent la Bastille', 'adoptent la Constitution de 1791'], 0, 'Le renoncement aux privilèges. EN: privileges abolished.', 'a2-reperes'),
        mc('La Déclaration des droits de l’homme et du citoyen est adoptée...', ['le 14 juillet 1789', 'le 26 août 1789', 'le 4 août 1789'], 1, 'Le 26 août. EN: 26 August.', 'a2-lecture'),
        mc('« Qu’ils mangent de la brioche » : Rousseau prête ce mot à...', ['Marie-Antoinette', 'une grande princesse qu’il ne nomme pas'], 1, 'Il ne la nomme pas. EN: an unnamed princess.', 'a2-piege'),
        mc('Pour citer « L’État, c’est moi », tu écris...', ['« comme l’a dit Louis XIV »', '« la formule que l’on prête à Louis XIV »'], 1, 'Une formule apocryphe se prête. EN: attribute it.', 'a2-piege'),
        tI('Complète l’article premier. Un mot.', 'Les hommes naissent et demeurent libres et égaux en ... .', 'droits', 'Article premier de 1789. EN: rights.', 'a2-reperes'),
        tI('Complète. Un mot.', 'Une citation attribuée à tort est ... .', 'apocryphe', 'D’attribution douteuse. EN: apocryphal.', 'a2-piege'),
        eS('Le 14 juillet commémore seulement la prise de la Bastille.', 'Le 14 juillet commémore la prise de la Bastille et la fête de la Fédération.', 'La loi de 1880 ménage les deux. EN: both.', 'a2-lecture', ['Le 14 juillet commémore la prise de la Bastille et aussi la fête de la Fédération.', 'Le 14 juillet rappelle la prise de la Bastille et la fête de la Fédération.']),
        lC('Écoute. Que promet cette phrase ?', src(E(1025)).fr, ['une rupture', 'une petite réforme'], 0, 'Un « nouveau 1789 » annonce une rupture. EN: a break.', 'a2-invoquer'),
      ],
    },
    {
      id: 'r3-noms', label: 'Les noms devenus des leçons', targets: ['image-reprise-sans-verifier'],
      questions: [
        mc('« Aller à Canossa », c’est...', ['s’humilier devant son adversaire', 'partir en voyage', 'gagner une bataille'], 0, 'Henri IV devant le pape, 1077. EN: to submit.', 'a3-noms'),
        mc('Une victoire à la Pyrrhus est une victoire...', ['facile', 'payée trop cher'], 1, 'Pyrrhus y perd une grande partie de son armée. EN: too costly.', 'a3-noms'),
        mc('Que garde l’expression « c’est la bérézina » ?', ['les pertes de 1812', 'le succès tactique de 1812'], 0, 'La langue n’a retenu que le désastre. EN: the losses.', 'a3-lecture'),
        mc('« Un Austerlitz » désigne...', ['une défaite', 'une victoire éclatante', 'une retraite'], 1, 'Austerlitz, 1805. EN: a triumph.', 'a3-noms'),
        tI('Complète. Un mot.', 'Un nom propre employé comme nom commun : c’est une ... .', 'antonomase', 'Un Waterloo, une bérézina. EN: antonomasia.', 'a3-noms'),
        tI('Complète. Un nom de lieu.', 'Napoléon perd sa dernière bataille à ... , le 18 juin 1815.', 'Waterloo', 'Waterloo, 1815. EN: Waterloo.', 'a3-noms'),
        eS('Verdal a vécu son Waterloo : l’entreprise a disparu.', 'On parle du Waterloo de Verdal, mais l’entreprise existe toujours.', 'L’image exagère ; vérifie-la dans le texte. EN: it still exists.', 'a3-erreurs', ['Verdal a vécu son Waterloo, mais l’entreprise existe toujours.', 'L’entreprise existe toujours : l’image du Waterloo exagère.']),
        lC('Écoute. Quelle image convient ?', 'Le club a gagné la finale, mais il a perdu ses trois meilleurs joueurs pour la saison.', ['une victoire à la Pyrrhus', 'un Waterloo'], 0, 'Gagner, mais trop cher. EN: Pyrrhic.', 'a3-trier'),
      ],
    },
    {
      id: 'r4-laicite', label: 'La laïcité, de 1905 à la loi 21', targets: ['un-seul-camp'],
      questions: [
        mc('La loi de 1905 sépare...', ['les Églises et l’État', 'la France et l’Algérie', 'l’école et la famille'], 0, 'Loi du 9 décembre 1905. EN: Churches and State.', 'a4-textes'),
        mc('Où la loi de 1905 ne s’applique-t-elle pas aux cultes ?', ['en Bretagne', 'en Alsace et en Moselle'], 1, 'Un régime antérieur y est resté. EN: Alsace-Moselle.', 'a4-textes'),
        mc('La loi québécoise de 2019 vise...', ['tous les citoyens', 'certains employés de l’État en position d’autorité'], 1, 'Dont les enseignants du public. EN: some state employees.', 'a4-lecture'),
        mc('Deux tribunes opposées invoquent 1905. Tu écris...', ['que l’une ment', 'que chacune lit autrement la même loi'], 1, 'Liberté de conscience ou neutralité. EN: two readings.', 'a4-explication'),
        tI('Complète l’article 1. Un mot.', 'La République assure la liberté de ... .', 'conscience', 'Loi de 1905, article 1. EN: conscience.', 'a4-textes'),
        tI('Complète. Un mot.', 'Le gouvernement du Québec a recouru à la disposition de ... .', 'dérogation', 'La clause dérogatoire. EN: notwithstanding.', 'a4-ecoute', ['derogation']),
        eS('La Cour suprême du Canada a annulé la loi en mars 2026.', 'La Cour suprême du Canada a entendu la contestation en mars 2026.', 'Elle l’a entendue ; on n’invente pas un jugement. EN: heard, not ruled.', 'a4-textes', ['En mars 2026, la Cour suprême du Canada a entendu la contestation.']),
        lC('Écoute. Cette phrase donne...', src(E(1061)).fr, ['la position des opposants', 'le verdict de la chroniqueuse'], 0, 'Une position, avec son argument. EN: the opponents’ position.', 'a4-positions'),
      ],
    },
    {
      id: 'r5-vichy', label: 'Le 18 juin et Vichy', targets: ['verdict-dans-le-rapport'],
      questions: [
        mc('Le 18 juin 1940, de Gaulle...', ['parle à la radio de Londres', 'signe l’armistice', 'entre dans Paris'], 0, 'Il appelle à poursuivre le combat. EN: speaks from London.', 'a5-lecture'),
        mc('Pourquoi connaît-on le premier appel par des textes ?', ['Il n’a pas été enregistré.', 'Il était interdit.'], 0, 'Le discours du 22 juin, lui, l’a été. EN: not recorded.', 'a5-deux'),
        mc('Sur Vichy, le débat porte sur...', ['la responsabilité de l’État', 'la réalité des faits'], 0, 'Les faits sont établis. EN: responsibility.', 'a5-piege'),
        mc('En 1995, le président Chirac...', ['reconnaît la responsabilité de l’État français', 'déclare que Vichy n’était pas la France'], 0, 'Une première. EN: acknowledges responsibility.', 'a5-deux'),
        tI('Complète. Un mot.', 'Lancer un appel du 18 juin, c’est refuser une ... .', 'défaite', 'Refuser la défaite que d’autres acceptent. EN: defeat.', 'a5-lecture', ['defaite']),
        tI('Complète la citation de 1944. Un mot.', 'En droit celle-ci n’a pas cessé d’... .', 'exister', 'L’ordonnance du 9 août 1944. EN: to exist.', 'a5-deux'),
        eS('Vichy n’était évidemment pas la République, c’est un fait.', 'Pour certains, Vichy n’était pas la République.', 'C’est une position : rapporte-la. EN: a position.', 'a5-piege', ['Selon l’ordonnance de 1944, Vichy n’était pas la République.', 'Pour certains, Vichy n’était pas la République : c’est une position.']),
        lC('Écoute. Comment rapporter cette phrase ?', src(E(1081)).fr, ['comme une position, avec son auteur', 'comme un fait sans débat'], 0, 'C’est la lecture de 1995. EN: a position.', 'a5-hacks'),
      ],
    },
    {
      id: 'r6-algerie', label: 'L’Algérie : les noms', targets: ['nom-pris-pour-neutre'],
      questions: [
        mc('« Les événements d’Algérie », c’est le nom...', ['longtemps employé par la France officielle', 'employé par l’Algérie'], 0, 'Il évite le mot « guerre ». EN: official France.', 'a6-noms'),
        mc('En quelle année la loi française inscrit-elle « guerre d’Algérie » ?', ['1962', '1999', '2005'], 1, 'Loi du 18 octobre 1999. EN: 1999.', 'a6-lecture'),
        mc('L’Algérie fête son indépendance le...', ['19 mars', '5 juillet', '1er novembre'], 1, 'Le 5 juillet. EN: 5 July.', 'a6-noms'),
        mc('Pourquoi des associations contestent-elles le 19 mars ?', ['Des violences ont continué après le cessez-le-feu.', 'Les accords n’ont jamais été signés.'], 0, 'Harkis et rapatriés. EN: violence went on.', 'a6-lecture'),
        tI('Complète. Un mot.', 'Le nom d’un événement est déjà une ... .', 'lecture', 'Chaque nom raconte une histoire. EN: a reading.', 'a6-trier'),
        tI('Complète. Un nom de ville.', 'Les accords d’... sont signés le 18 mars 1962.', 'Évian', 'Évian, 1962. EN: Évian.', 'a6-noms', ['Evian']),
        eS('La loi de 2005 oblige toujours l’école à enseigner le rôle positif de la colonisation.', 'La phrase de la loi de 2005 sur le rôle positif a été retirée en 2006.', 'Date-la : elle n’existe plus. EN: removed in 2006.', 'a6-erreurs', ['En 2005, une loi voulait que l’école reconnaisse le rôle positif, mais la phrase a été retirée en 2006.', 'Cette phrase de la loi de 2005 a été retirée en 2006.']),
        lC('Écoute. Qui parle ainsi ?', src(E(1092)).fr, ['un point de vue algérien', 'la France officielle des années 1950'], 0, 'La guerre vue comme libération. EN: an Algerian view.', 'a6-trier'),
      ],
    },
    {
      id: 'r7-mai68', label: 'Mai 68 et les comparaisons', targets: ['comparaison-sans-faits'],
      questions: [
        mc('En mai 1968, la révolte étudiante devient...', ['une grève générale', 'une guerre civile', 'un référendum'], 0, 'Elle gagne les usines. EN: a general strike.', 'a7-faits'),
        mc('Aux élections de juin 1968...', ['les gaullistes l’emportent largement', 'la gauche gagne'], 0, 'Une large victoire gaulliste. EN: Gaullists win.', 'a7-lecture'),
        mc('« Les Trente Glorieuses » est une expression...', ['de l’économiste Jean Fourastié, en 1979', 'officielle depuis 1945'], 0, 'Forgée après coup. EN: Fourastié, 1979.', 'a7-faits'),
        mc('Trois jours de blocage dans une faculté. « Un nouveau Mai 68 » est...', ['une comparaison à vérifier par les faits', 'une description exacte'], 0, 'Il manque la grève générale et la crise politique. EN: test it.', 'a7-comparer'),
        tI('Complète. Un mot.', 'Juger 1968 avec les mots de 2026, c’est risquer l’... .', 'anachronisme', 'Placer dans une époque ce qui appartient à une autre. EN: anachronism.', 'a7-piege'),
        tI('Complète. Un nombre.', 'Les accords de Grenelle augmentent le salaire minimum de ... %.', '35', 'Trente-cinq pour cent. EN: 35%.', 'a7-faits', ['trente-cinq', 'trente cinq']),
        eS('Mai 68 a libéré la France, tout le monde est d’accord.', 'Pour les uns, Mai 68 a libéré la parole ; pour les autres, il a affaibli l’autorité.', 'Deux mémoires. EN: two readings.', 'a7-piege', ['Pour les uns, Mai 68 a libéré la parole et les mœurs ; pour les autres, il a affaibli l’autorité.']),
        lC('Écoute. Cette phrase...', src(E(1118)).fr, ['nuance la comparaison', 'la rejette'], 0, 'Elle éclaire et elle cache. EN: it qualifies.', 'a7-comparer'),
      ],
    },
    {
      id: 'r8-quebec', label: 'Le Québec et l’Acadie', targets: ['lecture-unique'],
      questions: [
        mc('« Je me souviens » admet plusieurs lectures parce que...', ['son auteur ne l’a jamais expliquée', 'elle a été traduite'], 0, 'Taché ne l’a pas expliquée. EN: never explained.', 'a8-reperes'),
        mc('Par le traité de Paris de 1763, la Nouvelle-France...', ['devient britannique', 'devient indépendante'], 0, 'Après la Conquête. EN: becomes British.', 'a8-reperes'),
        mc('En 1995, le non l’emporte avec...', ['59,56 %', '50,58 %', '40,44 %'], 1, 'Un vote très serré. EN: 50.58%.', 'a8-reperes'),
        mc('Le 28 juillet commémore...', ['la Charte de la langue française', 'le Grand Dérangement des Acadiens'], 1, 'Proclamation royale de 2003. EN: the deportation.', 'a8-relire'),
        tI('Complète la devise. Un mot.', 'Je me ... .', 'souviens', 'La devise du Québec. EN: I remember.', 'a8-reperes'),
        tI('Complète. Une année.', 'La Charte de la langue française est adoptée le 26 août ... .', '1977', 'La loi 101. EN: 1977.', 'a8-reperes'),
        eS('Tous les historiens voient dans la Conquête une catastrophe.', 'Pour certains historiens, la Conquête est une catastrophe ; d’autres en nuancent la portée.', 'Deux lectures. EN: they disagree.', 'a8-relire', ['Pour certains historiens, la Conquête est une catastrophe, d’autres en nuancent la portée.']),
        lC('Écoute. Quelle lecture de la devise ce militant fait-il ?', 'Je me souviens : nous n’oublierons pas ce que nous avons perdu en 1760.', ['une perte', 'une fierté familiale'], 0, 'Il la relie à la Conquête. EN: a loss.', 'a8-relire'),
      ],
    },
    {
      id: 'r9-belgique', label: 'La Belgique', targets: ['monument-une-lecture'],
      questions: [
        mc('La révolution belge commence...', ['à l’opéra de la Monnaie, en 1830', 'sur le champ de bataille de Waterloo'], 0, 'La Muette de Portici. EN: at the opera.', 'a9-reperes'),
        mc('Le 21 juillet célèbre...', ['le serment de Léopold Ier', 'une victoire militaire'], 0, 'Une date de serment. EN: an oath.', 'a9-reperes'),
        mc('De 1885 à 1908, le Congo est...', ['la possession personnelle de Léopold II', 'une colonie de l’État belge', 'indépendant'], 0, 'Puis colonie belge jusqu’en 1960. EN: the king’s possession.', 'a9-erreurs'),
        mc('La commission sur le passé colonial s’est achevée en 2022...', ['par des excuses officielles', 'sans accord sur ses conclusions'], 1, 'Sans accord. EN: no agreement.', 'a9-lecture'),
        tI('Complète la Constitution. Un mot.', 'La Belgique est un État ... qui se compose des communautés et des régions.', 'fédéral', 'Article premier, depuis 1993. EN: federal.', 'a9-reperes', ['federal']),
        tI('Complète. Une année.', 'Le Congo devient indépendant le 30 juin ... .', '1960', 'Le 30 juin 1960. EN: 1960.', 'a9-reperes'),
        eS('Un compromis à la belge est toujours une critique.', 'Un compromis à la belge est un éloge ou une pique, selon l’article.', 'Le sens dépend de qui l’emploie. EN: it depends.', 'a9-lire', ['Un compromis à la belge peut être un éloge ou une pique, selon l’article.']),
        lC('Écoute. Comment traiter cette phrase dans une explication ?', src(E(1146)).fr, ['rapporter les deux lectures', 'choisir la plus juste'], 0, 'Deux lectures d’un même monument. EN: report both.', 'a9-lire'),
      ],
    },
    {
      id: 'r10-suisse', label: 'La Suisse', targets: ['legende-prise-pour-fait'],
      questions: [
        mc('Le Pacte fédéral de 1291 est...', ['un document daté', 'une légende'], 0, 'Daté du début d’août 1291. EN: a document.', 'a10-legende'),
        mc('Guillaume Tell est...', ['un héros de légende', 'le fondateur historique de la Suisse'], 0, 'Les historiens le tiennent pour une légende. EN: a legend.', 'a10-legende'),
        mc('L’État fédéral suisse naît en...', ['1291', '1815', '1848'], 2, 'En 1848. EN: 1848.', 'a10-ecoute'),
        mc('Le Röstigraben désigne...', ['un fossé entre Suisse alémanique et Suisse romande', 'une rivière'], 0, 'Une image de presse. EN: the language divide.', 'a10-lecture'),
        tI('Complète. Une année.', 'Les Suissesses votent au niveau fédéral depuis ... .', '1971', 'Le 7 février 1971. EN: 1971.', 'a10-trier'),
        tI('Complète. Un mot.', 'Une légende peut fonder une identité sans être un ... .', 'fait', 'Le sens, pas la vérité. EN: a fact.', 'a10-trier'),
        eS('Le serment du Grütli est un fait historique daté de 1291.', 'Le serment du Grütli est une légende.', 'Le Pacte est un document ; le serment, une légende. EN: a legend.', 'a10-trier', ['Le serment du Grütli est une légende, le Pacte fédéral est un document.']),
        lC('Écoute. Que fait l’orateur ?', 'Comme Guillaume Tell, refusons de plier devant un pouvoir lointain.', ['il invoque une légende fondatrice', 'il cite un fait historique'], 0, 'Tell est un héros de légende. EN: a legend.', 'a10-explication'),
      ],
    },
    {
      id: 'r11-afrique', label: 'L’Afrique francophone', targets: ['afrique-sans-pays'],
      questions: [
        mc('En 1960, combien de pays d’Afrique accèdent à l’indépendance ?', ['quatorze', 'dix-sept', 'tous'], 1, 'Dont quatorze sous administration française. EN: seventeen.', 'a11-mots'),
        mc('Le mot négritude...', ['retourne un mot méprisant en mot de fierté', 'est né en 1960'], 0, 'Années 1930, Césaire, Senghor, Damas. EN: reclaimed.', 'a11-mots'),
        mc('En 1955, « France-Afrique » sert à...', ['vanter une coopération', 'dénoncer des réseaux'], 0, 'Houphouët-Boigny. EN: praise.', 'a11-mots'),
        mc('Un dirigeant annonce « la fin de la Françafrique ». Il...', ['reprend le mot critique pour s’en démarquer', 'invente un mot nouveau'], 0, 'Le mot vient de 1998. EN: he distances himself.', 'a11-explication'),
        tI('Complète. Un nom de mois.', 'Le Sénégal fête son indépendance le 4 ... .', 'avril', 'Le 4 avril. EN: April.', 'a11-piege'),
        tI('Complète. Un mot.', 'En 1998, François-Xavier Verschave publie un livre intitulé « La ... ».', 'Françafrique', 'Le sens critique. EN: Françafrique.', 'a11-mots', ['Francafrique']),
        eS('L’Afrique a fêté son indépendance en 1960.', 'En 1960, dix-sept pays d’Afrique ont accédé à l’indépendance.', 'L’Afrique n’est pas un pays. EN: name the countries.', 'a11-piege', ['En 1960, dix-sept pays d’Afrique accèdent à l’indépendance.']),
        lC('Écoute. Dans quel sens le mot est-il employé ?', 'Derrière les beaux discours, la Françafrique continue.', ['pour dénoncer une emprise', 'pour vanter un lien'], 0, 'Le sens critique de 1998. EN: a charge.', 'a11-trier'),
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
    { front: 'un raccourci vers une histoire', back: 'une référence', say: src(E(1003)).fr },
    { front: 'ouvrir une référence', back: 'la déplier', say: src(E(1006)).fr },
    { front: 'l’abolition des privilèges', back: 'la nuit du 4 août', say: src(E(1189)).fr },
    { front: 'a final defeat', back: 'un Waterloo', say: src(E(1035)).fr },
    { front: 'to humble oneself', back: 'aller à Canossa', say: src(E(1040)).fr },
    { front: 'a line wrongly attributed', back: 'une citation apocryphe', say: src(E(1031)).fr },
    { front: 'the 1905 law', back: 'la séparation des Églises et de l’État', say: src(E(1055)).fr },
    { front: 'a founding story, not a fact', back: 'une légende', say: src(E(1168)).fr },
    { front: 'one word, two uses', back: 'France-Afrique, Françafrique', say: src(E(1182)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Les références qui comptent, en résumé',
  body: `${REFRAME} Tu sais maintenant déplier 1789, Waterloo, 1905, le 18 juin, l’Algérie, Mai 68, « Je me souviens », 1830, 1291 et 1960, et dire ce que fait celui qui les invoque. Tu reconnais l’image qui simplifie, la phrase apocryphe, la légende, le nom qui porte une lecture, et tu rapportes une histoire disputée sans verdict. ${Cap(PRESSE_REF)} t’attend pour lire le cadre d’un article : une référence est souvent l’un des choix de ce cadre. EN: Next, lesson 24 in C1 reads the frame of an article; a reference is often one of its choices.`,
  points: [
    'Déplie d’abord : quoi, quand, ce que la langue en a gardé.',
    'Puis regarde qui invoque la référence, et pour quoi faire.',
    'Une image simplifie, une citation se prête, une légende n’est pas un fait.',
    'Sur une histoire disputée : deux positions, leurs auteurs, aucun verdict.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['deplier', 'invoquer', 'positions'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton explication',
    opener: {
      line: 'Un conseil municipal vit « sa nuit du 4 août » : à toi d’expliquer la référence, son usage et ses limites, sans trancher. EN: A town council has its night of 4 August: your turn to explain the reference, its use and its limits, without taking sides.',
      imageRef: 'lessons/references-historiques/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as expliqué par écrit une référence historique et passé l’examen : quatre-vingt-huit questions, onze manches. EN: You explained a historical reference in writing and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-lecture', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-noms', 'a12-quiz/r6-algerie', 'a12-quiz/r9-belgique'],
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
  { id: 'd-methode', title: 'Les questions à poser', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les questions à poser à une référence. EN: say each line aloud.', items: [E(1003), E(1004), E(1005), E(1006), E(1008), E(1010)], audio: AUDIO },
  { id: 'd-apocryphe', title: 'On prête, on n’affirme pas', format: 'mcq' as const, coach: 'Une phrase douteuse se prête ; une vraie citation a sa source. EN: attribute, or source.', q: '« L’État, c’est moi » : tu écris...', opts: ['« la formule prêtée à Louis XIV »', '« comme l’a dit Louis XIV »'], correct: 0, why: 'Aucun texte de son vivant ne la rapporte. EN: apocryphal.', items: [E(1026), E(1027), E(1028), E(1029), E(1030), E(1031)], audio: AUDIO },
  { id: 'd-noms', title: 'Ce que garde l’image', format: 'mcq' as const, coach: 'Déplie l’image, puis demande quel trait elle garde. EN: unfold it, then ask what it keeps.', q: '« Une victoire à la Pyrrhus » garde...', opts: ['le prix trop élevé', 'la facilité'], correct: 0, why: 'Pyrrhus gagne, mais y perd une grande partie de son armée. EN: the cost.', items: [E(1035), E(1037), E(1040), E(1042), E(1045), E(1047)], audio: AUDIO },
  { id: 'd-laicite', title: 'Les deux camps', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : les textes, puis les deux positions. EN: the texts, then both positions.', items: [E(1052), E(1053), E(1060), E(1061), E(1065), E(1066)], audio: AUDIO },
  { id: 'd-vichy', title: 'Un fait ou une position', format: 'sort' as const, coach: 'Deux piles : un fait établi, ou une position à rapporter avec son auteur ? EN: fact or position?', buckets: ['un fait établi', 'une position à rapporter'], items: [E(1071), E(1080), E(1079), E(1081), E(1075), E(1076)], audio: AUDIO },
  { id: 'd-algerie', title: 'Qui dit quoi', format: 'flashcard' as const, coach: 'Lis chaque nom à voix haute et dis qui l’emploie. EN: read each name and say who uses it.', items: [E(1088), E(1089), E(1090), E(1091), E(1092), E(1101)], audio: AUDIO },
  { id: 'd-mai68', title: 'Les faits avant l’image', format: 'sort' as const, coach: 'Deux piles : un fait de 1968, ou une lecture de 1968 ? EN: a fact or a reading?', buckets: ['un fait', 'une lecture'], items: [E(1106), E(1110), E(1107), E(1111), E(1108), E(1116)], audio: AUDIO },
  { id: 'd-quebec', title: 'Plusieurs lectures', format: 'mcq' as const, coach: 'Une devise sans mode d’emploi : nomme la lecture choisie. EN: name the reading chosen.', q: '« Je me souviens », pour un militant de la souveraineté, rappelle surtout...', opts: ['une perte', 'une recette de famille'], correct: 0, why: 'Il la relie à la Conquête : une lecture parmi d’autres. EN: one reading.', items: [E(1122), E(1124), E(1126), E(1129), E(1132), E(1139)], audio: AUDIO },
  { id: 'd-belgique', title: 'Un monument, deux lectures', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : les faits belges, puis les lectures. EN: Belgian facts, then readings.', items: [E(1143), E(1144), E(1145), E(1146), E(1150), E(1152)], audio: AUDIO },
  { id: 'd-suisse', title: 'Légende ou document', format: 'sort' as const, coach: 'Deux piles : un document daté, ou une légende ? EN: document or legend?', buckets: ['un document daté', 'une légende'], items: [E(1155), E(1158), E(1160), E(1159), E(1161), E(1168)], audio: AUDIO },
  { id: 'd-afrique', title: 'Un pays, une date, un auteur', format: 'mcq' as const, coach: 'Nomme le pays, la date et l’auteur du mot. EN: country, date, author.', q: '« Françafrique », au sens critique, vient de...', opts: ['François-Xavier Verschave, en 1998', 'Houphouët-Boigny, en 1955'], correct: 0, why: 'En 1955, la formule vantait un lien. EN: 1998, Verschave.', items: [E(1173), E(1175), E(1179), E(1180), E(1181), E(1183)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'reference-prise-au-pied', description: 'Reads a historical reference literally (Waterloo as a place on the route) or translates it word for word instead of unfolding what it recalls.', detectOn: ['a1-scene', 'a1-lecture', 'a1-check', 'a12-mission'], drill: 'd-methode', retest: 'd-methode' },
  { id: 'apocryphe-cite-comme-fait', description: 'Quotes an apocryphal line (« L’État, c’est moi », the brioche) as the attested words of the person it is credited to.', detectOn: ['a2-piege', 'a2-invoquer', 'a2-check', 'a12-mission'], drill: 'd-apocryphe', retest: 'd-apocryphe' },
  { id: 'image-reprise-sans-verifier', description: 'Repeats a historical image (un Waterloo, une bérézina) without checking that its one retained feature fits the facts of the text.', detectOn: ['a3-trier', 'a3-erreurs', 'a3-check'], drill: 'd-noms', retest: 'd-noms' },
  { id: 'un-seul-camp', description: 'Reports only one camp of a contested law (1905, Loi 21), or presents one reading of laïcité as the meaning of the word.', detectOn: ['a4-positions', 'a4-ecoute', 'a4-check', 'a12-mission'], drill: 'd-laicite', retest: 'd-laicite' },
  { id: 'verdict-dans-le-rapport', description: 'Slips a verdict into the report of a disputed memory (Vichy), or hedges established facts as if they were debated.', detectOn: ['a5-piege', 'a5-hacks', 'a5-check', 'a12-mission'], drill: 'd-vichy', retest: 'd-vichy' },
  { id: 'nom-pris-pour-neutre', description: 'Uses one name of a contested event (« événements », « guerre », « libération ») as if neutral, without saying who uses it.', detectOn: ['a6-trier', 'a6-erreurs', 'a6-check'], drill: 'd-algerie', retest: 'd-algerie' },
  { id: 'comparaison-sans-faits', description: 'Accepts or makes a historical comparison (« un nouveau Mai 68 ») without testing it against the facts, or judges a past age with today’s words.', detectOn: ['a7-comparer', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-mai68', retest: 'd-mai68' },
  { id: 'lecture-unique', description: 'Gives one reading of an open reference (« Je me souviens », the Conquest) as its only meaning.', detectOn: ['a8-relire', 'a8-ecoute', 'a8-check', 'a12-mission'], drill: 'd-quebec', retest: 'd-quebec' },
  { id: 'monument-une-lecture', description: 'Reads a contested monument or press cliché (the Leopold II statues, « un compromis à la belge ») in one sense only.', detectOn: ['a9-lire', 'a9-erreurs', 'a9-check'], drill: 'd-belgique', retest: 'd-belgique' },
  { id: 'legende-prise-pour-fait', description: 'Quotes a founding legend (Tell, the Grütli oath) as historical fact, or a press image (the Röstigraben) as proven.', detectOn: ['a10-trier', 'a10-ecoute', 'a10-check'], drill: 'd-suisse', retest: 'd-suisse' },
  { id: 'afrique-sans-pays', description: 'Speaks of « l’Afrique » instead of naming the country and date, or gives a word that changed meaning (Françafrique) a single fixed sense.', detectOn: ['a11-trier', 'a11-piege', 'a11-check'], drill: 'd-afrique', retest: 'd-afrique' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-methode', 'Expliquer une référence', ['les cinq étapes', 'les formules utiles', 'ce qu’on ne fait pas'], [
    teach('sheet-methode-teach', 'Déplier, puis regarder la main',
      'Une référence fait entrer tout un événement dans un mot. Pour l’expliquer, déplie-la (ce qui s’est passé, quand, ce que la langue en a gardé), puis regarde qui s’en sert et pour dire quoi. Termine par ses limites et les autres lectures possibles. Tu ne dis pas si l’auteur a raison. EN: Unfold it, look at who uses it, give its limits and other readings, no verdict.'),
    table('sheet-methode-table', 'Les cinq étapes', ['Étape', 'Question', 'Formules'], [
      ['situer', 'Quel texte, quel genre, quelle référence ?', 'Dans cet éditorial, l’auteur emprunte la référence…'],
      ['déplier', 'Que s’est-il passé, quand ?', 'La référence renvoie à… ; cette nuit-là…'],
      ['montrer l’usage', 'Que veut dire l’auteur en l’invoquant ?', 'En l’invoquant, il suggère que… ; la référence grandit…'],
      ['nuancer', 'Quelles limites, quelles autres lectures ?', 'Le rapprochement a ses limites : … ; d’autres y verront…'],
      ['conclure', 'Que retenir, sans verdict ?', 'En somme, la référence sert à… sans qu’on puisse dire…'],
    ]),
    table('sheet-methode-pieges', 'Ce qu’on ne fait pas', ['Piège', 'À la place'], [
      ['traduire la référence mot à mot', 'la déplier'],
      ['citer une phrase apocryphe comme un fait', '« la formule que l’on prête à… »'],
      ['prendre une légende pour un fait', '« selon la légende… »'],
      ['employer un nom disputé sans le dire', 'le citer entre guillemets, dire qui l’emploie'],
      ['juger l’auteur', 'rapporter les lectures possibles'],
      ['dire « aujourd’hui » sans date', '« en mars 2026… »'],
    ]),
  ]),
  sheet('sheet-france', 'Les références françaises', ['1789', '1905', '1940-1944', 'Mai 68', 'les Trente Glorieuses'], [
    teach('sheet-france-teach', 'Ce qu’on invoque, et ce que cela promet',
      'Chaque date de cette fiche se cite dans la presse et les discours sans être expliquée. La colonne de droite dit ce que celui qui l’invoque veut souvent faire entendre : c’est un usage, pas un verdict sur l’événement. EN: Each date is cited unexplained; the right column is a common use, not a verdict.'),
    table('sheet-france-table', 'Dates et usages', ['Date', 'L’événement', 'Ce qu’on invoque souvent'], [
      ['14 juillet 1789', 'la prise de la Bastille', 'l’attaque d’un symbole du pouvoir'],
      ['4 août 1789', 'l’abolition des privilèges', 'un renoncement volontaire'],
      ['26 août 1789', 'la Déclaration des droits de l’homme et du citoyen', 'un droit fondamental'],
      ['6 juillet 1880', 'le 14 juillet devient fête nationale', 'la Bastille ou la Fédération de 1790'],
      ['9 décembre 1905', 'la séparation des Églises et de l’État', 'la liberté de conscience, ou la neutralité'],
      ['18 juin 1940', 'l’appel de Londres', 'le refus d’une défaite'],
      ['1940-1944', 'le régime de Vichy', 'la question de la responsabilité de l’État'],
      ['16-17 juillet 1942', 'la rafle du Vél d’Hiv', 'la reconnaissance de 1995'],
      ['mai-juin 1968', 'révolte, grève générale, Grenelle, dissolution', 'une libération, ou un désordre'],
      ['1946-1975', 'les Trente Glorieuses (Fourastié, 1979)', 'un âge d’or, discuté'],
    ]),
  ]),
  sheet('sheet-noms', 'Les noms et les citations', ['six images historiques', 'quatre apocryphes', 'ce que l’image garde'], [
    teach('sheet-noms-teach', 'L’image garde un trait, la citation garde un doute',
      'Un nom devenu mot (l’antonomase) ne garde qu’un trait de l’événement. Une phrase célèbre peut être apocryphe : on la prête, on ne l’affirme pas. Dans les deux cas, déplie avant de reprendre. EN: An image keeps one feature; a famous line may be apocryphal. Unfold before reusing.'),
    table('sheet-noms-table', 'Six images', ['Image', 'L’événement', 'Le trait gardé'], [
      ['un Waterloo', '18 juin 1815', 'une défaite totale et définitive'],
      ['une bérézina', 'novembre 1812', 'un désastre (un succès tactique pour les historiens)'],
      ['aller à Canossa', 'janvier 1077', 's’humilier devant l’adversaire'],
      ['une victoire à la Pyrrhus', '280-279 av. J.-C.', 'une victoire trop coûteuse'],
      ['un Austerlitz', '2 décembre 1805', 'une victoire éclatante'],
      ['franchir le Rubicon', '49 av. J.-C.', 'une décision sans retour (une expression figée, qui se conjugue)'],
    ]),
    table('sheet-noms-apocryphes', 'Citations à manier avec prudence', ['Phrase', 'Statut', 'Comment la citer'], [
      ['« Qu’ils mangent de la brioche »', 'Rousseau la prête à une princesse sans nom', '« la phrase attribuée à tort à Marie-Antoinette »'],
      ['« L’État, c’est moi »', 'apocryphe, imprimée en 1791', '« la formule que l’on prête à Louis XIV »'],
      ['« Les hommes naissent et demeurent libres et égaux en droits »', 'vérifiée : Déclaration de 1789, art. 1', 'avec sa source'],
      ['« La République assure la liberté de conscience »', 'vérifiée : loi de 1905, art. 1', 'avec sa source'],
    ]),
  ]),
  sheet('sheet-memoires', 'Les histoires disputées', ['laïcité', 'Vichy', 'l’Algérie', 'la colonisation'], [
    teach('sheet-memoires-teach', 'Deux positions, leurs auteurs, aucun verdict',
      'Sur une histoire disputée, sépare les faits établis du débat. Les faits se disent ; le débat se rapporte, avec au moins deux positions et qui les défend. Cette fiche ne dit jamais qui a raison : ce n’est pas ce qu’on te demande. EN: State facts; report the debate with two positions and their authors.'),
    table('sheet-memoires-table', 'Questions et positions', ['Question', 'Une position', 'Une autre position'], [
      ['Que défend la loi de 1905 ?', 'd’abord la liberté de conscience', 'd’abord la neutralité stricte'],
      ['La loi québécoise de 2019', 'ses défenseurs : la neutralité de l’État', 'ses opposants : la liberté de religion des minorités'],
      ['Vichy et la République', 'ordonnance de 1944 : la République n’a pas cessé d’exister', '1995 : la responsabilité de l’État français est reconnue'],
      ['Le nom de la guerre de 1954-1962', 'longtemps « événements » (France officielle) ; « guerre d’Algérie » (loi de 1999)', '« guerre de libération nationale » (Algérie)'],
      ['La date de commémoration', 'le 19 mars (loi de 2012)', 'le 5 décembre (décret de 2003) ; le 19 mars contesté'],
      ['La colonisation à l’école', '2005 : une loi veut le « rôle positif »', '2006 : la phrase est retirée après un vif débat'],
    ]),
  ]),
  sheet('sheet-francophonie', 'Les références de la francophonie', ['Québec et Acadie', 'Belgique', 'Suisse', 'Afrique'], [
    teach('sheet-francophonie-teach', 'Chaque centre a ses dates',
      `${Cap(REGIONAL_REF)} t’a appris que le français a plusieurs centres. Les références aussi : une même date ne réveille pas les mêmes souvenirs à Québec, Bruxelles, Lausanne ou Dakar. Nomme toujours le pays et la date. EN: Each francophone centre has its own references; name the country and the date.`),
    table('sheet-francophonie-table', 'Repères', ['Pays', 'Date', 'Référence'], [
      ['Acadie', '1755 ; 2003', 'le Grand Dérangement ; la proclamation royale, le 28 juillet'],
      ['Québec', '1759-1763', 'la Conquête (une catastrophe, ou un tournant nuancé)'],
      ['Québec', '1883', '« Je me souviens », jamais expliquée par Taché'],
      ['Québec', '1960 ; 1977', 'la Révolution tranquille ; la loi 101'],
      ['Québec', '1980 ; 1995', 'les référendums : non à 59,56 % ; non à 50,58 %'],
      ['Belgique', '25 août 1830 ; 21 juillet 1831', 'la Monnaie ; le serment de Léopold Ier'],
      ['Belgique', '1885-1908 ; 1960', 'le Congo de Léopold II ; l’indépendance du Congo'],
      ['Belgique', '1993', 'l’État fédéral (Constitution, art. 1)'],
      ['Suisse', 'août 1291 ; 1891', 'le Pacte fédéral ; le 1er août fêté'],
      ['Suisse', '1815 ; 1848', 'la neutralité garantie ; l’État fédéral'],
      ['Suisse', '1971 ; 1990', 'le vote des femmes ; Appenzell Rhodes-Intérieures'],
      ['Afrique', '1960', 'dix-sept indépendances, dont quatorze sous administration française'],
      ['Sénégal', '4 avril ; 1960-1980', 'la fête de l’indépendance ; Senghor président'],
      ['Afrique et France', '1955 ; 1998', '« France-Afrique » (Houphouët-Boigny) ; « la Françafrique » (Verschave)'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-13-[a-z0-9-]+/g) ?? [])];

const TRAP_BRIEF = 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.';
const DECK_BRIEF = 'The four cards, read plainly, one voice, the card sentence only, at even pace.';

const REC_DESC: Record<string, string> = {
  'rec-c1-13-tramway': 'The editorial (act 1), ONE VOICE, one take, a firm, slightly bitter Québec-French editorial voice. « Le Waterloo du tramway » read as a headline. The last sentences (« Il savait. ») after a short beat, dry, never theatrical. « Bernard Fortin, pour la rédaction » read as a signature.',
  'rec-c1-13-revolution': 'The magazine explainer (act 2), ONE VOICE, one take, a clear, curious France-French voice. The two quotations (article 1 of 1789, Rousseau’s sentence) read with the slight lift of a quotation, word for word. No irony on « la brioche ».',
  'rec-c1-13-reperes-1789': DECK_BRIEF,
  'rec-c1-13-piege-apocryphe': TRAP_BRIEF,
  'rec-c1-13-fusion': 'The business column (act 3), ONE VOICE, one take, an amused, lively male voice. The quoted analyst lines and « Il est allé à Canossa » with a light change of tone. Historical names pronounced the French way (Bérézina, Canossa, Pyrrhus).',
  'rec-c1-13-laicite': 'The radio column (act 4), ONE VOICE, one take, a measured Québec-French woman. The two articles of the 1905 law read slowly, word for word, as quotations. The two camps read at EXACTLY the same weight: no audible preference.',
  'rec-c1-13-textes': DECK_BRIEF,
  'rec-c1-13-ecoute-laicite': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order, at radio pace. Lines 7 and 8 (the two camps) at the same weight and pace. No pause longer than the punctuation gives.',
  'rec-c1-13-juin': 'The readers’ column (act 5), ONE VOICE, one take, a calm, grave France-French woman. The ordonnance’s sentence read word for word as a quotation. The facts of July 1942 read plainly, without pathos and without hurry. The two positions at the same weight.',
  'rec-c1-13-deux': DECK_BRIEF,
  'rec-c1-13-piege-vichy': TRAP_BRIEF,
  'rec-c1-13-algerie': 'The podcast summary (act 6), ONE VOICE, one take, a neutral narrator. Each name of the war (« événements », « guerre d’Algérie », « guerre de libération nationale ») read as a quotation, at the same weight. The dates clear.',
  'rec-c1-13-ecoute-algerie': 'REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational podcast pace. The quoted names at the same weight as the rest. Dates said in full.',
  'rec-c1-13-mai68': 'The op-ed (act 7), ONE VOICE, one take, a Swiss-French woman historian, brisk and slightly impatient at the start, then even. The two readings of Mai 68 at the same weight. « 35 % » said « trente-cinq pour cent ».',
  'rec-c1-13-piege-mai68': TRAP_BRIEF,
  'rec-c1-13-souviens': 'The magazine piece (act 8), ONE VOICE, one take, a warm Québec-French male voice. « Je me souviens » said plainly, never declaimed. Percentages in full (« cinquante virgule cinquante-huit pour cent »).',
  'rec-c1-13-ecoute-quebec': 'REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, as a guide at the Parliament in Québec City, Québec French. Dates said in full. No pause longer than the punctuation gives.',
  'rec-c1-13-belgique': 'The Brussels column (act 9), ONE VOICE, one take, a Belgian-French woman, wry and precise. Numbers as written; « septante » is NOT required (the text writes figures; read « mille huit cent trente »). The two readings of the statues at the same weight. The Constitution sentence as a quotation.',
  'rec-c1-13-reperes-belgique': DECK_BRIEF,
  'rec-c1-13-suisse': 'The 1st of August explainer (act 10), ONE VOICE, one take, a Swiss-French male voice (Vaud), friendly. Uri, Schwytz, Unterwald, Grütli, Appenzell Rhodes-Intérieures and Röstigraben said as a Romand would. The legend sentences with no special tone: the text says they are legends.',
  'rec-c1-13-ecoute-suisse': 'REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, as a Swiss radio host on the 1st of August. Dates said in full.',
  'rec-c1-13-afrique': 'The Dakar column (act 11), ONE VOICE, one take, a Senegalese-French woman, calm and assured. « France-Afrique » and « la Françafrique » clearly distinguished. No dramatisation.',
  'rec-c1-13-mots-afrique': DECK_BRIEF,
  'rec-c1-13-piege-afrique': TRAP_BRIEF,
  'rec-c1-13-nuit': 'THE TASK TEXT (act 12), ONE VOICE, one take, a France-French editor in chief, warm then demanding. « Une nuit du 4 août, en somme » with a slight smile. The last sentence (« une belle soirée ») after a beat, dry: the irony must be audible only as possible, not underlined.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 13',
  intro: 'French press and speech are full of references nobody explains: 1789, Waterloo, 1905, the 18th of June, Vichy, Algeria, Mai 68, « Je me souviens », 1830, 1291, 1960, the négritude. This lesson teaches you to unfold each one (what happened, when, what it has come to mean), to say what invoking it does in a text, to spot the image that simplifies, the apocryphal quotation and the founding legend, and to report contested history with named positions and no verdict. It ends with a 250 to 400 word explanation of a reference used in an editorial.',
  skill: 'CE',
  grammarAssumed: [REGIONAL_UNIT, CRITIQUE_UNIT, PROVERBES_UNIT],
  grammarIntroduced: [
    'Unfolding a historical reference: what happened, when, and what the reference has come to mean in the language',
    'What invoking a reference does in a text (a break, a refusal, a renunciation, a loyalty), reported without endorsing it',
    'Antonomasia (un Waterloo, une bérézina, aller à Canossa, une victoire à la Pyrrhus) and the single feature such an image keeps',
    'Apocryphal quotations quoted as apocryphal (« on prête à… »), founding legends told from documents, and verified public-domain or official quotations cited with their source',
    'Contested history reported as literacy: the names of a disputed event with who uses each, two positions with their authors, the facts kept apart from the debate, and anything « current » dated',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'La presse et les discours francophones sont pleins de références que personne n’explique : 1789, Waterloo, 1905, le 18 juin, Vichy, l’Algérie, Mai 68, « Je me souviens », 1830, 1291, 1960, la négritude. Cette leçon t’apprend à les déplier, à dire ce que fait celui qui les invoque, à repérer l’image qui simplifie, la citation apocryphe et la légende, et à rapporter une histoire disputée sans verdict. À la fin, tu expliques en 250 à 400 mots une référence tirée d’un éditorial.',
    minutes: 180,
    difficulty: 4,
    glyph: '1789',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: REFERENCES_HISTORIQUES_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, NUIT_TEXT };
export const lessonWithoutTask = (): Lesson => LESSON;
