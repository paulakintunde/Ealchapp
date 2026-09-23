// b1.02.l1 « L'imparfait : les emplois » — the authored corpus and the
// citation constants. DRAFT: nothing here is imported, merged or published.
//
// ══════════════════════════════════════════════════════════════════════════
//  STATUS OF EVERY CLAIM IN THIS FILE
// ══════════════════════════════════════════════════════════════════════════
//
//   SEED-CHECKED ONLY, DB CHECK PENDING AT IMPORT. seed.json is roughly a
//   quarter of Postgres, so "absent from the seed" means "absent from the
//   cut", never "absent from the product". Every reuse below was found by a
//   read-only node walk of seed.json on 2026-09-22; every "no row exists"
//   claim is provisional until the import probe runs against Postgres.
//
//   THEME `recits-au-passe` (Paul, 2026-09-22). It already exists in seed.json
//   `themes` (domain `fondations`, levelRange a2-b2) and holds no items, so it
//   is NOT created at import. b1.01 shares the block: b1.01 owns `.001`-`.099`,
//   this lesson owns `.101`-`.199`. `.101`-`.145` used, `.146`-`.199` free.
//
//   NO B1 UNIT EXISTS in seed.json `units` and no B1 lesson either, so
//   `unitRef('b1.01')` returns the raw id. Every citation of b1.01 / b1.03 on a
//   learner surface is therefore a relative label (« la leçon précédente »),
//   not a resolved lesson number. Open question 3 in the lesson header.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   WHEN to reach for the imparfait, on its own, with no passé composé in the
//   same sentence: habit and repetition, states and feelings, description and
//   scenery, weather, clock time and age, the polite imparfait, and the
//   avant / maintenant frame. One line about the action in progress, which is
//   b1.03 takes over the moment an interruption arrives.
//
// QUOTED, NEVER TAUGHT:
//
//   b1.01  formation (nous-stem + endings, être as the one exception). One
//          recall mission, s03-recall, quoting its reframe verbatim.
//   b1.03  the passé composé / imparfait contrast. Named in s07-habit (the
//          counted-summer counterexample) and s12-cours, then left alone.
//   a2.05, a2.21  the passé composé, which the scene's wrong try uses.
//   a2.13  vouloir, and `je voudrais`, which s13-poli sets beside `je voulais`.
//   a2.14  savoir / connaître, whose imparfait is the cleanest state verb.
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §A. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.02',
  seq: 2,
  title: 'The Imperfect: Uses',
  sub: "L'imparfait : les emplois",
  canDo: 'Can describe habits, states, scenery, weather, time and age in the past, and soften a request',
  prereqUnitIds: ['b1.01'],
} as const;

export const LESSON_ID = 'b1.02.l1';
export const THEME = 'recits-au-passe';
export const ID_FIRST = 101;
export const ID_LAST = 199;      // allocated by the pilot brief
export const ID_USED_LAST = 145;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. QUOTATIONS AND CITATION LABELS
 * ══════════════════════════════════════════════════════════════════════════ */

/** b1.01's reframe, quoted verbatim in s03-rappel. IMPORTED, not retyped, so
 *  the quote fails the build the day b1.01 rewords it. */
export { REFRAME as B101_REFRAME } from './imparfait-formation-corpus.ts';
export const B101_UNIT = 'b1.01';
/** Relative, because no B1 unit has a seq in seed.json yet (see header). */
export const B101_REF = 'la leçon précédente';
export const B103_UNIT = 'b1.03';
export const B103_REF = 'la leçon suivante';

/** An A2 unit cited in simple French. Resolved through the shipped `unit.seq`
 *  by `unitRef`, then put into French: « lesson 16 in A2 » becomes « la leçon
 *  16 du niveau A2 ». An unresolved id comes back unchanged so it shows up as a
 *  raw id and fails review rather than inventing a number. */
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

export const PC_REF = frRef(PC_UNIT);        // « la leçon 16 du niveau A2 »
export const MODAL_REF = frRef(MODAL_UNIT);  // « la leçon 7 du niveau A2 »
export const SAVOIR_REF = frRef(SAVOIR_UNIT); // « la leçon 8 du niveau A2 »

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE REFRAME
 *
 *  Short enough to run mid-sentence. It covers six of the seven uses: a habit
 *  is looked at, not counted; a state, a scene, the weather, the time and an
 *  age are all things you look at. The polite imparfait is the one use it does
 *  not cover, and s13-poli says so on screen rather than stretching the line.
 *
 *  It does NOT say « décor versus action ». That is b1.03's contrast and this
 *  lesson must not pre-empt its reframe.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "À l'imparfait, on regarde le passé. On ne le compte pas.";
