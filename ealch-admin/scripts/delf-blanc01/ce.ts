// DELF B2 blanc-01 — Compréhension des écrits. 20 questions, 25 points, 1 h.
//
// Three exercises worth 9, 9 and 7. The first two are single continuous texts;
// the third is an ATTRIBUTION task and is a different exercise wearing MCQ
// clothing — see the note above CE_EX3.
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

/* ═══ EXERCICE 1 — 9 points ═══════════════════════════════════════════════ */
//
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
//
// SELF-VERIFY: the text states a position AND a competing consideration, or
// the attribute and weigh families would have nothing to bite on.

export const CE_EX1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 1',
  prompt:
    'Comprendre un texte informatif ou argumentatif.\n' +
    'Lisez le document puis répondez aux questions en cochant la bonne réponse.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.ecologie),
  parts: [
    {
      label: 'Exercice 1 · les ateliers de réparation',
      text:
        'LES ATELIERS DE RÉPARATION RÉPARENT-ILS AUTRE CHOSE QUE DES OBJETS ?\n\n' +
        'Ils étaient une poignée il y a dix ans ; on en compte aujourd’hui près de mille quatre cents ' +
        'en France, ouverts un samedi par mois dans une salle municipale ou un local associatif. ' +
        'On y vient avec un grille-pain, une lampe, parfois une machine à coudre, ' +
        'et quelqu’un de bénévole regarde avec vous ce qui ne va pas.\n\n' +
        'Le bilan écologique de ces ateliers est régulièrement présenté comme considérable. ' +
        'Il ne l’est pas, et leurs animateurs sont souvent les premiers à le dire. ' +
        'Un atelier actif remet en service entre deux cents et quatre cents objets par an. ' +
        'Rapporté aux volumes que traite une déchetterie de taille moyenne, ' +
        'c’est un chiffre que l’on peine à distinguer de zéro.\n\n' +
        'Faut-il en conclure que le dispositif est symbolique ? ' +
        'Une chercheuse qui a suivi onze ateliers pendant trois ans propose de déplacer la question. ' +
        'Ce qu’elle a mesuré n’est pas le tonnage évité mais ce que font les visiteurs ensuite. ' +
        'Un an après une première visite, la moitié d’entre eux déclarent avoir renoncé ' +
        'à au moins un achat qu’ils auraient fait auparavant sans y penser, ' +
        'et un tiers ont réparé seuls un objet qu’ils auraient jeté. ' +
        'L’atelier ne répare pas beaucoup ; il change ce que l’on croit réparable.\n\n' +
        'L’objection la plus solide ne vient pas des sceptiques mais de l’intérieur. ' +
        'Plusieurs animateurs signalent que leur public se renouvelle peu, ' +
        'et qu’il ressemble beaucoup à celui des associations de quartier en général : ' +
        'plutôt diplômé, plutôt propriétaire, plutôt déjà convaincu. ' +
        'Un dispositif qui transforme le rapport à l’objet chez des gens ' +
        'qui jetaient déjà relativement peu déplace moins qu’il n’y paraît.\n\n' +
        'La chercheuse ne conteste pas ce point et refuse la conclusion qu’on en tire. ' +
        'Selon elle, l’erreur consiste à juger l’atelier comme un service de traitement des déchets, ' +
        'alors qu’il fonctionne comme un lieu d’apprentissage. ' +
        'On ne reproche pas à une bibliothèque de ne pas contenir tous les livres. ' +
        'Le problème du public restreint est réel, ajoute-t-elle, ' +
        'et c’est un problème d’implantation et d’horaires, pas de principe : ' +
        'les trois ateliers de son échantillon installés dans des centres sociaux, ' +
        'ouverts en semaine et en fin de journée, présentent un public ' +
        'qui ne ressemble à aucun des huit autres.\n\n' +
        'Reste une question que le bilan ne tranche pas et qu’il pose bien. ' +
        'Ces ateliers reposent entièrement sur des bénévoles qui savent réparer, ' +
        'et ces bénévoles ont en moyenne soixante et un ans. ' +
        'Ils ont appris dans des ateliers d’usine qui n’existent plus, ' +
        'et rien n’indique d’où viendra la génération suivante. ' +
        'Plusieurs associations ont ouvert des séances de transmission ' +
        'où le visiteur ne fait pas réparer son objet mais apprend à le faire. ' +
        'Elles sont peu fréquentées, et leurs animateurs reconnaissent ' +
        'qu’il est plus facile d’attirer quelqu’un qui veut un grille-pain qui marche ' +
        'que quelqu’un qui veut passer trois samedis à comprendre pourquoi il ne marche plus.',
      items: [
        {
          q: 'Combien d’objets un atelier actif remet-il en service chaque année ?',
          opts: ['Entre deux cents et quatre cents', 'Environ mille quatre cents', 'Onze', 'Un tiers de ce qu’il reçoit'],
          correct: 0,
          why: 'Le chiffre est donné explicitement ; mille quatre cents est le nombre d’ateliers.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Que disent les animateurs du bilan écologique de leur atelier ?',
          opts: [
            'Ils reconnaissent eux-mêmes qu’il est modeste',
            'Ils le jugent considérable',
            'Ils refusent de le chiffrer',
            'Ils le comparent aux déchetteries pour le défendre',
          ],
          correct: 0,
          why: 'Le texte dit qu’ils sont souvent les premiers à le dire.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qu’a mesuré la chercheuse ?',
          opts: [
            'Ce que font les visiteurs après leur visite',
            'Le tonnage de déchets évité',
            'Le nombre d’objets réparés',
            'La satisfaction des bénévoles',
          ],
          correct: 0,
          why: 'Elle déplace la question du tonnage vers le comportement ultérieur.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que déclare la moitié des visiteurs un an après ?',
          opts: [
            'Avoir renoncé à au moins un achat',
            'Avoir réparé seuls un objet',
            'Être revenus à l’atelier',
            'Avoir convaincu un proche',
          ],
          correct: 0,
          why: 'La moitié renonce à un achat ; c’est un tiers qui a réparé seul.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'D’où vient l’objection que le texte juge la plus solide ?',
          opts: [
            'Des animateurs eux-mêmes',
            'Des sceptiques du dispositif',
            'De la chercheuse',
            'Des services de déchetterie',
          ],
          correct: 0,
          why: 'Le texte précise qu’elle ne vient pas des sceptiques mais de l’intérieur.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Comment la chercheuse répond-elle à cette objection ?',
          opts: [
            'Elle l’accepte mais y voit un problème d’implantation, non de principe',
            'Elle conteste que le public soit homogène',
            'Elle juge l’objection sans importance',
            'Elle propose de fermer les ateliers les moins fréquentés',
          ],
          correct: 0,
          why: 'Elle ne conteste pas le point ; les trois ateliers en centre social ont un autre public.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'À quoi compare-t-elle un atelier de réparation ?',
          opts: ['À une bibliothèque', 'À une déchetterie', 'À un centre social', 'À une association de quartier'],
          correct: 0,
          why: 'On ne reproche pas à une bibliothèque de ne pas contenir tous les livres.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// Weights: 1 · 1 · 1.5 · 0.5 · 2 · 2.5 · 0.5 = 9

export const CE_EX2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 2',
  prompt:
    'Comprendre un texte informatif ou argumentatif.\n' +
    'Lisez le document puis répondez aux questions en cochant la bonne réponse.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.rechercheEmploi),
  parts: [
    {
      label: 'Exercice 2 · la profession qui a supprimé son concours',
      text:
        'CE QUE L’ON APPREND EN SUPPRIMANT UN CONCOURS\n\n' +
        'Il y a six ans, la profession de géomètre-expert a remplacé son concours d’entrée ' +
        'par un dossier et un entretien. La décision avait été prise contre l’avis ' +
        'd’une partie de la profession, qui y voyait la fin d’une garantie. ' +
        'Le bilan publié le mois dernier est plus intéressant que ne l’espéraient ' +
        'les deux camps, parce qu’il ne donne raison ni à l’un ni à l’autre.\n\n' +
        'Les partisans du changement attendaient une ouverture sociale. ' +
        'Elle a eu lieu, et elle est modeste : la part d’admis dont les parents ' +
        'n’ont pas fait d’études supérieures est passée de dix-huit à vingt-cinq pour cent. ' +
        'C’est une progression réelle et c’est loin du basculement annoncé.\n\n' +
        'Les opposants attendaient une baisse de niveau. ' +
        'Elle ne s’est pas produite. Les résultats aux épreuves de fin de formation ' +
        'sont stables, et le taux d’abandon en première année a même légèrement reculé. ' +
        'Sur ce point, l’argument le plus répété pendant le débat s’est révélé faux, ' +
        'et il n’a pas pour autant disparu des discussions.\n\n' +
        'Ce que le bilan met en évidence, personne ne l’avait mis en avant. ' +
        'Le concours ne sélectionnait pas seulement des candidats : il les datait. ' +
        'Une épreuve unique en juin produisait une promotion entrée au même moment, ' +
        'du même âge, sortie du même type de formation. ' +
        'Le dossier a fait entrer des gens de trente-cinq ans en reconversion, ' +
        'des techniciens qui exerçaient déjà, des candidats venus d’une autre discipline. ' +
        'Les écoles décrivent des promotions plus difficiles à enseigner, ' +
        'et des stages où les employeurs remarquent une différence qu’ils ont du mal à nommer.\n\n' +
        'Faut-il y voir un succès ? L’auteure du bilan s’y refuse et explique pourquoi. ' +
        'Un dispositif d’entrée ne se juge pas sur six ans mais sur la carrière de ceux qu’il a fait entrer, ' +
        'et la première promotion concernée exerce depuis deux ans. ' +
        'Ce que l’on peut dire, écrit-elle, c’est qu’aucune des deux prédictions ' +
        'qui structuraient le débat ne s’est vérifiée, ' +
        'et qu’un débat mené sur deux hypothèses fausses a occupé quatre ans ' +
        'pendant lesquels personne n’a discuté de ce qui se produisait réellement.\n\n' +
        'Ce constat vaut au-delà d’une profession. ' +
        'Une quinzaine de filières ont modifié leur mode d’entrée depuis dix ans, ' +
        'et presque toutes ont vu s’installer le même affrontement : ' +
        'ouverture sociale contre niveau, chacun avec sa prédiction, ' +
        'aucune des deux ne se vérifiant vraiment. ' +
        'Ce qui change, à chaque fois, se trouve ailleurs et n’est mesuré par personne, ' +
        'parce qu’il faudrait pour cela avoir prévu de le mesurer.\n\n' +
        'L’auteure formule une recommandation modeste et inhabituelle. ' +
        'Avant de modifier une entrée, écrit-elle, il faudrait publier ' +
        'la liste des choses que l’on s’attend à voir changer, ' +
        'et la publier avant de connaître le résultat. ' +
        'Sans cela, chaque camp lira le bilan comme une confirmation, ' +
        'et le débat suivant recommencera exactement au même point.',
      items: [
        {
          q: 'Qu’est-ce qui a remplacé le concours d’entrée ?',
          opts: ['Un dossier et un entretien', 'Un examen écrit', 'Un stage probatoire', 'Un tirage au sort'],
          correct: 0,
          why: 'Indiqué dès la première phrase.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle a été l’évolution de l’ouverture sociale ?',
          opts: [
            'De dix-huit à vingt-cinq pour cent',
            'De vingt-cinq à dix-huit pour cent',
            'Aucune évolution',
            'Un doublement',
          ],
          correct: 0,
          why: 'Le chiffre est donné, et qualifié de réel mais modeste.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qu’est-il arrivé au niveau des admis ?',
          opts: [
            'Il est resté stable, et les abandons ont reculé',
            'Il a baissé nettement',
            'Il a progressé fortement',
            'Il n’a pas pu être mesuré',
          ],
          correct: 0,
          why: 'Résultats stables, abandon en première année en léger recul.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Depuis combien de temps la première promotion concernée exerce-t-elle ?',
          opts: ['Deux ans', 'Six ans', 'Quatre ans', 'Un an'],
          correct: 0,
          why: 'Le bilan porte sur six ans ; la première promotion exerce depuis deux.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Quel effet inattendu le bilan met-il en évidence ?',
          opts: [
            'Le concours homogénéisait l’âge et le parcours des admis',
            'Le concours coûtait très cher à organiser',
            'Le dossier avantage les candidats les plus jeunes',
            'Les écoles ont dû réduire leurs effectifs',
          ],
          correct: 0,
          why: 'Il ne sélectionnait pas seulement : il datait. Une promotion du même âge, du même parcours.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi l’auteure refuse-t-elle de parler de succès ?',
          opts: [
            'Un dispositif d’entrée se juge sur des carrières, pas sur six ans',
            'Parce que l’ouverture sociale est trop faible',
            'Parce que les écoles s’en plaignent',
            'Parce que le niveau a baissé',
          ],
          correct: 0,
          why: 'Elle donne la raison explicitement, et la première promotion n’exerce que depuis deux ans.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que reproche-t-elle au débat qui a précédé la réforme ?',
          opts: [
            'Il reposait sur deux hypothèses qui se sont révélées fausses',
            'Il a été trop court',
            'Il a exclu les écoles',
            'Il portait sur le mauvais métier',
          ],
          correct: 0,
          why: 'Aucune des deux prédictions ne s’est vérifiée, et le débat a occupé quatre ans.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 3 — 7 points ═══════════════════════════════════════════════ */
//
// ATTRIBUTION, not comprehension-within-one-text. Four signed opinions on one
// question; each item asks WHICH PERSON said something, so the options are the
// speakers' names.
//
// The authoring rules that make it work (STANDARD-delf-b2 §4), all checked:
//   · four DISTINCT positions, not four degrees of one — two speakers who
//     broadly agree make an unanswerable item however different their prose;
//   · roughly equal text each, or the longest becomes the default guess;
//   · every speaker answers at least one item, none more than half;
//   · the statement PARAPHRASES and never quotes, or the task becomes
//     word-matching.
//
// Weights: 1 · 1 · 1.5 · 1 · 1.5 · 1 = 7

export const CE_EX3: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 3',
  prompt:
    'Comprendre le point de vue de plusieurs locuteurs francophones.\n' +
    'Quatre personnes réagissent à la même question. ' +
    'Pour chaque affirmation, indiquez de qui il s’agit.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.rpVoyage),
  parts: [
    {
      label: 'Exercice 3 · faut-il rendre les transports publics gratuits ?',
      text:
        'FAUT-IL RENDRE LES TRANSPORTS PUBLICS GRATUITS ?\n' +
        'Quatre habitants d’une agglomération qui en débat nous ont répondu.\n\n' +
        'ADRIEN — Je suis favorable à la gratuité et je n’en attends rien du côté de la voiture. ' +
        'Les villes qui l’ont fait n’ont pas vidé leurs routes ; elles ont surtout vu monter ' +
        'des gens qui marchaient ou pédalaient avant. Ce n’est pas une politique de transport, ' +
        'c’est une politique sociale, et je la défends comme telle. ' +
        'Un billet à deux euros n’est rien pour moi et c’est un arbitrage réel ' +
        'pour la personne qui nettoie mon bureau. Cela me suffit. ' +
        'On me répond qu’elle profitera aussi à ceux qui peuvent payer. ' +
        'C’est vrai de l’école et de l’hôpital, dont personne ' +
        'ne propose de faire varier l’accès selon le revenu.\n\n' +
        'BÉRÉNICE — Je trouve la mesure séduisante et je la crois prématurée ici. ' +
        'Nos bus sont pleins aux heures de pointe et rares le reste du temps. ' +
        'Rendre gratuit un service saturé, c’est promettre quelque chose qu’on ne peut pas livrer, ' +
        'et le premier usager déçu sera celui qui n’a pas d’autre solution. ' +
        'Doublez d’abord la fréquence sur les trois lignes qui débordent. ' +
        'Nous reparlerons du prix quand le service existera. ' +
        'Et ce n’est pas un faux-fuyant : j’ai vu deux agglomérations ' +
        'repousser l’extension du réseau de cinq ans pour financer la gratuité.\n\n' +
        'CÉDRIC — Le mot gratuit me gêne parce qu’il est faux. ' +
        'Quelqu’un paiera, et ce sera l’impôt local, c’est-à-dire tout le monde, ' +
        'y compris les villages du plateau que le réseau ne dessert pas. ' +
        'Je ne dis pas qu’il ne faut rien faire : je dis qu’un tarif calculé sur les revenus ' +
        'ferait le même travail social sans faire payer le bus à ceux qui ne le voient jamais passer. ' +
        'On m’objecte qu’un tel tarif oblige à se déclarer pauvre au guichet. ' +
        'L’objection est juste et elle se règle : la carte peut être ' +
        'délivrée automatiquement.\n\n' +
        'DJAMILA — J’ai conduit un bus pendant onze ans et je regarde cela autrement. ' +
        'La gratuité supprime la vente à bord, et la vente à bord est ce qui ralentit tout : ' +
        'sur ma ligne, elle coûtait quatre minutes par trajet. ' +
        'Quatre minutes, sur une journée, c’est un service de plus sans un autobus de plus. ' +
        'Je serais donc pour, pour une raison dont personne ne parle, ' +
        'et je note que les partisans comme les opposants discutent de tout sauf de cela. ' +
        'Cela dit, je sais ce qui suivra : les quatre minutes gagnées ' +
        'seront reprises dans un horaire calculé sans elles.',
      items: [
        {
          q: 'Cette personne soutient la gratuité sans attendre d’effet sur la circulation automobile.',
          opts: ['Adrien', 'Bérénice', 'Cédric', 'Djamila'],
          correct: 0,
          why: 'Il dit n’en rien attendre du côté de la voiture et la défend comme politique sociale.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne juge la mesure prématurée tant que le service est insuffisant.',
          opts: ['Bérénice', 'Adrien', 'Cédric', 'Djamila'],
          correct: 0,
          why: 'Elle demande de doubler la fréquence avant de reparler du prix.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne conteste le mot employé pour désigner la mesure.',
          opts: ['Cédric', 'Djamila', 'Adrien', 'Bérénice'],
          correct: 0,
          why: 'Le mot gratuit le gêne parce qu’il est faux : quelqu’un paiera.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Cette personne avance un argument tiré de son expérience professionnelle.',
          opts: ['Djamila', 'Cédric', 'Bérénice', 'Adrien'],
          correct: 0,
          why: 'Onze ans au volant, et les quatre minutes que coûte la vente à bord.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne propose une solution de rechange plutôt qu’un refus.',
          opts: ['Cédric', 'Adrien', 'Djamila', 'Bérénice'],
          correct: 0,
          why: 'Un tarif calculé sur les revenus ferait le même travail social.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Cette personne fait remarquer que son argument est absent du débat.',
          opts: ['Djamila', 'Bérénice', 'Adrien', 'Cédric'],
          correct: 0,
          why: 'Elle note que partisans et opposants discutent de tout sauf de cela.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
