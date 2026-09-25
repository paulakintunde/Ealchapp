import { View } from 'react-native';
import { TX } from './Type';
import { Press } from './ui';
import { Icon } from './Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import type { TrailRow as TrailRowData } from '@/content/trail.logic';

// The act row and the acte 00 row (D-05, D-10) — the trail's two pressable
// row kinds. Props only, no store read (den.tsx, plan 08's screen, is the
// only caller and supplies every callback).
//
// The disc/chevron live OUTSIDE the title's own row wrapper on purpose: the
// measured finding (sons-07-elision.test.ts, Pixel 6, five markups against
// the same strings) is that flexShrink:1, flex:1, a wrapping row and no flex
// at all ALL clip a long line's tail, and only moving the glyph out of the
// row renders whole at every length. The clip is also non-deterministic (the
// identical string rendered whole in one position and clipped in another on
// the same screen), so this shape — not a per-string check — is the fix.

type ActRow = Extract<TrailRowData, { kind: 'act' }>;
type Acte0Row = Extract<TrailRowData, { kind: 'acte0' }>;

export type TrailRowProps = {
  row: ActRow | Acte0Row;
  onPressAct: (lessonId: string, actIx: number) => void;
  onPressActe0: (lessonId: string) => void;
  onPressLocked: () => void;
};

export function TrailRow({ row, onPressAct, onPressActe0, onPressLocked }: TrailRowProps) {
  const t = useTheme();
  const T = useT();

  if (row.kind === 'acte0') {
    const onPress = () => (row.locked ? onPressLocked() : onPressActe0(row.lessonId));
    return (
      <Press
        cue={row.locked ? null : 'tap'}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityState={{ disabled: row.locked }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 13,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: t.accA(30),
          backgroundColor: t.card,
          padding: 14,
          paddingHorizontal: 16,
          marginBottom: 9,
          opacity: row.locked ? 0.65 : 1,
        }}
      >
        <View
          style={{
            width: 36,
            minHeight: 36,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: t.accA(45),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="speaker" size={16} color={t.accTx} />
        </View>
        {/* flex lives on the wrapper, never on a TX, or the title clips */}
        <View style={{ flex: 1, minWidth: 0 }}>
          <TX font="semi" role="body">
            {T.trailActe0}
          </TX>
        </View>
        {row.locked ? (
          <Icon name="lock" size={14} color={t.txNonText} strokeWidth={1.8} />
        ) : (
          <Icon name="chevronRight" size={16} color={t.txNonText} strokeWidth={1.7} />
        )}
      </Press>
    );
  }

  const onPress = () => (row.locked ? onPressLocked() : onPressAct(row.lessonId, row.actIx));
  return (
    <Press
      cue={row.locked ? null : 'tap'}
      scale={0.99}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ disabled: row.locked, selected: row.startMarker }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: row.done ? t.accA(55) : row.startMarker ? t.acc : t.line(8),
        backgroundColor: t.card,
        padding: 13,
        paddingHorizontal: 15,
        marginBottom: 9,
        opacity: row.locked ? 0.65 : 1,
      }}
    >
      <View
        style={{
          width: 34,
          minHeight: 34,
          borderRadius: 17,
          borderWidth: 1,
          borderColor: row.done ? t.acc : t.accA(40),
          backgroundColor: row.done ? t.acc : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {row.done ? (
          <Icon name="check" size={15} color={t.accInk} strokeWidth={2.4} />
        ) : row.locked ? (
          <Icon name="lock" size={13} color={t.txMuted} strokeWidth={1.8} />
        ) : (
          <TX font="serif" role="label" color={t.accTx}>
            {String(row.actIx + 1).padStart(2, '0')}
          </TX>
        )}
      </View>
      {/* flex lives on the wrapper, never on a TX, or the title clips */}
      <View style={{ flex: 1, minWidth: 0 }}>
        <TX font="semi" role="body">
          {row.title}
        </TX>
        <TX role="eyebrow" color={t.txSubtle} style={{ marginTop: 3 }}>
          {row.releaseLine}
        </TX>
      </View>
      <Icon name="chevronRight" size={16} color={t.txNonText} strokeWidth={1.7} />
    </Press>
  );
}
