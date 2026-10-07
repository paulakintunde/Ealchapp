// DALF C1 blanc-03: Compréhension de l’oral. 17 questions, 25 points, ~40 min.
//
// Part 1 (18 points): one long document, an interview, heard TWICE; 10
// questions, 4 MCQ (1, 1.5, 1.5, 2) and 6 short typed answers (2 each), the
// published pattern. Part 2 (7 points): two short radio extracts heard ONCE
// each, a chronicle (3 MCQ) and a poll (4 MCQ), 1 point each.
// BLUEPRINT-dalf-c1 §3.
//
// ── Timings ─────────────────────────────────────────────────────────────────
//
//   part 1    180 s to read, play, 180 s, play, 300 s to finish
//   part 2    50 s to read, play once, 50 s to answer, per extract
//
// ── durationS is ESTIMATED, not measured ────────────────────────────────────
//
// Nothing here has been rendered. Each durationS below is the spoken word count
// (labels stripped, spokenTranscript) at the ~175 wpm C1 rate of
// STANDARD-common §2, rounded up; paper.test.ts asserts each estimate still
// matches its text. The render pipeline replaces them with measured lengths.
// An interview with hesitations reads slower per word than a chronicle
// (VOICES-dalf-c1 §2): the three documents leave about 50 s of headroom under
// the 600 s ceiling for that.
//
// ── Keys ────────────────────────────────────────────────────────────────────
//
// MCQ are authored key-first (correct: 0) next to their `why`, and paper.ts
// places them with scatterMcqKeys (per part, no A-B-C run). Short answers carry
// `keywords` (every group met by one stem) and a `model` that meets them. Every
// keyword set was probed against plausible right and wrong answers in
// scratch (dalf-blanc03/probe-keywords.mts, then review-dalf-blanc03/probe.ts).
// Key words cannot see a reversal without a negation word (« ont peu
// d’effet », roles swapped between two actors); those still pass, by design
// of the marker, not of the sets.
//
// ── Casting ─────────────────────────────────────────────────────────────────
//
// Part 1 is a mixed pair, as VOICES-dalf-c1 §1 asks: a woman host (f-media)
// who ASKS, and a man economist (m-formal) who argues. Part 2 names its genre
// in each part label, which is what examAudio.ts dalfGenreKey reads: the poll
// is cast as `dalf-poll` (media presenter, street respondents), the chronicle
// stays on the c1 band order. Every speaker turn starts on its own line with
// its label, so no label is ever read aloud by the wrong voice.
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
  targetItemIds: [...C1_CO_TARGETS],
};

/* ═══ PARTIE 1 · 18 points · DALF-03 ═════════════════════════════════════ */
//
// An economist on « free » services paid for with attention and data, and
// whether that price can be shown. The tension: he holds that the user is a
// customer paying in time, and proposes a monthly « étiquette ». The host puts
// four positions to him (the « vous êtes le produit » formula, that four euros
// will reassure, a paid ad-free tier, that adults are free) and he grants part
// of each before refusing its conclusion. Questions 1, 6, 7 and 8 turn on
// keeping his view apart from the views put to him.
//
// Weights (in document order):
//   1 MCQ 1    locate      what he objects to in the « produit » formula
//   2 short 2  reformulate what users pay with; what the data are for
//   3 MCQ 1.5  infer       why a free service wants you to stay
//   4 short 2  infer       what the 3 € / 45 € gap reveals
//   5 short 2  locate      the two things the label would show
//   6 short 2  attribute   why hours first, not euros (the host's objection)
//   7 MCQ 1.5  attribute   his view of a paid ad-free version
//   8 short 2  reformulate why user and service are not equals
//   9 MCQ 2    infer       the lesson of the Observatoire Pradel trial
//  10 short 2  weigh       the aim he gives his work, in conclusion
//   = 1 + 2 + 1.5 + 2 + 2 + 2 + 1.5 + 2 + 2 + 2 = 18
//
// First hearing: 1, 2, 5, 7 (stated, local). Second hearing: 3, 4, 6, 8, 9, 10
// (reasons, stance, the arc).
//
// INVENTED, all of it: the programme « L’Heure des comptes », the economist
// Bertrand Ollivaux, the université de Montvalier, his book « Le Prix de
// l’invisible », the Observatoire Pradel des usages numériques; the figures
// 900 people surveyed, medians of 3 € (to keep) and 45 € (to give up for a
// month), « quinze fois plus », 31 hours a month bringing in about 4 €, one
// user in three cutting about 20 minutes a day, the effect gone after two
// months.

