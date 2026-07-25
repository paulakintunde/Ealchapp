import { useEffect, useRef, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { audio } from '@/services';

// The shared tap-to-open modal for every lesson detail card: table/cheatSheet
// rows, the alphabet grid, tap tables, theme decks. RN Modal rather than an
// absolutely-positioned overlay because these open from deep inside nested
// ScrollViews, where an overlay would clip to its parent card.
//
// Two size tiers:
//   'full'  — ~95% height, the "almost full page" tier for content that IS
//             the moment (a tapped table row, a tapped letter).
//   'sheet' — 78% height, the lighter utility-sheet tier for browsing modals
//             that open their own horizontal deck inside (e.g. vocab themes).
// Both scroll internally and show a "more below" cue when content overflows —
// every instance of this modal is scrollable, never clipped.
export type LessonModalSize = 'full' | 'sheet';

export function LessonModal({
  open,
  onClose,
  size = 'sheet',
  children,
}: {
  open: boolean;
  onClose: () => void;
  size?: LessonModalSize;
  children: React.ReactNode;
}) {
  const t = useTheme();
  const [more, setMore] = useState(false);
  const layoutH = useRef(0);
  const contentH = useRef(0);
  const update = () => setMore(contentH.current > layoutH.current + 24);

  // Opening this modal leaves whatever context owned the current voice (the
  // page's Listen chip, a playing row) — that audio hard-stops here; the
  // modal's own play controls are the only sound that belongs inside it.
  useEffect(() => {
    if (open) audio.stop();
    else {
      setMore(false);
      layoutH.current = 0;
      contentH.current = 0;
    }
  }, [open]);

  // RN's Modal is not free to hold mounted-but-hidden — it registers a real
  // native modal host the instant it's in the tree, `visible` or not. The
  // lesson pager mounts every section's page upfront (no virtualization), so
  // a content-heavy lesson can carry a dozen tap-to-open rows/letters, each
  // with its own LessonModal instance — that used to mean a dozen native
  // modals sitting there before a single tap, which is exactly what reads as
  // sluggish tap response. Rendering nothing at all until `open` keeps only
  // the ONE modal that's actually in use alive at a time.
  if (!open) return null;

  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <Pressable onPress={onClose} style={{ flex: 1, backgroundColor: t.alpha(t.bgDeep, 60) }} />
      <View
        style={{
          maxHeight: size === 'full' ? '95%' : '78%',
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          backgroundColor: t.sheet,
          borderTopWidth: 1,
          borderColor: t.line(10),
        }}
      >
        <View style={{ alignItems: 'center', paddingTop: 12 }}>
          <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: t.line(18) }} />
        </View>
        <Pressable
          onPress={onClose}
          hitSlop={10}
          accessibilityLabel="Close"
          style={{
            position: 'absolute',
            top: 14,
            right: 18,
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: t.line(10),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="x" size={15} color={t.txSecondary} />
        </Pressable>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 24, paddingTop: 22, paddingBottom: 44 }}
          onLayout={(e) => {
            layoutH.current = e.nativeEvent.layout.height;
            update();
          }}
          onContentSizeChange={(_, h) => {
            contentH.current = h;
            update();
          }}
          onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
            const ne = e.nativeEvent;
            setMore(ne.contentOffset.y + ne.layoutMeasurement.height < ne.contentSize.height - 24);
          }}
          scrollEventThrottle={64}
        >
          {children}
        </ScrollView>
        {more ? (
          <View
            pointerEvents="none"
            style={{
              position: 'absolute',
              bottom: 10,
              alignSelf: 'center',
              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: t.alpha(t.bgDeep, 35),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="chevronDown" size={15} color={t.txSecondary} strokeWidth={2} />
          </View>
        ) : null}
      </View>
    </Modal>
  );
}
