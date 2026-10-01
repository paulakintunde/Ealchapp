// c1.01.l1 « Faire le point sur sa grammaire »: the authored corpus, the
// imports and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md with the
// WORKSHOP SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (and §1.4), under the
// C1 rules of C1-BUILD-LOG.md (« What is different at C1 »).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later C1 lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   NOTHING NEW IN GRAMMAR. c1.01 is the C1 diagnostic: a guided audit of
//   the B2 grammar, family by family, in which every structure is sorted into
//   three piles (à produire / à reconnaître / mon point faible) and every gap
//   is routed back to the B1 or B2 lesson that owns it, by trail position in
//   words. It owns:
//
//     the C1 frame       what C1 asks of grammar (précision, nuance,
//                        implicite), the three piles, the audit method
//     the self-diagnosis the learning plan as a written genre (three
//                        strengths, three weak structures, one lesson and
//                        one example sentence each): the graded task
//
//   NOT OWNED, CITED BY TRAIL POSITION (never re-taught, rows reused by id):
//     temps et modes   lessons 1 to 7 and 18 in B2 (built), 8 and 9 in B2
//                      (recognition only), passé antérieur (8, 18), ne
//                      explétif (9, 18); lesson 4 in B1 (depuis +
//                      imparfait), lesson 10 in B1 (si + imparfait),
//                      lesson 31 in B1 (après que + indicatif), lesson 34
//                      in B1 (the hearsay conditional)
//     condenser        lessons 10, 12, 13 and 14 in B2 (« ayant fini »
//                      recognised in 12 and 13)
//     relations        lessons 15 to 17, 19 and 21 in B2 (quelque… que and
//                      nonobstant recognised in 16, ne… point in 21); lesson
//                      20 in B1 (ne… guère), lesson 30 in B1 (or), lesson 31
//                      in B1 (grâce à / à cause de)
//     registre         lessons 11, 20, 22 and 23 in B2
//
//   Only published positions are cited (B1 1-39, B2 1-34, v84). No C1 lesson
//   is cited: none is published yet.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB probed 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `discours-dexamen` (« Le discours d'examen », education, c1-c2,
//     exam; row created in C1 Phase 0). Sub-theme « faire le point sur sa
//     grammaire » already set (C1 wave 1 setup), read back 2026-09-30. The
//     legacy rows 1-165 are exposé phrasing (Speak stage 6.5), not grammar:
//     none is reused here.
//
//  2. ID BLOCK: `.1000`-`.1199`, claimed in the C1 ledger. Probed read-only
//     2026-09-30 (BEGIN TRANSACTION READ ONLY … COMMIT): 0 rows at any level.
//     Authored: `.1000`-`.1099`, 100 rows in twelve act blocks, no gaps.
//     Nothing outside the block. The ledger line is the orchestrator's.
//
//  3. REUSED ROWS. B1 (v76) and B2 (v84) are published; every reused id was
//     read from `seedPlusPacks()` (the b1 and b2 packs carry them) on
//     2026-09-30, French copied verbatim through `src()`, and probed as
//     `published` in Postgres the same day (read-only): 86 of 86 found and
//     published. 86 reused rows, 80 B2 and 6 B1: no legacy c1 row is reused.
//     TWINS: three authored rows first matched a published row word for word
//     (« faire le point », « Si j'avais su, je serais venu plus tôt. », « À
//     cause de la pluie, le match a été annulé. »). The first two are now
//     reused by id (fr.b1.affaires.1037, fr.b2.recits-au-passe.1760); the
//     third is DB-only (not in the seed), so .1072 was rewritten. Re-probed:
//     0 twins left, 0 authored ids already in the DB.
//
//  4. RESPELLINGS SPELLED FOR THE NASAL CHECKER. « scène » is SENN,
//     « personne » pehr-SONN, « comédienne » ko-may-DYENN, « proviennent »
//     pro-VYENN, « vingtaine » vehⁿ-tenn, « bonne » bonn, « emmène »
//     ahⁿ-MENN, « poissonnerie » pwa-sonn-REE, « automne » loh-TONN,
//     « traîne » TRENN: the doubled consonant is for the checker, not the ear. No U+203F tie anywhere.
//
//  5. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     does. Every `scenario` uses ’ only and never embeds a corpus row, so no
//     scenario mixes the two (scenario.logic). Some reused B1/B2 rows carry ’
//     (fr.b1.journalisme.1093); they are never placed in a scenario.
//
//  6. REGISTER. Every authored row carries `register` (courant or soutenu).
//     Literary forms (passé simple, subjonctif imparfait, passé antérieur)
//     appear only in reused B2 rows and in the act 5 text, never in an
//     authored row a learner is asked to produce.
//
//  7. FACT CHECK (every factual claim and every quotation, for the
//     pre-review):
//     a. CEFR paraphrase, act 1 text: « Le Cadre européen commun de
//        référence décrit, au niveau C1, une correction grammaticale élevée
//        et constante, où les erreurs sont rares et difficiles à repérer. »
//        Paraphrase (not a quotation) of the CEFR 2001 C1 « grammatical
//        accuracy » descriptor (« Consistently maintains a high degree of
//        grammatical accuracy; errors are rare and difficult to spot »).
//        Check against the CEFR text (C, reference shelf).
//     b. Act 3 text: « le tramway est revenu dans plusieurs villes de France
//        à partir des années 1980 » (Nantes 1985, Grenoble 1987). Check.
//        The city, the year 1962, the 200-million report and the
//        shopkeepers' letter are invented and presented inside an invented
//        weekly column.
//     c. Row .1073: « c'est surtout en dormant que la mémoire se
//        consolide »: sleep-dependent memory consolidation, a mainstream
//        finding stated without a figure (« surtout » added at pre-review:
//        consolidation is not exclusive to sleep). Checked: Inserm 2011. Act 8 text also:
//        bats and pollinating insects are disoriented by artificial light
//        (attributed to « les associations de protection de la nature »,
//        in the conditional). Check.
//     d. Act 11 text: « le chauffage des logements compense en partie la
//        baisse des déplacements » (the rebound effect of home working,
//        hedged « en partie »). Check that the hedge holds (e.g. ADEME 2020
//        rebound-effect study).
//     e. Act 9 commonErrors: « L'Académie le déconseille » about « malgré
//        que » + subjunctive in the sense of « bien que » (Académie, Dire,
//        ne pas dire; « malgré qu'il en ait » is the accepted fixed
//        phrase). Check the exact verdict.
//     f. Every person, outlet, institution and company is invented: Hélène
//        Brassard, Lina, Nadia, Samuel, Inès Morvan, Madame Desrosiers, the
//        Institut Verlune (house invention), the cabinet Tessère (house
//        invention), Le Courrier de la Rive, the Théâtre de l'Anse-Grise (renamed at
//        pre-review: a real « Théâtre de la Rive » exists in the Loiret), the
//        médiathèque Lise-Aubin. Every figure belongs to an invented
//        report, budget or column, presented as such. Real places are
//        settings only (Montréal, Sherbrooke, Lyon, Dakar, Genève).
//     PRE-REVIEW 2026-09-30: a to f checked (CEFR Table 3; Nantes 1985 and
//        Grenoble 1987; Inserm; OFB; ADEME 2020, whose home-energy rebound
//        of 3.5 to 7 % keeps « en partie » true; Académie DNP on « malgré
//        que »). Row .1012 rewritten: « revenir vers vous » is criticised
//        by the Académie as a calque of « get back to you ».
//     g. QUOTATIONS: none. Every text is « texte original écrit pour la
//        leçon »; the act 5 passage is pastiche (« à la manière d'un roman
//        du dix-neuvième siècle »), not an extract.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.01',
  seq: 1,
  title: 'Taking Stock of Your Grammar',
  sub: 'Faire le point sur sa grammaire',
  canDo: 'Can audit their own written and spoken production against the C1 accuracy descriptor, sort every B1 and B2 structure into what they must produce, what they need only recognise and their own weak spots, name the lesson that fixes each weak spot, and write a precise learning plan of 250 to 400 words',
  prereqUnitIds: ['b2.06', 'b2.16', 'b2.22', 'b2.23'],
} as const;

export const LESSON_ID = 'c1.01.l1';
export const THEME = 'discours-dexamen';
export const LEVEL = 'c1' as const;

/** ONE block. Everything below 1000 at this theme is legacy exposé phrasing. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.c1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  C1 is taught in French, so B1 and B2 labels are French. A B1 or B2 unit
 *  id's number IS its trail position: checked 2026-09-30 against every B2
 *  lesson file header (`seq` and `tag`, b2.01 to b2.34) and the B1 plan.
 * ══════════════════════════════════════════════════════════════════════════ */

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

/** The B2 lessons this audit routes to, by unit id (metadata only). */
export const B2 = {
  pqp: 'b2.01', condPasse: 'b2.02', siIrreel: 'b2.03', siMixtes: 'b2.04',
  subjPasse: 'b2.05', subjInd: 'b2.06', futAnt: 'b2.07', passeSimple: 'b2.08',
  subjLitt: 'b2.09', nominal: 'b2.10', tonique: 'b2.11', gerondif: 'b2.12',
  participe: 'b2.13', infinitif: 'b2.14', cause: 'b2.15', concession: 'b2.16',
  but: 'b2.17', temps: 'b2.18', restriction: 'b2.19', impersonnel: 'b2.20',
  negation: 'b2.21', academique: 'b2.22', argument: 'b2.23',
} as const;
export const B1 = {
  depuis: 'b1.04', si: 'b1.10', guere: 'b1.20', or: 'b1.30', subord: 'b1.31', medias: 'b1.34',
} as const;

/** « la leçon 16 du B2 », from a key of B2 or B1. */
export const R = (unitId: string) => refFr(unitId);

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  FAIRE LE POINT. A navigator « fait le point »: fixes the ship's position
 *  on the chart before choosing a heading. The audit does the same with the
 *  grammar the learner already has: each structure gets a pin on the chart,
 *  sage for « à produire », slate for « à reconnaître », terracotta for
 *  « point faible ». The reframe says why the position matters at C1: the
 *  grammar is no longer there to get understood, it is there to be exact.
 *
 *  It is NOT « learn more rules »: act 1 says nothing is new, and act 11
 *  shows a C1 paragraph using fewer structures than its first draft.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Au C1, la grammaire ne sert plus à te faire comprendre : elle sert à dire exactement ce que tu veux dire.';
