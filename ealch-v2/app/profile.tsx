import { useMemo, useState, type ReactNode } from 'react';
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
import { itemsPracticed, localDay, minutesToday, mondayIndex, shiftDay, streak, topWeaknesses, weekDots } from '@/store/progress.logic';
import { useUI } from '@/store/useUI';
import { accentData } from '@/content/onboarding';
import { openWeakRows } from '@/content/weakness';
import { auth } from '@/services';

// ── week-history dots ──
// Derived from the session log, not the fixed ['done','done','frozen',…] array
// the prototype shipped. 'today' is today whether or not it has been practised
// yet; 'frozen' is the day a freeze actually bridged.
type DotState = 'done' | 'frozen' | 'today' | 'off';

/** A duration for the practice stat card: minutes under an hour, else hours to
 *  one decimal. The unit rides in the value so the label can stay constant. */
function fmtDuration(min: number): string {
  if (min < 60) return `${min}m`;
  const h = min / 60;
  return `${h % 1 === 0 ? h.toFixed(0) : h.toFixed(1)}h`;
}

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
      <TX font="serif" role="display" size={27} color={accent ? t.accTx : t.txPrimary}>
        {value}
      </TX>
      <TX font="semi" role="eyebrow" ls={1.6} color={t.txSubtle} style={{ marginTop: 4 }} numberOfLines={2}>
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
      <TX font="semi" role="label" ls={0.6}>
        {title}
      </TX>
      <TX font="semi" role="meta" ls={1.8} color={t.txSubtle}>
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
  const attempts = useProgress((s) => s.attempts);
  const errors = useProgress((s) => s.errors);
  const openSheet = useUI((s) => s.openSheet);

  const today = localDay();
  // Each of these folds the whole session log; memoize on the slices they read
  // so an unrelated re-render (a text-field keystroke, a theme toggle) doesn't
  // rebuild a Set over the log. Matches home, which is already memoized.
  const run = useMemo(() => streak(sessions, today, freeze), [sessions, today, freeze]);
  const dots = useMemo(() => weekDots(sessions, today), [sessions, today]);
  const todayIx = mondayIndex(today);
  const monday = shiftDay(today, -todayIx);

  // ── Real top-line stats, all derived from the logs ──
  // Total practice time (session minutes), distinct words met correctly (attempt
  // log), and overall accuracy. A fresh install reads 0m / 0 / — , which is true.
  const totalMin = sessions.reduce((sum, s) => sum + s.minutes, 0);
  const wordsMet = itemsPracticed(attempts).size;
  const graded = attempts.length;
  const correct = attempts.reduce((n, a) => n + (a.correct ? 1 : 0), 0);
  const accValue = graded ? `${Math.round((correct / graded) * 100)}%` : '—';

  // Minutes practised on each day of THIS calendar week, Monday-first — the same
  // week the dots above the chart cover. Bars scale to the busiest day.
  const weekMins = useMemo(
    () => Array.from({ length: 7 }, (_, i) => minutesToday(sessions, shiftDay(monday, i))),
    [sessions, monday]
  );
  const maxMin = Math.max(1, ...weekMins);

  // The set of days actually practised, so the month calendar marks real days
  // instead of the old `d % 4 !== 0` decoration.
  const practisedDays = new Set(sessions.map((s) => s.date));

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

  // The same fold and the same map home reads, so the two screens cannot
  // disagree about the same user. This used to hardcode two flaws and route
  // both to the grammar sheet whichever was tapped.
  const weaknesses = useMemo(() => topWeaknesses(errors, today, 7), [errors, today]);
  const weakRows = useMemo(() => openWeakRows(router, openSheet), [router, openSheet]);

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
  const pad2 = (n: number) => String(n).padStart(2, '0');
  const calCells: { n: string; done: boolean; today: boolean }[] = [];
  for (let i = 0; i < off; i++) calCells.push({ n: '', done: false, today: false });
  for (let d = 1; d <= dim; d++) {
    // "Done" means the session log actually has a session on that calendar day.
    const dayStr = `${y}-${pad2(mo + 1)}-${pad2(d)}`;
    calCells.push({ n: String(d), done: practisedDays.has(dayStr), today: d === td });
  }

  const dotBg = (st: DotState) =>
    st === 'done' ? t.accA(18) : st === 'frozen' ? t.line(6) : t.line(4);
  const dotBorder = (st: DotState) =>
    st === 'done' ? t.accA(50) : st === 'today' ? t.accA(70) : t.line(10);
  const dotColor = (st: DotState) => (st === 'done' || st === 'today' ? t.accTx : t.txMuted);
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
              <TX font="serif" role="display" size={26}>
                {userName.charAt(0).toUpperCase()}
              </TX>
            ) : (
              <Icon name="user" size={26} color={t.txNonText} strokeWidth={1.6} />
            )}
          </View>
          <View style={{ flex: 1 }}>
            {editingName ? (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <TextInput
                  value={nameDraft}
                  onChangeText={setNameDraft}
                  placeholder={T.namePh}
                  placeholderTextColor={t.txSubtle}
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
                <TX font="serif" role="display" size={30}>
                  {userName || T.guestName}
                </TX>
                <Icon name="pencil" size={14} color={t.txNonText} strokeWidth={1.6} />
              </Press>
            )}
            <View
              style={{
                alignSelf: 'flex-start',
                marginTop: 6,
                minHeight: 24,
                paddingVertical: 3,
                paddingHorizontal: 11,
                borderRadius: 12,
                backgroundColor: t.accA(14),
                justifyContent: 'center',
              }}
            >
              <TX font="semi" role="meta" ls={0.8} color={t.accTx} numberOfLines={1} adjustsFontSizeToFit>
                {level}{levelName ? ` — ${levelName}` : ''}
              </TX>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-start' }}>
            <View style={{ flexDirection: 'row', minHeight: 32, paddingVertical: 4, borderRadius: 16, borderWidth: 1, borderColor: t.line(14), overflow: 'hidden' }}>
              {(['fr', 'en'] as const).map((l) => {
                const on = lang === l;
                return (
                  <Press key={l} onPress={() => setLang(l)} style={{ paddingHorizontal: 13, justifyContent: 'center', backgroundColor: on ? t.acc : 'transparent' }}>
                    <TX font="semi" role="meta" ls={1} color={on ? t.accInk : t.txMuted}>
                      {l.toUpperCase()}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <Press onPress={() => router.push('/settings')} style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="gear" size={18} color={t.txNonText} />
            </Press>
          </View>
        </View>

        {/* Primary stats — derived from the session and attempt logs */}
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 26 }}>
          <StatCard value={fmtDuration(totalMin)} label={T.statPractice} />
          <StatCard value={String(wordsMet)} label={T.statWords} />
          <StatCard value={accValue} label={T.accuracyLabel} accent />
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
              <TX font="serif" role="display" size={34} color={t.accTx}>
                {String(run.days)}
              </TX>
              <TX role="label" color={t.txSecondary}>
                {streakW}
              </TX>
            </View>
            <View
              style={{
                minHeight: 22,
                paddingVertical: 3,
                paddingHorizontal: 10,
                borderRadius: 11,
                borderWidth: 1,
                borderColor: t.accA(45),
                justifyContent: 'center',
              }}
            >
              <TX font="bold" role="eyebrow" ls={1} color={t.accTx}>
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
                    minHeight: 30,
                    paddingVertical: 4,
                    borderRadius: 15,
                    backgroundColor: dotBg(st),
                    borderWidth: st === 'today' ? 1.5 : 1,
                    borderColor: dotBorder(st),
                    borderStyle: st === 'today' ? 'dashed' : 'solid',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TX role="meta" color={dotColor(st)}>
                    {dotCh(st)}
                  </TX>
                </View>
                <TX font="semi" role="eyebrow" color={t.txSubtle}>
                  {T.dayLetters[i]}
                </TX>
              </View>
            ))}
          </View>
          <TX font="serifI" role="meta" color={t.txSubtle}>
            {freezeNote}
          </TX>
        </View>

        {/* Minutes spoken — last 7 days */}
        <CardBox style={{ paddingBottom: 14 }}>
          <CardHead title={T.minutes} right={T.days7} />
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8, height: 74 }}>
            {weekMins.map((m, i) => (
              <View key={i} style={{ flex: 1, alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                <View
                  style={{
                    width: '100%',
                    borderRadius: 4,
                    // A practised day always shows a visible sliver, even one
                    // minute, so the bar reads as "something" not "nothing".
                    height: m > 0 ? Math.max(4, (m / maxMin) * 74) : 0,
                    backgroundColor: i === todayIx ? t.acc : t.txA(16),
                  }}
                />
                <TX role="eyebrow" color={i === todayIx ? t.accTx : t.txSubtle}>
                  {T.dayLetters[i]}
                </TX>
              </View>
            ))}
          </View>
        </CardBox>

        {/* Weakness engine */}
        <TX font="serif" role="titleLg" size={22} style={{ marginBottom: 12 }}>
          {T.weakEngine}
        </TX>
        {weaknesses.length === 0 ? (
          // Never fabricate a weakness: with nothing logged this week, the
          // section says so plainly instead of asserting two invented ones.
          <View style={{ minHeight: 62, paddingVertical: 14, marginBottom: 30, borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, justifyContent: 'center', paddingHorizontal: 18 }}>
            <TX role="label" color={t.txSubtle} lhMult={1.5}>
              {T.weakEmpty}
            </TX>
          </View>
        ) : (
          <View style={{ gap: 10, marginBottom: 30 }}>
            {weaknesses.map((w) => {
              const d = weakRows[w.skill];
              // The real count from the error log, not a fixed caption per row.
              const meta = (w.count === 1 ? T.weakSlip : T.weakSlipPl).replace('{n}', String(w.count));
              return (
                <Press
                  key={w.skill}
                  onPress={d.open}
                  style={{
                    minHeight: 62,
                    paddingVertical: 6,
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
                    <TX font="serifI" role="titleSm" color={t.accTx}>
                      {d.glyph}
                    </TX>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TX font="semi" role="body">
                      {d.title}
                    </TX>
                    <TX role="label" color={t.txSubtle} style={{ marginTop: 2 }}>
                      {meta}
                    </TX>
                  </View>
                  <Icon name="chevronRight" size={14} color={t.txNonText} strokeWidth={1.6} />
                </Press>
              );
            })}
          </View>
        )}

        {/* Your accent */}
        <TX font="serif" role="titleLg" size={22} style={{ marginBottom: 12 }}>
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
                    role="meta"
                    color={c.done || c.today ? t.accTx : c.n === '' ? 'transparent' : t.txMuted}
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
            minHeight: 56,
            paddingVertical: 6,
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
          <TX font="semi" role="body" style={{ flex: 1 }}>
            {T.settingsT}
          </TX>
          <Icon name="chevronRight" size={14} color={t.txNonText} strokeWidth={1.6} />
        </Press>

        {/* Sign out */}
        <Press
          onPress={() => {
            void auth.signOut();
            signOut();
            router.replace('/onboarding');
          }}
          style={{
            minHeight: 52,
            paddingVertical: 6,
            borderRadius: 26,
            borderWidth: 1,
            borderColor: t.dangerA(35),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TX font="semi" role="body" color={t.tag('danger').c}>
            {T.signOut}
          </TX>
        </Press>
      </ScrollView>
      <TabBar />
    </View>
  );
}
