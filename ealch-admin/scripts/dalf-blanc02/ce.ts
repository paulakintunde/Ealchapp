// DALF C1 blanc-02: Compréhension des écrits. 12 questions, 25 points, 50 min.
//
// One text of ideas, 1500 to 2000 words (counted the FEI way, anything between
// two spaces), and twelve questions in text order, in three answer modes:
//
//   MCQ (3 options)        3   1, 2, 2         =  5
//   short, own words       5   2, 2, 2, 3, 3   = 12
//   vrai/faux justifié     4   2 each          =  8
//                                               ----
//                                                25
//
// ── DALF-33 · trust in expertise when experts disagree in public ───────────
//
// The text holds a position (visible disagreement is science working normally;
// what fails is its staging and the public image of science as a stock of
// certainties), reports two others (the institutions' « one voice » strategy;
// the relativist « since experts disagree, everything is equal ») and concedes
// to the first (alerts must be clear; some public disagreements are
// manufactured). That is what the attribute, justify and weigh families need.
//
// INVENTED, all of it: the author Hélène Darbois, the review « Lisière »,
// the river Vierne, the town of Port-Salvan, the two hydrologists, the
// prefect's decision, the Institut Pernelle and its survey (3,000 people;
// 58 % say experts contradicting each other lowers trust in science in
// general; 31 % once the disagreement is explained first), and « some twenty
// years » of filmed controversy (a loose framing, not a dated claim).
//
// Families: locate (1), reformulate (2, 4), justify (3, 7, 9, 10), attribute
// (5, 6), infer (11), weigh (8, 12). Two 3-point questions, both Weigh.
//
// Vrai/faux key: V, F, F, V (two of each). Each statement paraphrases; every
// passage that justifies it is in `quotes`, verbatim, and the test checks it.
// Read once for the contrary: no passage supports the opposite answer.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { C1_CE_TARGETS } from '../exam-c1-targets.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId } from './common.ts';

