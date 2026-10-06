// DALF C1 blanc-01 — Compréhension de l'oral. 17 questions, 25 points, ~40 min.
//
// Part 1 (18 points): one long document, an interview, played TWICE, with ten
// questions mixing three-option MCQ and short typed answers (4 + 6, the
// published pattern). Part 2 (7 points): two short radio extracts played ONCE,
// a news flash (3 MCQ) and a poll (4 MCQ). BLUEPRINT-dalf-c1 §3.
//
// ── Timings ─────────────────────────────────────────────────────────────────
//
//   part 1    180 s to read, play, 180 s, play, 300 s to finish
//   part 2    50 s to read, play once, 50 s to answer, per extract
//
// The durationS values below are AT-TARGET ESTIMATES (spoken words at 175 wpm,
// the C1 rate of STANDARD-common §2), not measured clips. The render pipeline
// replaces them with measured lengths; until then the clock and ceiling checks
// read these. VOICES-dalf-c1 §2: an interview with hesitations reads slower
// per word than a flash, so expect part 1 to measure a little long.
//
// ── Casting ─────────────────────────────────────────────────────────────────
//
// Part 1 is a mixed pair (a woman host, a man researcher), so the expert's
// view and the host's challenges never share a voice. Part 2 names its genre in
// the label (« flash d’information », « sondage ») because dalf casting reads
// the genre from the part label (examAudio.ts dalfGenreKey): the poll's
// presenter gets a media voice, its two respondents street voices.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, C1_CO_TARGETS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  level: 'c1' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ PARTIE 1 — 18 points · DALF-01 ══════════════════════════════════════ */
//
// An interview on a radio programme: memory as reconstruction, and what that
// does to eyewitness evidence. The researcher holds a position the host pushes
// on twice (« faut-il cesser d’écouter les témoins ? », « ma mémoire est
// défaillante ? »), which is what the attribute and weigh questions bite on.
//
// Weights (in document order):
//   1 MCQ 1    locate     the image of memory he rejects
//   2 short 2  reformulate what recall does to a memory
//   3 MCQ 1.5  infer      what the red-jacket experiment shows
//   4 short 2  locate     what surprised the team (confidence)
//   5 short 2  reformulate why a witness's confidence proves nothing
//   6 MCQ 1.5  attribute  his answer to « stop hearing witnesses »
//   7 short 2  locate     the two precautions for the first interview
//   8 MCQ 2    infer      why the lineup organiser must not know the suspect
//   9 short 2  weigh      why the fragility is not a defect
//  10 short 2  weigh      the status he gives testimony, in conclusion
//   = 1 + 2 + 1.5 + 2 + 2 + 1.5 + 2 + 2 + 2 + 2 = 18
//
// First hearing: 1, 3, 4, 7 (stated, local). Second hearing: 5, 6, 8, 9, 10
// (reasons, stance, the arc), which need the destination known first.
//
// INVENTED, all of it: the programme « Questions de fond », Radio Valmer, the
// researcher Mathieu Serval, the université de Pontcroix and its team, the
// Observatoire Delorme; the figures 120 participants, 4 in 10, 80 annulled
// convictions, « plus de la moitié ».