const P1_TEXT =
  'UNE JOURNALISTE : Bonsoir à toutes et à tous, et bienvenue dans « L’Heure des comptes ». Messagerie, moteur de recherche, vidéos, cartes : la plupart des services que nous utilisons chaque jour sur nos téléphones ne nous coûtent pas un centime. Mon invité affirme pourtant que nous les payons très cher. Il est économiste à l’université de Montvalier et vient de publier « Le Prix de l’invisible ». Bertrand Ollivaux, bonsoir.\n' +
  'UN ÉCONOMISTE : Bonsoir.\n' +
  'UNE JOURNALISTE : Alors, vous connaissez la formule, tout le monde la répète : « Si c’est gratuit, c’est vous le produit. » C’est un peu votre thèse, non ?\n' +
  'UN ÉCONOMISTE : C’est… disons que c’est une formule qui a rendu service et qui est, euh, à moitié fausse. Elle a eu le mérite de rappeler que rien n’est gratuit. Mais elle fait de l’utilisateur un objet, une marchandise qu’on vendrait sans lui demander son avis. Or l’utilisateur n’est pas une marchandise : c’est un client. Un client qui paie, simplement il paie dans une monnaie qu’il ne compte pas.\n' +
  'UNE JOURNALISTE : Laquelle ?\n' +
  'UN ÉCONOMISTE : Son attention. Son temps, si vous préférez. Ce que ces entreprises vendent aux annonceurs, ce sont des minutes de regard humain. On parle beaucoup des données personnelles, et elles comptent, bien sûr, mais elles viennent en second : elles servent à rendre chaque minute plus précieuse, parce qu’une publicité qui vise juste se vend plus cher qu’une publicité envoyée au hasard. Les données, c’est ce qui fait monter le prix de votre attention. Mais ce que vous donnez d’abord, c’est votre temps.\n' +
  'UNE JOURNALISTE : Mais enfin, du temps, ce n’est pas de l’argent. Je ne sors pas mon portefeuille.\n' +
  'UN ÉCONOMISTE : Pour vous, non. Pour l’entreprise, si, et c’est toute la différence. Chaque minute de plus que vous passez dans une application, c’est une recette de plus. Et ça change complètement la façon dont le service est conçu. Prenez un service payant, un abonnement classique : son intérêt, c’est que vous soyez satisfait, et vite, pour que vous renouveliez. Un service gratuit financé par la publicité, lui, n’a aucun intérêt à ce que vous trouviez rapidement ce que vous cherchez. Son intérêt, c’est que vous restiez. D’où la vidéo suivante qui démarre toute seule, le fil qui ne s’arrête jamais, les notifications qui vous rappellent au milieu du dîner…\n' +
  'UNE JOURNALISTE : Et ce prix caché, vous avez essayé de le mesurer.\n' +
  'UN ÉCONOMISTE : On a essayé, oui. Avec mon équipe, on a interrogé neuf cents personnes, et on leur a posé deux questions sur un service qu’elles utilisaient tous les jours. La première : combien seriez-vous prêt à payer chaque mois pour continuer à l’utiliser ? Réponse médiane : trois euros. La seconde : combien faudrait-il vous verser pour que vous y renonciez pendant un mois ? Là, la réponse médiane monte à quarante-cinq euros.\n' +
  'UNE JOURNALISTE : Quinze fois plus. Ça veut dire que les gens y tiennent énormément.\n' +
  'UN ÉCONOMISTE : Ça veut dire ça, en partie. Mais pour moi, ça montre surtout autre chose : personne n’a la moindre idée de ce que vaut ce service. Quand vous achetez du pain, bon, vous savez à peu près ce qu’il coûte, vous pouvez comparer. Ici, on n’a jamais vu de prix, jamais rien payé, donc on n’a aucun point de repère. Et un échange dont on ne connaît pas le prix, on ne peut pas juger s’il est équitable ou non.\n' +
  'UNE JOURNALISTE : D’où votre proposition. Vous voulez… afficher un prix ?\n' +
  'UN ÉCONOMISTE : Une étiquette, oui. Un peu comme l’étiquette énergie sur un réfrigérateur. Chaque mois, le service vous dirait deux choses : combien de temps vous y avez passé, et ce que ce temps lui a rapporté en recettes publicitaires. Quelque chose comme : « Ce mois-ci, vous avez passé trente et une heures ici ; elles nous ont rapporté environ quatre euros. »\n' +
  'UNE JOURNALISTE : Quatre euros… Pardonnez-moi, mais ça paraît dérisoire. Votre étiquette risque plutôt de rassurer les gens, non ?\n' +
  'UN ÉCONOMISTE : Vous avez raison, et c’est une objection qu’on m’a faite très tôt. Le chiffre en euros, pris tout seul, rassure. C’est pour ça que j’insiste pour que l’étiquette affiche d’abord les heures. Quatre euros, ce n’est rien. Trente et une heures, c’est presque une semaine de travail. Le vrai prix, il est là : ce que vous perdez, ce n’est pas de l’argent, c’est du temps que vous auriez pu passer à autre chose. Si on n’affiche que les euros, on mesure ce que gagne l’entreprise, pas ce que paie l’utilisateur.\n' +
  'UNE JOURNALISTE : Mais alors, pourquoi ne pas aller au bout de la logique ? Proposer une version payante, sans publicité ? Ceux qui ne veulent plus payer avec leur temps paieraient avec leur argent.\n' +
  'UN ÉCONOMISTE : Ça existe déjà ici ou là, et je n’ai rien contre. Mais en faire la solution, la seule, ça me gêne beaucoup. Parce qu’on obtiendrait un internet à deux vitesses : ceux qui en ont les moyens achèteraient leur tranquillité, et les autres continueraient de payer avec leur attention. On ferait de la tranquillité un luxe. Je préfère des règles qui valent pour tout le monde : par exemple, que la lecture automatique soit désactivée par défaut, ou qu’on ne puisse pas envoyer de notifications la nuit sans que l’utilisateur l’ait demandé.\n' +
  'UNE JOURNALISTE : Je vais me faire l’avocate du diable. Les gens sont des adultes. Personne ne les oblige à passer trente et une heures sur une application.\n' +
  'UN ÉCONOMISTE : Personne ne les oblige, c’est vrai, et je tiens à la liberté de chacun autant que vous. Mais regardez les forces en présence. D’un côté, une personne seule, fatiguée, qui fait défiler son écran à onze heures du soir. De l’autre, des équipes entières d’ingénieurs et de psychologues dont le métier est précisément de la retenir quelques minutes de plus. Ce n’est pas un échange entre égaux. Et en plus, euh, c’est un échange dont l’un des deux ignore le prix.\n' +
  'UNE JOURNALISTE : On pourrait vous reprocher un certain paternalisme…\n' +
  'UN ÉCONOMISTE : Je ne crois pas. Afficher un prix, ce n’est pas interdire. Dans un magasin, l’étiquette ne vous empêche pas d’acheter ; elle vous permet de savoir ce que vous faites. Je ne dis pas aux gens quoi faire de leur temps. Je veux qu’ils sachent ce qu’ils en font.\n' +
  'UNE JOURNALISTE : L’Observatoire Pradel des usages numériques a justement testé quelque chose de proche : un bilan du temps passé, envoyé chaque semaine aux utilisateurs.\n' +
  'UN ÉCONOMISTE : Oui, et les résultats sont très instructifs. Au départ, un utilisateur sur trois a réduit son usage d’une vingtaine de minutes par jour. C’est encourageant. Mais au bout de deux mois, l’effet avait disparu : les gens ne lisaient plus le bilan, ils le faisaient défiler comme le reste. Ça m’a appris une chose : une information, même juste, s’use très vite si elle reste seule. L’étiquette ne suffira pas. Il faut qu’elle s’accompagne de réglages protecteurs par défaut, sinon elle deviendra une notification de plus.\n' +
  'UNE JOURNALISTE : Pour terminer, Bertrand Ollivaux, vous voulez la fin du gratuit ?\n' +
  'UN ÉCONOMISTE : Pas du tout. Ces services sont très utiles, je les utilise comme tout le monde. Je dis simplement que le gratuit n’existe pas. Il y a des prix qu’on voit et des prix qu’on ne voit pas. Mon travail, c’est de rendre visibles les seconds, pour que chacun puisse choisir en connaissance de cause.\n' +
  'UNE JOURNALISTE : Bertrand Ollivaux, merci.\n' +
  'UN ÉCONOMISTE : Merci à vous.';

