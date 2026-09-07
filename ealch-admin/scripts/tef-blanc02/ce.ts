// TEF Canada blanc-02 — Compréhension écrite, blocks A to C.
//
//   A  7 · documents de la vie quotidienne · 7 documents, 1 question each
//   B  6 · phrases lacunaires              · 6 single sentences, 1 gap each
//   C  4 · textes lacunaires               · 2 short texts, 2 gaps each
//
// Blocks D+E, F and G are in ce-fg.ts.
//
// CE-B and CE-C carry NO topic from the bank, on purpose: gap-fill tests
// grammar and collocation, not content, so the sentences are written to the
// grammar point. The targets are drawn from what the corpus already teaches —
// prepositions-essentielles, pronoms-essentiels, connecteurs-logiques,
// negation-et-restriction, recits-au-passe, comparaisons — so a miss routes to
// a lesson that exists.
//
// KEY ORDER: authored key-first, scattered by finalise.ts before the paper is
// written. See co.ts.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_CLOSED, taskId, ITEMS, uniq } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ Block A — Documents de la vie quotidienne ═══════════════════════════ */
//
// Seven short authentic-shaped documents, one question each. The difficulty is
// not vocabulary: it is that the answer sits next to a number or a condition
// that looks like the answer. Every distractor here is a figure that appears in
// the document.
//
// SELF-VERIFY (A1–A7): every distractor is drawn from the document itself, so
// none can be eliminated without reading. No key is the longest option. Prices
// and dates are internally consistent within each document.

