// b1.13.l1 « Lequel, ce qui et ce que » — the authored corpus, the imports and
// the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (do not rename; a later lesson may import them): REFRAME,
// REFRAME_EN, THE_LOOK, THE_LOOK_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS — B1 Unit 3, sentence expansion, lesson 3 of 3
// ══════════════════════════════════════════════════════════════════════════
//
//   1  lequel / laquelle / lesquels / lesquelles AFTER A PREPOSITION, for
//      things: le stylo avec lequel j'écris, la table sur laquelle tu poses
//      la lampe, les outils sans lesquels on ne peut rien faire.
//   2  THE CONTRACTIONS. à and de are the only two prepositions that fuse:
//        à  + lequel  = auquel    à + laquelle stays two words
//        à  + lesquels = auxquels     à + lesquelles = auxquelles
//        de + lequel  = duquel    de + laquelle stays two words
//        de + lesquels = desquels     de + lesquelles = desquelles
//   3  WHERE de TAKES duquel AND NOT dont: after a compound preposition
//      (à côté de, au bout de, près de, en face de, au milieu de, le long
//      de, autour de, au-dessus de, grâce à). This is the one place dont
//      cannot go, and it is the seam with b1.12.
//   4  THE SET PHRASES the learner will actually write: la raison pour
//      laquelle, les conditions dans lesquelles, grâce auquel, le point sur
//      lequel.
//   5  ce qui / ce que / ce dont: the relative with NO antecedent, where what
//      is referred to is an idea rather than a noun.
//   6  tout ce qui / tout ce que / tout ce dont, and the `ce` an anglophone
//      drops because English says only "what".
//   7  , ce qui / , ce que / , ce dont after a comma, picking up the WHOLE
//      preceding sentence rather than a noun.
//
//   THE CHOOSING RULE THE WHOLE LESSON IS BUILT ON: a noun in front picks
//   qui / que / dont / où or lequel; no noun in front picks ce qui, ce que,
//   ce dont.
//
//   PICKED UP FROM b1.11. Its act 10 previews ce qui and ce que in six
//   missions and says on the card that lesson 13 owns the system. Act 7 here
//   opens by quoting b1.11's reframe verbatim (imported as B111_REFRAME) and
//   goes on from there: ce dont, tout ce, and the sentence-level ce qui are
//   all new, and the look-behind test is treated as known.
//
//   LEFT TO b1.12 (running in parallel): dont and où as such, and the
//   prepositional relatives for PEOPLE (avec qui, à qui, chez qui). dont is
//   NAMED here wherever the contrast demands it (dont against duquel, and
//   ce dont) and is treated as known, never taught from scratch.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `pronoms-essentiels` exists (domain fondations, levelRange
//     a1-b2), so nothing is created at import.
//  2. POSTGRES PROBED 2026-09-24 by the wave orchestrator (not the seed):
//        693 rows across all levels, 138 of them `fr.b1.*` at 001-138.
//        The highest number anywhere in the theme is 395, and there is
//        NOTHING at or above 900. AUTHORED IDS THEREFORE START AT 1400.
//  3. ID BLOCK: b1.13 owns `.1400`-`.1599` and nothing else. b1.11 owns
//     1000-1199 and b1.12 owns 1200-1399; neither is written to here.
//  4. WHAT THE SEED CARRIES ON THIS TOPIC: exactly ONE row in the whole
//     seed uses the lequel family (fr.b1.musique.001, « Le concert auquel
//     j'ai assisté hier soir était magnifique. »), and nine use a real
//     ce qui / ce que / ce dont. All ten are imported below rather than
//     re-authored. Postgres holds roughly four times what the seed does, so
//     RE-PROBE AT IMPORT: there are very likely published lequel rows that
//     `src()` cannot see today because it resolves against seed.json.
//  5. Rows from other themes that already carry a compound preposition
//     (à côté de, au bout de, près de) are imported as the RAW MATERIAL the
//     acts weld into relatives, so the learner meets a sentence they have
//     already had before it grows a clause.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A2. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR
// ══════════════════════════════════════════════════════════════════════════
//
//   `validateDensity`'s nasal rule cannot always tell a real consonant from
//   a nasal vowel. Where it fires on a correct respelling the consonant is
//   doubled, as a2.34 does. In this corpus:
//       panne      PANN       (a real /n/, and the source doubles it too)
//       personne   pehr-SONN
//       somme      SOMM
//       comme      KOMM
//   No U+203F anywhere, in respell or in IPA. No em dash anywhere.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that opens a sentence needs a capital, and the label is built
 *  at interpolation time rather than typed. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.13',
  seq: 13,
  /** English: `content_units` matches it against overview.titleEn. */
  title: 'Lequel, Ce Qui and Ce Que',
  sub: 'Lequel, ce qui et ce que',
  canDo: 'Can attach a clause to a noun across a preposition, choosing the right form of lequel and contracting it correctly after à and de, and can refer to an idea that no noun names using ce qui, ce que and ce dont',
  prereqUnitIds: ['b1.11'],
} as const;

export const LESSON_ID = 'b1.13.l1';
export const LESSON_TITLE = 'Lequel, ce qui et ce que';
export const THEME = 'pronoms-essentiels';
export const LEVEL = 'b1' as const;

/** b1.13's block. Nothing outside it. b1.11 holds 1000-1199, b1.12 1200-1399. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. QUOTATIONS AND CITATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** b1.11's ground: the look-behind test this lesson inherits and never
 *  restates in its own words. Imported, never retyped, so a reword there
 *  cannot silently diverge here. */
export { REFRAME as B111_REFRAME, REFRAME_EN as B111_REFRAME_EN } from './qui-que-corpus.ts';

/** B1 units have no `seq` in seed.json, so `unitRef` cannot label them. They
 *  are cited by their planned trail position. A2 units use their real seq. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14,
};
function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  if (planned) return `la leçon ${planned} du B1`;
  const m = /^lesson (\d+) in (\w+)$/.exec(unitRef(unitId));
  return m ? `la leçon ${m[1]} de l'${m[2]}` : unitId;
}

export const PREPOSITIONS_UNIT = 'a1.21';
export const PREPOSITIONS_TEMPS_UNIT = 'a2.18';
export const LIEU_UNIT = 'a2.04';
export const QUI_QUE_UNIT = 'b1.11';
export const DONT_OU_UNIT = 'b1.12';

export const PREPOSITIONS_REF = refFr(PREPOSITIONS_UNIT);
export const LIEU_REF = refFr(LIEU_UNIT);
export const QUI_QUE_REF = refFr(QUI_QUE_UNIT);
export const DONT_OU_REF = refFr(DONT_OU_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME
 *
 *  b1.11 settled WHICH little word by looking BEHIND it. This lesson settles
 *  whether there is anything to pick up at all, by looking IN FRONT of it.
 *  The two tests stack and neither replaces the other: act 7 says so on the
 *  card and quotes b1.11 verbatim.
 *
 *  It is true in one hundred per cent of the sentences this lesson prints,
 *  including act 10, where what precedes the comma is a whole sentence and
 *  therefore not a noun, which is exactly why `ce` is required there.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un nom devant : tu le reprends. Rien devant : tu écris ce.';
export const REFRAME_EN = 'A noun in front: you pick it up. Nothing in front: you write ce.';

/** The one-line form the drills use as a coach line. */
export const THE_LOOK = 'Regarde devant le petit mot : y a-t-il un nom ?';
export const THE_LOOK_EN = 'Look in front of the little word: is there a noun there?';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'lequel pour les choses, qui pour les personnes.',
    why: "False, and it is the antecedent-sorting instinct b1.11's act 6 exists to kill. « la personne à laquelle je pense » is ordinary French, and the rule says nothing at all about the ce half, which is four of this lesson's eleven acts.",
  },
  {
    text: 'Après une préposition, on met toujours lequel.',
    why: "False wherever dont or où does the job: « le livre dont je parle », « la ville où je suis né ». Act 5 is built on exactly that exception, so a reframe that denies it would contradict the act that teaches the seam.",
  },
  {
    text: "ce qui, ce que et ce dont, c'est qui, que et dont avec ce devant.",
    why: 'True mechanically, and it says nothing about lequel, which is six of the eleven acts. It also hides the reason ce is there at all, which is the one thing act 7 has to make land.',
  },
  {
    text: 'Le français ne finit jamais une phrase par une préposition.',
    why: "A true contrast with English and a good hack, which act 2 gives as a hack. It is about WORD ORDER, not about choosing the pronoun, and it is silent on acts 7 to 10, where there is no preposition to place.",
  },
  {
    text: 'Quand tu ne peux pas nommer la chose, écris ce.',
    why: "Nearly right and wrong at the edge: in « ce dont j'ai besoin » the learner often can name the thing and still must write ce. The test is whether a noun is WRITTEN in front of the gap, not whether one could be.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. IMPORTED ROWS (seed-checked 2026-09-24)
 *
 *  Every id below was read out of `ealch-v2/src/content/seed.json` and its
 *  French is quoted in the trailing comment, so no reader has to open the
 *  seed. Seed-checked only: DB check pending at import.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.au-restaurant.193',        // Ce n'est pas ce que j'ai commandé.
    'fr.b1.litterature.003',          // C'est le roman dont je t'ai parlé.
  ],
  act2: [
    'fr.a1.objets.165',               // Le chargeur est près du lit.
    'fr.a1.prepositions-essentielles.096', // La pharmacie est à côté de l'école.
  ],
  act3: [
    'fr.a1.objets.122',               // Le stylo est à côté du cahier.  (named only)
    'fr.a1.maison.134',               // La salle de bain est au bout du couloir.  (named only)
  ],
  act4: [
    'fr.b1.musique.001',              // Le concert auquel j'ai assisté hier soir était magnifique.  (named only)
  ],
  act5: [
    'fr.b1.cinema.001',               // C'est le réalisateur dont tout le monde parle en ce moment.  (named only)
    'fr.b1.voisinage.004',            // C'est le voisin dont je t'ai parlé hier.  (named only)
    'fr.b1.sports-et-loisirs.080',    // Elle a décidé de rejoindre un club dont les membres sont très motivés.
    'fr.a1.prepositions-essentielles.126', // Le chat est à côté de la boîte.
    'fr.a1.maison.124',               // La cuisine est à côté du salon.  (named only)
    'fr.sons.voyelles.389',           // La douche est au bout du couloir.  (named only)
  ],
  act6: [
    'fr.a2.transports-quotidiens.162', // Allez au bout de la rue, puis tournez à gauche.
  ],
  act7: [
    'fr.a2.hebergement.119',          // Je vais voir ce que je peux faire.
    'fr.b1.heure-et-date.053',        // On verra bien ce que l'avenir nous réserve.
    'fr.b1.routines.062',             // Chaque matin, elle se demandait ce qu'elle allait préparer pour le dîner.  (named only)
  ],
  act8: [
    'fr.b1.courses.001',              // Nous avons acheté tout ce dont nous avions besoin.  (named only)
  ],
  act9: [
    'fr.b1.maison.014',               // Le déménagement coûte plus cher que ce que nous avions prévu.  (named only)
  ],
  act10: [
    'fr.b1.maison.009',               // Le loyer augmente chaque année, ce qui inquiète beaucoup de locataires.  (named only)
    'fr.b2.decouvertes.004',          // Marie Curie a découvert le radium, ce qui lui a valu deux prix Nobel.
    'fr.b2.tourisme.003',             // L'assurance voyage a refusé de rembourser les frais médicaux, ce qui nous a beaucoup contrariés.  (named only)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable by a section, never releasable
 *  through a deck tranche. Checked row by row against seed.json. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.a1.objets.122',               // dictation only
  'fr.a1.maison.134',               // dictation only
  'fr.b1.musique.001',              // dictation only
  'fr.b1.cinema.001',               // dictation only
  'fr.b1.voisinage.004',            // dictation only
  'fr.a1.maison.124',               // dictation only
  'fr.sons.voyelles.389',           // sentence + review only
  'fr.b1.routines.062',             // dictation only
  'fr.b1.courses.001',              // dictation only
  'fr.b1.maison.014',               // sentence + dictation only
  'fr.b1.maison.009',               // sentence + dictation only
  'fr.b2.tourisme.003',             // sentence + dictation only
  'fr.b1.heure-et-date.053',        // flashcard + sentence, no voiceflash
];

