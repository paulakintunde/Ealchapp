// Display names for theme slugs. The corpus carries bare slugs ('cafe'); the
// browser needs a French scene title and an English support line for each,
// per the bilingual-header rule (French leads, English is always available).
//
// This is presentation, not catalogue: when the schema's Theme entities ship
// in a snapshot, their titles win and this map becomes the fallback. Unknown
// slugs render via fallbackMeta so an OTA theme never crashes the browser.

export type ThemeMeta = {
  /** French scene title, definite-article style: « Au café ». */
  fr: string;
  /** English support title. */
  en: string;
  /** One-line scene description. */
  subFr: string;
  subEn: string;
};

export const THEME_META: Record<string, ThemeMeta> = {
  cafe: {
    fr: 'Au café',
    en: 'At the café',
    subFr: 'Commander, demander la table et l’addition.',
    subEn: 'Order like a local, get a table, a noisette and the bill.',
  },
  salutations: {
    fr: 'Les salutations',
    en: 'Greetings',
    subFr: 'Saluer, se présenter et prendre congé, poliment.',
    subEn: 'Say hello, introduce yourself and take your leave, politely.',
  },
  marche: {
    fr: 'Le marché',
    en: 'The market',
    subFr: 'Acheter, peser, négocier au marché.',
    subEn: 'Buy, weigh and haggle at the market.',
  },
  objets: {
    fr: 'Les objets',
    en: 'Everyday objects',
    subFr: 'Nommer les objets du quotidien.',
    subEn: 'Name the objects of daily life.',
  },
  verbes: {
    fr: 'Les verbes',
    en: 'Verbs',
    subFr: 'Les verbes essentiels, en contexte.',
    subEn: 'The essential verbs, in context.',
  },
  dictee: {
    fr: 'La dictée',
    en: 'Dictation',
    subFr: 'Écouter et écrire, sans faute.',
    subEn: 'Listen and write, without mistakes.',
  },
  // The flashcard hub's sub-themes (one entry per catalogue theme slug).
  // Titles only: the sub-theme cards derive their meta line (count, band
  // range) from the live corpus, so an authored blurb here would just age.
  'expressions-utiles': { fr: 'Les expressions utiles', en: 'Useful expressions', subFr: '', subEn: '' },
  'argot-de-base': { fr: "L'argot de base", en: 'Everyday spoken French', subFr: '', subEn: '' },
  'argot-du-quotidien': { fr: "L'argot du quotidien", en: 'Daily-life slang', subFr: '', subEn: '' },
  verlan: { fr: 'Le verlan', en: 'Verlan', subFr: '', subEn: '' },
  'argot-des-jeunes': { fr: "L'argot des jeunes", en: 'Youth slang', subFr: '', subEn: '' },
  'expressions-argot': { fr: 'Les expressions familières', en: 'Slang expressions', subFr: '', subEn: '' },
  'argot-afrique': { fr: "Le français des rues d'Afrique", en: 'African street French', subFr: '', subEn: '' },
  'argot-classique': { fr: "L'argot classique", en: 'Classic argot', subFr: '', subEn: '' },
  'adverbes-essentiels': { fr: 'Les adverbes essentiels', en: 'Essential adverbs', subFr: '', subEn: '' },
  'faux-amis': { fr: 'Les faux amis', en: 'False friends', subFr: '', subEn: '' },
  'mots-de-liaison': { fr: 'Les mots de liaison', en: 'Linking words', subFr: '', subEn: '' },
  'sports-et-loisirs': { fr: 'Le sport et les loisirs', en: 'Sports and hobbies', subFr: '', subEn: '' },
  'la-ville': { fr: 'La ville', en: 'The city', subFr: '', subEn: '' },
  'au-restaurant': { fr: 'Au restaurant', en: 'At the restaurant', subFr: '', subEn: '' },
  'transports-quotidiens': { fr: 'Les transports du quotidien', en: 'Daily transportation', subFr: '', subEn: '' },
  'technologie-quotidienne': { fr: 'La technologie au quotidien', en: 'Everyday technology', subFr: '', subEn: '' },
  'pays-et-nationalites': { fr: 'Les pays et les nationalités', en: 'Countries and nationalities', subFr: '', subEn: '' },
  'les-fetes': { fr: 'Les fêtes', en: 'Holidays and celebrations', subFr: '', subEn: '' },
  'noms-essentiels': { fr: 'Les noms essentiels', en: 'Essential nouns', subFr: '', subEn: '' },
  nombres: { fr: 'Les nombres', en: 'Numbers', subFr: '', subEn: '' },
  questions: { fr: 'Les questions', en: 'Question words', subFr: '', subEn: '' },
  couleurs: { fr: 'Les couleurs', en: 'Colors', subFr: '', subEn: '' },
  'jours-et-mois': { fr: 'Les jours et les mois', en: 'Days and months', subFr: '', subEn: '' },
  'mots-essentiels': { fr: 'Les mots essentiels', en: 'Essential words', subFr: '', subEn: '' },
  'verbes-essentiels': { fr: 'Les verbes essentiels', en: 'Essential verbs', subFr: '', subEn: '' },
  'adjectifs-essentiels': { fr: 'Les adjectifs essentiels', en: 'Essential adjectives', subFr: '', subEn: '' },
  voyelles: { fr: 'Les voyelles', en: 'Vowel sounds', subFr: '', subEn: '' },
  alphabet: { fr: "L'alphabet", en: 'The alphabet', subFr: '', subEn: '' },
  maison: { fr: 'La maison', en: 'The home', subFr: '', subEn: '' },
  routines: { fr: 'Les routines', en: 'Daily routines', subFr: '', subEn: '' },
  cuisine: { fr: 'La cuisine', en: 'Food and cooking', subFr: '', subEn: '' },
  vetements: { fr: 'Les vêtements', en: 'Clothing', subFr: '', subEn: '' },
  courses: { fr: 'Les courses', en: 'Shopping', subFr: '', subEn: '' },
  famille: { fr: 'La famille', en: 'Family', subFr: '', subEn: '' },
  amis: { fr: 'Les amis', en: 'Friends', subFr: '', subEn: '' },
  collegues: { fr: 'Les collègues', en: 'Colleagues', subFr: '', subEn: '' },
  communaute: { fr: 'La communauté', en: 'Community', subFr: '', subEn: '' },
  corps: { fr: 'Le corps', en: 'The body', subFr: '', subEn: '' },
  symptomes: { fr: 'Les symptômes', en: 'Symptoms', subFr: '', subEn: '' },
  soins: { fr: 'Les soins', en: 'Healthcare', subFr: '', subEn: '' },
  'bien-etre': { fr: 'Le bien-être', en: 'Wellbeing', subFr: '', subEn: '' },
  metiers: { fr: 'Les métiers', en: 'Job titles', subFr: '', subEn: '' },
  bureau: { fr: 'Au bureau', en: 'At the office', subFr: '', subEn: '' },
  affaires: { fr: 'Les affaires', en: 'Business', subFr: '', subEn: '' },
  deplacements: { fr: 'Les déplacements', en: 'Getting around', subFr: '', subEn: '' },
  tourisme: { fr: 'Le tourisme', en: 'Tourism', subFr: '', subEn: '' },
  hebergement: { fr: "L'hébergement", en: 'Accommodation', subFr: '', subEn: '' },
  meteo: { fr: 'La météo', en: 'Weather', subFr: '', subEn: '' },
  animaux: { fr: 'Les animaux', en: 'Animals', subFr: '', subEn: '' },
  paysages: { fr: 'Les paysages', en: 'Landscapes', subFr: '', subEn: '' },
  ecologie: { fr: "L'écologie", en: 'Ecology', subFr: '', subEn: '' },
  ecole: { fr: "L'école", en: 'School', subFr: '', subEn: '' },
  matieres: { fr: 'Les matières', en: 'School subjects', subFr: '', subEn: '' },
  universite: { fr: "L'université", en: 'University', subFr: '', subEn: '' },
  recherche: { fr: 'La recherche', en: 'Research', subFr: '', subEn: '' },
  appareils: { fr: 'Les appareils', en: 'Devices', subFr: '', subEn: '' },
  internet: { fr: 'Internet', en: 'The internet', subFr: '', subEn: '' },
  'reseaux-sociaux': { fr: 'Les réseaux sociaux', en: 'Social media', subFr: '', subEn: '' },
  journalisme: { fr: 'Le journalisme', en: 'Journalism', subFr: '', subEn: '' },
  musique: { fr: 'La musique', en: 'Music', subFr: '', subEn: '' },
  cinema: { fr: 'Le cinéma', en: 'Film', subFr: '', subEn: '' },
  musees: { fr: 'Les musées', en: 'Museums', subFr: '', subEn: '' },
  litterature: { fr: 'La littérature', en: 'Literature', subFr: '', subEn: '' },
  traditions: { fr: 'Les traditions', en: 'Traditions', subFr: '', subEn: '' },
  gouvernement: { fr: 'Le gouvernement', en: 'Government', subFr: '', subEn: '' },
  economie: { fr: "L'économie", en: 'The economy', subFr: '', subEn: '' },
  'questions-sociales': { fr: 'Les questions sociales', en: 'Social issues', subFr: '', subEn: '' },
  droit: { fr: 'Le droit', en: 'Law', subFr: '', subEn: '' },
  disciplines: { fr: 'Les disciplines', en: 'Fields of science', subFr: '', subEn: '' },
  'methode-scientifique': { fr: 'La méthode scientifique', en: 'The scientific method', subFr: '', subEn: '' },
  decouvertes: { fr: 'Les découvertes', en: 'Discoveries', subFr: '', subEn: '' },
  emotions: { fr: 'Les émotions', en: 'Emotions', subFr: '', subEn: '' },
  valeurs: { fr: 'Les valeurs', en: 'Values', subFr: '', subEn: '' },
  ethique: { fr: "L'éthique", en: 'Ethics', subFr: '', subEn: '' },
  philosophie: { fr: 'La philosophie', en: 'Philosophy', subFr: '', subEn: '' },
  'animaux-domestiques': { fr: 'Les animaux domestiques', en: 'Pets', subFr: '', subEn: '' },
  bricolage: { fr: 'Le bricolage', en: 'DIY and repairs', subFr: '', subEn: '' },
  jardinage: { fr: 'Le jardinage', en: 'Gardening', subFr: '', subEn: '' },
  voisinage: { fr: 'Le voisinage', en: 'Neighbors', subFr: '', subEn: '' },
  'argent-quotidien': { fr: "L'argent au quotidien", en: 'Everyday money', subFr: '', subEn: '' },
  'couple-amour': { fr: "Le couple et l'amour", en: 'Relationships and love', subFr: '', subEn: '' },
  rencontres: { fr: 'Les rencontres', en: 'Meeting people', subFr: '', subEn: '' },
  'conflits-reconciliation': { fr: 'Les conflits et la réconciliation', en: 'Conflict and making up', subFr: '', subEn: '' },
  'evenements-familiaux': { fr: 'Les événements familiaux', en: 'Family events', subFr: '', subEn: '' },
  entraide: { fr: "L'entraide", en: 'Helping each other', subFr: '', subEn: '' },
  'presentation-personnelle': { fr: 'La présentation personnelle', en: 'Introducing yourself', subFr: '', subEn: '' },
  'questions-du-quotidien': { fr: 'Les questions du quotidien', en: 'Everyday questions', subFr: '', subEn: '' },
  'description-personnes-objets': { fr: 'Décrire les gens et les objets', en: 'Describing people and objects', subFr: '', subEn: '' },
  'verbes-du-quotidien': { fr: 'Les verbes du quotidien', en: 'Everyday verbs', subFr: '', subEn: '' },
  'temps-et-frequence': { fr: 'Le temps et la fréquence', en: 'Time and frequency', subFr: '', subEn: '' },
  'expressions-frequentes': { fr: 'Les expressions fréquentes', en: 'Common expressions', subFr: '', subEn: '' },
  comparaisons: { fr: 'Les comparaisons', en: 'Comparisons', subFr: '', subEn: '' },
  'connecteurs-logiques': { fr: 'Les connecteurs logiques', en: 'Logical connectors', subFr: '', subEn: '' },
  'opinions-et-avis': { fr: 'Les opinions et les avis', en: 'Opinions and views', subFr: '', subEn: '' },
  'recits-au-passe': { fr: 'Les récits au passé', en: 'Telling stories in the past', subFr: '', subEn: '' },
  'projets-et-futur': { fr: 'Les projets et le futur', en: 'Plans and the future', subFr: '', subEn: '' },
  'conseils-et-suggestions': { fr: 'Les conseils et les suggestions', en: 'Advice and suggestions', subFr: '', subEn: '' },

  // Role Play hub sub-themes (app/roleplayhub.tsx) — 15 fixed conversation
  // categories, each backed by scenarios spanning a1-b2.
  'rp-identite': { fr: 'Se présenter', en: 'Introducing yourself', subFr: 'Nom, origine, âge et coordonnées.', subEn: 'Name, background, age and contact details.' },
  'rp-famille': { fr: 'La famille et les relations', en: 'Family and relationships', subFr: 'Parler de sa famille, des liens et des événements.', subEn: 'Talk about family, relationships and events.' },
  'rp-quotidien': { fr: 'Les routines du quotidien', en: 'Everyday routines', subFr: 'Décrire ses journées et ses habitudes.', subEn: 'Describe your days and habits.' },
  'rp-maison': { fr: 'La maison et le logement', en: 'Home and housing', subFr: 'Décrire son logement et gérer un imprévu.', subEn: 'Describe your home and handle a mishap.' },
  'rp-travail-etudes': { fr: 'Le travail et les études', en: 'Work and education', subFr: 'Parler de son métier, ses études et sa carrière.', subEn: 'Talk about your job, studies and career.' },
  'rp-repas': { fr: 'Les repas et la cuisine', en: 'Meals and dining', subFr: 'Commander, organiser un repas, parler de cuisine.', subEn: 'Order, host a meal, talk about food.' },
  'rp-achats': { fr: "Les achats et l'argent", en: 'Shopping and money', subFr: 'Acheter, échanger, négocier un prix.', subEn: 'Buy, return items, negotiate a price.' },
  'rp-sante': { fr: 'Chez le médecin et la pharmacie', en: 'At the doctor and pharmacy', subFr: 'Décrire des symptômes et parler de bien-être.', subEn: 'Describe symptoms and talk about wellbeing.' },
  'rp-meteo-nature': { fr: 'La météo et la nature', en: 'Weather and nature', subFr: "Parler du temps, des saisons et de l'environnement.", subEn: 'Talk about weather, seasons and the environment.' },
  'rp-voyage': { fr: 'Les voyages et les déplacements', en: 'Travel and getting around', subFr: 'Demander son chemin, réserver, voyager.', subEn: 'Ask directions, book a trip, travel.' },
  'rp-loisirs': { fr: 'Les loisirs et les passe-temps', en: 'Leisure and hobbies', subFr: 'Parler de ce que vous aimez faire.', subEn: 'Talk about what you like to do.' },
  'rp-technologie': { fr: 'Le numérique au quotidien', en: 'Everyday technology', subFr: 'Appareils, réseaux sociaux et intelligence artificielle.', subEn: 'Devices, social media and AI.' },
  'rp-societe': { fr: 'La société et les opinions', en: 'Society and opinions', subFr: 'Donner son avis et débattre poliment.', subEn: 'Give opinions and debate politely.' },
  'rp-recits-temps': { fr: 'Récits : passé et futur', en: 'Stories: past and future', subFr: "Raconter un souvenir ou parler de l'avenir.", subEn: 'Tell a memory or talk about the future.' },
  'rp-etiquette': { fr: 'Les bonnes manières', en: 'Social etiquette', subFr: 'Politesse, excuses et situations délicates.', subEn: 'Politeness, apologies and delicate situations.' },
};

/** Meta for any slug: the authored entry, or an honest capitalized fallback so
 *  an OTA-added theme still renders (its slug as title, no invented blurb). */
export function themeMeta(slug: string): ThemeMeta {
  const m = THEME_META[slug];
  if (m) return m;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  return { fr: title, en: title, subFr: '', subEn: '' };
}
