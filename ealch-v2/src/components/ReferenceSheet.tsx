// Reference sheets — Lesson Architecture v2, section 12.
//
// The pressure valve. Everything deliberately pulled out of the flow has to
// live somewhere findable, or it creeps back in and the flow gets crowded
// again. For sons.06 that is roughly forty screens of material: the full
// 16-row ending table, the H word lists, the historical explanation and the
// notation key.
//
// Sheets are layer 'deep', scrollable, and are the ONE place in the product
// where tables and density are fine, because the learner arrives with a
// specific question rather than being walked through. The density validator
// exempts them for exactly that reason.
//
// Reachable from a persistent header link on any screen of the lesson, so the
// answer to "wait, what was the rule for -c again" is always one tap away.

import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { SilentLetterGrid } from '@/components/SilentCards';
import { useTheme } from '@/theme/useTheme';
import { sound } from '@/services';
import type { LessonSection, ReferenceSheet as Sheet } from '@/content/schema';

import type { PlayFn } from '@/components/LessonDeck';

/** The header button that opens the sheet index. Persistent: it sits on every
 *  screen of a lesson that declares sheets. */
export function SheetLink({ onPress, count }: { onPress: () => void; count: number }) {
  const t = useTheme();
  if (!count) return null;
  return (
    <Press
      cue={null}
      onPress={() => { sound.play('tap'); onPress(); }}
      accessibilityRole="button"
      accessibilityLabel={`Reference sheets, ${count} available`}
      // 32px is the visual size the header needs; hitSlop takes the TOUCH
      // target to 48 without changing the layout.
      hitSlop={8}
      style={{
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(14),
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name="book" size={15} color={t.txSecondary} />
    </Press>
  );
}

/** The index: which sheets this lesson ships, and what each holds. */
export function SheetIndex({
  sheets,
  onOpen,
  onClose,
}: {
  sheets: Sheet[];
  onOpen: (id: string) => void;
  onClose: () => void;
}) {
  const t = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <SheetHeader title="Reference" onBack={onClose} />
      <ScrollView contentContainerStyle={{ padding: 24, gap: 12 }}>
        {sheets.map((s) => (
          <Press
            key={s.id}
            cue="tap"
            onPress={() => onOpen(s.id)}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: t.line(10),
              backgroundColor: t.card,
              padding: 16,
              gap: 8,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <TX role="title" font="semi" style={{ flex: 1 }}>{s.title}</TX>
              <Icon name="chevronRight" size={16} color={t.txNonText} />
            </View>
            {s.contains?.length ? (
              <TX role="bodySm" color={t.txMuted}>{s.contains.join(' · ')}</TX>
            ) : null}
          </Press>
        ))}
      </ScrollView>
    </View>
  );
}

/** One sheet, rendered.
 *
 *  Scrollable, dense, and table-friendly. This deliberately does NOT reuse the
 *  lesson pager: a sheet is a document to scan, not a sequence to walk, and
 *  paginating a lookup table would make it useless for the one job it has. */
export function ReferenceSheetView({
  sheet,
  onBack,
  onPlay,
  playingId,
}: {
  sheet: Sheet;
  onBack: () => void;
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  const t = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <SheetHeader title={sheet.title} onBack={onBack} />
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 48, gap: 24 }}>
        {(sheet.sections ?? []).map((s, i) => (
          <SheetSection key={(s as { id?: string }).id ?? i} section={s} onPlay={onPlay} playingId={playingId} />
        ))}
      </ScrollView>
    </View>
  );
}

function SheetHeader({ title, onBack }: { title: string; onBack: () => void }) {
  const t = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: t.line(8),
      }}
    >
      <Press
        cue={null}
        onPress={onBack}
        accessibilityRole="button"
        accessibilityLabel="Back"
        hitSlop={8}
        style={{ width: 32, height: 32, alignItems: 'center', justifyContent: 'center' }}
      >
        <Icon name="arrowLeft" size={18} color={t.txSecondary} />
      </Press>
      <TX role="titleSm" font="semi" style={{ flex: 1 }} numberOfLines={1}>{title}</TX>
    </View>
  );
}

