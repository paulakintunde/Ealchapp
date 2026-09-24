// b1.02.l1 « L'imparfait : les emplois » — the authored corpus, the imports
// and the citation constants. REBUILD v2, to RICH-LESSON-STANDARD.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json. The
// 25-mission pilot this replaces is in git history only.
//
// STABLE EXPORTS (imported by b1.03 and b1.04; do not rename or reword):
// REFRAME, REFRAME_EN. Also public: UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE,
// dicteeFor, Cap, frRef.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   WHEN the imparfait is the right tense, with no passé composé beside it.
//
//     tous les samedis, d'habitude, chaque été, souvent, le samedi   habit
//     avant, autrefois, à l'époque  ·  maintenant                    two eras
//     j'étais fatigué, il avait peur, je savais, je connaissais      states
//     la maison était grande, il y avait un jardin                   scenery
//     il faisait froid, il neigeait                                  weather
//     il était minuit, j'avais douze ans                             time, age
//     je lisais dans ma chambre                                      in progress (PREVIEW)
//     je voulais vous demander, je venais pour, je me demandais si   politeness
//     would / used to / was -ing                                     the English traps
//
//   b1.01 owns FORMATION and is re-taught nowhere: act 1 recalls it in three
//   missions and imports its rows. b1.03 owns the interruption and the
//   passé composé contrast: act 7 names it and stops.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `recits-au-passe` (Paul, 2026-09-22). It exists in seed `themes`
//     (domain fondations, levelRange a2-b2) and holds ZERO items, so it is NOT
//     created at import.
//  2. ID BLOCK: this lesson owns `.101`-`.199` and `.800`-`.999`. b1.01 owns
//     `.001`-`.099` and `.401`-`.799`; b1.03 `.201`-`.299` + `.1000`-`.1199`;
//     b1.04 `.301`-`.399` + `.1200`-`.1399`. Used here: `.101`-`.178` and
//     `.800`-`.899`.
//  3. NO B1 UNIT EXISTS in seed `units`, so `unitRef('b1.01')` returns the raw
//     id. b1.01 and b1.03 are cited by relative label (« la leçon précédente /
//     suivante »), never by number.
//  4. IMPORTS FROM b1.01. b1.01 authors the forms this lesson uses (il y
//     avait, il faisait froid, je voulais, je connaissais, C'était un petit
//     village). They are IMPORTED BY ID, never re-authored: two rows with the
//     same `fr` in one theme is the duplicate the flashcard hub cannot tell
//     apart. Both drafts import together, so the ids resolve.
//  5. SEED IMPORTS are the published imparfait sentences with NO passé composé
//     in them (rows like `fr.b1.cafe.096` mix the two tenses and belong to
//     b1.03), plus the present-tense rows that carry a habit cue, which are
//     this lesson's cue-is-not-a-trigger evidence.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. ROWS PER ACT
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le souvenir            .101-.112   12   the scene, the panorama
//    2  L'habitude             .113-.138   25   cues, and cues that fail
//    3  Avant et maintenant    .139-.158   20   two eras in one sentence
//    4  Les états              .159-.178   20   être, avoir, savoir, connaître
//    5  Le décor               .800-.819   20   places, people, things
//    6  La météo, l'heure      .820-.839   20   weather, clock time, age
//    7  L'action en cours      .840-.851   12   PREVIEW only
//    8  La politesse           .852-.871   20   je voulais, je venais
//    9  Les pièges anglais     .872-.887   16   would, used to, was -ing
//   10  Tout ensemble          .888-.899   12   the interview and the task
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';
import { dicteeMode } from '../../../../ealch-v2/src/content/dictee.logic.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.02',
  seq: 2,
  title: 'The Imperfect: Uses',
  sub: "L'imparfait : les emplois",
  canDo: 'Can use the imparfait for habits, states, description, weather, time and age, contrast then and now, and soften a request',
  prereqUnitIds: ['b1.01'],
} as const;

export const LESSON_ID = 'b1.02.l1';
export const THEME = 'recits-au-passe';
export const LEVEL = 'b1' as const;

