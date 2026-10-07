// TCF Canada blanc-06 — Compréhension écrite, the upper slope (B2, C1, C2).
//
// Continues ce.ts and MUST follow it in the CE_TASKS array.
//
// C2 routes to `ethique` at C1: there are no published C2 corpus items on any
// theme, and pick-items reports that fallback rather than hiding it.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';
import { C1_CE_TARGETS } from '../exam-c1-targets.ts';

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
    ITEMS.musees.b2,
    ITEMS.bienEtre.b2,
    ITEMS.droit.b2,
    ITEMS.immigrationEtCitoyennete.b2
  ),
  parts: [
    {
      label: 'Document 17 · rendre un objet de musée',
      text:
        'Le musée de Rivière-Ormel a annoncé la restitution de quatorze objets rapportés en 1911 ' +
        'par un voyageur de la région. La décision a été saluée. Elle a aussi relancé une question ' +
        'que les musées voudraient voir réglée une fois pour toutes : que faut-il rendre, et à qui ?\n' +
        'Le critère le plus souvent avancé est celui du consentement. Un objet acheté dans les règles ' +
        'serait légitimement conservé ; un objet pris de force devrait revenir. ' +
        'Le critère a le mérite de la clarté, et l’inconvénient de reposer sur des archives ' +
        'que les collectionneurs rédigeaient eux-mêmes. Quand un carnet de voyage indique ' +
        '« échangé contre des outils », personne ne peut plus savoir ce que l’autre partie pensait de l’échange.\n' +
        'Certains conservateurs proposent donc d’inverser la charge de la preuve : ' +
        'ce ne serait plus aux demandeurs de prouver la spoliation, mais au musée de prouver le consentement. ' +
        'La proposition paraît équitable. Elle aurait toutefois une conséquence que ses défenseurs évoquent rarement : ' +
        'une grande partie des collections ne pourrait pas apporter cette preuve, faute de documents.\n' +
        'Ce n’est peut-être pas un argument contre la proposition. C’est en tout cas une raison ' +
        'de ne pas la présenter comme une simple mesure technique. Elle revient à décider, ' +
        'collection par collection, ce qu’un musée accepte de ne plus posséder.',
      items: [
        {
          q: 'Quelle faiblesse l’auteur voit-il dans le critère du consentement ?',
          opts: [
            'Il repose sur des archives écrites par les collectionneurs',
            'Il est trop difficile à expliquer au public',
            'Il ne concerne que les objets achetés',
            'Il oblige les musées à tout rendre',
          ],
          correct: 0,
          why: 'Le carnet « échangé contre des outils » ne dit pas ce que pensait l’autre partie.',
          band: 'b2',
        },
        {
          q: 'Que proposent certains conservateurs ?',
          opts: [
            'Que le musée prouve le consentement',
            'Que les demandeurs prouvent la spoliation',
            'Que les objets soient prêtés plutôt que rendus',
            'Que les archives soient détruites',
          ],
          correct: 0,
          why: 'Inverser la charge de la preuve : le musée, et non plus les demandeurs, doit prouver.',
          band: 'b2',
        },
        {
          q: 'Quelle est la position de l’auteur sur cette proposition ?',
          opts: [
            'Il ne la rejette pas mais en souligne la portée',
            'Il la rejette parce qu’elle viderait une grande partie des musées',
            'Il la soutient sans aucune réserve',
            'Il la juge impossible à appliquer',
          ],
          correct: 0,
          why: 'La conséquence n’est « peut-être pas un argument contre » ; c’est une raison de ne pas la présenter comme technique.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 18 · quatre jours, et la fatigue ?',
      text:
        'La semaine de quatre jours progresse dans les entreprises de services, et ses partisans ' +
        'avancent volontiers un chiffre : selon une enquête de l’Observatoire Lysandre auprès de ' +
        'deux mille salariés, la fatigue déclarée baisse de vingt pour cent dans les six premiers mois.\n' +
        'L’enquête mérite d’être lue jusqu’au bout. Le même questionnaire, posé une seconde fois ' +
        'au bout de dix-huit mois, donne un résultat moins net : chez les salariés qui font ' +
        'les mêmes heures en quatre jours au lieu de cinq, la fatigue revient presque à son niveau de départ. ' +
        'Seuls ceux dont le temps de travail a réellement diminué conservent le bénéfice.\n' +
        'Autrement dit, ce n’est pas le jour libéré qui repose, c’est l’heure en moins. ' +
        'Des journées de neuf heures et demie reprennent peu à peu ce que le vendredi avait donné, ' +
        'et ce mouvement met plus d’un an à apparaître.\n' +
        'Il ne s’agit pas de condamner la formule. Pour un parent, un jour entier sans trajet ' +
        'a une valeur que l’enquête ne mesure pas, et plusieurs salariés interrogés se disent prêts ' +
        'à accepter la fatigue pour le garder. Il s’agit seulement de cesser de vendre ' +
        'comme une mesure de santé ce qui est d’abord une réorganisation du temps.',
      items: [
        {
          q: 'Que montre l’enquête après dix-huit mois ?',
          opts: [
            'La fatigue revient si les heures restent les mêmes',
            'La fatigue continue de baisser pour tous les salariés interrogés',
            'Les salariés abandonnent la formule',
            'La fatigue baisse de vingt pour cent',
          ],
          correct: 0,
          why: 'Les vingt pour cent valent pour six mois ; à dix-huit mois, la fatigue revient sauf baisse réelle des heures.',
          band: 'b2',
        },
        {
          q: 'Selon l’auteur, qu’est-ce qui réduit vraiment la fatigue ?',
          opts: [
            'La baisse réelle du temps de travail',
            'Le jour de repos supplémentaire accordé chaque semaine',
            'La suppression des trajets',
            'Des journées plus longues',
          ],
          correct: 0,
          why: '« Ce n’est pas le jour libéré qui repose, c’est l’heure en moins. »',
          band: 'b2',
        },
        {
          q: 'Que reproche l’auteur aux partisans de la formule ?',
          opts: [
            'De la présenter comme une mesure de santé',
            'De vouloir l’imposer à tous les secteurs',
            'D’ignorer la situation des parents',
            'De falsifier les chiffres de l’enquête',
          ],
          correct: 0,
          why: 'Il ne condamne pas la formule ; il refuse qu’on la vende comme une mesure de santé.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 19 · louer aux touristes',
      text:
        'Dans un immeuble en copropriété, un propriétaire peut-il louer son appartement à des touristes ' +
        'pour quelques nuits ? La réponse courte est : cela dépend du règlement de l’immeuble, ' +
        'et c’est précisément le document que beaucoup d’acheteurs ne lisent pas.\n' +
        'Lorsque le règlement réserve l’immeuble à l’habitation, la location de courte durée ' +
        'y est généralement assimilée à une activité commerciale, et les autres copropriétaires ' +
        'peuvent la faire cesser. Lorsque le règlement ne dit rien, la situation est plus incertaine : ' +
        'les tribunaux tranchent au cas par cas, en regardant notamment la fréquence des locations ' +
        'et les nuisances constatées. Les valises dans l’escalier, les codes d’entrée confiés à des inconnus, ' +
        'le bruit des arrivées tardives pèsent alors plus lourd que le nombre de nuits.\n' +
        'Modifier le règlement pour interdire ces locations n’est pas simple. Il faut en général ' +
        'une majorité renforcée, et les propriétaires qui louent déjà font rarement partie de cette majorité. ' +
        'Plusieurs immeubles de Val-Ferlin ont mis trois ans à y parvenir, au prix d’assemblées ' +
        'que leurs habitants décrivent comme les plus tendues de leur vie.\n' +
        'Le conseil le plus utile reste donc le plus banal : lire le règlement avant d’acheter, ' +
        'et non après la première plainte des voisins.',
      items: [
        {
          q: 'Que se passe-t-il quand le règlement ne dit rien ?',
          opts: [
            'Les tribunaux décident au cas par cas',
            'La location est automatiquement interdite',
            'La location est toujours autorisée',
            'Les voisins votent à chaque location',
          ],
          correct: 0,
          why: 'Le silence du règlement laisse les tribunaux trancher selon la fréquence et les nuisances.',
          band: 'b2',
        },
        {
          q: 'Pourquoi est-il difficile de modifier le règlement ?',
          opts: [
            'Il faut une majorité que les loueurs ne rejoignent pas',
            'La loi interdit toute modification',
            'Les tribunaux doivent l’approuver',
            'Les acheteurs ne le lisent pas avant de signer leur achat',
          ],
          correct: 0,
          why: 'Une majorité renforcée est requise, et ceux qui louent déjà en font rarement partie.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 20 · le premier emploi',
      text:
        'Un rapport du Centre Vautrin, publié ce mois-ci, s’intéresse aux nouveaux arrivants ' +
        'titulaires d’un diplôme universitaire obtenu à l’étranger. Cinq ans après leur arrivée, ' +
        'quatre sur dix occupent un emploi qui ne demande pas de diplôme universitaire. ' +
        'Beaucoup d’entre eux avaient exercé leur métier pendant des années avant de partir.\n' +
        'Le chiffre est connu ; l’intérêt du rapport est ailleurs. Les auteurs ont comparé ces travailleurs ' +
        'à des diplômés nés au pays, avec le même diplôme et la même expérience. ' +
        'L’écart de salaire, important la première année, se réduit nettement chez ceux qui ont obtenu ' +
        'un premier emploi dans leur domaine, même mal payé, dans les deux ans suivant l’arrivée. ' +
        'Chez les autres, il ne se réduit presque plus. Une ingénieure qui commence comme livreuse a, dix ans plus tard, ' +
        'toutes les chances d’être encore loin de son domaine, même après avoir obtenu l’équivalence de son diplôme.\n' +
        'Le premier emploi compterait donc davantage que la reconnaissance du diplôme elle-même. ' +
        'Les auteurs en concluent, prudemment, que les stages en entreprise pourraient être ' +
        'plus efficaces que l’allongement des procédures d’équivalence.\n' +
        'Ils reconnaissent toutefois une limite : les professions réglementées, où le stage lui-même ' +
        'suppose une autorisation préalable, échappent à ce raisonnement.',
      items: [
        {
          q: 'Selon le rapport, qu’est-ce qui réduit l’écart de salaire ?',
          opts: [
            'Un premier emploi dans son domaine dans les deux ans',
            'La reconnaissance rapide du diplôme',
            'Un emploi bien payé dès l’arrivée, même hors de son domaine',
            'Cinq années d’expérience au pays',
          ],
          correct: 0,
          why: 'Même mal payé, un premier emploi dans le domaine, obtenu tôt, fait la différence.',
          band: 'b2',
        },
        {
          q: 'Quelle limite les auteurs reconnaissent-ils ?',
          opts: [
            'Le raisonnement ne vaut pas pour les professions réglementées',
            'Leur échantillon est trop petit',
            'Les salaires ont été mal mesurés',
            'Les stages coûtent trop cher aux entreprises',
          ],
          correct: 0,
          why: 'Dans ces professions, le stage suppose lui-même une autorisation préalable.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: each text concedes before it concludes, and at least one item
// per text asks what a paragraph is DOING rather than what it says.

export const CE_C1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'c1',
  label: 'Compréhension écrite · C1',
  prompt: 'Lisez les deux documents et choisissez la bonne réponse.',
  timingS: 720,
  targetItemIds: [...C1_CE_TARGETS],
  parts: [
    {
      label: 'Document 21 · ce que la mesure rend invisible',
      text:
        'On mesure pour voir. C’est la promesse de tout indicateur : rendre visible ce qui, sans lui, ' +
        'se perdrait dans l’impression et l’anecdote. On oublie plus volontiers que toute mesure fait aussi l’inverse. ' +
        'En désignant ce qui compte, elle désigne du même geste ce qui ne compte pas, ' +
        'et ce qui n’est pas compté cesse peu à peu d’exister pour ceux qui décident.\n' +
        'Prenons l’hôpital, où l’on suit désormais la durée moyenne de séjour. L’indicateur est utile ; ' +
        'il a permis de repérer des hospitalisations prolongées sans raison. Mais il ne dit rien du temps ' +
        'qu’une infirmière passe à expliquer un traitement à un patient inquiet, et ce temps, ' +
        'parce qu’il ne figure dans aucun tableau, devient le premier qu’on rogne lorsqu’il faut gagner en efficacité. ' +
        'Personne n’a décidé de le supprimer. Il a simplement cessé d’être défendable, faute de chiffre pour le défendre.\n' +
        'On objectera qu’il suffit de mesurer davantage : ajoutons un indicateur du temps d’explication, ' +
        'et le problème disparaît. L’objection est moins naïve qu’il n’y paraît, et certains établissements l’ont mise à l’essai. ' +
        'Elle se heurte pourtant à une difficulté de fond. Un temps d’explication, dès qu’il est compté, ' +
        'tend à devenir un temps à remplir : on explique pour atteindre la cible, et non parce que le patient en a besoin. ' +
        'L’indicateur ne se contente pas d’observer la pratique ; il la redessine à son image.\n' +
        'Faut-il pour autant renoncer à mesurer ? Ce serait abandonner le terrain aux impressions, ' +
        'qui ne sont pas moins partiales que les chiffres, seulement moins discutables. ' +
        'La seule position tenable consiste peut-être à traiter chaque indicateur comme un éclairage ' +
        'et non comme un portrait : il montre une face, et sa lumière même accentue l’ombre de toutes les autres. ' +
        'Ceux qui décident devraient être tenus, chaque fois qu’ils citent un chiffre, de nommer ce qu’il ne dit pas.',
      items: [
        {
          q: 'Pourquoi le temps d’explication est-il le premier réduit, selon l’auteur ?',
          opts: [
            'Aucun chiffre ne permet de le défendre',
            'Les patients le jugent inutile',
            'Une décision de la direction l’a supprimé',
            'Il allonge la durée moyenne de séjour',
          ],
          correct: 0,
          why: '« Personne n’a décidé de le supprimer » : il cesse d’être défendable faute de chiffre.',
          band: 'c1',
        },
        {
          q: 'Quelle fonction remplit le paragraphe qui commence par « On objectera » ?',
          opts: [
            'Examiner une solution sérieuse avant d’en montrer la limite',
            'Rapporter une objection pour la ridiculiser',
            'Apporter un second exemple à l’appui de la thèse',
            'Résumer les arguments qui précèdent',
          ],
          correct: 0,
          why: 'L’objection est dite « moins naïve qu’il n’y paraît », puis se heurte à une difficulté de fond.',
          band: 'c1',
        },
        {
          q: 'Quelle difficulté l’auteur voit-il à mesurer davantage ?',
          opts: [
            'L’indicateur transforme la pratique qu’il observe',
            'Les mesures supplémentaires coûtent trop cher',
            'Les soignants refusent d’être évalués',
            'Le temps d’explication est impossible à chronométrer',
          ],
          correct: 0,
          why: 'Compté, le temps devient un temps à remplir : l’indicateur redessine la pratique.',
          band: 'c1',
        },
        {
          q: 'Que préconise-t-il finalement ?',
          opts: [
            'Accompagner chaque chiffre de ce qu’il ne montre pas',
            'Renoncer progressivement aux indicateurs',
            'Multiplier les indicateurs dans chaque service',
            'S’en remettre au jugement des soignants plutôt qu’aux tableaux de bord',
          ],
          correct: 0,
          why: 'Un éclairage plutôt qu’un portrait : nommer, à chaque citation, ce que le chiffre ne dit pas.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 22 · à qui revient une invention ?',
      text:
        'Pendant un siècle, les guides de l’ancienne verrerie de la Haute-Ormelle, aujourd’hui devenue musée, ' +
        'ont attribué le régulateur thermique de ses fours à son fondateur, l’industriel Gaspard Lemire, ' +
        'qui en déposa le brevet en 1894. La découverte, l’an dernier, dans les réserves du musée, des carnets d’une de ses employées, ' +
        'Odile Ferrand, a suffi à ébranler cette attribution : on y trouve, datés de deux ans plus tôt, ' +
        'des croquis presque identiques au dessin du brevet.\n' +
        'Le réflexe est de réparer l’injustice en changeant de nom. Il serait pourtant hâtif ' +
        'de voir dans Lemire un simple usurpateur. Les mêmes carnets montrent que Ferrand travaillait ' +
        'à partir de mesures réalisées dans l’atelier de Lemire, avec des instruments qu’il avait fait construire, ' +
        'et que plusieurs de ses essais échouèrent jusqu’à ce qu’un ouvrier, dont on ignore le nom, ' +
        'propose de modifier l’alliage. Le brevet, de son côté, contient un système de fixation ' +
        'qui ne figure dans aucun croquis. Rien de tout cela ne fait de Lemire l’inventeur ; ' +
        'tout cela interdit d’en faire un simple voleur.\n' +
        'Ce que révèle l’affaire n’est donc pas tant une invention volée qu’une invention collective, ' +
        'que le droit des brevets obligeait à attribuer à une seule personne et que l’histoire ' +
        'a pris l’habitude de raconter comme l’éclair d’un individu, parce qu’un récit a besoin d’un héros ' +
        'et qu’un brevet a besoin d’un titulaire. Substituer Ferrand à Lemire ' +
        'reproduirait la même simplification avec un autre visage, plus sympathique sans doute, ' +
        'mais pas plus exact.\n' +
        'Il n’en reste pas moins que l’effacement de Ferrand n’a rien d’un hasard. Son nom ne figure ' +
        'ni sur le brevet ni dans les comptes rendus de l’époque, alors que celui de Lemire apparaît ' +
        'jusque dans des travaux auxquels il n’avait pas pris part, et que la presse de l’époque ' +
        'le photographiait volontiers devant l’appareil. Reconnaître le caractère collectif ' +
        'de l’invention ne doit pas servir à diluer cette asymétrie : tous les contributeurs ' +
        'n’ont pas été oubliés de la même façon.',
      items: [
        {
          q: 'Pourquoi l’auteur juge-t-il hâtif de traiter Lemire en usurpateur ?',
          opts: [
            'L’invention doit aussi à son atelier et à d’autres contributeurs',
            'Les croquis de Ferrand sont postérieurs au brevet',
            'Ferrand a reconnu avoir copié Lemire',
            'Le brevet ne ressemble pas aux croquis',
          ],
          correct: 0,
          why: 'Mesures et instruments de l’atelier, alliage proposé par un ouvrier, fixation propre au brevet.',
          band: 'c1',
        },
        {
          q: 'Que reproche l’auteur au fait de remplacer un nom par l’autre ?',
          opts: [
            'Cela répète le mythe de l’inventeur unique',
            'Cela serait injuste envers Lemire',
            'Cela contredirait le droit des brevets',
            'Cela effacerait le rôle de l’ouvrier inconnu seulement',
          ],
          correct: 0,
          why: 'La même simplification « avec un autre visage » : une invention collective racontée comme individuelle.',
          band: 'c1',
        },
        {
          q: 'Quelle réserve formule-t-il dans le dernier paragraphe ?',
          opts: [
            'Le caractère collectif ne doit pas masquer l’effacement particulier de Ferrand',
            'L’invention reste en réalité l’œuvre de Lemire',
            'Les carnets de Ferrand sont peut-être des faux',
            'Il est impossible de savoir qui a inventé le régulateur',
          ],
          correct: 0,
          why: '« Il n’en reste pas moins » : tous les contributeurs n’ont pas été oubliés de la même façon.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: each item turns on the shape of the argument (a concession, a
// parenthesis, a paradox) rather than on any single sentence.

export const CE_C2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'c2',
  label: 'Compréhension écrite · C2',
  prompt: 'Lisez le document et choisissez la bonne réponse.',
  timingS: 580,
  targetItemIds: uniq(ITEMS.ethique.c2),
  parts: [
    {
      label: 'Document 23 · croire sur parole',
      text:
        'Nous savons, pour l’essentiel, ce que d’autres nous ont dit. Que la Terre tourne, ' +
        'que nous sommes nés tel jour, que tel pays existe où nous n’avons jamais mis les pieds : ' +
        'rien de cela ne repose sur une vérification personnelle, et presque tout repose sur une confiance ' +
        'que nous serions bien en peine de justifier. La philosophie classique, éprise d’autonomie, ' +
        'a longtemps tenu cette dépendance pour une faiblesse provisoire, un échafaudage ' +
        'qu’un esprit bien conduit finirait par démonter pour ne garder que ce qu’il aurait éprouvé lui-même.\n' +
        'L’ambition avait de la grandeur ; elle n’avait guère de vraisemblance. Qui prétendrait vérifier seul ' +
        'la composition de l’air qu’il respire, l’histoire de sa langue ou la solidité du pont qu’il traverse ? ' +
        'Il y faudrait plusieurs vies, et des compétences qu’aucune ne réunit. ' +
        'Un savoir réduit à ce que chacun a constaté par lui-même ne serait pas un savoir plus sûr : ' +
        'ce serait un savoir minuscule, et la certitude qu’il procurerait tiendrait moins à sa solidité ' +
        'qu’à son exiguïté.\n' +
        'Faut-il en conclure que croire sur parole est toujours légitime ? Ce serait verser dans l’excès inverse, ' +
        'et confondre la nécessité de faire confiance avec l’innocence de toute confiance. ' +
        'Le témoignage n’est pas une source de connaissance au même titre que la perception ; ' +
        'il en est une transmission, et une transmission ne vaut que ce que valent ceux qui la relaient. ' +
        'On ne demande pas au témoin d’avoir vu juste une fois, mais d’appartenir à une chaîne ' +
        'où l’erreur a quelque chance d’être relevée. Le témoin isolé, si scrupuleux soit-il, ' +
        'ne vaut guère mieux qu’une rumeur bien élevée.\n' +
        'C’est là, peut-être, que la question change de nature. Ce qui fonde ma créance n’est pas ' +
        'la sincérité de celui qui me parle (on peut être sincère et dans l’erreur, et la sincérité, ' +
        'au demeurant, ne se constate pas), mais l’existence d’institutions où le désaccord est possible, ' +
        'consigné, et parfois récompensé. Je crois le manuel de chimie non parce que j’en connais l’auteur, ' +
        'mais parce que je sais, ou crois savoir, que mille lecteurs compétents auraient eu intérêt ' +
        'à le prendre en défaut, et que certains s’y sont essayés.\n' +
        'On voit le paradoxe. La confiance la mieux fondée est celle qui repose sur la possibilité organisée ' +
        'de la défiance. Une communauté où personne n’oserait contredire personne produirait ' +
        'des témoignages unanimes, et parfaitement inutiles. Que l’on s’en inquiète aujourd’hui, ' +
        'à l’heure où chacun peut se choisir des témoins qui ne le contrediront jamais, n’a rien d’étonnant : ' +
        'ce n’est pas la crédulité qui menace le savoir, c’est la disparition des lieux ' +
        'où l’on se trompe en public.',
      items: [
        {
          q: 'Comment l’auteur juge-t-il l’idéal d’un savoir vérifié par soi-même ?',
          opts: [
            'Noble mais irréaliste, et source d’un savoir étroit plutôt que sûr',
            'Réaliste, à condition d’y consacrer patiemment toute une vie de travail et d’étude',
            'Dangereux parce qu’il rend crédule',
            'Dépassé depuis l’invention de la science moderne',
          ],
          correct: 0,
          why: '« De la grandeur », « guère de vraisemblance » : une certitude due à l’exiguïté, non à la solidité.',
          band: 'c2',
        },
        {
          q: 'Quel rôle joue la parenthèse sur la sincérité ?',
          opts: [
            'Écarter la sincérité comme fondement de la confiance',
            'Montrer que la sincérité suffit à garantir le vrai',
            'Introduire un exemple tiré de la chimie',
            'Nuancer le rôle des institutions',
          ],
          correct: 0,
          why: 'Sincère et dans l’erreur, et invérifiable : la parenthèse justifie que la créance repose ailleurs.',
          band: 'c2',
        },
        {
          q: 'En quoi consiste « le paradoxe » annoncé dans le dernier paragraphe ?',
          opts: [
            'La confiance la plus solide repose sur la possibilité de contredire',
            'Plus on fait confiance, moins on sait',
            'Les témoignages les plus unanimes sont, par nature, les plus dignes de foi',
            'La crédulité protège le savoir commun',
          ],
          correct: 0,
          why: 'La confiance la mieux fondée repose sur la « possibilité organisée de la défiance ».',
          band: 'c2',
        },
      ],
    },
  ],
};
