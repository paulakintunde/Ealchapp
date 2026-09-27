// b1.28.l1 « Les animaux et la nourriture » — the authored corpus, the
// imports and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top
// of B1-BUILD-PLAYBOOK.md, in the VOCAB SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md
// (§2: an act is built around a FAMILY of expressions in use).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE IDIOMS WHOSE KEY IMAGE IS AN ANIMAL OR A FOOD. The ownership rule for
//   the three idiom lessons (b1.27 body, b1.28 animals and food, b1.29
//   colours) was fixed before any of them was written: an idiom belongs to
//   the lesson of its KEY IMAGE. Assigned here by name: « donner sa langue au
//   chat », « avoir un chat dans la gorge », « être une poule mouillée ».
//   Assigned elsewhere and NOT taught here: « avoir les yeux plus gros que le
//   ventre » (b1.27), « rouge comme une tomate », « rire jaune », « avoir une
//   peur bleue » (b1.29). No body-part image and no colour idiom is a taught
//   item in this file.
//
//   58 expressions in ten families, one family per act from act 2 to act 11,
//   never more than eight in an act (§E lists them with their register):
//     2  le temps qu'il fait et l'heure       6
//     3  attendre, et ne pas venir            4
//     4  la peur et le courage                6 (+ the France variant)
//     5  la faim et l'humeur                  6
//     6  la santé                             5
//     7  les salades et les secrets           6
//     8  facile ou pas facile                 6 (+ the France variant)
//     9  les portraits en « comme »           8
//    10  les autres, et revenir au sujet      6
//    11  les bonnes et les mauvaises nouvelles 5
//   Act 1 meets eight of them in one text before any is taught; act 12 puts
//   them into the graded anecdote.
//
//   NOT OWNED: the literal words, which are a1.23's (food, « lesson 26 in
//   A1 ») and the `animaux` theme's, both CITED by seed id and never
//   re-authored; the subjunctive (b1.14 to b1.16), kept out of every authored
//   French string; body idioms (b1.27); colour idioms (b1.29).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `expressions-imagees` (« Les expressions imagées », domain
//     fondations, levelRange b1-b2, sub-themes: le corps, les animaux et la
//     nourriture, les couleurs) WAS CREATED IN POSTGRES ON 2026-09-26 for the
//     three idiom lessons. Probed read-only on 2026-09-26: the theme row is
//     there and holds ZERO items at any level.
//
//     IT EXISTS IN POSTGRES ONLY. It is NOT in `seed.json`'s theme list and
//     arrives there at the next publish. So a readiness run WILL warn that the
//     theme is not in the seed's theme list. THAT WARNING IS EXPECTED AND IS
//     NOT A DEFECT.
//
//  2. ID BLOCK: this lesson owns `.1200`-`.1399` AND NOTHING ELSE. b1.27
//     (body) owns `.1000`-`.1199` and b1.29 (colours) `.1400`-`.1599`, and
//     both are being written in parallel. `.001`-`.999` stays free for a
//     future published import. Used here: `.1200`-`.1374`, one contiguous run
//     in twelve act blocks, plus `.1375` (« avoir la chair de poule », added
//     to act 4 by Paul's gate 3 decision, 2026-09-26). 176 rows. The seed also
//     holds fr.a1.corps.201 with the same French, in theme `corps`: a
//     different theme, so not a flashcard-hub twin, and it carries no
//     `flashcard` drill and no image note, so it is not reused here.
//
//  3. THE SEED HOLDS NONE OF THESE IDIOMS, BUT POSTGRES HOLDS FOURTEEN. The
//     seed was searched on 2026-09-26 for every expression in §E: zero hits.
//     A read-only Postgres probe the same day found published rows the seed
//     does not carry (listed in DB_ONLY_TWINS below). They cannot be reused,
//     because `src()` resolves against seed.json only, so this lesson authors
//     twins of them. This is the build log's standing "DB-only rows cannot be
//     reused" item: decide at import whether to dedupe.
//
//  4. Every reused id in §F was read out of seed.json on 2026-09-26 and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//     They are the LITERAL words (un lapin, la pêche, le chat) that the act's
//     idioms are built from: a1.23 food rows and `animaux` theme rows. Their
//     seed respellings are the old A1 style with a plain n (« lah-PAN »), so
//     no section prints their respelling; the act's cards respell the word in
//     the house style instead.
//
//  5. NO RESPELLING HERE IS SPELLED FOR THE CHECKER RATHER THAN THE EAR.
//     Every row was measured against `hasPlainNasalFor` (density.logic.ts):
//     zero flagged. Two choices were made BECAUSE of the checker, and both
//     are named so nobody undoes them: (a) the man who does not show up is
//     Julien, not Karim, because « ka-REEM » is a lone vowel closed by M in a
//     sentence with no Vne/Vme to clear it, and the checker would call it a
//     nasal; (b) « deuxième » is « deu-ZYEM », as a2.34 spells it, never
//     « deu-ZYEHM », which `hasPlainNasal` reads as a nasal EH closed by M.
//     No U+203F tie anywhere: a liaison consonant simply moves onto the next
//     syllable (« ko-muhⁿ-nwa-ZOH »). One respelling was adjusted AFTER the
//     checker fired: « semaine » is « suh-MEN » (row 1314), not « suh-MEHN »,
//     because `hasPlainNasal` reads EH closed by N as a nasal. « MEN » is
//     still what the ear hears, and the source's « aine » clears it.
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
  id: 'b1.28',
  seq: 28,
  title: 'Animal and Food Idioms',
  sub: 'Les animaux et la nourriture',
  canDo: 'Can understand and use about fifty frequent French idioms built on an animal or a food image, choosing the one that fits the situation and the register, and can tell a short anecdote with them',
  prereqUnitIds: ['b1.23'],
} as const;

export const LESSON_ID = 'b1.28.l1';
export const THEME = 'expressions-imagees';
export const LEVEL = 'b1' as const;

/** ONE block. b1.27 owns 1000-1199 and b1.29 owns 1400-1599 of this theme. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 citations use the house English trail label (« lesson 26 in A1 »),
 *  resolved through `unitRef` from the shipped `unit.seq`, never typed and
 *  never the raw id. b1.* units are not in the seed yet, so they are labelled
 *  in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOOD_UNIT = 'a1.23';
export const ARTICLES_UNIT = 'a1.04';
export const TOUT_UNIT = 'b1.23';
export const REGISTER_UNIT = 'b1.25';
export const BODY_UNIT = 'b1.27';
export const COLOUR_UNIT = 'b1.29';
export const SUBJ_UNIT = 'b1.14';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.14': 14, 'b1.23': 23, 'b1.25': 25, 'b1.26': 26, 'b1.27': 27, 'b1.28': 28, 'b1.29': 29,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const FOOD_REF = unitRef(FOOD_UNIT);          // "lesson 26 in A1"
export const ARTICLES_REF = unitRef(ARTICLES_UNIT);  // the lesson that first used the animaux rows
export const TOUT_REF = refFr(TOUT_UNIT);
export const REGISTER_REF = refFr(REGISTER_UNIT);
export const BODY_REF = refFr(BODY_UNIT);
export const COLOUR_REF = refFr(COLOUR_UNIT);

/** The literal words live in the `animaux` theme, which no single unit owns. */
export const ANIMAUX_THEME_FR = 'le thème « Les animaux »';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE PICTURE AND THE MESSAGE. An idiom is a small picture (a rabbit left
 *  at a café table, a duck in the cold) that carries a message (he did not
 *  come, it is freezing). In French you keep the picture WHOLE: same animal,
 *  same food, same words. Between French and English you carry the MESSAGE
 *  across, never the picture, because English usually draws a different one
 *  (« un chat dans la gorge », a frog in the throat).
 *
 *  It is NOT « French idioms are about animals ». Half of these are food,
 *  and act 9 shows that English sometimes keeps the SAME picture (têtu comme
 *  une mule, stubborn as a mule): the reframe still holds there, because the
 *  message crosses and the picture happens to match.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Garde l'image, traduis le sens.";
