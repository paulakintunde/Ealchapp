import { useEffect, useMemo, useState } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { CURRENCIES, PRICES } from '@/content/pricing';
import { LEGAL } from '@/config/legal';
import { detectCurrency } from '@/store/entitlement.logic';
import { useEntitlement, useIsPremium } from '@/store/useEntitlement';
import { useStore, type Currency } from '@/store/useStore';
import { track } from '@/services/analytics';
import {
  getLiveOffers,
  purchasePremiere,
  purchasesStatus,
  restorePurchases,
  type LiveOffer,
} from '@/services/purchases';

// The Phase 10 paywall — rebuilt from nothing, per the master plan's scope
// correction: Phase 0 deleted the old commercial surface because it sold a
// product that did not exist. Everything on this screen is backed:
//   * prices come from src/content/pricing.ts (live store offers override them
//     verbatim, because the store's own quote is what will be charged);
//   * every feature listed is a REAL gate (den A2+ lock, coach turn cap,
//     role-play daily cap) — nothing here sells offline (free for everyone) or
//     the Examiner (Phase 11's product);
//   * the purchase button runs a real RevenueCat purchase or states plainly
//     that this build cannot take payment;
//   * Restore actually restores, and says so only when it found something.
// The entitlement lands via purchases.apply() → useEntitlement; this screen
// never writes access state itself.

const localeCandidates = (): string[] => {
  const out: string[] = [];
  try {
    const nav = typeof navigator !== 'undefined' ? (navigator as { language?: string; languages?: readonly string[] }) : undefined;
    if (nav?.languages) out.push(...nav.languages);
    if (nav?.language) out.push(nav.language);
    out.push(Intl.DateTimeFormat().resolvedOptions().locale ?? '');
  } catch {
    // No locale source — detection simply returns null and we keep the default.
  }
  return out.filter(Boolean);
};

