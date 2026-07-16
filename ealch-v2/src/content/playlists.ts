// Playlists — real listening sets, not four decorative gradients.
//
// The home cards used to be plain Views with a French noun painted on them and a
// track count ('15 tracks') that lived inside a translation string and pointed at
// nothing. These are the real thing: each track carries actual French lines that
// feed the player's TTS exactly as a corpus item does, and the count a card shows
// is `tracks.length` — a fact, not a claim. Counts are deliberately honest and
// modest; a playlist grows by adding real tracks here, never by editing a string.
//
// `glow` is stored as a literal rgba so a playlist is theme-independent, matching
// the three sibling cards that were already fixed colors.

export type PlaylistTrack = {
  /** Stable id: `<playlistId>-t<seq>`. */
  id: string;
  /** French track title, shown as the now-playing heading in the player. */
  title: string;
  /** The lines spoken in order. `fr` is what TTS says; `en` is the gloss. */
  lines: { fr: string; en: string }[];
};

export type Playlist = {
  id: string;
  /** The serif French word painted on the card (La Voix, Argot…). */
  word: string;
  /** Eyebrow tag (DEEP-DIVE, PARIS…). */
  tag: string;
  /** Card gradient, literal rgba. */
  glow: string;
  labelFr: string;
  labelEn: string;
  /** The meta topic ('nasal vowels'); the count is derived, never stored here. */
  topicFr: string;
  topicEn: string;
  tracks: PlaylistTrack[];
};

export const playlists: Playlist[] = [
  {
    id: 'la-voix',
    word: 'La Voix',
    tag: 'DEEP-DIVE',
    glow: 'rgba(214,160,96,0.28)',
    labelFr: 'Prononciation en profondeur',
    labelEn: 'Pronunciation Deep-Dives',
    topicFr: 'voyelles nasales',
    topicEn: 'nasal vowels',
    tracks: [
      {
        id: 'la-voix-t1',
        title: 'Les voyelles nasales',
        lines: [
          { fr: 'un bon vin blanc', en: 'a good white wine' },
          { fr: 'on prend le train', en: 'we take the train' },
          { fr: 'cent ans', en: 'a hundred years' },
          { fr: 'mon oncle est content', en: 'my uncle is happy' },
        ],
      },
      {
        id: 'la-voix-t2',
        title: 'La liaison obligatoire',
        lines: [
          { fr: 'les amis', en: 'the friends' },
          { fr: 'vous avez', en: 'you have' },
          { fr: 'un grand homme', en: 'a great man' },
          { fr: 'les enfants', en: 'the children' },
        ],
      },
      {
        id: 'la-voix-t3',
        title: 'Le R français',
        lines: [
          { fr: 'Paris au printemps', en: 'Paris in spring' },
          { fr: 'rue de Rivoli', en: 'Rivoli street' },
          { fr: 'un verre de rouge', en: 'a glass of red' },
          { fr: 'trois roses rouges', en: 'three red roses' },
        ],
      },
      {
        id: 'la-voix-t4',
        title: 'Accent et rythme',
        lines: [
          { fr: "s'il vous plaît", en: 'please' },
          { fr: 'merci beaucoup', en: 'thank you very much' },
          { fr: "à tout à l'heure", en: 'see you later' },
          { fr: "c'est très bien", en: "that's very good" },
        ],
      },
    ],
  },
  {
    id: 'argot',
    word: 'Argot',
    tag: 'PARIS',
    glow: 'rgba(199,106,92,0.30)',
    labelFr: 'Argot parisien décontracté',
    labelEn: 'Casual Parisian Slang',
    topicFr: 'argot parisien',
    topicEn: 'Parisian slang',
    tracks: [
      {
        id: 'argot-t1',
        title: 'Se retrouver',
        lines: [
          { fr: 'on se capte plus tard', en: "let's catch up later" },
          { fr: 'je suis grave en retard', en: "I'm super late" },
          { fr: "t'inquiète, ça marche", en: 'no worries, works for me' },
        ],
      },
      {
        id: 'argot-t2',
        title: 'Le boulot',
        lines: [
          { fr: "j'ai un taf de dingue", en: "I've got a crazy job" },
          { fr: 'je suis débordé en ce moment', en: "I'm swamped right now" },
          { fr: 'je file, à plus', en: "I'm off, later" },
        ],
      },
      {
        id: 'argot-t3',
        title: 'Au comptoir',
        lines: [
          { fr: "un p'tit café, s'il te plaît", en: 'a little coffee, please' },
          { fr: "c'est ma tournée", en: "it's my round" },
          { fr: 'on trinque ?', en: 'shall we toast?' },
        ],
      },
    ],
  },
  {
    id: 'l-argent',
    word: "L'Argent",
    tag: 'BUSINESS',
    glow: 'rgba(96,126,160,0.32)',
    labelFr: 'Le français des affaires',
    labelEn: 'French for Business',
    topicFr: 'réunions & téléphone',
    topicEn: 'meetings & calls',
    tracks: [
      {
        id: 'l-argent-t1',
        title: 'En réunion',
        lines: [
          { fr: "revenons à l'ordre du jour", en: "let's get back to the agenda" },
          { fr: 'pouvez-vous préciser ?', en: 'could you clarify?' },
          { fr: 'je vous en prie', en: 'please, go ahead' },
        ],
      },
      {
        id: 'l-argent-t2',
        title: 'Au téléphone',
        lines: [
          { fr: 'ne quittez pas', en: 'please hold' },
          { fr: 'je vous le passe', en: "I'll put you through" },
          { fr: "je vous rappelle dans l'après-midi", en: "I'll call you back this afternoon" },
        ],
      },
      {
        id: 'l-argent-t3',
        title: 'Négocier',
        lines: [
          { fr: 'quel est votre budget ?', en: "what's your budget?" },
          { fr: "c'est tout à fait envisageable", en: "that's quite feasible" },
          { fr: "nous sommes d'accord", en: "we're agreed" },
        ],
      },
    ],
  },
  {
    id: 'l-oreille',
    word: "L'Oreille",
    tag: 'IMMERSION',
    glow: 'rgba(139,116,190,0.28)',
    labelFr: 'Immersion métro',
    labelEn: 'Métro Immersion',
    topicFr: 'annonces du métro',
    topicEn: 'métro announcements',
    tracks: [
      {
        id: 'l-oreille-t1',
        title: 'Dans le métro',
        lines: [
          { fr: 'prochain arrêt : Châtelet', en: 'next stop: Châtelet' },
          { fr: 'attention à la marche', en: 'mind the gap' },
          { fr: 'correspondance avec la ligne 4', en: 'transfer to line 4' },
        ],
      },
      {
        id: 'l-oreille-t2',
        title: 'Les annonces',
        lines: [
          { fr: 'le trafic est momentanément interrompu', en: 'service is temporarily suspended' },
          { fr: 'en raison d\'un incident voyageur', en: 'due to a passenger incident' },
          { fr: 'nous vous prions de nous excuser', en: 'we apologise for the inconvenience' },
        ],
      },
    ],
  },
];

/** A playlist by id, or undefined if the id is unknown (a bad deep link). */
export function playlist(id: string): Playlist | undefined {
  return playlists.find((p) => p.id === id);
}