export const REFRAME_EN = 'At C1, grammar no longer serves to get you understood: it serves to say exactly what you mean.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Au C1, tu dois savoir tout produire.',
    why: 'False where act 5 has to hold: the passé simple, the subjonctif imparfait, the passé antérieur and ne… point stay recognition only at C1. Sorting what NOT to produce is half the audit.',
  },
  {
    text: 'Le C1, ce sont de nouvelles règles.',
    why: 'The lesson teaches nothing new, and says so in act 1. What changes is the sureness and the choice of the exact structure, not the stock of rules.',
  },
  {
    text: 'Plus c’est compliqué, plus c’est C1.',
    why: 'Act 11 contradicts it: the C1 revision of the paragraph is precise, not heavier, and act 6 marks stacked nouns down. Complication for its own sake is « faire savant » (lesson 22 in B2).',
  },
  {
    text: 'Au C1, on ne fait plus de fautes.',
    why: 'Too strong and unhelpful: the C1 descriptor speaks of rare errors that are hard to spot, not of none. The point of the audit is to find the ones that remain and name the lesson that fixes them.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seedPlusPacks rows, read 2026-09-30, French in
 *  comment; every one probed `published` in Postgres the same day)
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b2.recits-au-passe.1609',          // Le plus-que-parfait dit ce qui était déjà fait au moment dont tu parles.  (lesson 1 in B2, rule)
    'fr.b2.langue-soignee.1410',           // Le verbe raconte, le nom condense : choisis selon qui te lit ou t’écoute.  (lesson 10 in B2, rule)
    'fr.b2.connecteurs-logiques.1807',     // Parce que et donc posent le lien ; les autres le nuancent.  (lesson 15 in B2, rule)
    'fr.b2.universite.1008',               // Une idée par paragraphe, un fil entre les phrases, et jamais plus sûr que tes preuves.  (lesson 22 in B2, rule)
    'fr.b2.recits-au-passe.1600',          // Quand nous sommes arrivés, le film avait commencé.  (lesson 1 in B2)
    'fr.b2.emotions.1200',                 // Je suis vraiment content que tu sois venu.  (lesson 5 in B2)
    'fr.b2.litterature.1126',              // Quand il eut fini, il se leva.  (lesson 8 in B2, recognition)
    'fr.b2.litterature.1206',              // Bien qu'il fût tard, le notaire la reçut.  (lesson 9 in B2, recognition)
    'fr.b2.litterature.1208',              // Il eût fallu partir plus tôt.  (lesson 9 in B2, recognition)
    'fr.b1.affaires.1037',                 // faire le point  (B1, the published twin of this lesson's title phrase)
  ],
  act2: [
    'fr.b2.recits-au-passe.1643',          // Les lettres que j'avais écrites sont restées dans un tiroir.  (lesson 1 in B2)
    'fr.b2.projets-et-futur.1800',         // Vendredi à neuf heures, j'aurai terminé la présentation.  (lesson 7 in B2)
    'fr.b2.projets-et-futur.1933',         // Ils auront raté leur correspondance.  (lesson 7 in B2)
    'fr.b2.projets-et-futur.1884',         // Tant que tu n'auras pas rendu le dossier, tu ne seras pas payé.  (lesson 7 in B2)
    'fr.b2.connecteurs-logiques.2400',     // J'ai quitté l'appartement avant que la fuite commence.  (lesson 18 in B2)
    'fr.b1.recits-au-passe.1269',          // J'attendais depuis vingt minutes quand le bus est arrivé.  (lesson 4 in B1)
  ],
  act3: [
    'fr.b2.projets-et-futur.1400',         // Si j’avais vérifié l’horaire, je n’aurais pas raté le train.  (lesson 3 in B2)
    'fr.b2.recits-au-passe.1760',          // Si j'avais su, je serais venu plus tôt.  (lesson 1 in B2, the trap card's right answer)
    'fr.b2.projets-et-futur.1600',         // Si j'avais continué mes études, j'aurais un meilleur poste aujourd'hui.  (lesson 4 in B2)
    'fr.b2.conseils-et-suggestions.1209',  // Tu aurais dû me le dire.  (lesson 2 in B2)
    'fr.b2.conseils-et-suggestions.1331',  // Le club aurait refusé une offre de dix millions.  (lesson 2 in B2)
    'fr.b1.journalisme.1093',              // L’incendie aurait fait deux blessés.  (lesson 34 in B1)
    'fr.b2.projets-et-futur.1696',         // Si j'étais toi, j'appellerais le propriétaire.  (lesson 4 in B2)
  ],
  act4: [
    'fr.b2.opinions-et-avis.1808',         // L'indicatif affirme un fait ; le subjonctif le regarde sans l'affirmer.  (lesson 6 in B2, rule)
    'fr.b2.emotions.1207',                 // Même déclencheur, autre horloge : le subjonctif passé dit que c’est déjà fait.  (lesson 5 in B2, rule)
    'fr.b2.opinions-et-avis.1848',         // Il est probable que les loyers vont augmenter.  (lesson 6 in B2)
    'fr.b1.connecteurs-logiques.1339',     // Après qu'il est parti, nous avons fermé le bureau.  (lesson 31 in B1)
    'fr.b2.emotions.1350',                 // Bien qu'il ait plu toute la journée, le festival a attiré dix mille personnes.  (lesson 5 in B2)
    'fr.b2.opinions-et-avis.1800',         // Je cherche un appartement qui soit calme.  (lesson 6 in B2)
    'fr.b2.opinions-et-avis.1885',         // C'est le meilleur film que j'aie vu cette année.  (lesson 6 in B2)
  ],
  act5: [
    'fr.b2.litterature.1009',              // Le passé simple, c’est le passé composé des livres : tu le lis, tu ne le dis pas.  (lesson 8 in B2, rule)
    'fr.b2.litterature.1203',              // Le subjonctif littéraire change la forme, jamais le sens : tu le lis, et tu dis la forme d’aujourd’hui.  (lesson 9 in B2, rule)
    'fr.b2.litterature.1107',              // Il eut peur et recula.  (lesson 8 in B2, recognition)
    'fr.b2.litterature.1301',              // S'il l'eût su, il fût venu.  (lesson 9 in B2, recognition)
    'fr.b2.litterature.1212',              // Dans une conversation, on dit qu'il soit, pas qu'il fût.  (lesson 9 in B2, rule)
    'fr.b2.connecteurs-logiques.2575',     // Dès qu'il eut fini son repas, il sortit sur la terrasse.  (lesson 18 in B2, recognition)
    'fr.b2.connecteurs-logiques.2477',     // Le ne explétif peut suivre avant que, à moins que, de peur que, craindre que, éviter que et un comparatif.  (lesson 18 in B2, rule)
    'fr.b2.negation-et-restriction.1536',  // Je ne le connais point.  (lesson 21 in B2, recognition)
  ],
  act6: [
    'fr.b2.langue-soignee.1425',           // L'augmentation des salaires entrera en vigueur en janvier.  (lesson 10 in B2)
    'fr.b2.langue-soignee.1465',           // La perte du dossier a causé beaucoup de retard.  (lesson 10 in B2)
    'fr.b2.faits-et-procedures.1200',      // J'ai fait réparer le rétroviseur dans un garage.  (lesson 14 in B2)
    'fr.b2.faits-et-procedures.1245',      // Après avoir attendu une heure, nous sommes repartis.  (lesson 14 in B2)
    'fr.b2.faits-et-procedures.1275',      // Nous sommes partis sans que les enfants s'en aperçoivent.  (lesson 14 in B2)
  ],
  act7: [
    'fr.b2.connecteurs-logiques.1608',     // Le gérondif n'a pas de sujet à lui : il prend celui du verbe principal.  (lesson 12 in B2, rule)
    'fr.b2.langue-soignee.1608',           // Le participe présent reste un verbe et ne s'accorde pas ; l'adjectif verbal dit une qualité et s'accorde.  (lesson 13 in B2, rule)
    'fr.b2.connecteurs-logiques.1732',     // Tout en se disant prêt à négocier, le ministre n'a rien cédé.  (lesson 12 in B2)
    'fr.b2.langue-soignee.1671',           // Étant arrivée en retard, elle a manqué le début du film.  (lesson 13 in B2)
    'fr.b2.connecteurs-logiques.1684',     // Tu économiseras en cuisinant toi-même.  (lesson 12 in B2)
    'fr.b2.langue-soignee.1610',           // Les horaires sont variables et parfois fatigants.  (lesson 13 in B2)
  ],
  act8: [
    'fr.b2.connecteurs-logiques.1824',     // Du fait qu'il parle trois langues, il a été choisi pour ce poste.  (lesson 15 in B2)
    'fr.b2.connecteurs-logiques.1929',     // Il y avait tant de candidats que le jury a prolongé les entretiens.  (lesson 15 in B2)
    'fr.b2.connecteurs-logiques.1915',     // Range tes dossiers de sorte qu'on puisse les retrouver.  (lesson 15 in B2)
    'fr.b2.connecteurs-logiques.2210',     // Je vous écris afin de solliciter une subvention pour notre association.  (lesson 17 in B2)
    'fr.b2.connecteurs-logiques.2311',     // J'ai rappelé le traiteur de peur qu'il n'oublie notre commande.  (lesson 17 in B2)
    'fr.b1.connecteurs-logiques.1102',     // Le contrat exige un diplôme. Or, Paul n'en a pas.  (lesson 30 in B1)
    'fr.b2.connecteurs-logiques.1902',     // Le dossier était incomplet. Aussi a-t-il été renvoyé à son auteur.  (lesson 15 in B2)
    'fr.b2.connecteurs-logiques.1864',     // Il a menti par peur de décevoir ses parents.  (lesson 15 in B2)
    'fr.b2.connecteurs-logiques.2207',     // Le but vise ce qui n'est pas encore arrivé : un seul sujet, l'infinitif ; deux sujets, que et le subjonctif.  (lesson 17 in B2, rule)
  ],
  act9: [
    'fr.b2.connecteurs-logiques.2007',     // Concéder, c'est accorder un point sans céder la partie : le mot qui l'accorde impose sa forme.  (lesson 16 in B2, rule)
    'fr.b2.connecteurs-logiques.2153',     // Certes, l'application simplifie les démarches ; néanmoins, elle exclut les personnes âgées.  (lesson 16 in B2)
    'fr.b2.connecteurs-logiques.2000',     // Bien que le tourisme fasse vivre le quartier, il le rend parfois invivable.  (lesson 16 in B2)
    'fr.b2.connecteurs-logiques.2113',     // Quand bien même les chiffres seraient bons, la méthode pose problème.  (lesson 16 in B2)
    'fr.b2.negation-et-restriction.1207',  // Restreindre, c'est tracer une limite ; l'exception y ouvre une porte, et chaque porte a sa forme.  (lesson 19 in B2, rule)
    'fr.b2.negation-et-restriction.1200',  // Nous ne remboursons que les billets non utilisés.  (lesson 19 in B2)
    'fr.b2.negation-et-restriction.1407',  // Un seul ne, et les mots négatifs s'additionnent pour dessiner le vide ; pas, lui, ne s'y joint jamais.  (lesson 21 in B2, rule)
    'fr.b2.negation-et-restriction.1451',  // Il ne m'a jamais rien dit de ce contrat.  (lesson 21 in B2)
    'fr.b1.negation-et-restriction.1066',  // Elle n'a guère le temps de lire.  (lesson 20 in B1)
    'fr.b2.opinions-et-avis.1934',         // Quoique la salle soit pleine, on trouvera une place.  (lesson 6 in B2)
    'fr.b2.universite.1149',               // Nonobstant ce qui précède, d'aucuns pourraient arguer du contraire.  (lesson 22 in B2, review only: named, never released)
  ],
  act10: [
    'fr.b2.pronoms-essentiels.1808',       // Le pronom tonique met une personne sous le projecteur.  (lesson 11 in B2, rule)
    'fr.b2.pronoms-essentiels.1800',       // Lui, il a adoré ; moi, j'ai trouvé ça long.  (lesson 11 in B2)
    'fr.b2.pronoms-essentiels.1888',       // C'est lui que j'ai vu hier soir.  (lesson 11 in B2)
    'fr.b2.pronoms-essentiels.1863',       // Elle seule a compris le problème.  (lesson 11 in B2)
    'fr.b2.pronoms-essentiels.1877',       // Mon mari et moi vous remercions de votre accueil.  (lesson 11 in B2)
    'fr.b2.opinions-et-avis.2007',         // Le il ne désigne personne : ce qui suit dit jusqu'où tu t'engages.  (lesson 20 in B2, rule)
    'fr.b2.opinions-et-avis.2000',         // Il a été décidé que la toiture serait refaite au printemps.  (lesson 20 in B2)
    'fr.b2.opinions-et-avis.2070',         // Il n'est pas exclu que l'école reprenne jeudi.  (lesson 20 in B2)
    'fr.b2.opinions-et-avis.2169',         // Il convient donc de prolonger l'expérience d'un an.  (lesson 20 in B2)
    'fr.b2.opinions-et-avis.2099',         // Il me semble que la nouvelle ligne est en avance.  (lesson 20 in B2)
  ],
  act11: [
    'fr.b2.universite.1046',               // Ce constat mérite toutefois d'être nuancé.  (lesson 22 in B2)
    'fr.b2.universite.1004',               // Dans une certaine mesure, les cours en ligne semblent favoriser la réussite.  (lesson 22 in B2)
    'fr.b2.universite.1131',               // Il convient donc de s'interroger sur l'équité de ce dispositif.  (lesson 22 in B2)
    'fr.b2.opinions-et-avis.1612',         // Prends position, prouve-la, et réponds à ceux qui pensent le contraire.  (lesson 23 in B2, rule)
    'fr.b2.negation-et-restriction.1573',  // C'est plus cher qu'on ne le pense.  (lesson 21 in B2)
    'fr.b2.negation-et-restriction.1411',  // Je ne saurais dire d'où venait le bruit.  (lesson 21 in B2)
  ],
  act12: [
    'fr.b2.universite.1119',               // La baisse des inscriptions inquiète la direction.  (lesson 22 in B2, quoted in Lina's plan)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b2.litterature.1126',                  // drills: sentence (a recognition row)
  'fr.b2.litterature.1206',                  // drills: sentence
  'fr.b2.litterature.1208',                  // drills: sentence
  'fr.b2.litterature.1107',                  // drills: sentence
  'fr.b2.litterature.1301',                  // drills: sentence
  'fr.b2.universite.1149',                   // drills: review (the « faire savant » counter-example)
];

/** No `voiceflash`: never in a `practice` speak section (the practice filter
 *  reads the seed's drills, so this list documents, it does not drive). */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b2.recits-au-passe.1609', 'fr.b2.langue-soignee.1410', 'fr.b2.connecteurs-logiques.1807',
  'fr.b2.universite.1008', 'fr.b1.recits-au-passe.1269', 'fr.b2.opinions-et-avis.1808',
  'fr.b2.emotions.1207', 'fr.b2.litterature.1009', 'fr.b2.litterature.1203', 'fr.b2.litterature.1212',
  'fr.b2.connecteurs-logiques.2575', 'fr.b2.connecteurs-logiques.2477', 'fr.b2.negation-et-restriction.1536',
  'fr.b2.connecteurs-logiques.1608', 'fr.b2.langue-soignee.1608', 'fr.b2.connecteurs-logiques.2207',
  'fr.b2.connecteurs-logiques.2007', 'fr.b2.negation-et-restriction.1207', 'fr.b2.negation-et-restriction.1407',
  'fr.b2.pronoms-essentiels.1808', 'fr.b2.opinions-et-avis.2007', 'fr.b2.opinions-et-avis.1612',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