const P1_DURATION_S = 409; // ESTIMATE: 1191 spoken words at 175 wpm. Replace with the measured clip.

export const CO_PART1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  label: 'Compréhension de l’oral · Partie 1',
  prompt:
    'Vous allez entendre 2 fois un document.\n' +
    'Vous écoutez un entretien diffusé à la radio.\n' +
    'Vous avez d’abord 3 minutes pour lire les questions. Après la première écoute, vous avez 3 minutes pour commencer à répondre. Après la seconde écoute, vous avez 5 minutes pour compléter vos réponses.\n' +
    'Répondez aux questions en cochant la bonne réponse ou en écrivant l’information demandée.',
  timingS: 180 + 2 * P1_DURATION_S + 480,
  parts: [
    {
      label: 'Document · entretien sur le prix des services gratuits',
      playCount: 2,
      readWindowS: 180,
      durationS: P1_DURATION_S,
      text: P1_TEXT,
      items: [
        {
          // Q1 · locate. Key-first; scattered in paper.ts.
          q: 'Que reproche l’économiste à la formule « Si c’est gratuit, c’est vous le produit » ?',
          opts: [
            'Elle fait de l’utilisateur une marchandise, alors qu’il paie lui-même.',
            'Elle laisse croire que ces services ne coûtent rien à ceux qui les produisent.',
            'Elle accuse les entreprises, alors que les usagers choisissent librement.',
          ],
          correct: 0,
          why: 'Elle « fait de l’utilisateur un objet » alors qu’il est « un client qui paie ». Le coût de production n’est pas évoqué : la formule a au contraire rappelé que rien n’est gratuit. La liberté des usagers est l’objection de la journaliste, plus tard, et non un reproche fait à la formule.',
          band: 'c1',
          points: 1,
        },
        {
          // Q2 · reformulate. Two ideas: attention / time; data raise its value (targeting).
          kind: 'short',
          q: 'D’après l’économiste, avec quoi les utilisateurs paient-ils d’abord ces services, et à quoi servent leurs données personnelles ?',
          opts: [],
          correct: -1,
          keywords: [
            ['attention', 'temps', 'minute', 'heure', 'regard', 'concentration', 'disponibilit'],
            ['cibl', 'precieu', 'valeur', 'valoris', 'plus cher', 'vise juste', 'personnalis', 'rentab', 'faire monter', 'fait monter', 'augmente'],
          ],
          model: 'Avec leur attention, c’est-à-dire leur temps ; les données servent à cibler la publicité, ce qui rend chaque minute plus précieuse.',
          why: 'Ils paient d’abord avec leur attention, leur temps ; les données « viennent en second » et font monter le prix de cette attention, car une publicité ciblée se vend plus cher.',
          band: 'c1',
          points: 2,
        },
        {
          // Q3 · infer.
          q: 'Pourquoi, selon l’économiste, un service gratuit n’a-t-il pas intérêt à ce que l’utilisateur trouve vite ce qu’il cherche ?',
          opts: [
            'Parce que ses recettes augmentent avec le temps que l’utilisateur y passe.',
            'Parce qu’un abonné satisfait trop vite risquerait de ne pas renouveler.',
            'Parce que les annonceurs préfèrent les utilisateurs qui hésitent longtemps.',
          ],
          correct: 0,
          why: '« Chaque minute de plus […] c’est une recette de plus. » Le renouvellement est la logique du service PAYANT, qui a au contraire intérêt à satisfaire vite. Rien n’est dit d’une préférence des annonceurs pour les indécis.',
          band: 'c1',
          points: 1.5,
        },
        {
          // Q4 · infer. Two ideas: they do not know; the value / price.
          kind: 'short',
          q: 'Que révèle surtout, selon l’économiste, l’écart entre les deux sommes obtenues dans son enquête ?',
          opts: [],
          correct: -1,
          keywords: [
            ['ignor', 'repere', 'reference', 'inconnu', 'meconn', 'aucune idee', 'moindre idee', 'incapab', 'flou'],
            ['valeur', 'prix', 'vaut', 'cout', 'coute', 'combien'],
          ],
          model: 'Que les utilisateurs ignorent la valeur réelle de ce service, faute de repère, et sont donc incapables de juger si l’échange est équitable.',
          why: 'Ce n’est pas d’abord l’attachement (qu’il accorde « en partie ») : personne n’a idée de ce que vaut le service, faute d’avoir vu un prix, donc on ne peut pas juger l’échange.',
          band: 'c1',
          points: 2,
        },
        {
          // Q5 · locate. Two ideas: time spent; what it brought the company.
          kind: 'short',
          q: 'Quelles sont les deux informations que l’étiquette proposée afficherait chaque mois ?',
          opts: [],
          correct: -1,
          keywords: [
            ['temps', 'heure', 'duree', 'minute'],
            ['rapport', 'recette', 'gagn', 'revenu', 'benefic', 'profit', 'chiffre d affaires', 'encaiss'],
          ],
          model: 'Le temps passé sur le service pendant le mois, et ce que ce temps a rapporté à l’entreprise en recettes publicitaires.',
          why: '« Combien de temps vous y avez passé, et ce que ce temps lui a rapporté en recettes publicitaires. »',
          band: 'c1',
          points: 2,
        },
        {
          // Q6 · attribute: the host's objection (four euros reassure), and his answer.
          kind: 'short',
          q: 'Pourquoi l’économiste tient-il à ce que l’étiquette affiche d’abord les heures plutôt que les euros ?',
          opts: [],
          correct: -1,
          keywords: [
            ['derisoi', 'rassur', 'faible', 'petit', 'minime', 'insignifi', 'modeste', 'ridicule', 'negligeable', 'presque rien', 'peu eleve', 'tranquillis'],
            ['temps', 'vrai prix', 'vrai cout', 'reel', 'perd', 'semaine', 'utilisateur paie', 'ce que paie'],
          ],
          model: 'Parce que la somme en euros, dérisoire, rassure ; le vrai prix payé par l’utilisateur, c’est le temps qu’il perd.',
          why: 'Il accorde l’objection de la journaliste : quatre euros rassurent. Trente et une heures, presque une semaine de travail, disent le vrai prix ; les euros ne mesurent que le gain de l’entreprise.',
          band: 'c1',
          points: 2,
        },
        {
          // Q7 · attribute: a suggestion put to him, and his limit on it.
          q: 'Que pense l’économiste d’une version payante sans publicité ?',
          opts: [
            'Il ne s’y oppose pas, mais en faire la seule réponse réserverait la tranquillité aux plus aisés.',
            'Il la juge indispensable, pourvu que son prix reste accessible au plus grand nombre.',
            'Il la rejette, car presque personne n’accepterait de payer un service jusque-là gratuit.',
          ],
          correct: 0,
          why: '« Je n’ai rien contre », mais en faire la seule solution créerait un internet à deux vitesses et ferait de la tranquillité un luxe. Il ne la dit jamais indispensable, et ne prédit pas qu’on refuserait de payer.',
          band: 'c1',
          points: 1.5,
        },
        {
          // Q8 · reformulate. Two ideas: one tired individual; teams of specialists paid to retain.
          kind: 'short',
          q: 'Pourquoi, selon l’économiste, l’utilisateur et le service ne sont-ils pas à égalité ?',
          opts: [],
          correct: -1,
          keywords: [
            ['seul', 'fatigu', 'isole', 'epuise', 'individu', 'vulnerab'],
            ['ingenieur', 'psycholog', 'equipe', 'specialist', 'expert', 'professionn', 'concepteur', 'retenir', 'captiv'],
          ],
          model: 'Parce qu’une personne seule et fatiguée fait face à des équipes d’ingénieurs et de psychologues dont le métier est de la retenir.',
          why: 'D’un côté une personne seule, fatiguée, le soir ; de l’autre des équipes payées pour la retenir. Il ajoute qu’elle ignore le prix, ce qui aggrave l’inégalité.',
          band: 'c1',
          points: 2,
        },
        {
          // Q9 · infer.
          q: 'Quelle leçon l’économiste tire-t-il de l’expérience de l’Observatoire Pradel ?',
          opts: [
            'Une information sur le temps passé perd vite son effet si rien ne l’accompagne.',
            'Les utilisateurs réduisent durablement leur usage dès qu’ils connaissent leur temps passé.',
            'Un bilan envoyé chaque semaine agit davantage qu’une étiquette affichée chaque mois.',
          ],
          correct: 0,
          why: 'L’effet a disparu au bout de deux mois : une information seule s’use, il faut des réglages protecteurs par défaut. La baisse n’a pas été durable ; il ne compare jamais l’efficacité du bilan et de l’étiquette.',
          band: 'c1',
          points: 2,
        },
        {
          // Q10 · weigh. Three ideas: make visible; the hidden price; so people choose knowingly.
          kind: 'short',
          q: 'En conclusion, quel but l’économiste donne-t-il à son travail ?',
          opts: [],
          correct: -1,
          keywords: [
            ['visib', 'montr', 'affich', 'revel', 'devoil', 'faire voir', 'transparen', 'connaitre', 'apparai', 'eclair'],
            ['cach', 'invisib', 'vrai prix', 'prix reel', 'vrai cout', 'cout reel', 'seconds', 'prix qu on ne voit'],
            ['chois', 'choix', 'decid', 'connaissance de cause', 'informe', 'libre', 'conscien'],
          ],
          model: 'Rendre visible le prix caché du gratuit, pour que chacun puisse choisir en connaissance de cause.',
          why: 'Il ne veut pas la fin du gratuit : il veut rendre visibles « les prix qu’on ne voit pas », pour un choix en connaissance de cause.',
          band: 'c1',
          points: 2,
        },
      ],
    },
  ],
};