const P1_TEXT =
  'UNE JOURNALISTE : Bonsoir à toutes et à tous, et bienvenue dans « Questions de fond ». Ce soir, on parle de mémoire, et plus précisément de ce qu’elle vaut devant un tribunal. Mon invité dirige l’équipe Mémoire et témoignage à l’université de Pontcroix. Mathieu Serval, bonsoir.\n' +
  'UN CHERCHEUR : Bonsoir.\n' +
  'UNE JOURNALISTE : Alors, on se représente volontiers la mémoire comme une sorte de… d’enregistrement. On aurait vécu une scène, elle serait rangée quelque part, et se souvenir, ce serait la rejouer. Vous dites que c’est faux.\n' +
  'UN CHERCHEUR : Je dis que c’est une image commode et que, bon, qu’elle nous trompe. L’enregistrement, la vidéo, l’archive : toutes ces métaphores supposent qu’il existe un original intact, quelque part dans la tête, qu’il suffirait d’aller chercher. Or ce qu’on observe, c’est plutôt… comment dire… un récit qu’on réécrit chaque fois qu’on le raconte. Quand vous vous souvenez de quelque chose, vous ne retrouvez pas une copie. Vous reconstruisez la scène à partir de fragments, de deux ou trois détails saillants, et vous comblez les trous avec ce qui vous paraît vraisemblable.\n' +
  'UNE JOURNALISTE : Mais une fois le souvenir rappelé, il retourne à sa place, non ? Intact ?\n' +
  'UN CHERCHEUR : Justement non, et c’est le point le plus contre-intuitif. Ce qui est rangé de nouveau après un rappel, ce n’est pas l’ancienne version, c’est celle que vous venez de reconstruire, avec ses ajouts, ses petites retouches. Autrement dit, se souvenir, c’est déjà modifier. Le souvenir qu’on évoque le plus souvent n’est pas le mieux conservé : c’est le plus… retravaillé.\n' +
  'UNE JOURNALISTE : Vous pouvez reformuler pour nos auditeurs ? Parce que ça va à l’encontre de tout ce qu’on croit savoir.\n' +
  'UN CHERCHEUR : Bien sûr. Imaginez un texte dont vous n’avez aucune copie. Chaque fois que vous le lisez, vous le recopiez à la main, et vous jetez l’ancienne feuille. Au bout de vingt copies, vous avez un texte très lisible, très fluide, mais vous ne pouvez plus savoir ce qui figurait dans la première version. Voilà. La mémoire travaille un peu comme ça.\n' +
  'UNE JOURNALISTE : Et vous l’avez vérifié en laboratoire.\n' +
  'UN CHERCHEUR : Oui. L’an dernier, on a montré à cent vingt personnes un petit film, deux minutes à peine, où l’on voit un vol de sac dans une gare. Rien de spectaculaire. Une semaine plus tard, on leur a fait lire un compte rendu de la scène, soi-disant rédigé par un autre témoin, et dans ce compte rendu on avait glissé un détail faux : le voleur portait une veste rouge. Dans le film, sa veste est grise.\n' +
  'UNE JOURNALISTE : Et alors ?\n' +
  'UN CHERCHEUR : Alors, quand on les a interrogés de nouveau, quatre sur dix ont décrit une veste rouge. Ils ne mentaient pas, hein, je tiens à le dire : ils la voyaient. L’information reçue après coup s’était fondue dans le souvenir, au point qu’ils ne pouvaient plus la distinguer de ce qu’ils avaient réellement vu.\n' +
  'UNE JOURNALISTE : Quatre sur dix, c’est énorme.\n' +
  'UN CHERCHEUR : C’est beaucoup, mais ce n’est pas ce qui nous a le plus frappés. Ce qui nous a vraiment… pris de court, c’est que ceux qui avaient adopté la veste rouge en étaient aussi sûrs que les autres. Même aplomb, même précision dans la description. On leur demandait de noter leur certitude de un à dix et, euh, la moyenne était quasiment identique dans les deux groupes.\n' +
  'UNE JOURNALISTE : Et c’est là que ça devient grave pour la justice.\n' +
  'UN CHERCHEUR : C’est là, oui. Parce que dans un procès, qu’est-ce qui convainc un jury ? Un témoin qui dit, les yeux dans les yeux : « C’est lui, j’en suis sûr. » Or cette assurance-là, elle se fabrique. Pensez au parcours d’un témoin : il raconte la scène aux policiers le soir même, puis à ses proches, puis à un enquêteur, puis au juge, et parfois deux ans plus tard à l’audience. À chaque récit, la version se lisse, les hésitations disparaissent, et le témoin gagne en aplomb. Il ne gagne pas en exactitude, hein. Il gagne en aplomb.\n' +
  'UNE JOURNALISTE : L’Observatoire Delorme, qui étudie les erreurs judiciaires, avance d’ailleurs un chiffre assez frappant.\n' +
  'UN CHERCHEUR : Oui. Sur les quatre-vingts condamnations annulées qu’il a examinées, plus de la moitié reposaient d’abord sur un témoin oculaire. Sincère, et sûr de lui. Pas un menteur : quelqu’un de parfaitement de bonne foi.\n' +
  'UNE JOURNALISTE : Alors faut-il, tout simplement, cesser d’écouter les témoins ? Si leur mémoire est à ce point malléable…\n' +
  'UN CHERCHEUR : Non, et je voudrais être très clair là-dessus, parce qu’on me le fait dire souvent. Le témoignage reste précieux. C’est même, bien souvent, le seul élément dont on dispose au début d’une enquête. Ce qui est fragile, ce n’est pas le témoin, c’est la façon dont on recueille sa parole. Un témoignage recueilli tôt, sans suggestion, vaut beaucoup. Le même, deux ans et dix interrogatoires plus tard, vaut beaucoup moins… et pourtant il paraît plus solide.\n' +
  'UNE JOURNALISTE : Concrètement, qu’est-ce qu’il faudrait changer ?\n' +
  'UN CHERCHEUR : Deux choses simples, d’abord, pour le tout premier entretien. La première, c’est de filmer ce premier récit en entier, du début à la fin, pour qu’on puisse toujours revenir à ce que la personne a dit avant toute influence. Aujourd’hui, on dispose le plus souvent d’un procès-verbal, c’est-à-dire d’un résumé rédigé par l’enquêteur, avec ses mots à lui. La seconde, c’est de poser des questions ouvertes. « Décrivez-moi ce que vous avez vu », et non pas « Est-ce qu’il avait une veste rouge ? ». Une question fermée, c’est déjà une information qu’on donne au témoin.\n' +
  'UNE JOURNALISTE : Et pour les identifications ? Les fameuses présentations de suspects, derrière une vitre ?\n' +
  'UN CHERCHEUR : Alors là, il y a une règle que je défends depuis des années : la personne qui organise la présentation ne doit pas savoir lequel est le suspect. Ce n’est pas une question de… de soupçon envers les policiers, pas du tout. Mais quelqu’un qui sait va, sans le vouloir, se pencher un peu, marquer un temps, sourire au moment où le témoin s’arrête devant le bon visage. Et le témoin, qui est dans une très grande incertitude, lit ces signaux. Il les lit même très bien.\n' +
  'UNE JOURNALISTE : Je vous écoute, et j’avoue que c’est un peu vertigineux, au-delà des tribunaux. Si mes propres souvenirs se réécrivent à chaque fois, qu’est-ce qui me reste ? En somme, ma mémoire est défaillante.\n' +
  'UN CHERCHEUR : Je comprends le vertige, mais je dirais plutôt l’inverse. Une mémoire qui conserverait tout tel quel serait, euh… inutilisable, en fait. Notre mémoire n’a pas été faite pour témoigner. Elle a été faite pour nous aider à agir, à prévoir ce qui va se passer. Et pour ça, il vaut mieux garder l’essentiel d’une situation et pouvoir le recombiner avec ce qu’on apprend ensuite, plutôt que de stocker une archive figée. Ce qui est un défaut dans un tribunal est une qualité dans la vie. Le problème, c’est qu’on demande à la justice de se servir d’un outil pour ce qu’il ne sait pas faire.\n' +
  'UNE JOURNALISTE : Pour conclure, si vous deviez dire en une phrase ce qu’un juge devrait faire d’un témoignage ?\n' +
  'UN CHERCHEUR : En une phrase… Le traiter comme un indice, comme une piste à vérifier, et jamais comme une preuve qui se suffirait à elle-même. Un témoignage qui concorde avec d’autres éléments, des images, des traces, des horaires, très bien. Un témoignage seul, aussi sincère soit-il, ne devrait pas suffire à condamner quelqu’un.\n' +
  'UNE JOURNALISTE : Mathieu Serval, merci.\n' +
  'UN CHERCHEUR : Merci à vous.';

