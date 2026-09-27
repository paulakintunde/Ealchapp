// b1.32.l1 « La concession et l'opposition » — the authored corpus, the
// imports and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top
// of B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, CARTE_RULE, CARTE_RULE_EN, UNIT, LESSON_ID,
// THEME, LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   CONCESSION AND OPPOSITION AS A SYSTEM: two facts that pull against each
//   other, and the word that links them. Decided up front with the wave
//   orchestrator (2026-09-26), and held here act by act:
//
//     1  the scales: mais as the everyday base (b1.30's), the whole family
//        met in one letter, and au contraire is not « on the other hand »
//     2  même si + indicative, never a future or conditional right after si
//        (b1.10's tense rule), even if AND even though
//     3  bien que / quoique as a CONCESSION CHOICE (b1.15 owns the mood and is
//        cited; forms beyond b1.14 to b1.16 are recognition only)
//     4  malgré + noun against bien que + clause (b1.16 named malgré as the
//        way out; this lesson builds it), en dépit de, malgré tout (b1.23's)
//     5  pourtant, cependant, néanmoins, toutefois: register and position
//     6  quand même and tout de même at the end (b1.24's, cited), and the
//        « anyway » trap (de toute façon)
//     7  avoir beau + infinitive
//     8  alors que and tandis que: two facts side by side, indicative, and
//        not pendant que
//     9  au lieu de + infinitive, par contre (spoken) against en revanche
//        (written), au contraire
//    10  the map: which tool takes a clause in the indicative, a clause in
//        the subjunctive, a noun, an infinitive or a whole sentence, by
//        register, and the English traps (despite of, although, even if)
//    11  writing a balanced opinion, pour et contre
//
//   NOT OWNED: mais, or, car, donc and linking adverbs in general (b1.30,
//   being written in parallel); cause, consequence and purpose, parce que,
//   puisque, si bien que (b1.31, in parallel); the subjunctive itself (b1.14
//   to b1.16); si-clause tense pairs (b1.10); quand même and tout de même as
//   emplois of même (b1.24); malgré tout as a fixed tout expression (b1.23).
//   « même si » was given ONE forward pointer by b1.24 (fr.b1.maison.079);
//   this lesson picks it up and reuses that very row.
//
//   THE SUBJUNCTIVE APPEARS ONLY AFTER bien que AND quoique. No other row,
//   bubble, card or text in this lesson carries a subjunctive: no il faut
//   que, pour que, avant que, malgré que, quoi que. « malgré que » is NAMED
//   once, on a sheet, with no example sentence.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong form lives in a
//   `commonErrors.wrong`, a `trapDrill.promptSound`, a scene `break.wrong` or
//   a quiz `errorSpot.prompt`.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques` exists (« Les connecteurs logiques »,
//     domain fondations, levelRange a2-b2), so nothing is created at import.
//     Its sub-themes (la coordination, la subordination, la concession) were
//     set in Postgres on 2026-09-26 and live in Postgres only until a publish.
//  2. POSTGRES PROBED 2026-09-26 by this author (read-only): 295 rows in the
//     theme, a2 132 (highest .132), b1 115 (highest .115), b2 48 (highest
//     .048), and NOTHING at or above 1000 at any level.
//  3. ID BLOCK: b1.32 owns `fr.b1.connecteurs-logiques.1400`-`.1599` AND
//     NOTHING ELSE. b1.30 holds 1000-1199 and b1.31 1200-1399, both in
//     parallel. Used here: `.1400`-`.1586`, 187 rows, in eleven act blocks.
//     Compare full ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 11 ROWS OF THIS THEME (b1 .001-.011), all parce que,
//     donc or car: b1.31's ground, none of them reusable here. So the 104
//     other published `fr.b1` rows are DB-ONLY and cannot be named (`src()`
//     resolves against the seed). The probe shows at least 40 of them are on
//     topic (cependant .030-.033, pourtant .034-.037, malgré .038-.040, en
//     revanche .045-.047, par contre .048-.050, tandis que .079, alors que
//     .080, même si .081, the bare connectors .101-.112), so this corpus
//     WILL hold twins. See DB_ONLY_TWINS below. Dedupe at import (build log
//     open item). Postgres also holds ~40 a1 `mots-de-liaison` rows on
//     pourtant, cependant, par contre, en revanche and malgré (.019-.036,
//     .073-.078, .229-.248), none of them in the seed either.
//  5. The on-topic rows the SEED does carry, outside this theme, were probed
//     over all 11,209 seed items on 2026-09-26 (real orthography, since the
//     probe does not strip accents): 3 même si, 28 bien que, 2 quoique, 1 au
//     lieu de, 1 au contraire, 1 quand même, and ZERO malgré, pourtant,
//     cependant, néanmoins, toutefois, avoir beau, alors que, tandis que, par
//     contre or en revanche. The useful ones are in §F. Every one was read out
//     of seed.json and its `fr` is copied verbatim wherever a section prints
//     it, through `src()`. None of them carries `voiceflash`.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR:
//       prennent, comprenne   PRENN   (a real /n/ after a single e: « prehn »
//                                      trips the EH+N rule even though the
//                                      source has a double n)
//     Everything else is spelled for the ear. `jeune` was kept OUT of every
//     row on purpose: its only checker-safe respelling (ZHUHNN) is not how it
//     sounds. même respells MEM (the seed's spelling; b1.23 and b1.24
//     aligned on it). Nasal vowels always close with the superscript: ahⁿ,
//     ohⁿ, uhⁿ, ehⁿ. No U+203F tie anywhere, in a respelling or an IPA field.
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
  id: 'b1.32',
  seq: 32,
  title: 'Concession and Contrast',
  sub: "La concession et l'opposition",
  canDo: 'Can weigh two facts that pull against each other and link them with the right tool for the meaning, the grammar and the register: même si with the indicative, bien que and quoique with the subjunctive, malgré with a noun, avoir beau and au lieu de with an infinitive, pourtant, cependant, quand même, alors que, par contre, en revanche and au contraire, and can write a short balanced opinion on a local question',
  prereqUnitIds: ['b1.15', 'b1.10'],
} as const;

export const LESSON_ID = 'b1.32.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds a2 .001-.132, b1 .001-.115 and b2 .001-.048 in this
 *  theme; b1.30 owns 1000-1199, b1.31 1200-1399, b1.32 1400-1599. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label, resolved through
 *  `unitRef` from the shipped `unit.seq`, never typed. b1.* units are not in
 *  the seed yet, so they are labelled in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const SI_UNIT = 'b1.10';
