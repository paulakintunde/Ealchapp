import { useEffect, useRef, useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Button, Toggle } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { RadialGlow } from '@/components/RadialGlow';
import { TimeWheel, ClockToggle } from '@/components/TimeWheel';
import { formatTime } from '@/utils/time';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { ACCENTS } from '@/theme/palette';
import { langs } from '@/content';
import { auth, sound, stt, type SttResult } from '@/services';
import { AUTH_UNAVAILABLE } from '@/services/auth';
import { FLAGS } from '@/services/flags';
import { PasswordField, LegalConsent } from '@/components/AuthFields';
import {
  goalsData,
  expData,
  paceData,
  accentData,
  alarmData,
  isBeginnerExp,
} from '@/content/onboarding';

function SelectRow({
  active,
  title,
  sub,
  onPress,
}: {
  active: boolean;
  title: string;
  sub: string;
  onPress: () => void;
}) {
  const t = useTheme();
  return (
    <Press
      onPress={onPress}
      scale={0.99}
      style={{
        minHeight: 64,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: active ? t.accA(60) : t.line(9),
        backgroundColor: active ? t.accCard(8) : t.card, ...t.cardShadow,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        paddingHorizontal: 18,
        paddingVertical: 12,
      }}
    >
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: active ? t.acc : t.line(18) }} />
      <View style={{ flex: 1 }}>
        <TX font="semi" role="bodyLg">
          {title}
        </TX>
        <TX role="label" color={t.txMuted} style={{ marginTop: 2 }}>
          {sub}
        </TX>
      </View>
    </Press>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Onboarding() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const s = useStore();
  const [step, setStep] = useState(0);
  const [calib, setCalib] = useState<'idle' | 'rec' | 'done'>('idle');
  const [calibPartial, setCalibPartial] = useState('');
  const [calibHeard, setCalibHeard] = useState<SttResult | null>(null);
  const [showWheel, setShowWheel] = useState(false);
  const [password, setPassword] = useState('');
  const [acctErr, setAcctErr] = useState<string | null>(null);
  const [acctPending, setAcctPending] = useState(false);

  // Async callbacks (signup, calibration) must not advance the wizard after
  // unmount or after the user navigated away from the step that started them.
  const mounted = useRef(true);
  const stepRef = useRef(step);
  stepRef.current = step;
  useEffect(() => () => { mounted.current = false; }, []);

  const LABELS = ['', ...T.obSteps];

  const oauthStyle = {
    height: 52,
    backgroundColor: t.card, ...t.cardShadow,
    shadowColor: '#000',
    shadowOpacity: t.isDark ? 0.32 : 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  } as const;

  const next = () => {
    sound.play('tap');
    setStep((x) => Math.min(10, x + 1));
  };
  const back = () => {
    sound.play('tap');
    if (step === 0) return;
    setStep((x) => Math.max(0, x - 1));
  };

  // Step 8 "Enable reminders": the contextual permission moment. Advance
  // regardless of the answer — denial flips the daily toggle via the store.
  const enableReminders = async () => {
    if (s.notifs.daily) await s.enableDailyReminder();
    next();
  };

  const beginner = isBeginnerExp(s.exp);
  const level = beginner ? 'A1' : 'B1';

  // The exact sentence the mic check listens for (guillemets are display-only).
  const calibPhrase = s.userName.trim()
    ? `Bonjour, je m'appelle ${s.userName.trim()} et j'apprends le français depuis longtemps.`
    : "Bonjour, j'apprends le français depuis longtemps.";

  const finish = () => {
    sound.play('ding');
    if (s.accountType === 'email' && s.userName.trim()) {
      void auth.updateDisplayName(s.userName.trim());
    }
    s.completeOnboarding(level);
    router.replace('/splash');
  };

  const submitAccount = async () => {
    if (acctPending) return;
    const email = s.email.trim();
    if (!EMAIL_RE.test(email)) {
      sound.play('error');
      setAcctErr(T.errEmail);
      return;
    }
    if (password.length < 8) {
      sound.play('error');
      setAcctErr(T.errPw);
      return;
    }
    setAcctErr(null);
    setAcctPending(true);
    const res = await auth.signUpWithEmail(email, password);
    if (!mounted.current || stepRef.current !== 1) return;
    setAcctPending(false);
    if (!res.ok) {
      sound.play('error');
      setAcctErr(res.error === AUTH_UNAVAILABLE ? T.errAuthUnavailable : (res.error ?? T.errSignUp));
      return;
    }
    s.setField('email', res.email ?? email);
    s.setField('accountType', 'email');
    next();
  };

  const continueAsGuest = () => {
    setAcctErr(null);
    s.setField('accountType', 'guest');
    next();
  };

  const submitName = () => {
    s.setField('userName', s.userName.trim());
    next();
  };

  const skipName = () => {
    s.setField('userName', '');
    next();
  };

  // The mic check. It records for real: the phrase on screen is the target, and
  // what the recognizer heard is shown back. It does NOT set the level — that
  // comes from the experience question at step 5 — so this screen no longer
  // implies an assessment it isn't making.
  const doCalib = async () => {
    if (calib === 'rec') {
      stt.stop();
      return;
    }
    sound.play('tap');
    setCalibPartial('');
    setCalibHeard(null);
    setCalib('rec');

    const res = await stt.listen(calibPhrase, {
      maxMs: 10000,
      onPartial: setCalibPartial,
    });

    if (!mounted.current || stepRef.current !== 9) return;
    setCalibPartial('');
    setCalibHeard(res);
    setCalib('done');
    sound.play(res.ok ? 'success' : 'flip');
  };

  const showHead = step >= 1 && step <= 9;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <RadialGlow color={t.acc} opacity={0.11} height={320} />

      {showHead ? (
        <View style={{ paddingTop: insets.top + 14, paddingHorizontal: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <Press onPress={back} style={{ width: 38, height: 38, marginLeft: -10, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="chevronLeft" size={20} color={t.txNonText} />
            </Press>
            <View style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: t.line(10) }}>
              <View style={{ height: 3, borderRadius: 2, backgroundColor: t.acc, width: `${(step / 10) * 100}%` }} />
            </View>
            <TX role="meta" color={t.txSubtle} style={{ minWidth: 34, textAlign: 'right' }}>
              {step}/10
            </TX>
          </View>
        </View>
      ) : null}

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 28, paddingBottom: insets.bottom + 40 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* 0 · Welcome */}
        {step === 0 ? (
          <View style={{ flex: 1, justifyContent: 'flex-end', paddingTop: insets.top + 120 }}>
            <TX font="semi" role="meta" ls={6} color={t.accTx} style={{ marginBottom: 18 }}>
              EALCH
            </TX>
            <TX font="serifI" role="display" size={52} style={{ marginBottom: 18, letterSpacing: -0.5 }}>
              {T.obTagline}
            </TX>
            <TX role="bodyLg" color={t.txSecondary} style={{ maxWidth: 300, marginBottom: 40 }}>
              {T.obIntro}
            </TX>
            <Button label={T.createAccount} onPress={next} />
            <Press onPress={() => router.push('/signin')} style={{ alignItems: 'center', marginTop: 18 }}>
              <TX role="bodySm" color={t.txMuted}>
                {T.alreadyAccount} <TX font="semi" role="bodySm" color={t.accTx}>{T.signInLink}</TX>
              </TX>
            </Press>
          </View>
        ) : null}

        {/* 1 · Account */}
        {step === 1 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[1]}</StepLabel>
            <TX font="serif" role="display" size={34} style={{ marginBottom: 26 }}>
              {T.obCreateT}
            </TX>
            <Field placeholder={T.emailPh} value={s.email} onChangeText={(v) => s.setField('email', v)} keyboardType="email-address" autoCapitalize="none" />
            <PasswordField placeholder={T.passwordPh} value={password} onChangeText={setPassword} onSubmitEditing={() => void submitAccount()} />
            {acctErr ? (
              <TX role="label" color={t.danger} style={{ marginTop: 2, marginBottom: 10 }}>
                {acctErr}
              </TX>
            ) : null}
            <Button label={T.continueT} onPress={submitAccount} disabled={acctPending} style={{ height: 54, marginTop: 6 }} />
            {/* Consent is disclosed at the moment of account creation. */}
            <LegalConsent />
            <Press onPress={continueAsGuest} style={{ alignItems: 'center', marginTop: 18 }}>
              <TX font="semi" role="bodySm" color={t.accTx}>
                {T.continueGuest}
              </TX>
            </Press>
            {FLAGS.oauth ? (
              <>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginVertical: 22 }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
                  <TX role="meta" ls={3} color={t.txSubtle}>
                    {T.orT}
                  </TX>
                  <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
                </View>
                <Button label={T.withApple} icon="apple" variant="outline" onPress={next} style={[oauthStyle, { marginBottom: 10 }]} />
                <Button label={T.withGoogle} icon="google" variant="outline" onPress={next} style={oauthStyle} />
              </>
            ) : null}
          </View>
        ) : null}

        {/* 2 · Name (optional) */}
        {step === 2 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[2]}</StepLabel>
            <TX font="serif" role="display" size={34} style={{ marginBottom: 10 }}>
              {T.obNameT}
            </TX>
            <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 26 }}>
              {T.obNameS}
            </TX>
            <Field
              placeholder={T.namePh}
              value={s.userName}
              onChangeText={(v) => s.setField('userName', v)}
              autoCapitalize="words"
              maxLength={30}
            />
            <Button label={T.continueT} onPress={submitName} style={{ height: 54, marginTop: 6 }} />
            <Press onPress={skipName} style={{ alignItems: 'center', marginTop: 18 }}>
              <TX font="semi" role="bodySm" color={t.txMuted}>
                {T.skipT}
              </TX>
            </Press>
          </View>
        ) : null}

        {/* 3 · Theme */}
        {step === 3 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[3]}</StepLabel>
            <TX font="serif" role="display" size={34} style={{ marginBottom: 10 }}>
              {T.obThemeT}
            </TX>
            <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 26 }}>
              {T.obThemeS}
            </TX>
            <View style={{ flexDirection: 'row', gap: 16, justifyContent: 'center', marginBottom: 26 }}>
              {ACCENTS.map((a) => {
                const on = s.accent === a.c;
                return (
                  <Press key={a.c} onPress={() => s.setAccent(a.c)} style={{ alignItems: 'center', gap: 9 }}>
                    <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: a.c, borderWidth: on ? 3 : 0, borderColor: t.bg, ...(on ? { shadowColor: a.c, shadowOpacity: 0.9, shadowRadius: 8, elevation: 6 } : {}) }} />
                    <TX font="semi" role="meta" color={on ? t.txPrimary : t.txSubtle}>
                      {a.n}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 24 }}>
              <View style={{ flexDirection: 'row', minHeight: 40, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: t.line(14), overflow: 'hidden' }}>
                {(['dark', 'light'] as const).map((m) => {
                  const on = s.mode === m;
                  return (
                    <Press key={m} onPress={() => s.setMode(m)} style={{ paddingHorizontal: 22, flexDirection: 'row', alignItems: 'center', gap: 7, backgroundColor: on ? t.acc : 'transparent' }}>
                      <Icon name={m === 'dark' ? 'moon' : 'sun'} size={13} color={on ? t.accInk : t.txNonText} />
                      <TX font="bold" role="meta" ls={1.4} color={on ? t.accInk : t.txSecondary}>
                        {m === 'dark' ? T.modeDark : T.modeLight}
                      </TX>
                    </Press>
                  );
                })}
              </View>
            </View>
            <TX font="semi" role="meta" ls={2.6} color={t.txSubtle} style={{ marginBottom: 14 }}>
              {T.appLangT}
            </TX>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              {langs.map((lg) => {
                const on = s.appLang === lg.id;
                const soon = !lg.available;
                return (
                  <Press key={lg.id} onPress={soon ? undefined : () => s.setAppLang(lg.id)} cue={soon ? null : 'tap'} style={{ alignItems: 'center', gap: 6, width: 52, opacity: soon ? 0.38 : 1 }}>
                    <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: t.card2, alignItems: 'center', justifyContent: 'center', borderWidth: on ? 2 : 0, borderColor: t.acc }}>
                      <TX font="bold" role="bodyLg" color={on ? t.accTx : t.txSecondary}>
                        {lg.ch}
                      </TX>
                    </View>
                    <TX font="semi" role="eyebrow" color={on ? t.txPrimary : t.txSubtle}>
                      {soon ? T.soonT : lg.name}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <Button label={T.continueT} onPress={next} style={{ marginTop: 'auto' }} />
          </View>
        ) : null}

        {/* 4 · Goal */}
        {step === 4 ? (
          <StepList label={LABELS[4]} title={T.obGoalT}>
            {goalsData.map((g) => (
              <SelectRow key={g.id} active={s.goal === g.id} title={g.title} sub={g.sub} onPress={() => s.setField('goal', g.id)} />
            ))}
            <Button label={T.continueT} onPress={next} style={{ marginTop: 12 }} />
          </StepList>
        ) : null}

        {/* 5 · Experience */}
        {step === 5 ? (
          <StepList label={LABELS[5]} title={T.obExpT}>
            {expData.map((x, i) => (
              <SelectRow key={x.id} active={s.exp === x.id} title={T.expTitles[i] ?? x.title} sub={T.expSubs[i] ?? x.sub} onPress={() => s.setField('exp', x.id)} />
            ))}
            <Button label={T.continueT} onPress={next} style={{ marginTop: 12 }} />
          </StepList>
        ) : null}

        {/* 6 · Pace */}
        {step === 6 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[6]}</StepLabel>
            <TX font="serif" role="display" size={34} style={{ marginBottom: 26 }}>
              {T.obPaceT}
            </TX>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {paceData.map((p, i) => {
                const on = s.pace === p.id;
                return (
                  <Press
                    key={p.id}
                    onPress={() => s.setField('pace', p.id)}
                    style={{ width: '47%', minHeight: 104, paddingVertical: 8, borderRadius: 18, borderWidth: 1, borderColor: on ? t.accA(60) : t.line(9), backgroundColor: on ? t.accCard(8) : t.card, ...t.cardShadow, justifyContent: 'center', paddingHorizontal: 18 }}
                  >
                    <TX font="serif" role="display" size={30} color={t.accTx}>
                      {p.v}
                    </TX>
                    <TX font="serifI" role="label" color={t.txMuted} style={{ marginTop: 4 }}>
                      {T.paceSubs[i] ?? p.s}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <Button label={T.continueT} onPress={next} style={{ marginTop: 'auto' }} />
          </View>
        ) : null}

        {/* 7 · Accent */}
        {step === 7 ? (
          <StepList label={LABELS[7]} title={T.obAccentT}>
            {accentData.map((a) => (
              <SelectRow key={a.id} active={s.region === a.id} title={a.name} sub={a.sub} onPress={() => s.setRegion(a.id)} />
            ))}
            <Button label={T.continueT} onPress={next} style={{ marginTop: 12 }} />
          </StepList>
        ) : null}

        {/* 8 · Practice alarm */}
        {step === 8 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[8]}</StepLabel>
            <TX font="serif" role="display" size={34} style={{ marginBottom: 10 }}>
              {T.obRemindT}
            </TX>
            <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 16 }}>
              {T.obRemindS}
            </TX>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 12 }}>
              <ClockToggle />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
              {alarmData.map((c, i) => {
                const on = s.alarmTime === c.time;
                return (
                  <Press
                    key={c.time}
                    onPress={() => s.setAlarm(c.time)}
                    style={{ width: '47%', minHeight: 58, paddingVertical: 6, borderRadius: 16, borderWidth: 1, borderColor: on ? t.accA(60) : t.line(9), backgroundColor: on ? t.accCard(8) : t.card, ...t.cardShadow, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <TX font="serif" role="titleLg" size={21} color={on ? t.accTx : t.txPrimary}>
                      {formatTime(c.time, s.clock24)}
                    </TX>
                    <TX role="meta" color={t.txSubtle}>
                      {T.alarmChips[i] ?? c.label}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <View style={{ borderRadius: 16, borderWidth: 1, borderColor: showWheel ? t.accA(60) : t.line(9), backgroundColor: t.card, ...t.cardShadow, marginBottom: 22 }}>
              <Press onPress={() => setShowWheel((v) => !v)} style={{ minHeight: 58, flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16 }}>
                <View style={{ flex: 1 }}>
                  <TX font="semi" role="body">
                    {T.customTime}
                  </TX>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, minHeight: 36, paddingVertical: 6, paddingHorizontal: 14, borderRadius: 10, borderWidth: 1, borderColor: t.accA(40) }}>
                  <TX font="serif" role="title" color={t.accTx}>
                    {formatTime(s.alarmTime, s.clock24)}
                  </TX>
                  <Icon name="clock" size={15} color={t.acc} />
                </View>
              </Press>
              {showWheel ? <TimeWheel value={s.alarmTime} onChange={s.setAlarm} /> : null}
            </View>
            <View style={{ gap: 10, marginBottom: 20 }}>
              {T.notifLabels.map((n, i) => {
                const key = (['daily', 'report', 'nudge'] as const)[i];
                return (
                  <View key={i} style={{ minHeight: 58, borderRadius: 16, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, ...t.cardShadow, flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 8 }}>
                    <View style={{ flex: 1 }}>
                      <TX font="semi" role="body">
                        {n.label}
                      </TX>
                      <TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}>
                        {n.sub}
                      </TX>
                    </View>
                    <Toggle value={s.notifs[key]} onChange={(v) => s.setNotif(key, v)} />
                  </View>
                );
              })}
            </View>
            <Button label={T.enableReminders} onPress={() => void enableReminders()} style={{ marginTop: 'auto' }} />
          </View>
        ) : null}

        {/* 9 · Calibration */}
        {step === 9 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[9]}</StepLabel>
            <TX font="serif" role="display" size={34} style={{ marginBottom: 10 }}>
              {T.obCalibT}
            </TX>
            <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 30 }}>
              {T.obCalibS}
            </TX>
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.input, padding: 26, marginBottom: 30 }}>
              <TX font="serifI" role="display" size={24} lhMult={1.375}>
                « {calibPhrase} »
              </TX>
            </View>
            <View style={{ alignItems: 'center', marginBottom: 26 }}>
              <Waveform count={30} height={38} color={calib === 'rec' ? t.acc : t.txNonText} active={calib === 'rec'} barWidth={3} gap={4} />
            </View>

            {/* What the recognizer heard. Empty until it hears something — this
                screen never claims to have understood speech it didn't get. */}
            {calib === 'done' && calibHeard ? (
              <View style={{ marginBottom: 22, paddingHorizontal: 4 }}>
                {calibHeard.ok ? (
                  <>
                    <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle} style={{ marginBottom: 6 }}>
                      {T.micHeard} · {Math.round(calibHeard.score * 100)}%
                    </TX>
                    <TX font="serifI" role="title" color={t.txPrimary}>
                      « {calibHeard.transcript} »
                    </TX>
                  </>
                ) : (
                  <TX role="bodySm" color={t.txMuted}>
                    {calibHeard.error === 'not-allowed'
                      ? T.micDenied
                      : !calibHeard.available
                        ? T.micUnavail
                        : T.micNoSpeech}
                  </TX>
                )}
              </View>
            ) : null}

            <View style={{ alignItems: 'center', gap: 16 }}>
              <Press
                onPress={() => void doCalib()}
                cue={null}
                style={{ width: 76, height: 76, borderRadius: 38, alignItems: 'center', justifyContent: 'center', backgroundColor: calib === 'rec' ? t.acc : 'transparent', borderWidth: 1, borderColor: calib === 'rec' ? t.acc : t.line(22) }}
              >
                <Icon name="mic" size={26} color={calib === 'rec' ? t.accInk : t.tx} />
              </Press>
              <TX role="label" ls={1.4} color={t.txMuted} center style={{ textTransform: 'uppercase' }}>
                {calib === 'rec' ? calibPartial || T.obCalibRec : T.obCalibTap}
              </TX>
            </View>

            {/* The mic check gates nothing — it can always be skipped. */}
            <Button
              label={calib === 'done' ? T.continueT : T.skipT}
              variant={calib === 'done' ? 'primary' : 'outline'}
              onPress={() => setStep(10)}
              style={{ marginTop: 'auto' }}
            />
          </View>
        ) : null}

        {/* 10 · Result */}
        {step === 10 ? (
          <View style={{ flex: 1, justifyContent: 'center', paddingTop: insets.top }}>
            <TX font="semi" role="meta" ls={2.8} color={t.txSubtle} style={{ marginBottom: 16 }}>
              {LABELS[10]}
            </TX>
            <TX font="serif" role="display" size={74} color={t.accTx}>
              {level}
            </TX>
            <TX font="serifI" role="display" size={28} style={{ marginTop: 6, marginBottom: 22 }}>
              {beginner ? T.obDecouverte : T.obSeuil}
            </TX>
            <TX role="bodyLg" lhMult={1.6} color={t.txSecondary} style={{ maxWidth: 310, marginBottom: 44 }}>
              {beginner ? T.obResultA1 : T.obResultB1}
            </TX>
            <Button label={T.enterEalch} onPress={finish} />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

function StepLabel({ children }: { children: string }) {
  const t = useTheme();
  return (
    <TX font="semi" role="meta" ls={2.8} color={t.txSubtle} style={{ marginBottom: 12 }}>
      {children}
    </TX>
  );
}

function StepList({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <View style={{ flex: 1, paddingTop: 8 }}>
      <StepLabel>{label}</StepLabel>
      <SerifTitle>{title}</SerifTitle>
      <View style={{ gap: 12, marginTop: 26 }}>{children}</View>
    </View>
  );
}

function SerifTitle({ children }: { children: string }) {
  return (
    <TX font="serif" role="display" size={34}>
      {children}
    </TX>
  );
}

function Field(props: React.ComponentProps<typeof TextInput> & { placeholder: string }) {
  const t = useTheme();
  return (
    <TextInput
      {...props}
      placeholderTextColor={t.txSubtle}
      style={{
        height: 52,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(12),
        backgroundColor: t.input,
        color: t.tx,
        paddingHorizontal: 18,
        fontSize: 14.5,
        fontFamily: 'InstrumentSans',
        marginBottom: 10,
      }}
    />
  );
}
