// DALF C1 blanc-02: Compréhension de l’oral. 17 questions, 25 points, ~40 min.
//
// Part 1 (18 points): one long document, an interview, heard TWICE; 10
// questions, 4 MCQ (1.5, 1.5, 1, 2) and 6 short typed answers (2 each).
// Part 2 (7 points): two short radio extracts heard ONCE each, 3 + 4 MCQ at
// 1 point.
//
// ── durationS is ESTIMATED, not measured ────────────────────────────────────
//
// Nothing here has been rendered. Each durationS below is the spoken word count
// (labels stripped, spokenTranscript) at the ~175 wpm C1 rate of
// STANDARD-common §2, rounded up. The render pipeline overwrites it with the
// clip's real length; until then dalf/paper-rules.ts checks the estimate. The
// interview has real hesitations and will likely render a little slower per
// word than the flash (VOICES-dalf-c1 §2): there is about 50 s of headroom
// under the 600 s ceiling for that.
//
// ── Keys ────────────────────────────────────────────────────────────────────
//
// MCQ are authored key-first (correct: 0) next to their `why`, and paper.ts
// scatters them (scatterMcqKeys) the way the DELF papers do. Short answers
// carry `keywords` (every group met by one stem) and a `model` that meets them;
// paper.test.ts asserts it.
//
// ── Casting ─────────────────────────────────────────────────────────────────
//
// Part 1 is a mixed pair, as VOICES-dalf-c1 §1 asks: a woman host (f-media)
// who ASKS, and a man expert (m-formal) who argues. Part 2 names its genre in
// each part label, which is what examAudio.ts dalfGenreKey reads: the advert
// is cast on warm neutral voices, the flash on the band (media voice first).
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { C1_CO_TARGETS } from '../exam-c1-targets.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  level: 'c1' as const,
  examinerNotes: NOTES_CLOSED,
  targetItemIds: [...C1_CO_TARGETS],
};

/* ═══ PARTIE 1 · 18 points ═══════════════════════════════════════════════ */
//
// DALF-02 · an urbanist on the city at night: who it is lit, policed and
// timetabled for.
//
// The tension: the expert holds that the night city is planned for leisure and
// order while its largest population is at work. The host puts three
// positions to him that he does NOT hold (empty night buses cost too much;
// light means safety; the night is for sleeping) and he grants part of each
// before refusing its conclusion. Questions 4, 8 and 10 turn on keeping his
// view apart from the views he reports.
//
// INVENTED, all of it: the programme « Contre-jour », Radio Belvène, the town
// of Lorvigne, the Atelier des rythmes urbains, the urbanist Thibault Marrec,
// the study « La nuit des autres » and every figure in it (a little over 2,000
// people surveyed; 44 % travelling to or from work; about a third going out;
// last bus 0 h 40, first 5 h 20; monuments lit until 2 h; six women in ten
// changing route; a night mayor created two years ago; a peak near 4 h 30).
//
// Families: locate (1, 2, 7), reformulate (3, 5), infer (6), attribute (4, 8),
// weigh (9, 10). The first hearing yields 1, 2, 3, 5, 7; the second 4, 6, 8,
// 9, 10, which need the expert's view held apart from what he concedes.

