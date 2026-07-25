import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { playlists } from '@/content/playlists';

// The "SEE ALL" index. Every playlist and every track it holds is real content;
// a track count is `tracks.length`, and each track row deep-links the player to
// that exact track. No per-playlist "3/15 done" progress is shown — nothing
// records per-track completion yet, and a fabricated bar is the thing this
// screen exists to retire.

export default function Playlists() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={T.playlists} />
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: insets.bottom + 60 }} showsVerticalScrollIndicator={false}>
        {playlists.map((p) => (
          <View key={p.id} style={{ marginBottom: 26 }}>
            {/* Playlist header — word tile + label + honest count */}
            <Press
              onPress={() => router.push(`/player?playlist=${p.id}&track=0`)}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 12 }}
            >
              <View style={{ width: 76, height: 76, borderRadius: 16, borderWidth: 1, borderColor: t.line(7), overflow: 'hidden', backgroundColor: t.isDark ? '#12100E' : t.card, ...t.cardShadow }}>
                <LinearGradient colors={[p.glow, 'transparent']} start={{ x: 0.8, y: 0 }} end={{ x: 0.2, y: 0.7 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                <TX font="serifI" size={17} role="title" style={{ position: 'absolute', left: 10, bottom: 8 }}>
                  {p.word}
                </TX>
              </View>
              <View style={{ flex: 1 }}>
                <TX font="semi" role="eyebrow" ls={2.2} color={t.txMuted}>
                  {p.tag}
                </TX>
                <TX font="serif" size={19} role="titleLg" style={{ marginTop: 3 }}>
                  {lang === 'fr' ? p.labelFr : p.labelEn}
                </TX>
                <TX role="meta" color={t.txSubtle} style={{ marginTop: 3 }}>
                  {`${p.tracks.length} ${T.tracksWord} · ${lang === 'fr' ? p.topicFr : p.topicEn}`}
                </TX>
              </View>
            </Press>

            {/* Track rows — each deep-links straight to its track */}
            <View style={{ gap: 8 }}>
              {p.tracks.map((tk, i) => (
                <Press
                  key={tk.id}
                  onPress={() => router.push(`/player?playlist=${p.id}&track=${i}`)}
                  style={{ minHeight: 56, paddingVertical: 8, borderRadius: 14, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, flexDirection: 'row', alignItems: 'center', gap: 13, paddingHorizontal: 15 }}
                >
                  <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: t.accA(12), alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="play" size={17} color={t.acc} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <TX font="semi" role="bodySm">
                      {tk.title}
                    </TX>
                    <TX role="meta" color={t.txSubtle} numberOfLines={1} style={{ marginTop: 1 }}>
                      {tk.lines[0]?.fr}
                    </TX>
                  </View>
                  <Icon name="chevronRight" size={14} color={t.txNonText} strokeWidth={1.6} />
                </Press>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