export const CE_A: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 600,
  targetItemIds: uniq(
    ITEMS.hebergement, ITEMS.rechercheEmploi, ITEMS.systemeDeSante,
    ITEMS.corps, ITEMS.deplacements, ITEMS.vetements, ITEMS.ecole
  ),
  parts: [
    {
      label: 'Document 1 · sous-location',
      text:
        'SOUS-LOCATION · Studio meublé, 26 m², quartier des Tilleuls.\n' +
        'Du 1er octobre au 31 décembre, trois mois fermes.\n' +
        '540 € par mois. Charges 45 € en plus. Dépôt de garantie : 540 €.\n' +
        'Accord écrit du propriétaire fourni. Visites en semaine, après 18 h.',
      items: [
        {
          q: 'Combien faut-il payer chaque mois, au total ?',
          opts: ['585 €', '540 €', '495 €', '1 080 €'],
          correct: 0,
          why: '540 € de loyer plus 45 € de charges, qui sont « en plus ». Le dépôt de garantie est versé une seule fois.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · offre de stage',
      text:
        'STAGE · Assistant ou assistante de gestion de projet.\n' +
        'Durée : 6 mois, à partir de février. Gratification : 720 € par mois.\n' +
        'Convention de stage obligatoire, délivrée par l’établissement.\n' +
        'Deux jours de télétravail par semaine après le premier mois.\n' +
        'Candidatures jusqu’au 15 janvier.',
      items: [
        {
          q: 'À partir de quand le télétravail est-il possible ?',
          opts: [
            'Après le premier mois de stage',
            'Dès le premier jour du stage',
            'À partir du 15 janvier',
            'Après six mois de stage',
          ],
          correct: 0,
          why: '« Deux jours de télétravail par semaine après le premier mois. » Le 15 janvier est la date limite de candidature.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 3 · rappel de rendez-vous',
      text:
        'Rappel : votre rendez-vous est fixé au mardi 4 mars à 14 h 30, cabinet 2.\n' +
        'Merci de vous présenter 10 minutes avant.\n' +
        'Pour annuler, répondez ANNUL au moins 48 h à l’avance.\n' +
        'Toute annulation tardive est facturée 25 €.',
      items: [
        {
          q: 'Jusqu’à quand peut-on annuler sans être facturé ?',
          opts: [
            'Jusqu’au dimanche 2 mars à 14 h 30',
            'Jusqu’au lundi 3 mars à 14 h 30',
            'Jusqu’au mardi 4 mars à 14 h 20',
            'Jusqu’au mardi 4 mars à 14 h 30',
          ],
          correct: 0,
          why: '48 h avant mardi 14 h 30 ramène au dimanche 14 h 30. Les 10 minutes concernent l’arrivée, pas l’annulation.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 4 · brochure de premiers secours',
      text:
        'EN CAS DE BRÛLURE LÉGÈRE\n' +
        '1. Passez la zone sous l’eau froide pendant 15 minutes.\n' +
        '2. Ne percez jamais une cloque.\n' +
        '3. Couvrez avec un pansement stérile, sans serrer.\n' +
        'Consultez si la brûlure dépasse la taille de la paume de la main, ' +
        'ou si elle touche le visage ou une articulation.',
      items: [
        {
          q: 'Dans quel cas faut-il consulter ?',
          opts: [
            'Si la brûlure est plus grande qu’une paume de main',
            'Si la brûlure fait apparaître une cloque particulièrement douloureuse',
            'Si la douleur dure plus de 15 minutes',
            'Si le pansement doit être serré',
          ],
          correct: 0,
          why: 'La brochure donne trois cas : taille supérieure à la paume, visage, articulation. La cloque relève de la consigne 2, pas de la consultation.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · navette d’aéroport',
      text:
        'NAVETTE AÉROPORT · Départs de la gare routière\n' +
        'Toutes les 30 minutes de 5 h à 21 h, puis toutes les heures jusqu’à minuit.\n' +
        'Durée du trajet : 40 minutes. Arrêt unique : terminal 2.\n' +
        'Billet à bord : 12 €. En ligne à l’avance : 9 €.',
      items: [
        {
          q: 'À quelle fréquence la navette part-elle à 22 h ?',
          opts: [
            'Toutes les heures',
            'Toutes les 30 minutes',
            'Toutes les 40 minutes',
            'Elle ne circule plus',
          ],
          correct: 0,
          why: 'Le rythme de 30 minutes s’arrête à 21 h ; ensuite « toutes les heures jusqu’à minuit ». 40 minutes est la durée du trajet.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · guide des tailles',
      text:
        'ÉCHANGES ET RETOURS\n' +
        'Un article peut être échangé sous 30 jours, non porté, étiquette d’origine attachée.\n' +
        'Les articles soldés sont échangeables mais non remboursables.\n' +
        'L’échange se fait en magasin uniquement, avec le ticket.\n' +
        'Les sous-vêtements ne sont ni repris ni échangés.',
      items: [
        {
          q: 'Que peut-on faire d’un article soldé ?',
          opts: [
            'L’échanger, mais pas se le faire rembourser',
            'Se le faire rembourser en magasin',
            'Le renvoyer par la poste sous 30 jours',
            'Ni l’échanger ni se le faire rembourser',
          ],
          correct: 0,
          why: '« Les articles soldés sont échangeables mais non remboursables. » L’interdiction totale ne vise que les sous-vêtements.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 7 · rentrée d’une école de langues',
      text:
        'ÉCOLE DE LANGUES · Rentrée de septembre\n' +
        'Test de niveau gratuit et obligatoire avant toute inscription.\n' +
        'Cours du soir : lundi et jeudi, 18 h 30 – 20 h 30.\n' +
        'Tarif : 340 € le trimestre, manuel non compris (28 €).\n' +
        'Les groupes comptent 12 personnes au maximum. Au-delà de 3 absences non justifiées, la place est libérée.',
      items: [
        {
          q: 'Que doit-on faire avant de s’inscrire ?',
          opts: [
            'Passer un test de niveau',
            'Acheter le manuel',
            'Régler les 340 € du trimestre',
            'Assister à un premier cours d’essai',
          ],
          correct: 0,
          why: '« Test de niveau gratuit et obligatoire avant toute inscription. » Le manuel et le tarif viennent ensuite.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Phrases lacunaires ════════════════════════════════════════ */
//
// Six independent sentences, one gap each, and no situation behind them: this
// block tests the grammar the corpus already teaches. Every distractor is a
// form a learner at this band actually produces, not a nonsense token.

export const CE_B: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Choisissez le mot ou l’expression qui complète correctement chaque phrase.',
  timingS: 420,
  targetItemIds: [
    'fr.a2.prepositions-essentielles.001', 'fr.a2.pronoms-essentiels.001',
    'fr.b1.connecteurs-logiques.001', 'fr.a2.negation-et-restriction.001',
    'fr.b1.recits-au-passe.001', 'fr.b1.comparaisons.001',
  ],
  items: [
    {
      q: 'Elle s’est habituée ___ ce nouveau rythme en quelques semaines.',
      opts: ['à', 'de', 'avec', 'pour'],
      correct: 0,
      why: 'S’habituer se construit avec « à » : s’habituer à quelque chose.',
      band: 'a2',
    },
    {
      q: 'Le dossier ___ vous avez besoin est sur mon bureau.',
      opts: ['dont', 'que', 'auquel', 'lequel'],
      correct: 0,
      why: 'On a besoin DE quelque chose ; « de + relatif » donne « dont ».',
      band: 'b1',
    },
    {
      q: 'Il n’a ___ prévenu personne de son départ.',
      opts: ['même pas', 'pas même pas', 'ne pas', 'jamais pas'],
      correct: 0,
      why: '« Même pas » s’insère entre l’auxiliaire et le participe : il n’a même pas prévenu.',
      band: 'b1',
    },
    {
      q: 'Nous partirons ___ que la pluie se sera arrêtée.',
      opts: ['dès', 'depuis', 'pendant', 'avant'],
      correct: 0,
      why: '« Dès que » introduit le moment précis où l’action devient possible ; les trois autres ne se combinent pas ainsi avec « que » dans ce sens.',
      band: 'b1',
    },
    {
      q: 'Quand je suis arrivé, la réunion ___ depuis vingt minutes.',
      opts: ['avait commencé', 'a commencé', 'commençait', 'commencera'],
      correct: 0,
      why: 'Une action antérieure à un repère passé demande le plus-que-parfait.',
      band: 'b1',
    },
    {
      q: 'Ce trajet est ___ long que je ne le pensais.',
      opts: ['moins', 'aussi peu', 'le moins', 'plus moins'],
      correct: 0,
      why: 'Le comparatif d’infériorité est « moins … que ». Les trois autres ne forment pas un comparatif correct.',
      band: 'a2',
    },
  ],
};

/* ═══ Block C — Textes lacunaires ═════════════════════════════════════════ */
//
// Two short texts, two gaps each, and both gaps are LOGICAL CONNECTORS rather
// than vocabulary. That is the block's real skill: the candidate has to read
// the relation between two sentences, not recognise a word.

export const CE_C: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Section C',
  prompt: 'Lisez les deux textes et choisissez, pour chaque espace, le mot ou l’expression qui convient.',
  timingS: 420,
  targetItemIds: [
    'fr.b1.connecteurs-logiques.001', 'fr.b1.connecteurs-logiques.002',
    'fr.a2.bureau.001', 'fr.b1.droit.001',
  ],
  parts: [
    {
      label: 'Texte 1 · la ligne de bus du soir',
      text:
        'La commune de Vaudroy a prolongé sa ligne de bus jusqu’à minuit, à la demande des salariés du ' +
        'centre commercial. La fréquentation du dernier départ dépasse aujourd’hui celle de dix-neuf heures. ' +
        '___ (1), la ligne reste déficitaire, parce que ces voyageurs voyagent presque tous avec un ' +
        'abonnement déjà payé. ___ (2), la commune devra décider si elle finance un service qui rend ' +
        'service sans rien rapporter.',
      items: [
        {
          q: 'Espace (1)',
          opts: ['Pourtant', 'Ainsi', 'En effet', 'Par exemple'],
          correct: 0,
          why: 'La phrase précédente annonce un succès de fréquentation, la suivante un déficit : la relation est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (2)',
          opts: ['Autrement dit', 'Au contraire', 'D’ailleurs', 'En revanche'],
          correct: 0,
          why: 'Ce qui suit reformule ce qui précède en le ramenant à la décision à prendre.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Texte 2 · les formulaires en ligne',
      text:
        'Les démarches administratives se font désormais presque toutes en ligne. ___ (3), le nombre de ' +
        'dossiers incomplets n’a pas baissé. Les services constatent que l’erreur n’est plus dans le ' +
        'formulaire, qui refuse les champs vides, mais dans les pièces jointes : un justificatif trop ancien, ' +
        'un document illisible. ___ (4), le passage au numérique a déplacé le problème plutôt qu’il ne l’a ' +
        'résolu.',
      items: [
        {
          q: 'Espace (3)',
          opts: ['Pourtant', 'Donc', 'Par ailleurs', 'C’est-à-dire'],
          correct: 0,
          why: 'On attendrait que la dématérialisation réduise les dossiers incomplets ; elle ne le fait pas. C’est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (4)',
          opts: ['En somme', 'Au contraire', 'Toutefois', 'Par exemple'],
          correct: 0,
          why: 'La dernière phrase résume ce qui précède : le problème a changé de place, pas disparu.',
          band: 'b2',
        },
      ],
    },
  ],
};