const INTERVIEW =
  'UNE JOURNALISTE : Bonsoir et bienvenue dans « Contre-jour ». Ce soir, on parle de la ville au moment où elle est censée dormir. ' +
  'Mon invité est urbaniste, il dirige l’Atelier des rythmes urbains de Lorvigne, et il vient de publier une étude qui s’intitule, je cite, « La nuit des autres ». ' +
  'Thibault Marrec, bonsoir.\n' +
  'UN URBANISTE : Bonsoir.\n' +
  'UNE JOURNALISTE : Alors, « la nuit des autres », c’est un titre un peu mystérieux. Les autres, c’est qui ?\n' +
  'UN URBANISTE : Eh bien, c’est… c’est tous ceux à qui on ne pense pas quand on parle de la nuit en ville. ' +
  'Quand une municipalité parle de « vie nocturne », elle parle presque toujours de deux choses : la fête et la sécurité. ' +
  'Les bars, les festivals, les façades illuminées d’un côté ; les patrouilles et les caméras de l’autre. ' +
  'Et entre les deux, il y a une population énorme qui n’est ni en train de faire la fête ni en train de poser un problème d’ordre public. ' +
  'Elle est en train de travailler.\n' +
  'UNE JOURNALISTE : Les travailleurs de nuit.\n' +
  'UN URBANISTE : Les travailleurs de nuit, oui, mais pas seulement les infirmières et les boulangers auxquels tout le monde pense. ' +
  'Les agents d’entretien qui nettoient les bureaux avant six heures, les préparateurs dans les entrepôts, les livreurs, les gardiens… ' +
  // INVENTED: the survey size and the two shares below.
  'Dans notre enquête, on a interrogé un peu plus de deux mille personnes qui se déplacent à Lorvigne entre minuit et cinq heures. ' +
  'Quarante-quatre pour cent vont au travail ou en reviennent. Les sorties, la fête, ça représente à peu près un tiers. ' +
  'Donc la première nuit de la ville, en nombre, eh bien c’est une nuit laborieuse.\n' +
  'UNE JOURNALISTE : Et cette nuit-là, d’après vous, elle est mal servie.\n' +
  'UN URBANISTE : Elle est servie à contretemps, je dirais. Prenez les transports. ' +
  // INVENTED: the timetable.
  'Le dernier bus part du centre à minuit quarante, le premier repart à cinq heures vingt. ' +
  'C’est un horaire construit pour quelqu’un qui sort dîner et qui rentre se coucher. ' +
  'Euh, une femme qui termine le ménage d’un immeuble de bureaux à une heure et demie, elle, elle n’a rien. ' +
  'Elle marche, elle paie un taxi qu’elle n’a pas les moyens de se payer, ou elle attend dans un hall que le premier bus arrive.\n' +
  'UNE JOURNALISTE : Mais la réponse de la ville, c’est que les bus de nuit roulent à vide. ' +
  'Faire circuler un bus à trois heures du matin pour quatre passagers, ça coûte cher.\n' +
  'UN URBANISTE : Alors, c’est l’argument qu’on m’oppose à chaque fois, et il n’est pas absurde. ' +
  'Simplement, euh, il repose sur un comptage. Et ce comptage a été fait… sur les lignes qui existent, aux heures où elles existent. ' +
  'Évidemment qu’une ligne qui ne passe pas là où les gens travaillent est vide ! ' +
  'On mesure la demande là où on a déjà décidé qu’elle se trouvait. ' +
  'Les zones d’entrepôts, au nord, ne sont desservies par aucune ligne de nuit. Personne ne les a jamais comptées.\n' +
  'UNE JOURNALISTE : Venons-en à l’éclairage, parce que c’est là que votre étude a fait réagir. ' +
  'Beaucoup de communes éteignent une partie de leurs lampadaires au milieu de la nuit, pour économiser l’énergie, pour la biodiversité aussi. Vous êtes contre ?\n' +
  'UN URBANISTE : Non, et je tiens à le dire clairement, parce qu’on m’a fait dire le contraire. ' +
  'L’extinction, sur le principe, je la trouve défendable. On a éclairé pendant des décennies des rues où personne ne passait, c’était du gaspillage. ' +
  'Ce que je conteste, c’est la manière dont on choisit ce qu’on éteint. ' +
  'À Lorvigne, à une heure du matin, on coupe les lampadaires des rues résidentielles et des abords des zones d’activité. ' +
  // INVENTED: the hour the monuments go dark.
  'Et on laisse allumée… la mise en lumière des monuments du centre jusqu’à deux heures.\n' +
  'UNE JOURNALISTE : Pour les touristes ?\n' +
  'UN URBANISTE : Pour l’image, disons. Pour la carte postale de la ville. ' +
  'Résultat : on éclaire la cathédrale, que personne ne regarde à deux heures du matin, et on éteint l’arrêt de bus où quelqu’un attend. ' +
  'Ce n’est pas un choix technique, c’est un choix sur les gens qui comptent.\n' +
  'UNE JOURNALISTE : Vous pouvez préciser ? Parce que, quand on entend « éclairage », on pense spontanément sécurité. Plus de lumière, moins d’agressions.\n' +
  'UN URBANISTE : Justement, c’est ce que je voudrais nuancer. ' +
  'Les études dont on dispose sont beaucoup moins nettes qu’on ne le croit sur le lien entre la quantité de lumière et la délinquance. ' +
  'Ce qu’on observe en revanche très nettement, c’est le sentiment. ' +
  // INVENTED: six women in ten.
  'Dans notre enquête, six femmes sur dix disent modifier leur itinéraire la nuit, faire des détours, pour éviter une rue sombre. ' +
  'Donc la lumière ne protège peut-être pas autant qu’on le pense, mais son absence, elle, change concrètement la façon dont les gens se déplacent. ' +
  'Et ce sont toujours les mêmes qui font les détours.\n' +
  'UNE JOURNALISTE : J’entends parfois une autre position, chez certains élus : la nuit, c’est fait pour dormir. ' +
  'Une ville n’a pas à encourager l’activité nocturne, elle doit protéger le repos des habitants.\n' +
  'UN URBANISTE : Je comprends très bien d’où ça vient, et le repos est un vrai droit, je ne vais pas dire le contraire, ' +
  'les riverains des quartiers de bars en savent quelque chose. Mais, euh, cette position confond deux choses. ' +
  'Personne ne demande à la ville d’encourager le travail de nuit. Il existe, il est là, ' +
  'les hôpitaux et les entrepôts ne vont pas fermer parce que la mairie préfère qu’on dorme. ' +
  'La question, c’est seulement de savoir si on accompagne ceux qui sont déjà dehors ou si on fait comme s’ils n’existaient pas.\n' +
  'UNE JOURNALISTE : Plusieurs villes ont créé un poste de « maire de la nuit », un élu délégué à la vie nocturne. ' +
  'Lorvigne l’a fait il y a deux ans. Ce n’est pas la solution ?\n' +
  'UN URBANISTE : Ça pourrait l’être. Mais regardez avec qui ce maire de la nuit travaille : ' +
  'les exploitants de bars, les organisateurs de festivals, la police. ' +
  'Ce sont des interlocuteurs légitimes, hein, je ne dis pas le contraire. ' +
  'Mais les agents d’entretien n’ont pas de syndicat de la nuit, les intérimaires des entrepôts non plus. ' +
  'Ceux qui ne sont pas organisés ne sont pas autour de la table. ' +
  'Donc on a créé un maire de la nuit festive, et on a cru créer un maire de la nuit.\n' +
  'UNE JOURNALISTE : Si vous aviez un seul changement à proposer ?\n' +
  'UN URBANISTE : Compter autrement. Avant de décider quoi que ce soit, faire une vraie enquête sur qui est dehors à trois heures, où, et pour aller où. ' +
  'Pas devant les bars : aux arrêts de bus, aux sorties d’entrepôts, devant les hôpitaux. ' +
  'Je suis à peu près certain qu’on découvrirait une ville que les plans ne montrent pas. ' +
  'Et, comment dire… je crois qu’il faut cesser de penser la nuit comme un jour au ralenti. ' +
  'On a pris les horaires du jour et on les a raccourcis, on a pris l’éclairage du jour et on l’a baissé. ' +
  // INVENTED: the 4 h 30 peak.
  'Or la nuit a ses propres trajets, ses propres heures de pointe : il y en a une vers quatre heures et demie, quand les équipes du matin partent. ' +
  'Elle mérite d’être pensée pour elle-même.\n' +
  'UNE JOURNALISTE : Thibault Marrec, merci.\n' +
  'UN URBANISTE : Merci à vous.';

