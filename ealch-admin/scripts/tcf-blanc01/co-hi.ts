// TCF Canada blanc-01 — Compréhension orale, the upper slope (B2, C1, C2).
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
// C2 routes to `philosophie` at C1, because there are no published C2 items at
// all. pick-items.ts reports that fallback rather than hiding it: a candidate
// who misses the last three questions is sent to the hardest material that
// exists, which is the honest answer and not a satisfying one.
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
  timingS: 540,
  targetItemIds: uniq(ITEMS.collegues.b2, ITEMS.gouvernement.b2, ITEMS.recherche.b2, ITEMS.rechercheEmploi.b2),
  parts: [
    {
      label: 'Document 20 · table ronde sur le télétravail',
      playCount: 1,
      readWindowS: 25,
      durationS: 72,
      text:
        'L’ANIMATRICE : Trois jours à distance, deux au bureau. Le modèle s’installe. Est-ce qu’il tient ?\n' +
        'UNE DRH : Sur la production, oui. Nos indicateurs n’ont pas bougé en deux ans.\n' +
        'UN SOCIOLOGUE : Personne ne conteste la production. Ce qui se défait est plus lent à voir : ' +
        'les gens ne se croisent plus par hasard, et c’est par hasard qu’on apprend ce que fait le service d’à côté.\n' +
        'UNE DRH : Nous avons remis des journées communes pour ça.\n' +
        'UN SOCIOLOGUE : Une journée décidée à l’avance ne remplace pas un couloir. On y va pour se voir, ' +
        'donc on voit ceux qu’on connaît déjà.',
      items: [
        {
          q: 'Sur quoi les deux intervenants sont-ils d’accord ?',
          opts: [
            'La production ne s’est pas dégradée',
            'Les journées communes règlent le problème',
            'Le télétravail devrait être abandonné',
            'Les indicateurs sont mal construits',
          ],
          correct: 0,
          why: 'Le sociologue ouvre par « personne ne conteste la production ». Le désaccord porte sur autre chose.',
          band: 'b2',
        },
        {
          q: 'Que reproche le sociologue aux journées communes ?',
          opts: [
            'Elles ne produisent que des rencontres déjà prévues',
            'Elles sont trop rares dans la semaine',
            'Elles coûtent trop cher à organiser',
            'Elles ne concernent pas tous les services',
          ],
          correct: 0,
          why: 'Il oppose le hasard du couloir à une journée décidée à l’avance : on y voit ceux qu’on connaît déjà.',
          band: 'b2',
        },
        {
          q: 'Quelle est la position de la DRH ?',
          opts: [
            'Le modèle fonctionne et les manques se corrigent',
            'Le modèle a échoué sur tous les plans',
            'Le télétravail doit passer à cinq jours',
            'La question ne relève pas de l’entreprise',
          ],
          correct: 0,
          why: 'Elle défend les résultats et répond au manque signalé en ajoutant des journées communes.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 21 · débat sur l’âge de départ à la retraite',
      playCount: 1,
      readWindowS: 25,
      durationS: 74,
      text:
        'UN ÉCONOMISTE : L’espérance de vie a augmenté de sept ans en une génération. Le calcul est arithmétique.\n' +
        'UNE SYNDICALISTE : L’espérance de vie, oui. L’espérance de vie EN BONNE SANTÉ, non : elle stagne depuis dix ans. ' +
        'Ce n’est pas le même chiffre et ce n’est pas la même vie.\n' +
        'UN ÉCONOMISTE : Vous avez raison sur la distinction. Elle ne change pas l’équilibre du système.\n' +
        'UNE SYNDICALISTE : Elle change qui le paie. Un ouvrier et un cadre ne partent pas avec le même corps.',
      items: [
        {
          q: 'Quelle distinction la syndicaliste introduit-elle ?',
          opts: [
            'Entre vivre plus longtemps et vivre en bonne santé',
            'Entre les hommes et les femmes',
            'Entre le secteur public et le secteur privé',
            'Entre les jeunes et les anciens',
          ],
          correct: 0,
          why: 'Elle oppose l’espérance de vie, qui augmente, à l’espérance de vie en bonne santé, qui stagne.',
          band: 'b2',
        },
        {
          q: 'Comment l’économiste réagit-il à cette distinction ?',
          opts: [
            'Il l’accepte mais la juge sans effet sur son argument',
            'Il la rejette comme fausse',
            'Il l’ignore complètement',
            'Il change de position',
          ],
          correct: 0,
          why: '« Vous avez raison sur la distinction. Elle ne change pas l’équilibre du système. » Concéder n’est pas céder.',
          band: 'b2',
        },
        {
          q: 'Quel est le dernier argument de la syndicaliste ?',
          opts: [
            'La réforme ne pèse pas également sur tous les métiers',
            'Le système est déjà à l’équilibre',
            'Il faut baisser l’âge de départ',
            'Les chiffres sont inventés',
          ],
          correct: 0,
          why: '« Elle change qui le paie » : un ouvrier et un cadre ne partent pas avec le même corps.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 22 · interview d’une chercheuse',
      playCount: 1,
      readWindowS: 22,
      durationS: 62,
      text:
        'UN JOURNALISTE : Dormir moins nuit à la concentration, c’est établi ?\n' +
        'UNE CHERCHEUSE : C’est établi en moyenne, et la moyenne cache l’essentiel. ' +
        'Dans notre cohorte de six cents personnes, un sur dix ne perd rien à six heures de sommeil. ' +
        'Le problème est que presque tout le monde se croit dans ce dixième.\n' +
        'UN JOURNALISTE : On peut le savoir ?\n' +
        'UNE CHERCHEUSE : Pas en se le demandant. C’est précisément la fonction qui juge qui est atteinte la première.',
      items: [
        {
          q: 'Quelle est la nuance qu’elle apporte ?',
          opts: [
            'L’effet moyen masque une minorité qui n’est pas touchée',
            'Le manque de sommeil n’a aucun effet',
            'Six heures suffisent à tout le monde',
            'L’étude portait sur trop peu de personnes',
          ],
          correct: 0,
          why: 'Un sur dix ne perd rien, ce que la moyenne efface. Elle ne nie pas l’effet général.',
          band: 'b2',
        },
        {
          q: 'Pourquoi ne peut-on pas s’auto-évaluer ?',
          opts: [
            'La faculté qui évalue est elle-même dégradée',
            'Les tests sont trop coûteux',
            'Les effets n’apparaissent qu’après des années',
            'Chacun dort différemment chaque nuit',
          ],
          correct: 0,
          why: '« C’est précisément la fonction qui juge qui est atteinte la première. »',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 23 · l’accueil des saisonniers',
      playCount: 1,
      readWindowS: 22,
      durationS: 64,
      text:
        'UNE ÉLUE : On nous dit qu’il manque des saisonniers. Il ne manque pas de candidats : il manque des lits.\n' +
        'UN EMPLOYEUR : Nous avons augmenté les salaires de douze pour cent l’an dernier.\n' +
        'UNE ÉLUE : Et le loyer d’un studio a doublé en trois ans. Douze pour cent contre cent pour cent, ' +
        'le compte n’y est pas. Tant que la commune ne loge pas, vous recruterez chaque année les mêmes absents.',
      items: [
        {
          q: 'Selon l’élue, quelle est la cause du manque de saisonniers ?',
          opts: ['Le logement', 'Le niveau des salaires', 'Le manque de candidats', 'La durée des contrats'],
          correct: 0,
          why: 'Elle corrige d’emblée : il ne manque pas de candidats, il manque des lits.',
          band: 'b2',
        },
        {
          q: 'Pourquoi la hausse des salaires ne suffit-elle pas ?',
          opts: [
            'Les loyers ont augmenté beaucoup plus vite',
            'Elle n’a concerné que quelques employeurs',
            'Les saisonniers l’ignorent',
            'Elle arrive trop tard dans la saison',
          ],
          correct: 0,
          why: 'Douze pour cent de salaire contre un loyer qui double : « le compte n’y est pas ».',
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
  timingS: 375,
  targetItemIds: uniq(ITEMS.methodeScientifique.c1, ITEMS.philosophie.c1, ITEMS.ethique.c1),
  parts: [
    {
      label: 'Document 30 · la reproductibilité des résultats',
      playCount: 1,
      readWindowS: 30,
      durationS: 88,
      text:
        'UNE MODÉRATRICE : Un résultat sur deux ne se reproduit pas. Faut-il parler de crise ?\n' +
        'UN STATISTICIEN : Le mot me gêne. Un résultat qui ne se reproduit pas n’est pas un mensonge, ' +
        'c’est une hypothèse qui a été publiée trop tôt. Le système récompense la publication, pas la vérification.\n' +
        'UNE BIOLOGISTE : Je vous suis sur les incitations. Je ne vous suis pas sur le mot. ' +
        'Si personne ne vérifie, la littérature devient un catalogue d’hypothèses présentées comme des conclusions, ' +
        'et le lecteur n’a aucun moyen de faire la différence. C’est cela, la crise.\n' +
        'UN STATISTICIEN : Alors nous décrivons la même chose et nous ne la nommons pas pareil.',
      items: [
        {
          q: 'Sur quoi les deux intervenants s’accordent-ils ?',
          opts: [
            'Le système récompense la publication plutôt que la vérification',
            'La moitié des résultats sont falsifiés',
            'Le mot « crise » est le bon',
            'La vérification est impossible en pratique',
          ],
          correct: 0,
          why: 'La biologiste le dit : « Je vous suis sur les incitations. » Le désaccord ne porte pas là.',
          band: 'c1',
        },
        {
          q: 'Quel est le désaccord réel ?',
          opts: [
            'Le nom à donner à la situation',
            'L’ampleur du phénomène',
            'La méthode statistique employée',
            'La responsabilité des revues',
          ],
          correct: 0,
          why: 'Il conclut lui-même : « nous décrivons la même chose et nous ne la nommons pas pareil ».',
          band: 'c1',
        },
        {
          q: 'Quel est l’argument de la biologiste pour le mot « crise » ?',
          opts: [
            'Le lecteur ne peut plus distinguer hypothèse et conclusion',
            'Les chercheurs falsifient délibérément',
            'Le nombre de publications diminue',
            'Les financements sont mal répartis',
          ],
          correct: 0,
          why: 'Sans vérification la littérature devient un catalogue d’hypothèses présentées comme des conclusions.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 31 · la mémoire collective et les monuments',
      playCount: 1,
      readWindowS: 28,
      durationS: 76,
      text:
        'UNE HISTORIENNE : Déboulonner une statue, ce n’est pas effacer l’histoire. Une statue n’est pas un document, c’est un hommage.\n' +
        'UN CONSERVATEUR : J’accorde la distinction. Mais l’hommage d’hier est le document d’aujourd’hui : ' +
        'il nous renseigne sur ce qu’une époque a choisi d’honorer. Retirez-le et vous perdez cette information-là.\n' +
        'UNE HISTORIENNE : Sauf qu’il ne la donne qu’à celui qui la cherche. Sur une place, il ne renseigne pas, il célèbre.',
      items: [
        {
          q: 'Quelle distinction l’historienne pose-t-elle d’abord ?',
          opts: [
            'Entre un document et un hommage',
            'Entre l’histoire et la mémoire',
            'Entre l’art et la politique',
            'Entre le passé et le présent',
          ],
          correct: 0,
          why: '« Une statue n’est pas un document, c’est un hommage. »',
          band: 'c1',
        },
        {
          q: 'Comment répond-elle à l’objection du conservateur ?',
          opts: [
            'Le lieu change ce que l’objet fait',
            'Le conservateur se trompe de période',
            'Les statues n’intéressent personne',
            'Les archives suffisent à tout conserver',
          ],
          correct: 0,
          why: 'Elle ne nie pas la valeur documentaire : elle dit que sur une place l’objet célèbre au lieu de renseigner.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 32 · la responsabilité éditoriale des plateformes',
      playCount: 1,
      readWindowS: 28,
      durationS: 78,
      text:
        'UN JURISTE : Une plateforme qui classe, met en avant et recommande fait un choix éditorial. ' +
        'Elle ne peut pas se dire simple hébergeur.\n' +
        'UNE INGÉNIEURE : Le classement n’est pas choisi ligne par ligne, il est appris sur les comportements. ' +
        'Personne n’a décidé que ce contenu-là monterait.\n' +
        'UN JURISTE : Vous décrivez comment la décision est prise, pas si c’en est une. ' +
        'On répond de ce qu’on met en place, même quand on ne prévoit pas chaque résultat.',
      items: [
        {
          q: 'Quel est le cœur du désaccord ?',
          opts: [
            'Si un classement appris constitue une décision',
            'Si les plateformes gagnent trop d’argent',
            'Si la loi actuelle est applicable',
            'Si les utilisateurs sont responsables',
          ],
          correct: 0,
          why: 'Elle dit que personne n’a décidé ; il répond qu’on répond de ce qu’on met en place.',
          band: 'c1',
        },
        {
          q: 'Quel principe le juriste invoque-t-il pour finir ?',
          opts: [
            'On répond du dispositif, pas seulement de ses effets prévus',
            'Le silence vaut acceptation',
            'La technique doit rester neutre',
            'Seul le législateur peut trancher',
          ],
          correct: 0,
          why: '« On répond de ce qu’on met en place, même quand on ne prévoit pas chaque résultat. »',
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
  timingS: 155,
  targetItemIds: uniq(ITEMS.philosophie.c2),
  parts: [
    {
      label: 'Document 37 · la notion de progrès',
      playCount: 1,
      readWindowS: 30,
      durationS: 96,
      text:
        'UNE PHILOSOPHE : On me demande si je crois au progrès. Je réponds toujours : au progrès de quoi ? ' +
        'La question sans complément ne veut rien dire, et c’est ce vide qui la rend si commode.\n' +
        'UN HISTORIEN : Commode pour qui ?\n' +
        'UNE PHILOSOPHE : Pour celui qui veut faire passer un choix pour une direction. Si le progrès est une flèche, ' +
        'discuter revient à freiner.\n' +
        'UN HISTORIEN : Vous décrivez un usage du mot, pas le mot. Les gens qui ont obtenu le suffrage universel ' +
        'ne se sont pas trompés en appelant cela un progrès.\n' +
        'UNE PHILOSOPHE : Non, et remarquez ce qu’ils ont fait : ils ont dit progrès DE quelque chose. ' +
        'Je ne conteste pas le mot quand il est complété. Je conteste la flèche.',
      items: [
        {
          q: 'Quelle est l’objection principale de la philosophe ?',
          opts: [
            'Le mot sert à présenter un choix comme une direction inévitable',
            'Le progrès n’a jamais eu lieu',
            'Les historiens emploient mal le mot',
            'La technique n’améliore rien',
          ],
          correct: 0,
          why: 'Sans complément le mot est vide, et ce vide sert à faire passer un choix pour une direction.',
          band: 'c2',
        },
        {
          q: 'Que fait l’historien en citant le suffrage universel ?',
          opts: [
            'Il distingue un usage abusif du mot de son emploi légitime',
            'Il donne un exemple de progrès technique',
            'Il conteste la chronologie proposée',
            'Il change de sujet',
          ],
          correct: 0,
          why: '« Vous décrivez un usage du mot, pas le mot » : l’exemple sert à séparer les deux.',
          band: 'c2',
        },
        {
          q: 'Comment la philosophe accueille-t-elle cet exemple ?',
          opts: [
            'Elle l’accepte et y trouve la confirmation de sa distinction',
            'Elle le rejette comme hors sujet',
            'Elle admet s’être trompée',
            'Elle refuse de répondre',
          ],
          correct: 0,
          why: 'Elle dit « non », puis relève qu’ils ont dit progrès DE quelque chose : c’est sa distinction, pas une réfutation.',
          band: 'c2',
        },
      ],
    },
  ],
};
