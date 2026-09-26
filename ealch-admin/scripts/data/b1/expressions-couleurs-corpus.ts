// b1.29.l1 « Les expressions de couleur » — the authored corpus, the imports
// and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md, in the VOCAB SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md
// §2 (an act is built around a FAMILY of expressions in use).
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
//   THE IDIOMS WHOSE KEY IMAGE IS A COLOUR. Fifty-eight of them, grouped by
//   the FEELING or SITUATION they name (never by colour), at most seven per
//   act:
//
//     act 1   the method: broyer du noir, avoir une peur bleue, voir rouge,
//             passer une nuit blanche (one of each kind: another colour in
//             English, a colour only in French, the same colour, no colour)
//     act 2   fear and cold (5)
//     act 3   anger (5), plus the agreement point
//     act 4   embarrassment (4)
//     act 5   envy and health (5, one of them France first)
//     act 6   money and the black market (5)
//     act 7   white: the night, the blank, the fake (5, one of them France)
//     act 8   optimism, pessimism and naivety (7)
//     act 9   permission and approval (6)
//     act 10  bad luck and trouble (5)
//     act 11  new or gifted (7: one France, one Québec)
//     act 12  an anecdote that uses five or six of them
//
//   WHO OWNS WHICH IDIOM ACROSS b1.27 / b1.28 / b1.29 (decided up front): an
//   idiom belongs to the lesson of its KEY IMAGE. Here it is a colour.
//   Assigned here by name: « rire jaune », « avoir une peur bleue », « rouge
//   comme une tomate ». Assigned elsewhere and NOT taught here: « avoir les
//   yeux plus gros que le ventre » (b1.27); « donner sa langue au chat »,
//   « avoir un chat dans la gorge », « être une poule mouillée » (b1.28).
//   Checked against both sibling corpora on 2026-09-26: no idiom is taught
//   twice. Two taught items carry a body word as décor and keep the colour
//   as the image: « avoir le rouge aux joues » (act 4) and « avoir la main
//   verte / le pouce vert » (act 11, raised as an open question because
//   b1.27 did not take it). One carries a food word as décor: « rouge comme
//   une tomate », assigned here by name. Left out on purpose because the key
//   image is an animal: « le mouton noir », « montrer patte blanche », « un
//   blanc-bec », « rouge comme une écrevisse ».
//
//   NOT OWNED: the colour words themselves and their agreement, which are
//   a1.13's (« lesson N in A1 », resolved by unitRef) and a2.03's (adjective
//   agreement): cited and imported, never re-taught; the passé composé and
//   imparfait of the anecdote, b1.03's; the subjunctive, b1.14 to b1.16's,
//   kept out of every authored French string.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `expressions-imagees` (« Les expressions imagées », domain
//     fondations, levelRange b1-b2, sub-themes le corps, les animaux et la
//     nourriture, les couleurs) WAS CREATED IN POSTGRES ON 2026-09-26 for
//     b1.27, b1.28 and b1.29. IT EXISTS IN POSTGRES ONLY: it is NOT in
//     `seed.json`'s theme list and arrives there at the next publish. So a
//     readiness run WILL warn that the theme is not in the seed's theme list.
//     THAT WARNING IS EXPECTED AND IS NOT A DEFECT. Probed live 2026-09-26
//     (read-only): the theme holds ZERO items at any level.
//
//  2. ID BLOCK: this lesson owns `.1400`-`.1599` AND NOTHING ELSE. b1.27
//     (body) owns `.1000`-`.1199` and b1.28 (animals and food)
//     `.1200`-`.1399`, written in parallel. `.001`-`.999` stays free for a
//     future published import. Used here: `.1400`-`.1589`, one contiguous run
//     in twelve act blocks. 190 rows.
//
//  3. THE SEED HOLDS NONE OF THESE IDIOMS. Probed 2026-09-26 across every
//     seed item for all 58: zero hits (the one « un bleu » row is the bruise,
//     fr.a2.corps.008, reused in act 5). POSTGRES holds six published rows
//     the seed does not carry; they cannot be named (src() resolves against
//     the seed), so this lesson authors twins, listed in DB_ONLY_TWINS below.
//     Dedupe at import (build log open item).
//
//  4. THE COLOUR WORDS come from a1.13 « Les couleurs » (the `fr.sons.
//     couleurs.*` rows its lesson releases) and a1.13's agreement sentences;
//     both are imported where an act's colour first needs them, and every
//     reused id was read from seed.json on 2026-09-26 with its French in the
//     trailing comment. a1.13's reframe (« Colours agree. Things that became
//     colours do not. ») and a2.03's are RE-EXPORTED from their own files
//     below, never retyped.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: ONE.
//     « poèmes » is `po-EMM` (row 1527), because `EHM` at a word end trips
//     the digraph rule in hasPlainNasal although the m is a real consonant.
//     « jaune » is `ZHON`, the seed's own respelling (fr.sons.couleurs.004),
//     which passes because the French has « une ». « même » is MEM, the
//     house respelling. Measured 2026-09-26 with hasPlainNasalFor over all
//     190 rows: zero flagged. No U+203F tie anywhere, in a respelling or an
//     IPA field.
//
//  6. REGISTER is a first-class field on every row (`register`: familier or
//     courant), as the vocab shape requires on every card. No row is
//     soutenu. Regional rows carry the tag `quebec` or `france`.
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
  id: 'b1.29',
  seq: 29,
  title: 'Colour Expressions',
  sub: 'Les expressions de couleur',
  canDo: 'Can understand and use about sixty frequent French idioms built on a colour, knowing each one\'s image, meaning, register and English equivalent (which often has another colour or none), keep the colour\'s agreement right inside the idiom, and tell a short anecdote that uses several of them naturally',
  prereqUnitIds: ['b1.03'],
} as const;

export const LESSON_ID = 'b1.29.l1';
export const THEME = 'expressions-imagees';
export const LEVEL = 'b1' as const;

/** ONE block, by the house rule for a theme with no published import yet. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label, resolved through
 *  `unitRef`, never typed. b1.* units are not in the seed yet, so they are
 *  labelled in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const COULEURS_UNIT = 'a1.13';
export const ACCORD_UNIT = 'a2.03';
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_IMPARFAIT_UNIT = 'b1.03';
export const CORPS_B1_UNIT = 'b1.27';
export const ANIMAUX_UNIT = 'b1.28';
export const REGISTRE_UNIT = 'b1.25';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23, 'b1.24': 24,
  'b1.25': 25, 'b1.26': 26, 'b1.27': 27, 'b1.28': 28, 'b1.29': 29, 'b1.30': 30,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const COULEURS_REF = unitRef(COULEURS_UNIT);
export const ACCORD_REF = unitRef(ACCORD_UNIT);
export const PC_IMPARFAIT_REF = refFr(PC_IMPARFAIT_UNIT);
export const CORPS_B1_REF = refFr(CORPS_B1_UNIT);
export const ANIMAUX_REF = refFr(ANIMAUX_UNIT);
export const CONNECTEURS_REF = refFr('b1.30');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED
 *
 *  A1 and A2 reframes are English (those levels are taught in English); every
 *  screen that shows one follows it with the French rendering below.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A113_REFRAME } from '../couleurs-terms.ts';
export const A113_REFRAME_FR = 'Les couleurs s’accordent. Les choses devenues couleurs, non.';
export { REFRAME as A203_REFRAME } from '../accord-adjectifs-corpus.ts';
export const A203_REFRAME_FR = 'La forme de base te donne les trois autres.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE PALETTE. Each language paints its feelings with its own colours.
 *  English is blue when it is sad; French is black (broyer du noir) and
 *  keeps blue for fear (une peur bleue). English is green with a beginner;
 *  French says un bleu. So the move that works everywhere is to start from
 *  the MEANING and then find the French colour for it, never to carry the
 *  English colour across.
 *
 *  It is NOT « the colour never translates »: voir rouge, vert de jalousie,
 *  le marché noir, le feu vert are the English colour, word for word, and
 *  every act shows some. Starting from the meaning still gets them right.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Chaque langue a sa palette : pars du sens, pas de la couleur.';
export const REFRAME_EN = 'Every language has its own palette: start from the meaning, not from the colour.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'La couleur ne se traduit jamais.',
    why: "False where half the lesson has to hold: voir rouge, vert de jalousie, le marché noir, le feu vert, la matière grise, le tapis rouge ARE the English colour. A reframe that forbids a correct move teaches suspicion, not French.",
  },
  {
    text: 'Chaque couleur a son sens : le noir est triste, le rouge est en colère.',
    why: "The opposite of what acts 6 and 7 show. Noir is sad (broyer du noir) but also hidden (travailler au noir) and crowded (noir de monde); blanc is sleepless, blank, fake and free (nuit blanche, un blanc, mariage blanc, carte blanche). A colour has no stable meaning; the block does.",
  },
  {
    text: 'Les couleurs ont le même sens dans toutes les langues.',
    why: "The act 1 scene exists to break this: blue is sad in English and fearful in French, and a French rookie is blue where an English one is green.",
  },
  {
    text: 'Les expressions de couleur sont familières.',
    why: "False for most of the list: le marché noir, donner le feu vert, carte blanche, la matière grise, une série noire are courant and fine in a newspaper or a work email. Register is a property of each block, marked card by card.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-26 and its French is in the
 *  trailing comment. All carry a `flashcard` drill; two have no
 *  `voiceflash` and are listed in NOT_SPEAKABLE.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.sons.couleurs.005',   // noir
    'fr.sons.couleurs.002',   // bleu
    'fr.sons.couleurs.001',   // rouge
    'fr.sons.couleurs.006',   // blanc
  ],
  act2: [] as string[],
  act3: [
    'fr.a1.couleurs.266',     // Mes vestes sont bleues.
    'fr.a1.couleurs.269',     // Mes sacs sont marron.
    'fr.a1.couleurs.239',     // Elle aime les fleurs orange.
    'fr.sons.couleurs.026',   // bleu marine
  ],
  act4: [
    'fr.sons.couleurs.004',   // jaune
  ],
  act5: [
    'fr.sons.couleurs.003',   // vert
    'fr.sons.couleurs.007',   // gris
    'fr.a2.corps.008',        // Elle a un bleu sur le bras depuis hier.
  ],
  act6: [] as string[],
  act7: [] as string[],
  act8: [
    'fr.sons.couleurs.008',   // rose
  ],
  act9: [] as string[],
  act10: [] as string[],
  act11: [] as string[],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None here. */
export const NOT_DECK_ABLE: string[] = [];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a1.couleurs.239',       // sentence, flashcard, review
  'fr.a2.corps.008',          // sentence, flashcard, review
];

