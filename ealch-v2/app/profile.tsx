import { useState, type ReactNode } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { TabBar } from '@/components/TabBar';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import { localDay, mondayIndex, shiftDay, streak, weekDots } from '@/store/progress.logic';
import { useUI } from '@/store/useUI';
import { accentData } from '@/content/onboarding';
import { auth } from '@/services';

// ── week-history dots ──
// Derived from the session log, not the fixed ['done','done','frozen',…] array
// the prototype shipped. 'today' is today whether or not it has been practised
// yet; 'frozen' is the day a freeze actually bridged.
type DotState = 'done' | 'frozen' | 'today' | 'off';

// minutes-spoken bar chart — last 7 days
// TODO(minutes): still a fixed shape. The session log records minutes per day,
// so this can be derived, but the chart is a later phase and a plausible-looking
// invented curve is worse than an obviously placeholder one.
const BAR_HEIGHTS = [34, 58, 22, 74, 46, 12, 64];

function StatCard({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  const t = useTheme();
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(7),
        backgroundColor: t.card,
        paddingVertical: 16,
        paddingHorizontal: 14,
      }}
    >
      <TX font="serif" size={27} color={accent ? t.acc : t.tx}>
        {value}
      </TX>
      <TX font="semi" size={9} ls={1.6} color={t.txA(45)} style={{ marginTop: 4 }}>
        {label}
      </TX>
    </View>
  );
}

