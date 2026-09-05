// TCF Canada blanc-05 — Compréhension écrite, the lower slope (A1, A2, B1).
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
// is one retrievable line. No distractor appears in the text.

export const CE_A1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a1',
  label: 'Compréhension écrite · A1',
  prompt: 'Lisez les trois documents et choisissez la bonne réponse.',
  timingS: 170,
  targetItemIds: uniq(ITEMS.marche.a1, ITEMS.ecole.a1, ITEMS.objets.a1),
  parts: [
    {
      label: 'Document 1 · un ticket de caisse',
      text:
        'ÉPICERIE DU PONT\n' +
        'Pain complet .......... 2,40\n' +
        'Fromage ............... 5,10\n' +
        'Pommes (1 kg) ......... 3,20\n' +
        'TOTAL ................ 10,70\n' +
        'Carte bancaire · Merci de votre visite',
      items: [
        {
          q: 'Combien coûte le fromage ?',
          opts: ['5,10 euros', '2,40 euros', '3,20 euros', '10,70 euros'],
          correct: 0,
          why: 'La ligne « Fromage » indique 5,10.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · l’emploi du temps',
      text:
        'CLASSE DE CINQUIÈME B · MARDI\n' +
        '8 h 30 · Mathématiques\n' +
        '9 h 30 · Histoire\n' +
        '10 h 45 · Anglais\n' +
        '14 h 00 · Sport\n' +
        'Pas de cours le mercredi après-midi.',
      items: [
        {
          q: 'Quel cours a lieu à dix heures quarante-cinq ?',
          opts: ['Anglais', 'Histoire', 'Mathématiques', 'Sport'],
          correct: 0,
          why: 'La ligne de 10 h 45 indique Anglais.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · une liste',
      text:
        'SORTIE DE SAMEDI · À APPORTER\n' +
        'Une bouteille d’eau\n' +
        'Un chapeau\n' +
        'De bonnes chaussures\n' +
        'Un pique-nique\n' +
        'Les téléphones restent à la maison.',
      items: [
        {
          q: 'Qu’est-ce qu’il ne faut pas apporter ?',
          opts: ['Le téléphone', 'Le chapeau', 'L’eau', 'Le pique-nique'],
          correct: 0,
          why: 'La dernière ligne dit que les téléphones restent à la maison.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each document holds one competing line the candidate has to set
// aside — a second quantity, a second morning, a second collection point, a
// second option, a second bin, a second setting.

export const CE_A2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'a2',
  label: 'Compréhension écrite · A2',
  prompt: 'Lisez les six documents et choisissez la bonne réponse.',
  timingS: 430,
  targetItemIds: uniq(ITEMS.cuisine.a2, ITEMS.maison.a2, ITEMS.marche.a2, ITEMS.appareils.a2),
  parts: [
    {
      label: 'Document 4 · une recette',
      text:
        'GALETTE DE POMMES DE TERRE · POUR QUATRE PERSONNES\n' +
        'Six pommes de terre, deux œufs, cent grammes de fromage râpé, une cuillère de farine.\n' +
        'Râpez les pommes de terre et pressez-les pour retirer l’eau.\n' +
        'Mélangez avec les œufs, le fromage et la farine.\n' +
        'Faites cuire vingt minutes à la poêle, dix minutes de chaque côté.\n' +
        'Servez chaud, avec une salade verte.',
      items: [
        {
          q: 'Combien de temps faut-il cuire la galette au total ?',
          opts: ['Vingt minutes', 'Dix minutes', 'Trente minutes', 'Une heure'],
          correct: 0,
          why: 'Vingt minutes en tout, dix de chaque côté.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · un avis de coupure',
      text:
        'AVIS AUX RÉSIDENTS\n' +
        'En raison de travaux sur la canalisation principale, l’eau sera coupée ' +
        'le jeudi 14, de huit heures à treize heures.\n' +
        'Les appartements du bâtiment B ne sont pas concernés.\n' +
        'Nous vous conseillons de remplir quelques bouteilles la veille au soir.\n' +
        'Après le rétablissement, laissez couler l’eau deux minutes avant de la boire.\n' +
        'Le syndic',
      items: [
        {
          q: 'Que faut-il faire avant le jeudi 14 ?',
          opts: [
            'Remplir des bouteilles d’eau',
            'Laisser couler l’eau deux minutes',
            'Quitter le bâtiment B',
            'Prévenir le syndic',
          ],
          correct: 0,
          why: 'Le conseil pour la veille au soir est de remplir des bouteilles ; laisser couler vient après.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · des paniers à la ferme',
      text:
        'FERME DES QUATRE VENTS · PANIERS DE LÉGUMES\n' +
        'Petit panier : 12 euros · Grand panier : 19 euros.\n' +
        'Commande à passer avant le lundi soir.\n' +
        'Retrait le mercredi de 17 h à 19 h à la ferme, ' +
        'ou le jeudi de 18 h à 19 h sur le parking de la salle des fêtes.\n' +
        'Aucun retrait le samedi. Pensez à apporter votre sac.',
      items: [
        {
          q: 'Où peut-on retirer son panier le jeudi ?',
          opts: [
            'Sur le parking de la salle des fêtes',
            'À la ferme',
            'Au marché',
            'À la mairie',
          ],
          correct: 0,
          why: 'Le mercredi c’est à la ferme ; le jeudi c’est sur le parking.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · un bon de commande',
      text:
        'BOULANGERIE MARVILLE · COMMANDE\n' +
        'Nom : Delorme · Téléphone : 06 41 22 87 05\n' +
        'Retrait : samedi 22, à 11 h\n' +
        'Deux baguettes\n' +
        'Un gâteau au chocolat pour huit personnes\n' +
        'Écrire sur le gâteau : Bon anniversaire Yanis\n' +
        'Acompte versé : 10 euros · Reste à payer : 22 euros',
      items: [
        {
          q: 'Combien reste-t-il à payer au retrait ?',
          opts: ['22 euros', '10 euros', '32 euros', '8 euros'],
          correct: 0,
          why: 'L’acompte de 10 euros est déjà versé ; il reste 22 euros.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · le calendrier de collecte',
      text:
        'COLLECTE DES DÉCHETS · IMMEUBLE LES TILLEULS\n' +
        'Bac gris (ordures ménagères) : lundi et jeudi.\n' +
        'Bac jaune (papier, carton, plastique) : mercredi, une semaine sur deux.\n' +
        'Verre : conteneur au bout de la rue, à tout moment.\n' +
        'Sortez les bacs la veille après vingt heures.\n' +
        'Les encombrants sont ramassés le premier mardi du mois, sur rendez-vous.',
      items: [
        {
          q: 'Que fait-on des bouteilles en verre ?',
          opts: [
            'On les porte au conteneur de la rue',
            'On les met dans le bac jaune',
            'On les met dans le bac gris',
            'On attend le premier mardi',
          ],
          correct: 0,
          why: 'Le bac jaune prend papier, carton et plastique ; le verre va au conteneur.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · un mode d’emploi',
      text:
        'FOUR À MICRO-ONDES · UTILISATION RAPIDE\n' +
        'Position 1 : décongélation. Position 2 : réchauffage. Position 3 : cuisson.\n' +
        'Réglez d’abord la position, puis la durée, puis appuyez sur DÉPART.\n' +
        'N’utilisez aucun récipient en métal, même en position 1.\n' +
        'Les plats en verre et en céramique conviennent.\n' +
        'Laissez reposer une minute avant de sortir le plat.',
      items: [
        {
          q: 'Quel récipient est interdit ?',
          opts: [
            'Un récipient en métal',
            'Un plat en verre',
            'Un plat en céramique',
            'Un récipient couvert',
          ],
          correct: 0,
          why: 'Le métal est interdit à toutes les positions ; verre et céramique conviennent.',
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
    ITEMS.journalisme.b1,
    ITEMS.examensEtDiplomes.b1,
    ITEMS.communaute.b1,
    ITEMS.argentQuotidien.b1,
    ITEMS.entraide.b1,
    ITEMS.musique.b1
  ),
  parts: [
    {
      label: 'Document 10 · des postes que personne ne prend',
      text:
        'Le secteur de la restauration déclare quinze mille postes non pourvus dans la région, ' +
        'et le chiffre est repris chaque année sans être discuté.\n' +
        'Une enquête menée auprès de deux cents établissements apporte une précision utile. ' +
        'Le manque est réel, et il se concentre sur un tiers des employeurs. ' +
        'Les deux autres tiers recrutent normalement, avec des délais comparables ' +
        'à ceux des autres secteurs.\n' +
        'Ce qui distingue le tiers en difficulté ne tient ni à la taille ni à la localisation. ' +
        'Ce sont les mêmes établissements qui pratiquent les coupures de service, ' +
        'les horaires annoncés la veille et les contrats saisonniers renouvelés d’année en année.\n' +
        'Les auteurs se gardent d’en tirer une leçon générale. ' +
        'Ils notent seulement qu’un manque de main-d’œuvre concentré sur un tiers du secteur ' +
        'se décrit mal comme une pénurie, et mieux comme un écart de conditions.',
      items: [
        {
          q: 'Que précise l’enquête sur le manque de personnel ?',
          opts: [
            'Il se concentre sur un tiers des employeurs',
            'Il touche tout le secteur également',
            'Il est plus fort dans les grandes villes',
            'Il concerne surtout les petits établissements',
          ],
          correct: 0,
          why: 'Les deux autres tiers recrutent dans des délais ordinaires.',
          band: 'b1',
        },
        {
          q: 'Qu’est-ce qui distingue les établissements en difficulté ?',
          opts: [
            'Leurs conditions de travail',
            'Leur taille',
            'Leur emplacement',
            'Leur ancienneté',
          ],
          correct: 0,
          why: 'Ni la taille ni la localisation : les coupures, les horaires tardifs, les contrats saisonniers.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · un conseil d’école',
      text:
        'COMPTE RENDU · CONSEIL D’ÉCOLE DU 12 NOVEMBRE\n' +
        'Présents : la directrice, cinq enseignants, quatre représentants de parents, un élu municipal.\n' +
        'Effectifs. L’école compte cent quatre-vingt-douze élèves, contre deux cent onze l’an dernier. ' +
        'Une fermeture de classe est envisagée pour la rentrée prochaine. ' +
        'La décision appartient à l’académie et sera connue en février.\n' +
        'Cantine. Le passage à deux services a réduit le bruit et allongé la pause des grands. ' +
        'Les parents demandent que le second service ne commence pas après treize heures.\n' +
        'Sorties. La sortie au musée est reportée au printemps, faute de transport disponible. ' +
        'La coopérative prendra en charge la moitié du coût du car.\n' +
        'Prochain conseil : le 4 mars.',
      items: [
        {
          q: 'Qui décidera de la fermeture de classe ?',
          opts: ['L’académie', 'La directrice', 'Le conseil d’école', 'La mairie'],
          correct: 0,
          why: 'Le compte rendu précise que la décision appartient à l’académie, en février.',
          band: 'b1',
        },
        {
          q: 'Pourquoi la sortie au musée est-elle reportée ?',
          opts: [
            'Aucun transport n’était disponible',
            'Le musée était fermé',
            'La coopérative manquait d’argent',
            'Les parents s’y sont opposés',
          ],
          correct: 0,
          why: 'Faute de transport ; la coopérative paie la moitié du car.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · une charte d’usage',
      text:
        'CHARTE D’UTILISATION DES SALLES ASSOCIATIVES\n' +
        'Les salles sont prêtées gratuitement aux associations de la commune, ' +
        'sur réservation au moins dix jours à l’avance.\n' +
        'Une caution de cent cinquante euros est demandée à la première réservation de l’année. ' +
        'Elle est rendue en fin de saison si aucun dégât n’a été constaté.\n' +
        'Chaque association range et nettoie la salle après usage. ' +
        'Le matériel commun (tables, chaises, sono) reste dans la salle et ne sort pas du bâtiment.\n' +
        'Une réservation non annulée quarante-huit heures avant compte comme une utilisation. ' +
        'Trois réservations non honorées dans l’année suspendent l’accès jusqu’à la saison suivante.\n' +
        'Les activités payantes ou commerciales ne relèvent pas de cette charte ' +
        'et font l’objet d’une location ordinaire.',
      items: [
        {
          q: 'Quand la caution est-elle rendue ?',
          opts: [
            'En fin de saison, si rien n’est abîmé',
            'Après chaque utilisation',
            'À la troisième réservation',
            'Elle n’est jamais rendue',
          ],
          correct: 0,
          why: 'Elle est versée une fois par an et rendue en fin de saison sans dégâts constatés.',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il après trois réservations non honorées ?',
          opts: [
            'L’accès est suspendu jusqu’à la saison suivante',
            'La caution est conservée',
            'La réservation devient payante',
            'Le délai passe à vingt jours',
          ],
          correct: 0,
          why: 'La charte suspend l’accès jusqu’à la saison suivante.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · ouvrir un compte',
      text:
        'OUVRIR UN COMPTE BANCAIRE · CE QU’IL FAUT SAVOIR\n' +
        'Toute personne résidant dans le pays a droit à un compte de dépôt. ' +
        'Une banque peut refuser un client, mais le refus doit être écrit.\n' +
        'Avec ce refus écrit, vous pouvez saisir la banque centrale, ' +
        'qui désignera un établissement obligé de vous ouvrir un compte. ' +
        'Ce compte comprend les services de base : une carte de retrait, des virements, des relevés.\n' +
        'Les pièces demandées sont une pièce d’identité et un justificatif de domicile de moins de trois mois. ' +
        'Un justificatif au nom d’un proche est accepté s’il est accompagné d’une attestation d’hébergement.\n' +
        'Le délai légal est de trois jours ouvrés après la désignation.',
      items: [
        {
          q: 'Que permet un refus écrit ?',
          opts: [
            'De faire désigner une banque par la banque centrale',
            'D’ouvrir le compte immédiatement ailleurs',
            'D’obtenir une carte de crédit',
            'De contester le justificatif de domicile',
          ],
          correct: 0,
          why: 'Le refus écrit ouvre la saisine, qui aboutit à une désignation.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · une notice de sécurité',
      text:
        'CHANTIER PARTICIPATIF · CONSIGNES\n' +
        'Merci de vous présenter à l’accueil avant de rejoindre un poste. ' +
        'Chaque bénévole est rattaché à un référent, qui signe sa fiche en fin de journée.\n' +
        'Les chaussures fermées sont obligatoires. Casques et gants sont fournis sur place ' +
        'et restent sur le chantier.\n' +
        'Les mineurs de plus de seize ans sont acceptés avec une autorisation écrite, ' +
        'sur les postes de peinture et de jardinage uniquement.\n' +
        'Aucune machine électroportative n’est confiée à un bénévole ' +
        'qui n’a pas suivi la demi-journée de formation du samedi. ' +
        'Cette formation se répète chaque mois et reste valable un an.\n' +
        'Le port de charges se fait à deux au-delà de vingt kilos, sans exception. ' +
        'La trousse de secours se trouve dans l’algeco, à côté de la liste des présents.\n' +
        'En cas de doute sur un geste, arrêtez-vous et demandez au référent. ' +
        'Personne ici ne vous reprochera une question ; ' +
        'nous avons tous appris ce que nous savons de la même façon.',
      items: [
        {
          q: 'Qui peut utiliser une machine électroportative ?',
          opts: [
            'Un bénévole ayant suivi la formation du samedi',
            'Tout bénévole majeur',
            'Les bénévoles accompagnés d’un référent',
            'Personne sur ce chantier',
          ],
          correct: 0,
          why: 'La demi-journée de formation conditionne l’accès aux machines.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · un échange entre voisins',
      text:
        'Bonjour à tous,\n' +
        'Je relance l’idée dont nous avions parlé en juin : un échange de services entre voisins, ' +
        'sans argent et sans association à créer.\n' +
        'Le principe serait simple. Chacun écrit ce qu’il peut rendre comme service, ' +
        'et ce dont il aurait besoin. Une heure vaut une heure, quel que soit le service, ' +
        'pour éviter d’avoir à décider qu’un cours de mathématiques vaut plus qu’un déplacement en voiture.\n' +
        'Je propose de commencer à douze foyers, ce qui suffit à faire circuler les demandes ' +
        'et reste assez petit pour que chacun connaisse les autres.\n' +
        'Répondez-moi avant le 30 si vous souhaitez en être. ' +
        'Une première rencontre aurait lieu chez moi le samedi suivant.\n' +
        'Salima, bâtiment C',
      items: [
        {
          q: 'Quelle est la règle proposée pour les échanges ?',
          opts: [
            'Une heure vaut une heure, quel que soit le service',
            'Chaque service a un tarif fixé à l’avance',
            'Les services sont payés au prix du marché',
            'Chacun choisit ce que vaut son heure',
          ],
          correct: 0,
          why: 'La règle évite d’avoir à comparer la valeur des services entre eux.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · un règlement de studio',
      text:
        'STUDIO DE RÉPÉTITION · RÈGLEMENT INTÉRIEUR\n' +
        'Les créneaux durent deux heures et se réservent en ligne, quinze jours à l’avance au maximum.\n' +
        'Un groupe ne peut détenir plus de deux créneaux à venir en même temps. ' +
        'Cette limite tombe le jeudi pour la semaine en cours : les créneaux restants ' +
        'sont alors ouverts à tous, sans limite de nombre.\n' +
        'La batterie et l’ampli basse restent en place. ' +
        'Les micros se retirent à l’accueil et se rendent à la fin du créneau.\n' +
        'Le studio ferme à vingt-trois heures, y compris le samedi. ' +
        'Le rangement fait partie du créneau : prévoyez un quart d’heure.\n' +
        'Une annulation moins de vingt-quatre heures avant est facturée.',
      items: [
        {
          q: 'Quand la limite de deux créneaux ne s’applique-t-elle plus ?',
          opts: [
            'Le jeudi, pour la semaine en cours',
            'Le samedi soir',
            'Quinze jours à l’avance',
            'Après une annulation',
          ],
          correct: 0,
          why: 'Le jeudi, les créneaux restants de la semaine s’ouvrent sans limite.',
          band: 'b1',
        },
      ],
    },
  ],
};
