// DALF C1 blanc-04: Compréhension des écrits. 12 questions, 25 points, 50 min.
//
// One text of ideas, 1500 to 2000 words (counted the FEI way, anything between
// two spaces), and twelve questions in text order, in three answer modes:
//
//   MCQ (3 options)        3   1, 2, 2         =  5
//   short, own words       5   2, 2, 3, 2, 3   = 12
//   vrai/faux justifié     4   2 each          =  8
//                                               ----
//                                                25
//
// ── DALF-35 · the ideal of transparency ────────────────────────────────────
//
// The text holds a position (transparency of results, decisions and reasons
// improves institutions; transparency of deliberation itself makes them
// cautious and rehearsed, and pushes the real discussion where no one sees
// it), reports two others (the advocates of total transparency: the camera
// chased away idle talk, those who complain have something to hide; the
// defenders of confidentiality: deliberation needs to be sheltered, elected
// people must be trusted) and concedes to the first (published expenses
// changed behaviour; citizens found real abuses). It ends on a proposal: a
// duty to give public reasons for every decision, and archives of the
// deliberations opened after a delay fixed in advance.
//
// INVENTED, all of it: the author Clémence Ardouin, the review « Le Banc
// public », the town of Lorvanne-sur-Ance and its decision three years ago, the
// Centre Halbert d’études locales and its study one year later (meetings from
// 2 h 40 to 1 h 35 on average; amendments proposed in session down by more
// than half; preparatory meetings multiplied), the unnamed councillor's
// remark, the département de la Haute-Lize (reception costs down 40 % in two
// years), the Centre hospitalier de Valmérande (incident reports down by a third
// in the first year, back above their earlier level within eighteen months of
// the confidential system).
//
// Families: locate (1), justify (2, 7, 10, 11), reformulate (3, 8), attribute
// (4, 5), infer (9), weigh (6, 12). Two 3-point questions, both Weigh.
//
// Vrai/faux key: V, F, F, V (two of each). Each statement paraphrases; every
// passage that justifies it is in `quotes`, verbatim, and the test checks it.
// Read once for the contrary: no passage supports the opposite answer.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { C1_CE_TARGETS } from '../exam-c1-targets.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId } from './common.ts';