/** Published Postgres rows the seed does not carry, so they cannot be named
 *  here; each is twinned by an authored row. Probed read-only 2026-09-26.
 *  Dedupe or keep at import. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.b2.expressions-argot.044', fr: 'broyer du noir', twin: E(1400) },
  { dbId: 'fr.b2.affaires.054', fr: 'être dans le rouge', twin: E(1478) },
  { dbId: 'fr.b1.cinema.052', fr: 'le tapis rouge', twin: E(1533) },
  { dbId: 'fr.b1.recits-au-passe.090', fr: 'Il faisait nuit noire quand ils sont finalement arrivés au camping.', twin: E(1427) },
  { dbId: 'fr.b1.examens-et-diplomes.163', fr: 'Elle a passé son examen blanc hier soir avec sa tutrice.', twin: E(1499) },
  { dbId: 'fr.c1.francais-professionnel-avance.100', fr: "J'aimerais qu'on inscrive noir sur blanc la date de livraison du prototype.", twin: E(1545) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Each idiom has ONE phrase row (the block, with its register and its
 *  literal picture in `notes`) and one to three sentence rows that put it in
 *  a situation. Respell house style: hyphenated syllables, the last stressed
 *  syllable of each group in caps, ü for French u, nasals closed with the
 *  superscript ⁿ, no U+203F tie. See §A.5.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type Reg = 'familier' | 'courant';

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/** An idiom: the block itself. `literal` is the picture, word for word, in
 *  English, stored in `notes` so a card back can show it. */
const idiom = (
  n: number, fr: string, en: string, ipa: string, respell: string, register: Reg,
  literal: string, tags: string[],
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['idiome', ...tags], drills: FCVR, version: 1, register,
  grammarPoints: ['expressions-imagees'],
  notes: `Mot à mot : ${literal}.`,
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, register: Reg,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, grammarPoints: ['expressions-imagees'], ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });
const RULE = ['flashcard'] as Item['drills'];

