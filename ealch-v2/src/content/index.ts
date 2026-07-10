// Seed learning content ported 1:1 from the Ealch v2 prototype.
// In production this is served by the remote CMS (ContentService); these
// values are the offline fallback / dev seed.

export type Card = { fr: string; en: string; ex: string };

export const deck: Card[] = [
  { fr: 'Bonjour', en: 'Hello / Good day', ex: '« Bonjour, madame ! »' },
  { fr: 'Merci beaucoup', en: 'Thank you very much', ex: '« Merci beaucoup, à bientôt. »' },
  { fr: 'Je voudrais…', en: 'I would like…', ex: '« Je voudrais un café. »' },
  { fr: "L'addition, s'il vous plaît", en: 'The bill, please', ex: 'Said once — never wave.' },
  { fr: 'Sur place ou à emporter ?', en: 'For here or to go?', ex: 'You will be asked this daily.' },
  { fr: "Une carafe d'eau", en: 'A jug of tap water', ex: 'Free, if you ask for it.' },
  { fr: 'Combien ça coûte ?', en: 'How much is it?', ex: '« Ça coûte combien ? » works too.' },
  { fr: 'À bientôt !', en: 'See you soon!', ex: 'The polite exit.' },
];

export type LangOption = { id: string; ch: string; name: string };

export const langs: LangOption[] = [
  { id: 'en', ch: 'EN', name: 'English' },
  { id: 'fr', ch: 'FR', name: 'Français' },
  { id: 'es', ch: 'ES', name: 'Español' },
  { id: 'zh', ch: '中', name: '中文' },
  { id: 'pt', ch: 'PT', name: 'Português' },
  { id: 'ar', ch: 'ع', name: 'العربية' },
  { id: 'ja', ch: '日', name: '日本語' },
];

export type VfIcon = 'cup' | 'house' | 'book' | 'sun' | 'car';
export type VfItem = { icon: VfIcon; fr: string; en: string; key: string; keyEn: string };

export const vfItems: VfItem[] = [
  { icon: 'cup', fr: 'un café', en: 'a coffee', key: 'café', keyEn: 'coffee' },
  { icon: 'house', fr: 'une maison', en: 'a house', key: 'maison', keyEn: 'house' },
  { icon: 'book', fr: 'un livre', en: 'a book', key: 'livre', keyEn: 'book' },
  { icon: 'sun', fr: 'le soleil', en: 'the sun', key: 'soleil', keyEn: 'sun' },
  { icon: 'car', fr: 'une voiture', en: 'a car', key: 'voiture', keyEn: 'car' },
];

export type SbWord = { w: string; t: string };
export const sbWords: SbWord[] = [
  { w: 'Je', t: 'I' },
  { w: 'voudrais', t: 'would like' },
  { w: 'un', t: 'a' },
  { w: 'café', t: 'coffee' },
  { w: "s'il vous plaît", t: 'please' },
];
export const sbShuffle = [3, 0, 4, 1, 2];
export const sbTarget = sbWords.map((w) => w.w).join(' ');

export type RpLine = { ai: string; en: string; user: string };
export type RpLevel = 'A1' | 'A2' | 'B1' | 'B2';

export const rpLines: Record<RpLevel, RpLine[]> = {
  A1: [
    { ai: 'Bonjour ! Vous désirez ?', en: 'Hello! What would you like?', user: "Trois pommes, s'il vous plaît." },
    { ai: 'Voilà. Autre chose ?', en: 'Here you go. Anything else?', user: "Non, merci. C'est combien ?" },
    { ai: 'Deux euros cinquante.', en: 'Two euros fifty.', user: 'Voilà. Merci, au revoir !' },
  ],
  A2: [
    { ai: "Bonjour ! Les fraises sont en promotion aujourd'hui.", en: 'The strawberries are on sale today.', user: "Elles viennent d'où, vos fraises ?" },
    { ai: 'De Bretagne — cueillies ce matin. Une barquette ?', en: 'From Brittany — picked this morning.', user: "J'en prends deux, et un kilo de tomates." },
    { ai: 'Et avec ceci ? Ça vous fait neuf euros vingt.', en: "Anything else? That's €9.20.", user: "C'est tout. Tenez, dix euros." },
  ],
  B1: [
    { ai: "Bonjour ! Alors, qu'est-ce qui vous ferait plaisir aujourd'hui ?", en: 'What would make you happy today?', user: "Je cherche quelque chose pour une tarte — qu'est-ce que vous me conseillez ?" },
    { ai: 'Les abricots sont parfaits en ce moment — sucrés, bien mûrs.', en: 'The apricots are perfect right now.', user: 'Ils tiennent à la cuisson ? La dernière fois, tout était en purée.' },
    { ai: 'Prenez-les un peu fermes, alors. Un kilo, ça suffira largement.', en: 'Take them slightly firm, then.', user: 'Va pour un kilo. Et mettez-moi aussi du basilic.' },
  ],
  B2: [
    { ai: "Tiens, vous revoilà ! Vous m'aviez dit que mes pêches étaient fades la semaine dernière…", en: 'You said my peaches were bland last week…', user: 'Fades, peut-être pas — disons quʼelles manquaient de caractère.' },
    { ai: 'De caractère ! Elles avaient poussé sous la pluie, que voulez-vous. Celles-ci, cʼest autre chose.', en: 'They grew in the rain, what can you do.', user: 'Vous dites ça à chaque fois. Si elles me déçoivent, je reviens négocier.' },
    { ai: 'Si elles vous déçoivent, je vous les rembourse — parole de maraîcher.', en: "If they disappoint you, I'll refund you.", user: 'Marché conclu. Deux kilos, et le fromage de chèvre que vous cachez derrière.' },
  ],
};

export const coachLines = [
  { fr: "Bonjour ! Bienvenue au Café des Arts. Qu'est-ce que je vous sers ?", en: 'Welcome to Café des Arts. What can I get you?' },
  { fr: 'Très bien. Sur place ou à emporter ?', en: 'Very good. For here or to go?' },
  { fr: 'Parfait. Ça fera quatre euros soixante.', en: 'Perfect — that will be €4.60.' },
];

// Coach "Why?" fallback replies (used when the LLM port is offline).
export const cannedReplies = [
  "« Je voudrais » is the conditional of vouloir — it softens the request. « Je veux » sounds like a demand; waiters notice. Try: « Je voudrais l'addition, s'il vous plaît. »",
  "A liaison links a silent final consonant to the vowel that follows: un‿allongé sounds like « un-nallongé ». It's obligatoire after un, les, vous, ils.",
  'Tomorrow: six minutes. One nasal-vowel drill, then we rehearse the bank scenario — you’ll need it Thursday.',
];

export const speeds = [
  { label: '1×', v: 1 },
  { label: '0.75×', v: 0.75 },
  { label: '1.25×', v: 1.25 },
];

export type ThemeColor = { c: string; n: string };
export const themeColors: ThemeColor[] = [
  { c: '#2FD6C1', n: 'Riviera' },
  { c: '#FF6B5C', n: 'Corail' },
  { c: '#D9B36C', n: 'Champagne' },
  { c: '#8FA7FF', n: 'Nuit' },
];