export const REFRAME_EN = 'In the imparfait you look at the past. You do not count it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  { text: "L'imparfait, c'est le décor ; le passé composé, c'est l'action.", why: "b1.03's contrast. This lesson has no passé composé in its model sentences except as a counterexample." },
  { text: 'Used to, would, was -ing : imparfait.', why: 'A translation table, and wrong on would (s15 card 6 is the polite would).' },
  { text: "L'imparfait décrit.", why: 'True of four uses, silent on habit, which is the use the scene breaks.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. REUSED ROWS (seed-checked only)
 *
 *  Found by a regex walk of seed.json for imparfait forms. Only rows that use
 *  the imparfait ALONE (no passé composé in the sentence) or that serve as a
 *  counterexample are reused. Rows like `fr.b1.cafe.096` « Il faisait froid,
 *  alors nous avons préféré... » mix the two tenses and belong to b1.03.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REUSED = {
  habit: [
    'fr.b1.routines.075',          // Quand j'étais enfant, je me levais toujours avant mes parents.   flashcard
    'fr.b1.routines.078',          // Autrefois, nous prenions le petit déjeuner ensemble tous les jours.   flashcard
    'fr.b1.routines.082',          // Quand elle était étudiante, elle étudiait souvent jusqu'à minuit.   flashcard
    'fr.b1.sports-et-loisirs.076', // Quand j'étais plus jeune, je jouais au football tous les week-ends.   flashcard
    'fr.b1.cuisine.087',           // Quand j'étais enfant, je cuisinais avec ma mère chaque dimanche.   flashcard
  ],
  thenNow: [
    'fr.b1.routines.074',          // Autrefois, il se réveillait sans réveil, mais maintenant il en a besoin.   dictation ONLY
  ],
  state: [
    'fr.a2.ecole.013',             // Quand j'étais petite, j'aimais beaucoup l'école.   sentence,review (no flashcard)
    'fr.a2.animaux.010',           // J'avais un chat et il dormait toujours sur mon lit.   sentence,review (no flashcard)
  ],
  decor: [
    'fr.b1.heure-et-date.039',     // L'année dernière à la même époque, il neigeait.   flashcard
    'fr.a2.heure-et-date.080',     // Avant-hier, il neigeait encore.   flashcard
    'fr.b1.nombres.009',           // Il y avait une centaine de spectateurs.   flashcard
  ],
  /** THE CUE-IS-NOT-A-TRIGGER EVIDENCE. The same markers the lesson teaches,
   *  with the verb in the present, because the thing is still true. */
  counter: [
    'fr.a2.routines.004',          // D'habitude, nous dînons vers vingt heures.   flashcard
    'fr.a2.pronoms-essentiels.333',// Oui, j'y vais tous les samedis.   flashcard,voiceflash
  ],
} as const;

export const REUSED_IDS = [...new Set(Object.values(REUSED).flat())];

/** Named in sections, NOT releasable by deckTranche: no `flashcard` drill. */
export const NOT_DECK_ABLE = ['fr.b1.routines.074', 'fr.a2.ecole.013', 'fr.a2.animaux.010'];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. AUTHORED ROWS  .101-.145
 *
 *  Every row: fr, en, ipa, respell, level 'b1', theme 'recits-au-passe', drills, and
 *  a cardType with a prompt (none is plain vocab).
 *
 *    gapfill   the front is the sentence with the verb gapped and the
 *              infinitive in brackets; `fr` is the answer and what TTS says
 *    register  the front is the blunt version; `fr` is the softened one
 *    grammar   the front names the cue; `fr` is the counterexample
 *
 *  NO U+203F anywhere, in ipa or respell. Liaisons are written onto the next
 *  syllable (`noo-zah-LYOHⁿ`). Nasals close with ⁿ. Respell reused where the
 *  seed has the word: c'était say-TEH, froid FRWAH, minuit mee-NWEE,
 *  souvent soo-VAHⁿ, samedi sam-DEE, école ay-KOL.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FVSR = ['flashcard', 'voiceflash', 'sentence', 'review'] as Item['drills'];
const FVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];