/** Recognition at C1: a flashcard to read, never spoken. */
const FCR = ['flashcard', 'review'] as Item['drills'];
/** Counter-examples: recognised, never produced, never spoken. */
const RECO = ['review'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';

const sent = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, grammarPoints: ['bilan-grammatical'], ...extra,
});

const phrase = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · À QUOI SERT LE C1 ───────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, C, "Le projet a échoué à cause de l'équipe de Lyon.", 'The project failed because of the Lyon team.', '/lə pʁɔ.ʒɛ a e.ʃwe a koz də le.kip də ljɔ̃/', 'luh pro-ZHEH a ay-SHWAY | a kohz duh lay-KEEP duh LYOHⁿ', ['scene', 'contre-exemple'], RECO),
  sent(1001, S, "Le projet n'a pas abouti, faute d'avoir reçu à temps les données de Lyon.", 'The project did not come through, for want of receiving the Lyon data in time.', '/lə pʁɔ.ʒɛ na pa.za.bu.ti fot da.vwaʁ ʁə.sy a tɑ̃ le dɔ.ne də ljɔ̃/', 'luh pro-ZHEH na pa-za-boo-TEE | foht da-vwar ruh-SÜ a TAHⁿ | lay do-nay duh LYOHⁿ', ['scene', 'precision'], FCVDR),
  sent(1002, C, 'Tu connais déjà presque toutes les règles.', 'You already know almost all the rules.', '/ty kɔ.nɛ de.ʒa pʁɛsk tut le ʁɛɡl/', 'tü ko-neh day-ZHA | presk toot lay REHGL', ['scene']),
  sent(1003, C, "Le C1 te demande autre chose : la précision, la nuance et l'implicite.", 'C1 asks something else of you: precision, nuance and what is left unsaid.', '/lə se.œ̃ tə də.mɑ̃d otʁ ʃoz la pʁe.si.zjɔ̃ la nɥɑ̃s e lɛ̃.pli.sit/', 'luh say-UHⁿ tuh duh-mahⁿd ohtr SHOHZ | la pray-see-ZYOHⁿ | la NWAHⁿS | ay lehⁿ-plee-SEET', ['scene', 'c1']),
  sent(1004, C, REFRAME, REFRAME_EN, '/o se.œ̃ la ɡʁa.mɛʁ nə sɛʁ ply a tə fɛʁ kɔ̃.pʁɑ̃dʁ ɛl sɛʁ a diʁ ɛɡ.zak.tə.mɑ̃ sə kə ty vø diʁ/', 'oh say-UHⁿ | la gra-MEHR nuh sehr PLÜ | a tuh fehr kohⁿ-PRAHⁿDR | ehl sehr a DEER | eg-zak-tuh-MAHⁿ | suh kuh tü veu DEER', ['rule', 'reframe'], ['flashcard'],
    rule('À quoi sert la grammaire au C1 ?', 'À dire exactement ce que tu veux dire : avec précision, avec nuance, et parfois sans tout dire.')),
  phrase(1005, C, 'à produire', 'to produce: you write it and say it', '/a pʁɔ.dɥiʁ/', 'a pro-DWEER', ['pile']),
  phrase(1006, C, 'à reconnaître', 'to recognise: you understand it when you read it', '/a ʁə.kɔ.nɛtʁ/', 'a ruh-ko-NEHTR', ['pile']),
  phrase(1007, C, 'un point faible', 'a weak spot', '/œ̃ pwɛ̃ fɛbl/', 'uhⁿ pwehⁿ FEHBL', ['pile']),
  phrase(1008, C, 'la sûreté', 'sureness', '/la syʁ.te/', 'la sür-TAY', ['mot']),
  sent(1009, C, "Une structure à produire, tu l'écris et tu la dis sans hésiter.", 'A structure to produce is one you write and say without hesitating.', '/yn stʁyk.tyʁ a pʁɔ.dɥiʁ ty le.kʁi e ty la di sɑ̃.ze.zi.te/', 'ün strük-TÜR a pro-DWEER | tü lay-KREE | ay tü la DEE | sahⁿ-zay-zee-TAY', ['pile']),
  sent(1010, C, "Une structure à reconnaître, tu la comprends en lisant, sans devoir l'écrire.", 'A structure to recognise is one you understand as you read, without having to write it.', '/yn stʁyk.tyʁ a ʁə.kɔ.nɛtʁ ty la kɔ̃.pʁɑ̃ ɑ̃ li.zɑ̃ sɑ̃ də.vwaʁ le.kʁiʁ/', 'ün strük-TÜR a ruh-ko-NEHTR | tü la kohⁿ-PRAHⁿ | ahⁿ lee-ZAHⁿ | sahⁿ duh-vwar lay-KREER', ['pile']),
  sent(1011, C, "Un point faible, c'est une règle que tu connais mais que tu rates encore quand tu écris vite.", 'A weak spot is a rule you know but still get wrong when you write fast.', '/œ̃ pwɛ̃ fɛbl sɛ.tyn ʁɛɡl kə ty kɔ.nɛ mɛ kə ty ʁat ɑ̃.kɔʁ kɑ̃ ty e.kʁi vit/', 'uhⁿ pwehⁿ FEHBL | seh-tün REHGL | kuh tü ko-NEH | meh kuh tü rat ahⁿ-KOR | kahⁿ tü ay-kree VEET', ['pile'], FCVDR),
  sent(1012, S, 'Je me permets de reprendre contact avec vous au sujet du retard de livraison.', 'I am taking the liberty of contacting you again about the delivery delay.', '/ʒə mə pɛʁ.mɛ də ʁə.pʁɑ̃dʁ kɔ̃.takt a.vɛk vu o sy.ʒɛ dy ʁə.taʁ də li.vʁɛ.zɔ̃/', 'zhuh muh pehr-MEH | duh ruh-prahⁿdr kohⁿ-TAKT a-vek VOO | oh sü-zheh dü ruh-tar duh lee-vreh-ZOHⁿ', ['usage']),
  sent(1013, S, "Si la commission avait disposé de ces chiffres, elle n'aurait sans doute pas tranché ainsi.", 'Had the commission had these figures, it would probably not have decided as it did.', '/si la kɔ.mi.sjɔ̃ a.vɛ dis.po.ze də se ʃifʁ ɛl no.ʁɛ sɑ̃ dut pa tʁɑ̃.ʃe ɛ̃.si/', 'see la ko-mee-SYOHⁿ | a-veh dees-po-ZAY duh say SHEEFR | ehl no-reh sahⁿ DOOT | pa trahⁿ-shay ehⁿ-SEE', ['usage']),
  sent(1014, S, 'Sans vouloir minimiser vos efforts, nous ne pouvons pas accepter ce délai.', 'Without wishing to play down your efforts, we cannot accept this deadline.', '/sɑ̃ vu.lwaʁ mi.ni.mi.ze vo.ze.fɔʁ nu nə pu.vɔ̃ pa.zak.sɛp.te sə de.lɛ/', 'sahⁿ voo-lwar mee-nee-mee-ZAY | voh-zay-FOR | noo nuh poo-vohⁿ pa-zak-sep-TAY | suh day-LEH', ['usage']),
];

