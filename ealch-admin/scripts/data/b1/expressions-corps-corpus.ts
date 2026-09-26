// b1.27.l1 « Les expressions du corps » — the authored corpus, the imports and
// the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md, in the VOCAB SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.28 and b1.29 may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE IDIOMS WHOSE KEY IMAGE IS A PART OF THE BODY. Fifty-nine of them,
//   taught as blocks, grouped by MEANING (not by body part), at most seven
//   per act:
//
//     act 1   the method: coûter les yeux de la tête, donner un coup de main,
//             connaître par cœur, tourner le dos
//     act 2   helping and cooperating (5)
//     act 3   annoying and bothering (5)
//     act 4   laziness and effort (5)
//     act 5   clumsy and tactless (5)
//     act 6   distracted, attentive, obvious (7, one of them Québec only)
//     act 7   money, cost and connections (6, one of them Québec first)
//     act 8   courage and good sense (7)
//     act 9   memory and knowing (5)
//     act 10  refusing and resisting (5)
//     act 11  emotions (5)
//     act 12  an anecdote that uses five or six of them
//
//   WHO OWNS WHICH IDIOM ACROSS b1.27 / b1.28 / b1.29 (decided up front): an
//   idiom belongs to the lesson of its KEY IMAGE. Here the key image is a
//   body part. « avoir les yeux plus gros que le ventre » is b1.27's (act 7).
//   « donner sa langue au chat », « avoir un chat dans la gorge » are b1.28's;
//   « rire jaune », « avoir une peur bleue », « rouge comme une tomate » are
//   b1.29's. No animal, food or colour idiom is TAUGHT here. Two taught items
//   carry a food word as décor and keep the body as the image: « mettre la
//   main à la pâte » (the hand) and « mettre les pieds dans le plat » (the
//   feet). Excluded on purpose because the key image is ambiguous: « avoir un
//   cœur d'artichaut », « avoir la chair de poule », « casser du sucre sur le
//   dos ».
//
//   NOT OWNED: the literal body words, which are a1.24's (« Le corps ») and
//   are imported and cited, never re-taught; the passé composé and imparfait
//   of the anecdote, b1.03's; pronominal verbs, a2.22 / a2.23's; the
//   subjunctive, b1.14 to b1.16's, kept out of every authored French string.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `expressions-imagees` (« Les expressions imagées », domain
//     fondations, levelRange b1-b2; sub-themes le corps, les animaux et la
//     nourriture, les couleurs) WAS CREATED IN POSTGRES ON 2026-09-26 for
//     b1.27, b1.28 and b1.29. IT EXISTS IN POSTGRES ONLY: it is NOT in
//     `seed.json`'s theme list and arrives there at the next publish. So a
//     readiness run WILL warn that the theme is not in the seed's theme list.
//     THAT WARNING IS EXPECTED AND IS NOT A DEFECT. Probed live 2026-09-26
//     (read-only): `select count(*) from content_items where theme =
//     'expressions-imagees'` = 0.
//
//  2. ID BLOCK: this lesson owns `.1000`-`.1199` AND NOTHING ELSE. b1.28 owns
//     `.1200`-`.1399` and b1.29 `.1400`-`.1599`, written in parallel. Used
//     here: `.1000`-`.1178`, contiguous, in twelve act blocks. 179 rows.
//
//  3. THE SEED HOLDS ALMOST NONE OF THESE IDIOMS. Probed 2026-09-26 across
//     every seed item: « donner un coup de main » once (fr.a2.entraide.004,
//     dictation only), « apprendre par cœur » twice (fr.a1.ecole.107 is
//     reused), and nothing else of the 59. POSTGRES holds a few as B1 / B2
//     rows the seed does not carry; they cannot be named (src() resolves
//     against the seed), so this lesson authors twins, listed in
//     DB_ONLY_TWINS below. Dedupe at import (build log open item).
//
//  4. THE LITERAL WORDS come from a1.24 « Le corps »: la main, les yeux,
//     l'œil, la tête, le dos, le pied, le nez, la bouche, le bras, le ventre
//     are imported, one act at a time, where the act's image first needs
//     them. Every reused id was read from seed.json on 2026-09-26 and its
//     French is in the trailing comment.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: ONE.
//     « prochaine » is `pro-SHEHNN` (row 1071), because `SHEHN` trips the
//     digraph rule in hasPlainNasal (EH + N at a word end) although the n is
//     a real consonant. Measured 2026-09-26 with hasPlainNasalFor over all
//     179 rows: zero flagged. No U+203F tie anywhere, in a respelling or an
//     IPA field.
//
//  6. TWO a1.24 RESPELLINGS ARE NOT REUSED, ON PURPOSE: a1.24 respells « la
//     main » `lah MAⁿ` and « l'œil » `LOY`. Neither matches the vowel
//     (/mɛ̃/, /œj/). This lesson writes `MEHⁿ` (as the house writes pain,
//     matin) and `UHY` (as b1.18 writes accueil `la-KUHY`). Raised as an
//     open question, not fixed in a1.24.
//
//  7. REGISTER is a first-class field on every row (`register`: familier or
//     courant), as the vocab shape requires on every card. No row is
//     soutenu. Regional rows carry the tag `quebec`.
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
  id: 'b1.27',
  seq: 27,
  title: 'Body Idioms',
  sub: 'Les expressions du corps',
  canDo: 'Can understand and use about sixty frequent French idioms built on a part of the body, knowing each one\'s image, meaning, register and English equivalent, and can tell a short anecdote that uses several of them naturally',
  prereqUnitIds: ['b1.03'],
} as const;

export const LESSON_ID = 'b1.27.l1';
export const THEME = 'expressions-imagees';
export const LEVEL = 'b1' as const;

/** ONE block, by the house rule for a theme with no published import yet. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label, resolved through
 *  `unitRef`, never typed. b1.* units are not in the seed yet, so they are
 *  labelled in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const CORPS_UNIT = 'a1.24';
export const PC_AVOIR_UNIT = 'a2.05';
export const PRONOMINAL_UNIT = 'a2.22';
export const PRONOMINAL_PC_UNIT = 'a2.23';
export const PC_IMPARFAIT_UNIT = 'b1.03';
export const ANIMAUX_UNIT = 'b1.28';
export const COULEURS_UNIT = 'b1.29';
export const REGISTRE_UNIT = 'b1.25';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23, 'b1.24': 24,
  'b1.25': 25, 'b1.26': 26, 'b1.27': 27, 'b1.28': 28, 'b1.29': 29,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const CORPS_REF = unitRef(CORPS_UNIT);
export const PRONOMINAL_PC_REF = unitRef(PRONOMINAL_PC_UNIT);
export const PC_IMPARFAIT_REF = refFr(PC_IMPARFAIT_UNIT);
export const ANIMAUX_REF = refFr(ANIMAUX_UNIT);
export const COULEURS_REF = refFr(COULEURS_UNIT);
export const REGISTRE_REF = refFr(REGISTRE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  a1.24's reframe is English (A1 is taught in English); every screen that
 *  shows it follows it with the French rendering below.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Verbatim from seed.json `a1.24.l1.reframe`. `corps-corpus.ts` exports no
 *  REFRAME, so it is quoted here and the lesson file ASSERTS it against the
 *  seed at load, so a drift in a1.24 throws instead of misquoting. */
export const A124_REFRAME = 'The person goes in the verb. The body part takes le, la or les.';
export const A124_REFRAME_FR = 'La personne va dans le verbe. La partie du corps prend le, la ou les.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE PICTURE AND THE SENTENCE. Every idiom here carries a picture made of
 *  a body part (eyes that cost, a hair in the hand, feet in the dish). The
 *  picture is what makes it memorable, and it is also the trap: a learner
 *  who reads the picture word by word gets nonsense, and a learner who
 *  translates an English picture word by word gets a French sentence nobody
 *  says. The meaning lives in the whole block, in its situation.
 *
 *  It is NOT « never translate an idiom word for word »: « tourner le dos »,
 *  « s'en laver les mains », « fermer les yeux sur » have the same picture as
 *  English, and act 10 says so.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "L'image vient du corps, le sens vient de la phrase entière.";
export const REFRAME_EN = 'The picture comes from the body; the meaning comes from the whole phrase.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne traduis jamais une expression mot à mot.',
    why: "False where act 10 has to hold: « tourner le dos », « s'en laver les mains » and « fermer les yeux sur » ARE the English picture, word for word. A reframe that forbids a correct move teaches suspicion, not French.",
  },
  {
    text: 'Chaque partie du corps a son sens.',
    why: "The opposite of what the lesson shows. La tête alone gives faire la tête (sulk), prendre la tête (annoy), garder la tête froide (stay calm) and avoir la tête sur les épaules (be sensible). A body part has no stable meaning; the block does.",
  },
  {
    text: 'Les expressions imagées sont familières.',
    why: "False for most of the list: garder la tête froide, tenir tête, fermer les yeux sur, avoir le bras long are courant and fine in a work email. Register is a property of each block, marked card by card.",
  },
  {
    text: "Apprends l'image, et le sens suivra.",
    why: "The image does NOT give the meaning: « avoir le cœur gros » looks like big-hearted and means sad (act 11). The image is the memory hook, never the key.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-26 and its French is in the
 *  trailing comment. `(named only)` rows carry no `flashcard` drill, so no
 *  deckTranche can release them.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.entraide.004',   // Tous mes voisins sont prêts à donner un coup de main.  (named only)
    'fr.a1.ecole.107',      // apprendre par cœur
    'fr.a1.corps.003',      // la main
    'fr.a1.corps.294',      // les yeux
    'fr.a1.corps.001',      // la tête
    'fr.a1.corps.004',      // le dos
  ],
  act2: [] as string[],
  act3: [
    'fr.a1.corps.040',      // le pied
    'fr.a1.corps.018',      // le nez
  ],
  act4: [] as string[],
  act5: [
    'fr.a1.corps.019',      // la bouche
  ],
  act6: [
    'fr.a1.corps.017',      // l'œil
  ],
  act7: [
    'fr.a1.corps.002',      // le bras
    'fr.a1.corps.005',      // le ventre
  ],
  act8: [] as string[],
  act9: [] as string[],
  act10: [] as string[],
  act11: [] as string[],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a2.entraide.004',     // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [...NOT_DECK_ABLE];