const P1_DURATION_S = 411; // ESTIMATE: 1198 spoken words at 175 wpm. Replace with the measured clip.

export const CO_P1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  label: 'Compréhension de l’oral · Partie 1',
  prompt:
    'Vous allez entendre 2 fois un document.\n' +
    'Vous écoutez un entretien diffusé à la radio.\n' +
    'Vous avez d’abord 3 minutes pour lire les questions. Après la première écoute, vous avez 3 minutes pour commencer à répondre. Après la seconde écoute, vous avez 5 minutes pour compléter vos réponses.\n' +
    'Répondez aux questions en cochant la bonne réponse ou en écrivant l’information demandée.',
  timingS: 180 + 2 * P1_DURATION_S + 480,
  targetItemIds: [...C1_CO_TARGETS],
  parts: [
    {
      label: 'Document · entretien sur la mémoire des témoins',
      playCount: 2,
      readWindowS: 180,
      durationS: P1_DURATION_S,
      text: P1_TEXT,
      items: [
        {
          // Q1 · locate. Key-first; scattered in paper.ts.
          q: 'À quelle représentation de la mémoire le chercheur s’oppose-t-il ?',
          opts: [
            'Celle d’un enregistrement que l’on pourrait rejouer à l’identique',
            'Celle d’un récit que l’on retravaille chaque fois qu’on l’évoque',
            'Celle d’une faculté qui s’affaiblit lorsqu’on cesse de l’exercer',
          ],
          correct: 0,
          why: 'Il récuse l’enregistrement, la vidéo, l’archive. Le récit réécrit est SA thèse (et non ce qu’il combat) ; l’affaiblissement faute d’exercice n’est pas évoqué.',
          band: 'c1',
          points: 1,
        },
        {
          // Q2 · reformulate. Two ideas: rebuilt; the rebuilt version replaces the old.
          kind: 'short',
          q: 'D’après le chercheur, qu’arrive-t-il à un souvenir chaque fois qu’on se le remémore ? Répondez avec vos propres mots.',
          opts: [],
          correct: -1,
          keywords: [
            ['reconstr', 'recompos', 'reconstitu', 'rebati', 'refai', 'reecri', 'recre', 'retravaill', 'refabriqu', 'retouch', 'remani'],
            ['remplac', 'ecras', 'efface', 'perd', 'disparai', 'nouvelle version', 'range', 'stock', 'enregistr', 'sauvegard', 'conserv', 'garde', 'memoris', 'jete'],
          ],
          model: 'On le reconstruit à partir de fragments, et c’est cette nouvelle version qui est conservée à la place de l’ancienne.',
          why: 'Le souvenir est reconstruit, puis la version reconstruite est rangée de nouveau : l’original est perdu.',
          band: 'c1',
          points: 2,
        },
        {
          // Q3 · infer.
          q: 'Que montre, selon le chercheur, l’expérience de la veste rouge ?',
          opts: [
            'Une information apprise après coup peut se mêler au souvenir sans qu’on s’en aperçoive.',
            'Les participants ont décrit une veste rouge pour se conformer au récit d’un autre témoin.',
            'Les couleurs font partie des détails qu’une mémoire retient le moins bien.',
          ],
          correct: 0,
          why: 'L’information reçue après coup « s’était fondue dans le souvenir ». Il précise qu’ils ne mentaient pas (pas de conformisme volontaire) ; rien n’est dit des couleurs en général.',
          band: 'c1',
          points: 1.5,
        },
        {
          // Q4 · locate. Two ideas: the FALSE detail, held with the SAME certainty.
          kind: 'short',
          q: 'Qu’est-ce qui a le plus frappé l’équipe dans les résultats de cette expérience ?',
          opts: [],
          correct: -1,
          keywords: [
            ['faux', 'fausse', 'erron', 'invent', 'inexact', 'fictif', 'rouge', 'ajout', 'mauvais'],
            ['certain', 'certitud', 'assur', 'confian', 'convaincu', 'persuad', 'aplomb', 'surs', 'sure'],
          ],
          model: 'Ceux qui avaient adopté le faux détail en étaient tout aussi certains que ceux qui se souvenaient correctement.',
          why: 'Ce n’est pas la proportion (quatre sur dix) mais l’égalité de certitude entre souvenirs justes et faux.',
          band: 'c1',
          points: 2,
        },
        {
          // Q5 · reformulate. Two ideas: retelling; confidence GROWS (not accuracy).
          kind: 'short',
          q: 'Pourquoi, selon le chercheur, l’assurance d’un témoin à l’audience ne garantit-elle pas qu’il dise vrai ?',
          opts: [],
          correct: -1,
          keywords: [
            ['racont', 'recit', 'repet', 'redi', 'reprend', 'interrog', 'audition', 'entretien', 'version', 'force de'],
            ['augment', 'grandi', 'croiss', 'renforc', 'gagn', 'progress', 'monte', 'accroi', 'consolid', 'lisse', 'fabriqu'],
          ],
          model: 'Parce que sa certitude grandit à force de raconter son histoire, sans que son souvenir devienne plus exact.',
          why: 'À chaque récit la version se lisse et le témoin « gagne en aplomb », pas en exactitude.',
          band: 'c1',
          points: 2,
        },
        {
          // Q6 · attribute: the host's suggestion, and his rejection of it.
          q: 'Comment le chercheur accueille-t-il l’idée de ne plus écouter les témoins ?',
          opts: [
            'Il la rejette : c’est la manière de recueillir leur parole qui pose problème.',
            'Il l’accepte pour les procès qui se tiennent longtemps après les faits.',
            'Il la juge fondée, mais inapplicable au début d’une enquête.',
          ],
          correct: 0,
          why: 'Il refuse nettement (« Non, et je voudrais être très clair ») : le témoin n’est pas en cause, le recueil l’est. Le témoignage tardif « vaut beaucoup moins » mais il ne propose pas de l’écarter ; il ne juge jamais l’idée fondée.',
          band: 'c1',
          points: 1.5,
        },
        {
          // Q7 · locate. Two ideas: film the whole first account; open questions.
          kind: 'short',
          q: 'Quelles sont les deux précautions que le chercheur recommande pour le tout premier entretien avec un témoin ?',
          opts: [],
          correct: -1,
          keywords: [
            ['film', 'enregistr', 'video', 'camera', 'integral', 'en entier'],
            ['ouvert', 'sugger', 'orient', 'influenc', 'souffl', 'indui', 'neutre', 'libre', 'sans detail'],
          ],
          model: 'Filmer le premier récit en entier, et poser des questions ouvertes qui ne suggèrent aucun détail.',
          why: 'Filmer le récit du début à la fin, au lieu d’un procès-verbal résumé ; poser des questions ouvertes, car une question fermée donne déjà une information.',
          band: 'c1',
          points: 2,
        },
        {
          // Q8 · infer.
          q: 'Pourquoi la personne qui organise une présentation de suspects ne doit-elle pas savoir lequel est le suspect ?',
          opts: [
            'Parce qu’elle risquerait d’orienter le témoin par des signes involontaires.',
            'Parce que les enquêteurs sont souvent soupçonnés de vouloir un coupable.',
            'Parce que le témoin doit pouvoir hésiter longtemps sans se sentir pressé.',
          ],
          correct: 0,
          why: 'Quelqu’un qui sait se trahit sans le vouloir, et le témoin lit ces signaux. Il écarte expressément le soupçon envers les policiers ; l’hésitation du témoin n’est pas la raison donnée.',
          band: 'c1',
          points: 2,
        },
        {
          // Q9 · weigh. Two ideas: made for acting / anticipating; not for keeping an exact record.
          kind: 'short',
          q: 'Pourquoi le chercheur refuse-t-il de parler d’une mémoire défaillante ?',
          opts: [],
          correct: -1,
          keywords: [
            ['agir', 'action', 'avenir', 'futur', 'anticip', 'prevoir', 'prevo', 'adapt', 'vivre', 'quotidien'],
            ['archiv', 'fidel', 'exact', 'tel quel', 'conserv', 'fige', 'temoign', 'enregistr', 'identique', 'stock'],
          ],
          model: 'Parce que la mémoire est faite pour agir et anticiper l’avenir, pas pour conserver le passé à l’identique.',
          why: 'Une mémoire qui conserverait tout serait inutilisable ; elle sert à agir et prévoir. Ce qui est un défaut au tribunal est une qualité dans la vie.',
          band: 'c1',
          points: 2,
        },
        {
          // Q10 · weigh. Two ideas: a clue; to be checked against other evidence.
          kind: 'short',
          q: 'En conclusion, quel statut le chercheur souhaite-t-il donner au témoignage dans un procès ?',
          opts: [],
          correct: -1,
          keywords: [
            ['indice', 'piste', 'element', 'hypoth', 'point de depart', 'renseignement'],
            ['verif', 'corrobor', 'confirm', 'recoup', 'croise', 'control', 'etay', 'concord', 'autres preuves', 'compar'],
          ],
          model: 'Celui d’un indice qu’il faut vérifier par d’autres éléments, et non d’une preuve suffisante à elle seule.',
          why: 'Un indice, une piste à vérifier ; un témoignage seul ne devrait pas suffire à condamner.',
          band: 'c1',
          points: 2,
        },
      ],
    },
  ],
};