/* ── ACT 2 · SITUER DANS LE TEMPS ────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1015, S, "Lorsque la commission s'est réunie, le rapport avait déjà circulé dans la presse.", 'When the commission met, the report had already been circulating in the press.', '/lɔʁs.kə la kɔ.mi.sjɔ̃ sɛ ʁe.y.ni lə ʁa.pɔʁ a.vɛ de.ʒa siʁ.ky.le dɑ̃ la pʁɛs/', 'lors-kuh la ko-mee-SYOHⁿ | seh ray-ü-NEE | luh ra-POR | a-veh day-zha seer-kü-LAY | dahⁿ la PRESS', ['avant'], FCVDR),
  sent(1016, S, "D'ici la fin du mois, le comité aura rendu son avis.", 'By the end of the month, the committee will have delivered its opinion.', '/di.si la fɛ̃ dy mwa lə kɔ.mi.te o.ʁa ʁɑ̃.dy sɔ̃.na.vi/', 'dee-see la fehⁿ dü MWA | luh ko-mee-TAY | oh-ra rahⁿ-DÜ | sohⁿ-na-VEE', ['apres']),
  sent(1017, C, 'Une fois que tu auras relu ce chapitre, tu verras le plan autrement.', 'Once you have reread this chapter, you will see the plan differently.', '/yn fwa kə ty o.ʁa ʁə.ly sə ʃa.pitʁ ty vɛ.ʁa lə plɑ̃ o.tʁə.mɑ̃/', 'ün fwa kuh tü oh-ra ruh-LÜ | suh sha-PEETR | tü veh-RA | luh plahⁿ oh-truh-MAHⁿ', ['apres']),
  sent(1018, C, "Il travaillait au port depuis dix ans quand l'usine a fermé.", 'He had been working at the port for ten years when the factory closed.', '/il tʁa.va.jɛ o pɔʁ də.pɥi di.zɑ̃ kɑ̃ ly.zin a fɛʁ.me/', 'eel tra-va-YEH oh POR | duh-pwee dee-ZAHⁿ | kahⁿ lü-zeen a fehr-MAY', ['depuis'], FCVDR),
  sent(1019, C, "Après avoir quitté Dakar, elle n'y était jamais retournée.", 'After leaving Dakar, she had never gone back.', '/a.pʁɛ.za.vwaʁ ki.te da.kaʁ ɛl ni e.tɛ ʒa.mɛ ʁə.tuʁ.ne/', 'a-preh-za-vwar kee-TAY da-KAR | ehl nee ay-teh zha-meh ruh-toor-NAY', ['avant']),
  sent(1020, C, "Elle n'est pas venue ; elle aura oublié la date.", 'She did not come; she must have forgotten the date.', '/ɛl nɛ pa və.ny ɛ.lo.ʁa u.bli.je la dat/', 'ehl neh pa vuh-NÜ | eh-loh-ra oo-blee-yay la DAT', ['probabilite']),
  sent(1021, S, "Ma mère avait refait la toiture avant que les banques acceptent de lui prêter un sou.", 'My mother had redone the roof before the banks agreed to lend her a penny.', '/ma mɛʁ a.vɛ ʁə.fɛ la twa.tyʁ a.vɑ̃ kə le bɑ̃k ak.sɛpt də lɥi pʁɛ.te œ̃ su/', 'ma MEHR | a-veh ruh-feh la twa-TÜR | a-vahⁿ kuh lay BAHⁿK | ak-sept duh lwee preh-tay uhⁿ SOO', ['texte']),
  sent(1022, S, 'Tant que je n\'aurai pas tout écrit, je ne vendrai pas les cartons du grenier.', 'Until I have written everything down, I will not sell the boxes in the attic.', '/tɑ̃ kə ʒə no.ʁɛ pa tu.te.kʁi ʒə nə vɑ̃.dʁɛ pa le kaʁ.tɔ̃ dy ɡʁə.nje/', 'tahⁿ kuh zhuh no-reh pa too-tay-KREE | zhuh nuh vahⁿ-dreh pa | lay kar-tohⁿ dü gruh-NYAY', ['texte']),
];

/* ── ACT 3 · L'IRRÉEL ET L'HYPOTHÈSE ─────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1023, C, "Si nous avions su l'heure, nous serions venus plus tôt.", 'If we had known the time, we would have come earlier.', '/si nu.za.vjɔ̃ sy lœʁ nu sə.ʁjɔ̃ və.ny ply to/', 'see noo-za-vyohⁿ SÜ LUHR | noo suh-ryohⁿ vuh-NÜ | plü TOH', ['si'], FCVDR),
  sent(1024, C, "Si j'avais accepté ce poste, j'habiterais à Genève aujourd'hui.", 'If I had taken that job, I would be living in Geneva today.', '/si ʒa.vɛ.zak.sɛp.te sə pɔst ʒa.bi.tʁə.ʁɛ a ʒə.nɛv o.ʒuʁ.dɥi/', 'see zha-veh-zak-sep-TAY suh POST | zha-bee-truh-REH | a zhuh-NEHV | oh-zhoor-DWEE', ['si-mixte']),
  sent(1025, S, 'Les élus auraient dû écouter les commerçants.', 'The councillors should have listened to the shopkeepers.', '/le.ze.ly o.ʁɛ dy e.ku.te le kɔ.mɛʁ.sɑ̃/', 'lay-zay-LÜ | oh-reh DÜ | ay-koo-tay lay ko-mehr-SAHⁿ', ['reproche']),
  sent(1026, S, "Même si le tramway n'avait pas tout sauvé, il aurait freiné l'exode.", 'Even if the tram had not saved everything, it would have slowed the exodus.', '/mɛm si lə tʁam.wɛ na.vɛ pa tu so.ve i.lo.ʁɛ fʁɛ.ne lɛɡ.zɔd/', 'mehm see luh tram-WEH | na-veh pa too soh-VAY | ee-loh-reh freh-nay leg-ZOD', ['meme-si']),
  sent(1027, S, "Le chiffre aurait été revu à la hausse, mais personne ne l'a confirmé.", 'The figure has reportedly been revised upwards, but no one has confirmed it.', '/lə ʃifʁ o.ʁɛ.te.te ʁə.vy a la os mɛ pɛʁ.sɔn nə la kɔ̃.fiʁ.me/', 'luh SHEEFR | oh-reh-tay-tay ruh-VÜ a la OHS | meh pehr-SONN | nuh la kohⁿ-feer-MAY', ['information'], FCVDR),
  sent(1028, C, 'Si tu venais demain, on pourrait en parler.', 'If you came tomorrow, we could talk about it.', '/si ty və.nɛ də.mɛ̃ ɔ̃ pu.ʁɛ ɑ̃ paʁ.le/', 'see tü vuh-neh duh-MEHⁿ | ohⁿ poo-REH | ahⁿ par-LAY', ['si']),
  sent(1029, S, 'Si les élus avaient patienté vingt-cinq ans, ils auraient vu revenir le tramway.', 'If the councillors had waited twenty-five years, they would have seen the tram come back.', '/si le.ze.ly a.vɛ pa.sjɑ̃.te vɛ̃t.sɛ̃.kɑ̃ il.zo.ʁɛ vy ʁə.və.niʁ lə tʁam.wɛ/', 'see lay-zay-LÜ | a-veh pa-syahⁿ-tay vehⁿt-sehⁿ-KAHⁿ | eel-zoh-reh VÜ | ruh-vuh-neer luh tram-WEH', ['texte']),
  sent(1030, S, "Si nous avions gardé les rails, nous aurions aujourd'hui un réseau envié.", 'If we had kept the rails, we would have an envied network today.', '/si nu.za.vjɔ̃ ɡaʁ.de le ʁaj nu.zo.ʁjɔ̃ o.ʒuʁ.dɥi œ̃ ʁe.zo ɑ̃.vje/', 'see noo-za-vyohⁿ gar-day lay RYE | noo-zoh-ryohⁿ oh-zhoor-DWEE | uhⁿ ray-zoh ahⁿ-VYAY', ['texte', 'si-mixte']),
  sent(1031, S, 'Selon un rapport, une seule ligne coûterait près de deux cents millions.', 'According to a report, a single line would cost nearly two hundred million.', '/sə.lɔ̃ œ̃ ʁa.pɔʁ yn sœl liɲ ku.tʁə.ʁɛ pʁɛ də dø sɑ̃ mi.ljɔ̃/', 'suh-lohⁿ uhⁿ ra-POR | ün suhl LEENY | koo-truh-REH | preh duh deu sahⁿ mee-LYOHⁿ', ['texte', 'information']),
  sent(1032, S, 'Ils auraient dû répondre à la lettre des commerçants.', "They should have answered the shopkeepers' letter.", '/il.zo.ʁɛ dy ʁe.pɔ̃dʁ a la lɛtʁ de kɔ.mɛʁ.sɑ̃/', 'eel-zoh-reh DÜ | ray-pohⁿdr a la LEHTR | day ko-mehr-SAHⁿ', ['texte', 'reproche']),
];

/* ── ACT 4 · LE CHOIX DU MODE ────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1033, S, 'Nous regrettons que cette décision ait été prise sans consultation.', 'We regret that this decision was taken without consultation.', '/nu ʁə.ɡʁɛ.tɔ̃ kə sɛt de.si.zjɔ̃ ɛ e.te pʁiz sɑ̃ kɔ̃.syl.ta.sjɔ̃/', 'noo ruh-greh-TOHⁿ | kuh set day-see-ZYOHⁿ | eh ay-tay PREEZ | sahⁿ kohⁿ-sül-ta-SYOHⁿ', ['subj-passe'], FCVDR),
  sent(1034, S, "Nous doutons qu'elle permette les économies annoncées.", 'We doubt that it will bring the announced savings.', '/nu du.tɔ̃ kɛl pɛʁ.mɛt le.ze.kɔ.nɔ.mi a.nɔ̃.se/', 'noo doo-TOHⁿ | kehl pehr-MET | lay-zay-ko-no-MEE a-nohⁿ-SAY', ['subjonctif']),
  sent(1035, S, "Il est probable que le budget de l'an prochain sera serré.", "Next year's budget will probably be tight.", '/i.lɛ pʁɔ.babl kə lə byd.ʒɛ də lɑ̃ pʁɔ.ʃɛ̃ sə.ʁa se.ʁe/', 'ee-leh pro-BABL | kuh luh büd-ZHEH | duh lahⁿ pro-SHEHⁿ | suh-ra seh-RAY', ['indicatif']),
  sent(1036, S, "C'est la décision la plus lourde que le conseil ait prise depuis l'ouverture.", 'It is the heaviest decision the board has taken since the opening.', '/sɛ la de.si.zjɔ̃ la ply luʁd kə lə kɔ̃.sɛj ɛ pʁiz də.pɥi lu.vɛʁ.tyʁ/', 'seh la day-see-ZYOHⁿ | la plü LOORD | kuh luh kohⁿ-SAY | eh PREEZ | duh-pwee loo-vehr-TÜR', ['superlatif']),
  sent(1037, S, "Nous cherchons une formule qui puisse préserver l'accueil du dimanche.", 'We are looking for an arrangement that could keep the Sunday service.', '/nu ʃɛʁ.ʃɔ̃ yn fɔʁ.myl ki pɥis pʁe.zɛʁ.ve la.kœj dy di.mɑ̃ʃ/', 'noo shehr-SHOHⁿ | ün for-MÜL | kee pwees pray-zehr-VAY | la-kuhy dü dee-MAHⁿSH', ['relative']),
  sent(1038, S, "Après que la bibliothèque a fermé le dimanche, la fréquentation du lundi n'a pas augmenté.", 'After the library closed on Sundays, Monday attendance did not rise.', '/a.pʁɛ kə la bi.bli.jɔ.tɛk a fɛʁ.me lə di.mɑ̃ʃ la fʁe.kɑ̃.ta.sjɔ̃ dy lœ̃.di na pa.zɔɡ.mɑ̃.te/', 'a-preh kuh la bee-blee-yo-TEK | a fehr-may luh dee-MAHⁿSH | la fray-kahⁿ-ta-SYOHⁿ dü luhⁿ-DEE | na pa-zog-mahⁿ-TAY', ['apres-que'], FCVDR),
  sent(1039, S, 'Nous espérons que vous tiendrez compte de cette expérience.', 'We hope you will take this experience into account.', '/nu.zɛs.pe.ʁɔ̃ kə vu tjɛ̃.dʁe kɔ̃t də sɛ.tɛks.pe.ʁjɑ̃s/', 'noo-zes-pay-ROHⁿ | kuh voo tyehⁿ-dray KOHⁿT | duh set-eks-pay-RYAHⁿS', ['indicatif']),
];

/* ── ACT 5 · LA LANGUE DES LIVRES ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1040, C, 'Il fallait que je le sache avant la réunion.', 'I needed to know before the meeting.', '/il fa.lɛ kə ʒə lə saʃ a.vɑ̃ la ʁe.y.njɔ̃/', 'eel fa-LEH | kuh zhuh luh SASH | a-vahⁿ la ray-ü-NYOHⁿ', ['aujourdhui']),
  sent(1041, C, 'Hier, nous sommes allés au cinéma avec les enfants.', 'Yesterday we went to the cinema with the children.', '/jɛʁ nu sɔm.za.le o si.ne.ma a.vɛk le.zɑ̃.fɑ̃/', 'YEHR | noo som-za-LAY | oh see-nay-MA | a-vek lay-zahⁿ-FAHⁿ', ['aujourdhui']),
  sent(1042, C, "Dès que j'ai fini le rapport, je te l'ai envoyé.", 'As soon as I finished the report, I sent it to you.', '/dɛ kə ʒe fi.ni lə ʁa.pɔʁ ʒə tə le ɑ̃.vwa.je/', 'deh kuh zhay fee-nee luh ra-POR | zhuh tuh lay ahⁿ-vwa-YAY', ['aujourdhui'], FCVDR),
  sent(1043, C, "Il aurait été préférable de m'appeler.", 'It would have been better to call me.', '/i.lo.ʁɛ.te.te pʁe.fe.ʁabl də ma.ple/', 'ee-loh-reh-tay-TAY | pray-fay-RABL | duh ma-PLAY', ['aujourdhui']),
  sent(1044, C, 'Je ne veux pas de ce contrat.', 'I do not want this contract.', '/ʒə nə vø pa də sə kɔ̃.tʁa/', 'zhuh nuh veu PA | duh suh kohⁿ-TRA', ['aujourdhui']),
  sent(1045, C, "Je regrette qu'il ait été absent hier.", 'I am sorry he was absent yesterday.', '/ʒə ʁə.ɡʁɛt ki.lɛ.e.te ap.sɑ̃ jɛʁ/', 'zhuh ruh-GRET | kee-leh-ay-tay ap-SAHⁿ | YEHR', ['aujourdhui']),
];

/* ── ACT 6 · NOMMER POUR CONDENSER ───────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1046, S, "La mise en service des stations s'est faite sans difficulté majeure.", 'The stations were brought into service without any major difficulty.', '/la mi.zɑ̃ sɛʁ.vis de sta.sjɔ̃ sɛ fɛt sɑ̃ di.fi.kyl.te ma.ʒœʁ/', 'la mee-zahⁿ sehr-VEES | day sta-SYOHⁿ | seh FET | sahⁿ dee-fee-kül-TAY ma-ZHUHR', ['nom']),
  sent(1047, S, "Cette progression s'explique par l'ouverture d'une nouvelle piste cyclable.", 'This growth is explained by the opening of a new cycle lane.', '/sɛt pʁɔ.ɡʁɛ.sjɔ̃ sɛks.plik paʁ lu.vɛʁ.tyʁ dyn nu.vɛl pist si.klabl/', 'set pro-greh-SYOHⁿ | seks-PLEEK | par loo-vehr-TÜR | dün noo-vel peest see-KLABL', ['nom'], FCVDR),
  sent(1048, S, 'La Ville a fait chiffrer ces mesures par ses services techniques.', 'The City had these measures costed by its technical departments.', '/la vil a fɛ ʃi.fʁe se mə.zyʁ paʁ se sɛʁ.vis tɛk.nik/', 'la VEEL | a feh shee-FRAY | say muh-ZÜR | par say sehr-vees tek-NEEK', ['faire']),
  sent(1049, S, 'Faute de pièces de rechange, un vélo sur cinq a été immobilisé.', 'For lack of spare parts, one bike in five was out of action.', '/fot də pjɛs də ʁə.ʃɑ̃ʒ œ̃ ve.lo syʁ sɛ̃k a e.te i.mɔ.bi.li.ze/', 'foht duh pyes duh ruh-SHAHⁿZH | uhⁿ vay-loh sür SEHⁿK | a ay-tay ee-mo-bee-lee-ZAY', ['nom']),
  sent(1050, S, 'Après avoir connu un démarrage lent, la fréquentation a nettement progressé.', 'After a slow start, use of the service rose markedly.', '/a.pʁɛ.za.vwaʁ kɔ.ny œ̃ de.ma.ʁaʒ lɑ̃ la fʁe.kɑ̃.ta.sjɔ̃ a nɛt.mɑ̃ pʁɔ.ɡʁɛ.se/', 'a-preh-za-vwar ko-NÜ | uhⁿ day-ma-razh LAHⁿ | la fray-kahⁿ-ta-SYOHⁿ | a net-mahⁿ pro-greh-SAY', ['infinitif']),
  sent(1051, S, 'Le cabinet recommande le recrutement de deux techniciens.', 'The consultancy recommends recruiting two technicians.', '/lə ka.bi.nɛ ʁə.kɔ.mɑ̃d lə ʁə.kʁyt.mɑ̃ də dø tɛk.ni.sjɛ̃/', 'luh ka-bee-NEH | ruh-ko-MAHⁿD | luh ruh-krüt-MAHⁿ | duh deu tek-nee-SYEHⁿ', ['nom']),
];

/* ── ACT 7 · PARTICIPES ET GÉRONDIFS (the listening lines) ───────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1052, C, "Bonjour à toutes et à tous, et bienvenue dans la chronique du matin : comme chaque mardi, je vous emmène dans un coin de la ville que vous croyez connaître, et aujourd'hui chez les habitants qui changent leur quartier en le réparant.", 'Hello everyone, and welcome to the morning slot: as every Tuesday, I take you to a corner of the city you think you know, and today to the residents who change their neighbourhood by repairing it.', '/bɔ̃.ʒuʁ a tut.ze.a tus e bjɛ̃.və.ny dɑ̃ la kʁɔ.nik dy ma.tɛ̃ kɔm ʃak maʁ.di ʒə vu.zɑ̃.mɛn dɑ̃.zœ̃ kwɛ̃ də la vil kə vu kʁwa.je kɔ.nɛtʁ e o.ʒuʁ.dɥi ʃe le.za.bi.tɑ̃ ki ʃɑ̃ʒ lœʁ kaʁ.tje ɑ̃ lə ʁe.pa.ʁɑ̃/', 'bohⁿ-ZHOOR | a toot-zay-a TOOS | ay byehⁿ-vuh-NÜ | dahⁿ la kro-neek dü ma-TEHⁿ | kom shak mar-DEE | zhuh voo-zahⁿ-MENN | dahⁿ-zuhⁿ kwehⁿ duh la VEEL | kuh voo krwa-yay ko-NEHTR | ay oh-zhoor-DWEE | shay lay-za-bee-TAHⁿ | kee shahⁿzh luhr kar-TYAY | ahⁿ luh ray-pa-RAHⁿ', ['ecoute', 'gerondif']),
  sent(1053, C, "En traversant le marché ce matin, j'ai rencontré Nadia, une retraitée tenant depuis deux ans un atelier de réparation de vélos installé dans l'ancienne poissonnerie, derrière la halle.", "Crossing the market this morning, I met Nadia, a retired woman who has been running a bike repair workshop for two years, set up in the old fishmonger's behind the market hall.", '/ɑ̃ tʁa.vɛʁ.sɑ̃ lə maʁ.ʃe sə ma.tɛ̃ ʒe ʁɑ̃.kɔ̃.tʁe na.dja yn ʁə.tʁɛ.te tə.nɑ̃ də.pɥi dø.zɑ̃ œ̃.na.tə.lje də ʁe.pa.ʁa.sjɔ̃ də ve.lo ɛ̃s.ta.le dɑ̃ lɑ̃.sjɛn pwa.sɔn.ʁi dɛ.ʁjɛʁ la al/', 'ahⁿ tra-vehr-SAHⁿ luh mar-SHAY | suh ma-TEHⁿ | zhay rahⁿ-kohⁿ-TRAY na-DYA | ün ruh-treh-TAY | tuh-NAHⁿ duh-pwee deu-ZAHⁿ | uhⁿ-na-tuh-LYAY | duh ray-pa-ra-syohⁿ duh vay-LOH | ehⁿs-ta-LAY | dahⁿ lahⁿ-syenn pwa-sonn-REE | deh-ryehr la AL', ['ecoute', 'participe']),
  sent(1054, C, 'Ayant travaillé trente ans dans un garage, elle connaît chaque pièce par cœur, et elle explique tout en réparant.', 'Having worked thirty years in a garage, she knows every part by heart, and she explains as she repairs.', '/ɛ.jɑ̃ tʁa.va.je tʁɑ̃.tɑ̃ dɑ̃.zœ̃ ɡa.ʁaʒ ɛl kɔ.nɛ ʃak pjɛs paʁ kœʁ e ɛl ɛks.plik tu.tɑ̃ ʁe.pa.ʁɑ̃/', 'eh-yahⁿ tra-va-YAY | trahⁿ-TAHⁿ | dahⁿ-zuhⁿ ga-RAZH | ehl ko-NEH | shak PYESS par KUHR | ay ehl eks-PLEEK | too-tahⁿ ray-pa-RAHⁿ', ['ecoute', 'ayant'], FCVDR),
  sent(1055, C, "Quand on l'écoute, ce qui frappe, c'est sa patience : elle ne prend jamais l'outil des mains d'un apprenti, même quand la réparation traîne et que la file s'allonge derrière lui.", "When you listen to her, what strikes you is her patience: she never takes the tool out of an apprentice's hands, even when the repair drags on and the queue grows behind him.", '/kɑ̃.tɔ̃ le.kut sə ki fʁap sɛ sa pa.sjɑ̃s ɛl nə pʁɑ̃ ʒa.mɛ lu.ti de mɛ̃ dœ̃.na.pʁɑ̃.ti mɛm kɑ̃ la ʁe.pa.ʁa.sjɔ̃ tʁɛn e kə la fil sa.lɔ̃ʒ dɛ.ʁjɛʁ lɥi/', 'kahⁿ-tohⁿ lay-KOOT | suh kee FRAP | seh sa pa-SYAHⁿS | ehl nuh prahⁿ zha-MEH | loo-TEE | day mehⁿ duhⁿ-na-prahⁿ-TEE | mehm kahⁿ la ray-pa-ra-SYOHⁿ TRENN | ay kuh la feel sa-LOHⁿZH | deh-ryehr LWEE', ['ecoute']),
  sent(1056, C, "Les jeunes venant à l'atelier repartent avec un vélo, mais surtout avec une méthode : on démonte, on observe, on comprend, et l'on recommence jusqu'à ce que la roue tourne sans bruit.", 'The young people who come to the workshop leave with a bike, but above all with a method: you take it apart, you look, you understand, and you start again until the wheel turns without a sound.', '/le ʒœn və.nɑ̃ a la.tə.lje ʁə.paʁt a.vɛ.kœ̃ ve.lo mɛ syʁ.tu a.vɛ.kyn me.tɔd ɔ̃ de.mɔ̃t ɔ̃.nɔp.sɛʁv ɔ̃ kɔ̃.pʁɑ̃ e lɔ̃ ʁə.kɔ.mɑ̃s ʒys.ka sə kə la ʁu tuʁn sɑ̃ bʁɥi/', 'lay ZHUHN | vuh-NAHⁿ a la-tuh-LYAY | ruh-PART | a-vek-uhⁿ vay-LOH | meh sür-TOO | a-vek-ün may-TOD | ohⁿ day-MOHⁿT | ohⁿ-nop-SEHRV | ohⁿ kohⁿ-PRAHⁿ | ay lohⁿ ruh-ko-MAHⁿS | zhüs-ka suh kuh la ROO | toorn sahⁿ BRWEE', ['ecoute', 'participe']),
  sent(1057, C, "Les apprentis, eux, se disent surpris en découvrant qu'un vélo se répare presque toujours avec trois outils.", 'The apprentices say they are surprised to discover that a bike can almost always be repaired with three tools.', '/le.za.pʁɑ̃.ti ø sə diz syʁ.pʁi ɑ̃ de.ku.vʁɑ̃ kœ̃ ve.lo sə ʁe.paʁ pʁɛsk tu.ʒuʁ a.vɛk tʁwa.zu.ti/', 'lay-za-prahⁿ-TEE | EU | suh deez sür-PREE | ahⁿ day-koo-VRAHⁿ | kuhⁿ vay-LOH | suh ray-PAR | presk too-ZHOOR | a-vek trwa-zoo-TEE', ['ecoute', 'gerondif'], FCVDR),
  sent(1058, C, 'Le travail est fatigant, reconnaît-elle, mais les résultats sont souvent convaincants.', 'The work is tiring, she admits, but the results are often convincing.', '/lə tʁa.vaj ɛ fa.ti.ɡɑ̃ ʁə.kɔ.nɛ.tɛl mɛ le ʁe.zyl.ta sɔ̃ su.vɑ̃ kɔ̃.vɛ̃.kɑ̃/', 'luh tra-VYE | eh fa-tee-GAHⁿ | ruh-ko-neh-TEHL | meh lay ray-zül-TA | sohⁿ soo-vahⁿ kohⁿ-vehⁿ-KAHⁿ', ['ecoute', 'adjectif-verbal'], FCVDR),
  sent(1059, C, "En arrivant tôt le samedi, on évite la file d'attente, qui peut atteindre une vingtaine de personnes.", 'By arriving early on Saturdays, you avoid the queue, which can reach about twenty people.', '/ɑ̃.na.ʁi.vɑ̃ to lə sam.di ɔ̃.ne.vit la fil da.tɑ̃t ki pø a.tɛ̃dʁ yn vɛ̃.tɛn də pɛʁ.sɔn/', 'ahⁿ-na-ree-VAHⁿ TOH | luh sam-DEE | ohⁿ-nay-VEET | la feel da-TAHⁿT | kee peu a-TEHⁿDR | ün vehⁿ-tenn duh pehr-SONN', ['ecoute', 'gerondif']),
  sent(1060, C, "Tout en se disant ravie du succès, Nadia s'inquiète : les pièces détachées coûtent de plus en plus cher, et les dons de vélos se font plus rares depuis l'automne.", 'While saying she is delighted with the success, Nadia is worried: spare parts cost more and more, and donations of bikes have grown scarcer since the autumn.', '/tu.tɑ̃ sə di.zɑ̃ ʁa.vi dy syk.sɛ na.dja sɛ̃.kjɛt le pjɛs de.ta.ʃe kut də ply.zɑ̃ ply ʃɛʁ e le dɔ̃ də ve.lo sə fɔ̃ ply ʁaʁ də.pɥi lo.tɔn/', 'too-tahⁿ suh dee-zahⁿ ra-VEE dü sük-SEH | na-DYA sehⁿ-KYET | lay pyes day-ta-SHAY | koot duh plü-zahⁿ plü SHEHR | ay lay dohⁿ duh vay-LOH | suh fohⁿ plü RAR | duh-pwee loh-TONN', ['ecoute', 'tout-en']),
  sent(1061, C, "La mairie, ayant reçu sa demande de subvention en mars, n'a toujours pas répondu ; Nadia, elle, a cessé d'attendre.", 'The town hall, having received her grant application in March, has still not replied; Nadia, for her part, has stopped waiting.', '/la mɛ.ʁi ɛ.jɑ̃ ʁə.sy sa də.mɑ̃d də syb.vɑ̃.sjɔ̃ ɑ̃ maʁs na tu.ʒuʁ pa ʁe.pɔ̃.dy na.dja ɛl a se.se da.tɑ̃dʁ/', 'la meh-REE | eh-yahⁿ ruh-SÜ | sa duh-mahⁿd duh süb-vahⁿ-SYOHⁿ ahⁿ MARS | na too-zhoor pa ray-pohⁿ-DÜ | na-DYA | EHL | a seh-say da-TAHⁿDR', ['ecoute', 'ayant'], FCVDR),
  sent(1062, C, 'En attendant, les bénévoles récupèrent des pièces sur des vélos abandonnés dans la rue, en accord avec la police municipale, qui les leur confie après trois mois.', 'Meanwhile, the volunteers salvage parts from bikes abandoned in the street, in agreement with the municipal police, who hand them over after three months.', '/ɑ̃.na.tɑ̃.dɑ̃ le be.ne.vɔl ʁe.ky.pɛʁ de pjɛs syʁ de ve.lo a.bɑ̃.dɔ.ne dɑ̃ la ʁy ɑ̃.na.kɔʁ a.vɛk la pɔ.lis my.ni.si.pal ki le lœʁ kɔ̃.fi a.pʁɛ tʁwa mwa/', 'ahⁿ-na-tahⁿ-DAHⁿ | lay bay-nay-VOL | ray-kü-PEHR day PYESS | sür day vay-LOH | a-bahⁿ-do-NAY | dahⁿ la RÜ | ahⁿ-na-KOR a-vek la po-lees mü-nee-see-PAL | kee lay luhr kohⁿ-FEE | a-preh trwa MWA', ['ecoute']),
  sent(1063, C, "C'était la chronique du matin ; demain, nous irons voir une couturière réparant les manteaux d'hiver des enfants du quartier.", "That was the morning slot; tomorrow we will visit a seamstress who repairs the neighbourhood children's winter coats.", '/se.tɛ la kʁɔ.nik dy ma.tɛ̃ də.mɛ̃ nu.zi.ʁɔ̃ vwaʁ yn ku.ty.ʁjɛʁ ʁe.pa.ʁɑ̃ le mɑ̃.to di.vɛʁ de.zɑ̃.fɑ̃ dy kaʁ.tje/', 'say-teh la kro-neek dü ma-TEHⁿ | duh-MEHⁿ | noo-zee-rohⁿ VWAR | ün koo-tü-RYEHR | ray-pa-RAHⁿ | lay mahⁿ-toh dee-VEHR | day-zahⁿ-fahⁿ dü kar-TYAY', ['ecoute', 'participe']),
];

/* ── ACT 8 · CAUSE, CONSÉQUENCE, BUT ─────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1064, S, "La mesure a été prise afin que la commune réduise sa facture d'électricité.", 'The measure was taken so that the town would cut its electricity bill.', '/la mə.zyʁ a e.te pʁiz a.fɛ̃ kə la kɔ.myn ʁe.dɥiz sa fak.tyʁ de.lɛk.tʁi.si.te/', 'la muh-ZÜR | a ay-tay PREEZ | a-fehⁿ kuh la ko-MÜN | ray-DWEEZ | sa fak-TÜR | day-lek-tree-see-TAY', ['but']),
  sent(1065, S, "Étant donné que peu de gens circulent la nuit, l'argument paraît fragile.", 'Given that few people are out and about at night, the argument looks weak.', '/e.tɑ̃ dɔ.ne kə pø də ʒɑ̃ siʁ.kyl la nɥi laʁ.ɡy.mɑ̃ pa.ʁɛ fʁa.ʒil/', 'ay-tahⁿ do-NAY | kuh peu duh ZHAHⁿ | seer-KÜL la NWEE | lar-gü-MAHⁿ | pa-reh fra-ZHEEL', ['cause']),
  sent(1066, S, 'La facture a tellement baissé que la commune a pu rénover deux aires de jeux.', 'The bill fell so much that the town was able to renovate two playgrounds.', '/la fak.tyʁ a tɛl.mɑ̃ be.se kə la kɔ.myn a py ʁe.nɔ.ve dø.zɛʁ də ʒø/', 'la fak-TÜR | a tel-mahⁿ beh-SAY | kuh la ko-MÜN | a pü ray-no-VAY | deu-zehr duh ZHEU', ['consequence'], FCVDR),
  sent(1067, S, "Les commerçants ont demandé que l'éclairage soit maintenu, de peur que les vitrines n'attirent les cambrioleurs.", 'The shopkeepers asked for the lighting to stay on, for fear the shop windows would attract burglars.', '/le kɔ.mɛʁ.sɑ̃ ɔ̃ də.mɑ̃.de kə le.klɛ.ʁaʒ swa mɛ̃t.ny də pœʁ kə le vi.tʁin na.tiʁ le kɑ̃.bʁi.jɔ.lœʁ/', 'lay ko-mehr-SAHⁿ | ohⁿ duh-mahⁿ-DAY | kuh lay-kleh-RAZH | swa mehⁿt-NÜ | duh PUHR | kuh lay vee-TREEN | na-TEER | lay kahⁿ-bree-yo-LUHR', ['but', 'peur']),
  sent(1068, S, 'La municipalité devrait adapter la règle, de sorte que chaque quartier puisse choisir ses horaires.', 'The council should adapt the rule so that each district can choose its hours.', '/la my.ni.si.pa.li.te də.vʁɛ a.dap.te la ʁɛɡl də sɔʁt kə ʃak kaʁ.tje pɥis ʃwa.ziʁ se.zɔ.ʁɛʁ/', 'la mü-nee-see-pa-lee-TAY | duh-vreh a-dap-TAY la REHGL | duh SORT | kuh shak kar-TYAY | pwees shwa-ZEER | say-zo-REHR', ['but']),
  sent(1069, S, "Les économies proviennent pour l'essentiel des quartiers périphériques.", 'The savings come mainly from the outlying districts.', '/le.ze.kɔ.nɔ.mi pʁɔ.vjɛn puʁ le.sɑ̃.sjɛl de kaʁ.tje pe.ʁi.fe.ʁik/', 'lay-zay-ko-no-MEE | pro-VYENN | poor lay-sahⁿ-SYEL | day kar-tyay pay-ree-fay-REEK', ['cause']),
  sent(1070, C, 'La route était fermée, de sorte que nous avons pris le train.', 'The road was closed, so we took the train.', '/la ʁut e.tɛ fɛʁ.me də sɔʁt kə nu.za.vɔ̃ pʁi lə tʁɛ̃/', 'la ROOT | ay-teh fehr-MAY | duh SORT | kuh noo-za-vohⁿ pree luh TREHⁿ', ['consequence']),
  sent(1071, C, "J'ai éteint la lumière pour mieux dormir.", 'I turned off the light to sleep better.', '/ʒe e.tɛ̃ la ly.mjɛʁ puʁ mjø dɔʁ.miʁ/', 'zhay ay-TEHⁿ | la lü-MYEHR | poor myeu dor-MEER', ['but']),
  sent(1072, C, "À cause du verglas, l'école a fermé ses portes.", 'Because of the black ice, the school closed its doors.', '/a koz dy vɛʁ.ɡla le.kɔl a fɛʁ.me se pɔʁt/', 'a kohz dü vehr-GLA | lay-KOL a fehr-MAY say PORT', ['cause']),
  sent(1073, S, "Beaucoup d'élèves révisent la nuit. Or, c'est surtout en dormant que la mémoire se consolide.", 'Many pupils revise at night. Yet it is above all while you sleep that memory is consolidated.', '/bo.ku de.lɛv ʁe.viz la nɥi ɔʁ sɛ syʁ.tu ɑ̃ dɔʁ.mɑ̃ kə la me.mwaʁ sə kɔ̃.sɔ.lid/', 'boh-koo day-LEHV | ray-veez la NWEE | OR | seh sür-TOO | ahⁿ dor-MAHⁿ | kuh la may-MWAR | suh kohⁿ-so-LEED', ['or']),
];

/* ── ACT 9 · CONCÉDER, RESTREINDRE, NIER ─────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1074, S, "Bien que la mise en scène soit précise, le spectacle ne décolle qu'au deuxième acte.", 'Although the staging is precise, the show only takes off in the second act.', '/bjɛ̃ kə la mi.zɑ̃ sɛn swa pʁe.siz lə spɛk.takl nə de.kɔl ko dø.zjɛ.makt/', 'byehⁿ kuh la mee-zahⁿ SENN | swa pray-SEEZ | luh spek-TAKL | nuh day-KOL | koh deu-zyeh-MAKT', ['concession', 'restriction']),
  sent(1075, S, "Quelque talent qu'aient les comédiens, ils ne peuvent rien contre ce texte.", 'However talented the actors may be, they can do nothing against this script.', '/kɛl.kə ta.lɑ̃ kɛ le kɔ.me.djɛ̃ il nə pœv ʁjɛ̃ kɔ̃tʁ sə tɛkst/', 'kehl-kuh ta-LAHⁿ | keh lay ko-may-DYEHⁿ | eel nuh puhv RYEHⁿ | kohⁿtr suh TEKST', ['reconnaitre'], FCR),
  sent(1076, S, "Tout imparfait qu'il est, le spectacle réserve de vrais moments de grâce.", 'Imperfect as it is, the show has some real moments of grace.', '/tu.tɛ̃.paʁ.fɛ ki.lɛ lə spɛk.takl ʁe.zɛʁv də vʁɛ mɔ.mɑ̃ də ɡʁas/', 'too-tehⁿ-par-FEH kee-LEH | luh spek-TAKL | ray-ZEHRV | duh vreh mo-MAHⁿ duh GRAS', ['concession']),
  sent(1077, S, "On n'avait plus rien vu d'aussi juste sur cette scène depuis des années.", 'Nothing so true had been seen on this stage for years.', '/ɔ̃ na.vɛ ply ʁjɛ̃ vy do.si ʒyst syʁ sɛt sɛn də.pɥi de.za.ne/', 'ohⁿ na-veh plü RYEHⁿ VÜ | doh-see ZHÜST | sür set SENN | duh-pwee day-za-NAY', ['negation']),
  sent(1078, S, 'Seule la comédienne principale parvient à faire exister son personnage.', 'Only the lead actress manages to bring her character to life.', '/sœl la kɔ.me.djɛn pʁɛ̃.si.pal paʁ.vjɛ̃ a fɛʁ ɛɡ.zis.te sɔ̃ pɛʁ.sɔ.naʒ/', 'suhl la ko-may-DYENN prehⁿ-see-PAL | par-VYEHⁿ | a fehr eg-zees-TAY | sohⁿ pehr-so-NAZH', ['restriction']),
  sent(1079, S, "On n'y apprend guère plus que leurs noms.", 'You learn hardly more than their names.', '/ɔ̃ ni a.pʁɑ̃ ɡɛʁ ply kə lœʁ nɔ̃/', 'ohⁿ nee a-PRAHⁿ | gehr PLÜ | kuh luhr NOHⁿ', ['guere']),
  sent(1080, S, 'Quand bien même on serait sensible à ce lyrisme, on regrettera la fin.', 'Even if one were moved by this lyricism, one will regret the ending.', '/kɑ̃ bjɛ̃ mɛm ɔ̃ sə.ʁɛ sɑ̃.sibl a sə li.ʁism ɔ̃ ʁə.ɡʁɛ.tə.ʁa la fɛ̃/', 'kahⁿ byehⁿ MEHM | ohⁿ suh-reh sahⁿ-SEEBL | a suh lee-REESM | ohⁿ ruh-greh-tuh-RA la FEHⁿ', ['concession']),
];

/* ── ACT 10 · METTRE EN RELIEF, EFFACER L'ACTEUR ─────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1081, C, "C'est la directrice qui a tout bloqué.", 'It was the head teacher who blocked everything.', '/sɛ la di.ʁɛk.tʁis ki a tu blɔ.ke/', 'seh la dee-rek-TREES | kee a too blo-KAY', ['relief']),
  sent(1082, C, "Les professeurs, eux, étaient d'accord avec nous.", 'The teachers, for their part, agreed with us.', '/le pʁɔ.fɛ.sœʁ ø e.tɛ da.kɔʁ a.vɛk nu/', 'lay pro-feh-SUHR | EU | ay-teh da-KOR | a-vek NOO', ['relief']),
  sent(1083, S, "Il a été proposé de solliciter le soutien de l'association des parents.", "It was proposed to seek the support of the parents' association.", '/i.la e.te pʁɔ.po.ze də sɔ.li.si.te lə su.tjɛ̃ də la.sɔ.sja.sjɔ̃ de pa.ʁɑ̃/', 'ee-la ay-tay pro-poh-ZAY | duh so-lee-see-TAY | luh soo-TYEHⁿ | duh la-so-sya-SYOHⁿ day pa-RAHⁿ', ['impersonnel']),
  sent(1084, S, 'Il est apparu que la sortie ne pouvait être maintenue sans une participation des familles.', 'It became clear that the trip could not go ahead without a contribution from families.', '/i.lɛ.ta.pa.ʁy kə la sɔʁ.ti nə pu.vɛ.tɛtʁ mɛ̃t.ny sɑ̃.zyn paʁ.ti.si.pa.sjɔ̃ de fa.mij/', 'ee-leh-ta-pa-RÜ | kuh la sor-TEE | nuh poo-veh-tehtr mehⁿt-NÜ | sahⁿ-zün par-tee-see-pa-SYOHⁿ | day fa-MEEY', ['impersonnel']),
  sent(1085, S, 'Il reste à déterminer le montant demandé aux familles.', 'The amount to be asked of families remains to be decided.', '/il ʁɛst a de.tɛʁ.mi.ne lə mɔ̃.tɑ̃ də.mɑ̃.de o fa.mij/', 'eel REST | a day-tehr-mee-NAY | luh mohⁿ-TAHⁿ | duh-mahⁿ-day oh fa-MEEY', ['impersonnel']),
  sent(1086, C, "C'est moi qui ai proposé la sortie.", 'I am the one who suggested the trip.', '/sɛ mwa ki e pʁɔ.po.ze la sɔʁ.ti/', 'seh MWA | kee ay pro-poh-ZAY | la sor-TEE', ['relief'], FCVDR),
  sent(1087, S, 'Il a été décidé que la sortie serait annulée.', 'It was decided that the trip would be cancelled.', '/i.la e.te de.si.de kə la sɔʁ.ti sə.ʁɛ a.ny.le/', 'ee-la ay-tay day-see-DAY | kuh la sor-TEE | suh-reh a-nü-LAY', ['impersonnel']),
  sent(1088, S, "Il n'est pas exclu que la région paie une partie des frais.", 'It cannot be ruled out that the region will pay part of the costs.', '/il nɛ pa.zɛks.kly kə la ʁe.ʒjɔ̃ pɛ yn paʁ.ti de fʁɛ/', 'eel neh pa-zeks-KLÜ | kuh la ray-ZHYOHⁿ PEH | ün par-tee day FREH', ['impersonnel']),
  sent(1089, S, 'Il a été décidé de réduire le budget des sorties.', 'It was decided to cut the budget for trips.', '/i.la e.te de.si.de də ʁe.dɥiʁ lə byd.ʒɛ de sɔʁ.ti/', 'ee-la ay-tay day-see-DAY | duh ray-DWEER | luh büd-ZHEH day sor-TEE', ['impersonnel']),
];

/* ── ACT 11 · LE REGISTRE DE L'ÉCRIT ─────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1090, S, 'Le télétravail présente un avantage difficilement contestable : il supprime les trajets quotidiens.', 'Remote work offers an advantage that is hard to dispute: it does away with the daily commute.', '/lə te.le.tʁa.vaj pʁe.zɑ̃t œ̃.na.vɑ̃.taʒ di.fi.sil.mɑ̃ kɔ̃.tɛs.tabl il sy.pʁim le tʁa.ʒɛ kɔ.ti.djɛ̃/', 'luh tay-lay-tra-VYE | pray-ZAHⁿT | uhⁿ-na-vahⁿ-TAZH | dee-fee-seel-mahⁿ kohⁿ-tes-TABL | eel sü-PREEM | lay tra-zheh ko-tee-DYEHⁿ', ['precision']),
  sent(1091, S, "Cet avantage se double d'un bénéfice environnemental, encore qu'il soit moins net qu'on ne le dit.", 'This advantage comes with an environmental benefit, though it is less clear-cut than people say.', '/sɛ.ta.vɑ̃.taʒ sə dubl dœ̃ be.ne.fis ɑ̃.vi.ʁɔn.mɑ̃.tal ɑ̃.kɔʁ kil swa mwɛ̃ nɛt kɔ̃ nə lə di/', 'seh-ta-vahⁿ-TAZH | suh doobl duhⁿ bay-nay-FEES | ahⁿ-vee-ronn-mahⁿ-TAL | ahⁿ-kor keel swa mwehⁿ NET | kohⁿ nuh luh DEE', ['nuance']),
  sent(1092, S, "Le télétravail ne saurait devenir la norme qu'à condition d'être pensé comme une alternance.", 'Remote work could only become the norm if it were conceived as an alternation.', '/lə te.le.tʁa.vaj nə so.ʁɛ də.və.niʁ la nɔʁm ka kɔ̃.di.sjɔ̃ dɛtʁ pɑ̃.se kɔ.myn al.tɛʁ.nɑ̃s/', 'luh tay-lay-tra-VYE | nuh soh-REH | duh-vuh-neer la NORM | ka kohⁿ-dee-SYOHⁿ | dehtr pahⁿ-SAY | ko-mün al-tehr-NAHⁿS', ['implicite']),
  sent(1093, S, 'Un salarié qui ne voit plus ses collègues perd les échanges informels.', 'An employee who no longer sees their colleagues loses the informal exchanges.', '/œ̃ sa.la.ʁje ki nə vwa ply se kɔ.lɛɡ pɛʁ le.ze.ʃɑ̃ʒ ɛ̃.fɔʁ.mɛl/', 'uhⁿ sa-la-RYAY | kee nuh vwa plü say ko-LEHG | pehr lay-zay-SHAHⁿZH | ehⁿ-for-MEL', ['precision'], FCVDR),
  sent(1094, C, 'Je pense que le télétravail est une bonne chose.', 'I think remote work is a good thing.', '/ʒə pɑ̃s kə lə te.le.tʁa.vaj ɛ.tyn bɔn ʃoz/', 'zhuh PAHⁿS | kuh luh tay-lay-tra-VYE | eh-tün bonn SHOHZ', ['premier-jet', 'contre-exemple'], RECO),
];

/* ── ACT 12 · TON PLAN DE TRAVAIL ────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1095, C, 'Mes points forts sont la chronologie du récit et le choix du mode.', 'My strengths are the timeline of a narrative and the choice of mood.', '/me pwɛ̃ fɔʁ sɔ̃ la kʁɔ.nɔ.lɔ.ʒi dy ʁe.si e lə ʃwa dy mɔd/', 'may pwehⁿ FOR | sohⁿ la kro-no-lo-ZHEE dü ray-SEE | ay luh shwa dü MOD', ['plan']),
  sent(1096, C, "Mon premier point faible concerne l'hypothèse au passé.", 'My first weak spot concerns hypotheses about the past.', '/mɔ̃ pʁə.mje pwɛ̃ fɛbl kɔ̃.sɛʁn li.pɔ.tɛz o pa.se/', 'mohⁿ pruh-myay pwehⁿ FEHBL | kohⁿ-SEHRN | lee-po-TEHZ oh pa-SAY', ['plan']),
  sent(1097, C, 'Je reprendrai la leçon consacrée aux si mixtes.', 'I will go back over the lesson on mixed si clauses.', '/ʒə ʁə.pʁɑ̃.dʁɛ la lə.sɔ̃ kɔ̃.sa.kʁe o si mikst/', 'zhuh ruh-prahⁿ-DREH | la luh-SOHⁿ | kohⁿ-sa-kray oh see MEEKST', ['plan']),
  sent(1098, C, "D'ici la fin du mois, j'aurai relu ces trois leçons.", 'By the end of the month, I will have reread these three lessons.', '/di.si la fɛ̃ dy mwa ʒo.ʁɛ ʁə.ly se tʁwa lə.sɔ̃/', 'dee-see la fehⁿ dü MWA | zho-reh ruh-LÜ | say trwa luh-SOHⁿ', ['plan'], FCVDR),
  sent(1099, S, 'Au C1, je ne cherche plus seulement à être compris, mais à être exact.', 'At C1, I am no longer just trying to be understood, but to be exact.', '/o se.œ̃ ʒə nə ʃɛʁʃ ply sœl.mɑ̃ a ɛtʁ kɔ̃.pʁi mɛ a ɛ.tʁɛɡ.zakt/', 'oh say-UHⁿ | zhuh nuh shehrsh plü suhl-MAHⁿ | a ehtr kohⁿ-PREE | meh a eh-treg-ZAKT', ['plan', 'c1']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** An act's authored rows that carry the `dictation` drill. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ANCHOR TEXTS (all « texte original écrit pour la leçon »)
 *
 *  C1 length: readings of about 250 to 350 words, unsimplified. The act 7
 *  anchor is the listening built from ACT7_ROWS (about 300 words, two
 *  minutes). Word counts are measured by the validate script.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the tutor's handout on the audit. */
