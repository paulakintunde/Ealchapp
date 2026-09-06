// DELF B2 blanc-01 — Compréhension de l'oral. 20 questions, 25 points, ~30 min.
//
// Three exercises worth 9, 9 and 7. The first two are long documents played
// TWICE; the third is three short documents played once each.
//
// ── playCount 2 is a format fact, and it changes question design ────────────
//
// This is the first paper in the pack to use it — TCF's rule is "plays once,
// everywhere", and that rule is TCF's. Everything about the questions changes
// when a second listening exists (STANDARD-delf-b2 §2.2):
//
//   the FIRST pass yields the shape of the argument and the locate answers;
//   the SECOND yields attribute and weigh, which need a known destination
//   before the detail means anything.
//
// A question answerable only on the first pass is a memory test. One answerable
// on either is not using the format. Roughly the cheap half should fall on the
// first hearing.
//
// ── Timings come from the supervisor's transcript, not from us ──────────────
//
// The recording carries its own instructions and pauses and the invigilator
// starts it once, so these are exact rather than advisory:
//
//   exercises 1 and 2   read the questions, play, 60s, play, 30s
//   exercise 3          15s read window, play once, 20s
//
// The durationS values below are MEASURED off the rendered clips, not the
// at-target estimates they started as. They differ by up to 14 seconds, and the
// clock check in paper.test.ts reads them — so estimates there would have
// checked the clock against a document length that does not exist.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ EXERCICE 1 — 9 points ═══════════════════════════════════════════════ */
//
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
// Families: locate, locate, infer, infer, attribute, weigh, locate.
//
// SELF-VERIFY: the two dearest questions (5 and 6) both turn on distinguishing
// what a speaker reports from what they endorse, which is the distractor shape
// B2 exists to test and cannot be answered by matching a word.

