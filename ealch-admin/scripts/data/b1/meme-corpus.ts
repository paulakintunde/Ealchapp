// b1.24.l1 « Même » : the authored corpus, the imports and the citation
// constants. DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   EVERY EMPLOI OF « même » EXCEPT « même si ». Measured 2026-09-25: no A1,
//   A2 or B1 lesson names même in `grammarIntroduced`, and a2.08 (the
//   comparative, `../comparatifs-corpus.ts`) owns plus / moins / aussi ...
//   que and the superlative, never « le même ». So this lesson owns, act by
//   act:
//
//     1  the map: same, myself, even, that very, anyway (the opener)
//     2  le / la / les même(s) + noun, and the agreement
//     3  le même ... que, la même chose que, against aussi ... que (a2.08)
//     4  le même as a pronoun (c'est le même, ce sont les mêmes)
//     5  moi-même, toi-même, soi-même ... (emphasis, « fais-le toi-même »),
//        and the reflexive trap (je me suis coupé, not *moi-même)
//     6  même = even (même Paul est venu)
//     7  the place of even-même, including ne ... même pas
//     8  before or after the noun: le même jour / le jour même, la bonté même
//     9  quand même (still, anyway) and « Quand même ! » as register
//    10  de même, tout de même, en même temps, à même (recognition)
//    11  comparing two things with several emplois of même
//
//   NOT OWNED, CITED: the comparative (a2.08) where « le même que » meets
//   « aussi ... que »; celui / celle (a2.33) where le même stands alone;
//   the stressed pronouns moi, toi, lui ... (named by a1.05 on its
//   sheet-stressed as « out of scope until they get their own lesson »; no
//   A1 or A2 unit introduces them as a topic, so this lesson USES them as
//   known forms and cites a1.05 and a1.18's « moi non plus »); the
//   pronominal verbs (a2.22) in the reflexive trap; ne ... pas (a1.18) and
//   the compound-tense slot for short words (b1.20) in act 7; le mien / la
//   mienne (a2.34) in two act 3 rows.
//
//   « MÊME SI » IS CONCESSION AND BELONGS TO b1.32 (not built). It is named
//   ONCE, on one card in act 9, through a seed row, as a forward pointer. No
//   authored French string uses it.
//
//   The subjunctive (b1.14 to b1.16) is kept out of every authored French
//   string. Seed rows with « quel que soit » or « bien que » are NOT
//   imported for that reason.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Wrong forms live in
//   `commonErrors.wrong`, `trapDrill.promptSound`, the scene `break.wrong`
//   and quiz `errorSpot.prompt` only.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, and Postgres probed read-only 2026-09-25
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `comparaisons` exists (« Les comparaisons », domain fondations,
//     levelRange a2-b2; sub-themes set in Postgres 2026-09-25: le comparatif,
//     le superlatif, le même et la différence). Nothing is created at import.
//  2. POSTGRES PROBED 2026-09-25 by this author: a2 160 rows (highest .163),
//     b1 111 rows (highest .115), b2 48 rows (highest .048). NOTHING at or
//     above 1000 at any level. The seed carries 82 rows of the theme (a2 and
//     b1).
//  3. ID BLOCK: b1.24 owns `fr.b1.comparaisons.1000`-`.1199` AND NOTHING
//     ELSE. Used here: `.1000`-`.1179`, 180 rows, in eleven act blocks.
//     Compare full ids, never numbers: the level is part of the id.
//  4. THE THEME HOLDS NO « le même » ROW in Postgres: only two `fr.b1` rows
//     carry même at all, and both are « même si » (.006, .013). So the
//     sub-theme « le même et la différence » is empty, and this corpus is
//     its first content.
//  5. DB-ONLY TWINS outside the theme (probed 2026-09-25, a1-b1): the bare
//     phrases « quand même » (fr.a2.expressions-frequentes.092) and « tout
//     de même » (fr.b1.connecteurs-logiques.112), which this corpus twins as
//     .1146 and .1162. Across a1-b1 Postgres also holds 24 « quand même »,
//     10 « -même(s) », 77 « le/la/les même(s) » and 7 « en même temps »
//     sentences; none is nameable (DB-only) and none is a word-for-word twin
//     of a row here as far as the probe shows. See DB_ONLY_TWINS.
//  6. THE SEED rows used below were read from seed.json on 2026-09-25 and
//     their `fr` is copied verbatim wherever a section prints it, through
//     `src()`.
//  7. RESPELLINGS SPELLED FOR THE NASAL CHECKER. « même » is respelled MEM
//     (mem), NOT « MEHM ». `hasPlainNasal` flags any EH followed by a plain
//     M at a token end (it reads EHM as a nasal closed by m), and that first
//     test cannot be cleared by the French source. MEM is also what the
//     published rows use (fr.a2.prepositions-essentielles.140 « seh lah mem
//     PORT », fr.a2.verbes.826 « ahⁿ mem TAHⁿ »). The second test clears it
//     because the French holds « ême ». Where même runs into a vowel it is
//     meh-M... (« le même âge » luh meh-MAZH). Also spelled for the checker:
//     « mienne » MYENN, « semaine » suh-MENN, « Sherbrooke » never respelled.
//     NAMES were picked to dodge the trap: Élodie, Chloé, Zoé, Hugo,
//     Mathieu, Nadia, Mme Roy. No name ends in -in, -an, -im or -on.
//     Nasal vowels always close with the superscript: ahⁿ, ohⁿ, uhⁿ, ehⁿ.
//     No U+203F tie anywhere, in a respelling or in an IPA field.
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
  id: 'b1.24',
  seq: 24,
  title: 'Même',
  sub: 'Les emplois de même',
  canDo: 'Can use même for sameness (le même livre, le même que, c\'est le même), for emphasis (moi-même), for surprise (même Paul, il ne m\'a même pas répondu), for the exact moment or thing (le jour même) and for concession in speech (quand même), and can compare two things or two people with them',
  prereqUnitIds: ['a2.08', 'a2.33'],
} as const;

export const LESSON_ID = 'b1.24.l1';
export const THEME = 'comparaisons';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds a2 .001-.163 and b1 .001-.115; b1.24 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label, resolved through
 *  `unitRef`. b1.* units are not in the seed yet, so they are labelled in
 *  French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const PRONOMS_SUJETS_UNIT = 'a1.05';
export const NEGATION_UNIT = 'a1.18';
export const ACCORD_UNIT = 'a2.03';
export const COMPARATIFS_UNIT = 'a2.08';
export const PRONOMINAUX_UNIT = 'a2.22';
export const DEMONSTRATIFS_UNIT = 'a2.33';
export const POSSESSIFS_UNIT = 'a2.34';
export const PC_AVOIR_UNIT = 'a2.05';
export const ORDRE_PRONOMS_UNIT = 'b1.17';
export const NEGATION_AVANCEE_UNIT = 'b1.20';
export const REGISTRE_UNIT = 'b1.25';
export const CONCESSION_UNIT = 'b1.32';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = Object.fromEntries(
  Array.from({ length: 39 }, (_, i) => [`b1.${String(i + 1).padStart(2, '0')}`, i + 1]),
);
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const PRONOMS_SUJETS_REF = unitRef(PRONOMS_SUJETS_UNIT);
export const NEGATION_REF = unitRef(NEGATION_UNIT);
export const ACCORD_REF = unitRef(ACCORD_UNIT);
export const COMPARATIFS_REF = unitRef(COMPARATIFS_UNIT);
export const PRONOMINAUX_REF = unitRef(PRONOMINAUX_UNIT);
export const DEMONSTRATIFS_REF = unitRef(DEMONSTRATIFS_UNIT);
export const ORDRE_PRONOMS_REF = refFr(ORDRE_PRONOMS_UNIT);
export const NEGATION_AVANCEE_REF = refFr(NEGATION_AVANCEE_UNIT);
export const REGISTRE_REF = refFr(REGISTRE_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  a2.08 and a2.33 are taught in English, so every screen that shows their
 *  line follows it with the French rendering below. b1.20's line is French
 *  and is quoted as it stands.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A208_REFRAME } from '../comparatifs-corpus.ts';
export { REFRAME as A233_REFRAME } from '../demonstratifs-corpus.ts';
export { REFRAME as B120_REFRAME } from './negation-avancee-corpus.ts';

export const A208_REFRAME_FR = 'Choisis le mot du milieu, et garde le cadre.';
export const A233_REFRAME_FR = 'Un nom après : il montre. Pas de nom : il remplace.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE IDENTICAL PAIR. Même always says that something does NOT change:
 *  between two things (le même livre), between a person and whoever might
 *  have stood in for them (moi-même: nobody else), between the rule and the
 *  case you would have expected to escape it (même Paul: no exception, even
 *  there), between a day and the day already named (le jour même: that day,
 *  no other), and between an obstacle and the result (quand même: the
 *  result does not change). The second half of the reframe uses even-même
 *  itself, so the line teaches both halves of the word at once.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Même dit que rien ne change, même là.';
