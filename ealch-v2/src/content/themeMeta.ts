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
};

/** Meta for any slug: the authored entry, or an honest capitalized fallback so
 *  an OTA-added theme still renders (its slug as title, no invented blurb). */
export function themeMeta(slug: string): ThemeMeta {
  const m = THEME_META[slug];
  if (m) return m;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  return { fr: title, en: title, subFr: '', subEn: '' };
}
