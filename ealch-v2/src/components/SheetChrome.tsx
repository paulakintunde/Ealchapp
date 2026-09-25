import { Platform, View } from 'react-native';
import { useTheme } from '@/theme/useTheme';

// The Android grabber and the shared content padding for every formSheet
// route this phase adds (fiche.tsx here, plan 09's pre-roll sheet next).
// `sheetGrabberVisible` in the Stack.Screen options (_layout.tsx) is iOS
// only, so Android needs one drawn by hand — the exact shape BottomSheet.tsx
// already draws for the legacy hand-rolled sheet (:77-79), reused rather than
// re-invented so the two sheet mechanisms in this app read as one family.

/** The scrollable body's content padding, copied from BottomSheet.tsx:81. */
export const SHEET_CONTENT_PADDING = { paddingHorizontal: 26, paddingTop: 14, paddingBottom: 44 } as const;

export function SheetGrabber() {
  const t = useTheme();
  // iOS draws its own native grabber via sheetGrabberVisible; drawing a
  // second one here would double it up.
  if (Platform.OS !== 'android') return null;
  return (
    <View style={{ alignItems: 'center', paddingTop: 12, paddingBottom: 4 }}>
      <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: t.line(18) }} />
    </View>
  );
}