const row = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  cardType: NonNullable<Item['cardType']>, prompt: string, tags: string[], drills: Item['drills'],
): Row => ({
  id: E(n), kind: 'sentence', level: 'b1', theme: THEME, fr, en, ipa, respell,
  cardType, prompt, tags, drills, version: 1, grammarPoints: ['imparfait'],
});

/* ── HABIT AND REPETITION .101-.104, .128, .142 ─────────────────────────── */
export const HABIT_ROWS: Row[] = [
  row(101, 'Tous les samedis, on patinait sur le lac.', 'Every Saturday, we would skate on the lake.',
    '/tu le sam.di ɔ̃ pa.ti.nɛ syʁ lə lak/', 'too lay sam-DEE ohⁿ pa-tee-NEH sür luh LAK',
    'gapfill', 'Tous les samedis, on ___ sur le lac. (patiner)', ['habitude', 'scene'], FVSR),
  row(102, "D'habitude, mon père se levait à cinq heures.", 'Usually, my father got up at five.',
    '/da.bi.tyd mɔ̃ pɛʁ sə lə.vɛ a sɛ̃.kœʁ/', 'da-bee-TÜD mohⁿ PEHR suh luh-VEH ah sehⁿ-KUHR',
    'gapfill', "D'habitude, mon père se ___ à cinq heures. (lever)", ['habitude'], FVSR),
  row(103, 'Chaque été, nous allions chez ma grand-mère à Abidjan.', "Every summer, we went to my grandmother's in Abidjan.",
    '/ʃa.ke.te nu.za.ljɔ̃ ʃe ma ɡʁɑ̃.mɛʁ a a.bi.dʒɑ̃/', 'shah-kay-TAY noo-zah-LYOHⁿ shay mah grahⁿ-MEHR ah ah-bee-DJAHⁿ',
    'gapfill', 'Chaque été, nous ___ chez ma grand-mère à Abidjan. (aller)', ['habitude'], FVSR),
  row(104, "On allait souvent au dépanneur après l'école.", 'We often went to the corner store after school.',
    '/ɔ̃.na.lɛ su.vɑ̃ o de.pa.nœʁ a.pʁɛ le.kɔl/', 'ohⁿ-nah-LEH soo-VAHⁿ oh day-pah-NUHR ah-preh lay-KOL',
    'gapfill', "On ___ souvent au dépanneur après l'école. (aller)", ['habitude', 'quebec'], FVSR),
  row(128, "Quand j'étais petit, je jouais dehors tous les jours.", 'When I was a kid, I would play outside every day.',
    '/kɑ̃ ʒe.tɛ pə.ti ʒə ʒu.ɛ də.ɔʁ tu le ʒuʁ/', 'kahⁿ zhay-teh puh-TEE zhuh zhoo-EH duh-OR too lay ZHOOR',
    'gapfill', "Quand j'étais petit, je ___ dehors tous les jours. (jouer)", ['habitude', 'would'], FVSR),
  row(142, 'Chaque été, on allait au lac.', 'Every summer, we would go to the lake.',
    '/ʃa.ke.te ɔ̃.na.lɛ o lak/', 'shah-kay-TAY ohⁿ-nah-LEH oh LAK',
    'gapfill', 'Chaque été, on ___ au lac. (aller)', ['habitude', 'would'], FVDR),
];

