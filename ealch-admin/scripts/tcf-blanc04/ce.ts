// TCF Canada blanc-04 — Compréhension écrite, the lower slope (A1, A2, B1).
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
  targetItemIds: uniq(ITEMS.presentationPersonnelle.a1, ITEMS.cuisine.a1, ITEMS.amis.a1),
  parts: [
    {
      label: 'Document 1 · un formulaire',
      text:
        'FICHE D’INSCRIPTION\n' +
        'Nom : Vasseur\n' +
        'Prénom : Camille\n' +
        'Date de naissance : 12 mars 1994\n' +
        'Ville : Boisclair\n' +
        'Téléphone : 04 55 21 09 88\n' +
        'Signature du responsable : ..............',
      items: [
        {
          q: 'Quel est le prénom de cette personne ?',
          opts: ['Camille', 'Vasseur', 'Boisclair', 'Mars'],
          correct: 0,
          why: 'La ligne « Prénom » indique Camille ; Vasseur est le nom.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · le menu de la semaine',
      text:
        'MENU DE L’ÉCOLE\n' +
        'Lundi : soupe de légumes, poisson, riz\n' +
        'Mardi : salade, poulet, pâtes\n' +
        'Jeudi : carottes, œufs, purée\n' +
        'Vendredi : soupe, poisson, haricots verts\n' +
        'Un fruit tous les jours.',
      items: [
        {
          q: 'Que mange-t-on le mardi ?',
          opts: ['Du poulet', 'Du poisson', 'Des œufs', 'De la soupe'],
          correct: 0,
          why: 'La ligne du mardi donne salade, poulet, pâtes.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · un message',
      text:
        'Salut Léa,\n' +
        'Tu es libre samedi après-midi ?\n' +
        'On peut prendre un café vers seize heures, près de la gare.\n' +
        'Dis-moi si ça te va.\n' +
        'Nadia',
      items: [
        {
          q: 'Que propose Nadia ?',
          opts: [
            'Prendre un café samedi',
            'Aller à la gare dimanche',
            'Déjeuner ensemble',
            'Se voir le matin',
          ],
          correct: 0,
          why: 'Elle propose un café samedi après-midi vers seize heures.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each document holds one competing line the candidate has to set
// aside — a second date, a second day, a second condition, a second price, a
// second age bracket, a second stop.

export const CE_A2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'a2',
  label: 'Compréhension écrite · A2',
  prompt: 'Lisez les six documents et choisissez la bonne réponse.',
  timingS: 430,
  targetItemIds: uniq(
    ITEMS.objets.a2,
    ITEMS.ecole.a2,
    ITEMS.sportsEtLoisirs.a2,
    ITEMS.hebergement.a2,
    ITEMS.systemeDeSante.a2
  ),
  parts: [
    {
      label: 'Document 4 · un avis de passage',
      text:
        'AVIS DE PASSAGE\n' +
        'Nous sommes passés ce mardi 4 à 11 h 20 et vous étiez absent.\n' +
        'Votre colis est gardé au bureau de la rue Perrin.\n' +
        'Vous pouvez le retirer à partir du lendemain, du mardi au samedi, de 9 h à 12 h.\n' +
        'Passé quinze jours, le colis repart chez l’expéditeur.\n' +
        'Présentez cet avis et une pièce d’identité.',
      items: [
        {
          q: 'À partir de quand le colis peut-il être retiré ?',
          opts: ['Le lendemain du passage', 'Le jour même', 'Après quinze jours', 'Le samedi seulement'],
          correct: 0,
          why: 'L’avis dit « à partir du lendemain » ; les quinze jours sont la limite, pas le début.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · une réunion de parents',
      text:
        'RÉUNION DES PARENTS\n' +
        'Chers parents,\n' +
        'La réunion des classes de sixième aura lieu le jeudi 18, à 18 h 30, dans la salle polyvalente.\n' +
        'Celle des classes de cinquième est prévue le mardi 23, à la même heure.\n' +
        'Merci de venir sans les enfants et de prévoir une heure et demie.\n' +
        'La direction',
      items: [
        {
          q: 'Quand les parents de sixième sont-ils attendus ?',
          opts: ['Le jeudi 18', 'Le mardi 23', 'Le jeudi 23', 'Le mardi 18'],
          correct: 0,
          why: 'Le jeudi 18 concerne la sixième ; le mardi 23 concerne la cinquième.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · une consigne au sauna',
      text:
        'SAUNA MUNICIPAL\n' +
        'Merci de prendre une douche avant d’entrer.\n' +
        'Une serviette est obligatoire pour s’asseoir ; le maillot de bain reste conseillé.\n' +
        'Durée recommandée : dix minutes par passage.\n' +
        'Le sauna est fermé le lundi pour l’entretien.\n' +
        'Les enfants de moins de douze ans ne sont pas admis.',
      items: [
        {
          q: 'Qu’est-ce qui est obligatoire ?',
          opts: ['La serviette', 'Le maillot de bain', 'Le bonnet', 'Les sandales'],
          correct: 0,
          why: 'La serviette est obligatoire ; le maillot est seulement conseillé.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · une annonce de garage',
      text:
        'À LOUER · GARAGE FERMÉ\n' +
        'Quartier des Tilleuls, quinze mètres carrés, porte automatique.\n' +
        'Soixante-cinq euros par mois, charges comprises.\n' +
        'Deux mois de dépôt de garantie à la signature.\n' +
        'Libre le premier du mois prochain.\n' +
        'Visites le samedi matin uniquement. Téléphoner en soirée.',
      items: [
        {
          q: 'Quand peut-on visiter le garage ?',
          opts: ['Le samedi matin', 'En soirée', 'Le premier du mois', 'Tous les jours'],
          correct: 0,
          why: 'Les visites sont le samedi matin ; la soirée est l’heure où l’on téléphone.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · une affiche de vaccination',
      text:
        'VACCINATION GRATUITE\n' +
        'Centre de santé de Boisclair, tous les mercredis d’octobre, de 14 h à 18 h.\n' +
        'Sans rendez-vous pour les personnes de plus de soixante-cinq ans.\n' +
        'Rendez-vous obligatoire pour les autres adultes.\n' +
        'Apportez votre carnet de vaccination si vous l’avez.\n' +
        'Aucune vaccination des enfants dans ce centre.',
      items: [
        {
          q: 'Qui peut venir sans rendez-vous ?',
          opts: [
            'Les personnes de plus de soixante-cinq ans',
            'Tous les adultes',
            'Les enfants',
            'Les personnes ayant leur carnet',
          ],
          correct: 0,
          why: 'Sans rendez-vous au-delà de soixante-cinq ans ; rendez-vous obligatoire pour les autres.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · le ramassage scolaire',
      text:
        'RAMASSAGE SCOLAIRE · LIGNE B\n' +
        'Place du Moulin : 7 h 25\n' +
        'Rue des Sources : 7 h 32\n' +
        'École du Pont : 7 h 45\n' +
        'Retour : départ de l’école à 16 h 40.\n' +
        'Le car n’attend pas. Soyez à l’arrêt cinq minutes avant.\n' +
        'Le mercredi, le retour se fait à 12 h 15.',
      items: [
        {
          q: 'À quelle heure faut-il être rue des Sources ?',
          opts: ['À 7 h 27', 'À 7 h 32', 'À 7 h 25', 'À 7 h 45'],
          correct: 0,
          why: 'Le car passe à 7 h 32 et l’avis demande d’être là cinq minutes avant.',
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
    ITEMS.musique.b1,
    ITEMS.sportsEtLoisirs.b1,
    ITEMS.quebecEtFrancophonie.b1,
    ITEMS.metiers.b1,
    ITEMS.reseauxSociaux.b1,
    ITEMS.systemeDeSante.b1,
    ITEMS.droit.b1
  ),
  parts: [
    {
      label: 'Document 10 · un festival et son budget',
      text:
        'Le festival des Rives fêtera sa douzième édition en juillet. Il a vendu neuf mille billets ' +
        'l’an dernier, contre six mille il y a trois ans, et son budget n’a pourtant pas augmenté.\n' +
        'L’explication tient en une ligne du bilan. La billetterie ne couvre qu’un tiers des dépenses. ' +
        'Le reste vient de subventions et d’un contrat de trois ans avec une entreprise de la région, ' +
        'qui arrive à son terme cette année.\n' +
        'La directrice ne cache pas l’inquiétude. « Nous pouvons remplir davantage, dit-elle, ' +
        'et cela ne changerait presque rien. Doubler le public rapporterait moins que le renouvellement ' +
        'de ce seul contrat. Les gens croient que nous vivons des entrées. »\n' +
        'L’association étudie une hausse du prix des billets, mais elle s’y résout mal : ' +
        'la moitié du public a moins de vingt-cinq ans, et c’est cette moitié qui partirait la première.',
      items: [
        {
          q: 'Pourquoi le budget n’a-t-il pas suivi la hausse du public ?',
          opts: [
            'La billetterie ne couvre qu’un tiers des dépenses',
            'Les subventions ont baissé',
            'Le festival dure moins longtemps',
            'Les billets ont été vendus moins cher',
          ],
          correct: 0,
          why: 'Le bilan indique que les entrées ne représentent qu’un tiers du financement.',
          band: 'b1',
        },
        {
          q: 'Pourquoi l’association hésite-t-elle à augmenter le prix des billets ?',
          opts: [
            'Le public jeune partirait le premier',
            'Le contrat l’interdit',
            'Les subventions seraient supprimées',
            'La salle est déjà pleine',
          ],
          correct: 0,
          why: 'La moitié du public a moins de vingt-cinq ans et c’est cette moitié qui partirait.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · un appel aux bénévoles',
      text:
        'La course des Coteaux se tiendra le dimanche 12 mai et cherche cent vingt bénévoles.\n' +
        'Les postes à pourvoir : ravitaillement, signalisation des carrefours, remise des dossards ' +
        'la veille au soir, et rangement à partir de quinze heures.\n' +
        'Aucune compétence particulière n’est demandée, sauf pour la signalisation, ' +
        'qui suppose d’avoir suivi la réunion de sécurité du jeudi précédent. ' +
        'Cette réunion dure une heure et se tient en ligne.\n' +
        'Les bénévoles reçoivent un repas, un tee-shirt et une entrée pour l’édition suivante. ' +
        'Ils ne peuvent pas courir le jour où ils encadrent.\n' +
        'Inscriptions jusqu’au 2 mai. Au-delà, les places restantes iront aux associations partenaires, ' +
        'qui présentent chaque année une trentaine de personnes.',
      items: [
        {
          q: 'Quel poste demande une préparation ?',
          opts: [
            'La signalisation des carrefours',
            'Le ravitaillement',
            'La remise des dossards',
            'Le rangement',
          ],
          correct: 0,
          why: 'Seule la signalisation suppose d’avoir suivi la réunion de sécurité.',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il après le 2 mai ?',
          opts: [
            'Les places restantes vont aux associations partenaires',
            'Les inscriptions restent ouvertes',
            'La course est annulée',
            'Les bénévoles peuvent aussi courir',
          ],
          correct: 0,
          why: 'Passé cette date, les places non pourvues reviennent aux associations partenaires.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · les langues d’une école',
      text:
        'À l’école Sainte-Marguerite, les élèves déclarent vingt-deux langues parlées à la maison. ' +
        'La direction a longtemps vu là une difficulté et présente aujourd’hui les choses autrement.\n' +
        'Le changement date d’une expérience menée sur deux ans. Une heure par semaine, ' +
        'les élèves ont enseigné à leurs camarades quelques mots de leur langue familiale. ' +
        'Les résultats en français n’ont pas bougé, ce que l’équipe attendait.\n' +
        'Ce qui a bougé, ce sont les absences. Elles ont reculé d’un cinquième, ' +
        'et surtout chez les familles qui ne venaient jamais aux réunions.\n' +
        'La directrice se garde de conclure trop vite. « Nous n’avons pas amélioré le français, dit-elle. ' +
        'Nous avons donné aux parents une raison d’entrer dans le bâtiment. ' +
        'Le reste viendra peut-être, et ce n’est pas ce que nous cherchions. »',
      items: [
        {
          q: 'Quel effet l’expérience a-t-elle eu ?',
          opts: [
            'Les absences ont diminué',
            'Le niveau de français a monté',
            'Le nombre de langues a augmenté',
            'Les réunions ont été supprimées',
          ],
          correct: 0,
          why: 'Les résultats en français n’ont pas bougé ; les absences ont reculé d’un cinquième.',
          band: 'b1',
        },
        {
          q: 'Comment la directrice interprète-t-elle ce résultat ?',
          opts: [
            'Les parents ont trouvé une raison de venir à l’école',
            'Les élèves parlent mieux leur langue familiale',
            'L’expérience doit être arrêtée',
            'Le français progressera l’an prochain',
          ],
          correct: 0,
          why: 'Elle refuse le mérite en français et retient l’entrée des familles dans le bâtiment.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · une fiche de poste',
      text:
        'RESPONSABLE DE L’ACCUEIL · MÉDIATHÈQUE DE VAUBOURG\n' +
        'Missions : organiser les plannings de l’équipe d’accueil, former les nouveaux agents, ' +
        'suivre les inscriptions et répondre aux réclamations écrites.\n' +
        'Le poste ne comprend pas la programmation culturelle, assurée par un autre service.\n' +
        'Profil recherché : expérience d’encadrement d’au moins deux ans, à l’accueil du public ' +
        'ou dans un autre métier de contact. Le diplôme n’est pas déterminant. ' +
        'La connaissance du logiciel de prêt s’acquiert en interne et n’est pas exigée à l’embauche.\n' +
        'Conditions : temps complet, un samedi sur trois travaillé, ' +
        'deux jours de télétravail possibles une fois la période d’essai terminée. ' +
        'Le poste est ouvert aux agents en mobilité comme aux candidatures extérieures.\n' +
        'Candidature par écrit avant le 30 avril, accompagnée d’une lettre décrivant ' +
        'une situation d’accueil difficile et la manière dont elle a été traitée. ' +
        'Entretiens la deuxième semaine de mai, prise de poste souhaitée au 1er septembre.',
      items: [
        {
          q: 'Qu’est-ce qui compte le plus dans le profil recherché ?',
          opts: [
            'Avoir encadré une équipe pendant deux ans',
            'Posséder un diplôme précis',
            'Avoir travaillé en médiathèque',
            'Savoir programmer des événements',
          ],
          correct: 0,
          why: 'L’expérience d’encadrement est exigée et le diplôme est dit non déterminant.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · l’information de quartier',
      text:
        'Une étude menée dans trois villes moyennes s’est intéressée à la façon dont les habitants ' +
        'apprennent ce qui se passe chez eux : une rue barrée, une école fermée, un conseil municipal.\n' +
        'Les réseaux sociaux arrivent largement en tête, devant le journal local et l’affichage.\n' +
        'Les auteurs relèvent pourtant une bizarrerie. Interrogés sur ce qu’ils ont appris, ' +
        'les habitants citent surtout des faits divers et des travaux, ' +
        'et presque jamais une décision prise en conseil.\n' +
        'Ce n’est pas que l’information manque : les comptes rendus circulent, ' +
        'et personne ne les ouvre. Un texte long partagé par un voisin reste un texte long.\n' +
        'L’étude conclut que ces réseaux transmettent bien ce qui se voit et mal ce qui se décide.',
      items: [
        {
          q: 'Que concluent les auteurs de l’étude ?',
          opts: [
            'Ces réseaux transmettent ce qui se voit, pas ce qui se décide',
            'Les habitants préfèrent le journal local',
            'Les comptes rendus ne circulent pas',
            'Les conseils municipaux sont mal tenus',
          ],
          correct: 0,
          why: 'Les faits visibles passent ; les décisions circulent sans être lues.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · des soins loin de tout',
      text:
        'Le canton de Ferrières compte quatre mille habitants et n’a plus de médecin depuis deux ans. ' +
        'La communauté de communes a ouvert un cabinet neuf, avec un logement et un loyer symbolique. ' +
        'Personne ne s’est présenté.\n' +
        'Le président de la communauté a fini par changer d’approche. « Nous offrions des murs, dit-il. ' +
        'Un médecin seul ne veut pas de murs, il veut des collègues. »\n' +
        'Le canton s’est donc associé à deux voisins pour proposer un poste partagé entre trois sites, ' +
        'avec deux autres praticiens et une secrétaire commune. Deux candidatures sont arrivées en un mois.\n' +
        'L’expérience se lit ailleurs de la même façon : ce qui décourage n’est pas la campagne, ' +
        'c’est l’exercice isolé.',
      items: [
        {
          q: 'Pourquoi le premier dispositif a-t-il échoué ?',
          opts: [
            'Il proposait un exercice isolé',
            'Le loyer était trop élevé',
            'Le cabinet était trop petit',
            'Le canton était trop peuplé',
          ],
          correct: 0,
          why: 'Le président résume : un médecin veut des collègues, pas des murs.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · quand le logement est vendu',
      text:
        'Un propriétaire qui vend un logement occupé ne peut pas mettre le locataire dehors ' +
        'du jour au lendemain. Le bail suit le logement : l’acheteur reprend le contrat en cours, ' +
        'aux mêmes conditions et jusqu’à son terme.\n' +
        'La question se pose au moment du renouvellement. Le nouveau propriétaire peut alors refuser ' +
        'de renouveler, à condition d’annoncer son intention six mois à l’avance et de motiver ce refus : ' +
        'habiter le logement lui-même, y loger un proche, ou vendre à nouveau.\n' +
        'Le locataire dispose d’un droit de priorité si le logement est remis en vente vide. ' +
        'Il doit alors être informé du prix et disposer de deux mois pour se décider.\n' +
        'Ces règles ne s’appliquent pas aux locations meublées de courte durée.',
      items: [
        {
          q: 'Que devient le bail quand le logement est vendu ?',
          opts: [
            'L’acheteur le reprend jusqu’à son terme',
            'Il s’arrête à la vente',
            'Il doit être renégocié aussitôt',
            'Il devient une location meublée',
          ],
          correct: 0,
          why: 'Le bail suit le logement et l’acheteur en reprend les conditions.',
          band: 'b1',
        },
      ],
    },
  ],
};