/* ═══ PARTIE 2 — 7 points · DALF-10, DALF-11 ══════════════════════════════ */
//
// Two extracts, two genres, each heard once and self-contained: a news flash
// (3 MCQ) and a poll with two respondents (4 MCQ). One point each.
//
// INVENTED, all of it. Flash: the city of Lorvel, the Observatoire Garance des
// déplacements, accidents -27 %, noise -2 décibels, +40 seconds per crossing,
// +2 minutes on bus line 4, regional traffic -8 %. Poll: the institut Sondal,
// the daily « L’Écho de l’estuaire », the agglomeration of Port-Aveline,
// 4 euros a month, 52 % overall, 64 % of 18-34, 51 % of 35-64, 38 % of 65+,
// opening in 2031, « un sur cinq ».

const X1_TEXT =
  'UNE PRÉSENTATRICE : Il y a un an jour pour jour, Lorvel limitait la vitesse à trente kilomètres-heure dans toutes ses rues, à l’exception de deux grands boulevards. L’Observatoire Garance des déplacements publie ce matin son premier bilan, et il est plutôt flatteur pour la municipalité. Les accidents avec blessés ont reculé de vingt-sept pour cent, et le bruit relevé le long des axes résidentiels a baissé de deux décibels en moyenne, ce qui, à l’oreille, est loin d’être négligeable. Quant à la crainte la plus répandue avant la réforme, celle d’une ville paralysée, elle ne se vérifie pas : une traversée complète de Lorvel en voiture prend en moyenne une quarantaine de secondes de plus qu’auparavant. Les bus, en revanche, ont davantage souffert : la ligne 4 perd près de deux minutes aux heures de pointe. La mairie annonce qu’elle maintient la mesure et qu’elle revoit, dès la rentrée, les horaires de cette ligne. L’observatoire, lui, appelle à la prudence. Le trafic automobile a baissé de huit pour cent cette année dans toute la région, y compris dans des villes qui n’ont rien changé, et une partie du recul des accidents tient sans doute à cette baisse générale. Un an, conclut-il, c’est trop court pour faire la part des choses.';