/* ── THEN AND NOW .105-.107, .129, .130, .137 ───────────────────────────── */
export const THEN_NOW_ROWS: Row[] = [
  row(105, "Avant, j'habitais à Bruxelles. Maintenant, j'habite à Montréal.", 'I used to live in Brussels. Now I live in Montreal.',
    '/a.vɑ̃ ʒa.bi.tɛ a bʁy.sɛl mɛ̃t.nɑ̃ ʒa.bit a mɔ̃.ʁe.al/', 'ah-VAHⁿ zha-bee-TEH ah brü-SELL · mehⁿt-NAHⁿ zha-BEET ah mohⁿ-ray-AL',
    'gapfill', "Avant, j'___ à Bruxelles. Maintenant, j'habite à Montréal. (habiter)", ['avant-maintenant'], FVSR),
  row(106, "À l'époque, il n'y avait pas de téléphone portable.", 'Back then, there were no cell phones.',
    '/a le.pɔk il nja.vɛ pa də te.le.fɔn pɔʁ.tabl/', 'ah lay-POK eel nyah-VEH pah duh tay-lay-FON por-TAHBL',
    'gapfill', "À l'époque, il n'y ___ pas de téléphone portable. (avoir)", ['avant-maintenant', 'decor'], FVSR),
  row(107, 'Autrefois, le village avait une seule école.', 'In the old days, the village had only one school.',
    '/o.tʁə.fwa lə vi.laʒ a.vɛ yn sœl e.kɔl/', 'oh-truh-FWAH luh vee-LAZH ah-VEH ün SUHL ay-KOL',
    'gapfill', 'Autrefois, le village ___ une seule école. (avoir)', ['avant-maintenant', 'decor'], FVSR),
  row(129, 'Avant, je fumais.', 'I used to smoke.',
    '/a.vɑ̃ ʒə fy.mɛ/', 'ah-VAHⁿ zhuh fü-MEH',
    'gapfill', 'Avant, je ___. (fumer)', ['avant-maintenant', 'used-to'], FVDR),
  row(130, "J'avais l'habitude de marcher jusqu'à l'école.", 'I used to walk to school.',
    '/ʒa.vɛ la.bi.tyd də maʁ.ʃe ʒys.ka le.kɔl/', 'zha-VEH lah-bee-TÜD duh mar-SHAY zhüs-KAH lay-KOL',
    'gapfill', "J'___ l'habitude de marcher jusqu'à l'école. (avoir)", ['habitude', 'used-to'], FVSR),
  row(137, 'Maintenant, il y a un grand centre commercial.', "Now there's a big shopping mall.",
    '/mɛ̃t.nɑ̃ i.li.ja œ̃ ɡʁɑ̃ sɑ̃tʁ kɔ.mɛʁ.sjal/', 'mehⁿt-NAHⁿ ee-lee-YAH uhⁿ grahⁿ SAHⁿTR koh-mehr-SYAL',
    'grammar', 'maintenant : le présent revient', ['avant-maintenant', 'scene'], FVSR),
];

/* ── STATES AND FEELINGS .108-.112 ──────────────────────────────────────── */
export const STATE_ROWS: Row[] = [
  row(108, "J'étais fatigué et j'avais froid.", 'I was tired and I was cold.',
    '/ʒe.tɛ fa.ti.ɡe e ʒa.vɛ fʁwa/', 'zhay-TEH fa-tee-GAY ay zha-VEH FRWAH',
    'gapfill', "J'___ fatigué et j'avais froid. (être)", ['etat'], FVSR),
  row(109, 'Il avait peur du noir.', 'He was afraid of the dark.',
    '/i.la.vɛ pœʁ dy nwaʁ/', 'ee-lah-VEH puhr dü NWAR',
    'gapfill', 'Il ___ peur du noir. (avoir)', ['etat'], FVDR),
  row(110, 'Je savais que la route était fermée.', 'I knew the road was closed.',
    '/ʒə sa.vɛ kə la ʁut e.tɛ fɛʁ.me/', 'zhuh sah-VEH kuh lah ROOT ay-TEH fehr-MAY',
    'gapfill', 'Je ___ que la route était fermée. (savoir)', ['etat'], FVSR),
  row(111, 'Je connaissais tout le monde dans le village.', 'I knew everyone in the village.',
    '/ʒə kɔ.nɛ.sɛ tu lə mɔ̃d dɑ̃ lə vi.laʒ/', 'zhuh koh-neh-SEH too luh MOHⁿD dahⁿ luh vee-LAZH',
    'gapfill', 'Je ___ tout le monde dans le village. (connaître)', ['etat'], FVSR),
  row(112, 'Ma sœur voulait devenir pilote.', 'My sister wanted to become a pilot.',
    '/ma sœʁ vu.lɛ də.və.niʁ pi.lɔt/', 'mah SUHR voo-LEH duh-vuh-NEER pee-LOT',
    'gapfill', 'Ma sœur ___ devenir pilote. (vouloir)', ['etat'], FVSR),
];

