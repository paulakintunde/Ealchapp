// TCF Canada blanc-03 — Compréhension écrite, the upper slope (B2, C1, C2).
//
// Continues ce.ts and MUST follow it in the CE_TASKS array.
//
// ── What makes a reading item hard at the top ──────────────────────────────
//
// Not vocabulary. The document is in front of the candidate the whole time, so
// a hard word can be re-read. What cannot be re-read into place is a STANCE:
// which claim the author owns, which they report in order to answer it, and
// which they concede. Every key above B2 turns on that, and the distractors are
// sentences that genuinely appear in the text but belong to someone the author
// is disagreeing with.
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

export const CE_B2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b2',
  label: 'Compréhension écrite · B2',
  prompt: 'Lisez les quatre documents et choisissez la bonne réponse.',
  timingS: 850,
  targetItemIds: uniq(ITEMS.universite.b2, ITEMS.examensEtDiplomes.b2, ITEMS.bienEtre.b2, ITEMS.economie.b2),
  parts: [
    {
      label: 'Document 20 · la sélection à l’université',
      text:
        'Le débat sur la sélection à l’entrée de l’université oppose deux positions ' +
        'qui ne parlent pas de la même chose, et cela explique pourquoi il dure.\n\n' +
        'Les uns défendent l’accès libre au nom du droit d’essayer. L’argument est solide : ' +
        'à dix-huit ans, un dossier scolaire mesure autant l’origine sociale que la capacité, ' +
        'et refuser l’entrée sur cette base ferme une porte à des gens qui l’auraient franchie.\n\n' +
        'Les autres observent qu’un accès libre suivi de soixante pour cent d’échec en première année ' +
        'n’est pas une porte ouverte, c’est une porte ouverte sur un mur. ' +
        'Cet argument est également solide, et il porte sur ce qui se passe APRÈS l’entrée.\n\n' +
        'Rien n’oblige à choisir entre les deux, et c’est là que le débat devient paresseux. ' +
        'Les filières qui ont réduit l’échec de moitié ne l’ont pas fait en sélectionnant : ' +
        'elles ont dédoublé les premiers semestres, ajouté du tutorat, ' +
        'et autorisé une réorientation à Noël sans perte d’année. ' +
        'Cela coûte cher, environ mille euros par étudiant et par an.\n\n' +
        'Le coût est la vraie question, et on l’entend peu. ' +
        'Discuter de la sélection est gratuit ; discuter du tutorat engage un budget. ' +
        'Une position qui coûte quelque chose se défend moins bien qu’une position de principe, ' +
        'ce qui n’est pas un argument contre elle.',
      items: [
        {
          q: 'Que reconnaît l’auteur aux défenseurs de l’accès libre ?',
          opts: [
            'Un dossier à dix-huit ans mesure aussi l’origine sociale',
            'L’échec en première année est un mythe',
            'La sélection coûte trop cher',
            'Le tutorat est inefficace',
          ],
          correct: 0,
          why: 'Il qualifie l’argument de solide avant de présenter celui d’en face.',
          band: 'b2',
        },
        {
          q: 'Que montrent les filières qui ont réduit l’échec ?',
          opts: [
            'On peut réduire l’échec sans sélectionner',
            'La sélection est indispensable',
            'Le tutorat ne change rien',
            'La réorientation aggrave l’échec',
          ],
          correct: 0,
          why: 'Dédoublement, tutorat et réorientation à Noël, pas la sélection.',
          band: 'b2',
        },
        {
          q: 'Quelle est la thèse de l’auteur ?',
          opts: [
            'Le débat évite la question du coût',
            'La sélection doit être généralisée',
            'L’accès libre doit être défendu sans réserve',
            'Les deux camps ont tort',
          ],
          correct: 0,
          why: 'Discuter de la sélection est gratuit ; discuter du tutorat engage un budget.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 21 · les diplômes obtenus à distance',
      text:
        'Un employeur sur trois déclare accorder moins de valeur à un diplôme obtenu à distance. ' +
        'La question intéressante n’est pas de savoir s’ils ont tort, mais ce qu’ils mesurent ' +
        'sans le dire.\n\n' +
        'Interrogés, ils invoquent rarement le contenu, et pour cause : les programmes sont identiques ' +
        'et les examens souvent passés en présence. ' +
        'Ce qu’ils invoquent, c’est ce que la formation à distance ne prouve pas : ' +
        'la capacité à tenir trois ans dans un lieu, avec des horaires, parmi des gens.\n\n' +
        'L’objection mérite d’être prise au sérieux plutôt que balayée, ' +
        'parce qu’elle décrit quelque chose de réel. Elle a seulement le défaut ' +
        'de valoir exactement à l’envers : tenir trois ans SEUL, sans amphithéâtre ' +
        'ni voisin de rangée, demande une organisation que la présence dispense d’avoir.\n\n' +
        'Deux exigences différentes, donc, et aucune raison de classer l’une au-dessus de l’autre. ' +
        'Ce que révèle la décote, c’est que le diplôme n’a jamais certifié seulement des connaissances : ' +
        'il certifiait aussi une expérience sociale, sans que personne l’écrive nulle part. ' +
        'La formation à distance ne dévalue pas le diplôme. Elle rend visible ce qu’il contenait ' +
        'en plus de ce qu’il annonçait.',
      items: [
        {
          q: 'Qu’invoquent les employeurs, selon le texte ?',
          opts: [
            'Ce que la formation à distance ne prouve pas',
            'Un contenu allégé',
            'Des examens moins surveillés',
            'Un manque de reconnaissance officielle',
          ],
          correct: 0,
          why: 'Rarement le contenu : programmes identiques, examens souvent en présence.',
          band: 'b2',
        },
        {
          q: 'Quel défaut l’auteur trouve-t-il à leur objection ?',
          opts: [
            'Elle vaut aussi bien dans l’autre sens',
            'Elle est démentie par les chiffres',
            'Elle est trop ancienne',
            'Elle concerne peu d’employeurs',
          ],
          correct: 0,
          why: 'Tenir trois ans seul demande une organisation que la présence dispense d’avoir.',
          band: 'b2',
        },
        {
          q: 'Que conclut l’auteur sur le diplôme ?',
          opts: [
            'Il certifiait une expérience sociale sans le dire',
            'Il perd sa valeur',
            'Il ne mesure que des connaissances',
            'Il devrait être supprimé',
          ],
          correct: 0,
          why: 'La distance rend visible ce qu’il contenait en plus de ce qu’il annonçait.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 22 · mesurer le bien-être au travail',
      text:
        'Les enquêtes annuelles de bien-être au travail obtiennent des scores élevés ' +
        'dans des entreprises où le turnover atteint trente pour cent. ' +
        'Les deux chiffres coexistent depuis assez longtemps pour qu’on cesse ' +
        'de traiter la contradiction comme une anomalie.\n\n' +
        'Une explication commode veut que les salariés répondent ce qu’on attend d’eux. ' +
        'Elle est partiellement vraie et elle est insuffisante : les enquêtes anonymes ' +
        'donnent des résultats voisins.\n\n' +
        'Une explication plus gênante tient à la question posée. ' +
        '« Êtes-vous satisfait de votre environnement de travail » interroge un état, ' +
        'à un instant, et un état peut être bon dans un lieu qu’on s’apprête à quitter. ' +
        'Personne ne demande « comptez-vous être ici dans deux ans », ' +
        'parce que la réponse serait exploitable et que l’exploiter coûterait de l’argent.\n\n' +
        'Il faut ajouter que la mesure a une fonction indépendante de son exactitude : ' +
        'elle prouve qu’on s’est occupé du sujet. Un score publié est une action visible, ' +
        'et il n’est pas certain qu’une mesure plus juste serait préférée, ' +
        'puisqu’elle obligerait à répondre.\n\n' +
        'Les rares entreprises qui posent la question de l’intention de rester ' +
        'ne publient pas le résultat et s’en servent en interne, ce qui est cohérent : ' +
        'un chiffre destiné à agir n’a pas la même fonction qu’un chiffre destiné à rassurer, ' +
        'et rien n’oblige un outil à faire les deux.',
      items: [
        {
          q: 'Pourquoi l’explication par la complaisance ne suffit-elle pas ?',
          opts: [
            'Les enquêtes anonymes donnent des résultats voisins',
            'Les salariés ne répondent pas',
            'Le turnover est mal calculé',
            'Les scores sont en baisse',
          ],
          correct: 0,
          why: 'L’auteur la dit partiellement vraie, puis la borne avec l’anonymat.',
          band: 'b2',
        },
        {
          q: 'Quelle question, selon l’auteur, n’est pas posée ?',
          opts: [
            'Celle de l’intention de rester',
            'Celle de la charge de travail',
            'Celle du salaire',
            'Celle de la hiérarchie',
          ],
          correct: 0,
          why: 'La réponse serait exploitable, et l’exploiter coûterait de l’argent.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 23 · la disparition des espèces',
      text:
        'La disparition des pièces et des billets est présentée comme une commodité ' +
        'et discutée comme une question de génération. Elle est d’abord une question ' +
        'd’infrastructure, et c’est ce qui la rend sérieuse.\n\n' +
        'Un paiement en espèces ne dépend de rien : ni d’un réseau, ni d’un terminal, ' +
        'ni d’un compte, ni de l’accord d’un tiers. Cette indépendance ne se remarque ' +
        'que le jour où l’une des quatre manque, ce qui arrive rarement ' +
        'et arrive à tout le monde en même temps.\n\n' +
        'Les partisans de la transition répondent que la résilience se construit autrement, ' +
        'par des réseaux redondants, et ils ont raison sur le principe. ' +
        'Ils ont tort sur le calendrier : on démonte l’ancienne infrastructure ' +
        'avant d’avoir éprouvé la nouvelle, parce que la maintenir coûte cher ' +
        'et que son utilité ne se mesure que pendant les pannes.\n\n' +
        'Il y a un précédent exact, et il n’est pas rassurant : ' +
        'les cabines téléphoniques ont été retirées au nom du téléphone mobile, ' +
        'et personne ne les a regrettées avant la première tempête qui a coupé ' +
        'les antennes d’un département pendant trois jours.',
      items: [
        {
          q: 'Quel est l’argument central de l’auteur ?',
          opts: [
            'Les espèces ne dépendent d’aucune infrastructure',
            'Les personnes âgées y sont attachées',
            'Le paiement électronique coûte plus cher',
            'Les banques y ont intérêt',
          ],
          correct: 0,
          why: 'Ni réseau, ni terminal, ni compte, ni accord d’un tiers.',
          band: 'b2',
        },
        {
          q: 'Que concède-t-il aux partisans de la transition ?',
          opts: [
            'La résilience peut se construire autrement',
            'Les espèces sont dépassées',
            'Les pannes sont rares',
            'Le calendrier est le bon',
          ],
          correct: 0,
          why: '« Ils ont raison sur le principe » ; le désaccord porte sur le calendrier.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */

export const CE_C1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'c1',
  label: 'Compréhension écrite · C1',
  prompt: 'Lisez les deux documents et choisissez la bonne réponse.',
  timingS: 720,
  targetItemIds: uniq(ITEMS.methodeScientifique.c1),
  parts: [
    {
      label: 'Document 30 · les limites des indicateurs de croissance',
      text:
        'La critique du produit intérieur brut est si ancienne et si consensuelle ' +
        'qu’elle a cessé de produire des effets, ce qui devrait intriguer davantage ' +
        'que le fond de la critique lui-même.\n\n' +
        'Le grief est connu : l’indicateur additionne la reconstruction après une catastrophe ' +
        'et la production d’un vaccin, ignore le travail domestique, ' +
        'et compte comme richesse ce qui répare un dommage qu’il n’a pas compté. ' +
        'Rien de tout cela n’est contesté par ses défenseurs, qui répondent ' +
        'que l’outil n’a jamais prétendu mesurer le bien-être et qu’on lui reproche ' +
        'de ne pas faire ce qu’il n’a pas été construit pour faire.\n\n' +
        'Cette réponse est exacte et elle esquive. Un indicateur qui n’a pas été construit ' +
        'pour mesurer le bien-être mais qui SERT à en décider est, en pratique, ' +
        'un indicateur de bien-être. L’usage a une autorité que l’intention du concepteur ' +
        'ne révoque pas. On ne défend pas un thermomètre en expliquant qu’il servait ' +
        'à mesurer la pression, une fois que tout le monde s’en sert pour la fièvre.\n\n' +
        'Reste la question de ce qui explique l’immobilité. Les alternatives existent, ' +
        'elles sont documentées, plusieurs sont calculées chaque année dans les mêmes bureaux. ' +
        'Ce qui leur manque n’est ni la rigueur ni la publication : ' +
        'c’est la comparabilité dans le temps et entre pays, ' +
        'qui n’appartient qu’à une série ininterrompue depuis soixante-dix ans.\n\n' +
        'Et cette série, aucune réforme ne peut la créer autrement qu’en attendant ' +
        'soixante-dix ans. C’est là, et non dans le conservatisme des économistes, ' +
        'que se trouve la vraie résistance : le seul défaut décisif d’un meilleur indicateur ' +
        'est d’être plus jeune.\n\n' +
        'Une conséquence pratique suit, et elle est déplaisante pour les deux camps. ' +
        'Si la comparabilité est ce qui compte, alors la stratégie utile n’est pas de remplacer ' +
        'l’indicateur mais d’en publier un second, à côté, chaque année, ' +
        'sans rien changer au premier, et d’attendre. ' +
        'Cela demande d’accepter que le bénéfice de la décision revienne à quelqu’un ' +
        'qui n’est pas encore en poste, ce qui explique assez bien pourquoi ' +
        'les deux camps préfèrent continuer de débattre du remplacement.',
      items: [
        {
          q: 'Que répondent les défenseurs de l’indicateur ?',
          opts: [
            'Il n’a jamais prétendu mesurer le bien-être',
            'Les critiques sont techniquement fausses',
            'Le travail domestique est bien compté',
            'Aucune alternative n’existe',
          ],
          correct: 0,
          why: 'Ils ne contestent aucun des griefs ; ils contestent qu’on les leur oppose.',
          band: 'c1',
        },
        {
          q: 'Pourquoi cette réponse esquive-t-elle, selon l’auteur ?',
          opts: [
            'L’usage fait de l’outil ce que l’intention ne prévoyait pas',
            'Les défenseurs sont de mauvaise foi',
            'L’indicateur est mal calculé',
            'Le bien-être ne se mesure pas',
          ],
          correct: 0,
          why: 'La comparaison du thermomètre : l’usage a une autorité que l’intention ne révoque pas.',
          band: 'c1',
        },
        {
          q: 'Que manque-t-il aux indicateurs alternatifs ?',
          opts: [
            'Une longue série comparable',
            'La rigueur méthodologique',
            'Une publication régulière',
            'Le soutien des économistes',
          ],
          correct: 0,
          why: 'Ni la rigueur ni la publication : la comparabilité dans le temps et entre pays.',
          band: 'c1',
        },
        {
          q: 'Où se trouve la vraie résistance au changement ?',
          opts: [
            'Dans le fait qu’une série ne se fabrique qu’avec du temps',
            'Dans le conservatisme des économistes',
            'Dans le coût du calcul',
            'Dans l’absence de volonté politique',
          ],
          correct: 0,
          why: 'L’auteur écarte explicitement le conservatisme : le défaut décisif est d’être plus jeune.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 31 · le littoral face à l’érosion',
      text:
        'Trois stratégies existent devant un trait de côte qui recule : ' +
        'défendre, accompagner, ou déplacer. Elles sont présentées comme un choix technique ' +
        'et elles ne le sont pas.\n\n' +
        'Défendre consiste à construire : digues, épis, rechargement en sable. ' +
        'Cela fonctionne, localement et temporairement, et cela déplace le problème ' +
        'quelques kilomètres plus loin, où le sable ne se dépose plus. ' +
        'La commune qui protège sa plage érode celle de sa voisine, ' +
        'et aucune des deux ne dispose de l’échelle à laquelle la décision aurait un sens.\n\n' +
        'Déplacer consiste à reculer les constructions. Techniquement, c’est la seule ' +
        'stratégie durable, et tout le monde l’admet. ' +
        'Politiquement, elle demande à un élu de proposer à ses administrés ' +
        'de perdre leur maison pour un danger dont la date est incertaine, ' +
        'ce qu’aucun mandat de six ans ne permet.\n\n' +
        'Accompagner, la troisième voie, consiste à ne rien construire de nouveau ' +
        'et à laisser l’existant vivre sa vie. C’est celle qui est choisie presque partout, ' +
        'rarement par décision et le plus souvent par défaut, ' +
        'faute d’avoir pu trancher entre les deux autres.\n\n' +
        'On la présente comme un compromis raisonnable. Elle a surtout le mérite ' +
        'de reporter la décision sur celui qui viendra, ce qui n’est pas la même chose, ' +
        'et il faudrait avoir la franchise de le dire quand on la retient.\n\n' +
        'Une objection sérieuse existe, et il faut la donner dans sa force. ' +
        'Reculer suppose de savoir où : les terrains disponibles à l’arrière sont souvent ' +
        'agricoles, parfois inondables autrement, et toujours propriété de quelqu’un. ' +
        'Un recul organisé n’est pas un déménagement, c’est une refonte du plan d’occupation ' +
        'sur trente ans, et les communes qui s’y sont engagées ont mis douze ans ' +
        'à déplacer deux cents logements.\n\n' +
        'Cela ne rend pas la stratégie mauvaise. Cela indique seulement que le calendrier ' +
        'de la décision et celui de son exécution ne se ressemblent pas, ' +
        'et qu’un élu qui refuse de trancher aujourd’hui ne repousse pas de six ans ' +
        'mais de dix-huit.',
      items: [
        {
          q: 'Quel est le défaut de la stratégie de défense ?',
          opts: [
            'Elle déplace l’érosion vers les communes voisines',
            'Elle coûte plus cher que les autres',
            'Elle est techniquement impossible',
            'Elle est interdite par la loi',
          ],
          correct: 0,
          why: 'La commune qui protège sa plage érode celle de sa voisine.',
          band: 'c1',
        },
        {
          q: 'Pourquoi le déplacement est-il rarement choisi ?',
          opts: [
            'Aucun mandat court ne permet de le proposer',
            'Il est techniquement contesté',
            'Il coûte trop cher',
            'Les habitants l’ignorent',
          ],
          correct: 0,
          why: 'Tout le monde admet qu’elle est la seule durable ; l’obstacle est le calendrier électoral.',
          band: 'c1',
        },
        {
          q: 'Que dit l’auteur de la troisième voie ?',
          opts: [
            'Elle reporte la décision plutôt qu’elle ne la prend',
            'C’est le meilleur compromis',
            'Elle est la plus coûteuse',
            'Elle est choisie après étude',
          ],
          correct: 0,
          why: 'Choisie par défaut, faute d’avoir tranché ; son mérite est de reporter.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// A critical text, and the only document on the paper whose difficulty is that
// the author argues AGAINST a position they spend most of the space stating
// well. A candidate who takes the strongest paragraph for the thesis misses
// all three while understanding every sentence.

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
      label: 'Document 37 · la réception d’une œuvre à sa parution',
      text:
        'On aime rappeler que tel roman fut éreinté à sa parution et qu’il est aujourd’hui ' +
        'au programme. L’anecdote circule comme une leçon de modestie adressée aux critiques, ' +
        'et elle mérite d’être examinée, parce qu’elle enseigne à peu près le contraire ' +
        'de ce qu’on lui fait dire.\n\n' +
        'La version courante suppose que les contemporains se trompaient et que la postérité ' +
        'a rectifié. C’est une hypothèse, et elle est invérifiable : ' +
        'nous n’avons aucun accès à l’œuvre indépendamment de sa réception, ' +
        'et la nôtre est faite de tout ce qui s’est écrit depuis, y compris de la légende ' +
        'du chef-d’œuvre méconnu, qui prépare favorablement à la lecture.\n\n' +
        'Il faut aller plus loin. Les comptes rendus hostiles de l’époque, quand on les lit, ' +
        'sont rarement stupides. Ils reprochent au livre exactement ce que nous admirons : ' +
        'l’absence d’intrigue, la platitude délibérée de la langue, le refus de conclure. ' +
        'Le désaccord ne porte pas sur ce que le livre fait, il porte sur la valeur de ce qu’il fait. ' +
        'Critiques et modernes ont lu la même chose et l’ont jugée à l’inverse.\n\n' +
        'À ce stade, le lecteur attend que je conclue au relativisme, et que je dise ' +
        'qu’aucun jugement n’est meilleur qu’un autre. Je ne le dirai pas, ' +
        'et pas par prudence : parce que c’est faux. ' +
        'Un jugement qui décrit correctement l’objet vaut mieux qu’un jugement qui l’invente, ' +
        'et sur ce critère les hostiles étaient bons, souvent meilleurs que les enthousiastes ' +
        'qui leur ont succédé et qui prêtent au texte des intentions qu’il ne soutient pas.\n\n' +
        'Ce que l’anecdote enseigne n’est donc pas que la critique se trompe. ' +
        'C’est que la valeur n’est pas une propriété qu’on découvre, comme une masse, ' +
        'mais une position qu’on tient, et qui se déplace avec ce dont on a besoin. ' +
        'Nous avons eu besoin d’un roman sans intrigue, à un moment où l’intrigue ' +
        'nous semblait un mensonge ; ils avaient besoin d’un roman qui tienne, ' +
        'à un moment où ce qui ne tenait pas menaçait autre chose que la littérature.\n\n' +
        'Rien n’assure que notre besoin soit plus noble. Il est simplement le nôtre, ' +
        'et le seul honneur qu’on puisse lui faire est de ne pas le déguiser en découverte.\n\n' +
        'On objectera que cette position interdit de dire qu’un livre est bon. ' +
        'Elle l’interdit en effet au sens où on l’entend d’ordinaire, ' +
        'et elle laisse intact tout ce dont on se sert réellement pour en juger : ' +
        'la justesse de la description, la cohérence entre ce qu’un texte annonce ' +
        'et ce qu’il fait, l’effet qu’il produit sur quelqu’un qui le lit maintenant. ' +
        'Ce sont des critères, ils se discutent, et aucun d’eux n’exige ' +
        'que la valeur préexiste à la lecture.\n\n' +
        'Ce qu’on perd est la tranquillité de croire qu’en aimant un livre ' +
        'on constate quelque chose. Ce qu’on gagne est de savoir ce qu’on fait ' +
        'quand on l’enseigne, ce qui n’est pas rien pour un métier ' +
        'dont c’est l’activité principale.',
      items: [
        {
          q: 'Pourquoi l’hypothèse courante est-elle invérifiable ?',
          opts: [
            'Nous n’atteignons pas l’œuvre indépendamment de sa réception',
            'Les comptes rendus de l’époque ont disparu',
            'Les critiques étaient anonymes',
            'Le texte a été modifié depuis',
          ],
          correct: 0,
          why: 'Notre lecture est faite de tout ce qui s’est écrit depuis, légende comprise.',
          band: 'c2',
        },
        {
          q: 'Que fait l’auteur au quatrième paragraphe ?',
          opts: [
            'Il refuse la conclusion relativiste que sa démonstration appelait',
            'Il résume les paragraphes précédents',
            'Il change de sujet',
            'Il concède la position des enthousiastes',
          ],
          correct: 0,
          why: '« Je ne le dirai pas, et pas par prudence : parce que c’est faux. »',
          band: 'c2',
        },
        {
          q: 'Que soutient-il finalement sur la valeur d’une œuvre ?',
          opts: [
            'C’est une position qu’on tient, non une propriété qu’on découvre',
            'Elle est établie par la postérité',
            'Elle est mesurable comme une masse',
            'Elle dépend de la qualité de la langue',
          ],
          correct: 0,
          why: 'Elle se déplace avec ce dont on a besoin, et le déguiser en découverte est ce qu’il refuse.',
          band: 'c2',
        },
      ],
    },
  ],
};
