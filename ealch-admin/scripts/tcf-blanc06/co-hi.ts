// TCF Canada blanc-06 — Compréhension orale, the upper slope (B2, C1, C2).
//
// Continues co.ts and MUST follow it in the CO_TASKS array: on this format the
// order of the items IS the instrument, and paper-rules.ts refuses a ramp that
// goes backwards even when every band count is right.
//
// Band characters, from TOPICS-tcf-canada:
//   B2  the answer is distributed, or turns on stance rather than words;
//       hedging appears; documents carry two questions or more
//   C1  the position is argued rather than stated, and a speaker may concede
//       a point without conceding the argument
//   C2  the answer is the movement of the whole exchange; irony and implication
//       carry as much as assertion
//
// Every document here is an EXCHANGE, for the reason blanc-05 gives: a single
// voice reading continuously has no turn boundaries and came back far over
// rate on blanc-04.
//
// C2 routes to `philosophie` at C1: there are no published C2 items on any
// theme, and pick-items reports that fallback rather than hiding it.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';
import { C1_CO_TARGETS } from '../exam-c1-targets.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ B2 — positions 20 to 29 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: in each of the four, no single sentence carries the answer. The
// speakers agree on the facts and disagree about what follows from them.
//
// ORDER: the two-question document comes first, then the two three-question
// ones (2/3/3/2 rather than the plan's 3/3/2/2). The shared scatter places
// keys by item POSITION, and on this task's seed positions 1-3 come out D C B,
// a run a candidate would see inside one recording. Leading with two items
// moves the document boundary and leaves DC | BAC | BAD | AB. Same documents,
// same band, same item count; only the order inside B2 differs from the plan.