const X2_TEXT =
  'UN PRÉSENTATEUR : Seriez-vous prêts à payer une taxe locale pour financer la future ligne de tramway de Port-Aveline ? C’est la question posée par l’institut Sondal pour L’Écho de l’estuaire. Pour quatre euros par mois et par foyer, cinquante-deux pour cent des habitants répondent oui. Un oui de justesse, donc, et qui cache de fortes différences selon l’âge : soixante-quatre pour cent chez les dix-huit à trente-quatre ans, cinquante et un pour cent chez les trente-cinq à soixante-quatre ans, mais trente-huit pour cent seulement chez les plus de soixante-cinq ans. Et ce n’est pas d’abord le montant qui les arrête : la raison la plus souvent citée par les plus âgés, c’est que la ligne n’ouvrira qu’en 2031 et qu’ils ne pensent pas en profiter. Le coût n’arrive qu’en deuxième position, cité par un sur cinq. Nous sommes allés écouter les habitants.\n' +
  'UNE PASSANTE : Moi, je paierais, oui. La ligne passera juste devant ma fac, alors forcément… Mais à une condition : que la taxe s’arrête une fois la ligne payée. Les taxes provisoires, on sait comment ça finit, elles restent.\n' +
  'UN PASSANT : J’ai soixante-dix-huit ans, je ne vais pas vous raconter que je prendrai ce tram tous les matins, hein. Mais mes petits-enfants vivent ici, et ceux des voisins aussi. On a bien profité, nous, de ce que nos parents ont payé. Alors oui, je paierai. C’est mon tour.';

