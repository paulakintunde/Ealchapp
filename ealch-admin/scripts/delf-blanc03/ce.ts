// DELF B2 blanc-03 — Compréhension des écrits. 20 questions, 25 points, 1 h.
//
// Three exercises worth 9, 9 and 7. The first two are single continuous texts
// of 420 to 500 words; the third is an ATTRIBUTION task and is a different
// exercise wearing MCQ clothing — see the note above CE_EX3.
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
// DELF-70 · peer review, defended by someone who lists its failures first.
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
//
// SELF-VERIFY: the author's position is not visible from any single paragraph,
// which is what the attribute and weigh questions need. A reader who stops
// after the catalogue of failures has him against the thing he defends.

export const CE_EX1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 1',
  prompt: 'Lisez le texte puis répondez aux questions.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.recherche),
  parts: [
    {
      label: 'Exercice 1 · défendre la relecture par les pairs',
      text:
        'CE QUE JE DÉFENDS QUAND JE DÉFENDS LA RELECTURE\n\n' +
        'Commençons par ce qui ne va pas, puisque c’est la partie sur laquelle ' +
        'tout le monde s’accorde. La relecture par les pairs est lente : ' +
        'un article attend en moyenne sept mois entre l’envoi et la publication. ' +
        'Elle est bénévole, ce qui signifie qu’elle repose sur le temps ' +
        'que des chercheurs prennent à leurs propres travaux. ' +
        'Elle détecte mal la fraude, et les cas retentissants de ces dernières années ' +
        'ont presque tous été découverts après publication, par des lecteurs ordinaires. ' +
        'Elle est enfin très inégale : deux relecteurs sur le même texte ' +
        'se contredisent plus souvent qu’ils ne se rejoignent.\n\n' +
        'J’ai passé onze ans à relire pour trois revues et je souscris à cette liste. ' +
        'Ce que je conteste, c’est la conclusion qu’on en tire, ' +
        'parce qu’elle repose sur une comparaison qui n’est jamais faite. ' +
        'On compare la relecture à un idéal où les articles seraient exacts, ' +
        'et non à ce qui se passerait sans elle. Or nous savons ce qui se passe sans elle : ' +
        'les serveurs de prépublication existent depuis longtemps, ' +
        'et l’on peut y observer, en accès libre, ce que devient un texte ' +
        'que personne n’a été obligé de lire jusqu’au bout.\n\n' +
        'Ce que fait la relecture n’est pas ce qu’on lui prête. ' +
        'Elle ne certifie pas qu’un résultat est vrai ; aucun relecteur ne refait l’expérience. ' +
        'Elle oblige un auteur à écrire pour quelqu’un qui n’est pas d’accord, ' +
        'et c’est un exercice qu’on ne fait pas spontanément. ' +
        'Les trois quarts des corrections que j’ai demandées en onze ans ' +
        'ne portaient pas sur les données mais sur des affirmations ' +
        'que les données ne soutenaient pas. Ce sont des phrases, pas des erreurs de calcul, ' +
        'et ce sont elles qu’un lecteur pressé retient.\n\n' +
        'L’objection sérieuse est ailleurs, et je ne l’ai jamais bien traitée. ' +
        'Ce travail est invisible. Il ne compte dans aucune évaluation, ' +
        'il ne figure sur aucun dossier, et la personne qui refuse de le faire ' +
        'n’en subit aucune conséquence. Un système qui repose entièrement ' +
        'sur la conscience professionnelle de gens à qui il ne donne rien ' +
        'ne tient que par habitude, et les habitudes se perdent.\n\n' +
        'Je ne propose donc pas de défendre la relecture telle qu’elle est. ' +
        'Je propose d’arrêter de la défendre par ses résultats, ' +
        'qui sont modestes et le resteront, et de la défendre par sa fonction, ' +
        'qui est de forcer une conversation que personne n’aurait autrement. ' +
        'Et de payer ceux qui la font, ce qui réglerait le seul problème ' +
        'de cette liste dont la solution est connue.',
      items: [
        {
          q: 'Combien de temps un article attend-il en moyenne ?',
          opts: ['Sept mois', 'Onze ans', 'Trois mois', 'Deux ans'],
          correct: 0,
          why: 'Le premier paragraphe donne la moyenne entre envoi et publication.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Comment les fraudes retentissantes ont-elles été découvertes ?',
          opts: [
            'Après publication, par des lecteurs ordinaires',
            'Par les relecteurs avant publication',
            'Par les revues elles-mêmes',
            'Par des logiciels de détection',
          ],
          correct: 0,
          why: 'Le texte le donne comme l’une des faiblesses reconnues de la relecture.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle comparaison l’auteur reproche-t-il à ses adversaires ?',
          opts: [
            'Comparer la relecture à un idéal plutôt qu’à son absence',
            'Comparer deux revues aux moyens différents',
            'Comparer des disciplines qui ne se ressemblent pas',
            'Comparer la durée à celle des prépublications',
          ],
          correct: 0,
          why: 'Il oppose l’idéal d’articles exacts à ce qui se passe sur les serveurs de prépublication.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Sur quoi portaient les trois quarts de ses demandes de correction ?',
          opts: [
            'Des affirmations que les données ne soutenaient pas',
            'Des erreurs de calcul',
            'Des problèmes de méthode expérimentale',
            'Des références manquantes',
          ],
          correct: 0,
          why: 'Des phrases, précise-t-il, et non des erreurs de calcul.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que dit l’auteur que la relecture ne fait PAS ?',
          opts: [
            'Certifier qu’un résultat est vrai',
            'Obliger un auteur à se justifier',
            'Retarder la publication',
            'Reposer sur du bénévolat',
          ],
          correct: 0,
          why: 'Aucun relecteur ne refait l’expérience ; ce qu’elle fait, c’est forcer l’écriture pour un contradicteur.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Quelle objection l’auteur reconnaît-il ne pas avoir bien traitée ?',
          opts: [
            'Le travail est invisible et sans conséquence pour qui le refuse',
            'Les relecteurs se contredisent trop souvent',
            'Les délais découragent les jeunes chercheurs',
            'Les revues sont trop nombreuses',
          ],
          correct: 0,
          why: 'Il la nomme comme l’objection sérieuse : un système qui ne donne rien à ceux qui le portent ne tient que par habitude.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que propose-t-il en conclusion ?',
          opts: [
            'La défendre par sa fonction, et payer ceux qui la font',
            'La rendre obligatoire dans toutes les revues',
            'La remplacer par des prépublications commentées',
            'La confier à des relecteurs professionnels à plein temps',
          ],
          correct: 0,
          why: 'Défendre la fonction plutôt que les résultats, et régler le seul problème dont la solution est connue.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-74 · naturalisation tests: what they measure and what they are for.
// Weights: 1 · 0.5 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
//
// The competing consideration is carried by a named source who disagrees with
// the author and is quoted at her strongest, so the attribute questions have
// two positions to separate rather than one position and a foil.

export const CE_EX2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 2',
  prompt: 'Lisez le texte puis répondez aux questions.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.immigration),
  parts: [
    {
      label: 'Exercice 2 · ce que mesure un test de naturalisation',
      text:
        'CE QUE MESURE UN TEST\n\n' +
        'Le test de naturalisation comporte trente questions et l’on doit en réussir vingt. ' +
        'Le taux de réussite officiel est de quatre-vingt-sept pour cent, ' +
        'et cette statistique est citée par les partisans du dispositif comme la preuve ' +
        'qu’il ne barre la route à personne. Elle prouve autre chose, ' +
        'et il suffit de savoir comment elle est calculée : ' +
        'elle porte sur les personnes qui se présentent à l’épreuve.\n\n' +
        'Une enquête menée sur deux mille dossiers montre que trente et un pour cent ' +
        'des personnes éligibles ne déposent jamais de demande, ' +
        'et que la première raison invoquée, loin devant le coût, ' +
        'est la crainte de l’examen. Une partie de cette crainte est infondée, ' +
        'ce que le taux de réussite démontre justement. ' +
        'Mais une statistique qui rassure ceux qui la lisent ' +
        'et qui ne parvient jamais à ceux qu’elle concerne ne fait pas son travail.\n\n' +
        'Sur le contenu, mon opinion a changé en écrivant cet article. ' +
        'J’attendais des questions absurdes et j’en ai trouvé peu. ' +
        'Les items portent sur le fonctionnement des institutions, ' +
        'sur les droits du salarié et sur les recours ouverts à un locataire. ' +
        'Ce sont des connaissances utiles, et l’argument selon lequel ' +
        'un citoyen né ici ne les possède pas davantage me paraît faible : ' +
        'il pourrait servir à supprimer n’importe quel examen.\n\n' +
        'La sociologue Hélène Vaurey, qui a suivi le dispositif depuis sa création, ' +
        'défend une position plus dure que la mienne et je la cite volontiers, ' +
        'parce qu’elle formule l’objection mieux que ses adversaires ne le croient. ' +
        'Selon elle, la question n’est pas ce que le test mesure mais ce qu’il annonce. ' +
        'Un pays qui fait passer un examen dit que l’appartenance se mérite, ' +
        'et il le dit à des gens qui vivent là depuis dix ans. ' +
        'Le contenu peut être irréprochable, ajoute-t-elle : le geste, lui, reste un geste.\n\n' +
        'Je ne la suis pas jusque-là, et voici pourquoi. ' +
        'Un examen dont on connaît le programme est le mécanisme le plus prévisible ' +
        'que puisse offrir une administration. Sans lui, la décision revient ' +
        'à l’appréciation d’un agent, ce qui a été le régime précédent ' +
        'et n’a laissé le souvenir de personne comme un modèle d’équité. ' +
        'Le test est un plafond bas et c’est aussi un plancher.\n\n' +
        'Ce que je retiens de son argument, en revanche, est ceci : ' +
        'personne, dans les dossiers que j’ai lus, n’a jamais expliqué ' +
        'pourquoi il fallait trente questions plutôt que dix. ' +
        'Le seuil n’a jamais été justifié, et un seuil qu’on ne justifie pas ' +
        'finit toujours par ressembler à ce qu’en dit Hélène Vaurey.',
      items: [
        {
          q: 'Combien de questions faut-il réussir ?',
          opts: ['Vingt sur trente', 'Trente sur trente', 'Dix sur trente', 'Quinze sur trente'],
          correct: 0,
          why: 'La première phrase donne les deux chiffres.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Sur qui porte le taux de réussite de quatre-vingt-sept pour cent ?',
          opts: [
            'Sur les personnes qui se présentent à l’épreuve',
            'Sur toutes les personnes éligibles',
            'Sur les dossiers déposés une première fois',
            'Sur un échantillon de deux mille dossiers',
          ],
          correct: 0,
          why: 'C’est le point du premier paragraphe : la statistique porte sur les présents.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Quelle est la première raison invoquée par ceux qui ne déposent pas ?',
          opts: ['La crainte de l’examen', 'Le coût de la procédure', 'La longueur des délais', 'Le manque d’information'],
          correct: 0,
          why: 'Loin devant le coût, précise le texte.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Qu’est-ce qui a changé pendant l’écriture de l’article ?',
          opts: [
            'L’opinion de l’auteur sur le contenu des questions',
            'Sa position sur le seuil de réussite',
            'Son jugement sur la sociologue citée',
            'Son estimation du taux d’abandon',
          ],
          correct: 0,
          why: 'Il attendait des questions absurdes et en a trouvé peu.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle est la position d’Hélène Vaurey ?',
          opts: [
            'Le geste compte, quel que soit le contenu du test',
            'Les questions sont mal choisies',
            'Le seuil devrait être abaissé à dix questions',
            'Le dispositif devrait être confié à des agents',
          ],
          correct: 0,
          why: 'Elle déplace la question de ce que le test mesure vers ce qu’il annonce ; le contenu peut être irréprochable.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi l’auteur ne la suit-il pas ?',
          opts: [
            'Un examen au programme connu est plus prévisible que l’appréciation d’un agent',
            'Les chiffres qu’elle avance sont contestés',
            'Le dispositif est trop récent pour être jugé',
            'Les candidats eux-mêmes le réclament',
          ],
          correct: 0,
          why: 'Il rappelle le régime précédent et conclut que le test est un plafond bas et aussi un plancher.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que retient-il malgré tout de l’argument de la sociologue ?',
          opts: [
            'Le seuil de trente questions n’a jamais été justifié',
            'Le test devrait être supprimé à terme',
            'Les institutions sont mal expliquées aux candidats',
            'Le taux de réussite est calculé de bonne foi',
          ],
          correct: 0,
          why: 'Un seuil qu’on ne justifie pas finit par ressembler à ce qu’elle en dit.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 3 — 7 points ═══════════════════════════════════════════════ */
//
// DELF-85 · should sport at school stay compulsory to the end?
//
// NOT an ordinary MCQ. The four names ARE the options and must appear in the
// SAME ORDER on every item — a candidate scanning the page must not meet six
// different lists. This task is deliberately excluded from scatterKeys for that
// reason; its keys are authored across the names directly.
//
// Weights: 1 · 1.5 · 1 · 1.5 · 1 · 1 = 7
// Keys: Awa, Cléa, Bastien, Damien, Awa, Bastien — 2/2/1/1, none above two.
//
// Four DISTINCT positions, which is the hardest constraint in the bank: Awa
// defends the obligation on equity grounds, Bastien opposes it from his own
// experience, Cléa keeps the obligation and rejects its content, and Damien
// argues from inside the changing room about a variable nobody legislates.

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
  targetItemIds: uniq(ITEMS.rpLoisirs),
  parts: [
    {
      label: 'Exercice 3 · le sport à l’école doit-il rester obligatoire jusqu’au bout ?',
      text:
        'LE SPORT À L’ÉCOLE DOIT-IL RESTER OBLIGATOIRE JUSQU’AU BOUT ?\n' +
        'Quatre personnes ayant participé à la consultation nous ont répondu.\n\n' +
        'AWA — Rendez-le facultatif et regardez qui arrête. Ce ne sera pas réparti au hasard. ' +
        'Les familles qui inscrivent leurs enfants au club le samedi continueront de bouger ; ' +
        'les autres n’auront plus rien du tout. L’obligation est le seul moment ' +
        'où le sport ne dépend pas de ce que les parents peuvent payer. ' +
        'On me dit que forcer quelqu’un ne lui donne pas le goût. ' +
        'C’est exact, et ce n’est pas l’objectif que je défends. ' +
        'Je défends deux heures par semaine où un enfant apprend ce dont son corps est capable, ' +
        'et je ne connais aucun autre endroit où cela lui soit proposé gratuitement.\n\n' +
        'BASTIEN — J’ai eu douze ans de sport obligatoire et j’en suis sorti ' +
        'en évitant toute activité physique pendant dix ans. ' +
        'Ce n’est pas une anecdote : c’est le résultat que le système a produit sur moi ' +
        'et sur la moitié de ma classe. On ne peut pas défendre une obligation ' +
        'par ses intentions quand on refuse de regarder ce qu’elle laisse derrière. ' +
        'Le volontariat produirait moins d’heures et davantage d’adultes qui bougent. ' +
        'On me répondra que je généralise à partir de mon cas. ' +
        'Je réponds qu’on généralise depuis quarante ans à partir de l’intention, ' +
        'et que personne n’a jamais mesuré ce que devenaient les élèves comme moi.\n\n' +
        'CLÉA — Je maintiens l’obligation et je change tout ce qu’il y a dedans. ' +
        'Le problème n’est pas qu’on impose du sport, c’est qu’on impose la compétition ' +
        'à des élèves dont on sait qu’ils perdront. Marcher, nager, danser, ' +
        'porter une charge correctement : rien de tout cela ne se classe, ' +
        'et tout cela sert pendant soixante ans. Ceux qui veulent supprimer l’obligation ' +
        'et ceux qui veulent la garder défendent en réalité le même contenu.\n\n' +
        'DAMIEN — J’enseigne cette matière depuis vingt-deux ans et je vais dire ' +
        'ce dont aucune tribune ne parle. Ce qui décide, ce n’est ni le programme ' +
        'ni le caractère obligatoire : ce sont les vestiaires. ' +
        'Les élèves qui décrochent décrochent au moment de se changer devant les autres, ' +
        'et cela arrive vers treize ans, en une saison. ' +
        'J’ai obtenu des cabines dans deux établissements sur cinq ' +
        'et l’absentéisme y a baissé plus que pour toute réforme que j’ai vue passer. ' +
        'Cela ne coûte pas cher et cela ne figure dans aucun programme, ' +
        'parce qu’une cloison ne se défend pas dans un discours ' +
        'et qu’une réforme de contenu, si.',
      items: [
        {
          q: 'Cette personne défend l’obligation parce que sa suppression trierait selon les moyens des familles.',
          opts: ['Awa', 'Bastien', 'Cléa', 'Damien'],
          correct: 0,
          why: 'Elle décrit qui continuerait de bouger et qui n’aurait plus rien.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne garde le cadre et conteste entièrement ce qu’il contient.',
          opts: ['Awa', 'Bastien', 'Cléa', 'Damien'],
          correct: 2,
          why: 'Cléa maintient l’obligation et remplace la compétition par des gestes qui ne se classent pas.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Cette personne juge une politique sur ce qu’elle a produit plutôt que sur ses intentions.',
          opts: ['Awa', 'Bastien', 'Cléa', 'Damien'],
          correct: 1,
          why: 'Bastien oppose douze ans d’obligation à dix ans d’évitement, pour lui et la moitié de sa classe.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne désigne un facteur matériel dont le débat ne parle jamais.',
          opts: ['Awa', 'Bastien', 'Cléa', 'Damien'],
          correct: 3,
          why: 'Damien nomme les vestiaires et cite la baisse de l’absentéisme là où des cabines existent.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Cette personne accorde une objection et dit qu’elle ne vise pas ce qu’elle défend.',
          opts: ['Awa', 'Bastien', 'Cléa', 'Damien'],
          correct: 0,
          why: 'Awa admet que forcer ne donne pas le goût, et répond que ce n’est pas son objectif.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Cette personne affirme qu’un régime volontaire produirait plus d’adultes actifs.',
          opts: ['Awa', 'Bastien', 'Cléa', 'Damien'],
          correct: 1,
          why: 'Bastien conclut sur moins d’heures et davantage d’adultes qui bougent.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
