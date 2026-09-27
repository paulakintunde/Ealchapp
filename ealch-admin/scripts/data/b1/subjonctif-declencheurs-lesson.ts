// b1.15.l1 « Le subjonctif : les déclencheurs » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published.
//
// THE `task` SECTION IS REAL. As of 2026-09-25 `task` is in SECTION_TYPES and
// in the `LessonSection` union, `validateSection` enforces its rubric, model
// answer and watchFor rules, and TaskView.tsx renders it. So `sections` is a
// plain `LessonSection[]`, there is no `DraftSection` and no
// `lessonWithoutTask()` shim, and every validator runs on `LESSON` itself.
// The LLM grading path is still blocked (see B1-BUILD-LOG.md); the shipped
// behaviour is an offline self-check against `modelAnswer`, which is why the
// model answer here is a genuine B1 yardstick and not a showpiece.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading), name (cardDeck, examples,
//   tapTable), build (groupDrill, gated), choose (a drill where the FORM is
//   picked because of the expression in front, not by a surface cue), trap
//   (trapDrill stepped or commonErrors), check (gated control pages).
//
//    1  La clé                        7   que opens; the expression decides
//    2  La volonté                    7   vouloir, souhaiter, exiger and kin
//    3  La nécessité                  7   il faut que and the impersonal set
//    4  Le sentiment                  8   a certain fact, and the form changes
//    5  Le doute                      7   douter, possible, se peut, semble
//    6  La bascule                    8   je pense que against je ne pense pas
//    7  Pour que, bien que            7   purpose and concession
//    8  Avant que, jusqu'à ce que     8   time and condition
//    9  Ce qui ne le prend pas        8   espérer, il me semble, probable
//   10  Trier à froid                 8   all five families, shuffled
//   11  Écrire avec les déclencheurs 11   the model, the TASK, the quiz, the end
//
//   TOTAL 86 missions, 11 acts. Corpus: 199 authored rows in eleven blocks
//   plus 54 reused seed rows, 253 item ids in all, released act by act
//   through `deckTranche`.
//   Chapter artwork: `subjonctif-declencheurs-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (which later lessons may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Ce n'est pas le verbe qui décide : c'est l'expression devant « que ». »
//   EN: It is not the verb that decides: it is the expression in front of que.
//
//   ONE METAPHOR, LA CLÉ, PAS LA PORTE. b1.14 taught « que » as the doorway.
//   Here the doorway is always the same and what decides is the KEY standing
//   in front of it. One door, a ring of keys, and only some of them turn. The
//   image carries every family: will, necessity, feeling and doubt are keys
//   that turn; espérer, il me semble and parce que sit on the same ring and
//   do not. It also carries the centrepiece, the swing from « je pense que »
//   to « je ne pense pas que »: the door did not move, the key did.
//
//   It is NOT a metaphor of difficulty, of being locked out, or of mood.
//   Nothing here says the subjunctive is emotional or uncertain: that is
//   false of il faut que, pour que and avant que, and b1.14 rejected exactly
//   that sentence for exactly that reason.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the INVENTORY b1.14 refused to give, organised by why the
//           subjunctive appears: la volonté, la nécessité, le sentiment, le
//           doute, les conjonctions, and the half of the skill that is
//           knowing what does NOT take it. Inside that, the two finest lines
//           in the whole topic: « je pense que » against « je ne pense pas
//           que », and « il semble que » against « il me semble que ».
//   QUOTES  b1.14's reframe (« Le subjonctif ne s'invente pas : presque
//           toujours, il sort d'une forme que tu dis déjà »), imported by
//           name from its corpus and never retyped. It appears in acts 1, 6
//           and 11, at the three points where a key turns and the learner has
//           to build something.
//   LEAVES  to b1.16: subjunctive against infinitive and the same-subject
//           rule (« je veux partir » / « je veux que tu partes »), named ONCE
//           as a signpost in act 11's roundup and never drilled; the task's
//           grader notes forbid marking it in either direction. To b1.14 and
//           back: the FORMATION, which is assumed known. Where a form is hard
//           the card cites b1.14 and moves on; no act re-teaches the endings,
//           the ils stem, the two-stem verbs or the ten irregulars. Out of B1
//           entirely and named nowhere: the past and imperfect subjunctive.
//           To b1.17 and b1.18, running in parallel: pronoun order and the
//           passive, so no authored row stacks two object pronouns and none
//           is passive.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction, coach line, drill prompt, break body and
//   milestone; characters use what the situation needs (the caretaker, the
//   landlord and the clerk say « vous »). Every learner surface that explains
//   something carries English: an `en` field, or a final « EN: ». Answers are
//   never behind « EN: ». Every `say` is French, spoken fr-FR. Theme
//   `opinions-et-avis`. A2 citations use the English trail label resolved
//   through `unitRef`; b1.* ones are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. ELEVEN DB-ONLY TWINS are recorded in corpus §F2, and unlike b1.14's
//      they are ON TOPIC: every one sits behind a trigger this lesson
//      teaches. Dropping the authored twin and keeping the published row is
//      the cheap answer here. Confirm at import, or keep both?
//   2. « IL SEMBLE QUE » versus « IL ME SEMBLE QUE » is the finest line in
//      the lesson, and act 9 spends a card and four quiz questions on it. The
//      seed carries four published rows of the first and none of the second,
//      so the contrast is authored on one side only. Is that distinction B1,
//      or should it move to B2 and leave act 9 with the five easy cases?
//   3. THREE tapTables (acts 2, 5 and 7), one per act. The pilot brief
//      allowed one per LESSON; b1.02 to b1.14 shipped 2 and 3. Confirm the
//      looser rule (b1.01 q2, b1.03 q4, b1.09 q3, b1.14 q4 all raise this and
//      none is answered).
//   4. ACT 4 HAS NO REUSED ROWS AT ALL. The seed carries not one sentence
//      behind a FEELING trigger: zero hits for content que, heureux que,
//      triste que, surpris que, désolé que, regrette que, dommage que. The
//      published corpus teaches the subjunctive of obligation and doubt and
//      not the subjunctive of feeling. Worth a corpus commission of its own?
//   5. THE THEME QUESTION b1.14 raised is settled for this lesson and still
//      open for that one: `opinions-et-avis` is exactly right for triggers
//      and was a poor fit for formation. Should b1.14 move, or should the
//      pair stay together?
//   6. B1 CITATIONS are French from the plan (« la leçon 14 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   7. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01 to b1.14. Tail them too?
//   8. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   9. The task is WRITTEN (110 to 150 words, `skill: 'PE'`), because a
//      message is where a learner actually has to change key four times in
//      ten lines. The unit outcome is spoken too. Should b1.15 also carry a
//      spoken task?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_CLE, READING_NECESSITE, READING_BASCULE, READING_CONDITION,
  READING_INDICATIF, READING_MESSAGE,
  B114_REFRAME, B114_REFRAME_EN,
  FORMATION_UNIT, POLI_UNIT, SI_UNIT, MODAUX_UNIT, SAVOIR_UNIT,
  FORMATION_REF, POLI_REF, INFINITIF_REF, SI_REF,
} from './subjonctif-declencheurs-corpus.ts';
import { DECLENCHEURS_TERMS } from './subjonctif-declencheurs-terms.ts';
import { ALL_ROWS as B114_ROWS } from './subjonctif-formation-corpus.ts';

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
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));
/** b1.14's rows, named by id where b1.14 owns the headword (je veux que,
 *  il faut que, je suis content que, bien que, avant que): the flashcard hub
 *  deals one card per headword per theme, so this lesson never re-authors
 *  them. Kept out of ROW so FLASHABLE still treats them as imports. */
