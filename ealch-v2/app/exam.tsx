import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { EXAM_FORMATS, type ExamFormat } from '@/content/schema';

// Display labels for the Canada-first launch set. Not index-aligned to
// anything — EXAM_FORMATS' declared order need not match a chip's display
// order (see app/home.tsx's own EXAMS array, which is deliberately ordered
// for the UI, not for the enum).
const FORMAT_LABEL: Record<ExamFormat, string> = {
  delf_b2: 'DELF B2',
  tef_canada: 'TEF Canada',
  tcf_canada: 'TCF Canada',
};

function isExamFormat(v: string | undefined): v is ExamFormat {
  return !!v && (EXAM_FORMATS as readonly string[]).includes(v);
}

/** The exam-intro screen: which mock papers exist for a format, plus the
 *  Gate H non-affiliation disclaimer, visible before any exam content
 *  renders — see the note on Strings.examDisclaimer. */
export default function ExamIntro() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { format: formatQ } = useLocalSearchParams<{ format?: string }>();
  const format = isExamFormat(formatQ) ? formatQ : null;

  const series = useMemo(() => (format ? content.examSeriesFor(format) : []), [format]);
  const seriesWithTasks = useMemo(
    () => series.map((s) => ({ series: s, tasks: content.examTasksOf(s.id) })),
    [series]
  );

  return (
    <View style={{ flex: 1, backgroundColor: t.bgDeep }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} title={format ? FORMAT_LABEL[format] : T.examiner} />
      </View>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 30 }}>
        <TX role="label" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 22 }}>
          {T.examDisclaimer}
        </TX>

        {!format || seriesWithTasks.length === 0 ? (
          <TX role="label" color={t.txSecondary}>{T.examNone}</TX>
        ) : (
          seriesWithTasks.map(({ series: s, tasks }) => {
            const minutes = Math.max(1, Math.round(tasks.reduce((sum, tk) => sum + tk.timingS, 0) / 60));
            return (
              <Press
                key={s.id}
                onPress={() => router.push({ pathname: '/exam-task', params: { seriesId: s.id } })}
                style={{
                  borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card,
                  padding: 18, marginBottom: 12,
                }}
              >
                <TX font="serif" size={20} role="display" style={{ marginBottom: 6 }}>
                  {FORMAT_LABEL[format]} · {s.seriesNo}
                </TX>
                <TX role="label" color={t.txMuted}>
                  {tasks.length} · {minutes} min
                </TX>
              </Press>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
