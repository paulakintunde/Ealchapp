// TCF Canada blanc-05 — Compréhension écrite, the upper slope (B2, C1, C2).
//
// Continues ce.ts and MUST follow it in the CE_TASKS array.
//
// C2 routes to `philosophie` at C1: there are no published C2 corpus items on
// any theme, and pick-items reports that fallback rather than hiding it.
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

/* ═══ B2 — positions 20 to 29 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: no answer is a sentence to be found. Each requires holding a
// figure against the claim it is offered to support, or a concession against
// what survives it.

export const CE_B2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b2',
  label: 'Compréhension écrite · B2',
  prompt: 'Lisez les quatre documents et choisissez la bonne réponse.',
  timingS: 850,
  targetItemIds: uniq(
    ITEMS.questionsSociales.b2,
    ITEMS.rechercheEmploi.b2,
    ITEMS.economie.b2,
    ITEMS.valeurs.b2
  ),
  parts: [
    {
      label: 'Document 17 · ouvrir le dimanche',
      text:
        'Douze bibliothèques municipales ont ouvert le dimanche l’an dernier, ' +
        'et la fréquentation a progressé de vingt-deux pour cent. ' +
        'Le chiffre circule comme une réponse. Il pose en réalité la question.\n' +
        'Une progression de fréquentation ne dit pas qui vient. ' +
        'Les comptages effectués dans quatre de ces villes montrent ' +
        'que la moitié des visiteurs du dimanche sont des usagers déjà inscrits ' +
        'qui ont déplacé une venue du samedi. ' +
        'Ceux-là ne coûtent rien de plus et ne changent rien à la portée du service.\n' +
        'L’autre moitié est plus intéressante et plus difficile à retenir. ' +
        'Ce sont des familles qui viennent une fois, souvent sans emprunter, ' +
        'et dont un cinquième seulement revient dans les six mois.\n' +
        'Le coût, lui, n’est pas ambigu. Un dimanche coûte deux fois un jour ordinaire, ' +
        'majorations comprises, et il se prend sur un budget qui n’a pas bougé. ' +
        'Trois des douze villes ont fermé le lundi pour compenser.\n' +
        'La question à poser n’est donc pas si l’ouverture dominicale fonctionne. ' +
        'Elle fonctionne, au sens où des gens viennent. ' +
        'Elle est de savoir si l’on préfère un service ouvert six jours à tous ' +
        'ou un service ouvert six jours dont un le dimanche, ' +
        'et cette question-là ne se tranche pas avec un pourcentage de fréquentation.',
      items: [
        {
          q: 'Que montrent les comptages sur les visiteurs du dimanche ?',
          opts: [
            'La moitié sont des inscrits qui ont déplacé une venue',
            'Ce sont surtout de nouveaux usagers',
            'Ils empruntent plus que les autres',
            'Ils viennent des communes voisines',
          ],
          correct: 0,
          why: 'La moitié a simplement déplacé une venue du samedi, sans élargir la portée du service.',
          band: 'b2',
        },
        {
          q: 'Qu’est-ce qui rend l’autre moitié difficile à retenir ?',
          opts: [
            'Un cinquième seulement revient dans les six mois',
            'Elle vient de trop loin',
            'Elle n’a pas le droit d’emprunter',
            'Elle préfère le samedi',
          ],
          correct: 0,
          why: 'Des familles qui viennent une fois, souvent sans emprunter, et reviennent peu.',
          band: 'b2',
        },
        {
          q: 'Quelle question l’auteur juge-t-il pertinente ?',
          opts: [
            'Quel jour d’ouverture on préfère, à budget constant',
            'Si l’ouverture du dimanche attire du public',
            'Si les majorations sont justifiées',
            'Si les bibliothèques doivent prêter davantage',
          ],
          correct: 0,
          why: 'Un dimanche coûte deux jours et trois villes ont fermé le lundi : l’arbitrage est là.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 18 · la période d’essai',
      text:
        'Un rapport remis au ministère du travail examine ce que devient la période d’essai ' +
        'dans les faits, et non dans les textes qui l’encadrent.\n' +
        'Sa fonction déclarée est symétrique : chacune des deux parties vérifie ' +
        'que l’engagement lui convient. Les ruptures observées ne le sont pas. ' +
        'Sur cent essais interrompus, soixante-douze le sont par l’employeur, ' +
        'et l’écart tient moins au pouvoir qu’à l’information. ' +
        'Le salarié a vu une annonce ; l’employeur a vu quinze candidats.\n' +
        'Les auteurs relèvent ensuite un usage que la loi n’avait pas prévu. ' +
        'Dans les secteurs à forte saisonnalité, la période d’essai sert d’ajustement : ' +
        'on embauche large en début de saison en sachant qu’un tiers ne sera pas confirmé. ' +
        'Rien de tout cela n’est illégal, et rien n’y ressemble à une vérification mutuelle.\n' +
        'Une objection mérite d’être entendue. Sans période d’essai, disent les employeurs, ' +
        'ils recruteraient moins et plus prudemment, ' +
        'ce qui frapperait d’abord les profils atypiques. ' +
        'Le rapport l’accorde et cite deux pays où l’encadrement strict ' +
        'a réduit l’embauche des débutants.\n' +
        'Sa recommandation est donc étroite : non pas raccourcir la période, ' +
        'mais obliger à motiver par écrit une rupture à l’initiative de l’employeur. ' +
        'La mesure ne retire aucune souplesse. ' +
        'Elle rend seulement visible ce qui se décide aujourd’hui sans laisser de trace.',
      items: [
        {
          q: 'Pourquoi les ruptures sont-elles asymétriques ?',
          opts: [
            'L’employeur dispose de bien plus d’information',
            'La loi favorise l’employeur',
            'Les salariés hésitent à partir',
            'Les contrats sont trop courts',
          ],
          correct: 0,
          why: 'Le salarié a vu une annonce, l’employeur quinze candidats : l’écart tient à l’information.',
          band: 'b2',
        },
        {
          q: 'Quel usage la loi n’avait-elle pas prévu ?',
          opts: [
            'L’essai sert d’ajustement saisonnier',
            'L’essai est renouvelé indéfiniment',
            'L’essai remplace la formation',
            'L’essai est imposé aux débutants',
          ],
          correct: 0,
          why: 'On embauche large en sachant qu’un tiers ne sera pas confirmé.',
          band: 'b2',
        },
        {
          q: 'Que recommande le rapport ?',
          opts: [
            'Motiver par écrit une rupture décidée par l’employeur',
            'Raccourcir la durée de la période d’essai',
            'Interdire l’essai dans les secteurs saisonniers',
            'Aligner les délais sur ceux des deux pays cités',
          ],
          correct: 0,
          why: 'Il accorde l’objection sur la souplesse et demande seulement une trace écrite.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 19 · une monnaie locale',
      text:
        'Une monnaie locale circule depuis six ans dans une vallée de dix-huit mille habitants. ' +
        'Deux cent quarante commerces l’acceptent et l’équivalent de six cent mille euros ' +
        'a été échangé l’an dernier.\n' +
        'Ses promoteurs en tirent une conclusion que les chiffres ne soutiennent pas tout à fait. ' +
        'Une monnaie locale, disent-ils, retient la richesse sur le territoire. ' +
        'L’étude universitaire qui a suivi le dispositif observe autre chose : ' +
        'les sommes converties étaient déjà dépensées localement dans neuf cas sur dix. ' +
        'Le circuit court existait avant la monnaie, qui l’accompagne sans le créer.\n' +
        'Cela ne rend pas le dispositif inutile, et l’étude ne le dit pas. ' +
        'Elle relève deux effets réels et d’une autre nature. ' +
        'Les commerçants adhérents se connaissent et s’adressent des clients, ' +
        'ce qui ne se produisait pas auparavant. ' +
        'Et la vallée dispose désormais d’une liste de deux cent quarante entreprises ' +
        'qu’aucune administration n’avait jamais dressée.\n' +
        'La conclusion des auteurs est prudente. ' +
        'Le dispositif produit du lien plutôt que de la richesse retenue, ' +
        'et l’on aurait tort de le défendre avec l’argument économique, ' +
        'qui est le seul que ses opposants peuvent réfuter.',
      items: [
        {
          q: 'Que montre l’étude sur les sommes converties ?',
          opts: [
            'Elles étaient déjà dépensées localement',
            'Elles quittaient la vallée avant le dispositif',
            'Elles ont doublé en six ans',
            'Elles proviennent surtout des touristes',
          ],
          correct: 0,
          why: 'Neuf cas sur dix : le circuit court précédait la monnaie.',
          band: 'b2',
        },
        {
          q: 'Pourquoi l’argument économique dessert-il le dispositif ?',
          opts: [
            'C’est le seul que ses opposants peuvent réfuter',
            'Il est difficile à comprendre',
            'Il repose sur des chiffres secrets',
            'Il exclut les commerçants',
          ],
          correct: 0,
          why: 'Les effets réels sont ailleurs ; défendre par l’économie offre la prise la plus facile.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 20 · évaluer ceux qui enseignent',
      text:
        'Personne ne défend l’idée qu’un enseignant ne devrait jamais être évalué. ' +
        'Le désaccord porte sur ce que l’on mesure, et il est plus profond qu’il n’en a l’air.\n' +
        'La progression des élèves paraît le critère évident. ' +
        'Elle a le défaut d’être largement déterminée avant l’entrée en classe : ' +
        'à méthode identique, une même enseignante obtient des résultats très différents ' +
        'selon l’établissement où elle exerce. ' +
        'L’évaluer sur la progression revient à évaluer ses élèves.\n' +
        'La satisfaction des élèves ou des familles se mesure facilement ' +
        'et mesure autre chose que l’enseignement. ' +
        'Les enseignants les mieux notés sur ce critère sont souvent ceux ' +
        'dont le cours est le plus agréable, ce qui n’est ni un défaut ni une preuve.\n' +
        'Reste l’observation par un pair, coûteuse, lente, et la seule à regarder ' +
        'ce que l’on prétend juger. Elle a un inconvénient dont on parle peu : ' +
        'elle ne produit pas de chiffre, et une administration qui doit répartir ' +
        'des promotions entre quatre cents personnes a besoin d’un ordre.\n' +
        'Voilà où se situe le vrai débat. Il n’oppose pas ceux qui veulent évaluer ' +
        'à ceux qui refusent. Il oppose ce qu’il faudrait mesurer ' +
        'à ce qu’un système de gestion peut traiter, ' +
        'et c’est le second qui a gagné partout, faute d’avoir été discuté comme tel.',
      items: [
        {
          q: 'Pourquoi la progression des élèves est-elle un critère trompeur ?',
          opts: [
            'Elle est largement déterminée avant l’entrée en classe',
            'Elle est difficile à calculer',
            'Elle varie selon les matières',
            'Elle dépend du nombre d’élèves',
          ],
          correct: 0,
          why: 'À méthode identique, les résultats changent avec l’établissement.',
          band: 'b2',
        },
        {
          q: 'Selon l’auteur, sur quoi porte le vrai débat ?',
          opts: [
            'Sur l’écart entre ce qu’il faudrait mesurer et ce qu’un système peut traiter',
            'Sur le droit d’évaluer les enseignants',
            'Sur le coût de l’observation par un pair',
            'Sur la satisfaction des familles',
          ],
          correct: 0,
          why: 'Il écarte l’opposition apparente et nomme le besoin administratif d’un ordre chiffré.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: each text grants its opponent something substantial and holds
// its position anyway. A candidate who reads the concession as the thesis
// answers wrong, which is the whole point of the band.

export const CE_C1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'c1',
  label: 'Compréhension écrite · C1',
  prompt: 'Lisez les deux documents et choisissez la bonne réponse.',
  timingS: 720,
  targetItemIds: uniq(ITEMS.philosophie.c1, ITEMS.ethique.c1),
  parts: [
    {
      label: 'Document 21 · ce que l’ironie fait dire au silence',
      text:
        'On définit ordinairement l’ironie comme le fait de dire le contraire de ce que l’on pense, ' +
        'et cette définition, qui a le mérite d’être claire, manque l’essentiel deux fois.\n' +
        'Elle le manque une première fois du côté de celui qui parle. ' +
        'L’ironiste ne dit pas le contraire de sa pensée : il dit une chose ' +
        'dans des conditions telles qu’elle ne peut pas être reçue au premier degré. ' +
        'Le contraire n’est pas dans les mots, il est dans l’écart entre les mots ' +
        'et ce que la situation rend possible. Retirez la situation ' +
        'et la même phrase devient une sottise sincère.\n' +
        'Elle le manque une seconde fois, et plus gravement, du côté de celui qui écoute. ' +
        'Une ironie réussie ne transmet pas un contenu : elle constitue un partage. ' +
        'Celui qui la comprend apprend deux choses en même temps, ' +
        'ce que l’autre pense et qu’il a été jugé capable de l’entendre. ' +
        'C’est ce second message, jamais énoncé, qui fait le prix du procédé, ' +
        'et c’est lui qui explique pourquoi une ironie expliquée ne vaut plus rien.\n' +
        'Il faut accorder à ses adversaires ce qu’ils ont de plus fort. ' +
        'Ce partage se paie d’une exclusion, puisque celui qui ne comprend pas ' +
        'ne sait pas non plus qu’il n’a pas compris, et se trouve désigné sans être averti. ' +
        'L’objection est juste et elle décrit l’ironie mondaine, ' +
        'celle qui sert à marquer les frontières d’un groupe.\n' +
        'Elle ne décrit pas l’autre usage, plus ancien, ' +
        'où l’ironie ne sert pas à exclure quelqu’un mais à dire quelque chose ' +
        'que l’on ne peut pas dire autrement, devant un pouvoir qui écoute. ' +
        'Ce qu’une société interdit d’affirmer, elle laisse souvent passer sous cette forme, ' +
        'et l’histoire des censures est en même temps une histoire des ironies. ' +
        'Renoncer au procédé pour en éviter l’abus reviendrait à désarmer ' +
        'précisément ceux qui n’ont que lui.',
      items: [
        {
          q: 'Que corrige l’auteur dans la définition ordinaire, du côté du locuteur ?',
          opts: [
            'Le contraire est dans la situation, non dans les mots',
            'L’ironiste pense ce qu’il dit',
            'L’ironie exige un ton particulier',
            'L’ironie ne concerne que l’écrit',
          ],
          correct: 0,
          why: 'Sans la situation, la même phrase devient une sottise sincère.',
          band: 'c1',
        },
        {
          q: 'Quel est le second message d’une ironie réussie ?',
          opts: [
            'Que l’auditeur a été jugé capable de comprendre',
            'Que le locuteur est plus instruit',
            'Que le sujet est interdit',
            'Que la conversation est terminée',
          ],
          correct: 0,
          why: 'Jamais énoncé, il fait le prix du procédé et explique qu’une ironie expliquée ne vaille rien.',
          band: 'c1',
        },
        {
          q: 'Que concède-t-il à ses adversaires ?',
          opts: [
            'Celui qui ne comprend pas est désigné sans le savoir',
            'L’ironie est toujours cruelle',
            'L’ironie est un procédé dépassé',
            'La définition ordinaire est exacte',
          ],
          correct: 0,
          why: 'Il juge l’objection juste et la restreint à l’ironie mondaine.',
          band: 'c1',
        },
        {
          q: 'Pourquoi refuse-t-il de renoncer au procédé ?',
          opts: [
            'Il permet de dire ce qu’une société interdit d’affirmer',
            'Il rend les échanges plus agréables',
            'Il est impossible à supprimer',
            'Il facilite l’enseignement',
          ],
          correct: 0,
          why: 'L’histoire des censures est aussi celle des ironies : y renoncer désarme les plus exposés.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 22 · responsable ensemble',
      text:
        'Dire qu’un groupe est responsable de quelque chose paraît une facilité de langage, ' +
        'et l’objection classique tient en une phrase : seuls des individus agissent, ' +
        'donc seuls des individus répondent. La phrase est juste et elle ne suffit pas.\n' +
        'Considérez une décision prise par un conseil de douze personnes, ' +
        'où chacun a voté pour une mesure qu’il jugeait raisonnable ' +
        'et dont la combinaison produit un dommage que personne n’a voulu. ' +
        'Chercher qui est responsable donne douze réponses également vraies et également faibles. ' +
        'Ce n’est pas que la responsabilité soit introuvable : ' +
        'c’est qu’elle n’est pas de la même nature que celle d’un acte individuel.\n' +
        'On répondra que le conseil aurait dû anticiper la combinaison, ' +
        'et que sa faute est là. C’est vrai dans les cas simples. ' +
        'Cela cesse d’être vrai dès que la conséquence n’était visible ' +
        'depuis aucune des douze places, ce qui est la situation ordinaire ' +
        'des organisations un peu grandes.\n' +
        'Il faut donc accorder aux individualistes leur point de départ ' +
        'et leur refuser leur conclusion. Oui, seuls des individus agissent. ' +
        'Non, il ne s’ensuit pas que toute responsabilité se décompose en parts individuelles ' +
        'sans reste. Un dommage peut être produit par une structure de décision, ' +
        'et une structure se corrige, ce qu’aucune sanction individuelle ne fait.\n' +
        'La conséquence pratique est modeste et elle change tout. ' +
        'Elle n’ajoute personne au banc des accusés, ' +
        'et je tiens à le dire nettement, parce que c’est ce qu’on lui fera dire. ' +
        'Elle interdit une seule chose : considérer l’affaire close quand on a trouvé un coupable. ' +
        'Un coupable trouvé est très exactement ce qui dispense de regarder la structure, ' +
        'et il en dispense d’autant mieux qu’il est réellement coupable de quelque chose.\n' +
        'Cette dispense a un coût qu’on mesure au coup d’après. ' +
        'Une organisation qui a sanctionné se croit corrigée et ne l’est pas, ' +
        'puisque la place que le sanctionné occupait sera reprise par quelqu’un ' +
        'à qui la même structure proposera les mêmes choix. ' +
        'Les organisations qui ont le mieux appris de leurs accidents ' +
        'sont celles qui ont eu le courage de ne renvoyer personne, ' +
        'et ce courage-là ne ressemble à rien : il ressemble à de la complaisance.',
      items: [
        {
          q: 'Pourquoi douze réponses également vraies sont-elles faibles ?',
          opts: [
            'La responsabilité n’est pas de la même nature qu’un acte individuel',
            'Les votes n’étaient pas sincères',
            'Le conseil était trop nombreux',
            'Le dommage était prévisible',
          ],
          correct: 0,
          why: 'Chacun a voté raisonnablement ; c’est la combinaison qui produit le dommage.',
          band: 'c1',
        },
        {
          q: 'Que concède l’auteur aux individualistes ?',
          opts: [
            'Que seuls des individus agissent',
            'Que le groupe ne peut jamais être responsable',
            'Que la sanction individuelle est efficace',
            'Que les structures ne se corrigent pas',
          ],
          correct: 0,
          why: 'Il accorde le point de départ et refuse la conclusion qu’on en tire.',
          band: 'c1',
        },
        {
          q: 'Quelle est la conséquence pratique de sa thèse ?',
          opts: [
            'Trouver un coupable ne clôt pas l’affaire',
            'Il faut sanctionner tous les membres du conseil',
            'Il faut réduire la taille des conseils',
            'Il faut renoncer à toute sanction',
          ],
          correct: 0,
          why: 'Un coupable trouvé dispense de regarder la structure ; elle n’ajoute personne aux accusés.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: no answer is stated. Each is the shape of the essay's argument,
// and one distractor in each triple is a proposition the text explicitly
// entertains before setting it aside.

export const CE_C2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'c2',
  label: 'Compréhension écrite · C2',
  prompt: 'Lisez le document et choisissez la bonne réponse.',
  timingS: 580,
  targetItemIds: uniq(ITEMS.philosophie.c2),
  parts: [
    {
      label: 'Document 23 · les conditions d’un désaccord fécond',
      text:
        'On déplore la disparition du débat et l’on se trompe d’objet. ' +
        'Les désaccords n’ont jamais été aussi nombreux ni aussi visibles. ' +
        'Ce qui manque n’est pas le désaccord : c’est la condition qui le rendait utile, ' +
        'et cette condition est rarement nommée parce qu’elle est humiliante à énoncer.\n' +
        'Un désaccord ne produit quelque chose que si les deux parties ' +
        'peuvent perdre quelque chose. Non pas la face, qui se perd toujours, ' +
        'mais une position qu’elles tenaient et qu’elles cessent de tenir. ' +
        'Or une position ne se quitte pas gratuitement. ' +
        'Elle est nouée à des engagements, à un groupe, parfois à un métier, ' +
        'et le coût de son abandon se paie hors de la discussion, ' +
        'auprès de gens qui n’y assistaient pas.\n' +
        'C’est ce coût, et non l’entêtement, qui explique la stérilité de la plupart des échanges. ' +
        'Deux personnes dont les positions sont ainsi nouées peuvent argumenter parfaitement, ' +
        'reconnaître la force de l’autre, et repartir inchangées, ' +
        'non par mauvaise foi mais parce que changer d’avis leur coûterait ' +
        'quelque chose qu’aucun argument ne compense.\n' +
        'On objectera, et c’est l’objection la plus sérieuse, ' +
        'que cette analyse excuse tout : ' +
        'chacun pourra désormais expliquer son immobilité par le coût social ' +
        'plutôt que par la faiblesse de ses raisons, ' +
        'et l’argument devient une dispense universelle. ' +
        'L’objection porte, et elle porte contre l’usage qu’on en ferait, ' +
        'pas contre la description. Une explication n’est pas une excuse, ' +
        'et il se trouve que les deux se distinguent par une épreuve simple : ' +
        'demandez à quelqu’un ce qu’il lui en coûterait de changer d’avis. ' +
        'Celui qui répond précisément décrit un obstacle ; ' +
        'celui qui ne comprend pas la question défend une position qu’il n’a pas examinée.\n' +
        'Il suit de là une conséquence que l’on tire rarement, ' +
        'et qui déplace toute la question de la méthode. ' +
        'Si le désaccord fécond suppose la possibilité de perdre, ' +
        'alors les dispositifs qui l’encouragent ne sont pas ceux qui améliorent l’argumentation. ' +
        'Ce sont ceux qui abaissent le prix de la reculade : ' +
        'la discussion sans public, la position exprimée sans être signée, ' +
        'le délai entre l’échange et la décision. ' +
        'Ce sont des dispositifs pauvres, sans noblesse intellectuelle, ' +
        'et ils font davantage pour la qualité d’un débat ' +
        'que toutes les exhortations à la bonne foi réunies.\n' +
        'Reste l’ironie de la chose, qu’il serait déloyal de taire. ' +
        'Un texte qui soutient publiquement cette thèse ' +
        'a déjà, par sa seule publication, rendu coûteux pour son auteur ' +
        'le fait d’en changer.',
      items: [
        {
          q: 'Quelle condition l’auteur juge-t-il manquante ?',
          opts: [
            'La possibilité, pour chacun, de perdre une position',
            'Le nombre suffisant de désaccords',
            'La qualité des arguments échangés',
            'La bonne foi des participants',
          ],
          correct: 0,
          why: 'Il écarte la rareté du désaccord et nomme le coût de quitter une position.',
          band: 'c2',
        },
        {
          q: 'Comment répond-il à l’objection de la dispense universelle ?',
          opts: [
            'Une épreuve distingue l’obstacle décrit de l’excuse invoquée',
            'L’objection repose sur un malentendu',
            'Le coût social n’existe pas vraiment',
            'La bonne foi reste le seul critère',
          ],
          correct: 0,
          why: 'Demander ce qu’il en coûterait de changer d’avis sépare qui répond de qui ne comprend pas.',
          band: 'c2',
        },
        {
          q: 'Quelle conséquence tire-t-il pour la méthode ?',
          opts: [
            'Il faut abaisser le prix de la reculade plutôt qu’améliorer l’argumentation',
            'Il faut rendre les débats publics',
            'Il faut exiger des positions signées',
            'Il faut décider aussitôt après l’échange',
          ],
          correct: 0,
          why: 'Discussion sans public, position non signée, délai avant décision : des dispositifs pauvres et efficaces.',
          band: 'c2',
        },
      ],
    },
  ],
};