/** The section types a sheet can hold. Sheets carry reference material, so
 *  this is deliberately a small set: prose, tables and the full letter grid.
 *  Anything interactive belongs in the flow, where progress is tracked. */
function SheetSection({
  section,
  onPlay,
  playingId,
}: {
  section: LessonSection;
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  const t = useTheme();

  switch (section.type) {
    case 'teach':
      return (
        <View style={{ gap: 8 }}>
          <TX role="title" font="semi">{section.title}</TX>
          <TX role="body" color={t.txSecondary} style={{ lineHeight: 24 }}>{section.body}</TX>
        </View>
      );

    case 'letterGrid':
      return (
        <View style={{ gap: 12 }}>
          <TX role="title" font="semi">{section.title}</TX>
          <SilentLetterGrid letters={section.letters} mode="full" onPlay={onPlay} playingId={playingId} />
        </View>
      );

    case 'table':
      return (
        <View style={{ gap: 10 }}>
          <TX role="title" font="semi">{section.title}</TX>
          <SheetTable cols={section.cols} rows={section.rows} />
        </View>
      );

    default:
      // A section type with no sheet rendering shows its title rather than
      // vanishing, so a mis-authored sheet is visible instead of silently thin.
      return <TX role="title" font="semi">{section.title}</TX>;
  }
}

/** A real table. Horizontally scrollable so a wide row never squashes its
 *  cells into unreadable columns on a phone. */
function SheetTable({ cols, rows }: { cols: string[]; rows: string[][] }) {
  const t = useTheme();
  const width = Math.max(110, Math.round(320 / Math.max(1, cols.length)));
  return (
    // A wide table inside the sheet's vertical scroller: both guards are
    // required or the horizontal drag swallows the page's vertical one.
    <ScrollView horizontal nestedScrollEnabled directionalLockEnabled showsHorizontalScrollIndicator={false}>
      <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(10), overflow: 'hidden' }}>
        <View style={{ flexDirection: 'row', backgroundColor: t.card2 }}>
          {cols.map((c, i) => (
            <View key={i} style={{ minWidth: width, paddingHorizontal: 12, paddingVertical: 10 }}>
              <TX role="meta" font="med" color={t.txMuted} ls={0.5} style={{ textTransform: 'uppercase' }}>{c}</TX>
            </View>
          ))}
        </View>
        {rows.map((r, ri) => (
          <View
            key={ri}
            style={{
              flexDirection: 'row',
              backgroundColor: t.card,
              borderTopWidth: 1,
              borderTopColor: t.line(7),
            }}
          >
            {r.map((cell, ci) => (
              <View key={ci} style={{ minWidth: width, paddingHorizontal: 12, paddingVertical: 11 }}>
                <TX role="bodySm" font={ci === 0 ? 'med' : 'sans'} color={ci === 0 ? t.txPrimary : t.txSecondary}>
                  {cell}
                </TX>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

/** The whole sheet surface as one component: index, drill-down and back.
 *  A lesson screen renders this behind a flag and passes its own sheets. */
export function SheetSurface({
  sheets,
  initialSheetId,
  onClose,
  onPlay,
  playingId,
}: {
  sheets: Sheet[];
  /** Opens straight into one sheet, for a section's "see all" link. */
  initialSheetId?: string;
  onClose: () => void;
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  const [openId, setOpenId] = useState<string | null>(initialSheetId ?? null);
  const sheet = openId ? sheets.find((s) => s.id === openId) : null;

  if (sheet) {
    return (
      <ReferenceSheetView
        sheet={sheet}
        onBack={() => (initialSheetId ? onClose() : setOpenId(null))}
        onPlay={onPlay}
        playingId={playingId}
      />
    );
  }
  return <SheetIndex sheets={sheets} onOpen={setOpenId} onClose={onClose} />;
}
