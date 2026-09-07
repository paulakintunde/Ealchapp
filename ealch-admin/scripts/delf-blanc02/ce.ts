// DELF B2 blanc-02 — Compréhension des écrits. 20 questions, 25 points, 1 h.
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
// DELF-69 · regulating short-term lets without pushing them underground.
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
//
// SELF-VERIFY: the column states a position AND a competing consideration it
// does not dissolve — the registration scheme worked and the author still
// thinks the number it produced is the wrong thing to celebrate.

export const CE_EX1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 1',
  prompt:
    'Lisez le texte puis répondez aux questions.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.hebergement),
  parts: [
    {
      label: 'Exercice 1 · ce que compte un registre',
      text:
        'CE QUE COMPTE UN REGISTRE\n\n' +
        'Il y a trois ans, Valmont a rendu obligatoire l’enregistrement des meublés touristiques. ' +
        'Un numéro à afficher sur chaque annonce, une limite de cent vingt nuits par an, ' +
        'une amende pour qui s’en dispense. La ville a publié son bilan la semaine dernière : ' +
        'deux mille six cents logements enregistrés, contre neuf cents avant la mesure. ' +
        'Le communiqué parle d’un succès et il a raison sur ce point précis. ' +
        'Ce que le chiffre ne dit pas mérite pourtant qu’on s’y arrête.\n\n' +
        'Un registre compte ce qui s’y inscrit. Il ne compte pas ce qui se déplace ailleurs, ' +
        'et l’observatoire du logement de la région estime qu’environ quatre cents annonces ' +
        'ont simplement quitté les plateformes principales pour des groupes privés ' +
        'où aucun numéro n’est demandé. Le chiffre est une estimation et l’observatoire le dit : ' +
        'on ne compte pas facilement ce qui se cache. Mais il indique une direction, ' +
        'et cette direction est celle que redoutaient les opposants à la mesure.\n\n' +
        'L’argument mérite d’être pris au sérieux plutôt que balayé. Une règle qui déplace ' +
        'une pratique sans la réduire produit deux effets : elle rend cette pratique plus difficile ' +
        'à observer, et elle prive de recours les locataires qui la subissent. ' +
        'Un voyageur logé hors registre n’a personne à qui écrire. ' +
        'Le voisin dérangé non plus.\n\n' +
        'Faut-il en conclure qu’il ne fallait rien faire ? L’adjointe au logement répond ' +
        'que la question est mal posée, et sur ce point elle convainc. ' +
        'Avant la mesure, personne ne savait combien de logements étaient concernés ; ' +
        'la ville négociait avec les plateformes sans connaître l’ordre de grandeur ' +
        'de ce dont elle parlait. Les deux mille six cents enregistrés ne sont pas ' +
        'un résultat en eux-mêmes, mais ils sont la condition de tout le reste. ' +
        'On ne régule pas ce qu’on n’a pas compté.\n\n' +
        'Reste que la ville présente ce compte comme un aboutissement, ' +
        'et c’est là que le bilan devient trompeur. Deux mille six cents logements enregistrés ' +
        'ne signifient pas deux mille six cents logements rendus au marché locatif. ' +
        'Le nombre de baux de longue durée signés dans le centre a bougé de moins d’un pour cent ' +
        'depuis trois ans. La mesure a produit de la visibilité, ce qui était nécessaire ; ' +
        'elle n’a pas encore produit de logements, ce qui était le motif invoqué.\n\n' +
        'La suite se joue sur un point technique dont personne ne parle en réunion publique : ' +
        'la vérification. Un registre déclaratif que rien ne contrôle devient, au bout de quelques années, ' +
        'une liste de numéros. Valmont a recruté deux agents pour deux mille six cents dossiers. ' +
        'C’est cette proportion, et non le total affiché, qui dira dans trois ans ' +
        'si la ville a réglementé ou seulement enregistré.',
      items: [
        {
          q: 'Combien de logements sont enregistrés aujourd’hui ?',
          opts: ['Deux mille six cents', 'Neuf cents', 'Quatre cents', 'Cent vingt'],
          correct: 0,
          why: 'Deux mille six cents contre neuf cents avant la mesure.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Que serait devenu, selon l’observatoire, un certain nombre d’annonces ?',
          opts: [
            'Elles sont passées à des groupes privés sans numéro',
            'Elles ont été retirées définitivement',
            'Elles ont été transformées en baux de longue durée',
            'Elles ont été enregistrées dans une commune voisine',
          ],
          correct: 0,
          why: 'Environ quatre cents auraient quitté les plateformes principales pour des groupes privés.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Comment l’auteur traite-t-il cette estimation ?',
          opts: [
            'Il en signale la fragilité tout en retenant la direction qu’elle indique',
            'Il la rejette faute de méthode',
            'Il la présente comme un fait établi',
            'Il la réserve aux opposants de la mesure',
          ],
          correct: 0,
          why: 'Il rappelle qu’on ne compte pas facilement ce qui se cache, et retient malgré tout la direction.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Selon le texte, quel est le premier effet d’une pratique qui se déplace ?',
          opts: [
            'Elle devient plus difficile à observer',
            'Elle coûte plus cher aux voyageurs',
            'Elle se concentre dans un seul quartier',
            'Elle attire de nouveaux propriétaires',
          ],
          correct: 0,
          why: 'Deux effets sont cités, et le premier est la perte d’observabilité ; le second est la perte de recours.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Sur quel point l’auteur donne-t-il raison à l’adjointe au logement ?',
          opts: [
            'Compter était la condition de toute régulation ultérieure',
            'La mesure a rendu des logements au marché locatif',
            'Les plateformes ont coopéré de bonne foi',
            'Les opposants n’avaient aucun argument sérieux',
          ],
          correct: 0,
          why:
            'Il la trouve convaincante sur ce point : la ville négociait sans connaître l’ordre de grandeur, ' +
            'et on ne régule pas ce qu’on n’a pas compté.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi le bilan de la ville est-il jugé trompeur ?',
          opts: [
            'Il présente une condition préalable comme un aboutissement',
            'Il additionne des logements qui n’existent pas',
            'Il omet le coût de la mesure',
            'Il compare deux périodes trop éloignées',
          ],
          correct: 0,
          why:
            'Les enregistrements ne sont pas des logements rendus au marché : ' +
            'les baux de longue durée ont bougé de moins d’un pour cent.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Quel élément décidera, selon l’auteur, du résultat dans trois ans ?',
          opts: [
            'Le rapport entre les agents de contrôle et les dossiers',
            'Le nombre total d’enregistrements',
            'Le montant de l’amende',
            'La limite annuelle de nuitées',
          ],
          correct: 0,
          why: 'Deux agents pour deux mille six cents dossiers : c’est cette proportion, non le total affiché.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-77 · wellbeing programmes, and the working conditions they leave alone.
// Weights: 1 · 0.5 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
//
// The competing consideration is load-bearing: the author is not against the
// programmes and says so twice, which is what stops the attribute questions
// from collapsing into "the author disapproves".

export const CE_EX2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 2',
  prompt:
    'Lisez le texte puis répondez aux questions.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.bienEtre),
  parts: [
    {
      label: 'Exercice 2 · le cours de respiration et le planning',
      text:
        'LE COURS DE RESPIRATION ET LE PLANNING\n\n' +
        'Une entreprise de logistique de six cents salariés a mis en place, il y a deux ans, ' +
        'un programme de bien-être complet : ateliers de respiration, application de suivi du sommeil, ' +
        'permanence d’un psychologue deux jours par semaine. Le taux de participation est élevé, ' +
        'quarante et un pour cent, et les retours des participants sont bons. ' +
        'Je commence par là parce que la suite pourrait laisser croire le contraire : ' +
        'ces dispositifs aident des gens, et les supprimer ne rendrait service à personne.\n\n' +
        'Le problème n’est pas ce qu’ils font, c’est ce qu’ils déplacent. ' +
        'La même entreprise a, sur la même période, augmenté de trois heures ' +
        'l’amplitude quotidienne de ses équipes de nuit et supprimé le poste de coordination ' +
        'qui absorbait les imprévus. Les deux décisions ont été prises par des directions différentes ' +
        'et personne ne les a jamais examinées ensemble. C’est cela, et non l’hypocrisie ' +
        'qu’on invoque trop vite, qui produit la situation absurde d’un atelier de gestion du stress ' +
        'proposé le mardi à des salariés dont le planning a été rendu plus stressant le lundi.\n\n' +
        'Une objection sérieuse consiste à dire qu’une entreprise ne peut pas tout traiter ' +
        'et qu’il vaut mieux un dispositif imparfait qu’aucun. Elle est recevable. ' +
        'Mais elle suppose que les deux leviers coûtent la même chose à actionner, ' +
        'et ils ne coûtent pas la même chose du tout. Un atelier se décide en comité, ' +
        'se finance sur un budget existant et se communique bien. ' +
        'Une amplitude horaire se renégocie, coûte des postes et ne se communique pas. ' +
        'Le dispositif le plus visible est aussi le moins contraignant, ' +
        'et cette coïncidence explique mieux les choix observés que n’importe quel cynisme.\n\n' +
        'Une chercheuse en santé au travail que j’ai interrogée le formule autrement. ' +
        'Selon elle, ces programmes se sont installés parce qu’ils répondent à une question réelle ' +
        'avec la seule réponse dont l’entreprise dispose seule. ' +
        'Modifier l’organisation demande l’accord de plusieurs parties ; ' +
        'offrir un atelier n’en demande aucun. ' +
        'Elle ajoute une remarque qui m’a arrêté : les salariés eux-mêmes, interrogés, ' +
        'demandent d’abord les ateliers. Non parce qu’ils les préfèrent, ' +
        'mais parce qu’ils sont la seule chose qu’on leur propose de demander.\n\n' +
        'Que faudrait-il alors ? Rien de spectaculaire, et rien de gratuit. ' +
        'Que toute décision d’organisation passe par le même comité que les dispositifs de bien-être, ' +
        'et au même moment. Cela ne garantit aucun résultat. ' +
        'Cela garantit seulement que les deux décisions se rencontrent une fois, ' +
        'ce qui n’arrive aujourd’hui dans aucune des trois entreprises que j’ai visitées.',
      items: [
        {
          q: 'Quel est le taux de participation au programme ?',
          opts: ['Quarante et un pour cent', 'Six cents', 'Trois heures', 'Deux jours par semaine'],
          correct: 0,
          why: 'Le texte le qualifie d’élevé et donne le chiffre.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle décision a été prise sur la même période ?',
          opts: [
            'L’amplitude des équipes de nuit a augmenté de trois heures',
            'Les effectifs de nuit ont doublé',
            'La permanence du psychologue a été réduite',
            'Les ateliers sont devenus obligatoires',
          ],
          correct: 0,
          why: 'Trois heures d’amplitude en plus, et la suppression du poste de coordination.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'À quoi l’auteur attribue-t-il la contradiction observée ?',
          opts: [
            'Deux directions ont décidé sans jamais examiner les décisions ensemble',
            'À une volonté délibérée de dissimulation',
            'À un manque de budget',
            'À l’opposition des salariés aux changements d’organisation',
          ],
          correct: 0,
          why: 'Il écarte explicitement l’hypocrisie et désigne deux décisions jamais examinées ensemble.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Comment traite-t-il l’objection « mieux vaut un dispositif imparfait que rien » ?',
          opts: [
            'Il la juge recevable puis en conteste le présupposé',
            'Il la rejette comme un argument de façade',
            'Il l’adopte pour conclure',
            'Il l’attribue à la chercheuse interrogée',
          ],
          correct: 0,
          why: 'Elle est « recevable », mais suppose que les deux leviers coûtent la même chose à actionner.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle explication l’auteur préfère-t-il au cynisme ?',
          opts: [
            'Le dispositif le plus visible est aussi le moins contraignant',
            'Les directions ignorent les résultats des ateliers',
            'Les salariés refusent les changements d’horaires',
            'Les budgets de formation doivent être dépensés',
          ],
          correct: 0,
          why: 'Il nomme cette coïncidence et dit qu’elle explique mieux les choix que n’importe quel cynisme.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi, selon la chercheuse, les salariés demandent-ils d’abord les ateliers ?',
          opts: [
            'C’est la seule chose qu’on leur propose de demander',
            'Ils les jugent plus efficaces que l’organisation',
            'Ils craignent de perdre leur poste',
            'Ils y participent pendant leurs heures de travail',
          ],
          correct: 0,
          why: 'Le texte précise « non parce qu’ils les préfèrent » : c’est la seule demande qui leur soit offerte.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que propose l’auteur en conclusion ?',
          opts: [
            'Faire passer organisation et bien-être par le même comité, au même moment',
            'Supprimer les programmes de bien-être',
            'Rendre les ateliers obligatoires',
            'Confier le sujet à un cabinet extérieur',
          ],
          correct: 0,
          why: 'Il l’annonce comme ne garantissant aucun résultat, seulement que les deux décisions se rencontrent.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 3 — 7 points ═══════════════════════════════════════════════ */
//
// DELF-90 · is a citizens' assembly better than a referendum?
//
// ── This is not an ordinary MCQ, and it fails in ways an ordinary MCQ cannot ─
//
// The four names ARE the options, so they must appear in the SAME ORDER on
// every item — a candidate scanning the page must not meet six different lists.
// blanc-01 shipped a draft that did exactly that, and its first guard could not
// see it because the guard sorted both sides before comparing. delf/paper-rules
// now compares in order, and this task is deliberately NOT passed through
// scatterKeys: permuting the options here would produce that defect on purpose.
//
// Weights: 1 · 1.5 · 1 · 1.5 · 1 · 1 = 7
// Keys: Naïma, Naïma, Olivier, Priya, Thomas, Olivier — 2/2/1/1. Every speaker
// answers at least once and none more than twice, against a ceiling of three.
// Written out rather than as letters: an index drifts silently when an item
// moves, and this comment already said "A A B C D C" once while the data said
// otherwise.
//
// The four positions are DISTINCT, not four degrees of one. Naïma wants
// deliberation, Olivier wants the franchise, Priya rejects the question as
// posed, and Thomas argues from inside the room about a mechanism neither camp
// discusses. Rule 3 of the bank is the hardest constraint in it.

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
  targetItemIds: uniq(ITEMS.gouvernement),
  parts: [
    {
      label: 'Exercice 3 · une assemblée tirée au sort vaut-elle mieux qu’un référendum ?',
      text:
        'UNE ASSEMBLÉE TIRÉE AU SORT VAUT-ELLE MIEUX QU’UN RÉFÉRENDUM ?\n' +
        'Quatre personnes ayant participé au débat public nous ont répondu.\n\n' +
        'NAÏMA — Ce qui me convainc dans l’assemblée, c’est qu’on y change d’avis. ' +
        'J’ai suivi les trois week-ends de celle de notre région : ' +
        'un tiers des participants ne votait pas au départ ce qu’ils ont voté à la fin, ' +
        'et ils pouvaient dire pourquoi. Un référendum ne produit jamais cela. ' +
        'Il photographie des opinions formées ailleurs, souvent en trois semaines de campagne. ' +
        'On me répond que cent cinquante personnes ne représentent pas un pays. ' +
        'C’est exact, et je ne prétends pas le contraire : ' +
        'je dis qu’elles ont fait un travail que personne d’autre ne fait, ' +
        'et qu’un pays a besoin que quelqu’un le fasse quelque part.\n\n' +
        'OLIVIER — Je pars d’un principe simple et je m’y tiens : ' +
        'sur une question qui engage tout le monde, tout le monde doit pouvoir répondre. ' +
        'Le tirage au sort me prive de ma voix au profit d’un voisin que je n’ai pas choisi. ' +
        'On m’objecte que je vote mal informé. Peut-être. ' +
        'Mais la solution n’est pas de confier ma voix à quelqu’un de mieux informé, ' +
        'elle est de m’informer. J’ajoute une chose qu’on oublie : ' +
        'un référendum se conteste, se rejoue, se perd. ' +
        'Une assemblée dont les conclusions déplaisent, on n’en reconvoque jamais une seconde.\n\n' +
        'PRIYA — Les deux camps discutent de la mauvaise chose. ' +
        'Assemblée ou référendum, quelqu’un rédige la question, et c’est là que tout se joue. ' +
        '« Faut-il financer le tramway par l’impôt local ? » et ' +
        '« Faut-il renoncer au tramway pour éviter une hausse d’impôt ? » ' +
        'portent sur le même projet et n’obtiennent pas la même réponse. ' +
        'Tant que la rédaction reste entre les mains de ceux qui ont déjà un avis, ' +
        'le procédé choisi ensuite ne change pas grand-chose. ' +
        'Donnez-moi une garantie sur la question et je vous laisse le mécanisme.\n\n' +
        'THOMAS — J’ai siégé dans une assemblée et j’en garde une idée précise. ' +
        'Ce qui a fait la différence n’est ni le tirage au sort ni le débat : ' +
        'c’est que nous pouvions convoquer nous-mêmes les experts que nous voulions entendre. ' +
        'Les quatre premiers nous avaient été proposés ; les six suivants, nous les avons choisis, ' +
        'et ce sont eux qui ont déplacé nos conclusions. ' +
        'Personne n’en parle, ni les partisans ni les adversaires. ' +
        'Cela dit, je sais ce qui se passera : ' +
        'la prochaine assemblée aura une liste d’experts fournie, ' +
        'et on s’étonnera qu’elle conclue comme on l’espérait.',
      items: [
        {
          q: 'Cette personne retient qu’une partie des participants a changé d’avis en cours de route.',
          opts: ['Naïma', 'Olivier', 'Priya', 'Thomas'],
          correct: 0,
          why: 'Un tiers des participants ne votait pas à la fin ce qu’ils votaient au départ, et pouvaient l’expliquer.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne reconnaît une limite de son propre camp sans y renoncer.',
          opts: ['Naïma', 'Olivier', 'Priya', 'Thomas'],
          correct: 0,
          why: 'Elle accorde que cent cinquante personnes ne représentent pas un pays, et maintient la valeur du travail fait.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Cette personne refuse qu’un manque d’information justifie de déléguer sa voix.',
          opts: ['Naïma', 'Olivier', 'Priya', 'Thomas'],
          correct: 1,
          why: 'Olivier admet peut-être voter mal informé, et conclut qu’il faut s’informer, non déléguer.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne estime que le choix du procédé importe moins que la formulation.',
          opts: ['Naïma', 'Olivier', 'Priya', 'Thomas'],
          correct: 2,
          why: 'Priya oppose deux rédactions du même projet et laisse le mécanisme à qui lui garantit la question.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Cette personne attribue le résultat à un pouvoir procédural dont personne ne parle.',
          opts: ['Naïma', 'Olivier', 'Priya', 'Thomas'],
          correct: 3,
          why: 'Thomas désigne la possibilité de convoquer soi-même les experts, et note que les deux camps l’ignorent.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne souligne qu’un résultat contesté peut être rejoué dans un cas et pas dans l’autre.',
          opts: ['Naïma', 'Olivier', 'Priya', 'Thomas'],
          correct: 1,
          why: 'Olivier ajoute qu’un référendum se conteste et se rejoue, alors qu’on ne reconvoque pas une assemblée.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