export const REFRAME_EN = 'Même says that nothing changes, even there.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Même veut dire same.',
    why: "False in five acts of eleven: même Paul (act 6), ne ... même pas (act 7), quand même (act 9) have no « same » in their English. A reframe acts 6 to 9 must apologise for is not a reframe.",
  },
  {
    text: 'Même, c’est same ou even.',
    why: "Two translations, not one idea, and it still misses le jour même (that very) and quand même (anyway). It also teaches the learner to pick by translating, which is the instinct act 1's scene punishes.",
  },
  {
    text: 'Même insiste.',
    why: "True of moi-même and même Paul, false of le même livre, which compares and insists on nothing. It would also make quand même look like an intensifier, which is the error act 9's trap is built on.",
  },
  {
    text: 'Le même que, comme aussi ... que.',
    why: "a2.08's frame, and only act 3's topic. It invites « aussi » and « comme » after le même, which are the two errors act 3 corrects.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its French is in the
 *  trailing comment. `named only` rows carry no `flashcard` drill, so no
 *  deckTranche can release them. `NOT_SPEAKABLE` adds the rows with no
 *  `voiceflash`, which a `practice` speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.cafe.085',                 // Je prends la même chose.
    'fr.a2.prepositions-essentielles.140', // C'est la même porte.
  ],
  act2: [
    'fr.a2.heure-et-date.145',        // Tous les mois, la facture arrive le même jour.
    'fr.a1.famille.173',              // Les jumeaux portent les mêmes vêtements.  (named only)
  ],
  act3: [
    'fr.a1.cafe.115',                 // Elle commande la même chose que lui.  (named only)
    'fr.a2.heure-et-date.256',        // Elle est née la même année que son frère.  (named only)
    'fr.b1.routines.070',             // Ce n'est pas la même chose de se lever tôt en semaine et le week-end.  (named only)
  ],
  act4: [
    'fr.a2.hebergement.082',          // C'est toujours le même problème.
    'fr.a2.hebergement.090',          // C'est la deuxième nuit avec le même bruit.
  ],
  act5: [
    'fr.a2.rp-etiquette.002',         // c'est moi-même
  ],
  act6: [
    'fr.b1.conflits-reconciliation.006', // Mon petit frère ne dit jamais pardon, même quand il sait qu'il a tort.  (named only)
    'fr.b1.entraide.002',             // Elle a été présente à chaque étape, même dans les moments les plus difficiles.  (named only)
  ],
  act7: [] as string[],               // the seed carries no « même pas » row at a1-b1
  act8: [
    'fr.b1.heure-et-date.039',        // L'année dernière à la même époque, il neigeait.
  ],
  act9: [
    'fr.a2.famille.012',              // Ma tante était malade, mais elle est venue au mariage quand même.  (named only)
    'fr.b1.maison.079',               // Elle préfère un appartement calme même si le loyer est plus élevé.  (the ONE même si pointer)
  ],
  act10: [
    'fr.a2.verbes.826',               // Nous nous sommes levés en même temps.  (named only)
    'fr.b1.bureau.005',               // Le stagiaire a dû apprendre à gérer plusieurs dossiers en même temps.
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.famille.173',                // sentence, review
  'fr.a1.cafe.115',                   // dictation
  'fr.a2.heure-et-date.256',          // dictation
  'fr.b1.routines.070',               // dictation
  'fr.b1.conflits-reconciliation.006', // dictation
  'fr.b1.entraide.002',               // dictation
  'fr.a2.famille.012',                // dictation
  'fr.a2.verbes.826',                 // sentence, roleplay, review
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a2.heure-et-date.145',          // flashcard, sentence
  'fr.b1.heure-et-date.039',          // flashcard, sentence
  'fr.b1.bureau.005',                 // sentence, flashcard, review
  'fr.b1.maison.079',                 // sentence, flashcard, review (and même si: b1.32's)
];