export const CADRE_TEXT =
  "Fiche remise par Hélène Brassard, conseillère pédagogique à l'Institut Verlune, à Montréal, au premier cours de niveau C1. Faire le point avant d'avancer. Tu arrives au C1 avec presque toute la grammaire du français. Le B2 t'a donné les temps qui situent un fait par rapport à un autre, les modes qui disent si tu affirmes ou si tu regardes, les tournures qui condensent une idée, les liens qui articulent un raisonnement et les registres qui conviennent à chaque lecteur. Il ne te manque donc pas de règles. Ce qui te manque, souvent, c'est la sûreté : la même règle qui tient dans un exercice cède quand tu écris vite, quand le sujet te passionne, quand tu as peur de te tromper. Le Cadre européen commun de référence décrit, au niveau C1, une correction grammaticale élevée et constante, où les erreurs sont rares et difficiles à repérer. Ce n'est pas une question de quantité. Un texte de niveau C1 n'emploie pas plus de structures qu'un texte de niveau B2 ; il emploie la structure exacte, celle qui dit précisément ce que l'auteur veut dire, avec la nuance juste, et parfois sans le dire tout à fait. Nous allons donc faire le point, famille par famille : le temps et les modes, l'art de condenser, les relations logiques, puis le registre. Pour chaque structure, tu te poseras une seule question : dois-je la produire, à l'écrit comme à l'oral, ou me suffit-il de la reconnaître quand je la lis ? Et quand une structure à produire te résiste encore, tu la noteras comme un point faible, avec la leçon qui permet de la reprendre. À la fin, tu rédigeras ton propre plan de travail. Il ne sera pas jugé sur sa longueur, mais sur sa précision : un point faible bien nommé vaut mieux que dix inquiétudes vagues.";

