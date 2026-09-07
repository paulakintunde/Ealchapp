// TEF Canada blanc-05 — Compréhension écrite, blocks A to C.
//
//   A  7 · documents de la vie quotidienne · 7 documents, 1 question each
//   B  6 · phrases lacunaires              · 6 single sentences, 1 gap each
//   C  4 · textes lacunaires               · 2 short texts, 2 gaps each
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
// SELF-VERIFY (A1–A7): every distractor is drawn from the document, so none can
// be eliminated without reading. Figures internally consistent.

export const CE_A: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 600,
  targetItemIds: uniq(
    ITEMS.sportsEtLoisirs, ITEMS.evenementsFamiliaux, ITEMS.technologieQuotidienne,
    ITEMS.deplacements, ITEMS.gouvernement, ITEMS.transportsQuotidiens, ITEMS.cuisine
  ),
  parts: [
    {
      label: 'Document 1 · la séance d’essai',
      text:
        'CLUB DE SPORT ADAPTÉ · séance d’essai gratuite\n' +
        'Tous les samedis à 10 h, gymnase de Sarlanges. Sur inscription, groupe limité à 12.\n' +
        'Aucun certificat médical pour la séance d’essai ; il devient obligatoire à l’inscription annuelle.\n' +
        'Prévoir une tenue et une bouteille d’eau. Le matériel est fourni.\n' +
        'Encadrement par deux éducateurs diplômés.',
      items: [
        {
          q: 'Quand le certificat médical devient-il obligatoire ?',
          opts: [
            'Au moment de l’inscription annuelle',
            'Avant la séance d’essai du samedi',
            'À la douzième séance seulement',
            'Il n’est jamais demandé au club',
          ],
          correct: 0,
          why: '« Aucun certificat médical pour la séance d’essai ; il devient obligatoire à l’inscription annuelle. »',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · la commande de fleurs',
      text:
        'LIVRAISON DE FLEURS · commandes et délais\n' +
        'Commande jusqu’à 14 h pour une livraison le lendemain, du mardi au samedi.\n' +
        'Livraison le dimanche uniquement sur les communes de Dourvin et du Poirier, supplément de 6 €.\n' +
        'Pas de livraison le lundi, jour de fermeture.\n' +
        'Un message manuscrit peut être joint sans frais, à indiquer à la commande.',
      items: [
        {
          q: 'Que faut-il pour être livré un dimanche ?',
          opts: [
            'Habiter Dourvin ou Le Poirier et payer 6 € de plus',
            'Commander avant 14 h le vendredi qui précède la livraison',
            'Renoncer au message manuscrit joint',
            'Ce n’est possible dans aucun cas',
          ],
          correct: 0,
          why: '« Livraison le dimanche uniquement sur les communes de Dourvin et du Poirier, supplément de 6 €. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 3 · la borne de recharge',
      text:
        'BORNE DE RECHARGE · mode d’emploi\n' +
        '1. Branchez le câble côté borne, puis côté véhicule. Jamais l’inverse.\n' +
        '2. Passez la carte devant le lecteur. Le voyant passe au vert : la charge démarre.\n' +
        '3. Pour arrêter, repassez la carte. Le câble ne se débloque pas tant que la charge est active.\n' +
        'Stationnement limité à 3 h ; au-delà, 4 € par heure entamée, même si le véhicule est chargé.',
      items: [
        {
          q: 'Que se passe-t-il si l’on reste 4 heures ?',
          opts: [
            'Une heure est facturée 4 €',
            'La charge est interrompue automatiquement',
            'Le câble reste bloqué jusqu’au paiement',
            'Aucun supplément n’est appliqué',
          ],
          correct: 0,
          why: 'La limite est de 3 h, puis « 4 € par heure entamée » : la quatrième heure coûte 4 €.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 4 · le parking longue durée',
      text:
        'PARKING LONGUE DURÉE · grille tarifaire\n' +
        '24 h : 14 € · 3 jours : 33 € · 7 jours : 60 € · Semaine supplémentaire : 45 €\n' +
        'Navette gratuite vers le terminal, toutes les 15 minutes de 4 h à 1 h.\n' +
        'Réservation en ligne obligatoire : aucun accès sans réservation, même si des places sont libres.\n' +
        'Annulation gratuite jusqu’à 24 h avant l’arrivée.',
      items: [
        {
          q: 'Combien coûte un stationnement de 14 jours ?',
          opts: ['105 €', '120 €', '60 €', '90 €'],
          correct: 0,
          why: '60 € pour les 7 premiers jours, plus 45 € pour la semaine supplémentaire, soit 105 €.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 5 · le changement d’adresse',
      text:
        'CHANGEMENT D’ADRESSE · démarche en ligne\n' +
        'Une seule déclaration prévient les organismes que vous cochez : impôts, énergie, assurance maladie.\n' +
        'La banque et les assurances privées ne sont pas concernées : à prévenir séparément.\n' +
        'Déclarez au plus tôt 3 mois avant le déménagement et au plus tard 3 mois après.\n' +
        'Un justificatif de domicile n’est pas demandé à cette étape.',
      items: [
        {
          q: 'Qui faut-il prévenir séparément ?',
          opts: [
            'La banque et les assurances privées',
            'Les impôts et l’assurance maladie',
            'Le fournisseur d’énergie',
            'Aucun organisme, tout est automatique',
          ],
          correct: 0,
          why: '« La banque et les assurances privées ne sont pas concernées : à prévenir séparément. »',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · la carte de stationnement résident',
      text:
        'CARTE RÉSIDENT · stationnement de surface\n' +
        'Tarif : 30 € par an, pour un seul véhicule par foyer.\n' +
        'Pièces : justificatif de domicile de moins de 3 mois et carte grise au nom du demandeur.\n' +
        'Une carte grise au nom d’un employeur est acceptée avec une attestation de l’entreprise.\n' +
        'Valable dans le secteur de résidence uniquement, jamais dans le centre.',
      items: [
        {
          q: 'Que faut-il ajouter si la carte grise est au nom de l’employeur ?',
          opts: [
            'Une attestation de l’entreprise',
            'Un second justificatif de domicile',
            'Une autorisation de la mairie',
            'Rien, ce cas n’est pas accepté',
          ],
          correct: 0,
          why: '« Une carte grise au nom d’un employeur est acceptée avec une attestation de l’entreprise. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 7 · l’atelier de cuisine',
      text:
        'ATELIER DE CUISINE · bulletin d’inscription\n' +
        'Six séances de 2 h, le jeudi soir. 90 € les six séances, ingrédients compris.\n' +
        'Aucune séance à l’unité. Une séance manquée n’est ni remplacée ni remboursée.\n' +
        'Tablier fourni, à rendre en fin de cycle. Apportez une boîte pour rapporter vos plats.\n' +
        'Inscription close une semaine avant la première séance.',
      items: [
        {
          q: 'Que doivent apporter les participants ?',
          opts: [
            'Une boîte pour rapporter les plats',
            'Un tablier et un couteau',
            'Les ingrédients de leur recette',
            'Le règlement des séances manquées',
          ],
          correct: 0,
          why: '« Apportez une boîte pour rapporter vos plats. » Le tablier est fourni et les ingrédients sont compris.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Phrases lacunaires ════════════════════════════════════════ */

export const CE_B: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Choisissez le mot ou l’expression qui complète correctement chaque phrase.',
  timingS: 420,
  targetItemIds: [
    'fr.a2.prepositions-essentielles.004', 'fr.a2.pronoms-essentiels.004',
    'fr.b1.connecteurs-logiques.009', 'fr.a2.negation-et-restriction.004',
    'fr.b1.recits-au-passe.004', 'fr.b1.comparaisons.004',
  ],
  items: [
    {
      q: 'Ils se sont plaints ___ bruit auprès du gardien.',
      opts: ['du', 'au', 'sur le', 'pour le'],
      correct: 0,
      why: 'Se plaindre se construit avec « de » : se plaindre de quelque chose, donc « du bruit ».',
      band: 'a2',
    },
    {
      q: 'La collègue ___ j’ai confié le dossier revient lundi.',
      opts: ['à qui', 'dont', 'que', 'qui'],
      correct: 0,
      why: 'On confie quelque chose À quelqu’un ; le relatif reprend la préposition : à qui.',
      band: 'b1',
    },
    {
      q: 'Le magasin n’ouvre ___ le dimanche matin, jamais l’après-midi.',
      opts: ['que', 'pas', 'plus', 'jamais'],
      correct: 0,
      why: '« Ne … que » exprime la restriction : il n’ouvre que le dimanche matin.',
      band: 'a2',
    },
    {
      q: 'Le dossier a été refusé ___ une pièce manquante.',
      opts: ['à cause d’', 'malgré', 'grâce à', 'en vue d’'],
      correct: 0,
      why: '« À cause de » introduit une cause à effet négatif, ce que le refus impose ici.',
      band: 'b1',
    },
    {
      q: 'Elle m’a raconté qu’elle ___ ce village trente ans plus tôt.',
      opts: ['avait quitté', 'a quitté', 'quittait', 'quitterait'],
      correct: 0,
      why: 'L’action est antérieure au moment du récit, lui-même au passé : plus-que-parfait.',
      band: 'b1',
    },
    {
      q: 'Il y a ___ de candidats que l’an dernier, mais les dossiers sont meilleurs.',
      opts: ['moins', 'peu', 'le moins', 'moindre'],
      correct: 0,
      why: 'Devant un nom, le comparatif d’infériorité est « moins de … que ».',
      band: 'a2',
    },
  ],
};

/* ═══ Block C — Textes lacunaires ═════════════════════════════════════════ */

export const CE_C: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Section C',
  prompt: 'Lisez les deux textes et choisissez, pour chaque espace, le mot ou l’expression qui convient.',
  timingS: 420,
  targetItemIds: [
    'fr.b1.connecteurs-logiques.010', 'fr.b1.connecteurs-logiques.011',
    'fr.a2.communaute.002', 'fr.b1.metiers.001',
  ],
  parts: [
    {
      label: 'Texte 1 · la ressourcerie',
      text:
        'La ressourcerie de Dourvin récupère les objets déposés en déchetterie et les remet en état. ' +
        'Elle emploie neuf personnes et détourne cent tonnes de déchets par an. ___ (1), son équilibre ' +
        'financier ne tient pas à la vente : les objets réparés couvrent à peine le tiers du budget. ' +
        'Le reste vient de la commune, qui économise sur le traitement des déchets. ___ (2), la ' +
        'ressourcerie coûte moins cher à la collectivité qu’elle ne lui rapporte, ce qui est rarement ' +
        'dit ainsi.',
      items: [
        {
          q: 'Espace (1)',
          opts: ['Pourtant', 'Ainsi', 'En effet', 'Par exemple'],
          correct: 0,
          why: 'Les chiffres annoncent une réussite, la suite un déséquilibre : la relation est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (2)',
          opts: ['Autrement dit', 'Au contraire', 'Toutefois', 'D’ailleurs'],
          correct: 0,
          why: 'La dernière phrase reformule le mécanisme décrit juste avant, en le résumant.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Texte 2 · les apprentis',
      text:
        'Les métiers d’art peinent à recruter, et l’on invoque souvent le désintérêt des jeunes. ' +
        '___ (3), les candidatures ne manquent pas : un atelier de reliure interrogé en reçoit une ' +
        'quarantaine par an pour deux places. Ce qui manque, ce sont les maîtres d’apprentissage : ' +
        'former prend du temps sur la production, et peu d’ateliers peuvent se le permettre. ___ (4), ' +
        'le problème n’est pas l’envie d’apprendre, c’est la capacité d’enseigner.',
      items: [
        {
          q: 'Espace (3)',
          opts: ['Pourtant', 'Donc', 'Par ailleurs', 'C’est-à-dire'],
          correct: 0,
          why: 'On attendrait peu de candidatures d’après l’explication courante ; il y en a beaucoup. C’est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (4)',
          opts: ['En somme', 'Au contraire', 'Toutefois', 'Par exemple'],
          correct: 0,
          why: 'La dernière phrase récapitule le déplacement du problème opéré dans le paragraphe.',
          band: 'b2',
        },
      ],
    },
  ],
};