/** Published rows this corpus is known to twin. Not nameable today
 *  (DB-only). Decide at import: dedupe or keep both. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.a2.expressions-frequentes.092', fr: 'quand même', twin: E(1146) },
  { dbId: 'fr.b1.connecteurs-logiques.112', fr: 'tout de même', twin: E(1162) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['meme'], ...extra,
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

/* ── ACT 1 · LE MÊME QUE TOI ────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, "J'ai le même ordinateur que toi.", 'I have the same computer as you.', '/ʒe lə mɛm ɔʁ.di.na.tœʁ kə twa/', 'zhay luh mem or-dee-na-TUHR kuh TWA', ['scene', 'meme-que'], FCVDR),
  sent(1001, "C'est la même couleur.", 'It is the same colour.', '/sɛ la mɛm ku.lœʁ/', 'seh la mem koo-LUHR', ['scene', 'meme-nom']),
  sent(1002, 'Nous avons les mêmes chaussures.', 'We have the same shoes.', '/nu.za.vɔ̃ le mɛm ʃo.syʁ/', 'noo-za-vohⁿ lay mem sho-SÜR', ['meme-nom', 'accord'], FCVDR),
  sent(1003, "Ce n'est pas le même sac.", 'It is not the same bag.', '/sə nɛ pa lə mɛm sak/', 'suh neh pa luh mem SAK', ['meme-nom']),
  sent(1004, 'Même Paul est venu ce matin.', 'Even Paul came this morning.', '/mɛm pɔl ɛ və.ny sə ma.tɛ̃/', 'mem POL | eh vuh-nü suh ma-TEHⁿ', ['even'], FCVDR),
  sent(1005, "Je l'ai réparé moi-même.", 'I fixed it myself.', '/ʒə le ʁe.pa.ʁe mwa.mɛm/', 'zhuh lay ray-pa-ray mwa-MEM', ['soi'], FCVDR),
  sent(1006, 'Elle est partie le jour même.', 'She left that very day.', '/ɛ.lɛ paʁ.ti lə ʒuʁ mɛm/', 'eh-leh par-tee luh zhoor MEM', ['apres-nom']),
  sent(1007, 'Il pleuvait, mais on est sortis quand même.', 'It was raining, but we went out anyway.', '/il plø.vɛ mɛ ɔ̃.nɛ sɔʁ.ti kɑ̃ mɛm/', 'eel pluh-VEH | meh ohⁿ-neh sor-tee kahⁿ MEM', ['quand-meme'], FCVDR),
  sent(1008, REFRAME, REFRAME_EN, '/mɛm di kə ʁjɛ̃ nə ʃɑ̃ʒ mɛm la/', 'mem dee kuh ryehⁿ nuh SHAHⁿZH | mem LA', ['rule', 'reframe'], ['flashcard'],
    rule("« le même sac » et « même Paul » : qu'est-ce qui ne change pas ?", "Le sac : c'est celui-là, pas un autre. Et la règle : tout le monde est venu, et Paul aussi, sans exception.")),
  sent(1009, 'On a eu la même idée.', 'We had the same idea.', '/ɔ̃.na y la mɛm i.de/', 'ohⁿ-na ü la mem ee-DAY', ['meme-nom']),
  sent(1010, 'Tu as le même téléphone que moi.', 'You have the same phone as me.', '/ty a lə mɛm te.le.fɔn kə mwa/', 'tü a luh mem tay-lay-fonn kuh MWA', ['meme-que']),
  sent(1011, 'Ce sont les mêmes clés.', 'They are the same keys.', '/sə sɔ̃ le mɛm kle/', 'suh sohⁿ lay mem KLAY', ['meme-nom', 'accord']),
  sent(1012, 'Nous travaillons dans le même bureau.', 'We work in the same office.', '/nu tʁa.va.jɔ̃ dɑ̃ lə mɛm by.ʁo/', 'noo tra-va-YOHⁿ dahⁿ luh mem bü-ROH', ['meme-nom'], FCVDR),
  sent(1013, "Elle ne m'a même pas regardé.", 'She did not even look at me.', '/ɛl nə ma mɛm pa ʁə.ɡaʁ.de/', 'ehl nuh ma mem pa ruh-gar-DAY', ['even', 'meme-pas']),
  sent(1014, "C'est exactement le même modèle.", 'It is exactly the same model.', '/sɛ.tɛɡ.zak.tə.mɑ̃ lə mɛm mɔ.dɛl/', 'seh-tehg-zak-tuh-MAHⁿ luh mem mo-DEHL', ['scene', 'meme-nom']),
];

/* ── ACT 2 · LE, LA, LES MÊMES ──────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  phrase(1015, 'le même quartier', 'the same neighbourhood', '/lə mɛm kaʁ.tje/', 'luh mem kar-TYAY', ['accord', 'masculin']),
  phrase(1016, 'la même rue', 'the same street', '/la mɛm ʁy/', 'la mem RÜ', ['accord', 'feminin']),
  phrase(1017, 'les mêmes horaires', 'the same hours', '/le mɛm.zɔ.ʁɛʁ/', 'lay mem-zo-REHR', ['accord', 'pluriel']),
  sent(1018, 'Les jumelles ont les mêmes yeux.', 'The twins have the same eyes.', '/le ʒy.mɛl ɔ̃ le mɛm.zjø/', 'lay zhü-MEHL | ohⁿ lay mem-ZYEU', ['accord', 'pluriel', 'jumelles'], FCVDR),
  sent(1019, 'Nous habitons dans la même rue.', 'We live on the same street.', '/nu.za.bi.tɔ̃ dɑ̃ la mɛm ʁy/', 'noo-za-bee-TOHⁿ dahⁿ la mem RÜ', ['accord', 'feminin'], FCVDR),
  sent(1020, 'Ils ont le même âge.', 'They are the same age.', '/il.zɔ̃ lə mɛ.maʒ/', 'eel-zohⁿ luh meh-MAZH', ['accord', 'masculin'], FCVDR),
  sent(1021, 'Elles portent la même robe.', 'They are wearing the same dress.', '/ɛl pɔʁt la mɛm ʁɔb/', 'ehl port la mem ROB', ['accord', 'feminin']),
  sent(1022, 'Je prends toujours le même autobus.', 'I always take the same bus.', '/ʒə pʁɑ̃ tu.ʒuʁ lə mɛ.mo.to.bys/', 'zhuh prahⁿ too-ZHOOR | luh meh-mo-to-BÜS', ['accord', 'quebec'], FCVDR),
  sent(1023, 'Nous avons les mêmes goûts.', 'We have the same tastes.', '/nu.za.vɔ̃ le mɛm ɡu/', 'noo-za-vohⁿ lay mem GOO', ['accord', 'pluriel']),
  sent(1024, "Même s'accorde comme un adjectif : le même, la même, les mêmes.", 'Même agrees like an adjective: le même, la même, les mêmes.', '/mɛm sa.kɔʁd kɔ.mœ̃.na.dʒɛk.tif lə mɛm la mɛm le mɛm/', 'mem sa-KORD ko-muhⁿ-nad-zhehk-TEEF | luh MEM | la MEM | lay MEM', ['rule', 'accord'], ['flashcard'],
    rule('« les mêmes clés » : pourquoi un s à mêmes ?', "Parce que clés est au pluriel. Même prend le nombre du nom, comme un adjectif. Au féminin, il ne change pas : le même, la même.")),
  sent(1025, 'Tu fais toujours les mêmes erreurs.', 'You always make the same mistakes.', '/ty fɛ tu.ʒuʁ le mɛm.ze.ʁœʁ/', 'tü feh too-zhoor lay mem-zay-RUHR', ['accord', 'pluriel']),
  sent(1026, 'On se voit à la même heure demain.', 'Same time tomorrow.', '/ɔ̃ sə vwa a la mɛ.mœʁ də.mɛ̃/', 'ohⁿ suh vwa a la meh-MUHR | duh-MEHⁿ', ['accord', 'feminin'], FCVDR),
  sent(1027, 'Ce ne sont pas les mêmes chiffres.', 'Those are not the same figures.', '/sə nə sɔ̃ pa le mɛm ʃifʁ/', 'suh nuh sohⁿ pa lay mem SHEEFR', ['accord', 'pluriel']),
  sent(1028, 'Elle a gardé le même numéro.', 'She kept the same number.', '/ɛ.la ɡaʁ.de lə mɛm ny.me.ʁo/', 'eh-la gar-DAY luh mem nü-may-ROH', ['accord', 'masculin']),
  sent(1029, 'Ils lisent les mêmes livres.', 'They read the same books.', '/il liz le mɛm livʁ/', 'eel leez lay mem LEEVR', ['accord', 'pluriel'], FCVR,
    gap('Ils lisent les ___ livres.', 'mêmes : livres est au pluriel, donc même prend un s.')),
  sent(1030, "C'est le même prix partout.", 'It is the same price everywhere.', '/sɛ lə mɛm pʁi paʁ.tu/', 'seh luh mem pree par-TOO', ['accord', 'masculin']),
  sent(1031, 'Mes deux sœurs ont la même voix.', 'My two sisters have the same voice.', '/me dø sœʁ ɔ̃ la mɛm vwa/', 'may deu SUHR | ohⁿ la mem VWA', ['accord', 'feminin']),
];

/* ── ACT 3 · LE MÊME QUE ────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1032, 'Elle a la même voiture que son voisin.', 'She has the same car as her neighbour.', '/ɛ.la la mɛm vwa.tyʁ kə sɔ̃ vwa.zɛ̃/', 'eh-la la mem vwa-TÜR | kuh sohⁿ vwa-ZEHⁿ', ['meme-que'], FCVDR),
  sent(1033, 'Je veux la même chose que toi.', 'I want the same thing as you.', '/ʒə vø la mɛm ʃoz kə twa/', 'zhuh veu la mem shohz kuh TWA', ['meme-que', 'chose'], FCVDR),
  sent(1034, 'Il a le même âge que moi.', 'He is the same age as me.', '/i.la lə mɛ.maʒ kə mwa/', 'ee-la luh meh-mazh kuh MWA', ['meme-que']),
  sent(1035, "Nous avons les mêmes horaires que l'an dernier.", 'We have the same hours as last year.', '/nu.za.vɔ̃ le mɛm.zɔ.ʁɛʁ kə lɑ̃ dɛʁ.nje/', 'noo-za-vohⁿ lay mem-zo-REHR | kuh lahⁿ dehr-NYAY', ['meme-que', 'pluriel']),
  sent(1036, 'Ta valise est aussi grande que la mienne.', 'Your suitcase is as big as mine.', '/ta va.liz ɛ.to.si ɡʁɑ̃d kə la mjɛn/', 'ta va-LEEZ | eh-toh-see grahⁿd kuh la MYENN', ['comparatif', 'aussi']),
  sent(1037, 'Ta valise a la même taille que la mienne.', 'Your suitcase is the same size as mine.', '/ta va.liz a la mɛm taj kə la mjɛn/', 'ta va-LEEZ | a la mem tahy kuh la MYENN', ['meme-que'], FCVDR),
  sent(1038, "Le même que : même devant le nom, que devant ce qu'on compare.", 'Le même que: même before the noun, que before what you compare.', '/lə mɛm kə mɛm də.vɑ̃ lə nɔ̃ kə də.vɑ̃ sə kɔ̃ kɔ̃.paʁ/', 'luh mem KUH | mem duh-vahⁿ luh NOHⁿ | kuh duh-vahⁿ suh kohⁿ kohⁿ-PAR', ['rule', 'meme-que'], ['flashcard'],
    rule('« I have the same phone as you. » Quel mot traduit as ?', "que : j'ai le même téléphone que toi. Jamais comme, jamais aussi.")),
  sent(1039, 'Tu travailles dans la même entreprise que ma sœur.', 'You work for the same company as my sister.', '/ty tʁa.vaj dɑ̃ la mɛ.mɑ̃.tʁə.pʁiz kə ma sœʁ/', 'tü tra-VAHY | dahⁿ la meh-mahⁿ-truh-PREEZ | kuh ma SUHR', ['meme-que']),
  sent(1040, 'Elle parle avec le même accent que sa mère.', 'She speaks with the same accent as her mother.', '/ɛl paʁl a.vɛk lə mɛ.mak.sɑ̃ kə sa mɛʁ/', 'ehl parl a-vehk luh meh-mak-SAHⁿ | kuh sa MEHR', ['meme-que'], FCVDR),
  sent(1041, "Ce n'est pas la même chose.", 'It is not the same thing.', '/sə nɛ pa la mɛm ʃoz/', 'suh neh pa la mem SHOHZ', ['chose'], FCVDR),
  sent(1042, "C'est la même chose pour moi.", 'Same for me.', '/sɛ la mɛm ʃoz puʁ mwa/', 'seh la mem shohz poor MWA', ['chose']),
  sent(1043, 'Il est aussi grand que son frère.', 'He is as tall as his brother.', '/i.lɛ.to.si ɡʁɑ̃ kə sɔ̃ fʁɛʁ/', 'ee-leh-toh-see grahⁿ kuh sohⁿ FREHR', ['comparatif', 'aussi']),
  sent(1044, 'Il fait la même taille que son frère.', 'He is the same height as his brother.', '/il fɛ la mɛm taj kə sɔ̃ fʁɛʁ/', 'eel feh la mem tahy kuh sohⁿ FREHR', ['meme-que']),
  sent(1045, 'Je suis du même avis que toi.', 'I am of the same opinion as you.', '/ʒə sɥi dy mɛ.ma.vi kə twa/', 'zhuh swee dü meh-ma-vee kuh TWA', ['meme-que'], FCVDR),
  phrase(1046, 'le même ... que', 'the same ... as', '/lə mɛm kə/', 'luh MEM ... KUH', ['meme-que']),
  phrase(1047, 'la même chose que', 'the same thing as', '/la mɛm ʃoz kə/', 'la mem SHOHZ kuh', ['meme-que', 'chose']),
  sent(1048, "On a le même problème que l'an passé.", 'We have the same problem as last year.', '/ɔ̃.na lə mɛm pʁɔ.blɛm kə lɑ̃ pa.se/', 'ohⁿ-na luh mem pro-BLEM | kuh lahⁿ pa-SAY', ['meme-que', 'quebec'], FCVR,
    gap("On a le même problème ___ l'an passé.", 'que : après le même, on compare avec que, jamais avec comme.')),
  sent(1049, 'Elle commande toujours la même chose que moi.', 'She always orders the same thing as me.', '/ɛl kɔ.mɑ̃d tu.ʒuʁ la mɛm ʃoz kə mwa/', 'ehl ko-MAHⁿD | too-zhoor la mem shohz kuh MWA', ['meme-que', 'chose']),
];

/* ── ACT 4 · LE MÊME, TOUT SEUL ─────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1050, "C'est le même.", 'It is the same one.', '/sɛ lə mɛm/', 'seh luh MEM', ['pronom'], FCVDR),
  sent(1051, 'Ce sont les mêmes.', 'They are the same ones.', '/sə sɔ̃ le mɛm/', 'suh sohⁿ lay MEM', ['pronom', 'pluriel'], FCVDR),
  sent(1052, "Ce n'est pas la même.", 'It is not the same one.', '/sə nɛ pa la mɛm/', 'suh neh pa la MEM', ['pronom', 'feminin']),
  sent(1053, 'Je voudrais le même, en bleu.', 'I would like the same one, in blue.', '/ʒə vu.dʁɛ lə mɛm ɑ̃ blø/', 'zhuh voo-dreh luh MEM | ahⁿ BLEU', ['pronom'], FCVDR),
  sent(1054, 'Tu as les mêmes, mais en noir.', 'You have the same ones, but in black.', '/ty a le mɛm mɛ.zɑ̃ nwaʁ/', 'tü a lay MEM | meh-zahⁿ NWAR', ['pronom', 'pluriel']),
  sent(1055, 'Ton sac et le mien, ce sont les mêmes.', 'Your bag and mine are the same.', '/tɔ̃ sak e lə mjɛ̃ sə sɔ̃ le mɛm/', 'tohⁿ SAK | ay luh MYEHⁿ | suh sohⁿ lay MEM', ['pronom', 'pluriel']),
  sent(1056, 'Ce sont toujours les mêmes qui parlent.', 'It is always the same people who talk.', '/sə sɔ̃ tu.ʒuʁ le mɛm ki paʁl/', 'suh sohⁿ too-zhoor lay mem kee PARL', ['pronom', 'personnes'], FCVDR),
  sent(1057, 'Elle a pris la même que moi.', 'She took the same one as me.', '/ɛ.la pʁi la mɛm kə mwa/', 'eh-la pree la mem kuh MWA', ['pronom', 'meme-que']),
  sent(1058, 'Sans nom après, le même remplace le nom.', 'With no noun after it, le même stands for the noun.', '/sɑ̃ nɔ̃ a.pʁɛ lə mɛm ʁɑ̃.plas lə nɔ̃/', 'sahⁿ nohⁿ a-PREH | luh mem rahⁿ-plass luh NOHⁿ', ['rule', 'pronom'], ['flashcard'],
    rule("« Tu as un beau manteau. J'ai le même. » Qu'est-ce que le même remplace ?", 'le même manteau. Le nom est déjà dit, alors le même le remplace, comme celui.')),
  sent(1059, 'Les deux chambres sont les mêmes.', 'The two rooms are the same.', '/le dø ʃɑ̃bʁ sɔ̃ le mɛm/', 'lay deu SHAHⁿBR | sohⁿ lay MEM', ['pronom', 'pluriel']),
  sent(1060, "Tu n'as pas changé, tu es toujours la même.", 'You have not changed, you are still the same.', '/ty na pa ʃɑ̃.ʒe ty ɛ tu.ʒuʁ la mɛm/', 'tü na pa shahⁿ-ZHAY | tü eh too-zhoor la MEM', ['pronom', 'personnes'], FCVDR),
  sent(1061, 'Il est resté le même.', 'He has stayed the same.', '/i.lɛ ʁɛs.te lə mɛm/', 'ee-leh rehs-tay luh MEM', ['pronom', 'personnes']),
  sent(1062, "Je prendrai la même, s'il vous plaît.", 'I will have the same one, please.', '/ʒə pʁɑ̃.dʁɛ la mɛm sil vu plɛ/', 'zhuh prahⁿ-dreh la MEM | seel voo PLEH', ['pronom', 'feminin']),
  sent(1063, "Celui-ci, c'est le même que l'autre.", 'This one is the same as the other one.', '/sə.lɥi.si sɛ lə mɛm kə lotʁ/', 'suh-lwee-SEE | seh luh mem kuh LOHTR', ['pronom', 'celui']),
  phrase(1064, 'les mêmes', 'the same ones', '/le mɛm/', 'lay MEM', ['pronom']),
];

/* ── ACT 5 · MOI-MÊME ───────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1065, "Je l'ai fait moi-même.", 'I did it myself.', '/ʒə le fɛ mwa.mɛm/', 'zhuh lay feh mwa-MEM', ['soi'], FCVDR),
  sent(1066, 'Fais-le toi-même.', 'Do it yourself.', '/fɛ.lə twa.mɛm/', 'feh-luh twa-MEM', ['soi', 'imperatif'], FCVDR),
  sent(1067, 'Il a construit sa maison lui-même.', 'He built his house himself.', '/i.la kɔ̃s.tʁɥi sa mɛ.zɔ̃ lɥi.mɛm/', 'ee-la kohⁿs-trwee sa meh-ZOHⁿ | lwee-MEM', ['soi']),
  sent(1068, 'Elle fait son pain elle-même.', 'She makes her bread herself.', '/ɛl fɛ sɔ̃ pɛ̃ ɛl.mɛm/', 'ehl feh sohⁿ PEHⁿ | ehl-MEM', ['soi']),
  sent(1069, 'Nous avons peint la cuisine nous-mêmes.', 'We painted the kitchen ourselves.', '/nu.za.vɔ̃ pɛ̃ la kɥi.zin nu.mɛm/', 'noo-za-vohⁿ pehⁿ la kwee-ZEEN | noo-MEM', ['soi', 'pluriel'], FCVDR),
  sent(1070, 'Vous pouvez vérifier vous-même.', 'You can check for yourself.', '/vu pu.ve ve.ʁi.fje vu.mɛm/', 'voo poo-vay vay-ree-FYAY | voo-MEM', ['soi', 'vous']),
  sent(1071, 'Ils ont tout organisé eux-mêmes.', 'They organised everything themselves.', '/il.zɔ̃ tu.tɔʁ.ɡa.ni.ze ø.mɛm/', 'eel-zohⁿ too-tor-ga-nee-ZAY | eu-MEM', ['soi', 'pluriel']),
  sent(1072, 'Elles ont réglé le problème elles-mêmes.', 'They sorted the problem out themselves.', '/ɛl.zɔ̃ ʁe.ɡle lə pʁɔ.blɛm ɛl.mɛm/', 'ehl-zohⁿ ray-glay luh pro-BLEM | ehl-MEM', ['soi', 'pluriel']),
  sent(1073, "On n'est jamais si bien servi que par soi-même.", 'If you want something done well, do it yourself.', '/ɔ̃ nɛ ʒa.mɛ si bjɛ̃ sɛʁ.vi kə paʁ swa.mɛm/', 'ohⁿ neh zha-meh see byehⁿ sehr-VEE | kuh par swa-MEM', ['soi', 'proverbe']),
  sent(1074, 'On doit parfois se défendre soi-même.', 'Sometimes you have to stand up for yourself.', '/ɔ̃ dwa paʁ.fwa sə de.fɑ̃dʁ swa.mɛm/', 'ohⁿ dwa par-FWA | suh day-fahⁿdr swa-MEM', ['soi', 'on']),
  sent(1075, "Moi-même ne remplace pas me : il ajoute « et personne d'autre ».", 'Moi-même does not replace me: it adds "and nobody else".', '/mwa.mɛm nə ʁɑ̃.plas pa mə il a.ʒut e pɛʁ.sɔn dotʁ/', 'mwa-MEM nuh rahⁿ-plass pa MUH | eel a-ZHOOT | ay pehr-sonn DOHTR', ['rule', 'soi'], ['flashcard'],
    rule('« I hurt myself » : je me suis blessé, ou j’ai blessé moi-même ?', 'Je me suis blessé. Le verbe pronominal dit déjà myself. Moi-même sert à insister : je l’ai fait moi-même, sans aide.')),
  sent(1076, 'Je me suis coupé.', 'I cut myself.', '/ʒə mə sɥi ku.pe/', 'zhuh muh swee koo-PAY', ['pronominal'], FCVDR),
  sent(1077, "Elle s'est présentée elle-même.", 'She introduced herself in person.', '/ɛl sɛ pʁe.zɑ̃.te ɛl.mɛm/', 'ehl seh pray-zahⁿ-TAY | ehl-MEM', ['soi', 'pronominal']),
  sent(1078, "C'est le directeur lui-même qui m'a appelé.", 'It was the director himself who called me.', '/sɛ lə di.ʁɛk.tœʁ lɥi.mɛm ki ma a.pə.le/', 'seh luh dee-rehk-TUHR lwee-MEM | kee ma a-puh-LAY', ['soi', 'insistance'], FCVDR),
  sent(1079, 'Tu peux le lui dire toi-même.', 'You can tell him yourself.', '/ty pø lə lɥi diʁ twa.mɛm/', 'tü peu luh lwee deer twa-MEM', ['soi']),
  sent(1080, "C'est moi-même qui ai signé le bail.", 'I signed the lease myself.', '/sɛ mwa.mɛm ki e si.ɲe lə baj/', 'seh mwa-MEM | kee ay see-nyay luh BAHY', ['soi', 'insistance']),
  phrase(1081, 'soi-même', 'oneself, yourself', '/swa.mɛm/', 'swa-MEM', ['soi', 'on']),
  sent(1082, "Je n'y crois pas moi-même.", 'I do not believe it myself.', '/ʒə ni kʁwa pa mwa.mɛm/', 'zhuh nee krwa pa mwa-MEM', ['soi']),
  sent(1083, 'Vérifie toi-même.', 'Check for yourself.', '/ve.ʁi.fi twa.mɛm/', 'vay-ree-fee twa-MEM', ['soi', 'imperatif'], FCVDR),
];

/* ── ACT 6 · MÊME, C'EST EVEN ───────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1084, "Même le chat a peur de l'orage.", 'Even the cat is afraid of the storm.', '/mɛm lə ʃa a pœʁ də lɔ.ʁaʒ/', 'mem luh SHA | a puhr duh lo-RAZH', ['even'], FCVDR),
  sent(1085, 'Toute la famille est venue, même mon oncle.', 'The whole family came, even my uncle.', '/tut la fa.mij ɛ və.ny mɛm mɔ̃.nɔ̃kl/', 'toot la fa-MEEY eh vuh-NÜ | mem moh-NOHⁿKL', ['even']),
  sent(1086, 'Il travaille même le dimanche.', 'He even works on Sundays.', '/il tʁa.vaj mɛm lə di.mɑ̃ʃ/', 'eel tra-VAHY | mem luh dee-MAHⁿSH', ['even'], FCVDR),
  sent(1087, "Elle parle trois langues, et même un peu d'arabe.", 'She speaks three languages, and even a little Arabic.', '/ɛl paʁl tʁwa lɑ̃ɡ e mɛm œ̃ pø da.ʁab/', 'ehl parl trwa LAHⁿG | ay mem uhⁿ peu da-RAB', ['even']),
  sent(1088, 'Même les enfants ont compris.', 'Even the children understood.', '/mɛm le.zɑ̃.fɑ̃ ɔ̃ kɔ̃.pʁi/', 'mem lay-zahⁿ-FAHⁿ | ohⁿ kohⁿ-PREE', ['even'], FCVDR),
  sent(1089, 'Même moi, je sais faire ça.', 'Even I can do that.', '/mɛm mwa ʒə sɛ fɛʁ sa/', 'mem MWA | zhuh seh fehr SA', ['even', 'tonique']),
  sent(1090, "Même ajoute le cas qu'on n'attendait pas.", 'Même adds the case nobody expected.', '/mɛm a.ʒut lə ka kɔ̃ na.tɑ̃.dɛ pa/', 'mem a-ZHOOT | luh ka kohⁿ na-tahⁿ-deh PA', ['rule', 'even'], ['flashcard'],
    rule("« Même Paul est venu. » Qu'est-ce que ça dit de Paul ?", "On ne l'attendait pas. Tout le monde est venu, et la règle vaut même pour lui : c'est le sens de even.")),
  sent(1091, 'On a même eu du soleil.', 'We even had some sun.', '/ɔ̃.na mɛ.my dy sɔ.lɛj/', 'ohⁿ-na meh-mü dü so-LEHY', ['even']),
  sent(1092, 'Même en hiver, il fait du vélo.', 'Even in winter, he cycles.', '/mɛ.mɑ̃.ni.vɛʁ il fɛ dy ve.lo/', 'meh-mahⁿ-nee-VEHR | eel feh dü vay-LOH', ['even', 'quebec'], FCVDR),
  sent(1093, 'Même à Montréal, il fait rarement aussi froid.', 'Even in Montréal it is rarely this cold.', '/mɛ.ma mɔ̃.ʁe.al il fɛ ʁaʁ.mɑ̃ o.si fʁwa/', 'meh-ma mohⁿ-ray-AL | eel feh rar-mahⁿ oh-see FRWA', ['even', 'quebec']),
  sent(1094, 'Ils sont restés, même après la fermeture.', 'They stayed, even after closing time.', '/il sɔ̃ ʁɛs.te mɛ.ma.pʁɛ la fɛʁ.mə.tyʁ/', 'eel sohⁿ rehs-TAY | meh-ma-preh la fehr-muh-TÜR', ['even']),
  sent(1095, 'Elle répond même aux messages du soir.', 'She even answers the evening messages.', '/ɛl ʁe.pɔ̃ mɛ.mo me.saʒ dy swaʁ/', 'ehl ray-pohⁿ meh-moh may-SAZH dü SWAR', ['even']),
  sent(1096, "Mon voisin m'a même prêté sa voiture.", 'My neighbour even lent me his car.', '/mɔ̃ vwa.zɛ̃ ma mɛm pʁe.te sa vwa.tyʁ/', 'mohⁿ vwa-ZEHⁿ | ma mem pray-tay sa vwa-TÜR', ['even'], FCVDR),
  phrase(1097, 'et même', 'and even', '/e mɛm/', 'ay MEM', ['even']),
  sent(1098, "Même le patron était d'accord.", 'Even the boss agreed.', '/mɛm lə pa.tʁɔ̃ e.tɛ da.kɔʁ/', 'mem luh pa-TROHⁿ | ay-teh da-KOR', ['even']),
];

/* ── ACT 7 · LA PLACE DE MÊME ───────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1099, "Il ne m'a même pas dit bonjour.", 'He did not even say hello to me.', '/il nə ma mɛm pa di bɔ̃.ʒuʁ/', 'eel nuh ma mem pa dee bohⁿ-ZHOOR', ['meme-pas', 'compose'], FCVDR),
  sent(1100, "Je n'ai même pas eu le temps de manger.", 'I did not even have time to eat.', '/ʒə ne mɛm pa.zy lə tɑ̃ də mɑ̃.ʒe/', 'zhuh nay mem pa-zü luh tahⁿ duh mahⁿ-ZHAY', ['meme-pas', 'compose'], FCVDR),
  sent(1101, 'Elle ne sait même pas où il habite.', 'She does not even know where he lives.', '/ɛl nə sɛ mɛm pa u i.la.bit/', 'ehl nuh seh mem pa oo ee-la-BEET', ['meme-pas']),
  sent(1102, 'Il a même pleuré.', 'He even cried.', '/i.la mɛm plœ.ʁe/', 'ee-la mem pluh-RAY', ['place', 'compose'], FCVDR),
  sent(1103, 'Nous avons même dansé.', 'We even danced.', '/nu.za.vɔ̃ mɛm dɑ̃.se/', 'noo-za-vohⁿ mem dahⁿ-SAY', ['place', 'compose']),
  sent(1104, 'Même mon père a ri.', 'Even my father laughed.', '/mɛm mɔ̃ pɛʁ a ʁi/', 'mem mohⁿ PEHR | a REE', ['place', 'sujet']),
  sent(1105, 'Mon père a même ri.', 'My father even laughed.', '/mɔ̃ pɛʁ a mɛm ʁi/', 'mohⁿ PEHR | a mem REE', ['place', 'verbe']),
  sent(1106, "Même se met juste devant ce qu'il vise.", 'Même goes right before what it targets.', '/mɛm sə mɛ ʒys.tə də.vɑ̃ sə kil viz/', 'mem suh meh zhüs-tuh duh-VAHⁿ | suh keel VEEZ', ['rule', 'place'], ['flashcard'],
    rule("« Même mon père a ri » ou « mon père a même ri » : qu'est-ce qui surprend ?", "Dans la première, c'est mon père : lui aussi a ri. Dans la seconde, c'est le rire : il est allé jusque-là.")),
  sent(1107, "Je ne l'ai même pas vu.", 'I did not even see him.', '/ʒə nə le mɛm pa vy/', 'zhuh nuh lay mem pa VÜ', ['meme-pas', 'compose']),
  sent(1108, "Tu n'as même pas essayé.", 'You did not even try.', '/ty na mɛm pa.ze.se.je/', 'tü na mem pa-zay-say-YAY', ['meme-pas', 'compose'], FCVDR),
  sent(1109, 'Il ne veut même pas en parler.', 'He will not even talk about it.', '/il nə vø mɛm pa ɑ̃ paʁ.le/', 'eel nuh veu mem pa ahⁿ par-LAY', ['meme-pas']),
  sent(1110, 'Elle a même appelé sa mère.', 'She even called her mother.', '/ɛ.la mɛ.ma.pə.le sa mɛʁ/', 'eh-la meh-ma-puh-LAY sa MEHR', ['place', 'compose']),
  sent(1111, "Il n'a même pas regardé le menu.", 'He did not even look at the menu.', '/il na mɛm pa ʁə.ɡaʁ.de lə mə.ny/', 'eel na mem pa ruh-gar-DAY luh muh-NÜ', ['meme-pas', 'compose']),
  sent(1112, 'Même toi, tu es en retard.', 'Even you are late.', '/mɛm twa ty ɛ.tɑ̃ ʁə.taʁ/', 'mem TWA | tü eh-tahⁿ ruh-TAR', ['place', 'tonique']),
  sent(1113, 'On peut même y aller à pied.', 'We can even walk there.', '/ɔ̃ pø mɛm i a.le a pje/', 'ohⁿ peu mem ee a-lay a PYAY', ['place', 'infinitif'], FCVDR),
  sent(1114, "Je ne m'en souviens même pas.", 'I do not even remember.', '/ʒə nə mɑ̃ su.vjɛ̃ mɛm pa/', 'zhuh nuh mahⁿ soo-vyehⁿ mem PA', ['meme-pas']),
  phrase(1115, 'ne ... même pas', 'not even', '/nə mɛm pa/', 'nuh ... mem PA', ['meme-pas']),
];

/* ── ACT 8 · AVANT OU APRÈS LE NOM ──────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1116, 'Il est arrivé le jour même.', 'He arrived that very day.', '/i.lɛ.ta.ʁi.ve lə ʒuʁ mɛm/', 'ee-leh-ta-ree-VAY | luh zhoor MEM', ['apres-nom'], FCVDR),
  sent(1117, 'Il est arrivé le même jour que moi.', 'He arrived on the same day as me.', '/i.lɛ.ta.ʁi.ve lə mɛm ʒuʁ kə mwa/', 'ee-leh-ta-ree-VAY | luh mem zhoor kuh MWA', ['avant-nom', 'meme-que'], FCVDR),
  sent(1118, "C'est la bonté même.", 'She is kindness itself.', '/sɛ la bɔ̃.te mɛm/', 'seh la bohⁿ-tay MEM', ['apres-nom', 'qualite']),
  sent(1119, 'Rendez-vous ici même, à midi.', 'Meet right here, at noon.', '/ʁɑ̃.de.vu i.si mɛm a mi.di/', 'rahⁿ-day-VOO | ee-see MEM | a mee-DEE', ['apres-nom', 'lieu']),
  sent(1120, "Je l'ai appelée aujourd'hui même.", 'I called her this very day.', '/ʒə la a.pə.le o.ʒuʁ.dɥi mɛm/', 'zhuh la a-puh-LAY | oh-zhoor-dwee MEM', ['apres-nom', 'temps'], FCVDR),
  sent(1121, 'Le colis est arrivé le soir même.', 'The parcel arrived that very evening.', '/lə kɔ.li ɛ.ta.ʁi.ve lə swaʁ mɛm/', 'luh ko-LEE eh-ta-ree-VAY | luh swar MEM', ['apres-nom', 'temps']),
  sent(1122, 'Ils habitent dans la même ville.', 'They live in the same town.', '/il.za.bit dɑ̃ la mɛm vil/', 'eel-za-BEET dahⁿ la mem VEEL', ['avant-nom']),
  sent(1123, 'Ils habitent dans la ville même, pas en banlieue.', 'They live in the town itself, not in the suburbs.', '/il.za.bit dɑ̃ la vil mɛm pa.zɑ̃ bɑ̃.ljø/', 'eel-za-BEET dahⁿ la veel MEM | pa-zahⁿ bahⁿ-LYEU', ['apres-nom', 'lieu']),
  sent(1124, 'Devant le nom, même dit pareil. Après le nom, même dit exactement celui-là.', 'Before the noun, même means same. After it, même means that very one.', '/də.vɑ̃ lə nɔ̃ mɛm di pa.ʁɛj a.pʁɛ lə nɔ̃ mɛm di ɛɡ.zak.tə.mɑ̃ sə.lɥi.la/', 'duh-vahⁿ luh NOHⁿ | mem dee pa-REHY | a-preh luh NOHⁿ | mem dee ehg-zak-tuh-mahⁿ suh-lwee-LA', ['rule', 'apres-nom'], ['flashcard'],
    rule("« le même jour » et « le jour même » : lequel parle d'un jour déjà nommé ?", "le jour même : ce jour-là exactement. Le même jour compare deux choses qui tombent sur un jour identique.")),
  sent(1125, 'Elle est la patience même.', 'She is patience itself.', '/ɛ.lɛ la pa.sjɑ̃s mɛm/', 'eh-leh la pa-syahⁿs MEM', ['apres-nom', 'qualite']),
  sent(1126, 'Nous sommes partis le soir même.', 'We left that very evening.', '/nu sɔm paʁ.ti lə swaʁ mɛm/', 'noo som par-tee luh swar MEM', ['apres-nom', 'temps'], FCVDR),
  sent(1127, 'Ce sont les mots mêmes du ministre.', "Those are the minister's very words.", '/sə sɔ̃ le mo mɛm dy mi.nistʁ/', 'suh sohⁿ lay moh MEM | dü mee-NEESTR', ['apres-nom', 'ecrit']),
  sent(1128, "Elle a signé le contrat le jour même de l'entrevue.", 'She signed the contract on the very day of the interview.', '/ɛ.la si.ɲe lə kɔ̃.tʁa lə ʒuʁ mɛm də lɑ̃.tʁə.vy/', 'eh-la see-nyay luh kohⁿ-TRA | luh zhoor mem duh lahⁿ-truh-VÜ', ['apres-nom', 'quebec']),
  sent(1129, 'Nous avons le même médecin.', 'We have the same doctor.', '/nu.za.vɔ̃ lə mɛm med.sɛ̃/', 'noo-za-vohⁿ luh mem med-SEHⁿ', ['avant-nom']),
  sent(1130, 'Le médecin lui-même était surpris.', 'The doctor himself was surprised.', '/lə med.sɛ̃ lɥi.mɛm e.tɛ syʁ.pʁi/', 'luh med-SEHⁿ lwee-MEM | ay-teh sür-PREE', ['soi', 'apres-nom']),
  phrase(1131, 'le jour même', 'that very day', '/lə ʒuʁ mɛm/', 'luh zhoor MEM', ['apres-nom']),
  phrase(1132, 'ici même', 'right here', '/i.si mɛm/', 'ee-see MEM', ['apres-nom', 'lieu']),
];

/* ── ACT 9 · QUAND MÊME ─────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1133, 'Il était fatigué, mais il est venu quand même.', 'He was tired, but he came anyway.', '/i.lɛ.tɛ fa.ti.ɡe mɛ.zil ɛ və.ny kɑ̃ mɛm/', 'ee-leh-teh fa-tee-GAY | meh-zeel eh vuh-nü kahⁿ MEM', ['quand-meme'], FCVDR),
  sent(1134, "C'est cher, mais je l'achète quand même.", 'It is expensive, but I am buying it anyway.', '/sɛ ʃɛʁ mɛ ʒə la.ʃɛt kɑ̃ mɛm/', 'seh SHEHR | meh zhuh la-sheht kahⁿ MEM', ['quand-meme'], FCVDR),
  sent(1135, 'Merci quand même.', 'Thanks all the same.', '/mɛʁ.si kɑ̃ mɛm/', 'mehr-SEE kahⁿ MEM', ['quand-meme', 'politesse'], FCVDR),
  sent(1136, 'Tu exagères quand même.', 'You are going a bit far there.', '/ty ɛɡ.za.ʒɛʁ kɑ̃ mɛm/', 'tü ehg-za-ZHEHR kahⁿ MEM', ['quand-meme', 'oral', 'reproche']),
  sent(1137, "C'est quand même incroyable.", 'It is really unbelievable, though.', '/sɛ kɑ̃ mɛm ɛ̃.kʁwa.jabl/', 'seh kahⁿ mem ehⁿ-krwa-YABL', ['quand-meme', 'oral']),
  sent(1138, 'Quand même !', 'Come on! (indignant, spoken)', '/kɑ̃ mɛm/', 'kahⁿ MEM', ['quand-meme', 'oral', 'indignation']),
  sent(1139, 'Il pleut, mais on part quand même.', 'It is raining, but we are leaving anyway.', '/il plø mɛ ɔ̃ paʁ kɑ̃ mɛm/', 'eel PLEU | meh ohⁿ par kahⁿ MEM', ['quand-meme']),
  sent(1140, "Quand même : l'obstacle est là, et le résultat ne change pas.", 'Quand même: the obstacle is there, and the result does not change.', '/kɑ̃ mɛm lɔp.stakl ɛ la e lə ʁe.zyl.ta nə ʃɑ̃ʒ pa/', 'kahⁿ MEM | lop-STAKL eh LA | ay luh ray-zül-TA nuh shahⁿzh PA', ['rule', 'quand-meme'], ['flashcard'],
    rule("« Il pleut, mais on part quand même. » La pluie change-t-elle le départ ?", "Non. La pluie est un obstacle, et on part malgré elle. Quand même se met souvent à la fin, ou juste après le verbe.")),
  sent(1141, "Elle n'avait pas faim, mais elle a mangé quand même.", 'She was not hungry, but she ate anyway.', '/ɛl na.vɛ pa fɛ̃ mɛ ɛ.la mɑ̃.ʒe kɑ̃ mɛm/', 'ehl na-veh pa FEHⁿ | meh eh-la mahⁿ-zhay kahⁿ MEM', ['quand-meme'], FCVDR),
  sent(1142, "Je suis quand même content d'être venu.", 'I am still glad I came.', '/ʒə sɥi kɑ̃ mɛm kɔ̃.tɑ̃ dɛtʁ və.ny/', 'zhuh swee kahⁿ mem kohⁿ-tahⁿ dehtr vuh-NÜ', ['quand-meme']),
  sent(1143, 'Tu pourrais quand même dire merci.', 'You could at least say thank you.', '/ty pu.ʁɛ kɑ̃ mɛm diʁ mɛʁ.si/', 'tü poo-reh kahⁿ mem deer mehr-SEE', ['quand-meme', 'reproche'], FCVDR),
  sent(1144, 'Le film était long, mais bien quand même.', 'The film was long, but good all the same.', '/lə film e.tɛ lɔ̃ mɛ bjɛ̃ kɑ̃ mɛm/', 'luh FEELM ay-teh LOHⁿ | meh byehⁿ kahⁿ MEM', ['quand-meme']),
  sent(1145, "On a perdu, mais on s'est bien amusés quand même.", 'We lost, but we had fun anyway.', '/ɔ̃.na pɛʁ.dy mɛ ɔ̃ sɛ bjɛ̃.na.my.ze kɑ̃ mɛm/', 'ohⁿ-na pehr-DÜ | meh ohⁿ seh byehⁿ-na-mü-zay kahⁿ MEM', ['quand-meme']),
  phrase(1146, 'quand même', 'anyway, all the same', '/kɑ̃ mɛm/', 'kahⁿ MEM', ['quand-meme']),
  sent(1147, 'Tu as quand même réussi.', 'You passed all the same.', '/ty a kɑ̃ mɛm ʁe.y.si/', 'tü a kahⁿ mem ray-ü-SEE', ['quand-meme']),
];

/* ── ACT 10 · EN MÊME TEMPS, DE MÊME, TOUT DE MÊME, À MÊME ──────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1148, 'Je ne peux pas écouter et écrire en même temps.', 'I cannot listen and write at the same time.', '/ʒə nə pø pa.ze.ku.te e e.kʁiʁ ɑ̃ mɛm tɑ̃/', 'zhuh nuh peu pa-zay-koo-TAY | ay ay-KREER ahⁿ mem TAHⁿ', ['en-meme-temps'], FCVDR),
  sent(1149, 'Ils sont arrivés en même temps.', 'They arrived at the same time.', '/il sɔ̃.ta.ʁi.ve ɑ̃ mɛm tɑ̃/', 'eel sohⁿ-ta-ree-VAY | ahⁿ mem TAHⁿ', ['en-meme-temps'], FCVDR),
  sent(1150, "C'est drôle et, en même temps, un peu triste.", 'It is funny and, at the same time, a bit sad.', '/sɛ dʁol e ɑ̃ mɛm tɑ̃ œ̃ pø tʁist/', 'seh DROHL | ay ahⁿ mem TAHⁿ | uhⁿ peu TREEST', ['en-meme-temps', 'nuance']),
  sent(1151, "Elle a dit merci, et j'ai fait de même.", 'She said thank you, and I did the same.', '/ɛ.la di mɛʁ.si e ʒe fɛ də mɛm/', 'eh-la dee mehr-SEE | ay zhay feh duh MEM', ['de-meme'], FCVDR),
  sent(1152, 'Il en va de même pour les loyers.', 'The same goes for rents.', '/il ɑ̃ va də mɛm puʁ le lwa.je/', 'eel ahⁿ va duh MEM | poor lay lwa-YAY', ['de-meme', 'ecrit']),
  sent(1153, "C'est tout de même surprenant.", 'It is surprising all the same.', '/sɛ tu də mɛm syʁ.pʁə.nɑ̃/', 'seh too duh MEM | sür-pruh-NAHⁿ', ['tout-de-meme', 'ecrit']),
  sent(1154, 'Il a tout de même accepté.', 'He accepted all the same.', '/i.la tu də mɛ.mak.sɛp.te/', 'ee-la too duh meh-mak-sehp-TAY', ['tout-de-meme'], FCVDR),
  sent(1155, 'Ne bois pas à même la bouteille.', 'Do not drink straight from the bottle.', '/nə bwa pa a mɛm la bu.tɛj/', 'nuh bwa pa | a mem la boo-TEHY', ['a-meme', 'reconnaissance']),
  sent(1156, 'Il dormait à même le sol.', 'He was sleeping right on the floor.', '/il dɔʁ.mɛ a mɛm lə sɔl/', 'eel dor-MEH | a mem luh SOL', ['a-meme', 'reconnaissance']),
  sent(1157, "Quand même se dit partout. Tout de même s'écrit plus souvent.", 'Quand même is said everywhere. Tout de même is more often written.', '/kɑ̃ mɛm sə di paʁ.tu tu də mɛm se.kʁi ply su.vɑ̃/', 'kahⁿ mem suh dee par-TOO | too duh mem say-kree plü soo-VAHⁿ', ['rule', 'tout-de-meme'], ['flashcard'],
    rule('Dans un courriel au propriétaire : quand même, ou tout de même ?', "Les deux sont corrects. Tout de même sonne plus soigné à l'écrit : il a tout de même accepté.")),
  sent(1158, 'De la même façon, on peut payer en ligne.', 'In the same way, you can pay online.', '/də la mɛm fa.sɔ̃ ɔ̃ pø pe.je ɑ̃ liɲ/', 'duh la mem fa-SOHⁿ | ohⁿ peu pay-yay ahⁿ LEENY', ['de-meme', 'facon']),
  sent(1159, 'Je pense la même chose.', 'I think the same.', '/ʒə pɑ̃s la mɛm ʃoz/', 'zhuh pahⁿs la mem SHOHZ', ['chose']),
  phrase(1160, 'en même temps', 'at the same time', '/ɑ̃ mɛm tɑ̃/', 'ahⁿ mem TAHⁿ', ['en-meme-temps']),
  phrase(1161, 'de même', 'likewise, the same', '/də mɛm/', 'duh MEM', ['de-meme']),
  phrase(1162, 'tout de même', 'all the same', '/tu də mɛm/', 'too duh MEM', ['tout-de-meme']),
  phrase(1163, 'à même', 'directly on, straight from', '/a mɛm/', 'a MEM', ['a-meme', 'reconnaissance']),
  sent(1164, 'Moi de même.', 'Likewise.', '/mwa də mɛm/', 'mwa duh MEM', ['de-meme', 'politesse']),
];

/* ── ACT 11 · COMPARER ──────────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1165, 'Les deux offres ont le même salaire.', 'Both offers have the same salary.', '/le dø.zɔfʁ ɔ̃ lə mɛm sa.lɛʁ/', 'lay deu-ZOFR | ohⁿ luh mem sa-LEHR', ['comparer'], FCVDR),
  sent(1166, "Ce n'est pas du tout le même travail.", 'It is not the same job at all.', '/sə nɛ pa dy tu lə mɛm tʁa.vaj/', 'suh neh pa dü too luh mem tra-VAHY', ['comparer'], FCVDR),
  sent(1167, 'La seconde offre est plus loin, mais je la préfère quand même.', 'The second offer is further away, but I prefer it all the same.', '/la sə.ɡɔ̃.dɔfʁ ɛ ply lwɛ̃ mɛ ʒə la pʁe.fɛʁ kɑ̃ mɛm/', 'la suh-gohⁿ-DOFR eh plü LWEHⁿ | meh zhuh la pray-fehr kahⁿ MEM', ['comparer', 'quand-meme'], FCVDR),
  sent(1168, 'Les deux appartements ont la même surface.', 'Both flats have the same floor area.', '/le dø.za.paʁ.tə.mɑ̃ ɔ̃ la mɛm syʁ.fas/', 'lay deu-za-par-tuh-MAHⁿ | ohⁿ la mem sür-FASS', ['comparer']),
  sent(1169, "Le loyer, lui, n'est pas le même.", 'The rent, though, is not the same.', '/lə lwa.je lɥi nɛ pa lə mɛm/', 'luh lwa-YAY | LWEE | neh pa luh MEM', ['comparer', 'pronom']),
  sent(1170, 'Du second, on peut même aller au travail à pied.', 'From the second one, you can even walk to work.', '/dy sə.ɡɔ̃ ɔ̃ pø mɛ.ma.le o tʁa.vaj a pje/', 'dü suh-GOHⁿ | ohⁿ peu meh-ma-lay oh tra-vahy a PYAY', ['comparer', 'even']),
  sent(1171, "J'ai visité les deux le même jour.", 'I visited both on the same day.', '/ʒe vi.zi.te le dø lə mɛm ʒuʁ/', 'zhay vee-zee-TAY lay DEU | luh mem ZHOOR', ['comparer', 'avant-nom'], FCVDR),
  sent(1172, "La propriétaire elle-même m'a fait visiter.", 'The landlady herself showed me round.', '/la pʁɔ.pʁi.je.tɛʁ ɛl.mɛm ma fɛ vi.zi.te/', 'la pro-pree-yay-TEHR ehl-MEM | ma feh vee-zee-TAY', ['comparer', 'soi']),
  sent(1173, "Ce sont des jumeaux, mais ils n'ont pas le même caractère.", 'They are twins, but they do not have the same personality.', '/sə sɔ̃ de ʒy.mo mɛ il nɔ̃ pa lə mɛm ka.ʁak.tɛʁ/', 'suh sohⁿ day zhü-MOH | meh eel nohⁿ pa luh mem ka-rak-TEHR', ['comparer', 'jumeaux'], FCVDR),
  sent(1174, 'Pour comparer, dis ce qui est le même, puis ce qui change.', 'To compare, say what is the same, then what changes.', '/puʁ kɔ̃.pa.ʁe di sə ki ɛ lə mɛm pɥi sə ki ʃɑ̃ʒ/', 'poor kohⁿ-pa-RAY | dee suh kee eh luh MEM | pwee suh kee SHAHⁿZH', ['rule', 'comparer'], ['flashcard'],
    rule('Tu compares deux offres. Par quoi commences-tu ?', "Par ce qui est pareil : le même salaire, les mêmes horaires. Ensuite, ce qui change. À la fin, ton choix, et quand même s'il y a un obstacle.")),
  sent(1175, "Moi-même, j'hésite encore.", 'I am still hesitating myself.', '/mwa.mɛm ʒe.zit ɑ̃.kɔʁ/', 'mwa-MEM | zhay-zeet ahⁿ-KOR', ['comparer', 'soi']),
  sent(1176, 'Ils ont les mêmes avantages.', 'They have the same benefits.', '/il.zɔ̃ le mɛm.za.vɑ̃.taʒ/', 'eel-zohⁿ lay mem-za-vahⁿ-TAZH', ['comparer', 'pluriel']),
  sent(1177, 'Je prendrai quand même la plus petite.', 'I will still take the smaller one.', '/ʒə pʁɑ̃.dʁɛ kɑ̃ mɛm la ply pə.tit/', 'zhuh prahⁿ-dreh kahⁿ mem la plü puh-TEET', ['comparer', 'quand-meme']),
  sent(1178, "C'est exactement la même chose, en plus cher.", 'It is exactly the same thing, only more expensive.', '/sɛ.tɛɡ.zak.tə.mɑ̃ la mɛm ʃoz ɑ̃ ply ʃɛʁ/', 'seh-tehg-zak-tuh-MAHⁿ la mem SHOHZ | ahⁿ plü SHEHR', ['comparer', 'chose']),
  sent(1179, 'Les deux quartiers se ressemblent, et en même temps ils sont très différents.', 'The two areas look alike, and at the same time they are very different.', '/le dø kaʁ.tje sə ʁə.sɑ̃bl e ɑ̃ mɛm tɑ̃ il sɔ̃ tʁɛ di.fe.ʁɑ̃/', 'lay deu kar-TYAY suh ruh-SAHⁿBL | ay ahⁿ mem TAHⁿ | eel sohⁿ treh dee-fay-RAHⁿ', ['comparer', 'en-meme-temps']),
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
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: twin sisters in Sherbrooke. About 120 words. Five emplois. */
export const JUMELLES_TEXT =
  "Chloé et Zoé sont jumelles. Elles ont le même âge, bien sûr, les mêmes yeux verts et la même voix. À l'école, même les professeurs les confondaient. Aujourd'hui, elles ont trente ans et elles habitent dans la même rue, à Sherbrooke. Mais ce n'est pas la même chose d'être jumelles et d'être pareilles. Chloé est infirmière et elle travaille même la nuit. Zoé a créé son entreprise elle-même, sans aucune aide. Chloé ne boit jamais de café ; Zoé en boit cinq par jour. Le jour même de leur anniversaire, elles se sont acheté le même manteau, sans se le dire. Elles ont bien ri, et elles l'ont gardé quand même. « On est différentes, dit Zoé, mais on a les mêmes goûts. »";

