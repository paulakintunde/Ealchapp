// Display metadata for domain slugs — the flashcard hub's 12 category cards.
// The corpus `domains` catalogue is the source of truth for WHICH domains
// exist and in what order (OTA-updatable); this map is presentation only:
// bilingual titles, a one-line scene description, the card's glow family and
// its icon. Same contract as themeMeta.ts: when a snapshot ships a domain
// this map does not know, fallbackDomainMeta renders it honestly (slug as
// title, neutral colors) instead of crashing the hub.

import type { IconName } from '@/components/Icon';

export type DomainMeta = {
  fr: string;
  en: string;
  subFr: string;
  subEn: string;
  /** Dark-mode tile ground; light mode falls back to the theme card color. */
  base: string;
  /** Gradient glow, literal rgba like the home tiles. */
  glow: string;
  /** Icon disc fill. */
  disc: string;
  /** Icon stroke/fill color. */
  ink: string;
  icon: IconName;
};

const gold = (a: number) => `rgba(214,160,96,${a})`;
const blue = (a: number) => `rgba(96,126,160,${a})`;
const purple = (a: number) => `rgba(139,116,190,${a})`;
const green = (a: number) => `rgba(110,160,118,${a})`;

export const DOMAIN_META: Record<string, DomainMeta> = {
  fondations: {
    fr: 'Les fondations',
    en: 'Foundations',
    subFr: 'Nombres, couleurs, jours, mots essentiels.',
    subEn: 'Numbers, colors, days, essential words.',
    base: '#1A140E', glow: gold(0.28), disc: gold(0.15), ink: gold(1), icon: 'flame',
  },
  'vie-quotidienne': {
    fr: 'La vie quotidienne',
    en: 'Daily life',
    subFr: 'Maison, routines, cuisine, vêtements, courses.',
    subEn: 'Home, routines, food, clothing, shopping.',
    base: '#16110B', glow: gold(0.26), disc: gold(0.14), ink: gold(1), icon: 'house',
  },
  relations: {
    fr: 'Les gens et les relations',
    en: 'People and relationships',
    subFr: 'Famille, amis, collègues, communauté.',
    subEn: 'Family, friends, colleagues, community.',
    base: '#0D0B12', glow: purple(0.26), disc: purple(0.15), ink: purple(1), icon: 'user',
  },
  sante: {
    fr: 'La santé et le corps',
    en: 'Health and body',
    subFr: 'Anatomie, symptômes, soins, bien-être.',
    subEn: 'Anatomy, symptoms, healthcare, wellbeing.',
    base: '#0E1410', glow: green(0.24), disc: green(0.15), ink: green(1), icon: 'heart',
  },
  travail: {
    fr: 'Le travail et les métiers',
    en: 'Work and professions',
    subFr: 'Métiers, vocabulaire du bureau, affaires.',
    subEn: 'Job titles, workplace vocabulary, business.',
    base: '#0E1116', glow: blue(0.28), disc: blue(0.16), ink: blue(1), icon: 'gear',
  },
  voyage: {
    fr: 'Les voyages et les transports',
    en: 'Travel and transport',
    subFr: 'Se déplacer, tourisme, hébergement.',
    subEn: 'Getting around, tourism, accommodation.',
    base: '#16110B', glow: gold(0.24), disc: gold(0.14), ink: gold(1), icon: 'car',
  },
  nature: {
    fr: "La nature et l'environnement",
    en: 'Nature and environment',
    subFr: 'Météo, paysages, écologie, animaux.',
    subEn: 'Weather, landscape, ecology, animals.',
    base: '#0E1410', glow: green(0.26), disc: green(0.15), ink: green(1), icon: 'sun',
  },
  education: {
    fr: "L'éducation et les études",
    en: 'Education and learning',
    subFr: 'École, université, matières, recherche.',
    subEn: 'School, university, subjects, research.',
    base: '#0D0B12', glow: purple(0.24), disc: purple(0.15), ink: purple(1), icon: 'book',
  },
  technologie: {
    fr: 'La technologie et les médias',
    en: 'Technology and media',
    subFr: 'Internet, réseaux sociaux, appareils, presse.',
    subEn: 'Internet, social media, devices, journalism.',
    base: '#0E1116', glow: blue(0.26), disc: blue(0.16), ink: blue(1), icon: 'wifi',
  },
  culture: {
    fr: 'Les arts et la culture',
    en: 'Arts and culture',
    subFr: 'Musique, cinéma, littérature, musées, traditions.',
    subEn: 'Music, film, literature, museums, traditions.',
    base: '#16110B', glow: gold(0.26), disc: gold(0.14), ink: gold(1), icon: 'star',
  },
  societe: {
    fr: 'La société et la politique',
    en: 'Society and politics',
    subFr: 'Gouvernement, économie, questions sociales, droit.',
    subEn: 'Government, economy, social issues, law.',
    base: '#0E1116', glow: blue(0.24), disc: blue(0.16), ink: blue(1), icon: 'globe',
  },
  sciences: {
    fr: 'Les sciences et la médecine',
    en: 'Science and medicine',
    subFr: 'Méthode scientifique, disciplines, découvertes.',
    subEn: 'Scientific method, fields, discoveries.',
    base: '#0D0B12', glow: purple(0.26), disc: purple(0.15), ink: purple(1), icon: 'eye',
  },
  concepts: {
    fr: 'Les idées abstraites',
    en: 'Abstract concepts',
    subFr: 'Émotions, éthique, philosophie, valeurs.',
    subEn: 'Emotions, ethics, philosophy, values.',
    base: '#0E1410', glow: green(0.24), disc: green(0.15), ink: green(1), icon: 'moon',
  },
};

/** Meta for any slug: the authored entry, or an honest neutral fallback so an
 *  OTA-added domain still renders (slug as title, no invented blurb). */
DOMAIN_META.argot = {
  fr: "L'argot",
  en: 'Street French',
  subFr: 'Verlan, argot des jeunes, expressions familières.',
  subEn: 'Verlan, youth slang, everyday street talk.',
  base: '#100D14', glow: purple(0.28), disc: purple(0.16), ink: purple(1), icon: 'speaker',
};

export function domainMeta(slug: string): DomainMeta {
  const m = DOMAIN_META[slug];
  if (m) return m;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  return {
    fr: title, en: title, subFr: '', subEn: '',
    base: '#12100C', glow: gold(0.18), disc: gold(0.12), ink: gold(1), icon: 'card',
  };
}
