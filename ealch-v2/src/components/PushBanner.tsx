import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useRouter } from 'expo-router';
import { TX } from './Type';
import { Press } from './ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useUI } from '@/store/useUI';
import { useStore } from '@/store/useStore';
import { avatarName } from '@/content/avatars';
import { formatTime } from '@/utils/time';
import { formatNotifText } from '@/utils/notifText.logic';
import { track as trackEvent } from '@/services/analytics';

/** Drops in a Spotify/iOS-style push banner; tap → Speak Mode, the paywall, or
 *  Settings, depending on which kind of notice currently occupies the slot. */
export function PushBanner() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const { banner, bannerGen, hideBanner } = useUI();
  const visible = banner !== null;
  const clock24 = useStore((s) => s.clock24);
  const coachName = avatarName(useStore((s) => s.avatarId));
  const y = useRef(new Animated.Value(-140)).current;

  useEffect(() => {
    Animated.timing(y, {
      toValue: visible ? 0 : -140,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visible, y]);

  // Per-kind presentation. The card shell, the slide animation and the badge
  // geometry are identical for every kind (UI-SPEC's Interaction Contract) —
  // only these five values vary, so a new kind is five lines, not a new file.
  const masthead =
    banner?.kind === 'upgradeNudge' ? T.pwTag
    : banner?.kind === 'reconciliation' ? T.acctTag
    : 'EALCH';
  // The reconciliation badge is deliberately neutral, not accent-branded: an
  // accent badge reads as "buy something", and a lapsed subscription is a
  // status notice, not an upsell (UI-SPEC Color, D-16/D-17).
  const neutral = banner?.kind === 'reconciliation';
  const badgeBg = neutral ? t.card2 : t.acc;
  const badgeInk = neutral ? t.txSubtle : t.accInk;
  const bodyText =
    banner?.kind === 'upgradeNudge' ? banner.copy
    : banner?.kind === 'reconciliation' ? T.reconcileBody
    : banner?.kind === 'speakReminder'
      ? formatNotifText(T.bannerText, { t: formatTime(banner.at, clock24), name: coachName })
      : '';
  const onBannerPress = () => {
    hideBanner();
    if (banner?.kind === 'upgradeNudge') {
      trackEvent('upgrade_nudge_tapped', { trigger: banner.trigger });
      router.push({ pathname: '/paywall', params: { from: 'gate:roleplay' } });
    } else if (banner?.kind === 'reconciliation') {
      // Settings already carries Restore Purchases (built in Phase 4) — do not
      // duplicate that flow inside the banner.
      router.push('/settings');
    } else {
      router.push('/speak');
    }
  };

  // The two new kinds have no caller-side timer the way speakReminder does
  // (useAlarmWatcher.ts owns that one, at 12000ms). Give them their own, so a
  // nudge never lingers indefinitely over active content (UI-SPEC).
  // Keyed on bannerGen, not just banner?.kind: two same-kind banners shown
  // back-to-back (e.g. a future coach nudge landing right after a roleplay
  // one) must each get their own fresh 10s window, not share the first one's
  // already-running timer.
  useEffect(() => {
    if (banner?.kind !== 'upgradeNudge' && banner?.kind !== 'reconciliation') return;
    const gen = bannerGen;
    const id = setTimeout(() => {
      if (useUI.getState().bannerGen === gen) useUI.getState().hideBanner();
    }, 10000);
    return () => clearTimeout(id);
  }, [banner?.kind, bannerGen]);

  return (
    <Animated.View
      pointerEvents={visible ? 'auto' : 'none'}
      style={{
        position: 'absolute',
        top: 58,
        left: 12,
        right: 12,
        zIndex: 70,
        transform: [{ translateY: y }],
      }}
    >
      <Press
        cue={null}
        scale={0.98}
        onPress={onBannerPress}
        style={{
          borderRadius: 20,
          backgroundColor: t.card2,
          borderWidth: 1,
          borderColor: t.line(12),
          padding: 13,
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          shadowColor: '#000',
          shadowOpacity: 0.55,
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 14 },
          elevation: 12,
        }}
      >
        <View
          style={{
            width: 38,
            minHeight: 38,
            paddingVertical: 6,
            borderRadius: 10,
            backgroundColor: badgeBg,
            borderWidth: neutral ? 1 : 0,
            borderColor: t.line(20),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TX font="serifI" role="titleLg" size={21} color={badgeInk}>
            E
          </TX>
        </View>
        <View style={{ flex: 1, minWidth: 0 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <TX font="bold" role="label" ls={0.4}>
              {masthead}
            </TX>
            {banner?.kind === 'speakReminder' ? (
              <TX role="meta" color={t.txSubtle}>
                {T.now}
              </TX>
            ) : null}
          </View>
          <TX role="label" color={t.txSecondary} style={{ marginTop: 2 }}>
            {bodyText}
          </TX>
        </View>
      </Press>
    </Animated.View>
  );
}