/** Published Postgres rows the seed does not carry, so they cannot be named
 *  here; each is twinned by an authored row. Dedupe or keep at import. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.b1.expressions-argot.043', fr: 'avoir un poil dans la main', twin: E(1042) },
  { dbId: 'fr.b1.expressions-argot.044', fr: 'coûter les yeux de la tête', twin: E(1001) },
  { dbId: 'fr.b1.expressions-argot.050', fr: 'mettre les pieds dans le plat', twin: E(1057) },
  { dbId: 'fr.b2.expressions-argot.009', fr: 'avoir le bras long', twin: E(1096) },
  { dbId: 'fr.b1.entraide.057', fr: 'donner un coup de main', twin: E(1000) },
  { dbId: 'fr.b1.emotions.079', fr: 'garder la tête froide', twin: E(1113) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Each idiom has ONE phrase row (the block, in the infinitive, with its
 *  register and its literal picture in `notes`) and one or two sentence rows
 *  that put it in a situation. Respell house style: hyphenated syllables,
 *  the last stressed syllable of each group in caps, ü for French u, nasals
 *  closed with the superscript ⁿ, no U+203F tie. See §A.5 and §A.6.
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

/* ── ACT 1 · LE CORPS PARLE ──────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  idiom(1000, 'donner un coup de main', 'to give a hand, to help out', '/dɔ.ne œ̃ ku d(ə) mɛ̃/', 'do-NAY uhⁿ koo duh MEHⁿ', 'courant', 'to give a blow of hand', ['aider', 'main']),
  idiom(1001, 'coûter les yeux de la tête', 'to cost an arm and a leg', '/ku.te le.zjø d(ə) la tɛt/', 'koo-TAY lay-ZYUH duh la TEHT', 'courant', 'to cost the eyes of the head', ['argent', 'yeux']),
  idiom(1002, 'connaître par cœur', 'to know by heart', '/kɔ.nɛtʁ paʁ kœʁ/', 'ko-NEHTR par KUHR', 'courant', 'to know by heart (the same picture as English)', ['memoire', 'coeur', 'meme-image']),
  idiom(1003, "tourner le dos à quelqu'un", 'to turn your back on someone', '/tuʁ.ne lə do a kɛl.kœ̃/', 'toor-NAY luh DOH a kehl-KUHⁿ', 'courant', 'to turn the back to someone (the same picture as English)', ['refus', 'dos', 'meme-image']),
  sent(1004, 'Ce vélo coûte les yeux de la tête.', 'This bike costs an arm and a leg.', '/sə ve.lo kut le.zjø d(ə) la tɛt/', 'suh vay-LOH koot lay-ZYUH duh la TEHT', 'courant', ['scene', 'argent'], FCVDR),
  sent(1005, 'Tu peux me donner un coup de main samedi ?', 'Can you give me a hand on Saturday?', '/ty pø mə dɔ.ne œ̃ ku d(ə) mɛ̃ sam.di/', 'tü PEU muh do-NAY uhⁿ koo duh MEHⁿ sam-DEE', 'courant', ['aider']),
  sent(1006, 'Karim connaît tous les prix du marché par cœur.', 'Karim knows every price at the market by heart.', '/ka.ʁim kɔ.nɛ tu le pʁi dy maʁ.ʃe paʁ kœʁ/', 'ka-REEM ko-NEH too lay PREE dü mar-SHAY par KUHR', 'courant', ['memoire']),
  sent(1007, "Elle m'a tourné le dos sans rien dire.", 'She turned her back on me without a word.', '/ɛl ma tuʁ.ne lə do sɑ̃ ʁjɛ̃ diʁ/', 'ehl ma toor-NAY luh DOH sahⁿ ryehⁿ DEER', 'courant', ['refus', 'meme-image'], FCVDR),
  sent(1008, REFRAME, REFRAME_EN, '/li.maʒ vjɛ̃ dy kɔʁ lə sɑ̃s vjɛ̃ d(ə) la fʁaz ɑ̃.tjɛʁ/', 'lee-MAZH vyehⁿ dü KOR luh SAHⁿS vyehⁿ duh la FRAZ ahⁿ-TYEHR', 'courant', ['rule', 'reframe'], ['flashcard'],
    rule("« Coûter les yeux de la tête » : où est le sens, dans les yeux ou dans la phrase ?", "Dans la phrase entière : c'est très cher. Les yeux ne sont que l'image.")),
  sent(1009, "J'ai donné un coup de main à mon voisin pour son déménagement.", 'I gave my neighbour a hand with his move.', '/ʒe dɔ.ne œ̃ ku d(ə) mɛ̃ a mɔ̃ vwa.zɛ̃ puʁ sɔ̃ de.me.naʒ.mɑ̃/', 'zhay do-NAY uhⁿ koo duh MEHⁿ a mohⁿ vwa-ZEHⁿ poor sohⁿ day-may-nazh-MAHⁿ', 'courant', ['aider']),
  sent(1010, 'Ici, le loyer coûte les yeux de la tête.', 'Rent here costs an arm and a leg.', '/i.si lə lwa.je kut le.zjø d(ə) la tɛt/', 'ee-SEE luh lwa-YAY koot lay-ZYUH duh la TEHT', 'courant', ['argent']),
  sent(1011, 'Je connais cette chanson par cœur.', 'I know this song by heart.', '/ʒə kɔ.nɛ sɛt ʃɑ̃.sɔ̃ paʁ kœʁ/', 'zhuh ko-NEH seht shahⁿ-SOHⁿ par KUHR', 'courant', ['memoire'], FCVDR),
  sent(1012, 'Ne me tourne pas le dos quand je te parle.', 'Do not turn your back on me when I am talking to you.', '/nə mə tuʁn pa lə do kɑ̃ ʒə tə paʁl/', 'nuh muh TOORN pa luh DOH kahⁿ zhuh tuh PARL', 'courant', ['refus']),
];

/* ── ACT 2 · S'ENTRAIDER ─────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  idiom(1013, 'mettre la main à la pâte', 'to pitch in, to roll up your sleeves', '/mɛtʁ la mɛ̃ a la pɑt/', 'mehtr la MEHⁿ a la PAHT', 'courant', 'to put the hand in the dough', ['aider', 'main']),
  idiom(1014, 'se serrer les coudes', 'to stick together', '/sə se.ʁe le kud/', 'suh seh-RAY lay KOOD', 'courant', 'to squeeze the elbows together', ['aider', 'coude']),
  idiom(1015, 'faire des pieds et des mains', 'to move heaven and earth', '/fɛʁ de pje e de mɛ̃/', 'fehr day PYAY ay day MEHⁿ', 'courant', 'to do feet and hands', ['aider', 'pied', 'main']),
  idiom(1016, 'donner un coup de pouce', 'to give a little boost', '/dɔ.ne œ̃ ku d(ə) pus/', 'do-NAY uhⁿ koo duh POOSS', 'courant', 'to give a blow of thumb', ['aider', 'pouce']),
  idiom(1017, 'avoir le cœur sur la main', 'to be very generous', '/a.vwaʁ lə kœʁ syʁ la mɛ̃/', 'a-VWAR luh KUHR sür la MEHⁿ', 'courant', 'to have the heart on the hand', ['aider', 'coeur', 'faux-ami']),
  sent(1018, 'Même le directeur a mis la main à la pâte.', 'Even the director pitched in.', '/mɛm lə di.ʁɛk.tœʁ a mi la mɛ̃ a la pɑt/', 'MEM luh dee-rehk-TUHR a mee la MEHⁿ a la PAHT', 'courant', ['aider']),
  sent(1019, 'Dans le quartier, on se serre les coudes.', 'In the neighbourhood we stick together.', '/dɑ̃ lə kaʁ.tje ɔ̃ sə sɛʁ le kud/', 'dahⁿ luh kar-TYAY ohⁿ suh SEHR lay KOOD', 'courant', ['aider'], FCVDR),
  sent(1020, 'Pendant la tempête, les voisins se sont serré les coudes.', 'During the storm the neighbours stuck together.', '/pɑ̃.dɑ̃ la tɑ̃.pɛt le vwa.zɛ̃ sə sɔ̃ se.ʁe le kud/', 'pahⁿ-dahⁿ la tahⁿ-PEHT lay vwa-ZEHⁿ suh sohⁿ seh-RAY lay KOOD', 'courant', ['aider', 'passe-compose']),
  sent(1021, 'Elle a fait des pieds et des mains pour trouver ce logement.', 'She moved heaven and earth to find this flat.', '/ɛ.la fɛ de pje e de mɛ̃ puʁ tʁu.ve sə lɔʒ.mɑ̃/', 'eh-la FEH day PYAY ay day MEHⁿ poor troo-VAY suh lozh-MAHⁿ', 'courant', ['aider']),
  sent(1022, "Mon oncle m'a donné un coup de pouce pour trouver un stage.", 'My uncle gave me a boost to find an internship.', '/mɔ̃.nɔ̃kl ma dɔ.ne œ̃ ku d(ə) pus puʁ tʁu.ve œ̃ staʒ/', 'moh-NOHⁿKL ma do-NAY uhⁿ koo duh POOSS poor troo-VAY uhⁿ STAZH', 'courant', ['aider']),
  sent(1023, 'Ma grand-mère a le cœur sur la main.', 'My grandmother is very generous.', '/ma ɡʁɑ̃.mɛʁ a lə kœʁ syʁ la mɛ̃/', 'ma grahⁿ-MEHR a luh KUHR sür la MEHⁿ', 'courant', ['aider'], FCVDR),
  sent(1024, 'Tout le monde a mis la main à la pâte pour la corvée.', 'Everyone pitched in for the work bee.', '/tu lə mɔ̃d a mi la mɛ̃ a la pɑt puʁ la kɔʁ.ve/', 'too luh MOHⁿD a mee la MEHⁿ a la PAHT poor la kor-VAY', 'courant', ['aider', 'quebec']),
  sent(1025, 'Il a le cœur sur la main : il aide tout le monde.', 'He is very generous: he helps everybody.', '/i.la lə kœʁ syʁ la mɛ̃ i.lɛd tu lə mɔ̃d/', 'ee-la luh KUHR sür la MEHⁿ ee-LEHD too luh MOHⁿD', 'courant', ['aider']),
  sent(1026, 'Dans une expression, le verbe se conjugue et le reste ne bouge pas.', 'In an idiom the verb is conjugated and the rest stays put.', '/dɑ̃.zyn ɛk.spʁɛ.sjɔ̃ lə vɛʁb sə kɔ̃.ʒyɡ e lə ʁɛst nə buʒ pa/', 'dahⁿ-zün ehk-spreh-SYOHⁿ luh VEHRB suh kohⁿ-ZHÜG ay luh REHST nuh boozh PA', 'courant', ['rule', 'bloc'], ['flashcard'],
    rule("Dans « se serrer les coudes », qu'est-ce qui change avec le sujet ?", 'Le verbe et le pronom : on se serre les coudes, nous nous serrons les coudes. Les coudes ne bougent pas.')),
];

/* ── ACT 3 · CE QUI AGACE ────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  idiom(1027, "casser les pieds à quelqu'un", 'to get on someone\'s nerves, to bore someone stiff', '/ka.se le pje a kɛl.kœ̃/', 'ka-SAY lay PYAY a kehl-KUHⁿ', 'familier', 'to break the feet of someone', ['agacer', 'pied']),
  idiom(1028, "prendre la tête à quelqu'un", 'to do someone\'s head in', '/pʁɑ̃dʁ la tɛt a kɛl.kœ̃/', 'prahⁿdr la TEHT a kehl-KUHⁿ', 'familier', 'to take the head of someone', ['agacer', 'tete']),
  idiom(1029, 'en avoir plein le dos', 'to be fed up', '/ɑ̃.na.vwaʁ plɛ̃ lə do/', 'ahⁿ-na-VWAR plehⁿ luh DOH', 'familier', 'to have the back full of it', ['agacer', 'dos']),
  idiom(1030, 'taper sur les nerfs', 'to get on your nerves', '/ta.pe syʁ le nɛʁ/', 'ta-PAY sür lay NEHR', 'courant', 'to hit on the nerves', ['agacer', 'nerfs', 'meme-image']),
  idiom(1031, "avoir quelqu'un dans le nez", 'to be unable to stand someone', '/a.vwaʁ kɛl.kœ̃ dɑ̃ lə ne/', 'a-VWAR kehl-KUHⁿ dahⁿ luh NAY', 'familier', 'to have someone in the nose', ['agacer', 'nez']),
  sent(1032, 'Le voisin du dessus me casse les pieds avec sa musique.', 'The upstairs neighbour gets on my nerves with his music.', '/lə vwa.zɛ̃ dy də.sy mə kas le pje a.vɛk sa my.zik/', 'luh vwa-ZEHⁿ dü duh-SÜ muh KASS lay PYAY a-vehk sa mü-ZEEK', 'familier', ['agacer'], FCVDR),
  sent(1033, 'Arrête, tu me prends la tête.', 'Stop it, you are doing my head in.', '/a.ʁɛt ty mə pʁɑ̃ la tɛt/', 'a-REHT tü muh prahⁿ la TEHT', 'familier', ['agacer']),
  sent(1034, "J'en ai plein le dos de ce bruit.", 'I am fed up with this noise.', '/ʒɑ̃.ne plɛ̃ lə do d(ə) sə bʁɥi/', 'zhahⁿ-nay plehⁿ luh DOH duh suh BRWEE', 'familier', ['agacer'], FCVDR),
  sent(1035, 'Cette alarme me tape sur les nerfs.', 'This alarm gets on my nerves.', '/sɛ.ta.laʁm mə tap syʁ le nɛʁ/', 'seh-ta-LARM muh TAP sür lay NEHR', 'courant', ['agacer']),
  sent(1036, "Mon colocataire, je l'ai dans le nez.", 'My flatmate: I cannot stand him.', '/mɔ̃ kɔ.lɔ.ka.tɛʁ ʒə le dɑ̃ lə ne/', 'mohⁿ ko-lo-ka-TEHR zhuh lay dahⁿ luh NAY', 'familier', ['agacer']),
  sent(1037, 'Ces réunions sans fin me cassent les pieds.', 'These endless meetings bore me stiff.', '/se ʁe.y.njɔ̃ sɑ̃ fɛ̃ mə kas le pje/', 'say ray-ü-NYOHⁿ sahⁿ FEHⁿ muh KASS lay PYAY', 'familier', ['agacer']),
  sent(1038, 'Elle en a plein le dos de ses horaires de nuit.', 'She is fed up with her night shifts.', '/ɛ.lɑ̃.na plɛ̃ lə do d(ə) se.zɔ.ʁɛʁ d(ə) nɥi/', 'eh-lahⁿ-na plehⁿ luh DOH duh say-zo-REHR duh NWEE', 'familier', ['agacer']),
  sent(1039, 'Tu me tapes sur les nerfs avec tes questions.', 'You are getting on my nerves with your questions.', '/ty mə tap syʁ le nɛʁ a.vɛk te kɛs.tjɔ̃/', 'tü muh TAP sür lay NEHR a-vehk tay kehs-TYOHⁿ', 'courant', ['agacer']),
  sent(1040, 'Familier : entre amis, jamais dans une lettre au propriétaire.', 'Informal: with friends, never in a letter to your landlord.', '/fa.mi.lje ɑ̃.tʁa.mi ʒa.mɛ dɑ̃.zyn lɛtʁ o pʁɔ.pʁi.je.tɛʁ/', 'fa-mee-LYAY ahⁿ-tra-MEE zha-MEH dahⁿ-zün LEHTR oh pro-pree-yay-TEHR', 'courant', ['rule', 'registre'], ['flashcard'],
    rule('« Il me casse les pieds » : tu peux l’écrire à ton propriétaire ?', 'Non, c’est familier. À l’écrit : « Le bruit me dérange beaucoup. »')),
  sent(1041, 'Le bruit me dérange beaucoup.', 'The noise bothers me a lot.', '/lə bʁɥi mə de.ʁɑ̃ʒ bo.ku/', 'luh BRWEE muh day-RAHⁿZH boh-KOO', 'courant', ['agacer', 'registre'], FCVDR),
];

/* ── ACT 4 · LA PARESSE ET L'EFFORT ──────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  idiom(1042, 'avoir un poil dans la main', 'to be bone idle', '/a.vwaʁ œ̃ pwal dɑ̃ la mɛ̃/', 'a-VWAR uhⁿ PWAL dahⁿ la MEHⁿ', 'familier', 'to have a hair in the hand', ['paresse', 'main']),
  idiom(1043, 'se tourner les pouces', 'to twiddle your thumbs', '/sə tuʁ.ne le pus/', 'suh toor-NAY lay POOSS', 'courant', 'to turn your thumbs', ['paresse', 'pouce', 'meme-image']),
  idiom(1044, 'ne rien faire de ses dix doigts', 'to not lift a finger', '/nə ʁjɛ̃ fɛʁ də se di dwa/', 'nuh ryehⁿ fehr duh say dee DWA', 'courant', 'to do nothing with your ten fingers', ['paresse', 'doigt']),
  idiom(1045, "travailler d'arrache-pied", 'to work flat out', '/tʁa.va.je da.ʁaʃ.pje/', 'tra-va-YAY da-rash-PYAY', 'courant', 'to work tearing out the foot', ['effort', 'pied']),
  idiom(1046, 'se casser la tête', 'to rack your brains, to worry over something', '/sə ka.se la tɛt/', 'suh ka-SAY la TEHT', 'familier', 'to break your head', ['effort', 'tete']),
  sent(1047, 'Mon collègue a un poil dans la main.', 'My colleague is bone idle.', '/mɔ̃ kɔ.lɛɡ a œ̃ pwal dɑ̃ la mɛ̃/', 'mohⁿ ko-LEHG a uhⁿ PWAL dahⁿ la MEHⁿ', 'familier', ['paresse'], FCVDR),
  sent(1048, 'Il se tourne les pouces depuis ce matin.', 'He has been twiddling his thumbs since this morning.', '/il sə tuʁn le pus də.pɥi sə ma.tɛ̃/', 'eel suh TOORN lay POOSS duh-pwee suh ma-TEHⁿ', 'courant', ['paresse']),
  sent(1049, "Pendant les vacances, je n'ai rien fait de mes dix doigts.", 'During the holidays I did not lift a finger.', '/pɑ̃.dɑ̃ le va.kɑ̃s ʒə ne ʁjɛ̃ fɛ d(ə) me di dwa/', 'pahⁿ-dahⁿ lay va-KAHⁿS zhuh nay ryehⁿ FEH duh may dee DWA', 'courant', ['paresse', 'passe-compose']),
  sent(1050, "L'équipe a travaillé d'arrache-pied pour finir à temps.", 'The team worked flat out to finish on time.', '/le.kip a tʁa.va.je da.ʁaʃ.pje puʁ fi.niʁ a tɑ̃/', 'lay-KEEP a tra-va-YAY da-rash-PYAY poor fee-NEER a TAHⁿ', 'courant', ['effort'], FCVDR),
  sent(1051, 'Ne te casse pas la tête, je vais t’aider.', 'Do not rack your brains, I will help you.', '/nə tə kas pa la tɛt ʒə vɛ te.de/', 'nuh tuh KASS pa la TEHT zhuh veh teh-DAY', 'familier', ['effort']),
  sent(1052, 'Je me suis cassé la tête sur ce rapport.', 'I racked my brains over this report.', '/ʒə mə sɥi ka.se la tɛt syʁ sə ʁa.pɔʁ/', 'zhuh muh swee ka-SAY la TEHT sür suh ra-POR', 'familier', ['effort', 'passe-compose']),
  sent(1053, 'Mon frère ne fait rien de ses dix doigts.', 'My brother does not lift a finger.', '/mɔ̃ fʁɛʁ nə fɛ ʁjɛ̃ d(ə) se di dwa/', 'mohⁿ FREHR nuh feh ryehⁿ duh say dee DWA', 'courant', ['paresse'], FCVDR),
  sent(1054, "Elle travaille d'arrache-pied pour son examen.", 'She is working flat out for her exam.', '/ɛl tʁa.vaj da.ʁaʃ.pje puʁ sɔ̃.nɛɡ.za.mɛ̃/', 'ehl tra-VAHY da-rash-PYAY poor sohⁿ-nehg-za-MEHⁿ', 'courant', ['effort']),
  sent(1055, "Avec un poil dans la main, tu n'iras pas loin.", 'Bone idle like that, you will not get far.', '/a.vɛk œ̃ pwal dɑ̃ la mɛ̃ ty ni.ʁa pa lwɛ̃/', 'a-vehk uhⁿ PWAL dahⁿ la MEHⁿ tü nee-RA pa LWEHⁿ', 'familier', ['paresse']),
  sent(1056, 'On ne peut pas se tourner les pouces avant la livraison.', 'We cannot sit idle before the delivery.', '/ɔ̃ nə pø pa sə tuʁ.ne le pus a.vɑ̃ la li.vʁɛ.zɔ̃/', 'ohⁿ nuh PEU pa suh toor-NAY lay POOSS a-vahⁿ la lee-vreh-ZOHⁿ', 'courant', ['paresse']),
];

/* ── ACT 5 · LA GAFFE ────────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  idiom(1057, 'mettre les pieds dans le plat', 'to put your foot in it', '/mɛtʁ le pje dɑ̃ lə pla/', 'mehtr lay PYAY dahⁿ luh PLA', 'courant', 'to put the feet in the dish', ['gaffe', 'pied']),
  idiom(1058, 'avoir deux mains gauches', 'to be all thumbs', '/a.vwaʁ dø mɛ̃ ɡoʃ/', 'a-VWAR deu mehⁿ GOHSH', 'familier', 'to have two left hands', ['gaffe', 'main']),
  idiom(1059, 'se lever du pied gauche', 'to get out of bed on the wrong side', '/sə lə.ve dy pje ɡoʃ/', 'suh luh-VAY dü pyay GOHSH', 'courant', 'to get up on the left foot', ['gaffe', 'pied']),
  idiom(1060, 'ne pas avoir la langue dans sa poche', 'to never be lost for words', '/nə pa.za.vwaʁ la lɑ̃ɡ dɑ̃ sa pɔʃ/', 'nuh pa-za-VWAR la LAHⁿG dahⁿ sa POSH', 'courant', 'to not have your tongue in your pocket', ['langue', 'parler']),
  idiom(1061, 'tourner sept fois sa langue dans sa bouche', 'to think before you speak', '/tuʁ.ne sɛt fwa sa lɑ̃ɡ dɑ̃ sa buʃ/', 'toor-NAY seht FWA sa LAHⁿG dahⁿ sa BOOSH', 'courant', 'to turn your tongue seven times in your mouth', ['langue', 'parler']),
  sent(1062, "J'ai mis les pieds dans le plat en parlant de son ex.", 'I put my foot in it by mentioning his ex.', '/ʒe mi le pje dɑ̃ lə pla ɑ̃ paʁ.lɑ̃ d(ə) sɔ̃.nɛks/', 'zhay mee lay PYAY dahⁿ luh PLA ahⁿ par-LAHⁿ duh sohⁿ-NEHKS', 'courant', ['gaffe', 'passe-compose'], FCVDR),
  sent(1063, "Je ne répare rien : j'ai deux mains gauches.", 'I cannot fix anything: I am all thumbs.', '/ʒə nə ʁe.paʁ ʁjɛ̃ ʒe dø mɛ̃ ɡoʃ/', 'zhuh nuh ray-PAR RYEHⁿ zhay deu mehⁿ GOHSH', 'familier', ['gaffe'], FCVDR),
  sent(1064, "Tu t'es levé du pied gauche ce matin.", 'You got out of bed on the wrong side this morning.', '/ty tɛ lə.ve dy pje ɡoʃ sə ma.tɛ̃/', 'tü teh luh-VAY dü pyay GOHSH suh ma-TEHⁿ', 'courant', ['gaffe', 'passe-compose']),
  sent(1065, "Ma sœur n'a pas la langue dans sa poche.", 'My sister is never lost for words.', '/ma sœʁ na pa la lɑ̃ɡ dɑ̃ sa pɔʃ/', 'ma SUHR na pa la LAHⁿG dahⁿ sa POSH', 'courant', ['parler'], FCVDR),
  sent(1066, 'Avant de répondre, tourne sept fois ta langue dans ta bouche.', 'Before you answer, think before you speak.', '/a.vɑ̃ d(ə) ʁe.pɔ̃dʁ tuʁn sɛt fwa ta lɑ̃ɡ dɑ̃ ta buʃ/', 'a-vahⁿ duh ray-POHⁿDR toorn seht FWA ta LAHⁿG dahⁿ ta BOOSH', 'courant', ['parler'], FCVDR),
  sent(1067, 'Il a encore mis les pieds dans le plat au souper.', 'He put his foot in it again at supper.', '/i.la ɑ̃.kɔʁ mi le pje dɑ̃ lə pla o su.pe/', 'ee-la ahⁿ-KOR mee lay PYAY dahⁿ luh PLA oh soo-PAY', 'courant', ['gaffe', 'quebec']),
  sent(1068, "Avec mes deux mains gauches, j'ai cassé un verre.", 'Clumsy as I am, I broke a glass.', '/a.vɛk me dø mɛ̃ ɡoʃ ʒe ka.se œ̃ vɛʁ/', 'a-vehk may deu mehⁿ GOHSH zhay ka-SAY uhⁿ VEHR', 'familier', ['gaffe']),
  sent(1069, "Elle s'est levée du pied gauche : ne lui parle pas.", 'She got out of bed on the wrong side: do not talk to her.', '/ɛl sɛ lə.ve dy pje ɡoʃ nə lɥi paʁl pa/', 'ehl seh luh-VAY dü pyay GOHSH nuh lwee parl PA', 'courant', ['gaffe', 'passe-compose'], FCVDR),
  sent(1070, "Il n'a pas la langue dans sa poche, et ça plaît aux clients.", 'He is never lost for words, and the customers like it.', '/il na pa la lɑ̃ɡ dɑ̃ sa pɔʃ e sa plɛ o kli.jɑ̃/', 'eel na pa la LAHⁿG dahⁿ sa POSH ay sa PLEH oh klee-YAHⁿ', 'courant', ['parler']),
  sent(1071, 'La prochaine fois, je vais tourner sept fois ma langue dans ma bouche.', 'Next time I will think before I speak.', '/la pʁɔ.ʃɛn fwa ʒə vɛ tuʁ.ne sɛt fwa ma lɑ̃ɡ dɑ̃ ma buʃ/', 'la pro-SHEHNN FWA zhuh veh toor-NAY seht FWA ma LAHⁿG dahⁿ ma BOOSH', 'courant', ['parler']),
  sent(1072, 'Le possessif suit le sujet : ma langue, ta langue, sa langue.', 'The possessive follows the subject: my tongue, your tongue, his or her tongue.', '/lə pɔ.se.sif sɥi lə sy.ʒɛ ma lɑ̃ɡ ta lɑ̃ɡ sa lɑ̃ɡ/', 'luh po-seh-SEEF swee luh sü-ZHEH ma LAHⁿG ta LAHⁿG sa LAHⁿG', 'courant', ['rule', 'bloc'], ['flashcard'],
    rule('« Tourner sept fois sa langue dans sa bouche » : et pour toi ?', 'Tourne sept fois ta langue dans ta bouche. Le possessif suit la personne.')),
];

/* ── ACT 6 · LA TÊTE AILLEURS ────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  idiom(1073, 'avoir la tête dans les nuages', 'to have your head in the clouds', '/a.vwaʁ la tɛt dɑ̃ le nɥaʒ/', 'a-VWAR la TEHT dahⁿ lay NWAZH', 'courant', 'to have the head in the clouds (the same picture as English)', ['distrait', 'tete', 'meme-image']),
  idiom(1074, 'avoir la tête ailleurs', 'to be miles away', '/a.vwaʁ la tɛ.ta.jœʁ/', 'a-VWAR la teh-ta-YUHR', 'courant', 'to have the head elsewhere', ['distrait', 'tete']),
  idiom(1075, 'ne pas avoir les yeux en face des trous', 'to be half asleep, not with it', '/nə pa.za.vwaʁ le.zjø ɑ̃ fas de tʁu/', 'nuh pa-za-VWAR lay-ZYUH ahⁿ FASS day TROO', 'familier', 'to not have the eyes in front of the holes', ['distrait', 'yeux']),
  idiom(1076, 'avoir les yeux dans la graisse de bine', 'to be bleary-eyed (Québec)', '/a.vwaʁ le.zjø dɑ̃ la ɡʁɛs də bin/', 'a-VWAR lay-ZYUH dahⁿ la GREHSS duh BEEN', 'familier', 'to have the eyes in the bean grease', ['distrait', 'yeux', 'quebec']),
  idiom(1077, "jeter un coup d'œil", 'to take a quick look', '/ʒə.te œ̃ ku dœj/', 'zhuh-TAY uhⁿ koo DUHY', 'courant', 'to throw a blow of eye', ['attention', 'oeil']),
  idiom(1078, 'garder un œil sur', 'to keep an eye on', '/ɡaʁ.de œ̃.nœj syʁ/', 'gar-DAY uhⁿ-NUHY SÜR', 'courant', 'to keep an eye on (the same picture as English)', ['attention', 'oeil', 'meme-image']),
  idiom(1079, 'sauter aux yeux', 'to be glaringly obvious', '/so.te o.zjø/', 'soh-TAY oh-ZYUH', 'courant', 'to jump to the eyes', ['attention', 'yeux']),
  sent(1080, 'Il a toujours la tête dans les nuages.', 'He always has his head in the clouds.', '/i.la tu.ʒuʁ la tɛt dɑ̃ le nɥaʒ/', 'ee-la too-ZHOOR la TEHT dahⁿ lay NWAZH', 'courant', ['distrait']),
  sent(1081, "Excuse-moi, j'avais la tête ailleurs.", 'Sorry, I was miles away.', '/ɛks.kyz.mwa ʒa.vɛ la tɛ.ta.jœʁ/', 'ehks-küz-MWA zha-VEH la teh-ta-YUHR', 'courant', ['distrait'], FCVDR),
  sent(1082, "Le lundi matin, je n'ai pas les yeux en face des trous.", 'On Monday mornings I am not with it.', '/lə lœ̃.di ma.tɛ̃ ʒə ne pa le.zjø ɑ̃ fas de tʁu/', 'luh luhⁿ-DEE ma-TEHⁿ zhuh nay pa lay-ZYUH ahⁿ FASS day TROO', 'familier', ['distrait']),
  sent(1083, "À six heures, j'ai les yeux dans la graisse de bine.", 'At six in the morning I am bleary-eyed.', '/a si.zœʁ ʒe le.zjø dɑ̃ la ɡʁɛs də bin/', 'a see-ZUHR zhay lay-ZYUH dahⁿ la GREHSS duh BEEN', 'familier', ['distrait', 'quebec']),
  sent(1084, "Tu peux jeter un coup d'œil à mon courriel ?", 'Can you take a quick look at my email?', '/ty pø ʒə.te œ̃ ku dœj a mɔ̃ ku.ʁjɛl/', 'tü PEU zhuh-TAY uhⁿ koo DUHY a mohⁿ koo-RYEHL', 'courant', ['attention', 'quebec'], FCVDR),
  sent(1085, 'Je garde un œil sur les enfants.', 'I am keeping an eye on the children.', '/ʒə ɡaʁ.d(ə) œ̃.nœj syʁ le.zɑ̃.fɑ̃/', 'zhuh gard uhⁿ-NUHY sür lay-zahⁿ-FAHⁿ', 'courant', ['attention']),
  sent(1086, "L'erreur saute aux yeux.", 'The mistake is glaringly obvious.', '/lɛ.ʁœʁ sot o.zjø/', 'leh-RUHR soht oh-ZYUH', 'courant', ['attention'], FCVDR),
  sent(1087, "J'ai jeté un coup d'œil au plan avant de partir.", 'I had a quick look at the map before leaving.', '/ʒe ʒə.te œ̃ ku dœj o plɑ̃ a.vɑ̃ d(ə) paʁ.tiʁ/', 'zhay zhuh-TAY uhⁿ koo DUHY oh PLAHⁿ a-vahⁿ duh par-TEER', 'courant', ['attention', 'passe-compose']),
  sent(1088, 'Garde un œil sur ton sac dans le métro.', 'Keep an eye on your bag on the metro.', '/ɡaʁ.d(ə) œ̃.nœj syʁ tɔ̃ sak dɑ̃ lə me.tʁo/', 'gard uhⁿ-NUHY sür tohⁿ SAK dahⁿ luh may-TROH', 'courant', ['attention']),
  sent(1089, "Ça saute aux yeux qu'il est fatigué.", 'It is obvious that he is tired.', '/sa sot o.zjø ki.lɛ fa.ti.ɡe/', 'sa soht oh-ZYUH kee-leh fa-tee-GAY', 'courant', ['attention']),
  sent(1090, 'La graisse de bine se dit au Québec, pas en France.', 'Bean grease is said in Québec, not in France.', '/la ɡʁɛs də bin sə di o ke.bɛk pa.zɑ̃ fʁɑ̃s/', 'la GREHSS duh BEEN suh DEE oh kay-BEHK pa-zahⁿ FRAHⁿS', 'courant', ['rule', 'variante', 'quebec'], ['flashcard'],
    rule('Où dit-on « avoir les yeux dans la graisse de bine » ?', 'Au Québec. En France, pour la même idée : ne pas avoir les yeux en face des trous.')),
];

/* ── ACT 7 · L'ARGENT ET LES RELATIONS ───────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  idiom(1091, 'coûter un bras', 'to cost an arm and a leg', '/ku.te œ̃ bʁa/', 'koo-TAY uhⁿ BRA', 'familier', 'to cost an arm (said above all in Québec)', ['argent', 'bras', 'quebec']),
  idiom(1092, "à l'œil", 'for free', '/a lœj/', 'a LUHY', 'familier', 'at the eye', ['argent', 'oeil']),
  idiom(1093, 'mettre la main au portefeuille', 'to put your hand in your pocket, to pay up', '/mɛtʁ la mɛ̃ o pɔʁt.fœj/', 'mehtr la MEHⁿ oh port-FUHY', 'courant', 'to put the hand to the wallet', ['argent', 'main']),
  idiom(1094, 'arriver les mains vides', 'to arrive empty-handed', '/a.ʁi.ve le mɛ̃ vid/', 'a-ree-VAY lay mehⁿ VEED', 'courant', 'to arrive with the hands empty (the same picture as English)', ['argent', 'main', 'meme-image']),
  idiom(1095, 'avoir les yeux plus gros que le ventre', 'to have eyes bigger than your stomach', '/a.vwaʁ le.zjø ply ɡʁo kə lə vɑ̃tʁ/', 'a-VWAR lay-ZYUH plü GROH kuh luh VAHⁿTR', 'courant', 'to have the eyes bigger than the belly (the same picture as English)', ['argent', 'yeux', 'meme-image']),
  idiom(1096, 'avoir le bras long', 'to have friends in high places', '/a.vwaʁ lə bʁa lɔ̃/', 'a-VWAR luh bra LOHⁿ', 'courant', 'to have the long arm', ['relations', 'bras', 'faux-ami']),
  sent(1097, 'Une auto neuve, ça coûte un bras.', 'A new car costs an arm and a leg.', '/y.no.to nœv sa kut œ̃ bʁa/', 'ü-noh-TOH NUHV sa koot uhⁿ BRA', 'familier', ['argent', 'quebec'], FCVDR),
  sent(1098, "J'ai mangé à l'œil chez mon cousin.", "I ate for free at my cousin's.", '/ʒe mɑ̃.ʒe a lœj ʃe mɔ̃ ku.zɛ̃/', 'zhay mahⁿ-ZHAY a LUHY shay mohⁿ koo-ZEHⁿ', 'familier', ['argent', 'passe-compose']),
  sent(1099, 'Pour le cadeau, chacun a mis la main au portefeuille.', 'Everyone chipped in for the present.', '/puʁ lə ka.do ʃa.kœ̃ a mi la mɛ̃ o pɔʁt.fœj/', 'poor luh ka-DOH sha-KUHⁿ a mee la MEHⁿ oh port-FUHY', 'courant', ['argent', 'passe-compose']),
  sent(1100, 'Ne viens pas les mains vides.', 'Do not come empty-handed.', '/nə vjɛ̃ pa le mɛ̃ vid/', 'nuh vyehⁿ pa lay mehⁿ VEED', 'courant', ['argent'], FCVDR),
  sent(1101, "J'ai eu les yeux plus gros que le ventre au buffet.", 'My eyes were bigger than my stomach at the buffet.', '/ʒe y le.zjø ply ɡʁo kə lə vɑ̃tʁ o by.fɛ/', 'zhay Ü lay-ZYUH plü GROH kuh luh VAHⁿTR oh bü-FEH', 'courant', ['argent', 'passe-compose']),
  sent(1102, 'Son père a le bras long à la mairie.', 'His father has friends in high places at the town hall.', '/sɔ̃ pɛʁ a lə bʁa lɔ̃ a la mɛ.ʁi/', 'sohⁿ PEHR a luh bra LOHⁿ a la meh-REE', 'courant', ['relations'], FCVDR),
  sent(1103, 'Il a acheté trop de meubles : il a eu les yeux plus gros que le ventre.', 'He bought too much furniture: his eyes were bigger than his stomach.', '/i.la aʃ.te tʁo d(ə) mœbl i.la y le.zjø ply ɡʁo kə lə vɑ̃tʁ/', 'ee-la ash-TAY troh duh MUHBL ee-la Ü lay-ZYUH plü GROH kuh luh VAHⁿTR', 'courant', ['argent', 'passe-compose']),
  sent(1104, 'Il faudra mettre la main au portefeuille pour le toit.', 'We will have to pay up for the roof.', '/il fo.dʁa mɛtʁ la mɛ̃ o pɔʁt.fœj puʁ lə twa/', 'eel foh-DRA mehtr la MEHⁿ oh port-FUHY poor luh TWA', 'courant', ['argent']),
  sent(1105, 'Sa tante a le bras long : elle connaît tout le monde.', 'Her aunt has friends in high places: she knows everybody.', '/sa tɑ̃t a lə bʁa lɔ̃ ɛl kɔ.nɛ tu lə mɔ̃d/', 'sa TAHⁿT a luh bra LOHⁿ ehl ko-NEH too luh MOHⁿD', 'courant', ['relations']),
  sent(1106, "Je suis arrivé les mains vides, j'avais honte.", 'I arrived empty-handed; I was ashamed.', '/ʒə sɥi.za.ʁi.ve le mɛ̃ vid ʒa.vɛ ɔ̃t/', 'zhuh swee-za-ree-VAY lay mehⁿ VEED zha-VEH OHⁿT', 'courant', ['argent', 'passe-compose']),
  sent(1107, "Le concert était à l'œil, alors on y est allés.", 'The concert was free, so we went.', '/lə kɔ̃.sɛʁ e.tɛ.ta lœj a.lɔʁ ɔ̃.ni.ɛ.ta.le/', 'luh kohⁿ-SEHR ay-teh-ta LUHY a-LOR ohⁿ-nee-eh-ta-LAY', 'familier', ['argent']),
  sent(1108, 'Coûter les yeux de la tête, coûter un bras : même sens, deux registres.', 'Cost the eyes of the head, cost an arm: same meaning, two registers.', '/ku.te le.zjø d(ə) la tɛt ku.te œ̃ bʁa mɛm sɑ̃s dø ʁə.ʒistʁ/', 'koo-TAY lay-ZYUH duh la TEHT koo-TAY uhⁿ BRA MEM SAHⁿS deu ruh-ZHEESTR', 'courant', ['rule', 'registre'], ['flashcard'],
    rule('Ça coûte très cher : comment le dis-tu à un ami, et dans un courriel ?', 'À un ami, au Québec : ça coûte un bras. Partout, même par écrit : ça coûte les yeux de la tête.')),
];

/* ── ACT 8 · LE COURAGE ET LE BON SENS ───────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  idiom(1109, 'ne pas avoir froid aux yeux', 'to be fearless, to have some nerve', '/nə pa.za.vwaʁ fʁwa o.zjø/', 'nuh pa-za-VWAR FRWA oh-ZYUH', 'courant', 'to not have cold in the eyes', ['courage', 'yeux']),
  idiom(1110, 'prendre son courage à deux mains', 'to pluck up your courage', '/pʁɑ̃dʁ sɔ̃ ku.ʁa.ʒa dø mɛ̃/', 'prahⁿdr sohⁿ koo-ra-ZHA deu MEHⁿ', 'courant', 'to take your courage in both hands', ['courage', 'main']),
  idiom(1111, "tenir tête à quelqu'un", 'to stand up to someone', '/tə.niʁ tɛ.ta kɛl.kœ̃/', 'tuh-neer teh-TA kehl-KUHⁿ', 'courant', 'to hold head to someone', ['courage', 'tete']),
  idiom(1112, 'ne pas se laisser marcher sur les pieds', 'to not let people walk all over you', '/nə pa sə lɛ.se maʁ.ʃe syʁ le pje/', 'nuh pa suh leh-SAY mar-SHAY sür lay PYAY', 'courant', 'to not let people walk on your feet', ['courage', 'pied']),
  idiom(1113, 'garder la tête froide', 'to keep a cool head', '/ɡaʁ.de la tɛt fʁwad/', 'gar-DAY la teht FRWAD', 'courant', 'to keep the head cold (nearly the same picture as English)', ['bon-sens', 'tete', 'meme-image']),
  idiom(1114, 'avoir la tête sur les épaules', 'to have your head screwed on', '/a.vwaʁ la tɛt syʁ le.ze.pol/', 'a-VWAR la TEHT sür lay-zay-POHL', 'courant', 'to have the head on the shoulders', ['bon-sens', 'tete']),
  idiom(1115, 'avoir les pieds sur terre', 'to be down to earth', '/a.vwaʁ le pje syʁ tɛʁ/', 'a-VWAR lay PYAY sür TEHR', 'courant', 'to have the feet on the ground (the same picture as English)', ['bon-sens', 'pied', 'meme-image']),
  sent(1116, "Ma cousine n'a pas froid aux yeux : elle est partie seule en Asie.", 'My cousin is fearless: she went to Asia on her own.', '/ma ku.zin na pa fʁwa o.zjø ɛ.lɛ paʁ.ti sœl ɑ̃.na.zi/', 'ma koo-ZEEN na pa FRWA oh-ZYUH eh-leh par-TEE SUHL ahⁿ-na-ZEE', 'courant', ['courage', 'passe-compose']),
  sent(1117, "J'ai pris mon courage à deux mains et j'ai appelé le patron.", 'I plucked up my courage and called the boss.', '/ʒe pʁi mɔ̃ ku.ʁa.ʒa dø mɛ̃ e ʒe a.pə.le lə pa.tʁɔ̃/', 'zhay pree mohⁿ koo-ra-ZHA deu MEHⁿ ay zhay a-puh-LAY luh pa-TROHⁿ', 'courant', ['courage', 'passe-compose'], FCVDR),
  sent(1118, 'Elle a tenu tête à son propriétaire.', 'She stood up to her landlord.', '/ɛ.la tə.ny tɛ.ta sɔ̃ pʁɔ.pʁi.je.tɛʁ/', 'eh-la tuh-NÜ teh-TA sohⁿ pro-pree-yay-TEHR', 'courant', ['courage', 'passe-compose'], FCVDR),
  sent(1119, 'Ne te laisse pas marcher sur les pieds.', 'Do not let people walk all over you.', '/nə tə lɛs pa maʁ.ʃe syʁ le pje/', 'nuh tuh LEHSS pa mar-SHAY sür lay PYAY', 'courant', ['courage']),
  sent(1120, "Pendant l'entrevue, garde la tête froide.", 'During the interview, keep a cool head.', '/pɑ̃.dɑ̃ lɑ̃.tʁə.vy ɡaʁd la tɛt fʁwad/', 'pahⁿ-dahⁿ lahⁿ-truh-VÜ gard la teht FRWAD', 'courant', ['bon-sens', 'quebec'], FCVDR),
  sent(1121, 'Notre fille a la tête sur les épaules.', 'Our daughter has her head screwed on.', '/nɔtʁ fij a la tɛt syʁ le.ze.pol/', 'notr FEEY a la TEHT sür lay-zay-POHL', 'courant', ['bon-sens']),
  sent(1122, 'Mon associé a les pieds sur terre.', 'My business partner is down to earth.', '/mɔ̃.na.sɔ.sje a le pje syʁ tɛʁ/', 'moh-na-so-SYAY a lay PYAY sür TEHR', 'courant', ['bon-sens']),
  sent(1123, 'Au travail, elle ne se laisse pas marcher sur les pieds.', 'At work she does not let anyone walk all over her.', '/o tʁa.vaj ɛl nə sə lɛs pa maʁ.ʃe syʁ le pje/', 'oh tra-VAHY ehl nuh suh LEHSS pa mar-SHAY sür lay PYAY', 'courant', ['courage']),
  sent(1124, "Même après l'accident, il a gardé la tête froide.", 'Even after the accident he kept a cool head.', '/mɛm a.pʁɛ lak.si.dɑ̃ i.la ɡaʁ.de la tɛt fʁwad/', 'MEM a-PREH lak-see-DAHⁿ ee-la gar-DAY la teht FRWAD', 'courant', ['bon-sens', 'passe-compose']),
  sent(1125, "Il n'a pas froid aux yeux, ce petit.", 'That kid has some nerve.', '/il na pa fʁwa o.zjø sə pə.ti/', 'eel na pa FRWA oh-ZYUH suh puh-TEE', 'courant', ['courage']),
];

/* ── ACT 9 · LA MÉMOIRE ET LE SAVOIR ─────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  idiom(1126, 'avoir un mot sur le bout de la langue', 'to have a word on the tip of your tongue', '/a.vwaʁ œ̃ mo syʁ lə bu d(ə) la lɑ̃ɡ/', 'a-VWAR uhⁿ MOH sür luh boo duh la LAHⁿG', 'courant', 'to have a word on the end of the tongue (the same picture as English)', ['memoire', 'langue', 'meme-image']),
  idiom(1127, 'connaître sur le bout des doigts', 'to know inside out', '/kɔ.nɛtʁ syʁ lə bu de dwa/', 'ko-NEHTR sür luh boo day DWA', 'courant', 'to know on the tips of the fingers', ['memoire', 'doigt']),
  idiom(1128, 'les doigts dans le nez', 'easily, hands down', '/le dwa dɑ̃ lə ne/', 'lay DWA dahⁿ luh NAY', 'familier', 'the fingers in the nose', ['savoir', 'doigt', 'nez']),
  idiom(1129, "se mettre le doigt dans l'œil", 'to be completely wrong', '/sə mɛtʁ lə dwa dɑ̃ lœj/', 'suh mehtr luh DWA dahⁿ LUHY', 'familier', 'to put your finger in your eye', ['savoir', 'doigt', 'oeil']),
  idiom(1130, 'mon œil', 'yeah, right; my foot', '/mɔ̃.nœj/', 'moh-NUHY', 'familier', 'my eye', ['savoir', 'oeil']),
  sent(1131, "Son nom ? Je l'ai sur le bout de la langue.", 'His name? It is on the tip of my tongue.', '/sɔ̃ nɔ̃ ʒə le syʁ lə bu d(ə) la lɑ̃ɡ/', 'sohⁿ NOHⁿ zhuh lay sür luh boo duh la LAHⁿG', 'courant', ['memoire'], FCVDR),
  sent(1132, 'Elle connaît le code de la route sur le bout des doigts.', 'She knows the highway code inside out.', '/ɛl kɔ.nɛ lə kɔd də la ʁut syʁ lə bu de dwa/', 'ehl ko-NEH luh KOD duh la ROOT sür luh boo day DWA', 'courant', ['memoire']),
  sent(1133, "J'ai réussi l'examen les doigts dans le nez.", 'I passed the exam easily.', '/ʒe ʁe.y.si lɛɡ.za.mɛ̃ le dwa dɑ̃ lə ne/', 'zhay ray-ü-SEE lehg-za-MEHⁿ lay DWA dahⁿ luh NAY', 'familier', ['savoir', 'passe-compose'], FCVDR),
  sent(1134, "Si tu crois qu'il va payer, tu te mets le doigt dans l'œil.", 'If you think he is going to pay, you are completely wrong.', '/si ty kʁwa kil va pɛ.je ty tə mɛ lə dwa dɑ̃ lœj/', 'see tü KRWA keel va peh-YAY tü tuh meh luh DWA dahⁿ LUHY', 'familier', ['savoir']),
  sent(1135, 'Il a fini ses devoirs en dix minutes ? Mon œil.', 'He finished his homework in ten minutes? Yeah, right.', '/i.la fi.ni se də.vwaʁ ɑ̃ di mi.nyt mɔ̃.nœj/', 'ee-la fee-NEE say duh-VWAR ahⁿ dee mee-NÜT moh-NUHY', 'familier', ['savoir']),
  sent(1136, 'Le mot était sur le bout de ma langue, puis il est parti.', 'The word was on the tip of my tongue, then it was gone.', '/lə mo e.tɛ syʁ lə bu d(ə) ma lɑ̃ɡ pɥi i.lɛ paʁ.ti/', 'luh MOH ay-TEH sür luh boo duh ma LAHⁿG pwee ee-leh par-TEE', 'courant', ['memoire']),
  sent(1137, 'Il connaît son texte sur le bout des doigts.', 'He knows his lines inside out.', '/il kɔ.nɛ sɔ̃ tɛkst syʁ lə bu de dwa/', 'eel ko-NEH sohⁿ TEHKST sür luh boo day DWA', 'courant', ['memoire'], FCVDR),
  sent(1138, 'Ce jeu-là, je le gagne les doigts dans le nez.', 'I win this game hands down.', '/sə ʒø.la ʒə lə ɡaɲ le dwa dɑ̃ lə ne/', 'suh zheu-LA zhuh luh GAÑ lay DWA dahⁿ luh NAY', 'familier', ['savoir']),
  sent(1139, "Je me suis mis le doigt dans l'œil sur la date.", 'I got the date completely wrong.', '/ʒə mə sɥi mi lə dwa dɑ̃ lœj syʁ la dat/', 'zhuh muh swee MEE luh DWA dahⁿ LUHY sür la DAT', 'familier', ['savoir', 'passe-compose']),
  sent(1140, "Tu es malade ? Mon œil, je t'ai vu au parc.", 'You are sick? Yeah, right: I saw you at the park.', '/ty ɛ ma.lad mɔ̃.nœj ʒə te vy o paʁk/', 'tü eh ma-LAD moh-NUHY zhuh tay VÜ oh PARK', 'familier', ['savoir']),
  sent(1141, 'Par cœur, ce sont les mots ; sur le bout des doigts, c’est tout le sujet.', 'By heart is the words; inside out is the whole subject.', '/paʁ kœʁ sə sɔ̃ le mo syʁ lə bu de dwa sɛ tu lə sy.ʒɛ/', 'par KUHR suh sohⁿ lay MOH sür luh boo day DWA seh too luh sü-ZHEH', 'courant', ['rule', 'memoire'], ['flashcard'],
    rule('Un poème ou le code de la route : par cœur, ou sur le bout des doigts ?', 'Le poème, par cœur : les mots dans l’ordre. Le code, sur le bout des doigts : tu le maîtrises.')),
];

/* ── ACT 10 · DIRE NON ───────────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  idiom(1142, 'faire la tête', 'to sulk', '/fɛʁ la tɛt/', 'fehr la TEHT', 'courant', 'to make the head', ['refus', 'tete']),
  idiom(1143, 'faire la sourde oreille', 'to turn a deaf ear', '/fɛʁ la suʁ.dɔ.ʁɛj/', 'fehr la soor-do-REHY', 'courant', 'to make the deaf ear (the same picture as English)', ['refus', 'oreille', 'meme-image']),
  idiom(1144, "n'en faire qu'à sa tête", 'to do exactly as you please', '/nɑ̃ fɛʁ ka sa tɛt/', 'nahⁿ fehr ka sa TEHT', 'courant', 'to do only as your head says', ['refus', 'tete']),
  idiom(1145, "s'en laver les mains", 'to wash your hands of it', '/sɑ̃ la.ve le mɛ̃/', 'sahⁿ la-VAY lay MEHⁿ', 'courant', 'to wash your hands of it (the same picture as English)', ['refus', 'main', 'meme-image']),
  idiom(1146, 'fermer les yeux sur', 'to turn a blind eye to', '/fɛʁ.me le.zjø syʁ/', 'fehr-MAY lay-ZYUH SÜR', 'courant', 'to close the eyes on (nearly the same picture as English)', ['refus', 'yeux', 'meme-image']),
  sent(1147, 'Pourquoi tu fais la tête ?', 'Why are you sulking?', '/puʁ.kwa ty fɛ la tɛt/', 'poor-KWA tü feh la TEHT', 'courant', ['refus']),
  sent(1148, 'Mon fils fait la tête depuis hier.', 'My son has been sulking since yesterday.', '/mɔ̃ fis fɛ la tɛt də.pɥi jɛʁ/', 'mohⁿ FEESS feh la TEHT duh-pwee YEHR', 'courant', ['refus'], FCVDR),
  sent(1149, 'Je lui demande de ranger, et il fait la sourde oreille.', 'I ask him to tidy up and he turns a deaf ear.', '/ʒə lɥi də.mɑ̃d də ʁɑ̃.ʒe e il fɛ la suʁ.dɔ.ʁɛj/', 'zhuh lwee duh-MAHⁿD duh rahⁿ-ZHAY ay eel feh la soor-do-REHY', 'courant', ['refus']),
  sent(1150, "Elle n'en fait qu'à sa tête.", 'She does exactly as she pleases.', '/ɛl nɑ̃ fɛ ka sa tɛt/', 'ehl nahⁿ FEH ka sa TEHT', 'courant', ['refus'], FCVDR),
  sent(1151, 'Le propriétaire fait la sourde oreille depuis un mois.', 'The landlord has been turning a deaf ear for a month.', '/lə pʁɔ.pʁi.je.tɛʁ fɛ la suʁ.dɔ.ʁɛj də.pɥi.zœ̃ mwa/', 'luh pro-pree-yay-TEHR feh la soor-do-REHY duh-pwee-ZUHⁿ MWA', 'courant', ['refus']),
  sent(1152, "Tu as fait ton choix, je m'en lave les mains.", 'You made your choice; I wash my hands of it.', '/ty a fɛ tɔ̃ ʃwa ʒə mɑ̃ lav le mɛ̃/', 'tü a FEH tohⁿ SHWA zhuh mahⁿ lav lay MEHⁿ', 'courant', ['refus']),
  sent(1153, 'La direction ferme les yeux sur les retards.', 'Management turns a blind eye to lateness.', '/la di.ʁɛk.sjɔ̃ fɛʁm le.zjø syʁ le ʁə.taʁ/', 'la dee-rehk-SYOHⁿ fehrm lay-ZYUH sür lay ruh-TAR', 'courant', ['refus'], FCVDR),
  sent(1154, 'Pour cette fois, je ferme les yeux.', 'This time I will turn a blind eye.', '/puʁ sɛt fwa ʒə fɛʁm le.zjø/', 'poor seht FWA zhuh fehrm lay-ZYUH', 'courant', ['refus']),
  sent(1155, "À seize ans, il n'en faisait qu'à sa tête.", 'At sixteen he did exactly as he pleased.', '/a sɛ.zɑ̃ il nɑ̃ fə.zɛ ka sa tɛt/', 'a seh-ZAHⁿ eel nahⁿ fuh-ZEH ka sa TEHT', 'courant', ['refus', 'imparfait']),
  sent(1156, "Le maire s'en est lavé les mains.", 'The mayor washed his hands of it.', '/lə mɛʁ sɑ̃.nɛ la.ve le mɛ̃/', 'luh MEHR sahⁿ-neh la-VAY lay MEHⁿ', 'courant', ['refus', 'passe-compose']),
  sent(1157, "Même image qu'en anglais : laver ses mains, fermer les yeux, tourner le dos.", 'The same picture as in English: wash your hands, close your eyes, turn your back.', '/mɛ.mi.maʒ kɑ̃.nɑ̃.ɡlɛ la.ve se mɛ̃ fɛʁ.me le.zjø tuʁ.ne lə do/', 'meh-mee-MAZH kahⁿ-nahⁿ-GLEH la-VAY say MEHⁿ fehr-MAY lay-ZYUH toor-NAY luh DOH', 'courant', ['rule', 'meme-image'], ['flashcard'],
    rule('Quelles expressions ont la même image en anglais ?', "S'en laver les mains, fermer les yeux sur, tourner le dos : wash your hands of, turn a blind eye, turn your back.")),
];

/* ── ACT 11 · CE QUE TU RESSENS ──────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  idiom(1158, 'avoir le cœur gros', 'to have a heavy heart', '/a.vwaʁ lə kœʁ ɡʁo/', 'a-VWAR luh kuhr GROH', 'courant', 'to have the big heart', ['emotion', 'coeur', 'faux-ami']),
  idiom(1159, 'avoir la gorge serrée', 'to have a lump in your throat', '/a.vwaʁ la ɡɔʁʒ se.ʁe/', 'a-VWAR la GORZH seh-RAY', 'courant', 'to have the throat squeezed', ['emotion', 'gorge']),
  idiom(1160, "avoir l'estomac noué", 'to have a knot in your stomach', '/a.vwaʁ lɛs.tɔ.ma nu.e/', 'a-VWAR lehs-to-MA noo-AY', 'courant', 'to have the stomach knotted (the same picture as English)', ['emotion', 'estomac', 'meme-image']),
  idiom(1161, "s'en mordre les doigts", 'to bitterly regret it', '/sɑ̃ mɔʁdʁ le dwa/', 'sahⁿ mordr lay DWA', 'courant', 'to bite your fingers over it', ['emotion', 'doigt']),
  idiom(1162, 'se faire du mauvais sang', 'to worry yourself sick', '/sə fɛʁ dy mo.vɛ sɑ̃/', 'suh fehr dü moh-veh SAHⁿ', 'courant', 'to make yourself bad blood', ['emotion', 'sang', 'faux-ami']),
  sent(1163, "J'ai le cœur gros de quitter Montréal.", 'I have a heavy heart leaving Montréal.', '/ʒe lə kœʁ ɡʁo d(ə) ki.te mɔ̃.ʁe.al/', 'zhay luh kuhr GROH duh kee-TAY mohⁿ-ray-AL', 'courant', ['emotion'], FCVDR),
  sent(1164, 'Au moment de partir, elle avait la gorge serrée.', 'When it was time to leave, she had a lump in her throat.', '/o mɔ.mɑ̃ d(ə) paʁ.tiʁ ɛ.la.vɛ la ɡɔʁʒ se.ʁe/', 'oh mo-MAHⁿ duh par-TEER eh-la-VEH la GORZH seh-RAY', 'courant', ['emotion', 'imparfait']),
  sent(1165, "Avant l'entrevue, j'avais l'estomac noué.", 'Before the interview I had a knot in my stomach.', '/a.vɑ̃ lɑ̃.tʁə.vy ʒa.vɛ lɛs.tɔ.ma nu.e/', 'a-vahⁿ lahⁿ-truh-VÜ zha-VEH lehs-to-MA noo-AY', 'courant', ['emotion', 'imparfait', 'quebec'], FCVDR),
  sent(1166, "Il a refusé ce poste, et maintenant il s'en mord les doigts.", 'He turned the job down, and now he bitterly regrets it.', '/i.la ʁə.fy.ze sə pɔst e mɛ̃t.nɑ̃ il sɑ̃ mɔʁ le dwa/', 'ee-la ruh-fü-ZAY suh POST ay mehⁿt-NAHⁿ eel sahⁿ mor lay DWA', 'courant', ['emotion']),
  sent(1167, 'Ne te fais pas de mauvais sang, elle va rappeler.', 'Do not worry yourself sick, she will call back.', '/nə tə fɛ pa d(ə) mo.vɛ sɑ̃ ɛl va ʁa.ple/', 'nuh tuh feh pa duh moh-veh SAHⁿ ehl va ra-PLAY', 'courant', ['emotion']),
  sent(1168, 'Ma mère se fait du mauvais sang quand je rentre tard.', 'My mother worries herself sick when I come home late.', '/ma mɛʁ sə fɛ dy mo.vɛ sɑ̃ kɑ̃ ʒə ʁɑ̃tʁ taʁ/', 'ma MEHR suh feh dü moh-veh SAHⁿ kahⁿ zhuh rahⁿtr TAR', 'courant', ['emotion'], FCVDR),
  sent(1169, 'On avait tous le cœur gros à la fin du stage.', 'We all had heavy hearts at the end of the internship.', '/ɔ̃.na.vɛ tus lə kœʁ ɡʁo a la fɛ̃ dy staʒ/', 'ohⁿ-na-VEH TOOSS luh kuhr GROH a la FEHⁿ dü STAZH', 'courant', ['emotion', 'imparfait']),
  sent(1170, 'J’avais la gorge serrée et je ne pouvais pas parler.', 'I had a lump in my throat and I could not speak.', '/ʒa.vɛ la ɡɔʁʒ se.ʁe e ʒə nə pu.vɛ pa paʁ.le/', 'zha-VEH la GORZH seh-RAY ay zhuh nuh poo-VEH pa par-LAY', 'courant', ['emotion', 'imparfait']),
  sent(1171, "Si tu ne viens pas, tu vas t'en mordre les doigts.", 'If you do not come, you will bitterly regret it.', '/si ty nə vjɛ̃ pa ty va tɑ̃ mɔʁdʁ le dwa/', 'see tü nuh vyehⁿ PA tü va tahⁿ mordr lay DWA', 'courant', ['emotion']),
  sent(1172, "Avoir le cœur gros, c'est être triste, pas être généreux.", 'A heavy heart means being sad, not being generous.', '/a.vwaʁ lə kœʁ ɡʁo sɛ.tɛtʁ tʁist pa.zɛtʁ ʒe.ne.ʁø/', 'a-VWAR luh kuhr GROH seh-tehtr TREEST pa-zehtr zhay-nay-RUH', 'courant', ['rule', 'faux-ami'], ['flashcard'],
    rule('Big-hearted : avoir le cœur gros ?', 'Non. Généreux : avoir le cœur sur la main. Le cœur gros : triste.')),
];

/* ── ACT 12 · RACONTE TA JOURNÉE ─────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1173, "Il pleuvait, mais personne ne s'est tourné les pouces.", 'It was raining, but nobody sat idle.', '/il plø.vɛ mɛ pɛʁ.sɔn nə sɛ tuʁ.ne le pus/', 'eel pleu-VEH meh pehr-SON nuh seh toor-NAY lay POOSS', 'courant', ['anecdote', 'passe-compose']),
  sent(1174, "Le frigo était lourd, mais on s'est serré les coudes.", 'The fridge was heavy, but we stuck together.', '/lə fʁi.ɡo e.tɛ luʁ mɛ ɔ̃ sɛ se.ʁe le kud/', 'luh free-GOH ay-teh LOOR meh ohⁿ seh seh-RAY lay KOOD', 'courant', ['anecdote', 'passe-compose'], FCVDR),
  sent(1175, "Bien sûr, j'ai mis les pieds dans le plat devant sa mère.", 'Of course I put my foot in it in front of her mother.', '/bjɛ̃ syʁ ʒe mi le pje dɑ̃ lə pla də.vɑ̃ sa mɛʁ/', 'byehⁿ SÜR zhay mee lay PYAY dahⁿ luh PLA duh-vahⁿ sa MEHR', 'courant', ['anecdote', 'passe-compose']),
  sent(1176, 'À la fin, on avait tous le cœur gros.', 'By the end we all had heavy hearts.', '/a la fɛ̃ ɔ̃.na.vɛ tus lə kœʁ ɡʁo/', 'a la FEHⁿ ohⁿ-na-VEH TOOSS luh kuhr GROH', 'courant', ['anecdote', 'imparfait'], FCVDR),
  sent(1177, 'Deux expressions bien placées valent mieux que dix.', 'Two well-placed idioms are worth more than ten.', '/dø.zɛk.spʁɛ.sjɔ̃ bjɛ̃ pla.se val mjø kə dis/', 'deu-zehk-spreh-SYOHⁿ byehⁿ pla-SAY val MYUH kuh DEESS', 'courant', ['rule', 'dosage'], ['flashcard'],
    rule('Dans ton message, combien d’expressions ?', 'Cinq ou six, chacune à sa place. Dix, et le message sonne faux.')),
  sent(1178, 'Merci à tous pour le coup de main.', 'Thanks, everyone, for the helping hand.', '/mɛʁ.si a tus puʁ lə ku d(ə) mɛ̃/', 'mehr-SEE a TOOSS poor luh koo duh MEHⁿ', 'courant', ['anecdote', 'aider']),
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

/** The idioms themselves (one phrase row each), by act. 59 in all. */
export const IDIOMS_BY_ACT: string[][] = ROWS_BY_ACT.map((rows) => rows.filter((r) => r.kind === 'phrase').map((r) => r.id));
export const IDIOM_IDS: string[] = IDIOMS_BY_ACT.flat();

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a newcomer's blog post, Montréal. 147 words. */
export const BLOG_TEXT =
  "Mes trois premiers mois à Montréal. Au début, je comprenais les mots, mais pas les phrases. Le premier jour, ma voisine m'a demandé si je pouvais lui donner un coup de main. J'ai regardé ma main, puis la sienne, sans rien comprendre : elle voulait seulement de l'aide pour monter ses courses. Au marché, un vendeur m'a dit que les fraises coûtaient les yeux de la tête. J'ai eu peur pour ses yeux ! Mon ami Karim, lui, connaît toutes ces expressions par cœur. Il m'explique toujours la même chose : l'image vient du corps, mais le sens vient de la phrase entière. Maintenant, quand j'entends une partie du corps dans une phrase bizarre, je ne traduis plus. Je regarde la situation. Et la semaine dernière, quand un collègue m'a tourné le dos pendant une dispute, j'ai compris tout de suite : en anglais aussi, on tourne le dos à quelqu'un.";

