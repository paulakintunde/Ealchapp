// The format hub: what this exam is, and which mock papers exist for it.
//
// ── What changed, and why ───────────────────────────────────────────────────
//
// This used to be a flat list of papers under a bare format title, reached from
// a home card captioned with ONE of the exam's four épreuves. Both halves of
// that misled: the caption said TEF was the speaking exam, and the list gave a
// candidate no way to work a single skill without committing to a whole paper.
//
// So the hub now states the format's actual shape — four épreuves, this long,
// each asking this much — and offers two honest ways in:
//
//   Examen complet   the whole paper, épreuves in the order the real day runs
//   Par épreuve      one skill at a time
//
// "Par épreuve" is the practice affordance the old captions implied and never
// delivered. It stays useful; it just must not be presented as what the exam
// IS, which is what putting it in a caption did.
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import { useFeature } from '@/store/useEntitlement';
import { getConfig } from '@/services/config';
import { examPaperAllowed } from '@/utils/examGate.logic';
import { paperProgress } from '@/store/progress.logic';
import { useContent } from '@/services/content';
import { examPapersFor } from '@/services/content.logic';
import {
  EXAM_FORMAT_FACTS,
  formatSitting,
  sectionBreakdown,
} from '@/content/examFormats';
import { EXAM_FORMATS, type ExamFormat, type ExamPaper } from '@/content/schema';

function isExamFormat(v: string | undefined): v is ExamFormat {
  return !!v && (EXAM_FORMATS as readonly string[]).includes(v);
}

export default function ExamFormatHub() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang) === 'en' ? 'en' : 'fr';
  const results = useProgress((s) => s.examResults);
  // Wired, and open: examGateOn ships false. See examGate.logic.ts for why the
  // check exists before the paywall does.
  const entitled = useFeature('examiner');
  const cfg = getConfig();

  const { format: formatQ } = useLocalSearchParams<{ format?: string }>();
  const format = isExamFormat(formatQ) ? formatQ : null;
  const facts = format ? EXAM_FORMAT_FACTS[format] : null;
  // THE CORPUS IS A DEPENDENCY, and it has to be a real one.
  //
  // This read `content.examPapersFor(format)` with `[format]` as its only
  // dependency. `content.*` reaches into the store imperatively via getState(),
  // so nothing here re-ran when the corpus changed — and the corpus ALWAYS
  // changes after this screen can mount: exam content ships only in the OTA
  // snapshot (never the seed), which arrives a few seconds into launch.
  //
  // So a candidate who opened the Examiner on a cold start saw "no exams
  // available yet" and kept seeing it, because the empty list computed at mount
  // was memoised forever. It cleared only by navigating to another format and
  // back, which changed `format` and forced a recompute — which is how it was
  // found, and is not something a user would think to do.
  //
  // Subscribing to the corpus and passing it in makes the dependency visible
  // and honest: `setCorpus` replaces the object, so identity changes and the
  // memo recomputes. Every exam screen had this same shape.
  const corpus = useContent((s) => s.corpus);
  const papers = useMemo(() => (format ? examPapersFor(corpus, format) : []), [corpus, format]);

  return (
    <View style={{ flex: 1, backgroundColor: t.bgDeep }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} title={facts?.label ?? T.examiner} />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 30 }}>
        {/* Gate H: before any exam content, as everywhere else. */}
        <TX role="label" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 20 }}>
          {T.examDisclaimer}
        </TX>

        {facts ? (
          <View
            style={{
              borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card,
              padding: 18, marginBottom: 22,
            }}
          >
            <TX font="semi" role="eyebrow" ls={2.2} color={t.accTx} style={{ marginBottom: 8 }}>
              {T.examBlank}
            </TX>
            <TX role="label" color={t.txPrimary} style={{ marginBottom: 4 }}>
              {facts.sections.length} {T.examEpreuves} · {formatSitting(facts.totalS, lang)}
            </TX>
            <TX role="meta" color={t.txMuted}>{sectionBreakdown(facts)}</TX>
          </View>
        ) : null}

        {/* Two ways in, both real. Neither is a description of the exam. */}
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 22 }}>
          <ModeCard title={T.examFullPaper} sub={T.examFullPaperSub} />
          <ModeCard title={T.examBySection} sub={T.examBySectionSub} />
        </View>

        {papers.length === 0 ? (
          <TX role="label" color={t.txSecondary}>{T.examNoPapersYet}</TX>
        ) : (
          papers.map((p) => (
            <PaperRow
              key={p.id}
              paper={p}
              results={results}
              label={facts?.label ?? p.format}
              locked={
                !examPaperAllowed({
                  gateOn: cfg.examGateOn,
                  entitled,
                  freePapers: cfg.examFreePapers,
                  paperNo: p.paperNo,
                }).allowed
              }
              onPress={() =>
                examPaperAllowed({
                  gateOn: cfg.examGateOn,
                  entitled,
                  freePapers: cfg.examFreePapers,
                  paperNo: p.paperNo,
                }).allowed
                  ? router.push({ pathname: '/exam-paper', params: { paperId: p.id } })
                  : router.push('/paywall')
              }
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

/** Descriptive, not selectable: the actual choice is made on the paper screen,
 *  where the mode toggle lives. These say what the two routes through a paper
 *  are, so the hub does not have to imply it with a caption. */
function ModeCard({ title, sub }: { title: string; sub: string }) {
  const t = useTheme();
  return (
    <View
      style={{
        flex: 1, borderRadius: 14, borderWidth: 1, borderColor: t.line(9),
        backgroundColor: t.card, padding: 14,
      }}
    >
      <TX font="semi" role="label" style={{ marginBottom: 3 }}>{title}</TX>
      <TX role="meta" color={t.txMuted} lhMult={1.4}>{sub}</TX>
    </View>
  );
}

function PaperRow({
  paper, results, label, locked, onPress,
}: {
  paper: ExamPaper;
  results: Parameters<typeof paperProgress>[1];
  label: string;
  locked: boolean;
  onPress: () => void;
}) {
  const t = useTheme();
  const T = useT();

  const progress = useMemo(
    () => paperProgress(paper.sections, results, paper.id),
    [paper, results]
  );
  const done = progress.filter((p) => p.status === 'done').length;
  const started = progress.some((p) => p.answered > 0);
  const anyPractice = progress.some((p) => p.practice);

  return (
    <Press
      onPress={onPress}
      style={{
        flexDirection: 'row', alignItems: 'center', gap: 12,
        borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card,
        padding: 16, marginBottom: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <TX font="serif" size={20} role="display" style={{ marginBottom: 4 }}>
          {label} · {T.examPaperTitle} {paper.paperNo}
        </TX>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TX role="meta" color={t.txMuted}>
            {done}/{paper.sections.length} {T.examEpreuves}
          </TX>
          {/* No NCLC estimate here on purpose. A per-paper level would have to
              be computed from a partial sitting, and the report refuses to do
              that for exactly the reason the report exists. */}
          {anyPractice ? (
            <TX font="semi" role="meta" color={t.txMuted}>· {T.examUnscored}</TX>
          ) : null}
        </View>
      </View>
      {locked ? (
        <Icon name="lock" size={16} color={t.txMuted} />
      ) : (
        <TX font="semi" role="label" color={t.accTx}>
          {started ? T.examResume : T.examStart}
        </TX>
      )}
    </Press>
  );
}