/* ── DESCRIPTION, WEATHER, TIME, AGE .113-.121, .144 ────────────────────── */
export const DECOR_ROWS: Row[] = [
  row(113, 'La maison était grande et un peu froide.', 'The house was big and a little cold.',
    '/la mɛ.zɔ̃ e.tɛ ɡʁɑ̃d e œ̃ pø fʁwad/', 'lah meh-ZOHⁿ ay-teh GRAHⁿD ay uhⁿ puh FRWAD',
    'gapfill', 'La maison ___ grande et un peu froide. (être)', ['decor'], FVSR),
  row(114, 'Il y avait un jardin derrière la maison.', 'There was a garden behind the house.',
    '/i.li.ja.vɛ œ̃ ʒaʁ.dɛ̃ dɛ.ʁjɛʁ la mɛ.zɔ̃/', 'ee-lee-yah-VEH uhⁿ zhar-DEHⁿ deh-RYEHR lah meh-ZOHⁿ',
    'gapfill', 'Il y ___ un jardin derrière la maison. (avoir)', ['decor'], FVSR),
  row(115, 'Les rues étaient étroites et tranquilles.', 'The streets were narrow and quiet.',
    '/le ʁy e.tɛ.te.tʁwat e tʁɑ̃.kil/', 'lay RÜ ay-teh-tay-TRWAT ay trahⁿ-KEEL',
    'gapfill', 'Les rues ___ étroites et tranquilles. (être)', ['decor'], FVSR),
  row(116, 'Il faisait froid.', 'It was cold.',
    '/il fə.zɛ fʁwa/', 'eel fuh-ZEH FRWAH',
    'gapfill', 'Il ___ froid. (faire)', ['meteo'], FVDR),
  row(117, 'Il neigeait.', 'It was snowing.',
    '/il nɛ.ʒɛ/', 'eel neh-ZHEH',
    'gapfill', 'Il ___. (neiger)', ['meteo'], FVDR),
  row(118, 'Il faisait trente degrés à Abidjan.', 'It was thirty degrees in Abidjan.',
    '/il fə.zɛ tʁɑ̃t də.ɡʁe a a.bi.dʒɑ̃/', 'eel fuh-ZEH trahⁿt duh-GRAY ah ah-bee-DJAHⁿ',
    'gapfill', 'Il ___ trente degrés à Abidjan. (faire)', ['meteo'], FVSR),
  row(119, 'Il était minuit.', 'It was midnight.',
    '/i.le.tɛ mi.nɥi/', 'ee-lay-TEH mee-NWEE',
    'gapfill', 'Il ___ minuit. (être)', ['heure'], FVDR),
  row(120, "J'avais douze ans.", 'I was twelve.',
    '/ʒa.vɛ du.zɑ̃/', 'zha-VEH doo-ZAHⁿ',
    'gapfill', "J'___ douze ans. (avoir)", ['age'], FVDR),
  row(121, "Quand j'avais douze ans, j'habitais à Dakar.", 'When I was twelve, I lived in Dakar.',
    '/kɑ̃ ʒa.vɛ du.zɑ̃ ʒa.bi.tɛ a da.kaʁ/', 'kahⁿ zha-VEH doo-ZAHⁿ zha-bee-TEH ah dah-KAR',
    'gapfill', "Quand j'avais douze ans, j'___ à Dakar. (habiter)", ['age'], FVSR),
  row(144, "J'avais vingt-six ans.", 'I was twenty-six.',
    '/ʒa.vɛ vɛ̃t.si.zɑ̃/', 'zha-VEH vehⁿt-see-ZAHⁿ',
    'gapfill', "J'___ vingt-six ans. (avoir)", ['age'], FVDR),
];

/* ── IN PROGRESS, PREVIEW ONLY .122, .123, .131, .132 ───────────────────────
 *  `.122` is the ONE row with a passé composé in it, and it exists to be the
 *  line where this lesson stops: b1.03 owns the interruption. */