export const REFRAME_EN = 'Keep the picture, translate the meaning.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Une expression ne se traduit jamais mot à mot.',
    why: "Half the job. It stops « il pleut des chats et des chiens », but says nothing about keeping the French picture intact, which is the error act 2 is built on (« un froid de chien », « un temps de canard »: both pictures mixed, both wrong). And « jamais » is false in act 9, where « fort comme un bœuf » IS strong as an ox.",
  },
  {
    text: "Apprends l'image, et le sens viendra tout seul.",
    why: "A memory tip, not a rule, and false for the opaque ones: nothing in a leek tells you « poireauter » means waiting, and nothing in a carrot says « les carottes sont cuites » means it is over. The lesson teaches the image as a HOOK after the meaning is known.",
  },
  {
    text: "Chaque expression française a son équivalent anglais.",
    why: "False, and dangerous for the task: « donner sa langue au chat » and « ménager la chèvre et le chou » have no idiom of the same weight in English. A learner who hunts for one ends up translating the picture.",
  },
  {
    text: "Un animal, c'est familier ; un aliment, c'est courant.",
    why: "A register rule that does not exist. « Prendre le taureau par les cornes » is fine in a meeting and « c'est du gâteau » is not; register is per expression, which is why every card carries it.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE 58 EXPRESSIONS, BY ACT, WITH REGISTER
 *
 *  The cards, the sheets and the task checklist all read this list. `reg` is
 *  what the card's eyebrow says; `where` marks a regional one, and a regional
 *  one is never shown as universal (shapes doc §2.2).
 * ══════════════════════════════════════════════════════════════════════════ */

export type Reg = 'familier' | 'courant';

/** The act each family is TAUGHT in. Act 1 only meets them. */
export const FAMILIES: readonly { act: number; title: string; ids: readonly number[] }[] = [
  { act: 2, title: 'le temps et l’heure', ids: [1210, 1211, 1212, 1213, 1214, 1215] },
  { act: 3, title: 'attendre, et ne pas venir', ids: [1228, 1229, 1230, 1231] },
  { act: 4, title: 'la peur et le courage', ids: [1242, 1243, 1244, 1245, 1375, 1246, 1247] },
  { act: 5, title: 'la faim et l’humeur', ids: [1258, 1259, 1260, 1261, 1262, 1263] },
  { act: 6, title: 'la santé', ids: [1274, 1275, 1276, 1277, 1278] },
  { act: 7, title: 'les salades et les secrets', ids: [1289, 1290, 1291, 1292, 1293, 1294] },
  { act: 8, title: 'facile ou pas', ids: [1305, 1306, 1307, 1308, 1309, 1310, 1311] },
  { act: 9, title: 'les portraits', ids: [1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329] },
  { act: 10, title: 'les autres, et le sujet', ids: [1340, 1341, 1342, 1343, 1344, 1345] },
  { act: 11, title: 'les nouvelles', ids: [1356, 1357, 1358, 1359, 1360] },
];

/** « il pleut à boire debout » (1216) is taught too, but as the ANSWER to an
 *  English animal idiom (raining cats and dogs), not as an animal idiom of
 *  its own: it has no animal and no food in it. Counted separately. The two
 *  France variants (1247, 1311) are the same expression as their Québec
 *  twin and are not counted twice. So: 58 taught expressions. */
export const EQUIVALENT_ONLY = [1216] as const;
export const VARIANT_OF: Record<number, number> = { 1247: 1246, 1311: 1310 };

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  The LITERAL word each act's idioms are built from, cited from a1.23 (food)
 *  and the `animaux` theme. Every id was read from seed.json on 2026-09-26
 *  and its French is in the trailing comment. All carry `flashcard` and
 *  `voiceflash`, so none is NOT_DECK_ABLE or NOT_SPEAKABLE.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    'fr.a1.animaux.020',   // le canard
    'fr.a1.animaux.018',   // la poule
  ],
  act3: [
    'fr.a1.animaux.013',   // un lapin
    'fr.a1.animaux.012',   // le chat
  ],
  act4: [
    'fr.a1.animaux.026',   // le loup
  ],
  act5: [
    'fr.a1.cuisine.050',   // la pêche   (a1.23)
    'fr.a1.cuisine.025',   // une assiette
  ],
  act6: [
    'fr.a1.cuisine.003',   // une pomme
    'fr.a1.animaux.001',   // le chien
  ],
  act7: [
    'fr.a1.cuisine.020',   // la salade  (a1.23)
    'fr.a1.cuisine.011',   // le fromage (a1.23)
  ],
  act8: [
    'fr.a1.cuisine.062',   // le gâteau  (a1.23)
    'fr.a1.cuisine.002',   // le pain    (a1.23)
    'fr.a1.cuisine.013',   // un œuf
  ],
  act9: [
    'fr.a1.animaux.075',   // la taupe
    'fr.a1.animaux.029',   // le singe
  ],
  act10: [
    'fr.a1.animaux.017',   // le mouton
    'fr.a1.cuisine.047',   // la poire   (a1.23)
  ],
  act11: [
    'fr.a1.cuisine.049',   // la cerise
    'fr.a1.cuisine.012',   // le beurre  (a1.23)
    'fr.a1.cuisine.089',   // les épinards
    'fr.a1.cuisine.033',   // la carotte (a1.23)
    'fr.a1.cuisine.095',   // les haricots verts
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None here. */
export const NOT_DECK_ABLE: string[] = [];

/** No `voiceflash` either: never in a `practice` speak section. None here. */
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];

/** Published in POSTGRES, absent from the seed, so they could not be reused
 *  and this lesson authors a twin of each. Probed read-only 2026-09-26.
 *  Decide at import: dedupe against these, or keep both. */
export const DB_ONLY_TWINS: Record<string, string> = {
  'fr.b1.expressions-argot.019': 'poser un lapin',
  'fr.b2.rp-meteo-nature.034': 'il fait un froid de canard',
  'fr.b1.expressions-argot.048': "avoir d'autres chats à fouetter",
  'fr.b1.expressions-argot.049': 'donner sa langue au chat',
  'fr.b1.symptomes.048': 'avoir un chat dans la gorge',
  'fr.b1.expressions-argot.020': 'raconter des salades',
  'fr.b1.expressions-argot.056': 'ne pas être dans son assiette',
  'fr.b1.symptomes.050': 'ne pas être dans son assiette',
  'fr.a2.expressions-argot.045': 'avoir la pêche',
  'fr.b2.expressions-argot.001': 'tomber dans les pommes',
  'fr.b1.expressions-argot.053': 'en faire tout un fromage',
  'fr.a2.expressions-argot.033': "c'est du gâteau",
  'fr.b1.emotions.054': 'avoir des papillons dans le ventre',
  'fr.c1.francais-professionnel-avance.106': 'couper la poire en deux (inside a C1 sentence)',
};

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie.
 *
 *  An EXPRESSION row is a `phrase` carrying `register` and a `notes` line in
 *  the order the shapes doc asks for: the literal picture first, the meaning
 *  second, then the English equivalent. An EXAMPLE row is a `sentence` that
 *  uses one expression in a real situation.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['expressions-imagees'], ...extra,
});

/** An expression: its register, and the image, meaning and English in `notes`. */
const expr = (
  n: number, fr: string, en: string, ipa: string, respell: string, reg: Reg,
  image: string, tags: string[] = [],
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['expression', reg, ...tags], drills: FCVR, version: 1, register: reg,
  grammarPoints: ['expressions-imagees'], notes: `${image} EN: ${en}.`,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE LAPIN DU SAMEDI ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, "Il m'a posé un lapin.", 'He stood me up.', '/il ma po.ze œ̃ la.pɛ̃/', 'eel ma poh-zay uhⁿ la-PEHⁿ', ['scene', 'figure', 'familier'], FCVDR, { register: 'familier' }),
  sent(1201, 'Il fait un froid de canard ce matin.', 'It is freezing cold this morning.', '/il fɛ œ̃ fʁwad ka.naʁ sə ma.tɛ̃/', 'eel feh uhⁿ frwad ka-NAR suh ma-TEHⁿ', ['scene', 'figure']),
  sent(1202, "J'ai une faim de loup.", 'I am starving.', '/ʒe yn fɛ̃d lu/', 'zhay ün fehⁿd LOO', ['scene', 'figure'], FCVDR),
  sent(1203, REFRAME, REFRAME_EN, '/ɡaʁd li.maʒ tʁa.dɥi lə sɑ̃s/', 'gard lee-MAZH tra-dwee luh SAHⁿS', ['rule', 'reframe'], ['flashcard'],
    rule("Une expression imagée : qu'est-ce que tu gardes, et qu'est-ce que tu traduis ?", "Tu gardes l'image en français (un lapin, un canard). Tu traduis le sens (he stood me up, it is freezing).")),
  sent(1204, 'Le lapin mange une carotte dans le jardin.', 'The rabbit is eating a carrot in the garden.', '/lə la.pɛ̃ mɑ̃ʒ yn ka.ʁɔt dɑ̃ lə ʒaʁ.dɛ̃/', 'luh la-PEHⁿ mahⁿzh ün ka-ROT dahⁿ luh zhar-DEHⁿ', ['litteral']),
  sent(1205, 'Un canard nage sur le lac.', 'A duck is swimming on the lake.', '/œ̃ ka.naʁ naʒ syʁ lə lak/', 'uhⁿ ka-NAR nazh sür luh LAK', ['litteral']),
  sent(1206, 'Le loup cherche à manger dans la neige.', 'The wolf is looking for food in the snow.', '/lə lu ʃɛʁʃ a mɑ̃.ʒe dɑ̃ la nɛʒ/', 'luh LOO shehrsh a mahⁿ-ZHAY dahⁿ la NEHZH', ['litteral']),
  sent(1207, "Julien n'est jamais venu au rendez-vous.", 'Julien never turned up.', '/ʒy.ljɛ̃ nɛ ʒa.mɛ və.ny o ʁɑ̃.de.vu/', 'zhü-lyehⁿ neh zha-meh vuh-NÜ oh rahⁿ-day-VOO', ['sens']),
  sent(1208, 'Il fait très, très froid ce matin.', 'It is very, very cold this morning.', '/il fɛ tʁɛ tʁɛ fʁwa sə ma.tɛ̃/', 'eel feh treh treh FRWA suh ma-TEHⁿ', ['sens']),
  sent(1209, "J'ai très, très faim.", 'I am very, very hungry.', '/ʒe tʁɛ tʁɛ fɛ̃/', 'zhay treh treh FEHⁿ', ['sens']),
];

