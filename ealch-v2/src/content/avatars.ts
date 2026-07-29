// The selectable coach-avatar roster (Settings → Appearance → Avatar). React
// Native's `require()` must be statically analyzable, so every option is
// require()'d by hand here rather than built from a data-driven path list.
//
// `brixOriginal` ships the very first Brix concept render on purpose (Paul's
// call), which still has the 4-stud top grid the shipped `brix` design was
// deliberately redesigned away from over LEGO-brick trade-dress risk (see the
// Brix Mascot amendment). Low risk as a single opt-in Settings option, but a
// real repeat of that visual, not just a documentation artifact — flagged
// here so it isn't rediscovered as a surprise later.
export type AvatarId = 'brix' | 'brixOriginal' | 'sel' | 'remy' | 'pousse';

export type AvatarOption = { id: AvatarId; name: string; src: number };

export const AVATARS: AvatarOption[] = [
  { id: 'brix', name: 'Brix', src: require('../../assets/avatars/brix.png') },
  { id: 'sel', name: 'Sel', src: require('../../assets/avatars/sel.png') },
  { id: 'remy', name: 'Remy', src: require('../../assets/avatars/remy.png') },
  { id: 'pousse', name: 'Pousse', src: require('../../assets/avatars/pousse.png') },
  { id: 'brixOriginal', name: 'Brix (original)', src: require('../../assets/avatars/brix-original.png') },
];

export const DEFAULT_AVATAR_ID: AvatarId = 'brix';

export function avatarSrc(id: string): number {
  return AVATARS.find((a) => a.id === id)?.src ?? AVATARS[0].src;
}

export function avatarName(id: string): string {
  return AVATARS.find((a) => a.id === id)?.name ?? AVATARS[0].name;
}