export const PROGRESS_ROWS: Row[] = [
  row(122, 'Je lisais quand le téléphone a sonné.', 'I was reading when the phone rang.',
    '/ʒə li.zɛ kɑ̃ lə te.le.fɔn a sɔ.ne/', 'zhuh lee-ZEH kahⁿ luh tay-lay-FON ah soh-NAY',
    'grammar', 'une action en cours, puis une interruption (leçon suivante)', ['en-cours', 'preview-b1.03'], FVR),
  row(123, 'Je lisais dans ma chambre.', 'I was reading in my room.',
    '/ʒə li.zɛ dɑ̃ ma ʃɑ̃bʁ/', 'zhuh lee-ZEH dahⁿ mah SHAHⁿBR',
    'gapfill', 'Je ___ dans ma chambre. (lire)', ['en-cours'], FVSR),
  row(131, 'Je regardais la télé.', 'I was watching TV.',
    '/ʒə ʁə.ɡaʁ.dɛ la te.le/', 'zhuh ruh-gar-DEH lah tay-LAY',
    'gapfill', 'Je ___ la télé. (regarder)', ['en-cours', 'was-ing'], FVDR),
  row(132, "J'étais en train de cuisiner.", 'I was busy cooking.',
    '/ʒe.tɛ.zɑ̃ tʁɛ̃ də kɥi.zi.ne/', 'zhay-teh-zahⁿ trehⁿ duh kwee-zee-NAY',
    'grammar', 'possible, mais marqué : on insiste sur « au milieu de »', ['en-cours', 'was-ing'], FVR),
];

/* ── THE POLITE IMPARFAIT .124-.127, .141, .143 ─────────────────────────── */
export const POLITE_ROWS: Row[] = [
  row(124, 'Je voulais vous demander un petit service.', 'I wanted to ask you a small favour.',
    '/ʒə vu.lɛ vu də.mɑ̃.de œ̃ pə.ti sɛʁ.vis/', 'zhuh voo-LEH voo duh-mahⁿ-DAY uhⁿ puh-tee sehr-VEES',
    'register', 'Plus doux : Je veux vous demander un petit service.', ['poli'], FVSR),
  row(125, "Je venais pour l'appartement.", "I've come about the flat.",
    '/ʒə və.nɛ puʁ la.paʁ.tə.mɑ̃/', 'zhuh vuh-NEH poor lah-par-tuh-MAHⁿ',
    'register', "Plus doux, à la porte : Je viens pour l'appartement.", ['poli'], FVDR),
  row(126, 'Je me demandais si vous étiez libre jeudi.', 'I was wondering if you were free on Thursday.',
    '/ʒə mə də.mɑ̃.dɛ si vu.ze.tje libʁ ʒø.di/', 'zhuh muh duh-mahⁿ-DEH see voo-zay-TYAY LEEBR zhuh-DEE',
    'register', 'Plus doux : Est-ce que vous êtes libre jeudi ?', ['poli'], FVSR),
  row(127, 'Je veux vous demander un service.', 'I want to ask you a favour.',
    '/ʒə vø vu də.mɑ̃.de œ̃ sɛʁ.vis/', 'zhuh vuh voo duh-mahⁿ-DAY uhⁿ sehr-VEES',
    'register', 'Direct, au présent (correct, un peu sec)', ['poli', 'direct'], FVR),
  row(141, 'Je me demandais si vous pouviez m\'écrire une lettre de recommandation.', 'I was wondering if you could write me a reference letter.',
    '/ʒə mə də.mɑ̃.dɛ si vu pu.vje me.kʁiʁ yn lɛtʁ də ʁə.kɔ.mɑ̃.da.sjɔ̃/', 'zhuh muh duh-mahⁿ-DEH see voo poo-VYAY may-KREER ün LEHTR duh ruh-koh-mahⁿ-dah-SYOHⁿ',
    'register', "Plus doux : Vous pouvez m'écrire une lettre de recommandation ?", ['poli', 'task'], FVR),
  row(143, 'Je voulais savoir si le poste était à temps plein.', 'I wanted to know if the job was full-time.',
    '/ʒə vu.lɛ sa.vwaʁ si lə pɔst e.tɛ.ta tɑ̃ plɛ̃/', 'zhuh voo-LEH sah-VWAR see luh POST ay-teh-tah tahⁿ PLEHⁿ',
    'register', 'Plus doux : Le poste est à temps plein ?', ['poli', 'entretien'], FVSR),
];

/* ── COUNTEREXAMPLES: THE CUE IS NOT A TRIGGER .133-.135 ─────────────────
 *  Brief: « Show at least one counterexample for each cue you teach. »
 *
 *    tous les samedis  fr.a2.pronoms-essentiels.333  (present, reused)
 *    d'habitude        fr.a2.routines.004            (present, reused)
 *    chaque été        .133 (present)  and  .134 (passé composé, counted)
 *    souvent           fr.b1.routines.074 carries maintenant + present; and
 *                      .134's logic (a counted, closed summer) is named for
 *                      souvent in s07 card 6 and left to b1.03/b1.04
 *    avant             .135 (avant de + infinitive, not « back then »)
 *    maintenant        it is the counter-cue itself: .105, .137            */
