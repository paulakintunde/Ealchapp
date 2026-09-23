// a1.03's ending figures: what moved, and what stopped being true.
//
// ══════════════════════════════════════════════════════════════════════════
//  TWO DIFFERENT QUESTIONS, AND ONLY ONE OF THEM IS AN ERROR
// ══════════════════════════════════════════════════════════════════════════
//
// a1.03 prints a population and an accuracy for ~27 noun endings. Those figures
// describe SEED.JSON, deliberately: the seed is what the binary carries, so it
// is what a learner can actually meet, and it is the only population CI can
// measure without a database. `author-noun-gender-batch.ts` says so at the
// point it checks them.
//
// That makes the counts move whenever the CUT moves, which is a product
// decision and not a content change. Bundling the exam papers unioned 792
// exam-task target items into the cut and shifted 23 of the 27 figures without
// a single noun being authored. Four tests went red and nothing was wrong.
//
//   FIGURE MOVE   the printed number no longer matches the seed.
//                 Routine. The remedy is to re-measure, and this module's job
//                 is to say so before a suite discovers it.
//
//   ARTIFACT      the rule itself stopped being true of the whole corpus.
//                 Serious. It means the lesson is teaching a property of the
//                 cut rather than a property of French.
//
// The artifact check is the one that matters, and it is not new thinking: two
// candidate endings were cut before a1.03 ever shipped for failing exactly it,
// `-eur` (93% in the seed, 86% in the database) and `-oire` (90% and 61%). What
// was missing is that the check only ran while AUTHORING. Publish a batch of
// nouns from any other lesson and nothing asks the question again.
//
// So: pure functions here, a database wrapper in `check-genre-artifacts.ts`,
// and a call from `publish-content.ts` so every publish asks both questions.
// Measurements come in as lookups rather than item arrays, so this file needs
// neither a corpus nor a connection to be tested.

/** One row of genre-endings.ts, reduced to the claim it makes. */
export type EndingClaim = { ending: string; predicts: string; accuracy: number; items: number };

/** What `measureEnding` returns, reduced to what a claim is checked against. */
export type Measurement = { n: number; accuracy: number; predicts: string } | null;

/** A lookup from ending to measurement over one corpus. */
export type Measure = (ending: string) => Measurement;

/** The printed figure no longer matches the seed. Routine; re-measure. */
export type FigureMove = {
  ending: string;
  wasN: number; nowN: number;
  wasAcc: number; nowAcc: number;
};

/** The rule stopped being true of the whole corpus. Not routine. */
export type Artifact = {
  ending: string;
  kind: 'taught-predicts-flip' | 'taught-below-floor' | 'dismissed-clears-floor' | 'absent';
  detail: string;
};

/** Figures that no longer match the corpus they claim to describe (the seed).
 *  Accuracy is compared rounded, the way the cards state it. */
export function findFigureMoves(claims: readonly EndingClaim[], seed: Measure): FigureMove[] {
  const out: FigureMove[] = [];
  for (const c of claims) {
    const m = seed(c.ending);
    if (!m) continue; // absence is an artifact, reported by findArtifacts
    const nowAcc = Math.round(m.accuracy);
    if (m.n !== c.items || nowAcc !== c.accuracy) {
      out.push({ ending: c.ending, wasN: c.items, nowN: m.n, wasAcc: c.accuracy, nowAcc });
    }
  }
  return out;
}

/** Rules that have stopped being true of the whole corpus.
 *
 *  A TAUGHT ending must predict the same gender in both corpora and must clear
 *  the floor in the database. Predicting one gender in the cut and the other in
 *  the corpus is the definition of an artifact; clearing the floor only in the
 *  cut means the lesson is teaching a rule the language does not have.
 *
 *  A DISMISSED ending is held to the mirror image: it must stay UNDER the floor
 *  in both. One that starts clearing it in either corpus is no longer worthless
 *  and the lesson is wrong to wave it away.
 *
 *  Absence on either side is reported rather than ignored: an ending nothing
 *  ends with can neither be taught nor dismissed. */
export function findArtifacts(
  taught: readonly EndingClaim[],
  dismissed: readonly EndingClaim[],
  seed: Measure,
  corpus: Measure,
  floor: number,
): Artifact[] {
  const out: Artifact[] = [];

  for (const c of taught) {
    const s = seed(c.ending);
    const d = corpus(c.ending);
    if (!s || !d) {
      out.push({ ending: c.ending, kind: 'absent', detail: `nothing ends this way in ${s ? 'the corpus' : 'the seed'}` });
      continue;
    }
    if (s.predicts !== d.predicts) {
      out.push({
        ending: c.ending,
        kind: 'taught-predicts-flip',
        detail: `predicts ${s.predicts} in the seed and ${d.predicts} across ${d.n} nouns in the corpus, so the rule is an artifact of the cut`,
      });
    }
    if (Math.round(d.accuracy) < floor) {
      out.push({
        ending: c.ending,
        kind: 'taught-below-floor',
        detail: `${Math.round(d.accuracy)}% over ${d.n} nouns in the corpus is under the ${floor}% floor, so it should not be taught`,
      });
    }
  }

  for (const c of dismissed) {
    const s = seed(c.ending);
    const d = corpus(c.ending);
    if (!s || !d) {
      out.push({ ending: c.ending, kind: 'absent', detail: `nothing ends this way in ${s ? 'the corpus' : 'the seed'}` });
      continue;
    }
    for (const [where, m] of [['seed', s], ['corpus', d]] as const) {
      if (Math.round(m.accuracy) >= floor) {
        out.push({
          ending: c.ending,
          kind: 'dismissed-clears-floor',
          detail: `${Math.round(m.accuracy)}% over ${m.n} nouns in the ${where} clears the ${floor}% floor, so it is no longer worthless`,
        });
      }
    }
  }

  return out;
}

/** The lines a publish prints. Empty when nothing moved, so a caller can print
 *  the whole thing unconditionally and stay silent on a clean run.
 *
 *  Artifacts are listed first and named as a content problem; figure moves are
 *  listed after with the exact command that fixes them. Neither aborts a
 *  publish: the seed it just wrote is correct either way, and a publish that
 *  died here would leave the database and git disagreeing. */
export function formatGenreDrift(moves: readonly FigureMove[], artifacts: readonly Artifact[]): string[] {
  if (!moves.length && !artifacts.length) return [];
  const out: string[] = [];

  if (artifacts.length) {
    out.push(`  ✖ a1.03: ${artifacts.length} ending(s) no longer hold across the whole corpus.`);
    for (const a of artifacts) out.push(`      -${a.ending}: ${a.detail}`);
    out.push('    This is a CONTENT problem, not a figure problem. Re-measuring hides it.');
    out.push('    An ending that fails here should be dropped from the lesson, the way');
    out.push('    -eur and -oire were before a1.03 shipped.');
  }

  if (moves.length) {
    if (artifacts.length) out.push('');
    out.push(`  ! a1.03: ${moves.length} printed figure(s) moved with the seed cut.`);
    for (const m of moves) {
      const acc = m.wasAcc === m.nowAcc ? '' : `, accuracy ${m.wasAcc}% -> ${m.nowAcc}%`;
      out.push(`      -${m.ending}: ${m.wasN} -> ${m.nowN} nouns${acc}`);
    }
    out.push('    The cards still say the old numbers. Re-measure, re-author, publish:');
    out.push('      pnpm tsx scripts/_a1_genre_remeasure.ts --write --why="<what moved the cut>"');
    out.push('      pnpm content:gender');
    out.push('      pnpm content:publish');
  }

  return out;
}
