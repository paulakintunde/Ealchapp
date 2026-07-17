// How a logged weakness is presented and where it routes.
//
// Home and profile both render this. They are the same claim about the same
// user, so they read one map rather than each keeping their own — profile's
// used to be a hardcoded pair rendered against no error log at all.
//
// Every import here is type-only: no runtime dependency on expo-router or
// zustand, because the caller passes its own navigation in.

import type { useRouter } from 'expo-router';
import type { WeakSkill } from '@/store/progress.logic';
import type { SheetKind } from '@/store/useUI';

type Nav = ReturnType<typeof useRouter>;

export type WeakRow = { glyph: string; title: string; open: () => void };

/** The display row for each skill in the closed `WeakSkill` taxonomy, bound to
 *  the caller's navigation.
 *
 *  Serif capitals, not IPA: ‿ (U+203F) and a combining tilde fall outside the
 *  display font's coverage and render as tofu.
 *
 *  Each skill goes to the thing it names — liaison to its sheet, nasales and
 *  genre to their lessons. The skills with no wired lesson yet (subjonctif,
 *  register, passé composé) send you to Camille rather than to a lesson about
 *  something else, which would be a lie. When a lesson lands for one of those,
 *  change it here and both screens follow. */
export function openWeakRows(router: Nav, openSheet: (k: SheetKind) => void): Record<WeakSkill, WeakRow> {
  return {
    liaison: { glyph: 'L', title: 'La liaison obligatoire', open: () => openSheet('grammar') },
    nasales: { glyph: 'N', title: 'Voyelles nasales · on, en', open: () => router.push('/lesson?key=sons3') },
    genre: { glyph: 'G', title: 'Le genre des noms', open: () => router.push('/lesson?key=a1_4') },
    subjonctif: { glyph: 'S', title: 'Le subjonctif présent', open: () => router.push('/chat') },
    register: { glyph: 'R', title: 'Le registre', open: () => router.push('/chat') },
    'passe-compose': { glyph: 'P', title: 'Le passé composé', open: () => router.push('/chat') },
  };
}
