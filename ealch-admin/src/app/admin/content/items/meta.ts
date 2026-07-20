// Items slice — shared display metadata and value lists, derived from the
// live Drizzle enums (never hand-typed) so a schema change is a compile
// error here, not a silent drift. Same "exhaustive by construction" pattern
// as ../meta.ts's KIND_META.
import type { CSSProperties } from 'react';
// TYPE-ONLY import — safe from a client component, no drizzle in the bundle.
import type {
  contentLevel, contentStatus, drillKind, examSkill, itemGender, itemKind, modality, register,
} from '@/db/schema';

export type ItemLevel = (typeof contentLevel)['enumValues'][number];
export type ItemStatus = (typeof contentStatus)['enumValues'][number];
export type ItemKind = (typeof itemKind)['enumValues'][number];
export type ItemGender = (typeof itemGender)['enumValues'][number];
export type ItemDrillKind = (typeof drillKind)['enumValues'][number];
export type ItemExamSkill = (typeof examSkill)['enumValues'][number];
export type ItemRegister = (typeof register)['enumValues'][number];
export type ItemModality = (typeof modality)['enumValues'][number];

// 'sons' first: it is the pronunciation track, and it precedes A1. c2 stays
// in the list here (content_level's DB-only asymmetry — see enum-parity.test.ts
// in ealch-v2) but the item form warns rather than blocks, since an author
// picking c2 for an item is very likely a mistake, not a deliberate exam-only
// row (items don't have the exam-band escape hatch ExamTask does).
export const ITEM_LEVELS: ItemLevel[] = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
export const ITEM_STATUSES: ItemStatus[] = ['draft', 'in_review', 'published', 'archived'];
export const ITEM_KINDS: ItemKind[] = ['word', 'phrase', 'sentence'];
export const ITEM_GENDERS: ItemGender[] = ['m', 'f'];
// Append-only — these ship inside cached OTA snapshots (ealch-v2 schema.ts's
// own rule). Order here is authoring/display order, not significant otherwise.
export const ITEM_DRILL_KINDS: ItemDrillKind[] = [
  'flashcard', 'voiceflash', 'dictation', 'sentence', 'roleplay', 'review', 'playlist', 'exam',
];
export const ITEM_EXAM_SKILLS: ItemExamSkill[] = ['CO', 'CE', 'PO', 'PE'];
export const ITEM_REGISTERS: ItemRegister[] = ['familier', 'courant', 'soutenu'];
export const ITEM_MODALITIES: ItemModality[] = ['recognise', 'produce', 'discriminate'];

export const ITEM_STATUS_META: Record<ItemStatus, { label: string; color: string }> = {
  draft: { label: 'Draft', color: 'var(--mut)' },
  in_review: { label: 'In review', color: 'var(--warn)' },
  published: { label: 'Published', color: 'var(--ok)' },
  archived: { label: 'Archived', color: 'var(--mut)' },
};

export const ITEM_KIND_LABEL: Record<ItemKind, string> = {
  word: 'Word',
  phrase: 'Phrase',
  sentence: 'Sentence',
};

export const ITEM_DRILL_LABEL: Record<ItemDrillKind, string> = {
  flashcard: 'Flashcard',
  voiceflash: 'Voice Flash',
  dictation: 'La Dictée',
  sentence: 'Sentence Builder',
  roleplay: 'Role Play',
  review: 'Smart Review',
  playlist: 'Playlist',
  exam: 'Examiner',
};

/** id must match fr.<level>.<theme>.<seq3+> — mirrors ITEM_ID_RE in
 *  ealch-v2/src/content/schema.ts. Duplicated deliberately, the same way
 *  ../meta.ts duplicates KINDS/STATUSES/LEVELS rather than importing the app
 *  schema into the Next.js bundle: this file stays safe to import from a
 *  client component. */
export function itemId(level: ItemLevel, theme: string, seq: number): string {
  return `fr.${level}.${theme}.${String(seq).padStart(3, '0')}`;
}

const ITEM_ID_RE = /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/;

export function isValidItemId(id: string): boolean {
  return ITEM_ID_RE.test(id);
}

const THEME_RE = /^[a-z0-9-]+$/;
export function isValidTheme(theme: string): boolean {
  return THEME_RE.test(theme);
}

export function isItemLevel(v: string | undefined): v is ItemLevel {
  return !!v && (ITEM_LEVELS as string[]).includes(v);
}
export function isItemStatus(v: string | undefined): v is ItemStatus {
  return !!v && (ITEM_STATUSES as string[]).includes(v);
}
export function isItemKind(v: string | undefined): v is ItemKind {
  return !!v && (ITEM_KINDS as string[]).includes(v);
}
export function isItemDrillKind(v: string | undefined): v is ItemDrillKind {
  return !!v && (ITEM_DRILL_KINDS as string[]).includes(v);
}

/** Chip tint style shared with ../meta.ts's chipStyle — duplicated (one
 *  three-line function) rather than imported, to keep this module free of
 *  any dependency on the parent content slice. */
export function chipStyle(color: string): CSSProperties {
  return {
    background: `color-mix(in srgb, ${color} 12%, transparent)`,
    color,
  };
}