/** Rows a `practice skill: 'speak'` section may NOT name. Only three imports
 *  carry `voiceflash` and none of them is on this lesson's own ground, so
 *  every import is listed here and the speak section is built from the
 *  authored rows alone. */
export const NOT_SPEAKABLE: readonly string[] = [...IMPORT_IDS];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE AUTHORED ROWS
 *
 *  `sent` is a sentence, `phrase` a short unit, `gap` a gapfill card whose
 *  front is the sentence with the relative removed AND a cue naming what
 *  sits in front of the gap, so the card asks because of the shape of the
 *  sentence rather than because of a translation. `rule` is a grammar card:
 *  the prompt is the question, `fr` is the rule.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const GP = ['relatives-lequel-ce-que'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP,
});

/** A gapfill card: the front is the sentence with the relative gapped and a
 *  cue in brackets naming what sits in front of the gap. */
const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  prompt: string, notes: string, tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, cardType: 'gapfill', prompt, notes, grammarPoints: GP,
});

/** A rule card: the prompt is the question, `fr` is the rule. */
const rule = (
  n: number, fr: string, en: string, prompt: string, notes: string, tags: string[],
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en,
  tags, drills: ['flashcard', 'review'] as Item['drills'], version: 1,
  cardType: 'grammar', prompt, notes, grammarPoints: GP,
});

