// b2.31.l1 « Les accents et le français régional »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6. Labels run 8 to 13 characters; every section's row
// is asserted under 37 by scratch/_b231-validate.mts.
//
// B2 LANGUAGE RULE: the body is natural B2 French, addressed as « tu », then
// ONE English line starting « EN: ».
//
// THE GLOSSARY FOLLOWS THE REFRAME: what an accent is (un accent, les
// centres, la référence), how to read one (régionalisme, affrication, les
// repas, septante, le créole), and how to treat one (insécurité, faire
// répéter, institutions).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, SOUPER_S, SEPTANTE_S, REPETER, SI_COMPRENDS, CHARTE } from './francais-regional-corpus.ts';

export const FRANCAIS_REGIONAL_TERMS: Record<string, LessonTerm> = {
  /** Acts 1, 2 and 6: the reframe's word. */
  accent: {
    term: 'un accent',
    title: 'La musique d’une région',
    body: 'Un accent, c’est la façon dont une région, un pays ou un milieu prononce la même langue : ses voyelles, son rythme, sa mélodie. Tout le monde en a un, y compris à Paris. Un accent dit d’où l’on vient ; il ne dit rien de ce que l’on vaut. EN: An accent is how a place pronounces the same language; everyone has one.',
    examples: [
      { itemId: E(1005), note: 'tout le monde, même à Paris' },
      { itemId: E(1026), note: 'Paris est un accent parmi d’autres' },
      { itemId: E(1096), note: 'l’accent et les compétences' },
    ],
  },

  /** Act 2: pluricentric French. */
  centres: {
    term: 'les centres',
    title: 'Une langue, plusieurs centres',
    body: 'Le français est une langue pluricentrique : la France, le Québec, la Belgique, la Suisse et les pays d’Afrique francophone ont chacun leurs habitudes. L’écrit reste presque le même partout ; c’est l’oral qui varie. EN: French has several centres; writing is shared, speech varies.',
    examples: [
      { itemId: E(1013), note: 'plusieurs centres' },
      { itemId: E(1015), note: 'l’écrit commun' },
      { itemId: E(1016), note: 'l’oral de chaque région' },
    ],
  },

  /** Act 2: the common standard and its limits. */
  reference: {
    term: 'la référence',
    title: 'Le français de référence',
    body: 'Le français de référence est la forme commune des dictionnaires, des manuels et des examens, proche du français soigné de France. C’est un repère utile pour apprendre et pour écrire. Mais personne ne le parle exactement, et il ne sert pas à juger les autres variétés. EN: Reference French is a shared landmark, not a better accent.',
    examples: [
      { itemId: E(1017), note: 'le mot' },
      { itemId: E(1021), note: 'un repère, pas un modèle de valeur' },
      { itemId: E(1022), note: 'personne ne le parle tel quel' },
    ],
  },

  /** Acts 2, 4, 5 and 7: a word of one region. */
  regionalisme: {
    term: 'régionalisme',
    title: 'Le mot d’une région',
    body: 'Un régionalisme est un mot, un sens ou une tournure propre à une région ou à un pays : dépanneur au Québec, drache en Belgique, natel en Suisse, essencerie au Sénégal. Ce n’est pas une faute ; c’est du français d’ailleurs. Quand tu en cites un, nomme sa région. EN: A regionalism belongs to one region; name the region when you use it.',
    examples: [
      { itemId: E(1027), note: 'pas une faute' },
      { itemId: E(1062), note: 'un mot connu, un autre sens' },
      { itemId: E(1122), note: 'formé avec les règles du français' },
    ],
  },

  /** Act 3: the most audible Québec feature. */
  affrication: {
    term: 'affrication',
    title: 'Tu et dis, à la québécoise',
    body: 'Au Québec, devant i et u, le t et le d se prononcent avec un petit sifflement : tu sonne à peu près « tsu », dis « dzi », petit « petsi ». C’est la règle de la variété, chez tout le monde, à la radio comme en famille. La voix de l’appli, elle, parle un français de France. EN: In Québec, t and d before i and u sound like ts and dz.',
    examples: [
      { itemId: E(1030), note: 'cinq fois dans une phrase' },
      { itemId: E(1034), note: 'la règle' },
      { itemId: E(1035), note: 'pas un défaut' },
    ],
  },

  /** Acts 4 and 5: the three meals. */
  repas: {
    term: 'les repas',
    title: 'Déjeuner, dîner, souper',
    body: 'Au Québec, en Belgique et en Suisse, on déjeune le matin, on dîne à midi et on soupe le soir, là où la France dit petit-déjeuner, déjeuner et dîner. Une invitation à dîner n’annonce donc pas la même heure partout. EN: In Québec, Belgium and Switzerland, dîner is lunch and souper is the evening meal.',
    examples: [
      { itemId: E(1048), note: 'les trois repas, au Québec' },
      { itemId: SOUPER_S, note: 'Québec et France, côte à côte' },
      { itemId: E(1082), note: 'en Belgique et en Suisse aussi' },
    ],
  },

  /** Act 5: the Belgian and Swiss numbers. */
  nombres: {
    term: 'septante',
    title: 'Septante, huitante, nonante',
    body: 'En Belgique et en Suisse, on dit septante (70) et nonante (90). La Belgique garde quatre-vingts ; en Suisse, notamment dans le canton de Vaud et en Valais, on dit huitante. Ces nombres suivent la série trente, quarante, cinquante : ils sont réguliers. EN: 70 and 90 are septante and nonante in Belgium and Switzerland; 80 is huitante in parts of Switzerland.',
    examples: [
      { itemId: E(1078), note: 'en Belgique' },
      { itemId: E(1077), note: 'à Lausanne et à Genève' },
      { itemId: SEPTANTE_S, note: 'dans un article' },
    ],
  },

  /** Act 8: a language of its own. */
  creole: {
    term: 'le créole',
    title: 'Une langue à part entière',
    body: 'Les créoles des Antilles, de La Réunion ou d’Haïti sont nés du contact entre le français et d’autres langues, pendant la période coloniale. Leur vocabulaire vient surtout du français, mais leur grammaire est la leur : ce sont des langues, pas du français déformé. EN: Creoles are languages in their own right, not broken French.',
    examples: [
      { itemId: E(1127), note: 'une autre langue' },
      { itemId: E(1128), note: 'aux Antilles' },
      { itemId: E(1130), note: 'en Haïti, langue officielle' },
    ],
  },

  /** Acts 6 and 10: the feeling that one's French is worth less. */
  insecurite: {
    term: 'insécurité',
    title: 'L’insécurité linguistique',
    body: 'L’insécurité linguistique, c’est le sentiment que sa propre façon de parler vaut moins que celle des autres. Elle fait parler moins, corriger ses enfants, s’excuser de ses mots. Le respect d’un accent commence par l’écoute de ce que la personne dit. EN: Linguistic insecurity is feeling that your way of speaking is worth less.',
    examples: [
      { itemId: E(1093), note: 'le mot' },
      { itemId: E(1175), note: 'ce qu’elle produit' },
      { itemId: E(1174), note: 'en Belgique et au Québec' },
    ],
  },

  /** Acts 1 and 9: the strategy. */
  repeter: {
    term: 'faire répéter',
    title: 'Demander, reformuler, rester en français',
    body: 'Quand tu ne comprends pas, tu dis ce qui manque (« je n’ai pas bien saisi la fin »), tu demandes le sens d’un mot, puis tu reformules pour vérifier. Tu restes en français, et tu ne commentes jamais l’accent. EN: Say what you missed, ask about the word, repeat back, stay in French.',
    examples: [
      { itemId: E(1001), note: 'la phrase clé' },
      { itemId: REPETER, note: 'plus lentement' },
      { itemId: SI_COMPRENDS, note: 'reformuler' },
    ],
  },

  /** Act 10: who does what. */
  institutions: {
    term: 'institutions',
    title: 'Ceux qui conseillent la langue',
    body: 'L’Office québécois de la langue française veille à l’application de la Charte de la langue française ; en France, une délégation du ministère de la Culture coordonne la politique de la langue ; l’Académie française rédige un dictionnaire. Elles conseillent et proposent des mots ; aucune ne classe les accents. EN: Language institutions advise; none of them ranks accents.',
    examples: [
      { itemId: E(1168), note: 'l’OQLF' },
      { itemId: E(1171), note: 'l’Académie française' },
      { itemId: CHARTE, note: 'la loi québécoise' },
    ],
  },
};
