import { useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Button, Toggle } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { ACCENTS } from '@/theme/palette';
import { langs } from '@/content';
import { sound, stt } from '@/services';
import {
  goalsData,
  expData,
  paceData,
  accentData,
  alarmData,
  isBeginnerExp,
} from '@/content/onboarding';

const LABELS = ['', '01 — VOTRE COMPTE', '02 — VOTRE THÈME', '03 — VOTRE OBJECTIF', '04 — VOTRE EXPÉRIENCE', '05 — VOTRE RYTHME', '06 — VOTRE ACCENT', '07 — VOS RAPPELS', '08 — CALIBRATION', '09 — VOTRE NIVEAU'];

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
        backgroundColor: active ? t.accCard(8) : t.card,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        paddingHorizontal: 18,
        paddingVertical: 12,
      }}
    >
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: active ? t.acc : t.line(18) }} />
      <View style={{ flex: 1 }}>
        <TX font="semi" size={15}>
          {title}
        </TX>
        <TX size={12} color={t.txA(50)} style={{ marginTop: 2 }}>
          {sub}
        </TX>
      </View>
    </Press>
  );
}

export default function Onboarding() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const s = useStore();
  const [step, setStep] = useState(0);
  const [calib, setCalib] = useState<'idle' | 'rec' | 'done'>('idle');

  const next = () => {
    sound.play('tap');
    setStep((x) => Math.min(9, x + 1));
  };
  const back = () => {
    sound.play('tap');
    if (step === 0) return;
    setStep((x) => Math.max(0, x - 1));
  };

  const beginner = isBeginnerExp(s.exp);
  const level = beginner ? 'A1' : 'B1';

  const finish = () => {
    sound.play('ding');
    s.completeOnboarding(level);
    router.replace('/splash');
  };

  const doCalib = () => {
    if (calib === 'rec') return;
    sound.play('tap');
    setCalib('rec');
    stt.listen(s.userName, { durationMs: 2600 }).then(() => {
      setCalib('done');
      setStep(9);
    });
  };

  const showHead = step >= 1 && step <= 8;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300, backgroundColor: t.accA(8) }} />

      {showHead ? (
        <View style={{ paddingTop: insets.top + 14, paddingHorizontal: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <Press onPress={back} style={{ width: 38, height: 38, marginLeft: -10, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="chevronLeft" size={20} color={t.txA(70)} />
            </Press>
            <View style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: t.line(10) }}>
              <View style={{ height: 3, borderRadius: 2, backgroundColor: t.acc, width: `${(step / 9) * 100}%` }} />
            </View>
            <TX size={11} color={t.txA(40)} style={{ minWidth: 34, textAlign: 'right' }}>
              {step}/9
            </TX>
          </View>
        </View>
      ) : null}

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 28, paddingBottom: insets.bottom + 40 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* 0 · Welcome */}
        {step === 0 ? (
          <View style={{ flex: 1, justifyContent: 'flex-end', paddingTop: insets.top + 120 }}>
            <TX font="semi" size={11} ls={6} color={t.acc} style={{ marginBottom: 18 }}>
              EALCH
            </TX>
            <TX font="serifI" size={52} lh={54} style={{ marginBottom: 18, letterSpacing: -0.5 }}>
              Parlez avec élégance.
            </TX>
            <TX size={15} lh={23} color={t.txA(60)} style={{ maxWidth: 300, marginBottom: 40 }}>
              An AI voice coach for the French you'll actually speak — cafés, landlords, examiners.
            </TX>
            <Button label="Créer un compte" onPress={next} />
            <Press onPress={() => router.push('/signin')} style={{ alignItems: 'center', marginTop: 18 }}>
              <TX size={13.5} color={t.txA(55)}>
                Se connecter — <TX font="semi" size={13.5} color={t.acc}>I already have an account</TX>
              </TX>
            </Press>
          </View>
        ) : null}

        {/* 1 · Account */}
        {step === 1 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[1]}</StepLabel>
            <TX font="serif" size={34} lh={38} style={{ marginBottom: 26 }}>
              Créez votre compte.
            </TX>
            <Field placeholder="Email" value={s.email} onChangeText={(v) => s.setField('email', v)} keyboardType="email-address" />
            <Field placeholder="Mot de passe" secureTextEntry />
            <Button label="Continuer" onPress={next} style={{ height: 54, marginTop: 6 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginVertical: 22 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
              <TX size={11} ls={3} color={t.txA(40)}>
                OU
              </TX>
              <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
            </View>
            <Button label="Continuer avec Apple" variant="outline" onPress={next} style={{ height: 52, marginBottom: 10 }} />
            <Button label="Continuer avec Google" variant="outline" onPress={next} style={{ height: 52 }} />
          </View>
        ) : null}

        {/* 2 · Theme (moved to step 2 per request) */}
        {step === 2 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[2]}</StepLabel>
            <TX font="serif" size={34} lh={38} style={{ marginBottom: 10 }}>
              Choose your{'\n'}signature color.
            </TX>
            <TX size={13} color={t.txA(50)} style={{ marginBottom: 26 }}>
              One vibrant thread through the dark. Change it anytime in your profile.
            </TX>
            <View style={{ flexDirection: 'row', gap: 16, justifyContent: 'center', marginBottom: 26 }}>
              {ACCENTS.map((a) => {
                const on = s.accent === a.c;
                return (
                  <Press key={a.c} onPress={() => s.setAccent(a.c)} style={{ alignItems: 'center', gap: 9 }}>
                    <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: a.c, borderWidth: on ? 3 : 0, borderColor: t.bg, ...(on ? { shadowColor: a.c, shadowOpacity: 0.9, shadowRadius: 8, elevation: 6 } : {}) }} />
                    <TX font="semi" size={11} color={on ? t.tx : t.txA(45)}>
                      {a.n}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 24 }}>
              <View style={{ flexDirection: 'row', height: 40, borderRadius: 20, borderWidth: 1, borderColor: t.line(14), overflow: 'hidden' }}>
                {(['dark', 'light'] as const).map((m) => {
                  const on = s.mode === m;
                  return (
                    <Press key={m} onPress={() => s.setMode(m)} style={{ paddingHorizontal: 22, flexDirection: 'row', alignItems: 'center', gap: 7, backgroundColor: on ? t.acc : 'transparent' }}>
                      <Icon name={m === 'dark' ? 'moon' : 'sun'} size={13} color={on ? t.accInk : t.txA(60)} />
                      <TX font="bold" size={11} ls={1.4} color={on ? t.accInk : t.txA(60)}>
                        {m === 'dark' ? T.modeDark : T.modeLight}
                      </TX>
                    </Press>
                  );
                })}
              </View>
            </View>
            <TX font="semi" size={10} ls={2.6} color={t.txA(45)} style={{ marginBottom: 14 }}>
              {T.appLangT}
            </TX>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              {langs.map((lg) => {
                const on = s.appLang === lg.id;
                return (
                  <Press key={lg.id} onPress={() => s.setAppLang(lg.id)} style={{ alignItems: 'center', gap: 6, width: 52 }}>
                    <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: t.card2, alignItems: 'center', justifyContent: 'center', borderWidth: on ? 2 : 0, borderColor: t.acc }}>
                      <TX font="bold" size={15} color={on ? t.acc : t.txA(70)}>
                        {lg.ch}
                      </TX>
                    </View>
                    <TX font="semi" size={9} color={on ? t.tx : t.txA(45)}>
                      {lg.name}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <Button label="Continuer" onPress={next} style={{ marginTop: 'auto' }} />
          </View>
        ) : null}

        {/* 3 · Goal */}
        {step === 3 ? (
          <StepList label={LABELS[3]} title="Why French?">
            {goalsData.map((g) => (
              <SelectRow key={g.id} active={s.goal === g.id} title={g.title} sub={g.sub} onPress={() => s.setField('goal', g.id)} />
            ))}
            <Button label="Continuer" onPress={next} style={{ marginTop: 12 }} />
          </StepList>
        ) : null}

        {/* 4 · Experience */}
        {step === 4 ? (
          <StepList label={LABELS[4]} title={'How much French\nlives in you already?'}>
            {expData.map((x) => (
              <SelectRow key={x.id} active={s.exp === x.id} title={x.title} sub={x.sub} onPress={() => s.setField('exp', x.id)} />
            ))}
            <Button label="Continuer" onPress={next} style={{ marginTop: 12 }} />
          </StepList>
        ) : null}

        {/* 5 · Pace */}
        {step === 5 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[5]}</StepLabel>
            <TX font="serif" size={34} lh={38} style={{ marginBottom: 26 }}>
              Minutes per day?
            </TX>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {paceData.map((p) => {
                const on = s.pace === p.id;
                return (
                  <Press
                    key={p.id}
                    onPress={() => s.setField('pace', p.id)}
                    style={{ width: '47%', height: 104, borderRadius: 18, borderWidth: 1, borderColor: on ? t.accA(60) : t.line(9), backgroundColor: on ? t.accCard(8) : t.card, justifyContent: 'center', paddingHorizontal: 18 }}
                  >
                    <TX font="serif" size={30} color={t.acc}>
                      {p.v}
                    </TX>
                    <TX font="serifI" size={12} color={t.txA(50)} style={{ marginTop: 4 }}>
                      {p.s}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <Button label="Continuer" onPress={next} style={{ marginTop: 'auto' }} />
          </View>
        ) : null}

        {/* 6 · Accent */}
        {step === 6 ? (
          <StepList label={LABELS[6]} title={'Which French\nshould Camille speak?'}>
            {accentData.map((a) => (
              <SelectRow key={a.id} active={s.region === a.id} title={a.name} sub={a.sub} onPress={() => s.setRegion(a.id)} />
            ))}
            <Button label="Continuer" onPress={next} style={{ marginTop: 12 }} />
          </StepList>
        ) : null}

        {/* 7 · Practice alarm */}
        {step === 7 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[7]}</StepLabel>
            <TX font="serif" size={34} lh={38} style={{ marginBottom: 10 }}>
              When should we{'\n'}call you to practice?
            </TX>
            <TX size={13} color={t.txA(50)} style={{ marginBottom: 24 }}>
              A daily alarm keeps the streak invisible — and the habit real.
            </TX>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 22 }}>
              {alarmData.map((c) => {
                const on = s.alarmTime === c.time;
                return (
                  <Press
                    key={c.time}
                    onPress={() => s.setAlarm(c.time)}
                    style={{ width: '47%', height: 58, borderRadius: 16, borderWidth: 1, borderColor: on ? t.accA(60) : t.line(9), backgroundColor: on ? t.accCard(8) : t.card, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <TX font="serif" size={20} color={on ? t.acc : t.tx}>
                      {c.time}
                    </TX>
                    <TX size={10} color={t.txA(45)}>
                      {c.label}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <View style={{ gap: 10, marginBottom: 20 }}>
              {T.notifLabels.map((n, i) => {
                const key = (['daily', 'report', 'nudge'] as const)[i];
                return (
                  <View key={i} style={{ minHeight: 58, borderRadius: 16, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 8 }}>
                    <View style={{ flex: 1 }}>
                      <TX font="semi" size={14}>
                        {n.label}
                      </TX>
                      <TX size={11.5} color={t.txA(45)} style={{ marginTop: 1 }}>
                        {n.sub}
                      </TX>
                    </View>
                    <Toggle value={s.notifs[key]} onChange={(v) => s.setNotif(key, v)} />
                  </View>
                );
              })}
            </View>
            <Button label="Activer les rappels" onPress={next} style={{ marginTop: 'auto' }} />
          </View>
        ) : null}

        {/* 8 · Calibration */}
        {step === 8 ? (
          <View style={{ flex: 1, paddingTop: 8 }}>
            <StepLabel>{LABELS[8]}</StepLabel>
            <TX font="serif" size={34} lh={38} style={{ marginBottom: 10 }}>
              Read this aloud.
            </TX>
            <TX size={13} color={t.txA(50)} style={{ marginBottom: 30 }}>
              Ten seconds is enough — we listen for rhythm, liaisons and nasal vowels.
            </TX>
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.input, padding: 26, marginBottom: 30 }}>
              <TX font="serifI" size={24} lh={33}>
                « Bonjour, je m'appelle {s.userName} et j'apprends le français depuis longtemps. »
              </TX>
            </View>
            <View style={{ alignItems: 'center', marginBottom: 26 }}>
              <Waveform count={30} height={38} color={calib === 'rec' ? t.acc : t.txA(28)} active={calib === 'rec'} barWidth={3} gap={4} />
            </View>
            <View style={{ alignItems: 'center', gap: 16 }}>
              <Press
                onPress={doCalib}
                cue={null}
                style={{ width: 76, height: 76, borderRadius: 38, alignItems: 'center', justifyContent: 'center', backgroundColor: calib === 'rec' ? t.acc : 'transparent', borderWidth: 1, borderColor: calib === 'rec' ? t.acc : t.line(22) }}
              >
                <Icon name="mic" size={26} color={calib === 'rec' ? t.accInk : t.tx} />
              </Press>
              <TX size={12} ls={1.4} color={t.txA(50)} center style={{ textTransform: 'uppercase' }}>
                {calib === 'rec' ? 'Listening… rhythm, liaisons, nasal vowels' : 'Tap the mic and read'}
              </TX>
            </View>
          </View>
        ) : null}

        {/* 9 · Result */}
        {step === 9 ? (
          <View style={{ flex: 1, justifyContent: 'center', paddingTop: insets.top }}>
            <TX font="semi" size={10} ls={2.8} color={t.txA(40)} style={{ marginBottom: 16 }}>
              {LABELS[9]}
            </TX>
            <TX font="serif" size={74} lh={74} color={t.acc}>
              {level}
            </TX>
            <TX font="serifI" size={28} style={{ marginTop: 6, marginBottom: 22 }}>
              {beginner ? 'Découverte — the beginning.' : 'Seuil — the threshold.'}
            </TX>
            <TX size={15} lh={24} color={t.txA(60)} style={{ maxWidth: 310, marginBottom: 44 }}>
              {beginner
                ? "A clean slate. Your journey starts in the Beginners' Den — sounds first, then words. Camille will keep it gentle."
                : "Solid foundations. Your liaisons and nasal vowels want attention — tonight's feed starts there."}
            </TX>
            <Button label="Enter Ealch" onPress={finish} />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

function StepLabel({ children }: { children: string }) {
  const t = useTheme();
  return (
    <TX font="semi" size={10} ls={2.8} color={t.txA(40)} style={{ marginBottom: 12 }}>
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
    <TX font="serif" size={34} lh={38}>
      {children}
    </TX>
  );
}

function Field(props: React.ComponentProps<typeof TextInput> & { placeholder: string }) {
  const t = useTheme();
  return (
    <TextInput
      {...props}
      placeholderTextColor={t.txA(30)}
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
