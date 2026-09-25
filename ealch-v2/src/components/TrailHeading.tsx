import { View } from 'react-native';
import { TX } from './Type';
import { Press } from './ui';
import { Icon } from './Icon';
import { useTheme } from '@/theme/useTheme';
import type { TrailRow as TrailRowData } from '@/content/trail.logic';

// The unit heading (D-02, D-08): the Fiche chip and the completion seal
// (R-UnitDone — a permanent seal on the heading, so the record outlives the
// toast). D-08's one-line heading is speakmap.tsx's WorldSection block minus
// its meaning line: `label` arrives pre-resolved from trail.logic.ts
// (headingLabel), so this component never re-derives which language it reads
// in — a per-screen conditional or a restated band list would be exactly the
// hidden second copy D-08's own test (trail.logic.test.ts) rules out.

type HeadingRow = Extract<TrailRowData, { kind: 'heading' }>;

export type TrailHeadingProps = {
  row: HeadingRow;
  onPressFiche: (lessonId: string) => void;
};

export function TrailHeading({ row, onPressFiche }: TrailHeadingProps) {
  const t = useTheme();
  return (
    <View
      style={{
        marginTop: 26,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      {/* flex lives on the wrapper, never on a TX, or the title clips */}
      <View style={{ flex: 1, minWidth: 0 }}>
        <TX font="serifI" role="display" size={23}>
          {row.label}
        </TX>
      </View>
      {row.sealed ? <Icon name="check" size={16} color={t.acc} strokeWidth={2.2} /> : null}
      {row.locked ? <Icon name="lock" size={14} color={t.txNonText} strokeWidth={1.8} /> : null}
      <Press
        onPress={() => onPressFiche(row.ficheLessonId)}
        accessibilityRole="button"
        accessibilityState={{ disabled: !row.ficheLessonId }}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        style={{ minHeight: 34, minWidth: 34, alignItems: 'center', justifyContent: 'center' }}
      >
        <Icon name="book" size={17} color={t.txNonText} />
      </Press>
    </View>
  );
}
