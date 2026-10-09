// c2.06.l1 « La médiation linguistique » — the authored corpus, the identity
// block and the citation constants. DRAFT, second lesson of C2 wave 2. To
// RICH-LESSON-STANDARD.md and the B1-BUILD-PLAYBOOK.md house rules, with the
// C2 rules of C2-BUILD-PLAN.md ("What is different at C2") and the c2.06
// brief in C2-BUILD-LOG.md ("Wave 2 author briefs"). Structural model:
// c2.01 (`./precision-nuance-corpus.ts`, same shape W).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// A single READ-ONLY probe was run while authoring this file
// (`scratch/_c206-probe.mts`, BEGIN TRANSACTION READ ONLY, no SET, never
// committed): it confirmed the theme row (langue-soignee, a2-c2, sub_themes
// already carrying « la médiation linguistique » last) and that block
// 2400-2599 holds zero rows at any level (highest claimed row in the theme
// is fr.c1.langue-soignee.2338, inside c1.22's own 2200-2399 block). No other
// Postgres access was made.
//
// STABLE EXPORTS: REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE REAL CEFR C2 "MEDIATION" DESCRIPTOR: reformulating a specialist or
//   technical French text for a named DIFFERENT AUDIENCE (a child, a
//   layperson, a non-specialist colleague), preserving the meaning while
//   changing the register and the complexity. Nothing else in the app
//   teaches this; it is a continuation of the reformulation thread « la
//   leçon 22 du C1 » opened (c1.22, translating complex ideas, language to
//   language), now aimed at an AUDIENCE change within French rather than a
//   language change.
//
//     act 1   le même texte, deux lecteurs : the problem named, through a
//             real legal clause nobody but a specialist can read
//     act 2   trois leviers pour médier : register, sentence length, and
//             what happens to the technical term (keep+explain, replace,
//             generalise) — named across three domains (legal, medical,
//             scientific)
//     act 3   construire la reformulation : controlled practice applying one
//             lever at a time, domain by domain
//     act 4   garder le sens, pas la forme : choosing the reformulation that
//             keeps the MEANING for the named audience, among plausible but
//             flawed options (loses the actionable fact, still jargon,
//             condescending, invents a claim the source never made)
//     act 5   le piège de la fausse simplification : the central C2 trap,
//             stepped — simplified vocabulary with the original's complex
//             sentence kept whole, or short sentences with the jargon left
//             bare, neither one real mediation
//     act 6   ce qu'on ne touche jamais : fidelity to the source — no
//             omission of the actionable fact, no invented certainty, no
//             condescension
//     act 7   avant ta médiation : guided rehearsal across all three named
//             audiences, building the plan the task will use
//     act 8   ta médiation : the graded task, a full reformulation of a new
//             technical passage for a named audience
//
//   NOT OWNED, CITED ONLY (published, v88, C1 CLOSED):
//     - translating complex ideas by reformulation, LANGUAGE TO LANGUAGE
//       (English to French) is c1.22's (« la leçon 22 du C1 »); act 1 cites
//       its reframe once and never re-teaches cross-language translation.
//       This lesson stays inside French throughout: the "translation" is
//       always register and complexity, never English.
//     - c1.22's own act 10, « changer de public » (one English sentence,
//       three French audiences), is the closest existing territory; this
//       lesson goes past it into a FULL paragraph, a named stepped trap for
//       false simplification, and a graded task, none of which c1.22 asked.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `langue-soignee` (domain `fondations`) ranges a2-c2 in Postgres
//   (widened 2026-10-09, read back in the probe above). c1.05 holds
//   2000-2199, c1.22 holds 2200-2399, both published, neither touched here.
//   This lesson owns block 2400-2599 AND NOTHING ELSE, confirmed empty by
//   the read-only probe.
//
//   USED: .2400-.2466 across eight act blocks (§H below); .2467-.2599 left
//   free inside the claimed block for the pre-review pass.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row from c1.22 is reused by id: it is published (v88) and resolves
//   through Postgres and the content packs, not through the local
//   `seed.json` cut this draft can read without a database session (beyond
//   the one read-only probe above, which touched only `content_themes` and
//   `content_items.id`, never a row's text). c1.22's reframe is imported by
//   name from its own corpus file and quoted verbatim; its trail position is
//   read straight out of `seed.json`, where all 24 C1 units carry a real
//   `seq` (v88 publish). Every example sentence in this lesson is newly
//   authored for c2.06.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. SOURCES
// ══════════════════════════════════════════════════════════════════════════
//
//   METHOD: the OQLF's Vitrine linguistique langage-clair guidance (plain
//   French administrative writing: short sentences, common vocabulary,
//   technical terms kept only when immediately explained) is cited here as
//   GENERAL KNOWLEDGE of a well-documented, widely taught method — never
//   quoted verbatim, never attributed a specific fiche.
//
//   TEXTS: every specialist passage and every reformulation in this lesson
//   is ORIGINAL, written for the lesson, per the brief's preferred route
//   ("write an original technical passage yourself, clearly labelled as
//   such, to sidestep any copyright question"). None is a real legal
//   clause, a real medical notice or a real municipal report; none quotes
//   or closely paraphrases an identifiable public document. Every fact
//   inside each passage is deliberately generic and low-stakes: the legal
//   clause states no real statute or article number; the medical notice
//   gives only standard, uncontested generic post-procedure advice (rest,
//   cold compress, elevation, a 38.5 °C fever threshold, all common
//   knowledge, non-diagnostic, non-prescriptive); the scientific passage
//   describes the urban heat island effect, a well-documented, uncontested
//   phenomenon (the term itself, "îlot de chaleur urbain", is the OQLF's
//   own standard French term, GK, also used by « la leçon 22 du C1 » for a
//   different purpose there — translation, not audience mediation).
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED: Léna Brasseur (bénévole, clinique juridique
//   communautaire), M. Castonguay (locataire, client), Mina (sa petite
//   voisine, 8 ans), Dr Amélie Pelletier (médecin de famille), Karim Haddad
//   (urbaniste, nouveau collègue à la ville).
//   ORGANISATIONS, ALL INVENTED: la clinique juridique communautaire, la
//   clinique médicale où travaille la Dr Pelletier, le service d'urbanisme
//   de la ville où travaille Karim.
//   REAL PLACES, AS PLACES ONLY: none named; every scene is generic
//   ("le centre-ville", "la périphérie").
//   LOW-HEAT TOPICS ONLY: a lease clause, a day-surgery discharge notice, a
//   municipal heat-island report, a tree-planting programme. No real legal
//   fact, no diagnosis, no political topic, no living person.
//   QUOTATIONS: none from a real person, statute or text; every quoted
//   passage is invented for this lesson, clearly an original composition.
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous where the situation calls for
//   it (Léna with Dr Pelletier, a formal reformulation addressed to an
//   adult stranger). No em dash. No U+203F tie. Never "honnête" /
//   "honnêtement" / "honest". Typographic ’ throughout. No spaced « ? » or
//   « ! » in a scene or story bubble. French only on the learner surface;
//   English authored behind every `en` field and every trailing « EN: »,
//   never shown by default. Citations by trail position in French words
//   only, never a raw id. No English word leaks into any French-facing
//   string (checked by hand on every row and every section, after c2.01's
//   pre-review caught exactly this).
//
//   SELF-DUPLICATE CHECK: every `fr` string in `ALL_ROWS` was compared
//   against every other (see the dedupe script run after this file and
//   `c2-mediation-lesson.ts` were both written) to rule out the exact fault
//   c2.02's wave-1 dry run found (two identical phrase cards under
//   different ids in the same lesson).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.06',
  seq: 6,
  title: 'Linguistic Mediation',
  sub: 'La médiation linguistique',
  canDo: "Can reformulate a specialist or technical French text (legal, medical, scientific) for a named different audience (a child, a layperson, a non-specialist colleague), preserving its meaning, its actionable facts and its real force while adjusting register, sentence length and the treatment of each technical term (kept and explained, replaced with an image, or generalised), without omitting, inventing or condescending",
  prereqUnitIds: ['c1.22'],
} as const;

