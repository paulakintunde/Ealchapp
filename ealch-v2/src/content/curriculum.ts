// The honest remainder of the prototype curriculum file (CF-17).
//
// This file used to export the prototype's {title, sub} unit arrays
// (currSons/currA1/currA2), a2Subs, extendedLesson and totalUnits(). All of
// that was a second copy of what the corpus already carries: the Den renders
// content.units(track), unit ids are canonical in the DB, and a display copy
// here could only drift. The arrays now live, frozen, in
// ealch-admin/scripts/port-content.ts — the one-time port script that was
// their last consumer. The curriculum itself is authored against
// content_units and ships in the snapshot.
//
// What legitimately remains is the classifier below: app-side judgement about
// the closed weak-spot taxonomy, not content.

// Relative, not '@/store/...': this file is imported across the repo boundary
// by ealch-admin (transitively), and the admin tsconfig maps '@/*' to its OWN
// src/. Any file the admin imports must use relative imports only.
import type { WeakSkill } from '../store/progress.logic';

/** Maps a wired lesson (by corpus id) to the weak-spot skill a failed quiz
 *  question there belongs to. This is the classifier behind home's weak-spots
 *  section: a missed question in the nasales lesson is a nasales slip, honestly.
 *  Only lessons whose topic maps cleanly onto the closed weak-spot taxonomy
 *  appear here — a lesson with no honest mapping records nothing rather than
 *  guessing. Keyed by resolved lesson id (see LEGACY in app/lesson.tsx). */
export const lessonSkill: Record<string, WeakSkill> = {
  'sons.03.l1': 'nasales', // Les voyelles nasales
  'a1.04.l1': 'genre', // Les articles définis — gender is what they encode
};
