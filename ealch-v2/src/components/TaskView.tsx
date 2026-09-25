// The graded production task that closes a B1+ lesson.
//
// Every other mission type marks an index. This one asks the learner to WRITE
// something and then judge it against named criteria, because a B1 unit outcome
// ("narrate a coherent past episode") cannot be measured by picking an option.
//
// IT WORKS OFFLINE, BY DESIGN. The lesson must never block on a network call,
// so the shipped path is self-check: the criteria are shown before writing, the
// model answer is revealed after, and the learner ticks each criterion against
// it. The LLM grader is an enhancement on top of this, not the thing that makes
// the section work. Until it is wired, nothing here lies about being marked.
//
// The criteria are deliberately visible BEFORE the learner writes. That is what
// makes the section formative rather than a test, and it is why the type is not
// an ExamTask.
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import type { LessonSection } from '@/content/schema';

type Task = Extract<LessonSection, { type: 'task' }>;

export function TaskView({ s }: { s: Task }) {
  const t = useTheme();
  const [answer, setAnswer] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [ticked, setTicked] = useState<Record<string, boolean>>({});

  const criteria = s.rubric?.criteria ?? [];
  const audio = s.responseSpec?.kind === 'audio';
  const words = answer.trim() ? answer.trim().split(/\s+/).length : 0;
  const min = s.responseSpec?.minWords;
  const max = s.responseSpec?.maxWords;

  const card = {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: t.line(10),
    backgroundColor: t.card,
    padding: 16,
    gap: 8,
  } as const;

  return (
    <View style={{ gap: 14 }}>
      {/* 1. THE BRIEF. */}
      <View style={card}>
        <TX font="semi" role="meta" ls={2.2} color={t.tag('gold').c}>
          LA TÂCHE
        </TX>
        <TX role="body">{s.brief}</TX>
        {s.briefEn ? <TX role="bodySm" color={t.txSubtle}>{`EN: ${s.briefEn}`}</TX> : null}
        <TX font="semi" role="body" style={{ marginTop: 4 }}>{s.produce}</TX>
      </View>

      {/* 2. THE CRITERIA, before writing. This is the formative half: the
          learner is told what a good answer contains, not marked in the dark. */}
      {criteria.length ? (
        <View style={card}>
          <TX font="semi" role="meta" ls={2.2} color={t.txMuted}>
            CE QUI COMPTE
          </TX>
          {criteria.map((c) => (
            <View key={c.key} style={{ flexDirection: 'row', gap: 8, alignItems: 'flex-start' }}>
              <TX role="bodySm" color={t.accTx}>•</TX>
              <View style={{ flex: 1 }}>
                <TX role="bodySm">{`${c.label} (${c.maxPoints})`}</TX>
              </View>
            </View>
          ))}
        </View>
      ) : null}

      {/* 3. THE RESPONSE. `audio` has no recorder yet, and says so rather than
          drawing a dead mic button. */}
      {audio ? (
        <View style={card}>
          <TX role="bodySm" color={t.txMuted}>
            Une tâche orale. Dis ta réponse à voix haute, puis compare avec le modèle.
          </TX>
          <TX role="bodySm" color={t.txSubtle}>EN: Say your answer aloud, then compare it with the model.</TX>
        </View>
      ) : (
        <View style={card}>
          <TextInput
            value={answer}
            onChangeText={setAnswer}
            multiline
            placeholder="Écris ta réponse ici."
            placeholderTextColor={t.txSubtle}
            style={{ minHeight: 132, color: t.txPrimary, fontSize: 16, lineHeight: 24, textAlignVertical: 'top' }}
          />
          {min || max ? (
            <TX role="meta" color={words && min && words < min ? t.danger : t.txMuted}>
              {`${words} mot${words === 1 ? '' : 's'}${min && max ? ` · ${min} à ${max}` : ''}`}
            </TX>
          ) : null}
        </View>
      )}

      {/* 4. SCAFFOLD. Starters, never a whole answer. */}
      {s.scaffold?.length ? (
        <View style={{ gap: 8 }}>
          <TX font="semi" role="meta" ls={2.2} color={t.txMuted}>POUR COMMENCER</TX>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {s.scaffold.map((chip) => (
              <Press
                key={chip}
                cue="tap"
                onPress={() => !audio && setAnswer((a) => (a ? `${a} ${chip}` : chip))}
                accessibilityLabel={`Insérer : ${chip}`}
                style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(12), paddingHorizontal: 12, paddingVertical: 7 }}
              >
                <TX role="bodySm">{chip}</TX>
              </Press>
            ))}
          </View>
        </View>
      ) : null}

      {/* 5. THE MODEL, and the self-check against it. Revealed on a tap so the
          learner writes first; the criteria above are what they write toward. */}
      {revealed ? (
        <View style={{ gap: 14 }}>
          <View style={card}>
            <TX font="semi" role="meta" ls={2.2} color={t.txMuted}>UN MODÈLE</TX>
            <TX role="body">{s.modelAnswer}</TX>
            {s.modelAnswerEn ? <TX role="bodySm" color={t.txSubtle}>{`EN: ${s.modelAnswerEn}`}</TX> : null}
          </View>
          {criteria.length ? (
            <View style={card}>
              <TX font="semi" role="meta" ls={2.2} color={t.txMuted}>TON AUTO-ÉVALUATION</TX>
              {criteria.map((c) => {
                const on = !!ticked[c.key];
                return (
                  <Press
                    key={c.key}
                    cue="tap"
                    onPress={() => setTicked((p) => ({ ...p, [c.key]: !p[c.key] }))}
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: on }}
                    accessibilityLabel={c.label}
                    style={{ flexDirection: 'row', gap: 10, alignItems: 'center', paddingVertical: 7 }}
                  >
                    <View
                      style={{
                        width: 22, height: 22, borderRadius: 6, borderWidth: 1,
                        borderColor: on ? t.acc : t.line(14),
                        backgroundColor: on ? t.accA(18) : 'transparent',
                        alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      {on ? <TX role="bodySm" color={t.accTx}>✓</TX> : null}
                    </View>
                    <View style={{ flex: 1 }}>
                      <TX role="bodySm">{c.label}</TX>
                    </View>
                  </Press>
                );
              })}
              <TX role="meta" color={t.txMuted} style={{ marginTop: 4 }}>
                {`${criteria.filter((c) => ticked[c.key]).length} / ${criteria.length}`}
              </TX>
            </View>
          ) : null}
        </View>
      ) : (
        <Press
          cue="tap"
          onPress={() => setRevealed(true)}
          style={{ alignSelf: 'flex-start', borderRadius: 18.5, borderWidth: 1, borderColor: t.accA(45), paddingHorizontal: 15, minHeight: 37, justifyContent: 'center' }}
        >
          <TX font="semi" role="bodySm" color={t.accTx}>Voir un modèle et me corriger</TX>
        </Press>
      )}
    </View>
  );
}
