import { View } from 'react-native';
import { TX } from './Type';
import { Press, Button } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';

// D-19: the two day-one cards that explain the trail's new shape once, then
// dismiss for good (src/store/dayOne.test.ts pins the partialize round trip
// that makes the dismissal survive a relaunch, not just a session). Props
// only, no store read — den.tsx (plan 08's screen) supplies every callback,
// the same contract TrailRow.tsx/TrailHeading.tsx already hold.
//
// D-19: NEITHER card carries the primary action. The start marker
// (TrailRow.tsx, D-18) is the primary affordance on a first run, so this
// file never uses the `primary` Button variant — the dismiss control is
// `ghost` (T.lkSkip, "Skip" — the same word LessonKeyIntro.tsx's own
// one-time dismiss already uses, so this is not new copy), and neither
// card's border or background is accent-tinted the way a start-marked act
// row's border (`t.acc`) or the gate/boundary cards' accent tint is. Quieter
// on purpose: a plain `t.line` border, a plain `t.card` background, body-role
// type, never a button-weight label leading the row.

export type TrailCardProps =
  | { variant: 'orientation'; onDismiss: () => void }
  | { variant: 'placement'; onOpen: () => void; onDismiss: () => void };

export function TrailCard(props: TrailCardProps) {
  const t = useTheme();
  const T = useT();

  const dismissRow = (onDismiss: () => void) => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
      <Button label={T.lkSkip} variant="ghost" cue={null} onPress={onDismiss} style={{ minHeight: 36, paddingVertical: 6, paddingHorizontal: 16 }} />
    </View>
  );

  if (props.variant === 'orientation') {
    return (
      <View
        style={{
          borderRadius: 16,
          borderWidth: 1,
          borderColor: t.line(10),
          backgroundColor: t.card,
          padding: 16,
          marginBottom: 12,
        }}
      >
        {/* flex lives on the wrapper, never on a TX, or the title clips */}
        <View style={{ minWidth: 0 }}>
          <TX font="semi" role="body">
            {T.trailOrientationTitle}
          </TX>
          <TX role="bodySm" color={t.txMuted} style={{ marginTop: 4 }}>
            {T.trailOrientationBody}
          </TX>
        </View>
        {dismissRow(props.onDismiss)}
      </View>
    );
  }

  return (
    <View
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(10),
        backgroundColor: t.card,
        padding: 14,
        marginBottom: 12,
      }}
    >
      {/* The whole content area is the "control that pushes the existing
          placement route" (D-20) — the same tappable-row idiom TrailRow.tsx
          and TrailGateRow.tsx already use, never a second accent-filled CTA
          competing with the start marker. */}
      <Press cue="tap" onPress={props.onOpen} accessibilityRole="button" accessibilityLabel={T.trailPlacementTitle}>
        {/* flex lives on the wrapper, never on a TX, or the title clips */}
        <View style={{ minWidth: 0 }}>
          <TX font="semi" role="bodySm">
            {T.trailPlacementTitle}
          </TX>
          <TX role="meta" color={t.txMuted} style={{ marginTop: 2 }}>
            {T.trailPlacementBody}
          </TX>
        </View>
      </Press>
      {dismissRow(props.onDismiss)}
    </View>
  );
}