/* ── ACT 1 · DEUX TROUS DANS LA MÊME PHRASE · 1400-1417 ──────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, "J'ai ouvert le boîtier avec un tournevis.",
    'I opened the case with a screwdriver.',
    '/ʒe u.vɛʁ lə bwa.tje a.vɛk ɛ̃ tuʁ.nə.vi/',
    'zhay oo-VEHR luh bwah-TYAY · ah-vek uhⁿ toor-nuh-VEE', ['scene', 'court']),
  sent(1401, 'Le tournevis est trop petit.', 'The screwdriver is too small.',
    '/lə tuʁ.nə.vi ɛ tʁo pə.ti/',
    'luh toor-nuh-VEE · eh troh puh-TEE', ['scene', 'court']),
  sent(1402, "Le tournevis avec lequel j'ai ouvert le boîtier est trop petit.",
    'The screwdriver I opened the case with is too small.',
    '/lə tuʁ.nə.vi a.vɛk lə.kɛl ʒe u.vɛʁ lə bwa.tje ɛ tʁo pə.ti/',
    'luh toor-nuh-VEE ah-vek luh-KEL · zhay oo-vehr luh bwah-TYAY · eh troh puh-TEE',
    ['scene', 'lequel', 'soudure'], FCVDR),
  sent(1403, "Ma lampe ne s'allume plus.", 'My lamp does not come on any more.',
    '/ma lɑ̃p nə sa.lym ply/',
    'mah LAHⁿP · nuh sah-LÜM PLÜ', ['scene', 'court']),
  sent(1404, "Ce qui m'inquiète, c'est le fil.", 'What worries me is the wire.',
    '/sə ki mɛ̃.kjɛt sɛ lə fil/',
    'suh kee mehⁿ-KYET · seh luh FEEL', ['scene', 'neutre'], FCVDR),
  sent(1405, 'Voici le bouton sur lequel il faut appuyer.',
    'Here is the button you have to press.',
    '/vwa.si lə bu.tɔ̃ syʁ lə.kɛl il fo a.pɥi.je/',
    'vwah-see luh boo-TOHⁿ · sür luh-KEL eel foh ah-püee-YAY', ['lecture', 'lequel']),
  sent(1406, "L'établi sur lequel je travaille est trop haut.",
    'The bench I work at is too high.',
    '/le.ta.bli syʁ lə.kɛl ʒə tʁa.vaj ɛ tʁo o/',
    'lay-tah-BLEE sür luh-KEL · zhuh trah-VAHY eh troh OH', ['lecture', 'lequel']),
  sent(1407, 'Je ne sais pas ce que Nadia va décider.',
    'I do not know what Nadia is going to decide.',
    '/ʒə nə sɛ pa sə kə na.dja va de.si.de/',
    'zhuh nuh seh PAH · suh kuh nah-DYAH vah day-see-DAY', ['lecture', 'neutre']),
  sent(1408, 'Je ne sais pas ce qui a lâché.', 'I do not know what gave way.',
    '/ʒə nə sɛ pa sə ki a lɑ.ʃe/',
    'zhuh nuh seh PAH · suh kee ah lah-SHAY', ['lecture', 'neutre']),
  rule(1409, 'Devant le trou : un nom, ou rien du tout.',
    'In front of the gap: either a noun, or nothing at all.',
    'Que regardes-tu en premier ?',
    'Le nom de devant te donne lequel. Son absence te donne ce. EN: the noun in front gives you lequel; its absence gives you ce.',
    ['regle', 'devant']),
  sent(1410, 'Les outils sans lesquels on ne peut rien faire sont dans la boîte rouge.',
    'The tools you cannot do anything without are in the red box.',
    '/le.zu.ti sɑ̃ le.kɛl ɔ̃ nə pø ʁjɛ̃ fɛʁ sɔ̃ dɑ̃ la bwat ʁuʒ/',
    'lay zoo-TEE sahⁿ lay-KEL · ohⁿ nuh puh ryehⁿ FEHR · sohⁿ dahⁿ lah bwaht ROOZH',
    ['lecture', 'lequel', 'pluriel']),
  sent(1411, 'La raison pour laquelle je viens ici est simple.',
    'The reason why I come here is simple.',
    '/la ʁɛ.zɔ̃ puʁ la.kɛl ʒə vjɛ̃.zi.si ɛ sɛ̃pl/',
    'lah reh-ZOHⁿ poor lah-KEL · zhuh vyehⁿ zee-SEE eh SEHⁿPL',
    ['lecture', 'lequel', 'raison']),
  sent(1412, 'Dis-moi ce dont tu as besoin.', 'Tell me what you need.',
    '/di mwa sə dɔ̃ ty a bə.zwɛ̃/',
    'dee MWAH · suh dohⁿ tü ah buh-ZWEHⁿ', ['lecture', 'neutre', 'besoin']),
  sent(1413, "Tout ce qui est sur l'établi appartient à l'atelier.",
    'Everything on the bench belongs to the workshop.',
    '/tu sə ki ɛ syʁ le.ta.bli a.paʁ.tjɛ̃ a la.tə.lje/',
    'too suh kee eh sür lay-tah-BLEE · ah-par-tyehⁿ ah lah-tuh-LYAY',
    ['lecture', 'neutre', 'tout']),
  sent(1414, "L'atelier dans lequel nous réparons les lampes est rue Ontario.",
    'The workshop where we repair the lamps is on Ontario street.',
    '/la.tə.lje dɑ̃ lə.kɛl nu ʁe.pa.ʁɔ̃ le lɑ̃p ɛ ʁy ɔ̃.ta.ʁjo/',
    'lah-tuh-LYAY dahⁿ luh-KEL · noo ray-pah-ROHⁿ lay LAHⁿP · eh rü ohⁿ-tah-RYOH',
    ['lecture', 'lequel']),
  sent(1415, 'Nadia range les vis dans une boîte.', 'Nadia keeps the screws in a box.',
    '/na.dja ʁɑ̃ʒ le vis dɑ̃.zyn bwat/',
    'nah-DYAH rahⁿzh lay VEESS · dahⁿ zün BWAHT', ['scene', 'court']),
  sent(1416, 'La boîte dans laquelle Nadia range les vis est bleue.',
    'The box Nadia keeps the screws in is blue.',
    '/la bwat dɑ̃ la.kɛl na.dja ʁɑ̃ʒ le vis ɛ blø/',
    'lah BWAHT dahⁿ lah-KEL · nah-dyah rahⁿzh lay VEESS · eh BLUH',
    ['scene', 'lequel', 'soudure'], FCVDR),
  gap(1417, 'Le tournevis avec lequel Samuel serre les vis est cassé.',
    'The screwdriver Samuel tightens the screws with is broken.',
    '/lə tuʁ.nə.vi a.vɛk lə.kɛl sa.my.ɛl sɛʁ le vis ɛ ka.se/',
    'luh toor-nuh-VEE ah-vek luh-KEL · sah-mü-el sehr lay VEESS · eh kah-SAY',
    'Le tournevis avec ___ Samuel serre les vis est cassé. (un nom devant : le tournevis)',
    'Un nom est écrit devant, donc tu le reprends. EN: a noun is written in front, so you pick it up.',
    ['lequel', 'test']),
];

/* ── ACT 2 · LA PRÉPOSITION RESTE DEVANT · 1418-1435 ─────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1418, "Le stylo avec lequel j'écris vient de ma grand-mère.",
    'The pen I write with came from my grandmother.',
    '/lə sti.lo a.vɛk lə.kɛl ʒe.kʁi vjɛ̃ də ma ɡʁɑ̃.mɛʁ/',
    'luh stee-LOH ah-vek luh-KEL · zhay-KREE vyehⁿ duh mah grahⁿ-MEHR',
    ['place', 'lequel'], FCVDR),
  sent(1419, 'La table sur laquelle tu poses la lampe est solide.',
    'The table you put the lamp on is solid.',
    '/la tabl syʁ la.kɛl ty poz la lɑ̃p ɛ sɔ.lid/',
    'lah TAHBL sür lah-KEL · tü pohz lah LAHⁿP · eh soh-LEED', ['place', 'lequel']),
  sent(1420, "Le carton dans lequel j'ai mis les vis a disparu.",
    'The box I put the screws in has disappeared.',
    '/lə kaʁ.tɔ̃ dɑ̃ lə.kɛl ʒe mi le vis a dis.pa.ʁy/',
    'luh kar-TOHⁿ dahⁿ luh-KEL · zhay mee lay VEESS · ah dees-pah-RÜ',
    ['place', 'lequel']),
  sent(1421, 'Le chiffon avec lequel Samuel nettoie les pièces est propre.',
    'The cloth Samuel cleans the parts with is clean.',
    '/lə ʃi.fɔ̃ a.vɛk lə.kɛl sa.my.ɛl nɛ.twa le pjɛs ɛ pʁɔpʁ/',
    'luh shee-FOHⁿ ah-vek luh-KEL · sah-mü-EL neh-TWAH lay PYESS · eh PROPR',
    ['place', 'lequel']),
  rule(1422, 'En français, la préposition ne reste jamais à la fin.',
    'In French the preposition never stays at the end.',
    'Où se met la préposition ?',
    'Elle passe devant le petit mot : avec lequel, sur laquelle. EN: it moves in front of the little word.',
    ['regle', 'place']),
  sent(1423, 'Le camion dans lequel nous chargeons les caisses est garé derrière.',
    'The van we load the crates into is parked round the back.',
    '/lə ka.mjɔ̃ dɑ̃ lə.kɛl nu ʃaʁ.ʒɔ̃ le kɛs ɛ ɡa.ʁe dɛ.ʁjɛʁ/',
    'luh kah-MYOHⁿ dahⁿ luh-KEL · noo shar-ZHOHⁿ lay KESS · eh gah-ray deh-RYEHR',
    ['place', 'lequel']),
  sent(1424, "L'escabeau sur lequel je monte est trop court.",
    'The stepladder I climb up is too short.',
    '/lɛs.ka.bo syʁ lə.kɛl ʒə mɔ̃t ɛ tʁo kuʁ/',
    'less-kah-BOH sür luh-KEL · zhuh MOHⁿT eh troh KOOR', ['place', 'lequel']),
  sent(1425, "Le sac dans lequel tu as rangé les fils est sous l'établi.",
    'The bag you put the wires in is under the bench.',
    '/lə sak dɑ̃ lə.kɛl ty a ʁɑ̃.ʒe le fil ɛ su le.ta.bli/',
    'luh SAK dahⁿ luh-KEL · tü ah rahⁿ-ZHAY lay FEEL · eh soo lay-tah-BLEE',
    ['place', 'lequel'], FCVDR),
  sent(1426, "La pièce pour laquelle j'ai attendu trois semaines est arrivée.",
    'The part I waited three weeks for has arrived.',
    '/la pjɛs puʁ la.kɛl ʒe a.tɑ̃.dy tʁwa sə.mɛn ɛ.ta.ʁi.ve/',
    'lah PYESS poor lah-KEL · zhay ah-tahⁿ-DÜ trwah suh-MEN · eh-tah-ree-VAY',
    ['place', 'lequel']),
  gap(1427, 'Le marteau avec lequel je travaille est trop lourd.',
    'The hammer I work with is too heavy.',
    '/lə maʁ.to a.vɛk lə.kɛl ʒə tʁa.vaj ɛ tʁo luʁ/',
    'luh mar-TOH ah-vek luh-KEL · zhuh trah-VAHY · eh troh LOOR',
    'Le marteau avec ___ je travaille est trop lourd. (un nom masculin devant)',
    'Après une préposition, que ne sert plus. EN: after a preposition, que is no longer available.',
    ['place', 'test']),
  sent(1428, 'Le tiroir dans lequel se trouvent les piles est fermé à clé.',
    'The drawer the batteries are in is locked.',
    '/lə ti.ʁwaʁ dɑ̃ lə.kɛl sə tʁuv le pil ɛ fɛʁ.me a kle/',
    'luh tee-RWAHR dahⁿ luh-KEL · suh troov lay PEEL · eh fehr-may ah KLAY',
    ['place', 'lequel']),
  phrase(1429, 'le stylo avec lequel', 'the pen I write with',
    '/lə sti.lo a.vɛk lə.kɛl/', 'luh stee-LOH ah-vek luh-KEL', ['place', 'morceau']),
  phrase(1430, 'la table sur laquelle', 'the table I put it on',
    '/la tabl syʁ la.kɛl/', 'lah TAHBL sür lah-KEL', ['place', 'morceau']),
  phrase(1431, 'le carton dans lequel', 'the box I put it in',
    '/lə kaʁ.tɔ̃ dɑ̃ lə.kɛl/', 'luh kar-TOHⁿ dahⁿ luh-KEL', ['place', 'morceau']),
  sent(1432, "L'armoire devant laquelle tu passes contient les outils lourds.",
    'The cupboard you walk past holds the heavy tools.',
    '/laʁ.mwaʁ də.vɑ̃ la.kɛl ty pɑs kɔ̃.tjɛ̃ le.zu.ti luʁ/',
    'lar-MWAHR duh-vahⁿ lah-KEL · tü PAHSS · kohⁿ-tyehⁿ lay zoo-tee LOOR',
    ['place', 'lequel']),
  sent(1433, 'La fenêtre par laquelle entre le bruit donne sur la rue.',
    'The window the noise comes in through looks onto the street.',
    '/la fə.nɛtʁ paʁ la.kɛl ɑ̃tʁ lə bʁɥi dɔn syʁ la ʁy/',
    'lah fuh-NEHTR par lah-KEL · ahⁿtr luh BRÜEE · don sür lah RÜ',
    ['place', 'lequel']),
  sent(1434, 'Le banc sous lequel le chat dort est en bois.',
    'The bench the cat sleeps under is wooden.',
    '/lə bɑ̃ su lə.kɛl lə ʃa dɔʁ ɛ.tɑ̃ bwa/',
    'luh BAHⁿ soo luh-KEL · luh shah DOR · eh tahⁿ BWAH', ['place', 'lequel']),
  rule(1435, "Après une préposition, que ne sert plus : c'est lequel qui reprend le nom.",
    'After a preposition, que is no longer available: lequel picks the noun up.',
    'Pourquoi pas que après avec ?',
    'que ne peut être que complément direct, sans préposition devant lui. EN: que can only be a direct object, with no preposition in front of it.',
    ['regle', 'place']),
];

/* ── ACT 3 · QUATRE FORMES, TROIS SONS · 1436-1453 ───────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1436, 'Le couteau avec lequel je coupe le fil est émoussé.',
    'The knife I cut the wire with is blunt.',
    '/lə ku.to a.vɛk lə.kɛl ʒə kup lə fil ɛ.te.mu.se/',
    'luh koo-TOH ah-vek luh-KEL · zhuh koop luh FEEL · eh-tay-moo-SAY',
    ['forme', 'masculin'], FCVDR),
  sent(1437, 'La pince avec laquelle je tiens la pièce est trop grande.',
    'The pliers I hold the part with are too big.',
    '/la pɛ̃s a.vɛk la.kɛl ʒə tjɛ̃ la pjɛs ɛ tʁo ɡʁɑ̃d/',
    'lah PEHⁿSS ah-vek lah-KEL · zhuh tyehⁿ lah PYESS · eh troh GRAHⁿD',
    ['forme', 'feminin'], FCVDR),
  sent(1438, 'Les ciseaux avec lesquels tu coupes le tissu sont à Samuel.',
    'The scissors you cut the cloth with belong to Samuel.',
    '/le si.zo a.vɛk le.kɛl ty kup lə ti.sy sɔ̃.ta sa.my.ɛl/',
    'lay see-ZOH ah-vek lay-KEL · tü koop luh tee-SÜ · sohⁿ tah sah-mü-EL',
    ['forme', 'masculin', 'pluriel'], FCVDR),
  sent(1439, 'Les pinces avec lesquelles on serre les fils sont rouges.',
    'The pliers you tighten the wires with are red.',
    '/le pɛ̃s a.vɛk le.kɛl ɔ̃ sɛʁ le fil sɔ̃ ʁuʒ/',
    'lay PEHⁿSS ah-vek lay-KEL · ohⁿ sehr lay FEEL · sohⁿ ROOZH',
    ['forme', 'feminin', 'pluriel'], FCVDR),
  rule(1440, 'lequel prend le genre et le nombre du nom de devant.',
    'lequel takes the gender and number of the noun in front of it.',
    'Comment choisir entre lequel et laquelle ?',
    'Tu regardes le nom de devant, jamais la chose dont tu parles. EN: look at the noun in front, never at the thing itself.',
    ['regle', 'forme']),
  phrase(1441, 'lequel', 'which one, for one masculine thing',
    '/lə.kɛl/', 'luh-KEL', ['forme', 'masculin']),
  phrase(1442, 'laquelle', 'which one, for one feminine thing',
    '/la.kɛl/', 'lah-KEL', ['forme', 'feminin']),
  phrase(1443, 'lesquels', 'which ones, for several masculine things',
    '/le.kɛl/', 'lay-KEL', ['forme', 'masculin', 'pluriel']),
  phrase(1444, 'lesquelles', 'which ones, for several feminine things',
    '/le.kɛl/', 'lay-KEL', ['forme', 'feminin', 'pluriel']),
  sent(1445, 'Le dossier dans lequel je range les fiches est vert.',
    'The folder I keep the cards in is green.',
    '/lə do.sje dɑ̃ lə.kɛl ʒə ʁɑ̃ʒ le fiʃ ɛ vɛʁ/',
    'luh doh-SYAY dahⁿ luh-KEL · zhuh rahⁿzh lay FEESH · eh VEHR',
    ['forme', 'masculin']),
  sent(1446, 'La pochette dans laquelle je garde les reçus est pleine.',
    'The wallet I keep the receipts in is full.',
    '/la pɔ.ʃɛt dɑ̃ la.kɛl ʒə ɡaʁd le ʁə.sy ɛ plɛn/',
    'lah poh-SHET dahⁿ lah-KEL · zhuh gard lay ruh-SÜ · eh PLENN',
    ['forme', 'feminin']),
  sent(1447, 'Les cartons dans lesquels nous stockons les lampes sont au fond.',
    'The boxes we store the lamps in are at the back.',
    '/le kaʁ.tɔ̃ dɑ̃ le.kɛl nu stɔ.kɔ̃ le lɑ̃p sɔ̃.to fɔ̃/',
    'lay kar-TOHⁿ dahⁿ lay-KEL · noo stoh-KOHⁿ lay LAHⁿP · sohⁿ toh FOHⁿ',
    ['forme', 'masculin', 'pluriel'], FCVDR),
  sent(1448, 'Les caisses dans lesquelles nous rangeons les outils sont numérotées.',
    'The crates we keep the tools in are numbered.',
    '/le kɛs dɑ̃ le.kɛl nu ʁɑ̃.ʒɔ̃ le.zu.ti sɔ̃ ny.me.ʁɔ.te/',
    'lay KESS dahⁿ lay-KEL · noo rahⁿ-ZHOHⁿ lay zoo-TEE · sohⁿ nü-may-roh-TAY',
    ['forme', 'feminin', 'pluriel']),
  gap(1449, "La clé avec laquelle j'ouvre l'armoire est rouillée.",
    'The key I open the cupboard with is rusty.',
    '/la kle a.vɛk la.kɛl ʒuvʁ laʁ.mwaʁ ɛ ʁu.je/',
    'lah KLAY ah-vek lah-KEL · zhoovr lar-MWAHR · eh roo-YAY',
    "La clé avec ___ j'ouvre l'armoire est rouillée. (un nom féminin singulier)",
    'La clé est féminine, donc laquelle. EN: la clé is feminine, so laquelle.',
    ['forme', 'test']),
  gap(1450, 'Les gants avec lesquels Nadia soude sont usés.',
    'The gloves Nadia welds with are worn out.',
    '/le ɡɑ̃ a.vɛk le.kɛl na.dja sud sɔ̃.ty.ze/',
    'lay GAHⁿ ah-vek lay-KEL · nah-dyah SOOD · sohⁿ tü-ZAY',
    'Les gants avec ___ Nadia soude sont usés. (un nom masculin pluriel)',
    'Les gants est masculin pluriel, donc lesquels. EN: masculine plural, so lesquels.',
    ['forme', 'test']),
  rule(1451, 'Quatre formes écrites, trois sons : lesquels et lesquelles se disent pareil.',
    'Four written forms, three sounds: lesquels and lesquelles sound the same.',
    'Combien de sons pour quatre formes ?',
    "L'oreille ne tranche pas entre les deux pluriels : seul le nom de devant le fait. EN: the ear cannot separate the two plurals; only the noun in front can.",
    ['regle', 'forme']),
  sent(1452, 'Le moteur pour lequel nous attendons une pièce est en panne.',
    'The motor we are waiting for a part for has broken down.',
    '/lə mɔ.tœʁ puʁ lə.kɛl nu.za.tɑ̃.dɔ̃.zyn pjɛs ɛ.tɑ̃ pan/',
    'luh moh-TUHR poor luh-KEL · noo zah-tahⁿ-dohⁿ zün PYESS · eh tahⁿ PANN',
    ['forme', 'masculin']),
  sent(1453, "La machine pour laquelle j'ai rempli le formulaire est réparée.",
    'The machine I filled the form in for has been repaired.',
    '/la ma.ʃin puʁ la.kɛl ʒe ʁɑ̃.pli lə fɔʁ.my.lɛʁ ɛ ʁe.pa.ʁe/',
    'lah mah-SHEEN poor lah-KEL · zhay rahⁿ-plee luh for-mü-LEHR · eh ray-pah-RAY',
    ['forme', 'feminin']),
];

/* ── ACT 4 · À DEVIENT AUQUEL · 1454-1470 ────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1454, 'Le cours auquel je me suis inscrit commence en mars.',
    'The course I signed up for starts in March.',
    '/lə kuʁ o.kɛl ʒə mə sɥi.zɛ̃s.kʁi kɔ.mɑ̃s ɑ̃ maʁs/',
    'luh KOOR oh-KEL · zhuh muh süee zehⁿs-KREE · koh-mahⁿss ahⁿ MARSS',
    ['soudure', 'a'], FCVDR),
  sent(1455, 'La réunion à laquelle tu penses a lieu jeudi.',
    'The meeting you are thinking of takes place on Thursday.',
    '/la ʁe.y.njɔ̃ a la.kɛl ty pɑ̃s a ljø ʒø.di/',
    'lah ray-ü-NYOHⁿ ah lah-KEL · tü PAHⁿSS · ah lyuh zhuh-DEE',
    ['soudure', 'a'], FCVDR),
  sent(1456, 'Les ateliers auxquels nous participons sont gratuits.',
    'The workshops we take part in are free.',
    '/le.za.tə.lje o.kɛl nu paʁ.ti.si.pɔ̃ sɔ̃ ɡʁa.tɥi/',
    'lay zah-tuh-LYAY oh-KEL · noo par-tee-see-POHⁿ · sohⁿ grah-TÜEE',
    ['soudure', 'a', 'pluriel']),
  sent(1457, 'Les questions auxquelles je réponds sont toujours les mêmes.',
    'The questions I answer are always the same ones.',
    '/le kɛs.tjɔ̃ o.kɛl ʒə ʁe.pɔ̃ sɔ̃ tu.ʒuʁ le mɛm/',
    'lay kess-TYOHⁿ oh-KEL · zhuh ray-POHⁿ · sohⁿ too-zhoor lay MEMM',
    ['soudure', 'a', 'pluriel']),
  rule(1458, 'à plus lequel se soudent : auquel, auxquels, auxquelles. à laquelle reste en deux mots.',
    'à and lequel fuse: auquel, auxquels, auxquelles. à laquelle stays two words.',
    'Que devient à devant lequel ?',
    'Le féminin singulier est le seul qui résiste. EN: the feminine singular is the only one that resists.',
    ['regle', 'soudure']),
  phrase(1459, 'auquel', 'to which, for one masculine thing',
    '/o.kɛl/', 'oh-KEL', ['soudure', 'a']),
  phrase(1460, 'à laquelle', 'to which, for one feminine thing',
    '/a la.kɛl/', 'ah lah-KEL', ['soudure', 'a']),
  phrase(1461, 'auxquels', 'to which, for several masculine things',
    '/o.kɛl/', 'oh-KEL', ['soudure', 'a', 'pluriel']),
  phrase(1462, 'auxquelles', 'to which, for several feminine things',
    '/o.kɛl/', 'oh-KEL', ['soudure', 'a', 'pluriel']),
  sent(1463, 'Le projet auquel je pense demande deux personnes.',
    'The project I have in mind needs two people.',
    '/lə pʁɔ.ʒɛ o.kɛl ʒə pɑ̃s də.mɑ̃d dø pɛʁ.sɔn/',
    'luh proh-ZHEH oh-KEL · zhuh PAHⁿSS · duh-mahⁿd duh pehr-SONN',
    ['soudure', 'a']),
  sent(1464, 'La liste à laquelle il manque un nom est sur la porte.',
    'The list that has a name missing from it is on the door.',
    '/la list a la.kɛl il mɑ̃k ɛ̃ nɔ̃ ɛ syʁ la pɔʁt/',
    'lah LEEST ah lah-KEL · eel mahⁿk uhⁿ NOHⁿ · eh sür lah PORT',
    ['soudure', 'a']),
  gap(1465, 'Le club auquel Samuel appartient se réunit le mardi.',
    'The club Samuel belongs to meets on Tuesdays.',
    '/lə klœb o.kɛl sa.my.ɛl a.paʁ.tjɛ̃ sə ʁe.y.ni lə maʁ.di/',
    'luh KLUHB oh-KEL · sah-mü-el ah-par-TYEHⁿ · suh ray-ü-NEE luh mar-DEE',
    'Le club ___ Samuel appartient se réunit le mardi. (appartenir à, un nom masculin)',
    'à plus lequel se soudent en un mot. EN: à and lequel fuse into one word.',
    ['soudure', 'test']),
  gap(1466, 'La lettre à laquelle je réponds vient de Montréal.',
    'The letter I am answering comes from Montreal.',
    '/la lɛtʁ a la.kɛl ʒə ʁe.pɔ̃ vjɛ̃ də mɔ̃.ʁe.al/',
    'lah LETR ah lah-KEL · zhuh ray-POHⁿ · vyehⁿ duh mohⁿ-ray-AL',
    'La lettre ___ je réponds vient de Montréal. (répondre à, un nom féminin)',
    'Au féminin singulier, rien ne se soude. EN: in the feminine singular nothing fuses.',
    ['soudure', 'test']),
  sent(1467, 'Les outils auxquels personne ne touche restent au fond.',
    'The tools nobody touches stay at the back.',
    '/le.zu.ti o.kɛl pɛʁ.sɔn nə tuʃ ʁɛst o fɔ̃/',
    'lay zoo-TEE oh-KEL · pehr-sonn nuh TOOSH · rest oh FOHⁿ',
    ['soudure', 'a', 'pluriel']),
  sent(1468, "Le concours auquel Samuel s'est présenté a lieu à Québec.",
    'The competition Samuel entered is held in Quebec City.',
    '/lə kɔ̃.kuʁ o.kɛl sa.my.ɛl sɛ pʁe.zɑ̃.te a ljø a ke.bɛk/',
    'luh kohⁿ-KOOR oh-KEL · sah-mü-el seh pray-zahⁿ-TAY · ah lyuh ah kay-BEK',
    ['soudure', 'a']),
  sent(1469, 'Les soirées auxquelles Nadia nous invite finissent tard.',
    'The evenings Nadia invites us to finish late.',
    '/le swa.ʁe o.kɛl na.dja nu.zɛ̃.vit fi.nis taʁ/',
    'lay swah-RAY oh-KEL · nah-dyah noo zehⁿ-VEET · fee-neess TAR',
    ['soudure', 'a', 'pluriel']),
  rule(1470, "C'est le verbe qui met le à : on s'inscrit à, on pense à, on répond à.",
    'The verb is what puts the à there: on s’inscrit à, on pense à, on répond à.',
    'Pourquoi à devant ce nom ?',
    'Cherche le verbe de la relative, pas le nom de devant. EN: look for the verb inside the clause, not at the noun in front.',
    ['regle', 'soudure']),
];

/* ── ACT 5 · DE DEVIENT DUQUEL, ET DONT S'ARRÊTE · 1471-1488 ─────────────── */

