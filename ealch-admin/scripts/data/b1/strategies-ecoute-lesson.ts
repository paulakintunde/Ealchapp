// b1.38.l1 « Écouter sans tout comprendre » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE, strategy
// variant, amended §1.4) on top of B1-BUILD-PLAYBOOK.md. The listening twin of
// b1.37 « Lire sans tout comprendre » (strategies-lecture-lesson.ts): same act
// loop, same « use it » beat named the same way in every act, same closing act.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself, as b1.37 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 10 is built around a TEXT HEARD and a MOVE, in the
//   same four beats, then the act check:
//
//     1. MEET THE TEXT     an anchor `listening` with `hideLines: true`, a
//                          little ABOVE B1, before any explanation. Its
//                          questions ask what the move got from the audio;
//                          the lines unmask only once every question is
//                          answered, so the learner sees they got the
//                          meaning without every word.
//     2. NOTICE THE MOVE   one `focus`, `cardDeck`, `tapTable` or `hacks`.
//     3. PRACTISE          two or three checks on NEW material: `groupDrill`,
//                          `trapDrill`, `commonErrors`, a second
//                          `listening`, `dictation`, `flashcards`, `examples`.
//     4. USE IT            « Pour ta note », in every act: the act's one tool
//                          for the graded note. A `groupDrill` that sets the
//                          note line built with this act's move against the
//                          line a listener without the move would write.
//                          ONCE, in act 8, it is a short `scenario` under the
//                          same title (§1.4: vary the mechanic, keep the
//                          name), because asking for repetition can only be
//                          practised as a live exchange.
//
//   Act 1 is the problem scene; act 11 is the production act.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text heard · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le mur de son            6   a Montréal métro tannoy (scene)
//    2  Avant d'écouter          6   a Geneva gate announcement · predict
//                                    from the situation
//    3  L'idée d'abord           6   a Québec City weather bulletin, heard
//                                    twice · gist first, details second
//    4  Les mots qui portent     6   a Montréal traffic report · stressed
//                                    words, and the small word that turns
//    5  Chiffres, dates, noms    7   a clinic's phone confirmation · times,
//                                    dates, phone numbers, spelled names
//    6  Les panneaux de l'oral   6   a Montréal podcast · spoken signposts
//    7  Le français qui se parle 7   a street interview · chuis, t'as, y a,
//                                    the dropped ne, fillers, Québec words
//    8  Faire répéter            6   a customer-service call · asking for
//                                    repetition and checking back
//    9  Un fait ou une opinion   6   a Québec City radio call-in · sources
//   10  L'épreuve d'écoute       6   a lecture fragment as an exam document
//   11  La note pour Léa        11   the landlord's voicemail · plan, role
//                                    play, TASK, quiz, review
//
//   TOTAL 73 missions, 11 acts (6,6,6,6,7,6,7,6,6,6,11), 463 estimated
//   screens. Corpus: 185 authored rows (.1200-.1389, six numbers left empty
//   where a published twin is imported instead) plus 33 reused seed rows (13
//   of them b1.37's): 218 item ids, 217 released through `deckTranche`. 14 listenings (eleven anchors, the weather heard twice, a
//   numbers drill, b1.37's own source lines replayed to the ear), 0
//   readings. Quiz: 11 rounds of 8 (33 mcq, 22 typeIn, 11 errorSpot, 22
//   listenChoose). Eleven error triggers, eleven drills, five reference
//   sheets reached from 13 missions, eleven terms. Chapter artwork:
//   `strategies-ecoute-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Attrape le sens, pas chaque mot. »
//   EN: Catch the meaning, not every word.
//
//   ONE METAPHOR, THE NET. Speech is a river that does not stop and does not
//   come back; a cup catches nothing, a net keeps what carries the meaning.
//   It is NOT « let the hard parts go »: acts 4, 5 and 8 exist because one
//   « pas », one number or one name can BE the meaning. b1.37's reframe
//   (« Le sens d'abord, les mots ensuite. ») is quoted in act 3 and the
//   roundup, and rejected as this lesson's own because speech has no
//   « ensuite » (corpus §E).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    listening strategy at B1: predicting from the situation; gist
//           first, details second, gist alone with one pass; stressed and
//           content words, and the small reversing word; numbers, 24-hour
//           times, phone numbers (Québec digit by digit, France in pairs),
//           spelled names; spoken signposts (du coup, en fait, par contre,
//           bref); recognising reduced spoken forms and fillers; asking for
//           repetition with two options and checking by reformulation;
//           fact, source, opinion and rumour on the radio; question-first
//           listening for the TCF / TEF; the message note.
//   QUOTES  b1.37's reframe (acts 3 and 11, sheet-avant); b1.30's reframe
//           on the signpost deck (act 6); b1.25's reframe on register
//           (act 7); b1.20 by lesson label for the dropped ne; a1.27 for
//           septante and nonante. b1.37's rows .1161-.1166, .1167, .1170
//           are REPLAYED as act 9's second listening.
//   LEAVES  connectors as GRAMMAR to b1.30 to b1.32; register as a system
//           to b1.25; producing spoken forms to nobody (this lesson only
//           teaches RECOGNISING them, and the note asks for written French);
//           emails and letters to b1.39.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (announcements and services say « vous », Léa and the
//   street interview say « tu »). Every learner surface that explains
//   something carries English (`en`, or a final « EN: »), and NO ANSWER ever
//   does. Every `say` is French, fr-FR. Theme `strategies-de-comprehension`
//   (corpus §A.1). A1 citations use the English trail label; B1 ones are
//   French from the plan (« la leçon 37 du B1 »). Regional forms are marked
//   as regional every time (Québec: fin de semaine, tuque, refroidissement
//   éolien, le fun, pantoute, carte soleil, balado, ligne ouverte;
//   Belgium and Switzerland: septante, nonante). Scenario turns use ’ only.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. The task is a NOTE FROM A VOICEMAIL, not a summary of a listening.
//      Why: it remediates what b1.38 owns (times, numbers, a phone number,
//      what to do), it is the most common real listening-to-writing move,
//      and b1.37's task is already a summary. Keep?
//   2. TaskView has no source field and no player, so the task brief
//      prints the voicemail's TRANSCRIPT (and tells the learner to write
//      from memory first, then check). For a LISTENING task that turns part
//      of the detail-catching into reading. The ear is tested just before,
//      in `a11-message` (hidden lines, six questions). A `source` field on
//      `task` that can PLAY a recording would be the real fix. Accept the
//      transcript for now?
//   3. `Lesson.skill` is 'CO' by §1.4 (the lesson remediates listening),
//      although the task is written. Keep 'CO'?
//   4. 14 listenings and no reading. The playbook caps listening at 10;
//      §1.4 says a strategy lesson needs one anchor per act. Accept?
//   5. Quiz mix leans on listenChoose (22 of 88, the playbook's 12% is
//      11): for a listening lesson every round has two. Accept?
//   6. Every listening line is fr-FR TTS. The anchors imitate Québec,
//      Swiss and Belgian speakers in their WORDS (fin de semaine, balado,
//      septante), but the voice is France French until `audio.recorded`
//      briefs are recorded. The street interview (act 7) needs real voices
//      most: TTS reads « chuis » and « chais pas » but not naturally.
//   7. « carte soleil » (Québec, the health card) appears only in the act 8
//      role play, glossed in the next turn. Keep a regional word there?
//   8. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, B137, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  METRO_LINES, AEROPORT_LINES, METEO_LINES, ROUTES_LINES, CLINIQUE_LINES, PODCAST_LINES,
  MICRO_LINES, APPEL_LINES, LIGNE_LINES, COURS_LINES, MESSAGE_LINES, MESSAGE_TRANSCRIPT,
  B137_REFRAME, B137_REFRAME_EN, B130_REFRAME, B125_REFRAME,
  NOMBRES21_UNIT, GRANDS_NOMBRES_UNIT, NEGATION_UNIT, REGISTRES_UNIT, LECTURE_UNIT,
  NOMBRES21_REF, NEGATION_REF, LECTURE_REF, CONNECTEURS_REF, NEXT_REF,
} from './strategies-ecoute-corpus.ts';
import { STRATEGIES_ECOUTE_TERMS } from './strategies-ecoute-terms.ts';

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
  if (!r) throw new Error(`b1.38: no item ${id}`);
  return r;
}
/** Shorthand for this lesson's own rows. */
const S = (n: number) => src(E(n));

/** The corpus row's IPA, so a scene break or a trap card never retypes one. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.38: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.38: no respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation, with no corpus row. */
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

/** THE « USE IT » BEAT of the workshop shape: the act's one tool for the
 *  graded note. Same title in every act so a reviewer can find the beat. */
