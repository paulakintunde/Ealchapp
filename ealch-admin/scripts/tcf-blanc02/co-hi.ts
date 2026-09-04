// TCF Canada blanc-02 — Compréhension orale, the upper slope (B2, C1, C2).
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
// ── Where the corpus runs out ──────────────────────────────────────────────
//
// C2 routes to `methode-scientifique` at C1, because there are no published C2
// items at all on any theme. pick-items.ts reports that fallback rather than
// hiding it: a candidate who misses the last three questions is sent to the
// hardest material that exists, which is the honest answer and not a satisfying
// one. blanc-01 does the same on `philosophie`.
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
// asks for the meaning. A candidate who catches only the fact picks a
// distractor that is TRUE and does not answer the question.

export const CO_B2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Compréhension orale · B2',
  prompt: 'Vous allez entendre quatre documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 518,
  targetItemIds: uniq(ITEMS.reseauxSociaux.b2, ITEMS.tourisme.b2, ITEMS.ecologie.b2, ITEMS.questionsSociales.b2),
  parts: [
    {
      label: 'Document 20 · la publicité ciblée',
      playCount: 1,
      readWindowS: 25,
      durationS: 75,
      text:
        'UNE ANIMATRICE : Neuf personnes sur dix disent refuser la publicité ciblée, ' +
        'et presque autant acceptent les cookies au premier clic. Comment lit-on cela ?\n' +
        'UN JURISTE : On le lit comme un consentement qui n’en est pas un. ' +
        'Une case qu’on coche pour faire disparaître une fenêtre ne dit rien de ce qu’on veut. ' +
        'Elle dit qu’on voulait lire l’article.\n' +
        'UNE CHERCHEUSE : Je vous accorde la fenêtre. Je ne vous accorde pas la conclusion. ' +
        'Quand on donne aux gens un vrai choix, présenté correctement, sans fatigue et sans piège, ' +
        'une partie d’entre eux accepte quand même. Pas la majorité, mais une partie. ' +
        'Ceux-là consentent vraiment, et les traiter comme des victimes est une autre façon ' +
        'de ne pas les écouter.\n' +
        'UN JURISTE : Une partie, oui. Le droit ne peut pas construire une règle sur une partie. ' +
        'Il doit protéger celui qui clique sans lire, parce que c’est le cas ordinaire.\n' +
        'UNE CHERCHEUSE : Alors dites que vous protégez une moyenne. Ne dites pas que personne ne consent.\n' +
        'UN JURISTE : C’est une nuance que j’accepte, et qui ne change pas la règle.',
      items: [
        {
          q: 'Sur quel constat les deux intervenants s’accordent-ils ?',
          opts: [
            'La fenêtre de cookies ne recueille pas un vrai consentement',
            'Personne ne souhaite de publicité ciblée',
            'La publicité ciblée devrait être interdite',
            'Les sondages sur le sujet sont mal construits',
          ],
          correct: 0,
          why: 'La chercheuse ouvre par « je vous accorde la fenêtre ». Le désaccord porte sur ce qu’on en conclut.',
          band: 'b2',
        },
        {
          q: 'Que reproche la chercheuse à la position du juriste ?',
          opts: [
            'Elle nie l’existence de gens qui consentent réellement',
            'Elle sous-estime le nombre de fenêtres affichées',
            'Elle ignore le droit européen',
            'Elle défend les entreprises',
          ],
          correct: 0,
          why: 'Elle admet que ce n’est pas la majorité, et refuse qu’on traite cette partie comme des victimes.',
          band: 'b2',
        },
        {
          q: 'Sur quoi le juriste fonde-t-il sa règle ?',
          opts: [
            'Sur le cas ordinaire, celui qui clique sans lire',
            'Sur les préférences déclarées dans les sondages',
            'Sur une décision de justice récente',
            'Sur le nombre de sites concernés',
          ],
          correct: 0,
          why: 'Il dit que le droit doit protéger celui qui clique sans lire, parce que c’est le cas ordinaire.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 21 · le tourisme dans les villes historiques',
      playCount: 1,
      readWindowS: 25,
      durationS: 75,
      text:
        'UN CHRONIQUEUR : Corbeny reçoit quatre millions de visiteurs pour douze mille habitants. ' +
        'Le chiffre est connu et il ne dit presque rien.\n' +
        'UNE ÉLUE : Il dit tout de même que le centre est devenu invivable.\n' +
        'UN CHRONIQUEUR : Il dit que quatre millions de personnes viennent. ' +
        'Ce qui rend le centre invivable, ce n’est pas leur nombre, c’est qu’ils suivent tous ' +
        'le même itinéraire, aux mêmes heures, entre trois rues. ' +
        'À deux cents mètres, les commerces ferment faute de clients.\n' +
        'UNE ÉLUE : Vous décrivez une concentration, j’en conviens. ' +
        'Mais on ne redistribue pas des visiteurs comme on redistribue une recette fiscale. ' +
        'Ils vont là où sont les images qu’ils ont vues avant de venir.\n' +
        'UN CHRONIQUEUR : Ce qui veut dire que le levier n’est pas le nombre d’entrées, ' +
        'mais ce qu’on montre. Une ville qui ne publie qu’une place ne doit pas s’étonner ' +
        'que tout le monde s’y tienne.\n' +
        'UNE ÉLUE : Sur ce point je vous suis. Je maintiens qu’à quatre millions, ' +
        'aucune répartition ne rend le centre calme.\n' +
        'UN CHRONIQUEUR : Calme, non. Vivable, peut-être. ' +
        'Une ville qui a douze mille habitants et quatre millions de visiteurs ' +
        'ne redeviendra jamais tranquille, et ce n’est pas ce qu’on lui demande. ' +
        'On lui demande que les gens qui y vivent puissent acheter du pain.\n' +
        'UNE ÉLUE : Alors nous sommes d’accord sur l’objectif et pas sur le moyen, ' +
        'ce qui est déjà mieux que la plupart des débats sur le sujet.',
      items: [
        {
          q: 'Selon le chroniqueur, qu’est-ce qui rend le centre invivable ?',
          opts: [
            'La concentration des visiteurs sur un même parcours',
            'Le nombre total de visiteurs',
            'Le manque de logements',
            'La fermeture des commerces',
          ],
          correct: 0,
          why: 'Il déplace la cause du nombre vers l’itinéraire : mêmes rues, mêmes heures, et le vide à deux cents mètres.',
          band: 'b2',
        },
        {
          q: 'Que concède l’élue ?',
          opts: [
            'Qu’il s’agit bien d’un problème de concentration',
            'Que le tourisme devrait être limité',
            'Que la ville communique mal',
            'Que les commerces sont mal situés',
          ],
          correct: 0,
          why: '« Vous décrivez une concentration, j’en conviens », avant d’objecter sur la faisabilité.',
          band: 'b2',
        },
        {
          q: 'Quel levier le chroniqueur propose-t-il ?',
          opts: [
            'Changer les images que la ville diffuse',
            'Limiter le nombre d’entrées',
            'Élargir les rues du centre',
            'Déplacer les commerces',
          ],
          correct: 0,
          why: 'Le levier n’est pas le nombre d’entrées mais ce qu’on montre : une ville qui ne publie qu’une place les concentre.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 22 · densifier ou non',
      playCount: 1,
      readWindowS: 22,
      durationS: 70,
      text:
        'UNE URBANISTE : Construire plus haut au centre évite de bétonner les terres agricoles autour. ' +
        'Sur le bilan carbone, la démonstration est faite et je ne la conteste pas.\n' +
        'UN ARCHITECTE : Moi non plus. Le problème est que « plus haut » ne dit pas « plus dense ». ' +
        'On a construit des tours entourées de parkings qui logent moins de gens à l’hectare ' +
        'que des rues de trois étages.\n' +
        'UNE URBANISTE : C’est un défaut de projet, pas un défaut de principe.\n' +
        'UN ARCHITECTE : C’est un défaut qui se répète depuis cinquante ans. ' +
        'À un moment, ce qui se répète cesse d’être un accident et devient la façon dont on construit.\n' +
        'UNE URBANISTE : Alors nous devrions parler de la règle qui autorise ces parkings, ' +
        'et non de la hauteur.\n' +
        'UN ARCHITECTE : Voilà exactement ce que je demande depuis le début. ' +
        'Le débat public porte sur des silhouettes, parce qu’une silhouette se photographie ' +
        'et se met en une. Le nombre de places de stationnement imposé par mètre carré ' +
        'construit ne se photographie pas, et c’est pourtant lui qui décide ' +
        'du nombre de gens qui vivront là.\n' +
        'UNE URBANISTE : Je vous accorde que nous discutons de ce qui se voit. ' +
        'Je vous ferai remarquer que la hauteur, elle, se vote, et que la règle de stationnement ' +
        'se rédige dans une annexe que personne ne lit. ' +
        'Vous demandez un débat sur le document le moins lisible de tout le dossier.\n' +
        'UN ARCHITECTE : Je demande un débat sur celui qui produit l’effet.',
      items: [
        {
          q: 'Sur quoi les deux s’accordent-ils d’emblée ?',
          opts: [
            'Densifier le centre vaut mieux que bétonner les terres agricoles',
            'Les tours sont une erreur architecturale',
            'La règle sur les parkings doit changer',
            'Le bilan carbone est mal calculé',
          ],
          correct: 0,
          why: 'Elle pose la démonstration carbone, il répond « moi non plus », et le débat porte sur la suite.',
          band: 'b2',
        },
        {
          q: 'Quelle est l’objection de l’architecte ?',
          opts: [
            'Construire plus haut ne produit pas nécessairement plus de densité',
            'Les immeubles hauts coûtent trop cher',
            'Les habitants refusent les tours',
            'Les terres agricoles sont déjà perdues',
          ],
          correct: 0,
          why: 'Il sépare hauteur et densité : des tours entourées de parkings logent moins à l’hectare que trois étages.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 23 · travailler le dimanche',
      playCount: 1,
      readWindowS: 22,
      durationS: 70,
      text:
        'UNE JOURNALISTE : Les salariés du secteur sont volontaires et payés double. ' +
        'Où est le problème ?\n' +
        'UN SYNDICALISTE : Le volontariat, sur le papier, existe. ' +
        'Dans un magasin de quinze personnes où le planning est fait par le responsable, ' +
        'refuser trois dimanches de suite se remarque. Personne ne vous sanctionne. ' +
        'On vous donne les mardis.\n' +
        'UNE DIRECTRICE : Nos enquêtes internes disent le contraire : huit sur dix se déclarent satisfaits.\n' +
        'UN SYNDICALISTE : Je ne conteste pas votre chiffre. Je vous demande qui répond ' +
        'à une enquête interne, et ce que dirait celui qui a déjà arrêté de refuser.\n' +
        'UNE DIRECTRICE : Vous me demandez de prouver ce qui ne se dit pas.\n' +
        'UN SYNDICALISTE : Je vous demande de regarder qui travaille les dimanches de décembre ' +
        'depuis trois ans. Ce sont les mêmes noms, et ce ne sont pas les mieux payés. ' +
        'Un volontariat qui produit toujours la même liste mérite une question.\n' +
        'UNE DIRECTRICE : Cette liste, je peux la sortir, et je le ferai dès cette semaine.\n' +
        'UN SYNDICALISTE : Sortez-la. En attendant, ne concluez pas d’un silence qu’il est un accord.',
      items: [
        {
          q: 'Que reproche le syndicaliste au volontariat ?',
          opts: [
            'Un refus répété se paie sans jamais être sanctionné',
            'Il n’est pas prévu par la loi',
            'Il est mal rémunéré',
            'Il ne concerne que les grands magasins',
          ],
          correct: 0,
          why: 'Personne ne sanctionne : on vous donne les mardis. La contrainte est réelle et informelle.',
          band: 'b2',
        },
        {
          q: 'Comment traite-t-il le chiffre de la directrice ?',
          opts: [
            'Il l’accepte et met en doute ce qu’il mesure',
            'Il le juge inventé',
            'Il propose une autre enquête',
            'Il l’ignore',
          ],
          correct: 0,
          why: '« Je ne conteste pas votre chiffre » : il interroge qui répond, pas la valeur.',
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
// Each key requires holding a concession and a refusal at the same time.

export const CO_C1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'c1',
  label: 'Compréhension orale · C1',
  prompt: 'Vous allez entendre trois documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 475,
  targetItemIds: uniq(ITEMS.ethique.c1, ITEMS.philosophie.c1, ITEMS.methodeScientifique.c1),
  parts: [
    {
      label: 'Document 30 · le consentement éclairé',
      playCount: 1,
      readWindowS: 30,
      durationS: 105,
      text:
        'UNE MODÉRATRICE : Le formulaire fait onze pages. Le patient signe en quatre minutes. ' +
        'Que signe-t-il ?\n' +
        'UN MÉDECIN : Il signe qu’on lui a parlé. Ce n’est pas rien et ce n’est pas ce qu’on prétend. ' +
        'Le document protège l’établissement d’abord, et le patient ensuite. ' +
        'Je le dis sans amertume : c’est ainsi qu’il a été écrit, par des juristes, après des procès.\n' +
        'UNE JURISTE : Je vous suis sur l’origine. Je ne vous suis pas sur la conséquence. ' +
        'Un document illisible ne protège pas davantage l’établissement, il le protège moins bien : ' +
        'un juge regarde ce que le patient pouvait comprendre, pas ce qu’on lui a remis.\n' +
        'UN MÉDECIN : Alors nous avons onze pages qui ne protègent personne.\n' +
        'UNE JURISTE : Nous avons onze pages qui rassurent celui qui les a rédigées. ' +
        'C’est une troisième chose, et c’est la plus difficile à corriger, ' +
        'parce que personne n’est responsable de l’ensemble.\n' +
        'UNE MODÉRATRICE : Que faudrait-il, concrètement ?\n' +
        'UN MÉDECIN : Une page. Et un entretien dont on note qu’il a eu lieu, avec ce qui a été demandé.\n' +
        'UNE JURISTE : Une page ne tiendra pas. Dès qu’un cas particulier surviendra, ' +
        'quelqu’un ajoutera un paragraphe, et personne n’aura jamais le mandat d’en retirer un. ' +
        'C’est de cela qu’il faut décider, pas de la longueur.\n' +
        'UN MÉDECIN : Vous décrivez un service qui grossit tout seul.\n' +
        'UNE JURISTE : Je décris ce que fait n’importe quel texte que plusieurs métiers relisent ' +
        'et que personne ne possède. Ajouter est sans risque pour celui qui ajoute ; ' +
        'retirer engage celui qui retire. Tant que cette asymétrie tient, la longueur revient.\n' +
        'UN MÉDECIN : Je vous suis, et je remarque où nous sommes arrivés. ' +
        'Nous avons commencé par le patient qui signe en quatre minutes, ' +
        'et nous parlons d’organigramme.\n' +
        'UNE JURISTE : Nous parlons de la seule chose qui changerait ses quatre minutes.',
      items: [
        {
          q: 'Sur quoi le médecin et la juriste s’accordent-ils ?',
          opts: [
            'Le formulaire a été écrit d’abord pour l’établissement',
            'Le patient lit rarement ce qu’il signe',
            'Le document devrait être supprimé',
            'Les procès sont trop nombreux',
          ],
          correct: 0,
          why: 'Le médecin donne l’origine juridique, la juriste répond « je vous suis sur l’origine ».',
          band: 'c1',
        },
        {
          q: 'Quelle correction la juriste apporte-t-elle ?',
          opts: [
            'Un document illisible protège moins bien l’établissement',
            'Le formulaire protège surtout le patient',
            'Les juges ne lisent pas les formulaires',
            'La longueur n’a aucune importance',
          ],
          correct: 0,
          why: 'Un juge regarde ce que le patient pouvait comprendre, pas ce qui lui a été remis.',
          band: 'c1',
        },
        {
          q: 'Pourquoi doute-t-elle de la solution proposée ?',
          opts: [
            'Rien n’empêchera le document de s’allonger de nouveau',
            'Une page ne serait pas légale',
            'Les médecins refuseraient l’entretien',
            'Les patients demandent des détails',
          ],
          correct: 0,
          why: 'Quelqu’un ajoutera toujours un paragraphe et personne n’a le mandat d’en retirer un.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 31 · ce qui ne se traduit pas',
      playCount: 1,
      readWindowS: 28,
      durationS: 100,
      text:
        'UN JOURNALISTE : Vous refusez le mot « intraduisible ».\n' +
        'UNE TRADUCTRICE : Je refuse ce qu’on en fait. Tout se traduit, c’est le métier. ' +
        'Ce qui ne se transporte pas, c’est le réseau autour du mot : ce à quoi il fait écho, ' +
        'ce qu’il évite de dire, ce qu’il coûte à celui qui l’emploie. ' +
        'On rend le sens et on perd la position.\n' +
        'UN JOURNALISTE : Un lecteur dirait que c’est perdre le sens.\n' +
        'UNE TRADUCTRICE : Un lecteur aurait tort, et il aurait raison de se plaindre. ' +
        'La phrase française sera juste. Elle sera juste comme une photographie d’un plat est juste : ' +
        'rien n’est faux et personne n’a dîné.\n' +
        'UN JOURNALISTE : Que faites-vous alors ?\n' +
        'UNE TRADUCTRICE : Je choisis ce que je sacrifie, et je le choisis à chaque page. ' +
        'Parfois la musique, parfois la précision, parfois la politesse du ton. ' +
        'Ce qu’un traducteur ne peut pas faire, c’est tout garder ; ' +
        'ce qu’il ne doit pas faire, c’est laisser croire qu’il n’a rien laissé.\n' +
        'UN JOURNALISTE : Vous décrivez une perte permanente.\n' +
        'UNE TRADUCTRICE : Je décris un choix permanent. La perte, elle, est ce qui rend le choix nécessaire.\n' +
        'UN JOURNALISTE : Donnez-moi un cas.\n' +
        'UNE TRADUCTRICE : Un personnage dit à sa mère une phrase de six mots ' +
        'qui, dans sa langue, s’adresse à une inconnue. Le lecteur d’origine entend la distance ' +
        'avant d’entendre le sens. En français, la même politesse existe, ' +
        'mais elle sonne comme du théâtre ancien, et le lecteur entend un costume, pas une blessure. ' +
        'Alors je casse la syntaxe. La phrase devient laide et elle fait le travail.\n' +
        'UN JOURNALISTE : Un critique vous reprochera d’avoir écrit une phrase laide.\n' +
        'UNE TRADUCTRICE : Un critique aura raison. Il comparera ma phrase à celle de l’auteur ' +
        'et la mienne sera moins belle. Ce qu’il ne peut pas comparer, ' +
        'c’est ce que ma phrase fait à un lecteur qui ne connaît pas l’original, ' +
        'et c’est pourtant le seul lecteur pour qui je travaille.\n' +
        'UN JOURNALISTE : Vous traduisez donc contre le critique.\n' +
        'UNE TRADUCTRICE : Je traduis pour quelqu’un qui n’a pas le livre à côté. ' +
        'C’est une position modeste et je n’en connais pas d’autre qui tienne.',
      items: [
        {
          q: 'Que soutient exactement la traductrice ?',
          opts: [
            'Le sens passe, mais ce qui entoure le mot ne passe pas',
            'Certains textes ne peuvent pas être traduits',
            'La traduction trahit toujours le sens',
            'Les lecteurs ne remarquent pas les pertes',
          ],
          correct: 0,
          why: 'Tout se traduit ; ce qui ne se transporte pas est le réseau autour du mot, sa position.',
          band: 'c1',
        },
        {
          q: 'Que veut dire la comparaison avec la photographie d’un plat ?',
          opts: [
            'Une phrase peut être exacte et rester sans effet',
            'La traduction embellit l’original',
            'Les images valent mieux que les mots',
            'Le lecteur se contente de peu',
          ],
          correct: 0,
          why: '« Rien n’est faux et personne n’a dîné » : l’exactitude n’est pas l’expérience.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 32 · ce qui compte comme preuve',
      playCount: 1,
      readWindowS: 28,
      durationS: 100,
      text:
        'UNE CONFÉRENCIÈRE : On enseigne qu’une preuve est ce qui contraint un esprit raisonnable. ' +
        'La formule est belle et circulaire : elle définit la preuve par son effet ' +
        'et l’esprit raisonnable par ce qui le contraint.\n' +
        'UN PHYSICIEN : Elle est circulaire et elle marche. Dans ma discipline, ' +
        'nous savons ce qui compte : un effet reproduit, une incertitude bornée, ' +
        'un désaccord qui se règle en refaisant la mesure.\n' +
        'UNE CONFÉRENCIÈRE : Vous décrivez une communauté qui s’est mise d’accord sur ses critères. ' +
        'C’est précieux et ce n’est pas universel. En histoire, l’effet ne se reproduit jamais. ' +
        'On ne refait pas une bataille pour vérifier.\n' +
        'UN PHYSICIEN : Je l’accorde. Mais alors ne dites pas « preuve », dites « faisceau ». ' +
        'Le mot emprunté à ma discipline fait croire à une contrainte qui n’existe pas chez vous.\n' +
        'UNE CONFÉRENCIÈRE : Le mot vous appartient si peu que vous l’avez pris aux juristes, ' +
        'qui l’avaient déjà. Ce que vous appelez emprunt est un retour.\n' +
        'UN PHYSICIEN : Voilà une contrainte à laquelle mon esprit raisonnable cède.\n' +
        'UNE CONFÉRENCIÈRE : Ne cédez pas trop vite, parce que la suite vous coûtera davantage. ' +
        'Si le mot circule entre les disciplines et change de sens à chaque passage, ' +
        'alors il ne décrit pas une chose, il décrit un accord local. ' +
        'Et un accord local peut être révisé, ce que personne n’aime entendre ' +
        'à propos d’une preuve.\n' +
        'UN PHYSICIEN : Révisé, non. Étendu, oui. Nous avons accepté des preuves statistiques ' +
        'que le siècle précédent aurait refusées, et nous n’avons rien abandonné en route : ' +
        'nous avons ajouté un critère et gardé les anciens.\n' +
        'UNE CONFÉRENCIÈRE : Vous les avez gardés en les repeignant. ' +
        'Un critère qui survit à un changement de cadre n’est pas le même critère ; ' +
        'il porte le même nom, ce qui est précisément le problème dont nous parlons.\n' +
        'UN PHYSICIEN : Alors nous sommes d’accord sur les faits ' +
        'et nous ne le sommes pas sur ce qu’ils permettent de dire, ' +
        'ce qui, dans ma discipline, s’appelle une controverse et se règle mal.\n' +
        'UNE CONFÉRENCIÈRE : Dans la mienne, cela s’appelle une discussion et ne se règle pas du tout.',
      items: [
        {
          q: 'Quelle objection la conférencière fait-elle à la définition classique ?',
          opts: [
            'Elle est circulaire',
            'Elle est trop récente',
            'Elle vient de la physique',
            'Elle exclut les mathématiques',
          ],
          correct: 0,
          why: 'La preuve est définie par son effet, et l’esprit raisonnable par ce qui le contraint.',
          band: 'c1',
        },
        {
          q: 'Que concède le physicien avant de maintenir sa position ?',
          opts: [
            'Que ses critères ne valent pas pour toutes les disciplines',
            'Que sa définition est fausse',
            'Que l’histoire produit des preuves',
            'Que la reproduction n’est pas nécessaire',
          ],
          correct: 0,
          why: '« Je l’accorde », puis il demande qu’on change de mot plutôt que de critère.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// The three hardest questions on the paper, on one document. Nothing here is
// stated: each speaker's position has to be reconstructed from what they
// concede and what they decline to concede.

export const CO_C2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'c2',
  label: 'Compréhension orale · C2',
  prompt: 'Vous allez entendre un document. Choisissez la bonne réponse.',
  timingS: 199,
  targetItemIds: uniq(ITEMS.methodeScientifique.c2),
  parts: [
    {
      label: 'Document 37 · les archives privées',
      playCount: 1,
      readWindowS: 30,
      durationS: 135,
      text:
        'UNE HISTORIENNE : Une famille vous ouvre ses cartons à condition que vous ne citiez pas ' +
        'les lettres de 1943. Vous entrez ?\n' +
        'UN HISTORIEN : J’entre, et je le dis en note. Le lecteur saura qu’il manque quelque chose ' +
        'et saura même quoi.\n' +
        'UNE HISTORIENNE : Il saura qu’il manque une année. Il ne saura pas si ce qui manque ' +
        'renverse ce que vous écrivez. Vous lui offrez la forme de la transparence ' +
        'et vous gardez le bénéfice du secret.\n' +
        'UN HISTORIEN : Le bénéfice, c’est le reste du fonds. Quarante ans de correspondance ' +
        'que personne n’avait lus. Si je refuse la condition, la famille referme les cartons ' +
        'et nous avons la pureté et rien d’autre.\n' +
        'UNE HISTORIENNE : Nous avons surtout une famille qui apprend que la condition fonctionne. ' +
        'La suivante en posera deux.\n' +
        'UN HISTORIEN : Voilà l’argument sérieux, et il n’est pas historique, il est stratégique. ' +
        'Vous me demandez de sacrifier ce livre-ci pour un livre à venir ' +
        'que personne n’écrira peut-être jamais.\n' +
        'UNE HISTORIENNE : Je vous demande de voir que votre note en bas de page ' +
        'ne coûte rien à la famille et vous coûte, à vous, votre seule prise sur elle.\n' +
        'UN HISTORIEN : Elle me coûte peu, c’est vrai. Je remarque tout de même ' +
        'que vous avez cessé de me reprocher d’avoir accepté, et que vous me reprochez maintenant ' +
        'de l’avoir dit sans en tirer de conséquence.\n' +
        'UNE HISTORIENNE : Les deux reproches sont le même. Une transparence qui ne change rien ' +
        'à ce que vous faites n’est pas une transparence, c’est une politesse.\n' +
        'UN HISTORIEN : Alors dites-moi ce qu’elle devrait changer, et je vous suivrai peut-être.\n' +
        'UNE HISTORIENNE : Elle devrait vous empêcher de conclure. ' +
        'Vous pouvez publier le fonds, décrire ce qu’il contient, et vous arrêter là. ' +
        'Ce que vous ne pouvez pas faire, c’est écrire le mot « donc » ' +
        'quand une année vous a été retirée des mains.\n' +
        'UN HISTORIEN : Vous me proposez un livre qui décrit et qui ne dit rien. ' +
        'Personne ne le lira, et la famille aura obtenu exactement ce qu’elle voulait ' +
        'sans même avoir à l’exiger.\n' +
        'UNE HISTORIENNE : La famille voulait que 1943 disparaisse. ' +
        'Un livre qui s’arrête juste avant la conclusion attire l’œil sur l’endroit ' +
        'où il s’arrête. C’est le contraire de ce qu’elle voulait, ' +
        'et c’est pour cela que je le propose.\n' +
        'UN HISTORIEN : Vous transformez une prudence en accusation.\n' +
        'UNE HISTORIENNE : Je transforme un silence en objet visible. ' +
        'C’est le seul geste que vous puissiez faire depuis l’intérieur du fonds, ' +
        'et vous ne pouvez le faire qu’une fois : la deuxième famille aura lu la première.\n' +
        'UN HISTORIEN : Ce qui me ramène à votre argument stratégique, ' +
        'que je refusais tout à l’heure.\n' +
        'UNE HISTORIENNE : Il vous revient par l’autre bout, oui. ' +
        'Il n’était pas stratégique, il était méthodologique, ' +
        'et vous l’avez pris pour de la tactique parce qu’il portait sur l’avenir.',
      items: [
        {
          q: 'Quelle est l’objection principale de l’historienne ?',
          opts: [
            'La note en bas de page donne l’apparence de la transparence sans son effet',
            'Les archives privées ne doivent jamais être consultées',
            'Les lettres de 1943 sont probablement fausses',
            'La famille n’a pas le droit de poser des conditions',
          ],
          correct: 0,
          why: 'Il offre la forme de la transparence et garde le bénéfice du secret ; le lecteur ignore si ce qui manque renverse tout.',
          band: 'c2',
        },
        {
          q: 'Que fait l’historien en invoquant les quarante ans de correspondance ?',
          opts: [
            'Il oppose au principe le coût concret de son application',
            'Il conteste l’existence des lettres de 1943',
            'Il change de sujet',
            'Il reconnaît son erreur',
          ],
          correct: 0,
          why: 'Refuser la condition ferme les cartons : « nous avons la pureté et rien d’autre ».',
          band: 'c2',
        },
        {
          q: 'Comment se déplace le désaccord au fil de l’échange ?',
          opts: [
            'D’avoir accepté la condition vers n’en tirer aucune conséquence',
            'De la méthode vers le financement de la recherche',
            'De l’histoire vers le droit des familles',
            'D’un désaccord de fond vers un accord complet',
          ],
          correct: 0,
          why: 'Il le relève lui-même, et elle répond que les deux reproches n’en font qu’un.',
          band: 'c2',
        },
      ],
    },
  ],
};