const X1_DURATION_S = 71; // ESTIMATE: 208 spoken words at 175 wpm.
const X2_DURATION_S = 77; // ESTIMATE: 224 spoken words at 175 wpm.

export const CO_P2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  label: 'Compréhension de l’oral · Partie 2',
  prompt:
    'Vous allez entendre une seule fois plusieurs courts extraits radiophoniques.\n' +
    'Pour chaque extrait, vous avez 50 secondes pour lire les questions, puis vous écoutez l’extrait, puis vous avez 50 secondes pour répondre.\n' +
    'Cochez la bonne réponse.',
  timingS: 50 + X1_DURATION_S + 50 + 50 + X2_DURATION_S + 50,
  targetItemIds: [...C1_CO_TARGETS],
  parts: [
    {
      label: 'Document 1 · flash d’information',
      playCount: 1,
      readWindowS: 50,
      durationS: X1_DURATION_S,
      text: X1_TEXT,
      items: [
        {
          q: 'D’après le bilan, combien de temps faut-il désormais en plus pour traverser la ville en voiture ?',
          opts: ['Une quarantaine de secondes', 'Près de deux minutes', 'Environ quatre minutes'],
          correct: 0,
          why: 'Quarante secondes en voiture. Deux minutes, c’est la perte de la ligne de bus aux heures de pointe ; quatre est le numéro de la ligne.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Quelle décision la mairie annonce-t-elle ?',
          opts: [
            'Elle conserve la limitation et modifie les horaires d’une ligne de bus.',
            'Elle étend la limitation aux deux boulevards qui en étaient exclus.',
            'Elle suspend la limitation en attendant un bilan plus complet.',
          ],
          correct: 0,
          why: 'La mairie maintient la mesure et revoit les horaires de la ligne 4. Les boulevards restent exclus ; c’est l’observatoire, non la mairie, qui juge un an trop court.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Pourquoi l’observatoire invite-t-il à la prudence ?',
          opts: [
            'Une partie de la baisse des accidents pourrait venir d’un recul général du trafic.',
            'Les relevés de bruit n’ont été effectués que le long de quelques axes résidentiels.',
            'Les accidents ont augmenté sur les deux boulevards restés à cinquante.',
          ],
          correct: 0,
          why: 'Le trafic a baissé de huit pour cent dans toute la région, même là où rien n’a changé. Les relevés de bruit ne sont pas mis en doute ; rien n’est dit des accidents sur les boulevards.',
          band: 'c1',
          points: 1,
        },
      ],
    },
    {
      label: 'Document 2 · sondage',
      playCount: 1,
      readWindowS: 50,
      durationS: X2_DURATION_S,
      text: X2_TEXT,
      items: [
        {
          q: 'Quelle part des habitants interrogés accepterait la taxe ?',
          opts: ['Un peu plus de la moitié', 'Près des deux tiers', 'Un peu plus d’un tiers'],
          correct: 0,
          why: 'Cinquante-deux pour cent en tout. Près des deux tiers, ce sont les 18-34 ans ; un peu plus d’un tiers, les plus de 65 ans.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Quelle raison les plus de soixante-cinq ans avancent-ils le plus souvent pour refuser ?',
          opts: [
            'Ils ne pensent pas pouvoir profiter de la ligne.',
            'Ils trouvent le montant demandé trop élevé.',
            'Ils redoutent la gêne causée par le chantier.',
          ],
          correct: 0,
          why: 'La ligne n’ouvrira qu’en 2031. Le coût n’arrive qu’en deuxième position ; le chantier n’est pas évoqué.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'À quelle condition la jeune femme accepterait-elle de payer ?',
          opts: [
            'Que la taxe soit supprimée une fois la ligne financée',
            'Que les étudiants soient dispensés de la taxe',
            'Que la ligne desserve directement son université',
          ],
          correct: 0,
          why: 'Elle veut que la taxe s’arrête une fois la ligne payée. La ligne passe déjà devant sa fac (dit, mais ce n’est pas une condition) ; aucune dispense n’est demandée.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Pourquoi l’homme âgé se dit-il prêt à payer ?',
          opts: [
            'Il pense aux générations qui profiteront de la ligne après lui.',
            'Il compte emprunter le tramway dès son ouverture.',
            'Il estime que la taxe évitera une hausse des impôts.',
          ],
          correct: 0,
          why: 'Il pense à ses petits-enfants et rend ce que ses parents ont payé. Il dit expressément qu’il ne prendra pas le tram tous les matins ; les impôts ne sont pas évoqués.',
          band: 'c1',
          points: 1,
        },
      ],
    },
  ],
};
