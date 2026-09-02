// TEF Canada blanc-03 — Compréhension écrite, blocks A to C.
//
//   A  7 · documents de la vie quotidienne · 7 documents, 1 question each
//   B  6 · phrases lacunaires              · 6 single sentences, 1 gap each
//   C  4 · textes lacunaires               · 2 short texts, 2 gaps each
//
// Blocks D+E, F and G are in ce-fg.ts.
//
// CE-B and CE-C carry no topic from the bank: gap-fill tests grammar and
// collocation, so the sentences are written to the grammar point. Targets are
// drawn from what the corpus already teaches, so a miss routes to a lesson that
// exists.
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
// Seven short authentic-shaped documents. The difficulty is not vocabulary: the
// answer sits beside a figure or a condition that looks like the answer, and
// every distractor is drawn from the document itself.
//
// SELF-VERIFY (A1–A7): no distractor can be eliminated without reading. Prices,
// dates and durations are internally consistent within each document.

export const CE_A: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 600,
  targetItemIds: uniq(
    ITEMS.lesFetes, ITEMS.communaute, ITEMS.cuisine, ITEMS.tourisme,
    ITEMS.evenementsFamiliaux, ITEMS.corps, ITEMS.vetements
  ),
  parts: [
    {
      label: 'Document 1 · la brocante',
      text:
        'BROCANTE ANNUELLE · dimanche 14 septembre, place de Pierrefonte\n' +
        'Installation des exposants de 6 h à 7 h 30. Aucun véhicule dans l’enceinte après 7 h 30.\n' +
        'Emplacement de 4 mètres : 12 € pour les habitants de la commune, 20 € pour les autres.\n' +
        'Inscription obligatoire en mairie avant le 5 septembre, avec une pièce d’identité.\n' +
        'Les emplacements non occupés à 8 h sont réattribués.',
      items: [
        {
          q: 'Que se passe-t-il si un exposant arrive à 8 h 15 ?',
          opts: [
            'Son emplacement a déjà été donné à quelqu’un d’autre',
            'Il peut s’installer mais sans amener son véhicule',
            'Il doit régler un supplément de 8 € sur place',
            'Il est inscrit d’office pour la brocante suivante',
          ],
          correct: 0,
          why: '« Les emplacements non occupés à 8 h sont réattribués. » L’interdiction des véhicules après 7 h 30 est une autre règle.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 2 · la pétition de quartier',
      text:
        'PÉTITION · pour le maintien du bureau de poste de Grandvaux\n' +
        'La fermeture est annoncée pour le 31 mars. Le bureau le plus proche serait à 9 km, sans ligne ' +
        'de bus directe.\n' +
        'Nous demandons le maintien de trois demi-journées par semaine, au minimum.\n' +
        'Signatures recueillies : 412 sur les 500 nécessaires pour une saisine du conseil municipal.\n' +
        'Signez en ligne ou à la boulangerie, jusqu’au 20 février.',
      items: [
        {
          q: 'Que demandent exactement les signataires ?',
          opts: [
            'Le maintien d’une ouverture partielle, trois demi-journées par semaine',
            'Le maintien du bureau de poste avec ses horaires actuels',
            'La création d’une ligne de bus vers le bureau situé à 9 km',
            'Le report de la fermeture au-delà du 31 mars',
          ],
          correct: 0,
          why: '« Nous demandons le maintien de trois demi-journées par semaine, au minimum » : c’est une ouverture réduite, pas le statu quo.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 3 · le plat à emporter',
      text:
        'À CONSERVER AU FRAIS · à consommer dans les 48 heures\n' +
        'Réchauffer à couvert, 6 minutes à puissance moyenne. Ne pas réchauffer deux fois.\n' +
        'Une fois réchauffé, le plat se consomme immédiatement.\n' +
        'Ce plat contient des œufs et des fruits à coque. Fabriqué dans un atelier utilisant du gluten.',
      items: [
        {
          q: 'Que dit la notice sur le fait de réchauffer le plat ?',
          opts: [
            'Il ne doit être réchauffé qu’une seule fois',
            'Il peut être réchauffé deux fois en 48 heures',
            'Il doit être réchauffé à découvert pendant 6 minutes',
            'Il se conserve au frais après avoir été réchauffé',
          ],
          correct: 0,
          why: '« Ne pas réchauffer deux fois », et « une fois réchauffé, le plat se consomme immédiatement ».',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 4 · la confirmation d’hôtel',
      text:
        'CONFIRMATION DE RÉSERVATION · 3 nuits, chambre double\n' +
        'Arrivée le 8 mai à partir de 15 h · Départ le 11 mai avant 11 h.\n' +
        'Réception ouverte jusqu’à 22 h. Au-delà, prévenez-nous : un code d’accès vous sera envoyé.\n' +
        'Annulation sans frais jusqu’à 48 h avant l’arrivée. Ensuite, la première nuit est due.\n' +
        'Petit-déjeuner 11 € par personne, à régler sur place.',
      items: [
        {
          q: 'Que doit faire un client qui arrivera à 23 h ?',
          opts: [
            'Prévenir l’hôtel pour recevoir un code d’accès',
            'Annuler sa première nuit et arriver le lendemain',
            'Régler la première nuit à l’avance',
            'Se présenter à la réception avant 22 h',
          ],
          correct: 0,
          why: '« Réception ouverte jusqu’à 22 h. Au-delà, prévenez-nous : un code d’accès vous sera envoyé. »',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · l’invitation au mariage',
      text:
        'Nous serions heureux de vous compter parmi nous le samedi 21 juin.\n' +
        'Cérémonie à 15 h à la mairie de Valcourt · Réception à 18 h au domaine des Tilleuls.\n' +
        'Merci de confirmer votre présence avant le 1er mai, en précisant le nombre d’adultes et d’enfants.\n' +
        'Une navette part de la mairie à 17 h 30 ; les places sont limitées, réservez en confirmant.\n' +
        'Hébergement : liste de chambres à proximité sur demande.',
      items: [
        {
          q: 'Comment réserve-t-on une place dans la navette ?',
          opts: [
            'En le demandant au moment de confirmer sa présence',
            'En se présentant à la mairie à 17 h 30',
            'En écrivant séparément avant le 1er mai',
            'En réservant une chambre sur la liste fournie',
          ],
          correct: 0,
          why: '« Les places sont limitées, réservez en confirmant » : la navette se réserve avec la confirmation de présence.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 6 · la trousse de secours',
      text:
        'AVANT LE DÉPART · vérifiez votre trousse\n' +
        'Compresses stériles, pansements de plusieurs tailles, bande élastique, ciseaux à bouts ronds.\n' +
        'Vérifiez les dates : une compresse périmée n’est plus stérile.\n' +
        'Antiseptique en dosettes plutôt qu’en flacon : un flacon entamé se conserve mal.\n' +
        'N’emportez pas de médicament sans ordonnance si vous passez une frontière.',
      items: [
        {
          q: 'Pourquoi la notice conseille-t-elle les dosettes ?',
          opts: [
            'Parce qu’un flacon entamé se conserve mal',
            'Parce qu’elles sont plus faciles à transporter',
            'Parce qu’elles coûtent moins cher que les flacons',
            'Parce qu’elles ne périment pas',
          ],
          correct: 0,
          why: '« Antiseptique en dosettes plutôt qu’en flacon : un flacon entamé se conserve mal. » La péremption concerne les compresses.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · le pressing',
      text:
        'PRESSING · tarifs et délais\n' +
        'Chemise 3,50 € · Pantalon 7 € · Manteau 18 € · Robe 12 €\n' +
        'Délai normal : 3 jours ouvrés. Service express le jour même : supplément de 50 %.\n' +
        'Dépôt avant 10 h pour l’express. Fermé le dimanche et le lundi.\n' +
        'Les articles non retirés au bout de 3 mois ne sont plus sous notre responsabilité.',
      items: [
        {
          q: 'Combien coûte un manteau en service express ?',
          opts: ['27 €', '18 €', '24 €', '36 €'],
          correct: 0,
          why: '18 € plus 50 % de supplément, soit 9 €, donc 27 €.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block B — Phrases lacunaires ════════════════════════════════════════ */
//
// Six independent sentences, one gap each, no situation behind them. Every
// distractor is a form a learner at this band actually produces.

export const CE_B: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Choisissez le mot ou l’expression qui complète correctement chaque phrase.',
  timingS: 420,
  targetItemIds: [
    'fr.a2.prepositions-essentielles.002', 'fr.a2.pronoms-essentiels.002',
    'fr.b1.connecteurs-logiques.003', 'fr.a2.negation-et-restriction.002',
    'fr.b1.recits-au-passe.002', 'fr.b1.comparaisons.002',
  ],
  items: [
    {
      q: 'Le directeur tient ___ ce que le dossier soit rendu vendredi.',
      opts: ['à', 'de', 'sur', 'pour'],
      correct: 0,
      why: '« Tenir à ce que » exprime une exigence ; les trois autres prépositions ne se construisent pas ainsi.',
      band: 'b1',
    },
    {
      q: 'Voici les documents ___ nous avons besoin pour l’inscription.',
      opts: ['dont', 'que', 'lesquels', 'auxquels'],
      correct: 0,
      why: 'On a besoin DE quelque chose ; « de + relatif » donne « dont ».',
      band: 'b1',
    },
    {
      q: 'Il ne reste ___ deux places pour la séance de vingt heures.',
      opts: ['que', 'pas', 'plus que rien', 'aucune'],
      correct: 0,
      why: '« Ne … que » est la restriction : il ne reste que deux places. « Pas » nierait la phrase.',
      band: 'a2',
    },
    {
      q: 'Nous avons annulé la sortie ___ la pluie annoncée.',
      opts: ['en raison de', 'malgré', 'afin de', 'quant à'],
      correct: 0,
      why: '« En raison de » introduit la cause ; « malgré » introduirait une concession, ce que le sens interdit.',
      band: 'b1',
    },
    {
      q: 'Elle a rangé les clés dès qu’elle ___ rentrée.',
      opts: ['est', 'était', 'a été', 'serait'],
      correct: 0,
      why: 'Avec « dès que » et une principale au passé composé, on emploie le passé composé : dès qu’elle est rentrée.',
      band: 'b1',
    },
    {
      q: 'Ce logement est ___ cher que le précédent, mais plus grand.',
      opts: ['aussi', 'autant', 'plus autant', 'le plus'],
      correct: 0,
      why: 'Le comparatif d’égalité devant un adjectif est « aussi … que ». « Autant » s’emploie avec un verbe ou un nom.',
      band: 'a2',
    },
  ],
};

/* ═══ Block C — Textes lacunaires ═════════════════════════════════════════ */
//
// Two short texts, two gaps each, and both gaps are logical connectors: the
// candidate has to read the relation between two sentences, not recognise a
// word.

export const CE_C: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Section C',
  prompt: 'Lisez les deux textes et choisissez, pour chaque espace, le mot ou l’expression qui convient.',
  timingS: 420,
  targetItemIds: [
    'fr.b1.connecteurs-logiques.004', 'fr.b1.connecteurs-logiques.005',
    'fr.a2.communaute.001', 'fr.b1.universite.001',
  ],
  parts: [
    {
      label: 'Texte 1 · la salle associative',
      text:
        'La commune d’Aubercy a ouvert une salle associative gratuite, réservable en ligne. Le nombre de ' +
        'réservations a triplé en un an. ___ (1), la moitié des créneaux réservés ne sont pas utilisés : ' +
        'on réserve par précaution, sans annuler ensuite. La commune a donc instauré une règle simple, ' +
        'trois absences et le compte est suspendu. ___ (2), le taux d’occupation réel est passé de ' +
        'cinquante à quatre-vingts pour cent, sans qu’un seul créneau soit ajouté.',
      items: [
        {
          q: 'Espace (1)',
          opts: ['Toutefois', 'Ainsi', 'En effet', 'Par exemple'],
          correct: 0,
          why: 'La phrase précédente annonce un succès, la suivante un gaspillage : la relation est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (2)',
          opts: ['Résultat', 'Au contraire', 'En revanche', 'Autrement dit'],
          correct: 0,
          why: 'Ce qui suit est la conséquence de la règle qui vient d’être posée, pas une opposition ni une reformulation.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Texte 2 · les cours enregistrés',
      text:
        'Beaucoup d’universités enregistrent désormais leurs cours magistraux et les mettent en ligne. ' +
        '___ (3), la présence en amphithéâtre a moins baissé qu’on ne le craignait. Les étudiants ' +
        'interrogés expliquent qu’ils viennent pour la question qu’ils peuvent poser à la fin, et pour ' +
        'le rythme que donne un horaire fixe. ___ (4), l’enregistrement sert surtout à revoir un passage, ' +
        'rarement à remplacer le cours entier.',
      items: [
        {
          q: 'Espace (3)',
          opts: ['Pourtant', 'Donc', 'C’est-à-dire', 'Par ailleurs'],
          correct: 0,
          why: 'On attendrait que la mise en ligne vide les amphis ; ce n’est pas ce qui se produit. C’est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (4)',
          opts: ['En somme', 'Au contraire', 'Toutefois', 'Par exemple'],
          correct: 0,
          why: 'La dernière phrase résume ce qui précède : l’enregistrement complète le cours au lieu de s’y substituer.',
          band: 'b2',
        },
      ],
    },
  ],
};