export const ID_RANGES = [[101, 199], [800, 999]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;
/** A b1.01 row, imported by id. */
export const B = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. CITATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** b1.01's reframe, quoted verbatim in act 1. Imported, never retyped. */
export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';
export const B101_UNIT = 'b1.01';
export const B103_UNIT = 'b1.03';
/** Relative: no B1 unit has a seq in seed.json yet (§A.3). */
export const B101_REF = 'la leçon précédente';
export const B103_REF = 'la leçon suivante';

/** An A2 unit, cited in simple French: « la leçon 16 du niveau A2 ». Resolved
 *  through the shipped `unit.seq`, never typed. An unresolved id comes back
 *  unchanged, so a typo shows up as a raw id instead of a wrong number. */
export function frRef(unitId: string): string {
  const en = unitRef(unitId);
  const m = /^lesson (\d+) in (\w+)$/.exec(en);
  return m ? `la leçon ${m[1]} du niveau ${m[2]}` : en;
}

export const PC_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';
export const MODAL_UNIT = 'a2.13';
export const SAVOIR_UNIT = 'a2.14';
export const PRONOMINAL_UNIT = 'a2.22';
export const Y_EN_UNIT = 'a2.25';
export const METEO_UNIT = 'a1.10';
export const HEURE_UNIT = 'a1.08';

export const PC_REF = frRef(PC_UNIT);
export const MODAL_REF = frRef(MODAL_UNIT);
export const SAVOIR_REF = frRef(SAVOIR_UNIT);
export const METEO_REF = frRef(METEO_UNIT);
export const HEURE_REF = frRef(HEURE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME  (UNCHANGED: b1.03 and b1.04 import it verbatim)
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "À l'imparfait, on regarde le passé. On ne le compte pas.";
export const REFRAME_EN = 'In the imparfait you look at the past. You do not count it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  { text: "L'imparfait, c'est le décor ; le passé composé, c'est l'action.", why: "b1.03's contrast, and this lesson has no passé composé except as a counterexample." },
  { text: 'Used to, would, was -ing : imparfait.', why: 'A translation table, and wrong on a polite « would » (act 9, card 6) and on a conditional « would » (act 9, card 7).' },
  { text: "L'imparfait décrit.", why: 'True of four uses, silent on habit, which is the use the opening scene breaks.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  /** b1.01's forms, so this lesson never re-authors a form (§A.4). */
  b101Forms: [
    B(16), B(19), B(32), B(31), B(30), B(513), B(514), B(515), B(517),
    B(433), B(434), B(436), B(430), B(432), B(431), B(35), B(33), B(34), B(523), B(525),
  ],
  /** b1.01's sentences that already SAY a usage this lesson teaches. */
  b101Sentences: [
    B(40),  // Quand j'étais petite, j'habitais chez ma grand-mère.
    B(41),  // Ma grand-mère habitait à Dakar.
    B(50),  // Il y avait un grand arbre dans la cour.
    B(57),  // Le dimanche, nous mangions du thiéboudienne.
    B(59),  // Les enfants jouaient dans la rue.
    B(60),  // C'était la maison de ma grand-mère.
    B(61),  // Avant, j'habitais à Dakar.
    B(62),  // Maintenant, j'habite à Montréal.
    B(63),  // Avant de dormir, je lis.
    B(64),  // Dans mon quartier, il y avait un dépanneur au coin.
    B(65),  // L'hiver, nous faisions du patin au parc.
    B(68),  // Je buvais du lait tous les matins.
    B(450), // Je voulais devenir pilote.
    B(451), // Je savais nager à cinq ans.
    B(452), // Je connaissais tous les voisins.
    B(455), // Le bébé dormait dans ma chambre.
    B(469), // J'étais très timide à l'école.
    B(470), // C'était un petit village.
    B(472), // Mes parents étaient contents.
    B(518), // Il neigeait de novembre à avril.
    B(519), // Il faisait froid, mais il faisait beau.
    B(522), // Il y avait de la neige partout.
    B(534), // Je me levais à six heures pour aller à l'école.
    B(535), // Le dimanche, on se voyait chez ma tante.
    B(537), // Il n'y avait personne dans la rue.
  ],
  /** Published imparfait sentences with NO passé composé in them. */
  seedImparfait: [
    'fr.b1.routines.075',           // Quand j'étais enfant, je me levais toujours avant mes parents.
    'fr.b1.routines.078',           // Autrefois, nous prenions le petit déjeuner ensemble tous les jours.
    'fr.b1.sports-et-loisirs.076',  // Quand j'étais plus jeune, je jouais au football tous les week-ends.
    'fr.b1.cuisine.087',            // Quand j'étais enfant, je cuisinais avec ma mère chaque dimanche.
    'fr.b1.cafe.079',               // Quand j'étais étudiant, j'allais souvent au café pour réviser.
    'fr.b1.cafe.092',               // Quand elle travaillait près d'ici, elle venait tous les jours.
    'fr.a2.ecole.013',              // Quand j'étais petite, j'aimais beaucoup l'école.
    'fr.a2.animaux.010',            // J'avais un chat et il dormait toujours sur mon lit.
    'fr.a2.corps.017',              // Quand j'étais enfant, j'avais souvent des otites.
    'fr.a2.salutations.043',        // Quand j'étais petit, je disais toujours bonjour à mes grands-parents.
    'fr.a2.heure-et-date.109',      // Il y a cinq ans, je ne parlais pas français.
    'fr.b1.routines.059',           // Avant, je prenais le train, mais maintenant je conduis.
    'fr.b1.routines.074',           // Autrefois, il se réveillait sans réveil, mais maintenant il en a besoin.
    'fr.a2.metiers.009',            // Il travaillait comme vendeur, mais il a changé de métier l'année dernière.
    'fr.b1.metiers.008',            // Son grand-père était fermier toute sa vie.
    'fr.b1.cafe.013',               // Le café était plein à craquer à l'heure du déjeuner.
    'fr.b1.nombres.004',            // Une vingtaine de personnes attendaient dehors.
    'fr.b1.nombres.009',            // Il y avait une centaine de spectateurs.
    'fr.a2.heure-et-date.079',      // Le magasin était fermé avant-hier.
    'fr.a2.heure-et-date.080',      // Avant-hier, il neigeait encore.
    'fr.b1.heure-et-date.039',      // L'année dernière à la même époque, il neigeait.
    'fr.b1.heure-et-date.021',      // Il y a un instant, elle était encore là.
    'fr.b1.heure-et-date.010',      // C'était le vingt-huit février.
    'fr.a1.heure-et-date.051',      // Ce matin, il n'y avait personne au bureau.
    'fr.sons.elision.035',          // c'était
    'fr.b1.routines.062',           // Chaque matin, elle se demandait ce qu'elle allait préparer pour le dîner.
  ],
  /** Published cue words, imported rather than re-authored: « une fois par
   *  mois » and « souvent » already exist, and `.117` was cut when the probe
   *  found the first of them. */
  seedCues: [
    'fr.sons.jours-et-mois.129',  // une fois par mois
    'fr.sons.mots-essentiels.056',// souvent
  ],
  /** THE CUE-IS-NOT-A-TRIGGER EVIDENCE: the same markers, in the present,
   *  because the thing is still true. Published, so the claim is about the
   *  language and not about this lesson. */
  seedPresent: [
    'fr.a2.routines.004',            // D'habitude, nous dînons vers vingt heures.
    'fr.a2.pronoms-essentiels.333',  // Oui, j'y vais tous les samedis.
    'fr.a2.sports-et-loisirs.004',   // Mon frère fait du vélo tous les dimanches.
    'fr.b1.routines.006',            // Chaque matin, il fait son lit dès qu'il se lève.
    'fr.b1.sports-et-loisirs.005',   // Elle fait du yoga chaque matin pour se détendre.
    'fr.a2.routines.003',            // Le soir, ils regardent les informations avant de se coucher.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Imports with NO flashcard drill: nameable in a section, never releasable
 *  by a deckTranche (a release would draw no card). Measured off the seed. */
export const NOT_DECK_ABLE = [
  'fr.a2.ecole.013', 'fr.a2.animaux.010', 'fr.a2.corps.017', 'fr.a2.salutations.043',
  'fr.b1.routines.059', 'fr.b1.routines.074', 'fr.b1.routines.062', 'fr.a2.metiers.009',
  'fr.b1.metiers.008', 'fr.b1.cafe.013', 'fr.b1.routines.006', 'fr.b1.sports-et-loisirs.005',
  'fr.a2.routines.003',
];

/** Imports with NO voiceflash: never named by a `practice` speak section.
 *  Every b1.01 row carries voiceflash, so only seed rows are listed. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.routines.075', 'fr.b1.routines.078', 'fr.b1.sports-et-loisirs.076', 'fr.b1.cuisine.087',
  'fr.b1.cafe.079', 'fr.b1.cafe.092', 'fr.a2.heure-et-date.109', 'fr.b1.nombres.004',
  'fr.b1.nombres.009', 'fr.a2.heure-et-date.079', 'fr.a2.heure-et-date.080',
  'fr.b1.heure-et-date.039', 'fr.b1.heure-et-date.021', 'fr.b1.heure-et-date.010',
  'fr.a1.heure-et-date.051', 'fr.a2.routines.004', 'fr.a2.sports-et-loisirs.004',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, final stressed syllable in
 *  caps, ü for French u, nasals closed with ⁿ. Liaison consonants are written
 *  onto the following syllable; there is NO U+203F anywhere.
 *
 *    -ais -ait -aient   [ɛ]    EH        four cells, one sound
 *    -ions              [jɔ̃]   YOHⁿ
 *    -iez               [je]   YAY
 *
 *  A row tagged `present` is a COUNTEREXAMPLE: the same cue with the verb in
 *  the present, because the thing is still true. A row tagged `pc` is a
 *  counted, closed period, and it is named as b1.03's ground.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['imparfait', ...tags], drills, version: 1, grammarPoints: ['imparfait'],
});

/** A present-tense counterexample row. Tagged `present`, and its grammarPoint
 *  says so, because releasing it as an imparfait card would teach the error. */
const pres = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['present', 'contre-exemple', ...tags], drills, version: 1, grammarPoints: ['present'],
});

/** A passé composé counterexample: a counted, closed period. b1.03's ground,
 *  printed here only where the lesson marks it as the other tense. */
const pc = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['passe-compose', 'contre-exemple', ...tags], drills, version: 1, grammarPoints: ['passe-compose'],
});

/** A conditional counterexample: « je voudrais », « je viendrais ». The
 *  politeness act sets it beside the imparfait and act 9 uses it for the one
 *  English « would » that really is a conditional. */
const cond = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conditionnel', 'contre-exemple', ...tags], drills, version: 1, grammarPoints: ['conditionnel'],
});

/** A fixed phrase (a cue, a chunk) rather than a whole sentence. */
const chunk = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1,
});