export const CO_PART1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  label: 'Compréhension de l’oral · Partie 1',
  prompt:
    'Vous allez entendre deux fois un document.\n' +
    'Vous écoutez une émission de radio consacrée à la ville la nuit.\n' +
    'Vous avez d’abord 3 minutes pour lire les questions. Après la première écoute, ' +
    'vous avez 3 minutes pour commencer à répondre. Après la seconde écoute, ' +
    'vous avez encore 5 minutes pour compléter vos réponses.\n' +
    'Pour les questions à réponse rédigée, répondez avec vos propres mots, en une ou deux phrases.',
  // 180 read + 2 × ~395 played + 180 + 300 answering, rounded up.
  timingS: 1500,
  parts: [
    {
      label: 'Document 1 · entretien',
      playCount: 2,
      readWindowS: 180,
      // ESTIMATED at 175 wpm from the spoken word count; not yet rendered.
      durationS: 395,
      text: INTERVIEW,
      items: [
        {
          q: 'Selon l’urbaniste, de quoi les municipalités parlent-elles presque toujours lorsqu’elles évoquent la « vie nocturne » ?',
          opts: [
            'Des loisirs festifs et du maintien de l’ordre',
            'Des horaires de travail et des transports',
            'Des économies d’énergie et de l’éclairage',
          ],
          correct: 0,
          why: 'Il le dit d’emblée : « la fête et la sécurité ». Les transports sont SON sujet, pas celui des municipalités ; l’éclairage vient plus tard et sous un autre angle.',
          band: 'c1',
          points: 1.5,
        },
        {
          kind: 'short',
          q: 'Quel résultat de son enquête l’urbaniste met-il en avant pour caractériser la population qui circule à Lorvigne entre minuit et cinq heures ?',
          opts: [],
          correct: -1,
          keywords: [
            ['44', 'quarante', 'moitie', 'majorite', 'plupart', 'premier'],
            ['travail', 'travaill', 'emploi', 'boulot', 'laborieu', 'professionn'],
          ],
          model: 'Près de la moitié des personnes interrogées (44 %) vont au travail ou en reviennent : la nuit est d’abord une nuit de travail, bien plus que de fête.',
          why: 'Quarante-quatre pour cent vont au travail ou en reviennent, contre environ un tiers pour les sorties.',
          band: 'c1',
          points: 2,
        },
        {
          kind: 'short',
          q: 'Pourquoi, selon l’urbaniste, les horaires des bus ne conviennent-ils pas à une partie des usagers ?',
          opts: [],
          correct: -1,
          keywords: [
            ['sort', 'diner', 'loisir', 'fete', 'soiree', 'rentre', 'couche'],
            ['travail', 'travaill', 'menage', 'emploi', 'salari', 'finiss', 'termin', 'equipe'],
          ],
          model: 'Ils sont pensés pour des gens qui sortent dîner et rentrent avant une heure du matin, pas pour ceux qui terminent ou commencent leur travail au milieu de la nuit.',
          why: 'Dernier bus à 0 h 40, premier à 5 h 20 : « un horaire construit pour quelqu’un qui sort dîner ». L’agente qui finit à 1 h 30 n’a rien.',
          band: 'c1',
          points: 2,
        },
        {
          q: 'Que reproche l’urbaniste à l’argument selon lequel les bus de nuit roulent à vide ?',
          opts: [
            'Il repose sur des comptages faits seulement là où des lignes passent déjà',
            'Il surestime nettement ce que coûte réellement un bus de nuit',
            'Il oublie que ces bus servent surtout aux personnes qui sortent',
          ],
          correct: 0,
          why: '« On mesure la demande là où on a déjà décidé qu’elle se trouvait. » Il ne conteste pas le coût (« il n’est pas absurde ») et soutient l’inverse de la troisième option.',
          band: 'c1',
          points: 1.5,
        },
        {
          kind: 'short',
          q: 'Quelle est la position de l’urbaniste sur le fait d’éteindre les lampadaires une partie de la nuit ?',
          opts: [],
          correct: -1,
          keywords: [
            ['principe', 'accept', 'defend', 'favorable', 'pas contre', 'approuv', 'justifi', 'legitim', 'bonne idee'],
            ['choix', 'choisi', 'monument', 'cathedrale', 'arret', 'lesquel', 'priorit', 'select', 'manier', 'ou on', 'quelles rues', 'resident'],
          ],
          model: 'Il l’accepte dans son principe, mais il conteste le choix de ce qu’on éteint : les rues résidentielles et les arrêts plutôt que les monuments.',
          why: '« L’extinction, sur le principe, je la trouve défendable. Ce que je conteste, c’est la manière dont on choisit ce qu’on éteint. »',
          band: 'c1',
          points: 2,
        },
        {
          kind: 'short',
          q: 'Que révèle, d’après l’urbaniste, le fait que les monuments du centre restent éclairés plus tard que certaines rues ?',
          opts: [],
          correct: -1,
          keywords: [
            ['image', 'carte postale', 'touris', 'prestige', 'vitrine', 'apparen', 'decor', 'esthet'],
            ['gens', 'personne', 'habitant', 'usager', 'travaill', 'arret', 'besoin', 'compt', 'pieton'],
          ],
          model: 'Que la ville privilégie son image touristique plutôt que les besoins des personnes qui circulent vraiment la nuit : c’est un choix sur les gens qui comptent.',
          why: '« Pour l’image… Ce n’est pas un choix technique, c’est un choix sur les gens qui comptent. »',
          band: 'c1',
          points: 2,
        },
        {
          q: 'Sur le lien entre éclairage et sécurité, que soutient l’urbaniste ?',
          opts: [
            'Que l’obscurité modifie surtout les trajets de certaines personnes',
            'Qu’un éclairage plus fort fait nettement reculer les agressions',
            'Que l’obscurité ne change rien à la manière de se déplacer',
          ],
          correct: 0,
          why: 'Le lien avec la délinquance est « beaucoup moins net » qu’on ne le croit, mais six femmes sur dix font des détours : c’est le trajet qui change. La deuxième option est l’opinion courante qu’il nuance.',
          band: 'c1',
          points: 1,
        },
        {
          kind: 'short',
          q: 'Comment l’urbaniste répond-il aux élus selon lesquels une ville n’a pas à favoriser l’activité nocturne ?',
          opts: [],
          correct: -1,
          keywords: [
            ['repos', 'droit', 'riverain', 'sommeil', 'dormir', 'comprend', 'reconnai', 'admet'],
            ['existe', 'deja', 'reel', 'inevitable', 'accompagn', 'ignor', 'dehors', 'quand meme', 'de toute facon'],
          ],
          model: 'Il admet que le repos des habitants est un droit, mais le travail de nuit existe déjà : il ne s’agit pas de l’encourager, seulement d’accompagner ceux qui sont dehors.',
          why: 'Il concède le droit au repos, puis distingue encourager et accompagner : « Il existe, il est là. »',
          band: 'c1',
          points: 2,
        },
        {
          kind: 'short',
          q: 'Quelle limite l’urbaniste voit-il au poste de « maire de la nuit » créé à Lorvigne ?',
          opts: [],
          correct: -1,
          keywords: [
            ['fete', 'festi', 'bar', 'loisir', 'police', 'exploitant'],
            ['travaill', 'interim', 'agent', 'represent', 'absent', 'exclu', 'table', 'oubli', 'organis', 'entendu', 'consult'],
          ],
          model: 'Il ne travaille qu’avec les bars, les festivals et la police ; les travailleurs de nuit, qui ne sont pas organisés, ne sont pas représentés. C’est un maire de la nuit festive.',
          why: '« Ceux qui ne sont pas organisés ne sont pas autour de la table. Donc on a créé un maire de la nuit festive. »',
          band: 'c1',
          points: 2,
        },
        {
          q: 'Quelle idée résume le mieux la conclusion de l’urbaniste ?',
          opts: [
            'La nuit doit être pensée selon ses propres rythmes, non comme un jour réduit',
            'La nuit doit devenir aussi active et aussi éclairée que le jour',
            'La ville doit d’abord garantir le repos de ceux qui dorment la nuit',
          ],
          correct: 0,
          why: '« Cesser de penser la nuit comme un jour au ralenti… Elle mérite d’être pensée pour elle-même. » La deuxième généralise à l’excès ; la troisième est la position des élus, qu’il rapporte sans l’adopter.',
          band: 'c1',
          points: 2,
        },
      ],
    },
  ],
};

