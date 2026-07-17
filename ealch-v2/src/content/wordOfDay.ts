// Word of the day — a deterministic daily rotation over real vocabulary.
//
// The home card and the dictionary overlay used to hardcode « la flânerie » in
// two places, so it was the word of the day every day, forever. This rotates a
// real entry by the day of the year — the same word for everyone on a given
// date, with no backend — and both surfaces render the entry they are handed.

export type DictEntry = {
  /** The headword with its article, as shown: 'la flânerie'. */
  word: string;
  /** What TTS speaks (usually the word itself). */
  speak: string;
  ipa: string;
  posFr: string;
  posEn: string;
  /** The definition text only — the headword is rendered separately. */
  defFr: string;
  defEn: string;
  exampleFr: string;
  exampleEn: string;
};

export const wordsOfDay: DictEntry[] = [
  {
    word: 'la flânerie',
    speak: 'la flânerie',
    ipa: '/fla.nʁi/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: 'se promener sans but, pour le plaisir',
    defEn: 'strolling without hurry, wandering for the pleasure of it',
    exampleFr: "On a passé l'après-midi en pleine flânerie le long de la Seine.",
    exampleEn: 'We spent the afternoon strolling along the Seine.',
  },
  {
    word: 'le dépaysement',
    speak: 'le dépaysement',
    ipa: '/de.pe.iz.mɑ̃/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: "le sentiment d'être ailleurs, hors de ses repères",
    defEn: 'the feeling of being somewhere unfamiliar, a change of scenery',
    exampleFr: "Ce voyage m'a offert un vrai dépaysement.",
    exampleEn: 'That trip gave me a real change of scenery.',
  },
  {
    word: "l'émerveillement",
    speak: 'émerveillement',
    ipa: '/e.mɛʁ.vɛj.mɑ̃/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: "un étonnement plein d'admiration",
    defEn: 'wonder, a sense of admiring amazement',
    exampleFr: "Les enfants regardaient le feu d'artifice avec émerveillement.",
    exampleEn: 'The children watched the fireworks in wonder.',
  },
  {
    word: 'la douceur',
    speak: 'la douceur',
    ipa: '/du.sœʁ/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: 'la qualité de ce qui est doux ou agréable',
    defEn: 'softness, gentleness, mildness',
    exampleFr: 'La douceur du soir invitait à la promenade.',
    exampleEn: 'The mildness of the evening invited a walk.',
  },
  {
    word: 'le crépuscule',
    speak: 'le crépuscule',
    ipa: '/kʁe.pys.kyl/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: 'la lumière qui suit le coucher du soleil',
    defEn: 'twilight, dusk',
    exampleFr: 'Le crépuscule teintait le ciel de rose.',
    exampleEn: 'Twilight tinged the sky pink.',
  },
  {
    word: "l'insouciance",
    speak: 'insouciance',
    ipa: '/ɛ̃.su.sjɑ̃s/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: "l'absence de souci, la légèreté",
    defEn: 'carefreeness, freedom from worry',
    exampleFr: "Il repensait à l'insouciance de sa jeunesse.",
    exampleEn: 'He thought back to the carefreeness of his youth.',
  },
  {
    word: 'le terroir',
    speak: 'le terroir',
    ipa: '/te.ʁwaʁ/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: "la terre et ses produits, l'identité d'une région",
    defEn: 'the land and its produce; the character of a region',
    exampleFr: 'Ce vin exprime bien son terroir.',
    exampleEn: 'This wine expresses its terroir well.',
  },
  {
    word: 'la convivialité',
    speak: 'la convivialité',
    ipa: '/kɔ̃.vi.vja.li.te/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: "le plaisir d'être ensemble, la chaleur d'un repas partagé",
    defEn: 'conviviality, the warmth of being together',
    exampleFr: "Le repas s'est déroulé dans la convivialité.",
    exampleEn: 'The meal unfolded in a warm, convivial spirit.',
  },
];

/** The day of the year, 0-based (Jan 1 = 0), from the local date so the word
 *  turns over at the user's midnight, matching the app's day boundary. */
export function dayOfYear(d: Date = new Date()): number {
  const start = Date.UTC(d.getFullYear(), 0, 1);
  const today = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.floor((today - start) / 86_400_000);
}

/** Today's word — deterministic: everyone sees the same entry on a given date. */
export function wordOfDay(d: Date = new Date()): DictEntry {
  return wordsOfDay[dayOfYear(d) % wordsOfDay.length];
}