function pourTaNote(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta note', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE MUR DE SON
 *
 *  The problem, shown before any strategy is named: a learner on a métro
 *  platform translates a tannoy word by word, falls three sentences behind,
 *  and a neighbour who heard no more words than they did has the message.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Une voix dans le métro',
  frSub: 'Station Berri-UQAM',
  setting: { place: 'Le quai de la ligne orange, station Berri-UQAM', city: 'Montréal', time: '17 h 50', ambience: 'un quai plein, un grondement de métro, une voix rapide dans les haut-parleurs' },
  beats: [
    {
      kind: 'narration',
      text: "Vendredi, 17 h 50, station Berri-UQAM. Tu rentres chez toi, à la station Mont-Royal. Le quai est plein. Une voix sort des haut-parleurs.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'La voix du métro',
      fr: S(1201).fr, en: S(1201).en, respell: rsOf(E(1201)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "La voix continue, vite. Tu attrapes « panne », et tu cherches « interrompu » dans ta tête. Pendant ce temps, trois phrases sont passées.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Je n'ai rien compris, ça va trop vite.",
      en: 'I did not understand a thing, it is too fast.',
      respell: '[zhuh nay ryehⁿ kohⁿ-PREE | sa va troh VEET]',
      stage: "Tu as essayé de traduire chaque mot. La voix, elle, n'a pas attendu.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Une dame, à côté',
      fr: "C'est arrêté jusqu'à Jean-Talon. Y a des navettes dehors.",
      en: 'It is stopped as far as Jean-Talon. There are shuttle buses outside.',
      respell: '[seh-ta-reh-TAY zhüs-ka zhahⁿ ta-LOHⁿ | ya day na-VET duh-OR]',
      stage: "Elle n'a pas entendu plus de mots que toi. Elle a écouté autre chose.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: "La voix répète l'annonce. Cette fois, comment écoutes-tu ?",
      size: 'lg',
      options: [
        { fr: S(1208).fr, respell: rsOf(E(1208)), en: S(1208).en, outcome: 'breaks', audio: AUDIO },
        { fr: S(1209).fr, respell: rsOf(E(1209)), en: S(1209).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Tu attrapes « ligne orange », « Jean-Talon », « navettes », « dix-huit heures trente ». Mont-Royal est entre les deux : tu sors prendre la navette.",
        breaks: "Tu comprends « attention », puis « raison », puis tu perds le fil. La dame est partie, et tu attends sur un quai où aucun métro ne viendra.",
      },
    },
    {
      kind: 'break',
      heading: 'Tu écoutais des mots, pas un message',
      body: "À l'oral, les mots passent et ne reviennent pas. Tu ne peux pas tous les traduire. Écoute ce qui porte le sens : la ligne, le problème, les stations, l'heure. EN: Spoken words do not come back; listen for what carries the meaning.",
      wrong: { fr: S(1208).fr, ipa: ipaOf(E(1208)), respell: rsOf(E(1208)), en: S(1208).en },
      right: { fr: S(1209).fr, ipa: ipaOf(E(1209)), respell: rsOf(E(1209)), en: S(1209).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne dix façons d'attraper le sens sans entendre chaque mot. À la fin, tu vas écouter un message sur une boîte vocale et laisser une note écrite à ta colocataire.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['essentiel', 'note'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Savoir quoi attendre', s: "Actes 2 et 3 : prédire, puis l'idée avant les détails" },
    { t: 'Attraper ce qui compte', s: 'Actes 4 et 5 : les mots-clés, les chiffres, les noms' },
    { t: 'Suivre le français parlé', s: 'Actes 6 à 8 : les panneaux, les formes orales, faire répéter' },
    { t: 'Noter pour quelqu’un', s: "Actes 9 à 11 : fait ou opinion, l'épreuve, puis ta note écrite" },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the whole tannoy, hidden. The questions ask only what a
 *  net catches; the last one shows that the key part came twice. */
const A1_ANNONCE: Sec<'listening'> = {
  type: 'listening',
  id: 'a1-annonce',
  layer: 'core',
  hideLines: true,
  title: "L'annonce, en entier",
  frSub: 'Écoute le sens, pas chaque mot',
  lines: METRO_LINES.map(ln),
  questions: [
    { q: 'Quelle ligne de métro a un problème ?', opts: ['la ligne verte', 'la ligne orange', 'la ligne bleue'], correct: 1,
      why: 'La ligne orange, dès la deuxième phrase. EN: the orange line, in the second sentence.' },
    { q: 'Tu descends à Mont-Royal. Le métro t’y amène ?', opts: ['Non', 'Oui'], correct: 0,
      why: 'Mont-Royal est dans la liste des stations sans métro. EN: Mont-Royal is not being served.' },
    { q: 'Que proposent-ils pour continuer ?', opts: ['un taxi gratuit', 'un autre métro', 'des autobus, à la sortie'], correct: 2,
      why: "Des navettes d'autobus remplacent le métro. EN: shuttle buses replace the metro." },
    { q: 'Vers quelle heure le métro doit-il repartir ?', opts: ['vers 18 h 30', 'vers 8 h 30'], correct: 0,
      why: 'Dix-huit heures trente : six heures et demie du soir. EN: around 6:30 p.m.' },
    { q: 'Combien de fois l’annonce donne-t-elle les deux stations du problème ?', opts: ['une fois', 'deux fois'], correct: 1,
      why: "Deux fois : une annonce répète l'essentiel. Si tu rates, attends le « je répète ». EN: announcements repeat the key part." },
  ],
  audio: REC('rec-b1-38-metro'),
  say: REFRAME,
  terms: ['essentiel'],
};

/** PRACTISE: what the neighbour kept, and what can pass. */
const A1_SANS: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-sans',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu as sans tout entendre',
  groups: [
    grp('Ce que la dame a gardé', [
      it(E(1214), 'la ligne et les stations'),
      it(E(1215), 'ce qu’il faut faire'),
      it(E(1212), 'les trois questions du quai'),
    ], chk(
      "Pour ces deux phrases, de combien de mots de l'annonce as-tu besoin ?",
      ['cinq ou six', 'tous'], 0,
      'Ligne orange, Jean-Talon, navette, dix-huit heures trente : le reste peut passer. EN: a handful of words carry the message.')),
    grp('Ce qui peut passer', [
      it(E(1206), 'une formule polie'),
      it(E(1200), 'un appel à écouter'),
      it(E(1203), 'la liste des stations, utile si c’est la tienne'),
    ], chk(
      '« Nous nous excusons des inconvénients. » Si tu rates cette phrase, que perds-tu ?',
      ["toute l'information", "rien d'utile"], 1,
      'Une formule polie ne change rien pour toi. EN: a politeness formula; nothing to act on.')),
    ctl('La différence avec la lecture', 'Pendant une annonce, peux-tu revenir en arrière ?',
      ['Oui, comme dans un texte.', 'Seulement au téléphone.', 'Non, le son passe.'], 2,
      "À l'oral, les mots ne reviennent pas. C'est pour ça qu'on écoute le sens. EN: speech does not come back."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motcle', 'essentiel'],
};

/** Where listening for the meaning first costs something real. Each case is
 *  the QUESTION a listener puts to that audio. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: "Une annonce sur le quai, à l'heure de pointe", fr: S(1212).fr, en: S(1212).en },
    { situation: 'Un message sur ta boîte vocale', fr: "Qui appelle, et qu'est-ce que je dois faire ?", en: 'Who is calling, and what do I have to do?' },
    { situation: 'La météo à la radio, avant de sortir', fr: 'Il fait beau ou pas, et je mets quoi ?', en: 'Is it nice or not, and what do I wear?' },
    { situation: 'Un appel avec un service client', fr: 'Quel jour, quelle heure, et quel numéro ?', en: 'What day, what time, and what number?' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['essentiel', 'note'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl("L'ordre", "Une annonce passe trop vite. Tu écoutes d'abord...",
    ["chaque mot, dans l'ordre", 'ce qui change pour toi'], 1,
    'La ligne, le problème, ce que tu dois faire : le reste attend. EN: what changes for you comes first.'),
  ctl('Le mot raté', 'Tu rates un mot. Tu...',
    ["continues d'écouter la suite", "t'arrêtes pour le traduire", 'recommences dans ta tête'], 0,
    "La voix n'attend pas : un mot raté est souvent un détail. EN: the voice does not wait; a missed word is usually a detail."),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...',
    ["la transcription d'un message", 'une annonce de métro', 'une note pour ta colocataire'], 2,
    "Une note de quarante à soixante-dix mots, après un message sur la boîte vocale. EN: a 40 to 70 word note from a voicemail."),
], ['essentiel', 'note']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le mur de son',
    opener: {
      line: "Une annonce de métro trop rapide pour toi : ici tu apprends à la comprendre quand même. EN: A metro announcement too fast for you: here you learn to understand it anyway.",
      imageRef: 'lessons/strategies-ecoute/act01.jpg',
    },
    sections: [],
    milestone: "Tu tires d'une annonce rapide la ligne, le problème et ce qu'il faut faire. EN: You can take the line, the problem and what to do from a fast announcement.",
    estScreens: 28, restPoints: ['a1-annonce'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_ANNONCE, A1_SANS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — AVANT D'ÉCOUTER
 *
 *  TEXT: a gate announcement at Geneva for a flight to Montréal. MOVE: ask
 *  who is speaking, where and why BEFORE the voice starts, so the likely
 *  words are waiting in the ear. b1.37 act 3 does the same with a headline.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The first question is answered before the audio, from the setting. */
const A2_AEROPORT: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-aeroport',
  layer: 'core',
  hideLines: true,
  title: 'Un vol pour Montréal',
  frSub: "À l'aéroport de Genève : devine avant, écoute ensuite",
  lines: AEROPORT_LINES.map(ln),
  questions: [
    { q: "Avant l'écoute : aéroport, ton vol, un haut-parleur. Qu'est-ce qui est probable ?", opts: ['une recette de cuisine', 'une heure, une porte, un retard'], correct: 1,
      why: 'La situation annonce les mots. Tu les as reconnus plus vite. EN: the situation tells you which words to expect.' },
    { q: "Ton vol part-il à l'heure ?", opts: ["Non, avec une heure de retard", 'Oui', 'On ne le dit pas'], correct: 0,
      why: "Retardé d'une heure, à cause de la météo à Montréal. EN: one hour late." },
    { q: 'À quelle porte vas-tu ?', opts: ['A 12', 'B 32', 'B 23'], correct: 1,
      why: "B 32. « Et non plus » A 12 : l'ancienne porte ne vaut plus. EN: gate B32, no longer A12." },
    { q: 'Que peux-tu avoir au comptoir de la compagnie ?', opts: ['un bon de repas', 'un nouveau billet'], correct: 0,
      why: "Un bon de repas, pour manger pendant l'attente. EN: a meal voucher." },
    { q: 'Tu as une correspondance à Montréal. Que te dit-on ?', opts: ['de changer de vol tout de suite', 'de rester à Genève', "qu'on s'occupera de toi à l'arrivée"], correct: 2,
      why: "« Pris en charge » : quelqu'un t'aidera à Montréal. EN: you will be looked after on arrival." },
  ],
  audio: REC('rec-b1-38-aeroport'),
  say: REFRAME,
  terms: ['prediction'],
};

/** NOTICE THE MOVE: four questions to ask before the voice. */
const A2_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a2-focus',
  layer: 'core',
  sheetId: 'sheet-avant',
  title: "Quatre questions avant d'écouter",
  points: [
    'Qui parle ? Une voix officielle, un ami, un vendeur. EN: who is speaking?',
    'Où, et pourquoi ? La situation dit le sujet. EN: where, and why? The situation gives the topic.',
    'Quels mots vont venir ? Une porte, une heure, un prix, un nom. EN: which words will come?',
    "Qu'est-ce que je dois faire après ? C'est souvent la dernière phrase. EN: what must I do afterwards? Often the last sentence.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prediction'],
};

/** PRACTISE, on new situations: the likely words before the voice. */
const A2_DEVINE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-devine',
  layer: 'core',
  size: 'lg',
  title: 'Devine les mots avant la voix',
  frSub: 'Une situation, des mots probables',
  groups: [
    grp('Des situations que tu connais', [
      it(E(1226), "l'aéroport"),
      it(E(1227), 'la banque'),
      it(E(1228), 'la radio'),
      it(E(1229), 'la pharmacie'),
    ], chk(
      'Au guichet de la gare, quels mots vas-tu sûrement entendre ?',
      ['une voie, un horaire, un prix', 'une recette, un ingrédient', 'un score, une équipe'], 0,
      'Une gare, ce sont des trains : voie, heure, billet. EN: a station means tracks, times and tickets.')),
    grp('La question, avant la voix', [
      it(E(1225), 'qui, où, pourquoi'),
      it(E(1212), 'au métro'),
      it(E(1209), 'la règle du quai'),
    ], chk(
      "Tu appelles la clinique pour un rendez-vous. Qu'est-ce que tu attends ?",
      ['le prix des médicaments', 'un jour, une heure, le nom du médecin'], 1,
      "Un rendez-vous, c'est un jour, une heure et une personne. EN: an appointment means a day, a time and a person.")),
    ctl('Et si tu te trompes', 'Tu attendais un retard, et on annonce un changement de porte. Ta prédiction était...',
      ['utile quand même : tu écoutais pour ton vol', 'inutile', 'une erreur grave'], 0,
      'Une prédiction prépare l’oreille. Si elle est fausse, tu corriges vite. EN: a prediction readies the ear, even when it is wrong.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prediction'],
};

/** PRACTISE: four ways a listener without a prediction goes wrong. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre écoutes sans préparation',
  errors: [
    { wrong: "J'écoute l'annonce, et je devine le sujet après.",
      right: S(1225).fr,
      why: "Normal : on attend de tout entendre pour comprendre. Mais la situation te donnait le sujet avant la voix. EN: the situation gives you the topic first." },
    { wrong: "Ma porte, c'est la A 12.",
      right: "Ma porte, c'est la B 32, et non plus la A 12.",
      why: "Tu as reconnu A 12 : tu l'attendais. Mais « et non plus » annulait cette porte. EN: et non plus cancelled the old gate." },
    { wrong: 'Le vol est annulé.',
      right: "Le vol est retardé d'une heure.",
      why: "Tu as entendu un problème, et tu as imaginé le pire. Retardé veut dire plus tard, pas annulé. EN: retardé means later, not cancelled." },
    { wrong: "J'ai raté le début, donc je n'écoute plus.",
      right: "J'ai raté le début, mais j'attends le « je répète ».",
      why: "Normal de décrocher quand on rate le début. Mais une annonce redit l'essentiel à la fin. EN: announcements repeat the key part at the end." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prediction', 'motcle'],
};

/** USE IT: a note says what changes for the reader. */
const A2_NOTE = pourTaNote('a2-note', 'Ta note dit ce qui change', [
  grp('Une note utile', [
    it(E(1231), 'le retard et la porte'),
    free('Il y a un problème avec mon vol.', 'There is a problem with my flight.', 'sans les détails'),
  ], chk(
    'Ton amie vient te chercher à Montréal. Quelle note lui envoies-tu ?',
    ['la première', 'la seconde'], 0,
    "La première dit ce qui change pour elle : une heure de plus. EN: the first tells her what changes for her.")),
  grp("Ce qu'elle doit savoir", [
    it(E(1233), 'le retard'),
    it(E(1234), 'le piège'),
    it('fr.a1.deplacements.162', 'le mot du départ'),
  ], chk(
    'Dans ta note à ton amie, tu gardes la porte A 12 ?',
    ['Oui, avec la B 32.', "Non : pour elle, seule l'heure d'arrivée compte."], 1,
    "Ton amie attend à Montréal : la porte de Genève ne la concerne pas. EN: she needs the new arrival time, not the Geneva gate.")),
], ['prediction', 'note']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Avant la voix', 'Avant une annonce, tu te demandes...',
    ['qui parle, où et pourquoi', 'combien de mots tu connais'], 0,
    'Trois questions, et tu sais quels mots attendre. EN: three questions, and you know which words to expect.'),
  ctl('Et non plus', '« Porte B 32, et non plus porte A 12. » Tu vas à...',
    ['A 12', 'aux deux', 'B 32'], 2,
    'Et non plus annule la porte d’avant. EN: et non plus cancels the old gate.'),
  ctl('Une prédiction fausse', 'Ta prédiction était fausse. Elle était...',
    ['inutile', 'quand même utile'], 1,
    "Elle a préparé ton oreille au sujet : tu corriges le détail. EN: it readied your ear for the topic."),
], ['prediction']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: "Avant d'écouter",
    opener: {
      line: "Une porte, une heure, peut-être un retard : ici tu apprends à deviner ce que tu vas entendre. EN: A gate, a time, maybe a delay: here you learn to guess what you are about to hear.",
      imageRef: 'lessons/strategies-ecoute/act02.jpg',
    },
    sections: [],
    milestone: "Tu prépares ton oreille avant d'écouter : qui parle, où, pourquoi, et quels mots vont venir. EN: You get your ear ready before listening: who, where, why, and which words will come.",
    estScreens: 27, restPoints: ['a2-focus'],
  },
  sections: [A2_AEROPORT, A2_FOCUS, A2_DEVINE, A2_ERREURS, A2_NOTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — L'IDÉE D'ABORD
 *
 *  TEXT: a Québec City radio weather bulletin, heard TWICE. MOVE: the first
 *  pass is for the gist, the second for the details, and with one pass the
 *  gist is what you keep. The only act that plays the same audio twice,
 *  because the second pass IS the move (b1.37 act 3 reads its article twice
 *  for the same reason).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: first pass, gist questions only. */
const A3_METEO1: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-meteo1',
  layer: 'core',
  hideLines: true,
  title: 'La météo à Québec',
  frSub: 'Première écoute : en gros',
  lines: METEO_LINES.map(ln),
  questions: [
    { q: 'En gros, il va faire beau et chaud cette semaine ?', opts: ['Non, froid et gris', 'Oui'], correct: 0,
      why: "Neige, vent, froid : l'idée passe sans aucun chiffre. EN: snow, wind, cold; the gist needs no figures." },
    { q: 'Le temps va-t-il changer avant la fin de la semaine ?', opts: ['Non, pas du tout', 'Oui, ce sera un peu plus doux'], correct: 1,
      why: 'Un redoux arrive : un peu moins froid. EN: a mild spell is coming.' },
    { q: 'De quoi parle la voix, surtout ?', opts: ['de la circulation', 'du métro', 'du temps qu’il fait'], correct: 2,
      why: 'Météo, averses, soleil, froid : tout le bulletin. EN: the weather, all the way through.' },
    { q: 'Tu as raté « refroidissement éolien ». Tu as perdu l’idée ?', opts: ["Non, l'idée passe sans ce mot", "Oui, c'est essentiel"], correct: 0,
      why: "Il fait froid, et le vent le rend pire : l'idée passe sans ce mot. EN: cold made worse by wind; the gist survives." },
  ],
  audio: REC('rec-b1-38-meteo'),
  say: REFRAME,
  terms: ['essentiel'],
};

/** NOTICE THE MOVE: two passes, two questions, and b1.37's line. */
const A3_DEUX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-deux',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avant',
  title: 'Deux écoutes, deux questions',
  frSub: "L'idée, puis les détails",
  hint: 'Quatre cartes. Regarde ce que ton oreille cherche.',
  audio: REC('rec-b1-38-deux'),
  say: REFRAME,
  terms: ['essentiel'],
  cards: [
    {
      head: 'Première écoute', label: "l'idée",
      fr: S(1242).fr, sub: rsOf(E(1242)),
      body: "De quoi ça parle ? Bonne ou mauvaise nouvelle ? Tu ne t'arrêtes sur aucun mot. EN: what is it about, good or bad news; stop on no word.",
    },
    {
      head: 'Deuxième écoute', label: 'les détails',
      fr: S(1243).fr, sub: rsOf(E(1243)),
      body: 'Maintenant tu sais quoi chercher : un jour, une température, un conseil. EN: now you know what to look for.',
    },
    {
      head: 'Une seule écoute', label: 'à la radio',
      fr: S(1250).fr, sub: rsOf(E(1250)),
      body: "La radio ne répète pas. Garde l'idée : c'est elle que tu vas redire. EN: the radio will not repeat; keep the gist.",
    },
    {
      head: 'Comme à la lecture', label: Cap(LECTURE_REF),
      fr: B137_REFRAME, sub: '[luh SAHⁿS da-BOR | lay MOH ahⁿ-SWEET]',
      body: `C'est la règle de ${LECTURE_REF}. À l'oral, la deuxième écoute joue le rôle du « ensuite ». EN: ${B137_REFRAME_EN} The second pass plays the part of « after ».`,
    },
  ],
};

/** MEET again: the same bulletin, now for the details. */
const A3_METEO2: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-meteo2',
  layer: 'core',
  hideLines: true,
  title: 'La météo, deuxième écoute',
  frSub: 'Maintenant, les détails',
  lines: METEO_LINES.map(ln),
  questions: [
    { q: "Ce matin, qu'est-ce qui tombe ?", opts: ['de la pluie', 'de la neige', 'rien'], correct: 1,
      why: 'Quelques averses de neige. EN: a few snow showers.' },
    { q: 'Cet après-midi, on ressentira combien ?', opts: ['moins deux', 'moins douze', 'moins vingt-deux'], correct: 2,
      why: 'Moins vingt-deux, avec le vent. EN: minus twenty-two with the wind chill.' },
    { q: 'Le soleil revient quand ?', opts: ['demain', 'samedi'], correct: 0,
      why: 'Demain, retour du soleil, mais il fait toujours froid. EN: tomorrow, still cold.' },
    { q: 'La fin de semaine, les maximums seront autour de...', opts: ['zéro', 'dix degrés'], correct: 0,
      why: 'Autour de zéro : le redoux. EN: highs around zero.' },
    { q: 'Que te conseille la voix ?', opts: ['de rester à la maison', 'de sortir la tuque et les mitaines'], correct: 1,
      why: "Tuque et mitaines : un bonnet et des gants, au Québec. EN: a woolly hat and mittens, Québec words." },
  ],
  audio: REC('rec-b1-38-meteo'),
  say: REFRAME,
  terms: ['essentiel'],
};

/** PRACTISE: idea or detail? Sorted before writing anything down. */
const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-trier',
  layer: 'core',
  size: 'lg',
  title: "L'idée ou un détail ?",
  frSub: 'Trie avant de noter',
  groups: [
    grp("Ce qu'on garde à la première écoute", [
      it(E(1245), "l'idée de la météo"),
      it('fr.b1.projets-et-futur.772', "l'idée d'une autre semaine"),
    ], chk(
      "Laquelle dit l'idée générale du bulletin de Québec ?",
      [S(1245).fr, S(1239).fr], 0,
      "« En gros » : froid, puis plus doux. Le redoux est un détail de cette idée. EN: the gist; the mild spell is a detail.")),
    grp('Des détails pour la deuxième écoute', [
      it(E(1237), 'une température'),
      it(E(1239), 'un jour et des maximums'),
      it(E(1240), 'un conseil'),
    ], chk(
      "Ton ami veut juste savoir s'il faut un manteau. As-tu besoin de la deuxième écoute ?",
      ["Non, l'idée suffit.", 'Oui, pour tous les chiffres.'], 0,
      "Il fait très froid : l'idée répond déjà. EN: the gist already answers."),
    ),
    ctl('Les mots du Québec', '« La fin de semaine », au Québec, c’est...',
      ['le vendredi soir', 'le samedi et le dimanche', 'la fin du mois'], 1,
      'Au Québec, la fin de semaine est le week-end. EN: the weekend, in Québec French.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['essentiel'],
};

/** USE IT: one line of idea before any figure. */
const A3_NOTE = pourTaNote('a3-note', "Une phrase d'idée avant les chiffres", [
  grp("L'idée d'abord", [
    it(E(1245), "la phrase d'idée"),
    free('Moins vingt-deux avec le vent, un redoux, des maximums autour de zéro.', 'Minus twenty-two with the wind, a mild spell, highs around zero.', 'des chiffres sans idée'),
  ], chk(
    'Laquelle ton amie comprend-elle en deux secondes ?',
    ['la seconde', 'la première'], 1,
    "L'idée d'abord ; les chiffres, si elle en a besoin. EN: the idea first; the figures if she needs them.")),
  ctl('Un seul chiffre', 'Si tu gardes un seul chiffre, lequel ?',
    ['moins vingt-deux avec le vent', 'les maximums de la fin de semaine', "l'heure du bulletin"], 0,
    "C'est lui qui dit : mets ton manteau. EN: that is the one that tells her to wrap up."),
], ['essentiel', 'note']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Première écoute', 'À la première écoute, tu cherches...',
    ['tous les chiffres', "l'idée générale"], 1,
    "L'idée d'abord : de quoi ça parle, bonne ou mauvaise nouvelle. EN: the gist first."),
  ctl('Une seule écoute', 'La radio ne répète pas. Tu gardes...',
    ['le dernier mot entendu', 'la première phrase', "l'idée"], 2,
    "L'idée, c'est ce que tu vas redire. EN: the gist is what you will pass on."),
  ctl('Le mot inconnu', "Tu rates « refroidissement éolien ». L'idée du bulletin est perdue ?",
    ['Non', 'Oui'], 0,
    'Froid et vent : le sens reste. EN: cold and wind; the meaning stays.'),
], ['essentiel']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: "L'idée d'abord",
    opener: {
      line: "La météo passe une seule fois : ici tu apprends à garder l'idée d'abord, et les détails à la deuxième écoute. EN: The weather goes by once: here you learn to keep the idea first and the details on a second pass.",
      imageRef: 'lessons/strategies-ecoute/act03.jpg',
    },
    sections: [],
    milestone: "Tu gardes l'idée d'un bulletin à la première écoute, et tu vas chercher les détails à la deuxième. EN: You keep the gist of a bulletin on the first pass and fetch the details on the second.",
    estScreens: 30, restPoints: ['a3-deux'],
  },
  sections: [A3_METEO1, A3_DEUX, A3_METEO2, A3_TRIER, A3_NOTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LES MOTS QUI PORTENT
 *
 *  TEXT: a Montréal radio traffic report. MOVE: follow the stressed,
 *  content-carrying words (French stresses the end of each group), and keep
 *  one ear for the small word that reverses the sentence: pas, sauf, mais,
 *  et non plus, aucun.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The trap question is the bridge that is NOT closed. */
const A4_ROUTES: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-routes',
  layer: 'core',
  hideLines: true,
  title: 'La circulation, à 7 h 45',
  frSub: 'Les mots forts, et le petit « pas »',
  lines: ROUTES_LINES.map(ln),
  questions: [
    { q: 'Tu dois passer par le pont Jacques-Cartier à 8 h. C’est possible ?', opts: ['Oui', "Non, il est fermé jusqu'à 9 h"], correct: 1,
      why: "Fermé dans les deux directions jusqu'à neuf heures. EN: closed until nine." },
    { q: 'Et le pont Champlain ?', opts: ['Il est fermé aussi.', 'On ne sait pas.', 'Ça roule bien.'], correct: 2,
      why: "« N'est pas touché » : le petit pas dit que tout va bien. EN: not affected." },
    { q: "Sur l'autoroute 40, combien de temps de plus ?", opts: ['trente minutes', 'treize minutes'], correct: 0,
      why: 'Trente minutes de plus, à cause de l’accident. EN: thirty extra minutes.' },
    { q: 'Le métro a-t-il un problème ?', opts: ['Oui', 'Non'], correct: 1,
      why: 'Aucun problème à signaler. EN: no problems.' },
    { q: 'Quels mots t’ont donné les réponses ?', opts: ['les noms, les verbes, les chiffres', 'les petits mots le, de, à'], correct: 0,
      why: 'Pont, fermé, neuf heures, trente minutes : les mots forts. EN: the strong words.' },
  ],
  audio: REC('rec-b1-38-routes'),
  say: REFRAME,
  terms: ['motcle'],
};

/** NOTICE THE MOVE: what the ear hears strongly, and the small word. */
const A4_FORTS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-forts',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avant',
  title: "Ce que l'oreille entend fort",
  frSub: 'Le rythme du français',
  hint: 'Quatre cartes. Écoute où la voix appuie.',
  audio: REC('rec-b1-38-forts'),
  say: REFRAME,
  terms: ['motcle'],
  cards: [
    {
      head: 'La fin du groupe', label: 'le rythme',
      fr: S(1259).fr, sub: rsOf(E(1259)),
      body: "La voix appuie sur la dernière syllabe de chaque groupe : le pont, fermé, neuf heures. C'est souvent le mot important. EN: French stresses the end of each group, often the key word.",
    },
    {
      head: 'Les mots forts', label: 'le mot-clé',
      fr: S(1258).fr, sub: rsOf(E(1258)),
      body: 'Garde les noms, les verbes et les chiffres. Le, de, à passent vite et comptent peu. EN: keep nouns, verbs and numbers; little grammar words pass quickly.',
    },
    {
      head: 'Une note en mots-clés', label: 'pour noter vite',
      fr: S(1261).fr, sub: rsOf(E(1261)),
      body: 'Trois mots suffisent pour ne pas oublier. Tu feras des phrases plus tard. EN: three words are enough; sentences come later.',
    },
    {
      head: 'Le petit mot qui change tout', label: 'le piège',
      fr: 'pas · sauf · et non plus', sub: '[PA · SOHF · ay nohⁿ PLÜ]',
      body: "Ces mots sont petits et rapides, et ils retournent la phrase. Tends l'oreille pour eux. EN: small, fast, and they turn the sentence around.",
    },
  ],
};

/** PRACTISE, on new sentences: three words to keep, and the small word. */
const A4_CLES: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-cles',
  layer: 'core',
  size: 'lg',
  title: 'Trouve les mots-clés',
  frSub: 'Trois mots pour une phrase',
  groups: [
    grp('Garde trois mots', [
      it(E(1264), 'réunion, pas jeudi, vendredi'),
      it(E(1266), 'magasin, plus tôt, sauf samedi'),
      it(E(1261), 'la note de la radio'),
    ], chk(
      'Une note en mots-clés sert à...',
      ["ne rien oublier pendant l'écoute", 'écrire une belle phrase'], 0,
      "Tu notes vite, pendant que la voix continue. EN: you note fast while the voice goes on.")),
    grp('Le petit mot', [
      it(E(1265), "le vol annulé : lequel ?"),
      it(E(1263), 'le pas du pont'),
      it(B137(1073), 'un mot, retard, et tu sais'),
    ], chk(
      '« Le vol de Paris est annulé, pas celui de Lyon. » Tu vas à Lyon. Tu pars ?',
      ['Non, il est annulé.', 'Oui, seul Paris est annulé.'], 1,
      "« Pas celui de Lyon » : ton vol n'est pas touché. EN: yours is not the cancelled one.")),
    ctl('Sauf', '« Le magasin ferme plus tôt, sauf le samedi. » Le samedi, il ferme...',
      ['plus tôt', "à l'heure normale"], 1,
      'Sauf retire le samedi de la règle. EN: sauf takes Saturday out of the rule.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motcle'],
};

/** PRACTISE, the trap, stepped. `promptSound` is what a listener who missed
 *  the small word reports; `fr` is what the voice really said. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Six petits mots ratés',
  rule: {
    title: 'Le petit mot retourne la phrase',
    body: "Pas, sauf, mais, et non plus, aucun : ils sont courts, et on les rate. Pourtant, ils disent le contraire de ce que tu crois. EN: short words like pas and sauf are easy to miss and reverse the meaning.",
  },
  cards: [
    { promptLabel: 'le pas raté', promptSound: 'Le pont Champlain est fermé.', fr: S(1263).fr, ipa: ipaOf(E(1263)), tip: 'Le pas passe vite, et tu as entendu fermé. Le pont roule bien. EN: the pas went by fast; the bridge is open.' },
    { promptLabel: 'le sauf raté', promptSound: 'Le magasin ferme plus tôt le samedi.', fr: S(1266).fr, ipa: ipaOf(E(1266)), tip: 'Sauf enlève le samedi. EN: sauf removes Saturday.' },
    { promptLabel: 'le mais raté', promptSound: 'La réunion a lieu jeudi.', fr: S(1264).fr, ipa: ipaOf(E(1264)), tip: 'Mais vendredi corrige jeudi. EN: mais vendredi corrects jeudi.' },
    { promptLabel: 'le celui raté', promptSound: 'Le vol de Lyon est annulé.', fr: S(1265).fr, ipa: ipaOf(E(1265)), tip: "Pas celui de Lyon : c'est Paris qui est annulé. EN: Paris is cancelled, not Lyon." },
    { promptLabel: 'le et non plus raté', promptSound: "L'embarquement a lieu porte A 12.", fr: S(1220).fr, ipa: ipaOf(E(1220)), tip: 'Et non plus A 12 : la porte a changé. EN: the gate changed.' },
    { promptLabel: 'le aucun raté', promptSound: 'Dans le métro, un problème à signaler.', fr: S(1256).fr, ipa: ipaOf(E(1256)), tip: 'Aucun problème : tout va bien. EN: aucun means none.' },
  ],
  drill: [
    { promptSay: 'Le pont Champlain ... fermé.', opts: ["n'est pas", 'est'], correct: 0 },
    { promptSay: 'Le samedi, le magasin ferme ... .', opts: ['plus tôt', "à l'heure normale"], correct: 1 },
    { promptSay: 'La réunion a lieu ... .', opts: ['jeudi', 'mercredi', 'vendredi'], correct: 2 },
    { promptSay: "Le vol annulé, c'est celui de ... .", opts: ['Paris', 'Lyon'], correct: 0 },
    { promptSay: "Ta porte, maintenant, c'est la ... .", opts: ['A 12', 'B 32'], correct: 1 },
    { promptSay: 'Dans le métro, il y a ... problème.', opts: ['un', 'aucun', 'un gros'], correct: 1 },
    { promptSay: "Le pont Jacques-Cartier est fermé jusqu'à ... heures.", opts: ['neuf', 'deux', 'onze'], correct: 0 },
    { promptSay: "Sur l'autoroute 40, compte ... minutes de plus.", opts: ['treize', 'trente'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le petit mot retourne la phrase' },
    { label: 'Six cartes', kind: 'cards', title: "Ce que l'oreille pressée a cru entendre" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-38-piege-mots'),
  say: REFRAME,
  terms: ['motcle'],
};

/** USE IT: key words become one useful sentence. */
const A4_NOTE = pourTaNote('a4-note', 'Des mots-clés, puis une phrase', [
  grp('De la radio à ta note', [
    it(E(1261), 'trois mots-clés'),
    free("Le pont Jacques-Cartier est fermé jusqu'à neuf heures : passe par le pont Champlain.", 'The Jacques-Cartier Bridge is closed until nine: take the Champlain Bridge.', 'la phrase pour ton collègue'),
  ], chk(
    'Ton collègue part à 8 h. Que lui écris-tu ?',
    ['seulement « ça roule mal »', 'le pont fermé, l’heure, et le pont qui roule'], 1,
    "Les mots-clés deviennent une phrase utile : quoi, jusqu'à quand, quoi faire. EN: key words become a useful sentence.")),
  ctl('Le petit mot, dans ta note', 'Tu écris « le pont Champlain est fermé ». C’est...',
    ['le contraire de la radio', 'juste'], 0,
    "La radio a dit « n'est pas touché ». Un pas oublié, et ton collègue fait un détour. EN: one missed pas and your colleague takes a detour."),
], ['motcle', 'note']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Les mots forts', 'Quels mots portent le sens ?',
    ['le, la, de, à', 'les noms, les verbes, les chiffres'], 1,
    'Ce sont eux que la voix appuie. EN: those are the words the voice stresses.'),
  ctl('Le rythme', 'En français, la voix appuie sur...',
    ['la fin du groupe', 'le premier mot', 'chaque mot pareil'], 0,
    'La dernière syllabe du groupe. EN: the last syllable of the group.'),
  ctl('Le piège', '« Pas » est un petit mot. Il est...',
    ['sans importance', 'capable de tout changer'], 1,
    'Un pas raté, et tu comprends le contraire. EN: miss pas and you get the opposite.'),
], ['motcle']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Les mots qui portent',
    opener: {
      line: "Un pont fermé, un autre ouvert : ici tu apprends à entendre les mots qui portent le sens. EN: One bridge closed, another open: here you learn to hear the words that carry the meaning.",
      imageRef: 'lessons/strategies-ecoute/act04.jpg',
    },
    sections: [],
    milestone: "Tu attrapes les mots forts d'un message, et tu ne rates plus le petit mot qui change tout. EN: You catch the strong words of a message and no longer miss the small word that turns it.",
    estScreens: 36, restPoints: ['a4-forts', 'a4-piege'],
  },
  sections: [A4_ROUTES, A4_FORTS, A4_CLES, A4_PIEGE, A4_NOTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LES CHIFFRES, LES DATES ET LES NOMS
 *
 *  TEXT: a clinic's automated confirmation message. MOVE: what cannot be
 *  guessed must be caught or asked for: the end of the number word, the
 *  24-hour clock, phone digits (Québec one by one, France in pairs), and a
 *  name spelled letter by letter. a1.27 gave septante and nonante; b1.37
 *  act 5 read numbers on the page. This act is the same ground, by ear.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Every question is a number, a date or a name. */
const A5_CLINIQUE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-clinique',
  layer: 'core',
  hideLines: true,
  title: 'Un message de la clinique',
  frSub: 'Des chiffres, une date, un nom',
  lines: CLINIQUE_LINES.map(ln),
  questions: [
    { q: 'Quel jour est le rendez-vous ?', opts: ['lundi 4 mars', 'mardi 14 mars', 'mardi 4 mai'], correct: 1,
      why: 'Mardi quatorze mars, dit deux fois. EN: Tuesday 14 March, said twice.' },
    { q: 'À quelle heure ?', opts: ['15 h 45', '5 h 45', '15 h 15'], correct: 0,
      why: "Quinze heures quarante-cinq : quatre heures moins le quart de l'après-midi. EN: 3:45 p.m." },
    { q: 'Dans quel bureau ?', opts: ['302', '213', '312'], correct: 2,
      why: 'Trois cent douze : écoute le z de douze. EN: 312; listen for the z of douze.' },
    { q: 'Comment s’écrit le nom du médecin ?', opts: ['Nguyen', 'Nuyen', 'Gwen'], correct: 0,
      why: "La voix l'a épelé : N, G, U, Y, E, N. EN: it was spelled out." },
    { q: 'Combien de minutes avant faut-il arriver ?', opts: ['cinquante', 'quinze'], correct: 1,
      why: 'Quinze minutes avant, avec la carte. EN: fifteen minutes early.' },
    { q: 'Quel numéro appelles-tu pour annuler ?', opts: ['514 555-0142', '514 555-0124'], correct: 0,
      why: 'Zéro, un, quatre, deux : chiffre par chiffre, dans l’ordre. EN: digit by digit, in order.' },
  ],
  audio: REC('rec-b1-38-clinique'),
  say: REFRAME,
  terms: ['chiffres'],
};

