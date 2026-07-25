import { useRef, useState } from 'react';
import {
  ScrollView,
  View,
  useWindowDimensions,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { sound } from '@/services';

// The one-time "how lessons work" tour: six swipeable cards teaching the
// mechanics that aren't self-evident on first contact — swipe, the two page
// counters, Listen, the waveform, tappable rows, Prev/Next — by showing the
// REAL components wherever practical instead of only describing them.
//
// Trigger lives in app/lesson.tsx: auto-shown once ever before a user's first
// lesson (gated on the persisted store.lessonKeySeen), reachable again anytime
// after via the lesson header's `?` button, independent of that flag — so
// dismissing (Skip or finishing) always marks it seen, but seeing it again
// never un-marks it.

function Pill({ label }: { label: string }) {
  const t = useTheme();
  return (
    <View style={{ borderRadius: 12, borderWidth: 1, borderColor: t.line(14), paddingHorizontal: 13, paddingVertical: 7 }}>
      <TX font="semi" role="meta" color={t.txSubtle}>{label}</TX>
    </View>
  );
}

function CountersDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 12, marginTop: 22 }}>
      <Pill label="3 / 25" />
      <Pill label="4 / 29" />
    </View>
  );
}

function ListenDemo({ label }: { label: string }) {
  const t = useTheme();
  return (
    <View
      style={{
        marginTop: 22,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
        height: 37,
        paddingHorizontal: 15,
        borderRadius: 18.5,
        borderWidth: 1,
        borderColor: t.accA(45),
      }}
    >
      <Icon name="speaker" size={16} color={t.acc} />
      <TX font="semi" role="meta" ls={1} color={t.accTx}>{label}</TX>
    </View>
  );
}

function WaveDemo() {
  const t = useTheme();
  return (
    <View style={{ marginTop: 22, height: 38, alignItems: 'center', justifyContent: 'center' }}>
      <Waveform count={16} height={28} barWidth={4} gap={4} active color={t.acc} />
    </View>
  );
}

function RowDemo({ label }: { label: string }) {
  const t = useTheme();
  return (
    <View
      style={{
        marginTop: 22,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: t.line(9),
        backgroundColor: t.card,
        paddingHorizontal: 16,
        paddingVertical: 14,
      }}
    >
      <TX role="bodySm" color={t.txSecondary} style={{ flex: 1 }}>{label}</TX>
      <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
    </View>
  );
}

function NavDemo() {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', gap: 10, marginTop: 22 }}>
      <View style={{ minHeight: 44, paddingHorizontal: 18, borderRadius: 22, borderWidth: 1.5, borderColor: t.line(12), flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <Icon name="chevronLeft" size={14} color={t.txSecondary} strokeWidth={1.8} />
      </View>
      <View style={{ minHeight: 44, paddingHorizontal: 18, borderRadius: 22, backgroundColor: t.acc, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <Icon name="chevronRight" size={14} color={t.accInk} strokeWidth={2} />
      </View>
    </View>
  );
}

export function LessonKeyIntro({ onDone }: { onDone: () => void }) {
  const t = useTheme();
  const T = useT();
  // Not the window's width: on web, AppFrame clips the app to a 430px
  // phone-width column on wider viewports, so paging math must use this
  // card's own measured layout width, falling back to the window width only
  // until the first onLayout fires.
  const { width: windowWidth } = useWindowDimensions();
  const [width, setWidth] = useState(windowWidth);
  const ref = useRef<ScrollView>(null);
  const [ix, setIx] = useState(0);

  const cards = [
    { title: T.lkWelcomeT, body: T.lkWelcomeS, demo: null },
    { title: T.lkCountersT, body: T.lkCountersS, demo: <CountersDemo /> },
    { title: T.lkListenT, body: T.lkListenS, demo: <ListenDemo label={T.lessonListen} /> },
    { title: T.lkWaveT, body: T.lkWaveS, demo: <WaveDemo /> },
    { title: T.lkTapT, body: T.lkTapS, demo: <RowDemo label={T.lkTapRowLabel} /> },
    { title: T.lkNavT, body: T.lkNavS, demo: <NavDemo /> },
  ];
  const last = cards.length - 1;
  const onLast = ix === last;

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(last, i));
    sound.play('flip');
    ref.current?.scrollTo({ x: clamped * width, animated: true });
    setIx(clamped);
  };

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const p = Math.round(e.nativeEvent.contentOffset.x / width);
    if (p !== ix) setIx(p);
  };

  const finish = () => {
    sound.play('tap');
    onDone();
  };

  const onLayout = (e: LayoutChangeEvent) => {
    const measured = e.nativeEvent.layout.width;
    if (measured && measured !== width) setWidth(measured);
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }} onLayout={onLayout}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingTop: 8, paddingBottom: 14 }}>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          {cards.map((_, i) => (
            <View key={i} style={{ width: i === ix ? 16 : 5, height: 5, borderRadius: 3, backgroundColor: i === ix ? t.acc : t.line(14) }} />
          ))}
        </View>
        <Press cue={null} onPress={finish} hitSlop={8}>
          <TX font="semi" role="meta" ls={1} color={t.txSubtle}>{T.lkSkip}</TX>
        </Press>
      </View>

      <ScrollView
        ref={ref}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumEnd}
        style={{ flex: 1 }}
      >
        {cards.map((c, i) => (
          <View key={i} style={{ width, flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 }}>
            <TX font="serif" size={30} role="display" center lhMult={1.2} style={{ width: '100%', marginBottom: 14 }}>
              {c.title}
            </TX>
            <TX role="body" color={t.txSecondary} center lhMult={1.55} style={{ width: '100%' }}>
              {c.body}
            </TX>
            {c.demo}
          </View>
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', gap: 12, paddingHorizontal: 24, paddingTop: 12, paddingBottom: 24 }}>
        <Press
          cue={null}
          onPress={ix === 0 ? undefined : () => goTo(ix - 1)}
          style={{
            minHeight: 52,
            paddingHorizontal: 20,
            borderRadius: 26,
            borderWidth: 1.5,
            borderColor: t.line(12),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: ix === 0 ? 0.35 : 1,
          }}
        >
          <Icon name="chevronLeft" size={15} color={t.txSecondary} strokeWidth={1.8} />
        </Press>
        {onLast ? (
          <Button label={T.lkStart} onPress={finish} style={{ flex: 1 }} />
        ) : (
          <Press
            cue={null}
            onPress={() => goTo(ix + 1)}
            style={{ flex: 1, minHeight: 52, borderRadius: 26, backgroundColor: t.acc, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}
          >
            <TX font="semi" role="bodyLg" color={t.accInk}>{T.lessonNext}</TX>
            <Icon name="chevronRight" size={15} color={t.accInk} strokeWidth={2} />
          </Press>
        )}
      </View>
    </View>
  );
}
