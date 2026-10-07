// TEF Canada blanc-06 — Compréhension écrite, blocks D+E, F and G.
//
//   D+E  5 · lecture rapide                            · 2 documents
//   F   10 · documents administratifs et professionnels · 2 documents
//   G    8 · articles de presse                         · 1 article
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

/* ═══ Blocks D + E — Lecture rapide ═══════════════════════════════════════ */
//
// Two of the five keys are arithmetic (39 × 0,8 and 180 + 180 × 0,85) and are
// asserted in paper.test.ts against the figures in the documents.

export const CE_DE: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b1',
  label: 'Sections D et E',
  prompt: 'Lisez les documents et retrouvez les informations demandées.',
  timingS: 480,
  targetItemIds: uniq(ITEMS.sportsEtLoisirs, ITEMS.famille),
  parts: [
    {
      label: 'Document 1 · trois forfaits de centre sportif',
      text:
        'CENTRE SPORTIF DU LAC · trois forfaits\n' +
        '\n' +
        'LIBERTÉ · 39 $/mois · accès de 6 h à 23 h · cours collectifs NON compris\n' +
        'DUO · 65 $/mois · deux personnes à la même adresse · accès de 6 h à 23 h · cours collectifs compris\n' +
        'MATIN · 25 $/mois · accès de 6 h à 12 h, en semaine seulement · cours collectifs NON compris\n' +
        '\n' +
        'Frais d’inscription : 50 $, offerts pour un engagement de 12 mois.\n' +
        'Tarif étudiant : 20 % de rabais, sur le forfait LIBERTÉ uniquement.',
      items: [
        {
          q: 'Quel forfait comprend les cours collectifs ?',
          opts: ['Le forfait DUO', 'Le forfait LIBERTÉ', 'Le forfait MATIN', 'Les trois forfaits'],
          correct: 0,
          why: 'Seul DUO porte « cours collectifs compris » ; LIBERTÉ et MATIN indiquent « NON compris ».',
          band: 'a2',
        },
        {
          q: 'Combien un étudiant paie-t-il par mois pour le forfait LIBERTÉ ?',
          opts: ['31,20 $', '39,00 $', '35,10 $', '19,00 $'],
          correct: 0,
          why: '39 $ moins 20 % : 39 × 0,8 = 31,20 $.',
          band: 'b1',
        },
        {
          q: 'Comment éviter les frais d’inscription ?',
          opts: [
            'En s’engageant pour 12 mois',
            'En choisissant le forfait DUO',
            'En présentant une carte étudiante',
            'En venant seulement le matin',
          ],
          correct: 0,
          why: '« Frais d’inscription : 50 $, offerts pour un engagement de 12 mois. »',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · trois camps de jour',
      text:
        'CAMPS DE JOUR · été, enfants de 6 à 12 ans\n' +
        '\n' +
        'CAMP DES HUARDS · 6 à 9 ans · 180 $/semaine · service de garde de 7 h à 18 h inclus · baignade\n' +
        'CAMP ÉQUINOXE · 8 à 12 ans · 210 $/semaine · sciences et nature · service de garde de 7 h à 18 h : 25 $ de plus par semaine\n' +
        'CAMP PLEIN-AIR · 6 à 12 ans · 240 $/semaine · canot et escalade · pas de service de garde (9 h à 16 h)\n' +
        '\n' +
        'Réduction de 15 % pour le deuxième enfant inscrit au même camp, la même semaine.',
      items: [
        {
          q: 'Un parent doit faire garder son fils de 11 ans jusqu’à 18 h. Quel camp lui convient ?',
          opts: ['Le camp Équinoxe', 'Le camp des Huards', 'Le camp Plein-Air', 'Aucun des trois camps'],
          correct: 0,
          why: 'Les Huards s’arrêtent à 9 ans et Plein-Air n’a pas de service de garde ; Équinoxe accepte les 8 à 12 ans avec garde jusqu’à 18 h.',
          band: 'b1',
        },
        {
          q: 'Combien coûte une semaine au camp des Huards pour deux enfants de 7 ans ?',
          opts: ['333 $', '360 $', '306 $', '153 $'],
          correct: 0,
          why: '180 $ pour le premier, 180 × 0,85 = 153 $ pour le second : 333 $.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block F — Documents administratifs et professionnels ════════════════ */
//
// Both documents state a rule and then qualify it; most keys sit in the
// qualification (STANDARD-tef §3 block F).

export const CE_F: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 900,
  targetItemIds: uniq(ITEMS.systemeDeSante, ITEMS.gouvernement),
  parts: [
    {
      label: 'Document 1 · changement de médecin de famille',
      text:
        'CENTRE DE SANTÉ RÉGIONAL DE FRÉNEUSE · changement de médecin de famille\n' +
        '\n' +
        'Article 1. Tout patient inscrit auprès d’un médecin de famille peut demander à changer de médecin, ' +
        'sans avoir à motiver sa demande. Le changement n’est possible qu’une fois par période de douze ' +
        'mois, sauf en cas de déménagement hors du territoire du centre de santé.\n' +
        '\n' +
        'Article 2. La demande se fait au moyen du formulaire de changement, déposé à l’accueil ou envoyé par ' +
        'le portail du patient. Elle n’est enregistrée qu’une fois que le nouveau médecin a accepté le ' +
        'patient ; le centre ne peut pas imposer cette acceptation.\n' +
        '\n' +
        'Article 3. Tant que le nouveau médecin n’a pas accepté l’inscription, le patient reste inscrit auprès ' +
        'de son médecin actuel, qui demeure responsable de son suivi.\n' +
        '\n' +
        'Article 4. Le dossier médical est transmis au nouveau médecin dans un délai de trente jours. Le ' +
        'patient peut en obtenir une copie sur demande écrite ; des frais de reproduction de 20 $ ' +
        's’appliquent au-delà de cinquante pages.\n' +
        '\n' +
        'Article 5. Un médecin peut mettre fin au suivi d’un patient pour un motif sérieux, à condition de ' +
        'l’en informer par écrit et de continuer à le soigner en cas d’urgence pendant soixante jours.',
      items: [
        {
          q: 'À quelle fréquence peut-on changer de médecin de famille ?',
          opts: [
            'Une fois par an, sauf déménagement hors du territoire',
            'Autant de fois qu’on le souhaite, sans motif',
            'Une seule fois, quelle que soit la situation',
            'Deux fois par an, en motivant la demande',
          ],
          correct: 0,
          why: '« Une fois par période de douze mois, sauf en cas de déménagement hors du territoire. » L’absence de motif ne lève pas la limite.',
          band: 'b2',
        },
        {
          q: 'À quel moment la demande est-elle enregistrée ?',
          opts: [
            'Quand le nouveau médecin a accepté le patient',
            'Dès le dépôt du formulaire à l’accueil',
            'Après la transmission du dossier médical',
            'Quand l’ancien médecin a donné son accord',
          ],
          correct: 0,
          why: '« Elle n’est enregistrée qu’une fois que le nouveau médecin a accepté le patient. »',
          band: 'b2',
        },
        {
          q: 'Qui assure le suivi du patient pendant la démarche ?',
          opts: [
            'Son médecin actuel, jusqu’à l’acceptation du nouveau',
            'Le nouveau médecin, dès le dépôt de la demande',
            'Le centre de santé, par son service d’accueil',
            'Aucun médecin, jusqu’au transfert du dossier',
          ],
          correct: 0,
          why: 'L’article 3 : le patient « reste inscrit auprès de son médecin actuel, qui demeure responsable de son suivi ».',
          band: 'b1',
        },
        {
          q: 'Dans quel cas la copie du dossier est-elle payante ?',
          opts: [
            'Quand elle dépasse cinquante pages',
            'Dans tous les cas, au tarif de 20 $',
            'Quand elle est demandée par écrit',
            'Quand elle est demandée avant trente jours',
          ],
          correct: 0,
          why: '« Des frais de reproduction de 20 $ s’appliquent au-delà de cinquante pages. » La demande écrite est la règle, pas la condition des frais.',
          band: 'b1',
        },
        {
          q: 'Que doit faire un médecin qui met fin au suivi d’un patient ?',
          opts: [
            'L’en informer par écrit et le soigner en urgence soixante jours',
            'Obtenir d’abord l’accord écrit du centre de santé régional',
            'Lui trouver lui-même un autre médecin de famille',
            'Transmettre son dossier au patient sous trente jours',
          ],
          correct: 0,
          why: 'L’article 5 pose deux conditions : informer par écrit et soigner en cas d’urgence pendant soixante jours. Les trente jours concernent la transmission à un nouveau médecin.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 2 · preuve de résidence pour les activités municipales',
      text:
        'MUNICIPALITÉ DE LAC-OMBREUSE · inscription aux activités · preuve de résidence\n' +
        '\n' +
        '1. Le tarif résident est réservé aux personnes dont l’adresse principale se trouve sur le ' +
        'territoire de la municipalité à la date de l’inscription.\n' +
        '\n' +
        '2. La preuve de résidence est un document de moins de trois mois, à votre nom et à votre ' +
        'adresse : facture d’électricité ou de téléphone, avis d’imposition municipal, bail signé. Le ' +
        'permis de conduire n’est pas accepté seul, l’adresse qui y figure pouvant ne pas être à jour.\n' +
        '\n' +
        '3. Les enfants mineurs sont inscrits sur la preuve de résidence du parent qui les inscrit. En cas ' +
        'de garde partagée, la preuve de l’un ou l’autre parent, s’il réside sur le territoire, est acceptée.\n' +
        '\n' +
        '4. Les propriétaires d’un chalet sur le territoire dont la résidence principale est ailleurs paient ' +
        'le tarif non-résident. Une exception s’applique aux activités d’été, de juin à août : ils ' +
        'bénéficient alors du tarif résident sur présentation de l’avis d’imposition du chalet.\n' +
        '\n' +
        '5. Une fausse déclaration entraîne l’annulation de l’inscription, sans remboursement.',
      items: [
        {
          q: 'De quand doit dater la preuve de résidence ?',
          opts: [
            'De moins de trois mois',
            'De moins d’un an',
            'De l’année fiscale en cours',
            'D’avant le début de l’activité',
          ],
          correct: 0,
          why: '« La preuve de résidence est un document de moins de trois mois. »',
          band: 'b1',
        },
        {
          q: 'Quel document n’est pas accepté à lui seul ?',
          opts: ['Le permis de conduire', 'Un bail signé', 'Un avis d’imposition municipal', 'Une facture de téléphone'],
          correct: 0,
          why: '« Le permis de conduire n’est pas accepté seul, l’adresse qui y figure pouvant ne pas être à jour. »',
          band: 'b1',
        },
        {
          q: 'À quelle condition un enfant en garde partagée paie-t-il le tarif résident ?',
          opts: [
            'L’un de ses deux parents réside dans la municipalité',
            'Ses deux parents résident dans la municipalité',
            'Il passe plus de la moitié de l’année sur place',
            'Le parent qui l’inscrit y possède un chalet',
          ],
          correct: 0,
          why: '« La preuve de l’un ou l’autre parent, s’il réside sur le territoire, est acceptée. »',
          band: 'b2',
        },
        {
          q: 'Quel tarif paie le propriétaire d’un chalet pour une activité en juillet ?',
          opts: [
            'Le tarif résident, avec l’avis d’imposition du chalet',
            'Le tarif non-résident, comme le reste de l’année',
            'Le tarif résident, sur présentation de son bail',
            'Un tarif réduit propre aux propriétaires de chalet',
          ],
          correct: 0,
          why: 'La règle est le tarif non-résident, mais « une exception s’applique aux activités d’été, de juin à août », avec l’avis d’imposition du chalet.',
          band: 'b2',
        },
        {
          q: 'Que risque une personne qui fait une fausse déclaration ?',
          opts: [
            'L’annulation de l’inscription, sans remboursement',
            'Une amende fixée par la municipalité',
            'Le paiement de la différence de tarif',
            'Une interdiction de s’inscrire l’année suivante',
          ],
          correct: 0,
          why: '« Une fausse déclaration entraîne l’annulation de l’inscription, sans remboursement. »',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block G — Article de presse ═════════════════════════════════════════ */
//
// SELF-VERIFY (G1–G8): the position (shorter is not simpler) is carried by the
// concession-rebuttal structure, not announced until the last line. Figures are
// invented and attributed to the invented bureau d’études Ravenelle.

const ARTICLE =
  'La municipalité de Saint-Varin s’en félicite : son formulaire de demande d’aide au logement est ' +
  'passé de douze pages à trois. Les demandes déposées ont augmenté de quarante pour cent en un an. ' +
  'On aurait tort de bouder ce résultat. On aurait tort aussi de s’arrêter là.\n' +
  '\n' +
  'Car le nombre de demandes n’est qu’une moitié de l’histoire. Selon le bureau d’études Ravenelle, ' +
  'qui a examiné ces dossiers pour la municipalité, près d’un tiers des formulaires simplifiés ont dû ' +
  'être complétés par la suite, à la demande des services. Les questions retirées du formulaire ' +
  'n’avaient pas disparu : elles étaient simplement posées plus tard, par téléphone ou par courrier.\n' +
  '\n' +
  'Certes, un formulaire court décourage moins. Une personne qui renonçait devant douze pages remplit ' +
  'aujourd’hui les trois pages, et c’est un progrès réel pour ceux qui ne demandaient rien. Mais ' +
  'le dossier incomplet a un coût, et ce coût retombe sur ceux qui ont le moins de temps : un second ' +
  'courrier, une pièce à fournir sous quinze jours, un délai de traitement qui double.\n' +
  '\n' +
  'Les agents le disent sans détour. « Avant, on recevait peu de dossiers, mais complets. Maintenant, ' +
  'on en reçoit beaucoup, et on passe nos journées à relancer », résume une employée du service. Le ' +
  'temps gagné au guichet a été reperdu au bureau.\n' +
  '\n' +
  'Simplifier n’est donc pas raccourcir. La ville voisine de Frênelac a pris un autre chemin : elle a ' +
  'gardé toutes ses questions, mais son formulaire en ligne n’affiche que celles qui concernent la ' +
  'situation déclarée. Un locataire seul ne voit jamais les rubriques destinées aux propriétaires ou ' +
  'aux familles. Le formulaire reste long pour le service, et court pour chaque personne qui le ' +
  'remplit. Les dossiers à compléter y sont deux fois moins nombreux qu’à Saint-Varin.\n' +
  '\n' +
  'La leçon dépasse le logement. Un formulaire n’est pas bon parce qu’il est bref ; il est bon quand ' +
  'la personne qui le remplit n’a pas à y revenir.';

const mcq = (q: string, opts: string[], why: string, band: 'b1' | 'b2' | 'c1') => ({ q, opts, correct: 0, why, band });

export const CE_G: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'b2',
  label: 'Section G',
  prompt: 'Lisez l’article et choisissez la bonne réponse.',
  timingS: 780,
  targetItemIds: uniq(ITEMS.gouvernement, ITEMS.questionsSociales),
  parts: [
    {
      label: 'Article · formulaires simplifiés : moins de cases, pas moins de démarches',
      text: ARTICLE,
      items: [
        mcq('Quel résultat la municipalité de Saint-Varin met-elle en avant ?', [
          'Une hausse de quarante pour cent des demandes',
          'Une baisse du délai de traitement des dossiers',
          'Une diminution du nombre de dossiers incomplets',
          'Une économie sur le personnel du service',
        ], '« Les demandes déposées ont augmenté de quarante pour cent en un an. » Le délai, lui, double pour les dossiers incomplets.', 'b1'),
        mcq('Qu’a constaté le bureau d’études Ravenelle ?', [
          'Près d’un tiers des dossiers ont dû être complétés',
          'Les questions retirées étaient devenues inutiles',
          'Les agents comprennent mieux le formulaire court',
          'Les demandes ont baissé après la simplification',
        ], '« Près d’un tiers des formulaires simplifiés ont dû être complétés par la suite, à la demande des services. »', 'b2'),
        mcq('Que veut dire l’auteur par « elles étaient simplement posées plus tard » ?', [
          'La simplification a déplacé les questions sans les supprimer',
          'Les agents ont décidé de supprimer ces questions',
          'Les demandeurs ont refusé de répondre à ces questions',
          'Le formulaire a été rallongé l’année suivante',
        ], 'La phrase le pose juste avant : les questions retirées « n’avaient pas disparu » ; elles reviennent par téléphone ou par courrier.', 'b2'),
        mcq('Quel rôle joue le paragraphe qui commence par « Certes » ?', [
          'Il reconnaît un avantage avant d’en montrer le coût',
          'Il conclut que la simplification a complètement échoué',
          'Il présente la méthode choisie par la ville de Frênelac',
          'Il rapporte le témoignage d’une employée du service',
        ], '« Certes, un formulaire court décourage moins… Mais le dossier incomplet a un coût » : concession, puis réfutation.', 'c1'),
        mcq('Sur qui retombe le coût des dossiers incomplets, selon l’article ?', [
          'Sur les personnes qui ont le moins de temps',
          'Sur la municipalité, qui doit embaucher',
          'Sur les propriétaires de logements loués',
          'Sur la ville voisine de Frênelac',
        ], '« Ce coût retombe sur ceux qui ont le moins de temps » : un second courrier, une pièce à fournir, un délai qui double. Frênelac n’est citée que pour sa méthode.', 'b2'),
        mcq('Que montre la citation de l’employée ?', [
          'Le temps gagné au guichet est perdu en relances',
          'Les agents manquent de formation sur le nouveau formulaire',
          'Le service reçoit moins de dossiers qu’auparavant',
          'Les demandeurs se plaignent des appels du service',
        ], 'Beaucoup de dossiers, « on passe nos journées à relancer », que l’auteur résume : « le temps gagné au guichet a été reperdu au bureau ».', 'b2'),
        mcq('Comment Frênelac a-t-elle simplifié son formulaire ?', [
          'En n’affichant que les questions utiles à chaque situation',
          'En réduisant son formulaire à trois pages',
          'En supprimant les rubriques destinées aux familles',
          'En remplaçant le formulaire par un appel téléphonique',
        ], 'Elle « a gardé toutes ses questions », mais le formulaire « n’affiche que celles qui concernent la situation déclarée ».', 'b2'),
        mcq('Quelle est la position de l’auteur ?', [
          'Un bon formulaire évite d’y revenir, plus qu’il n’est court',
          'Tous les formulaires devraient tenir en trois pages',
          'La simplification des formulaires est une fausse bonne idée',
          'Les agents devraient remplir les formulaires des usagers',
        ], '« Un formulaire n’est pas bon parce qu’il est bref ; il est bon quand la personne qui le remplit n’a pas à y revenir. » L’auteur ne rejette pas la simplification, il la redéfinit.', 'c1'),
      ],
    },
  ],
};
