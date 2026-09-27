// b1.03.l1 « Passé composé ou imparfait : les bases » — the authored corpus,
// the imports and the citation constants. REBUILD v2, to RICH-LESSON-STANDARD.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.04 imports REFRAME from this file; do not rename):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   CHOOSING BETWEEN THE TWO PAST TENSES BY WHAT THE VERB DOES IN THE STORY.
//
//     décor    ce qui se passait déjà: lieu, météo, état, action en cours
//     action   ce qui s'est passé et a changé la situation
//
//   Act by act: the broken statement (1), the two lenses and the film (2), the
//   interruption with quand / pendant que (3), two backgrounds at once (4), a
//   chain of events and its connectors (5), a bounded duration however long
//   (6), one verb in both tenses inside one story (7), time words as cues with
//   a counterexample each (8), annotating a long narrative (9), telling one of
//   your own (10).
//
//   NOT OWNED: the imparfait's formation (b1.01) and its uses (b1.02), both
//   assumed and quoted; verbs whose MEANING shifts between the tenses
//   (savoir, connaître, vouloir, pouvoir, devoir, avoir) which are b1.04's and
//   are kept out of this lesson's authored rows on purpose.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `recits-au-passe` (Paul, 2026-09-22). It already exists in the
//     seed's `themes` (domain fondations, levelRange a2-b2) and holds ZERO
//     seed rows, so nothing is created at import.
//  2. ID BLOCK: this lesson owns `.201`-`.299` and `.1000`-`.1199`. b1.01 owns
//     `.001`-`.099` + `.401`-`.799`, b1.02 `.101`-`.199` + `.800`-`.999`,
//     b1.04 `.301`-`.399` + `.1200`-`.1399`. Used here: `.201`-`.281` (the
//     pilot rows, kept) and `.1000`-`.1161`. 137 rows in ten act blocks.
//     `.1115` and `.1117` are retired (2026-09-26): « d'habitude » and
//     « chaque été » are b1.02's headwords (`.1514`, `.1515`), so act 8 names
//     those by id instead of authoring the same flashcard twice.
//  3. The seed cut holds NO row for « je dormais », « a sonné », « soudain »,
//     « j'ai habité », « je me suis levé », « il faisait noir » or « tous les
//     jours » + passé composé, so they are authored here. Re-probe at import.
//  4. Every reused id below was read out of seed.json on 2026-09-22 and its
//     `fr` is copied verbatim wherever a section prints it.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.03',
  seq: 3,
  title: 'Passé Composé or Imparfait: The Basics',
  sub: 'Passé composé ou imparfait : les bases',
  canDo: 'Can narrate a past episode in speech and writing, separating the setting, states and habits from the completed events that move the story on',
  prereqUnitIds: ['b1.01', 'b1.02'],
} as const;

export const LESSON_ID = 'b1.03.l1';
export const THEME = 'recits-au-passe';
export const LEVEL = 'b1' as const;

