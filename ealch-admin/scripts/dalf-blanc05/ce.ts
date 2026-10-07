// DALF C1 blanc-05: Compréhension des écrits. 12 questions, 25 points, 50 min.
//
// One text of ideas, 1500 to 2000 words (counted the FEI way, anything between
// two spaces), and twelve questions in text order, in three answer modes:
//
//   MCQ (3 options)        3   1, 2, 2         =  5
//   short, own words       5   2, 3, 2, 2, 3   = 12
//   vrai/faux justifié     4   2 each          =  8
//                                               ----
//                                                25
//
// ── DALF-36 · can school teach creativity, or only avoid stifling it ───────
//
// The text holds a position (creativity is always creativity IN something: it
// grows out of mastered knowledge, constraint and time, so school teaches it
// when it teaches its disciplines as knowledge still being made, not as a
// separate subject), reports two others (the defenders of « l’enfance
// créatrice »: creativity is natural and school can only stop stifling it;
// the « méthodistes »: creativity is a general skill trained by techniques in
// a dedicated workshop) and concedes to each (the measured decline is real
// and school does reward conformity; the techniques do produce more ideas in
// their own frame). It names their shared error (creativity taken as a
// general faculty, a spring or a muscle, independent of what one knows),
// reinterprets the decline (older children discard absurd ideas; the study
// counted ideas, not their relevance) and ends on constraint, time, grading
// and the knowledge-in-the-making formula.
//
// INVENTED, all of it: the author Bérénice Morandeau, the review « Les Marges
// du cahier », the Observatoire Lemaurie des pratiques scolaires and its study
// (six hundred children followed from six to twelve; original uses of a paper
// clip down from eleven on average to four), the collège de Mervanges and its
// weekly creativity hour created two years ago and the evaluation of it (more
// ideas in the workshop, no difference in written work in French or science),
// the music teacher and her three-note exercise. The paper-clip test is a
// stock exercise, attributed to no one.
//
// Families: locate (1), justify (2, 5, 7, 10), reformulate (3, 8),
// attribute (4), infer (9, 11), weigh (6, 12). Two 3-point questions, both
// Weigh.
//
// Vrai/faux key: V, F, V, F (two of each). Each statement paraphrases; every
// passage that justifies it is in `quotes`, verbatim, and the test checks it.
// Read once for the contrary: no passage supports the opposite answer.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { C1_CE_TARGETS } from '../exam-c1-targets.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId } from './common.ts';