/** NOTICE THE MOVE: six number traps for the ear. */
const A5_PIEGES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-pieges',
  layer: 'core',
  sheetId: 'sheet-chiffres',
  title: "Six pièges des chiffres à l'oral",
  cols: ['Tu entends', 'Attention', 'Exemple'],
  rows: [
    { cells: ['quinze · cinquante', 'écoute la fin : -inze ou -ante', '15 ou 50'], say: S(1276).fr,
      detail: { title: 'Quinze ou cinquante', body: 'Le début est proche, la fin change : quinze finit en -inze, cinquante en -ante. EN: listen to the ending.', say: S(1277).fr } },
    { cells: ['deux · douze', 'douze finit par un son z', '2 ou 12'], say: S(1278).fr,
      detail: { title: 'Deux ou douze', body: "Douze se termine par un son z. Deux s'arrête sur la voyelle. EN: douze ends in a z sound.", say: 'Le bus passe toutes les deux minutes.' } },
    { cells: ['dix-sept heures', "l'heure sur 24 heures", '17 h, 5 h du soir'], say: S(1281).fr,
      detail: { title: "L'heure officielle", body: "Les annonces et les rendez-vous comptent souvent sur 24 heures. Enlève douze pour l'heure de l'après-midi. EN: subtract twelve for the afternoon time.", say: S(1270).fr } },
    { cells: ['cinq un quatre', 'au Québec, chiffre par chiffre', '514'], say: S(1282).fr,
      detail: { title: 'Le téléphone au Québec', body: 'Au Québec, on dit souvent chaque chiffre : cinq, un, quatre. Écris-les un par un. EN: in Québec, phone digits are said one by one.', say: S(1274).fr } },
    { cells: ['zéro six, douze', 'en France, deux par deux', '06 12'], say: S(1283).fr,
      detail: { title: 'Le téléphone en France', body: 'En France, on groupe par deux : zéro six, douze, trente-quatre. Écris deux chiffres à la fois. EN: in France, digits come in pairs.', say: "Mon numéro, c'est le zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit." } },
    { cells: ['septante · nonante', 'en Belgique et en Suisse', '70 et 90'], say: src(B137(1086)).fr,
      detail: { title: 'Septante et nonante', body: `Tu les as vus dans ${NOMBRES21_REF}. Septante, c'est soixante-dix ; nonante, quatre-vingt-dix. EN: seventy and ninety in Belgium and Switzerland.`, say: src(B137(1087)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chiffres'],
};

/** PRACTISE by ear, on new lines: the pairs that sound alike. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quinze ou cinquante ?',
  frSub: 'Écoute la fin des chiffres',
  lines: [
    ln(E(1276)), ln(E(1277)), ln(E(1278)), ln(E(1279)),
    ln(E(1280)), ln(E(1281)), ln(B137(1086)), ln(B137(1087)),
  ],
  questions: [
    { q: 'Première phrase : le rendez-vous est à quelle heure ?', opts: ['à 15 h', 'à 5 h'], correct: 0,
      why: 'Quinze heures : trois heures de l’après-midi. EN: 3 p.m.' },
    { q: 'Combien de places restent ?', opts: ['15', '50'], correct: 1,
      why: 'Cinquante : la fin en -ante. EN: fifty.' },
    { q: 'Le bus passe toutes les combien de minutes ?', opts: ['2', '20', '12'], correct: 2,
      why: 'Douze : le son z à la fin. EN: twelve.' },
    { q: 'Quelle chambre ?', opts: ['206', '260', '216'], correct: 0,
      why: 'Deux cent six. EN: 206.' },
    { q: 'Il est né en quelle année ?', opts: ['1986', '1996', '1976'], correct: 1,
      why: 'Quatre-vingt-seize : 96. EN: 1996.' },
    { q: 'Le billet coûte combien ?', opts: ['90 euros', '70 euros'], correct: 0,
      why: 'Nonante, en Suisse : quatre-vingt-dix. EN: ninety.' },
  ],
  audio: REC('rec-b1-38-chiffres-ecoute'),
  say: REFRAME,
  terms: ['chiffres'],
};

/** PRACTISE, the trap, stepped. `promptSound` is the number a hasty ear
 *  wrote down; `fr` is what the voice said. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-chiffres',
  title: 'Six chiffres mal entendus',
  rule: {
    title: 'Un chiffre ne se devine pas',
    body: "Quinze et cinq, deux et douze, six et seize se ressemblent. Écoute la fin du mot, pense à l'heure sur 24 heures, et note chaque chiffre dès qu'il arrive. EN: similar numbers differ at the end; note each digit as it comes.",
  },
  cards: [
    { promptLabel: 'quinze ou cinq', promptSound: 'Le rendez-vous est à cinq heures.', fr: S(1276).fr, ipa: ipaOf(E(1276)), tip: "Quinze heures : trois heures de l'après-midi. EN: fifteen hundred is 3 p.m." },
    { promptLabel: 'cinquante ou quinze', promptSound: 'Il reste quinze places.', fr: S(1277).fr, ipa: ipaOf(E(1277)), tip: 'Cinquante finit en -ante. EN: cinquante ends in -ante.' },
    { promptLabel: 'douze ou deux', promptSound: 'Le bus passe toutes les deux minutes.', fr: S(1278).fr, ipa: ipaOf(E(1278)), tip: 'Le son z final : douze. EN: the final z is douze.' },
    { promptLabel: 'dix-sept heures', promptSound: "Dix-sept heures, c'est sept heures du soir.", fr: S(1281).fr, ipa: ipaOf(E(1281)), tip: 'Enlève douze : cinq heures. EN: subtract twelve.' },
    { promptLabel: 'six ou seize', promptSound: "Ma chambre, c'est la deux cent seize.", fr: S(1279).fr, ipa: ipaOf(E(1279)), tip: 'Six, pas seize : écoute la fin. EN: six, not seize.' },
    { promptLabel: 'quatre-vingt-seize', promptSound: 'Il est né en mille neuf cent quatre-vingt-six.', fr: S(1280).fr, ipa: ipaOf(E(1280)), tip: 'Le seize final compte : 96. EN: the final seize counts.' },
  ],
  drill: [
    { promptSay: "Quinze heures, c'est ... de l'après-midi.", opts: ['cinq heures', 'trois heures'], correct: 1 },
    { promptSay: "Cinquante, c'est ... .", opts: ['50', '15'], correct: 0 },
    { promptSay: 'Le bus passe toutes les ... minutes.', opts: ['deux', 'douze', 'vingt'], correct: 1 },
    { promptSay: "Dix-sept heures, c'est ... .", opts: ['5 h du soir', '7 h du soir'], correct: 0 },
    { promptSay: "Ma chambre, c'est la ... .", opts: ['216', '206', '260'], correct: 1 },
    { promptSay: "Quatre-vingt-seize, c'est ... .", opts: ['96', '86'], correct: 0 },
    { promptSay: "Au Québec, cinq un quatre, c'est ... .", opts: ['54', '5 14', '514'], correct: 2 },
    { promptSay: 'Le rendez-vous est au bureau ... .', opts: ['302', '312'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un chiffre ne se devine pas' },
    { label: 'Six cartes', kind: 'cards', title: "Ce que l'oreille pressée a noté" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit chiffres', gate: true },
  ],
  audio: REC('rec-b1-38-piege-chiffres'),
  say: REFRAME,
  terms: ['chiffres'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris les chiffres que tu entends',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['chiffres'],
};

/** USE IT: the note keeps the numbers exactly, in figures. */
const A5_NOTE = pourTaNote('a5-note', 'Les chiffres exacts, en chiffres', [
  grp("Une note qu'on peut suivre", [
    it(E(1285), 'le jour, l’heure, le nom'),
    free('Rendez-vous mardi après-midi chez la docteure.', 'Appointment on Tuesday afternoon with the doctor.', 'sans chiffres'),
  ], chk(
    "Ton conjoint t'accompagne. Quelle note lui laisses-tu ?",
    ['la seconde', 'la première'], 1,
    "La première dit le jour, l'heure et le nom : il peut venir sans t'appeler. EN: day, time and name: he can come without calling you.")),
  ctl('Écrire un nom', "Tu n'es pas sûr du nom du médecin. Tu...",
    ['le fais épeler', "l'écris comme tu l'entends", "l'oublies"], 0,
    `Un nom se fait épeler : « ${src('fr.a1.dictee.132').fr} » EN: have names spelled.`),
], ['chiffres', 'note']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Quinze ou cinquante', 'Pour les distinguer, tu écoutes...',
    ['le début du mot', 'la fin du mot'], 1,
    '-inze ou -ante : tout est à la fin. EN: it is all in the ending.'),
  ctl('Dix-sept heures', "Dix-sept heures, c'est...",
    ['cinq heures du soir', 'sept heures du matin', 'sept heures du soir'], 0,
    'Dix-sept moins douze : cinq. EN: seventeen minus twelve is five.'),
  ctl('Un chiffre douteux', 'Tu hésites sur un chiffre. Tu...',
    ['devines', 'fais répéter, ou tu notes et vérifies'], 1,
    'Un chiffre ne se devine pas. EN: a number is never guessed.'),
], ['chiffres']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Chiffres, dates et noms',
    opener: {
      line: "Un jour, une heure, un bureau, un nom qui s'épelle : ici tu apprends à attraper ce qui ne se devine pas. EN: A day, a time, an office, a name spelled out: here you learn to catch what cannot be guessed.",
      imageRef: 'lessons/strategies-ecoute/act05.jpg',
    },
    sections: [],
    milestone: "Tu notes juste un chiffre, une heure, une date et un nom épelé, à la vitesse d'un message. EN: You can note a number, a time, a date and a spelled name correctly, at message speed.",
    estScreens: 40, restPoints: ['a5-pieges', 'a5-piege'],
  },
  sections: [A5_CLINIQUE, A5_PIEGES, A5_ECOUTE, A5_PIEGE, A5_DICTEE, A5_NOTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LES PANNEAUX DE L'ORAL
 *
 *  TEXT: a Montréal podcast (« balado » in Québec) on life without a car.
 *  MOVE: the spoken signposts announce what comes next: d'abord and ensuite
 *  add, par contre turns, du coup gives the result, bref concludes, en fait
 *  corrects. b1.37 act 7 read the written ones; b1.30 to b1.32 own the
 *  grammar and are only cited.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_PODCAST: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-podcast',
  layer: 'core',
  hideLines: true,
  title: 'Un balado sur la vie sans voiture',
  frSub: 'Suis les panneaux',
  lines: PODCAST_LINES.map(ln),
  questions: [
    { q: 'Le premier avantage de la vie sans voiture ?', opts: ['on bouge plus', 'ça coûte moins cher', 'on dort mieux'], correct: 1,
      why: "D'abord : moins cher. Le premier panneau annonce le premier point. EN: d'abord brings the first point." },
    { q: 'Après « par contre », de quoi parle la voix ?', opts: ["d'un autre avantage", "d'un problème : l'hiver"], correct: 1,
      why: "Par contre tourne : l'hiver, c'est une autre histoire. EN: par contre turns to winter." },
    { q: 'Que font beaucoup de gens pour les grosses courses ?', opts: ["ils utilisent l'autopartage", 'ils prennent un taxi'], correct: 0,
      why: 'Du coup, l’autopartage : la conséquence de l’hiver. EN: du coup gives the result: car sharing.' },
    { q: 'La conclusion, après « bref » ?', opts: ["C'est impossible sans voiture.", "C'est possible, en s'organisant.", "Il faut une voiture l'hiver."], correct: 1,
      why: "Bref : possible, mais il faut s'organiser. EN: possible, with some organising." },
    { q: "Quels mots t'ont montré le plan ?", opts: ["les connecteurs : d'abord, ensuite, par contre, bref", 'les noms de rues'], correct: 0,
      why: 'Quatre panneaux, quatre parties. EN: four signposts, four parts.' },
  ],
  audio: REC('rec-b1-38-podcast'),
  say: REFRAME,
  terms: ['connecteur'],
};

/** NOTICE THE MOVE: four signposts and what each announces, with b1.30's
 *  reframe quoted on the last card. */
const A6_PANNEAUX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-panneaux',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-fil',
  title: "Les panneaux de l'oral",
  frSub: 'Ce qui vient après',
  hint: 'Quatre cartes. Écoute ce que chaque mot annonce.',
  audio: REC('rec-b1-38-panneaux'),
  say: REFRAME,
  terms: ['connecteur'],
  cards: [
    {
      head: 'Ajouter', label: "d'abord, ensuite",
      fr: "d'abord · ensuite · en plus", sub: '[da-BOR · ahⁿ-SWEET · ahⁿ PLÜSS]',
      body: 'Ils ajoutent un point, puis un autre, dans le même sens. Compte-les pour suivre le plan. EN: they add points in the same direction.',
    },
    {
      head: 'Tourner', label: 'par contre, mais',
      fr: S(1295).fr, sub: rsOf(E(1295)),
      body: "Après par contre, l'autre côté arrive : un problème après un avantage. C'est souvent là que le message change. EN: after par contre, the other side.",
    },
    {
      head: 'La conséquence', label: 'du coup, donc',
      fr: S(1296).fr, sub: rsOf(E(1296)),
      body: "Du coup est très oral : il veut dire donc. La phrase qui suit, c'est le résultat. EN: du coup is spoken donc; the result follows.",
    },
    {
      head: 'Conclure', label: 'bref',
      fr: S(1297).fr, sub: rsOf(E(1297)),
      body: `Bref annonce l'idée principale. ${Cap(CONNECTEURS_REF)} t'apprennent à les écrire : « ${B130_REFRAME} » EN: bref announces the main idea.`,
    },
  ],
};

