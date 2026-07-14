import { useState, type ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Toggle, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { TimeWheel, ClockToggle } from '@/components/TimeWheel';
import { formatTime } from '@/utils/time';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore, type Currency } from '@/store/useStore';
import { useUI } from '@/store/useUI';
import { sound } from '@/services';
import { ACCENTS } from '@/theme/palette';
import { langs } from '@/content';
import { accentData, alarmData } from '@/content/onboarding';

// pricing per currency, ported from the prototype
const CUR: Record<Currency, { mo: string; yrmo: string; yr: string }> = {
  USD: { mo: '$9.99', yrmo: '$6.58', yr: '$79' },
  EUR: { mo: '9,99 €', yrmo: '6,58 €', yr: '79 €' },
  GBP: { mo: '£8.99', yrmo: '£5.75', yr: '£69' },
  CAD: { mo: 'CA$12.99', yrmo: 'CA$8.25', yr: 'CA$99' },
};

const CURRENCIES: { id: Currency; name: string }[] = [
  { id: 'USD', name: '$ USD' },
  { id: 'EUR', name: '€ EUR' },
  { id: 'GBP', name: '£ GBP' },
  { id: 'CAD', name: 'CA$ CAD' },
];

const NOTIF_KEYS = ['daily', 'report', 'nudge'] as const;

function SectionHead({ label }: { label: string }) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 4, marginBottom: 14 }}>
      <TX font="bold" role="eyebrow" ls={2.6} color={t.accTx}>
        {label}
      </TX>
      <View style={{ flex: 1, height: 1, backgroundColor: t.line(8) }} />
    </View>
  );
}

function GroupTitle({ children }: { children: ReactNode }) {
  return (
    <TX font="serif" role="titleLg" size={21} style={{ marginBottom: 12 }}>
      {children}
    </TX>
  );
}

