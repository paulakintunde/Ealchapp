// TCF Canada blanc-06 — Compréhension orale, the lower slope (A1, A2, B1).
//
// One task per BAND, so a miss routes to material at the band it happened. The
// upper slope is in co-hi.ts and MUST follow this file in the array — order is
// the instrument here.
//
// Band characters, from TOPICS-tcf-canada:
//   A1  concrete, literal, one fact, stated once plainly
//   A2  still literal, but one competing fact must be ignored
//   B1  two facts held together, or one tracked across a turn change
//
// Written for the RATE as blanc-05 was (VOICES-tcf-canada §3): sized to the
// middle of the envelope, dialogue preferred at A1 and A2 because a turn
// boundary is a pause, and long words preferred at A1 because the rate is words
// over seconds.
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

/* ═══ A1 — positions 1 to 3 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each answer is said once, in plain words, and no distractor is
// mentioned in the audio at all.

export const CO_A1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a1',
  label: 'Compréhension orale · A1',
  prompt: 'Vous allez entendre trois documents courts. Pour chaque document, choisissez la bonne réponse.',
  timingS: 110,
  targetItemIds: uniq(ITEMS.transportsQuotidiens.a1, ITEMS.famille.a1, ITEMS.amis.a1),
  parts: [
    {
      label: 'Document 1 · à l’arrêt d’autobus',
      playCount: 1,
      readWindowS: 10,
      durationS: 18,
      text:
        'UNE DAME : Bonjour Monsieur. Cet autobus va à la gare centrale ?\n' +
        'UN CHAUFFEUR : Non, Madame. Pour la gare, prenez le numéro douze.\n' +
        'UNE DAME : Le numéro douze. Il s’arrête ici ?\n' +
        'UN CHAUFFEUR : Oui, juste derrière nous, dans quelques minutes.',
      items: [
        {
          q: 'Quel autobus va à la gare ?',
          opts: ['Le numéro douze', 'Le numéro six', 'Le numéro vingt', 'Le numéro trois'],
          correct: 0,
          why: 'Le chauffeur dit de prendre le numéro douze pour la gare.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · au téléphone',
      playCount: 1,
      readWindowS: 10,
      durationS: 14,
      text:
        'UNE MAMAN : Allô, Théo ? Tu es chez tes grands-parents ?\n' +
        'UN GARÇON : Oui, Maman. Grand-père prépare le dîner. ' +
        'Grand-mère est dans le jardin.\n' +
        'UNE MAMAN : Parfait. J’arrive à vingt heures.',
      items: [
        {
          q: 'Que fait le grand-père ?',
          opts: [
            'Il prépare le dîner',
            'Il regarde la télévision',
            'Il dort dans sa chambre',
            'Il travaille au garage',
          ],
          correct: 0,
          why: 'Le garçon dit que son grand-père prépare le dîner.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · un rendez-vous',
      playCount: 1,
      readWindowS: 10,
      durationS: 14,
      text:
        'UNE JEUNE FEMME : Salut Karim ! On va au cinéma samedi ?\n' +
        'UN JEUNE HOMME : Avec plaisir. Rendez-vous où ?\n' +
        'UNE JEUNE FEMME : Directement devant le cinéma, à dix-huit heures.\n' +
        'UN JEUNE HOMME : Entendu. À samedi !',
      items: [
        {
          q: 'Où est le rendez-vous ?',
          opts: ['Devant le cinéma', 'À la gare', 'Au café', 'Chez Karim'],
          correct: 0,
          why: 'Elle propose de se retrouver devant le cinéma.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: every document names exactly ONE competing fact the candidate
// must set aside: a second date, the night, a second till, a second room, the
// old printer spot, the afternoon room.

export const CO_A2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'a2',
  label: 'Compréhension orale · A2',
  prompt: 'Vous allez entendre six documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 295,
  targetItemIds: uniq(
    ITEMS.hebergement.a2,
    ITEMS.rpSante.a2,
    ITEMS.courses.a2,
    ITEMS.sportsEtLoisirs.a2,
    ITEMS.bureau.a2,
    ITEMS.examensEtDiplomes.a2
  ),
  parts: [
    {
      label: 'Document 4 · une chambre à louer',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UNE ÉTUDIANTE : Bonjour Monsieur. La chambre est libre le premier septembre ?\n' +
        'UN PROPRIÉTAIRE : Malheureusement non. L’ancienne locataire part plus tard que prévu.\n' +
        'UNE ÉTUDIANTE : Alors, à partir de quand ?\n' +
        'UN PROPRIÉTAIRE : À partir du quinze. Le premier, je peux seulement garder vos cartons au garage.\n' +
        'UNE ÉTUDIANTE : D’accord. Je m’installe le quinze, alors. Merci beaucoup.',
      items: [
        {
          q: 'Quand l’étudiante peut-elle s’installer dans la chambre ?',
          opts: ['Le quinze septembre', 'Le premier septembre', 'Le cinq septembre', 'Le premier octobre'],
          correct: 0,
          why: 'Le premier, seuls les cartons peuvent être déposés ; la chambre est libre le quinze.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · à la pharmacie',
      playCount: 1,
      readWindowS: 12,
      durationS: 23,
      text:
        'UNE PHARMACIENNE : Voici votre sirop. Une cuillère le matin et une cuillère le soir, pendant le repas.\n' +
        'UN CLIENT : Et la nuit, si je tousse ?\n' +
        'UNE PHARMACIENNE : Non, jamais la nuit. Buvez plutôt un verre d’eau tiède.\n' +
        'UN CLIENT : Pendant combien de jours ?\n' +
        'UNE PHARMACIENNE : Cinq jours. Si la toux continue, consultez votre médecin.',
      items: [
        {
          q: 'Quand faut-il prendre le sirop ?',
          opts: [
            'Le matin et le soir, au repas',
            'La nuit, quand on tousse',
            'Le matin seulement, à jeun',
            'Toutes les trois heures, de jour comme de nuit',
          ],
          correct: 0,
          why: 'Une cuillère matin et soir au repas ; la nuit est exclue.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · au supermarché',
      playCount: 1,
      readWindowS: 12,
      durationS: 23,
      text:
        'UNE VOIX : Chers clients, bonjour. Pour vous éviter d’attendre, ' +
        'la caisse numéro quatre ouvre maintenant. ' +
        'La caisse numéro deux reste réservée aux clients qui ont moins de dix articles. ' +
        'Nous vous rappelons que le magasin ferme ce soir à vingt et une heures. ' +
        'Merci de votre visite.',
      items: [
        {
          q: 'Quelle caisse vient d’ouvrir ?',
          opts: ['La caisse quatre', 'La caisse deux', 'La caisse dix', 'La caisse un'],
          correct: 0,
          why: 'La quatre ouvre ; la deux est réservée aux petits paniers.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · le cours de yoga',
      playCount: 1,
      readWindowS: 12,
      durationS: 25,
      text:
        'UN MONITEUR : Bonsoir à toutes et à tous. Attention : ce jeudi, ' +
        'le cours de yoga n’a pas lieu dans la salle B, qui est en travaux. ' +
        'Nous serons dans la salle D, au premier étage, à côté des vestiaires. ' +
        'La semaine prochaine, nous retrouverons la salle B. ' +
        'N’oubliez pas votre tapis.',
      items: [
        {
          q: 'Où a lieu le cours ce jeudi ?',
          opts: ['Dans la salle D', 'Dans la salle B', 'Au rez-de-chaussée', 'Dans les vestiaires'],
          correct: 0,
          why: 'La salle B est en travaux cette semaine ; le cours passe en salle D.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · la nouvelle imprimante',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UN EMPLOYÉ : Excuse-moi, l’imprimante n’est plus à côté de la machine à café ?\n' +
        'UNE COLLÈGUE : Non, on l’a changée hier. La nouvelle est au fond du couloir, ' +
        'devant la salle de réunion.\n' +
        'UN EMPLOYÉ : Il faut un code pour imprimer ?\n' +
        'UNE COLLÈGUE : Non, ton badge suffit. Tu le passes devant l’écran, et c’est tout.',
      items: [
        {
          q: 'Où se trouve la nouvelle imprimante ?',
          opts: [
            'Devant la salle de réunion',
            'À côté de la machine à café',
            'Dans le bureau du directeur',
            'À l’accueil du bâtiment',
          ],
          correct: 0,
          why: 'L’ancienne était près de la machine à café ; la nouvelle est devant la salle de réunion.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · un test de langue',
      playCount: 1,
      readWindowS: 12,
      durationS: 25,
      text:
        'UNE SECRÉTAIRE : Centre de langues Ormel, bonjour.\n' +
        'UN CANDIDAT : Bonjour Madame. Je passe le test de français samedi. C’est dans quelle salle ?\n' +
        'UNE SECRÉTAIRE : L’écrit a lieu en salle douze, à neuf heures. ' +
        'L’oral, l’après-midi, en salle trois.\n' +
        'UN CANDIDAT : Salle douze à neuf heures. Merci beaucoup.\n' +
        'UNE SECRÉTAIRE : Arrivez un quart d’heure avant, avec une pièce d’identité.',
      items: [
        {
          q: 'Où a lieu l’épreuve écrite ?',
          opts: ['En salle douze', 'En salle trois', 'En salle neuf', 'En salle quinze'],
          correct: 0,
          why: 'L’écrit est en salle douze ; la salle trois est pour l’oral de l’après-midi.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions: three carry two. A document with two
// questions is one where two facts must be held at once.

export const CO_B1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b1',
  label: 'Compréhension orale · B1',
  prompt: 'Vous allez entendre sept documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 528,
  targetItemIds: uniq(
    ITEMS.rpVoyage.b1,
    ITEMS.appareils.b1,
    ITEMS.ecologie.b1,
    ITEMS.litterature.b1,
    ITEMS.metiers.b1,
    ITEMS.internet.b1,
    ITEMS.transportsQuotidiens.b1
  ),
  parts: [
    {
      label: 'Document 10 · un retour au pays',
      playCount: 1,
      readWindowS: 20,
      durationS: 41,
      text:
        'UN AMI : Alors, ce retour, après dix ans ? Tout a changé, j’imagine.\n' +
        'UNE FEMME : C’est ce que je croyais. En fait, la ville a très peu changé : ' +
        'la même boulangerie, le même marché le dimanche.\n' +
        'UN AMI : Qu’est-ce qui t’a surprise, alors ?\n' +
        'UNE FEMME : Moi. Je parlais avec mes cousins et je cherchais mes mots. ' +
        'Après dix ans au Canada, certaines expressions me venaient d’abord en anglais.\n' +
        'UN AMI : Ça t’a gênée ?\n' +
        'UNE FEMME : Les deux premiers jours, oui. Ensuite, j’ai compris que mes cousins s’en amusaient, ' +
        'et j’ai fini par en rire avec eux. Le plus dur, finalement, a été de repartir.',
      items: [
        {
          q: 'Qu’est-ce qui a le plus surpris cette femme ?',
          opts: [
            'Sa propre difficulté à trouver ses mots',
            'Les changements dans la ville',
            'La fermeture du marché qu’elle fréquentait le dimanche',
            'L’accueil froid de ses cousins',
          ],
          correct: 0,
          why: 'La ville a peu changé ; c’est elle-même qui cherchait ses mots.',
          band: 'b1',
        },
        {
          q: 'Comment a-t-elle vécu cette difficulté ?',
          opts: [
            'Gênée au début, puis elle en a ri',
            'Elle a évité de parler avec sa famille',
            'Elle a décidé de prendre des cours',
            'Elle n’y a jamais vraiment pensé',
          ],
          correct: 0,
          why: 'Gênée deux jours, puis elle a ri avec ses cousins : deux moments à tenir ensemble.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · un atelier de vélos',
      playCount: 1,
      readWindowS: 20,
      durationS: 42,
      text:
        'UN REPORTER : Ici, on ne répare pas votre vélo. On vous apprend à le réparer.\n' +
        'UN BÉNÉVOLE : Exactement. L’atelier ouvre le mardi et le jeudi soir. ' +
        'Les outils sont là, et nous sommes trois bénévoles pour conseiller.\n' +
        'UN REPORTER : Pourquoi ne pas réparer vous-mêmes ? Ce serait plus rapide.\n' +
        'UN BÉNÉVOLE : Bien plus rapide, oui. Mais quelqu’un qui a changé sa chambre à air une fois ' +
        'revient rarement pour le même problème. Il revient pour un problème plus difficile, et c’est très bien.\n' +
        'UN REPORTER : Et c’est gratuit ?\n' +
        'UN BÉNÉVOLE : L’adhésion coûte quinze dollars par an. Les pièces sont vendues au prix coûtant, ' +
        'et elles viennent souvent de vélos abandonnés.',
      items: [
        {
          q: 'Quel est le principe de l’atelier ?',
          opts: [
            'Apprendre aux gens à réparer eux-mêmes',
            'Réparer les vélos le plus vite possible',
            'Vendre des vélos d’occasion',
            'Prêter des outils à domicile',
          ],
          correct: 0,
          why: 'Le bénévole écarte la réparation à la place des gens, plus rapide mais moins utile.',
          band: 'b1',
        },
        {
          q: 'D’où viennent souvent les pièces ?',
          opts: [
            'De vélos abandonnés',
            'D’un magasin partenaire',
            'Des adhérents eux-mêmes',
            'D’une usine du quartier',
          ],
          correct: 0,
          why: 'Elles sont vendues au prix coûtant et viennent souvent de vélos abandonnés.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · une ressourcerie',
      playCount: 1,
      readWindowS: 20,
      durationS: 39,
      text:
        'UNE JOURNALISTE : Votre ressourcerie récupère des meubles depuis deux ans. ' +
        'Qu’est-ce qui marche le mieux ?\n' +
        'UN RESPONSABLE : Les chaises, de loin. Nous les revendons presque toutes. ' +
        'Les grandes armoires, en revanche, restent des mois dans l’entrepôt.\n' +
        'UNE JOURNALISTE : Pourquoi cette différence ?\n' +
        'UN RESPONSABLE : Les logements sont plus petits qu’avant. ' +
        'Une armoire de deux mètres n’entre plus dans un appartement neuf. ' +
        'Alors nous en démontons certaines, et le bois sert à fabriquer des étagères.\n' +
        'UNE JOURNALISTE : Et ces étagères se vendent ?\n' +
        'UN RESPONSABLE : En une semaine. Nous ne gagnons pas beaucoup d’argent, ' +
        'mais nous jetons deux fois moins qu’au début.',
      items: [
        {
          q: 'Pourquoi les grandes armoires se vendent-elles mal ?',
          opts: [
            'Elles sont trop grandes pour les logements actuels',
            'Elles sont vendues trop cher',
            'Elles sont souvent en mauvais état',
            'Elles ne sont plus du tout à la mode',
          ],
          correct: 0,
          why: 'Les logements ont rétréci : une armoire de deux mètres n’y entre plus.',
          band: 'b1',
        },
        {
          q: 'Que fait la ressourcerie de certaines armoires ?',
          opts: [
            'Elle en fait des étagères',
            'Elle les donne à des familles',
            'Elle les met à la benne',
            'Elle les vend sur internet',
          ],
          correct: 0,
          why: 'Elle les démonte et le bois sert à fabriquer des étagères.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · un club de lecture',
      playCount: 1,
      readWindowS: 18,
      durationS: 38,
      text:
        'UNE FEMME : Tu fais toujours partie de ton club de lecture ?\n' +
        'UN HOMME : Oui, mais il se réunit en ligne maintenant, un mercredi par mois.\n' +
        'UNE FEMME : Ce n’est pas un peu triste, devant un écran ?\n' +
        'UN HOMME : Je le pensais aussi. En réalité, nous sommes plus nombreux. ' +
        'Deux membres ont déménagé à l’autre bout du pays, et ils participent toujours. ' +
        'Avant, ils auraient quitté le groupe.\n' +
        'UNE FEMME : Et vous ne vous voyez plus du tout ?\n' +
        'UN HOMME : Une fois par an, en juin, ceux qui le peuvent se retrouvent dans un parc. ' +
        'C’est devenu notre fête.',
      items: [
        {
          q: 'Quel avantage voit-il aux réunions en ligne ?',
          opts: [
            'Des membres partis loin restent dans le groupe',
            'Les réunions en ligne sont devenues beaucoup plus courtes',
            'Les livres coûtent moins cher',
            'Les membres lisent davantage',
          ],
          correct: 0,
          why: 'Deux membres qui ont déménagé loin participent encore ; avant, ils seraient partis.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · les nuits de neige',
      playCount: 1,
      readWindowS: 18,
      durationS: 37,
      text:
        'UNE JOURNALISTE : Vous conduisez une déneigeuse depuis quinze hivers. ' +
        'Le plus difficile, c’est le froid ?\n' +
        'UN CONDUCTEUR : On s’habitue au froid. La cabine est chauffée, de toute façon. ' +
        'Le plus difficile, c’est de ne jamais savoir quand on commence.\n' +
        'UNE JOURNALISTE : Vous n’avez pas d’horaires ?\n' +
        'UN CONDUCTEUR : Nous sommes appelés quand la neige dépasse cinq centimètres. ' +
        'Ça peut être à vingt-deux heures ou à trois heures du matin. ' +
        'Alors, de décembre à mars, je ne prévois jamais rien le soir.\n' +
        'UNE JOURNALISTE : Et votre famille ?\n' +
        'UN CONDUCTEUR : Elle s’est organisée. Les sorties, c’est en été.',
      items: [
        {
          q: 'Qu’est-ce qui est le plus difficile pour lui ?',
          opts: [
            'Ne pas savoir quand il devra travailler',
            'Le froid pendant les longues tournées de nuit',
            'Le nombre d’heures de travail',
            'La conduite sur la neige',
          ],
          correct: 0,
          why: 'Il écarte le froid : c’est l’heure d’appel imprévisible qui pèse.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · une connexion qui coupe',
      playCount: 1,
      readWindowS: 18,
      durationS: 36,
      text:
        'UN TECHNICIEN : Service technique, bonjour. Je vous écoute.\n' +
        'UNE CLIENTE : Ma connexion coupe tous les soirs vers vingt et une heures. Le matin, tout fonctionne.\n' +
        'UN TECHNICIEN : Vous avez déjà redémarré votre modem ?\n' +
        'UNE CLIENTE : Oui, plusieurs fois. Ça ne change rien.\n' +
        'UN TECHNICIEN : Alors ce n’est sans doute pas votre appareil. ' +
        'Le soir, tout le quartier se connecte en même temps et votre ligne est saturée. ' +
        'Je demande qu’on vous transfère sur une autre ligne. Comptez trois jours ouvrables.\n' +
        'UNE CLIENTE : Et si le problème continue ?\n' +
        'UN TECHNICIEN : Rappelez-nous, et un technicien passera chez vous gratuitement.',
      items: [
        {
          q: 'D’où vient le problème, selon le technicien ?',
          opts: [
            'De la ligne saturée le soir',
            'Du modem de la cliente',
            'D’une panne d’électricité',
            'D’un abonnement trop limité pour ses besoins',
          ],
          correct: 0,
          why: 'Le redémarrage n’a rien changé : il écarte l’appareil et nomme la saturation du soir.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · une navette sur la rivière',
      playCount: 1,
      readWindowS: 18,
      durationS: 36,
      text:
        'UN REPORTER : Depuis la fermeture du pont pour travaux, ' +
        'une navette traverse la rivière toutes les vingt minutes.\n' +
        'UNE USAGÈRE : Au début, j’étais furieuse. En voiture, je faisais le détour par le pont suivant : ' +
        'quarante minutes de plus chaque matin.\n' +
        'UN REPORTER : Et maintenant ?\n' +
        'UNE USAGÈRE : Maintenant, je laisse la voiture, je prends la navette, ' +
        'et je suis au bureau en vingt-cinq minutes. C’est plus court qu’avant les travaux.\n' +
        'UN REPORTER : Vous continuerez quand le pont rouvrira ?\n' +
        'UNE USAGÈRE : Si la navette reste, oui. Mais elle s’arrête en novembre, à cause des glaces.',
      items: [
        {
          q: 'Pourquoi cette usagère prend-elle la navette ?',
          opts: [
            'Son trajet est devenu plus court',
            'Le pont suivant est fermé lui aussi',
            'La navette est gratuite',
            'Elle n’a plus de voiture',
          ],
          correct: 0,
          why: 'Vingt-cinq minutes par la navette, moins qu’avant les travaux et bien moins que le détour.',
          band: 'b1',
        },
      ],
    },
  ],
};