/* ── ACT 1 · LA PALETTE ──────────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  idiom(1400, 'broyer du noir', 'to feel blue, to be down in the dumps', '/bʁwa.je dy nwaʁ/', 'brwa-YAY dü NWAR', 'courant', 'to grind black (English: feel BLUE)', ['tristesse', 'noir', 'autre-couleur']),
  idiom(1401, 'avoir une peur bleue', 'to be scared stiff', '/a.vwaʁ yn pœʁ blø/', 'a-VWAR ün puhr BLUH', 'courant', 'to have a blue fear (English has no colour here)', ['peur', 'bleu', 'autre-couleur']),
  idiom(1402, 'voir rouge', 'to see red', '/vwaʁ ʁuʒ/', 'vwar ROOZH', 'courant', 'to see red (the same picture as English)', ['colere', 'rouge', 'meme-couleur']),
  idiom(1403, 'passer une nuit blanche', 'to have a sleepless night', '/pa.se yn nɥi blɑ̃ʃ/', 'pa-SAY ün nwee BLAHⁿSH', 'courant', 'to spend a white night (English has no colour)', ['nuit', 'blanc', 'sans-couleur']),
  sent(1404, 'Je broie du noir depuis lundi.', 'I have been feeling blue since Monday.', '/ʒə bʁwa dy nwaʁ də.pɥi lœ̃.di/', 'zhuh brwa dü NWAR duh-pwee luhⁿ-DEE', 'courant', ['scene', 'tristesse'], FCVDR),
  sent(1405, 'Ma sœur a une peur bleue des orages.', 'My sister is scared stiff of thunderstorms.', '/ma sœʁ a yn pœʁ blø de.zɔ.ʁaʒ/', 'ma SUHR a ün puhr BLUH day-zo-RAZH', 'courant', ['peur']),
  sent(1406, 'Quand il a vu la facture, il a vu rouge.', 'When he saw the bill, he saw red.', '/kɑ̃.ti.la vy la fak.tyʁ i.la vy ʁuʒ/', 'kahⁿ-tee-la vü la fak-TÜR ee-la vü ROOZH', 'courant', ['colere', 'meme-couleur'], FCVDR),
  sent(1407, "J'ai passé une nuit blanche avant l'examen.", 'I had a sleepless night before the exam.', '/ʒe pa.se yn nɥi blɑ̃ʃ a.vɑ̃ lɛɡ.za.mɛ̃/', 'zhay pa-say ün nwee BLAHⁿSH a-vahⁿ lehg-za-MEHⁿ', 'courant', ['nuit']),
  sent(1408, REFRAME, REFRAME_EN, '/ʃak lɑ̃ɡ a sa pa.lɛt paʁ dy sɑ̃s pa d(ə) la ku.lœʁ/', 'shak lahⁿg a sa pa-LEHT par dü SAHⁿS pa duh la koo-LUHR', 'courant', ['rule', 'reframe'], RULE,
    rule('« I feel blue » : tu pars de la couleur ou du sens ?', 'Du sens : je suis triste. En français, la tristesse est noire : je broie du noir.')),
  sent(1409, 'Depuis son départ, Julie broie du noir.', 'Since he left, Julie has been down in the dumps.', '/də.pɥi sɔ̃ de.paʁ ʒy.li bʁwa dy nwaʁ/', 'duh-pwee sohⁿ day-PAR zhü-lee brwa dü NWAR', 'courant', ['tristesse']),
  sent(1410, 'Le bébé pleurait, on a passé une nuit blanche.', 'The baby was crying, we had a sleepless night.', '/lə be.be plœ.ʁɛ ɔ̃.na pa.se yn nɥi blɑ̃ʃ/', 'luh bay-BAY pluh-REH ohⁿ-na pa-say ün nwee BLAHⁿSH', 'courant', ['nuit', 'imparfait'], FCVDR),
  sent(1411, "J'ai une peur bleue de parler en public.", 'I am scared stiff of speaking in public.', '/ʒe yn pœʁ blø də paʁ.le ɑ̃ py.blik/', 'zhay ün puhr BLUH duh par-lay ahⁿ pü-BLEEK', 'courant', ['peur']),
  sent(1412, 'Ne lui parle pas de politique, il voit rouge tout de suite.', 'Do not talk politics with him, he sees red straight away.', '/nə lɥi paʁl pa d(ə) pɔ.li.tik il vwa ʁuʒ tut sɥit/', 'nuh lwee PARL pa duh po-lee-TEEK eel vwa ROOZH toot SWEET', 'courant', ['colere']),
  sent(1413, 'En anglais, la tristesse est bleue ; en français, elle est noire.', 'In English, sadness is blue; in French, it is black.', '/ɑ̃.nɑ̃.ɡlɛ la tʁis.tɛs ɛ blø ɑ̃ fʁɑ̃.sɛ ɛ.lɛ nwaʁ/', 'ahⁿ-nahⁿ-GLEH la trees-TEHSS eh BLUH ahⁿ frahⁿ-SEH eh-leh NWAR', 'courant', ['rule', 'autre-couleur'], RULE,
    rule('En français, quelle couleur pour la peur, et laquelle pour la tristesse ?', 'Le bleu pour la peur (une peur bleue), le noir pour la tristesse (broyer du noir).')),
];

/* ── ACT 2 · LA PEUR ET LE FROID ─────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  idiom(1414, "faire une peur bleue à quelqu'un", 'to scare the living daylights out of someone', '/fɛ.ʁyn pœʁ blø a kɛl.kœ̃/', 'feh-rün puhr BLUH a kehl-KUHⁿ', 'courant', 'to make a blue fear to someone', ['peur', 'bleu']),
  idiom(1415, 'blanc comme un linge', 'as white as a sheet', '/blɑ̃ kɔ.mœ̃ lɛ̃ʒ/', 'blahⁿ ko-muhⁿ LEHⁿZH', 'courant', 'white like a piece of linen (almost the English picture)', ['peur', 'blanc', 'meme-couleur']),
  idiom(1416, 'vert de peur', 'petrified, green with fear', '/vɛʁ də pœʁ/', 'vehr duh PUHR', 'courant', 'green with fear', ['peur', 'vert']),
  idiom(1417, 'bleu de froid', 'blue with cold', '/blø də fʁwa/', 'bluh duh FRWA', 'courant', 'blue with cold (the same picture as English)', ['froid', 'bleu', 'meme-couleur']),
  idiom(1418, 'il fait nuit noire', 'it is pitch dark', '/il fɛ nɥi nwaʁ/', 'eel feh nwee NWAR', 'courant', 'it makes black night (English: pitch dark)', ['nuit', 'noir']),
  sent(1419, 'Le chien du voisin m’a fait une peur bleue.', "The neighbour's dog scared the living daylights out of me.", '/lə ʃjɛ̃ dy vwa.zɛ̃ ma fɛ.tyn pœʁ blø/', 'luh shyehⁿ dü vwa-ZEHⁿ ma feh-tün puhr BLUH', 'courant', ['peur'], FCVDR),
  sent(1420, "Tu m'as fait une peur bleue, je ne t'ai pas entendu arriver.", 'You scared me stiff, I did not hear you come in.', '/ty ma fɛ.tyn pœʁ blø ʒə nə te pa.zɑ̃.tɑ̃.dy a.ʁi.ve/', 'tü ma feh-tün puhr BLUH zhuh nuh tay pa-zahⁿ-tahⁿ-DÜ a-ree-VAY', 'courant', ['peur']),
  sent(1421, "Quand elle a vu l'ours, elle est devenue blanche comme un linge.", 'When she saw the bear, she went as white as a sheet.', '/kɑ̃.tɛ.la vy luʁs ɛ.lɛ dəv.ny blɑ̃ʃ kɔ.mœ̃ lɛ̃ʒ/', 'kahⁿ-teh-la vü LOORSS eh-leh duhv-NÜ blahⁿsh ko-muhⁿ LEHⁿZH', 'courant', ['peur', 'accord'], FCVDR),
  sent(1422, "Il est sorti de l'avion blanc comme un linge.", 'He got off the plane as white as a sheet.', '/i.lɛ sɔʁ.ti də la.vjɔ̃ blɑ̃ kɔ.mœ̃ lɛ̃ʒ/', 'ee-leh sor-TEE duh la-VYOHⁿ blahⁿ ko-muhⁿ LEHⁿZH', 'courant', ['peur']),
  sent(1423, 'Pendant la tempête, les enfants étaient verts de peur.', 'During the storm, the children were petrified.', '/pɑ̃.dɑ̃ la tɑ̃.pɛt le.zɑ̃.fɑ̃ e.tɛ vɛʁ də pœʁ/', 'pahⁿ-dahⁿ la tahⁿ-PEHT lay-zahⁿ-FAHⁿ ay-teh vehr duh PUHR', 'courant', ['peur', 'accord']),
  sent(1424, "Après une heure dans la neige, j'étais bleu de froid.", 'After an hour in the snow, I was blue with cold.', '/a.pʁɛ.zy.nœʁ dɑ̃ la nɛʒ ʒe.tɛ blø də fʁwa/', 'a-preh-zü-NUHR dahⁿ la NEHZH zhay-teh bluh duh FRWA', 'courant', ['froid']),
  sent(1425, 'Ses lèvres étaient bleues de froid.', 'Her lips were blue with cold.', '/se lɛvʁ e.tɛ blø də fʁwa/', 'say LEHVR ay-teh bluh duh FRWA', 'courant', ['froid', 'accord'], FCVDR),
  sent(1426, 'À vingt heures, il faisait déjà nuit noire.', 'By eight in the evening, it was already pitch dark.', '/a vɛ̃.tœʁ il fə.zɛ de.ʒa nɥi nwaʁ/', 'a vehⁿ-TUHR eel fuh-zeh day-zha nwee NWAR', 'courant', ['nuit', 'imparfait']),
  sent(1427, 'Il faisait nuit noire et le sentier avait disparu.', 'It was pitch dark and the trail had disappeared.', '/il fə.zɛ nɥi nwaʁ e lə sɑ̃.tje a.vɛ dis.pa.ʁy/', 'eel fuh-zeh nwee NWAR ay luh sahⁿ-TYAY a-veh dees-pa-RÜ', 'courant', ['nuit', 'imparfait']),
  sent(1428, "Dans une expression, la couleur s'accorde avec la personne.", 'In an idiom, the colour agrees with the person.', '/dɑ̃.zy.nɛk.spʁɛ.sjɔ̃ la ku.lœʁ sa.kɔʁd a.vɛk la pɛʁ.sɔn/', 'dahⁿ-zü-nehk-spreh-SYOHⁿ la koo-LUHR sa-KORD a-vehk la pehr-SON', 'courant', ['rule', 'accord'], RULE,
    rule('« Elle est devenue ... comme un linge » : blanc ou blanche ?', "Blanche : la couleur s'accorde avec elle, comme d'habitude.")),
];

/* ── ACT 3 · LA COLÈRE ───────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  idiom(1429, 'une colère noire', 'a towering rage, a black mood', '/yn kɔ.lɛʁ nwaʁ/', 'ün ko-lehr NWAR', 'courant', 'a black anger', ['colere', 'noir']),
  idiom(1430, 'rouge de colère', 'red with anger', '/ʁuʒ də kɔ.lɛʁ/', 'roozh duh ko-LEHR', 'courant', 'red with anger (the same picture as English)', ['colere', 'rouge', 'meme-couleur']),
  idiom(1431, 'vert de rage', 'livid, hopping mad', '/vɛʁ də ʁaʒ/', 'vehr duh RAZH', 'courant', 'green with rage (English keeps green for envy)', ['colere', 'vert', 'autre-couleur']),
  idiom(1432, "c'est ma bête noire", 'it is my pet hate', '/sɛ ma bɛt nwaʁ/', 'seh ma beht NWAR', 'courant', 'it is my black beast (English borrowed it as bête noire)', ['colere', 'noir']),
  idiom(1433, "tirer à boulets rouges sur quelqu'un", 'to lay into someone, to slam someone', '/ti.ʁe a bu.lɛ ʁuʒ syʁ kɛl.kœ̃/', 'tee-RAY a boo-leh ROOZH sür kehl-KUHⁿ', 'courant', 'to fire red-hot cannonballs at someone', ['colere', 'rouge', 'presse']),
  sent(1434, 'Le patron est entré dans une colère noire.', 'The boss flew into a towering rage.', '/lə pa.tʁɔ̃ ɛ.tɑ̃.tʁe dɑ̃.zyn kɔ.lɛʁ nwaʁ/', 'luh pa-TROHⁿ eh-tahⁿ-TRAY dahⁿ-zün ko-lehr NWAR', 'courant', ['colere'], FCVDR),
  sent(1435, 'Mon père était dans une colère noire à cause du retard.', 'My father was in a black rage because of the delay.', '/mɔ̃ pɛʁ e.tɛ dɑ̃.zyn kɔ.lɛʁ nwaʁ a koz dy ʁə.taʁ/', 'mohⁿ PEHR ay-teh dahⁿ-zün ko-lehr NWAR a kohz dü ruh-TAR', 'courant', ['colere', 'imparfait']),
  sent(1436, 'Elle était rouge de colère.', 'She was red with anger.', '/ɛ.le.tɛ ʁuʒ də kɔ.lɛʁ/', 'eh-lay-teh roozh duh ko-LEHR', 'courant', ['colere']),
  sent(1437, 'Les joueurs sont sortis rouges de colère.', 'The players came off red with anger.', '/le ʒwœʁ sɔ̃ sɔʁ.ti ʁuʒ də kɔ.lɛʁ/', 'lay ZHWUHR sohⁿ sor-tee roozh duh ko-LEHR', 'courant', ['colere', 'accord'], FCVDR),
  sent(1438, 'Quand il a lu le message, il est devenu vert de rage.', 'When he read the message, he went livid.', '/kɑ̃.ti.la ly lə me.saʒ i.lɛ dəv.ny vɛʁ də ʁaʒ/', 'kahⁿ-tee-la lü luh may-SAZH ee-leh duhv-nü vehr duh RAZH', 'courant', ['colere']),
  sent(1439, "Les bouchons du matin, c'est ma bête noire.", 'Morning traffic jams are my pet hate.', '/le bu.ʃɔ̃ dy ma.tɛ̃ sɛ ma bɛt nwaʁ/', 'lay boo-SHOHⁿ dü ma-TEHⁿ seh ma beht NWAR', 'courant', ['colere']),
  sent(1440, "Les fautes d'orthographe, c'est la bête noire de mon prof.", "Spelling mistakes are my teacher's pet hate.", '/le fot dɔʁ.tɔ.ɡʁaf sɛ la bɛt nwaʁ də mɔ̃ pʁɔf/', 'lay foht dor-to-GRAF seh la beht NWAR duh mohⁿ PROF', 'courant', ['colere']),
  sent(1441, 'Les journaux tirent à boulets rouges sur le ministre.', 'The papers are laying into the minister.', '/le ʒuʁ.no ti.ʁa.bu.lɛ ʁuʒ syʁ lə mi.nistʁ/', 'lay zhoor-NOH tee-ra-boo-leh ROOZH sür luh mee-NEESTR', 'courant', ['colere', 'presse']),
  sent(1442, 'Les voisines ont vu rouge : leur place de parking était prise.', 'The neighbours saw red: their parking space had been taken.', '/le vwa.zin ɔ̃ vy ʁuʒ lœʁ plas də paʁ.kiŋ e.tɛ pʁiz/', 'lay vwa-ZEEN ohⁿ vü ROOZH luhr plass duh par-KEENG ay-teh PREEZ', 'courant', ['colere', 'accord']),
  sent(1443, 'Rouge s’accorde avec la personne, sauf après voir.', 'Rouge agrees with the person, except after voir.', '/ʁuʒ sa.kɔʁd a.vɛk la pɛʁ.sɔn sof a.pʁɛ vwaʁ/', 'ROOZH sa-KORD a-vehk la pehr-SON sohf a-preh VWAR', 'courant', ['rule', 'accord'], RULE,
    rule('« Elles ont vu ... » : rouge ou rouges ?', 'Rouge : après voir, la couleur ne change pas. Mais : elles étaient rouges de colère.')),
  sent(1444, "Il était vert de rage, mais il n'a rien dit.", 'He was livid, but he said nothing.', '/i.le.tɛ vɛʁ də ʁaʒ mɛ il na ʁjɛ̃ di/', 'ee-lay-teh vehr duh RAZH meh eel na ryehⁿ DEE', 'courant', ['colere']),
];

/* ── ACT 4 · LA GÊNE ─────────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  idiom(1445, 'rouge comme une tomate', 'as red as a beetroot', '/ʁuʒ kɔ.myn tɔ.mat/', 'roozh ko-mün to-MAT', 'familier', 'red like a tomato (English: a beetroot)', ['gene', 'rouge', 'autre-image']),
  idiom(1446, 'rouge de honte', 'red with shame', '/ʁuʒ də ɔ̃t/', 'roozh duh OHⁿT', 'courant', 'red with shame (the same picture as English)', ['gene', 'rouge', 'meme-couleur']),
  idiom(1447, 'rire jaune', 'to give a forced laugh', '/ʁiʁ ʒon/', 'reer ZHON', 'courant', 'to laugh yellow (in English, yellow is fear)', ['gene', 'jaune', 'faux-ami']),
  idiom(1448, 'avoir le rouge aux joues', 'to be flushed, to blush', '/a.vwaʁ lə ʁu.ʒo ʒu/', 'a-VWAR luh roo-zhoh ZHOO', 'courant', 'to have the red on the cheeks', ['gene', 'rouge']),
  sent(1449, "Quand le prof m'a appelé au tableau, je suis devenu rouge comme une tomate.", 'When the teacher called me up to the board, I went as red as a beetroot.', '/kɑ̃ lə pʁɔf ma a.ple o ta.blo ʒə sɥi dəv.ny ʁuʒ kɔ.myn tɔ.mat/', 'kahⁿ luh PROF ma a-play oh ta-BLOH zhuh swee duhv-nü roozh ko-mün to-MAT', 'familier', ['gene']),
  sent(1450, 'Elle est devenue rouge comme une tomate devant tout le monde.', 'She went as red as a beetroot in front of everyone.', '/ɛ.lɛ dəv.ny ʁuʒ kɔ.myn tɔ.mat də.vɑ̃ tu lə mɔ̃d/', 'eh-leh duhv-nü roozh ko-mün to-MAT duh-vahⁿ too luh MOHⁿD', 'familier', ['gene'], FCVDR),
  sent(1451, 'Rouge de honte, il a quitté la salle.', 'Red with shame, he left the room.', '/ʁuʒ də ɔ̃t i.la ki.te la sal/', 'roozh duh OHⁿT ee-la kee-tay la SAL', 'courant', ['gene']),
  sent(1452, "J'étais rouge de honte après ma chute.", 'I was red with shame after my fall.', '/ʒe.tɛ ʁuʒ də ɔ̃t a.pʁɛ ma ʃyt/', 'zhay-teh roozh duh OHⁿT a-preh ma SHÜT', 'courant', ['gene', 'imparfait']),
  sent(1453, "Il a ri jaune quand on s'est moqué de sa coupe de cheveux.", 'He gave a forced laugh when people made fun of his haircut.', '/i.la ʁi ʒon kɑ̃.tɔ̃ sɛ mɔ.ke də sa kup də ʃə.vø/', 'ee-la ree ZHON kahⁿ-tohⁿ seh mo-KAY duh sa koop duh shuh-VUH', 'courant', ['gene'], FCVDR),
  sent(1454, 'Tout le monde a ri, sauf Marc, qui a ri jaune.', 'Everyone laughed, except Marc, who gave a forced laugh.', '/tu lə mɔ̃d a ʁi sof maʁk ki a ʁi ʒon/', 'too luh mohⁿd a REE sohf MARK kee a ree ZHON', 'courant', ['gene']),
  sent(1455, 'Après le compliment, elle avait le rouge aux joues.', 'After the compliment, she was flushed.', '/a.pʁɛ lə kɔ̃.pli.mɑ̃ ɛ.la.vɛ lə ʁu.ʒo ʒu/', 'a-preh luh kohⁿ-plee-MAHⁿ eh-la-veh luh roo-zhoh ZHOO', 'courant', ['gene', 'imparfait']),
  sent(1456, 'Le rouge lui est monté aux joues.', 'The colour rose to his cheeks.', '/lə ʁuʒ lɥi ɛ mɔ̃.te o ʒu/', 'luh ROOZH lwee eh mohⁿ-tay oh ZHOO', 'courant', ['gene']),
  sent(1457, "Rire jaune, ce n'est pas avoir peur : c'est rire sans en avoir envie.", 'To laugh yellow is not to be afraid: it is to laugh without wanting to.', '/ʁiʁ ʒon sə nɛ pa.za.vwaʁ pœʁ sɛ ʁiʁ sɑ̃.zɑ̃.na.vwaʁ ɑ̃.vi/', 'reer ZHON suh neh pa-za-vwar PUHR seh reer sahⁿ-zahⁿ-na-vwar ahⁿ-VEE', 'courant', ['rule', 'faux-ami'], RULE,
    rule('Yellow, en anglais, c’est la peur. Et rire jaune ?', 'Un rire forcé, gêné. La peur, en français, est bleue.')),
  sent(1458, 'Tu as ri jaune à sa blague, ça se voyait.', 'You forced a laugh at his joke, it showed.', '/ty a ʁi ʒon a sa blaɡ sa sə vwa.jɛ/', 'tü a ree ZHON a sa BLAG sa suh vwa-YEH', 'courant', ['gene']),
];

/* ── ACT 5 · L'ENVIE ET LA SANTÉ ─────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  idiom(1459, 'vert de jalousie', 'green with envy', '/vɛʁ də ʒa.lu.zi/', 'vehr duh zha-loo-ZEE', 'courant', 'green with jealousy (the same picture as English)', ['envie', 'vert', 'meme-couleur']),
  idiom(1460, 'être tout vert', 'to look green, to feel sick', '/ɛtʁ tu vɛʁ/', 'ehtr too VEHR', 'familier', 'to be all green (the same picture as English)', ['sante', 'vert', 'meme-couleur']),
  idiom(1461, 'avoir un bleu', 'to have a bruise', '/a.vwaʁ œ̃ blø/', 'a-VWAR uhⁿ BLUH', 'courant', 'to have a blue (English: a bruise, black and blue)', ['sante', 'bleu']),
  idiom(1462, "blanc comme un cachet d'aspirine", 'pasty white, with no tan at all', '/blɑ̃ kɔ.mœ̃ ka.ʃɛ das.pi.ʁin/', 'blahⁿ ko-muhⁿ ka-sheh das-pee-REEN', 'familier', 'white like an aspirin tablet', ['sante', 'blanc', 'france']),
  idiom(1463, 'être gris', 'to be tipsy', '/ɛtʁ ɡʁi/', 'ehtr GREE', 'familier', 'to be grey', ['sante', 'gris']),
  sent(1464, 'Il est vert de jalousie depuis ta promotion.', 'He has been green with envy since your promotion.', '/i.lɛ vɛʁ də ʒa.lu.zi də.pɥi ta pʁɔ.mɔ.sjɔ̃/', 'ee-leh vehr duh zha-loo-ZEE duh-pwee ta pro-mo-SYOHⁿ', 'courant', ['envie'], FCVDR),
  sent(1465, 'Ma cousine était verte de jalousie devant ma nouvelle auto.', 'My cousin was green with envy at my new car.', '/ma ku.zin e.tɛ vɛʁt də ʒa.lu.zi də.vɑ̃ ma nu.vɛl o.to/', 'ma koo-ZEEN ay-teh vehrt duh zha-loo-ZEE duh-vahⁿ ma noo-vehl oh-TOH', 'courant', ['envie', 'accord', 'quebec']),
  sent(1466, 'Sur le bateau, Paul était tout vert.', 'On the boat, Paul looked green.', '/syʁ lə ba.to pɔl e.tɛ tu vɛʁ/', 'sür luh ba-TOH POL ay-teh too VEHR', 'familier', ['sante', 'imparfait']),
  sent(1467, "Tu es tout vert, tu veux t'asseoir ?", 'You look green, do you want to sit down?', '/ty ɛ tu vɛʁ ty vø ta.swaʁ/', 'tü eh too VEHR tü vuh ta-SWAR', 'familier', ['sante']),
  sent(1468, "Je me suis cogné à la table et j'ai un bleu.", 'I bumped into the table and I have a bruise.', '/ʒə mə sɥi kɔ.ɲe a la tabl e ʒe œ̃ blø/', 'zhuh muh swee ko-NYAY a la TABL ay zhay uhⁿ BLUH', 'courant', ['sante'], FCVDR),
  sent(1469, "Au hockey, il s'est fait un gros bleu au genou.", 'At hockey, he got a big bruise on his knee.', '/o ɔ.kɛ il sɛ fɛ œ̃ ɡʁo blø o ʒə.nu/', 'oh o-KEH eel seh feh uhⁿ groh BLUH oh zhuh-NOO', 'courant', ['sante', 'quebec']),
  sent(1470, "Après l'hiver, je suis blanc comme un cachet d'aspirine.", 'After the winter, I am pasty white.', '/a.pʁɛ li.vɛʁ ʒə sɥi blɑ̃ kɔ.mœ̃ ka.ʃɛ das.pi.ʁin/', 'a-preh lee-VEHR zhuh swee blahⁿ ko-muhⁿ ka-sheh das-pee-REEN', 'familier', ['sante', 'france']),
  sent(1471, "Elle revient de Cuba, elle n'est plus blanche comme un cachet d'aspirine.", 'She is back from Cuba, she is not pasty white any more.', '/ɛl ʁə.vjɛ̃ də ky.ba ɛl nɛ ply blɑ̃ʃ kɔ.mœ̃ ka.ʃɛ das.pi.ʁin/', 'ehl ruh-vyehⁿ duh kü-BA ehl neh plü blahⁿsh ko-muhⁿ ka-sheh das-pee-REEN', 'familier', ['sante', 'accord', 'france']),
  sent(1472, 'Après deux verres de vin, il était un peu gris.', 'After two glasses of wine, he was a bit tipsy.', '/a.pʁɛ dø vɛʁ də vɛ̃ i.le.tɛ œ̃ pø ɡʁi/', 'a-preh duh vehr duh VEHⁿ ee-lay-teh uhⁿ puh GREE', 'familier', ['sante', 'imparfait'], FCVDR),
  sent(1473, 'Le soir de la fête, tout le monde était un peu gris.', 'On the night of the party, everyone was a bit tipsy.', '/lə swaʁ də la fɛt tu lə mɔ̃d e.tɛ œ̃ pø ɡʁi/', 'luh swar duh la FEHT too luh mohⁿd ay-teh uhⁿ puh GREE', 'familier', ['sante', 'imparfait']),
  sent(1474, "Un bleu sur la peau, c'est une marque, pas une couleur.", 'A bleu on the skin is a mark, not a colour.', '/œ̃ blø syʁ la po sɛ.tyn maʁk pa.zyn ku.lœʁ/', 'uhⁿ BLUH sür la POH seh-tün MARK pa-zün koo-LUHR', 'courant', ['rule'], RULE,
    rule('« J’ai un bleu » : de quelle couleur est la marque ?', 'Souvent violette, puis jaune. Un bleu, c’est le nom de la marque : a bruise.')),
  sent(1475, 'Ta sœur est verte de jalousie, mais elle ne dit rien.', 'Your sister is green with envy, but she says nothing.', '/ta sœʁ ɛ vɛʁt də ʒa.lu.zi mɛ ɛl nə di ʁjɛ̃/', 'ta SUHR eh vehrt duh zha-loo-ZEE meh ehl nuh dee RYEHⁿ', 'courant', ['envie', 'accord']),
];

/* ── ACT 6 · L'ARGENT ET LE MARCHÉ NOIR ──────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  idiom(1476, 'travailler au noir', 'to work off the books, cash in hand', '/tʁa.va.je o nwaʁ/', 'tra-va-YAY oh NWAR', 'courant', 'to work in the black (English: off the books)', ['argent', 'noir', 'autre-image']),
  idiom(1477, 'le marché noir', 'the black market', '/lə maʁ.ʃe nwaʁ/', 'luh mar-shay NWAR', 'courant', 'the black market (the same picture as English)', ['argent', 'noir', 'meme-couleur']),
  idiom(1478, 'être dans le rouge', 'to be in the red, overdrawn', '/ɛtʁ dɑ̃ lə ʁuʒ/', 'ehtr dahⁿ luh ROOZH', 'courant', 'to be in the red (the same picture as English)', ['argent', 'rouge', 'meme-couleur']),
  idiom(1479, "blanchir de l'argent", 'to launder money', '/blɑ̃.ʃiʁ də laʁ.ʒɑ̃/', 'blahⁿ-SHEER duh lar-ZHAHⁿ', 'courant', 'to whiten money (English washes it)', ['argent', 'blanc', 'autre-image']),
  idiom(1480, 'un billet vert', 'a greenback, a US dollar', '/œ̃ bi.jɛ vɛʁ/', 'uhⁿ bee-yeh VEHR', 'courant', 'a green note (the same picture as greenback)', ['argent', 'vert', 'presse']),
  sent(1481, 'Il travaille au noir les fins de semaine.', 'He works cash in hand at weekends.', '/il tʁa.vaj o nwaʁ le fɛ̃ d(ə) sə.mɛn/', 'eel tra-VAHY oh NWAR lay fehⁿ duh suh-MEN', 'courant', ['argent', 'quebec'], FCVDR),
  sent(1482, 'Beaucoup de peintres sont payés au noir.', 'A lot of painters are paid under the table.', '/bo.ku d(ə) pɛ̃tʁ sɔ̃ pe.je o nwaʁ/', 'boh-koo duh PEHⁿTR sohⁿ pay-yay oh NWAR', 'courant', ['argent']),
  sent(1483, 'Ces billets de concert se vendent au marché noir.', 'These concert tickets are sold on the black market.', '/se bi.jɛ d(ə) kɔ̃.sɛʁ sə vɑ̃d o maʁ.ʃe nwaʁ/', 'say bee-yeh duh kohⁿ-SEHR suh vahⁿd oh mar-shay NWAR', 'courant', ['argent']),
  sent(1484, 'Pendant la guerre, ma grand-mère achetait du beurre au marché noir.', 'During the war, my grandmother bought butter on the black market.', '/pɑ̃.dɑ̃ la ɡɛʁ ma ɡʁɑ̃.mɛʁ aʃ.tɛ dy bœʁ o maʁ.ʃe nwaʁ/', 'pahⁿ-dahⁿ la GEHR ma grahⁿ-MEHR ash-teh dü BUHR oh mar-shay NWAR', 'courant', ['argent', 'imparfait'], FCVDR),
  sent(1485, 'Mon compte est dans le rouge depuis le quinze.', 'My account has been in the red since the fifteenth.', '/mɔ̃ kɔ̃t ɛ dɑ̃ lə ʁuʒ də.pɥi lə kɛ̃z/', 'mohⁿ KOHⁿT eh dahⁿ luh ROOZH duh-pwee luh KEHⁿZ', 'courant', ['argent']),
  sent(1486, "Grâce à ce contrat, l'entreprise est sortie du rouge.", 'Thanks to this contract, the company got out of the red.', '/ɡʁa.sa sə kɔ̃.tʁa lɑ̃.tʁə.pʁiz ɛ sɔʁ.ti dy ʁuʒ/', 'gra-sa suh kohⁿ-TRA lahⁿ-truh-PREEZ eh sor-tee dü ROOZH', 'courant', ['argent']),
  sent(1487, "La police a arrêté un homme qui blanchissait de l'argent.", 'The police arrested a man who was laundering money.', '/la pɔ.lis a a.ʁɛ.te œ̃.nɔm ki blɑ̃.ʃi.sɛ də laʁ.ʒɑ̃/', 'la po-LEESS a a-reh-TAY uhⁿ-NOM kee blahⁿ-shee-SEH duh lar-ZHAHⁿ', 'courant', ['argent', 'imparfait']),
  sent(1488, "Le billet vert a baissé face à l'euro.", 'The greenback fell against the euro.', '/lə bi.jɛ vɛʁ a be.se fa.sa lø.ʁo/', 'luh bee-yeh VEHR a beh-SAY fa-sa luh-ROH', 'courant', ['argent', 'presse']),
  sent(1489, "Au Canada, le billet vert, c'est le dollar américain.", 'In Canada, the billet vert means the US dollar.', '/o ka.na.da lə bi.jɛ vɛʁ sɛ lə dɔ.laʁ a.me.ʁi.kɛ̃/', 'oh ka-na-DA luh bee-yeh VEHR seh luh do-LAR a-may-ree-KEHⁿ', 'courant', ['argent', 'quebec']),
  sent(1490, "Au noir : caché, sans déclarer, sans payer d'impôts.", 'Au noir: hidden, undeclared, with no tax paid.', '/o nwaʁ ka.ʃe sɑ̃ de.kla.ʁe sɑ̃ pe.je dɛ̃.po/', 'oh NWAR ka-SHAY sahⁿ day-kla-RAY sahⁿ pay-yay dehⁿ-POH', 'courant', ['rule'], RULE,
    rule('« Travailler au noir » : travailler la nuit ?', "Non : travailler sans le déclarer. Le noir, ici, c'est ce qu'on cache.")),
  sent(1491, "Travailler au noir, c'est risqué : pas d'assurance, pas de retraite.", 'Working off the books is risky: no insurance, no pension.', '/tʁa.va.je o nwaʁ sɛ ʁis.ke pa da.sy.ʁɑ̃s pa d(ə) ʁə.tʁɛt/', 'tra-va-yay oh NWAR seh rees-KAY pa da-sü-RAHⁿS pa duh ruh-TREHT', 'courant', ['argent']),
];

/* ── ACT 7 · LE BLANC ────────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  idiom(1492, 'avoir un blanc', 'to go blank, to have a mental blank', '/a.vwaʁ œ̃ blɑ̃/', 'a-VWAR uhⁿ BLAHⁿ', 'courant', 'to have a white (English: a blank, nearly the same)', ['blanc', 'memoire', 'meme-image']),
  idiom(1493, 'un examen blanc', 'a mock exam, a practice test', '/œ̃.nɛɡ.za.mɛ̃ blɑ̃/', 'uhⁿ-nehg-za-mehⁿ BLAHⁿ', 'courant', 'a white exam', ['blanc', 'ecole', 'france']),
  idiom(1494, 'un mariage blanc', 'a sham marriage', '/œ̃ ma.ʁjaʒ blɑ̃/', 'uhⁿ ma-ryazh BLAHⁿ', 'courant', 'a white marriage (not a white wedding)', ['blanc', 'faux', 'faux-ami']),
  idiom(1495, 'de but en blanc', 'point-blank, out of the blue', '/də by.tɑ̃ blɑ̃/', 'duh bü-tahⁿ BLAHⁿ', 'courant', 'from the mark to the white (English: out of the BLUE)', ['blanc', 'surprise', 'autre-couleur']),
  idiom(1496, "c'est bonnet blanc et blanc bonnet", 'it is six of one and half a dozen of the other', '/sɛ bɔ.nɛ blɑ̃ e blɑ̃ bɔ.nɛ/', 'seh bo-neh BLAHⁿ ay blahⁿ bo-NEH', 'familier', 'it is white cap and cap white', ['blanc', 'pareil']),
  sent(1497, "Devant le jury, j'ai eu un blanc.", 'In front of the panel, my mind went blank.', '/də.vɑ̃ lə ʒy.ʁi ʒe y œ̃ blɑ̃/', 'duh-vahⁿ luh zhü-REE zhay ü uhⁿ BLAHⁿ', 'courant', ['blanc'], FCVDR),
  sent(1498, "Au milieu de mon discours, j'ai eu un blanc de dix secondes.", 'In the middle of my speech, I went blank for ten seconds.', '/o mi.ljø d(ə) mɔ̃ dis.kuʁ ʒe y œ̃ blɑ̃ d(ə) di s(ə).ɡɔ̃d/', 'oh mee-lyuh duh mohⁿ dees-KOOR zhay ü uhⁿ blahⁿ duh dee suh-GOHⁿD', 'courant', ['blanc']),
  sent(1499, 'On a un examen blanc lundi, avant le vrai examen.', 'We have a mock exam on Monday, before the real one.', '/ɔ̃.na œ̃.nɛɡ.za.mɛ̃ blɑ̃ lœ̃.di a.vɑ̃ lə vʁɛ ɛɡ.za.mɛ̃/', 'ohⁿ-na uhⁿ-nehg-za-mehⁿ blahⁿ luhⁿ-DEE a-vahⁿ luh vreh ehg-za-MEHⁿ', 'courant', ['ecole', 'france'], FCVDR),
  sent(1500, "L'examen blanc sert à s'entraîner.", 'The mock exam is for practice.', '/lɛɡ.za.mɛ̃ blɑ̃ sɛʁ a sɑ̃.tʁɛ.ne/', 'lehg-za-mehⁿ BLAHⁿ sehr a sahⁿ-treh-NAY', 'courant', ['ecole', 'france']),
  sent(1501, "Ils se sont mariés pour les papiers : c'était un mariage blanc.", 'They married for the papers: it was a sham marriage.', '/il sə sɔ̃ ma.ʁje puʁ le pa.pje se.tɛ.tœ̃ ma.ʁjaʒ blɑ̃/', 'eel suh sohⁿ ma-RYAY poor lay pa-PYAY say-teh-tuhⁿ ma-ryazh BLAHⁿ', 'courant', ['faux'], FCVDR),
  sent(1502, 'Un mariage blanc peut coûter très cher devant la loi.', 'A sham marriage can cost a lot in the eyes of the law.', '/œ̃ ma.ʁjaʒ blɑ̃ pø ku.te tʁɛ ʃɛʁ də.vɑ̃ la lwa/', 'uhⁿ ma-ryazh BLAHⁿ puh koo-tay treh SHEHR duh-vahⁿ la LWA', 'courant', ['faux']),
  sent(1503, "Il m'a demandé de but en blanc si j'étais célibataire.", 'He asked me point-blank if I was single.', '/il ma d(ə).mɑ̃.de də by.tɑ̃ blɑ̃ si ʒe.tɛ se.li.ba.tɛʁ/', 'eel ma duh-mahⁿ-DAY duh bü-tahⁿ BLAHⁿ see zhay-teh say-lee-ba-TEHR', 'courant', ['surprise'], FCVDR),
  sent(1504, 'De but en blanc, elle a annoncé son départ.', 'Out of the blue, she announced she was leaving.', '/də by.tɑ̃ blɑ̃ ɛ.la a.nɔ̃.se sɔ̃ de.paʁ/', 'duh bü-tahⁿ BLAHⁿ eh-la a-nohⁿ-SAY sohⁿ day-PAR', 'courant', ['surprise']),
  sent(1505, "Le bus ou le métro, c'est bonnet blanc et blanc bonnet.", 'Bus or metro, it is six of one and half a dozen of the other.', '/lə bys u lə me.tʁo sɛ bɔ.nɛ blɑ̃ e blɑ̃ bɔ.nɛ/', 'luh BÜSS oo luh may-TROH seh bo-neh BLAHⁿ ay blahⁿ bo-NEH', 'familier', ['pareil'], FCVDR),
  sent(1506, 'À Montréal, la Nuit blanche dure toute la nuit.', 'In Montréal, the Nuit blanche festival lasts all night.', '/a mɔ̃.ʁe.al la nɥi blɑ̃ʃ dyʁ tut la nɥi/', 'a mohⁿ-ray-AL la nwee BLAHⁿSH dür toot la NWEE', 'courant', ['nuit', 'quebec']),
  sent(1507, "Le blanc, c'est souvent le vide : pas de sommeil, pas de mots, pas de vrai mariage.", 'White is often emptiness: no sleep, no words, no real marriage.', '/lə blɑ̃ sɛ su.vɑ̃ lə vid pa d(ə) sɔ.mɛj pa d(ə) mo pa d(ə) vʁɛ ma.ʁjaʒ/', 'luh BLAHⁿ seh soo-vahⁿ luh VEED pa duh so-MEHY pa duh MOH pa duh vreh ma-RYAZH', 'courant', ['rule'], RULE,
    rule('Nuit blanche, un blanc, mariage blanc : quel point commun ?', "Quelque chose manque : le sommeil, les mots, l'amour.")),
];

/* ── ACT 8 · EN ROSE OU EN NOIR ──────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  idiom(1508, 'voir la vie en rose', 'to see the world through rose-tinted glasses', '/vwaʁ la vi ɑ̃ ʁoz/', 'vwar la vee ahⁿ ROHZ', 'courant', 'to see life in pink (nearly the English picture)', ['optimisme', 'rose', 'meme-couleur']),
  idiom(1509, "ce n'est pas tout rose", 'it is not all roses', '/sə nɛ pa tu ʁoz/', 'suh neh pa too ROHZ', 'courant', 'it is not all pink', ['optimisme', 'rose']),
  idiom(1510, 'voir tout en noir', 'to look on the dark side', '/vwaʁ tu.tɑ̃ nwaʁ/', 'vwar too-tahⁿ NWAR', 'courant', 'to see everything in black', ['pessimisme', 'noir']),
  idiom(1511, 'avoir des idées noires', 'to have dark thoughts', '/a.vwaʁ de.zi.de nwaʁ/', 'a-VWAR day-zee-day NWAR', 'courant', 'to have black ideas (nearly the English picture)', ['pessimisme', 'noir', 'meme-couleur']),
  idiom(1512, 'faire grise mine', 'to look glum, to pull a long face', '/fɛʁ ɡʁiz min/', 'fehr greez MEEN', 'courant', 'to make a grey face', ['pessimisme', 'gris']),
  idiom(1513, "à l'eau de rose", 'soppy, schmaltzy', '/a lo d(ə) ʁoz/', 'a loh duh ROHZ', 'courant', 'with rose water', ['naivete', 'rose']),
  idiom(1514, 'être fleur bleue', 'to be a hopeless romantic', '/ɛtʁ flœʁ blø/', 'ehtr fluhr BLUH', 'courant', 'to be blue flower', ['naivete', 'bleu']),
  sent(1515, "Depuis qu'il est amoureux, il voit la vie en rose.", 'Since he fell in love, he sees the world through rose-tinted glasses.', '/də.pɥi ki.lɛ.ta.mu.ʁø il vwa la vi ɑ̃ ʁoz/', 'duh-pwee kee-leh-ta-moo-RUH eel vwa la vee ahⁿ ROHZ', 'courant', ['optimisme'], FCVDR),
  sent(1516, 'Elle voit toujours la vie en rose, même quand il pleut.', 'She always looks on the bright side, even when it rains.', '/ɛl vwa tu.ʒuʁ la vi ɑ̃ ʁoz mɛm kɑ̃.til plø/', 'ehl vwa too-zhoor la vee ahⁿ ROHZ MEM kahⁿ-teel PLUH', 'courant', ['optimisme']),
  sent(1517, "La vie d'artiste, ce n'est pas tout rose.", "An artist's life is not all roses.", '/la vi daʁ.tist sə nɛ pa tu ʁoz/', 'la vee dar-TEEST suh neh pa too ROHZ', 'courant', ['optimisme'], FCVDR),
  sent(1518, "Vivre à l'étranger, ce n'est pas toujours rose.", 'Living abroad is not always rosy.', '/vi.vʁa le.tʁɑ̃.ʒe sə nɛ pa tu.ʒuʁ ʁoz/', 'vee-vra lay-trahⁿ-ZHAY suh neh pa too-zhoor ROHZ', 'courant', ['optimisme']),
  sent(1519, 'Arrête de voir tout en noir, ça va aller.', 'Stop looking on the dark side, it will be fine.', '/a.ʁɛt də vwaʁ tu.tɑ̃ nwaʁ sa va a.le/', 'a-reht duh vwar too-tahⁿ NWAR sa va a-LAY', 'courant', ['pessimisme']),
  sent(1520, 'Quand il est fatigué, il voit tout en noir.', 'When he is tired, he sees everything in a bad light.', '/kɑ̃.ti.lɛ fa.ti.ɡe il vwa tu.tɑ̃ nwaʁ/', 'kahⁿ-tee-leh fa-tee-GAY eel vwa too-tahⁿ NWAR', 'courant', ['pessimisme'], FCVDR),
  sent(1521, "Depuis l'accident, elle a des idées noires.", 'Since the accident, she has been having dark thoughts.', '/də.pɥi lak.si.dɑ̃ ɛ.la de.zi.de nwaʁ/', 'duh-pwee lak-see-DAHⁿ eh-la day-zee-day NWAR', 'courant', ['pessimisme']),
  sent(1522, "Si tu as des idées noires, parles-en à quelqu'un.", 'If you have dark thoughts, talk to someone about it.', '/si ty a de.zi.de nwaʁ paʁl.zɑ̃ a kɛl.kœ̃/', 'see tü a day-zee-day NWAR parl-zahⁿ a kehl-KUHⁿ', 'courant', ['pessimisme']),
  sent(1523, 'Quand il a vu la pluie, il a fait grise mine.', 'When he saw the rain, he pulled a long face.', '/kɑ̃.ti.la vy la plɥi i.la fɛ ɡʁiz min/', 'kahⁿ-tee-la vü la PLWEE ee-la feh greez MEEN', 'courant', ['pessimisme']),
  sent(1524, 'Les enfants font grise mine : les vacances sont finies.', 'The children look glum: the holidays are over.', '/le.zɑ̃.fɑ̃ fɔ̃ ɡʁiz min le va.kɑ̃s sɔ̃ fi.ni/', 'lay-zahⁿ-fahⁿ fohⁿ greez MEEN lay va-KAHⁿS sohⁿ fee-NEE', 'courant', ['pessimisme']),
  sent(1525, "C'est un film à l'eau de rose, mais j'ai pleuré.", 'It is a soppy film, but I cried.', '/sɛ.tœ̃ film a lo d(ə) ʁoz mɛ ʒe plœ.ʁe/', 'seh-tuhⁿ FEELM a loh duh ROHZ meh zhay pluh-RAY', 'courant', ['naivete']),
  sent(1526, "Ma tante adore les romans à l'eau de rose.", 'My aunt loves slushy romance novels.', '/ma tɑ̃t a.dɔʁ le ʁɔ.mɑ̃ a lo d(ə) ʁoz/', 'ma TAHⁿT a-dor lay ro-MAHⁿ a loh duh ROHZ', 'courant', ['naivete']),
  sent(1527, "Il est très fleur bleue : il écrit encore des poèmes d'amour.", 'He is a hopeless romantic: he still writes love poems.', '/i.lɛ tʁɛ flœʁ blø i.le.kʁi ɑ̃.kɔʁ de pɔ.ɛm da.muʁ/', 'ee-leh treh fluhr BLUH ee-lay-kree ahⁿ-kor day po-EMM da-MOOR', 'courant', ['naivete']),
  sent(1528, 'En rose, tout va bien ; en noir, tout va mal.', 'In pink, everything is fine; in black, everything goes wrong.', '/ɑ̃ ʁoz tu va bjɛ̃ ɑ̃ nwaʁ tu va mal/', 'ahⁿ ROHZ too va BYEHⁿ ahⁿ NWAR too va MAL', 'courant', ['rule'], RULE,
    rule('Voir la vie en rose ou voir tout en noir : qui est optimiste ?', "Celui qui voit la vie en rose. Voir tout en noir, c'est le pessimiste.")),
];

/* ── ACT 9 · LE FEU VERT ─────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  idiom(1529, 'donner le feu vert', 'to give the green light', '/dɔ.ne lə fø vɛʁ/', 'do-NAY luh fuh VEHR', 'courant', 'to give the green light (the same picture as English)', ['permission', 'vert', 'meme-couleur']),
  idiom(1530, 'avoir carte blanche', 'to have a free hand', '/a.vwaʁ kaʁt blɑ̃ʃ/', 'a-VWAR kart BLAHⁿSH', 'courant', 'to have a white card (English borrowed carte blanche)', ['permission', 'blanc', 'meme-couleur']),
  idiom(1531, 'un chèque en blanc', 'a blank cheque', '/œ̃ ʃɛ.kɑ̃ blɑ̃/', 'uhⁿ sheh-kahⁿ BLAHⁿ', 'courant', 'a cheque in white (the same picture as English)', ['permission', 'blanc', 'meme-couleur']),
  idiom(1532, 'annoncer la couleur', 'to lay your cards on the table', '/a.nɔ̃.se la ku.lœʁ/', 'a-nohⁿ-SAY la koo-LUHR', 'courant', 'to announce the colour (the suit, in a card game)', ['permission', 'couleur', 'autre-image']),
  idiom(1533, 'dérouler le tapis rouge', 'to roll out the red carpet', '/de.ʁu.le lə ta.pi ʁuʒ/', 'day-roo-LAY luh ta-pee ROOZH', 'courant', 'to unroll the red carpet (the same picture as English)', ['accord', 'rouge', 'meme-couleur']),
  idiom(1534, 'noir sur blanc', 'in black and white, in writing', '/nwaʁ syʁ blɑ̃/', 'nwar sür BLAHⁿ', 'courant', 'black on white (English: black AND white)', ['accord', 'noir', 'blanc']),
  sent(1535, 'La directrice nous a donné le feu vert pour le projet.', 'The director gave us the green light for the project.', '/la di.ʁɛk.tʁis nu.za dɔ.ne lə fø vɛʁ puʁ lə pʁɔ.ʒɛ/', 'la dee-rehk-TREESS noo-za do-NAY luh fuh VEHR poor luh pro-ZHEH', 'courant', ['permission'], FCVDR),
  sent(1536, 'On attend le feu vert de la Ville pour commencer les travaux.', "We are waiting for the city's green light to start the work.", '/ɔ̃.na.tɑ̃ lə fø vɛʁ də la vil puʁ kɔ.mɑ̃.se le tʁa.vo/', 'ohⁿ-na-tahⁿ luh fuh VEHR duh la VEEL poor ko-mahⁿ-say lay tra-VOH', 'courant', ['permission']),
  sent(1537, 'Pour la fête, tu as carte blanche.', 'For the party, you have a free hand.', '/puʁ la fɛt ty a kaʁt blɑ̃ʃ/', 'poor la FEHT tü a kart BLAHⁿSH', 'courant', ['permission'], FCVDR),
  sent(1538, "Le chef m'a donné carte blanche pour le menu.", 'The chef gave me a free hand with the menu.', '/lə ʃɛf ma dɔ.ne kaʁt blɑ̃ʃ puʁ lə mə.ny/', 'luh SHEHF ma do-nay kart BLAHⁿSH poor luh muh-NÜ', 'courant', ['permission']),
  sent(1539, 'Je ne vais pas te signer un chèque en blanc.', 'I am not going to write you a blank cheque.', '/ʒə nə vɛ pa tə si.ɲe œ̃ ʃɛ.kɑ̃ blɑ̃/', 'zhuh nuh veh pa tuh see-NYAY uhⁿ sheh-kahⁿ BLAHⁿ', 'courant', ['permission']),
  sent(1540, "Les électeurs n'ont pas donné un chèque en blanc au maire.", 'The voters did not give the mayor a blank cheque.', '/le.ze.lɛk.tœʁ nɔ̃ pa dɔ.ne œ̃ ʃɛ.kɑ̃ blɑ̃ o mɛʁ/', 'lay-zay-lehk-TUHR nohⁿ pa do-nay uhⁿ sheh-kahⁿ BLAHⁿ oh MEHR', 'courant', ['permission', 'presse']),
  sent(1541, 'Dès le début, elle a annoncé la couleur : pas de réunion le vendredi.', 'From the start, she made her position clear: no meetings on Fridays.', '/dɛ lə de.by ɛ.la a.nɔ̃.se la ku.lœʁ pa d(ə) ʁe.y.njɔ̃ lə vɑ̃.dʁə.di/', 'deh luh day-BÜ eh-la a-nohⁿ-say la koo-LUHR pa duh ray-ü-NYOHⁿ luh vahⁿ-druh-DEE', 'courant', ['permission']),
  sent(1542, 'Annonce la couleur : tu veux le poste ou pas ?', 'Lay your cards on the table: do you want the job or not?', '/a.nɔ̃s la ku.lœʁ ty vø lə pɔst u pa/', 'a-NOHⁿS la koo-LUHR tü vuh luh POST oo PA', 'courant', ['permission']),
  sent(1543, "L'hôtel a déroulé le tapis rouge pour la ministre.", 'The hotel rolled out the red carpet for the minister.', '/lo.tɛl a de.ʁu.le lə ta.pi ʁuʒ puʁ la mi.nistʁ/', 'loh-TEHL a day-roo-lay luh ta-pee ROOZH poor la mee-NEESTR', 'courant', ['accord'], FCVDR),
  sent(1544, 'Je veux ton accord noir sur blanc.', 'I want your agreement in black and white.', '/ʒə vø tɔ̃.na.kɔʁ nwaʁ syʁ blɑ̃/', 'zhuh vuh tohⁿ-na-KOR nwar sür BLAHⁿ', 'courant', ['accord']),
  sent(1545, "C'est écrit noir sur blanc dans le contrat.", 'It is written in black and white in the contract.', '/sɛ.te.kʁi nwaʁ syʁ blɑ̃ dɑ̃ lə kɔ̃.tʁa/', 'seh-tay-KREE nwar sür BLAHⁿ dahⁿ luh kohⁿ-TRA', 'courant', ['accord'], FCVDR),
  sent(1546, "Le feu vert, c'est oui ; le feu rouge, c'est non.", 'The green light is yes; the red light is no.', '/lə fø vɛʁ sɛ wi lə fø ʁuʒ sɛ nɔ̃/', 'luh fuh VEHR seh WEE luh fuh ROOZH seh NOHⁿ', 'courant', ['rule'], RULE,
    rule('« Donner le feu vert » : c’est dire quoi ?', 'Oui : tu permets. Comme en anglais, the green light.')),
];

/* ── ACT 10 · LA MALCHANCE ───────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  idiom(1547, 'une série noire', 'a run of bad luck', '/yn se.ʁi nwaʁ/', 'ün say-ree NWAR', 'courant', 'a black series', ['malchance', 'noir']),
  idiom(1548, 'être sur la liste noire', 'to be on the blacklist', '/ɛtʁ syʁ la list nwaʁ/', 'ehtr sür la leest NWAR', 'courant', 'to be on the black list (the same picture as English)', ['ennuis', 'noir', 'meme-couleur']),
  idiom(1549, 'en voir de toutes les couleurs', 'to go through a lot, to have a rough time', '/ɑ̃ vwaʁ də tut le ku.lœʁ/', 'ahⁿ vwar duh toot lay koo-LUHR', 'courant', 'to see some of all the colours', ['ennuis', 'couleur']),
  idiom(1550, "en faire voir de toutes les couleurs à quelqu'un", 'to give someone a hard time', '/ɑ̃ fɛʁ vwaʁ də tut le ku.lœʁ a kɛl.kœ̃/', 'ahⁿ fehr vwar duh toot lay koo-LUHR a kehl-KUHⁿ', 'courant', 'to make someone see all the colours', ['ennuis', 'couleur']),
  idiom(1551, 'noir de monde', 'packed, heaving with people', '/nwaʁ də mɔ̃d/', 'nwar duh MOHⁿD', 'courant', 'black with people', ['ennuis', 'noir']),
  sent(1552, "Panne d'auto, grippe, dégât d'eau : quelle série noire.", 'Car breakdown, flu, water damage: what a run of bad luck.', '/pan do.to ɡʁip de.ɡa do kɛl se.ʁi nwaʁ/', 'PANN doh-TOH GREEP day-ga DOH kehl say-ree NWAR', 'courant', ['malchance', 'quebec'], FCVDR),
  sent(1553, "L'équipe a connu une série noire de six défaites.", 'The team went through a losing streak of six defeats.', '/le.kip a kɔ.ny yn se.ʁi nwaʁ də si de.fɛt/', 'lay-KEEP a ko-nü ün say-ree NWAR duh see day-FEHT', 'courant', ['malchance']),
  sent(1554, 'Après un retard de paiement, il est sur la liste noire de la banque.', "After a late payment, he is on the bank's blacklist.", '/a.pʁɛ.zœ̃ ʁə.taʁ də pɛ.mɑ̃ i.lɛ syʁ la list nwaʁ də la bɑ̃k/', 'a-preh-zuhⁿ ruh-TAR duh peh-MAHⁿ ee-leh sür la leest NWAR duh la BAHⁿK', 'courant', ['ennuis']),
  sent(1555, "Ce site est sur la liste noire de l'école.", "This website is on the school's blacklist.", '/sə sit ɛ syʁ la list nwaʁ də le.kɔl/', 'suh SEET eh sür la leest NWAR duh lay-KOL', 'courant', ['ennuis'], FCVDR),
  sent(1556, 'Avec ce déménagement, on en a vu de toutes les couleurs.', 'With this move, we had a rough time of it.', '/a.vɛk sə de.me.naʒ.mɑ̃ ɔ̃.nɑ̃.na vy də tut le ku.lœʁ/', 'a-vehk suh day-may-nazh-MAHⁿ ohⁿ-nahⁿ-na vü duh toot lay koo-LUHR', 'courant', ['ennuis']),
  sent(1557, 'Ma grand-mère en a vu de toutes les couleurs pendant la guerre.', 'My grandmother went through a lot during the war.', '/ma ɡʁɑ̃.mɛʁ ɑ̃.na vy də tut le ku.lœʁ pɑ̃.dɑ̃ la ɡɛʁ/', 'ma grahⁿ-MEHR ahⁿ-na vü duh toot lay koo-LUHR pahⁿ-dahⁿ la GEHR', 'courant', ['ennuis'], FCVDR),
  sent(1558, "Mon fils de deux ans m'en fait voir de toutes les couleurs.", 'My two-year-old is giving me a hard time.', '/mɔ̃ fis də dø.zɑ̃ mɑ̃ fɛ vwaʁ də tut le ku.lœʁ/', 'mohⁿ FEESS duh duh-ZAHⁿ mahⁿ feh vwar duh toot lay koo-LUHR', 'courant', ['ennuis']),
  sent(1559, 'Ce client nous en a fait voir de toutes les couleurs.', 'This client gave us a hard time.', '/sə kli.jɑ̃ nu.zɑ̃.na fɛ vwaʁ də tut le ku.lœʁ/', 'suh klee-YAHⁿ noo-zahⁿ-na feh vwar duh toot lay koo-LUHR', 'courant', ['ennuis']),
  sent(1560, 'Samedi, le marché Jean-Talon était noir de monde.', 'On Saturday, Jean-Talon market was heaving with people.', '/sam.di lə maʁ.ʃe ʒɑ̃.ta.lɔ̃ e.tɛ nwaʁ də mɔ̃d/', 'sam-DEE luh mar-shay zhahⁿ-ta-LOHⁿ ay-teh nwar duh MOHⁿD', 'courant', ['ennuis', 'quebec', 'imparfait']),
  sent(1561, 'À Noël, les magasins sont noirs de monde.', 'At Christmas, the shops are packed.', '/a nɔ.ɛl le ma.ɡa.zɛ̃ sɔ̃ nwaʁ də mɔ̃d/', 'a no-EHL lay ma-ga-ZEHⁿ sohⁿ nwar duh MOHⁿD', 'courant', ['ennuis', 'accord']),
  sent(1562, 'En voir de toutes les couleurs : subir. En faire voir : faire subir.', 'En voir: to go through it. En faire voir: to put someone through it.', '/ɑ̃ vwaʁ də tut le ku.lœʁ sy.biʁ ɑ̃ fɛʁ vwaʁ fɛʁ sy.biʁ/', 'ahⁿ vwar duh toot lay koo-LUHR sü-BEER ahⁿ fehr VWAR fehr sü-BEER', 'courant', ['rule'], RULE,
    rule('« Mon fils m’en fait voir de toutes les couleurs » : qui passe un mauvais moment ?', 'Moi. Avec faire, c’est mon fils qui me fait passer ces moments difficiles.')),
];

/* ── ACT 11 · DÉBUTANT OU DOUÉ ───────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  idiom(1563, 'un bleu', 'a rookie, a greenhorn', '/œ̃ blø/', 'uhⁿ BLUH', 'familier', 'a blue (English: green)', ['debutant', 'bleu', 'autre-couleur', 'france']),
  idiom(1564, 'être encore vert', 'to be still green, inexperienced', '/ɛ.tʁɑ̃.kɔʁ vɛʁ/', 'eh-trahⁿ-kor VEHR', 'courant', 'to be still green, like unripe fruit (the same picture as English)', ['debutant', 'vert', 'meme-couleur']),
  idiom(1565, 'un cordon bleu', 'an excellent cook', '/œ̃ kɔʁ.dɔ̃ blø/', 'uhⁿ kor-dohⁿ BLUH', 'courant', 'a blue ribbon', ['talent', 'bleu']),
  idiom(1566, 'avoir la main verte', 'to have green fingers', '/a.vwaʁ la mɛ̃ vɛʁt/', 'a-VWAR la mehⁿ VEHRT', 'courant', 'to have the green hand (English: green fingers)', ['talent', 'vert', 'france']),
  idiom(1567, 'avoir le pouce vert', 'to have a green thumb', '/a.vwaʁ lə pus vɛʁ/', 'a-VWAR luh pooss VEHR', 'courant', 'to have the green thumb (the North American picture)', ['talent', 'vert', 'quebec']),
  idiom(1568, 'la matière grise', 'grey matter, brains', '/la ma.tjɛʁ ɡʁiz/', 'la ma-tyehr GREEZ', 'courant', 'the grey matter (the same picture as English)', ['talent', 'gris', 'meme-couleur']),
  idiom(1569, 'haut en couleur', 'colourful, larger than life', '/o.tɑ̃ ku.lœʁ/', 'oh-tahⁿ koo-LUHR', 'courant', 'high in colour (nearly the English picture)', ['talent', 'couleur']),
  sent(1570, "C'est un bleu : il a commencé lundi.", 'He is a rookie: he started on Monday.', '/sɛ.tœ̃ blø i.la kɔ.mɑ̃.se lœ̃.di/', 'seh-tuhⁿ BLUH ee-la ko-mahⁿ-say luhⁿ-DEE', 'familier', ['debutant', 'france'], FCVDR),
  sent(1571, 'Au début, les bleus font le café et les photocopies.', 'At first, the rookies make the coffee and the photocopies.', '/o de.by le blø fɔ̃ lə ka.fe e le fɔ.tɔ.kɔ.pi/', 'oh day-BÜ lay BLUH fohⁿ luh ka-FAY ay lay fo-to-ko-PEE', 'familier', ['debutant', 'france']),
  sent(1572, 'Pour ce poste, il est encore un peu vert.', 'For this job, he is still a bit green.', '/puʁ sə pɔst i.lɛ.tɑ̃.kɔʁ œ̃ pø vɛʁ/', 'poor suh POST ee-leh-tahⁿ-kor uhⁿ puh VEHR', 'courant', ['debutant'], FCVDR),
  sent(1573, 'Elle est encore verte, mais elle apprend vite.', 'She is still green, but she learns fast.', '/ɛ.lɛ.tɑ̃.kɔʁ vɛʁt mɛ ɛ.la.pʁɑ̃ vit/', 'eh-leh-tahⁿ-kor VEHRT meh eh-la-prahⁿ VEET', 'courant', ['debutant', 'accord']),
  sent(1574, 'Ton père est un vrai cordon bleu.', 'Your father is a superb cook.', '/tɔ̃ pɛʁ ɛ.tœ̃ vʁɛ kɔʁ.dɔ̃ blø/', 'tohⁿ PEHR eh-tuhⁿ vreh kor-dohⁿ BLUH', 'courant', ['talent'], FCVDR),
  sent(1575, 'Ma voisine a la main verte : son balcon est une jungle.', 'My neighbour has green fingers: her balcony is a jungle.', '/ma vwa.zin a la mɛ̃ vɛʁt sɔ̃ bal.kɔ̃ ɛ.tyn ʒœ̃ɡl/', 'ma vwa-ZEEN a la mehⁿ VEHRT sohⁿ bal-KOHⁿ eh-tün ZHUHⁿGL', 'courant', ['talent', 'france']),
  sent(1576, 'Mon grand-père a le pouce vert : ses tomates sont énormes.', 'My grandfather has a green thumb: his tomatoes are huge.', '/mɔ̃ ɡʁɑ̃.pɛʁ a lə pus vɛʁ se tɔ.mat sɔ̃.te.nɔʁm/', 'mohⁿ grahⁿ-PEHR a luh pooss VEHR say to-MAT sohⁿ-tay-NORM', 'courant', ['talent', 'quebec']),
  sent(1577, 'Ce projet demande beaucoup de matière grise.', 'This project takes a lot of brainpower.', '/sə pʁɔ.ʒɛ də.mɑ̃d bo.ku d(ə) ma.tjɛʁ ɡʁiz/', 'suh pro-ZHEH duh-MAHⁿD boh-koo duh ma-tyehr GREEZ', 'courant', ['talent']),
  sent(1578, 'Fais travailler ta matière grise.', 'Put your grey matter to work.', '/fɛ tʁa.va.je ta ma.tjɛʁ ɡʁiz/', 'feh tra-va-YAY ta ma-tyehr GREEZ', 'courant', ['talent']),
  sent(1579, 'Notre voisin est un personnage haut en couleur.', 'Our neighbour is a colourful character.', '/nɔtʁ vwa.zɛ̃ ɛ.tœ̃ pɛʁ.sɔ.naʒ o.tɑ̃ ku.lœʁ/', 'notr vwa-ZEHⁿ eh-tuhⁿ pehr-so-NAZH oh-tahⁿ koo-LUHR', 'courant', ['talent']),
  sent(1580, 'Les deux cuisinières sont des personnages hauts en couleur.', 'Both cooks are larger-than-life characters.', '/le dø kɥi.zi.njɛʁ sɔ̃ de pɛʁ.sɔ.naʒ o.zɑ̃ ku.lœʁ/', 'lay duh kwee-zee-NYEHR sohⁿ day pehr-so-NAZH oh-zahⁿ koo-LUHR', 'courant', ['talent', 'accord']),
  sent(1581, "Un bleu, c'est un débutant ; être encore vert, c'est ne pas être prêt.", 'A bleu is a beginner; être encore vert is not being ready yet.', '/œ̃ blø sɛ.tœ̃ de.by.tɑ̃ ɛ.tʁɑ̃.kɔʁ vɛʁ sɛ nə pa.zɛ.tʁə pʁɛ/', 'uhⁿ BLUH seh-tuhⁿ day-bü-TAHⁿ eh-trahⁿ-kor VEHR seh nuh pa-zeh-truh PREH', 'courant', ['rule'], RULE,
    rule('« A rookie », en français familier ?', 'Un bleu. Et « encore vert » : pas encore prêt, comme un fruit pas mûr.')),
  sent(1582, "Un cordon bleu, ici, c'est une personne qui cuisine bien.", 'A cordon bleu, here, is a person who cooks well.', '/œ̃ kɔʁ.dɔ̃ blø i.si sɛ.tyn pɛʁ.sɔn ki kɥi.zin bjɛ̃/', 'uhⁿ kor-dohⁿ BLUH ee-SEE seh-tün pehr-SON kee kwee-zeen BYEHⁿ', 'courant', ['rule', 'faux-ami'], RULE,
    rule('Au menu, « escalope cordon-bleu ». Et « ta mère est un cordon bleu » ?', "Au menu, c'est un plat. Pour une personne, c'est quelqu'un qui cuisine très bien.")),
];

/* ── ACT 12 · RACONTE TA SEMAINE ─────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1583, "La veille, j'ai passé une nuit blanche.", 'The night before, I did not sleep a wink.', '/la vɛj ʒe pa.se yn nɥi blɑ̃ʃ/', 'la VEHY zhay pa-say ün nwee BLAHⁿSH', 'courant', ['anecdote']),
  sent(1584, 'Devant la patronne, je suis devenu rouge comme une tomate.', 'In front of the boss, I went as red as a beetroot.', '/də.vɑ̃ la pa.tʁɔn ʒə sɥi dəv.ny ʁuʒ kɔ.myn tɔ.mat/', 'duh-vahⁿ la pa-TRON zhuh swee duhv-nü roozh ko-mün to-MAT', 'familier', ['anecdote'], FCVDR),
  sent(1585, "Elle m'a donné carte blanche pour préparer un plat.", 'She gave me a free hand to cook a dish.', '/ɛl ma dɔ.ne kaʁt blɑ̃ʃ puʁ pʁe.pa.ʁe œ̃ pla/', 'ehl ma do-nay kart BLAHⁿSH poor pray-pa-ray uhⁿ PLA', 'courant', ['anecdote']),
  sent(1586, "Jeudi, elle m'a donné le feu vert.", 'On Thursday, she gave me the green light.', '/ʒø.di ɛl ma dɔ.ne lə fø vɛʁ/', 'zhuh-DEE ehl ma do-nay luh fuh VEHR', 'courant', ['anecdote'], FCVDR),
  sent(1587, "J'en avais une peur bleue.", 'I was scared stiff of it.', '/ʒɑ̃.na.vɛ yn pœʁ blø/', 'zhahⁿ-na-veh ün puhr BLUH', 'courant', ['anecdote', 'imparfait']),
  sent(1588, 'Cinq ou six couleurs bien placées, pas un arc-en-ciel.', 'Five or six well-placed colours, not a rainbow.', '/sɛ̃.ku sis ku.lœʁ bjɛ̃ pla.se pa.zœ̃.naʁ.kɑ̃.sjɛl/', 'sehⁿ-koo seess koo-LUHR byehⁿ pla-SAY pa-zuhⁿ-nar-kahⁿ-SYEHL', 'courant', ['rule', 'dosage'], RULE,
    rule('Dans ton message, combien d’expressions ?', 'Cinq ou six, chacune à sa place. Dix, et ton message devient un arc-en-ciel.')),
  sent(1589, "Elle a fait une blague, et j'ai ri jaune.", 'She made a joke, and I gave a forced laugh.', '/ɛ.la fɛ.tyn blaɡ e ʒe ʁi ʒon/', 'eh-la feh-tün BLAG ay zhay ree ZHON', 'courant', ['anecdote']),
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

/** The idioms themselves (one phrase row each), by act. 58 in all. */
export const IDIOMS_BY_ACT: string[][] = ROWS_BY_ACT.map((rows) => rows.filter((r) => r.kind === 'phrase').map((r) => r.id));
export const IDIOM_IDS: string[] = IDIOMS_BY_ACT.flat();

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a newcomer's column, Montréal. The four method idioms. */
export const CHRONIQUE_TEXT =
  "Les couleurs de mon français. Quand je suis arrivée à Montréal, je croyais connaître les couleurs. Rouge, bleu, noir, blanc : facile. Puis, un lundi, j'ai dit à ma collègue Sophie que je me sentais bleue. Elle m'a regardée, inquiète : « Tu as froid ? » En français, la tristesse n'est pas bleue. On broie du noir. Le bleu, lui, c'est la peur : Sophie a une peur bleue des araignées. Mais attention, tout ne change pas. Quand son patron a annulé ses vacances, elle a vu rouge, exactement comme en anglais. Et en anglais, une nuit sans sommeil n'a pas de couleur, alors qu'en français, on passe une nuit blanche. Aujourd'hui, j'ai une règle : chaque langue a sa palette. Je pars du sens, pas de la couleur. Emma";

