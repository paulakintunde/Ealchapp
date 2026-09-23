// b1.03.l1 « Passé composé ou imparfait : les bases » — the corpus and the
// citation constants.
//
// DRAFT. Nothing here is imported into Postgres, merged into seed.json or
// published. Paul reviews b1.01-b1.04 first (B1-PILOT-BRIEF.md).
//
// SEED-CHECKED ONLY, DB CHECK PENDING AT IMPORT. seed.json holds roughly a
// quarter of Postgres, so every "absent" below means "absent from the seed cut"
// and every reused id was read out of seed.json on 2026-09-22.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE CHOICE BETWEEN THE TWO PAST TENSES, BY WHAT THE VERB DOES IN THE STORY.
//
//     décor    what was going on, the set, the circumstances   imparfait
//     action   what happened next, what moves the story on      passé composé
//
//   Four shapes carry it: an ongoing action cut by an event (quand / pendant
//   que), two backgrounds running side by side, a chain of completed events,
//   and a bounded duration that takes the passé composé however long it was.
//   Temporal words (soudain, tout à coup, un jour, tous les jours,
//   d'habitude, pendant que) are taught as CUES, each with a counterexample.
//
// QUOTED, NEVER TAUGHT:
//
//   b1.01  imparfait formation. Assumed; its reframe is imported (§C).
//   b1.02  imparfait uses (habit, state, description, weather, time, age,
//          politeness). Assumed; its reframe is imported (§C).
//   a2.05  passé composé with avoir. Reframe imported.
//   a2.21  passé composé with être. Reframe imported, used for agreement.
//   a2.23  pronominal verbs in the passé composé. Reframe imported, used for
//          « je me suis levé ».
//   a2.20  irregular participles (lu, pris, eu, fait, venu). Leaned on.
//
// LEFT FOR b1.04 (« les paires »): verbs whose MEANING shifts between the two
// tenses (savoir / connaître / vouloir / pouvoir / avoir). None of them is
// used here in a contrast, and `vouloir` is kept out of the reading on purpose.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. THEME AND ID BLOCK
// ══════════════════════════════════════════════════════════════════════════
//
//  THEME `recits-au-passe` (Paul, 2026-09-22). It ALREADY EXISTS in the seed's
//  theme list (« Les récits au passé », domain fondations, levelRange a2-b2)
//  and holds 0 seed rows, so nothing has to be created at import. The earlier
//  draft slug `passe-recit` is retired.
//
//  ID BLOCK: b1.01 and b1.02 own .001-.199 in this theme; b1.03 owns
//  .201-.299 and uses .201-.281.
//
//  THE `E(n)` HELPER ADDS 200. Rows and sections are authored with the local
//  slot number (1-81, the old passe-recit numbering), and `E(n)` maps slot n to
//  `fr.b1.recits-au-passe.(n+200)`. So E(1) is .201 and E(81) is .281. Every id
//  that leaves this file goes through E, so the offset lives in one place.

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

export const UNIT = {
  id: 'b1.03',
  seq: 3,
  title: 'Passé Composé or Imparfait: The Basics',
  sub: 'Passé composé ou imparfait : les bases',
  canDo: 'Can narrate a past episode, separating the setting from the events',
  prereqUnitIds: ['b1.01', 'b1.02'],
} as const;

export const LESSON_ID = 'b1.03.l1';
export const THEME = 'recits-au-passe';

/** Local slot n becomes id seq n + ID_OFFSET (header §A). */
export const ID_OFFSET = 200;
export const ID_FIRST = 201;
export const ID_LAST = 299;   // allocated to b1.03 (b1.01/b1.02 own .001-.199)