/** Act 2: a chronicle in a regional magazine, three clocks. */
export const MAISON_TEXT =
  "Chronique parue dans un magazine régional. Quand mes parents ont vendu la maison de la rue des Tanneurs, à Sherbrooke, nous y habitions depuis vingt-deux ans. Ma mère l'avait achetée seule, l'année où mon père était parti travailler dans le Nord, et elle avait refait la toiture avant que les banques acceptent de lui prêter un sou. Je n'avais jamais compris pourquoi elle tenait tant à ce toit. Je l'ai compris le jour où, après avoir signé l'acte de vente, elle est restée une heure assise dans la voiture, sans démarrer. Elle avait passé là la moitié de sa vie, et elle venait de s'en séparer en trois minutes. Depuis que la maison appartient à un jeune couple, je passe parfois dans la rue. Les nouveaux propriétaires ont abattu le vieil érable que mon grand-père avait planté ; ils avaient sans doute leurs raisons. Le soir où je l'ai appris, j'ai appelé ma mère ; elle avait déjà vu les photos, et elle n'a rien dit. Au moment où j'écris ces lignes, ils auront probablement repeint la façade, puisque le chantier avait commencé au printemps. Ma fille, elle, ne connaîtra cette maison que par mes récits. Quand elle aura l'âge que j'avais en la quittant, la rue aura changé de visage, et les tanneurs dont elle porte le nom auront disparu de toutes les mémoires. Je lui raconte donc tout, dans l'ordre : ce que ma mère avait fait avant ma naissance, ce que nous avons vécu ensemble, ce qui restera quand nous ne serons plus là. Tant que je n'aurai pas tout écrit, je ne vendrai pas les cartons du grenier. Faire le point sur une maison, au fond, c'est remettre chaque souvenir à sa place sur la ligne du temps : ce qui était déjà fait, ce qui s'est passé, ce qui sera accompli quand on regardera en arrière.";