export const SUBJ_FORM_UNIT = 'b1.14';
export const SUBJ_DECL_UNIT = 'b1.15';
export const SUBJ_INF_UNIT = 'b1.16';
export const TOUT_UNIT = 'b1.23';
export const MEME_UNIT = 'b1.24';
export const REGISTRE_UNIT = 'b1.25';
export const COORD_UNIT = 'b1.30';
export const SUBORD_UNIT = 'b1.31';
export const ECOLOGIE_UNIT = 'b1.33';
export const COMPARATIFS_UNIT = 'a2.08';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = Object.fromEntries(
  Array.from({ length: 39 }, (_, i) => [`b1.${String(i + 1).padStart(2, '0')}`, i + 1]),
);
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const SI_REF = refFr(SI_UNIT);
export const SUBJ_FORM_REF = refFr(SUBJ_FORM_UNIT);
export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);
export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const TOUT_REF = refFr(TOUT_UNIT);
export const MEME_REF = refFr(MEME_UNIT);
export const REGISTRE_REF = refFr(REGISTRE_UNIT);
export const COORD_REF = refFr(COORD_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const ECOLOGIE_REF = refFr(ECOLOGIE_UNIT);
export const COMPARATIFS_REF = unitRef(COMPARATIFS_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  All five are French B1 reframes, quoted as they stand, never retyped.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B110_REFRAME } from './si-clauses-corpus.ts';
export { REFRAME as B115_REFRAME } from './subjonctif-declencheurs-corpus.ts';
export { REFRAME as B116_REFRAME } from './subjonctif-infinitif-corpus.ts';
export { REFRAME as B124_REFRAME } from './meme-corpus.ts';
export { REFRAME as B125_REFRAME } from './registres-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE SCALES. Two facts sit on the two pans. The word that links them says
 *  how they weigh: même si, bien que, malgré and avoir beau put the obstacle
 *  on the light pan and let the other fact win; pourtant and quand même say
 *  the heavy pan lost against expectation; alors que, tandis que, par contre
 *  and en revanche set two facts side by side at equal weight; au contraire
 *  empties the first pan, and au lieu de takes one thing off and puts the
 *  other on. That covers every tool the lesson teaches, the meaning side.
 *
 *  The GRAMMAR side is the second constant, CARTE_RULE, kept apart because a
 *  reframe that tried to carry both would be two sentences: once the word is
 *  chosen, look at what it carries (a clause in the indicative, a clause in
 *  the subjunctive, a noun, an infinitive, or a whole sentence). It echoes
 *  b1.15's « c'est l'expression devant que qui décide », and it is quoted.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Deux faits sur la balance : le mot qui les relie dit comment ils pèsent.';
export const REFRAME_EN = 'Two facts on the scales: the word that links them says how they weigh.';

export const CARTE_RULE = "Choisis le mot, puis regarde ce qu'il porte.";
export const CARTE_RULE_EN = 'Choose the word, then look at what it carries.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Bien que, c’est although ; même si, c’est even if.',
    why: "A translation pair, and false twice where act 10 has to hold: « although » is as often même si, alors que or pourtant in real French, and « même si » covers even though as well as even if (act 2). It also teaches the learner to pick by translating, which is the trap act 10 is built on.",
  },
  {
    text: 'La concession demande le subjonctif.',
    why: "True of two tools out of twelve. même si, alors que and tandis que take the indicative (acts 2 and 8), malgré a noun (act 4), avoir beau and au lieu de an infinitive (acts 7 and 9). A reframe that nine acts contradict is not a reframe.",
  },
  {
    text: 'Un obstacle, et le résultat ne change pas.',
    why: "b1.24's picture of quand même, and exactly right for acts 2 to 7. It breaks at act 8 (alors que: two facts side by side, no obstacle) and act 9 (au contraire removes the first fact). The scales hold all three: a light pan, two equal pans, an emptied pan.",
  },
  {
    text: 'Mais, en plus élégant.',
    why: "It makes every tool a register upgrade of mais, which is false of au contraire (it does not add a second fact, it cancels the first) and of avoir beau (it cannot be rewritten with mais without changing the structure). It also hands mais's ground to this lesson, when mais is b1.30's.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-26 and its French is in the
 *  trailing comment. `named only` rows carry no `flashcard` drill, so no
 *  deckTranche can release them. NONE of these rows carries `voiceflash`, so
 *  every one of them is in NOT_SPEAKABLE.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [] as string[],               // §A.5: the seed has no mais / pourtant pair worth quoting here.
  act2: [
    'fr.b1.maison.079',               // Elle préfère un appartement calme même si le loyer est plus élevé.  (b1.24's one même si pointer)
    'fr.b1.sports-et-loisirs.004',    // Même si elle déteste perdre, elle accepte de rejouer une dernière fois.
    'fr.b1.dictee.038',               // Même si le cours est difficile, elle continue parce qu'elle veut réussir.  (named only)
  ],
  act3: [
    'fr.b1.famille.002',              // Bien qu'ils habitent loin, mes cousins viennent nous voir chaque été.
    'fr.b1.matieres.004',             // Bien qu'il déteste les maths, il obtient toujours de bonnes notes.
    'fr.b1.sports-et-loisirs.090',    // Bien qu'il se soit blessé, il a terminé la course.
    'fr.b1.communaute.003',           // Bien que le quartier ait beaucoup changé, l'esprit de solidarité reste le même.
    'fr.b1.metiers.062',              // Quoiqu'il soit compétent, il n'a pas obtenu la promotion promise.  (named only)
  ],
  act4: [] as string[],               // §A.5: the seed carries no malgré row at a1-b1.
  act5: [                            // §A.5: no pourtant, cependant, néanmoins or toutefois row in the seed.
    'fr.b1.connecteurs-logiques.1149', // pourtant   (b1.30 owns the headword; named, never re-authored)
  ],
  act6: [
    'fr.a2.famille.012',              // Ma tante était malade, mais elle est venue au mariage quand même.  (named only)
  ],
  act7: [] as string[],               // §A.5: no avoir beau row in the seed.
  act8: [] as string[],               // §A.5: no alors que or tandis que row in the seed.
  act9: [
    'fr.a1.mots-de-liaison.025',      // Il n'est pas triste, au contraire il est très content.  (named only)
    'fr.a1.jours-et-mois.123',        // Cette carte d'anniversaire est arrivée un jour trop tôt, mercredi au lieu de jeudi.  (named only)
  ],
  act10: [
    'fr.b1.tourisme.005',             // Bien que la visite guidée soit un peu chère, elle vaut vraiment le détour.
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.dictee.038',                 // sentence, review
  'fr.b1.metiers.062',                // dictation
  'fr.a2.famille.012',                // dictation
  'fr.a1.mots-de-liaison.025',        // dictation
  'fr.a1.jours-et-mois.123',          // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.maison.079',                 // sentence, flashcard, review
  'fr.b1.sports-et-loisirs.004',      // sentence, flashcard, review
  'fr.b1.famille.002',                // sentence, flashcard, review
  'fr.b1.matieres.004',               // sentence, flashcard, review
  'fr.b1.sports-et-loisirs.090',      // sentence, flashcard, review
  'fr.b1.communaute.003',             // sentence, flashcard, review
  'fr.b1.tourisme.005',               // sentence, flashcard, review
];

/** Published rows this corpus is known to twin, from the 2026-09-26 Postgres
 *  probe. Not nameable today (DB-only). Decide at import: dedupe or keep both. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.b1.connecteurs-logiques.106', fr: 'même si', twin: E(1431) },
  { dbId: 'fr.b1.connecteurs-logiques.105', fr: 'bien que', twin: E(1447) },
  { dbId: 'fr.b1.connecteurs-logiques.101', fr: 'cependant', twin: E(1481) },
  { dbId: 'fr.b1.connecteurs-logiques.102', fr: 'en revanche', twin: E(1553) },
  { dbId: 'fr.b1.connecteurs-logiques.107', fr: 'tandis que', twin: E(1533) },
  { dbId: 'fr.b1.connecteurs-logiques.112', fr: 'tout de même', twin: E(1500) },
  { dbId: 'fr.b1.connecteurs-logiques.082', fr: 'Malgré la pluie, les touristes ont continué la visite du château.', twin: E(1453) },
  { dbId: 'fr.b1.connecteurs-logiques.098', fr: 'Malgré le froid intense, ils ont décidé de camper en montagne.', twin: E(1452) },
  { dbId: 'fr.b1.connecteurs-logiques.080', fr: 'Alors que tout le monde se plaignait du froid, elle sortait sans manteau.', twin: E(1524) },
  { dbId: 'fr.b1.connecteurs-logiques.088', fr: 'Tandis que les prix baissaient en ville, ils augmentaient à la campagne.', twin: E(1526) },
  { dbId: 'fr.b1.connecteurs-logiques.046', fr: "La ville manque d'espaces verts ; en revanche, elle propose de nombreux musées.", twin: E(1548) },
  { dbId: 'fr.b1.connecteurs-logiques.048', fr: 'Le premier appartement était lumineux ; par contre, il donnait sur une rue très bruyante.', twin: E(1543) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie. See §A.6 for the respellings spelled for the checker.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['concession-opposition'], ...extra,
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

/* ── ACT 1 · LA BALANCE ─────────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, 'La rue piétonne est bonne pour les familles. Par contre, elle complique les livraisons.', 'The pedestrian street is good for families. On the other hand, it makes deliveries harder.', '/la ʁy pje.tɔn ɛ bɔn puʁ le fa.mij paʁ kɔ̃tʁ ɛl kɔ̃.plik le li.vʁɛ.zɔ̃/', 'la rü pyay-TONN eh bonn poor lay fa-MEEY | par KOHⁿTR | ehl kohⁿ-pleek lay lee-vreh-ZOHⁿ', ['scene', 'par-contre', 'opposition'], FCVDR),
  sent(1401, 'Je suis pour la rue piétonne, même si les commerces perdent des clients.', 'I am for the pedestrian street, even if the shops lose customers.', '/ʒə sɥi puʁ la ʁy pje.tɔn mɛm si le kɔ.mɛʁs pɛʁd de kli.jɑ̃/', 'zhuh swee poor la rü pyay-TONN | MEM see lay ko-mehrs pehrd day klee-YAHⁿ', ['scene', 'meme-si'], FCVDR),
  sent(1402, "C'est cher, mais c'est pratique.", 'It is expensive, but it is practical.', '/sɛ ʃɛʁ mɛ sɛ pʁa.tik/', 'seh SHEHR | meh seh pra-TEEK', ['mais', 'base'], FCVDR),
  sent(1403, 'Le projet coûte cher, mais il rend la rue plus calme.', 'The project is expensive, but it makes the street quieter.', '/lə pʁɔ.ʒɛ kut ʃɛʁ mɛ.zil ʁɑ̃ la ʁy ply kalm/', 'luh pro-zheh koot SHEHR | meh-zeel rahⁿ la rü plü KALM', ['mais', 'base']),
  sent(1404, 'Bien que le projet soit cher, je vote pour.', 'Although the project is expensive, I am voting for it.', '/bjɛ̃ kə lə pʁɔ.ʒɛ swa ʃɛʁ ʒə vɔt puʁ/', 'byehⁿ kuh luh pro-zheh swa SHEHR | zhuh vot POOR', ['bien-que', 'subjonctif']),
  sent(1405, "Malgré le bruit, les voisins sont d'accord.", 'Despite the noise, the neighbours agree.', '/mal.ɡʁe lə bʁɥi le vwa.zɛ̃ sɔ̃ da.kɔʁ/', 'mal-gray luh BRWEE | lay vwa-zehⁿ sohⁿ da-KOR', ['malgre']),
  sent(1406, 'Les autres rues sont pleines, alors que la nôtre est vide.', 'The other streets are full, whereas ours is empty.', '/le.zotʁ ʁy sɔ̃ plɛn a.lɔʁ kə la notʁ ɛ vid/', 'lay-zohtr rü sohⁿ PLENN | a-lor kuh la nohtr eh VEED', ['alors-que', 'opposition']),
  sent(1407, "J'ai beau réfléchir, je n'arrive pas à choisir.", 'However hard I think, I cannot choose.', '/ʒe bo ʁe.fle.ʃiʁ ʒə na.ʁiv pa a ʃwa.ziʁ/', 'zhay boh ray-flay-SHEER | zhuh na-reev pa a shwa-ZEER', ['avoir-beau']),
  sent(1408, 'Il pleuvait, et pourtant la salle était pleine.', 'It was raining, and yet the hall was full.', '/il plø.vɛ e puʁ.tɑ̃ la sal e.tɛ plɛn/', 'eel pluh-VEH | ay poor-tahⁿ la sal ay-teh PLENN', ['pourtant'], FCVDR),
  sent(1409, REFRAME, REFRAME_EN, '/dø fɛ syʁ la ba.lɑ̃s lə mo ki le ʁə.li di kɔ.mɑ̃.til pɛz/', 'deu FEH sür la ba-LAHⁿS | luh moh kee lay ruh-LEE | dee ko-mahⁿ-teel PEHZ', ['rule', 'reframe'], ['flashcard'],
    rule("« Je suis pour, même si c'est cher » : quel fait pèse le plus ?", "Je suis pour. Le fait après même si, c'est l'obstacle : il pèse moins. Le mot qui relie les deux faits dit comment ils pèsent.")),
  sent(1410, "Elle n'est pas contre le projet, au contraire.", 'She is not against the project, quite the opposite.', '/ɛl nɛ pa kɔ̃tʁ lə pʁɔ.ʒɛ o kɔ̃.tʁɛʁ/', 'ehl neh pa kohⁿtr luh pro-ZHEH | oh kohⁿ-TREHR', ['au-contraire'], FCVDR),
  sent(1411, 'Je suis pour, avec une réserve.', 'I am for it, with one reservation.', '/ʒə sɥi puʁ a.vɛk yn ʁe.zɛʁv/', 'zhuh swee POOR | a-vehk ünn ray-ZEHRV', ['scene', 'avis']),
  sent(1412, 'Le projet est bon pour les familles, mais il complique les livraisons.', 'The project is good for families, but it makes deliveries harder.', '/lə pʁɔ.ʒɛ ɛ bɔ̃ puʁ le fa.mij mɛ.zil kɔ̃.plik le li.vʁɛ.zɔ̃/', 'luh pro-zheh eh bohⁿ poor lay fa-MEEY | meh-zeel kohⁿ-pleek lay lee-vreh-ZOHⁿ', ['mais', 'base']),
  sent(1413, 'Les enfants pourront jouer dehors, mais les voitures devront faire un détour.', 'Children will be able to play outside, but cars will have to take a detour.', '/le.zɑ̃.fɑ̃ pu.ʁɔ̃ ʒwe də.ɔʁ mɛ le vwa.tyʁ də.vʁɔ̃ fɛʁ œ̃ de.tuʁ/', 'lay-zahⁿ-fahⁿ poo-rohⁿ zhway duh-OR | meh lay vwa-tür duh-vrohⁿ fehr uhⁿ day-TOOR', ['mais', 'base']),
  sent(1414, "C'est une bonne idée, même si elle coûte cher.", 'It is a good idea, even if it costs a lot.', '/sɛ.tyn bɔ.ni.de mɛm si ɛl kut ʃɛʁ/', 'seh-tünn bo-nee-DAY | MEM see ehl koot SHEHR', ['meme-si']),
  sent(1415, 'Je comprends les commerçants. Pourtant, je vote pour.', 'I understand the shopkeepers. And yet I am voting for it.', '/ʒə kɔ̃.pʁɑ̃ le kɔ.mɛʁ.sɑ̃ puʁ.tɑ̃ ʒə vɔt puʁ/', 'zhuh kohⁿ-prahⁿ lay ko-mehr-SAHⁿ | poor-TAHⁿ | zhuh vot POOR', ['pourtant']),
  phrase(1416, 'le pour et le contre', 'the pros and cons', '/lə puʁ e lə kɔ̃tʁ/', 'luh poor ay luh KOHⁿTR', ['avis']),
];

/* ── ACT 2 · MÊME SI ────────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1417, 'Même si le loyer est cher, je reste dans ce quartier.', 'Even though the rent is high, I am staying in this neighbourhood.', '/mɛm si lə lwa.je ɛ ʃɛʁ ʒə ʁɛst dɑ̃ sə kaʁ.tje/', 'MEM see luh lwa-yay eh SHEHR | zhuh rehst dahⁿ suh kar-TYAY', ['meme-si', 'fait'], FCVDR),
  sent(1418, "Même s'il pleut demain, le marché aura lieu.", 'Even if it rains tomorrow, the market will take place.', '/mɛm sil plø də.mɛ̃ lə maʁ.ʃe o.ʁa ljø/', 'MEM seel pleu duh-MEHⁿ | luh mar-shay oh-ra LYEU', ['meme-si', 'futur'], FCVDR),
  sent(1419, "Même si tu n'es pas d'accord, écoute-moi jusqu'au bout.", 'Even if you do not agree, hear me out.', '/mɛm si ty nɛ pa da.kɔʁ e.kut.mwa ʒys.ko bu/', 'MEM see tü neh pa da-KOR | ay-koot-mwa zhüs-koh BOO', ['meme-si']),
  sent(1420, "Même si c'était difficile, nous avons fini à temps.", 'Even though it was hard, we finished on time.', '/mɛm si se.tɛ di.fi.sil nu.za.vɔ̃ fi.ni a tɑ̃/', 'MEM see say-teh dee-fee-SEEL | noo-za-vohⁿ fee-nee a TAHⁿ', ['meme-si', 'passe'], FCVDR),
  sent(1421, "Même s'il avait le temps, il ne viendrait pas.", 'Even if he had the time, he would not come.', '/mɛm si.la.vɛ lə tɑ̃ il nə vjɛ̃.dʁɛ pa/', 'MEM see-la-veh luh TAHⁿ | eel nuh vyehⁿ-dreh PA', ['meme-si', 'hypothese']),
  sent(1422, "Même si j'étais riche, je resterais à Sherbrooke.", 'Even if I were rich, I would stay in Sherbrooke.', '/mɛm si ʒe.tɛ ʁiʃ ʒə ʁɛs.tə.ʁɛ a ʃɛʁ.bʁuk/', 'MEM see zhay-teh REESH | zhuh rehs-tuh-reh a shehr-BROOK', ['meme-si', 'hypothese', 'quebec'], FCVDR),
  sent(1423, "Après même si, l'indicatif, comme après si.", 'After même si, the indicative, as after si.', '/a.pʁɛ mɛm si lɛ̃.di.ka.tif kɔm a.pʁɛ si/', 'a-preh MEM see | lehⁿ-dee-ka-TEEF | kom a-preh SEE', ['rule', 'meme-si'], ['flashcard'],
    rule('« Même s’il ... demain » (pleuvoir) : quel temps après si ?', "Le présent : même s'il pleut demain. Juste après si, jamais de futur, jamais de conditionnel, jamais de subjonctif.")),
  sent(1424, 'Même si la réunion finit tard, je viendrai.', 'Even if the meeting ends late, I will come.', '/mɛm si la ʁe.y.njɔ̃ fi.ni taʁ ʒə vjɛ̃.dʁe/', 'MEM see la ray-ü-nyohⁿ fee-nee TAR | zhuh vyehⁿ-DRAY', ['meme-si', 'futur']),
  sent(1425, 'Même si elle est fatiguée, elle vient à la consultation.', 'Even though she is tired, she is coming to the consultation.', '/mɛm si ɛ.lɛ fa.ti.ɡe ɛl vjɛ̃ a la kɔ̃.syl.ta.sjɔ̃/', 'MEM see eh-leh fa-tee-GAY | ehl vyehⁿ a la kohⁿ-sül-ta-SYOHⁿ', ['meme-si', 'fait']),
  sent(1426, "Je vais à pied, même s'il fait froid.", 'I walk, even when it is cold.', '/ʒə vɛ a pje mɛm sil fɛ fʁwa/', 'zhuh veh a PYAY | MEM seel feh FRWA', ['meme-si', 'ordre']),
  sent(1427, 'Même si on ferme la rue, les livreurs pourront passer le matin.', 'Even if the street is closed, delivery drivers will be able to get through in the morning.', '/mɛm si ɔ̃ fɛʁm la ʁy le li.vʁœʁ pu.ʁɔ̃ pa.se lə ma.tɛ̃/', 'MEM see ohⁿ fehrm la RÜ | lay lee-vruhr poo-rohⁿ pa-say luh ma-TEHⁿ', ['meme-si', 'futur'], FCVDR),
  sent(1428, "Même si je ne suis pas d'accord, je respecte ton avis.", 'Even though I do not agree, I respect your view.', '/mɛm si ʒə nə sɥi pa da.kɔʁ ʒə ʁɛs.pɛkt tɔ̃.na.vi/', 'MEM see zhuh nuh swee pa da-KOR | zhuh rehs-pehkt tohⁿ-na-VEE', ['meme-si', 'fait']),
  sent(1429, "Même si le bus était en retard, je suis arrivé à l'heure.", 'Even though the bus was late, I arrived on time.', '/mɛm si lə bys e.tɛ.tɑ̃ ʁə.taʁ ʒə sɥi.za.ʁi.ve a lœʁ/', 'MEM see luh büs ay-teh-tahⁿ ruh-TAR | zhuh swee-za-ree-vay a LUHR', ['meme-si', 'passe']),
  sent(1430, "Même s'il neige demain, on sort.", 'Even if it snows tomorrow, we are going out.', '/mɛm sil nɛʒ də.mɛ̃ ɔ̃ sɔʁ/', 'MEM seel nehzh duh-MEHⁿ | ohⁿ SOR', ['meme-si', 'futur'], FCVR,
    gap('Même s’il ___ demain, on sort. (neiger)', 'neige : juste après si, le présent, même pour demain. Jamais « neigera ».')),
  phrase(1431, 'même si', 'even if, even though', '/mɛm si/', 'MEM SEE', ['meme-si']),
  sent(1432, "Même si tu insistes, je ne changerai pas d'avis.", 'Even if you insist, I will not change my mind.', '/mɛm si ty ɛ̃.sist ʒə nə ʃɑ̃ʒ.ʁe pa da.vi/', 'MEM see tü ehⁿ-SEEST | zhuh nuh shahⁿzh-ray pa da-VEE', ['meme-si', 'futur']),
  sent(1433, "Même si l'hiver est long, j'aime vivre ici.", 'Even though winter is long, I love living here.', '/mɛm si li.vɛ.ʁɛ lɔ̃ ʒɛm vi.vʁi.si/', 'MEM see lee-veh-reh LOHⁿ | zhem vee-vree-SEE', ['meme-si', 'quebec', 'fait'], FCVDR),
];

/* ── ACT 3 · BIEN QUE, QUOIQUE ──────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1434, "Bien qu'il fasse froid, les enfants jouent dehors.", 'Although it is cold, the children are playing outside.', '/bjɛ̃ kil fas fʁwa le.zɑ̃.fɑ̃ ʒu də.ɔʁ/', 'byehⁿ keel fass FRWA | lay-zahⁿ-fahⁿ zhoo duh-OR', ['bien-que', 'subjonctif', 'paire'], FCVDR),
  sent(1435, 'Bien que la salle soit petite, tout le monde est venu.', 'Although the hall is small, everyone came.', '/bjɛ̃ kə la sal swa pə.tit tu lə mɔ̃d ɛ və.ny/', 'byehⁿ kuh la sal swa puh-TEET | too luh mohⁿd eh vuh-NÜ', ['bien-que', 'subjonctif']),
  sent(1436, "Bien que je sois d'accord, j'ai une question.", 'Although I agree, I have a question.', '/bjɛ̃ kə ʒə swa da.kɔʁ ʒe yn kɛs.tjɔ̃/', 'byehⁿ kuh zhuh swa da-KOR | zhay ünn kehs-TYOHⁿ', ['bien-que', 'subjonctif']),
  sent(1437, "Bien qu'elle ait peu de temps, elle aide ses voisins.", 'Although she has little time, she helps her neighbours.', '/bjɛ̃ kɛ.lɛ pø də tɑ̃ ɛ.lɛd se vwa.zɛ̃/', 'byehⁿ keh-leh peu duh TAHⁿ | eh-lehd say vwa-ZEHⁿ', ['bien-que', 'subjonctif'], FCVDR),
  sent(1438, "Quoique le projet soit coûteux, la mairie l'a accepté.", 'Although the project is costly, the town hall accepted it.', '/kwa.kə lə pʁɔ.ʒɛ swa ku.tø la mɛ.ʁi la ak.sɛp.te/', 'kwa-kuh luh pro-zheh swa koo-TEU | la meh-ree la ak-sehp-TAY', ['quoique', 'subjonctif', 'ecrit']),
  sent(1439, 'Bien que nous puissions payer, nous préférons attendre.', 'Although we can pay, we prefer to wait.', '/bjɛ̃ kə nu pɥi.sjɔ̃ pɛ.je nu pʁe.fe.ʁɔ̃.za.tɑ̃dʁ/', 'byehⁿ kuh noo pwee-syohⁿ peh-YAY | noo pray-fay-rohⁿ-za-TAHⁿDR', ['bien-que', 'subjonctif']),
  sent(1440, 'Bien que et quoique prennent le subjonctif.', 'Bien que and quoique take the subjunctive.', '/bjɛ̃ kə e kwa.kə pʁɛn lə syb.ʒɔ̃k.tif/', 'byehⁿ kuh ay KWA-kuh | PRENN luh süb-zhohⁿk-TEEF', ['rule', 'bien-que'], ['flashcard'],
    rule('« Bien qu’il ... froid » (faire) : quelle forme ?', "fasse : bien que et quoique prennent le subjonctif. Même si garde l'indicatif : même s'il fait froid. Même balance, autre forme.")),
  sent(1441, "Même s'il fait froid, les enfants jouent dehors.", 'Even though it is cold, the children are playing outside.', '/mɛm sil fɛ fʁwa le.zɑ̃.fɑ̃ ʒu də.ɔʁ/', 'MEM seel feh FRWA | lay-zahⁿ-fahⁿ zhoo duh-OR', ['meme-si', 'paire'], FCVDR),
  sent(1442, 'Bien que le quartier change, les voisins se connaissent encore.', 'Although the neighbourhood is changing, the neighbours still know one another.', '/bjɛ̃ kə lə kaʁ.tje ʃɑ̃ʒ le vwa.zɛ̃ sə kɔ.nɛs.tɑ̃.kɔʁ/', 'byehⁿ kuh luh kar-tyay SHAHⁿZH | lay vwa-zehⁿ suh ko-nehs-tahⁿ-KOR', ['bien-que', 'subjonctif']),
  sent(1443, "Bien qu'il pleuve, la fête continue.", 'Although it is raining, the party goes on.', '/bjɛ̃ kil plœv la fɛt kɔ̃.ti.ny/', 'byehⁿ keel PLUHV | la feht kohⁿ-tee-NÜ', ['bien-que', 'subjonctif', 'paire'], FCVDR),
  sent(1444, 'Bien que le musée soit loin, nous y allons souvent.', 'Although the museum is far, we often go there.', '/bjɛ̃ kə lə my.ze swa lwɛ̃ nu.zi.a.lɔ̃ su.vɑ̃/', 'byehⁿ kuh luh mü-zay swa LWEHⁿ | noo-zee-a-lohⁿ soo-VAHⁿ', ['bien-que', 'subjonctif']),
  sent(1445, "Quoiqu'il soit tard, la boulangerie est encore ouverte.", 'Although it is late, the bakery is still open.', '/kwa.kil swa taʁ la bu.lɑ̃ʒ.ʁi ɛ.tɑ̃.kɔʁ u.vɛʁt/', 'kwa-keel swa TAR | la boo-lahⁿzh-ree eh-tahⁿ-kor oo-VEHRT', ['quoique', 'subjonctif']),
  sent(1446, 'Bien que je connaisse le chemin, je prends le GPS.', 'Although I know the way, I use the GPS.', '/bjɛ̃ kə ʒə kɔ.nɛs lə ʃə.mɛ̃ ʒə pʁɑ̃ lə ʒe.pe.ɛs/', 'byehⁿ kuh zhuh ko-nehs luh shuh-MEHⁿ | zhuh prahⁿ luh zhay-pay-EHS', ['bien-que', 'subjonctif']),
  phrase(1447, 'bien que', 'although', '/bjɛ̃ kə/', 'byehⁿ KUH', ['bien-que']),
  phrase(1448, 'quoique', 'although (more written)', '/kwa.kə/', 'KWA-kuh', ['quoique', 'ecrit']),
  sent(1449, "Bien qu'elle soit malade, elle travaille.", 'Although she is ill, she is working.', '/bjɛ̃ kɛl swa ma.lad ɛl tʁa.vaj/', 'byehⁿ kehl swa ma-LAD | ehl tra-VAHY', ['bien-que', 'subjonctif', 'paire'], FCVR,
    gap('Bien qu’elle ___ malade, elle travaille. (être)', 'soit : après bien que, le subjonctif. Avec même si, tu dirais « est ».')),
  sent(1450, 'Même si elle est malade, elle travaille.', 'Even though she is ill, she is working.', '/mɛm si ɛ.lɛ ma.lad ɛl tʁa.vaj/', 'MEM see eh-leh ma-LAD | ehl tra-VAHY', ['meme-si', 'paire'], FCVDR),
  sent(1451, "Bien qu'il ait raison, il parle trop fort.", 'Although he is right, he talks too loudly.', '/bjɛ̃ ki.lɛ ʁɛ.zɔ̃ il paʁl tʁo fɔʁ/', 'byehⁿ kee-leh reh-ZOHⁿ | eel parl troh FOR', ['bien-que', 'subjonctif']),
];

/* ── ACT 4 · MALGRÉ + NOM ───────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1452, 'Malgré le froid, les enfants jouent dehors.', 'In spite of the cold, the children are playing outside.', '/mal.ɡʁe lə fʁwa le.zɑ̃.fɑ̃ ʒu də.ɔʁ/', 'mal-gray luh FRWA | lay-zahⁿ-fahⁿ zhoo duh-OR', ['malgre', 'paire'], FCVDR),
  sent(1453, 'Malgré la pluie, la fête continue.', 'Despite the rain, the party goes on.', '/mal.ɡʁe la plɥi la fɛt kɔ̃.ti.ny/', 'mal-gray la PLWEE | la feht kohⁿ-tee-NÜ', ['malgre', 'paire'], FCVDR),
  sent(1454, 'Malgré son âge, madame Pirotte vient à toutes les réunions.', 'Despite her age, Madame Pirotte comes to every meeting.', '/mal.ɡʁe sɔ̃.naʒ ma.dam pi.ʁɔt vjɛ̃ a tut le ʁe.y.njɔ̃/', 'mal-gray sohⁿ-NAZH | ma-dam pee-ROT vyehⁿ a toot lay ray-ü-NYOHⁿ', ['malgre', 'belgique']),
  sent(1455, 'Malgré les travaux, le café reste ouvert.', 'Despite the roadworks, the café is staying open.', '/mal.ɡʁe le tʁa.vo lə ka.fe ʁɛst u.vɛʁ/', 'mal-gray lay tra-VOH | luh ka-fay rehst oo-VEHR', ['malgre']),
  sent(1456, "Malgré mes efforts, je n'ai pas trouvé de place.", 'Despite my efforts, I did not find a parking space.', '/mal.ɡʁe me.ze.fɔʁ ʒə ne pa tʁu.ve də plas/', 'mal-gray may-zay-FOR | zhuh nay pa troo-vay duh PLASS', ['malgre'], FCVDR),
  sent(1457, 'Malgré prend un nom, bien que prend une phrase.', 'Malgré takes a noun, bien que takes a clause.', '/mal.ɡʁe pʁɑ̃.tœ̃ nɔ̃ bjɛ̃ kə pʁɑ̃.tyn fʁaz/', 'mal-gray prahⁿ-tuhⁿ NOHⁿ | byehⁿ kuh prahⁿ-tünn FRAZ', ['rule', 'malgre'], ['flashcard'],
    rule('« Malgré le froid », « bien qu’il fasse froid » : quelle différence ?', "Malgré est suivi d'un nom : le froid. Bien que est suivi d'un sujet et d'un verbe au subjonctif : il fasse froid. Même sens, autre forme.")),
  sent(1458, 'Malgré le prix, beaucoup de gens achètent ce vélo.', 'Despite the price, lots of people buy this bike.', '/mal.ɡʁe lə pʁi bo.ku də ʒɑ̃ a.ʃɛt sə ve.lo/', 'mal-gray luh PREE | boh-koo duh zhahⁿ a-sheht suh vay-LOH', ['malgre']),
  sent(1459, 'Il est venu malgré la neige.', 'He came in spite of the snow.', '/i.lɛ və.ny mal.ɡʁe la nɛʒ/', 'ee-leh vuh-nü mal-gray la NEHZH', ['malgre', 'fin']),
  sent(1460, 'Malgré la fatigue, elle a fini son rapport.', 'Despite her tiredness, she finished her report.', '/mal.ɡʁe la fa.tiɡ ɛ.la fi.ni sɔ̃ ʁa.pɔʁ/', 'mal-gray la fa-TEEG | eh-la fee-nee sohⁿ ra-POR', ['malgre']),
  sent(1461, 'En dépit des critiques, la ville garde son projet.', 'Despite the criticism, the city is keeping its project.', '/ɑ̃ de.pi de kʁi.tik la vil ɡaʁd sɔ̃ pʁɔ.ʒɛ/', 'ahⁿ day-pee day kree-TEEK | la veel gard sohⁿ pro-ZHEH', ['en-depit', 'ecrit']),
  phrase(1462, 'malgré', 'despite, in spite of', '/mal.ɡʁe/', 'mal-GRAY', ['malgre']),
  phrase(1463, 'en dépit de', 'in spite of (written)', '/ɑ̃ de.pi də/', 'ahⁿ day-PEE duh', ['en-depit', 'ecrit']),
  sent(1464, 'Malgré tout, je garde confiance.', 'All the same, I remain confident.', '/mal.ɡʁe tu ʒə ɡaʁd kɔ̃.fjɑ̃s/', 'mal-gray TOO | zhuh gard kohⁿ-FYAHⁿS', ['malgre-tout']),
  sent(1465, 'Malgré le bruit, je dors bien.', 'Despite the noise, I sleep well.', '/mal.ɡʁe lə bʁɥi ʒə dɔʁ bjɛ̃/', 'mal-gray luh BRWEE | zhuh dor BYEHⁿ', ['malgre'], FCVR,
    gap('___ le bruit, je dors bien. (despite)', 'Malgré, sans de : malgré le bruit. Jamais « malgré de ».')),
  sent(1466, 'Malgré le retard du train, nous sommes arrivés à temps.', 'Despite the train delay, we arrived on time.', '/mal.ɡʁe lə ʁə.taʁ dy tʁɛ̃ nu sɔm.za.ʁi.ve a tɑ̃/', 'mal-gray luh ruh-tar dü TREHⁿ | noo som-za-ree-vay a TAHⁿ', ['malgre']),
  sent(1467, 'Malgré ce problème, le projet avance.', 'Despite this problem, the project is moving forward.', '/mal.ɡʁe sə pʁɔ.blɛm lə pʁɔ.ʒɛ a.vɑ̃s/', 'mal-gray suh pro-BLEM | luh pro-zheh a-VAHⁿS', ['malgre']),
  sent(1468, 'Malgré les difficultés, ils ont ouvert leur restaurant à Dakar.', 'Despite the difficulties, they opened their restaurant in Dakar.', '/mal.ɡʁe le di.fi.kyl.te il.zɔ̃.tu.vɛʁ lœʁ ʁɛs.to.ʁɑ̃ a da.kaʁ/', 'mal-gray lay dee-fee-kül-TAY | eel-zohⁿ-too-vehr luhr rehs-to-rahⁿ a da-KAR', ['malgre', 'dakar'], FCVDR),
];

/* ── ACT 5 · POURTANT, CEPENDANT, NÉANMOINS, TOUTEFOIS ──────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1469, "Il habite loin. Pourtant, il n'est jamais en retard.", 'He lives far away. And yet he is never late.', '/i.la.bit lwɛ̃ puʁ.tɑ̃ il nɛ ʒa.mɛ.zɑ̃ ʁə.taʁ/', 'ee-la-beet LWEHⁿ | poor-TAHⁿ | eel neh zha-meh-zahⁿ ruh-TAR', ['pourtant', 'debut'], FCVDR),
  sent(1470, 'Elle travaille beaucoup, et pourtant elle trouve du temps pour ses amis.', 'She works a lot, and yet she finds time for her friends.', '/ɛl tʁa.vaj bo.ku e puʁ.tɑ̃ ɛl tʁuv dy tɑ̃ puʁ se.za.mi/', 'ehl tra-vahy boh-KOO | ay poor-tahⁿ ehl troov dü tahⁿ poor say-za-MEE', ['pourtant', 'et-pourtant']),
  sent(1471, "C'est pourtant simple.", 'And yet it is simple.', '/sɛ puʁ.tɑ̃ sɛ̃pl/', 'seh poor-tahⁿ SEHⁿPL', ['pourtant', 'milieu']),
  sent(1472, 'Le loyer a augmenté. Cependant, les locataires restent.', 'The rent has gone up. However, the tenants are staying.', '/lə lwa.je a ɔɡ.mɑ̃.te sə.pɑ̃.dɑ̃ le lɔ.ka.tɛʁ ʁɛst/', 'luh lwa-yay a og-mahⁿ-TAY | suh-pahⁿ-DAHⁿ | lay lo-ka-tehr REHST', ['cependant', 'ecrit', 'debut'], FCVDR),
  sent(1473, "La ville a promis des pistes cyclables. Néanmoins, rien n'a changé.", 'The city promised cycle lanes. Nevertheless, nothing has changed.', '/la vil a pʁɔ.mi de pist si.klabl ne.ɑ̃.mwɛ̃ ʁjɛ̃ na ʃɑ̃.ʒe/', 'la veel a pro-mee day peest see-KLABL | nay-ahⁿ-MWEHⁿ | ryehⁿ na shahⁿ-ZHAY', ['neanmoins', 'ecrit', 'debut']),
  sent(1474, 'Le musée est gratuit le dimanche. Toutefois, il faut réserver.', 'The museum is free on Sundays. However, you have to book.', '/lə my.ze ɛ ɡʁa.tɥi lə di.mɑ̃ʃ tut.fwa il fo ʁe.zɛʁ.ve/', 'luh mü-zay eh gra-twee luh dee-MAHⁿSH | toot-FWA | eel foh ray-zehr-VAY', ['toutefois', 'ecrit', 'debut'], FCVDR),
  sent(1475, 'Le projet est ambitieux ; il est cependant réaliste.', 'The project is ambitious; it is, however, realistic.', '/lə pʁɔ.ʒɛ ɛ.tɑ̃.bi.sjø i.lɛ sə.pɑ̃.dɑ̃ ʁe.a.list/', 'luh pro-zheh eh-tahⁿ-bee-SYEU | ee-leh suh-pahⁿ-dahⁿ ray-a-LEEST', ['cependant', 'ecrit', 'milieu']),
  sent(1476, "Pourtant se dit et s'écrit. Cependant, néanmoins et toutefois s'écrivent.", 'Pourtant is said and written. Cependant, néanmoins and toutefois are written.', '/puʁ.tɑ̃ sə di e se.kʁi sə.pɑ̃.dɑ̃ ne.ɑ̃.mwɛ̃ e tut.fwa se.kʁiv/', 'poor-TAHⁿ suh dee ay say-KREE | suh-pahⁿ-DAHⁿ nay-ahⁿ-MWEHⁿ ay toot-FWA say-KREEV', ['rule', 'registre'], ['flashcard'],
    rule('Dans un texto à un ami, lequel choisis-tu : pourtant ou néanmoins ?', "Pourtant : il va partout. Cependant, néanmoins et toutefois sont surtout écrits. À l'oral, tu dis plutôt mais ou pourtant.")),
  sent(1477, "Je l'ai prévenu. Il a pourtant oublié.", 'I warned him. And yet he forgot.', '/ʒə le pʁe.və.ny i.la puʁ.tɑ̃ u.bli.je/', 'zhuh lay pray-vuh-NÜ | ee-la poor-tahⁿ oo-blee-YAY', ['pourtant', 'milieu']),
  sent(1478, 'Les résultats sont bons. Ils restent néanmoins fragiles.', 'The results are good. They nevertheless remain fragile.', '/le ʁe.zyl.ta sɔ̃ bɔ̃ il ʁɛst ne.ɑ̃.mwɛ̃ fʁa.ʒil/', 'lay ray-zül-ta sohⁿ BOHⁿ | eel rehst nay-ahⁿ-mwehⁿ fra-ZHEEL', ['neanmoins', 'ecrit', 'milieu']),
  sent(1479, "La salle était petite ; toutefois, personne ne s'est plaint.", 'The hall was small; however, nobody complained.', '/la sal e.tɛ pə.tit tut.fwa pɛʁ.sɔn nə sɛ plɛ̃/', 'la sal ay-teh puh-TEET | toot-FWA | pehr-sonn nuh seh PLEHⁿ', ['toutefois', 'ecrit']),
  phrase(1481, 'cependant', 'however', '/sə.pɑ̃.dɑ̃/', 'suh-pahⁿ-DAHⁿ', ['cependant', 'ecrit']),
  phrase(1482, 'néanmoins', 'nevertheless', '/ne.ɑ̃.mwɛ̃/', 'nay-ahⁿ-MWEHⁿ', ['neanmoins', 'ecrit']),
  phrase(1483, 'toutefois', 'however, all the same', '/tut.fwa/', 'toot-FWA', ['toutefois', 'ecrit']),
  sent(1484, 'Tu as raison. Pourtant, je ne suis pas convaincu.', 'You are right. And yet I am not convinced.', '/ty a ʁɛ.zɔ̃ puʁ.tɑ̃ ʒə nə sɥi pa kɔ̃.vɛ̃.ky/', 'tü a reh-ZOHⁿ | poor-TAHⁿ | zhuh nuh swee pa kohⁿ-vehⁿ-KÜ', ['pourtant', 'oral'], FCVDR),
  sent(1485, "Les commerçants ont peur ; ils acceptent cependant d'essayer un été.", 'The shopkeepers are afraid; they agree, however, to try it for one summer.', '/le kɔ.mɛʁ.sɑ̃ ɔ̃ pœʁ il.zak.sɛpt sə.pɑ̃.dɑ̃ de.se.je œ̃.ne.te/', 'lay ko-mehr-sahⁿ ohⁿ PUHR | eel-zak-sehpt suh-pahⁿ-dahⁿ day-say-yay uhⁿ-nay-TAY', ['cependant', 'ecrit', 'milieu']),
  sent(1486, 'Pourtant, les chiffres sont clairs.', 'And yet the figures are clear.', '/puʁ.tɑ̃ le ʃifʁ sɔ̃ klɛʁ/', 'poor-TAHⁿ | lay sheefr sohⁿ KLEHR', ['pourtant', 'debut']),
];

/* ── ACT 6 · QUAND MÊME, TOUT DE MÊME ───────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1487, 'Il faisait froid, mais on est venus quand même.', 'It was cold, but we came anyway.', '/il fə.zɛ fʁwa mɛ.zɔ̃.nɛ və.ny kɑ̃ mɛm/', 'eel fuh-zeh FRWA | meh-zohⁿ-neh vuh-nü kahⁿ MEM', ['quand-meme', 'mais', 'fin'], FCVDR),
  sent(1488, 'Le projet coûte cher. Je vote pour quand même.', 'The project is expensive. I am voting for it anyway.', '/lə pʁɔ.ʒɛ kut ʃɛʁ ʒə vɔt puʁ kɑ̃ mɛm/', 'luh pro-zheh koot SHEHR | zhuh vot poor kahⁿ MEM', ['quand-meme', 'fin'], FCVDR),
  sent(1489, "C'est loin, mais j'y vais quand même.", 'It is far, but I am going anyway.', '/sɛ lwɛ̃ mɛ ʒi vɛ kɑ̃ mɛm/', 'seh LWEHⁿ | meh zhee veh kahⁿ MEM', ['quand-meme', 'fin']),
  sent(1490, 'Il pleut. Nous sortons tout de même.', 'It is raining. We are going out all the same.', '/il plø nu sɔʁ.tɔ̃ tut mɛm/', 'eel PLEU | noo sor-tohⁿ toot MEM', ['tout-de-meme', 'soigne']),
  sent(1491, 'Elle était malade ; elle a tout de même fini son travail.', 'She was ill; she finished her work all the same.', '/ɛ.le.tɛ ma.lad ɛ.la tut mɛm fi.ni sɔ̃ tʁa.vaj/', 'eh-lay-teh ma-LAD | eh-la toot mem fee-nee sohⁿ tra-VAHY', ['tout-de-meme', 'milieu']),
  sent(1492, 'Je suis quand même content du résultat.', 'I am pleased with the result all the same.', '/ʒə sɥi kɑ̃ mɛm kɔ̃.tɑ̃ dy ʁe.zyl.ta/', 'zhuh swee kahⁿ mem kohⁿ-tahⁿ dü ray-zül-TA', ['quand-meme', 'milieu']),
  sent(1493, 'Pourtant ouvre souvent la phrase. Quand même la ferme.', 'Pourtant often opens the sentence. Quand même closes it.', '/puʁ.tɑ̃ uvʁ su.vɑ̃ la fʁaz kɑ̃ mɛm la fɛʁm/', 'poor-TAHⁿ oovr soo-vahⁿ la FRAZ | kahⁿ mem la FEHRM', ['rule', 'quand-meme'], ['flashcard'],
    rule('« Il pleut. ... on sort. » Où vont pourtant et quand même ?', 'Pourtant se met souvent au début : pourtant, on sort. Quand même se met à la fin, ou juste après le verbe : on sort quand même.')),
  sent(1494, 'Il pleut. Pourtant, on sort.', 'It is raining. And yet we are going out.', '/il plø puʁ.tɑ̃ ɔ̃ sɔʁ/', 'eel PLEU | poor-TAHⁿ | ohⁿ SOR', ['pourtant', 'paire']),
  sent(1495, 'Il pleut, mais on sort quand même.', 'It is raining, but we are going out anyway.', '/il plø mɛ.zɔ̃ sɔʁ kɑ̃ mɛm/', 'eel PLEU | meh-zohⁿ sor kahⁿ MEM', ['quand-meme', 'paire'], FCVDR),
  sent(1496, 'Tu pourrais quand même dire bonjour.', 'You could at least say hello.', '/ty pu.ʁɛ kɑ̃ mɛm diʁ bɔ̃.ʒuʁ/', 'tü poo-reh kahⁿ mem deer bohⁿ-ZHOOR', ['quand-meme', 'reproche', 'oral']),
  sent(1497, 'De toute façon, je ne peux pas venir.', 'Anyway, I cannot come.', '/də tut fa.sɔ̃ ʒə nə pø pa və.niʁ/', 'duh toot fa-SOHⁿ | zhuh nuh peu pa vuh-NEER', ['de-toute-facon', 'piege']),
  sent(1498, "Le magasin était fermé, mais j'ai quand même trouvé du pain.", 'The shop was closed, but I still found some bread.', '/lə ma.ɡa.zɛ̃ e.tɛ fɛʁ.me mɛ ʒe kɑ̃ mɛm tʁu.ve dy pɛ̃/', 'luh ma-ga-zehⁿ ay-teh fehr-MAY | meh zhay kahⁿ mem troo-vay dü PEHⁿ', ['quand-meme', 'compose']),
  phrase(1499, 'quand même', 'anyway, still', '/kɑ̃ mɛm/', 'kahⁿ MEM', ['quand-meme']),
  phrase(1500, 'tout de même', 'all the same (more careful)', '/tut mɛm/', 'toot MEM', ['tout-de-meme', 'soigne']),
  sent(1501, 'Le train avait du retard, mais je suis arrivé à temps quand même.', 'The train was late, but I got there on time anyway.', '/lə tʁɛ̃ a.vɛ dy ʁə.taʁ mɛ ʒə sɥi.za.ʁi.ve a tɑ̃ kɑ̃ mɛm/', 'luh trehⁿ a-veh dü ruh-TAR | meh zhuh swee-za-ree-vay a tahⁿ kahⁿ MEM', ['quand-meme', 'compose']),
  sent(1502, "C'est long, mais je le lis quand même.", 'It is long, but I am reading it anyway.', '/sɛ lɔ̃ mɛ ʒə lə li kɑ̃ mɛm/', 'seh LOHⁿ | meh zhuh luh lee kahⁿ MEM', ['quand-meme', 'fin'], FCVR,
    gap('C’est long, mais je le lis ___. (anyway)', 'quand même, à la fin : le résultat ne change pas. « De toute façon » dirait autre chose.')),
];

/* ── ACT 7 · AVOIR BEAU ─────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1503, "J'ai beau essayer, ça ne marche pas.", 'However hard I try, it does not work.', '/ʒe bo e.se.je sa nə maʁʃ pa/', 'zhay boh ay-say-YAY | sa nuh marsh PA', ['avoir-beau'], FCVDR),
  sent(1504, "Tu as beau insister, je ne changerai pas d'avis.", 'However much you insist, I will not change my mind.', '/ty a bo ɛ̃.sis.te ʒə nə ʃɑ̃ʒ.ʁe pa da.vi/', 'tü a boh ehⁿ-sees-TAY | zhuh nuh shahⁿzh-ray pa da-VEE', ['avoir-beau'], FCVDR),
  sent(1505, 'Il a beau courir, il rate toujours le bus.', 'No matter how fast he runs, he always misses the bus.', '/i.la bo ku.ʁiʁ il ʁat tu.ʒuʁ lə bys/', 'ee-la boh koo-REER | eel rat too-zhoor luh BÜS', ['avoir-beau']),
  sent(1506, 'Nous avons beau chercher, nous ne trouvons pas les clés.', 'However hard we look, we cannot find the keys.', '/nu.za.vɔ̃ bo ʃɛʁ.ʃe nu nə tʁu.vɔ̃ pa le kle/', 'noo-za-vohⁿ boh shehr-SHAY | noo nuh troo-vohⁿ pa lay KLAY', ['avoir-beau']),
  sent(1507, "Elle avait beau expliquer, personne ne l'écoutait.", 'No matter how much she explained, nobody listened to her.', '/ɛ.la.vɛ bo ɛk.spli.ke pɛʁ.sɔn nə le.ku.tɛ/', 'eh-la-veh boh ehk-splee-KAY | pehr-sonn nuh lay-koo-TEH', ['avoir-beau', 'imparfait'], FCVDR),
  sent(1508, 'Ils ont beau dire, ce quartier est agréable.', 'Whatever they say, this neighbourhood is pleasant.', '/il.zɔ̃ bo diʁ sə kaʁ.tje ɛ.ta.ɡʁe.abl/', 'eel-zohⁿ boh DEER | suh kar-tyay eh-ta-gray-ABL', ['avoir-beau']),
  sent(1509, "Avoir beau + infinitif : l'effort ne change rien.", 'Avoir beau + infinitive: the effort changes nothing.', '/a.vwaʁ bo ɛ̃.fi.ni.tif le.fɔʁ nə ʃɑ̃ʒ ʁjɛ̃/', 'a-vwar boh ehⁿ-fee-nee-TEEF | lay-for nuh shahⁿzh RYEHⁿ', ['rule', 'avoir-beau'], ['flashcard'],
    rule('« J’ai beau essayer » : qu’est-ce qui se conjugue ?', "Avoir, et lui seul. Beau ne bouge jamais, et le verbe qui suit reste à l'infinitif : j'ai beau essayer, elle a beau essayer.")),
  sent(1510, "On a beau le répéter, les gens se garent devant l'école.", 'However often we say it, people park in front of the school.', '/ɔ̃.na bo lə ʁe.pe.te le ʒɑ̃ sə ɡaʁ də.vɑ̃ le.kɔl/', 'ohⁿ-na boh luh ray-pay-TAY | lay zhahⁿ suh gar duh-vahⁿ lay-KOL', ['avoir-beau']),
  sent(1511, 'Vous avez beau être pressés, respectez le feu rouge.', 'However much of a hurry you are in, respect the red light.', '/vu.za.ve bo ɛtʁ pʁɛ.se ʁɛs.pɛk.te lə fø ʁuʒ/', 'voo-za-vay boh etr preh-SAY | rehs-pehk-tay luh feu ROOZH', ['avoir-beau', 'imperatif']),
  sent(1512, "J'avais beau me dépêcher, j'étais toujours en retard.", 'No matter how much I hurried, I was always late.', '/ʒa.vɛ bo mə de.pɛ.ʃe ʒe.tɛ tu.ʒuʁ.zɑ̃ ʁə.taʁ/', 'zha-veh boh muh day-peh-SHAY | zhay-teh too-zhoor-zahⁿ ruh-TAR', ['avoir-beau', 'imparfait'], FCVDR),
  sent(1513, 'Elle a beau être petite, elle court très vite.', 'Small as she is, she runs very fast.', '/ɛ.la bo ɛtʁ pə.tit ɛl kuʁ tʁɛ vit/', 'eh-la boh etr puh-TEET | ehl koor treh VEET', ['avoir-beau', 'etre']),
  sent(1514, "J'ai beau lire la notice, je ne comprends rien.", 'However carefully I read the instructions, I understand nothing.', '/ʒe bo liʁ la nɔ.tis ʒə nə kɔ̃.pʁɑ̃ ʁjɛ̃/', 'zhay boh leer la no-TEES | zhuh nuh kohⁿ-prahⁿ RYEHⁿ', ['avoir-beau']),
  phrase(1515, 'avoir beau', 'however much, no matter how (+ infinitive)', '/a.vwaʁ bo/', 'a-vwar BOH', ['avoir-beau']),
  sent(1516, "Elle a beau crier, personne ne l'entend.", 'However loud she shouts, nobody hears her.', '/ɛ.la bo kʁi.je pɛʁ.sɔn nə lɑ̃.tɑ̃/', 'eh-la boh kree-YAY | pehr-sonn nuh lahⁿ-TAHⁿ', ['avoir-beau'], FCVR,
    gap('Elle ___ beau crier, personne ne l’entend.', 'a : c’est avoir qui se conjugue. Beau ne change jamais, et crier reste à l’infinitif.')),
  sent(1517, "Même si j'essaie, ça ne marche pas.", 'Even if I try, it does not work.', '/mɛm si ʒe.sɛ sa nə maʁʃ pa/', 'MEM see zhay-SEH | sa nuh marsh PA', ['meme-si', 'paire']),
  sent(1518, 'Il a beau faire beau, je reste à la maison.', 'Lovely as the weather is, I am staying at home.', '/i.la bo fɛʁ bo ʒə ʁɛ.sta la mɛ.zɔ̃/', 'ee-la boh fehr BOH | zhuh reh-sta la meh-ZOHⁿ', ['avoir-beau', 'jeu']),
  sent(1519, 'Tu auras beau protester, la décision est prise.', 'However much you protest, the decision has been made.', '/ty o.ʁa bo pʁɔ.tɛs.te la de.si.zjɔ̃ ɛ pʁiz/', 'tü oh-ra boh pro-tehs-TAY | la day-see-zyohⁿ eh PREEZ', ['avoir-beau', 'futur']),
  sent(1520, "Ousmane a beau vivre à Sherbrooke depuis dix ans, l'hiver le surprend toujours.", 'Ousmane may have lived in Sherbrooke for ten years, but winter still takes him by surprise.', '/us.man a bo vi.vʁa ʃɛʁ.bʁuk də.pɥi di.zɑ̃ li.vɛʁ lə syʁ.pʁɑ̃ tu.ʒuʁ/', 'oos-man a boh vee-vra shehr-BROOK duh-pwee dee-ZAHⁿ | lee-vehr luh sür-prahⁿ too-ZHOOR', ['avoir-beau', 'quebec'], FCVDR),
];

/* ── ACT 8 · ALORS QUE, TANDIS QUE ──────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1521, "À Dakar, il fait chaud en janvier, alors qu'à Sherbrooke, il fait moins vingt.", 'In Dakar it is hot in January, whereas in Sherbrooke it is minus twenty.', '/a da.kaʁ il fɛ ʃo ɑ̃ ʒɑ̃.vje a.lɔʁ ka ʃɛʁ.bʁuk il fɛ mwɛ̃ vɛ̃/', 'a da-KAR | eel feh shoh ahⁿ zhahⁿ-VYAY | a-lor ka shehr-BROOK | eel feh mwehⁿ VEHⁿ', ['alors-que', 'dakar', 'quebec'], FCVDR),
  sent(1522, "Mon frère adore l'hiver, alors que moi, je le déteste.", 'My brother loves winter, whereas I hate it.', '/mɔ̃ fʁɛʁ a.dɔʁ li.vɛʁ a.lɔʁ kə mwa ʒə lə de.tɛst/', 'mohⁿ frehr a-dor lee-VEHR | a-lor kuh MWA | zhuh luh day-TEHST', ['alors-que'], FCVDR),
  sent(1523, 'Tandis que la ville grandit, les villages se vident.', 'While the city grows, the villages empty.', '/tɑ̃.di kə la vil ɡʁɑ̃.di le vi.laʒ sə vid/', 'tahⁿ-dee kuh la veel grahⁿ-DEE | lay vee-lazh suh VEED', ['tandis-que', 'ecrit']),
  sent(1524, "Il est sorti sans manteau alors qu'il neigeait.", 'He went out without a coat even though it was snowing.', '/i.lɛ sɔʁ.ti sɑ̃ mɑ̃.to a.lɔʁ kil nɛ.ʒɛ/', 'ee-leh sor-tee sahⁿ mahⁿ-TOH | a-lor keel neh-ZHEH', ['alors-que', 'concession']),
  sent(1525, 'Tu dors, alors que tu as un examen demain.', 'You are sleeping, when you have an exam tomorrow.', '/ty dɔʁ a.lɔʁ kə ty a œ̃.nɛɡ.za.mɛ̃ də.mɛ̃/', 'tü DOR | a-lor kuh tü a uhⁿ-nehg-za-mehⁿ duh-MEHⁿ', ['alors-que', 'reproche']),
  sent(1526, 'Les loyers montent, tandis que les salaires restent les mêmes.', 'Rents are going up, while salaries stay the same.', '/le lwa.je mɔ̃t tɑ̃.di kə le sa.lɛʁ ʁɛst le mɛm/', 'lay lwa-yay MOHⁿT | tahⁿ-dee kuh lay sa-lehr rehst lay MEM', ['tandis-que'], FCVDR),
  sent(1527, 'Pendant que tu cuisines, je mets la table.', 'While you cook, I will set the table.', '/pɑ̃.dɑ̃ kə ty kɥi.zin ʒə mɛ la tabl/', 'pahⁿ-dahⁿ kuh tü kwee-ZEEN | zhuh meh la TABL', ['pendant-que', 'temps']),
  sent(1528, 'Alors que compare deux faits. Pendant que dit seulement le temps.', 'Alors que compares two facts. Pendant que only tells the time.', '/a.lɔʁ kə kɔ̃.paʁ dø fɛ pɑ̃.dɑ̃ kə di sœl.mɑ̃ lə tɑ̃/', 'a-lor kuh kohⁿ-par deu FEH | pahⁿ-dahⁿ kuh dee suhl-mahⁿ luh TAHⁿ', ['rule', 'alors-que'], ['flashcard'],
    rule('« Léa vient à vélo, ... monsieur Bélanger prend sa voiture » : alors que ou pendant que ?', "Alors que : tu compares deux faits, côte à côte. Pendant que dit seulement que deux choses se passent en même temps. Après les deux, l'indicatif.")),
  sent(1529, 'Léa vient à vélo, alors que monsieur Bélanger prend sa voiture.', 'Léa comes by bike, whereas Monsieur Bélanger takes his car.', '/le.a vjɛ̃ a ve.lo a.lɔʁ kə mə.sjø be.lɑ̃.ʒe pʁɑ̃ sa vwa.tyʁ/', 'lay-a vyehⁿ a vay-LOH | a-lor kuh muh-syeu bay-lahⁿ-zhay prahⁿ sa vwa-TÜR', ['alors-que']),
  sent(1530, 'Tandis que tu travailles, je fais les courses.', 'While you are working, I will do the shopping.', '/tɑ̃.di kə ty tʁa.vaj ʒə fɛ le kuʁs/', 'tahⁿ-dee kuh tü tra-VAHY | zhuh feh lay KOORS', ['tandis-que', 'temps']),
  sent(1531, "Certains veulent fermer la rue, alors que d'autres veulent l'élargir.", 'Some want to close the street, whereas others want to widen it.', '/sɛʁ.tɛ̃ vœl fɛʁ.me la ʁy a.lɔʁ kə dotʁ vœl le.laʁ.ʒiʁ/', 'sehr-tehⁿ vuhl fehr-may la RÜ | a-lor kuh dohtr vuhl lay-lar-ZHEER', ['alors-que', 'scene'], FCVDR),
  phrase(1532, 'alors que', 'whereas, even though', '/a.lɔʁ kə/', 'a-lor KUH', ['alors-que']),
  phrase(1533, 'tandis que', 'whereas, while', '/tɑ̃.di kə/', 'tahⁿ-dee KUH', ['tandis-que']),
  sent(1534, "Au Québec, on dit souper, alors qu'en France, on dit dîner.", 'In Québec people say souper for the evening meal, whereas in France they say dîner.', '/o ke.bɛk ɔ̃ di su.pe a.lɔʁ kɑ̃ fʁɑ̃s ɔ̃ di di.ne/', 'oh kay-BEHK | ohⁿ dee soo-PAY | a-lor kahⁿ FRAHⁿS | ohⁿ dee dee-NAY', ['alors-que', 'quebec']),
  sent(1535, "Elle a accepté alors qu'elle n'avait pas le temps.", 'She agreed even though she did not have the time.', '/ɛ.la ak.sɛp.te a.lɔʁ kɛl na.vɛ pa lə tɑ̃/', 'eh-la ak-sehp-TAY | a-lor kehl na-veh pa luh TAHⁿ', ['alors-que', 'concession']),
  sent(1536, 'Mon frère aime le froid, alors que moi, je préfère la chaleur.', 'My brother likes the cold, whereas I prefer the heat.', '/mɔ̃ fʁɛʁ ɛm lə fʁwa a.lɔʁ kə mwa ʒə pʁe.fɛʁ la ʃa.lœʁ/', 'mohⁿ frehr em luh FRWA | a-lor kuh MWA | zhuh pray-fehr la sha-LUHR', ['alors-que'], FCVR,
    gap('Mon frère aime le froid, ___ moi, je préfère la chaleur. (whereas)', 'alors que : deux faits côte à côte, et l’indicatif après.')),
  sent(1537, 'Les étudiants votent pour, tandis que les aînés hésitent.', 'The students are voting for it, while older people are hesitating.', '/le.ze.ty.djɑ̃ vɔt puʁ tɑ̃.di kə le.ze.ne e.zit/', 'lay-zay-tü-dyahⁿ vot POOR | tahⁿ-dee kuh lay-zay-nay ay-ZEET', ['tandis-que', 'quebec']),
];

/* ── ACT 9 · AU LIEU DE, PAR CONTRE, EN REVANCHE, AU CONTRAIRE ──────────── */

export const ACT9_ROWS: Row[] = [
  sent(1538, 'Au lieu de prendre la voiture, prends le bus.', 'Instead of taking the car, take the bus.', '/o ljø də pʁɑ̃dʁ la vwa.tyʁ pʁɑ̃ lə bys/', 'oh lyeu duh prahⁿdr la vwa-TÜR | prahⁿ luh BÜS', ['au-lieu-de', 'infinitif'], FCVDR),
  sent(1539, 'Au lieu de se plaindre, ils ont proposé une solution.', 'Instead of complaining, they proposed a solution.', '/o ljø də sə plɛ̃dʁ il.zɔ̃ pʁɔ.po.ze yn sɔ.ly.sjɔ̃/', 'oh lyeu duh suh PLEHⁿDR | eel-zohⁿ pro-po-zay ünn so-lü-SYOHⁿ', ['au-lieu-de', 'infinitif'], FCVDR),
  sent(1540, 'Il regarde la télé au lieu de faire ses devoirs.', 'He watches TV instead of doing his homework.', '/il ʁə.ɡaʁd la te.le o ljø də fɛʁ se də.vwaʁ/', 'eel ruh-gard la tay-LAY | oh lyeu duh fehr say duh-VWAR', ['au-lieu-de', 'infinitif']),
  sent(1541, "Je prendrai un thé au lieu d'un café.", 'I will have a tea instead of a coffee.', '/ʒə pʁɑ̃.dʁe œ̃ te o ljø dœ̃ ka.fe/', 'zhuh prahⁿ-dray uhⁿ TAY | oh lyeu duhⁿ ka-FAY', ['au-lieu-de', 'nom']),
  sent(1542, "Le quartier est calme. Par contre, il n'y a pas de commerces.", 'The neighbourhood is quiet. On the other hand, there are no shops.', '/lə kaʁ.tje ɛ kalm paʁ kɔ̃tʁ il nja pa də kɔ.mɛʁs/', 'luh kar-tyay eh KALM | par KOHⁿTR | eel nya pa duh ko-MEHRS', ['par-contre', 'oral'], FCVDR),
  sent(1543, "L'appartement est petit ; en revanche, il est très lumineux.", 'The flat is small; on the other hand, it is very bright.', '/la.paʁ.tə.mɑ̃ ɛ pə.ti ɑ̃ ʁə.vɑ̃ʃ i.lɛ tʁɛ ly.mi.nø/', 'la-par-tuh-mahⁿ eh puh-TEE | ahⁿ ruh-VAHⁿSH | ee-leh treh lü-mee-NEU', ['en-revanche', 'ecrit'], FCVDR),
  sent(1544, 'Je ne suis pas fatigué, au contraire.', 'I am not tired, quite the opposite.', '/ʒə nə sɥi pa fa.ti.ɡe o kɔ̃.tʁɛʁ/', 'zhuh nuh swee pa fa-tee-GAY | oh kohⁿ-TREHR', ['au-contraire']),
  sent(1545, "Ce n'est pas trop cher. Au contraire, c'est une bonne affaire.", 'It is not too expensive. On the contrary, it is a bargain.', '/sə nɛ pa tʁo ʃɛʁ o kɔ̃.tʁɛʁ sɛ.tyn bɔ.na.fɛʁ/', 'suh neh pa troh SHEHR | oh kohⁿ-TREHR | seh-tünn bo-na-FEHR', ['au-contraire'], FCVDR),
  sent(1546, 'Par contre garde les deux faits. Au contraire efface le premier.', 'Par contre keeps both facts. Au contraire wipes out the first.', '/paʁ kɔ̃tʁ ɡaʁd le dø fɛ o kɔ̃.tʁɛʁ e.fas lə pʁə.mje/', 'par kohⁿtr gard lay deu FEH | oh kohⁿ-trehr ay-fass luh pruh-MYAY', ['rule', 'au-contraire'], ['flashcard'],
    rule('« La rue est calme. ... il y a peu de commerces. » Par contre ou au contraire ?', 'Par contre : les deux faits restent vrais. Au contraire dirait que la rue n’est pas calme. Il vient surtout après une phrase négative.')),
  sent(1547, 'Le centre est cher, par contre la banlieue est abordable.', 'The centre is expensive; the suburbs, on the other hand, are affordable.', '/lə sɑ̃.tʁɛ ʃɛʁ paʁ kɔ̃tʁ la bɑ̃.ljø ɛ.ta.bɔʁ.dabl/', 'luh sahⁿ-treh SHEHR | par KOHⁿTR | la bahⁿ-lyeu eh-ta-bor-DABL', ['par-contre', 'oral']),
  sent(1548, "La mairie a peu d'argent ; en revanche, elle a beaucoup d'idées.", 'The town hall has little money; on the other hand, it has lots of ideas.', '/la mɛ.ʁi a pø daʁ.ʒɑ̃ ɑ̃ ʁə.vɑ̃ʃ ɛ.la bo.ku di.de/', 'la meh-ree a peu dar-ZHAHⁿ | ahⁿ ruh-VAHⁿSH | eh-la boh-koo dee-DAY', ['en-revanche', 'ecrit']),
  sent(1549, "Au lieu d'attendre, envoie un courriel.", 'Instead of waiting, send an email.', '/o ljø da.tɑ̃dʁ ɑ̃.vwa œ̃ ku.ʁjɛl/', 'oh lyeu da-TAHⁿDR | ahⁿ-vwa uhⁿ koo-RYEHL', ['au-lieu-de', 'quebec']),
  sent(1550, "Il n'a pas perdu d'argent ; au contraire, il en a gagné.", 'He did not lose money; on the contrary, he made some.', '/il na pa pɛʁ.dy daʁ.ʒɑ̃ o kɔ̃.tʁɛʁ il ɑ̃.na ɡa.ɲe/', 'eel na pa pehr-dü dar-ZHAHⁿ | oh kohⁿ-TREHR | eel ahⁿ-na ga-NYAY', ['au-contraire']),
  phrase(1551, 'au lieu de', 'instead of', '/o ljø də/', 'oh lyeu DUH', ['au-lieu-de']),
  phrase(1552, 'par contre', 'on the other hand (spoken)', '/paʁ kɔ̃tʁ/', 'par KOHⁿTR', ['par-contre', 'oral']),
  phrase(1553, 'en revanche', 'on the other hand (written)', '/ɑ̃ ʁə.vɑ̃ʃ/', 'ahⁿ ruh-VAHⁿSH', ['en-revanche', 'ecrit']),
  phrase(1554, 'au contraire', 'on the contrary', '/o kɔ̃.tʁɛʁ/', 'oh kohⁿ-TREHR', ['au-contraire']),
  sent(1555, 'Au lieu de râler, aide-moi.', 'Instead of grumbling, help me.', '/o ljø də ʁɑ.le ɛd.mwa/', 'oh lyeu duh rah-LAY | ehd-MWA', ['au-lieu-de', 'oral'], FCVR,
    gap('Au lieu ___ râler, aide-moi. (instead of)', 'de : au lieu de + infinitif. Râler reste à l’infinitif.')),
];

/* ── ACT 10 · LA CARTE DES OUTILS ───────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1556, CARTE_RULE, CARTE_RULE_EN, '/ʃwa.zi lə mo pɥi ʁə.ɡaʁd sə kil pɔʁt/', 'shwa-zee luh MOH | pwee ruh-gard suh keel PORT', ['rule', 'carte'], ['flashcard'],
    rule('Cinq outils, cinq formes : lesquelles ?', "Même si, alors que : une phrase à l'indicatif. Bien que, quoique : le subjonctif. Malgré : un nom. Avoir beau, au lieu de : un infinitif. Pourtant, quand même : une phrase entière.")),
  sent(1557, 'Il pleut, mais on sort.', 'It is raining, but we are going out.', '/il plø mɛ.zɔ̃ sɔʁ/', 'eel PLEU | meh-zohⁿ SOR', ['carte', 'mais']),
  sent(1558, "Même s'il pleut, on sort.", 'Even though it is raining, we are going out.', '/mɛm sil plø ɔ̃ sɔʁ/', 'MEM seel PLEU | ohⁿ SOR', ['carte', 'indicatif'], FCVDR),
  sent(1559, "Bien qu'il pleuve, on sort.", 'Although it is raining, we are going out.', '/bjɛ̃ kil plœv ɔ̃ sɔʁ/', 'byehⁿ keel PLUHV | ohⁿ SOR', ['carte', 'subjonctif'], FCVDR),
  sent(1560, 'Malgré la pluie, on sort.', 'Despite the rain, we are going out.', '/mal.ɡʁe la plɥi ɔ̃ sɔʁ/', 'mal-gray la PLWEE | ohⁿ SOR', ['carte', 'nom'], FCVDR),
  sent(1561, "Malgré ses conseils, j'ai signé le bail.", 'Despite his advice, I signed the lease.', '/mal.ɡʁe se kɔ̃.sɛj ʒe si.ɲe lə baj/', 'mal-gray say kohⁿ-SEHY | zhay see-nyay luh BAHY', ['carte', 'despite']),
  sent(1562, "Même si c'est vrai, ce n'est pas une raison.", 'Even if it is true, it is not a reason.', '/mɛm si sɛ vʁɛ sə nɛ pa.zyn ʁɛ.zɔ̃/', 'MEM see seh VREH | suh neh pa-zünn reh-ZOHⁿ', ['carte', 'even-if']),
  sent(1563, "J'aime bien mon travail, même si le salaire est bas.", 'I like my job, although the pay is low.', '/ʒɛm bjɛ̃ mɔ̃ tʁa.vaj mɛm si lə sa.lɛ.ʁɛ ba/', 'zhem byehⁿ mohⁿ tra-VAHY | MEM see luh sa-leh-reh BA', ['carte', 'although', 'oral'], FCVDR),
  sent(1564, "Il fait beau, alors qu'on annonçait de la pluie.", 'It is sunny, although rain was forecast.', '/il fɛ bo a.lɔʁ kɔ̃.na.nɔ̃.sɛ də la plɥi/', 'eel feh BOH | a-lor kohⁿ-na-nohⁿ-seh duh la PLWEE', ['carte', 'although']),
  sent(1565, "Je suis fatigué. Pourtant, j'ai bien dormi.", 'I am tired, although I slept well.', '/ʒə sɥi fa.ti.ɡe puʁ.tɑ̃ ʒe bjɛ̃ dɔʁ.mi/', 'zhuh swee fa-tee-GAY | poor-TAHⁿ | zhay byehⁿ dor-MEE', ['carte', 'although']),
  sent(1566, "Bien qu'il soit nouveau, il connaît bien le dossier.", 'Although he is new, he knows the file well.', '/bjɛ̃ kil swa nu.vo il kɔ.nɛ bjɛ̃ lə dɔ.sje/', 'byehⁿ keel swa noo-VOH | eel ko-neh byehⁿ luh do-SYAY', ['carte', 'although', 'subjonctif', 'ecrit']),
  sent(1567, "Ça coûte cher, par contre c'est solide.", 'It costs a lot; on the other hand, it is solid.', '/sa kut ʃɛʁ paʁ kɔ̃tʁ sɛ sɔ.lid/', 'sa koot SHEHR | par KOHⁿTR | seh so-LEED', ['carte', 'oral']),
  sent(1568, 'Le coût est élevé ; en revanche, la qualité est remarquable.', 'The cost is high; on the other hand, the quality is remarkable.', '/lə ku ɛ.tel.ve ɑ̃ ʁə.vɑ̃ʃ la ka.li.te ɛ ʁə.maʁ.kabl/', 'luh koo eh-tayl-VAY | ahⁿ ruh-VAHⁿSH | la ka-lee-tay eh ruh-mar-KABL', ['carte', 'ecrit']),
  sent(1569, 'Au lieu de choisir, il attend.', 'Instead of choosing, he waits.', '/o ljø də ʃwa.ziʁ i.la.tɑ̃/', 'oh lyeu duh shwa-ZEER | ee-la-TAHⁿ', ['carte', 'infinitif']),
  sent(1570, "Même s'il faisait beau, je resterais ici.", 'Even if the weather were fine, I would stay here.', '/mɛm sil fə.zɛ bo ʒə ʁɛs.tə.ʁɛ.zi.si/', 'MEM seel fuh-zeh BOH | zhuh rehs-tuh-reh-zee-SEE', ['carte', 'hypothese']),
];

/* ── ACT 11 · UN AVIS ÉQUILIBRÉ ─────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1571, "D'un côté, la rue piétonne rend le quartier plus agréable.", 'On the one hand, the pedestrian street makes the neighbourhood more pleasant.', '/dœ̃ ko.te la ʁy pje.tɔn ʁɑ̃ lə kaʁ.tje ply.za.ɡʁe.abl/', 'duhⁿ ko-TAY | la rü pyay-tonn rahⁿ luh kar-tyay plü-za-gray-ABL', ['avis', 'cote'], FCVDR),
  sent(1572, "De l'autre, elle complique la vie des commerçants.", 'On the other, it makes life harder for the shopkeepers.', '/də lotʁ ɛl kɔ̃.plik la vi de kɔ.mɛʁ.sɑ̃/', 'duh LOHTR | ehl kohⁿ-pleek la vee day ko-mehr-SAHⁿ', ['avis', 'cote']),
  sent(1573, 'Certes, le projet coûte cher, mais il profite à tout le monde.', 'Admittedly, the project is expensive, but it benefits everyone.', '/sɛʁt lə pʁɔ.ʒɛ kut ʃɛʁ mɛ.zil pʁɔ.fi.ta tu lə mɔ̃d/', 'SEHRT | luh pro-zheh koot SHEHR | meh-zeel pro-fee-ta too luh MOHⁿD', ['avis', 'certes'], FCVDR),
  sent(1574, 'Je suis donc plutôt pour, avec une condition.', 'So I am rather in favour, with one condition.', '/ʒə sɥi dɔ̃k ply.to puʁ a.vɛk yn kɔ̃.di.sjɔ̃/', 'zhuh swee dohⁿk plü-toh POOR | a-vehk ünn kohⁿ-dee-SYOHⁿ', ['avis', 'conclusion']),
  sent(1575, 'Bien que je comprenne les commerçants, je vote pour.', 'Although I understand the shopkeepers, I am voting for it.', '/bjɛ̃ kə ʒə kɔ̃.pʁɛn le kɔ.mɛʁ.sɑ̃ ʒə vɔt puʁ/', 'byehⁿ kuh zhuh kohⁿ-PRENN lay ko-mehr-SAHⁿ | zhuh vot POOR', ['avis', 'bien-que', 'subjonctif']),
  sent(1576, "Malgré ces inquiétudes, l'essai d'un été me semble raisonnable.", 'Despite these worries, a one-summer trial seems reasonable to me.', '/mal.ɡʁe se.zɛ̃.kje.tyd le.sɛ dœ̃.ne.te mə sɑ̃bl ʁɛ.zɔ.nabl/', 'mal-gray say-zehⁿ-kyay-TÜD | lay-seh duhⁿ-nay-TAY | muh sahⁿbl reh-zo-NABL', ['avis', 'malgre'], FCVDR),
  sent(1577, "Au lieu de fermer la rue toute l'année, on pourrait essayer un été.", 'Instead of closing the street all year, we could try it for one summer.', '/o ljø də fɛʁ.me la ʁy tut la.ne ɔ̃ pu.ʁɛ.te.se.je œ̃.ne.te/', 'oh lyeu duh fehr-may la rü toot la-NAY | ohⁿ poo-reh-tay-say-yay uhⁿ-nay-TAY', ['avis', 'au-lieu-de'], FCVDR),
  sent(1578, 'Les familles y gagnent, alors que les livreurs y perdent.', 'Families gain from it, whereas delivery drivers lose out.', '/le fa.mij i ɡaɲ a.lɔʁ kə le li.vʁœʁ i pɛʁd/', 'lay fa-meey ee GANY | a-lor kuh lay lee-vruhr ee PEHRD', ['avis', 'alors-que']),
  sent(1579, "On a beau parler des chiffres, c'est l'expérience qui décidera.", 'Talk about the figures all you like; experience will decide.', '/ɔ̃.na bo paʁ.le de ʃifʁ sɛ lɛk.spe.ʁjɑ̃s ki de.si.də.ʁa/', 'ohⁿ-na boh par-lay day SHEEFR | seh lehk-spay-ryahⁿs kee day-see-duh-RA', ['avis', 'avoir-beau']),
  sent(1580, 'Un avis équilibré pèse le pour et le contre, puis il tranche.', 'A balanced opinion weighs the pros and cons, then comes down on one side.', '/œ̃.na.vi e.ki.li.bʁe pɛz lə puʁ e lə kɔ̃tʁ pɥi il tʁɑ̃ʃ/', 'uhⁿ-na-vee ay-kee-lee-BRAY | pehz luh poor ay luh KOHⁿTR | pwee eel TRAHⁿSH', ['rule', 'avis'], ['flashcard'],
    rule('Qu’est-ce qui rend un avis équilibré ?', "Il donne les deux côtés. Il reconnaît l'argument de l'autre, avec certes ou bien que. Puis il dit où il se place, et pourquoi.")),
  phrase(1581, 'certes', 'admittedly, of course', '/sɛʁt/', 'SEHRT', ['avis', 'certes']),
  phrase(1582, "d'un côté, de l'autre", 'on the one hand, on the other', '/dœ̃ ko.te də lotʁ/', 'duhⁿ ko-TAY | duh LOHTR', ['avis', 'cote']),
  sent(1583, "À mon avis, les avantages l'emportent sur les inconvénients.", 'In my view, the advantages outweigh the drawbacks.', '/a mɔ̃.na.vi le.za.vɑ̃.taʒ lɑ̃.pɔʁt syʁ le.zɛ̃.kɔ̃.ve.njɑ̃/', 'a mohⁿ-na-VEE | lay-za-vahⁿ-tazh lahⁿ-port sür lay-zehⁿ-kohⁿ-vay-NYAHⁿ', ['avis', 'conclusion'], FCVDR),
  sent(1584, 'Je reste toutefois prudent.', 'I remain cautious, however.', '/ʒə ʁɛst tut.fwa pʁy.dɑ̃/', 'zhuh rehst toot-fwa prü-DAHⁿ', ['avis', 'toutefois']),
  sent(1585, "Même si le projet n'est pas parfait, il mérite un essai.", 'Even if the project is not perfect, it deserves a try.', '/mɛm si lə pʁɔ.ʒɛ nɛ pa paʁ.fɛ il me.ʁi.tœ̃.ne.sɛ/', 'MEM see luh pro-zheh neh pa par-FEH | eel may-ree-tuhⁿ-nay-SEH', ['avis', 'meme-si'], FCVDR),
  phrase(1586, "l'emporter sur", 'to outweigh', '/lɑ̃.pɔʁ.te syʁ/', 'lahⁿ-por-tay SÜR', ['avis', 'conclusion']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS AND THEIR KEYS
 *
 *  All three readings live here so the reading and the quiz cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a resident's letter to the neighbourhood newsletter, Sherbrooke.
 *  About 150 words, and every tool of the lesson already at work in it. */
export const COURRIER_TEXT =
  "Rue des Érables piétonne : mon avis. J'habite la rue depuis vingt ans, depuis mon arrivée de Liège. Jeudi, il pleuvait, et pourtant la salle de la consultation était pleine. Bien que le projet soit coûteux, je vote pour. Le samedi, les autres rues sont pleines, alors que la nôtre est vide : les voitures passent vite et personne ne s'arrête. Même si les commerces perdent quelques clients au début, les familles reviendront. Je comprends pourtant monsieur Bélanger, le boulanger : il reçoit sa farine tous les matins. Au lieu de fermer la rue toute la journée, on pourrait la fermer de onze heures à vingt heures. Malgré le bruit des terrasses, les voisins semblent d'accord. J'ai beau chercher, je ne vois pas de meilleure solution. Par contre, il nous faudra des bancs et de l'ombre. Le projet n'est pas parfait. Je le soutiens quand même. Jeanne Pirotte";

/** The linking words of COURRIER_TEXT, in order. The quiz is checked
 *  against this list: nine different tools, pourtant twice. */
export const COURRIER_OUTILS = [
  'pourtant', 'bien que', 'alors que', 'même si', 'pourtant', 'au lieu de',
  'malgré', 'avoir beau', 'par contre', 'quand même',
] as const;

/** Act 5: a short news article, written register. About 140 words. */
export const ARTICLE_TEXT =
  "Budget participatif : les habitants ont choisi. Cette année, la ville de Liège a laissé ses habitants choisir quatre projets de quartier. Plus de six mille personnes ont voté, un chiffre record. Le jardin partagé de Saint-Léonard arrive en tête. Il ne sera cependant pas prêt avant le printemps : le terrain doit d'abord être nettoyé. Le deuxième projet, une piste cyclable le long de la Meuse, a reçu beaucoup de voix. Son coût reste néanmoins élevé, et la ville cherche encore des partenaires. Les jeunes ont peu voté. Pourtant, deux projets les concernent directement : un terrain de basket et un local de musique. Les organisateurs restent toutefois optimistes. « Le vote en ligne a bien marché, explique une responsable. L'an prochain, nous irons aussi dans les écoles. »";

/** Act 11: the model the learner imitates in the task. A parent's balanced
 *  opinion in the school newsletter, Sherbrooke. About 150 words. */
export const MODELE_TEXT =
  "Des voitures devant l'école : mon avis. Chaque matin, une cinquantaine de voitures s'arrêtent devant l'école Sainte-Anne. D'un côté, beaucoup de parents viennent de loin et n'ont pas d'autre solution. Certes, fermer la rue le matin leur compliquerait la vie. De l'autre, la rue est dangereuse : les enfants traversent entre les voitures, alors que le trottoir est étroit. On a beau installer des panneaux, rien ne change. Bien que je comprenne les parents pressés, je suis pour la fermeture de la rue de huit heures à huit heures et demie. Au lieu de se garer devant la porte, les parents pourraient laisser les enfants au parc, à deux cents mètres. Même si cela demande cinq minutes de plus, la sécurité des enfants passe avant. Malgré ce changement, l'école restera facile d'accès. Ousmane Diallo, parent d'élève";

/** The moves the model makes, in order, for the plan and the task checklist. */
export const MODELE_MOVES = [
  'la situation : quoi, où',
  "un côté, puis l'autre (d'un côté, certes, de l'autre)",
  "ta place, dans la phrase principale (bien que ..., je suis pour)",
  'une solution (au lieu de) et une réserve (même si, malgré)',
] as const;

/** The five grammatical types of the map, in the order act 10 teaches them.
 *  The sheet prints this list and the task counts types against it. */
export const TYPES = [
  "une phrase à l'indicatif : même si, alors que, tandis que",
  'une phrase au subjonctif : bien que, quoique',
  'un nom : malgré, en dépit de',
  'un infinitif : avoir beau, au lieu de',
  'une phrase entière : mais, pourtant, cependant, quand même, par contre, en revanche, au contraire',
] as const;