/* ── ACT 2 · LE TEMPS ET L'HEURE ─────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  expr(1210, 'un froid de canard', 'bitter cold', '/œ̃ fʁwad ka.naʁ/', 'uhⁿ frwad ka-NAR', 'courant',
    "Image : un froid bon pour les canards, qui restent dehors l'hiver. Sens : il fait très froid."),
  expr(1211, 'un temps de chien', 'foul weather', '/œ̃ tɑ̃d ʃjɛ̃/', 'uhⁿ tahⁿd SHYEHⁿ', 'courant',
    "Image : un temps qu'on ne donnerait qu'à un chien. Sens : pluie, vent, gris, tout à la fois."),
  expr(1212, 'se lever avec les poules', 'to get up at the crack of dawn', '/sə lə.ve a.vɛk le pul/', 'suh luh-VAY a-vehk lay POOL', 'courant',
    'Image : les poules se réveillent avec le soleil. Sens : se lever très tôt.'),
  expr(1213, 'se coucher avec les poules', 'to go to bed very early', '/sə ku.ʃe a.vɛk le pul/', 'suh koo-SHAY a-vehk lay POOL', 'courant',
    'Image : les poules rentrent dormir dès que le soleil se couche. Sens : se coucher très tôt.'),
  expr(1214, 'quand les poules auront des dents', 'when pigs fly', '/kɑ̃ le pul o.ʁɔ̃ de dɑ̃/', 'kahⁿ lay POOL oh-rohⁿ day DAHⁿ', 'courant',
    "Image : une poule avec des dents, ce qui n'arrivera pas. Sens : jamais."),
  expr(1215, 'avancer comme un escargot', "to move at a snail's pace", '/a.vɑ̃.se kɔ.mœ̃.nɛs.kaʁ.ɡo/', 'a-vahⁿ-SAY ko-muhⁿ-nehs-kar-GOH', 'courant',
    "Image : un escargot sur une route. Sens : très lentement. L'anglais garde la même image."),
  expr(1216, 'il pleut à boire debout', "it is raining cats and dogs", '/il plø a bwaʁ də.bu/', 'eel pleu a bwar duh-BOO', 'courant',
    "Image : assez de pluie pour boire sans se baisser. Sens : il pleut très fort. L'anglais met des chats et des chiens, le français non.", ['equivalent']),
  sent(1217, 'Mets ton manteau, il fait un froid de canard.', 'Put your coat on, it is freezing out.', '/mɛ tɔ̃ mɑ̃.to il fɛ œ̃ fʁwad ka.naʁ/', 'meh tohⁿ mahⁿ-TOH eel feh uhⁿ frwad ka-NAR', ['meteo'], FCVDR),
  sent(1218, 'Quel temps de chien, on reste à la maison.', 'What foul weather, we are staying home.', '/kɛl tɑ̃d ʃjɛ̃ ɔ̃ ʁɛst a la mɛ.zɔ̃/', 'kehl tahⁿd SHYEHⁿ ohⁿ rehst a la meh-ZOHⁿ', ['meteo']),
  sent(1219, 'Mon grand-père se lève avec les poules.', 'My grandfather gets up at the crack of dawn.', '/mɔ̃ ɡʁɑ̃.pɛʁ sə lɛv a.vɛk le pul/', 'mohⁿ grahⁿ-PEHR suh lehv a-vehk lay POOL', ['heure'], FCVDR),
  sent(1220, 'Le samedi, je me couche avec les poules.', 'On Saturdays I go to bed really early.', '/lə sam.di ʒə mə kuʃ a.vɛk le pul/', 'luh sam-DEE zhuh muh koosh a-vehk lay POOL', ['heure']),
  sent(1221, 'Il rangera sa chambre quand les poules auront des dents.', 'He will tidy his room when pigs fly.', '/il ʁɑ̃ʒ.ʁa sa ʃɑ̃bʁ kɑ̃ le pul o.ʁɔ̃ de dɑ̃/', 'eel rahⁿzh-RA sa SHAHⁿBR kahⁿ lay POOL oh-rohⁿ day DAHⁿ', ['jamais']),
  sent(1222, 'Ce matin, le bus avançait comme un escargot.', 'This morning the bus was crawling along.', '/sə ma.tɛ̃ lə bys a.vɑ̃.sɛ kɔ.mœ̃.nɛs.kaʁ.ɡo/', 'suh ma-TEHⁿ luh BÜS a-vahⁿ-SEH ko-muhⁿ-nehs-kar-GOH', ['lent']),
  sent(1223, 'Il pleut à boire debout depuis midi.', 'It has been pouring since noon.', '/il plø a bwaʁ də.bu də.pɥi mi.di/', 'eel pleu a bwar duh-BOO duh-pwee mee-DEE', ['meteo', 'equivalent'], FCVDR),
  sent(1224, 'À Québec, en janvier, il fait un froid de canard.', 'In Québec City in January it is bitterly cold.', '/a ke.bɛk ɑ̃ ʒɑ̃.vje il fɛ œ̃ fʁwad ka.naʁ/', 'a kay-BEHK ahⁿ zhahⁿ-VYAY eel feh uhⁿ frwad ka-NAR', ['meteo', 'quebec']),
  sent(1225, 'Les boulangers se lèvent avec les poules.', 'Bakers get up at the crack of dawn.', '/le bu.lɑ̃.ʒe sə lɛv a.vɛk le pul/', 'lay boo-lahⁿ-ZHAY suh lehv a-vehk lay POOL', ['heure']),
  sent(1226, 'Avec ce temps de chien, le vol est en retard.', 'With this foul weather the flight is late.', '/a.vɛk sə tɑ̃d ʃjɛ̃ lə vɔl ɛ.tɑ̃ ʁə.taʁ/', 'a-vehk suh tahⁿd SHYEHⁿ luh VOL eh-tahⁿ ruh-TAR', ['meteo']),
  sent(1227, "Il arrivera à l'heure quand les poules auront des dents.", 'He will be on time when pigs fly.', '/il a.ʁi.vʁa a lœʁ kɑ̃ le pul o.ʁɔ̃ de dɑ̃/', 'eel a-ree-VRA a LUHR kahⁿ lay POOL oh-rohⁿ day DAHⁿ', ['jamais']),
];

/* ── ACT 3 · ATTENDRE, ET NE PAS VENIR ──────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  expr(1228, 'poser un lapin', 'to stand someone up', '/po.ze œ̃ la.pɛ̃/', 'poh-ZAY uhⁿ la-PEHⁿ', 'familier',
    "Image : on laisse un lapin à sa place, sur la chaise vide. Sens : ne pas venir à un rendez-vous, sans prévenir."),
  expr(1229, 'poireauter', 'to hang around waiting', '/pwa.ʁo.te/', 'pwa-roh-TAY', 'familier',
    "Image : planté sur place comme un poireau dans la terre. Sens : attendre longtemps, pour rien. Surtout en France.", ['france']),
  expr(1230, "il n'y a pas un chat", 'there is not a soul', '/il nja pa œ̃ ʃa/', 'eel nya pa uhⁿ SHA', 'familier',
    "Image : même pas un chat dans la rue. Sens : il n'y a personne."),
  expr(1231, 'serrés comme des sardines', 'packed like sardines', '/se.ʁe kɔm de saʁ.din/', 'say-RAY kom day sar-DEEN', 'courant',
    "Image : des sardines dans une boîte. Sens : beaucoup trop de monde dans un petit espace. L'anglais garde la même image."),
  sent(1232, "Julien m'a posé un lapin hier soir.", 'Julien stood me up last night.', '/ʒy.ljɛ̃ ma po.ze œ̃ la.pɛ̃ jɛʁ swaʁ/', 'zhü-lyehⁿ ma poh-zay uhⁿ la-PEHⁿ yehr SWAR', ['lapin'], FCVDR),
  sent(1233, "J'ai poireauté une heure devant le cinéma.", 'I hung around for an hour outside the cinema.', '/ʒe pwa.ʁo.te y.nœʁ də.vɑ̃ lə si.ne.ma/', 'zhay pwa-roh-TAY ü-NUHR duh-vahⁿ luh see-nay-MA', ['attendre'], FCVDR),
  sent(1234, "Dimanche matin, il n'y a pas un chat dans la rue.", 'On Sunday morning there is not a soul in the street.', '/di.mɑ̃ʃ ma.tɛ̃ il nja pa œ̃ ʃa dɑ̃ la ʁy/', 'dee-mahⁿsh ma-TEHⁿ eel nya pa uhⁿ SHA dahⁿ la RÜ', ['personne']),
  sent(1235, 'Dans le métro, on était serrés comme des sardines.', 'On the metro we were packed like sardines.', '/dɑ̃ lə me.tʁo ɔ̃.ne.tɛ se.ʁe kɔm de saʁ.din/', 'dahⁿ luh may-TROH ohⁿ-nay-teh say-RAY kom day sar-DEEN', ['foule'], FCVDR),
  sent(1236, 'Ne me pose pas de lapin cette fois.', 'Do not stand me up this time.', '/nə mə poz pad la.pɛ̃ sɛt fwa/', 'nuh muh POHZ pad la-PEHⁿ seht FWA', ['lapin']),
  sent(1237, 'Je déteste poireauter sous la pluie.', 'I hate hanging around in the rain.', '/ʒə de.tɛst pwa.ʁo.te su la plɥi/', 'zhuh day-TEHST pwa-roh-TAY soo la PLWEE', ['attendre']),
  sent(1238, "À minuit, il n'y avait pas un chat au parc.", 'At midnight there was not a soul in the park.', '/a mi.nɥi il nja.vɛ pa œ̃ ʃa o paʁk/', 'a mee-NWEE eel nya-veh pa uhⁿ SHA oh PARK', ['personne']),
  sent(1239, "On était serrés comme des sardines dans l'ascenseur.", 'We were packed like sardines in the lift.', '/ɔ̃.ne.tɛ se.ʁe kɔm de saʁ.din dɑ̃ la.sɑ̃.sœʁ/', 'ohⁿ-nay-teh say-RAY kom day sar-DEEN dahⁿ la-sahⁿ-SUHR', ['foule']),
  sent(1240, "Elle s'est fait poser un lapin.", 'She got stood up.', '/ɛl sɛ fɛ po.ze œ̃ la.pɛ̃/', 'ehl seh feh poh-zay uhⁿ la-PEHⁿ', ['lapin'], FCVDR),
  sent(1241, "Il ne m'a pas posé de lapin, il était malade.", 'He did not stand me up, he was ill.', '/il nə ma pa po.ze d la.pɛ̃ i.le.tɛ ma.lad/', 'eel nuh ma pa poh-zayd la-PEHⁿ ee-lay-teh ma-LAD', ['lapin']),
];

/* ── ACT 4 · LA PEUR ET LE COURAGE ──────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  expr(1242, 'être une poule mouillée', 'to be a scaredy-cat', '/ɛ.tʁyn pul mu.je/', 'eh-trün POOL moo-YAY', 'familier',
    "Image : une poule trempée, qui tremble dans un coin. Sens : avoir peur de tout. L'anglais dit chicken, pas poulet."),
  expr(1243, 'se jeter dans la gueule du loup', "to walk into the lion's den", '/sə ʒə.te dɑ̃ la ɡœl dy lu/', 'suh zhuh-TAY dahⁿ la GUHL dü LOO', 'courant',
    "Image : sauter dans la bouche ouverte du loup. Sens : aller tout seul vers le danger. L'anglais met un lion."),
  expr(1244, 'prendre le taureau par les cornes', 'to take the bull by the horns', '/pʁɑ̃dʁ lə to.ʁo paʁ le kɔʁn/', 'prahⁿdr luh toh-ROH par lay KORN', 'courant',
    "Image : attraper le taureau par devant. Sens : attaquer un problème de face. L'anglais garde la même image."),
  expr(1245, 'se battre comme un lion', 'to fight like a lion', '/sə batʁ kɔ.mœ̃ ljɔ̃/', 'suh BATR ko-muhⁿ LYOHⁿ', 'courant',
    "Image : un lion qui défend les siens. Sens : se battre avec beaucoup de courage."),
  expr(1246, "avoir des papillons dans l'estomac", 'to have butterflies in your stomach', '/a.vwaʁ de pa.pi.jɔ̃ dɑ̃ lɛs.tɔ.ma/', 'a-vwar day pa-pee-YOHⁿ dahⁿ lehs-to-MA', 'courant',
    "Image : des papillons qui volent dans le ventre. Sens : être nerveux, ou amoureux. La forme du Québec.", ['quebec']),
  expr(1247, 'avoir des papillons dans le ventre', 'to have butterflies in your stomach', '/a.vwaʁ de pa.pi.jɔ̃ dɑ̃ lə vɑ̃tʁ/', 'a-vwar day pa-pee-YOHⁿ dahⁿ luh VAHⁿTR', 'courant',
    "Image : la même. Sens : le même. La forme de France et de Belgique.", ['france', 'variante']),
  sent(1248, "Mon frère a peur du noir, c'est une poule mouillée.", 'My brother is afraid of the dark, he is a scaredy-cat.', '/mɔ̃ fʁɛʁ a pœʁ dy nwaʁ sɛ.tyn pul mu.je/', 'mohⁿ FREHR a puhr dü NWAR seh-tün POOL moo-YAY', ['peur'], FCVDR),
  sent(1249, 'Ne fais pas ta poule mouillée, viens nager.', 'Do not be a chicken, come swimming.', '/nə fɛ pa ta pul mu.je vjɛ̃ na.ʒe/', 'nuh feh pa ta POOL moo-YAY vyehⁿ na-ZHAY', ['peur']),
  sent(1250, "Voir le patron maintenant, c'est se jeter dans la gueule du loup.", "Seeing the boss now is walking into the lion's den.", '/vwaʁ lə pa.tʁɔ̃ mɛ̃t.nɑ̃ sɛ sə ʒə.te dɑ̃ la ɡœl dy lu/', 'vwar luh pa-TROHⁿ mehⁿt-NAHⁿ seh suh zhuh-TAY dahⁿ la GUHL dü LOO', ['danger']),
  sent(1251, 'Elle a pris le taureau par les cornes et elle a appelé.', 'She took the bull by the horns and phoned.', '/ɛ.la pʁi lə to.ʁo paʁ le kɔʁn e ɛ.la a.pə.le/', 'eh-la pree luh toh-ROH par lay KORN ay eh-la a-puh-LAY', ['courage'], FCVDR),
  sent(1252, "Il s'est battu comme un lion pour garder son emploi.", 'He fought like a lion to keep his job.', '/il sɛ ba.ty kɔ.mœ̃ ljɔ̃ puʁ ɡaʁ.de sɔ̃.nɑ̃.plwa/', 'eel seh ba-TÜ ko-muhⁿ LYOHⁿ poor gar-DAY sohⁿ-nahⁿ-PLWA', ['courage']),
  sent(1253, "Avant mon entrevue, j'avais des papillons dans l'estomac.", 'Before my interview I had butterflies in my stomach.', '/a.vɑ̃ mɔ̃.nɑ̃.tʁə.vy ʒa.vɛ de pa.pi.jɔ̃ dɑ̃ lɛs.tɔ.ma/', 'a-vahⁿ mohⁿ-nahⁿ-truh-VÜ zha-veh day pa-pee-YOHⁿ dahⁿ lehs-to-MA', ['nerfs', 'quebec'], FCVDR),
  sent(1254, "Avant l'examen, j'ai des papillons dans le ventre.", 'Before the exam I have butterflies in my stomach.', '/a.vɑ̃ lɛɡ.za.mɛ̃ ʒe de pa.pi.jɔ̃ dɑ̃ lə vɑ̃tʁ/', 'a-vahⁿ lehg-za-MEHⁿ zhay day pa-pee-YOHⁿ dahⁿ luh VAHⁿTR', ['nerfs', 'france']),
  sent(1255, 'Il faut prendre le taureau par les cornes.', 'You have to take the bull by the horns.', '/il fo pʁɑ̃dʁ lə to.ʁo paʁ le kɔʁn/', 'eel foh prahⁿdr luh toh-ROH par lay KORN', ['courage']),
  sent(1256, 'Tu vas te jeter dans la gueule du loup.', "You are going to walk into the lion's den.", '/ty va tʒə.te dɑ̃ la ɡœl dy lu/', 'tü vat zhuh-TAY dahⁿ la GUHL dü LOO', ['danger']),
  sent(1257, 'Pour sa fille, elle se bat comme une lionne.', 'For her daughter she fights like a lioness.', '/puʁ sa fij ɛl sə ba kɔm yn ljɔn/', 'poor sa FEEY ehl suh BA kom ün LYON', ['courage']),
  // Paul, gate 3 (2026-09-26): the border case with b1.27 joins act 4 here.
  expr(1375, 'avoir la chair de poule', 'to have goosebumps', '/a.vwaʁ la ʃɛʁ də pul/', 'a-vwar la SHEHR duh POOL', 'courant',
    "Image : la peau d'une poule plumée, couverte de petits points. Sens : avoir des frissons, de froid ou d'émotion. L'anglais met une oie : goosebumps."),
];

/* ── ACT 5 · LA FAIM ET L'HUMEUR ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  expr(1258, 'avoir une faim de loup', 'to be starving', '/a.vwaʁ yn fɛ̃d lu/', 'a-vwar ün fehⁿd LOO', 'courant',
    "Image : la faim d'un loup en hiver. Sens : avoir très faim. L'anglais dit I could eat a horse."),
  expr(1259, 'manger comme un oiseau', 'to eat like a bird', '/mɑ̃.ʒe kɔ.mœ̃.nwa.zo/', 'mahⁿ-ZHAY ko-muhⁿ-nwa-ZOH', 'courant',
    "Image : un oiseau qui picore une miette. Sens : manger très peu. L'anglais garde la même image."),
  expr(1260, 'avoir la pêche', 'to be full of beans', '/a.vwaʁ la pɛʃ/', 'a-vwar la PEHSH', 'familier',
    "Image : une pêche ronde et bien mûre. Sens : être en pleine forme, plein d'énergie."),
  expr(1261, 'avoir la frite', 'to be on top form', '/a.vwaʁ la fʁit/', 'a-vwar la FREET', 'familier',
    "Image : une frite bien droite. Sens : le même que la pêche. Surtout en France et en Belgique.", ['france']),
  expr(1262, 'ne pas être dans son assiette', 'to feel out of sorts', '/nə pa.zɛtʁ dɑ̃ sɔ̃.na.sjɛt/', 'nuh pa-zehtr dahⁿ sohⁿ-na-SYEHT', 'courant',
    "Image : sorti de son assiette, pas à sa place. Sens : ne pas se sentir bien, un peu malade ou triste."),
  expr(1263, 'avoir le cafard', 'to feel down', '/a.vwaʁ lə ka.faʁ/', 'a-vwar luh ka-FAR', 'familier',
    "Image : un cafard, une petite bête noire. Sens : être triste, sans énergie. L'anglais parle aussi de blues."),
  sent(1264, "Après le ski, j'avais une faim de loup.", 'After skiing I was starving.', '/a.pʁɛ lə ski ʒa.vɛ yn fɛ̃d lu/', 'a-preh luh SKEE zha-veh ün fehⁿd LOO', ['faim'], FCVDR),
  sent(1265, 'Ma sœur mange comme un oiseau.', 'My sister eats like a bird.', '/ma sœʁ mɑ̃ʒ kɔ.mœ̃.nwa.zo/', 'ma SUHR mahⁿzh ko-muhⁿ-nwa-ZOH', ['faim']),
  sent(1266, "Ce matin, j'ai la pêche.", 'This morning I am full of beans.', '/sə ma.tɛ̃ ʒe la pɛʃ/', 'suh ma-TEHⁿ zhay la PEHSH', ['humeur'], FCVDR),
  sent(1267, "Tu as la frite aujourd'hui.", 'You are on top form today.', '/ty a la fʁit o.ʒuʁ.dɥi/', 'tü a la FREET oh-zhoor-DWEE', ['humeur', 'france']),
  sent(1268, 'Je ne suis pas dans mon assiette depuis hier.', 'I have been feeling off since yesterday.', '/ʒə nə sɥi pa dɑ̃ mɔ̃.na.sjɛt də.pɥi jɛʁ/', 'zhuh nuh swee pa dahⁿ mohⁿ-na-SYEHT duh-pwee YEHR', ['humeur'], FCVDR),
  sent(1269, "Depuis son départ, j'ai le cafard.", 'Since she left I have been feeling low.', '/də.pɥi sɔ̃ de.paʁ ʒe lə ka.faʁ/', 'duh-pwee sohⁿ day-PAR zhay luh ka-FAR', ['humeur']),
  sent(1270, "Il n'est pas dans son assiette, il a mal dormi.", 'He is not himself, he slept badly.', '/il nɛ pa dɑ̃ sɔ̃.na.sjɛt i.la mal dɔʁ.mi/', 'eel neh pa dahⁿ sohⁿ-na-SYEHT ee-la mal dor-MEE', ['humeur']),
  sent(1271, 'En novembre, beaucoup de gens ont le cafard.', 'In November a lot of people feel down.', '/ɑ̃ nɔ.vɑ̃bʁ bo.kud ʒɑ̃ ɔ̃ lə ka.faʁ/', 'ahⁿ no-VAHⁿBR boh-kood ZHAHⁿ ohⁿ luh ka-FAR', ['humeur']),
  sent(1272, "Les enfants ont une faim de loup après l'école.", 'The children are starving after school.', '/le.zɑ̃.fɑ̃ ɔ̃.tyn fɛ̃d lu a.pʁɛ le.kɔl/', 'lay-zahⁿ-FAHⁿ ohⁿ-tün fehⁿd LOO a-preh lay-KOL', ['faim']),
  sent(1273, "J'ai bien dormi, j'ai la pêche.", 'I slept well, I am raring to go.', '/ʒe bjɛ̃ dɔʁ.mi ʒe la pɛʃ/', 'zhay byehⁿ dor-MEE zhay la PEHSH', ['humeur']),
];

/* ── ACT 6 · LA SANTÉ ───────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  expr(1274, 'avoir un chat dans la gorge', 'to have a frog in your throat', '/a.vwaʁ œ̃ ʃa dɑ̃ la ɡɔʁʒ/', 'a-vwar uhⁿ SHA dahⁿ la GORZH', 'courant',
    "Image : un chat coincé dans la gorge. Sens : avoir la voix enrouée. L'anglais met une grenouille, jamais un chat."),
  expr(1275, 'tomber dans les pommes', 'to faint', '/tɔ̃.be dɑ̃ le pɔm/', 'tohⁿ-BAY dahⁿ lay POM', 'familier',
    "Image : tomber dans un tas de pommes. Sens : perdre connaissance, s'évanouir."),
  expr(1276, 'être malade comme un chien', 'to be sick as a dog', '/ɛtʁ ma.lad kɔ.mœ̃ ʃjɛ̃/', 'ehtr ma-LAD ko-muhⁿ SHYEHⁿ', 'familier',
    "Image : un chien malade. Sens : être très malade. L'anglais garde la même image."),
  expr(1277, 'avoir une fièvre de cheval', 'to have a raging fever', '/a.vwaʁ yn fjɛvʁ də ʃə.val/', 'a-vwar ün FYEHVR duh shuh-VAL', 'courant',
    "Image : une fièvre assez forte pour un cheval. Sens : une très forte fièvre."),
  expr(1278, 'dormir comme un loir', 'to sleep like a log', '/dɔʁ.miʁ kɔ.mœ̃ lwaʁ/', 'dor-MEER ko-muhⁿ LWAR', 'courant',
    "Image : le loir, un petit animal qui dort tout l'hiver. Sens : dormir très bien, très longtemps. L'anglais met une bûche."),
  sent(1279, "Excusez-moi, j'ai un chat dans la gorge.", 'Sorry, I have a frog in my throat.', '/ɛks.ky.ze mwa ʒe œ̃ ʃa dɑ̃ la ɡɔʁʒ/', 'ehks-kü-zay MWA zhay uhⁿ SHA dahⁿ la GORZH', ['voix'], FCVDR),
  sent(1280, "Il faisait si chaud qu'elle est tombée dans les pommes.", 'It was so hot that she fainted.', '/il fə.zɛ si ʃo kɛ.lɛ tɔ̃.be dɑ̃ le pɔm/', 'eel fuh-zeh see SHOH keh-leh tohⁿ-BAY dahⁿ lay POM', ['malaise'], FCVDR),
  sent(1281, "J'ai mangé des huîtres et j'ai été malade comme un chien.", 'I ate oysters and was sick as a dog.', '/ʒe mɑ̃.ʒe de.zɥitʁ e ʒe e.te ma.lad kɔ.mœ̃ ʃjɛ̃/', 'zhay mahⁿ-zhay day-ZWEETR ay zhay ay-tay ma-LAD ko-muhⁿ SHYEHⁿ', ['malade']),
  sent(1282, 'Le petit a une fièvre de cheval.', 'The little one has a raging fever.', '/lə pə.ti a yn fjɛvʁ də ʃə.val/', 'luh puh-TEE a ün FYEHVR duh shuh-VAL', ['fievre'], FCVDR),
  sent(1283, "Après la randonnée, j'ai dormi comme un loir.", 'After the hike I slept like a log.', '/a.pʁɛ la ʁɑ̃.dɔ.ne ʒe dɔʁ.mi kɔ.mœ̃ lwaʁ/', 'a-preh la rahⁿ-do-NAY zhay dor-MEE ko-muhⁿ LWAR', ['sommeil']),
  sent(1284, 'Le chanteur avait un chat dans la gorge.', 'The singer had a frog in his throat.', '/lə ʃɑ̃.tœʁ a.vɛ œ̃ ʃa dɑ̃ la ɡɔʁʒ/', 'luh shahⁿ-TUHR a-veh uhⁿ SHA dahⁿ la GORZH', ['voix']),
  sent(1285, 'Assieds-toi, tu vas tomber dans les pommes.', 'Sit down, you are going to faint.', '/a.sje twa ty va tɔ̃.be dɑ̃ le pɔm/', 'a-syay TWA tü va tohⁿ-BAY dahⁿ lay POM', ['malaise']),
  sent(1286, 'Avec cette grippe, je suis malade comme un chien.', 'With this flu I am sick as a dog.', '/a.vɛk sɛt ɡʁip ʒə sɥi ma.lad kɔ.mœ̃ ʃjɛ̃/', 'a-vehk seht GREEP zhuh swee ma-LAD ko-muhⁿ SHYEHⁿ', ['malade']),
  sent(1287, 'Les enfants dorment comme des loirs.', 'The children are sleeping like logs.', '/le.zɑ̃.fɑ̃ dɔʁm kɔm de lwaʁ/', 'lay-zahⁿ-FAHⁿ DORM kom day LWAR', ['sommeil']),
  sent(1288, 'Il a une fièvre de cheval, appelle le médecin.', 'He has a raging fever, call the doctor.', '/i.la yn fjɛvʁ də ʃə.val a.pɛl lə med.sɛ̃/', 'ee-la ün FYEHVR duh shuh-VAL a-pehl luh mehd-SEHⁿ', ['fievre']),
];

/* ── ACT 7 · LES SALADES ET LES SECRETS ─────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  expr(1289, 'raconter des salades', 'to tell tall stories', '/ʁa.kɔ̃.te de sa.lad/', 'ra-kohⁿ-TAY day sa-LAD', 'familier',
    "Image : une salade, tout mélangé. Sens : dire des mensonges, des histoires inventées."),
  expr(1290, 'il y a anguille sous roche', 'something fishy is going on', '/i.lja ɑ̃.ɡij su ʁɔʃ/', 'ee-lya ahⁿ-GEEY soo ROSH', 'courant',
    "Image : une anguille cachée sous une pierre. Sens : on nous cache quelque chose. L'anglais dit fishy, sans anguille."),
  expr(1291, 'noyer le poisson', 'to cloud the issue', '/nwa.je lə pwa.sɔ̃/', 'nwa-YAY luh pwa-SOHⁿ', 'courant',
    "Image : noyer un poisson, ce qui est impossible. Sens : parler d'autre chose pour ne pas répondre."),
  expr(1292, "faire l'autruche", 'to bury your head in the sand', '/fɛʁ lo.tʁyʃ/', 'fehr loh-TRÜSH', 'courant',
    "Image : l'autruche qui cache sa tête dans le sable. Sens : refuser de voir un problème. L'anglais décrit le geste, sans nommer l'oiseau."),
  expr(1293, 'donner sa langue au chat', 'to give up guessing', '/dɔ.ne sa lɑ̃ɡ o ʃa/', 'do-NAY sa LAHⁿG oh SHA', 'courant',
    "Image : donner sa langue au chat, qui garde le secret. Sens : arrêter de chercher, et demander la réponse. Pas d'image en anglais."),
  expr(1294, 'en faire tout un fromage', 'to make a big fuss about it', '/ɑ̃ fɛʁ tu.tœ̃ fʁɔ.maʒ/', 'ahⁿ fehr too-tuhⁿ fro-MAZH', 'familier',
    "Image : faire tout un fromage avec un peu de lait. Sens : exagérer un petit problème."),
  sent(1295, 'Arrête de me raconter des salades.', 'Stop telling me tall stories.', '/a.ʁɛt də mə ʁa.kɔ̃.te de sa.lad/', 'a-reht duh muh ra-kohⁿ-TAY day sa-LAD', ['mensonge'], FCVDR),
  sent(1296, 'Ils chuchotent depuis ce matin, il y a anguille sous roche.', 'They have been whispering since this morning, something is up.', '/il ʃy.ʃɔt də.pɥi sə ma.tɛ̃ i.lja ɑ̃.ɡij su ʁɔʃ/', 'eel shü-SHOT duh-pwee suh ma-TEHⁿ ee-lya ahⁿ-GEEY soo ROSH', ['secret']),
  sent(1297, 'Le ministre a noyé le poisson.', 'The minister dodged the question.', '/lə mi.nistʁ a nwa.je lə pwa.sɔ̃/', 'luh mee-NEESTR a nwa-yay luh pwa-SOHⁿ', ['esquive'], FCVDR),
  sent(1298, "Tu ne peux pas faire l'autruche toute ta vie.", 'You cannot bury your head in the sand all your life.', '/ty nə pø pa fɛʁ lo.tʁyʃ tut ta vi/', 'tü nuh peu pa fehr loh-TRÜSH toot ta VEE', ['esquive']),
  sent(1299, 'Je ne sais pas, je donne ma langue au chat.', 'I do not know, I give up.', '/ʒə nə sɛ pa ʒə dɔn ma lɑ̃ɡ o ʃa/', 'zhuh nuh seh PA zhuh don ma LAHⁿG oh SHA', ['devinette'], FCVDR),
  sent(1300, "Ce n'est qu'une tache, n'en fais pas tout un fromage.", 'It is only a stain, do not make a fuss about it.', '/sə nɛ kyn taʃ nɑ̃ fɛ pa tu.tœ̃ fʁɔ.maʒ/', 'suh neh kün TASH nahⁿ feh pa too-tuhⁿ fro-MAZH', ['exagerer']),
  sent(1301, 'Il raconte des salades à tout le monde.', 'He tells tall stories to everybody.', '/il ʁa.kɔ̃t de sa.lad a tu lə mɔ̃d/', 'eel ra-KOHⁿT day sa-LAD a too luh MOHⁿD', ['mensonge']),
  sent(1302, 'Quand je pose la question, elle noie le poisson.', 'When I ask the question, she changes the subject.', '/kɑ̃ ʒə poz la kɛs.tjɔ̃ ɛl nwa lə pwa.sɔ̃/', 'kahⁿ zhuh pohz la kehs-TYOHⁿ ehl nwa luh pwa-SOHⁿ', ['esquive']),
  sent(1303, 'Tu donnes ta langue au chat ?', 'Do you give up?', '/ty dɔn ta lɑ̃ɡ o ʃa/', 'tü don ta LAHⁿG oh SHA', ['devinette']),
  sent(1304, "Il a fait l'autruche et la facture a doublé.", 'He buried his head in the sand and the bill doubled.', '/i.la fɛ lo.tʁyʃ e la fak.tyʁ a du.ble/', 'ee-la feh loh-TRÜSH ay la fak-TÜR a doo-BLAY', ['esquive']),
];

/* ── ACT 8 · FACILE OU PAS ──────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  expr(1305, "c'est du gâteau", 'it is a piece of cake', '/sɛ dy ɡɑ.to/', 'seh dü ga-TOH', 'familier',
    "Image : un gâteau, facile et agréable à manger. Sens : c'est très facile. L'anglais dit a piece of cake, jamais un morceau."),
  expr(1306, "ce n'est pas de la tarte", 'it is no picnic', '/sə nɛ pad la taʁt/', 'suh neh pad la TART', 'familier',
    "Image : ce n'est pas une tarte, douce et facile. Sens : c'est difficile. À l'oral : c'est pas de la tarte."),
  expr(1307, 'avoir du pain sur la planche', 'to have a lot on your plate', '/a.vwaʁ dy pɛ̃ syʁ la plɑ̃ʃ/', 'a-vwar dü PEHⁿ sür la PLAHⁿSH', 'courant',
    "Image : du pain qui attend sur la planche du boulanger. Sens : avoir beaucoup de travail devant soi."),
  expr(1308, 'marcher sur des œufs', 'to walk on eggshells', '/maʁ.ʃe syʁ de.zø/', 'mar-SHAY sür day-ZEU', 'courant',
    "Image : marcher sur des œufs sans les casser. Sens : faire très attention à ce qu'on dit. L'anglais garde les coquilles."),
  expr(1309, 'ça ne mange pas de pain', 'there is no harm in trying', '/sa nə mɑ̃ʒ pad pɛ̃/', 'sa nuh mahⁿzh pad PEHⁿ', 'familier',
    "Image : ça ne coûte même pas un morceau de pain. Sens : ça ne coûte rien d'essayer."),
  expr(1310, 'courir comme une poule pas de tête', 'to run around like a headless chicken', '/ku.ʁiʁ kɔm yn pul pad tɛt/', 'koo-REER kom ün POOL pad TEHT', 'familier',
    "Image : une poule qui court partout sans tête. Sens : courir dans tous les sens, sans organisation. La forme du Québec.", ['quebec']),
  expr(1311, 'courir comme un poulet sans tête', 'to run around like a headless chicken', '/ku.ʁiʁ kɔ.mœ̃ pu.lɛ sɑ̃ tɛt/', 'koo-REER ko-muhⁿ poo-LEH sahⁿ TEHT', 'familier',
    "Image : la même. Sens : le même. La forme de France.", ['france', 'variante']),
  sent(1312, "L'examen de conduite, c'est du gâteau.", 'The driving test is a piece of cake.', '/lɛɡ.za.mɛ̃ də kɔ̃.dɥit sɛ dy ɡɑ.to/', 'lehg-za-MEHⁿ duh kohⁿ-DWEET seh dü ga-TOH', ['facile'], FCVDR),
  sent(1313, "Trouver un appartement à Montréal, ce n'est pas de la tarte.", 'Finding a flat in Montréal is no picnic.', '/tʁu.ve œ̃.na.paʁ.tə.mɑ̃ a mɔ̃.ʁe.al sə nɛ pad la taʁt/', 'troo-VAY uhⁿ-na-par-tuh-MAHⁿ a mohⁿ-ray-AL suh neh pad la TART', ['difficile', 'quebec']),
  sent(1314, "Cette semaine, j'ai du pain sur la planche.", 'This week I have a lot on my plate.', '/sɛt sə.mɛn ʒe dy pɛ̃ syʁ la plɑ̃ʃ/', 'seht suh-MEN zhay dü PEHⁿ sür la PLAHⁿSH', ['travail'], FCVDR),
  sent(1315, 'Avec mon beau-père, je marche sur des œufs.', 'With my stepfather I walk on eggshells.', '/a.vɛk mɔ̃ bo.pɛʁ ʒə maʁʃ syʁ de.zø/', 'a-vehk mohⁿ boh-PEHR zhuh marsh sür day-ZEU', ['prudence'], FCVDR),
  sent(1316, 'Demande-lui, ça ne mange pas de pain.', 'Ask him, there is no harm in asking.', '/də.mɑ̃d lɥi sa nə mɑ̃ʒ pad pɛ̃/', 'duh-mahⁿd LWEE sa nuh mahⁿzh pad PEHⁿ', ['essayer']),
  sent(1317, 'Le lundi, je cours comme une poule pas de tête.', 'On Mondays I run around like a headless chicken.', '/lə lœ̃.di ʒə kuʁ kɔm yn pul pad tɛt/', 'luh luhⁿ-DEE zhuh KOOR kom ün POOL pad TEHT', ['desordre', 'quebec']),
  sent(1318, 'Pour toi, ce sera du gâteau.', 'For you it will be a piece of cake.', '/puʁ twa sə sə.ʁa dy ɡɑ.to/', 'poor TWA suh suh-ra dü ga-TOH', ['facile']),
  sent(1319, 'On a du pain sur la planche avant le déménagement.', 'We have a lot to do before the move.', '/ɔ̃.na dy pɛ̃ syʁ la plɑ̃ʃ a.vɑ̃ lə de.me.naʒ.mɑ̃/', 'ohⁿ-na dü PEHⁿ sür la PLAHⁿSH a-vahⁿ luh day-may-nazh-MAHⁿ', ['travail']),
  sent(1320, 'Depuis leur dispute, tout le monde marche sur des œufs.', 'Since their argument everybody walks on eggshells.', '/də.pɥi lœʁ dis.pyt tu lə mɔ̃d maʁʃ syʁ de.zø/', 'duh-pwee luhr dees-PÜT too luh MOHⁿD marsh sür day-ZEU', ['prudence']),
  sent(1321, 'Essaie, ça ne mange pas de pain.', 'Try, it costs nothing.', '/e.sɛ sa nə mɑ̃ʒ pad pɛ̃/', 'ay-SEH sa nuh mahⁿzh pad PEHⁿ', ['essayer'], FCVDR),
];

/* ── ACT 9 · LES PORTRAITS EN « COMME » ─────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  expr(1322, 'têtu comme une mule', 'stubborn as a mule', '/te.ty kɔm yn myl/', 'tay-TÜ kom ün MÜL', 'courant',
    "Image : une mule qui refuse d'avancer. Sens : très têtu. L'anglais garde la même image.", ['comme']),
  expr(1323, 'malin comme un singe', 'sharp as a tack', '/ma.lɛ̃ kɔ.mœ̃ sɛ̃ʒ/', 'ma-LEHⁿ ko-muhⁿ SEHⁿZH', 'familier',
    "Image : un singe qui trouve toujours une astuce. Sens : très malin, débrouillard. Au féminin : maligne.", ['comme']),
  expr(1324, 'myope comme une taupe', 'blind as a bat', '/mjɔp kɔm yn top/', 'MYOP kom ün TOHP', 'familier',
    "Image : la taupe, qui vit sous la terre et voit mal. Sens : voir très mal. L'anglais met une chauve-souris.", ['comme']),
  expr(1325, 'haut comme trois pommes', 'knee-high to a grasshopper', '/o kɔm tʁwa pɔm/', 'oh kom trwa POM', 'familier',
    "Image : trois pommes l'une sur l'autre. Sens : tout petit, pour un enfant. L'anglais met une sauterelle.", ['comme']),
  expr(1326, 'bavard comme une pie', 'a real chatterbox', '/ba.vaʁ kɔm yn pi/', 'ba-VAR kom ün PEE', 'courant',
    "Image : la pie, un oiseau qui crie sans arrêt. Sens : qui parle tout le temps.", ['comme']),
  expr(1327, 'fort comme un bœuf', 'strong as an ox', '/fɔʁ kɔ.mœ̃ bœf/', 'FOR ko-muhⁿ BUHF', 'courant',
    "Image : un bœuf qui tire une charrette. Sens : très fort. L'anglais garde la même image.", ['comme']),
  expr(1328, 'doux comme un agneau', 'gentle as a lamb', '/du kɔ.mœ̃.na.ɲo/', 'doo ko-muhⁿ-na-NYOH', 'courant',
    "Image : un petit agneau. Sens : très doux, jamais méchant. L'anglais garde la même image.", ['comme']),
  expr(1329, 'rusé comme un renard', 'sly as a fox', '/ʁy.ze kɔ.mœ̃ ʁə.naʁ/', 'rü-ZAY ko-muhⁿ ruh-NAR', 'courant',
    "Image : le renard des contes, qui trompe tout le monde. Sens : très rusé. L'anglais garde la même image.", ['comme']),
  sent(1330, 'Mon père est têtu comme une mule.', 'My father is as stubborn as a mule.', '/mɔ̃ pɛʁ ɛ te.ty kɔm yn myl/', 'mohⁿ PEHR eh tay-TÜ kom ün MÜL', ['portrait'], FCVDR),
  sent(1331, 'Ta nièce est maligne comme un singe.', 'Your niece is sharp as a tack.', '/ta njɛs ɛ ma.liɲ kɔ.mœ̃ sɛ̃ʒ/', 'ta NYEHS eh ma-LEEÑ ko-muhⁿ SEHⁿZH', ['portrait', 'accord']),
  sent(1332, 'Sans lunettes, je suis myope comme une taupe.', 'Without my glasses I am blind as a bat.', '/sɑ̃ ly.nɛt ʒə sɥi mjɔp kɔm yn top/', 'sahⁿ lü-NEHT zhuh swee MYOP kom ün TOHP', ['portrait'], FCVDR),
  sent(1333, 'Je te connais depuis que tu es haut comme trois pommes.', 'I have known you since you were knee-high.', '/ʒə tə kɔ.nɛ də.pɥi kə ty ɛ o kɔm tʁwa pɔm/', 'zhuh tuh ko-NEH duh-pwee kuh tü eh oh kom trwa POM', ['portrait']),
  sent(1334, 'Ma voisine est bavarde comme une pie.', 'My neighbour is a real chatterbox.', '/ma vwa.zin ɛ ba.vaʁd kɔm yn pi/', 'ma vwa-ZEEN eh ba-VARD kom ün PEE', ['portrait', 'accord'], FCVDR),
  sent(1335, 'Il porte le frigo seul, il est fort comme un bœuf.', 'He carries the fridge on his own, he is strong as an ox.', '/il pɔʁt lə fʁi.ɡo sœl i.lɛ fɔʁ kɔ.mœ̃ bœf/', 'eel port luh free-GOH SUHL ee-leh FOR ko-muhⁿ BUHF', ['portrait']),
  sent(1336, 'Leur chien est doux comme un agneau.', 'Their dog is as gentle as a lamb.', '/lœʁ ʃjɛ̃ ɛ du kɔ.mœ̃.na.ɲo/', 'luhr SHYEHⁿ eh doo ko-muhⁿ-na-NYOH', ['portrait']),
  sent(1337, 'Attention, le vendeur est rusé comme un renard.', 'Careful, the salesman is sly as a fox.', '/a.tɑ̃.sjɔ̃ lə vɑ̃.dœʁ ɛ ʁy.ze kɔ.mœ̃ ʁə.naʁ/', 'a-tahⁿ-SYOHⁿ luh vahⁿ-DUHR eh rü-ZAY ko-muhⁿ ruh-NAR', ['portrait']),
  sent(1338, 'Ma grand-mère est têtue comme une mule.', 'My grandmother is as stubborn as a mule.', '/ma ɡʁɑ̃.mɛʁ ɛ te.ty kɔm yn myl/', 'ma grahⁿ-MEHR eh tay-TÜ kom ün MÜL', ['portrait', 'accord']),
  sent(1339, 'Leur fils est haut comme trois pommes.', 'Their son is knee-high to a grasshopper.', '/lœʁ fis ɛ o kɔm tʁwa pɔm/', 'luhr FEES eh oh kom trwa POM', ['portrait']),
];

/* ── ACT 10 · LES AUTRES, ET REVENIR AU SUJET ───────────────────────────── */