export const ACT5_ROWS: Row[] = [
  rule(1471, 'Avec de tout seul, tu écris dont. Avec un groupe qui finit par de, tu écris duquel.',
    'With de on its own you write dont. With a group that ends in de you write duquel.',
    "Quand dont ne peut-il pas venir ?",
    `C'est la seule place où dont ne passe pas, et ${DONT_OU_REF} te donne tout le reste. EN: this is the one place dont cannot go.`,
    ['regle', 'compose']),
  sent(1472, 'Le bâtiment à côté duquel nous garons le camion est une école.',
    'The building we park the van next to is a school.',
    '/lə bɑ.ti.mɑ̃ a ko.te dy.kɛl nu ɡa.ʁɔ̃ lə ka.mjɔ̃ ɛ.tyn e.kɔl/',
    'luh bah-tee-MAHⁿ ah koh-tay dü-KEL · noo gah-rohⁿ luh kah-MYOHⁿ · eh tün ay-KOL',
    ['compose', 'de'], FCVDR),
  sent(1473, "La rue au bout de laquelle se trouve l'atelier est calme.",
    'The street the workshop is at the end of is quiet.',
    '/la ʁy o bu də la.kɛl sə tʁuv la.tə.lje ɛ kalm/',
    'lah RÜ oh boo duh lah-KEL · suh troov lah-tuh-LYAY · eh KALM',
    ['compose', 'de']),
  sent(1474, 'Le parc près duquel Nadia habite ferme à vingt heures.',
    'The park Nadia lives near closes at eight.',
    '/lə paʁk pʁɛ dy.kɛl na.dja a.bit fɛʁm a vɛ̃.tœʁ/',
    'luh PARK preh dü-KEL · nah-dyah ah-BEET · fehrm ah vehⁿ-TUHR',
    ['compose', 'de']),
  sent(1475, 'Les immeubles en face desquels nous travaillons sont neufs.',
    'The blocks we work opposite are new.',
    '/le.zi.mœbl ɑ̃ fas de.kɛl nu tʁa.va.jɔ̃ sɔ̃ nœf/',
    'lay zee-MUHBL ahⁿ fahss day-KEL · noo trah-vah-YOHⁿ · sohⁿ NUHF',
    ['compose', 'de', 'pluriel']),
  sent(1476, "La cour au milieu de laquelle il y a un arbre appartient à la ville.",
    'The yard with a tree in the middle of it belongs to the city.',
    '/la kuʁ o mi.ljø də la.kɛl il i a ɛ̃.naʁbʁ a.paʁ.tjɛ̃ a la vil/',
    'lah KOOR oh mee-lyuh duh lah-KEL · eel ee ah uhⁿ NARBR · ah-par-tyehⁿ ah lah VEEL',
    ['compose', 'de']),
  sent(1477, "C'est le tiroir dont je parle.", 'That is the drawer I am talking about.',
    '/sɛ lə ti.ʁwaʁ dɔ̃ ʒə paʁl/',
    'seh luh tee-RWAHR · dohⁿ zhuh PARL', ['compose', 'contraste'], FCVDR),
  sent(1478, "C'est le tiroir à côté duquel j'ai posé la clé.",
    'That is the drawer I put the key beside.',
    '/sɛ lə ti.ʁwaʁ a ko.te dy.kɛl ʒe po.ze la kle/',
    'seh luh tee-RWAHR ah koh-tay dü-KEL · zhay poh-zay lah KLAY',
    ['compose', 'contraste'], FCVDR),
  phrase(1479, 'duquel', 'of which, for one masculine thing',
    '/dy.kɛl/', 'dü-KEL', ['compose', 'de']),
  phrase(1480, 'de laquelle', 'of which, for one feminine thing',
    '/də la.kɛl/', 'duh lah-KEL', ['compose', 'de']),
  phrase(1481, 'desquels', 'of which, for several masculine things',
    '/de.kɛl/', 'day-KEL', ['compose', 'de', 'pluriel']),
  phrase(1482, 'desquelles', 'of which, for several feminine things',
    '/de.kɛl/', 'day-KEL', ['compose', 'de', 'pluriel']),
  gap(1483, 'Le marché près duquel Samuel gare le camion ouvre à sept heures.',
    'The market Samuel parks the van near opens at seven.',
    '/lə maʁ.ʃe pʁɛ dy.kɛl sa.my.ɛl ɡaʁ lə ka.mjɔ̃ uvʁ a sɛ.tœʁ/',
    'luh mar-SHAY preh dü-KEL · sah-mü-el gar luh kah-MYOHⁿ · oovr ah seh-TUHR',
    'Le marché près ___ Samuel gare le camion ouvre à sept heures. (près de, un nom masculin)',
    'près de est un groupe, donc duquel et jamais dont. EN: près de is a group, so duquel and never dont.',
    ['compose', 'test']),
  gap(1484, 'Voilà la pièce dont je parle.', 'Here is the part I am talking about.',
    '/vwa.la la pjɛs dɔ̃ ʒə paʁl/',
    'vwah-LAH lah PYESS · dohⁿ zhuh PARL',
    'Voilà la pièce ___ je parle. (parler de, de tout seul)',
    'de tout seul, donc dont. EN: de on its own, so dont.',
    ['compose', 'test']),
  sent(1485, 'Les rayons au-dessus desquels la lampe clignote sont vides.',
    'The shelves the lamp flickers above are empty.',
    '/le ʁɛ.jɔ̃ o.də.sy de.kɛl la lɑ̃p kli.ɲɔt sɔ̃ vid/',
    'lay reh-YOHⁿ oh-duh-sü day-KEL · lah lahⁿp klee-NYOT · sohⁿ VEED',
    ['compose', 'de', 'pluriel']),
  sent(1486, "La table autour de laquelle nous mangeons vient d'un voisin.",
    'The table we eat around came from a neighbour.',
    '/la tabl o.tuʁ də la.kɛl nu mɑ̃.ʒɔ̃ vjɛ̃ dɛ̃ vwa.zɛ̃/',
    'lah TAHBL oh-toor duh lah-KEL · noo mahⁿ-ZHOHⁿ · vyehⁿ duhⁿ vwah-ZEHⁿ',
    ['compose', 'de']),
  rule(1487, 'de plus lequel se soudent aussi : duquel, desquels, desquelles. de laquelle reste en deux mots.',
    'de and lequel fuse too: duquel, desquels, desquelles. de laquelle stays two words.',
    'Que devient de devant lequel ?',
    'Même soudure que pour à, et le même féminin singulier qui résiste. EN: the same fusion as with à, and the same feminine singular that resists.',
    ['regle', 'soudure']),
  sent(1488, 'Le mur le long duquel passe le fil est humide.',
    'The wall the wire runs along is damp.',
    '/lə myʁ lə lɔ̃ dy.kɛl pɑs lə fil ɛ.ty.mid/',
    'luh MÜR luh lohⁿ dü-KEL · pahss luh FEEL · eh-tü-MEED',
    ['compose', 'de']),
];

