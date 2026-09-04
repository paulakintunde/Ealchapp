// TCF Canada blanc-02 — Compréhension écrite, the upper slope (B2, C1, C2).
//
// Continues ce.ts and MUST follow it in the CE_TASKS array.
//
// ── What makes a reading item hard at the top ──────────────────────────────
//
// Not vocabulary. The document is in front of the candidate the whole time, so
// a hard word can be re-read. What cannot be re-read into place is a STANCE:
// which claim the author owns, which they report in order to answer it, and
// which they concede. Every key above B2 here turns on that distinction, and
// the distractors are sentences that genuinely appear in the text but belong to
// someone the author is disagreeing with.
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

/* ═══ B2 — positions 20 to 29 ═════════════════════════════════════════════ */

export const CE_B2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b2',
  label: 'Compréhension écrite · B2',
  prompt: 'Lisez les quatre documents et choisissez la bonne réponse.',
  timingS: 850,
  targetItemIds: uniq(ITEMS.rechercheEmploi.b2, ITEMS.questionsSociales.b2, ITEMS.economie.b2, ITEMS.droit.b2),
  parts: [
    {
      label: 'Document 20 · les métiers techniques',
      text:
        'On explique la rareté des femmes dans les métiers techniques par l’orientation scolaire, ' +
        'et l’explication est juste sans être suffisante.\n\n' +
        'Elle est juste : à quinze ans, les filles se dirigent massivement ailleurs, ' +
        'et tout ce qui se joue après hérite de cette répartition. ' +
        'Une entreprise qui recrute dans un vivier composé à neuf pour cent de femmes ' +
        'ne peut pas embaucher autrement.\n\n' +
        'Elle est insuffisante parce qu’elle s’arrête là où le problème recommence. ' +
        'L’Institut Kernal a suivi pendant six ans les diplômées d’une filière de maintenance ' +
        'industrielle, celles qui ont donc franchi l’orientation. ' +
        'À dix ans, elles sont deux fois moins nombreuses que leurs camarades masculins ' +
        'à exercer encore le métier. Le vivier ne s’est pas seulement rempli inégalement : ' +
        'il fuit ensuite, et il fuit d’un seul côté.\n\n' +
        'Les motifs de départ, recueillis par entretien, ne sont pas ceux qu’on attend. ' +
        'Les horaires et la pénibilité arrivent loin derrière la difficulté à obtenir ' +
        'les mêmes missions que les collègues, et donc la même progression. ' +
        'On ne part pas parce que le travail est dur, on part parce qu’on ne le fait pas.\n\n' +
        'Cela déplace la question posée aux entreprises. Financer des campagnes ' +
        'à destination des collégiennes coûte peu et se photographie bien. ' +
        'Regarder qui, dans un atelier, reçoit les interventions complexes coûte davantage, ' +
        'et c’est la seule chose que l’orientation scolaire ne peut pas expliquer.',
      items: [
        {
          q: 'Que concède l’auteur à l’explication par l’orientation scolaire ?',
          opts: [
            'Le vivier de recrutement est réellement déséquilibré',
            'Les entreprises n’y peuvent rien',
            'Les campagnes vers les collégiennes sont efficaces',
            'La pénibilité écarte les femmes',
          ],
          correct: 0,
          why: '« Elle est juste » : à neuf pour cent de femmes dans le vivier, l’entreprise ne peut pas embaucher autrement.',
          band: 'b2',
        },
        {
          q: 'Que montre l’étude de l’Institut Kernal ?',
          opts: [
            'Les diplômées quittent le métier deux fois plus que les hommes',
            'Les filles évitent la filière de maintenance',
            'Les salaires y sont plus bas',
            'La formation est trop longue',
          ],
          correct: 0,
          why: 'L’étude porte sur celles qui ont franchi l’orientation : à dix ans, deux fois moins d’entre elles exercent.',
          band: 'b2',
        },
        {
          q: 'Quel est le motif principal de départ ?',
          opts: [
            'Ne pas obtenir les mêmes missions que les collègues',
            'Les horaires',
            'La pénibilité physique',
            'Le manque de formation continue',
          ],
          correct: 0,
          why: 'Horaires et pénibilité arrivent « loin derrière » l’accès aux mêmes missions, et donc à la même progression.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 21 · la fréquentation des cinémas',
      text:
        'L’enquête menée dans quatre villes moyennes donne un résultat que ses commanditaires ' +
        'n’attendaient pas, et qu’il faut lire avec précaution.\n\n' +
        'La fréquentation des salles a baissé de dix-huit pour cent en cinq ans. ' +
        'Interrogés, les spectateurs perdus citent d’abord le prix, ensuite l’offre à domicile. ' +
        'C’est la réponse attendue, et elle est probablement sincère.\n\n' +
        'Le croisement avec les données de billetterie la contredit pourtant en partie. ' +
        'Les séances les plus désertées ne sont pas les plus chères : ce sont celles de dix-huit heures ' +
        'en semaine, dont le tarif est identique à celui du samedi soir, lequel se maintient. ' +
        'Et dans la seule ville où une salle a baissé ses prix de deux euros, ' +
        'la fréquentation n’a pas bougé.\n\n' +
        'Les auteurs proposent une autre lecture : ce qui a disparu n’est pas l’envie de voir un film, ' +
        'c’est la sortie improvisée après le travail, rendue difficile par des horaires ' +
        'moins prévisibles et par un trajet que le télétravail a rendu inhabituel.\n\n' +
        'Ils ajoutent, et c’est la partie que les commanditaires citent le moins, ' +
        'que le prix reste un frein réel pour les publics les plus modestes, ' +
        'et qu’une explication n’annule pas l’autre. ' +
        'Une salle peut avoir raison de ne pas baisser ses tarifs et tort de croire ' +
        'que le prix ne joue aucun rôle.',
      items: [
        {
          q: 'Que révèle le croisement avec les données de billetterie ?',
          opts: [
            'Les séances désertées ne sont pas les plus chères',
            'Le prix explique bien la baisse',
            'La fréquentation a augmenté le samedi',
            'Les spectateurs ont menti à l’enquête',
          ],
          correct: 0,
          why: 'Les séances de dix-huit heures coûtent le même prix que le samedi soir, qui se maintient.',
          band: 'b2',
        },
        {
          q: 'Quelle explication les auteurs proposent-ils ?',
          opts: [
            'La disparition de la sortie improvisée après le travail',
            'La concurrence des plateformes',
            'La fermeture de salles en centre-ville',
            'Le vieillissement du public',
          ],
          correct: 0,
          why: 'Des horaires moins prévisibles et un trajet devenu inhabituel, plutôt que l’envie de voir un film.',
          band: 'b2',
        },
        {
          q: 'Quelle précaution les auteurs ajoutent-ils ?',
          opts: [
            'Le prix reste un frein pour les publics modestes',
            'L’enquête porte sur trop peu de villes',
            'Les données de billetterie sont incomplètes',
            'La baisse pourrait s’inverser seule',
          ],
          correct: 0,
          why: 'C’est la partie la moins citée : une explication n’annule pas l’autre.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 22 · le coût des livraisons express',
      text:
        'La livraison en deux heures est présentée comme un service gratuit au-delà d’un certain panier. ' +
        'Elle ne l’est évidemment pas, et la question intéressante n’est pas de savoir qui paie, ' +
        'mais où le coût se loge.\n\n' +
        'Il ne se loge pas principalement dans le transport, contrairement à ce qu’on imagine. ' +
        'Le dernier kilomètre coûte cher, mais son prix est connu et se répercute. ' +
        'Ce qui coûte, et qui ne se voit pas, c’est le stock : promettre deux heures oblige ' +
        'à détenir le produit à proximité, donc à multiplier les entrepôts urbains, ' +
        'donc à immobiliser la même référence en trente endroits au lieu d’un.\n\n' +
        'Une enseigne interrogée estime que ce surstock représente quatre fois le coût du transport. ' +
        'Il est financé par la marge des produits non urgents, ' +
        'c’est-à-dire par les clients qui n’utilisent pas le service.\n\n' +
        'Rien de tout cela n’est illégitime, et l’auteur de ces lignes commande comme tout le monde. ' +
        'Mais l’expression « livraison offerte » décrit un transfert entre clients ' +
        'plutôt qu’une absence de coût, et cette confusion arrange précisément ' +
        'celui qui l’a fait entrer dans le vocabulaire.',
      items: [
        {
          q: 'Où se loge principalement le coût, selon le texte ?',
          opts: [
            'Dans le stock détenu à proximité',
            'Dans le dernier kilomètre',
            'Dans les salaires des livreurs',
            'Dans les emballages',
          ],
          correct: 0,
          why: 'Le transport coûte cher mais se répercute. Ce qui ne se voit pas est la multiplication des entrepôts.',
          band: 'b2',
        },
        {
          q: 'Que reproche l’auteur à l’expression « livraison offerte » ?',
          opts: [
            'Elle masque un transfert entre clients',
            'Elle exagère le coût du transport',
            'Elle vise les seuls clients pressés',
            'Elle est juridiquement inexacte',
          ],
          correct: 0,
          why: 'Le surstock est financé par la marge des produits non urgents, donc par ceux qui n’utilisent pas le service.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 23 · le droit à la déconnexion',
      text:
        'Le droit à la déconnexion existe dans la loi depuis plusieurs années. ' +
        'Il est presque toujours discuté comme une question d’horaires, ' +
        'et c’est cette lecture qui l’a rendu inopérant.\n\n' +
        'Un accord d’entreprise typique interdit l’envoi de courriels entre vingt heures et sept heures. ' +
        'La mesure est simple, vérifiable, et contournée sans mauvaise intention : ' +
        'les messages sont rédigés le soir et programmés pour sept heures cinq. ' +
        'Le salarié qui les reçoit sait qu’ils ont été écrits la veille, ' +
        'et la charge mentale que l’accord voulait éviter est intacte.\n\n' +
        'Une chose se laisse pourtant mesurer : le DÉLAI DE RÉPONSE ATTENDU. ' +
        'Là où les accords s’en occupent, en écrivant qu’aucune réponse n’est attendue ' +
        'avant le lendemain midi, les enquêtes internes montrent un effet net, ' +
        'et il ne dépend pas de l’heure d’envoi.\n\n' +
        'La conclusion n’est pas que les horaires ne comptent pas. ' +
        'Elle est que le droit a été écrit contre un geste, l’envoi, ' +
        'alors que ce qui pèse est une attente, et qu’une attente ne s’interdit pas : ' +
        'elle se déclare.\n' +
        'Une dernière remarque, qui vaut avertissement. Les accords qui déclarent un délai ' +
        'ne le font tenir que si les responsables eux-mêmes cessent de répondre la nuit, ' +
        'car une règle écrite contre un exemple perd toujours contre l’exemple.',
      items: [
        {
          q: 'Pourquoi l’interdiction d’envoi est-elle inopérante ?',
          opts: [
            'Les messages sont programmés pour le matin',
            'Les salariés refusent de l’appliquer',
            'Elle n’est pas contrôlée',
            'Elle ne concerne que les cadres',
          ],
          correct: 0,
          why: 'Rédigés le soir, programmés pour sept heures cinq : le destinataire sait quand ils ont été écrits.',
          band: 'b2',
        },
        {
          q: 'Quelle est la thèse de l’auteur ?',
          opts: [
            'Le droit vise un geste alors que la charge vient d’une attente',
            'Les horaires ne comptent pas',
            'Le droit à la déconnexion devrait être supprimé',
            'Les accords d’entreprise sont trop rares',
          ],
          correct: 0,
          why: 'Il écarte explicitement l’idée que les horaires ne comptent pas : une attente se déclare au lieu de s’interdire.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */

export const CE_C1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'c1',
  label: 'Compréhension écrite · C1',
  prompt: 'Lisez les deux documents et choisissez la bonne réponse.',
  timingS: 720,
  targetItemIds: uniq(ITEMS.ethique.c1, ITEMS.argotClassique.c1),
  parts: [
    {
      label: 'Document 30 · le consentement dans la protection des données',
      text:
        'Le texte fait du consentement le fondement du traitement des données, ' +
        'et cette élégance est aussi sa faiblesse.\n\n' +
        'L’élégance tient à ce qu’elle respecte la personne : nul ne dispose de vous ' +
        'sans votre accord. C’est une idée ancienne, empruntée au droit médical, ' +
        'où elle fonctionne parce que l’acte est unique, daté, expliqué par quelqu’un ' +
        'dont c’est le métier, et refusable sans conséquence immédiate.\n\n' +
        'Aucune de ces quatre conditions ne tient en ligne. L’acte n’est pas unique ' +
        'mais permanent ; il n’est pas daté mais reconduit ; il n’est expliqué par personne ' +
        'mais par un document ; et le refus a une conséquence immédiate, ' +
        'qui est de ne pas accéder au service. Transporter la notion sans transporter ' +
        'ses conditions, c’est garder le mot et perdre ce qui le rendait juste.\n\n' +
        'On objectera que le texte prévoit d’autres bases légales, et c’est exact. ' +
        'L’intérêt légitime, en particulier, permet de traiter sans consentement ' +
        'sous condition d’une mise en balance. Mais cette base est présentée, ' +
        'y compris par les autorités, comme un recours subsidiaire, ' +
        'de sorte que le consentement reste la voie normale et la mise en balance l’exception, ' +
        'alors que la logique des conditions ci-dessus voudrait exactement l’inverse.\n\n' +
        'L’intérêt de la mise en balance n’est pas qu’elle protège mieux. ' +
        'Elle protège parfois moins. Son intérêt est qu’elle oblige quelqu’un d’identifiable ' +
        'à écrire pourquoi le traitement est proportionné, et à le signer. ' +
        'Le consentement, lui, déplace cette charge sur la personne la moins informée ' +
        'de la chaîne, puis l’appelle liberté.\n\n' +
        'Rien de ceci ne plaide pour moins de droits. Cela plaide pour cesser de traiter ' +
        'une case cochée comme si elle valait une décision.\n' +
        'La différence se mesure au moment où quelque chose tourne mal. ' +
        'Devant une case, on cherche ce que la personne a accepté. ' +
        'Devant une mise en balance, on cherche ce que l’organisation a jugé proportionné, ' +
        'et cette seconde question a une réponse écrite, datée et signée.',
      items: [
        {
          q: 'Pourquoi le consentement fonctionne-t-il en droit médical, selon l’auteur ?',
          opts: [
            'L’acte y est unique, daté, expliqué et refusable sans conséquence immédiate',
            'Les patients y sont mieux informés',
            'La loi y est plus ancienne',
            'Les médecins y sont responsables pénalement',
          ],
          correct: 0,
          why: 'Le texte énumère précisément ces quatre conditions avant de montrer qu’aucune ne tient en ligne.',
          band: 'c1',
        },
        {
          q: 'Que concède l’auteur à l’objection sur les autres bases légales ?',
          opts: [
            'Qu’elles existent bien dans le texte',
            'Qu’elles protègent mieux les personnes',
            'Qu’elles rendent le consentement inutile',
            'Qu’elles sont plus faciles à appliquer',
          ],
          correct: 0,
          why: '« C’est exact » : ce qu’il conteste est leur statut subsidiaire, pas leur existence.',
          band: 'c1',
        },
        {
          q: 'Quel avantage l’auteur reconnaît-il à la mise en balance ?',
          opts: [
            'Elle oblige quelqu’un d’identifiable à motiver et à signer',
            'Elle protège mieux que le consentement',
            'Elle est plus rapide à mettre en œuvre',
            'Elle supprime les formulaires',
          ],
          correct: 0,
          why: 'Il écarte lui-même l’idée qu’elle protège mieux : « elle protège parfois moins ».',
          band: 'c1',
        },
        {
          q: 'Que conclut exactement l’auteur ?',
          opts: [
            'Il faut cesser de traiter une case cochée comme une décision',
            'Il faut supprimer le consentement du texte',
            'Il faut réduire les droits des personnes',
            'Il faut revenir au modèle médical',
          ],
          correct: 0,
          why: 'La dernière phrase écarte explicitement l’idée de « moins de droits ».',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 31 · le vocabulaire managérial',
      text:
        'Il y a des mots qu’on ne peut plus employer sans sourire, et « impacter » ' +
        'a rejoint la liste avant même d’avoir été utile.\n\n' +
        'Le procès qu’on lui fait est pourtant mal instruit. On lui reproche d’être laid, ' +
        'ce qui ne se discute pas et ne prouve rien : « ordinateur » était laid aussi. ' +
        'On lui reproche d’être un anglicisme, ce qui est à moitié faux et entièrement ' +
        'sans importance. Le vrai grief est ailleurs, et il est grammatical.\n\n' +
        '« Impacter » est transitif, et c’est là que le tour se joue. ' +
        'La phrase « la réorganisation impacte les équipes » désigne un agent, ' +
        'la réorganisation, qui n’a jamais rien décidé, et un patient, les équipes, ' +
        'à qui il arrive quelque chose. Personne n’a réorganisé. ' +
        'Le mot ne cache pas une décision : il la dissout dans un phénomène.\n\n' +
        'Comparez « nous supprimons douze postes ». Même contenu, trois mots de moins, ' +
        'et un sujet qui peut être convoqué. C’est très exactement le service que rend ' +
        'le vocabulaire dont on se moque, et se moquer coûte moins cher que de le remarquer.\n\n' +
        'Je ne demande donc pas qu’on bannisse ce verbe. Une interdiction produirait ' +
        'un synonyme en trois semaines, et le synonyme serait innocent le temps qu’on l’apprenne. ' +
        'Je demande une habitude plus modeste : devant toute phrase où quelque chose ' +
        'arrive à quelqu’un, chercher qui a signé. ' +
        'La question est impolie, ce qui est le seul reproche sérieux qu’on puisse lui faire.\n' +
        'On la posera d’ailleurs rarement deux fois dans la même réunion, ' +
        'et jamais à la personne qui a réellement signé, laquelle se trouve en général ' +
        'à un étage où le vocabulaire redevient étonnamment transitif : ' +
        'on y dit « j’ai décidé », parce qu’entre soi la phrase ne coûte rien.',
      items: [
        {
          q: 'Quel est le vrai grief de l’auteur contre « impacter » ?',
          opts: [
            'Sa construction transitive fait disparaître celui qui décide',
            'C’est un anglicisme',
            'Le mot est laid',
            'Il est employé trop souvent',
          ],
          correct: 0,
          why: 'Il écarte la laideur et l’anglicisme comme mal instruits : « le vrai grief est grammatical ».',
          band: 'c1',
        },
        {
          q: 'Pourquoi refuse-t-il d’interdire le mot ?',
          opts: [
            'Un synonyme le remplacerait aussitôt',
            'L’interdiction serait illégale',
            'Le mot est devenu indispensable',
            'Les entreprises n’obéiraient pas',
          ],
          correct: 0,
          why: 'Une interdiction produirait un synonyme en trois semaines, innocent le temps qu’on l’apprenne.',
          band: 'c1',
        },
        {
          q: 'Que veut dire la dernière phrase ?',
          opts: [
            'L’impolitesse de la question est ce qui la rend efficace',
            'La question ne devrait pas être posée',
            'L’auteur regrette son ton',
            'Les questions polies obtiennent plus',
          ],
          correct: 0,
          why: 'C’est le seul reproche « sérieux » qu’on puisse lui faire : l’ironie retourne l’objection en éloge.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// An academic extract, and the only document on the paper where the difficulty
// is the ARGUMENT'S SHAPE. The author spends four paragraphs building a case
// they then decline to make, and a candidate who reads the build-up as the
// thesis gets all three questions wrong while understanding every sentence.

export const CE_C2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'c2',
  label: 'Compréhension écrite · C2',
  prompt: 'Lisez le document et choisissez la bonne réponse.',
  timingS: 580,
  targetItemIds: uniq(ITEMS.argotClassique.c2),
  parts: [
    {
      label: 'Document 37 · extrait d’article',
      text:
        'L’histoire du mot « travailler » est racontée si souvent, et si mal, ' +
        'qu’elle mérite d’être reprise pour ce qu’elle montre vraiment, ' +
        'qui n’est pas ce qu’on lui fait dire.\n\n' +
        'Le récit courant tient en une phrase : le verbe viendrait du latin tardif ' +
        '« tripalium », un instrument à trois pieux, et travailler signifierait donc ' +
        'étymologiquement torturer. La conclusion s’écrit toute seule, ' +
        'et on la lit chaque année dans des tribunes : notre rapport au travail ' +
        'serait vicié depuis l’origine, la langue elle-même en témoignerait.\n\n' +
        'L’étymologie est plausible et rien ne l’établit. Le passage de l’instrument ' +
        'au verbe n’est attesté par aucun texte intermédiaire, et une chaîne concurrente, ' +
        'par « trepaliare » au sens de tourmenter, expliquerait les mêmes formes ' +
        'sans passer par les trois pieux. Les dictionnaires signalent l’incertitude ' +
        'en une ligne que personne ne cite.\n\n' +
        'Mais supposons-la vraie. Elle ne dirait toujours rien de ce qu’on lui fait dire. ' +
        'Le sens d’un mot n’est pas conservé dans son origine comme un noyau dans un fruit ; ' +
        'il est produit par l’usage, à chaque génération, et l’usage a plusieurs fois ' +
        'renversé des étymologies bien plus claires que celle-ci. ' +
        '« Formidable » a signifié effrayant. Personne n’en conclut que féliciter un enfant ' +
        'est une menace voilée.\n\n' +
        'À ce stade, le lecteur attend que je conclue à l’inutilité de l’étymologie, ' +
        'et c’est précisément ce que je ne ferai pas. ' +
        'L’argument étymologique est mauvais comme preuve et excellent comme symptôme. ' +
        'Qu’une société raconte cette histoire-là, si volontiers, sur ce mot-là, ' +
        'et pas sur « métier » ou sur « ouvrage », qui étaient disponibles, ' +
        'est un fait social parfaitement réel, et il est plus intéressant que la question ' +
        'de savoir si les trois pieux ont existé.\n\n' +
        'Ce qu’il faut donc abandonner n’est pas l’étymologie, c’est l’usage probatoire ' +
        'qu’on en fait. Une fausse origine largement crue en dit long sur ceux qui la croient, ' +
        'et rien sur le mot. La distinction est mince et elle sépare deux disciplines : ' +
        'l’une étudie la langue, l’autre étudie ceux qui parlent d’elle. ' +
        'Confondre les deux permet d’avoir l’air d’argumenter tout en racontant ' +
        'ce qu’on pensait déjà.\n' +
        'On m’objectera que la nuance est de professeur et que le public, lui, retient l’image. ' +
        'C’est vrai, et c’est un motif de la répéter plutôt que de l’abandonner. ' +
        'Une image fausse ne devient pas juste parce qu’elle circule ; ' +
        'elle devient seulement plus coûteuse à corriger, et le coût est déjà considérable.',
      items: [
        {
          q: 'Que conclut l’auteur sur l’étymologie par le « tripalium » ?',
          opts: [
            'Elle est incertaine, et sa vérité ne changerait rien à l’argument',
            'Elle est définitivement fausse',
            'Elle est établie mais mal interprétée',
            'Elle prouve que le travail fut une peine',
          ],
          correct: 0,
          why: 'Deux temps : rien ne l’établit, puis « supposons-la vraie », et elle ne dirait toujours rien.',
          band: 'c2',
        },
        {
          q: 'Que fait l’auteur au cinquième paragraphe ?',
          opts: [
            'Il refuse la conclusion que sa démonstration appelait',
            'Il résume ce qui précède',
            'Il concède l’argument de ses adversaires',
            'Il change de sujet',
          ],
          correct: 0,
          why: '« Le lecteur attend que je conclue à l’inutilité de l’étymologie, et c’est ce que je ne ferai pas. »',
          band: 'c2',
        },
        {
          q: 'Que vise la remarque sur « métier » et « ouvrage » ?',
          opts: [
            'Le choix du mot raconté est lui-même le fait à expliquer',
            'Ces mots ont une étymologie plus sûre',
            'Ils sont plus anciens que « travailler »',
            'Ils désignent autre chose',
          ],
          correct: 0,
          why: 'Ils étaient disponibles et personne ne raconte leur histoire : ce qui intéresse est pourquoi celui-là.',
          band: 'c2',
        },
      ],
    },
  ],
};
