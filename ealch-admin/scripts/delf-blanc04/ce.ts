// DELF B2 blanc-04 — Compréhension des écrits. 20 questions, 25 points, 60 min.
//
// Three exercises worth 9, 9 and 7. Exercises 1 and 2 are single continuous
// texts of 420 to 500 words; exercise 3 is the attribution set, four signed
// opinions totalling 360 to 420 words, six items choosing between the names.
//
// `textLengthViolations` measures all of that. It exists because blanc-03's
// first draft of exercise 3 came in at 323 words with every other reading rule
// green — four positions in 323 words is 80 words each, which is not enough to
// state a position AND the concession that separates it from its neighbour.
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

/* ═══ EXERCICE 1 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-76 · the four-year degree, examined by someone who thinks it survived by
// accident rather than by design.
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
//
// The author is NOT arguing for a shorter degree. She is arguing that nobody
// has ever had to defend the length, which is a different claim and the one the
// dearest question turns on.

export const CE_EX1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 1',
  prompt:
    'Vous lisez cet article dans un magazine spécialisé.\n' +
    'Lisez le texte puis répondez aux questions.',
  timingS: 1500,
  targetItemIds: uniq(ITEMS.universite),
  parts: [
    {
      label: 'Exercice 1 · quatre ans, et personne n’a eu à le justifier',
      text:
        'QUATRE ANS, ET PERSONNE N’A JAMAIS EU À LE JUSTIFIER\n\n' +
        'Il existe une question que l’on ne pose pas dans les conseils de faculté, ' +
        'et ce n’est pas parce qu’elle est taboue. C’est parce qu’elle a l’air résolue. ' +
        'Pourquoi une licence dure-t-elle quatre ans ?\n\n' +
        'La réponse attendue est qu’un programme exige ce temps. ' +
        'Elle est plausible et elle est invérifiable, ' +
        'puisque le programme a été écrit pour remplir quatre ans. ' +
        'On ne mesure pas un contenu avec un contenant que le contenu a fabriqué.\n\n' +
        'L’histoire est plus sobre. Notre durée vient d’un compromis administratif de 1954 ' +
        'entre deux ministères qui se disputaient le financement des bourses. ' +
        'Le chiffre quatre n’avait aucune justification pédagogique à l’époque, ' +
        'et les archives du comité le disent en toutes lettres. ' +
        'Il en a acquis une depuis, ce qui est différent : ' +
        'des générations d’enseignants ont construit des cursus cohérents dans ce cadre, ' +
        'et cette cohérence est réelle. Elle n’est simplement pas une preuve ' +
        'que le cadre était le bon.\n\n' +
        'Que se passe-t-il quand on essaie autre chose ? ' +
        'Trois établissements ont expérimenté un format en trois ans ' +
        'entre 2019 et 2024. Les résultats sont médiocres et instructifs. ' +
        'Les diplômés obtiennent des emplois comparables, ' +
        'et ils s’en déclarent moins satisfaits. ' +
        'Le taux d’abandon en première année a augmenté d’un tiers.\n\n' +
        'On lira cela comme un échec, et l’on aura tort de s’arrêter là. ' +
        'Les trois établissements ont comprimé quatre ans en trois. ' +
        'Aucun n’a retiré quoi que ce soit. On a donc mesuré ' +
        'l’effet d’un même programme donné plus vite, ' +
        'ce qui n’était pas la question posée. ' +
        'La hausse des abandons devient d’ailleurs lisible sous cet angle : ' +
        'un étudiant à qui l’on demande le même travail en trois quarts du temps ' +
        'n’a pas reçu un cursus plus court, il a reçu une semaine plus lourde, ' +
        'et ce sont deux réformes différentes que l’on continue de confondre.\n\n' +
        'Le vrai obstacle n’est pas là. Il est que personne ne veut nommer ' +
        'ce qu’il faudrait retirer. Un enseignant qui propose de supprimer ' +
        'un semestre propose toujours celui d’un collègue, ' +
        'et le collège des enseignants est précisément l’instance ' +
        'qui décide. Une réforme du contenu confiée à ceux ' +
        'dont le contenu est en jeu produit ce qu’elle a toujours produit : ' +
        'un ajustement des marges et une durée inchangée.\n\n' +
        'Je ne demande pas trois ans. Je demande qu’un conseil, une fois, ' +
        'ait à écrire pourquoi quatre. Si la réponse est bonne, elle sera écrite ' +
        'et nous en aurons fini. Si elle ne s’écrit pas, ' +
        'nous saurons ce que nous défendons depuis 1954.',
      items: [
        {
          q: 'D’où vient, selon l’auteure, la durée de quatre ans ?',
          opts: [
            'D’un compromis administratif de 1954 sur le financement des bourses',
            'D’une recommandation pédagogique européenne',
            'D’une décision des conseils de faculté',
            'D’un accord entre universités et employeurs',
          ],
          correct: 0,
          why: 'Un compromis de 1954 entre deux ministères, et les archives du comité le disent en toutes lettres.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Qu’est-il arrivé au taux d’abandon en première année dans les trois établissements ?',
          opts: [
            'Il a augmenté d’un tiers',
            'Il est resté stable',
            'Il a baissé légèrement',
            'Il a doublé',
          ],
          correct: 0,
          why: 'Une hausse d’un tiers, à côté d’emplois comparables et d’une satisfaction moindre.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi l’auteure juge-t-elle invérifiable la réponse « le programme exige ce temps » ?',
          opts: [
            'Le programme a été écrit pour remplir quatre ans',
            'Les programmes changent trop souvent',
            'Les enseignants ne les publient pas',
            'Les durées varient d’un pays à l’autre',
          ],
          correct: 0,
          why: 'On ne mesure pas un contenu avec un contenant que le contenu a fabriqué.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Pourquoi les trois expérimentations ne répondent-elles pas à la question posée ?',
          opts: [
            'Elles ont comprimé le programme sans rien en retirer',
            'Elles ont porté sur trop peu d’étudiants',
            'Elles ont duré moins de cinq ans',
            'Elles ont été menées par des établissements privés',
          ],
          correct: 0,
          why: 'Elles mesurent le même programme donné plus vite, pas un programme allégé.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que concède l’auteure à ceux qui défendent le format actuel ?',
          opts: [
            'Que des cursus réellement cohérents ont été bâtis dans ce cadre',
            'Que les diplômés en quatre ans obtiennent de meilleurs emplois',
            'Que la réforme coûterait trop cher',
            'Que les archives de 1954 sont incomplètes',
          ],
          correct: 0,
          why: 'Elle appelle cette cohérence réelle, tout en refusant d’y voir une preuve que le cadre était le bon.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Quelle est la demande exacte formulée à la fin de l’article ?',
          opts: [
            'Qu’un conseil soit obligé d’écrire une fois la justification de la durée',
            'Que la licence passe à trois ans',
            'Que les expérimentations soient étendues',
            'Que les conseils de faculté soient renouvelés',
          ],
          correct: 0,
          why: 'Elle écrit ne pas demander trois ans : elle demande que la justification soit écrite une fois.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Pourquoi une réforme du contenu échoue-t-elle, d’après l’auteure ?',
          opts: [
            'Elle est confiée à ceux dont le contenu est en jeu',
            'Les étudiants s’y opposent',
            'Les ministères refusent de la financer',
            'Les employeurs exigent quatre ans',
          ],
          correct: 0,
          why: 'Le collège des enseignants décide, et chacun propose de supprimer le semestre d’un collègue.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-81 · reconciliation processes, and what an apology is expected to do.
// Weights: 0.5 · 1 · 1 · 1.5 · 2 · 2.5 · 0.5 = 9
//
// The text takes a position that neither side of the usual argument holds: the
// apology is worth making AND the thing it is asked to produce is not something
// an apology can produce. A candidate who reads it as "for" or "against" will
// answer the two dear questions wrongly.

export const CE_EX2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 2',
  prompt:
    'Vous lisez cet article dans la presse.\n' +
    'Lisez le texte puis répondez aux questions.',
  timingS: 1500,
  targetItemIds: uniq(ITEMS.reconciliation),
  parts: [
    {
      label: 'Exercice 2 · ce qu’on demande à des excuses',
      text:
        'CE QU’ON DEMANDE À DES EXCUSES, ET CE QU’ELLES PEUVENT FAIRE\n\n' +
        'La commission de Valmeyre a rendu son rapport après quatre ans de travaux. ' +
        'Elle a entendu six cent vingt personnes, ' +
        'et l’État a présenté des excuses formelles en séance publique. ' +
        'Les commentaires qui ont suivi se partagent, comme toujours, en deux camps ' +
        'qui se trompent tous les deux, et pour la même raison.\n\n' +
        'Le premier camp dit que des excuses ne réparent rien. ' +
        'C’est exact et cela ne prouve pas ce qu’on lui fait dire. ' +
        'Un acte n’est pas inutile parce qu’il ne répare pas ; ' +
        'une signature ne rembourse rien non plus. ' +
        'Ce que fait une reconnaissance publique, et qu’aucun versement ne fait, ' +
        'c’est fermer une discussion sur les faits. ' +
        'Après Valmeyre, personne ne peut plus soutenir dans un journal ' +
        'que rien ne s’est produit, et quatre des six cent vingt témoignages ' +
        'avaient été publiquement mis en doute l’an dernier.\n\n' +
        'Le second camp dit que la page est tournée. ' +
        'C’est l’erreur symétrique et elle est plus coûteuse, ' +
        'parce qu’elle transforme une reconnaissance en quittance. ' +
        'Trois des associations entendues ont d’ailleurs refusé ' +
        'd’assister à la séance, pour cette raison exactement, ' +
        'et le rapport le mentionne sans le commenter.\n\n' +
        'La question utile n’est pas « les excuses suffisent-elles » ' +
        'mais « à quoi engagent-elles ». Sur ce point le rapport de Valmeyre ' +
        'est plus précis que la plupart. Il assortit la déclaration ' +
        'de onze mesures datées, dont sept ont un financement identifié. ' +
        'Les quatre autres n’en ont pas, et le rapport le dit à la page 14, ' +
        'dans une note dont personne n’a parlé pendant la semaine ' +
        'où l’on a beaucoup parlé du reste.\n\n' +
        'Ce déséquilibre est le vrai sujet. Une déclaration se fait en un jour ' +
        'et se filme ; une mesure financée s’étale sur cinq ans ' +
        'et ne se filme pas. Un gouvernement qui veut faire les deux ' +
        'est jugé sur la première le soir même ' +
        'et sur les secondes par une commission de suivi ' +
        'dont on ignore le nom. ' +
        'Il n’y a là aucun cynisme particulier. ' +
        'Les mêmes journaux qui ont consacré leur une à la séance ' +
        'ne consacreront pas leur une, dans quatre ans, ' +
        'à la troisième des onze mesures, et nous non plus. ' +
        'Une attention se dépense au moment où elle ne sert encore à rien.\n\n' +
        'Je propose donc un critère simple, et un seul. ' +
        'Douze mois après une déclaration de ce type, ' +
        'la question à poser n’est pas si elle était sincère. ' +
        'C’est combien des mesures annoncées ont commencé. ' +
        'À Valmeyre, la réponse arrivera en mars prochain, ' +
        'et elle vaudra tous les éditoriaux écrits en avril dernier.',
      items: [
        {
          q: 'Combien de personnes la commission a-t-elle entendues ?',
          opts: ['Six cent vingt', 'Six cents', 'Quatre cents', 'Onze'],
          correct: 0,
          why: 'Six cent vingt personnes en quatre ans de travaux.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Combien des onze mesures ont un financement identifié ?',
          opts: ['Sept', 'Quatre', 'Onze', 'Trois'],
          correct: 0,
          why: 'Sept sur onze ; les quatre autres n’en ont pas, ce que le rapport signale page 14.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi trois associations ont-elles refusé d’assister à la séance ?',
          opts: [
            'Elles craignaient que la reconnaissance serve de quittance',
            'Elles contestaient le nombre de personnes entendues',
            'Elles n’avaient pas été invitées à temps',
            'Elles réclamaient un financement pour les onze mesures',
          ],
          correct: 0,
          why: 'C’est l’erreur du second camp, et le rapport mentionne leur refus sans le commenter.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que reproche l’auteur au premier camp ?',
          opts: [
            'De conclure de l’absence de réparation à l’inutilité de l’acte',
            'De réclamer des excuses trop tardives',
            'De confondre la commission et le gouvernement',
            'D’ignorer le rapport de Valmeyre',
          ],
          correct: 0,
          why: 'Il leur donne raison sur le fait — des excuses ne réparent rien — et refuse la conclusion : une signature ne rembourse rien non plus.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Selon l’auteur, quel déséquilibre structure toute l’affaire ?',
          opts: [
            'Une déclaration se filme et se juge le soir même, une mesure financée ne se filme pas',
            'Les associations ont plus de temps de parole que l’État',
            'Le rapport est trop long pour être lu',
            'Les financements viennent de deux ministères différents',
          ],
          correct: 0,
          why: 'Un jour contre cinq ans, et une commission de suivi dont on ignore le nom.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Quel critère l’auteur propose-t-il pour juger une telle déclaration ?',
          opts: [
            'Le nombre de mesures annoncées qui ont commencé au bout de douze mois',
            'La sincérité perçue du responsable qui la prononce',
            'Le nombre de personnes entendues par la commission',
            'La présence des associations à la séance',
          ],
          correct: 0,
          why: 'Il écarte explicitement la sincérité au profit de ce qui a commencé, et fixe l’échéance à mars prochain.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Où le rapport signale-t-il les mesures sans financement ?',
          opts: ['Dans une note, page 14', 'Dans son introduction', 'Dans une annexe chiffrée', 'Dans le communiqué de presse'],
          correct: 0,
          why: 'Page 14, dans une note dont personne n’a parlé.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 3 — 7 points ═══════════════════════════════════════════════ */