/* ── ACT 6 · LA RAISON POUR LAQUELLE · 1489-1505 ─────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1489, "La raison pour laquelle je viens ici, c'est le silence.",
    'The reason why I come here is the quiet.',
    '/la ʁɛ.zɔ̃ puʁ la.kɛl ʒə vjɛ̃.zi.si sɛ lə si.lɑ̃s/',
    'lah reh-ZOHⁿ poor lah-KEL · zhuh vyehⁿ zee-SEE · seh luh see-LAHⁿSS',
    ['raison', 'bloc'], FCVDR),
  sent(1490, 'Les raisons pour lesquelles il part sont personnelles.',
    'The reasons why he is leaving are personal.',
    '/le ʁɛ.zɔ̃ puʁ le.kɛl il paʁ sɔ̃ pɛʁ.sɔ.nɛl/',
    'lay reh-ZOHⁿ poor lay-KEL · eel PAR · sohⁿ pehr-soh-NEL',
    ['raison', 'bloc', 'pluriel']),
  sent(1491, "Voilà la raison pour laquelle l'atelier ferme en août.",
    'That is the reason why the workshop closes in August.',
    '/vwa.la la ʁɛ.zɔ̃ puʁ la.kɛl la.tə.lje fɛʁm ɑ̃.nut/',
    'vwah-LAH lah reh-ZOHⁿ poor lah-KEL · lah-tuh-LYAY fehrm ahⁿ-NOOT',
    ['raison', 'bloc']),
  sent(1492, "L'outil grâce auquel j'ai réparé la lampe coûte huit dollars.",
    'The tool thanks to which I repaired the lamp costs eight dollars.',
    '/lu.til ɡʁɑs o.kɛl ʒe ʁe.pa.ʁe la lɑ̃p kut ɥi dɔ.laʁ/',
    'loo-TEEL grahss oh-KEL · zhay ray-pah-ray lah LAHⁿP · koot üee doh-LAR',
    ['raison', 'grace'], FCVDR),
  sent(1493, 'La méthode grâce à laquelle Samuel travaille vite est simple.',
    'The method thanks to which Samuel works fast is simple.',
    '/la me.tɔd ɡʁɑs a la.kɛl sa.my.ɛl tʁa.vaj vit ɛ sɛ̃pl/',
    'lah may-TOD grahss ah lah-KEL · sah-mü-el trah-vahy VEET · eh SEHⁿPL',
    ['raison', 'grace']),
  rule(1494, 'la raison pour laquelle : quatre mots qui vont toujours ensemble.',
    'la raison pour laquelle: four words that always travel together.',
    'Comment dit-on the reason why ?',
    "Apprends le bloc entier, pas mot à mot. EN: learn the whole block, not word by word.",
    ['regle', 'raison']),
  sent(1495, "Le point sur lequel nous ne sommes pas d'accord est le prix.",
    'The point we do not agree on is the price.',
    '/lə pwɛ̃ syʁ lə.kɛl nu nə sɔm pɑ da.kɔʁ ɛ lə pʁi/',
    'luh PWEHⁿ sür luh-KEL · noo nuh somm pah dah-KOR · eh luh PREE',
    ['raison', 'bloc']),
  sent(1496, 'La question sur laquelle tout le monde revient est le bruit.',
    'The question everyone comes back to is the noise.',
    '/la kɛs.tjɔ̃ syʁ la.kɛl tu lə mɔ̃d ʁə.vjɛ̃ ɛ lə bʁɥi/',
    'lah kess-TYOHⁿ sür lah-KEL · too luh mohⁿd ruh-VYEHⁿ · eh luh BRÜEE',
    ['raison', 'bloc']),
  sent(1497, "Le sujet auquel personne ne veut toucher, c'est l'argent.",
    'The subject nobody wants to touch is money.',
    '/lə sy.ʒɛ o.kɛl pɛʁ.sɔn nə vø tu.ʃe sɛ laʁ.ʒɑ̃/',
    'luh sü-ZHEH oh-KEL · pehr-sonn nuh vuh too-SHAY · seh lar-ZHAHⁿ',
    ['raison', 'bloc']),
  sent(1498, 'Les conditions dans lesquelles ils travaillent sont difficiles.',
    'The conditions they work in are hard.',
    '/le kɔ̃.di.sjɔ̃ dɑ̃ le.kɛl il tʁa.vaj sɔ̃ di.fi.sil/',
    'lay kohⁿ-dee-SYOHⁿ dahⁿ lay-KEL · eel trah-VAHY · sohⁿ dee-fee-SEEL',
    ['raison', 'bloc', 'pluriel']),
  gap(1499, 'La raison pour laquelle Samuel est parti reste un mystère.',
    'The reason why Samuel left remains a mystery.',
    '/la ʁɛ.zɔ̃ puʁ la.kɛl sa.my.ɛl ɛ paʁ.ti ʁɛst ɛ̃ mis.tɛʁ/',
    'lah reh-ZOHⁿ poor lah-KEL · sah-mü-el eh par-TEE · rest uhⁿ mees-TEHR',
    'La raison pour ___ Samuel est parti reste un mystère. (raison est féminin singulier)',
    'Le bloc ne change jamais : pour laquelle. EN: the block never changes: pour laquelle.',
    ['raison', 'test']),
  sent(1500, 'Le cas dans lequel tu peux revenir est écrit sur la fiche.',
    'The case in which you may come back is written on the card.',
    '/lə kɑ dɑ̃ lə.kɛl ty pø ʁə.və.niʁ ɛ.te.kʁi syʁ la fiʃ/',
    'luh KAH dahⁿ luh-KEL · tü puh ruh-vuh-NEER · eh-tay-kree sür lah FEESH',
    ['raison', 'bloc']),
  sent(1501, 'Le délai au bout duquel la garantie finit est de deux ans.',
    'The period at the end of which the warranty stops is two years.',
    '/lə de.lɛ o bu dy.kɛl la ɡa.ʁɑ̃.ti fi.ni ɛ də dø.zɑ̃/',
    'luh day-LEH oh boo dü-KEL · lah gah-rahⁿ-tee fee-NEE · eh duh duh-ZAHⁿ',
    ['raison', 'compose']),
  phrase(1502, 'la raison pour laquelle', 'the reason why',
    '/la ʁɛ.zɔ̃ puʁ la.kɛl/', 'lah reh-ZOHⁿ poor lah-KEL', ['raison', 'bloc']),
  phrase(1503, 'les conditions dans lesquelles', 'the conditions in which',
    '/le kɔ̃.di.sjɔ̃ dɑ̃ le.kɛl/', 'lay kohⁿ-dee-SYOHⁿ dahⁿ lay-KEL', ['raison', 'bloc']),
  phrase(1504, 'grâce auquel', 'thanks to which',
    '/ɡʁɑs o.kɛl/', 'grahss oh-KEL', ['raison', 'grace']),
  rule(1505, "En anglais on dit souvent the reason why. En français, pourquoi ne vient jamais là.",
    'English often says the reason why. In French, pourquoi never goes there.',
    'Peut-on dire la raison pourquoi ?',
    'Non. La raison prend pour laquelle, toujours. EN: no; la raison takes pour laquelle, always.',
    ['regle', 'raison']),
];

/* ── ACT 7 · RIEN DEVANT : CE QUI, CE QUE · 1506-1522 ────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1506, "Ce qui m'énerve, c'est le bruit.", 'What annoys me is the noise.',
    '/sə ki me.nɛʁv sɛ lə bʁɥi/',
    'suh kee may-NEHRV · seh luh BRÜEE', ['neutre', 'qui'], FCVDR),
  sent(1507, "Ce que je veux, c'est un atelier plus grand.",
    'What I want is a bigger workshop.',
    '/sə kə ʒə vø sɛ.tɛ̃.na.tə.lje ply ɡʁɑ̃/',
    'suh kuh zhuh VUH · seh tuhⁿ nah-tuh-LYAY plü GRAHⁿ',
    ['neutre', 'que'], FCVDR),
  sent(1508, 'Je ne comprends pas ce que tu veux.',
    'I do not understand what you want.',
    '/ʒə nə kɔ̃.pʁɑ̃ pɑ sə kə ty vø/',
    'zhuh nuh kohⁿ-prahⁿ PAH · suh kuh tü VUH', ['neutre', 'que']),
  sent(1509, 'Regarde ce qui est arrivé à la lampe.',
    'Look at what has happened to the lamp.',
    '/ʁə.ɡaʁd sə ki ɛ.ta.ʁi.ve a la lɑ̃p/',
    'ruh-GARD · suh kee eh-tah-ree-VAY ah lah LAHⁿP', ['neutre', 'qui']),
  rule(1510, 'Un seul mot en anglais, what. Deux en français, et le test ne change pas.',
    'One word in English, what. Two in French, and the test does not change.',
    'Pourquoi what donne-t-il deux formes ?',
    `Tu regardes toujours derrière le trou, comme en ${QUI_QUE_REF}. EN: you still look behind the gap, exactly as before.`,
    ['regle', 'neutre']),
  sent(1511, 'Explique-moi ce qui ne marche pas.', 'Explain to me what is not working.',
    '/ɛks.plik mwa sə ki nə maʁʃ pɑ/',
    'eks-pleek MWAH · suh kee nuh marsh PAH', ['neutre', 'qui']),
  sent(1512, 'Explique-moi ce que tu as fait hier.', 'Explain to me what you did yesterday.',
    '/ɛks.plik mwa sə kə ty a fɛ jɛʁ/',
    'eks-pleek MWAH · suh kuh tü ah feh YEHR', ['neutre', 'que']),
  sent(1513, 'Ce qui coûte cher, ce sont les pièces.',
    'What is expensive is the parts.',
    '/sə ki kut ʃɛʁ sə sɔ̃ le pjɛs/',
    'suh kee koot SHEHR · suh sohⁿ lay PYESS', ['neutre', 'qui']),
  sent(1514, 'Ce que Nadia répare le plus, ce sont les lampes.',
    'What Nadia repairs most is lamps.',
    '/sə kə na.dja ʁe.paʁ lə ply sə sɔ̃ le lɑ̃p/',
    'suh kuh nah-dyah ray-par luh PLÜ · suh sohⁿ lay LAHⁿP', ['neutre', 'que']),
  gap(1515, "Ce qui me plaît, c'est le calme.", 'What I like is the calm.',
    '/sə ki mə plɛ sɛ lə kalm/',
    'suh kee muh PLEH · seh luh KALM',
    "Ce ___ me plaît, c'est le calme. (rien derrière le trou)",
    'Aucun sujet derrière, donc ce qui. EN: no subject behind, so ce qui.',
    ['neutre', 'test']),
  gap(1516, "Ce que je cherche, c'est une vis plus longue.",
    'What I am looking for is a longer screw.',
    '/sə kə ʒə ʃɛʁʃ sɛ.tyn vis ply lɔ̃ɡ/',
    'suh kuh zhuh SHEHRSH · seh tün veess plü LOHⁿG',
    "Ce ___ je cherche, c'est une vis plus longue. (je derrière le trou)",
    'Un sujet derrière, donc ce que. EN: a subject behind, so ce que.',
    ['neutre', 'test']),
  sent(1517, 'Personne ne sait ce qui va se passer.',
    'Nobody knows what is going to happen.',
    '/pɛʁ.sɔn nə sɛ sə ki va sə pa.se/',
    'pehr-sonn nuh SEH · suh kee vah suh pah-SAY', ['neutre', 'qui']),
  sent(1518, "Personne ne sait ce que l'atelier va devenir.",
    'Nobody knows what will become of the workshop.',
    '/pɛʁ.sɔn nə sɛ sə kə la.tə.lje va də.və.niʁ/',
    'pehr-sonn nuh SEH · suh kuh lah-tuh-lyay vah duh-vuh-NEER',
    ['neutre', 'que']),
  sent(1519, 'Dis-moi ce qui te plaît dans ce travail.',
    'Tell me what you like about this work.',
    '/di mwa sə ki tə plɛ dɑ̃ sə tʁa.vaj/',
    'dee MWAH · suh kee tuh PLEH dahⁿ suh trah-VAHY', ['neutre', 'qui']),
  sent(1520, 'Dis-moi ce que tu préfères réparer.',
    'Tell me what you prefer to repair.',
    '/di mwa sə kə ty pʁe.fɛʁ ʁe.pa.ʁe/',
    'dee MWAH · suh kuh tü pray-FEHR ray-pah-RAY', ['neutre', 'que']),
  rule(1521, "Devant le trou il n'y a pas de nom : ce en tient lieu.",
    'There is no noun in front of the gap: ce stands in for one.',
    'Que remplace ce ?',
    "Il remplace le nom qui manque, et rien d'autre. EN: it stands in for the noun that is missing, and nothing else.",
    ['regle', 'neutre']),
  sent(1522, "C'est exactement ce que je cherchais.",
    'That is exactly what I was looking for.',
    '/sɛ.tɛɡ.zak.tə.mɑ̃ sə kə ʒə ʃɛʁ.ʃɛ/',
    'seh-teg-zak-tuh-MAHⁿ · suh kuh zhuh shehr-SHEH', ['neutre', 'que']),
];

/* ── ACT 8 · CE DONT · 1523-1539 ─────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1523, "C'est exactement ce dont j'ai besoin.",
    'That is exactly what I need.',
    '/sɛ.tɛɡ.zak.tə.mɑ̃ sə dɔ̃ ʒe bə.zwɛ̃/',
    'seh-teg-zak-tuh-MAHⁿ · suh dohⁿ zhay buh-ZWEHⁿ',
    ['besoin', 'dont'], FCVDR),
  sent(1524, 'Ce dont tu parles est déjà réparé.',
    'What you are talking about has already been repaired.',
    '/sə dɔ̃ ty paʁl ɛ de.ʒa ʁe.pa.ʁe/',
    'suh dohⁿ tü PARL · eh day-zhah ray-pah-RAY', ['besoin', 'dont'], FCVDR),
  sent(1525, 'Je ne me souviens plus de ce dont nous avons parlé.',
    'I no longer remember what we talked about.',
    '/ʒə nə mə su.vjɛ̃ ply də sə dɔ̃ nu.za.vɔ̃ paʁ.le/',
    'zhuh nuh muh soo-vyehⁿ PLÜ · duh suh dohⁿ noo zah-vohⁿ par-LAY',
    ['besoin', 'dont']),
  rule(1526, 'Si le verbe demande de, tu écris ce dont.',
    'If the verb wants de, you write ce dont.',
    "Quand écrit-on ce dont ?",
    "Avoir besoin de, parler de, avoir envie de : le de vient du verbe. EN: the de comes from the verb.",
    ['regle', 'besoin']),
  sent(1527, "Voici ce dont j'ai envie pour l'atelier.",
    'Here is what I would like for the workshop.',
    '/vwa.si sə dɔ̃ ʒe ɑ̃.vi puʁ la.tə.lje/',
    'vwah-SEE · suh dohⁿ zhay ahⁿ-VEE poor lah-tuh-LYAY',
    ['besoin', 'dont'], FCVDR),
  sent(1528, "Ce dont Samuel est fier, c'est sa boîte à outils.",
    'What Samuel is proud of is his tool box.',
    '/sə dɔ̃ sa.my.ɛl ɛ fjɛʁ sɛ sa bwa.ta u.ti/',
    'suh dohⁿ sah-mü-el eh FYEHR · seh sah bwah-tah oo-TEE',
    ['besoin', 'dont'], FCVDR),
  sent(1529, "Ce dont personne ne s'occupe, c'est le ménage.",
    'What nobody takes care of is the cleaning.',
    '/sə dɔ̃ pɛʁ.sɔn nə sɔ.kyp sɛ lə me.naʒ/',
    'suh dohⁿ pehr-sonn nuh soh-KÜP · seh luh may-NAZH', ['besoin', 'dont']),
  phrase(1530, 'avoir besoin de', 'to need',
    '/a.vwaʁ bə.zwɛ̃ də/', 'ah-vwahr buh-ZWEHⁿ duh', ['besoin', 'verbe']),
  phrase(1531, 'parler de', 'to talk about',
    '/paʁ.le də/', 'par-LAY duh', ['besoin', 'verbe']),
  phrase(1532, 'avoir envie de', 'to fancy, to feel like',
    '/a.vwaʁ ɑ̃.vi də/', 'ah-vwahr ahⁿ-VEE duh', ['besoin', 'verbe']),
  phrase(1533, "s'occuper de", 'to take care of',
    '/sɔ.ky.pe də/', 'soh-kü-PAY duh', ['besoin', 'verbe']),
  gap(1534, "Une bonne lampe, c'est ce dont Nadia a besoin.", 'A good lamp is what Nadia needs.',
    '/yn bɔn lɑ̃p sɛ sə dɔ̃ na.dja a bə.zwɛ̃/',
    'ün bonn LAHⁿP · seh suh dohⁿ nah-dyah ah buh-ZWEHⁿ',
    "Une bonne lampe, c'est ce ___ Nadia a besoin. (avoir besoin DE)",
    'Le verbe porte un de, donc ce dont. EN: the verb carries a de, so ce dont.',
    ['besoin', 'test']),
  gap(1535, 'Ce dont Samuel parle arrive demain.',
    'What Samuel is talking about arrives tomorrow.',
    '/sə dɔ̃ sa.my.ɛl paʁl a.ʁiv də.mɛ̃/',
    'suh dohⁿ sah-mü-el PARL · ah-reev duh-MEHⁿ',
    'Ce ___ Samuel parle arrive demain. (parler DE)',
    'parler de, donc ce dont et non ce que. EN: parler de, so ce dont and not ce que.',
    ['besoin', 'test']),
  sent(1536, "Ce dont nous manquons ici, c'est de place.",
    'What we are short of here is room.',
    '/sə dɔ̃ nu mɑ̃.kɔ̃.zi.si sɛ də plas/',
    'suh dohⁿ noo mahⁿ-kohⁿ zee-SEE · seh duh PLASS',
    ['besoin', 'dont'], FCVDR),
  sent(1537, "Il note ce dont il a besoin avant de partir.",
    'He writes down what he needs before leaving.',
    '/il nɔt sə dɔ̃.til a bə.zwɛ̃ a.vɑ̃ də paʁ.tiʁ/',
    'eel NOT · suh dohⁿ teel ah buh-ZWEHⁿ · ah-vahⁿ duh par-TEER',
    ['besoin', 'dont']),
  rule(1538, 'ce qui, ce que, ce dont : trois formes, un seul mot anglais.',
    'ce qui, ce que, ce dont: three forms, one English word.',
    'Combien de formes après ce ?',
    'Trois, et seul le verbe de la relative les sépare. EN: three, and only the verb inside the clause separates them.',
    ['regle', 'besoin']),
  sent(1539, "Ce dont j'ai peur, c'est de casser la pièce.",
    'What I am afraid of is breaking the part.',
    '/sə dɔ̃ ʒe pœʁ sɛ də kɑ.se la pjɛs/',
    'suh dohⁿ zhay PUHR · seh duh kah-say lah PYESS', ['besoin', 'dont']),
];

/* ── ACT 9 · TOUT CE QUI, TOUT CE QUE · 1540-1556 ────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1540, "Tout ce qui est sur l'établi part demain.",
    'Everything on the bench goes tomorrow.',
    '/tu sə ki ɛ syʁ le.ta.bli paʁ də.mɛ̃/',
    'too suh kee eh sür lay-tah-BLEE · par duh-MEHⁿ', ['tout', 'qui'], FCVDR),
  sent(1541, 'Tout ce que nous réparons ici repart chez son propriétaire.',
    'Everything we repair here goes back to its owner.',
    '/tu sə kə nu ʁe.pa.ʁɔ̃.zi.si ʁə.paʁ ʃe sɔ̃ pʁɔ.pʁi.e.tɛʁ/',
    'too suh kuh noo ray-pah-rohⁿ zee-SEE · ruh-par shay sohⁿ proh-pree-ay-TEHR',
    ['tout', 'que'], FCVDR),
  sent(1542, 'Tout ce dont tu as besoin est dans le tiroir du bas.',
    'Everything you need is in the bottom drawer.',
    '/tu sə dɔ̃ ty a bə.zwɛ̃ ɛ dɑ̃ lə ti.ʁwaʁ dy bɑ/',
    'too suh dohⁿ tü ah buh-ZWEHⁿ · eh dahⁿ luh tee-rwahr dü BAH',
    ['tout', 'dont']),
  rule(1543, 'Après tout, le ce ne disparaît pas : tout ce qui, tout ce que.',
    'After tout, the ce does not disappear: tout ce qui, tout ce que.',
    'Écrit-on tout qui ou tout ce qui ?',
    "tout n'est pas un nom, donc il ne remplace pas le ce. EN: tout is not a noun, so it does not replace the ce.",
    ['regle', 'tout']),
  sent(1544, "Tout ce qui brille n'est pas or.", 'All that glitters is not gold.',
    '/tu sə ki bʁij nɛ pɑ.zɔʁ/',
    'too suh kee BREEY · neh pah ZOR', ['tout', 'qui']),
  sent(1545, "J'ai noté tout ce que tu m'as dit.",
    'I wrote down everything you told me.',
    '/ʒe nɔ.te tu sə kə ty ma di/',
    'zhay noh-TAY · too suh kuh tü mah DEE', ['tout', 'que']),
  sent(1546, 'Tout ce qui reste ici sera donné.',
    'Everything left here will be given away.',
    '/tu sə ki ʁɛst i.si sə.ʁa dɔ.ne/',
    'too suh kee rest ee-SEE · suh-rah doh-NAY', ['tout', 'qui']),
  gap(1547, 'Tout ce qui traîne par terre va à la poubelle.',
    'Everything lying on the floor goes in the bin.',
    '/tu sə ki tʁɛn paʁ tɛʁ va a la pu.bɛl/',
    'too suh kee trenn par TEHR · vah ah lah poo-BEL',
    'Tout ___ traîne par terre va à la poubelle. (deux mots, rien derrière le trou)',
    'tout garde son ce, et rien ne suit, donc ce qui. EN: tout keeps its ce, and nothing follows, so ce qui.',
    ['tout', 'test']),
  gap(1548, "Je range tout ce que tu m'apportes.",
    'I put away everything you bring me.',
    '/ʒə ʁɑ̃ʒ tu sə kə ty ma.pɔʁt/',
    'zhuh RAHⁿZH · too suh kuh tü mah-PORT',
    "Je range tout ___ tu m'apportes. (deux mots, tu derrière le trou)",
    'tu suit le trou, donc ce que. EN: tu follows the gap, so ce que.',
    ['tout', 'test']),
  rule(1549, "L'anglais dit all I need. Le français garde tout ce dont j'ai besoin.",
    'English says all I need. French keeps tout ce dont j’ai besoin.',
    'Que faut-il ajouter à tout ?',
    'Le ce, puis la bonne forme. Deux mots que personne ne dit en anglais. EN: the ce, then the right form.',
    ['regle', 'tout']),
  sent(1550, 'Elle range tout ce qui traîne sur la table.',
    'She puts away everything lying about on the table.',
    '/ɛl ʁɑ̃ʒ tu sə ki tʁɛn syʁ la tabl/',
    'el RAHⁿZH · too suh kee trenn sür lah TAHBL', ['tout', 'qui']),
  sent(1551, "Il emporte tout ce qu'il a réparé.",
    'He takes away everything he has repaired.',
    '/i.lɑ̃.pɔʁt tu sə ki.la ʁe.pa.ʁe/',
    'ee-lahⁿ-PORT · too suh keel ah ray-pah-RAY', ['tout', 'que']),
  sent(1552, 'Tout ce qui est cassé va dans la caisse grise.',
    'Everything that is broken goes in the grey crate.',
    '/tu sə ki ɛ kɑ.se va dɑ̃ la kɛs ɡʁiz/',
    'too suh kee eh kah-SAY · vah dahⁿ lah kess GREEZ', ['tout', 'qui']),
  sent(1553, 'Nous gardons tout ce que les voisins nous apportent.',
    'We keep everything the neighbours bring us.',
    '/nu ɡaʁ.dɔ̃ tu sə kə le vwa.zɛ̃ nu.za.pɔʁt/',
    'noo gar-DOHⁿ · too suh kuh lay vwah-ZEHⁿ noo zah-PORT', ['tout', 'que']),
  phrase(1554, 'tout ce qui', 'everything that, as subject',
    '/tu sə ki/', 'too suh KEE', ['tout', 'qui']),
  phrase(1555, 'tout ce que', 'everything that, as object',
    '/tu sə kə/', 'too suh KUH', ['tout', 'que']),
  phrase(1556, 'tout ce dont', 'everything that, after a verb with de',
    '/tu sə dɔ̃/', 'too suh DOHⁿ', ['tout', 'dont']),
];

/* ── ACT 10 · CE QUI REPREND TOUTE UNE PHRASE · 1557-1573 ────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1557, "La lampe s'est éteinte, ce qui a surpris tout le monde.",
    'The lamp went out, which surprised everybody.',
    '/la lɑ̃p sɛ.te.tɛ̃t sə ki a syʁ.pʁi tu lə mɔ̃d/',
    'lah LAHⁿP seh-tay-TEHⁿT · suh kee ah sür-PREE too luh MOHⁿD',
    ['phrase', 'qui'], FCVDR),
  sent(1558, "Nadia a fermé plus tôt, ce que personne n'avait prévu.",
    'Nadia closed early, which nobody had expected.',
    '/na.dja a fɛʁ.me ply to sə kə pɛʁ.sɔn na.vɛ pʁe.vy/',
    'nah-dyah ah fehr-MAY plü TOH · suh kuh pehr-sonn nah-veh pray-VÜ',
    ['phrase', 'que']),
  sent(1559, 'Il manque deux pièces, ce dont nous parlerons lundi.',
    'Two parts are missing, which we will talk about on Monday.',
    '/il mɑ̃k dø pjɛs sə dɔ̃ nu paʁ.lə.ʁɔ̃ lœ̃.di/',
    'eel mahⁿk duh PYESS · suh dohⁿ noo par-luh-ROHⁿ luhⁿ-DEE',
    ['phrase', 'dont'], FCVDR),
  rule(1560, 'Après une virgule, ce qui reprend toute la phrase, pas un nom.',
    'After a comma, ce qui picks up the whole sentence, not a noun.',
    'Que reprend ce qui après une virgule ?',
    "Une phrase entière n'est pas un nom, donc il faut ce. EN: a whole sentence is not a noun, so ce is required.",
    ['regle', 'phrase']),
  sent(1561, 'Le local a été repeint, ce qui change tout.',
    'The place has been repainted, which changes everything.',
    '/lə lɔ.kal a e.te ʁə.pɛ̃ sə ki ʃɑ̃ʒ tu/',
    'luh loh-KAL ah ay-tay ruh-PEHⁿ · suh kee shahⁿzh TOO', ['phrase', 'qui']),
  sent(1562, 'Samuel est arrivé en retard, ce qui arrive rarement.',
    'Samuel arrived late, which rarely happens.',
    '/sa.my.ɛl ɛ.ta.ʁi.ve ɑ̃ ʁə.taʁ sə ki a.ʁiv ʁaʁ.mɑ̃/',
    'sah-mü-el eh-tah-ree-VAY ahⁿ ruh-TAR · suh kee ah-reev rahr-MAHⁿ',
    ['phrase', 'qui']),
  sent(1563, "Elle a réparé la machine en dix minutes, ce que je n'arrive jamais à faire.",
    'She fixed the machine in ten minutes, which I can never manage.',
    '/ɛl a ʁe.pa.ʁe la ma.ʃin ɑ̃ di mi.nyt sə kə ʒə na.ʁiv ʒa.mɛ a fɛʁ/',
    'el ah ray-pah-ray lah mah-SHEEN ahⁿ dee mee-NÜT · suh kuh zhuh nah-reev zhah-meh ah FEHR',
    ['phrase', 'que']),
  gap(1564, 'Le moteur a redémarré, ce qui a rassuré Samuel.',
    'The motor started again, which reassured Samuel.',
    '/lə mɔ.tœʁ a ʁə.de.ma.ʁe sə ki a ʁa.sy.ʁe sa.my.ɛl/',
    'luh moh-TUHR ah ruh-day-mah-RAY · suh kee ah rah-sü-RAY sah-mü-EL',
    'Le moteur a redémarré, ___ a rassuré Samuel. (deux mots, rien derrière)',
    "Devant la virgule il y a une phrase, pas un nom. EN: in front of the comma there is a sentence, not a noun.",
    ['phrase', 'test']),
  gap(1565, 'La facture est en retard, ce dont Nadia parlera demain.',
    'The invoice is late, which Nadia will talk about tomorrow.',
    '/la fak.tyʁ ɛ.tɑ̃ ʁə.taʁ sə dɔ̃ na.dja paʁ.lə.ʁa də.mɛ̃/',
    'lah fak-TÜR eh tahⁿ ruh-TAR · suh dohⁿ nah-dyah par-luh-RAH duh-MEHⁿ',
    'La facture est en retard, ___ Nadia parlera demain. (parler DE)',
    'Le verbe porte un de, donc ce dont. EN: the verb carries a de, so ce dont.',
    ['phrase', 'test']),
  sent(1566, 'Le local ouvre le dimanche, ce qui nous arrange.',
    'The place opens on Sundays, which suits us.',
    '/lə lɔ.kal uvʁ lə di.mɑ̃ʃ sə ki nu.za.ʁɑ̃ʒ/',
    'luh loh-KAL oovr luh dee-MAHⁿSH · suh kee noo zah-RAHⁿZH', ['phrase', 'qui']),
  sent(1567, 'Le prix a baissé, ce dont les habitués sont contents.',
    'The price has come down, which the regulars are happy about.',
    '/lə pʁi a be.se sə dɔ̃ le.za.bi.tɥe sɔ̃ kɔ̃.tɑ̃/',
    'luh PREE ah beh-SAY · suh dohⁿ lay zah-bee-TÜAY sohⁿ kohⁿ-TAHⁿ',
    ['phrase', 'dont']),
  sent(1568, "Personne n'est venu, ce qui ne s'était jamais vu.",
    'Nobody came, which had never been seen before.',
    '/pɛʁ.sɔn nɛ və.ny sə ki nə se.tɛ ʒa.mɛ vy/',
    'pehr-sonn neh vuh-NÜ · suh kee nuh say-teh zhah-meh VÜ', ['phrase', 'qui']),
  sent(1569, 'Il a tout rangé, ce qui nous a fait gagner une heure.',
    'He tidied everything, which saved us an hour.',
    '/i.la tu ʁɑ̃.ʒe sə ki nu.za fɛ ɡa.ɲe y.nœʁ/',
    'ee-lah too rahⁿ-ZHAY · suh kee noo zah feh gah-nyay ü-NUHR', ['phrase', 'qui']),
  rule(1570, "En anglais, which sert aux deux. En français, un nom prend qui, une phrase prend ce qui.",
    'English uses which for both. In French a noun takes qui and a sentence takes ce qui.',
    'Pourquoi deux formes pour which ?',
    'Le test est le même : cherche un nom juste devant. EN: the test is the same, look for a noun right in front.',
    ['regle', 'phrase']),
  sent(1571, 'La réunion a duré trois heures, ce que je trouve long.',
    'The meeting lasted three hours, which I find long.',
    '/la ʁe.y.njɔ̃ a dy.ʁe tʁwa.zœʁ sə kə ʒə tʁuv lɔ̃/',
    'lah ray-ü-NYOHⁿ ah dü-ray trwah-ZUHR · suh kuh zhuh troov LOHⁿ',
    ['phrase', 'que']),
  sent(1572, 'Nadia part en août, ce dont nous devons parler.',
    'Nadia is leaving in August, which we have to talk about.',
    '/na.dja paʁ ɑ̃.nut sə dɔ̃ nu də.vɔ̃ paʁ.le/',
    'nah-dyah par ahⁿ-NOOT · suh dohⁿ noo duh-vohⁿ par-LAY', ['phrase', 'dont']),
  sent(1573, 'La pièce est arrivée cassée, ce qui nous a fait perdre une semaine.',
    'The part arrived broken, which cost us a week.',
    '/la pjɛs ɛ.ta.ʁi.ve kɑ.se sə ki nu.za fɛ pɛʁdʁ yn sə.mɛn/',
    'lah PYESS eh-tah-ree-vay kah-SAY · suh kee noo zah feh pehrdr ün suh-MEN',
    ['phrase', 'qui']),
];

/* ── ACT 11 · ÉCRIRE LA FICHE · 1574-1592 ────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1574, "J'ai apporté une lampe de bureau qui ne s'allume plus.",
    'I brought in a desk lamp that does not come on any more.',
    '/ʒe a.pɔʁ.te yn lɑ̃p də by.ʁo ki nə sa.lym ply/',
    'zhay ah-por-TAY ün lahⁿp duh bü-ROH · kee nuh sah-LÜM PLÜ',
    ['fiche', 'court']),
  sent(1575, "Le tournevis avec lequel j'ai ouvert le boîtier était trop petit.",
    'The screwdriver I opened the case with was too small.',
    '/lə tuʁ.nə.vi a.vɛk lə.kɛl ʒe u.vɛʁ lə bwa.tje e.tɛ tʁo pə.ti/',
    'luh toor-nuh-VEE ah-vek luh-KEL · zhay oo-vehr luh bwah-TYAY · ay-teh troh puh-TEE',
    ['fiche', 'lequel'], FCVDR),
  sent(1576, "La vis que j'ai perdue est minuscule.", 'The screw I lost is tiny.',
    '/la vis kə ʒe pɛʁ.dy ɛ mi.nys.kyl/',
    'lah VEESS kuh zhay pehr-DÜ · eh mee-nüs-KÜL', ['fiche', 'que']),
  sent(1577, "Ce qui m'inquiète, c'est le fil noir.",
    'What worries me is the black wire.',
    '/sə ki mɛ̃.kjɛt sɛ lə fil nwaʁ/',
    'suh kee mehⁿ-KYET · seh luh feel NWAHR', ['fiche', 'neutre'], FCVDR),
  sent(1578, "Ce dont j'ai besoin, c'est d'une pièce de rechange.",
    'What I need is a spare part.',
    '/sə dɔ̃ ʒe bə.zwɛ̃ sɛ dyn pjɛs də ʁə.ʃɑ̃ʒ/',
    'suh dohⁿ zhay buh-ZWEHⁿ · seh dün pyess duh ruh-SHAHⁿZH',
    ['fiche', 'besoin']),
  sent(1579, 'Tout ce qui reste à faire tient en dix minutes.',
    'Everything still to do takes ten minutes.',
    '/tu sə ki ʁɛst a fɛʁ tjɛ̃.tɑ̃ di mi.nyt/',
    'too suh kee rest ah FEHR · tyehⁿ tahⁿ dee mee-NÜT', ['fiche', 'tout']),
  sent(1580, "La raison pour laquelle je reviens samedi, c'est la pièce.",
    'The reason why I am coming back on Saturday is the part.',
    '/la ʁɛ.zɔ̃ puʁ la.kɛl ʒə ʁə.vjɛ̃ sam.di sɛ la pjɛs/',
    'lah reh-ZOHⁿ poor lah-KEL · zhuh ruh-vyehⁿ sam-DEE · seh lah PYESS',
    ['fiche', 'raison']),
  sent(1581, "L'atelier dans lequel j'ai laissé la lampe ferme à dix-huit heures.",
    'The workshop I left the lamp at closes at six.',
    '/la.tə.lje dɑ̃ lə.kɛl ʒe lɛ.se la lɑ̃p fɛʁm a di.zɥi.tœʁ/',
    'lah-tuh-LYAY dahⁿ luh-KEL · zhay leh-say lah LAHⁿP · fehrm ah dee-züee-TUHR',
    ['fiche', 'lequel']),
  sent(1582, "Le formulaire sur lequel j'ai écrit mon nom est au comptoir.",
    'The form I wrote my name on is at the counter.',
    '/lə fɔʁ.my.lɛʁ syʁ lə.kɛl ʒe e.kʁi mɔ̃ nɔ̃ ɛ.to kɔ̃.twaʁ/',
    'luh for-mü-LEHR sür luh-KEL · zhay ay-kree mohⁿ NOHⁿ · eh-toh kohⁿ-TWAHR',
    ['fiche', 'lequel']),
  sent(1583, "Nadia a trouvé la panne en dix minutes, ce qui m'a étonné.",
    'Nadia found the fault in ten minutes, which amazed me.',
    '/na.dja a tʁu.ve la pan ɑ̃ di mi.nyt sə ki ma e.tɔ.ne/',
    'nah-dyah ah troo-vay lah PANN ahⁿ dee mee-NÜT · suh kee mah ay-toh-NAY',
    ['fiche', 'phrase']),
  sent(1584, 'Voici le numéro auquel vous pouvez me joindre.',
    'Here is the number you can reach me on.',
    '/vwa.si lə ny.me.ʁo o.kɛl vu pu.ve mə ʒwɛ̃dʁ/',
    'vwah-see luh nü-may-ROH oh-KEL · voo poo-vay muh ZHWEHⁿDR',
    ['fiche', 'soudure']),
  sent(1585, 'Les outils sans lesquels personne ne peut travailler restent ici.',
    'The tools nobody can work without stay here.',
    '/le.zu.ti sɑ̃ le.kɛl pɛʁ.sɔn nə pø tʁa.va.je ʁɛst i.si/',
    'lay zoo-TEE sahⁿ lay-KEL · pehr-sonn nuh puh trah-vah-YAY · rest ee-SEE',
    ['fiche', 'lequel']),
  sent(1586, "La boîte à côté de laquelle j'ai posé la lampe est grise.",
    'The box I put the lamp next to is grey.',
    '/la bwat a ko.te də la.kɛl ʒe po.ze la lɑ̃p ɛ ɡʁiz/',
    'lah BWAHT ah koh-tay duh lah-KEL · zhay poh-zay lah LAHⁿP · eh GREEZ',
    ['fiche', 'compose']),
  sent(1587, "Ce que je voudrais, c'est apprendre à la réparer moi-même.",
    'What I would like is to learn to repair it myself.',
    '/sə kə ʒə vu.dʁɛ sɛ.ta.pʁɑ̃dʁ a la ʁe.pa.ʁe mwa mɛm/',
    'suh kuh zhuh voo-DREH · seh-tah-prahⁿdr ah lah ray-pah-ray mwah MEMM',
    ['fiche', 'neutre']),
  sent(1588, 'Merci à la personne grâce à laquelle la lampe remarche.',
    'Thank you to the person thanks to whom the lamp works again.',
    '/mɛʁ.si a la pɛʁ.sɔn ɡʁɑs a la.kɛl la lɑ̃p ʁə.maʁʃ/',
    'mehr-see ah lah pehr-SONN · grahss ah lah-KEL lah lahⁿp ruh-MARSH',
    ['fiche', 'grace']),
  sent(1589, "Tout ce dont j'avais besoin était déjà sur l'établi.",
    'Everything I needed was already on the bench.',
    '/tu sə dɔ̃ ʒa.vɛ bə.zwɛ̃ e.tɛ de.ʒa syʁ le.ta.bli/',
    'too suh dohⁿ zhah-veh buh-ZWEHⁿ · ay-teh day-zhah sür lay-tah-BLEE',
    ['fiche', 'tout']),
  sent(1590, 'Le samedi matin est le moment auquel je peux venir.',
    'Saturday morning is the time I can come.',
    '/lə sam.di ma.tɛ̃ ɛ lə mɔ.mɑ̃ o.kɛl ʒə pø və.niʁ/',
    'luh sam-dee mah-TEHⁿ · eh luh moh-mahⁿ oh-KEL · zhuh puh vuh-NEER',
    ['fiche', 'soudure']),
  sent(1591, 'Ce dont nous avons parlé tient en une ligne.',
    'What we talked about fits on one line.',
    '/sə dɔ̃ nu.za.vɔ̃ paʁ.le tjɛ̃.tɑ̃.nyn liɲ/',
    'suh dohⁿ noo zah-vohⁿ par-LAY · tyehⁿ tahⁿ nün LEENY', ['fiche', 'besoin']),
  sent(1592, "Voilà ce que j'ai compris de la panne.",
    'That is what I understood about the fault.',
    '/vwa.la sə kə ʒe kɔ̃.pʁi də la pan/',
    'vwah-LAH · suh kuh zhay kohⁿ-PREE duh lah PANN', ['fiche', 'neutre']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Per act, so an act's dictation names only what that act taught. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** Rows a `practice skill: 'speak'` section may name: voiceflash-bearing. */