export const ACT10_ROWS: Row[] = [
  expr(1340, 'occupe-toi de tes oignons', 'mind your own business', '/ɔ.kyp twa də te.zɔ.ɲɔ̃/', 'o-küp twa duh tay-zo-NYOHⁿ', 'familier',
    "Image : va t'occuper de ton jardin, de tes oignons. Sens : ne te mêle pas de ça. Jamais avec un patron."),
  expr(1341, 'mettre son grain de sel', 'to put your two cents in', '/mɛtʁ sɔ̃ ɡʁɛ̃d sɛl/', 'mehtr sohⁿ grehⁿd SEHL', 'familier',
    "Image : ajouter son grain de sel dans le plat d'un autre. Sens : donner son avis quand personne ne l'a demandé."),
  expr(1342, "avoir d'autres chats à fouetter", 'to have other fish to fry', '/a.vwaʁ do.tʁə ʃa a fwɛ.te/', 'a-vwar doh-truh SHA a fweh-TAY', 'courant',
    "Image : d'autres chats qui attendent. Sens : avoir des choses plus importantes à faire. L'anglais met des poissons à frire."),
  expr(1343, 'couper la poire en deux', 'to split the difference', '/ku.pe la pwaʁ ɑ̃ dø/', 'koo-PAY la PWAR ahⁿ DEU', 'courant',
    "Image : une poire, une moitié chacun. Sens : faire un compromis, chacun fait la moitié du chemin."),
  expr(1344, 'ménager la chèvre et le chou', 'to keep both sides happy', '/me.na.ʒe la ʃɛvʁ e lə ʃu/', 'may-na-ZHAY la SHEHVR ay luh SHOO', 'courant',
    "Image : garder la chèvre ET le chou, alors que la chèvre veut manger le chou. Sens : ne fâcher personne. Pas d'image en anglais."),
  expr(1345, 'revenons à nos moutons', "let's get back to the point", '/ʁə.və.nɔ̃ a no mu.tɔ̃/', 'ruh-vuh-NOHⁿ a noh moo-TOHⁿ', 'courant',
    "Image : un berger qui retourne à ses moutons. Sens : revenons au vrai sujet. Pas d'image en anglais."),
  sent(1346, "Occupe-toi de tes oignons, s'il te plaît.", 'Mind your own business, please.', '/ɔ.kyp twa də te.zɔ.ɲɔ̃ sil tə plɛ/', 'o-küp twa duh tay-zo-NYOHⁿ seel tuh PLEH', ['affaires'], FCVDR),
  sent(1347, 'Mon oncle met toujours son grain de sel.', 'My uncle always sticks his oar in.', '/mɔ̃.nɔ̃kl mɛ tu.ʒuʁ sɔ̃ ɡʁɛ̃d sɛl/', 'mohⁿ-NOHⁿKL meh too-zhoor sohⁿ grehⁿd SEHL', ['affaires']),
  sent(1348, "Désolé, j'ai d'autres chats à fouetter.", 'Sorry, I have other fish to fry.', '/de.zɔ.le ʒe do.tʁə ʃa a fwɛ.te/', 'day-zo-LAY zhay doh-truh SHA a fweh-TAY', ['priorite'], FCVDR),
  sent(1349, 'Tu veux quarante dollars, moi trente : coupons la poire en deux.', 'You want forty dollars, I want thirty: let us split the difference.', '/ty vø ka.ʁɑ̃t dɔ.laʁ mwa tʁɑ̃t ku.pɔ̃ la pwaʁ ɑ̃ dø/', 'tü veu ka-rahⁿt do-LAR mwa TRAHⁿT koo-pohⁿ la PWAR ahⁿ DEU', ['compromis', 'quebec']),
  sent(1350, 'Le directeur ménage la chèvre et le chou.', 'The manager keeps both sides happy.', '/lə di.ʁɛk.tœʁ me.naʒ la ʃɛvʁ e lə ʃu/', 'luh dee-rehk-TUHR may-NAZH la SHEHVR ay luh SHOO', ['compromis']),
  sent(1351, 'Bon, revenons à nos moutons.', 'Right, back to the point.', '/bɔ̃ ʁə.və.nɔ̃ a no mu.tɔ̃/', 'bohⁿ ruh-vuh-NOHⁿ a noh moo-TOHⁿ', ['sujet'], FCVDR),
  sent(1352, 'Ne mets pas ton grain de sel dans leur dispute.', 'Do not stick your oar into their argument.', '/nə mɛ pa tɔ̃ ɡʁɛ̃d sɛl dɑ̃ lœʁ dis.pyt/', 'nuh meh pa tohⁿ grehⁿd SEHL dahⁿ luhr dees-PÜT', ['affaires']),
  sent(1353, 'On a coupé la poire en deux : chacun paie la moitié.', 'We split the difference: each of us pays half.', '/ɔ̃.na ku.pe la pwaʁ ɑ̃ dø ʃa.kœ̃ pɛ la mwa.tje/', 'ohⁿ-na koo-PAY la PWAR ahⁿ DEU sha-kuhⁿ peh la mwa-TYAY', ['compromis']),
  sent(1354, "Elle a d'autres chats à fouetter que tes histoires.", 'She has better things to do than your stories.', '/ɛ.la do.tʁə ʃa a fwɛ.te kə te.zis.twaʁ/', 'eh-la doh-truh SHA a fweh-TAY kuh tay-zees-TWAR', ['priorite']),
  sent(1355, 'Excusez-moi, revenons à nos moutons : le budget.', 'Excuse me, back to the point: the budget.', '/ɛks.ky.ze mwa ʁə.və.nɔ̃ a no mu.tɔ̃ lə byd.ʒɛ/', 'ehks-kü-zay MWA ruh-vuh-NOHⁿ a noh moo-TOHⁿ luh büd-ZHEH', ['sujet']),
];