export const COUNTER_ROWS: Row[] = [
  row(133, 'Chaque été, nous allons au Lac-Saint-Jean.', 'Every summer, we go to Lac-Saint-Jean.',
    '/ʃa.ke.te nu.za.lɔ̃ o lak.sɛ̃.ʒɑ̃/', 'shah-kay-TAY noo-zah-LOHⁿ oh lak-sehⁿ-ZHAHⁿ',
    'grammar', "chaque été, mais c'est encore vrai aujourd'hui", ['indice', 'contre-exemple'], FVSR),
  row(134, 'Cet été-là, je suis allé trois fois au lac.', 'That summer, I went to the lake three times.',
    '/sɛ.te.te.la ʒə sɥi.za.le tʁwa fwa o lak/', 'seh-tay-tay-LAH zhuh swee-zah-LAY trwah fwah oh LAK',
    'grammar', 'un été précis, et on compte : trois fois', ['indice', 'contre-exemple', 'preview-b1.03'], FVSR),
  row(135, "Avant de partir, j'éteins la lumière.", 'Before leaving, I turn off the light.',
    '/a.vɑ̃ də paʁ.tiʁ ʒe.tɛ̃ la ly.mjɛʁ/', 'ah-vahⁿ duh par-TEER zhay-TEHⁿ lah lü-MYEHR',
    'grammar', "avant de + verbe : ce n'est pas « à l'époque »", ['indice', 'contre-exemple'], FVSR),
];

/* ── THE SCENE AND THE INTERVIEW .136, .138-.140, .145 ──────────────────── */
export const TALK_ROWS: Row[] = [
  row(136, "C'était comment ?", 'What was it like?',
    '/se.tɛ kɔ.mɑ̃/', 'say-teh koh-MAHⁿ',
    'gapfill', "C'___ comment ? (être)", ['scene', 'decor'], FVDR),
  row(138, 'Je gérais une équipe de six personnes.', 'I managed a team of six people.',
    '/ʒə ʒe.ʁɛ y.ne.kip də si pɛʁ.sɔn/', 'zhuh zhay-REH ü-nay-KEEP duh see pehr-SON',
    'gapfill', 'Je ___ une équipe de six personnes. (gérer)', ['entretien', 'habitude'], FVSR),
  row(139, 'Tous les lundis, je préparais le rapport de la semaine.', 'Every Monday, I prepared the weekly report.',
    '/tu le lœ̃.di ʒə pʁe.pa.ʁɛ lə ʁa.pɔʁ də la sə.mɛn/', 'too lay luhⁿ-DEE zhuh pray-pah-REH luh rah-POR duh lah suh-MENN',
    'gapfill', 'Tous les lundis, je ___ le rapport de la semaine. (préparer)', ['entretien', 'habitude'], FVSR),
  row(140, "L'ambiance était bonne.", 'The atmosphere was good.',
    '/lɑ̃.bjɑ̃s e.tɛ bɔn/', 'lahⁿ-BYAHⁿS ay-teh BONN',
    'gapfill', "L'ambiance ___ bonne. (être)", ['entretien', 'decor'], FVDR),
  row(145, 'Je travaillais dans une agence de voyages.', 'I worked at a travel agency.',
    '/ʒə tʁa.va.jɛ dɑ̃.zy.na.ʒɑ̃s də vwa.jaʒ/', 'zhuh trah-vah-YEH dahⁿ-zü-nah-ZHAHⁿS duh vwah-YAZH',
    'gapfill', 'Je ___ dans une agence de voyages. (travailler)', ['entretien', 'etat'], FVSR),
];

export const ALL_ROWS: Row[] = [
  ...HABIT_ROWS, ...THEN_NOW_ROWS, ...STATE_ROWS, ...DECOR_ROWS, ...PROGRESS_ROWS,
  ...POLITE_ROWS, ...COUNTER_ROWS, ...TALK_ROWS,
].sort((a, b) => a.id.localeCompare(b.id));

/** The dictée: only short rows carrying `dictation`. */
export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** Every row that `practice: speak` can name (voiceflash), authored plus the
 *  one reused row that carries it. */
export const SPEAKABLE_IDS = [
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  'fr.a2.pronoms-essentiels.333',
];