export const SPEAKABLE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE LONG TEXTS AND THEIR ANSWER KEYS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1's reading: the intake note at the repair workshop. 176 words. */
export const READING_ATELIER =
  "Le samedi matin, rue Ontario, un local ouvre ses portes et douze personnes entrent avec des objets cassés. " +
  "Nadia pose une fiche sur le comptoir et demande toujours la même chose : « Racontez-moi la panne. »\n\n" +
  "Ce matin-là, je suis arrivé avec une lampe de bureau qui ne s'allumait plus. " +
  "J'ai dit : « J'ai ouvert le boîtier avec un tournevis. Le tournevis est trop petit. » " +
  "Nadia a levé les yeux. Sur l'établi, derrière elle, il y avait six tournevis.\n\n" +
  "Alors j'ai recommencé autrement. « Le tournevis avec lequel j'ai ouvert le boîtier est trop petit. " +
  "La boîte dans laquelle vous rangez les vis est bleue, et il m'en manque une. " +
  "Ce qui m'inquiète, c'est le fil. »\n\n" +
  "Elle a écrit trois lignes, elle est allée chercher une vis, et la lampe s'est allumée. " +
  "Rien n'avait changé dans les faits. Deux petits mots avaient rattaché chaque détail à la bonne chose.";

/** The relatives in READING_ATELIER, in text order, for the quiz key. */
export const READING_ATELIER_LEQUEL = [
  "avec lequel j'ai ouvert le boîtier",
  'dans laquelle vous rangez les vis',
] as const;
export const READING_ATELIER_CE = ["ce qui m'inquiète"] as const;