/* ═══ PARTIE 2 · 7 points · DALF-13, DALF-15 ═════════════════════════════ */
//
// Two extracts, two genres, each heard once and self-contained: a chronicle
// (3 MCQ) and a poll with two respondents (4 MCQ). One point each.
//
// INVENTED, all of it. Chronicle: the night line Valombre-Port-Sérac, the
// company Ferralys, back in service for eight months after fourteen years
// without it, full almost every weekend, six hours by car, arrival at 6 h 40,
// « un voyageur sur dix ». Poll: the storm of 9 July on the côte d’Armélie, the
// institut Clairsonde, Radio Brise-Lames, 48 %, « sept sur dix », « six personnes
// sur dix », three weeks since the storm, a week before any explanation, a
// fisherman of thirty years, « trois cents jours ».

const X1_TEXT =
  'UNE CHRONIQUEUSE : Huit mois après sa remise en service, le train de nuit entre Valombre et Port-Sérac affiche complet presque chaque week-end. Après quatorze ans sans ligne de nuit, c’est une belle revanche. Mais qui monte vraiment dans ces couchettes ? Au lancement, la compagnie Ferralys visait deux publics : les jeunes voyageurs soucieux du climat, et les cadres qui voulaient éviter l’avion pour leurs déplacements professionnels. Or le bilan qu’elle publie cette semaine raconte une autre histoire. Les premiers clients, ce sont les familles avec enfants, qui économisent une nuit d’hôtel et arrivent reposées, et les plus de soixante ans, qui ne veulent plus conduire six heures d’affilée. Les cadres, eux, sont rares : arriver à six heures quarante, sans douche ni bureau, convient mal à une journée de réunions. Quant au climat, il n’est cité comme raison principale que par un voyageur sur dix. Faut-il s’en désoler ? Je ne crois pas. Le train de nuit ne réussit pas comme un geste militant, il réussit comme un hôtel qui roule. Et c’est plutôt une bonne nouvelle : un succès fondé sur le confort est plus solide qu’un succès fondé sur la bonne conscience. À une condition, toutefois : que la compagnie cesse de vanter surtout son bilan carbone, et parle enfin à ceux qui prennent réellement ses trains.';