/* ── ACT 1 · LE SOUVENIR  .101-.112 ─────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(101, 'Tous les samedis, on patinait sur le lac.', 'Every Saturday, we would skate on the lake.', '/tu le sam.di ɔ̃ pa.ti.nɛ syʁ lə lak/', 'too lay sam-DEE ohⁿ pa-tee-NEH sür luh LAK', ['habitude', 'scene'], FCVDR),
  pc(102, 'Cet été-là, je suis allé trois fois au lac.', 'That summer, I went to the lake three times.', '/sɛ.te.te.la ʒə sɥi.za.le tʁwa fwa o lak/', 'seh-tay-tay-LAH zhuh swee-zah-LAY trwah fwah oh LAK', ['compter', 'scene']),
  sent(103, "Il y avait une épicerie et un lac.", 'There was a grocery store and a lake.', '/i.li.ja.vɛ y.ne.pi.sə.ʁi e œ̃ lak/', 'eel ee ah-VEH ü-nay-pees-REE ay uhⁿ LAK', ['decor', 'scene']),
  sent(104, "L'hiver, il faisait très froid.", 'In winter, it was very cold.', '/li.vɛʁ il fə.zɛ tʁɛ fʁwa/', 'lee-VEHR eel fuh-zeh treh FRWAH', ['meteo', 'scene']),
  sent(105, "J'avais douze ans.", 'I was twelve.', '/ʒa.vɛ du.zɑ̃/', 'zha-VEH doo-ZAHⁿ', ['age'], FCVDR),
  sent(106, 'Je connaissais tout le monde dans le village.', 'I knew everyone in the village.', '/ʒə kɔ.nɛ.sɛ tu lə mɔ̃d dɑ̃ lə vi.laʒ/', 'zhuh koh-neh-SEH too luh MOHⁿD dahⁿ luh vee-LAZH', ['etat']),
  sent(107, 'Je lisais dans ma chambre.', 'I was reading in my room.', '/ʒə li.zɛ dɑ̃ ma ʃɑ̃bʁ/', 'zhuh lee-ZEH dahⁿ mah SHAHⁿBR', ['en-cours'], FCVDR),
  sent(108, 'Je voulais vous demander un petit service.', 'I wanted to ask you a small favour.', '/ʒə vu.lɛ vu də.mɑ̃.de œ̃ pə.ti sɛʁ.vis/', 'zhuh voo-LEH voo duh-mahⁿ-DAY uhⁿ puh-tee sehr-VEES', ['poli']),
  sent(109, "Avant, j'habitais à Bruxelles.", 'I used to live in Brussels.', '/a.vɑ̃ ʒa.bi.tɛ a bʁy.sɛl/', 'ah-VAHⁿ zha-bee-TEH ah brü-SELL', ['avant'], FCVDR),
  pres(110, "Maintenant, j'habite à Bruxelles.", 'Now I live in Brussels.', '/mɛ̃t.nɑ̃ ʒa.bit a bʁy.sɛl/', 'mehⁿt-NAHⁿ zha-BEET ah brü-SELL', ['maintenant']),
  sent(111, "C'était comment, chez toi ?", 'What was it like, where you grew up?', '/se.tɛ kɔ.mɑ̃ ʃe twa/', 'say-teh koh-MAHⁿ shay TWAH', ['scene', 'question'], FCVDR),
  sent(112, 'Chaque été, nous allions chez ma grand-mère.', "Every summer, we went to my grandmother's.", '/ʃa.ke.te nu.za.ljɔ̃ ʃe ma ɡʁɑ̃.mɛʁ/', 'shah-kay-TAY noo-zah-LYOHⁿ shay mah grahⁿ-MEHR', ['habitude']),
];

/* ── ACT 2 · L'HABITUDE  .113-.138 ──────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  chunk(113, 'tous les samedis', 'every Saturday', '/tu le sam.di/', 'too lay sam-DEE', ['indice', 'habitude']),
  chunk(114, "d'habitude", 'usually', '/da.bi.tyd/', 'da-bee-TÜD', ['indice', 'habitude'], FCVDR),
  chunk(115, 'chaque été', 'every summer', '/ʃa.ke.te/', 'shah-kay-TAY', ['indice', 'habitude']),
  chunk(116, 'de temps en temps', 'from time to time', '/də tɑ̃.zɑ̃ tɑ̃/', 'duh tahⁿ-zahⁿ TAHⁿ', ['indice', 'habitude']),
  sent(118, 'Tous les samedis, mon père faisait des crêpes.', 'Every Saturday, my father made crepes.', '/tu le sam.di mɔ̃ pɛʁ fə.zɛ de kʁɛp/', 'too lay sam-DEE mohⁿ pehr fuh-zeh day KREHP', ['habitude'], FCVDR),
  sent(119, "D'habitude, on se levait à six heures.", 'We usually got up at six.', '/da.bi.tyd ɔ̃ sə lə.vɛ a si.zœʁ/', 'da-bee-TÜD ohⁿ suh luh-VEH ah see-ZUHR', ['habitude', 'pronominal']),
  sent(120, 'Chaque été, on allait au Lac-Saint-Jean.', 'Every summer, we went to Lac-Saint-Jean.', '/ʃa.ke.te ɔ̃.na.lɛ o lak sɛ̃ ʒɑ̃/', 'shah-kay-TAY ohⁿ-nah-LEH oh lak sehⁿ ZHAHⁿ', ['habitude', 'quebec'], FCVDR),
  sent(121, 'Souvent, on jouait dehors jusqu’à la nuit.', 'We often played outside until dark.', '/su.vɑ̃ ɔ̃ ʒu.ɛ də.ɔʁ ʒys.ka la nɥi/', 'soo-VAHⁿ ohⁿ zhoo-EH duh-or zhüs-kah lah NWEE', ['habitude']),
  sent(122, 'Le samedi, ma mère travaillait à l’hôpital.', 'On Saturdays, my mother worked at the hospital.', '/lə sam.di ma mɛʁ tʁa.va.jɛ a lo.pi.tal/', 'luh sam-DEE mah mehr trah-vah-YEH ah loh-pee-TAL', ['habitude', 'le-jour']),
  sent(123, 'Le dimanche, on mangeait chez ma tante.', 'On Sundays, we ate at my aunt’s.', '/lə di.mɑ̃ʃ ɔ̃ mɑ̃.ʒɛ ʃe ma tɑ̃t/', 'luh dee-MAHⁿSH ohⁿ mahⁿ-ZHEH shay mah TAHⁿT', ['habitude', 'le-jour'], FCVDR),
  sent(124, 'Tous les matins, je prenais l’autobus.', 'Every morning, I took the bus.', '/tu le ma.tɛ̃ ʒə pʁə.nɛ lo.to.bys/', 'too lay ma-TEHⁿ zhuh pruh-neh loh-toh-BÜS', ['habitude', 'quebec']),
  sent(125, 'Toutes les semaines, il appelait sa sœur.', 'Every week, he called his sister.', '/tut le sə.mɛn i.la.plɛ sa sœʁ/', 'toot lay suh-MENN ee-lah-PLEH sah SUHR', ['habitude']),
  sent(126, 'De temps en temps, on allait au cinéma.', 'From time to time, we went to the cinema.', '/də tɑ̃.zɑ̃ tɑ̃ ɔ̃.na.lɛ o si.ne.ma/', 'duh tahⁿ-zahⁿ TAHⁿ ohⁿ-nah-leh oh see-nay-MAH', ['habitude']),
  sent(127, 'Parfois, mon oncle nous emmenait à la pêche.', 'Sometimes my uncle took us fishing.', '/paʁ.fwa mɔ̃.nɔ̃kl nu.zɑ̃m.nɛ a la pɛʃ/', 'par-FWAH mohⁿ-NOHⁿKL noo-zahⁿm-NEH ah lah PESH', ['habitude']),
  sent(128, 'Il portait toujours la même veste.', 'He always wore the same jacket.', '/il pɔʁ.tɛ tu.ʒuʁ la mɛm vɛst/', 'eel por-TEH too-zhoor lah mehm VEST', ['habitude', 'toujours']),
  sent(129, 'Je ne mangeais jamais le matin.', 'I never ate in the morning.', '/ʒə nə mɑ̃.ʒɛ ʒa.mɛ lə ma.tɛ̃/', 'zhuh nuh mahⁿ-ZHEH zhah-meh luh ma-TEHⁿ', ['habitude', 'negation'], FCVDR),
  sent(130, 'Chaque hiver, la rivière gelait.', 'Every winter, the river froze.', '/ʃak i.vɛʁ la ʁi.vjɛʁ ʒə.lɛ/', 'shak ee-VEHR lah ree-vyehr zhuh-LEH', ['habitude', 'meteo']),
  sent(131, 'Une fois par mois, on descendait à Québec.', 'Once a month, we went down to Quebec City.', '/yn fwa paʁ mwa ɔ̃ de.sɑ̃.dɛ a ke.bɛk/', 'ün fwah par MWAH ohⁿ day-sahⁿ-deh ah kay-BEK', ['habitude', 'quebec']),
  sent(132, 'Le vendredi soir, on regardait un film ensemble.', 'On Friday evenings, we watched a film together.', '/lə vɑ̃.dʁə.di swaʁ ɔ̃ ʁə.ɡaʁ.dɛ œ̃ film ɑ̃.sɑ̃bl/', 'luh vahⁿ-druh-dee SWAR ohⁿ ruh-gar-deh uhⁿ feelm ahⁿ-SAHⁿBL', ['habitude', 'le-jour']),
  sent(133, 'Après l’école, on allait au dépanneur.', 'After school, we went to the corner store.', '/a.pʁɛ le.kɔl ɔ̃.na.lɛ o de.pa.nœʁ/', 'ah-preh lay-KOL ohⁿ-nah-leh oh day-pah-NUHR', ['habitude', 'quebec']),
  sent(134, 'On se voyait tous les jeudis.', 'We saw each other every Thursday.', '/ɔ̃ sə vwa.jɛ tu le ʒø.di/', 'ohⁿ suh vwah-YEH too lay zhuh-DEE', ['habitude', 'pronominal']),
  sent(135, 'Il nous racontait des histoires le soir.', 'He told us stories in the evening.', '/il nu ʁa.kɔ̃.tɛ de.zis.twaʁ lə swaʁ/', 'eel noo rah-kohⁿ-TEH day-zees-twar luh SWAR', ['habitude']),
  pres(136, 'Chaque été, nous allons au Lac-Saint-Jean.', 'Every summer, we go to Lac-Saint-Jean.', '/ʃa.ke.te nu.za.lɔ̃ o lak sɛ̃ ʒɑ̃/', 'shah-kay-TAY noo-zah-LOHⁿ oh lak sehⁿ ZHAHⁿ', ['indice', 'habitude']),
  pres(137, 'Le samedi, je travaille encore au café.', 'On Saturdays, I still work at the cafe.', '/lə sam.di ʒə tʁa.vaj ɑ̃.kɔʁ o ka.fe/', 'luh sam-DEE zhuh trah-VAHY ahⁿ-kor oh kah-FAY', ['indice', 'habitude']),
  pc(138, 'L’été dernier, j’ai visité Québec deux fois.', 'Last summer, I visited Quebec City twice.', '/le.te dɛʁ.nje ʒe vi.zi.te ke.bɛk dø fwa/', 'lay-tay dehr-NYAY zhay vee-zee-tay kay-bek duh FWAH', ['compter']),
];

/* ── ACT 3 · AVANT ET MAINTENANT  .139-.158 ─────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  chunk(139, 'autrefois', 'in the old days', '/o.tʁə.fwa/', 'oh-truh-FWAH', ['indice', 'avant'], FCVDR),
  chunk(140, "à l'époque", 'back then', '/a le.pɔk/', 'ah lay-POK', ['indice', 'avant'], FCVDR),
  sent(141, 'Avant, je fumais. Maintenant, je cours.', 'I used to smoke. Now I run.', '/a.vɑ̃ ʒə fy.mɛ mɛ̃t.nɑ̃ ʒə kuʁ/', 'ah-VAHⁿ zhuh fü-MEH · mehⁿt-NAHⁿ zhuh KOOR', ['avant', 'maintenant']),
  sent(142, 'Autrefois, le village avait une seule école.', 'In the old days, the village had only one school.', '/o.tʁə.fwa lə vi.laʒ a.vɛ yn sœl e.kɔl/', 'oh-truh-FWAH luh vee-LAZH ah-VEH ün suhl ay-KOL', ['avant']),
  sent(143, "À l'époque, il n'y avait pas de téléphone portable.", 'Back then, there were no mobile phones.', '/a le.pɔk il nja.vɛ pa də te.le.fɔn pɔʁ.tabl/', 'ah lay-POK eel nyah-VEH pah duh tay-lay-fon por-TAHBL', ['avant', 'decor']),
  sent(144, 'Dans les années quatre-vingt-dix, on écrivait des lettres.', 'In the nineties, people wrote letters.', '/dɑ̃ le.za.ne katʁ.vɛ̃.dis ɔ̃.ne.kʁi.vɛ de lɛtʁ/', 'dahⁿ lay-zah-NAY katr-vehⁿ-DEES ohⁿ-nay-kree-VEH day LEHTR', ['avant']),
  sent(145, "Quand j'étais étudiant, je n'avais pas de voiture.", 'When I was a student, I had no car.', '/kɑ̃ ʒe.tɛ.ze.ty.djɑ̃ ʒə na.vɛ pa də vwa.tyʁ/', 'kahⁿ zhay-teh-zay-tü-DYAHⁿ zhuh nah-VEH pah duh vwah-TÜR', ['avant', 'negation']),
  sent(146, 'À cette époque-là, tout coûtait moins cher.', 'Back in those days, everything cost less.', '/a sɛ.te.pɔk.la tu ku.tɛ mwɛ̃ ʃɛʁ/', 'ah seh-tay-pok-LAH too koo-TEH mwehⁿ SHEHR', ['avant']),
  sent(147, 'Avant, on payait en argent comptant.', 'People used to pay in cash.', '/a.vɑ̃ ɔ̃ pɛ.jɛ ɑ̃.naʁ.ʒɑ̃ kɔ̃.tɑ̃/', 'ah-VAHⁿ ohⁿ peh-YEH ahⁿ-nar-zhahⁿ kohⁿ-TAHⁿ', ['avant', 'quebec']),
  pres(148, 'Maintenant, tout le monde paie avec son téléphone.', 'Now everybody pays with their phone.', '/mɛ̃t.nɑ̃ tu lə mɔ̃d pɛ a.vɛk sɔ̃ te.le.fɔn/', 'mehⁿt-NAHⁿ too luh mohⁿd PEH ah-vek sohⁿ tay-lay-FON', ['maintenant']),
  sent(149, 'Il y a vingt ans, je travaillais à Bruxelles.', 'Twenty years ago, I worked in Brussels.', '/i.lja vɛ̃.tɑ̃ ʒə tʁa.va.jɛ a bʁy.sɛl/', 'eel-yah vehⁿ-TAHⁿ zhuh trah-vah-YEH ah brü-SELL', ['avant']),
  sent(150, "Quand j'avais vingt ans, je voyageais beaucoup.", 'When I was twenty, I travelled a lot.', '/kɑ̃ ʒa.vɛ vɛ̃.tɑ̃ ʒə vwa.ja.ʒɛ bo.ku/', 'kahⁿ zha-VEH vehⁿ-TAHⁿ zhuh vwah-yah-ZHEH boh-KOO', ['avant', 'age']),
  pres(151, "Avant de partir, j'éteins la lumière.", 'Before leaving, I turn off the light.', '/a.vɑ̃ də paʁ.tiʁ ʒe.tɛ̃ la ly.mjɛʁ/', 'ah-vahⁿ duh par-TEER zhay-TEHⁿ lah lü-MYEHR', ['avant-de', 'indice']),
  sent(152, 'Avant le déménagement, nous habitions près du parc.', 'Before the move, we lived near the park.', '/a.vɑ̃ lə de.me.naʒ.mɑ̃ nu.za.bi.tjɔ̃ pʁɛ dy paʁk/', 'ah-vahⁿ luh day-may-nazh-MAHⁿ noo-zah-bee-TYOHⁿ preh dü PARK', ['avant']),
  sent(153, 'Avant, la maison était verte.', 'The house used to be green.', '/a.vɑ̃ la mɛ.zɔ̃.ne.tɛ vɛʁt/', 'ah-VAHⁿ lah meh-zohⁿ ay-teh VEHRT', ['avant', 'decor'], FCVDR),
  pres(154, "Aujourd'hui, la maison est bleue.", 'Today the house is blue.', '/o.ʒuʁ.dɥi la mɛ.zɔ̃.nɛ blø/', 'oh-zhoor-DWEE lah meh-zohⁿ eh BLUH', ['maintenant', 'decor']),
  sent(155, 'Autrefois, les voisins se parlaient plus.', 'In the old days, neighbours talked to each other more.', '/o.tʁə.fwa le vwa.zɛ̃ sə paʁ.lɛ plys/', 'oh-truh-FWAH lay vwah-ZEHⁿ suh par-LEH PLÜS', ['avant', 'pronominal']),
  sent(156, "À l'époque, on écoutait la radio en famille.", 'Back then, we listened to the radio as a family.', '/a le.pɔk ɔ̃.ne.ku.tɛ la ʁa.djo ɑ̃ fa.mij/', 'ah lay-POK ohⁿ-nay-koo-TEH lah rah-dyoh ahⁿ fah-MEEY', ['avant']),
  sent(157, 'Avant, je prenais le bus.', 'I used to take the bus.', '/a.vɑ̃ ʒə pʁə.nɛ lə bys/', 'ah-VAHⁿ zhuh pruh-neh luh BÜS', ['avant'], FCVDR),
  pres(158, 'Maintenant, je prends le métro.', 'Now I take the metro.', '/mɛ̃t.nɑ̃ ʒə pʁɑ̃ lə me.tʁo/', 'mehⁿt-NAHⁿ zhuh prahⁿ luh may-TROH', ['maintenant'], FCVDR),
];

/* ── ACT 4 · LES ÉTATS ET LES SENTIMENTS  .159-.178 ─────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(159, "J'étais fatigué et j'avais froid.", 'I was tired and I was cold.', '/ʒe.tɛ fa.ti.ɡe e ʒa.vɛ fʁwa/', 'zhay-TEH fa-tee-GAY ay zha-VEH FRWAH', ['etat'], FCVDR),
  sent(160, 'Il avait peur du noir.', 'He was afraid of the dark.', '/i.la.vɛ pœʁ dy nwaʁ/', 'ee-lah-VEH puhr dü NWAR', ['etat', 'avoir'], FCVDR),
  sent(161, 'Elle avait faim tout le temps.', 'She was hungry all the time.', '/ɛ.la.vɛ fɛ̃ tu lə tɑ̃/', 'eh-lah-VEH fehⁿ too luh TAHⁿ', ['etat', 'avoir']),
  sent(162, 'Nous avions soif après le match.', 'We were thirsty after the game.', '/nu.za.vjɔ̃ swaf a.pʁɛ lə matʃ/', 'noo-zah-VYOHⁿ swaf ah-preh luh MATCH', ['etat', 'avoir']),
  sent(163, "J'avais sommeil pendant le cours.", 'I was sleepy during the class.', '/ʒa.vɛ sɔ.mɛj pɑ̃.dɑ̃ lə kuʁ/', 'zha-VEH soh-MEHY pahⁿ-dahⁿ luh KOOR', ['etat', 'avoir']),
  sent(164, 'Je savais que la route était fermée.', 'I knew the road was closed.', '/ʒə sa.vɛ kə la ʁut e.tɛ fɛʁ.me/', 'zhuh sah-VEH kuh lah ROOT ay-teh fehr-MAY', ['etat', 'savoir'], FCVDR),
  sent(165, 'Elle connaissait bien la ville.', 'She knew the city well.', '/ɛl kɔ.nɛ.sɛ bjɛ̃ la vil/', 'el koh-neh-SEH byehⁿ lah VEEL', ['etat', 'connaitre']),
  sent(166, 'Je ne voulais pas partir.', 'I did not want to leave.', '/ʒə nə vu.lɛ pa paʁ.tiʁ/', 'zhuh nuh voo-LEH pah par-TEER', ['etat', 'negation'], FCVDR),
  sent(167, 'Il pouvait courir très vite.', 'He could run very fast.', '/il pu.vɛ ku.ʁiʁ tʁɛ vit/', 'eel poo-VEH koo-reer treh VEET', ['etat', 'modal']),
  sent(168, 'Nous devions rentrer avant huit heures.', 'We had to be home before eight.', '/nu də.vjɔ̃ ʁɑ̃.tʁe a.vɑ̃ ɥi.tœʁ/', 'noo duh-VYOHⁿ rahⁿ-tray ah-vahⁿ wee-TUHR', ['etat', 'modal']),
  sent(169, 'Il détestait le froid.', 'He hated the cold.', '/il de.tɛs.tɛ lə fʁwa/', 'eel day-tes-TEH luh FRWAH', ['etat', 'sentiment']),
  sent(170, 'Elle pensait souvent à sa mère.', 'She often thought about her mother.', '/ɛl pɑ̃.sɛ su.vɑ̃ a sa mɛʁ/', 'el pahⁿ-SEH soo-vahⁿ ah sah MEHR', ['etat', 'sentiment']),
  sent(171, "Je croyais qu'il habitait ici.", 'I thought he lived here.', '/ʒə kʁwa.jɛ ki.la.bi.tɛ i.si/', 'zhuh krwah-YEH kee-lah-bee-teh ee-SEE', ['etat']),
  sent(172, "J'étais content de te voir.", 'I was glad to see you.', '/ʒe.tɛ kɔ̃.tɑ̃ də tə vwaʁ/', 'zhay-TEH kohⁿ-tahⁿ duh tuh VWAR', ['etat', 'sentiment']),
  sent(173, 'Elle était triste ce jour-là.', 'She was sad that day.', '/ɛ.le.tɛ tʁist sə ʒuʁ.la/', 'eh-lay-TEH treest suh zhoor-LAH', ['etat', 'sentiment'], FCVDR),
  sent(174, 'Ils étaient fiers de leur fils.', 'They were proud of their son.', '/il.ze.tɛ fjɛʁ də lœʁ fis/', 'eel-zay-TEH fyehr duh luhr FEES', ['etat', 'sentiment']),
  sent(175, "J'avais envie d'un café.", 'I felt like having a coffee.', '/ʒa.vɛ ɑ̃.vi dœ̃ ka.fe/', 'zha-VEH ahⁿ-vee duhⁿ kah-FAY', ['etat', 'avoir']),
  sent(176, "Nous avions besoin d'aide.", 'We needed help.', '/nu.za.vjɔ̃ bə.zwɛ̃ dɛd/', 'noo-zah-VYOHⁿ buh-zwehⁿ DED', ['etat', 'avoir']),
  sent(177, 'Elle se sentait seule.', 'She felt lonely.', '/ɛl sə sɑ̃.tɛ sœl/', 'el suh sahⁿ-TEH SUHL', ['etat', 'pronominal']),
  sent(178, 'Ça me plaisait beaucoup.', 'I liked it a lot.', '/sa mə plɛ.zɛ bo.ku/', 'sah muh pleh-ZEH boh-KOO', ['etat', 'sentiment']),
];

/* ── ACT 5 · LE DÉCOR  .800-.819 ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(800, 'La maison était grande et un peu froide.', 'The house was big and a little cold.', '/la mɛ.zɔ̃.ne.tɛ ɡʁɑ̃d e œ̃ pø fʁwad/', 'lah meh-zohⁿ ay-teh GRAHⁿD ay uhⁿ puh FRWAD', ['decor'], FCVDR),
  sent(801, 'Il y avait un jardin derrière la maison.', 'There was a garden behind the house.', '/i.li.ja.vɛ œ̃ ʒaʁ.dɛ̃ dɛ.ʁjɛʁ la mɛ.zɔ̃/', 'eel ee ah-VEH uhⁿ zhar-DEHⁿ deh-ryehr lah meh-ZOHⁿ', ['decor'], FCVDR),
  sent(802, 'Les rues étaient étroites et tranquilles.', 'The streets were narrow and quiet.', '/le ʁy e.tɛ.te.tʁwat e tʁɑ̃.kil/', 'lay RÜ ay-teh-tay-TRWAT ay trahⁿ-KEEL', ['decor']),
  sent(803, "C'était une vieille maison en pierre.", 'It was an old stone house.', '/se.tɛ.tyn vjɛj mɛ.zɔ̃ ɑ̃ pjɛʁ/', 'say-teh-tün vyehy meh-zohⁿ ahⁿ PYEHR', ['decor', 'cetait']),
  sent(804, 'Le salon donnait sur la rue.', 'The living room looked onto the street.', '/lə sa.lɔ̃ dɔ.nɛ syʁ la ʁy/', 'luh sah-LOHⁿ doh-NEH sür lah RÜ', ['decor']),
  sent(805, "Il y avait trois chambres à l'étage.", 'There were three bedrooms upstairs.', '/i.li.ja.vɛ tʁwa ʃɑ̃bʁ a le.taʒ/', 'eel ee ah-VEH trwah shahⁿbr ah lay-TAZH', ['decor']),
  sent(806, 'Les murs étaient jaunes.', 'The walls were yellow.', '/le myʁ.ze.tɛ ʒon/', 'lay mür-zay-TEH ZHOHN', ['decor'], FCVDR),
  sent(807, 'Devant la porte, il y avait un grand arbre.', 'In front of the door, there was a big tree.', '/də.vɑ̃ la pɔʁt i.li.ja.vɛ œ̃ ɡʁɑ̃.taʁbʁ/', 'duh-vahⁿ lah PORT eel ee ah-veh uhⁿ grahⁿ-TARBR', ['decor']),
  sent(808, 'Ma grand-mère portait toujours un foulard bleu.', 'My grandmother always wore a blue headscarf.', '/ma ɡʁɑ̃.mɛʁ pɔʁ.tɛ tu.ʒuʁ œ̃ fu.laʁ blø/', 'mah grahⁿ-mehr por-TEH too-zhoor uhⁿ foo-lar BLUH', ['decor', 'gens']),
  sent(809, 'Mon père était grand et calme.', 'My father was tall and calm.', '/mɔ̃ pɛ.ʁe.tɛ ɡʁɑ̃ e kalm/', 'mohⁿ peh-ray-TEH grahⁿ ay KALM', ['decor', 'gens']),
  sent(810, 'Les voisins étaient très gentils.', 'The neighbours were very kind.', '/le vwa.zɛ̃.ze.tɛ tʁɛ ʒɑ̃.ti/', 'lay vwah-zehⁿ-zay-TEH treh zhahⁿ-TEE', ['decor', 'gens']),
  sent(811, 'Le quartier ressemblait à un village.', 'The neighbourhood was like a village.', '/lə kaʁ.tje ʁə.sɑ̃.blɛ a œ̃ vi.laʒ/', 'luh kar-TYAY ruh-sahⁿ-bleh ah uhⁿ vee-LAZH', ['decor']),
  sent(812, 'On entendait les enfants dans la cour.', 'You could hear the children in the yard.', '/ɔ̃.nɑ̃.tɑ̃.dɛ le.zɑ̃.fɑ̃ dɑ̃ la kuʁ/', 'ohⁿ-nahⁿ-tahⁿ-DEH lay-zahⁿ-fahⁿ dahⁿ lah KOOR', ['decor', 'sons']),
  sent(813, 'Ça sentait le pain chaud le matin.', 'It smelled of warm bread in the morning.', '/sa sɑ̃.tɛ lə pɛ̃ ʃo lə ma.tɛ̃/', 'sah sahⁿ-TEH luh pehⁿ shoh luh ma-TEHⁿ', ['decor', 'sons']),
  sent(814, "Il n'y avait pas d'ascenseur.", 'There was no lift.', '/il nja.vɛ pa da.sɑ̃.sœʁ/', 'eel nyah-VEH pah dah-sahⁿ-SUHR', ['decor', 'negation'], FCVDR),
  sent(815, "L'école se trouvait à dix minutes à pied.", 'The school was a ten-minute walk away.', '/le.kɔl sə tʁu.vɛ a di mi.nyt a pje/', 'lay-KOL suh troo-VEH ah dee mee-nüt ah PYAY', ['decor', 'pronominal']),
  sent(816, "Le lac était gelé jusqu'en avril.", 'The lake was frozen until April.', '/lə la.ke.tɛ ʒə.le ʒys.kɑ̃.na.vʁil/', 'luh lah-kay-TEH zhuh-lay zhüs-kahⁿ-nah-VREEL', ['decor', 'quebec']),
  sent(817, 'Il y avait un manguier dans la cour.', 'There was a mango tree in the yard.', '/i.li.ja.vɛ œ̃ mɑ̃.ɡje dɑ̃ la kuʁ/', 'eel ee ah-VEH uhⁿ mahⁿ-gyay dahⁿ lah KOOR', ['decor', 'abidjan']),
  sent(818, 'Les fenêtres étaient très hautes.', 'The windows were very tall.', '/le fə.nɛtʁ.ze.tɛ tʁɛ ot/', 'lay fuh-nehtr-zay-TEH treh OHT', ['decor']),
  sent(819, "C'était petit, mais c'était chez nous.", 'It was small, but it was home.', '/se.tɛ pə.ti mɛ se.tɛ ʃe nu/', 'say-teh puh-TEE meh say-teh shay NOO', ['decor', 'cetait'], FCVDR),
];

/* ── ACT 6 · LA MÉTÉO, L'HEURE ET L'ÂGE  .820-.839 ──────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(820, 'Il pleuvait depuis le matin.', 'It had been raining since the morning.', '/il plø.vɛ də.pɥi lə ma.tɛ̃/', 'eel pluh-VEH duh-pwee luh ma-TEHⁿ', ['meteo']),
  sent(821, 'Il faisait beau ce jour-là.', 'The weather was nice that day.', '/il fə.zɛ bo sə ʒuʁ.la/', 'eel fuh-zeh BOH suh zhoor-LAH', ['meteo']),
  sent(822, 'Il y avait du vent.', 'It was windy.', '/i.li.ja.vɛ dy vɑ̃/', 'eel ee ah-VEH dü VAHⁿ', ['meteo'], FCVDR),
  sent(823, 'Il faisait moins vingt en janvier.', 'It was minus twenty in January.', '/il fə.zɛ mwɛ̃ vɛ̃ ɑ̃ ʒɑ̃.vje/', 'eel fuh-zeh mwehⁿ VEHⁿ ahⁿ zhahⁿ-VYAY', ['meteo', 'quebec']),
  sent(824, 'Le ciel était gris.', 'The sky was grey.', '/lə sjɛ.le.tɛ ɡʁi/', 'luh syeh-lay-TEH GREE', ['meteo'], FCVDR),
  sent(825, 'Il faisait nuit à cinq heures.', 'It was dark by five.', '/il fə.zɛ nɥi a sɛ̃.kœʁ/', 'eel fuh-zeh NWEE ah sehⁿ-KUHR', ['meteo', 'heure']),
  sent(826, 'Il gelait tous les matins.', 'It froze every morning.', '/il ʒə.lɛ tu le ma.tɛ̃/', 'eel zhuh-LEH too lay ma-TEHⁿ', ['meteo', 'habitude']),
  sent(827, 'La température descendait à moins trente.', 'The temperature went down to minus thirty.', '/la tɑ̃.pe.ʁa.tyʁ de.sɑ̃.dɛ a mwɛ̃ tʁɑ̃t/', 'lah tahⁿ-pay-rah-TÜR day-sahⁿ-deh ah mwehⁿ TRAHⁿT', ['meteo', 'quebec']),
  sent(828, 'Il faisait trente degrés à Abidjan.', 'It was thirty degrees in Abidjan.', '/il fə.zɛ tʁɑ̃t də.ɡʁe a a.bi.dʒɑ̃/', 'eel fuh-zeh trahⁿt duh-GRAY ah ah-bee-DJAHⁿ', ['meteo', 'abidjan']),
  sent(829, 'Il était minuit.', 'It was midnight.', '/i.le.tɛ mi.nɥi/', 'ee-lay-TEH mee-NWEE', ['heure'], FCVDR),
  sent(830, 'Il était sept heures du matin.', 'It was seven in the morning.', '/i.le.tɛ sɛ.tœʁ dy ma.tɛ̃/', 'ee-lay-TEH seh-tuhr dü ma-TEHⁿ', ['heure']),
  sent(831, 'Il était déjà tard.', 'It was already late.', '/i.le.tɛ de.ʒa taʁ/', 'ee-lay-TEH day-zhah TAR', ['heure'], FCVDR),
  sent(832, 'Il était midi pile.', 'It was exactly noon.', '/i.le.tɛ mi.di pil/', 'ee-lay-TEH mee-dee PEEL', ['heure']),
  sent(833, "Elle avait trente ans à l'époque.", 'She was thirty at the time.', '/ɛ.la.vɛ tʁɑ̃.tɑ̃ a le.pɔk/', 'eh-lah-VEH trahⁿ-TAHⁿ ah lay-POK', ['age']),
  sent(834, 'Mon frère avait deux ans de plus que moi.', 'My brother was two years older than me.', '/mɔ̃ fʁɛ.ʁa.vɛ dø.zɑ̃ də plys kə mwa/', 'mohⁿ freh-rah-VEH duh-zahⁿ duh plüs kuh MWAH', ['age']),
  sent(835, 'Il avait quel âge, ton grand-père ?', 'How old was your grandfather?', '/i.la.vɛ kɛ.lɑʒ tɔ̃ ɡʁɑ̃.pɛʁ/', 'ee-lah-VEH keh-LAZH tohⁿ grahⁿ-PEHR', ['age', 'question']),
  sent(836, 'On était en 2006.', 'It was 2006.', '/ɔ̃.ne.tɛ ɑ̃ dø mil sis/', 'ohⁿ-nay-TEH ahⁿ duh meel SEES', ['heure', 'annee']),
  sent(837, "C'était en hiver.", 'It was in winter.', '/se.tɛ.tɑ̃.ni.vɛʁ/', 'say-teh-tahⁿ-nee-VEHR', ['heure', 'cetait'], FCVDR),
  sent(838, "C'était un mardi.", 'It was a Tuesday.', '/se.tɛ.tœ̃ maʁ.di/', 'say-teh-tuhⁿ mar-DEE', ['heure', 'cetait']),
  sent(839, "Quand j'avais dix ans, j'apprenais le violon.", 'When I was ten, I was learning the violin.', '/kɑ̃ ʒa.vɛ di.zɑ̃ ʒa.pʁə.nɛ lə vjɔ.lɔ̃/', 'kahⁿ zha-VEH dee-ZAHⁿ zha-pruh-neh luh vyoh-LOHⁿ', ['age', 'habitude']),
];

/* ── ACT 7 · L'ACTION EN COURS (APERÇU)  .840-.851 ──────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(840, 'Je regardais la télé.', 'I was watching TV.', '/ʒə ʁə.ɡaʁ.dɛ la te.le/', 'zhuh ruh-gar-DEH lah tay-LAY', ['en-cours'], FCVDR),
  sent(841, 'Elle travaillait dans le jardin.', 'She was working in the garden.', '/ɛl tʁa.va.jɛ dɑ̃ lə ʒaʁ.dɛ̃/', 'el trah-vah-YEH dahⁿ luh zhar-DEHⁿ', ['en-cours']),
  sent(842, 'Les enfants dormaient.', 'The children were sleeping.', '/le.zɑ̃.fɑ̃ dɔʁ.mɛ/', 'lay-zahⁿ-fahⁿ dor-MEH', ['en-cours'], FCVDR),
  sent(843, 'On écoutait la radio.', 'We were listening to the radio.', '/ɔ̃.ne.ku.tɛ la ʁa.djo/', 'ohⁿ-nay-koo-TEH lah rah-DYOH', ['en-cours']),
  sent(844, 'Je préparais le souper.', 'I was making supper.', '/ʒə pʁe.pa.ʁɛ lə su.pe/', 'zhuh pray-pah-REH luh soo-PAY', ['en-cours', 'quebec']),
  sent(845, "Elle attendait l'autobus.", 'She was waiting for the bus.', '/ɛ.la.tɑ̃.dɛ lo.to.bys/', 'eh-lah-tahⁿ-DEH loh-toh-BÜS', ['en-cours']),
  sent(846, 'Le bébé pleurait.', 'The baby was crying.', '/lə be.be plœ.ʁɛ/', 'luh bay-bay pluh-REH', ['en-cours'], FCVDR),
  sent(847, 'Ils parlaient de toi.', 'They were talking about you.', '/il paʁ.lɛ də twa/', 'eel par-LEH duh TWAH', ['en-cours']),
  sent(848, 'Qu’est-ce que tu faisais à huit heures ?', 'What were you doing at eight?', '/kɛs.kə ty fə.zɛ a ɥi.tœʁ/', 'kes-kuh tü fuh-ZEH ah wee-TUHR', ['en-cours', 'question']),
  sent(849, "J'étais en train de cuisiner.", 'I was in the middle of cooking.', '/ʒe.tɛ.zɑ̃ tʁɛ̃ də kɥi.zi.ne/', 'zhay-teh-zahⁿ trehⁿ duh kwee-zee-NAY', ['en-cours', 'marque']),
  pc(850, 'Je lisais quand le téléphone a sonné.', 'I was reading when the phone rang.', '/ʒə li.zɛ kɑ̃ lə te.le.fɔn a sɔ.ne/', 'zhuh lee-ZEH kahⁿ luh tay-lay-fon ah soh-NAY', ['en-cours', 'apercu-b103']),
  pc(851, 'Il pleuvait quand je suis sorti.', 'It was raining when I went out.', '/il plø.vɛ kɑ̃ ʒə sɥi sɔʁ.ti/', 'eel pluh-VEH kahⁿ zhuh swee sor-TEE', ['en-cours', 'apercu-b103']),
];

/* ── ACT 8 · LA POLITESSE  .852-.871 ────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(852, 'Je voulais savoir si le poste était à temps plein.', 'I wanted to know if the job was full-time.', '/ʒə vu.lɛ sa.vwaʁ si lə pɔs.te.tɛ.ta tɑ̃ plɛ̃/', 'zhuh voo-LEH sah-vwar see luh pos-tay-teh-tah tahⁿ PLEHⁿ', ['poli']),
  sent(853, "Je venais pour l'appartement.", "I've come about the flat.", '/ʒə və.nɛ puʁ la.paʁ.tə.mɑ̃/', 'zhuh vuh-NEH poor lah-par-tuh-MAHⁿ', ['poli'], FCVDR),
  sent(854, 'Je me demandais si vous étiez libre jeudi.', 'I was wondering if you were free on Thursday.', '/ʒə mə də.mɑ̃.dɛ si vu.ze.tje libʁ ʒø.di/', 'zhuh muh duh-mahⁿ-DEH see voo-zay-tyay leebr zhuh-DEE', ['poli']),
  sent(855, 'Je me demandais si vous aviez encore mes photos.', 'I was wondering if you still had my photos.', '/ʒə mə də.mɑ̃.dɛ si vu.za.vje ɑ̃.kɔʁ me fo.to/', 'zhuh muh duh-mahⁿ-DEH see voo-zah-vyay ahⁿ-kor may foh-TOH', ['poli']),
  sent(856, 'Je voulais juste dire bonjour.', 'I just wanted to say hello.', '/ʒə vu.lɛ ʒyst diʁ bɔ̃.ʒuʁ/', 'zhuh voo-LEH zhüst deer bohⁿ-ZHOOR', ['poli'], FCVDR),
  sent(857, 'Je cherchais monsieur Tremblay.', 'I was looking for Mr Tremblay.', '/ʒə ʃɛʁ.ʃɛ mə.sjø tʁɑ̃.blɛ/', 'zhuh shehr-SHEH muh-syuh trahⁿ-BLEH', ['poli', 'quebec']),
  sent(858, "J'appelais pour l'annonce.", "I'm calling about the ad.", '/ʒa.plɛ puʁ la.nɔ̃s/', 'zhah-PLEH poor lah-NOHⁿS', ['poli']),
  sent(859, 'Je voulais vous demander un conseil.', 'I wanted to ask you for some advice.', '/ʒə vu.lɛ vu də.mɑ̃.de œ̃ kɔ̃.sɛj/', 'zhuh voo-LEH voo duh-mahⁿ-day uhⁿ kohⁿ-SEHY', ['poli']),
  sent(860, 'Je voulais te demander quelque chose.', 'I wanted to ask you something.', '/ʒə vu.lɛ tə də.mɑ̃.de kɛl.kə ʃoz/', 'zhuh voo-LEH tuh duh-mahⁿ-day kel-kuh SHOHZ', ['poli', 'tu']),
  sent(861, 'Je me demandais si je pouvais partir plus tôt.', 'I was wondering if I could leave earlier.', '/ʒə mə də.mɑ̃.dɛ si ʒə pu.vɛ paʁ.tiʁ ply to/', 'zhuh muh duh-mahⁿ-DEH see zhuh poo-veh par-teer plü TOH', ['poli']),
  sent(862, 'Je voulais savoir si la chambre était encore libre.', 'I wanted to know if the room was still free.', '/ʒə vu.lɛ sa.vwaʁ si la ʃɑ̃.bʁe.tɛ ɑ̃.kɔʁ libʁ/', 'zhuh voo-LEH sah-vwar see lah shahⁿ-bray-teh ahⁿ-kor LEEBR', ['poli']),
  sent(863, 'On voulait réserver une table pour deux.', 'We wanted to book a table for two.', '/ɔ̃ vu.lɛ ʁe.zɛʁ.ve yn tabl puʁ dø/', 'ohⁿ voo-LEH ray-zehr-vay ün tabl poor DUH', ['poli']),
  sent(864, 'Je venais chercher un colis.', "I've come to pick up a parcel.", '/ʒə və.nɛ ʃɛʁ.ʃe œ̃ kɔ.li/', 'zhuh vuh-NEH shehr-shay uhⁿ koh-LEE', ['poli']),
  sent(865, 'Je voulais vous remercier pour tout.', 'I wanted to thank you for everything.', '/ʒə vu.lɛ vu ʁə.mɛʁ.sje puʁ tu/', 'zhuh voo-LEH voo ruh-mehr-syay poor TOO', ['poli']),
  sent(866, "Je me demandais si vous pouviez m'écrire une lettre de recommandation.", 'I was wondering if you could write me a reference letter.', '/ʒə mə də.mɑ̃.dɛ si vu pu.vje me.kʁiʁ yn lɛtʁ də ʁə.kɔ.mɑ̃.da.sjɔ̃/', 'zhuh muh duh-mahⁿ-DEH see voo poo-vyay may-kreer ün lehtr duh ruh-koh-mahⁿ-dah-SYOHⁿ', ['poli', 'tache']),
  sent(867, "Bonjour, je téléphonais au sujet de l'appartement.", "Hello, I'm calling about the flat.", '/bɔ̃.ʒuʁ ʒə te.le.fɔ.nɛ o sy.ʒɛ də la.paʁ.tə.mɑ̃/', 'bohⁿ-ZHOOR zhuh tay-lay-foh-NEH oh sü-zheh duh lah-par-tuh-MAHⁿ', ['poli']),
  pres(868, 'Je veux vous demander un service.', 'I want to ask you a favour.', '/ʒə vø vu də.mɑ̃.de œ̃ sɛʁ.vis/', 'zhuh vuh voo duh-mahⁿ-day uhⁿ sehr-VEES', ['poli', 'direct']),
  cond(869, 'Je voudrais vous demander un service.', 'I would like to ask you a favour.', '/ʒə vu.dʁɛ vu də.mɑ̃.de œ̃ sɛʁ.vis/', 'zhuh voo-DREH voo duh-mahⁿ-day uhⁿ sehr-VEES', ['poli', 'conditionnel']),
  pres(870, 'Est-ce que vous êtes libre jeudi ?', 'Are you free on Thursday?', '/ɛs.kə vu.zɛt libʁ ʒø.di/', 'es-kuh voo-zet leebr zhuh-DEE', ['poli', 'direct']),
  sent(871, 'Hier soir, je voulais dormir tôt.', 'Last night, I wanted to sleep early.', '/jɛʁ swaʁ ʒə vu.lɛ dɔʁ.miʁ to/', 'yehr SWAR zhuh voo-leh dor-meer TOH', ['poli', 'contre-exemple', 'etat']),
];

/* ── ACT 9 · LES PIÈGES ANGLAIS  .872-.887 ──────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(872, "Quand j'étais petit, je jouais dehors tous les jours.", 'When I was a kid, I would play outside every day.', '/kɑ̃ ʒe.tɛ pə.ti ʒə ʒu.ɛ də.ɔʁ tu le ʒuʁ/', 'kahⁿ zhay-teh puh-TEE zhuh zhoo-EH duh-or too lay ZHOOR', ['would', 'habitude'], FCVDR),
  sent(873, 'Chaque été, on allait au lac.', 'Every summer, we would go to the lake.', '/ʃa.ke.te ɔ̃.na.lɛ o lak/', 'shah-kay-TAY ohⁿ-nah-LEH oh LAK', ['would', 'habitude'], FCVDR),
  sent(874, "J'avais l'habitude de marcher jusqu'à l'école.", 'I used to walk to school.', '/ʒa.vɛ la.bi.tyd də maʁ.ʃe ʒys.ka le.kɔl/', 'zha-VEH lah-bee-TÜD duh mar-shay zhüs-kah lay-KOL', ['used-to']),
  sent(875, 'Avant, je fumais.', 'I used to smoke.', '/a.vɑ̃ ʒə fy.mɛ/', 'ah-VAHⁿ zhuh fü-MEH', ['used-to', 'avant'], FCVDR),
  sent(876, 'Ils venaient nous voir tous les étés.', 'They would come and see us every summer.', '/il və.nɛ nu vwaʁ tu le.ze.te/', 'eel vuh-NEH noo vwar too lay-zay-TAY', ['would', 'habitude']),
  sent(877, "Quand il neigeait, l'école fermait.", 'When it snowed, the school closed.', '/kɑ̃.til nɛ.ʒɛ le.kɔl fɛʁ.mɛ/', 'kahⁿ-teel neh-ZHEH lay-kol fehr-MEH', ['would', 'habitude', 'meteo']),
  sent(878, 'On ne fermait jamais la porte à clé.', 'We never locked the door.', '/ɔ̃ nə fɛʁ.mɛ ʒa.mɛ la pɔʁt a kle/', 'ohⁿ nuh fehr-MEH zhah-meh lah port ah KLAY', ['would', 'negation']),
  sent(879, 'Nous habitions au-dessus du magasin.', 'We used to live above the shop.', '/nu.za.bi.tjɔ̃ o.də.sy dy ma.ɡa.zɛ̃/', 'noo-zah-bee-TYOHⁿ oh-duh-sü dü mah-gah-ZEHⁿ', ['used-to']),
  sent(880, "Quand j'étais ado, j'écoutais la radio toute la nuit.", 'When I was a teenager, I listened to the radio all night.', '/kɑ̃ ʒe.tɛ.za.do ʒe.ku.tɛ la ʁa.djo tut la nɥi/', 'kahⁿ zhay-teh-zah-DOH zhay-koo-TEH lah rah-dyoh toot lah NWEE', ['would', 'habitude']),
  sent(881, 'On se promenait le long du fleuve.', 'We used to walk along the river.', '/ɔ̃ sə pʁɔm.nɛ lə lɔ̃ dy flœv/', 'ohⁿ suh prom-NEH luh lohⁿ dü FLUHV', ['used-to', 'pronominal']),
  sent(882, 'Mon grand-père racontait la guerre.', 'My grandfather would talk about the war.', '/mɔ̃ ɡʁɑ̃.pɛʁ ʁa.kɔ̃.tɛ la ɡɛʁ/', 'mohⁿ grahⁿ-PEHR rah-kohⁿ-teh lah GEHR', ['would', 'habitude']),
  sent(883, 'Il travaillait encore à minuit.', 'He was still working at midnight.', '/il tʁa.va.jɛ ɑ̃.kɔʁ a mi.nɥi/', 'eel trah-vah-YEH ahⁿ-kor ah mee-NWEE', ['was-ing', 'en-cours']),
  sent(884, 'Tu voulais me parler ?', 'Did you want to talk to me?', '/ty vu.lɛ mə paʁ.le/', 'tü voo-LEH muh par-LAY', ['poli', 'would']),
  cond(885, "Si j'avais le temps, je viendrais avec toi.", 'If I had time, I would come with you.', '/si ʒa.vɛ lə tɑ̃ ʒə vjɛ̃.dʁɛ a.vɛk twa/', 'see zha-VEH luh TAHⁿ zhuh vyehⁿ-DREH ah-vek TWAH', ['conditionnel', 'contre-exemple']),
  cond(886, 'Je voudrais un café.', 'I would like a coffee.', '/ʒə vu.dʁɛ œ̃ ka.fe/', 'zhuh voo-DREH uhⁿ kah-FAY', ['conditionnel', 'contre-exemple']),
  pc(887, "Cet hiver-là, j'ai marché jusqu'à l'école tous les jours.", 'That winter, I walked to school every day.', '/sɛ.ti.vɛʁ.la ʒe maʁ.ʃe ʒys.ka le.kɔl tu le ʒuʁ/', 'seh-tee-vehr-LAH zhay mar-shay zhüs-kah lay-KOL too lay ZHOOR', ['compter', 'used-to']),
];

/* ── ACT 10 · TOUT ENSEMBLE  .888-.899 ──────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(888, 'Je travaillais dans une agence de voyages.', 'I worked at a travel agency.', '/ʒə tʁa.va.jɛ dɑ̃.zy.na.ʒɑ̃s də vwa.jaʒ/', 'zhuh trah-vah-YEH dahⁿ-zü-nah-ZHAHⁿS duh vwah-YAZH', ['entretien', 'etat']),
  sent(889, 'Je gérais une équipe de six personnes.', 'I managed a team of six.', '/ʒə ʒe.ʁɛ y.ne.kip də si pɛʁ.sɔn/', 'zhuh zhay-REH ü-nay-KEEP duh see pehr-SON', ['entretien']),
  sent(890, 'Tous les lundis, je préparais le rapport de la semaine.', 'Every Monday, I prepared the weekly report.', '/tu le lœ̃.di ʒə pʁe.pa.ʁɛ lə ʁa.pɔʁ də la sə.mɛn/', 'too lay luhⁿ-DEE zhuh pray-pah-REH luh rah-por duh lah suh-MENN', ['entretien', 'habitude']),
  sent(891, "L'ambiance était bonne.", 'The atmosphere was good.', '/lɑ̃.bjɑ̃.se.tɛ bɔn/', 'lahⁿ-byahⁿ-say-TEH BONN', ['entretien', 'decor'], FCVDR),
  sent(892, 'Je connaissais bien mes collègues.', 'I knew my colleagues well.', '/ʒə kɔ.nɛ.sɛ bjɛ̃ me kɔ.lɛɡ/', 'zhuh koh-neh-SEH byehⁿ may koh-LEG', ['entretien', 'etat']),
  sent(893, "J'avais vingt-six ans à l'époque.", 'I was twenty-six at the time.', '/ʒa.vɛ vɛ̃t.si.zɑ̃ a le.pɔk/', 'zha-VEH vehⁿt-see-ZAHⁿ ah lay-POK', ['entretien', 'age'], FCVDR),
  sent(894, 'Avant, je voyageais peu.', 'I used to travel very little.', '/a.vɑ̃ ʒə vwa.ja.ʒɛ pø/', 'ah-VAHⁿ zhuh vwah-yah-ZHEH PUH', ['entretien', 'avant']),
  sent(895, 'On commençait à huit heures.', 'We started at eight.', '/ɔ̃ kɔ.mɑ̃.sɛ a ɥi.tœʁ/', 'ohⁿ koh-mahⁿ-SEH ah wee-TUHR', ['entretien', 'habitude']),
  sent(896, "C'était une petite agence, près de la gare.", 'It was a small agency, near the station.', '/se.tɛ.tyn pə.ti.ta.ʒɑ̃s pʁɛ də la ɡaʁ/', 'say-teh-tün puh-tee-tah-ZHAHⁿS preh duh lah GAR', ['entretien', 'decor']),
  sent(897, 'Je me demandais si vous cherchiez quelqu’un pour l’été.', 'I was wondering if you were looking for someone for the summer.', '/ʒə mə də.mɑ̃.dɛ si vu ʃɛʁ.ʃje kɛl.kœ̃ puʁ le.te/', 'zhuh muh duh-mahⁿ-DEH see voo shehr-shyay kel-kuhⁿ poor lay-TAY', ['poli', 'entretien']),
  sent(898, 'Je voulais vous demander si je pouvais commencer en mai.', 'I wanted to ask you if I could start in May.', '/ʒə vu.lɛ vu də.mɑ̃.de si ʒə pu.vɛ kɔ.mɑ̃.se ɑ̃ mɛ/', 'zhuh voo-LEH voo duh-mahⁿ-day see zhuh poo-veh koh-mahⁿ-say ahⁿ MEH', ['poli', 'entretien']),
  sent(899, "Quand j'habitais chez vous, j'étais étudiant.", 'When I lived at your place, I was a student.', '/kɑ̃ ʒa.bi.tɛ ʃe vu ʒe.tɛ.ze.ty.djɑ̃/', 'kahⁿ zha-bee-TEH shay voo zhay-teh-zay-tü-DYAHⁿ', ['tache', 'etat']),
];

/* ── ALL ─────────────────────────────────────────────────────────────────
 *  Index-aligned with the lesson's ten acts. */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS,
  ACT6_ROWS, ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat().sort((a, b) => a.id.localeCompare(b.id));