export const ID_RANGES = [[201, 299], [1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  Paul, 2026-09-22: A2 citations use the house English trail label
 *  (« lesson 16 in A2 »), resolved through `unitRef` from the shipped
 *  `unit.seq`, never typed and never the raw id. b1.* units are not in the
 *  seed yet, so they are labelled in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMP_FORM_UNIT = 'b1.01';
export const IMP_USE_UNIT = 'b1.02';
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';
export const PARTICIPLE_UNIT = 'a2.20';
export const PRONOMINAL_UNIT = 'a2.22';
export const PRONOMINAL_PC_UNIT = 'a2.23';
export const TIME_PREP_UNIT = 'a2.18';

/** TODO(import): drop once b1.01 and b1.02 are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = { 'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4 };
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);
export const IMP_USE_REF = refFr(IMP_USE_UNIT);
export const PC_AVOIR_REF = unitRef(PC_AVOIR_UNIT);
export const PC_ETRE_REF = unitRef(PC_ETRE_UNIT);
export const PRONOMINAL_PC_REF = unitRef(PRONOMINAL_PC_UNIT);
export const PARTICIPLE_REF = unitRef(PARTICIPLE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  b1.01 and b1.02 are French and are quoted as they stand. The A2 lines are
 *  English (A2 is taught in English) and every screen that shows one follows
 *  it with the French rendering below (Paul, 2026-09-22).
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';
export { REFRAME as B102_REFRAME, REFRAME_EN as B102_REFRAME_EN } from './imparfait-usage-corpus.ts';
export { REFRAME as A205_REFRAME } from '../passe-compose-corpus.ts';
export { REFRAME as A221_REFRAME } from '../passe-compose-etre-corpus.ts';
export { REFRAME as A223_REFRAME } from '../pronominaux-passe-corpus.ts';

export const A205_REFRAME_FR = 'Un verbe, deux mots, et les petits mots vont au milieu.';
export const A221_REFRAME_FR = 'Après être, le deuxième mot finit comme un adjectif.';
export const A223_REFRAME_FR = 'Si le petit mot est là, le premier mot est être.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE FILM, NOT THE STAGE: it carries the set (le décor), the shot that moves
 *  the story (l'action) and the cut across a running shot (la coupure). The
 *  stage has the first two and no cut. « le décor » and « l'action » are the
 *  only lens labels on any learner surface, in this lesson and in b1.04.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "L'imparfait pose le décor. Le passé composé fait avancer le film.";
export const REFRAME_EN = 'The imparfait sets the scene. The passé composé moves the film forward.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "L'imparfait pour ce qui dure, le passé composé pour ce qui est court.",
    why: "False where the lesson has to hold: « J'ai habité à Lyon pendant dix ans » lasts ten years and takes the passé composé. Act 6 would spend itself contradicting the reframe.",
  },
  {
    text: 'Soudain = passé composé, tous les jours = imparfait.',
    why: 'Turns the cues into triggers, which act 8 exists to break.',
  },
  {
    text: "Qu'est-ce qui se passait ? Qu'est-ce qui s'est passé ?",
    why: 'The best TEST in the lesson, and it is kept as one (act 2, and the sheet). As a reframe it is two questions and defines each tense with itself.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json. `namedOnly` rows carry no `flashcard`
 *  drill, so no deckTranche can release them: they are reachable by being
 *  named in a section or a drill. `NOT_SPEAKABLE` additionally lists the rows
 *  with no `voiceflash`, which a `practice` speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: ['fr.a2.objets.106'],                 // J'ai perdu mes clés parce que j'étais pressé ce matin.
  act2: [
    'fr.b1.cafe.083',                         // Quand nous sommes arrivés, la terrasse était déjà pleine.
    'fr.b1.cafe.096',                         // Il faisait froid, alors nous avons préféré rester à l'intérieur.
    'fr.b1.maison.067',                       // Quand nous avons emménagé, l'appartement était en mauvais état.
    'fr.b1.routines.080',                     // Comme il pleuvait, il a préféré prendre le métro plutôt que marcher.
    'fr.b1.routines.092',                     // Comme il était en retard, il a sauté le petit déjeuner ce matin.
    'fr.b1.sports-et-loisirs.086',            // Quand elle a gagné le tournoi, toute l'équipe était fière.
    'fr.a2.routines.061',                     // Je me suis dépêché ce matin parce que j'étais en retard.
    'fr.a2.corps.016',                        // Elle avait très mal à la gorge et elle est allée voir le médecin.  (named only)
  ],
  act3: [
    'fr.b1.cafe.085',                         // Pendant que nous attendions l'addition, nous avons parlé de nos projets.
    'fr.b1.maison.073',                       // Nous avons discuté avec le syndic quand le chauffage est tombé en panne.
    'fr.b1.cuisine.015',                      // La sauce a réduit pendant qu'on préparait les légumes.  (named only)
  ],
  act4: ['fr.a2.famille.010'],                // Mes grands-parents étaient fatigués, mais ils ont continué la fête. (named only)
  act5: [
    'fr.a2.routines.063',                     // Nous avons fait les courses ensemble, ensuite nous avons cuisiné.
    'fr.a2.cuisine.042',                      // J'ai coupé les légumes puis je les ai fait cuire.
    'fr.a2.routines.045',                     // Elle a pris sa douche, puis elle s'est habillée pour sortir.  (named only)
  ],
  act6: [
    'fr.a2.ecole.045',                        // J'ai fait des maths pendant trois ans.
    'fr.b1.heure-et-date.017',                // Elle a vécu à Lyon pendant deux ans.
    'fr.a2.heure-et-date.138',                // La semaine dernière, il a fait très froid.
  ],
  act7: ['fr.a2.deplacements.011'],           // Il faisait froid et nous avons pris un taxi pour rentrer.  (named only)
  act8: [
    'fr.sons.liaisons.048',                   // Tout à coup, la lumière s'est éteinte.  (named only)
    'fr.b1.recits-au-passe.1514',             // d'habitude   (b1.02 owns the headword)
    'fr.b1.recits-au-passe.1515',             // chaque été   (b1.02 owns the headword)
  ],
  act9: [] as string[],
  act10: ['fr.a2.objets.109'],                // J'ai laissé mon portefeuille à la maison, alors je n'ai pas payé.
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a2.corps.016',        // sentence, review
  'fr.b1.cuisine.015',      // sentence, dictation
  'fr.a2.famille.010',      // sentence, review
  'fr.a2.routines.045',     // dictation
  'fr.a2.deplacements.011', // sentence, review
  'fr.sons.liaisons.048',   // sentence, review
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.cafe.083', 'fr.b1.cafe.085', 'fr.b1.cafe.096', 'fr.b1.maison.067', 'fr.b1.maison.073',
  'fr.b1.routines.080', 'fr.b1.routines.092', 'fr.b1.sports-et-loisirs.086', 'fr.b1.heure-et-date.017',
  'fr.a2.objets.106', 'fr.a2.objets.109', 'fr.a2.routines.061', 'fr.a2.routines.063', 'fr.a2.cuisine.042',
  'fr.a2.heure-et-date.138',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with ⁿ, and NO U+203F
 *  tie: a liaison consonant moves onto the next syllable (« eh-ta-ree-VAY »).
 *
 *  FOUR RESPELLINGS ARE SPELLED FOR THE NASAL CHECKER, not against the ear:
 *  `PLENN` (pleine), `deu-ZYEM` (deuxième, the house value on three published
 *  rows) and `TRAMM` (tram, twice). A single closing M or N after a vowel is
 *  read by `hasPlainNasal` as a nasal vowel written the old way, and the seed's
 *  own « luh TRAHM » is flagged by it; doubling the consonant is a2.34's -YENN
 *  precedent and keeps the real consonant audible.
 *
 *  THE -ais / -ait / -aient ENDINGS ARE ONE SOUND, [ɛ], respelled `-eh`, and
 *  they are never stressed in a long sentence: the caps sit on the group's
 *  final syllable, which is b1.01's house pattern for the same forms.
 *
 *  AGREEMENT: the -é rows with être are masculine unless tagged `agree-f`.
 *  Act 5 and act 10 carry both, because agreement is a task criterion.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['passe-compose-imparfait'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE RÉCIT CASSÉ ─────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(201, "On m'a volé mon vélo.", 'My bike was stolen.', '/ɔ̃ ma vɔ.le mɔ̃ ve.lo/', 'ohⁿ ma vo-LAY mohⁿ vay-LOH', ['scene', 'action'], FCVDR),
  sent(202, "Je lisais le journal quand quelqu'un a pris mon vélo.", 'I was reading the paper when someone took my bike.', '/ʒə li.zɛ lə ʒuʁ.nal kɑ̃ kɛl.kœ̃ a pʁi mɔ̃ ve.lo/', 'zhuh lee-zeh luh zhoor-NAL kahⁿ kehl-KUHⁿ a pree mohⁿ vay-LOH', ['scene', 'coupure', 'quand'], FCVR,
    gap("Je ___ (lire) le journal quand quelqu'un ___ (prendre) mon vélo.", 'lisais: la lecture était en cours. a pris: le vol la coupe.')),
  sent(203, 'Il pleuvait et la terrasse était vide.', 'It was raining and the terrace was empty.', '/il plø.vɛ e la tɛ.ʁas e.tɛ vid/', 'eel pluh-veh ay la teh-RASS ay-teh VEED', ['scene', 'decor'], FCVDR),
  sent(204, "J'ai lu le journal, puis quelqu'un a pris mon vélo.", 'I read the paper, then someone took my bike.', '/ʒe ly lə ʒuʁ.nal pɥi kɛl.kœ̃ a pʁi mɔ̃ ve.lo/', 'zhay lü luh zhoor-NAL pwee kehl-KUHⁿ a pree mohⁿ vay-LOH', ['scene', 'suite'], FCVR),
  sent(205, 'Mon vélo était attaché devant le café.', 'My bike was locked up outside the café.', '/mɔ̃ ve.lo e.tɛ a.ta.ʃe də.vɑ̃ lə ka.fe/', 'mohⁿ vay-LOH ay-teh a-ta-SHAY duh-vahⁿ luh ka-FAY', ['scene', 'decor', 'etat'], FCVR),
  sent(206, "Quand je suis sorti, le vélo n'était plus là.", 'When I came out, the bike was no longer there.', '/kɑ̃ ʒə sɥi sɔʁ.ti lə ve.lo ne.tɛ ply la/', 'kahⁿ zhuh swee sor-TEE luh vay-LOH nay-teh plü LA', ['scene', 'decor', 'agree-m'], FCVR),
  sent(1000, 'Mardi, il faisait gris et la rue était calme.', 'On Tuesday it was grey and the street was quiet.', '/maʁ.di il fə.zɛ ɡʁi e la ʁy e.tɛ kalm/', 'mar-DEE eel fuh-zeh GREE ay la RÜ ay-teh KALM', ['scene', 'decor', 'meteo']),
  sent(1001, "Un homme s'est arrêté devant le café.", 'A man stopped outside the café.', '/œ̃.nɔm sɛ.ta.ʁe.te də.vɑ̃ lə ka.fe/', 'uhⁿ-nom seh-ta-ray-TAY duh-vahⁿ luh ka-FAY', ['scene', 'action']),
  sent(1002, 'Il a coupé le cadenas et il est parti.', 'He cut the lock and left.', '/il a ku.pe lə kad.na e il ɛ paʁ.ti/', 'eel a koo-PAY luh kad-NA ay eel eh par-TEE', ['scene', 'action', 'suite'], FCVDR),
  sent(1003, "Je buvais un café quand j'ai entendu un bruit.", 'I was drinking a coffee when I heard a noise.', '/ʒə by.vɛ œ̃ ka.fe kɑ̃ ʒe ɑ̃.tɑ̃.dy œ̃ bʁɥi/', 'zhuh bü-veh uhⁿ ka-FAY kahⁿ zhay ahⁿ-tahⁿ-DÜ uhⁿ BRWEE', ['scene', 'coupure', 'quand']),
  sent(1004, 'La policière a noté ma déclaration.', 'The officer wrote down my statement.', '/la pɔ.li.sjɛʁ a nɔ.te ma de.kla.ʁa.sjɔ̃/', 'la po-lee-SYEHR a no-TAY ma day-kla-ra-SYOHⁿ', ['scene', 'action']),
  sent(1005, 'Je ne comprenais pas ce qui se passait.', 'I did not understand what was going on.', '/ʒə nə kɔ̃.pʁə.nɛ pa sə ki sə pa.sɛ/', 'zhuh nuh kohⁿ-pruh-neh PA suh kee suh pa-SEH', ['scene', 'decor', 'etat']),
];

/* ── ACT 2 · LE FILM : DÉCOR ET ACTION ──────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(280, REFRAME, REFRAME_EN, '/li.paʁ.fɛ poz lə de.kɔʁ lə pa.se kɔ̃.po.ze fɛ.ta.vɑ̃.se lə film/', 'lee-par-FEH poz luh day-KOR luh pa-say kohⁿ-poh-ZAY feh-ta-vahⁿ-SAY luh FEELM', ['rule', 'reframe'], ['flashcard'],
    rule('Imparfait ou passé composé : quel est le rôle de chacun ?', 'Ex : Il pleuvait (le décor). Le téléphone a sonné (l’action).')),
  sent(1010, "Qu'est-ce qui se passait ? Qu'est-ce qui s'est passé ?", 'What was going on? What happened?', '/kɛs ki sə pa.sɛ kɛs ki sɛ pa.se/', 'kehs kee suh pa-SEH kehs kee seh pa-SAY', ['rule', 'test'], ['flashcard'],
    rule('Quelles deux questions séparent le décor et l’action ?', 'La première réponse est à l’imparfait, la deuxième au passé composé.')),
  sent(1011, 'Il faisait chaud et les fenêtres étaient ouvertes.', 'It was hot and the windows were open.', '/il fə.zɛ ʃo e le fə.nɛtʁ e.tɛ u.vɛʁt/', 'eel fuh-zeh SHOH ay lay fuh-NEHTR ay-teh oo-VEHRT', ['decor', 'meteo']),
  sent(1012, 'La salle était pleine et tout le monde parlait.', 'The room was full and everyone was talking.', '/la sal e.tɛ plɛn e tu lə mɔ̃d paʁ.lɛ/', 'la SAL ay-teh PLENN ay too luh mohⁿd par-LEH', ['decor', 'etat']),
  sent(1013, 'Mon frère avait dix ans et il jouait au hockey.', 'My brother was ten and he played hockey.', '/mɔ̃ fʁɛʁ a.vɛ di.zɑ̃ e il ʒu.ɛ o ɔ.kɛ/', 'mohⁿ FREHR a-veh dee-ZAHⁿ ay eel zhoo-eh oh o-KEH', ['decor', 'age', 'quebec']),
  sent(1014, 'Nous habitions dans un petit appartement.', 'We lived in a small flat.', '/nu.za.bi.tjɔ̃ dɑ̃.zœ̃ pə.ti.ta.paʁ.tə.mɑ̃/', 'noo-za-bee-TYOHⁿ dahⁿ-zuhⁿ puh-tee-ta-par-tuh-MAHⁿ', ['decor', 'etat']),
  sent(1015, 'Le métro était en retard ce matin-là.', 'The metro was late that morning.', '/lə me.tʁo e.tɛ ɑ̃ ʁə.taʁ sə ma.tɛ̃ la/', 'luh may-TROH ay-teh ahⁿ ruh-TAR suh ma-tehⁿ-LA', ['decor', 'etat']),
  sent(1016, 'Le train est parti à huit heures pile.', 'The train left at eight on the dot.', '/lə tʁɛ̃ ɛ paʁ.ti a ɥi.tœʁ pil/', 'luh TREHⁿ eh par-TEE a wee-tuhr PEEL', ['action'], FCVDR),
  sent(1017, "J'ai retrouvé mes clés sous le canapé.", 'I found my keys under the sofa.', '/ʒe ʁə.tʁu.ve me kle su lə ka.na.pe/', 'zhay ruh-troo-VAY may KLAY soo luh ka-na-PAY', ['action']),
  sent(1018, 'Elle a ouvert la porte et elle a allumé la lumière.', 'She opened the door and turned on the light.', '/ɛ.la u.vɛʁ la pɔʁt e ɛ.la a.ly.me la ly.mjɛʁ/', 'eh-la oo-VEHR la PORT ay eh-la a-lü-MAY la lü-MYEHR', ['action', 'suite']),
  sent(1019, 'Nous sommes rentrés à pied.', 'We walked home.', '/nu sɔm ʁɑ̃.tʁe a pje/', 'noo som rahⁿ-TRAY a PYAY', ['action', 'etre']),
  sent(1020, 'Le voisin a frappé à la porte.', 'The neighbour knocked at the door.', '/lə vwa.zɛ̃ a fʁa.pe a la pɔʁt/', 'luh vwa-ZEHⁿ a fra-PAY a la PORT', ['action'], FCVDR),
  sent(1021, 'Il pleuvait quand le voisin a frappé à la porte.', 'It was raining when the neighbour knocked at the door.', '/il plø.vɛ kɑ̃ lə vwa.zɛ̃ a fʁa.pe a la pɔʁt/', 'eel pluh-veh kahⁿ luh vwa-ZEHⁿ a fra-PAY a la PORT', ['decor', 'action', 'coupure'], FCVR,
    gap('Il ___ (pleuvoir) quand le voisin ___ (frapper) à la porte.', 'Le décor d’abord, puis l’action qui arrive dedans.')),
];

/* ── ACT 3 · LA COUPURE ─────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(210, 'Je dormais quand le téléphone a sonné.', 'I was sleeping when the phone rang.', '/ʒə dɔʁ.mɛ kɑ̃ lə te.le.fɔn a sɔ.ne/', 'zhuh dor-meh kahⁿ luh tay-lay-FON a so-NAY', ['coupure', 'quand'], FCVDR,
    gap('Je ___ (dormir) quand le téléphone ___ (sonner).', 'dormais: déjà en cours. a sonné: l’action qui coupe.')),
  sent(211, 'Pendant que je cuisinais, il est arrivé.', 'While I was cooking, he arrived.', '/pɑ̃.dɑ̃ kə ʒə kɥi.zi.nɛ il ɛ.ta.ʁi.ve/', 'pahⁿ-dahⁿ kuh zhuh kwee-zee-neh eel eh-ta-ree-VAY', ['coupure', 'pendant-que'], FCVR,
    gap('Pendant que je ___ (cuisiner), il ___ (arriver).', 'pendant que ouvre le décor; l’action arrive au milieu.')),
  sent(212, "Nous mangions quand la lumière s'est éteinte.", 'We were eating when the light went out.', '/nu mɑ̃.ʒjɔ̃ kɑ̃ la ly.mjɛʁ sɛ.te.tɛ̃t/', 'noo mahⁿ-ZHYOHⁿ kahⁿ la lü-MYEHR seh-tay-TEHⁿT', ['coupure', 'quand']),
  sent(213, "Elle traversait la rue quand elle a vu l'accident.", 'She was crossing the street when she saw the accident.', '/ɛl tʁa.vɛʁ.sɛ la ʁy kɑ̃.tɛl a vy lak.si.dɑ̃/', 'ehl tra-vehr-seh la RÜ kahⁿ-tehl a vü lak-see-DAHⁿ', ['coupure', 'quand']),
  sent(214, 'Il conduisait quand sa voiture est tombée en panne.', 'He was driving when his car broke down.', '/il kɔ̃.dɥi.zɛ kɑ̃ sa vwa.tyʁ ɛ tɔ̃.be ɑ̃ pan/', 'eel kohⁿ-dwee-zeh kahⁿ sa vwa-TÜR eh tohⁿ-BAY ahⁿ PAN', ['coupure', 'quand', 'panne']),
  sent(215, 'Pendant que tu étais au travail, le facteur est passé.', 'While you were at work, the mail carrier came by.', '/pɑ̃.dɑ̃ kə ty e.tɛ o tʁa.vaj lə fak.tœʁ ɛ pa.se/', 'pahⁿ-dahⁿ kuh tü ay-teh oh tra-VAÏ luh fak-TUHR eh pa-SAY', ['coupure', 'pendant-que', 'etat']),
  sent(1030, 'Je prenais ma douche quand le facteur a sonné.', 'I was in the shower when the mail carrier rang.', '/ʒə pʁə.nɛ ma duʃ kɑ̃ lə fak.tœʁ a sɔ.ne/', 'zhuh pruh-neh ma DOOSH kahⁿ luh fak-TUHR a so-NAY', ['coupure', 'quand'], FCVDR),
  sent(1031, 'Nous regardions le match quand il y a eu une panne.', 'We were watching the game when the power went.', '/nu ʁə.ɡaʁ.djɔ̃ lə matʃ kɑ̃.til ja y yn pan/', 'noo ruh-gar-DYOHⁿ luh MATCH kahⁿ-teel ya Ü ün PAN', ['coupure', 'quand', 'panne']),
  sent(1032, "Pendant qu'elle parlait au téléphone, le bébé s'est endormi.", 'While she was on the phone, the baby fell asleep.', '/pɑ̃.dɑ̃ kɛl paʁ.lɛ o te.le.fɔn lə be.be sɛ.tɑ̃.dɔʁ.mi/', 'pahⁿ-dahⁿ kehl par-leh oh tay-lay-FON luh bay-BAY seh-tahⁿ-dor-MEE', ['coupure', 'pendant-que']),
  sent(1033, 'Il faisait la queue quand son train est parti.', 'He was queuing when his train left.', '/il fə.zɛ la kø kɑ̃ sɔ̃ tʁɛ̃ ɛ paʁ.ti/', 'eel fuh-zeh la KEU kahⁿ sohⁿ TREHⁿ eh par-TEE', ['coupure', 'quand']),
  sent(1034, 'Pendant que nous dînions, un orage a éclaté.', 'While we were having dinner, a storm broke.', '/pɑ̃.dɑ̃ kə nu di.njɔ̃ œ̃.nɔ.ʁaʒ a e.kla.te/', 'pahⁿ-dahⁿ kuh noo dee-NYOHⁿ uhⁿ-no-RAZH a ay-kla-TAY', ['coupure', 'pendant-que', 'meteo']),
  sent(1035, "Je sortais du métro quand j'ai vu Malick.", 'I was coming out of the metro when I saw Malick.', '/ʒə sɔʁ.tɛ dy me.tʁo kɑ̃ ʒe vy ma.lik/', 'zhuh sor-teh dü may-TROH kahⁿ zhay VÜ ma-LEEK', ['coupure', 'quand']),
  sent(1036, 'Tu dormais quand je suis rentré.', 'You were asleep when I got home.', '/ty dɔʁ.mɛ kɑ̃ ʒə sɥi ʁɑ̃.tʁe/', 'tü dor-meh kahⁿ zhuh swee rahⁿ-TRAY', ['coupure', 'quand', 'agree-m'], FCVDR),
  sent(1037, 'Quand le professeur est entré, les élèves parlaient encore.', 'When the teacher came in, the students were still talking.', '/kɑ̃ lə pʁɔ.fɛ.sœʁ ɛ.tɑ̃.tʁe le.ze.lɛv paʁ.lɛ ɑ̃.kɔʁ/', 'kahⁿ luh pro-feh-SUHR eh-tahⁿ-TRAY lay-zay-LEHV par-leh ahⁿ-KOR', ['coupure', 'ordre']),
  sent(1038, 'Les enfants dormaient quand nous sommes arrivés.', 'The children were asleep when we arrived.', '/le.zɑ̃.fɑ̃ dɔʁ.mɛ kɑ̃ nu sɔm.za.ʁi.ve/', 'lay-zahⁿ-fahⁿ dor-meh kahⁿ noo som-za-ree-VAY', ['coupure', 'ordre']),
];

/* ── ACT 4 · DEUX DÉCORS EN MÊME TEMPS ──────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(220, 'Pendant que je lisais, il regardait la télé.', 'While I was reading, he was watching TV.', '/pɑ̃.dɑ̃ kə ʒə li.zɛ il ʁə.ɡaʁ.dɛ la te.le/', 'pahⁿ-dahⁿ kuh zhuh lee-zeh eel ruh-gar-deh la tay-LAY', ['ensemble', 'pendant-que'], FCVDR,
    gap('Pendant que je ___ (lire), il ___ (regarder) la télé.', 'Deux choses en même temps, et rien n’arrive: deux imparfaits.')),
  sent(221, 'Les enfants jouaient pendant que les parents parlaient.', 'The children were playing while the parents were talking.', '/le.zɑ̃.fɑ̃ ʒu.ɛ pɑ̃.dɑ̃ kə le pa.ʁɑ̃ paʁ.lɛ/', 'lay-zahⁿ-fahⁿ zhoo-eh pahⁿ-dahⁿ kuh lay pa-rahⁿ par-LEH', ['ensemble', 'pendant-que']),
  sent(222, 'Il neigeait et les rues étaient vides.', 'It was snowing and the streets were empty.', '/il nɛ.ʒɛ e le ʁy e.tɛ vid/', 'eel neh-zheh ay lay rü ay-teh VEED', ['ensemble', 'decor', 'meteo']),
  sent(1045, 'Pendant que je faisais la vaisselle, mon fils faisait ses devoirs.', 'While I was doing the dishes, my son was doing his homework.', '/pɑ̃.dɑ̃ kə ʒə fə.zɛ la vɛ.sɛl mɔ̃ fis fə.zɛ se də.vwaʁ/', 'pahⁿ-dahⁿ kuh zhuh fuh-zeh la veh-SEHL mohⁿ FEESS fuh-zeh say duh-VWAR', ['ensemble', 'pendant-que']),
  sent(1046, 'Il neigeait dehors et le feu brûlait dans le salon.', 'It was snowing outside and the fire was burning in the living room.', '/il nɛ.ʒɛ də.ɔʁ e lə fø bʁy.lɛ dɑ̃ lə sa.lɔ̃/', 'eel neh-zheh duh-OR ay luh FEU brü-leh dahⁿ luh sa-LOHⁿ', ['ensemble', 'decor']),
  sent(1047, 'Ma mère cuisinait pendant que mon père écoutait la radio.', 'My mother was cooking while my father listened to the radio.', '/ma mɛʁ kɥi.zi.nɛ pɑ̃.dɑ̃ kə mɔ̃ pɛʁ e.ku.tɛ la ʁa.djo/', 'ma MEHR kwee-zee-neh pahⁿ-dahⁿ kuh mohⁿ PEHR ay-koo-teh la ra-DYOH', ['ensemble', 'pendant-que']),
  sent(1048, 'Les uns dansaient et les autres discutaient dans la cuisine.', 'Some were dancing and others were talking in the kitchen.', '/le.zœ̃ dɑ̃.sɛ e le.zotʁ dis.ky.tɛ dɑ̃ la kɥi.zin/', 'lay-ZUHⁿ dahⁿ-seh ay lay-ZOHTR dees-kü-teh dahⁿ la kwee-ZEEN', ['ensemble']),
  sent(1049, 'Le bébé dormait et la maison était silencieuse.', 'The baby was asleep and the house was silent.', '/lə be.be dɔʁ.mɛ e la mɛ.zɔ̃ e.tɛ si.lɑ̃.sjøz/', 'luh bay-BAY dor-meh ay la meh-ZOHⁿ ay-teh see-lahⁿ-SYEUZ', ['ensemble', 'decor'], FCVDR),
];

/* ── ACT 5 · LA SUITE D'ACTIONS ─────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(230, 'Je me suis levé, je me suis habillé et je suis sorti.', 'I got up, I got dressed and I went out.', '/ʒə mə sɥi lə.ve ʒə mə sɥi.za.bi.je e ʒə sɥi sɔʁ.ti/', 'zhuh muh swee luh-VAY zhuh muh swee-za-bee-YAY ay zhuh swee sor-TEE', ['suite', 'pronominal', 'agree-m']),
  sent(231, "Elle s'est levée, elle a pris un café et elle est partie.", 'She got up, had a coffee and left.', '/ɛl sɛ lə.ve ɛ.la pʁi œ̃ ka.fe e ɛ.lɛ paʁ.ti/', 'ehl seh luh-VAY eh-la pree uhⁿ ka-FAY ay eh-leh par-TEE', ['suite', 'agree-f']),
  sent(232, "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire.", 'First I called the police, then I filled in a form.', '/da.bɔʁ ʒe a.ple la pɔ.lis pɥi ʒe ʁɑ̃.pli œ̃ fɔʁ.my.lɛʁ/', 'da-BOR zhay ap-LAY la po-LEES pwee zhay rahⁿ-PLEE uhⁿ for-mü-LEHR', ['suite', 'connecteur'], FCVDR),
  sent(233, "Il est entré, il a regardé autour de lui et il s'est assis.", 'He came in, looked around and sat down.', '/il ɛ.tɑ̃.tʁe il a ʁə.ɡaʁ.de o.tuʁ də lɥi e il sɛ.ta.si/', 'eel eh-tahⁿ-TRAY eel a ruh-gar-DAY oh-toor duh LWEE ay eel seh-ta-SEE', ['suite']),
  sent(1055, "Je me suis réveillée, j'ai pris une douche et je suis partie au travail.", 'I woke up, had a shower and left for work.', '/ʒə mə sɥi ʁe.ve.je ʒe pʁi yn duʃ e ʒə sɥi paʁ.ti o tʁa.vaj/', 'zhuh muh swee ray-vay-YAY zhay pree ün DOOSH ay zhuh swee par-TEE oh tra-VAÏ', ['suite', 'pronominal', 'agree-f']),
  sent(1056, 'Elle a ouvert son ordinateur, elle a lu ses courriels et elle a répondu.', 'She opened her laptop, read her emails and replied.', '/ɛ.la u.vɛʁ sɔ̃.nɔʁ.di.na.tœʁ ɛ.la ly se ku.ʁjɛl e ɛ.la ʁe.pɔ̃.dy/', 'eh-la oo-VEHR sohⁿ-nor-dee-na-TUHR eh-la LÜ say koo-RYEHL ay eh-la ray-pohⁿ-DÜ', ['suite', 'quebec']),
  sent(1057, 'Nous sommes montés dans le bus et nous nous sommes assis.', 'We got on the bus and sat down.', '/nu sɔm mɔ̃.te dɑ̃ lə bys e nu nu sɔm.za.si/', 'noo som mohⁿ-TAY dahⁿ luh BÜS ay noo noo som-za-SEE', ['suite', 'pronominal']),
  sent(1058, "D'abord, il a fermé la porte. Ensuite, il a éteint la lumière.", 'First he shut the door. Then he turned off the light.', '/da.bɔʁ il a fɛʁ.me la pɔʁt ɑ̃.sɥit il a e.tɛ̃ la ly.mjɛʁ/', 'da-BOR eel a fehr-MAY la PORT ahⁿ-SWEET eel a ay-TEHⁿ la lü-MYEHR', ['suite', 'connecteur'], FCVDR),
  sent(1059, 'Finalement, nous avons pris un taxi.', 'In the end we took a taxi.', '/fi.nal.mɑ̃ nu.za.vɔ̃ pʁi œ̃ tak.si/', 'fee-nal-MAHⁿ noo-za-vohⁿ pree uhⁿ tak-SEE', ['suite', 'connecteur'], FCVDR),
  sent(1060, 'Puis le téléphone a sonné une deuxième fois.', 'Then the phone rang a second time.', '/pɥi lə te.le.fɔn a sɔ.ne yn dø.zjɛm fwa/', 'pwee luh tay-lay-FON a so-NAY ün deu-ZYEM FWA', ['suite', 'connecteur']),
  phrase(1061, "d'abord", 'first', '/da.bɔʁ/', 'da-BOR', ['connecteur']),
  phrase(1062, 'ensuite', 'then, next', '/ɑ̃.sɥit/', 'ahⁿ-SWEET', ['connecteur']),
  phrase(1063, 'puis', 'then', '/pɥi/', 'PWEE', ['connecteur']),
  phrase(1064, 'alors', 'so', '/a.lɔʁ/', 'a-LOR', ['connecteur']),
  phrase(1065, 'finalement', 'in the end', '/fi.nal.mɑ̃/', 'fee-nal-MAHⁿ', ['connecteur']),
  phrase(1066, 'tout de suite après', 'right after that', '/tut sɥi.ta.pʁɛ/', 'toot swee-ta-PREH', ['connecteur']),
];

/* ── ACT 6 · LONG, MAIS FERMÉ ───────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(240, "J'ai habité à Lyon pendant dix ans.", 'I lived in Lyon for ten years.', '/ʒe a.bi.te a ljɔ̃ pɑ̃.dɑ̃ di.zɑ̃/', 'zhay a-bee-TAY a LYOHⁿ pahⁿ-dahⁿ dee-ZAHⁿ', ['duree', 'ferme'], FCVDR,
    gap("J'___ (habiter) à Lyon pendant dix ans.", 'Dix ans, donnés et finis: une durée fermée.')),
  sent(241, "J'habitais à Lyon quand j'ai rencontré Claire.", 'I was living in Lyon when I met Claire.', '/ʒa.bi.tɛ a ljɔ̃ kɑ̃ ʒe ʁɑ̃.kɔ̃.tʁe klɛʁ/', 'zha-bee-teh a LYOHⁿ kahⁿ zhay rahⁿ-kohⁿ-tray KLEHR', ['duree', 'ouverte', 'coupure'], FCVR,
    gap("J'___ (habiter) à Lyon quand j'___ (rencontrer) Claire.", 'Lyon est le décor de la rencontre: pas de durée donnée.')),
  sent(242, 'Il a plu toute la journée.', 'It rained all day.', '/il a ply tut la ʒuʁ.ne/', 'eel a PLÜ toot la zhoor-NAY', ['duree', 'ferme', 'meteo'], FCVDR),
  sent(243, 'Il pleuvait quand je suis sorti.', 'It was raining when I went out.', '/il plø.vɛ kɑ̃ ʒə sɥi sɔʁ.ti/', 'eel pluh-veh kahⁿ zhuh swee sor-TEE', ['duree', 'ouverte', 'meteo', 'agree-m']),
  sent(244, "Nous avons attendu deux heures à l'urgence.", 'We waited two hours at the emergency room.', '/nu.za.vɔ̃.za.tɑ̃.dy dø.zœʁ a lyʁ.ʒɑ̃s/', 'noo-za-vohⁿ-za-tahⁿ-DÜ deu-ZUHR a lür-ZHAHⁿS', ['duree', 'ferme', 'quebec']),
  sent(1070, "J'ai travaillé dans ce bureau pendant cinq ans.", 'I worked in that office for five years.', '/ʒe tʁa.va.je dɑ̃ sə by.ʁo pɑ̃.dɑ̃ sɛ̃.kɑ̃/', 'zhay tra-va-YAY dahⁿ suh bü-ROH pahⁿ-dahⁿ sehⁿ-KAHⁿ', ['duree', 'ferme']),
  sent(1071, 'Elle a étudié le français pendant six mois.', 'She studied French for six months.', '/ɛ.la e.ty.dje lə fʁɑ̃.sɛ pɑ̃.dɑ̃ si mwa/', 'eh-la ay-tü-DYAY luh frahⁿ-SEH pahⁿ-dahⁿ see MWA', ['duree', 'ferme']),
  sent(1072, 'Nous avons marché pendant trois heures.', 'We walked for three hours.', '/nu.za.vɔ̃ maʁ.ʃe pɑ̃.dɑ̃ tʁwa.zœʁ/', 'noo-za-vohⁿ mar-SHAY pahⁿ-dahⁿ trwa-ZUHR', ['duree', 'ferme']),
  sent(1073, 'Il a neigé toute la nuit.', 'It snowed all night.', '/il a nɛ.ʒe tut la nɥi/', 'eel a neh-ZHAY toot la NWEE', ['duree', 'ferme', 'meteo'], FCVDR),
  sent(1074, "J'ai attendu longtemps devant la porte.", 'I waited a long time outside the door.', '/ʒe a.tɑ̃.dy lɔ̃.tɑ̃ də.vɑ̃ la pɔʁt/', 'zhay a-tahⁿ-DÜ lohⁿ-TAHⁿ duh-vahⁿ la PORT', ['duree', 'ferme']),
  sent(1075, "Pendant quatre ans, j'ai vécu à Abidjan.", 'For four years I lived in Abidjan.', '/pɑ̃.dɑ̃ ka.tʁɑ̃ ʒe ve.ky a a.bi.dʒɑ̃/', 'pahⁿ-dahⁿ ka-TRAHⁿ zhay vay-KÜ a a-beed-ZHAHⁿ', ['duree', 'ferme']),
  sent(1076, 'Quand je travaillais à Abidjan, je rentrais tard.', 'When I was working in Abidjan, I used to get home late.', '/kɑ̃ ʒə tʁa.va.jɛ a a.bi.dʒɑ̃ ʒə ʁɑ̃.tʁɛ taʁ/', 'kahⁿ zhuh tra-va-yeh a a-beed-ZHAHⁿ zhuh rahⁿ-treh TAR', ['duree', 'ouverte', 'habitude']),
  sent(1077, 'À cette époque, nous habitions près du marché.', 'At that time we lived near the market.', '/a sɛ.te.pɔk nu.za.bi.tjɔ̃ pʁɛ dy maʁ.ʃe/', 'a seh-tay-POK noo-za-bee-TYOHⁿ preh dü mar-SHAY', ['duree', 'ouverte']),
  phrase(1078, 'pendant deux ans', 'for two years', '/pɑ̃.dɑ̃ dø.zɑ̃/', 'pahⁿ-dahⁿ deu-ZAHⁿ', ['marqueur', 'ferme']),
  phrase(1079, 'toute la journée', 'all day', '/tut la ʒuʁ.ne/', 'toot la zhoor-NAY', ['marqueur', 'ferme']),
  phrase(1080, 'longtemps', 'a long time', '/lɔ̃.tɑ̃/', 'lohⁿ-TAHⁿ', ['marqueur', 'ferme']),
  phrase(1081, 'à cette époque', 'at that time', '/a sɛ.te.pɔk/', 'a seh-tay-POK', ['marqueur', 'ouverte']),
  phrase(1082, 'en deux heures', 'in two hours', '/ɑ̃ dø.zœʁ/', 'ahⁿ deu-ZUHR', ['marqueur', 'ferme']),
];

/* ── ACT 7 · UN VERBE, DEUX TEMPS ───────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(250, "Je marchais seul, puis nous avons marché ensemble jusqu'au métro.", 'I was walking alone, then we walked together to the metro.', '/ʒə maʁ.ʃɛ sœl pɥi nu.za.vɔ̃ maʁ.ʃe ɑ̃.sɑ̃bl ʒys.ko me.tʁo/', 'zhuh mar-sheh SUHL pwee noo-za-vohⁿ mar-SHAY ahⁿ-SAHⁿBL zhüs-koh may-TROH', ['meme-verbe']),
  sent(251, "Il pleuvait quand je suis parti, et il a plu jusqu'au soir.", 'It was raining when I left, and it rained until evening.', '/il plø.vɛ kɑ̃ ʒə sɥi paʁ.ti e il a ply ʒys.ko swaʁ/', 'eel pluh-veh kahⁿ zhuh swee par-TEE ay eel a plü zhüs-koh SWAR', ['meme-verbe', 'meteo', 'agree-m']),
  sent(1090, 'Il pleuvait quand nous sommes sortis.', 'It was raining when we went out.', '/il plø.vɛ kɑ̃ nu sɔm sɔʁ.ti/', 'eel pluh-veh kahⁿ noo som sor-TEE', ['meme-verbe', 'decor']),
  sent(1091, 'Il a plu pendant deux heures.', 'It rained for two hours.', '/il a ply pɑ̃.dɑ̃ dø.zœʁ/', 'eel a PLÜ pahⁿ-dahⁿ deu-ZUHR', ['meme-verbe', 'ferme'], FCVDR),
  sent(1092, 'Ce jour-là, je travaillais à la maison.', 'That day I was working from home.', '/sə ʒuʁ la ʒə tʁa.va.jɛ a la mɛ.zɔ̃/', 'suh zhoor-LA zhuh tra-va-yeh a la meh-ZOHⁿ', ['meme-verbe', 'decor']),
  sent(1093, "J'ai travaillé jusqu'à minuit.", 'I worked until midnight.', '/ʒe tʁa.va.je ʒys.ka mi.nɥi/', 'zhay tra-va-YAY zhüs-ka mee-NWEE', ['meme-verbe', 'ferme']),
  sent(1094, 'Elle lisait un roman dans le train.', 'She was reading a novel on the train.', '/ɛl li.zɛ œ̃ ʁɔ.mɑ̃ dɑ̃ lə tʁɛ̃/', 'ehl lee-zeh uhⁿ ro-MAHⁿ dahⁿ luh TREHⁿ', ['meme-verbe', 'decor']),
  sent(1095, 'Elle a lu tout le roman en une nuit.', 'She read the whole novel in one night.', '/ɛ.la ly tu lə ʁɔ.mɑ̃ ɑ̃.nyn nɥi/', 'eh-la LÜ too luh ro-MAHⁿ ahⁿ-nün NWEE', ['meme-verbe', 'ferme']),
  sent(1096, 'Nous habitions à Sherbrooke.', 'We used to live in Sherbrooke.', '/nu.za.bi.tjɔ̃ a ʃɛʁ.bʁuk/', 'noo-za-bee-TYOHⁿ a shehr-BROOK', ['meme-verbe', 'decor', 'quebec']),
  sent(1097, 'Nous avons habité à Sherbrooke pendant dix ans.', 'We lived in Sherbrooke for ten years.', '/nu.za.vɔ̃.za.bi.te a ʃɛʁ.bʁuk pɑ̃.dɑ̃ di.zɑ̃/', 'noo-za-vohⁿ-za-bee-TAY a shehr-BROOK pahⁿ-dahⁿ dee-ZAHⁿ', ['meme-verbe', 'ferme', 'quebec']),
  sent(1098, 'Les enfants jouaient dehors.', 'The children were playing outside.', '/le.zɑ̃.fɑ̃ ʒu.ɛ də.ɔʁ/', 'lay-zahⁿ-fahⁿ zhoo-eh duh-OR', ['meme-verbe', 'decor']),
  sent(1099, 'Les enfants ont joué une heure, puis ils sont rentrés.', 'The children played for an hour, then they went home.', '/le.zɑ̃.fɑ̃.zɔ̃ ʒwe y.nœʁ pɥi il sɔ̃ ʁɑ̃.tʁe/', 'lay-zahⁿ-fahⁿ-zohⁿ zhoo-AY ü-NUHR pwee eel sohⁿ rahⁿ-TRAY', ['meme-verbe', 'ferme', 'suite']),
];

/* ── ACT 8 · DES INDICES, PAS DES RÈGLES ────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(281, "Soudain, tous les jours, d'habitude : ce sont des indices, pas des règles.", 'Suddenly, every day, usually: these are clues, not rules.', '/su.dɛ̃ tu le ʒuʁ da.bi.tyd sə sɔ̃ de.zɛ̃.dis pa de ʁɛɡl/', 'soo-DEHⁿ too lay ZHOOR da-bee-TÜD suh sohⁿ day-zehⁿ-DEES pa day REHGL', ['rule', 'indice'], ['flashcard'],
    rule('Un mot comme « soudain » décide-t-il du temps ?', 'Ex : Soudain, le téléphone a sonné. Mais aussi : Soudain, il faisait noir.')),
  sent(260, 'Soudain, le téléphone a sonné.', 'Suddenly, the phone rang.', '/su.dɛ̃ lə te.le.fɔn a sɔ.ne/', 'soo-DEHⁿ luh tay-lay-FON a so-NAY', ['indice', 'soudain', 'usuel'], FCVDR),
  sent(261, "Soudain, il faisait noir et on n'entendait plus rien.", 'Suddenly it was dark and you could not hear a thing.', '/su.dɛ̃ il fə.zɛ nwaʁ e ɔ̃ nɑ̃.tɑ̃.dɛ ply ʁjɛ̃/', 'soo-DEHⁿ eel fuh-zeh NWAR ay ohⁿ nahⁿ-tahⁿ-deh plü RYEHⁿ', ['indice', 'soudain', 'contre']),
  sent(262, "Un jour, j'ai trouvé un portefeuille dans le métro.", 'One day I found a wallet in the metro.', '/œ̃ ʒuʁ ʒe tʁu.ve œ̃ pɔʁt.fœj dɑ̃ lə me.tʁo/', 'uhⁿ ZHOOR zhay troo-VAY uhⁿ por-tuh-FUHY dahⁿ luh may-TROH', ['indice', 'un-jour', 'usuel']),
  sent(263, "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus.", 'One winter day it was minus twenty and everyone was waiting for the bus.', '/œ̃ ʒuʁ di.vɛʁ il fə.zɛ mwɛ̃ vɛ̃ e tu lə mɔ̃d a.tɑ̃.dɛ lə bys/', 'uhⁿ zhoor dee-VEHR eel fuh-zeh mwehⁿ VEHⁿ ay too luh mohⁿd a-tahⁿ-deh luh BÜS', ['indice', 'un-jour', 'contre', 'quebec']),
  sent(264, 'Tous les jours, je prenais le même bus.', 'Every day I took the same bus.', '/tu le ʒuʁ ʒə pʁə.nɛ lə mɛm bys/', 'too lay ZHOOR zhuh pruh-neh luh mem BÜS', ['indice', 'tous-les-jours', 'usuel']),
  sent(265, "Tous les jours pendant un mois, j'ai couru.", 'Every day for a month I went running.', '/tu le ʒuʁ pɑ̃.dɑ̃.tœ̃ mwa ʒe ku.ʁy/', 'too lay zhoor pahⁿ-dahⁿ-tuhⁿ MWA zhay koo-RÜ', ['indice', 'tous-les-jours', 'contre', 'ferme'], FCVDR),
  sent(266, "D'habitude, il arrivait à huit heures.", 'He usually arrived at eight.', '/da.bi.tyd i.la.ʁi.vɛ a ɥi.tœʁ/', 'da-bee-TÜD ee-la-ree-veh a wee-TUHR', ['indice', 'dhabitude', 'usuel']),
  sent(267, "Ce matin-là, j'ai fait comme d'habitude : j'ai pris le bus.", 'That morning I did what I usually do: I took the bus.', '/sə ma.tɛ̃.la ʒe fɛ kɔm da.bi.tyd ʒe pʁi lə bys/', 'suh ma-tehⁿ-LA zhay feh kom da-bee-TÜD zhay pree luh BÜS', ['indice', 'dhabitude', 'contre']),
  sent(268, "Tout à coup, je n'avais plus envie de rire.", 'All of a sudden I did not feel like laughing any more.', '/tu.ta.ku ʒə na.vɛ ply.zɑ̃.vi də ʁiʁ/', 'too-ta-KOO zhuh na-veh plü-zahⁿ-VEE duh REER', ['indice', 'tout-a-coup', 'contre']),
  sent(269, "Pendant que tu as fait les courses, j'ai rangé la cuisine.", 'While you did the shopping, I tidied the kitchen.', '/pɑ̃.dɑ̃ kə ty a fɛ le kuʁs ʒe ʁɑ̃.ʒe la kɥi.zin/', 'pahⁿ-dahⁿ kuh tü a feh lay KOORS zhay rahⁿ-zhay la kwee-ZEEN', ['indice', 'pendant-que', 'contre']),
  sent(270, "Quand le téléphone a sonné, j'ai répondu.", 'When the phone rang, I answered.', '/kɑ̃ lə te.le.fɔn a sɔ.ne ʒe ʁe.pɔ̃.dy/', 'kahⁿ luh tay-lay-FON a so-NAY zhay ray-pohⁿ-DÜ', ['indice', 'quand', 'suite']),
  sent(271, 'Tout à coup, la porte a claqué.', 'All of a sudden the door slammed.', '/tu.ta.ku la pɔʁt a kla.ke/', 'too-ta-KOO la PORT a kla-KAY', ['indice', 'tout-a-coup', 'usuel'], FCVDR),
  sent(1105, 'Souvent, le dimanche, nous allions chez ma tante.', 'Often, on Sundays, we went to my aunt’s.', '/su.vɑ̃ lə di.mɑ̃ʃ nu.za.ljɔ̃ ʃe ma tɑ̃t/', 'soo-VAHⁿ luh dee-MAHⁿSH noo-za-LYOHⁿ shay ma TAHⁿT', ['indice', 'souvent', 'usuel']),
  sent(1106, 'Ce dimanche-là, nous sommes allés chez ma tante.', 'That Sunday we went to my aunt’s.', '/sə di.mɑ̃ʃ la nu sɔm.za.le ʃe ma tɑ̃t/', 'suh dee-mahⁿsh-LA noo som-za-LAY shay ma TAHⁿT', ['indice', 'ce-jour-la', 'usuel']),
  sent(1107, 'Tout à coup, la salle est devenue silencieuse.', 'All of a sudden the room went silent.', '/tu.ta.ku la sal ɛ dəv.ny si.lɑ̃.sjøz/', 'too-ta-KOO la SAL eh duhv-NÜ see-lahⁿ-SYEUZ', ['indice', 'tout-a-coup', 'usuel']),
  sent(1108, 'À ce moment-là, tout le monde regardait la porte.', 'At that moment everyone was looking at the door.', '/a sə mɔ.mɑ̃ la tu lə mɔ̃d ʁə.ɡaʁ.dɛ la pɔʁt/', 'a suh mo-mahⁿ-LA too luh mohⁿd ruh-gar-deh la PORT', ['indice', 'contre', 'decor']),
  sent(1109, "Une fois, j'ai oublié mon passeport à la maison.", 'Once I left my passport at home.', '/yn fwa ʒe u.bli.je mɔ̃ pas.pɔʁ a la mɛ.zɔ̃/', 'ün FWA zhay oo-blee-YAY mohⁿ pas-POR a la meh-ZOHⁿ', ['indice', 'une-fois', 'usuel']),
  sent(1110, 'Chaque été, nous partions à la mer.', 'Every summer we went to the seaside.', '/ʃak e.te nu paʁ.tjɔ̃ a la mɛʁ/', 'shak ay-TAY noo par-TYOHⁿ a la MEHR', ['indice', 'chaque', 'usuel']),
  phrase(1111, 'soudain', 'suddenly', '/su.dɛ̃/', 'soo-DEHⁿ', ['indice']),
  phrase(1112, 'tout à coup', 'all of a sudden', '/tu.ta.ku/', 'too-ta-KOO', ['indice']),
  phrase(1113, 'un jour', 'one day', '/œ̃ ʒuʁ/', 'uhⁿ ZHOOR', ['indice']),
  phrase(1114, 'tous les jours', 'every day', '/tu le ʒuʁ/', 'too lay ZHOOR', ['indice']),
  phrase(1116, 'ce jour-là', 'that day', '/sə ʒuʁ la/', 'suh zhoor-LA', ['indice']),
  phrase(1118, 'une fois', 'once', '/yn fwa/', 'ün FWA', ['indice']),
];

/* ── ACT 9 · ANNOTER UN RÉCIT ───────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1130, "C'était un samedi de novembre, à Lyon.", 'It was a Saturday in November, in Lyon.', '/se.tɛ œ̃ sam.di də nɔ.vɑ̃bʁ a ljɔ̃/', 'say-teh uhⁿ sam-DEE duh no-VAHⁿBR a LYOHⁿ', ['lecture', 'decor'], FCVDR),
  sent(1131, 'Awa attendait le tram place Bellecour.', 'Awa was waiting for the tram at Place Bellecour.', '/a.wa a.tɑ̃.dɛ lə tʁam plas bɛl.kuʁ/', 'a-WA a-tahⁿ-deh luh TRAMM plas behl-KOOR', ['lecture', 'decor']),
  sent(1132, 'Le tram est arrivé avec dix minutes de retard.', 'The tram came in ten minutes late.', '/lə tʁam ɛ.ta.ʁi.ve a.vɛk di mi.nyt də ʁə.taʁ/', 'luh TRAMM eh-ta-ree-VAY a-vehk dee mee-NÜT duh ruh-TAR', ['lecture', 'action'], FCVDR),
  sent(1133, "Pendant qu'elle dormait à moitié, un homme s'est assis à côté d'elle.", 'While she was half asleep, a man sat down next to her.', '/pɑ̃.dɑ̃ kɛl dɔʁ.mɛ a mwa.tje œ̃.nɔm sɛ.ta.si a ko.te dɛl/', 'pahⁿ-dahⁿ kehl dor-meh a mwa-TYAY uhⁿ-nom seh-ta-SEE a ko-tay DEHL', ['lecture', 'coupure']),
  sent(1134, "Son téléphone n'était plus dans sa poche.", 'Her phone was no longer in her pocket.', '/sɔ̃ te.le.fɔn ne.tɛ ply dɑ̃ sa pɔʃ/', 'sohⁿ tay-lay-FON nay-teh plü dahⁿ sa POSH', ['lecture', 'decor'], FCVDR),
  sent(1135, "L'homme courait déjà vers le pont.", 'The man was already running towards the bridge.', '/lɔm ku.ʁɛ de.ʒa vɛʁ lə pɔ̃/', 'lom koo-reh day-ZHA vehr luh POHⁿ', ['lecture', 'decor']),
  sent(1136, 'Elle a appelé sa sœur et elles sont allées au commissariat.', 'She called her sister and they went to the police station.', '/ɛ.la a.ple sa sœʁ e ɛl sɔ̃.ta.le o kɔ.mi.sa.ʁja/', 'eh-la ap-LAY sa SUHR ay ehl sohⁿ-ta-LAY oh ko-mee-sa-RYA', ['lecture', 'action', 'agree-f']),
  sent(1137, "Le contrôleur est monté et il a demandé les billets.", 'The inspector got on and asked for tickets.', '/lə kɔ̃.tʁo.lœʁ ɛ mɔ̃.te e il a də.mɑ̃.de le bi.jɛ/', 'luh kohⁿ-troh-LUHR eh mohⁿ-TAY ay eel a duh-mahⁿ-DAY lay bee-YEH', ['lecture', 'action']),
];

/* ── ACT 10 · RACONTER ──────────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1150, "Je vais vous raconter ce qui s'est passé.", 'I am going to tell you what happened.', '/ʒə vɛ vu ʁa.kɔ̃.te sə ki sɛ pa.se/', 'zhuh veh voo ra-kohⁿ-TAY suh kee seh pa-SAY', ['recit', 'ouverture']),
  sent(1151, 'Ça a commencé comme un jour normal.', 'It started like an ordinary day.', '/sa a kɔ.mɑ̃.se kɔ.mœ̃ ʒuʁ nɔʁ.mal/', 'sa a ko-mahⁿ-SAY ko-muhⁿ zhoor nor-MAL', ['recit', 'ouverture'], FCVDR),
  sent(1152, 'Jusque-là, tout allait bien.', 'Up to then, everything was fine.', '/ʒys.kə la tu.ta.lɛ bjɛ̃/', 'zhüs-kuh-LA too-ta-leh BYEHⁿ', ['recit', 'decor']),
  sent(1153, "Heureusement, tout s'est bien terminé.", 'Luckily it all ended well.', '/œ.ʁøz.mɑ̃ tu sɛ bjɛ̃ tɛʁ.mi.ne/', 'uh-reuz-MAHⁿ too seh byehⁿ tehr-mee-NAY', ['recit', 'fin']),
  sent(1154, 'Depuis ce jour, je fais attention.', 'Since that day I have been careful.', '/də.pɥi sə ʒuʁ ʒə fɛ.za.tɑ̃.sjɔ̃/', 'duh-pwee suh ZHOOR zhuh feh-za-tahⁿ-SYOHⁿ', ['recit', 'fin']),
  sent(1155, 'Je me souviens encore de cette journée.', 'I still remember that day.', '/ʒə mə su.vjɛ̃.zɑ̃.kɔʁ də sɛt ʒuʁ.ne/', 'zhuh muh soo-vyehⁿ-zahⁿ-KOR duh seht zhoor-NAY', ['recit', 'fin']),
  sent(1156, 'Au début, je ne comprenais pas.', 'At first I did not understand.', '/o de.by ʒə nə kɔ̃.pʁə.nɛ pa/', 'oh day-BÜ zhuh nuh kohⁿ-pruh-neh PA', ['recit', 'decor']),
  sent(1157, 'À la fin, nous avons ri.', 'In the end we laughed.', '/a la fɛ̃ nu.za.vɔ̃ ʁi/', 'a la FEHⁿ noo-za-vohⁿ REE', ['recit', 'fin']),
  sent(1160, 'Une durée fermée prend le passé composé, même si elle est longue.', 'A closed stretch of time takes the passé composé, however long it is.', '/yn dy.ʁe fɛʁ.me pʁɑ̃ lə pa.se kɔ̃.po.ze mɛm si ɛ.lɛ lɔ̃ɡ/', 'ün dü-RAY fehr-MAY prahⁿ luh pa-say kohⁿ-poh-ZAY mem see eh-leh LOHⁿG', ['rule', 'duree'], ['flashcard'],
    rule('Dix ans, c’est long : imparfait ou passé composé ?', 'Ex : J’ai habité à Lyon pendant dix ans.')),
  sent(1161, "Dans une coupure, le décor est à l'imparfait et l'action au passé composé.", 'In an interruption the background is imparfait and the event passé composé.', '/dɑ̃.zyn ku.pyʁ lə de.kɔʁ ɛ.ta lɛ̃.paʁ.fɛ e lak.sjɔ̃ o pa.se kɔ̃.po.ze/', 'dahⁿ-zün koo-PÜR luh day-KOR eh-ta lehⁿ-par-FEH ay lak-SYOHⁿ oh pa-say kohⁿ-poh-ZAY', ['rule', 'coupure'], ['flashcard'],
    rule('Quels temps dans « Je dormais quand le téléphone a sonné » ?', 'La bande à l’imparfait, le point au passé composé.')),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS,
  ACT6_ROWS, ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG READING (act 9) AND ITS ANNOTATION KEY
 *
 *  174 words, counted by density.logic `wordCount` in the scratch check. The
 *  learner marks every finite verb décor or action; the two lists below are
 *  what the annotation drill and the quiz are checked against.
 * ══════════════════════════════════════════════════════════════════════════ */

export const READING_TEXT =
  "C'était un samedi de novembre, à Lyon. Il faisait froid et il pleuvait un peu. Awa attendait le tram place Bellecour. Elle écoutait de la musique et elle pensait à son examen du lundi. Autour d'elle, les gens regardaient leur téléphone et personne ne parlait. Awa était fatiguée et elle avait froid aux mains. Le tram est arrivé avec dix minutes de retard. Awa est montée, elle a trouvé une place et elle a fermé les yeux. Pendant qu'elle dormait à moitié, un homme s'est assis à côté d'elle. Le contrôleur est monté et il a demandé les billets. À l'arrêt suivant, l'homme est descendu très vite. Awa a cherché son téléphone pour changer de musique, mais il n'était plus dans sa poche. Elle a crié, elle a appuyé sur le bouton rouge et elle est descendue. L'homme courait déjà vers le pont. Alors elle a appelé sa sœur avec le téléphone d'une dame, et elles sont allées ensemble au commissariat. Là, un policier a écouté toute l'histoire et il a noté chaque détail.";

export const READING_DECOR = [
  "C'était", 'faisait', 'pleuvait', 'attendait', 'écoutait', 'pensait', 'regardaient', 'parlait',
  'était fatiguée', 'avait froid', 'dormait', "n'était", 'courait',
] as const;

export const READING_ACTION = [
  'est arrivé', 'est montée', 'a trouvé', 'a fermé', "s'est assis", 'est monté', 'a demandé',
  'est descendu', 'a cherché', 'a crié', 'a appuyé', 'est descendue', 'a appelé', 'sont allées',
  'a écouté', 'a noté',
] as const;
