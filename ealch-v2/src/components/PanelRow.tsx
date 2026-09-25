import type { ReactNode } from 'react';
import { View } from 'react-native';
import { TX } from './Type';
import { Press } from './ui';
import { useTheme } from '@/theme/useTheme';

// The one row shape D-06 (the seven-band level panel) and D-14 (the
// three-state language control) share, so a fourth panel later costs one
// row instead of a second near-copy. Presentational only: no store read, no
// router call. The caller decides what a press does.

export type PanelRowProps = {
  title: string;
  sub?: string;
  /** The progress read or the lock line — rendered OUTSIDE the title's own
   *  row wrapper, per the flex rule below. */
  trailing?: ReactNode;
  /** The 22px status disc from the BottomSheet.tsx row analog — also rendered
   *  outside the title's row wrapper. */
  leading?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  testID?: string;
};

export function PanelRow({
  title,
  sub,
  trailing,
  leading,
  selected,
  disabled,
  onPress,
  testID,
}: PanelRowProps) {
  const t = useTheme();
  return (
    <Press
      cue={disabled ? null : 'tap'}
      scale={0.99}
      onPress={onPress}
      testID={testID}
      accessibilityRole="button"
      // A disabled-but-mounted row keeps announcing its disabled state rather
      // than being pulled from the tree (D-22's visibility rule for the
      // trail applies here too).
      accessibilityState={{ selected: !!selected, disabled: !!disabled }}
      style={{
        // minHeight, NEVER a fixed height: this row carries text that grows
        // with the OS font scale. subMission.logic.test.ts:432-437 pins the
        // OPPOSITE rule for ReadingPages.tsx's sentence-chip strip: a fixed
        // 44px, explicitly NOT a minimum, because that strip must not grow.
        // That discipline is for a fixed chip row; it does not cross-apply to
        // a panel row whose whole job is to grow with the text it carries.
        minHeight: 44,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: selected ? t.accA(45) : t.line(9),
        backgroundColor: selected ? t.accA(7) : t.card,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        paddingHorizontal: 16,
        paddingVertical: 10,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {leading}
      {/* flex lives on the wrapper, never on a TX, or the title clips */}
      <View style={{ flex: 1, minWidth: 0 }}>
        <TX font="semi" role="body">
          {title}
        </TX>
        {sub ? (
          <TX role="label" color={t.txSubtle} style={{ marginTop: 2 }}>
            {sub}
          </TX>
        ) : null}
      </View>
      {trailing}
    </Press>
  );
}