/* ── ACT 11 · LES BONNES ET LES MAUVAISES NOUVELLES ─────────────────────── */

export const ACT11_ROWS: Row[] = [
  expr(1356, 'la cerise sur le gâteau', 'the icing on the cake', '/la sə.ʁiz syʁ lə ɡɑ.to/', 'la suh-REEZ sür luh ga-TOH', 'courant',
    "Image : la cerise posée tout en haut du gâteau. Sens : le petit plus qui rend une bonne chose parfaite. L'anglais met du glaçage."),
  expr(1357, 'mettre du beurre dans les épinards', 'to make life a bit easier', '/mɛtʁ dy bœʁ dɑ̃ le.ze.pi.naʁ/', 'mehtr dü BUHR dahⁿ lay-zay-pee-NAR', 'courant',
    "Image : du beurre qui rend les épinards meilleurs. Sens : un peu plus d'argent, qui rend la vie plus facile."),
  expr(1358, 'les carottes sont cuites', 'the game is up', '/le ka.ʁɔt sɔ̃ kɥit/', 'lay ka-ROT sohⁿ KWEET', 'familier',
    "Image : des carottes trop cuites, on ne peut plus rien changer. Sens : c'est fini, c'est perdu."),
  expr(1359, "c'est la fin des haricots", 'that is the last straw', '/sɛ la fɛ̃ de a.ʁi.ko/', 'seh la fehⁿ day a-ree-KOH', 'familier',
    "Image : plus un haricot dans la marmite. Sens : c'est la catastrophe, il ne reste plus rien. Souvent pour rire."),
  expr(1360, "vendre la peau de l'ours avant de l'avoir tué", 'do not count your chickens before they hatch', '/vɑ̃dʁ la po də luʁs a.vɑ̃d la.vwaʁ tɥe/', 'vahⁿdr la POH duh LOORS a-vahⁿd la-vwar TWAY', 'courant',
    "Image : vendre la peau d'un ours qu'on n'a pas encore attrapé. Sens : fêter trop tôt. L'anglais compte des poussins."),
  sent(1361, "Il a eu le poste, et le salaire, c'est la cerise sur le gâteau.", 'He got the job, and the salary is the icing on the cake.', '/i.la y lə pɔst e lə sa.lɛʁ sɛ la sə.ʁiz syʁ lə ɡɑ.to/', 'ee-la ü luh POST ay luh sa-LEHR seh la suh-REEZ sür luh ga-TOH', ['bonne'], FCVDR),
  sent(1362, 'Ce petit contrat met du beurre dans les épinards.', 'This small contract makes life a bit easier.', '/sə pə.ti kɔ̃.tʁa mɛ dy bœʁ dɑ̃ le.ze.pi.naʁ/', 'suh puh-tee kohⁿ-TRA meh dü BUHR dahⁿ lay-zay-pee-NAR', ['bonne'], FCVDR),
  sent(1363, 'Le train est parti sans nous, les carottes sont cuites.', 'The train left without us, that is that.', '/lə tʁɛ̃ ɛ paʁ.ti sɑ̃ nu le ka.ʁɔt sɔ̃ kɥit/', 'luh TREHⁿ eh par-tee sahⁿ NOO lay ka-ROT sohⁿ KWEET', ['mauvaise']),
  sent(1364, "Plus de café au bureau, c'est la fin des haricots.", 'No more coffee at the office, that is the last straw.', '/plyd ka.fe o by.ʁo sɛ la fɛ̃ de a.ʁi.ko/', 'plüd ka-FAY oh bü-ROH seh la fehⁿ day a-ree-KOH', ['mauvaise'], FCVDR),
  sent(1365, "Ne vends pas la peau de l'ours avant de l'avoir tué.", 'Do not count your chickens before they hatch.', '/nə vɑ̃ pa la po də luʁs a.vɑ̃d la.vwaʁ tɥe/', 'nuh vahⁿ pa la POH duh LOORS a-vahⁿd la-vwar TWAY', ['prudence']),
  sent(1366, 'Et la cerise sur le gâteau : il fait beau.', 'And the icing on the cake: the weather is fine.', '/e la sə.ʁiz syʁ lə ɡɑ.to il fɛ bo/', 'ay la suh-REEZ sür luh ga-TOH eel feh BOH', ['bonne']),
  sent(1367, 'Un deuxième emploi, ça met du beurre dans les épinards.', 'A second job makes life a bit easier.', '/œ̃ dø.zjɛm ɑ̃.plwa sa mɛ dy bœʁ dɑ̃ le.ze.pi.naʁ/', 'uhⁿ deu-ZYEM ahⁿ-PLWA sa meh dü BUHR dahⁿ lay-zay-pee-NAR', ['bonne']),
  sent(1368, 'On perd trois à zéro, les carottes sont cuites.', 'We are three nil down, it is all over.', '/ɔ̃ pɛʁ tʁwa a ze.ʁo le ka.ʁɔt sɔ̃ kɥit/', 'ohⁿ PEHR trwa a zay-ROH lay ka-ROT sohⁿ KWEET', ['mauvaise'], FCVDR),
  sent(1369, "Il n'a pas encore signé, ne vendons pas la peau de l'ours.", 'He has not signed yet, let us not count our chickens.', '/il na pa.zɑ̃.kɔʁ si.ɲe nə vɑ̃.dɔ̃ pa la po də luʁs/', 'eel na pa-zahⁿ-KOR see-NYAY nuh vahⁿ-dohⁿ pa la POH duh LOORS', ['prudence']),
];