/** Every emploi in JUMELLES_TEXT, in order, by kind. */
export const JUMELLES_EMPLOIS = [
  'le même âge (same)', 'les mêmes yeux (same)', 'la même voix (same)', 'même les professeurs (even)',
  'la même rue (same)', 'la même chose (same)', 'même la nuit (even)', 'elle-même (herself)',
  'le jour même (that very day)', 'le même manteau (same)', 'quand même (anyway)', 'les mêmes goûts (same)',
] as const;

/** Act 4: a message on a buy-and-sell forum in Liège. About 125 words. */
export const FORUM_TEXT =
  "Bonjour à tous. Il y a deux ans, j'ai acheté un manteau d'hiver bleu dans une petite boutique de Liège. Je l'adore, et je le portais tous les jours, même quand il faisait doux. Hier, je l'ai oublié dans le train, et personne ne l'a rapporté. Je cherche donc le même. La boutique a fermé, et sur internet je trouve des manteaux qui ressemblent au mien, mais ce ne sont pas les mêmes : la couleur n'est pas la même, ou les poches sont différentes. Si quelqu'un a le même et ne le porte plus, je le rachète volontiers. Taille moyenne, bleu foncé, avec un col gris. Même un modèle un peu usé m'intéresse. Je peux venir le chercher le jour même, n'importe où à Liège. Merci ! Hugo";