export const CO_EX1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'b2',
  label: 'Compréhension de l’oral · Exercice 1',
  prompt:
    'Vous allez écouter 2 fois un document.\n' +
    'Vous écoutez une émission à la radio.\n' +
    'Lisez les questions, écoutez le document puis répondez.',
  timingS: 600,
  targetItemIds: uniq(ITEMS.rpTravailEtudes),
  parts: [
    {
      label: 'Exercice 1 · la semaine de quatre jours',
      playCount: 2,
      readWindowS: 60,
      durationS: 192,
      text:
        'UNE JOURNALISTE : Quarante entreprises de la région ont essayé la semaine de quatre jours ' +
        'l’an dernier, et trente-quatre l’ont conservée. Le chiffre circule beaucoup. ' +
        'Vous nous dites qu’il ne dit pas ce qu’on lui fait dire.\n' +
        'UN ÉCONOMISTE : Il dit une chose vraie et une seule : trente-quatre directions sur quarante ' +
        'ont préféré continuer. C’est un fait, et il est intéressant. ' +
        'Ce qu’on lui fait dire, c’est que la mesure fonctionne, ' +
        'et cela demande de savoir pour qui et à quel prix.\n' +
        'UNE SYNDICALISTE : Les salariés que nous avons interrogés ne demandent pas qu’on revienne en arrière. ' +
        'Sur mille deux cents réponses, neuf sur dix veulent que le dispositif continue, ' +
        'et cela ne me paraît pas un détail de méthode.\n' +
        'UN ÉCONOMISTE : Je vous crois entièrement, et c’est précisément ce qui me gêne. ' +
        'Les entreprises qui se sont portées volontaires n’étaient pas un échantillon. ' +
        'C’étaient des sociétés de services, avec des marges confortables et une charge de travail ' +
        'qu’on peut décaler d’un jour sans que personne n’attende dans un couloir. ' +
        'Mettez le même dispositif dans un service d’urgences et la question n’est plus la même.\n' +
        'UNE SYNDICALISTE : Personne ne propose de l’appliquer aux urgences.\n' +
        'UN ÉCONOMISTE : Non, et c’est mon point. On généralise à partir d’un endroit ' +
        'où c’était facile. Les trente-quatre entreprises n’ont pas prouvé que la mesure marche ; ' +
        'elles ont prouvé qu’elle marche là où elle était praticable. ' +
        'Ce n’est pas rien, et ce n’est pas ce qu’on lit dans les titres.\n' +
        'UNE SYNDICALISTE : Vous demandez une preuve que personne ne peut fournir. ' +
        'Il faudrait imposer le dispositif à des entreprises qui n’en veulent pas, ' +
        'uniquement pour savoir ce qui s’y passerait.\n' +
        'UN ÉCONOMISTE : C’est une objection sérieuse et je n’ai pas de bonne réponse. ' +
        'On ne tire pas une entreprise au sort comme un patient dans un essai. ' +
        'Ce que je peux demander, c’est qu’on cesse de présenter un volontariat ' +
        'comme s’il valait un tirage au sort, parce que les deux ne se lisent pas pareil.\n' +
        'UNE JOURNALISTE : Vous êtes donc contre.\n' +
        'UN ÉCONOMISTE : Pas du tout, et je voudrais qu’on cesse de me le faire dire. ' +
        'Je suis pour, et je veux qu’on la défende avec les bons arguments. ' +
        'Le jour où quelqu’un montrera un secteur où elle a échoué, ' +
        'l’argument des trente-quatre s’effondrera d’un coup, ' +
        'et ceux qui s’en servent aujourd’hui n’auront plus rien à répondre.\n' +
        'UNE SYNDICALISTE : Vous nous demandez de renoncer à notre meilleur chiffre.\n' +
        'UN ÉCONOMISTE : Je vous demande de ne pas bâtir dessus. ' +
        'Un argument fragile est celui que l’adversaire choisit d’attaquer, ' +
        'et il emporte le reste en tombant. Vous en avez de meilleurs : ' +
        'la baisse des arrêts de travail chez ceux qui l’ont adoptée est un fait, ' +
        'mesuré sur trois ans, et il ne dépend pas de qui s’est porté volontaire.\n' +
        'UNE SYNDICALISTE : Que faudrait-il montrer, alors ?\n' +
        'UN ÉCONOMISTE : Ce qui est arrivé aux six qui ont renoncé. ' +
        'Personne ne les a interrogées. Ce sont elles qui apprendraient quelque chose, ' +
        'et ce sont exactement celles dont on ne parle jamais. ' +
        'On publie les réussites, on oublie les abandons, ' +
        'et on appelle le résultat un bilan.',
      items: [
        {
          q: 'Combien d’entreprises ont conservé la semaine de quatre jours ?',
          opts: ['Trente-quatre', 'Quarante', 'Six', 'Vingt'],
          correct: 0,
          why: 'Quarante ont essayé, trente-quatre ont conservé.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Quel type d’entreprises s’est porté volontaire ?',
          opts: [
            'Des sociétés de services aux marges confortables',
            'Des services d’urgences',
            'Des entreprises industrielles',
            'Des sociétés en difficulté',
          ],
          correct: 0,
          why: 'Il décrit des sociétés de services, avec des marges confortables et une charge décalable.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi l’économiste parle-t-il des urgences ?',
          opts: [
            'Pour montrer que le dispositif n’est pas partout praticable',
            'Pour proposer de l’y appliquer',
            'Parce qu’un service d’urgences a participé',
            'Pour critiquer l’hôpital',
          ],
          correct: 0,
          why: 'Un contre-exemple : là, décaler la charge d’un jour laisse quelqu’un attendre.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que reproche-t-il au chiffre des trente-quatre ?',
          opts: [
            'Il généralise à partir d’un cas facile',
            'Il est inexact',
            'Il est trop ancien',
            'Il vient des syndicats',
          ],
          correct: 0,
          why: 'Elles ont prouvé que la mesure marche là où elle était praticable, pas qu’elle marche.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle est la position de l’économiste sur la mesure elle-même ?',
          opts: [
            'Il y est favorable, et conteste la façon de la défendre',
            'Il y est opposé',
            'Il réserve son jugement',
            'Il la juge impossible hors des services',
          ],
          correct: 0,
          why: 'Il dit être pour, et vouloir qu’on cesse de lui faire dire le contraire.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Que craint-il si l’on continue à défendre la mesure ainsi ?',
          opts: [
            'Un seul échec sectoriel ferait tomber tout l’argument',
            'Que les entreprises abandonnent le dispositif',
            'Que les syndicats changent d’avis',
            'Que la mesure devienne obligatoire',
          ],
          correct: 0,
          why: 'Le jour où un secteur échouera, l’argument des trente-quatre s’effondrera d’un coup.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que faudrait-il étudier, selon lui ?',
          opts: [
            'Les six entreprises qui ont renoncé',
            'Les trente-quatre qui ont continué',
            'Les salariés des services d’urgences',
            'Les marges des sociétés de services',
          ],
          correct: 0,
          why: 'Ce sont elles qui apprendraient quelque chose, et personne ne les a interrogées.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// Weights: 1 · 0.5 · 1.5 · 2 · 1 · 2.5 · 0.5 = 9

export const CO_EX2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'b2',
  label: 'Compréhension de l’oral · Exercice 2',
  prompt:
    'Vous allez écouter 2 fois un document.\n' +
    'Vous écoutez une émission à la radio.\n' +
    'Lisez les questions, écoutez le document puis répondez.',
  timingS: 560,
  targetItemIds: uniq(ITEMS.systemeDeSante),
  parts: [
    {
      label: 'Exercice 2 · classer les hôpitaux',
      playCount: 2,
      readWindowS: 60,
      durationS: 161,
      text:
        'UN ANIMATEUR : Le classement annuel des hôpitaux paraît demain. ' +
        'Vous avez travaillé dessus pendant six ans et vous n’en dites pas de bien.\n' +
        'UNE CHERCHEUSE : J’en dis du bien sur un point et du mal sur un autre, ' +
        'et on ne retient jamais que le second. Le bien d’abord : ' +
        'depuis que ce classement existe, les établissements mesurent des choses ' +
        'qu’ils ne mesuraient pas. Cela ne se défait pas.\n' +
        'UN DIRECTEUR D’HÔPITAL : Et le mal ?\n' +
        'UNE CHERCHEUSE : Le mal est qu’un classement note un résultat, ' +
        'et qu’un résultat dépend d’abord de qui est entré par la porte. ' +
        'Un service qui opère des patients jeunes et sans autre maladie ' +
        'obtiendra de meilleurs chiffres qu’un service qui prend tout le monde, ' +
        'à compétence rigoureusement égale.\n' +
        'UN DIRECTEUR D’HÔPITAL : Les classements corrigent cela. On appelle cela l’ajustement au risque, ' +
        'et ce n’est pas une nouveauté : nous le faisons depuis quinze ans.\n' +
        'UNE CHERCHEUSE : Vous le faites, oui, et vous le faites avec les données que vous avez, ' +
        'qui ne sont pas les bonnes. Vous connaissez l’âge et les diagnostics. ' +
        'Vous ne savez pas si le patient vit seul, s’il lit sa notice, ' +
        'si quelqu’un l’accompagnera au rendez-vous de contrôle, ' +
        'et ces trois-là pèsent plus lourd que l’âge sur ce qui arrive après la sortie. ' +
        'Un ajustement qui ignore ce qui compte le plus n’est pas neutre : ' +
        'il donne à un chiffre discutable l’apparence d’un chiffre corrigé.\n' +
        'UN DIRECTEUR D’HÔPITAL : Nous ne pouvons pas collecter ce que vous décrivez.\n' +
        'UNE CHERCHEUSE : Je le sais, et je ne vous le reproche pas. ' +
        'Je reproche au classement de publier un rang là où les données ' +
        'ne permettent qu’un intervalle. Entre le septième et le dix-neuvième, ' +
        'l’écart réel est souvent nul, et personne ne l’écrit sur la couverture.\n' +
        'UN ANIMATEUR : Vous dites donc qu’il faut arrêter de classer.\n' +
        'UNE CHERCHEUSE : Je n’ai jamais dit cela et on me le fait dire chaque année. ' +
        'Je dis qu’un classement crée une incitation, et qu’il faut regarder laquelle. ' +
        'Celle-ci récompense le fait d’avoir de bons patients ' +
        'autant que celui de bien les soigner, et un directeur sous pression ' +
        'trouve toujours des moyens parfaitement légaux d’en accueillir davantage.\n' +
        'UN DIRECTEUR D’HÔPITAL : C’est une accusation.\n' +
        'UNE CHERCHEUSE : C’est une description, et elle ne vise personne. ' +
        'Aucun directeur ne décide un matin de refuser les cas lourds. ' +
        'On allonge un délai, on oriente vers un confrère mieux équipé, ' +
        'on ouvre une consultation spécialisée qui filtre en amont sans le dire, ' +
        'chaque décision se défend une par une devant n’importe qui, ' +
        'et au bout de trois ans le recrutement du service a changé ' +
        'sans que quiconque l’ait voulu ni même remarqué.\n' +
        'UN DIRECTEUR D’HÔPITAL : Alors que proposez-vous ?\n' +
        'UNE CHERCHEUSE : Publier le recrutement à côté du résultat. ' +
        'Pas à la place : à côté. Un service qui obtient de bons chiffres ' +
        'avec des patients difficiles saute alors aux yeux, ' +
        'et c’est précisément celui qu’un classement devrait faire remarquer ' +
        'et que celui-ci enterre au milieu du tableau.',
      items: [
        {
          q: 'Quel effet positif la chercheuse reconnaît-elle au classement ?',
          opts: [
            'Les hôpitaux mesurent des choses qu’ils ne mesuraient pas',
            'Les patients choisissent mieux leur hôpital',
            'Les délais ont raccourci',
            'Les budgets ont augmenté',
          ],
          correct: 0,
          why: 'Elle l’accorde d’emblée, et ajoute que cela ne se défait pas.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'De quoi dépend d’abord un résultat, selon elle ?',
          opts: [
            'De qui est entré par la porte',
            'De la compétence de l’équipe',
            'Du budget du service',
            'De la durée d’hospitalisation',
          ],
          correct: 0,
          why: 'À compétence égale, un service qui prend des patients plus simples obtient mieux.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Que répond-elle à l’argument de l’ajustement au risque ?',
          opts: [
            'Il corrige avec des données qui ne sont pas les bonnes',
            'Il n’est pas appliqué en pratique',
            'Il coûte trop cher',
            'Il avantage les grands hôpitaux',
          ],
          correct: 0,
          why: 'Âge et diagnostics oui ; vivre seul et lire sa notice, non, et ceux-là pèsent plus.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Quelle est sa position sur l’existence même du classement ?',
          opts: [
            'Elle ne demande pas sa suppression, mais l’examen de ses incitations',
            'Elle demande qu’on l’arrête',
            'Elle le juge sans effet',
            'Elle veut qu’on le publie plus souvent',
          ],
          correct: 0,
          why: 'Elle dit ne jamais avoir demandé cela, et qu’on le lui fait dire chaque année.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Quelle incitation le classement crée-t-il, d’après elle ?',
          opts: [
            'Récompenser le fait d’avoir de bons patients',
            'Réduire la durée des séjours',
            'Publier davantage de données',
            'Recruter plus de personnel',
          ],
          correct: 0,
          why: 'Il récompense cela autant que le fait de bien soigner.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Comment décrit-elle la façon dont un recrutement change ?',
          opts: [
            'Par des décisions défendables une par une, sans que personne l’ait voulu',
            'Par une consigne de la direction',
            'Par le refus explicite des cas lourds',
            'Par une décision du ministère',
          ],
          correct: 0,
          why: 'Un délai allongé, une orientation vers un confrère, et trois ans plus tard le service a changé.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Comment qualifie-t-elle ses propres propos face au directeur ?',
          opts: ['Une description', 'Une accusation', 'Une hypothèse', 'Une plainte'],
          correct: 0,
          why: 'Elle répond que c’est une description, et qu’elle ne vise personne.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 3 — 7 points ═══════════════════════════════════════════════ */
//
// Three short documents, played ONCE each, two questions apiece.
// Weights: (1 · 1.5) · (1 · 1) · (1.5 · 1) = 7
//
// The 15-second read window is the design constraint here: two questions must
// be readable, holdable and answerable inside it, so the options are short
// phrases rather than clauses (STANDARD-delf-b2 §3).

export const CO_EX3: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b2',
  label: 'Compréhension de l’oral · Exercice 3',
  prompt:
    'Vous allez écouter 1 fois 3 documents.\n' +
    'Lisez les questions, écoutez le document puis répondez.',
  timingS: 400,
  targetItemIds: uniq(ITEMS.communaute, ITEMS.rpTechnologie, ITEMS.rpMeteoNature),
  parts: [
    {
      label: 'Document 1 · la bibliothèque ouvre plus tard',
      playCount: 1,
      readWindowS: 15,
      durationS: 61,
      text:
        'UNE RESPONSABLE : Nous avons ouvert jusqu’à vingt-deux heures pendant six mois, ' +
        'et la fréquentation du soir a été bonne. ' +
        'Ce qui nous a surpris, c’est qui venait. ' +
        'Nous attendions des étudiants, parce que l’université est à deux rues, ' +
        'et nous avons eu des gens qui travaillent, venus après leur journée, ' +
        'souvent seuls, souvent pour rester assis au chaud une heure ' +
        'plutôt que pour emprunter quoi que ce soit. ' +
        'Les prêts du soir représentent moins d’un pour cent de nos prêts, ' +
        'et la salle est pleine. Nous avons donc gardé les horaires ' +
        'et supprimé les animations que nous avions prévues pour eux : ' +
        'un club de lecture, deux rencontres par mois, une aide aux devoirs. ' +
        'Rien de tout cela ne correspondait à ce qu’ils venaient chercher, ' +
        'et je crois que nous mettions du temps à l’admettre ' +
        'parce qu’une bibliothèque préfère qu’on vienne pour ses livres. ' +
        'Ce que nous avons ajouté à la place ne ressemble à rien d’un programme : ' +
        'des prises de courant, dix lampes de bureau, et le droit de manger. ' +
        'Le budget total tient dans une soirée d’animation annulée, ' +
        'et c’est la décision dont je suis le plus contente cette année.',
      items: [
        {
          q: 'Qui fréquentait la bibliothèque le soir ?',
          opts: ['Des actifs après le travail', 'Des étudiants', 'Des familles', 'Des retraités'],
          correct: 0,
          why: 'Ils attendaient des étudiants et ont eu des gens venus après leur journée.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qu’a fait la bibliothèque ?',
          opts: [
            'Gardé les horaires, supprimé les animations',
            'Supprimé les horaires du soir',
            'Ajouté des animations',
            'Recruté du personnel',
          ],
          correct: 0,
          why: 'Les animations ne correspondaient à rien de ce que ce public venait chercher.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 2 · une réparation plus longue que le montage',
      playCount: 1,
      readWindowS: 15,
      durationS: 78,
      text:
        'UN INGÉNIEUR : Monter cette machine prend deux jours. ' +
        'La réparer nous en a pris onze, et ce n’est pas une anomalie. ' +
        'À la construction, on assemble dans l’ordre qui arrange le monteur. ' +
        'À la réparation, il faut défaire cet ordre-là sans casser le reste, ' +
        'et personne ne l’a prévu au moment de le concevoir. ' +
        'Nous demandons maintenant que chaque pièce d’usure soit accessible ' +
        'sans en démonter trois autres, et que les vis soient toutes du même type. ' +
        'Cela paraît dérisoire et cela change une journée entière de travail. ' +
        'Le surcoût est de l’ordre de quatre pour cent à la fabrication, ' +
        'et il se rembourse à la première intervention. ' +
        'Nos clients ne le paient pourtant pas volontiers : ' +
        'ils comparent des devis à l’achat, jamais des coûts sur dix ans. ' +
        'Et ce sont exactement les mêmes qui nous appellent le jour de la panne ' +
        'en demandant pourquoi c’est si long. ' +
        'Nous avons essayé de chiffrer les deux colonnes côte à côte sur nos devis, ' +
        'le prix d’achat et le coût d’entretien sur dix ans. ' +
        'Cela n’a rien changé du tout : l’acheteur signe le devis, ' +
        'et c’est un autre service, souvent dans un autre bâtiment, ' +
        'qui paiera les réparations quatre ans plus tard.',
      items: [
        {
          q: 'Pourquoi la réparation a-t-elle été si longue ?',
          opts: [
            'L’ordre de montage n’avait pas prévu le démontage',
            'Les pièces manquaient',
            'L’équipe manquait de formation',
            'La machine était très ancienne',
          ],
          correct: 0,
          why: 'Il faut défaire l’ordre du monteur sans casser le reste.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que dit-il de ses clients ?',
          opts: [
            'Ils refusent le surcoût puis appellent à la panne',
            'Ils réparent eux-mêmes',
            'Ils changent de fournisseur',
            'Ils acceptent de payer plus',
          ],
          correct: 0,
          why: 'Ils ne paient pas volontiers, et ce sont les mêmes qui appellent le jour de la panne.',
          band: 'b2',
          points: 1,
        },
      ],
    },
    {
      label: 'Document 3 · le lac rouvert à la baignade',
      playCount: 1,
      readWindowS: 15,
      durationS: 71,
      text:
        'UNE JOURNALISTE : Le lac de Vaubourg rouvre à la baignade après trente ans de fermeture. ' +
        'L’eau est redevenue conforme il y a huit ans déjà : ' +
        'ce n’est donc pas la dépollution qui explique la date, ' +
        'c’est le temps qu’il a fallu pour trouver qui paierait les maîtres-nageurs. ' +
        'La commune y a renoncé deux fois, en deux mille dix-neuf puis en deux mille vingt-trois, ' +
        'faute de pouvoir porter seule un poste saisonnier de deux mois. ' +
        'Le dispositif retenu repose sur trois communes qui se partagent le coût ' +
        'au prorata de leur population, ce qui a demandé dix-huit mois de négociation ' +
        'pour une somme inférieure au prix d’un abribus. ' +
        'Il est prévu pour deux étés seulement, à titre d’essai, ' +
        'et sera reconduit si la fréquentation le justifie. ' +
        'Qui mesurera cette fréquentation, et à partir de quel seuil, ' +
        'n’est écrit nulle part dans la convention. ' +
        'Les riverains que nous avons rencontrés ne s’en inquiètent pas encore. ' +
        'Ils rappellent surtout que le lac a été fermé une génération entière, ' +
        'que les enfants qui apprenaient à nager ici sont aujourd’hui grands-parents, ' +
        'et qu’un été d’essai leur paraît une façon curieuse ' +
        'de rattraper trente ans.',
      items: [
        {
          q: 'Qu’est-ce qui explique la date de réouverture ?',
          opts: [
            'Le financement de la surveillance',
            'La qualité de l’eau',
            'Une décision préfectorale',
            'Les travaux d’aménagement',
          ],
          correct: 0,
          why: 'L’eau est conforme depuis huit ans ; c’est le paiement des maîtres-nageurs qui a tardé.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que sait-on de la suite du dispositif ?',
          opts: ['Rien n’est prévu au-delà de deux étés', 'Il est permanent', 'Il sera élargi', 'Il est financé par la région'],
          correct: 0,
          why: 'Prévu pour deux étés, et ce qui suit n’est écrit nulle part.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