/* ── ACT 12 · TA JOURNÉE EN IMAGES ──────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1370, "Samedi, il faisait un temps de chien et j'avais le cafard.", 'On Saturday the weather was foul and I felt low.', '/sam.di il fə.zɛ œ̃ tɑ̃d ʃjɛ̃ e ʒa.vɛ lə ka.faʁ/', 'sam-DEE eel fuh-zeh uhⁿ tahⁿd SHYEHⁿ ay zha-veh luh ka-FAR', ['anecdote'], FCVDR),
  sent(1371, "J'ai poireauté vingt minutes, puis il est arrivé.", 'I hung around for twenty minutes, then he turned up.', '/ʒe pwa.ʁo.te vɛ̃ mi.nyt pɥi i.lɛ.ta.ʁi.ve/', 'zhay pwa-roh-TAY vehⁿ mee-NÜT pwee ee-leh-ta-ree-VAY', ['anecdote']),
  sent(1372, "Bref, j'avais une faim de loup, on a mangé tout de suite.", 'Anyway, I was starving, so we ate straight away.', '/bʁɛf ʒa.vɛ yn fɛ̃d lu ɔ̃.na mɑ̃.ʒe tut.sɥit/', 'BREHF zha-veh ün fehⁿd LOO ohⁿ-na mahⁿ-zhay toot-SWEET', ['anecdote']),
  sent(1373, 'Et la cerise sur le gâteau, il a payé.', 'And the icing on the cake: he paid.', '/e la sə.ʁiz syʁ lə ɡɑ.to i.la pɛ.je/', 'ay la suh-REEZ sür luh ga-TOH ee-la peh-YAY', ['anecdote'], FCVDR),
  sent(1374, 'Une expression par idée, pas une par phrase.', 'One expression per idea, not one per sentence.', '/yn ɛks.pʁɛ.sjɔ̃ paʁ i.de pa.zyn paʁ fʁaz/', 'ün ehks-preh-SYOHⁿ par ee-DAY pa-zün par FRAZ', ['rule', 'ecrire'], ['flashcard'],
    rule('Combien d’expressions imagées dans une phrase ?', 'Une seule. Une par idée, pas une par phrase : trop d’images, et le message se perd.')),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** Every TAUGHT expression id (the 58), in act order. */