const X2_TEXT =
  'UN PRÉSENTATEUR : Trois semaines après la tempête du 9 juillet, qui a frappé la côte d’Armélie sans qu’aucune alerte ait été donnée, la confiance dans les prévisions météo a-t-elle été ébranlée ? L’institut Clairsonde a posé la question pour Radio Brise-Lames. Quarante-huit pour cent des habitants de la région disent faire moins confiance aux prévisions qu’avant. Pourtant, sept sur dix continuent de les consulter chaque jour. Et ce qu’on reproche le plus au service météorologique, ce n’est pas l’erreur elle-même : c’est son silence dans les jours qui ont suivi. Six personnes sur dix auraient voulu qu’on leur explique pourquoi la tempête n’avait pas été vue venir. Écoutons deux habitants.\n' +
  'UNE HABITANTE : Moi, je n’ai pas arrêté de regarder la météo, mais je ne la regarde plus de la même façon. Avant, je regardais juste le petit soleil ou le nuage. Maintenant, je regarde le pourcentage de risque, et quand il y a un doute, je prends mes précautions. En fait, j’ai compris qu’une prévision, ce n’est pas une promesse.\n' +
  'UN HABITANT : Je suis pêcheur depuis trente ans. Les prévisions se trompent rarement, vous savez. Le problème, c’est qu’on oublie les trois cents jours où elles avaient raison et qu’on ne retient que celui où elles ont eu tort. Moi, ma confiance n’a pas bougé. Ce qui me choque, c’est qu’on ait attendu une semaine pour nous dire ce qui s’était passé.';

