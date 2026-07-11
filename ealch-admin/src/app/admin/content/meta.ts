// Content slice — shared display metadata for kind/status chips and the
// level/locale option lists. Plain module: safe to import from server or
// client components.
// NOTE: the kind chip hexes (#4A6CF7 drill / #7C4A9E dictation / #A5642A
// curriculum) are mandated by the screen spec, mirroring the mock's typeSt map.

import type { CSSProperties } from 'react';

export type ContentKind = 'scenario' | 'drill' | 'dictation' | 'curriculum_unit';
export type ContentStatus = 'draft' | 'in_review' | 'published' | 'archived';
export type ContentLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';
export type ContentLocale = 'en' | 'fr';

export const KINDS: ContentKind[] = ['scenario', 'drill', 'dictation', 'curriculum_unit'];
export const STATUSES: ContentStatus[] = ['draft', 'in_review', 'published', 'archived'];
export const LEVELS: ContentLevel[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
export const LOCALES: ContentLocale[] = ['en', 'fr'];

export const KIND_META: Record<ContentKind, { label: string; color: string }> = {
  scenario: { label: 'Scenario', color: 'var(--acc)' },
  drill: { label: 'Drill', color: '#4A6CF7' },
  dictation: { label: 'Dictation', color: '#7C4A9E' },
  curriculum_unit: { label: 'Curriculum', color: '#A5642A' },
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