/* ═══ PARTIE 2 · 7 points ════════════════════════════════════════════════ */
//
// Two extracts, two genres, heard once each: 50 s to read, the extract, 50 s
// to answer. Each is self-contained and carries exactly its answerable points.

// ── Document 1 · publicité (DALF-12) · 3 MCQ ───────────────────────────────
//
// INVENTED: the cooperative « L’Établi commun », the town of Vallorge, the
// 13-minute drill figure (attributed to the cooperative's own count), the
// 9-euro subscription, 300 tools, four collection points, the Saturday repair
// workshop, the members' vote, the free first month.

const ADVERT =
  'UN HOMME : Chérie, tu as vu la perceuse ? Je l’ai achetée il y a cinq ans…\n' +
  'UNE FEMME : Et tu t’en es servi combien de fois ?\n' +
  'UN HOMME : Euh… deux ? Pour l’étagère. Et pour la tringle, mais là c’est le voisin qui a percé.\n' +
  'UNE FEMME : Donc on a payé quatre-vingts euros pour un objet qui dort dans un placard.\n' +
  'UNE VOIX OFF : Vous n’êtes pas les seuls. ' +
  'Selon nos propres relevés, une perceuse domestique ne tourne en moyenne que treize minutes sur toute sa durée de vie. ' +
  'Treize minutes. Le reste du temps, elle prend la poussière. ' +
  'À Vallorge, la coopérative L’Établi commun vous propose autre chose : ' +
  'plus de trois cents outils, de la ponceuse à la tondeuse en passant par l’échafaudage, ' +
  'pour neuf euros par mois, sans engagement. ' +
  'Vous réservez en ligne, vous retirez votre outil dans l’un de nos quatre points relais, vous le rendez quand vous avez fini. ' +
  'Et parce qu’un outil qu’on partage est un outil qu’on entretient, ' +
  'notre atelier de réparation vous accueille tous les samedis matin pour apprendre à le régler, à l’affûter, à le remettre en état. ' +
  'L’Établi commun, ce n’est pas un magasin : c’est une coopérative. ' +
  'Chaque adhérent a une voix, et ce sont les adhérents qui votent, chaque année, la liste des outils à acheter. ' +
  'Vous trouvez qu’il manque une scie sauteuse ? Proposez-la.\n' +
  'UNE FEMME : Bon. Et la perceuse, on en fait quoi ?\n' +
  'UN HOMME : On la donne à l’Établi. Comme ça, elle servira enfin.\n' +
  'UNE VOIX OFF : L’Établi commun. Le premier mois est offert. Les outils, eux, ne sont plus jamais au placard.';

