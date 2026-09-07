// TCF Canada blanc-03 — Compréhension orale, the upper slope (B2, C1, C2).
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
// C2 routes to `methode-scientifique` at C1: there are no published C2 items on
// any theme, and pick-items reports that fallback rather than hiding it.
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

/* ═══ B2 — positions 20 to 29 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: in each of the four, no single sentence contains the answer.
// Two speakers agree on a fact and disagree on what it means, and the question
// asks for the meaning.

export const CO_B2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Compréhension orale · B2',
  prompt: 'Vous allez entendre quatre documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 518,
  targetItemIds: uniq(
    ITEMS.immigrationEtCitoyennete.b2,
    ITEMS.communaute.b2,
    ITEMS.recherche.b2,
    ITEMS.ecologie.b2
  ),
  parts: [
    {
      label: 'Document 20 · l’accueil des étudiants étrangers',
      playCount: 1,
      readWindowS: 25,
      durationS: 76,
      text:
        'UNE ANIMATRICE : L’université accueille deux mille étudiants étrangers et en perd un sur cinq ' +
        'avant la fin de la première année. Où se joue cette perte ?\n' +
        'UN VICE-PRÉSIDENT : Pas dans le niveau, en tout cas. Ils entrent avec des dossiers ' +
        'au moins équivalents à ceux des autres, et ceux qui restent réussissent aussi bien. ' +
        'Nous ne perdons pas les plus faibles.\n' +
        'UNE RESPONSABLE ASSOCIATIVE : Sur ce point je vous suis entièrement, et c’est bien le problème. ' +
        'Quand ce ne sont pas les plus faibles qui partent, ce n’est pas l’université qui les trie, ' +
        'c’est autre chose.\n' +
        'UN VICE-PRÉSIDENT : Le logement, principalement. Nous le savons et nous n’avons pas les murs.\n' +
        'UNE RESPONSABLE ASSOCIATIVE : Le logement pèse. Mais un étudiant mal logé qui connaît trois personnes ' +
        'tient l’année ; un étudiant bien logé qui n’en connaît aucune repart en février. ' +
        'Nous voyons les deux chaque année.\n' +
        'UN VICE-PRÉSIDENT : Vous me demandez d’organiser des amitiés.\n' +
        'UNE RESPONSABLE ASSOCIATIVE : Je vous demande de financer ce qui les rend possibles, ' +
        'ce qui n’est pas la même chose et coûte beaucoup moins qu’une résidence.',
      items: [
        {
          q: 'Sur quoi les deux intervenants s’accordent-ils ?',
          opts: [
            'Ce ne sont pas les étudiants les plus faibles qui partent',
            'Le logement est la seule cause',
            'Le niveau à l’entrée est insuffisant',
            'L’université trie ses étudiants',
          ],
          correct: 0,
          why: '« Sur ce point je vous suis entièrement » : le désaccord commence après.',
          band: 'b2',
        },
        {
          q: 'Que retient la responsable associative comme facteur décisif ?',
          opts: [
            'Le fait de connaître quelques personnes',
            'La qualité du logement',
            'Le niveau de français',
            'Le coût des inscriptions',
          ],
          correct: 0,
          why: 'Mal logé avec trois connaissances tient l’année ; bien logé et isolé repart en février.',
          band: 'b2',
        },
        {
          q: 'Que demande-t-elle exactement à l’université ?',
          opts: [
            'De financer ce qui rend les liens possibles',
            'De construire une résidence',
            'D’organiser des activités obligatoires',
            'De sélectionner autrement',
          ],
          correct: 0,
          why: 'Elle écarte elle-même « organiser des amitiés » : financer ce qui les rend possibles.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 21 · le bénévolat dans les services publics',
      playCount: 1,
      readWindowS: 25,
      durationS: 76,
      text:
        'UN CHRONIQUEUR : Dans trois départements, l’aide aux démarches administratives ' +
        'est assurée par des bénévoles. Le service rendu est réel et personne ne le conteste.\n' +
        'UNE ÉLUE : Et il est meilleur que ce qu’il remplace. Les bénévoles prennent le temps ' +
        'qu’un agent au guichet n’a pas.\n' +
        'UN CHRONIQUEUR : Je vous l’accorde volontiers. Ce que je remarque est ailleurs : ' +
        'un bénévole n’est comptable de rien. Si le dossier est mal rempli, personne ne répond de l’erreur, ' +
        'et l’usager n’a aucun recours.\n' +
        'UNE ÉLUE : L’agent au guichet non plus, en pratique.\n' +
        'UN CHRONIQUEUR : En pratique peut-être. En droit, si, et cette différence sert le jour ' +
        'où quelque chose tourne mal. Une administration est une chose dont on peut se plaindre. ' +
        'C’est même à peu près sa définition.\n' +
        'UNE ÉLUE : Alors donnez-moi les agents. En attendant, je préfère un service imparfait ' +
        'à une porte fermée, et je ne crois pas que ce choix soit indigne.\n' +
        'UN CHRONIQUEUR : Il ne l’est pas. Il devient indigne le jour où l’on cesse de le présenter ' +
        'comme un pis-aller, et ce jour arrive vite : trois budgets suffisent ' +
        'pour qu’un dispositif provisoire devienne une ligne qu’on reconduit sans la discuter.',
      items: [
        {
          q: 'Que concède le chroniqueur à l’élue ?',
          opts: [
            'Le service rendu par les bénévoles est meilleur',
            'Les agents sont trop nombreux',
            'Le bénévolat coûte moins cher',
            'Les usagers préfèrent les bénévoles',
          ],
          correct: 0,
          why: '« Je vous l’accorde volontiers » : les bénévoles prennent le temps qu’un agent n’a pas.',
          band: 'b2',
        },
        {
          q: 'Quelle est son objection principale ?',
          opts: [
            'Un bénévole ne répond pas de ses erreurs',
            'Les bénévoles sont mal formés',
            'Le service coûte trop cher',
            'Les délais sont plus longs',
          ],
          correct: 0,
          why: 'Une administration est une chose dont on peut se plaindre ; un bénévole n’est comptable de rien.',
          band: 'b2',
        },
        {
          q: 'Quelle est sa position finale ?',
          opts: [
            'Le dispositif est acceptable tant qu’il est présenté comme provisoire',
            'Le bénévolat doit cesser',
            'Il faut former les bénévoles',
            'L’élue a tort sur toute la ligne',
          ],
          correct: 0,
          why: 'Il refuse le mot « indigne » et le réserve au jour où l’on cesse de parler de pis-aller.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 22 · financer une discipline',
      playCount: 1,
      readWindowS: 22,
      durationS: 68,
      text:
        'UN JOURNALISTE : Votre laboratoire vit d’appels à projets de trois ans. Le système marche ?\n' +
        'UNE CHERCHEUSE : Il marche pour ce qu’il sélectionne, et il sélectionne ce qui aboutit en trois ans. ' +
        'Je ne dis pas que c’est mauvais : beaucoup de bonne science tient dans trois ans.\n' +
        'UN JOURNALISTE : Mais pas la vôtre.\n' +
        'UNE CHERCHEUSE : Pas les questions qui m’intéressent le plus, non. ' +
        'Et je fais comme tout le monde : je découpe. Je demande trois ans pour une étape ' +
        'dont je sais qu’elle en demandera neuf, et je ne l’écris pas.\n' +
        'UN JOURNALISTE : Cela ressemble à une critique du système.\n' +
        'UNE CHERCHEUSE : C’est surtout une description de ce que le système m’apprend à faire. ' +
        'Le problème n’est pas que les évaluateurs soient sévères, ils sont excellents. ' +
        'Le problème est que la seule façon de leur soumettre une question longue ' +
        'est de leur présenter une question courte.\n' +
        'UN JOURNALISTE : Que faudrait-il, alors ?\n' +
        'UNE CHERCHEUSE : Une part du budget, même petite, attribuée sans calendrier de résultats. ' +
        'Dix pour cent suffiraient. Ce que je demande n’est pas plus d’argent, ' +
        'c’est de l’argent dont personne n’attend un rapport à trois ans, ' +
        'et je sais parfaitement combien cette phrase est difficile à défendre devant un contribuable.',
      items: [
        {
          q: 'Que reconnaît la chercheuse au système actuel ?',
          opts: [
            'Beaucoup de bonne science tient effectivement en trois ans',
            'Les évaluateurs sont trop sévères',
            'Les financements sont suffisants',
            'Les projets longs sont rares',
          ],
          correct: 0,
          why: 'Elle refuse de dire que c’est mauvais, et loue les évaluateurs plus loin.',
          band: 'b2',
        },
        {
          q: 'Que décrit-elle en parlant de « découper » ?',
          opts: [
            'Présenter une question longue comme une question courte',
            'Partager le budget entre équipes',
            'Diviser le laboratoire en groupes',
            'Publier plus souvent',
          ],
          correct: 0,
          why: 'Trois ans demandés pour une étape qui en demandera neuf, sans l’écrire.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 23 · la voiture en ville moyenne',
      playCount: 1,
      readWindowS: 22,
      durationS: 68,
      text:
        'UN ÉLU : Nous avons retiré deux cents places de stationnement du centre. ' +
        'Les commerçants ont annoncé la catastrophe, et le chiffre d’affaires a monté de quatre pour cent.\n' +
        'UNE COMMERÇANTE : Le chiffre global, oui. Regardez le détail : la restauration a gagné, ' +
        'l’équipement de la maison a perdu. Un canapé ne rentre pas dans un vélo.\n' +
        'UN ÉLU : Vous décrivez un déplacement, pas une perte.\n' +
        'UNE COMMERÇANTE : Je décris une perte pour ceux à qui elle arrive. ' +
        'Que la ville s’y retrouve globalement ne console pas le magasin qui ferme, ' +
        'et c’est un magasin de moins pour tout le monde ensuite.\n' +
        'UN ÉLU : Que proposez-vous ? Rendre les places ?\n' +
        'UNE COMMERÇANTE : Non. Je propose qu’on arrête de brandir le chiffre global ' +
        'comme s’il répondait à l’objection, alors qu’il la contourne. ' +
        'Une livraison à domicile financée par la ville coûterait moins que deux cents places.\n' +
        'UN ÉLU : Nous l’avons chiffrée. C’est exact, et c’est la première fois ' +
        'que quelqu’un me le propose plutôt que de me demander de revenir en arrière.\n' +
        'UNE COMMERÇANTE : Parce que revenir en arrière ne nous sauverait pas non plus. ' +
        'Ceux qui venaient en voiture acheter un canapé venaient déjà de moins en moins. ' +
        'La zone piétonne n’a pas créé le problème ; elle l’a rendu visible en dix-huit mois ' +
        'au lieu de dix ans, et personne dans ma rue ne veut l’entendre dit comme ça.',
      items: [
        {
          q: 'Que montre le détail des chiffres selon la commerçante ?',
          opts: [
            'Certains commerces gagnent et d’autres perdent',
            'Le chiffre global est faux',
            'La restauration a reculé',
            'Les clients viennent de plus loin',
          ],
          correct: 0,
          why: 'La restauration gagne, l’équipement de la maison perd : « un canapé ne rentre pas dans un vélo ».',
          band: 'b2',
        },
        {
          q: 'Que demande-t-elle finalement ?',
          opts: [
            'Qu’on cesse d’opposer le chiffre global à l’objection',
            'Qu’on rende les places de stationnement',
            'Qu’on ferme le centre aux voitures',
            'Qu’on baisse les loyers commerciaux',
          ],
          correct: 0,
          why: 'Elle écarte elle-même le retour des places et propose une livraison financée.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: in all three the speakers agree on the facts and disagree about
// what follows from them, so no distractor can be eliminated by hearing a word.

export const CO_C1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'c1',
  label: 'Compréhension orale · C1',
  prompt: 'Vous allez entendre trois documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 475,
  targetItemIds: uniq(ITEMS.decouvertes.c1, ITEMS.argotClassique.c1, ITEMS.methodeScientifique.c1),
  parts: [
    {
      label: 'Document 30 · ce qu’une découverte doit à son époque',
      playCount: 1,
      readWindowS: 30,
      durationS: 100,
      text:
        'UNE MODÉRATRICE : Quatre équipes ont trouvé la même chose en dix-huit mois. ' +
        'Hasard, ou autre chose ?\n' +
        'UN HISTORIEN DES SCIENCES : Cela dit que la question était mûre. ' +
        'Les instruments existaient, la donnée circulait, et la formulation du problème ' +
        'traînait dans une dizaine de laboratoires. Quatre découvertes simultanées ' +
        'ne sont pas quatre coïncidences.\n' +
        'UNE PHYSICIENNE : Je vous accorde la maturité de la question. ' +
        'Je n’accorde pas ce qu’on en tire d’habitude, à savoir que la personne compte peu. ' +
        'Les quatre équipes ont trouvé la même chose ; elles ne l’ont pas trouvée aussi bien. ' +
        'Une des quatre a vu tout de suite ce que les trois autres ont mis deux ans à comprendre.\n' +
        'UN HISTORIEN DES SCIENCES : Ce qui est un argument sur la compréhension, pas sur la découverte.\n' +
        'UNE PHYSICIENNE : C’est un argument sur ce qui vaut la peine d’être appelé une découverte. ' +
        'Si vous appelez ainsi le premier signal enregistré, alors oui, l’époque suffit. ' +
        'Si vous appelez ainsi le moment où quelqu’un sait ce que le signal veut dire, ' +
        'alors non, et les dates cessent d’être si proches.\n' +
        'UN HISTORIEN DES SCIENCES : Vous déplacez la définition pour sauver le héros.\n' +
        'UNE PHYSICIENNE : Je déplace la définition parce que la vôtre compte des instruments ' +
        'et pas des idées. Nous ne sauvons ni ne tuons personne : nous choisissons ce que nous datons.\n' +
        'UNE PHYSICIENNE : Et votre définition a un défaut que la mienne n’a pas : ' +
        'elle est irréfutable. On peut toujours montrer après coup que les conditions ' +
        'étaient réunies, y compris là où personne n’a rien trouvé.\n' +
        'UN HISTORIEN DES SCIENCES : C’est le reproche le plus sérieux qu’on m’ait fait. ' +
        'Je préfère une explication trop disponible à une explication par le talent, ' +
        'qui se contente de renommer ce qu’il fallait comprendre.',
      items: [
        {
          q: 'Que concède la physicienne à l’historien ?',
          opts: [
            'La question était effectivement mûre',
            'La personne du chercheur compte peu',
            'Les quatre équipes ont travaillé ensemble',
            'Les instruments manquaient',
          ],
          correct: 0,
          why: '« Je vous accorde la maturité de la question » : elle refuse seulement ce qu’on en tire.',
          band: 'c1',
        },
        {
          q: 'Sur quoi porte réellement le désaccord ?',
          opts: [
            'Ce qui mérite d’être appelé une découverte',
            'La date exacte des travaux',
            'La qualité des instruments',
            'Le rôle des financements',
          ],
          correct: 0,
          why: 'Le premier signal enregistré, ou le moment où quelqu’un sait ce qu’il veut dire.',
          band: 'c1',
        },
        {
          q: 'Comment répond-elle à l’accusation de « sauver le héros » ?',
          opts: [
            'En disant que l’autre définition date des instruments, pas des idées',
            'En reconnaissant qu’elle exagère',
            'En citant un cas contraire',
            'En refusant de répondre',
          ],
          correct: 0,
          why: '« Nous ne sauvons ni ne tuons personne : nous choisissons ce que nous datons. »',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 31 · les registres au travail',
      playCount: 1,
      readWindowS: 28,
      durationS: 96,
      text:
        'UN CHRONIQUEUR : On demande aux jeunes recrues de « bien parler » et personne ne dit ce que cela veut dire.\n' +
        'UNE LINGUISTE : Parce que ce n’est pas une question de bien ou de mal. ' +
        'Il y a un registre attendu dans une réunion de direction et un autre à la pause. ' +
        'Savoir passer de l’un à l’autre est une compétence, et elle s’enseigne mal ' +
        'parce que personne ne la décrit.\n' +
        'UN CHRONIQUEUR : Elle s’attrape en observant, alors.\n' +
        'UNE LINGUISTE : En observant des gens qu’on côtoie. C’est là que l’affaire se corse : ' +
        'celui qui déjeune tous les jours avec des cadres apprend le registre des cadres. ' +
        'Celui qui déjeune avec l’équipe technique apprend un autre registre, tout aussi riche, ' +
        'et qui ne lui ouvrira aucune porte.\n' +
        'UN CHRONIQUEUR : Donc l’exigence est un filtre social déguisé en exigence de langue.\n' +
        'UNE LINGUISTE : Elle en est un, et je me méfie de la formule, parce qu’elle laisse croire ' +
        'qu’il suffirait de supprimer l’exigence. Une entreprise qui cesse d’exiger un registre ' +
        'ne devient pas ouverte : elle devient un endroit où le registre compte toujours ' +
        'et où plus personne ne vous dit lequel.\n' +
        'UN CHRONIQUEUR : Que proposez-vous, alors ?\n' +
        'UNE LINGUISTE : De l’écrire. Une entreprise sait décrire sa tenue vestimentaire ' +
        'en trois lignes et trouve absurde de décrire sa langue, alors que la seconde ' +
        'pèse infiniment plus lourd dans une carrière. Dire « en réunion de direction, ' +
        'on annonce sa conclusion avant de la justifier » prend une phrase et se transmet.\n' +
        'UN CHRONIQUEUR : Cela ressemble à un manuel de conformité.\n' +
        'UNE LINGUISTE : Cela ressemble surtout à ce que reçoit déjà, gratuitement et sans le savoir, ' +
        'celui qui a grandi dans une famille où l’on parlait ainsi. ' +
        'Je ne propose pas de créer une norme, je propose de cesser de la transmettre ' +
        'uniquement par héritage. Ce n’est pas la même chose, et on me reproche régulièrement ' +
        'la première quand je défends la seconde.',
      items: [
        {
          q: 'Que soutient la linguiste sur les registres ?',
          opts: [
            'Savoir passer de l’un à l’autre est une compétence peu décrite',
            'Certains registres sont plus corrects que d’autres',
            'Le registre des cadres est plus riche',
            'La langue de la pause ne convient jamais',
          ],
          correct: 0,
          why: 'Elle refuse « bien ou mal » et parle d’une compétence qui s’enseigne mal faute d’être décrite.',
          band: 'c1',
        },
        {
          q: 'Pourquoi se méfie-t-elle de l’expression « filtre social » ?',
          opts: [
            'Elle laisse croire qu’il suffirait de supprimer l’exigence',
            'Elle est fausse',
            'Elle accuse les entreprises',
            'Elle est trop technique',
          ],
          correct: 0,
          why: 'Elle accorde que c’en est un, puis décrit ce que produirait la suppression.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 32 · les résultats qu’on ne publie pas',
      playCount: 1,
      readWindowS: 28,
      durationS: 96,
      text:
        'UNE CONFÉRENCIÈRE : Sur cent expériences menées, une quarantaine ne montrent rien, ' +
        'et presque aucune n’est publiée. La littérature décrit donc un monde ' +
        'où les hypothèses réussissent bien plus souvent qu’en réalité.\n' +
        'UN ÉDITEUR DE REVUE : C’est exact et ce n’est pas notre décision seule. ' +
        'Nous recevons très peu de résultats négatifs. Les chercheurs ne les écrivent pas, ' +
        'parce qu’ils savent ce que nous prenons.\n' +
        'UNE CONFÉRENCIÈRE : Vous décrivez une boucle et vous vous placez à l’extérieur. ' +
        'Ce que vous prenez est ce qu’ils écrivent, ce qu’ils écrivent est ce que vous prenez, ' +
        'et l’un des deux bouts peut être coupé d’une décision. Le vôtre.\n' +
        'UN ÉDITEUR DE REVUE : Une revue qui publie ce que personne ne lit ne survit pas ' +
        'assez longtemps pour changer quoi que ce soit.\n' +
        'UNE CONFÉRENCIÈRE : Voilà l’argument sérieux, et il vaut pour une revue seule. ' +
        'Il ne vaut pas pour douze revues qui s’engagent ensemble, ' +
        'et ce que je vous reproche n’est pas de ne pas sauter le premier : ' +
        'c’est de présenter comme une impossibilité ce qui est un problème de coordination.\n' +
        'UN ÉDITEUR DE REVUE : Douze revues qui s’engagent ensemble, cela s’appelle une entente, ' +
        'et nos juristes ont un avis sur la question.\n' +
        'UNE CONFÉRENCIÈRE : Vos juristes ont un avis sur les prix. ' +
        'Un engagement commun à publier une catégorie de résultats n’est pas une entente ' +
        'sur les prix, et vous le savez, parce que vous vous engagez déjà ensemble ' +
        'sur les formats de citation et sur l’accès ouvert.\n' +
        'UN ÉDITEUR DE REVUE : Ce sont des questions techniques.\n' +
        'UNE CONFÉRENCIÈRE : Ce sont des questions sur lesquelles il était commode de s’entendre. ' +
        'Je remarque seulement que la frontière entre le technique et l’impossible ' +
        'suit d’assez près la frontière entre ce qui vous coûte peu et ce qui vous coûte cher, ' +
        'et je ne vous en fais pas grief : je demande qu’on l’appelle par son nom.',
      items: [
        {
          q: 'Que reconnaît l’éditeur ?',
          opts: [
            'La littérature décrit bien un monde faussement réussi',
            'Sa revue refuse les résultats négatifs',
            'Les chercheurs falsifient leurs données',
            'Les lecteurs réclament des échecs',
          ],
          correct: 0,
          why: '« C’est exact », avant de renvoyer la responsabilité vers les chercheurs.',
          band: 'c1',
        },
        {
          q: 'Quel est le reproche exact de la conférencière ?',
          opts: [
            'Il présente comme impossible ce qui relève de la coordination',
            'Il refuse de publier des résultats négatifs',
            'Il défend les intérêts des chercheurs',
            'Il ignore la boucle qu’il décrit',
          ],
          correct: 0,
          why: 'Elle accepte l’argument pour une revue seule et le refuse pour douze qui s’engageraient ensemble.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */

export const CO_C2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'c2',
  label: 'Compréhension orale · C2',
  prompt: 'Vous allez entendre un document. Choisissez la bonne réponse.',
  timingS: 204,
  targetItemIds: uniq(ITEMS.methodeScientifique.c2),
  parts: [
    {
      label: 'Document 37 · l’induction et ses critiques',
      playCount: 1,
      readWindowS: 30,
      durationS: 130,
      text:
        'UNE PHILOSOPHE : Le problème est vieux et il n’a pas vieilli. ' +
        'Aucun nombre d’observations ne prouve une règle générale, ' +
        'et pourtant nous vivons entièrement de règles générales tirées d’observations.\n' +
        'UN STATISTICIEN : Nous en vivons parce qu’elles marchent, ce qui est un argument ' +
        'que les philosophes trouvent grossier et que les avions trouvent suffisant.\n' +
        'UNE PHILOSOPHE : L’argument est excellent et il est circulaire, ce qui n’est pas la même chose ' +
        'que mauvais. Vous justifiez l’induction en observant qu’elle a marché jusqu’ici, ' +
        'c’est-à-dire par une induction. Cela ne la disqualifie pas ; ' +
        'cela vous interdit seulement de dire que vous l’avez fondée.\n' +
        'UN STATISTICIEN : Je ne prétends rien fonder. Je calcule des taux d’erreur. ' +
        'Ma discipline a renoncé à la certitude il y a un siècle et se porte mieux depuis.\n' +
        'UNE PHILOSOPHE : Alors nous sommes d’accord, et je voudrais qu’on mesure sur quoi. ' +
        'Vous avez remplacé la question « est-ce vrai » par « à quelle fréquence me tromperais-je ». ' +
        'C’est un progrès considérable et c’est un changement de sujet.\n' +
        'UN STATISTICIEN : Tout progrès est un changement de sujet réussi.\n' +
        'UNE PHILOSOPHE : Voilà une phrase que j’aurais aimé écrire, et je vais la contester ' +
        'précisément parce qu’elle est trop belle. Un changement de sujet réussi ' +
        'est celui dont on se souvient qu’il a eu lieu. Le vôtre a si bien réussi ' +
        'que trois générations de chercheurs croient répondre à ma question ' +
        'quand ils répondent à la vôtre.\n' +
        'UN STATISTICIEN : Et vous, que feriez-vous de la réponse à la vôtre ?\n' +
        'UNE PHILOSOPHE : Rien du tout. C’est ce qui la rend intéressante. ' +
        'Une question dont la réponse ne sert à rien est une question qu’on pose ' +
        'pour elle-même, et il en faut quelques-unes.\n' +
        'UN STATISTICIEN : Voilà où nous ne nous rejoindrons pas. ' +
        'Une question sans usage est, pour moi, une question qu’on n’a pas encore posée correctement. ' +
        'Chaque fois qu’on a su la reformuler, elle a produit une méthode.\n' +
        'UNE PHILOSOPHE : Chaque fois qu’on a su la reformuler, elle a produit une AUTRE question, ' +
        'qui avait un usage, et la première est restée exactement où elle était. ' +
        'Vous appelez cela un progrès et vous avez raison ; ' +
        'j’appelle cela un contournement et j’ai raison aussi. ' +
        'Ce qui me frappe est que nous décrivions le même événement.\n' +
        'UN STATISTICIEN : Avec cette différence que le mien a des applications.\n' +
        'UNE PHILOSOPHE : Avec cette différence, oui, et elle n’est pas mince. ' +
        'Je remarque seulement que les applications sont venues après, ' +
        'et qu’elles sont venues de gens qui avaient lu l’objection.\n' +
        'UN STATISTICIEN : Vous plaidez pour l’inutile en montrant qu’il finit par servir. ' +
        'C’est habile, et cela ruine votre position.\n' +
        'UNE PHILOSOPHE : Cela ruine ma position si je promets qu’il servira. ' +
        'Je promets l’inverse : que la plupart ne serviront jamais. ' +
        'C’est un mauvais argument budgétaire et c’est le seul qui soit exact.',
      items: [
        {
          q: 'Quelle est l’objection de la philosophe à la justification par le succès ?',
          opts: [
            'Elle est circulaire, ce qui n’est pas la même chose que fausse',
            'Elle est démentie par les faits',
            'Elle repose sur trop peu d’observations',
            'Elle confond induction et déduction',
          ],
          correct: 0,
          why: 'Justifier l’induction en constatant qu’elle a marché est une induction : cela interdit de dire qu’on l’a fondée.',
          band: 'c2',
        },
        {
          q: 'Que reproche-t-elle au déplacement opéré par la statistique ?',
          opts: [
            'Il a si bien réussi qu’on a oublié qu’il avait eu lieu',
            'Il n’a rien changé',
            'Il est trop récent pour être jugé',
            'Il rend la certitude impossible',
          ],
          correct: 0,
          why: 'Trois générations croient répondre à sa question quand elles répondent à celle du statisticien.',
          band: 'c2',
        },
        {
          q: 'Que révèle sa dernière réponse ?',
          opts: [
            'Elle défend une question dont l’inutilité est le mérite',
            'Elle renonce à sa position',
            'Elle attend une application pratique',
            'Elle reproche son inutilité au statisticien',
          ],
          correct: 0,
          why: '« Rien du tout. C’est ce qui la rend intéressante » : une question posée pour elle-même.',
          band: 'c2',
        },
      ],
    },
  ],
};