function CardBox({ children, style }: { children: ReactNode; style?: object }) {
  const t = useTheme();
  return (
    <View
      style={[
        {
          borderRadius: 18,
          borderWidth: 1,
          borderColor: t.line(7),
          backgroundColor: t.card,
          padding: 18,
          marginBottom: 26,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

function CardHead({ title, right }: { title: string; right: string }) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
      <TX font="semi" size={12} ls={0.6}>
        {title}
      </TX>
      <TX font="semi" size={10} ls={1.8} color={t.txA(40)}>
        {right}
      </TX>
    </View>
  );
}

export default function Profile() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { userName, setField, level, lang, setLang, region, setRegion, freeze, signOut } = useStore();
  const sessions = useProgress((s) => s.sessions);
  const openSheet = useUI((s) => s.openSheet);

  const today = localDay();
  const run = streak(sessions, today, freeze);
  const dots = weekDots(sessions, today);
  const todayIx = mondayIndex(today);
  const monday = shiftDay(today, -todayIx);

  const wkStates: DotState[] = dots.map((practised, i) => {
    const day = shiftDay(monday, i);
    if (practised) return 'done';
    if (day === run.frozenDay) return 'frozen';
    if (i === todayIx) return 'today';
    return 'off';
  });

  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState(userName);

  const startEditName = () => {
    setNameDraft(userName);
    setEditingName(true);
  };
  const saveName = () => {
    const name = nameDraft.trim();
    setField('userName', name);
    setEditingName(false);
    if (name) void auth.updateDisplayName(name);
  };

  const freezeChip = T.freezeLeft.replace('{n}', String(run.freezesLeft));
  // Name the day a freeze actually bridged. The note used to say "Wednesday"
  // to everyone, forever, whether or not anything had been frozen.
  const freezeNote = run.frozenDay
    ? T.freezeNote.replace('{d}', T.weekdayNames[mondayIndex(run.frozenDay)])
    : T.freezeIdle;
  const streakW = T.streakWord;
  const levelName = T.levelNames[level as keyof typeof T.levelNames] ?? '';

  // Same tofu fix as home: ‿ and ɔ̃ fall outside the display font. Le subjonctif
  // has no lesson to open, so it does not render. See app/home.tsx.
  const weak = [
    { glyph: 'L', title: 'La liaison obligatoire' },
    { glyph: 'N', title: 'Voyelles nasales — on / en' },
  ];

  // progress calendar for the current month
  const now = new Date();
  const calLabel = now
    .toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US', { month: 'long', year: 'numeric' })
    .toUpperCase();
  const y = now.getFullYear();
  const mo = now.getMonth();
  const td = now.getDate();
  const off = (new Date(y, mo, 1).getDay() + 6) % 7;
  const dim = new Date(y, mo + 1, 0).getDate();
  const calCells: { n: string; done: boolean; today: boolean }[] = [];
  for (let i = 0; i < off; i++) calCells.push({ n: '', done: false, today: false });
  for (let d = 1; d <= dim; d++) {
    calCells.push({ n: String(d), done: d < td && d % 4 !== 0, today: d === td });
  }

  const dotBg = (st: DotState) =>
    st === 'done' ? t.accA(18) : st === 'frozen' ? t.line(6) : t.line(4);
  const dotBorder = (st: DotState) =>
    st === 'done' ? t.accA(50) : st === 'today' ? t.accA(70) : t.line(10);
  const dotColor = (st: DotState) => (st === 'done' || st === 'today' ? t.acc : t.txA(50));
  const dotCh = (st: DotState) =>
    st === 'done' ? '✓' : st === 'frozen' ? '✦' : st === 'today' ? '·' : '';

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: insets.top + 20, paddingHorizontal: 24, paddingBottom: 130 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <View
            style={{
              width: 62,
              height: 62,
              borderRadius: 31,
              borderWidth: 1,
              borderColor: t.accA(55),
              backgroundColor: t.card2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {userName ? (
              <TX font="serif" size={26}>
                {userName.charAt(0).toUpperCase()}
              </TX>
            ) : (
              <Icon name="user" size={26} color={t.txA(60)} strokeWidth={1.6} />
            )}
          </View>
          <View style={{ flex: 1 }}>
            {editingName ? (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <TextInput
                  value={nameDraft}
                  onChangeText={setNameDraft}
                  placeholder={T.namePh}
                  placeholderTextColor={t.txA(30)}
                  autoFocus
                  autoCapitalize="words"
                  maxLength={30}
                  onSubmitEditing={saveName}
                  style={{
                    flex: 1,
                    height: 40,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: t.accA(50),
                    backgroundColor: t.input,
                    color: t.tx,
                    paddingHorizontal: 12,
                    fontSize: 17,
                    fontFamily: 'InstrumentSerif',
                  }}
                />
                <Press onPress={saveName} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={16} color={t.accInk} />
                </Press>
              </View>
            ) : (
              <Press onPress={startEditName} cue={null} style={{ flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'flex-start' }}>
                <TX font="serif" size={30} lh={33}>
                  {userName || T.guestName}
                </TX>
                <Icon name="pencil" size={14} color={t.txA(40)} strokeWidth={1.6} />
              </Press>
            )}
            <View
              style={{
                alignSelf: 'flex-start',
                marginTop: 6,
                height: 24,
                paddingHorizontal: 11,
                borderRadius: 12,
                backgroundColor: t.accA(14),
                justifyContent: 'center',
              }}
            >
              <TX font="semi" size={11} ls={0.8} color={t.acc}>
                {level}{levelName ? ` — ${levelName}` : ''}
              </TX>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-start' }}>
            <View style={{ flexDirection: 'row', height: 32, borderRadius: 16, borderWidth: 1, borderColor: t.line(14), overflow: 'hidden' }}>
              {(['fr', 'en'] as const).map((l) => {
                const on = lang === l;
                return (
                  <Press key={l} onPress={() => setLang(l)} style={{ paddingHorizontal: 13, justifyContent: 'center', backgroundColor: on ? t.acc : 'transparent' }}>
                    <TX font="semi" size={11} ls={1} color={on ? t.accInk : t.txA(55)}>
                      {l.toUpperCase()}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <Press onPress={() => router.push('/settings')} style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="gear" size={18} color={t.txA(70)} />
            </Press>
          </View>
        </View>

        {/* Primary stats */}
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 26 }}>
          <StatCard value="14,6" label={T.hours} />
          <StatCard value="38" label={T.convs} />
          <StatCard value="82" label={T.conf} accent />
        </View>

        {/* Streak & week history */}
        <View
          style={{
            borderRadius: 18,
            borderWidth: 1,
            borderColor: t.accA(26),
            backgroundColor: t.card,
            padding: 18,
            marginBottom: 10,
            overflow: 'hidden',
          }}
        >
          <LinearGradient
            colors={[t.accA(10), 'transparent']}
            start={{ x: 0.85, y: 0 }}
            end={{ x: 0.3, y: 0.7 }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 9 }}>
              <TX font="serif" size={34} lh={34} color={t.acc}>
                {String(run.days)}
              </TX>
              <TX size={12.5} color={t.txA(60)}>
                {streakW}
              </TX>
            </View>
            <View
              style={{
                height: 22,
                paddingHorizontal: 10,
                borderRadius: 11,
                borderWidth: 1,
                borderColor: t.accA(45),
                justifyContent: 'center',
              }}
            >
              <TX font="bold" size={8.5} ls={1} color={t.acc}>
                {freezeChip}
              </TX>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            {wkStates.map((st, i) => (
              <View key={i} style={{ alignItems: 'center', gap: 5 }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: dotBg(st),
                    borderWidth: st === 'today' ? 1.5 : 1,
                    borderColor: dotBorder(st),
                    borderStyle: st === 'today' ? 'dashed' : 'solid',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TX size={11} color={dotColor(st)}>
                    {dotCh(st)}
                  </TX>
                </View>
                <TX font="semi" size={9} color={t.txA(40)}>
                  {T.dayLetters[i]}
                </TX>
              </View>
            ))}
          </View>
          <TX font="serifI" size={10.5} lh={16} color={t.txA(45)}>
            {freezeNote}
          </TX>
        </View>

        {/* Minutes spoken — last 7 days */}
        <CardBox style={{ paddingBottom: 14 }}>
          <CardHead title={T.minutes} right={T.days7} />
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8, height: 74 }}>
            {BAR_HEIGHTS.map((h, i) => (
              <View key={i} style={{ flex: 1, alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                <View
                  style={{
                    width: '100%',
                    borderRadius: 4,
                    height: (h / 100) * 74,
                    backgroundColor: i === 3 ? t.acc : t.txA(16),
                  }}
                />
                <TX size={9} color={t.txA(40)}>
                  {T.dayLetters[i]}
                </TX>
              </View>
            ))}
          </View>
        </CardBox>

        {/* Weakness engine */}
        <TX font="serif" size={21} style={{ marginBottom: 12 }}>
          {T.weakEngine}
        </TX>
        <View style={{ gap: 10, marginBottom: 30 }}>
          {weak.map((w, i) => (
            <Press
              key={i}
              onPress={() => openSheet('grammar')}
              style={{
                height: 62,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: t.line(7),
                backgroundColor: t.card,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 14,
                paddingHorizontal: 18,
              }}
            >
              <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
                <TX font="serifI" size={16} color={t.acc}>
                  {w.glyph}
                </TX>
              </View>
              <View style={{ flex: 1 }}>
                <TX font="semi" size={14}>
                  {w.title}
                </TX>
                <TX size={11.5} color={t.txA(45)} style={{ marginTop: 2 }}>
                  {T.weakMeta[i]}
                </TX>
              </View>
              <Icon name="chevronRight" size={14} color={t.txA(35)} strokeWidth={1.6} />
            </Press>
          ))}
        </View>

        {/* Your accent */}
        <TX font="serif" size={21} style={{ marginBottom: 12 }}>
          {T.accentT}
        </TX>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
          {accentData.map((a) => {
            const on = region === a.id;
            return (
              <Press
                key={a.id}
                onPress={() => setRegion(a.id)}
                style={{
                  height: 36,
                  paddingHorizontal: 16,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: on ? t.accA(60) : t.line(12),
                  backgroundColor: on ? t.accCard(8) : 'transparent',
                  justifyContent: 'center',
                }}
              >
                <TX size={13} color={on ? t.acc : t.txA(70)}>
                  {a.name}
                </TX>
              </Press>
            );
          })}
        </View>

        {/* Progress calendar */}
        <CardBox>
          <CardHead title={T.calendarT} right={calLabel} />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {calCells.map((c, i) => (
              <View key={i} style={{ width: `${100 / 7}%`, padding: 2.5 }}>
                <View
                  style={{
                    aspectRatio: 1,
                    borderRadius: 9,
                    backgroundColor: c.done ? t.accA(18) : 'transparent',
                    borderWidth: 1.5,
                    borderColor: c.today ? t.acc : 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TX
                    font="semi"
                    size={11}
                    color={c.done || c.today ? t.acc : c.n === '' ? 'transparent' : t.txA(55)}
                  >
                    {c.n}
                  </TX>
                </View>
              </View>
            ))}
          </View>
        </CardBox>

        {/* Settings link */}
        <Press
          onPress={() => router.push('/settings')}
          style={{
            height: 56,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.line(8),
            backgroundColor: t.card,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
            paddingHorizontal: 18,
            marginBottom: 14,
          }}
        >
          <Icon name="gear" size={18} color={t.acc} />
          <TX font="semi" size={14} style={{ flex: 1 }}>
            {T.settingsT}
          </TX>
          <Icon name="chevronRight" size={14} color={t.txA(35)} strokeWidth={1.6} />
        </Press>

        {/* Sign out */}
        <Press
          onPress={() => {
            void auth.signOut();
            signOut();
            router.replace('/onboarding');
          }}
          style={{
            height: 52,
            borderRadius: 26,
            borderWidth: 1,
            borderColor: t.dangerA(35),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TX font="semi" size={14} color={t.tag('danger').c}>
            {T.signOut}
          </TX>
        </Press>
      </ScrollView>
      <TabBar />
    </View>
  );
}