const X1_DURATION_S = 75; // ESTIMATE: 218 spoken words at 175 wpm.
const X2_DURATION_S = 78; // ESTIMATE: 226 spoken words at 175 wpm.

export const CO_PART2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  label: 'Compréhension de l’oral · Partie 2',
  prompt:
    'Vous allez entendre une seule fois plusieurs courts extraits radiophoniques.\n' +
    'Pour chaque extrait, vous avez 50 secondes pour lire les questions, puis vous écoutez l’extrait, puis vous avez 50 secondes pour répondre.\n' +
    'Cochez la bonne réponse.',
  timingS: 50 + X1_DURATION_S + 50 + 50 + X2_DURATION_S + 50,
  parts: [
    {
      label: 'Document 1 · chronique',
      playCount: 1,
      readWindowS: 50,
      durationS: X1_DURATION_S,
      text: X1_TEXT,
      items: [
        {
          q: 'D’après le bilan de la compagnie, qui sont les principaux voyageurs de ce train ?',
          opts: [
            'Des familles avec enfants et des personnes de plus de soixante ans',
            'Des jeunes soucieux du climat et des cadres en déplacement',
            'Des voyageurs qui renoncent à l’avion pour partir en vacances',
          ],
          correct: 0,
          why: 'Familles et plus de soixante ans. Les jeunes soucieux du climat et les cadres étaient le public VISÉ au lancement ; l’avion n’est évoqué que pour les cadres.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Pourquoi les cadres prennent-ils rarement ce train ?',
          opts: [
            'L’heure et les conditions d’arrivée conviennent mal à une journée de travail.',
            'Le prix des couchettes dépasse ce que leur entreprise accepte de rembourser.',
            'Ils lui préfèrent l’avion, plus rapide pour se rendre à leurs réunions.',
          ],
          correct: 0,
          why: 'Arriver à 6 h 40 sans douche ni bureau convient mal à une journée de réunions. Le prix n’est pas évoqué ; l’avion est ce qu’ils voulaient ÉVITER.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Que recommande la chroniqueuse à la compagnie ?',
          opts: [
            'Mettre en avant le confort du train plutôt que l’argument écologique',
            'Ajouter des services à bord pour attirer enfin les voyageurs d’affaires',
            'Rappeler davantage aux voyageurs ce que le train apporte au climat',
          ],
          correct: 0,
          why: 'Cesser de vanter le bilan carbone et parler à ceux qui prennent réellement le train, attirés par le confort. Elle ne propose rien pour les cadres ; la troisième option est l’inverse de sa recommandation.',
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
          q: 'Quelle part des habitants dit faire moins confiance aux prévisions qu’avant ?',
          opts: ['Près de la moitié', 'Sept sur dix', 'Six sur dix'],
          correct: 0,
          why: '48 %. Sept sur dix, ce sont ceux qui consultent toujours les prévisions chaque jour ; six sur dix auraient voulu une explication.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Que reproche-t-on surtout au service météorologique ?',
          opts: [
            'D’avoir tardé à expliquer son erreur après la tempête',
            'De n’avoir pas su prévoir l’arrivée de la tempête',
            'De publier des prévisions trop difficiles à comprendre',
          ],
          correct: 0,
          why: '« Ce n’est pas l’erreur elle-même : c’est son silence dans les jours qui ont suivi » ; le pêcheur confirme qu’on a attendu une semaine. L’erreur de prévision est réelle mais n’est pas le reproche principal ; la clarté des prévisions n’est pas évoquée.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Qu’est-ce qui a changé pour la femme interrogée ?',
          opts: [
            'Elle tient compte du degré d’incertitude des prévisions.',
            'Elle a cessé de consulter les prévisions météo.',
            'Elle compare désormais plusieurs sources de prévisions.',
          ],
          correct: 0,
          why: 'Elle regarde le pourcentage de risque et prend ses précautions en cas de doute. Elle dit expressément qu’elle n’a pas arrêté ; aucune autre source n’est mentionnée.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Que pense le pêcheur des prévisions météo ?',
          opts: [
            'Elles sont fiables, mais on ne se souvient que de leurs erreurs.',
            'Il s’en méfie depuis toujours et préfère observer le ciel.',
            'Elles sont devenues moins sûres au cours des dernières années.',
          ],
          correct: 0,
          why: 'Elles se trompent rarement ; on oublie les trois cents jours où elles avaient raison. Sa confiance « n’a pas bougé » ; il ne parle ni du ciel ni d’une dégradation.',
          band: 'c1',
          points: 1,
        },
      ],
    },
  ],
};