export const CE_TEXT =
  'LE RESSORT ET LE MUSCLE\n' +
  'Bérénice Morandeau, Les Marges du cahier, revue d’idées sur l’école\n\n' +

  // INVENTED: the Observatoire Lemaurie, its six hundred children and the eleven and four.
  'Il existe un petit exercice que tout le monde a déjà rencontré sous une forme ou une autre : on tend un trombone à un enfant et on lui demande d’imaginer, en quelques minutes, tous les usages possibles de cet objet. ' +
  'L’Observatoire Lemaurie des pratiques scolaires a fait passer ce test aux mêmes six cents enfants à trois reprises, à six, neuf et douze ans. ' +
  'À six ans, ils proposaient en moyenne onze usages qu’aucun autre enfant de leur groupe n’avait trouvés ; à douze ans, quatre. ' +
  'Ce résultat a fait le tour des colloques et des réseaux, presque toujours accompagné de la même conclusion : entre six et douze ans, il se passe quelque chose qui éteint l’imagination, et ce quelque chose porte un nom, l’école.\n\n' +

  'Ceux qui tirent cette conclusion forment une famille ancienne, que j’appellerai les défenseurs de l’enfance créatrice. ' +
  'Pour eux, la créativité est un don naturel, présent chez tous les enfants, et que l’institution scolaire comprime peu à peu. ' +
  'Ils accusent la bonne réponse unique, que l’élève apprend vite à deviner dans le regard du maître ; ils accusent la crainte de la mauvaise note, l’immobilité, le silence, la copie qu’il faut rendre conforme au modèle. ' +
  'La créativité serait ainsi une sorte de ressort que l’on tend jusqu’à le briser. ' +
  'Ils n’en concluent pas que l’école doit enseigner la créativité, ce qui leur paraîtrait contradictoire, mais qu’elle doit cesser de l’étouffer. ' +
  'Leur programme tient en quelques mesures : alléger les programmes, multiplier les moments de jeu libre, renoncer aux notes avant l’âge de dix ans. ' +
  'À leurs yeux, la meilleure chose que l’école puisse faire pour l’imagination des enfants, c’est de lui laisser de la place.\n\n' +

  'Une autre famille, plus récente, refuse ce fatalisme. Appelons-la, sans malveillance, les méthodistes. ' +
  'Pour eux, la créativité n’est pas un don mystérieux, mais une compétence comme une autre, qui se travaille et se mesure. ' +
  'Il existe des techniques pour produire des idées : dresser une liste sans rien juger avant d’avoir terminé, combiner deux objets qui n’ont rien à voir, retourner un problème pour le prendre par la fin. ' +
  'Ce qui s’apprend peut s’enseigner, disent-ils, et ce qui s’enseigne mérite un horaire. ' +
  // INVENTED: the collège de Mervanges, its weekly hour, the two years and the evaluation.
  'C’est ainsi qu’est née, au collège de Mervanges, il y a deux ans, une heure hebdomadaire d’atelier de créativité, animée par des professeurs volontaires. ' +
  'L’expérience a été évaluée avec sérieux. ' +
  'Dans l’atelier, les élèves ont appris à produire beaucoup plus d’idées, et plus vite, qu’au début de l’année. ' +
  'Mais lorsqu’on a examiné leurs rédactions de français ou leurs comptes rendus d’expériences en sciences, on n’a relevé aucune différence avec ceux des élèves qui n’avaient pas suivi l’atelier. ' +
  'La créativité acquise le mercredi matin semblait rester enfermée dans la salle où on l’avait apprise. ' +
  'Les méthodistes ne se sont pas découragés pour autant. ' +
  'Une heure par semaine, répondent-ils, c’est bien peu face à trente heures de cours qui enseignent le contraire ; ' +
  'il faudrait étendre ces techniques à toutes les matières, former tous les professeurs, en faire une compétence évaluée comme les autres. ' +
  'Autrement dit, si la méthode n’a pas suffi, c’est qu’on ne l’a pas assez appliquée.\n\n' +

  'On comprend la séduction de la première de ces deux positions. ' +
  'Elle flatte l’enfant, dont elle fait un artiste en puissance, et elle flatte l’adulte, qui peut attribuer à l’école ce qu’il croit avoir perdu de sa propre fantaisie. ' +
  'Elle s’accorde aussi avec une image ancienne et tenace, celle du génie solitaire qui doit tout à son inspiration et rien à ses maîtres. ' +
  'La seconde position séduit pour d’autres raisons : elle promet des résultats, des grilles, des progrès mesurables, tout ce qu’une institution aime pouvoir montrer.\n\n' +
  'Je voudrais d’abord accorder à chacune de ces deux familles ce qui lui revient. ' +
  'Aux défenseurs de l’enfance créatrice, je concède que le recul est réel, et je ne doute pas de la mesure. ' +
  'Je leur concède aussi que l’école récompense volontiers la conformité : l’élève qui reproduit fidèlement la démarche attendue est rarement pénalisé, celui qui en invente une autre court toujours un risque. ' +
  'Aux méthodistes, je concède que leurs techniques fonctionnent dans le cadre où on les pratique. ' +
  'Un élève qui a appris à suspendre son jugement trouve effectivement plus d’idées en dix minutes qu’un élève qui ne l’a pas appris. ' +
  'Il serait de mauvaise foi de le nier.\n\n' +

  'Mais ces deux familles, qui se croient opposées, commettent à mes yeux la même erreur. ' +
  'Elles traitent la créativité comme une faculté générale, indépendante de ce que l’on sait. ' +
  'Pour les premières, c’est un ressort, qui existe avant tout apprentissage et que l’apprentissage abîme. ' +
  'Pour les seconds, c’est un muscle, que l’on peut entraîner à vide, sur des trombones, puis employer n’importe où. ' +
  'Or rien ne laisse penser que la créativité fonctionne ainsi. ' +
  'On n’invente jamais en général : on invente en mathématiques, en cuisine, en musique, en menuiserie, et toujours à partir de ce que l’on maîtrise déjà. ' +
  'Le musicien de jazz n’improvise que parce qu’il a travaillé ses gammes pendant des années ; ' +
  'son invention n’est pas l’absence de savoir, c’est un savoir devenu assez sûr pour qu’on puisse jouer avec lui. ' +
  'Le joueur d’échecs qui surprend son adversaire par un coup inattendu ne tire pas ce coup du néant : il connaît des milliers de positions, et c’est parce qu’il les connaît qu’il voit celle que personne n’a vue. ' +
  'Il en va de même, à une échelle plus modeste, dans une salle de classe. ' +
  'Un élève à qui l’on demande d’inventer un récit invente mieux s’il a lu beaucoup de récits : il dispose alors de formes à imiter, à combiner, à détourner. ' +
  'Celui qui n’en a lu aucun ne produit pas une histoire plus libre ; il reproduit, sans le savoir, la plus banale de celles qu’il a entendues. ' +
  'Et l’on peut se montrer très inventif dans un domaine et parfaitement conventionnel dans un autre, ce qui serait inexplicable si la créativité était une faculté unique, disponible partout à la fois.\n\n' +

  'Cette distinction éclaire autrement le chiffre de l’Observatoire. ' +
  'Les usages qu’un enfant de six ans imagine pour un trombone sont nombreux, mais beaucoup sont irréalisables : on ne fait pas une échelle avec un trombone, ni un bateau pour traverser la mer. ' +
  'À douze ans, l’enfant en propose moins, sans doute parce qu’il a appris à écarter de lui-même les idées absurdes. ' +
  'Ce tri n’est pas forcément le signe d’une imagination éteinte ; il peut être celui d’une imagination qui commence à rencontrer le réel. ' +
  'L’étude, il faut le noter, a compté les idées et leur rareté ; elle n’a pas cherché à savoir si elles étaient utilisables. ' +
  'Elle mesure donc quelque chose, mais peut-être pas ce que l’on croit.\n\n' +

  'Peut-on, dès lors, enseigner la créativité ? ' +
  'Je crois que oui, mais pas comme une matière supplémentaire, et pas non plus en se contentant de retirer à l’école ses exigences. ' +
  'L’école enseigne la créativité lorsqu’elle enseigne ses disciplines d’une certaine manière : en y laissant entrer des problèmes qui n’ont pas une seule solution, en montrant comment les connaissances ont été cherchées avant d’être trouvées, en donnant à l’élève l’occasion de se servir de ce qu’il sait pour faire autre chose que le réciter. ' +
  // INVENTED: the music teacher and her exercise.
  'J’ai vu une professeure de musique demander à sa classe de composer une courte mélodie avec trois notes seulement. ' +
  'Les élèves ont d’abord protesté que c’était impossible ; au bout d’une heure, ils avaient produit des mélodies plus variées que lorsqu’on leur laissait toutes les notes du clavier. ' +
  'La contrainte, ici, n’a pas bridé l’invention : elle lui a donné une prise. ' +
  'C’est une leçon que les défenseurs de l’enfance créatrice entendent mal, eux qui voient dans toute consigne un obstacle.\n\n' +

  'Deux conditions, pourtant, me semblent indispensables. ' +
  'La première concerne le temps. ' +
  'Une idée féconde vient rarement à la première tentative ; elle demande qu’on abandonne un travail, qu’on y revienne, qu’on laisse mûrir une piste. ' +
  'Or un emploi du temps découpé en tranches de cinquante-cinq minutes est l’ennemi de cette lente maturation : à peine un élève est-il entré dans un problème que la sonnerie l’en arrache. ' +
  'La seconde concerne l’évaluation. ' +
  'Un élève ne prendra aucun risque si chaque erreur lui coûte des points. ' +
  'Il faut donc distinguer, dans le travail, une phase d’essai, où l’on a le droit de se tromper sans que cela soit compté, et une phase d’achèvement, qui seule est évaluée. ' +
  'Ce n’est pas renoncer à l’exigence ; c’est la placer au bon moment. ' +
  'Les artistes, les chercheurs, les artisans procèdent tous ainsi : ils accumulent les esquisses, les brouillons, les essais manqués, et ne présentent au jugement d’autrui que ce qu’ils ont choisi de garder.\n\n' +

  'On me répondra que tout cela demande des enseignants eux-mêmes à l’aise dans leur discipline, assez sûrs de leur savoir pour accepter qu’un élève les emmène ailleurs. ' +
  'C’est vrai, et c’est peut-être là que se joue l’essentiel. ' +
  'Un professeur qui craint d’être pris en défaut ramènera toujours la classe vers la réponse qu’il connaît. ' +
  'Un professeur qui maîtrise sa matière peut se permettre de dire : « je ne sais pas, cherchons ».\n\n' +

  'La créativité n’est donc ni un ressort qu’il suffirait de ne pas comprimer, ni un muscle qu’on entraînerait à vide. ' +
  'Elle est la forme que prend un savoir lorsqu’on autorise celui qui le possède à s’en servir librement. ' +
  'La question n’est pas de savoir si l’école peut enseigner l’invention en plus du reste. ' +
  'Elle est de savoir si elle accepte de présenter le savoir lui-même comme quelque chose qui est encore en train de se faire, et dont l’élève pourrait, un jour, devenir à son tour l’un des auteurs.';

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
      label: 'Texte · Le ressort et le muscle',
      text: CE_TEXT,
      items: [
        // 1 · Locate · 1 pt
        {
          q: 'Qu’a établi l’étude de l’Observatoire Lemaurie ?',
          opts: [
            'Les mêmes enfants trouvaient moins d’usages originaux à douze ans qu’à six',
            'Les enfants scolarisés se montraient moins inventifs que les autres enfants',
            'Les usages trouvés à douze ans étaient plus réalistes que ceux de six ans',
          ],
          correct: 0,
          why: 'Les mêmes six cents enfants : onze usages originaux à six ans, quatre à douze. Aucun groupe non scolarisé n’est comparé ; le réalisme est l’hypothèse de l’auteure, et l’étude ne l’a pas mesuré.',
          band: 'c1',
          points: 1,
        },
        // 2 · Justify · Vrai · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? Pour les défenseurs de l’enfance créatrice, l’école servirait mieux l’imagination en intervenant moins qu’en ajoutant un enseignement. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'Ils n’en concluent pas que l’école doit enseigner la créativité',
            'mais qu’elle doit cesser de l’étouffer',
            'la meilleure chose que l’école puisse faire pour l’imagination des enfants, c’est de lui laisser de la place',
          ],
          why: 'Ils refusent d’« enseigner la créativité » et demandent que l’école « cesse de l’étouffer » et « lui laisse de la place ».',
          band: 'c1',
          points: 2,
        },
        // 3 · Reformulate · 2 pts
        {
          kind: 'short',
          q: 'Quelles mesures concrètes réclament les défenseurs de l’enfance créatrice ?',
          opts: [],
          correct: -1,
          keywords: [
            // Fewer contents. No bare 'moins': « plus de cours et moins de jeu » would meet it.
            ['alleg', 'moins de programme', 'moins de contenu', 'moins de matiere', 'reduire le programme', 'reduire les programmes', 'reduction des programmes', 'programmes plus legers', 'programme plus leger', 'programmes moins charges', 'programme moins charge'],
            ['jeux', 'jeu libre', 'moments de jeu', 'jouer', 'temps libre', 'moments libres', 'sans note', 'pas de note', 'supprimer les notes', 'suppression des notes', 'abandon des notes', 'abandonner les notes', 'renoncer aux notes', 'renoncement aux notes'],
          ],
          model: 'Alléger les programmes, multiplier les moments de jeu libre et renoncer aux notes avant dix ans.',
          why: '« Alléger les programmes, multiplier les moments de jeu libre, renoncer aux notes avant l’âge de dix ans. »',
          band: 'c1',
          points: 2,
        },
        // 4 · Attribute · 2 pts
        {
          q: 'Que retient l’auteure de l’évaluation de l’atelier de Mervanges ?',
          opts: [
            'Les élèves y produisaient plus d’idées sans que leurs autres travaux en profitent',
            'L’atelier a rendu les élèves plus inventifs dans toutes les matières',
            'L’atelier a été abandonné, faute de professeurs volontaires',
          ],
          correct: 0,
          why: 'Plus d’idées « dans l’atelier », mais « aucune différence » en français et en sciences : la créativité restait « enfermée dans la salle ». Rien n’est dit d’un abandon.',
          band: 'c1',
          points: 2,
        },
        // 5 · Justify · Faux · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? L’auteure met en doute l’exactitude du recul observé chez les enfants. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'je concède que le recul est réel, et je ne doute pas de la mesure',
          ],
          why: 'Elle accepte la mesure ; ce qu’elle discute, plus loin, c’est son interprétation.',
          band: 'c1',
          points: 2,
        },
        // 6 · Weigh · 3 pts
        {
          kind: 'short',
          q: 'Quelle erreur l’auteure reproche-t-elle aux deux familles qu’elle présente ?',
          opts: [],
          correct: -1,
          keywords: [
            // No bare 'general' (« en général, ils oublient les connaissances ») and no 'separe'
            // (« ils séparent les disciplines »): both met the second group with a wrong reading.
            ['generale', 'independ', 'en soi', 'a vide', 'isolee', 'detachee', 'autonome', 'abstraite', 'muscle', 'ressort', 'transpos', 'n importe ou', 'universelle'],
            ['savoir', 'sait', 'connaissance', 'domaine', 'discipline', 'matiere', 'contenu', 'maitris', 'apprentissage'],
          ],
          model: 'Elles font de la créativité une faculté générale, indépendante de ce que l’on sait, alors qu’on invente toujours dans un domaine que l’on maîtrise.',
          why: '« Elles traitent la créativité comme une faculté générale, indépendante de ce que l’on sait. »',
          band: 'c1',
          points: 3,
        },
        // 7 · Justify · Vrai · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? Selon l’auteure, improviser suppose une longue maîtrise préalable. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'Le musicien de jazz n’improvise que parce qu’il a travaillé ses gammes pendant des années',
            'son invention n’est pas l’absence de savoir, c’est un savoir devenu assez sûr pour qu’on puisse jouer avec lui',
          ],
          why: 'L’improvisation naît d’un savoir travaillé « pendant des années ».',
          band: 'c1',
          points: 2,
        },
        // 8 · Reformulate · 2 pts
        {
          kind: 'short',
          q: 'Comment l’auteure explique-t-elle autrement le recul mesuré chez les enfants de douze ans ?',
          opts: [],
          correct: -1,
          keywords: [
            // No 'censur': self-censorship out of fear is the reading she rejects.
            ['trie', 'trier', 'filtr', 'ecart', 'elimin', 'rejet', 'rejett', 'selection', 'renonc', 'abandonn', 'laisse de cote', 'laissent de cote'],
            // The ideas dropped are the absurd ones. No bare 'pertinen' or 'utile': « ils écartent
            // les idées pertinentes » met both groups.
            ['absurde', 'farfelu', 'saugrenu', 'irrealisable', 'inutilisable', 'irrealiste', 'impossible', 'fantaisiste', 'aberr', 'moins pertinentes', 'peu pertinentes', 'inutiles', 'reel', 'realite', 'realisme'],
          ],
          model: 'À douze ans, l’enfant a appris à écarter de lui-même les idées absurdes : il en propose moins parce que son imagination commence à tenir compte du réel.',
          why: '« Il a appris à écarter de lui-même les idées absurdes… une imagination qui commence à rencontrer le réel. »',
          band: 'c1',
          points: 2,
        },
        // 9 · Infer · 2 pts
        {
          q: 'Qu’illustre l’exemple de la mélodie composée avec trois notes ?',
          opts: [
            'Qu’une contrainte bien choisie peut stimuler l’invention au lieu de la freiner',
            'Que la musique se prête mieux que les autres matières à l’invention',
            'Qu’il faut supprimer les consignes pour laisser les élèves inventer',
          ],
          correct: 0,
          why: '« La contrainte, ici, n’a pas bridé l’invention : elle lui a donné une prise. » La musique n’est qu’un exemple ; la troisième option est la thèse que l’auteure réfute.',
          band: 'c1',
          points: 2,
        },
        // 10 · Justify · Faux · 2 pts
        {
          kind: 'tfj',
          q: 'Vrai ou faux ? L’auteure juge l’organisation horaire de l’école favorable au travail créatif. Justifiez en citant le texte.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'un emploi du temps découpé en tranches de cinquante-cinq minutes est l’ennemi de cette lente maturation',
            'à peine un élève est-il entré dans un problème que la sonnerie l’en arrache',
          ],
          why: 'L’emploi du temps est « l’ennemi » de la maturation des idées.',
          band: 'c1',
          points: 2,
        },
        // 11 · Infer · 2 pts
        {
          kind: 'short',
          q: 'Pourquoi l’auteure propose-t-elle de distinguer une phase d’essai qui ne serait pas évaluée ?',
          opts: [],
          correct: -1,
          keywords: [
            // The fear that stops risk-taking. Without it, « les essais sont trop longs à corriger et
            // pleins d’erreurs » met the error group.
            ['peur', 'crainte', 'craign', 'redout', 'apprehen', 'angoiss', 'oser', 'osent', 'audace', 'prendre des risques', 'prendre un risque', 'prennent des risques', 'prenne des risques', 'risquer', 'droit a l erreur', 'droit de se tromper', 'libre de se tromper', 'libres de se tromper'],
            ['erreur', 'tromp', 'echec', 'rater', 'rate', 'perte de points', 'perdre des points', 'sanction', 'penalis', 'coute', 'cout'],
          ],
          model: 'Parce qu’un élève n’ose prendre des risques que s’il a le droit de se tromper : si chaque erreur coûte des points, il s’en tient à la démarche attendue.',
          why: '« Un élève ne prendra aucun risque si chaque erreur lui coûte des points. »',
          band: 'c1',
          points: 2,
        },
        // 12 · Weigh · 3 pts
        {
          kind: 'short',
          q: 'Quelle réponse l’auteure apporte-t-elle finalement à la question posée sur l’enseignement de la créativité ?',
          opts: [],
          correct: -1,
          keywords: [
            ['discipline', 'matiere', 'savoir', 'connaissance', 'contenu'],
            // HOW: through the disciplines, knowledge shown in the making. « Il faut ajouter une
            // matière de créativité aux autres disciplines » must not pass, so no 'en plus' here.
            ['a travers', 'au sein', 'au coeur', 'integr', 'en train de se faire', 'inacheve', 'en construction', 'a la fois', 'en meme temps', 'et la liberte', 'avec la liberte', 'avec de la liberte', 'librement', 'se servir', 'servir de', 'utiliser'],
          ],
          model: 'Oui, mais à travers les disciplines elles-mêmes, en présentant le savoir comme encore en train de se faire et en laissant l’élève s’en servir librement.',
          why: 'Pas « comme une matière supplémentaire » ni en retirant les exigences : « présenter le savoir lui-même comme quelque chose qui est encore en train de se faire ».',
          band: 'c1',
          points: 3,
        },
      ],
    },
  ],
};