function ToggleRow({
  title,
  sub,
  value,
  onChange,
}: {
  title: string;
  sub: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  const t = useTheme();
  return (
    <View
      style={{
        minHeight: 58,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(8),
        backgroundColor: t.card, ...t.cardShadow,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
    >
      <View style={{ flex: 1 }}>
        <TX font="semi" role="body">
          {title}
        </TX>
        <TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}>
          {sub}
        </TX>
      </View>
      <Toggle value={value} onChange={onChange} />
    </View>
  );
}

export default function Settings() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const s = useStore();
  const {
    premium,
    upgrade,
    planPick,
    setPlan,
    currency,
    setCurrency,
    appLang,
    setAppLang,
    region,
    setRegion,
    mode,
    setMode,
    accent,
    setAccent,
    sound: soundOn,
    setSound,
    brightBoost,
    setBrightBoost,
    alarmTime,
    setAlarm,
    clock24,
    notifs,
    setNotif,
  } = s;
  const showBanner = useUI((u) => u.showBanner);
  const [showWheel, setShowWheel] = useState(false);

  const c = CUR[currency];
  const planName = premium ? 'Première' : T.planFree;
  const planDesc = premium ? T.planPremDesc : T.planFreeDesc;
  const planBadge = premium ? 'PREMIÈRE ✓' : T.currentPlan;
  const upgradeLabel = premium ? T.subActive : T.upgrade;

  const planRows = [
    { id: 'mo' as const, name: T.monthly, price: c.mo, sub: T.perMonth, best: false },
    {
      id: 'yr' as const,
      name: T.annual,
      price: c.yrmo,
      sub: T.perYear.replace('{yr}', c.yr),
      best: true,
    },
  ];


  const doUpgrade = () => {
    if (premium) return;
    sound.play('ding');
    upgrade();
  };

  const testAlarm = () => {
    showBanner(alarmTime);
    sound.play('ding');
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} title={T.settingsT} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: insets.bottom + 60 }} showsVerticalScrollIndicator={false}>
        <TX font="serif" role="display" size={36} style={{ marginBottom: 28 }}>
          {T.settingsT}
        </TX>

        {/* ── Account & Billing ── */}
        <SectionHead label={T.accountBilling.toUpperCase()} />
        <GroupTitle>{T.subscription}</GroupTitle>

        {/* current plan card */}
        <View
          style={{
            borderRadius: 18,
            borderWidth: 1,
            borderColor: t.accA(35),
            backgroundColor: t.card, ...t.cardShadow,
            padding: 16,
            paddingHorizontal: 18,
            marginBottom: 12,
            overflow: 'hidden',
          }}
        >
          <LinearGradient
            colors={[t.accA(16), 'transparent']}
            start={{ x: 0.9, y: 0 }}
            end={{ x: 0.3, y: 0.7 }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <TX font="bold" role="eyebrow" ls={2.4} color={t.accTx} style={{ marginBottom: 6 }}>
            {planBadge}
          </TX>
          <TX font="serifI" role="display" size={22} style={{ marginBottom: 4 }}>
            {planName}
          </TX>
          <TX role="label" color={t.txMuted}>
            {planDesc}
          </TX>
        </View>

        {/* monthly / annual selector */}
        {!premium ? (
          <View style={{ gap: 10, marginBottom: 12 }}>
            {planRows.map((p) => {
              const on = planPick === p.id;
              return (
                <Press
                  key={p.id}
                  onPress={() => setPlan(p.id)}
                  scale={1}
                  style={{
                    borderRadius: 16,
                    borderWidth: 1.5,
                    borderColor: on ? t.acc : t.line(10),
                    backgroundColor: on ? t.accA(8) : t.card,
                    padding: 14,
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 13,
                  }}
                >
                  <View
                    style={{
                      width: 18,
                      minHeight: 18,
                      paddingVertical: 2,
                      borderRadius: 9,
                      borderWidth: 1.5,
                      borderColor: on ? t.acc : t.line(20),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {on ? <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: t.acc }} /> : null}
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                      <TX font="semi" role="body">
                        {p.name}
                      </TX>
                      {p.best ? (
                        <View style={{ minHeight: 18, paddingVertical: 2, paddingHorizontal: 8, borderRadius: 9, backgroundColor: t.acc, justifyContent: 'center' }}>
                          <TX font="bold" role="eyebrow" ls={1} color={t.accInk}>
                            {T.bestValue.toUpperCase()}
                          </TX>
                        </View>
                      ) : null}
                    </View>
                    <TX role="meta" color={t.txMuted} style={{ marginTop: 2 }}>
                      {p.sub}
                    </TX>
                  </View>
                  <TX font="serif" role="titleLg" size={21}>
                    {p.price}
                  </TX>
                </Press>
              );
            })}
          </View>
        ) : null}

        {/* upgrade button */}
        <Press
          onPress={doUpgrade}
          cue={null}
          style={{
            minHeight: 52,
            paddingVertical: 6,
            borderRadius: 26,
            backgroundColor: t.acc,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
          }}
        >
          <TX font="semi" role="body" color={t.accInk}>
            {upgradeLabel}
          </TX>
        </Press>

        {/* billing rows */}
        <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, ...t.cardShadow, marginBottom: 14 }}>
          <View style={{ minHeight: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: t.line(7) }}>
            <TX font="semi" role="bodySm">
              {T.billing}
            </TX>
            <TX role="label" color={t.txSubtle}>
              {T.paymentMethod} · Visa ····4212
            </TX>
          </View>
          <Press style={{ minHeight: 48, paddingVertical: 6, justifyContent: 'center', paddingHorizontal: 16 }}>
            <TX font="semi" role="bodySm" color={t.accTx}>
              {T.restore}
            </TX>
          </Press>
        </View>

        {/* currency */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, paddingHorizontal: 2 }}>
          <TX font="semi" role="bodySm">
            {T.currencyT}
          </TX>
          <TX role="meta" color={t.txSubtle}>
            {T.detected}
          </TX>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {CURRENCIES.map((cu) => {
            const on = currency === cu.id;
            return (
              <Press
                key={cu.id}
                onPress={() => setCurrency(cu.id)}
                style={{
                  minHeight: 36,
                  paddingVertical: 6,
                  paddingHorizontal: 14,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: on ? t.acc : t.line(12),
                  backgroundColor: on ? t.accA(10) : t.card,
                  justifyContent: 'center',
                }}
              >
                <TX font="semi" role="bodySm" color={on ? t.accTx : t.txSecondary}>
                  {cu.name}
                </TX>
              </Press>
            );
          })}
        </View>

        {/* downloads */}
        <Press
          onPress={() => router.push('/downloads')}
          style={{
            minHeight: 58,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.line(8),
            backgroundColor: t.card, ...t.cardShadow,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
            paddingHorizontal: 16,
            paddingVertical: 10,
            marginBottom: 32,
          }}
        >
          <Icon name="download" size={18} color={t.acc} />
          <View style={{ flex: 1 }}>
            <TX font="semi" role="body">
              {T.downloadsT}
            </TX>
            <TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}>
              {T.downloadsS}
            </TX>
          </View>
          <Icon name="chevronRight" size={14} color={t.txNonText} strokeWidth={1.6} />
        </Press>

        {/* ── Learning ── */}
        <SectionHead label={T.learningSec.toUpperCase()} />
        <GroupTitle>{T.appLangT}</GroupTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 14, marginBottom: 10 }}>
          {langs.map((lg) => {
            const on = appLang === lg.id;
            const soon = !lg.available;
            return (
              <Press key={lg.id} onPress={soon ? undefined : () => setAppLang(lg.id)} cue={soon ? null : 'tap'} style={{ alignItems: 'center', gap: 7, width: 48, opacity: soon ? 0.38 : 1 }}>
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: t.card2,
                    borderWidth: 2,
                    borderColor: on ? t.acc : t.line(18),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TX font="bold" role="titleSm" color={on ? t.accTx : t.txSecondary}>
                    {lg.ch}
                  </TX>
                </View>
                <TX font="semi" role="eyebrow" color={on ? t.accTx : t.txMuted}>
                  {soon ? T.soonT : lg.ch}
                </TX>
              </Press>
            );
          })}
        </View>
        <TX font="serifI" role="label" color={t.txSubtle} style={{ marginBottom: 16 }}>
          {T.appLangNote}
        </TX>
        <View style={{ height: 14 }} />

        <GroupTitle>{T.accentT}</GroupTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {accentData.map((a) => {
            const on = region === a.id;
            return (
              <Press
                key={a.id}
                onPress={() => setRegion(a.id)}
                style={{
                  minHeight: 36,
                  paddingVertical: 6,
                  paddingHorizontal: 16,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: on ? t.accA(60) : t.line(12),
                  backgroundColor: on ? t.accCard(8) : 'transparent',
                  justifyContent: 'center',
                }}
              >
                <TX role="bodySm" color={on ? t.accTx : t.txSecondary}>
                  {a.name}
                </TX>
              </Press>
            );
          })}
        </View>

        {/* ── Appearance ── */}
        <SectionHead label={T.appearanceSec.toUpperCase()} />
        <GroupTitle>{T.modeT}</GroupTitle>
        <View style={{ flexDirection: 'row', marginBottom: 18 }}>
          <View style={{ flexDirection: 'row', minHeight: 40, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: t.line(14), overflow: 'hidden' }}>
            {(['dark', 'light'] as const).map((m) => {
              const on = mode === m;
              return (
                <Press
                  key={m}
                  onPress={() => setMode(m)}
                  style={{
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 7,
                    backgroundColor: on ? t.acc : 'transparent',
                  }}
                >
                  <Icon name={m === 'dark' ? 'moon' : 'sun'} size={13} color={on ? t.accInk : t.txNonText} />
                  <TX font="bold" role="meta" ls={1.2} color={on ? t.accInk : t.txMuted}>
                    {m === 'dark' ? T.modeDark : T.modeLight}
                  </TX>
                </Press>
              );
            })}
          </View>
        </View>

        {/* theme accent swatches */}
        <View style={{ flexDirection: 'row', gap: 14, marginBottom: 14 }}>
          {ACCENTS.map((th) => {
            const on = accent === th.c;
            return (
              <Press key={th.c} onPress={() => setAccent(th.c)} style={{ alignItems: 'center', gap: 8 }}>
                <View
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 21,
                    backgroundColor: th.c,
                    borderWidth: on ? 2 : 1,
                    borderColor: on ? th.c : t.line(12),
                  }}
                />
                <TX font="semi" role="meta" color={on ? t.accTx : t.txMuted}>
                  {th.n}
                </TX>
              </Press>
            );
          })}
        </View>

        {/* reading brightness */}
        <View style={{ marginBottom: 10 }}>
          <ToggleRow title={T.brightT} sub={T.brightS} value={brightBoost} onChange={setBrightBoost} />
        </View>

        {/* sound effects */}
        <View style={{ marginBottom: 28 }}>
          <ToggleRow title={T.soundT} sub={T.soundS} value={soundOn} onChange={setSound} />
        </View>

        {/* ── Notifications ── */}
        <SectionHead label={T.notificationsSec.toUpperCase()} />
        <GroupTitle>{T.reminders}</GroupTitle>

        {/* alarm card */}
        <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, ...t.cardShadow, padding: 16, marginBottom: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <View>
              <TX font="semi" role="body">
                {T.dailyAlarm}
              </TX>
              <TX role="label" color={t.txSubtle} style={{ marginTop: 2 }}>
                {T.customTime}
              </TX>
            </View>
            <Press
              onPress={() => setShowWheel((v) => !v)}
              style={{
                minHeight: 42,
                paddingVertical: 6,
                minWidth: 78,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: showWheel ? t.accA(60) : t.accA(45),
                backgroundColor: t.input,
                paddingHorizontal: 12,
              }}
            >
              <TX font="serif" role="title" color={t.accTx}>
                {formatTime(alarmTime, clock24)}
              </TX>
              <Icon name="clock" size={15} color={t.acc} />
            </Press>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 12 }}>
            <ClockToggle />
          </View>
          {showWheel ? <TimeWheel value={alarmTime} onChange={setAlarm} /> : null}
          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 12 }}>
            {alarmData.map((chip) => {
              const on = alarmTime === chip.time;
              return (
                <Press
                  key={chip.time}
                  onPress={() => setAlarm(chip.time)}
                  style={{
                    flex: 1,
                    minHeight: 36,
                    paddingVertical: 6,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: on ? t.accA(60) : t.line(10),
                    backgroundColor: on ? t.accA(10) : 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TX font="semi" role="label" color={on ? t.accTx : t.txSecondary}>
                    {formatTime(chip.time, clock24)}
                  </TX>
                </Press>
              );
            })}
          </View>
          <Press
            onPress={testAlarm}
            cue={null}
            style={{
              minHeight: 42,
              paddingVertical: 6,
              borderRadius: 21,
              borderWidth: 1,
              borderColor: t.accA(55),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TX font="semi" role="label" color={t.accTx}>
              {T.testAlarm}
            </TX>
          </Press>
        </View>

        {/* notif toggles */}
        <View style={{ gap: 10, marginBottom: 32 }}>
          {NOTIF_KEYS.map((k, i) => (
            <ToggleRow
              key={k}
              title={T.notifLabels[i].label}
              sub={T.notifLabels[i].sub}
              value={notifs[k]}
              onChange={(v) => setNotif(k, v)}
            />
          ))}
        </View>

        {/* ── Danger zone ──
            Account deletion must be reachable in-app (Apple 5.1.1(v), Play).
            It lives last, in its own section, and routes to a confirm screen —
            findable, but never a stray tap. */}
        <SectionHead label={T.dangerZone.toUpperCase()} />
        <Press
          onPress={() => router.push('/delete-account')}
          accessibilityRole="button"
          accessibilityLabel={T.delAccount}
          style={{
            minHeight: 58,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.dangerA(28),
            backgroundColor: t.card,
            ...t.cardShadow,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
            paddingHorizontal: 16,
            paddingVertical: 10,
            marginBottom: 24,
          }}
        >
          <Icon name="trash" size={18} color={t.danger} />
          <View style={{ flex: 1 }}>
            <TX font="semi" role="body" color={t.danger}>
              {T.delAccount}
            </TX>
            <TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}>
              {T.delAccountSub}
            </TX>
          </View>
          <Icon name="chevronRight" size={14} color={t.txNonText} strokeWidth={1.6} />
        </Press>
      </ScrollView>
    </View>
  );
}