export const TAUGHT_IDS: string[] = FAMILIES.flatMap((f) => f.ids.filter((n) => !(n in VARIANT_OF)).map(E));

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS AND THEIR KEYS
 *
 *  The readings live here so the reading and the quiz cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Chloé's message to Awa, the Saturday Julien never came. Eight
 *  expressions in use, none of them taught yet. */
export const SAMEDI_TEXT =
  "Salut Awa ! Tu ne vas pas me croire. Samedi soir, j'avais rendez-vous avec Julien, le garçon du cours de salsa, au petit café du coin, rue Saint-Denis. Il faisait un froid de canard, alors je suis entrée tout de suite. J'ai poireauté quarante minutes devant mon chocolat chaud. Pas de Julien, pas de message : il m'a posé un lapin ! Au début, j'étais inquiète : un accident, peut-être, ou un téléphone perdu. Puis sa colocataire m'a écrit : il raconte des salades à tout le monde, il était au cinéma. Bref, j'avais une faim de loup, alors j'ai commandé une grosse part de gâteau. Et la cerise sur le gâteau : la serveuse m'a offert le café. Aujourd'hui, j'ai la pêche. Ce n'est pas la fin des haricots ! Bisous, Chloé";

/** The eight expressions in SAMEDI_TEXT, in order. */
export const SAMEDI_EXPR = [
  'un froid de canard', 'poireauter', 'poser un lapin', 'raconter des salades',
  'une faim de loup', 'la cerise sur le gâteau', 'avoir la pêche', 'la fin des haricots',
] as const;

