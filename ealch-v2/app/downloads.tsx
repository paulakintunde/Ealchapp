import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { sound } from '@/services';
import { useContent, refreshFromRemote, contentCacheInfo } from '@/services/content';

// Offline/content status, told accurately.
//
// THE PREMISE THIS FILE WAS WRITTEN ON IS FALSE, and the copy inherited it.
// The header used to say "the whole corpus ships bundled in the binary
// (seed.json), so every lesson, drill and phrase already works offline". The
// binary ships the seed CUT, not the corpus:
//
//   bundled in the APK   75 units · 78 lessons · 10,417 phrases
//   after the OTA fetch  75 units · 78 lessons · 48,978 phrases
//
// Units and lessons are identical in both, which is why "every lesson works
// offline" is true and was worth keeping. PHRASES are not: the cut is a bit
// over a fifth of them, and the rest arrive with the snapshot.
//
// So the card below, which renders `corpus.items.length`, shows 48,978 on any
// device that has fetched — a number that exists BECAUSE of a download, sat
// directly under a line reading "No download needed". Measured on a Pixel 9,
// 2026-08-20. The string is fixed in i18n/strings.ts; this comment is fixed so
// the next person does not restore the old line from it.
//
// What CAN be shown truthfully: the content version and real counts, the size
// of the cached over-the-air update (if any), and a real "check for updates"
// that runs the same refresh the app does in the background.
// Was pure mock: a fixed 2 GB storage bar, invented 210/160/340 MB collections,
// two of them flagged "already downloaded" on a fresh install, and a Wi-Fi
// toggle that controlled nothing (review §1.10). Downloadable audio packs are
// real work for Phase 7, when recorded audio exists to download.

export default function Downloads() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const corpus = useContent((s) => s.corpus);
  const [cacheBytes, setCacheBytes] = useState<number | null>(null);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    contentCacheInfo().then((i) => alive && setCacheBytes(i?.bytes ?? 0));
    return () => {
      alive = false;
    };
  }, [corpus]);

  const check = async () => {
    if (checking) return;
    sound.play('tap');
    setChecking(true);
    setResult(null);
    const before = useContent.getState().corpus.version;
    await refreshFromRemote();
    const after = useContent.getState().corpus.version;
    setChecking(false);
    setResult(after > before ? T.updatedL : T.upToDateL);
    const info = await contentCacheInfo();
    setCacheBytes(info?.bytes ?? 0);
  };

  const counts = T.contentCountsFmt
    .replace('{u}', String(corpus.units.length))
    .replace('{l}', String(corpus.lessons.length))
    .replace('{i}', String(corpus.items.length));
  const cacheLabel = cacheBytes && cacheBytes > 0 ? `${Math.max(1, Math.round(cacheBytes / 1024))} KB` : null;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: insets.bottom + 60 }}
        showsVerticalScrollIndicator={false}
      >
        <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle} style={{ marginBottom: 12 }}>
          {T.offlineTag}
        </TX>

        {/* Everything is already offline — the honest headline */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <View style={{ width: 46, height: 46, borderRadius: 23, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="check" size={22} color={t.acc} strokeWidth={2.4} />
          </View>
          <View style={{ flex: 1 }}>
            <TX font="serifI" role="display" size={30}>
              {T.offlineReadyT}
            </TX>
          </View>
        </View>
        <TX role="bodySm" lhMult={1.6} color={t.txMuted} style={{ marginBottom: 24 }}>
          {T.offlineReadyS}
        </TX>

        {/* Content version + real counts */}
        <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, ...t.cardShadow, padding: 18, marginBottom: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
            <TX font="semi" role="bodySm">{T.contentVersionL}</TX>
            <TX font="semi" role="label" color={t.accTx}>v{corpus.version}</TX>
          </View>
          <TX role="meta" color={t.txMuted}>{counts}</TX>
          {cacheLabel ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: t.line(8) }}>
              <Icon name="download" size={14} color={t.txNonText} strokeWidth={1.8} />
              <TX role="meta" color={t.txMuted}>
                {T.cachedUpdateL} · {cacheLabel}
              </TX>
            </View>
          ) : null}
        </View>

        {/* Real "check for updates" — runs the same refresh the app does */}
        <Press
          onPress={check}
          cue={null}
          style={{ minHeight: 52, paddingVertical: 6, borderRadius: 26, borderWidth: 1, borderColor: t.accA(50), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}
        >
          <Icon name="download" size={16} color={t.accTx} strokeWidth={1.8} />
          <TX font="semi" role="body" color={t.accTx}>
            {checking ? T.updatingL : T.checkUpdates}
          </TX>
        </Press>
        {result ? (
          <TX role="meta" center color={t.txMuted} style={{ marginBottom: 20 }}>
            {result}
          </TX>
        ) : (
          <View style={{ marginBottom: 20 }} />
        )}

        {/* Honest about what's not here yet */}
        <TX role="meta" center lhMult={1.6} color={t.txSubtle} style={{ fontStyle: 'italic' }}>
          {T.audioSoonL}
        </TX>
      </ScrollView>
    </View>
  );
}