/** Act 3: a weekly column, the tram that was dismantled. */
export const TRAMWAY_TEXT =
  "Billet paru dans Le Courrier de la Rive, un hebdomadaire de quartier. Et si l'on avait gardé le tramway ? La question revient chaque fois qu'un autobus reste coincé rue Principale. En 1962, la ville a démonté ses rails au nom de la modernité. Les voitures se multipliaient, l'essence ne coûtait presque rien, et personne ne voulait d'un moyen de transport qui rappelait l'avant-guerre. Si les élus de l'époque avaient patienté vingt-cinq ans, ils auraient vu revenir le tramway dans plusieurs villes de France, et nous aurions aujourd'hui un réseau qui ferait l'envie de nos voisins. Facile à dire, après coup. Selon un rapport commandé par la mairie l'an dernier, une seule ligne coûterait près de deux cents millions de dollars, et les travaux dureraient cinq ans. Le chiffre aurait d'ailleurs été revu à la hausse depuis, mais personne ne l'a confirmé. On aurait tort, pourtant, de traiter la nostalgie comme une simple faiblesse. Sans ces rails arrachés, le centre-ville aurait-il perdu ses commerces aussi vite ? Probablement pas. Les terrasses et les rues piétonnes que la ville tente aujourd'hui de créer à grands frais se seraient sans doute installées d'elles-mêmes autour des arrêts. Même si le tramway n'avait pas tout sauvé, il aurait au moins freiné l'exode vers les centres commerciaux de la périphérie. Les élus de 1962 auraient dû écouter les commerçants, qui leur avaient écrit une lettre restée sans réponse. Mais les regrets ne construisent pas de lignes. Le passé ne se rejoue pas, et un tramway ne se décrète pas sur la foi d'une photo jaunie. Si la ville veut vraiment un tramway, qu'elle le dise, qu'elle en chiffre le coût et qu'elle consulte les habitants. Si j'étais conseiller municipal, je poserais d'abord une question simple : où en serions-nous aujourd'hui si nous avions écouté, il y a soixante ans, ceux qui nous mettaient en garde ?";

/** Act 4: an open letter from the library users' committee. */
export const LETTRE_TEXT =
  "Lettre ouverte au conseil d'administration de la médiathèque Lise-Aubin. Mesdames et Messieurs, nous avons appris avec surprise que la médiathèque fermerait désormais le dimanche. Nous regrettons que cette décision ait été prise sans que les usagers aient été consultés, et nous doutons qu'elle permette les économies annoncées. Il est probable que le budget de l'an prochain sera serré ; personne ne le conteste. Nous savons que le conseil doit faire des choix difficiles. Mais bien que le dimanche ne représente qu'un jour d'ouverture sur six, il attire près d'un tiers des visiteurs, selon vos propres chiffres. C'est le seul jour où beaucoup de familles puissent venir ensemble, et le seul où les étudiants qui travaillent en semaine trouvent une place assise. Pour beaucoup d'entre eux, la médiathèque est moins un lieu de prêt qu'un lieu de travail, chauffé, calme et gratuit, qu'aucun autre équipement du quartier ne remplace. Nous ne croyons pas que la fermeture soit la seule solution. Nous cherchons, avec vous, une formule qui puisse préserver l'accueil du dimanche tout en réduisant les coûts : une ouverture l'après-midi seulement, par exemple, ou le recours à des bénévoles pour la salle de lecture. Il faudrait simplement que le conseil accepte d'en discuter avant que la mesure entre en vigueur. Après que la bibliothèque centrale a fermé ses portes le dimanche, il y a trois ans, la fréquentation du lundi n'a pas augmenté : les visiteurs du dimanche ne sont pas revenus un autre jour. Nous espérons que vous tiendrez compte de cette expérience. Nous demandons enfin que les chiffres de fréquentation de chaque jour soient publiés, afin que chacun puisse juger sur pièces. C'est la décision la plus lourde que le conseil ait prise depuis l'ouverture du bâtiment. Nous souhaitons qu'elle soit au moins expliquée. Veuillez agréer, Mesdames et Messieurs, l'expression de nos salutations distinguées. Le comité des usagers.";