/** Act 8: Mathieu's email to his team in Québec. Six expressions. */
export const COURRIEL_TEXT =
  "Bonjour l'équipe, cette semaine, on a du pain sur la planche : le client arrive jeudi et rien n'est prêt. Je sais, préparer une présentation en trois jours, ce n'est pas de la tarte. Mais pour Léa et Samuel, les chiffres, c'est du gâteau. Avec ce client, on marche sur des œufs : il n'a pas aimé notre dernière offre. Alors pas de blagues, pas de retard, et on relit tout deux fois avant d'envoyer un document. Je propose aussi un dîner avec lui mercredi midi. Ça ne mange pas de pain, et ça peut aider. Dernière chose : lundi, j'ai couru comme une poule pas de tête toute la journée. Cette semaine, on s'organise mieux : une liste au tableau, et chacun coche ce qu'il a fini. Merci à tous, Mathieu";

/** Act 11: Élise's news from Brussels. Five expressions. */
export const NOUVELLES_TEXT =
  "Coucou ! Grande nouvelle : j'ai trouvé un travail à Bruxelles, dans une petite maison d'édition. Le salaire n'est pas énorme, mais avec mes traductions du soir, ça met du beurre dans les épinards. Et la cerise sur le gâteau : le bureau est à dix minutes à pied de chez moi. Pour l'appartement, par contre, les carottes sont cuites : le propriétaire l'a loué à quelqu'un d'autre hier. Ce n'est pas la fin des haricots, j'ai encore deux visites samedi, dans le quartier de la gare. Mon frère, qui est toujours très optimiste, dit déjà que je vais acheter une maison avec un jardin. Je lui ai répondu : ne vendons pas la peau de l'ours avant de l'avoir tué. Je t'appelle dimanche pour tout te raconter. Élise";

/** Act 12: Awa's reply from Dakar, the model the learner imitates. Eight
 *  expressions, one per idea, in a real anecdote. */
export const ANECDOTE_TEXT =
  "Chère Chloé, ton lapin m'a fait rire ! Moi aussi, j'ai une histoire. Mardi, à Dakar, j'avais un entretien d'embauche dans une banque. La veille, j'avais des papillons dans le ventre, alors je me suis couchée avec les poules. Le matin, le bus avançait comme un escargot, et je suis arrivée juste à l'heure. La directrice m'a posé des questions difficiles, surtout sur mon ancien travail et sur un projet qui avait mal fini. Je n'ai pas noyé le poisson : j'ai pris le taureau par les cornes et j'ai tout expliqué. Hier, elle m'a appelée : j'ai le poste ! Et la cerise sur le gâteau, je commence en janvier. Bref, j'ai la pêche, et ce soir on fête ça en famille. À bientôt, Awa";

/** The expressions in ANECDOTE_TEXT, in order, for the task checklist. */
export const ANECDOTE_EXPR = [
  'des papillons dans le ventre', 'se coucher avec les poules', 'comme un escargot',
  'noyer le poisson', 'prendre le taureau par les cornes', 'la cerise sur le gâteau', 'avoir la pêche',
] as const;