export const LESSON_ID = 'c2.06.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'c2' as const;

/** ONE block. c1.05 owns 2000-2199, c1.22 owns 2200-2399, both published,
 *  neither touched here (read-only probe, §A). */
export const ID_RANGES = [[2400, 2599]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. HOW THIS LESSON NAMES ITS NEIGHBOUR
 *
 *  All 24 C1 units are in `seed.json` with a real `seq` (v88 publish,
 *  C1-BUILD-LOG.md), so a C1 citation is read straight from the seed, the
 *  same way c2.01 already does it.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.06: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C122_UNIT = 'c1.22';
export const C122_REF = refFr(C122_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE QUOTATION, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as C122_REFRAME, REFRAME_EN as C122_REFRAME_EN } from '../c1/traduire-idees-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE SAME OBJECT, A DIFFERENT DOOR. Médier, c'est faire passer un même
 *  objet (le sens, le fait qui compte, le risque réel) par une porte d'une
 *  autre taille : plus simple, plus courte, mieux nommée pour qui l'attend
 *  de l'autre côté. L'objet ne rétrécit jamais ; seule la porte change de
 *  taille. La fausse simplification élargit la porte et coupe un morceau de
 *  l'objet pour le faire entrer quand même.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le sens ne rétrécit jamais ; seule la porte par laquelle il passe change de taille.';
export const REFRAME_EN = 'The meaning never shrinks; only the door it passes through changes size.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Simplifier, c’est raccourcir les phrases.',
    why: "False where act 5 has to hold: une phrase coupée en morceaux qui garde chaque terme technique intact n’a rien simplifié pour qui doit la lire sans dictionnaire. Les deux leviers, le registre et la longueur, doivent bouger ensemble.",
  },
  {
    text: 'Pour un enfant, il faut tout rendre plus petit et plus doux.',
    why: "False where act 4 has to hold: une reformulation condescendante perd le respect dû au lecteur sans rien gagner en clarté ; la cliente âgée de l’acte 4 n’a pas besoin d’un ton d’enfant, elle a besoin de mots clairs.",
  },
  {
    text: 'Un mot technique doit toujours disparaître.',
    why: "False where act 2 has to hold: « l’îlot de chaleur urbain » reste le terme exact, et le garder en l’expliquant vaut souvent mieux que l’effacer, surtout pour un collègue déjà compétent en français.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a distractor or a wrong-option card: never released, never
 *  spoken, exactly the convention c2.01 uses for its `SR` constant. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['mediation-linguistique'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 1 ROWS — Le même texte, deux lecteurs (2400-2412)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(2400, "En cas de manquement persistant du locataire à ses obligations, le bailleur peut se prévaloir de la clause résolutoire après signification d’une mise en demeure, à défaut de régularisation dans le délai imparti de trente jours.", 'In the event of persistent failure by the tenant to meet their obligations, the landlord may invoke the termination clause after formal notice is served, should the situation not be remedied within the thirty-day period allowed.', ['specialiste', 'juridique']),
  sent(2401, "Je ne comprends pas un mot de cette lettre, Léna.", 'I do not understand a single word of this letter, Léna.', ['probleme']),
  sent(2402, "Si vous ne respectez pas une règle du bail de façon répétée, le propriétaire peut mettre fin au bail. Il doit d’abord vous envoyer une lettre officielle, puis vous laisser trente jours pour corriger la situation.", 'If you repeatedly fail to follow a rule in the lease, the landlord can end it. He must first send you an official letter, then give you thirty days to fix the problem.', ['reformulation', 'grand-public']),
  sent(2403, "Léna ne change jamais ce que dit la lettre ; elle change seulement la manière de le dire.", 'Léna never changes what the letter says; she only changes the way it says it.', ['regle']),
  sent(2404, "Deux lecteurs, deux portes : le même sens doit passer par les deux sans en perdre un morceau.", 'Two readers, two doors: the same meaning must pass through both without losing a piece.', ['regle']),
  phrase(2405, "la médiation linguistique", 'linguistic mediation', ['metalangage']),
  phrase(2406, 'un public nommé', 'a named audience', ['metalangage']),
  phrase(2407, 'le terme technique', 'the technical term', ['metalangage']),
  sent(2408, "Un médecin qui explique une consigne à un enfant ne change pas la consigne, il change ses mots.", 'A doctor who explains an instruction to a child does not change the instruction, he changes his words.', ['usage', 'medical']),
  sent(2409, "Un rapport municipal écrit pour des spécialistes reste souvent imprononçable pour la plupart des citoyens.", 'A municipal report written for specialists often stays unreadable for most citizens.', ['usage', 'scientifique']),
  sent(2410, "Léna doit réécrire la lettre pour M. Castonguay avant vendredi.", 'Léna has to rewrite the letter for Mr. Castonguay before Friday.', ['scenario']),
  sent(2411, "La cliente d’une clinique juridique n’a pas à connaître le mot savant pour avoir droit à une explication claire.", 'A legal clinic client does not need to know the fancy word to be owed a clear explanation.', ['usage', 'juridique']),
  sent(2412, "Devant un public non spécialiste, le terme technique se garde et s’explique, ou se remplace ; il ne s’impose jamais seul.", 'Facing a non-specialist audience, a technical term is kept and explained, or replaced; it is never imposed on its own.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 2 ROWS — Trois leviers pour médier (2413-2428)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  sent(2413, "Suivant l’intervention, une légère algie résiduelle au site d’incision est attendue pendant quarante-huit heures.", 'Following the procedure, slight residual pain at the incision site is expected for forty-eight hours.', ['specialiste', 'medical']),
  sent(2414, "Après l’opération, il est normal d’avoir un peu de douleur à l’endroit de la coupure pendant deux jours.", 'After the operation, it is normal to have a little pain where the cut was, for two days.', ['reformulation', 'grand-public']),
  phrase(2415, 'le levier du registre', 'the register lever', ['metalangage']),
  sent(2416, "La densification du couvert minéral combinée à l’albédo réduit des surfaces bitumineuses engendre, en période de canicule, une rétention calorifique nocturne significativement supérieure à celle des zones périurbaines végétalisées.", 'The densification of mineral ground cover combined with the reduced albedo of asphalt surfaces produces, during heatwaves, a nighttime heat retention significantly higher than in vegetated suburban areas.', ['specialiste', 'scientifique']),
  sent(2417, "Il y a plus de béton et d’asphalte au centre-ville, et ces surfaces réfléchissent moins bien la lumière du soleil. La chaleur reste donc prisonnière la nuit, bien plus qu’en périphérie, où il y a plus de végétation.", 'There is more concrete and asphalt downtown, and these surfaces reflect sunlight less well. Heat stays trapped at night, far more than on the outskirts, where there is more vegetation.', ['reformulation', 'collegue']),
  phrase(2418, 'le levier de la longueur de phrase', 'the sentence-length lever', ['metalangage']),
  phrase(2419, 'le levier du terme technique', 'the technical-term lever', ['metalangage']),
  sent(2420, "Le bailleur se réserve le droit de se prévaloir de la clause résolutoire.", 'The landlord reserves the right to invoke the termination clause.', ['specialiste', 'juridique']),
  sent(2421, "Si on ne suit pas une règle de la maison qu’on loue, la personne qui la prête peut demander de partir. Mais elle doit d’abord écrire une lettre pour le dire, et laisser du temps pour arranger ça.", 'If you do not follow a rule of the home you rent, the person who lends it can ask you to leave. But they must first write a letter to say so, and leave time to fix things.', ['reformulation', 'enfant']),
  sent(2422, "Ce phénomène porte un nom précis, l’îlot de chaleur urbain ; le garder et l’expliquer vaut souvent mieux que l’effacer.", 'This phenomenon has a precise name, the urban heat island; keeping it and explaining it is often better than erasing it.', ['regle', 'terme-garde']),
  sent(2423, "« Clause résolutoire » devient, pour M. Castonguay, une seule idée simple : la fin possible du bail.", 'For Mr. Castonguay, "clause résolutoire" becomes one simple idea: the lease possibly ending.', ['regle', 'terme-remplace']),
  sent(2424, "Trois leviers, jamais un seul : le registre, la longueur de la phrase, et ce que devient le terme technique.", 'Three levers, never just one: register, sentence length, and what happens to the technical term.', ['regle']),
  sent(2425, "Ce qui ne bouge jamais, c’est l’information elle-même : le délai, le risque, la cause.", 'What never moves is the information itself: the deadline, the risk, the cause.', ['regle']),
  phrase(2426, 'garder et expliquer', 'keep and explain', ['metalangage']),
  phrase(2427, 'remplacer par une image', 'replace with an image', ['metalangage']),
  phrase(2428, 'généraliser le terme', 'generalise the term', ['metalangage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 3 ROWS — Construire la reformulation (2429-2438)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(2429, "L’application d’une compresse froide intermittente et le maintien du membre en position surélevée sont recommandés afin de limiter l’œdème.", 'Intermittent application of a cold compress and keeping the limb elevated are recommended to limit swelling.', ['specialiste', 'medical']),
  sent(2430, "Mettez de la glace de temps en temps et gardez le bras ou la jambe levé ; ça aide à réduire le gonflement.", 'Put ice on it from time to time and keep the arm or leg raised; that helps reduce the swelling.', ['reformulation', 'grand-public']),
  sent(2431, "Mettre de la glace par intermittence sur la zone et garder le membre en position élevée sont des gestes recommandés afin de limiter le gonflement.", 'Putting ice intermittently on the area and keeping the limb in a raised position are recommended actions to limit the swelling.', ['piege-vocabulaire'], SR),
  sent(2432, "À défaut de régularisation dans le délai imparti, le bail prend fin de plein droit.", 'Should the situation not be remedied within the time allowed, the lease ends automatically.', ['specialiste', 'juridique']),
  sent(2433, "Si rien n’est réglé dans le temps donné, le bail se termine automatiquement.", 'If nothing is fixed within the time given, the lease ends automatically.', ['reformulation', 'grand-public']),
  sent(2434, "Le phénomène, communément désigné sous le terme d’îlot de chaleur urbain, s’intensifie lors des épisodes de canicule prolongée.", 'The phenomenon, commonly called the urban heat island, intensifies during prolonged heatwaves.', ['specialiste', 'scientifique']),
  sent(2435, "Ce phénomène, qu’on appelle l’îlot de chaleur urbain, devient plus fort pendant les longues périodes de canicule.", 'This phenomenon, called the urban heat island, becomes stronger during long heatwave periods.', ['reformulation', 'collegue']),
  sent(2436, "Une bonne reformulation se lit d’un souffle ; l’originale se relit souvent deux fois.", 'A good reformulation reads in one breath; the original often needs rereading twice.', ['regle']),
  sent(2437, "Après l’opération, ça peut faire un peu mal à l’endroit où le docteur a coupé, pendant deux jours ; c’est normal.", 'After the operation, it can hurt a little where the doctor cut, for two days; that is normal.', ['reformulation', 'enfant']),
  sent(2438, "Si vous faites de la fièvre au-dessus de 38,5 degrés, appelez la clinique tout de suite.", 'If you run a fever above 38.5 degrees, call the clinic right away.', ['specialiste-info', 'grand-public']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 4 ROWS — Garder le sens, pas la forme (2439-2449)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(2439, "Il fait plus chaud en ville, c’est tout.", 'It is hotter in the city, that is all.', ['piege-omission'], SR),
  sent(2440, "La rétention calorifique nocturne est plus élevée en zone urbanisée en raison de l’albédo réduit.", 'Nighttime heat retention is higher in urbanized zones due to reduced albedo.', ['piege-jargon'], SR),
  sent(2441, "Cette chaleur emprisonnée cause des dégâts irréversibles aux habitants chaque été.", 'This trapped heat causes irreversible damage to residents every summer.', ['piege-invention'], SR),
  sent(2442, "Ne vous inquiétez pas, Monsieur Castonguay, ces histoires de clauses sont bien trop compliquées pour vous ; laissez-moi m’en occuper.", 'Do not worry, Mr. Castonguay, these clause matters are far too complicated for you; let me handle it.', ['piege-condescendance'], SR),
  sent(2443, "Le propriétaire pourrait mettre fin au bail un jour si les règles ne sont pas suivies.", 'The landlord might end the lease someday if the rules are not followed.', ['piege-omission'], SR),
  sent(2444, "Le propriétaire va sûrement vous expulser avant la fin du mois.", 'The landlord will surely evict you before the end of the month.', ['piege-invention'], SR),
  sent(2445, "Perdre le délai, le risque ou la cause n’est pas simplifier : c’est effacer l’information qui sert à agir.", 'Losing the deadline, the risk or the cause is not simplifying: it is erasing the information needed to act.', ['regle']),
  sent(2446, "Expliquer simplement n’est pas parler comme à quelqu’un à qui on ne fait pas confiance.", 'Explaining simply is not talking down to someone as if they cannot be trusted.', ['regle']),
  sent(2447, "La médiation ne prête jamais au texte une certitude, un risque ou une promesse qu’il n’a pas faite lui-même.", 'Mediation never lends the text a certainty, a risk or a promise it never made itself.', ['regle']),
  sent(2448, "Parmi plusieurs reformulations, une seule garde le fait qui sert vraiment à agir.", 'Among several reformulations, only one keeps the fact that is actually needed to act.', ['regle']),
  sent(2449, "Choisir le sens, pas la forme la plus rassurante à écrire.", 'Choose the meaning, not the most reassuring-sounding form to write.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 5 ROWS — Le piège de la fausse simplification (2450-2454)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(2450, "Un texte simplifié dans les mots, mais qui garde une phrase à cinq étages, n’a rien simplifié pour qui doit le lire d’un souffle.", 'A text simplified in its words, but that keeps a five-storey sentence, has simplified nothing for someone who needs to read it in one breath.', ['piege-vocabulaire-explique']),
  sent(2451, "Des phrases courtes qui gardent chaque terme technique intact ne sont que l’original, coupé en morceaux.", 'Short sentences that keep every technical term intact are only the original, cut into pieces.', ['piege-syntaxe-explique']),
  sent(2452, "La vraie médiation touche les deux leviers à la fois, jamais un seul.", 'Real mediation touches both levers at once, never just one.', ['regle']),
  phrase(2453, 'la fausse simplification', 'false simplification', ['metalangage']),
  sent(2454, "Couper une phrase en trois ne sert à rien si chacune garde le même mot savant.", 'Cutting a sentence into three serves no purpose if each one keeps the same fancy word.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 6 ROWS — Ce qu’on ne touche jamais (2455-2457)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(2455, "Le propriétaire pourrait un jour agir si rien ne change.", 'The landlord might act someday if nothing changes.', ['piege-omission-vague'], SR),
  sent(2456, "Garder un terme technique n’est permis que si ce terme est aussitôt expliqué pour ce public précis.", 'Keeping a technical term is only allowed if that term is immediately explained for this specific audience.', ['regle']),
  sent(2457, "Une reformulation fidèle se relit en se demandant : qu’est-ce que j’ai ajouté, qu’est-ce que j’ai perdu.", 'A faithful reformulation is reread while asking: what did I add, what did I lose.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 7 ROWS — Avant ta médiation (2458-2465)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(2458, "Léna, tu peux m’expliquer ce paragraphe du rapport sans tout le jargon municipal.", 'Léna, can you explain this paragraph of the report to me without all the municipal jargon.', ['scenario']),
  sent(2459, "D’abord je repère le terme technique, ensuite je vérifie la longueur de chaque phrase, enfin je choisis les mots que tu utilises déjà.", 'First I spot the technical term, then I check each sentence’s length, finally I choose the words you already use.', ['plan']),
  sent(2460, "Léna, c’est quoi ce papier que mamie a reçu.", 'Léna, what is this paper grandma received.', ['scenario']),
  sent(2461, "C’est une lettre sur l’appartement de mamie ; je vais te la raconter avec des mots simples.", 'It is a letter about grandma’s apartment; I will tell it to you with simple words.', ['scenario']),
  sent(2462, "Un collègue compétent en français peut quand même se perdre dans un jargon de spécialiste.", 'A colleague fluent in French can still get lost in specialist jargon.', ['usage']),
  sent(2463, "Un public âgé mérite une explication claire, jamais une leçon condescendante.", 'An older audience deserves a clear explanation, never a condescending lecture.', ['usage']),
  sent(2464, "Un enfant a droit à l’information essentielle, dite avec des mots de son âge.", 'A child has a right to the essential information, said with words their age understands.', ['usage']),
  sent(2465, "Avant d’écrire pour un public nommé : nomme le public, repère le terme à traiter, mesure la phrase à raccourcir.", 'Before writing for a named audience: name the audience, spot the term to handle, measure the sentence to shorten.', ['plan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 8 ROWS — Ta médiation (2466)
 * ══════════════════════════════════════════════════════════════════════════ */

export const MEDIATION_SOURCE =
  "Le programme de verdissement urbain vise à accroître la canopée arborée dans les secteurs présentant un indice de vulnérabilité thermique élevé, par la plantation d’essences indigènes à fort pouvoir d’évapotranspiration, en priorisant les îlots de chaleur urbains recensés lors du diagnostic cartographique de 2025. La mise en œuvre est subordonnée à l’obtention des autorisations municipales requises et s’échelonnera sur une période de cinq ans.";

export const MEDIATION_SOURCE_EN =
  "The urban greening programme aims to increase tree canopy cover in sectors showing a high heat-vulnerability index, through the planting of native species with strong evapotranspiration capacity, prioritising the urban heat islands identified in the 2025 mapping assessment. Implementation is subject to obtaining the required municipal authorisations and will be phased over a five-year period.";

const ACT8_ROWS: Row[] = [
  sent(2466, "La médiation réussie se lit comme si elle avait toujours été écrite pour ce public.", 'Successful mediation reads as if it had always been written for that audience.', ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from c1.22 in this draft (§B above): every act imports
 *  nothing. Kept as an export so the lesson file’s assembly code is
 *  identical in shape to every other B1+/C1/C2 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** No row here is unreleasable by kind; the distractors (`SR` drills =
 *  {sentence, review}, no flashcard, no voiceflash) are NAMED but never
 *  released: false reformulations a learner must not be quizzed on as if
 *  they were correct French to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