export const E = (n: number) => `fr.b1.${THEME}.${String(n + ID_OFFSET).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. HOW THIS LESSON NAMES ITS NEIGHBOURS, IN FRENCH
 *
 *  `unitRef` prints English (« lesson 16 in A2 ») and resolves through the
 *  shipped `unit.seq`. B1 surfaces are in French, so the English label is
 *  re-cut here, still resolved through seq and never typed by hand.
 *
 *  b1.* units are NOT in the seed yet, so `unitRef` hands the raw id back.
 *  Their positions come from the plan (b1-l01 = seq 1, b1-l02 = seq 2) and sit
 *  in B1_SEQ_FROM_PLAN until the units exist; then this table goes.
 * ══════════════════════════════════════════════════════════════════════════ */

const TRACK_FR: Record<string, string> = { A1: 'A1', A2: 'A2', B1: 'B1', Sounds: 'Sons' };

/** TODO(import): delete once b1.01 and b1.02 are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = { 'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4 };

export function refFr(unitId: string): string {
  const en = unitRef(unitId);
  const m = /^lesson (\d+) in (\w+)$/.exec(en);
  if (m) return `la leçon ${m[1]} du ${TRACK_FR[m[2]] ?? m[2]}`;
  const planned = B1_SEQ_FROM_PLAN[unitId];
  if (planned) return `la leçon ${planned} du B1`;
  return unitId;
}

/** Capitalise a label that opens a sentence. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

export const IMP_FORM_UNIT = 'b1.01';
export const IMP_USE_UNIT = 'b1.02';
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';
export const PARTICIPLE_UNIT = 'a2.20';
export const PRONOMINAL_UNIT = 'a2.22';
export const PRONOMINAL_PC_UNIT = 'a2.23';
export const TIME_PREP_UNIT = 'a2.18';

export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);       // la leçon 1 du B1 (plan)
export const IMP_USE_REF = refFr(IMP_USE_UNIT);         // la leçon 2 du B1 (plan)
/** A2 CITATIONS USE THE HOUSE ENGLISH TRAIL LABEL (Paul, 2026-09-22), straight
 *  from `unitRef`: « lesson 16 in A2 ». Only the not-yet-seeded b1.* units go
 *  through refFr. */
export const PC_AVOIR_REF = unitRef(PC_AVOIR_UNIT);       // lesson 16 in A2
export const PC_ETRE_REF = unitRef(PC_ETRE_UNIT);         // lesson 18 in A2
export const PRONOMINAL_PC_REF = unitRef(PRONOMINAL_PC_UNIT); // lesson 20 in A2

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE QUOTATIONS
 *
 *  A2 reframes are IMPORTED, so « verbatim » is mechanical. They are English
 *  because A2 is taught in English; they are quoted as English, in « », and
 *  a French rendering follows each one on screen (Paul, 2026-09-22): the
 *  English original first, then « FR: ... ». The renderings are this lesson's.
 *
 *  b1.01 AND b1.02 WERE WRITTEN IN PARALLEL. Their files were absent when
 *  this draft started and present by the end (2026-09-22), so their reframes
 *  are IMPORTED, not placeholders. Both are drafts too: if either author
 *  rewords, this lesson follows at build time.
 *
 *  b1.02's line (« on ne le compte pas ») is the hinge this lesson turns on:
 *  the passé composé is what you DO count, which is s13-duree's whole point.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A205_REFRAME } from '../passe-compose-corpus.ts';
export { REFRAME as A221_REFRAME } from '../passe-compose-etre-corpus.ts';
export { REFRAME as A223_REFRAME } from '../pronominaux-passe-corpus.ts';

/** French renderings of the three A2 lines, shown after the English original. */
export const A205_REFRAME_FR = 'Un verbe, deux mots, et les petits mots vont au milieu.';
export const A221_REFRAME_FR = 'Après être, le deuxième mot finit comme un adjectif.';
export const A223_REFRAME_FR = 'Si le petit mot est là, le premier mot est être.';

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';
export { REFRAME as B102_REFRAME, REFRAME_EN as B102_REFRAME_EN } from './imparfait-usage-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME, AND THE ONE METAPHOR
 *
 *  THE FILM, NOT THE STAGE. Chosen because it carries the three things the
 *  lesson needs with one image: the set (le décor), the shot that moves the
 *  story (l'action), and the camera that can hold on a scene while something
 *  cuts across it (la coupure). The stage has the first two and no cut.
 *
 *  Used consistently: « le décor » and « l'action » are the only two labels for
 *  the lenses anywhere in the lesson, and « le film » the only metaphor. No
 *  « background/foreground » on a learner surface except inside an EN gloss.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "L'imparfait pose le décor. Le passé composé fait avancer le film.";
export const REFRAME_EN = 'The imparfait sets the scene. The passé composé moves the film forward.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "L'imparfait pour ce qui dure, le passé composé pour ce qui est court.",
    why: "False at the one place the lesson has to hold: « J'ai habité à Lyon pendant dix ans » lasts ten years and takes the passé composé. A reframe that s13-duree has to contradict is not a reframe.",
  },
  {
    text: 'Soudain = passé composé, tous les jours = imparfait.',
    why: 'Turns the cues into triggers, which the brief forbids and which s15-trap exists to break.',
  },
  {
    text: "Qu'est-ce qui se passait ? Imparfait. Qu'est-ce qui s'est passé ? Passé composé.",
    why: 'True and useful, and it is kept as the timeline card (s06-ligne). As the reframe it is two questions long and uses the two tenses to define themselves.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. REUSED ROWS (seed-checked 2026-09-22)
 *
 *  Every one carries `flashcard`, so a deckTranche can release it, EXCEPT the
 *  `namedOnly` list, which is `sentence`/`dictation`/`review` only and is
 *  reachable by being named in a section or a drill, never released.
 *
 *  None of them has a respelling in the seed. The lesson never prints a
 *  respelling it has not authored.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  /** décor + action in one sentence. */
  mixed: [
    'fr.b1.cafe.085',          // Pendant que nous attendions l'addition, nous avons parlé de nos projets.
    'fr.b1.cafe.083',          // Quand nous sommes arrivés, la terrasse était déjà pleine.
    'fr.b1.cafe.096',          // Il faisait froid, alors nous avons préféré rester à l'intérieur.
    'fr.b1.maison.067',        // Quand nous avons emménagé, l'appartement était en mauvais état.
    'fr.b1.routines.080',      // Comme il pleuvait, il a préféré prendre le métro plutôt que marcher.
    'fr.b1.routines.092',      // Comme il était en retard, il a sauté le petit déjeuner ce matin.
    'fr.a2.objets.106',        // J'ai perdu mes clés parce que j'étais pressé ce matin.
    'fr.a2.routines.061',      // Je me suis dépêché ce matin parce que j'étais en retard.
    'fr.b1.sports-et-loisirs.086', // Quand elle a gagné le tournoi, toute l'équipe était fière.
  ],
  /** a chain of completed events. */
  sequence: [
    'fr.a2.routines.063',      // Nous avons fait les courses ensemble, ensuite nous avons cuisiné.
    'fr.a2.cuisine.042',       // J'ai coupé les légumes puis je les ai fait cuire.
    'fr.b1.maison.073',        // Nous avons discuté avec le syndic quand le chauffage est tombé en panne.
  ],
  /** bounded duration, passé composé. */
  bounded: [
    'fr.a2.ecole.045',         // J'ai fait des maths pendant trois ans.
    'fr.b1.heure-et-date.017', // Elle a vécu à Lyon pendant deux ans.
    'fr.a2.heure-et-date.138', // La semaine dernière, il a fait très froid.   <- weather, and PC
  ],
  /** NOT deck-able: no `flashcard` drill. Named in sections only. */
  namedOnly: [
    'fr.sons.liaisons.048',    // Tout à coup, la lumière s'est éteinte.        sentence,review
    'fr.b1.cuisine.015',       // La sauce a réduit pendant qu'on préparait les légumes.  sentence,dictation
    'fr.a2.corps.016',         // Elle avait très mal à la gorge et elle est allée voir le médecin.  sentence,review
  ],
} as const;

export const IMPORT_IDS: string[] = [
  ...IMPORTED.mixed, ...IMPORTED.sequence, ...IMPORTED.bounded, ...IMPORTED.namedOnly,
];
export const NOT_DECK_ABLE: string[] = [...IMPORTED.namedOnly];

/** Searched for and not found in the seed cut, so authored here:
 *  « je dormais », « a sonné », « soudain », « pendant dix ans », « j'ai
 *  habité », « je me suis levé », « volé », « il faisait noir », « tous les
 *  jours » + passé composé. The DB may have some of them (DB check pending at import). */
export const SEARCHED_ABSENT = [
  'je dormais', 'a sonné', 'soudain', "j'ai habité", 'je me suis levé', 'volé', 'il faisait noir',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE AUTHORED ROWS, fr.b1.recits-au-passe.201-.281 (local slots 1-81)
 *
 *  Respellings follow house style; every nasal closes with ⁿ; NO U+203F tie in
 *  ipa or respell (liaison is written by moving the consonant: « eh-ta-ree-VAY »).
 *  Words already respelled in the seed reuse that respelling: vélo vay-LOH,
 *  quelqu'un kehl-KUHⁿ, journal zhoor-NAL, téléphone tay-lay-FON, pendant
 *  pahⁿ-DAHⁿ, Lyon LYOHⁿ, d'habitude da-bee-TÜD, formulaire for-mü-LEHR,
 *  portefeuille por-tuh-FUHY, la panne PAN, la cuisine kwee-ZEEN.
 *
 *  Masculine « je » in the -é rows is deliberate and tagged `agree-m`: the task
 *  and s16-errors carry the feminine (« je suis sortie »), because agreement
 *  with être is a form criterion in the task rubric.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'],
  extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: 'b1', theme: THEME, fr, en, ipa, respell, tags, drills, version: 1,
  grammarPoints: ['passe-compose-imparfait'], ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });

/* ── The scene: a bike stolen outside a café, Montréal. .001-.006 ───────── */
export const SCENE_ROWS: Row[] = [
  sent(1, "On m'a volé mon vélo.", 'My bike was stolen.', '/ɔ̃ ma vɔ.le mɔ̃ ve.lo/', 'ohⁿ ma vo-LAY mohⁿ vay-LOH', ['scene', 'action'], FCVDR),
  sent(2, "Je lisais le journal quand quelqu'un a pris mon vélo.", 'I was reading the paper when someone took my bike.', '/ʒə li.zɛ lə ʒuʁ.nal kɑ̃ kɛl.kœ̃ a pʁi mɔ̃ ve.lo/', 'zhuh lee-ZEH luh zhoor-NAL kahⁿ kehl-KUHⁿ a PREE mohⁿ vay-LOH', ['scene', 'interruption', 'quand'], FCVR,
    gap("Je ___ (lire) le journal quand quelqu'un ___ (prendre) mon vélo.", 'lisais: the reading was going on (décor). a pris: the theft cut across it (action).')),
  sent(3, 'Il pleuvait et la terrasse était vide.', 'It was raining and the terrace was empty.', '/il plø.vɛ e la tɛ.ʁas e.tɛ vid/', 'eel pluh-VEH ay la teh-RASS ay-teh VEED', ['scene', 'decor'], FCVR),
  sent(4, "J'ai lu le journal, puis quelqu'un a pris mon vélo.", 'I read the paper, then someone took my bike.', '/ʒe ly lə ʒuʁ.nal pɥi kɛl.kœ̃ a pʁi mɔ̃ ve.lo/', 'zhay lü luh zhoor-NAL pwee kehl-KUHⁿ a PREE mohⁿ vay-LOH', ['scene', 'sequence'], FCVR),
  sent(5, 'Mon vélo était attaché devant le café.', 'My bike was locked up outside the café.', '/mɔ̃ ve.lo e.tɛ a.ta.ʃe də.vɑ̃ lə ka.fe/', 'mohⁿ vay-LOH ay-teh a-ta-SHAY duh-vahⁿ luh ka-FAY', ['scene', 'decor', 'state'], FCVR),
  sent(6, "Quand je suis sorti, le vélo n'était plus là.", 'When I came out, the bike was no longer there.', '/kɑ̃ ʒə sɥi sɔʁ.ti lə ve.lo ne.tɛ ply la/', 'kahⁿ zhuh swee sor-TEE luh vay-LOH nay-teh plü LA', ['scene', 'action-then-decor', 'agree-m'], FCVR),
];

/* ── Ongoing action cut by an event. .010-.015 ─────────────────────────── */
export const INTERRUPT_ROWS: Row[] = [
  sent(10, 'Je dormais quand le téléphone a sonné.', 'I was sleeping when the phone rang.', '/ʒə dɔʁ.mɛ kɑ̃ lə te.le.fɔn a sɔ.ne/', 'zhuh dor-MEH kahⁿ luh tay-lay-FON a so-NAY', ['interruption', 'quand'], FCVDR,
    gap('Je ___ (dormir) quand le téléphone ___ (sonner).', 'dormais: already going on. a sonné: the event that cut it.')),
  sent(11, 'Pendant que je cuisinais, il est arrivé.', 'While I was cooking, he arrived.', '/pɑ̃.dɑ̃ kə ʒə kɥi.zi.nɛ il ɛ.ta.ʁi.ve/', 'pahⁿ-dahⁿ kuh zhuh kwee-zee-NEH eel eh-ta-ree-VAY', ['interruption', 'pendant-que'], FCVR,
    gap('Pendant que je ___ (cuisiner), il ___ (arriver).', 'cuisinais: the décor. est arrivé: the action, with être.')),
  sent(12, "Nous mangions quand la lumière s'est éteinte.", 'We were eating when the light went out.', '/nu mɑ̃.ʒjɔ̃ kɑ̃ la ly.mjɛʁ sɛ.te.tɛ̃t/', 'noo mahⁿ-ZHYOHⁿ kahⁿ la lü-MYEHR seh-tay-TEHⁿT', ['interruption', 'quand'], FCVR),
  sent(13, "Elle traversait la rue quand elle a vu l'accident.", 'She was crossing the street when she saw the accident.', '/ɛl tʁa.vɛʁ.sɛ la ʁy kɑ̃.tɛl a vy lak.si.dɑ̃/', 'ehl tra-vehr-SEH la RÜ kahⁿ-tehl a vü lak-see-DAHⁿ', ['interruption', 'quand'], FCVR),
  sent(14, 'Il conduisait quand sa voiture est tombée en panne.', 'He was driving when his car broke down.', '/il kɔ̃.dɥi.zɛ kɑ̃ sa vwa.tyʁ ɛ tɔ̃.be ɑ̃ pan/', 'eel kohⁿ-dwee-ZEH kahⁿ sa vwa-TÜR eh tohⁿ-BAY ahⁿ PAN', ['interruption', 'quand', 'panne'], FCVR),
  sent(15, 'Pendant que tu étais au travail, le facteur est passé.', 'While you were at work, the mail carrier came by.', '/pɑ̃.dɑ̃ kə ty e.tɛ o tʁa.vaj lə fak.tœʁ ɛ pa.se/', 'pahⁿ-dahⁿ kuh tü ay-teh oh tra-VAÏ luh fak-TUHR eh pa-SAY', ['interruption', 'pendant-que', 'state'], FCVR),
];

/* ── Two backgrounds side by side. .020-.022 ───────────────────────────── */
export const SIMUL_ROWS: Row[] = [
  sent(20, 'Pendant que je lisais, il regardait la télé.', 'While I was reading, he was watching TV.', '/pɑ̃.dɑ̃ kə ʒə li.zɛ il ʁə.ɡaʁ.dɛ la te.le/', 'pahⁿ-dahⁿ kuh zhuh lee-ZEH eel ruh-gar-deh la tay-LAY', ['simultaneous', 'pendant-que'], FCVDR,
    gap('Pendant que je ___ (lire), il ___ (regarder) la télé.', 'Two things going on at once, and nothing happens: two imparfaits.')),
  sent(21, 'Les enfants jouaient pendant que les parents parlaient.', 'The children were playing while the parents were talking.', '/le.zɑ̃.fɑ̃ ʒu.ɛ pɑ̃.dɑ̃ kə le pa.ʁɑ̃ paʁ.lɛ/', 'lay-zahⁿ-fahⁿ zhoo-EH pahⁿ-dahⁿ kuh lay pa-rahⁿ par-LEH', ['simultaneous', 'pendant-que'], FCVR),
  sent(22, 'Il neigeait et les rues étaient vides.', 'It was snowing and the streets were empty.', '/il nɛ.ʒɛ e le ʁy e.tɛ vid/', 'eel neh-ZHEH ay lay rü ay-teh VEED', ['simultaneous', 'decor', 'weather'], FCVR),
];

/* ── A chain of completed events. .030-.033 ────────────────────────────── */
export const SEQUENCE_ROWS: Row[] = [
  sent(30, 'Je me suis levé, je me suis habillé et je suis sorti.', 'I got up, I got dressed and I went out.', '/ʒə mə sɥi lə.ve ʒə mə sɥi.za.bi.je e ʒə sɥi sɔʁ.ti/', 'zhuh muh swee luh-VAY zhuh muh swee-za-bee-YAY ay zhuh swee sor-TEE', ['sequence', 'pronominal', 'agree-m'], FCVR),
  sent(31, 'Elle s\'est levée, elle a pris un café et elle est partie.', 'She got up, had a coffee and left.', '/ɛl sɛ lə.ve ɛl a pʁi œ̃ ka.fe e ɛl ɛ paʁ.ti/', 'ehl seh luh-VAY ehl a pree uhⁿ ka-FAY ay ehl eh par-TEE', ['sequence', 'agree-f'], FCVR),
  sent(32, "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire.", 'First I called the police, then I filled in a form.', '/da.bɔʁ ʒe a.ple la pɔ.lis pɥi ʒe ʁɑ̃.pli œ̃ fɔʁ.my.lɛʁ/', 'da-BOR zhay ap-LAY la po-LEES pwee zhay rahⁿ-PLEE uhⁿ for-mü-LEHR', ['sequence', 'connectors'], FCVR),
  sent(33, "Il est entré, il a regardé autour de lui et il s'est assis.", 'He came in, looked around and sat down.', '/il ɛ.tɑ̃.tʁe il a ʁə.ɡaʁ.de o.tuʁ də lɥi e il sɛ.ta.si/', 'eel eh-tahⁿ-TRAY eel a ruh-gar-DAY oh-toor duh LWEE ay eel seh-ta-SEE', ['sequence'], FCVR),
];

/* ── Bounded duration: passé composé, however long. .040-.044 ──────────── */
export const DURATION_ROWS: Row[] = [
  sent(40, "J'ai habité à Lyon pendant dix ans.", 'I lived in Lyon for ten years.', '/ʒe a.bi.te a ljɔ̃ pɑ̃.dɑ̃ di.zɑ̃/', 'zhay a-bee-TAY a LYOHⁿ pahⁿ-dahⁿ dee-ZAHⁿ', ['bounded', 'pendant'], FCVDR,
    gap("J'___ (habiter) à Lyon pendant dix ans.", 'Ten years, and closed: it is over and counted. The length does not matter.')),
  sent(41, "J'habitais à Lyon quand j'ai rencontré Claire.", 'I was living in Lyon when I met Claire.', '/ʒa.bi.tɛ a ljɔ̃ kɑ̃ ʒe ʁɑ̃.kɔ̃.tʁe klɛʁ/', 'zha-bee-TEH a LYOHⁿ kahⁿ zhay rahⁿ-kohⁿ-tray KLEHR', ['open', 'interruption', 'quand'], FCVR,
    gap("J'___ (habiter) à Lyon quand j'___ (rencontrer) Claire.", 'Lyon is the décor here, and the meeting is the action.')),
  sent(42, 'Il a plu toute la journée.', 'It rained all day.', '/il a ply tut la ʒuʁ.ne/', 'eel a PLÜ toot la zhoor-NAY', ['bounded', 'weather'], FCVDR),
  sent(43, 'Il pleuvait quand je suis sorti.', 'It was raining when I went out.', '/il plø.vɛ kɑ̃ ʒə sɥi sɔʁ.ti/', 'eel pluh-VEH kahⁿ zhuh swee sor-TEE', ['open', 'weather', 'quand', 'agree-m'], FCVR),
  sent(44, "Nous avons attendu deux heures à l'urgence.", 'We waited two hours at the emergency room.', '/nu.za.vɔ̃.za.tɑ̃.dy dø.zœʁ a lyʁ.ʒɑ̃s/', 'noo-za-vohⁿ-za-tahⁿ-DÜ duh-ZUHR a lür-ZHAHⁿS', ['bounded', 'quebec'], FCVR),
];

/* ── One verb, both tenses, one story. .050-.051 ───────────────────────── */
export const SAME_VERB_ROWS: Row[] = [
  sent(50, 'Je marchais seul, puis nous avons marché ensemble jusqu\'au métro.', 'I was walking alone, then we walked together to the metro.', '/ʒə maʁ.ʃɛ sœl pɥi nu.za.vɔ̃ maʁ.ʃe ɑ̃.sɑ̃bl ʒys.ko me.tʁo/', 'zhuh mar-SHEH SUHL pwee noo-za-vohⁿ mar-SHAY ahⁿ-SAHⁿBL zhüs-koh may-TROH', ['same-verb'], FCVR),
  sent(51, 'Il pleuvait quand je suis parti, et il a plu jusqu\'au soir.', 'It was raining when I left, and it rained until evening.', '/il plø.vɛ kɑ̃ ʒə sɥi paʁ.ti e il a ply ʒys.ko swaʁ/', 'eel pluh-VEH kahⁿ zhuh swee par-TEE ay eel a plü zhüs-koh SWAR', ['same-verb', 'weather', 'agree-m'], FCVR),
];

/* ── Cues, and a counterexample for every one. .060-.071 ───────────────────
 *  The pairs are asserted in CUE_PAIRS below: every cue the lesson teaches has
 *  a usual row and an exception row, and the exception is natural French.   */
export const CUE_ROWS: Row[] = [
  sent(60, 'Soudain, le téléphone a sonné.', 'Suddenly, the phone rang.', '/su.dɛ̃ lə te.le.fɔn a sɔ.ne/', 'soo-DEHⁿ luh tay-lay-FON a so-NAY', ['cue', 'soudain', 'usual'], FCVDR),
  sent(61, "Soudain, il faisait noir et on n'entendait plus rien.", 'Suddenly it was dark and you could not hear a thing.', '/su.dɛ̃ il fə.zɛ nwaʁ e ɔ̃ nɑ̃.tɑ̃.dɛ ply ʁjɛ̃/', 'soo-DEHⁿ eel fuh-zeh NWAR ay ohⁿ nahⁿ-tahⁿ-deh plü RYEHⁿ', ['cue', 'soudain', 'counter'], FCVR),
  sent(62, "Un jour, j'ai trouvé un portefeuille dans le métro.", 'One day, I found a wallet in the metro.', '/œ̃ ʒuʁ ʒe tʁu.ve œ̃ pɔʁt.fœj dɑ̃ lə me.tʁo/', 'uhⁿ ZHOOR zhay troo-VAY uhⁿ por-tuh-FUHY dahⁿ luh may-TROH', ['cue', 'un-jour', 'usual'], FCVR),
  sent(63, "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus.", 'One winter day, it was minus twenty, and everyone was waiting for the bus.', '/œ̃ ʒuʁ di.vɛʁ il fə.zɛ mwɛ̃ vɛ̃ e tu lə mɔ̃d a.tɑ̃.dɛ lə bys/', 'uhⁿ zhoor dee-VEHR eel fuh-zeh mwehⁿ VEHⁿ ay too luh mohⁿd a-tahⁿ-deh luh BÜS', ['cue', 'un-jour', 'counter', 'quebec'], FCVR),
  sent(64, 'Tous les jours, je prenais le même bus.', 'Every day, I took the same bus.', '/tu le ʒuʁ ʒə pʁə.nɛ lə mɛm bys/', 'too lay ZHOOR zhuh pruh-neh luh mem BÜS', ['cue', 'tous-les-jours', 'usual'], FCVR),
  sent(65, "Tous les jours pendant un mois, j'ai couru.", 'Every day for a month, I went running.', '/tu le ʒuʁ pɑ̃.dɑ̃.tœ̃ mwa ʒe ku.ʁy/', 'too lay zhoor pahⁿ-dahⁿ-tuhⁿ MWA zhay koo-RÜ', ['cue', 'tous-les-jours', 'counter', 'bounded'], FCVDR),
  sent(66, "D'habitude, il arrivait à huit heures.", 'He usually arrived at eight.', '/da.bi.tyd i.la.ʁi.vɛ a ɥi.tœʁ/', 'da-bee-TÜD ee-la-ree-veh a wee-TUHR', ['cue', 'dhabitude', 'usual'], FCVR),
  sent(67, "Ce matin-là, j'ai fait comme d'habitude : j'ai pris le bus.", 'That morning, I did what I usually do: I took the bus.', '/sə ma.tɛ̃.la ʒe fɛ kɔm da.bi.tyd ʒe pʁi lə bys/', 'suh ma-tehⁿ-LA zhay feh kom da-bee-TÜD zhay pree luh BÜS', ['cue', 'dhabitude', 'counter'], FCVR),
  sent(68, "Tout à coup, je n'avais plus envie de rire.", 'All of a sudden, I did not feel like laughing any more.', '/tu.ta.ku ʒə na.vɛ ply.zɑ̃.vi də ʁiʁ/', 'too-ta-KOO zhuh na-veh plü-zahⁿ-VEE duh REER', ['cue', 'tout-a-coup', 'counter'], FCVR),
  sent(69, "Pendant que tu as fait les courses, j'ai rangé la cuisine.", 'While you did the shopping, I tidied the kitchen.', '/pɑ̃.dɑ̃ kə ty a fɛ le kuʁs ʒe ʁɑ̃.ʒe la kɥi.zin/', 'pahⁿ-dahⁿ kuh tü a feh lay KOORS zhay rahⁿ-zhay la kwee-ZEEN', ['cue', 'pendant-que', 'counter'], FCVR),
  sent(70, "Quand le téléphone a sonné, j'ai répondu.", 'When the phone rang, I answered.', '/kɑ̃ lə te.le.fɔn a sɔ.ne ʒe ʁe.pɔ̃.dy/', 'kahⁿ luh tay-lay-FON a so-NAY zhay ray-pohⁿ-DÜ', ['cue', 'quand', 'sequence'], FCVR),
  sent(71, 'Tout à coup, la porte a claqué.', 'All of a sudden, the door slammed.', '/tu.ta.ku la pɔʁt a kla.ke/', 'too-ta-KOO la PORT a kla-KAY', ['cue', 'tout-a-coup', 'usual'], FCVR),
];

/** Every cue taught, its usual row and its counterexample. `tout à coup`'s
 *  usual row is authored (.071) and the seed's `fr.sons.liaisons.048` is named
 *  beside it; that row has no flashcard, so it cannot carry the pair alone. */
export const CUE_PAIRS = [
  { cue: 'soudain', usual: E(60), counter: E(61), usualTense: 'pc' },
  { cue: 'tout à coup', usual: E(71), counter: E(68), usualTense: 'pc' },
  { cue: 'un jour', usual: E(62), counter: E(63), usualTense: 'pc' },
  { cue: 'tous les jours', usual: E(64), counter: E(65), usualTense: 'imp' },
  { cue: "d'habitude", usual: E(66), counter: E(67), usualTense: 'imp' },
  { cue: 'pendant que', usual: E(20), counter: E(69), usualTense: 'imp' },
  { cue: 'quand', usual: E(10), counter: E(70), usualTense: 'mixed' },
] as const;

/* ── Rule cards. .080-.081 ─────────────────────────────────────────────── */
export const RULE_ROWS: Row[] = [
  sent(80, REFRAME, REFRAME_EN, '/li.pɑʁ.fɛ poz lə de.kɔʁ lə pa.se kɔ̃.po.ze fɛ.ta.vɑ̃.se lə film/', 'lee-par-FEH poz luh day-KOR luh pa-say kohⁿ-poh-ZAY feh-ta-vahⁿ-SAY luh FEELM', ['rule', 'reframe'], ['flashcard'],
    { cardType: 'grammar', prompt: 'Imparfait ou passé composé : quel est le rôle de chacun ?', notes: "Ex : Il pleuvait (le décor). Le téléphone a sonné (l'action)." }),
  sent(81, "Soudain, tous les jours, d'habitude : ce sont des indices, pas des règles.", 'Suddenly, every day, usually: these are clues, not rules.', '/su.dɛ̃ tu le ʒuʁ da.bi.tyd sə sɔ̃ de.zɛ̃.dis pa de ʁɛɡl/', 'soo-DEHⁿ too lay ZHOOR da-bee-TÜD suh sohⁿ day-zehⁿ-DEES pa day REHGL', ['rule', 'cue'], ['flashcard'],
    { cardType: 'grammar', prompt: 'Un mot comme « soudain » décide-t-il du temps ?', notes: "Ex : Soudain, le téléphone a sonné. Mais aussi : Soudain, il faisait noir." }),
];

export const ALL_ROWS: Row[] = [
  ...SCENE_ROWS, ...INTERRUPT_ROWS, ...SIMUL_ROWS, ...SEQUENCE_ROWS,
  ...DURATION_ROWS, ...SAME_VERB_ROWS, ...CUE_ROWS, ...RULE_ROWS,
];

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE READING, AND ITS ANSWER KEY
 *
 *  164 words (counted by density.logic `wordCount` in the scratch check).
 *  The learner annotates it in s18-annoter: every finite verb is either décor
 *  or action, and the key below is what the groupDrill and the quiz read.
 *  « Awa » recurs only inside this lesson (brief, decision 5).
 * ══════════════════════════════════════════════════════════════════════════ */

export const READING_TEXT =
  "C'était un samedi de novembre, à Lyon. Il faisait froid et il pleuvait un peu. Awa attendait le tram place Bellecour. Elle écoutait de la musique et elle pensait à son examen du lundi. Autour d'elle, les gens regardaient leur téléphone et personne ne parlait. Awa était fatiguée et elle avait froid aux mains. Le tram est arrivé avec dix minutes de retard. Awa est montée, elle a trouvé une place et elle a fermé les yeux. Pendant qu'elle dormait à moitié, un homme s'est assis à côté d'elle. À l'arrêt suivant, il est descendu très vite. Awa a cherché son téléphone pour changer de musique, mais il n'était plus dans sa poche. Elle a crié, elle a appuyé sur le bouton rouge et elle est descendue. L'homme courait déjà vers le pont. Alors elle a appelé sa sœur avec le téléphone d'une dame, et elles sont allées ensemble au commissariat. Là, un policier a écouté toute l'histoire et il a noté chaque détail.";

/** The annotation key: every finite verb in READING_TEXT, in order. */
export const READING_DECOR = [
  "C'était", 'faisait', 'pleuvait', 'attendait', 'écoutait', 'pensait', 'regardaient', 'parlait',
  'était fatiguée', 'avait froid', 'dormait', "n'était", 'courait',
] as const;
export const READING_ACTION = [
  'est arrivé', 'est montée', 'a trouvé', 'a fermé', "s'est assis", 'est descendu', 'a cherché',
  'a crié', 'a appuyé', 'est descendue', 'a appelé', 'sont allées', 'a écouté', 'a noté',
] as const;
