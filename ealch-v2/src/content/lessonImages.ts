import type { ImageSourcePropType } from 'react-native';

// The bundled lesson illustration registry: imageRef string -> static asset.
// Metro resolves require() statically, so refs must be enumerated here; the
// seed can carry a ref before its art exists and the renderer simply shows
// nothing (see RichImage). Keys are the IMAGE_REF_RE-shaped strings authored
// in seed.json.
const REG: Record<string, ImageSourcePropType> = {
  'lessons/alphabet/cover.jpg': require('../../assets/lessons/alphabet/cover.jpg'),
  'lessons/alphabet/ambush.jpg': require('../../assets/lessons/alphabet/ambush.jpg'),
  'lessons/alphabet/ladder.jpg': require('../../assets/lessons/alphabet/ladder.jpg'),
  'lessons/alphabet/song.jpg': require('../../assets/lessons/alphabet/song.jpg'),
  'lessons/alphabet/theme-greetings.jpg': require('../../assets/lessons/alphabet/theme-greetings.jpg'),
  'lessons/alphabet/theme-food.jpg': require('../../assets/lessons/alphabet/theme-food.jpg'),
  'lessons/alphabet/theme-travel.jpg': require('../../assets/lessons/alphabet/theme-travel.jpg'),
  'lessons/alphabet/theme-people.jpg': require('../../assets/lessons/alphabet/theme-people.jpg'),
  'lessons/salutations/cover.jpg': require('../../assets/lessons/salutations/cover.jpg'),
  'lessons/salutations/story-bakery.jpg': require('../../assets/lessons/salutations/story-bakery.jpg'),
  'lessons/salutations/tu-vous.jpg': require('../../assets/lessons/salutations/tu-vous.jpg'),
  'lessons/salutations/ca-va.jpg': require('../../assets/lessons/salutations/ca-va.jpg'),
  'lessons/salutations/roundup.jpg': require('../../assets/lessons/salutations/roundup.jpg'),
  // sons.06.l1 · Les lettres muettes
  'lessons/muettes/cover.jpg': require('../../assets/lessons/muettes/cover.jpg'),
  'lessons/muettes/scene-boulangerie.jpg': require('../../assets/lessons/muettes/scene-boulangerie.jpg'),
  'lessons/muettes/scene-marche.jpg': require('../../assets/lessons/muettes/scene-marche.jpg'),
  'lessons/muettes/careful.jpg': require('../../assets/lessons/muettes/careful.jpg'),
  'lessons/muettes/ghost-h.jpg': require('../../assets/lessons/muettes/ghost-h.jpg'),
  'lessons/muettes/alarm-clock.jpg': require('../../assets/lessons/muettes/alarm-clock.jpg'),
  'lessons/muettes/the-stop.jpg': require('../../assets/lessons/muettes/the-stop.jpg'),
  'lessons/muettes/roundup.jpg': require('../../assets/lessons/muettes/roundup.jpg'),
  // sons.08.l1 · Rythme & intonation
  // Generated with `node scripts/gen-rythme-images.mjs` (ealch-admin).
  // Only register a ref once its file EXISTS: require() resolves statically, so
  // a missing asset breaks the bundle rather than degrading to no image.
  'lessons/rythme/errors.jpg': require('../../assets/lessons/rythme/errors.jpg'),
};

export function lessonImage(ref: string): ImageSourcePropType | undefined {
  return REG[ref];
}