export const CE_TEXT =
  'LE DÉSACCORD N’EST PAS UNE PANNE\n' +
  'Hélène Darbois, Lisière, revue d’idées\n\n' +

  'L’hiver dernier, pendant les crues qui ont touché la vallée de la Vierne, les habitants de Port-Salvan ont assisté à une scène dont beaucoup se souviennent encore. ' +
  'Le même soir, sur deux chaînes différentes, deux hydrologues également reconnus annonçaient, l’un, que la digue tiendrait, l’autre, qu’il fallait évacuer les quartiers bas sans attendre. ' +
  'Le préfet a tranché pour l’évacuation ; la digue a tenu. ' +
  'Le lendemain, on pouvait lire sur les réseaux une phrase reprise des milliers de fois : « Si même les experts ne savent pas, pourquoi les écouter ? »\n\n' +

  'Cette phrase mérite mieux que l’agacement qu’elle suscite chez les scientifiques. ' +
  'Elle exprime une conclusion que beaucoup de gens tirent, sans la moindre malveillance, d’un spectacle qu’ils n’avaient pas l’habitude de voir. ' +
  'Pendant longtemps, la science est parvenue au public sous la forme de résultats : la Terre tourne, le vaccin protège, le pont supportera tant de tonnes. ' +
  'Le chemin qui menait à ces résultats, avec ses hypothèses abandonnées, ses mesures contestées, ses querelles parfois féroces, restait confiné aux laboratoires et aux revues spécialisées. ' +
  'Le public voyait la façade ; il ignorait le chantier. ' +
  'Or, depuis une vingtaine d’années, le chantier est filmé. ' +
  'Les crises sanitaires, climatiques ou industrielles placent des chercheurs devant les caméras au moment précis où ils ne savent pas encore, ' +
  'et ce qui était un débat interne, réglé à son rythme et selon ses propres règles, devient une dispute publique arbitrée par l’audience.\n\n' +

  // INVENTED: the Institut Pernelle survey and both of its percentages.
  'Les enquêtes d’opinion confirment que ce spectacle a un coût. ' +
  'Selon une étude de l’Institut Pernelle menée auprès de trois mille personnes, cinquante-huit pour cent des personnes interrogées déclarent que voir des experts se contredire diminue leur confiance « dans la science en général », et non dans les seuls experts concernés. ' +
  'Le chiffre est volontiers cité pour conclure à une crise de confiance. ' +
  'On cite moins la seconde partie de l’étude, qui est pourtant la plus instructive. ' +
  'Lorsqu’on expliquait d’abord aux participants sur quoi exactement portait le désaccord, ce qui était établi, ce qui restait incertain et pourquoi, la proportion tombait à trente et un pour cent. ' +
  'Ce n’est donc pas le désaccord en lui-même qui ébranle la confiance ; c’est le désaccord livré sans explication.\n\n' +

  'Face à ce constat, une première réponse s’est imposée dans de nombreuses institutions : parler d’une seule voix. ' +
  'Ses partisans, souvent des responsables d’agences publiques, raisonnent ainsi. ' +
  'Une décision collective, qu’il s’agisse d’évacuer un quartier, de fermer une école ou d’interdire un produit, doit être prise vite et comprise de tous. ' +
  'Si les spécialistes étalent leurs divergences, chaque citoyen retient l’avis le plus rassurant, ou le plus alarmant, selon son tempérament, et chacun se fabrique sa propre vérité. ' +
  'Mieux vaudrait donc que les experts débattent à huis clos, arrêtent une position commune et la défendent ensemble. ' +
  'Le désaccord, dans cette perspective, n’est pas illégitime ; il est simplement soustrait au regard du public, de même qu’on ne discute pas de la recette devant les convives.\n\n' +

  'Cette position n’a rien d’absurde, et l’on aurait tort de la caricaturer en volonté de cacher. ' +
  'Il est vrai qu’une alerte doit être claire, et qu’un message brouillé peut coûter des vies. ' +
  'Il est vrai aussi que certains désaccords publics sont fabriqués : il suffit parfois d’un seul chercheur isolé, invité pour « équilibrer » un plateau, pour donner l’impression qu’une communauté entière est divisée alors qu’elle ne l’est pas. ' +
  'Mais la stratégie du front uni a un défaut que ses défenseurs sous-estiment : elle ne tient que tant que rien ne filtre. ' +
  'Or tout finit par filtrer. ' +
  'Le jour où l’on apprend que la position commune avait été précédée de vifs débats, ce que l’on soupçonne n’est plus l’incertitude, c’est la dissimulation. ' +
  'Et une confiance trahie se reconstruit beaucoup plus lentement qu’une confiance simplement ébranlée.\n\n' +

  'Une deuxième réponse, plus inquiétante, prospère sur le même terrain. ' +
  'Puisque les experts ne s’accordent pas, affirme-t-elle, chacun est libre de croire ce qu’il veut, et l’avis d’un spécialiste ne pèse pas plus lourd que celui de n’importe qui. ' +
  'Cette conclusion repose sur une confusion qu’il faut dissiper. ' +
  'Que deux hydrologues divergent sur la résistance d’une digue précise, un soir de crue, ne signifie nullement que l’hydrologie ne sait rien. ' +
  'Les deux hommes s’accordaient sur l’essentiel : la hauteur de l’eau, le débit de la rivière, l’état des matériaux, les lois qui gouvernent l’écoulement. ' +
  'Leur désaccord portait sur une marge, l’endroit exact où ces connaissances partagées cessaient de suffire pour prédire. ' +
  'Celui qui conclut de leur dispute que tout se vaut confond la frontière d’un savoir avec son absence. ' +
  'Il ressemble à un voyageur qui, voyant deux cartographes hésiter sur le tracé d’un sentier de montagne, en déduirait que la montagne n’existe pas.\n\n' +

  'Il faut pourtant comprendre ce qui rend cette conclusion séduisante. ' +
  'Elle flatte une aspiration légitime, celle de ne pas se laisser dicter sa conduite par des autorités que l’on ne peut pas vérifier. ' +
  'Elle offre aussi un confort : si tout se vaut, nul n’est tenu de suivre un raisonnement difficile jusqu’au bout. ' +
  'Et elle trouve un aliment inépuisable dans les erreurs passées des experts, qui ont existé et dont il serait vain de nier le souvenir. ' +
  'Mais l’argument se retourne contre celui qui l’emploie. ' +
  'Ces erreurs, qui les a mises au jour, sinon d’autres experts, armés des mêmes méthodes et animés du même esprit de contradiction ? ' +
  'L’histoire des sciences est remplie de certitudes renversées, et chacun de ces renversements a été l’œuvre de la science elle-même, non de ceux qui la récusaient.\n\n' +

  'C’est là, à mon sens, que se trouve la véritable difficulté, et elle n’est pas du côté des scientifiques. ' +
  'Le désaccord visible n’est pas une défaillance de la science : c’est son fonctionnement ordinaire, enfin exposé au grand jour. ' +
  'Une connaissance devient solide précisément parce qu’elle a résisté à des objections, et elle ne peut résister qu’aux objections qu’on lui a faites. ' +
  'Une science où personne ne contredirait personne ne serait pas plus fiable ; elle serait simplement morte, ou soumise. ' +
  'Ce qui fait défaut, c’est une image publique de la science qui en a fait un stock de certitudes plutôt qu’une méthode pour réduire l’incertitude. ' +
  'Tant que l’on attendra des experts qu’ils délivrent des vérités définitives, chacun de leurs désaccords sera vécu comme un aveu d’échec, ' +
  'et chacune de leurs révisions comme la preuve qu’ils s’étaient trompés, alors qu’elle est la preuve qu’ils ont continué à chercher.\n\n' +

  'On mesure mal, de l’extérieur, à quel point la contradiction est inscrite dans les usages mêmes de la recherche. ' +
  'Un article n’est publié qu’après avoir été soumis à des relecteurs dont le rôle est précisément d’en chercher les failles ; ' +
  'une expérience n’est tenue pour acquise que lorsque d’autres équipes, ailleurs, ont obtenu le même résultat ; ' +
  'un colloque réussi est souvent celui où les communications ont été le plus vivement discutées. ' +
  'Le chercheur qui expose ses doutes devant ses pairs ne trahit pas sa discipline : il en applique les règles. ' +
  'Ce qui est nouveau, ce n’est pas cette rudesse, c’est qu’elle se donne désormais en spectacle devant des gens à qui personne n’en a jamais expliqué la fonction.\n\n' +

  'Faut-il alors simplement laisser les experts se disputer devant les caméras et s’en remettre à la maturité du public ? ' +
  'Ce serait oublier que la forme du débat compte autant que son existence. ' +
  'Le format du duel télévisé, deux invités, deux minutes chacun, un animateur qui compte les points, semble presque conçu pour fausser la perception d’un désaccord. ' +
  'Il accorde le même poids à une position partagée par la quasi-totalité d’une discipline et à une hypothèse marginale ; il récompense l’assurance plutôt que la précision ; ' +
  'il fait disparaître tout ce sur quoi les deux invités s’entendent, parce que l’entente ne fait pas d’audience. ' +
  'Le soir de la crue, aucun des deux plateaux n’avait pris une minute pour dire ce que les deux hydrologues savaient en commun.\n\n' +

  'La réponse que je défends tient en une règle simple, qui vaut pour les experts comme pour ceux qui les interrogent : commencer par l’accord. ' +
  'Avant de dire ce qui les divise, deux spécialistes devraient dire ce sur quoi ils s’entendent, puis délimiter précisément la question qui reste ouverte, ' +
  'et enfin expliquer ce qui permettrait de la trancher : une mesure, un délai, une observation. ' +
  'Une telle présentation n’efface pas le désaccord ; elle le remet à sa place. ' +
  'Elle permet au citoyen de comprendre qu’on lui demande de décider dans l’incertitude, ce qui est le lot ordinaire de toute décision publique, et non de choisir entre deux vérités concurrentes. ' +
  'C’est aussi ce que montrait, en creux, l’enquête de l’Institut Pernelle : ce n’est pas le conflit qui détruit la confiance, c’est son opacité.\n\n' +

  'On objectera que cette règle demande beaucoup : du temps, que les crises n’accordent guère, et une modestie que les plateaux ne récompensent pas. ' +
  'C’est exact, et je ne prétends pas qu’elle suffira à dissiper la méfiance de ceux qui ont décidé de ne plus rien croire. ' +
  'Mais elle s’adresse à un public bien plus nombreux, celui qui, le soir de la crue, voulait sincèrement savoir s’il fallait partir, ' +
  'et qui a reçu deux certitudes opposées au lieu d’une incertitude expliquée. ' +
  'Ce public-là n’a pas perdu confiance dans la science parce qu’elle doutait. ' +
  'Il l’a perdue parce qu’on lui a montré le doute sous la forme d’un match, sans lui en donner les règles. ' +
  'La science n’a pas à cacher ses désaccords pour être crue ; elle doit apprendre à les rendre lisibles.';

