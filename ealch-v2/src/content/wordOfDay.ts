// Word of the day — a deterministic daily rotation over real vocabulary.
//
// The home card and the dictionary overlay used to hardcode « la flânerie » in
// two places, so it was the word of the day every day, forever. This rotates a
// real entry by the day of the year, with no backend.
//
// THE DETERMINISM CONTRACT (Phase 6b, panel note resolved): the pool is picked
// by the learner's LEVEL, and within a pool the word is picked by the DATE.
// So the word is the same for every learner at a given level on a given date —
// the old "same for everyone" claim, scoped per level, because a B1 word of
// the day is noise to an A1 beginner and « le pain » is noise to a B1 reader.
// The original eight literary words survive as the top-band (b1) pool.

export type DictLevel = 'a1' | 'a2' | 'b1';

export type DictEntry = {
  /** Which pool this entry rotates in. */
  level: DictLevel;
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

// ── A1: the everyday world, article attached ─────────────────────────────────

const A1_WORDS: DictEntry[] = [
  {
    level: 'a1',
    word: 'le pain',
    speak: 'le pain',
    ipa: '/pɛ̃/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: "l'aliment de base, cuit au four",
    defEn: 'bread',
    exampleFr: 'Je vais chercher le pain tous les matins.',
    exampleEn: 'I pick up the bread every morning.',
  },
  {
    level: 'a1',
    word: 'la gare',
    speak: 'la gare',
    ipa: '/ɡaʁ/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: 'le lieu où les trains partent et arrivent',
    defEn: 'the train station',
    exampleFr: 'On se retrouve devant la gare.',
    exampleEn: 'We are meeting in front of the station.',
  },
  {
    level: 'a1',
    word: 'le marché',
    speak: 'le marché',
    ipa: '/maʁ.ʃe/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: 'le lieu où on achète fruits, légumes et produits frais',
    defEn: 'the market',
    exampleFr: 'Le marché a lieu le samedi matin.',
    exampleEn: 'The market is on Saturday mornings.',
  },
  {
    level: 'a1',
    word: 'la pluie',
    speak: 'la pluie',
    ipa: '/plɥi/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: "l'eau qui tombe du ciel",
    defEn: 'rain',
    exampleFr: 'La pluie a cessé vers midi.',
    exampleEn: 'The rain stopped around noon.',
  },
  {
    level: 'a1',
    word: 'le petit-déjeuner',
    speak: 'le petit-déjeuner',
    ipa: '/pə.ti de.ʒø.ne/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: 'le repas du matin',
    defEn: 'breakfast',
    exampleFr: 'Je prends mon petit-déjeuner à sept heures.',
    exampleEn: 'I have breakfast at seven.',
  },
  {
    level: 'a1',
    word: 'la clé',
    speak: 'la clé',
    ipa: '/kle/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: "l'objet qui ouvre une porte",
    defEn: 'the key',
    exampleFr: "J'ai laissé la clé sur la table.",
    exampleEn: 'I left the key on the table.',
  },
  {
    level: 'a1',
    word: 'le quartier',
    speak: 'le quartier',
    ipa: '/kaʁ.tje/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: "une partie d'une ville",
    defEn: 'neighbourhood, part of town',
    exampleFr: 'Ce quartier est très calme le soir.',
    exampleEn: 'This neighbourhood is very quiet at night.',
  },
  {
    level: 'a1',
    word: 'la fenêtre',
    speak: 'la fenêtre',
    ipa: '/fə.nɛtʁ/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: "l'ouverture qui laisse entrer la lumière",
    defEn: 'the window',
    exampleFr: 'Ouvre la fenêtre, il fait chaud.',
    exampleEn: 'Open the window, it is warm.',
  },
];

// ── A2: daily life with a little more grain ──────────────────────────────────

const A2_WORDS: DictEntry[] = [
  {
    level: 'a2',
    word: 'le rendez-vous',
    speak: 'le rendez-vous',
    ipa: '/ʁɑ̃.de.vu/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: 'un moment convenu pour se rencontrer',
    defEn: 'appointment, arranged meeting',
    exampleFr: "J'ai un rendez-vous chez le médecin à trois heures.",
    exampleEn: "I have a doctor's appointment at three.",
  },
  {
    level: 'a2',
    word: 'la météo',
    speak: 'la météo',
    ipa: '/me.te.o/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: 'les prévisions du temps',
    defEn: 'the weather forecast',
    exampleFr: 'La météo annonce du soleil pour demain.',
    exampleEn: 'The forecast says sun for tomorrow.',
  },
  {
    level: 'a2',
    word: "l'habitude",
    speak: 'habitude',
    ipa: '/a.bi.tyd/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: "ce que l'on fait régulièrement, sans y penser",
    defEn: 'a habit, what one usually does',
    exampleFr: "J'ai l'habitude de marcher après le dîner.",
    exampleEn: 'I usually take a walk after dinner.',
  },
  {
    level: 'a2',
    word: 'le covoiturage',
    speak: 'le covoiturage',
    ipa: '/ko.vwa.ty.ʁaʒ/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: 'partager une voiture pour un trajet',
    defEn: 'carpooling, sharing a ride',
    exampleFr: 'Le covoiturage rend les trajets moins chers.',
    exampleEn: 'Carpooling makes trips cheaper.',
  },
  {
    level: 'a2',
    word: 'la randonnée',
    speak: 'la randonnée',
    ipa: '/ʁɑ̃.dɔ.ne/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: 'une longue marche dans la nature',
    defEn: 'a hike',
    exampleFr: 'On part en randonnée dimanche matin.',
    exampleEn: 'We are going hiking on Sunday morning.',
  },
  {
    level: 'a2',
    word: 'le lendemain',
    speak: 'le lendemain',
    ipa: '/lɑ̃d.mɛ̃/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: 'le jour qui suit',
    defEn: 'the next day, the day after',
    exampleFr: 'Le lendemain, il faisait déjà beau.',
    exampleEn: 'The next day, the weather was already fine.',
  },
  {
    level: 'a2',
    word: 'la circulation',
    speak: 'la circulation',
    ipa: '/siʁ.ky.la.sjɔ̃/',
    posFr: 'nom féminin',
    posEn: 'feminine noun',
    defFr: 'le mouvement des voitures en ville',
    defEn: 'traffic',
    exampleFr: 'La circulation est dense à huit heures.',
    exampleEn: 'Traffic is heavy at eight.',
  },
  {
    level: 'a2',
    word: 'le bricolage',
    speak: 'le bricolage',
    ipa: '/bʁi.kɔ.laʒ/',
    posFr: 'nom masculin',
    posEn: 'masculine noun',
    defFr: 'réparer ou fabriquer soi-même',
    defEn: 'DIY, fixing things yourself',
    exampleFr: 'Il passe son dimanche au bricolage.',
    exampleEn: 'He spends his Sunday doing DIY.',
  },
];

// ── B1: the original literary eight, now honestly labelled ───────────────────

const B1_WORDS: DictEntry[] = [
  {
    level: 'b1',
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
    level: 'b1',
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
    level: 'b1',
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
    level: 'b1',
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
    level: 'b1',
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
    level: 'b1',
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
    level: 'b1',
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
    level: 'b1',
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

/** Every entry, all pools — kept exported for browse surfaces and tests. */
export const wordsOfDay: DictEntry[] = [...A1_WORDS, ...A2_WORDS, ...B1_WORDS];

/** The pool for a learner's STORE level ('A0', 'A1', 'B1'... — the useStore
 *  string). A0/unknown reads the a1 pool (a beginner's word of the day is a
 *  beginner's word); A2 reads a2; everything above reads the literary b1 pool. */
export function poolForLevel(storeLevel: string): DictEntry[] {
  const lv = storeLevel.toLowerCase();
  if (lv === 'a2') return A2_WORDS;
  if (lv === 'b1' || lv === 'b2' || lv === 'c1' || lv === 'c2') return B1_WORDS;
  return A1_WORDS;
}

/** The day of the year, 0-based (Jan 1 = 0), from the local date so the word
 *  turns over at the user's midnight, matching the app's day boundary. */
export function dayOfYear(d: Date = new Date()): number {
  const start = Date.UTC(d.getFullYear(), 0, 1);
  const today = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.floor((today - start) / 86_400_000);
}

/** Today's word for a learner at `storeLevel` — deterministic: the same entry
 *  for every learner at that level on a given date. No level (old call sites,
 *  fresh installs) reads the a1 pool. */
export function wordOfDay(storeLevel: string = '', d: Date = new Date()): DictEntry {
  const pool = poolForLevel(storeLevel);
  return pool[dayOfYear(d) % pool.length];
}