// ── Document 2 · flash d’information (DALF-14) · 4 MCQ ─────────────────────
//
// INVENTED: the Centre hospitalier de Mérangis, the fondation Ritournelle, the
// conservatoire students, two afternoons a week, the six-month trial, the
// 400 patients questioned, the 20-minute perceived-wait gap, the third fewer
// tense exchanges reported by staff, the director Nadine Courtil.

const FLASH =
  'UNE JOURNALISTE : Il est dix-huit heures, voici les informations régionales. ' +
  'Au Centre hospitalier de Mérangis, on ne vient plus seulement attendre aux urgences : on y écoute aussi de la musique. ' +
  'Depuis six mois, deux après-midi par semaine, des étudiants du conservatoire jouent en direct dans deux salles d’attente, ' +
  'celle des urgences adultes et celle de la pédiatrie. Violon, guitare, flûte : uniquement des instruments acoustiques, ' +
  'et des morceaux choisis pour rester discrets. ' +
  'L’expérience, financée par la fondation Ritournelle, devait durer trois mois. Elle vient d’être prolongée jusqu’à l’été. ' +
  'Les premiers résultats expliquent ce choix. ' +
  'Sur quatre cents patients interrogés, ceux qui ont attendu pendant un concert estiment leur attente plus courte d’une vingtaine de minutes que les autres, ' +
  'alors que la durée réelle est restée la même. ' +
  'Côté soignants, on rapporte environ un tiers d’échanges tendus en moins à l’accueil. ' +
  'Tout n’a pas été simple pour autant. Au début, certains patients se sont plaints d’un volume trop élevé, ' +
  'et les musiciens se sont d’abord installés trop près du bureau des infirmiers. ' +
  'Ils jouent désormais sans aucune amplification, dans un coin de la salle, et s’arrêtent dès qu’un soignant appelle un patient. ' +
  'La directrice de l’établissement, Nadine Courtil, tient pourtant à mettre en garde contre tout malentendu. ' +
  'UNE DIRECTRICE D’HÔPITAL : La musique rend l’attente plus supportable, c’est déjà beaucoup. ' +
  'Mais elle ne raccourcit pas d’une minute le temps qu’on passe ici. ' +
  'Ce qui raccourcit l’attente, ce sont des médecins et des infirmiers en nombre suffisant. ' +
  'Je ne voudrais pas qu’on nous offre des violons à la place des postes.\n' +
  'UNE JOURNALISTE : D’autres établissements de la région auraient déjà demandé à visiter le dispositif.';