/** Act 4: an email between colleagues, Lyon. 131 words. Two act 6 idioms
 *  (la tête dans les nuages, la tête ailleurs) appear here first, on purpose. */
export const COURRIEL_TEXT =
  "Objet : le projet Rivière. Salut Nadia, un petit point avant ton retour. Depuis deux semaines, l'équipe travaille d'arrache-pied : on a fini la maquette hier soir, et la cliente vient jeudi. Bon, tout le monde, sauf Bastien. Je ne veux pas être méchante, mais il a un poil dans la main. Pendant les réunions, il se tourne les pouces ou il a la tête dans les nuages, et l'après-midi, il ne fait rien de ses dix doigts. Moi aussi, j'ai parfois la tête ailleurs, mais là, c'est trop. Je me casse la tête depuis lundi pour trouver une solution. Je ne veux pas aller voir la directrice, mais on ne peut pas continuer comme ça. Est-ce que tu peux lui parler à ton retour ? Il t'écoute, toi. Merci, et repose-toi bien. Juliette";

/** Act 7: a forum post from Montréal about a wedding in Dakar. 139 words. */
export const FORUM_TEXT =
  "Forum Mariages. Un mariage à Dakar, vu de Montréal. Bonjour à tous. Ma sœur se marie à Dakar en juillet et, franchement, tout coûte les yeux de la tête : la salle, le traiteur, les robes. Au début, elle a eu les yeux plus gros que le ventre : cinq cents invités ! Maintenant, toute la famille doit mettre la main au portefeuille, même moi, ici à Montréal. Comme on dit au Québec, le billet d'avion m'a coûté un bras. Heureusement, notre oncle a le bras long : il connaît le propriétaire de la salle, et on l'a eue presque à l'œil. Ma question est simple : quand on est invité à un mariage sénégalais, qu'est-ce qu'on apporte ? Je ne veux pas arriver les mains vides, mais je n'ai pas un gros budget, et ça me prend la tête. Merci pour vos idées. Awa";