//
// DELF-89 · should cities cap the number of visitors?
//
// NOT an ordinary MCQ. The four names ARE the options and must appear in the
// SAME ORDER on every item — a candidate scanning the page must not meet six
// different lists. This task is deliberately excluded from scatterKeys for that
// reason; its keys are authored across the names directly.
//
// Weights: 1 · 1 · 1.5 · 1 · 1.5 · 1 = 7
// Keys: Farid, Gwen, Hugo, Inès, Inès, Farid — 2/1/1/2, none above two.
//
// Four DISTINCT positions, which is the hardest constraint in the bank: Farid
// wants the cap and does not believe the reason usually given for it, Gwen
// opposes it as a transfer of the problem, Hugo accepts a cap and says the
// number is the wrong instrument, and Inès argues from inside the season about
// a variable no cap addresses.

export const CE_EX3: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 3',
  prompt:
    'Comprendre le point de vue de plusieurs locuteurs francophones.\n' +
    'Quatre personnes réagissent à la même question. ' +
    'Pour chaque affirmation, indiquez de qui il s’agit.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.tourisme),
  parts: [
    {
      label: 'Exercice 3 · faut-il plafonner le nombre de visiteurs ?',
      text:
        'FAUT-IL PLAFONNER LE NOMBRE DE VISITEURS ?\n\n' +
        'FARID — Je suis pour le plafond et contre la raison qu’on en donne. ' +
        'On nous explique que la ville est saturée, et les chiffres ne le montrent pas : ' +
        'nous recevons moins de monde qu’il y a dix ans. ' +
        'Ce qui a changé, c’est la répartition. Tout le monde arrive ' +
        'entre onze heures et quinze heures, aux six mêmes endroits. ' +
        'Un plafond annuel ne corrigerait rien du tout. ' +
        'Ce que je veux, c’est un plafond par créneau et par site, ' +
        'et j’appelle cela un plafond parce que c’en est un, ' +
        'mais il ne ressemble pas à celui du débat. ' +
        'Le mot nous coûte cher : nous discutons d’un chiffre annuel ' +
        'depuis deux ans.\n\n' +
        'GWEN — Un plafond ne supprime pas les visiteurs, il les déplace. ' +
        'La commune voisine n’a ni transports ni personnel, ' +
        'et c’est elle qui recevra ce que nous refuserons. ' +
        'Nous appellerons cela une réussite et elle appellera cela une invasion. ' +
        'Je préfère qu’on dise ce que nous faisons : ' +
        'nous exportons un coût vers des gens qui n’ont pas voté ici. ' +
        'Si nous le faisons quand même, ' +
        'que ce soit avec un accord signé et un partage des recettes, ' +
        'pas avec un communiqué. ' +
        'Personne là-bas n’a été consulté et personne ne le sera.\n\n' +
        'HUGO — J’accepte un plafond et je conteste qu’on le fixe en nombre de personnes. ' +
        'Deux cents personnes qui dorment ici pendant cinq jours ' +
        'coûtent moins et rapportent davantage que deux cents personnes ' +
        'descendues d’un car pour trois heures. ' +
        'Le nombre les compte pareil. ' +
        'Un plafond en nuitées, ou en places de car, dirait quelque chose ; ' +
        'un plafond en têtes ne dit rien et sera contourné en un été. ' +
        'Il suffira d’arriver la veille au soir.\n\n' +
        'INÈS — Je tiens un commerce sur la place et je vais parler de ce que je vois. ' +
        'Le problème n’est pas le nombre, il est le mois. ' +
        'Nous vivons neuf semaines par an et nous survivons quarante-trois. ' +
        'Un plafond appliqué à l’année réduirait les neuf semaines ' +
        'et ne remplirait pas les quarante-trois. ' +
        'Personne dans ce débat ne propose de rendre février supportable, ' +
        'et c’est pourtant le seul chiffre qui déciderait ' +
        'si je suis encore là dans cinq ans. ' +
        'Nous serons quatre commerces à fermer avant le prochain été.',
      items: [
        {
          q: 'Qui affirme que la ville reçoit moins de visiteurs qu’il y a dix ans ?',
          opts: ['Farid', 'Gwen', 'Hugo', 'Inès'],
          correct: 0,
          why: 'Farid : les chiffres ne montrent pas la saturation ; ce qui a changé est la répartition dans la journée.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qui demande un accord signé avec une autre commune ?',
          opts: ['Farid', 'Gwen', 'Hugo', 'Inès'],
          correct: 1,
          why: 'Gwen : si le coût est exporté, que ce soit avec un accord et un partage des recettes, pas un communiqué.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qui juge que l’unité de mesure choisie est mauvaise ?',
          opts: ['Farid', 'Gwen', 'Hugo', 'Inès'],
          correct: 2,
          why: 'Hugo : un plafond en nuitées ou en places de car dirait quelque chose ; un plafond en têtes ne dit rien.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Qui déplace la question du nombre vers celle du calendrier ?',
          opts: ['Farid', 'Gwen', 'Hugo', 'Inès'],
          correct: 3,
          why: 'Inès : neuf semaines de vie et quarante-trois de survie ; le problème est le mois, pas le nombre.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qui soutient qu’un plafond annuel aggraverait sa propre situation ?',
          opts: ['Farid', 'Gwen', 'Hugo', 'Inès'],
          correct: 3,
          why: 'Inès : il réduirait les neuf semaines sans remplir les quarante-trois autres.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Qui défend une mesure tout en rejetant l’argument habituellement avancé pour elle ?',
          opts: ['Farid', 'Gwen', 'Hugo', 'Inès'],
          correct: 0,
          why: 'Farid ouvre là-dessus : pour le plafond, contre la raison qu’on en donne, et le sien ne ressemble pas à celui du débat.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