export const CE_TASK: ExamTask = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'ce_mcq',
  skill: 'CE',
  level: 'c1',
  examinerNotes: NOTES_CLOSED,
  id: taskId('ce_mcq', '001'),
  label: 'Compréhension des écrits',
  prompt:
    'Lisez le texte puis répondez aux questions.\n' +
    'Pour les questions à réponse rédigée, répondez avec vos propres mots.\n' +
    'Pour les questions « vrai ou faux », cochez la bonne réponse ET recopiez le passage du texte qui la justifie. ' +
    'Les points ne sont accordés que si le choix et la justification sont corrects.',
  timingS: 3000,
  targetItemIds: [...C1_CE_TARGETS],
  parts: [
    {
      label: 'Texte · Le désaccord n’est pas une panne',
      text: CE_TEXT,
      items: [
        // 1 · Locate · 1 pt
        {
          q: 'Comment l’épisode de Port-Salvan s’est-il terminé ?',
          opts: [
            'La digue a résisté alors que l’évacuation avait été ordonnée',
            'La digue a cédé, ce qui a donné raison au second hydrologue',
            'Le préfet a refusé l’évacuation, sur l’avis du premier hydrologue',
          ],
          correct: 0,
          why: '« Le préfet a tranché pour l’évacuation ; la digue a tenu. » Les deux distracteurs inversent l’un ou l’autre des deux faits.',
          band: 'c1',
          points: 1,
        },
        // 2 · Reformulate · 2 pts
        {
          kind: 'short',
          q: 'Comment l’auteure explique-t-elle que beaucoup de gens aient réagi à cet épisode par la méfiance ?',
          opts: [],
          correct: -1,
          keywords: [
            ['resultat', 'facade', 'certitude', 'produit fini', 'conclusions', 'habitu'],
            ['chantier', 'debat', 'querelle', 'controverse', 'coulisse', 'chemin', 'travail', 'processus', 'dispute', 'fabrication', 'hypothese', 'recherche'],
          ],
          model: 'Le public n’avait l’habitude de voir que les résultats de la science, pas les débats et les controverses qui y mènent ; ce travail est désormais exposé en direct.',
          why: '« Le public voyait la façade ; il ignorait le chantier. Or, depuis une vingtaine d’années, le chantier est filmé. »',
          band: 'c1',
          points: 2,
        },
        // 3 · Justify · Vrai · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? Plus de la moitié des sondés affirment que les divergences entre spécialistes entament leur foi dans l’ensemble de la démarche scientifique. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'cinquante-huit pour cent des personnes interrogées déclarent que voir des experts se contredire diminue leur confiance « dans la science en général »',
            'diminue leur confiance « dans la science en général », et non dans les seuls experts concernés',
          ],
          why: 'Cinquante-huit pour cent, et la confiance « dans la science en général ».',
          band: 'c1',
          points: 2,
        },
        // 4 · Reformulate · 2 pts
        {
          kind: 'short',
          q: 'Que montre la seconde partie de l’étude de l’Institut Pernelle ?',
          opts: [],
          correct: -1,
          keywords: [
            ['expli', 'comprend', 'clarifi', 'inform', 'precis', 'raison'],
            ['moins', '31', 'trente', 'baiss', 'tomb', 'recul', 'diminu', 'redui', 'chute'],
          ],
          model: 'Quand on explique d’abord sur quoi porte le désaccord, la perte de confiance tombe à 31 % : c’est le manque d’explication, et non le désaccord, qui nuit.',
          why: '« La proportion tombait à trente et un pour cent… c’est le désaccord livré sans explication. »',
          band: 'c1',
          points: 2,
        },
        // 5 · Attribute · 2 pts
        {
          kind: 'short',
          q: 'Pour quelle raison principale les partisans d’une parole unique veulent-ils que les experts tranchent entre eux, loin du public ?',
          opts: [],
          correct: -1,
          keywords: [
            ['reten', 'retien', 'choisi', 'propre verite', 'sa verite', 'ce qu il veut', 'avis qui', 'prefer', 'convient', 'arrang', 'selon son'],
            ['vite', 'rapid', 'urgen', 'decision', 'agir', 'action', 'compris', 'clair', 'confus'],
          ],
          model: 'Parce que, lorsqu’une décision doit être prise vite, des avis divergents permettent à chacun de retenir celui qui lui convient, et l’action commune devient impossible.',
          why: 'Une décision collective « doit être prise vite et comprise de tous » ; sinon « chacun se fabrique sa propre vérité ».',
          band: 'c1',
          points: 2,
        },
        // 6 · Attribute · 2 pts
        {
          q: 'Quelle est l’attitude de l’auteure envers la stratégie qui consiste à parler d’une seule voix ?',
          opts: [
            'Elle lui reconnaît des raisons valables mais la juge fragile à terme',
            'Elle la rejette comme une tentative délibérée de tromper le public',
            'Elle l’approuve, pourvu que les débats internes restent secrets',
          ],
          correct: 0,
          why: '« Cette position n’a rien d’absurde » puis « elle ne tient que tant que rien ne filtre ». Elle refuse explicitement d’y voir une « volonté de cacher ».',
          band: 'c1',
          points: 2,
        },
        // 7 · Justify · Faux · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? D’après l’auteure, une controverse exposée sur un plateau reflète toujours une division réelle au sein de la discipline. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'certains désaccords publics sont fabriqués',
            'pour donner l’impression qu’une communauté entière est divisée alors qu’elle ne l’est pas',
          ],
          why: 'L’auteure concède que certains désaccords sont fabriqués par la mise en scène d’un chercheur isolé.',
          band: 'c1',
          points: 2,
        },
        // 8 · Weigh · 3 pts
        {
          kind: 'short',
          q: 'Dans le paragraphe consacré à la « deuxième réponse », quel rôle joue le retour à l’exemple des deux hydrologues ?',
          opts: [],
          correct: -1,
          keywords: [
            ['marge', 'frontiere', 'limite', 'detail', 'point precis', 'partiel', 'bord', 'petit'],
            ['essentiel', 'accord', 'partag', 'commun', 'socle', 'base'],
          ],
          model: 'Il montre que les deux experts partageaient l’essentiel des connaissances et ne divergeaient que sur une marge : il réfute ainsi l’idée que leur dispute prouverait que tout se vaut.',
          why: 'L’exemple, déjà connu du lecteur, devient un argument : accord sur l’essentiel, désaccord sur « une marge ».',
          band: 'c1',
          points: 3,
        },
        // 9 · Justify · Faux · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? Les deux spécialistes interrogés le soir de la crue s’opposaient sur la plupart des données disponibles. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'Les deux hommes s’accordaient sur l’essentiel',
            'Leur désaccord portait sur une marge',
          ],
          why: 'Ils s’accordaient sur la hauteur de l’eau, le débit, les matériaux et les lois de l’écoulement.',
          band: 'c1',
          points: 2,
        },
        // 10 · Justify · Vrai · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? Selon l’auteure, le public se fait une idée inexacte de ce qu’est la science. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'une image publique de la science qui en a fait un stock de certitudes plutôt qu’une méthode pour réduire l’incertitude',
            'Tant que l’on attendra des experts qu’ils délivrent des vérités définitives',
          ],
          why: 'L’auteure situe la difficulté dans l’image publique de la science, non chez les scientifiques.',
          band: 'c1',
          points: 2,
        },
        // 11 · Infer · 2 pts
        {
          q: 'Que reproche l’auteure au format du duel télévisé ?',
          opts: [
            'Il efface ce que les invités partagent et égalise des positions inégalement soutenues',
            'Il laisse trop peu de temps aux chercheurs pour exposer le détail de leurs calculs',
            'Il oblige les chercheurs à se prononcer sur des sujets étrangers à leur spécialité',
          ],
          correct: 0,
          why: 'Même poids à la position majoritaire et à l’hypothèse marginale ; l’entente « disparaît ». Les « deux minutes » sont un écho lexical, pas le grief ; la troisième option n’est pas dans le texte.',
          band: 'c1',
          points: 2,
        },
        // 12 · Weigh · 3 pts · the arc of the whole text
        {
          kind: 'short',
          q: 'En quelques phrases, retracez le mouvement d’ensemble de l’argumentation de l’auteure.',
          opts: [],
          correct: -1,
          keywords: [
            ['front', 'seule voix', 'unique', 'huis clos', 'consensus', 'relativ', 'tout se vaut', 'deux reponses'],
            ['normal', 'ordinaire', 'fonctionnement', 'sain'],
            ['presentation', 'format', 'explication', 'expliquer', 'commencer par', 'accord', 'lisible', 'mise en scene', 'transparen', 'opacit'],
          ],
          model: 'Partie d’un épisode qui semble prouver une crise de confiance, elle écarte deux réponses, le front uni et l’idée que tout se vaut, puis soutient que le désaccord est le fonctionnement normal de la science et qu’il faut en changer la présentation en commençant par l’accord.',
          why: 'Épisode, deux réponses rapportées et discutées, thèse (fonctionnement ordinaire), proposition (commencer par l’accord), concession finale.',
          band: 'c1',
          points: 3,
        },
      ],
    },
  ],
};
