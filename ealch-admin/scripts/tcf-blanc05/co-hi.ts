// TCF Canada blanc-05 — Compréhension orale, the upper slope (B2, C1, C2).
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
// Every document here is an EXCHANGE, including the two that would read
// naturally as a lecture. blanc-04 shipped a single-voice C1 chronique that
// came back at 208 wpm against a 175 target and a 207 ceiling: one voice
// reading continuously has no turn boundaries and no second pace to average
// against. Two voices cost a few words and buy the whole margin.
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
// SELF-VERIFY: in each of the four, no single sentence carries the answer. Two
// speakers agree on the facts and disagree about what follows from them, and
// the question asks what follows.

export const CO_B2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Compréhension orale · B2',
  prompt: 'Vous allez entendre quatre documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 512,
  targetItemIds: uniq(
    ITEMS.rpSociete.b2,
    ITEMS.reseauxSociaux.b2,
    ITEMS.gouvernement.b2,
    ITEMS.economie.b2
  ),
  parts: [
    {
      label: 'Document 17 · les récits de réussite',
      playCount: 1,
      readWindowS: 25,
      durationS: 86,
      text:
        'UNE ANIMATRICE : Vous avez lu deux cents portraits de fondateurs pour votre étude. ' +
        'Qu’en avez-vous tiré ?\n' +
        'UN SOCIOLOGUE : Que le récit est toujours le même et que ce n’est pas un hasard. ' +
        'On raconte un départ difficile, un moment de doute, une décision qui renverse tout. ' +
        'Ce qui manque est identique d’un portrait à l’autre : ' +
        'les trente mille euros que la famille a avancés.\n' +
        'UNE ENTREPRENEUSE : Vous suggérez que ces gens mentent.\n' +
        'UN SOCIOLOGUE : Pas du tout, et c’est ce qui m’intéresse. ' +
        'Ils ne cachent pas cet argent, on ne le leur demande pas. ' +
        'La question posée est « comment avez-vous eu l’idée », jamais ' +
        '« qui payait votre loyer la première année ».\n' +
        'UNE ENTREPRENEUSE : Sur ce point je vous rejoins entièrement. ' +
        'Là où je vous quitte, c’est sur ce que vous en concluez. ' +
        'Vous en faites une imposture. J’y vois un genre littéraire, ' +
        'avec ses règles, que tout le monde connaît.\n' +
        'UN SOCIOLOGUE : Un genre que personne ne présente comme tel, ' +
        'et c’est toute la différence avec les autres genres littéraires. ' +
        'Le lecteur de vingt ans qui échoue ne se dit pas qu’il a lu un conte. ' +
        'Il se dit qu’il a manqué de courage.\n' +
        'UNE ENTREPRENEUSE : Vous lui prêtez une naïveté que je ne lui vois pas.\n' +
        'UN SOCIOLOGUE : Je lui prête ce que les enquêtes lui trouvent. ' +
        'Interrogés sur ce qui manque à leur projet, les jeunes fondateurs ' +
        'citent la détermination avant le capital, deux fois sur trois.',
      items: [
        {
          q: 'Que manque-t-il dans ces portraits, selon le sociologue ?',
          opts: [
            'L’argent avancé par les familles',
            'Les échecs des fondateurs',
            'Les noms des associés',
            'Le rôle des banques',
          ],
          correct: 0,
          why: 'Le même élément absent d’un portrait à l’autre : les trente mille euros de la famille.',
          band: 'b2',
        },
        {
          q: 'Pourquoi cet élément n’apparaît-il pas ?',
          opts: [
            'La question n’est jamais posée',
            'Les fondateurs le cachent',
            'Les journalistes l’ignorent',
            'Il varie trop d’un cas à l’autre',
          ],
          correct: 0,
          why: 'Il dit expressément qu’ils ne le cachent pas : on leur demande l’idée, pas le loyer.',
          band: 'b2',
        },
        {
          q: 'Où se situe le désaccord entre les deux ?',
          opts: [
            'Sur ce qu’il faut conclure de cette absence',
            'Sur l’existence de cet argent',
            'Sur le nombre de portraits étudiés',
            'Sur la sincérité des fondateurs',
          ],
          correct: 0,
          why: 'Elle le rejoint sur le constat et refuse le mot imposture : un genre contre une tromperie.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 18 · les données de l’école',
      playCount: 1,
      readWindowS: 25,
      durationS: 84,
      text:
        'UN JOURNALISTE : L’application de suivi scolaire enregistre les devoirs, les retards, ' +
        'les résultats de chaque élève. Les parents la réclament.\n' +
        'UNE DIRECTRICE : Ils la réclament, et je la leur ai installée, ' +
        'et je passe désormais mes soirées à répondre à des messages ' +
        'écrits huit minutes après la saisie d’une note.\n' +
        'UN DÉLÉGUÉ DE PARENTS : Une note existe, qu’elle soit vue à dix-huit heures ou à la fin du trimestre.\n' +
        'UNE DIRECTRICE : Elle existe, et elle ne veut pas dire la même chose. ' +
        'Un huit isolé n’est pas une information, c’est un point. ' +
        'Il devenait une information au conseil de classe, ' +
        'entouré de dix autres et commenté par quelqu’un qui connaît l’enfant.\n' +
        'UN DÉLÉGUÉ DE PARENTS : Vous décrivez un filtre, et nous avons longtemps subi ce filtre.\n' +
        'UNE DIRECTRICE : J’en conviens sans réserve, et je ne défends pas l’ancien secret. ' +
        'Il protégeait aussi des professeurs qui notaient mal, et je l’ai vu.\n' +
        'UN DÉLÉGUÉ DE PARENTS : Alors nous sommes d’accord.\n' +
        'UNE DIRECTRICE : Sur le passé, oui. Pas sur ce que nous avons mis à la place. ' +
        'On a remplacé une information tardive par un flux immédiat, ' +
        'et un flux n’est pas plus vrai. Il est seulement plus rapide, ' +
        'et il arrive à des gens qui n’ont pas les moyens de le lire. ' +
        'Une mère qui reçoit un huit à dix-huit heures ne peut rien en faire ' +
        'sinon s’inquiéter, ou téléphoner, ce qui revient à me demander ' +
        'de faire à vingt heures le travail du conseil de classe.',
      items: [
        {
          q: 'Que reproche la directrice à l’application ?',
          opts: [
            'Elle transmet des points isolés au lieu d’une information',
            'Elle contient des erreurs de saisie',
            'Elle est trop compliquée pour les parents',
            'Elle coûte trop cher à l’établissement',
          ],
          correct: 0,
          why: 'Un huit isolé est un point ; il devenait une information au conseil de classe.',
          band: 'b2',
        },
        {
          q: 'Que concède-t-elle au délégué des parents ?',
          opts: [
            'L’ancien fonctionnement était un filtre et elle ne le défend pas',
            'Les parents lisent mieux les notes qu’elle ne le pensait',
            'L’application devrait être étendue',
            'Le conseil de classe est inutile',
          ],
          correct: 0,
          why: 'Elle en convient sans rien retirer à sa thèse sur le flux.',
          band: 'b2',
        },
        {
          q: 'Quelle est sa conclusion ?',
          opts: [
            'Un flux plus rapide n’est pas une information plus vraie',
            'Il faut revenir au conseil de classe seul',
            'Les parents doivent être formés à l’outil',
            'Les notes devraient être supprimées',
          ],
          correct: 0,
          why: 'Elle oppose la rapidité à la lisibilité, sans réclamer le retour du secret.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 19 · les petites lignes',
      playCount: 1,
      readWindowS: 22,
      durationS: 83,
      text:
        'UNE ANIMATRICE : Cette ligne transporte quatre-vingts voyageurs par jour ' +
        'et coûte deux millions par an. Faut-il la fermer ?\n' +
        'UN ÉCONOMISTE : Au coût par voyageur, la réponse est évidente et je vais quand même la nuancer. ' +
        'Un car ferait le trajet pour un dixième du prix.\n' +
        'UNE ÉLUE : Un car qui n’existera pas. C’est le point que le calcul ne voit jamais. ' +
        'Quand une ligne ferme, le car promis circule deux ans, ' +
        'puis ses horaires se réduisent, puis il disparaît, ' +
        'parce que personne ne défend un car comme on défend une gare.\n' +
        'UN ÉCONOMISTE : Vous avez raison sur les faits, et je l’ai vérifié moi-même : ' +
        'dans dix-sept cas sur vingt, le car ne survit pas cinq ans. ' +
        'Ce que vous en tirez me gêne davantage. ' +
        'Vous demandez de maintenir un service coûteux ' +
        'parce que nous serions incapables d’en tenir un moins cher.\n' +
        'UNE ÉLUE : Je demande de juger un choix sur ce qui arrive vraiment ensuite, ' +
        'et non sur ce qui figure dans le rapport au moment où on le signe.\n' +
        'UN ÉCONOMISTE : Ce raisonnement interdit toute réforme. ' +
        'On peut toujours dire que la solution de remplacement sera mal tenue.\n' +
        'UNE ÉLUE : On peut le dire, et il faut le prouver, ' +
        'et vous venez de le prouver pour moi avec vos dix-sept cas sur vingt. ' +
        'Le jour où vous m’apporterez un département qui a tenu son car quinze ans, ' +
        'je fermerai la ligne moi-même.',
      items: [
        {
          q: 'Quel argument l’élue oppose-t-elle au calcul ?',
          opts: [
            'Le car de remplacement disparaît en quelques années',
            'Le train transporte plus de voyageurs qu’annoncé',
            'Le coût par voyageur est mal calculé',
            'La ligne peut être rentabilisée',
          ],
          correct: 0,
          why: 'Le car circule deux ans, se réduit, puis disparaît : personne ne le défend.',
          band: 'b2',
        },
        {
          q: 'Comment l’économiste répond-il ?',
          opts: [
            'Il confirme le fait et conteste la conclusion',
            'Il conteste le chiffre avancé',
            'Il se range à son avis',
            'Il propose de fermer plus vite',
          ],
          correct: 0,
          why: 'Dix-sept cas sur vingt, dit-il ; ce qui le gêne est ce qu’elle en tire.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 20 · une friche commerciale',
      playCount: 1,
      readWindowS: 22,
      durationS: 68,
      text:
        'UN JOURNALISTE : Le centre commercial est vide depuis six ans. ' +
        'Trois projets ont échoué. Pourquoi le quatrième réussirait-il ?\n' +
        'UNE URBANISTE : Parce qu’il ne cherche plus à remplir le bâtiment. ' +
        'Les trois premiers voulaient trente mille mètres carrés d’un coup, ' +
        'et il n’existe aucun acteur capable d’absorber cela ici.\n' +
        'UN ÉLU : Nous découpons donc en lots, avec des baux courts et des loyers modestes.\n' +
        'UNE URBANISTE : Ce qui rapportera moins et ce qui fonctionnera. ' +
        'Un bâtiment à moitié occupé produit un revenu ; ' +
        'un bâtiment vide produit une facture de gardiennage ' +
        'et une réputation dont on ne se défait pas.\n' +
        'UN JOURNALISTE : Combien de temps pour remplir la moitié ?\n' +
        'UNE URBANISTE : Quatre ans, si les baux restent courts. ' +
        'Un artisan signe pour dix-huit mois ; il ne signe pas pour neuf ans.\n' +
        'UN ÉLU : Sur le principe nous sommes entièrement d’accord. ' +
        'Ce qui m’inquiète est l’image : un découpage en petits lots se lit comme un renoncement, ' +
        'et nous avons promis une renaissance devant trois cents personnes.\n' +
        'UNE URBANISTE : Alors la difficulté n’est plus le bâtiment, ' +
        'et elle ne l’a peut-être jamais été. ' +
        'Elle est la promesse, et elle a été faite par ceux qui devront l’expliquer.',
      items: [
        {
          q: 'Pourquoi les trois premiers projets ont-ils échoué ?',
          opts: [
            'Aucun acteur ne pouvait occuper la surface d’un seul coup',
            'Les loyers demandés étaient trop bas',
            'Le bâtiment était trop dégradé',
            'La commune a refusé les permis',
          ],
          correct: 0,
          why: 'Trente mille mètres carrés d’un coup, sans acteur capable de les absorber.',
          band: 'b2',
        },
        {
          q: 'Quelle difficulté l’urbaniste identifie-t-elle à la fin ?',
          opts: [
            'La promesse faite au public, non le projet',
            'Le coût du gardiennage',
            'La durée des baux',
            'Le refus des commerçants',
          ],
          correct: 0,
          why: 'L’élu s’inquiète de l’image ; elle déplace la difficulté vers la promesse elle-même.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: in each document a speaker grants the other something real and
// keeps the argument. A candidate who hears only the concession answers wrong.

export const CO_C1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'c1',
  label: 'Compréhension orale · C1',
  prompt: 'Vous allez entendre trois documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 465,
  targetItemIds: uniq(ITEMS.methodeScientifique.c1, ITEMS.ethique.c1, ITEMS.decouvertes.c1),
  parts: [
    {
      label: 'Document 21 · ce qu’un chiffre ne dit pas',
      playCount: 1,
      readWindowS: 30,
      durationS: 108,
      text:
        'UN ANIMATEUR : Vous ouvrez votre séminaire en disant que la plupart des abus statistiques ' +
        'sont commis de bonne foi.\n' +
        'UNE STATISTICIENNE : Presque tous, et c’est pour cela qu’ils durent. ' +
        'Une fraude se découvre ; une erreur de raisonnement se transmet. ' +
        'Prenez la plus banale : on compare deux groupes, on trouve un écart, ' +
        'et l’on nomme cet écart un effet.\n' +
        'UN ANIMATEUR : Ce n’en est pas un ?\n' +
        'UNE STATISTICIENNE : C’en est peut-être un. Rien dans le chiffre ne le dit, ' +
        'et rien dans le chiffre ne le dira jamais. ' +
        'Il faudrait savoir comment les deux groupes se sont formés, ' +
        'et cette information n’est pas dans le tableau. ' +
        'Elle est dans le protocole, que personne ne lit.\n' +
        'UN ANIMATEUR : Vous parlez d’une erreur banale. Elle l’est vraiment ?\n' +
        'UNE STATISTICIENNE : J’ai relu quarante articles d’une même revue sur cinq ans. ' +
        'Vingt-six comparaient deux groupes constitués d’eux-mêmes. ' +
        'Dix-neuf appelaient l’écart un effet dès le résumé. ' +
        'Aucun de ces dix-neuf ne mentait, et aucun n’aurait pu défendre le mot ' +
        'si on le lui avait demandé.\n' +
        'UN CHERCHEUR : Vous demandez une prudence qui interdirait de publier quoi que ce soit.\n' +
        'UNE STATISTICIENNE : Voilà l’objection qu’on me fait toujours, et elle est sérieuse. ' +
        'Je vous l’accorde en partie : une exigence absolue paralyserait la recherche, ' +
        'et j’en ai vu paralyser des équipes entières.\n' +
        'UN CHERCHEUR : Que proposez-vous, alors ?\n' +
        'UNE STATISTICIENNE : De dire ce que l’on ne sait pas, ' +
        'ce qui coûte trois lignes et n’empêche strictement personne de publier. ' +
        'La phrase « nous n’avons pas pu contrôler tel facteur » ' +
        'ne retire rien à un résultat : elle en fixe la portée.\n' +
        'UN CHERCHEUR : Trois lignes qu’un relecteur nous demandera de couper.\n' +
        'UNE STATISTICIENNE : Souvent, oui, et c’est là qu’il faut agir, ' +
        'plutôt que sur les auteurs. Ce qui me préoccupe n’est pas qu’on publie trop. ' +
        'C’est qu’on publie sans dire jusqu’où le chiffre porte, ' +
        'et qu’un lecteur pressé le fasse porter plus loin. ' +
        'Le lecteur pressé, dans la moitié des cas, est un collègue ' +
        'qui construira l’étude suivante sur le malentendu.',
      items: [
        {
          q: 'Pourquoi les abus de bonne foi durent-ils ?',
          opts: [
            'Une erreur de raisonnement se transmet au lieu de se découvrir',
            'Les fraudes sont rarement sanctionnées',
            'Les statisticiens sont trop peu nombreux',
            'Les données sont difficiles à obtenir',
          ],
          correct: 0,
          why: 'Elle oppose la fraude, qui se découvre, à l’erreur, qui se transmet.',
          band: 'c1',
        },
        {
          q: 'Que concède-t-elle au chercheur ?',
          opts: [
            'Une exigence absolue paralyserait la recherche',
            'Les écarts observés sont bien des effets',
            'Le protocole n’a pas d’importance',
            'La publication devrait être plus rapide',
          ],
          correct: 0,
          why: 'Elle accorde la paralysie et maintient sa demande sous une autre forme.',
          band: 'c1',
        },
        {
          q: 'Que demande-t-elle finalement ?',
          opts: [
            'Que la portée du résultat soit énoncée',
            'Que l’on publie moins de résultats',
            'Que les protocoles soient simplifiés',
            'Que les lecteurs soient formés',
          ],
          correct: 0,
          why: 'Trois lignes disant ce que l’on n’a pas contrôlé fixent la portée sans rien retirer.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 22 · signer ou ne pas signer',
      playCount: 1,
      readWindowS: 28,
      durationS: 100,
      text:
        'UNE MODÉRATRICE : Faut-il que l’évaluation d’un article reste anonyme ?\n' +
        'UN ÉDITEUR : L’anonymat protège le jeune évaluateur qui doit critiquer un travail ' +
        'signé par quelqu’un dont dépend sa carrière. Retirez-le et vous obtenez ' +
        'des rapports polis et vides.\n' +
        'UNE CHERCHEUSE : C’est vrai, et je signe pourtant tous les miens depuis six ans. ' +
        'Ce que j’ai constaté n’est pas que je critique moins. ' +
        'C’est que je critique autrement : je justifie davantage, ' +
        'je donne la référence au lieu de l’allusion, ' +
        'et je ne me permets plus la phrase assassine qu’on écrit à l’abri.\n' +
        'UNE MODÉRATRICE : Vos rapports sont-ils devenus plus longs ?\n' +
        'UNE CHERCHEUSE : Deux fois plus longs, et deux fois plus utiles, ' +
        'si j’en juge par ce que les auteurs en font. ' +
        'On me répond, ce qui n’arrivait jamais auparavant. ' +
        'Une critique signée appelle une réponse ; une critique anonyme appelle une correction.\n' +
        'UN ÉDITEUR : Vous décrivez un progrès qui n’est disponible ' +
        'que pour quelqu’un qui a déjà un poste, et vous en avez un.\n' +
        'UNE CHERCHEUSE : Voilà exactement ce que je ne peux pas réfuter, ' +
        'et c’est la raison pour laquelle je ne demande pas la levée de l’anonymat. ' +
        'Je demande qu’il soit un choix et non une règle. ' +
        'Que celui qui peut signer signe, et que sa signature ait un poids.\n' +
        'UN ÉDITEUR : Une signature qui a un poids rend le silence des autres significatif, ' +
        'et vous recréez à l’intérieur du système la hiérarchie que l’anonymat effaçait.\n' +
        'UNE CHERCHEUSE : C’est l’objection la plus forte et je ne l’écarte pas. ' +
        'Je réponds seulement ceci : l’anonymat n’efface pas cette hiérarchie, ' +
        'il l’empêche d’être vue. Un éditeur choisit ses évaluateurs, ' +
        'il sait très bien lesquels pèsent, et l’auteur ne le saura jamais. ' +
        'Je préfère une hiérarchie visible, sur laquelle on peut se plaindre, ' +
        'à une hiérarchie qui agit sans se montrer, ' +
        'et c’est très exactement ce qui se passe aujourd’hui.',
      items: [
        {
          q: 'Qu’a changé la signature dans sa pratique ?',
          opts: [
            'Elle justifie davantage ses critiques',
            'Elle critique beaucoup moins',
            'Elle évalue moins d’articles',
            'Elle accepte plus souvent les travaux',
          ],
          correct: 0,
          why: 'Pas moins de critique, mais plus de justification et plus de phrases assassines.',
          band: 'c1',
        },
        {
          q: 'Que demande-t-elle exactement ?',
          opts: [
            'Que signer soit un choix et non une règle',
            'La levée complète de l’anonymat',
            'Le maintien de l’anonymat pour tous',
            'Un anonymat réservé aux jeunes chercheurs',
          ],
          correct: 0,
          why: 'Elle accorde à l’éditeur que signer suppose un poste, et n’en demande pas la levée.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 23 · l’impasse utile',
      playCount: 1,
      readWindowS: 28,
      durationS: 99,
      text:
        'UNE ANIMATRICE : Vous soutenez qu’une recherche qui échoue n’a pas échoué.\n' +
        'UN CHIMISTE : Je soutiens quelque chose de plus étroit, et la nuance est tout. ' +
        'Une impasse documentée est un résultat : elle retire une possibilité du champ, ' +
        'et le champ est fini. Une impasse non publiée n’est rien du tout, ' +
        'et sera parcourue par quelqu’un d’autre dans trois ans.\n' +
        'UNE ANIMATRICE : Personne ne publie ses impasses.\n' +
        'UN CHIMISTE : Personne, parce qu’aucune revue n’en veut, ' +
        'et parce qu’aucune carrière ne s’en nourrit. ' +
        'J’ai fait le calcul pour mon seul laboratoire, sur onze ans : ' +
        'quatre années d’expériences dont le résultat n’existe nulle part, ' +
        'et que je serais aujourd’hui incapable de retrouver moi-même dans un cahier.\n' +
        'UNE ANIMATRICE : Quatre années sur onze.\n' +
        'UN CHIMISTE : Sur onze, et je ne suis pas un cas particulier. ' +
        'Demandez à n’importe quel collègue combien de ses manipulations ' +
        'ont donné lieu à une publication : la réponse tourne autour d’un tiers. ' +
        'Les deux autres tiers ne sont pas perdus pour lui, ' +
        'puisqu’il s’en souvient. Ils sont perdus pour tous les autres.\n' +
        'UNE HISTORIENNE DES SCIENCES : Vous parlez comme si la publication réglait tout. ' +
        'Une impasse mal décrite fait perdre plus de temps qu’un silence, ' +
        'parce qu’on la croit close alors qu’elle a été mal explorée.\n' +
        'UN CHIMISTE : Je vous accorde le risque entièrement, ' +
        'et je l’ai vu se produire dans mon propre domaine : ' +
        'une voie déclarée sans issue en mille neuf cent quatre-vingt-quatorze, ' +
        'rouverte vingt ans plus tard parce que quelqu’un avait relu le détail. ' +
        'Cela ne me fait pas changer d’avis, et voici pourquoi. ' +
        'Une impasse mal décrite se corrige, puisqu’elle est là et qu’on peut la lire. ' +
        'Une impasse tue ne se corrige pas : elle se répète, ' +
        'et chacun de ceux qui la répètent croit être le premier. ' +
        'Entre une erreur consultable et un vide, je prends l’erreur sans hésiter.',
      items: [
        {
          q: 'Quelle distinction le chimiste tient-il ?',
          opts: [
            'Entre une impasse documentée et une impasse non publiée',
            'Entre une expérience ratée et une expérience réussie',
            'Entre la chimie et l’histoire des sciences',
            'Entre une revue sérieuse et une revue mineure',
          ],
          correct: 0,
          why: 'L’une retire une possibilité du champ, l’autre sera reparcourue dans trois ans.',
          band: 'c1',
        },
        {
          q: 'Comment répond-il à l’objection de l’historienne ?',
          opts: [
            'Une erreur consultable se corrige, un vide se répète',
            'Le risque qu’elle décrit n’existe pas',
            'Les revues devraient mieux relire',
            'Il retire ce qu’il vient de soutenir',
          ],
          correct: 0,
          why: 'Il accorde le risque entièrement et le juge préférable au silence.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: no answer sits in a sentence. Each is the shape of the whole
// exchange, and the trap in every case is a line a speaker says without
// believing it.

export const CO_C2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'c2',
  label: 'Compréhension orale · C2',
  prompt: 'Vous allez entendre un document. Choisissez la bonne réponse.',
  timingS: 190,
  targetItemIds: uniq(ITEMS.methodeScientifique.c2),
  parts: [
    {
      label: 'Document 24 · ce qu’une théorie doit expliquer',
      playCount: 1,
      readWindowS: 30,
      durationS: 126,
      text:
        'UNE MODÉRATRICE : Vous dites qu’une théorie qui explique tout n’explique rien. ' +
        'La formule est célèbre. Elle est aussi devenue une façon de ne pas discuter.\n' +
        'UN PHYSICIEN : Elle l’est devenue, et je continue de la trouver juste, ' +
        'ce qui m’oblige à la défendre contre ceux qui l’emploient. ' +
        'Une théorie qui accueille tout résultat n’interdit rien, ' +
        'et ce qu’une théorie interdit est la seule chose qu’on puisse aller vérifier.\n' +
        'UNE MODÉRATRICE : Interdire quoi, par exemple ?\n' +
        'UN PHYSICIEN : Une théorie utile dit : si vous mesurez ceci dans ces conditions, ' +
        'vous ne trouverez pas cela. Elle prend un risque daté, ' +
        'et quelqu’un peut aller voir. Une théorie qui se contente d’accueillir ' +
        'ce qu’on lui apporte ne prend aucun risque et ne se trompe jamais, ' +
        'ce qui devrait inquiéter plutôt que rassurer.\n' +
        'UNE PHILOSOPHE : Vous décrivez un idéal que votre propre discipline ne tient pas. ' +
        'Quand une observation contredit votre modèle, ' +
        'vous n’abandonnez pas le modèle : vous ajoutez un terme.\n' +
        'UN PHYSICIEN : Nous ajoutons un terme, oui, et j’aimerais qu’on cesse de dire ' +
        'que c’est une tricherie. Le terme ajouté doit prédire autre chose, ' +
        'sans quoi il ne survit pas dix ans. Un ajustement qui n’explique ' +
        'que le fait pour lequel il a été inventé meurt de sa propre stérilité, ' +
        'et il en meurt beaucoup.\n' +
        'UNE PHILOSOPHE : Meurt-il, ou cesse-t-on d’en parler ? ' +
        'Ce n’est pas la même mort.\n' +
        'UN PHYSICIEN : Ce n’est pas la même, non, et vous mettez le doigt ' +
        'sur ce qui me gêne le plus depuis dix ans. ' +
        'Je ne peux pas vous montrer le registre des hypothèses abandonnées. ' +
        'Il n’existe pas, il n’a jamais existé, ' +
        'et si nous voulions le constituer aujourd’hui nous ne saurions pas par où commencer. ' +
        'Je vous décris donc un mécanisme que je crois réel ' +
        'et dont je n’ai aucune trace à produire, ' +
        'ce qui est exactement le reproche que je faisais il y a une minute ' +
        'aux théories trop accueillantes.\n' +
        'UNE PHILOSOPHE : Vous auriez pu ne pas le dire.\n' +
        'UN PHYSICIEN : J’aurais pu, et personne ne l’aurait relevé, ' +
        'ce qui est précisément ce qui me décide à le dire.\n' +
        'UNE MODÉRATRICE : Vous venez de vous appliquer votre propre critère.\n' +
        'UN PHYSICIEN : Et il me coûte quelque chose, ce qui est plutôt bon signe. ' +
        'Je maintiens la formule, en retirant le ton avec lequel on la prononce d’habitude. ' +
        'Ce n’est pas une arme contre les autres disciplines. ' +
        'C’est une exigence dont nous ne savons pas, nous non plus, ' +
        'prouver que nous la respectons.',
      items: [
        {
          q: 'Pourquoi le physicien défend-il la formule contre ceux qui l’emploient ?',
          opts: [
            'Elle sert d’arme au lieu de servir d’exigence',
            'Elle est mal traduite',
            'Elle vient d’une autre discipline',
            'Elle est trop ancienne pour valoir encore',
          ],
          correct: 0,
          why: 'Il la juge juste et refuse le ton : une exigence commune, pas une arme.',
          band: 'c2',
        },
        {
          q: 'Que répond-il au reproche du terme ajouté ?',
          opts: [
            'Un ajustement stérile ne survit pas',
            'Les modèles ne sont jamais modifiés',
            'L’observation est souvent fausse',
            'La philosophie ne peut pas en juger',
          ],
          correct: 0,
          why: 'Le terme doit prédire autre chose ; sinon il meurt de sa propre stérilité.',
          band: 'c2',
        },
        {
          q: 'Que concède-t-il à la fin de l’échange ?',
          opts: [
            'Il n’a aucune trace du mécanisme qu’il décrit',
            'Sa discipline abandonne trop vite ses modèles',
            'La formule devrait être retirée',
            'Les hypothèses abandonnées sont mal choisies',
          ],
          correct: 0,
          why: 'Le registre des hypothèses abandonnées n’existe pas, ce qui est son propre reproche.',
          band: 'c2',
        },
      ],
    },
  ],
};