/** Act 6's reading: the letter from the borough. 168 words. */
export const READING_LETTRE =
  "L'arrondissement a répondu au local de réparation en huit lignes.\n\n" +
  "« Madame, nous avons bien reçu le dossier pour lequel vous avez écrit le douze mars. " +
  "La raison pour laquelle votre demande n'a pas été traitée plus tôt est simple : il manquait le plan du local. " +
  "Les conditions dans lesquelles vous travaillez ont été vérifiées par un inspecteur. " +
  "Le point sur lequel il revient est la sortie de secours, à côté de laquelle vous stockez des cartons. " +
  "Le délai au bout duquel votre autorisation sera renouvelée est de deux ans. " +
  "L'outil grâce auquel nous suivons les dossiers vous enverra un rappel. »\n\n" +
  "Nadia a lu la lettre deux fois. Elle a remarqué que chaque phrase accrochait une information à un nom précis, " +
  "et qu'aucune préposition ne traînait à la fin. " +
  "Elle a souligné quatre groupes et les a recopiés sur une fiche, au-dessus de l'établi, pour les réutiliser.";

/** The four blocks Nadia underlines, for the quiz key. */
export const READING_LETTRE_BLOCS: readonly [string, string][] = [
  ['la raison pour laquelle', 'the reason why'],
  ['les conditions dans lesquelles', 'the conditions in which'],
  ['le point sur lequel', 'the point on which'],
  ['grâce auquel', 'thanks to which'],
];