/** Act 11: a goodbye message to colleagues, Montréal. 122 words. */
export const ADIEU_TEXT =
  "Chers collègues, voilà, c'est mon dernier jour, et j'ai le cœur gros en écrivant ce message. Il y a trois ans, le matin de mon entrevue, j'avais l'estomac noué. Aujourd'hui, j'ai la gorge serrée pour une autre raison : je rentre à Bordeaux. Ma mère se faisait du mauvais sang depuis mon départ, et maintenant, elle est heureuse de me voir rentrer. Moi, je sais que je ne vais pas m'en mordre les doigts : cette équipe m'a tout appris. Merci pour chaque coup de main, chaque café, chaque fou rire. Et merci à Paul, qui ne s'est jamais mis le doigt dans l'œil sur mes idées. Ne vous faites pas de mauvais sang pour moi : je reviens l'été prochain, promis. À bientôt, Inès";

/** Act 12: the model anecdote the learner imitates. 122 words. Six idioms
 *  on purpose, not ten: the task grades fit, and the model shows the dose. */
export const DEMENAGEMENT_TEXT =
  "Salut Hugo, samedi, j'ai aidé mon amie Chloé à déménager, et quelle journée ! Je me suis levé du pied gauche : réveil à six heures, café renversé, bus raté. Il pleuvait, mais personne ne s'est tourné les pouces : tout le monde a mis la main à la pâte. Trois étages sans ascenseur, avec un canapé et quarante boîtes. Le frigo était lourd, mais on s'est serré les coudes, et il est passé par l'escalier sans une égratignure. Bien sûr, j'ai mis les pieds dans le plat devant sa mère : j'ai dit que l'ancien appartement était plus beau. Silence. À la fin, on avait tous le cœur gros de quitter le quartier. Chloé nous a offert une pizza sur le balcon. Bonne semaine, Sam";

/** The six idioms in DEMENAGEMENT_TEXT, in order. The quiz and the task
 *  checklist are built on this list. */
export const DEMENAGEMENT_IDIOMS = [
  'se lever du pied gauche', 'se tourner les pouces', 'mettre la main à la pâte',
  'se serrer les coudes', 'mettre les pieds dans le plat', 'avoir le cœur gros',
] as const;
