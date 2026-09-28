import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { SheetGrabber, SHEET_CONTENT_PADDING } from '@/components/SheetChrome';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import { flattenNarration, stageRanges } from '@/content/narration.logic';

// The acte 00 pre-roll sheet (D-10, D-12): opens BEFORE the existing
// narrated player (app/narrated.tsx, unchanged by this file), and states the
// real shape of the lesson it is about to play — read from the same two
// pure narration-walking functions the player itself uses (imported below),
// so this sheet cannot promise a lesson shape the player does not deliver.
//
// D-38 verdict (07.1-VALIDATION.md, pre-settled): formSheet IS a real
// Android bottom sheet. This is the same formSheet mechanism app/fiche.tsx
// (plan 05) uses, registered in _layout.tsx with the same three measured
// defects handled the same way (the unpainted detent, the 0.92 top-detent
// cap, font-scale-1.3 tail-dropping) — one sheet mechanism in this phase,
// not two.
//
// Android's fitToContents formSheet does not support flex: 1 on the root, so
// this screen sizes its content explicitly and lets the inner ScrollView
// handle overflow, the same shape fiche.tsx already uses.
//
// D-12's other half: the mic never opens on its own. narrated.tsx waits for
// a tap (acte-zero.test.ts pins this); this sheet's copy (T.prerollMicNote)
// never states or implies otherwise, and the Start control below only ever
// opens the player — it never starts listening itself.

export default function Preroll() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const params = useLocalSearchParams<{ key?: string }>();
  const raw = Array.isArray(params.key) ? params.key[0] : params.key;
  const L = content.lesson(raw ?? '');
  const hasNarration = !!L?.narration;

  // A dead link (an unknown id, or an id whose lesson carries no narration
  // script at all) backs out to wherever opened this sheet — the same
  // dead-link shape fiche.tsx and act.tsx already use (D-41).
  useEffect(() => {
    if (!L || !hasNarration) {
      if (router.canGoBack()) router.back();
      else router.replace('/den');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L, hasNarration]);

  // A dead link renders a real (if bare) sheet, never a white one, while the
  // effect above resolves.
  if (!L || !hasNarration) {
    return (
      <View style={{ backgroundColor: t.sheet, minHeight: 200 }}>
        <SheetGrabber />
      </View>
    );
  }

  // The real shape of the lesson, derived — never a literal. acte-zero.test.ts
  // pins the exact counts this derivation resolves to for sons.01.l1, so it
  // can never quietly drift from the player's own source of truth.
  const segs = flattenNarration(L.narration!);
  const stages = stageRanges(segs);
  const stageCount = stages.length;
  const passageCount = segs.filter((s) => s.kind === 'segment').length;
  const micCount = segs.filter((s) => s.kind === 'interaction').length;
  // How many of those stages hold a mic moment: the "across N stages" half of
  // D-12's shape, read from the same flattened steps the player walks.
  const micStageCount = new Set(segs.filter((s) => s.kind === 'interaction').map((s) => s.stageIndex)).size;
  const shape = T.prerollShape
    .replace('{s}', String(stageCount))
    .replace('{p}', String(passageCount))
    .replace('{ms}', String(micStageCount))
    .replace('{m}', String(micCount));

  const start = () => {
    // formSheet route: close this sheet first (router.back()), then open the
    // player — the same close-before-navigate shape BottomSheet.tsx's
    // closeThen() gives the overlay mechanism, applied here to a formSheet.
    if (router.canGoBack()) router.back();
    router.push({ pathname: '/narrated', params: { key: L.id } });
  };

  return (
    <View style={{ backgroundColor: t.sheet }}>
      <SheetGrabber />
      <ScrollView contentContainerStyle={SHEET_CONTENT_PADDING} showsVerticalScrollIndicator={false}>
        {/* flex lives on the wrapper, never on a TX, or the title clips */}
        <View style={{ minWidth: 0 }}>
          <TX font="serifI" role="display">
            {T.prerollTitle}
          </TX>
        </View>

        <TX role="body" color={t.txSecondary} style={{ marginTop: 14 }}>
          {shape}
        </TX>

        <TX role="bodySm" color={t.txMuted} style={{ marginTop: 14 }}>
          {T.prerollMicNote}
        </TX>

        <Press accessibilityRole="button"
          cue="tap"
          onPress={start}
          accessibilityLabel={T.prerollStart}
          style={{
            marginTop: 26,
            minHeight: 54,
            borderRadius: 27,
            backgroundColor: t.acc,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TX font="bold" role="body" color={t.accInk}>
            {T.prerollStart}
          </TX>
        </Press>
      </ScrollView>
    </View>
  );
}
