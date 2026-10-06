// The documents of an open exam task (DALF C1 synthèse, exposé), each on its
// own card with its label, the way a reading text already sits on its own
// surface. Draws nothing for a task without a dossier, so the writing, talk and
// discussion screens can mount it unconditionally. See examDossier.logic.ts.
import { View } from 'react-native';
import { TX } from '@/components/Type';
import { useTheme } from '@/theme/useTheme';
import { dossierOf } from '@/utils/examDossier.logic';
import type { ExamTask } from '@/content/schema';

export function ExamDossier({ task }: { task: Pick<ExamTask, 'parts' | 'taskType'> }) {
  const t = useTheme();
  const docs = dossierOf(task);
  if (docs.length === 0) return null;
  return (
    <View style={{ marginBottom: 14 }}>
      {docs.map((d, i) => (
        <View
          key={`${d.label}-${i}`}
          style={{
            borderRadius: 14, borderWidth: 1, borderColor: t.line(9),
            backgroundColor: t.card, padding: 16, marginBottom: 12,
          }}
        >
          <TX font="semi" role="eyebrow" ls={2} color={t.accTx} style={{ marginBottom: 8 }}>
            {d.label.toUpperCase()}
          </TX>
          <TX lang="fr" role="label" color={t.txPrimary} lhMult={1.6}>{d.text}</TX>
        </View>
      ))}
    </View>
  );
}
