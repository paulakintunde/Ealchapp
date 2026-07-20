// Content slice — shared display metadata for kind/status chips and the
// level/locale option lists. Plain module: safe to import from server or
// client components.
// NOTE: the kind chip hexes (#4A6CF7 drill / #7C4A9E dictation / #A5642A
// curriculum) are mandated by the screen spec, mirroring the mock's typeSt map.

import type { CSSProperties } from 'react';
// TYPE-ONLY import: fully erased at build time, so this module stays safe to
// import from a client component and no drizzle code reaches the browser bundle.
//
// These used to be hand-written string unions duplicating the DB enums, and they
// silently drifted the moment content_kind gained 'lesson' and 'vocabulary' —
// the KIND_META Record below is what caught it. Deriving them from the schema
// means the next enum change is a compile error, not a runtime `undefined` chip.
import type { contentKind, contentLevel, contentStatus, userLocale } from '@/db/schema';

export type ContentKind = (typeof contentKind)['enumValues'][number];
export type ContentStatus = (typeof contentStatus)['enumValues'][number];
export type ContentLevel = (typeof contentLevel)['enumValues'][number];
export type ContentLocale = (typeof userLocale)['enumValues'][number];

export const KINDS: ContentKind[] = [
  'scenario', 'drill', 'dictation', 'curriculum_unit', 'lesson', 'vocabulary', 'playlist', 'template',
];
export const STATUSES: ContentStatus[] = ['draft', 'in_review', 'published', 'archived'];
// 'sons' first: it is the pronunciation track, and it precedes A1.
export const LEVELS: ContentLevel[] = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
export const LOCALES: ContentLocale[] = ['en', 'fr'];

// Exhaustive by construction: Record<ContentKind, …> fails to compile the moment
// the DB enum gains a value this map does not have. Leave it that way.
export const KIND_META: Record<ContentKind, { label: string; color: string }> = {
  scenario: { label: 'Scenario', color: 'var(--acc)' },
  drill: { label: 'Drill', color: '#4A6CF7' },
  dictation: { label: 'Dictation', color: '#7C4A9E' },
  curriculum_unit: { label: 'Curriculum', color: '#A5642A' },
  // A rich, sectioned lesson document.
  lesson: { label: 'Lesson', color: '#2E8B72' },
  // A themed PACK of corpus items, reviewed as one unit of work — nobody reviews
  // 8000 vocabulary rows one at a time. The rows live in content_items.
  vocabulary: { label: 'Vocab pack', color: '#B5762A' },
  // A listening set — real French lines, played straight through.
  playlist: { label: 'Playlist', color: '#3A7CA5' },
  // A reusable authoring pattern a generation job references instead of
  // reinventing its own one-off prompt and shape.
  template: { label: 'Template', color: '#8E6C3A' },
};

export const STATUS_META: Record<ContentStatus, { label: string; color: string }> = {
  draft: { label: 'Draft', color: 'var(--mut)' },
  in_review: { label: 'In review', color: 'var(--warn)' },
  published: { label: 'Published', color: 'var(--ok)' },
  archived: { label: 'Archived', color: 'var(--mut)' },
};

export function isKind(v: string | undefined): v is ContentKind {
  return !!v && (KINDS as string[]).includes(v);
}
export function isStatus(v: string | undefined): v is ContentStatus {
  return !!v && (STATUSES as string[]).includes(v);
}

/** Chip tint style shared by list + editor (small dynamic inline style). */
export function chipStyle(color: string): CSSProperties {
  return {
    background: `color-mix(in srgb, ${color} 12%, transparent)`,
    color,
  };
}
