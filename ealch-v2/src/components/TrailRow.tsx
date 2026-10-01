import { useEffect, useRef } from 'react';
import { useFocusReturnRegister } from '@/a11y/focusReturn';
import { Animated, Easing, View } from 'react-native';
import { TX } from './Type';
import { Press } from './ui';
import { Icon } from './Icon';
import { PremiereLockTag } from './PremiereLockTag';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useReduceMotion } from '@/utils/reduceMotion';
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

// D-18: the start marker — a first-run learner with nothing completed sees
// this in place of a `Reprendre` they have nothing to resume to. Modelled on
// speakmap.tsx's StationPulse (the project's one other "ring beside the
// current node" affordance): a looping Animated.timing ring, useNativeDriver
// true. Gated on the shared reduce-motion hook (the project's accessibility
// convention, speakmap.tsx:20/178/231/309) — but T-07.1-40 (Denial of Service,
// accessibility) means reduced motion renders a STATIC ring rather than no
// marker at all, since this is the primary affordance on a first run and an
// accessibility preference must not hide the way in.
const MARKER = 34; // matches the act row's own leading circle (below)
const MARKER_RING = MARKER + 14;

function StartMarker({ color, active, reduceMotion }: { color: string; active: boolean; reduceMotion: boolean }) {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!active || reduceMotion) {
      v.setValue(0);
      return;
    }
    const loop = Animated.loop(
      Animated.timing(v, { toValue: 1, duration: 1600, easing: Easing.out(Easing.ease), useNativeDriver: true }),
    );
    loop.start();
    return () => loop.stop();
  }, [active, reduceMotion, v]);

  if (!active) return null;

  // Positioned like speakmap.tsx's ProgressRing: a fixed negative offset
  // against the leading circle's own 34px box, not flexbox centering — the
  // ring is bigger than the circle it surrounds, on purpose.
  const OFFSET = -(MARKER_RING - MARKER) / 2;

  if (reduceMotion) {
    return (
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: OFFSET,
          top: OFFSET,
          width: MARKER_RING,
          height: MARKER_RING,
          borderRadius: MARKER_RING / 2,
          borderWidth: 1.5,
          borderColor: color,
        }}
      />
    );
  }

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        left: OFFSET,
        top: OFFSET,
        width: MARKER_RING,
        height: MARKER_RING,
        borderRadius: MARKER_RING / 2,
        borderWidth: 1.5,
        borderColor: color,
        opacity: v.interpolate({ inputRange: [0, 1], outputRange: [0.55, 0] }),
        transform: [{ scale: v.interpolate({ inputRange: [0, 1], outputRange: [1, 1.5] }) }],
      }}
    />
  );
}

export type TrailRowProps = {
  row: ActRow | Acte0Row;
  onPressAct: (lessonId: string, actIx: number) => void;
  onPressActe0: (lessonId: string) => void;
  onPressLocked: () => void;
};

export function TrailRow({ row, onPressAct, onPressActe0, onPressLocked }: TrailRowProps) {
  const t = useTheme();
  const T = useT();
  // Read unconditionally, before either branch's early return — the acte0
  // row never shows a start marker (only an `act` row carries the field at
  // all), but a hook cannot itself be conditional.
  const reduceMotion = useReduceMotion();
  // D-03: a locked row that opens the paywall registers itself so Back lands
  // on it (a FlashList row can be recycled; the ref then names whichever row
  // now occupies the same host view, which is still a row in the same spot).
  const rowRef = useRef<View>(null);
  const registerReturn = useFocusReturnRegister();
  const rememberOpener = () => {
    if (row.locked) registerReturn(rowRef);
  };

  if (row.kind === 'acte0') {
    const onPress = () => {
      rememberOpener();
      return row.locked ? onPressLocked() : onPressActe0(row.lessonId);
    };
    return (
      <Press
        ref={rowRef}
        cue={row.locked ? null : 'tap'}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${T.trailActe0}. ${row.locked ? T.a11yLockedPaywall : T.a11yOpenNarrated}`}
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
        {/* D-34: the shared PREMIERE lock pill / chevron, not a bespoke copy */}
        <PremiereLockTag locked={row.locked} />
      </Press>
    );
  }

  const onPress = () => {
    rememberOpener();
    return row.locked ? onPressLocked() : onPressAct(row.lessonId, row.actIx);
  };
  return (
    <Press
      ref={rowRef}
      cue={row.locked ? null : 'tap'}
      scale={0.99}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${row.title}. ${row.releaseLine}. ${row.locked ? T.a11yLockedPaywall : T.a11yOpenAct}`}
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
        <StartMarker color={t.acc} active={row.startMarker} reduceMotion={reduceMotion} />
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
      {/* D-34: the shared PREMIERE lock pill / chevron, not a bespoke copy */}
      <PremiereLockTag locked={row.locked} />
    </Press>
  );
}