/** Rows that must never be released as a model of this lesson's grammar: the
 *  present-tense and passé composé counterexamples. They are SHOWN, in the
 *  mission that marks them, and never put in a deck. */
export const COUNTEREXAMPLE_IDS = ALL_ROWS
  .filter((r) => r.tags.includes('contre-exemple'))
  .map((r) => r.id);

/** Dictée pools. LETTERS MODE ONLY: word mode hands every real word over
 *  pre-spelled, measured through the app's own `dicteeMode`. */
const dictable = (r: Row) => (r.drills as string[]).includes('dictation') && dicteeMode(r.fr) === 'letters';

export const DICTEE_IDS = ALL_ROWS.filter(dictable).map((r) => r.id);

/** Per act, so an act's dictation names only what that act taught. */
export const dicteeFor = (act: number) => ROWS_BY_ACT[act - 1].filter(dictable).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  This lesson is about CHOOSING a tense, so most of it is testable: the
 *  forms differ by letters and by whole words.
 * ══════════════════════════════════════════════════════════════════════════ */

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: 'a listenChoose between « je patinais » and « je patinais » in two meanings', why: 'the tense is audible, the USE is not. Meaning is tested by mcq and by the written task.' },
  { want: 'a typeIn on « il faisait »', why: 'typeable and used; but « il fesait » is a different string, so the spelling is b1.01 ground and is only retested here.' },
  { want: 'an ear question separating « on allait » from « on allait » with a count', why: 'a count lives in the words around the verb, not in the verb. The counted-period counterexamples are read, not heard.' },
];

/** Error forms this lesson prints on purpose, only where it marks them. */
export const WRONG_FORMS = [
  'je jouerais dehors', "j'étais douze ans", "Avant, j'habite", 'on a patiné tous les samedis',
  'je veux vous demander', "j'utilisais à fumer",
] as const;