/** Act 5: a pastiche of a nineteenth-century novel (NOT an extract). */
export const NOTAIRE_TEXT =
  "Récit à la manière d'un roman du dix-neuvième siècle. Le notaire arriva un peu avant minuit. Bien qu'il fût tard et que la pluie n'eût point cessé depuis le matin, il avait tenu à venir lui-même. Dès qu'il eut refermé la porte, il ôta son chapeau, salua la veuve d'un signe de tête et demanda qu'on lui apportât une lampe. La servante, qui l'avait vu passer sous la fenêtre, s'empressa d'obéir. Madame Desrosiers ne dit rien. Elle avait reconnu son pas dans l'escalier. Elle craignait qu'il ne fût venu lui annoncer la vente de la maison, et elle attendit qu'il eût posé ses papiers sur la table pour s'asseoir à son tour. Le notaire parla longtemps. Il cherchait ses mots, revenait sur un chiffre, s'excusait d'un détail, comme s'il eût voulu retarder le moment de conclure. Il expliqua que son mari avait laissé des dettes, qu'il eût fallu les régler l'hiver précédent, et que les créanciers ne patienteraient plus. Lorsqu'il eut fini, un long silence tomba sur la pièce. On n'entendait que la pluie contre les volets. Quelque part dans la maison, une horloge sonna la demie. La veuve se leva, alla jusqu'à la fenêtre et resta un moment immobile. Puis elle se retourna. Son visage n'exprimait rien de ce qu'elle avait dû ressentir ; seule sa main, posée sur le dossier d'une chaise, trahissait l'effort qu'elle faisait pour ne point trembler. « Vous eussiez pu m'écrire, monsieur, dit-elle enfin. Vous avez préféré venir. Je vous en sais gré. » Le notaire, qui s'était attendu à des larmes, ne sut que répondre. Il rassembla ses feuilles, hésita, et sortit sans qu'elle eût ajouté un mot. Quelques semaines plus tard, la maison était vendue ; mais nul, dans le village, ne vit jamais pleurer Madame Desrosiers. On raconta seulement qu'elle avait, le jour du départ, fermé elle-même les volets de chaque pièce.";

/** Act 6: the summary of an evaluation report on a bike-share scheme. */
export const SYNTHESE_TEXT =
  "Synthèse d'un rapport d'évaluation remis à la Ville par le cabinet Tessère. Objet : bilan de la première année du service de vélos en libre-service. La mise en service des quarante stations, en avril, s'est faite sans difficulté majeure. Après avoir connu un démarrage lent, la fréquentation a nettement progressé à partir de juin, pour atteindre en moyenne mille deux cents trajets par jour à la fin de l'été. Cette progression s'explique en grande partie par l'ouverture d'une nouvelle piste cyclable sur le boulevard de l'Est et par la baisse du tarif étudiant. Les enquêtes menées auprès des usagers confirment cette lecture : la sécurité du trajet et le prix arrivent en tête des raisons citées pour adopter le service. Plusieurs difficultés subsistent néanmoins. L'entretien des vélos, confié à un prestataire extérieur, a souffert de retards répétés : faute de pièces de rechange, un vélo sur cinq a été immobilisé pendant plus d'une semaine. Par ailleurs, la répartition des vélos entre les stations reste inégale ; les stations situées dans le haut de la ville se vident le matin sans être réapprovisionnées avant le soir. Ce déséquilibre décourage précisément les usagers qui en auraient le plus besoin, ceux qui travaillent en horaires décalés. Le cabinet recommande donc trois mesures : le recrutement de deux techniciens à temps plein, la constitution d'un stock de pièces pour trois mois, et le recours à une camionnette chargée de rééquilibrer les stations aux heures de pointe. La Ville a fait chiffrer ces mesures par ses services techniques ; leur coût annuel est estimé à trois cent mille dollars. Ce montant reste inférieur aux recettes supplémentaires attendues si la fréquentation se maintient. En conclusion, le service a trouvé son public. Sa pérennité dépendra de la capacité de la Ville à en améliorer la fiabilité sans que les tarifs augmentent pour les usagers réguliers.";

/** Act 8: an opinion piece on switching off street lighting at night. */
export const ECLAIRAGE_TEXT =
  "Tribune parue dans le journal en ligne d'une petite ville. Depuis janvier, l'éclairage public est éteint entre une heure et cinq heures du matin dans tous les quartiers résidentiels. La mesure a été prise afin que la commune réduise sa facture d'électricité, et dans le but, plus discret, de protéger la faune nocturne. Les chauves-souris et les insectes pollinisateurs, désorientés par la lumière artificielle, en seraient les premiers bénéficiaires, si l'on en croit les associations de protection de la nature. Les opposants à la mesure affirment qu'elle met les piétons en danger. Or, d'après les chiffres de la police municipale, le nombre d'accidents nocturnes n'a pas augmenté depuis l'extinction. Étant donné que peu de gens circulent à pied à trois heures du matin, l'argument paraît fragile. Il ne s'agit pas de nier le sentiment d'insécurité, réel chez certains habitants, mais de le distinguer d'un danger mesuré. La mesure a, en revanche, des effets bien réels sur le budget. La facture a tellement baissé que la commune a pu financer, dès le printemps, la rénovation de deux aires de jeux. Les économies réalisées proviennent pour l'essentiel des quartiers périphériques, où les lampadaires sont les plus anciens. Faut-il pour autant éteindre aussi les rues commerçantes ? Je ne le crois pas. Les commerçants du centre ont demandé que l'éclairage y soit maintenu, de peur que les vitrines n'attirent les cambrioleurs, et leur inquiétude mérite d'être entendue, dans la mesure où les deux vols signalés cet hiver ont eu lieu dans l'obscurité. La municipalité devrait donc adapter la règle, de sorte que chaque quartier puisse choisir ses horaires après consultation. Une telle souplesse coûterait peu, si bien que personne n'aurait de raison sérieuse de la refuser. Le débat a été mal posé : la question n'est pas de savoir s'il faut éteindre, mais où, et pour qui.";

/** Act 9: a theatre review. */
export const CRITIQUE_TEXT =
  "Critique parue dans une revue culturelle. Certes, le Théâtre de l'Anse-Grise n'a jamais manqué d'audace. Néanmoins, sa nouvelle création, une adaptation de trois heures d'un roman fleuve, met à l'épreuve la patience la plus solide. On attendait beaucoup de cette troupe, qui avait signé la saison dernière l'un des spectacles les plus vifs de la ville ; on en sort partagé. Bien que la mise en scène soit précise, le spectacle ne décolle qu'au deuxième acte. Le premier ne fait qu'installer des personnages dont on ne saura presque rien : on n'y apprend guère plus que leurs noms. Quelque talent qu'aient les comédiens, et ils en ont, ils ne peuvent rien contre un texte qui piétine. Les scènes s'enchaînent, mais l'intrigue tarde à se nouer, et les dialogues, souvent brillants pris isolément, ne mènent nulle part. Tout imparfait qu'il est, le spectacle réserve pourtant de vrais moments de grâce. Seule la comédienne principale, Inès Morvan, parvient à faire exister son personnage dès la première scène, et la longue tirade du troisième acte, quoique trop écrite, est saisissante. La scénographie, faite de simples panneaux de bois que les comédiens déplacent à vue, sert le texte bien mieux qu'il ne le mérite. On n'avait plus rien vu d'aussi juste sur cette scène depuis des années. Quand bien même on serait sensible à ce lyrisme, on regrettera la fin, qui n'explique nullement ce que le spectacle avait laissé en suspens. Personne, dans la salle, n'a semblé comprendre pourquoi le rideau tombait si tôt, sauf peut-être le metteur en scène. Ce dernier, interrogé à la sortie, n'a guère éclairé le public. Faut-il y aller ? Oui, à moins de détester les longueurs, et à condition de rester jusqu'au deuxième acte. Encore que le prix des places, si raisonnable qu'il paraisse, ne soit guère adapté à un spectacle aussi inégal.";

/** Act 10: two accounts of the same school board meeting. */
export const REUNION_TEXT =
  "Deux récits d'une même réunion du conseil d'établissement d'un collège. Le récit de Samuel, parent d'élève, le soir même, à sa voisine : « Moi, je te le dis, c'est la directrice qui a tout bloqué. Nous, on voulait garder la sortie au musée ; elle, elle a sorti le budget, et là, plus personne n'a rien dit. Les professeurs, eux, étaient d'accord avec nous, mais c'est elle qui décide, au fond. Ce que je n'ai pas compris, c'est pourquoi personne n'a proposé de faire payer un peu les familles. Et les élèves, eux, on ne leur a même pas demandé leur avis. » Le compte rendu officiel, diffusé le lendemain : « Il a été rappelé en ouverture de séance que le budget des sorties scolaires avait été réduit de vingt pour cent. Il est apparu, au cours des échanges, que la sortie au musée ne pouvait être maintenue sans une participation des familles. Il a été proposé de solliciter le soutien de l'association des parents. Il a également été suggéré de remplacer la sortie par la visite d'un musée plus proche, ce qui réduirait le coût du transport. Il n'est pas exclu qu'une subvention de la région permette de couvrir une partie des frais ; il convient donc d'attendre sa réponse avant de trancher. Il reste à déterminer le montant qui pourrait être demandé aux familles. La séance a été levée à vingt et une heures. » Les deux textes racontent la même soirée. Le premier met des personnes en avant, avec des pronoms toniques et des tournures en c'est… qui ; le second efface presque tous les acteurs derrière des tournures impersonnelles. Aucun n'est faux : chacun sert un lecteur différent. Le premier gagne en vie ce qu'il perd en exactitude ; le second gagne en neutralité ce qu'il perd en clarté. Mais le compte rendu laisse dans l'ombre une question que Samuel, lui, pose ouvertement : qui a décidé ?";

/** Act 11: a paragraph of an essay, before and after revision. */
export const TELETRAVAIL_TEXT =
  "Un paragraphe d'essai, avant et après relecture. Le sujet : le télétravail doit-il devenir la norme ? L'exercice vient d'un atelier d'écriture de niveau C1. Le premier jet : « Je pense que le télétravail est une bonne chose. Le télétravail permet de gagner du temps, parce qu'on ne prend plus les transports. Le télétravail est aussi bon pour l'environnement. Mais le télétravail isole les salariés. Donc il faut faire attention. » La version revue : « Le télétravail présente, à première vue, un avantage difficilement contestable : il supprime les trajets quotidiens, et avec eux une fatigue que les enquêtes tendent à sous-estimer. Cet avantage se double d'un bénéfice environnemental, encore qu'il soit moins net qu'on ne le dit, dans la mesure où le chauffage des logements compense en partie la baisse des déplacements. Reste une limite que ses partisans évoquent rarement : l'isolement. Un salarié qui ne voit plus ses collègues perd ces échanges informels où se règlent, souvent sans qu'on y prenne garde, bien des malentendus. Les salariés les plus jeunes, qui apprennent le métier en observant leurs aînés, en sont sans doute les premières victimes. Le télétravail ne saurait donc devenir la norme qu'à condition d'être pensé comme une alternance, et non comme une rupture. » Ce qui a changé ? Le « je pense que » a disparu, et pourtant la position de l'auteur est plus nette. Les répétitions ont laissé la place à des reprises : cet avantage, ses partisans. Chaque affirmation est dosée : tendent à, encore qu'il soit moins net. Rien n'y est savant pour le plaisir : chaque mot y fait simplement son travail. Et la dernière phrase dit, sans le dire, que le télétravail à temps plein serait une erreur. C'est cela, l'implicite : le lecteur conclut lui-même. C'est aussi ce que tu chercheras dans tes propres textes : non pas des tournures rares, mais la tournure exacte.";

/** Act 12: another learner's plan, the model of the task. */
export const PLAN_TEXT =
  "Le plan de travail de Lina, rédigé après son bilan. Il tient en une page, et il lui servira jusqu'à l'examen. Mes points forts. Je maîtrise la chronologie du récit : le plus-que-parfait et le futur antérieur me viennent sans effort, y compris dans un discours rapporté. Quand je raconte, chaque fait se place sur la bonne horloge, sans que j'y pense. Je choisis sans hésiter entre le subjonctif et l'indicatif après les verbes d'opinion et les conjonctions les plus courantes. Enfin, je reconnais le passé simple et le subjonctif imparfait à la lecture, ce qui me suffit au C1. Mes points faibles. Le premier concerne l'hypothèse au passé : quand j'écris vite, je mélange encore les temps des si mixtes. J'écris par exemple « si j'avais accepté ce poste, j'aurais habité à Genève aujourd'hui », alors que la conséquence porte sur le présent. L'erreur ne gêne pas la compréhension, mais elle trahit le niveau. Je reprendrai donc la leçon 4 du B2, et je retiendrai : « Si j'avais accepté ce poste, j'habiterais à Genève aujourd'hui. » Le deuxième touche à la concession. J'emploie encore « malgré que » à l'écrit, et je confonds quoique et quoi que. La leçon 16 du B2 m'aidera à choisir : « Quoique la salle soit pleine, on trouvera une place. » Le troisième est plus discret : je n'ose pas condenser. Par peur d'alourdir mes phrases, je les allonge. Mes rapports enchaînent des propositions là où un nom suffirait. Je retravaillerai la leçon 10 du B2, avec cet exemple : « La baisse des inscriptions inquiète la direction. » Mon objectif. D'ici la fin du mois, j'aurai relu ces trois leçons et réécrit deux de mes anciens textes en appliquant ces corrections. Je relirai aussi chaque texte avec une seule question : ai-je dit exactement ce que je voulais dire ? Je saurai alors si ces points faibles en sont encore.";