/** Act 8: a déjà-vu in a Liège café. About 125 words. */
export const DEJAVU_TEXT =
  "Mardi dernier, j'ai eu une drôle d'impression. Je suis entré dans un petit café du centre de Liège, et tout m'a semblé connu : la même serveuse, la même table près de la fenêtre, la même chanson à la radio, jusqu'au petit vase de fleurs jaunes. J'ai commandé un chocolat chaud, et la serveuse a souri : « Encore ? Vous étiez assis ici même hier, à la même heure. » Je ne me souvenais même pas d'être venu. Le soir même, j'ai raconté l'histoire à ma sœur. Elle a ri : « C'est un déjà-vu, rien de plus. » Mais dans ma poche, j'ai trouvé le ticket de la veille, du même café, pour le même chocolat. Le café lui-même n'a rien de spécial. C'est ma mémoire qui me joue des tours.";

/** Act 11: Mathieu compares two job offers in Québec. About 140 words. */
export const OFFRES_TEXT =
  "J'ai reçu deux offres d'emploi la même semaine, et j'hésite encore. Les deux postes sont au même niveau et ont presque le même salaire. Ce sont les mêmes tâches : gérer une équipe de six personnes. Mais ce n'est pas du tout la même vie. La première entreprise est à Québec même, à dix minutes de chez moi ; je pourrais même y aller à pied. La seconde est à Lévis : il faut traverser le fleuve tous les jours, même en hiver. Pourtant, la directrice de la seconde m'a appelé elle-même le jour même de l'entrevue, et elle m'a offert deux semaines de vacances de plus. La première ne m'a même pas répondu quand j'ai posé une question sur les horaires. Au fond, les deux offres sont bonnes, et en même temps très différentes. Je crois que je vais choisir Lévis quand même.";

/** The four moves the model makes, for the task checklist. */
export const COMPARER_MOVES = [
  'le cadre : quelles deux choses, ou quelles deux personnes',
  'ce qui est pareil : le même, la même, les mêmes, et le même ... que',
  'ce qui change, avec même (even) ou ne ... même pas pour la surprise',
  'ton choix, avec quand même, et un détail précis : le jour même, lui-même',
] as const;