const SIBLING = new Map<string, SrcItem>(B114_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus, b1.14's or the seed. Throws on a typo,
 *  so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SIBLING.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.15: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation of a passage, with no corpus row. */
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
 *  REFERENCE SHEETS
 *
 *  `layer: 'deep'`, `render: 'sheet'`, and only `teach` and `table` inside
 *  (ReferenceSheet.tsx draws nothing else, and a `table` at layer core is
 *  refused by validateDensity). Every sheet is reachable from at least one
 *  mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-cle', 'Toutes les clés', ['les cinq familles', 'ce qui ouvre', 'ce qui n’ouvre pas'], [
    teach('sheet-cle-teach', 'Une porte, un trousseau',
      `${REFRAME} Le mot « que » est toujours le même : il annonce qu'une phrase entière arrive, avec son sujet et son verbe. Ce qui décide de la forme de ce verbe, c'est l'expression écrite juste devant. Cinq familles ouvrent la porte : la volonté, la nécessité, le sentiment, le doute et les mots de liaison qui finissent par que. Tout le reste la laisse fermée, et le verbe garde sa forme ordinaire. EN: ${REFRAME_EN} Five families open the door; everything else leaves the ordinary form of the verb alone.`),
    table('sheet-cle-familles', 'Les cinq familles qui ouvrent', ['Famille', 'Exemples de clés', 'Exemple'], [
      ['la volonté', 'vouloir que, souhaiter que, exiger que, préférer que', 'Je veux que tu viennes.'],
      ['la nécessité', 'il faut que, il est important que, il vaut mieux que', 'Il faut que tu viennes.'],
      ['le sentiment', 'être content que, avoir peur que, c’est dommage que', 'Je suis content que tu viennes.'],
      ['le doute', 'douter que, il est possible que, il semble que', 'Je doute que tu viennes.'],
      ['les liens', 'bien que, pour que, avant que, jusqu’à ce que', 'Bien que tu viennes de loin...'],
      ['la négation d’opinion', 'je ne pense pas que, je ne crois pas que', 'Je ne pense pas que tu viennes.'],
    ]),
    table('sheet-cle-non', 'Les clés qui n’ouvrent pas', ['Clé', 'Forme après que', 'Exemple'], [
      ['j’espère que', 'indicatif', 'J’espère que tu viens.'],
      ['je pense que, je crois que', 'indicatif', 'Je pense que tu viens.'],
      ['il me semble que', 'indicatif', 'Il me semble que c’est vrai.'],
      ['il est probable que', 'indicatif', 'Il est probable qu’il est là.'],
      ['parce que, puisque', 'indicatif', 'Nous rentrons parce qu’il pleut.'],
      ['après que, pendant que', 'indicatif', 'Après que tu es parti, j’ai fermé.'],
    ]),
  ]),

  sheet('sheet-volonte', 'La volonté et la nécessité', ['vouloir que et ses voisins', 'il faut que et ses voisins', 'le conditionnel ne change rien'], [
    teach('sheet-volonte-teach', 'Ce que tu veux, ce qui doit être',
      "Ces deux familles disent la même chose de deux façons. La volonté la dit avec une personne : je veux, elle souhaite, le directeur exige. La nécessité la dit sans personne, avec « il » : il faut, il est important, il vaut mieux. Dans les deux cas, la chose n'est pas encore arrivée au moment où tu parles, et le verbe derrière « que » passe au subjonctif. Le conditionnel du porteur ne change rien : « il faudrait que » et « j'aimerais que » ouvrent exactement comme « il faut que » et « je veux que ». EN: will names a person, necessity uses an empty il, and both open the door; putting the carrier in the conditional changes nothing.",
    ),
    table('sheet-volonte-liste', 'La volonté', ['Clé', 'Registre', 'Exemple'], [
      ['vouloir que', 'courant, direct', 'Je veux que tu me rappelles avant midi.'],
      ['vouloir que, au conditionnel', 'plus doux', 'Je voudrais que nous fixions une date.'],
      ['souhaiter que', 'soigné', 'Ma sœur souhaite que nous soyons là.'],
      ['aimer que, au conditionnel', 'courant, poli', 'J’aimerais que tu restes encore un peu.'],
      ['exiger que', 'fort, souvent écrit', 'Le propriétaire exige que le loyer soit payé.'],
      ['préférer que, demander que', 'courant', 'Je préfère que nous prenions le train.'],
    ]),
    table('sheet-necessite-liste', 'La nécessité', ['Clé', 'Force', 'Exemple'], [
      ['il faut que', 'forte, la plus fréquente', 'Il faut que je parte maintenant.'],
      ['il est nécessaire que', 'forte, écrite', 'Il est nécessaire que chaque parent signe.'],
      ['il est important que', 'moyenne', 'Il est important que tu dormes avant le voyage.'],
      ['il est essentiel que', 'forte', 'Il est essentiel que le dossier parte aujourd’hui.'],
      ['il vaut mieux que', 'conseil', 'Il vaut mieux que tu leur téléphones toi-même.'],
      ['il est temps que', 'moyenne', 'Il est temps que nous prenions une décision.'],
    ]),
  ]),

  sheet('sheet-sentiment', 'Le sentiment et le doute', ['les adjectifs de sentiment', 'douter, possible, se peut', 'possible contre probable'], [
    teach('sheet-sentiment-teach', 'Un fait sûr, et un fait en suspens',
      "Ces deux familles se ressemblent à l'oreille et sont opposées dans le fond. Avec un sentiment, le fait est sûr et tu le sais : « Je suis content que tu sois là » veut dire que tu es là. Avec le doute, tu refuses de donner le fait pour vrai : « Je doute que tu sois là » veut dire que tu n'y es peut-être pas. Les deux ouvrent la porte, et pour deux raisons différentes. Attention à la paire qui trompe tout le monde : « il est possible que » ouvre, « il est probable que » n'ouvre pas, parce que probable présente la chose comme presque vraie. EN: a feeling is about a certain fact, doubt refuses to give the fact as true, and both open the door; possible opens and probable does not.",
    ),
    table('sheet-sentiment-liste', 'Le sentiment', ['Clé', 'Ce que tu dis', 'Exemple'], [
      ['je suis content que', 'la joie', 'Je suis content que tu prennes des vacances.'],
      ['je suis triste que', 'la peine', 'Nous sommes tristes que vous partiez si vite.'],
      ['je suis surpris que', 'l’étonnement', 'Je suis surprise qu’il ne dise rien.'],
      ['je suis désolé que', 'l’excuse', 'Je suis désolé que tu doives attendre.'],
      ['j’ai peur que', 'la crainte', 'J’ai peur que le train soit en retard.'],
      ['c’est dommage que', 'le regret', 'C’est dommage que le musée ferme à cinq heures.'],
    ]),
    table('sheet-doute-liste', 'Le doute', ['Clé', 'Ouvre ?', 'Exemple'], [
      ['je doute que', 'oui', 'Je doute que ce train parte à l’heure.'],
      ['il est possible que', 'oui', 'Il est possible que le colis arrive demain.'],
      ['il se peut que', 'oui', 'Il se peut que la salle soit déjà réservée.'],
      ['il n’est pas sûr que', 'oui', 'Il n’est pas certain que le vol parte à l’heure.'],
      ['il semble que', 'oui', 'Il semble que personne ne connaisse cette rue.'],
      ['il est probable que', 'non', 'Il est probable que la salle est libre jeudi.'],
    ]),
  ]),

  sheet('sheet-liens', 'Les mots qui finissent par que', ['le but', 'la concession', 'le temps et la condition'], [
    teach('sheet-liens-teach', 'Dix liens, et un piège',
      "Un lien est un mot de liaison qui porte son « que » avec lui, et tous ceux de cette liste ouvrent la porte. Ils se rangent en trois groupes. Le but : pour que, afin que, de peur que, et la chose n'est pas encore atteinte. La concession : bien que, quoique, et la phrase dit le contraire de ce qu'on attend. Le temps et la condition : avant que, jusqu'à ce que, à condition que, sans que, pourvu que, à moins que. Le piège est une paire : « avant que » ouvre, « après que » n'ouvre pas, parce qu'après que la chose est déjà arrivée. EN: purpose, concession, and time or condition; the trap is that avant que opens and après que does not.",
    ),
    table('sheet-liens-liste', 'Les dix liens', ['Lien', 'Groupe', 'Exemple'], [
      ['pour que', 'le but', 'Je te laisse la clé pour que tu puisses entrer.'],
      ['afin que', 'le but', 'Nous partons tôt afin que les enfants dorment.'],
      ['de peur que', 'le but', 'Elle range les papiers de peur que quelqu’un les perde.'],
      ['bien que', 'la concession', 'Bien que la salle soit petite, tout le monde tient.'],
      ['quoique', 'la concession', 'Quoique le travail soit dur, il ne se plaint jamais.'],
      ['avant que', 'le temps', 'Range la cuisine avant que les invités arrivent.'],
      ['jusqu’à ce que', 'le temps', 'Attends ici jusqu’à ce que je revienne.'],
      ['à condition que', 'la condition', 'Tu peux rester, à condition que tu fasses la vaisselle.'],
      ['sans que', 'la condition', 'Sans que je dise un mot, elle a compris.'],
      ['pourvu que, à moins que', 'la condition', 'Nous partirons demain, à moins qu’il neige.'],
    ]),
    table('sheet-liens-paire', 'Avant que et après que', ['Lien', 'Forme', 'Pourquoi'], [
      ['avant que', 'subjonctif', 'La chose n’est pas encore arrivée.'],
      ['après que', 'indicatif', 'La chose est déjà arrivée.'],
      ['jusqu’à ce que', 'subjonctif', 'La fin n’est pas encore là.'],
      ['depuis que', 'indicatif', 'Le début est un fait daté.'],
      ['pendant que', 'indicatif', 'Les deux choses sont réelles en même temps.'],
      ['dès que', 'indicatif', 'Le moment est présenté comme certain.'],
    ]),
  ]),

  sheet('sheet-indicatif', 'Ce qui n’ouvre pas la porte', ['espérer, sembler, probable', 'la bascule', 'les paires à ne pas confondre'], [
    teach('sheet-indicatif-teach', 'Quand la chose est donnée pour vraie',
      "La règle derrière toute la liste tient en une phrase : si l'expression présente la chose comme vraie, le verbe garde sa forme ordinaire. « Je sais que tu viens », « il est probable qu'il est là », « parce qu'il pleut » : dans chaque cas, celui qui parle donne le fait. Espérer surprend beaucoup de monde, parce qu'espérer ressemble à vouloir. Mais quand tu espères, tu comptes sur la chose : tu la présentes comme ce qui va arriver. C'est pour cela que le français dit « j'espère que tu viens » et jamais « j'espère que tu viennes ». EN: an expression that presents the thing as true leaves the verb alone, and espérer is one of them although it feels like wanting.",
    ),
    table('sheet-indicatif-liste', 'Les clés qui laissent la porte fermée', ['Clé', 'Exemple', 'Pourquoi'], [
      ['j’espère que', 'J’espère que tout se passera bien.', 'Tu comptes sur la chose.'],
      ['il me semble que', 'Il me semble que cette adresse est fausse.', 'Tu donnes ton impression comme un fait.'],
      ['il est probable que', 'Il est probable que le magasin ferme à sept heures.', 'Presque vrai, donc donné pour vrai.'],
      ['il paraît que', 'Il paraît que le loyer va augmenter.', 'Tu rapportes ce qu’on dit.'],
      ['peut-être que', 'Peut-être que Karim connaît la réponse.', 'Le doute est dans peut-être, pas dans que.'],
      ['parce que, pendant que, après que', 'Nous sommes rentrés parce que la pluie tombait.', 'Les faits sont réels et datés.'],
    ]),
    table('sheet-indicatif-paires', 'Six paires à ne pas confondre', ['Indicatif', 'Subjonctif', 'Ce qui a bougé'], [
      ['Je pense qu’il vient.', 'Je ne pense pas qu’il vienne.', 'la négation'],
      ['Je crois que c’est vrai.', 'Je ne crois pas que ce soit vrai.', 'la négation'],
      ['Je suis sûr qu’il part.', 'Je ne suis pas sûr qu’il parte.', 'la négation'],
      ['Il me semble que c’est vrai.', 'Il semble que ce soit vrai.', 'le petit mot me'],
      ['Il est probable qu’il est là.', 'Il est possible qu’il soit là.', 'probable contre possible'],
      ['Après qu’il est parti.', 'Avant qu’il parte.', 'avant contre après'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LA CLÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The failing instinct is the one b1.14 created: a learner who has
 *  just learned to BUILD the form now puts it everywhere.
 *  NO SPACED « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le message que tu réécris trois fois',
  frSub: 'Vendredi soir, dans la cuisine',
  setting: { place: 'Une colocation, rue de Nantes', city: 'Rennes', time: '20 h 05', ambience: 'un tableau blanc, des cartons pliés, une bouilloire qui chauffe' },
  beats: [
    {
      kind: 'narration',
      text: "Une colocation rue de Nantes, à Rennes. Vendredi, vingt heures. Le déménagement est dimanche, et il manque une réponse : celle de Théo.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Inès',
      fr: 'Écris à Théo, et demande-lui s’il vient dimanche.',
      en: 'Write to Théo and ask him whether he is coming on Sunday.',
      respell: '[ay-kree a tay-OH | ay duh-mahⁿd-lwee seel vyehⁿ dee-MAHⁿSH]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'J’espère qu’il vienne dimanche.',
      en: 'I hope he is coming on Sunday.',
      respell: '[zhehs-pehr keel VYENN dee-MAHⁿSH]',
      stage: "Tu viens d'apprendre à construire la forme, et depuis tu la mets derrière chaque « que ».",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Inès',
      fr: 'Là, c’est j’espère qu’il vient. Avec espérer, on ne change rien.',
      en: 'There it is j’espère qu’il vient. With espérer, nothing changes.',
      respell: '[la seh zhehs-pehr keel VYEHⁿ | a-vehk ehs-pay-ray ohⁿ nuh shahⁿzh RYEHⁿ]',
      stage: 'Elle ne sait pas expliquer pourquoi. Elle sait seulement que ça se dit comme ça.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Tu as maintenant deux formes et aucune règle pour choisir. Sur le tableau derrière toi, six phrases attendent, et cinq d'entre elles ne prennent pas la même forme que la sixième.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences ton message. Quelle phrase existe en français ?',
      size: 'lg',
      options: [
        { fr: 'J’espère qu’il vienne dimanche.', respell: '[zhehs-pehr keel VYENN dee-MAHⁿSH]', en: 'I hope he is coming on Sunday.', outcome: 'breaks', audio: AUDIO },
        { fr: 'J’espère qu’il vient dimanche.', respell: '[zhehs-pehr keel VYEHⁿ dee-MAHⁿSH]', en: 'I hope he is coming on Sunday.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Théo répond en deux minutes. Tu as gardé la forme ordinaire, et c’était la bonne, pour une raison que tu ne connais pas encore.',
        breaks: 'Théo répond quand même. Mais tu viens de confirmer ta règle secrète, celle qui dit « après que, subjonctif », et elle est fausse une fois sur deux.',
      },
    },
    {
      kind: 'break',
      heading: 'Toutes les clés n’ouvrent pas',
      body: "Il faut que et bien que font changer le verbe. J'espère que et parce que ne changent rien. Ce qui décide est écrit devant le mot que. EN: some expressions change the verb, others leave it alone; what decides is written in front.",
      wrong: {
        fr: 'J’espère qu’il vienne dimanche.',
        ipa: '/ʒɛs.pɛʁ kil vjɛn di.mɑ̃ʃ/',
        respell: '[zhehs-pehr keel VYENN dee-MAHⁿSH]',
        en: 'I hope he is coming on Sunday.',
      },
      right: {
        fr: 'J’espère qu’il vient dimanche.',
        ipa: '/ʒɛs.pɛʁ kil vjɛ̃ di.mɑ̃ʃ/',
        respell: '[zhehs-pehr keel VYEHⁿ dee-MAHⁿSH]',
        en: 'I hope he is coming on Sunday.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Théo vient. Il reste à savoir lesquelles de ces expressions ouvrent la porte, et pourquoi elles se rangent en familles plutôt qu'en liste.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['cle', 'fait'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Savoir quelles expressions ouvrent la porte', s: 'Actes 2 à 5 : la volonté, la nécessité, le sentiment, le doute' },
    { t: 'Tenir la bascule de la négation', s: 'Acte 6 : je pense que contre je ne pense pas que' },
    { t: 'Placer les mots qui finissent par que', s: 'Actes 7 et 8 : bien que, pour que, avant que, sans que' },
    { t: 'Reconnaître les clés qui n’ouvrent pas', s: 'Actes 9 et 10 : espérer, il me semble, il est probable' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: six lines on a whiteboard, five of one kind and one of
 *  the other, before any rule is given. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le tableau de la colocation',
  frSub: 'Lis, et compte les que',
  text: READING_CLE,
  glossary: [
    { word: 'colocation', en: 'a house share', note: "Un logement partagé entre plusieurs personnes. EN: a shared flat." },
    { word: 'la remorque', en: 'the trailer', note: "Ce qu’on accroche derrière une voiture pour transporter des meubles." },
    { word: 'doute', en: 'doubts', note: "Du verbe douter : il ne croit pas que ça arrive. EN: from douter, to doubt." },
  ],
  questions: [
    { q: 'Combien de fois le mot « que » apparaît-il dans les six phrases du tableau ?', a: "Six fois, une par phrase. C'est le même mot à chaque ligne." },
    { q: 'Quelle phrase ne ressemble pas aux autres, et en quoi ?', a: "La dernière : « J'espère que tout se passe bien. » Le verbe garde sa forme ordinaire, alors que les cinq autres la changent." },
    { q: 'Qu’est-ce qui change d’une ligne à l’autre, si ce n’est pas le mot que ?', a: "L'expression écrite devant : il faut que, je veux que, je suis content que, bien que, je doute que, j'espère que." },
    { q: 'Pourquoi Laure dit-elle de rouler doucement ?', a: "Parce que la remorque est vieille. Elle le dit avec « bien que », et le verbe qui suit change de forme : soit." },
  ],
  audio: REC('rec-b1-15-tableau'), say: REFRAME, terms: ['cle', 'indicatif'],
};

/** NAME. The door, the ring of keys, the five families, and the sentence
 *  that says what b1.14 left here. */
const A1_CLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-cle',
  title: 'La porte, et le trousseau',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Regarde toujours ce qui est écrit AVANT le mot que.',
  audio: REC('rec-b1-15-cles'), say: REFRAME, terms: ['cle', 'volonte', 'doute'],
  cards: [
    {
      head: 'La porte ne change jamais', label: 'que',
      fr: 'Je veux que tu viennes. · J’espère que tu viens.',
      sub: '[zhuh veu kuh tü VYENN] · [zhehs-pehr kuh tü VYEHⁿ]',
      body: "Même mot, même place, même verbe. Une seule chose diffère : ce qui est écrit devant. EN: same word, same place, same verb; only what stands in front differs.",
    },
    {
      head: `Ce que ${FORMATION_REF} t’a déjà donné`, label: Cap(FORMATION_REF),
      fr: 'que tu viennes · que nous soyons',
      sub: '[kuh tü VYENN] · [kuh noo swa-YOHⁿ]',
      body: `« ${B114_REFRAME} » Tu sais déjà fabriquer la forme. Ici, tu apprends quand elle est demandée. EN: ${B114_REFRAME_EN}`,
    },
    {
      head: 'Cinq familles ouvrent', label: 'les clés',
      fr: 'la volonté · la nécessité · le sentiment · le doute · les liens',
      sub: '[la vo-lohⁿ-TAY] · [la nay-say-see-TAY] · [luh sahⁿ-tee-MAHⁿ]',
      body: "Je veux que, il faut que, je suis content que, je doute que, bien que. Chaque famille a sa raison, et les cinq mènent à la même forme. EN: five families, five reasons, one form.",
    },
    {
      head: 'Une clé sur deux n’ouvre pas', label: 'l’autre moitié',
      fr: 'j’espère que · je pense que · parce que · après que',
      sub: '[zhehs-pehr KUH] · [zhuh pahⁿss KUH] · [pars-KUH]',
      body: "Ces expressions portent le même « que » et ne changent rien. Savoir lesquelles, c'est la moitié de cette leçon. EN: these carry the same que and change nothing, and knowing which is half the lesson.",
    },
  ],
};

/** BUILD. Sort what the expression does, on the reading's own lines plus
 *  four seed rows. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Regarde devant le que',
  frSub: 'Deux piles, une seule question',
  groups: [
    grp('La forme a changé', [
      it(E(1200), 'je veux que, puis viennes'),
      it(E(1203), 'je doute que, puis viennes'),
      it('fr.b1.cuisine.091', 'je doute que, puis soit'),
      it('fr.b1.routines.089', 'bien que, puis sois'),
    ], chk('Dans ces quatre phrases, qu’est-ce qui a fait changer le verbe ?',
      ['le mot que', 'l’expression devant que', 'le sujet'], 1,
      "Le mot que est là dans les huit phrases de cette mission. EN: que is present in all eight sentences here.")),
    grp('La forme n’a pas bougé', [
      it(E(1205), 'j’espère que, puis viens'),
      it(E(1206), 'je sais que, puis viens'),
      it('fr.b1.maison.054', 'je pense que, puis est'),
      free('Nous rentrons parce qu’il pleut.', 'We are going home because it is raining.', 'parce que, puis pleut'),
    ], chk('Ces quatre expressions ont-elles un que devant le verbe ?',
      ['oui, toutes les quatre', 'non, aucune', 'seulement deux'], 0,
      "Le que ne suffit donc pas : c'est l'expression qui décide. EN: so que alone is not enough.")),
    grp('La même phrase, deux clés', [
      it(E(1207), 'je pense que : est'),
      it(E(1208), 'je ne pense pas que : soit'),
      it('fr.b1.cuisine.047', 'je ne pense pas que : soit'),
      it(E(1218), 'je ne suis pas sûr que : parte'),
    ], chk('Entre « je pense que » et « je ne pense pas que », qu’est-ce qui a bougé ?',
      ['le verbe', 'le sujet', 'la négation'], 2,
      "Deux petits mots, ne et pas, et la clé n'est plus la même. EN: two small words, and it is no longer the same key.")),
    ctl('Le réflexe', 'Tu vois un « que » dans une phrase. Que regardes-tu en premier ?',
      ['le mot juste devant que', 'la fin du verbe', 'le sujet de la phrase'], 0,
      "La clé est toujours devant la porte. EN: the key is always in front of the door."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'indicatif'],
};

const A1_CAS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-cas',
  layer: 'core',
  title: 'Là où la mauvaise clé s’entend',
  cases: [
    { situation: 'Un message à un groupe', fr: 'Il faut que quelqu’un s’occupe des boissons.', en: 'Somebody has to take care of the drinks.' },
    { situation: 'Une réponse à une invitation', fr: 'J’espère que tout le monde pourra venir.', en: 'I hope everybody can come.' },
    { situation: 'Une réunion au travail', fr: 'Je ne pense pas que le samedi convienne à tout le monde.', en: 'I do not think Saturday suits everybody.' },
    { situation: 'Un mot laissé sur la table', fr: 'Avant que la pluie arrive, rentre le linge.', en: 'Before the rain comes, bring the washing in.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'necessite'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La porte', 'Le mot « que » suffit-il à faire un subjonctif ?',
    ['oui, toujours', 'non, jamais tout seul', 'seulement à l’écrit'], 1,
    "J'espère que et parce que portent un que et ne changent rien. EN: j'espère que and parce que carry a que and change nothing."),
  ctl('La clé', 'Qu’est-ce qui décide de la forme du verbe après que ?',
    ['l’expression écrite devant', 'la longueur de la phrase', 'le sujet du verbe'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Ce qui vient après', 'Combien de familles ouvrent la porte, dans cette leçon ?',
    ['deux', 'dix', 'cinq'], 2,
    "La volonté, la nécessité, le sentiment, le doute et les liens. EN: will, necessity, feeling, doubt and the connectors."),
], ['cle', 'fait']);

const ACT1: ActDef = {
  act: {
    id: 'act1',
    title: 'La clé',
    opener: {
      line: "Tu sais fabriquer la forme et tu ne sais pas quand elle est demandée : ici tu apprends à regarder devant le mot que. EN: You can build the form and you do not know when it is called for: here you learn to look in front of the word que.",
      imageRef: 'lessons/subjonctif-declencheurs/act01.jpg',
    },
    sections: [],
    milestone: "Tu ne mets plus le subjonctif derrière n’importe quel que : tu regardes d’abord l’expression qui est devant. EN: You no longer put the subjunctive behind any que: you look at the expression in front first.",
    estScreens: 30,
    restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CLE, A1_REPERER, A1_CAS, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA VOLONTÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Somebody gives four orders in a row and never notices the form.
 *  No spaced « ? » or « ! » in a bubble. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Avant le match',
  frSub: 'Le vestiaire, samedi matin',
  setting: "Vestiaire d'un club de foot amateur, à Roubaix. Le coach fait le point dix minutes avant le coup d'envoi.",
  bubbles: [
    { from: 'narrator', fr: 'Le coach ferme la porte du vestiaire et compte les maillots.', en: 'The coach shuts the changing room door and counts the shirts.' },
    { from: 'coach', fr: src('fr.b1.sports-et-loisirs.056').fr, en: src('fr.b1.sports-et-loisirs.056').en, warn: 'vouloir que, puis soyons' },
    { from: 'coach', fr: src(E(1226)).fr, en: src(E(1226)).en, warn: 'la même clé, un autre verbe' },
    { from: 'user', fr: 'D’accord. Et pour les remplaçants, tu préfères quoi.', en: 'All right. And what would you prefer for the substitutes.' },
    { from: 'coach', fr: src(E(1229)).fr, en: src(E(1229)).en, warn: 'préférer que, puis prenions' },
    { from: 'coach', fr: 'Et le club exige que le formulaire soit signé avant la saison.', en: 'And the club insists the form is signed before the season.', warn: 'exiger que, puis soit' },
    { from: 'narrator', fr: 'Quatre phrases, quatre verbes différents, et la même chose à chaque fois derrière le mot que.', en: 'Four sentences, four different verbs, and the same thing each time after the word que.' },
  ],
  closing: { fr: 'Le coach ne pense pas à la grammaire. Il veut quelque chose, et la forme suit.', en: 'The coach is not thinking about grammar. He wants something, and the form follows.' },
  audio: REC('rec-b1-15-vestiaire'), say: REFRAME, terms: ['volonte', 'cle'],
};

/** NAME. The family, its reason, and the conditional that changes nothing. */
const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-volonte',
  title: 'Vouloir, et tout ce qui lui ressemble',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Cherche ce que ces six expressions ont en commun.',
  audio: REC('rec-b1-15-volonte'), say: REFRAME, terms: ['volonte', 'cle'],
  cards: [
    {
      head: 'Six clés, une famille', label: 'la volonté',
      fr: 'vouloir · souhaiter · désirer · exiger · demander · préférer',
      sub: '[voo-LWAR] · [sweh-TAY] · [day-zee-RAY] · [eg-zee-ZHAY]',
      body: "Toutes disent ce que quelqu'un veut voir arriver. Toutes ouvrent la porte. EN: they all say what somebody wants to happen, and they all open the door.",
    },
    {
      head: 'La raison', label: 'pas encore fait',
      fr: 'Je veux que tu me rappelles avant midi.',
      sub: '[zhuh veu kuh tü muh ra-PEL a-vahⁿ mee-DEE]',
      body: "Au moment où tu parles, l'appel n'existe pas. Tu ne racontes pas un fait, tu le demandes. EN: the thing does not exist yet; you are asking for it, not reporting it.",
    },
    {
      head: 'Le conditionnel ne change rien', label: 'plus doux',
      fr: 'je veux que · je voudrais que',
      sub: '[zhuh veu KUH] · [zhuh voo-dreh KUH]',
      body: "« Je voudrais que » est plus poli et ouvre exactement pareil. La clé change de ton, pas de fonction. EN: the conditional softens the tone and opens the door in exactly the same way.",
    },
    {
      head: 'Une personne, toujours', label: 'contre l’acte 3',
      fr: 'je veux · elle souhaite · le directeur exige',
      sub: '[zhuh VEU] · [ehl SWEHT] · [luh dee-rehk-tuhr eg-ZEEZH]',
      body: "Ici, quelqu'un veut. À l'acte suivant, personne ne veut : c'est la nécessité, et elle parle avec « il ». EN: here somebody wants; in act 3 nobody does, and necessity speaks with il.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-volonte',
  title: 'Six clés de volonté',
  frSub: 'Touche une ligne',
  cols: ['Clé', 'Ton', 'Forme après que'],
  rows: [
    { cells: ['vouloir que', 'direct', 'subjonctif'],
      say: 'Je veux que tu me rappelles avant midi.',
      detail: { title: 'vouloir que', body: "La clé la plus courante, et la plus directe. Entre adultes, on l'adoucit souvent au conditionnel. EN: the commonest and bluntest key.", say: 'Nous voulons que la réunion commence à l’heure.' } },
    { cells: ['vouloir, au conditionnel', 'poli', 'subjonctif'],
      say: 'Je voudrais que nous fixions une date cette semaine.',
      detail: { title: 'je voudrais que', body: "Même clé, même porte, ton plus doux. Le conditionnel ne touche jamais à ce qui suit que. EN: same key, softer tone, no change after que.", say: 'Je voudrais que tu choisisses un dessert pour ce soir.' } },
    { cells: ['souhaiter que', 'soigné', 'subjonctif'],
      say: 'Ma sœur souhaite que nous soyons là pour son anniversaire.',
      detail: { title: 'souhaiter que', body: "Un peu plus écrit que vouloir, et très courant dans une lettre ou un message de travail. EN: slightly more formal than vouloir.", say: 'Je souhaite que ce voyage te fasse du bien.' } },
    { cells: ['exiger que', 'fort', 'subjonctif'],
      say: 'Le propriétaire exige que le loyer soit payé le premier du mois.',
      detail: { title: 'exiger que', body: "Une demande qui ne se discute pas. On la lit surtout dans un règlement ou un contrat. EN: a demand that is not open to discussion.", say: 'Le directeur exige que chaque employé signe le règlement intérieur.' } },
    { cells: ['demander que', 'neutre', 'subjonctif'],
      say: 'Elle demande que tout le monde éteigne son téléphone.',
      detail: { title: 'demander que', body: "Attention : demander à quelqu'un DE faire est plus fréquent à l'oral. Les deux sont justes. EN: demander à quelqu'un de faire is commoner in speech; both are correct.", say: 'Je demande que chacun réponde avant vendredi.' } },
    { cells: ['préférer que', 'neutre', 'subjonctif'],
      say: 'Je préfère que nous prenions le train plutôt que la voiture.',
      detail: { title: 'préférer que', body: "Tu choisis entre deux choses, et aucune des deux n'est encore faite. EN: you are choosing between two things, neither of them done yet.", say: 'Mes parents préfèrent que je rentre avant minuit.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['volonte'],
};

/** BUILD. The family against a family that looks like it and is not. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce que quelqu’un veut',
  frSub: 'Trois groupes, trois questions',
  groups: [
    grp('Quelqu’un veut quelque chose', [
      it(E(1226), 'je veux que'),
      it('fr.b1.cuisine.059', 'je voudrais que'),
      it('fr.b1.dictee.032', 'souhaiter que'),
      it('fr.b1.famille.076', 'aimerait que'),
    ], chk('Dans ces quatre phrases, la chose demandée est-elle déjà arrivée ?',
      ['oui, toutes', 'non, aucune', 'une seule'], 1,
      "On demande ce qui n'est pas encore fait. EN: you ask for what has not happened yet.")),
    grp('Une demande qui ne se discute pas', [
      it(E(1228), 'exiger que, dans un bail'),
      it('fr.b1.metiers.060', 'exiger que, au travail'),
      it(E(1230), 'demander que, en réunion'),
      it('fr.b1.metiers.052', 'souhaiter que, au travail'),
    ], chk('Qu’est-ce qui change entre exiger que et souhaiter que ?',
      ['le ton, pas la forme', 'la forme du verbe', 'le sujet de la phrase'], 0,
      "Les deux ouvrent la porte de la même façon. EN: both open the door in the same way.")),
    grp('La même personne, deux verbes', [
      it(E(1233), 'le médecin veut que'),
      it(E(1229), 'je préfère que'),
      it(E(1239), 'mes parents préfèrent que'),
      it(E(1231), 'j’aimerais que'),
    ], chk('« J’aimerais que » est le conditionnel de aimer. Qu’est-ce que ça change après que ?',
      ['rien du tout', 'le verbe passe au conditionnel', 'le que disparaît'], 0,
      "Le conditionnel du porteur ne touche jamais à ce qui suit. EN: the carrier's conditional never touches what follows.")),
    ctl('Le test', 'Tu hésites devant une phrase avec vouloir. Que te demandes-tu ?',
      ['si le verbe est régulier', 'si la chose est déjà faite', 'si la phrase est longue'], 1,
      "Si elle n'est pas faite, quelqu'un la veut, et la porte est ouverte. EN: if it is not done, somebody wants it, and the door is open."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['volonte', 'fait'],
};

/** CHOOSE, by ear. The lines are hidden, so the learner has to hear which
 *  expression arrived. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quelle clé entends-tu',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1226)), ln(E(1227)), ln('fr.b1.sports-et-loisirs.056'), ln(E(1229)),
    ln('fr.b1.cuisine.059'), ln(E(1233)), ln('fr.b1.metiers.060'), ln(E(1239)),
  ],
  questions: [
    { q: 'Première phrase : qui veut quelque chose ?', opts: ['moi', 'toi', 'personne'], correct: 0,
      why: "« Je veux que tu me rappelles » : c'est moi qui demande. EN: je veux, so it is me asking." },
    { q: 'Troisième phrase : la clé est-elle une personne ou un « il » vide ?',
      opts: ['un il vide', 'une personne, le coach', 'on ne sait pas'], correct: 1,
      why: "Le coach veut : quelqu'un veut quelque chose. EN: the coach wants, so somebody is doing the wanting." },
    { q: 'Quatrième phrase : le train est-il déjà réservé ?',
      opts: ['non, c’est un choix à faire', 'oui'], correct: 0,
      why: "On préfère entre deux possibilités, et aucune n'est faite. EN: a choice between two options, neither taken." },
    { q: 'Septième phrase : exiger est-il plus fort ou plus doux que souhaiter ?',
      opts: ['plus doux', 'plus fort'], correct: 1,
      why: "Exiger ne se discute pas ; souhaiter, si. EN: exiger is not open to discussion." },
    { q: 'Sur les huit phrases, combien ouvrent la porte ?',
      opts: ['quatre', 'aucune', 'huit'], correct: 2,
      why: "Les huit sont des verbes de volonté. EN: all eight are verbs of wanting." },
  ],
  audio: REC('rec-b1-15-volonte-ecoute'), say: REFRAME, terms: ['volonte'],
};

/** TRAP. Four things an English speaker reaches for instead. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de volonté',
  frSub: 'Chacune est une bonne idée ailleurs',
  errors: [
    { wrong: 'Je veux que tu viens demain.',
      right: 'Je veux que tu viennes demain.',
      why: "Normal : « tu viens » est la forme que tu dis toute la journée. Vouloir que ouvre la porte, donc elle change. EN: tu viens is the form you say all day, and vouloir que changes it." },
    { wrong: 'Le directeur exige que chaque employé signera le règlement.',
      right: 'Le directeur exige que chaque employé signe le règlement.',
      why: "Le futur paraît logique, parce que la signature n'a pas eu lieu. Le français met le subjonctif à cette place. EN: the future feels logical and French puts the subjunctive there." },
    { wrong: 'Je souhaite que tu as un bon voyage.',
      right: 'Je souhaite que tu aies un bon voyage.',
      why: "« Tu as » est juste partout ailleurs. Derrière souhaiter que, avoir donne aies. EN: tu as is right everywhere else; after souhaiter que, avoir gives aies." },
    { wrong: 'Elle demande que tout le monde éteint son téléphone.',
      right: 'Elle demande que tout le monde éteigne son téléphone.',
      why: "« Tout le monde éteint » sonne comme une observation. Ici c'est une demande, pas un constat. EN: it sounds like an observation; here it is a request, not a report." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['volonte', 'indicatif'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La famille', 'Vouloir, souhaiter, exiger, préférer : que font-ils au verbe qui suit que ?',
    ['rien', 'ils le mettent au subjonctif', 'ils le mettent au futur'], 1,
    "Six clés, une seule porte. EN: six keys, one door."),
  ctl('La raison', 'Pourquoi cette famille ouvre-t-elle la porte ?',
    ['la chose n’est pas encore arrivée', 'le verbe est irrégulier', 'la phrase est longue'], 0,
    "Tu demandes un fait, tu ne le racontes pas. EN: you are asking for a fact, not reporting one."),
  ctl('Le conditionnel', 'Je voudrais que, j’aimerais que : la porte change-t-elle ?',
    ['oui, elle se ferme', 'non, seul le ton change'], 1,
    "Le conditionnel adoucit la demande et rien d'autre. EN: the conditional softens the request and nothing else."),
], ['volonte', 'cle']);

const ACT2: ActDef = {
  act: {
    id: 'act2',
    title: 'La volonté',
    opener: {
      line: "Quand quelqu’un veut quelque chose, la chose n’est pas encore là : ici tu apprends la famille de clés qui dit ça. EN: When somebody wants something, the thing is not there yet: here you learn the family of keys that says so.",
      imageRef: 'lessons/subjonctif-declencheurs/act02.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les six verbes de volonté et tu sais pourquoi ils ouvrent la porte. EN: You can recognise the six verbs of wanting and you know why they open the door.",
    estScreens: 26,
    restPoints: ['a2-table'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA NÉCESSITÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Eight lines of a hall rulebook, all of them starting with il. */
const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le règlement de la salle des fêtes',
  frSub: 'Lis, et regarde le premier mot de chaque ligne',
  text: READING_NECESSITE,
  glossary: [
    { word: 'la salle des fêtes', en: 'the village hall', note: "La salle qu'une commune loue pour les fêtes et les réunions." },
    { word: 'le registre', en: 'the signing-in book', note: "Le cahier où l'on note qui entre et à quelle heure." },
    { word: 'le gardien', en: 'the caretaker', note: "La personne qui ouvre et ferme la salle. EN: the person who opens and locks up." },
  ],
  questions: [
    { q: 'Par quel mot commence chaque ligne du règlement ?', a: "Par « il » : il est nécessaire, il est important, il faut, il vaut mieux, il est temps." },
    { q: 'Ce « il » désigne-t-il quelqu’un ?', a: "Non, personne. Ce n'est ni le gardien ni la mairie. C'est la nécessité elle-même." },
    { q: 'Quels verbes suivent le mot que dans le texte ?', a: "signe, restent, soit, préveniez, remplace. Tous les cinq sont au subjonctif." },
    { q: 'Qu’est-ce que Karim remarque en lisant deux fois ?', a: "Que chaque ligne a la même forme : une expression avec il, puis que, puis un verbe qui change." },
  ],
  audio: REC('rec-b1-15-reglement'), say: REFRAME, terms: ['necessite', 'cle'],
};

/** NAME. The family, and what separates it from act 2. */
const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-volonte',
  title: 'Quand personne ne veut, et qu’il faut quand même',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Compare avec la famille de l’acte précédent.',
  audio: REC('rec-b1-15-necessite'), say: REFRAME, terms: ['necessite', 'volonte'],
  cards: [
    {
      head: 'Un il qui ne désigne personne', label: 'la nécessité',
      fr: 'Il faut que je parte maintenant.',
      sub: '[eel foh kuh zhuh PART mehⁿt-NAHⁿ]',
      body: "Ce « il » n'est ni un homme ni une chose. C'est la place vide que le français met devant une nécessité. EN: this il is neither a man nor a thing: it is the empty slot French puts in front of a necessity.",
    },
    {
      head: 'Six clés impersonnelles', label: 'la famille',
      fr: 'il faut · il est nécessaire · il est important · il vaut mieux',
      sub: '[eel FOH] · [ee-leh nay-say-SEHR] · [eel voh MYEU]',
      body: "Ajoute il est essentiel que et il est temps que. Toutes commencent par il, et toutes ouvrent la porte. EN: add il est essentiel que and il est temps que; all of them open the door.",
    },
    {
      head: 'De la plus forte à la plus douce', label: 'la force',
      fr: 'il faut que · il vaut mieux que',
      sub: '[eel foh KUH] · [eel voh myeu KUH]',
      body: "« Il faut » ne laisse pas le choix. « Il vaut mieux » est un conseil. La forme après que est la même. EN: il faut leaves no choice, il vaut mieux is advice, and the form after que is identical.",
    },
    {
      head: 'Au conditionnel aussi', label: Cap(POLI_REF),
      fr: 'il faudrait que nous parlions',
      sub: '[eel foh-dreh kuh noo par-LYOHⁿ]',
      body: `« Il faudrait » adoucit la nécessité, comme ${POLI_REF} l'a montré pour les demandes. Après que, rien ne bouge. EN: il faudrait softens the necessity and nothing after que changes.`,
    },
  ],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq nécessités, cinq verbes',
  frSub: 'La clé change de force, jamais de fonction',
  examples: [
    ex(E(1246), 'il est nécessaire que : un formulaire, une signature'),
    ex(E(1247), 'il est temps que : la décision a trop attendu'),
    ex(E(1248), 'il vaut mieux que : un conseil, pas un ordre'),
    ex(E(1249), 'il est essentiel que : le dossier ne peut pas attendre'),
    ex('fr.b1.cuisine.065', 'il vaut mieux que : un conseil de restaurant'),
    ex(E(1253), 'il ne faut pas que : la nécessité à la forme négative'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['necessite'],
};

/** BUILD. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Il faut, et ce qui suit',
  frSub: 'Trois groupes',
  groups: [
    grp('La nécessité pure', [
      it(E(1219), 'il faut que'),
      it('fr.b1.routines.079', 'il faut que, à la première personne'),
      it('fr.b1.cuisine.046', 'il faut que, à la première personne du pluriel'),
      it(E(1250), 'il faut que, puis un deuxième que'),
    ], chk('Qui décide, dans ces quatre phrases ?',
      ['celui qui parle', 'la personne à qui on parle', 'personne, c’est la situation'], 2,
      "Le « il » de il faut ne désigne personne. EN: the il of il faut stands for nobody.")),
    grp('La même chose, plus ou moins fort', [
      it('fr.b1.sports-et-loisirs.057', 'il est important que'),
      it('fr.b1.heure-et-date.070', 'il est essentiel que'),
      it(E(1248), 'il vaut mieux que'),
      it(E(1245), 'il est temps que'),
    ], chk('Entre il est essentiel que et il vaut mieux que, qu’est-ce qui change ?',
      ['la forme du verbe', 'les deux', 'la force du conseil'], 2,
      "La force change, la porte reste ouverte de la même façon. EN: the strength changes, the door stays equally open.")),
    grp('Deux familles côte à côte', [
      it(E(1200), 'quelqu’un veut'),
      it(E(1201), 'personne ne veut, il faut'),
      it('fr.b1.dictee.040', 'il est important que'),
      it('fr.b1.metiers.052', 'le patron souhaite que'),
    ], chk('« Je veux que tu viennes » et « Il faut que tu viennes » : qu’est-ce qui diffère ?',
      ['la forme après que', 'qui demande la chose', 'le sens du verbe venir'], 1,
      "Dans l'une, quelqu'un veut. Dans l'autre, la situation l'exige. EN: in one somebody wants it, in the other the situation requires it.")),
    ctl('Le réflexe', 'Une phrase commence par « Il est ». Qu’est-ce que ça annonce souvent ?',
      ['une nécessité impersonnelle', 'un sujet réel', 'une question'], 0,
      "Il est important, il est temps, il est essentiel : la famille entière. EN: il est important, il est temps, il est essentiel: the whole family."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['necessite', 'fait'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que la salle exige',
  frSub: 'Quatre phrases',
  itemIds: dicteeFor(3),
  audio: AUDIO, say: REFRAME, terms: ['necessite'],
};

/** CHOOSE. The learner picks the form because of the expression, not the verb. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La même phrase, deux clés',
  frSub: 'Choisis en regardant devant',
  groups: [
    grp('Ce qui doit arriver', [
      it(E(1251), 'il est important que, puis dormes'),
      it(E(1252), 'il est utile que, puis sache'),
      it(E(1257), 'il faudrait que, puis parlions'),
      it(E(1256), 'il est important que, puis arriviez'),
    ], chk('Le conditionnel « il faudrait que » ouvre-t-il la porte comme « il faut que » ?',
      ['non, il la ferme', 'oui, exactement pareil'], 1,
      "Le porteur devient plus doux, la forme après que ne change pas. EN: the carrier softens and the form after que does not change.")),
    grp('Ce que quelqu’un veut', [
      it(E(1232), 'nous voulons que'),
      it(E(1234), 'je souhaite que'),
      it(E(1235), 'il désire que'),
      it('fr.b1.famille.076', 'aimerait que'),
    ], chk('Ces quatre clés commencent-elles par « il est » ?',
      ['oui, toutes', 'non, elles ont un vrai sujet', 'deux sur quatre'], 1,
      "Nous, je, il, ma grand-mère : ce sont des personnes. EN: nous, je, il, my grandmother: these are people.")),
    ctl('Le tri', 'Tu lis « Il est temps que nous partions ». Quelle famille est-ce ?',
      ['la volonté', 'le sentiment', 'la nécessité'], 2,
      "Personne ne veut partir : le moment l'exige. EN: nobody wants to leave; the moment requires it."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['necessite', 'volonte'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La forme de la famille', 'Comment commencent presque toutes les clés de nécessité ?',
    ['par un nom', 'par je', 'par il'], 2,
    "Il faut, il est important, il vaut mieux, il est temps. EN: il faut, il est important, il vaut mieux, il est temps."),
  ctl('Le il', 'Ce « il » désigne-t-il une personne ?',
    ['non, personne', 'oui, celui qui parle'], 0,
    "C'est une place vide devant la nécessité. EN: it is an empty slot in front of the necessity."),
  ctl('La force', 'Il vaut mieux que et il est essentiel que ouvrent-ils la même porte ?',
    ['non, seulement le second', 'oui, les deux', 'non, seulement le premier'], 1,
    "Le ton diffère, la forme est la même. EN: the tone differs, the form is the same."),
], ['necessite', 'cle']);

const ACT3: ActDef = {
  act: {
    id: 'act3',
    title: 'La nécessité',
    opener: {
      line: "Parfois personne ne veut rien, et la chose doit arriver quand même : ici tu apprends la famille qui parle avec « il ». EN: Sometimes nobody wants anything and the thing still has to happen: here you learn the family that speaks with il.",
      imageRef: 'lessons/subjonctif-declencheurs/act03.jpg',
    },
    sections: [],
    milestone: "Tu places il faut que, il est important que et il vaut mieux que sans hésiter, et tu sais que leur « il » ne désigne personne. EN: You can place il faut que, il est important que and il vaut mieux que, and you know their il stands for nobody.",
    estScreens: 27,
    restPoints: ['a3-dictee'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_EXEMPLES, A3_CONSTRUIRE, A3_DICTEE, A3_CHOISIR, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE SENTIMENT
 *
 *  NO REUSED ROWS. The seed carries not one sentence behind a feeling
 *  trigger (corpus §F), so every line in this act is authored.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The fact is certain, everybody knows it, and the form changes. */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La veille du départ',
  frSub: 'Une cuisine, un sac dans l’entrée',
  setting: "Chez les Diallo, à Lille. Awa part travailler à Genève lundi. Sa mère, son frère et elle finissent le dîner.",
  bubbles: [
    { from: 'narrator', fr: 'Le sac est déjà dans l’entrée. Personne ne fait semblant de ne pas le voir.', en: 'The bag is already in the hall. Nobody pretends not to see it.' },
    { from: 'coach', fr: 'Je suis content que tu prennes ce poste. Vraiment.', en: 'I am glad you are taking this job. Truly.', warn: 'content que, puis prennes' },
    { from: 'user', fr: 'Merci. Je suis désolée que tu doives attendre si longtemps pour la chambre.', en: 'Thank you. I am sorry you have to wait so long for the room.', warn: 'désolé que, puis doives' },
    { from: 'coach', fr: 'Nous sommes tristes que tu partes si vite, c’est tout.', en: 'We are sad that you are leaving so soon, that is all.', warn: 'triste que, puis partes' },
    { from: 'narrator', fr: 'Le départ est sûr. Le billet est acheté. Personne ne doute de rien.', en: 'The departure is certain. The ticket is bought. Nobody doubts anything.' },
    { from: 'coach', fr: 'J’ai peur que le train soit en retard lundi matin.', en: 'I am afraid the train will be late on Monday morning.', warn: 'avoir peur que, puis soit' },
    { from: 'user', fr: 'Il part à six heures. Il n’est jamais en retard à six heures.', en: 'It leaves at six. It is never late at six.' },
  ],
  closing: { fr: 'Rien n’est incertain dans cette cuisine. Et pourtant, chaque phrase change de forme.', en: 'Nothing is uncertain in this kitchen. And every sentence still changes its form.' },
  audio: REC('rec-b1-15-depart'), say: REFRAME, terms: ['sentiment', 'fait'],
};

/** NAME. The family, and the objection it has to answer on the first card. */
const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sentiment',
  title: 'Un fait sûr, et la forme change',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. La première répond à l’objection que tu as en tête.',
  audio: REC('rec-b1-15-sentiment'), say: REFRAME, terms: ['sentiment', 'cle'],
  cards: [
    {
      head: 'Tu le sais, et ça change quand même', label: 'l’objection',
      fr: 'Je suis content que tu sois là.',
      sub: '[zhuh swee kohⁿ-TAHⁿ kuh tü swa LA]',
      body: "Tu es là. Personne n'en doute. La phrase ne dit pas si c'est vrai : elle dit ce que ça fait. EN: the sentence does not say whether it is true, it says what it does to the speaker.",
    },
    {
      head: 'Sept clés de sentiment', label: 'la famille',
      fr: 'content · triste · surpris · désolé · fier · ravi · peur',
      sub: '[kohⁿ-TAHⁿ] · [TREEST] · [sür-PREE] · [day-zo-LAY]',
      body: "Ajoute regretter que et c'est dommage que. Toutes ouvrent la porte, pour la même raison. EN: add regretter que and c'est dommage que; all of them open the door for the same reason.",
    },
    {
      head: 'Ce n’est pas le doute', label: 'contre l’acte 5',
      fr: 'Je suis content que tu viennes. · Je doute que tu viennes.',
      sub: '[zhuh swee kohⁿ-tahⁿ kuh tü VYENN] · [zhuh doot kuh tü VYENN]',
      body: "Même forme, raisons opposées. Dans la première tu viens, dans la seconde peut-être pas. EN: same form, opposite reasons: in the first you are coming, in the second perhaps not.",
    },
    {
      head: 'Le ne qui ne dit pas non', label: 'avoir peur que',
      fr: 'J’ai peur qu’il ne soit en retard.',
      sub: '[zhay puhr keel nuh swa ahⁿ ruh-TAR]',
      body: "Après avoir peur que, tu verras parfois un « ne » seul. Il ne nie rien, et tu peux l'ignorer. EN: after avoir peur que you will sometimes see a lone ne; it negates nothing.",
    },
  ],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Six sentiments, six faits sûrs',
  frSub: 'Dans chaque ligne, la chose est vraie',
  examples: [
    ex(E(1265), 'il a un logement : c’est fait, et ça fait plaisir'),
    ex(E(1266), 'vous partez : le billet est pris'),
    ex(E(1268), 'tu attends : l’attente est réelle'),
    ex(E(1271), 'le musée ferme à cinq heures : c’est l’horaire'),
    ex(E(1272), 'personne ne répond : c’est ce qui se passe'),
    ex(E(1273), 'sa fille étudie ici : elle y est inscrite'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sentiment'],
};

/** BUILD. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce que le fait te fait',
  frSub: 'Trois groupes',
  groups: [
    grp('La joie et la fierté', [
      it(E(1265), 'content que'),
      it(E(1274), 'ravi que'),
      it(E(1273), 'fière que'),
      it(E(1277), 'content que, avec prendre'),
    ], chk('Dans ces quatre phrases, la chose est-elle vraie ?',
      ['oui, chaque fois', 'non, jamais', 'on ne peut pas savoir'], 0,
      "Le sentiment porte sur un fait réel. EN: the feeling is about something real.")),
    grp('La peine et le regret', [
      it(E(1266), 'triste que'),
      it(E(1268), 'désolé que'),
      it(E(1270), 'regretter que'),
      it(E(1271), 'c’est dommage que'),
    ], chk('« C’est dommage que » commence par c’est. Est-ce une clé de sentiment ?',
      ['non, c’est une nécessité', 'oui, c’est un regret'], 1,
      "C'est dommage dit une peine, pas une obligation. EN: c'est dommage states a regret, not an obligation.")),
    grp('La surprise et la crainte', [
      it(E(1267), 'surprise que'),
      it(E(1272), 'ça m’étonne que'),
      it(E(1269), 'avoir peur que'),
      it(E(1214), 'avoir peur que, sur la météo'),
    ], chk('« J’ai peur que le train soit en retard » : le retard est-il certain ?',
      ['non, c’est une crainte', 'oui, il est annoncé'], 0,
      "Tu crains, tu ne constates pas. Et la forme change quand même. EN: you fear it, you are not reporting it, and the form changes anyway.")),
    ctl('Le test', 'Tu vois « je suis surpris que ». Quelle famille ?',
      ['la nécessité', 'le sentiment', 'la volonté'], 1,
      "Surpris dit ce que le fait te fait. EN: surpris says what the fact does to you."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sentiment', 'fait'],
};

/** TRAP. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de sentiment',
  frSub: 'Chacune vient d’un bon raisonnement',
  errors: [
    { wrong: 'Je suis content que tu es là.',
      right: 'Je suis content que tu sois là.',
      why: "Bon raisonnement : tu ES là, c'est un fait. Mais la clé est un sentiment, et elle ouvre la porte. EN: the reasoning is sound, and the key is a feeling, so it opens the door." },
    { wrong: 'Nous sommes tristes que vous partez si vite.',
      right: 'Nous sommes tristes que vous partiez si vite.',
      why: "« Vous partez » est la forme de tous les jours. Après triste que, elle prend un i. EN: vous partez is the everyday form; after triste que it takes an i." },
    { wrong: 'C’est dommage que le musée ferme pas plus tard.',
      right: 'C’est dommage que le musée ne ferme pas plus tard.',
      why: "À l'oral on saute le « ne » partout. Dans une phrase écrite comme celle-ci, garde-le. EN: speech drops the ne everywhere; keep it in a written sentence like this one." },
    { wrong: 'J’ai peur qu’il est en retard.',
      right: 'J’ai peur qu’il soit en retard.',
      why: "Tu penses à un fait probable, donc tu prends la forme des faits. Avoir peur que ne la laisse pas passer. EN: you are thinking of a likely fact and avoir peur que does not allow that form." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['sentiment', 'indicatif'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quel sentiment, et sur quel fait',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1265)), ln(E(1266)), ln(E(1267)), ln(E(1268)),
    ln(E(1269)), ln(E(1270)), ln(E(1271)), ln(E(1274)),
  ],
  questions: [
    { q: 'Deuxième phrase : le départ est-il décidé ?',
      opts: ['oui, il est décidé', 'non, c’est une hypothèse'], correct: 0,
      why: "On est triste parce qu'il aura lieu. EN: the sadness is because it will happen." },
    { q: 'Cinquième phrase : quel sentiment entends-tu ?',
      opts: ['la joie', 'la crainte', 'la surprise'], correct: 1,
      why: "« J'ai peur que » : la crainte. EN: j'ai peur que, so fear." },
    { q: 'Sixième phrase : la personne peut-elle rester plus longtemps ?',
      opts: ['oui', 'non, et elle le regrette'], correct: 1,
      why: "Regretter que dit qu'on voudrait, et qu'on ne peut pas. EN: regretter que says you would like to and cannot." },
    { q: 'Sur les huit phrases, combien décrivent une chose incertaine ?',
      opts: ['aucune ou presque', 'toutes les huit', 'la moitié'], correct: 0,
      why: "Le sentiment porte sur du sûr, et ouvre quand même. EN: feeling is about the certain, and opens the door anyway." },
    { q: 'Qu’est-ce qui ouvre la porte dans ces huit phrases ?',
      opts: ['le doute', 'le mot que', 'le sentiment'], correct: 2,
      why: `${REFRAME} EN: ${REFRAME_EN}` },
  ],
  audio: REC('rec-b1-15-sentiment-ecoute'), say: REFRAME, terms: ['sentiment'],
};

/** CHOOSE. Three families side by side, and the learner names the reason. */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Trois familles, une seule forme',
  frSub: 'Nomme la raison, pas la forme',
  groups: [
    grp('Trois phrases, trois raisons', [
      it(E(1200), 'quelqu’un veut'),
      it(E(1201), 'la situation exige'),
      it(E(1202), 'quelqu’un est content'),
      it(E(1204), 'un lien, bien que'),
    ], chk('Ces quatre phrases ont le même verbe après que. Pourquoi ?',
      ['par hasard', 'les quatre clés ouvrent la porte', 'elles parlent du même jour'], 1,
      "Quatre raisons différentes, une seule conséquence. EN: four different reasons, one consequence.")),
    grp('Le sentiment seul', [
      it(E(1259), 'la clé triste'),
      it(E(1261), 'la clé désolé'),
      it(E(1262), 'la clé peur'),
      it(E(1264), 'la clé dommage'),
    ], chk('Que faut-il ajouter après ces quatre clés pour faire une phrase ?',
      ['un infinitif', 'rien du tout', 'un sujet et un verbe conjugué'], 2,
      "Que appelle une phrase entière. EN: que calls for a whole clause.")),
    ctl('La raison', 'Pourquoi le sentiment ouvre-t-il la porte, alors que le fait est sûr ?',
      ['parce que le fait est douteux', 'parce que la phrase réagit au fait'], 1,
      "Tu ne donnes pas l'information : tu dis ce qu'elle te fait. EN: you are not giving the information, you are saying what it does to you."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sentiment', 'volonte'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le fait', 'Avec un sentiment, la chose derrière que est-elle douteuse ?',
    ['non, elle est le plus souvent sûre', 'oui, toujours', 'seulement avec peur'], 0,
    "Je suis content que tu sois là : tu es là. EN: je suis content que tu sois là means you are here."),
  ctl('La famille', 'Content, triste, désolé, fier, ravi : que font-ils au verbe ?',
    ['ils le mettent au subjonctif', 'ils ne changent rien'], 0,
    "Sept clés, une porte. EN: seven keys, one door."),
  ctl('Le ne', 'Après avoir peur que, un « ne » seul veut-il dire non ?',
    ['oui', 'non, tu peux l’ignorer', 'seulement à l’écrit'], 1,
    "Il ne nie rien du tout. EN: it negates nothing at all."),
], ['sentiment', 'cle']);

const ACT4: ActDef = {
  act: {
    id: 'act4',
    title: 'Le sentiment',
    opener: {
      line: "Tu sais que c’est vrai, et la forme change quand même : ici tu apprends pourquoi le sentiment ouvre la porte. EN: You know it is true and the form changes anyway: here you learn why a feeling opens the door.",
      imageRef: 'lessons/subjonctif-declencheurs/act04.jpg',
    },
    sections: [],
    milestone: "Tu utilises les clés de sentiment sans te demander si la chose est sûre, parce que tu sais que la question ne se pose pas. EN: You can use the feeling keys without asking whether the thing is certain, because you know that is not the question.",
    estScreens: 28,
    restPoints: ['a4-erreurs'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_EXEMPLES, A4_CONSTRUIRE, A4_ERREURS, A4_ECOUTE, A4_CHOISIR, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE DOUTE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Two people doubt the same waiter, in four different ways. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'La commande qui ne vient pas',
  frSub: 'Une terrasse, vingt minutes plus tard',
  setting: "Terrasse d'un café de la Croix-Rousse, à Lyon. Deux amies attendent deux salades depuis vingt minutes.",
  bubbles: [
    { from: 'narrator', fr: 'Le serveur passe pour la troisième fois sans regarder la table.', en: 'The waiter walks past for the third time without looking at the table.' },
    { from: 'coach', fr: src('fr.b1.cafe.069').fr, en: src('fr.b1.cafe.069').en, warn: 'je doute que, puis se souvienne' },
    { from: 'user', fr: src('fr.b1.cafe.075').fr, en: src('fr.b1.cafe.075').en, warn: 'il est possible que, puis ait' },
    { from: 'coach', fr: 'Il se peut que la cuisine soit débordée, aussi.', en: 'It may also be that the kitchen is swamped.', warn: 'il se peut que, puis soit' },
    { from: 'user', fr: 'Il est probable que la cuisine est débordée, oui.', en: 'The kitchen probably is swamped, yes.', warn: 'il est probable que, et rien ne change' },
    { from: 'coach', fr: 'Tu viens de dire la même chose de deux façons, et le verbe n’est pas pareil.', en: 'You have just said the same thing twice, and the verb is not the same.' },
    { from: 'narrator', fr: 'Une salade arrive. La deuxième met encore dix minutes.', en: 'One salad arrives. The second one takes another ten minutes.' },
  ],
  closing: { fr: 'Possible et probable disent presque la même chose, et ne demandent pas la même forme.', en: 'Possible and probable say almost the same thing and do not call for the same form.' },
  audio: REC('rec-b1-15-terrasse'), say: REFRAME, terms: ['doute', 'fait'],
};

/** NAME. */
const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sentiment',
  title: 'Quand tu refuses de donner le fait',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. La dernière est celle que tout le monde rate.',
  audio: REC('rec-b1-15-doute'), say: REFRAME, terms: ['doute', 'cle'],
  cards: [
    {
      head: 'Tu ne dis pas que c’est vrai', label: 'le doute',
      fr: 'Je doute que ce train parte à l’heure.',
      sub: '[zhuh DOOT kuh suh trehⁿ PART a LUHR]',
      body: "Tu ne donnes pas l'information : tu dis que tu n'y crois pas. La porte s'ouvre. EN: you are refusing to give the information as a fact, and the door opens.",
    },
    {
      head: 'Cinq clés de doute', label: 'la famille',
      fr: 'douter · il est possible · il se peut · il n’est pas sûr',
      sub: '[doo-TAY] · [ee-leh po-SEEBL] · [eel suh PEU]',
      body: "Ajoute il semble que. Toutes laissent la chose en suspens, et toutes ouvrent la porte. EN: add il semble que; all of them leave the thing hanging, and all of them open the door.",
    },
    {
      head: 'L’opposé du sentiment', label: 'contre l’acte 4',
      fr: 'Je suis content que tu viennes. · Je doute que tu viennes.',
      sub: '[kohⁿ-tahⁿ kuh tü VYENN] · [doot kuh tü VYENN]',
      body: "Dans la première, tu viens. Dans la seconde, peut-être pas. Même forme, raisons opposées. EN: same form, opposite reasons.",
    },
    {
      head: 'Possible ouvre, probable non', label: 'le piège',
      fr: 'Il est possible qu’il soit là. · Il est probable qu’il est là.',
      sub: '[po-seebl keel swa LA] · [pro-babl keel eh LA]',
      body: "Probable veut dire presque sûr, donc le français le traite comme un fait. EN: probable means almost certain, so French treats it as a fact.",
    },
  ],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-sentiment',
  title: 'Six clés, et une qui n’ouvre pas',
  frSub: 'Touche une ligne',
  cols: ['Clé', 'Ouvre ?', 'Forme'],
  rows: [
    { cells: ['je doute que', 'oui', 'subjonctif'],
      say: 'Je doute que cette clé ouvre la bonne porte.',
      detail: { title: 'douter que', body: "Tu dis que tu n'y crois pas. C'est la clé la plus nette de la famille. EN: you say you do not believe it, and it is the clearest key of the family.", say: 'Nous doutons que la réunion serve à quelque chose.' } },
    { cells: ['il est possible que', 'oui', 'subjonctif'],
      say: 'Il est possible que le colis arrive demain.',
      detail: { title: 'il est possible que', body: "La chose peut arriver ou non, et tu ne choisis pas. EN: the thing may or may not happen, and you are not choosing.", say: 'Il est possible que la salle soit libre jeudi.' } },
    { cells: ['il se peut que', 'oui', 'subjonctif'],
      say: 'Il se peut que la salle soit déjà réservée.',
      detail: { title: 'il se peut que', body: "La même chose que il est possible que, un peu plus parlé. EN: the same as il est possible que, a little more spoken.", say: 'Il se peut qu’il pleuve pendant tout le week-end.' } },
    { cells: ['il n’est pas sûr que', 'oui', 'subjonctif'],
      say: 'Il n’est pas certain que le vol parte à l’heure.',
      detail: { title: 'il n’est pas sûr que', body: "Une certitude niée devient un doute. C'est déjà la bascule de l'acte 6. EN: a denied certainty becomes a doubt, which is act 6's swing.", say: 'Il n’est pas sûr que le bureau ouvre lundi.' } },
    { cells: ['il semble que', 'oui', 'subjonctif'],
      say: 'Il semble que personne ne connaisse cette rue.',
      detail: { title: 'il semble que', body: "Sans « me », sembler laisse la chose en suspens. Avec « me », non : voir l'acte 9. EN: without me, sembler leaves it hanging; with me it does not.", say: 'Il semble que les prix aient encore augmenté.' } },
    { cells: ['il est probable que', 'non', 'indicatif'],
      say: 'Il est probable que le magasin ferme à sept heures.',
      detail: { title: 'il est probable que', body: "Presque sûr, donc donné pour vrai. La porte reste fermée. EN: almost certain, so given as true, and the door stays shut.", say: 'Il est probable que la salle est libre jeudi.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['doute', 'indicatif'],
};

/** BUILD. */
const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu refuses de donner',
  frSub: 'Trois groupes',
  groups: [
    grp('Je n’y crois pas', [
      it(E(1283), 'douter que, sur une clé'),
      it('fr.b1.cafe.069', 'douter que, au café'),
      it('fr.b1.maison.060', 'douter que, sur un logement'),
      it(E(1288), 'douter que, sur un déménagement'),
    ], chk('Dans ces quatre phrases, celui qui parle croit-il la chose ?',
      ['oui', 'non, et il le dit', 'il ne se prononce pas'], 1,
      "Douter, c'est dire qu'on n'y croit pas. EN: to doubt is to say you do not believe it.")),
    grp('Peut-être oui, peut-être non', [
      it(E(1284), 'il est possible que'),
      it('fr.b1.heure-et-date.080', 'il se peut que'),
      it('fr.b1.metiers.056', 'il est possible que, sur un poste'),
      it('fr.b1.famille.080', 'il se peut que, sur des études'),
    ], chk('Ces quatre clés commencent par « il ». Sont-elles des nécessités ?',
      ['non, ce sont des doutes', 'oui, comme il faut que'], 0,
      "Même début, autre famille : regarde le mot après il est. EN: same opening, different family: look at the word after il est.")),
    grp('Presque sûr', [
      it(E(1289), 'il est peu probable que : ouvre'),
      it(E(1377), 'il est probable que : n’ouvre pas'),
      it(E(1286), 'il n’est pas certain que : ouvre'),
      it(E(1293), 'la règle des deux'),
    ], chk('Pourquoi « il est probable que » ne prend-il pas le subjonctif ?',
      ['parce qu’il est long', 'parce que probable veut dire presque vrai', 'parce qu’il n’y a pas de que'], 1,
      "Presque vrai est traité comme vrai. EN: almost true is treated as true.")),
    ctl('Le tri', 'Tu lis « Il se peut que ». Quelle forme attends-tu après que ?',
      ['le subjonctif', 'l’indicatif'], 0,
      "Se peut laisse la chose en suspens. EN: se peut leaves the thing hanging."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['doute', 'fait'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Six doutes, six degrés',
  frSub: 'Du refus net au simple peut-être',
  examples: [
    ex(E(1295), 'douter que : le refus le plus net'),
    ex(E(1290), 'douter que, sur un médicament'),
    ex('fr.b1.cafe.075', 'il est possible que, au passé'),
    ex(E(1285), 'il se peut que : peut-être déjà fait'),
    ex('fr.b1.famille.069', 'douter que, sur quelqu’un'),
    ex(E(1287), 'il semble que : personne ne sait'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['doute'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Doute ou presque certitude',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1283)), ln(E(1284)), ln(E(1377)), ln(E(1285)),
    ln(E(1286)), ln(E(1289)), ln(E(1287)), ln(E(1295)),
  ],
  questions: [
    { q: 'Troisième phrase : la clé ouvre-t-elle la porte ?',
      opts: ['oui', 'non, c’est il est probable que', 'on ne peut pas savoir'], correct: 1,
      why: "Probable donne la chose pour presque vraie. EN: probable gives the thing as almost true." },
    { q: 'Deuxième et troisième phrases : quel mot change entre les deux ?',
      opts: ['le verbe', 'le sujet', 'possible contre probable'], correct: 2,
      why: "Deux mots proches, deux formes différentes. EN: two close words, two different forms." },
    { q: 'Sixième phrase : « il est peu probable que ». Ouvre-t-elle ?',
      opts: ['oui, la négation la fait basculer', 'non, comme il est probable que'], correct: 0,
      why: "Peu probable veut dire improbable, donc douteux. EN: peu probable means unlikely, so doubtful." },
    { q: 'Septième phrase : qui connaît la rue ?',
      opts: ['tout le monde', 'personne, semble-t-il'], correct: 1,
      why: "Il semble que personne ne connaisse : c'est une impression. EN: il semble que nobody knows: an impression." },
    { q: 'Sur les huit phrases, combien laissent la porte fermée ?',
      opts: ['une seule', 'toutes', 'aucune'], correct: 0,
      why: "Seulement la troisième, avec probable. EN: only the third, with probable." },
  ],
  audio: REC('rec-b1-15-doute-ecoute'), say: REFRAME, terms: ['doute'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La raison', 'Pourquoi le doute ouvre-t-il la porte ?',
    ['parce que la phrase est négative', 'parce que tu ne donnes pas la chose pour vraie'], 1,
    "Tu refuses de présenter le fait comme un fait. EN: you refuse to present the fact as a fact."),
  ctl('Le piège', 'Il est possible que et il est probable que prennent-ils la même forme ?',
    ['non, possible ouvre et probable non', 'oui, les deux ouvrent', 'oui, aucune des deux'], 0,
    "Un mot de différence, deux formes. EN: one word apart, two forms."),
  ctl('Le voisin', 'Il semble que et il me semble que se comportent-ils pareil ?',
    ['oui', 'non, et c’est l’acte 9', 'ils n’existent pas tous les deux'], 1,
    "Le petit « me » change tout, et tu le verras bientôt. EN: the little me changes everything, and you will see it soon."),
], ['doute', 'indicatif']);

const ACT5: ActDef = {
  act: {
    id: 'act5',
    title: 'Le doute',
    opener: {
      line: "Tu ne veux pas dire que c’est vrai, et la forme le montre : ici tu apprends les clés du doute, et celle qui les imite. EN: You do not want to say it is true and the form shows it: here you learn the keys of doubt, and the one that imitates them.",
      imageRef: 'lessons/subjonctif-declencheurs/act05.jpg',
    },
    sections: [],
    milestone: "Tu sépares il est possible que de il est probable que, et tu sais pourquoi une seule des deux ouvre la porte. EN: You can separate il est possible que from il est probable que, and you know why only one of them opens the door.",
    estScreens: 23,
    restPoints: ['a5-table'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_TABLE, A5_CONSTRUIRE, A5_EXEMPLES, A5_ECOUTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA BASCULE
 *
 *  The centrepiece. Four sentences about the same room, two of them negated,
 *  and nothing else in the sentence moves.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Devant l’ascenseur',
  frSub: 'Quatre phrases sur la même salle',
  text: READING_BASCULE,
  glossary: [
    { word: 'hausse les épaules', en: 'shrugs', note: "Le geste qui veut dire « je ne suis pas d'accord » sans parler." },
    { word: 'en formation', en: 'on a training course', note: "Absent du bureau parce qu'on apprend quelque chose ailleurs." },
    { word: 'sauf', en: 'except', note: "Tout, moins une chose. EN: everything but one thing." },
  ],
  questions: [
    { q: 'Quelles formes du verbe être trouves-tu dans les quatre phrases ?', a: "est, serons, soit, soyons. Les deux premières sont ordinaires, les deux autres sont des subjonctifs." },
    { q: 'Qu’est-ce qui sépare « est » de « soit », dans ce texte ?', a: "Deux mots seulement : ne et pas. Awa affirme, Marc nie." },
    { q: 'Le sujet ou le verbe changent-ils d’une phrase à l’autre ?', a: "Non. La salle, le nombre de personnes et le verbe être sont les mêmes partout." },
    { q: 'Pourquoi Awa sourit-elle à la fin ?', a: "Parce qu'elle vient de voir que la négation a changé la forme, sans rien changer d'autre." },
  ],
  audio: REC('rec-b1-15-reunion'), say: REFRAME, terms: ['bascule', 'fait'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-indicatif',
  title: 'Deux petits mots, deux formes',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Lis chaque paire à voix haute, l’une après l’autre.',
  audio: REC('rec-b1-15-bascule'), say: REFRAME, terms: ['bascule', 'indicatif'],
  cards: [
    {
      head: 'La paire de base', label: 'penser',
      fr: 'Je pense qu’il vient. · Je ne pense pas qu’il vienne.',
      sub: '[zhuh pahⁿss keel VYEHⁿ] · [zhuh nuh pahⁿss pa keel VYENN]',
      body: "Tu affirmes, donc le verbe reste ordinaire. Tu nies, donc tu n'affirmes plus rien. EN: when you assert, the verb stays ordinary; when you deny, you are no longer asserting.",
    },
    {
      head: 'Quatre clés basculent', label: 'la famille',
      fr: 'penser · croire · être sûr · trouver',
      sub: '[pahⁿ-SAY] · [KRWAR] · [eh-truh SÜR] · [troo-VAY]',
      body: "Ajoute il est vrai que. À la forme positive, aucune n'ouvre. À la forme négative, toutes ouvrent. EN: none of them opens when positive, all of them open when negative.",
    },
    {
      head: 'Ce n’est pas le verbe', label: 'la raison',
      fr: 'Je ne pense pas que cette route soit plus courte.',
      sub: '[zhuh nuh pahⁿss PA kuh seht root swa plü KOORT]',
      body: `${REFRAME} Ici, l'expression est passée de « je pense que » à « je ne pense pas que ». EN: ${REFRAME_EN}`,
    },
    {
      head: 'Quand ça ne se voit pas', label: Cap(FORMATION_REF),
      fr: 'Je ne crois pas que le magasin ouvre le dimanche.',
      sub: '[zhuh nuh krwa PA kuh luh ma-ga-zehⁿ oovr luh dee-MAHⁿSH]',
      body: `« ${B114_REFRAME} » Avec un verbe en -er, la forme est la même qu'au présent. Elle est là quand même. EN: an -er subjunctive looks like the present and is still there.`,
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'La même phrase, avec et sans ne pas',
  frSub: 'Trois groupes',
  groups: [
    grp('Tu affirmes', [
      it(E(1302), 'je pense que : est'),
      it(E(1304), 'je crois que : ouvre'),
      it(E(1308), 'je suis sûr que : ferme'),
      it(E(1310), 'je trouve que : est'),
    ], chk('Dans ces quatre phrases, la chose est-elle donnée comme vraie ?',
      ['oui, celui qui parle l’affirme', 'non, il hésite'], 0,
      "Affirmer, c'est donner le fait. La porte reste fermée. EN: to assert is to give the fact, and the door stays shut.")),
    grp('Tu nies', [
      it(E(1303), 'je ne pense pas que : soit'),
      it(E(1307), 'il n’est pas vrai que : soit'),
      it(E(1309), 'je ne suis pas sûr que : soit'),
      it(E(1311), 'je ne trouve pas que : soit'),
    ], chk('Qu’est-ce qui a changé entre le groupe précédent et celui-ci ?',
      ['le sujet', 'le verbe principal', 'la négation'], 2,
      "Ne et pas, rien d'autre. EN: ne and pas, nothing else.")),
    grp('Les phrases du texte', [
      it('fr.b1.maison.054', 'je pense que : est'),
      it('fr.b1.cuisine.047', 'je ne pense pas que : soit'),
      it('fr.b1.routines.091', 'je crois que : est'),
      it('fr.b1.famille.073', 'je ne pense pas que : vienne'),
    ], chk('« Je ne pense pas que mon oncle vienne » : le locuteur sait-il si son oncle viendra ?',
      ['oui, il est sûr que non', 'non, il ne s’avance pas', 'la phrase ne dit rien'], 1,
      "Nier son opinion, ce n'est pas affirmer le contraire. EN: denying your own opinion is not asserting the opposite.")),
    ctl('Le réflexe', 'Tu vois « je ne crois pas que ». Quelle forme attends-tu ?',
      ['l’indicatif', 'le futur', 'le subjonctif'], 2,
      "La négation a ouvert la porte. EN: the negative has opened the door."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['bascule', 'doute'],
};

/** TRAP, stepped: rule + six cards + audio + a gated drill of eight. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges de la bascule',
  frSub: 'La règle, six cartes, l’écoute, puis à toi',
  rule: {
    title: 'La négation ouvre, la question aussi parfois',
    body: "À la forme positive, penser, croire, être sûr et trouver donnent le fait : indicatif. À la forme négative, ils ne le donnent plus : subjonctif. Le verbe qui suit n'a rien décidé. EN: positive gives the fact, negative stops giving it.",
  },
  cards: [
    { promptLabel: 'la négation oubliée', promptSound: 'Je ne pense pas que cette route est plus courte.',
      fr: 'Je ne pense pas que cette route soit plus courte.', ipa: '/ʒə nə pɑ̃s pa kə sɛt ʁut swa ply kuʁt/',
      tip: "Tu as gardé la forme de la phrase positive. EN: you kept the form of the positive sentence." },
    { promptLabel: 'la négation en trop', promptSound: 'Je pense que cette route soit plus courte.',
      fr: 'Je pense que cette route est plus courte.', ipa: '/ʒə pɑ̃s kə sɛt ʁut ɛ ply kuʁt/',
      tip: "Sans négation, tu affirmes, et la porte reste fermée. EN: with no negative you are asserting, and the door stays shut." },
    { promptLabel: 'être sûr, nié', promptSound: 'Je ne suis pas sûr que la banque est ouverte à midi.',
      fr: 'Je ne suis pas sûr que la banque soit ouverte à midi.', ipa: '/ʒə nə sɥi pa syʁ kə la bɑ̃k swa.tu.vɛʁt a mi.di/',
      tip: "Une certitude niée devient un doute. EN: a denied certainty becomes a doubt." },
    { promptLabel: 'il est vrai, nié', promptSound: 'Il n’est pas vrai que ce quartier est dangereux.',
      fr: 'Il n’est pas vrai que ce quartier soit dangereux.', ipa: '/il nɛ pa vʁɛ kə sə kaʁ.tje swa dɑ̃.ʒʁø/',
      tip: "Il est vrai que affirme ; il n'est pas vrai que n'affirme plus. EN: il est vrai que asserts, il n'est pas vrai que stops asserting." },
    { promptLabel: 'trouver, nié', promptSound: 'Je ne trouve pas que ce plat est trop salé.',
      fr: 'Je ne trouve pas que ce plat soit trop salé.', ipa: '/ʒə nə tʁuv pa kə sə pla swa tʁo sa.le/',
      tip: "Trouver que est une opinion, et la nier l'ouvre comme les autres. EN: trouver que is an opinion, and denying it opens the door." },
    { promptLabel: 'la forme invisible', promptSound: 'Je ne crois pas que le magasin ouvrira le dimanche.',
      fr: 'Je ne crois pas que le magasin ouvre le dimanche.', ipa: '/ʒə nə kʁwa pa kə lə ma.ɡa.zɛ̃ uvʁ lə di.mɑ̃ʃ/',
      tip: "Le futur semble logique, et le subjonctif d'un verbe en -er ne se voit pas. EN: the future feels logical, and an -er subjunctive is invisible." },
  ],
  drill: [
    { promptSay: 'Je pense que cette route ... plus courte. (être)', opts: ['soit', 'est'], correct: 1 },
    { promptSay: 'Je ne pense pas que cette route ... plus courte. (être)', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Je suis sûr que la banque ... ouverte à midi. (être)', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Je ne suis pas sûr que la banque ... ouverte à midi. (être)', opts: ['est', 'soit'], correct: 1 },
    { promptSay: 'Il est vrai que ce quartier ... changé. (avoir)', opts: ['ait', 'a'], correct: 1 },
    { promptSay: 'Il n’est pas vrai que ce quartier ... dangereux. (être)', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Je trouve que ce plat ... trop salé. (être)', opts: ['soit', 'est'], correct: 1 },
    { promptSay: 'Je ne crois pas que ce film ... la peine. (valoir)', opts: ['vaut', 'vaille'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Affirmer, ou ne plus affirmer' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme plate raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-15-piege-bascule'), say: REFRAME, terms: ['bascule'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avec ou sans ne pas',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1302)), ln(E(1303)), ln(E(1308)), ln(E(1309)),
    ln(E(1310)), ln(E(1311)), ln('fr.b1.sports-et-loisirs.075'), ln('fr.b1.sports-et-loisirs.060'),
  ],
  questions: [
    { q: 'Première et deuxième phrases : laquelle contient une négation ?',
      opts: ['la deuxième', 'la première', 'les deux'], correct: 0,
      why: "« Je ne pense pas que » : ne et pas. EN: je ne pense pas que carries ne and pas." },
    { q: 'Deuxième phrase : quelle forme suit la clé ?',
      opts: ['soit', 'est'], correct: 0,
      why: "La négation a ouvert la porte. EN: the negative opened the door." },
    { q: 'Cinquième phrase : le locuteur trouve-t-il le plat trop salé ?',
      opts: ['non', 'oui'], correct: 1,
      why: "« Je trouve que » sans négation : il l'affirme. EN: je trouve que with no negative: he is asserting it." },
    { q: 'Septième phrase : la porte est-elle ouverte ?',
      opts: ['oui', 'non, c’est une affirmation', 'on n’entend pas'], correct: 1,
      why: "« Je pense que le sport développe » : un fait donné. EN: je pense que, so a fact given." },
    { q: 'Huitième phrase : qu’est-ce qui a ouvert la porte ?',
      opts: ['le verbe savoir', 'le mot déjà', 'la négation de penser'], correct: 2,
      why: "« Je ne pense pas qu'elle sache » : la négation. EN: je ne pense pas qu'elle sache: the negative." },
  ],
  audio: REC('rec-b1-15-bascule-ecoute'), say: REFRAME, terms: ['bascule'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Qui affirme, qui n’affirme plus',
  frSub: 'Deux groupes et deux contrôles',
  groups: [
    grp('Des opinions affirmées', [
      it('fr.b1.cafe.080', 'je pense que : sert'),
      it('fr.b1.maison.066', 'je pense que : est'),
      it('fr.b1.sports-et-loisirs.075', 'je pense que : développe'),
      it(E(1306), 'il est vrai que : a changé'),
    ], chk('Que font ces quatre clés au verbe qui suit ?',
      ['rien, il reste ordinaire', 'elles le mettent au subjonctif'], 0,
      "Affirmer une opinion, c'est donner un fait. EN: asserting an opinion is giving a fact.")),
    grp('Les mêmes, niées', [
      it(E(1314), 'je ne crois pas que : vaille'),
      it('fr.b1.sports-et-loisirs.060', 'je ne pense pas que : sache'),
      it(E(1315), 'je ne suis pas sûr que : soit'),
      it(E(1313), 'la règle, en six mots'),
    ], chk('Le verbe principal a-t-il changé entre les deux groupes ?',
      ['oui, penser est devenu douter', 'non, seule la négation est arrivée', 'oui, le sujet a changé'], 1,
      "Même verbe, même sujet, deux petits mots en plus. EN: same verb, same subject, two small words added.")),
    ctl('Le cas limite', 'Tu écris « Je ne crois pas que le magasin ouvre le dimanche ». La forme se voit-elle ?',
      ['non, un verbe en -er ne montre rien', 'oui, elle est très différente'], 0,
      "Elle est là et elle ne se voit pas. EN: it is there and it does not show."),
    ctl('Le test', 'Devant une opinion, que regardes-tu en premier ?',
      ['la longueur de la phrase', 'le verbe après que', 's’il y a ne et pas'], 2,
      "La négation est la clé, pas le verbe. EN: the negative is the key, not the verb."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['bascule', 'indicatif'],
};

const A6_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a6-focus',
  layer: 'core',
  sheetId: 'sheet-indicatif',
  title: 'Ce qu’il faut retenir de la bascule',
  frSub: 'Quatre lignes',
  points: [
    "Penser, croire, être sûr, trouver, il est vrai : à la forme positive, rien ne change. EN: penser, croire, être sûr, trouver and il est vrai change nothing when positive.",
    "À la forme négative, les cinq ouvrent la porte. EN: when negative, all five open the door.",
    "Ce n'est pas le verbe qui bouge : ce sont les mots ne et pas. EN: the verb does not move; ne and pas do.",
    "Avec un verbe en -er, la forme ne se voit pas, et elle est quand même là. EN: with an -er verb the form does not show, and it is still there.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['bascule', 'cle'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La règle', 'Je pense que et je ne pense pas que prennent-ils la même forme ?',
    ['oui', 'non, la seconde ouvre la porte', 'non, la première ouvre la porte'], 1,
    "Nier son opinion, c'est arrêter d'affirmer. EN: denying your opinion is ceasing to assert."),
  ctl('La cause', 'Qu’est-ce qui a changé entre les deux phrases ?',
    ['le verbe', 'le sujet', 'la négation'], 2,
    "Ne et pas, et rien d'autre. EN: ne and pas, and nothing else."),
  ctl('La famille', 'Combien de clés basculent de cette façon dans l’acte 6 ?',
    ['cinq', 'une seule', 'douze'], 0,
    "Penser, croire, être sûr, trouver, il est vrai. EN: penser, croire, être sûr, trouver, il est vrai."),
], ['bascule', 'fait']);

const ACT6: ActDef = {
  act: {
    id: 'act6',
    title: 'La bascule',
    opener: {
      line: "Ajoute deux petits mots à ta phrase et le verbe change de forme : ici tu apprends pourquoi. EN: Add two small words to your sentence and the verb changes shape: here you learn why.",
      imageRef: 'lessons/subjonctif-declencheurs/act06.jpg',
    },
    sections: [],
    milestone: "Tu passes de je pense que à je ne pense pas que sans hésiter, et tu sais que c’est la négation qui a bougé. EN: You can go from je pense que to je ne pense pas que, and you know it is the negative that moved.",
    estScreens: 28,
    restPoints: ['a6-piege'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_CONSTRUIRE, A6_PIEGE, A6_ECOUTE, A6_CHOISIR, A6_FOCUS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — POUR QUE, BIEN QUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'L’atelier de réparation',
  frSub: 'Samedi, dans le hangar du quartier',
  setting: "Un atelier de réparation de quartier, à Bruxelles. Chaque samedi, on répare gratuitement ce que les gens apportent.",
  bubbles: [
    { from: 'narrator', fr: 'Sur la table, une machine à coudre de mille neuf cent soixante.', en: 'On the table, a sewing machine from nineteen sixty.' },
    { from: 'coach', fr: 'Je te laisse la clé pour que tu puisses entrer avant moi.', en: 'I am leaving you the key so that you can get in before me.', warn: 'pour que, puis puisses' },
    { from: 'user', fr: 'D’accord. Bien que la salle soit petite, tout le monde tient.', en: 'All right. Although the room is small, everybody fits.', warn: 'bien que, puis soit' },
    { from: 'coach', fr: 'Range les outils de peur que quelqu’un les perde.', en: 'Put the tools away for fear somebody loses them.', warn: 'de peur que, puis perde' },
    { from: 'user', fr: 'Quoique le travail soit dur, personne ne se plaint ici.', en: 'Although the work is hard, nobody complains here.', warn: 'quoique, puis soit' },
    { from: 'coach', fr: 'On ouvre tôt afin que les gens dorment tranquilles ensuite.', en: 'We open early so that people can sleep easy afterwards.', warn: 'afin que, puis dorment' },
    { from: 'narrator', fr: 'Cinq phrases, cinq mots de liaison, et chacun finit par le même mot.', en: 'Five sentences, five joining words, and each one ends in the same word.' },
  ],
  closing: { fr: 'Ces mots portent leur « que » avec eux, et ils ouvrent tous la porte.', en: 'These words carry their que with them, and every one of them opens the door.' },
  audio: REC('rec-b1-15-atelier'), say: REFRAME, terms: ['liens', 'fait'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-liens',
  title: 'Le but et la concession',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Chaque mot porte son que avec lui.',
  audio: REC('rec-b1-15-liens'), say: REFRAME, terms: ['liens', 'cle'],
  cards: [
    {
      head: 'Le but', label: 'pour que, afin que',
      fr: 'Je te laisse la clé pour que tu puisses entrer.',
      sub: '[zhuh tuh less la KLAY poor kuh tü PWEESS ahⁿ-TRAY]',
      body: "Tu n'es pas encore entré. Le but n'est jamais atteint au moment où on le dit. EN: the goal has never been reached at the moment you state it.",
    },
    {
      head: 'La concession', label: 'bien que, quoique',
      fr: 'Bien que la salle soit petite, tout le monde tient.',
      sub: '[byehⁿ kuh la sal swa puh-TEET too luh mohⁿd TYEHⁿ]',
      body: "La phrase dit le contraire de ce qu'on attend. La salle est vraiment petite, et ça marche. EN: the sentence says the opposite of what you expect, and the room really is small.",
    },
    {
      head: 'Quoique en un mot', label: 'l’orthographe',
      fr: 'quoique · quoi que',
      sub: '[KWA-kuh] · [kwa kuh]',
      body: "En un mot, quoique veut dire bien que. En deux mots, quoi que veut dire peu importe ce que. EN: one word means although, two words mean whatever.",
    },
    {
      head: 'La crainte qui vise un but', label: 'de peur que',
      fr: 'Elle range les papiers de peur que quelqu’un les perde.',
      sub: '[ehl rahⁿzh lay pa-pyay duh PUHR kuh kehl-kuhⁿ lay PEHRD]',
      body: "C'est un but à l'envers : tu agis pour que la chose n'arrive pas. EN: a goal in reverse: you act so that the thing does not happen.",
    },
  ],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-liens',
  title: 'Six liens de but et de concession',
  frSub: 'Touche une ligne',
  cols: ['Lien', 'Groupe', 'Forme'],
  rows: [
    { cells: ['pour que', 'le but', 'subjonctif'],
      say: 'Le bureau reste ouvert jusqu’à midi pour que chacun puisse passer.',
      detail: { title: 'pour que', body: "Le lien de but le plus courant, à l'oral comme à l'écrit. EN: the commonest purpose connector, in speech and in writing.", say: 'Je te prête ma voiture pour que tu ailles à la gare.' } },
    { cells: ['afin que', 'le but', 'subjonctif'],
      say: 'Nous partons tôt afin que les enfants dorment dans la voiture.',
      detail: { title: 'afin que', body: "Le même sens que pour que, un peu plus écrit. EN: the same meaning as pour que, a little more written.", say: 'Afin que rien ne se perde, note tout sur le tableau.' } },
    { cells: ['de peur que', 'le but', 'subjonctif'],
      say: 'Elle range les papiers de peur que quelqu’un les perde.',
      detail: { title: 'de peur que', body: "Un but négatif : tu agis pour éviter quelque chose. EN: a negative goal: you act to avoid something.", say: 'Il ferme la fenêtre de peur que le chat sorte.' } },
    { cells: ['bien que', 'la concession', 'subjonctif'],
      say: 'Bien que ce soit cher, cette machine dure vingt ans.',
      detail: { title: 'bien que', body: "Le lien de concession le plus fréquent. La chose est vraie, et elle n'empêche rien. EN: the commonest concession connector: the thing is true and stops nothing.", say: 'Bien qu’il ait quatre-vingts ans, il fait encore du vélo.' } },
    { cells: ['quoique', 'la concession', 'subjonctif'],
      say: 'Quoique le travail soit dur, il ne se plaint jamais.',
      detail: { title: 'quoique', body: "Le même sens que bien que, plus soutenu, et écrit en un seul mot. EN: the same meaning as bien que, more formal, written as one word.", say: 'Quoiqu’elle vienne de loin, elle arrive toujours la première.' } },
    { cells: ['même si', 'la concession', 'indicatif'],
      say: 'Même si la salle est petite, tout le monde tient.',
      detail: { title: 'même si', body: `Attention : même si est un si, et si ne prend jamais le subjonctif. Voir ${SI_REF}. EN: même si is a si, and si never takes the subjunctive.`, say: 'Même s’il pleut, nous sortirons.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['liens'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Pourquoi, et malgré quoi',
  frSub: 'Trois groupes',
  groups: [
    grp('Un but qui n’est pas atteint', [
      it(E(1321), 'pour que, puis puisses'),
      it(E(1322), 'afin que, puis dorment'),
      it('fr.b1.cuisine.062', 'pour que, en cuisine'),
      it('fr.b1.famille.072', 'pour que, en famille'),
    ], chk('Au moment où on parle, le but est-il déjà atteint ?',
      ['non, jamais', 'oui, toujours', 'une fois sur deux'], 0,
      "Un but qui serait atteint ne serait plus un but. EN: a goal already reached would not be a goal.")),
    grp('Le contraire de ce qu’on attend', [
      it(E(1323), 'bien que, une salle petite'),
      it('fr.b1.tourisme.005', 'bien que, une visite chère'),
      it('fr.b1.argent-quotidien.001', 'bien que, un salaire en hausse'),
      it('fr.b1.communaute.003', 'bien que, un quartier changé'),
    ], chk('« Bien que la visite soit chère, elle vaut le détour. » La visite est-elle chère ?',
      ['non, c’est une hypothèse', 'on ne sait pas', 'oui, vraiment'], 2,
      "La concession admet un fait réel avant de le dépasser. EN: a concession admits a real fact before going past it.")),
    grp('Deux mots pour la même idée', [
      it(E(1324), 'quoique, un travail dur'),
      it(E(1329), 'quoique, une longue route'),
      it(E(1327), 'bien que, quatre-vingts ans'),
      it('fr.b1.dictee.055', 'bien que, une inscription gratuite'),
    ], chk('Quoique et bien que veulent-ils dire la même chose ?',
      ['non, quoique est une question', 'oui, quoique est plus soutenu'], 1,
      "Même sens, registre plus écrit, et un seul mot. EN: same meaning, more formal register, one word.")),
    ctl('Le réflexe', 'Tu vois « afin que ». Quelle forme attends-tu ?',
      ['le subjonctif', 'l’indicatif'], 0,
      "Tous les liens de but ouvrent la porte. EN: every purpose connector opens the door."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['liens'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de liaison',
  frSub: 'Trois viennent de l’anglais',
  errors: [
    { wrong: 'Je te laisse la clé pour que tu peux entrer.',
      right: 'Je te laisse la clé pour que tu puisses entrer.',
      why: "En anglais, so that you can passe partout. En français, pour que ouvre la porte à chaque fois. EN: so that you can works everywhere in English; pour que always opens the door." },
    { wrong: 'Bien que la salle est petite, tout le monde tient.',
      right: 'Bien que la salle soit petite, tout le monde tient.',
      why: "La salle EST petite : c'est un fait, donc la forme des faits semble juste. Bien que ne l'accepte pas. EN: the room really is small, so the fact form feels right, and bien que refuses it." },
    { wrong: 'Même si la salle soit petite, tout le monde tient.',
      right: 'Même si la salle est petite, tout le monde tient.',
      why: "Après bien que, la forme change ; après même si, non. Un si ne prend jamais le subjonctif. EN: after bien que the form changes; after même si it does not, because si never takes it." },
    { wrong: 'Quoi que le travail soit dur, il ne se plaint pas.',
      right: 'Quoique le travail soit dur, il ne se plaint pas.',
      why: "En deux mots, quoi que veut dire peu importe ce que. Ici il faut le mot unique. EN: in two words quoi que means whatever; here you need the single word." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['liens', 'indicatif'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le lien décide, pas la phrase',
  frSub: 'Deux groupes et deux contrôles',
  groups: [
    grp('Ces liens ouvrent', [
      it(E(1316), 'pour que'),
      it(E(1148), 'bien que'),
      it(E(1319), 'quoique'),
      it(E(1320), 'de peur que'),
    ], chk('Qu’ont en commun ces quatre liens ?',
      ['ils commencent par b', 'ils finissent par que', 'ils sont tous longs'], 1,
      "Le que fait partie du mot de liaison. EN: the que is part of the connector itself.")),
    grp('Le but en action', [
      it(E(1326), 'pour que chacun puisse passer'),
      it(E(1328), 'afin que rien ne se perde'),
      it(E(1332), 'pour que tu ailles à la gare'),
      it(E(1331), 'la règle du but'),
    ], chk('« Afin que rien ne se perde » : quelque chose est-il déjà perdu ?',
      ['oui', 'la phrase ne le dit pas', 'non, on veut l’éviter'], 2,
      "Le but est d'empêcher la perte. EN: the goal is to prevent the loss.")),
    ctl('Le piège', 'Même si et bien que prennent-ils la même forme ?',
      ['oui', 'non, même si garde l’indicatif', 'non, bien que garde l’indicatif'], 1,
      "Même si est un si, et un si ne bascule jamais. EN: même si is a si, and a si never swings."),
    ctl('Le tri', 'Tu écris « Je range les outils de peur que quelqu’un ... ». Quelle forme ?',
      ['le subjonctif', 'l’indicatif', 'le futur'], 0,
      "De peur que est un but à l'envers, et il ouvre. EN: de peur que is a reversed goal, and it opens."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['liens', 'cle'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le but', 'Pourquoi pour que et afin que ouvrent-ils la porte ?',
    ['parce qu’ils sont longs', 'parce que le but n’est pas atteint'], 1,
    "On ne raconte pas le but, on le vise. EN: you do not report the goal, you aim at it."),
  ctl('La concession', 'Avec bien que, la chose admise est-elle vraie ?',
    ['oui, et on la dépasse', 'non, c’est une hypothèse', 'elle est fausse'], 0,
    "Bien que la salle soit petite : elle l'est vraiment. EN: bien que la salle soit petite means it really is small."),
  ctl('Le voisin', 'Même si prend-il le subjonctif ?',
    ['oui, comme bien que', 'non, jamais', 'seulement à l’écrit'], 1,
    `Un si ne bascule jamais. Voir ${SI_REF}. EN: a si never swings.`),
], ['liens', 'fait']);

const ACT7: ActDef = {
  act: {
    id: 'act7',
    title: 'Pour que, bien que',
    opener: {
      line: "Certains mots de liaison portent leur « que » avec eux : ici tu apprends ceux du but et ceux de la concession. EN: Some joining words carry their que with them: here you learn the ones for purpose and the ones for concession.",
      imageRef: 'lessons/subjonctif-declencheurs/act07.jpg',
    },
    sections: [],
    milestone: "Tu écris pour que, afin que, bien que et quoique avec la bonne forme, et tu ne confonds plus bien que avec même si. EN: You can write pour que, afin que, bien que and quoique with the right form, and you no longer confuse bien que with même si.",
    estScreens: 32,
    restPoints: ['a7-table'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_TABLE, A7_CONSTRUIRE, A7_ERREURS, A7_CHOISIR, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — AVANT QUE, JUSQU’À CE QUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La note sur la table',
  frSub: 'Six consignes, et une septième à part',
  text: READING_CONDITION,
  glossary: [
    { word: 'gîte', en: 'a holiday cottage', note: "Une maison qu'on loue pour quelques jours à la campagne." },
    { word: 'la tuyauterie', en: 'the pipework', note: "L'ensemble des tuyaux d'eau d'une maison. EN: the water pipes of a house." },
    { word: 'dégagée', en: 'clear', note: "Sans neige et sans obstacle, en parlant d'une route." },
  ],
  questions: [
    { q: 'Quelles expressions de temps et de condition trouves-tu dans la note ?', a: "avant que, jusqu'à ce que, à condition que, sans que, pourvu que, à moins que, et après que à la fin." },
    { q: 'Quelle est la seule qui ne prend pas le subjonctif ?', a: "« Après que vous serez partis ». La chose sera déjà arrivée, donc la forme ne change pas." },
    { q: 'Pourquoi faut-il laisser le chauffage en marche ?', a: "Parce que la tuyauterie gèle vite. Il faut attendre que la dernière personne parte." },
    { q: 'À quelle condition peut-on garder les clés jusqu’à lundi ?', a: "À condition de prévenir par message. La phrase le dit avec « à condition que vous me préveniez »." },
  ],
  audio: REC('rec-b1-15-note'), say: REFRAME, terms: ['liens', 'indicatif'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-liens',
  title: 'Le temps et la condition',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. La première paire est la plus utile de tout l’acte.',
  audio: REC('rec-b1-15-temps'), say: REFRAME, terms: ['liens', 'indicatif'],
  cards: [
    {
      head: 'Avant ouvre, après non', label: 'la paire',
      fr: 'Avant qu’il parte. · Après qu’il est parti.',
      sub: '[a-vahⁿ keel PART] · [a-preh keel eh par-TEE]',
      body: "Avant que, la chose n'a pas eu lieu. Après que, elle a eu lieu, et le français la traite comme un fait. EN: before it, the thing has not happened; after it, it has, and French treats it as a fact.",
    },
    {
      head: 'Jusqu’à ce que', label: 'le temps',
      fr: 'Attends ici jusqu’à ce que je revienne.',
      sub: '[a-tahⁿ-zee-see zhüs-ka suh kuh zhuh ruh-VYENN]',
      body: "La fin n'est pas encore arrivée au moment où tu parles. C'est la même raison qu'avant que. EN: the end has not arrived yet, which is the same reason as avant que.",
    },
    {
      head: 'Quatre conditions', label: 'la condition',
      fr: 'à condition que · sans que · pourvu que · à moins que',
      sub: '[a kohⁿ-dee-syohⁿ KUH] · [sahⁿ KUH] · [poor-vü KUH]',
      body: "Toutes posent quelque chose qui n'est pas encore réglé. Toutes ouvrent la porte. EN: each of them sets up something not yet settled, and all of them open the door.",
    },
    {
      head: 'Le ne qui ne dit pas non', label: 'avant que, à moins que',
      fr: 'Il faut refaire la toiture avant que l’hiver n’arrive.',
      sub: '[eel foh ruh-fehr la twa-tür a-vahⁿ kuh lee-vehr na-REEV]',
      body: "Comme après avoir peur que, un « ne » seul peut apparaître. Il ne nie rien. EN: as after avoir peur que, a lone ne can appear and it negates nothing.",
    },
  ],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Six liens, six moments',
  frSub: 'Rien de tout cela n’est encore réglé',
  examples: [
    ex(E(1345), 'avant que : les invités ne sont pas là'),
    ex('fr.b1.heure-et-date.083', 'avant que : le médecin n’était pas venu'),
    ex(E(1346), 'jusqu’à ce que : ce n’est pas encore clair'),
    ex(E(1341), 'à condition que : la condition n’est pas remplie'),
    ex(E(1342), 'sans que : personne n’a rien vu'),
    ex('fr.b1.dictee.042', 'pourvu que : le certificat n’est pas arrivé'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['liens'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avant, jusqu’à, à condition',
  frSub: 'Trois groupes',
  groups: [
    grp('Ce qui n’est pas encore arrivé', [
      it(E(1345), 'avant que, dans une cuisine'),
      it(E(1350), 'avant qu’il fasse nuit'),
      it('fr.b1.courses.002', 'avant que les magasins ferment'),
      it('fr.b1.appareils.001', 'avant que la batterie meure'),
    ], chk('Au moment de la phrase, la chose annoncée par avant que a-t-elle eu lieu ?',
      ['oui', 'on ne sait pas', 'non, jamais'], 2,
      "C'est la définition d'avant. EN: that is what avant means.")),
    grp('Jusqu’où, et à quelle condition', [
      it(E(1340), 'jusqu’à ce que je revienne'),
      it(E(1346), 'jusqu’à ce que tout soit clair'),
      it(E(1347), 'à condition que tu fasses la vaisselle'),
      it(E(1341), 'à condition que tu me préviennes'),
    ], chk('« Tu peux rester, à condition que tu fasses la vaisselle. » La vaisselle est-elle faite ?',
      ['non, c’est le prix à payer', 'oui, déjà'], 0,
      "La condition est posée, pas remplie. EN: the condition is set, not met.")),
    grp('Sans, pourvu, à moins', [
      it(E(1342), 'sans que personne s’en aperçoive'),
      it(E(1351), 'sans que je dise un mot'),
      it(E(1343), 'pourvu que le train soit à l’heure'),
      it(E(1344), 'à moins qu’il neige'),
    ], chk('« Sans que je dise un mot » : ai-je parlé ?',
      ['oui', 'non'], 1,
      "Sans que dit que la chose n'a pas eu lieu. EN: sans que says the thing did not happen.")),
    ctl('Le réflexe', 'Tu vois « jusqu’à ce que ». Quelle forme attends-tu ?',
      ['l’indicatif', 'le futur', 'le subjonctif'], 2,
      "La fin n'est pas encore là. EN: the end is not here yet."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['liens'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges du temps',
  frSub: 'La règle, six cartes, l’écoute, puis à toi',
  rule: {
    title: 'Avant ouvre, après ferme',
    body: "Un lien de temps ouvre la porte quand la chose n'a pas encore eu lieu : avant que, jusqu'à ce que. Il la laisse fermée quand elle a eu lieu : après que, pendant que. EN: not yet opens the door; already done leaves it shut.",
  },
  cards: [
    { promptLabel: 'avant que, à l’indicatif', promptSound: 'Range la cuisine avant que les invités arrivent bientôt.',
      fr: 'Range la cuisine avant que les invités arrivent.', ipa: '/ʁɑ̃ʒ la kɥi.zin a.vɑ̃ kə le.zɛ̃.vi.te a.ʁiv/',
      tip: "Avec un verbe en -er la forme est la même, et elle est là. EN: with an -er verb the form matches, and it is still there." },
    { promptLabel: 'après que, au subjonctif', promptSound: 'Après que le film ait commencé, personne ne parle plus.',
      fr: 'Après que le film a commencé, personne ne parle plus.', ipa: '/a.pʁɛ kə lə film a kɔ.mɑ̃.se pɛʁ.sɔn nə paʁl ply/',
      tip: "Le film a commencé : c'est un fait. Après que le laisse tel quel. EN: the film has started, which is a fact, and après que leaves it alone." },
    { promptLabel: 'jusqu’à ce que, à l’indicatif', promptSound: 'Attends ici jusqu’à ce que je reviens.',
      fr: 'Attends ici jusqu’à ce que je revienne.', ipa: '/a.tɑ̃.zi.si ʒys.ka sə kə ʒə ʁə.vjɛn/',
      tip: "Mon retour n'a pas eu lieu. La porte est ouverte. EN: my return has not happened, so the door is open." },
    { promptLabel: 'à condition que, à l’indicatif', promptSound: 'Tu peux rester, à condition que tu fais la vaisselle.',
      fr: 'Tu peux rester, à condition que tu fasses la vaisselle.', ipa: '/ty pø ʁɛs.te a kɔ̃.di.sjɔ̃ kə ty fas la vɛ.sɛl/',
      tip: "La condition est posée, donc pas encore remplie. EN: the condition is set, so not yet met." },
    { promptLabel: 'le ne lu comme une négation', promptSound: 'Il faut refaire la toiture avant que l’hiver n’arrive pas.',
      fr: 'Il faut refaire la toiture avant que l’hiver n’arrive.', ipa: '/il fo ʁə.fɛʁ la twa.tyʁ a.vɑ̃ kə li.vɛʁ na.ʁiv/',
      tip: "Ce « ne » ne nie rien, et il n'appelle jamais de « pas ». EN: this ne negates nothing and never calls for a pas." },
    { promptLabel: 'pendant que, au subjonctif', promptSound: 'Pendant que tu finisses, je prépare le café.',
      fr: 'Pendant que tu finis, je prépare le café.', ipa: '/pɑ̃.dɑ̃ kə ty fi.ni ʒə pʁe.paʁ lə ka.fe/',
      tip: "Les deux choses sont réelles en même temps, donc rien ne bouge. EN: both things are real at once, so nothing moves." },
  ],
  drill: [
    { promptSay: 'Range la cuisine avant que les invités ... . (arriver)', opts: ['arrivent', 'arriveront'], correct: 0 },
    { promptSay: 'Après que le film ... commencé, personne ne parle. (avoir)', opts: ['ait', 'a'], correct: 1 },
    { promptSay: 'Attends ici jusqu’à ce que je ... . (revenir)', opts: ['reviens', 'revienne'], correct: 1 },
    { promptSay: 'Pendant que tu ... , je prépare le café. (finir)', opts: ['finis', 'finisses'], correct: 0 },
    { promptSay: 'Tu peux rester à condition que tu ... la vaisselle. (faire)', opts: ['fais', 'fasses'], correct: 1 },
    { promptSay: 'Nous partirons demain, à moins qu’il ... . (neiger)', opts: ['neige', 'neigera'], correct: 0 },
    { promptSay: 'Il est sorti sans que personne s’en ... . (apercevoir)', opts: ['aperçoit', 'aperçoive'], correct: 1 },
    { promptSay: 'Depuis que tu ... là, tout va mieux. (être)', opts: ['es', 'sois'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Pas encore, ou déjà' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme plate raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-15-piege-avant'), say: REFRAME, terms: ['liens', 'indicatif'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Pas encore, ou déjà fait',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1345)), ln(E(1379)), ln(E(1340)), ln(E(1365)),
    ln(E(1347)), ln(E(1344)), ln(E(1342)), ln('fr.b1.maison.004'),
  ],
  questions: [
    { q: 'Première phrase : les invités sont-ils arrivés ?',
      opts: ['oui', 'non, pas encore'], correct: 1,
      why: "Avant que : la chose n'a pas eu lieu. EN: avant que, so it has not happened." },
    { q: 'Deuxième phrase : le film a-t-il commencé ?',
      opts: ['oui, et la forme ne change pas', 'non'], correct: 0,
      why: "Après que : c'est un fait, donc l'indicatif. EN: après que, so a fact and the indicative." },
    { q: 'Quatrième phrase : quel lien entends-tu ?',
      opts: ['avant que', 'jusqu’à ce que', 'pendant que'], correct: 2,
      why: "Pendant que : les deux choses se passent ensemble. EN: pendant que: both things at once." },
    { q: 'Sixième phrase : partirons-nous demain ?',
      opts: ['non', 'oui, sauf s’il neige'], correct: 1,
      why: "À moins que pose la seule exception. EN: à moins que sets the one exception." },
    { q: 'Huitième phrase : « avant que l’hiver n’arrive ». L’hiver arrivera-t-il ?',
      opts: ['oui, ce ne ne nie rien', 'non, le ne le nie'], correct: 0,
      why: "Ce « ne » est décoratif. EN: this ne is decorative." },
  ],
  audio: REC('rec-b1-15-temps-ecoute'), say: REFRAME, terms: ['liens', 'indicatif'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La paire qui décide de tout',
  frSub: 'Deux groupes et deux contrôles',
  groups: [
    grp('Avant, donc pas encore', [
      it(E(1149), 'le lien avant que'),
      it(E(1378), 'avant que le film commence'),
      it(E(1216), 'avant que la pluie arrive'),
      it(E(1348), 'la règle de la paire'),
    ], chk('Pourquoi avant que ouvre-t-il la porte ?',
      ['parce que la chose n’a pas eu lieu', 'parce qu’il est court'], 0,
      "Avant veut dire pas encore. EN: avant means not yet.")),
    grp('Après, donc déjà', [
      it(E(1356), 'le lien après que'),
      it(E(1379), 'après que le film a commencé'),
      it(E(1362), 'après que les invités sont partis'),
      it(E(1365), 'pendant que tu finis'),
    ], chk('Après que et pendant que laissent-ils le verbe tranquille ?',
      ['non, ils ouvrent aussi', 'oui, la chose est réelle', 'seulement après que'], 1,
      "Ce qui est déjà vrai reste à l'indicatif. EN: what is already true stays in the indicative.")),
    ctl('Le cas limite', 'Avant que et après que sont des frères. Prennent-ils la même forme ?',
      ['oui', 'non, avant ouvre et après non', 'non, après ouvre et avant non'], 1,
      "La différence est dans le temps, pas dans le mot. EN: the difference is in the timing, not in the word."),
    ctl('Le ne', 'Après avant que, un « ne » seul veut-il dire non ?',
      ['non, tu peux l’ignorer', 'oui'], 0,
      "Il n'appelle jamais de « pas ». EN: it never calls for a pas."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['liens', 'fait'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le temps', 'Jusqu’à ce que ouvre-t-il la porte ?',
    ['non', 'oui, la fin n’est pas là', 'seulement au passé'], 1,
    "Tant que la fin n'est pas arrivée, la porte est ouverte. EN: as long as the end has not come, the door is open."),
  ctl('La condition', 'À condition que, sans que, pourvu que, à moins que : combien ouvrent ?',
    ['les quatre', 'deux', 'aucune'], 0,
    "Les quatre posent quelque chose qui n'est pas réglé. EN: all four set up something unsettled."),
  ctl('La paire', 'Lequel des deux garde l’indicatif ?',
    ['avant que', 'les deux', 'après que'], 2,
    "Après que, la chose est faite. EN: after après que, the thing is done."),
], ['liens', 'indicatif']);

const ACT8: ActDef = {
  act: {
    id: 'act8',
    title: 'Avant que, jusqu’à ce que',
    opener: {
      line: "Quand la chose n’a pas encore eu lieu, le lien ouvre la porte : ici tu apprends le temps et la condition. EN: When the thing has not happened yet, the connector opens the door: here you learn time and condition.",
      imageRef: 'lessons/subjonctif-declencheurs/act08.jpg',
    },
    sections: [],
    milestone: "Tu sépares avant que d’après que et tu places jusqu’à ce que, à condition que, sans que et pourvu que sans y penser. EN: You can separate avant que from après que and place jusqu'à ce que, à condition que, sans que and pourvu que without thinking.",
    estScreens: 28,
    restPoints: ['a8-piege'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_EXEMPLES, A8_CONSTRUIRE, A8_PIEGE, A8_ECOUTE, A8_CHOISIR, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — CE QUI NE LE PREND PAS
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Six réponses sur un forum',
  frSub: 'Six fois que, et un seul subjonctif',
  text: READING_INDICATIF,
  glossary: [
    { word: 'la banlieue', en: 'the outskirts', note: "Les communes autour d'une grande ville. EN: the towns around a big city." },
    { word: 'refusent des dossiers', en: 'turn down applications', note: "Une agence dit non à un dossier de location." },
    { word: 'plus calme qu’en janvier', en: 'quieter than in January', note: "Il y a moins de demandes et moins de mouvement." },
  ],
  questions: [
    { q: 'Combien de fois le mot que apparaît-il dans les six réponses ?', a: "Six fois, une par message. Et un seul verbe change de forme." },
    { q: 'Quelle réponse contient le seul subjonctif ?', a: "« Il semble que les prix aient encore augmenté. » Les autres gardent la forme ordinaire." },
    { q: 'Quelle paire le texte appelle-t-il « le piège » ?', a: "« il semble que », qui ouvre la porte, et « il me semble que », qui ne l'ouvre pas." },
    { q: 'Pourquoi j’espère que ne change-t-il rien ?', a: "Parce qu'en espérant, tu comptes sur la chose : tu la présentes comme ce qui va arriver." },
  ],
  audio: REC('rec-b1-15-forum'), say: REFRAME, terms: ['indicatif', 'fait'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-indicatif',
  title: 'Les clés qui n’ouvrent pas',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. La troisième est celle que personne ne t’a jamais expliquée.',
  audio: REC('rec-b1-15-indicatif'), say: REFRAME, terms: ['indicatif', 'cle'],
  cards: [
    {
      head: 'La règle derrière la liste', label: 'donné pour vrai',
      fr: 'Je sais que tu viens. · J’espère que tu viens.',
      sub: '[zhuh SEH kuh tü VYEHⁿ] · [zhehs-pehr kuh tü VYEHⁿ]',
      body: "Quand l'expression présente la chose comme vraie, le verbe ne bouge pas. EN: when the expression presents the thing as true, the verb does not move.",
    },
    {
      head: 'Espérer, le grand piège', label: 'espérer que',
      fr: 'J’espère que tout se passera bien.',
      sub: '[zhehs-PEHR kuh too suh pa-suh-ra BYEHⁿ]',
      body: "Espérer ressemble à vouloir, et n'ouvre pas. En espérant, tu comptes sur la chose. EN: espérer looks like vouloir and does not open: when you hope, you are counting on it.",
    },
    {
      head: 'Deux lettres changent tout', label: 'sembler',
      fr: 'Il semble que ce soit vrai. · Il me semble que c’est vrai.',
      sub: '[eel SAHⁿBL kuh suh swa VREH] · [eel muh SAHⁿBL kuh seh VREH]',
      body: "Sans « me », personne ne prend la chose en charge. Avec « me », c'est toi, et tu la donnes. EN: without me nobody takes responsibility; with me it is you, and you give it.",
    },
    {
      head: 'Les liens qui ne basculent pas', label: 'parce que, après que',
      fr: 'parce que · pendant que · après que · peut-être que',
      sub: '[pars-KUH] · [pahⁿ-dahⁿ KUH] · [a-preh KUH]',
      body: "Ils portent tous un que et racontent des faits réels. Le doute de peut-être est dans peut-être. EN: they all carry a que and report real facts.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les clés qui laissent tout en place',
  frSub: 'Trois groupes',
  groups: [
    grp('Tu comptes sur la chose', [
      it(E(1358), 'espérer que, au futur'),
      it(E(1368), 'espérer que, au présent'),
      it(E(1205), 'espérer que, sur une visite'),
      it('fr.sons.voyelles.438', 'espérer que, sur la météo'),
    ], chk('Espérer ressemble à vouloir. Ouvre-t-il la porte comme vouloir ?',
      ['non, jamais', 'oui, comme vouloir', 'seulement au futur'], 0,
      "En espérant, tu présentes la chose comme ce qui va arriver. EN: when you hope, you present the thing as what will happen.")),
    grp('Tu rapportes un fait', [
      it(E(1361), 'parce que, sur la pluie'),
      it('fr.b1.connecteurs-logiques.002', 'parce que, sur un magasin'),
      it(E(1362), 'après que, sur des invités'),
      it(E(1365), 'pendant que, sur un café'),
    ], chk('Ces quatre liens portent un que. Pourquoi n’ouvrent-ils pas ?',
      ['parce qu’ils sont courts', 'parce qu’ils racontent des faits réels'], 1,
      "Un fait réel garde la forme des faits. EN: a real fact keeps the form of facts.")),
    grp('Presque vrai, donc vrai', [
      it(E(1360), 'il est probable que'),
      it(E(1364), 'il paraît que'),
      it(E(1363), 'peut-être que'),
      it(E(1359), 'il me semble que'),
    ], chk('« Peut-être que Karim connaît la réponse » : où est le doute ?',
      ['dans le verbe', 'dans peut-être', 'dans le mot que'], 1,
      "Le doute est déjà dit, et le verbe n'a rien à ajouter. EN: the doubt is already said, and the verb has nothing to add.")),
    ctl('Le réflexe', 'Tu vois « j’espère que ». Quelle forme écris-tu ?',
      ['la forme ordinaire', 'le subjonctif'], 0,
      "Espérer ne bascule jamais. EN: espérer never swings."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['indicatif', 'fait'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges de l’indicatif',
  frSub: 'La règle, six cartes, l’écoute, puis à toi',
  rule: {
    title: 'Espérer n’ouvre pas, sembler dépend du me',
    body: "Espérer que garde toujours la forme ordinaire. Sembler change de camp : il semble que ouvre, il me semble que non. EN: espérer que always keeps the ordinary form, and sembler switches sides depending on the me.",
  },
  cards: [
    { promptLabel: 'espérer, au subjonctif', promptSound: 'J’espère que tu viennes samedi.',
      fr: 'J’espère que tu viens samedi.', ipa: '/ʒɛs.pɛʁ kə ty vjɛ̃ sam.di/',
      tip: "Espérer ressemble à vouloir et ne se comporte pas comme lui. EN: espérer looks like vouloir and does not behave like it." },
    { promptLabel: 'il me semble, au subjonctif', promptSound: 'Il me semble que cette adresse soit fausse.',
      fr: 'Il me semble que cette adresse est fausse.', ipa: '/il mə sɑ̃bl kə sɛ.ta.dʁɛs ɛ fos/',
      tip: "Avec « me », c'est toi qui donnes l'impression comme un fait. EN: with me, you are giving your impression as a fact." },
    { promptLabel: 'il semble, à l’indicatif', promptSound: 'Il semble que personne ne connaît cette rue.',
      fr: 'Il semble que personne ne connaisse cette rue.', ipa: '/il sɑ̃bl kə pɛʁ.sɔn nə kɔ.nɛs sɛt ʁy/',
      tip: "Sans « me », personne ne prend la chose en charge. EN: without me, nobody takes responsibility for it." },
    { promptLabel: 'probable, au subjonctif', promptSound: 'Il est probable que le bureau soit fermé demain.',
      fr: 'Il est probable que le bureau est fermé demain.', ipa: '/i.lɛ pʁɔ.babl kə lə by.ʁo ɛ fɛʁ.me də.mɛ̃/',
      tip: "Probable veut dire presque sûr, et presque sûr est traité comme sûr. EN: probable means almost certain, and almost certain counts as certain." },
    { promptLabel: 'parce que, au subjonctif', promptSound: 'Nous sommes rentrés parce que la route soit fermée.',
      fr: 'Nous sommes rentrés parce que la route était fermée.', ipa: '/nu sɔm ʁɑ̃.tʁe paʁs kə la ʁut e.tɛ fɛʁ.me/',
      tip: "La cause est un fait, et un fait garde sa forme. EN: a cause is a fact, and a fact keeps its form." },
    { promptLabel: 'peut-être, au subjonctif', promptSound: 'Peut-être que Karim connaisse la réponse.',
      fr: 'Peut-être que Karim connaît la réponse.', ipa: '/pø.tɛ.tʁə kə ka.ʁim kɔ.nɛ la ʁe.pɔ̃s/',
      tip: "Le doute est déjà dans peut-être, et le verbe n'a rien à ajouter. EN: the doubt is already in peut-être." },
  ],
  drill: [
    { promptSay: 'J’espère que tu ... samedi. (venir)', opts: ['viennes', 'viens'], correct: 1 },
    { promptSay: 'Je veux que tu ... samedi. (venir)', opts: ['viennes', 'viens'], correct: 0 },
    { promptSay: 'Il me semble que cette adresse ... fausse. (être)', opts: ['soit', 'est'], correct: 1 },
    { promptSay: 'Il semble que personne ne ... cette rue. (connaître)', opts: ['connaisse', 'connaît'], correct: 0 },
    { promptSay: 'Il est probable que le bureau ... fermé. (être)', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Il est possible que le bureau ... fermé. (être)', opts: ['est', 'soit'], correct: 1 },
    { promptSay: 'Peut-être que Karim ... la réponse. (connaître)', opts: ['connaît', 'connaisse'], correct: 0 },
    { promptSay: 'Nous sommes rentrés parce que la route ... fermée. (être)', opts: ['soit', 'était'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Deux clés qui trompent' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme de trop raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-15-piege-semble'), say: REFRAME, terms: ['indicatif', 'doute'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Six clés, six portes fermées',
  frSub: 'Dans chaque ligne, la chose est donnée',
  examples: [
    ex(E(1366), 'la règle de la famille'),
    ex(E(1367), 'la paire sembler'),
    ex('fr.b1.routines.087', 'il semble que : la forme ne se voit pas'),
    ex('fr.b1.cafe.072', 'il semble que : la forme se voit'),
    ex('fr.b1.connecteurs-logiques.005', 'parce que : une cause réelle'),
    ex('fr.b1.routines.095', 'après avoir : la façon la plus simple d’éviter la question'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['indicatif'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ouvre, ou n’ouvre pas',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1358)), ln(E(1359)), ln(E(1287)), ln(E(1360)),
    ln(E(1363)), ln(E(1361)), ln(E(1364)), ln('fr.b1.cafe.072'),
  ],
  questions: [
    { q: 'Deuxième et troisième phrases : laquelle contient un subjonctif ?',
      opts: ['la troisième, il semble que', 'la deuxième, il me semble que', 'les deux'], correct: 0,
      why: "Sans « me », sembler ouvre la porte. EN: without me, sembler opens the door." },
    { q: 'Première phrase : espérer ouvre-t-il la porte ?',
      opts: ['oui', 'non'], correct: 1,
      why: "Espérer présente la chose comme ce qui va arriver. EN: espérer presents the thing as what will happen." },
    { q: 'Quatrième phrase : quelle clé entends-tu ?',
      opts: ['il est possible que', 'il se peut que', 'il est probable que'], correct: 2,
      why: "Probable, donc la porte reste fermée. EN: probable, so the door stays shut." },
    { q: 'Sixième phrase : quel lien entends-tu ?',
      opts: ['parce que', 'bien que'], correct: 0,
      why: "Parce que donne une cause réelle. EN: parce que gives a real cause." },
    { q: 'Sur les huit phrases, combien ouvrent la porte ?',
      opts: ['aucune', 'toutes', 'deux'], correct: 2,
      why: "Les deux « il semble que », sans me. EN: the two il semble que, with no me." },
  ],
  audio: REC('rec-b1-15-indicatif-ecoute'), say: REFRAME, terms: ['indicatif', 'doute'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La paire sembler, et la paire probable',
  frSub: 'Deux groupes et deux contrôles',
  groups: [
    grp('Deux lettres de différence', [
      it(E(1353), 'il me semble que : ferme'),
      it(E(1282), 'il semble que : ouvre'),
      it(E(1359), 'il me semble que, sur une adresse'),
      it(E(1287), 'il semble que, sur une rue'),
    ], chk('Qu’est-ce qui sépare il semble que de il me semble que ?',
      ['un mot de deux lettres', 'le verbe', 'le temps de la phrase'], 0,
      "Le « me » dit qui prend la chose en charge. EN: the me says who takes responsibility.")),
    grp('Deux mots presque pareils', [
      it(E(1354), 'il est probable que : ferme'),
      it(E(1279), 'il est possible que : ouvre'),
      it(E(1377), 'probable, sur une salle'),
      it(E(1376), 'possible, sur la même salle'),
    ], chk('Laquelle des deux clés donne la chose pour presque vraie ?',
      ['il est possible que', 'il est probable que'], 1,
      "Presque vrai est traité comme vrai. EN: almost true is treated as true.")),
    ctl('La règle', 'Qu’ont en commun espérer que, il me semble que et il est probable que ?',
      ['ils sont longs', 'ils sont négatifs', 'ils donnent la chose pour vraie'], 2,
      "C'est la seule règle derrière toute la liste. EN: that is the one rule behind the whole list."),
    ctl('Le tri', 'Tu écris « Après que le film ... commencé ». Quelle forme ?',
      ['a, la forme ordinaire', 'ait, le subjonctif'], 0,
      "Après que, la chose est déjà faite. EN: after après que, the thing is already done."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['indicatif', 'cle'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Espérer', 'J’espère que tu ... . Quelle forme ?',
    ['la forme ordinaire', 'le subjonctif'], 0,
    "Espérer ne bascule jamais. EN: espérer never swings."),
  ctl('Sembler', 'Laquelle des deux ouvre la porte ?',
    ['il me semble que', 'les deux', 'il semble que'], 2,
    "Sans le « me », personne ne prend la chose en charge. EN: without the me, nobody takes responsibility."),
  ctl('La règle', 'Pourquoi ces clés ne changent-elles rien ?',
    ['parce qu’elles n’ont pas de que', 'parce qu’elles donnent la chose pour vraie'], 1,
    "Un fait donné garde la forme des faits. EN: a fact given keeps the form of facts."),
], ['indicatif', 'fait']);

const ACT9: ActDef = {
  act: {
    id: 'act9',
    title: 'Ce qui ne le prend pas',
    opener: {
      line: "La moitié du travail, c’est de savoir quand ne rien changer : ici tu apprends les clés qui laissent la porte fermée. EN: Half the work is knowing when to change nothing: here you learn the keys that leave the door shut.",
      imageRef: 'lessons/subjonctif-declencheurs/act09.jpg',
    },
    sections: [],
    milestone: "Tu écris j’espère que tu viens sans hésiter, et tu sépares il semble que de il me semble que. EN: You can write j'espère que tu viens without hesitating, and you can separate il semble que from il me semble que.",
    estScreens: 28,
    restPoints: ['a9-piege'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_PIEGE, A9_EXEMPLES, A9_ECOUTE, A9_CHOISIR, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — TRIER À FROID
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'La relecture',
  frSub: 'Un atelier d’écriture, jeudi soir',
  setting: "Un atelier d'écriture pour adultes, à Genève. Chacun relit le texte de son voisin et souligne ce qui cloche.",
  bubbles: [
    { from: 'narrator', fr: 'Sur la feuille, huit phrases et six fois le mot que.', en: 'On the sheet, eight sentences and six occurrences of the word que.' },
    { from: 'coach', fr: 'Ne regarde pas le verbe. Regarde le mot juste devant le que.', en: 'Do not look at the verb. Look at the word right in front of que.' },
    { from: 'user', fr: 'Il faut que nous rentrions avant la nuit. Ça, c’est bon.', en: 'Il faut que nous rentrions avant la nuit. That one is fine.', warn: 'il faut que : ça ouvre' },
    { from: 'coach', fr: 'Et la ligne d’en dessous, avec j’espère.', en: 'And the line below, with j’espère.' },
    { from: 'user', fr: 'J’espère que nous rentrerons avant la nuit. Là, rien ne change.', en: 'J’espère que nous rentrerons avant la nuit. There, nothing changes.', warn: 'espérer que : ça n’ouvre pas' },
    { from: 'coach', fr: 'Tu as fait les deux en dix secondes, et sans conjuguer quoi que ce soit.', en: 'You did both in ten seconds, without conjugating anything at all.' },
    { from: 'narrator', fr: 'Le tri se fait devant le que. La forme suit toute seule.', en: 'The sorting happens in front of que. The form follows on its own.' },
  ],
  closing: { fr: 'Trois questions, dans cet ordre, et tu n’as plus jamais à deviner.', en: 'Three questions, in this order, and you never have to guess again.' },
  audio: REC('rec-b1-15-tri'), say: REFRAME, terms: ['cle', 'fait'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  sheetId: 'sheet-cle',
  title: 'Trois astuces quand tu hésites',
  frSub: 'À utiliser dans cet ordre',
  hacks: [
    { hack: 'Cache le verbe avec ton doigt et lis seulement ce qui est devant le que.',
      why: "Le verbe ne décide de rien, donc le regarder te ralentit. EN: the verb decides nothing, so looking at it only slows you down." },
    { hack: 'Demande-toi si celui qui parle donne la chose pour vraie.',
      why: "C'est la règle derrière les cinq familles et derrière toute la liste de l'acte 9. EN: that is the rule behind the five families and behind the whole act 9 list." },
    { hack: 'Si l’expression contient une négation, attends-toi à une bascule.',
      why: "Je ne pense pas que, il n'est pas sûr que, il n'est pas vrai que : les trois ouvrent. EN: je ne pense pas que, il n'est pas sûr que and il n'est pas vrai que all open." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'fait'],
};

const A10_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a10-cartes',
  layer: 'core',
  title: 'Huit clés, dans les deux sens',
  frSub: 'Anglais devant, français derrière',
  cards: [
    { front: 'I want you to', back: 'je veux que', say: 'Je veux que tu me rappelles avant midi.' },
    { front: 'it is important that', back: 'il est important que', say: 'Il est important que vous arriviez à l’heure.' },
    { front: 'I am glad that', back: 'je suis content que', say: 'Je suis content que tu prennes des vacances.' },
    { front: 'I doubt that', back: 'je doute que', say: 'Je doute que ce train parte à l’heure.' },
    { front: 'although', back: 'bien que', say: 'Bien que ce soit cher, cette machine dure vingt ans.' },
    { front: 'so that', back: 'pour que', say: 'Je te laisse la clé pour que tu puisses entrer.' },
    { front: 'I hope that (no subjunctive)', back: 'j’espère que', say: 'J’espère que tout se passera bien.' },
    { front: 'it is likely that (no subjunctive)', back: 'il est probable que', say: 'Il est probable que le bureau est fermé demain.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les cinq familles, mélangées',
  frSub: 'Trois groupes, rien dans l’ordre',
  groups: [
    grp('Les paires du texte', [
      it(E(1370), 'il faut que : ouvre'),
      it(E(1371), 'j’espère que : ferme'),
      it(E(1372), 'je suis heureux que : ouvre'),
      it(E(1373), 'je crois que : ferme'),
    ], chk('Dans ces quatre phrases, combien de clés ouvrent la porte ?',
      ['une', 'trois', 'deux'], 2,
      "Il faut que et je suis heureux que. EN: il faut que and je suis heureux que.")),
    grp('Deux liens, deux formes', [
      it(E(1374), 'bien que : ouvre'),
      it(E(1375), 'parce que : ferme'),
      it(E(1378), 'avant que : ouvre'),
      it(E(1379), 'après que : ferme'),
    ], chk('Bien que et parce que portent le même que. Pourquoi une seule ouvre-t-elle ?',
      ['parce que raconte une cause réelle', 'bien que est plus long'], 0,
      "Une cause est un fait ; une concession admet un fait pour le dépasser. EN: a cause is a fact, a concession admits one to go past it.")),
    grp('Possible contre probable', [
      it(E(1376), 'il est possible que : ouvre'),
      it(E(1377), 'il est probable que : ferme'),
      it('fr.b1.cuisine.054', 'douter que : ouvre'),
      it('fr.b1.famille.065', 'il est important que : ouvre'),
    ], chk('Laquelle de ces quatre phrases garde la forme ordinaire ?',
      ['la deuxième', 'la première', 'la quatrième'], 0,
      "Probable donne la chose pour presque vraie. EN: probable gives the thing as almost true.")),
    ctl('Le test', 'Première question devant une phrase avec que ?',
      ['quel est le verbe', 'quelle expression est devant', 'la phrase est-elle longue'], 1,
      `${REFRAME} EN: ${REFRAME_EN}`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'indicatif'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Écris les six paires',
  frSub: 'Trois fois deux phrases presque jumelles',
  itemIds: dicteeFor(10),
  audio: AUDIO, say: REFRAME, terms: ['cle'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de tri',
  frSub: 'Les quatre familles y passent',
  errors: [
    { wrong: 'J’espère que tu sois là demain.',
      right: 'J’espère que tu seras là demain.',
      why: "Espérer ressemble à vouloir, et c'est pour ça que l'erreur est si fréquente. EN: espérer looks like vouloir, which is why this error is so common." },
    { wrong: 'Il est probable qu’il soit en retard.',
      right: 'Il est probable qu’il est en retard.',
      why: "Possible et probable se ressemblent, et une seule des deux ouvre la porte. EN: possible and probable look alike, and only one of them opens the door." },
    { wrong: 'Je pense que ce soit une bonne idée.',
      right: 'Je pense que c’est une bonne idée.',
      why: "Tu connais la bascule, et tu l'appliques aussi à la forme positive. Là, tu affirmes. EN: you know the swing and apply it to the positive form too, where you are asserting." },
    { wrong: 'Après que le film ait commencé, personne ne parle.',
      right: 'Après que le film a commencé, personne ne parle.',
      why: "Avant que ouvre, donc après que semble devoir ouvrir aussi. La chose est déjà faite. EN: avant que opens, so après que seems to follow, and the thing is already done." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'bascule'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Trois questions, dans cet ordre',
  frSub: 'Deux groupes et deux contrôles',
  groups: [
    grp('Le test en trois questions', [
      it(E(1380), 'les trois questions'),
      it(E(1381), 'la clé qui n’ouvre pas'),
      it(E(1211), 'la règle de l’acte 1'),
      it(E(1313), 'la règle de la bascule'),
    ], chk('Quelle est la deuxième question du test ?',
      ['quelle expression est devant le que', 'y a-t-il un que', 'quel est le sujet'], 0,
      "D'abord le que, puis l'expression, puis la décision. EN: first the que, then the expression, then the decision.")),
    grp('Les clés qui ferment', [
      it(E(1352), 'espérer que'),
      it(E(1353), 'il me semble que'),
      it(E(1354), 'il est probable que'),
      it(E(1356), 'après que'),
    ], chk('Ces quatre clés ont-elles quelque chose en commun ?',
      ['elles sont négatives', 'elles donnent la chose pour vraie'], 1,
      "C'est la seule chose qui les réunit. EN: that is the one thing they share.")),
    ctl('Le doute qui reste', 'Tu vois une forme en -er après une clé. Comment savoir si c’est un subjonctif ?',
      ['tu regardes la clé', 'tu regardes la terminaison', 'tu comptes les syllabes'], 0,
      "Un verbe en -er ne montre rien. La clé, elle, dit tout. EN: an -er verb shows nothing, and the key says everything."),
    ctl('Le dernier réflexe', 'Une négation devant une opinion, ça veut dire quoi ?',
      ['rien de spécial', 'attends-toi à une bascule'], 1,
      "Je ne pense pas que, je ne crois pas que, il n'est pas sûr que. EN: je ne pense pas que, je ne crois pas que, il n'est pas sûr que."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'liens'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le test', 'Que regardes-tu en premier devant une phrase avec que ?',
    ['le verbe', 'l’expression devant', 'la ponctuation'], 1,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('La règle unique', 'Une clé n’ouvre pas. Pourquoi ?',
    ['elle donne la chose pour vraie', 'elle n’a pas de que'], 0,
    "C'est la seule règle qui couvre toute la liste. EN: that is the one rule covering the whole list."),
  ctl('La paire la plus utile', 'Laquelle de ces deux ouvre la porte ?',
    ['après que', 'aucune des deux', 'avant que'], 2,
    "Avant que, la chose n'a pas eu lieu. EN: before avant que, the thing has not happened."),
], ['cle', 'fait']);

const ACT10: ActDef = {
  act: {
    id: 'act10',
    title: 'Trier à froid',
    opener: {
      line: "Toutes les familles arrivent mélangées, comme dans un vrai texte : ici tu apprends à trier en trois questions. EN: Every family arrives mixed up, as in a real text: here you learn to sort in three questions.",
      imageRef: 'lessons/subjonctif-declencheurs/act10.jpg',
    },
    sections: [],
    milestone: "Devant une phrase inconnue, tu décides en trois questions et sans conjuguer quoi que ce soit. EN: In front of an unfamiliar sentence you can decide in three questions, without conjugating anything.",
    estScreens: 37,
    restPoints: ['a10-cartes', 'a10-dictee'],
  },
  sections: [A10_HISTOIRE, A10_HACKS, A10_CARTES, A10_CONSTRUIRE, A10_DICTEE, A10_ERREURS, A10_CHOISIR, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ÉCRIRE AVEC LES DÉCLENCHEURS
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message d’Inès',
  frSub: 'Le modèle que tu vas imiter',
  text: READING_MESSAGE,
  glossary: [
    { word: 'pot de départ', en: 'leaving do', note: "Le verre qu'on organise quand quelqu'un quitte son travail." },
    { word: 'le traiteur', en: 'the caterer', note: "L'entreprise qui prépare et livre les plats." },
    { word: 'ça m’enlève un souci', en: 'that is one worry off my mind', note: "Une chose de moins à gérer. EN: one less thing to handle." },
  ],
  questions: [
    { q: 'Combien de clés différentes Inès utilise-t-elle ?', a: "Six : il faut que, je voudrais que, je suis content que, bien que, je doute que et j'espère que." },
    { q: 'Laquelle de ces six ne change rien après le que ?', a: "« J'espère que tout le monde pourra passer. » Espérer garde la forme ordinaire." },
    { q: 'Quelles familles sont représentées dans le message ?', a: "La nécessité, la volonté, le sentiment, le doute et un lien, avant que. Cinq familles en dix lignes." },
    { q: 'Pourquoi Inès écrit-elle « avant que vous répondiez » ?', a: "Parce que la réponse n'est pas encore donnée. Avant que ouvre la porte." },
  ],
  audio: REC('rec-b1-15-message'), say: REFRAME, terms: ['cle', 'indicatif'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-indicatif',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan du message',
  steps: [
    "Écris ce que tu veux obtenir, en une ligne, sans aucune clé. EN: write what you want in one line, with no trigger expression.",
    "Choisis une clé par phrase, et change de famille à chaque fois. EN: pick one key per sentence, changing family each time.",
    "Écris une phrase avec une clé qui n'ouvre pas : espérer que, je pense que. EN: write one sentence with a key that does not open.",
    "Relis chaque que et regarde seulement le mot qui est devant. EN: reread every que and look only at the word in front of it.",
    "Vérifie que ton message se comprend en une seule lecture. EN: check that your message can be read once and understood.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'indicatif'],
};

const A11_CAS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-cas',
  layer: 'core',
  title: 'Quatre messages, quatre familles',
  cases: [
    { situation: 'Un message au groupe', fr: 'Il faut que quelqu’un s’occupe des boissons.', en: 'Somebody has to take care of the drinks.' },
    { situation: 'Une réponse à une invitation', fr: 'Je suis content que vous soyez tous disponibles.', en: 'I am glad you are all free.' },
    { situation: 'Un courriel prudent', fr: 'Je doute que le traiteur puisse livrer un samedi.', en: 'I doubt the caterer can deliver on a Saturday.' },
    { situation: 'Une fin de message', fr: 'J’espère que tout le monde pourra venir.', en: 'I hope everybody can come.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'sentiment'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec la salle',
  frSub: 'Six tours, à voix haute',
  setting: "Tu appelles le service des salles de ta commune pour réserver la salle du haut, un vendredi soir de juin. Monsieur Bary décroche.",
  turns: [
    {
      ai: 'Service des salles, bonjour.', en: 'Room bookings, good morning.',
      user: 'Bonjour monsieur. Il faut que je réserve la salle du haut pour le vingt et un.',
      userEn: 'Hello sir. I need to book the upstairs room for the twenty-first. (Necessity: il faut que.)',
      alts: [
        { fr: 'Bonjour monsieur. Je voudrais que nous réservions la salle du haut pour le vingt et un.', en: 'Hello sir. I would like us to book the upstairs room for the twenty-first.' },
        { fr: 'Bonjour monsieur. J’espère que la salle du haut est encore libre le vingt et un.', en: 'Hello sir. I hope the upstairs room is still free on the twenty-first. (Espérer, so the ordinary form.)' },
      ],
    },
    {
      ai: 'Vous serez combien ?', en: 'How many of you will there be?',
      user: 'Une quinzaine. J’ai peur que la salle soit trop petite pour quinze personnes.',
      userEn: 'About fifteen. I am afraid the room is too small for fifteen people. (A feeling: avoir peur que.)',
      alts: [
        { fr: 'Une quinzaine. Il est possible que nous soyons vingt, en fait.', en: 'About fifteen. We may in fact be twenty.' },
        { fr: 'Une quinzaine. Je pense que la salle est assez grande.', en: 'About fifteen. I think the room is big enough. (An assertion, so nothing changes.)' },
      ],
    },
    {
      ai: 'Elle tient vingt personnes debout, pas assises.', en: 'It holds twenty standing, not seated.',
      user: 'Bien que ce soit un peu juste, nous prendrons celle-là.',
      userEn: 'Although it is a bit tight, we will take that one. (Concession: bien que.)',
      alts: [
        { fr: 'Quoique ce soit un peu juste, nous prendrons celle-là.', en: 'Although it is a bit tight, we will take that one.' },
        { fr: 'Même si c’est un peu juste, nous prendrons celle-là.', en: 'Even if it is a bit tight, we will take that one. (Même si is a si, so the ordinary form.)' },
      ],
    },
    {
      ai: 'Il faudra rendre les clés avant huit heures le lendemain.', en: 'You will have to return the keys before eight the next day.',
      user: 'D’accord. Il faut donc que quelqu’un vienne les rapporter le matin.',
      userEn: 'All right. So somebody has to come and bring them back in the morning. (Necessity again, with venir.)',
      alts: [
        { fr: 'D’accord. Je veux que Malik s’en occupe, il habite à côté.', en: 'All right. I want Malik to do it, he lives nearby.' },
        { fr: 'D’accord. Avant que le service ouvre, quelqu’un passera.', en: 'All right. Somebody will come by before the office opens. (Avant que, so the door is open.)' },
      ],
    },
    {
      ai: 'Il y a un traiteur agréé, si vous voulez.', en: 'There is an approved caterer, if you like.',
      user: 'Merci. Je doute qu’il puisse livrer un vendredi soir.',
      userEn: 'Thank you. I doubt he can deliver on a Friday evening. (Doubt: douter que.)',
      alts: [
        { fr: 'Merci. Il est possible que nous prenions la boulangerie du coin.', en: 'Thank you. We may go to the bakery on the corner.' },
        { fr: 'Merci. Il est probable que nous commandons ailleurs.', en: 'Thank you. We will probably order elsewhere. (Il est probable que, so the ordinary form.)' },
      ],
    },
    {
      ai: 'Je vous envoie la confirmation ce soir.', en: 'I will send you the confirmation this evening.',
      user: 'Parfait. J’espère que tout le monde pourra venir.',
      userEn: 'Perfect. I hope everybody can come. (Espérer, so the ordinary form.)',
      alts: [
        { fr: 'Parfait. Je suis content que ce soit réglé avant le week-end.', en: 'Perfect. I am glad it is settled before the weekend.' },
        { fr: 'Parfait. Avant que j’oublie, la salle a-t-elle un four ?', en: 'Perfect. Before I forget, does the room have an oven? (Avant que, on an -er verb.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'doute', 'liens'],
};

/** THE GRADED TASK. Written, 110 to 150 words, `skill: 'PE'`, because a
 *  message is where a learner actually has to change key four times in ten
 *  lines, and where the keys that do NOT open are easiest to see. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Organise quelque chose par écrit',
  frSub: 'Mission écrite',
  brief: "Tu organises quelque chose à plusieurs : un pot de départ, un week-end, un déménagement, un projet au travail. Écris le message que tu envoies au groupe. Dis ce qui doit être fait, ce que tu veux, ce qui te fait plaisir et ce dont tu doutes. Adresse-toi à des gens que tu tutoies.",
  briefEn: 'You are organising something with other people: a leaving do, a weekend away, a move, a work project. Write the message you send to the group, saying what has to be done, what you want, what pleases you and what you doubt.',
  produce: "Écris un message de 110 à 150 mots. Il doit contenir : au moins quatre clés différentes prises dans au moins trois familles, au moins un lien qui finit par que, et au moins une expression qui n'ouvre pas la porte, écrite correctement avec la forme ordinaire.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'cles',
        label: 'La bonne forme après chaque clé',
        maxPoints: 4,
        descriptors: [
          "4 : Derrière chaque clé, la forme est la bonne. Ce qui devait changer a changé, ce qui devait rester est resté.",
          "3 : Une seule clé porte la mauvaise forme. Tout le reste tient.",
          "2 : Deux ou trois clés portent la mauvaise forme, souvent les mêmes : espérer, probable, ou une opinion niée.",
          "1 : Le subjonctif est mis derrière chaque que, ou il n'apparaît nulle part.",
        ],
      },
      {
        key: 'familles',
        label: 'Trois familles au moins',
        maxPoints: 3,
        descriptors: [
          "3 : Quatre clés différentes au moins, prises dans trois familles ou plus, et au moins un lien qui finit par que.",
          "2 : Trois clés différentes, ou quatre clés prises dans deux familles seulement.",
          "1 : Une seule clé répétée dans tout le message, presque toujours il faut que.",
        ],
      },
      {
        key: 'indicatif',
        label: 'Une clé qui n’ouvre pas',
        maxPoints: 3,
        descriptors: [
          "3 : Au moins une expression qui n'ouvre pas la porte, écrite avec la forme ordinaire : j'espère que, je pense que, parce que.",
          "2 : Une telle expression est présente mais suivie d'un subjonctif.",
          "1 : Aucune expression de ce genre dans le message, donc rien ne prouve que tu sais t'arrêter.",
        ],
      },
      {
        key: 'message',
        label: 'Un message utilisable',
        maxPoints: 2,
        descriptors: [
          "2 : Le groupe sait quoi faire après une seule lecture. La longueur est dans les bornes et le ton est celui d'un message entre gens qui se tutoient.",
          "1 : Le lecteur doit relire pour savoir ce qu'on lui demande, ou la longueur sort des bornes.",
        ],
      },
    ],
  },
  scaffold: ['Il faut que', 'Je voudrais que', 'Je suis content que', 'Je doute que', 'Bien que', 'Avant que', 'J’espère que', 'Dites-moi vite'],
  modelAnswer: "Salut à tous,\n\nIl faut que nous réservions la salle du haut avant vendredi, sinon le service des sports la prend. Je voudrais que chacun me dise s'il vient, même pour dire non : j'ai besoin d'un chiffre avant jeudi.\n\nJe suis content que Malik s'occupe de la musique, ça m'enlève un vrai souci. Bien que le budget soit serré, nous pouvons louer dix chaises de plus.\n\nJe doute que le traiteur accepte une commande le samedi, donc je vais appeler la boulangerie à la place. J'espère que tout le monde pourra passer, même une demi-heure.\n\nAvant que vous répondiez, regardez bien la date : c'est le vendredi vingt et un, pas le vingt-huit.\n\nMerci, et dites-moi vite.\nInès",
  modelAnswerEn: "Hi everyone. We have to book the upstairs room before Friday, or the sports department will take it. I would like everybody to tell me whether they are coming, even to say no: I need a number before Thursday. I am glad Malik is taking care of the music, that is one real worry off my mind. Although the budget is tight, we can hire ten more chairs. I doubt the caterer will accept an order on a Saturday, so I am going to ring the bakery instead. I hope everybody can drop in, even for half an hour. Before you answer, look carefully at the date: it is Friday the twenty-first, not the twenty-eighth. Thanks, and tell me quickly. Inès",
  watchFor: [
    { pattern: 'The subjunctive placed behind every que, including after espérer que, il me semble que, il est probable que and parce que.', criterion: 'cles', feedback: "Tu ouvres toutes les portes. Regarde l'expression devant chaque que : la moitié n'ouvre pas.", ref: 'a9-cartes' },
    { pattern: 'The ordinary form left after espérer que is CORRECT and must not be marked; the error is the opposite one, j’espère que tu sois.', criterion: 'cles', feedback: "Bien vu : espérer garde la forme ordinaire. C'est exactement ce qu'il fallait écrire.", ref: 'a9-construire' },
    { pattern: 'The present indicative left after a verb of wanting (je veux que tu viens, je voudrais que chacun me dit).', criterion: 'cles', feedback: "Après un verbe de volonté, la forme change. Ils viennent, donc que tu viennes.", ref: 'a2-construire' },
    { pattern: 'The present indicative left after an impersonal necessity (il faut que nous réservons, il est important que vous arrivez).', criterion: 'cles', feedback: "Il faut que ouvre la porte. Nous réservons devient que nous réservions.", ref: 'a3-construire' },
    { pattern: 'The present indicative left after a feeling, on the reasoning that the fact is certain (je suis content que Malik s’occupe written s’occupe de, or que tu es là).', criterion: 'cles', feedback: "Le fait est sûr, et la clé est un sentiment : la forme change quand même.", ref: 'a4-cartes' },
    { pattern: 'The subjunctive used after a positive opinion (je pense que ce soit, je crois que ce soit).', criterion: 'cles', feedback: "À la forme positive, tu affirmes. Je pense que c'est, je crois que c'est.", ref: 'a6-focus' },
    { pattern: 'The ordinary form kept after a negated opinion (je ne pense pas que c’est, je ne suis pas sûr que c’est).', criterion: 'cles', feedback: "La négation a ouvert la porte : je ne pense pas que ce soit.", ref: 'a6-construire' },
    { pattern: 'The subjunctive carried across from avant que to après que, or to pendant que and parce que.', criterion: 'cles', feedback: "Après que et parce que racontent des faits réels, et la forme ne bouge pas.", ref: 'a8-piege' },
    { pattern: 'Only one carrier used for the whole message, almost always il faut que repeated four or five times.', criterion: 'familles', feedback: "Tu as cinq familles. Je voudrais que, je suis content que et bien que changent le rythme autant que le sens.", ref: 'a10-cartes' },
    { pattern: 'No connector ending in que anywhere in the message, so bien que, avant que and pour que are all absent.', criterion: 'familles', feedback: "Un message qui organise quelque chose contient presque toujours un avant que ou un pour que.", ref: 'a7-table' },
    { pattern: 'No expression that keeps the indicative, so the message never shows that the writer knows when to stop.', criterion: 'indicatif', feedback: "Ajoute une ligne avec j'espère que ou parce que. Savoir ne rien changer fait partie du travail.", ref: 'a9-lecture' },
    { pattern: 'An infinitive placed directly after que (il faut que réserver, je voudrais que venir).', criterion: 'message', feedback: "Après que viennent un sujet et un verbe conjugué. Il faut que nous réservions.", ref: 'a1-reperer' },
  ],
  graderNotes: [
    'Judge the CHOICE of form against the expression in front of que, and nothing else. Whether the learner picked a good expression for the situation is style, not grammar, and is not scored.',
    'Do NOT score subjunctive against infinitive in either direction (Paul, 2026-09-24). « Il faut partir » and « il faut que je parte » are both correct here, and the same-subject rule is the next lesson’s topic. If a learner writes « je veux que je parte », note it in the comment and take no point.',
    'Do NOT require or reward the past subjunctive. It is outside B1. If « que j’aie fait » appears and is correct, accept it silently.',
    'A form that is spelled identically in both moods (an -er verb in the first, second or third person singular, or in the third plural) is CORRECT whichever mood the learner meant. Do not mark it and do not credit it under « cles ».',
    'Accept « il faudrait que » and « j’aimerais que » as conditional variants of « il faut que » and « j’aime que ». They change the tone and not the form.',
    'Accept a lone expletive « ne » after avant que, à moins que and avoir peur que, and accept its absence. Both are current French.',
    'Word count EXCLUDES the greeting line and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance before criterion « message » loses its point.',
    'The writer’s gender is unknown: judge adjective agreement for internal consistency only. « Je suis content » and « je suis contente » are both right.',
    'Accept regional usage: courriel and e-mail, the Belgian and Swiss number words, and Québécois vocabulary.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** The join between the lesson and the drills. Every authored sentence and
 *  chunk carries `voiceflash`; not one of the 54 imports does, so none is
 *  named here. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis les clés à voix haute',
  frSub: 'Les cinq familles, sans réfléchir',
  skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['cle', 'liens'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-cle',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la volonté', v: 'vouloir, souhaiter, exiger, préférer', say: 'Je veux que tu me rappelles avant midi.',
      detail: { title: 'La volonté', body: "Quelqu'un veut la chose, et elle n'est pas encore là. EN: somebody wants it and it is not there yet.", say: 'Je préfère que nous prenions le train.' } },
    { k: 'la nécessité', v: 'il faut, il est important, il vaut mieux', say: 'Il faut que je parte maintenant.',
      detail: { title: 'La nécessité', body: "Un « il » qui ne désigne personne, devant une chose qui doit arriver. EN: an il that stands for nobody, in front of something that must happen.", say: 'Il est temps que nous prenions une décision.' } },
    { k: 'le sentiment', v: 'content, triste, désolé, peur, dommage', say: 'Je suis content que tu prennes des vacances.',
      detail: { title: 'Le sentiment', body: "Le fait est sûr, et la phrase dit ce qu'il te fait. EN: the fact is certain, and the sentence says what it does to you.", say: 'C’est dommage que le musée ferme à cinq heures.' } },
    { k: 'le doute', v: 'douter, il est possible, il se peut', say: 'Je doute que ce train parte à l’heure.',
      detail: { title: 'Le doute', body: "Tu refuses de donner la chose pour vraie. Attention à il est probable que. EN: you refuse to give the thing as true; watch out for il est probable que.", say: 'Il se peut que la salle soit déjà réservée.' } },
    { k: 'les liens', v: 'bien que, pour que, avant que, sans que', say: 'Bien que la salle soit petite, tout le monde tient.',
      detail: { title: 'Les liens', body: "Des mots de liaison qui portent leur que. Tous ouvrent la porte. EN: connectors that carry their own que, and all of them open the door.", say: 'Attends ici jusqu’à ce que je revienne.' } },
    { k: 'ce qui n’ouvre pas', v: 'espérer, il me semble, probable, parce que', say: 'J’espère que tout se passera bien.',
      detail: { title: 'Ce qui n’ouvre pas', body: "L'expression donne la chose pour vraie, donc le verbe ne bouge pas. EN: the expression gives the thing as true, so the verb does not move.", say: 'Il est probable que le bureau est fermé demain.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cle', 'doute', 'liens'],
};

const A11_PROGRES: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progres',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu places les cinq familles sans y penser, tu tiens la bascule de la négation et tu sais t'arrêter devant espérer que et il est probable que. Ce qui reste fragile, c'est la vitesse : en parlant, tu n'as pas le temps de relire le mot qui est devant le que. La seule façon de gagner ce temps est de faire passer les clés fréquentes en mémoire directe, comme des blocs. Avant l'examen, prends les huit cartes de l'acte 10 et dis chacune dans une phrase entière, pas isolée. Puis reprends ton message et souligne chaque que : celles que tu as dû vérifier sont celles à revoir. EN: Say each of the eight cards inside a whole sentence rather than on its own, then underline every que in your own message; the ones you had to check are the ones to work on.",
  stats: [
    { k: 'Les familles', v: 'volonté, nécessité, sentiment, doute, liens' },
    { k: 'La bascule', v: 'cinq clés qui changent avec ne pas' },
    { k: 'Les liens', v: 'dix mots qui finissent par que' },
    { k: 'Ce qui ferme', v: 'espérer, me semble, probable, parce que' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act. Each round's target is a distinct errorTrigger, so a failed round
 *  fires that round's own drill.
 *
 *  `fold()` strips commas, accents, apostrophes and hyphens, so no answer
 *  here turns on one: every contrast is a whole word or a verb ending. Every
 *  typeIn and errorSpot carries `prompt`, every listenChoose carries `say`.
 *  Correct-answer slots are scattered by hand and measured. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
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
      id: 'r1-cle', label: 'La clé', targets: ['cle-ignoree'],
      questions: [
        mc('Le mot « que » suffit-il à faire un subjonctif ?', ['oui, toujours', 'non, jamais tout seul', 'seulement à l’écrit'], 1,
          "J'espère que et parce que portent un que et ne changent rien. EN: j'espère que and parce que carry a que and change nothing.", 'a1-cle'),
        mc('Qu’est-ce qui décide de la forme du verbe après que ?', ['le sujet', 'la longueur de la phrase', 'l’expression écrite devant'], 2,
          `${REFRAME} EN: ${REFRAME_EN}`, 'a1-reperer'),
        mc('Combien de familles ouvrent la porte dans cette leçon ?', ['cinq', 'deux', 'dix'], 0,
          "Volonté, nécessité, sentiment, doute et les liens. EN: will, necessity, feeling, doubt and the connectors.", 'a1-check'),
        mc('« J’espère que tu viens » : pourquoi viens et non viennes ?', ['espérer n’ouvre pas la porte', 'venir est irrégulier'], 0,
          "La clé décide, et celle-là ne change rien. EN: the key decides, and this one changes nothing.", 'a1-scene'),
        tI('Complète avec le verbe venir.', 'Je veux que tu ... avec nous.', 'Je veux que tu viennes avec nous.',
          "Vouloir que ouvre la porte. EN: vouloir que opens the door.", 'a1-lecture'),
        tI('Complète avec le verbe venir.', 'J’espère que tu ... avec nous.', 'J’espère que tu viens avec nous.',
          "La même phrase, une clé qui n'ouvre pas. EN: the same sentence with a key that does not open.", 'a1-cas'),
        eS('Je doute que tu viens avec nous.', 'Je doute que tu viennes avec nous.',
          "Douter que ouvre la porte. EN: douter que opens the door.", 'a1-reperer'),
        lC('Écoute. Cette clé ouvre-t-elle la porte ?', 'Je sais que tu viens avec nous.', ['oui', 'non'], 1,
          "Je sais que donne la chose pour vraie. EN: je sais que gives the thing as true.", 'a1-cle'),
      ],
    },
    {
      id: 'r2-volonte', label: 'La volonté', targets: ['volonte-indicatif'],
      questions: [
        mc('Vouloir, souhaiter, exiger, préférer : que font-ils au verbe qui suit ?', ['rien', 'ils le mettent au futur', 'ils le mettent au subjonctif'], 2,
          "Six clés, une seule porte. EN: six keys, one door.", 'a2-cartes'),
        mc('Pourquoi la volonté ouvre-t-elle la porte ?', ['le verbe est long', 'la chose n’est pas encore arrivée', 'le sujet est une personne'], 1,
          "Tu demandes un fait, tu ne le racontes pas. EN: you are asking for a fact, not reporting one.", 'a2-check'),
        mc('« Je voudrais que » ouvre-t-il comme « je veux que » ?', ['oui, seul le ton change', 'non, il ferme la porte'], 0,
          "Le conditionnel adoucit la demande et rien d'autre. EN: the conditional softens the request and nothing else.", 'a2-table'),
        mc('Laquelle de ces clés n’est pas une clé de volonté ?', ['exiger que', 'parce que', 'préférer que'], 1,
          "Parce que raconte une cause réelle. EN: parce que reports a real cause.", 'a2-construire'),
        tI('Complète avec le verbe finir.', 'Le professeur veut que nous ... avant midi.', 'Le professeur veut que nous finissions avant midi.',
          "Ils finissent, moins -ent, plus -ions. EN: ils finissent, minus -ent, plus -ions.", 'a2-construire'),
        tI('Complète avec le verbe avoir.', 'Je souhaite que tu ... un bon voyage.', 'Je souhaite que tu aies un bon voyage.',
          "Souhaiter que ouvre la porte, et avoir donne aies. EN: souhaiter que opens the door and avoir gives aies.", 'a2-erreurs'),
        eS('Le directeur exige que chaque employé signera le règlement.', 'Le directeur exige que chaque employé signe le règlement.',
          "Le futur semble logique, et le français met le subjonctif. EN: the future feels logical and French uses the subjunctive.", 'a2-erreurs'),
        lC('Écoute. Qui veut quelque chose ?', 'Ma sœur souhaite que nous soyons là pour son anniversaire.', ['ma sœur', 'moi', 'personne'], 0,
          "Souhaiter que : quelqu'un veut. EN: souhaiter que, so somebody wants.", 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-necessite', label: 'La nécessité', targets: ['necessite-indicatif'],
      questions: [
        mc('Comment commencent presque toutes les clés de nécessité ?', ['par je', 'par un nom', 'par il'], 2,
          "Il faut, il est important, il vaut mieux, il est temps. EN: il faut, il est important, il vaut mieux, il est temps.", 'a3-cartes'),
        mc('Ce « il » désigne-t-il quelqu’un ?', ['non, personne', 'oui, celui qui parle'], 0,
          "C'est une place vide devant la nécessité. EN: it is an empty slot in front of the necessity.", 'a3-check'),
        mc('Il vaut mieux que et il est essentiel que ouvrent-ils la même porte ?', ['non', 'seulement la première', 'oui, seule la force change'], 2,
          "Le ton diffère, la forme est la même. EN: the tone differs, the form is the same.", 'a3-construire'),
        tI('Complète avec le verbe arriver.', 'Il est important que vous ... à l’heure.', 'Il est important que vous arriviez à l’heure.',
          "Vous arrivez au présent, que vous arriviez au subjonctif. EN: vous arrivez in the present, arriviez in the subjunctive.", 'a3-choisir'),
        tI('Complète avec le verbe prendre.', 'Il est temps que nous ... une décision.', 'Il est temps que nous prenions une décision.',
          "Nous sort de la botte : prenions. EN: nous takes the other stem, prenions.", 'a3-exemples'),
        tI('Complète avec le verbe savoir.', 'Il est utile que tout le monde ... où sont les clés.', 'Il est utile que tout le monde sache où sont les clés.',
          "Savoir donne sach- au subjonctif. EN: savoir gives sach- in the subjunctive.", 'a3-lecture'),
        eS('Il faut que nous réservons la salle avant vendredi.', 'Il faut que nous réservions la salle avant vendredi.',
          "Il faut que ouvre la porte : il manque un i. EN: il faut que opens the door, and an i is missing.", 'a3-construire'),
        lC('Écoute. Quelle famille entends-tu ?', 'Il vaut mieux que tu leur téléphones toi-même.', ['la volonté', 'la nécessité'], 1,
          "Il vaut mieux que : personne ne veut, c'est un conseil. EN: il vaut mieux que: nobody wants, it is advice.", 'a3-dictee'),
      ],
    },
    {
      id: 'r4-sentiment', label: 'Le sentiment', targets: ['sentiment-indicatif'],
      questions: [
        mc('Avec un sentiment, la chose derrière que est-elle douteuse ?', ['oui, toujours', 'seulement avec peur', 'non, le plus souvent elle est sûre'], 2,
          "Je suis content que tu sois là : tu es là. EN: je suis content que tu sois là means you are here.", 'a4-cartes'),
        mc('Content, triste, désolé, fier : que font-ils au verbe ?', ['rien', 'ils le mettent au futur', 'ils ouvrent la porte'], 2,
          "Sept clés, une porte. EN: seven keys, one door.", 'a4-check'),
        mc('« C’est dommage que » appartient à quelle famille ?', ['la nécessité', 'le doute', 'le sentiment'], 2,
          "C'est un regret, pas une obligation. EN: it is a regret, not an obligation.", 'a4-construire'),
        mc('Après avoir peur que, un « ne » seul veut-il dire non ?', ['oui', 'non, tu peux l’ignorer', 'seulement à l’écrit'], 1,
          "Il ne nie rien du tout. EN: it negates nothing at all.", 'a4-cartes'),
        tI('Complète avec le verbe être.', 'Je suis content que tu ... là.', 'Je suis content que tu sois là.',
          "Le fait est sûr, et le sentiment ouvre quand même. EN: the fact is certain and the feeling opens anyway.", 'a4-erreurs'),
        tI('Complète avec le verbe partir.', 'Nous sommes tristes que vous ... si vite.', 'Nous sommes tristes que vous partiez si vite.',
          "Vous partez devient que vous partiez. EN: vous partez becomes que vous partiez.", 'a4-exemples'),
        eS('J’ai peur qu’il est en retard.', 'J’ai peur qu’il soit en retard.',
          "Tu crains un fait probable, et avoir peur que ouvre la porte. EN: you fear a likely fact, and avoir peur que opens the door.", 'a4-erreurs'),
        lC('Écoute. Quel sentiment entends-tu ?', 'Je regrette que nous ne puissions pas rester plus longtemps.', ['la joie', 'la surprise', 'le regret'], 2,
          "Regretter que : on voudrait, et on ne peut pas. EN: regretter que: you would like to and cannot.", 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-doute', label: 'Le doute', targets: ['doute-assure'],
      questions: [
        mc('Pourquoi le doute ouvre-t-il la porte ?', ['la phrase est négative', 'le verbe est irrégulier', 'tu ne donnes pas la chose pour vraie'], 2,
          "Tu refuses de présenter le fait comme un fait. EN: you refuse to present the fact as a fact.", 'a5-cartes'),
        mc('Il est possible que et il est probable que : lequel ouvre ?', ['probable', 'possible', 'les deux'], 1,
          "Presque vrai est traité comme vrai. EN: almost true is treated as true.", 'a5-table'),
        mc('Il semble que ouvre-t-il la porte ?', ['oui', 'non'], 0,
          "Sans « me », personne ne prend la chose en charge. EN: without me, nobody takes responsibility.", 'a5-check'),
        mc('« Il est peu probable que » ouvre-t-elle la porte ?', ['oui, peu probable veut dire douteux', 'non, comme il est probable que'], 0,
          "Peu probable veut dire improbable. EN: peu probable means unlikely.", 'a5-ecoute'),
        tI('Complète avec le verbe partir.', 'Je doute que ce train ... à l’heure.', 'Je doute que ce train parte à l’heure.',
          "Douter que ouvre la porte. EN: douter que opens the door.", 'a5-construire'),
        tI('Complète avec le verbe être.', 'Il se peut que la salle ... déjà réservée.', 'Il se peut que la salle soit déjà réservée.',
          "Il se peut que laisse la chose en suspens. EN: il se peut que leaves the thing hanging.", 'a5-exemples'),
        eS('Je doute que ce studio est assez grand pour deux.', 'Je doute que ce studio soit assez grand pour deux.',
          "Après douter que, la forme change. EN: after douter que, the form changes.", 'a5-construire'),
        lC('Écoute. La porte est-elle ouverte ?', 'Il est probable que la salle est libre jeudi.', ['oui', 'non'], 1,
          "Probable donne la chose pour presque vraie. EN: probable gives the thing as almost true.", 'a5-histoire'),
      ],
    },
    {
      id: 'r6-bascule', label: 'La bascule', targets: ['bascule-ratee'],
      questions: [
        mc('Je pense que et je ne pense pas que prennent-ils la même forme ?', ['oui', 'non, la seconde ouvre la porte', 'non, la première ouvre la porte'], 1,
          "Nier son opinion, c'est arrêter d'affirmer. EN: denying your opinion is ceasing to assert.", 'a6-cartes'),
        mc('Qu’est-ce qui a changé entre les deux phrases ?', ['le verbe', 'le sujet', 'la négation'], 2,
          "Ne et pas, et rien d'autre. EN: ne and pas, and nothing else.", 'a6-construire'),
        mc('Combien de clés basculent de cette façon ?', ['une', 'dix', 'cinq'], 2,
          "Penser, croire, être sûr, trouver, il est vrai. EN: penser, croire, être sûr, trouver, il est vrai.", 'a6-focus'),
        mc('« Je ne crois pas que le magasin ouvre » : la forme se voit-elle ?', ['non, c’est un verbe en -er', 'oui, elle est très différente'], 0,
          "Elle est là et elle ne se voit pas. EN: it is there and it does not show.", 'a6-choisir'),
        tI('Complète avec le verbe être.', 'Je ne pense pas que cette route ... plus courte.', 'Je ne pense pas que cette route soit plus courte.',
          "La négation a ouvert la porte. EN: the negative opened the door.", 'a6-lecture'),
        tI('Complète avec le verbe être.', 'Je pense que cette route ... plus courte.', 'Je pense que cette route est plus courte.',
          "À la forme positive, tu affirmes. EN: when positive, you are asserting.", 'a6-lecture'),
        eS('Je ne suis pas sûr que la banque est ouverte à midi.', 'Je ne suis pas sûr que la banque soit ouverte à midi.',
          "Une certitude niée devient un doute. EN: a denied certainty becomes a doubt.", 'a6-piege'),
        lC('Écoute. Cette phrase contient-elle une négation ?', 'Je crois que la ponctualité est essentielle pour réussir au travail.', ['non', 'oui'], 0,
          "Aucun ne, aucun pas : c'est une affirmation. EN: no ne and no pas, so it is an assertion.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-liens', label: 'Les liens', targets: ['lien-plat'],
      questions: [
        mc('Pourquoi pour que ouvre-t-il la porte ?', ['il est court', 'il finit par que', 'le but n’est pas atteint'], 2,
          "On ne raconte pas le but, on le vise. EN: you do not report the goal, you aim at it.", 'a7-cartes'),
        mc('Avec bien que, la chose admise est-elle vraie ?', ['oui, et on la dépasse', 'non, c’est une hypothèse'], 0,
          "Bien que la salle soit petite : elle l'est vraiment. EN: bien que la salle soit petite means it really is small.", 'a7-check'),
        mc('Même si prend-il le subjonctif ?', ['oui, comme bien que', 'seulement à l’écrit', 'non, jamais'], 2,
          "Un si ne bascule jamais. EN: a si never swings.", 'a7-table'),
        mc('Quoique, en un seul mot, veut dire...', ['bien que', 'peu importe ce que'], 0,
          "En deux mots, quoi que veut dire peu importe ce que. EN: in two words, quoi que means whatever.", 'a7-cartes'),
        tI('Complète avec le verbe pouvoir.', 'Je te laisse la clé pour que tu ... entrer.', 'Je te laisse la clé pour que tu puisses entrer.',
          "Pour que ouvre la porte, et pouvoir donne puiss-. EN: pour que opens the door and pouvoir gives puiss-.", 'a7-construire'),
        tI('Complète avec le verbe aller.', 'Je te prête ma voiture pour que tu ... à la gare.', 'Je te prête ma voiture pour que tu ailles à la gare.',
          "Aller donne aill- au subjonctif. EN: aller gives aill- in the subjunctive.", 'a7-choisir'),
        eS('Bien que la salle est petite, tout le monde tient.', 'Bien que la salle soit petite, tout le monde tient.',
          "La salle est vraiment petite, et bien que ouvre quand même. EN: the room really is small, and bien que opens anyway.", 'a7-erreurs'),
        lC('Écoute. Quel groupe de liens entends-tu ?', 'Nous partons tôt afin que les enfants dorment dans la voiture.', ['la concession', 'le but'], 1,
          "Afin que annonce un but. EN: afin que announces a goal.", 'a7-histoire'),
      ],
    },
    {
      id: 'r8-temps', label: 'Le temps et la condition', targets: ['temps-condition'],
      questions: [
        mc('Lequel des deux garde la forme ordinaire ?', ['avant que', 'les deux', 'après que'], 2,
          "Après que, la chose est déjà faite. EN: after après que, the thing is already done.", 'a8-cartes'),
        mc('Jusqu’à ce que ouvre-t-il la porte ?', ['oui, la fin n’est pas là', 'non'], 0,
          "Tant que la fin n'est pas arrivée, la porte est ouverte. EN: as long as the end has not come, the door is open.", 'a8-check'),
        mc('À condition que, sans que, pourvu que, à moins que : combien ouvrent ?', ['deux', 'les quatre', 'aucune'], 1,
          "Les quatre posent quelque chose qui n'est pas réglé. EN: all four set up something unsettled.", 'a8-construire'),
        mc('Pendant que ouvre-t-il la porte ?', ['oui', 'non, les deux choses sont réelles'], 1,
          "Ce qui est déjà vrai reste à l'indicatif. EN: what is already true stays in the indicative.", 'a8-piege'),
        tI('Complète avec le verbe revenir.', 'Attends ici jusqu’à ce que je ... .', 'Attends ici jusqu’à ce que je revienne.',
          "Mon retour n'a pas eu lieu. EN: my return has not happened.", 'a8-exemples'),
        tI('Complète avec le verbe faire.', 'Sors le chien avant qu’il ... nuit.', 'Sors le chien avant qu’il fasse nuit.',
          "Avant que ouvre la porte, et faire donne fass-. EN: avant que opens the door and faire gives fass-.", 'a8-construire'),
        eS('Tu peux rester, à condition que tu fais la vaisselle.', 'Tu peux rester, à condition que tu fasses la vaisselle.',
          "La condition est posée, pas remplie. EN: the condition is set, not met.", 'a8-piege'),
        lC('Écoute. La chose a-t-elle déjà eu lieu ?', 'Après que le film a commencé, personne ne parle plus.', ['oui', 'non'], 0,
          "Après que : c'est un fait, donc l'indicatif. EN: après que, so a fact and the indicative.", 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-indicatif', label: 'Ce qui ne le prend pas', targets: ['subjonctif-partout'],
      questions: [
        mc('J’espère que tu ... : quelle forme écris-tu ?', ['le subjonctif', 'la forme ordinaire'], 1,
          "Espérer ne bascule jamais. EN: espérer never swings.", 'a9-cartes'),
        mc('Laquelle des deux ouvre la porte ?', ['il me semble que', 'les deux', 'il semble que'], 2,
          "Sans le « me », personne ne prend la chose en charge. EN: without the me, nobody takes responsibility.", 'a9-check'),
        mc('Pourquoi ces clés ne changent-elles rien ?', ['elles donnent la chose pour vraie', 'elles n’ont pas de que'], 0,
          "Un fait donné garde la forme des faits. EN: a fact given keeps the form of facts.", 'a9-construire'),
        mc('Où est le doute dans « peut-être que Karim connaît la réponse » ?', ['dans le verbe', 'dans peut-être', 'dans le mot que'], 1,
          "Le doute est déjà dit, et le verbe n'a rien à ajouter. EN: the doubt is already said.", 'a9-construire'),
        tI('Complète avec le verbe venir.', 'J’espère que tu ... samedi.', 'J’espère que tu viens samedi.',
          "Espérer présente la chose comme ce qui va arriver. EN: espérer presents it as what will happen.", 'a9-piege'),
        tI('Complète avec le verbe connaître.', 'Il semble que personne ne ... cette rue.', 'Il semble que personne ne connaisse cette rue.',
          "Il semble que, sans me, ouvre la porte. EN: il semble que, with no me, opens the door.", 'a9-exemples'),
        eS('Il me semble que cette adresse soit fausse.', 'Il me semble que cette adresse est fausse.',
          "Avec « me », tu donnes ton impression comme un fait. EN: with me, you give your impression as a fact.", 'a9-piege'),
        lC('Écoute. Cette clé ouvre-t-elle la porte ?', 'Il est probable que le magasin ferme à sept heures.', ['non', 'oui'], 0,
          "Probable, donc la porte reste fermée. EN: probable, so the door stays shut.", 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-tri', label: 'Trier à froid', targets: ['tri-au-hasard'],
      questions: [
        mc('Que regardes-tu en premier devant une phrase avec que ?', ['le verbe', 'l’expression devant', 'la ponctuation'], 1,
          `${REFRAME} EN: ${REFRAME_EN}`, 'a10-check'),
        mc('Une clé n’ouvre pas. Pourquoi ?', ['elle n’a pas de que', 'elle est trop courte', 'elle donne la chose pour vraie'], 2,
          "C'est la seule règle qui couvre toute la liste. EN: that is the one rule covering the whole list.", 'a10-hacks'),
        mc('Une négation devant une opinion annonce...', ['une bascule', 'rien de spécial'], 0,
          "Je ne pense pas que, je ne crois pas que, il n'est pas sûr que. EN: je ne pense pas que, je ne crois pas que, il n'est pas sûr que.", 'a10-choisir'),
        mc('Bien que et parce que : laquelle ouvre la porte ?', ['parce que', 'les deux', 'bien que'], 2,
          "Une cause est un fait ; une concession admet un fait pour le dépasser. EN: a cause is a fact, a concession admits one to go past it.", 'a10-construire'),
        tI('Complète avec le verbe rentrer.', 'Il faut que nous ... avant la nuit.', 'Il faut que nous rentrions avant la nuit.',
          "Il faut que ouvre la porte. EN: il faut que opens the door.", 'a10-dictee'),
        tI('Complète avec le verbe être.', 'Il est probable que le bureau ... fermé demain.', 'Il est probable que le bureau est fermé demain.',
          "Probable ne change rien. EN: probable changes nothing.", 'a10-erreurs'),
        eS('J’espère que tu sois là demain.', 'J’espère que tu seras là demain.',
          "Espérer ressemble à vouloir et ne se comporte pas comme lui. EN: espérer looks like vouloir and does not behave like it.", 'a10-erreurs'),
        lC('Écoute. Quelle famille entends-tu ?', 'Je suis heureux que tu aies ce poste.', ['le doute', 'le sentiment', 'la nécessité'], 1,
          "Heureux que : un sentiment sur un fait sûr. EN: heureux que: a feeling about a certain fact.", 'a10-histoire'),
      ],
    },
    {
      id: 'r11-ecrire', label: 'Écrire', targets: ['ecrit-monotone'],
      questions: [
        mc('Dans ton message, combien de clés différentes vises-tu ?', ['au moins quatre', 'une seule, répétée'], 0,
          "Une seule clé répétée rend le message plat. EN: one repeated key flattens the message.", 'a11-plan'),
        mc('Que doit contenir ton message en plus des clés qui ouvrent ?', ['deux points d’exclamation', 'une clé qui n’ouvre pas', 'un titre'], 1,
          "Savoir ne rien changer fait partie du travail. EN: knowing when to change nothing is part of the job.", 'a11-plan'),
        mc('Après « que », peux-tu écrire un infinitif ?', ['non, jamais', 'oui, si la phrase est courte'], 0,
          "Que appelle un sujet et un verbe conjugué. EN: que calls for a subject and a conjugated verb.", 'a11-cas'),
        mc('Quel est le premier geste du plan avant d’écrire ?', ['choisir une clé', 'compter les mots', 'dire le but en une ligne'], 2,
          "Le sens d'abord, la forme ensuite. EN: meaning first, form second.", 'a11-plan'),
        tI('Complète avec le verbe réserver.', 'Il faut que nous ... la salle avant vendredi.', 'Il faut que nous réservions la salle avant vendredi.',
          "Nous réservons devient que nous réservions. EN: nous réservons becomes que nous réservions.", 'a11-lecture'),
        tI('Complète avec le verbe pouvoir, au futur.', 'J’espère que tout le monde ... venir.', 'J’espère que tout le monde pourra venir.',
          "Espérer garde la forme ordinaire, ici au futur. EN: espérer keeps the ordinary form, here the future.", 'a11-lecture'),
        eS('J’espère que le traiteur puisse livrer le samedi.', 'J’espère que le traiteur peut livrer le samedi.',
          "Espérer ne bascule jamais, même devant un doute. EN: espérer never swings, even in front of a doubt.", 'a11-cheat'),
        lC('Écoute. Combien de clés différentes dans cette phrase ?', 'Il faut que nous partions tôt, bien que la route soit longue.', ['une', 'deux'], 1,
          "Il faut que, puis bien que. EN: il faut que, then bien que.", 'a11-scenario'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'la clé', back: 'l’expression écrite devant le que', say: 'Ce n’est pas le verbe qui décide.' },
    { front: 'la volonté', back: 'vouloir, souhaiter, désirer, exiger, demander, préférer', say: 'Je veux que tu me rappelles avant midi.' },
    { front: 'la nécessité', back: 'il faut, il est important, il vaut mieux, il est temps', say: 'Il est temps que nous prenions une décision.' },
    { front: 'le sentiment', back: 'content, triste, surpris, désolé, peur, dommage', say: 'Je suis content que tu prennes des vacances.' },
    { front: 'le doute', back: 'douter, il est possible, il se peut, il semble', say: 'Je doute que ce train parte à l’heure.' },
    { front: 'la bascule', back: 'je ne pense pas que, je ne crois pas que, je ne suis pas sûr que', say: 'Je ne pense pas que cette route soit plus courte.' },
    { front: 'les liens', back: 'pour que, bien que, avant que, jusqu’à ce que, sans que', say: 'Bien que la salle soit petite, tout le monde tient.' },
    { front: 'ce qui n’ouvre pas', back: 'espérer que, il me semble que, il est probable que, parce que', say: 'J’espère que tout se passera bien.' },
    { front: 'la paire la plus fine', back: 'il semble que ouvre, il me semble que non', say: 'Il semble que personne ne connaisse cette rue.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_BILAN: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-bilan',
  layer: 'core',
  title: 'Les déclencheurs, en résumé',
  body: `${REFRAME} Tu as maintenant les cinq familles qui ouvrent, la bascule de la négation, les dix liens qui finissent par que, et la liste de celles qui ne changent rien. Il reste une question que cette leçon n'a pas posée : quand dire « je veux que tu partes » et quand dire simplement « je veux partir ». C'est ${INFINITIF_REF}, et elle arrive juste après. EN: One question is left: when to say je veux que tu partes and when to say plain je veux partir.`,
  points: [
    "Cinq familles ouvrent la porte : volonté, nécessité, sentiment, doute, liens. EN: five families open the door.",
    "La négation d'une opinion la fait basculer : je ne pense pas que. EN: negating an opinion swings it.",
    "Espérer que, il me semble que et il est probable que ne changent rien. EN: espérer que, il me semble que and il est probable que change nothing.",
    "Devant un que, lis d'abord l'expression qui est devant. EN: in front of a que, read the expression in front of it first.",
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11',
    title: 'Écrire avec les déclencheurs',
    opener: {
      line: "Un message à un groupe demande quatre clés en dix lignes : ici tu écris le tien. EN: A message to a group needs four keys in ten lines: here you write yours.",
      imageRef: 'lessons/subjonctif-declencheurs/act11.jpg',
    },
    sections: [],
    milestone: "Tu écris un message entier en changeant de clé quatre fois, et tu sais où ne rien changer du tout. EN: You can write a whole message changing key four times, and you know where to change nothing at all.",
    estScreens: 116,
    restPoints: ['a11-scenario', 'a11-parler', 'a11-cheat', 'a11-quiz/r3-necessite', 'a11-quiz/r6-bascule', 'a11-quiz/r9-indicatif'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_CAS, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRES, A11_QUIZ, A11_REVIEW, A11_BILAN,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  {
    id: 'd-volonte', title: 'Qui veut quoi', format: 'mcq' as const,
    coach: 'Quelqu’un veut la chose, et elle n’est pas encore là. La forme change. EN: somebody wants it and it has not happened, so the form changes.',
    q: 'Le coach veut que nous ... prêts avant le match. (être)', opts: ['sommes', 'serons', 'soyons'], correct: 2,
    why: 'Vouloir que ouvre la porte : soyons. EN: vouloir que opens the door, so soyons.',
    items: [E(1150), E(1221), E(1223), E(1225), E(1226), E(1236)], audio: AUDIO,
  },
  {
    id: 'd-necessite', title: 'Il faut, et ce qui suit', format: 'mcq' as const,
    coach: 'Le il de il faut ne désigne personne. Après que, le verbe change quand même. EN: the il of il faut stands for nobody, and the verb still changes.',
    q: 'Il est important que vous ... à l’heure. (arriver)', opts: ['arriverez', 'arriviez', 'arrivez'], correct: 1,
    why: 'Vous arrivez au présent, que vous arriviez au subjonctif. EN: vous arrivez in the present, que vous arriviez in the subjunctive.',
    items: [E(1147), E(1242), E(1244), E(1245), E(1254), E(1255)], audio: AUDIO,
  },
  {
    id: 'd-sentiment', title: 'Sûr, et quand même', format: 'sort' as const,
    coach: 'Deux piles : la clé dit un sentiment, ou elle dit autre chose. EN: sort by whether the key states a feeling or something else.',
    buckets: ['un sentiment', 'autre chose'],
    items: [E(1151), E(1262), E(1264), E(1150), E(1147), E(1278)], audio: AUDIO,
  },
  {
    id: 'd-doute', title: 'Possible ou probable', format: 'mcq' as const,
    coach: 'Possible laisse la chose en suspens. Probable la donne pour presque vraie. EN: possible leaves it hanging, probable gives it as almost true.',
    q: 'Il est probable que la salle ... libre jeudi. (etre)', opts: ['est', 'soit'], correct: 0,
    why: 'Probable n ouvre pas la porte. EN: probable does not open the door.',
    items: [E(1278), E(1279), E(1280), E(1282), E(1292), E(1293)], audio: AUDIO,
  },
  {
    id: 'd-bascule', title: 'Deux petits mots', format: 'mcq' as const,
    coach: 'Cherche ne et pas avant de regarder le verbe. EN: look for ne and pas before you look at the verb.',
    q: 'Je ne pense pas que cette route ... plus courte. (etre)', opts: ['est', 'soit', 'sera'], correct: 1,
    why: 'La negation a ouvert la porte. EN: the negative opened the door.',
    items: [E(1296), E(1297), E(1298), E(1299), E(1312), E(1313)], audio: AUDIO,
  },
  {
    id: 'd-liens', title: 'Le but ou la concession', format: 'sort' as const,
    coach: 'Deux piles : le lien vise un but, ou il admet quelque chose. EN: sort by whether the connector aims at a goal or admits something.',
    buckets: ['un but', 'une concession'],
    items: [E(1316), E(1317), E(1320), E(1148), E(1319), E(1330)], audio: AUDIO,
  },
  {
    id: 'd-temps', title: 'Pas encore, ou deja', format: 'sort' as const,
    coach: 'Deux piles : la chose est encore a venir, ou elle a deja eu lieu. EN: sort by whether the thing is still to come or has already happened.',
    buckets: ['pas encore', 'deja fait'],
    items: [E(1149), E(1335), E(1336), E(1356), E(1355), E(1348)], audio: AUDIO,
  },
  {
    id: 'd-indicatif', title: 'Celles qui ne changent rien', format: 'mcq' as const,
    coach: 'Si la cle donne la chose pour vraie, le verbe ne bouge pas. EN: if the key gives the thing as true, the verb does not move.',
    q: 'J espere que tu ... samedi. (venir)', opts: ['viennes', 'viens', 'viendrais'], correct: 1,
    why: 'Esperer ne bascule jamais. EN: esperer never swings.',
    items: [E(1352), E(1353), E(1354), E(1355), E(1366), E(1367)], audio: AUDIO,
  },
  {
    id: 'd-tri', title: 'Les trois questions', format: 'flashcard' as const,
    coach: 'Pour chaque carte, dis a voix haute si la cle ouvre la porte ou non. EN: for each card, say aloud whether the key opens the door.',
    items: [E(1370), E(1371), E(1374), E(1375), E(1376), E(1377)], audio: AUDIO,
  },
  {
    id: 'd-ecrire', title: 'Changer de cle', format: 'flashcard' as const,
    coach: 'Pour chaque phrase, dis de quelle famille vient sa cle. EN: name the family each key comes from.',
    items: [E(1383), E(1385), E(1386), E(1388), E(1390), E(1391)], audio: AUDIO,
  },
  {
    id: 'd-cle', title: 'Ça ouvre, ça n’ouvre pas', format: 'sort' as const,
    coach: "Deux piles. Pour chaque expression, demande-toi si le verbe derrière elle va changer. EN: sort by whether the verb behind the expression changes.",
    buckets: ['ça ouvre la porte', 'ça laisse fermé'],
    items: [E(1150), E(1147), E(1278), E(1352), E(1354), E(1355)], audio: AUDIO,
  },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'volonte-indicatif', description: 'Keeps the present or the future after a verb of wanting, because the thing has not happened yet and the future feels like the natural tense for it.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-volonte', retest: 'd-volonte' },
  { id: 'necessite-indicatif', description: 'Treats an impersonal necessity as a plain statement of fact, because il faut que looks like a report about the world rather than a demand on it.', detectOn: ['a3-construire', 'a3-choisir', 'a3-check', 'a11-mission'], drill: 'd-necessite', retest: 'd-necessite' },
  { id: 'sentiment-indicatif', description: 'Reasons that the fact behind a feeling is certain, so it must take the form of facts, and writes je suis content que tu es là.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-sentiment', retest: 'd-sentiment' },
  { id: 'doute-assure', description: 'Puts a doubt expression in front of an ordinary verb form, or spreads the subjunctive onto il est probable que because it sounds like il est possible que.', detectOn: ['a5-construire', 'a5-ecoute', 'a5-check', 'a11-mission'], drill: 'd-doute', retest: 'd-doute' },
  { id: 'bascule-ratee', description: 'Keeps the indicative after a negated opinion, or spreads the subjunctive onto the positive one, because the verb looks unchanged in both sentences.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-bascule', retest: 'd-bascule' },
  { id: 'lien-plat', description: 'Writes the indicative after bien que because the admitted fact is real, or carries the subjunctive across to meme si, which is a si and never takes it.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-liens', retest: 'd-liens' },
  { id: 'temps-condition', description: 'Carries the subjunctive across from avant que to apres que and pendant que, or keeps the indicative after jusqu a ce que and a condition que because the plan feels settled.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'subjonctif-partout', description: 'Spreads the subjunctive onto every expression that carries a que, so esperer que, il me semble que, il est probable que and parce que all come out wrong.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-indicatif', retest: 'd-indicatif' },
  { id: 'tri-au-hasard', description: 'Chooses by feel rather than by looking at the expression, so the same sentence comes out differently on two consecutive readings.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-tri', retest: 'd-tri' },
  { id: 'ecrit-monotone', description: 'Writes a whole message with one key repeated and no expression that keeps the indicative, so nothing in it shows whether the writer can choose.', detectOn: ['a11-mission', 'a11-plan', 'a11-scenario'], drill: 'd-ecrire', retest: 'd-ecrire' },
  { id: 'cle-ignoree', description: 'Reads the word que as the signal and stops there, so every que gets a subjunctive and half of them are wrong.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-cle', retest: 'd-cle' },
];

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-15-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-15-tableau': "The house-share whiteboard (act 1), ONE female voice reading a narration that quotes four speakers. The five subjunctives (soit, vide, prête, soit, finissions) and the one indicative (se passe) are spoken at exactly the same weight: nothing in the delivery may hint that the last line is different, because noticing it is the learner's job.",
  'rec-b1-15-vestiaire': "The changing room (act 2), a male coach and one player, close and a little rushed, with a light room tone: studs on concrete if the studio can give it. The four subjunctives are thrown away inside the sentences; nobody in this recording knows they are using a mood.",
  'rec-b1-15-volonte': "The volonté deck (act 2), one voice, four cards. The six infinitives on card one are read as a list with an even beat, not as a lesson. The pair « je veux que / je voudrais que » is read as one line with a small pause: the second must sound politer, not slower.",
  'rec-b1-15-volonte-ecoute': "REQUIRED FOR THE EAR MISSION (act 2): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed, with only a normal breath between lines. The learner cannot see the text, so a second take or a second voice destroys the exercise. The trigger expression is never emphasised: if the reader leans on « exige », question four answers itself.",
  'rec-b1-15-reglement': "The hall rulebook (act 3), ONE voice reading a notice aloud, flat and official, as somebody reads a sign to a friend. The five subjunctives (signe, restent, soit, préveniez, remplace) are given no more weight than the words around them. The pencilled last line is read slightly faster, as an aside.",
  'rec-b1-15-necessite': "The nécessité deck (act 3), one voice, four cards. « il faut » and « il est » must be unstressed and run straight into what follows: [eel foh kuh], never [EEL FOH | kuh]. Card three reads « il faut que » and « il vaut mieux que » one after the other with the same pitch, so the difference is heard as tone and not as emphasis.",
  'rec-b1-15-depart': "The evening before (act 4), a mother, a brother and a daughter at a kitchen table in Lille, warm and unhurried, with plates being moved. Nothing in the delivery may sound uncertain: every fact in this scene is settled, and the act turns on the learner hearing that. One take.",
  'rec-b1-15-sentiment': "The sentiment deck (act 4), one voice, four cards. Card four must read « qu'il ne soit » with the ne completely unstressed and elided into the next word, because a stressed ne would teach exactly the negative meaning the card says it does not have.",
  'rec-b1-15-sentiment-ecoute': "REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The eight feelings are read as ordinary speech, not performed: no extra warmth on content and no gloom on triste, because question two asks the learner to hear the WORD rather than the acting.",
  'rec-b1-15-terrasse': "The cafe terrace (act 5), two female friends, a little tired and amused, with street noise and cups. The pair « il est possible que le serveur ait oublie » and « il est probable que la cuisine est debordee » comes forty seconds apart and must be read at the same speed and pitch: the difference the act teaches is a word, not a delivery.",
  'rec-b1-15-doute': "The doute deck (act 5), one voice, four cards. On card four, « possible » and « probable » must be equally weighted; if the reader stresses either one, the card answers its own question.",
  'rec-b1-15-doute-ecoute': "REQUIRED FOR THE EAR MISSION (act 5): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines two and three differ by one word and must otherwise sound identical. No pause, no stress and no change of pitch may mark the one line that keeps the indicative.",
  'rec-b1-15-reunion': "Outside the lift (act 6), a woman and a man leaving a meeting in Liege, brisk and slightly disagreeing but not cross. The four sentences carry the same room and the same verb: est, serons, soit, soyons must be spoken at the same speed, and the two negatives must not be leaned on. One take.",
  'rec-b1-15-bascule': "The bascule deck (act 6), one voice, four cards. Each card is a contrast pair read as one continuous line with a small pause at the middot. The ne of the negative half is elided and unstressed, as in speech: [zhuh nuh pahⁿss PA], never [zhuh NUH pahⁿss pa].",
  'rec-b1-15-piege-bascule': "The trap drill (act 6): the six card sentences read in order, ONE VOICE, at normal speed. The WRONG versions printed on the cards are NEVER spoken. Card six is the invisible one, so « ouvre » must sound exactly as it would in the present.",
  'rec-b1-15-bascule-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Four of them carry a negative and four do not, and the ne is elided every time, so what the learner has to catch is « pas », not a pause.",
  'rec-b1-15-atelier': "The repair workshop (act 7), two voices in a big echoey shed in Brussels, with tools and a radio far off. The five connectors must run straight into what follows, unstressed: [poor kuh], [byehⁿ kuh], [kwa-kuh]. If the reader pauses after each one the act becomes a spelling exercise.",
  'rec-b1-15-liens': "The liens deck (act 7), one voice, four cards. On card three, « quoique » and « quoi que » must be distinguishable ONLY by the pause: one word is said as one group, two words carry a small break. Nothing else may differ.",
  'rec-b1-15-note': "The note on the table (act 8), ONE voice reading a handwritten note aloud, unhurried, as somebody reads a message to the room. The last line is written faster on the page and must be read faster, but with no extra emphasis: it is the only indicative in the note and the learner has to find it.",
  'rec-b1-15-temps': "The temps deck (act 8), one voice, four cards. Card one is the pair the whole act turns on: « avant qu il parte » and « apres qu il est parti » are read at the same speed with a small pause between them. On card four the lone ne is elided and unstressed.",
  'rec-b1-15-piege-avant': "The trap drill (act 8): the six card sentences read in order, ONE VOICE, at normal speed. The WRONG versions printed on the cards are NEVER spoken. Card five contains a lone ne which must sound like part of the next word.",
  'rec-b1-15-temps-ecoute': "REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines one and two are the avant que / apres que pair and must be read identically in pace. The connector is never stressed, because questions one and two ask the learner to hear which one arrived.",
  'rec-b1-15-forum': "The housing forum (act 9), ONE voice reading six short posts aloud, each by a different person: a small pause between them and a slight change of pace, but the SAME voice. The fifth post is the only subjunctive in the set and must be read with no extra care at all.",
  'rec-b1-15-indicatif': "The indicatif deck (act 9), one voice, four cards. Card three is the pair the act turns on: « il semble que ce soit vrai » and « il me semble que c est vrai » are read at the same speed, and the « me » is elided into sembler exactly as in speech, so the learner has to catch a syllable and not a pause.",
  'rec-b1-15-piege-semble': "The trap drill (act 9): the six card sentences read in order, ONE VOICE, at normal speed. The WRONG versions printed on the cards are NEVER spoken. Card one is the espere pair and must sound completely ordinary.",
  'rec-b1-15-indicatif-ecoute': "REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines two and three are the sembler pair and differ by one unstressed syllable, so no pause and no stress may fall on « me ».",
  'rec-b1-15-tri': "The writing group (act 10), two voices at a table in Geneva, quiet and practical, with paper being turned. The pair « il faut que nous rentrions » and « j espere que nous rentrerons » comes twenty seconds apart and must be read at the same speed: the act is about seeing the difference, not hearing it.",
  'rec-b1-15-message': "The model message (act 11), one voice, read as somebody reading a message aloud rather than performing it. The six keys must be audible through the pauses: il faut que, je voudrais que, je suis content que, bien que, je doute que, j espere que. The last of the six is the only one that keeps the ordinary form and must be read with no extra care.",
  'rec-b1-15-cles': "The key deck (act 1), one voice, four cards. The contrast pairs are read as one continuous line with a small pause at the middot: « Je veux que tu viennes » then « J'espère que tu viens ». The trigger expression carries the stress every time, never the verb.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 15',
  intro: 'You can already build the present subjunctive. This lesson answers the question the last one refused: which expressions actually call for it. The answer is not a list to memorise, it is five families, each with a reason, plus one thing nobody teaches and everybody needs, which is the set of expressions that carry the same que and change nothing at all.',
  skill: 'PE',
  grammarAssumed: [FORMATION_UNIT, POLI_UNIT, SI_UNIT, MODAUX_UNIT, SAVOIR_UNIT],
  grammarIntroduced: [
    'The trigger as the unit of choice: the subjunctive is selected by the expression in front of que, never by the verb that follows it',
    'Verbs of will and wish: vouloir, souhaiter, désirer, exiger, demander, préférer, and aimer in the conditional',
    'The impersonal necessity set: il faut que, il est nécessaire / important / essentiel / utile que, il vaut mieux que, il est temps que',
    'Expressions of feeling, where the fact is certain and the subjunctive appears anyway',
    'Expressions of doubt, and the boundary between il est possible que and il est probable que',
    'The negation swing: je pense que takes the indicative and je ne pense pas que takes the subjunctive, with the same swing on croire, être sûr, être vrai and trouver',
    'Subordinating conjunctions that carry que: pour que, afin que, de peur que, bien que, quoique, avant que, jusqu’à ce que, à condition que, sans que, pourvu que, à moins que',
    'The expressions that carry que and keep the indicative: espérer que, il me semble que, il est probable que, il paraît que, peut-être que, parce que, pendant que, après que',
    'The pair il semble que (subjunctive) against il me semble que (indicative)',
    'A three-question recognition test: is there a que, which expression is in front of it, and does that expression open the door',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà construire le subjonctif. Cette leçon répond à la question que la précédente a laissée : quelles expressions le demandent vraiment. Ce n'est pas une liste à apprendre par cœur, ce sont cinq familles, chacune avec sa raison, plus une chose que personne n'enseigne et dont tout le monde a besoin : les expressions qui portent le même « que » et ne changent rien.",
    minutes: 135,
    difficulty: 3,
    glyph: 'clé',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => (s as LessonSection & { id: string }).id) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: DECLENCHEURS_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French and spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, READING_MESSAGE, dicteeFor };