export const CO_PART2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  label: 'Compréhension de l’oral · Partie 2',
  prompt:
    'Vous allez entendre une seule fois plusieurs documents radiophoniques courts.\n' +
    'Pour chaque document, vous avez 50 secondes pour lire les questions, ' +
    'puis vous entendez le document, puis vous avez 50 secondes pour répondre.\n' +
    'Cochez la bonne réponse.',
  // Per extract: 50 read + ~90 played + 50 answer, rounded up.
  timingS: 400,
  parts: [
    {
      label: 'Document 1 · publicité',
      playCount: 1,
      readWindowS: 50,
      // ESTIMATED at 175 wpm from the spoken word count; not yet rendered.
      durationS: 87,
      text: ADVERT,
      items: [
        {
          q: 'Que propose principalement la coopérative ?',
          opts: [
            'L’accès à de nombreux outils contre un abonnement mensuel',
            'La revente d’outils d’occasion donnés par des particuliers',
            'La location d’outils à la journée, avec livraison à domicile',
          ],
          correct: 0,
          why: '« Plus de trois cents outils… pour neuf euros par mois. » Le don de la perceuse est une chute comique, pas l’offre ; aucune livraison n’est évoquée.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'À quoi sert le chiffre des « treize minutes » dans cette publicité ?',
          opts: [
            'À montrer qu’acheter un outil si peu utilisé n’est pas rationnel',
            'À vanter la rapidité des outils fournis par la coopérative',
            'À indiquer le délai de réservation d’un outil en ligne',
          ],
          correct: 0,
          why: 'Treize minutes de fonctionnement sur toute la vie d’une perceuse : « le reste du temps, elle prend la poussière ». Les deux autres options détournent le chiffre.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Qu’est-ce qui distingue l’Établi commun d’un magasin, selon la publicité ?',
          opts: [
            'Les adhérents décident ensemble des outils à acquérir',
            'Les outils y sont prêtés gratuitement à tous les habitants',
            'Les adhérents s’engagent à réparer les outils qu’ils empruntent',
          ],
          correct: 0,
          why: '« Ce sont les adhérents qui votent, chaque année, la liste des outils à acheter. » L’abonnement est payant ; l’atelier de réparation est proposé, non imposé.',
          band: 'c1',
          points: 1,
        },
      ],
    },
    {
      label: 'Document 2 · flash d’information',
      playCount: 1,
      readWindowS: 50,
      // ESTIMATED at 175 wpm from the spoken word count; not yet rendered.
      durationS: 93,
      text: FLASH,
      items: [
        {
          q: 'Qu’a décidé l’hôpital au sujet de l’expérience ?',
          opts: [
            'De la prolonger au-delà de la durée prévue',
            'De l’étendre à tous ses services de soins',
            'De la confier désormais à des musiciens professionnels',
          ],
          correct: 0,
          why: 'Prévue pour trois mois, elle « vient d’être prolongée jusqu’à l’été ». Elle reste limitée à deux salles ; ce sont d’autres hôpitaux qui s’y intéressent.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Qu’a montré l’enquête menée auprès des patients ?',
          opts: [
            'Qu’ils jugent leur attente plus courte qu’elle ne l’est réellement',
            'Que leur temps d’attente réel a diminué d’une vingtaine de minutes',
            'Qu’ils préfèrent la musique enregistrée aux concerts en direct',
          ],
          correct: 0,
          why: 'Ils l’estiment plus courte d’une vingtaine de minutes « alors que la durée réelle est restée la même ». La deuxième option confond perçu et réel.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Comment l’expérience a-t-elle été modifiée après les premières plaintes ?',
          opts: [
            'Les musiciens jouent sans amplification et s’interrompent lors des appels',
            'Les concerts ont été déplacés vers une salle séparée de l’accueil',
            'Les patients peuvent désormais choisir les morceaux qui sont joués',
          ],
          correct: 0,
          why: '« Ils jouent désormais sans aucune amplification… et s’arrêtent dès qu’un soignant appelle un patient. » Ils restent dans la salle, dans un coin.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Que veut souligner la directrice de l’hôpital ?',
          opts: [
            'La musique ne remplace pas le personnel qui réduirait l’attente',
            'La musique devrait être financée par l’hôpital et non par une fondation',
            'La musique a permis de réduire nettement le nombre de soignants',
          ],
          correct: 0,
          why: '« Je ne voudrais pas qu’on nous offre des violons à la place des postes. » Elle ne parle pas du financement, et la troisième option inverse sa crainte.',
          band: 'c1',
          points: 1,
        },
      ],
    },
  ],
};