/** Act 4: a forum post, Bruxelles. The embarrassment idioms. */
export const HONTE_TEXT =
  "Forum Petites hontes. Ma pire honte ? C'était l'an dernier, à Bruxelles, au mariage de mon cousin. Pendant le repas, on m'a demandé de faire un petit discours. Je n'étais pas prêt, et je suis devenu rouge comme une tomate avant même d'ouvrir la bouche. Ensuite, j'ai voulu raconter une blague sur les mariés. Personne n'a ri, sauf le marié, qui a ri jaune. Rouge de honte, j'ai bu mon verre d'eau d'un coup, et je me suis étouffé. Toute la salle me regardait. Même le serveur s'est arrêté. Ma tante m'a tapé dans le dos, et moi, j'avais le rouge aux joues jusqu'au dessert. Depuis, je prépare mes discours une semaine à l'avance. Et vous, c'est quoi, votre pire honte ? Thomas";

/** Act 6: a news brief, Dakar. The money idioms. */
export const DAKAR_TEXT =
  "Économie. Le travail au noir en recul à Dakar ? Selon une étude publiée cette semaine, de plus en plus de jeunes Dakarois refusent de travailler au noir. Pas de contrat, pas d'assurance, pas de retraite : ils veulent un vrai statut. Beaucoup ont vu leurs parents en difficulté, avec un compte dans le rouge à la fin de chaque mois. Les petites entreprises, elles, sortent peu à peu du rouge grâce à de nouveaux prêts. Mais tout n'est pas réglé. Le marché noir des téléphones reste très actif, et la police vient d'arrêter un commerçant qui blanchissait de l'argent dans une boutique de pièces auto. Enfin, le billet vert continue de monter : les produits importés coûtent donc plus cher. Les économistes restent prudents.";