/** PRACTISE, on new lines: what comes after the signpost. */
const A6_APRES: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-apres',
  layer: 'core',
  size: 'lg',
  title: "Qu'est-ce qui vient après ?",
  frSub: 'Devine la suite au connecteur',
  groups: [
    grp('Le connecteur annonce', [
      it(E(1300), 'du coup : la conséquence'),
      it(E(1301), "par contre : l'autre côté"),
      it('fr.b1.connecteurs-logiques.1542', 'par contre, encore'),
    ], chk(
      '« Le loyer était trop cher. Du coup... » Qu’est-ce qui vient ?',
      ['on a déménagé', 'le loyer était bas'], 0,
      'Du coup annonce le résultat du loyer cher. EN: du coup brings the result.')),
    grp('Pour conclure ou corriger', [
      it(B137(1135), 'bref : la conclusion'),
      it(E(1302), 'en fait : une correction'),
      it(B137(1132), 'pourtant : un tournant'),
    ], chk(
      'Tu entends « en fait ». La personne va...',
      ['ajouter un exemple', 'conclure', "corriger ou préciser ce qu'elle a dit"], 2,
      'En fait corrige : mardi, pas jeudi. EN: en fait corrects or clarifies.')),
    ctl('Par contre', 'Après « par contre », tu attends...',
      ['la même idée', "l'idée inverse"], 1,
      "L'autre côté : un problème après un avantage. EN: the opposite side."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

/** PRACTISE: four signposts that live mostly in speech. */
const A6_ORAL: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-oral',
  layer: 'core',
  title: 'Quatre panneaux très oraux',
  examples: [
    ex(E(1303), "Du coup : donc, à l'oral. Très courant, partout."),
    ex(E(1302), 'En fait : la personne corrige ou précise.'),
    ex(E(1291), "Par contre : l'hiver change tout."),
    ex(E(1294), 'Bref : la conclusion du balado, en une phrase.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

/** USE IT: a note keeps the turn. */
const A6_NOTE = pourTaNote('a6-note', 'Le panneau garde le plan', [
  grp('Ta note, avec son tournant', [
    it(E(1299), "l'avantage et le problème"),
    free('Vivre sans voiture coûte moins cher et on bouge plus.', 'Living without a car costs less and you move more.', 'sans le par contre'),
  ], chk(
    'Laquelle est fidèle au balado ?',
    ['la première', 'la seconde'], 0,
    "La seconde oublie l'hiver : le par contre a disparu. EN: the second drops winter: the turn is gone.")),
  ctl('Bref, dans ta note', 'Si tu gardes une seule phrase du balado, laquelle ?',
    ["celle après « d'abord »", 'celle après « bref »', 'la première'], 1,
    "Après bref, l'idée principale. EN: after bref, the main idea."),
], ['connecteur', 'note']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Du coup', '« Du coup » veut dire...',
    ['pourtant', 'donc'], 1,
    'Du coup, c’est donc, à l’oral. EN: du coup means so.'),
  ctl('Bref', 'Après « bref », tu entends...',
    ['un détail', 'une question', "l'idée principale"], 2,
    'Bref conclut. EN: bref concludes.'),
  ctl("D'abord, ensuite", "« D'abord », puis « ensuite » : le message...",
    ['ajoute des points', "change d'avis"], 0,
    'Un point, puis un autre, dans le même sens. EN: one point, then another.'),
], ['connecteur']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: "Les panneaux de l'oral",
    opener: {
      line: "D'abord, ensuite, par contre, bref : ici tu suis un balado grâce à ses panneaux. EN: First, then, on the other hand, in short: here you follow a podcast by its signposts.",
      imageRef: 'lessons/strategies-ecoute/act06.jpg',
    },
    sections: [],
    milestone: 'Tu entends où va un message : il ajoute, il tourne, il conclut. EN: You can hear where a message is going: adding, turning, concluding.',
    estScreens: 30, restPoints: ['a6-panneaux'],
  },
  sections: [A6_PODCAST, A6_PANNEAUX, A6_APRES, A6_ORAL, A6_NOTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE FRANÇAIS QUI SE PARLE
 *
 *  TEXT: a street interview in Montréal. MOVE: recognise the reduced forms
 *  (chuis, chais pas, t'as, t'es, y a, the dropped ne) and let the fillers
 *  pass (ben, euh, genre), then write the full form. Recognition only: the
 *  lesson never asks the learner to PRODUCE the spoken forms. b1.20 owns the
 *  dropped ne and b1.25 owns register; both are cited. Québec forms (le fun,
 *  pantoute) are marked as Québec every time.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_MICRO: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-micro',
  layer: 'core',
  hideLines: true,
  title: 'Le micro dans la rue',
  frSub: 'Des réponses en vrai français parlé',
  lines: MICRO_LINES.map(ln),
  questions: [
    { q: 'La première personne est pour ou contre les terrasses jusqu’à minuit ?', opts: ['pour', 'contre'], correct: 0,
      why: 'Chuis pour : je suis pour. EN: chuis pour means I am for it.' },
    { q: 'Pourquoi la deuxième personne hésite-t-elle ?', opts: ["elle n'aime pas la bière", 'elle habite au-dessus d’un bar et ne dort pas'], correct: 1,
      why: 'Du coup je dors pas : le ne est tombé, le pas reste. EN: ne dropped, pas stayed.' },
    { q: 'Que pense la troisième personne des prix ?', opts: ['trop chers', 'normaux', 'gratuits'], correct: 0,
      why: "Genre n'est qu'une béquille ; c'est trop, c'est l'avis. EN: genre is a filler; too dear is the view." },
    { q: 'La quatrième personne veut du calme à partir de quelle heure ?', opts: ['dix heures', 'onze heures'], correct: 1,
      why: "Après onze heures. C'est le fun : c'est amusant, au Québec. EN: after eleven; c'est le fun is Québec for it is fun." },
    { q: 'La cinquième personne aime le bruit ?', opts: ['Oui, beaucoup', 'Un peu', 'Non, pas du tout'], correct: 2,
      why: 'Pantoute, au Québec : pas du tout. EN: pantoute is Québec for not at all.' },
    { q: 'En gros, les gens sont...', opts: ['partagés', 'tous pour'], correct: 0,
      why: "Pour, contre, pourquoi pas : les avis sont partagés. EN: opinions are divided." },
  ],
  audio: REC('rec-b1-38-micro'),
  say: REFRAME,
  terms: ['reduction', 'bequille'],
};

/** NOTICE THE MOVE: six spoken forms, each with its written twin. */
const A7_FORMES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-formes',
  layer: 'core',
  sheetId: 'sheet-oral',
  title: 'Six formes du français parlé',
  cols: ['Tu entends', "C'est", "À l'écrit"],
  rows: [
    { cells: ['chuis', 'je suis', 'Je suis pour.'], say: S(1325).fr,
      detail: { title: 'Chuis', body: "Je suis se réduit en un seul son : chuis. Très courant, partout. À l'écrit, écris je suis. EN: je suis shrinks to one sound.", say: S(1306).fr } },
    { cells: ['chais pas', 'je ne sais pas', 'Je ne sais pas trop.'], say: S(1313).fr,
      detail: { title: 'Chais pas', body: `Le ne tombe, et je sais devient chais. ${Cap(NEGATION_REF)} t'a montré que le ne tombe à l'oral. EN: ne drops and je sais becomes chais.`, say: src('fr.b1.negation-et-restriction.1167').fr } },
    { cells: ["t'as, t'es", 'tu as, tu es', 'Tu as vu les prix ?'], say: src('fr.b1.langue-soignee.1271').fr,
      detail: { title: "T'as, t'es", body: "Le u de tu disparaît devant une voyelle. T'as vu, t'es où : c'est familier, pas faux. EN: tu loses its u before a vowel.", say: S(1326).fr } },
    { cells: ['y a', 'il y a', "Il n'y a rien de mieux."], say: src('fr.b1.negation-et-restriction.1171').fr,
      detail: { title: 'Y a', body: 'Il y a perd son il, et souvent son ne : y a rien, y a personne. EN: il y a loses il and often ne.', say: S(1324).fr } },
    { cells: ['pas, sans ne', 'ne ... pas', 'Je ne dors pas.'], say: S(1307).fr,
      detail: { title: 'Le ne qui tombe', body: "À l'oral, le ne disparaît souvent : seul le pas reste. Écoute bien le pas, c'est lui qui dit non. EN: ne drops; pas alone carries the no.", say: src('fr.b1.negation-et-restriction.1175').fr } },
    { cells: ['ben, euh, genre', 'des béquilles', 'rien à écrire'], say: S(1320).fr,
      detail: { title: 'Les béquilles', body: 'Elles donnent du temps à la personne qui parle. Elles ne portent pas de sens : laisse-les passer. EN: fillers carry no meaning.', say: src('fr.a2.prepositions-essentielles.192').fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reduction', 'bequille'],
};

/** PRACTISE: the same three answers, spoken, then written. */
const A7_TRADUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-traduire',
  layer: 'core',
  size: 'lg',
  title: "De l'oral à l'écrit",
  frSub: 'Même sens, autre forme',
  groups: [
    grp("L'oral", [
      it(E(1306), 'chuis, y a'),
      it(E(1307), 'chais pas, du coup, je dors pas'),
      it(E(1308), "t'as, genre"),
    ], chk(
      'Ces trois phrases sont...',
      ['familières, mais justes', 'des fautes'], 0,
      "Ces formes sont normales à l'oral. Ce ne sont pas des fautes. EN: normal speech, not mistakes.")),
    grp('Le même sens, à l’écrit', [
      it(E(1321), "je suis, il n'y a"),
      it(E(1322), 'je ne sais pas, donc, je ne dors pas'),
      it(E(1323), 'tu as, sans genre'),
    ], chk(
      "Qu'est-ce qui a disparu à l'écrit ?",
      ['les chiffres', 'les béquilles : ben, euh, genre', 'les verbes'], 1,
      "Les béquilles ne portent pas de sens : l'écrit les laisse. EN: fillers vanish in writing.")),
    ctl('Du coup', "Dans « du coup je dors pas », à l'écrit, « du coup » devient...",
      ['donc', 'pourtant'], 0,
      "Du coup, c'est donc à l'oral. EN: du coup is spoken donc."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reduction', 'bequille'],
};

/** PRACTISE, the trap, stepped. `promptSound` is what an ear that took the
 *  spoken form literally understood; `fr` is what was said. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-oral',
  title: 'Six pièges du français parlé',
  rule: {
    title: "L'oral n'est pas faux, il est rapide",
    body: "Sans le ne, seul pas ou plus dit non. Genre n'est pas une sorte, du coup n'est pas un coup. EN: without ne, pas or plus says no; genre and du coup are not what they seem.",
  },
  cards: [
    { promptLabel: 'y a plus', promptSound: 'Il y a encore du pain.', fr: S(1324).fr, ipa: ipaOf(E(1324)), tip: "Y a plus, c'est il n'y a plus : le pain est fini. EN: y a plus means there is none left." },
    { promptLabel: 'genre', promptSound: 'Une sorte de bière coûte dix dollars.', fr: S(1308).fr, ipa: ipaOf(E(1308)), tip: "Genre est ici une béquille, comme like en anglais. EN: genre here is a filler, like like." },
    { promptLabel: 'du coup', promptSound: "J'habite au-dessus d'un bar, et j'ai reçu un coup.", fr: S(1307).fr, ipa: ipaOf(E(1307)), tip: "Du coup veut dire donc. Personne n'a reçu de coup. EN: du coup means so." },
    { promptLabel: "t'es", promptSound: 'Tes affaires sont devant la gare.', fr: S(1326).fr, ipa: ipaOf(E(1326)), tip: "T'es, c'est tu es : on te demande où tu es. EN: t'es is tu es." },
    { promptLabel: 'pantoute', promptSound: "Moi, j'aime le bruit partout.", fr: S(1310).fr, ipa: ipaOf(E(1310)), tip: "Pantoute, au Québec, veut dire pas du tout. EN: pantoute is Québec French for not at all." },
    { promptLabel: 'ben', promptSound: 'Bien, oui, tous les soirs.', fr: S(1311).fr, ipa: ipaOf(E(1311)), tip: "Ben n'est pas un oui : c'est une béquille pour commencer. EN: ben is just a filler to start." },
  ],
  drill: [
    { promptSay: 'Y a plus de pain : il reste du pain ?', opts: ['oui', 'non'], correct: 1 },
    { promptSay: "Chuis fatigué, c'est...", opts: ['je suis fatigué', 'tu es fatigué'], correct: 0 },
    { promptSay: "T'es où ? veut dire...", opts: ['où sont tes affaires ?', 'où es-tu ?'], correct: 1 },
    { promptSay: "J'aime pas pantoute : j'aime...", opts: ['pas du tout', 'un peu', 'partout'], correct: 0 },
    { promptSay: "Du coup, à l'écrit, c'est...", opts: ['pourtant', 'donc', 'un coup'], correct: 1 },
    { promptSay: 'Genre, dix dollars : genre veut dire...', opts: ['une sorte', "rien, c'est une béquille"], correct: 1 },
    { promptSay: "Chais pas, c'est...", opts: ['je ne sais pas', 'je sais'], correct: 0 },
    { promptSay: 'Je dors pas : je dors ?', opts: ['oui', 'non'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: "L'oral n'est pas faux" },
    { label: 'Six cartes', kind: 'cards', title: "Ce que l'oreille a cru entendre" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit formes', gate: true },
  ],
  audio: REC('rec-b1-38-piege-oral'),
  say: REFRAME,
  terms: ['reduction', 'bequille'],
};

/** Consolidation, as answers: English front, spoken French back, no EN tail. */
const A7_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-cartes',
  layer: 'core',
  title: 'Huit formes à retourner',
  cards: [
    { front: 'I am (spoken)', back: 'chuis', say: S(1325).fr },
    { front: 'dunno (spoken)', back: 'chais pas', say: S(1307).fr },
    { front: 'you have (spoken)', back: "t'as", say: S(1308).fr },
    { front: 'you are (spoken)', back: "t'es", say: S(1326).fr },
    { front: 'there is (spoken)', back: 'y a', say: S(1306).fr },
    { front: 'there is none left (spoken)', back: 'y a plus', say: S(1324).fr },
    { front: 'so, as a result (spoken)', back: 'du coup', say: S(1300).fr },
    { front: 'not at all (Québec)', back: 'pantoute', say: S(1310).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reduction'],
};

/** USE IT: the note is written French, whatever was heard. */
const A7_NOTE = pourTaNote('a7-note', "Ta note est écrite, pas parlée", [
  grp("L'avis des gens, à l'écrit", [
    it(E(1327), "l'idée, en français écrit"),
    free('Les gens, genre, y en a qui sont pour, et du coup d’autres chais pas.', 'People, like, some are for it, and so others dunno.', "l'oral recopié"),
  ], chk(
    'Laquelle mets-tu dans un message à ta collègue ?',
    ['la seconde', 'la première'], 1,
    'La première garde le sens et laisse les béquilles. EN: the first keeps the meaning and drops the fillers.')),
  ctl('Le registre', "Chuis, t'as, y a : dans ta note, tu écris...",
    ['la forme complète', 'la forme orale'], 0,
    `Chaque forme a sa place : « ${B125_REFRAME} » EN: in writing, use the full form.`),
], ['reduction', 'note']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Chuis', '« Chuis » veut dire...',
    ['je suis', 'je sais', 'tu es'], 0,
    'Je suis, réduit en un son. EN: je suis, in one sound.'),
  ctl('Le ne', 'Sans le ne, quel mot dit non ?',
    ['le verbe', 'pas ou plus'], 1,
    'Le pas reste, et il porte le non. EN: pas stays and carries the no.'),
  ctl('Les béquilles', '« Ben », « euh », « genre » : tu les notes ?',
    ['Oui', 'Non'], 1,
    'Elles ne portent pas de sens. EN: they carry no meaning.'),
], ['reduction', 'bequille']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le français qui se parle',
    opener: {
      line: "Chuis, t'as, y a, du coup : ici tu comprends le français comme les gens le parlent vraiment. EN: Chuis, t'as, y a, du coup: here you understand French as people really speak it.",
      imageRef: 'lessons/strategies-ecoute/act07.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais les formes du français parlé et les béquilles, et tu écris la forme complète. EN: You recognise everyday spoken forms and fillers, and write the full form.',
    estScreens: 44, restPoints: ['a7-formes', 'a7-piege'],
  },
  sections: [A7_MICRO, A7_FORMES, A7_TRADUIRE, A7_PIEGE, A7_CARTES, A7_NOTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — FAIRE RÉPÉTER, VÉRIFIER
 *
 *  TEXT: a call with a customer service. MOVE: in a live exchange you CAN
 *  ask: pardon, plus lentement, and best, « vous avez dit X ou Y ? », which
 *  gets a one-word answer; then check back with « si je comprends bien ».
 *  The A2 counter phrases (au-restaurant .133, .134) are the base; this act
 *  adds the two-option check and the reformulation.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_APPEL: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-appel',
  layer: 'core',
  hideLines: true,
  title: 'Un appel au service à la clientèle',
  frSub: 'Écoute comment on fait répéter',
  lines: APPEL_LINES.map(ln),
  questions: [
    { q: 'Qui va venir chez le client ?', opts: ['un technicien', 'un plombier', 'un livreur'], correct: 0,
      why: 'Le technicien, dès la deuxième phrase. EN: the technician.' },
    { q: 'Quel jour ?', opts: ['le mercredi 22', 'le mercredi 23', 'le jeudi 22'], correct: 0,
      why: 'Le vingt-deux : le client a vérifié. EN: the 22nd, checked by the caller.' },
    { q: 'Entre quelles heures ?', opts: ['entre 3 h et 7 h', 'entre 13 h et 17 h'], correct: 1,
      why: "Treize et dix-sept heures : une heure et cinq heures de l'après-midi. EN: 1 to 5 p.m." },
    { q: "Qu'a fait le client quand l'agente parlait trop vite ?", opts: ['il a raccroché', 'il a demandé de répéter plus lentement'], correct: 1,
      why: 'Plus lentement : il a demandé une autre vitesse. EN: he asked for a slower pace.' },
    { q: 'Comment le client vérifie-t-il à la fin ?', opts: ["il redit l'essentiel avec ses mots", "il demande le nom de l'agente", 'il ne vérifie pas'], correct: 0,
      why: "Si je comprends bien : il redit, et l'agente confirme. EN: he says it back and she confirms." },
    { q: 'Le numéro de dossier ?', opts: ['947012', '974012'], correct: 1,
      why: 'Neuf, sept, quatre, zéro, un, deux : chiffre par chiffre. EN: digit by digit.' },
  ],
  audio: REC('rec-b1-38-appel'),
  say: REFRAME,
  terms: ['repeter', 'reformuler'],
};

/** NOTICE THE MOVE: four ways to ask, from the simplest to the most useful. */
const A8_REPETER: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-repeter',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-conversation',
  title: 'Quatre façons de faire répéter',
  frSub: 'De la plus simple à la plus utile',
  hint: 'Quatre cartes. La troisième est la plus efficace.',
  audio: REC('rec-b1-38-repeter'),
  say: REFRAME,
  terms: ['repeter'],
  cards: [
    {
      head: 'Répéter', label: 'la plus simple',
      fr: src('fr.a2.au-restaurant.133').fr, sub: '[voo poo-VAY ray-pay-TAY | seel voo PLEH]',
      body: 'Poli et normal. La personne répète tout, parfois aussi vite. EN: polite and normal; the person repeats everything.',
    },
    {
      head: 'Plus lentement', label: 'la vitesse',
      fr: S(1330).fr, sub: rsOf(E(1330)),
      body: 'Tu demandes une autre vitesse, pas seulement une répétition. EN: you ask for a slower pace, not just a repeat.',
    },
    {
      head: 'Deux choix', label: 'la plus efficace',
      fr: S(1337).fr, sub: rsOf(E(1337)),
      body: 'Tu dis ce que tu as entendu. La personne répond en un mot : cinquante. EN: say what you heard; the answer comes in one word.',
    },
    {
      head: 'Épeler', label: 'pour un nom',
      fr: S(1339).fr, sub: rsOf(E(1339)),
      body: 'Un nom ou une adresse ne se devinent pas. Demande les lettres. EN: names and addresses must be spelled.',
    },
  ],
};

/** PRACTISE: which request fits this moment, then how to check. */
const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelle demande, ici ?',
  frSub: 'Faire répéter, puis vérifier',
  groups: [
    grp('Faire répéter', [
      it(E(1337), 'deux choix'),
      it(E(1338), 'dire ce qui manque'),
      it('fr.a2.au-restaurant.134', 'la vitesse'),
    ], chk(
      "L'agente dit une heure, et tu hésites entre 15 h et 16 h. Tu dis...",
      ['« Quoi ? »', '« Oui, d’accord. »', '« Vous avez dit quinze ou seize heures ? »'], 2,
      'Tu nommes les deux choix : la réponse arrive en un mot. EN: naming the two options gets a one-word answer.')),
    grp('Vérifier avant de raccrocher', [
      it(E(1334), 'si je comprends bien'),
      it(E(1340), "c'est bien ça ?"),
      it(E(1336), 'la formule'),
    ], chk(
      "Pourquoi redire l'essentiel à la fin de l'appel ?",
      ['pour que la personne corrige une erreur tout de suite', 'pour être poli'], 0,
      "Si tu t'es trompé, on te corrige avant de raccrocher. EN: any mistake gets corrected before you hang up.")),
    ctl('Un nom', "L'agente dit « Madame Nguyen ». Tu n'es pas sûr. Tu demandes...",
      ['« Pardon ? » trois fois', '« Vous pouvez l’épeler ? »'], 1,
      'Un nom se fait épeler : les lettres arrivent une par une. EN: a spelled name comes letter by letter.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repeter', 'reformuler'],
};

/** PRACTISE: four ways to lose a call. Each `wrong` was a natural choice. */
const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de rater un appel',
  errors: [
    { wrong: 'Quoi ?', right: 'Pardon ?',
      why: "Normal : c'est ce qu'on dit entre amis, comme what en anglais. Avec un service, pardon ou comment passe mieux. EN: quoi is for friends; with a service, say pardon." },
    { wrong: 'Oui, oui, d’accord.', right: S(1338).fr,
      why: "On dit oui pour ne pas gêner, et on raccroche sans le numéro. Dire ce qui manque est plus poli que rappeler. EN: a polite yes loses the number." },
    { wrong: 'Répétez.', right: src('fr.a2.au-restaurant.133').fr,
      why: "À l'impératif seul, la demande sonne comme un ordre. Une question passe mieux. EN: a bare imperative sounds like an order." },
    { wrong: 'Je ne comprends pas le français.', right: S(1337).fr,
      why: "C'est faux, et on va te passer un collègue anglophone. Tu as presque tout compris : demande juste le chiffre. EN: you understood almost all of it; ask for the missing number." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repeter'],
};

/** USE IT, out loud, under the same title as every other act: the learner
 *  calls the clinic of act 5 back and gets every figure right for the note.
 *  One apostrophe style throughout (’), as the scenario check requires. */
const A8_NOTE: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a8-note',
  layer: 'core',
  title: 'Pour ta note',
  setting: 'Tu rappelles la clinique médicale du Plateau pour vérifier ton rendez-vous. La réceptionniste parle vite. Tu fais répéter et tu vérifies, pour noter juste.',
  turns: [
    {
      ai: 'Clinique médicale du Plateau, bonjour.',
      en: 'Plateau medical clinic, hello.',
      user: 'Bonjour, j’appelle pour vérifier mon rendez-vous avec la docteure Nguyen.',
      userEn: 'Hello, I am calling to check my appointment with Dr Nguyen. (Why you are calling, first.)',
      alts: [
        { fr: 'Bonjour, c’est pour mon rendez-vous de mardi, s’il vous plaît.', en: 'Hello, it is about my Tuesday appointment, please.' },
        { fr: 'Bonjour, je voudrais confirmer un rendez-vous.', en: 'Hello, I would like to confirm an appointment.' },
      ],
    },
    {
      ai: 'Oui, alors, c’est mardi le quatorze à quinze heures quarante-cinq, troisième étage, bureau trois cent douze.',
      en: 'Yes, so, it is Tuesday the fourteenth at 3:45 p.m., third floor, office 312.',
      user: 'Pardon, vous pouvez répéter plus lentement, s’il vous plaît ?',
      userEn: 'Sorry, can you repeat that more slowly, please? (Ask for a slower pace.)',
      alts: [
        { fr: 'Excusez-moi, ça va un peu vite pour moi.', en: 'Excuse me, that is a bit fast for me.' },
        { fr: 'Pardon, je n’ai pas tout compris.', en: 'Sorry, I did not catch everything.' },
      ],
    },
    {
      ai: 'Bien sûr. Mardi quatorze, quinze heures quarante-cinq.',
      en: 'Of course. Tuesday the fourteenth, 3:45 p.m.',
      user: 'Vous avez dit quinze heures ou cinq heures ?',
      userEn: 'Did you say three p.m. or five? (Two options: the answer comes in one word.)',
      alts: [
        { fr: 'Quinze heures, c’est bien ça ?', en: 'Three p.m., is that right?' },
        { fr: 'C’est l’après-midi, alors ?', en: 'That is in the afternoon, then? (Checking the part of the day.)' },
      ],
    },
    {
      ai: 'Quinze heures, donc trois heures quarante-cinq de l’après-midi.',
      en: 'Fifteen hundred, so a quarter to four in the afternoon.',
      user: 'Et le bureau, c’est le trois cent douze ou le trois cent deux ?',
      userEn: 'And the office, is it 312 or 302? (Deux and douze sound alike: check.)',
      alts: [
        { fr: 'Et le numéro du bureau, vous pouvez le répéter ?', en: 'And the office number, can you repeat it?' },
        { fr: 'Le bureau trois cent douze, c’est ça ?', en: 'Office 312, is that it?' },
      ],
    },
    {
      ai: 'Trois cent douze. Et n’oubliez pas votre carte soleil.',
      en: 'Three hundred and twelve. And do not forget your health card.',
      user: 'Excusez-moi, je ne connais pas ce mot. C’est quoi, la carte soleil ?',
      userEn: 'Excuse me, I do not know that word. What is the carte soleil? (Ask about the word that blocks you.)',
      alts: [
        { fr: 'Pardon, quelle carte ?', en: 'Sorry, which card?' },
        { fr: 'La carte soleil, c’est la carte d’assurance maladie ?', en: 'The carte soleil, is that the health insurance card? (A guess, checked.)' },
      ],
    },
    {
      ai: 'C’est la carte d’assurance maladie. Au Québec, on dit la carte soleil.',
      en: 'It is the health insurance card. In Québec we call it the carte soleil.',
      user: 'Si je comprends bien : mardi quatorze, quinze heures quarante-cinq, bureau trois cent douze, avec ma carte.',
      userEn: 'If I understand correctly: Tuesday the fourteenth, 3:45 p.m., office 312, with my card. (Say it all back before hanging up.)',
      alts: [
        { fr: 'Donc mardi, quinze heures quarante-cinq, bureau trois cent douze. C’est bien ça ?', en: 'So Tuesday, 3:45 p.m., office 312. Is that right?' },
        { fr: 'Parfait, je note : mardi quatorze à quinze heures quarante-cinq.', en: 'Perfect, I am writing it down: Tuesday the fourteenth at 3:45 p.m.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repeter', 'reformuler'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Deux choix', 'Pour vérifier un chiffre, la demande la plus efficace est...',
    ['« Pardon ? »', '« Vous avez dit quinze ou cinquante ? »'], 1,
    'Deux choix : la réponse arrive en un mot. EN: two options get a one-word answer.'),
  ctl('Avant de raccrocher', 'Tu dis « si je comprends bien... » pour...',
    ['finir poliment', 'changer de sujet', 'vérifier que tu as bien compris'], 2,
    "Tu redis l'essentiel, et on te corrige si besoin. EN: you say it back and get corrected if needed."),
  ctl('Quoi ?', 'Avec un service client, « Quoi ? » est...',
    ['trop familier', 'parfait'], 0,
    'Entre amis, oui ; avec un service, dis pardon. EN: fine with friends; say pardon to a service.'),
], ['repeter', 'reformuler']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Faire répéter',
    opener: {
      line: "Au téléphone, personne ne te montre le texte : ici tu apprends à faire répéter et à vérifier. EN: On the phone nobody shows you the text: here you learn to ask again and to check.",
      imageRef: 'lessons/strategies-ecoute/act08.jpg',
    },
    sections: [],
    milestone: 'Tu fais répéter juste ce qui manque, et tu vérifies avant de raccrocher. EN: You ask for exactly the missing part and check before hanging up.',
    estScreens: 34, restPoints: ['a8-repeter'],
  },
  sections: [A8_APPEL, A8_REPETER, A8_CHOISIR, A8_ERREURS, A8_NOTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — UN FAIT OU UNE OPINION
 *
 *  TEXT: a Québec City radio call-in (« ligne ouverte »). MOVE: listen for
 *  WHO is speaking before what they say: the host's facts, the City's
 *  sourced figure, a caller's opinion, a rumour and the host's correction.
 *  b1.37 act 9 taught the markers on the page; its own lines are replayed
 *  here as the second listening, so the learner meets them by ear.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LIGNE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ligne',
  layer: 'core',
  hideLines: true,
  title: 'La ligne ouverte',
  frSub: 'Qui parle, et est-ce vérifié ?',
  lines: LIGNE_LINES.map(ln),
  questions: [
    { q: "Le sujet de l'émission ?", opts: ["le prix de l'essence", 'le Vieux-Québec sans voitures', "les vacances d'été"], correct: 1,
      why: "L'animateur le donne dès la première phrase. EN: the host gives it in the first sentence." },
    { q: 'Les voitures sont interdites dans combien de rues ?', opts: ['quatre', 'quatorze'], correct: 0,
      why: 'Quatre rues, de midi à minuit : un fait. EN: four streets, a fact.' },
    { q: 'Qui donne le chiffre de vingt pour cent ?', opts: ['la Ville', 'Denis', "l'animateur"], correct: 0,
      why: 'Selon la Ville : la source est dite avant le chiffre. EN: the source comes before the figure.' },
    { q: 'Denis dit que les commerçants vont fermer. C’est...', opts: ['un fait vérifié', 'son opinion'], correct: 1,
      why: 'Je trouve ça ridicule : un avis, pas un fait. EN: an opinion.' },
    { q: 'La Ville va-t-elle fermer tout le quartier ?', opts: ["Oui, c'est annoncé", "Rien n'est annoncé : c'est une rumeur"], correct: 1,
      why: "Il paraît que, puis l'animateur corrige : rien d'annoncé. EN: a rumour, corrected by the host." },
    { q: 'Sophie pense que c’est...', opts: ['une bonne idée', 'une erreur'], correct: 0,
      why: 'À mon avis, une excellente idée : son opinion. EN: her opinion.' },
  ],
  audio: REC('rec-b1-38-ligne'),
  say: REFRAME,
  terms: ['source'],
};

/** NOTICE THE MOVE: six ways the radio says where a claim comes from. */
const A9_SOURCES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-sources',
  layer: 'core',
  sheetId: 'sheet-fil',
  title: "Six façons de dire d'où ça vient",
  cols: ['Tu entends', "C'est", 'Dans ta note'],
  rows: [
    { cells: ['un chiffre, une date', 'un fait', 'tu le notes tel quel'], say: S(1346).fr,
      detail: { title: 'Le fait', body: 'Une date, une règle, un chiffre sans avis : ça se vérifie. EN: a checkable fact.', say: S(1256).fr } },
    { cells: ['selon la Ville', 'une source', 'selon la Ville, ...'], say: S(1347).fr,
      detail: { title: 'Selon', body: 'Selon donne la source. Garde-la dans ta note. EN: selon names the source; keep it.', say: src(B137(1161)).fr } },
    { cells: ["d'après + serait", 'une info non vérifiée', "d'après..., peut-être"], say: src(B137(1162)).fr,
      detail: { title: "D'après, et le conditionnel", body: 'Le conditionnel dit : on le rapporte, sans garantie. EN: the conditional flags an unconfirmed report.', say: "D'après la radio, le pont serait fermé demain." } },
    { cells: ['je trouve, à mon avis', 'une opinion', 'il trouve que ...'], say: S(1349).fr,
      detail: { title: 'Une opinion', body: 'Une personne pense. Ça se discute, ça ne se vérifie pas. EN: an opinion is discussed, not checked.', say: S(1352).fr } },
    { cells: ['il paraît que', 'une rumeur', 'on dit que, rien de sûr'], say: S(1350).fr,
      detail: { title: 'Il paraît que', body: "Personne ne signe. Écoute la suite : souvent, quelqu'un la dément. EN: nobody signs it; listen for a denial.", say: src(B137(1164)).fr } },
    { cells: ["l'animateur précise", 'une correction', "la Ville n'a rien annoncé"], say: S(1351).fr,
      detail: { title: 'La correction', body: "À la radio, l'animateur corrige souvent un auditeur. C'est souvent l'information la plus sûre. EN: the host often corrects a caller.", say: S(1354).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

/** PRACTISE: sort what is checkable from what is discussed. */
const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Fait, source ou opinion ?',
  frSub: 'Écoute qui parle',
  groups: [
    grp('Ce qui se vérifie', [
      it(E(1346), 'une règle et une date'),
      it(E(1347), 'un chiffre, avec sa source'),
      it(E(1354), 'qui donne le chiffre'),
    ], chk(
      'Le chiffre de vingt pour cent vient de...',
      ['la Ville', 'un auditeur'], 0,
      "Selon la Ville : c'est sa version, avec son nom. EN: the City's figure, with its name on it.")),
    grp('Ce qui se discute', [
      it(E(1349), 'je trouve'),
      it(E(1352), 'à mon avis'),
      it(E(1350), 'il paraît que'),
    ], chk(
      'Laquelle est une rumeur ?',
      [S(1349).fr, S(1350).fr, S(1352).fr], 1,
      'Il paraît que : personne ne signe. EN: a rumour with no owner.')),
    ctl('La correction', "Après la rumeur, l'animateur dit que la Ville n'a rien annoncé. Tu crois...",
      ['la rumeur', "l'animateur"], 1,
      "L'animateur vérifie : son information est plus sûre. EN: the host checks; trust the correction."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

/** PRACTISE by ear, on b1.37's source lines: read in lesson 37, heard here. */
const A9_FLAGEY: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-flagey',
  layer: 'core',
  hideLines: true,
  title: "D'autres voix, à Bruxelles",
  frSub: `Des phrases de ${LECTURE_REF}, à l'oreille`,
  lines: [
    ln(B137(1161)), ln(B137(1162)), ln(B137(1163)), ln(B137(1164)),
    ln(B137(1165)), ln(B137(1166)), ln(B137(1167)), ln(B137(1170)),
  ],
  questions: [
    { q: 'Première phrase : qui donne la baisse des accidents ?', opts: ['une association', 'la Région'], correct: 1,
      why: 'Selon la Région. EN: according to the Region.' },
    { q: 'Deuxième phrase : ce chiffre plus faible est-il sûr ?', opts: ['Non, il est au conditionnel', 'Oui'], correct: 0,
      why: "D'après, puis serait : rapporté, sans garantie. EN: reported, not confirmed." },
    { q: 'Troisième phrase : fait, opinion ou rumeur ?', opts: ['un fait', 'une rumeur', 'une opinion'], correct: 2,
      why: 'Je trouve que : une personne pense. EN: an opinion.' },
    { q: "Quatrième phrase : qui dit qu'on va les interdire ?", opts: ['personne ne le signe', 'la Région'], correct: 0,
      why: 'Il paraît que : une rumeur. EN: a rumour.' },
    { q: 'Et la Région, qu’a-t-elle annoncé ?', opts: ['une interdiction', 'rien'], correct: 1,
      why: 'Aucune interdiction : la rumeur tombe. EN: no ban.' },
    { q: 'Dernière phrase : qui dit que le conducteur roulait trop vite ?', opts: ['le conducteur', 'un témoin', 'la police'], correct: 2,
      why: 'Selon la police : sa version. EN: the police version.' },
  ],
  audio: REC('rec-b1-38-flagey'),
  say: REFRAME,
  terms: ['source'],
};

/** USE IT: an opinion in a note keeps its owner. */
const A9_NOTE = pourTaNote('a9-note', 'Une opinion garde son nom', [
  grp("L'opinion, avec son auteur", [
    it(E(1355), 'selon un auditeur'),
    free('Les commerçants du Vieux-Québec vont tous fermer.', 'The shopkeepers of Old Québec are all going to close.', "l'opinion devenue un fait"),
  ], chk(
    "Laquelle est fidèle à l'émission ?",
    ['la première', 'la seconde'], 0,
    "La seconde fait d'un avis de Denis un fait. EN: the second turns Denis's view into a fact.")),
  ctl('La rumeur', 'Dans ta note, la rumeur sur tout le quartier...',
    ['devient une nouvelle', "reste une rumeur, et la Ville n'a rien annoncé"], 1,
    "Garde la correction de l'animateur. EN: keep the host's correction."),
], ['source', 'note']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Selon', '« Selon la Ville » te dit...',
    ['qui parle', "que c'est faux"], 0,
    'Selon donne la source, sans juger. EN: selon names the source.'),
  ctl('Je trouve', '« Je trouve ça ridicule » : c’est...',
    ['un fait', 'une opinion', 'une rumeur'], 1,
    'Je trouve : une personne pense. EN: an opinion.'),
  ctl('Il paraît que', '« Il paraît que » annonce...',
    ['une rumeur', 'une source officielle'], 0,
    'Personne ne signe. EN: nobody signs it.'),
], ['source']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Un fait ou une opinion',
    opener: {
      line: "Un animateur, une Ville, deux auditeurs : ici tu apprends qui croire à la radio. EN: A host, a city, two callers: here you learn whom to believe on the radio.",
      imageRef: 'lessons/strategies-ecoute/act09.jpg',
    },
    sections: [],
    milestone: "Tu sépares à l'oreille le fait, la source, l'opinion et la rumeur, et ta note garde qui parle. EN: You can tell fact, source, opinion and rumour apart by ear, and your note keeps who said what.",
    estScreens: 34, restPoints: ['a9-sources'],
  },
  sections: [A9_LIGNE, A9_SOURCES, A9_TRIER, A9_FLAGEY, A9_NOTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — L'ÉPREUVE D'ÉCOUTE
 *
 *  TEXT: a lecture fragment set as a TCF / TEF compréhension orale
 *  document. MOVE: read the questions and options first (act 2's
 *  prediction, on paper), listen for the meaning of the answer rather than
 *  the same word, and never stay stuck on a missed word. b1.37 act 10 is
 *  the same move for the reading paper.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_COURS: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-cours',
  layer: 'core',
  hideLines: true,
  title: 'Compréhension orale, document 1',
  frSub: "Lis d'abord les questions",
  lines: COURS_LINES.map(ln),
  questions: [
    { q: "Question 1 : de combien d'heures de sommeil un adolescent a-t-il besoin ?", opts: ['de six à huit', 'de huit à dix', 'plus de dix'], correct: 1,
      why: 'Huit à dix heures par nuit. EN: eight to ten hours.' },
    { q: 'Question 2 : la plupart des adolescents dorment...', opts: ['moins de sept heures', 'plus de huit heures'], correct: 0,
      why: 'Or annonce le contraire du besoin : moins de sept heures. EN: or turns to the reality.' },
    { q: 'Question 3 : quelles sont les deux causes ?', opts: ["l'horloge du corps et les écrans", 'le sport et les devoirs', 'le bruit et la chaleur'], correct: 0,
      why: "D'une part, d'autre part : deux causes annoncées. EN: two causes, signposted." },
    { q: 'Question 4 : quelle solution certaines écoles essaient-elles ?', opts: ['des cours plus courts', 'des cours à neuf heures'], correct: 1,
      why: 'Les cours commencent à neuf heures. EN: lessons start at nine.' },
    { q: 'Tu as raté « endormissement ». As-tu pu répondre quand même ?', opts: ['Non', "Oui : l'idée des écrans suffisait"], correct: 1,
      why: 'Les écrans retardent le sommeil : le mot rare était un détail. EN: the rare word was a detail.' },
  ],
  audio: REC('rec-b1-38-cours'),
  say: REFRAME,
  terms: ['prediction', 'essentiel'],
};

/** NOTICE THE MOVE: three habits for the listening paper. */
const A10_ASTUCES: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-astuces',
  layer: 'core',
  sheetId: 'sheet-avant',
  title: "Trois astuces pour l'épreuve d'écoute",
  hacks: [
    { hack: 'Lis les questions et les réponses avant le début.', why: `Tu sais alors quel mot, quel chiffre ou quelle idée attendre. C'est la règle de ${LECTURE_REF}, pour l'oreille. EN: you know what to wait for.` },
    { hack: 'Écoute le sens de la réponse, pas le même mot.', why: "L'enregistrement dit souvent la même chose autrement : moins de sept heures devient trop peu. EN: the recording rephrases the answer." },
    { hack: 'Tu as raté un détail ? Passe à la question suivante.', why: "Il n'y a souvent qu'une écoute. Rester bloqué te fait rater la suite. EN: with one listening, staying stuck costs the next answer." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prediction', 'essentiel'],
};

/** PRACTISE: what the question sends the ear to catch. */
const A10_QUESTION: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-question',
  layer: 'core',
  size: 'lg',
  title: 'La question te dit quoi écouter',
  frSub: "Avant le début de l'enregistrement",
  groups: [
    grp("La question, puis l'oreille", [
      it(E(1366), "avant l'écoute"),
      it(E(1368), 'la règle'),
      it(E(1367), 'si tu rates'),
    ], chk(
      'Question : « À quelle heure commencent les cours ? » Ton oreille attend...',
      ['une heure', 'un nom de ville', 'un pourcentage'], 0,
      "Une heure : tu l'entendras dès qu'elle passe. EN: you wait for a time.")),
    grp('Les panneaux du cours', [
      it(E(1361), 'or : un tournant'),
      it(E(1370), 'deux causes annoncées'),
      it(E(1365), 'donc : la solution'),
    ], chk(
      'Tu entends « d’une part ». Tu attends...',
      ['une seule raison', 'une deuxième raison, avec « d’autre part »'], 1,
      "D'une part annonce d'autre part : deux raisons. EN: d'une part announces a second point.")),
    ctl('Or', 'Dans un cours, « or » veut dire...',
      ['et pourtant', "de l'or"], 0,
      'Or marque un tournant : le besoin, puis la réalité. EN: or marks a turn.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prediction', 'connecteur'],
};

/** PRACTISE: four trap options, each built from a word the ear DID hear. */
const A10_PIEGES: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-pieges',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre réponses piégées',
  errors: [
    { wrong: 'Les adolescents dorment dix heures par nuit.',
      right: 'Les adolescents ont besoin de dix heures, mais ils dorment moins de sept heures.',
      why: "Tu as entendu dix heures, et c'était vrai : c'est leur besoin, pas leur sommeil. EN: ten hours is what they need, not what they get." },
    { wrong: 'Les écoles commencent à sept heures.',
      right: 'Certaines écoles commencent à neuf heures.',
      why: 'Sept était dans le cours, mais pour le sommeil. Une réponse piège reprend un chiffre entendu. EN: trap options reuse a number you heard.' },
    { wrong: 'Les écrans sont la seule cause.',
      right: "Il y a deux causes : l'horloge du corps et les écrans.",
      why: "Les écrans, on les retient : c'est le sujet connu. D'une part, d'autre part annonçaient deux causes. EN: d'une part, d'autre part announced two causes." },
    { wrong: 'Toutes les écoles ont changé leurs horaires.',
      right: 'Certaines écoles ont changé leurs horaires.',
      why: 'Certaines limite la phrase. Écoute le petit mot. EN: certaines limits the claim.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motcle'],
};

/** USE IT: the task's own brief, read like an exam question. */
const A10_NOTE = pourTaNote('a10-note', "Ta consigne aussi se lit d'abord", [
  grp("Lis ta mission comme une question d'épreuve", [
    free('qui a appelé, et pourquoi', 'who called, and why', 'un'),
    free('le jour et les heures', 'the day and the times', 'deux'),
    free('ce que vous devez faire', 'what you both have to do', 'trois'),
    free('de 40 à 70 mots, pour ta colocataire', '40 to 70 words, for your flatmate', 'quatre'),
  ], chk(
    'Ta note doit-elle recopier tout le message ?',
    ['Oui, mot à mot', 'Non : qui, quoi, quand, quoi faire'], 1,
    'Une note garde quatre choses, pas tout. EN: a note keeps four things, not everything.')),
  ctl('Le mot important de ta consigne', 'Dans « avec le bon numéro », quel mot compte ?',
    ['bon', 'numéro'], 0,
    'Le bon : un chiffre faux, et ta colocataire appelle un inconnu. EN: one wrong digit and she calls a stranger.'),
], ['note', 'essentiel']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl("L'ordre", "À l'épreuve d'écoute, tu lis d'abord...",
    ['rien, tu écoutes', 'les questions et les réponses'], 1,
    'Elles te disent quoi attendre. EN: they tell you what to wait for.'),
  ctl('Un détail raté', 'Tu as raté un détail. Tu...',
    ['restes sur cette question', 'passes à la suivante'], 1,
    "Une seule écoute : la suite n'attend pas. EN: one pass; the next answer will not wait."),
  ctl('Le piège', 'Une réponse reprend un chiffre que tu as entendu. Elle est...',
    ['peut-être un piège', 'forcément juste'], 0,
    'Les pièges recopient ce que tu as entendu, dans un autre sens. EN: traps reuse what you heard.'),
], ['prediction', 'essentiel']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: "L'épreuve d'écoute",
    opener: {
      line: "À l'épreuve, l'enregistrement passe une fois : ici tu apprends à t'en servir quand même. EN: In the exam the recording plays once: here you learn to use it anyway.",
      imageRef: 'lessons/strategies-ecoute/act10.jpg',
    },
    sections: [],
    milestone: "Tu lis les questions avant l'écoute, tu cherches le sens de la réponse, et tu ne restes pas bloqué. EN: You read the questions before listening, listen for the meaning of the answer, and never get stuck.",
    estScreens: 30, restPoints: ['a10-astuces'],
  },
  sections: [A10_COURS, A10_ASTUCES, A10_QUESTION, A10_PIEGES, A10_NOTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LA NOTE POUR LÉA
 *
 *  The production act. The landlord's voicemail is heard with every
 *  strategy of the lesson, planned, rehearsed out loud with Léa, then
 *  written. The task brief prints the transcript, because TaskView has no
 *  source field and no player (open question 2).
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_MESSAGE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-message',
  layer: 'core',
  hideLines: true,
  title: 'Un message sur la boîte vocale',
  frSub: 'Qui, quoi, quand, quoi faire',
  lines: MESSAGE_LINES.map(ln),
  questions: [
    { q: 'Qui appelle ?', opts: ['le plombier', "le gestionnaire de l'immeuble", 'un voisin'], correct: 1,
      why: 'Martin Leblanc, le gestionnaire : le nom et la fonction, dès le début. EN: the building manager.' },
    { q: 'Pourquoi ?', opts: ['des travaux de plomberie', 'un loyer en retard'], correct: 0,
      why: 'Les travaux de plomberie. Le euh avant ne compte pas. EN: plumbing work; the euh does not count.' },
    { q: 'Quand passe le plombier ?', opts: ['jeudi 12, le matin', "jeudi 2, l'après-midi", 'mardi 12, le matin'], correct: 0,
      why: 'Jeudi douze, entre huit heures et midi. EN: Thursday the 12th, 8 to noon.' },
    { q: "De quelle heure à quelle heure l'eau est-elle coupée ?", opts: ['de 8 h à midi', 'de 9 h à 11 h'], correct: 1,
      why: 'Par contre annonce la coupure : de neuf à onze heures. EN: par contre brings the water cut.' },
    { q: 'Avant quand faut-il le rappeler ?', opts: ['mercredi soir', 'jeudi matin'], correct: 0,
      why: 'Avant mercredi soir, pour confirmer. EN: before Wednesday evening.' },
    { q: 'Son numéro ?', opts: ['514 555-0178', '514 555-0187', '514 555-1087'], correct: 1,
      why: 'Zéro, un, huit, sept, et il le répète. EN: 0187, said twice.' },
  ],
  audio: REC('rec-b1-38-message'),
  say: REFRAME,
  terms: ['note', 'chiffres'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-avant',
  title: 'Cinq étapes pour ta note',
  steps: [
    "1. Écoute une fois pour l'idée : qui appelle, et pourquoi. EN: first pass for who and why.",
    '2. Réécoute pour les chiffres : jour, heures, numéro. Note-les en chiffres. EN: second pass for the numbers.',
    "3. Repère les panneaux : donc, par contre. Après par contre vient souvent l'info importante. EN: signposts point to the key information.",
    '4. Écris ce que vous devez faire : être là, laisser la clé, rappeler. EN: what you both have to do.',
    '5. Relis en français écrit : sans euh, sans chuis, avec des phrases complètes. EN: reread it in written French.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['note', 'essentiel'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas prendre note',
  cases: [
    { situation: 'Un message du garage sur ta boîte vocale', fr: 'Ta voiture est prête, passe avant 18 h.', en: 'Your car is ready, come by before 6 p.m.' },
    { situation: 'Un appel pour ton collègue absent', fr: 'Madame Diallo a appelé, elle rappelle demain à 10 h.', en: 'Ms Diallo called, she will call back tomorrow at 10.' },
    { situation: "Une annonce à l'aéroport, pour ta famille", fr: S(1231).fr, en: S(1231).en },
    { situation: 'Un rendez-vous confirmé par téléphone', fr: S(1285).fr, en: S(1285).en },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['note'],
};

/** USE IT, out loud: Léa on the phone, turn by turn, one step of the note
 *  per turn. One apostrophe style throughout (’). */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Léa au téléphone',
  setting: "Le soir, Léa, ta colocataire, t'appelle de Sherbrooke. Elle n'a pas écouté le message du gestionnaire. Elle te pose des questions.",
  turns: [
    {
      ai: 'Salut ! Il y a eu des messages à l’appart ?',
      en: 'Hi! Were there any messages at the flat?',
      user: 'Oui, le gestionnaire de l’immeuble a appelé pour la plomberie.',
      userEn: 'Yes, the building manager called about the plumbing. (Who, and why, first.)',
      alts: [
        { fr: 'Oui, Martin Leblanc, pour des travaux dans l’appartement.', en: 'Yes, Martin Leblanc, about some work in the flat.' },
        { fr: 'Oui, un message du gestionnaire, pour le plombier.', en: 'Yes, a message from the manager, about the plumber.' },
      ],
    },
    {
      ai: 'Ah bon ? Le plombier vient quand ?',
      en: 'Really? When is the plumber coming?',
      user: 'Jeudi, entre huit heures et midi.',
      userEn: 'Thursday, between eight and noon. (The day and the times.)',
      alts: [
        { fr: 'Jeudi le douze, le matin.', en: 'Thursday the twelfth, in the morning.' },
        { fr: 'Jeudi matin, de huit heures à midi.', en: 'Thursday morning, from eight to noon.' },
      ],
    },
    {
      ai: 'Je travaille jeudi. On fait comment ?',
      en: 'I am working on Thursday. What do we do?',
      user: 'Quelqu’un doit être là, sinon on lui laisse la clé.',
      userEn: 'Someone has to be there, otherwise we leave him the key. (What we have to do.)',
      alts: [
        { fr: 'On peut laisser la clé au gestionnaire.', en: 'We can leave the key with the manager.' },
        { fr: 'Moi, je peux être là jusqu’à midi.', en: 'I can be there until noon. (A solution of your own: also right.)' },
      ],
    },
    {
      ai: 'D’accord. Autre chose ?',
      en: 'OK. Anything else?',
      user: 'Oui : par contre, l’eau sera coupée de neuf heures à onze heures.',
      userEn: 'Yes: on the other hand, the water will be off from nine to eleven. (The information after « par contre ».)',
      alts: [
        { fr: 'Attention, pas d’eau de neuf heures à onze heures.', en: 'Careful, no water from nine to eleven.' },
        { fr: 'Il n’y aura pas d’eau dans l’immeuble jeudi matin.', en: 'There will be no water in the building on Thursday morning.' },
      ],
    },
    {
      ai: 'Il faut le rappeler ?',
      en: 'Do we have to call him back?',
      user: 'Oui, avant mercredi soir, pour confirmer.',
      userEn: 'Yes, before Wednesday evening, to confirm. (The deadline.)',
      alts: [
        { fr: 'Oui, il attend notre appel avant mercredi soir.', en: 'Yes, he is waiting for our call before Wednesday evening.' },
        { fr: 'Oui, mercredi au plus tard.', en: 'Yes, Wednesday at the latest.' },
      ],
    },
    {
      ai: 'Tu as son numéro ?',
      en: 'Do you have his number?',
      user: 'Oui : cinq un quatre, cinq cinq cinq, zéro un huit sept.',
      userEn: 'Yes: 514 555 0187. (The exact number, digit by digit.)',
      alts: [
        { fr: 'Oui, je te l’écris dans une note.', en: 'Yes, I will write it for you in a note.' },
        { fr: 'C’est le cinq un quatre, cinq cinq cinq, zéro un huit sept. Je répète ?', en: 'It is 514 555 0187. Shall I repeat it?' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['note', 'repeter'],
};

/** THE GRADED TASK. The unit outcome is tested here: a real voicemail above
 *  level, caught with the lesson's strategies, passed on in writing. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Laisse une note à Léa',
  frSub: 'Mission écrite',
  brief: `Léa, ta colocataire, est chez ses parents à Sherbrooke jusqu'à vendredi. Tu as écouté le message du gestionnaire sur votre boîte vocale. Écris ta note de mémoire d'abord, puis vérifie les détails avec la transcription du message : « ${MESSAGE_TRANSCRIPT} »`,
  briefEn: "Léa, your flatmate, is at her parents' in Sherbrooke until Friday. You listened to the building manager's voicemail. Write your note from memory first, then check the details against the transcript printed here, since this screen cannot play the message.",
  produce: "Écris-lui une note de 40 à 70 mots, avec tes mots et en français écrit : qui a appelé et pourquoi, le jour et les heures, la coupure d'eau, et ce que vous devez faire, avec le bon numéro.",
  responseSpec: { kind: 'text', minWords: 40, maxWords: 70 },
  rubric: {
    criteria: [
      {
        key: 'essentiel',
        label: 'Qui, pourquoi, quoi faire',
        maxPoints: 4,
        descriptors: [
          "4 : On sait qui a appelé (le gestionnaire), pourquoi (la plomberie) et ce que vous devez faire (être là ou laisser la clé, et le rappeler). Rien d'important ne manque.",
          '3 : Qui et pourquoi sont là, mais une des deux actions manque : la clé, ou le rappel.',
          "2 : Des informations justes, mais Léa ne sait pas ce qu'elle doit faire.",
          '1 : On ne sait pas qui a appelé ni pourquoi, ou la note dit le contraire du message.',
        ],
      },
      {
        key: 'details',
        label: 'Les chiffres exacts',
        maxPoints: 3,
        descriptors: [
          "3 : Le jour (jeudi 12), les heures du plombier (8 h à midi), la coupure d'eau (9 h à 11 h) et le numéro (514 555-0187) sont tous justes.",
          '2 : Un chiffre manque ou est faux.',
          "1 : Plusieurs chiffres manquent ou sont faux : Léa ne peut pas s'organiser.",
        ],
      },
      {
        key: 'ecrit',
        label: 'Tes mots, en français écrit',
        maxPoints: 3,
        descriptors: [
          '3 : Des phrases à toi, en français écrit : pas de euh, pas de chuis ni de y a, pas de phrase recopiée du message.',
          '2 : Une ou deux formes orales, ou une phrase recopiée du message.',
          "1 : La note recopie la transcription, ou elle garde l'oral tel quel.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Une note à Léa, entre 40 et 70 mots, qui commence par dire qui a appelé.',
          "1 : Moins de 40 ou plus de 70 mots, ou une note qui ne s'adresse pas à Léa.",
        ],
      },
    ],
  },
  scaffold: [
    'Salut Léa,',
    'Le gestionnaire a appelé...',
    'Le plombier passe...',
    'Attention, ...',
    'Il faut...',
    'Son numéro :',
    'On peut aussi...',
    'À ce soir,',
  ],
  modelAnswer: "Salut Léa ! Martin, le gestionnaire de l'immeuble, a appelé pour des travaux de plomberie. Le plombier passe jeudi 12, entre 8 h et midi. Il faut être là pour lui ouvrir, ou lui laisser la clé. Attention, l'eau sera coupée de 9 h à 11 h. On doit le rappeler avant mercredi soir pour confirmer : 514 555-0187. Tu peux être là, toi ? Bises !",
  modelAnswerEn: "Hi Léa! Martin, the building manager, called about some plumbing work. The plumber is coming on Thursday the 12th, between 8 and noon. Someone has to be there to let him in, or we leave him the key. Careful, the water will be off from 9 to 11. We have to call him back before Wednesday evening to confirm: 514 555-0187. Can you be there? Love!",
  watchFor: [
    {
      pattern: 'Times and numbers listed with no sentence saying who called or why, so Léa reads figures before she knows what they are for.',
      criterion: 'essentiel',
      feedback: "Léa a des chiffres, pas l'idée. Commence par qui a appelé, et pourquoi.",
      ref: 'a3-note',
    },
    {
      pattern: 'The action is missing: nothing about being there, leaving the key or calling back.',
      criterion: 'essentiel',
      feedback: "Léa ne sait pas quoi faire. Ajoute : être là ou laisser la clé, et rappeler avant mercredi soir.",
      ref: 'a11-plan',
    },
    {
      pattern: "A small word turned: « l'eau ne sera pas coupée », « personne ne doit être là ».",
      criterion: 'essentiel',
      feedback: 'Un petit mot a changé le sens. Relis : quelqu’un doit être là, et l’eau sera coupée.',
      ref: 'a4-piege',
    },
    {
      pattern: "The water cut after « par contre » is missing, or merged with the plumber's hours.",
      criterion: 'details',
      feedback: "Après « par contre », il y avait une information à part : l'eau coupée de 9 h à 11 h. Garde-la.",
      ref: 'a6-note',
    },
    {
      pattern: "Times confused: the plumber's window (8 h à midi) swapped with the water cut (9 h à 11 h), or a 24-hour time misread.",
      criterion: 'details',
      feedback: "Vérifie les deux horaires : le plombier de 8 h à midi, l'eau de 9 h à 11 h.",
      ref: 'a5-piege',
    },
    {
      pattern: 'Phone number with digits out of order or missing (514 555-0178).',
      criterion: 'details',
      feedback: 'Relis le numéro chiffre par chiffre : cinq un quatre, cinq cinq cinq, zéro un huit sept.',
      ref: 'a5-pieges',
    },
    {
      pattern: 'The date wrong: jeudi 2, or mardi 12.',
      criterion: 'details',
      feedback: 'Le jour et la date vont ensemble : jeudi 12.',
      ref: 'a5-clinique',
    },
    {
      pattern: 'Spoken forms or fillers carried into the note (euh, chuis, y a, t’as, a filler donc).',
      criterion: 'ecrit',
      feedback: "Ta note est écrite : enlève les euh, et écris la forme complète (il y a, je suis).",
      ref: 'a7-note',
    },
    {
      pattern: 'Whole sentences copied from the transcript.',
      criterion: 'ecrit',
      feedback: 'Tu as recopié le message. Dis-le avec tes mots, comme à Léa au téléphone.',
      ref: 'a11-scenario',
    },
    {
      pattern: 'Under 40 or over 70 words in the body, or a note not addressed to Léa.',
      criterion: 'tache',
      feedback: 'Relis la mission : une note à Léa, de 40 à 70 mots.',
      ref: 'a10-note',
    },
    {
      pattern: 'No opening that says who called: the note starts with times.',
      criterion: 'tache',
      feedback: 'Commence par qui a appelé : le gestionnaire a appelé pour...',
      ref: 'a2-note',
    },
  ],
  graderNotes: [
    'The greeting and the sign-off (Salut Léa, Bises, À ce soir) do NOT count toward the word budget. Count the body only, with 10% tolerance (36 to 77) before criterion « tache » loses its point.',
    'Accept any clear written form of times and numbers: 8 h, 8 heures, huit heures; 514 555-0187, 514-555-0187, 5145550187. What counts is that the digits are right and in order.',
    'Martin Leblanc may be named, or called « le gestionnaire » or « le concierge »: all are correct. Do not mark down a missing surname.',
    'Full marks under « essentiel » need the call-back and at least one of the two access options (someone there, or the key left with the manager).',
    '« Donc » used as a real connector (il faut donc le rappeler) is correct written French; only the spoken filler use is marked under « ecrit ».',
    'A question or a suggestion to Léa (tu peux être là ?) is natural in a note and is never marked down.',
    'The subjunctive belongs to lessons 14 to 16 in B1 and is not taught here. Do not mark its absence, and do not mark a correct one as an error.',
    'Accept Québec and European vocabulary alike (le gestionnaire, le concierge, le syndic; l’appart, l’appartement).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['note', 'chiffres'],
};

/** Say the lesson's lines out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis ta note à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['note'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-avant',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'avant', v: 'qui parle, où, pourquoi', say: S(1225).fr,
      detail: { title: 'La prédiction', body: 'La situation te donne les mots probables. EN: the situation gives you the likely words.', say: S(1230).fr } },
    { k: "l'idée d'abord", v: 'deux écoutes, deux questions', say: S(1244).fr,
      detail: { title: 'Deux écoutes', body: "L'idée, puis les détails. Une seule écoute : garde l'idée. EN: gist, then details; with one pass, keep the gist.", say: S(1250).fr } },
    { k: 'les mots forts', v: 'noms, verbes, chiffres, et le petit pas', say: S(1260).fr,
      detail: { title: 'Les mots-clés', body: 'La voix appuie sur la fin du groupe. Pas, sauf, et non plus retournent la phrase. EN: stress falls on the end of the group; small words turn it.', say: S(1262).fr } },
    { k: 'les chiffres', v: 'la fin du mot, 24 heures, épeler', say: S(1284).fr,
      detail: { title: 'Ce qui ne se devine pas', body: 'Quinze ou cinquante : la fin. Dix-sept heures : cinq heures. Un nom : fais-le épeler. EN: listen to the ending, convert the clock, have names spelled.', say: S(1281).fr } },
    { k: "l'oral", v: 'panneaux, réductions, béquilles', say: S(1298).fr,
      detail: { title: 'Le français parlé', body: "Du coup, c'est donc. Chuis, c'est je suis. Ben, euh, genre : laisse passer. EN: du coup is donc, chuis is je suis, fillers pass.", say: S(1320).fr } },
    { k: 'en direct', v: 'faire répéter, vérifier, qui parle', say: S(1341).fr,
      detail: { title: 'Au téléphone, à la radio', body: 'Vous avez dit X ou Y ? Si je comprends bien... Et à la radio : selon, je trouve, il paraît que. EN: ask with two options, say it back, and check who is speaking.', say: S(1353).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['note', 'motcle', 'chiffres'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu écoutes maintenant une voix trop rapide pour toi dans le bon ordre : la situation d'abord, puis l'idée, les mots forts, les chiffres, les panneaux et qui parle. Le piège qui reste est le plus naturel : vouloir tout entendre, et décrocher au premier mot raté. Cette semaine, écoute une seule fois un bulletin de météo ou de circulation à la radio. Dis ensuite à voix haute l'idée et deux chiffres. Si tu ne peux pas, réécoute seulement pour l'idée. EN: This week, play one radio weather or traffic bulletin once, then say the gist and two figures aloud; if you cannot, listen again for the gist alone.",
  stats: [
    { k: 'Avant', v: 'la situation, les mots probables' },
    { k: 'Pendant', v: "l'idée, les mots forts, les chiffres" },
    { k: 'En direct', v: 'faire répéter, vérifier' },
    { k: 'Après', v: 'une note : qui, quoi, quand, quoi faire' },
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
    { front: 'avant une annonce', back: 'qui parle, où, pourquoi', say: S(1225).fr },
    { front: 'la première écoute', back: "l'idée générale", say: S(1242).fr },
    { front: 'le petit mot qui change tout', back: 'pas, sauf, et non plus', say: S(1263).fr },
    { front: 'quinze ou cinquante', back: 'écoute la fin du mot', say: S(1276).fr },
    { front: 'du coup', back: 'donc', say: S(1300).fr },
    { front: 'chuis', back: 'je suis', say: S(1325).fr },
    { front: 'un chiffre douteux au téléphone', back: 'vous avez dit X ou Y ?', say: S(1337).fr },
    { front: 'il paraît que', back: 'une rumeur', say: S(1350).fr },
    { front: "la note d'un message", back: 'qui, quoi, quand, quoi faire', say: S(1381).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Écouter sans tout comprendre, en résumé',
  body: `${REFRAME} Tu ne traduis plus une voix mot à mot : tu attrapes la situation, l'idée, les mots forts, les chiffres, les panneaux et qui parle, et tu fais répéter ce qui manque. C'est la sœur de ${LECTURE_REF} : « ${B137_REFRAME} » ${Cap(NEXT_REF)} passe à l'écrit, avec les courriels et les lettres. EN: Next: emails and letters.`,
  points: [
    "Avant d'écouter : qui parle, où, pourquoi.",
    "L'idée d'abord, les détails à la deuxième écoute.",
    'Les mots forts, les chiffres, et le petit mot qui change tout.',
    'Au téléphone : fais répéter, puis redis ce que tu as compris.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['essentiel', 'motcle', 'repeter'],
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight: one per
 *  act from act 1 to act 10, plus a round on the note. Each round's target
 *  is a distinct errorTrigger, so a failed round fires that round's drill.
 *
 *  A LISTENING QUIZ: every round has TWO listenChoose, each with its own
 *  `say` (playbook 6.9), and no question prints its `say`. `typeIn` asks
 *  for one word or a number; `errorSpot` changes ONE thing in a sentence.
 *  `fold()` strips accents, commas and spaces, so nothing turns on them.
 *  Options are rotated by spreadSlots() below; no `why` names a position. */

type QQ = QuizQuestion;
/** typeIn with extra accepted spellings: the answer is always accepted. */
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
      id: 'r1-sens', label: 'Le sens avant les mots', targets: ['mot-a-mot'],
      questions: [
        mc('Une annonce passe trop vite. Tu écoutes d’abord...', ["chaque mot, dans l'ordre", 'ce qui change pour toi', 'la voix de la personne'], 1, 'La ligne, le problème, quoi faire. EN: what changes for you.', 'a1-scene'),
        mc('Pendant une annonce, peux-tu revenir en arrière ?', ['oui', 'non', 'seulement au début'], 1, 'Le son passe et ne revient pas. EN: speech does not come back.', 'a1-sans'),
        mc('« Nous nous excusons des inconvénients. » Si tu la rates, tu perds...', ["rien d'utile", "l'essentiel"], 0, 'Une formule polie. EN: a politeness formula.', 'a1-sans'),
        tI('Complète la règle de la leçon. Un mot.', 'Attrape le ..., pas chaque mot.', 'sens', 'Le sens, pas chaque mot. EN: the meaning.', 'a1-scene', ['le sens']),
        tI('Quelle ligne était arrêtée ? Un mot.', 'La ligne ... est arrêtée.', 'orange', 'La ligne orange, entre Berri-UQAM et Jean-Talon. EN: the orange line.', 'a1-annonce'),
        eS('Il faut attendre le métro à Berri-UQAM.', 'Il faut prendre la navette à Berri-UQAM.', 'Le service est interrompu : une navette remplace le métro. EN: a shuttle replaces the metro.', 'a1-annonce'),
        lC('Écoute. Cette phrase est-elle utile pour toi ?', S(1207).fr, ["oui, elle redit l'essentiel", "non, c'est une formule"], 0, "Je répète : l'essentiel revient. EN: the key part comes again.", 'a1-annonce'),
        lC('Écoute. Que dois-tu faire ?', S(1204).fr, ['attendre sur le quai', 'sortir prendre un autobus'], 1, 'Des navettes à la sortie de la station. EN: shuttle buses at the exit.', 'a1-annonce'),
      ],
    },
    {
      id: 'r2-prediction', label: "Avant d'écouter", targets: ['sans-prediction'],
      questions: [
        mc("Avant d'écouter, tu te demandes...", ['qui parle, où et pourquoi', 'combien de mots tu connais'], 0, 'La situation te donne les mots probables. EN: the situation gives the likely words.', 'a2-focus'),
        mc("À l'aéroport, quels mots attends-tu ?", ['un prix, une recette', 'une porte, une heure, un retard'], 1, 'Un vol : une porte, une heure. EN: a flight means a gate and a time.', 'a2-devine'),
        mc('« Porte B 32, et non plus porte A 12. » Tu vas...', ['à la A 12', 'à la B 32', 'aux deux'], 1, 'Et non plus annule la A 12. EN: et non plus cancels A12.', 'a2-erreurs'),
        tI('Complète. Un mot.', 'La situation te dit déjà la ... du message.', 'moitié', 'La moitié du message, avant la voix. EN: half the message.', 'a2-focus', ['moitie', 'la moitié']),
        tI('Ton vol a combien de retard ? Deux mots.', "Le départ est retardé d'...", 'une heure', "D'une heure, à cause de la météo. EN: one hour.", 'a2-aeroport', ['1 heure', '1 h', '1h']),
        eS('Le vol pour Montréal est annulé.', 'Le vol pour Montréal est retardé.', 'Retardé : il part plus tard. EN: delayed, not cancelled.', 'a2-erreurs'),
        lC('Écoute. Où entends-tu cette annonce ?', S(1221).fr, ['dans un aéroport', 'dans une clinique', 'au métro'], 0, 'Un bon de repas au comptoir de la compagnie. EN: an airport.', 'a2-aeroport'),
        lC('Écoute. Tu as une correspondance. On va...', S(1222).fr, ['te laisser seul', "s'occuper de toi à Montréal"], 1, "Pris en charge : on s'occupe de toi. EN: looked after.", 'a2-aeroport'),
      ],
    },
    {
      id: 'r3-essentiel', label: "L'idée d'abord", targets: ['details-d-abord'],
      questions: [
        mc('À la première écoute, tu cherches...', ['tous les chiffres', "l'idée générale"], 1, "L'idée, puis les détails. EN: the gist first.", 'a3-deux'),
        mc("Tu n'as qu'une écoute. Tu gardes...", ["l'idée", 'le premier chiffre', 'le dernier mot'], 0, "L'idée, c'est ce que tu vas redire. EN: keep the gist.", 'a3-deux'),
        mc('« La fin de semaine », au Québec, c’est...', ['la fin du mois', 'le week-end'], 1, 'Un mot du Québec pour le week-end. EN: the weekend.', 'a3-trier'),
        tI('Complète. Un mot.', "L'idée d'abord, les ... à la deuxième écoute.", 'détails', "Les détails viennent ensuite. EN: the details come on the second pass.", 'a3-deux', ['details', 'les détails']),
        tI('Que conseille la météo pour la tête ? Un mot.', 'Sortez les ... et les mitaines.', 'tuques', 'Les tuques : des bonnets, au Québec. EN: woolly hats.', 'a3-meteo1', ['tuque', 'les tuques']),
        eS('En gros, il fait chaud cette semaine.', 'En gros, il fait froid cette semaine.', "Neige, vent, moins vingt-deux : l'idée, c'est le froid. EN: the gist is cold.", 'a3-meteo1'),
        lC("Écoute. C'est l'idée générale ou un détail ?", S(1239).fr, ['un détail', "l'idée générale"], 0, 'Un jour et des maximums : un détail. EN: a detail.', 'a3-trier'),
        lC('Écoute. Demain, il fait...', S(1238).fr, ['beau, mais froid', 'doux et gris', 'de la neige toute la journée'], 0, 'Le soleil revient, mais le froid reste. EN: sunny but cold.', 'a3-meteo2'),
      ],
    },
    {
      id: 'r4-mots-cles', label: 'Les mots qui portent', targets: ['petit-mot-rate'],
      questions: [
        mc('Quels mots portent le sens ?', ['le, la, de', 'les noms, les verbes, les chiffres'], 1, 'Les mots forts. EN: the strong words.', 'a4-forts'),
        mc('En français, la voix appuie sur...', ['la fin du groupe', 'le premier mot', 'chaque mot pareil'], 0, 'La dernière syllabe du groupe. EN: the end of the group.', 'a4-forts'),
        mc('« Le pont Champlain, lui, n’est pas touché. » Il est...', ['fermé', 'ouvert, ça roule'], 1, "N'est pas touché : tout va bien. EN: not affected.", 'a4-routes'),
        tI('Quel petit mot change tout ? Un mot.', 'Le magasin ferme plus tôt, ... le samedi.', 'sauf', 'Sauf : une exception. EN: except.', 'a4-piege'),
        tI("Jusqu'à quelle heure le pont Jacques-Cartier est-il fermé ?", "Fermé jusqu'à ... heures.", 'neuf', "Jusqu'à neuf heures. EN: until nine.", 'a4-routes', ['9']),
        eS('Le pont Champlain est fermé.', "Le pont Champlain n'est pas fermé.", 'Le petit pas change tout. EN: pas changes everything.', 'a4-piege'),
        lC('Écoute. Tu vas à Lyon. Ton vol est...', S(1265).fr, ['annulé', 'maintenu'], 1, 'Pas celui de Lyon : ton vol part. EN: yours still flies.', 'a4-piege'),
        lC('Écoute. La réunion a lieu quel jour ?', S(1264).fr, ['jeudi', 'vendredi'], 1, 'Pas jeudi, mais vendredi. EN: Friday.', 'a4-cles'),
      ],
    },
    {
      id: 'r5-chiffres', label: 'Chiffres, dates, noms', targets: ['chiffre-mal-entendu'],
      questions: [
        mc('Pour distinguer quinze et cinquante, tu écoutes...', ['la fin du mot', 'le début du mot'], 0, '-inze ou -ante. EN: the ending.', 'a5-pieges'),
        mc('Dix-sept heures, c’est...', ['sept heures du soir', "cinq heures de l'après-midi"], 1, 'Dix-sept moins douze : cinq. EN: 5 p.m.', 'a5-pieges'),
        mc('Au Québec, un numéro de téléphone se dit...', ['chiffre par chiffre', 'deux par deux', 'trois par trois'], 0, 'Cinq, un, quatre. EN: digit by digit.', 'a5-pieges'),
        tI('Tu entends « cinquante ». Écris le nombre en chiffres.', 'cinquante = ...', '50', 'Cinquante : 50. EN: fifty.', 'a5-ecoute', ['cinquante']),
        tI("Nonante, en France, c'est combien ? En chiffres.", 'nonante = ...', '90', 'Quatre-vingt-dix. EN: ninety.', 'a5-pieges', ['quatre-vingt-dix', 'quatre vingt dix']),
        eS('Le rendez-vous est à 5 h 45.', 'Le rendez-vous est à 15 h 45.', 'Quinze heures quarante-cinq. EN: 3:45 p.m.', 'a5-piege'),
        lC('Écoute. Le bus passe toutes les combien de minutes ?', S(1278).fr, ['2', '12'], 1, 'Douze : le son z. EN: twelve.', 'a5-ecoute'),
        lC('Écoute. Quelle année ?', S(1280).fr, ['1996', '1986'], 0, 'Quatre-vingt-seize. EN: 1996.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-panneaux', label: "Les panneaux de l'oral", targets: ['panneau-ignore'],
      questions: [
        mc('Après « par contre », tu attends...', ['la même idée', "l'autre côté"], 1, 'Par contre tourne. EN: the other side.', 'a6-panneaux'),
        mc('« Du coup » veut dire...', ['donc', 'pourtant', "d'abord"], 0, 'Du coup, à l’oral : donc. EN: so.', 'a6-oral'),
        mc('Après « bref », tu entends...', ['un détail', "l'idée principale", 'une question'], 1, 'Bref conclut. EN: the main idea.', 'a6-panneaux'),
        tI('Complète avec le connecteur oral de conséquence. Un mot.', 'Le quartier était trop cher. Du ..., on a déménagé.', 'coup', 'Du coup : donc. EN: so.', 'a6-apres', ['du coup']),
        tI('Complète avec le connecteur qui corrige. Deux mots.', '..., je voulais dire mardi, pas jeudi.', 'en fait', 'En fait corrige. EN: actually.', 'a6-oral'),
        eS("Par contre, l'été, c'est une autre histoire.", "Par contre, l'hiver, c'est une autre histoire.", "C'est l'hiver qui complique tout. EN: it is winter that complicates things.", 'a6-podcast'),
        lC('Écoute. Après ce mot, le message...', S(1291).fr, ['tourne', 'continue'], 0, "Par contre : l'autre côté. EN: it turns.", 'a6-podcast'),
        lC('Écoute. Que fait cette phrase ?', S(1294).fr, ['elle ajoute un exemple', 'elle conclut'], 1, 'Bref : la conclusion. EN: it concludes.', 'a6-podcast'),
      ],
    },
    {
      id: 'r7-oral', label: 'Le français parlé', targets: ['oral-bloque'],
      questions: [
        mc('« Chuis », c’est...', ['je suis', 'je sais', 'tu es'], 0, 'Je suis, réduit. EN: je suis.', 'a7-formes'),
        mc('« Y a plus de pain. » Il reste du pain ?', ['oui', 'non'], 1, 'Y a plus : il n’y a plus. EN: none left.', 'a7-piege'),
        mc('« Genre, dix dollars la bière. » Ici, « genre » veut dire...', ['une sorte', "rien, c'est une béquille"], 1, 'Une béquille, comme like. EN: a filler.', 'a7-piege'),
        tI('Écris la forme complète. Deux mots.', "t'as = ...", 'tu as', "T'as, c'est tu as. EN: you have.", 'a7-formes'),
        tI('Écris la forme complète. Quatre mots.', 'chais pas = ...', 'je ne sais pas', 'Le ne revient à l’écrit. EN: I do not know.', 'a7-formes'),
        eS('Chuis pour les terrasses.', 'Je suis pour les terrasses.', "À l'écrit, la forme complète. EN: the full written form.", 'a7-traduire'),
        lC('Écoute. Cette personne dort bien ?', S(1307).fr, ['non', 'oui'], 0, 'Je dors pas : le pas dit non. EN: no.', 'a7-micro'),
        lC('Écoute. Où est la personne ?', S(1326).fr, ['à la maison', 'devant la gare', 'au bar'], 1, 'Chuis devant la gare. EN: outside the station.', 'a7-piege'),
      ],
    },
    {
      id: 'r8-repeter', label: 'Faire répéter', targets: ['silence-au-telephone'],
      questions: [
        mc('Tu hésites entre quinze et cinquante. Tu dis...', ['« Quoi ? »', '« Vous avez dit quinze ou cinquante ? »'], 1, 'Deux choix : une réponse en un mot. EN: two options.', 'a8-repeter'),
        mc('« Si je comprends bien... » sert à...', ["finir l'appel", 'vérifier', 'changer de sujet'], 1, "Tu redis l'essentiel pour vérifier. EN: to check.", 'a8-choisir'),
        mc('Avec un service client, « Quoi ? » est...', ['trop familier', 'parfait', 'plus poli que pardon'], 0, 'Dis pardon. EN: say pardon.', 'a8-erreurs'),
        tI('Complète. Un mot.', 'Vous pouvez répéter plus ... ?', 'lentement', 'Plus lentement : une autre vitesse. EN: more slowly.', 'a8-repeter'),
        tI('Complète la question pour vérifier. Un mot.', "Donc c'est mercredi après-midi, c'est bien ... ?", 'ça', "C'est bien ça ? EN: is that right?", 'a8-choisir', ['ca']),
        eS('Répétez.', "Vous pouvez répéter, s'il vous plaît ?", 'Une question passe mieux qu’un ordre. EN: a question, not an order.', 'a8-erreurs'),
        lC('Écoute. Que fait cette personne ?', S(1334).fr, ['elle raccroche', "elle vérifie en redisant l'essentiel"], 1, 'Si je comprends bien : elle vérifie. EN: she checks.', 'a8-appel'),
        lC('Écoute. Que demande cette personne ?', S(1339).fr, ["les lettres d'un nom", 'un prix'], 0, 'Épeler : les lettres. EN: the spelling.', 'a8-repeter'),
      ],
    },
    {
      id: 'r9-sources', label: 'Fait ou opinion', targets: ['opinion-comme-fait'],
      questions: [
        mc('« Selon la Ville » te dit...', ['qui parle', "que c'est faux"], 0, 'Selon donne la source. EN: the source.', 'a9-sources'),
        mc('« Il paraît que » annonce...', ['un fait', 'une rumeur', 'une date'], 1, 'Personne ne signe. EN: a rumour.', 'a9-sources'),
        mc('« Je trouve ça ridicule. » C’est...', ['un fait', 'une opinion'], 1, 'Je trouve : un avis. EN: an opinion.', 'a9-trier'),
        tI('Complète avec le mot qui donne la source.', '... la Ville, le nombre de piétons a augmenté.', 'selon', "Selon, ou d'après. EN: according to.", 'a9-sources', ["d'après", 'dapres']),
        tI('Qui a corrigé la rumeur ? Un mot.', "L'... a précisé que la Ville n'a rien annoncé.", 'animateur', "L'animateur vérifie. EN: the host.", 'a9-ligne', ["l'animateur"]),
        eS('Selon la Ville, les piétons ont baissé de vingt pour cent.', 'Selon la Ville, les piétons ont augmenté de vingt pour cent.', 'Le chiffre monte. EN: the figure went up.', 'a9-ligne'),
        lC('Écoute. Fait, opinion ou rumeur ?', S(1352).fr, ['un fait', 'une opinion', 'une rumeur'], 1, 'À mon avis : une opinion. EN: an opinion.', 'a9-ligne'),
        lC('Écoute. Cette information est-elle sûre ?', src(B137(1162)).fr, ['oui', 'non, elle est au conditionnel'], 1, "D'après, et serait : pas vérifié. EN: not confirmed.", 'a9-flagey'),
      ],
    },
    {
      id: 'r10-epreuve', label: "L'épreuve", targets: ['bloque-sur-un-mot'],
      questions: [
        mc("À l'épreuve d'écoute, tu lis d'abord...", ['les questions et les réponses', 'rien'], 0, 'Elles disent quoi attendre. EN: the questions first.', 'a10-astuces'),
        mc('Tu as raté un détail. Tu...', ['restes bloqué', 'passes à la question suivante', 'recommences depuis le début'], 1, 'Une seule écoute. EN: move on.', 'a10-astuces'),
        mc('Une réponse reprend un chiffre que tu as entendu. Elle est...', ['forcément juste', 'peut-être un piège'], 1, 'Les pièges recopient ce que tu as entendu. EN: maybe a trap.', 'a10-pieges'),
        tI('Complète. Un mot.', "D'une part, l'horloge change. D'... part, les écrans retardent le sommeil.", 'autre', "D'une part, d'autre part. EN: on the other hand.", 'a10-question'),
        tI('Combien dorment la plupart des adolescents ? En lettres ou en chiffres.', 'Moins de ... heures.', 'sept', 'Moins de sept heures. EN: under seven hours.', 'a10-cours', ['7']),
        eS('Toutes les écoles commencent à neuf heures.', 'Certaines écoles commencent à neuf heures.', 'Certaines limite la phrase. EN: only some.', 'a10-pieges'),
        lC('Écoute. Ce mot annonce...', S(1361).fr, ['un exemple', 'un tournant'], 1, 'Or : le besoin, puis la réalité. EN: a turn.', 'a10-question'),
        lC('Écoute. Quelle solution ?', S(1365).fr, ['des cours à neuf heures', 'plus de devoirs'], 0, 'Les cours commencent à neuf heures. EN: nine o’clock starts.', 'a10-cours'),
      ],
    },
    {
      id: 'r11-note', label: 'La note', targets: ['note-incomplete'],
      questions: [
        mc('Une bonne note garde...', ['tout le message', 'qui, quoi, quand, quoi faire'], 1, 'Quatre choses, pas tout. EN: four things.', 'a11-plan'),
        mc('Dans ta note, tu écris « euh » et « chuis » ?', ["oui, c'est plus vrai", "non, c'est de l'écrit"], 1, 'Une note est écrite. EN: a note is written.', 'a7-note'),
        mc('Le plombier passe...', ['jeudi, entre 8 h et midi', 'jeudi, de 9 h à 11 h'], 0, "De 9 h à 11 h, c'est la coupure d'eau. EN: 9 to 11 is the water cut.", 'a11-message'),
        tI('Avant quel jour faut-il rappeler ? Un mot.', 'Il faut le rappeler avant ... soir.', 'mercredi', 'Avant mercredi soir. EN: Wednesday.', 'a11-message'),
        tI("À quelle heure l'eau revient-elle ? En chiffres.", "L'eau est coupée jusqu'à ... h.", '11', 'De 9 h à 11 h. EN: until 11.', 'a11-message', ['onze']),
        eS('Il faut rappeler le plombier avant mercredi soir.', 'Il faut rappeler le gestionnaire avant mercredi soir.', 'Le gestionnaire a laissé son numéro. EN: the manager left his number.', 'a11-scenario'),
        lC('Écoute. Quel est le numéro ?', S(1378).fr, ['514 555-0178', '514 555-0187'], 1, 'Zéro, un, huit, sept. EN: 0187.', 'a11-message'),
        lC('Écoute. Cette phrase peut-elle ouvrir ta note ?', S(1382).fr, ['oui', 'non'], 0, 'Qui a appelé, et pourquoi : le bon début. EN: who and why first.', 'a11-plan'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule (no slot above 40%) is checked on AUTHORED order,
 *  although LessonRich reshuffles options on every attempt. So each closed
 *  question's options are ROTATED, with `correct` moved in step, onto the
 *  least-used slot so far (b1.25's helper, as b1.32 uses it). The option set
 *  and the right answer are unchanged. No `why` in this quiz names a slot. */
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
    id: 'act11', title: 'La note pour Léa',
    opener: {
      line: "Le gestionnaire a laissé un message : à toi de le noter pour Léa, avec les bons chiffres. EN: The building manager left a message: your turn to note it for Léa, with the right numbers.",
      imageRef: 'lessons/strategies-ecoute/act11.jpg',
    },
    sections: [],
    milestone: "Tu as noté un vrai message pour ta colocataire et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You noted a real message for your flatmate and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 130,
    restPoints: ['a11-message', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-essentiel', 'a11-quiz/r6-panneaux', 'a11-quiz/r9-sources'],
  },
  sections: [
    A11_MESSAGE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-sens', title: "Les réflexes d'une bonne oreille", format: 'flashcard' as const, coach: "Dis chaque phrase à voix haute : ce sont les réflexes d'une bonne oreille. EN: say each line aloud: a good listener's habits.", items: [E(1209), E(1211), E(1213), E(1212), E(1215), E(1214)], audio: AUDIO },
  { id: 'd-prediction', title: "Où l'entends-tu ?", format: 'sort' as const, coach: "Deux piles : à l'aéroport, ou au téléphone ? La situation te dit quels mots attendre. EN: sort by where you would hear it.", buckets: ["à l'aéroport", 'au téléphone'], items: [E(1226), E(1227), E(1220), E(1270), E(1224), E(1333)], audio: AUDIO },
  { id: 'd-essentiel', title: "L'idée, puis les détails", format: 'mcq' as const, coach: "Première écoute pour l'idée, deuxième pour les détails. EN: first pass for the gist, second for the details.", q: 'Tu écoutes la météo une seule fois. Tu gardes...', opts: ["l'idée générale", 'la température exacte de samedi'], correct: 0, why: "Une seule écoute : l'idée. EN: one pass, keep the gist.", items: [E(1242), E(1243), E(1244), E(1245), E(1250), E(1236)], audio: AUDIO },
  { id: 'd-mots', title: 'Le petit mot', format: 'mcq' as const, coach: 'Écoute les mots forts, et le petit mot qui retourne la phrase. EN: strong words, and the small word that turns it.', q: "Le pont Champlain n'est pas touché. Il est...", opts: ['fermé', 'ouvert'], correct: 1, why: "N'est pas touché : il roule. EN: it is open.", items: [E(1258), E(1262), E(1263), E(1264), E(1265), E(1266)], audio: AUDIO },
  { id: 'd-chiffres', title: 'La fin du chiffre', format: 'mcq' as const, coach: 'Écoute la fin de chaque nombre, et note-le tout de suite. EN: listen to the end of each number and note it at once.', q: 'Quinze ou cinquante : tu écoutes...', opts: ['la fin du mot', 'le début du mot'], correct: 0, why: '-inze ou -ante. EN: the ending.', items: [E(1276), E(1277), E(1278), E(1279), E(1280), E(1281)], audio: AUDIO },
  { id: 'd-panneaux', title: 'Tourner ou conclure', format: 'sort' as const, coach: "Deux piles : le message tourne, ou il donne une conséquence ? EN: sort turns from consequences.", buckets: ['il tourne', 'une conséquence'], items: [E(1291), E(1300), E(1301), E(1293), 'fr.b1.connecteurs-logiques.1542', E(1365)], audio: AUDIO },
  { id: 'd-oral', title: "De l'oral à l'écrit", format: 'flashcard' as const, coach: "Lis la forme orale, puis dis la forme écrite à voix haute. EN: read the spoken form, then say the written one.", items: [E(1306), E(1321), E(1307), E(1322), E(1308), E(1323)], audio: AUDIO },
  { id: 'd-repeter', title: 'Deux choix', format: 'mcq' as const, coach: "Dis ce que tu as entendu, avec deux choix, puis vérifie. EN: name the two options, then check back.", q: 'Tu hésites entre 15 h et 16 h au téléphone. Tu dis...', opts: ['« Quoi ? »', '« Vous avez dit quinze ou seize heures ? »'], correct: 1, why: 'Deux choix : une réponse en un mot. EN: a one-word answer.', items: [E(1330), E(1337), E(1338), E(1339), E(1340), E(1334)], audio: AUDIO },
  { id: 'd-sources', title: 'Ça se vérifie, ou ça se discute', format: 'sort' as const, coach: "Deux piles : un fait ou une source, ou bien une opinion ou une rumeur ? EN: checkable, or discussed?", buckets: ['un fait ou une source', 'une opinion ou une rumeur'], items: [E(1346), E(1349), E(1347), E(1350), E(1351), E(1352)], audio: AUDIO },
  { id: 'd-epreuve', title: 'La question d’abord', format: 'mcq' as const, coach: "Lis la question, écoute son sens, et ne reste pas bloqué. EN: question first, listen for its meaning, never get stuck.", q: "Tu as raté un mot pendant l'épreuve. Tu...", opts: ['passes à la question suivante', "t'arrêtes pour le retrouver"], correct: 0, why: 'Une seule écoute : la suite compte. EN: move on.', items: [E(1366), E(1367), E(1368), E(1361), E(1370), E(1365)], audio: AUDIO },
  { id: 'd-note', title: 'La charpente de ta note', format: 'flashcard' as const, coach: "Dis chaque ligne de la note à voix haute : qui, quoi, quand, quoi faire. EN: say each line of the note aloud.", items: [E(1382), E(1383), E(1384), E(1385), E(1386), E(1380)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'mot-a-mot', description: 'Tries to translate every word of fast speech in order, falls behind at the first unknown word and loses the message.', detectOn: ['a1-scene', 'a1-sans', 'a1-check', 'a11-mission'], drill: 'd-sens', retest: 'd-sens' },
  { id: 'sans-prediction', description: 'Starts listening cold, without asking who is speaking, where and why, so expected words are not recognised and a changed detail such as a new gate is missed.', detectOn: ['a2-devine', 'a2-erreurs', 'a2-check'], drill: 'd-prediction', retest: 'd-prediction' },
  { id: 'details-d-abord', description: 'Hunts for figures on the first pass and comes away with numbers but no idea of what the message was about.', detectOn: ['a3-trier', 'a3-note', 'a3-check', 'a11-mission'], drill: 'd-essentiel', retest: 'd-essentiel' },
  { id: 'petit-mot-rate', description: 'Hears the stressed content words but misses the small word that reverses them (pas, sauf, mais, et non plus) and reports the opposite.', detectOn: ['a4-cles', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-mots', retest: 'd-mots' },
  { id: 'chiffre-mal-entendu', description: 'Mishears or misnotes numbers, times and names: quinze for cinquante, deux for douze, 17 h as 7 h, digits out of order, a name guessed instead of spelled.', detectOn: ['a5-ecoute', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-chiffres', retest: 'd-chiffres' },
  { id: 'panneau-ignore', description: 'Treats par contre, du coup, bref and en fait as filler, so misses the turn, the consequence or the conclusion of a spoken argument.', detectOn: ['a6-apres', 'a6-note', 'a6-check', 'a11-mission'], drill: 'd-panneaux', retest: 'd-panneaux' },
  { id: 'oral-bloque', description: 'Stops at reduced spoken forms (chuis, chais pas, t’as, y a, the dropped ne) or takes fillers for content, and carries them into writing.', detectOn: ['a7-traduire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-oral', retest: 'd-oral' },
  { id: 'silence-au-telephone', description: 'On the phone, says yes without having understood, or asks in a way that is rude or gets everything repeated at the same speed, and never checks back.', detectOn: ['a8-choisir', 'a8-erreurs', 'a8-check'], drill: 'd-repeter', retest: 'd-repeter' },
  { id: 'opinion-comme-fait', description: 'Reports a caller’s opinion or a rumour heard on the radio as fact, dropping who said it and the host’s correction.', detectOn: ['a9-trier', 'a9-flagey', 'a9-check'], drill: 'd-sources', retest: 'd-sources' },
  { id: 'bloque-sur-un-mot', description: 'In the listening paper, listens without reading the questions first, stays stuck on a missed word and loses the next answer, or picks the option that echoes a heard number.', detectOn: ['a10-question', 'a10-pieges', 'a10-check'], drill: 'd-epreuve', retest: 'd-epreuve' },
  { id: 'note-incomplete', description: 'Writes a message note that copies the transcript or lists details, leaving out who called, what to do, or the right number.', detectOn: ['a11-message', 'a11-cheat', 'a11-mission'], drill: 'd-note', retest: 'd-note' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here. Every sheet is reached
 *  from a mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-avant', "Avant, pendant, après l'écoute", ['avant : prédire', 'pendant : deux écoutes, les mots forts', "à l'épreuve", 'après : la note'], [
    teach('sheet-avant-teach', 'Avant, pendant, après',
      `Avant d'écouter, demande-toi qui parle, où et pourquoi : la situation te donne les mots probables. Pendant, garde l'idée à la première écoute et les détails à la deuxième, et suis les mots forts. Après, redis l'idée en une phrase, ou écris ta note. C'est la méthode de ${LECTURE_REF}, pour l'oreille : « ${B137_REFRAME} » EN: Predict before, gist then details during, one sentence or a note after.`),
    table('sheet-avant-situations', "Avant d'écouter : la situation", ['Situation', 'Qui parle', 'Mots probables'], [
      ["à l'aéroport", 'une voix officielle', 'un vol, une porte, une heure, un retard'],
      ['au métro, à la gare', 'une voix enregistrée', 'une ligne, une station, une voie, un problème'],
      ['à la clinique, au téléphone', 'une réceptionniste', 'un jour, une heure, un nom, un bureau'],
      ['à la banque', 'un conseiller', 'ton nom, un numéro, une date'],
      ['à la radio le matin', 'un animateur', 'la météo, la circulation, des chiffres'],
      ['sur ta boîte vocale', 'une personne pressée', 'qui appelle, pourquoi, un numéro'],
    ]),
    table('sheet-avant-ecoutes', 'Deux écoutes', ['Écoute', 'Tu cherches', 'Tu ne fais pas'], [
      ['la première', "l'idée : de quoi ça parle, bonne ou mauvaise nouvelle", "t'arrêter sur un mot"],
      ['la deuxième', 'les détails dont tu as besoin', 'tout noter'],
      ['une seule', "l'idée, et un chiffre si c'est vital", 'décrocher au premier mot raté'],
    ]),
    table('sheet-avant-forts', 'Les mots forts', ['Garde', 'Laisse passer', 'Attention'], [
      ['les noms', 'le, la, les, un, une', 'pas, sauf, mais'],
      ['les verbes', 'de, à, en', 'et non plus, aucun'],
      ['les chiffres et les heures', 'les formules polies', 'certains, seulement'],
    ]),
    table('sheet-avant-epreuve', "À l'épreuve de compréhension orale", ['Étape', 'Ce que tu fais'], [
      ['1', 'Lis la question et les réponses avant le début.'],
      ['2', "Devine quel mot, quel chiffre ou quelle idée va venir."],
      ['3', 'Écoute le sens de la réponse, pas le même mot.'],
      ['4', 'Méfie-toi de la réponse qui reprend un chiffre entendu.'],
      ['5', 'Tu as raté un détail ? Passe à la question suivante.'],
      ['6', 'Pas sûr ? Élimine les réponses fausses, puis choisis.'],
    ]),
    table('sheet-avant-note', "La note d'un message", ['À noter', 'Comment'], [
      ['qui a appelé', 'le nom, ou la fonction : le gestionnaire'],
      ['pourquoi', 'un mot suffit : la plomberie'],
      ['quand', 'le jour et les heures, en chiffres'],
      ['quoi faire', 'être là, laisser la clé, rappeler'],
      ['le numéro', 'chiffre par chiffre, relu deux fois'],
      ['la langue', 'du français écrit, sans euh ni chuis'],
    ]),
  ]),
  sheet('sheet-chiffres', "Les chiffres à l'oral", ['les pièges', "l'heure sur 24 heures", 'le téléphone', 'épeler un nom'], [
    teach('sheet-chiffres-teach', 'Ce qui ne se devine pas',
      `Un chiffre, une heure, une date ou un nom ne se devinent pas. Écoute la fin du mot, où les nombres se séparent. Compte l'heure sur 24 heures. Note chaque chiffre dès qu'il arrive, et fais épeler les noms. Septante et nonante viennent de ${NOMBRES21_REF}. EN: Numbers differ at the end; convert the clock; note digits as they come; have names spelled.`),
    table('sheet-chiffres-pieges', 'Les pièges', ['Tu entends', 'Ne confonds pas avec', 'Écoute'], [
      ['quinze (15)', 'cinq (5), cinquante (50)', 'la fin : -inze'],
      ['douze (12)', 'deux (2)', 'le son z final'],
      ['seize (16)', 'six (6)', 'le son z final'],
      ['treize (13)', 'trois (3), trente (30)', 'la fin : -eize ou -ente'],
      ['soixante-dix (70)', 'soixante (60)', 'le dix à la fin'],
      ['quatre-vingt-seize (96)', 'quatre-vingt-six (86)', 'seize ou six'],
    ]),
    table('sheet-chiffres-heure', "L'heure sur 24 heures", ['Tu entends', "C'est", 'Tu notes'], [
      ['treize heures', "une heure de l'après-midi", '13 h'],
      ['quinze heures quarante-cinq', "quatre heures moins le quart de l'après-midi", '15 h 45'],
      ['dix-sept heures', "cinq heures de l'après-midi", '17 h'],
      ['dix-huit heures trente', 'six heures et demie du soir', '18 h 30'],
      ['vingt heures', 'huit heures du soir', '20 h'],
      ['midi, minuit', '12 h, 0 h', 'midi, minuit'],
    ]),
    table('sheet-chiffres-telephone', 'Le téléphone', ['Où', 'Comment on le dit', 'Exemple'], [
      ['au Québec', 'chiffre par chiffre, en trois groupes', 'cinq un quatre, cinq cinq cinq, zéro un huit sept'],
      ['en France', 'deux par deux', 'zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit'],
      ['partout', 'je répète : le numéro revient', 'attends-le et vérifie'],
    ]),
    table('sheet-chiffres-lettres', "Épeler : les lettres qui piègent", ['Lettre', 'Se dit', 'Ne confonds pas avec'], [
      ['G', 'jé', 'J, qui se dit ji'],
      ['J', 'ji', 'G, qui se dit jé'],
      ['E', 'e, comme dans le', 'I, qui se dit i'],
      ['I', 'i', 'E'],
      ['U', 'u, les lèvres rondes', 'OU'],
      ['Y', 'i grec', 'I'],
      ['H', 'ache', 'rien : il ne se prononce pas dans les mots'],
      ['W', 'double vé', 'V'],
    ]),
  ]),
  sheet('sheet-fil', 'Les panneaux et les sources', ["les panneaux de l'oral", 'qui parle, et est-ce vérifié'], [
    teach('sheet-fil-teach', 'Où va le message, et qui parle',
      `Deux sortes de mots guident ton oreille. Les connecteurs annoncent la suite : ils ajoutent, ils tournent, ils concluent. ${Cap(CONNECTEURS_REF)} t'apprennent à les écrire : « ${B130_REFRAME} » Les marqueurs de source disent qui parle : selon, d'après, je trouve, il paraît que. EN: Connectors announce what comes next; source markers say who is speaking.`),
    table('sheet-fil-connecteurs', "Les panneaux de l'oral", ['Le message...', 'Tu entends', 'Ce qui suit'], [
      ['commence', "alors, d'abord", 'le sujet, le premier point'],
      ['ajoute', 'ensuite, en plus, de plus', 'un point dans le même sens'],
      ['tourne', 'par contre, mais, pourtant, or', "l'autre côté"],
      ['tire une conséquence', 'du coup, donc', 'le résultat'],
      ['corrige', 'en fait', 'la bonne version'],
      ['conclut', 'bref', "l'idée principale"],
    ]),
    table('sheet-fil-sources', "D'où vient l'information", ['Tu entends', 'Qui parle', 'Tu peux le croire ?'], [
      ['un chiffre, une date, sans avis', "l'animateur, le journaliste", 'un fait, à vérifier ailleurs'],
      ['selon la Ville', 'la Ville', 'sa version des faits'],
      ["d'après + conditionnel", 'une source, sans garantie', 'pas encore vérifié'],
      ['je trouve, à mon avis', 'une personne', 'une opinion'],
      ['il paraît que', 'on ne sait pas qui', 'une rumeur'],
      ["l'animateur précise", 'la radio', 'une correction, souvent sûre'],
    ]),
  ]),
  sheet('sheet-oral', 'Le français parlé', ['les réductions', 'le ne qui tombe', 'les béquilles', 'des mots du Québec'], [
    teach('sheet-oral-teach', "Reconnaître l'oral, écrire l'écrit",
      `À l'oral, les mots rétrécissent : je suis devient chuis, il y a devient y a, et le ne tombe, comme ${NEGATION_REF} te l'a montré. Des béquilles (ben, euh, genre) donnent du temps. Rien de tout ça n'est faux : « ${B125_REFRAME} » Reconnais ces formes, et écris la forme complète. EN: Recognise spoken reductions and fillers; write the full form.`),
    table('sheet-oral-reductions', 'Les réductions', ['Tu entends', "C'est", 'Exemple'], [
      ['chuis', 'je suis', 'Chuis fatigué, je rentre.'],
      ['chais pas', 'je ne sais pas', 'Euh, chais pas trop.'],
      ["t'as", 'tu as', "T'as vu les prix ?"],
      ["t'es", 'tu es', "T'es où ?"],
      ['y a', 'il y a', 'Y a rien de mieux.'],
      ['je dors pas', 'je ne dors pas', 'Du coup je dors pas.'],
    ]),
    table('sheet-oral-bequilles', 'Les béquilles', ['Tu entends', 'Ça sert à', 'Dans ta note'], [
      ['ben', 'commencer, hésiter', 'rien'],
      ['euh', 'gagner du temps', 'rien'],
      ['genre', 'donner un exemple vague, comme like', 'rien'],
      ['bon', 'passer à autre chose', 'rien'],
      ['hein', 'demander un accord', 'rien'],
    ]),
    table('sheet-oral-quebec', 'Des mots du Québec', ['Au Québec', 'En France', 'En anglais'], [
      ['la fin de semaine', 'le week-end', 'the weekend'],
      ['une tuque', 'un bonnet', 'a woolly hat'],
      ["c'est le fun", "c'est sympa", 'it is fun'],
      ['pantoute', 'pas du tout', 'not at all'],
      ['la carte soleil', "la carte d'assurance maladie", 'the health card'],
      ['un balado', 'un podcast', 'a podcast'],
      ['la ligne ouverte', "l'émission de libre antenne", 'a radio call-in show'],
      ['le refroidissement éolien', 'la température ressentie', 'wind chill'],
    ]),
  ]),
  sheet('sheet-conversation', 'Faire répéter, vérifier', ['demander', 'vérifier', 'épeler'], [
    teach('sheet-conversation-teach', 'Tu as le droit de demander',
      "Au téléphone ou au guichet, faire répéter est normal. La demande la plus efficace dit ce que tu as entendu : vous avez dit quinze ou cinquante ? Avant de raccrocher, redis l'essentiel : si je comprends bien... La personne corrige tout de suite si tu t'es trompé. EN: Name the two options you heard, then say the key point back before hanging up."),
    table('sheet-conversation-demander', 'Demander', ['Tu dis', 'Quand', 'Tu obtiens'], [
      ['Pardon ?', 'tu as tout raté', 'tout, parfois aussi vite'],
      ["Vous pouvez répéter, s'il vous plaît ?", 'tu as raté une phrase', 'la phrase, encore une fois'],
      ['Plus lentement, s’il vous plaît.', 'ça va trop vite', 'une autre vitesse'],
      ['Vous avez dit quinze ou cinquante ?', 'tu hésites entre deux', 'une réponse en un mot'],
      ["Vous pouvez l'épeler ?", 'un nom, une adresse', 'les lettres'],
      ["Je n'ai pas compris le numéro.", 'il manque une seule chose', 'juste ce qui manque'],
    ]),
    table('sheet-conversation-verifier', 'Vérifier', ['Tu dis', 'Ça sert à'], [
      ['Si je comprends bien, ...', "redire l'essentiel"],
      ["C'est bien ça ?", 'demander une confirmation'],
      ['Donc, c’est mercredi après-midi ?', 'vérifier un détail'],
      ['Je note : ...', 'répéter pendant que tu écris'],
      ['À éviter : Quoi ? Répétez.', 'trop familier, ou un ordre'],
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-38-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-38-metro': "REQUIRED FOR THE EAR MISSION (act 1): the Montréal métro tannoy, eight lines, ONE TAKE, ONE VOICE, in authored order, Québécois French, in the flat rhythm of an STM announcement and NOT slowed down: the learner must hear that it is too fast to translate. The « Je répète » line at the same pace as the rest. A light platform ambience under it is welcome.",
  'rec-b1-38-aeroport': "REQUIRED FOR THE EAR MISSION (act 2): the Geneva gate announcement, seven lines, ONE TAKE, ONE VOICE, Swiss French welcome, airport-announcement pace. « Et non plus porte A 12 » gets NO extra stress: the trap works only if the learner has to catch it. Numbers said as a tannoy says them (« quatorze heures quarante », « B trente-deux »).",
  'rec-b1-38-meteo': "REQUIRED FOR BOTH EAR MISSIONS OF ACT 3 (the same recording is played twice): the Québec City weather bulletin, seven lines, ONE TAKE, ONE VOICE, a Québécois radio host, warm and brisk, radio pace. « Refroidissement éolien », « fin de semaine », « tuques et mitaines » said naturally, never explained.",
  'rec-b1-38-deux': 'The four two-pass cards. Cards one to three at the same pace. Card four is a quotation from the reading-strategy lesson (lesson 37 in B1): read it as a quotation, a little slower.',
  'rec-b1-38-routes': "REQUIRED FOR THE EAR MISSION (act 4): the Montréal traffic report, seven lines, ONE TAKE, ONE VOICE, a Québécois traffic reporter at full radio speed. Natural French stress at the end of each group; « n'est pas touché » and « aucun » get NO extra stress.",
  'rec-b1-38-forts': 'The four stressed-word cards. On cards one to three, let the natural group-final stress be clearly audible. Card four is three items separated by middots: three chunks, a beat between each.',
  'rec-b1-38-piege-mots': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-38-clinique': "REQUIRED FOR THE EAR MISSION (act 5): the clinic's automated confirmation message, seven lines, ONE TAKE, ONE VOICE, the even, slightly fast voice of a phone system. Phone digits one by one, Québec style. The spelling N, G, U, Y, E, N with the French letter names (« enne, jé, u, i grec, e, enne »).",
  'rec-b1-38-chiffres-ecoute': "REQUIRED FOR THE EAR MISSION (act 5): eight number lines, ONE TAKE, in authored order, ordinary conversational speed. Lines seven and eight are BELGIAN or SWISS (septante, nonante) and should be read by a Belgian or Swiss voice; the others by a France or Québec voice. No number is slowed or stressed: the learner must hear the ending at speed.",
  'rec-b1-38-piege-chiffres': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-38-podcast': "REQUIRED FOR THE EAR MISSION (act 6): the podcast excerpt, seven lines, ONE TAKE, ONE VOICE, a relaxed Montréal podcaster talking, not reading. The signposts (alors, d'abord, ensuite, par contre, du coup, bref) at their natural spoken weight, NOT stressed: the learner has to find them.",
  'rec-b1-38-panneaux': 'The four signpost cards. Card one is three connectors separated by middots, each with a clear beat. Card four ends on a quotation from lesson 30 in B1: read it as a quotation.',
  'rec-b1-38-micro': "REQUIRED FOR THE EAR MISSION (act 7): the street interview, seven lines, ONE TAKE, SIX VOICES: the reporter (line 1) and five passers-by, a mix of ages, all Montréal French. REAL SPOKEN FRENCH IS THE POINT: « chuis » as one syllable, « chais pas », « t'as », « y a », the ne never said, « ben », « euh », « genre » as fillers. TTS cannot do this well; this brief is the one to record first.",
  'rec-b1-38-piege-oral': "The audio step plays each card's CORRECT sentence, in natural spoken French (« chuis », « y a plus » as one breath). The wrong versions in promptSound are never spoken.",
  'rec-b1-38-appel': "REQUIRED FOR THE EAR MISSION (act 8): the customer-service call, eight lines, ONE TAKE, TWO VOICES in authored order: Julie, the agent (lines 1, 2, 4, 6, 8), fast and friendly, Québécois; the customer (lines 3, 5, 7), a careful learner of French, slower. The agent's second answer is audibly slower than her first.",
  'rec-b1-38-repeter': 'The four repetition cards, read as requests: polite, a slight rise at each question mark.',
  'rec-b1-38-ligne': "REQUIRED FOR THE EAR MISSION (act 9): the Québec City call-in, eight lines, ONE TAKE, THREE VOICES: the host (lines 1 to 3, 4, 7), Denis (lines 5 and 6), agitated, Limoilou accent welcome, and Sophie (line 8), calm. The rumour (line 6) said as people say it, never as a headline. The learner must tell fact from opinion by the WORDS, so no line is signalled by a sarcastic tone.",
  'rec-b1-38-flagey': "REQUIRED FOR THE EAR MISSION (act 9): eight source lines from lesson 37 in B1, ONE TAKE, in authored order, as a Brussels street report: a Belgian newsreader for the factual and sourced lines (1, 2, 5, 7, 8), two passers-by for the opinion and the rumour (3, 4, 6). No tone hints at which is which.",
  'rec-b1-38-cours': "REQUIRED FOR THE EAR MISSION (act 10): the lecture fragment, seven lines, ONE TAKE, ONE VOICE, a university lecturer, clear but at lecture speed, read like an exam recording: even, no performance. « Or », « d'une part », « d'autre part » at the same pace as the rest.",
  'rec-b1-38-message': "THE TASK VOICEMAIL (act 11), REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, Martin Leblanc, a Montréal building manager leaving a real voicemail: a little rushed, one « euh », phone quality welcome. The phone number said digit by digit, twice, the second time a touch slower. Nothing about the water cut is stressed: « par contre » is the only signal.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 38',
  intro: 'For years you will hear French that is too fast for you, and there is no rewind on a station platform or in an exam. This lesson teaches what a good listener catches instead of every word: the situation before the voice, the gist on the first pass, the stressed words, the numbers and names, the spoken signposts, everyday spoken forms, and who is speaking. It also teaches you to ask for repetition in a live call. It ends with a written note from a real voicemail.',
  skill: 'CO',
  grammarAssumed: [
    NOMBRES21_UNIT, GRANDS_NOMBRES_UNIT, NEGATION_UNIT, REGISTRES_UNIT, LECTURE_UNIT,
  ],
  grammarIntroduced: [
    'Listening strategy: predicting content and vocabulary from the situation before listening; gist on the first pass, details on the second',
    'Following stressed content words and French group-final stress; catching small reversing words (pas, sauf, mais, et non plus, aucun)',
    'Decoding spoken numbers, 24-hour times, phone numbers (Québec digit by digit, France in pairs) and spelled names',
    'Spoken signposts (du coup, en fait, par contre, bref) and recognition of reduced spoken forms (chuis, chais pas, t’as, y a, dropped ne) and fillers',
    'Asking for repetition with two options and checking by reformulation; telling fact, source, opinion and rumour apart by ear; question-first listening for the TCF and TEF; the message note',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Pendant des années, tu vas entendre du français trop rapide pour toi, et on ne peut pas revenir en arrière sur un quai ou à l'examen. Cette leçon t'apprend ce qu'une bonne oreille attrape à la place de chaque mot : la situation, l'idée, les mots forts, les chiffres, les panneaux, les formes du français parlé et qui parle. À la fin, tu notes un vrai message pour ta colocataire.",
    minutes: 140,
    difficulty: 3,
    glyph: 'écoute',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: STRATEGIES_ECOUTE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, MESSAGE_TRANSCRIPT, dicteeFor };