export default function Paywall() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { from } = useLocalSearchParams<{ from?: string }>();

  const currency = useStore((s) => s.currency);
  const currencyChosen = useStore((s) => s.currencyChosen);
  const setCurrency = useStore((s) => s.setCurrency);
  const setField = useStore((s) => s.setField);
  const planPick = useStore((s) => s.planPick);
  const setPlan = useStore((s) => s.setPlan);
  const userId = useStore((s) => s.userId);
  const premium = useIsPremium();
  const entitlement = useEntitlement((s) => s.entitlement);

  const status = purchasesStatus();
  const [offers, setOffers] = useState<LiveOffer[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [purchased, setPurchased] = useState(false);

  useEffect(() => {
    track('paywall_viewed', { from: from ?? 'direct' });
    // Region detection fills the currency only while the user never chose one,
    // via setField so it is not recorded as a choice (see useStore).
    if (!useStore.getState().currencyChosen) {
      const detected = detectCurrency(localeCandidates());
      if (detected) setField('currency', detected);
    }
    void getLiveOffers().then(setOffers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const p = PRICES[currency];
  const liveMo = offers?.find((o) => o.plan === 'mo') ?? null;
  const liveYr = offers?.find((o) => o.plan === 'yr') ?? null;
  const trial = (planPick === 'yr' ? liveYr : liveMo)?.trial ?? null;

  const pick = (plan: 'mo' | 'yr') => {
    if (plan !== planPick) {
      setPlan(plan);
      track('plan_selected', { plan });
    }
  };

  const buy = async () => {
    if (busy || status !== 'ready') return;
    if (!userId) {
      // The entitlement hangs off the auth uid (Phase 9) so it can be restored
      // on any device — a guest signs in first, then comes back.
      router.push('/signin');
      return;
    }
    setBusy(true);
    setNotice(null);
    track('purchase_started', { plan: planPick, currency });
    const res = await purchasePremiere(planPick);
    setBusy(false);
    if (res.ok) {
      track('purchase_completed', { plan: planPick, currency });
      setPurchased(true);
    } else if (res.cancelled) {
      track('purchase_cancelled', { plan: planPick });
    } else {
      track('purchase_failed', { plan: planPick, message: res.message });
      setNotice(T.restoreFail);
    }
  };

  const restore = async () => {
    if (busy) return;
    setBusy(true);
    setNotice(null);
    track('restore_started');
    const res = await restorePurchases();
    setBusy(false);
    track('restore_completed', { found: res.ok && res.premium });
    if (!res.ok) setNotice(status === 'ready' ? T.restoreFail : T.pwUnavailableT);
    else setNotice(res.premium ? T.restoreDone : T.restoreNone);
  };

  const featureRows = [
    { icon: 'book' as const, title: T.pwFeatLevels, sub: T.pwFeatLevelsS },
    { icon: 'star' as const, title: T.pwFeatCoach, sub: T.pwFeatCoachS },
    { icon: 'mic' as const, title: T.pwFeatRoleplay, sub: T.pwFeatRoleplayS },
  ];

  const planRows = useMemo(
    () => [
      {
        id: 'yr' as const,
        label: T.annualL,
        price: liveYr?.priceString ?? p.yr,
        sub: liveYr
          ? T.billedYear.replace('{p}', liveYr.priceString)
          : `${p.yrmo}${T.perMoShort} · ${T.billedYear.replace('{p}', p.yr)}`,
        badge: T.saveFmt.replace('{p}', p.save),
        best: true,
      },
      {
        id: 'mo' as const,
        label: T.monthlyL,
        price: liveMo?.priceString ?? p.mo,
        sub: `${liveMo?.priceString ?? p.mo}${T.perMoShort}`,
        badge: null,
        best: false,
      },
    ],
    [T, p, liveMo, liveYr],
  );

  // A user who already holds Première (arrived from settings, or just bought):
  // no plan picker, no sell — state the plan and stop.
  if (premium || purchased) {
    const planLabel = entitlement.plan === 'annual' ? T.planPremiereYr : T.planPremiereMo;
    return (
      <View style={{ flex: 1, backgroundColor: t.bg }}>
        <View style={{ paddingTop: insets.top }}>
          <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
            <Icon name="check" size={26} color={t.acc} strokeWidth={2.4} />
          </View>
          <TX font="serif" role="display" size={28} style={{ textAlign: 'center' }}>
            {T.pwSuccessT}
          </TX>
          <TX role="bodySm" color={t.txMuted} style={{ textAlign: 'center', maxWidth: 300 }}>
            {purchased ? T.pwSuccessS : planLabel}
          </TX>
          <Press onPress={() => router.back()} style={{ marginTop: 18, minHeight: 52, paddingVertical: 8, paddingHorizontal: 40, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.accInk}>
              {T.cont}
            </TX>
          </Press>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: insets.bottom + 40 }}
        showsVerticalScrollIndicator={false}
      >
        <TX font="semi" role="eyebrow" ls={2.6} color={t.accTx} style={{ marginBottom: 10 }}>
          {T.pwTag}
        </TX>
        <TX font="serif" role="display" size={34} style={{ marginBottom: 8 }}>
          {T.pwTitle}
        </TX>
        <TX role="bodySm" color={t.txMuted} style={{ maxWidth: 320, marginBottom: 22 }}>
          {T.pwLead}
        </TX>

        {/* What Première actually gates */}
        <View style={{ gap: 14, marginBottom: 26 }}>
          {featureRows.map((f) => (
            <View key={f.title} style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: t.accA(12), alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={f.icon} size={18} color={t.acc} />
              </View>
              <View style={{ flex: 1 }}>
                <TX font="semi" role="body">
                  {f.title}
                </TX>
                <TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}>
                  {f.sub}
                </TX>
              </View>
            </View>
          ))}
        </View>

        {/* Plan picker */}
        <View style={{ gap: 12, marginBottom: 16 }}>
          {planRows.map((row) => {
            const on = planPick === row.id;
            return (
              <Press
                key={row.id}
                onPress={() => pick(row.id)}
                style={{
                  borderRadius: 18,
                  borderWidth: on ? 1.6 : 1,
                  borderColor: on ? t.acc : t.line(10),
                  backgroundColor: t.card, ...t.cardShadow,
                  padding: 16,
                  paddingHorizontal: 18,
                  overflow: 'hidden',
                }}
              >
                {on ? (
                  <LinearGradient
                    colors={[t.accA(12), 'transparent']}
                    start={{ x: 0.9, y: 0 }}
                    end={{ x: 0.2, y: 0.8 }}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                  />
                ) : null}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <TX font="semi" role="body">
                      {row.label}
                    </TX>
                    {row.badge ? (
                      <View style={{ paddingVertical: 3, paddingHorizontal: 8, borderRadius: 9, backgroundColor: t.accA(16) }}>
                        <TX font="bold" role="eyebrow" ls={0.8} color={t.accTx}>
                          {row.badge}
                        </TX>
                      </View>
                    ) : null}
                  </View>
                  <TX font="serif" role="display" size={20}>
                    {row.price}
                  </TX>
                </View>
                <TX role="label" color={t.txMuted} style={{ marginTop: 3 }}>
                  {row.sub}
                </TX>
              </Press>
            );
          })}
        </View>

        {trial ? (
          <TX role="label" color={t.accTx} style={{ marginBottom: 14 }}>
            {T.pwTrialFmt.replace('{t}', trial)}
          </TX>
        ) : null}

        {/* Purchase, or the honest reason there is none */}
        {status === 'ready' ? (
          <Press
            onPress={() => void buy()}
            style={{ minHeight: 54, borderRadius: 27, backgroundColor: busy ? t.accA(40) : t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}
          >
            <TX font="semi" role="body" color={t.accInk}>
              {userId ? T.pwCta : T.pwCtaGuest}
            </TX>
          </Press>
        ) : (
          <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(10), backgroundColor: t.card, padding: 14, paddingHorizontal: 16, marginBottom: 12 }}>
            <TX font="semi" role="body">
              {T.pwUnavailableT}
            </TX>
            <TX role="label" color={t.txMuted} style={{ marginTop: 2 }}>
              {T.pwUnavailableS}
            </TX>
          </View>
        )}

        <Press onPress={() => void restore()} cue={null} style={{ alignItems: 'center', paddingVertical: 10, marginBottom: 4 }}>
          <TX role="label" color={t.txSubtle}>
            {T.restoreT}
          </TX>
        </Press>

        {notice ? (
          <TX role="label" color={t.txMuted} style={{ textAlign: 'center', marginBottom: 10 }}>
            {notice}
          </TX>
        ) : null}

        {/* Currency: live store offers dictate their own currency; the picker
            only drives the pricing.ts matrix shown before the store answers. */}
        {offers ? (
          <TX role="label" color={t.txSubtle} style={{ textAlign: 'center', marginTop: 8, marginBottom: 14 }}>
            {T.storePricesNote}
          </TX>
        ) : (
          <View style={{ marginTop: 12, marginBottom: 14 }}>
            <TX font="semi" role="eyebrow" ls={2} color={t.txSubtle} style={{ marginBottom: 8 }}>
              {T.currencyT.toUpperCase()}
            </TX>
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 6 }}>
              {CURRENCIES.map((c: Currency) => {
                const on = c === currency;
                return (
                  <Press
                    key={c}
                    onPress={() => setCurrency(c)}
                    style={{ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 14, borderWidth: 1, borderColor: on ? t.acc : t.line(10), backgroundColor: on ? t.accA(10) : t.card }}
                  >
                    <TX font={on ? 'semi' : 'sans'} role="label" color={on ? t.accTx : t.txMuted}>
                      {c}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <TX role="label" color={t.txNonText}>
              {currencyChosen ? T.chosenByYou : T.detected}
            </TX>
          </View>
        )}

        {/* Store-required subscription disclosure. Apple 3.1.2(a) and Play
            both require the paywall itself to state the product, the billing
            period and the price, and to carry functional links to the terms
            and the privacy policy. Only the auto-renewal sentence was here;
            the price was on the plan rows and the two links were on the
            sign-up screen, which is a different screen and may never be
            seen -- a signed-in user reaching settings goes straight here.

            The price quoted is the SELECTED row, not a literal: it is the
            same value the button charges, live store quote included, so
            this line cannot drift from what is billed. */}
        <View style={{ marginTop: 4, gap: 6 }}>
          <TX role="label" color={t.txNonText}>
            {T.pwTermsPlan
              .replace('{plan}', (planRows.find((r) => r.id === planPick) ?? planRows[0]).label.toLowerCase())
              .replace('{price}', (planRows.find((r) => r.id === planPick) ?? planRows[0]).price)}
          </TX>
          <TX role="label" color={t.txNonText}>
            {T.pwTermsAuto}
          </TX>
          <View style={{ flexDirection: 'row', gap: 18, marginTop: 2 }}>
            <TX
              font="semi"
              role="label"
              color={t.txSubtle}
              onPress={() => { Linking.openURL(LEGAL.termsUrl).catch(() => {}); }}
              style={{ textDecorationLine: 'underline' }}
            >
              {T.legalTerms}
            </TX>
            <TX
              font="semi"
              role="label"
              color={t.txSubtle}
              onPress={() => { Linking.openURL(LEGAL.privacyUrl).catch(() => {}); }}
              style={{ textDecorationLine: 'underline' }}
            >
              {T.legalPrivacy}
            </TX>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