/** Act 9: an email from a manager, Gatineau. The permission idioms. */
export const FETE_TEXT =
  "Objet : la fête de fin d'année. Bonjour Karine, bonne nouvelle : la direction nous a donné le feu vert pour la fête du 15 décembre. Je te laisse organiser la soirée, tu as carte blanche. Attention, ce n'est pas un chèque en blanc : le budget est de deux mille dollars, et je le veux noir sur blanc dans ton plan. J'annonce la couleur tout de suite : pas de karaoké cette année, on s'en souvient encore. Pour nos collègues du bureau de Toronto, on va dérouler le tapis rouge : un bon souper, un petit mot d'accueil, des cadeaux. Pour la musique, je pense à un groupe d'ici, mais c'est toi qui décides. Envoie-moi tes idées d'ici vendredi. Merci, et bravo encore pour ton projet. Nathalie";

/** Act 12: the model anecdote the learner imitates. Six idioms on purpose,
 *  not ten: the task grades fit, and the model shows the dose. */
export const ENTREVUE_TEXT =
  "Salut Malik, tu ne devineras jamais ma semaine. Lundi, j'avais une entrevue pour un poste de cuisinier dans un restaurant du Vieux-Québec. J'en avais une peur bleue, et la veille, j'ai passé une nuit blanche. Devant la patronne, j'ai oublié le nom de mon ancien restaurant, et je suis devenu rouge comme une tomate. Elle a fait une blague sur mon CV, et j'ai ri jaune. Puis elle m'a donné carte blanche pour préparer un plat. Mon pouding chômeur l'a convaincue : jeudi, elle m'a donné le feu vert. Je commence lundi, et je te fais goûter le pouding samedi. Bises, Hugo";

/** The six idioms in ENTREVUE_TEXT, in order. The quiz and the task
 *  checklist are built on this list. */
export const ENTREVUE_IDIOMS = [
  'avoir une peur bleue', 'passer une nuit blanche', 'rouge comme une tomate',
  'rire jaune', 'avoir carte blanche', 'donner le feu vert',
] as const;
