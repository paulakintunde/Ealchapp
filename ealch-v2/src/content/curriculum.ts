// Beginners' Den curriculum ported 1:1 from the prototype.

export type Unit = { title: string; sub: string };

export const currSons: Unit[] = [
  { title: "L'alphabet", sub: 'the 26 letters & their French names' },
  { title: 'Les voyelles', sub: 'pure vowels — a, e, i, o, u, ou, eu' },
  { title: 'Les voyelles nasales', sub: 'on · en · in · un — through the nose' },
  { title: 'Les consonnes', sub: 'consonant sounds & the French r' },
  { title: 'Les accents', sub: 'é è ê ë ç — what each mark changes' },
  { title: 'Les lettres muettes', sub: 'silent letters — why « ils parlent » ends quietly' },
  { title: "L'élision", sub: "je → j', le → l' — dropping the vowel" },
  { title: 'Rythme & intonation', sub: 'the music of French — even syllables' },
  { title: 'Masterclass', sub: 'pronunciation masterclass — putting it all together' },
];

export const currA1: Unit[] = [
  { title: 'Les salutations', sub: 'greetings & politeness — bonjour, merci' },
  { title: 'Les nombres', sub: 'numbers 0–100' },
  { title: 'Le genre des noms', sub: 'noun gender — masculin & féminin' },
  { title: 'Les articles définis', sub: 'le, la, les' },
  { title: 'Les pronoms sujets', sub: 'je, tu, il, elle, nous, vous, ils' },
  { title: 'Le verbe être', sub: 'to be — je suis, tu es…' },
  { title: 'Le verbe avoir', sub: "to have — j'ai, tu as…" },
  { title: "Calendrier & l'heure", sub: 'days, months, telling time' },
  { title: 'Les saisons', sub: 'seasons of the year' },
  { title: 'La météo', sub: 'weather — il pleut, il fait beau' },
  { title: 'Décrire les choses', sub: "describing things — c'est, il y a" },
  { title: 'Les couleurs', sub: 'colors & their agreement' },
  { title: 'Adjectifs de base', sub: 'basic adjectives — grand, petit, beau' },
  { title: 'La famille', sub: 'family vocabulary' },
  { title: 'Adjectifs possessifs', sub: 'mon, ma, mes, notre…' },
  { title: "La place de l'adjectif", sub: 'adjective placement — before or after?' },
  { title: 'Demander & localiser', sub: 'asking & locating — où est… ?' },
  { title: 'La négation', sub: 'ne… pas' },
  { title: 'Questions oui / non', sub: 'yes-no questions — est-ce que…' },
  { title: 'Les mots interrogatifs', sub: 'question words — qui, quoi, où, quand' },
  { title: 'Prépositions de lieu', sub: 'prepositions of place — sur, sous, dans' },
  { title: 'Pays & nationalités', sub: 'countries & nationalities' },
  { title: 'La nourriture', sub: 'everyday food vocabulary' },
  { title: 'Le corps', sub: 'body parts' },
  { title: 'La routine quotidienne', sub: 'daily routines — se lever, se coucher' },
  { title: 'La maison', sub: 'home & furniture' },
];

export const currA2: Unit[] = [
  { title: 'Verbes réguliers', sub: 'deep dive — -er, -ir, -re families' },
  { title: 'Verbes irréguliers', sub: 'aller, faire, venir, pouvoir, vouloir' },
  { title: 'Adjectifs & adverbes', sub: 'agreement, formation, -ment adverbs' },
  { title: 'Les prépositions', sub: 'à, de, en, chez — and their traps' },
  { title: 'Le passé composé', sub: 'the past tense — avoir vs être' },
  { title: 'Pronoms objets', sub: 'object pronouns — le, la, lui, y, en' },
  { title: 'Situations quotidiennes', sub: 'everyday situations — shops, transport, pharmacy' },
  { title: 'Comparaisons & références', sub: 'plus… que, moins… que, celui-ci' },
];

// A2 sub-lessons — one array per A2 unit (index aligned to currA2).
export const a2Subs: string[][] = [
  ['Regular -ER Verbs — The Full System', '-ER Verbs — Spelling Quirks', 'Regular -IR Verbs', 'Regular -RE Verbs'],
  ['Irregular 1 — aller, venir, tenir', 'Irregular 2 — faire, dire, lire', 'Irregular 3 — vouloir, pouvoir, devoir', 'Irregular 4 — savoir vs connaître', 'Irregular 5 — prendre, mettre, battre'],
  ['Adjective Agreement — The Full System', 'beau, nouveau, vieux — The Triple Forms', 'Adverbs — Formation & Placement'],
  ['Prepositions of Place — Full Set', 'Prepositions of Time'],
  ['Futur Proche — Going to', 'Passé Composé with avoir', 'Irregular Past Participles', 'Passé Composé with être', 'Reflexive Verbs — Present Tense', 'Reflexive Verbs — Passé Composé'],
  ['Direct Object Pronouns — le/la/les', 'Indirect Object Pronouns — lui/leur', 'Y and EN — The Two Neutral Pronouns'],
  ['Food, Restaurant & Ordering', 'Shopping, Money & Prices', 'Transport & Travel', 'At the Doctor / Health', 'At the Hotel / Accommodation', 'Work & Professions', 'School & Education', 'Technology & Daily Life'],
  ['Comparatives & Superlatives', 'Demonstratives — this / that', 'Possessive Pronouns — mine, yours, his/hers'],
];

// Which units have an extended (openable) lesson wired.
export const extendedLesson: Record<string, string> = {
  'sons-2': 'sons3', // Les voyelles nasales (index 2)
  'a1-3': 'a1_4', // Les articles définis (index 3)
  'a2-0': 'a2_1', // Verbes réguliers (index 0)
};