export const CE_TEXT =
  'LA VITRE ET LE RIDEAU\n' +
  'Clémence Ardouin, Le Banc public, revue de débats\n\n' +

  // INVENTED: Lorvanne-sur-Ance, its decision, the Centre Halbert and every figure of its study.
  'Il y a trois ans, la petite ville de Lorvanne-sur-Ance a pris une décision que beaucoup ont saluée comme exemplaire. ' +
  'Le conseil municipal y était déjà retransmis en direct, comme dans bien des communes ; elle a décidé d’aller plus loin et de filmer, puis de diffuser en ligne, ' +
  'toutes les réunions de ses commissions, celles où se préparent réellement le budget, les travaux et les plans d’urbanisme. ' +
  'Plus rien, désormais, ne devait se dire à l’abri du regard des habitants. ' +
  'Un an plus tard, le Centre Halbert d’études locales a dressé un premier bilan. ' +
  'La durée moyenne des réunions de commission était passée de deux heures quarante à une heure trente-cinq, ' +
  'et le nombre d’amendements proposés en séance avait diminué de plus de moitié. ' +
  'Dans le même temps, les réunions dites préparatoires, sans caméra ni compte rendu, se sont multipliées. ' +
  'Un élu de la majorité, interrogé par les chercheurs, a résumé la situation d’une formule : ' +
  '« Tout est réglé avant. La séance, maintenant, c’est du théâtre. »\n\n' +

  'Ce bilan a aussitôt été lu de deux manières opposées. ' +
  'Pour les partisans d’une transparence sans réserve, il est plutôt encourageant. ' +
  'Des réunions plus courtes, disent-ils, sont des réunions débarrassées des bavardages, des digressions et des numéros de tribune que l’absence de témoins autorisait. ' +
  'La caméra aurait simplement obligé chacun à venir préparé. ' +
  'Quant à ceux qui regrettent l’ancien huis clos, ils ajoutent volontiers qu’on ne redoute la lumière que lorsqu’on a quelque chose à cacher. ' +
  'Pour les adversaires de la transparence, au contraire, l’expérience de Lorvanne démontre ce qu’ils répètent depuis longtemps : ' +
  'on ne délibère bien qu’à l’abri des regards. ' +
  'Une assemblée a besoin de discrétion pour discuter librement, comme un médecin a besoin du secret pour soigner, ' +
  'et il faut faire confiance à ceux que l’on a élus plutôt que de les surveiller à chaque instant.\n\n' +

  'Ces deux lectures me paraissent fausses, et fausses de la même manière. ' +
  'Elles traitent la transparence comme une seule chose, une quantité de lumière qu’il s’agirait d’augmenter ou de réduire. ' +
  'Or il faut distinguer au moins deux transparences, qui n’ont ni les mêmes effets ni la même légitimité. ' +
  'La première porte sur ce que l’institution produit : ses décisions, ses comptes, ses contrats, et les raisons qu’elle donne de ses choix. ' +
  'La seconde porte sur la manière dont elle délibère, c’est-à-dire sur les hésitations, les essais, les concessions qui précèdent la décision. ' +
  'La première améliore les institutions. La seconde, poussée à l’extrême, les rend prudentes, convenues, et pour finir moins sincères.\n\n' +

  // INVENTED: the département de la Haute-Lize and the forty per cent.
  'Commençons par reconnaître ce que la première a accompli, car il serait malvenu de le minimiser. ' +
  'Lorsque le département de la Haute-Lize a publié en ligne, ligne par ligne, les notes de frais de ses élus, ' +
  'les dépenses de réception ont baissé de quarante pour cent en deux ans. ' +
  'Personne n’avait interdit quoi que ce soit ; il a suffi que chacun sache que ses dépenses seraient lues. ' +
  'Ailleurs, la publication des marchés publics a permis à des citoyens, à des journalistes, parfois à de simples curieux, ' +
  'de repérer des contrats attribués toujours aux mêmes entreprises ou des prix sans rapport avec le service rendu. ' +
  'Il serait absurde de nier ces conquêtes. ' +
  'Elles ont rendu plus coûteux les petits abus que l’habitude avait fini par faire passer pour normaux, ' +
  'et elles ont donné aux habitants un moyen de vérifier ce qu’on leur affirmait au lieu de devoir le croire sur parole. ' +
  'Dans tous ces cas, la lumière porte sur un acte accompli, et elle modifie le comportement exactement là où il devait être modifié : ' +
  'on dépense autrement quand on sait qu’on devra en répondre.\n\n' +

  'La délibération obéit à une tout autre logique. ' +
  'Délibérer, c’est dire des choses que l’on ne pense pas encore définitivement : avancer une hypothèse pour voir ce qu’elle vaut, ' +
  'reconnaître qu’un adversaire a raison sur un point, abandonner une idée défendue la veille. ' +
  'Ce travail suppose qu’une parole puisse être provisoire. ' +
  'Sous l’œil d’une caméra, aucune ne l’est plus. ' +
  'Chaque phrase peut être extraite, citée hors de son contexte, ressortie des années plus tard ; ' +
  'l’élu qui change d’avis en séance passe pour une girouette, celui qui concède un argument à l’opposition offre une arme à ses adversaires. ' +
  'Chacun arrive donc avec un texte arrêté d’avance et s’y tient. ' +
  'La délibération devient une succession de déclarations. ' +
  'Les réunions de Lorvanne sont plus courtes, non parce que la caméra aurait chassé les bavardages, mais parce qu’on n’y discute plus : on y récite.\n\n' +

  // INVENTED: the camera training Lorvanne paid for in its second year.
  'Ce durcissement ne touche d’ailleurs pas tout le monde de la même façon. ' +
  'Les élus rompus aux médias s’accommodent fort bien de la caméra ; ils y trouvent même une tribune. ' +
  'Ceux qui en souffrent sont les nouveaux venus, les conseillers d’opposition peu nombreux, ceux qui exercent un autre métier ' +
  'et n’ont pas le temps de préparer chaque intervention comme un discours. ' +
  'Ils parlent moins, ou plus du tout, de peur de commettre la maladresse qui sera rediffusée sans fin. ' +
  'Une réforme pensée pour donner plus de pouvoir aux citoyens finit ainsi par en donner davantage à ceux qui maîtrisent déjà l’art de paraître. ' +
  'À Lorvanne, la commune a d’ailleurs dû financer, dès la deuxième année, une formation à la prise de parole devant la caméra : ' +
  'on y apprend moins à argumenter qu’à ne jamais se laisser surprendre.\n\n' +

  'Le second effet est plus pernicieux encore, parce qu’il est invisible. ' +
  'La délibération ne disparaît pas ; elle se déplace. ' +
  'Elle quitte la salle filmée pour les couloirs, les appels téléphoniques, les messageries privées, autant de lieux dont il ne reste aucune trace. ' +
  'D’où ce paradoxe que les défenseurs de la transparence totale refusent de voir : ' +
  'à Lorvanne, on en sait aujourd’hui moins qu’avant sur la manière dont les décisions se prennent. ' +
  'Autrefois, les commissions se réunissaient à huis clos, mais elles tenaient des procès-verbaux que l’on pouvait consulter. ' +
  'Désormais, le public voit tout de la séance et rien de ce qui compte. ' +
  'À force de vouloir éclairer chaque pièce, on a poussé les occupants à vivre dans la cave.\n\n' +

  // INVENTED: the Centre hospitalier de Valmérande, the third and the eighteen months.
  'Un exemple venu d’un tout autre domaine montre que ce mécanisme n’a rien de propre à la politique. ' +
  'Il y a quelques années, le Centre hospitalier de Valmérande a choisi de publier, service par service, tous les rapports d’incident rédigés par son personnel : ' +
  'erreurs de dosage, retards de prise en charge, chutes de patients. ' +
  'L’intention était irréprochable ; le résultat fut l’inverse de celui qu’on attendait. ' +
  'En un an, le nombre de rapports a chuté d’un tiers, non parce que les erreurs étaient moins nombreuses, mais parce qu’on les déclarait moins. ' +
  'Les soignants redoutaient de voir leur service, et parfois leur propre nom, exposés au jugement public. ' +
  'L’hôpital a fini par revenir à un système confidentiel, où chaque déclaration est examinée en interne et où seuls des chiffres globaux sont publiés. ' +
  'Dix-huit mois plus tard, les déclarations dépassaient leur niveau d’origine. ' +
  'Certaines informations n’existent que si l’on protège ceux qui les donnent. ' +
  'Les exposer toutes, c’est souvent se condamner à ne plus les recevoir.\n\n' +

  'Faut-il en conclure que les adversaires de la transparence avaient raison, et qu’il suffit de faire confiance ? ' +
  'Je ne le crois pas. ' +
  'Une confiance que l’on exige sans jamais rien montrer n’est pas de la confiance : c’est de la déférence. ' +
  'Et l’histoire des institutions ne manque pas d’exemples où le secret de la délibération a couvert des arrangements que personne n’aurait osé défendre en public. ' +
  'Si la délibération mérite d’être protégée, ce n’est pas parce que ceux qui délibèrent seraient au-dessus du soupçon, ' +
  'c’est parce que la qualité de leur travail l’exige. ' +
  'Cela fixe aussitôt les limites de cette protection : la confidentialité ne se justifie que si elle est provisoire et bornée. ' +
  'Elle couvre le temps où l’on cherche, pas celui où l’on a trouvé.\n\n' +

  'Concrètement, deux règles suffiraient à tenir ensemble ces exigences. ' +
  'La première serait une obligation de motiver : toute décision publique devrait être accompagnée d’un exposé de ses raisons, ' +
  'mentionnant les options envisagées et ce qui a conduit à les écarter. ' +
  'On ne verrait pas les élus hésiter, mais on saurait pourquoi ils ont tranché, et l’on pourrait discuter leurs arguments. ' +
  'La seconde serait une transparence différée : des procès-verbaux complets de chaque délibération, ' +
  'tenus dès la séance et ouverts au public après un délai fixé d’avance, quelques années par exemple. ' +
  'Celui qui parle en commission saurait que ses propos seront un jour connus, ce qui décourage les arrangements inavouables, ' +
  'mais pas assez tôt pour être jetés en pâture au débat du lendemain, ce qui lui laisse la liberté de chercher. ' +
  'Entre l’exposition permanente et le secret définitif, il existe donc une voie, qui consiste à rendre des comptes plutôt qu’à se donner en spectacle.\n\n' +

  'Cette distinction peut sembler subtile. Elle est pourtant décisive, car les deux exigences ne forment pas les mêmes habitudes. ' +
  'Une institution qu’on regarde travailler apprend à jouer un rôle ; une institution qui doit s’expliquer apprend à raisonner. ' +
  'La première soigne son image, choisit ses mots, évite tout ce qui pourrait être mal interprété. ' +
  'La seconde sait qu’on lui demandera un jour pourquoi, et que la seule réponse acceptable sera un argument. ' +
  'On objectera qu’une obligation de motiver peut produire, elle aussi, des textes creux, rédigés pour la forme. ' +
  'C’est vrai, et aucune règle ne remplace la vigilance de ceux qui lisent. ' +
  'Mais au moins cette vigilance trouve-t-elle alors un objet : des raisons, que l’on peut contester, plutôt qu’une mise en scène, devant laquelle on ne peut qu’applaudir ou siffler.\n\n' +

  'L’idéal de transparence est né d’une méfiance légitime, et il a rendu des services que je ne voudrais voir abandonner pour rien au monde. ' +
  'Mais il repose sur une image trompeuse, celle d’une institution qui serait d’autant plus vertueuse qu’elle serait plus visible. ' +
  'Une maison faite uniquement de vitres n’est pas une maison plus sincère ; c’est une maison où l’on ne vit plus, où l’on se contente de poser. ' +
  'La question n’est pas de savoir s’il faut plus ou moins de lumière, mais où la mettre : ' +
  'en pleine clarté sur ce qui a été décidé et sur ses raisons, derrière un rideau, pour un temps, sur ce qui se cherche encore. ' +
  'Une démocratie n’a pas besoin de voir ses représentants penser. ' +
  'Elle a besoin qu’ils lui doivent, tôt ou tard, le compte exact de ce qu’ils ont pensé.';

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
      label: 'Texte · La vitre et le rideau',
      text: CE_TEXT,
      items: [
        // 1 · Locate · 1 pt
        {
          q: 'Qu’a décidé la ville de Lorvanne-sur-Ance il y a trois ans ?',
          opts: [
            'Filmer et diffuser aussi les réunions où se préparent les décisions',
            'Remplacer les commissions par des séances ouvertes au public',
            'Raccourcir les réunions pour réduire les dépenses de la mairie',
          ],
          correct: 0,
          why: 'Le conseil était déjà retransmis ; la ville a décidé de filmer « toutes les réunions de ses commissions ». Les commissions demeurent ; la baisse de durée est un effet, pas un objectif.',
          band: 'c1',
          points: 1,
        },
        // 2 · Justify · Vrai · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? Depuis l’arrivée des caméras, les élus se rencontrent plus souvent hors de toute captation. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'les réunions dites préparatoires, sans caméra ni compte rendu, se sont multipliées',
            'Elle quitte la salle filmée pour les couloirs, les appels téléphoniques, les messageries privées',
          ],
          why: 'Les réunions préparatoires, sans caméra, « se sont multipliées » ; la délibération « se déplace ».',
          band: 'c1',
          points: 2,
        },
        // 3 · Reformulate · 2 pts
        {
          kind: 'short',
          q: 'Que veut dire l’élu de la majorité lorsqu’il compare la séance filmée à du « théâtre » ?',
          opts: [],
          correct: -1,
          keywords: [
            // No bare 'avance' (« les élus avancent des arguments ») or 'prepar' (« un spectacle préparé
            // pour le public »): both let a wrong reading through (review).
            ['a l avance', 'd avance', 'en avance', 'avant la seance', 'avant les seances', 'avant la reunion', 'avant les reunions', 'prealabl', 'deja decid', 'deja pris', 'deja regl', 'deja tranch', 'en amont', 'hors camera', 'coulisse', 'reunions prepar', 'reunion prepar', 'tout est regle', 'tout est decide', 'decide avant', 'decidee avant', 'decidees avant', 'regle avant'],
            ['representation', 'spectacle', 'jouee', 'jouent', 'mise en scene', 'comedie', 'apparence', 'facade', 'fiction', 'semblant', 'recit'],
          ],
          model: 'Que tout est décidé à l’avance, hors caméra, et que la séance publique n’est plus qu’une représentation jouée pour les spectateurs.',
          why: '« Tout est réglé avant. La séance, maintenant, c’est du théâtre. »',
          band: 'c1',
          points: 2,
        },
        // 4 · Attribute · 2 pts
        {
          q: 'Comment les partisans d’une transparence sans réserve interprètent-ils la durée réduite des réunions ?',
          opts: [
            'Comme la preuve que la caméra a chassé les discussions inutiles',
            'Comme le signe que les élus ne débattent plus réellement en séance',
            'Comme une économie bienvenue pour le budget de la commune',
          ],
          correct: 0,
          why: 'Des réunions « débarrassées des bavardages ». La deuxième option est la lecture de l’auteure, qu’elle leur oppose ; la troisième n’est dans aucun camp.',
          band: 'c1',
          points: 2,
        },
        // 5 · Attribute · 2 pts
        {
          kind: 'short',
          q: 'Quelle conclusion les adversaires de la transparence tirent-ils de l’expérience de Lorvanne ?',
          opts: [],
          correct: -1,
          keywords: [
            ['delib', 'discut', 'debat', 'echang', 'reflechi', 'decider librement'],
            ['discret', 'confidenti', 'secret', 'huis clos', 'a l abri', 'sans temoin', 'loin des regards', 'a l ecart', 'protege', 'a couvert'],
            // Free deliberation or trust, not a bare « need » word: « le secret empêche un vrai débat,
            // la transparence est nécessaire » and « la délibération se fait hors caméra, il faut le
            // dénoncer » met the old groups (review).
            ['librement', 'libre', 'liberte', 'sereine', 'franche', 'franchement', 'confiance', 'bien deliberer', 'bien debattre', 'bien discuter', 'delibere bien', 'discute bien'],
          ],
          model: 'Qu’une assemblée a besoin de discrétion pour délibérer librement, et qu’il vaut mieux faire confiance aux élus que les surveiller sans cesse.',
          why: '« On ne délibère bien qu’à l’abri des regards… il faut faire confiance à ceux que l’on a élus. »',
          band: 'c1',
          points: 2,
        },
        // 6 · Weigh · 3 pts
        {
          kind: 'short',
          q: 'Sur quelle distinction l’auteure fonde-t-elle sa propre position ?',
          opts: [],
          correct: -1,
          keywords: [
            ['resultat', 'decision', 'motif', 'motiv', 'raisons', 'comptes', 'depense', 'contrat', 'produit', 'aboutiss'],
            // No bare 'debat' or 'discussion': « entre les partisans et les adversaires du débat sur la
            // transparence des décisions » met both groups (review).
            ['delib', 'hesit', 'processus', 'en train de', 'coulisse', 'elaboration', 'essais', 'maniere de decider', 'facon de decider', 'comment elle decide', 'comment on decide', 'discussions internes', 'debats internes', 'fonctionnement'],
          ],
          model: 'Elle distingue la transparence des résultats (décisions, comptes, raisons des choix), qui améliore les institutions, et la transparence de la délibération elle-même, qui les rend prudentes et convenues.',
          why: '« Il faut distinguer au moins deux transparences » : sur ce que l’institution produit, et sur la manière dont elle délibère. Toute la suite du texte s’organise autour de cette distinction.',
          band: 'c1',
          points: 3,
        },
        // 7 · Justify · Faux · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? Selon l’auteure, rendre publiques les dépenses des élus n’a guère modifié leurs comportements. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'les dépenses de réception ont baissé de quarante pour cent en deux ans',
            'il a suffi que chacun sache que ses dépenses seraient lues',
            'elle modifie le comportement exactement là où il devait être modifié',
          ],
          why: 'L’auteure concède les effets de cette transparence-là : quarante pour cent de baisse en deux ans.',
          band: 'c1',
          points: 2,
        },
        // 8 · Reformulate · 2 pts
        {
          kind: 'short',
          q: 'Pourquoi, d’après l’auteure, les élus filmés arrivent-ils en séance avec un texte arrêté d’avance ?',
          opts: [],
          correct: -1,
          keywords: [
            ['cite', 'citee', 'citable', 'extrai', 'retenu', 'reprise', 'repris', 'ressort', 'enregistr', 'contre eux', 'archiv', 'trace'],
            // No 'adversaire' or 'opposition' alone: « l’opposition enregistre les séances pour les
            // archives » met both groups (review).
            ['changer d avis', 'change d avis', 'changent d avis', 'changement d avis', 'girouette', 'inconstan', 'incoheren', 'contredi', 'conced', 'concession', 'recul', 'revir', 'arme', 'provisoire', 'se tromper', 'maladress'],
          ],
          model: 'Parce que chaque phrase filmée peut être citée hors contexte et retenue contre eux : changer d’avis ou concéder un point à l’opposition les ferait passer pour inconstants.',
          why: '« Chaque phrase peut être extraite, citée hors de son contexte… l’élu qui change d’avis en séance passe pour une girouette. »',
          band: 'c1',
          points: 2,
        },
        // 9 · Infer · 2 pts
        {
          q: 'Quel paradoxe l’auteure relève-t-elle à propos de Lorvanne ?',
          opts: [
            'La recherche d’une transparence totale a rendu la décision plus opaque',
            'Les réunions filmées attirent moins d’habitants que les séances du conseil',
            'Les élus filmés improvisent davantage qu’ils ne le faisaient à huis clos',
          ],
          correct: 0,
          why: '« À Lorvanne, on en sait aujourd’hui moins qu’avant sur la manière dont les décisions se prennent. » Le public n’est pas évoqué ; la troisième option inverse « on y récite ».',
          band: 'c1',
          points: 2,
        },
        // 10 · Justify · Faux · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? À Valmérande, la publication des rapports d’incident a réduit le nombre d’erreurs commises dans les services. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'non parce que les erreurs étaient moins nombreuses, mais parce qu’on les déclarait moins',
            'le résultat fut l’inverse de celui qu’on attendait',
          ],
          why: 'Ce sont les déclarations qui ont baissé, pas les erreurs.',
          band: 'c1',
          points: 2,
        },
        // 11 · Justify · Vrai · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? L’auteure admet une part de secret dans la vie des institutions, pourvu qu’elle soit temporaire. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'la confidentialité ne se justifie que si elle est provisoire et bornée',
            'Elle couvre le temps où l’on cherche, pas celui où l’on a trouvé',
            'derrière un rideau, pour un temps, sur ce qui se cherche encore',
          ],
          why: 'Elle protège la délibération, mais seulement pour un temps.',
          band: 'c1',
          points: 2,
        },
        // 12 · Weigh · 3 pts · the proposal against the two camps
        {
          kind: 'short',
          q: 'Quelle solution l’auteure propose-t-elle, et en quoi se distingue-t-elle des deux positions présentées au début du texte ?',
          opts: [],
          correct: -1,
          keywords: [
            // Reasons for DECISIONS, archives after a DELAY: bare 'justifi', 'argument', 'plus tard'
            // and 'depass' passed « filmer toutes les réunions et justifier le secret plus tard, un
            // compromis » and « la transparence totale, avec archives et arguments » (review).
            ['motiv', 'justifier les decisions', 'justifier ses decisions', 'justifier chaque decision', 'justifier leurs decisions', 'expliquer les decisions', 'expliquer ses decisions', 'expliquer chaque decision', 'expliquer leurs decisions', 'raisons des decisions', 'raisons de ses decisions', 'raisons de chaque', 'raisons de leurs', 'raisons des choix', 'exposer ses raisons', 'exposer les raisons', 'donner ses raisons', 'donner les raisons', 'expliquer les raisons', 'expliquer leurs choix', 'expliquer ses choix', 'justifier leurs choix', 'justifier ses choix', 'justifier les choix', 'rendre des comptes', 'rendre compte'],
            // 'transparence differee', not 'en differe': « filmer tout en différé » is the misreading
            // a delayed broadcast invites (review, round 2).
            ['archiv', 'delai', 'apres un certain temps', 'quelques annees', 'transparence differee', 'publication differee', 'ouverture differee', 'ulterieurement', 'proces-verba', 'proces verba'],
            ['intermediaire', 'equilibr', 'concili', 'compromis', 'troisieme voie', 'milieu', 'mi-chemin', 'mi chemin', 'entre les deux', 'ni la transparence', 'ni le secret', 'ni l un', 'entre la transparence', 'entre transparence', 'entre l exposition'],
          ],
          model: 'Elle propose d’obliger les institutions à motiver publiquement leurs décisions et d’ouvrir plus tard les archives des délibérations : une voie intermédiaire entre la transparence totale et le secret durable.',
          why: 'Obligation de motiver et transparence différée : « Entre l’exposition permanente et le secret définitif, il existe donc une voie. »',
          band: 'c1',
          points: 3,
        },
      ],
    },
  ],
};