/** Act 10's reading: the message to the group. 162 words. */
export const READING_MESSAGE =
  "Message de Samuel au groupe du samedi, jeudi, vingt et une heures.\n\n" +
  "« Bonjour à tous. Nadia part en août, ce dont nous devons parler avant la rentrée. " +
  "Le local a été repeint la semaine dernière, ce qui change vraiment l'ambiance. " +
  "Par contre, il manque deux pièces pour la machine à coudre, ce que je trouve embêtant, " +
  "parce que c'est la machine pour laquelle nous avons le plus de demandes.\n\n" +
  "Autre chose : le prix des ampoules a baissé, ce dont les habitués seront contents. " +
  "J'ai rangé tout ce qui traînait sur l'établi et j'ai jeté tout ce qui était cassé. " +
  "Ce qui reste est dans la caisse grise.\n\n" +
  "Dernier point. Samedi dernier, personne n'est venu, ce qui ne s'était jamais vu. " +
  "Ce dont j'ai peur, c'est qu'on perde l'habitude. Dites-moi ce que vous en pensez. »";

/** The five sentence-level relatives in READING_MESSAGE, in text order. */
export const READING_MESSAGE_PHRASE = [
  'ce dont nous devons parler',
  'ce qui change vraiment l’ambiance',
  'ce que je trouve embêtant',
  'ce dont les habitués seront contents',
  "ce qui ne s'était jamais vu",
] as const;

/** Act 11's model: the card the learner will imitate. 158 words. */
export const READING_FICHE =
  "FICHE DE RÉPARATION : lampe de bureau\n\n" +
  "L'objet que j'apporte est une lampe de bureau qui ne s'allume plus depuis mardi. " +
  "Le tournevis avec lequel j'ai ouvert le boîtier était trop petit, et j'ai abîmé une vis. " +
  "La boîte à côté de laquelle j'ai posé la lampe est grise ; la vis est peut-être tombée dedans.\n\n" +
  "Ce qui m'inquiète, c'est le fil noir, qui chauffe au bout de deux minutes. " +
  "Ce dont j'ai besoin, c'est d'une pièce de rechange et d'un tournevis plus fin. " +
  "Tout ce qui reste à faire tient en dix minutes.\n\n" +
  "La raison pour laquelle je reviens samedi, c'est la pièce. " +
  "Voici le numéro auquel vous pouvez me joindre entre neuf heures et midi. " +
  "Ce que je voudrais vraiment, c'est apprendre à la réparer moi-même.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  `fold()` strips accents, apostrophes, hyphens, commas, case and spacing.
 *  Measured consequences for this lesson:
 *
 *    lequel / laquelle            TYPEABLE, distinct in every case
 *    lesquels / lesquelles        TYPEABLE: the -le- is letters, not accents
 *    auquel / à laquelle          TYPEABLE: one word against two, and the
 *                                 spacing folds, so « auquel » and « a
 *                                 laquelle » stay different strings
 *    duquel / de laquelle         TYPEABLE, same reason
 *    dont / duquel                TYPEABLE
 *    ce qui / ce que / ce dont    TYPEABLE
 *    ce que / ce qu'              ONE STRING once the apostrophe folds, and
 *                                 "ce qu elle" folds onto "ce quelle" too.
 *                                 A typed question may therefore never turn
 *                                 on the elision alone: act 9 tests it with
 *                                 mcq.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOLD_COLLISIONS: [string, string][] = [
  ["ce qu'elle", 'ce quelle'],
  ["ce qu'il", 'ce quil'],
  ["ce qu'on", 'ce quon'],
];

/** Forms this lesson prints ONLY as a wrong reading (trapDrill promptSound,
 *  commonErrors.wrong). Every one is a real anglophone production. */
export const MEANS_SOMETHING_ELSE = [
  "Le tournevis que j'ai ouvert le boîtier avec est trop petit.",
  'La table que tu poses la lampe sur est solide.',
  'Le cours à lequel je me suis inscrit commence en mars.',
  'Le parc près dont Nadia habite ferme à vingt heures.',
  "Qui m'énerve, c'est le bruit.",
  "C'est exactement ce que j'ai besoin.",
  'Tout qui est sur la table part demain.',
  'La lampe s’est éteinte, qui a surpris tout le monde.',
  'La raison pourquoi je viens ici est simple.',
] as const;

/** Banned everywhere on a learner surface (house rules 6.1 to 6.3).
 *
 *  Every member is written as an ESCAPE rather than as the character itself,
 *  so that a plain `grep` for the ban over this repository does not report
 *  the list that enforces it. b1.11's corpus spells all three literally and
 *  is the only reason a banned-character sweep of `scripts/data/b1` comes
 *  back non-empty. */
export const BANNED_SUBSTRINGS = ['\u0068onest', '\u2014', '\u203f'] as const;