export const CO_B2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Compréhension orale · B2',
  prompt: 'Vous allez entendre quatre documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 512,
  targetItemIds: uniq(
    ITEMS.soins.b2,
    ITEMS.hebergement.b2,
    ITEMS.tourisme.b2,
    ITEMS.traditions.b2
  ),
  parts: [
    {
      label: 'Document 17 · consulter par vidéo',
      playCount: 1,
      readWindowS: 22,
      durationS: 83,
      text:
        'UNE ANIMATRICE : Dans la région de la Haute-Ormelle, un patient sur trois consulte désormais ' +
        'son médecin par vidéo. Progrès ou pis-aller ?\n' +
        'UN MÉDECIN : Pour le suivi d’une maladie connue, un progrès net. ' +
        'Mon patient diabétique faisait cent vingt kilomètres pour un rendez-vous de quinze minutes. ' +
        'Maintenant, il me montre ses résultats depuis sa cuisine, et il ne manque plus aucun rendez-vous, ' +
        'ce qui n’était pas le cas quand il devait prendre une journée de congé.\n' +
        'UNE INFIRMIÈRE : Je suis d’accord pour le suivi. Là où je suis plus prudente, ' +
        'c’est sur le premier rendez-vous. Un écran ne permet pas de palper un ventre, ' +
        'ni de voir comment quelqu’un marche en entrant dans la pièce.\n' +
        'UN MÉDECIN : C’est vrai, et je ne pose jamais un premier diagnostic par vidéo. ' +
        'Mais soyons réalistes : sans la vidéo, beaucoup de ces patients ne consulteraient pas du tout.\n' +
        'UNE INFIRMIÈRE : Justement. Le risque, c’est que la vidéo devienne la seule offre. ' +
        'Si la clinique du village ferme parce qu’on peut consulter à distance, ' +
        'on aura réglé le problème des kilomètres en créant un problème de qualité.\n' +
        'UN MÉDECIN : Sur ce point, je vous rejoins entièrement. ' +
        'La vidéo doit s’ajouter à la clinique, pas la remplacer.\n' +
        'UNE ANIMATRICE : Encore faut-il que quelqu’un le décide.\n' +
        'UNE INFIRMIÈRE : C’est bien ce qui m’inquiète. La fermeture d’une clinique se décide en une réunion, ' +
        'et sa réouverture prend dix ans, quand elle a lieu.',
      items: [
        {
          q: 'Sur quel usage de la vidéo sont-ils d’accord ?',
          opts: [
            'Le suivi d’une maladie déjà connue',
            'Le premier rendez-vous avec un patient',
            'Les urgences de nuit',
            'L’examen physique à distance',
          ],
          correct: 0,
          why: 'L’infirmière accepte le suivi et réserve le premier rendez-vous, que le médecin n’assure pas par vidéo.',
          band: 'b2',
        },
        {
          q: 'Quel risque l’infirmière souligne-t-elle ?',
          opts: [
            'Que la vidéo remplace les cliniques de village',
            'Que les patients consultent beaucoup trop souvent leur médecin',
            'Que les médecins refusent la vidéo',
            'Que la connexion soit trop mauvaise',
          ],
          correct: 0,
          why: 'Une clinique fermée au nom de la vidéo : les kilomètres réglés, la qualité perdue.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 18 · loger chez un aîné',
      playCount: 1,
      readWindowS: 25,
      durationS: 88,
      text:
        'UNE ANIMATRICE : Le dispositif Clé Partagée met en relation des personnes âgées ' +
        'qui ont une chambre libre et des étudiants qui cherchent un logement. ' +
        'Trois cents binômes cette année à Val-Ferlin. Un succès ?\n' +
        'UNE COORDINATRICE : Un succès, je dirais, à condition de savoir ce qu’on mesure. ' +
        'Le loyer est modeste, cent cinquante dollars, en échange d’une présence le soir. ' +
        'Les étudiants viennent pour le prix, c’est évident, et ils le disent.\n' +
        'UN SOCIOLOGUE : Et c’est précisément ce qui m’inquiète un peu. ' +
        'On présente cela comme une rencontre entre générations. ' +
        'Dans une certaine mesure, c’est surtout une réponse à la crise du logement, ' +
        'qu’on habille de bons sentiments.\n' +
        'UNE COORDINATRICE : Je ne le nie pas. Mais une solution née d’une contrainte ' +
        'peut produire autre chose que ce pour quoi elle a été conçue. ' +
        'Sur nos trois cents binômes, une bonne moitié continue de se voir après la fin du contrat.\n' +
        'UN SOCIOLOGUE : Une moitié, oui. Et l’autre moitié ? Ce qu’on dit rarement, ' +
        'c’est que la présence du soir devient parfois un travail non payé : ' +
        'faire les courses, surveiller les médicaments. ' +
        'L’étudiant n’a pas signé pour être aide-soignant.\n' +
        'UNE COORDINATRICE : C’est un vrai risque, et nous l’avons constaté. ' +
        'La charte limite désormais les services à dix heures par semaine, ' +
        'et nous rencontrons chaque binôme tous les trois mois.\n' +
        'UN SOCIOLOGUE : Dix heures, c’est déjà le temps de travail d’un étudiant salarié. ' +
        'Je ne dis pas qu’il faut arrêter. Je dis qu’il faudrait appeler les choses par leur nom.',
      items: [
        {
          q: 'Pourquoi les étudiants s’inscrivent-ils, selon la coordinatrice ?',
          opts: [
            'Pour le loyer peu élevé',
            'Pour rencontrer des personnes âgées',
            'Pour obtenir un emploi rémunéré',
            'Pour se rapprocher de leur famille',
          ],
          correct: 0,
          why: 'Elle le dit sans détour : ils viennent pour le prix, et ils le disent.',
          band: 'b2',
        },
        {
          q: 'Que craint le sociologue ?',
          opts: [
            'Que la présence du soir devienne un travail gratuit',
            'Que les binômes cessent de se voir après le contrat',
            'Que les loyers augmentent trop vite',
            'Que les personnes âgées refusent les étudiants',
          ],
          correct: 0,
          why: 'Courses, médicaments : l’étudiant devient aide-soignant sans l’avoir signé.',
          band: 'b2',
        },
        {
          q: 'Sur quoi porte, au fond, leur désaccord ?',
          opts: [
            'Sur la façon de présenter le dispositif',
            'Sur la nécessité d’arrêter le dispositif',
            'Sur le montant du loyer demandé',
            'Sur le nombre de binômes formés',
          ],
          correct: 0,
          why: 'Il refuse expressément d’arrêter ; il demande d’appeler les choses par leur nom.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 19 · un belvédère sur réservation',
      playCount: 1,
      readWindowS: 25,
      durationS: 71,
      text:
        'UN JOURNALISTE : Depuis deux étés, le village de Port-Aubrac limite l’accès à son belvédère : ' +
        'quatre cents visiteurs par jour, sur réservation. Les commerçants protestent.\n' +
        'UNE COMMERÇANTE : Nous protestons parce que nous avons perdu un quart de notre chiffre de juillet. ' +
        'On nous parle de protéger le paysage, et c’est nous qui payons.\n' +
        'UN ADJOINT AU MAIRE : Je comprends cette colère, et le chiffre est exact. ' +
        'Je ferais simplement remarquer que, l’été d’avant, trois mille personnes montaient chaque jour ' +
        'sur un sentier prévu pour quelques centaines. Il s’effondrait par endroits.\n' +
        'UNE COMMERÇANTE : Personne ne conteste qu’il fallait faire quelque chose. ' +
        'Mais pourquoi une réservation en ligne ? Les familles qui passent par hasard ' +
        'repartent sans rien voir et sans rien acheter.\n' +
        'UN ADJOINT AU MAIRE : C’est l’argument le plus juste que j’aie entendu, ' +
        'et nous allons en tenir compte. Dès l’été prochain, cent places par jour ' +
        'seront gardées pour les visiteurs sans réservation.\n' +
        'UN JOURNALISTE : Cela suffira à faire revenir les clients ?\n' +
        'UNE COMMERÇANTE : Ça ne fera pas revenir les cars de touristes, ' +
        'et franchement, je ne les regrette pas tous. Ce que je regrette, ' +
        'ce sont les gens qui s’arrêtaient une heure et déjeunaient sur la place. ' +
        'Si les cent places les ramènent, on en reparlera.',
      items: [
        {
          q: 'Que reproche surtout la commerçante à la mesure ?',
          opts: [
            'La réservation écarte les visiteurs de passage',
            'La limite de quatre cents visiteurs est trop basse',
            'Le sentier n’avait pas besoin d’être protégé',
            'L’entrée du belvédère est devenue payante',
          ],
          correct: 0,
          why: 'Elle admet qu’il fallait agir ; ce qu’elle vise, c’est la réservation en ligne.',
          band: 'b2',
        },
        {
          q: 'Comment l’adjoint au maire répond-il à cet argument ?',
          opts: [
            'Il réserve des places aux visiteurs sans réservation',
            'Il supprime la limite de visiteurs',
            'Il propose une aide aux commerçants',
            'Il conteste la perte de chiffre d’affaires',
          ],
          correct: 0,
          why: 'Il reconnaît l’argument et garde cent places par jour sans réservation ; il confirme le chiffre.',
          band: 'b2',
        },
        {
          q: 'Quelle est l’attitude de la commerçante à la fin ?',
          opts: [
            'Elle jugera sur le retour de sa clientèle de passage',
            'Elle réclame avant tout le retour des grands cars de touristes',
            'Elle se déclare entièrement satisfaite',
            'Elle annonce qu’elle va fermer son commerce',
          ],
          correct: 0,
          why: 'Elle ne regrette pas les cars ; elle attend de voir si les cent places ramènent ceux qui déjeunaient.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 20 · qui reprendra l’érablière ?',
      playCount: 1,
      readWindowS: 22,
      durationS: 78,
      text:
        'UN CHRONIQUEUR : Chaque printemps, on nous raconte la même histoire : la cabane à sucre familiale, ' +
        'le sirop chaud versé sur la neige, les grands-parents. ' +
        'Cette année, j’ai voulu parler de ce qu’on raconte moins : qui reprendra ?\n' +
        'UNE PRODUCTRICE : Dans notre secteur, sur onze érablières familiales, quatre n’ont pas de relève. ' +
        'Les enfants sont partis en ville, et on les comprend.\n' +
        'UN CHRONIQUEUR : Le problème serait donc le départ des jeunes ?\n' +
        'UNE PRODUCTRICE : Pas vraiment. Des jeunes qui voudraient reprendre, j’en connais plusieurs. ' +
        'Ce qui bloque, c’est le prix. Une érablière se vend aujourd’hui trois fois plus cher ' +
        'qu’il y a quinze ans, et aucun jeune ne peut emprunter une somme pareille.\n' +
        'UN CHRONIQUEUR : Les parents pourraient vendre moins cher à leurs enfants.\n' +
        'UNE PRODUCTRICE : Certains le font. Mais pour beaucoup, l’érablière, c’est leur retraite. ' +
        'Vendre à moitié prix, c’est renoncer à la moitié de leur retraite. ' +
        'Alors on vend à un voisin plus gros, et la cabane familiale devient ' +
        'une ligne de plus dans une grande exploitation.\n' +
        'UN CHRONIQUEUR : Et vous, vous avez une relève ?\n' +
        'UNE PRODUCTRICE : Ma fille, peut-être. Elle est comptable en ville et revient chaque printemps pour la saison. ' +
        'Elle reprendra si nous trouvons ensemble un prix qui ne ruine personne. ' +
        'C’est la première fois que j’entends un jeune parler du prix avant de parler du sirop.',
      items: [
        {
          q: 'Selon la productrice, qu’est-ce qui empêche la relève ?',
          opts: [
            'Le prix trop élevé des érablières',
            'Le départ des jeunes vers la ville',
            'Le manque d’intérêt pour le métier',
            'La baisse du prix du sirop',
          ],
          correct: 0,
          why: 'Elle écarte le départ des jeunes (« pas vraiment ») et nomme le prix.',
          band: 'b2',
        },
        {
          q: 'Pourquoi les parents ne vendent-ils pas moins cher à leurs enfants ?',
          opts: [
            'L’érablière représente leur retraite',
            'Leurs enfants ne veulent pas reprendre',
            'La loi leur interdit de baisser le prix',
            'Les voisins proposent toujours davantage',
          ],
          correct: 0,
          why: 'Vendre à moitié prix, c’est renoncer à la moitié de leur retraite.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: in each document a speaker grants the other something real and
// keeps the argument. A candidate who hears only the concession answers wrong.

export const CO_C1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'c1',
  label: 'Compréhension orale · C1',
  prompt: 'Vous allez entendre trois documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 465,
  targetItemIds: [...C1_CO_TARGETS],
  parts: [
    {
      label: 'Document 21 · ce que l’on doit à ceux qui viendront',
      playCount: 1,
      readWindowS: 30,
      durationS: 109,
      text:
        'UNE MODÉRATRICE : On invoque sans cesse les générations futures. ' +
        'Vous dites que l’expression est devenue trop commode.\n' +
        'UN PHILOSOPHE : Commode au sens où elle n’engage à rien. ' +
        'Des gens qui n’existent pas encore ne protestent pas, ne votent pas, ne contredisent personne. ' +
        'On peut donc leur prêter n’importe quelle volonté, et chacun leur prête la sienne.\n' +
        'UNE ÉCONOMISTE : L’objection est sérieuse, et je ne vais pas l’esquiver. ' +
        'Vous en tirez pourtant, me semble-t-il, une conclusion trop rapide. ' +
        'Nous ignorons ce que voudront nos petits-enfants, soit. ' +
        'Nous savons en revanche avec une assez bonne précision ce dont ils auront besoin : ' +
        'de l’eau potable, des sols cultivables, une dette qu’ils puissent rembourser.\n' +
        'UN PHILOSOPHE : Vous passez du désir au besoin, et le glissement est habile. ' +
        'Mais le besoin lui-même se discute. On a longtemps cru que nos descendants auraient besoin de charbon.\n' +
        'UNE ÉCONOMISTE : Et l’on s’est trompé sur le charbon, j’en conviens volontiers. ' +
        'On ne s’est jamais trompé sur l’eau. Il existe un noyau de besoins si élémentaires ' +
        'qu’aucune évolution technique ne les rendra caducs, ' +
        'et c’est sur ce noyau seulement que je fonde une obligation.\n' +
        'UN PHILOSOPHE : Un noyau bien étroit, alors. Vous laissez de côté tout ce qui fait ' +
        'qu’une vie vaut d’être vécue : les langues, les paysages, les œuvres.\n' +
        'UNE ÉCONOMISTE : Volontairement étroit, et c’est sa force. ' +
        'Je ne dis pas que le reste est sans valeur ; je dis qu’il ne fonde pas une obligation au même titre. ' +
        'Une obligation qui prétend tout couvrir finit par ne rien imposer, ' +
        'puisqu’on peut toujours en contester un morceau. ' +
        'Une obligation limitée à l’eau et aux sols, on peut au moins la chiffrer, ' +
        'et refuser un projet qui l’entame.\n' +
        'UN PHILOSOPHE : Vous me concédez donc l’essentiel : ' +
        'la plupart des discours sur les générations futures sont des projections.\n' +
        'UNE ÉCONOMISTE : Je vous concède la plupart des discours. Je ne vous concède pas l’obligation. ' +
        'Qu’une expression soit galvaudée ne prouve pas qu’elle soit vide ; ' +
        'cela prouve seulement qu’il faut la tenir plus serré.',
      items: [
        {
          q: 'Pourquoi l’expression est-elle « commode », selon le philosophe ?',
          opts: [
            'Ceux qu’elle désigne ne peuvent contredire ce qu’on leur prête',
            'Elle permet d’éviter les questions budgétaires',
            'Elle est comprise de la même façon par tous',
            'Elle s’appuie sur des prévisions fiables',
          ],
          correct: 0,
          why: 'Ils ne protestent ni ne votent : chacun leur prête sa propre volonté.',
          band: 'c1',
        },
        {
          q: 'Comment l’économiste traite-t-elle l’exemple du charbon ?',
          opts: [
            'Elle concède l’erreur sans l’étendre aux besoins élémentaires',
            'Elle conteste que l’on se soit trompé sur le charbon',
            'Elle y voit la preuve que tout besoin est incertain',
            'Elle abandonne la notion de besoin au profit du désir',
          ],
          correct: 0,
          why: 'Elle en convient, puis oppose l’eau, sur laquelle on ne s’est jamais trompé.',
          band: 'c1',
        },
        {
          q: 'Que refuse-t-elle de concéder à la fin ?',
          opts: [
            'Que l’obligation envers les générations futures soit vide',
            'Que la plupart des discours soient des projections',
            'Que son noyau de besoins soit étroit',
            'Que l’expression soit souvent mal employée',
          ],
          correct: 0,
          why: 'Elle accorde les discours, l’étroitesse et le mauvais usage ; elle maintient l’obligation.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 22 · la marge d’erreur',
      playCount: 1,
      readWindowS: 28,
      durationS: 105,
      text:
        'UN ANIMATEUR : Les modèles de prévision se trompent, on le sait. ' +
        'Vous dites que le problème n’est pas l’erreur, mais la façon dont on la présente.\n' +
        'UNE MÉTÉOROLOGUE : Exactement. Un modèle qui annonce soixante-dix pour cent de chances de pluie ' +
        'et qui voit le soleil ne s’est pas trompé : il annonçait aussi trois chances sur dix de soleil. ' +
        'Le public, lui, a entendu « il va pleuvoir ».\n' +
        'UN ANIMATEUR : C’est donc la faute du public ?\n' +
        'UNE MÉTÉOROLOGUE : Je me garderais bien de le dire. ' +
        'Nous avons pris l’habitude de livrer un chiffre unique, parce que c’est ce qu’on nous réclame, ' +
        'et nous avons rangé la marge d’erreur dans des notes techniques que personne ne lit.\n' +
        'UN HYDROLOGUE : Je partage le diagnostic, pas tout à fait le remède. ' +
        'Quand j’annonce une crue à une mairie, je ne peux pas donner une fourchette ' +
        'entre quarante centimètres et deux mètres. Il faut décider d’évacuer ou non, ' +
        'et une fourchette aussi large n’aide personne à décider.\n' +
        'UNE MÉTÉOROLOGUE : Elle aide davantage qu’un chiffre faux présenté comme sûr. ' +
        'Si vous annoncez un mètre et que l’eau monte à deux, on vous en voudra, ' +
        'et la fois suivante, on n’évacuera pas.\n' +
        'UN HYDROLOGUE : Le risque est réel, je l’admets. Mais l’inverse existe aussi : ' +
        'à force d’entendre des fourchettes, les décideurs les lisent toujours par le bas, ' +
        'parce que le bas coûte moins cher. J’ai vu une commune préparer ses digues pour quarante centimètres ' +
        'alors que mon bulletin disait jusqu’à deux mètres.\n' +
        'UNE MÉTÉOROLOGUE : Alors ne leur donnons pas une fourchette. ' +
        'Donnons-leur une décision conditionnelle : au-delà d’un mètre cinquante, voici ce qui sera perdu. ' +
        'Ce n’est plus une incertitude qu’on leur présente, c’est un seuil, ' +
        'et un seuil se défend devant un conseil municipal bien mieux qu’un pourcentage.\n' +
        'UN HYDROLOGUE : Cela suppose que nous sachions ce qui sera perdu à chaque niveau, ' +
        'et nous le savons rarement. Mais c’est une lacune qu’on peut combler, contrairement à l’autre.',
      items: [
        {
          q: 'D’où vient le malentendu, selon la météorologue ?',
          opts: [
            'Les prévisionnistes livrent un chiffre unique sans sa marge',
            'Le public comprend mal les pourcentages qu’on lui annonce chaque jour',
            'Les modèles de prévision sont trop imprécis',
            'Les médias déforment les bulletins',
          ],
          correct: 0,
          why: 'Elle refuse d’accuser le public et désigne l’habitude de cacher la marge d’erreur.',
          band: 'c1',
        },
        {
          q: 'Que propose-t-elle finalement à l’hydrologue ?',
          opts: [
            'Présenter un seuil lié à une décision',
            'Donner une fourchette plus large',
            'Annoncer toujours le scénario le plus grave',
            'Laisser les mairies interpréter les données',
          ],
          correct: 0,
          why: 'Elle accepte son objection sur les fourchettes et passe à une décision conditionnelle, un seuil.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 23 · la part du hasard',
      playCount: 1,
      readWindowS: 28,
      durationS: 100,
      text:
        'UNE JOURNALISTE : On cite toujours les découvertes faites par hasard : une boîte oubliée, ' +
        'une erreur de manipulation. Vous trouvez ces récits trompeurs.\n' +
        'UN HISTORIEN DES SCIENCES : Trompeurs, non. Incomplets. Le hasard fournit l’occasion ; ' +
        'il ne fournit pas le regard. Une boîte oubliée sur une paillasse, ' +
        'des milliers de chercheurs en ont jeté. Un seul s’est demandé ' +
        'pourquoi celle-là ne ressemblait pas aux autres.\n' +
        'UNE JOURNALISTE : Le hasard ne compterait donc pas.\n' +
        'UN HISTORIEN DES SCIENCES : Il compte beaucoup moins que la préparation qui permet de le remarquer. ' +
        'On ne voit l’anomalie que si l’on sait exactement à quoi ressemble la normale, ' +
        'et cela demande des années de travail sans éclat, que les récits ne racontent jamais ' +
        'parce qu’elles ne se racontent pas.\n' +
        'UNE CHERCHEUSE : Je nuancerais. Vous décrivez le chercheur comme seul responsable de son regard. ' +
        'Or ce regard dépend de conditions très matérielles : avoir le temps de s’arrêter, ' +
        'ne pas être jugé sur le nombre d’expériences réussies dans le mois. ' +
        'Dans mon premier laboratoire, une anomalie était une perte de temps. On la notait à peine, ' +
        'et l’on recommençait l’expérience en espérant qu’elle ne reviendrait pas. ' +
        'Dans le second, la responsable passait chaque vendredi demander ce qui nous avait surpris dans la semaine.\n' +
        'UN HISTORIEN DES SCIENCES : La précision est juste, et elle va plus loin que ce que je disais.\n' +
        'UNE CHERCHEUSE : Elle va ailleurs, surtout. Si l’on veut des découvertes « par hasard », ' +
        'il ne suffit pas de former de bons observateurs. ' +
        'Il faut leur laisser le droit de perdre un après-midi sur une chose ' +
        'qui ne se comporte pas comme prévu. Les récits héroïques parlent d’un génie ; ' +
        'ils oublient presque toujours la responsable d’équipe qui a toléré l’anomalie ' +
        'au lieu d’exiger le résultat attendu.\n' +
        'UN HISTORIEN DES SCIENCES : Je retiens la formule, même si je crains ' +
        'qu’elle ne serve d’excuse à ceux qui ne cherchent rien.',
      items: [
        {
          q: 'Que reproche l’historien aux récits de découvertes par hasard ?',
          opts: [
            'Ils négligent la préparation qui permet de remarquer l’imprévu',
            'Ils exagèrent beaucoup le nombre réel de découvertes accidentelles dans l’histoire',
            'Ils inventent des anecdotes sans fondement',
            'Ils oublient le rôle des instruments',
          ],
          correct: 0,
          why: 'Incomplets plutôt que trompeurs : le hasard donne l’occasion, la préparation donne le regard.',
          band: 'c1',
        },
        {
          q: 'Qu’apporte la chercheuse à cette analyse ?',
          opts: [
            'L’attention à l’imprévu dépend aussi des conditions de travail',
            'Le hasard compte davantage que la préparation',
            'Les bons observateurs sont impossibles à former',
            'Les récits héroïques restent utiles pour motiver les jeunes chercheurs',
          ],
          correct: 0,
          why: 'Elle déplace la question du regard individuel vers le temps et la tolérance que l’équipe accorde.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: no answer sits in a sentence. Each is the shape of the whole
// exchange, and the trap in every case is a line said with a second meaning.

export const CO_C2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'c2',
  label: 'Compréhension orale · C2',
  prompt: 'Vous allez entendre un document. Choisissez la bonne réponse.',
  timingS: 190,
  targetItemIds: uniq(ITEMS.philosophie.c2),
  parts: [
    {
      label: 'Document 24 · ce que vaut une promesse',
      playCount: 1,
      readWindowS: 30,
      durationS: 136,
      text:
        'UNE MODÉRATRICE : Une promesse faite dans des circonstances qui ont disparu oblige-t-elle encore ? ' +
        'La question paraît scolaire, et pourtant elle divise les tribunaux autant que les familles.\n' +
        'UNE PHILOSOPHE : Elle ne l’est qu’en apparence. Si une promesse cessait d’obliger ' +
        'dès que les circonstances changent, elle ne servirait à rien, ' +
        'puisque c’est précisément contre le changement qu’on promet. ' +
        'Je ne promets pas de venir demain parce que rien ne peut m’en empêcher ; ' +
        'je le promets parce que quelque chose pourrait m’en empêcher.\n' +
        'UN JURISTE : Le droit des contrats vous donne raison, en principe. ' +
        'Bien des droits connaissent pourtant l’imprévision : lorsqu’un événement que personne ne pouvait ' +
        'raisonnablement anticiper rend l’exécution ruineuse, le juge peut réviser l’accord, ' +
        'et il le fait plus souvent qu’on ne le croit depuis que les crises se succèdent. ' +
        'On ne demande à personne de se ruiner pour tenir une parole donnée dans un autre monde.\n' +
        'UNE PHILOSOPHE : Le juge révise ; il n’efface pas. Vous venez d’admettre ' +
        'qu’il reste quelque chose de la promesse même quand son objet est devenu absurde.\n' +
        'UN JURISTE : Il en reste une obligation de renégocier, c’est-à-dire une obligation de se parler. ' +
        'Je ne suis pas certain que ce soit encore une promesse. ' +
        'C’est plutôt ce qu’on doit à quelqu’un à qui l’on avait promis.\n' +
        'UNE PHILOSOPHE : La distinction me plaît, et je crains qu’elle ne vous mène ' +
        'plus loin que vous ne le souhaitez. Car si ce qui survit à la promesse ' +
        'est une obligation de rendre des comptes, alors la promesse n’a jamais porté sur l’objet. ' +
        'Elle portait sur la relation.\n' +
        'UN JURISTE : Voilà une thèse qu’aucun créancier n’acceptera.\n' +
        'UNE PHILOSOPHE : Aucun créancier ne l’acceptera, et c’est bien pourquoi le droit a besoin de l’objet : ' +
        'il lui faut quelque chose à saisir. Mais demandez à quelqu’un qu’on a déçu ce qui l’a blessé. ' +
        'Rarement la chose non faite. Presque toujours le silence de celui qui ne l’a pas prévenu, ' +
        'et qui l’a laissé découvrir seul que rien ne viendrait.\n' +
        'UNE MODÉRATRICE : Vous retournez la question : ce ne serait plus la promesse qui oblige, ' +
        'ce serait la confiance.\n' +
        'UN JURISTE : Elle la retourne avec talent, et je l’en félicite d’autant plus volontiers ' +
        'que je n’y crois qu’à moitié. Une relation sans objet ne se plaide pas. ' +
        'Le jour où mon client aura perdu sa maison, je ne pourrai pas lui offrir, ' +
        'en guise de réparation, la qualité de la conversation. Il voudra sa maison, ou son argent.\n' +
        'UNE PHILOSOPHE : Je ne vous demande pas de plaider la conversation. ' +
        'Je vous fais seulement observer que votre propre droit, ' +
        'en imposant de renégocier plutôt que d’annuler, a déjà choisi entre nous deux.',
      items: [
        {
          q: 'Pourquoi, selon la philosophe, une promesse doit-elle résister au changement ?',
          opts: [
            'On promet justement en prévision de ce qui pourrait changer',
            'Une parole donnée ne peut jamais être révisée',
            'Les circonstances changent moins qu’on ne le croit',
            'Le droit punit ceux qui manquent à leur parole',
          ],
          correct: 0,
          why: 'C’est contre le changement qu’on promet ; une promesse sans obstacle possible ne servirait à rien.',
          band: 'c2',
        },
        {
          q: 'Que fait le juriste en disant qu’« aucun créancier n’acceptera » cette thèse ?',
          opts: [
            'Il lui oppose ses conséquences pratiques sans la réfuter',
            'Il démontre qu’elle est juridiquement fausse',
            'Il s’y rallie avec une réserve de forme',
            'Il rappelle que les créanciers ont toujours raison',
          ],
          correct: 0,
          why: 'Il déplace la thèse vers ce qu’elle coûterait ; la philosophe accepte l’objection sans céder.',
          band: 'c2',
        },
        {
          q: 'Que suggère la dernière réplique de la philosophe ?',
          opts: [
            'Le droit reconnaît déjà, en creux, que la promesse vise la relation',
            'Le juriste devrait plaider la qualité de la relation',
            'Le droit des contrats devrait être réformé pour mieux protéger les créanciers lésés',
            'Une promesse dont l’objet disparaît doit être annulée',
          ],
          correct: 0,
          why: 'Imposer de renégocier plutôt que d’annuler, c’est déjà faire survivre la relation à l’objet.',
          band: 'c2',
        },
      ],
    },
  ],
};
