// TCF Canada blanc-06 — Compréhension écrite, the lower slope (A1, A2, B1).
//
// Same slope as the listening épreuve and the same rule: position IS band, so
// nothing here may be reordered. The upper slope is in ce-hi.ts.
//
// The envelope is stated in WORDS on this épreuve (STANDARD-tcf §4), so there
// is no prediction in the check and both directions fail. Documents are sized
// to the middle of the band rather than its floor: roughly 28 words at A1,
// 65 at A2, 145 at B1.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ A1 — positions 1 to 3 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each document is a real object a beginner meets, and the answer
// is one retrievable line.

export const CE_A1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a1',
  label: 'Compréhension écrite · A1',
  prompt: 'Lisez les trois documents et choisissez la bonne réponse.',
  timingS: 170,
  targetItemIds: uniq(ITEMS.cafe.a1, ITEMS.presentationPersonnelle.a1, ITEMS.evenementsFamiliaux.a1),
  parts: [
    {
      label: 'Document 1 · une ardoise de café',
      text:
        'CAFÉ DES TROIS PONTS\n' +
        'Café .......... 2,50 $\n' +
        'Thé ........... 2,75 $\n' +
        'Chocolat chaud .......... 3,50 $\n' +
        'Jus de pomme .......... 3,00 $\n' +
        'Ouvert tous les jours, de 7 h à 18 h.',
      items: [
        {
          q: 'Combien coûte le thé ?',
          opts: ['2,75 $', '2,50 $', '3,50 $', '3,00 $'],
          correct: 0,
          why: 'La ligne « Thé » indique 2,75 $.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · une fiche d’élève',
      text:
        'NOUVEL ÉLÈVE · SECONDAIRE 2\n' +
        'Nom : Okafor\n' +
        'Prénom : Daniel\n' +
        'Âge : treize ans\n' +
        'Langues : anglais et français\n' +
        'Sport préféré : le hockey\n' +
        'Arrivé à l’école en janvier.',
      items: [
        {
          q: 'Quel sport Daniel préfère-t-il ?',
          opts: ['Le hockey', 'Le football', 'Le tennis', 'La natation'],
          correct: 0,
          why: 'La fiche indique « Sport préféré : le hockey ».',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · un faire-part',
      text:
        'Nous avons la joie de vous annoncer la naissance de Léa, ' +
        'le 3 mars, à 6 h 10. Elle pèse 3,2 kilos. ' +
        'Bienvenue à la maison, Léa !\n' +
        'Sonia et Marc',
      items: [
        {
          q: 'Quel jour Léa est-elle née ?',
          opts: ['Le 3 mars', 'Le 13 mars', 'Le 23 mars', 'Le 30 mars'],
          correct: 0,
          why: 'Le faire-part annonce une naissance le 3 mars.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each document holds one competing line the candidate has to set
// aside: the private bathroom, the antibiotic's three doses, the station still
// served, the park, the delivery days, the daily rate.

export const CE_A2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'a2',
  label: 'Compréhension écrite · A2',
  prompt: 'Lisez les six documents et choisissez la bonne réponse.',
  timingS: 430,
  targetItemIds: uniq(
    ITEMS.hebergement.a2,
    ITEMS.systemeDeSante.a2,
    ITEMS.transportsQuotidiens.a2,
    ITEMS.lesFetes.a2,
    ITEMS.internet.a2,
    ITEMS.sportsEtLoisirs.a2
  ),
  parts: [
    {
      label: 'Document 4 · une chambre chez l’habitant',
      text:
        'CHAMBRE À LOUER CHEZ L’HABITANT\n' +
        'Grande chambre meublée dans une maison calme, à dix minutes à pied de l’université.\n' +
        'Loyer : 550 $ par mois, chauffage et internet compris.\n' +
        'Cuisine partagée avec la propriétaire. Salle de bain privée.\n' +
        'Non-fumeur. Animaux non acceptés.\n' +
        'Libre le 1er juillet. Téléphoner le soir à Mme Gauvreau.',
      items: [
        {
          q: 'Que partage-t-on avec la propriétaire ?',
          opts: ['La cuisine', 'La salle de bain', 'La chambre', 'Le jardin'],
          correct: 0,
          why: 'La cuisine est partagée ; la salle de bain est privée.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · une ordonnance',
      text:
        'Docteure Hélène Brissac · médecin de famille\n' +
        'Patient : M. Tran\n' +
        '1. Antibiotique : un comprimé le matin, le midi et le soir, pendant sept jours.\n' +
        '2. Antidouleur : un comprimé en cas de douleur, quatre comprimés par jour au maximum.\n' +
        'Prendre les médicaments pendant le repas.\n' +
        'Revenir me voir si la fièvre dure plus de trois jours.',
      items: [
        {
          q: 'Combien de comprimés d’antidouleur peut-on prendre au maximum par jour ?',
          opts: ['Quatre', 'Trois', 'Sept', 'Deux'],
          correct: 0,
          why: 'Quatre par jour au maximum ; trois est le nombre de prises de l’antibiotique.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · un avis de déviation',
      text:
        'AVIS AUX VOYAGEURS · TRAMWAY LIGNE 2\n' +
        'Du 4 au 18 novembre, en raison de travaux rue Dalbret, ' +
        'le tramway ne s’arrête pas aux stations Marché et Hôtel-de-Ville.\n' +
        'Un autobus gratuit relie ces deux stations toutes les dix minutes.\n' +
        'La station Gare reste desservie normalement.\n' +
        'Les horaires du soir ne changent pas.',
      items: [
        {
          q: 'Comment aller à la station Marché pendant les travaux ?',
          opts: ['En autobus gratuit', 'En tramway', 'En taxi', 'En vélo de location'],
          correct: 0,
          why: 'Le tramway ne s’arrête plus à Marché ; un autobus gratuit le remplace. Seule la Gare reste desservie.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · une fête de quartier',
      text:
        'FÊTE DU QUARTIER DES ORMES · SAMEDI 14 JUIN\n' +
        '11 h · Vente de livres et de jouets dans la cour de l’école\n' +
        '13 h · Grand pique-nique au parc (chacun apporte un plat)\n' +
        '16 h · Concert de l’harmonie du quartier sur la place\n' +
        'En cas de pluie, le pique-nique a lieu dans le gymnase.\n' +
        'Entrée libre pour toutes les activités.',
      items: [
        {
          q: 'Où a lieu le pique-nique s’il pleut ?',
          opts: ['Dans le gymnase', 'Au parc', 'Dans la cour de l’école', 'Sur la place'],
          correct: 0,
          why: 'Prévu au parc, il passe au gymnase en cas de pluie.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · le suivi d’un colis',
      text:
        'SUIVI DE VOTRE COLIS · N° 58204\n' +
        'Votre colis est arrivé au centre de tri.\n' +
        'Le livreur passera demain, mardi, entre 9 h et 12 h.\n' +
        'Vous serez absent ? Choisissez un autre créneau : jeudi, entre 14 h et 18 h.\n' +
        'Vous pouvez aussi retirer le colis à l’épicerie Lamy, rue des Érables, à partir de mercredi.',
      items: [
        {
          q: 'Quand peut-on retirer le colis à l’épicerie ?',
          opts: ['À partir de mercredi', 'Mardi, entre 9 h et 12 h', 'Jeudi après-midi', 'Dès aujourd’hui'],
          correct: 0,
          why: 'Mardi et jeudi sont les créneaux de livraison ; l’épicerie le garde à partir de mercredi.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · la location de skis',
      text:
        'LOCATION DE SKIS · STATION DU MONT-BRUNEL\n' +
        'Skis, bâtons et chaussures :\n' +
        'Adulte : 45 $ la journée · 180 $ la semaine\n' +
        'Enfant de moins de 12 ans : 25 $ la journée · 100 $ la semaine\n' +
        'Casque obligatoire, prêté gratuitement.\n' +
        'Une pièce d’identité est demandée en dépôt.',
      items: [
        {
          q: 'Combien coûte la location pour un adulte pendant une semaine ?',
          opts: ['180 $', '45 $', '100 $', '25 $'],
          correct: 0,
          why: 'La ligne adulte donne 45 $ à la journée et 180 $ à la semaine.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions: three carry two. A document with two
// questions is one where two pieces of the text must be joined.

export const CE_B1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Compréhension écrite · B1',
  prompt: 'Lisez les sept documents et choisissez la bonne réponse.',
  timingS: 850,
  targetItemIds: uniq(
    ITEMS.gouvernement.b1,
    ITEMS.bureau.b1,
    ITEMS.ecologie.b1,
    ITEMS.universite.b1,
    ITEMS.immigrationEtCitoyennete.b1,
    ITEMS.soins.b1,
    ITEMS.cinema.b1
  ),
  parts: [
    {
      label: 'Document 10 · une aide au loyer',
      text:
        'PROGRAMME D’AIDE AU LOYER · VILLE DE VAL-FERLIN\n' +
        'Le programme rembourse une partie du loyer aux ménages dont le loyer dépasse ' +
        'trente pour cent du revenu. Pour y avoir droit, il faut habiter la ville depuis au moins ' +
        'douze mois et ne pas être propriétaire d’un autre logement. ' +
        'Les étudiants à temps plein ne sont pas admissibles, sauf s’ils ont un enfant à charge.\n' +
        'L’aide est versée directement au locataire, chaque mois, pendant un an. ' +
        'Elle peut être renouvelée une fois, sur présentation d’une nouvelle déclaration de revenus.\n' +
        'Le dossier comprend le bail signé, les deux derniers avis d’imposition et une preuve d’adresse. ' +
        'Un dossier incomplet n’est pas refusé : il est mis en attente pendant trente jours, ' +
        'le temps d’envoyer les pièces manquantes.\n' +
        'Renseignements : comptoir des services aux citoyens, du lundi au vendredi.',
      items: [
        {
          q: 'Quel étudiant peut recevoir l’aide ?',
          opts: [
            'Un étudiant à temps plein avec un enfant à charge',
            'Tout étudiant à temps plein inscrit dans un établissement de la ville',
            'Un étudiant installé en ville depuis six mois',
            'Un étudiant propriétaire d’un studio',
          ],
          correct: 0,
          why: 'Les étudiants à temps plein sont exclus, sauf avec un enfant à charge ; il faut aussi douze mois de résidence.',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il si le dossier est incomplet ?',
          opts: [
            'Il reste en attente pendant trente jours',
            'Il est refusé immédiatement',
            'L’aide est versée pour six mois seulement',
            'Il faut attendre l’année suivante',
          ],
          correct: 0,
          why: 'Le texte précise qu’un dossier incomplet n’est pas refusé mais mis en attente trente jours.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · une note de service',
      text:
        'NOTE DE SERVICE · À tout le personnel\n' +
        'Objet : nouveaux badges d’accès\n' +
        'À partir du lundi 3 février, les clés des bureaux seront remplacées par des badges. ' +
        'Chacun recevra le sien à l’accueil, entre le 27 et le 31 janvier, sur présentation d’une pièce d’identité.\n' +
        'Le badge ouvre l’entrée principale de 7 h à 20 h. En dehors de ces horaires, ' +
        'il faudra prévenir la sécurité la veille. Les clés actuelles seront rendues ' +
        'au service technique au plus tard le 7 février.\n' +
        'Un badge perdu doit être signalé le jour même : il sera désactivé, ' +
        'et un nouveau badge sera remis contre dix dollars. Le premier badge est gratuit.\n' +
        'Le badge sert aussi à imprimer ; il remplace donc les codes personnels utilisés jusqu’ici.\n' +
        'La direction des services généraux',
      items: [
        {
          q: 'Que faut-il faire pour entrer dans le bâtiment à 21 h ?',
          opts: [
            'Prévenir la sécurité la veille',
            'Passer son badge à l’entrée principale',
            'Demander une clé au service technique',
            'Composer son code personnel',
          ],
          correct: 0,
          why: 'Le badge ne fonctionne que de 7 h à 20 h ; au-delà, il faut prévenir la sécurité la veille.',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il quand un badge est perdu ?',
          opts: [
            'Il est désactivé et remplacé contre dix dollars',
            'Il est remplacé gratuitement à l’accueil, le jour même',
            'L’employé reprend sa clé',
            'Il faut attendre le 7 février',
          ],
          correct: 0,
          why: 'Seul le premier badge est gratuit ; le remplacement coûte dix dollars après désactivation.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · composter dans un immeuble',
      text:
        'Depuis un an, une partie des immeubles du quartier des Hautes-Rives dispose ' +
        'd’un composteur collectif dans la cour. Le bilan, publié par l’association Terreau des Rives, ' +
        'est plus nuancé que prévu.\n' +
        'Dans les immeubles où un habitant s’est porté volontaire pour surveiller le bac, ' +
        'les déchets de cuisine ont baissé d’un tiers. Dans les autres, le composteur ' +
        'a souvent été abandonné après quelques mois : mauvaises odeurs, sacs en plastique ' +
        'jetés avec les épluchures, voisins découragés.\n' +
        'L’association en tire une conclusion simple. Le matériel ne suffit pas ; ' +
        'il faut une personne de référence, formée pendant une demi-journée, ' +
        'qui rappelle les règles et retourne le compost une fois par semaine.\n' +
        'Pour l’année prochaine, elle propose de n’installer un bac ' +
        'que dans les immeubles qui auront trouvé ce volontaire.',
      items: [
        {
          q: 'Qu’est-ce qui distingue les immeubles où le compostage a réussi ?',
          opts: [
            'Un habitant volontaire s’occupe du bac',
            'Le bac est placé loin des fenêtres',
            'Les habitants ont reçu des sacs adaptés',
            'L’immeuble compte peu de logements',
          ],
          correct: 0,
          why: 'Là où un volontaire surveille le bac, les déchets baissent d’un tiers ; ailleurs, le bac est abandonné.',
          band: 'b1',
        },
        {
          q: 'Que propose l’association pour l’année prochaine ?',
          opts: [
            'Installer des bacs seulement là où un volontaire existe',
            'Installer un bac dans chaque immeuble',
            'Remplacer les bacs par une collecte',
            'Payer une personne chargée de tous les bacs du quartier',
          ],
          correct: 0,
          why: 'Elle conditionne l’installation à la présence d’un volontaire formé.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · un courriel de professeure',
      text:
        'Objet : modification de l’évaluation · cours d’histoire du Canada\n' +
        'Bonjour à toutes et à tous,\n' +
        'Comme plusieurs d’entre vous l’ont demandé, l’examen final du 12 décembre ' +
        'est remplacé par deux travaux plus courts. Le premier, une analyse de document de trois pages, ' +
        'sera à rendre le 20 novembre. Le second, un exposé oral de dix minutes, ' +
        'aura lieu pendant les deux dernières semaines du semestre ; ' +
        'l’ordre de passage sera tiré au sort la semaine prochaine.\n' +
        'Chaque travail compte pour vingt pour cent de la note. Les soixante pour cent restants ' +
        'correspondent, comme prévu, aux trois contrôles déjà passés et à la participation.\n' +
        'Celles et ceux qui préfèrent garder l’examen final peuvent le faire : ' +
        'il suffit de me l’écrire avant le 1er novembre.\n' +
        'Bonne journée,\nAnne Lesage',
      items: [
        {
          q: 'Que doit faire un étudiant qui préfère passer l’examen final ?',
          opts: [
            'L’écrire à la professeure avant le 1er novembre',
            'Rendre l’analyse avant le 20 novembre',
            'Attendre le tirage au sort',
            'Se présenter le 12 décembre sans prévenir',
          ],
          correct: 0,
          why: 'L’examen reste possible à condition de prévenir par écrit avant le 1er novembre.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · un diplôme obtenu ailleurs',
      text:
        'FAIRE RECONNAÎTRE UN DIPLÔME OBTENU À L’ÉTRANGER · LES ÉTAPES\n' +
        '1. Demandez une évaluation comparative de vos études. Elle indique à quel diplôme d’ici ' +
        'votre formation correspond. Comptez environ trois mois, davantage en été, quand les demandes sont nombreuses.\n' +
        '2. Joignez une copie de vos diplômes et de vos relevés de notes, avec une traduction officielle ' +
        'si les documents ne sont ni en français ni en anglais.\n' +
        '3. Attention : l’évaluation comparative ne donne pas le droit d’exercer une profession réglementée, ' +
        'comme infirmière ou ingénieur. Pour ces métiers, il faut s’adresser à l’ordre professionnel concerné, ' +
        'qui peut exiger un stage ou un examen.\n' +
        '4. Les frais d’évaluation sont de cent vingt dollars. ' +
        'Ils ne sont pas remboursés si la demande est refusée ou abandonnée en cours de route.',
      items: [
        {
          q: 'Que faut-il faire pour travailler comme infirmière ?',
          opts: [
            'S’adresser à l’ordre professionnel',
            'Obtenir l’évaluation comparative, qui suffit',
            'Faire traduire ses diplômes en anglais',
            'Payer les frais une seconde fois',
          ],
          correct: 0,
          why: 'L’évaluation ne suffit pas pour une profession réglementée : l’ordre professionnel décide.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · une lettre de la clinique',
      text:
        'Clinique médicale des Hautes-Rives\n' +
        'Chers patients,\n' +
        'Le mois dernier, cent douze rendez-vous ont été manqués sans que la clinique soit prévenue. ' +
        'Cela représente près de trente heures de consultation perdues, ' +
        'alors que notre liste d’attente dépasse trois semaines.\n' +
        'À partir du 1er mars, un rappel sera envoyé par texto deux jours avant chaque rendez-vous. ' +
        'Il suffira de répondre « NON » pour libérer la place, qui sera aussitôt proposée à un autre patient.\n' +
        'Nous ne facturerons aucune pénalité. En revanche, après trois absences non signalées dans l’année, ' +
        'les rendez-vous ne pourront plus être pris en ligne : il faudra téléphoner au secrétariat. ' +
        'Les patients sans téléphone portable peuvent toujours annuler par courriel ou à l’accueil, comme aujourd’hui.\n' +
        'Merci de votre compréhension.\n' +
        'La direction',
      items: [
        {
          q: 'Que se passe-t-il après trois absences non signalées ?',
          opts: [
            'Il faut prendre rendez-vous par téléphone',
            'Une pénalité est facturée',
            'Le patient perd sa place à la clinique',
            'Les rappels par texto s’arrêtent',
          ],
          correct: 0,
          why: 'Aucune pénalité : la prise de rendez-vous en ligne est retirée, il faut téléphoner.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · un ciné-club',
      text:
        'À l’école secondaire des Trois-Chênes, le ciné-club du jeudi midi existe depuis quatre ans. ' +
        'Il est né d’une idée simple d’un enseignant de français, M. Ndiaye : ' +
        'montrer chaque semaine un film que les élèves n’auraient jamais choisi.\n' +
        'Au début, ils étaient six. Aujourd’hui, la salle de soixante places est pleine, ' +
        'et une liste d’attente a dû être ouverte.\n' +
        'Le secret, selon l’enseignant, n’est pas le choix des films, souvent anciens ou en noir et blanc. ' +
        'C’est la discussion de quinze minutes qui suit chaque projection : ' +
        'personne n’est obligé de parler, mais tout le monde reste.\n' +
        'Cette année, les élèves ont eux-mêmes proposé la moitié de la programmation. ' +
        'M. Ndiaye y voit la meilleure preuve de réussite : ils ne viennent plus seulement voir des films, ' +
        'ils veulent les faire découvrir.',
      items: [
        {
          q: 'Selon l’enseignant, qu’est-ce qui explique le succès du ciné-club ?',
          opts: [
            'La discussion qui suit chaque film',
            'Le choix de films récents',
            'La taille de la salle',
            'L’horaire du jeudi midi',
          ],
          correct: 0,
          why: 'Il écarte le choix des films, souvent anciens, et nomme la discussion de quinze minutes.',
          band: 'b1',
        },
      ],
    },
  ],
};
